'use server'

import { revalidatePath } from 'next/cache'
import { kv } from '@vercel/kv'

import { auth } from '@/auth'
import { Character } from '@/lib/types'
import { nanoid } from 'nanoid'

export async function getCharacters(userId?: string | null) {
  if (!userId) {
    return []
  }

  try {
    const pipeline = kv.pipeline()
    const characters: string[] = await kv.zrange(`user:character:${userId}`, 0, -1, {
      rev: true
    })

    for (const character of characters) {
      pipeline.hgetall(character)
    }

    const results = await pipeline.exec()

    return results as Character[]
  } catch (error) {
    return []
  }
}

export async function removeCharacter({ id, path }: { id: string; path: string }) {
  const session = await auth()

  if (!session) {
    return {
      error: 'Unauthorized'
    }
  }

  const uid = await kv.hget<string>(`character:${id}`, 'userId')

  if (uid !== session?.user?.id) {
    return {
      error: 'Unauthorized'
    }
  }

  await kv.del(`character:${id}`)
  await kv.zrem(`user:character:${session.user.id}`, `character:${id}`)

  revalidatePath('/')
  return revalidatePath(path)
}

export async function getSharedCharacter(id: string) {
  const character = await kv.hgetall<Character>(`character:${id}`)

  if (!character || !character.sharePath) {
    return null
  }

  return character
}

export async function shareCharacter(character: Character) {
  const session = await auth()

  if (!session?.user?.id || session.user.id !== character.userId) {
    return {
      error: 'Unauthorized'
    }
  }

  const payload = {
    ...character,
    sharePath: `/share/${character.id}`
  }

  await kv.hmset(`character:${character.id}`, payload)

  return payload
}

export async function saveCharacter(character: Character) {
  const session = await auth()

  if (!session?.user?.id || session.user.id !== character.userId) {
    return {
      error: 'Unauthorized'
    }
  }

  const id = character.id ?? nanoid()

  const payload = {
    ...character,
    sharePath: `/share/${id}`
  }

  await kv.hmset(`character:${id}`, payload)
  await kv.zadd(`user:character:${session.user.id}`, {
    score: Date.now(),
    member: `character:${id}`
  })
  return payload
}
