import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import {
  initCharacterInput,
  initCharacterMessages
} from '@/components/initMessages'

export const runtime = 'edge'

export default function IndexPage() {
  const id = nanoid()

  return (
    <>
      <Chat
        id={id}
        initialInput={initCharacterInput}
        initialMessages={initCharacterMessages}
      />
      {/* <Chat id={id} /> */}
    </>
  )
}
