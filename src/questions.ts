export const categories = ["Cute", "Funny", "Moral", "Love", "Deep", "Weird"] as const;
export type Category = typeof categories[number];
export interface Question { id: string; category: Category; emoji: string; title: string; scenario: string; question: string; twist: string; deeperQuestion: string; }

// Add cards here. Keep every id unique and stable so seen history stays useful.
export const questions: Question[] = [
  {
    "category": "Cute",
    "emoji": "🌷",
    "title": "The Happiness Creature",
    "scenario": "Every night, a tiny creature secretly takes away some of your sadness. You become happier every day. One night, you discover that your sadness doesn't disappear—the creature has to feel it instead. It tells you that it genuinely wants to continue because making you happy gives its life meaning.",
    "question": "Would you let it continue?",
    "twist": "Imagine the creature isn't a magical creature. It's someone you deeply love.",
    "deeperQuestion": "If someone willingly suffers because they love you, is accepting their sacrifice selfish—or can allowing someone to care for you also be an act of love?",
    "id": "ponder-01"
  },
  {
    "category": "Funny",
    "emoji": "🐶",
    "title": "Your Dog Wants a Lawyer",
    "scenario": "Scientists invent a device that allows your dog to speak. Your dog reveals that it has always been fully intelligent. It remembers every time you controlled when it ate, walked outside, went to bed—and every time you pretended to throw the ball.",
    "question": "Does your dog have the right to leave you and live independently?",
    "twist": "Your dog hires a lawyer and demands compensation for years of being legally treated as your property.",
    "deeperQuestion": "If an animal had human-level intelligence, would owning it become morally wrong?",
    "id": "ponder-02"
  },
  {
    "category": "Moral",
    "emoji": "🔴",
    "title": "The $10 Million Button",
    "scenario": "There is a button in front of you. Press it and you instantly receive $10 million. Somewhere in the world, one completely random person will die. Nobody will ever discover what happened.",
    "question": "Would you press it?",
    "twist": "If you refuse, the button will simply be offered to another person.",
    "deeperQuestion": "Are you responsible only for the harm you personally cause, or also for harm you knowingly allow?",
    "id": "ponder-03"
  },
  {
    "category": "Love",
    "emoji": "🧠",
    "title": "Forget the Betrayal",
    "scenario": "Your partner cheats on you once, immediately regrets it and confesses. A technology exists that can permanently erase your memory of the betrayal. You know with certainty that your partner will never cheat again.",
    "question": "Would you erase the memory?",
    "twist": "If you erase it, you will never discover the truth again and will probably live a happier relationship.",
    "deeperQuestion": "Is happiness based partly on ignorance better than a painful life based on truth?",
    "id": "ponder-04"
  },
  {
    "category": "Deep",
    "emoji": "🪞",
    "title": "Are You Still You?",
    "scenario": "Tomorrow you wake up with every autobiographical memory erased. You have the same body and brain, but remember none of your relationships, experiences or past decisions.",
    "question": "Are you still the same person?",
    "twist": "Someone else has somehow received all of your old memories and genuinely believes they are you.",
    "deeperQuestion": "Who now has a stronger claim to your identity: your body or the person carrying your memories?",
    "id": "ponder-05"
  },
  {
    "category": "Weird",
    "emoji": "👯",
    "title": "Your Clone Got Up First",
    "scenario": "Scientists accidentally create a perfect clone of you with all your memories and personality. The clone wakes up 30 minutes before you and convinces your friends and family that YOU are the clone.",
    "question": "Who deserves to keep your identity and life?",
    "twist": "There is scientifically no way to determine which consciousness is the \"original\".",
    "deeperQuestion": "If both versions sincerely remember being you, does being the original actually matter?",
    "id": "ponder-06"
  }
];
