import { nanoid } from '@/lib/utils';
import { Chat } from '@/components/chat';
import {
  initCharacterInput,
  initCharacterMessagesJSON,
} from '@/components/initMessages';

export const runtime = 'edge';

export default function IndexPage() {
  const id = nanoid();

  return (
    <>
      <Chat
        id={id}
        initialInput={initCharacterInput}
        initialMessages={initCharacterMessagesJSON}
      />
      {/* <Chat id={id} /> */}
    </>
  );
}
