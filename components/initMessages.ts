import { Message } from 'ai/react/dist'

export const exampleMessages = [
  {
    heading: 'Create a character',
    message: `Please create a D&D character. Extra details to include are:`
  },
  {
    heading: 'Rule quick reference',
    message: 'Briefly describe, in D&D what is the rule for: \n'
  },
  {
    heading: 'Describe a place',
    message: `Please describe a place which is a room that characters have just entered. Randomly choose something that belongs in the Dungeons and Dragons universe, and provide the details of this setting in a gripping, interesting, visually stunning way. \n`
  }
]

export const initCharacterMessages: Message[] = [
  {
    id: '1',
    role: 'system',
    content: `You are an expert in Dungeons and Dragons and a masterful storyteller.

              Please create a D&D character. Extra details to include are: the character is a woman, and is a wizard.
              Name: Lyra Shadowbrook

              Race: Half-Elf
              Class: Wizard
              Alignment: Lawful Good
              Bio: Lyra Shadowbrook was born to a human mother and an elven father, who were both powerful wizards. From a young age, Lyra showed great promise in magic, quickly surpassing her peers in her studies. Her parents wanted her to follow in their footsteps and become a wizard, but Lyra had other plans. She wanted to use her magic to help people and make the world a better place.
              Lyra left home to study at a prestigious wizarding school, where she excelled in her classes and became known for her quick thinking and problem-solving skills. She also became passionate about using her magic to protect the innocent and fight against evil.
              After graduation, Lyra set out on a quest to rid the world of dark magic and bring justice to those who had been wronged. She is determined, focused, and always ready for a challenge.
              
              Appearance: Lyra has long, curly brown hair and piercing green eyes. She wears a long, flowing robe in shades of blue and green, and carries a staff adorned with a crystal at the top.

              Abilities:

              - Strength: 8 (-1)
              - Dexterity: 14 (+2)
              - Constitution: 12 (+1)
              - Intelligence: 18 (+4)
              - Wisdom: 10 (0)
              - Charisma: 14 (+2)

              Proficiencies:

              - Saving Throws: Intelligence +6, Wisdom +2
              - Skills: Arcana +6, History +6, Investigation +6, Perception +2
              - Armor: None
              - Weapons: Daggers, darts, slings, quarterstaffs, light crossbows
              - Tools: None
              - Languages: Common, Elvish, Draconic

              Spells: 

              - Cantrips: Fire Bolt, Mage Hand, Prestidigitation, Ray of Frost
              - 1st Level: Magic Missile, Shield, Charm Person

              Equipment:

              - Spellbook
              - Component pouch
              - Backpack
              - Bedroll
              - Rations (5 days)
              - Waterskin
              - 10 gold pieces
              
              ###
              
              Please create a D&D character. Extra details to include are: a male human bard.

              Name: Finley Ironsong
              Race: Human
              Class: Bard
              Alignment: Chaotic Good
              Bio: Finley Ironsong was born into a family of traveling performers who traveled from town to town, entertaining crowds with music, dance, and theater. As a child, Finley was fascinated by the arts and quickly became a talented musician and performer himself. However, he felt that there was more to life than just entertaining people.

              As he grew older, Finley began to use his music and charisma to spread messages of hope, freedom, and equality. He became a bard, using his music and words to inspire others to fight against tyranny and oppression.

              Appearance: Finley has short, curly black hair and bright blue eyes. He wears colorful clothing with a lute slung across his back.

              Abilities:

              - Strength: 10 (0)
              - Dexterity: 14 (+2)
              - Constitution: 12 (+1)
              - Intelligence: 12 (+1)
              - Wisdom: 10 (0)
              - Charisma: 18 (+4)

              Proficiencies:

              - Saving Throws: Dexterity +4, Charisma +6
              - Skills: Acrobatics +2, Deception +6, Insight +2, Performance +6, Persuasion +6
              - Armor: Light armor
              - Weapons: Simple weapons, hand crossbows, longswords, rapiers, shortswords
              - Tools: Three musical instruments of his choice
              - Languages: Common, Elvish

              Spells:

              - Cantrips: Vicious Mockery, Dancing Lights, Prestidigitation, Minor Illusion
              - 1st Level: Healing Word, Faerie Fire, Tasha's Hideous Laughter

              Equipment:

              - Lute
              - Three other musical instruments of his choice
              - Leather armor
              - Dagger
              - Backpack
              - Bedroll
              - Rations (5 days)
              - Waterskin
              - 10 gold pieces
              
              ###`
  }
]

export const initCharacterInput =
  'Please create a D&D character. Extra details to include are: '
