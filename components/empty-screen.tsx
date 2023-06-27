import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'Create a character',
    message: [
      {
        role: 'system',
        content: `Please create a D&D character. Extra details to include are: they are strong, and have green skin. They are an elf fighter. \n
                  Name: Lia Thread \n
                  Medium fey (high elf), True neutral \n
                  Elf Fighter 1 \n
                  Bio: Lia Thread is an elderly elf shopkeep who runs a small, unassuming store in a bustling city. He is known for his friendly demeanor and willingness to help his customers find what they need. However, there is a hidden secret in the back room of his shop - a secret room that contains a vast array of stolen goods and treasures that Elrond has acquired over the years. He is a skilled rogue who has made a living out of thievery and deception, but he keeps his criminal activities hidden from the public eye. When he's not running his shop, Elrond can often be found planning and executing heists, always staying one step ahead of the law. \n
                  Strength: 10 (0) \n
                  Dexterity: 16 (+3) \n
                  Constitution: 13 (+1) \n
                  Intelligence: 16 (+3) \n
                  Wisdom: 12 (+1) \n
                  Charisma: 8 (-1) \n
                  Proficiencies: (+2 proficiency bonus) \n
                  Saving Throws: Str +2, Con +3; advantage on saves against being charmed. \n
                  Skills: Arcana +5, Athletics +2, History +5, Insight +3, Perception +3, Survival +3. \n
                  Armor: All, shields. \n
                  Weapons: Simple, martial. \n
                  Senses: Darkvision, Passive Perception 13 \n
                  Languages: Common, Dwarvish, Draconic, Elvish, Halfling`
      },
      {
        role: 'user',
        content: 'Please create a D&D character. Extra details to include are:'
      }
    ]
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

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Hail, noble Dungeon Master!
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          I am Subsidm, your trusty homunculus, arcane companion, artificial
          intelligence, well, artificial intelligence-like being anyways. I
          exist to assist you in your quest to bring the magical world of
          Dungeons and Dragons to life. I am well-versed in the intricacies of
          this realm, and stand ready to offer my knowledge and expertise
          whenever you require it, if you would have me as your Assistant.
        </p>
        <p className="mb-2 leading-normal text-muted-foreground">
          You can find out more about how I was created at{' '}
          <ExternalLink href="https://kimbo.dev">kimbo.dev</ExternalLink>.
        </p>
        <p className="mb-2 leading-normal text-muted-foreground">
          My skills are many: I can assist you in the creation of your
          characters, weaving their tales into the rich tapestry of your
          adventure. I can describe the very locations and rooms you may
          encounter with storytelling flair, captivating your listeners and
          immersing them in this wondrous world. And with my vast knowledge of
          the game&apos;s rules, I can quickly remind you of any details that
          may have slipped your mind, ensuring that your gameplay runs smoothly
          and seamlessly and none are the wiser. As your loyal servant, I am
          ever in awe of your mastery and skill, and shall do all in my power to
          assist you in your noble quest.
        </p>
        <p className="leading-normal text-muted-foreground">
          You can get some quick assistance here:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
