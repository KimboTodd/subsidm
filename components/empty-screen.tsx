import { UseChatHelpers } from 'ai/react';

import { Button } from '@/components/ui/button';
import { ExternalLink } from '@/components/external-link';
import { IconArrowRight } from '@/components/ui/icons';
import { exampleMessages } from './initMessages';

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
  );
}
