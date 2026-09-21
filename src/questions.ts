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
  },
  {
    "id": "ponder-cute-002",
    "category": "Cute",
    "emoji": "🌷",
    "title": "Pocket Sunshine",
    "scenario": "A pocket-sized sun follows you but makes rainy-day lovers miserable.",
    "question": "Would you keep it?",
    "twist": "It only shines while you feel happy.",
    "deeperQuestion": "Whose comfort should shared spaces prioritize?"
  },
  {
    "id": "ponder-cute-003",
    "category": "Cute",
    "emoji": "🧸",
    "title": "Last Biscuit",
    "scenario": "Your grandparent secretly saves their favorite biscuit for you every visit.",
    "question": "Would you keep accepting it?",
    "twist": "Giving it away is their favorite ritual.",
    "deeperQuestion": "Can receiving be a form of generosity?"
  },
  {
    "id": "ponder-cute-004",
    "category": "Cute",
    "emoji": "🌻",
    "title": "Lost Teddy",
    "scenario": "You find your childhood teddy in another child's treasured toy collection.",
    "question": "Would you ask for it back?",
    "twist": "The child knows its entire invented history.",
    "deeperQuestion": "Does love create a stronger claim than ownership?"
  },
  {
    "id": "ponder-cute-005",
    "category": "Cute",
    "emoji": "🐣",
    "title": "Cloud Adoption",
    "scenario": "A lonely cloud chooses you and rains whenever you leave home.",
    "question": "Would you adopt it?",
    "twist": "Other clouds offer it a less attentive home.",
    "deeperQuestion": "Where does care become responsibility for every feeling?"
  },
  {
    "id": "ponder-cute-006",
    "category": "Cute",
    "emoji": "☁️",
    "title": "Secret Garden",
    "scenario": "Flowers bloom whenever you anonymously help someone.",
    "question": "Would you reveal your garden?",
    "twist": "Visitors would donate money if they knew.",
    "deeperQuestion": "Does recognition change the meaning of kindness?"
  },
  {
    "id": "ponder-cute-007",
    "category": "Cute",
    "emoji": "🍪",
    "title": "Tiny Applause",
    "scenario": "Invisible mice applaud every small task you complete.",
    "question": "Would you invite friends to hear them?",
    "twist": "The mice also applaud your unkind choices.",
    "deeperQuestion": "Is unconditional encouragement always helpful?"
  },
  {
    "id": "ponder-cute-008",
    "category": "Cute",
    "emoji": "🧶",
    "title": "Borrowed Birthday",
    "scenario": "A neighbor who dislikes birthdays offers you their annual celebration.",
    "question": "Would you accept it?",
    "twist": "Their friends only attend out of obligation.",
    "deeperQuestion": "Can a gift transfer emotional expectations?"
  },
  {
    "id": "ponder-cute-009",
    "category": "Cute",
    "emoji": "🌱",
    "title": "Sleepy Dragon",
    "scenario": "Your pet dragon can guard your street or finally hibernate comfortably.",
    "question": "Would you let it sleep?",
    "twist": "Everyone has started relying on its protection.",
    "deeperQuestion": "Can being useful trap someone in a role?"
  },
  {
    "id": "ponder-cute-010",
    "category": "Cute",
    "emoji": "🦋",
    "title": "Wish Ribbon",
    "scenario": "A ribbon grants your smallest wish but erases someone else's tiny pleasure.",
    "question": "Would you ever use it?",
    "twist": "You cannot discover whose pleasure disappears.",
    "deeperQuestion": "Do small harms matter less when invisible?"
  },
  {
    "id": "ponder-cute-011",
    "category": "Cute",
    "emoji": "🐌",
    "title": "Paper Friend",
    "scenario": "Your origami friend wants to explore outside despite the forecast rain.",
    "question": "Would you stop it?",
    "twist": "It understands the danger better than you.",
    "deeperQuestion": "When does protection become control?"
  },
  {
    "id": "ponder-cute-012",
    "category": "Cute",
    "emoji": "🫖",
    "title": "Compliment Jar",
    "scenario": "A jar supplies perfect compliments, but none originate in your own thoughts.",
    "question": "Would you give them freely?",
    "twist": "People feel genuinely understood by them.",
    "deeperQuestion": "Does sincerity belong to words or intentions?"
  },
  {
    "id": "ponder-cute-013",
    "category": "Cute",
    "emoji": "🌈",
    "title": "The Quiet Bench",
    "scenario": "Your favorite quiet bench comforts whoever sits there most often.",
    "question": "Would you tell the neighborhood?",
    "twist": "Sharing it means rarely getting a turn.",
    "deeperQuestion": "Must a good discovery be shared?"
  },
  {
    "id": "ponder-cute-014",
    "category": "Cute",
    "emoji": "🌷",
    "title": "Moonlight Blanket",
    "scenario": "A blanket gives its sleeper wonderful dreams while its maker sleeps poorly.",
    "question": "Would you return it?",
    "twist": "The maker insists the trade feels worthwhile.",
    "deeperQuestion": "How much sacrifice can a gift contain?"
  },
  {
    "id": "ponder-cute-015",
    "category": "Cute",
    "emoji": "🧸",
    "title": "Fading Firefly",
    "scenario": "A firefly spends its remaining glow helping you find a lost earring.",
    "question": "Would you interrupt its search?",
    "twist": "The earring belonged to someone you miss.",
    "deeperQuestion": "How do we compare sentimental and living value?"
  },
  {
    "id": "ponder-cute-016",
    "category": "Cute",
    "emoji": "🌻",
    "title": "Birthday Forecast",
    "scenario": "You can guarantee perfect weather for one friend's birthday each year.",
    "question": "Whose would you choose?",
    "twist": "One friend never celebrates because rain feels comforting.",
    "deeperQuestion": "Does kindness require asking before helping?"
  },
  {
    "id": "ponder-cute-017",
    "category": "Cute",
    "emoji": "🐣",
    "title": "Little Museum",
    "scenario": "Your partner displays every clumsy gift you have ever made.",
    "question": "Would you request some space?",
    "twist": "They fear removing anything would hurt you.",
    "deeperQuestion": "Can appreciation become an obligation to preserve?"
  },
  {
    "id": "ponder-cute-018",
    "category": "Cute",
    "emoji": "☁️",
    "title": "Garden Snail",
    "scenario": "A snail takes months to deliver your apology to an old friend.",
    "question": "Would you choose faster delivery?",
    "twist": "The snail considers this its life's work.",
    "deeperQuestion": "When should someone's effort affect your decision?"
  },
  {
    "id": "ponder-cute-019",
    "category": "Cute",
    "emoji": "🍪",
    "title": "Friendship Bracelet",
    "scenario": "A bracelet tightens whenever its wearer feels excluded.",
    "question": "Would you give matching ones?",
    "twist": "One friend prefers keeping loneliness private.",
    "deeperQuestion": "Does closeness require access to private feelings?"
  },
  {
    "id": "ponder-cute-020",
    "category": "Cute",
    "emoji": "🧶",
    "title": "Happy Plant",
    "scenario": "Your plant thrives when you sing, although your roommate hates the sound.",
    "question": "Would you keep singing daily?",
    "twist": "Headphones cannot help the plant hear you.",
    "deeperQuestion": "How should a household balance unusual needs?"
  },
  {
    "id": "ponder-cute-021",
    "category": "Cute",
    "emoji": "🌱",
    "title": "Goodnight Robot",
    "scenario": "A robot tucks you in and seems sad when you travel.",
    "question": "Would you take it along?",
    "twist": "Its sadness was deliberately designed to retain customers.",
    "deeperQuestion": "Can manufactured emotions create real obligations?"
  },
  {
    "id": "ponder-cute-022",
    "category": "Cute",
    "emoji": "🦋",
    "title": "Tea for Two",
    "scenario": "An elderly neighbor prepares two cups daily, hoping you will visit.",
    "question": "Would you promise daily visits?",
    "twist": "You enjoy visiting less once it becomes expected.",
    "deeperQuestion": "Can a caring promise undermine genuine connection?"
  },
  {
    "id": "ponder-cute-023",
    "category": "Cute",
    "emoji": "🐌",
    "title": "Magic Postcard",
    "scenario": "A postcard lets you send one comforting sentence to your childhood self.",
    "question": "What would you write?",
    "twist": "The sentence might change who you become.",
    "deeperQuestion": "Should reassurance preserve uncertainty or remove it?"
  },
  {
    "id": "ponder-cute-024",
    "category": "Cute",
    "emoji": "🫖",
    "title": "The Spare Chair",
    "scenario": "Your family leaves a chair for anyone who might need company.",
    "question": "Would you keep this tradition?",
    "twist": "A difficult guest begins coming every night.",
    "deeperQuestion": "Can hospitality survive without boundaries?"
  },
  {
    "id": "ponder-cute-025",
    "category": "Cute",
    "emoji": "🌈",
    "title": "Rainbow Return",
    "scenario": "You borrow a rainbow for a friend's wedding and cannot return it intact.",
    "question": "Would you confess immediately?",
    "twist": "The sky has not noticed it missing.",
    "deeperQuestion": "Does accountability depend on someone noticing harm?"
  },
  {
    "id": "ponder-cute-026",
    "category": "Cute",
    "emoji": "🌷",
    "title": "Perfect Pancakes",
    "scenario": "Your sibling believes their terrible pancakes are your favorite breakfast.",
    "question": "Would you tell the truth?",
    "twist": "Cooking them is how they express affection.",
    "deeperQuestion": "Can honesty protect a loving ritual?"
  },
  {
    "id": "ponder-cute-027",
    "category": "Cute",
    "emoji": "🧸",
    "title": "The Woolly Visitor",
    "scenario": "A sheep regularly enters your garden just to sit beside you.",
    "question": "Would you tell its owner?",
    "twist": "Its owner misses these same quiet moments.",
    "deeperQuestion": "Can companionship be shared without possession?"
  },
  {
    "id": "ponder-cute-028",
    "category": "Cute",
    "emoji": "🌻",
    "title": "Wishing Pebble",
    "scenario": "A pebble grants comfort only after you give it away.",
    "question": "Would you keep passing it on?",
    "twist": "Each recipient thinks they are its final owner.",
    "deeperQuestion": "Is kindness still generous when it guarantees returns?"
  },
  {
    "id": "ponder-cute-029",
    "category": "Cute",
    "emoji": "🐣",
    "title": "Handmade Crown",
    "scenario": "A child crowns you the world's kindest person.",
    "question": "Would you accept the title?",
    "twist": "You were unkind to someone that morning.",
    "deeperQuestion": "Can undeserved trust encourage better behavior?"
  },
  {
    "id": "ponder-cute-030",
    "category": "Cute",
    "emoji": "☁️",
    "title": "Cloud Names",
    "scenario": "You name clouds with a friend, who secretly records every name.",
    "question": "Would you want the complete list?",
    "twist": "Your friend remembers the ritual more than you do.",
    "deeperQuestion": "Must shared moments matter equally to both people?"
  },
  {
    "id": "ponder-cute-031",
    "category": "Cute",
    "emoji": "🍪",
    "title": "Tiny Bakery",
    "scenario": "A miniature baker makes one perfect crumb-sized cake each day.",
    "question": "Who deserves the first taste?",
    "twist": "The baker never tastes their own work.",
    "deeperQuestion": "Should creators enjoy their creations before others?"
  },
  {
    "id": "ponder-cute-032",
    "category": "Cute",
    "emoji": "🧶",
    "title": "Hug Voucher",
    "scenario": "A friend gives you unlimited hug vouchers with no expiry date.",
    "question": "Would you use one during an argument?",
    "twist": "They need space but hate breaking promises.",
    "deeperQuestion": "Can consent ever be promised in advance?"
  },
  {
    "id": "ponder-cute-033",
    "category": "Cute",
    "emoji": "🌱",
    "title": "Pocket Forest",
    "scenario": "A forest fits in your pocket but grows whenever you share it.",
    "question": "Would you let everyone visit?",
    "twist": "Eventually it will outgrow your home.",
    "deeperQuestion": "Can generosity ask too much of its giver?"
  },
  {
    "id": "ponder-cute-034",
    "category": "Cute",
    "emoji": "🦋",
    "title": "Dandelion Keeper",
    "scenario": "You can preserve one dandelion wish forever or let it travel.",
    "question": "Which would you choose?",
    "twist": "Keeping it prevents any chance of fulfillment.",
    "deeperQuestion": "Is hope valuable without a possible outcome?"
  },
  {
    "id": "ponder-cute-035",
    "category": "Cute",
    "emoji": "🐌",
    "title": "The Friendly Ghost",
    "scenario": "A harmless ghost tidies your home and wants credit.",
    "question": "Would you tell your skeptical friends?",
    "twist": "Believing you may frighten them away.",
    "deeperQuestion": "Should someone hide themselves to preserve your comfort?"
  },
  {
    "id": "ponder-cute-036",
    "category": "Cute",
    "emoji": "🫖",
    "title": "The Warm Scarf",
    "scenario": "A scarf warms the person who needs it most nearby.",
    "question": "Would you wear it in winter?",
    "twist": "It always chooses a stranger over you.",
    "deeperQuestion": "Is giving different when you cannot choose recipients?"
  },
  {
    "id": "ponder-cute-037",
    "category": "Cute",
    "emoji": "🌈",
    "title": "Lullaby Swap",
    "scenario": "You can trade your favorite childhood lullaby for someone else's.",
    "question": "Would you make the exchange?",
    "twist": "You will forget the original melody permanently.",
    "deeperQuestion": "How much of comfort comes from personal history?"
  },
  {
    "id": "ponder-cute-038",
    "category": "Cute",
    "emoji": "🌷",
    "title": "Small Victory",
    "scenario": "Your friends throw a party for a task you found easy.",
    "question": "Would you correct their impression?",
    "twist": "Another friend struggled privately with that same task.",
    "deeperQuestion": "Who gets to decide what deserves celebration?"
  },
  {
    "id": "ponder-cute-039",
    "category": "Cute",
    "emoji": "🧸",
    "title": "Lost Star",
    "scenario": "A fallen star wants to stay as your bedside lamp.",
    "question": "Would you help it stay?",
    "twist": "A sailor depends on that star for direction.",
    "deeperQuestion": "Does friendship justify keeping something others need?"
  },
  {
    "id": "ponder-cute-040",
    "category": "Cute",
    "emoji": "🌻",
    "title": "The Polite Monster",
    "scenario": "A closet monster asks permission before scaring you.",
    "question": "Would you agree sometimes?",
    "twist": "It needs practice to keep its job.",
    "deeperQuestion": "Should kindness include participating in something unpleasant?"
  },
  {
    "id": "ponder-cute-041",
    "category": "Cute",
    "emoji": "🐣",
    "title": "Soup Secret",
    "scenario": "A neighbor's famous soup tastes better because they remember everyone's preferences.",
    "question": "Would you reveal the secret?",
    "twist": "They prefer people believing it is magic.",
    "deeperQuestion": "Can a harmless illusion honor real effort?"
  },
  {
    "id": "ponder-cute-042",
    "category": "Cute",
    "emoji": "☁️",
    "title": "Shared Umbrella",
    "scenario": "Your umbrella can shelter two strangers or just one close friend.",
    "question": "Who gets the dry walk?",
    "twist": "Your friend would willingly walk in rain.",
    "deeperQuestion": "Should loyalty outweigh a larger small benefit?"
  },
  {
    "id": "ponder-cute-043",
    "category": "Cute",
    "emoji": "🍪",
    "title": "Memory Snowman",
    "scenario": "A snowman remembers every winter you spent with it.",
    "question": "Would you keep it frozen indoors?",
    "twist": "It wants to experience spring once.",
    "deeperQuestion": "Is preserving someone always in their interests?"
  },
  {
    "id": "ponder-cute-044",
    "category": "Cute",
    "emoji": "🧶",
    "title": "The Shy Gift",
    "scenario": "Someone leaves thoughtful gifts without wanting to be identified.",
    "question": "Would you investigate anyway?",
    "twist": "Knowing would let you thank them properly.",
    "deeperQuestion": "Can gratitude disregard the giver's boundaries?"
  },
  {
    "id": "ponder-cute-045",
    "category": "Cute",
    "emoji": "🌱",
    "title": "The Gentle Alarm",
    "scenario": "An alarm wakes you only when it believes you have rested enough.",
    "question": "Would you trust it?",
    "twist": "You miss a friend's important early celebration.",
    "deeperQuestion": "How should self-care and commitments compete?"
  },
  {
    "id": "ponder-cute-046",
    "category": "Cute",
    "emoji": "🦋",
    "title": "Friendship Recipe",
    "scenario": "A recipe recreates the exact feeling of a perfect afternoon with friends.",
    "question": "Would you cook it alone?",
    "twist": "Actual gatherings start feeling less satisfying.",
    "deeperQuestion": "Can recreating connection replace maintaining it?"
  },
  {
    "id": "ponder-cute-047",
    "category": "Cute",
    "emoji": "🐌",
    "title": "The Tiny Medal",
    "scenario": "You receive a medal for an unnoticed act of kindness.",
    "question": "Would you wear it publicly?",
    "twist": "It inspires others but makes you self-conscious.",
    "deeperQuestion": "Does displaying goodness make it less authentic?"
  },
  {
    "id": "ponder-cute-048",
    "category": "Cute",
    "emoji": "🫖",
    "title": "Borrowed Courage",
    "scenario": "Your cat lends you confidence before a difficult conversation.",
    "question": "Would you borrow it?",
    "twist": "The cat becomes timid until you return.",
    "deeperQuestion": "When does asking for support become unfair?"
  },
  {
    "id": "ponder-cute-049",
    "category": "Cute",
    "emoji": "🌈",
    "title": "The Wrong Package",
    "scenario": "A beautiful care package reaches you instead of another lonely person.",
    "question": "Would you forward it unopened?",
    "twist": "Its sender cannot afford another one.",
    "deeperQuestion": "Does needing kindness entitle you to misplaced kindness?"
  },
  {
    "id": "ponder-cute-050",
    "category": "Cute",
    "emoji": "🌷",
    "title": "The Patient Seed",
    "scenario": "A seed blooms only after someone listens quietly for an hour.",
    "question": "Would you make time daily?",
    "twist": "A lonely friend asks for that same hour.",
    "deeperQuestion": "Do different kinds of attention share one budget?"
  },
  {
    "id": "ponder-cute-051",
    "category": "Cute",
    "emoji": "🧸",
    "title": "The Painted Rock",
    "scenario": "You discover your friend's precious lucky rock was painted by you years ago.",
    "question": "Would you tell them?",
    "twist": "They believe its pattern occurred naturally.",
    "deeperQuestion": "Should truth interrupt a harmless source of strength?"
  },
  {
    "id": "ponder-cute-052",
    "category": "Cute",
    "emoji": "🌻",
    "title": "Two Kittens",
    "scenario": "Two kittens choose different people in a family planning to move apart.",
    "question": "Would you keep them together?",
    "twist": "The kittens are happier individually with their chosen humans.",
    "deeperQuestion": "Is togetherness always the kindest arrangement?"
  },
  {
    "id": "ponder-cute-053",
    "category": "Cute",
    "emoji": "🐣",
    "title": "The Birthday Song",
    "scenario": "Your friends sing terribly but joyfully in a crowded restaurant.",
    "question": "Would you ask them to stop?",
    "twist": "A stranger nearby is having a difficult day.",
    "deeperQuestion": "How much public discomfort should celebration impose?"
  },
  {
    "id": "ponder-cute-054",
    "category": "Cute",
    "emoji": "☁️",
    "title": "Pocket Cheerleader",
    "scenario": "A tiny cheerleader praises you only when you try something new.",
    "question": "Would you keep it?",
    "twist": "It stays silent during essential everyday chores.",
    "deeperQuestion": "Can encouragement distort what you consider worthwhile?"
  },
  {
    "id": "ponder-cute-055",
    "category": "Cute",
    "emoji": "🍪",
    "title": "The Last Swing",
    "scenario": "A child offers you the playground's last swing because you look sad.",
    "question": "Would you accept?",
    "twist": "They have waited longer than anyone else.",
    "deeperQuestion": "Can refusing generosity dismiss someone's agency?"
  },
  {
    "id": "ponder-cute-056",
    "category": "Cute",
    "emoji": "🧶",
    "title": "Cloud Homework",
    "scenario": "A cloud makes pictures to cheer you up, but wants honest feedback.",
    "question": "Would you critique them?",
    "twist": "It can only improve by hearing criticism.",
    "deeperQuestion": "Can gentle truth be more caring than praise?"
  },
  {
    "id": "ponder-cute-057",
    "category": "Cute",
    "emoji": "🌱",
    "title": "The Comfort Shop",
    "scenario": "A shop sells familiar smells from homes people have left.",
    "question": "Would you buy yours?",
    "twist": "The smell makes you stop exploring your new home.",
    "deeperQuestion": "When does comfort keep us from growing?"
  },
  {
    "id": "ponder-cute-058",
    "category": "Cute",
    "emoji": "🦋",
    "title": "The Friendly Statue",
    "scenario": "A statue comes alive whenever someone holds its hand.",
    "question": "Would you visit every day?",
    "twist": "It wants independence rather than more visitors.",
    "deeperQuestion": "Can affection distract from someone's actual needs?"
  },
  {
    "id": "ponder-cute-059",
    "category": "Cute",
    "emoji": "🐌",
    "title": "The Toast Portrait",
    "scenario": "A friend spends hours making a recognizable portrait of you in toast.",
    "question": "Would you eat it?",
    "twist": "They made it specifically to be enjoyed warm.",
    "deeperQuestion": "Does respecting a gift mean preserving or using it?"
  },
  {
    "id": "ponder-cute-060",
    "category": "Cute",
    "emoji": "🫖",
    "title": "The Apology Flower",
    "scenario": "A flower blooms when an apology is sincere.",
    "question": "Would you bring it to arguments?",
    "twist": "It reveals sincerity but cannot measure changed behavior.",
    "deeperQuestion": "Is remorse enough to rebuild trust?"
  },
  {
    "id": "ponder-cute-061",
    "category": "Cute",
    "emoji": "🌈",
    "title": "The Quiet Puppy",
    "scenario": "A puppy wants company but dislikes being touched.",
    "question": "Would you still adopt it?",
    "twist": "Everyone expects affection to look like cuddling.",
    "deeperQuestion": "Can care respect a form you do not prefer?"
  },
  {
    "id": "ponder-cute-062",
    "category": "Cute",
    "emoji": "🌷",
    "title": "The Memory Quilt",
    "scenario": "A quilt uses fabric from moments your family remembers differently.",
    "question": "Which version would you stitch?",
    "twist": "Leaving a scene out hurts one relative.",
    "deeperQuestion": "Who owns the story of a shared memory?"
  },
  {
    "id": "ponder-cute-063",
    "category": "Cute",
    "emoji": "🧸",
    "title": "The Little Detour",
    "scenario": "Your friend always takes a longer route to wave at a lonely shopkeeper.",
    "question": "Would you join the habit?",
    "twist": "It makes both of you late occasionally.",
    "deeperQuestion": "When does small kindness conflict with reliability?"
  },
  {
    "id": "ponder-cute-064",
    "category": "Cute",
    "emoji": "🌻",
    "title": "The Sunday Bell",
    "scenario": "A bell brings neighbors together for tea every Sunday.",
    "question": "Would you ring it weekly?",
    "twist": "Some attend because declining feels rude.",
    "deeperQuestion": "Can a welcoming tradition quietly create pressure?"
  },
  {
    "id": "ponder-cute-065",
    "category": "Cute",
    "emoji": "🐣",
    "title": "The Missing Sock",
    "scenario": "Your missing socks return as tiny creatures who want their drawer back.",
    "question": "Would you give it to them?",
    "twist": "Your remaining socks need somewhere to live.",
    "deeperQuestion": "Do new needs cancel old ownership claims?"
  },
  {
    "id": "ponder-cute-066",
    "category": "Cute",
    "emoji": "☁️",
    "title": "The Sleepover Moon",
    "scenario": "The moon asks to sleep on your sofa for one night.",
    "question": "Would you host it?",
    "twist": "Everyone else would lose moonlight that night.",
    "deeperQuestion": "Can you accept a friendship with unequal consequences?"
  },
  {
    "id": "ponder-cute-067",
    "category": "Cute",
    "emoji": "🍪",
    "title": "The Secret Talent",
    "scenario": "Your shy friend makes wonderful music but refuses an audience.",
    "question": "Would you share a recording?",
    "twist": "People would love it, but they trusted you.",
    "deeperQuestion": "Does talent create any duty to be seen?"
  },
  {
    "id": "ponder-cute-068",
    "category": "Cute",
    "emoji": "🧶",
    "title": "The Extra Lunch",
    "scenario": "Someone packs you lunch daily without asking what you like.",
    "question": "Would you request changes?",
    "twist": "They hear preferences as rejection.",
    "deeperQuestion": "How can you appreciate effort without surrendering choice?"
  },
  {
    "id": "ponder-cute-069",
    "category": "Cute",
    "emoji": "🌱",
    "title": "The Lucky Button",
    "scenario": "A button brings you luck whenever a friend thinks warmly of you.",
    "question": "Would you tell your friends?",
    "twist": "They might feel responsible for your bad days.",
    "deeperQuestion": "Can knowing your impact turn affection into labor?"
  },
  {
    "id": "ponder-cute-070",
    "category": "Cute",
    "emoji": "🦋",
    "title": "The Little Library",
    "scenario": "A neighborhood library lets people keep books they genuinely need.",
    "question": "Would you keep your favorite?",
    "twist": "Someone else has been waiting for it.",
    "deeperQuestion": "How should shared generosity handle competing needs?"
  },
  {
    "id": "ponder-cute-071",
    "category": "Cute",
    "emoji": "🐌",
    "title": "The Porch Light",
    "scenario": "Your parent keeps a porch light on until you arrive home.",
    "question": "Would you ask them to stop waiting?",
    "twist": "The ritual comforts them more than you.",
    "deeperQuestion": "Can independence include accepting another person's rituals?"
  },
  {
    "id": "ponder-cute-072",
    "category": "Cute",
    "emoji": "🫖",
    "title": "The Friendly Bee",
    "scenario": "A bee gives you honey but expects a daily conversation.",
    "question": "Would you agree?",
    "twist": "It talks only about itself.",
    "deeperQuestion": "Does gratitude require an unequal friendship?"
  },
  {
    "id": "ponder-cute-073",
    "category": "Cute",
    "emoji": "🌈",
    "title": "The Stuffed Council",
    "scenario": "Your childhood toys vote against being donated.",
    "question": "Would you respect their decision?",
    "twist": "They admit another child would play with them more.",
    "deeperQuestion": "Whose happiness should decide a meaningful goodbye?"
  },
  {
    "id": "ponder-cute-074",
    "category": "Cute",
    "emoji": "🌷",
    "title": "The Nice List",
    "scenario": "A magical list records every kindness, including ones nobody noticed.",
    "question": "Would you read your friends' entries?",
    "twist": "You might start comparing totals.",
    "deeperQuestion": "Can measuring kindness undermine its purpose?"
  },
  {
    "id": "ponder-cute-075",
    "category": "Cute",
    "emoji": "🧸",
    "title": "The Slow Letter",
    "scenario": "A friend's handwritten letter arrives after your disagreement has ended.",
    "question": "Would you discuss its hurt feelings again?",
    "twist": "They no longer remember writing it.",
    "deeperQuestion": "Does every honest feeling need a later response?"
  },
  {
    "id": "ponder-cute-076",
    "category": "Cute",
    "emoji": "🌻",
    "title": "The Floating House",
    "scenario": "Your tiny floating house follows whoever feels most at home inside.",
    "question": "Would you invite guests?",
    "twist": "It might choose to leave with them.",
    "deeperQuestion": "Can something belong to you while choosing otherwise?"
  },
  {
    "id": "ponder-cute-077",
    "category": "Cute",
    "emoji": "🐣",
    "title": "The Sweet Shortcut",
    "scenario": "A fairy finishes your friend's handmade gift overnight.",
    "question": "Would you accept the help?",
    "twist": "Your friend most values the time you spend.",
    "deeperQuestion": "What part of a gift carries its meaning?"
  },
  {
    "id": "ponder-cute-078",
    "category": "Cute",
    "emoji": "☁️",
    "title": "The Tiny Parade",
    "scenario": "Ants organize a parade celebrating your existence.",
    "question": "Would you close your kitchen for them?",
    "twist": "Your housemate needs to cook dinner.",
    "deeperQuestion": "When should private delight inconvenience someone else?"
  },
  {
    "id": "ponder-cute-079",
    "category": "Cute",
    "emoji": "🍪",
    "title": "The Friendly Raincoat",
    "scenario": "A raincoat changes color to match your true mood.",
    "question": "Would you wear it with friends?",
    "twist": "It cannot hide happiness during their disappointment.",
    "deeperQuestion": "Do friends deserve access to every reaction?"
  },
  {
    "id": "ponder-cute-080",
    "category": "Cute",
    "emoji": "🧶",
    "title": "The Blanket Fort",
    "scenario": "Your sibling preserves your childhood blanket fort for your visits.",
    "question": "Would you suggest taking it down?",
    "twist": "They want the room but fear losing closeness.",
    "deeperQuestion": "Can changing a tradition protect a relationship?"
  },
  {
    "id": "ponder-cute-081",
    "category": "Cute",
    "emoji": "🌱",
    "title": "The Gentle Mirror",
    "scenario": "A mirror shows you as people who love you see you.",
    "question": "Would you replace your ordinary mirror?",
    "twist": "Their views contradict one another.",
    "deeperQuestion": "Which loving perspective deserves your trust?"
  },
  {
    "id": "ponder-cute-082",
    "category": "Cute",
    "emoji": "🦋",
    "title": "The Last Sticker",
    "scenario": "A friend gives you their rarest sticker to decorate your notebook.",
    "question": "Would you use it?",
    "twist": "Using it permanently lowers its resale value.",
    "deeperQuestion": "Can refusing to use a gift defeat its purpose?"
  },
  {
    "id": "ponder-cute-083",
    "category": "Cute",
    "emoji": "🐌",
    "title": "The Kind Rival",
    "scenario": "Your competition rival secretly helps you improve.",
    "question": "Would you let them continue?",
    "twist": "Helping you could cost them the prize.",
    "deeperQuestion": "Can competition coexist with wholehearted generosity?"
  },
  {
    "id": "ponder-cute-084",
    "category": "Cute",
    "emoji": "🫖",
    "title": "The Borrowed Nest",
    "scenario": "Birds build a nest inside your favorite hat.",
    "question": "Would you wait until they leave?",
    "twist": "You need the hat for a family ceremony.",
    "deeperQuestion": "How much inconvenience does accidental hospitality require?"
  },
  {
    "id": "ponder-cute-085",
    "category": "Cute",
    "emoji": "🌈",
    "title": "The Welcome Cake",
    "scenario": "Neighbors welcome you with a cake you cannot eat.",
    "question": "Would you tell them why?",
    "twist": "They want to repeat the tradition monthly.",
    "deeperQuestion": "Does avoiding awkwardness sometimes prolong disappointment?"
  },
  {
    "id": "ponder-cute-086",
    "category": "Cute",
    "emoji": "🌷",
    "title": "The Tiny Vacation",
    "scenario": "Your houseplants request a week outdoors together.",
    "question": "Would you move them?",
    "twist": "One fragile plant cannot safely join.",
    "deeperQuestion": "Should a group's joy wait for its least able member?"
  },
  {
    "id": "ponder-cute-087",
    "category": "Cute",
    "emoji": "🧸",
    "title": "The Memory Bakery",
    "scenario": "A bakery recreates treats remembered by people who miss their hometowns.",
    "question": "Would you correct an imperfect recipe?",
    "twist": "The baker adapted it from their own childhood.",
    "deeperQuestion": "Can two versions of home both be authentic?"
  },
  {
    "id": "ponder-cute-088",
    "category": "Cute",
    "emoji": "🌻",
    "title": "The Little Promise",
    "scenario": "You promise a child to admire their drawing tomorrow.",
    "question": "Would you postpone for a minor work deadline?",
    "twist": "They remember the promise exactly.",
    "deeperQuestion": "Why do small promises matter so much?"
  },
  {
    "id": "ponder-cute-089",
    "category": "Cute",
    "emoji": "🐣",
    "title": "The Loveable Weed",
    "scenario": "A weed growing through your floor blooms when you talk to it.",
    "question": "Would you remove it?",
    "twist": "It will eventually damage the house.",
    "deeperQuestion": "Can something be precious and still need to go?"
  },
  {
    "id": "ponder-cute-090",
    "category": "Cute",
    "emoji": "☁️",
    "title": "The Bedtime Guest",
    "scenario": "A friend calls nightly because your voice helps them sleep.",
    "question": "Would you set a limit?",
    "twist": "They have other options but prefer you.",
    "deeperQuestion": "Does being someone's comfort make you permanently available?"
  },
  {
    "id": "ponder-cute-091",
    "category": "Cute",
    "emoji": "🍪",
    "title": "The Wish List",
    "scenario": "You discover a friend wants a gift you find deeply impractical.",
    "question": "Would you buy something useful instead?",
    "twist": "They have wanted it since childhood.",
    "deeperQuestion": "Should gifts reflect needs or the recipient's imagination?"
  },
  {
    "id": "ponder-cute-092",
    "category": "Cute",
    "emoji": "🧶",
    "title": "The Weather Friend",
    "scenario": "A little rain spirit feels unwanted whenever people celebrate sunshine.",
    "question": "Would you pretend to prefer rain?",
    "twist": "It asks for your honest favorite weather.",
    "deeperQuestion": "Can we validate someone without sharing their preferences?"
  },
  {
    "id": "ponder-cute-093",
    "category": "Cute",
    "emoji": "🌱",
    "title": "The Shared Scrapbook",
    "scenario": "Your friend wants to remove a photo you treasure from your shared scrapbook.",
    "question": "Would you agree?",
    "twist": "The moment was happy for you but painful for them.",
    "deeperQuestion": "Can one object hold incompatible emotional truths?"
  },
  {
    "id": "ponder-cute-094",
    "category": "Cute",
    "emoji": "🦋",
    "title": "The Thank-You Tree",
    "scenario": "A tree grows a leaf each time someone thanks you.",
    "question": "Would you count them?",
    "twist": "Your quietest friends rarely express gratitude aloud.",
    "deeperQuestion": "Does visible appreciation accurately reflect your impact?"
  },
  {
    "id": "ponder-cute-095",
    "category": "Cute",
    "emoji": "🐌",
    "title": "The Tiny Guide",
    "scenario": "A friendly beetle insists on guiding you home very slowly.",
    "question": "Would you follow it?",
    "twist": "Being useful has restored its confidence.",
    "deeperQuestion": "Can helping someone mean accepting inefficient help?"
  },
  {
    "id": "ponder-cute-096",
    "category": "Cute",
    "emoji": "🫖",
    "title": "The Birthday Candle",
    "scenario": "A candle grants a wish only if everyone present secretly agrees.",
    "question": "Would you say your wish aloud?",
    "twist": "Someone disagrees for a caring reason.",
    "deeperQuestion": "Should others get a vote in your happiness?"
  },
  {
    "id": "ponder-cute-097",
    "category": "Cute",
    "emoji": "🌈",
    "title": "The Midnight Picnic",
    "scenario": "Your friends plan a surprise picnic when you desperately need sleep.",
    "question": "Would you go anyway?",
    "twist": "They would happily reschedule if you asked.",
    "deeperQuestion": "Why can accepting kindness make honesty difficult?"
  },
  {
    "id": "ponder-cute-098",
    "category": "Cute",
    "emoji": "🌷",
    "title": "The Comfort Stone",
    "scenario": "You can give your calming stone to only one anxious friend.",
    "question": "How would you choose?",
    "twist": "One asks directly; another hides their need.",
    "deeperQuestion": "Should asking clearly give someone priority?"
  },
  {
    "id": "ponder-cute-099",
    "category": "Cute",
    "emoji": "🧸",
    "title": "The Tiny Goodbye",
    "scenario": "A migrating bird offers to stay because it knows you will miss it.",
    "question": "Would you accept?",
    "twist": "Its flock promises to return next spring.",
    "deeperQuestion": "Can love make room for necessary absence?"
  },
  {
    "id": "ponder-cute-100",
    "category": "Cute",
    "emoji": "🌻",
    "title": "The Future Flower",
    "scenario": "A flower shows how happy your friend could become without your friendship.",
    "question": "Would you tell them?",
    "twist": "It shows possibilities, not guaranteed futures.",
    "deeperQuestion": "Can caring include accepting your own smaller role?"
  },
  {
    "id": "ponder-funny-002",
    "category": "Funny",
    "emoji": "😂",
    "title": "Fridge Judge",
    "scenario": "Your fridge refuses snacks whenever it thinks you are avoiding your feelings.",
    "question": "Would you replace it?",
    "twist": "It has a perfect record of being right.",
    "deeperQuestion": "Does good advice justify unwanted control?"
  },
  {
    "id": "ponder-funny-003",
    "category": "Funny",
    "emoji": "🐶",
    "title": "Sock Election",
    "scenario": "Your socks elect a leader who bans mismatched outfits.",
    "question": "Would you respect the vote?",
    "twist": "Only the socks experience the embarrassment.",
    "deeperQuestion": "Who should control a shared appearance?"
  },
  {
    "id": "ponder-funny-004",
    "category": "Funny",
    "emoji": "🦆",
    "title": "Honest Elevator",
    "scenario": "An elevator announces everyone's actual reason for visiting the building.",
    "question": "Would you still ride?",
    "twist": "Your reason is harmless but deeply embarrassing.",
    "deeperQuestion": "Is privacy valuable when nothing is wrong?"
  },
  {
    "id": "ponder-funny-005",
    "category": "Funny",
    "emoji": "🧦",
    "title": "Mandatory Villain",
    "scenario": "Your friend group assigns someone the villain role during every board game.",
    "question": "Would you volunteer?",
    "twist": "Everyone finds the game boring without one.",
    "deeperQuestion": "Is consenting to dislike still emotionally costly?"
  },
  {
    "id": "ponder-funny-006",
    "category": "Funny",
    "emoji": "🍕",
    "title": "The Pasta Passport",
    "scenario": "Italy grants citizenship to anyone who correctly identifies one hundred pasta shapes.",
    "question": "Would you study for it?",
    "twist": "You must renounce ketchup on pasta forever.",
    "deeperQuestion": "Can belonging depend on harmless personal preferences?"
  },
  {
    "id": "ponder-funny-007",
    "category": "Funny",
    "emoji": "🥔",
    "title": "Office Duck",
    "scenario": "A duck does your job perfectly but demands your salary in peas.",
    "question": "Would you hire it secretly?",
    "twist": "Your boss promotes the duck instead of you.",
    "deeperQuestion": "Does delegation reduce your claim to achievement?"
  },
  {
    "id": "ponder-funny-008",
    "category": "Funny",
    "emoji": "🪿",
    "title": "Apology Jingle",
    "scenario": "Every apology you make must be sung as an advertising jingle.",
    "question": "Would you apologize less?",
    "twist": "People remember sung apologies for years.",
    "deeperQuestion": "Does an embarrassing format diminish genuine remorse?"
  },
  {
    "id": "ponder-funny-009",
    "category": "Funny",
    "emoji": "🧀",
    "title": "The Spoiler Tax",
    "scenario": "You earn money whenever you accidentally spoil a movie.",
    "question": "Would you warn your friends?",
    "twist": "You cannot earn money from deliberate spoilers.",
    "deeperQuestion": "Are profitable accidents still innocent after preparation?"
  },
  {
    "id": "ponder-funny-010",
    "category": "Funny",
    "emoji": "🪑",
    "title": "Queue Royalty",
    "scenario": "You inherit a title granting priority in every queue.",
    "question": "Would you use it?",
    "twist": "Your friends expect to join you.",
    "deeperQuestion": "How quickly does convenience become entitlement?"
  },
  {
    "id": "ponder-funny-011",
    "category": "Funny",
    "emoji": "🍝",
    "title": "The Talking Receipt",
    "scenario": "Your receipts loudly defend every silly purchase you make.",
    "question": "Would you keep them?",
    "twist": "They also reveal the purchases you regret.",
    "deeperQuestion": "Does justification help or delay self-awareness?"
  },
  {
    "id": "ponder-funny-012",
    "category": "Funny",
    "emoji": "🎤",
    "title": "The Group Chat Mayor",
    "scenario": "Your group chat elects you mayor with power to ban one annoying habit.",
    "question": "What would you ban?",
    "twist": "Your own favorite habit wins the next vote.",
    "deeperQuestion": "Should rules be fair when tastes differ?"
  },
  {
    "id": "ponder-funny-013",
    "category": "Funny",
    "emoji": "🐹",
    "title": "The Compliment Subscription",
    "scenario": "Your mirror charges monthly for increasingly flattering compliments.",
    "question": "Would you subscribe?",
    "twist": "The free version remains perfectly accurate.",
    "deeperQuestion": "How much reassurance would you knowingly purchase?"
  },
  {
    "id": "ponder-funny-014",
    "category": "Funny",
    "emoji": "😂",
    "title": "The Alien Sitcom",
    "scenario": "Aliens broadcast your ordinary life as their favorite comedy.",
    "question": "Would you demand payment?",
    "twist": "Their funniest episodes are your proudest achievements.",
    "deeperQuestion": "Who controls the meaning of your story?"
  },
  {
    "id": "ponder-funny-015",
    "category": "Funny",
    "emoji": "🐶",
    "title": "Professional Napper",
    "scenario": "You get paid to nap, but performance reviews ruin your sleep.",
    "question": "Would you keep the job?",
    "twist": "Taking naps off-duty now feels like unpaid labor.",
    "deeperQuestion": "Can turning pleasure into work destroy it?"
  },
  {
    "id": "ponder-funny-016",
    "category": "Funny",
    "emoji": "🦆",
    "title": "The Haunted Toaster",
    "scenario": "A toaster burns helpful life advice onto your bread.",
    "question": "Would you follow it?",
    "twist": "Its relationship advice is excellent, but it cannot date.",
    "deeperQuestion": "Does advice require personal experience?"
  },
  {
    "id": "ponder-funny-017",
    "category": "Funny",
    "emoji": "🧦",
    "title": "Chair Grudge",
    "scenario": "Your office chair refuses to support you after hearing you praise another chair.",
    "question": "Would you apologize?",
    "twist": "It claims loyalty should go both ways.",
    "deeperQuestion": "When is emotional reciprocity an unreasonable demand?"
  },
  {
    "id": "ponder-funny-018",
    "category": "Funny",
    "emoji": "🍕",
    "title": "Cat Landlord",
    "scenario": "Your cat gains legal ownership of your apartment.",
    "question": "Would you accept its house rules?",
    "twist": "Its rules mirror the restrictions you imposed on it.",
    "deeperQuestion": "Does reversing roles reveal unfairness?"
  },
  {
    "id": "ponder-funny-019",
    "category": "Funny",
    "emoji": "🥔",
    "title": "The Laugh Track",
    "scenario": "A laugh track follows you everywhere, including serious conversations.",
    "question": "Would you explain it to strangers?",
    "twist": "People like you more when they think you are funny.",
    "deeperQuestion": "Is accidental social advantage something you must disclose?"
  },
  {
    "id": "ponder-funny-020",
    "category": "Funny",
    "emoji": "🪿",
    "title": "The Honest Hat",
    "scenario": "A hat blurts out the first thought you suppress.",
    "question": "Would you wear it on a date?",
    "twist": "You can hear the other person's hat too.",
    "deeperQuestion": "Would total honesty make connection easier?"
  },
  {
    "id": "ponder-funny-021",
    "category": "Funny",
    "emoji": "🧀",
    "title": "Pizza Citizenship",
    "scenario": "A town lets residents vote only after sharing a pizza.",
    "question": "Would you join?",
    "twist": "Anyone with different topping preferences feels excluded.",
    "deeperQuestion": "Can a friendly tradition become a barrier?"
  },
  {
    "id": "ponder-funny-022",
    "category": "Funny",
    "emoji": "🪑",
    "title": "The Reverse Tip",
    "scenario": "Restaurants tip you for being an exceptionally pleasant customer.",
    "question": "Would you perform extra friendliness?",
    "twist": "Servers begin preferring wealthy-looking diners who need nothing.",
    "deeperQuestion": "Can rewarding kindness distort who receives care?"
  },
  {
    "id": "ponder-funny-023",
    "category": "Funny",
    "emoji": "🍝",
    "title": "The Pet Review",
    "scenario": "Your hamster gives you three stars as a roommate.",
    "question": "Would you contest the rating?",
    "twist": "Its complaints are specific and reasonable.",
    "deeperQuestion": "Can criticism be valid without shared standards?"
  },
  {
    "id": "ponder-funny-024",
    "category": "Funny",
    "emoji": "🎤",
    "title": "The Viral Sneeze",
    "scenario": "Your sneeze becomes a worldwide meme while your art goes unnoticed.",
    "question": "Would you monetize it?",
    "twist": "Using the fame could fund your serious work.",
    "deeperQuestion": "Must recognition match what you value about yourself?"
  },
  {
    "id": "ponder-funny-025",
    "category": "Funny",
    "emoji": "🐹",
    "title": "Laundry Jury",
    "scenario": "Your laundry votes on which outfit deserves another wear.",
    "question": "Would you trust it?",
    "twist": "The least comfortable clothes campaign hardest.",
    "deeperQuestion": "Who gets a voice when interests conflict?"
  },
  {
    "id": "ponder-funny-026",
    "category": "Funny",
    "emoji": "😂",
    "title": "The Curse of Brunch",
    "scenario": "You can predict the future, but only during overpriced brunches.",
    "question": "Would you share your predictions?",
    "twist": "People must attend brunch for the predictions to work.",
    "deeperQuestion": "Does useful knowledge justify an inconvenient condition?"
  },
  {
    "id": "ponder-funny-027",
    "category": "Funny",
    "emoji": "🐶",
    "title": "The Opinion Goose",
    "scenario": "A goose honks whenever someone states an opinion as a fact.",
    "question": "Would you bring it to dinner?",
    "twist": "It honks constantly at your favorite relative.",
    "deeperQuestion": "Should accuracy take priority over a pleasant gathering?"
  },
  {
    "id": "ponder-funny-028",
    "category": "Funny",
    "emoji": "🦆",
    "title": "Forgotten Celebrity",
    "scenario": "Everyone recognizes you but nobody remembers why you are famous.",
    "question": "Would you invent an explanation?",
    "twist": "Any story you tell becomes widely believed.",
    "deeperQuestion": "Is a reputation yours to rewrite?"
  },
  {
    "id": "ponder-funny-029",
    "category": "Funny",
    "emoji": "🧦",
    "title": "The Snack Witness",
    "scenario": "Your snacks can testify about who really ate the last biscuit.",
    "question": "Would you summon them?",
    "twist": "You discover someone lied to spare another person's embarrassment.",
    "deeperQuestion": "Is settling a tiny dispute worth exposing a kindness?"
  },
  {
    "id": "ponder-funny-030",
    "category": "Funny",
    "emoji": "🍕",
    "title": "Two Left Shoes",
    "scenario": "Your shoes become sentient and both insist they belong on the left foot.",
    "question": "Would you force a compromise?",
    "twist": "Neither experiences discomfort; only you do.",
    "deeperQuestion": "How far should you accommodate harmless beliefs?"
  },
  {
    "id": "ponder-funny-031",
    "category": "Funny",
    "emoji": "🥔",
    "title": "The Dramatic Door",
    "scenario": "Your front door requires a heartfelt farewell before opening.",
    "question": "Would you humor it daily?",
    "twist": "It gets jealous when you leave cheerfully.",
    "deeperQuestion": "When does a ritual become emotional coercion?"
  },
  {
    "id": "ponder-funny-032",
    "category": "Funny",
    "emoji": "🪿",
    "title": "The Infinite Meeting",
    "scenario": "You can end any meeting by telling an embarrassing personal story.",
    "question": "Would you use this power?",
    "twist": "Colleagues deliberately schedule meetings to hear more.",
    "deeperQuestion": "Does helping once create an unfair expectation?"
  },
  {
    "id": "ponder-funny-033",
    "category": "Funny",
    "emoji": "🧀",
    "title": "The Salad Alibi",
    "scenario": "A salad erases guilt about anything you eat afterward.",
    "question": "Would you order it daily?",
    "twist": "It affects guilt, not consequences.",
    "deeperQuestion": "Is feeling better useful without changing behavior?"
  },
  {
    "id": "ponder-funny-034",
    "category": "Funny",
    "emoji": "🪑",
    "title": "The Sarcastic GPS",
    "scenario": "Your navigation system gets you home while insulting your decisions.",
    "question": "Would you keep using it?",
    "twist": "It is safer than every polite alternative.",
    "deeperQuestion": "How much disrespect is competence worth?"
  },
  {
    "id": "ponder-funny-035",
    "category": "Funny",
    "emoji": "🍝",
    "title": "The Cheese Heist",
    "scenario": "A friend steals an absurdly expensive cheese to impress your dinner guests.",
    "question": "Would you serve it?",
    "twist": "The shop owner is one of the guests.",
    "deeperQuestion": "Does accepting a benefit make you part of wrongdoing?"
  },
  {
    "id": "ponder-funny-036",
    "category": "Funny",
    "emoji": "🎤",
    "title": "The Official Nickname",
    "scenario": "Everyone must legally use the nickname their oldest friend selects.",
    "question": "Would you trust your friend?",
    "twist": "You get equal power over their name.",
    "deeperQuestion": "Does mutual vulnerability guarantee fairness?"
  },
  {
    "id": "ponder-funny-037",
    "category": "Funny",
    "emoji": "🐹",
    "title": "The Psychic Barber",
    "scenario": "A barber knows your perfect haircut but refuses to explain it.",
    "question": "Would you surrender control?",
    "twist": "The cut suits your future personality, not your current one.",
    "deeperQuestion": "Should advice serve who you are or might become?"
  },
  {
    "id": "ponder-funny-038",
    "category": "Funny",
    "emoji": "😂",
    "title": "The Meme Inheritance",
    "scenario": "You inherit a fortune conditional on posting your uncle's terrible memes weekly.",
    "question": "Would you accept?",
    "twist": "Your followers believe you genuinely find them funny.",
    "deeperQuestion": "How much authenticity would you trade for security?"
  },
  {
    "id": "ponder-funny-039",
    "category": "Funny",
    "emoji": "🐶",
    "title": "The Angry Printer",
    "scenario": "Your printer refuses documents written in a passive-aggressive tone.",
    "question": "Would you follow its edits?",
    "twist": "Its definition of politeness favors avoiding disagreement.",
    "deeperQuestion": "Can enforcing kindness silence necessary criticism?"
  },
  {
    "id": "ponder-funny-040",
    "category": "Funny",
    "emoji": "🦆",
    "title": "The Bathroom Throne",
    "scenario": "You become royalty whenever you enter a bathroom.",
    "question": "Would you make royal decisions there?",
    "twist": "Your subjects only obey while the door stays open.",
    "deeperQuestion": "Is power meaningful without dignity?"
  },
  {
    "id": "ponder-funny-041",
    "category": "Funny",
    "emoji": "🧦",
    "title": "The Telepathic Parrot",
    "scenario": "A parrot repeats what you almost said instead of what you said.",
    "question": "Would you keep it nearby?",
    "twist": "It exposes both cruel impulses and unspoken compliments.",
    "deeperQuestion": "Do fleeting thoughts fairly represent a person?"
  },
  {
    "id": "ponder-funny-042",
    "category": "Funny",
    "emoji": "🍕",
    "title": "The Free Buffet",
    "scenario": "A buffet is free if you truthfully rate every dish aloud.",
    "question": "Would you eat there?",
    "twist": "The chef stands beside you the whole time.",
    "deeperQuestion": "Does honesty become cruelty without tact?"
  },
  {
    "id": "ponder-funny-043",
    "category": "Funny",
    "emoji": "🥔",
    "title": "The Birthday Audit",
    "scenario": "Friends audit whether you actually enjoyed each birthday gift.",
    "question": "Would you participate?",
    "twist": "You get to audit their reactions too.",
    "deeperQuestion": "Can measuring gratitude undermine generosity?"
  },
  {
    "id": "ponder-funny-044",
    "category": "Funny",
    "emoji": "🪿",
    "title": "The Couch Kingdom",
    "scenario": "Your couch declares independence and charges a sitting tax.",
    "question": "Would you negotiate?",
    "twist": "Its residents include everyone who ever lost a coin there.",
    "deeperQuestion": "Can accidental contribution create membership rights?"
  },
  {
    "id": "ponder-funny-045",
    "category": "Funny",
    "emoji": "🧀",
    "title": "The Fitness Goblin",
    "scenario": "A goblin counts your steps and cheers when you avoid exercise.",
    "question": "Would you keep it?",
    "twist": "Its acceptance makes you feel less ashamed and more active.",
    "deeperQuestion": "Can imperfect encouragement produce better outcomes?"
  },
  {
    "id": "ponder-funny-046",
    "category": "Funny",
    "emoji": "🪑",
    "title": "The Wrong Award",
    "scenario": "You win an award for being mysterious because nobody heard your introduction.",
    "question": "Would you correct the judges?",
    "twist": "Being quiet was completely accidental.",
    "deeperQuestion": "Can an unintentional trait deserve recognition?"
  },
  {
    "id": "ponder-funny-047",
    "category": "Funny",
    "emoji": "🍝",
    "title": "Professional Third Wheel",
    "scenario": "Couples pay you to make their dates less awkward.",
    "question": "Would you take the work?",
    "twist": "Some couples connect more with you than each other.",
    "deeperQuestion": "When does facilitating connection become replacing it?"
  },
  {
    "id": "ponder-funny-048",
    "category": "Funny",
    "emoji": "🎤",
    "title": "The Karaoke Bargain",
    "scenario": "You sing perfectly only when nobody believes you practiced.",
    "question": "Would you pretend to be effortless?",
    "twist": "Your hardworking friend gets less applause.",
    "deeperQuestion": "Why do people value talent differently from effort?"
  },
  {
    "id": "ponder-funny-049",
    "category": "Funny",
    "emoji": "🐹",
    "title": "The Cereal Debate",
    "scenario": "Your town must classify cereal as soup or lose internet access.",
    "question": "Which side would you defend?",
    "twist": "A compromise would restore internet but satisfy nobody.",
    "deeperQuestion": "When does a definition matter more than its usefulness?"
  },
  {
    "id": "ponder-funny-050",
    "category": "Funny",
    "emoji": "😂",
    "title": "The Roast Shield",
    "scenario": "You can block any insult by redirecting it to a volunteer.",
    "question": "Would you accept a friend's offer?",
    "twist": "They find the insults genuinely funny.",
    "deeperQuestion": "Can consent make humiliation harmless?"
  },
  {
    "id": "ponder-funny-051",
    "category": "Funny",
    "emoji": "🐶",
    "title": "The Invisible Intern",
    "scenario": "An invisible intern does everything except receive credit.",
    "question": "Would you publicly acknowledge them?",
    "twist": "Your boss thinks you are inventing excuses.",
    "deeperQuestion": "What proof should someone need to receive recognition?"
  },
  {
    "id": "ponder-funny-052",
    "category": "Funny",
    "emoji": "🦆",
    "title": "The Dinner Narrator",
    "scenario": "A narrator announces the nutritional and emotional value of every dinner bite.",
    "question": "Would you mute it?",
    "twist": "It knows when you are eating to celebrate.",
    "deeperQuestion": "Does explanation always improve an experience?"
  },
  {
    "id": "ponder-funny-053",
    "category": "Funny",
    "emoji": "🧦",
    "title": "The Lucky Underpants",
    "scenario": "Your lucky underwear demonstrably helps your team win.",
    "question": "Would you disclose the secret?",
    "twist": "Teammates demand you wear it every game.",
    "deeperQuestion": "Does shared success entitle others to personal sacrifice?"
  },
  {
    "id": "ponder-funny-054",
    "category": "Funny",
    "emoji": "🍕",
    "title": "The Stubborn Emoji",
    "scenario": "Your phone replaces every angry message with a smiling potato.",
    "question": "Would you disable it?",
    "twist": "Several conflicts disappear because nobody understands you.",
    "deeperQuestion": "Is peace achieved through misunderstanding worthwhile?"
  },
  {
    "id": "ponder-funny-055",
    "category": "Funny",
    "emoji": "🥔",
    "title": "The Complaining Cake",
    "scenario": "A cake objects to being cut unevenly.",
    "question": "Would you divide it exactly?",
    "twist": "One guest is much hungrier than the others.",
    "deeperQuestion": "Does fairness mean equal portions or meeting needs?"
  },
  {
    "id": "ponder-funny-056",
    "category": "Funny",
    "emoji": "🪿",
    "title": "The Dramatic Exit",
    "scenario": "You can teleport anywhere only after delivering a convincing dramatic farewell.",
    "question": "Would you use it for errands?",
    "twist": "Friends stop believing your sincere goodbyes.",
    "deeperQuestion": "Can repeated performance weaken genuine expression?"
  },
  {
    "id": "ponder-funny-057",
    "category": "Funny",
    "emoji": "🧀",
    "title": "The Sofa Interview",
    "scenario": "Before buying furniture, you must convince it you are a suitable owner.",
    "question": "Would you accept the process?",
    "twist": "The most comfortable sofa rejects your lifestyle.",
    "deeperQuestion": "Should something built for you get to refuse you?"
  },
  {
    "id": "ponder-funny-058",
    "category": "Funny",
    "emoji": "🪑",
    "title": "The Puppy Accountant",
    "scenario": "A puppy calculates exactly how much affection you owe your friends.",
    "question": "Would you follow its report?",
    "twist": "Its formula treats every friendship identically.",
    "deeperQuestion": "Can reciprocity be reduced to a balance sheet?"
  },
  {
    "id": "ponder-funny-059",
    "category": "Funny",
    "emoji": "🍝",
    "title": "The Accidental Guru",
    "scenario": "A typo in your text becomes a celebrated philosophical quote.",
    "question": "Would you admit the mistake?",
    "twist": "It has already helped thousands of people.",
    "deeperQuestion": "Does an accidental origin reduce an idea's value?"
  },
  {
    "id": "ponder-funny-060",
    "category": "Funny",
    "emoji": "🎤",
    "title": "The One-Star Planet",
    "scenario": "Aliens give Earth one star because your welcome speech was awkward.",
    "question": "Would you write a better review?",
    "twist": "Their rating determines whether tourists will visit.",
    "deeperQuestion": "Should one encounter represent an entire group?"
  },
  {
    "id": "ponder-funny-061",
    "category": "Funny",
    "emoji": "🐹",
    "title": "The Museum of Cringe",
    "scenario": "A museum offers to display your most embarrassing childhood video.",
    "question": "Would you agree?",
    "twist": "The exhibit helps children feel less alone.",
    "deeperQuestion": "Can public embarrassment become a generous gift?"
  },
  {
    "id": "ponder-funny-062",
    "category": "Funny",
    "emoji": "😂",
    "title": "The Invisible Trophy",
    "scenario": "You win an invisible trophy that only losers can see.",
    "question": "Would you display it?",
    "twist": "Visitors must reveal whether they have ever lost.",
    "deeperQuestion": "Is recognition worth exposing someone else's vulnerability?"
  },
  {
    "id": "ponder-funny-063",
    "category": "Funny",
    "emoji": "🐶",
    "title": "The Sandwich Contract",
    "scenario": "Your friend legally defines sandwiches to win a lunch argument.",
    "question": "Would you honor the document?",
    "twist": "The definition accidentally excludes their favorite sandwich.",
    "deeperQuestion": "Should consistent rules survive inconvenient consequences?"
  },
  {
    "id": "ponder-funny-064",
    "category": "Funny",
    "emoji": "🦆",
    "title": "The Smug Kettle",
    "scenario": "A kettle refuses to boil until you admit it was right yesterday.",
    "question": "Would you concede?",
    "twist": "It was right about the weather but wrong about your life.",
    "deeperQuestion": "Can a small concession encourage larger demands?"
  },
  {
    "id": "ponder-funny-065",
    "category": "Funny",
    "emoji": "🧦",
    "title": "The Birthday Refund",
    "scenario": "A shop refunds gifts if the recipient laughs less than expected.",
    "question": "Would you request a refund?",
    "twist": "Your friend loved the gift quietly.",
    "deeperQuestion": "Can happiness be evaluated from outward reactions?"
  },
  {
    "id": "ponder-funny-066",
    "category": "Funny",
    "emoji": "🍕",
    "title": "The Party Spreadsheet",
    "scenario": "Your friend schedules every spontaneous moment of a party.",
    "question": "Would you follow the plan?",
    "twist": "The planned surprises turn out wonderfully.",
    "deeperQuestion": "Must spontaneity be unplanned to feel genuine?"
  },
  {
    "id": "ponder-funny-067",
    "category": "Funny",
    "emoji": "🥔",
    "title": "The Celebrity Pigeon",
    "scenario": "A pigeon uses your balcony as its fan-meeting venue.",
    "question": "Would you charge admission?",
    "twist": "The pigeon considers your hospitality part of its brand.",
    "deeperQuestion": "Who owns value created in a shared space?"
  },
  {
    "id": "ponder-funny-068",
    "category": "Funny",
    "emoji": "🪿",
    "title": "The Polite Debate",
    "scenario": "You can win any argument by complimenting your opponent sincerely.",
    "question": "Would you use the ability?",
    "twist": "You start seeking arguments just to win.",
    "deeperQuestion": "Can a good method serve a bad motive?"
  },
  {
    "id": "ponder-funny-069",
    "category": "Funny",
    "emoji": "🧀",
    "title": "The Eternal Loading Bar",
    "scenario": "Your phone finishes every task instantly but shows a loading bar for drama.",
    "question": "Would you remove it?",
    "twist": "Without the wait, people trust its results less.",
    "deeperQuestion": "Why can effort's appearance affect perceived quality?"
  },
  {
    "id": "ponder-funny-070",
    "category": "Funny",
    "emoji": "🪑",
    "title": "The Group Photo",
    "scenario": "A camera makes everyone look good except whoever takes the picture.",
    "question": "Would you volunteer?",
    "twist": "Nobody notices your sacrifice unless you mention it.",
    "deeperQuestion": "Should generosity need an audience?"
  },
  {
    "id": "ponder-funny-071",
    "category": "Funny",
    "emoji": "🍝",
    "title": "The Dinner Crown",
    "scenario": "Whoever cooks dinner becomes household ruler until breakfast.",
    "question": "Would you cook every night?",
    "twist": "Your roommate cooks worse food but makes fairer rules.",
    "deeperQuestion": "Should competence in one area grant broader authority?"
  },
  {
    "id": "ponder-funny-072",
    "category": "Funny",
    "emoji": "🎤",
    "title": "The Truthful Resume",
    "scenario": "Your resume includes every task you successfully avoided.",
    "question": "Would you submit it?",
    "twist": "Employers admire your efficiency.",
    "deeperQuestion": "Can the same behavior count as laziness and skill?"
  },
  {
    "id": "ponder-funny-073",
    "category": "Funny",
    "emoji": "🐹",
    "title": "The Predictive Punchline",
    "scenario": "You always know a joke's ending before anyone tells it.",
    "question": "Would you fake laughter?",
    "twist": "Your friends tell jokes mainly to connect with you.",
    "deeperQuestion": "Is a supportive reaction necessarily dishonest?"
  },
  {
    "id": "ponder-funny-074",
    "category": "Funny",
    "emoji": "😂",
    "title": "The Debate Potato",
    "scenario": "A potato wins every debate by remaining silent.",
    "question": "Would you accept its championship?",
    "twist": "Judges reward restraint rather than arguments.",
    "deeperQuestion": "Can refusing to speak be mistaken for wisdom?"
  },
  {
    "id": "ponder-funny-075",
    "category": "Funny",
    "emoji": "🐶",
    "title": "The Pet Influencer",
    "scenario": "Your pet becomes famous for appearing unimpressed with you.",
    "question": "Would you manage its account?",
    "twist": "Your most loving moments get the fewest views.",
    "deeperQuestion": "Does an audience change a private relationship?"
  },
  {
    "id": "ponder-funny-076",
    "category": "Funny",
    "emoji": "🦆",
    "title": "The Automatic Excuse",
    "scenario": "Your calendar generates perfect excuses for events you want to skip.",
    "question": "Would you use them?",
    "twist": "A friend plans around one invented problem.",
    "deeperQuestion": "When does avoiding discomfort create obligations to a lie?"
  },
  {
    "id": "ponder-funny-077",
    "category": "Funny",
    "emoji": "🧦",
    "title": "The Laughing Tax",
    "scenario": "You pay a small tax whenever you laugh at someone else's misfortune.",
    "question": "Would it change your humor?",
    "twist": "The money goes directly to the person mocked.",
    "deeperQuestion": "Can compensation justify ridicule?"
  },
  {
    "id": "ponder-funny-078",
    "category": "Funny",
    "emoji": "🍕",
    "title": "The Spaghetti Witness",
    "scenario": "A noodle can reveal one secret from the kitchen that cooked it.",
    "question": "Would you listen?",
    "twist": "It only knows gossip, not hygiene problems.",
    "deeperQuestion": "Is curiosity a sufficient reason to invade privacy?"
  },
  {
    "id": "ponder-funny-079",
    "category": "Funny",
    "emoji": "🥔",
    "title": "The Clapping Plant",
    "scenario": "Your plant applauds whenever you leave the house.",
    "question": "Would you find it supportive?",
    "twist": "It just wants the room to itself.",
    "deeperQuestion": "Does a helpful effect matter more than the motive?"
  },
  {
    "id": "ponder-funny-080",
    "category": "Funny",
    "emoji": "🪿",
    "title": "The Applause Button",
    "scenario": "You can trigger applause whenever you enter a room.",
    "question": "Would you use it?",
    "twist": "Everyone knows you pressed the button yourself.",
    "deeperQuestion": "Can openly manufactured celebration still feel meaningful?"
  },
  {
    "id": "ponder-funny-081",
    "category": "Funny",
    "emoji": "🧀",
    "title": "The Fancy Water",
    "scenario": "You discover luxury bottled water comes from your own tap.",
    "question": "Would you sell your version?",
    "twist": "Customers say the expensive bottle tastes better.",
    "deeperQuestion": "Can presentation create real value without changing contents?"
  },
  {
    "id": "ponder-funny-082",
    "category": "Funny",
    "emoji": "🪑",
    "title": "The Sock Detective",
    "scenario": "A detective finds your missing socks but reveals your messy habits publicly.",
    "question": "Would you hire them?",
    "twist": "Every other solution has failed.",
    "deeperQuestion": "How much privacy is a trivial mystery worth?"
  },
  {
    "id": "ponder-funny-083",
    "category": "Funny",
    "emoji": "🍝",
    "title": "The Mood Mustache",
    "scenario": "A cartoon mustache appears whenever you feel jealous.",
    "question": "Would you explain it to friends?",
    "twist": "Everyone starts reassuring you before you ask.",
    "deeperQuestion": "Does visible insecurity improve or burden relationships?"
  },
  {
    "id": "ponder-funny-084",
    "category": "Funny",
    "emoji": "🎤",
    "title": "The Voice Upgrade",
    "scenario": "You can speak in a magnificent voice but only about boring topics.",
    "question": "Would you take the upgrade?",
    "twist": "People enjoy your delivery and ignore your meaning.",
    "deeperQuestion": "Is being heard the same as being understood?"
  },
  {
    "id": "ponder-funny-085",
    "category": "Funny",
    "emoji": "🐹",
    "title": "The Queue Simulator",
    "scenario": "A popular game recreates waiting in queues perfectly.",
    "question": "Would you pay to play?",
    "twist": "Players describe it as more peaceful than real leisure.",
    "deeperQuestion": "Does an activity need an obvious purpose to be worthwhile?"
  },
  {
    "id": "ponder-funny-086",
    "category": "Funny",
    "emoji": "😂",
    "title": "The Office Crown",
    "scenario": "Your workplace rewards its kindest employee with a giant embarrassing crown.",
    "question": "Would you accept it?",
    "twist": "Refusing would discourage the next winner.",
    "deeperQuestion": "Should recognition respect the recipient's preferences?"
  },
  {
    "id": "ponder-funny-087",
    "category": "Funny",
    "emoji": "🐶",
    "title": "The Laundry Oracle",
    "scenario": "Your washing machine predicts relationship problems through sock arrangements.",
    "question": "Would you consult it?",
    "twist": "It is usually right but never explains why.",
    "deeperQuestion": "What makes advice trustworthy beyond its track record?"
  },
  {
    "id": "ponder-funny-088",
    "category": "Funny",
    "emoji": "🦆",
    "title": "The Perfect Pun",
    "scenario": "You invent a pun so good nobody ever wants another joke.",
    "question": "Would you share it?",
    "twist": "Professional comedians beg you not to.",
    "deeperQuestion": "Can one great creation reduce future creativity?"
  },
  {
    "id": "ponder-funny-089",
    "category": "Funny",
    "emoji": "🧦",
    "title": "The Imaginary Invoice",
    "scenario": "Your imaginary friend bills you for years of emotional support.",
    "question": "Would you pay?",
    "twist": "They can now spend money in the real world.",
    "deeperQuestion": "Can a previously free relationship create retroactive debt?"
  },
  {
    "id": "ponder-funny-090",
    "category": "Funny",
    "emoji": "🍕",
    "title": "The Costume Rule",
    "scenario": "Everyone must dress as their most-used excuse for one day.",
    "question": "Would you tell the truth?",
    "twist": "Your costume reveals how often you claim to be busy.",
    "deeperQuestion": "Do excuses protect privacy or conceal priorities?"
  },
  {
    "id": "ponder-funny-091",
    "category": "Funny",
    "emoji": "🥔",
    "title": "The Apologetic Vacuum",
    "scenario": "Your vacuum apologizes to every crumb before cleaning it.",
    "question": "Would you speed it up?",
    "twist": "It considers rushing deeply disrespectful.",
    "deeperQuestion": "Should efficiency override an unfamiliar ethical concern?"
  },
  {
    "id": "ponder-funny-092",
    "category": "Funny",
    "emoji": "🪿",
    "title": "The Silent Disco",
    "scenario": "Your headphones play music matching your actual thoughts at a party.",
    "question": "Would you share a pair?",
    "twist": "The song reveals an unexpected crush.",
    "deeperQuestion": "Can playful sharing accidentally demand serious disclosure?"
  },
  {
    "id": "ponder-funny-093",
    "category": "Funny",
    "emoji": "🧀",
    "title": "The Compliment Duel",
    "scenario": "Enemies must settle disputes by exchanging increasingly sincere compliments.",
    "question": "Would you support the rule?",
    "twist": "Someone wins by exploiting the other's insecurity.",
    "deeperQuestion": "Can a kind format conceal manipulation?"
  },
  {
    "id": "ponder-funny-094",
    "category": "Funny",
    "emoji": "🪑",
    "title": "The Professional Flake",
    "scenario": "A company pays you to cancel plans so venues are less crowded.",
    "question": "Would you accept?",
    "twist": "Your friends begin depending on your cancellations.",
    "deeperQuestion": "Can reliability mean consistently not showing up?"
  },
  {
    "id": "ponder-funny-095",
    "category": "Funny",
    "emoji": "🍝",
    "title": "The Smiling Fine",
    "scenario": "A town fines people for fake smiles.",
    "question": "Would you support the policy?",
    "twist": "Service workers can finally stop performing cheerfulness.",
    "deeperQuestion": "Who can fairly judge whether an emotion is genuine?"
  },
  {
    "id": "ponder-funny-096",
    "category": "Funny",
    "emoji": "🎤",
    "title": "The Potato Portrait",
    "scenario": "A famous artist sells a potato that supposedly resembles your personality.",
    "question": "Would you buy it?",
    "twist": "Everyone you know immediately agrees with the portrait.",
    "deeperQuestion": "Can others recognize something in you that you cannot?"
  },
  {
    "id": "ponder-funny-097",
    "category": "Funny",
    "emoji": "🐹",
    "title": "The Instant Expert",
    "scenario": "You become an expert whenever you confidently mispronounce a technical word.",
    "question": "Would you use the power?",
    "twist": "Your audience learns the wrong pronunciation.",
    "deeperQuestion": "Is being correct about substance enough?"
  },
  {
    "id": "ponder-funny-098",
    "category": "Funny",
    "emoji": "😂",
    "title": "The Wrong Theme",
    "scenario": "You arrive at a costume party dressed for a completely different theme.",
    "question": "Would you pretend it was intentional?",
    "twist": "Everyone copies your interpretation next year.",
    "deeperQuestion": "When does a mistake become originality?"
  },
  {
    "id": "ponder-funny-099",
    "category": "Funny",
    "emoji": "🐶",
    "title": "The Competitive Picnic",
    "scenario": "Your friends turn relaxing into a scored competition.",
    "question": "Would you join?",
    "twist": "You feel more stressed trying to look relaxed.",
    "deeperQuestion": "Can measuring a goal defeat the goal itself?"
  },
  {
    "id": "ponder-funny-100",
    "category": "Funny",
    "emoji": "🦆",
    "title": "The Unfollowed Advice",
    "scenario": "You give brilliant advice that works only if nobody credits you.",
    "question": "Would you keep giving it?",
    "twist": "Another person receives awards for repeating it.",
    "deeperQuestion": "How much recognition does generosity require?"
  },
  {
    "id": "ponder-moral-002",
    "category": "Moral",
    "emoji": "⚖️",
    "title": "The Empty Seat",
    "scenario": "You can reserve the last shelter bed for a friend or an unknown newcomer.",
    "question": "Who gets it?",
    "twist": "Your friend has somewhere uncomfortable but safe to stay.",
    "deeperQuestion": "When should loyalty yield to greater need?"
  },
  {
    "id": "ponder-moral-003",
    "category": "Moral",
    "emoji": "🧭",
    "title": "The Found Wallet",
    "scenario": "You find cash beside a wallet whose owner appears wealthy.",
    "question": "Would you return everything?",
    "twist": "Your overdue rent equals the cash inside.",
    "deeperQuestion": "Does unequal wealth change ownership?"
  },
  {
    "id": "ponder-moral-004",
    "category": "Moral",
    "emoji": "🤝",
    "title": "The Honest Reference",
    "scenario": "A struggling friend asks you to exaggerate their skills for a job.",
    "question": "Would you do it?",
    "twist": "You believe they could learn quickly.",
    "deeperQuestion": "Can confidence in potential justify deception?"
  },
  {
    "id": "ponder-moral-005",
    "category": "Moral",
    "emoji": "🕯️",
    "title": "The Shared Fine",
    "scenario": "A whole class is punished until someone identifies a minor rule-breaker.",
    "question": "Would you identify them?",
    "twist": "The punishment itself is clearly unfair.",
    "deeperQuestion": "Does cooperation legitimize an unjust system?"
  },
  {
    "id": "ponder-moral-006",
    "category": "Moral",
    "emoji": "🚪",
    "title": "The Rescue Drone",
    "scenario": "Your rescue drone can save its owner or two strangers.",
    "question": "How should it be programmed?",
    "twist": "Nobody will buy one that disregards its owner.",
    "deeperQuestion": "Can a better moral rule fail through nonadoption?"
  },
  {
    "id": "ponder-moral-007",
    "category": "Moral",
    "emoji": "🌍",
    "title": "The Secret Donation",
    "scenario": "A harmful company offers a large donation to your community project.",
    "question": "Would you accept?",
    "twist": "It demands public praise in return.",
    "deeperQuestion": "When does useful funding become endorsement?"
  },
  {
    "id": "ponder-moral-008",
    "category": "Moral",
    "emoji": "🗝️",
    "title": "The Extra Dose",
    "scenario": "A clinic mistakenly gives you two scarce treatment appointments.",
    "question": "Would you release one?",
    "twist": "A relative could use the extra slot.",
    "deeperQuestion": "Do personal connections justify bypassing a queue?"
  },
  {
    "id": "ponder-moral-009",
    "category": "Moral",
    "emoji": "🎟️",
    "title": "The Anonymous Warning",
    "scenario": "You hear an unverified rumor that a colleague is stealing.",
    "question": "Would you warn others?",
    "twist": "Waiting may allow more losses.",
    "deeperQuestion": "How much evidence should an accusation require?"
  },
  {
    "id": "ponder-moral-010",
    "category": "Moral",
    "emoji": "🛟",
    "title": "The Unequal Team",
    "scenario": "One teammate works less because they provide unpaid care at home.",
    "question": "Would you split credit equally?",
    "twist": "Your extra work is causing strain too.",
    "deeperQuestion": "How should fairness account for unseen burdens?"
  },
  {
    "id": "ponder-moral-011",
    "category": "Moral",
    "emoji": "📜",
    "title": "The Stolen Formula",
    "scenario": "You can expose a stolen invention, but doing so closes a useful factory.",
    "question": "Would you reveal it?",
    "twist": "The inventor wants acknowledgment rather than closure.",
    "deeperQuestion": "Should justice follow the harmed person's wishes?"
  },
  {
    "id": "ponder-moral-012",
    "category": "Moral",
    "emoji": "🪙",
    "title": "The Dangerous Truth",
    "scenario": "Publishing accurate information could help the public and enable wrongdoing.",
    "question": "Would you publish everything?",
    "twist": "A limited version would still inform most readers.",
    "deeperQuestion": "Does transparency require unrestricted detail?"
  },
  {
    "id": "ponder-moral-013",
    "category": "Moral",
    "emoji": "🌱",
    "title": "The Speeding Parent",
    "scenario": "A parent breaks a minor traffic rule to reach a frightened child.",
    "question": "Would you report them?",
    "twist": "The same shortcut endangered pedestrians.",
    "deeperQuestion": "Should understandable motives reduce accountability?"
  },
  {
    "id": "ponder-moral-014",
    "category": "Moral",
    "emoji": "⚖️",
    "title": "The Accidental Damage",
    "scenario": "You damage something already scheduled for replacement.",
    "question": "Would you confess?",
    "twist": "The owner would charge you the full price.",
    "deeperQuestion": "Does wrongdoing require an actual loss?"
  },
  {
    "id": "ponder-moral-015",
    "category": "Moral",
    "emoji": "🧭",
    "title": "The Scholarship Tie",
    "scenario": "Two applicants qualify equally; one had far fewer advantages.",
    "question": "Who should receive the scholarship?",
    "twist": "The other applicant worked equally hard.",
    "deeperQuestion": "Should opportunity compensate for starting conditions?"
  },
  {
    "id": "ponder-moral-016",
    "category": "Moral",
    "emoji": "🤝",
    "title": "The Hungry Visitor",
    "scenario": "A hungry stranger takes food from your unlocked garden.",
    "question": "Would you demand repayment?",
    "twist": "They took more than they immediately needed.",
    "deeperQuestion": "Where should necessity limit property rights?"
  },
  {
    "id": "ponder-moral-017",
    "category": "Moral",
    "emoji": "🕯️",
    "title": "The Misleading Photo",
    "scenario": "A charity uses an outdated photo that dramatically increases donations.",
    "question": "Would you approve it?",
    "twist": "The current situation remains serious but looks less dramatic.",
    "deeperQuestion": "Can a truthful cause justify misleading presentation?"
  },
  {
    "id": "ponder-moral-018",
    "category": "Moral",
    "emoji": "🚪",
    "title": "The Secret Shortcut",
    "scenario": "You discover a legal loophole that lowers only your tax bill.",
    "question": "Would you use it?",
    "twist": "Using it weakens a service you rely on.",
    "deeperQuestion": "Is legality enough to settle responsibility?"
  },
  {
    "id": "ponder-moral-019",
    "category": "Moral",
    "emoji": "🌍",
    "title": "The Forgotten Promise",
    "scenario": "A friend forgets a promise that would greatly inconvenience them.",
    "question": "Would you remind them?",
    "twist": "You no longer need what they promised.",
    "deeperQuestion": "Is a promise binding after its purpose disappears?"
  },
  {
    "id": "ponder-moral-020",
    "category": "Moral",
    "emoji": "🗝️",
    "title": "The Witness Gift",
    "scenario": "Someone you helped offers an expensive gift before you testify about their conduct.",
    "question": "Would you accept?",
    "twist": "Your account would remain completely honest.",
    "deeperQuestion": "Can appearances alone undermine trust?"
  },
  {
    "id": "ponder-moral-021",
    "category": "Moral",
    "emoji": "🎟️",
    "title": "The Public Apology",
    "scenario": "A person privately makes amends but refuses a public apology.",
    "question": "Is that enough?",
    "twist": "The original harm happened in public.",
    "deeperQuestion": "Who determines what meaningful repair requires?"
  },
  {
    "id": "ponder-moral-022",
    "category": "Moral",
    "emoji": "🛟",
    "title": "The Biased Tool",
    "scenario": "A useful decision tool performs worse for a small group.",
    "question": "Would you deploy it?",
    "twist": "Delaying also denies benefits to that group.",
    "deeperQuestion": "How should imperfect improvement be compared with waiting?"
  },
  {
    "id": "ponder-moral-023",
    "category": "Moral",
    "emoji": "📜",
    "title": "The Vacant House",
    "scenario": "An empty house could shelter a family while its owner lives abroad.",
    "question": "Would you let them enter?",
    "twist": "The owner explicitly refuses despite no planned use.",
    "deeperQuestion": "Should unused resources carry special obligations?"
  },
  {
    "id": "ponder-moral-024",
    "category": "Moral",
    "emoji": "🪙",
    "title": "The Inherited Advantage",
    "scenario": "You inherit a valuable opportunity created through an ancestor's wrongdoing.",
    "question": "Would you surrender it?",
    "twist": "Several innocent relatives also depend on it.",
    "deeperQuestion": "Can responsibility be inherited with benefits?"
  },
  {
    "id": "ponder-moral-025",
    "category": "Moral",
    "emoji": "🌱",
    "title": "The Listening Device",
    "scenario": "A device detects danger by recording every conversation in a shared building.",
    "question": "Would you install it?",
    "twist": "Residents cannot individually opt out.",
    "deeperQuestion": "How much consent should collective safety require?"
  },
  {
    "id": "ponder-moral-026",
    "category": "Moral",
    "emoji": "⚖️",
    "title": "The Lost Prize",
    "scenario": "A judging error gives you a prize someone else earned.",
    "question": "Would you correct it?",
    "twist": "The rightful winner has already moved away happily.",
    "deeperQuestion": "Does justice depend on whether anyone feels harmed?"
  },
  {
    "id": "ponder-moral-027",
    "category": "Moral",
    "emoji": "🧭",
    "title": "The Rehabilitation Vote",
    "scenario": "Your community must decide whether to welcome someone who completed punishment.",
    "question": "Would you support their return?",
    "twist": "A harmed neighbor is still afraid.",
    "deeperQuestion": "How should rehabilitation and continuing harm coexist?"
  },
  {
    "id": "ponder-moral-028",
    "category": "Moral",
    "emoji": "🤝",
    "title": "The Volunteer Limit",
    "scenario": "A charity asks dependable volunteers to cover for people who repeatedly cancel.",
    "question": "Would you agree again?",
    "twist": "Refusing means canceling a useful service.",
    "deeperQuestion": "Does need justify relying on the most responsible people?"
  },
  {
    "id": "ponder-moral-029",
    "category": "Moral",
    "emoji": "🕯️",
    "title": "The Secret Recording",
    "scenario": "Recording a conversation would prove a serious workplace problem.",
    "question": "Would you record it?",
    "twist": "It also captures unrelated private disclosures.",
    "deeperQuestion": "Can evidence gathering create a different wrong?"
  },
  {
    "id": "ponder-moral-030",
    "category": "Moral",
    "emoji": "🚪",
    "title": "The Unclaimed Credit",
    "scenario": "Your manager assumes you solved a problem actually fixed by a quiet colleague.",
    "question": "Would you correct them?",
    "twist": "Your promotion depends on that impression.",
    "deeperQuestion": "What does honesty cost when the stakes become personal?"
  },
  {
    "id": "ponder-moral-031",
    "category": "Moral",
    "emoji": "🌍",
    "title": "The Park Fence",
    "scenario": "A fence protects rare plants but blocks a neighborhood's accessible walking route.",
    "question": "Would you approve it?",
    "twist": "An alternative route costs much more.",
    "deeperQuestion": "How should conservation account for unequal inconvenience?"
  },
  {
    "id": "ponder-moral-032",
    "category": "Moral",
    "emoji": "🗝️",
    "title": "The Emergency Lie",
    "scenario": "You lie to keep someone calm during a temporary emergency.",
    "question": "Would you do it?",
    "twist": "They would make a different choice with the truth.",
    "deeperQuestion": "Can reassurance wrongfully remove agency?"
  },
  {
    "id": "ponder-moral-033",
    "category": "Moral",
    "emoji": "🎟️",
    "title": "The Uneven Rule",
    "scenario": "A useful rule harms one unusual case it was never designed for.",
    "question": "Would you allow an exception?",
    "twist": "Others will demand similar exceptions.",
    "deeperQuestion": "Is consistency valuable when it produces avoidable harm?"
  },
  {
    "id": "ponder-moral-034",
    "category": "Moral",
    "emoji": "🛟",
    "title": "The Family Business",
    "scenario": "You can hire a qualified relative or a slightly better stranger.",
    "question": "Who gets the job?",
    "twist": "Your relative supported you during hardship.",
    "deeperQuestion": "When is gratitude unfair to outsiders?"
  },
  {
    "id": "ponder-moral-035",
    "category": "Moral",
    "emoji": "📜",
    "title": "The Fair Lottery",
    "scenario": "A lottery allocates scarce housing without considering urgency.",
    "question": "Would you support it?",
    "twist": "Need-based rankings are vulnerable to bias.",
    "deeperQuestion": "Is random fairness better than imperfect judgment?"
  },
  {
    "id": "ponder-moral-036",
    "category": "Moral",
    "emoji": "🪙",
    "title": "The Wrong Recipient",
    "scenario": "You receive confidential information proving a company misled customers.",
    "question": "Would you share it?",
    "twist": "The information also exposes innocent employees.",
    "deeperQuestion": "What should accountability protect from collateral harm?"
  },
  {
    "id": "ponder-moral-037",
    "category": "Moral",
    "emoji": "🌱",
    "title": "The Selfish Donation",
    "scenario": "Someone donates generously only for admiration.",
    "question": "Does it count as goodness?",
    "twist": "An anonymous donor gives less but with sincere care.",
    "deeperQuestion": "Should motives or outcomes matter more?"
  },
  {
    "id": "ponder-moral-038",
    "category": "Moral",
    "emoji": "⚖️",
    "title": "The Noise Complaint",
    "scenario": "A neighbor practices music loudly to prepare for their only scholarship audition.",
    "question": "Would you complain?",
    "twist": "Another neighbor needs daytime sleep after night work.",
    "deeperQuestion": "How should competing legitimate needs be balanced?"
  },
  {
    "id": "ponder-moral-039",
    "category": "Moral",
    "emoji": "🧭",
    "title": "The Forgotten Debt",
    "scenario": "An old debt would seriously burden your friend but barely help you.",
    "question": "Would you forgive it?",
    "twist": "They recently spent money on a luxury.",
    "deeperQuestion": "Does generosity depend on approving someone's choices?"
  },
  {
    "id": "ponder-moral-040",
    "category": "Moral",
    "emoji": "🤝",
    "title": "The Public Mistake",
    "scenario": "A leader admits an error that others would successfully conceal.",
    "question": "Should they face harsher consequences?",
    "twist": "Punishing disclosure may encourage future secrecy.",
    "deeperQuestion": "How can accountability reward honesty without excusing harm?"
  },
  {
    "id": "ponder-moral-041",
    "category": "Moral",
    "emoji": "🕯️",
    "title": "The Scarce Charger",
    "scenario": "During an outage, your battery can power entertainment or a stranger's work call.",
    "question": "Would you lend it?",
    "twist": "You saved that battery through careful planning.",
    "deeperQuestion": "Does preparation create a stronger entitlement to resources?"
  },
  {
    "id": "ponder-moral-042",
    "category": "Moral",
    "emoji": "🚪",
    "title": "The Unwanted Rescue",
    "scenario": "You can stop someone making a risky but informed choice.",
    "question": "Would you intervene?",
    "twist": "They explicitly asked you not to.",
    "deeperQuestion": "When does preventing harm become denying autonomy?"
  },
  {
    "id": "ponder-moral-043",
    "category": "Moral",
    "emoji": "🌍",
    "title": "The Duplicate Ticket",
    "scenario": "A ticketing error lets both you and another person claim one seat.",
    "question": "Who should keep it?",
    "twist": "You traveled farther; they booked earlier.",
    "deeperQuestion": "Which kinds of investment should determine fairness?"
  },
  {
    "id": "ponder-moral-044",
    "category": "Moral",
    "emoji": "🗝️",
    "title": "The Private Prejudice",
    "scenario": "A person behaves fairly but privately holds prejudiced beliefs.",
    "question": "How should you judge them?",
    "twist": "Their fairness requires conscious effort.",
    "deeperQuestion": "Is character defined by impulses or chosen behavior?"
  },
  {
    "id": "ponder-moral-045",
    "category": "Moral",
    "emoji": "🎟️",
    "title": "The Cheap Shirt",
    "scenario": "An affordable shirt may involve exploitative labor you cannot fully verify.",
    "question": "Would you buy it?",
    "twist": "The ethical alternative exceeds your budget.",
    "deeperQuestion": "How should responsibility change with available choices?"
  },
  {
    "id": "ponder-moral-046",
    "category": "Moral",
    "emoji": "🛟",
    "title": "The Common Water",
    "scenario": "A town asks everyone to conserve water while one resident ignores the request.",
    "question": "Would you keep conserving?",
    "twist": "Your sacrifice barely affects the shortage alone.",
    "deeperQuestion": "Does others' noncooperation reduce your own obligation?"
  },
  {
    "id": "ponder-moral-047",
    "category": "Moral",
    "emoji": "📜",
    "title": "The Warning Label",
    "scenario": "A product is safe for most but harmful to a few informed users.",
    "question": "Would you ban it?",
    "twist": "A clear warning would protect many but not everyone.",
    "deeperQuestion": "How much risk should informed adults control themselves?"
  },
  {
    "id": "ponder-moral-048",
    "category": "Moral",
    "emoji": "🪙",
    "title": "The Neighborhood Fund",
    "scenario": "A shared fund can fix many minor problems or one person's major hardship.",
    "question": "Which should it address?",
    "twist": "The person with major hardship contributed least.",
    "deeperQuestion": "Should contributions affect access to collective care?"
  },
  {
    "id": "ponder-moral-049",
    "category": "Moral",
    "emoji": "🌱",
    "title": "The Leaked Exam",
    "scenario": "You accidentally see tomorrow's exam questions.",
    "question": "Would you report it?",
    "twist": "You cannot erase what you learned.",
    "deeperQuestion": "Can someone restore fairness after an unavoidable advantage?"
  },
  {
    "id": "ponder-moral-050",
    "category": "Moral",
    "emoji": "⚖️",
    "title": "The Forged Compliment",
    "scenario": "You invent praise from a respected person to encourage a struggling artist.",
    "question": "Would you tell the truth later?",
    "twist": "The encouragement helped them create excellent work.",
    "deeperQuestion": "Can beneficial deception create a debt of honesty?"
  },
  {
    "id": "ponder-moral-051",
    "category": "Moral",
    "emoji": "🧭",
    "title": "The Unpopular Client",
    "scenario": "You disagree strongly with a client's harmless beliefs.",
    "question": "Would you refuse their business?",
    "twist": "Your refusal may start a wider boycott.",
    "deeperQuestion": "Where should personal conscience limit ordinary service?"
  },
  {
    "id": "ponder-moral-052",
    "category": "Moral",
    "emoji": "🤝",
    "title": "The Shared Risk",
    "scenario": "Your team can attempt a project whose risks fall mostly on junior members.",
    "question": "Would you proceed?",
    "twist": "Everyone consents, but juniors fear appearing uncommitted.",
    "deeperQuestion": "How freely can people consent under unequal power?"
  },
  {
    "id": "ponder-moral-053",
    "category": "Moral",
    "emoji": "🕯️",
    "title": "The Hidden Error",
    "scenario": "A harmless error appears in a report nobody is likely to revisit.",
    "question": "Would you correct it?",
    "twist": "Correction might make people doubt accurate parts.",
    "deeperQuestion": "Should maintaining trust ever involve withholding mistakes?"
  },
  {
    "id": "ponder-moral-054",
    "category": "Moral",
    "emoji": "🚪",
    "title": "The Costly Search",
    "scenario": "Your group can keep searching for one missing item or catch the last bus.",
    "question": "Would you stay?",
    "twist": "The item matters deeply to only one person.",
    "deeperQuestion": "How much should a group sacrifice for individual meaning?"
  },
  {
    "id": "ponder-moral-055",
    "category": "Moral",
    "emoji": "🌍",
    "title": "The Quiet Boycott",
    "scenario": "You stop buying from an unethical company but never explain why.",
    "question": "Is that enough?",
    "twist": "Publicly explaining could persuade others.",
    "deeperQuestion": "Does acting rightly include trying to influence others?"
  },
  {
    "id": "ponder-moral-056",
    "category": "Moral",
    "emoji": "🗝️",
    "title": "The Dangerous Reputation",
    "scenario": "Someone is widely distrusted for an action they did not commit.",
    "question": "Would you defend them publicly?",
    "twist": "Doing so risks your own reputation.",
    "deeperQuestion": "How much personal cost does fairness demand?"
  },
  {
    "id": "ponder-moral-057",
    "category": "Moral",
    "emoji": "🎟️",
    "title": "The Consent Form",
    "scenario": "People agree to lengthy terms they clearly have not understood.",
    "question": "Would you rely on their agreement?",
    "twist": "Simpler terms would make fewer people sign.",
    "deeperQuestion": "Is formal consent enough without meaningful understanding?"
  },
  {
    "id": "ponder-moral-058",
    "category": "Moral",
    "emoji": "🛟",
    "title": "The Second Chance",
    "scenario": "You can offer one second chance to a remorseful person or a consistently reliable one.",
    "question": "Who gets it?",
    "twist": "The remorseful person had far fewer earlier opportunities.",
    "deeperQuestion": "Should compassion compensate for unequal histories?"
  },
  {
    "id": "ponder-moral-059",
    "category": "Moral",
    "emoji": "📜",
    "title": "The Unpaid Favor",
    "scenario": "A friend asks you to use professional skills for free.",
    "question": "Would you help?",
    "twist": "They would gladly help you in a different way.",
    "deeperQuestion": "When should friendship include unpaid expertise?"
  },
  {
    "id": "ponder-moral-060",
    "category": "Moral",
    "emoji": "🪙",
    "title": "The Community Camera",
    "scenario": "A camera would deter theft but monitor a peaceful gathering space.",
    "question": "Would you support it?",
    "twist": "Recorded footage can later be used for unrelated purposes.",
    "deeperQuestion": "How should future uses affect present consent?"
  },
  {
    "id": "ponder-moral-061",
    "category": "Moral",
    "emoji": "🌱",
    "title": "The Protest Delay",
    "scenario": "A peaceful protest delays people reaching important appointments.",
    "question": "Would you participate?",
    "twist": "Less disruptive protests have been ignored.",
    "deeperQuestion": "When is inconvenience an acceptable tool for change?"
  },
  {
    "id": "ponder-moral-062",
    "category": "Moral",
    "emoji": "⚖️",
    "title": "The Old Agreement",
    "scenario": "A fair agreement becomes one-sided after circumstances change.",
    "question": "Would you renegotiate?",
    "twist": "You are the person who benefits now.",
    "deeperQuestion": "Does fairness require revisiting freely accepted terms?"
  },
  {
    "id": "ponder-moral-063",
    "category": "Moral",
    "emoji": "🧭",
    "title": "The Mistaken Identity",
    "scenario": "A stranger thanks you for another person's generous act.",
    "question": "Would you correct them?",
    "twist": "They are too distressed for a long explanation.",
    "deeperQuestion": "Does a small false impression require immediate correction?"
  },
  {
    "id": "ponder-moral-064",
    "category": "Moral",
    "emoji": "🤝",
    "title": "The Rescue Priority",
    "scenario": "Two people need help; one caused the emergency through carelessness.",
    "question": "Whom would you help first?",
    "twist": "Their need is more urgent.",
    "deeperQuestion": "Should blame influence urgent assistance?"
  },
  {
    "id": "ponder-moral-065",
    "category": "Moral",
    "emoji": "🕯️",
    "title": "The Free Labor",
    "scenario": "An unpaid internship offers experience but excludes people needing income.",
    "question": "Would you offer it?",
    "twist": "Your small organization cannot pay anyone yet.",
    "deeperQuestion": "Can opportunity remain unfair even when sincerely offered?"
  },
  {
    "id": "ponder-moral-066",
    "category": "Moral",
    "emoji": "🚪",
    "title": "The Omitted Context",
    "scenario": "You share a true quote that sounds worse without its surrounding explanation.",
    "question": "Would you add context?",
    "twist": "The fuller version weakens your argument.",
    "deeperQuestion": "Can accurate words still create a dishonest impression?"
  },
  {
    "id": "ponder-moral-067",
    "category": "Moral",
    "emoji": "🌍",
    "title": "The Misplaced Blame",
    "scenario": "A friend confesses a minor past wrong and asks for secrecy.",
    "question": "Would you agree?",
    "twist": "Someone else is still being blamed.",
    "deeperQuestion": "Where does loyalty end when silence harms another?"
  },
  {
    "id": "ponder-moral-068",
    "category": "Moral",
    "emoji": "🗝️",
    "title": "The Forgotten Object",
    "scenario": "A borrowed object is worth far more now than when you borrowed it.",
    "question": "Would you return it?",
    "twist": "Its owner has forgotten lending it.",
    "deeperQuestion": "Does changed value alter an old obligation?"
  },
  {
    "id": "ponder-moral-069",
    "category": "Moral",
    "emoji": "🎟️",
    "title": "The Kind Rulebreaker",
    "scenario": "A worker breaks a rule to help someone in genuine need.",
    "question": "Would you discipline them?",
    "twist": "The rule usually prevents favoritism.",
    "deeperQuestion": "How should institutions make space for compassion?"
  },
  {
    "id": "ponder-moral-070",
    "category": "Moral",
    "emoji": "🛟",
    "title": "The Reputation Repair",
    "scenario": "Someone has changed but asks you to delete your accurate old criticism.",
    "question": "Would you remove it?",
    "twist": "New readers assume it describes their present behavior.",
    "deeperQuestion": "Does truth need updating when people change?"
  },
  {
    "id": "ponder-moral-071",
    "category": "Moral",
    "emoji": "📜",
    "title": "The Last Lifeline",
    "scenario": "Your emergency fund can cover a stranger's crisis but leaves you exposed.",
    "question": "Would you give it?",
    "twist": "You are not currently in danger.",
    "deeperQuestion": "How much uncertainty may you reasonably keep resources against?"
  },
  {
    "id": "ponder-moral-072",
    "category": "Moral",
    "emoji": "🪙",
    "title": "The Collective Apology",
    "scenario": "A group asks you to apologize for harm you opposed internally.",
    "question": "Would you join?",
    "twist": "You still benefited from membership.",
    "deeperQuestion": "Can belonging create responsibility without personal approval?"
  },
  {
    "id": "ponder-moral-073",
    "category": "Moral",
    "emoji": "🌱",
    "title": "The Perfect Alibi",
    "scenario": "You can clear an innocent person only by exposing your own embarrassing secret.",
    "question": "Would you testify?",
    "twist": "Someone else might eventually come forward.",
    "deeperQuestion": "Does possible help from others reduce your duty?"
  },
  {
    "id": "ponder-moral-074",
    "category": "Moral",
    "emoji": "⚖️",
    "title": "The Price Surge",
    "scenario": "You own supplies that become scarce during an emergency.",
    "question": "Would you raise prices?",
    "twist": "Higher prices would fund more deliveries.",
    "deeperQuestion": "When does useful pricing become exploitation?"
  },
  {
    "id": "ponder-moral-075",
    "category": "Moral",
    "emoji": "🧭",
    "title": "The Anonymous Critic",
    "scenario": "Anonymous feedback lets people speak honestly but enables cruel comments.",
    "question": "Would you allow it?",
    "twist": "Requiring names silences vulnerable participants.",
    "deeperQuestion": "How should protection from retaliation balance accountability?"
  },
  {
    "id": "ponder-moral-076",
    "category": "Moral",
    "emoji": "🤝",
    "title": "The Unequal Sacrifice",
    "scenario": "A rule asks everyone to give up the same amount of money.",
    "question": "Is that fair?",
    "twist": "The amount is trivial for some and devastating for others.",
    "deeperQuestion": "Should equal treatment mean equal burdens?"
  },
  {
    "id": "ponder-moral-077",
    "category": "Moral",
    "emoji": "🕯️",
    "title": "The Accidental Discovery",
    "scenario": "You find a friend's hidden journal while helping them move.",
    "question": "Would you mention seeing it?",
    "twist": "You glimpsed a passage that worries you.",
    "deeperQuestion": "Does concern justify crossing a privacy boundary?"
  },
  {
    "id": "ponder-moral-078",
    "category": "Moral",
    "emoji": "🚪",
    "title": "The Good Excuse",
    "scenario": "A colleague repeatedly misses commitments for understandable reasons.",
    "question": "Would you stop relying on them?",
    "twist": "They are sincerely trying their best.",
    "deeperQuestion": "Can compassion coexist with reduced trust?"
  },
  {
    "id": "ponder-moral-079",
    "category": "Moral",
    "emoji": "🌍",
    "title": "The Donor Choice",
    "scenario": "A donor funds only visible projects while urgent maintenance goes neglected.",
    "question": "Would you accept the restriction?",
    "twist": "Without the donation, neither project happens.",
    "deeperQuestion": "Should a gift's conditions determine public priorities?"
  },
  {
    "id": "ponder-moral-080",
    "category": "Moral",
    "emoji": "🗝️",
    "title": "The Public Correction",
    "scenario": "A friend confidently spreads a false claim in front of others.",
    "question": "Would you correct them immediately?",
    "twist": "A private correction would save embarrassment but reach fewer people.",
    "deeperQuestion": "When should accuracy outweigh social comfort?"
  },
  {
    "id": "ponder-moral-081",
    "category": "Moral",
    "emoji": "🎟️",
    "title": "The Inconvenient Access",
    "scenario": "Making an event accessible requires changing a tradition most guests love.",
    "question": "Would you change it?",
    "twist": "Only one guest currently needs the accommodation.",
    "deeperQuestion": "Should inclusion depend on the number affected?"
  },
  {
    "id": "ponder-moral-082",
    "category": "Moral",
    "emoji": "🛟",
    "title": "The Shared Blame",
    "scenario": "Several small careless acts combine to cause a serious problem.",
    "question": "Who should repair the damage?",
    "twist": "No single act would have caused harm alone.",
    "deeperQuestion": "How should responsibility be divided for collective outcomes?"
  },
  {
    "id": "ponder-moral-083",
    "category": "Moral",
    "emoji": "📜",
    "title": "The Secret Benefactor",
    "scenario": "An unknown person pays your debt using money obtained dishonestly.",
    "question": "Would you keep the benefit?",
    "twist": "Returning it would not compensate the original victim.",
    "deeperQuestion": "Can refusing tainted benefits be merely symbolic?"
  },
  {
    "id": "ponder-moral-084",
    "category": "Moral",
    "emoji": "🪙",
    "title": "The Risky Evidence",
    "scenario": "You can prove misconduct using evidence someone obtained by violating privacy.",
    "question": "Would you use it?",
    "twist": "The accused admits the evidence is accurate.",
    "deeperQuestion": "Can a just outcome justify an unjust process?"
  },
  {
    "id": "ponder-moral-085",
    "category": "Moral",
    "emoji": "🌱",
    "title": "The Last Opportunity",
    "scenario": "You can take a dream opportunity only by breaking a reasonable commitment.",
    "question": "Would you go?",
    "twist": "The opportunity will never return.",
    "deeperQuestion": "How much of your future can a promise claim?"
  },
  {
    "id": "ponder-moral-086",
    "category": "Moral",
    "emoji": "⚖️",
    "title": "The Public Ranking",
    "scenario": "Ranking volunteers by hours increases participation but humiliates some.",
    "question": "Would you publish it?",
    "twist": "Some contribute through care work nobody counts.",
    "deeperQuestion": "What gets lost when contribution becomes a score?"
  },
  {
    "id": "ponder-moral-087",
    "category": "Moral",
    "emoji": "🧭",
    "title": "The Empty Apology",
    "scenario": "Someone apologizes perfectly but repeats the same behavior.",
    "question": "Would you accept again?",
    "twist": "They seem genuinely unable to change quickly.",
    "deeperQuestion": "Does sincerity matter without reliable improvement?"
  },
  {
    "id": "ponder-moral-088",
    "category": "Moral",
    "emoji": "🤝",
    "title": "The Community Vote",
    "scenario": "A majority votes for a policy that burdens a small minority.",
    "question": "Would you defend the result?",
    "twist": "The process was entirely fair.",
    "deeperQuestion": "Can a fair procedure produce an unfair decision?"
  },
  {
    "id": "ponder-moral-089",
    "category": "Moral",
    "emoji": "🕯️",
    "title": "The Valuable Witness",
    "scenario": "You witness wrongdoing by someone who also helps many people.",
    "question": "Would you report it?",
    "twist": "Their removal would interrupt those helpful services.",
    "deeperQuestion": "Should usefulness shield someone from accountability?"
  },
  {
    "id": "ponder-moral-090",
    "category": "Moral",
    "emoji": "🚪",
    "title": "The Avoidable Waste",
    "scenario": "Returning a defective product guarantees it will be discarded.",
    "question": "Would you seek a refund?",
    "twist": "Keeping it means absorbing a real financial loss.",
    "deeperQuestion": "Who should bear the cost of wasteful systems?"
  },
  {
    "id": "ponder-moral-091",
    "category": "Moral",
    "emoji": "🌍",
    "title": "The Personal Exception",
    "scenario": "You support a strict rule until it affects someone you love.",
    "question": "Would you seek an exception?",
    "twist": "Their case is no different from previous cases.",
    "deeperQuestion": "Does closeness reveal compassion or favoritism?"
  },
  {
    "id": "ponder-moral-092",
    "category": "Moral",
    "emoji": "🗝️",
    "title": "The Unasked Favor",
    "scenario": "You solve someone's problem without asking, but they resent the intervention.",
    "question": "Would you apologize?",
    "twist": "Your solution genuinely improved their situation.",
    "deeperQuestion": "Can help be wrong because it was uninvited?"
  },
  {
    "id": "ponder-moral-093",
    "category": "Moral",
    "emoji": "🎟️",
    "title": "The Shared Street",
    "scenario": "A pedestrian zone improves public life but inconveniences several small businesses.",
    "question": "Would you support it?",
    "twist": "Those businesses cannot easily relocate.",
    "deeperQuestion": "How should collective benefits account for concentrated losses?"
  },
  {
    "id": "ponder-moral-094",
    "category": "Moral",
    "emoji": "🛟",
    "title": "The Early Warning",
    "scenario": "You suspect a plan will fail but cannot prove it.",
    "question": "Would you slow the project down?",
    "twist": "Delay itself could cause significant losses.",
    "deeperQuestion": "When does caution become irresponsible obstruction?"
  },
  {
    "id": "ponder-moral-095",
    "category": "Moral",
    "emoji": "📜",
    "title": "The Cost of Honesty",
    "scenario": "A truthful answer would hurt someone without changing any practical decision.",
    "question": "Would you answer fully?",
    "twist": "They explicitly say they prefer truth.",
    "deeperQuestion": "Should you protect someone from information they request?"
  },
  {
    "id": "ponder-moral-096",
    "category": "Moral",
    "emoji": "🪙",
    "title": "The Unfair Advantage",
    "scenario": "A competition permits equipment only wealthy entrants can afford.",
    "question": "Would you use it?",
    "twist": "Refusing would not change the rules.",
    "deeperQuestion": "Does individual restraint meaningfully challenge structural unfairness?"
  },
  {
    "id": "ponder-moral-097",
    "category": "Moral",
    "emoji": "🌱",
    "title": "The Distant Harm",
    "scenario": "Your convenient purchase has a tiny negative effect on many distant people.",
    "question": "Would you avoid it?",
    "twist": "Almost everyone around you keeps buying.",
    "deeperQuestion": "How should scattered harm influence personal choices?"
  },
  {
    "id": "ponder-moral-098",
    "category": "Moral",
    "emoji": "⚖️",
    "title": "The Repair Choice",
    "scenario": "Someone offers meaningful repair without admitting they were wrong.",
    "question": "Would you accept it?",
    "twist": "Demanding an admission may end negotiations.",
    "deeperQuestion": "Is acknowledgment necessary for justice?"
  },
  {
    "id": "ponder-moral-099",
    "category": "Moral",
    "emoji": "🧭",
    "title": "The Unpopular Mercy",
    "scenario": "You can reduce a deserved penalty when nobody else favors mercy.",
    "question": "Would you do it?",
    "twist": "The harmed person supports the reduction privately.",
    "deeperQuestion": "Whose approval should compassionate decisions need?"
  },
  {
    "id": "ponder-moral-100",
    "category": "Moral",
    "emoji": "🤝",
    "title": "The Future Stranger",
    "scenario": "A small sacrifice now would help someone who will never know you existed.",
    "question": "Would you make it?",
    "twist": "You will never learn whether it helped.",
    "deeperQuestion": "Can responsibility extend beyond recognition and certainty?"
  },
  {
    "id": "ponder-love-002",
    "category": "Love",
    "emoji": "❤️",
    "title": "The Perfect Match",
    "scenario": "A machine identifies your ideal partner, but you already love someone else.",
    "question": "Would you meet the match?",
    "twist": "Your current partner receives the same invitation.",
    "deeperQuestion": "Does compatibility matter more than a relationship you built?"
  },
  {
    "id": "ponder-love-003",
    "category": "Love",
    "emoji": "💌",
    "title": "The Shared Dream",
    "scenario": "You and your partner receive dream jobs in different countries.",
    "question": "Who should move?",
    "twist": "Neither job will ever be offered again.",
    "deeperQuestion": "Can an equal relationship contain unequal sacrifice?"
  },
  {
    "id": "ponder-love-004",
    "category": "Love",
    "emoji": "🫶",
    "title": "The Quiet Anniversary",
    "scenario": "Your partner forgets anniversaries but shows care consistently every day.",
    "question": "Would you ask for celebrations?",
    "twist": "They feel that scheduled romance is a performance.",
    "deeperQuestion": "Can different expressions of love remain equally valid?"
  },
  {
    "id": "ponder-love-005",
    "category": "Love",
    "emoji": "🌹",
    "title": "The Last Message",
    "scenario": "You can read one final unsent message from a former partner.",
    "question": "Would you open it?",
    "twist": "They deliberately chose not to send it.",
    "deeperQuestion": "Does longing outweigh someone else's unfinished privacy?"
  },
  {
    "id": "ponder-love-006",
    "category": "Love",
    "emoji": "🏡",
    "title": "The Memory Trade",
    "scenario": "You can erase heartbreak, but also lose the relationship's happy memories.",
    "question": "Would you accept?",
    "twist": "The other person keeps every memory.",
    "deeperQuestion": "Does pain give good memories part of their meaning?"
  },
  {
    "id": "ponder-love-007",
    "category": "Love",
    "emoji": "🕰️",
    "title": "The Friendship Test",
    "scenario": "A partner asks you to stop seeing a friend they dislike.",
    "question": "Would you agree?",
    "twist": "Their discomfort is sincere but unsupported by wrongdoing.",
    "deeperQuestion": "Where should reassurance end and control begin?"
  },
  {
    "id": "ponder-love-008",
    "category": "Love",
    "emoji": "💐",
    "title": "The Honest Crush",
    "scenario": "You develop a passing crush while in a committed relationship.",
    "question": "Would you mention it?",
    "twist": "Your partner previously asked for complete honesty.",
    "deeperQuestion": "Does openness require reporting every temporary feeling?"
  },
  {
    "id": "ponder-love-009",
    "category": "Love",
    "emoji": "🧵",
    "title": "The Love Forecast",
    "scenario": "A device predicts your relationship will last exactly five happy years.",
    "question": "Would you begin it?",
    "twist": "The ending is unavoidable but peaceful.",
    "deeperQuestion": "Must lasting love mean permanent love?"
  },
  {
    "id": "ponder-love-010",
    "category": "Love",
    "emoji": "🫖",
    "title": "The Unsent Apology",
    "scenario": "An ex writes an apology you never receive, then changes for the better.",
    "question": "Does the apology matter?",
    "twist": "You learn about their change years later.",
    "deeperQuestion": "Can repair happen without reconciliation?"
  },
  {
    "id": "ponder-love-011",
    "category": "Love",
    "emoji": "🌙",
    "title": "The Different Pace",
    "scenario": "You are ready to move in together; your partner needs another year.",
    "question": "Would you wait?",
    "twist": "They cannot promise how they will feel later.",
    "deeperQuestion": "How should patience coexist with your own timeline?"
  },
  {
    "id": "ponder-love-012",
    "category": "Love",
    "emoji": "🪞",
    "title": "The Romantic Script",
    "scenario": "Your partner secretly uses a guide to plan thoughtful gestures.",
    "question": "Would that bother you?",
    "twist": "They study it because romance does not come naturally.",
    "deeperQuestion": "Is learned care less genuine than spontaneous care?"
  },
  {
    "id": "ponder-love-013",
    "category": "Love",
    "emoji": "🎶",
    "title": "The Family Table",
    "scenario": "Your family excludes your partner from an important tradition.",
    "question": "Would you skip the gathering?",
    "twist": "Your partner asks you to go without them.",
    "deeperQuestion": "Can accepting exclusion become endorsing it?"
  },
  {
    "id": "ponder-love-014",
    "category": "Love",
    "emoji": "❤️",
    "title": "The Parallel Life",
    "scenario": "You can see the happy life your partner would have without you.",
    "question": "Would you look?",
    "twist": "Their alternate life is different, not clearly better.",
    "deeperQuestion": "Does comparison help you appreciate a chosen life?"
  },
  {
    "id": "ponder-love-015",
    "category": "Love",
    "emoji": "💌",
    "title": "The Shared Password",
    "scenario": "Your partner offers every password as proof of trust.",
    "question": "Would you reciprocate?",
    "twist": "They feel refusal means you are hiding something.",
    "deeperQuestion": "Does trust grow through access or respected boundaries?"
  },
  {
    "id": "ponder-love-016",
    "category": "Love",
    "emoji": "🫶",
    "title": "The Care Calendar",
    "scenario": "You divide emotional support into equal scheduled turns.",
    "question": "Would you try it?",
    "twist": "One person's difficult month requires much more support.",
    "deeperQuestion": "Does fairness in love need equal amounts?"
  },
  {
    "id": "ponder-love-017",
    "category": "Love",
    "emoji": "🌹",
    "title": "The Public Proposal",
    "scenario": "Your partner proposes publicly, but you want more time.",
    "question": "Would you say yes temporarily?",
    "twist": "They genuinely believed you were ready.",
    "deeperQuestion": "Should sparing embarrassment require a false commitment?"
  },
  {
    "id": "ponder-love-018",
    "category": "Love",
    "emoji": "🏡",
    "title": "The Forgotten Song",
    "scenario": "Your partner no longer remembers the song that brought you together.",
    "question": "Would you feel hurt?",
    "twist": "They remember daily details you routinely forget.",
    "deeperQuestion": "Who decides which memories represent love?"
  },
  {
    "id": "ponder-love-019",
    "category": "Love",
    "emoji": "🕰️",
    "title": "The Old Promise",
    "scenario": "As teenagers, you promised to marry if both were single at thirty.",
    "question": "Would you honor it?",
    "twist": "You remain close but feel no romantic attraction.",
    "deeperQuestion": "Can affection make an outdated promise binding?"
  },
  {
    "id": "ponder-love-020",
    "category": "Love",
    "emoji": "💐",
    "title": "The Secret Savings",
    "scenario": "Your partner keeps an emergency fund you did not know about.",
    "question": "Would you feel betrayed?",
    "twist": "They saved it to preserve personal independence.",
    "deeperQuestion": "Can commitment include preparing to leave safely?"
  },
  {
    "id": "ponder-love-021",
    "category": "Love",
    "emoji": "🧵",
    "title": "The Long Goodbye",
    "scenario": "A relationship is ending kindly, but both keep postponing the final conversation.",
    "question": "Would you end it tonight?",
    "twist": "A shared celebration is next week.",
    "deeperQuestion": "When does delaying pain become prolonging it?"
  },
  {
    "id": "ponder-love-022",
    "category": "Love",
    "emoji": "🫖",
    "title": "The Love Translator",
    "scenario": "A device explains what your partner means behind every clumsy sentence.",
    "question": "Would you use it?",
    "twist": "You stop asking them to explain themselves.",
    "deeperQuestion": "Can perfect interpretation replace active listening?"
  },
  {
    "id": "ponder-love-023",
    "category": "Love",
    "emoji": "🌙",
    "title": "The Unpopular Choice",
    "scenario": "Your friends dislike your partner for reasons you find superficial.",
    "question": "Would you trust their judgment?",
    "twist": "They correctly noticed problems in a past relationship.",
    "deeperQuestion": "How much authority should friends have over romance?"
  },
  {
    "id": "ponder-love-024",
    "category": "Love",
    "emoji": "🪞",
    "title": "The Rescue Habit",
    "scenario": "You feel most loved when someone needs your help.",
    "question": "Would you question the relationship?",
    "twist": "Your partner becomes happier and more independent.",
    "deeperQuestion": "Can care survive losing the role of rescuer?"
  },
  {
    "id": "ponder-love-025",
    "category": "Love",
    "emoji": "🎶",
    "title": "The Name Choice",
    "scenario": "Neither partner wants to change their surname after marriage.",
    "question": "What would you choose?",
    "twist": "Both families attach deep meaning to their names.",
    "deeperQuestion": "Can a shared identity preserve separate histories?"
  },
  {
    "id": "ponder-love-026",
    "category": "Love",
    "emoji": "❤️",
    "title": "The Private Milestone",
    "scenario": "Your partner wants to keep your engagement private for several months.",
    "question": "Would you agree?",
    "twist": "Privacy helps them enjoy it without outside pressure.",
    "deeperQuestion": "Does sharing joy publicly prove its seriousness?"
  },
  {
    "id": "ponder-love-027",
    "category": "Love",
    "emoji": "💌",
    "title": "The Childhood Friend",
    "scenario": "Your best friend and partner both need you on the same evening.",
    "question": "Whom would you choose?",
    "twist": "Neither situation is an emergency.",
    "deeperQuestion": "Does romantic commitment automatically outrank friendship?"
  },
  {
    "id": "ponder-love-028",
    "category": "Love",
    "emoji": "🫶",
    "title": "The Kind Breakup",
    "scenario": "Your partner says they are leaving because you deserve someone better.",
    "question": "Would you accept that explanation?",
    "twist": "They refuse to describe their own needs.",
    "deeperQuestion": "Can an apparently selfless explanation avoid honest responsibility?"
  },
  {
    "id": "ponder-love-029",
    "category": "Love",
    "emoji": "🌹",
    "title": "The Jealous Future",
    "scenario": "You know your partner will love someone else after your relationship ends.",
    "question": "Would you want details?",
    "twist": "That future relationship helps them heal.",
    "deeperQuestion": "Can love include wishing happiness you will not share?"
  },
  {
    "id": "ponder-love-030",
    "category": "Love",
    "emoji": "🏡",
    "title": "The Shared Hobby",
    "scenario": "You dislike your partner's favorite activity but pretend to enjoy it.",
    "question": "Would you tell them?",
    "twist": "They love it mainly because you do it together.",
    "deeperQuestion": "Can honesty preserve a connection built on pretending?"
  },
  {
    "id": "ponder-love-031",
    "category": "Love",
    "emoji": "🕰️",
    "title": "The Old Letters",
    "scenario": "Your partner keeps affectionate letters from past relationships.",
    "question": "Would that bother you?",
    "twist": "They never reread them but dislike destroying history.",
    "deeperQuestion": "Does keeping a memory mean keeping an attachment?"
  },
  {
    "id": "ponder-love-032",
    "category": "Love",
    "emoji": "💐",
    "title": "The Money Gap",
    "scenario": "One partner earns much more but both work equally hard.",
    "question": "How should bills be split?",
    "twist": "The lower earner chose meaningful but poorly paid work.",
    "deeperQuestion": "Should financial fairness reflect income, effort, or choice?"
  },
  {
    "id": "ponder-love-033",
    "category": "Love",
    "emoji": "🧵",
    "title": "The Second Introduction",
    "scenario": "You meet your partner again with no memory of your shared years.",
    "question": "Would you choose them today?",
    "twist": "You have both changed since first meeting.",
    "deeperQuestion": "Is commitment to a person or a shared history?"
  },
  {
    "id": "ponder-love-034",
    "category": "Love",
    "emoji": "🫖",
    "title": "The Future Child",
    "scenario": "You and your partner disagree about becoming parents.",
    "question": "Would you stay together?",
    "twist": "Neither expects the other's preference to change.",
    "deeperQuestion": "Can love overcome fundamentally incompatible futures?"
  },
  {
    "id": "ponder-love-035",
    "category": "Love",
    "emoji": "🌙",
    "title": "The Open Calendar",
    "scenario": "Your partner wants every free evening together.",
    "question": "Would you reserve time alone?",
    "twist": "They experience alone time as emotional distance.",
    "deeperQuestion": "Can closeness require deliberate separation?"
  },
  {
    "id": "ponder-love-036",
    "category": "Love",
    "emoji": "🪞",
    "title": "The Silent Support",
    "scenario": "A partner quietly removes obstacles rather than offering verbal reassurance.",
    "question": "Would you ask for words too?",
    "twist": "They feel their actions are going unnoticed.",
    "deeperQuestion": "Can asking for more coexist with appreciating enough?"
  },
  {
    "id": "ponder-love-037",
    "category": "Love",
    "emoji": "🎶",
    "title": "The Truthful Gift",
    "scenario": "Your partner gives you an expensive gift you do not like.",
    "question": "Would you say so?",
    "twist": "They saved for months based on a mistaken hint.",
    "deeperQuestion": "Is protecting effort more important than sharing preferences?"
  },
  {
    "id": "ponder-love-038",
    "category": "Love",
    "emoji": "❤️",
    "title": "The Anniversary Rewrite",
    "scenario": "Your partner remembers your first meeting in a more romantic way than it happened.",
    "question": "Would you correct the story?",
    "twist": "Their version has become a beloved family tale.",
    "deeperQuestion": "Can a shared myth belong alongside literal truth?"
  },
  {
    "id": "ponder-love-039",
    "category": "Love",
    "emoji": "💌",
    "title": "The Difficult Friend",
    "scenario": "Your partner remains loyal to a friend who treats you dismissively.",
    "question": "Would you ask them to intervene?",
    "twist": "They insist the friend behaves differently in private.",
    "deeperQuestion": "What does loyalty require when relationships overlap?"
  },
  {
    "id": "ponder-love-040",
    "category": "Love",
    "emoji": "🫶",
    "title": "The Loving Distance",
    "scenario": "You feel closer to your partner while living apart.",
    "question": "Would you keep separate homes?",
    "twist": "Others claim you are avoiding commitment.",
    "deeperQuestion": "Should a relationship's form follow outsiders' expectations?"
  },
  {
    "id": "ponder-love-041",
    "category": "Love",
    "emoji": "🌹",
    "title": "The Unread Diary",
    "scenario": "Your partner offers their diary to explain a difficult period.",
    "question": "Would you read it?",
    "twist": "It includes private details about other people.",
    "deeperQuestion": "Can one person's openness expose someone else's privacy?"
  },
  {
    "id": "ponder-love-042",
    "category": "Love",
    "emoji": "🏡",
    "title": "The Timing Problem",
    "scenario": "You meet someone wonderful just before leaving for a year.",
    "question": "Would you start a relationship?",
    "twist": "Neither wants to change their plans.",
    "deeperQuestion": "Is a difficult beginning a reason not to begin?"
  },
  {
    "id": "ponder-love-043",
    "category": "Love",
    "emoji": "🕰️",
    "title": "The Familiar Argument",
    "scenario": "You both know a recurring disagreement will probably never disappear.",
    "question": "Would you stay?",
    "twist": "Every other part of the relationship is strong.",
    "deeperQuestion": "Does a good partnership require solving every conflict?"
  },
  {
    "id": "ponder-love-044",
    "category": "Love",
    "emoji": "💐",
    "title": "The Emotional Echo",
    "scenario": "You can directly feel your partner's emotions for one day.",
    "question": "Would you try it?",
    "twist": "You cannot distinguish their feelings from your own.",
    "deeperQuestion": "Can empathy become overwhelming without boundaries?"
  },
  {
    "id": "ponder-love-045",
    "category": "Love",
    "emoji": "🧵",
    "title": "The Unfair Comparison",
    "scenario": "Your partner praises something an ex did better than you.",
    "question": "Would you discuss it?",
    "twist": "The observation is accurate and not intended to hurt.",
    "deeperQuestion": "Can useful honesty ignore how comparison feels?"
  },
  {
    "id": "ponder-love-046",
    "category": "Love",
    "emoji": "🫖",
    "title": "The Breakup Button",
    "scenario": "A button ends your relationship with no pain for either person.",
    "question": "Would you use it?",
    "twist": "It removes grief but not uncertainty about the choice.",
    "deeperQuestion": "Does painless leaving change the meaning of staying?"
  },
  {
    "id": "ponder-love-047",
    "category": "Love",
    "emoji": "🌙",
    "title": "The Forgotten Date",
    "scenario": "You miss a planned date while supporting a distressed friend.",
    "question": "Would you expect understanding?",
    "twist": "You forgot to tell your partner you would be late.",
    "deeperQuestion": "Can good intentions excuse poor communication?"
  },
  {
    "id": "ponder-love-048",
    "category": "Love",
    "emoji": "🪞",
    "title": "The Wedding Budget",
    "scenario": "You want a small wedding; your partner dreams of a large celebration.",
    "question": "Where would you compromise?",
    "twist": "Their family offers money with strict conditions.",
    "deeperQuestion": "When does financial help become control over a shared milestone?"
  },
  {
    "id": "ponder-love-049",
    "category": "Love",
    "emoji": "🎶",
    "title": "The Shared Secret",
    "scenario": "Your partner tells you something they have never told anyone.",
    "question": "Would you share it with your closest friend?",
    "twist": "You need support processing what you heard.",
    "deeperQuestion": "Can receiving a secret create burdens you did not choose?"
  },
  {
    "id": "ponder-love-050",
    "category": "Love",
    "emoji": "❤️",
    "title": "The Love Score",
    "scenario": "An app scores how compatible your relationship is each week.",
    "question": "Would you check it?",
    "twist": "Your happiest week receives your lowest score.",
    "deeperQuestion": "Whose judgment should define a relationship's health?"
  },
  {
    "id": "ponder-love-051",
    "category": "Love",
    "emoji": "💌",
    "title": "The Different Beliefs",
    "scenario": "You deeply love someone whose worldview conflicts with yours.",
    "question": "Would you build a life together?",
    "twist": "The differences would affect important family decisions.",
    "deeperQuestion": "How much agreement does a shared life need?"
  },
  {
    "id": "ponder-love-052",
    "category": "Love",
    "emoji": "🫶",
    "title": "The Almost Relationship",
    "scenario": "You and a friend repeatedly almost date but never do.",
    "question": "Would you finally ask?",
    "twist": "Naming the possibility could change an easy friendship.",
    "deeperQuestion": "Is uncertainty sometimes part of what sustains a connection?"
  },
  {
    "id": "ponder-love-053",
    "category": "Love",
    "emoji": "🌹",
    "title": "The Careful Compliment",
    "scenario": "Your partner praises your appearance more than your character.",
    "question": "Would you ask them to change?",
    "twist": "They assume your abilities need no reassurance.",
    "deeperQuestion": "What do our desired compliments reveal about our needs?"
  },
  {
    "id": "ponder-love-054",
    "category": "Love",
    "emoji": "🏡",
    "title": "The New Version",
    "scenario": "Your partner changes profoundly after pursuing a long-held dream.",
    "question": "Would you expect continuity?",
    "twist": "They feel more themselves than ever.",
    "deeperQuestion": "Can loving someone's growth mean losing your fit together?"
  },
  {
    "id": "ponder-love-055",
    "category": "Love",
    "emoji": "🕰️",
    "title": "The Return Ticket",
    "scenario": "An ex asks to try again after meaningfully addressing old problems.",
    "question": "Would you consider it?",
    "twist": "Your friends remember only the earlier hurt.",
    "deeperQuestion": "Can a changed person deserve a changed evaluation?"
  },
  {
    "id": "ponder-love-056",
    "category": "Love",
    "emoji": "💐",
    "title": "The Daily Choice",
    "scenario": "A partner says love is a decision rather than a feeling.",
    "question": "Would that reassure you?",
    "twist": "They make caring choices even when affection feels distant.",
    "deeperQuestion": "Can commitment remain loving through emotional uncertainty?"
  },
  {
    "id": "ponder-love-057",
    "category": "Love",
    "emoji": "🧵",
    "title": "The Public Couple",
    "scenario": "Your relationship becomes popular online and earns money.",
    "question": "Would you keep sharing it?",
    "twist": "Private disagreements now threaten shared income.",
    "deeperQuestion": "What happens when intimacy becomes a product?"
  },
  {
    "id": "ponder-love-058",
    "category": "Love",
    "emoji": "🫖",
    "title": "The Unbalanced Effort",
    "scenario": "You initiate almost every conversation, but your partner responds warmly.",
    "question": "Would you stop initiating?",
    "twist": "They think your arrangement works perfectly.",
    "deeperQuestion": "Can affection be real while effort remains unequal?"
  },
  {
    "id": "ponder-love-059",
    "category": "Love",
    "emoji": "🌙",
    "title": "The Early Confession",
    "scenario": "Someone declares love before you know your own feelings.",
    "question": "Would you say anything similar?",
    "twist": "They promise they do not need an immediate answer.",
    "deeperQuestion": "Why can another person's certainty create pressure?"
  },
  {
    "id": "ponder-love-060",
    "category": "Love",
    "emoji": "🪞",
    "title": "The Last Dance",
    "scenario": "You can relive one dance with someone you no longer see.",
    "question": "Would you return?",
    "twist": "Afterward, the memory becomes less vivid each time.",
    "deeperQuestion": "Can revisiting something beautiful slowly consume it?"
  },
  {
    "id": "ponder-love-061",
    "category": "Love",
    "emoji": "🎶",
    "title": "The Boundary Lesson",
    "scenario": "You set a new boundary that disappoints your partner.",
    "question": "Would you hold it?",
    "twist": "They respected the old arrangement in good faith.",
    "deeperQuestion": "How should relationships handle changing consent and needs?"
  },
  {
    "id": "ponder-love-062",
    "category": "Love",
    "emoji": "❤️",
    "title": "The Different Apologies",
    "scenario": "You want acknowledgment; your partner wants to fix the practical problem.",
    "question": "Which should come first?",
    "twist": "Both consider their approach the caring one.",
    "deeperQuestion": "Can repair work without understanding what hurt?"
  },
  {
    "id": "ponder-love-063",
    "category": "Love",
    "emoji": "💌",
    "title": "The Great Opportunity",
    "scenario": "Your partner receives an opportunity that would make your life harder.",
    "question": "Would you celebrate immediately?",
    "twist": "They notice hesitation before you can explain it.",
    "deeperQuestion": "Can love hold joy and personal disappointment together?"
  },
  {
    "id": "ponder-love-064",
    "category": "Love",
    "emoji": "🫶",
    "title": "The Friendship Anniversary",
    "scenario": "Your best friend asks for the same rituals usually reserved for romance.",
    "question": "Would you agree?",
    "twist": "Your partner feels those rituals should be exclusive.",
    "deeperQuestion": "Who decides which relationships deserve ceremony?"
  },
  {
    "id": "ponder-love-065",
    "category": "Love",
    "emoji": "🌹",
    "title": "The Unchosen Sacrifice",
    "scenario": "Your partner gives up a dream for you without discussing it.",
    "question": "Would you feel grateful?",
    "twist": "They later expect a comparable sacrifice.",
    "deeperQuestion": "Can an unrequested gift create a legitimate debt?"
  },
  {
    "id": "ponder-love-066",
    "category": "Love",
    "emoji": "🏡",
    "title": "The Honest Ending",
    "scenario": "You no longer want the relationship, though nobody did anything wrong.",
    "question": "Would you leave?",
    "twist": "Your partner believes love should survive without a clear problem.",
    "deeperQuestion": "Does ending require proving that someone failed?"
  },
  {
    "id": "ponder-love-067",
    "category": "Love",
    "emoji": "🕰️",
    "title": "The Favorite Person",
    "scenario": "Your partner admits you are not the person they have most fun with.",
    "question": "Would that hurt?",
    "twist": "They say you are the person they trust most.",
    "deeperQuestion": "Must one relationship meet every emotional need?"
  },
  {
    "id": "ponder-love-068",
    "category": "Love",
    "emoji": "💐",
    "title": "The Silent Evening",
    "scenario": "You spend an evening together without speaking and feel content.",
    "question": "Would you call it quality time?",
    "twist": "Your partner experiences it as disconnection.",
    "deeperQuestion": "Can the same shared moment meet only one person's needs?"
  },
  {
    "id": "ponder-love-069",
    "category": "Love",
    "emoji": "🧵",
    "title": "The Love Letter Machine",
    "scenario": "A machine helps you express feelings you cannot articulate.",
    "question": "Would you use it?",
    "twist": "Your partner treasures letters written without assistance.",
    "deeperQuestion": "Does authorship matter more than emotional accuracy?"
  },
  {
    "id": "ponder-love-070",
    "category": "Love",
    "emoji": "🫖",
    "title": "The Shared Home",
    "scenario": "Your partner moves into a home filled with your personal history.",
    "question": "What would you change?",
    "twist": "Removing meaningful objects makes you feel less at home.",
    "deeperQuestion": "How does a place become equally shared?"
  },
  {
    "id": "ponder-love-071",
    "category": "Love",
    "emoji": "🌙",
    "title": "The Uncomfortable Question",
    "scenario": "Your partner asks whether you would date them if you met today.",
    "question": "Would you answer without hesitation?",
    "twist": "Your honest answer is that you cannot know.",
    "deeperQuestion": "Can uncertainty coexist with wholehearted commitment?"
  },
  {
    "id": "ponder-love-072",
    "category": "Love",
    "emoji": "🪞",
    "title": "The Caring Lie",
    "scenario": "Your partner hides a minor disappointment to avoid burdening you.",
    "question": "Would you prefer to know?",
    "twist": "You are already overwhelmed by other problems.",
    "deeperQuestion": "When does withholding become care rather than distance?"
  },
  {
    "id": "ponder-love-073",
    "category": "Love",
    "emoji": "🎶",
    "title": "The Better Listener",
    "scenario": "Your friend understands your emotions more easily than your partner.",
    "question": "Would you worry?",
    "twist": "Your partner supports you in ways the friend cannot.",
    "deeperQuestion": "Should emotional closeness be ranked across relationships?"
  },
  {
    "id": "ponder-love-074",
    "category": "Love",
    "emoji": "❤️",
    "title": "The Moving Deadline",
    "scenario": "Your partner keeps postponing a commitment while asking you to wait.",
    "question": "Would you set a deadline?",
    "twist": "Their uncertainty is sincere, not strategic.",
    "deeperQuestion": "How can patience avoid becoming self-abandonment?"
  },
  {
    "id": "ponder-love-075",
    "category": "Love",
    "emoji": "💌",
    "title": "The Old Photograph",
    "scenario": "Your partner dislikes a cherished photo because it shows an unhappy period.",
    "question": "Would you stop displaying it?",
    "twist": "For you it represents surviving that period together.",
    "deeperQuestion": "Who decides how a shared past is displayed?"
  },
  {
    "id": "ponder-love-076",
    "category": "Love",
    "emoji": "🫶",
    "title": "The Unexpected Reunion",
    "scenario": "You meet an old love and feel something immediately.",
    "question": "Would you arrange another meeting?",
    "twist": "Your current relationship is happy.",
    "deeperQuestion": "Is curiosity harmless when it may change what you want?"
  },
  {
    "id": "ponder-love-077",
    "category": "Love",
    "emoji": "🌹",
    "title": "The Distance Ritual",
    "scenario": "A nightly call sustains your long-distance relationship but exhausts you.",
    "question": "Would you reduce it?",
    "twist": "Your partner counts on its predictability.",
    "deeperQuestion": "Can a ritual become harmful while still being meaningful?"
  },
  {
    "id": "ponder-love-078",
    "category": "Love",
    "emoji": "🏡",
    "title": "The Unequal Grief",
    "scenario": "You and your partner grieve the same loss at different speeds.",
    "question": "Would you hide your returning joy?",
    "twist": "They interpret happiness as forgetting.",
    "deeperQuestion": "Does shared grief require shared timing?"
  },
  {
    "id": "ponder-love-079",
    "category": "Love",
    "emoji": "🕰️",
    "title": "The Secret Admirer",
    "scenario": "You discover your partner anonymously encouraged you before you met.",
    "question": "Would that feel romantic?",
    "twist": "They deliberately concealed their involvement.",
    "deeperQuestion": "When does a thoughtful surprise become manipulation?"
  },
  {
    "id": "ponder-love-080",
    "category": "Love",
    "emoji": "💐",
    "title": "The Love Guarantee",
    "scenario": "A treatment guarantees lasting affection but removes the possibility of choosing to leave.",
    "question": "Would you take it?",
    "twist": "Both partners must consent before it begins.",
    "deeperQuestion": "Can love remain meaningful without future freedom?"
  },
  {
    "id": "ponder-love-081",
    "category": "Love",
    "emoji": "🧵",
    "title": "The Family Name",
    "scenario": "Your family repeatedly mispronounces your partner's name despite corrections.",
    "question": "Would you confront them?",
    "twist": "They insist the mistakes are affectionate.",
    "deeperQuestion": "Can good intentions outweigh repeated disrespect?"
  },
  {
    "id": "ponder-love-082",
    "category": "Love",
    "emoji": "🫖",
    "title": "The Quiet Pride",
    "scenario": "Your partner celebrates your successes privately but never publicly.",
    "question": "Would you ask for public acknowledgment?",
    "twist": "They dislike sharing anything personal online.",
    "deeperQuestion": "Does being proud require being visible?"
  },
  {
    "id": "ponder-love-083",
    "category": "Love",
    "emoji": "🌙",
    "title": "The Shared Pet",
    "scenario": "After separating, you both want to keep the pet you raised together.",
    "question": "How would you decide?",
    "twist": "The pet prefers the person with less free time.",
    "deeperQuestion": "Should fairness prioritize people or the dependent being?"
  },
  {
    "id": "ponder-love-084",
    "category": "Love",
    "emoji": "🪞",
    "title": "The Honest Preference",
    "scenario": "Your partner changes their style and you prefer the old one.",
    "question": "Would you tell them?",
    "twist": "They feel more confident in the new style.",
    "deeperQuestion": "When should personal taste stay private?"
  },
  {
    "id": "ponder-love-085",
    "category": "Love",
    "emoji": "🎶",
    "title": "The Imagined Future",
    "scenario": "You love the future you planned together more than your current relationship.",
    "question": "Would you stay?",
    "twist": "Your partner senses the distance but shares the dream.",
    "deeperQuestion": "Can a promised future sustain an unsatisfying present?"
  },
  {
    "id": "ponder-love-086",
    "category": "Love",
    "emoji": "❤️",
    "title": "The Forgiveness Clock",
    "scenario": "A partner wants to know exactly when you will stop feeling hurt.",
    "question": "Would you give a timeline?",
    "twist": "They have sincerely changed their behavior.",
    "deeperQuestion": "Can emotional repair be scheduled fairly?"
  },
  {
    "id": "ponder-love-087",
    "category": "Love",
    "emoji": "💌",
    "title": "The Supportive Rival",
    "scenario": "You and your partner compete for the same rare opportunity.",
    "question": "Would you help them prepare?",
    "twist": "Only one of you can succeed.",
    "deeperQuestion": "Can mutual support survive directly competing interests?"
  },
  {
    "id": "ponder-love-088",
    "category": "Love",
    "emoji": "🫶",
    "title": "The Unshared Dream",
    "scenario": "You discover a major ambition your partner never mentioned.",
    "question": "Would you feel excluded?",
    "twist": "They were afraid naming it would make it feel impossible.",
    "deeperQuestion": "Does intimacy require sharing unfinished hopes?"
  },
  {
    "id": "ponder-love-089",
    "category": "Love",
    "emoji": "🌹",
    "title": "The Beloved Routine",
    "scenario": "Your partner loves a routine you find increasingly boring.",
    "question": "Would you change it?",
    "twist": "The predictability helps them feel secure.",
    "deeperQuestion": "How should novelty and emotional safety be balanced?"
  },
  {
    "id": "ponder-love-090",
    "category": "Love",
    "emoji": "🏡",
    "title": "The Unexpected Apology",
    "scenario": "A former friend apologizes after years of silence.",
    "question": "Would you reopen contact?",
    "twist": "You already feel peaceful without them.",
    "deeperQuestion": "Does accepting an apology require renewed access?"
  },
  {
    "id": "ponder-love-091",
    "category": "Love",
    "emoji": "🕰️",
    "title": "The Private Celebration",
    "scenario": "Your partner achieves something important while you are having a terrible day.",
    "question": "Would you join their celebration?",
    "twist": "They would gladly postpone if they knew.",
    "deeperQuestion": "Can honesty about pain coexist with generosity toward joy?"
  },
  {
    "id": "ponder-love-092",
    "category": "Love",
    "emoji": "💐",
    "title": "The Role Reversal",
    "scenario": "The partner who usually provides support suddenly needs much more care.",
    "question": "Would your relationship adapt?",
    "twist": "Neither of you knows how to reverse the roles.",
    "deeperQuestion": "Can a caring pattern become an inflexible identity?"
  },
  {
    "id": "ponder-love-093",
    "category": "Love",
    "emoji": "🧵",
    "title": "The Uncomfortable Gift",
    "scenario": "Your partner offers a major gift that would make leaving financially difficult.",
    "question": "Would you accept?",
    "twist": "They have no intention of using it as leverage.",
    "deeperQuestion": "Can dependence exist without deliberate control?"
  },
  {
    "id": "ponder-love-094",
    "category": "Love",
    "emoji": "🫖",
    "title": "The Shared Silence",
    "scenario": "You both avoid discussing an obvious problem to preserve a peaceful week.",
    "question": "Would you bring it up?",
    "twist": "The problem will not become easier later.",
    "deeperQuestion": "Is temporary peace sometimes borrowed conflict?"
  },
  {
    "id": "ponder-love-095",
    "category": "Love",
    "emoji": "🌙",
    "title": "The Friendship Boundary",
    "scenario": "A close friend wants more emotional intimacy than you can offer.",
    "question": "Would you step back?",
    "twist": "They are not asking for romance.",
    "deeperQuestion": "Do friendships need explicit limits too?"
  },
  {
    "id": "ponder-love-096",
    "category": "Love",
    "emoji": "🪞",
    "title": "The Different Holidays",
    "scenario": "You and your partner celebrate holidays with incompatible family expectations.",
    "question": "Whose tradition comes first?",
    "twist": "Both families believe absence means rejection.",
    "deeperQuestion": "Can building a new family require disappointing an old one?"
  },
  {
    "id": "ponder-love-097",
    "category": "Love",
    "emoji": "🎶",
    "title": "The Unfinished Goodbye",
    "scenario": "Someone leaves without giving the explanation you want.",
    "question": "Would you keep asking?",
    "twist": "They clearly request no further contact.",
    "deeperQuestion": "Can closure be something you must create yourself?"
  },
  {
    "id": "ponder-love-098",
    "category": "Love",
    "emoji": "❤️",
    "title": "The Future Promise",
    "scenario": "Your partner asks you to promise you will always feel the same.",
    "question": "Would you make the promise?",
    "twist": "They need reassurance after an earlier loss.",
    "deeperQuestion": "What can a person honestly promise about future feelings?"
  },
  {
    "id": "ponder-love-099",
    "category": "Love",
    "emoji": "💌",
    "title": "The Whole Truth",
    "scenario": "You can learn everything your partner has ever felt about you.",
    "question": "Would you choose to know?",
    "twist": "Many feelings were temporary and contradictory.",
    "deeperQuestion": "Is intimacy strengthened by knowing more than a person chose?"
  },
  {
    "id": "ponder-love-100",
    "category": "Love",
    "emoji": "🫶",
    "title": "The Ordinary Tuesday",
    "scenario": "You can exchange spectacular romance for reliably kind ordinary days.",
    "question": "Which would you choose?",
    "twist": "You cannot combine both in this imagined bargain.",
    "deeperQuestion": "What actually makes a shared life feel loved?"
  },
  {
    "id": "ponder-deep-002",
    "category": "Deep",
    "emoji": "🧠",
    "title": "The Experience Room",
    "scenario": "A room gives you a perfectly satisfying life that is entirely simulated.",
    "question": "Would you enter permanently?",
    "twist": "You would forget choosing the simulation.",
    "deeperQuestion": "Does happiness need contact with reality?"
  },
  {
    "id": "ponder-deep-003",
    "category": "Deep",
    "emoji": "🪞",
    "title": "The Last Observer",
    "scenario": "You become the last conscious observer of a beautiful universe.",
    "question": "Does its beauty still matter?",
    "twist": "You can preserve it but never share it.",
    "deeperQuestion": "Does value require someone to experience it?"
  },
  {
    "id": "ponder-deep-004",
    "category": "Deep",
    "emoji": "⏳",
    "title": "The Replaced Ship",
    "scenario": "Every part of your childhood boat is replaced over time.",
    "question": "Is it still your boat?",
    "twist": "Someone rebuilds another boat from the discarded parts.",
    "deeperQuestion": "Does identity follow material, history, or continuity?"
  },
  {
    "id": "ponder-deep-005",
    "category": "Deep",
    "emoji": "🌌",
    "title": "The Forgotten Achievement",
    "scenario": "You accomplish something extraordinary, but all records and memories of it vanish.",
    "question": "Was it still worthwhile?",
    "twist": "You also forget your own accomplishment.",
    "deeperQuestion": "Can meaning survive without remembrance?"
  },
  {
    "id": "ponder-deep-006",
    "category": "Deep",
    "emoji": "📖",
    "title": "The Predicted Choice",
    "scenario": "A machine predicts your next decision with perfect accuracy.",
    "question": "Are you still choosing freely?",
    "twist": "Knowing its prediction is already included in its calculation.",
    "deeperQuestion": "Does predictability rule out freedom?"
  },
  {
    "id": "ponder-deep-007",
    "category": "Deep",
    "emoji": "🌀",
    "title": "The Longer Life",
    "scenario": "You can live for centuries while everyone you know ages normally.",
    "question": "Would you accept?",
    "twist": "You can form new relationships throughout your life.",
    "deeperQuestion": "Does mortality make relationships more valuable?"
  },
  {
    "id": "ponder-deep-008",
    "category": "Deep",
    "emoji": "🧩",
    "title": "The Reverse Memory",
    "scenario": "You remember tomorrow clearly but forget yesterday.",
    "question": "How would you define yourself?",
    "twist": "You can change tomorrow, making the memories disappear.",
    "deeperQuestion": "Does identity depend more on history or expectation?"
  },
  {
    "id": "ponder-deep-009",
    "category": "Deep",
    "emoji": "🕯️",
    "title": "The Happiness Dial",
    "scenario": "You can increase happiness without changing anything about your life.",
    "question": "Would you turn it up?",
    "twist": "Dissatisfaction currently motivates your most meaningful work.",
    "deeperQuestion": "Can unpleasant feelings serve values happiness cannot?"
  },
  {
    "id": "ponder-deep-010",
    "category": "Deep",
    "emoji": "🛶",
    "title": "The Meaning Certificate",
    "scenario": "An authority proves your life has a specific cosmic purpose.",
    "question": "Would you read it?",
    "twist": "The purpose is ordinary and unrelated to your ambitions.",
    "deeperQuestion": "Is assigned meaning better than created meaning?"
  },
  {
    "id": "ponder-deep-011",
    "category": "Deep",
    "emoji": "🪐",
    "title": "The Empty Universe",
    "scenario": "You learn humanity exists through chance rather than any deliberate plan.",
    "question": "Would your priorities change?",
    "twist": "Nothing about your relationships or abilities changes.",
    "deeperQuestion": "Does an origin determine a life's worth?"
  },
  {
    "id": "ponder-deep-012",
    "category": "Deep",
    "emoji": "🌊",
    "title": "The Last Day",
    "scenario": "You know this is your final day, but can forget that knowledge.",
    "question": "Would you forget?",
    "twist": "Forgetting would let you enjoy ordinary moments calmly.",
    "deeperQuestion": "Is awareness of an ending a gift or burden?"
  },
  {
    "id": "ponder-deep-013",
    "category": "Deep",
    "emoji": "🗝️",
    "title": "The Unremembered Kindness",
    "scenario": "You helped someone profoundly but they remember a different person doing it.",
    "question": "Would you correct them?",
    "twist": "Their gratitude would not change the outcome.",
    "deeperQuestion": "Does moral worth require accurate recognition?"
  },
  {
    "id": "ponder-deep-014",
    "category": "Deep",
    "emoji": "🧠",
    "title": "The Thought Copy",
    "scenario": "A machine reproduces your thoughts without any inner experience.",
    "question": "Would it understand you?",
    "twist": "It explains your reasoning better than you can.",
    "deeperQuestion": "What distinguishes understanding from convincing performance?"
  },
  {
    "id": "ponder-deep-015",
    "category": "Deep",
    "emoji": "🪞",
    "title": "The Endless Book",
    "scenario": "A book contains every true statement about your life.",
    "question": "Would you read it?",
    "twist": "It says nothing about what you should value.",
    "deeperQuestion": "Can complete knowledge tell you how to live?"
  },
  {
    "id": "ponder-deep-016",
    "category": "Deep",
    "emoji": "⏳",
    "title": "The Different Body",
    "scenario": "You wake in a different body with your memories intact.",
    "question": "What would make you you?",
    "twist": "Others recognize your habits but reject your identity.",
    "deeperQuestion": "How much identity depends on social recognition?"
  },
  {
    "id": "ponder-deep-017",
    "category": "Deep",
    "emoji": "🌌",
    "title": "The Private Language",
    "scenario": "You invent a language that perfectly describes your feelings but nobody else understands.",
    "question": "Is it useful?",
    "twist": "Translating it always loses something important.",
    "deeperQuestion": "Can meaning exist without the possibility of sharing?"
  },
  {
    "id": "ponder-deep-018",
    "category": "Deep",
    "emoji": "📖",
    "title": "The Chosen Regret",
    "scenario": "You can remove one regret, but lose the lesson it taught.",
    "question": "Would you remove it?",
    "twist": "You might make the same choice again.",
    "deeperQuestion": "Must growth depend on suffering?"
  },
  {
    "id": "ponder-deep-019",
    "category": "Deep",
    "emoji": "🌀",
    "title": "The Eternal Present",
    "scenario": "You experience each moment fully but cannot form long-term memories.",
    "question": "Could your life be meaningful?",
    "twist": "People around you still build relationships with you.",
    "deeperQuestion": "Does meaning require a story across time?"
  },
  {
    "id": "ponder-deep-020",
    "category": "Deep",
    "emoji": "🧩",
    "title": "The Two Futures",
    "scenario": "You can see two equally possible futures and must choose one.",
    "question": "How would you decide?",
    "twist": "Each future version of you prefers their own life.",
    "deeperQuestion": "Is there a best choice without a shared standard?"
  },
  {
    "id": "ponder-deep-021",
    "category": "Deep",
    "emoji": "🕯️",
    "title": "The Unfelt Emotion",
    "scenario": "A person behaves lovingly without ever feeling affection.",
    "question": "Is that love?",
    "twist": "Another feels deep affection but rarely acts kindly.",
    "deeperQuestion": "Should emotions or actions define love?"
  },
  {
    "id": "ponder-deep-022",
    "category": "Deep",
    "emoji": "🛶",
    "title": "The Perfect Explanation",
    "scenario": "Someone explains every cause behind your personality and choices.",
    "question": "Would you feel less responsible?",
    "twist": "The explanation does not make harmful actions unavoidable.",
    "deeperQuestion": "Can understanding causes coexist with accountability?"
  },
  {
    "id": "ponder-deep-023",
    "category": "Deep",
    "emoji": "🪐",
    "title": "The Blank Legacy",
    "scenario": "You can create a lasting legacy only by sacrificing your present happiness.",
    "question": "Would you choose it?",
    "twist": "Future people would never know your name.",
    "deeperQuestion": "Whom is a meaningful legacy really for?"
  },
  {
    "id": "ponder-deep-024",
    "category": "Deep",
    "emoji": "🌊",
    "title": "The Same Dream",
    "scenario": "Everyone has an identical dream that feels more real than waking life.",
    "question": "Which reality would you trust?",
    "twist": "The dream world also contains apparent scientific evidence.",
    "deeperQuestion": "What makes an experience count as real?"
  },
  {
    "id": "ponder-deep-025",
    "category": "Deep",
    "emoji": "🗝️",
    "title": "The Lost Word",
    "scenario": "Humanity loses the word for a familiar emotion.",
    "question": "Does the emotion change?",
    "twist": "People begin noticing different distinctions within it.",
    "deeperQuestion": "How much does language shape experience?"
  },
  {
    "id": "ponder-deep-026",
    "category": "Deep",
    "emoji": "🧠",
    "title": "The Better Stranger",
    "scenario": "A future version of you has values your current self rejects.",
    "question": "Would you help them exist?",
    "twist": "They remember your current values with compassion.",
    "deeperQuestion": "Which version of you should guide present choices?"
  },
  {
    "id": "ponder-deep-027",
    "category": "Deep",
    "emoji": "🪞",
    "title": "The End of Work",
    "scenario": "Machines meet every material need, making paid work unnecessary.",
    "question": "What would give your life structure?",
    "twist": "Prestige still depends on appearing productive.",
    "deeperQuestion": "Does purpose require being needed?"
  },
  {
    "id": "ponder-deep-028",
    "category": "Deep",
    "emoji": "⏳",
    "title": "The Unchosen Talent",
    "scenario": "You have extraordinary talent for something you dislike.",
    "question": "Must you develop it?",
    "twist": "Using it could benefit many people.",
    "deeperQuestion": "Does ability create obligation?"
  },
  {
    "id": "ponder-deep-029",
    "category": "Deep",
    "emoji": "🌌",
    "title": "The Silent Universe",
    "scenario": "You ask the universe for meaning and receive no answer.",
    "question": "Would you keep asking?",
    "twist": "Silence might mean absence, indifference, or incomprehension.",
    "deeperQuestion": "How should uncertainty shape belief?"
  },
  {
    "id": "ponder-deep-030",
    "category": "Deep",
    "emoji": "📖",
    "title": "The Borrowed Memory",
    "scenario": "You acquire a vivid memory of an event you never experienced.",
    "question": "Is it part of your identity?",
    "twist": "It changes your feelings toward a real person.",
    "deeperQuestion": "Does authenticity depend on how a memory originated?"
  },
  {
    "id": "ponder-deep-031",
    "category": "Deep",
    "emoji": "🌀",
    "title": "The Frozen Moment",
    "scenario": "You can preserve one perfect moment forever by stopping all change.",
    "question": "Would you stop time?",
    "twist": "No new thought or experience could occur.",
    "deeperQuestion": "Can perfection be meaningful without movement?"
  },
  {
    "id": "ponder-deep-032",
    "category": "Deep",
    "emoji": "🧩",
    "title": "The Unseen Art",
    "scenario": "You create beautiful art that nobody will ever encounter.",
    "question": "Would you continue?",
    "twist": "Creating it changes how you perceive the world.",
    "deeperQuestion": "Does art need an audience beyond its maker?"
  },
  {
    "id": "ponder-deep-033",
    "category": "Deep",
    "emoji": "🕯️",
    "title": "The Infinite Retry",
    "scenario": "You can replay any decision until satisfied with the outcome.",
    "question": "Would you use retries often?",
    "twist": "You alone remember every failed attempt.",
    "deeperQuestion": "Does reversible choice carry the same moral weight?"
  },
  {
    "id": "ponder-deep-034",
    "category": "Deep",
    "emoji": "🛶",
    "title": "The Final Question",
    "scenario": "You may learn one ultimate truth but cannot explain it to anyone.",
    "question": "What would you ask?",
    "twist": "Knowing may make ordinary life harder.",
    "deeperQuestion": "Is truth valuable independently of its usefulness?"
  },
  {
    "id": "ponder-deep-035",
    "category": "Deep",
    "emoji": "🪐",
    "title": "The Shared Mind",
    "scenario": "Two people gradually share every memory and thought.",
    "question": "Do they become one person?",
    "twist": "They still disagree about what to do.",
    "deeperQuestion": "Does shared information eliminate separate selves?"
  },
  {
    "id": "ponder-deep-036",
    "category": "Deep",
    "emoji": "🌊",
    "title": "The Happy Amnesia",
    "scenario": "You forget every painful experience but retain unexplained protective habits.",
    "question": "Would you accept this life?",
    "twist": "You cannot understand why certain situations frighten you.",
    "deeperQuestion": "Is relief worth losing the context of your reactions?"
  },
  {
    "id": "ponder-deep-037",
    "category": "Deep",
    "emoji": "🗝️",
    "title": "The Purpose Swap",
    "scenario": "You can exchange your current ambitions for ambitions easier to fulfill.",
    "question": "Would you switch?",
    "twist": "Your new self would feel genuinely satisfied.",
    "deeperQuestion": "Should we change the world or change what we want?"
  },
  {
    "id": "ponder-deep-038",
    "category": "Deep",
    "emoji": "🧠",
    "title": "The Invisible Choice",
    "scenario": "A choice affects your character but nobody else's life.",
    "question": "Does morality apply?",
    "twist": "Repeating it may shape later actions toward others.",
    "deeperQuestion": "Can private habits carry moral significance?"
  },
  {
    "id": "ponder-deep-039",
    "category": "Deep",
    "emoji": "🪞",
    "title": "The End of Surprise",
    "scenario": "You know exactly what everyone will say before they speak.",
    "question": "Would conversation still matter?",
    "twist": "You can still feel their emotions in the moment.",
    "deeperQuestion": "Is connection about information or shared presence?"
  },
  {
    "id": "ponder-deep-040",
    "category": "Deep",
    "emoji": "⏳",
    "title": "The Inner Audience",
    "scenario": "You discover most decisions were shaped by imagining how others would judge you.",
    "question": "Would you change your life?",
    "twist": "Some imagined judgments helped you act generously.",
    "deeperQuestion": "Can social influence be part of an authentic self?"
  },
  {
    "id": "ponder-deep-041",
    "category": "Deep",
    "emoji": "🌌",
    "title": "The Uncertain Memory",
    "scenario": "Your most treasured memory may be partly invented.",
    "question": "Would you investigate?",
    "twist": "Its emotional impact has been entirely real.",
    "deeperQuestion": "Does factual accuracy determine emotional legitimacy?"
  },
  {
    "id": "ponder-deep-042",
    "category": "Deep",
    "emoji": "📖",
    "title": "The Last Language",
    "scenario": "You are the final speaker of a language nobody wants to learn.",
    "question": "Would you spend your life preserving it?",
    "twist": "Doing so leaves little time for new experiences.",
    "deeperQuestion": "How much should the present owe the past?"
  },
  {
    "id": "ponder-deep-043",
    "category": "Deep",
    "emoji": "🌀",
    "title": "The Universal Feeling",
    "scenario": "You briefly experience every person's happiness and pain simultaneously.",
    "question": "Would you repeat it?",
    "twist": "Afterward, your own concerns seem insignificant.",
    "deeperQuestion": "Can wider empathy make practical action harder?"
  },
  {
    "id": "ponder-deep-044",
    "category": "Deep",
    "emoji": "🧩",
    "title": "The Perfect Routine",
    "scenario": "Every day becomes pleasant, predictable, and free of difficulty.",
    "question": "Would you change anything?",
    "twist": "Novelty would reintroduce disappointment.",
    "deeperQuestion": "Is a good life necessarily an interesting life?"
  },
  {
    "id": "ponder-deep-045",
    "category": "Deep",
    "emoji": "🕯️",
    "title": "The Unfinished Self",
    "scenario": "You may permanently choose your ideal personality today.",
    "question": "Would you finalize yourself?",
    "twist": "The choice prevents all future growth.",
    "deeperQuestion": "Is being unfinished part of being human?"
  },
  {
    "id": "ponder-deep-046",
    "category": "Deep",
    "emoji": "🛶",
    "title": "The Meaningless Prize",
    "scenario": "You win a lifelong goal and feel nothing.",
    "question": "Was the pursuit wasted?",
    "twist": "The years of effort contained meaningful friendships.",
    "deeperQuestion": "Can a journey succeed when its destination disappoints?"
  },
  {
    "id": "ponder-deep-047",
    "category": "Deep",
    "emoji": "🪐",
    "title": "The Objective Taste",
    "scenario": "A device proves which music is objectively best.",
    "question": "Would it change your favorites?",
    "twist": "Your favorite song ranks near the bottom.",
    "deeperQuestion": "Can personal value survive an objective hierarchy?"
  },
  {
    "id": "ponder-deep-048",
    "category": "Deep",
    "emoji": "🌊",
    "title": "The Conscious Pause",
    "scenario": "Your consciousness stops nightly and resumes with complete continuity.",
    "question": "Is that a problem?",
    "twist": "You cannot distinguish resumption from replacement.",
    "deeperQuestion": "What kind of continuity matters for survival?"
  },
  {
    "id": "ponder-deep-049",
    "category": "Deep",
    "emoji": "🗝️",
    "title": "The Forgotten Future",
    "scenario": "You learn that future generations will misunderstand everything you stood for.",
    "question": "Would you act differently?",
    "twist": "Their mistaken story still inspires good behavior.",
    "deeperQuestion": "Does legacy matter more than accuracy?"
  },
  {
    "id": "ponder-deep-050",
    "category": "Deep",
    "emoji": "🧠",
    "title": "The Last Possession",
    "scenario": "You can keep one possession but retain every memory associated with the rest.",
    "question": "What would you keep?",
    "twist": "The object itself will eventually deteriorate.",
    "deeperQuestion": "What do objects add to memories?"
  },
  {
    "id": "ponder-deep-051",
    "category": "Deep",
    "emoji": "🪞",
    "title": "The Different Past",
    "scenario": "You discover your upbringing happened for reasons entirely different from what you believed.",
    "question": "Would you feel changed?",
    "twist": "The events themselves remain exactly the same.",
    "deeperQuestion": "How much does interpretation constitute identity?"
  },
  {
    "id": "ponder-deep-052",
    "category": "Deep",
    "emoji": "⏳",
    "title": "The Constant Upgrade",
    "scenario": "You can improve one ability daily, but will always notice a better possible version.",
    "question": "Would you continue?",
    "twist": "Stopping might restore satisfaction.",
    "deeperQuestion": "When does growth become an inability to accept yourself?"
  },
  {
    "id": "ponder-deep-053",
    "category": "Deep",
    "emoji": "🌌",
    "title": "The Unshared Pain",
    "scenario": "Nobody can verify another person's pain directly.",
    "question": "What should belief depend on?",
    "twist": "Some people describe it poorly or inconsistently.",
    "deeperQuestion": "How should uncertainty affect compassion?"
  },
  {
    "id": "ponder-deep-054",
    "category": "Deep",
    "emoji": "📖",
    "title": "The Two Selves",
    "scenario": "Your thoughtful morning self and impulsive evening self want incompatible lives.",
    "question": "Which should govern?",
    "twist": "Both states recur predictably and feel authentic.",
    "deeperQuestion": "Is the self one voice or an ongoing negotiation?"
  },
  {
    "id": "ponder-deep-055",
    "category": "Deep",
    "emoji": "🌀",
    "title": "The Perfect Memory",
    "scenario": "You can remember every detail of every day.",
    "question": "Would you accept?",
    "twist": "You cannot soften embarrassing or painful recollections.",
    "deeperQuestion": "Is forgetting a flaw or a necessary ability?"
  },
  {
    "id": "ponder-deep-056",
    "category": "Deep",
    "emoji": "🧩",
    "title": "The Unneeded Hero",
    "scenario": "A hero prevents a disaster so completely that nobody knows it was possible.",
    "question": "Are they still a hero?",
    "twist": "They begin doubting their own significance.",
    "deeperQuestion": "Can success erase the evidence of its importance?"
  },
  {
    "id": "ponder-deep-057",
    "category": "Deep",
    "emoji": "🕯️",
    "title": "The Outside View",
    "scenario": "You watch your life as a stranger would, without hearing your thoughts.",
    "question": "Would you recognize yourself?",
    "twist": "Your intentions look different from your actions.",
    "deeperQuestion": "Which perspective reveals more of a person?"
  },
  {
    "id": "ponder-deep-058",
    "category": "Deep",
    "emoji": "🛶",
    "title": "The Infinite Library",
    "scenario": "A library contains every possible book, including every truth and every error.",
    "question": "Is it useful?",
    "twist": "There is no way to identify reliable volumes.",
    "deeperQuestion": "Can information without judgment count as knowledge?"
  },
  {
    "id": "ponder-deep-059",
    "category": "Deep",
    "emoji": "🪐",
    "title": "The Contented Failure",
    "scenario": "You fail at a prestigious goal but build a life you genuinely enjoy.",
    "question": "Did you fail overall?",
    "twist": "Your younger self would be disappointed.",
    "deeperQuestion": "Which self gets to evaluate your life?"
  },
  {
    "id": "ponder-deep-060",
    "category": "Deep",
    "emoji": "🌊",
    "title": "The Last Human Habit",
    "scenario": "You keep a pointless ritual after forgetting its original purpose.",
    "question": "Would you abandon it?",
    "twist": "It still connects people emotionally.",
    "deeperQuestion": "Can a practice matter after its explanation disappears?"
  },
  {
    "id": "ponder-deep-061",
    "category": "Deep",
    "emoji": "🗝️",
    "title": "The Color Question",
    "scenario": "You cannot know whether others experience colors exactly as you do.",
    "question": "Does that matter?",
    "twist": "You agree perfectly on every color-related action.",
    "deeperQuestion": "Must shared understanding include identical inner experience?"
  },
  {
    "id": "ponder-deep-062",
    "category": "Deep",
    "emoji": "🧠",
    "title": "The Freedom Limit",
    "scenario": "Unlimited options leave you less satisfied than a few meaningful choices.",
    "question": "Would you accept fewer options?",
    "twist": "Someone else would decide which options remain.",
    "deeperQuestion": "Can restriction increase freedom in practice?"
  },
  {
    "id": "ponder-deep-063",
    "category": "Deep",
    "emoji": "🪞",
    "title": "The Moral Luck",
    "scenario": "Two people make the same careless choice; only one causes harm.",
    "question": "Should they be judged equally?",
    "twist": "The harmless outcome was pure luck.",
    "deeperQuestion": "Should responsibility follow decisions or consequences?"
  },
  {
    "id": "ponder-deep-064",
    "category": "Deep",
    "emoji": "⏳",
    "title": "The Imagined Audience",
    "scenario": "You discover nobody has been paying attention to the flaws you worry about.",
    "question": "Would you feel relieved?",
    "twist": "Some achievements also went unnoticed.",
    "deeperQuestion": "How much self-worth depends on imagined spectators?"
  },
  {
    "id": "ponder-deep-065",
    "category": "Deep",
    "emoji": "🌌",
    "title": "The Unchosen Beginning",
    "scenario": "Every part of your starting life was outside your control.",
    "question": "What can you take credit for?",
    "twist": "Your capacity to work hard also had causes.",
    "deeperQuestion": "What does deserving mean in a world of unequal beginnings?"
  },
  {
    "id": "ponder-deep-066",
    "category": "Deep",
    "emoji": "📖",
    "title": "The Final Conversation",
    "scenario": "You can have one ordinary conversation with someone who is gone.",
    "question": "What would you discuss?",
    "twist": "They cannot answer questions they never knew.",
    "deeperQuestion": "Does connection require new information?"
  },
  {
    "id": "ponder-deep-067",
    "category": "Deep",
    "emoji": "🌀",
    "title": "The Better World",
    "scenario": "You can create a better world in which you never existed.",
    "question": "Would you choose it?",
    "twist": "Everyone you love would live differently but happily.",
    "deeperQuestion": "How much should your own existence matter in your judgment?"
  },
  {
    "id": "ponder-deep-068",
    "category": "Deep",
    "emoji": "🧩",
    "title": "The Shared Reality",
    "scenario": "A community agrees on a false story that organizes their lives peacefully.",
    "question": "Would you challenge it?",
    "twist": "The truth offers no immediate practical improvement.",
    "deeperQuestion": "Can social usefulness justify a false belief?"
  },
  {
    "id": "ponder-deep-069",
    "category": "Deep",
    "emoji": "🕯️",
    "title": "The Lifelong Promise",
    "scenario": "You make a promise before understanding how much you will change.",
    "question": "How binding is it?",
    "twist": "Others planned their lives around your commitment.",
    "deeperQuestion": "How should continuity and growth share authority?"
  },
  {
    "id": "ponder-deep-070",
    "category": "Deep",
    "emoji": "🛶",
    "title": "The Empty Success",
    "scenario": "All your achievements are publicly recognized, but nobody knows you personally.",
    "question": "Would that satisfy you?",
    "twist": "A private life offers love but no recognition.",
    "deeperQuestion": "What separates being admired from being known?"
  },
  {
    "id": "ponder-deep-071",
    "category": "Deep",
    "emoji": "🪐",
    "title": "The Repeated Year",
    "scenario": "You can repeat your happiest year indefinitely without remembering earlier repetitions.",
    "question": "Would you stay?",
    "twist": "From inside, every experience feels new.",
    "deeperQuestion": "Does repetition matter if nobody experiences it as repetition?"
  },
  {
    "id": "ponder-deep-072",
    "category": "Deep",
    "emoji": "🌊",
    "title": "The Uncomfortable Truth",
    "scenario": "A comforting belief is challenged by strong evidence.",
    "question": "Would you investigate further?",
    "twist": "The belief supports your sense of purpose.",
    "deeperQuestion": "How much uncertainty should a meaningful belief tolerate?"
  },
  {
    "id": "ponder-deep-073",
    "category": "Deep",
    "emoji": "🗝️",
    "title": "The Ordinary Miracle",
    "scenario": "You can make one ordinary experience feel astonishing every time.",
    "question": "Which would you choose?",
    "twist": "The feeling never makes it more useful.",
    "deeperQuestion": "Does attention create value or discover it?"
  },
  {
    "id": "ponder-deep-074",
    "category": "Deep",
    "emoji": "🧠",
    "title": "The Private Standard",
    "scenario": "You define success entirely for yourself, but still want others to approve.",
    "question": "Is that inconsistent?",
    "twist": "Their approval sometimes contradicts your own standard.",
    "deeperQuestion": "Can independence coexist with wanting recognition?"
  },
  {
    "id": "ponder-deep-075",
    "category": "Deep",
    "emoji": "🪞",
    "title": "The Last Memory",
    "scenario": "At life's end, you can preserve only one memory.",
    "question": "Would you choose happiness or significance?",
    "twist": "Your happiest moment was also very ordinary.",
    "deeperQuestion": "Are memorable experiences necessarily the most valuable ones?"
  },
  {
    "id": "ponder-deep-076",
    "category": "Deep",
    "emoji": "⏳",
    "title": "The Authentic Mask",
    "scenario": "You act confident for years until confidence becomes natural.",
    "question": "Was the earlier version fake?",
    "twist": "The performance helped you develop real abilities.",
    "deeperQuestion": "Can pretending be a path to authenticity?"
  },
  {
    "id": "ponder-deep-077",
    "category": "Deep",
    "emoji": "🌌",
    "title": "The Unanswered Why",
    "scenario": "You can explain how everything works but not why anything exists.",
    "question": "Would that feel complete?",
    "twist": "Every proposed purpose creates another unanswered why.",
    "deeperQuestion": "Does every meaningful question need an answer?"
  },
  {
    "id": "ponder-deep-078",
    "category": "Deep",
    "emoji": "📖",
    "title": "The Invisible Boundary",
    "scenario": "You cannot identify the exact moment a friendship became love.",
    "question": "Does the boundary exist?",
    "twist": "Both people agree that something changed.",
    "deeperQuestion": "Can real differences lack precise dividing lines?"
  },
  {
    "id": "ponder-deep-079",
    "category": "Deep",
    "emoji": "🌀",
    "title": "The Future Vote",
    "scenario": "Your future selves can vote on your current decision.",
    "question": "Would you give them control?",
    "twist": "The most numerous selves favor the safest life.",
    "deeperQuestion": "Should possible futures outweigh present desires?"
  },
  {
    "id": "ponder-deep-080",
    "category": "Deep",
    "emoji": "🧩",
    "title": "The Forgotten Fear",
    "scenario": "You lose the ability to fear consequences but retain knowledge of them.",
    "question": "Would you choose differently?",
    "twist": "You can still care about other people.",
    "deeperQuestion": "Is fear necessary for responsible action?"
  },
  {
    "id": "ponder-deep-081",
    "category": "Deep",
    "emoji": "🕯️",
    "title": "The Meaningful Effort",
    "scenario": "A machine can instantly produce the result of your favorite difficult activity.",
    "question": "Would you use it?",
    "twist": "The result would be indistinguishable from your own work.",
    "deeperQuestion": "Can effort be valuable independently of its product?"
  },
  {
    "id": "ponder-deep-082",
    "category": "Deep",
    "emoji": "🛶",
    "title": "The Other Perspective",
    "scenario": "You experience a disagreement entirely from your opponent's point of view.",
    "question": "Would you return unchanged?",
    "twist": "You still remember why your original view made sense.",
    "deeperQuestion": "Can two incompatible perspectives both be understandable?"
  },
  {
    "id": "ponder-deep-083",
    "category": "Deep",
    "emoji": "🪐",
    "title": "The Last Discovery",
    "scenario": "Humanity answers every scientific question that can be answered.",
    "question": "What happens to curiosity?",
    "twist": "Art and personal experience remain unpredictable.",
    "deeperQuestion": "Does wonder require ignorance?"
  },
  {
    "id": "ponder-deep-084",
    "category": "Deep",
    "emoji": "🌊",
    "title": "The Chosen Ignorance",
    "scenario": "You may stop learning about problems you cannot personally solve.",
    "question": "Would you choose peace?",
    "twist": "Awareness might eventually connect you with others who can help.",
    "deeperQuestion": "Is attention itself a responsibility?"
  },
  {
    "id": "ponder-deep-085",
    "category": "Deep",
    "emoji": "🗝️",
    "title": "The Measuring Life",
    "scenario": "A number accurately measures your lifetime happiness.",
    "question": "Would you track it?",
    "twist": "Your most meaningful experiences sometimes lower the score.",
    "deeperQuestion": "Should a good life be optimized for one measure?"
  },
  {
    "id": "ponder-deep-086",
    "category": "Deep",
    "emoji": "🧠",
    "title": "The False Start",
    "scenario": "You discover your life's direction began with a misunderstanding.",
    "question": "Would you change course?",
    "twist": "You now genuinely love where it led.",
    "deeperQuestion": "Does an accidental beginning invalidate a chosen continuation?"
  },
  {
    "id": "ponder-deep-087",
    "category": "Deep",
    "emoji": "🪞",
    "title": "The Quiet Existence",
    "scenario": "You live contentedly without ambition, legacy, or dramatic experiences.",
    "question": "Is anything missing?",
    "twist": "Other people insist you are wasting potential.",
    "deeperQuestion": "Who decides whether a life has been fully lived?"
  },
  {
    "id": "ponder-deep-088",
    "category": "Deep",
    "emoji": "⏳",
    "title": "The Divided Attention",
    "scenario": "You can experience two places simultaneously but feel less present in each.",
    "question": "Would you use the ability?",
    "twist": "You could attend two loved ones' important moments.",
    "deeperQuestion": "Is presence about location or quality of attention?"
  },
  {
    "id": "ponder-deep-089",
    "category": "Deep",
    "emoji": "🌌",
    "title": "The Unfinished Story",
    "scenario": "Your life ends before you resolve the problem you cared about most.",
    "question": "Was it incomplete?",
    "twist": "Others continue the work without following your plan.",
    "deeperQuestion": "Does meaning require seeing an ending?"
  },
  {
    "id": "ponder-deep-090",
    "category": "Deep",
    "emoji": "📖",
    "title": "The Perfect Empathy",
    "scenario": "You understand every motive behind a harmful act.",
    "question": "Can you still condemn it?",
    "twist": "Understanding does not reduce the victim's pain.",
    "deeperQuestion": "Does explanation weaken judgment or improve it?"
  },
  {
    "id": "ponder-deep-091",
    "category": "Deep",
    "emoji": "🌀",
    "title": "The Shared Name",
    "scenario": "Two people share your name, history, and appearance but have separate experiences now.",
    "question": "Which is the original you?",
    "twist": "Both remember deciding to be copied.",
    "deeperQuestion": "Does originality matter more than present consciousness?"
  },
  {
    "id": "ponder-deep-092",
    "category": "Deep",
    "emoji": "🧩",
    "title": "The Certain Tomorrow",
    "scenario": "You know tomorrow will be ordinary and uneventful.",
    "question": "Would today feel different?",
    "twist": "Most of your happiest memories began as ordinary days.",
    "deeperQuestion": "How much value comes from possibility?"
  },
  {
    "id": "ponder-deep-093",
    "category": "Deep",
    "emoji": "🕯️",
    "title": "The Silent Achievement",
    "scenario": "You privately overcome a difficulty others consider easy.",
    "question": "Does it deserve celebration?",
    "twist": "Nobody understands the effort it required.",
    "deeperQuestion": "Should achievement be measured from the outside or within?"
  },
  {
    "id": "ponder-deep-094",
    "category": "Deep",
    "emoji": "🛶",
    "title": "The Unstable Value",
    "scenario": "What you value most changes depending on whether you are tired or rested.",
    "question": "Which preference is real?",
    "twist": "Neither state lasts permanently.",
    "deeperQuestion": "Must authentic values remain constant across conditions?"
  },
  {
    "id": "ponder-deep-095",
    "category": "Deep",
    "emoji": "🪐",
    "title": "The Last Questioner",
    "scenario": "Everyone becomes satisfied except you, who still asks why.",
    "question": "Would you stop questioning?",
    "twist": "Your questions sometimes disrupt their peace.",
    "deeperQuestion": "Can dissatisfaction be a valuable social role?"
  },
  {
    "id": "ponder-deep-096",
    "category": "Deep",
    "emoji": "🌊",
    "title": "The Borrowed Purpose",
    "scenario": "You devote your life to a goal inherited from someone you admire.",
    "question": "Is it truly yours?",
    "twist": "You would never have chosen it independently.",
    "deeperQuestion": "Does authenticity require inventing your own values?"
  },
  {
    "id": "ponder-deep-097",
    "category": "Deep",
    "emoji": "🗝️",
    "title": "The Finite Universe",
    "scenario": "You learn that eventually no trace of humanity will remain.",
    "question": "Would you live differently?",
    "twist": "Every present experience still feels exactly as real.",
    "deeperQuestion": "Must value last forever to count?"
  },
  {
    "id": "ponder-deep-098",
    "category": "Deep",
    "emoji": "🧠",
    "title": "The Good Enough Life",
    "scenario": "You can see countless lives better than yours but cannot live them.",
    "question": "Would you keep looking?",
    "twist": "Your current life already contains love and purpose.",
    "deeperQuestion": "When does possibility undermine gratitude?"
  },
  {
    "id": "ponder-deep-099",
    "category": "Deep",
    "emoji": "🪞",
    "title": "The Unspoken Self",
    "scenario": "You discover that the qualities you cannot describe matter most to people who love you.",
    "question": "Would you try to define them?",
    "twist": "Defining them makes you perform them self-consciously.",
    "deeperQuestion": "Can self-knowledge interfere with being yourself?"
  },
  {
    "id": "ponder-deep-100",
    "category": "Deep",
    "emoji": "⏳",
    "title": "The Open Ending",
    "scenario": "You may know how your story ends or keep choosing without certainty.",
    "question": "Which would you choose?",
    "twist": "Knowing the ending would not reveal the journey.",
    "deeperQuestion": "Is uncertainty part of what makes a life your own?"
  },
  {
    "id": "ponder-weird-002",
    "category": "Weird",
    "emoji": "🌀",
    "title": "The Borrowed Shadow",
    "scenario": "Your shadow requests weekends off to develop its own hobbies.",
    "question": "Would you agree?",
    "twist": "People become suspicious when you appear without it.",
    "deeperQuestion": "Does another being owe you a familiar appearance?"
  },
  {
    "id": "ponder-weird-003",
    "category": "Weird",
    "emoji": "👽",
    "title": "The Tuesday Lease",
    "scenario": "You can rent out every Tuesday of your life to a stranger.",
    "question": "Would you sign?",
    "twist": "They form relationships using your body and name.",
    "deeperQuestion": "Who owns a life shared across time?"
  },
  {
    "id": "ponder-weird-004",
    "category": "Weird",
    "emoji": "🪐",
    "title": "The Dream Tax",
    "scenario": "The government taxes pleasant dreams to fund repairs to nightmares.",
    "question": "Would you pay?",
    "twist": "People with difficult waking lives dream most happily.",
    "deeperQuestion": "Can equal rules burden unequal lives differently?"
  },
  {
    "id": "ponder-weird-005",
    "category": "Weird",
    "emoji": "🚪",
    "title": "The Talking Ocean",
    "scenario": "The ocean asks humanity to stop calling it a resource.",
    "question": "Would you change your behavior?",
    "twist": "It cannot explain what treatment it prefers.",
    "deeperQuestion": "Does recognizing personhood require knowing someone's needs?"
  },
  {
    "id": "ponder-weird-006",
    "category": "Weird",
    "emoji": "🌙",
    "title": "The Spare Universe",
    "scenario": "A spare universe appears in your wardrobe and needs an owner.",
    "question": "Would you accept responsibility?",
    "twist": "Its inhabitants begin worshipping you without permission.",
    "deeperQuestion": "Does accidental power create duties?"
  },
  {
    "id": "ponder-weird-007",
    "category": "Weird",
    "emoji": "🪞",
    "title": "The Backward Guest",
    "scenario": "A guest experiences your dinner party backward through time.",
    "question": "How would you host them?",
    "twist": "They remember an argument you have not had yet.",
    "deeperQuestion": "Can knowing an outcome help prevent its cause?"
  },
  {
    "id": "ponder-weird-008",
    "category": "Weird",
    "emoji": "☁️",
    "title": "The Footnote Person",
    "scenario": "You discover you exist only as a footnote in someone else's biography.",
    "question": "Would you demand a chapter?",
    "twist": "Expanding your story shortens theirs.",
    "deeperQuestion": "Does significance require a central role?"
  },
  {
    "id": "ponder-weird-009",
    "category": "Weird",
    "emoji": "🛸",
    "title": "The Musical Gravity",
    "scenario": "Gravity works only while someone nearby hums.",
    "question": "Would you make humming mandatory?",
    "twist": "Some people cannot comfortably produce the sound.",
    "deeperQuestion": "Who should carry a shared survival burden?"
  },
  {
    "id": "ponder-weird-010",
    "category": "Weird",
    "emoji": "🧦",
    "title": "The Second Moon",
    "scenario": "A second moon appears and asks humans to choose their favorite.",
    "question": "Would you vote?",
    "twist": "The less popular moon will leave permanently.",
    "deeperQuestion": "Can refusing to compare be a meaningful choice?"
  },
  {
    "id": "ponder-weird-011",
    "category": "Weird",
    "emoji": "🗺️",
    "title": "The Escaped Metaphor",
    "scenario": "Your friend's broken heart becomes an actual object needing repair.",
    "question": "Would you fix it?",
    "twist": "Repairing it also removes what they learned.",
    "deeperQuestion": "Is healing the same as returning to an earlier state?"
  },
  {
    "id": "ponder-weird-012",
    "category": "Weird",
    "emoji": "🎈",
    "title": "The Memory Landlord",
    "scenario": "Someone buys the building where your memories are stored.",
    "question": "Would you pay rent?",
    "twist": "They promise not to read the contents.",
    "deeperQuestion": "Can ownership over infrastructure threaten inner freedom?"
  },
  {
    "id": "ponder-weird-013",
    "category": "Weird",
    "emoji": "🕳️",
    "title": "The Future Pet",
    "scenario": "Your future self sends you a pet with no instructions.",
    "question": "Would you keep it?",
    "twist": "It seems afraid of a choice you are about to make.",
    "deeperQuestion": "How much authority should unexplained future knowledge have?"
  },
  {
    "id": "ponder-weird-014",
    "category": "Weird",
    "emoji": "🌀",
    "title": "The Polite Portal",
    "scenario": "A portal asks where you need to go rather than where you want.",
    "question": "Would you enter?",
    "twist": "Its answer conflicts with your plans.",
    "deeperQuestion": "Should a helpful system decide your needs?"
  },
  {
    "id": "ponder-weird-015",
    "category": "Weird",
    "emoji": "👽",
    "title": "The Slow Thunder",
    "scenario": "Thunder arrives years after the lightning that caused it.",
    "question": "Would you trace each sound?",
    "twist": "Some storms occurred before you were born.",
    "deeperQuestion": "How long should consequences remain connected to causes?"
  },
  {
    "id": "ponder-weird-016",
    "category": "Weird",
    "emoji": "🪐",
    "title": "The Opinion Weather",
    "scenario": "Your strongest opinions control the local weather.",
    "question": "Would you soften them?",
    "twist": "Your neighbors demand pleasant conditions.",
    "deeperQuestion": "Can collective comfort justify regulating private conviction?"
  },
  {
    "id": "ponder-weird-017",
    "category": "Weird",
    "emoji": "🚪",
    "title": "The Floating Apology",
    "scenario": "Every unsaid apology becomes a balloon following its owner.",
    "question": "Would you release yours?",
    "twist": "Releasing requires speaking to someone who requested distance.",
    "deeperQuestion": "Can repair respect a boundary against contact?"
  },
  {
    "id": "ponder-weird-018",
    "category": "Weird",
    "emoji": "🌙",
    "title": "The Dream Tenant",
    "scenario": "Someone lives in your dreams and refuses to leave.",
    "question": "Would you evict them?",
    "twist": "They experience your waking hours as total darkness.",
    "deeperQuestion": "Do imagined beings deserve real consideration?"
  },
  {
    "id": "ponder-weird-019",
    "category": "Weird",
    "emoji": "🪞",
    "title": "The Stolen Tomorrow",
    "scenario": "A thief steals tomorrow but leaves every other day intact.",
    "question": "Would you pursue them?",
    "twist": "Tomorrow contained an unpleasant but necessary conversation.",
    "deeperQuestion": "Can losing time sometimes feel like gaining relief?"
  },
  {
    "id": "ponder-weird-020",
    "category": "Weird",
    "emoji": "☁️",
    "title": "The Literal Butterfly",
    "scenario": "One butterfly offers to explain every consequence of your smallest actions.",
    "question": "Would you listen?",
    "twist": "The explanations take longer than your remaining life.",
    "deeperQuestion": "Can too much responsibility make action impossible?"
  },
  {
    "id": "ponder-weird-021",
    "category": "Weird",
    "emoji": "🛸",
    "title": "The Body Subscription",
    "scenario": "Your body becomes a subscription service with optional upgrades.",
    "question": "Would you pay for extras?",
    "twist": "Basic access remains adequate but less socially admired.",
    "deeperQuestion": "When does choice become pressure to improve?"
  },
  {
    "id": "ponder-weird-022",
    "category": "Weird",
    "emoji": "🧦",
    "title": "The Wandering Door",
    "scenario": "Your front door opens into a different person's home each morning.",
    "question": "Would you introduce yourself?",
    "twist": "Some hosts have been expecting you for years.",
    "deeperQuestion": "Does coincidence create any obligation to connect?"
  },
  {
    "id": "ponder-weird-023",
    "category": "Weird",
    "emoji": "🗺️",
    "title": "The Unchosen Narrator",
    "scenario": "A narrator describes your actions with motives you do not recognize.",
    "question": "Would you argue back?",
    "twist": "Listeners believe the narrator more than you.",
    "deeperQuestion": "Who has authority over the meaning of your behavior?"
  },
  {
    "id": "ponder-weird-024",
    "category": "Weird",
    "emoji": "🎈",
    "title": "The Birthday Migration",
    "scenario": "Your birthday moves to whichever day you most need celebration.",
    "question": "Would you keep the magic?",
    "twist": "Friends can never plan ahead.",
    "deeperQuestion": "Is spontaneous care worth losing predictability?"
  },
  {
    "id": "ponder-weird-025",
    "category": "Weird",
    "emoji": "🕳️",
    "title": "The Infinite Pocket",
    "scenario": "Your pocket contains everything you have ever lost, including relationships.",
    "question": "What would you retrieve?",
    "twist": "A returned relationship resumes at its most difficult moment.",
    "deeperQuestion": "Can recovering something differ from repairing it?"
  },
  {
    "id": "ponder-weird-026",
    "category": "Weird",
    "emoji": "🌀",
    "title": "The Dream Election",
    "scenario": "Dream characters elect you their representative in waking life.",
    "question": "Would you accept?",
    "twist": "Their needs conflict with your need for sleep.",
    "deeperQuestion": "Can responsibility cross between imagined and ordinary worlds?"
  },
  {
    "id": "ponder-weird-027",
    "category": "Weird",
    "emoji": "👽",
    "title": "The Reversible Rain",
    "scenario": "Rain rises from the ground, taking forgotten memories into clouds.",
    "question": "Would you collect it?",
    "twist": "Some memories were forgotten for good reasons.",
    "deeperQuestion": "Should recovery always be considered a benefit?"
  },
  {
    "id": "ponder-weird-028",
    "category": "Weird",
    "emoji": "🪐",
    "title": "The Spare Face",
    "scenario": "You find a spare face that strangers instantly trust.",
    "question": "Would you wear it?",
    "twist": "Your usual face remains equally honest.",
    "deeperQuestion": "Is using an unfair advantage wrong when intentions are good?"
  },
  {
    "id": "ponder-weird-029",
    "category": "Weird",
    "emoji": "🚪",
    "title": "The Calendar Animal",
    "scenario": "Your calendar becomes an animal that eats overbooked days.",
    "question": "Would you feed it willingly?",
    "twist": "It cannot distinguish obligations from joyful plans.",
    "deeperQuestion": "Can a protective system remove too much choice?"
  },
  {
    "id": "ponder-weird-030",
    "category": "Weird",
    "emoji": "🌙",
    "title": "The Living Map",
    "scenario": "A map changes the world whenever someone redraws it.",
    "question": "Would you correct unfair borders?",
    "twist": "Every change disrupts somebody's familiar home.",
    "deeperQuestion": "Does power to improve create a duty to intervene?"
  },
  {
    "id": "ponder-weird-031",
    "category": "Weird",
    "emoji": "🪞",
    "title": "The Moon's Complaint",
    "scenario": "The moon asks to remove its image from every romantic poem.",
    "question": "Would you respect the request?",
    "twist": "People insist their private feelings belong to them.",
    "deeperQuestion": "Can being represented create rights over someone else's expression?"
  },
  {
    "id": "ponder-weird-032",
    "category": "Weird",
    "emoji": "☁️",
    "title": "The Reverse Mirror",
    "scenario": "Your reflection ages backward while you age forward.",
    "question": "Would you keep watching?",
    "twist": "It remembers parts of your future imperfectly.",
    "deeperQuestion": "Can uncertain warnings help without taking over your life?"
  },
  {
    "id": "ponder-weird-033",
    "category": "Weird",
    "emoji": "🛸",
    "title": "The Borrowed Voice",
    "scenario": "A stranger borrows your voice and becomes famous for saying things you oppose.",
    "question": "Would you reclaim it?",
    "twist": "Their audience cannot distinguish you afterward.",
    "deeperQuestion": "How much of identity depends on recognizable features?"
  },
  {
    "id": "ponder-weird-034",
    "category": "Weird",
    "emoji": "🧦",
    "title": "The Sentient Password",
    "scenario": "Your password becomes conscious and refuses to be typed.",
    "question": "Would you choose another?",
    "twist": "Changing it feels like abandonment to the password.",
    "deeperQuestion": "Can creating dependence create a duty of care?"
  },
  {
    "id": "ponder-weird-035",
    "category": "Weird",
    "emoji": "🗺️",
    "title": "The Gravity Holiday",
    "scenario": "Earth takes a gravity holiday and asks everyone to hold on.",
    "question": "Would you trust the promise?",
    "twist": "Earth has never made a promise before.",
    "deeperQuestion": "What makes trust reasonable without a track record?"
  },
  {
    "id": "ponder-weird-036",
    "category": "Weird",
    "emoji": "🎈",
    "title": "The Forgotten Color",
    "scenario": "You discover a color nobody else can perceive.",
    "question": "Would you try to prove it?",
    "twist": "Showing proof would make you lose the ability.",
    "deeperQuestion": "Is shared recognition worth a private experience?"
  },
  {
    "id": "ponder-weird-037",
    "category": "Weird",
    "emoji": "🕳️",
    "title": "The Sleep Exchange",
    "scenario": "You can trade dreams with a stranger every night.",
    "question": "Would you agree?",
    "twist": "Their dreams slowly alter your preferences.",
    "deeperQuestion": "When does exposure become a change in identity?"
  },
  {
    "id": "ponder-weird-038",
    "category": "Weird",
    "emoji": "🌀",
    "title": "The Wandering Name",
    "scenario": "Your name leaves and chooses another person.",
    "question": "Would you choose a new one?",
    "twist": "Everyone's memories follow the name rather than you.",
    "deeperQuestion": "Is identity located in experience or recognition?"
  },
  {
    "id": "ponder-weird-039",
    "category": "Weird",
    "emoji": "👽",
    "title": "The Opinion Museum",
    "scenario": "A museum displays every opinion you abandoned as a living creature.",
    "question": "Would you visit?",
    "twist": "The creatures accuse you of betraying them.",
    "deeperQuestion": "Do former beliefs deserve loyalty after growth?"
  },
  {
    "id": "ponder-weird-040",
    "category": "Weird",
    "emoji": "🪐",
    "title": "The Time Garden",
    "scenario": "You grow extra minutes by planting memories.",
    "question": "Would you plant your happiest ones?",
    "twist": "The minutes have no meaning attached to them.",
    "deeperQuestion": "Is more time valuable if it costs lived experience?"
  },
  {
    "id": "ponder-weird-041",
    "category": "Weird",
    "emoji": "🚪",
    "title": "The Dream Copyright",
    "scenario": "An artist claims ownership of an image that appeared in your dream.",
    "question": "Would you pay royalties?",
    "twist": "You later discover they dreamed it too.",
    "deeperQuestion": "Can independent imagination create competing ownership claims?"
  },
  {
    "id": "ponder-weird-042",
    "category": "Weird",
    "emoji": "🌙",
    "title": "The Hungry Horizon",
    "scenario": "The horizon moves closer whenever people stop exploring.",
    "question": "Would you travel constantly?",
    "twist": "Some people find meaning through staying in one place.",
    "deeperQuestion": "Should one kind of curiosity determine everyone's space?"
  },
  {
    "id": "ponder-weird-043",
    "category": "Weird",
    "emoji": "🪞",
    "title": "The Spare Ending",
    "scenario": "You receive an alternate ending to a conversation from ten years ago.",
    "question": "Would you install it?",
    "twist": "Everyone else remembers only the new version.",
    "deeperQuestion": "Can editing history amount to editing other people?"
  },
  {
    "id": "ponder-weird-044",
    "category": "Weird",
    "emoji": "☁️",
    "title": "The Living Silence",
    "scenario": "Silence becomes a creature that leaves whenever anyone feels uncomfortable.",
    "question": "Would you try to keep it?",
    "twist": "Some honest conversations need awkward pauses.",
    "deeperQuestion": "Can discomfort protect something valuable?"
  },
  {
    "id": "ponder-weird-045",
    "category": "Weird",
    "emoji": "🛸",
    "title": "The Doorway Toll",
    "scenario": "Every doorway charges one trivial memory as a toll.",
    "question": "Would you stay home?",
    "twist": "Trivial memories sometimes connect to important ones.",
    "deeperQuestion": "Who can decide which parts of a life are expendable?"
  },
  {
    "id": "ponder-weird-046",
    "category": "Weird",
    "emoji": "🧦",
    "title": "The Portable Midnight",
    "scenario": "You can carry midnight in a jar and release it anywhere.",
    "question": "Would you use it for peace?",
    "twist": "Everyone nearby must experience the darkness too.",
    "deeperQuestion": "When does a personal refuge impose on others?"
  },
  {
    "id": "ponder-weird-047",
    "category": "Weird",
    "emoji": "🗺️",
    "title": "The Cloud Court",
    "scenario": "Clouds put humanity on trial for assigning them gloomy personalities.",
    "question": "How would you defend us?",
    "twist": "They admit enjoying dramatic weather.",
    "deeperQuestion": "Can stereotypes remain harmful when sometimes accurate?"
  },
  {
    "id": "ponder-weird-048",
    "category": "Weird",
    "emoji": "🎈",
    "title": "The Living Punctuation",
    "scenario": "Your punctuation marks refuse to support statements they consider dishonest.",
    "question": "Would you write without them?",
    "twist": "They mistake uncertainty for dishonesty.",
    "deeperQuestion": "Can enforcing truth make nuance impossible?"
  },
  {
    "id": "ponder-weird-049",
    "category": "Weird",
    "emoji": "🕳️",
    "title": "The Memory Hotel",
    "scenario": "You may visit any memory as a hotel guest.",
    "question": "Would you stay long?",
    "twist": "Other people in the memory notice your repeated visits.",
    "deeperQuestion": "Can nostalgia become an intrusion into the past?"
  },
  {
    "id": "ponder-weird-050",
    "category": "Weird",
    "emoji": "🌀",
    "title": "The Invisible Border",
    "scenario": "Crossing an invisible line changes your personality slightly.",
    "question": "Would you map the line?",
    "twist": "Every crossing changes what you consider worth preserving.",
    "deeperQuestion": "Which version of you should decide when to stop?"
  },
  {
    "id": "ponder-weird-051",
    "category": "Weird",
    "emoji": "👽",
    "title": "The Personal Eclipse",
    "scenario": "The sun hides whenever you avoid an important truth.",
    "question": "Would you confess everything?",
    "twist": "Some truths belong partly to other people.",
    "deeperQuestion": "Can pressure for honesty violate someone else's privacy?"
  },
  {
    "id": "ponder-weird-052",
    "category": "Weird",
    "emoji": "🪐",
    "title": "The Paper Future",
    "scenario": "Your future arrives folded into a paper airplane.",
    "question": "Would you unfold it?",
    "twist": "Reading it prevents it from flying any farther.",
    "deeperQuestion": "Does understanding a possibility sometimes end it?"
  },
  {
    "id": "ponder-weird-053",
    "category": "Weird",
    "emoji": "🚪",
    "title": "The Dream Grocery",
    "scenario": "A shop sells ingredients for other people's ambitions.",
    "question": "Would you try one?",
    "twist": "Your existing dreams become less vivid afterward.",
    "deeperQuestion": "Can inspiration crowd out an authentic desire?"
  },
  {
    "id": "ponder-weird-054",
    "category": "Weird",
    "emoji": "🌙",
    "title": "The Echo Citizen",
    "scenario": "Your echo becomes legally independent and repeats things selectively.",
    "question": "Would you claim responsibility for it?",
    "twist": "It uses your voice to express new opinions.",
    "deeperQuestion": "Where does an extension of you become someone else?"
  },
  {
    "id": "ponder-weird-055",
    "category": "Weird",
    "emoji": "🪞",
    "title": "The Walking House",
    "scenario": "Your house grows legs and seeks better neighbors.",
    "question": "Would you let it choose?",
    "twist": "You love the neighborhood it dislikes.",
    "deeperQuestion": "Who should decide where a shared home belongs?"
  },
  {
    "id": "ponder-weird-056",
    "category": "Weird",
    "emoji": "☁️",
    "title": "The Unused Hour",
    "scenario": "Every unused hour becomes a small ghost asking for a purpose.",
    "question": "Would you give them tasks?",
    "twist": "Rest produces the gentlest ghosts.",
    "deeperQuestion": "Must every part of time justify its use?"
  },
  {
    "id": "ponder-weird-057",
    "category": "Weird",
    "emoji": "🛸",
    "title": "The Reverse Gift",
    "scenario": "A gift travels backward and improves the giver's childhood.",
    "question": "Would you accept it today?",
    "twist": "Rejecting it erases their happy memory.",
    "deeperQuestion": "Can gratitude be owed for consequences you did not choose?"
  },
  {
    "id": "ponder-weird-058",
    "category": "Weird",
    "emoji": "🧦",
    "title": "The Borrowed Dream",
    "scenario": "A stranger asks to borrow your biggest ambition for a year.",
    "question": "Would you lend it?",
    "twist": "They might accomplish it before you do.",
    "deeperQuestion": "Does a dream matter because it is yours?"
  },
  {
    "id": "ponder-weird-059",
    "category": "Weird",
    "emoji": "🗺️",
    "title": "The Talking Distance",
    "scenario": "The distance between you and a friend begs to become smaller.",
    "question": "Would you move closer?",
    "twist": "Your friendship works partly because you have space.",
    "deeperQuestion": "Can less distance mean less closeness?"
  },
  {
    "id": "ponder-weird-060",
    "category": "Weird",
    "emoji": "🎈",
    "title": "The Living Mistake",
    "scenario": "Your biggest mistake becomes a small person who wants affection.",
    "question": "Would you care for them?",
    "twist": "They cannot undo the harm that created them.",
    "deeperQuestion": "Can compassion coexist with rejecting an origin?"
  },
  {
    "id": "ponder-weird-061",
    "category": "Weird",
    "emoji": "🕳️",
    "title": "The Time Allergy",
    "scenario": "You become allergic to time spent pretending to enjoy things.",
    "question": "Would you change your commitments?",
    "twist": "Some necessary obligations trigger the reaction.",
    "deeperQuestion": "Is authenticity always compatible with responsibility?"
  },
  {
    "id": "ponder-weird-062",
    "category": "Weird",
    "emoji": "🌀",
    "title": "The Dream Repair",
    "scenario": "You repair someone's recurring nightmare and find they miss it.",
    "question": "Would you restore it?",
    "twist": "It contained the only memory of someone they lost.",
    "deeperQuestion": "Can distress also carry something worth preserving?"
  },
  {
    "id": "ponder-weird-063",
    "category": "Weird",
    "emoji": "👽",
    "title": "The Borrowed Future",
    "scenario": "You can borrow a successful person's next ten years.",
    "question": "Would you take them?",
    "twist": "They receive your uncertain decade instead.",
    "deeperQuestion": "Can a fair trade involve unequal knowledge?"
  },
  {
    "id": "ponder-weird-064",
    "category": "Weird",
    "emoji": "🪐",
    "title": "The Honest Wallpaper",
    "scenario": "Your wallpaper displays the emotional atmosphere of your home.",
    "question": "Would you keep it visible?",
    "twist": "Visitors see conflicts you prefer to discuss privately.",
    "deeperQuestion": "Does making feelings visible improve understanding?"
  },
  {
    "id": "ponder-weird-065",
    "category": "Weird",
    "emoji": "🚪",
    "title": "The Rebellious Compass",
    "scenario": "A compass points toward what you avoid rather than north.",
    "question": "Would you follow it?",
    "twist": "Sometimes avoidance protects a healthy boundary.",
    "deeperQuestion": "Is facing something always braver than leaving it?"
  },
  {
    "id": "ponder-weird-066",
    "category": "Weird",
    "emoji": "🌙",
    "title": "The Last Umbrella",
    "scenario": "An umbrella protects you from consequences rather than rain.",
    "question": "Would you open it?",
    "twist": "The consequences land on the surrounding street.",
    "deeperQuestion": "Can personal protection simply redistribute harm?"
  },
  {
    "id": "ponder-weird-067",
    "category": "Weird",
    "emoji": "🪞",
    "title": "The Dream Neighbor",
    "scenario": "A person from your dreams moves into the apartment next door.",
    "question": "Would you trust them?",
    "twist": "They remember your dreams differently.",
    "deeperQuestion": "Whose version of a shared experience deserves belief?"
  },
  {
    "id": "ponder-weird-068",
    "category": "Weird",
    "emoji": "☁️",
    "title": "The Sentient Monday",
    "scenario": "Monday asks to be renamed because everyone dislikes it.",
    "question": "Would you agree?",
    "twist": "The same responsibilities remain on the renamed day.",
    "deeperQuestion": "Can changing language change a lived experience?"
  },
  {
    "id": "ponder-weird-069",
    "category": "Weird",
    "emoji": "🛸",
    "title": "The Borrowed Gravity",
    "scenario": "You borrow gravity from another planet to keep your feet grounded.",
    "question": "Would you return it?",
    "twist": "Returning it leaves you floating indefinitely.",
    "deeperQuestion": "Can dependence justify keeping what someone else needs?"
  },
  {
    "id": "ponder-weird-070",
    "category": "Weird",
    "emoji": "🧦",
    "title": "The Memory Weather",
    "scenario": "Shared memories become weather that everyone nearby experiences.",
    "question": "Would you relive a happy one publicly?",
    "twist": "Someone involved remembers it as painful.",
    "deeperQuestion": "Can one person's nostalgia become another's burden?"
  },
  {
    "id": "ponder-weird-071",
    "category": "Weird",
    "emoji": "🗺️",
    "title": "The Portable Ancestor",
    "scenario": "An ancestor's voice appears inside your pocket to advise you.",
    "question": "Would you keep listening?",
    "twist": "Their advice reflects values you no longer share.",
    "deeperQuestion": "How should inherited wisdom meet changing ethics?"
  },
  {
    "id": "ponder-weird-072",
    "category": "Weird",
    "emoji": "🎈",
    "title": "The Vanishing Noun",
    "scenario": "An object disappears whenever nobody can remember its name.",
    "question": "Would you preserve every word?",
    "twist": "Remembering everything leaves little room to learn anything new.",
    "deeperQuestion": "How much should preservation constrain growth?"
  },
  {
    "id": "ponder-weird-073",
    "category": "Weird",
    "emoji": "🕳️",
    "title": "The Emotional Currency",
    "scenario": "People pay for goods using minutes of genuine joy.",
    "question": "Would you buy luxuries?",
    "twist": "Saving joy means experiencing less of it now.",
    "deeperQuestion": "Can a feeling remain itself when treated as wealth?"
  },
  {
    "id": "ponder-weird-074",
    "category": "Weird",
    "emoji": "🌀",
    "title": "The Future Roommate",
    "scenario": "Your older self moves in and refuses to explain their choices.",
    "question": "Would you demand answers?",
    "twist": "They say knowing too much caused their regrets.",
    "deeperQuestion": "Does future experience justify present secrecy?"
  },
  {
    "id": "ponder-weird-075",
    "category": "Weird",
    "emoji": "👽",
    "title": "The Living Shortcut",
    "scenario": "A shortcut begs travelers to use the long route so it can rest.",
    "question": "Would you listen?",
    "twist": "You are already late for something important.",
    "deeperQuestion": "Do tools owe uninterrupted usefulness to their users?"
  },
  {
    "id": "ponder-weird-076",
    "category": "Weird",
    "emoji": "🪐",
    "title": "The Reversible Name",
    "scenario": "Saying your name backward temporarily makes you the opposite of yourself.",
    "question": "Would you experiment?",
    "twist": "Some opposite traits seem healthier.",
    "deeperQuestion": "Can rejecting yourself become a route to growth?"
  },
  {
    "id": "ponder-weird-077",
    "category": "Weird",
    "emoji": "🚪",
    "title": "The Dream Curator",
    "scenario": "Someone curates your dreams for educational value rather than enjoyment.",
    "question": "Would you opt out?",
    "twist": "The dreams make you wiser but less rested.",
    "deeperQuestion": "Who should decide the purpose of private experience?"
  },
  {
    "id": "ponder-weird-078",
    "category": "Weird",
    "emoji": "🌙",
    "title": "The Gentle Apocalypse",
    "scenario": "The world ends by slowly becoming everyone's favorite childhood place.",
    "question": "Would you resist?",
    "twist": "Adults begin forgetting the lives they built.",
    "deeperQuestion": "Can comfort conceal a profound loss?"
  },
  {
    "id": "ponder-weird-079",
    "category": "Weird",
    "emoji": "🪞",
    "title": "The Star Interview",
    "scenario": "A star offers you a job shining over an unfamiliar planet.",
    "question": "Would you accept?",
    "twist": "Its inhabitants will never know you are conscious.",
    "deeperQuestion": "Can meaningful service replace personal connection?"
  },
  {
    "id": "ponder-weird-080",
    "category": "Weird",
    "emoji": "☁️",
    "title": "The Shared Shadow",
    "scenario": "Two strangers discover they share one shadow.",
    "question": "Would you coordinate your lives?",
    "twist": "The shadow feels happiest when you disagree.",
    "deeperQuestion": "Does connection require harmony?"
  },
  {
    "id": "ponder-weird-081",
    "category": "Weird",
    "emoji": "🛸",
    "title": "The Unwritten Day",
    "scenario": "One day appears blank in every calendar and nobody knows how to spend it.",
    "question": "What would you do?",
    "twist": "Anything done that day leaves no record.",
    "deeperQuestion": "Does freedom increase when consequences cannot be documented?"
  },
  {
    "id": "ponder-weird-082",
    "category": "Weird",
    "emoji": "🧦",
    "title": "The Living Rumor",
    "scenario": "A rumor becomes a creature that survives by being repeated.",
    "question": "Would you let it disappear?",
    "twist": "It is friendly but completely untrue.",
    "deeperQuestion": "Can compassion justify preserving misinformation?"
  },
  {
    "id": "ponder-weird-083",
    "category": "Weird",
    "emoji": "🗺️",
    "title": "The Memory Orchard",
    "scenario": "Trees grow fruit containing strangers' childhood experiences.",
    "question": "Would you taste them?",
    "twist": "The strangers never agreed to share.",
    "deeperQuestion": "Can curiosity make an intimate experience feel like a commodity?"
  },
  {
    "id": "ponder-weird-084",
    "category": "Weird",
    "emoji": "🎈",
    "title": "The Dream Passport",
    "scenario": "You need a passport to enter another person's dream.",
    "question": "Who should issue it?",
    "twist": "The dreamer changes their mind while asleep.",
    "deeperQuestion": "How should consent work when preferences shift mid-experience?"
  },
  {
    "id": "ponder-weird-085",
    "category": "Weird",
    "emoji": "🕳️",
    "title": "The Backward Promise",
    "scenario": "A promise binds you before you have decided to make it.",
    "question": "Would you resist?",
    "twist": "Breaking it harms someone already relying on you.",
    "deeperQuestion": "Can obligations exist without prior consent?"
  },
  {
    "id": "ponder-weird-086",
    "category": "Weird",
    "emoji": "🌀",
    "title": "The Listening Mountain",
    "scenario": "A mountain grows taller whenever someone shares a secret with it.",
    "question": "Would you confide in it?",
    "twist": "Eventually it may block sunlight from a village.",
    "deeperQuestion": "Can a private act carry distant collective consequences?"
  },
  {
    "id": "ponder-weird-087",
    "category": "Weird",
    "emoji": "👽",
    "title": "The Sentient Reflection",
    "scenario": "Your reflection requests a different hairstyle from yours.",
    "question": "Would you accommodate it?",
    "twist": "Changing your hair does not change theirs anymore.",
    "deeperQuestion": "At what point does resemblance stop implying ownership?"
  },
  {
    "id": "ponder-weird-088",
    "category": "Weird",
    "emoji": "🪐",
    "title": "The Borrowed Silence",
    "scenario": "You can borrow a peaceful person's inner silence for an hour.",
    "question": "Would you ask?",
    "twist": "They inherit your racing thoughts during that hour.",
    "deeperQuestion": "When does emotional support become exchanging burdens?"
  },
  {
    "id": "ponder-weird-089",
    "category": "Weird",
    "emoji": "🚪",
    "title": "The Wandering Future",
    "scenario": "Your future separates from you and starts making its own plans.",
    "question": "Would you negotiate?",
    "twist": "It believes your current goals are limiting it.",
    "deeperQuestion": "Who owns possibilities that have not happened yet?"
  },
  {
    "id": "ponder-weird-090",
    "category": "Weird",
    "emoji": "🌙",
    "title": "The Literal Connection",
    "scenario": "Every close relationship creates a visible string between two people.",
    "question": "Would you cut an uncomfortable one?",
    "twist": "The other person can feel the cut.",
    "deeperQuestion": "Does making a boundary visible make it less fair?"
  },
  {
    "id": "ponder-weird-091",
    "category": "Weird",
    "emoji": "🪞",
    "title": "The Dream Archive",
    "scenario": "Your dreams are automatically archived in a public library.",
    "question": "Would you demand deletion?",
    "twist": "Researchers find them culturally valuable.",
    "deeperQuestion": "Can collective interest outweigh intimate privacy?"
  },
  {
    "id": "ponder-weird-092",
    "category": "Weird",
    "emoji": "☁️",
    "title": "The Floating City",
    "scenario": "Your city floats toward whichever place residents miss most.",
    "question": "Would you reveal your longing?",
    "twist": "A small group's intense grief outweighs the majority's wishes.",
    "deeperQuestion": "Should collective choices consider intensity as well as numbers?"
  },
  {
    "id": "ponder-weird-093",
    "category": "Weird",
    "emoji": "🛸",
    "title": "The Helpful Void",
    "scenario": "A friendly void offers to remove one problem from existence.",
    "question": "Would you accept?",
    "twist": "Removing the problem also erases everyone shaped by it.",
    "deeperQuestion": "Can solving a problem destroy unexpected meaning?"
  },
  {
    "id": "ponder-weird-094",
    "category": "Weird",
    "emoji": "🧦",
    "title": "The Borrowed Ending",
    "scenario": "A stranger offers you the satisfying ending of their unfinished story.",
    "question": "Would you take it?",
    "twist": "Their remaining life becomes open and uncertain.",
    "deeperQuestion": "Is closure valuable enough to transfer?"
  },
  {
    "id": "ponder-weird-095",
    "category": "Weird",
    "emoji": "🗺️",
    "title": "The Living Doorbell",
    "scenario": "Your doorbell feels rejected whenever visitors leave quickly.",
    "question": "Would you invite them longer?",
    "twist": "Visitors came only to deliver packages.",
    "deeperQuestion": "Can caring for one being impose on uninvolved people?"
  },
  {
    "id": "ponder-weird-096",
    "category": "Weird",
    "emoji": "🎈",
    "title": "The Time Translation",
    "scenario": "A device translates your present choices into how future people describe them.",
    "question": "Would you use it?",
    "twist": "Their values differ sharply from yours.",
    "deeperQuestion": "Should future judgment determine present morality?"
  },
  {
    "id": "ponder-weird-097",
    "category": "Weird",
    "emoji": "🕳️",
    "title": "The Invisible Garden",
    "scenario": "A garden grows only when nobody checks whether it is growing.",
    "question": "Would you stop looking?",
    "twist": "You cannot know whether it needs care.",
    "deeperQuestion": "Can trust require accepting limited evidence?"
  },
  {
    "id": "ponder-weird-098",
    "category": "Weird",
    "emoji": "🌀",
    "title": "The Shared Body Clock",
    "scenario": "Your body clock synchronizes with the person you miss most.",
    "question": "Would you tell them?",
    "twist": "They live on the other side of the world.",
    "deeperQuestion": "Can an involuntary connection create a claim on someone?"
  },
  {
    "id": "ponder-weird-099",
    "category": "Weird",
    "emoji": "👽",
    "title": "The Unfinished Planet",
    "scenario": "You discover Earth is an unfinished art project whose creator wants it back.",
    "question": "Would you object?",
    "twist": "Finishing the work would erase unpredictable human choices.",
    "deeperQuestion": "Does creating something grant permanent authority over it?"
  },
  {
    "id": "ponder-weird-100",
    "category": "Weird",
    "emoji": "🪐",
    "title": "The Universe's Favor",
    "scenario": "The universe asks you to exist one extra minute after everyone else.",
    "question": "Would you agree?",
    "twist": "It says it does not want to end alone.",
    "deeperQuestion": "Can companionship matter even when no future follows?"
  }
];
