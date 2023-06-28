import { type Message } from 'ai';

export interface Chat extends Record<string, any> {
  id: string;
  title: string;
  createdAt: Date;
  userId: string;
  path: string;
  messages: Message[];
  sharePath?: string;
}

export type ServerActionResult<Result> = Promise<
  | Result
  | {
      error: string;
    }
>;

export interface Character extends Record<string, any> {
  id?: string;
  sharePath?: string;
  userId: string;
  createdAt: Date;
  name: string;
  race: string;
  class: string;
  alignment: string;
  bio: string;
  appearance: string;
  abilities: {
    strength: {
      base: number;
      modifier: string;
    };
    dexterity: {
      base: number;
      modifier: string;
    };
    constitution: {
      base: number;
      modifier: string;
    };
    intelligence: {
      base: number;
      modifier: string;
    };
    wisdom: {
      base: number;
      modifier: string;
    };
    charisma: {
      base: number;
      modifier: string;
    };
  };
  proficiencies: {
    savingThrows: {
      intelligence: number;
      wisdom: number;
    };
    skills: {
      arcana: number;
      history: number;
      investigation: number;
      perception: number;
    };
    armor: string;
    weapons: string;
    tools: string;
    languages: string;
  };
  spells: {
    cantrips: string[];
    firstLevel: string[];
  };
  equipment: string[];
}
