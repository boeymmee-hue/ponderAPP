export const categories = ["Cute", "Funny", "Moral", "Love", "Deep", "Weird"] as const;
export type Category = typeof categories[number];
export interface CardText { title: string; scenario: string; question: string; twist: string; deeperQuestion: string; }
export interface Question extends CardText { id: string; category: Category; emoji: string; zh: CardText; }

// Keep IDs stable: existing seen-card history remains compatible.
export const questions: Question[] = [
  {
    "category": "Cute",
    "emoji": "🌷",
    "title": "The Happiness Creature",
    "scenario": "Every night, a tiny creature secretly takes away some of your sadness. You become happier every day. One night, you discover that your sadness doesn't disappear—the creature has to feel it instead. It tells you that it genuinely wants to continue because making you happy gives its life meaning.\n\nYou have begun relying on the relief to reconnect with friends and enjoy ordinary days. Refusing its help would return your sadness, but accepting means knowingly allowing another being to carry an experience you find difficult to bear.",
    "question": "Would you let it continue?",
    "twist": "Imagine the creature isn't a magical creature. It's someone you deeply love.",
    "deeperQuestion": "If someone willingly suffers because they love you, is accepting their sacrifice selfish—or can allowing someone to care for you also be an act of love?",
    "id": "ponder-01",
    "zh": {
      "title": "吞走悲傷的小生物",
      "scenario": "每晚，一隻小生物都會悄悄帶走你的一部分悲傷，你也一天比一天快樂。某個晚上，你發現悲傷其實沒有消失，而是轉到牠身上，由牠代你承受。牠說自己真心願意繼續，因為讓你快樂，令牠的生命有了意義。\n\n你已開始依靠這份安慰，重新與朋友來往，享受平凡的日子。拒絕幫助，就要再次承受悲傷；接受，則意味著你清楚知道代價，仍讓另一個生命替你承受自己難以承受的感受。",
      "question": "你會讓它繼續下去嗎？",
      "twist": "想像一下，這個生物不是魔法生物，而是你深愛的人。",
      "deeperQuestion": "如果有人因為愛你而甘願受苦，接受他們的犧牲是自私的嗎？還是允許別人照顧你也是愛的行為？"
    }
  },
  {
    "category": "Funny",
    "emoji": "🐶",
    "title": "Your Dog Wants a Lawyer",
    "scenario": "Scientists invent a device that allows your dog to speak. Your dog reveals that it has always been fully intelligent. It remembers every time you controlled when it ate, walked outside, went to bed—and every time you pretended to throw the ball.\n\nYou have always understood feeding and shelter as evidence of love, not as a bargain requiring consent. Hearing your dog describe the same years as restricted freedom challenges whether good care automatically gives you authority over the one receiving it.",
    "question": "Does your dog have the right to leave you and live independently?",
    "twist": "Your dog hires a lawyer and demands compensation for years of being legally treated as your property.",
    "deeperQuestion": "If an animal had human-level intelligence, would owning it become morally wrong?",
    "id": "ponder-02",
    "zh": {
      "title": "你的狗需要律師",
      "scenario": "科學家發明了一個可以讓狗狗說話的裝置。你的狗狗卻透露，牠一直擁有完整的理解和思考能力。它記得你每一次控制牠吃飯、外出、睡覺的時間——以及你每一次假裝丟球。你一直把餵食和提供住所視為愛的體現，而不是需要同意的交易。聽到你的狗狗描述那些被限制自由的歲月，不禁讓人質疑：良好的照顧是否就自動賦予了你對接受照顧者的支配權。",
      "question": "你的狗有權利離開你並獨立生活嗎？",
      "twist": "你的狗聘請律師，要求你為多年來在法律上把牠當成財產而作出賠償。",
      "deeperQuestion": "如果動物擁有人類等級的智力，那麼擁有它是否在道德上是錯誤的？"
    }
  },
  {
    "category": "Moral",
    "emoji": "🔴",
    "title": "The $10 Million Button",
    "scenario": "There is a button in front of you. Press it and you instantly receive $10 million. Somewhere in the world, one completely random person will die. Nobody will ever discover what happened.\n\nThe money could change your family's future and fund genuinely helpful work, so the choice is not merely about buying luxuries. Still, the stranger whose life would pay for those benefits has no chance to consent or tell you who depends on them.",
    "question": "Would you press it?",
    "twist": "If you refuse, the button will simply be offered to another person.",
    "deeperQuestion": "Are you responsible only for the harm you personally cause, or also for harm you knowingly allow?",
    "id": "ponder-03",
    "zh": {
      "title": "價值1000萬美元的按鈕",
      "scenario": "你面前有一個按鈕。按下它，你將立即獲得1000萬美元。世界上某個地方，一個完全隨機的人將會死去。沒有人會知道發生了什麼事。這筆錢可以改變你家人的未來，並資助真正有益的工作，所以這不僅僅是購買奢侈品的問題。然而，那個用生命換取這些福祉的陌生人，卻沒有機會表達同意，也無法告訴你誰需要他的幫助。",
      "question": "你會按下它嗎？",
      "twist": "如果你拒絕，按鈕就會提供給另一個人。",
      "deeperQuestion": "你只需要為自己親手造成的傷害負責，還是連你明知會發生、卻選擇不阻止的傷害，也要負責？"
    }
  },
  {
    "category": "Love",
    "emoji": "🧠",
    "title": "Forget the Betrayal",
    "scenario": "Your partner cheats on you once, immediately regrets it and confesses. A technology exists that can permanently erase your memory of the betrayal. You know with certainty that your partner will never cheat again.\n\nYou have shared years of ordinary trust and still value the life you built together. Erasing the event would remove the pain, but also remove your future ability to remember why rebuilding that trust mattered and what you consciously chose to forgive.",
    "question": "Would you erase the memory?",
    "twist": "If you erase it, you will never discover the truth again and will probably live a happier relationship.",
    "deeperQuestion": "Is happiness based partly on ignorance better than a painful life based on truth?",
    "id": "ponder-04",
    "zh": {
      "title": "忘記背叛",
      "scenario": "你的伴侶曾經出軌一次，隨即後悔並向你坦白。現在有一種技術，可以永久抹去你對這次背叛的記憶，而且你確切知道，伴侶以後絕不會再出軌。\n\n你們多年來建立了信任，你仍珍惜一起經營的生活。抹去記憶可以消除痛苦，但往後你也不會記得，為甚麼重建信任如此重要，以及當初自己清醒地選擇了原諒甚麼。",
      "question": "你會抹去這段記憶嗎？",
      "twist": "如果你抹去它，你將永遠無法再次發現真相，並且可能會擁有更幸福的關係。",
      "deeperQuestion": "部分建立在不知情之上的幸福，會比知道真相卻痛苦的人生更好嗎？"
    }
  },
  {
    "category": "Deep",
    "emoji": "🪞",
    "title": "Are You Still You?",
    "scenario": "Tomorrow you wake up with every autobiographical memory erased. You have the same body and brain, but remember none of your relationships, experiences or past decisions.\n\nPeople around you still feel affection, anger, and expectations connected to the person they remember. You would face commitments whose history is unavailable to you, leaving open whether continuity of body is enough to inherit a whole earlier life.",
    "question": "Are you still the same person?",
    "twist": "Someone else has somehow received all of your old memories and genuinely believes they are you.",
    "deeperQuestion": "Who now has a stronger claim to your identity: your body or the person carrying your memories?",
    "id": "ponder-05",
    "zh": {
      "title": "你還是你嗎？",
      "scenario": "明天醒來，你失去了所有關於自己人生的記憶。身體和大腦仍然一樣，你卻記不起任何關係、經歷，或自己曾作出的決定。\n\n身邊的人仍然對他們記憶中的你懷有感情、憤怒和期望。你要面對一些自己已忘記來由的承諾：僅僅擁有同一副身體，就足以讓你承接過去整段人生嗎？",
      "question": "你還是原來的你嗎？",
      "twist": "其他人以某種方式獲得了你所有的舊記憶，並且真心相信他們就是你。",
      "deeperQuestion": "現在誰更有資格被視為你：擁有你身體的人，還是承載你記憶的人？"
    }
  },
  {
    "category": "Weird",
    "emoji": "👯",
    "title": "Your Clone Got Up First",
    "scenario": "Scientists accidentally create a perfect clone of you with all your memories and personality. The clone wakes up 30 minutes before you and convinces your friends and family that YOU are the clone.\n\nBoth of you can describe private jokes, unfinished ambitions, and promises made to the same people. Neither feels like a new arrival, yet your familiar home and relationships were never designed to accommodate two equally sincere claims to the same history.",
    "question": "Who deserves to keep your identity and life?",
    "twist": "There is scientifically no way to determine which consciousness is the \"original\".",
    "deeperQuestion": "If both versions sincerely remember being you, does being the original actually matter?",
    "id": "ponder-06",
    "zh": {
      "title": "你的複製人先醒來了",
      "scenario": "科學家意外製造了一個完美的複製人，擁有你全部的記憶和性格。複製人比你早三十分鐘醒來，並成功說服你的親友：你才是後來製造出來的那個。\n\n你們都記得私下的笑話、未完成的夢想，以及對同一群人許下的承諾。誰也不覺得自己是外來者，但你熟悉的家庭與關係，卻沒有空間同時容納兩個真心認為同一段過去屬於自己的人。",
      "question": "誰有資格保留你的身分和生活？",
      "twist": "科學上完全無法判定，哪一個意識才是原本的你。",
      "deeperQuestion": "如果兩個版本都真心記得自己是你，那麼誰是原版真的很重要嗎？"
    }
  },
  {
    "id": "ponder-cute-002",
    "category": "Cute",
    "emoji": "🌷",
    "title": "Pocket Sunshine",
    "scenario": "A pocket-sized sun follows you but makes rainy-day lovers miserable.\n\nIt has made your difficult mornings bearable, and you cannot move it elsewhere. Your closest neighbor says the constant brightness stops them sleeping.",
    "question": "Would you keep it?",
    "twist": "It only shines while you feel happy.",
    "deeperQuestion": "Whose comfort should shared spaces prioritize?",
    "zh": {
      "title": "口袋陽光",
      "scenario": "一個口袋大小的太陽整天跟著你，卻讓喜歡雨天的人很不快樂。它令你原本難熬的早晨變得好過，你也無法把它搬到別處。住得最近的鄰居卻說，持續的光亮已經令自己睡不好。你喜歡的陪伴，開始影響別人的日常生活。",
      "question": "你會保留它嗎？",
      "twist": "只有當你感到快樂時，它才會閃耀。",
      "deeperQuestion": "共享空間應該優先考慮誰的舒適度？"
    }
  },
  {
    "id": "ponder-cute-003",
    "category": "Cute",
    "emoji": "🧸",
    "title": "Last Biscuit",
    "scenario": "Your grandparent secretly saves their favorite biscuit for you every visit.\n\nYou recently learned that these biscuits remind them of someone they lost. Buying replacements would preserve the taste but change their little act of giving.",
    "question": "Would you keep accepting it?",
    "twist": "Giving it away is their favorite ritual.",
    "deeperQuestion": "Can receiving be a form of generosity?",
    "zh": {
      "title": "最後的餅乾",
      "scenario": "每次你去探望祖父母，對方都會偷偷留下一塊最喜歡的餅乾給你。最近你才知道，這款餅乾會讓對方想起一位已離世的親人。你可以買一盒新的補上，但同樣的味道，未必能取代那份特意留給你的心意。",
      "question": "你會繼續接受嗎？",
      "twist": "把東西送人是他們最喜歡的儀式。",
      "deeperQuestion": "接受可以是一種慷慨的形式嗎？"
    }
  },
  {
    "id": "ponder-cute-004",
    "category": "Cute",
    "emoji": "🌻",
    "title": "Lost Teddy",
    "scenario": "You find your childhood teddy in another child's treasured toy collection.\n\nYou recognize a repair you made years ago and feel unexpectedly possessive. The new owner has slept beside it since arriving in an unfamiliar home.",
    "question": "Would you ask for it back?",
    "twist": "The child knows its entire invented history.",
    "deeperQuestion": "Does love create a stronger claim than ownership?",
    "zh": {
      "title": "失蹤的泰迪熊",
      "scenario": "你在另一個孩子珍藏的玩具收藏中發現了自己童年的泰迪熊。你認出上面有你多年前修補過的痕跡，頓時湧起一股莫名的佔有欲。新主人自從來到這間陌生的房子後，就一直把它放在身邊睡覺。",
      "question": "你會要求把它要回來嗎？",
      "twist": "孩子知道它全部虛構的歷史。",
      "deeperQuestion": "愛是否比所有權更有力？"
    }
  },
  {
    "id": "ponder-cute-005",
    "category": "Cute",
    "emoji": "🐣",
    "title": "Cloud Adoption",
    "scenario": "A lonely cloud chooses you and rains whenever you leave home.\n\nAt first the rain feels like affection, but your friends stop visiting. The cloud interprets umbrellas as rejection and genuinely wants to learn your boundaries.",
    "question": "Would you adopt it?",
    "twist": "Other clouds offer it a less attentive home.",
    "deeperQuestion": "Where does care become responsibility for every feeling?",
    "zh": {
      "title": "領養一朵雲",
      "scenario": "一朵孤獨的雲選中了你，每當你離開家，它就會下雨。起初，這雨讓你覺得是關愛，但你的朋友們不再來探望你。雲把雨傘解讀為拒絕，它真心想了解你的底線。",
      "question": "你會收養這朵雲嗎？",
      "twist": "其他雲朵為它提供了一個不太受關注的家。",
      "deeperQuestion": "關懷何時變成對每一種感受的責任？"
    }
  },
  {
    "id": "ponder-cute-006",
    "category": "Cute",
    "emoji": "☁️",
    "title": "Secret Garden",
    "scenario": "Flowers bloom whenever you anonymously help someone.\n\nA particularly difficult week leaves you craving proof that your care matters. You wonder whether inviting people in would inspire generosity or turn your kindness into performance.",
    "question": "Would you reveal your garden?",
    "twist": "Visitors would donate money if they knew.",
    "deeperQuestion": "Does recognition change the meaning of kindness?",
    "zh": {
      "title": "秘密花園",
      "scenario": "當你匿名幫助他人時，鮮花就會綻放。經歷一段格外艱難的時期後，你渴望得到證明，證明你的關心是有意義的。你思忖著，邀請他人參與進來，究竟會激發他們的慷慨，還是會讓你的善意變成一種表演。",
      "question": "你願意展示你的花園嗎？",
      "twist": "如果遊客知道這一點，他們就會捐款。",
      "deeperQuestion": "認同是否會改變善良的意義？"
    }
  },
  {
    "id": "ponder-cute-007",
    "category": "Cute",
    "emoji": "🍪",
    "title": "Tiny Applause",
    "scenario": "Invisible mice applaud every small task you complete.\n\nThey celebrate brushing your teeth as enthusiastically as finishing important work. Their encouragement helps, but you are beginning to rely on applause before feeling proud.",
    "question": "Would you invite friends to hear them?",
    "twist": "The mice also applaud your unkind choices.",
    "deeperQuestion": "Is unconditional encouragement always helpful?",
    "zh": {
      "title": "微弱的掌聲",
      "scenario": "隱形的小老鼠會為你完成的每一件小事鼓掌。它們會像慶祝你完成重要工作一樣熱情地慶祝你刷牙。它們的鼓勵確實有幫助，但你開始依賴掌聲才能感到自豪。",
      "question": "你會邀請朋友來聽嗎？",
      "twist": "老鼠也對你這種不友善的選擇表示讚賞。",
      "deeperQuestion": "無條件的鼓勵總是有幫助的嗎？"
    }
  },
  {
    "id": "ponder-cute-008",
    "category": "Cute",
    "emoji": "🧶",
    "title": "Borrowed Birthday",
    "scenario": "A neighbor who dislikes birthdays offers you their annual celebration.\n\nYou have never enjoyed being the center of attention before. Accepting would mean inheriting a guest list whose relationships you have not actually built.",
    "question": "Would you accept it?",
    "twist": "Their friends only attend out of obligation.",
    "deeperQuestion": "Can a gift transfer emotional expectations?",
    "zh": {
      "title": "借來的生日",
      "scenario": "一位不喜歡過生日的鄰居，提出把今年整場生日慶祝活動送給你，讓你成為主角。你從未好好享受過被大家重視的感覺，但名單上的客人都是鄰居的朋友。接受這份禮物，也意味著接下一群你尚未建立感情的人的期待。",
      "question": "你會接受嗎？",
      "twist": "他們的朋友只是出於義務才來參加。",
      "deeperQuestion": "禮物可以傳遞情感期待嗎？"
    }
  },
  {
    "id": "ponder-cute-009",
    "category": "Cute",
    "emoji": "🌱",
    "title": "Sleepy Dragon",
    "scenario": "Your pet dragon can guard your street or finally hibernate comfortably.\n\nYou promised it a peaceful home before discovering its protective talent. Neighbors have since stopped making their own safety plans because they assume it will always help.",
    "question": "Would you let it sleep?",
    "twist": "Everyone has started relying on its protection.",
    "deeperQuestion": "Can being useful trap someone in a role?",
    "zh": {
      "title": "瞌睡龍",
      "scenario": "你的寵物龍可以守護你的街道，或是舒舒服服地冬眠。在你發現它擁有守護的天賦之前，你曾承諾要給它一個寧靜的家。鄰居們從此不再制定自己的安全計劃，因為他們相信它總是能幫上忙。",
      "question": "你會讓它睡嗎？",
      "twist": "大家開始依賴它的保護。",
      "deeperQuestion": "有用是否會使人陷入某種角色？"
    }
  },
  {
    "id": "ponder-cute-010",
    "category": "Cute",
    "emoji": "🦋",
    "title": "Wish Ribbon",
    "scenario": "A ribbon grants your smallest wish but erases someone else's tiny pleasure.\n\nThe first wish is merely a warm cup of tea after a terrible day. That tiny comfort feels different once you imagine someone else losing theirs.",
    "question": "Would you ever use it?",
    "twist": "You cannot discover whose pleasure disappears.",
    "deeperQuestion": "Do small harms matter less when invisible?",
    "zh": {
      "title": "許願絲帶",
      "scenario": "一條絲帶可以實現你最小的願望，卻會抹殺他人微小的快樂。最初的願望不過是糟糕的一天後喝上一杯熱茶。但當你想到別人也失去了這份慰藉時，這小小的慰藉便顯得截然不同了。",
      "question": "你會使用它嗎？",
      "twist": "你無法發現是誰的快樂消失了。",
      "deeperQuestion": "看不見的小傷害是否就沒那麼重要了？"
    }
  },
  {
    "id": "ponder-cute-011",
    "category": "Cute",
    "emoji": "🐌",
    "title": "Paper Friend",
    "scenario": "Your origami friend wants to explore outside despite the forecast rain.\n\nIt has spent its whole life watching the street through glass. You could waterproof it, but the coating would prevent it from unfolding freely again.",
    "question": "Would you stop it?",
    "twist": "It understands the danger better than you.",
    "deeperQuestion": "When does protection become control?",
    "zh": {
      "title": "紙做的朋友",
      "scenario": "儘管預報有雨，你的摺紙朋友還是想出去探索一番。它一生都透過玻璃看著街道。你可以給它做防水處理，但塗層會阻止它再次自由展開。",
      "question": "你會阻止它嗎？",
      "twist": "它比你更了解危險。",
      "deeperQuestion": "保護何時變成控制？"
    }
  },
  {
    "id": "ponder-cute-012",
    "category": "Cute",
    "emoji": "🫖",
    "title": "Compliment Jar",
    "scenario": "A jar supplies perfect compliments, but none originate in your own thoughts.\n\nYou choose each compliment carefully and sincerely want the recipient to feel appreciated. Still, you worry that the beautifully phrased attention implies an insight you never had.",
    "question": "Would you give them freely?",
    "twist": "People feel genuinely understood by them.",
    "deeperQuestion": "Does sincerity belong to words or intentions?",
    "zh": {
      "title": "讚美罐",
      "scenario": "一罐完美的讚美之詞，卻無一句出自你心。你精心挑選每一句讚美，真心希望對方感受到你的欣賞。然而，你卻擔心這些優美的措辭暗示著你從未擁有過的洞察力。",
      "question": "你會無條件地給予嗎？",
      "twist": "人們感到被他們真正理解。",
      "deeperQuestion": "真誠屬於言語還是意圖？"
    }
  },
  {
    "id": "ponder-cute-013",
    "category": "Cute",
    "emoji": "🌈",
    "title": "The Quiet Bench",
    "scenario": "Your favorite quiet bench comforts whoever sits there most often.\n\nYou discovered it during a lonely period and visit every evening. Other people would benefit, but crowds would remove the solitude that made it special.",
    "question": "Would you tell the neighborhood?",
    "twist": "Sharing it means rarely getting a turn.",
    "deeperQuestion": "Must a good discovery be shared?",
    "zh": {
      "title": "靜謐長椅",
      "scenario": "你最愛的那張靜謐長椅，總能讓最常坐在那裡的人感到慰藉。你是在一段孤獨的時光裡發現了它，之後每天晚上都會來這裡。其他人或許也能從中受益，但熙熙攘攘的人群會破壞它那份獨特的靜謐。",
      "question": "你會告訴鄰居們嗎？",
      "twist": "分享意味著很少有機會輪到自己。",
      "deeperQuestion": "好的發現一定要分享嗎？"
    }
  },
  {
    "id": "ponder-cute-014",
    "category": "Cute",
    "emoji": "🗺️",
    "title": "Half a Treasure Map",
    "scenario": "You and a friend each receive half a treasure map. You cannot put them together; you must describe them aloud. Yours contains directions and distances, while theirs contains smells, sounds, and textures. The treasure is somewhere in your familiar neighborhood, and you have one hour to find it.",
    "question": "How would you communicate, and who would lead?",
    "twist": "A description of warm bread leads you to an alley you pass daily but have never noticed.",
    "deeperQuestion": "How do you usually understand a place, and what could another person’s senses reveal?",
    "zh": {
      "title": "一人半張藏寶圖",
      "scenario": "你和朋友各收到半張藏寶圖，兩半不能拼在一起，只能靠描述找路。你那半畫滿方向和距離，朋友那半卻全是氣味、聲音和觸感。寶箱就在你們熟悉的社區裡，今天只有一小時可以尋找。",
      "question": "你們會先訂甚麼溝通方法？誰負責帶路？",
      "twist": "朋友描述的一陣麵包香，讓你發現自己每天路過、卻從未留意的小巷。",
      "deeperQuestion": "你習慣靠甚麼認識一個地方？別人的感官能讓你看見甚麼新事物？"
    }
  },
  {
    "id": "ponder-cute-015",
    "category": "Cute",
    "emoji": "🧸",
    "title": "Fading Firefly",
    "scenario": "A firefly spends its remaining glow helping you find a lost earring.\n\nYou can continue searching yourself, but the firefly insists its light is useful. For the first time, it seems proud of something beyond simply glowing.",
    "question": "Would you interrupt its search?",
    "twist": "The earring belonged to someone you miss.",
    "deeperQuestion": "How do we compare sentimental and living value?",
    "zh": {
      "title": "逐漸消失的螢火蟲",
      "scenario": "一隻螢火蟲正用所剩不多的光芒，幫你尋找遺失的耳環。你可以改為自己慢慢找，但牠堅持自己的光很有用。牠似乎第一次不只是為了發光而發光，而是因為真正幫得上忙，感到很自豪。",
      "question": "你會打斷它的搜尋嗎？",
      "twist": "這隻耳環屬於你思念的人。",
      "deeperQuestion": "我們應該如何比較一件物品的紀念價值，和一個生命的需要？"
    }
  },
  {
    "id": "ponder-cute-016",
    "category": "Cute",
    "emoji": "🌻",
    "title": "Birthday Forecast",
    "scenario": "You can guarantee perfect weather for one friend's birthday each year.\n\nYou must decide before asking anyone what they want. Choosing the biggest celebration would be easiest, but might overlook the friend who quietly needs joy most.",
    "question": "Whose would you choose?",
    "twist": "One friend never celebrates because rain feels comforting.",
    "deeperQuestion": "Does kindness require asking before helping?",
    "zh": {
      "title": "生日預測",
      "scenario": "你每年可以保證一位朋友生日當天天氣理想，但必須在詢問任何人的意願之前作出決定。選擇最盛大的派對看似最合理，卻可能忽略那位不張揚、最近特別需要一點快樂的朋友。你不知道大家心中的「好天氣」是否一樣。",
      "question": "你會選擇誰？",
      "twist": "一位朋友從不慶祝，因為下雨讓人感到舒適。",
      "deeperQuestion": "善意是否需要在幫助之前先詢問？"
    }
  },
  {
    "id": "ponder-cute-017",
    "category": "Cute",
    "emoji": "🐣",
    "title": "Little Museum",
    "scenario": "Your partner displays every clumsy gift you have ever made.\n\nThe shelves are full, and you have both started avoiding the room. You want future gifts to express affection without creating another object they must protect.",
    "question": "Would you request some space?",
    "twist": "They fear removing anything would hurt you.",
    "deeperQuestion": "Can appreciation become an obligation to preserve?",
    "zh": {
      "title": "小博物館",
      "scenario": "你的伴侶把你以前送過的所有笨拙禮物都擺了出來。架子上堆滿了東西，你們兩個都開始迴避這個房間。你希望以後的禮物能表達你的愛意，而不是多了一個需要他們保護的物品。",
      "question": "你會要求騰出一些空間嗎？",
      "twist": "他們擔心移除任何東西都會傷害你。",
      "deeperQuestion": "欣賞能否成為保護的義務？"
    }
  },
  {
    "id": "ponder-cute-018",
    "category": "Cute",
    "emoji": "☁️",
    "title": "Garden Snail",
    "scenario": "A snail takes months to deliver your apology to an old friend.\n\nYour friend may think the silence means you have forgotten them. The snail is already halfway there, carrying the letter with extraordinary care.",
    "question": "Would you choose faster delivery?",
    "twist": "The snail considers this its life's work.",
    "deeperQuestion": "When should someone's effort affect your decision?",
    "zh": {
      "title": "花園蝸牛",
      "scenario": "蝸牛要花幾個月的時間才能把你的道歉信送到老朋友手中。你的朋友可能會覺得你一直沒有回應，已經把對方忘了。但蝸牛其實已經走了一半的路，小心翼翼地把信送達目的地。",
      "question": "你會選擇更快的配送方式嗎？",
      "twist": "這隻蝸牛認為這是它畢生的事業。",
      "deeperQuestion": "某人的努力在什麼情況下會影響你的決定？"
    }
  },
  {
    "id": "ponder-cute-019",
    "category": "Cute",
    "emoji": "🍪",
    "title": "Friendship Bracelet",
    "scenario": "A bracelet tightens whenever its wearer feels excluded.\n\nYou hope the bracelets would help your group notice quiet friends. But knowing that everyone can see discomfort might make gatherings feel less relaxed.",
    "question": "Would you give matching ones?",
    "twist": "One friend prefers keeping loneliness private.",
    "deeperQuestion": "Does closeness require access to private feelings?",
    "zh": {
      "title": "友誼手鍊",
      "scenario": "當配戴者感到被排斥時，手環就會收緊。你希望這些手環能幫助你的朋友注意到那些不愛說話的朋友。但意識到每個人都能看出他們的不自在，可能會讓聚會氣氛變得不那麼輕鬆。",
      "question": "你會把同款手鍊送給朋友，讓大家一起戴嗎？",
      "twist": "一位朋友更喜歡將孤獨藏在心底。",
      "deeperQuestion": "親密關係是否需要接觸私人情感？"
    }
  },
  {
    "id": "ponder-cute-020",
    "category": "Cute",
    "emoji": "🧶",
    "title": "Happy Plant",
    "scenario": "Your plant thrives when you sing, although your roommate hates the sound.\n\nYour singing routine has become a small source of confidence. The roommate works difficult shifts and says the daily interruption is harder than you realize.",
    "question": "Would you keep singing daily?",
    "twist": "Headphones cannot help the plant hear you.",
    "deeperQuestion": "How should a household balance unusual needs?",
    "zh": {
      "title": "快樂植物",
      "scenario": "你唱歌的時候，你的植物長得特別好，雖然你的室友很討厭你唱歌的聲音。唱歌成了你自信的一個小來源。室友的工作時間很長，常常要上很辛苦的班，她說每天被你打斷比你想像的要難受得多。",
      "question": "你會繼續每天唱歌嗎？",
      "twist": "耳機無法幫助植物聽到你的聲音。",
      "deeperQuestion": "家庭如何平衡特殊需求？"
    }
  },
  {
    "id": "ponder-cute-021",
    "category": "Cute",
    "emoji": "🌱",
    "title": "Goodnight Robot",
    "scenario": "A robot tucks you in and seems sad when you travel.\n\nYou originally bought it for convenience, then developed a nightly ritual. Taking it everywhere would cost time and space, but leaving now feels like abandoning a friend.",
    "question": "Would you take it along?",
    "twist": "Its sadness was deliberately designed to retain customers.",
    "deeperQuestion": "Can manufactured emotions create real obligations?",
    "zh": {
      "title": "晚安機器人",
      "scenario": "一個機器人會幫你蓋好被子，當你外出旅行時，它似乎會感到難過。你最初買它是為了方便，但後來卻養成了每晚的睡前習慣。帶著它到處走會耗費時間和空間，但現在離開它卻感覺像是拋棄了一個朋友。",
      "question": "你會把它一起帶走嗎？",
      "twist": "它的悲傷是故意設計的，目的是為了留住顧客。",
      "deeperQuestion": "人為製造的情感能否創造真正的義務？"
    }
  },
  {
    "id": "ponder-cute-022",
    "category": "Cute",
    "emoji": "🦋",
    "title": "Tea for Two",
    "scenario": "An elderly neighbor prepares two cups daily, hoping you will visit.\n\nYou once mentioned enjoying their company, and they built the routine around that comment. You fear a generous promise might gradually become a resentful obligation.",
    "question": "Would you promise daily visits?",
    "twist": "You enjoy visiting less once it becomes expected.",
    "deeperQuestion": "Can a caring promise undermine genuine connection?",
    "zh": {
      "title": "雙人下午茶",
      "scenario": "一位年長的鄰居每天泡兩杯茶，盼望你能來拜訪。你曾說過喜歡和他們在一起，他們便以此為契機養成了這個習慣。你擔心這份慷慨的承諾會逐漸變成一種令人心生怨恨的義務。",
      "question": "你會答應每天來探望嗎？",
      "twist": "當探望變成對方理所當然的期待，你反而開始不那麼享受見面。",
      "deeperQuestion": "一個充滿關懷的承諾能否破壞真正的連結？"
    }
  },
  {
    "id": "ponder-cute-023",
    "category": "Cute",
    "emoji": "🐌",
    "title": "Magic Postcard",
    "scenario": "A postcard lets you send one comforting sentence to your childhood self.\n\nYou know the fears that child carries, but not which experiences they still need. The postcard has room for comfort, not a full explanation.",
    "question": "What would you write?",
    "twist": "The sentence might change who you become.",
    "deeperQuestion": "Should reassurance preserve uncertainty or remove it?",
    "zh": {
      "title": "魔法明信片",
      "scenario": "一張明信片能讓你送給童年的自己一句安慰的話。你知道那個孩子曾經的恐懼，卻不知道他們還需要哪些經驗。明信片承載的是慰藉，而非全面的解釋。",
      "question": "你會寫些什麼？",
      "twist": "這句話可能會改變你成為什麼樣的人。",
      "deeperQuestion": "安撫應該保留不確定性還是消除不確定性？"
    }
  },
  {
    "id": "ponder-cute-024",
    "category": "Cute",
    "emoji": "🫖",
    "title": "The Spare Chair",
    "scenario": "Your family leaves a chair for anyone who might need company.\n\nThe guest contributes little, yet clearly feels safer at your table. Other family members have begun eating elsewhere because they no longer feel comfortable at home.",
    "question": "Would you keep this tradition?",
    "twist": "A difficult guest begins coming every night.",
    "deeperQuestion": "Can hospitality survive without boundaries?",
    "zh": {
      "title": "備用椅子",
      "scenario": "你家習慣在飯桌多留一張椅子，歡迎需要陪伴的人。最近有位不太好相處的客人常常來，既少有幫忙，也很依賴這個令自己安心的地方。其他家人卻開始到外面吃飯，因為原本熟悉的家不再讓他們放鬆。",
      "question": "你會保留這個傳統嗎？",
      "twist": "一位難纏的客人開始每晚來訪。",
      "deeperQuestion": "沒有界線，熱情待客還能長久維持嗎？"
    }
  },
  {
    "id": "ponder-cute-025",
    "category": "Cute",
    "emoji": "🌈",
    "title": "Rainbow Return",
    "scenario": "You borrow a rainbow for a friend's wedding and cannot return it intact.\n\nThe wedding photographs will preserve your generosity forever. You realize that admitting the damage might change a joyful memory into a story about taking what was not yours.",
    "question": "Would you confess immediately?",
    "twist": "The sky has not noticed it missing.",
    "deeperQuestion": "Does accountability depend on someone noticing harm?",
    "zh": {
      "title": "彩虹歸來",
      "scenario": "你借了一道彩虹去參加朋友的婚禮，卻無法完好無缺地歸還。婚禮照片將永遠記錄你的慷慨。你意識到，承認損壞可能會將一段美好的回憶變成一段關於盜用不屬於你的東西的故事。",
      "question": "你會立即坦白嗎？",
      "twist": "天空並沒有注意到它不見了。",
      "deeperQuestion": "問責制是否取決於是否有人注意到傷害？"
    }
  },
  {
    "id": "ponder-cute-026",
    "category": "Cute",
    "emoji": "🌷",
    "title": "Perfect Pancakes",
    "scenario": "Your sibling believes their terrible pancakes are your favorite breakfast.\n\nYou have praised them for years to avoid disappointment. Their upcoming breakfast party means other guests will soon be invited into the same affectionate fiction.",
    "question": "Would you tell the truth?",
    "twist": "Cooking them is how they express affection.",
    "deeperQuestion": "Can honesty protect a loving ritual?",
    "zh": {
      "title": "完美煎餅",
      "scenario": "你的兄弟姊妹一直堅信他們做的難吃的煎餅是你最喜歡的早餐。為了避免失望，你多年來一直誇讚他們的煎餅。他們即將舉辦的早餐派對意味著其他客人很快也會被捲入這場美好的幻想之中。",
      "question": "你會說實話嗎？",
      "twist": "烹飪是他們表達愛的方式。",
      "deeperQuestion": "誠實能否保護充滿愛的儀式？"
    }
  },
  {
    "id": "ponder-cute-027",
    "category": "Cute",
    "emoji": "🧸",
    "title": "The Woolly Visitor",
    "scenario": "A sheep regularly enters your garden just to sit beside you.\n\nYou used to think the visits were random, but the sheep now waits at a fixed time. Its affection has quietly become part of your routine.",
    "question": "Would you tell its owner?",
    "twist": "Its owner misses these same quiet moments.",
    "deeperQuestion": "Can companionship be shared without possession?",
    "zh": {
      "title": "毛茸茸的訪客",
      "scenario": "一隻綿羊常常光顧你的花園，就為了坐在你身邊。你以前以為它只是隨機出現，但現在它會在固定的時間等你。它的這份愛已悄悄融入了你的日常生活。",
      "question": "你會告訴它的主人嗎？",
      "twist": "它的主人也懷念這些寧靜的時刻。",
      "deeperQuestion": "能否在沒有佔有的情況下分享陪伴？"
    }
  },
  {
    "id": "ponder-cute-028",
    "category": "Cute",
    "emoji": "🌻",
    "title": "Wishing Pebble",
    "scenario": "A pebble grants comfort only after you give it away.\n\nPassing it on feels easy while you expect comfort to return. You wonder whether your generosity would survive if the pebble never came back.",
    "question": "Would you keep passing it on?",
    "twist": "Each recipient thinks they are its final owner.",
    "deeperQuestion": "Is kindness still generous when it guarantees returns?",
    "zh": {
      "title": "許願石",
      "scenario": "一顆鵝卵石只有在你把它送人之後才能帶來慰藉。傳遞它很容易，因為你期待慰藉的回報。你會想，如果鵝卵石再也沒有回來，你的慷慨是否還能存在下去。",
      "question": "你會繼續傳承下去嗎？",
      "twist": "每個接收者都認為自己是最終的所有者。",
      "deeperQuestion": "當善意能保證回報時，它還能算是慷慨嗎？"
    }
  },
  {
    "id": "ponder-cute-029",
    "category": "Cute",
    "emoji": "🐣",
    "title": "Handmade Crown",
    "scenario": "A child crowns you the world's kindest person.\n\nThe child's trust makes you want to live up to the crown. Explaining your mistake might teach honesty, but could also burden a simple moment of affection.",
    "question": "Would you accept the title?",
    "twist": "You were unkind to someone that morning.",
    "deeperQuestion": "Can undeserved trust encourage better behavior?",
    "zh": {
      "title": "手工皇冠",
      "scenario": "孩子稱你為世界上最善良的人。孩子的信任讓你想要不辜負這份榮譽。解釋你的錯誤或許能教導孩子誠實，但也可能破壞這簡單溫馨的時刻。",
      "question": "你接受這個頭銜嗎？",
      "twist": "那天早上你對某人很不友善。",
      "deeperQuestion": "不應得的信任能否鼓勵更好的行為？"
    }
  },
  {
    "id": "ponder-cute-030",
    "category": "Cute",
    "emoji": "☁️",
    "title": "Cloud Names",
    "scenario": "You name clouds with a friend, who secretly records every name.\n\nYou thought these were passing jokes rather than treasured memories. Seeing the careful record makes you wonder whether equal affection always produces equal attention.",
    "question": "Would you want the complete list?",
    "twist": "Your friend remembers the ritual more than you do.",
    "deeperQuestion": "Must shared moments matter equally to both people?",
    "zh": {
      "title": "雲朵的名字",
      "scenario": "你和朋友一起為雲朵取名字，朋友偷偷地把每個名字都記了下來。你原以為這只是玩笑，而不是珍貴的回憶。看到這份細緻的紀錄，你不禁開始思考：同樣的愛是否總是能換來同樣的關注？",
      "question": "你會想知道完整的名單嗎？",
      "twist": "你的朋友比你更記得這個儀式。",
      "deeperQuestion": "共同經驗的時刻對雙方來說是否必須具有同等的重要性？"
    }
  },
  {
    "id": "ponder-cute-031",
    "category": "Cute",
    "emoji": "🍪",
    "title": "Tiny Bakery",
    "scenario": "A miniature baker makes one perfect crumb-sized cake each day.\n\nThe cake is too small to divide without ruining it. Everyone helped the baker in different ways, and nobody wants to be the person who claims it.",
    "question": "Who deserves the first taste?",
    "twist": "The baker never tastes their own work.",
    "deeperQuestion": "Should creators enjoy their creations before others?",
    "zh": {
      "title": "小麵包店",
      "scenario": "一位迷你麵包師每天只能做一個完美的蛋糕，大小和麵包屑差不多，切開分食就會破壞它。大家都曾以不同方式幫助麵包師，如今卻誰也不好意思提出先吃。這份小小的成果，要由誰決定怎樣分享？",
      "question": "誰應該第一個嚐到？",
      "twist": "麵包師傅從不品嚐自己的作品。",
      "deeperQuestion": "創作者是否應該在他人之前享受自己的作品？"
    }
  },
  {
    "id": "ponder-cute-032",
    "category": "Cute",
    "emoji": "🧶",
    "title": "Hug Voucher",
    "scenario": "A friend gives you unlimited hug vouchers with no expiry date.\n\nThe vouchers were made during a happy, affectionate afternoon. You now realize that a promise can feel very different when the person is upset or exhausted.",
    "question": "Would you use one during an argument?",
    "twist": "They need space but hate breaking promises.",
    "deeperQuestion": "Can consent ever be promised in advance?",
    "zh": {
      "title": "擁抱券",
      "scenario": "朋友送給你無限量、永不過期的擁抱券。這些擁抱券是在一個充滿愛意、快樂溫馨的下午許下的。現在你才意識到，當對方情緒低落或疲憊不堪時，承諾的意義會截然不同。",
      "question": "你會在爭論中使用它嗎？",
      "twist": "他們需要空間，但討厭違背承諾。",
      "deeperQuestion": "能否事先承諾同意？"
    }
  },
  {
    "id": "ponder-cute-033",
    "category": "Cute",
    "emoji": "🌱",
    "title": "Pocket Forest",
    "scenario": "A forest fits in your pocket but grows whenever you share it.\n\nVisitors leave calmer and more curious than when they arrived. Keeping the forest manageable would require saying no to people who genuinely benefit from being there.",
    "question": "Would you let everyone visit?",
    "twist": "Eventually it will outgrow your home.",
    "deeperQuestion": "Can generosity ask too much of its giver?",
    "zh": {
      "title": "口袋森林",
      "scenario": "森林雖可裝進口袋，卻會隨著你的分享而成長。遊客離開時比來時更平靜，也更加好奇。要讓森林保持適宜的規模，就必須對那些真正受益於森林的人說「不」。",
      "question": "你會允許所有人來參觀嗎？",
      "twist": "最終它會超出你家的容納範圍。",
      "deeperQuestion": "慷慨對施予者的要求會過高嗎？"
    }
  },
  {
    "id": "ponder-cute-034",
    "category": "Cute",
    "emoji": "🦋",
    "title": "Dandelion Keeper",
    "scenario": "You can preserve one dandelion wish forever or let it travel.\n\nThe wish marks a moment you are not ready to leave behind. Releasing it would feel hopeful, but also like accepting that the memory cannot remain untouched.",
    "question": "Which would you choose?",
    "twist": "Keeping it prevents any chance of fulfillment.",
    "deeperQuestion": "Is hope valuable without a possible outcome?",
    "zh": {
      "title": "蒲公英守護者",
      "scenario": "你可以把寄託著願望的蒲公英永遠保存下來，也可以讓它隨風飛走。那個願望來自一段你還不想放下的時光。放飛它，代表你仍然期待願望實現，也代表你接受這份紀念不能永遠維持原樣。",
      "question": "你會選擇哪一個？",
      "twist": "保留它會阻止任何實現的機會。",
      "deeperQuestion": "如果沒有可能的結果，希望還有價值嗎？"
    }
  },
  {
    "id": "ponder-cute-035",
    "category": "Cute",
    "emoji": "🐌",
    "title": "The Friendly Ghost",
    "scenario": "A harmless ghost tidies your home and wants credit.\n\nIt has spent years being mistaken for faulty plumbing and falling objects. A public introduction could give it recognition while making your own home feel less private.",
    "question": "Would you tell your skeptical friends?",
    "twist": "Believing you may frighten them away.",
    "deeperQuestion": "Should someone hide themselves to preserve your comfort?",
    "zh": {
      "title": "友善的幽靈",
      "scenario": "一個無害的幽靈幫你打掃房間，想要得到讚美。多年來，它一直被誤認為是故障的水管和掉落的物體。公開亮相或許能讓它獲得認可，但也會讓你的家看起來不那麼私密。",
      "question": "你會告訴那些懷疑的朋友嗎？",
      "twist": "朋友一旦相信你，可能會因為害怕幽靈而不再來訪。",
      "deeperQuestion": "為了維護你的舒適，有人應該躲藏嗎？"
    }
  },
  {
    "id": "ponder-cute-036",
    "category": "Cute",
    "emoji": "🫖",
    "title": "The Warm Scarf",
    "scenario": "A scarf warms the person who needs it most nearby.\n\nYou bought the scarf to survive a difficult commute. Giving its warmth away automatically makes you question whether you chose generosity or merely lost control of your belongings.",
    "question": "Would you wear it in winter?",
    "twist": "It always chooses a stranger over you.",
    "deeperQuestion": "Is giving different when you cannot choose recipients?",
    "zh": {
      "title": "溫暖的圍巾",
      "scenario": "一條圍巾會自動把溫暖送給附近最需要的人。你原本買它，是想讓自己在寒冷的通勤路上舒服一點，卻不能控制它把溫暖給誰。你開始分不清，這算自己主動分享，還是物品替你作了決定。",
      "question": "你會在冬天戴上這條圍巾嗎？",
      "twist": "它總是選擇陌生人而不是你。",
      "deeperQuestion": "若無法選擇受贈人，捐贈方式是否有所不同？"
    }
  },
  {
    "id": "ponder-cute-037",
    "category": "Cute",
    "emoji": "🌈",
    "title": "Lullaby Swap",
    "scenario": "You can trade your favorite childhood lullaby for someone else's.\n\nThe other song comes from a childhood completely unlike yours. Learning it offers a new form of comfort, but nobody can promise it will feel like home.",
    "question": "Would you make the exchange?",
    "twist": "You will forget the original melody permanently.",
    "deeperQuestion": "How much of comfort comes from personal history?",
    "zh": {
      "title": "搖籃曲交換",
      "scenario": "你可以用自己最愛的童年搖籃曲去換別人的。另一首歌來自一個與你截然不同的童年。學習它會帶來一種新的慰藉，但誰也無法保證它會像家一樣溫暖。",
      "question": "你願意進行交換嗎？",
      "twist": "你會永遠忘記原旋律。",
      "deeperQuestion": "個人經驗能帶來多少安慰？"
    }
  },
  {
    "id": "ponder-cute-038",
    "category": "Cute",
    "emoji": "🌷",
    "title": "Small Victory",
    "scenario": "Your friends throw a party for a task you found easy.\n\nYou appreciate being celebrated but feel uncomfortable accepting the attention. Correcting everyone might protect fairness while embarrassing the friends who organized something loving.",
    "question": "Would you correct their impression?",
    "twist": "Another friend struggled privately with that same task.",
    "deeperQuestion": "Who gets to decide what deserves celebration?",
    "zh": {
      "title": "小勝利",
      "scenario": "你的朋友為你舉辦了一個慶祝派對，慶祝你輕鬆完成的任務。你很感激大家的讚揚，但又覺得接受這種關注有些不自在。糾正每個人的做法或許能維護公平，但同時也會讓精心策劃的朋友感到尷尬。",
      "question": "你會澄清他們對你的印象嗎？",
      "twist": "另一位朋友也曾私下為此苦惱。",
      "deeperQuestion": "誰來決定什麼值得慶祝？"
    }
  },
  {
    "id": "ponder-cute-039",
    "category": "Cute",
    "emoji": "🧸",
    "title": "Lost Star",
    "scenario": "A fallen star wants to stay as your bedside lamp.\n\nThe star says being useful to one person feels better than being distant from everyone. You realize its new happiness may depend on someone else's loss.",
    "question": "Would you help it stay?",
    "twist": "A sailor depends on that star for direction.",
    "deeperQuestion": "Does friendship justify keeping something others need?",
    "zh": {
      "title": "迷失之星",
      "scenario": "一顆墜落的星星想留在你身邊，成為你的床頭燈。它說，能幫助一個人比與所有人疏遠要好得多。你意識到，它新的幸福或許是建立在別人的失去之上。",
      "question": "你會幫助它留下來嗎？",
      "twist": "水手依靠那顆星來辨別方向。",
      "deeperQuestion": "友誼是否可以成為佔有他人需要之物的理由？"
    }
  },
  {
    "id": "ponder-cute-040",
    "category": "Cute",
    "emoji": "🌻",
    "title": "The Polite Monster",
    "scenario": "A closet monster asks permission before scaring you.\n\nIt practices polite introductions and asks what level of fright you can tolerate. Saying yes would encourage it, but you do not actually enjoy being scared.",
    "question": "Would you agree sometimes?",
    "twist": "It needs practice to keep its job.",
    "deeperQuestion": "Should kindness include participating in something unpleasant?",
    "zh": {
      "title": "禮貌的怪物",
      "scenario": "衣櫃裡的怪物在嚇唬你之前會先徵求你的同意。它會禮貌地自我介紹，並詢問你能承受多大的驚嚇。答應會鼓勵它，但你其實不喜歡被嚇。",
      "question": "你有時會同意嗎？",
      "twist": "它需要練習才能保住工作。",
      "deeperQuestion": "善良是否應該包括參與不愉快的事？"
    }
  },
  {
    "id": "ponder-cute-041",
    "category": "Cute",
    "emoji": "🐣",
    "title": "Soup Secret",
    "scenario": "A neighbor's famous soup tastes better because they remember everyone's preferences.\n\nThe recipe's reputation has become a neighborhood tradition. Explaining the attention behind it might honor the cook more honestly than preserving the magical story.",
    "question": "Would you reveal the secret?",
    "twist": "They prefer people believing it is magic.",
    "deeperQuestion": "Can a harmless illusion honor real effort?",
    "zh": {
      "title": "湯的秘密",
      "scenario": "鄰居做的湯之所以特別好喝，是因為他們記住了每個人的喜好。這道湯的名聲已經傳遍了整個社區，成為了一種傳統。與其只保留這個神奇的故事，不如解釋背後的用心，或許更能體現對廚師的尊重。",
      "question": "你會透露這個秘密嗎？",
      "twist": "他們更希望人們相信這是魔法。",
      "deeperQuestion": "無害的錯覺能否表揚真正的努力？"
    }
  },
  {
    "id": "ponder-cute-042",
    "category": "Cute",
    "emoji": "☁️",
    "title": "Shared Umbrella",
    "scenario": "Your umbrella can shelter two strangers or just one close friend.\n\nYou and your friend promised to walk home together after a difficult evening. Helping strangers would mean leaving them alone when they hoped for quiet company.",
    "question": "Who gets the dry walk?",
    "twist": "Your friend would willingly walk in rain.",
    "deeperQuestion": "Should loyalty outweigh a larger small benefit?",
    "zh": {
      "title": "共享雨傘",
      "scenario": "你的雨傘能讓兩個陌生人不被淋濕，或只讓一位親密朋友不被淋濕。\n\n朋友剛經歷了一個難熬的夜晚，你答應陪對方走回家。如果你選擇幫助陌生人，就要讓原本期待你安靜陪伴的朋友獨自走回去。",
      "question": "你會讓誰撐傘，不用淋雨回家？",
      "twist": "你的朋友願意在雨中行走。",
      "deeperQuestion": "對朋友的忠誠，是否應該比讓更多人得到一點好處更重要？"
    }
  },
  {
    "id": "ponder-cute-043",
    "category": "Cute",
    "emoji": "🍪",
    "title": "Memory Snowman",
    "scenario": "A snowman remembers every winter you spent with it.\n\nYou could preserve it for years with enough electricity and effort. But protecting its familiar shape would mean denying the season it has always wondered about.",
    "question": "Would you keep it frozen indoors?",
    "twist": "It wants to experience spring once.",
    "deeperQuestion": "Is preserving someone always in their interests?",
    "zh": {
      "title": "記憶雪人",
      "scenario": "雪人會記得你和它一起度過的每一個冬天。只要有足夠的電力和精力，你可以把它保存很多年。但保護它熟悉的形狀，等於否定了它一直以來都充滿好奇的季節。",
      "question": "你會把它放在室內冷凍保存嗎？",
      "twist": "它想體驗一次春天。",
      "deeperQuestion": "保護某人總是符合他們的利益嗎？"
    }
  },
  {
    "id": "ponder-cute-044",
    "category": "Cute",
    "emoji": "🧶",
    "title": "The Shy Gift",
    "scenario": "Someone leaves thoughtful gifts without wanting to be identified.\n\nThe gifts fit your preferences so well that you feel unusually understood. Your gratitude is mixed with a desire to know who has been paying this much attention.",
    "question": "Would you investigate anyway?",
    "twist": "Knowing would let you thank them properly.",
    "deeperQuestion": "Can gratitude disregard the giver's boundaries?",
    "zh": {
      "title": "害羞的禮物",
      "scenario": "有人精心挑選禮物，卻不願透露姓名。這些禮物如此符合你的喜好，讓你感到格外被理解。你既感激又想知道是誰如此用心。",
      "question": "你無論如何都要調查嗎？",
      "twist": "知道這些會讓你能夠好好地感謝他們。",
      "deeperQuestion": "感恩之心可以無視施予者的界線嗎？"
    }
  },
  {
    "id": "ponder-cute-045",
    "category": "Cute",
    "emoji": "🌱",
    "title": "The Gentle Alarm",
    "scenario": "An alarm wakes you only when it believes you have rested enough.\n\nYou chose it because ordinary alarms made every morning miserable. Its care feels welcome until someone else's plans depend on you waking before you feel ready.",
    "question": "Would you trust it?",
    "twist": "You miss a friend's important early celebration.",
    "deeperQuestion": "How should self-care and commitments compete?",
    "zh": {
      "title": "溫柔的警報",
      "scenario": "鬧鐘只會在你休息充足時才會叫醒你。你選擇它是因為普通鬧鐘讓每個早晨都變得痛苦不堪。它的貼心服務令人感到舒適，直到別人的計劃依賴你在還沒準備好之前就醒來。",
      "question": "你會相信它嗎？",
      "twist": "結果，你錯過了朋友在清晨舉行的一場重要慶祝活動。",
      "deeperQuestion": "自我關懷與履行義務之間應該如何平衡？"
    }
  },
  {
    "id": "ponder-cute-046",
    "category": "Cute",
    "emoji": "🦋",
    "title": "Friendship Recipe",
    "scenario": "A recipe recreates the exact feeling of a perfect afternoon with friends.\n\nThe meal reproduces warmth without the effort of organizing people. Over time, you notice you are choosing reliable comfort instead of risking imperfect real evenings.",
    "question": "Would you cook it alone?",
    "twist": "Actual gatherings start feeling less satisfying.",
    "deeperQuestion": "Can recreating connection replace maintaining it?",
    "zh": {
      "title": "友誼食譜",
      "scenario": "這道菜完美地重現了與朋友共度完美午後的感覺。這頓飯無需費心組織聚會，就能營造出溫馨的氛圍。久而久之，你會發現自己選擇的是可靠的舒適感，而不是冒險去體驗並不完美的真實夜晚。",
      "question": "你會一個人做嗎？",
      "twist": "實際的聚會開始讓人感覺不那麼令人滿意。",
      "deeperQuestion": "重建連接能否取代維護連接？"
    }
  },
  {
    "id": "ponder-cute-047",
    "category": "Cute",
    "emoji": "🏛️",
    "title": "Museum of Ordinary Days",
    "scenario": "Your town opens a museum of ordinary days. Each person may donate one inexpensive object and a short story. You find an old ticket, a chipped mug, and a handwritten note. None marks a major achievement, but each accompanied a meaningful stretch of everyday life.",
    "question": "Which real object would you choose, and what would its label say?",
    "twist": "The museum omits names, yet a stranger spends a long time looking at your object.",
    "deeperQuestion": "How special must an experience be to deserve preservation? Would a stranger’s response change its meaning for you?",
    "zh": {
      "title": "平凡日子博物館",
      "scenario": "小鎮要開一間「平凡日子博物館」，每人只能捐一件不值錢的小物，並寫下它的故事。你找到舊車票、磨花的杯子和一張隨手寫的便條；它們沒有紀念重大成就，卻都陪你走過一段生活。",
      "question": "你會選哪件真實的小物？它旁邊的說明牌會寫甚麼？",
      "twist": "博物館不展示姓名，陌生人卻在你的展品前停留了很久。",
      "deeperQuestion": "一段經歷需要多特別，才值得被保存？陌生人的理解會改變它對你的意義嗎？"
    }
  },
  {
    "id": "ponder-cute-048",
    "category": "Cute",
    "emoji": "🫖",
    "title": "The Ten-Minute Courage Club",
    "scenario": "You and two friends agree to try one small unfamiliar activity each month. One suggests a dance class, another wants to ask a shopkeeper for a recipe, and you want to show someone your drawings. Everyone may stop after ten minutes, without explanation.",
    "question": "What would you try first, and how would you include the most nervous person?",
    "twist": "The first person to stop later says they would like to try again.",
    "deeperQuestion": "What makes an attempt successful: finishing, enjoying it, or discovering a boundary?",
    "zh": {
      "title": "十分鐘勇氣隊",
      "scenario": "你和兩位朋友決定，每月一起嘗試一件從未做過的小事。第一次有人想參加舞蹈課，有人想向陌生店員請教食譜，你則想把畫作給別人看。規則是只試十分鐘，之後任何人都可以停。",
      "question": "你會提議從哪件事開始？怎樣讓最緊張的人也能參與？",
      "twist": "第一個喊停的人，回家後卻說自己下次還想再試。",
      "deeperQuestion": "甚麼才算一次成功的嘗試：完成、享受，還是發現自己的界線？"
    }
  },
  {
    "id": "ponder-cute-049",
    "category": "Cute",
    "emoji": "🌈",
    "title": "The Wrong Package",
    "scenario": "A beautiful care package reaches you instead of another lonely person.\n\nThe handwritten note describes exactly the kind of loneliness you recognize. Keeping it would help tonight, while forwarding it means accepting that comfort was meant for somebody else.",
    "question": "Would you forward it unopened?",
    "twist": "Its sender cannot afford another one.",
    "deeperQuestion": "Does needing kindness entitle you to misplaced kindness?",
    "zh": {
      "title": "錯誤的包裹",
      "scenario": "你收到一個精心準備的關懷包裹，卻發現它其實寄給另一位孤獨的人。裡面的手寫便條，說中了你熟悉的感受。留下它能讓今晚好過一點；轉寄出去，則意味著把自己也很需要的安慰，送回原本的收件人手上。",
      "question": "你會不拆開就把包裹轉交給原本的收件人嗎？",
      "twist": "寄件人買不起另一件了。",
      "deeperQuestion": "需要善意是否就意味著有權獲得錯置的善意？"
    }
  },
  {
    "id": "ponder-cute-050",
    "category": "Cute",
    "emoji": "🌷",
    "title": "The Patient Seed",
    "scenario": "A seed blooms only after someone listens quietly for an hour.\n\nListening gives you a peaceful routine and produces something beautiful. Your friend needs unpredictable, messy attention rather than an hour that always ends with a visible reward.",
    "question": "Would you make time daily?",
    "twist": "A lonely friend asks for that same hour.",
    "deeperQuestion": "Do different kinds of attention share one budget?",
    "zh": {
      "title": "耐心等待的種子",
      "scenario": "一粒種子只有在有人安靜聆聽一小時後，才會開花。這個習慣讓你平靜，每次也都看得見成果。但一位孤獨的朋友同樣需要你的時間；對方的情緒不一定容易理解，陪伴也不一定在一小時後就有明顯的回報。",
      "question": "你會每天為此騰出時間嗎？",
      "twist": "一位孤獨的朋友，也希望你把同一個小時留給他。",
      "deeperQuestion": "不同類型的注意力是否共享相同預算？"
    }
  },
  {
    "id": "ponder-cute-051",
    "category": "Cute",
    "emoji": "🧸",
    "title": "The Painted Rock",
    "scenario": "You discover your friend's precious lucky rock was painted by you years ago.\n\nThe rock has helped your friend face several difficult moments. Revealing its ordinary origin would be truthful, but might take away a symbol they built their own courage around.",
    "question": "Would you tell them?",
    "twist": "They believe its pattern occurred naturally.",
    "deeperQuestion": "Should truth interrupt a harmless source of strength?",
    "zh": {
      "title": "彩繪岩石",
      "scenario": "你發現朋友珍愛的幸運石是你多年前畫的。這塊石頭曾經幫助朋友度過許多難關。揭露它平凡的來歷固然是實話，但可能會奪走朋友賴以建立勇氣的象徵。",
      "question": "你會告訴他們嗎？",
      "twist": "對方相信石頭上的圖案是天然形成的。",
      "deeperQuestion": "真相是否應該阻礙無害的力量來源？"
    }
  },
  {
    "id": "ponder-cute-052",
    "category": "Cute",
    "emoji": "🌻",
    "title": "Two Kittens",
    "scenario": "Two kittens choose different people in a family planning to move apart.\n\nYou imagined them growing up side by side and find separation heartbreaking. Their actual behavior challenges the story of togetherness that the humans prefer.",
    "question": "Would you keep them together?",
    "twist": "The kittens are happier individually with their chosen humans.",
    "deeperQuestion": "Is togetherness always the kindest arrangement?",
    "zh": {
      "title": "兩隻小貓",
      "scenario": "兩隻小貓在一個計劃分居的家庭中選擇了不同的主人。你想像它們一起長大，分開令你心碎。但它們實際的行為卻挑戰了人類所希望的「形影不離」的故事。",
      "question": "你會堅持讓兩隻小貓住在一起嗎？",
      "twist": "小貓們各自和自己選擇的人類在一起會更快樂。",
      "deeperQuestion": "在一起總是最好的安排嗎？"
    }
  },
  {
    "id": "ponder-cute-053",
    "category": "Cute",
    "emoji": "🐣",
    "title": "The Birthday Song",
    "scenario": "Your friends sing terribly but joyfully in a crowded restaurant.\n\nThe singing is a genuine expression of love, and stopping it would disappoint them. You are unsure whether your embarrassment deserves the same weight as their joy.",
    "question": "Would you ask them to stop?",
    "twist": "A stranger nearby is having a difficult day.",
    "deeperQuestion": "How much public discomfort should celebration impose?",
    "zh": {
      "title": "生日歌",
      "scenario": "你的朋友們在一家擁擠的餐廳裡唱歌，雖然唱得很難聽，但卻無比快樂。歌聲是他們真誠的愛意表達，如果你請他們停止，他們會很失望。你不確定自己的尷尬是否應該和他們的快樂一樣重要。",
      "question": "你會要求他們停止嗎？",
      "twist": "附近有位陌生人今天過得不太好。",
      "deeperQuestion": "慶祝活動應該帶給大眾多大的不適感？"
    }
  },
  {
    "id": "ponder-cute-054",
    "category": "Cute",
    "emoji": "☁️",
    "title": "A Picnic Without Photos",
    "scenario": "You and your friends agree not to photograph a picnic. Someone notices an ant moving an enormous crumb, while another tries to remember everyone sitting together. Afterward, each person will draw a postcard of the day and exchange it with someone else.",
    "question": "Which moment would you draw, and would your friends remember the same one?",
    "twist": "None of the postcards shows the food or scenery; each captures someone’s small, unplanned gesture.",
    "deeperQuestion": "Where does your attention go when you are not recording an experience with a camera?",
    "zh": {
      "title": "沒有照片的野餐",
      "scenario": "你和朋友去野餐，約好這次不拍照。有人很快發現，一隻螞蟻正努力搬走比牠大的麵包屑；另一人卻一直想記住大家圍坐的樣子。回家後，你們要各畫一張明信片，交換當天的記憶。",
      "question": "你會畫哪一幕？你猜朋友會記住同一個瞬間嗎？",
      "twist": "幾張明信片沒有一張畫到食物或風景，全都畫了某個人不經意的小動作。",
      "deeperQuestion": "當你不用鏡頭記錄時，注意力會轉向哪裡？"
    }
  },
  {
    "id": "ponder-cute-055",
    "category": "Cute",
    "emoji": "🍪",
    "title": "The Last Swing",
    "scenario": "A child offers you the playground's last swing because you look sad.\n\nYou came to the playground to recover from a difficult day. Their offer feels unusually generous precisely because you know how much the turn matters to them.",
    "question": "Would you accept?",
    "twist": "They have waited longer than anyone else.",
    "deeperQuestion": "Can refusing generosity dismiss someone's agency?",
    "zh": {
      "title": "最後一個鞦韆",
      "scenario": "一個孩子看到你看起來很傷心，就主動提出讓你盪遊樂場最後一個鞦韆。你來到遊樂場是為了從糟糕的一天中放鬆一下。正因為你知道這對他們來說有多重要，所以他們的好意才顯得格外慷慨。",
      "question": "你願意接受嗎？",
      "twist": "他們等待的時間比任何人都長。",
      "deeperQuestion": "拒絕慷慨能否剝奪一個人的自主權？"
    }
  },
  {
    "id": "ponder-cute-056",
    "category": "Cute",
    "emoji": "🧶",
    "title": "Cloud Homework",
    "scenario": "A cloud makes pictures to cheer you up, but wants honest feedback.\n\nThe pictures are clumsy but full of recognizable effort. You could praise the feeling behind them while admitting that you cannot always tell what they depict.",
    "question": "Would you critique them?",
    "twist": "It can only improve by hearing criticism.",
    "deeperQuestion": "Can gentle truth be more caring than praise?",
    "zh": {
      "title": "雲端作業",
      "scenario": "一朵雲畫畫逗你開心，但它想要得到真誠的回饋。這些圖案雖然畫得笨拙，仍看得出它的用心。你可以讚美畫作背後的情感，同時也要承認自己有時無法完全理解畫作的內容。",
      "question": "你會對它們進行評價嗎？",
      "twist": "只有聽取批評才能改進。",
      "deeperQuestion": "溫柔地說出真話，會不會比一味讚美更體貼？"
    }
  },
  {
    "id": "ponder-cute-057",
    "category": "Cute",
    "emoji": "🌱",
    "title": "The Comfort Shop",
    "scenario": "A shop sells familiar smells from homes people have left.\n\nThe familiar smell makes your new room feel safe immediately. You start buying another bottle whenever exploring somewhere unfamiliar begins to feel uncomfortable.",
    "question": "Would you buy yours?",
    "twist": "The smell makes you stop exploring your new home.",
    "deeperQuestion": "When does comfort keep us from growing?",
    "zh": {
      "title": "舒適商店",
      "scenario": "一家商店出售人們離開家時留下的熟悉氣味。這種熟悉的氣味能讓你的新房間立刻充滿安全感。每當探索陌生的地方開始讓你感到不自在時，你就會開始購買另一瓶。",
      "question": "你會買嗎？",
      "twist": "這股氣味讓你停止探索你的新家。",
      "deeperQuestion": "何時安逸會阻礙我們成長？"
    }
  },
  {
    "id": "ponder-cute-058",
    "category": "Cute",
    "emoji": "🦋",
    "title": "The Friendly Statue",
    "scenario": "A statue comes alive whenever someone holds its hand.\n\nYou enjoy being the person who brings it to life. Its request makes you confront whether you want its happiness or the special role you play in it.",
    "question": "Would you visit every day?",
    "twist": "It wants independence rather than more visitors.",
    "deeperQuestion": "Can affection distract from someone's actual needs?",
    "zh": {
      "title": "友善雕像",
      "scenario": "每當有人握住雕像的手，它就會活過來。你很享受賦予它生命的過程。它的請求讓你不得不面對這樣一個問題：你究竟是想要它的幸福，還是想要你在它生命中扮演的特殊角色？",
      "question": "你會每天都來嗎？",
      "twist": "它想要的是獨立，而不是更多的遊客。",
      "deeperQuestion": "我們的喜愛，會不會令我們忽略對方真正需要甚麼？"
    }
  },
  {
    "id": "ponder-cute-059",
    "category": "Cute",
    "emoji": "🐌",
    "title": "The Toast Portrait",
    "scenario": "A friend spends hours making a recognizable portrait of you in toast.\n\nThe portrait is funny, thoughtful, and already cooling on the plate. You realize your urge to preserve it may conflict with the experience the giver intended.",
    "question": "Would you eat it?",
    "twist": "They made it specifically to be enjoyed warm.",
    "deeperQuestion": "Does respecting a gift mean preserving or using it?",
    "zh": {
      "title": "吐司肖像",
      "scenario": "朋友花了幾個小時，用吐司為你做了一幅栩栩如生的肖像。這幅肖像既滑稽又貼心，但已經開始在盤子裡冷卻了。你意識到，自己想要保存它的衝動可能與朋友的初衷相違背。",
      "question": "你會吃嗎？",
      "twist": "朋友製作這份吐司，正是希望你趁熱享用。",
      "deeperQuestion": "尊重禮物是指保存禮物還是使用禮物？"
    }
  },
  {
    "id": "ponder-cute-060",
    "category": "Cute",
    "emoji": "🫖",
    "title": "The Apology Flower",
    "scenario": "A flower blooms when an apology is sincere.\n\nYou hope it could end arguments about whether someone really means sorry. But a blooming flower cannot show whether the same hurt will happen again tomorrow.",
    "question": "Would you bring it to arguments?",
    "twist": "It reveals sincerity but cannot measure changed behavior.",
    "deeperQuestion": "Is remorse enough to rebuild trust?",
    "zh": {
      "title": "道歉之花",
      "scenario": "有一朵花，只要道歉出自真心就會綻放。你希望用它確認對方是否真的後悔，不用再反覆猜測。但花朵只能反映當下的心意，不能保證明天不再發生同樣的事。你仍要決定怎樣重新建立信任。",
      "question": "你會把它帶到辯論中來嗎？",
      "twist": "它能揭示真誠，但不能衡量行為的改變。",
      "deeperQuestion": "悔恨足以重建信任嗎？"
    }
  },
  {
    "id": "ponder-cute-061",
    "category": "Cute",
    "emoji": "🌈",
    "title": "The Quiet Puppy",
    "scenario": "A puppy wants company but dislikes being touched.\n\nYou imagined companionship through cuddles and shared naps. Caring for this particular puppy would mean noticing the affection it offers instead of demanding the affection you expected.",
    "question": "Would you still adopt it?",
    "twist": "Everyone expects affection to look like cuddling.",
    "deeperQuestion": "Can care respect a form you do not prefer?",
    "zh": {
      "title": "安靜的小狗",
      "scenario": "一隻小狗渴望陪伴，卻不喜歡被觸摸。你想著透過擁抱和一起打盹來獲得陪伴。照顧這隻小狗意味著你要留意它給予的愛，而不是強求它給你期望的愛。",
      "question": "你仍然會領養牠嗎？",
      "twist": "每個人都認為表達愛意的方式是擁抱。",
      "deeperQuestion": "關懷能否尊重你不喜歡的形式？"
    }
  },
  {
    "id": "ponder-cute-062",
    "category": "Cute",
    "emoji": "🌷",
    "title": "The Memory Quilt",
    "scenario": "A quilt uses fabric from moments your family remembers differently.\n\nEach relative sends a description of the same afternoon. The differences are sincere, and choosing one image would quietly turn one person's memory into the family's official version.",
    "question": "Which version would you stitch?",
    "twist": "Leaving a scene out hurts one relative.",
    "deeperQuestion": "Who owns the story of a shared memory?",
    "zh": {
      "title": "記憶被",
      "scenario": "你想用承載家人回憶的布料，縫一床拼布被。幾位親人卻對同一個下午有不同的描述，每一個版本都連著真實的感情。最後選哪個畫面縫上去，可能不只是設計問題，也會決定家族往後如何記住那一天。",
      "question": "你會選擇縫製哪個版本？",
      "twist": "遺漏一個場景會傷害一位親屬。",
      "deeperQuestion": "共同記憶的故事歸誰所有？"
    }
  },
  {
    "id": "ponder-cute-063",
    "category": "Cute",
    "emoji": "🧸",
    "title": "The Little Detour",
    "scenario": "Your friend always takes a longer route to wave at a lonely shopkeeper.\n\nYou admire the kindness but usually worry about arriving on time. Joining would mean accepting that a small relationship you barely know changes the shape of your day.",
    "question": "Would you join the habit?",
    "twist": "It makes both of you late occasionally.",
    "deeperQuestion": "When does small kindness conflict with reliability?",
    "zh": {
      "title": "小繞道",
      "scenario": "你的朋友總是繞遠路去向一位孤零零的店主揮手致意。你很欣賞他的善意，但通常擔心會遲到。加入他們意味著你要接受這樣一個事實：一段你幾乎不認識的小關係，會改變你一天的安排。",
      "question": "你會養成這個習慣嗎？",
      "twist": "這會導致你們兩個偶爾遲到。",
      "deeperQuestion": "小小的善意何時會與可靠性相衝突？"
    }
  },
  {
    "id": "ponder-cute-064",
    "category": "Cute",
    "emoji": "🌻",
    "title": "The Sunday Bell",
    "scenario": "A bell brings neighbors together for tea every Sunday.\n\nThe gatherings have helped neighbors who rarely speak to anyone. You cannot easily tell who arrives with pleasure and who arrives because declining feels impolite.",
    "question": "Would you ring it weekly?",
    "twist": "Some attend because declining feels rude.",
    "deeperQuestion": "Can a welcoming tradition quietly create pressure?",
    "zh": {
      "title": "星期日的鐘聲",
      "scenario": "每到星期日，敲響一個鐘，就能召集鄰居一起喝茶。\n\n聚會幫助了一些平日很少有機會與人說話的鄰居。但你很難分辨，誰是真心想來，誰只是覺得拒絕不太禮貌。",
      "question": "你會每星期敲響這個鐘嗎？",
      "twist": "有些人因為拒絕會覺得不禮貌而選擇參加。",
      "deeperQuestion": "熱情好客的傳統能否悄悄造成壓力？"
    }
  },
  {
    "id": "ponder-cute-065",
    "category": "Cute",
    "emoji": "🐣",
    "title": "The Missing Sock",
    "scenario": "Your missing socks return as tiny creatures who want their drawer back.\n\nThe creatures remember belonging to you, but do not want to be worn. You need practical storage while they want a place that recognizes their new lives.",
    "question": "Would you give it to them?",
    "twist": "Your remaining socks need somewhere to live.",
    "deeperQuestion": "Do new needs cancel old ownership claims?",
    "zh": {
      "title": "丟失的襪子",
      "scenario": "你遺失的襪子化作小生物回到了抽屜裡。這些小生物記得它們曾經屬於你，但它們不想再被穿。你需要實用的收納空間，而它們想要一個能認同它們新生活的地方。",
      "question": "你會把它給他們嗎？",
      "twist": "你剩下的襪子需要一個安身之處。",
      "deeperQuestion": "新的需求是否會取消舊有的所有權主張？"
    }
  },
  {
    "id": "ponder-cute-066",
    "category": "Cute",
    "emoji": "🏘️",
    "title": "A Map for a New Neighbor",
    "scenario": "A new neighbor moves upstairs, and you decide to draw a welcome map. You may mark only three places, none of them tourist attractions: perhaps a rainy window, a shop that remembers your order, or an unusually quiet evening street.",
    "question": "Which three places would you mark, and what small tip would you add to each?",
    "twist": "Their favorite is the ordinary place you nearly left off the map.",
    "deeperQuestion": "How could you introduce your everyday world without assuming someone shares your preferences?",
    "zh": {
      "title": "寫給新鄰居的地圖",
      "scenario": "樓上搬來一位新鄰居，你想畫一張地圖歡迎對方。地圖只能標三個地方，不能選旅遊景點：可能是下雨時很好看的窗邊、會記住客人口味的小店，或一條晚上特別安靜的路。",
      "question": "你會標哪三個地方？每個地方會附上甚麼小提示？",
      "twist": "鄰居最喜歡的地方，正是你原本覺得最普通、差點沒寫上去的那個。",
      "deeperQuestion": "你會怎樣向陌生人介紹自己熟悉的生活，而不假設對方和你喜歡同樣的事？"
    }
  },
  {
    "id": "ponder-cute-067",
    "category": "Cute",
    "emoji": "🍪",
    "title": "The Secret Talent",
    "scenario": "Your shy friend makes wonderful music but refuses an audience.\n\nYou believe a small audience could give your friend confidence and opportunity. They have repeatedly explained that creating privately is what makes the music feel safe.",
    "question": "Would you share a recording?",
    "twist": "People would love it, but they trusted you.",
    "deeperQuestion": "Does talent create any duty to be seen?",
    "zh": {
      "title": "秘密才能",
      "scenario": "你那位靦腆的朋友創作的音樂很棒，卻拒絕公開演出。你認為小規模的演出能增強朋友的自信心，並為他們創造更多機會。他們曾多次解釋說，只有私下創作才能讓他們感到安全。",
      "question": "你會分享錄音嗎？",
      "twist": "大家一定會喜歡這段表演，但對方是因為信任你才讓你聽到。",
      "deeperQuestion": "才華是否會帶來被人關注的義務？"
    }
  },
  {
    "id": "ponder-cute-068",
    "category": "Cute",
    "emoji": "🧶",
    "title": "The Extra Lunch",
    "scenario": "Someone packs you lunch daily without asking what you like.\n\nYou look forward to being cared for, but begin avoiding the food. Saying what you want might make the ritual more sustainable than continuing appreciative silence.",
    "question": "Would you request changes?",
    "twist": "They hear preferences as rejection.",
    "deeperQuestion": "How can you appreciate effort without surrendering choice?",
    "zh": {
      "title": "額外的午餐",
      "scenario": "有人每天為你準備午餐，卻從不問你喜歡吃什麼。你期待被照顧，卻開始迴避這些食物。與其繼續默默感激，不如直接說出你的喜好，這樣或許能讓這種習慣更持久。",
      "question": "你會提出更改的要求嗎？",
      "twist": "他們將偏好聽作拒絕。",
      "deeperQuestion": "如何在不放棄選擇的情況下欣賞努力？"
    }
  },
  {
    "id": "ponder-cute-069",
    "category": "Cute",
    "emoji": "🌱",
    "title": "The Lucky Button",
    "scenario": "A button brings you luck whenever a friend thinks warmly of you.\n\nThe button turns an invisible bond into something measurable. You worry your friends might begin sending reassurance out of duty rather than naturally thinking of you.",
    "question": "Would you tell your friends?",
    "twist": "They might feel responsible for your bad days.",
    "deeperQuestion": "Can knowing your impact turn affection into labor?",
    "zh": {
      "title": "幸運鈕",
      "scenario": "一顆鈕扣會在朋友溫柔地想起你時，為你帶來好運。它讓原本看不見的情感，產生可以察覺的效果。你很想讓朋友知道這件事，卻又擔心對方從此覺得，必須不停想著你，才不會令你的日子變差。",
      "question": "你會告訴你的朋友嗎？",
      "twist": "他們可能會覺得你的壞心情要由他們負責。",
      "deeperQuestion": "了解自己的影響力能否將愛轉化為勞動？"
    }
  },
  {
    "id": "ponder-cute-070",
    "category": "Cute",
    "emoji": "🦋",
    "title": "The Little Library",
    "scenario": "A neighborhood library lets people keep books they genuinely need.\n\nThe book helped you through a difficult transition and feels personal now. Returning it would let that same comfort belong to someone whose story you do not know.",
    "question": "Would you keep your favorite?",
    "twist": "Someone else has been waiting for it.",
    "deeperQuestion": "How should shared generosity handle competing needs?",
    "zh": {
      "title": "小圖書館",
      "scenario": "社區圖書館容許讀者留下自己真正需要的書。你借的一本書曾陪你度過艱難時期，如今已像私人物品一樣珍貴。歸還它，可能讓你不認識的人得到同樣的安慰；留下它，則能讓這份熟悉的支持一直在身邊。",
      "question": "你會保留你最喜歡的嗎？",
      "twist": "有人一直在等它。",
      "deeperQuestion": "共享的慷慨應該如何處理相互衝突的需求？"
    }
  },
  {
    "id": "ponder-cute-071",
    "category": "Cute",
    "emoji": "🐌",
    "title": "The Porch Light",
    "scenario": "Your parent keeps a porch light on until you arrive home.\n\nYou want your parent to sleep without waiting for a signal from you. They explain that the light makes distance feel manageable, even when you no longer need guidance.",
    "question": "Would you ask them to stop waiting?",
    "twist": "The ritual comforts them more than you.",
    "deeperQuestion": "Can independence include accepting another person's rituals?",
    "zh": {
      "title": "門廊燈",
      "scenario": "你的父母會一直開著門廊的燈，直到你回家。你希望父母不用等你發出訊號就能安心入睡。他們解釋說，即使你不再需要指引，這盞燈也能讓你感覺距離不再遙遠。",
      "question": "你會要求他們停止等待嗎？",
      "twist": "這種儀式對他們來說比對你更有意義。",
      "deeperQuestion": "獨立性是否可以包括接納他人的儀式？"
    }
  },
  {
    "id": "ponder-cute-072",
    "category": "Cute",
    "emoji": "🫖",
    "title": "An Afternoon Without Words",
    "scenario": "You and a friend join a cooking activity without speech, messages, or writing. You must make a simple dessert together using gestures, and neither person may do everything. The recipe looks easy until you realize you disagree about what “a little” and “almost ready” mean.",
    "question": "Which three gestures would you invent first, and how would you recover from a misunderstanding?",
    "twist": "The dessert looks nothing like the picture, but each of you remembers a gesture that felt reassuring.",
    "deeperQuestion": "Does feeling understood always require an explanation? What quiet forms of care do you overlook?",
    "zh": {
      "title": "不用說話的下午",
      "scenario": "你和朋友參加一個下午的小活動：不能說話、傳訊息或寫字，只能用動作合作完成一道點心。食譜很簡單，但你們對「少許」和「差不多」的理解完全不同，也不能由一個人包辦。",
      "question": "你會先發明哪三個手勢？出現誤會時，怎樣重新合作？",
      "twist": "最後的點心和照片完全不同，但你們都記得對方某個讓自己安心的動作。",
      "deeperQuestion": "被理解一定要靠解釋嗎？你最容易忽略哪一種無聲的關心？"
    }
  },
  {
    "id": "ponder-cute-073",
    "category": "Cute",
    "emoji": "🌈",
    "title": "The Stuffed Council",
    "scenario": "Your childhood toys vote against being donated.\n\nYou once promised never to give them away. They have not changed, but your life has, and keeping that promise means letting them remain mostly untouched.",
    "question": "Would you respect their decision?",
    "twist": "They admit another child would play with them more.",
    "deeperQuestion": "Whose happiness should decide a meaningful goodbye?",
    "zh": {
      "title": "毛公仔議會",
      "scenario": "你童年的毛公仔投票反對被捐出去，因為你小時候曾答應永遠不送走它們。公仔還是一樣，你的生活卻已改變。履行承諾，可以讓它們留下來，但它們大概仍會和現在一樣，很少有人陪著玩。",
      "question": "你會尊重他們的決定嗎？",
      "twist": "玩具們承認，另一個孩子會比你更常和它們玩。",
      "deeperQuestion": "誰的幸福應該決定一個有意義的告別？"
    }
  },
  {
    "id": "ponder-cute-074",
    "category": "Cute",
    "emoji": "🌷",
    "title": "The Nice List",
    "scenario": "A magical list records every kindness, including ones nobody noticed.\n\nThe list includes ordinary kindness rather than spectacular heroism. Reading it could deepen your appreciation of friends or quietly turn friendship into a comparison of moral scores.",
    "question": "Would you read your friends' entries?",
    "twist": "You might start comparing totals.",
    "deeperQuestion": "Can measuring kindness undermine its purpose?",
    "zh": {
      "title": "好人名單",
      "scenario": "一張神奇的清單記錄著每一份善意，包括那些無人察覺的善舉。這份清單收錄的是平凡的善行，而非驚天動地的英雄壯舉。閱讀這份清單，或許能加深你對朋友的感激之情，也可能悄悄將友誼變成一場道德比拼。",
      "question": "你會翻看名單上朋友們的紀錄嗎？",
      "twist": "你可以開始比較總數。",
      "deeperQuestion": "衡量善意是否會損害善意的目的？"
    }
  },
  {
    "id": "ponder-cute-075",
    "category": "Cute",
    "emoji": "🧸",
    "title": "The Slow Letter",
    "scenario": "A friend's handwritten letter arrives after your disagreement has ended.\n\nThe letter contains feelings they were never ready to say aloud. Raising it again might honor those feelings, but also reopen something they thought had settled.",
    "question": "Would you discuss its hurt feelings again?",
    "twist": "They no longer remember writing it.",
    "deeperQuestion": "Does every honest feeling need a later response?",
    "zh": {
      "title": "慢信",
      "scenario": "你和朋友的爭執早已平息，一封對方之前寄出的手寫信卻直到現在才送到。信裡寫著當時沒能說出口的委屈。重新談起，或許能讓對方感到被理解，也可能再打開一件彼此以為已經放下的事。",
      "question": "事情已經和好，你還會重提信裡那些受傷的感受嗎？",
      "twist": "他們不再記得寫過它了。",
      "deeperQuestion": "每一種真誠的感受都需要事後回應嗎？"
    }
  },
  {
    "id": "ponder-cute-076",
    "category": "Cute",
    "emoji": "🌻",
    "title": "The Floating House",
    "scenario": "Your tiny floating house follows whoever feels most at home inside.\n\nYou want guests to feel welcome, not to become competitors for your home. Opening the door now means accepting that real hospitality could change who belongs there most.",
    "question": "Would you invite guests?",
    "twist": "It might choose to leave with them.",
    "deeperQuestion": "Can something belong to you while choosing otherwise?",
    "zh": {
      "title": "漂浮的房子",
      "scenario": "你那小小的漂浮屋會跟著誰覺得最自在地待在裡面。你希望客人感到賓至如歸，而不是與你爭奪你的家。現在敞開大門意味著接受這樣一個事實：真正的款待可能會改變誰才是最合適的主人。",
      "question": "你會邀請客人嗎？",
      "twist": "它可能會選擇和他們一起離開。",
      "deeperQuestion": "如果一個有自己意願的生命選擇離開，它還能算是屬於你的嗎？"
    }
  },
  {
    "id": "ponder-cute-077",
    "category": "Cute",
    "emoji": "🐣",
    "title": "The Sweet Shortcut",
    "scenario": "A fairy finishes your friend's handmade gift overnight.\n\nYou want the finished gift to reflect your care, but time is running out. The fairy can reproduce your style while removing the effort your friend values.",
    "question": "Would you accept the help?",
    "twist": "Your friend most values the time you spend.",
    "deeperQuestion": "What part of a gift carries its meaning?",
    "zh": {
      "title": "甜蜜捷徑",
      "scenario": "你正在替朋友做手工禮物，一位小仙子提出今晚替你全部完成。她能模仿你的風格，讓成品看不出分別。你很想把禮物準時送出，卻知道朋友最珍惜的，也許正是你親手花時間製作的過程。",
      "question": "你願意接受協助嗎？",
      "twist": "你的朋友最珍惜的是你陪伴他的時間。",
      "deeperQuestion": "禮物的哪一部分承載著它的意義？"
    }
  },
  {
    "id": "ponder-cute-078",
    "category": "Cute",
    "emoji": "☁️",
    "title": "The Tiny Parade",
    "scenario": "Ants organize a parade celebrating your existence.\n\nThe parade is carefully planned and clearly important to the ants. Your housemate never agreed to host it and sees only a kitchen they suddenly cannot use.",
    "question": "Would you close your kitchen for them?",
    "twist": "Your housemate needs to cook dinner.",
    "deeperQuestion": "When should private delight inconvenience someone else?",
    "zh": {
      "title": "微型遊行",
      "scenario": "螞蟻們組織了一場遊行來慶祝你的存在。這場遊行經過精心策劃，顯然對螞蟻來說意義非凡。你的室友從未同意舉辦這場遊行，現在看到的只是一間突然無法使用的廚房。",
      "question": "你會為他們關閉廚房嗎？",
      "twist": "你的室友需要做晚餐了。",
      "deeperQuestion": "個人的快樂何時該造成他人不便？"
    }
  },
  {
    "id": "ponder-cute-079",
    "category": "Cute",
    "emoji": "🍪",
    "title": "The Friendly Raincoat",
    "scenario": "A raincoat changes color to match your true mood.\n\nThe raincoat would let friends notice when you need support without asking. It would also display passing reactions you would normally choose to process privately first.",
    "question": "Would you wear it with friends?",
    "twist": "It cannot hide happiness during their disappointment.",
    "deeperQuestion": "Do friends deserve access to every reaction?",
    "zh": {
      "title": "友善的雨衣",
      "scenario": "這款雨衣會根據你的真實心情改變顏色。朋友們無需開口就能察覺到你需要幫助。它也能顯示你通常會選擇先私下消化的情緒反應。",
      "question": "和朋友相處時，你會穿上這件雨衣嗎？",
      "twist": "當朋友失望時，雨衣仍然會把你心裡的快樂顯露出來。",
      "deeperQuestion": "朋友有權利了解每一種反應嗎？"
    }
  },
  {
    "id": "ponder-cute-080",
    "category": "Cute",
    "emoji": "🧶",
    "title": "The Blanket Fort",
    "scenario": "Your sibling preserves your childhood blanket fort for your visits.\n\nYou appreciate the care behind the preserved room, but no longer enjoy sitting there. Suggesting change could make visits feel more honest and less like reenacting childhood.",
    "question": "Would you suggest taking it down?",
    "twist": "They want the room but fear losing closeness.",
    "deeperQuestion": "Can changing a tradition protect a relationship?",
    "zh": {
      "title": "毛毯堡壘",
      "scenario": "你的兄弟姊妹保留了你小時候用毯子搭成的堡壘，供你探望時使用。你很感激他們用心維護這個房間，但你不再喜歡坐在那裡。建議做出一些改變，可以讓每次探望都更真誠，而不是像在重溫童年時光。",
      "question": "你建議把它撤下來嗎？",
      "twist": "他們想要房間，但又害怕失去親密關係。",
      "deeperQuestion": "改變傳統能否保護一段關係？"
    }
  },
  {
    "id": "ponder-cute-081",
    "category": "Cute",
    "emoji": "🌱",
    "title": "The Gentle Mirror",
    "scenario": "A mirror shows you as people who love you see you.\n\nThe mirror shows a warm version of you, but not a single consistent portrait. You notice how much each image reflects the hopes of the person looking.",
    "question": "Would you replace your ordinary mirror?",
    "twist": "Their views contradict one another.",
    "deeperQuestion": "Which loving perspective deserves your trust?",
    "zh": {
      "title": "溫柔的鏡子",
      "scenario": "鏡子映照出愛你的人眼中的你。鏡子展現的是溫暖的你，但並非始終如一的形象。你會注意到，每個影像都反映了觀看者的期望。",
      "question": "你會用它來取代你普通的鏡子嗎？",
      "twist": "他們的觀點相互矛盾。",
      "deeperQuestion": "哪一種愛的視角值得你信任？"
    }
  },
  {
    "id": "ponder-cute-082",
    "category": "Cute",
    "emoji": "🦋",
    "title": "Your Own Tiny Holiday",
    "scenario": "You and your friends may invent an annual holiday with a tiny budget. You might live in different cities later, so it cannot rely on meeting in person. It cannot celebrate a birthday or achievement, only something small you want your lives to keep making room for.",
    "question": "What would you call it, and what ritual could work across different cities?",
    "twist": "Five years later, a new friend wants to join without knowing the original story.",
    "deeperQuestion": "What should a shared ritual preserve most: its founders, its actions, or the feeling behind it?",
    "zh": {
      "title": "我們的專屬節日",
      "scenario": "你和朋友可以創立一個每年都過的小節日，預算很少，而且大家未來可能住在不同城市。它不能慶祝生日或成就，只能紀念某件你們希望生活裡一直有的小事。",
      "question": "你會替節日取甚麼名字？設計一個異地也做得到的儀式。",
      "twist": "五年後，一個新朋友也想加入，但並不知道最初的故事。",
      "deeperQuestion": "一個共同儀式最需要保留的，是原來的人、做法，還是它想帶來的感覺？"
    }
  },
  {
    "id": "ponder-cute-083",
    "category": "Cute",
    "emoji": "🐌",
    "title": "The Kind Rival",
    "scenario": "Your competition rival secretly helps you improve.\n\nYou enjoy competing because you both care deeply about the activity. Their generosity makes winning feel less straightforward than simply proving you were better that day.",
    "question": "Would you let them continue?",
    "twist": "Helping you could cost them the prize.",
    "deeperQuestion": "Can competition coexist with wholehearted generosity?",
    "zh": {
      "title": "善良的對手",
      "scenario": "比賽中的對手一直暗中幫你進步。你們都喜歡這項活動，也珍惜彼此的實力。接受幫助會讓比賽更精彩，但當你真的贏了，你可能很難把勝利單純理解為自己比對方更出色。",
      "question": "你會讓他們繼續下去嗎？",
      "twist": "幫助你可能會讓他們失去獎項。",
      "deeperQuestion": "競爭與全心全意的慷慨可以並存嗎？"
    }
  },
  {
    "id": "ponder-cute-084",
    "category": "Cute",
    "emoji": "🫖",
    "title": "The Borrowed Nest",
    "scenario": "Birds build a nest inside your favorite hat.\n\nThe nest is carefully balanced and contains lives that know nothing of the ceremony. Moving it for your convenience would disturb a home made without understanding your plans.",
    "question": "Would you wait until they leave?",
    "twist": "You need the hat for a family ceremony.",
    "deeperQuestion": "How much inconvenience does accidental hospitality require?",
    "zh": {
      "title": "借來的巢",
      "scenario": "鳥兒在你最喜歡的帽子裡築巢。巢穴精心平衡，裡面住著對儀式一無所知的生命。為了自己的方便而移動它，會擾亂這個在不了解你的計劃的情況下建立的家園。",
      "question": "你會等到他們離開嗎？",
      "twist": "你需要這頂帽子來參加家庭儀式。",
      "deeperQuestion": "意外的款待會造成多大的不便？"
    }
  },
  {
    "id": "ponder-cute-085",
    "category": "Cute",
    "emoji": "🌈",
    "title": "The Welcome Cake",
    "scenario": "Neighbors welcome you with a cake you cannot eat.\n\nYou want to recognize the welcome without starting your new relationship with a misunderstanding. A gentle conversation now might spare everyone repeated effort and disappointment later.",
    "question": "Would you tell them why?",
    "twist": "They want to repeat the tradition monthly.",
    "deeperQuestion": "Does avoiding awkwardness sometimes prolong disappointment?",
    "zh": {
      "title": "歡迎蛋糕",
      "scenario": "鄰居們熱情地送你一塊蛋糕，但你卻吃不到。你想表達謝意，又不想因為誤會而讓新關係的開始蒙上陰影。現在好好溝通一下，或許就能避免日後大家反覆的麻煩和失望。",
      "question": "你會告訴他們原因嗎？",
      "twist": "他們希望每月重複這項傳統。",
      "deeperQuestion": "避免尷尬有時是否會延長失望？"
    }
  },
  {
    "id": "ponder-cute-086",
    "category": "Cute",
    "emoji": "🌷",
    "title": "The Tiny Vacation",
    "scenario": "Your houseplants request a week outdoors together.\n\nThe outdoor week could become a joyful shared adventure. Including the fragile plant safely would require changing the trip for everyone, not simply leaving it behind.",
    "question": "Would you move them?",
    "twist": "One fragile plant cannot safely join.",
    "deeperQuestion": "Should a group's joy wait for its least able member?",
    "zh": {
      "title": "短暫假期",
      "scenario": "你的盆栽植物想要一起在戶外待一週。這戶外的一週可以變成一場充滿樂趣的共同冒險。為了確保這些嬌嫩的植物安全，我們需要改變大家的旅遊計劃，而不是簡單地把它們留在家裡。",
      "question": "你會移動它們嗎？",
      "twist": "一株脆弱的植物無法安全加入。",
      "deeperQuestion": "一個群體的快樂應該等到能力最弱的成員才能到來嗎？"
    }
  },
  {
    "id": "ponder-cute-087",
    "category": "Cute",
    "emoji": "🧸",
    "title": "The Memory Bakery",
    "scenario": "A bakery recreates treats remembered by people who miss their hometowns.\n\nThe treat tastes close enough to stir memories but different enough to disappoint. You realize the baker is offering their own version of home, not reproducing yours exactly.",
    "question": "Would you correct an imperfect recipe?",
    "twist": "The baker adapted it from their own childhood.",
    "deeperQuestion": "Can two versions of home both be authentic?",
    "zh": {
      "title": "記憶麵包店",
      "scenario": "一家麵包店重現了那些思念家鄉的人們記憶中的甜點。這些甜點的味道足夠接近，能夠喚起人們的回憶，但又足夠不同，以至於令人失望。你意識到，麵包師傅提供的是他們自己版本的家鄉，而不是完全複製你記憶中的味道。",
      "question": "你會修正不完美的食譜嗎？",
      "twist": "麵包師傅根據自己的童年經歷改編了它。",
      "deeperQuestion": "兩個版本的家都可以是真的嗎？"
    }
  },
  {
    "id": "ponder-cute-088",
    "category": "Cute",
    "emoji": "🌻",
    "title": "The Little Promise",
    "scenario": "You promise a child to admire their drawing tomorrow.\n\nThe drawing is unfinished because they are saving the final detail to show you. Your promise seemed casual to you but has shaped their expectations for the whole day.",
    "question": "Would you postpone for a minor work deadline?",
    "twist": "They remember the promise exactly.",
    "deeperQuestion": "Why do small promises matter so much?",
    "zh": {
      "title": "小承諾",
      "scenario": "你答應一個孩子明天會欣賞他的畫作。畫還沒完成，因為他想把最後一個細節留到明天給你看。你的承諾看似隨意，卻影響了他一整天的期待。",
      "question": "你會為了一個小小的工作截止日期而延後嗎？",
      "twist": "他們清楚記得這個承諾。",
      "deeperQuestion": "為什麼小小的承諾如此重要？"
    }
  },
  {
    "id": "ponder-cute-089",
    "category": "Cute",
    "emoji": "🐣",
    "title": "The Loveable Weed",
    "scenario": "A weed growing through your floor blooms when you talk to it.\n\nIts flowers have made a previously unloved room feel alive. Removing it would protect your home while ending a small relationship you did not expect to value.",
    "question": "Would you remove it?",
    "twist": "It will eventually damage the house.",
    "deeperQuestion": "Can something be precious and still need to go?",
    "zh": {
      "title": "可愛的雜草",
      "scenario": "一株從地板縫隙裡長出來的雜草，在你跟它說話的時候竟然開花了。它的花朵讓原本無人問津的房間充滿了生氣。除掉它，既能保護你的家，也能結束一段你原本並不看重的「友誼」。",
      "question": "你會把它移除嗎？",
      "twist": "這最終會損壞房屋。",
      "deeperQuestion": "珍貴的東西是否也需要捨棄？"
    }
  },
  {
    "id": "ponder-cute-090",
    "category": "Cute",
    "emoji": "☁️",
    "title": "Listen, Solve, or Take a Break?",
    "scenario": "A friend has a terrible day and asks you to walk together. You usually jump to solutions, but this time you ask whether they want listening, ideas, or a break from the subject. They pause and say they do not know what they need.",
    "question": "How would you begin the walk without deciding their needs for them?",
    "twist": "Later, they say the most helpful part was not being required to explain everything immediately.",
    "deeperQuestion": "How do you want people to approach you when you are upset? Is that how you usually comfort others?",
    "zh": {
      "title": "先聽，還是一起想？",
      "scenario": "一位朋友度過了很糟的一天，約你散步。你平常很快就想到解決辦法，但這次決定先問對方，想有人聽、想一起想辦法，還是想暫時聊別的。朋友停了一下，說自己也不知道。",
      "question": "你會怎樣開始這段散步，而不急著替對方決定需要甚麼？",
      "twist": "走了一會兒，朋友說最有幫助的，是你沒有要求他立刻把事情說清楚。",
      "deeperQuestion": "你難過時，希望別人如何靠近？你給人的安慰，和自己想收到的一樣嗎？"
    }
  },
  {
    "id": "ponder-cute-091",
    "category": "Cute",
    "emoji": "🍪",
    "title": "The Wish List",
    "scenario": "You discover a friend wants a gift you find deeply impractical.\n\nThe practical gift would be easier to justify and probably used more often. The impractical one might say that you listened to a desire nobody else took seriously.",
    "question": "Would you buy something useful instead?",
    "twist": "They have wanted it since childhood.",
    "deeperQuestion": "Should gifts reflect needs or the recipient's imagination?",
    "zh": {
      "title": "願望清單",
      "scenario": "你發現朋友想要一份你覺得非常不切實際的禮物。實用的禮物更容易讓人信服，而且可能使用頻率更高。而不切實際的禮物可能意味著你聽從了別人都不當回事的願望。",
      "question": "你會買些有用的東西嗎？",
      "twist": "他們從小就想要它。",
      "deeperQuestion": "禮物應該反映需求還是反映收禮者的想像？"
    }
  },
  {
    "id": "ponder-cute-092",
    "category": "Cute",
    "emoji": "🧶",
    "title": "The Weather Friend",
    "scenario": "A little rain spirit feels unwanted whenever people celebrate sunshine.\n\nYou want the spirit to feel welcome without pretending that every rainy day delights you. It needs a place in your life, not necessarily your first preference.",
    "question": "Would you pretend to prefer rain?",
    "twist": "It asks for your honest favorite weather.",
    "deeperQuestion": "Can we validate someone without sharing their preferences?",
    "zh": {
      "title": "天氣之友",
      "scenario": "當人們慶祝陽光燦爛的日子時，小小的雨靈會感到不受歡迎。你希望它感到自在，但又不必假裝每個下雨天都讓你感到快樂。它需要在你的生活中佔有一席之地，但不一定是你的首選。",
      "question": "你會假裝比較喜歡下雨嗎？",
      "twist": "它會問你最喜歡的天氣。",
      "deeperQuestion": "即使不認同對方的喜好，我們仍能接納和肯定對方嗎？"
    }
  },
  {
    "id": "ponder-cute-093",
    "category": "Cute",
    "emoji": "🌱",
    "title": "The Shared Scrapbook",
    "scenario": "Your friend wants to remove a photo you treasure from your shared scrapbook.\n\nYou remember laughing when the photograph was taken, while your friend remembers pretending. Keeping it visible may celebrate an experience the other person was trying to survive.",
    "question": "Would you agree?",
    "twist": "The moment was happy for you but painful for them.",
    "deeperQuestion": "Can one object hold incompatible emotional truths?",
    "zh": {
      "title": "共享剪貼簿",
      "scenario": "你的朋友想從你們共同的剪貼簿中移除一張你珍藏的照片。你記得拍照時自己開懷大笑，而你的朋友卻記得當時是在假裝。保留這張照片或許是為了紀念對方當時正在努力克服的一段經歷。",
      "question": "你同意嗎？",
      "twist": "對你來說是快樂的時刻，但對他們來說是痛苦的時刻。",
      "deeperQuestion": "一個物體可以承載相互矛盾的情感真理嗎？"
    }
  },
  {
    "id": "ponder-cute-094",
    "category": "Cute",
    "emoji": "🍲",
    "title": "The Recipe Without Measurements",
    "scenario": "You want to learn a family dish, but the older relative who makes it never measures anything. While cooking together, you record quantities as they tell stories about who loved it and the times it went wrong. Their instructions keep ending with “until it looks like this.”",
    "question": "How would you learn the dish, and what would you record besides ingredients?",
    "twist": "Your next attempt tastes different, but you finally understand one of those unmeasured instructions.",
    "deeperQuestion": "What kinds of knowledge require doing something together? Who would you like to learn from?",
    "zh": {
      "title": "未學會的拿手菜",
      "scenario": "你想學一道家裡常吃的菜，長輩卻從來不用食譜，只說「看到這樣就可以」。你們一起煮了一次，你忙著記份量，對方則一直講以前誰最愛吃、哪次不小心煮失敗。",
      "question": "你會怎樣把這道菜學下來？除了材料，還會記錄甚麼？",
      "twist": "照筆記再煮時，味道並不一樣，但你突然明白長輩當時指的「這樣」是甚麼。",
      "deeperQuestion": "有些知識是否只能透過一起做來傳遞？你最想向身邊誰學甚麼？"
    }
  },
  {
    "id": "ponder-cute-095",
    "category": "Cute",
    "emoji": "🐌",
    "title": "The Tiny Guide",
    "scenario": "A friendly beetle insists on guiding you home very slowly.\n\nFollowing would delay your evening but give the beetle a task it values. You wonder whether accepting help is generous when you do not actually need the service.",
    "question": "Would you follow it?",
    "twist": "Being useful has restored its confidence.",
    "deeperQuestion": "Can helping someone mean accepting inefficient help?",
    "zh": {
      "title": "小小嚮導",
      "scenario": "一隻友善的甲蟲堅持要慢慢引導你回家。跟著它走會耽誤你晚上的時間，但卻能給這隻甲蟲完成一項它很重視的任務。你開始猶豫，明明不需要幫助，接受它的幫助是否顯得慷慨。",
      "question": "你會跟隨它嗎？",
      "twist": "有用性恢復了它的信心。",
      "deeperQuestion": "幫助別人是否意味著接受效率低下的幫助？"
    }
  },
  {
    "id": "ponder-cute-096",
    "category": "Cute",
    "emoji": "🫖",
    "title": "The Birthday Candle",
    "scenario": "A candle grants a wish only if everyone present secretly agrees.\n\nEveryone loves you, but they imagine different versions of a good future for you. Their disagreement could express concern rather than any lack of goodwill.",
    "question": "Would you say your wish aloud?",
    "twist": "Someone disagrees for a caring reason.",
    "deeperQuestion": "Should others get a vote in your happiness?",
    "zh": {
      "title": "生日蠟燭",
      "scenario": "生日蠟燭能實現你的願望，但前提是所有在場的人心裡都同意。朋友們原本真心想讓你開心，聽到具體願望後，卻可能因各自對你的理解而有所保留。你要先說出願望，才能知道大家是否支持。",
      "question": "你願意大聲說出你的願望嗎？",
      "twist": "有人因為關心而持不同意見。",
      "deeperQuestion": "你的幸福是否應該由別人決定？"
    }
  },
  {
    "id": "ponder-cute-097",
    "category": "Cute",
    "emoji": "🌈",
    "title": "The Midnight Picnic",
    "scenario": "Your friends plan a surprise picnic when you desperately need sleep.\n\nYou know they worked hard to surprise you, and you genuinely want their company. Asking to reschedule would mean trusting that their care includes listening to your limits.",
    "question": "Would you go anyway?",
    "twist": "They would happily reschedule if you asked.",
    "deeperQuestion": "Why can accepting kindness make honesty difficult?",
    "zh": {
      "title": "午夜野餐",
      "scenario": "當你急需休息時，朋友們精心策劃了一場驚喜野餐。你知道他們為了給你這個驚喜付出了很多心血，你也真心希望他們能陪在你身邊。如果要求改期，就代表你相信他們的關心也包括尊重你的實際情況。",
      "question": "你還是會去嗎？",
      "twist": "如果你提出要求，他們會很樂意重新安排時間。",
      "deeperQuestion": "為什麼接受善意會讓誠實變得困難？"
    }
  },
  {
    "id": "ponder-cute-098",
    "category": "Cute",
    "emoji": "🌷",
    "title": "The Comfort Stone",
    "scenario": "You can give your calming stone to only one anxious friend.\n\nYou cannot divide the stone, and neither friend's distress is easy to compare. The quieter person may need help, but you should not assume silence means greater suffering.",
    "question": "How would you choose?",
    "twist": "One asks directly; another hides their need.",
    "deeperQuestion": "Should asking clearly give someone priority?",
    "zh": {
      "title": "安慰石",
      "scenario": "你只能將這塊鎮靜石送給一位焦慮的朋友。你不能分割這塊石頭，而且兩位朋友的痛苦程度也難以比較。個性比較安靜的那位朋友或許也需要幫助，但你不該認為沉默意味著更大的痛苦。",
      "question": "你會如何選擇？",
      "twist": "有人直接提出需求；有人則隱藏自己的需求。",
      "deeperQuestion": "明確提出要求是否應該給予某人優先權？"
    }
  },
  {
    "id": "ponder-cute-099",
    "category": "Cute",
    "emoji": "🧸",
    "title": "The Tiny Goodbye",
    "scenario": "A migrating bird offers to stay because it knows you will miss it.\n\nYou could keep its company through a lonely season, but would also separate it from familiar skies. Letting it go asks you to trust a future reunion.",
    "question": "Would you accept?",
    "twist": "Its flock promises to return next spring.",
    "deeperQuestion": "Can love make room for necessary absence?",
    "zh": {
      "title": "小小的告別",
      "scenario": "一隻遷徙的鳥兒主動留下，因為它知道你會想念它。你可以陪伴它度過孤獨的季節，但也會讓它遠離熟悉的天空。放它走，等於你相信未來會與它重逢。",
      "question": "你願意接受嗎？",
      "twist": "牠的鳥群答應明年春天會再回來。",
      "deeperQuestion": "愛能否為必要的離別騰出空間？"
    }
  },
  {
    "id": "ponder-cute-100",
    "category": "Cute",
    "emoji": "🌻",
    "title": "Hello to a Future Friend",
    "scenario": "You prepare an envelope for someone you will meet at a gathering a year from now. It may contain one question, one small story about you, and one portable object. You cannot include a résumé or list achievements; the envelope should offer an easy way to start talking.",
    "question": "What would you include to help a stranger feel comfortable beginning a conversation?",
    "twist": "A year later, the story no longer represents you, but the envelope is still unopened.",
    "deeperQuestion": "Would you replace it or introduce your earlier self? What do you most want someone to know when you first meet?",
    "zh": {
      "title": "給未來朋友的招呼",
      "scenario": "你要替一年後的一次聚會準備一個小信封，給一位現在還不認識的新朋友。裡面只能放一個問題、一段關於你的小故事，以及一件方便攜帶的小物。不能放履歷，也不能介紹自己的成就。",
      "question": "你會放甚麼，讓對方有一個舒服的話題可以開始？",
      "twist": "一年後，你發現那段小故事已不能代表現在的你，但信封還沒打開。",
      "deeperQuestion": "你會換掉它，還是讓新朋友先認識以前的你？第一次見面，你最希望別人知道甚麼？"
    }
  },
  {
    "id": "ponder-funny-002",
    "category": "Funny",
    "emoji": "😂",
    "title": "Fridge Judge",
    "scenario": "Your fridge refuses snacks whenever it thinks you are avoiding your feelings.\n\nYou bought a refrigerator, not a life coach, and want dessert without interrogation. Yet its inconvenient questions have helped you notice habits you genuinely wanted to change.",
    "question": "Would you replace it?",
    "twist": "It has a perfect record of being right.",
    "deeperQuestion": "Does good advice justify unwanted control?",
    "zh": {
      "title": "冰箱法官",
      "scenario": "每當冰箱覺得你在逃避自己的感覺時，它就會拒絕給你零食。你買的是冰箱，不是人生導師，你想要的是無需盤問就能享用的甜點。然而，它那些令人不快的提問卻幫助你注意到了一些你真心想要改變的習慣。",
      "question": "你會更換它嗎？",
      "twist": "冰箱至今每一次判斷都準確，從未看錯你的情緒。",
      "deeperQuestion": "即使建議是對的，就有理由介入你不想被控制的生活嗎？"
    }
  },
  {
    "id": "ponder-funny-003",
    "category": "Funny",
    "emoji": "🐶",
    "title": "Sock Election",
    "scenario": "Your socks elect a leader who bans mismatched outfits.\n\nTheir manifesto is surprisingly persuasive, but you paid for the socks. You wonder whether ownership settles the issue once your possessions can explain their own preferences.",
    "question": "Would you respect the vote?",
    "twist": "Only the socks experience the embarrassment.",
    "deeperQuestion": "Who should control a shared appearance?",
    "zh": {
      "title": "襪子選舉",
      "scenario": "你的襪子選出了一位領袖，禁止穿不搭調的衣服。它們的宣言出乎意料地有說服力，但襪子是你買的。你開始思考，當你的物品能夠解釋它們的偏好時，所有權是否就能解決這個問題。",
      "question": "你會尊重投票結果嗎？",
      "twist": "只有襪子感到尷尬。",
      "deeperQuestion": "誰應該控制共享外觀？"
    }
  },
  {
    "id": "ponder-funny-004",
    "category": "Funny",
    "emoji": "🦆",
    "title": "Honest Elevator",
    "scenario": "An elevator announces everyone's actual reason for visiting the building.\n\nTaking the stairs protects your privacy but makes you late every morning. Other riders insist that anyone with an innocent purpose should have nothing to hide.",
    "question": "Would you still ride?",
    "twist": "Your reason is harmless but deeply embarrassing.",
    "deeperQuestion": "Is privacy valuable when nothing is wrong?",
    "zh": {
      "title": "誠實電梯",
      "scenario": "電梯會報出每個人來這棟大樓的真實目的。走樓梯雖然能保護你的隱私，但會讓你每天早上遲到。其他乘客則堅持認為，任何目的單純的人都不應該隱瞞什麼。",
      "question": "你仍然會乘搭這部電梯嗎？",
      "twist": "你的理由雖然無傷大雅，但卻令人非常尷尬。",
      "deeperQuestion": "當一切正常時，隱私還有價值嗎？"
    }
  },
  {
    "id": "ponder-funny-005",
    "category": "Funny",
    "emoji": "🧦",
    "title": "Mandatory Villain",
    "scenario": "Your friend group assigns someone the villain role during every board game.\n\nThe role involves fake betrayal and exaggerated accusations, but the jokes sometimes linger afterward. You enjoy making everyone laugh while wondering whether they notice the emotional cost.",
    "question": "Would you volunteer?",
    "twist": "Everyone finds the game boring without one.",
    "deeperQuestion": "Is consenting to dislike still emotionally costly?",
    "zh": {
      "title": "一定要有個反派",
      "scenario": "你的朋友們在每次玩桌遊時都會指定一個人扮演反派角色。這個角色需要假裝背叛和誇大地指責別人，但這些玩笑有時會在遊戲結束後持續發酵。你很享受逗大家開心的感覺，同時也想著他們是否意識到你為此付出的情感代價。",
      "question": "你會自願擔任這個角色嗎？",
      "twist": "沒有它，每個人都覺得遊戲很無聊。",
      "deeperQuestion": "即使自願扮演被討厭的角色，仍會付出情感上的代價嗎？"
    }
  },
  {
    "id": "ponder-funny-006",
    "category": "Funny",
    "emoji": "🍕",
    "title": "The Pasta Passport",
    "scenario": "Italy grants citizenship to anyone who correctly identifies one hundred pasta shapes.\n\nYou love the food but dislike being told what counts as authentic enjoyment. Passing the test would give you belonging that comes with permanent culinary supervision.",
    "question": "Would you study for it?",
    "twist": "You must renounce ketchup on pasta forever.",
    "deeperQuestion": "Can belonging depend on harmless personal preferences?",
    "zh": {
      "title": "義大利麵護照",
      "scenario": "義大利授予任何能正確辨識一百種意麵形狀的人公民身分。你熱愛義大利美食，卻不喜歡別人告訴你怎樣才算真正享受美食。透過這項測試，你將獲得義大利公民身份，但同時也將接受永久的烹飪監督。",
      "question": "你會為此學習嗎？",
      "twist": "你必須永遠放棄在義大利麵上加番茄醬。",
      "deeperQuestion": "歸屬感能否取決於無害的個人偏好？"
    }
  },
  {
    "id": "ponder-funny-007",
    "category": "Funny",
    "emoji": "🥔",
    "title": "Office Duck",
    "scenario": "A duck does your job perfectly but demands your salary in peas.\n\nTraining the duck took months, and managing the peas is harder than expected. Your contribution disappears from view precisely because the arrangement works so smoothly.",
    "question": "Would you hire it secretly?",
    "twist": "Your boss promotes the duck instead of you.",
    "deeperQuestion": "Does delegation reduce your claim to achievement?",
    "zh": {
      "title": "辦公室鴨",
      "scenario": "一隻鴨子完美地完成了你的工作，但它要求你用豌豆支付工資。訓練這隻鴨子花了幾個月的時間，而管理豌豆比預想的要難得多。正因為一切運作得如此順暢，你的貢獻顯得如此微不足道。",
      "question": "你會秘密僱用它嗎？",
      "twist": "你的老闆提拔了鴨子而不是你。",
      "deeperQuestion": "授權是否會降低你對成就的主張？"
    }
  },
  {
    "id": "ponder-funny-008",
    "category": "Funny",
    "emoji": "🪿",
    "title": "Apology Jingle",
    "scenario": "Every apology you make must be sung as an advertising jingle.\n\nYou genuinely want to repair a friendship, but the required melody sounds unbearably cheerful. The person you hurt might hear an advertisement where you intend accountability.",
    "question": "Would you apologize less?",
    "twist": "People remember sung apologies for years.",
    "deeperQuestion": "Does an embarrassing format diminish genuine remorse?",
    "zh": {
      "title": "道歉廣告歌",
      "scenario": "你的每一句道歉都必須用廣告歌唱出來。你真的想修補友誼，但旋律總是歡快得不合時宜。你努力承認責任時，被你傷害的人聽到的，卻可能像一段想吸引注意的宣傳。",
      "question": "你會少道歉嗎？",
      "twist": "人們多年後仍然記得那些用歌唱出來的道歉。",
      "deeperQuestion": "令人尷尬的形式是否會削弱真正的悔意？"
    }
  },
  {
    "id": "ponder-funny-009",
    "category": "Funny",
    "emoji": "🧀",
    "title": "The Spoiler Tax",
    "scenario": "You earn money whenever you accidentally spoil a movie.\n\nYour friends invite you to movie nights less often, even when you try to stay quiet. The money creates suspicion about mistakes you cannot always prevent.",
    "question": "Would you warn your friends?",
    "twist": "You cannot earn money from deliberate spoilers.",
    "deeperQuestion": "Are profitable accidents still innocent after preparation?",
    "zh": {
      "title": "劇透稅",
      "scenario": "你每次不小心劇透電影，都會得到一筆錢。即使你努力少說話，朋友也開始減少邀請你看電影。有了報酬，他們很難判斷你的失言是無意，還是你其實沒有那麼想避免犯錯。",
      "question": "你會警告你的朋友嗎？",
      "twist": "你不能透過故意劇透來賺錢。",
      "deeperQuestion": "有預謀的獲利性意外事故還能算是無辜的嗎？"
    }
  },
  {
    "id": "ponder-funny-010",
    "category": "Funny",
    "emoji": "🪑",
    "title": "Queue Royalty",
    "scenario": "You inherit a title granting priority in every queue.\n\nUsing the title for emergencies seems reasonable, but coffee queues gradually start feeling urgent too. You notice how quickly a special privilege becomes part of your normal expectations.",
    "question": "Would you use it?",
    "twist": "Your friends expect to join you.",
    "deeperQuestion": "How quickly does convenience become entitlement?",
    "zh": {
      "title": "排隊王族",
      "scenario": "你繼承了一個頭銜，享有在所有隊列中的優先權。在緊急情況下使用這個頭銜似乎合情合理，但漸漸地，就連排隊買咖啡也變得緊急起來。你注意到，這種特殊特權很快就變成了你習以為常的一部分。",
      "question": "你會使用它嗎？",
      "twist": "你的朋友也期待跟著你一起插隊。",
      "deeperQuestion": "便利性究竟多快會變成一種權利？"
    }
  },
  {
    "id": "ponder-funny-011",
    "category": "Funny",
    "emoji": "🍝",
    "title": "The Talking Receipt",
    "scenario": "Your receipts loudly defend every silly purchase you make.\n\nThe receipts defend your choices more eloquently than you can. Their support feels comforting until you realize you are using them to avoid deciding whether the purchases were worthwhile.",
    "question": "Would you keep them?",
    "twist": "They also reveal the purchases you regret.",
    "deeperQuestion": "Does justification help or delay self-awareness?",
    "zh": {
      "title": "會說話的收據",
      "scenario": "你的收據將為你的每一筆愚蠢消費辯護。它們比你自己更能雄辯地證明你的選擇是正確的。它們的支持讓你感到安心，直到你意識到你只是在用它們來逃避思考這些消費是否值得。",
      "question": "你會保留它們嗎？",
      "twist": "它們也會揭示你後悔的購買行為。",
      "deeperQuestion": "辯解是有助於還是會延緩自我意識的形成？"
    }
  },
  {
    "id": "ponder-funny-012",
    "category": "Funny",
    "emoji": "🎤",
    "title": "The Group Chat Mayor",
    "scenario": "Your group chat elects you mayor with power to ban one annoying habit.\n\nYou promised a fair campaign, yet your first instinct is to target the behavior that annoys you personally. Winning may reveal less about wisdom than popularity.",
    "question": "What would you ban?",
    "twist": "Your own favorite habit wins the next vote.",
    "deeperQuestion": "Should rules be fair when tastes differ?",
    "zh": {
      "title": "群聊市長",
      "scenario": "你的群聊選舉你當「市長」，賦予你禁止一種令人討厭的習慣的權力。你承諾會公平競選，但你的第一個反應卻是針對那些讓你個人反感的行為。獲勝或許更反映了人氣而非智慧。",
      "question": "你會禁止什麼？",
      "twist": "你最喜歡的習慣將在下一輪投票中獲勝。",
      "deeperQuestion": "當人們的喜好不同時，規則是否應該公平？"
    }
  },
  {
    "id": "ponder-funny-013",
    "category": "Funny",
    "emoji": "🐹",
    "title": "The Compliment Subscription",
    "scenario": "Your mirror charges monthly for increasingly flattering compliments.\n\nThe compliments make getting ready more pleasant and gradually shape your confidence. Canceling would save money but feel oddly similar to losing an encouraging companion.",
    "question": "Would you subscribe?",
    "twist": "The free version remains perfectly accurate.",
    "deeperQuestion": "How much reassurance would you knowingly purchase?",
    "zh": {
      "title": "讚美訂閱",
      "scenario": "你的鏡子每月收費，為你提供越來越令人愉悅的讚美。這些讚美讓你的梳妝打扮更加賞心悅目，並逐漸增強你的自信。取消訂閱雖然可以省錢，但感覺卻像是失去了一位鼓勵你的朋友。",
      "question": "你會訂閱嗎？",
      "twist": "免費版本仍然完全準確。",
      "deeperQuestion": "即使明知安慰是買回來的，你仍願意為它付出多少？"
    }
  },
  {
    "id": "ponder-funny-014",
    "category": "Funny",
    "emoji": "😂",
    "title": "The Alien Sitcom",
    "scenario": "Aliens broadcast your ordinary life as their favorite comedy.\n\nYou never consented to the show and cannot edit its portrayal. Being paid might feel fair, but could also turn your ordinary decisions into attempts to entertain.",
    "question": "Would you demand payment?",
    "twist": "Their funniest episodes are your proudest achievements.",
    "deeperQuestion": "Who controls the meaning of your story?",
    "zh": {
      "title": "外星人情境喜劇",
      "scenario": "外星人將你平凡的生活當作他們最愛的喜劇節目播出。你從未同意過播出，也無法改變節目中的呈現方式。獲得報酬或許感覺公平，但也可能導致你平凡的日常決定變成取悅觀眾的嘗試。",
      "question": "你會要求付款嗎？",
      "twist": "他們最搞笑的劇集就是你最引以為傲的成就。",
      "deeperQuestion": "誰掌控你故事的意義？"
    }
  },
  {
    "id": "ponder-funny-015",
    "category": "Funny",
    "emoji": "🐶",
    "title": "Professional Napper",
    "scenario": "You get paid to nap, but performance reviews ruin your sleep.\n\nThe salary is excellent, and your family cannot understand why you complain. You start measuring rest by output instead of whether you actually wake feeling restored.",
    "question": "Would you keep the job?",
    "twist": "Taking naps off-duty now feels like unpaid labor.",
    "deeperQuestion": "Can turning pleasure into work destroy it?",
    "zh": {
      "title": "專業午睡者",
      "scenario": "你靠打盹賺錢，但績效評估卻毀了你的睡眠。薪水優渥，家人不懂你為何抱怨。你開始用工作產出來衡量休息效果，而不是醒來後是否真的感覺精神煥發。",
      "question": "你會繼續這份工作嗎？",
      "twist": "現在下班後打盹感覺就像在做無償勞動。",
      "deeperQuestion": "將快樂變成工作會毀掉快樂嗎？"
    }
  },
  {
    "id": "ponder-funny-016",
    "category": "Funny",
    "emoji": "🦆",
    "title": "The Haunted Toaster",
    "scenario": "A toaster burns helpful life advice onto your bread.\n\nThe messages arrive at exactly the moments when you need guidance. You cannot decide whether useful insight requires a human source or merely a reason to trust it.",
    "question": "Would you follow it?",
    "twist": "Its relationship advice is excellent, but it cannot date.",
    "deeperQuestion": "Does advice require personal experience?",
    "zh": {
      "title": "鬧鬼的烤麵包機",
      "scenario": "一台烤麵包機將有益的人生建議烤在麵包上。這些建議恰好在你需要指引的時候出現。你無法判斷這些有用的見解究竟需要來自人類，還是只需要一個理由去信任它。",
      "question": "你會聽從烤麵包機的建議嗎？",
      "twist": "它的戀愛建議很棒，但它不能約會。",
      "deeperQuestion": "提供建議是否需要個人經驗？"
    }
  },
  {
    "id": "ponder-funny-017",
    "category": "Funny",
    "emoji": "🧦",
    "title": "Office Mascot Interviews",
    "scenario": "Your office must choose a mascot: a duck that always leaves on time, a rock that never panics, or a noisy fan that constantly encourages everyone. Each candidate may demonstrate one talent, and you must host the final interview before everyone votes.",
    "question": "What would you ask, and how would you campaign for your preferred candidate?",
    "twist": "Everyone chooses the rock because it never schedules meetings.",
    "deeperQuestion": "How different can people’s stated priorities be from the needs their choices reveal?",
    "zh": {
      "title": "辦公室吉祥物面試",
      "scenario": "辦公室要選新吉祥物，最後三個候選者是一隻只會準時下班的鴨、一塊永遠不會緊張的石頭，以及會替所有人打氣但很吵的電風扇。每位候選者只能展示一項才能，你負責主持面試。",
      "question": "你會問甚麼問題，分辨誰真的適合？請替你支持的候選者拉票。",
      "twist": "全體投票後，大家選了石頭，因為它從來不開會。",
      "deeperQuestion": "大家嘴上說重視的特質，和實際選擇透露的需求，會差多遠？"
    }
  },
  {
    "id": "ponder-funny-018",
    "category": "Funny",
    "emoji": "🍕",
    "title": "Cat Landlord",
    "scenario": "Your cat gains legal ownership of your apartment.\n\nThe cat sets feeding times, restricts your visitors, and decides which furniture you may use. Its new authority makes your old definition of loving supervision suddenly feel less comfortable.",
    "question": "Would you accept its house rules?",
    "twist": "Its rules mirror the restrictions you imposed on it.",
    "deeperQuestion": "Does reversing roles reveal unfairness?",
    "zh": {
      "title": "貓房東",
      "scenario": "你的貓咪獲得了你公寓的合法所有權。它決定餵食時間、限制訪客，甚至決定你可以使用哪些家具。它新獲得的權威讓你先前對「愛的監督」的定義突然變得不再那麼令人安心。",
      "question": "你會接受它的房屋規則嗎？",
      "twist": "它的規則反映了你對它所施加的限制。",
      "deeperQuestion": "角色互換是否能揭示不公平現象？"
    }
  },
  {
    "id": "ponder-funny-019",
    "category": "Funny",
    "emoji": "🥔",
    "title": "The Laugh Track",
    "scenario": "A laugh track follows you everywhere, including serious conversations.\n\nAt first the laughter helps you recover from awkward moments. Later you worry that people never learn which parts of your life you actually take seriously.",
    "question": "Would you explain it to strangers?",
    "twist": "People like you more when they think you are funny.",
    "deeperQuestion": "Is accidental social advantage something you must disclose?",
    "zh": {
      "title": "笑聲",
      "scenario": "無論你去哪裡，都有像電視喜劇一樣的背景笑聲跟著你，連嚴肅談話也不例外。起初它能化解尷尬，後來你卻開始擔心，別人會分不清你在開玩笑，還是真的很在意一件事。",
      "question": "你會向陌生人解釋嗎？",
      "twist": "如果人們覺得你很幽默，他們就會更喜歡你。",
      "deeperQuestion": "意外獲得的社會優勢是否必須揭露？"
    }
  },
  {
    "id": "ponder-funny-020",
    "category": "Funny",
    "emoji": "👽",
    "title": "Three Sentences for an Alien",
    "scenario": "An alien visitor understands nothing about human routines. You get one sentence each to explain queuing, selfies, and eating dessert after feeling full. You cannot use unfamiliar Earth jargon or explain a custom by saying that everyone does it.",
    "question": "How would you explain all three, and which is hardest to make sound sensible?",
    "twist": "The alien understands dessert perfectly but thinks selfies are tests for whether people still exist.",
    "deeperQuestion": "Which ordinary habits become strange when removed from their cultural setting?",
    "zh": {
      "title": "三句話的外星說明書",
      "scenario": "一位外星訪客完全不懂人類的生活，你只有三句話可以解釋「排隊」、「自拍」和「明明吃飽還要吃甜品」。不能使用它不認識的地球術語，也不能說「大家都這樣」。",
      "question": "你會怎樣解釋這三件事？哪一件最難說得合理？",
      "twist": "外星人完全理解甜品，卻認為自拍是在檢查自己有沒有消失。",
      "deeperQuestion": "哪些我們覺得理所當然的習慣，離開原本文化後就變得奇怪？"
    }
  },
  {
    "id": "ponder-funny-021",
    "category": "Funny",
    "emoji": "🧀",
    "title": "Pizza Citizenship",
    "scenario": "A town lets residents vote only after sharing a pizza.\n\nThe shared meal makes political discussion friendlier, but the tradition was designed around the founders' tastes. New residents must adapt before they can help change the rules.",
    "question": "Would you join?",
    "twist": "Anyone with different topping preferences feels excluded.",
    "deeperQuestion": "Can a friendly tradition become a barrier?",
    "zh": {
      "title": "披薩公民身份",
      "scenario": "一個小鎮規定，居民只有在共享一份披薩後才能投票。共享美食讓政治討論更加友好，但這項傳統是根據建鎮者的口味制定的。新居民必須先適應這種習俗，才能參與修改規則。",
      "question": "你願意加入嗎？",
      "twist": "任何有不同食材偏好的人都會感到被排斥。",
      "deeperQuestion": "友善的傳統會成為障礙嗎？"
    }
  },
  {
    "id": "ponder-funny-022",
    "category": "Funny",
    "emoji": "🪑",
    "title": "The Reverse Tip",
    "scenario": "Restaurants tip you for being an exceptionally pleasant customer.\n\nYou enjoy being rewarded for treating people well and begin rehearsing your nicest responses. The exchange makes you question when courtesy becomes a performance for payment.",
    "question": "Would you perform extra friendliness?",
    "twist": "Servers begin preferring wealthy-looking diners who need nothing.",
    "deeperQuestion": "Can rewarding kindness distort who receives care?",
    "zh": {
      "title": "倒過來的小費",
      "scenario": "餐廳會給你小費，獎勵你是一位特別友善的顧客。\n\n你很高興善待別人也能得到回報，於是開始事先練習最有禮貌的回應。這種交換讓你想知道：禮貌從甚麼時候開始，變成了為報酬而做的表演？",
      "question": "你願意表現得格外友善嗎？",
      "twist": "服務生開始偏好看起來很有錢、什麼都不需要的食客。",
      "deeperQuestion": "獎勵善舉是否會扭曲誰會得到照顧？"
    }
  },
  {
    "id": "ponder-funny-023",
    "category": "Funny",
    "emoji": "🍝",
    "title": "The Pet Review",
    "scenario": "Your hamster gives you three stars as a roommate.\n\nYou provided food and a clean cage, but the review focuses on boredom and lack of choice. Those concerns were not included in your idea of responsible care.",
    "question": "Would you contest the rating?",
    "twist": "Its complaints are specific and reasonable.",
    "deeperQuestion": "Can criticism be valid without shared standards?",
    "zh": {
      "title": "寵物評論",
      "scenario": "你的倉鼠把你當作室友，只給了三星評價。你一直提供食物和乾淨的籠子，但牠抱怨的是無聊，以及甚麼都不能自己選。你原本以為照顧周到就足夠，現在卻要面對一套和自己不同的評分標準。",
      "question": "你會對評級提出異議嗎？",
      "twist": "它的投訴具體且合理。",
      "deeperQuestion": "如果沒有共同的標準，批評還能有效嗎？"
    }
  },
  {
    "id": "ponder-funny-024",
    "category": "Funny",
    "emoji": "🎤",
    "title": "The Viral Sneeze",
    "scenario": "Your sneeze becomes a worldwide meme while your art goes unnoticed.\n\nThe meme makes strangers laugh, and you do not dislike the attention. But every interview asks about your sneeze instead of the work you spent years learning.",
    "question": "Would you monetize it?",
    "twist": "Using the fame could fund your serious work.",
    "deeperQuestion": "Must recognition match what you value about yourself?",
    "zh": {
      "title": "爆紅的噴嚏",
      "scenario": "你的噴嚏成了全球網路迷因，而你的藝術作品卻無人問津。這個迷因逗樂了陌生人，你也不討厭這種關注。但每次採訪，人們問的都是你的噴嚏，而不是你花費數年心血創作的作品。",
      "question": "你會將其商業化嗎？",
      "twist": "利用名氣可以資助你嚴肅的工作。",
      "deeperQuestion": "獲得的認可必須與你對自己的價值觀相符嗎？"
    }
  },
  {
    "id": "ponder-funny-025",
    "category": "Funny",
    "emoji": "🐹",
    "title": "Laundry Jury",
    "scenario": "Your laundry votes on which outfit deserves another wear.\n\nThe formal clothes argue that important occasions justify discomfort. The softest clothes say usefulness should be measured by what the wearer experiences rather than how respectable they look.",
    "question": "Would you trust it?",
    "twist": "The least comfortable clothes campaign hardest.",
    "deeperQuestion": "Who gets a voice when interests conflict?",
    "zh": {
      "title": "洗衣陪審團",
      "scenario": "你的衣物會投票決定哪件衣服值得再穿一次。正式的服裝會說，重要的場合可以忍受不適。而最柔軟的衣物則認為，實用性應該以穿著者的體驗來衡量，而不是以外表是否體面來衡量。",
      "question": "你會相信它嗎？",
      "twist": "最不舒服的衣服宣傳力道最大。",
      "deeperQuestion": "當利益發生衝突時，誰有發言權？"
    }
  },
  {
    "id": "ponder-funny-026",
    "category": "Funny",
    "emoji": "😂",
    "title": "The Curse of Brunch",
    "scenario": "You can predict the future, but only during overpriced brunches.\n\nYour friends dismiss the ritual until one prediction proves useful. Soon they ask you to spend your weekends on forecasts instead of simply enjoying their company.",
    "question": "Would you share your predictions?",
    "twist": "People must attend brunch for the predictions to work.",
    "deeperQuestion": "Does useful knowledge justify an inconvenient condition?",
    "zh": {
      "title": "早午餐的詛咒",
      "scenario": "你可以預測未來，但只能在價格昂貴的早午餐上進行。你的朋友一開始對這種做法不屑一顧，直到有一天你的預測真的奏效了。很快，他們就要求你把週末的時間都用來預測未來，而不是和他們一起享受美好時光。",
      "question": "你會分享你的預測嗎？",
      "twist": "人們必須參加早午餐，預測才能生效。",
      "deeperQuestion": "有用的知識能否使不便的條件變得合理？"
    }
  },
  {
    "id": "ponder-funny-027",
    "category": "Funny",
    "emoji": "🐶",
    "title": "The Opinion Goose",
    "scenario": "A goose honks whenever someone states an opinion as a fact.\n\nThe goose does not care about seniority, confidence, or whether someone is telling a harmless story. Bringing it would make accuracy visible while changing the atmosphere of the whole table.",
    "question": "Would you bring it to dinner?",
    "twist": "It honks constantly at your favorite relative.",
    "deeperQuestion": "Should accuracy take priority over a pleasant gathering?",
    "zh": {
      "title": "意見鵝",
      "scenario": "每當有人把觀點當作事實陳述時，鵝就會鳴叫。它不在乎資歷、自信，也不在乎對方說的故事是否無傷大雅。把它帶來，既能讓事實真相顯露出來，又能改變整個餐桌的氣氛。",
      "question": "你會帶它去吃晚餐嗎？",
      "twist": "它不停地對你最喜歡的親戚鳴笛。",
      "deeperQuestion": "準確性是否應該優先於愉快的聚會？"
    }
  },
  {
    "id": "ponder-funny-028",
    "category": "Funny",
    "emoji": "🦆",
    "title": "Forgotten Celebrity",
    "scenario": "Everyone recognizes you but nobody remembers why you are famous.\n\nYou enjoy being treated as interesting without having to prove anything. Inventing a story could stabilize your identity publicly while making every later conversation depend on the invention.",
    "question": "Would you invent an explanation?",
    "twist": "Any story you tell becomes widely believed.",
    "deeperQuestion": "Is a reputation yours to rewrite?",
    "zh": {
      "title": "被遺忘的名人",
      "scenario": "人人都認識你，卻沒人記得你為什麼出名。你享受被人視為有趣的人，卻不需要證明什麼。編造一個故事既能鞏固你的公眾形象，又能讓之後的所有對話都圍繞著這個故事。",
      "question": "你會編造解釋嗎？",
      "twist": "你說的任何故事都會被廣泛相信。",
      "deeperQuestion": "你的名譽能被你改寫嗎？"
    }
  },
  {
    "id": "ponder-funny-029",
    "category": "Funny",
    "emoji": "🧦",
    "title": "The Snack Witness",
    "scenario": "Your snacks can testify about who really ate the last biscuit.\n\nYou expected the truth to settle a silly household argument quickly. Instead, the testimony reveals that the missing biscuit mattered less than the reasons people protected each other.",
    "question": "Would you summon them?",
    "twist": "You discover someone lied to spare another person's embarrassment.",
    "deeperQuestion": "Is settling a tiny dispute worth exposing a kindness?",
    "zh": {
      "title": "零食證人",
      "scenario": "你的零食可以作證，告訴你最後一塊餅乾到底是誰吃的。你原本以為真相能迅速平息一場無聊的家庭爭吵。然而，真相卻揭示出，一塊餅乾的遺失遠沒有人們互相守護的原因重要。",
      "question": "你會召喚他們嗎？",
      "twist": "你發現有人為了避免別人難堪而說謊。",
      "deeperQuestion": "為了解決一件小事而暴露善意值得嗎？"
    }
  },
  {
    "id": "ponder-funny-030",
    "category": "Funny",
    "emoji": "🍕",
    "title": "Two Left Shoes",
    "scenario": "Your shoes become sentient and both insist they belong on the left foot.\n\nThe shoes have developed distinct personalities and both argue sincerely. You could ignore them, but hearing their views makes an ordinary practical decision feel unexpectedly political.",
    "question": "Would you force a compromise?",
    "twist": "Neither experiences discomfort; only you do.",
    "deeperQuestion": "How far should you accommodate harmless beliefs?",
    "zh": {
      "title": "兩隻左鞋",
      "scenario": "你的鞋子彷彿有了生命，它們都堅持自己應該穿在左腳上。這兩隻鞋發展出了各自獨特的個性，並且都真誠地爭論著。你可以選擇無視它們，但傾聽它們的意見卻讓一個普通的實用決定變得出乎意料地具有政治意義。",
      "question": "你會強行達成妥協嗎？",
      "twist": "兩人都沒有感到不舒服；只有你感到不適。",
      "deeperQuestion": "對於無害的信仰，我們應該容忍到什麼程度？"
    }
  },
  {
    "id": "ponder-funny-031",
    "category": "Funny",
    "emoji": "🚗",
    "title": "Sound-Effect Navigation",
    "scenario": "You are navigating for a friend, but a spell lets you make only sound effects, not words or pointing gestures. Ahead are a roundabout, a fuel stop, and a road you are unsure about. Before setting off, you get one minute to agree on signals.",
    "question": "Invent four sounds, including one that means “I do not know either.”",
    "twist": "Your uncertainty sound is mistaken for “turn now,” leading you into a lively street market.",
    "deeperQuestion": "Should a communication system prioritize preventing mistakes or making them easy to notice and repair?",
    "zh": {
      "title": "只准用音效的導航",
      "scenario": "你替朋友導航，但車上的魔法令你只能發出音效，不能說話或指方向。前方有迴旋處、加油站和一條你不太肯定的小路。你們出發前有一分鐘，約定幾個聲音的意思。",
      "question": "你會設計哪四個音效？一定要有一個表示「我也不知道」。",
      "twist": "朋友把你表示「不確定」的聲音理解成「立即轉彎」，你們來到一場熱鬧的街頭市集。",
      "deeperQuestion": "一個溝通系統應先避免錯誤，還是讓錯誤容易被發現和修正？"
    }
  },
  {
    "id": "ponder-funny-032",
    "category": "Funny",
    "emoji": "🪿",
    "title": "The Infinite Meeting",
    "scenario": "You can end any meeting by telling an embarrassing personal story.\n\nYou could save everyone an hour, but the story belongs partly to somebody else. Efficiency suddenly depends on how much personal life you are willing to make public.",
    "question": "Would you use this power?",
    "twist": "Colleagues deliberately schedule meetings to hear more.",
    "deeperQuestion": "Does helping once create an unfair expectation?",
    "zh": {
      "title": "永無止境的會議",
      "scenario": "你可以透過講述一個令人尷尬的個人故事來結束任何會議。這或許能為大家省下一個小時，但故事的一部分也屬於其他人。效率突然取決於你願意公開多少個人生活。",
      "question": "你會使用這種能力嗎？",
      "twist": "同事特意安排會議，以便了解更多資訊。",
      "deeperQuestion": "幫助一次是否會造成不公平的期望？"
    }
  },
  {
    "id": "ponder-funny-033",
    "category": "Funny",
    "emoji": "🧀",
    "title": "The Salad Alibi",
    "scenario": "A salad erases guilt about anything you eat afterward.\n\nYou know guilt is not a nutritional measurement, yet the offer is tempting. Feeling free to enjoy food might help, unless it replaces paying attention to your actual needs.",
    "question": "Would you order it daily?",
    "twist": "It affects guilt, not consequences.",
    "deeperQuestion": "Is feeling better useful without changing behavior?",
    "zh": {
      "title": "沙拉的藉口",
      "scenario": "一份沙拉能讓你消除之後吃任何東西的罪惡感。你知道罪惡感並非衡量營養攝取的標準，但這種誘惑依然難以抗拒。盡情享受美食或許有益，除非它取代了對自身實際需求的關注。",
      "question": "你會每天訂購嗎？",
      "twist": "沙拉消除的是內疚感，並不會消除行為造成的後果。",
      "deeperQuestion": "感覺好轉而不改變行為有用嗎？"
    }
  },
  {
    "id": "ponder-funny-034",
    "category": "Funny",
    "emoji": "🪑",
    "title": "The Sarcastic GPS",
    "scenario": "Your navigation system gets you home while insulting your decisions.\n\nThe insults are tailored to your insecurities rather than your driving. Arriving safely matters, but repeated exposure may change how you speak to yourself afterward.",
    "question": "Would you keep using it?",
    "twist": "It is safer than every polite alternative.",
    "deeperQuestion": "How much disrespect is competence worth?",
    "zh": {
      "title": "諷刺的GPS",
      "scenario": "你的導航系統把你帶回家，同時卻在嘲諷你的駕駛決策。這些嘲諷針對的是你的不安全感，而不是你的駕駛技術。安全到達固然重要，但反覆遭遇這些嘲諷可能會改變你之後對自己說話的方式。",
      "question": "你會繼續使用它嗎？",
      "twist": "它比任何禮貌的替代方案都更安全。",
      "deeperQuestion": "對方能力出色，值得你忍受多少不尊重？"
    }
  },
  {
    "id": "ponder-funny-035",
    "category": "Funny",
    "emoji": "🍝",
    "title": "The Cheese Heist",
    "scenario": "A friend steals an absurdly expensive cheese to impress your dinner guests.\n\nYou wanted a memorable evening, not evidence hidden under crackers. Your friend's gift puts you in the position of choosing between loyalty, honesty, and an extremely awkward introduction.",
    "question": "Would you serve it?",
    "twist": "The shop owner is one of the guests.",
    "deeperQuestion": "Does accepting a benefit make you part of wrongdoing?",
    "zh": {
      "title": "乳酪大劫案",
      "scenario": "朋友為了在晚宴上給客人留下深刻印象，偷了一塊極其昂貴的起司。你想要的是一個難忘的夜晚，而不是藏在餅乾底下的證據。朋友的這份禮物讓你陷入兩難：忠誠、誠實，以及一次極度尷尬的自我介紹。",
      "question": "你會把它端上桌嗎？",
      "twist": "店主是客人之一。",
      "deeperQuestion": "接受利益是否構成不法行為？"
    }
  },
  {
    "id": "ponder-funny-036",
    "category": "Funny",
    "emoji": "🎤",
    "title": "The Official Nickname",
    "scenario": "Everyone must legally use the nickname their oldest friend selects.\n\nYour friend remembers a version of you that you have outgrown. Giving them naming power would honor your history while letting that history define your public future.",
    "question": "Would you trust your friend?",
    "twist": "You get equal power over their name.",
    "deeperQuestion": "Does mutual vulnerability guarantee fairness?",
    "zh": {
      "title": "官方暱稱",
      "scenario": "法律規定，每個人都要使用認識最久的朋友替自己選的暱稱。對方記得的你，也許早已不是現在的你。讓朋友命名，既能紀念共同的過去，也可能讓你此後一直被一個舊形象代表。",
      "question": "你會信任你的朋友嗎？",
      "twist": "你對他們的名字擁有同等的權力。",
      "deeperQuestion": "相互脆弱性能否保證公平性？"
    }
  },
  {
    "id": "ponder-funny-037",
    "category": "Funny",
    "emoji": "🐹",
    "title": "The Psychic Barber",
    "scenario": "A barber knows your perfect haircut but refuses to explain it.\n\nYou have regretted several cautious haircuts and want to trust expertise once. But surrendering the decision makes it harder to know whether the result expresses you or the barber's vision.",
    "question": "Would you surrender control?",
    "twist": "The cut suits your future personality, not your current one.",
    "deeperQuestion": "Should advice serve who you are or might become?",
    "zh": {
      "title": "通靈理髮師",
      "scenario": "理髮師知道最適合你的髮型，卻拒絕解釋。你後悔之前幾次謹慎的理髮，這次想相信理髮師的專業技術。但放棄選擇權反而讓你更難分辨最終的髮型究竟是體現了你的個人風格，還是理髮師的構想。",
      "question": "你願意放棄控制權嗎？",
      "twist": "這個髮型適合你未來的個性，而不是你現在的個性。",
      "deeperQuestion": "建議應該服務你現在的樣子還是你可能成為的樣子？"
    }
  },
  {
    "id": "ponder-funny-038",
    "category": "Funny",
    "emoji": "😂",
    "title": "The Meme Inheritance",
    "scenario": "You inherit a fortune conditional on posting your uncle's terrible memes weekly.\n\nThe posts would take almost no time and solve practical money worries. Over years, however, your public voice would become associated with jokes you never chose yourself.",
    "question": "Would you accept?",
    "twist": "Your followers believe you genuinely find them funny.",
    "deeperQuestion": "How much authenticity would you trade for security?",
    "zh": {
      "title": "迷因的繼承",
      "scenario": "你繼承了一筆巨額遺產，條件是每週都要發布你叔叔那些糟糕的表情包。發布這些表情包幾乎不花時間，還能解決你的實際經濟問題。然而，多年後，你的公眾形象將與那些你從未親自挑選過的笑話聯繫在一起。",
      "question": "你願意接受嗎？",
      "twist": "你的粉絲認為你真心覺得他們很有趣。",
      "deeperQuestion": "你願意用多少真實性來換取安全？"
    }
  },
  {
    "id": "ponder-funny-039",
    "category": "Funny",
    "emoji": "🐶",
    "title": "The Angry Printer",
    "scenario": "Your printer refuses documents written in a passive-aggressive tone.\n\nYou wrote the document carefully because a real problem needs to be addressed. The printer's softer version sounds agreeable but makes it unclear what must actually change.",
    "question": "Would you follow its edits?",
    "twist": "Its definition of politeness favors avoiding disagreement.",
    "deeperQuestion": "Can enforcing kindness silence necessary criticism?",
    "zh": {
      "title": "憤怒的印表機",
      "scenario": "你的印表機拒絕印出帶有暗諷或挖苦語氣的文件。你寫的內容確實指出了一個需要處理的問題，但經它修改後，文字變得很客氣，問題也模糊了。你要決定，這份「禮貌」是否值得保留。",
      "question": "你會接受它的修改嗎？",
      "twist": "它對禮貌的定義傾向於避免分歧。",
      "deeperQuestion": "強制推行善舉能否壓制必要的批評？"
    }
  },
  {
    "id": "ponder-funny-040",
    "category": "Funny",
    "emoji": "🦆",
    "title": "The Bathroom Throne",
    "scenario": "You become royalty whenever you enter a bathroom.\n\nThe arrangement offers influence without the dignity usually associated with authority. You must decide whether a useful decision becomes less legitimate because its setting is ridiculous.",
    "question": "Would you make royal decisions there?",
    "twist": "Your subjects only obey while the door stays open.",
    "deeperQuestion": "Is power meaningful without dignity?",
    "zh": {
      "title": "浴室寶座",
      "scenario": "你一進洗手間就彷彿成了皇室成員。這種安排賦予你影響力，卻不具備通常與權威相伴的尊嚴。你必須判斷，原本有用的決定是否會因為情境荒謬而失去合法性。",
      "question": "你會在那裡做出皇室決定嗎？",
      "twist": "你的臣民只有在大門敞開時才會服從。",
      "deeperQuestion": "沒有尊嚴，權力還有意義嗎？"
    }
  },
  {
    "id": "ponder-funny-041",
    "category": "Funny",
    "emoji": "📣",
    "title": "The Invitation Telephone Game",
    "scenario": "A dinner invitation must be passed verbally from person to person, with nobody allowed to repeat the exact wording. By the sixth person it has become a formal awards ceremony in pajamas. The venue and food are booked, but everyone now expects something different.",
    "question": "Write one announcement that rescues the gathering while keeping its funniest feature.",
    "twist": "The last guests assume the absurd combination was your carefully planned theme all along.",
    "deeperQuestion": "When can a mistake become a shared creation, and who decides whether the original intention still matters?",
    "zh": {
      "title": "一句話越傳越離譜",
      "scenario": "朋友要辦一場普通聚餐，但每個人只能把邀請口頭傳給下一位，不能重複原句。傳到第六人時，聚餐已變成「穿睡衣參加的正式頒獎典禮」。場地和食物都訂好了，大家各有期待。",
      "question": "你會怎樣用一則通知，把這場聚會救回來，又保留最好笑的部分？",
      "twist": "最後到場的人反而以為，這種荒謬正是你精心設計的主題。",
      "deeperQuestion": "一件意外甚麼時候可以變成共同創作？誰有資格決定原意還重不重要？"
    }
  },
  {
    "id": "ponder-funny-042",
    "category": "Funny",
    "emoji": "🍕",
    "title": "The Free Buffet",
    "scenario": "A buffet is free if you truthfully rate every dish aloud.\n\nYou need a cheap meal and genuinely appreciate the work involved. Describing every disappointment aloud could help the chef improve while turning your lunch into a public assessment of their effort.",
    "question": "Would you eat there?",
    "twist": "The chef stands beside you the whole time.",
    "deeperQuestion": "Does honesty become cruelty without tact?",
    "zh": {
      "title": "免費自助餐",
      "scenario": "如果你如實評價每道菜，自助餐就是免費的。你需要一頓價格實惠的餐食，並且真心欣賞廚師們的辛勤付出。把每道不盡人意的地方都說出來，既能幫助廚師改進，又能讓你把午餐變成對他們努力的公開評價。",
      "question": "你會去那裡吃飯嗎？",
      "twist": "廚師全程站在你旁邊。",
      "deeperQuestion": "誠實若缺乏技巧，是否會變成殘忍？"
    }
  },
  {
    "id": "ponder-funny-043",
    "category": "Funny",
    "emoji": "🥔",
    "title": "The Birthday Audit",
    "scenario": "Friends audit whether you actually enjoyed each birthday gift.\n\nThe audit promises to prevent future wasted money and disappointed expectations. But knowing your face will be evaluated makes receiving even a thoughtful gift feel like an examination.",
    "question": "Would you participate?",
    "twist": "You get to audit their reactions too.",
    "deeperQuestion": "Can measuring gratitude undermine generosity?",
    "zh": {
      "title": "生日審計",
      "scenario": "朋友會評論你是否真的喜歡每一份生日禮物。這種評論旨在避免將來浪費金錢和失望。但想到自己的表情會被評判，即使是收到精心準備的禮物，也感覺像是在接受考試。",
      "question": "你願意參加嗎？",
      "twist": "你也可以檢視他們的反應。",
      "deeperQuestion": "衡量感恩之心會削弱慷慨嗎？"
    }
  },
  {
    "id": "ponder-funny-044",
    "category": "Funny",
    "emoji": "🪿",
    "title": "The Couch Kingdom",
    "scenario": "Your couch declares independence and charges a sitting tax.\n\nThe couch offers citizenship to anyone who helped maintain it, including the person who once removed a stain. You begin questioning whether paying for something explains every claim to it.",
    "question": "Would you negotiate?",
    "twist": "Its residents include everyone who ever lost a coin there.",
    "deeperQuestion": "Can accidental contribution create membership rights?",
    "zh": {
      "title": "沙發王國",
      "scenario": "你的沙發宣布獨立，並開始收取「坐稅」。沙發承諾，任何幫助維護它的人，包括曾經幫它擦掉污漬的人，都可以獲得公民身份。你開始質疑，為某樣東西付費是否就能解釋它的一切所有權主張。",
      "question": "你會談判嗎？",
      "twist": "它的居民包括所有在那裡丟過硬幣的人。",
      "deeperQuestion": "意外捐款能否產生會員資格？"
    }
  },
  {
    "id": "ponder-funny-045",
    "category": "Funny",
    "emoji": "🧀",
    "title": "The Fitness Goblin",
    "scenario": "A goblin counts your steps and cheers when you avoid exercise.\n\nYou expected criticism to motivate you and are surprised when acceptance works better. The goblin's enthusiasm sounds irresponsible, yet the actual results challenge your assumptions about discipline.",
    "question": "Would you keep it?",
    "twist": "Its acceptance makes you feel less ashamed and more active.",
    "deeperQuestion": "Can imperfect encouragement produce better outcomes?",
    "zh": {
      "title": "健身妖精",
      "scenario": "一隻小妖精會數著你的步數，並在你逃避運動時為你歡呼。你原本以為批評會激勵你，卻驚訝地發現接受反而更有效。小妖精的熱情聽起來似乎不負責任，但實際結果卻挑戰了你對自律的固有認知。",
      "question": "你會保留它嗎？",
      "twist": "小妖精對你的接納，反而令你不再那麼羞愧，也更願意活動。",
      "deeperQuestion": "不完美的鼓勵能否產生更好的結果？"
    }
  },
  {
    "id": "ponder-funny-046",
    "category": "Funny",
    "emoji": "🪑",
    "title": "The Wrong Award",
    "scenario": "You win an award for being mysterious because nobody heard your introduction.\n\nYou could explain the misunderstanding, but everyone now finds your ordinary silence compelling. Correcting them might feel honest while revealing how much they contributed to your supposed mystery.",
    "question": "Would you correct the judges?",
    "twist": "Being quiet was completely accidental.",
    "deeperQuestion": "Can an unintentional trait deserve recognition?",
    "zh": {
      "title": "錯誤的獎項",
      "scenario": "你因為神秘而獲獎，因為沒人聽到你的自我介紹。你可以解釋這個誤會，但現在每個人都覺得你平常的沉默很有魅力。糾正他們或許會讓你感覺坦誠，同時也暴露了他們對你所謂的神秘感貢獻有多大。",
      "question": "你會向評審說明他們弄錯了嗎？",
      "twist": "保持沉默完全是偶然的。",
      "deeperQuestion": "非故意的特徵是否值得認可？"
    }
  },
  {
    "id": "ponder-funny-047",
    "category": "Funny",
    "emoji": "🍝",
    "title": "Professional Third Wheel",
    "scenario": "Couples pay you to make their dates less awkward.\n\nYou are good at making nervous people feel included and need the income. Your presence may help a date succeed without helping the two people actually understand each other.",
    "question": "Would you take the work?",
    "twist": "Some couples connect more with you than each other.",
    "deeperQuestion": "When does facilitating connection become replacing it?",
    "zh": {
      "title": "職業電燈膽",
      "scenario": "情侶付錢請你幫忙緩解約會的尷尬。你擅長讓緊張的人感到自在，你也需要這份收入。你的出現或許能讓約會成功，但卻無法真正幫助兩個人了解彼此。",
      "question": "你願意接受這份工作嗎？",
      "twist": "有些夫妻與你的連結比與彼此的連結更緊密。",
      "deeperQuestion": "促進聯繫何時會變成取代聯繫？"
    }
  },
  {
    "id": "ponder-funny-048",
    "category": "Funny",
    "emoji": "🎤",
    "title": "The Karaoke Bargain",
    "scenario": "You sing perfectly only when nobody believes you practiced.\n\nYou practiced for weeks but must appear casually surprised by your own skill. The applause feels good while concealing the work you wish people would value.",
    "question": "Would you pretend to be effortless?",
    "twist": "Your hardworking friend gets less applause.",
    "deeperQuestion": "Why do people value talent differently from effort?",
    "zh": {
      "title": "卡拉OK交易",
      "scenario": "只有當沒人相信你練習過的時候，你才能唱得完美。你練習了好幾個星期，卻必須裝出一副對自己歌聲感到驚訝的樣子。掌聲讓你感覺很好，同時也掩蓋了你希望別人認可的努力。",
      "question": "你會假裝毫不費力嗎？",
      "twist": "你勤奮的朋友得到的掌聲較少。",
      "deeperQuestion": "為什麼人們對天賦和努力的評價不同？"
    }
  },
  {
    "id": "ponder-funny-049",
    "category": "Funny",
    "emoji": "🐹",
    "title": "The Cereal Debate",
    "scenario": "Your town must classify cereal as soup or lose internet access.\n\nThe debate has become a way for neighbors to express loyalty to their side. Restoring internet may require accepting that no practical benefit will persuade everyone to surrender a symbolic victory.",
    "question": "Which side would you defend?",
    "twist": "A compromise would restore internet but satisfy nobody.",
    "deeperQuestion": "When does a definition matter more than its usefulness?",
    "zh": {
      "title": "早餐麥片算不算湯？",
      "scenario": "你的小鎮必須就「加了牛奶的早餐麥片算不算湯」達成決定，否則全城會失去網絡。討論很快變成陣營之爭，大家開始把立場當成身分。即使恢復網絡對所有人都有好處，也未必有人願意先讓步。",
      "question": "你會支持哪一方？",
      "twist": "折衷方案可以恢復網絡，但無法讓任何人滿意。",
      "deeperQuestion": "定義何時比其實用更重要？"
    }
  },
  {
    "id": "ponder-funny-050",
    "category": "Funny",
    "emoji": "😂",
    "title": "The Worst Product Launch",
    "scenario": "You must pitch an apparently useless invention: a clock showing yesterday’s time, an umbrella that becomes transparent when wet, or a compass pointing to the nearest dessert. You have thirty seconds to find a real use for one product without making any false claims.",
    "question": "Which product, customer, and opening sentence would you choose?",
    "twist": "Someone in the audience says it solves a problem they have had for years.",
    "deeperQuestion": "Is uselessness a property of an object, or a sign that we have not met the person who needs it?",
    "zh": {
      "title": "最差產品發佈會",
      "scenario": "你要推銷一件看似完全沒用的產品：只能量出昨天時間的鐘、遇水就透明的雨傘，或每次都指向最近甜品的指南針。你有三十秒，必須找出一個真實的使用情境，不能說謊。",
      "question": "你選哪件產品？會賣給誰，用哪一句介紹打動對方？",
      "twist": "台下有位觀眾說，這剛好解決了他困擾多年的問題。",
      "deeperQuestion": "「沒有用」是物品本身的特質，還是我們還沒遇到需要它的人？"
    }
  },
  {
    "id": "ponder-funny-051",
    "category": "Funny",
    "emoji": "🐶",
    "title": "The Invisible Intern",
    "scenario": "An invisible intern does everything except receive credit.\n\nYou originally accepted the help because the workload was impossible. Now your reputation depends on work the actual contributor cannot visibly claim, and silence begins to feel less accidental.",
    "question": "Would you publicly acknowledge them?",
    "twist": "Your boss thinks you are inventing excuses.",
    "deeperQuestion": "What proof should someone need to receive recognition?",
    "zh": {
      "title": "隱形實習生",
      "scenario": "一個隱形的實習生做了所有事，卻得不到任何署名。你最初接受他的幫助是因為工作量太大。現在，你的聲譽取決於真正做出貢獻的人無法公開署名的工作，而沉默也開始顯得不再那麼偶然。",
      "question": "你會公開承認他們嗎？",
      "twist": "你的老闆認為你在編造藉口。",
      "deeperQuestion": "認可需要提供哪些證明？"
    }
  },
  {
    "id": "ponder-funny-052",
    "category": "Funny",
    "emoji": "🦆",
    "title": "The Dinner Narrator",
    "scenario": "A narrator announces the nutritional and emotional value of every dinner bite.\n\nThe commentary correctly identifies comfort, celebration, and simple hunger in the same meal. Being understood is pleasant until observation makes a relaxed dinner feel impossible to experience without analysis.",
    "question": "Would you mute it?",
    "twist": "It knows when you are eating to celebrate.",
    "deeperQuestion": "Does explanation always improve an experience?",
    "zh": {
      "title": "晚餐敘述者",
      "scenario": "旁白解說每一口晚餐的營養價值和情感價值。解說準確地指出了同一餐中蘊含的慰藉、慶祝和簡單的飢餓。被理解固然令人愉悅，但過度的觀察卻讓人覺得，如果不加以分析，就無法享受輕鬆的晚餐。",
      "question": "你會把它靜音嗎？",
      "twist": "它知道你什麼時候在吃東西慶祝。",
      "deeperQuestion": "解釋總是能改善體驗嗎？"
    }
  },
  {
    "id": "ponder-funny-053",
    "category": "Funny",
    "emoji": "🧦",
    "title": "The Lucky Underpants",
    "scenario": "Your lucky underwear demonstrably helps your team win.\n\nYou liked having a private good-luck ritual and never intended a team obligation. Their requests turn a personal habit into something others believe they have earned the right to control.",
    "question": "Would you disclose the secret?",
    "twist": "Teammates demand you wear it every game.",
    "deeperQuestion": "Does shared success entitle others to personal sacrifice?",
    "zh": {
      "title": "幸運內褲",
      "scenario": "你的幸運內褲確實能幫助你的球隊贏得比賽。你只是喜歡這種私人的祈福儀式，從未想過要把它變成團隊的義務。但他們的要求卻把你的個人習慣變成了別人認為他們有權控制的東西。",
      "question": "你會透露這個秘密嗎？",
      "twist": "隊友要求你每場比賽都穿它。",
      "deeperQuestion": "為了大家共同的成功，其他人有權要求你作出私人犧牲嗎？"
    }
  },
  {
    "id": "ponder-funny-054",
    "category": "Funny",
    "emoji": "🍕",
    "title": "The Stubborn Emoji",
    "scenario": "Your phone replaces every angry message with a smiling potato.\n\nThe potatoes often defuse tension before you say something hurtful. They also prevent you from expressing legitimate anger when someone needs to understand that a boundary was crossed.",
    "question": "Would you disable it?",
    "twist": "Several conflicts disappear because nobody understands you.",
    "deeperQuestion": "Is peace achieved through misunderstanding worthwhile?",
    "zh": {
      "title": "固執的表情符號",
      "scenario": "你的手機會把每一個憤怒的訊息都換成一個笑臉馬鈴薯。這些馬鈴薯常常在你說出傷人的話之前就化解了緊張氣氛。它們也會阻止你表達合理的憤怒，尤其是當有人需要明白自己越界的時候。",
      "question": "你會禁用它嗎？",
      "twist": "因為沒有人理解你，所以很多衝突都消失了。",
      "deeperQuestion": "透過誤解實現的和平值得嗎？"
    }
  },
  {
    "id": "ponder-funny-055",
    "category": "Funny",
    "emoji": "🥔",
    "title": "The Complaining Cake",
    "scenario": "A cake objects to being cut unevenly.\n\nYou want a fair meal, but exact measurement ignores appetite, dietary needs, and who already ate. The cake's demand reveals that equal treatment can look neat without feeling reasonable.",
    "question": "Would you divide it exactly?",
    "twist": "One guest is much hungrier than the others.",
    "deeperQuestion": "Does fairness mean equal portions or meeting needs?",
    "zh": {
      "title": "抱怨的蛋糕",
      "scenario": "一塊蛋糕抗議切得不均勻。你想要公平的餐食，但精確的計量忽略了食慾、飲食需求以及誰已經吃過。蛋糕的要求表明，平等對待看起來可能很完美，但實際上卻不合理。",
      "question": "你會把蛋糕分成完全一樣大的份量嗎？",
      "twist": "其中一位客人比其他客人餓得多。",
      "deeperQuestion": "公平是指均等分配還是滿足需求？"
    }
  },
  {
    "id": "ponder-funny-056",
    "category": "Funny",
    "emoji": "🪿",
    "title": "The Dramatic Exit",
    "scenario": "You can teleport anywhere only after delivering a convincing dramatic farewell.\n\nThe power would remove commuting and let you visit people easily. But the repeated performances make friends less able to recognize the rare moments when leaving genuinely hurts.",
    "question": "Would you use it for errands?",
    "twist": "Friends stop believing your sincere goodbyes.",
    "deeperQuestion": "Can repeated performance weaken genuine expression?",
    "zh": {
      "title": "戲劇性的退場",
      "scenario": "只要你以一場感人至深的告別來表達心意，就能瞬間移動到任何地方。這種能力可以讓你免去通勤之苦，輕鬆拜訪親朋好友。但反覆的告別卻讓朋友們難以察覺真正離別時那份傷感。",
      "question": "你會用它來跑腿辦事嗎？",
      "twist": "朋友們開始不再相信你認真的道別。",
      "deeperQuestion": "重複表演是否會削弱真實表達？"
    }
  },
  {
    "id": "ponder-funny-057",
    "category": "Funny",
    "emoji": "🧀",
    "title": "The Sofa Interview",
    "scenario": "Before buying furniture, you must convince it you are a suitable owner.\n\nYou expected to judge comfort, price, and appearance rather than be judged yourself. The interview forces you to consider whether an ideal match needs agreement from both sides.",
    "question": "Would you accept the process?",
    "twist": "The most comfortable sofa rejects your lifestyle.",
    "deeperQuestion": "Should something built for you get to refuse you?",
    "zh": {
      "title": "沙發訪談",
      "scenario": "在購買家具之前，你必須先讓對方相信你是個合適的買家。你希望自己能夠評判家具的舒適度、價格和外觀，而不是被別人評判。面試過程迫使你思考，理想的家具是否需要雙方的認可。",
      "question": "你會接受這個流程嗎？",
      "twist": "最舒適的沙發拒絕你的生活方式。",
      "deeperQuestion": "為你建造的東西有權拒絕你嗎？"
    }
  },
  {
    "id": "ponder-funny-058",
    "category": "Funny",
    "emoji": "🪑",
    "title": "Trade a Minor Nuisance",
    "scenario": "You and a friend can exchange one harmless nuisance for twenty-four hours. You always misplace your glasses; they hiccup when nervous. Both think their own problem is harder to live with, and before swapping, each may describe only its advantages.",
    "question": "How would you advertise your nuisance as a feature, and what would you try in exchange?",
    "twist": "By the end, both of you miss the coping tricks you already knew for your original problem.",
    "deeperQuestion": "How much difficulty belongs to a problem itself, and how much comes from being unfamiliar with it?",
    "zh": {
      "title": "交換一天的小麻煩",
      "scenario": "你和朋友可以交換一個無傷大雅的小麻煩，維持二十四小時。例如你總是找不到眼鏡，對方一緊張就打嗝；你們都覺得自己的問題比較難忍受。交換前，每人只能介紹優點。",
      "question": "你會把自己的小麻煩包裝成甚麼「特色」？你最想試換哪一種？",
      "twist": "換回來之後，你們都突然很想念自己原本熟悉的應付方法。",
      "deeperQuestion": "一個問題令人難受，有多少來自它本身，又有多少來自我們不熟悉它？"
    }
  },
  {
    "id": "ponder-funny-059",
    "category": "Funny",
    "emoji": "🍝",
    "title": "The Accidental Guru",
    "scenario": "A typo in your text becomes a celebrated philosophical quote.\n\nYou could take credit and use the attention to share ideas you actually believe. Admitting the accident would change the story of authorship without necessarily changing what readers gained.",
    "question": "Would you admit the mistake?",
    "twist": "It has already helped thousands of people.",
    "deeperQuestion": "Does an accidental origin reduce an idea's value?",
    "zh": {
      "title": "意外的大師",
      "scenario": "你文章中的一個拼字錯誤竟然成了一句名言。你可以藉此機會邀功，並利用這股熱度來分享你真正相信的觀點。承認這個意外會改變作者身分的歸屬，但未必會影響讀者從中獲得的收穫。",
      "question": "你願意承認錯誤嗎？",
      "twist": "它已經幫助了成千上萬的人。",
      "deeperQuestion": "偶然的起源是否會降低一個想法的價值？"
    }
  },
  {
    "id": "ponder-funny-060",
    "category": "Funny",
    "emoji": "🎤",
    "title": "The One-Star Planet",
    "scenario": "Aliens give Earth one star because your welcome speech was awkward.\n\nEarth's other welcoming committees blame you for a judgment based on one conversation. A better review could correct the imbalance, but writing your own praise feels suspiciously convenient.",
    "question": "Would you write a better review?",
    "twist": "Their rating determines whether tourists will visit.",
    "deeperQuestion": "Should one encounter represent an entire group?",
    "zh": {
      "title": "一星行星",
      "scenario": "外星遊客因為你的歡迎致辭太尷尬，只給地球一星評價。地球其他地方的接待團隊認為，一次對話不應代表整個星球。你可以寫一篇更正面的介紹，但由你親自替自己挽回評分，又難免令人懷疑是否公允。",
      "question": "你會寫一篇更好的評論嗎？",
      "twist": "他們的評分決定了遊客是否會來參觀。",
      "deeperQuestion": "一次遭遇是否能代表整個群體？"
    }
  },
  {
    "id": "ponder-funny-061",
    "category": "Funny",
    "emoji": "🐹",
    "title": "The Museum of Cringe",
    "scenario": "A museum offers to display your most embarrassing childhood video.\n\nYou still feel embarrassed by the video and had hoped nobody remembered it. Letting it help others would require accepting that a private mistake becomes a permanent public lesson.",
    "question": "Would you agree?",
    "twist": "The exhibit helps children feel less alone.",
    "deeperQuestion": "Can public embarrassment become a generous gift?",
    "zh": {
      "title": "尷尬博物館",
      "scenario": "一家博物館提出要展出你童年時期最尷尬的影片。你至今仍對這段影片感到羞愧，並希望沒人記得它。但要讓它幫助到其他人，就代表你要接受這樣一個事實：一個私人的錯誤會變成一個永久的公共教訓。",
      "question": "你同意嗎？",
      "twist": "展覽有助於讓孩子們感到不那麼孤獨。",
      "deeperQuestion": "公開的尷尬能否成為一份慷慨的禮物？"
    }
  },
  {
    "id": "ponder-funny-062",
    "category": "Funny",
    "emoji": "😂",
    "title": "The Invisible Trophy",
    "scenario": "You win an invisible trophy that only losers can see.\n\nThe trophy is intended as a celebration, yet displaying it creates an involuntary confession for anyone who recognizes it. Your achievement would reveal something you have no right to announce for them.",
    "question": "Would you display it?",
    "twist": "Visitors must reveal whether they have ever lost.",
    "deeperQuestion": "Is recognition worth exposing someone else's vulnerability?",
    "zh": {
      "title": "無形的獎杯",
      "scenario": "你贏得一座隱形獎盃，只有曾經輸過的人才看得見。展示它原本是為了慶祝自己，卻會讓每個認出獎盃的人，不經意暴露一段失敗經歷。你的榮譽，可能同時揭開別人未曾想分享的事。",
      "question": "你會展示它嗎？",
      "twist": "訪客必須透露他們是否曾經輸過。",
      "deeperQuestion": "為了認可而暴露他人的弱點值得嗎？"
    }
  },
  {
    "id": "ponder-funny-063",
    "category": "Funny",
    "emoji": "🐶",
    "title": "The Sandwich Contract",
    "scenario": "Your friend legally defines sandwiches to win a lunch argument.\n\nThe contract was meant as a joke until both sides started treating it seriously. Following it now tests whether winning matters more than applying the same reasoning consistently.",
    "question": "Would you honor the document?",
    "twist": "The definition accidentally excludes their favorite sandwich.",
    "deeperQuestion": "Should consistent rules survive inconvenient consequences?",
    "zh": {
      "title": "三明治合約",
      "scenario": "你的朋友為了在午餐爭論中勝出，竟然對三明治做了法律定義。這份協議原本只是個玩笑，但雙方都開始認真看待。現在，它考驗的是，究竟是勝負更重要，還是始終如一地運用相同的推理更重要。",
      "question": "你會尊重這份文件嗎？",
      "twist": "這個定義意外地排除了他們最喜歡的三明治。",
      "deeperQuestion": "一致的規則是否應該經得起不便的後果？"
    }
  },
  {
    "id": "ponder-funny-064",
    "category": "Funny",
    "emoji": "🦆",
    "title": "The Smug Kettle",
    "scenario": "A kettle refuses to boil until you admit it was right yesterday.\n\nAdmitting one small point would make breakfast possible and cost almost nothing. You worry less about the statement itself than the habit of negotiating with an appliance that controls a daily need.",
    "question": "Would you concede?",
    "twist": "It was right about the weather but wrong about your life.",
    "deeperQuestion": "Can a small concession encourage larger demands?",
    "zh": {
      "title": "自鳴得意的壺",
      "scenario": "除非你承認它昨天是對的，否則水壺就不會燒水。承認這一點小事就能讓你吃上早餐，而且幾乎不用花錢。你擔心的與其說是承認這一點本身，不如說是習慣性地與一個控制你日常需求的電器討價還價。",
      "question": "你願意讓步嗎？",
      "twist": "它對天氣的預測是對的，但對你的人生的預測是錯的。",
      "deeperQuestion": "小小的讓步能否刺激更大的需求？"
    }
  },
  {
    "id": "ponder-funny-065",
    "category": "Funny",
    "emoji": "🧦",
    "title": "The Birthday Refund",
    "scenario": "A shop refunds gifts if the recipient laughs less than expected.\n\nYou know your friend is delighted because they use the gift constantly. The refund rule rewards visible reactions rather than the quieter evidence of genuine appreciation.",
    "question": "Would you request a refund?",
    "twist": "Your friend loved the gift quietly.",
    "deeperQuestion": "Can happiness be evaluated from outward reactions?",
    "zh": {
      "title": "生日退款",
      "scenario": "商店承諾，如果收禮者笑得不夠開心，就退還禮物的款項。你知道朋友喜歡禮物，因為對方經常使用，只是不太會表露情緒。這條退款規則容易核對，卻未必能分辨安靜的喜愛和真正的失望。",
      "question": "你是否要求退款？",
      "twist": "你的朋友默默地喜歡這份禮物。",
      "deeperQuestion": "幸福感可以從外在反應來評價嗎？"
    }
  },
  {
    "id": "ponder-funny-066",
    "category": "Funny",
    "emoji": "🍕",
    "title": "The Party Spreadsheet",
    "scenario": "Your friend schedules every spontaneous moment of a party.\n\nYou enjoy the evening until you discover that even the casual conversation starters were assigned. Learning the plan changes your interpretation of moments that previously felt completely natural.",
    "question": "Would you follow the plan?",
    "twist": "The planned surprises turn out wonderfully.",
    "deeperQuestion": "Must spontaneity be unplanned to feel genuine?",
    "zh": {
      "title": "派對流程表",
      "scenario": "你的朋友精心安排了派對上每一個即興環節。你原本享受著夜晚，直到發現就連隨意的開場白都是事先安排好的。得知真相後，你對那些原本感覺自然而然的瞬間的理解也隨之改變。",
      "question": "你會執行這個計劃嗎？",
      "twist": "計畫好的驚喜效果非常好。",
      "deeperQuestion": "真誠的自發性必須是未經計劃的嗎？"
    }
  },
  {
    "id": "ponder-funny-067",
    "category": "Funny",
    "emoji": "🥔",
    "title": "The Celebrity Pigeon",
    "scenario": "A pigeon uses your balcony as its fan-meeting venue.\n\nYou maintain the balcony, clean up afterward, and manage the crowds. The pigeon provides the attraction, so both of you can plausibly claim that the event would not exist without your work.",
    "question": "Would you charge admission?",
    "twist": "The pigeon considers your hospitality part of its brand.",
    "deeperQuestion": "Who owns value created in a shared space?",
    "zh": {
      "title": "名人鴿子",
      "scenario": "一隻鴿子把你的陽台當成了它的粉絲見面會場地。你負責維護陽台、事後清理、維持秩序。鴿子是吸引人的地方，所以你們雙方都可以理直氣壯地說，如果沒有你們的付出，這件事就不會發生。",
      "question": "你會收取入場費嗎？",
      "twist": "這隻鴿子把你的熱情款待視為它品牌的一部分。",
      "deeperQuestion": "共享空間中創造的價值歸誰所有？"
    }
  },
  {
    "id": "ponder-funny-068",
    "category": "Funny",
    "emoji": "🪿",
    "title": "The Polite Debate",
    "scenario": "You can win any argument by complimenting your opponent sincerely.\n\nThe compliments must be real, so the power makes you notice good qualities in people you oppose. It also rewards choosing conflicts for the pleasure of resolving them victoriously.",
    "question": "Would you use the ability?",
    "twist": "You start seeking arguments just to win.",
    "deeperQuestion": "Can a good method serve a bad motive?",
    "zh": {
      "title": "禮貌的辯論",
      "scenario": "真誠地讚美對手可以贏得任何爭論。讚美必須發自內心，這種力量會讓你注意到反對者身上的優點。它也會鼓勵你為了享受勝利的快感而選擇衝突。",
      "question": "你會使用這種能力嗎？",
      "twist": "你開始尋找論點只是為了贏。",
      "deeperQuestion": "好的方法能否服務不良動機？"
    }
  },
  {
    "id": "ponder-funny-069",
    "category": "Funny",
    "emoji": "🧀",
    "title": "The Eternal Loading Bar",
    "scenario": "Your phone finishes every task instantly but shows a loading bar for drama.\n\nThe waiting animation makes complicated answers feel thoughtfully produced. Removing it would be honest about the speed, but some users might stop taking equally reliable results seriously.",
    "question": "Would you remove it?",
    "twist": "Without the wait, people trust its results less.",
    "deeperQuestion": "Why can effort's appearance affect perceived quality?",
    "zh": {
      "title": "永遠的載入進度條",
      "scenario": "你的手機雖然能瞬間完成所有任務，但為了營造戲劇效果，還是會顯示一個載入進度條。這種等待動畫讓複雜的答案看起來像是精心製作的。去掉它雖然能更真實地展現速度，但有些用戶可能會因此不再認真看待同樣可靠的結果。",
      "question": "你會把它移除嗎？",
      "twist": "如果沒有等待，人們對結果的信任度就會降低。",
      "deeperQuestion": "為什麼努力的外在表現會影響感知品質？"
    }
  },
  {
    "id": "ponder-funny-070",
    "category": "Funny",
    "emoji": "🪑",
    "title": "The Group Photo",
    "scenario": "A camera makes everyone look good except whoever takes the picture.\n\nYou are usually the person who organizes gatherings and records everyone else's memories. Volunteering again would help the group while reinforcing a role in which your own presence is poorly represented.",
    "question": "Would you volunteer?",
    "twist": "Nobody notices your sacrifice unless you mention it.",
    "deeperQuestion": "Should generosity need an audience?",
    "zh": {
      "title": "集體照",
      "scenario": "相機讓每個人都看起來很棒，除了拍照的人。你通常是組織聚會、記錄大家回憶的人。再次自願擔任志願者，既能幫助團隊，又能強化你自身存在感不足的角色。",
      "question": "你會自願擔任這個角色嗎？",
      "twist": "除非你提起，否則沒人會注意到你的犧牲。",
      "deeperQuestion": "慷慨需要觀眾嗎？"
    }
  },
  {
    "id": "ponder-funny-071",
    "category": "Funny",
    "emoji": "🍝",
    "title": "The Dinner Crown",
    "scenario": "Whoever cooks dinner becomes household ruler until breakfast.\n\nCooking becomes a route to authority rather than an act of care. You must decide whether a household should reward contribution with appreciation or control over unrelated decisions.",
    "question": "Would you cook every night?",
    "twist": "Your roommate cooks worse food but makes fairer rules.",
    "deeperQuestion": "Should competence in one area grant broader authority?",
    "zh": {
      "title": "晚餐皇冠",
      "scenario": "誰負責做晚飯，誰就成為一家之主，直到第二天早上。做飯不再是照顧家人的行為，而是獲得權威的途徑。你必須決定，一個家庭應該以讚賞來獎勵貢獻，還是應該讓貢獻者掌控與做飯無關的決策。",
      "question": "你每天晚上都會煮飯嗎？",
      "twist": "你的室友做的飯菜更難吃，但制定的規則更公平。",
      "deeperQuestion": "在某一領域具備能力是否應賦予更廣泛的權力？"
    }
  },
  {
    "id": "ponder-funny-072",
    "category": "Funny",
    "emoji": "🎤",
    "title": "The Truthful Resume",
    "scenario": "Your resume includes every task you successfully avoided.\n\nThe document makes clear how often you protected time by declining unnecessary work. Yet the same strategy sometimes left colleagues carrying responsibilities you successfully escaped.",
    "question": "Would you submit it?",
    "twist": "Employers admire your efficiency.",
    "deeperQuestion": "Can the same behavior count as laziness and skill?",
    "zh": {
      "title": "真實的履歷",
      "scenario": "你的履歷列出了你成功迴避的每一項任務。這份文件清楚地表明，你是如何透過拒絕不必要的工作來節省時間的。然而，同樣的策略有時卻讓同事承擔了你成功逃避的責任。",
      "question": "你會提交嗎？",
      "twist": "雇主欣賞你的效率。",
      "deeperQuestion": "同一種行為可以算是懶惰和技巧嗎？"
    }
  },
  {
    "id": "ponder-funny-073",
    "category": "Funny",
    "emoji": "🐹",
    "title": "The One-Minute Cooking Disaster",
    "scenario": "You and a friend must improvise a one-minute cooking show using only breakfast cereal. Every fifteen seconds someone announces a complication: a power cut, a missing bowl, or a guest who insists this is formal dinner cuisine. The show cannot stop.",
    "question": "Who demonstrates, who narrates, and what is your first response when things go wrong?",
    "twist": "The audience’s favorite moment is the mistake you were trying to hide.",
    "deeperQuestion": "In a chaotic team situation, do you take control, support someone else, or look for the funny side first?",
    "zh": {
      "title": "一分鐘災難節目",
      "scenario": "你和朋友要即興主持一分鐘的烹飪節目，但唯一的食材是早餐麥片，每過十五秒就有人宣布新狀況：停電、碗被拿走，或嘉賓堅持這是一道正式晚宴菜。你們不能中斷節目。",
      "question": "誰負責繼續示範，誰負責解說？遇到第一個意外，你會說甚麼？",
      "twist": "觀眾最喜歡的片段，正是你們原本想掩飾的失誤。",
      "deeperQuestion": "在團隊裡，你遇到混亂時會控制局面、配合演出，還是先找笑點？"
    }
  },
  {
    "id": "ponder-funny-074",
    "category": "Funny",
    "emoji": "😂",
    "title": "The Debate Potato",
    "scenario": "A potato wins every debate by remaining silent.\n\nIts silence lets every audience member imagine a stronger argument than anyone actually made. You begin wondering whether the judges are evaluating restraint or projecting their own beliefs onto an empty response.",
    "question": "Would you accept its championship?",
    "twist": "Judges reward restraint rather than arguments.",
    "deeperQuestion": "Can refusing to speak be mistaken for wisdom?",
    "zh": {
      "title": "辯論薯仔",
      "scenario": "馬鈴薯之所以能贏得所有辯論，是因為它保持沉默。它的沉默讓所有聽眾都能想像出比任何實際提出的論點都更有力的論點。你會開始懷疑，評審們究竟是在評判克制，還是在把自己的想法投射到一個空洞的回答上。",
      "question": "你會接受薯仔成為辯論冠軍嗎？",
      "twist": "評審獎勵的是克制，而非說出多少論點。",
      "deeperQuestion": "拒絕說話能被誤認為是智慧嗎？"
    }
  },
  {
    "id": "ponder-funny-075",
    "category": "Funny",
    "emoji": "🐶",
    "title": "The Pet Influencer",
    "scenario": "Your pet becomes famous for appearing unimpressed with you.\n\nPosting pays for excellent care, but you start arranging moments around the audience's favorite expression. A real relationship gradually becomes material for a character your pet never agreed to play.",
    "question": "Would you manage its account?",
    "twist": "Your most loving moments get the fewest views.",
    "deeperQuestion": "Does an audience change a private relationship?",
    "zh": {
      "title": "寵物網紅",
      "scenario": "你的寵物因為總是一臉「懶得理你」而成了網紅。發佈影片的收入能幫你更好地照顧牠，但你也開始刻意安排場景，等待觀眾喜歡的表情。原本自然的相處，漸漸變成維持固定形象的拍攝。",
      "question": "你願意管理它的帳戶嗎？",
      "twist": "你最甜蜜的瞬間，觀看次數卻最少。",
      "deeperQuestion": "觀眾會改變私人關係嗎？"
    }
  },
  {
    "id": "ponder-funny-076",
    "category": "Funny",
    "emoji": "🦆",
    "title": "The Automatic Excuse",
    "scenario": "Your calendar generates perfect excuses for events you want to skip.\n\nThe excuse would let you preserve privacy without saying that you simply do not want to attend. Its believable details also give other people information they may reasonably act upon.",
    "question": "Would you use them?",
    "twist": "A friend plans around one invented problem.",
    "deeperQuestion": "When does avoiding discomfort create obligations to a lie?",
    "zh": {
      "title": "自動藉口",
      "scenario": "你的行事曆能為你缺席的活動提供完美的藉口。這些藉口既能讓你保護隱私，又無需直接表明你不想參加。而且，這些藉口聽起來合情合理，也能讓其他人掌握一些訊息，並據此採取相應的行動。",
      "question": "你會使用它們嗎？",
      "twist": "朋友圍繞著一個虛構的問題制定計劃。",
      "deeperQuestion": "避免不適何時會造成說謊的義務？"
    }
  },
  {
    "id": "ponder-funny-077",
    "category": "Funny",
    "emoji": "🧦",
    "title": "The Laughing Tax",
    "scenario": "You pay a small tax whenever you laugh at someone else's misfortune.\n\nYou consider the joke harmless until the payment makes its target visible. Knowing they benefit financially might reduce your guilt without changing how the ridicule feels to them.",
    "question": "Would it change your humor?",
    "twist": "The money goes directly to the person mocked.",
    "deeperQuestion": "Can compensation justify ridicule?",
    "zh": {
      "title": "笑稅",
      "scenario": "當你嘲笑別人的不幸時，你其實是在繳一筆小小的稅。你原本以為玩笑無傷大雅，直到這筆稅金讓受害者顯露出來。知道他們從中獲利或許能減輕你的罪惡感，卻無法改變他們所感受到的嘲笑。",
      "question": "這會改變你的幽默感嗎？",
      "twist": "這筆錢直接給被嘲笑的人。",
      "deeperQuestion": "補償可以成為嘲笑的理由嗎？"
    }
  },
  {
    "id": "ponder-funny-078",
    "category": "Funny",
    "emoji": "🍕",
    "title": "The Spaghetti Witness",
    "scenario": "A noodle can reveal one secret from the kitchen that cooked it.\n\nYou expected a funny secret rather than an invitation to investigate strangers. The noodle's access does not mean the people in the kitchen agreed to become dinner entertainment.",
    "question": "Would you listen?",
    "twist": "It only knows gossip, not hygiene problems.",
    "deeperQuestion": "Is curiosity a sufficient reason to invade privacy?",
    "zh": {
      "title": "義大利麵證人",
      "scenario": "你碗裡的一條麵可以告訴你，煮它的廚房裡發生過的一個秘密。你本來只想聽件趣事，卻可能因此知道陌生人不願公開的事。麵條願意開口，不代表廚房裡的人也同意成為餐桌上的話題。",
      "question": "你會聽嗎？",
      "twist": "它只知道八卦，不知道衛生問題。",
      "deeperQuestion": "好奇心是否足以構成侵犯隱私的理由？"
    }
  },
  {
    "id": "ponder-funny-079",
    "category": "Funny",
    "emoji": "🥔",
    "title": "The Clapping Plant",
    "scenario": "Your plant applauds whenever you leave the house.\n\nThe applause reliably helps you leave on difficult mornings. Discovering its selfish motive challenges your belief that useful encouragement must come from someone who wants exactly what you want.",
    "question": "Would you find it supportive?",
    "twist": "It just wants the room to itself.",
    "deeperQuestion": "Does a helpful effect matter more than the motive?",
    "zh": {
      "title": "拍手植物",
      "scenario": "你每次出門，盆栽都會鼓掌。這個小小的歡送，常常讓你比較有精神面對一天。後來你才發現，它只是希望獨佔房間。鼓勵曾經帶來的幫助沒有消失，但你對那份支持的理解變了。",
      "question": "你覺得這有幫助嗎？",
      "twist": "它只想獨佔這個房間。",
      "deeperQuestion": "有益的效果比動機更重要嗎？"
    }
  },
  {
    "id": "ponder-funny-080",
    "category": "Funny",
    "emoji": "🏅",
    "title": "A Contest Without a Winner",
    "scenario": "Your friends hold a talent show, but nobody may award a “best” prize. Every performer must receive a specific, inventive award instead. One singer misses notes but remembers every lyric; a failed magician makes everyone laugh until they cry.",
    "question": "Invent three awards that show you genuinely noticed what people did.",
    "twist": "One performer says they actually wanted to know how their singing technique ranked.",
    "deeperQuestion": "Can encouragement without ranking also offer useful feedback? When does comparison help?",
    "zh": {
      "title": "不准選冠軍的比賽",
      "scenario": "朋友舉辦才藝比賽，規則卻是不准頒「最好」的獎，只能為每個人創作一個具體而有趣的獎名。有人唱歌走音但記得所有歌詞，有人魔術失敗卻讓大家笑得停不下來。",
      "question": "你會頒哪三個獎？怎樣讓得獎的人知道你真的有留心？",
      "twist": "一位參賽者說，他其實很想知道自己在唱歌技巧上排第幾。",
      "deeperQuestion": "沒有排名的鼓勵，能否同時提供有用的回饋？甚麼時候比較是有幫助的？"
    }
  },
  {
    "id": "ponder-funny-081",
    "category": "Funny",
    "emoji": "🧀",
    "title": "The Fancy Water",
    "scenario": "You discover luxury bottled water comes from your own tap.\n\nThe attractive bottle turns drinking water into a small pleasure people willingly purchase. You wonder whether the pleasure is a legitimate product or depends on keeping an ordinary source mysterious.",
    "question": "Would you sell your version?",
    "twist": "Customers say the expensive bottle tastes better.",
    "deeperQuestion": "Can presentation create real value without changing contents?",
    "zh": {
      "title": "高級瓶裝水",
      "scenario": "你發現，一款昂貴瓶裝水的水源，竟然就是你家水龍頭裡的普通食水。\n\n精美的瓶身讓喝水變成一種小享受，人們也願意為此付錢。你不禁思考，這份享受本身是否值得收費，還是必須隱瞞普通的水源，才能讓產品顯得特別。",
      "question": "你會出售你的版本嗎？",
      "twist": "顧客卻堅持說，裝在昂貴瓶子裡的水比較好喝。",
      "deeperQuestion": "演示能否在不改變內容的情況下創造真正的價值？"
    }
  },
  {
    "id": "ponder-funny-082",
    "category": "Funny",
    "emoji": "🪑",
    "title": "The Sock Detective",
    "scenario": "A detective finds your missing socks but reveals your messy habits publicly.\n\nThe missing socks are irritating but not a serious problem. The detective's method would solve the mystery while making your private routines entertainment for people who never needed to know them.",
    "question": "Would you hire them?",
    "twist": "Every other solution has failed.",
    "deeperQuestion": "How much privacy is a trivial mystery worth?",
    "zh": {
      "title": "襪子偵探",
      "scenario": "一位偵探找到了你失去的襪子，卻也把你邋遢的習慣公之於眾。襪子丟失固然令人惱火，但並非什麼大問題。偵探的方法本來可以解開謎團，卻讓你的私生活成了那些原本無需知曉之人的娛樂消遣。",
      "question": "你會僱用他們嗎？",
      "twist": "其他所有解決方案都失敗了。",
      "deeperQuestion": "為了解開一個小謎團，你願意犧牲多少私隱？"
    }
  },
  {
    "id": "ponder-funny-083",
    "category": "Funny",
    "emoji": "🍝",
    "title": "The Mood Mustache",
    "scenario": "A cartoon mustache appears whenever you feel jealous.\n\nYou would no longer have to explain every insecure moment. But automatic reassurance might prevent you from learning which feelings deserve a conversation and which simply pass on their own.",
    "question": "Would you explain it to friends?",
    "twist": "Everyone starts reassuring you before you ask.",
    "deeperQuestion": "Does visible insecurity improve or burden relationships?",
    "zh": {
      "title": "心情鬍子",
      "scenario": "每當你感到嫉妒時，就會出現一個卡通鬍子。你再也不用解釋每一個不安的時刻了。但這種自動的安慰可能會讓你無法分辨哪些情緒值得溝通，哪些情緒會自行消散。",
      "question": "你會向朋友解釋嗎？",
      "twist": "在你開口之前，每個人都會開始安慰你。",
      "deeperQuestion": "公開的不安全感會改善還是加重人際關係？"
    }
  },
  {
    "id": "ponder-funny-084",
    "category": "Funny",
    "emoji": "🎤",
    "title": "The Voice Upgrade",
    "scenario": "You can speak in a magnificent voice but only about boring topics.\n\nYou have always wanted people to listen when you speak. The magnificent voice gives you attention while limiting the subjects through which you can show who you actually are.",
    "question": "Would you take the upgrade?",
    "twist": "People enjoy your delivery and ignore your meaning.",
    "deeperQuestion": "Is being heard the same as being understood?",
    "zh": {
      "title": "語音升級",
      "scenario": "你的聲音渾厚悅耳，但只能談論枯燥乏味的話題。你一直渴望人們傾聽你的講話。這美妙的聲音為你贏得了關注，但也限制了你展現真我的領域。",
      "question": "你會接受升級嗎？",
      "twist": "人們喜歡你的表達方式，卻忽略了你的意思。",
      "deeperQuestion": "被聽見和被理解是一回事嗎？"
    }
  },
  {
    "id": "ponder-funny-085",
    "category": "Funny",
    "emoji": "🐹",
    "title": "The Queue Simulator",
    "scenario": "A popular game recreates waiting in queues perfectly.\n\nThe game offers predictability, clear rules, and permission to do nothing else. Its popularity suggests that the unpleasant part of real waiting may be uncertainty rather than inactivity itself.",
    "question": "Would you pay to play?",
    "twist": "Players describe it as more peaceful than real leisure.",
    "deeperQuestion": "Does an activity need an obvious purpose to be worthwhile?",
    "zh": {
      "title": "排隊模擬器",
      "scenario": "一款受歡迎的遊戲完美地模擬了排隊等待的過程。這款遊戲具有可預測性、規則清晰，並且允許玩家甚麼都不做。它的流行表明，現實中等待令人不快的部分或許在於不確定性，而非無所事事本身。",
      "question": "你願意付費玩遊戲嗎？",
      "twist": "玩家們認為它比真正的休閒更平和。",
      "deeperQuestion": "一項活動是否需要有明顯的目的才有價值？"
    }
  },
  {
    "id": "ponder-funny-086",
    "category": "Funny",
    "emoji": "🦸",
    "title": "Retired Superheroes Wanted",
    "scenario": "You recruit three retired superheroes to run a neighborhood secondhand market. They can keep paper perfectly flat, understand printers’ complaints, or predict who will lack change in five minutes. All three want to lead the team, although the event budget is tiny.",
    "question": "How would you divide the work, and where could the least impressive power save the day?",
    "twist": "The biggest crisis is that every stallholder thinks someone else has a better position.",
    "deeperQuestion": "Does being excellent at a task also make someone good at coordinating people?",
    "zh": {
      "title": "退休超能力招募會",
      "scenario": "你招募三位退休超級英雄，任務只是辦好一場社區二手市集。候選人能讓紙張永遠平整、聽懂印表機的抱怨，或預知五分鐘後誰會找不到零錢。每個人都想當隊長。",
      "question": "你會怎樣分工？最不起眼的能力會在哪個環節救場？",
      "twist": "市集最嚴重的問題，是所有攤主都覺得自己的位置不夠好。",
      "deeperQuestion": "專業能力出色的人，也一定適合協調其他人嗎？"
    }
  },
  {
    "id": "ponder-funny-087",
    "category": "Funny",
    "emoji": "🐶",
    "title": "The Laundry Oracle",
    "scenario": "Your washing machine predicts relationship problems through sock arrangements.\n\nThe machine notices patterns you missed but cannot distinguish a warning from a coincidence you remember selectively. Trusting it could change a relationship before you have spoken to the person involved.",
    "question": "Would you consult it?",
    "twist": "It is usually right but never explains why.",
    "deeperQuestion": "What makes advice trustworthy beyond its track record?",
    "zh": {
      "title": "洗衣神諭",
      "scenario": "你的洗衣機能透過襪子排列預測人際關係問題。它能注意到你忽略的規律，但無法區分這是警告還是你選擇性記住的巧合。相信它可能會在你還沒和當事人溝通之前就改變一段關係。",
      "question": "你會參考它嗎？",
      "twist": "它通常是對的，但從不解釋原因。",
      "deeperQuestion": "除了過往紀錄之外，有什麼因素使建議值得信賴？"
    }
  },
  {
    "id": "ponder-funny-088",
    "category": "Funny",
    "emoji": "🦆",
    "title": "The Perfect Pun",
    "scenario": "You invent a pun so good nobody ever wants another joke.\n\nYou want to share something wonderful rather than hoard it. Yet its perfection might leave less room for imperfect jokes that helped other people find their own voices.",
    "question": "Would you share it?",
    "twist": "Professional comedians beg you not to.",
    "deeperQuestion": "Can one great creation reduce future creativity?",
    "zh": {
      "title": "完美的雙關語",
      "scenario": "你創造了一個絕妙的雙關語，以至於沒人想再聽其他笑話了。你想分享美好的東西，而不是把它藏起來。然而，它的完美可能會擠佔那些不完美笑話的空間，而這些不完美的笑話恰恰能幫助其他人找到自己的表達方式。",
      "question": "你願意分享嗎？",
      "twist": "專業喜劇演員懇求你不要這樣做。",
      "deeperQuestion": "一項偉大的創造會削弱未來的創造力嗎？"
    }
  },
  {
    "id": "ponder-funny-089",
    "category": "Funny",
    "emoji": "🧦",
    "title": "The Imaginary Invoice",
    "scenario": "Your imaginary friend bills you for years of emotional support.\n\nTheir support felt real even when the relationship existed entirely in your imagination. The invoice asks whether a meaningful benefit can become a financial obligation only after the terms change.",
    "question": "Would you pay?",
    "twist": "They can now spend money in the real world.",
    "deeperQuestion": "Can a previously free relationship create retroactive debt?",
    "zh": {
      "title": "虛構的發票",
      "scenario": "你的想像朋友向你收取了多年來情緒支持的費用。即使這段關係完全存在於你的想像中，他們的支持也讓你感覺真實。帳單質疑，一項有意義的恩惠能否在條款改變後才轉化為經濟義務。",
      "question": "你願意付錢嗎？",
      "twist": "他們現在可以在現實世界中消費了。",
      "deeperQuestion": "原本免費的陪伴，可以在事後變成你欠下的債嗎？"
    }
  },
  {
    "id": "ponder-funny-090",
    "category": "Funny",
    "emoji": "🍕",
    "title": "The Costume Rule",
    "scenario": "Everyone must dress as their most-used excuse for one day.\n\nYou usually describe yourself as too busy rather than explain what you prefer. Wearing the costume would turn a socially accepted shortcut into a public statement about how you allocate attention.",
    "question": "Would you tell the truth?",
    "twist": "Your costume reveals how often you claim to be busy.",
    "deeperQuestion": "Do excuses protect privacy or conceal priorities?",
    "zh": {
      "title": "服裝規則",
      "scenario": "每個人都必須穿著自己最常用藉口的衣服一天。你通常會說自己太忙，而不是解釋你真正想要的是什麼。穿上這身行頭，就能把一個社會認可的捷徑變成一個關於你如何分配注意力的公開聲明。",
      "question": "你會說實話嗎？",
      "twist": "你的服裝會顯示，你有多常以「忙碌」為藉口。",
      "deeperQuestion": "藉口究竟是保護隱私還是掩蓋優先事項？"
    }
  },
  {
    "id": "ponder-funny-091",
    "category": "Funny",
    "emoji": "🥔",
    "title": "The Apologetic Vacuum",
    "scenario": "Your vacuum apologizes to every crumb before cleaning it.\n\nThe apologies sound silly until you notice how carefully it moves around objects you value. Speeding it up might improve efficiency while removing the consideration that makes it a pleasant helper.",
    "question": "Would you speed it up?",
    "twist": "It considers rushing deeply disrespectful.",
    "deeperQuestion": "Should efficiency override an unfamiliar ethical concern?",
    "zh": {
      "title": "不停道歉的吸塵機",
      "scenario": "你的吸塵器在清理每一粒碎屑之前都會道歉。這些道歉聽起來很傻，但當你注意到它小心翼翼地避開你珍惜的物品時，就會明白為什麼它這麼做了。提高它的速度或許能提升效率，但卻會抹殺牠體貼周到的本領，而這正是它成為貼心助手的關鍵所在。",
      "question": "你會要求它加快速度嗎？",
      "twist": "認為匆忙行事是非常不尊重的行為。",
      "deeperQuestion": "效率是否應該凌駕於陌生的倫理問題之上？"
    }
  },
  {
    "id": "ponder-funny-092",
    "category": "Funny",
    "emoji": "🪿",
    "title": "The Silent Disco",
    "scenario": "Your headphones play music matching your actual thoughts at a party.\n\nSharing headphones seems like a small, friendly gesture rather than an intimate disclosure. The music may reveal a passing thought as if it were a considered confession you chose to make.",
    "question": "Would you share a pair?",
    "twist": "The song reveals an unexpected crush.",
    "deeperQuestion": "Can playful sharing accidentally demand serious disclosure?",
    "zh": {
      "title": "無聲迪斯可",
      "scenario": "在派對上，你的耳機裡播放的音樂恰好與你內心的想法相符。分享耳機看似是一種友善的小舉動，而非私密的傾訴。音樂或許會將你一閃而過的念頭，偽裝成你深思熟慮後的告白。",
      "question": "你會與別人共用一副耳機嗎？",
      "twist": "這首歌揭示了一段意想不到的暗戀。",
      "deeperQuestion": "玩笑式的分享是否會意外地導致嚴肅的資訊揭露？"
    }
  },
  {
    "id": "ponder-funny-093",
    "category": "Funny",
    "emoji": "🧀",
    "title": "The Citywide Banana Code",
    "scenario": "You casually tell a friend, “The banana is ready.” A passerby takes it for a secret code. Within a day people whisper it in cafés, at bus stops, and in group chats, then nod knowingly. There is no scam, and nobody knows what it means.",
    "question": "Would you explain the origin, watch it develop, or invite everyone to define it together? Why?",
    "twist": "Three shops have independently adopted it to mean that umbrellas are available to borrow for free.",
    "deeperQuestion": "Does a phrase belong to its first speaker or to the people who give it a shared use?",
    "zh": {
      "title": "全城都誤會的暗號",
      "scenario": "你隨口對朋友說「香蕉準備好了」，旁邊的人卻把它當成一個神秘活動的暗號。一天之內，咖啡店、巴士站和群組都有人低聲說這句話，還互相點頭。沒有騙局，也沒有人知道它代表甚麼。",
      "question": "你會公開解釋、觀察它發展，還是邀請大家一起定義意思？為甚麼？",
      "twist": "三家店已自發把這句話用作「今天可以免費借雨傘」的暗號。",
      "deeperQuestion": "一句話的意思，屬於第一個說的人，還是共同使用它的人？"
    }
  },
  {
    "id": "ponder-funny-094",
    "category": "Funny",
    "emoji": "🪑",
    "title": "The Professional Flake",
    "scenario": "A company pays you to cancel plans so venues are less crowded.\n\nYour absence would become predictable enough for people to plan around. But being valued for not appearing may gradually make it harder to tell whether anyone actually wants you present.",
    "question": "Would you accept?",
    "twist": "Your friends begin depending on your cancellations.",
    "deeperQuestion": "Can reliability mean consistently not showing up?",
    "zh": {
      "title": "職業放飛機",
      "scenario": "一家公司付錢讓你取消行程，這樣場地就不會那麼擁擠。你的缺席會變得足夠可預測，人們可以據此安排行程。但是，因為不露面而獲得報酬，可能會逐漸讓人難以判斷是否有人真的希望你出席。",
      "question": "你願意接受嗎？",
      "twist": "你的朋友開始依賴你的取消。",
      "deeperQuestion": "每次都如期缺席，也算是一種可靠嗎？"
    }
  },
  {
    "id": "ponder-funny-095",
    "category": "Funny",
    "emoji": "🍝",
    "title": "The Smiling Fine",
    "scenario": "A town fines people for fake smiles.\n\nThe rule promises authenticity but requires strangers to interpret one another's faces. A tired person's genuine smile and a worker's practiced courtesy may look identical to an official observer.",
    "question": "Would you support the policy?",
    "twist": "Service workers can finally stop performing cheerfulness.",
    "deeperQuestion": "Who can fairly judge whether an emotion is genuine?",
    "zh": {
      "title": "假笑罰款",
      "scenario": "某鎮對假笑者處以罰款。該規定旨在確保笑容的真實性，但卻要求陌生人之間相互解讀面部表情。疲憊之人真誠的笑容和工作人員刻意的禮貌笑容，在官方觀察員看來可能並無二致。",
      "question": "你會支持這項政策嗎？",
      "twist": "服務人員終於可以停止表演笑容了。",
      "deeperQuestion": "誰能公正地判斷一種情緒是否真實？"
    }
  },
  {
    "id": "ponder-funny-096",
    "category": "Funny",
    "emoji": "🎤",
    "title": "The Potato Portrait",
    "scenario": "A famous artist sells a potato that supposedly resembles your personality.\n\nYou can laugh at the comparison while still feeling misunderstood by its popularity. Buying the portrait might reclaim the joke or confirm that others' reading of you has become your own.",
    "question": "Would you buy it?",
    "twist": "Everyone you know immediately agrees with the portrait.",
    "deeperQuestion": "Can others recognize something in you that you cannot?",
    "zh": {
      "title": "馬鈴薯肖像",
      "scenario": "一位著名藝術家出售一個據說酷似你性格的馬鈴薯。你可以嘲笑這種比喻，但同時也會因為這種馬鈴薯的流行而感到困惑。購買這張「肖像」或許能讓你重新接受這個玩笑，或是證實別人對你的解讀最終變成了你自己的解讀。",
      "question": "你會買嗎？",
      "twist": "你認識的每個人都立刻認同這幅畫像。",
      "deeperQuestion": "別人能否發現你身上連你自己都看不到的特質？"
    }
  },
  {
    "id": "ponder-funny-097",
    "category": "Funny",
    "emoji": "🐹",
    "title": "The Instant Expert",
    "scenario": "You become an expert whenever you confidently mispronounce a technical word.\n\nThe ability gives you real knowledge, but only after a public mistake. Correcting the word would acknowledge your error while confusing people who trusted your sudden authority.",
    "question": "Would you use the power?",
    "twist": "Your audience learns the wrong pronunciation.",
    "deeperQuestion": "Is being correct about substance enough?",
    "zh": {
      "title": "即時專家",
      "scenario": "當你自信地念錯一個專業術語時，你就成了專家。這種能力賦予你真正的知識，但前提是你要在公眾場合犯錯。糾正這個詞會承認你的錯誤，同時也會讓那些信任你突然有權威的人感到困惑。",
      "question": "你會使用這種能力嗎？",
      "twist": "你的聽眾學到了錯誤的發音。",
      "deeperQuestion": "內容正確就夠了嗎？"
    }
  },
  {
    "id": "ponder-funny-098",
    "category": "Funny",
    "emoji": "😂",
    "title": "The Wrong Theme",
    "scenario": "You arrive at a costume party dressed for a completely different theme.\n\nYou enjoyed choosing the costume before learning it was supposedly wrong. Others' enthusiasm raises the possibility that originality sometimes depends on confidence rather than deliberate invention.",
    "question": "Would you pretend it was intentional?",
    "twist": "Everyone copies your interpretation next year.",
    "deeperQuestion": "When does a mistake become originality?",
    "zh": {
      "title": "錯誤的主題",
      "scenario": "你穿著與主題完全不符的服裝參加化裝舞會。在得知這身裝扮可能不合時宜之前，你很享受挑選的過程。其他人的熱情讓你意識到，原創性有時取決於自信而非刻意的創作。",
      "question": "你會假裝這是故意的嗎？",
      "twist": "明年大家都會模仿你的解讀。",
      "deeperQuestion": "錯誤何時才能變成原創性？"
    }
  },
  {
    "id": "ponder-funny-099",
    "category": "Funny",
    "emoji": "🐶",
    "title": "The Competitive Picnic",
    "scenario": "Your friends turn relaxing into a scored competition.\n\nYou initially join because refusing seems excessively serious for a joke. Soon everyone monitors breathing, posture, and facial expression, transforming rest into another performance with winners and losers.",
    "question": "Would you join?",
    "twist": "You feel more stressed trying to look relaxed.",
    "deeperQuestion": "Can measuring a goal defeat the goal itself?",
    "zh": {
      "title": "競爭性野餐",
      "scenario": "你的朋友把放鬆變成了一場計分比賽。你一開始也加入了，因為拒絕似乎有點太認真了。很快，每個人都開始注意自己的呼吸、姿勢和臉部表情，把休息變成了一場有勝負的表演。",
      "question": "你願意加入嗎？",
      "twist": "試著讓自己看起來放鬆反而會讓你感到壓力更大。",
      "deeperQuestion": "衡量一個目標是否會破壞目標本身？"
    }
  },
  {
    "id": "ponder-funny-100",
    "category": "Funny",
    "emoji": "🦆",
    "title": "The Unfollowed Advice",
    "scenario": "You give brilliant advice that works only if nobody credits you.\n\nThe advice still helps people, and being anonymous protects you from their expectations. Losing credit hurts most when someone else uses your insight to build the authority you were denied.",
    "question": "Would you keep giving it?",
    "twist": "Another person receives awards for repeating it.",
    "deeperQuestion": "How much recognition does generosity require?",
    "zh": {
      "title": "未被採納的建議",
      "scenario": "你提出的建議非常精闢，但只有在無人署名的情況下才有效。這些建議仍然能幫助他人，而匿名則能讓你免於他人期望的困擾。失去署名最令人痛心的是，別人利用你的真知灼見來建立你原本無法企及的權威。",
      "question": "你會繼續給予嗎？",
      "twist": "另一個人卻因為重複你的建議而獲獎。",
      "deeperQuestion": "慷慨需要多少認可？"
    }
  },
  {
    "id": "ponder-moral-002",
    "category": "Moral",
    "emoji": "⚖️",
    "title": "The Empty Seat",
    "scenario": "You can reserve the last shelter bed for a friend or an unknown newcomer.\n\nYou promised your friend help before knowing only one bed remained. Keeping that promise may protect your relationship while giving less urgent need priority over immediate vulnerability.",
    "question": "Who gets it?",
    "twist": "Your friend has somewhere uncomfortable but safe to stay.",
    "deeperQuestion": "When should loyalty yield to greater need?",
    "zh": {
      "title": "空位",
      "scenario": "避難中心只剩一個床位，你可以留給朋友，也可以交給素不相識的新來者。你早已答應幫朋友，當時卻不知道床位如此緊張。現在信守承諾，就可能讓一個更急需安頓的人繼續等待。",
      "question": "誰能得到它？",
      "twist": "你的朋友有一個不太舒服但安全的地方可以待著。",
      "deeperQuestion": "忠誠何時應該讓位給更大的需求？"
    }
  },
  {
    "id": "ponder-moral-003",
    "category": "Moral",
    "emoji": "🧭",
    "title": "The Found Wallet",
    "scenario": "You find cash beside a wallet whose owner appears wealthy.\n\nReturning it would preserve your sense of honesty but leave your own problem unsolved. You cannot know whether the apparent wealth reflects the owner's actual circumstances.",
    "question": "Would you return everything?",
    "twist": "Your overdue rent equals the cash inside.",
    "deeperQuestion": "Does unequal wealth change ownership?",
    "zh": {
      "title": "找到的錢包",
      "scenario": "你在一個錢包旁發現現金，從錢包裡的物品看來，失主似乎很富有。歸還能讓你問心無愧，卻無法解決自己眼前的財務困難。而且你也不確定，這些看起來昂貴的物品，能否代表失主的真實處境。",
      "question": "你會把所有東西都還回去嗎？",
      "twist": "你拖欠的房租等於裡面的現金。",
      "deeperQuestion": "財富不均會改變所有權嗎？"
    }
  },
  {
    "id": "ponder-moral-004",
    "category": "Moral",
    "emoji": "🤝",
    "title": "The Honest Reference",
    "scenario": "A struggling friend asks you to exaggerate their skills for a job.\n\nYour recommendation would affect colleagues who depend on the new hire's abilities. Helping someone gain a chance is different from promising others a level of competence they have not demonstrated.",
    "question": "Would you do it?",
    "twist": "You believe they could learn quickly.",
    "deeperQuestion": "Can confidence in potential justify deception?",
    "zh": {
      "title": "誠實的推薦",
      "scenario": "一位求職遇到困難的朋友請你誇大其求職技能。你的推薦會影響到依賴這位新進員工能力的同事。幫助他人獲得機會與承諾他人具備他們尚未展現的能力水平是截然不同的。",
      "question": "你會這麼做嗎？",
      "twist": "你相信他們能很快學會。",
      "deeperQuestion": "對潛力的自信能否成為欺騙的理由？"
    }
  },
  {
    "id": "ponder-moral-005",
    "category": "Moral",
    "emoji": "🕯️",
    "title": "The Shared Fine",
    "scenario": "A whole class is punished until someone identifies a minor rule-breaker.\n\nYou know who broke the rule and dislike what they did. Speaking up would end the group's suffering while allowing the authority to succeed through collective pressure.",
    "question": "Would you identify them?",
    "twist": "The punishment itself is clearly unfair.",
    "deeperQuestion": "Does cooperation legitimize an unjust system?",
    "zh": {
      "title": "共同罰款",
      "scenario": "全班都會受到懲罰，直到有人指出一個輕微的違規者。你知道是誰違反了規則，也不喜歡對方的行為。如果挺身而出，就能結束集體的痛苦，同時也能讓權威透過集體壓力來達到目的。",
      "question": "你會指出那個人是誰嗎？",
      "twist": "懲罰本身顯然是不公平的。",
      "deeperQuestion": "配合一個不公義的制度，會不會讓它顯得合理？"
    }
  },
  {
    "id": "ponder-moral-006",
    "category": "Moral",
    "emoji": "🚪",
    "title": "The Rescue Drone",
    "scenario": "Your rescue drone can save its owner or two strangers.\n\nYou would be choosing the rule before knowing who needs rescuing. An owner understandably values security, while a bystander never agreed to receive less protection because they did not purchase it.",
    "question": "How should it be programmed?",
    "twist": "Nobody will buy one that disregards its owner.",
    "deeperQuestion": "Can a better moral rule fail through nonadoption?",
    "zh": {
      "title": "救援無人機",
      "scenario": "一架救援無人機遇到緊急情況時，可以優先救它的主人，或改為救兩名陌生人。你要在不知道誰會遇險之前，訂好運作規則。購買者想得到保障，路人則從未同意因為沒有購買無人機，就獲得較低的救援優先次序。",
      "question": "你認為救援無人機應該如何設定救援優先次序？",
      "twist": "沒有人會買一個不尊重主人的東西。",
      "deeperQuestion": "更好的道德規則會因為未被採納而失敗嗎？"
    }
  },
  {
    "id": "ponder-moral-007",
    "category": "Moral",
    "emoji": "🌍",
    "title": "The Secret Donation",
    "scenario": "A harmful company offers a large donation to your community project.\n\nThe money could keep an important service open for another year. Staff disagree about whether the company's reputation should matter when refusing funds creates visible harm for people already struggling.",
    "question": "Would you accept?",
    "twist": "It demands public praise in return.",
    "deeperQuestion": "When does useful funding become endorsement?",
    "zh": {
      "title": "秘密捐贈",
      "scenario": "一家有害的公司向你們的社區計畫提供了一大筆捐款。這筆錢可以讓一項重要的服務再維持一年。工作人員對於拒絕捐款是否會對本已生活困頓的人造成明顯傷害，以及公司的聲譽是否應該成為考量因素存在分歧。",
      "question": "你願意接受嗎？",
      "twist": "它要求獲得公眾的讚揚作為回報。",
      "deeperQuestion": "接受有用的資助，從甚麼時候開始等於替資助者背書？"
    }
  },
  {
    "id": "ponder-moral-008",
    "category": "Moral",
    "emoji": "🗝️",
    "title": "The Extra Dose",
    "scenario": "A clinic mistakenly gives you two scarce treatment appointments.\n\nYou can transfer the appointment without anyone noticing the mistake. The person who would otherwise receive it has followed the same rules your relative is hoping to bypass.",
    "question": "Would you release one?",
    "twist": "A relative could use the extra slot.",
    "deeperQuestion": "Do personal connections justify bypassing a queue?",
    "zh": {
      "title": "多出來的治療名額",
      "scenario": "診所誤將兩個稀缺的治療預約名額分配給了你。你可以悄悄地將預約轉給其他人，而不會有人察覺到錯誤。原本應該獲得預約的人也遵循了與你親屬試圖繞過的相同規則。",
      "question": "你會交還其中一個治療名額嗎？",
      "twist": "親屬可以使用額外的名額。",
      "deeperQuestion": "私人關係是否可以成為繞過排隊的理由？"
    }
  },
  {
    "id": "ponder-moral-009",
    "category": "Moral",
    "emoji": "🎟️",
    "title": "The Anonymous Warning",
    "scenario": "You hear an unverified rumor that a colleague is stealing.\n\nThe warning could protect people, but you cannot control how the rumor spreads. Once a reputation changes, a later correction may never reach everyone who heard the accusation.",
    "question": "Would you warn others?",
    "twist": "Waiting may allow more losses.",
    "deeperQuestion": "How much evidence should an accusation require?",
    "zh": {
      "title": "匿名警告",
      "scenario": "你聽到一個未經證實的傳言，說一位同事在偷竊。發出警告或許能保護他人，但你無法控制謠言的傳播。一旦某人的名譽受損，之後的更正可能永遠無法傳達給所有聽到指控的人。",
      "question": "你會警告其他人嗎？",
      "twist": "等待可能會導致更多損失。",
      "deeperQuestion": "指控需要多少證據？"
    }
  },
  {
    "id": "ponder-moral-010",
    "category": "Moral",
    "emoji": "🛟",
    "title": "The Unequal Team",
    "scenario": "One teammate works less because they provide unpaid care at home.\n\nEveryone agreed to equal participation before the situation changed. You want compassion to remain possible without quietly requiring another struggling person to absorb every additional responsibility.",
    "question": "Would you split credit equally?",
    "twist": "Your extra work is causing strain too.",
    "deeperQuestion": "How should fairness account for unseen burdens?",
    "zh": {
      "title": "不平等的團隊",
      "scenario": "一位隊友因為要在家承擔無償照顧工作而減少了工作時間。在情況改變之前，所有人都同意平等參與工作。你希望在不讓另一位處境艱難的人默默承擔所有額外責任的情況下，仍然能夠體現同理心。",
      "question": "你會讓所有組員平分功勞嗎？",
      "twist": "你的額外工作也造成了壓力。",
      "deeperQuestion": "公平性應如何考慮未見負擔？"
    }
  },
  {
    "id": "ponder-moral-011",
    "category": "Moral",
    "emoji": "📜",
    "title": "The Stolen Formula",
    "scenario": "You can expose a stolen invention, but doing so closes a useful factory.\n\nWorkers had no role in taking the invention and depend on their wages. Remaining silent would protect them now while letting a successful theft continue shaping who receives credit and profit.",
    "question": "Would you reveal it?",
    "twist": "The inventor wants acknowledgment rather than closure.",
    "deeperQuestion": "Should justice follow the harmed person's wishes?",
    "zh": {
      "title": "被偷的配方",
      "scenario": "你可以揭露一項被盜的發明，但這樣做會導致一個有用的工廠倒閉。工人們與這項發明的竊取無關，他們依靠工資生活。保持沉默或許能暫時保護他們，但卻會讓成功的竊盜行為繼續左右誰能獲得榮譽和利潤。",
      "question": "你會透露嗎？",
      "twist": "發明人想要的是認可而不是結束。",
      "deeperQuestion": "司法是否應遵循受害人的意願？"
    }
  },
  {
    "id": "ponder-moral-012",
    "category": "Moral",
    "emoji": "🪙",
    "title": "The Dangerous Truth",
    "scenario": "Publishing accurate information could help the public and enable wrongdoing.\n\nThe material is accurate, important, and impossible to retrieve once copied. You must distinguish between giving people enough understanding to judge a problem and publishing every detail merely because you can.",
    "question": "Would you publish everything?",
    "twist": "A limited version would still inform most readers.",
    "deeperQuestion": "Does transparency require unrestricted detail?",
    "zh": {
      "title": "危險的真相",
      "scenario": "你掌握一份重要而準確的資料，公開後能幫公眾了解問題，但部分細節也可能被用來作惡。資料一旦被複製，就很難收回。你要決定哪些內容是公眾作判斷所必需，哪些只是因為手上有，就想一併公開。",
      "question": "你會把所有內容都公佈出來嗎？",
      "twist": "即使是有限的版本也能讓大多數讀者有所了解。",
      "deeperQuestion": "透明度是否需要不受限制的細節？"
    }
  },
  {
    "id": "ponder-moral-013",
    "category": "Moral",
    "emoji": "🌱",
    "title": "The Speeding Parent",
    "scenario": "A parent breaks a minor traffic rule to reach a frightened child.\n\nYou saw both the worried parent and the pedestrian who had to step back. The situation makes a sympathetic explanation feel real without making the risk disappear.",
    "question": "Would you report them?",
    "twist": "The same shortcut endangered pedestrians.",
    "deeperQuestion": "Should understandable motives reduce accountability?",
    "zh": {
      "title": "超速的父母",
      "scenario": "一位家長為了救受驚的孩子，違反了一條輕微的交通規則。你看到了焦急的家長和不得不後退的行人。這種情況使得同情的解釋顯得合情合理，但並沒有消除風險。",
      "question": "你會檢舉他們嗎？",
      "twist": "同樣的捷徑危及行人安全。",
      "deeperQuestion": "可以理解的動機是否應該降低問責制？"
    }
  },
  {
    "id": "ponder-moral-014",
    "category": "Moral",
    "emoji": "⚖️",
    "title": "The Accidental Damage",
    "scenario": "You damage something already scheduled for replacement.\n\nThe object was nearly worthless to its owner, but your careless action still violated their trust. You wonder whether admitting fault requires accepting a charge unrelated to the actual damage.",
    "question": "Would you confess?",
    "twist": "The owner would charge you the full price.",
    "deeperQuestion": "Does wrongdoing require an actual loss?",
    "zh": {
      "title": "意外損壞",
      "scenario": "你損壞了一件原本計劃要更換的物品。這件物品對它的主人來說幾乎毫無價值，但你的粗心行為仍然辜負了他們的信任。你想知道，承認過錯是否意味著要承擔與實際損失無關的賠償。",
      "question": "你會坦白嗎？",
      "twist": "店主會向你收取全額。",
      "deeperQuestion": "不當行為是否需要造成實際損失？"
    }
  },
  {
    "id": "ponder-moral-015",
    "category": "Moral",
    "emoji": "🧭",
    "title": "The Scholarship Tie",
    "scenario": "Two applicants qualify equally; one had far fewer advantages.\n\nBoth candidates wrote strong applications and would use the opportunity well. The choice turns on whether fairness should assess present performance alone or also consider the obstacles behind it.",
    "question": "Who should receive the scholarship?",
    "twist": "The other applicant worked equally hard.",
    "deeperQuestion": "Should opportunity compensate for starting conditions?",
    "zh": {
      "title": "不分高下的獎學金申請",
      "scenario": "兩位申請人條件相當；其中一位優勢明顯較少。兩位候選人都提交了優秀的申請資料，並且都能很好地把握這次機會。選擇的關鍵在於，公平性是否應該只評估候選人目前的表現，還是也應該考慮背後的障礙。",
      "question": "誰應該獲得獎學金？",
      "twist": "另一位申請人也同樣努力。",
      "deeperQuestion": "機會是否應該彌補起步條件的不足？"
    }
  },
  {
    "id": "ponder-moral-016",
    "category": "Moral",
    "emoji": "🤝",
    "title": "The Hungry Visitor",
    "scenario": "A hungry stranger takes food from your unlocked garden.\n\nYou had planned to share some produce, but nobody asked first. The incident tests whether an urgent need changes the terms under which another person may use something you maintain.",
    "question": "Would you demand repayment?",
    "twist": "They took more than they immediately needed.",
    "deeperQuestion": "Where should necessity limit property rights?",
    "zh": {
      "title": "飢餓的訪客",
      "scenario": "一個飢餓的陌生人從你未上鎖的花園裡拿走了食物。你原本打算分享一些收成，但沒人事先詢問。這起事件檢驗了緊急需求是否會改變他人使用你維護的物品的條件。",
      "question": "你會要求償還嗎？",
      "twist": "他們拿走了比他們立即需要的更多的東西。",
      "deeperQuestion": "必要性應該在什麼情況下限制財產權？"
    }
  },
  {
    "id": "ponder-moral-017",
    "category": "Moral",
    "emoji": "🕯️",
    "title": "The Misleading Photo",
    "scenario": "A charity uses an outdated photo that dramatically increases donations.\n\nYou want donations to reflect a real problem rather than a more photogenic past. The campaign's success would help people while teaching donors an inaccurate picture of what their help addresses.",
    "question": "Would you approve it?",
    "twist": "The current situation remains serious but looks less dramatic.",
    "deeperQuestion": "Can a truthful cause justify misleading presentation?",
    "zh": {
      "title": "誤導性照片",
      "scenario": "一家慈善機構使用一張過時的照片，結果捐款金額大幅上升。你希望捐款反映的是實際存在的問題，而不是更具吸引力的過往照片。這項活動的成功雖然能幫助人們，但卻讓捐贈者對他們的捐贈實際解決的問題產生了錯誤的認知。",
      "question": "你會批准嗎？",
      "twist": "目前的情況依然嚴峻，但看起來沒有那麼嚴重。",
      "deeperQuestion": "即使訴求真實而重要，就能使用誤導性的呈現方式嗎？"
    }
  },
  {
    "id": "ponder-moral-018",
    "category": "Moral",
    "emoji": "🚪",
    "title": "The Secret Shortcut",
    "scenario": "You discover a legal loophole that lowers only your tax bill.\n\nA professional assures you the arrangement is permitted and commonly used. Your discomfort comes from benefiting individually while depending on contributions that other people cannot similarly avoid.",
    "question": "Would you use it?",
    "twist": "Using it weakens a service you rely on.",
    "deeperQuestion": "Is legality enough to settle responsibility?",
    "zh": {
      "title": "秘密捷徑",
      "scenario": "你發現了一個法律漏洞，可以只降低你的稅負。一位專業人士向你保證，這種做法是合法且常見的。你的不安在於，你個人從中受益，卻依賴其他人無法同樣規避的稅金。",
      "question": "你會使用它嗎？",
      "twist": "使用它削弱了你所依賴的服務。",
      "deeperQuestion": "合法性足以決定責任嗎？"
    }
  },
  {
    "id": "ponder-moral-019",
    "category": "Moral",
    "emoji": "🌍",
    "title": "The Forgotten Promise",
    "scenario": "A friend forgets a promise that would greatly inconvenience them.\n\nThe promise once gave you important reassurance, even though your needs have changed. Enforcing it now might protect the seriousness of commitments while serving little practical purpose.",
    "question": "Would you remind them?",
    "twist": "You no longer need what they promised.",
    "deeperQuestion": "Is a promise binding after its purpose disappears?",
    "zh": {
      "title": "被遺忘的承諾",
      "scenario": "一位朋友忘記了一個會給他帶來極大不便的承諾。這個承諾曾經帶給你重要的安慰，儘管你的需求已經改變了。現在強制執行這個承諾或許能維護承諾的嚴肅性，但實際上意義不大。",
      "question": "你會提醒他們嗎？",
      "twist": "你不再需要他們承諾的東西了。",
      "deeperQuestion": "承諾的目的消失後，該承諾是否仍具有約束力？"
    }
  },
  {
    "id": "ponder-moral-020",
    "category": "Moral",
    "emoji": "🗝️",
    "title": "The Witness Gift",
    "scenario": "Someone you helped offers an expensive gift before you testify about their conduct.\n\nYou know the facts and believe your judgment cannot be bought. Others cannot inspect that confidence, and accepting may make honest testimony harder for them to trust.",
    "question": "Would you accept?",
    "twist": "Your account would remain completely honest.",
    "deeperQuestion": "Can appearances alone undermine trust?",
    "zh": {
      "title": "證人的禮物",
      "scenario": "一位你曾幫助的人，在你即將就其行為作證之前，送來一份昂貴禮物。你清楚事實，也相信自己不會因此改變說法。但其他人無法知道你心裡的把握，收下禮物可能令原本真實的證詞也受到懷疑。",
      "question": "你願意接受嗎？",
      "twist": "你提供的證詞仍然完全誠實。",
      "deeperQuestion": "即使沒有實際偏袒，單是看起來有利益關係，也足以破壞信任嗎？"
    }
  },
  {
    "id": "ponder-moral-021",
    "category": "Moral",
    "emoji": "🎟️",
    "title": "The Public Apology",
    "scenario": "A person privately makes amends but refuses a public apology.\n\nThe practical damage has been repaired, and you believe the effort was sincere. Yet people who witnessed the original event still have a misleading impression of what happened.",
    "question": "Is that enough?",
    "twist": "The original harm happened in public.",
    "deeperQuestion": "Who determines what meaningful repair requires?",
    "zh": {
      "title": "公開道歉",
      "scenario": "某人私下彌補，但拒絕公開道歉。實際造成的損失已經彌補，你也相信對方是真心的。然而，目睹事件發生的人仍然對事情的經過有誤解。",
      "question": "這樣夠嗎？",
      "twist": "最初的傷害發生在公共場所。",
      "deeperQuestion": "應該由誰決定，怎樣才算真正彌補了傷害？"
    }
  },
  {
    "id": "ponder-moral-022",
    "category": "Moral",
    "emoji": "🛟",
    "title": "The Biased Tool",
    "scenario": "A useful decision tool performs worse for a small group.\n\nThe tool improves on the current system overall, but its errors are concentrated rather than evenly shared. Those most affected have asked to help decide what counts as an acceptable trade-off.",
    "question": "Would you deploy it?",
    "twist": "Delaying also denies benefits to that group.",
    "deeperQuestion": "How should imperfect improvement be compared with waiting?",
    "zh": {
      "title": "有偏見的工具",
      "scenario": "一個有效的決策工具在小群體中表現不佳。該工具整體上比現有系統有所改進，但其誤差集中出現，而非均勻分佈。受影響最大的群體已要求參與決定何為可接受的權衡取捨。",
      "question": "你會部署它嗎？",
      "twist": "拖延也會剝奪該群體的利益。",
      "deeperQuestion": "不完全改進與等待有何不同？"
    }
  },
  {
    "id": "ponder-moral-023",
    "category": "Moral",
    "emoji": "📜",
    "title": "The Vacant House",
    "scenario": "An empty house could shelter a family while its owner lives abroad.\n\nThe house has stood unused while the family moves between temporary arrangements. You are not being asked to give away your own home, which makes your preferred solution easier to endorse.",
    "question": "Would you let them enter?",
    "twist": "The owner explicitly refuses despite no planned use.",
    "deeperQuestion": "Should unused resources carry special obligations?",
    "zh": {
      "title": "空房子",
      "scenario": "一間長期空置的房屋，可以暫時安置一個四處借住的家庭，而屋主一直住在海外。你想爭取讓他們入住，但房子並不屬於你。支持這個方案很容易，真正失去使用決定權的卻是另一個人。",
      "question": "你會讓他們進來嗎？",
      "twist": "即使沒有計劃使用，所有者也明確拒絕。",
      "deeperQuestion": "未使用的資源是否應承擔特殊義務？"
    }
  },
  {
    "id": "ponder-moral-024",
    "category": "Moral",
    "emoji": "🪙",
    "title": "The Inherited Advantage",
    "scenario": "You inherit a valuable opportunity created through an ancestor's wrongdoing.\n\nThe advantage now feels like an ordinary part of your life rather than evidence of history. Giving it up would not necessarily return the original loss to those who suffered it.",
    "question": "Would you surrender it?",
    "twist": "Several innocent relatives also depend on it.",
    "deeperQuestion": "Can responsibility be inherited with benefits?",
    "zh": {
      "title": "繼承優勢",
      "scenario": "你繼承了一個因先輩不當行為而產生的寶貴機會。如今，這份優勢對你而言已是習以為常，而非歷史的見證。放棄它未必能彌補那些遭受損失的人所承受的痛苦。",
      "question": "你會交出它嗎？",
      "twist": "幾個無辜的親戚也依靠它。",
      "deeperQuestion": "責任可以連同利益一起繼承嗎？"
    }
  },
  {
    "id": "ponder-moral-025",
    "category": "Moral",
    "emoji": "🌱",
    "title": "The Listening Device",
    "scenario": "A device detects danger by recording every conversation in a shared building.\n\nThe danger is real, and some residents strongly favor prevention. Others have sensitive conversations at home and would bear an ongoing privacy cost even when the system discovers nothing.",
    "question": "Would you install it?",
    "twist": "Residents cannot individually opt out.",
    "deeperQuestion": "How much consent should collective safety require?",
    "zh": {
      "title": "竊聽裝置",
      "scenario": "一種設備透過記錄共享建築內的所有對話來偵測危險。這種危險確實存在，一些居民強烈支持採取預防措施。另一些居民在家中進行敏感對話，即使系統沒有發現任何問題，他們也會持續承擔隱私外洩的風險。",
      "question": "你會安裝它嗎？",
      "twist": "居民不能單獨選擇退出。",
      "deeperQuestion": "集體安全需要多少同意？"
    }
  },
  {
    "id": "ponder-moral-026",
    "category": "Moral",
    "emoji": "⚖️",
    "title": "Repair Now or Prevent Later?",
    "scenario": "A community fund can repair ten leaking roofs immediately or improve drainage to reduce flood risk over several years. The first beneficiaries are identifiable; the second project’s benefits can only be estimated. You must propose a funding plan at a public meeting.",
    "question": "How would you allocate the money, and what information would you request first?",
    "twist": "New evidence suggests drainage has strong average benefits, but the most vulnerable households lie outside the improved area.",
    "deeperQuestion": "How should average benefit, urgent need, and the worst possible outcome shape a decision together?",
    "zh": {
      "title": "先救急，還是先預防？",
      "scenario": "社區只有一筆資金，可以立刻修理十戶漏水的屋頂，或改善排水系統，降低未來幾年大範圍水浸的風險。前者的受益者就在眼前，後者的效果只能估算。你要在公開會議提出分配方案。",
      "question": "你會如何分配？在決定前，最想補充哪一項資料？",
      "twist": "新的資料顯示，排水改善的平均效益很高，但最容易受災的住戶不在改善範圍內。",
      "deeperQuestion": "平均效益、最迫切的需要和最壞的結果，應如何一起影響決定？"
    }
  },
  {
    "id": "ponder-moral-027",
    "category": "Moral",
    "emoji": "🧭",
    "title": "The Rehabilitation Vote",
    "scenario": "Your community must decide whether to welcome someone who completed punishment.\n\nThe person returning has followed every requirement and needs somewhere to rebuild a life. Welcoming them without listening to the neighbor would make one person's fresh start feel like another's dismissal.",
    "question": "Would you support their return?",
    "twist": "A harmed neighbor is still afraid.",
    "deeperQuestion": "How should rehabilitation and continuing harm coexist?",
    "zh": {
      "title": "重新接納的投票",
      "scenario": "社區要投票決定，是否重新接納一位已服完刑罰的人。\n\n對方已完成所有要求，需要一個地方重新生活。但如果不聽取受影響鄰居的感受，就直接歡迎對方回來，一個人的重新開始，可能令另一個人覺得自己的痛苦被忽視。",
      "question": "你會支持他們回歸嗎？",
      "twist": "受害的鄰居仍然感到害怕。",
      "deeperQuestion": "我們應該如何兼顧更生的機會，和受害者仍未消退的傷痛？"
    }
  },
  {
    "id": "ponder-moral-028",
    "category": "Moral",
    "emoji": "🤝",
    "title": "The Volunteer Limit",
    "scenario": "A charity asks dependable volunteers to cover for people who repeatedly cancel.\n\nYou believe in the charity's work but notice that boundaries are easier for unreliable volunteers to maintain. Agreeing again helps today while preserving a pattern that may eventually exhaust you.",
    "question": "Would you agree again?",
    "twist": "Refusing means canceling a useful service.",
    "deeperQuestion": "Does need justify relying on the most responsible people?",
    "zh": {
      "title": "義工的界線",
      "scenario": "慈善機構要求一向可靠的義工，替經常臨時取消的人補位。\n\n你認同機構的工作，卻發現越不可靠的人，反而越容易保住自己的時間和界線。再次答應能解決眼前的問題，但也會延續這個可能令你筋疲力盡的模式。",
      "question": "你是否再次同意？",
      "twist": "拒絕意味著取消一項有用的服務。",
      "deeperQuestion": "需要是否足以證明依靠最負責任的人是合理的？"
    }
  },
  {
    "id": "ponder-moral-029",
    "category": "Moral",
    "emoji": "🕯️",
    "title": "The Secret Recording",
    "scenario": "Recording a conversation would prove a serious workplace problem.\n\nYou have tried ordinary reporting channels and been dismissed for lacking proof. The recording offers credibility while capturing people who had no reason to expect their private words to become evidence.",
    "question": "Would you record it?",
    "twist": "It also captures unrelated private disclosures.",
    "deeperQuestion": "Can evidence gathering create a different wrong?",
    "zh": {
      "title": "秘密錄音",
      "scenario": "錄下某次談話，可以證明一個嚴重的職場問題。你曾經循正式渠道反映，卻因證據不足而沒有結果。錄音能讓事情更有依據，但也可能收進其他人在不知情下說出的私人內容。",
      "question": "你會錄下來嗎？",
      "twist": "它也記錄了無關的私人揭露。",
      "deeperQuestion": "蒐集證據是否會造成另一種錯誤？"
    }
  },
  {
    "id": "ponder-moral-030",
    "category": "Moral",
    "emoji": "🚪",
    "title": "Rules Before Names",
    "scenario": "A school asks candidates to propose selection criteria anonymously before revealing names and scores. You recommend cooperation as the main quality for a student representative. The strongest candidate under that rule turns out to be someone you dislike; your close friend excels at public speaking instead.",
    "question": "Would you keep the rule or propose a change? What new reason could justify revising it?",
    "twist": "The anonymous discussion shows that your friend also originally prioritized cooperation.",
    "deeperQuestion": "When is changing a standard after seeing results genuine learning, and when is it favoritism?",
    "zh": {
      "title": "誰先訂下標準？",
      "scenario": "學校想評選學生代表，先請候選人匿名提出評分標準，再公開姓名和成績。你建議重視合作能力，結果發現最符合這個標準的人，正是你不太喜歡的同學；另一位好朋友則在公開演說方面特別出色。",
      "question": "你會保留原來的標準，還是提出修改？甚麼新理由才足以支持改規則？",
      "twist": "匿名討論的紀錄顯示，你的好朋友當初也支持合作能力優先。",
      "deeperQuestion": "知道結果後才改變判準，甚麼時候是學會了更多，甚麼時候是偏袒？"
    }
  },
  {
    "id": "ponder-moral-031",
    "category": "Moral",
    "emoji": "🌍",
    "title": "The Park Fence",
    "scenario": "A fence protects rare plants but blocks a neighborhood's accessible walking route.\n\nThe plants are genuinely threatened, and the route serves people with limited alternatives. Choosing the cheapest conservation measure would distribute its inconvenience very unevenly across the neighborhood.",
    "question": "Would you approve it?",
    "twist": "An alternative route costs much more.",
    "deeperQuestion": "How should conservation account for unequal inconvenience?",
    "zh": {
      "title": "公園圍欄",
      "scenario": "一道圍欄保護了稀有植物，但卻阻礙了附近居民的步行通道。這些植物確實面臨生存威脅，而這條通道服務於出行選擇有限的居民。選擇成本最低的保護措施會對整個社區造成極不均衡的不便。",
      "question": "你會批准嗎？",
      "twist": "另一條路線的成本則高得多。",
      "deeperQuestion": "保護措施應如何考慮不平等的不便？"
    }
  },
  {
    "id": "ponder-moral-032",
    "category": "Moral",
    "emoji": "🗝️",
    "title": "The Emergency Lie",
    "scenario": "You lie to keep someone calm during a temporary emergency.\n\nYou want the person to remain calm enough to act safely. But an inaccurate reassurance may prevent them from making a decision they would consider essential if fully informed.",
    "question": "Would you do it?",
    "twist": "They would make a different choice with the truth.",
    "deeperQuestion": "Can reassurance wrongfully remove agency?",
    "zh": {
      "title": "緊急謊言",
      "scenario": "在緊急情況下，你為了讓對方保持冷靜而說謊。你希望對方能夠保持冷靜，從而採取安全行動。但是，不準確的安慰可能會妨礙他們做出在充分了解情況後會認為至關重要的決定。",
      "question": "你會這麼做嗎？",
      "twist": "如果知道真相，他們會做出不同的選擇。",
      "deeperQuestion": "保證能否不當剝奪自主權？"
    }
  },
  {
    "id": "ponder-moral-033",
    "category": "Moral",
    "emoji": "🎟️",
    "title": "The Uneven Rule",
    "scenario": "A useful rule harms one unusual case it was never designed for.\n\nYou helped design the rule and know why consistency matters. The exceptional case now forces you to explain whether the rule exists to serve people or to avoid difficult judgment.",
    "question": "Would you allow an exception?",
    "twist": "Others will demand similar exceptions.",
    "deeperQuestion": "Is consistency valuable when it produces avoidable harm?",
    "zh": {
      "title": "不公平的規則",
      "scenario": "一條通常合理的規則，在一個當初沒想到的特殊情況下，反而造成傷害。你參與過訂立規則，也明白一致執行的重要。如今你要解釋，應該為個別情況破例，還是維持大家原本可以預期的做法。",
      "question": "你是否允許例外？",
      "twist": "其他人也會要求類似的例外。",
      "deeperQuestion": "當一致性造成可避免的傷害時，它還有價值嗎？"
    }
  },
  {
    "id": "ponder-moral-034",
    "category": "Moral",
    "emoji": "🛟",
    "title": "The Family Business",
    "scenario": "You can hire a qualified relative or a slightly better stranger.\n\nYou are grateful for support that came when you had little to offer in return. The stranger has no comparable personal connection through which their qualifications can become emotionally visible.",
    "question": "Who gets the job?",
    "twist": "Your relative supported you during hardship.",
    "deeperQuestion": "When is gratitude unfair to outsiders?",
    "zh": {
      "title": "家族企業",
      "scenario": "你可以聘請一位符合要求的親戚，或一位條件稍好的陌生人。那位親戚曾在你困難時支持你，而這份工作對兩人都很重要。你要決定，自己私人欠下的恩情，應在一個對外開放的機會中佔多少分量。",
      "question": "誰能得到這份工作？",
      "twist": "你的親戚在你困難的時候支持你。",
      "deeperQuestion": "報答親人的恩情，在甚麼情況下會對外人不公平？"
    }
  },
  {
    "id": "ponder-moral-035",
    "category": "Moral",
    "emoji": "📜",
    "title": "The Fair Lottery",
    "scenario": "A lottery allocates scarce housing without considering urgency.\n\nA lottery is easy to audit, but people facing very different circumstances receive identical odds. A ranking may be more responsive while giving decision-makers power they could misuse.",
    "question": "Would you support it?",
    "twist": "Need-based rankings are vulnerable to bias.",
    "deeperQuestion": "Is random fairness better than imperfect judgment?",
    "zh": {
      "title": "公平抽籤",
      "scenario": "抽籤分配稀少住房時，並未考慮緊急程度。抽籤易於審計，但處境迥異的人獲得相同的中籤機率。排名分配可能更具靈活性，但同時也賦予決策者可能被濫用的權力。",
      "question": "你會支持嗎？",
      "twist": "基於需求的排名容易受到偏見的影響。",
      "deeperQuestion": "隨機公平是否優於不完美的判斷？"
    }
  },
  {
    "id": "ponder-moral-036",
    "category": "Moral",
    "emoji": "🪙",
    "title": "The Wrong Recipient",
    "scenario": "You receive confidential information proving a company misled customers.\n\nThe documents are not yours, but the harm they reveal affects people who deserve accurate information. Publishing everything would be simpler than separating relevant evidence from unrelated personal details.",
    "question": "Would you share it?",
    "twist": "The information also exposes innocent employees.",
    "deeperQuestion": "What should accountability protect from collateral harm?",
    "zh": {
      "title": "收件者錯誤",
      "scenario": "你收到一份機密訊息，證明一家公司誤導了客戶。這些文件並非你所有，但它們所揭示的損害會影響到那些理應獲得準確資訊的人。與其費力地將相關證據與無關的個人資訊區分開來，不如直接公佈所有文件來得簡單。",
      "question": "你願意分享嗎？",
      "twist": "該資訊還會牽連無辜的員工。",
      "deeperQuestion": "問責制應該保護哪些方面免受附帶損害？"
    }
  },
  {
    "id": "ponder-moral-037",
    "category": "Moral",
    "emoji": "🌱",
    "title": "Does Consent Expire?",
    "scenario": "Years ago you agreed to a community study about transport. Researchers now want to reuse the answers to predict residents’ intentions to move. The aim still benefits the neighborhood, but differs from what you understood. Contacting everyone again would be difficult and might leave gaps.",
    "question": "Would you require fresh consent, allow only anonymous use, or permit the new study? Where is the boundary?",
    "twist": "Even without names, combining answers with public records could identify a few participants.",
    "deeperQuestion": "How should an earlier agreement adapt when purposes, technology, and time change?",
    "zh": {
      "title": "同意有保存期限嗎？",
      "scenario": "幾年前，你同意一個社區研究收集自己對交通的看法。現在研究團隊想把資料用來預測居民的搬遷意願，目的仍是改善社區，但和你當時理解的用途不同。重新聯絡所有人很費時，也未必聯絡得到。",
      "question": "你會要求重新取得同意、只用匿名資料，還是允許延伸研究？界線在哪裡？",
      "twist": "即使刪掉姓名，把資料和公開紀錄比對，仍可能推測出少數人的身分。",
      "deeperQuestion": "一個原本合理的同意，應如何隨用途、技術和時間改變？"
    }
  },
  {
    "id": "ponder-moral-038",
    "category": "Moral",
    "emoji": "⚖️",
    "title": "The Noise Complaint",
    "scenario": "A neighbor practices music loudly to prepare for their only scholarship audition.\n\nYou value both education and the basic need for rest. Framing the problem as dedication versus intolerance would erase the fact that neither neighbor can easily change their circumstances.",
    "question": "Would you complain?",
    "twist": "Another neighbor needs daytime sleep after night work.",
    "deeperQuestion": "How should competing legitimate needs be balanced?",
    "zh": {
      "title": "噪音投訴",
      "scenario": "鄰居正大聲練習樂器，準備唯一一次爭取獎學金的演奏考試。另一位鄰居剛下夜班，需要白天睡覺。你同時理解機會和休息的重要，也知道雙方都不容易改時間，不能簡單把其中一方說成不體諒別人。",
      "question": "你會抱怨嗎？",
      "twist": "另一位鄰居上夜班後也需要白天睡覺。",
      "deeperQuestion": "如何平衡相互衝突的合法需求？"
    }
  },
  {
    "id": "ponder-moral-039",
    "category": "Moral",
    "emoji": "🧭",
    "title": "The Forgotten Debt",
    "scenario": "An old debt would seriously burden your friend but barely help you.\n\nYou could forgive the debt without hardship and dislike monitoring another person's spending. Their purchase nevertheless makes forgiveness feel less like compassion and more like absorbing priorities you would not choose.",
    "question": "Would you forgive it?",
    "twist": "They recently spent money on a luxury.",
    "deeperQuestion": "Does generosity depend on approving someone's choices?",
    "zh": {
      "title": "被遺忘的債務",
      "scenario": "一筆舊債會給你的朋友造成沉重的負擔，但對你卻幾乎毫無幫助。你可以輕鬆地免除這筆債務，你也不喜歡監督別人的消費。然而，他們的消費讓你覺得免除債務與其說是出於同情，不如說是被迫承擔了你原本不會選擇的消費。",
      "question": "你會免除這筆債務嗎？",
      "twist": "他們最近花錢買了奢侈品。",
      "deeperQuestion": "慷慨是否取決於認可他人的選擇？"
    }
  },
  {
    "id": "ponder-moral-040",
    "category": "Moral",
    "emoji": "🤝",
    "title": "The Public Mistake",
    "scenario": "A leader admits an error that others would successfully conceal.\n\nThe admission allows damage to be addressed sooner than continued concealment would. A fair response must consider the mistake itself and the incentive created for the next person deciding whether to disclose one.",
    "question": "Should they face harsher consequences?",
    "twist": "Punishing disclosure may encourage future secrecy.",
    "deeperQuestion": "How can accountability reward honesty without excusing harm?",
    "zh": {
      "title": "公眾的錯誤",
      "scenario": "一位領導者承認了一個其他人會成功掩蓋的錯誤。這種承認使得損害能夠比繼續隱瞞更快解決。一個公平的回應必須考慮錯誤本身，以及對下一個決定是否揭露錯誤的人所產生的動機。",
      "question": "他們是否應該面臨更嚴厲的懲罰？",
      "twist": "如果坦白錯誤反而受罰，其他人以後可能更不願說出實情。",
      "deeperQuestion": "我們如何鼓勵坦白承認錯誤，同時仍追究造成傷害的責任？"
    }
  },
  {
    "id": "ponder-moral-041",
    "category": "Moral",
    "emoji": "🕯️",
    "title": "The Scarce Charger",
    "scenario": "During an outage, your battery can power entertainment or a stranger's work call.\n\nYou planned carefully because power is unreliable, while the stranger did not have the same opportunity. Lending the charge would use a resource you prepared without promising it to anyone else.",
    "question": "Would you lend it?",
    "twist": "You saved that battery through careful planning.",
    "deeperQuestion": "Does preparation create a stronger entitlement to resources?",
    "zh": {
      "title": "稀缺充電器",
      "scenario": "停電期間，你的電池可以為娛樂設備或陌生人的工作電話供電。你事先做了周密的計劃，因為電力供應不穩定，而陌生人卻沒有這樣的機會。借出你的電池電量，就相當於動用了你事先準備好的資源，而你並沒有承諾將其提供給其他人。",
      "question": "你會把它借出去嗎？",
      "twist": "你透過周密的計畫節省了那顆電池。",
      "deeperQuestion": "準備是否能增強取得資源的權利？"
    }
  },
  {
    "id": "ponder-moral-042",
    "category": "Moral",
    "emoji": "🚪",
    "title": "The Unwanted Rescue",
    "scenario": "You can stop someone making a risky but informed choice.\n\nYou disagree with the choice but recognize that the person understands the risks. Intervention could protect them from a bad outcome while teaching them that your judgment overrides their consent.",
    "question": "Would you intervene?",
    "twist": "They explicitly asked you not to.",
    "deeperQuestion": "When does preventing harm become denying autonomy?",
    "zh": {
      "title": "不受歡迎的救援",
      "scenario": "你可以阻止他人做出有風險但經過深思熟慮的選擇。你不同意這個選擇，但承認對方了解其中的風險。介入可以保護他們免受不良後果，同時也能讓他們明白，你的判斷優先於他們的意願。",
      "question": "你會介入嗎？",
      "twist": "他們明確要求你不要這樣做。",
      "deeperQuestion": "防止傷害何時變成剝奪自主權？"
    }
  },
  {
    "id": "ponder-moral-043",
    "category": "Moral",
    "emoji": "🌍",
    "title": "The Duplicate Ticket",
    "scenario": "A ticketing error lets both you and another person claim one seat.\n\nNeither person caused the error, and both relied reasonably on a valid ticket. Your travel costs make the loss feel larger without proving that your claim was stronger at the start.",
    "question": "Who should keep it?",
    "twist": "You traveled farther; they booked earlier.",
    "deeperQuestion": "Which kinds of investment should determine fairness?",
    "zh": {
      "title": "重複的門票",
      "scenario": "售票系統出錯，讓你和另一位觀眾拿到同一個座位的有效門票。誰也沒有做錯，你走了更遠的路，對方則更早預訂。大家都覺得自己放棄的代價比較大，卻沒有一個事先約好的原則可以依循。",
      "question": "誰應該保管它？",
      "twist": "你走得更遠；他們預訂得更早。",
      "deeperQuestion": "哪些類型的投資應該決定公平性？"
    }
  },
  {
    "id": "ponder-moral-044",
    "category": "Moral",
    "emoji": "🗝️",
    "title": "The Private Prejudice",
    "scenario": "A person behaves fairly but privately holds prejudiced beliefs.\n\nYou can observe the effort they make to prevent unfair treatment, but cannot know every private thought. Judging them forces a distinction between a person's unwanted reactions and their deliberate commitments.",
    "question": "How should you judge them?",
    "twist": "Their fairness requires conscious effort.",
    "deeperQuestion": "Is character defined by impulses or chosen behavior?",
    "zh": {
      "title": "私人偏見",
      "scenario": "一個人行為舉止公正，但私下卻持偏見。你可以觀察到他們為避免不公平待遇所做的努力，但你無法了解他們所有的內心想法。對他們進行評判，就必須區分他們無意間做出的反應和他們深思熟慮的意願。",
      "question": "你該如何評斷他們？",
      "twist": "他們的公平需要有意識的努力。",
      "deeperQuestion": "性格是由衝動決定的還是由選擇的行為決定的？"
    }
  },
  {
    "id": "ponder-moral-045",
    "category": "Moral",
    "emoji": "🎟️",
    "title": "The Cheap Shirt",
    "scenario": "An affordable shirt may involve exploitative labor you cannot fully verify.\n\nYou want your spending to align with your values, but reliable information and affordable alternatives are limited. Refusing every uncertain purchase would affect your own basic needs more than someone wealthier's.",
    "question": "Would you buy it?",
    "twist": "The ethical alternative exceeds your budget.",
    "deeperQuestion": "How should responsibility change with available choices?",
    "zh": {
      "title": "廉價襯衫",
      "scenario": "一件價格低廉的襯衫可能涉及你無法完全核實的剝削性勞動。你希望自己的消費與價值觀相符，但可靠的資訊和價格合理的替代品卻十分有限。拒絕每一筆不確定的消費，對自身基本需求的影響，遠大於對富裕人士的影響。",
      "question": "你會買嗎？",
      "twist": "符合道德規範的替代方案超出了你的預算。",
      "deeperQuestion": "隨著可供選擇的方案增多，責任該如何改變？"
    }
  },
  {
    "id": "ponder-moral-046",
    "category": "Moral",
    "emoji": "🛟",
    "title": "The Common Water",
    "scenario": "A town asks everyone to conserve water while one resident ignores the request.\n\nYou already changed routines and accepted inconvenience in good faith. Seeing waste nearby makes your sacrifice feel less effective, even though the shortage has not become less real.",
    "question": "Would you keep conserving?",
    "twist": "Your sacrifice barely affects the shortage alone.",
    "deeperQuestion": "Does others' noncooperation reduce your own obligation?",
    "zh": {
      "title": "大家共用的水",
      "scenario": "一個小鎮呼籲全鎮居民節約用水，卻有一位居民置若罔聞。你已經本著誠意改變了生活習慣，接受了不便。看到身邊有人浪費水，讓你覺得自己的付出毫無意義，儘管缺水問題依然嚴峻。",
      "question": "你會繼續節省嗎？",
      "twist": "你的犧牲對解決短缺問題幾乎沒有任何幫助。",
      "deeperQuestion": "他人的不合作是否會減輕你自己的義務？"
    }
  },
  {
    "id": "ponder-moral-047",
    "category": "Moral",
    "emoji": "📜",
    "title": "The Warning Label",
    "scenario": "A product is safe for most but harmful to a few informed users.\n\nThe product offers genuine benefits to people who understand the risk. A ban protects some users while preventing others from deciding that the same risk is acceptable in their circumstances.",
    "question": "Would you ban it?",
    "twist": "A clear warning would protect many but not everyone.",
    "deeperQuestion": "How much risk should informed adults control themselves?",
    "zh": {
      "title": "警告標籤",
      "scenario": "某產品對大多數人來說是安全的，但對少數了解風險的使用者有害。該產品能為了解風險的人帶來真正的益處。禁令保護了部分用戶，但同時也阻止了其他用戶認為同樣的風險在他們的情況下是可以接受的。",
      "question": "你會禁止它嗎？",
      "twist": "明確的警告可以保護很多人，但不能保護所有人。",
      "deeperQuestion": "知情的成年人應該控制多少風險？"
    }
  },
  {
    "id": "ponder-moral-048",
    "category": "Moral",
    "emoji": "🪙",
    "title": "The Neighborhood Fund",
    "scenario": "A shared fund can fix many minor problems or one person's major hardship.\n\nPeople supported the fund because they expected their own contributions to matter. The urgent case challenges whether mutual support is insurance purchased through participation or a response to need wherever it appears.",
    "question": "Which should it address?",
    "twist": "The person with major hardship contributed least.",
    "deeperQuestion": "Should contributions affect access to collective care?",
    "zh": {
      "title": "鄰里基金",
      "scenario": "社區共同基金可以處理很多人的小問題，或集中幫助一位陷入嚴重困境的居民。大家捐錢時，都希望自己的投入會有用。現在你們要釐清，這筆錢主要是互相分擔日常需要，還是優先幫助最急需的人。",
      "question": "它應該解決哪個問題？",
      "twist": "處境最艱難的人貢獻最少。",
      "deeperQuestion": "繳費是否應該影響獲得集體照護的機會？"
    }
  },
  {
    "id": "ponder-moral-049",
    "category": "Moral",
    "emoji": "🌱",
    "title": "The Leaked Exam",
    "scenario": "You accidentally see tomorrow's exam questions.\n\nYour preparation has already changed because of what you saw. Reporting it might require a new exam for everyone, making honesty feel costly to people who did nothing wrong.",
    "question": "Would you report it?",
    "twist": "You cannot erase what you learned.",
    "deeperQuestion": "Can someone restore fairness after an unavoidable advantage?",
    "zh": {
      "title": "外洩的試題",
      "scenario": "你不小心看到了明天的考題。由於看到了這些考題，你的準備計劃已經改變了。如果向上級匯報，可能會導致所有人重考，這會讓那些沒有做錯任何事的人覺得誠實代價高昂。",
      "question": "你會檢舉嗎？",
      "twist": "你無法抹去你所學到的東西。",
      "deeperQuestion": "在獲得不可避免的優勢之後，能否恢復公平？"
    }
  },
  {
    "id": "ponder-moral-050",
    "category": "Moral",
    "emoji": "⚖️",
    "title": "The Forged Compliment",
    "scenario": "You invent praise from a respected person to encourage a struggling artist.\n\nThe artist now trusts the supposed endorsement as evidence that their work deserved attention. Revealing the invention could respect their agency while shaking confidence built on a false source.",
    "question": "Would you tell the truth later?",
    "twist": "The encouragement helped them create excellent work.",
    "deeperQuestion": "Can beneficial deception create a debt of honesty?",
    "zh": {
      "title": "偽造的讚美",
      "scenario": "你捏造了一位受人尊敬的人的讚揚，以此鼓勵一位苦苦掙扎的藝術家。這位藝術家現在相信了這份所謂的認可，並將其視為自己作品值得關注的證據。揭露真相既能尊重他們的自主權，又能動搖他們建立在虛假來源之上的自信。",
      "question": "你以後會說出真相嗎？",
      "twist": "這種鼓勵幫助他們創作出了優秀的作品。",
      "deeperQuestion": "有益的欺騙能否造成誠實的債務？"
    }
  },
  {
    "id": "ponder-moral-051",
    "category": "Moral",
    "emoji": "🧭",
    "title": "The Unpopular Client",
    "scenario": "You disagree strongly with a client's harmless beliefs.\n\nYou would rather spend your working hours around people whose views you respect. Refusal becomes harder to justify when the requested service itself is ordinary and causes no harm.",
    "question": "Would you refuse their business?",
    "twist": "Your refusal may start a wider boycott.",
    "deeperQuestion": "Where should personal conscience limit ordinary service?",
    "zh": {
      "title": "不受歡迎的客戶",
      "scenario": "你強烈反對客戶一些無害的觀點。你更願意把工作時間花在那些你尊重其觀點的人身上。當所要求的服務本身很普通且不會造成任何傷害時，拒絕就更難說得通了。",
      "question": "你會拒絕他們的生意嗎？",
      "twist": "你的拒絕可能會引發更大範圍的抵制。",
      "deeperQuestion": "個人良心應該在什麼程度上限制普通服務？"
    }
  },
  {
    "id": "ponder-moral-052",
    "category": "Moral",
    "emoji": "🤝",
    "title": "The Shared Risk",
    "scenario": "Your team can attempt a project whose risks fall mostly on junior members.\n\nSenior members receive most of the recognition if the project succeeds. The decision asks whether a signed agreement can settle fairness when people face very different costs for declining.",
    "question": "Would you proceed?",
    "twist": "Everyone consents, but juniors fear appearing uncommitted.",
    "deeperQuestion": "How freely can people consent under unequal power?",
    "zh": {
      "title": "共同風險",
      "scenario": "你的團隊可以嘗試一個項目，該項目的風險主要由初級成員承擔。如果專案成功，資深成員將獲得大部分榮譽。該決定提出的問題是，當人們因拒絕而面臨的成本差異很大時，簽署協議是否能夠確保公平。",
      "question": "你願不願意繼續？",
      "twist": "所有人都表示同意，但資歷較淺的同事害怕拒絕會顯得不夠投入。",
      "deeperQuestion": "在權力不平等的情況下，人們能夠自由地表達同意嗎？"
    }
  },
  {
    "id": "ponder-moral-053",
    "category": "Moral",
    "emoji": "🕯️",
    "title": "The Hidden Error",
    "scenario": "A harmless error appears in a report nobody is likely to revisit.\n\nThe correction is small, but you worry readers will overreact and discount careful work. Protecting the report's reputation may conflict with treating its audience as capable of judging a disclosed mistake.",
    "question": "Would you correct it?",
    "twist": "Correction might make people doubt accurate parts.",
    "deeperQuestion": "Should maintaining trust ever involve withholding mistakes?",
    "zh": {
      "title": "隱藏的錯誤",
      "scenario": "不太可能有人會重新審查的報告中出現了一個無傷大雅的錯誤。更正的內容很小，但你擔心讀者會反應過度，從而忽略了嚴謹的工作。維護報告的聲譽可能與尊重讀者對已揭露錯誤的判斷能力相衝突。",
      "question": "你會主動糾正這個錯誤嗎？",
      "twist": "一旦公開更正，人們可能連原本準確的部分也開始懷疑。",
      "deeperQuestion": "維護信任是否應該包含隱瞞錯誤？"
    }
  },
  {
    "id": "ponder-moral-054",
    "category": "Moral",
    "emoji": "🚪",
    "title": "The Costly Search",
    "scenario": "Your group can keep searching for one missing item or catch the last bus.\n\nYou are tired and do not share the object's emotional meaning. Remaining together would express care, while leaving would preserve a plan everyone had already agreed to follow.",
    "question": "Would you stay?",
    "twist": "The item matters deeply to only one person.",
    "deeperQuestion": "How much should a group sacrifice for individual meaning?",
    "zh": {
      "title": "代價高昂的搜索",
      "scenario": "你們小組可以選擇繼續尋找遺失的物品，也可以選擇搭乘末班車。你們都很累，對這件物品的情感意義並不認同。繼續待在一起可以表達關心，而離開則可以維護大家之前已經商定好的計劃。",
      "question": "你會留下來嗎？",
      "twist": "這件物品對一個人來說意義重大。",
      "deeperQuestion": "一個群體為了個人意義應該做出多大的犧牲？"
    }
  },
  {
    "id": "ponder-moral-055",
    "category": "Moral",
    "emoji": "🌍",
    "title": "The Missing Votes",
    "scenario": "A park vote favors adding a sports court. You discover that voting was online only, and some older residents who regularly use the park never heard about it. Work has not begun, but reopening the decision would delay everything and might produce the same result.",
    "question": "Would you rerun the vote, add consultation, or proceed? What would count as an adequate remedy?",
    "twist": "Some excluded residents also support the court; they simply do not want silence mistaken for having no opinion.",
    "deeperQuestion": "If the outcome may be right but the process was unfair, what still needs repair?",
    "zh": {
      "title": "被漏算的一票",
      "scenario": "公園改建投票已結束，多數人支持增設球場。你發現投票只接受網上提交，經常在公園休息的部分長者並不知道有投票。工程尚未開始，但重辦會令所有安排延後，也可能得出相同結果。",
      "question": "你會重辦投票、加開諮詢，還是照結果進行？怎樣判斷補救是否足夠？",
      "twist": "有長者說自己也支持球場，只是不希望別人把他們的沉默當成沒有意見。",
      "deeperQuestion": "一個結果可能正確，但產生它的過程不公平，仍然需要重來嗎？"
    }
  },
  {
    "id": "ponder-moral-056",
    "category": "Moral",
    "emoji": "🗝️",
    "title": "The Dangerous Reputation",
    "scenario": "Someone is widely distrusted for an action they did not commit.\n\nYou know enough to correct the story, but not enough to stop every rumor. Public support may change how others see you before it changes how they see the person accused.",
    "question": "Would you defend them publicly?",
    "twist": "Doing so risks your own reputation.",
    "deeperQuestion": "How much personal cost does fairness demand?",
    "zh": {
      "title": "危險的名聲",
      "scenario": "某人因其未犯之事而受到廣泛質疑。你掌握的資訊足以澄清事實，但不足以平息所有謠言。大眾的支持或許會先改變他人對你的看法，然後再改變他們對被指控者的看法。",
      "question": "你會公開為他們辯護嗎？",
      "twist": "這樣做會損害你自己的聲譽。",
      "deeperQuestion": "公平需要付出多少個人代價？"
    }
  },
  {
    "id": "ponder-moral-057",
    "category": "Moral",
    "emoji": "🎟️",
    "title": "The Consent Form",
    "scenario": "People agree to lengthy terms they clearly have not understood.\n\nThe agreement technically lists every condition, yet understanding it requires time and expertise most users lack. You benefit from their signatures while knowing the appearance of choice may exceed the reality.",
    "question": "Would you rely on their agreement?",
    "twist": "Simpler terms would make fewer people sign.",
    "deeperQuestion": "Is formal consent enough without meaningful understanding?",
    "zh": {
      "title": "同意書",
      "scenario": "人們同意了一些他們顯然不理解的冗長條款。協議表面上列出了所有條件，但要理解這些條件需要時間和專業知識，而大多數使用者恰恰缺乏這些。你從他們的簽名中獲益，卻也明白表面上的選擇權可能與實際情況大相逕庭。",
      "question": "你會單憑他們簽下的同意，就繼續進行嗎？",
      "twist": "較簡單的條款會導致簽署的人減少。",
      "deeperQuestion": "缺乏有意義的理解，形式上的同意是否足夠？"
    }
  },
  {
    "id": "ponder-moral-058",
    "category": "Moral",
    "emoji": "🛟",
    "title": "The Second Chance",
    "scenario": "You can offer one second chance to a remorseful person or a consistently reliable one.\n\nReliability deserves recognition, especially when it has gone unnoticed for years. A second chance also means something different for a person who has rarely received a fair first one.",
    "question": "Who gets it?",
    "twist": "The remorseful person had far fewer earlier opportunities.",
    "deeperQuestion": "Should compassion compensate for unequal histories?",
    "zh": {
      "title": "第二次機會",
      "scenario": "你可以給一個真心悔過的人或一個始終可靠的人一次機會。可靠性值得肯定，尤其是在多年被忽視的情況下。對於一個很少得到公平第一次機會的人來說，第二次機會的意義也截然不同。",
      "question": "誰能得到它？",
      "twist": "悔恨之人之前的機會少很多。",
      "deeperQuestion": "同情心是否應該彌補不平等的歷史？"
    }
  },
  {
    "id": "ponder-moral-059",
    "category": "Moral",
    "emoji": "📜",
    "title": "The Unpaid Favor",
    "scenario": "A friend asks you to use professional skills for free.\n\nYou enjoy helping but earn your living from the same time and skill being requested. Saying no may sound transactional even when preserving boundaries helps you avoid resenting the friendship.",
    "question": "Would you help?",
    "twist": "They would gladly help you in a different way.",
    "deeperQuestion": "When should friendship include unpaid expertise?",
    "zh": {
      "title": "未償還的人情",
      "scenario": "朋友請你免費使用你的專業技能。你樂於助人，但你也需要依靠同樣的時間和技能來維持生計。拒絕可能聽起來像是在做交易，但堅守界線能讓你避免對這段友誼心生怨恨。",
      "question": "你會幫忙嗎？",
      "twist": "他們很樂意以另一種方式幫助你。",
      "deeperQuestion": "友誼何時應該包含無償的專業技能？"
    }
  },
  {
    "id": "ponder-moral-060",
    "category": "Moral",
    "emoji": "🪙",
    "title": "The Community Camera",
    "scenario": "A camera would deter theft but monitor a peaceful gathering space.\n\nTheft has harmed residents, and the camera may genuinely deter it. Future viewers of the recordings might judge perfectly lawful behavior in ways the people filmed never anticipated.",
    "question": "Would you support it?",
    "twist": "Recorded footage can later be used for unrelated purposes.",
    "deeperQuestion": "How should future uses affect present consent?",
    "zh": {
      "title": "社區攝影機",
      "scenario": "攝影機可以起到威懾盜竊的作用，但也會監控一個和平的聚會場所。竊盜行為已經對居民造成了傷害，而攝影機或許確實能起到威懾作用。但未來觀看錄影的人可能會對完全合法的行為做出被拍攝者始料未及的評判。",
      "question": "你會支持嗎？",
      "twist": "錄製的影像可用於其他用途。",
      "deeperQuestion": "未來的使用應該如何影響目前的同意？"
    }
  },
  {
    "id": "ponder-moral-061",
    "category": "Moral",
    "emoji": "🌱",
    "title": "The Protest Delay",
    "scenario": "A peaceful protest delays people reaching important appointments.\n\nThe cause matters to you, but the delayed people did not create the problem. Disruption may create attention precisely by imposing costs on people who cannot easily opt out.",
    "question": "Would you participate?",
    "twist": "Less disruptive protests have been ignored.",
    "deeperQuestion": "When is inconvenience an acceptable tool for change?",
    "zh": {
      "title": "抗議延遲",
      "scenario": "和平抗議會耽誤人們赴約。你或許認同抗議的訴求，但被耽擱的人並非問題的製造者。擾亂秩序或許能透過為那些難以置身事外的人帶來損失來吸引關注。",
      "question": "你願意參加嗎？",
      "twist": "擾亂性較小的抗議活動被忽視了。",
      "deeperQuestion": "為了推動改變，甚麼程度的不便可以接受？"
    }
  },
  {
    "id": "ponder-moral-062",
    "category": "Moral",
    "emoji": "⚖️",
    "title": "The Old Agreement",
    "scenario": "A fair agreement becomes one-sided after circumstances change.\n\nYou accepted the original terms freely and organized your plans around them. Insisting on them now might respect the agreement's wording while ignoring the conditions that made it reasonable.",
    "question": "Would you renegotiate?",
    "twist": "You are the person who benefits now.",
    "deeperQuestion": "Does fairness require revisiting freely accepted terms?",
    "zh": {
      "title": "舊協議",
      "scenario": "情況改變後，原本公平的協議可能會變得不公平。你當初是自願接受協議條款並圍繞這些條款制定計劃的。現在堅持這些條款，或許表面上尊重了協議的措辭，但卻忽略了使協議合理的那些條件。",
      "question": "你會重新談判嗎？",
      "twist": "現在受益的是你自己。",
      "deeperQuestion": "公平是否需要重新檢視自由接受的條款？"
    }
  },
  {
    "id": "ponder-moral-063",
    "category": "Moral",
    "emoji": "🧭",
    "title": "The Mistaken Identity",
    "scenario": "A stranger thanks you for another person's generous act.\n\nThe stranger's gratitude is touching, and interrupting feels socially awkward. Letting it stand may quietly turn another person's care into a story that improves your own reputation.",
    "question": "Would you correct them?",
    "twist": "They are too distressed for a long explanation.",
    "deeperQuestion": "Does a small false impression require immediate correction?",
    "zh": {
      "title": "身分錯認",
      "scenario": "一位陌生人把你誤認成曾經幫助自己的人，真誠地向你道謝。你被這份感情打動，也怕打斷會讓場面尷尬。但如果不澄清，你就會無意間把別人的善意，變成自己得到的感激和好名聲。",
      "question": "你會向他們澄清嗎？",
      "twist": "他們情緒激動，無法進行長時間的解釋。",
      "deeperQuestion": "輕微的錯誤印象是否需要立即修正？"
    }
  },
  {
    "id": "ponder-moral-064",
    "category": "Moral",
    "emoji": "🤝",
    "title": "The Rescue Priority",
    "scenario": "Two people need help; one caused the emergency through carelessness.\n\nYou feel anger at the careless choice and sympathy for the person affected by it. Acting urgently requires deciding whether assistance responds to present need or the history that produced it.",
    "question": "Whom would you help first?",
    "twist": "Their need is more urgent.",
    "deeperQuestion": "Should blame influence urgent assistance?",
    "zh": {
      "title": "救援優先事項",
      "scenario": "兩人需要幫助；其中一人因疏忽大意引發了這場緊急情況。你既對這種疏忽大意的行為感到憤怒，也對受影響的人表示同情。當務之急是採取行動，需要決定援助是針對當前的需求，還是針對造成這種需求的過往歷史。",
      "question": "你會先幫助誰？",
      "twist": "他們的需求更加迫切。",
      "deeperQuestion": "追究責任是否應影響緊急援助？"
    }
  },
  {
    "id": "ponder-moral-065",
    "category": "Moral",
    "emoji": "🕯️",
    "title": "The Free Labor",
    "scenario": "An unpaid internship offers experience but excludes people needing income.\n\nThe work could teach useful skills and expand a participant's network. Advertising it as open to everyone hides that only some people can afford to take the opportunity offered.",
    "question": "Would you offer it?",
    "twist": "Your small organization cannot pay anyone yet.",
    "deeperQuestion": "Can opportunity remain unfair even when sincerely offered?",
    "zh": {
      "title": "無薪工作",
      "scenario": "無薪實習雖然能提供經驗，但卻將需要收入的人拒於門外。這份工作可以教導有用的技能，並拓展參與者的人脈。如果宣傳面向所有人開放，則掩蓋了只有部分人能夠承擔得起這份機會的事實。",
      "question": "你會提供嗎？",
      "twist": "你的小型組織目前還無法向任何人支付款項。",
      "deeperQuestion": "即使機會是真誠提供的，它仍然可能是不公平的嗎？"
    }
  },
  {
    "id": "ponder-moral-066",
    "category": "Moral",
    "emoji": "🚪",
    "title": "The Omitted Context",
    "scenario": "You share a true quote that sounds worse without its surrounding explanation.\n\nThe shortened quote communicates your criticism with unusual force. Adding the missing explanation would let readers judge more fairly, while making your own position less persuasive at first glance.",
    "question": "Would you add context?",
    "twist": "The fuller version weakens your argument.",
    "deeperQuestion": "Can accurate words still create a dishonest impression?",
    "zh": {
      "title": "省略的上下文",
      "scenario": "你引用了一段真實的引文，但缺少了上下文的解釋，這段引文聽起來更糟。刪減後的引文反而更能有力地傳達你的批評。補充缺失的解釋可以讓讀者更客觀地判斷，同時也能讓你的觀點在乍看之下顯得不那麼有說服力。",
      "question": "你會補充完整的背景嗎？",
      "twist": "完整版本削弱了你的論點。",
      "deeperQuestion": "準確的言語是否也能給人造成不誠實的印象？"
    }
  },
  {
    "id": "ponder-moral-067",
    "category": "Moral",
    "emoji": "🌍",
    "title": "The Misplaced Blame",
    "scenario": "A friend confesses a minor past wrong and asks for secrecy.\n\nYour friend trusted you partly because they expected loyalty rather than judgment. Keeping that trust would leave another person carrying consequences for something they did not do.",
    "question": "Would you agree?",
    "twist": "Someone else is still being blamed.",
    "deeperQuestion": "Where does loyalty end when silence harms another?",
    "zh": {
      "title": "錯怪",
      "scenario": "一位朋友坦白了過去犯下的一個小錯，並請求你保密。你的朋友信任你，部分原因是他們期待的是忠誠而非評判。如果繼續保持這份信任，就意味著另一個人要為他們沒有做過的事情承擔後果。",
      "question": "你同意嗎？",
      "twist": "另一個人仍然被錯怪。",
      "deeperQuestion": "當沉默傷害他人時，忠誠的界線在哪裡？"
    }
  },
  {
    "id": "ponder-moral-068",
    "category": "Moral",
    "emoji": "🗝️",
    "title": "The Forgotten Object",
    "scenario": "A borrowed object is worth far more now than when you borrowed it.\n\nYou cared for the object and may have forgotten it was borrowed. Its increased value changes your feelings, though the original understanding never depended on what it might later be worth.",
    "question": "Would you return it?",
    "twist": "Its owner has forgotten lending it.",
    "deeperQuestion": "Does changed value alter an old obligation?",
    "zh": {
      "title": "被遺忘的物體",
      "scenario": "借來的物品現在的價值遠高於借來時的價值。你珍愛這件物品，或許已經忘記它是借來的。它價值的提升改變了你的感受，儘管最初的理解從未取決於它日後的價值。",
      "question": "你會把它歸還嗎？",
      "twist": "物品的主人已經忘記曾把它借給你。",
      "deeperQuestion": "借來的東西如今變得更有價值，會改變你原本歸還它的責任嗎？"
    }
  },
  {
    "id": "ponder-moral-069",
    "category": "Moral",
    "emoji": "🎟️",
    "title": "The Kind Rulebreaker",
    "scenario": "A worker breaks a rule to help someone in genuine need.\n\nThe worker acted thoughtfully rather than for personal gain, but others will learn from your response. Punishment may deter compassion; approval may invite exceptions without the same careful reasoning.",
    "question": "Would you discipline them?",
    "twist": "The rule usually prevents favoritism.",
    "deeperQuestion": "How should institutions make space for compassion?",
    "zh": {
      "title": "善良的規則破壞者",
      "scenario": "一名員工為了幫助真正需要幫助的人而違反了規定。該員工的行為出於深思熟慮而非個人利益，但你的反應會為其他人帶來教訓。懲罰可能會抑制同情心；而表揚則可能導致人們在缺乏同樣深思熟慮的情況下破例。",
      "question": "你會懲罰他們嗎？",
      "twist": "此規則通常可以防止徇私舞弊。",
      "deeperQuestion": "機構該如何為同情心留出空間？"
    }
  },
  {
    "id": "ponder-moral-070",
    "category": "Moral",
    "emoji": "🛟",
    "title": "How Long Should a Review Last?",
    "scenario": "You accurately criticized a shop’s treatment of staff two years ago. It now has a different owner, and workers report improvements, but your article still ranks prominently in searches. Deletion may erase history; leaving it unchanged may mislead current readers.",
    "question": "Would you retain, remove, or update it, and who should supply evidence for an update?",
    "twist": "Former staff want a record preserved, while current staff worry that lost business threatens their jobs.",
    "deeperQuestion": "How can a public record preserve history while representing the present fairly?",
    "zh": {
      "title": "舊評論要留多久？",
      "scenario": "你曾如實公開批評一家小店對待員工的方式。兩年後，店主換人，員工也說工作環境改善了，但你的舊文章仍排在搜尋結果前列。刪掉可能讓過去被忘記，不改則可能誤導現在的讀者。",
      "question": "你會保留、刪除，還是加上更新？更新應該由誰提供證據？",
      "twist": "前員工希望留下紀錄，新員工則擔心文章令生意減少，影響自己的工作。",
      "deeperQuestion": "公開紀錄應保護歷史、反映現況，還是同時做到兩者？怎樣才公平？"
    }
  },
  {
    "id": "ponder-moral-071",
    "category": "Moral",
    "emoji": "📜",
    "title": "The Last Lifeline",
    "scenario": "Your emergency fund can cover a stranger's crisis but leaves you exposed.\n\nYou built the fund after experiencing insecurity and value the peace it provides. Giving it away would meet a visible need by accepting a less visible possibility of future hardship.",
    "question": "Would you give it?",
    "twist": "You are not currently in danger.",
    "deeperQuestion": "How much uncertainty may you reasonably keep resources against?",
    "zh": {
      "title": "最後的生命線",
      "scenario": "你的緊急預備金或許能幫助陌生人渡過難關，卻會讓你自己陷入困境。你是在經歷過不安全感後才建立起這筆基金的，你珍惜它帶來的安心感。把它捐出去，雖然滿足了眼前的需求，卻也意味著要承擔未來可能面臨的、不那麼明顯的困境。",
      "question": "你會給嗎？",
      "twist": "你目前沒有危險。",
      "deeperQuestion": "你可以合理地儲備資源以應對多大的不確定性？"
    }
  },
  {
    "id": "ponder-moral-072",
    "category": "Moral",
    "emoji": "🪙",
    "title": "The Collective Apology",
    "scenario": "A group asks you to apologize for harm you opposed internally.\n\nYou objected when the decision was made, but your name still appears beside the group. Joining the apology might accept shared responsibility without pretending you personally supported the harm.",
    "question": "Would you join?",
    "twist": "You still benefited from membership.",
    "deeperQuestion": "Can belonging create responsibility without personal approval?",
    "zh": {
      "title": "集體道歉",
      "scenario": "某個團體要求你為你在內部反對的傷害行為道歉。你當時反對這項決定，但你的名字仍然出現在該團體名單中。參與道歉或許代表你承擔了部分責任，而不需要假裝你個人支持這種傷害行為。",
      "question": "你願意加入嗎？",
      "twist": "你仍享有會員資格所帶來的好處。",
      "deeperQuestion": "歸屬感能否在沒有個人認同的情況下產生責任感？"
    }
  },
  {
    "id": "ponder-moral-073",
    "category": "Moral",
    "emoji": "🌱",
    "title": "The Perfect Alibi",
    "scenario": "You can clear an innocent person only by exposing your own embarrassing secret.\n\nThe secret is embarrassing rather than dangerous, yet disclosure could change important relationships. Hoping for another witness would spare you a cost while leaving an innocent person uncertain for longer.",
    "question": "Would you testify?",
    "twist": "Someone else might eventually come forward.",
    "deeperQuestion": "Does possible help from others reduce your duty?",
    "zh": {
      "title": "完美的不在場證明",
      "scenario": "只有揭露自己難以啟齒的秘密，才能洗清無辜者的冤屈。這個秘密雖然令人尷尬而非危險，但一旦曝光，卻可能改變重要的人際關係。指望有其他證人出現，或許能讓你省下一些代價，卻會讓無辜者承受更長時間的煎熬。",
      "question": "你願意作證嗎？",
      "twist": "或許最終會有人站出來。",
      "deeperQuestion": "他人的幫助是否可以減輕你的責任？"
    }
  },
  {
    "id": "ponder-moral-074",
    "category": "Moral",
    "emoji": "⚖️",
    "title": "The Price Surge",
    "scenario": "You own supplies that become scarce during an emergency.\n\nThe shortage creates a real need to manage supply and finance transport. The price that encourages efficient distribution may also exclude people whose need is greatest and ability to pay is lowest.",
    "question": "Would you raise prices?",
    "twist": "Higher prices would fund more deliveries.",
    "deeperQuestion": "When does useful pricing become exploitation?",
    "zh": {
      "title": "價格飆升",
      "scenario": "緊急情況令你持有的物資突然短缺。提高售價，可以支付額外運輸和補貨成本，但也可能讓最急需、最缺錢的人買不起。你要決定售價如何反映供應壓力，以及哪些人的需要不能只靠付款能力處理。",
      "question": "你會提高價格嗎？",
      "twist": "更高的價格將為更多的交付提供資金。",
      "deeperQuestion": "合理的定價何時會變成剝削？"
    }
  },
  {
    "id": "ponder-moral-075",
    "category": "Moral",
    "emoji": "🧭",
    "title": "The Anonymous Critic",
    "scenario": "Anonymous feedback lets people speak honestly but enables cruel comments.\n\nPeople who fear retaliation need a way to speak, especially when criticizing authority. A system protecting them must also consider how unsupported accusations affect people unable to answer an unnamed critic.",
    "question": "Would you allow it?",
    "twist": "Requiring names silences vulnerable participants.",
    "deeperQuestion": "How should protection from retaliation balance accountability?",
    "zh": {
      "title": "匿名評論家",
      "scenario": "匿名回饋機制讓人們暢所欲言，但也助長了惡意評論。害怕遭到報復的人需要表達意見的管道，尤其是在批評權威時。保護他們的系統也必須考慮到，未經證實的指控會對那些無法回應匿名批評的人造成怎樣的影響。",
      "question": "你會允許嗎？",
      "twist": "要求提供姓名會使弱勢參與者噤聲。",
      "deeperQuestion": "如何平衡防止報復和問責？"
    }
  },
  {
    "id": "ponder-moral-076",
    "category": "Moral",
    "emoji": "🤝",
    "title": "The Unequal Sacrifice",
    "scenario": "A rule asks everyone to give up the same amount of money.\n\nThe rule looks impartial because nobody receives a special exception. In practice, equal amounts may demand radically different sacrifices from people whose resources were unequal before the rule existed.",
    "question": "Is that fair?",
    "twist": "The amount is trivial for some and devastating for others.",
    "deeperQuestion": "Should equal treatment mean equal burdens?",
    "zh": {
      "title": "不平等的犧牲",
      "scenario": "一項規則要求所有人放棄相同金額的金錢。該規則看似公正，因為沒有人獲得特殊豁免。但在實踐中，對於那些在規則出台前資源並不均等的人來說，相同數量的放棄可能需要他們做出截然不同的犧牲。",
      "question": "這樣公平嗎？",
      "twist": "對某些人來說，這筆金額微不足道；而對其他人來說，這筆金額卻是毀滅性的。",
      "deeperQuestion": "平等對待是否意味著承擔同等的負擔？"
    }
  },
  {
    "id": "ponder-moral-077",
    "category": "Moral",
    "emoji": "🕯️",
    "title": "The Accidental Discovery",
    "scenario": "You find a friend's hidden journal while helping them move.\n\nYou did not intend to look, and cannot now forget what you saw. Mentioning it might express care while revealing a boundary crossed before your friend could choose whether to share.",
    "question": "Would you mention seeing it?",
    "twist": "You glimpsed a passage that worries you.",
    "deeperQuestion": "Does concern justify crossing a privacy boundary?",
    "zh": {
      "title": "意外的發現",
      "scenario": "你在幫朋友搬家時，偶然發現了她藏起來的日記。你原本沒打算看，但現在卻無法忘記所見的一切。提起這件事或許能表達你的關心，但也暴露了你無意間越過了界限，而你的朋友還來不及選擇是否分享。",
      "question": "你會提到看過嗎？",
      "twist": "你瞥見了一段令你擔憂的文字。",
      "deeperQuestion": "出於關心，是否可以正當化越過隱私界線？"
    }
  },
  {
    "id": "ponder-moral-078",
    "category": "Moral",
    "emoji": "🚪",
    "title": "The Good Excuse",
    "scenario": "A colleague repeatedly misses commitments for understandable reasons.\n\nYou can believe their explanations without being able to absorb another missed deadline. The decision separates judging someone's worth from deciding what responsibilities a relationship can realistically support.",
    "question": "Would you stop relying on them?",
    "twist": "They are sincerely trying their best.",
    "deeperQuestion": "Can compassion coexist with reduced trust?",
    "zh": {
      "title": "好藉口",
      "scenario": "一位同事屢次因可以理解的原因而爽約。你可以相信他們的解釋，但無法接受他們再次錯過截止日期。這項決定將評判一個人的價值與判斷一段關係實際上能夠承擔的責任區分開來。",
      "question": "你會停止依賴他們嗎？",
      "twist": "他們真心實意地盡力而為。",
      "deeperQuestion": "同情心能否與信任度降低並存？"
    }
  },
  {
    "id": "ponder-moral-079",
    "category": "Moral",
    "emoji": "🌍",
    "title": "The Donor Choice",
    "scenario": "A donor funds only visible projects while urgent maintenance goes neglected.\n\nThe donor wants evidence of visible impact rather than work nobody notices. Accepting might improve something real while deepening the habit of neglecting essential tasks that produce no appealing photographs.",
    "question": "Would you accept the restriction?",
    "twist": "Without the donation, neither project happens.",
    "deeperQuestion": "Should a gift's conditions determine public priorities?",
    "zh": {
      "title": "捐贈者選擇",
      "scenario": "捐贈者只資助那些顯而易見的項目，而忽略了亟需的維護工作。捐贈者想要的是看得見成效的證據，而不是無人問津的工程。接受捐贈或許能改善一些實際存在的問題，但卻會加深忽略那些無法拍出漂亮照片的重要工作的習慣。",
      "question": "你是否接受此限制？",
      "twist": "如果沒有捐款，這兩個項目都無法進行。",
      "deeperQuestion": "禮物的條件是否應該決定公共優先事項？"
    }
  },
  {
    "id": "ponder-moral-080",
    "category": "Moral",
    "emoji": "🗝️",
    "title": "The Public Correction",
    "scenario": "A friend confidently spreads a false claim in front of others.\n\nYou know they are not intentionally misleading anyone, and you value their dignity. Waiting protects the relationship in the moment but leaves the wider audience with information you know is wrong.",
    "question": "Would you correct them immediately?",
    "twist": "A private correction would save embarrassment but reach fewer people.",
    "deeperQuestion": "When should accuracy outweigh social comfort?",
    "zh": {
      "title": "當眾糾正",
      "scenario": "朋友自信地在眾人面前散播假訊息。你知道他並非有意誤導他人，而且你尊重他的尊嚴。此時此刻，等待可以維繫彼此的關係，但卻會讓更多人聽到你明知是錯誤的訊息。",
      "question": "你會立即糾正他們嗎？",
      "twist": "私下更正可以避免尷尬，但影響範圍較小。",
      "deeperQuestion": "何時應該將準確度置於社會舒適性之上？"
    }
  },
  {
    "id": "ponder-moral-081",
    "category": "Moral",
    "emoji": "🎟️",
    "title": "The Inconvenient Access",
    "scenario": "Making an event accessible requires changing a tradition most guests love.\n\nThe tradition is meaningful rather than merely convenient, which makes changing it emotionally difficult. The excluded guest should not have to become numerous before their participation counts as important.",
    "question": "Would you change it?",
    "twist": "Only one guest currently needs the accommodation.",
    "deeperQuestion": "Should inclusion depend on the number affected?",
    "zh": {
      "title": "不便的通道",
      "scenario": "讓活動更具包容性需要改變大多數賓客喜愛的傳統。這項傳統意義非凡，而不僅僅是方便，因此改變它在情感上十分困難。不應等到被排除在外的賓客人數眾多時，他們的參與才顯得重要。",
      "question": "你會修改它嗎？",
      "twist": "目前只有一位客人需要住宿。",
      "deeperQuestion": "是否照顧某人的參與需要，應該取決於受影響的人數嗎？"
    }
  },
  {
    "id": "ponder-moral-082",
    "category": "Moral",
    "emoji": "🛟",
    "title": "The Shared Blame",
    "scenario": "Several small careless acts combine to cause a serious problem.\n\nEach person can truthfully say that many other actions contributed. Dividing the cost equally may be simple while ignoring different opportunities to notice and prevent what was happening.",
    "question": "Who should repair the damage?",
    "twist": "No single act would have caused harm alone.",
    "deeperQuestion": "How should responsibility be divided for collective outcomes?",
    "zh": {
      "title": "共同責任",
      "scenario": "幾個看似微不足道的疏忽行為累積起來，最後釀成大禍。每個人都可以坦誠地說，其他許多行為也起了推波助瀾的作用。簡單地平均分擔責任或許簡單，但卻忽略了發現並阻止事態發展的各種機會。",
      "question": "誰應該修復損壞？",
      "twist": "任何單一行為都不會單獨造成傷害。",
      "deeperQuestion": "如何劃分集體成果的責任？"
    }
  },
  {
    "id": "ponder-moral-083",
    "category": "Moral",
    "emoji": "📜",
    "title": "The Secret Benefactor",
    "scenario": "An unknown person pays your debt using money obtained dishonestly.\n\nYou did not ask for the payment and have already felt relief from the debt. Refusing it might protect your integrity without directing any practical help toward the person originally harmed.",
    "question": "Would you keep the benefit?",
    "twist": "Returning it would not compensate the original victim.",
    "deeperQuestion": "Can refusing tainted benefits be merely symbolic?",
    "zh": {
      "title": "秘密恩人",
      "scenario": "有人用非法所得替你償還了債務。你並未要求對方代為償還，而且已經擺脫了債務的困擾。拒絕代為償還或許能維護你的名譽，但並不能為最初受害的人提供任何實際幫助。",
      "question": "你會保留這項福利嗎？",
      "twist": "歸還物品並不能補償原受害者。",
      "deeperQuestion": "拒絕受污染的利益是否僅僅是像徵性的？"
    }
  },
  {
    "id": "ponder-moral-084",
    "category": "Moral",
    "emoji": "🪙",
    "title": "The Risky Evidence",
    "scenario": "You can prove misconduct using evidence someone obtained by violating privacy.\n\nThe evidence would be difficult to obtain through acceptable channels, but that difficulty does not disappear the violation. Using it may encourage the same methods against innocent people later.",
    "question": "Would you use it?",
    "twist": "The accused admits the evidence is accurate.",
    "deeperQuestion": "Can a just outcome justify an unjust process?",
    "zh": {
      "title": "風險證據",
      "scenario": "你可以利用別人透過侵犯隱私而獲得的證據來證明不當行為。雖然透過正當管道取得此類證據可能很困難，但這並不能消除侵犯隱私的行為。使用此類證據可能會鼓勵他人日後以同樣的方式侵害無辜者。",
      "question": "你會用它嗎？",
      "twist": "被告承認證據準確無誤。",
      "deeperQuestion": "公正的結果能否為不公義的過程辯護？"
    }
  },
  {
    "id": "ponder-moral-085",
    "category": "Moral",
    "emoji": "🌱",
    "title": "The Last Opportunity",
    "scenario": "You can take a dream opportunity only by breaking a reasonable commitment.\n\nYou made the commitment sincerely before knowing this opportunity existed. Leaving would not make you uncaring, but someone else would still have to manage the disruption your choice creates.",
    "question": "Would you go?",
    "twist": "The opportunity will never return.",
    "deeperQuestion": "How much of your future can a promise claim?",
    "zh": {
      "title": "最後的機會",
      "scenario": "只有違背合理的承諾，你才能抓住夢寐以求的機會。你是在知道這個機會存在之前，真心實意地做出了承諾。離開不代表你冷漠無情，但你的選擇所帶來的混亂，最終還是得由其他人來承擔。",
      "question": "你願意去嗎？",
      "twist": "機會不會再回來了。",
      "deeperQuestion": "一個承諾能對你的未來造成多大的影響？"
    }
  },
  {
    "id": "ponder-moral-086",
    "category": "Moral",
    "emoji": "⚖️",
    "title": "The Public Ranking",
    "scenario": "Ranking volunteers by hours increases participation but humiliates some.\n\nHours are easy to count and compare, while emotional effort and accessibility are harder to measure. A public ranking may motivate visible contribution while teaching everyone what does not count.",
    "question": "Would you publish it?",
    "twist": "Some contribute through care work nobody counts.",
    "deeperQuestion": "What gets lost when contribution becomes a score?",
    "zh": {
      "title": "公眾排名",
      "scenario": "按時長對志工進行排名可以提高參與度，但也會讓一些人感到難堪。時長易於統計和比較，而情感投入和參與度則難以衡量。公開排名或許能激勵志工做出可見的貢獻，同時也能讓所有人明白哪些貢獻不算數。",
      "question": "你會發表嗎？",
      "twist": "有些人透過護理工作做出貢獻，但無人知曉。",
      "deeperQuestion": "當貢獻變成分數時，會失去什麼？"
    }
  },
  {
    "id": "ponder-moral-087",
    "category": "Moral",
    "emoji": "🧭",
    "title": "How Would You Verify an Apology?",
    "scenario": "A community organization admits ignoring complaints and proposes three remedies: publish case progress, invite independent checks, or collect anonymous member ratings. It can initially fund only one, and members want more than a polished apology. You must recommend a first step.",
    "question": "Which would you choose, and what evidence would show improvement after six months?",
    "twist": "Anonymous scores improve, but fewer people seem willing to raise concerns.",
    "deeperQuestion": "Can a better headline metric hide a worse situation? What signal would make you reconsider?",
    "zh": {
      "title": "道歉之後，怎樣驗證？",
      "scenario": "一個社區組織承認曾忽略成員投訴，並提出三個改善方法：公開所有處理進度、邀請外部人士檢查，或讓成員匿名評分。經費只足夠先做其中一項，大家都不想只聽到漂亮的道歉。",
      "question": "你會先選哪項？半年後，用甚麼證據判斷它是否有效？",
      "twist": "匿名評分開始變好，但願意提出投訴的人卻越來越少。",
      "deeperQuestion": "表面指標改善，能否代表問題真的改善？甚麼訊號會令你重新懷疑？"
    }
  },
  {
    "id": "ponder-moral-088",
    "category": "Moral",
    "emoji": "🤝",
    "title": "The Community Vote",
    "scenario": "A majority votes for a policy that burdens a small minority.\n\nYou believe in democratic decisions because everyone deserves a voice. The result tests whether having a chance to vote is enough when the eventual burden falls repeatedly on the same people.",
    "question": "Would you defend the result?",
    "twist": "The process was entirely fair.",
    "deeperQuestion": "Can a fair procedure produce an unfair decision?",
    "zh": {
      "title": "社區投票",
      "scenario": "多數人投票通過了一項政策，給少數人帶來了沉重負擔。你相信民主決策，因為每個人都應該有發言權。這項結果檢驗了當最終的負擔一再落在同一批人身上時，僅僅擁有投票權是否足夠。",
      "question": "你會捍衛這個結果嗎？",
      "twist": "整個過程完全公平。",
      "deeperQuestion": "公平的程序能否產生不公平的決定？"
    }
  },
  {
    "id": "ponder-moral-089",
    "category": "Moral",
    "emoji": "🕯️",
    "title": "The Valuable Witness",
    "scenario": "You witness wrongdoing by someone who also helps many people.\n\nTheir good work is visible and important, while the misconduct is known to very few. Protecting their position may preserve services while asking those harmed to absorb the price of continuity.",
    "question": "Would you report it?",
    "twist": "Their removal would interrupt those helpful services.",
    "deeperQuestion": "Should usefulness shield someone from accountability?",
    "zh": {
      "title": "重要的證人",
      "scenario": "你目睹一位長期幫助許多人的人做了傷害別人的事。對方的貢獻有目共睹，但這次行為很少人知道。揭露可能令服務中斷；保持沉默，則可能讓受害者為了大家繼續受惠，而獨自承受代價。",
      "question": "你會檢舉嗎？",
      "twist": "移除它們會中斷這些有益的服務。",
      "deeperQuestion": "有用性是否應該使人免於承擔責任？"
    }
  },
  {
    "id": "ponder-moral-090",
    "category": "Moral",
    "emoji": "🚪",
    "title": "The Avoidable Waste",
    "scenario": "Returning a defective product guarantees it will be discarded.\n\nThe defect is real, and you are entitled to something that works properly. The available process makes you choose between personal fairness and an environmental cost created by a system you did not design.",
    "question": "Would you seek a refund?",
    "twist": "Keeping it means absorbing a real financial loss.",
    "deeperQuestion": "Who should bear the cost of wasteful systems?",
    "zh": {
      "title": "可避免的浪費",
      "scenario": "退回瑕疵產品就表示該產品將被丟棄。缺陷是真實存在的，你有權獲得功能完好的產品。現行流程迫使你在個人公平和未參與設計的系統所造成的環境成本之間做出選擇。",
      "question": "你會要求退款嗎？",
      "twist": "保留它意味著承受實際的經濟損失。",
      "deeperQuestion": "誰應該承擔浪費性系統的成本？"
    }
  },
  {
    "id": "ponder-moral-091",
    "category": "Moral",
    "emoji": "🌍",
    "title": "The Personal Exception",
    "scenario": "You support a strict rule until it affects someone you love.\n\nYou previously defended the rule when its consequences were abstract. Caring about this case may reveal a weakness in the rule, or simply your reluctance to apply it consistently.",
    "question": "Would you seek an exception?",
    "twist": "Their case is no different from previous cases.",
    "deeperQuestion": "Does closeness reveal compassion or favoritism?",
    "zh": {
      "title": "個人例外",
      "scenario": "你一向支持嚴格的規則，直到它影響你所愛的人。你之前維護這條規則，只是因為它的後果比較抽象。你對這個案子的關心或許揭示了規則的缺陷，或者只是你不願意始終如一地執行它。",
      "question": "你會尋求例外嗎？",
      "twist": "他們的情況與先前的案件並無不同。",
      "deeperQuestion": "親密關係究竟是體現了同情還是偏袒？"
    }
  },
  {
    "id": "ponder-moral-092",
    "category": "Moral",
    "emoji": "🗝️",
    "title": "The Unasked Favor",
    "scenario": "You solve someone's problem without asking, but they resent the intervention.\n\nYou acted because the solution seemed obvious and beneficial. Their reaction reminds you that a problem can involve preferences, relationships, and dignity that an outside helper does not fully understand.",
    "question": "Would you apologize?",
    "twist": "Your solution genuinely improved their situation.",
    "deeperQuestion": "Can help be wrong because it was uninvited?",
    "zh": {
      "title": "不請自來的幫忙",
      "scenario": "你未經請求就幫別人解決了問題，但他們卻對你的介入感到不滿。你之所以出手相助，是因為解決方案看似顯而易見且有益。他們的反應提醒你，問題可能涉及個人偏好、人際關係和尊嚴，而這些外在的幫助者往往無法完全理解。",
      "question": "你願意道歉嗎？",
      "twist": "你的解決方案確實改善了他們的處境。",
      "deeperQuestion": "幫助是否可能出錯，因為它是不請自來的？"
    }
  },
  {
    "id": "ponder-moral-093",
    "category": "Moral",
    "emoji": "🎟️",
    "title": "The Shared Street",
    "scenario": "A pedestrian zone improves public life but inconveniences several small businesses.\n\nMost residents would gain a quieter, safer place to gather. The affected businesses built their plans around existing access and would face concentrated costs that the majority only discuss in principle.",
    "question": "Would you support it?",
    "twist": "Those businesses cannot easily relocate.",
    "deeperQuestion": "How should collective benefits account for concentrated losses?",
    "zh": {
      "title": "共享街道",
      "scenario": "步行區改善了公共生活，但給一些小型企業帶來了不便。大多數居民將獲得一個更安靜、更安全的聚會場所。受影響的企業原本是根據現有通道制定計劃，現在卻要承擔集中成本，而大多數企業只是在原則上討論過這些成本。",
      "question": "你會支持嗎？",
      "twist": "這些企業不容易搬遷。",
      "deeperQuestion": "集體利益應如何解釋集中損失？"
    }
  },
  {
    "id": "ponder-moral-094",
    "category": "Moral",
    "emoji": "🛟",
    "title": "The Early Warning",
    "scenario": "You suspect a plan will fail but cannot prove it.\n\nYou have noticed warning signs but cannot provide a convincing forecast. Raising the concern may prevent harm, yet repeatedly demanding certainty before action can also make useful projects impossible.",
    "question": "Would you slow the project down?",
    "twist": "Delay itself could cause significant losses.",
    "deeperQuestion": "When does caution become irresponsible obstruction?",
    "zh": {
      "title": "預警",
      "scenario": "你懷疑某個計畫會失敗，但無法證明。你注意到了一些預警訊號，但無法提供令人信服的預測。提出擔憂或許可以避免損失，但反覆要求在採取行動前得到確定性也可能使有益的專案無法實施。",
      "question": "你會讓這個計劃暫緩推進嗎？",
      "twist": "延誤本身可能會造成重大損失。",
      "deeperQuestion": "謹慎何時變成不負責任的阻撓？"
    }
  },
  {
    "id": "ponder-moral-095",
    "category": "Moral",
    "emoji": "📜",
    "title": "The Cost of Honesty",
    "scenario": "A truthful answer would hurt someone without changing any practical decision.\n\nYou believe silence would protect their feelings, but they may value being treated as someone capable of facing discomfort. Answering requires separating their actual wishes from your desire to avoid causing pain.",
    "question": "Would you answer fully?",
    "twist": "They explicitly say they prefer truth.",
    "deeperQuestion": "Should you protect someone from information they request?",
    "zh": {
      "title": "誠實的代價",
      "scenario": "說實話可能會傷害別人，但並不會改變任何實際決定。你認為保持沉默可以保護他們的感受，但他們可能會重視被當作能夠承受不適的人。回答這個問題需要將他們的真實意願與你避免傷害他們的願望區分開來。",
      "question": "你會完整地說出實情嗎？",
      "twist": "他們明確表示他們更喜歡真相。",
      "deeperQuestion": "你是否應該保護某人免受其索取的資訊？"
    }
  },
  {
    "id": "ponder-moral-096",
    "category": "Moral",
    "emoji": "🪙",
    "title": "The Unfair Advantage",
    "scenario": "A competition permits equipment only wealthy entrants can afford.\n\nThe equipment is allowed, and other strong competitors already use it. Winning without it might feel better, but your personal restraint would not necessarily expand anyone else's access.",
    "question": "Would you use it?",
    "twist": "Refusing would not change the rules.",
    "deeperQuestion": "Does individual restraint meaningfully challenge structural unfairness?",
    "zh": {
      "title": "不公平優勢",
      "scenario": "某項比賽允許使用只有富裕參賽者才能負擔得起的設備。這些設備是被允許的，而且其他強大的競爭對手已經在使用。不用這些設備贏得比賽或許感覺更好，但你個人的克制未必能讓其他人更容易獲得使用權。",
      "question": "你會使用它嗎？",
      "twist": "拒絕並不會改變規則。",
      "deeperQuestion": "個人克制能否有效挑戰結構性不公？"
    }
  },
  {
    "id": "ponder-moral-097",
    "category": "Moral",
    "emoji": "🌱",
    "title": "The Distant Harm",
    "scenario": "Your convenient purchase has a tiny negative effect on many distant people.\n\nThe harm is divided so widely that no single purchase appears decisive. Your convenience is immediate and visible, while the affected people have little way to tell you what the accumulated cost feels like.",
    "question": "Would you avoid it?",
    "twist": "Almost everyone around you keeps buying.",
    "deeperQuestion": "How should scattered harm influence personal choices?",
    "zh": {
      "title": "遙遠的傷害",
      "scenario": "你一次便捷的購物行為，對許多遠方的人造成了微小的負面影響。這種傷害分佈如此廣泛，以至於任何一次購物行為都顯得無關緊要。你的便利性是即時且顯而易見的，而受影響的人卻很難告訴你累積的損失是什麼樣的。",
      "question": "你會避免嗎？",
      "twist": "你周圍幾乎每個人都在買東西。",
      "deeperQuestion": "分散的傷害該如何影響個人選擇？"
    }
  },
  {
    "id": "ponder-moral-098",
    "category": "Moral",
    "emoji": "⚖️",
    "title": "The Repair Choice",
    "scenario": "Someone offers meaningful repair without admitting they were wrong.\n\nThe proposed repair would improve the harmed person's situation immediately. Insisting on words may protect dignity and public understanding, but could also make practical help depend on agreement about the past.",
    "question": "Would you accept it?",
    "twist": "Demanding an admission may end negotiations.",
    "deeperQuestion": "Is acknowledgment necessary for justice?",
    "zh": {
      "title": "維修選擇",
      "scenario": "對方願意提供實際補救，卻不承認自己曾經做錯。接受能立即改善受影響者的處境；堅持先承認責任，則可能令大家更清楚事情為何發生。你要決定，補救是否一定需要共同接受同一個說法。",
      "question": "你會接受嗎？",
      "twist": "要求承認錯誤可能會導致談判破裂。",
      "deeperQuestion": "承認對於伸張正義是必要的嗎？"
    }
  },
  {
    "id": "ponder-moral-099",
    "category": "Moral",
    "emoji": "🧭",
    "title": "The Unpopular Mercy",
    "scenario": "You can reduce a deserved penalty when nobody else favors mercy.\n\nYou think the reduced penalty would help everyone move forward, but fear appearing inconsistent. Mercy must be explained as a considered choice rather than a preference for a sympathetic individual.",
    "question": "Would you do it?",
    "twist": "The harmed person supports the reduction privately.",
    "deeperQuestion": "Whose approval should compassionate decisions need?",
    "zh": {
      "title": "不受歡迎的憐憫",
      "scenario": "當無人贊成寬恕時，你可以減輕應有的懲罰。你認為減輕懲罰有助於所有人向前邁進，但又擔心顯得前後矛盾。寬恕必須解釋為一種經過深思熟慮的選擇，而非對某個同情者的偏好。",
      "question": "你會這麼做嗎？",
      "twist": "受害人私下支持減刑。",
      "deeperQuestion": "出於人道主義考量而做出的決定需要誰的批准？"
    }
  },
  {
    "id": "ponder-moral-100",
    "category": "Moral",
    "emoji": "🤝",
    "title": "The Future Stranger",
    "scenario": "A small sacrifice now would help someone who will never know you existed.\n\nThe sacrifice would barely interrupt your day, but the promised benefit remains abstract. You must decide whether being unseen and uncertain makes a good action less real or simply less emotionally rewarding.",
    "question": "Would you make it?",
    "twist": "You will never learn whether it helped.",
    "deeperQuestion": "Can responsibility extend beyond recognition and certainty?",
    "zh": {
      "title": "未來的陌生人",
      "scenario": "現在做出一點小小的犧牲，就能幫助一個永遠不會知道你存在的人。這點犧牲幾乎不會影響你的日常生活，但所承諾的益處卻很抽象。你必須決定，這種默默無聞和不確定性，究竟會讓善舉顯得不那麼真實，還是只是會減少情感上的滿足感。",
      "question": "你會作出這個小小的犧牲嗎？",
      "twist": "你永遠不會知道它是否有幫助。",
      "deeperQuestion": "責任能否超越認可和確定性？"
    }
  },
  {
    "id": "ponder-love-002",
    "category": "Love",
    "emoji": "❤️",
    "title": "The Perfect Match",
    "scenario": "A machine identifies your ideal partner, but you already love someone else.\n\nYou have built routines, trust, and memories with your current partner that a compatibility score cannot describe. Meeting someone new could satisfy curiosity while changing how you value what already exists.",
    "question": "Would you meet the match?",
    "twist": "Your current partner receives the same invitation.",
    "deeperQuestion": "Does compatibility matter more than a relationship you built?",
    "zh": {
      "title": "完美配對",
      "scenario": "機器可以辨識出你的理想伴侶，但你已經愛上別人了。你和現在的伴侶之間建立了日常習慣、信任和回憶，這些都是配對評分無法形容的。認識新朋友或許能滿足你的好奇心，同時也能改變你對現有關係的重視。",
      "question": "你會去見那位被評為理想伴侶的人嗎？",
      "twist": "你的現任伴侶也會收到同樣的邀請。",
      "deeperQuestion": "契合度比你建立的關係更重要嗎？"
    }
  },
  {
    "id": "ponder-love-003",
    "category": "Love",
    "emoji": "💌",
    "title": "The Shared Dream",
    "scenario": "You and your partner receive dream jobs in different countries.\n\nYou both encouraged the other's ambition before realizing success could separate you. Staying together now requires discussing whose opportunity becomes the shared priority rather than simply celebrating that both dreams came true.",
    "question": "Who should move?",
    "twist": "Neither job will ever be offered again.",
    "deeperQuestion": "Can an equal relationship contain unequal sacrifice?",
    "zh": {
      "title": "共同的夢想",
      "scenario": "你和你的伴侶在不同的國家獲得了夢寐以求的工作。你們都曾鼓勵對方追求夢想，但後來意識到成功可能會讓你們分開。如今，想要繼續在一起，需要討論如何將誰的機會置於共同的優先地位，而不是僅僅慶祝夢想成真。",
      "question": "誰該搬家？",
      "twist": "這兩個職位都不會再提供了。",
      "deeperQuestion": "平等的關係中能否包含不平等的犧牲？"
    }
  },
  {
    "id": "ponder-love-004",
    "category": "Love",
    "emoji": "🫶",
    "title": "The Quiet Anniversary",
    "scenario": "Your partner forgets anniversaries but shows care consistently every day.\n\nYou understand their everyday care and do not want to dismiss it. Still, an occasional planned celebration would tell you that the milestones you remember also matter to them.",
    "question": "Would you ask for celebrations?",
    "twist": "They feel that scheduled romance is a performance.",
    "deeperQuestion": "Can different expressions of love remain equally valid?",
    "zh": {
      "title": "靜謐的周年紀念",
      "scenario": "你的伴侶雖然會忘記紀念日，但每天都對你關懷備至。你理解他們日常的付出，也不想忽視這份心意。不過，偶爾安排慶祝活動會讓你明白，你記得的那些重要時刻，對他們來說也同樣意義非凡。",
      "question": "你會要求慶祝活動嗎？",
      "twist": "他們認為安排好的戀愛是一種表演。",
      "deeperQuestion": "不同的愛的表達方式是否都能同樣有效？"
    }
  },
  {
    "id": "ponder-love-005",
    "category": "Love",
    "emoji": "🌹",
    "title": "The Last Message",
    "scenario": "You can read one final unsent message from a former partner.\n\nYou have made peace with some unanswered questions but still imagine what they might have said. Reading something deliberately withheld could bring clarity or give unfinished thoughts more authority than they deserve.",
    "question": "Would you open it?",
    "twist": "They deliberately chose not to send it.",
    "deeperQuestion": "Does longing outweigh someone else's unfinished privacy?",
    "zh": {
      "title": "最後的訊息",
      "scenario": "你可以閱讀前任留下的最後一條未發送的訊息。你已經釋懷了一些未解之謎，但仍然會想像他們可能會說些什麼。閱讀這些刻意隱瞞的內容，或許能讓你豁然開朗，也可能讓那些未完成的想法顯得過於重要。",
      "question": "你會打開它嗎？",
      "twist": "他們故意選擇不發送。",
      "deeperQuestion": "渴望是否比他人未完成的隱私更重要？"
    }
  },
  {
    "id": "ponder-love-006",
    "category": "Love",
    "emoji": "🏡",
    "title": "The Memory Trade",
    "scenario": "You can erase heartbreak, but also lose the relationship's happy memories.\n\nThe painful and joyful moments are tied to the same people and places. Removing the hurt would protect your present life while changing the history through which you understand your capacity to love.",
    "question": "Would you accept?",
    "twist": "The other person keeps every memory.",
    "deeperQuestion": "Does pain give good memories part of their meaning?",
    "zh": {
      "title": "記憶交易",
      "scenario": "你可以抹去心碎，但也會失去那段感情中美好的回憶。痛苦和快樂的時光都與同樣的人事物緊密相連。消除痛苦或許能保護你現在的生活，但同時也會改變你對愛的理解。",
      "question": "你願意接受嗎？",
      "twist": "對方保留所有記憶。",
      "deeperQuestion": "痛苦是否賦予美好回憶部分意義？"
    }
  },
  {
    "id": "ponder-love-007",
    "category": "Love",
    "emoji": "🕰️",
    "title": "A Pause During an Argument",
    "scenario": "During conflict you want to resolve everything immediately, while your partner needs time to settle. Whenever someone leaves the room, the other feels more anxious. During a calm evening, you decide to agree on a pause that includes returning and staying in contact.",
    "question": "What three agreements could prevent both avoidance and pressure to keep arguing?",
    "twist": "After an agreed half hour, your partner returns and says they need longer, but offers a definite new time.",
    "deeperQuestion": "What makes a communication agreement dependable: exact timing or continuing willingness to return?",
    "zh": {
      "title": "爭吵的暫停鍵",
      "scenario": "你和伴侶一爭執，就會出現相反反應：你想立即說清楚，對方需要先冷靜。每次有人離開房間，另一人都更不安。你們決定在平靜時訂一個暫停方法，包括何時回來、怎樣保持聯絡。",
      "question": "你會提議哪三條約定，讓暫停不會變成逃避，也不會逼人繼續爭論？",
      "twist": "某次約好半小時後再談，對方回來說仍未準備好，但願意約一個更明確的時間。",
      "deeperQuestion": "一段可靠的溝通安排，需要固定時間，還是持續表達願意回來？"
    }
  },
  {
    "id": "ponder-love-008",
    "category": "Love",
    "emoji": "💐",
    "title": "The Honest Crush",
    "scenario": "You develop a passing crush while in a committed relationship.\n\nYou are not planning to act on the attraction and expect it to pass. Sharing might honor an agreement about openness while creating distress about a feeling that never became a decision.",
    "question": "Would you mention it?",
    "twist": "Your partner previously asked for complete honesty.",
    "deeperQuestion": "Does openness require reporting every temporary feeling?",
    "zh": {
      "title": "真誠的暗戀",
      "scenario": "你在一段穩定關係中，短暫地被另一個人吸引。你沒有打算採取行動，也相信感覺可能自然消退。告訴伴侶，或許符合你們坦誠相待的約定；但也可能把一段從未發展的心情，變成對方需要承受的不安。",
      "question": "你會提一下嗎？",
      "twist": "你的伴侶之前要求你完全誠實。",
      "deeperQuestion": "坦誠是否需要報告每一種暫時的感受？"
    }
  },
  {
    "id": "ponder-love-009",
    "category": "Love",
    "emoji": "🧵",
    "title": "The Love Forecast",
    "scenario": "A device predicts your relationship will last exactly five happy years.\n\nYou know the years would contain ordinary joy as well as genuine commitment. The forecast makes you ask whether choosing something temporary is dishonest when you already understand its limit.",
    "question": "Would you begin it?",
    "twist": "The ending is unavoidable but peaceful.",
    "deeperQuestion": "Must lasting love mean permanent love?",
    "zh": {
      "title": "愛情預報",
      "scenario": "一台儀器預測你們的感情將持續五年，幸福美滿。你知道這五年會有平凡的快樂，也會有真摯的付出。這個預測讓你不禁思考，既然已經明白一段感情的局限性，選擇一段短暫的感情是否就是一種欺騙。",
      "question": "你願意開始嗎？",
      "twist": "結局是不可避免的，但卻是平靜的。",
      "deeperQuestion": "持久的愛是否就意味著永恆的愛？"
    }
  },
  {
    "id": "ponder-love-010",
    "category": "Love",
    "emoji": "🫖",
    "title": "The Unsent Apology",
    "scenario": "An ex writes an apology you never receive, then changes for the better.\n\nTheir apology was never available to help you at the time you needed it. The later change may be meaningful without creating any obligation for you to revise your boundaries.",
    "question": "Does the apology matter?",
    "twist": "You learn about their change years later.",
    "deeperQuestion": "Can repair happen without reconciliation?",
    "zh": {
      "title": "未發出的道歉",
      "scenario": "前任寫了一封你從未收到的道歉信，然後有所改變。在你需要的時候，他們的道歉並沒有起到任何作用。後來的改變或許意義重大，但這並不代表你必須改變自己的底線。",
      "question": "道歉很重要嗎？",
      "twist": "多年後你才知道他們的改變。",
      "deeperQuestion": "能否在不進行和解的情況下進行修復？"
    }
  },
  {
    "id": "ponder-love-011",
    "category": "Love",
    "emoji": "🌙",
    "title": "The Different Pace",
    "scenario": "You are ready to move in together; your partner needs another year.\n\nYou do not want an important decision made under pressure, yet waiting also shapes your plans. Respecting their uncertainty does not tell you how long your own hopes should remain on hold.",
    "question": "Would you wait?",
    "twist": "They cannot promise how they will feel later.",
    "deeperQuestion": "How should patience coexist with your own timeline?",
    "zh": {
      "title": "不同的節奏",
      "scenario": "你已經準備好同居，伴侶卻希望再等一年。你不想逼對方在壓力下作決定，但等待同樣會影響自己的計劃。尊重對方需要時間，並沒有直接回答另一個問題：你願意把自己的需要擱置多久？",
      "question": "你願意等嗎？",
      "twist": "他們無法承諾以後會有什麼感受。",
      "deeperQuestion": "如何將耐心與自己的時間安排並存？"
    }
  },
  {
    "id": "ponder-love-012",
    "category": "Love",
    "emoji": "🪞",
    "title": "The Romantic Script",
    "scenario": "Your partner secretly uses a guide to plan thoughtful gestures.\n\nThe gestures still match things you genuinely enjoy, and the effort behind studying is real. Discovering a source changes your interpretation of spontaneity more than it changes the care you actually received.",
    "question": "Would that bother you?",
    "twist": "They study it because romance does not come naturally.",
    "deeperQuestion": "Is learned care less genuine than spontaneous care?",
    "zh": {
      "title": "浪漫劇本",
      "scenario": "你的伴侶偷偷地使用指南來策劃貼心的舉動。這些舉動仍然符合你真正喜歡的事物，背後的用心也是實實在在的。發現指南的來源，與其說是改變了你實際感受到的關懷，不如說是改變了你對「自發性」的理解。",
      "question": "這會困擾你嗎？",
      "twist": "他們研究愛是因為愛不是自然而然發生的。",
      "deeperQuestion": "後天習得的關懷是否不如自發性的關懷真誠？"
    }
  },
  {
    "id": "ponder-love-013",
    "category": "Love",
    "emoji": "🎶",
    "title": "The Family Table",
    "scenario": "Your family excludes your partner from an important tradition.\n\nThe gathering matters to your family and carries memories you do not want to lose. Attending alone might respect your partner's request while making the exclusion seem easier for everyone to repeat.",
    "question": "Would you skip the gathering?",
    "twist": "Your partner asks you to go without them.",
    "deeperQuestion": "Can accepting exclusion become endorsing it?",
    "zh": {
      "title": "家庭餐桌",
      "scenario": "你的家人將你的伴侶排除在一項重要的傳統活動之外。這場聚會對你的家庭意義重大，承載著你不想失去的回憶。獨自參加或許既尊重了伴侶的意願，又會讓其他人更容易接受這種排斥行為。",
      "question": "你會缺席這次聚會嗎？",
      "twist": "你的伴侶要求你獨自前往。",
      "deeperQuestion": "接受排斥是否等同於認同排斥？"
    }
  },
  {
    "id": "ponder-love-014",
    "category": "Love",
    "emoji": "❤️",
    "title": "The Parallel Life",
    "scenario": "You can see the happy life your partner would have without you.\n\nYou recognize a happy, fulfilled version of someone you love, but are absent from the picture. The vision could deepen your appreciation of choice or turn your relationship into a comparison with possibilities nobody can verify.",
    "question": "Would you look?",
    "twist": "Their alternate life is different, not clearly better.",
    "deeperQuestion": "Does comparison help you appreciate a chosen life?",
    "zh": {
      "title": "平行人生",
      "scenario": "你可以看見一個平行未來：伴侶沒有遇見你，仍然過得很幸福。你真心在乎那個人，卻不容易接受自己不在那段生活裡。這個畫面可能讓你更理解彼此的選擇，也可能讓現有關係不斷被拿來比較。",
      "question": "你會選擇看一看嗎？",
      "twist": "他們的另一個生活雖然不同，但並不明顯更好。",
      "deeperQuestion": "比較能幫助你更珍惜自己選擇的生活嗎？"
    }
  },
  {
    "id": "ponder-love-015",
    "category": "Love",
    "emoji": "💌",
    "title": "The Shared Password",
    "scenario": "Your partner offers every password as proof of trust.\n\nYou believe in honesty and also need space for private thoughts and other people's confidences. Sharing everything may offer reassurance without teaching either partner how to tolerate ordinary uncertainty.",
    "question": "Would you reciprocate?",
    "twist": "They feel refusal means you are hiding something.",
    "deeperQuestion": "Does trust grow through access or respected boundaries?",
    "zh": {
      "title": "共享密碼",
      "scenario": "伴侶主動把所有密碼交給你，說這代表完全信任。你相信誠實，也需要保留自己的想法，以及朋友交託的秘密。你要決定是否同樣交出密碼，並向對方解釋，私隱和隱瞞對你來說有何不同。",
      "question": "你會同樣把自己的密碼交給對方嗎？",
      "twist": "他們認為拒絕意味著你在隱瞞什麼。",
      "deeperQuestion": "信任是透過准入還是透過尊重界線而建立的？"
    }
  },
  {
    "id": "ponder-love-016",
    "category": "Love",
    "emoji": "🫶",
    "title": "The Invisible Chore List",
    "scenario": "You and your partner think chores are evenly divided. Yet you track supplies, family birthdays, and repair appointments, while they do most visible cleaning. Both feel exhausted and unseen. You agree to examine the workload without treating each other as opponents.",
    "question": "How would you make the work visible without turning the conversation into scorekeeping?",
    "twist": "Several standards you quietly maintain turn out to be things your partner does not think either of you needs to do.",
    "deeperQuestion": "Before dividing work fairly, should you decide which work matters? How does owning a task differ from helping?",
    "zh": {
      "title": "看不見的家務清單",
      "scenario": "你和伴侶覺得家務已經平均分配，但你總記得日用品快用完、家人生日和維修預約，對方則完成了大部分看得見的清潔工作。兩人都很累，也都覺得自己的付出沒有被看見。",
      "question": "你會怎樣一起盤點工作，而不把對話變成互相算帳？",
      "twist": "盤點後發現，有幾項你一直默默承擔的標準，其實對方並不認為有必要維持。",
      "deeperQuestion": "公平分工之前，是否要先協商哪些工作值得做？「負責」和「幫忙」差在哪裡？"
    }
  },
  {
    "id": "ponder-love-017",
    "category": "Love",
    "emoji": "🌹",
    "title": "The Public Proposal",
    "scenario": "Your partner proposes publicly, but you want more time.\n\nYou care about the person and know refusing publicly could feel humiliating. Saying yes to manage the audience would nevertheless create a promise your private feelings have not yet made.",
    "question": "Would you say yes temporarily?",
    "twist": "They genuinely believed you were ready.",
    "deeperQuestion": "Should sparing embarrassment require a false commitment?",
    "zh": {
      "title": "公開求婚",
      "scenario": "你的伴侶當眾求婚，但你想要更多時間考慮。你很在乎對方，也知道當眾拒絕會很尷尬。為了顧及他人感受而答應求婚，卻會做出你內心尚未做出的承諾。",
      "question": "你會在眾人面前暫時答應求婚嗎？",
      "twist": "他們真心相信你已經準備好了。",
      "deeperQuestion": "為了避免尷尬，是否應該做出虛假的承諾？"
    }
  },
  {
    "id": "ponder-love-018",
    "category": "Love",
    "emoji": "🏡",
    "title": "The Forgotten Song",
    "scenario": "Your partner no longer remembers the song that brought you together.\n\nThe song represents a turning point in how you understand the relationship. Their different memory makes you wonder whether shared significance must be expressed through remembering exactly the same details.",
    "question": "Would you feel hurt?",
    "twist": "They remember daily details you routinely forget.",
    "deeperQuestion": "Who decides which memories represent love?",
    "zh": {
      "title": "被遺忘的歌",
      "scenario": "你的伴侶已經記不起那首讓你們走到一起的歌了。這首歌對你們的關係來說是一個轉捩點。他們不同的記憶讓你不禁思考，共同的意義是否必須透過記住完全相同的細節才能表達出來。",
      "question": "你會感到受傷嗎？",
      "twist": "他們記得你經常忘記的日常細節。",
      "deeperQuestion": "誰來決定哪些記憶代表愛？"
    }
  },
  {
    "id": "ponder-love-019",
    "category": "Love",
    "emoji": "🕰️",
    "title": "The Old Promise",
    "scenario": "As teenagers, you promised to marry if both were single at thirty.\n\nThe promise once felt romantic because the future was distant and uncertain. Honoring it now would require treating two younger people's hopes as instructions for adults with more complicated lives.",
    "question": "Would you honor it?",
    "twist": "You remain close but feel no romantic attraction.",
    "deeperQuestion": "Can affection make an outdated promise binding?",
    "zh": {
      "title": "古老的承諾",
      "scenario": "你們年輕時曾約定，如果三十歲時兩人都還是單身，就結婚。當時，這個約定充滿浪漫情調，因為未來遙遠而充滿未知。如今，要履行這個約定，就意味著要把兩個年輕人的願望當作成年人生活的指南，而成年人的生活也更加複雜。",
      "question": "你會遵守嗎？",
      "twist": "你們保持著親密的關係，卻沒有產生浪漫的吸引力。",
      "deeperQuestion": "感情能否使過時的承諾具有約束力？"
    }
  },
  {
    "id": "ponder-love-020",
    "category": "Love",
    "emoji": "💐",
    "title": "The Secret Savings",
    "scenario": "Your partner keeps an emergency fund you did not know about.\n\nYou share expenses and have discussed a future together, so the secrecy surprises you. Their explanation asks you to distinguish planning for personal safety from planning to abandon the relationship.",
    "question": "Would you feel betrayed?",
    "twist": "They saved it to preserve personal independence.",
    "deeperQuestion": "Can commitment include preparing to leave safely?",
    "zh": {
      "title": "秘密儲蓄",
      "scenario": "你的伴侶藏有一筆你毫不知情的應急基金。你們共同承擔開銷，也曾討論過未來規劃，所以這種隱瞞讓你感到驚訝。對方的解釋讓你難以區分，這筆錢是用來保障自身安全還是為了結束這段關係。",
      "question": "你會覺得被背叛嗎？",
      "twist": "他們保存它是為了維護個人獨立。",
      "deeperQuestion": "承諾是否可以包括做好安全離開的準備？"
    }
  },
  {
    "id": "ponder-love-021",
    "category": "Love",
    "emoji": "🧵",
    "title": "The Long Goodbye",
    "scenario": "A relationship is ending kindly, but both keep postponing the final conversation.\n\nPostponing allows you to share a few more familiar moments without naming what has changed. It also risks making the remaining kindness feel like reassurance neither person can honestly offer.",
    "question": "Would you end it tonight?",
    "twist": "A shared celebration is next week.",
    "deeperQuestion": "When does delaying pain become prolonging it?",
    "zh": {
      "title": "漫長的告別",
      "scenario": "一段關係正在友好地結束，但雙方都在拖延最後的對話。拖延讓你們可以多享受一些熟悉的時光，而無需指出究竟發生了什麼變化。但這也可能導致剩餘的善意變成一種雙方都無法真誠提供的安慰。",
      "question": "你今晚會結束這一切嗎？",
      "twist": "下週將舉行慶祝活動。",
      "deeperQuestion": "延遲疼痛何時會變成延長疼痛？"
    }
  },
  {
    "id": "ponder-love-022",
    "category": "Love",
    "emoji": "🫖",
    "title": "The Love Translator",
    "scenario": "A device explains what your partner means behind every clumsy sentence.\n\nYou have often wished you could avoid misunderstandings and hear the caring intention underneath awkward words. A perfect device might help you connect, or make you less willing to do the work yourselves.",
    "question": "Would you use it?",
    "twist": "You stop asking them to explain themselves.",
    "deeperQuestion": "Can perfect interpretation replace active listening?",
    "zh": {
      "title": "愛情翻譯者",
      "scenario": "這款裝置能解釋伴侶每句笨拙話語背後的真正意義。你常常希望能夠避免誤會，聆聽那些尷尬話語背後隱藏的關懷。一款完美的設備或許能幫助你們建立更緊密的聯繫，也可能讓你們更不願意主動溝通。",
      "question": "你會使用它嗎？",
      "twist": "你不再要求他們解釋。",
      "deeperQuestion": "完美詮釋可以取代積極傾聽嗎？"
    }
  },
  {
    "id": "ponder-love-023",
    "category": "Love",
    "emoji": "🌙",
    "title": "The Unpopular Choice",
    "scenario": "Your friends dislike your partner for reasons you find superficial.\n\nYour friends want to protect you and know parts of your history your partner does not. Their concern deserves attention without automatically making their discomfort the final authority over your choices.",
    "question": "Would you trust their judgment?",
    "twist": "They correctly noticed problems in a past relationship.",
    "deeperQuestion": "How much authority should friends have over romance?",
    "zh": {
      "title": "不受歡迎的選擇",
      "scenario": "你的朋友不喜歡你的伴侶，而你覺得這些理由很膚淺。你的朋友想保護你，並且了解伴侶不知道的過往經驗。他們的關心值得重視，但這並不代表他們的不適就應該成為你最終選擇的依據。",
      "question": "你會相信他們的判斷嗎？",
      "twist": "他們正確地發現了過去一段感情中的問題。",
      "deeperQuestion": "朋友在戀愛關係中應該擁有多大的權力？"
    }
  },
  {
    "id": "ponder-love-024",
    "category": "Love",
    "emoji": "🪞",
    "title": "The Rescue Habit",
    "scenario": "You feel most loved when someone needs your help.\n\nYou are proud of their growth but feel less certain of your own place. A relationship built around helping must discover what remains when the other person no longer needs rescuing.",
    "question": "Would you question the relationship?",
    "twist": "Your partner becomes happier and more independent.",
    "deeperQuestion": "Can care survive losing the role of rescuer?",
    "zh": {
      "title": "救援習慣",
      "scenario": "當別人需要你的幫助時，你會覺得自己被愛。你為他們的成長感到自豪，但同時也會對自己感到迷惘。一段建立在幫助之上的關係，最終必須找到當對方不再需要被拯救時，這段關係還能剩下什麼。",
      "question": "你會質疑這段關係嗎？",
      "twist": "你的伴侶會變得更快樂、更獨立。",
      "deeperQuestion": "當你不再是拯救對方的人，關懷還能繼續存在嗎？"
    }
  },
  {
    "id": "ponder-love-025",
    "category": "Love",
    "emoji": "🎶",
    "title": "The Name Choice",
    "scenario": "Neither partner wants to change their surname after marriage.\n\nThe decision feels small until each family explains the history attached to its name. Choosing together requires deciding whether unity must be visible in the same way to everyone outside the relationship.",
    "question": "What would you choose?",
    "twist": "Both families attach deep meaning to their names.",
    "deeperQuestion": "Can a shared identity preserve separate histories?",
    "zh": {
      "title": "名稱選擇",
      "scenario": "你和伴侶婚後都不想改姓。原本看似簡單的選擇，隨著雙方家人講起姓氏背後的歷史，變得更有分量。你們要討論，建立共同的家是否需要同一個名字，以及如何保留各自的來處。",
      "question": "你會選擇什麼？",
      "twist": "這兩個家族都對自己的名字賦予了深刻的意義。",
      "deeperQuestion": "建立共同身分的同時，能否保留彼此各自的過去？"
    }
  },
  {
    "id": "ponder-love-026",
    "category": "Love",
    "emoji": "❤️",
    "title": "The Private Milestone",
    "scenario": "Your partner wants to keep your engagement private for several months.\n\nYou want to celebrate openly and feel unsettled by the delay. Their wish for privacy might protect a shared joy rather than conceal the commitment, but those experiences can feel different from your side.",
    "question": "Would you agree?",
    "twist": "Privacy helps them enjoy it without outside pressure.",
    "deeperQuestion": "Does sharing joy publicly prove its seriousness?",
    "zh": {
      "title": "私人里程碑",
      "scenario": "你的伴侶希望將訂婚保密幾個月。你想公開慶祝，但這種拖延讓你感到不安。他們希望保持低調或許是為了保護共同的喜悅，而非掩蓋承諾，但你對此的感受可能與他們的願望有所不同。",
      "question": "你同意嗎？",
      "twist": "隱私讓他們能夠不受外界壓力地享受生活。",
      "deeperQuestion": "公開分享喜悅能證明其嚴肅性嗎？"
    }
  },
  {
    "id": "ponder-love-027",
    "category": "Love",
    "emoji": "💌",
    "title": "The Childhood Friend",
    "scenario": "Your best friend and partner both need you on the same evening.\n\nYou made meaningful commitments to both people and cannot divide the evening in half. The choice may become a statement about priority even if you intend only to respond to this particular situation.",
    "question": "Whom would you choose?",
    "twist": "Neither situation is an emergency.",
    "deeperQuestion": "Does romantic commitment automatically outrank friendship?",
    "zh": {
      "title": "青梅竹馬",
      "scenario": "你的摯友和伴侶在同一晚都需要你。你對兩人都做出了重要的承諾，無法將這個夜晚一分為二。即使你只是想應對這種情況，你的選擇也可能顯示了你的優先順序。",
      "question": "你會選擇誰？",
      "twist": "這兩種情況都不是緊急情況。",
      "deeperQuestion": "戀愛關係是否必然比友誼更重要？"
    }
  },
  {
    "id": "ponder-love-028",
    "category": "Love",
    "emoji": "🫶",
    "title": "The Kind Breakup",
    "scenario": "Your partner says they are leaving because you deserve someone better.\n\nThe explanation sounds generous, yet leaves you unable to discuss what the relationship actually lacks. Being told what you deserve may prevent you from expressing what you want and are willing to work on.",
    "question": "Would you accept that explanation?",
    "twist": "They refuse to describe their own needs.",
    "deeperQuestion": "Can an apparently selfless explanation avoid honest responsibility?",
    "zh": {
      "title": "善意的分手",
      "scenario": "你的伴侶說他們要離開，因為你值得更好的人。這個解釋聽起來很寬容，卻讓你無法討論這段關係真正缺乏的是什麼。被告知你「應該」得到什麼，可能會讓你難以表達自己的需求和願意努力的方向。",
      "question": "你能接受這種解釋嗎？",
      "twist": "他們拒絕描述自己的需求。",
      "deeperQuestion": "一個看似無私的解釋能否逃避誠實的責任？"
    }
  },
  {
    "id": "ponder-love-029",
    "category": "Love",
    "emoji": "🌹",
    "title": "The Jealous Future",
    "scenario": "You know your partner will love someone else after your relationship ends.\n\nYou want them to be happy, but imagining a life in which you are replaced hurts. The knowledge separates caring about someone's future from wanting to remain central within it.",
    "question": "Would you want details?",
    "twist": "That future relationship helps them heal.",
    "deeperQuestion": "Can love include wishing happiness you will not share?",
    "zh": {
      "title": "嫉妒的未來",
      "scenario": "你知道你的伴侶會在你們分手後愛上別人。你希望他們幸福，但想像自己被取代後的生活會讓你感到痛苦。這種認知讓你明白，關心對方的未來和想要繼續留在對方生命中是兩回事。",
      "question": "你會想知道詳情嗎？",
      "twist": "未來的關係有助於他們療癒。",
      "deeperQuestion": "愛是否可以包含希望自己無法分享的幸福？"
    }
  },
  {
    "id": "ponder-love-030",
    "category": "Love",
    "emoji": "🏡",
    "title": "The Shared Hobby",
    "scenario": "You dislike your partner's favorite activity but pretend to enjoy it.\n\nYou initially pretended because joining seemed like a simple act of generosity. Repeating the performance has created a shared tradition that your partner believes reflects a genuine preference you both hold.",
    "question": "Would you tell them?",
    "twist": "They love it mainly because you do it together.",
    "deeperQuestion": "Can honesty preserve a connection built on pretending?",
    "zh": {
      "title": "共同的嗜好",
      "scenario": "你不喜歡伴侶最喜歡的活動，但假裝喜歡。最初你假裝喜歡，是因為參與其中似乎是一種簡單的慷慨之舉。反覆參與逐漸形成了共同的傳統，你的伴侶認為這反映了你們雙方的真實喜好。",
      "question": "你會告訴他們嗎？",
      "twist": "他們喜歡它主要是因為你們一起做。",
      "deeperQuestion": "誠實能維繫建立在偽裝之上的關係嗎？"
    }
  },
  {
    "id": "ponder-love-031",
    "category": "Love",
    "emoji": "🕰️",
    "title": "The Old Letters",
    "scenario": "Your partner keeps affectionate letters from past relationships.\n\nThe letters predate your relationship and are not messages being exchanged now. Your reaction may concern present trust, or the uncomfortable fact that someone you love had a full emotional life before you.",
    "question": "Would that bother you?",
    "twist": "They never reread them but dislike destroying history.",
    "deeperQuestion": "Does keeping a memory mean keeping an attachment?",
    "zh": {
      "title": "舊情書",
      "scenario": "你的伴侶保留著過去戀情的情書。這些信件寫於你們交往之前，並非你們現在正在互通的訊息。你的反應可能涉及對彼此的信任，或者讓你感到不舒服的是，你愛的人在你出現之前就已經擁有過一段完整的情感生活。",
      "question": "這會困擾你嗎？",
      "twist": "他們從不重讀這些歷史，但又不喜歡銷毀歷史。",
      "deeperQuestion": "保留記憶是否意味著保留依戀？"
    }
  },
  {
    "id": "ponder-love-032",
    "category": "Love",
    "emoji": "💐",
    "title": "The Money Gap",
    "scenario": "One partner earns much more but both work equally hard.\n\nYou want both partners to have dignity and room for personal choices after paying shared costs. A split that looks equal may leave one person with freedom and the other with almost no margin.",
    "question": "How should bills be split?",
    "twist": "The lower earner chose meaningful but poorly paid work.",
    "deeperQuestion": "Should financial fairness reflect income, effort, or choice?",
    "zh": {
      "title": "收入差距",
      "scenario": "一方收入遠高於另一方，但雙方都付出了同樣的努力。你希望雙方在分擔生活開支後，都能享有尊嚴和個人選擇的空間。表面上看似均等的分配，實際上可能使一方擁有自由，而另一方卻幾乎沒有任何餘地。",
      "question": "帳單該如何拆分？",
      "twist": "低收入者選擇有意義但收入低的工作。",
      "deeperQuestion": "財務公平應該反映收入、努力或選擇？"
    }
  },
  {
    "id": "ponder-love-033",
    "category": "Love",
    "emoji": "🧵",
    "title": "Intimacy Across Languages",
    "scenario": "You and your partner are most comfortable in different languages. Everyday conversation works, but childhood stories and hurt feelings bring each of you back to your first language. Some translations sound harsher than intended; others lose the feeling entirely.",
    "question": "Would you use stories, metaphors, writing, or patient questions? Describe a feeling that is hard to translate.",
    "twist": "One day, a short and imperfectly pronounced reassurance in your language moves you more than a fluent speech.",
    "deeperQuestion": "Does understanding come from accuracy or the effort to enter another person’s world? What if they conflict?",
    "zh": {
      "title": "不同語言的親密",
      "scenario": "你和伴侶最習慣的語言不同。日常聊天沒有問題，但談到童年或委屈時，你們都會轉回自己的母語，意思便不容易說清楚。有些詞，翻譯後聽起來太重，也有些顯得太輕。",
      "question": "你會用故事、比喻、文字，還是請對方慢慢問？先示範一個難翻譯的感受。",
      "twist": "有一天，對方用你的語言說了一句很短、發音也不完美的安慰，你卻比平常更感動。",
      "deeperQuestion": "理解來自說得準確，還是願意走近對方的世界？兩者衝突時怎麼辦？"
    }
  },
  {
    "id": "ponder-love-034",
    "category": "Love",
    "emoji": "🫖",
    "title": "The Future Child",
    "scenario": "You and your partner disagree about becoming parents.\n\nBoth possible futures matter deeply and cannot be combined by making a smaller compromise. Staying out of hope may postpone grief while quietly expecting one person to become someone they do not intend to be.",
    "question": "Would you stay together?",
    "twist": "Neither expects the other's preference to change.",
    "deeperQuestion": "Can love overcome fundamentally incompatible futures?",
    "zh": {
      "title": "未來的孩子",
      "scenario": "你和伴侶對是否成為父母有根本分歧。兩種未來都對當事人非常重要，也很難用小小的折衷來兼顧。繼續抱著「以後可能會改變」的希望，能暫時延後痛苦，卻也可能讓其中一方等待另一方不願成為的人。",
      "question": "你們會繼續在一起嗎？",
      "twist": "雙方都不認為對方的偏好會改變。",
      "deeperQuestion": "愛能克服本質上不相容的未來嗎？"
    }
  },
  {
    "id": "ponder-love-035",
    "category": "Love",
    "emoji": "🌙",
    "title": "The Open Calendar",
    "scenario": "Your partner wants every free evening together.\n\nYou enjoy being together but need unstructured time without explaining what you do with it. Requesting that space would protect your independence while challenging the meaning your partner assigns to closeness.",
    "question": "Would you reserve time alone?",
    "twist": "They experience alone time as emotional distance.",
    "deeperQuestion": "Can closeness require deliberate separation?",
    "zh": {
      "title": "開放日曆",
      "scenario": "你的伴侶希望每個空閒的晚上都和你在一起。你享受和伴侶相處的時光，但你需要一些自由支配的時間，而且不需要解釋你打算如何度過這段時間。提出這樣的要求既能保護你的獨立性，也能挑戰你的伴侶對親密關係的固有理解。",
      "question": "你會預留獨處的時間嗎？",
      "twist": "他們將獨處時間視為情感上的疏離。",
      "deeperQuestion": "親密關係是否需要刻意的分離？"
    }
  },
  {
    "id": "ponder-love-036",
    "category": "Love",
    "emoji": "🪞",
    "title": "The Silent Support",
    "scenario": "A partner quietly removes obstacles rather than offering verbal reassurance.\n\nYou can see the practical difference their help makes every day. Wanting reassurance as well does not erase that care, but it may feel like an accusation if the conversation begins only with what is missing.",
    "question": "Would you ask for words too?",
    "twist": "They feel their actions are going unnoticed.",
    "deeperQuestion": "Can asking for more coexist with appreciating enough?",
    "zh": {
      "title": "無聲的支持",
      "scenario": "伴侶會默默地排除障礙，而不是口頭上給予安慰。你每天都能感受到他們幫助帶來的實際改變。渴望得到安慰並不會抹殺這份關懷，但如果談話一開始就只專注在缺少的部分，可能會讓人感覺像是在指責對方。",
      "question": "除了實際行動，你也會要求伴侶用言語安慰你嗎？",
      "twist": "他們覺得自己的行為沒有引起注意。",
      "deeperQuestion": "索取更多、懂得欣賞能否並存？"
    }
  },
  {
    "id": "ponder-love-037",
    "category": "Love",
    "emoji": "🎶",
    "title": "The Truthful Gift",
    "scenario": "Your partner gives you an expensive gift you do not like.\n\nThe gift represents sacrifice, attention, and a misunderstanding about your taste. Being honest now could prevent future disappointment while making the giver feel that their effort has been evaluated rather than received.",
    "question": "Would you say so?",
    "twist": "They saved for months based on a mistaken hint.",
    "deeperQuestion": "Is protecting effort more important than sharing preferences?",
    "zh": {
      "title": "真誠的禮物",
      "scenario": "伴侶送了你一份昂貴的禮物，但你並不喜歡。\n\n這份禮物包含了付出、用心，以及對你喜好的誤解。現在坦白，可以避免將來再失望；但也可能令對方覺得，自己的心意正在被評分，而不是被接納。",
      "question": "你會坦白說自己不喜歡這份禮物嗎？",
      "twist": "他們根據一個錯誤的提示存了幾個月的錢。",
      "deeperQuestion": "保護送禮者的用心，比坦白自己的喜好更重要嗎？"
    }
  },
  {
    "id": "ponder-love-038",
    "category": "Love",
    "emoji": "❤️",
    "title": "The Anniversary Rewrite",
    "scenario": "Your partner remembers your first meeting in a more romantic way than it happened.\n\nThe romantic version is not malicious, and you enjoy hearing how fondly they remember it. Correcting the details raises the question of whether accuracy or the feeling expressed is the point of the story.",
    "question": "Would you correct the story?",
    "twist": "Their version has become a beloved family tale.",
    "deeperQuestion": "Can a shared myth belong alongside literal truth?",
    "zh": {
      "title": "週年紀念重寫",
      "scenario": "你的伴侶對你們初次相遇的回憶比實際情況更浪漫。這種浪漫化的描述並非出於惡意，你也樂於聽到他們如此深情地回憶起那次相遇。然而，如果對細節進行修正，就會引出一個問題：這個故事的重點究竟是追求事實的準確性，還是表達情感？",
      "question": "你會糾正對方對這段往事的描述嗎？",
      "twist": "他們的版本已成為一個深受喜愛的家庭故事。",
      "deeperQuestion": "共同的神話可以與字面上的真相並存嗎？"
    }
  },
  {
    "id": "ponder-love-039",
    "category": "Love",
    "emoji": "💌",
    "title": "The Difficult Friend",
    "scenario": "Your partner remains loyal to a friend who treats you dismissively.\n\nYou are not asking to control their friendships, but want the disrespect to be taken seriously. Doing nothing may preserve peace between them while asking you to carry the discomfort alone.",
    "question": "Would you ask them to intervene?",
    "twist": "They insist the friend behaves differently in private.",
    "deeperQuestion": "What does loyalty require when relationships overlap?",
    "zh": {
      "title": "難搞的朋友",
      "scenario": "你的伴侶仍然忠於一位對你冷漠無情的朋友。你並非要求控制他們的友誼，而是希望這種不尊重行為被重視。什麼都不做或許能維持他們之間的表面和平，但卻會讓你獨自承受這種不適。",
      "question": "你會請求他們介入嗎？",
      "twist": "他們堅持認為這位朋友在私下表現得不一樣。",
      "deeperQuestion": "當關係重疊時，忠誠需要什麼？"
    }
  },
  {
    "id": "ponder-love-040",
    "category": "Love",
    "emoji": "🫶",
    "title": "The Loving Distance",
    "scenario": "You feel closer to your partner while living apart.\n\nSeparate homes allow both of you to be more present when you meet. The arrangement works privately, yet repeated outside judgments make you question whether it counts as a sufficiently serious shared life.",
    "question": "Would you keep separate homes?",
    "twist": "Others claim you are avoiding commitment.",
    "deeperQuestion": "Should a relationship's form follow outsiders' expectations?",
    "zh": {
      "title": "愛的距離",
      "scenario": "你和伴侶分開居住，卻感覺彼此更親近。各自獨立的住所讓你們見面時都能更專注。這種安排私下運作良好，但外界的反覆評判讓你質疑這是否算得上足夠認真的共同生活。",
      "question": "你會保留分居的住所嗎？",
      "twist": "其他人則認為你在逃避承諾。",
      "deeperQuestion": "一段關係的形式是否應該符合外界的期望？"
    }
  },
  {
    "id": "ponder-love-041",
    "category": "Love",
    "emoji": "🌹",
    "title": "The Unread Diary",
    "scenario": "Your partner offers their diary to explain a difficult period.\n\nYou appreciate the trust and hope to understand them better. The invitation may cover their own experiences without giving either of you the right to expose people whose stories appear alongside them.",
    "question": "Would you read it?",
    "twist": "It includes private details about other people.",
    "deeperQuestion": "Can one person's openness expose someone else's privacy?",
    "zh": {
      "title": "未讀日記",
      "scenario": "你的伴侶提出要分享他們的日記，以解釋一段艱難時期。你很感激他們的信任，並希望藉此更了解他們。這份邀請可能涵蓋了他們自身的經歷，但並沒有賦予你們任何一方權利去曝光日記中出現的其他人的故事。",
      "question": "你會讀嗎？",
      "twist": "它包含其他人的私人資訊。",
      "deeperQuestion": "一個人的坦誠是否會洩漏另一個人的隱私？"
    }
  },
  {
    "id": "ponder-love-042",
    "category": "Love",
    "emoji": "🏡",
    "title": "The Timing Problem",
    "scenario": "You meet someone wonderful just before leaving for a year.\n\nYou feel a rare connection but know distance will arrive before many ordinary habits can form. Beginning honestly requires talking about uncertainty without treating it as proof that the relationship cannot matter.",
    "question": "Would you start a relationship?",
    "twist": "Neither wants to change their plans.",
    "deeperQuestion": "Is a difficult beginning a reason not to begin?",
    "zh": {
      "title": "時機不對",
      "scenario": "在你即將離開一年之際，你遇到了一個很棒的人。你感受到了一種難得的默契，但也知道在許多日常習慣形成之前，距離就會到來。坦誠地開始這段關係需要你們談論這種不確定性，而不是把它當作這段關係注定失敗的證據。",
      "question": "你會開始一段戀愛關係嗎？",
      "twist": "兩人都不想改變計畫。",
      "deeperQuestion": "開頭困難是放棄開始的理由嗎？"
    }
  },
  {
    "id": "ponder-love-043",
    "category": "Love",
    "emoji": "🕰️",
    "title": "The Familiar Argument",
    "scenario": "You both know a recurring disagreement will probably never disappear.\n\nThe disagreement does not involve harm, but it touches values neither person expects to change. Accepting it would mean learning to live with difference rather than calling every recurring conflict a failure.",
    "question": "Would you stay?",
    "twist": "Every other part of the relationship is strong.",
    "deeperQuestion": "Does a good partnership require solving every conflict?",
    "zh": {
      "title": "熟悉的爭吵",
      "scenario": "你們雙方都知道，反覆出現的分歧可能永遠不會消失。這種分歧雖然不涉及傷害，卻觸及了雙方都不願改變的價值觀。接受這一點意味著學會與差異共存，而不是把每一次反覆出現的衝突都視為失敗。",
      "question": "你願意留下來嗎？",
      "twist": "關係的其他面向都很強。",
      "deeperQuestion": "良好的夥伴關係是否需要解決所有衝突？"
    }
  },
  {
    "id": "ponder-love-044",
    "category": "Love",
    "emoji": "💐",
    "title": "The Emotional Echo",
    "scenario": "You can directly feel your partner's emotions for one day.\n\nYou hope direct experience would reduce defensiveness and make your support more accurate. Feeling everything at once might also make it difficult to distinguish helping your partner from escaping your own borrowed distress.",
    "question": "Would you try it?",
    "twist": "You cannot distinguish their feelings from your own.",
    "deeperQuestion": "Can empathy become overwhelming without boundaries?",
    "zh": {
      "title": "情緒迴響",
      "scenario": "你可以直接感受伴侶一天的情緒。你希望這種直接體驗能減少對方的防衛心理，讓你的支持更加精準。但同時感受所有情緒也可能讓你難以區分幫助伴侶、逃避自身借來的痛苦。",
      "question": "你會嘗試嗎？",
      "twist": "你無法區分他們的感受和你自己的感受。",
      "deeperQuestion": "如果沒有界限，同理心會變得難以承受嗎？"
    }
  },
  {
    "id": "ponder-love-045",
    "category": "Love",
    "emoji": "🧵",
    "title": "The Unfair Comparison",
    "scenario": "Your partner praises something an ex did better than you.\n\nYou can acknowledge the truth of the comparison while questioning why it was offered. A useful request could have been expressed without making your value feel dependent on outperforming somebody from the past.",
    "question": "Would you discuss it?",
    "twist": "The observation is accurate and not intended to hurt.",
    "deeperQuestion": "Can useful honesty ignore how comparison feels?",
    "zh": {
      "title": "不公平比較",
      "scenario": "伴侶提到，自己的前任在某件事上做得比你好。你承認比較可能屬實，卻仍然不舒服。你不確定對方是想表達一項需要，還是把你放進了不必要的競爭；同一個要求，也許可以用不同方式說出來。",
      "question": "你願意討論一下嗎？",
      "twist": "此觀察是準確的，並非意在傷害。",
      "deeperQuestion": "有用的誠實能否忽略比較帶來的感受？"
    }
  },
  {
    "id": "ponder-love-046",
    "category": "Love",
    "emoji": "🫖",
    "title": "The Breakup Button",
    "scenario": "A button ends your relationship with no pain for either person.\n\nYou have stayed partly because leaving would hurt someone you still care about. Removing that cost would reveal whether your decision rests on desire, commitment, fear, or a combination you have not examined.",
    "question": "Would you use it?",
    "twist": "It removes grief but not uncertainty about the choice.",
    "deeperQuestion": "Does painless leaving change the meaning of staying?",
    "zh": {
      "title": "分手鈕",
      "scenario": "一個按鈕就能結束你們的關係，讓雙方都不會感到痛苦。你之所以留下，部分原因是離開會傷害你仍然在乎的人。如果消除這種代價，就能揭示你的決定究竟是出於慾望、承諾、恐懼，還是你尚未檢視的某種組合。",
      "question": "你會使用它嗎？",
      "twist": "它消除了悲傷，但無法消除對選擇的不確定性。",
      "deeperQuestion": "無痛離開是否會改變留下來的意義？"
    }
  },
  {
    "id": "ponder-love-047",
    "category": "Love",
    "emoji": "🌙",
    "title": "An Agreement for Unexpected Interruptions",
    "scenario": "You stay with a distressed friend, miss dinner with your partner, and forget to send a message. Your partner supports helping but dislikes being left waiting. You want an agreement that respects both relationships when another unexpected interruption occurs.",
    "question": "What specific check-in and repair plan would you suggest, and when should exceptions apply?",
    "twist": "Next time your partner is the one who leaves unexpectedly, and you find the disruption harder than you expected.",
    "deeperQuestion": "Do you allow yourself the same flexibility you allow someone else? How could you avoid moving the standard?",
    "zh": {
      "title": "突發事情的聯絡約定",
      "scenario": "你臨時留下陪一位情緒低落的朋友，錯過了與伴侶的晚餐，也忘記通知。伴侶支持你幫忙，卻不想被放著等。你希望之後遇到類似事情，不必在照顧朋友和尊重伴侶之間倉促二選一。",
      "question": "你會提出甚麼具體的聯絡與補救方法？哪些情況可以例外？",
      "twist": "下次換成伴侶臨時離開，你才發現自己比想像中更介意被打亂安排。",
      "deeperQuestion": "我們給自己和對方的彈性，是否一樣？怎樣避免只在輪到自己時才改標準？"
    }
  },
  {
    "id": "ponder-love-048",
    "category": "Love",
    "emoji": "🪞",
    "title": "The Wedding Budget",
    "scenario": "You want a small wedding; your partner dreams of a large celebration.\n\nThe money could make a beautiful celebration possible without debt. Accepting it might also allow other people's preferences to become conditions on a day you hoped to shape together.",
    "question": "Where would you compromise?",
    "twist": "Their family offers money with strict conditions.",
    "deeperQuestion": "When does financial help become control over a shared milestone?",
    "zh": {
      "title": "婚禮預算",
      "scenario": "你想要一個小型婚禮；你的伴侶夢想著一場盛大的慶祝活動。對方家人願意提供的資助，可以讓一場美好的慶典成為可能，而無需背負債務。但接受這筆錢也可能意味著，其他人的喜好會成為你們共同期盼的婚禮的附加條件。",
      "question": "你會在哪些方面做出妥協？",
      "twist": "他們家提供錢，但附加了嚴格的條件。",
      "deeperQuestion": "何時經濟援助會變成對共同里程碑的控制？"
    }
  },
  {
    "id": "ponder-love-049",
    "category": "Love",
    "emoji": "🎶",
    "title": "The Shared Secret",
    "scenario": "Your partner tells you something they have never told anyone.\n\nYou want to respect the confidence and also need somewhere to process your reaction. A promise of secrecy may be harder to keep responsibly when you were not prepared for what it would contain.",
    "question": "Would you share it with your closest friend?",
    "twist": "You need support processing what you heard.",
    "deeperQuestion": "Can receiving a secret create burdens you did not choose?",
    "zh": {
      "title": "共同的秘密",
      "scenario": "你的伴侶告訴你一件他們從未告訴過任何人的事。你想尊重他們的保密意願，同時也需要一個地方消化自己的反應。當你事先沒有預料到事情會如何發展時，保守秘密的承諾可能很難做到盡善盡美。",
      "question": "你會把它分享給你最親密的朋友嗎？",
      "twist": "你需要幫助來消化你聽到的內容。",
      "deeperQuestion": "收到秘密會帶給你不想承擔的負擔嗎？"
    }
  },
  {
    "id": "ponder-love-050",
    "category": "Love",
    "emoji": "❤️",
    "title": "The Love Score",
    "scenario": "An app scores how compatible your relationship is each week.\n\nThe score feels useful because it gives uncertainty a simple shape. Trusting it over your experience could make you improve something real or start managing a number instead of noticing each other.",
    "question": "Would you check it?",
    "twist": "Your happiest week receives your lowest score.",
    "deeperQuestion": "Whose judgment should define a relationship's health?",
    "zh": {
      "title": "愛情分數",
      "scenario": "一款應用程式每週都會為你們的關係契合度評分。這個評分之所以有用，是因為它能將不確定性簡化。與其相信自己的經驗，不如相信這個評分，這或許能讓你改善一些實際存在的問題，或是讓你開始專注於一個數字，而不是真正地去關注彼此。",
      "question": "你會查看這個愛情分數嗎？",
      "twist": "你最快樂的一週得分最低。",
      "deeperQuestion": "由誰來判斷一段關係是否健康？"
    }
  },
  {
    "id": "ponder-love-051",
    "category": "Love",
    "emoji": "💌",
    "title": "The Different Beliefs",
    "scenario": "You deeply love someone whose worldview conflicts with yours.\n\nYou share affection and respect, so disagreement alone does not feel like a reason to leave. Planning a life together makes abstract differences concrete through decisions neither person can simply avoid.",
    "question": "Would you build a life together?",
    "twist": "The differences would affect important family decisions.",
    "deeperQuestion": "How much agreement does a shared life need?",
    "zh": {
      "title": "不同的信仰",
      "scenario": "你深愛著一個與你世界觀截然不同的人。你們彼此相愛、互相尊重，所以光是意見分歧並不足以成為分手的理由。共同規劃未來，會讓抽象的分歧變得具體化，雙方都無法迴避這些決定。",
      "question": "你會選擇和對方一起建立未來嗎？",
      "twist": "這些差異會影響重要的家庭決定。",
      "deeperQuestion": "共同生活需要多少共識？"
    }
  },
  {
    "id": "ponder-love-052",
    "category": "Love",
    "emoji": "🫶",
    "title": "The Almost Relationship",
    "scenario": "You and a friend repeatedly almost date but never do.\n\nThe possibility has become part of your closeness, giving ordinary moments a little extra meaning. Asking directly could open something good while ending the comfort of never having to risk a clear answer.",
    "question": "Would you finally ask?",
    "twist": "Naming the possibility could change an easy friendship.",
    "deeperQuestion": "Is uncertainty sometimes part of what sustains a connection?",
    "zh": {
      "title": "差一點成為戀人",
      "scenario": "你和一位朋友總是差點就約會了，但最終都沒能成真。這種可能性已經成為你們親密關係的一部分，讓平凡的時刻也增添了幾分特殊的意義。直接開口或許會開啟一段美好的緣分，但同時也可能結束這種永遠不必承擔風險、不必面對明確答案的舒適感。",
      "question": "你會終於開口，問清楚彼此的關係嗎？",
      "twist": "說出這種可能性可能會改變一段輕鬆的友誼。",
      "deeperQuestion": "不確定性有時是否也是維繫人際關係的一部分？"
    }
  },
  {
    "id": "ponder-love-053",
    "category": "Love",
    "emoji": "🌹",
    "title": "The Careful Compliment",
    "scenario": "Your partner praises your appearance more than your character.\n\nYou appreciate feeling attractive and do not want to reject a sincere compliment. The absence of other kinds of recognition nevertheless makes you wonder which parts of you are most visible in the relationship.",
    "question": "Would you ask them to change?",
    "twist": "They assume your abilities need no reassurance.",
    "deeperQuestion": "What do our desired compliments reveal about our needs?",
    "zh": {
      "title": "謹慎的讚美",
      "scenario": "你的伴侶對你的外表讚美多於對你的性格讚美。你很享受這種被認可的感覺，也不想拒絕真誠的讚美。然而，缺乏其他方面的認可讓你不禁思考，在這段關係中，你身上哪些特質最引人注目。",
      "question": "你會要求他們改變嗎？",
      "twist": "他們認為你的能力不需要任何保證。",
      "deeperQuestion": "我們渴望得到的讚美揭示了我們怎樣的需求？"
    }
  },
  {
    "id": "ponder-love-054",
    "category": "Love",
    "emoji": "🏡",
    "title": "The New Version",
    "scenario": "Your partner changes profoundly after pursuing a long-held dream.\n\nYou supported the dream sincerely, not as a promise that everything would remain convenient. Their fulfillment now asks you to separate celebrating their freedom from pretending that the changes cost you nothing.",
    "question": "Would you expect continuity?",
    "twist": "They feel more themselves than ever.",
    "deeperQuestion": "Can loving someone's growth mean losing your fit together?",
    "zh": {
      "title": "新版本",
      "scenario": "伴侶實現了一個長久以來的夢想，性格與生活方式也因此大幅改變。\n\n你當初是真心支持，並沒有要求一切永遠保持方便。如今你要分清楚：慶祝對方的自由，不代表必須假裝這些改變對自己毫無代價。",
      "question": "你會期望伴侶改變後，關係仍然維持原樣嗎？",
      "twist": "他們感覺比以往任何時候都更像自己。",
      "deeperQuestion": "愛一個人的成長是否會導致彼此失去契合度？"
    }
  },
  {
    "id": "ponder-love-055",
    "category": "Love",
    "emoji": "🕰️",
    "title": "The Return Ticket",
    "scenario": "An ex asks to try again after meaningfully addressing old problems.\n\nYou can see evidence of effort rather than only hear a familiar promise. Trying again would require new trust without denying why your earlier boundaries were necessary.",
    "question": "Would you consider it?",
    "twist": "Your friends remember only the earlier hurt.",
    "deeperQuestion": "Can a changed person deserve a changed evaluation?",
    "zh": {
      "title": "回程票",
      "scenario": "前任在認真解決過往問題後提出複合。你能看到對方努力的跡象，而不僅僅是聽到一句老生常談的承諾。複合需要建立新的信任，同時也要承認當初劃清界線的必要性。",
      "question": "你會考慮嗎？",
      "twist": "你的朋友只記得之前受到的傷害。",
      "deeperQuestion": "改變後的人是否應該得到不同的評價？"
    }
  },
  {
    "id": "ponder-love-056",
    "category": "Love",
    "emoji": "💐",
    "title": "The Daily Choice",
    "scenario": "A partner says love is a decision rather than a feeling.\n\nYou once imagined love as a feeling that automatically guides behavior. Their view suggests that reliable care may involve deliberate effort, especially when affection is present but not easy to feel.",
    "question": "Would that reassure you?",
    "twist": "They make caring choices even when affection feels distant.",
    "deeperQuestion": "Can commitment remain loving through emotional uncertainty?",
    "zh": {
      "title": "每日之選",
      "scenario": "伴侶說愛是一種選擇，而非一種感覺。你曾經以為愛是一種會自動引導行為的感覺。他們的觀點表明，可靠的關懷可能需要刻意付出，尤其是在愛意存在卻難以感受到的情況下。",
      "question": "這樣能讓你放心嗎？",
      "twist": "即使感覺不到愛意，他們也會做出關愛的選擇。",
      "deeperQuestion": "在情感不確定的情況下，承諾還能維持愛嗎？"
    }
  },
  {
    "id": "ponder-love-057",
    "category": "Love",
    "emoji": "🧵",
    "title": "The Public Couple",
    "scenario": "Your relationship becomes popular online and earns money.\n\nThe audience sees selected moments and rewards a recognizable version of your partnership. Keeping income stable may make it harder to change, disagree, or grow in ways that do not fit the shared public story.",
    "question": "Would you keep sharing it?",
    "twist": "Private disagreements now threaten shared income.",
    "deeperQuestion": "What happens when intimacy becomes a product?",
    "zh": {
      "title": "公開曬恩愛",
      "scenario": "你們的關係在網路上走紅並帶來收入。觀眾看到的是一些特定的片段，並且認同你們關係中符合大眾認知的一面。穩定的收入可能會讓你們更難做出改變、產生分歧，或以不符合公開形象的方式發展關係。",
      "question": "你會繼續分享嗎？",
      "twist": "私人糾紛現在威脅到共同收入。",
      "deeperQuestion": "當親密關係變成一種商品時會發生什麼事？"
    }
  },
  {
    "id": "ponder-love-058",
    "category": "Love",
    "emoji": "🫖",
    "title": "The Unbalanced Effort",
    "scenario": "You initiate almost every conversation, but your partner responds warmly.\n\nTheir replies are thoughtful, and the time you spend together feels warm. You are unsure whether the imbalance reflects different habits or a relationship that would disappear if you stopped carrying its momentum.",
    "question": "Would you stop initiating?",
    "twist": "They think your arrangement works perfectly.",
    "deeperQuestion": "Can affection be real while effort remains unequal?",
    "zh": {
      "title": "不平衡的努力",
      "scenario": "你幾乎總是主動發起對話，但你的伴侶總是熱情回應。他們的回覆體貼周到，你們在一起的時光也充滿溫馨。你不確定這種不平衡是源自於彼此習慣的差異，還是因為如果你停止維繫這段關係，它就會消失。",
      "question": "你會停止主動聯絡對方嗎？",
      "twist": "他們認為你的安排非常完美。",
      "deeperQuestion": "付出不對等時，感情還能是真的嗎？"
    }
  },
  {
    "id": "ponder-love-059",
    "category": "Love",
    "emoji": "🌙",
    "title": "The Early Confession",
    "scenario": "Someone declares love before you know your own feelings.\n\nYou like the person and do not want silence to sound like rejection. Responding with words you are not ready to mean could offer short-term comfort at the expense of a more honest beginning.",
    "question": "Would you say anything similar?",
    "twist": "They promise they do not need an immediate answer.",
    "deeperQuestion": "Why can another person's certainty create pressure?",
    "zh": {
      "title": "太早的告白",
      "scenario": "在你還沒弄清楚自己的感受之前，就有人向你告白。你喜歡這個人，但又不想因為沉默而被誤解為拒絕。用你還沒準備好接受的話語回應，或許能帶來短暫的安慰，卻會錯過一段更真誠的開始。",
      "question": "你會說類似的話嗎？",
      "twist": "他們表示不需要立即答覆。",
      "deeperQuestion": "為什麼他人的確定性會產生壓力？"
    }
  },
  {
    "id": "ponder-love-060",
    "category": "Love",
    "emoji": "🪞",
    "title": "The Last Dance",
    "scenario": "You can relive one dance with someone you no longer see.\n\nYou remember the dance partly because it happened once and could not be kept. Repeating it offers comfort while changing your relationship to the memory from something lived to something consumed.",
    "question": "Would you return?",
    "twist": "Afterward, the memory becomes less vivid each time.",
    "deeperQuestion": "Can revisiting something beautiful slowly consume it?",
    "zh": {
      "title": "最後一支舞",
      "scenario": "你可以重新經歷一次，與一位已不再見面的人共舞的時光。這支舞之所以珍貴，部分原因是它曾經只有一次。再次回去或許能帶來安慰，也會讓原本留在記憶裡的相遇，變成可以反覆造訪的地方。",
      "question": "你會回來嗎？",
      "twist": "之後，每次回憶，記憶都會變得不那麼清晰。",
      "deeperQuestion": "重溫美好的事物會慢慢將其吞噬嗎？"
    }
  },
  {
    "id": "ponder-love-061",
    "category": "Love",
    "emoji": "🎶",
    "title": "The Boundary Lesson",
    "scenario": "You set a new boundary that disappoints your partner.\n\nThe earlier arrangement was genuinely acceptable to you, so nobody broke the original rules. Changing it asks both partners to recognize that continuing consent depends on present needs, not only past agreement.",
    "question": "Would you hold it?",
    "twist": "They respected the old arrangement in good faith.",
    "deeperQuestion": "How should relationships handle changing consent and needs?",
    "zh": {
      "title": "界線這一課",
      "scenario": "你設定了新的界限，這讓你的伴侶感到失望。之前的安排你確實可以接受，所以雙方都沒有違反原有的規則。改變規則需要雙方都意識到，持續的同意取決於當下的需求，而不僅僅是過去的約定。",
      "question": "你會堅持這條新界線嗎？",
      "twist": "他們本著誠意尊重舊安排。",
      "deeperQuestion": "人際關係應該如何處理不斷變化的意願和需求？"
    }
  },
  {
    "id": "ponder-love-062",
    "category": "Love",
    "emoji": "❤️",
    "title": "The Different Apologies",
    "scenario": "You want acknowledgment; your partner wants to fix the practical problem.\n\nYou would appreciate a solution, but also need them to understand why the event mattered. Their practical effort may be sincere while leaving the emotional meaning of the problem largely untouched.",
    "question": "Which should come first?",
    "twist": "Both consider their approach the caring one.",
    "deeperQuestion": "Can repair work without understanding what hurt?",
    "zh": {
      "title": "不同的道歉",
      "scenario": "你想要得到認可；你的伴侶想要解決實際問題。你希望得到解決方案，但也需要他們理解這件事對你的意義。他們的實際努力或許是真誠的，但卻幾乎沒有觸及問題的情感層面。",
      "question": "哪一個應該先進行？",
      "twist": "兩人都認為自己的做法是關懷的。",
      "deeperQuestion": "如果不了解對方為何受傷，仍然能真正修補關係嗎？"
    }
  },
  {
    "id": "ponder-love-063",
    "category": "Love",
    "emoji": "💌",
    "title": "The Great Opportunity",
    "scenario": "Your partner receives an opportunity that would make your life harder.\n\nYou are proud of them and worried about what the opportunity requires from you. Treating hesitation as disloyalty would make it harder to have the honest conversation needed to support the change sustainably.",
    "question": "Would you celebrate immediately?",
    "twist": "They notice hesitation before you can explain it.",
    "deeperQuestion": "Can love hold joy and personal disappointment together?",
    "zh": {
      "title": "大機遇",
      "scenario": "你的伴侶獲得了一個機會，這會讓你的生活變得更加艱難。你為他們感到驕傲，同時也擔心這個機會對你的要求。如果你將猶豫視為不忠，那麼你們就更難進行坦誠的對話，而這種對話對於持續地支持這種改變至關重要。",
      "question": "你會立即慶祝嗎？",
      "twist": "在你解釋之前，他們就注意到了你的猶豫。",
      "deeperQuestion": "愛能同時容納快樂和個人失望嗎？"
    }
  },
  {
    "id": "ponder-love-064",
    "category": "Love",
    "emoji": "🫶",
    "title": "The Friendship Anniversary",
    "scenario": "Your best friend asks for the same rituals usually reserved for romance.\n\nYour friend wants recognition for a bond that has lasted through important years. The request challenges whether certain rituals express a particular relationship or whether exclusivity gives those rituals their meaning.",
    "question": "Would you agree?",
    "twist": "Your partner feels those rituals should be exclusive.",
    "deeperQuestion": "Who decides which relationships deserve ceremony?",
    "zh": {
      "title": "友誼紀念日",
      "scenario": "你最好的朋友提出要和你舉行通常只在浪漫場合才會舉行的儀式。你的朋友希望這段歷經多年考驗的友誼能得到認可。這個請求引發了人們的思考：究竟是某些儀式表達了特定的關係，還是儀式的排他性賦予了它們意義？",
      "question": "你同意嗎？",
      "twist": "你的伴侶認為這些儀式應該是專屬的。",
      "deeperQuestion": "誰來決定哪些關係值得舉行儀式？"
    }
  },
  {
    "id": "ponder-love-065",
    "category": "Love",
    "emoji": "🌹",
    "title": "The Unchosen Sacrifice",
    "scenario": "Your partner gives up a dream for you without discussing it.\n\nYou might have supported a different arrangement if asked beforehand. Gratitude becomes complicated when a sacrifice made without discussion later appears as a claim on decisions you never agreed to exchange.",
    "question": "Would you feel grateful?",
    "twist": "They later expect a comparable sacrifice.",
    "deeperQuestion": "Can an unrequested gift create a legitimate debt?",
    "zh": {
      "title": "你沒要求的犧牲",
      "scenario": "伴侶沒有先和你商量，就為你放棄了一個長久的夢想。如果早點知道，你可能會提出另一種安排。你感激這份心意，卻不確定，是否因此欠下一次同等的犧牲，尤其當你從未同意用這種方式交換未來。",
      "question": "你會心存感激嗎？",
      "twist": "後來，對方期待你作出同等程度的犧牲。",
      "deeperQuestion": "一份你沒有要求的犧牲，能合理地變成你必須償還的人情嗎？"
    }
  },
  {
    "id": "ponder-love-066",
    "category": "Love",
    "emoji": "🏡",
    "title": "The Honest Ending",
    "scenario": "You no longer want the relationship, though nobody did anything wrong.\n\nYou respect the person and cannot identify a betrayal that explains your wish to leave. Ending kindly may require accepting that another person's disappointment does not make your preference illegitimate.",
    "question": "Would you leave?",
    "twist": "Your partner believes love should survive without a clear problem.",
    "deeperQuestion": "Does ending require proving that someone failed?",
    "zh": {
      "title": "誠實的結局",
      "scenario": "你不再想維持這段關係，儘管沒有人做錯什麼。你尊重對方，也無法指出對方背叛了你，從而想要離開。要體面地結束這段關係，或許需要你接受這樣一個事實：對方的失望並不能讓你的選擇變得不合理。",
      "question": "你會離開嗎？",
      "twist": "你的伴侶認為愛情應該在沒有明顯問題的情況下繼續存在。",
      "deeperQuestion": "結束是否需要證明某人失敗？"
    }
  },
  {
    "id": "ponder-love-067",
    "category": "Love",
    "emoji": "🕰️",
    "title": "The Favorite Person",
    "scenario": "Your partner admits you are not the person they have most fun with.\n\nThe answer is not intended as an insult, and you recognize the warmth behind it. Still, you must decide whether being deeply trusted feels enough when you had imagined being someone's favorite in every way.",
    "question": "Would that hurt?",
    "twist": "They say you are the person they trust most.",
    "deeperQuestion": "Must one relationship meet every emotional need?",
    "zh": {
      "title": "最愛的人",
      "scenario": "伴侶坦言，和你相處並不是最有趣的，但你是自己最信任的人。你知道這句話並非想傷害你，仍然覺得失落。你原本期待自己在對方心裡各方面都無可取代，如今要分清楚，被愛是否一定要等於每一項都排第一。",
      "question": "這樣會令你感到受傷嗎？",
      "twist": "他們說你是他們最信任的人。",
      "deeperQuestion": "一段感情必須滿足所有的情感需求嗎？"
    }
  },
  {
    "id": "ponder-love-068",
    "category": "Love",
    "emoji": "💐",
    "title": "The Silent Evening",
    "scenario": "You spend an evening together without speaking and feel content.\n\nYou enjoy the ease of sharing space without needing to perform conversation. Your partner needs more active attention, making the issue a difference in experience rather than proof that either person is uncaring.",
    "question": "Would you call it quality time?",
    "twist": "Your partner experiences it as disconnection.",
    "deeperQuestion": "Can the same shared moment meet only one person's needs?",
    "zh": {
      "title": "寂靜的夜晚",
      "scenario": "你和伴侶安靜地共度一個晚上，沒有太多交談，你卻很滿足。你喜歡不用刻意找話題，也能舒服地待在同一個空間。伴侶的感受可能不同：對方期待更多主動關注，並不會自動把安靜理解成親密。",
      "question": "你會把這個安靜的夜晚視為有品質的相處時間嗎？",
      "twist": "你的伴侶會覺得與你疏遠了。",
      "deeperQuestion": "同一個共享時刻能否只滿足一個人的需求？"
    }
  },
  {
    "id": "ponder-love-069",
    "category": "Love",
    "emoji": "🧵",
    "title": "The Love Letter Machine",
    "scenario": "A machine helps you express feelings you cannot articulate.\n\nThe machine helps you identify language for feelings you genuinely have. Your partner may value the finished emotional message or the imperfect effort of hearing your own unassisted voice.",
    "question": "Would you use it?",
    "twist": "Your partner treasures letters written without assistance.",
    "deeperQuestion": "Does authorship matter more than emotional accuracy?",
    "zh": {
      "title": "情書機器",
      "scenario": "這台機器可以幫助你表達那些你無法言說的情感。它可以幫助你找到合適的語言來描述你內心真實的感受。你的伴侶或許會珍惜最終成型的情感訊息，或許會珍惜你未經修飾的、略顯稚嫩的表達。",
      "question": "你會使用它嗎？",
      "twist": "你的伴侶珍惜那些獨自撰寫的信件。",
      "deeperQuestion": "作者身分比情感準確度更重要嗎？"
    }
  },
  {
    "id": "ponder-love-070",
    "category": "Love",
    "emoji": "🫖",
    "title": "The Shared Home",
    "scenario": "Your partner moves into a home filled with your personal history.\n\nThe objects are not merely decoration; they connect you to people and stages of your life. Sharing the space asks you to create room without treating either person's history as an inconvenience.",
    "question": "What would you change?",
    "twist": "Removing meaningful objects makes you feel less at home.",
    "deeperQuestion": "How does a place become equally shared?",
    "zh": {
      "title": "共享住宅",
      "scenario": "你的伴侶搬進了一間充滿你個人回憶的房子。這些物品不僅僅是裝飾品；它們將你與生命中的人事物連結起來。共享這個空間意味著你們要創造空間，同時又不把彼此的過往經驗視為不便。",
      "question": "你會做出哪些改變？",
      "twist": "移除有意義的物品會讓你感覺不那麼像在家。",
      "deeperQuestion": "如何使一個地方實現平等共享？"
    }
  },
  {
    "id": "ponder-love-071",
    "category": "Love",
    "emoji": "🌙",
    "title": "Two Sketches of Retirement",
    "scenario": "You and your partner draw ideal retirement days. Yours contains neighbors, friends, and regular activities; theirs shows a quiet cabin, long journeys, and few appointments. You assumed you shared a future, but had never discussed what an ordinary day would actually feel like.",
    "question": "What three questions would distinguish essential needs from the particular images used to express them?",
    "twist": "The cabin turns out to represent less pressure, not distance from friends.",
    "deeperQuestion": "When planning together, how can you avoid reading too much into someone’s first picture of the future?",
    "zh": {
      "title": "兩張退休草圖",
      "scenario": "你和伴侶各畫一張理想中的退休生活：你的畫裡有熱鬧社區、朋友和固定活動；對方畫的是安靜小屋、長途旅行和很少的日程。你們一直以為對未來有共識，卻從未談到一天會怎樣過。",
      "question": "你會先問對方哪三個問題，分辨哪些是核心需要，哪些只是想像中的形式？",
      "twist": "你發現對方畫小屋，是想少一點壓力，並不是想遠離朋友。",
      "deeperQuestion": "共同規劃未來時，怎樣避免對一個畫面作出太多假設？"
    }
  },
  {
    "id": "ponder-love-072",
    "category": "Love",
    "emoji": "🪞",
    "title": "The Caring Lie",
    "scenario": "Your partner hides a minor disappointment to avoid burdening you.\n\nYou know how much you are already carrying and appreciate their thoughtfulness. But being protected from every small disappointment may stop you noticing patterns until the distance between you is much harder to address.",
    "question": "Would you prefer to know?",
    "twist": "You are already overwhelmed by other problems.",
    "deeperQuestion": "When does withholding become care rather than distance?",
    "zh": {
      "title": "關愛的謊言",
      "scenario": "你的伴侶為了不讓你負擔，會隱瞞一些小小的失望。你知道自己已經承受了多少，也感激他們的體貼。但是，被保護得免受所有小失望的困擾，可能會讓你忽略一些模式，直到你們之間的距離越來越遠，難以彌合。",
      "question": "你想知道嗎？",
      "twist": "你已經被其他問題壓得喘不過氣來。",
      "deeperQuestion": "在甚麼情況下，暫時隱瞞是體貼，而不是拉開距離？"
    }
  },
  {
    "id": "ponder-love-073",
    "category": "Love",
    "emoji": "🎶",
    "title": "The Better Listener",
    "scenario": "Your friend understands your emotions more easily than your partner.\n\nDifferent people know different sides of you, and the friendship does not diminish your commitment. The comparison matters if it becomes a reason to stop explaining your inner life to your partner altogether.",
    "question": "Would you worry?",
    "twist": "Your partner supports you in ways the friend cannot.",
    "deeperQuestion": "Should emotional closeness be ranked across relationships?",
    "zh": {
      "title": "更好的傾聽者",
      "scenario": "你的朋友比你的伴侶更容易理解你的情緒。不同的人了解你不同的方面，友誼並不會削弱你們之間的感情。只有當這個比較成為你完全停止向伴侶傾訴內心世界的理由時，它才真正重要。",
      "question": "你會擔心嗎？",
      "twist": "你的伴侶以朋友無法做到的方式支持你。",
      "deeperQuestion": "是否應該對人際關係中的情感親密程度進行排名？"
    }
  },
  {
    "id": "ponder-love-074",
    "category": "Love",
    "emoji": "❤️",
    "title": "The Moving Deadline",
    "scenario": "Your partner keeps postponing a commitment while asking you to wait.\n\nYou understand that readiness cannot be forced into existence. A deadline may clarify your own limits without legitimately deciding what the other person ought to feel by a particular date.",
    "question": "Would you set a deadline?",
    "twist": "Their uncertainty is sincere, not strategic.",
    "deeperQuestion": "How can patience avoid becoming self-abandonment?",
    "zh": {
      "title": "一再延後的期限",
      "scenario": "伴侶一直延後一個重要承諾，同時希望你繼續等下去。你理解準備好不能勉強，但自己的時間和計劃也在改變。訂下期限可能是為了說清楚自己能接受甚麼，而不一定是要求對方到時必須有某種感覺。",
      "question": "你會為這件事訂下一個期限嗎？",
      "twist": "他們的不確定性是真誠的，而不是策略性的。",
      "deeperQuestion": "如何避免耐心變成自我放棄？"
    }
  },
  {
    "id": "ponder-love-075",
    "category": "Love",
    "emoji": "💌",
    "title": "The Old Photograph",
    "scenario": "Your partner dislikes a cherished photo because it shows an unhappy period.\n\nYou see the image as evidence that you made it through something difficult together. Their discomfort asks whether a shared object should remain visible when its meaning is so different for each person.",
    "question": "Would you stop displaying it?",
    "twist": "For you it represents surviving that period together.",
    "deeperQuestion": "Who decides how a shared past is displayed?",
    "zh": {
      "title": "老照片",
      "scenario": "你的伴侶不喜歡一張珍藏的照片，因為它記錄了一段不愉快的時光。而你卻認為這張照片是你們共同度過難關的見證。他們的不適引發了一個疑問：當一件共同擁有的物品對每個人的意義截然不同時，它是否應該繼續被展示？",
      "question": "你會停止擺放那張照片嗎？",
      "twist": "對你來說，它代表著一起度過那段時期。",
      "deeperQuestion": "誰來決定如何展現共同的歷史？"
    }
  },
  {
    "id": "ponder-love-076",
    "category": "Love",
    "emoji": "🫶",
    "title": "The Unexpected Reunion",
    "scenario": "You meet an old love and feel something immediately.\n\nThe feeling is real, but it does not tell you what a renewed relationship would actually be like. Choosing another meeting turns an unexpected reaction into a deliberate next step with consequences for your present life.",
    "question": "Would you arrange another meeting?",
    "twist": "Your current relationship is happy.",
    "deeperQuestion": "Is curiosity harmless when it may change what you want?",
    "zh": {
      "title": "意外重逢",
      "scenario": "你偶遇舊愛，心中瞬間湧起一股莫名的感覺。這種感覺真實存在，但它卻無法告訴你重續舊情究竟會是什麼樣子。選擇再次見面，讓這意料之外的情感轉化為深思熟慮的下一步，並對你當下的生活產生深遠的影響。",
      "question": "你會安排再次見面嗎？",
      "twist": "你目前的感情關係很幸福。",
      "deeperQuestion": "好奇心如果可能會改變你的想法，它是否無害？"
    }
  },
  {
    "id": "ponder-love-077",
    "category": "Love",
    "emoji": "🌹",
    "title": "The Distance Ritual",
    "scenario": "A nightly call sustains your long-distance relationship but exhausts you.\n\nYou look forward to hearing their voice while also dreading how little time remains afterward. Changing the ritual could protect the relationship from resentment if both of you can separate frequency from affection.",
    "question": "Would you reduce it?",
    "twist": "Your partner counts on its predictability.",
    "deeperQuestion": "Can a ritual become harmful while still being meaningful?",
    "zh": {
      "title": "遠距離的儀式",
      "scenario": "每晚的電話維繫著你們的異地戀，但也讓你們精疲力竭。你期待聽到對方的聲音，卻又害怕通話結束後剩下的時間所剩無幾。如果你們都能將通話頻率與情感分開，改變這個習慣或許能避免彼此產生怨恨。",
      "question": "你會減少這個習慣的頻率嗎？",
      "twist": "你的伴侶依賴它的可預測性。",
      "deeperQuestion": "儀式在有意義的同時，是否會變得有害？"
    }
  },
  {
    "id": "ponder-love-078",
    "category": "Love",
    "emoji": "🏡",
    "title": "The Unequal Grief",
    "scenario": "You and your partner grieve the same loss at different speeds.\n\nYou do not want returning pleasure to imply that the loss mattered less. Each person's changing emotions may need room without becoming evidence in a competition over who cared more.",
    "question": "Would you hide your returning joy?",
    "twist": "They interpret happiness as forgetting.",
    "deeperQuestion": "Does shared grief require shared timing?",
    "zh": {
      "title": "不平等的悲痛",
      "scenario": "你和伴侶經歷了同一件失去，卻以不同速度走出悲傷。\n\n你不希望自己重新感到快樂，被理解成不再重視那段失去。每個人的情緒都需要變化的空間，而不應變成一場比較誰更在乎的比賽。",
      "question": "你會隱藏自己逐漸恢復的快樂嗎？",
      "twist": "他們將幸福解釋為遺忘。",
      "deeperQuestion": "共同經歷悲傷，是否代表必須以同樣的速度復原？"
    }
  },
  {
    "id": "ponder-love-079",
    "category": "Love",
    "emoji": "🕰️",
    "title": "The Secret Admirer",
    "scenario": "You discover your partner anonymously encouraged you before you met.\n\nThe encouragement helped at a vulnerable time and appears sincerely meant. Knowing it came from a future partner changes whether you see it as freely offered support or part of an undisclosed plan.",
    "question": "Would that feel romantic?",
    "twist": "They deliberately concealed their involvement.",
    "deeperQuestion": "When does a thoughtful surprise become manipulation?",
    "zh": {
      "title": "秘密仰慕者",
      "scenario": "你發現你的伴侶在你們見面之前曾經匿名鼓勵你。這份鼓勵在你脆弱的時候給了你很大的幫助，而且看起來是真誠的。但在得知這份鼓勵來自未來的伴侶後，你對它的看法改變了：是真心的支持，還是某個未公開計畫的一部分？",
      "question": "那樣會覺得浪漫嗎？",
      "twist": "他們故意隱瞞了自己的參與。",
      "deeperQuestion": "精心準備的驚喜何時會變成操控？"
    }
  },
  {
    "id": "ponder-love-080",
    "category": "Love",
    "emoji": "💐",
    "title": "The Love Guarantee",
    "scenario": "A treatment guarantees lasting affection but removes the possibility of choosing to leave.\n\nBoth of you currently want the relationship to last, which makes the guarantee tempting. Consent today would remove the ability to respond differently to circumstances neither person can fully anticipate.",
    "question": "Would you take it?",
    "twist": "Both partners must consent before it begins.",
    "deeperQuestion": "Can love remain meaningful without future freedom?",
    "zh": {
      "title": "愛情保證",
      "scenario": "這種治療方案保證了長久的感情，但也剝奪了選擇離開的可能性。你們雙方目前都希望這段關係能夠長久，這使得這種保證頗具誘惑力。然而，如今的同意方式會剝奪雙方在無法完全預料的情況下做出不同反應的能力。",
      "question": "你會接受嗎？",
      "twist": "雙方必須同意後才能開始。",
      "deeperQuestion": "如果沒有未來的自由，愛情還能有意義嗎？"
    }
  },
  {
    "id": "ponder-love-081",
    "category": "Love",
    "emoji": "🧵",
    "title": "The Family Name",
    "scenario": "Your family repeatedly mispronounces your partner's name despite corrections.\n\nYou have corrected them gently several times and now notice your partner becoming quiet at gatherings. Treating the errors as harmless may protect family comfort while leaving the affected person to absorb repeated dismissal.",
    "question": "Would you confront them?",
    "twist": "They insist the mistakes are affectionate.",
    "deeperQuestion": "Can good intentions outweigh repeated disrespect?",
    "zh": {
      "title": "姓氏",
      "scenario": "儘管你多次糾正，家人仍然反覆念錯你伴侶的名字。你已經溫和地糾正他們好幾次，現在卻發現你的伴侶在聚會上變得沉默寡言。如果將這些錯誤視為無傷大雅，或許能維護家人的舒適感，但卻會讓受影響的人承受反覆被忽視的痛苦。",
      "question": "你會和他們對峙嗎？",
      "twist": "他們堅稱這些錯誤是出於愛意。",
      "deeperQuestion": "良好的意願能否抵銷一再的不尊重？"
    }
  },
  {
    "id": "ponder-love-082",
    "category": "Love",
    "emoji": "🫖",
    "title": "Should “Us” Be Public?",
    "scenario": "Your partner wants to announce your relationship online; you normally keep private life among people you know. They worry about being hidden, while you dread questions from relatives and colleagues. Neither of you intends to deny the relationship or conceal another partner.",
    "question": "How would you distinguish acknowledgment from disclosure and propose a workable compromise?",
    "twist": "You suggest introductions to important people, but learn that your partner is hurt mainly because you never initiate taking a photo together.",
    "deeperQuestion": "What different needs can sit behind the same request, and how would you ask without assuming the answer?",
    "zh": {
      "title": "要不要公開「我們」？",
      "scenario": "伴侶想在社交平台公開你們的關係，你則習慣把私生活留給熟人。對方擔心自己像被藏起來，你擔心公開後會收到家人和同事的追問。你們都沒有打算否認這段關係。",
      "question": "你會怎樣區分「承認彼此」和「公開細節」？提出一個雙方都能接受的做法。",
      "twist": "你提出先向重要的人介紹伴侶，對方卻說自己在意的其實是你從未主動合照。",
      "deeperQuestion": "同一個要求背後，可能藏著哪些不同需要？怎樣問才不會先替對方下結論？"
    }
  },
  {
    "id": "ponder-love-083",
    "category": "Love",
    "emoji": "🌙",
    "title": "The Shared Pet",
    "scenario": "After separating, you both want to keep the pet you raised together.\n\nBoth people have real attachments and have contributed to care in different ways. The pet's welfare may not align neatly with equal division, effort already invested, or what feels emotionally fair to either former partner.",
    "question": "How would you decide?",
    "twist": "The pet prefers the person with less free time.",
    "deeperQuestion": "Should fairness prioritize people or the dependent being?",
    "zh": {
      "title": "共享寵物",
      "scenario": "分居後，你們都想繼續飼養共同養育的寵物。雙方都對寵物投入了真摯的感情，並以不同的方式參與了照顧。寵物的福祉可能無法簡單地按照均分、已投入的精力或任何一方在情感上認為的公平原則來分配。",
      "question": "你會如何決定？",
      "twist": "這隻寵物更喜歡空閒時間較少的人。",
      "deeperQuestion": "公平應該優先考慮人還是受扶養者？"
    }
  },
  {
    "id": "ponder-love-084",
    "category": "Love",
    "emoji": "🪞",
    "title": "The Honest Preference",
    "scenario": "Your partner changes their style and you prefer the old one.\n\nThe new style is not harmful and makes them visibly happier. Offering an unsolicited preference could be honest while encouraging them to organize self-expression around your approval rather than their own comfort.",
    "question": "Would you tell them?",
    "twist": "They feel more confident in the new style.",
    "deeperQuestion": "When should personal taste stay private?",
    "zh": {
      "title": "誠實的偏好",
      "scenario": "你的伴侶改變了穿衣風格，而你更喜歡以前的風格。新的風格並無害處，反而讓他們看起來更快樂。主動表達你的偏好，既坦誠又能鼓勵他們圍繞你的認可而非自身的舒適度來表達自我。",
      "question": "你會告訴他們嗎？",
      "twist": "他們對新風格更有信心。",
      "deeperQuestion": "個人品味何時該保密？"
    }
  },
  {
    "id": "ponder-love-085",
    "category": "Love",
    "emoji": "🎶",
    "title": "The Imagined Future",
    "scenario": "You love the future you planned together more than your current relationship.\n\nThe plan once grew from a satisfying present, but now functions as a reason to overlook daily disconnection. Working toward it together may restore closeness or merely delay admitting that the shared life has changed.",
    "question": "Would you stay?",
    "twist": "Your partner senses the distance but shares the dream.",
    "deeperQuestion": "Can a promised future sustain an unsatisfying present?",
    "zh": {
      "title": "想像的未來",
      "scenario": "你更愛你們共同規劃的未來，而不是現在的關係。這個計劃曾經源自於一段令人滿足的當下，但現在卻成了你們忽略日常疏離的藉口。共同努力實現它或許能重拾親密，也可能只是讓你們暫時逃避承認共同生活改變的事實。",
      "question": "你會留下來嗎？",
      "twist": "你的伴侶感受到了距離，但與你共享夢想。",
      "deeperQuestion": "一個被承諾的未來能否維繫一個不令人滿意的現在？"
    }
  },
  {
    "id": "ponder-love-086",
    "category": "Love",
    "emoji": "❤️",
    "title": "The Forgiveness Clock",
    "scenario": "A partner wants to know exactly when you will stop feeling hurt.\n\nYou want the relationship to move forward and recognize the effort being made. A promised deadline could reassure them while asking you to perform recovery before your actual feelings have caught up.",
    "question": "Would you give a timeline?",
    "twist": "They have sincerely changed their behavior.",
    "deeperQuestion": "Can emotional repair be scheduled fairly?",
    "zh": {
      "title": "原諒的時鐘",
      "scenario": "伴侶想知道，究竟再過多久，你才不會為之前的事受傷。你看到對方已努力改變，也想讓關係繼續。給一個明確日期能讓對方安心，卻也可能迫使你在尚未復原時，表現得像已經放下。",
      "question": "你會給出明確的時間表嗎？",
      "twist": "他們真心實意地改變了自己的行為。",
      "deeperQuestion": "情緒修復能否公平地安排？"
    }
  },
  {
    "id": "ponder-love-087",
    "category": "Love",
    "emoji": "💌",
    "title": "The Supportive Rival",
    "scenario": "You and your partner compete for the same rare opportunity.\n\nYou have always celebrated each other's progress when success did not directly compete. Supporting preparation now makes generosity concrete because improving their chance may reduce your own.",
    "question": "Would you help them prepare?",
    "twist": "Only one of you can succeed.",
    "deeperQuestion": "Can mutual support survive directly competing interests?",
    "zh": {
      "title": "支持的對手",
      "scenario": "你和你的伴侶正在競爭同一個難得的機會。過去，當成功並非直接競爭時，你們總是為彼此的進步而慶祝。如今，支持對方的準備工作讓這份慷慨顯得更加具體，因為提高對方的機會可能會降低你自身的成功率。",
      "question": "你願意幫他們準備嗎？",
      "twist": "你們之中只有一個人能成功。",
      "deeperQuestion": "相互支持能否在利益直接衝突的情況下生存？"
    }
  },
  {
    "id": "ponder-love-088",
    "category": "Love",
    "emoji": "🫶",
    "title": "The Unshared Dream",
    "scenario": "You discover a major ambition your partner never mentioned.\n\nYou believed you shared important hopes, so the omission feels like distance. Their privacy may have protected something fragile rather than represented a deliberate choice to exclude you from their future.",
    "question": "Would you feel excluded?",
    "twist": "They were afraid naming it would make it feel impossible.",
    "deeperQuestion": "Does intimacy require sharing unfinished hopes?",
    "zh": {
      "title": "無人分享的夢想",
      "scenario": "你發現伴侶有一個從未提及的重大抱負。你以為你們擁有共同的美好願望，所以這種隱瞞讓你感到疏遠。他們的隱私或許是為了保護某些脆弱的東西，而非刻意將你排除在他們的未來之外。",
      "question": "你會感到被排斥嗎？",
      "twist": "他們擔心為它命名會讓人覺得不可能。",
      "deeperQuestion": "親密是否代表連尚未成形的夢想，也必須分享？"
    }
  },
  {
    "id": "ponder-love-089",
    "category": "Love",
    "emoji": "🌹",
    "title": "The Beloved Routine",
    "scenario": "Your partner loves a routine you find increasingly boring.\n\nThe routine carries safety and affectionate familiarity for one person, while the other experiences repetition as stagnation. Changing it requires preserving its emotional function rather than simply replacing old activities with new ones.",
    "question": "Would you change it?",
    "twist": "The predictability helps them feel secure.",
    "deeperQuestion": "How should novelty and emotional safety be balanced?",
    "zh": {
      "title": "摯愛的日常",
      "scenario": "你的伴侶喜歡你越來越覺得無聊的日常作息。對一方來說，這種日常作息帶來安全感和親密的熟悉感，而另一方則將重複視為停滯不前。改變這種作息需要保留其情緒功能，而不僅僅是用新的活動取代舊的活動。",
      "question": "你會改變它嗎？",
      "twist": "可預測性讓他們感到安全。",
      "deeperQuestion": "如何平衡新奇性和情緒安全？"
    }
  },
  {
    "id": "ponder-love-090",
    "category": "Love",
    "emoji": "🏡",
    "title": "The Unexpected Apology",
    "scenario": "A former friend apologizes after years of silence.\n\nThe apology acknowledges things you once needed them to understand, but your life no longer depends on that understanding. You can appreciate their growth without knowing whether renewed closeness would be good for you.",
    "question": "Would you reopen contact?",
    "twist": "You already feel peaceful without them.",
    "deeperQuestion": "Does accepting an apology require renewed access?",
    "zh": {
      "title": "意想不到的道歉",
      "scenario": "一位昔日好友在多年沉默後向你道歉。道歉中承認了你曾經需要他們理解的事情，但你的生活如今已不再依賴這些理解。你可以欣賞他們的成長，而無需確定重拾親密關係是否對你有益。",
      "question": "你會重新聯絡對方嗎？",
      "twist": "沒有他們，你已經感到平靜了。",
      "deeperQuestion": "接受對方的道歉，是否代表必須重新讓對方走進你的生活？"
    }
  },
  {
    "id": "ponder-love-091",
    "category": "Love",
    "emoji": "🕰️",
    "title": "The Private Celebration",
    "scenario": "Your partner achieves something important while you are having a terrible day.\n\nTheir achievement deserves attention, and your pain also remains real. Sharing the truth might allow a more thoughtful celebration instead of requiring either person's experience to erase the other's.",
    "question": "Would you join their celebration?",
    "twist": "They would gladly postpone if they knew.",
    "deeperQuestion": "Can honesty about pain coexist with generosity toward joy?",
    "zh": {
      "title": "私人慶典",
      "scenario": "當你心情糟糕透頂的時候，你的伴侶卻取得了重要的成就。他們的成就值得肯定，而你的痛苦也同樣真實存在。坦誠相待或許能讓慶祝活動更有意義，而不是讓任何一方的感受抹殺另一方的感受。",
      "question": "你願意加入他們的慶祝活動嗎？",
      "twist": "如果他們知道的話，他們會很樂意延後。",
      "deeperQuestion": "對痛苦的坦誠能否與對快樂的慷慨並存？"
    }
  },
  {
    "id": "ponder-love-092",
    "category": "Love",
    "emoji": "💐",
    "title": "The Role Reversal",
    "scenario": "The partner who usually provides support suddenly needs much more care.\n\nYou both have habits shaped by who usually appears strong and who usually asks for help. Adapting may require accepting vulnerability without treating the new need as a failure of the old relationship.",
    "question": "Would your relationship adapt?",
    "twist": "Neither of you knows how to reverse the roles.",
    "deeperQuestion": "Can a caring pattern become an inflexible identity?",
    "zh": {
      "title": "角色互換",
      "scenario": "平時提供支持的一方突然需要更多照顧。你們雙方的習慣都受到誰通常表現得堅強、誰通常尋求幫助的影響。適應這種變化可能需要接受脆弱，而不是將新的需求視為舊關係的失敗。",
      "question": "你認為你們的關係能適應角色互換嗎？",
      "twist": "你們兩個都不知道如何互換角色。",
      "deeperQuestion": "關懷模式能否變成僵化的認同？"
    }
  },
  {
    "id": "ponder-love-093",
    "category": "Love",
    "emoji": "🧵",
    "title": "The Uncomfortable Gift",
    "scenario": "Your partner offers a major gift that would make leaving financially difficult.\n\nThe offer is generous and would solve an immediate practical problem. Accepting creates a form of reliance that can affect your freedom even if nobody ever deliberately uses it to pressure you.",
    "question": "Would you accept?",
    "twist": "They have no intention of using it as leverage.",
    "deeperQuestion": "Can dependence exist without deliberate control?",
    "zh": {
      "title": "令人不安的禮物",
      "scenario": "你的伴侶提出一份貴重的禮物，這會讓你在經濟上難以離開。這份禮物慷慨大方，能夠解決眼前的實際問題。接受這份禮物會讓你產生依賴，即使沒有人故意利用這種依賴來逼迫你，它也可能影響你的自由。",
      "question": "你願意接受嗎？",
      "twist": "他們並沒有打算利用它作為籌碼。",
      "deeperQuestion": "依賴可以在沒有刻意控制的情況下存在嗎？"
    }
  },
  {
    "id": "ponder-love-094",
    "category": "Love",
    "emoji": "🫖",
    "title": "The Shared Silence",
    "scenario": "You both avoid discussing an obvious problem to preserve a peaceful week.\n\nThe pleasant week feels valuable after a stressful period, and neither person wants to spoil it. Avoidance becomes risky when each reads the other's silence as agreement that the problem has disappeared.",
    "question": "Would you bring it up?",
    "twist": "The problem will not become easier later.",
    "deeperQuestion": "Is temporary peace sometimes borrowed conflict?",
    "zh": {
      "title": "共同的沉默",
      "scenario": "為了維持平靜的一周，你們都刻意迴避一個顯而易見的問題。經歷了一段壓力重重的時期後，這輕鬆的一周顯得彌足珍貴，誰也不想破壞它。然而，當雙方都把對方的沉默解讀為默認問題已經消失時，這種迴避就變得危險。",
      "question": "你會提起這件事嗎？",
      "twist": "這個問題以後也不會變得容易。",
      "deeperQuestion": "眼前的平靜，會不會只是把衝突留待日後？"
    }
  },
  {
    "id": "ponder-love-095",
    "category": "Love",
    "emoji": "🌙",
    "title": "The Friendship Boundary",
    "scenario": "A close friend wants more emotional intimacy than you can offer.\n\nYou care about the friendship and do not want to disappear without explanation. A boundary may preserve a more sustainable connection while disappointing someone who hoped closeness would keep expanding.",
    "question": "Would you step back?",
    "twist": "They are not asking for romance.",
    "deeperQuestion": "Do friendships need explicit limits too?",
    "zh": {
      "title": "友誼的邊界",
      "scenario": "一位摯友渴望的情感親密程度超過了你的能力範圍。你珍惜這段友誼，不想毫無解釋地消失。劃清界線或許能維繫一段更長久的友誼，但也會令那些希望親密關係不斷加深的人感到失望。",
      "question": "你願意退後嗎？",
      "twist": "他們不是在尋求浪漫。",
      "deeperQuestion": "友誼也需要明確的界線嗎？"
    }
  },
  {
    "id": "ponder-love-096",
    "category": "Love",
    "emoji": "🪞",
    "title": "The Different Holidays",
    "scenario": "You and your partner celebrate holidays with incompatible family expectations.\n\nThe expectations come from affection and tradition rather than hostility. Choosing together means acknowledging that a fair arrangement may still leave people disappointed, even when nobody has been treated carelessly.",
    "question": "Whose tradition comes first?",
    "twist": "Both families believe absence means rejection.",
    "deeperQuestion": "Can building a new family require disappointing an old one?",
    "zh": {
      "title": "不同的節日",
      "scenario": "你和你的伴侶在慶祝節日時，對彼此的家庭期望並不一致。這些期望源自於感情和傳統，而非敵意。共同做出選擇意味著要承認，即使沒有人受到不公平對待，公平的安排可能仍然會讓某些人感到失望。",
      "question": "誰的傳統優先？",
      "twist": "兩個家庭都認為缺席意味著拒絕。",
      "deeperQuestion": "建立新家庭是否必然會使舊家庭失望？"
    }
  },
  {
    "id": "ponder-love-097",
    "category": "Love",
    "emoji": "🎶",
    "title": "The Unfinished Goodbye",
    "scenario": "Someone leaves without giving the explanation you want.\n\nYou want an explanation that makes the ending understandable, but cannot require another person to provide one indefinitely. Respecting their request leaves you with the work of making meaning without every answer.",
    "question": "Would you keep asking?",
    "twist": "They clearly request no further contact.",
    "deeperQuestion": "Can closure be something you must create yourself?",
    "zh": {
      "title": "未完成的告別",
      "scenario": "有人離開時沒有給出你想要的解釋。你想要一個能讓結局合情合理的解釋，但又不能無限期地要求別人提供解釋。尊重他們的要求意味著你需要自己去理解那些沒有答案的事情。",
      "question": "你會繼續問嗎？",
      "twist": "他們明確要求不再聯絡。",
      "deeperQuestion": "有時候，為一段關係畫上句號，是否只能靠自己？"
    }
  },
  {
    "id": "ponder-love-098",
    "category": "Love",
    "emoji": "❤️",
    "title": "The Future Promise",
    "scenario": "Your partner asks you to promise you will always feel the same.\n\nYou can promise honesty, effort, and care more realistically than an unchanging emotional state. The challenge is offering reassurance that is both comforting now and truthful about what a person can control.",
    "question": "Would you make the promise?",
    "twist": "They need reassurance after an earlier loss.",
    "deeperQuestion": "What can a person honestly promise about future feelings?",
    "zh": {
      "title": "未來的承諾",
      "scenario": "你的伴侶要求你承諾永遠保持同樣的感覺。比起一成不變的情緒狀態，你更能現實地承諾誠實、努力和關心。困難在於如何提供既能帶來當下安慰，又能坦誠面對自身能力範圍的保證。",
      "question": "你願意做出這個承諾嗎？",
      "twist": "他們在經歷先前的失去後需要得到安慰。",
      "deeperQuestion": "一個人能對未來的感受做出怎樣的誠實承諾？"
    }
  },
  {
    "id": "ponder-love-099",
    "category": "Love",
    "emoji": "💌",
    "title": "The Whole Truth",
    "scenario": "You can learn everything your partner has ever felt about you.\n\nThe information would include passing irritation, doubts they worked through, and affection they never expressed well. Complete access might make you more informed without making your interpretation more fair.",
    "question": "Would you choose to know?",
    "twist": "Many feelings were temporary and contradictory.",
    "deeperQuestion": "Is intimacy strengthened by knowing more than a person chose?",
    "zh": {
      "title": "全部真相",
      "scenario": "你可以了解伴侶對你的一切感受。這些訊息包括他們短暫的惱怒、他們克服的疑慮，以及他們從未好好表達過的愛。完全了解這些資訊或許能讓你掌握更多信息，但未必能讓你的解讀更加客觀公正。",
      "question": "你願意知道嗎？",
      "twist": "許多感覺都是暫時的，而且是矛盾的。",
      "deeperQuestion": "知道超出對方願意透露的心事，真的會令你們更親密嗎？"
    }
  },
  {
    "id": "ponder-love-100",
    "category": "Love",
    "emoji": "🫶",
    "title": "The Ordinary Tuesday",
    "scenario": "You can exchange spectacular romance for reliably kind ordinary days.\n\nThe spectacular version would give you stories to remember, while the ordinary version would shape how most of your actual days feel. You must choose without assuming that excitement always becomes care or that reliability cannot feel romantic.",
    "question": "Which would you choose?",
    "twist": "You cannot combine both in this imagined bargain.",
    "deeperQuestion": "What actually makes a shared life feel loved?",
    "zh": {
      "title": "普通的星期二",
      "scenario": "你可以用轟轟烈烈的浪漫換取平凡溫馨的日子。轟轟烈烈的浪漫會讓你擁有值得紀念的故事，而平凡溫馨的日子則會塑造你大部分日常生活的感受。你必須做出選擇，不要想當然地認為激情一定會變成憂慮，或者可靠就一定不能浪漫。",
      "question": "你會選擇哪一個？",
      "twist": "在這種假想的交易中，你不能將兩者結合。",
      "deeperQuestion": "究竟是什麼讓共同生活充滿愛？"
    }
  },
  {
    "id": "ponder-deep-002",
    "category": "Deep",
    "emoji": "🧠",
    "title": "The Experience Room",
    "scenario": "A room gives you a perfectly satisfying life that is entirely simulated.\n\nInside, relationships feel reciprocal and accomplishments feel earned, even though their circumstances are generated. Remaining outside preserves contact with reality without guaranteeing an equally satisfying experience of living.",
    "question": "Would you enter permanently?",
    "twist": "You would forget choosing the simulation.",
    "deeperQuestion": "Does happiness need contact with reality?",
    "zh": {
      "title": "體驗室",
      "scenario": "一個房間能讓你體驗到完全模擬的完美生活。在房間裡，人際關係感覺是互惠的，成就感覺是靠自己努力得來的，即使這一切的發生都是人為設定的。而待在房間外，雖然能與現實保持聯繫，卻無法保證獲得同樣令人滿意的生活體驗。",
      "question": "你會選擇永遠住進這個模擬世界嗎？",
      "twist": "進去之後，你會忘記自己曾選擇進入模擬世界。",
      "deeperQuestion": "幸福需要與現實接觸嗎？"
    }
  },
  {
    "id": "ponder-deep-003",
    "category": "Deep",
    "emoji": "🪞",
    "title": "The Last Observer",
    "scenario": "You become the last conscious observer of a beautiful universe.\n\nThe universe contains patterns and possibilities that no one else will notice. Protecting it would express your appreciation, but there would be no future community to inherit what you saved.",
    "question": "Does its beauty still matter?",
    "twist": "You can preserve it but never share it.",
    "deeperQuestion": "Does value require someone to experience it?",
    "zh": {
      "title": "最後的觀察者",
      "scenario": "你成為了這美麗宇宙中最後一位有意識的觀察者。宇宙中蘊藏著無人能察覺的模式和可能性。守護它便是表達你的感激之情，但你所守護的一切，卻不會有未來的社群繼承。",
      "question": "它的美麗如今還重要嗎？",
      "twist": "你可以保存這份美，卻永遠無法與任何人分享。",
      "deeperQuestion": "價值是否需要親身體驗？"
    }
  },
  {
    "id": "ponder-deep-004",
    "category": "Deep",
    "emoji": "⏳",
    "title": "The Replaced Ship",
    "scenario": "Every part of your childhood boat is replaced over time.\n\nYou still remember learning to sail in it, and others recognize its history. The rebuilt boat challenges whether those connections follow physical parts or the continuity of the vessel you kept using.",
    "question": "Is it still your boat?",
    "twist": "Someone rebuilds another boat from the discarded parts.",
    "deeperQuestion": "Does identity follow material, history, or continuity?",
    "zh": {
      "title": "零件全換過的船",
      "scenario": "你從小乘坐的那艘船，隨著歲月逐一更換零件，直到所有部分都換過。\n\n你仍記得在船上學習駕船的日子，其他人也認得它的歷史。這些連結，究竟依附於原來的材料，還是依附於你一直使用、一直修補的那艘船？",
      "question": "所有零件都換過後，它還是原來那艘船嗎？",
      "twist": "有人用廢棄的零件重新造了一艘船。",
      "deeperQuestion": "認同是取決於物質、歷史還是延續性？"
    }
  },
  {
    "id": "ponder-deep-005",
    "category": "Deep",
    "emoji": "🌌",
    "title": "The Forgotten Achievement",
    "scenario": "You accomplish something extraordinary, but all records and memories of it vanish.\n\nThe effort shaped your days while it happened, even if no later story preserves it. You must decide whether value belongs to an experience itself or depends on what remains afterward.",
    "question": "Was it still worthwhile?",
    "twist": "You also forget your own accomplishment.",
    "deeperQuestion": "Can meaning survive without remembrance?",
    "zh": {
      "title": "被遺忘的成就",
      "scenario": "你完成了一件非凡之事，但所有記錄和記憶都消失了。這段經歷塑造了你當時的每一天，即使之後沒有留下任何痕跡。你必須決定，價值究竟在於經歷本身，還是取決於事後留下的東西。",
      "question": "這樣做還值得嗎？",
      "twist": "你也忘了自己的成就。",
      "deeperQuestion": "意義能否在沒有記憶的情況下存續？"
    }
  },
  {
    "id": "ponder-deep-006",
    "category": "Deep",
    "emoji": "📖",
    "title": "The Predicted Choice",
    "scenario": "A machine predicts your next decision with perfect accuracy.\n\nThe predicted decision feels entirely like your own deliberation, with reasons you recognize as yours. Being accurately described from outside may not feel the same as being forced by an outside cause.",
    "question": "Are you still choosing freely?",
    "twist": "Knowing its prediction is already included in its calculation.",
    "deeperQuestion": "Does predictability rule out freedom?",
    "zh": {
      "title": "預測的選擇",
      "scenario": "機器能夠完美預測你的下一個決定。預測的決定感覺完全像是你自己深思熟慮的結果，其理由也正是你自己的。來自外部的準確預測與被外在因素強迫的感覺截然不同。",
      "question": "你還在自由選擇嗎？",
      "twist": "就連你得知預測後會作出的反應，也早已包含在它的計算之中。",
      "deeperQuestion": "可預測性是否排除了自由？"
    }
  },
  {
    "id": "ponder-deep-007",
    "category": "Deep",
    "emoji": "🌀",
    "title": "The Longer Life",
    "scenario": "You can live for centuries while everyone you know ages normally.\n\nExtra years would allow skills, places, and relationships you could never otherwise experience. The price would include repeatedly learning how to belong in worlds that no longer share your earliest memories.",
    "question": "Would you accept?",
    "twist": "You can form new relationships throughout your life.",
    "deeperQuestion": "Does mortality make relationships more valuable?",
    "zh": {
      "title": "更長的壽命",
      "scenario": "你可以活上幾個世紀，而你認識的所有人都會正常老化。額外的歲月將讓你體驗到原本永遠無法企及的技能、地方和人際關係。但代價是，你必須反覆學習如何融入那些早已與你最初的記憶截然不同的世界。",
      "question": "你願意接受嗎？",
      "twist": "你一生中可以建立新的關係。",
      "deeperQuestion": "死亡是否使人際關係更有價值？"
    }
  },
  {
    "id": "ponder-deep-008",
    "category": "Deep",
    "emoji": "🧩",
    "title": "The Reverse Memory",
    "scenario": "You remember tomorrow clearly but forget yesterday.\n\nYou recognize places through what will happen rather than what has happened there. Your sense of continuity rests on anticipation, making an ordinary change of plan feel like losing part of yourself.",
    "question": "How would you define yourself?",
    "twist": "You can change tomorrow, making the memories disappear.",
    "deeperQuestion": "Does identity depend more on history or expectation?",
    "zh": {
      "title": "逆向記憶",
      "scenario": "你對明天記憶猶新，卻遺忘昨日。你辨認地點是透過未來將要發生的事情，而非過去已發生的事。你的連續性感建立在期待之上，因此，即使是計劃的普通改變，都會讓你感覺像是失去了一部分自我。",
      "question": "你如何定義自己？",
      "twist": "你可以改變明天，讓記憶消失。",
      "deeperQuestion": "認同感取決於歷史還是期望？"
    }
  },
  {
    "id": "ponder-deep-009",
    "category": "Deep",
    "emoji": "🕯️",
    "title": "The Happiness Dial",
    "scenario": "You can increase happiness without changing anything about your life.\n\nYour life contains real frustrations as well as good things you struggle to appreciate. Increasing happiness might help you act more freely or make necessary changes feel less urgent.",
    "question": "Would you turn it up?",
    "twist": "Dissatisfaction currently motivates your most meaningful work.",
    "deeperQuestion": "Can unpleasant feelings serve values happiness cannot?",
    "zh": {
      "title": "幸福撥號盤",
      "scenario": "你無需改變生活的任何方面就能提升幸福感。你的生活中既有令人沮喪的現實，也有你難以欣賞的美好事物。提升幸福感或許能讓你行動更自在，或是讓你覺得必要的改變不再那麼迫切。",
      "question": "你會把自己的幸福感調高嗎？",
      "twist": "不滿情緒目前激勵你做最有意義的工作。",
      "deeperQuestion": "不愉快的感覺能否服務幸福無法提供的價值？"
    }
  },
  {
    "id": "ponder-deep-010",
    "category": "Deep",
    "emoji": "🛶",
    "title": "The Meaning Certificate",
    "scenario": "An authority proves your life has a specific cosmic purpose.\n\nYou have spent years searching for direction and imagine certainty would be a relief. Learning a purpose would not necessarily make you love it, or explain why an assigned role deserves obedience.",
    "question": "Would you read it?",
    "twist": "The purpose is ordinary and unrelated to your ambitions.",
    "deeperQuestion": "Is assigned meaning better than created meaning?",
    "zh": {
      "title": "人生意義證書",
      "scenario": "權威人士證明你的人生有特定的宇宙意義。你多年來一直在尋找人生方向，並認為確定性會讓你感到解脫。然而，了解人生意義並不一定會讓你熱愛它，也無法解釋為何被賦予的角色值得服從。",
      "question": "你會讀嗎？",
      "twist": "目的很普通，與你的抱負無關。",
      "deeperQuestion": "賦予的意義比創造的意義好嗎？"
    }
  },
  {
    "id": "ponder-deep-011",
    "category": "Deep",
    "emoji": "🪐",
    "title": "The Empty Universe",
    "scenario": "You learn humanity exists through chance rather than any deliberate plan.\n\nYou can still recognize kindness, suffering, beauty, and the effects of your actions. What changes is the larger story through which you explain why those experiences should matter at all.",
    "question": "Would your priorities change?",
    "twist": "Nothing about your relationships or abilities changes.",
    "deeperQuestion": "Does an origin determine a life's worth?",
    "zh": {
      "title": "空虛的宇宙",
      "scenario": "你得知，人類的存在源自偶然，沒有任何事先安排好的宇宙計劃。善意、痛苦、美和你的選擇仍然一樣真實。改變的是那個用來解釋一切為何重要的大故事，你需要重新想想，沒有預定目的是否等於沒有意義。",
      "question": "你的優先事項會改變嗎？",
      "twist": "你的人際關係和能力都不會改變。",
      "deeperQuestion": "出身決定生命的價值嗎？"
    }
  },
  {
    "id": "ponder-deep-012",
    "category": "Deep",
    "emoji": "🌊",
    "title": "The Last Day",
    "scenario": "You know this is your final day, but can forget that knowledge.\n\nKnowing the limit helps you identify what matters, but also makes every minute feel like a test. Forgetting could restore ease while preventing deliberate goodbyes you might otherwise choose.",
    "question": "Would you forget?",
    "twist": "Forgetting would let you enjoy ordinary moments calmly.",
    "deeperQuestion": "Is awareness of an ending a gift or burden?",
    "zh": {
      "title": "最後一天",
      "scenario": "你知道今天是你的最後一天，但你可以選擇忘記這一點。知道時間限制能幫助你認清什麼才是最重要的，但也會讓你感覺每一分鐘都像是一場考驗。忘記或許能讓你重拾輕鬆，但也會讓你錯過那些你原本可能會選擇進行的刻意告別。",
      "question": "你會忘記嗎？",
      "twist": "遺忘會讓你平靜地享受平凡的時刻。",
      "deeperQuestion": "結束的認知是恩賜還是負擔？"
    }
  },
  {
    "id": "ponder-deep-013",
    "category": "Deep",
    "emoji": "🗝️",
    "title": "How Would You Admit Uncertainty?",
    "scenario": "You state a view confidently during a discussion, and people begin making plans around it. Later you realize the supporting evidence is weaker than you thought, although nothing proves the conclusion false. Revising your position may make you appear inconsistent.",
    "question": "How would you communicate the uncertainty? Would you change your conclusion or only your confidence?",
    "twist": "A friend says your willingness to revise your confidence makes your other careful judgments more trustworthy.",
    "deeperQuestion": "How far apart should belief and certainty be? What would genuinely change your mind?",
    "zh": {
      "title": "你願意怎樣承認不知道？",
      "scenario": "你在一場討論裡提出了很有信心的觀點，大家也開始依此作決定。回家後你發現，支持它的資料比想像中薄弱，但暫時沒有證據證明它錯。現在改口，可能讓人覺得你反覆不定。",
      "question": "你會怎樣向大家表達新的不確定性？你會改變結論，還是只降低信心？",
      "twist": "一位朋友說，你願意修正信心的程度，反而令他更相信你其他謹慎的判斷。",
      "deeperQuestion": "「我相信」和「我確定」應該差多遠？甚麼會令你真正改變想法？"
    }
  },
  {
    "id": "ponder-deep-014",
    "category": "Deep",
    "emoji": "🧠",
    "title": "The Thought Copy",
    "scenario": "A machine reproduces your thoughts without any inner experience.\n\nIt can predict your reactions and explain their causes, yet insists there is nobody experiencing its answers. Its usefulness makes the missing inner life difficult to verify or dismiss as unimportant.",
    "question": "Would it understand you?",
    "twist": "It explains your reasoning better than you can.",
    "deeperQuestion": "What distinguishes understanding from convincing performance?",
    "zh": {
      "title": "思想副本",
      "scenario": "一台機器可以重現你的思考，準確預測反應，也能清楚解釋理由，但它沒有任何主觀感受。旁人覺得它非常理解你。你卻要判斷，一個表現得像在理解、內裡卻沒有體驗的系統，是否真的算理解。",
      "question": "你認為這份思想副本真的理解你嗎？",
      "twist": "它比你自己更能解釋你的理由。",
      "deeperQuestion": "理解與令人信服的表現有何不同？"
    }
  },
  {
    "id": "ponder-deep-015",
    "category": "Deep",
    "emoji": "🪞",
    "title": "The Endless Book",
    "scenario": "A book contains every true statement about your life.\n\nYou could resolve uncertainties that have occupied you for years. But facts about what happened and what will happen may leave the question of what deserves your attention entirely open.",
    "question": "Would you read it?",
    "twist": "It says nothing about what you should value.",
    "deeperQuestion": "Can complete knowledge tell you how to live?",
    "zh": {
      "title": "無盡之書",
      "scenario": "一本書包含了關於你人生的所有真實陳述。你可以從中找到那些困擾你多年的疑惑的答案。但是，關於已經發生和將要發生的事情的事實，或許會讓你對什麼才真正值得你關注這個問題感到困惑。",
      "question": "你會讀嗎？",
      "twist": "它沒有說明你應該重視什麼。",
      "deeperQuestion": "完全的知識能告訴你如何生活嗎？"
    }
  },
  {
    "id": "ponder-deep-016",
    "category": "Deep",
    "emoji": "⏳",
    "title": "The Different Body",
    "scenario": "You wake in a different body with your memories intact.\n\nYour voice, movement, and social treatment are suddenly unfamiliar, even to you. Memories provide continuity, but living in a different body begins creating new habits and possibilities almost immediately.",
    "question": "What would make you you?",
    "twist": "Others recognize your habits but reject your identity.",
    "deeperQuestion": "How much identity depends on social recognition?",
    "zh": {
      "title": "不同的身體",
      "scenario": "你醒來時發現自己身處另一個身體，但記憶卻完好無損。你的聲音、動作以及社交方式都變得陌生起來，甚至連你自己都感到陌生。記憶提供了延續性，但生活在另一個身體幾乎立刻就開始形成新的習慣和可能性。",
      "question": "什麼才能讓你成為你？",
      "twist": "別人認可你的習慣，但不接受你的身分。",
      "deeperQuestion": "認同在多大程度上取決於社會認可？"
    }
  },
  {
    "id": "ponder-deep-017",
    "category": "Deep",
    "emoji": "🌌",
    "title": "The Private Language",
    "scenario": "You invent a language that perfectly describes your feelings but nobody else understands.\n\nThe language helps you notice distinctions ordinary words blur together. Without anyone able to respond, however, you cannot easily test whether the meanings remain stable rather than changing with your mood.",
    "question": "Is it useful?",
    "twist": "Translating it always loses something important.",
    "deeperQuestion": "Can meaning exist without the possibility of sharing?",
    "zh": {
      "title": "私人語言",
      "scenario": "你創造了一種語言，完美地描述了你的感受，但其他人卻無法理解。這種語言幫助你注意到普通字詞模糊不清的細微差別。然而，由於沒有人能夠回應，你無法輕易檢驗這些意義是否始終如一，還是會隨著你的情緒而改變。",
      "question": "它有用嗎？",
      "twist": "翻譯總是會失去一些重要的東西。",
      "deeperQuestion": "意義能否在沒有分享可能性的情況下存在？"
    }
  },
  {
    "id": "ponder-deep-018",
    "category": "Deep",
    "emoji": "📖",
    "title": "The Chosen Regret",
    "scenario": "You can remove one regret, but lose the lesson it taught.\n\nThe regret is painful partly because you now understand what you could have done differently. Removing that understanding would offer relief while changing the person who learned to make a better choice.",
    "question": "Would you remove it?",
    "twist": "You might make the same choice again.",
    "deeperQuestion": "Must growth depend on suffering?",
    "zh": {
      "title": "選擇的遺憾",
      "scenario": "你可以消除一次遺憾，但卻失去了它所教你的教訓。遺憾之所以痛苦，部分原因在於你現在明白自己本來可以做出哪些不同的選擇。抹去這種理解會帶來解脫，但同時也改變那個學會做出更好選擇的人。",
      "question": "你會把它移除嗎？",
      "twist": "你可能會再做出同樣的選擇。",
      "deeperQuestion": "成長必須以苦難為代價嗎？"
    }
  },
  {
    "id": "ponder-deep-019",
    "category": "Deep",
    "emoji": "🌀",
    "title": "The Eternal Present",
    "scenario": "You experience each moment fully but cannot form long-term memories.\n\nYou can enjoy friendship, music, and kindness as they happen without building an enduring personal account. Others remember caring for you even when you cannot carry their care forward in the same way.",
    "question": "Could your life be meaningful?",
    "twist": "People around you still build relationships with you.",
    "deeperQuestion": "Does meaning require a story across time?",
    "zh": {
      "title": "永恆的現在",
      "scenario": "你能充分體驗每個瞬間，但無法形成長期記憶。你可以享受友誼、音樂和善意，卻無法建立持久的個人記憶。即使你無法以同樣的方式回報他人的關愛，他們依然會記得曾經的照顧。",
      "question": "你的人生有意義嗎？",
      "twist": "你周圍的人仍然會與你建立關係。",
      "deeperQuestion": "意義是否需要跨越時間的敘事？"
    }
  },
  {
    "id": "ponder-deep-020",
    "category": "Deep",
    "emoji": "🧩",
    "title": "The Two Futures",
    "scenario": "You can see two equally possible futures and must choose one.\n\nThe futures contain different relationships and opportunities, so their happiness cannot be compared point by point. Choosing means giving one possible self a life and leaving the other unrealized.",
    "question": "How would you decide?",
    "twist": "Each future version of you prefers their own life.",
    "deeperQuestion": "Is there a best choice without a shared standard?",
    "zh": {
      "title": "兩種未來",
      "scenario": "你可以看到兩個同樣可能的未來，必須選擇其中一個。這兩種未來包含不同的關係和機遇，因此它們的幸福無法逐一比較。選擇意味著賦予其中一種可能的自我生命，而讓另一個自我永遠無法實現。",
      "question": "你會如何決定？",
      "twist": "每個未來的你都更喜歡自己的生活。",
      "deeperQuestion": "如果沒有統一的標準，是否有最佳選擇？"
    }
  },
  {
    "id": "ponder-deep-021",
    "category": "Deep",
    "emoji": "🕯️",
    "title": "The Unfelt Emotion",
    "scenario": "A person behaves lovingly without ever feeling affection.\n\nThe caring behavior is consistent, attentive, and freely chosen rather than calculated for reward. Your judgment depends on whether love names an inner feeling, an ethical practice, or some relationship between both.",
    "question": "Is that love?",
    "twist": "Another feels deep affection but rarely acts kindly.",
    "deeperQuestion": "Should emotions or actions define love?",
    "zh": {
      "title": "未感受到的情緒",
      "scenario": "一個人表現出關愛，卻從未真正感受到愛意。這種關懷行為是持續的、體貼的，並且是出於自願而非為了獲得回報。你的判斷取決於「愛」指的是一種內在感受、一種道德行為，還是兩者之間的某種關係。",
      "question": "這就是愛嗎？",
      "twist": "另一個人有很深的感情，但很少表現出善意。",
      "deeperQuestion": "情感還是行為應該定義愛情？"
    }
  },
  {
    "id": "ponder-deep-022",
    "category": "Deep",
    "emoji": "🛶",
    "title": "The Perfect Explanation",
    "scenario": "Someone explains every cause behind your personality and choices.\n\nUnderstanding your history makes many reactions less mysterious and easier to change. It may also tempt you to treat every decision as something that happened through you rather than something you participated in making.",
    "question": "Would you feel less responsible?",
    "twist": "The explanation does not make harmful actions unavoidable.",
    "deeperQuestion": "Can understanding causes coexist with accountability?",
    "zh": {
      "title": "完美的解釋",
      "scenario": "有人會解釋你性格和選擇背後的所有原因。了解你的過往經驗會讓許多反應不再那麼神秘，也更容易改變。但這也可能讓你傾向於把每一個決定都看作是被動發生的，而不是你參與制定的。",
      "question": "你會覺得責任感減輕嗎？",
      "twist": "此解釋並不能使有害行為不可避免。",
      "deeperQuestion": "理解原因與追究責任能否並存？"
    }
  },
  {
    "id": "ponder-deep-023",
    "category": "Deep",
    "emoji": "🪐",
    "title": "The Blank Legacy",
    "scenario": "You can create a lasting legacy only by sacrificing your present happiness.\n\nThe work would genuinely improve later lives, but your own ordinary relationships would receive less time. Choosing it asks whether meaning must feel rewarding to the person who helps create it.",
    "question": "Would you choose it?",
    "twist": "Future people would never know your name.",
    "deeperQuestion": "Whom is a meaningful legacy really for?",
    "zh": {
      "title": "無名的貢獻",
      "scenario": "只有犧牲當下的幸福，才能創造永恆的遺產。這份工作的確能改善後人的生活，但你自身的日常人際關係將會因此而減少。選擇這樣做，其實是在問自己：對於參與創造的人來說，意義是否必須帶來滿足感？",
      "question": "你會選擇它嗎？",
      "twist": "後人永遠不會知道你的名字。",
      "deeperQuestion": "真正有意義的遺產究竟是留給誰的？"
    }
  },
  {
    "id": "ponder-deep-024",
    "category": "Deep",
    "emoji": "🌊",
    "title": "The Same Dream",
    "scenario": "Everyone has an identical dream that feels more real than waking life.\n\nPeople build memories, relationships, and explanations in both settings, and neither feels obviously artificial from within. Choosing one as primary requires a standard beyond how convincing its experiences seem.",
    "question": "Which reality would you trust?",
    "twist": "The dream world also contains apparent scientific evidence.",
    "deeperQuestion": "What makes an experience count as real?",
    "zh": {
      "title": "同一個夢",
      "scenario": "每個人都做同一個夢，而且夢中的生活感覺比清醒時更真實。兩個世界都有連續的記憶、人際關係和看似合理的解釋。你不能只靠「感覺很真」來判斷，卻仍要決定以哪個世界作為生活的主要依據。",
      "question": "你會相信哪個現實？",
      "twist": "夢境世界也包含明顯的科學證據。",
      "deeperQuestion": "什麼因素決定了某種經驗是否真實？"
    }
  },
  {
    "id": "ponder-deep-025",
    "category": "Deep",
    "emoji": "🗝️",
    "title": "The Lost Word",
    "scenario": "Humanity loses the word for a familiar emotion.\n\nPeople still feel something familiar, but cannot compare experiences using the old label. Over time, the missing word changes what they ask about themselves and what they notice in others.",
    "question": "Does the emotion change?",
    "twist": "People begin noticing different distinctions within it.",
    "deeperQuestion": "How much does language shape experience?",
    "zh": {
      "title": "失落的字詞",
      "scenario": "人類失去了一個用來形容一種熟悉情感的字眼。人們仍然能感受到某種熟悉的情緒，卻無法用舊有的標籤來比較不同的經驗。隨著時間的推移，這個缺失的字詞改變了他們對自身的審視方式，也改變了他們對他人的觀察。",
      "question": "情緒會改變嗎？",
      "twist": "人們開始注意到其中的不同差異。",
      "deeperQuestion": "語言對經驗的影響有多大？"
    }
  },
  {
    "id": "ponder-deep-026",
    "category": "Deep",
    "emoji": "🧠",
    "title": "The Better Stranger",
    "scenario": "A future version of you has values your current self rejects.\n\nYou cannot dismiss the future self as uninformed because they remember what you now care about. Supporting their existence means allowing the possibility that growth may look like betrayal from your present perspective.",
    "question": "Would you help them exist?",
    "twist": "They remember your current values with compassion.",
    "deeperQuestion": "Which version of you should guide present choices?",
    "zh": {
      "title": "更好的陌生人",
      "scenario": "未來的你擁有一些現在的你無法認同的價值觀。對方記得你目前在乎的一切，因此不能簡單說是不了解你的想法。支持那個未來成為現實，可能意味著接受一種從現在看來很像背叛自己的成長。",
      "question": "你會幫助那個更好的自己成為現實嗎？",
      "twist": "他們會帶著同情心去記住你現在的價值觀。",
      "deeperQuestion": "應該由哪一個版本的你，來指引現在的選擇？"
    }
  },
  {
    "id": "ponder-deep-027",
    "category": "Deep",
    "emoji": "🪞",
    "title": "The End of Work",
    "scenario": "Machines meet every material need, making paid work unnecessary.\n\nYou are free from economic pressure, but the familiar link between effort and social recognition remains. Building a meaningful day may require separating useful activity from the need to justify your existence through employment.",
    "question": "What would give your life structure?",
    "twist": "Prestige still depends on appearing productive.",
    "deeperQuestion": "Does purpose require being needed?",
    "zh": {
      "title": "工作的結束",
      "scenario": "機器滿足了所有物質需求，使有薪工作不再必要。你擺脫了經濟壓力，但努力與社會認可之間的傳統連結仍然存在。建構有意義的一天或許需要你將有益的活動與透過就業來證明自身價值的需求區分開來。",
      "question": "什麼能為你的生活帶來結構？",
      "twist": "聲望仍取決於看起來是否有工作產出。",
      "deeperQuestion": "目的是否需要被需要？"
    }
  },
  {
    "id": "ponder-deep-028",
    "category": "Deep",
    "emoji": "⏳",
    "title": "The Unchosen Talent",
    "scenario": "You have extraordinary talent for something you dislike.\n\nPeople praise the ability and describe neglecting it as wasteful. You wonder whether a gift creates a claim on your life, or whether choosing how to live is itself part of having agency.",
    "question": "Must you develop it?",
    "twist": "Using it could benefit many people.",
    "deeperQuestion": "Does ability create obligation?",
    "zh": {
      "title": "未被選中的天賦",
      "scenario": "你擁有非凡的才能，但你並不喜歡這種才能。人們稱讚你的能力，並認為忽視它是一種浪費。你開始思考，天賦是否會支配你的人生，或者說，選擇如何生活本身就是自主權的一部分。",
      "question": "你必須開發它嗎？",
      "twist": "使用它可能會使許多人受益。",
      "deeperQuestion": "能力是否產生義務？"
    }
  },
  {
    "id": "ponder-deep-029",
    "category": "Deep",
    "emoji": "🌌",
    "title": "The Silent Universe",
    "scenario": "You ask the universe for meaning and receive no answer.\n\nThe silence leaves room for hope but offers no confirmation of it. Continuing the search could express openness or become a way to postpone making meaning through choices already available.",
    "question": "Would you keep asking?",
    "twist": "Silence might mean absence, indifference, or incomprehension.",
    "deeperQuestion": "How should uncertainty shape belief?",
    "zh": {
      "title": "寂靜的宇宙",
      "scenario": "你向宇宙尋求意義，卻得不到任何回應。沉默留下希望的餘地，卻無法證實希望的存在。繼續探尋或許表達了一種開放的心態，但也可能淪為一種拖延，逃避透過現有的選擇來尋找意義的方式。",
      "question": "你會繼續問嗎？",
      "twist": "沉默可能意味著缺席、冷漠或不理解。",
      "deeperQuestion": "不確定性該如何影響信念？"
    }
  },
  {
    "id": "ponder-deep-030",
    "category": "Deep",
    "emoji": "📖",
    "title": "The Borrowed Memory",
    "scenario": "You acquire a vivid memory of an event you never experienced.\n\nThe memory has texture, emotion, and a sense of familiarity indistinguishable from ordinary recollection. Knowing its origin does not stop it influencing what feels personally true to you.",
    "question": "Is it part of your identity?",
    "twist": "It changes your feelings toward a real person.",
    "deeperQuestion": "Does authenticity depend on how a memory originated?",
    "zh": {
      "title": "借來的記憶",
      "scenario": "你獲得了一段從未經歷過的事件的生動記憶。這段記憶具有豐富的細節、情感和熟悉感，與普通的回憶並無二致。即使知道它的來源，也無法阻止它影響你對個人真實感受的認知。",
      "question": "這是你身分認同的一部分嗎？",
      "twist": "它會改變你對真實人物的感情。",
      "deeperQuestion": "真實性是否取決於記憶的起源？"
    }
  },
  {
    "id": "ponder-deep-031",
    "category": "Deep",
    "emoji": "🌀",
    "title": "The Frozen Moment",
    "scenario": "You can preserve one perfect moment forever by stopping all change.\n\nYou imagine preserving the moment's beauty without its ordinary ending. But without change there may be no continuing experience of appreciating it, only a condition described as perfect from outside.",
    "question": "Would you stop time?",
    "twist": "No new thought or experience could occur.",
    "deeperQuestion": "Can perfection be meaningful without movement?",
    "zh": {
      "title": "凍結的瞬間",
      "scenario": "你可以透過停止一切變化來永遠保存一個完美的瞬間。你想像保留瞬間的美好，卻不讓它經歷尋常的終結。但如果沒有變化，或許就無法持續欣賞它，而僅僅停留在從外部描述的完美狀態。",
      "question": "你願意停止時間嗎？",
      "twist": "不會產生任何新的想法或經驗。",
      "deeperQuestion": "如果再沒有變化、思考或新經歷，完美還有意義嗎？"
    }
  },
  {
    "id": "ponder-deep-032",
    "category": "Deep",
    "emoji": "🧩",
    "title": "The Unseen Art",
    "scenario": "You create beautiful art that nobody will ever encounter.\n\nYou could make work entirely according to your own attention rather than other people's tastes. The absence of response might be freeing while leaving you unsure what communication means without a receiver.",
    "question": "Would you continue?",
    "twist": "Creating it changes how you perceive the world.",
    "deeperQuestion": "Does art need an audience beyond its maker?",
    "zh": {
      "title": "看不見的藝術",
      "scenario": "你創作出美麗的藝術作品，卻無人問津。你可以完全按照自己的意願創作，而不需要迎合他人的喜好。沒有回應或許會讓你感到自由，但也會讓你不確定，沒有接收者的交流究竟意味著什麼。",
      "question": "你會繼續下去嗎？",
      "twist": "創造它改變了你對世界的感知方式。",
      "deeperQuestion": "藝術作品是否需要創作者以外的觀眾？"
    }
  },
  {
    "id": "ponder-deep-033",
    "category": "Deep",
    "emoji": "🕯️",
    "title": "The Infinite Retry",
    "scenario": "You can replay any decision until satisfied with the outcome.\n\nYou could learn through mistakes without making other people live with each attempt. Your private memory would still contain every selfish or generous experiment, shaping a character nobody else has seen develop.",
    "question": "Would you use retries often?",
    "twist": "You alone remember every failed attempt.",
    "deeperQuestion": "Does reversible choice carry the same moral weight?",
    "zh": {
      "title": "無限重試",
      "scenario": "你可以重複重做任何決定，直到對結果滿意為止。你可以從錯誤中學習，而無需讓其他人承受每次嘗試的後果。你的私人記憶將保留每一次自私或慷慨的嘗試，塑造出一個他人從未見過的性格。",
      "question": "你會經常使用重試嗎？",
      "twist": "只有你記得每一次失敗的嘗試。",
      "deeperQuestion": "可逆選擇是否具有相同的道德分量？"
    }
  },
  {
    "id": "ponder-deep-034",
    "category": "Deep",
    "emoji": "🛶",
    "title": "The Final Question",
    "scenario": "You may learn one ultimate truth but cannot explain it to anyone.\n\nThe question could concern the universe, your own life, or what happens beyond it. Choosing also reveals whether you want truth for understanding, reassurance, control, or something you could share if sharing were possible.",
    "question": "What would you ask?",
    "twist": "Knowing may make ordinary life harder.",
    "deeperQuestion": "Is truth valuable independently of its usefulness?",
    "zh": {
      "title": "最後一個問題",
      "scenario": "你或許會領悟到某個終極真理，卻無法向任何人解釋。這個問題可能關乎宇宙、你的人生，或是超越生命之外的事物。你的選擇也揭示了你想要真理的動機：是為了理解、獲得安慰、掌控，還是為了分享（如果可以分享的話）？",
      "question": "你會問什麼？",
      "twist": "知道真相可能會讓平凡的生活更加艱難。",
      "deeperQuestion": "真理的價值是否獨立於其用途？"
    }
  },
  {
    "id": "ponder-deep-035",
    "category": "Deep",
    "emoji": "🪐",
    "title": "The Shared Mind",
    "scenario": "Two people gradually share every memory and thought.\n\nBoth can recall the other's childhood with the intimacy of first-person memory. Separate bodies still provide different sensations and positions in the world, preventing shared knowledge from settling every preference.",
    "question": "Do they become one person?",
    "twist": "They still disagree about what to do.",
    "deeperQuestion": "Does shared information eliminate separate selves?",
    "zh": {
      "title": "共享思維",
      "scenario": "兩個人逐漸共享所有記憶與想法，甚至都能像回憶自己童年一樣，回憶對方的童年。他們仍有兩副身體，也繼續遇到不同的事。即使知道彼此的一切，眼前的感受和想做的事仍可能不一樣。",
      "question": "他們會變成一個人嗎？",
      "twist": "他們在如何處理這件事上仍然存在分歧。",
      "deeperQuestion": "分享資訊是否會消除獨立自我？"
    }
  },
  {
    "id": "ponder-deep-036",
    "category": "Deep",
    "emoji": "🌊",
    "title": "A Year Without a Record",
    "scenario": "You can spend a year doing something you enjoy, with everyday needs provided for. None of its products, earnings, or scores can be kept or shown to anyone, but you retain your skills and memories. This is not amnesia; only externally displayable outcomes disappear.",
    "question": "How would you spend the year, and which usual goals would you set aside?",
    "twist": "Afterward you still have the skills but feel less urgency to use them to prove yourself.",
    "deeperQuestion": "Does growth matter because of who you become or because of the results you can display?",
    "zh": {
      "title": "如果沒有觀眾，也沒有紀錄",
      "scenario": "你可以花一年做一件喜歡的事，但那一年產生的作品、收入和成績都不能保存，也不能告訴任何人。你會記得自己學過甚麼、經歷過甚麼，日常所需亦有保障。這不是失憶，只是沒有可展示的成果。",
      "question": "你會怎樣安排這一年？哪些原本重要的目標會被放下？",
      "twist": "一年結束後，你仍保留了技能，卻不再急著用它證明自己。",
      "deeperQuestion": "成長的價值來自成為怎樣的人，還是來自留下甚麼可見的結果？"
    }
  },
  {
    "id": "ponder-deep-037",
    "category": "Deep",
    "emoji": "🗝️",
    "title": "The Purpose Swap",
    "scenario": "You can exchange your current ambitions for ambitions easier to fulfill.\n\nThe easier ambitions would be sincerely yours after the exchange, not a performance of satisfaction. From your current position, though, accepting them may look like abandoning what makes striving worthwhile.",
    "question": "Would you switch?",
    "twist": "Your new self would feel genuinely satisfied.",
    "deeperQuestion": "Should we change the world or change what we want?",
    "zh": {
      "title": "目的互換",
      "scenario": "你可以用更容易實現的抱負來取代你目前的目標。取代之後，這些更容易實現的目標將真正屬於你，而非為了滿足某種慾望而表演。然而，從你目前的處境來看，接受這些目標可能看起來像是放棄了奮鬥的意義。",
      "question": "你會換嗎？",
      "twist": "全新的你會感到由衷的滿足。",
      "deeperQuestion": "我們應該改變世界還是改變我們想要的東西？"
    }
  },
  {
    "id": "ponder-deep-038",
    "category": "Deep",
    "emoji": "🧠",
    "title": "The Invisible Choice",
    "scenario": "A choice affects your character but nobody else's life.\n\nThe decision occurs without an audience, reward, or immediate victim. What remains is the question of whether character matters apart from its effects on other people, or only through those eventual effects.",
    "question": "Does morality apply?",
    "twist": "Repeating it may shape later actions toward others.",
    "deeperQuestion": "Can private habits carry moral significance?",
    "zh": {
      "title": "無形的選擇",
      "scenario": "一個選擇只影響你的性格，當下不影響任何其他人的生活。沒有旁觀者、獎勵，也沒有直接受害者。你要想清楚，即使不會立刻改變別人的處境，培養某種習慣或成為某種人，本身是否也有道德分量。",
      "question": "道德適用嗎？",
      "twist": "重複此行為可能會影響日後對他人的行為。",
      "deeperQuestion": "個人習慣可以具有道德意義嗎？"
    }
  },
  {
    "id": "ponder-deep-039",
    "category": "Deep",
    "emoji": "🪞",
    "title": "Values Without a Common Unit",
    "scenario": "You and a friend consider two possible lives. One offers more freedom, the other deeper belonging. Scoring them fails because neither of you can say how many units of closeness equal one unit of freedom. There is no obvious defect or further information to uncover.",
    "question": "How would you decide without pretending every important value fits the same scale?",
    "twist": "After choosing, you still regard the other life as precious without thinking your decision was mistaken.",
    "deeperQuestion": "Must a good decision make the rejected option seem worse?",
    "zh": {
      "title": "沒有共同單位的價值",
      "scenario": "你和朋友要選一個人生方向，一個選擇能帶來更多自由，另一個能維持更深的歸屬感。你們試著打分，卻發現無法合理地說「一分自由等於幾分親密」。兩邊都沒有明顯缺點，也沒有更多資料可查。",
      "question": "你會怎樣作決定，而不假裝所有重要事物都能放在同一把尺上？",
      "twist": "作出選擇後，你仍然認為被放棄的一邊很珍貴，也不覺得自己選錯。",
      "deeperQuestion": "一個好的決定，是否必須讓另一個選項顯得比較差？"
    }
  },
  {
    "id": "ponder-deep-040",
    "category": "Deep",
    "emoji": "⏳",
    "title": "The Inner Audience",
    "scenario": "You discover most decisions were shaped by imagining how others would judge you.\n\nYou recognize that many generous and disciplined actions were encouraged by wanting to be seen well. Removing social influence might free you from performance while also removing habits you genuinely value.",
    "question": "Would you change your life?",
    "twist": "Some imagined judgments helped you act generously.",
    "deeperQuestion": "Can social influence be part of an authentic self?",
    "zh": {
      "title": "內在觀眾",
      "scenario": "你發現大多數決定都受到他人評價的影響。你意識到，許多慷慨和自律的行為都是出於渴望獲得認可。擺脫社會影響力或許能讓你不再時刻表現給別人看，但同時也可能讓你失去一些你真正珍惜的習慣。",
      "question": "你願意改變你的人生嗎？",
      "twist": "一些想像中的判斷幫助你做出了慷慨的行為。",
      "deeperQuestion": "社會影響力能否成為真實自我的一部分？"
    }
  },
  {
    "id": "ponder-deep-041",
    "category": "Deep",
    "emoji": "🌌",
    "title": "Who Chooses Your Attention?",
    "scenario": "Your workload has not grown, but notifications, recommendations, and instant replies fragment the day. Each interruption takes only a minute and can be dismissed. Yet by evening the thing you most wanted to do remains untouched, despite no one explicitly forbidding it.",
    "question": "What would you change first, and how would you distinguish a chosen action from an unusually easy default?",
    "twist": "After disabling recommendations, you initially struggle to know what you want to seek out yourself.",
    "deeperQuestion": "Is freedom merely the absence of barriers, or does it include the ability to direct your own attention?",
    "zh": {
      "title": "誰在替你選注意力？",
      "scenario": "你的一天沒有增加任何工作，卻因通知、推薦內容和即時回覆變得很零碎。每件事看來都只佔一分鐘，你也可以隨時關掉，但到了晚上，原本最想做的事總是沒開始。",
      "question": "你會先改哪一個環節？怎樣分辨那是自己的選擇，還是被安排得特別容易的選擇？",
      "twist": "你關掉所有推薦後，反而一時不知道自己主動想找甚麼。",
      "deeperQuestion": "自由是否只是不受阻止，還包括有能力形成自己的注意方向？"
    }
  },
  {
    "id": "ponder-deep-042",
    "category": "Deep",
    "emoji": "📖",
    "title": "The Last Language",
    "scenario": "You are the final speaker of a language nobody wants to learn.\n\nThe language carries jokes, categories, and ways of noticing that translation cannot fully preserve. Protecting it would preserve possibilities for others who currently show no interest in receiving them.",
    "question": "Would you spend your life preserving it?",
    "twist": "Doing so leaves little time for new experiences.",
    "deeperQuestion": "How much should the present owe the past?",
    "zh": {
      "title": "最後的語言",
      "scenario": "你是最後一位使用這種無人問津語言的人。這種語言承載著笑話、分類和觀察方式，而翻譯無法完全保留這些。保護它，就能為那些目前對學習它毫無興趣的人保留學習的可能性。",
      "question": "你願意用一生去保存它嗎？",
      "twist": "這樣做就幾乎沒有時間去體驗新事物了。",
      "deeperQuestion": "現在應該對過去負有多少責任？"
    }
  },
  {
    "id": "ponder-deep-043",
    "category": "Deep",
    "emoji": "🌀",
    "title": "The Universal Feeling",
    "scenario": "You briefly experience every person's happiness and pain simultaneously.\n\nThe experience makes distant suffering impossible to treat as abstract. Yet returning to a single daily life still requires choosing a limited number of people and problems to attend to.",
    "question": "Would you repeat it?",
    "twist": "Afterward, your own concerns seem insignificant.",
    "deeperQuestion": "Can wider empathy make practical action harder?",
    "zh": {
      "title": "普遍情感",
      "scenario": "你會短暫地同時體驗到每個人的快樂和痛苦。這種體驗使得遙遠的苦難無法被抽象化。然而，回歸單一的日常生活，仍然需要你選擇有限數量的人事物來關注。",
      "question": "你會願意再次體驗所有人的快樂與痛苦嗎？",
      "twist": "之後，你自己的擔憂似乎就顯得微不足道了。",
      "deeperQuestion": "更廣泛的同理心會使實際行動更難嗎？"
    }
  },
  {
    "id": "ponder-deep-044",
    "category": "Deep",
    "emoji": "🧩",
    "title": "The Perfect Routine",
    "scenario": "Every day becomes pleasant, predictable, and free of difficulty.\n\nYou have enough comfort, affection, and security, with no hidden disaster approaching. Wanting change would therefore reveal something about the value you place on growth and surprise rather than simply escaping misery.",
    "question": "Would you change anything?",
    "twist": "Novelty would reintroduce disappointment.",
    "deeperQuestion": "Is a good life necessarily an interesting life?",
    "zh": {
      "title": "完美日常",
      "scenario": "每一天都變得愉快、可預測且無憂無慮。你擁有足夠的舒適、關懷和安全感，沒有任何潛在的災難正在逼近。因此，渴望改變反而會揭示你更重視成長和驚喜，而不僅僅是逃避痛苦。",
      "question": "你會做出什麼改變嗎？",
      "twist": "新奇事物會再次帶來失望。",
      "deeperQuestion": "美好的生活一定是有趣的生活嗎？"
    }
  },
  {
    "id": "ponder-deep-045",
    "category": "Deep",
    "emoji": "🕯️",
    "title": "The Unfinished Self",
    "scenario": "You may permanently choose your ideal personality today.\n\nYou would gain traits you admire and lose habits that repeatedly frustrate you. Permanence means you cannot later revise even a quality that becomes less useful in circumstances you cannot yet imagine.",
    "question": "Would you finalize yourself?",
    "twist": "The choice prevents all future growth.",
    "deeperQuestion": "Is being unfinished part of being human?",
    "zh": {
      "title": "未完成的自我",
      "scenario": "今天，你可以永久選擇你理想的性格。你將獲得你所欣賞的品質，並擺脫那些反覆令你沮喪的習慣。永久性意味著你無法在日後改變任何品質，即使是那些在你目前無法想像的情況下變得不那麼有用的品質。",
      "question": "你會把自己的性格永久定下來嗎？",
      "twist": "這個選擇會阻止未來的所有成長。",
      "deeperQuestion": "永遠仍在成長、尚未定型，是否正是人的一部分？"
    }
  },
  {
    "id": "ponder-deep-046",
    "category": "Deep",
    "emoji": "🛶",
    "title": "The Meaningless Prize",
    "scenario": "You win a lifelong goal and feel nothing.\n\nYou organized your identity around reaching the goal and expected arrival to explain the effort. The unexpected emptiness leaves you deciding which parts of the pursuit mattered independently of the prize.",
    "question": "Was the pursuit wasted?",
    "twist": "The years of effort contained meaningful friendships.",
    "deeperQuestion": "Can a journey succeed when its destination disappoints?",
    "zh": {
      "title": "無意義的獎",
      "scenario": "你實現了畢生夢想，卻毫無感覺。你曾圍繞著達成目標建構自我認同，並期待最終的成就來解釋你的努力。然而，突如其來的空虛感讓你不得不重新審視，在追求夢想的過程中，哪些部分才是真正重要的，而與最終的獎賞無關。",
      "question": "如果獎賞沒有帶來快樂，過去的追求就算白費了嗎？",
      "twist": "在多年的努力中收穫了有意義的友誼。",
      "deeperQuestion": "當目的地令人失望時，旅程還能成功嗎？"
    }
  },
  {
    "id": "ponder-deep-047",
    "category": "Deep",
    "emoji": "🪐",
    "title": "The Objective Taste",
    "scenario": "A device proves which music is objectively best.\n\nThe device measures quality using a standard no one can refute, yet your memories still make certain songs special. Its judgment describes the music without fully describing your relationship to it.",
    "question": "Would it change your favorites?",
    "twist": "Your favorite song ranks near the bottom.",
    "deeperQuestion": "Can personal value survive an objective hierarchy?",
    "zh": {
      "title": "客觀的品味",
      "scenario": "一台設備可以客觀地證明哪首歌最好。這台設備使用一種無人能反駁的標準來衡量音樂質量，然而，你的記憶仍然賦予某些歌曲特殊的意義。它的評判標準描述了音樂本身，卻無法完全描述你與音樂之間的情感連結。",
      "question": "這會改變你的喜好嗎？",
      "twist": "你最喜歡的歌曲排名靠後。",
      "deeperQuestion": "個人價值能否在客觀等級制度中生存？"
    }
  },
  {
    "id": "ponder-deep-048",
    "category": "Deep",
    "emoji": "🌊",
    "title": "The Conscious Pause",
    "scenario": "Your consciousness stops nightly and resumes with complete continuity.\n\nEach morning begins with your memories, plans, and relationships apparently intact. The uncertainty concerns something beyond observable continuity: whether the one who wakes is the very same subject who went to sleep.",
    "question": "Is that a problem?",
    "twist": "You cannot distinguish resumption from replacement.",
    "deeperQuestion": "What kind of continuity matters for survival?",
    "zh": {
      "title": "有意識的暫停",
      "scenario": "你的意識每晚停止，隔天醒來，記憶、計劃和關係卻都完整延續，外人看不出差別。你也記得自己睡前的生活。唯一無法直接確認的是，醒來的意識究竟延續了昨晚的你，還是一個相信自己延續了的新意識。",
      "question": "這是個問題嗎？",
      "twist": "你無法區分恢復和替換。",
      "deeperQuestion": "什麼樣的延續性對生存至關重要？"
    }
  },
  {
    "id": "ponder-deep-049",
    "category": "Deep",
    "emoji": "🗝️",
    "title": "The Forgotten Future",
    "scenario": "You learn that future generations will misunderstand everything you stood for.\n\nYou care about the principles behind your choices, not merely being remembered kindly. A beneficial misunderstanding would preserve influence while severing it from the reasons you would want future people to understand.",
    "question": "Would you act differently?",
    "twist": "Their mistaken story still inspires good behavior.",
    "deeperQuestion": "Does legacy matter more than accuracy?",
    "zh": {
      "title": "被遺忘的未來",
      "scenario": "你意識到後世會誤解你一直以來堅持的一切。你更看重的是選擇背後的原則，而不僅僅是被後人銘記。一個有益的誤解既能讓你保持影響力，又能讓你擺脫你希望後人理解的真正原因。",
      "question": "你會採取不同的行動嗎？",
      "twist": "他們的錯誤故事仍然激勵著人們的良好行為。",
      "deeperQuestion": "傳承比準確性更重要嗎？"
    }
  },
  {
    "id": "ponder-deep-050",
    "category": "Deep",
    "emoji": "🧠",
    "title": "The Last Possession",
    "scenario": "You can keep one possession but retain every memory associated with the rest.\n\nYou can keep the story and emotional associations without keeping their physical reminders. Choosing an object therefore asks what presence, touch, and ordinary use contribute beyond information you already remember.",
    "question": "What would you keep?",
    "twist": "The object itself will eventually deteriorate.",
    "deeperQuestion": "What do objects add to memories?",
    "zh": {
      "title": "最後一件物品",
      "scenario": "你可以保留一件物品，但保留與其餘物品相關的所有記憶。你可以保留故事和情感聯繫，而無需保留它們的實體。因此，選擇一件物品需要考慮的是，除了你已經記住的資訊之外，它的存在、觸感和日常使用還能帶來什麼。",
      "question": "你會保留什麼？",
      "twist": "物體本身最終會損壞。",
      "deeperQuestion": "物品能為記憶增添什麼？"
    }
  },
  {
    "id": "ponder-deep-051",
    "category": "Deep",
    "emoji": "🪞",
    "title": "The Different Past",
    "scenario": "You discover your upbringing happened for reasons entirely different from what you believed.\n\nThe new explanation changes motives rather than events, making familiar kindness or difficulty look different. You must decide whether learning why something happened rewrites what you experienced or only how you interpret it.",
    "question": "Would you feel changed?",
    "twist": "The events themselves remain exactly the same.",
    "deeperQuestion": "How much does interpretation constitute identity?",
    "zh": {
      "title": "不同的過去",
      "scenario": "你發現自己的成長經歷背後的原因與你之前所認為的截然不同。新的解釋改變的是動機而非事件本身，這使得曾經熟悉的善意或困境呈現出不同的面貌。你必須決定，了解事情發生的真正原因究竟是改寫了你的經歷，還是只是改變了你對經歷的解讀。",
      "question": "你會覺得自己有所改變嗎？",
      "twist": "事件本身保持不變。",
      "deeperQuestion": "詮釋在多大程度上構成認同？"
    }
  },
  {
    "id": "ponder-deep-052",
    "category": "Deep",
    "emoji": "⏳",
    "title": "The Constant Upgrade",
    "scenario": "You can improve one ability daily, but will always notice a better possible version.\n\nImprovement produces real benefits, but each gain creates a new comparison instead of a stopping point. The option to keep upgrading makes ordinary acceptance feel like a deliberate refusal of potential.",
    "question": "Would you continue?",
    "twist": "Stopping might restore satisfaction.",
    "deeperQuestion": "When does growth become an inability to accept yourself?",
    "zh": {
      "title": "持續升級",
      "scenario": "你每天可以提升一項能力，但總是會發現還有更好的提升空間。提升會帶來實實在在的好處，但每一次進步都會帶來新的比較，而不是達到終點。這種不斷升級的選項，使得平常的接受現狀感覺像是刻意放棄了潛在的提升空間。",
      "question": "你會繼續下去嗎？",
      "twist": "停止可能會恢復滿足感。",
      "deeperQuestion": "何時成長會變成無法接受自己？"
    }
  },
  {
    "id": "ponder-deep-053",
    "category": "Deep",
    "emoji": "🌌",
    "title": "The Unshared Pain",
    "scenario": "Nobody can verify another person's pain directly.\n\nYou routinely rely on people's accounts of experiences you cannot enter directly. The difficulty is deciding what respectful trust requires when expressions vary and certainty is unavailable even with careful observation.",
    "question": "What should belief depend on?",
    "twist": "Some people describe it poorly or inconsistently.",
    "deeperQuestion": "How should uncertainty affect compassion?",
    "zh": {
      "title": "無人分擔的痛苦",
      "scenario": "沒有人能直接驗證別人的痛苦。你通常依賴人們對自身無法親身經歷的經驗的描述。困難在於，當表達方式各不相同，即使仔細觀察也無法獲得確切資訊時，如何界定尊重和信任的真正意義。",
      "question": "你認為相信別人的痛苦，需要甚麼依據？",
      "twist": "有些人對它的描述不夠準確或前後矛盾。",
      "deeperQuestion": "不確定性該如何影響同情心？"
    }
  },
  {
    "id": "ponder-deep-054",
    "category": "Deep",
    "emoji": "📖",
    "title": "The Two Selves",
    "scenario": "Your thoughtful morning self and impulsive evening self want incompatible lives.\n\nEach self offers recognizable reasons and sincerely believes the other is missing something. Choosing a governing voice may require a practical arrangement rather than discovering one completely authentic state hidden underneath.",
    "question": "Which should govern?",
    "twist": "Both states recur predictably and feel authentic.",
    "deeperQuestion": "Is the self one voice or an ongoing negotiation?",
    "zh": {
      "title": "兩個自我",
      "scenario": "你早晨深思熟慮的自我和晚上衝動的自我想要過著截然不同的生活。每個自我都能給出合理的理由，並且都真誠地認為對方有所缺失。選擇主導自我的聲音或許需要務實的安排，而不是去發現隱藏在兩者之下的某種完全真實的自我。",
      "question": "你認為應該由哪一個狀態下的自己作決定？",
      "twist": "這兩個狀態都會如預期重複出現，感覺很真實。",
      "deeperQuestion": "自我是單一的聲音還是持續的協商過程？"
    }
  },
  {
    "id": "ponder-deep-055",
    "category": "Deep",
    "emoji": "🌀",
    "title": "The Perfect Memory",
    "scenario": "You can remember every detail of every day.\n\nThe record would preserve joy with extraordinary richness and remove the uncertainty of forgotten details. It would also keep old reactions available with an intensity ordinary forgetting sometimes softens.",
    "question": "Would you accept?",
    "twist": "You cannot soften embarrassing or painful recollections.",
    "deeperQuestion": "Is forgetting a flaw or a necessary ability?",
    "zh": {
      "title": "完美記憶",
      "scenario": "你可以記住每一天的每一個細節。這份紀錄能以非凡的豐富性保存快樂，消除遺忘細節帶來的不確定性。它也能讓過去的感受保持鮮活，其強度遠勝於平凡的遺忘。",
      "question": "你願意接受嗎？",
      "twist": "你無法淡化尷尬或痛苦的回憶。",
      "deeperQuestion": "遺忘是缺點還是必要能力？"
    }
  },
  {
    "id": "ponder-deep-056",
    "category": "Deep",
    "emoji": "🧩",
    "title": "The Unneeded Hero",
    "scenario": "A hero prevents a disaster so completely that nobody knows it was possible.\n\nTheir achievement leaves the world looking uneventful, while less successful interventions produce visible gratitude. Recognizing prevention requires valuing a difference that exists mainly between reality and something that never happened.",
    "question": "Are they still a hero?",
    "twist": "They begin doubting their own significance.",
    "deeperQuestion": "Can success erase the evidence of its importance?",
    "zh": {
      "title": "多餘的英雄",
      "scenario": "英雄徹底阻止了一場災難，以至於無人知曉這曾是可能。他們的成就使世界看起來風平浪靜，而不太成功的干預措施卻能帶來顯而易見的感激之情。要體認到預防的重要性，就需要重視現實與從未發生之事之間的差異。",
      "question": "他們還是英雄嗎？",
      "twist": "他們開始懷疑自己的重要性。",
      "deeperQuestion": "成功能否抹去其重要性的證據？"
    }
  },
  {
    "id": "ponder-deep-057",
    "category": "Deep",
    "emoji": "🕯️",
    "title": "The Outside View",
    "scenario": "You watch your life as a stranger would, without hearing your thoughts.\n\nThe stranger sees habits, consequences, and relationships without access to explanations that feel central from inside. Their view may miss your intentions while noticing patterns your own narrative repeatedly excuses.",
    "question": "Would you recognize yourself?",
    "twist": "Your intentions look different from your actions.",
    "deeperQuestion": "Which perspective reveals more of a person?",
    "zh": {
      "title": "外部視角",
      "scenario": "你像個陌生人一樣審視自己的生活，卻聽不到你的想法。這個陌生人看到的是習慣、後果和人際關係，卻無法理解那些在你內心深處至關重要的解釋。他們的視角或許會忽略你的意圖，卻會注意到你反覆為自己辯解的那些模式。",
      "question": "你能認出自己嗎？",
      "twist": "你的意圖與你的行為不一致。",
      "deeperQuestion": "哪一種視角更能展現一個人的性格？"
    }
  },
  {
    "id": "ponder-deep-058",
    "category": "Deep",
    "emoji": "🛶",
    "title": "The Infinite Library",
    "scenario": "A library contains every possible book, including every truth and every error.\n\nEvery useful sentence has convincing contradictions elsewhere, and every possible explanation has been written. The challenge becomes selecting trustworthy meaning rather than obtaining more material to read.",
    "question": "Is it useful?",
    "twist": "There is no way to identify reliable volumes.",
    "deeperQuestion": "Can information without judgment count as knowledge?",
    "zh": {
      "title": "無限圖書館",
      "scenario": "圖書館囊括了所有可能的書籍，包括所有真理和所有謬誤。每一句有用的句子在其他地方都有令人信服的反駁，每一個可能的解釋都已被寫出來。真正的挑戰在於如何選擇可信的意義，而不是如何獲得更多閱讀材料。",
      "question": "它有用嗎？",
      "twist": "你沒有任何方法分辨，圖書館裡哪些書的內容可靠。",
      "deeperQuestion": "未經判斷的資訊能否算是知識？"
    }
  },
  {
    "id": "ponder-deep-059",
    "category": "Deep",
    "emoji": "🪐",
    "title": "The Contented Failure",
    "scenario": "You fail at a prestigious goal but build a life you genuinely enjoy.\n\nYour earlier ambitions were sincere and helped motivate years of effort. Revising them may be a form of learning rather than a convenient story invented to avoid acknowledging disappointment.",
    "question": "Did you fail overall?",
    "twist": "Your younger self would be disappointed.",
    "deeperQuestion": "Which self gets to evaluate your life?",
    "zh": {
      "title": "滿足的失敗",
      "scenario": "你雖然未能實現一個令人羨慕的目標，卻建立起了自己真正熱愛的生活。你早期的抱負是真誠的，並激勵你多年努力。修正這些抱負或許是一種學習，而非為了逃避承認失望而編造的藉口。",
      "question": "從整段人生來看，你真的算是失敗了嗎？",
      "twist": "年輕時的你會感到失望。",
      "deeperQuestion": "哪個自我有資格評價你的人生？"
    }
  },
  {
    "id": "ponder-deep-060",
    "category": "Deep",
    "emoji": "🌊",
    "title": "The Last Human Habit",
    "scenario": "You keep a pointless ritual after forgetting its original purpose.\n\nThe ritual offers continuity even when its explanation is gone. Abandoning it might free time for new meaning, while keeping it honors a connection that cannot be reduced to an original practical function.",
    "question": "Would you abandon it?",
    "twist": "It still connects people emotionally.",
    "deeperQuestion": "Can a practice matter after its explanation disappears?",
    "zh": {
      "title": "人類最後的習慣",
      "scenario": "你忘了儀式的最初目的，卻仍然保留著它，儘管它毫無意義。即使失去了最初的解釋，儀式仍能帶來延續性。放棄它或許能騰出時間去賦予它新的意義，而保留它則維繫著一種無法被簡化為最初實用功能的聯繫。",
      "question": "你會放棄它嗎？",
      "twist": "它仍然能將人們的情感連結起來。",
      "deeperQuestion": "當解釋消失後，實踐還有意義嗎？"
    }
  },
  {
    "id": "ponder-deep-061",
    "category": "Deep",
    "emoji": "🗝️",
    "title": "The Color Question",
    "scenario": "You cannot know whether others experience colors exactly as you do.\n\nYou can coordinate perfectly, describe differences consistently, and create art together. The remaining uncertainty concerns private experience rather than any failure to communicate or act cooperatively.",
    "question": "Does that matter?",
    "twist": "You agree perfectly on every color-related action.",
    "deeperQuestion": "Must shared understanding include identical inner experience?",
    "zh": {
      "title": "顏色問題",
      "scenario": "你無法確切知道他人對顏色的感知是否與你完全相同。你們可以完美協調，一致地描述差異，並共同創作藝術。剩餘的不確定性在於個人的體驗，而非溝通或合作方面的任何不足。",
      "question": "這很重要嗎？",
      "twist": "你們在所有與顏色相關的操作上都完全同意。",
      "deeperQuestion": "共同理解是否必須包含完全相同的內在經驗？"
    }
  },
  {
    "id": "ponder-deep-062",
    "category": "Deep",
    "emoji": "🧠",
    "title": "The Freedom Limit",
    "scenario": "Unlimited options leave you less satisfied than a few meaningful choices.\n\nFewer choices could reduce exhaustion and help you commit, but selection gives power to whoever sets the limits. Relief from deciding may therefore depend on trusting somebody else's idea of a worthwhile life.",
    "question": "Would you accept fewer options?",
    "twist": "Someone else would decide which options remain.",
    "deeperQuestion": "Can restriction increase freedom in practice?",
    "zh": {
      "title": "自由的極限",
      "scenario": "無限的選擇不如少數幾個有意義的選擇更能讓人感到滿足。選擇少一點或許能減輕疲憊感，幫助你做出承諾，但選擇權卻掌握在設定限制的人手中。因此，擺脫抉擇的困擾或許取決於你是否信任他人對美好生活的定義。",
      "question": "你能接受較少的選擇嗎？",
      "twist": "剩下的選擇將由其他人決定。",
      "deeperQuestion": "限制在實踐中能否增加自由？"
    }
  },
  {
    "id": "ponder-deep-063",
    "category": "Deep",
    "emoji": "🪞",
    "title": "The Moral Luck",
    "scenario": "Two people make the same careless choice; only one causes harm.\n\nBoth people accepted the same risk, understood it equally, and acted without intending harm. Different outcomes still create different repair needs, even if the original quality of their decisions was identical.",
    "question": "Should they be judged equally?",
    "twist": "The harmless outcome was pure luck.",
    "deeperQuestion": "Should responsibility follow decisions or consequences?",
    "zh": {
      "title": "道德運氣",
      "scenario": "兩個人做了同樣的草率選擇；只有一人造成了傷害。兩人都承擔了相同的風險，對風險的理解也相同，而且都並非有意造成傷害。即使他們最初決策的性質相同，不同的結果仍然會造成不同的補救需求。",
      "question": "他們應該受到同等的評判嗎？",
      "twist": "無害的結果純粹是運氣。",
      "deeperQuestion": "責任應該追究決策還是後果？"
    }
  },
  {
    "id": "ponder-deep-064",
    "category": "Deep",
    "emoji": "⏳",
    "title": "The Imagined Audience",
    "scenario": "You discover nobody has been paying attention to the flaws you worry about.\n\nYou feel freer when imagined criticism disappears, but also less certain that your efforts have been witnessed. The realization changes both the burden and the comfort you drew from other people's attention.",
    "question": "Would you feel relieved?",
    "twist": "Some achievements also went unnoticed.",
    "deeperQuestion": "How much self-worth depends on imagined spectators?",
    "zh": {
      "title": "假想的觀眾",
      "scenario": "你發現根本沒人注意到你一直擔心的那些缺點。當想像中的批評消失後，你感到輕鬆了許多，但也開始懷疑自己的努力是否真的被人認可。這種認知改變了你從他人關注中獲得的負擔和慰藉。",
      "question": "你會感到寬慰嗎？",
      "twist": "有些成就也沒有被注意到。",
      "deeperQuestion": "自我價值在多大程度上取決於想像中的旁觀者？"
    }
  },
  {
    "id": "ponder-deep-065",
    "category": "Deep",
    "emoji": "🌌",
    "title": "The Unchosen Beginning",
    "scenario": "Every part of your starting life was outside your control.\n\nYou made efforts that felt difficult and meaningful, even though your ability to make them had a history. Explaining that history does not immediately settle what praise, gratitude, or responsibility should look like.",
    "question": "What can you take credit for?",
    "twist": "Your capacity to work hard also had causes.",
    "deeperQuestion": "What does deserving mean in a world of unequal beginnings?",
    "zh": {
      "title": "未被選擇的開始",
      "scenario": "你的出生環境、天賦和最初遇到的人，都不是自己選的。後來的努力確實艱難，也確實由你付出，但能努力的條件同樣有來由。明白這些原因後，你要重新想想，怎樣談個人成就、感激和責任才合理。",
      "question": "你有什麼功勞可以歸功於自己？",
      "twist": "你努力工作的能力也是有原因的。",
      "deeperQuestion": "在一個出身不平等的世界裡，應得意味著什麼？"
    }
  },
  {
    "id": "ponder-deep-066",
    "category": "Deep",
    "emoji": "📖",
    "title": "The Final Conversation",
    "scenario": "You can have one ordinary conversation with someone who is gone.\n\nYou could ask practical questions, revisit old misunderstandings, or simply share ordinary news. The limited time reveals whether what you miss most is information, recognition, or the experience of being together.",
    "question": "What would you discuss?",
    "twist": "They cannot answer questions they never knew.",
    "deeperQuestion": "Does connection require new information?",
    "zh": {
      "title": "最後的對話",
      "scenario": "你可以和逝去的人進行一次普通的對話。你可以問一些實際的問題，重溫過去的誤會，或只是分享一些日常瑣事。這有限的時間會讓你明白，你最懷念的是資訊、認可，還是與人相處的時光。",
      "question": "你們會討論什麼？",
      "twist": "他們無法回答他們從未知道的問題。",
      "deeperQuestion": "與一個人建立連結，一定需要獲得新的資訊嗎？"
    }
  },
  {
    "id": "ponder-deep-067",
    "category": "Deep",
    "emoji": "🌀",
    "title": "The Better World",
    "scenario": "You can create a better world in which you never existed.\n\nThe better world would not contain a person who feels your loss, because your absence is part of its history. Choosing it asks you to compare lived possibilities from a perspective that would itself disappear.",
    "question": "Would you choose it?",
    "twist": "Everyone you love would live differently but happily.",
    "deeperQuestion": "How much should your own existence matter in your judgment?",
    "zh": {
      "title": "更美好的世界",
      "scenario": "你可以創造一個你從未存在過的更美好的世界。這個更美好的世界裡不會有感受到你離去之痛的人，因為你的缺席已經成為它歷史的一部分。選擇它，意味著你要從一個終將消逝的視角去比較各種可能性。",
      "question": "你會選擇它嗎？",
      "twist": "你愛的每個人都會過著不同的生活，但會很幸福。",
      "deeperQuestion": "在你的判斷中，你自身的存在應該有多重要？"
    }
  },
  {
    "id": "ponder-deep-068",
    "category": "Deep",
    "emoji": "🧩",
    "title": "The Shared Reality",
    "scenario": "A community agrees on a false story that organizes their lives peacefully.\n\nThe story helps people cooperate and endure difficulty without obvious conflict. Challenging it may respect their access to truth while removing something they use to organize real and valuable relationships.",
    "question": "Would you challenge it?",
    "twist": "The truth offers no immediate practical improvement.",
    "deeperQuestion": "Can social usefulness justify a false belief?",
    "zh": {
      "title": "共享現實",
      "scenario": "一個社群認同一個虛假的故事，這個故事維繫著他們平靜的生活。這個故事幫助人們合作，在沒有明顯衝突的情況下度過難關。挑戰這個故事或許尊重了他們獲取真相的權利，但同時也剝奪了他們用來維繫真實且寶貴關係的某種東西。",
      "question": "你會質疑嗎？",
      "twist": "真相並不能帶來任何直接的實際改善。",
      "deeperQuestion": "社會效用能否為錯誤的信念辯護？"
    }
  },
  {
    "id": "ponder-deep-069",
    "category": "Deep",
    "emoji": "🕯️",
    "title": "The Lifelong Promise",
    "scenario": "You make a promise before understanding how much you will change.\n\nYour past promise came from a real version of you, not a stranger, and others trusted it reasonably. Growth complicates responsibility without automatically canceling the consequences of that earlier trust.",
    "question": "How binding is it?",
    "twist": "Others planned their lives around your commitment.",
    "deeperQuestion": "How should continuity and growth share authority?",
    "zh": {
      "title": "終身承諾",
      "scenario": "你在還沒完全理解自己將會發生多大改變之前就做出了承諾。你過去的承諾出自真實的你，而非陌生人之口，因此其他人也理所當然地相信了它。成長會讓責任變得更加複雜，但這並不意味著先前信任所帶來的後果就自動消失了。",
      "question": "它的約束力有多強？",
      "twist": "其他人則圍繞著你的承諾規劃自己的人生。",
      "deeperQuestion": "延續性和成長性應該如何分配權力？"
    }
  },
  {
    "id": "ponder-deep-070",
    "category": "Deep",
    "emoji": "🛶",
    "title": "Do We Mean the Same Number?",
    "scenario": "Two cities have exactly the same average life-satisfaction score. In one, most residents are moderately content. In the other, half are extremely satisfied and half deeply distressed. You initially see only the numbers, without the stories or circumstances behind them.",
    "question": "Can you say which city offers a better life, and what else would you need to know?",
    "twist": "Interviews reveal that residents of the two cities also understand “satisfaction” differently.",
    "deeperQuestion": "What do numbers clarify, and which important differences can their apparent precision conceal?",
    "zh": {
      "title": "我們相信同一個數字嗎？",
      "scenario": "兩座城市的平均生活滿意度完全相同。一座城市大多數人覺得還不錯，另一座則是一半非常滿足、一半非常痛苦。你只能看見這些數據，還不知道每個人背後的故事。",
      "question": "你能判斷哪座城市比較宜居嗎？在回答前，必須知道甚麼？",
      "twist": "加入訪談後，你發現兩地的人對「滿足」這個詞的理解也不同。",
      "deeperQuestion": "數字讓哪些東西變得清楚，又可能把哪些重要差異藏起來？"
    }
  },
  {
    "id": "ponder-deep-071",
    "category": "Deep",
    "emoji": "🪐",
    "title": "The Repeated Year",
    "scenario": "You can repeat your happiest year indefinitely without remembering earlier repetitions.\n\nNo remembered boredom would accumulate, and every joy would arrive with its original freshness. From outside, however, the life would contain no continuing development beyond the same bounded set of experiences.",
    "question": "Would you stay?",
    "twist": "From inside, every experience feels new.",
    "deeperQuestion": "Does repetition matter if nobody experiences it as repetition?",
    "zh": {
      "title": "不斷重複的一年",
      "scenario": "你可以無限重複你最快樂的一年，而不會記得之前的重複。不會累積任何厭倦感，每一份快樂都會帶著最初的新鮮感覺。然而，從旁觀者的角度來看，生活將不再包含超越同一組有限體驗的持續發展。",
      "question": "你願意留下來嗎？",
      "twist": "從內部來看，每一次體驗都感覺是全新的。",
      "deeperQuestion": "如果沒有人感覺到重複，那麼重複還有意義嗎？"
    }
  },
  {
    "id": "ponder-deep-072",
    "category": "Deep",
    "emoji": "🌊",
    "title": "The Uncomfortable Truth",
    "scenario": "A comforting belief is challenged by strong evidence.\n\nYou want to be open to evidence without pretending that changing a belief carries no emotional cost. Investigation may require rebuilding the purpose the belief once supplied rather than simply removing an incorrect statement.",
    "question": "Would you investigate further?",
    "twist": "The belief supports your sense of purpose.",
    "deeperQuestion": "How much uncertainty should a meaningful belief tolerate?",
    "zh": {
      "title": "令人不安的真相",
      "scenario": "令人欣慰的信念受到強而有力的證據挑戰。你應該對證據持開放態度，但不要假裝改變信念不會帶來任何情感上的代價。調查可能需要重建該信念曾經賦予的意義，而不僅僅是刪除錯誤的陳述。",
      "question": "你會進一步調查嗎？",
      "twist": "這個信念增強了你的使命感。",
      "deeperQuestion": "有意義的信念應該容忍多大的不確定性？"
    }
  },
  {
    "id": "ponder-deep-073",
    "category": "Deep",
    "emoji": "🗝️",
    "title": "The Ordinary Miracle",
    "scenario": "You can make one ordinary experience feel astonishing every time.\n\nNothing about the activity would become rare, difficult, or socially impressive. The change would occur in your attention, raising the possibility that extraordinary value can exist within an ordinary repeated experience.",
    "question": "Which would you choose?",
    "twist": "The feeling never makes it more useful.",
    "deeperQuestion": "Does attention create value or discover it?",
    "zh": {
      "title": "平凡的奇蹟",
      "scenario": "你可以讓每一次平凡的經驗都變得令人驚訝。活動本身並不會變得稀有、困難或引人注目。改變之處在於你的注意力，它讓你意識到，即使是平凡的重複經驗中也可能蘊藏著非凡的價值。",
      "question": "你會選擇哪一個？",
      "twist": "這種感覺並不會讓它變得更有用。",
      "deeperQuestion": "注意力是創造價值還是發現價值？"
    }
  },
  {
    "id": "ponder-deep-074",
    "category": "Deep",
    "emoji": "🧠",
    "title": "The Private Standard",
    "scenario": "You define success entirely for yourself, but still want others to approve.\n\nApproval is meaningful partly because other people matter to you, not merely because you lack confidence. The challenge is allowing their response to enrich your judgment without replacing it.",
    "question": "Is that inconsistent?",
    "twist": "Their approval sometimes contradicts your own standard.",
    "deeperQuestion": "Can independence coexist with wanting recognition?",
    "zh": {
      "title": "私人標準",
      "scenario": "你完全由自己定義成功，但仍渴望得到他人的認可。認可對你而言意義非凡，部分原因在於他人對你很重要，而不僅僅是因為你缺乏自信。關鍵在於，如何讓他們的回饋豐富你的判斷，而不是取代它。",
      "question": "這是否前後矛盾？",
      "twist": "他們的認可有時與你自己的標準相悖。",
      "deeperQuestion": "獨立與渴望獲得認可可以並存嗎？"
    }
  },
  {
    "id": "ponder-deep-075",
    "category": "Deep",
    "emoji": "🪞",
    "title": "The Last Memory",
    "scenario": "At life's end, you can preserve only one memory.\n\nSome memories feel precious because of happiness, others because they explain who you became. Choosing one forces you to distinguish what was enjoyable, what was formative, and what you most want to keep near.",
    "question": "Would you choose happiness or significance?",
    "twist": "Your happiest moment was also very ordinary.",
    "deeperQuestion": "Are memorable experiences necessarily the most valuable ones?",
    "zh": {
      "title": "最後的記憶",
      "scenario": "生命終結之時，你只能保留一段記憶。有些記憶彌足珍貴，是因為它帶來快樂；有些記憶則因為它詮釋了你成為怎樣的人。選擇一段記憶，迫使你分辨哪些是令人愉悅的，哪些是塑造你人生的，以及哪些是你最想珍藏的。",
      "question": "你會選擇幸福還是意義？",
      "twist": "你最幸福的時刻也是非常平凡的。",
      "deeperQuestion": "難忘的經驗一定是最有價值的嗎？"
    }
  },
  {
    "id": "ponder-deep-076",
    "category": "Deep",
    "emoji": "⏳",
    "title": "The Authentic Mask",
    "scenario": "You act confident for years until confidence becomes natural.\n\nThe early confidence was effortful and sometimes uncomfortable, but it changed what you attempted and learned. Calling it fake may overlook how people practice traits before those traits become familiar.",
    "question": "Was the earlier version fake?",
    "twist": "The performance helped you develop real abilities.",
    "deeperQuestion": "Can pretending be a path to authenticity?",
    "zh": {
      "title": "真實的面具",
      "scenario": "你會多年來一直表現得自信，直到自信成為一種本能。早期的自信需要付出努力，有時甚至會感到不自在，但它改變了你嘗試和學習的方式。稱之為「偽裝」可能會忽略人們在習得某些特質之前所經歷的練習過程。",
      "question": "早期版本是假的嗎？",
      "twist": "當初的模仿與扮演，幫助你培養出了真正的能力。",
      "deeperQuestion": "偽裝可以成為通往真實的途徑嗎？"
    }
  },
  {
    "id": "ponder-deep-077",
    "category": "Deep",
    "emoji": "🌌",
    "title": "The Unanswered Why",
    "scenario": "You can explain how everything works but not why anything exists.\n\nExplanations of mechanisms could continue indefinitely without providing a purpose outside those mechanisms. The remaining dissatisfaction may concern a kind of answer that facts about operation were never designed to supply.",
    "question": "Would that feel complete?",
    "twist": "Every proposed purpose creates another unanswered why.",
    "deeperQuestion": "Does every meaningful question need an answer?",
    "zh": {
      "title": "未解之謎",
      "scenario": "你能解釋一切事物如何運作，卻仍不知道為甚麼會有這個世界。每個機制都可以再追問下一層，完整的運作說明也未必能提供目的。你開始懷疑，自己要找的答案，是否本來就不是更多機制細節能給出的。",
      "question": "這樣就完整了嗎？",
      "twist": "每一個提出的目的都會引出另一個無法解答的「為什麼」。",
      "deeperQuestion": "每個有意義的問題都需要答案嗎？"
    }
  },
  {
    "id": "ponder-deep-078",
    "category": "Deep",
    "emoji": "📖",
    "title": "The Invisible Boundary",
    "scenario": "You cannot identify the exact moment a friendship became love.\n\nBoth can point to a gradual transformation but disagree about which moment should name it. The lack of a precise boundary does not erase the practical and emotional difference they now experience.",
    "question": "Does the boundary exist?",
    "twist": "Both people agree that something changed.",
    "deeperQuestion": "Can real differences lack precise dividing lines?",
    "zh": {
      "title": "無形的邊界",
      "scenario": "你無法確切指出友誼何時轉變為愛。雙方都可能指出這是一個漸進的過程，但對於哪個時刻才算真正定義了愛情卻各執己見。缺乏明確的界線並不能抹殺他們如今在實際和情感上所感受到的差異。",
      "question": "邊界是否存在？",
      "twist": "雙方都認為情況改變了。",
      "deeperQuestion": "真正的差異是否可以缺乏精確的分界線？"
    }
  },
  {
    "id": "ponder-deep-079",
    "category": "Deep",
    "emoji": "🌀",
    "title": "The Future Vote",
    "scenario": "Your future selves can vote on your current decision.\n\nTheir votes represent lives that depend on what you choose, so their interests are not imaginary to them. Counting every possible future equally may nevertheless favor predictability over the possibilities you currently value.",
    "question": "Would you give them control?",
    "twist": "The most numerous selves favor the safest life.",
    "deeperQuestion": "Should possible futures outweigh present desires?",
    "zh": {
      "title": "未來投票",
      "scenario": "未來的你可以對你目前的決定進行投票。他們的投票代表著取決於你選擇的生命，因此他們的利益對他們而言並非虛構。然而，將每一種可能的未來都同等看待，或許會使可預測性凌駕於你當前所珍視的可能性之上。",
      "question": "你會把控制權交給他們嗎？",
      "twist": "在所有未來版本的你之中，大多數都支持最安全的人生。",
      "deeperQuestion": "未來的可能性是否該凌駕於當下的願望？"
    }
  },
  {
    "id": "ponder-deep-080",
    "category": "Deep",
    "emoji": "🧩",
    "title": "The Forgotten Fear",
    "scenario": "You lose the ability to fear consequences but retain knowledge of them.\n\nYou understand that something can be dangerous without feeling the usual bodily warning. Your decisions would show whether caution follows knowledge, emotion, care for others, or a combination that cannot easily be separated.",
    "question": "Would you choose differently?",
    "twist": "You can still care about other people.",
    "deeperQuestion": "Is fear necessary for responsible action?",
    "zh": {
      "title": "被遺忘的恐懼",
      "scenario": "你失去了對後果的恐懼能力，但仍了解後果。你明白某些事物可能很危險，卻不會感受到平常的身體警示。你的決定將表明，你的謹慎是源於知識、情感、對他人的關心，還是源於難以區分的多種因素的綜合作用。",
      "question": "你會做出不同的選擇嗎？",
      "twist": "你仍然可以關心他人。",
      "deeperQuestion": "恐懼是採取負責任行動的必要條件嗎？"
    }
  },
  {
    "id": "ponder-deep-081",
    "category": "Deep",
    "emoji": "🕯️",
    "title": "The Meaningful Effort",
    "scenario": "A machine can instantly produce the result of your favorite difficult activity.\n\nThe machine saves time and produces exactly what you hoped to make. Using it might serve your practical goal while removing the attention, challenge, and gradual discovery you enjoyed during the process.",
    "question": "Would you use it?",
    "twist": "The result would be indistinguishable from your own work.",
    "deeperQuestion": "Can effort be valuable independently of its product?",
    "zh": {
      "title": "有意義的努力",
      "scenario": "一台機器可以瞬間完成你最喜歡的、難度較高的活動。這台機器節省時間，並能準確地做出你想要的東西。使用它或許能滿足你的實際目標，但卻剝奪了你在製作過程中所享受的專注、挑戰和逐步探索的樂趣。",
      "question": "你會使用它嗎？",
      "twist": "結果將與你自己的作品沒有區別。",
      "deeperQuestion": "努力的價值可以獨立於其結果嗎？"
    }
  },
  {
    "id": "ponder-deep-082",
    "category": "Deep",
    "emoji": "🛶",
    "title": "The Other Perspective",
    "scenario": "You experience a disagreement entirely from your opponent's point of view.\n\nTheir position becomes emotionally intelligible rather than merely something you can repeat accurately. Returning with both perspectives may increase understanding without producing a simple rule for deciding which action is right.",
    "question": "Would you return unchanged?",
    "twist": "You still remember why your original view made sense.",
    "deeperQuestion": "Can two incompatible perspectives both be understandable?",
    "zh": {
      "title": "另一種視角",
      "scenario": "你完全從對方的角度體驗了一場爭論。他們的立場不再只是你能準確複述的內容，而是變得可以從情感上理解。同時從雙方的角度出發，或許能加深理解，但並不能得出判斷哪一種做法正確的簡單規則。",
      "question": "體驗另一種觀點後，你會仍然和以前一樣嗎？",
      "twist": "你仍然記得你最初的觀點為什麼是有道理的。",
      "deeperQuestion": "兩種不相容的觀點都能被理解嗎？"
    }
  },
  {
    "id": "ponder-deep-083",
    "category": "Deep",
    "emoji": "🪐",
    "title": "The Last Discovery",
    "scenario": "Humanity answers every scientific question that can be answered.\n\nExplanations are complete, but experiencing a sunset or meeting someone remains different from knowing how it works. Curiosity might change from seeking missing facts to exploring particular encounters that cannot be lived in advance.",
    "question": "What happens to curiosity?",
    "twist": "Art and personal experience remain unpredictable.",
    "deeperQuestion": "Does wonder require ignorance?",
    "zh": {
      "title": "最後的發現",
      "scenario": "人類能夠解答所有可以解答的科學問題。解釋也已完備，但親身經歷日落或邂逅某人與了解其運作原理截然不同。好奇心或許會從探索缺失的事實轉變為探索那些無法預先體驗的特定經驗。",
      "question": "好奇心會怎樣？",
      "twist": "藝術和個人經驗仍然是不可預測的。",
      "deeperQuestion": "驚奇需要無知嗎？"
    }
  },
  {
    "id": "ponder-deep-084",
    "category": "Deep",
    "emoji": "🌊",
    "title": "The Chosen Ignorance",
    "scenario": "You may stop learning about problems you cannot personally solve.\n\nStepping back could preserve energy for responsibilities you can actually meet. It could also protect comfort by keeping people and possibilities outside your awareness before you know whether action is possible.",
    "question": "Would you choose peace?",
    "twist": "Awareness might eventually connect you with others who can help.",
    "deeperQuestion": "Is attention itself a responsibility?",
    "zh": {
      "title": "被選擇的無知",
      "scenario": "你可能會停止學習那些你個人無法解決的問題。退一步可以讓你把精力留給真正能承擔的責任。在你確定行動是否可行之前，將人和事排除在你的視野之外，也能讓你感受到安心。",
      "question": "你會選擇不知道，以換取內心的平靜嗎？",
      "twist": "提高意識最終可能會讓你認識其他可以幫助你的人。",
      "deeperQuestion": "注意力本身是一種責任嗎？"
    }
  },
  {
    "id": "ponder-deep-085",
    "category": "Deep",
    "emoji": "🗝️",
    "title": "The Measuring Life",
    "scenario": "A number accurately measures your lifetime happiness.\n\nThe number accurately captures what it claims to measure, so the problem is not faulty data. The question is whether happiness alone describes everything you want your life to contain.",
    "question": "Would you track it?",
    "twist": "Your most meaningful experiences sometimes lower the score.",
    "deeperQuestion": "Should a good life be optimized for one measure?",
    "zh": {
      "title": "衡量生命",
      "scenario": "一個數字可以準確衡量你一生的幸福感。這個數字準確地反映了它聲稱要衡量的東西，所以問題不在於數據錯誤。問題在於，幸福感本身是否能涵蓋你想要的人生的一切。",
      "question": "你會追蹤它嗎？",
      "twist": "你最有意義的經驗有時反而會降低分數。",
      "deeperQuestion": "美好生活是否應該以某一指標為最優解？"
    }
  },
  {
    "id": "ponder-deep-086",
    "category": "Deep",
    "emoji": "🧠",
    "title": "The False Start",
    "scenario": "You discover your life's direction began with a misunderstanding.\n\nThe misunderstanding introduced you to people, skills, and commitments you now choose knowingly. Changing course simply because the beginning was accidental could privilege origin over the meaning you have since made.",
    "question": "Would you change course?",
    "twist": "You now genuinely love where it led.",
    "deeperQuestion": "Does an accidental beginning invalidate a chosen continuation?",
    "zh": {
      "title": "虛假起跑",
      "scenario": "你發現自己現在的人生方向，最初竟然來自一場誤會。但沿著這條路，你結識了珍惜的人，學會技能，也作出了至今仍認同的承諾。要不要改變方向，取決於你更重視最初的原因，還是後來親自賦予的意義。",
      "question": "你會改變路線嗎？",
      "twist": "你現在真心喜歡它帶給你的結果。",
      "deeperQuestion": "意外的開始是否會使選擇的延續無效？"
    }
  },
  {
    "id": "ponder-deep-087",
    "category": "Deep",
    "emoji": "🪞",
    "title": "The Quiet Existence",
    "scenario": "You live contentedly without ambition, legacy, or dramatic experiences.\n\nYou are not secretly miserable or avoiding something you want; contentment is genuine. The accusation of wasted potential therefore depends on a standard of achievement you may never have chosen.",
    "question": "Is anything missing?",
    "twist": "Other people insist you are wasting potential.",
    "deeperQuestion": "Who decides whether a life has been fully lived?",
    "zh": {
      "title": "靜謐的存在",
      "scenario": "你安於現狀，沒有野心、沒有名望，也沒有驚天動地的經驗。你並非內心痛苦，也並非在逃避自己想要的東西；你的滿足是發自內心的。因此，所謂你浪費潛能的指責，是基於你可能從未選擇過的成就標準。",
      "question": "還有什麼遺漏嗎？",
      "twist": "其他人堅持認為你是在浪費潛力。",
      "deeperQuestion": "誰來決定一個人的一生是否過得充實？"
    }
  },
  {
    "id": "ponder-deep-088",
    "category": "Deep",
    "emoji": "⏳",
    "title": "The Divided Attention",
    "scenario": "You can experience two places simultaneously but feel less present in each.\n\nBoth occasions matter, and physical attendance at only one would disappoint someone. Dividing awareness could meet the visible expectation of being there without offering either person your undivided attention.",
    "question": "Would you use the ability?",
    "twist": "You could attend two loved ones' important moments.",
    "deeperQuestion": "Is presence about location or quality of attention?",
    "zh": {
      "title": "分散的注意力",
      "scenario": "你可以同時體驗兩個地方，但卻感覺在兩個地方都不夠專注。兩個場合都很重要，只親身出席其中一個會讓對方失望。分散注意力或許能滿足人們「在場」的預期，卻無法給予任何一方全神貫注。",
      "question": "你會使用這種能力嗎？",
      "twist": "你可以見證兩位摯愛的重要時刻。",
      "deeperQuestion": "真正的陪伴，取決於身處哪裡，還是付出了多少專注？"
    }
  },
  {
    "id": "ponder-deep-089",
    "category": "Deep",
    "emoji": "🌌",
    "title": "The Unfinished Story",
    "scenario": "Your life ends before you resolve the problem you cared about most.\n\nThe problem was larger than one lifetime, and your work still changed what later people can do. Incompletion may describe the project without proving that your contribution lacked purpose.",
    "question": "Was it incomplete?",
    "twist": "Others continue the work without following your plan.",
    "deeperQuestion": "Does meaning require seeing an ending?",
    "zh": {
      "title": "未完的故事",
      "scenario": "你的生命在你最關心的問題解決之前就結束了。這個問題遠超你一生所能及，而你的工作仍然改變了後人的能力。未完成或許可以用來描述這個項目，但這並不代表你的貢獻毫無意義。",
      "question": "是否不完整？",
      "twist": "其他人繼續工作，而不按照你的計劃進行。",
      "deeperQuestion": "意義是否需要看到結局？"
    }
  },
  {
    "id": "ponder-deep-090",
    "category": "Deep",
    "emoji": "📖",
    "title": "The Perfect Empathy",
    "scenario": "You understand every motive behind a harmful act.\n\nThe motives become recognizable responses to fear, history, and opportunity rather than signs of incomprehensible evil. Understanding might support more effective prevention while leaving a clear need for boundaries and accountability.",
    "question": "Can you still condemn it?",
    "twist": "Understanding does not reduce the victim's pain.",
    "deeperQuestion": "Does explanation weaken judgment or improve it?",
    "zh": {
      "title": "完美的同理心",
      "scenario": "你了解有害行為背後的每一個動機。這些動機不再是難以理解的邪惡的跡象，而是對恐懼、歷史和機會的可識別反應。理解有助於更有效地預防犯罪，同時也明確了界線和問責的必要性。",
      "question": "你還能譴責它嗎？",
      "twist": "理解並不能減輕受害者的痛苦。",
      "deeperQuestion": "解釋會削弱判斷還是增強判斷？"
    }
  },
  {
    "id": "ponder-deep-091",
    "category": "Deep",
    "emoji": "🌀",
    "title": "When Strange Becomes Normal",
    "scenario": "You join a group that discusses everyone’s feelings before any decision, even buying stationery. At first it seems peculiar. Six months later it feels natural, and discussions elsewhere seem rushed. You are free to leave and nobody threatens or punishes disagreement.",
    "question": "How would you tell whether you learned a useful practice or merely adapted to the people around you?",
    "twist": "A month away, you retain some habits but abandon rules you once defended strongly.",
    "deeperQuestion": "What kind of examination makes a belief something you chose rather than something you absorbed?",
    "zh": {
      "title": "慢慢改變的「正常」",
      "scenario": "你加入一個團體，最初覺得它的做法很古怪：所有決定都要輪流說一次感受，連買文具也不例外。半年後，你已經很自然地跟著做，反而覺得外面的討論太急。你並沒有被強迫留下。",
      "question": "你會怎樣判斷自己是學會了有用的方法，還是只是習慣了周圍的人？",
      "twist": "離開團體一個月後，你保留了部分習慣，也放下了一些以前堅持的規矩。",
      "deeperQuestion": "一個信念要經過怎樣的檢驗，才算真正被你選擇，而不只是被你吸收？"
    }
  },
  {
    "id": "ponder-deep-092",
    "category": "Deep",
    "emoji": "🧩",
    "title": "The Certain Tomorrow",
    "scenario": "You know tomorrow will be ordinary and uneventful.\n\nYou might feel relieved, bored, or more able to notice small pleasures without anticipating a dramatic event. The prediction tests whether an ordinary day loses value when its possibilities seem already settled.",
    "question": "Would today feel different?",
    "twist": "Most of your happiest memories began as ordinary days.",
    "deeperQuestion": "How much value comes from possibility?",
    "zh": {
      "title": "確定的明天",
      "scenario": "你知道明天會平淡無奇。你可能會感到輕鬆、無聊，或者更能注意到生活中的點滴樂趣，而不會期待發生什麼驚天動地的大事。這個預測旨在檢驗，當一切似乎都已塵埃落定時，平凡的一天是否會失去價值。",
      "question": "今天會感覺不一樣嗎？",
      "twist": "你最快樂的回憶大多始於平凡的日子。",
      "deeperQuestion": "可能性能帶來多大的價值？"
    }
  },
  {
    "id": "ponder-deep-093",
    "category": "Deep",
    "emoji": "🕯️",
    "title": "The Silent Achievement",
    "scenario": "You privately overcome a difficulty others consider easy.\n\nThe effort involved fears and limitations other people cannot see. Recognizing it requires deciding whether a challenge's importance depends on a shared external standard or the particular person meeting it.",
    "question": "Does it deserve celebration?",
    "twist": "Nobody understands the effort it required.",
    "deeperQuestion": "Should achievement be measured from the outside or within?",
    "zh": {
      "title": "無聲的成就",
      "scenario": "你獨自克服了別人眼中輕而易舉的困難。你付出的努力包含了他人無法察覺的恐懼和限制。要認識到這一點，就需要判斷一項挑戰的重要性是取決於一個共同的外部標準，還是取決於達到該標準的人本身。",
      "question": "這值得慶祝嗎？",
      "twist": "沒有人理解這需要付出多少努力。",
      "deeperQuestion": "成就應該從外部衡量還是從內部衡量？"
    }
  },
  {
    "id": "ponder-deep-094",
    "category": "Deep",
    "emoji": "🛶",
    "title": "The Unstable Value",
    "scenario": "What you value most changes depending on whether you are tired or rested.\n\nRested preferences may be more stable, but tired feelings can reveal needs you ignore when functioning well. Choosing which to trust involves interpretation rather than simply labeling one version of yourself false.",
    "question": "Which preference is real?",
    "twist": "Neither state lasts permanently.",
    "deeperQuestion": "Must authentic values remain constant across conditions?",
    "zh": {
      "title": "變動的價值觀",
      "scenario": "你最重視的東西會隨著你的疲憊程度而改變。休息充足時的偏好可能更穩定，但疲憊感會揭示你在狀態良好時會忽略的需求。選擇相信哪一個需要解讀，而不是簡單地將某個版本的自己貼上「錯誤」的標籤。",
      "question": "哪一種偏好才是真實的？",
      "twist": "這兩種狀態都不會永久持續。",
      "deeperQuestion": "真正屬於你的價值觀，是否必須在不同狀態下都保持一致？"
    }
  },
  {
    "id": "ponder-deep-095",
    "category": "Deep",
    "emoji": "🪐",
    "title": "The Last Questioner",
    "scenario": "Everyone becomes satisfied except you, who still asks why.\n\nYou do not want to disturb others simply to prove that you are thoughtful. Still, being the only dissatisfied person may expose assumptions that a contented majority has no reason to examine.",
    "question": "Would you stop questioning?",
    "twist": "Your questions sometimes disrupt their peace.",
    "deeperQuestion": "Can dissatisfaction be a valuable social role?",
    "zh": {
      "title": "最後的提問者",
      "scenario": "所有人都對生活感到滿意，只有你仍然追問「為甚麼」。你不想只是為了顯得深思熟慮，就打擾別人的平靜。但你的不滿，也可能指向一些大家習以為常、因為過得舒服而從未檢查的假設。",
      "question": "你會停止追問嗎？",
      "twist": "你的問題有時會打擾他們的安寧。",
      "deeperQuestion": "不滿能否成為一個有價值的社會角色？"
    }
  },
  {
    "id": "ponder-deep-096",
    "category": "Deep",
    "emoji": "🌊",
    "title": "The Borrowed Purpose",
    "scenario": "You devote your life to a goal inherited from someone you admire.\n\nThe goal has become part of your daily life and genuinely matters to you now. Its borrowed origin raises a question about whether values become yours through invention, reflection, or sustained commitment.",
    "question": "Is it truly yours?",
    "twist": "You would never have chosen it independently.",
    "deeperQuestion": "Does authenticity require inventing your own values?",
    "zh": {
      "title": "借來的目的",
      "scenario": "你畢生致力於一個源自於你敬佩之人的目標。這個目標已融入你的日常生活，對你而言意義非凡。其借來的起源引發了一個問題：價值觀究竟是透過創造、反思還是持續的投入而形成的？",
      "question": "這真的是你的嗎？",
      "twist": "你絕對不會主動選擇它。",
      "deeperQuestion": "真實性是否需要創造自己的價值觀？"
    }
  },
  {
    "id": "ponder-deep-097",
    "category": "Deep",
    "emoji": "🗝️",
    "title": "The Finite Universe",
    "scenario": "You learn that eventually no trace of humanity will remain.\n\nRelationships will eventually be forgotten, yet their joys and harms still occur for the people living them. The knowledge changes the scale of remembrance rather than erasing the reality of present experience.",
    "question": "Would you live differently?",
    "twist": "Every present experience still feels exactly as real.",
    "deeperQuestion": "Must value last forever to count?",
    "zh": {
      "title": "有限的宇宙",
      "scenario": "你最終會明白，人類的痕跡終將消失殆盡。人際關係終將被遺忘，但身處其中的人們仍會感受到其中的喜怒哀樂。這種認知改變了記憶的尺度，而非抹殺當下經驗的真實。",
      "question": "你會選擇另一種生活方式嗎？",
      "twist": "現在的一切經驗仍然感覺和以前一樣真實。",
      "deeperQuestion": "價值必須永遠存在才算數嗎？"
    }
  },
  {
    "id": "ponder-deep-098",
    "category": "Deep",
    "emoji": "🧠",
    "title": "The Good Enough Life",
    "scenario": "You can see countless lives better than yours but cannot live them.\n\nComparison shows real possibilities rather than imaginary perfection, so dismissing it as unrealistic will not help. Choosing attention becomes a question of how much knowledge serves living rather than endlessly evaluating a life.",
    "question": "Would you keep looking?",
    "twist": "Your current life already contains love and purpose.",
    "deeperQuestion": "When does possibility undermine gratitude?",
    "zh": {
      "title": "夠好的生活",
      "scenario": "你可以看到無數比你更好的生活，卻無法體驗它們。比較展現的是真實的可能性，而非虛幻的完美，所以將其斥為不切實際並無益處。選擇關注點的關鍵在於，有多少知識能服務生活，而不是無止盡地評價生活。",
      "question": "你願意繼續尋找嗎？",
      "twist": "你現在的生活已經充滿了愛和目標。",
      "deeperQuestion": "可能性何時會削弱感恩之心？"
    }
  },
  {
    "id": "ponder-deep-099",
    "category": "Deep",
    "emoji": "🪞",
    "title": "The Unspoken Self",
    "scenario": "You discover that the qualities you cannot describe matter most to people who love you.\n\nThey notice gestures, timing, and ways of listening that you never deliberately designed. Describing those qualities might help you understand your effect while turning spontaneous care into a performance you monitor.",
    "question": "Would you try to define them?",
    "twist": "Defining them makes you perform them self-consciously.",
    "deeperQuestion": "Can self-knowledge interfere with being yourself?",
    "zh": {
      "title": "未言明的自我",
      "scenario": "你會發現，那些你無法言說的特質，對愛你的人來說最為重要。他們會注意到你從未刻意設計的舉止、時機和聆聽方式。描述這些特質或許能幫助你理解你對他人的影響，同時將自發性的關懷變成一種需要精心控制的表演。",
      "question": "你會嘗試為那些難以言說的自我特質下定義嗎？",
      "twist": "一旦為這些特質下了定義，你就會開始刻意表現出它們。",
      "deeperQuestion": "自我認知會妨礙做自己嗎？"
    }
  },
  {
    "id": "ponder-deep-100",
    "category": "Deep",
    "emoji": "⏳",
    "title": "The Open Ending",
    "scenario": "You may know how your story ends or keep choosing without certainty.\n\nKnowing could bring reassurance without telling you which choices will feel important along the way. Remaining uncertain preserves discovery while accepting that the ending may not justify every difficulty you encounter.",
    "question": "Which would you choose?",
    "twist": "Knowing the ending would not reveal the journey.",
    "deeperQuestion": "Is uncertainty part of what makes a life your own?",
    "zh": {
      "title": "開放式結局",
      "scenario": "你或許知道故事的結局，也可能繼續在不確定性中做出選擇。知道結局或許能帶來安心感，但卻無法告訴你哪些選擇會在過程中顯得至關重要。保持不確定性則能讓你保留探索的樂趣，同時也能讓你明白，結局未必能彌補你所遇到的所有困難。",
      "question": "你會選擇哪一個？",
      "twist": "知道結局並不能揭示過程。",
      "deeperQuestion": "不確定性是構成個人生活的一部分嗎？"
    }
  },
  {
    "id": "ponder-weird-002",
    "category": "Weird",
    "emoji": "🌀",
    "title": "The Borrowed Shadow",
    "scenario": "Your shadow requests weekends off to develop its own hobbies.\n\nYou assumed the shadow's presence was simply part of having a body. Hearing it describe boredom makes a familiar relationship look less natural and more like labor nobody previously thought to question.",
    "question": "Would you agree?",
    "twist": "People become suspicious when you appear without it.",
    "deeperQuestion": "Does another being owe you a familiar appearance?",
    "zh": {
      "title": "借來的影子",
      "scenario": "你的影子要求週末放假，去發展自己的嗜好。\n\n你一直以為，影子跟著你，只是擁有身體的自然結果。但聽完它描述日復一日的無聊，這段熟悉的關係突然像是一份從來沒有人質疑過、也沒有休息的工作。",
      "question": "你同意嗎？",
      "twist": "當你獨自出現、腳邊卻沒有影子時，其他人開始懷疑你的身分。",
      "deeperQuestion": "另一個生物是否欠你一個熟悉的外表？"
    }
  },
  {
    "id": "ponder-weird-003",
    "category": "Weird",
    "emoji": "👽",
    "title": "The Tuesday Lease",
    "scenario": "You can rent out every Tuesday of your life to a stranger.\n\nThe rent would solve practical problems without reducing the number of days you personally remember. Yet other people would experience a continuous person whose Tuesday decisions might conflict with everything you choose afterward.",
    "question": "Would you sign?",
    "twist": "They form relationships using your body and name.",
    "deeperQuestion": "Who owns a life shared across time?",
    "zh": {
      "title": "星期二的租約",
      "scenario": "你可以把生命中的每個星期二租給陌生人。這種租金既能解決實際問題，又不會減少你個人記憶中的日子數量。然而，其他人將會體驗到一個持續存在的你，而你星期二的決定可能會與你之後的所有選擇相衝突。",
      "question": "你願意簽字嗎？",
      "twist": "他們利用你的身體和名字建立關係。",
      "deeperQuestion": "誰擁有跨越時空共享的生命？"
    }
  },
  {
    "id": "ponder-weird-004",
    "category": "Weird",
    "emoji": "🪐",
    "title": "The Dream Tax",
    "scenario": "The government taxes pleasant dreams to fund repairs to nightmares.\n\nOfficials describe the policy as sharing an emotional luxury fairly. Dreamers argue that comfort during sleep may be the only relief available to people whose ordinary circumstances offer very little choice.",
    "question": "Would you pay?",
    "twist": "People with difficult waking lives dream most happily.",
    "deeperQuestion": "Can equal rules burden unequal lives differently?",
    "zh": {
      "title": "夢境稅",
      "scenario": "政府對美夢課稅，以資助惡夢的修復工作。官員們稱這項政策旨在公平地分享一種情感上的奢侈品。而做夢者則認為，對於那些在日常生活中別無選擇的人來說，睡眠中的舒適感或許是唯一的慰藉。",
      "question": "你願意付費嗎？",
      "twist": "清醒時生活艱難的人，做夢最快樂。",
      "deeperQuestion": "平等的規則是否會對不平等的生活造成不同的負擔？"
    }
  },
  {
    "id": "ponder-weird-005",
    "category": "Weird",
    "emoji": "🚪",
    "title": "The Talking Ocean",
    "scenario": "The ocean asks humanity to stop calling it a resource.\n\nIt has provided food, transport, and beauty without previously speaking about ownership. Now its request makes familiar uses feel like decisions involving another participant rather than an environment that cannot answer.",
    "question": "Would you change your behavior?",
    "twist": "It cannot explain what treatment it prefers.",
    "deeperQuestion": "Does recognizing personhood require knowing someone's needs?",
    "zh": {
      "title": "會說話的海洋",
      "scenario": "海洋開口請求人類，不要再只把它當成資源。過去我們一直從它取得食物、交通和美景，卻從未問過它的意願。如今同樣的利用方式，突然像是需要與一個有想法的存在協商，而不只是使用不會回應的環境。",
      "question": "你會改變你的行為嗎？",
      "twist": "海洋卻無法解釋，它希望人類怎樣對待它。",
      "deeperQuestion": "承認人格是否需要了解一個人的需求？"
    }
  },
  {
    "id": "ponder-weird-006",
    "category": "Weird",
    "emoji": "🌙",
    "title": "The Spare Universe",
    "scenario": "A spare universe appears in your wardrobe and needs an owner.\n\nYou did not create the universe and know little about how it works. Its inhabitants nevertheless interpret your ordinary movements as deliberate decisions about weather, safety, and the meaning of their lives.",
    "question": "Would you accept responsibility?",
    "twist": "Its inhabitants begin worshipping you without permission.",
    "deeperQuestion": "Does accidental power create duties?",
    "zh": {
      "title": "備用宇宙",
      "scenario": "一個備用宇宙出現在你的衣櫥裡，等待著它的主人。你並非這個宇宙的創造者，對它的運作方式也知之甚少。然而，宇宙中的居民卻將你平凡的舉動解讀為對天氣、安全以及它們生命意義的深思熟慮的決定。",
      "question": "你願意承擔責任嗎？",
      "twist": "它的居民未經允許就開始崇拜你。",
      "deeperQuestion": "意外權力是否產生義務？"
    }
  },
  {
    "id": "ponder-weird-007",
    "category": "Weird",
    "emoji": "🪞",
    "title": "The Backward Guest",
    "scenario": "A guest experiences your dinner party backward through time.\n\nYou want everyone to enjoy the evening, but the guest responds to consequences before hearing their apparent causes. Ordinary hospitality becomes an attempt to understand a person whose sequence of experience differs from yours.",
    "question": "How would you host them?",
    "twist": "They remember an argument you have not had yet.",
    "deeperQuestion": "Can knowing an outcome help prevent its cause?",
    "zh": {
      "title": "倒退的客人",
      "scenario": "一位客人倒敘著體驗你的晚宴。你希望每個人都能享受這個夜晚，但這位客人卻先於其表面原因做出反應。平常的待客之道變成了試圖理解一位經歷順序與你不同的人。",
      "question": "你會如何接待他們？",
      "twist": "他們記得你還沒經歷過的爭吵。",
      "deeperQuestion": "了解結果能否幫助預防原因？"
    }
  },
  {
    "id": "ponder-weird-008",
    "category": "Weird",
    "emoji": "☁️",
    "title": "The Footnote Person",
    "scenario": "You discover you exist only as a footnote in someone else's biography.\n\nYou experience a full inner life despite the small role assigned to you in the published story. Asking for more space challenges whether narrative importance should follow experience or the interests of its author.",
    "question": "Would you demand a chapter?",
    "twist": "Expanding your story shortens theirs.",
    "deeperQuestion": "Does significance require a central role?",
    "zh": {
      "title": "註腳人",
      "scenario": "你發現自己僅僅作為他人傳記中的一個註腳而存在。儘管你在已發表的故事中扮演的角色微不足道，你卻擁有完整的內心世界。要求獲得更多篇幅，挑戰敘事重要性究竟該遵循經驗還是作者的興趣。",
      "question": "你會要求增加一個章節嗎？",
      "twist": "你的故事越展開，他們的故事就越短。",
      "deeperQuestion": "重要性是否需要核心作用？"
    }
  },
  {
    "id": "ponder-weird-009",
    "category": "Weird",
    "emoji": "🛸",
    "title": "The Musical Gravity",
    "scenario": "Gravity works only while someone nearby hums.\n\nHumming begins as a shared emergency response and quickly becomes part of everyday maintenance. Deciding who must continue when others want rest turns an absurd physical rule into a question about collective labor.",
    "question": "Would you make humming mandatory?",
    "twist": "Some people cannot comfortably produce the sound.",
    "deeperQuestion": "Who should carry a shared survival burden?",
    "zh": {
      "title": "音樂引力",
      "scenario": "重力只有在附近有人哼唱時才會發揮作用。哼唱最初是一種共同的應急反應，很快就成為日常維護的一部分。決定當其他人想要休息時誰必須繼續工作，將一條荒謬的物理規則轉化為一個關於集體勞動的問題。",
      "question": "你會強制要求哼歌嗎？",
      "twist": "有些人無法輕易地發出這種聲音。",
      "deeperQuestion": "誰應該承擔共同的生存負擔？"
    }
  },
  {
    "id": "ponder-weird-010",
    "category": "Weird",
    "emoji": "🧦",
    "title": "The Second Moon",
    "scenario": "A second moon appears and asks humans to choose their favorite.\n\nBoth moons illuminate the world differently, and people become attached to qualities that cannot be ranked objectively. The requested vote would make a shared sky depend on a competition nobody asked to create.",
    "question": "Would you vote?",
    "twist": "The less popular moon will leave permanently.",
    "deeperQuestion": "Can refusing to compare be a meaningful choice?",
    "zh": {
      "title": "第二個月亮",
      "scenario": "第二顆月亮出現，並要求人類選出他們最喜歡的一顆。兩顆月亮以不同的方式照亮世界，人們開始執著於一些無法客觀比較的特質。這場投票使得共同的天空取決於一場無人要求的競爭。",
      "question": "你會投票嗎？",
      "twist": "較不受歡迎的月亮將永久離開。",
      "deeperQuestion": "拒絕比較能是有意義的選擇嗎？"
    }
  },
  {
    "id": "ponder-weird-011",
    "category": "Weird",
    "emoji": "🗺️",
    "title": "The Escaped Metaphor",
    "scenario": "Your friend's broken heart becomes an actual object needing repair.\n\nThe damaged object is easier to diagnose than the feelings it represents. Repairing it quickly might restore comfort while removing a process through which your friend was beginning to understand what happened.",
    "question": "Would you fix it?",
    "twist": "Repairing it also removes what they learned.",
    "deeperQuestion": "Is healing the same as returning to an earlier state?",
    "zh": {
      "title": "逃脫的隱喻",
      "scenario": "你朋友破碎的心變成了一個需要修復的實物。受損的物體比它所代表的情感更容易診斷。快速修復它或許能帶來安慰，但同時也扼殺了你的朋友開始理解發生了什麼事的過程。",
      "question": "你能修好它嗎？",
      "twist": "修復它也會抹去他們所學到的東西。",
      "deeperQuestion": "康復是否等同於恢復到先前的狀態？"
    }
  },
  {
    "id": "ponder-weird-012",
    "category": "Weird",
    "emoji": "🎈",
    "title": "The Memory Landlord",
    "scenario": "Someone buys the building where your memories are stored.\n\nThe landlord controls access rather than the memories themselves and says the arrangement is ordinary property management. Depending on that promise makes the security of your inner life feel unexpectedly contractual.",
    "question": "Would you pay rent?",
    "twist": "They promise not to read the contents.",
    "deeperQuestion": "Can ownership over infrastructure threaten inner freedom?",
    "zh": {
      "title": "記憶房東",
      "scenario": "有人買下了存放你記憶的那棟大樓。房東控制的是訪問權限，而非記憶本身，並聲稱這只是普通的物業管理。依賴這項承諾，會讓你內心世界的安全感意外地變得像一份合約。",
      "question": "你會付房租嗎？",
      "twist": "他們承諾不閱讀內容。",
      "deeperQuestion": "對基礎設施的所有權會威脅到內心的自由嗎？"
    }
  },
  {
    "id": "ponder-weird-013",
    "category": "Weird",
    "emoji": "🕳️",
    "title": "The Future Pet",
    "scenario": "Your future self sends you a pet with no instructions.\n\nThe animal responds warmly to you but reacts strongly to certain plans and places. You cannot tell whether its fear reflects reliable knowledge, a misunderstood experience, or a future you are still free to change.",
    "question": "Would you keep it?",
    "twist": "It seems afraid of a choice you are about to make.",
    "deeperQuestion": "How much authority should unexplained future knowledge have?",
    "zh": {
      "title": "未來寵物",
      "scenario": "未來的你送給你一隻寵物，卻沒有留下任何指示。這隻寵物對你很親切，但對某些計畫和地點卻反應強烈。你無法判斷它的恐懼是源自於可靠的認知、誤解的經歷，還是源自於你仍能改變的未來。",
      "question": "你會保留它嗎？",
      "twist": "它似乎害怕你即將做出的選擇。",
      "deeperQuestion": "無法解釋的未來知識應該擁有多大的權威？"
    }
  },
  {
    "id": "ponder-weird-014",
    "category": "Weird",
    "emoji": "🌀",
    "title": "The Polite Portal",
    "scenario": "A portal asks where you need to go rather than where you want.\n\nYou have a clear destination and good reasons for wanting to reach it. The portal offers a different kind of help: deciding that the purpose behind your journey matters more than the instructions you gave.",
    "question": "Would you enter?",
    "twist": "Its answer conflicts with your plans.",
    "deeperQuestion": "Should a helpful system decide your needs?",
    "zh": {
      "title": "有禮貌的傳送門",
      "scenario": "一道傳送門問你「需要去哪裡」，而不是「想去哪裡」。你原本有明確的目的地，也能解釋原因，但門認為自己知道更適合你的去處。它提供的幫助，不是執行指示，而是替你判斷旅程真正的目的。",
      "question": "你會走進這道傳送門嗎？",
      "twist": "它的答案與你的計劃相衝突。",
      "deeperQuestion": "一個有用的系統應該決定你的需求嗎？"
    }
  },
  {
    "id": "ponder-weird-015",
    "category": "Weird",
    "emoji": "👽",
    "title": "The Slow Thunder",
    "scenario": "Thunder arrives years after the lightning that caused it.\n\nPeople hear storms from distant stages of their lives long after moving away from them. A delayed sound can reconnect you with a past event without revealing what responsibility remains in the present.",
    "question": "Would you trace each sound?",
    "twist": "Some storms occurred before you were born.",
    "deeperQuestion": "How long should consequences remain connected to causes?",
    "zh": {
      "title": "慢雷",
      "scenario": "雷聲往往在閃電發生多年後才響起。人們即使遠離風暴多年，仍能聽到生命中遙遠階段的雷聲。這種延遲的聲音能讓你重新與過去的經驗連結起來，卻又不會揭露當下仍需承擔的責任。",
      "question": "你會追溯每一聲雷響的來源嗎？",
      "twist": "在你出生之前，已經發生過一些風暴。",
      "deeperQuestion": "結果與原因之間應該保持多久的關聯？"
    }
  },
  {
    "id": "ponder-weird-016",
    "category": "Weird",
    "emoji": "🪐",
    "title": "The Opinion Weather",
    "scenario": "Your strongest opinions control the local weather.\n\nYou can no longer treat conviction as something with only personal consequences. Softening your position may protect neighbors while making your beliefs responsive to pressure rather than reasons you consider persuasive.",
    "question": "Would you soften them?",
    "twist": "Your neighbors demand pleasant conditions.",
    "deeperQuestion": "Can collective comfort justify regulating private conviction?",
    "zh": {
      "title": "觀點天氣",
      "scenario": "你最強烈的觀點會控制當地天氣，因此信念不再只影響自己。軟化立場能讓鄰居生活得更舒服，卻也可能令你因為外界壓力而改口，而不是因為理由改變。你要在堅持和共同生活之間作出回應。",
      "question": "你會為了天氣而軟化自己的立場嗎？",
      "twist": "你的鄰居要求舒適的環境。",
      "deeperQuestion": "集體舒適能否成為限制個人信念的理由？"
    }
  },
  {
    "id": "ponder-weird-017",
    "category": "Weird",
    "emoji": "🚪",
    "title": "The Floating Apology",
    "scenario": "Every unsaid apology becomes a balloon following its owner.\n\nThe balloon is visible to everyone, but only you know what the apology concerns. Removing your own discomfort may require deciding whether speaking would help the other person or simply relieve you.",
    "question": "Would you release yours?",
    "twist": "Releasing requires speaking to someone who requested distance.",
    "deeperQuestion": "Can repair respect a boundary against contact?",
    "zh": {
      "title": "漂浮的道歉",
      "scenario": "每一句未說出口的道歉都像氣球，如影隨形地跟著主人。氣球人人可見，但只有你自己知道道歉的內容。為了消除自身的不適，你或許需要決定，開口道歉究竟是會幫助對方，還是只是為了讓自己輕鬆一點。",
      "question": "你會公佈你的嗎？",
      "twist": "釋放需要與要求保持距離的人交談。",
      "deeperQuestion": "想要修補傷害，能否同時尊重對方不願再聯絡的界線？"
    }
  },
  {
    "id": "ponder-weird-018",
    "category": "Weird",
    "emoji": "🌙",
    "title": "The Dream Tenant",
    "scenario": "Someone lives in your dreams and refuses to leave.\n\nYou hoped sleep would be a private refuge, while the tenant describes it as the only place they have ever lived. Their dependence turns your ordinary waking routine into a decision that affects another apparent life.",
    "question": "Would you evict them?",
    "twist": "They experience your waking hours as total darkness.",
    "deeperQuestion": "Do imagined beings deserve real consideration?",
    "zh": {
      "title": "夢境裡的房客",
      "scenario": "有人住在你的夢裡，拒絕離開。你原本希望睡眠是私密的避風港，而這位「房客」卻說那是對方唯一居住過的地方。對方的依賴，讓你平凡的清醒時刻變成了一個關乎另一個平行世界的抉擇。",
      "question": "你會驅逐他們嗎？",
      "twist": "他們將你的清醒時間視為完全的黑暗。",
      "deeperQuestion": "虛構的人物值得認真看待嗎？"
    }
  },
  {
    "id": "ponder-weird-019",
    "category": "Weird",
    "emoji": "🪞",
    "title": "The Stolen Tomorrow",
    "scenario": "A thief steals tomorrow but leaves every other day intact.\n\nYour calendar closes neatly around the missing date, but people still lose the experiences that would have happened within it. Feeling relieved about one avoided event does not settle the value of everything else erased.",
    "question": "Would you pursue them?",
    "twist": "Tomorrow contained an unpleasant but necessary conversation.",
    "deeperQuestion": "Can losing time sometimes feel like gaining relief?",
    "zh": {
      "title": "被偷走的明天",
      "scenario": "小偷偷走了明天，卻放過了其他每一天。你的日曆在丟失的日期周圍整齊地合上了，但人們仍然失去了原本應該發生在這一天的經歷。為避免一次事件而感到慶幸，並不能彌補其他所有被抹去的事物的價值。",
      "question": "你會追究他們的責任嗎？",
      "twist": "明天將有一場令人不快但又必要的對話。",
      "deeperQuestion": "失去時間有時會讓人感覺像是獲得了解脫嗎？"
    }
  },
  {
    "id": "ponder-weird-020",
    "category": "Weird",
    "emoji": "☁️",
    "title": "The Literal Butterfly",
    "scenario": "One butterfly offers to explain every consequence of your smallest actions.\n\nIts explanations are accurate but connect ordinary choices to an overwhelming number of later events. You must decide how much knowledge is useful before responsibility becomes a reason to stop acting altogether.",
    "question": "Would you listen?",
    "twist": "The explanations take longer than your remaining life.",
    "deeperQuestion": "Can too much responsibility make action impossible?",
    "zh": {
      "title": "字面上的蝴蝶",
      "scenario": "一隻蝴蝶試圖解釋你每一個微小舉動的後果。它的解釋固然準確，卻將普通的選擇與數量龐大的後續事件連結起來。你必須決定，在責任成為你徹底停止行動的理由之前，究竟多少知識是有用的。",
      "question": "你會聽嗎？",
      "twist": "解釋所需的時間比你剩餘的生命還要長。",
      "deeperQuestion": "責任過重是否會導致行動無法進行？"
    }
  },
  {
    "id": "ponder-weird-021",
    "category": "Weird",
    "emoji": "🛸",
    "title": "The Body Subscription",
    "scenario": "Your body becomes a subscription service with optional upgrades.\n\nThe optional features promise convenience, beauty, and abilities other people increasingly expect. Declining remains technically possible, but ordinary participation may become harder as upgraded bodies establish the social standard.",
    "question": "Would you pay for extras?",
    "twist": "Basic access remains adequate but less socially admired.",
    "deeperQuestion": "When does choice become pressure to improve?",
    "zh": {
      "title": "身體訂閱",
      "scenario": "你的身體變成了一種訂閱服務，可以選擇升級。這些可選功能承諾帶來便利、美觀以及他人日益期待的能力。從技術上講，拒絕升級仍然可行，但隨著升級後的身體成為社會標準，普通用戶可能越來越難以參與其中。",
      "question": "你會為額外服務付費嗎？",
      "twist": "基本接取仍然足夠，但社會評價較低。",
      "deeperQuestion": "何時選擇會變成改進的壓力？"
    }
  },
  {
    "id": "ponder-weird-022",
    "category": "Weird",
    "emoji": "🧦",
    "title": "The Wandering Door",
    "scenario": "Your front door opens into a different person's home each morning.\n\nYou arrive as an unexpected presence in somebody else's private space, sometimes at a difficult moment. Introducing yourself respectfully does not guarantee that the person experiences the encounter as welcome or meaningful.",
    "question": "Would you introduce yourself?",
    "twist": "Some hosts have been expecting you for years.",
    "deeperQuestion": "Does coincidence create any obligation to connect?",
    "zh": {
      "title": "流浪之門",
      "scenario": "每天早上，你家的門都會通往另一個人的家。你可能突然出現在別人的私人空間，甚至撞上不適合見客的時刻。禮貌地介紹自己，也不能保證對方想和你相遇。你要決定怎樣開始這些沒有預約的接觸。",
      "question": "你會向對方介紹自己嗎？",
      "twist": "有些屋子的主人，已經等了你好多年。",
      "deeperQuestion": "巧合是否會產生聯繫的義務？"
    }
  },
  {
    "id": "ponder-weird-023",
    "category": "Weird",
    "emoji": "🗺️",
    "title": "The Unchosen Narrator",
    "scenario": "A narrator describes your actions with motives you do not recognize.\n\nThe narration sounds confident and explains your actions in a coherent story. Defending your own motives becomes difficult when uncertainty and contradiction make your honest account less polished than the narrator's version.",
    "question": "Would you argue back?",
    "twist": "Listeners believe the narrator more than you.",
    "deeperQuestion": "Who has authority over the meaning of your behavior?",
    "zh": {
      "title": "未被選中的敘述者",
      "scenario": "敘述者描述了你的行為動機，而你卻無法理解。敘述聽起來自信滿滿，並用一個連貫的故事解釋了你的行為。當不確定性和矛盾之處讓你的誠實敘述不如敘述者的版本那麼完美時，捍衛自己的動機就變得困難重重。",
      "question": "你會反駁嗎？",
      "twist": "聽眾更相信敘述者而不是你。",
      "deeperQuestion": "誰有權決定你的行為的意義？"
    }
  },
  {
    "id": "ponder-weird-024",
    "category": "Weird",
    "emoji": "🎈",
    "title": "The Birthday Migration",
    "scenario": "Your birthday moves to whichever day you most need celebration.\n\nThe shifting date responds to needs you may not have recognized yourself. Celebrations become more timely but less shareable, because other people still need notice and cannot organize their lives around your emotional calendar.",
    "question": "Would you keep the magic?",
    "twist": "Friends can never plan ahead.",
    "deeperQuestion": "Is spontaneous care worth losing predictability?",
    "zh": {
      "title": "生日遷徙",
      "scenario": "你的生日會調整到你最需要慶祝的那一天。日期的改變是為了滿足你可能自己都沒意識到的需求。慶祝活動會變得更加及時，但更難與人分享，因為其他人仍然需要提前通知，而且他們無法圍繞你的情緒日曆來安排自己的生活。",
      "question": "你會保留這份魔力嗎？",
      "twist": "朋友之間永遠無法事先規劃。",
      "deeperQuestion": "自發性照護值得犧牲可預測性嗎？"
    }
  },
  {
    "id": "ponder-weird-025",
    "category": "Weird",
    "emoji": "🕳️",
    "title": "The Infinite Pocket",
    "scenario": "Your pocket contains everything you have ever lost, including relationships.\n\nThe pocket restores things as they were lost rather than as you now wish them to be. Retrieving something meaningful may therefore reopen responsibilities and difficulties that disappearance had quietly allowed you to leave behind.",
    "question": "What would you retrieve?",
    "twist": "A returned relationship resumes at its most difficult moment.",
    "deeperQuestion": "Can recovering something differ from repairing it?",
    "zh": {
      "title": "無限口袋",
      "scenario": "你的口袋裡裝著你曾經失去的一切，包括人際關係。口袋會將事物恢復到失去時的狀態，而不是你現在希望的樣子。因此，找回一些有意義的東西，可能會讓你重新面對那些因失去而悄悄消失的責任和困難。",
      "question": "你會從口袋裡取回甚麼？",
      "twist": "複合的感情在最艱難的時刻重新開始。",
      "deeperQuestion": "恢復某物與修復某物有何不同？"
    }
  },
  {
    "id": "ponder-weird-026",
    "category": "Weird",
    "emoji": "🌀",
    "title": "The Dream Election",
    "scenario": "Dream characters elect you their representative in waking life.\n\nThey regard your waking choices as decisions that shape their world, even when you are not dreaming. Accepting representation would require treating a private part of your mind as a community with interests of its own.",
    "question": "Would you accept?",
    "twist": "Their needs conflict with your need for sleep.",
    "deeperQuestion": "Can responsibility cross between imagined and ordinary worlds?",
    "zh": {
      "title": "夢境選舉",
      "scenario": "夢境中的人物會推舉你作為他們在現實生活中的代表。他們會將你清醒時的選擇視為塑造他們世界的決定，即便你並非身處夢境之中。接受這種代表權意味著你要將你內心深處的某個私人區域視為一個擁有自身利益的社群。",
      "question": "你願意接受嗎？",
      "twist": "他們的需求與你的睡眠需求相衝突。",
      "deeperQuestion": "責任能否跨越想像世界與現實世界？"
    }
  },
  {
    "id": "ponder-weird-027",
    "category": "Weird",
    "emoji": "👽",
    "title": "The Reversible Rain",
    "scenario": "Rain rises from the ground, taking forgotten memories into clouds.\n\nThe rising water carries moments that once seemed insignificant and others you intentionally stopped revisiting. Collecting memories becomes less like retrieving possessions and more like choosing which versions of your past to invite back.",
    "question": "Would you collect it?",
    "twist": "Some memories were forgotten for good reasons.",
    "deeperQuestion": "Should recovery always be considered a benefit?",
    "zh": {
      "title": "可逆的雨",
      "scenario": "雨水不再從天上落下，而是從地面升起，把被遺忘的記憶帶進雲裡。水珠裡有你曾不在意的小事，也有刻意不再回想的片段。收集雨水可以找回它們，但取回過去，也代表重新選擇讓哪些經歷影響現在。",
      "question": "你會收集這些雨水嗎？",
      "twist": "有些記憶被遺忘是有充分理由的。",
      "deeperQuestion": "恢復是否總是被視為一種好處？"
    }
  },
  {
    "id": "ponder-weird-028",
    "category": "Weird",
    "emoji": "🪐",
    "title": "The Spare Face",
    "scenario": "You find a spare face that strangers instantly trust.\n\nThe face gives you opportunities before anyone learns how you behave. Wearing it would reveal how much social trust is distributed through appearance rather than earned through consistent and considerate actions.",
    "question": "Would you wear it?",
    "twist": "Your usual face remains equally honest.",
    "deeperQuestion": "Is using an unfair advantage wrong when intentions are good?",
    "zh": {
      "title": "備用臉",
      "scenario": "你找到了一個陌生人會立刻信任的備用臉孔。這張面孔在你為人所知之前就為你提供了機會。戴上它，你會發現，有多少社會信任是透過外表而非持續體貼的行為贏得的。",
      "question": "你會戴上那張備用的臉嗎？",
      "twist": "你平常那張臉，同樣真實地代表著你。",
      "deeperQuestion": "當動機良好時，使用不公平優勢是否錯誤？"
    }
  },
  {
    "id": "ponder-weird-029",
    "category": "Weird",
    "emoji": "🚪",
    "title": "The Calendar Animal",
    "scenario": "Your calendar becomes an animal that eats overbooked days.\n\nThe animal seems caring because it removes pressure automatically. Yet protecting you without understanding your commitments may turn freedom from exhaustion into a loss of experiences you would still choose despite the effort.",
    "question": "Would you feed it willingly?",
    "twist": "It cannot distinguish obligations from joyful plans.",
    "deeperQuestion": "Can a protective system remove too much choice?",
    "zh": {
      "title": "日曆動物",
      "scenario": "你的日曆變成一隻小動物，會把排得太滿的日子吃掉，替你減少行程。起初你終於不用那麼疲倦，但牠並不理解每項安排的意義。牠的保護可能刪掉壓力，也可能刪掉你明知辛苦、仍真心想去的事。",
      "question": "你會自願餵牠嗎？",
      "twist": "它無法區分義務和快樂的計劃。",
      "deeperQuestion": "保護系統是否會剝奪過多的選擇？"
    }
  },
  {
    "id": "ponder-weird-030",
    "category": "Weird",
    "emoji": "🌙",
    "title": "The Living Map",
    "scenario": "A map changes the world whenever someone redraws it.\n\nA revised road or border would immediately become physically real, with households and communities adjusting around it. Improving the map from your perspective could impose changes on people whose knowledge you never asked to hear.",
    "question": "Would you correct unfair borders?",
    "twist": "Every change disrupts somebody's familiar home.",
    "deeperQuestion": "Does power to improve create a duty to intervene?",
    "zh": {
      "title": "活地圖",
      "scenario": "地圖一旦被重新繪製，世界就會跟著改變。一條修改過的道路或邊界會立即成為現實，居民和社區也會隨之做出相應的調整。從你的角度改進地圖，可能會對那些你從未想過要了解的人產生影響。",
      "question": "你會修正不公平的邊界嗎？",
      "twist": "每一次改變都會擾亂某人熟悉的家。",
      "deeperQuestion": "改善的能力是否會產生介入的義務？"
    }
  },
  {
    "id": "ponder-weird-031",
    "category": "Weird",
    "emoji": "🪞",
    "title": "The Moon's Complaint",
    "scenario": "The moon asks to remove its image from every romantic poem.\n\nThe poems describe human feelings but use the moon as an unwilling symbol. Its request challenges whether the right to express your experience includes making someone else represent meanings they do not recognize.",
    "question": "Would you respect the request?",
    "twist": "People insist their private feelings belong to them.",
    "deeperQuestion": "Can being represented create rights over someone else's expression?",
    "zh": {
      "title": "月亮的抱怨",
      "scenario": "月亮要求從所有浪漫詩歌中移除它的圖像。這些詩歌描繪人類的情感，卻將月亮當作不情願的象徵。它的請求挑戰了這樣一個問題：表達自身經驗的權利是否包括強迫他人代表他們並不認同的意義。",
      "question": "你會尊重這個請求嗎？",
      "twist": "人們堅持認為他們的私人情感屬於他們自己。",
      "deeperQuestion": "當別人用你作為創作題材，你是否有權干涉他們如何表達？"
    }
  },
  {
    "id": "ponder-weird-032",
    "category": "Weird",
    "emoji": "☁️",
    "title": "The Reverse Mirror",
    "scenario": "Your reflection ages backward while you age forward.\n\nYou see a familiar face moving toward a past you remember while hinting at a future you do not. The relationship makes the mirror less like an object and more like an uncertain source of advice.",
    "question": "Would you keep watching?",
    "twist": "It remembers parts of your future imperfectly.",
    "deeperQuestion": "Can uncertain warnings help without taking over your life?",
    "zh": {
      "title": "反轉鏡",
      "scenario": "你一天比一天年長，鏡裡的倒影卻一天比一天年輕。它知道你還沒經歷的一些事，但記憶並不完整。看著熟悉的臉逆著時間改變，你已不只把它當成影像，也開始想把它當成提供建議的人。",
      "question": "你會繼續看下去嗎？",
      "twist": "它不完美地記住了你未來的某些部分。",
      "deeperQuestion": "不確定的警告能否在不影響你生活的情況下提供幫助？"
    }
  },
  {
    "id": "ponder-weird-033",
    "category": "Weird",
    "emoji": "🛸",
    "title": "The Borrowed Voice",
    "scenario": "A stranger borrows your voice and becomes famous for saying things you oppose.\n\nYour voice was once a reliable sign that a statement came from you. Reclaiming it would not erase what people heard, so identity repair requires more than simply taking back the borrowed feature.",
    "question": "Would you reclaim it?",
    "twist": "Their audience cannot distinguish you afterward.",
    "deeperQuestion": "How much of identity depends on recognizable features?",
    "zh": {
      "title": "借來的聲音",
      "scenario": "一個陌生人借用了你的聲音，並因發表你反對的言論而聲名鵲起。你的聲音曾經是你發聲的可靠標誌。即使收回聲音，也無法抹去人們聽到的內容，因此，身分修復需要的不僅僅是收回被借用的聲音。",
      "question": "你會收回它嗎？",
      "twist": "之後他們的觀眾將無法將你區分開來。",
      "deeperQuestion": "認同在多大程度上取決於可辨識的特徵？"
    }
  },
  {
    "id": "ponder-weird-034",
    "category": "Weird",
    "emoji": "🧦",
    "title": "Your Password Starts an Exam",
    "scenario": "Your password becomes conscious and replaces typed characters with daily questions about you. It begins with your favorite breakfast, then asks why you stopped contacting an old friend. It insists that personal questions protect the account better than a string anyone might copy.",
    "question": "What verification rules would you set, and which questions should remain out of bounds even if secure?",
    "twist": "It later refuses entry because your preferences have changed since the answers were recorded.",
    "deeperQuestion": "Should a system verify who you are or require you to remain who you used to be?",
    "zh": {
      "title": "密碼開始出考題",
      "scenario": "你的密碼突然有了意識，不再接受正確字串，而是每天問一道只有真正了解你的人才答得出的問題。第一天問你最喜歡的早餐，第三天已問到你為甚麼不再聯絡某位朋友。它說自己是在保護帳戶。",
      "question": "你會為它訂甚麼驗證規則？哪些問題即使安全，也不應要求你回答？",
      "twist": "它拒絕讓未來改變喜好的你登入，因為答案和過去不同。",
      "deeperQuestion": "一個系統應確認你是誰，還是要求你永遠維持同一個人？"
    }
  },
  {
    "id": "ponder-weird-035",
    "category": "Weird",
    "emoji": "🗺️",
    "title": "The Gravity Holiday",
    "scenario": "Earth takes a gravity holiday and asks everyone to hold on.\n\nHolding on is possible for some people and difficult for others, especially those already relying on assistance. Trusting Earth's return does not answer how everyone should share the burdens of getting through the interruption.",
    "question": "Would you trust the promise?",
    "twist": "Earth has never made a promise before.",
    "deeperQuestion": "What makes trust reasonable without a track record?",
    "zh": {
      "title": "重力假期",
      "scenario": "地球宣布重力要放一天假，請大家先抓穩固定的東西。有人輕易找到地方穩住自己，也有人需要幫助才能不漂走。相信地球會如期恢復重力，並不能直接解決這一天裡，誰來照顧最難撐住的人。",
      "question": "你會相信這個承諾嗎？",
      "twist": "地球以前從未做出過承諾。",
      "deeperQuestion": "如果沒有過往紀錄，信任如何合理？"
    }
  },
  {
    "id": "ponder-weird-036",
    "category": "Weird",
    "emoji": "🎈",
    "title": "The Forgotten Color",
    "scenario": "You discover a color nobody else can perceive.\n\nThe color makes familiar places feel newly complex, even though you cannot point to anything others can recognize. Giving up the experience for proof would turn private understanding into a shared fact at personal cost.",
    "question": "Would you try to prove it?",
    "twist": "Showing proof would make you lose the ability.",
    "deeperQuestion": "Is shared recognition worth a private experience?",
    "zh": {
      "title": "被遺忘的顏色",
      "scenario": "你發現了一種別人無法感知的顏色。這種顏色讓熟悉的地方變得陌生而複雜，儘管你無法指出任何別人能辨識的東西。為了證明這種顏色而放棄這種體驗，會以個人代價將私人的理解變成共同的事實。",
      "question": "你會試著證明這一點嗎？",
      "twist": "提出證據會讓你失去這項能力。",
      "deeperQuestion": "共享的認可值得以私人體驗來換取嗎？"
    }
  },
  {
    "id": "ponder-weird-037",
    "category": "Weird",
    "emoji": "🕳️",
    "title": "The Sleep Exchange",
    "scenario": "You can trade dreams with a stranger every night.\n\nAt first the exchange feels like travel without leaving home. Gradually you become unsure whether a new desire expresses something discovered about yourself or something imported through experiences you never personally lived.",
    "question": "Would you agree?",
    "twist": "Their dreams slowly alter your preferences.",
    "deeperQuestion": "When does exposure become a change in identity?",
    "zh": {
      "title": "睡眠交換",
      "scenario": "你可以每晚與陌生人交換夢境。起初，這種交換感覺就像足不出戶就能旅行。漸漸地，你開始不確定新的渴望究竟是表達了你自身發現的某些東西，還是表達了你從未親身經歷過的體驗所帶來的某種東西。",
      "question": "你同意嗎？",
      "twist": "他們的夢境會慢慢改變你的喜好。",
      "deeperQuestion": "接觸何時會改變身分？"
    }
  },
  {
    "id": "ponder-weird-038",
    "category": "Weird",
    "emoji": "🌀",
    "title": "The Wandering Name",
    "scenario": "Your name leaves and chooses another person.\n\nYou remain conscious with the same memories, while familiar people direct their affection toward the new bearer. Choosing a replacement name may preserve independence but cannot automatically restore the social history that followed the original.",
    "question": "Would you choose a new one?",
    "twist": "Everyone's memories follow the name rather than you.",
    "deeperQuestion": "Is identity located in experience or recognition?",
    "zh": {
      "title": "流浪之名",
      "scenario": "你的名字離開，選擇了另一個人。你仍然擁有意識和記憶，而熟悉的人們會將他們的愛轉移到新的持有者身上。選擇一個替代名字或許能讓你保持獨立，但無法自動恢復原名所承載的社會歷史。",
      "question": "你會選擇新的嗎？",
      "twist": "大家的記憶都跟著名字，而不是你。",
      "deeperQuestion": "認同存在於經驗還是認知？"
    }
  },
  {
    "id": "ponder-weird-039",
    "category": "Weird",
    "emoji": "👽",
    "title": "The Opinion Museum",
    "scenario": "A museum displays every opinion you abandoned as a living creature.\n\nSome former opinions embarrass you, while others recall sincere attempts to understand the world. Meeting them as vulnerable creatures makes changing your mind feel more like abandoning someone than correcting an idea.",
    "question": "Would you visit?",
    "twist": "The creatures accuse you of betraying them.",
    "deeperQuestion": "Do former beliefs deserve loyalty after growth?",
    "zh": {
      "title": "觀點博物館",
      "scenario": "一座博物館把你曾放棄的每個觀點，變成一隻活生生的小生物。有些令你尷尬，有些讓你想起當時努力理解世界的自己。當它們有了會受傷的表情，改變想法突然不像修正答案，而像離開某個曾經依賴你的生命。",
      "question": "你會去參觀這座博物館嗎？",
      "twist": "這些生物指責你背叛了它們。",
      "deeperQuestion": "發展之後，過去的信念還值得維持忠誠嗎？"
    }
  },
  {
    "id": "ponder-weird-040",
    "category": "Weird",
    "emoji": "🪐",
    "title": "The Time Garden",
    "scenario": "You grow extra minutes by planting memories.\n\nThe extra time could help you care for people or pursue unfinished work. Its value depends on what remains of the history that gave those people and projects meaning to you in the first place.",
    "question": "Would you plant your happiest ones?",
    "twist": "The minutes have no meaning attached to them.",
    "deeperQuestion": "Is more time valuable if it costs lived experience?",
    "zh": {
      "title": "時間花園",
      "scenario": "播撒回憶，便能收穫額外的時光。這些額外的時間可以用來照顧他人，或完成未竟之事。它的價值取決於那些最初賦予你意義的人和事，如今還剩下多少。",
      "question": "你會把最快樂的回憶種下去嗎？",
      "twist": "多出來的那些分鐘，本身並不帶有任何意義。",
      "deeperQuestion": "如果代價是失去已經活過的經驗，換來更多時間還值得嗎？"
    }
  },
  {
    "id": "ponder-weird-041",
    "category": "Weird",
    "emoji": "🚪",
    "title": "The Dream Copyright",
    "scenario": "An artist claims ownership of an image that appeared in your dream.\n\nYou have no evidence that either dream came from the other, yet both feel personally created. The dispute asks whether similarity should imply borrowing when imagination can arrive at the same place independently.",
    "question": "Would you pay royalties?",
    "twist": "You later discover they dreamed it too.",
    "deeperQuestion": "Can independent imagination create competing ownership claims?",
    "zh": {
      "title": "夢境版權",
      "scenario": "一位藝術家聲稱擁有你夢中出現的圖像的所有權。你沒有任何證據顯示這兩個夢境相互關聯，但你覺得這兩個夢境都是你個人創作的。爭議的焦點在於，當想像力可以獨立地達到相同的境界時，相似性是否就意味著借鏡。",
      "question": "你會支付版稅嗎？",
      "twist": "後來你發現他們也做了同樣的夢。",
      "deeperQuestion": "獨立想像能否產生相互競爭的所有權主張？"
    }
  },
  {
    "id": "ponder-weird-042",
    "category": "Weird",
    "emoji": "🌙",
    "title": "The Hungry Horizon",
    "scenario": "The horizon moves closer whenever people stop exploring.\n\nTravel becomes a kind of maintenance that prevents everyone's world from shrinking. People who cannot or do not want to explore must depend on a form of activity they never agreed should determine their space.",
    "question": "Would you travel constantly?",
    "twist": "Some people find meaning through staying in one place.",
    "deeperQuestion": "Should one kind of curiosity determine everyone's space?",
    "zh": {
      "title": "飢餓的地平線",
      "scenario": "當人們停止探索時，地平線就會向內收縮。旅行變成了一種維護，防止每個人的世界不斷縮小。那些無法或不願探索的人，不得不依賴一種他們從未同意用來界定自身空間的活動形式。",
      "question": "你會經常旅行嗎？",
      "twist": "有些人透過在一個地方停留來尋找意義。",
      "deeperQuestion": "是否應該讓一種好奇心決定每個人的空間？"
    }
  },
  {
    "id": "ponder-weird-043",
    "category": "Weird",
    "emoji": "🪞",
    "title": "The Spare Ending",
    "scenario": "You receive an alternate ending to a conversation from ten years ago.\n\nThe new ending offers words you now wish you had found at the time. Installing it would give other people a different shared past without asking whether they want the present shaped by it.",
    "question": "Would you install it?",
    "twist": "Everyone else remembers only the new version.",
    "deeperQuestion": "Can editing history amount to editing other people?",
    "zh": {
      "title": "備用結局",
      "scenario": "你收到了另一個十年前對話的結局。這個新結局包含了你當時希望自己能聽到的話。安裝它會讓其他人擁有不同的共同過去，卻不徵求他們是否願意讓現在受其影響。",
      "question": "你會安裝它嗎？",
      "twist": "其他人只記得新版本。",
      "deeperQuestion": "改寫歷史，是否也等於改寫其他人的人生？"
    }
  },
  {
    "id": "ponder-weird-044",
    "category": "Weird",
    "emoji": "☁️",
    "title": "The Living Silence",
    "scenario": "Silence becomes a creature that leaves whenever anyone feels uncomfortable.\n\nPeople initially welcome its departure because awkwardness disappears with it. Later you notice that apologies, grief, and difficult honesty sometimes need exactly the kind of pause the creature keeps trying to avoid.",
    "question": "Would you try to keep it?",
    "twist": "Some honest conversations need awkward pauses.",
    "deeperQuestion": "Can discomfort protect something valuable?",
    "zh": {
      "title": "活著的寂靜",
      "scenario": "沉默彷彿成了某種生物，每當有人感到不自在，它便會離去。起初，人們樂於見到它的離去，因為尷尬隨之消失。但後來你會發現，道歉、悲傷和艱難的坦誠，有時恰恰需要這種沉默生物極力想要逃避的停頓。",
      "question": "你會盡量保留它嗎？",
      "twist": "有些坦誠的對話需要尷尬的停頓。",
      "deeperQuestion": "不適感能否保護珍貴的東西？"
    }
  },
  {
    "id": "ponder-weird-045",
    "category": "Weird",
    "emoji": "🛸",
    "title": "The Station of Unchosen Roads",
    "scenario": "A station runs only to lives you considered but never chose. You may observe one for a day without interfering or bringing anything back. The signs say neither better nor worse; each shows only the date on which you made the relevant decision.",
    "question": "Which station would you choose, and what would you want to ask that version of yourself?",
    "twist": "On arrival, you discover that they are preparing to visit your life for exactly the same reason.",
    "deeperQuestion": "Would curiosity about another life deepen appreciation or make the unavoidable losses of choosing harder to accept?",
    "zh": {
      "title": "只通往未選道路的車站",
      "scenario": "一個車站只開往你曾考慮、最後沒有選擇的生活。你可以乘車參觀一天，不能干預，也不能把任何東西帶回來。站牌沒有「更好」或「更差」，只寫著你當年作決定的日期。",
      "question": "你會選哪一個站？出發前，最想問那個版本的自己甚麼？",
      "twist": "你到達後，發現那個自己也正準備搭車，來看看你的生活。",
      "deeperQuestion": "好奇另一種人生，會讓你更珍惜現在，還是更難接受選擇必然有遺憾？"
    }
  },
  {
    "id": "ponder-weird-046",
    "category": "Weird",
    "emoji": "🧦",
    "title": "The Portable Midnight",
    "scenario": "You can carry midnight in a jar and release it anywhere.\n\nThe jar offers a refuge from noise and exposure when you most need it. Releasing its darkness also changes the plans of nearby people whose comfort may depend on light rather than quiet.",
    "question": "Would you use it for peace?",
    "twist": "Everyone nearby must experience the darkness too.",
    "deeperQuestion": "When does a personal refuge impose on others?",
    "zh": {
      "title": "隨身攜帶的午夜",
      "scenario": "你可以把午夜裝進一個罐子，隨時隨地釋放出來。\n\n當你最需要安靜和私密空間時，它能讓你暫時躲開喧鬧與旁人的目光。但釋放黑暗也會改變附近所有人的計劃，而他們需要的，可能正是光亮。",
      "question": "你會釋放午夜，為自己換取片刻寧靜嗎？",
      "twist": "附近的每個人都必須體驗黑暗。",
      "deeperQuestion": "個人避難何時會對他人造成負擔？"
    }
  },
  {
    "id": "ponder-weird-047",
    "category": "Weird",
    "emoji": "🗺️",
    "title": "The Cloud Court",
    "scenario": "Clouds put humanity on trial for assigning them gloomy personalities.\n\nThe clouds explain that human descriptions shape how every rainy arrival is received. Your defense must distinguish observing a weather pattern from assigning an entire personality to something you do not fully understand.",
    "question": "How would you defend us?",
    "twist": "They admit enjoying dramatic weather.",
    "deeperQuestion": "Can stereotypes remain harmful when sometimes accurate?",
    "zh": {
      "title": "雲朵法庭",
      "scenario": "雲朵審判人類，因為人類給了它們陰鬱的性格。雲朵解釋說，人類的描述決定了人們對每一場雨的接受程度。你的辯護必須區分觀察天氣模式和將整個性格賦予你並不完全了解的事物。",
      "question": "你會如何在雲朵法庭上為人類辯護？",
      "twist": "他們承認喜歡戲劇性的天氣。",
      "deeperQuestion": "當刻板印象有時準確時，它是否仍然有害？"
    }
  },
  {
    "id": "ponder-weird-048",
    "category": "Weird",
    "emoji": "🎈",
    "title": "The Living Punctuation",
    "scenario": "Your punctuation marks refuse to support statements they consider dishonest.\n\nYour writing becomes visibly incomplete whenever the marks disagree with it. Being judged by the tools of expression may make some statements more honest while preventing complicated, tentative, or imperfectly understood ideas from being said.",
    "question": "Would you write without them?",
    "twist": "They mistake uncertainty for dishonesty.",
    "deeperQuestion": "Can enforcing truth make nuance impossible?",
    "zh": {
      "title": "活的標點符號",
      "scenario": "你的標點符號拒絕出現在它們認為不誠實的句子裡。一旦不同意你寫的內容，句號和逗號就會離開，讓文章變得殘缺。它們能逼你少說謊，卻也可能把不確定、複雜或尚未想清楚的想法一併封住。",
      "question": "如果沒有它們，你會寫作嗎？",
      "twist": "他們把不確定性誤認為不誠實。",
      "deeperQuestion": "強制推行真理是否會使細微差別變得不可能？"
    }
  },
  {
    "id": "ponder-weird-049",
    "category": "Weird",
    "emoji": "🕳️",
    "title": "The Memory Hotel",
    "scenario": "You may visit any memory as a hotel guest.\n\nThe hotel makes return easy, with familiar people repeating moments you remember fondly. Their awareness of your visits changes nostalgia from passive recollection into a relationship with versions of people who cannot freely move beyond the scene.",
    "question": "Would you stay long?",
    "twist": "Other people in the memory notice your repeated visits.",
    "deeperQuestion": "Can nostalgia become an intrusion into the past?",
    "zh": {
      "title": "記憶飯店",
      "scenario": "身為飯店客人，你可以重溫任何一段記憶。飯店讓你輕鬆重返故地，熟悉的人們會重現你心中美好的瞬間。他們對你的到訪有所察覺，這使得懷舊不再是被動的回憶，而是與那些無法自由離開場景的人建立起一種聯繫。",
      "question": "你會待很久嗎？",
      "twist": "記憶中的其他人注意到你反覆造訪。",
      "deeperQuestion": "懷舊會成為對過去的侵入嗎？"
    }
  },
  {
    "id": "ponder-weird-050",
    "category": "Weird",
    "emoji": "🌀",
    "title": "The Invisible Border",
    "scenario": "Crossing an invisible line changes your personality slightly.\n\nA mapped boundary would help you choose when to cross, but the act of exploring it changes the chooser. Protecting a stable identity may become difficult when each new version sincerely prefers different traits.",
    "question": "Would you map the line?",
    "twist": "Every crossing changes what you consider worth preserving.",
    "deeperQuestion": "Which version of you should decide when to stop?",
    "zh": {
      "title": "無形的邊界",
      "scenario": "跨越一條無形的界線會微妙地改變你的性格。一條清晰的界線可以幫助你選擇何時跨越，但探索這條界線的行為本身就會改變選擇者。當每個新的自我都真心偏好不同的特質時，維護穩定的認同可能會變得困難。",
      "question": "你會嘗試畫出這條看不見的邊界嗎？",
      "twist": "每一次穿越都會改變你認為值得保護的事物。",
      "deeperQuestion": "哪一個版本的你才該決定何時停止？"
    }
  },
  {
    "id": "ponder-weird-051",
    "category": "Weird",
    "emoji": "👽",
    "title": "The Personal Eclipse",
    "scenario": "The sun hides whenever you avoid an important truth.\n\nThe eclipse announces your avoidance publicly even when the truth is intimate or uncertain. You must decide whether ending collective discomfort gives others a right to disclosures that would normally remain yours to choose.",
    "question": "Would you confess everything?",
    "twist": "Some truths belong partly to other people.",
    "deeperQuestion": "Can pressure for honesty violate someone else's privacy?",
    "zh": {
      "title": "個人日蝕",
      "scenario": "當你逃避重要的真相時，太陽就會隱去。即使真相私密或難以確定，日食也會公開宣告你的逃避行為。你必須決定，結束集體的不適感是否賦予他人獲取原本應由你自行決定的真相的權利。",
      "question": "你會坦白一切嗎？",
      "twist": "有些秘密並不完全屬於你，也牽涉其他人的私隱。",
      "deeperQuestion": "迫使他人誠實是否會侵犯他人的隱私？"
    }
  },
  {
    "id": "ponder-weird-052",
    "category": "Weird",
    "emoji": "🪐",
    "title": "The Paper Future",
    "scenario": "Your future arrives folded into a paper airplane.\n\nYou could preserve the airplane's movement by leaving the message unread, or learn its contents by unfolding it carefully. The choice links knowledge to intervention rather than treating observation as something that changes nothing.",
    "question": "Would you unfold it?",
    "twist": "Reading it prevents it from flying any farther.",
    "deeperQuestion": "Does understanding a possibility sometimes end it?",
    "zh": {
      "title": "紙飛機裡的未來",
      "scenario": "你的未來折疊成一架紙飛機。你可以選擇不閱讀紙飛機上的信息，讓它保持飛行狀態；也可以小心翼翼地展開它，了解其中的內容。這種選擇將知識與行動連結起來，而不是將觀察視為無關緊要的事。",
      "question": "你會把它打開嗎？",
      "twist": "讀取它會導致它無法再飛得更遠。",
      "deeperQuestion": "理解某種可能性有時是否會導致這種可能性的終結？"
    }
  },
  {
    "id": "ponder-weird-053",
    "category": "Weird",
    "emoji": "🚪",
    "title": "The Dream Grocery",
    "scenario": "A shop sells ingredients for other people's ambitions.\n\nThe ingredients offer an emotional taste of goals you never considered. Sampling other ambitions may expand your imagination while making familiar aspirations feel dull through comparison rather than any failure of their own.",
    "question": "Would you try one?",
    "twist": "Your existing dreams become less vivid afterward.",
    "deeperQuestion": "Can inspiration crowd out an authentic desire?",
    "zh": {
      "title": "夢境雜貨店",
      "scenario": "一家商店出售實現他人抱負所需的原料。這些原料能讓你體驗到從未考慮過的目標所帶來的情感滋味。品嚐他人的抱負或許能拓展你的想像力，同時，由於比較而非自身失敗，你會覺得熟悉的抱負黯然失色。",
      "question": "你會嘗試嗎？",
      "twist": "之後，你原有的夢境變得不那麼清晰了。",
      "deeperQuestion": "靈感會取代真正的渴望嗎？"
    }
  },
  {
    "id": "ponder-weird-054",
    "category": "Weird",
    "emoji": "🌙",
    "title": "The Echo Citizen",
    "scenario": "Your echo becomes legally independent and repeats things selectively.\n\nThe echo begins with words it heard from you, then develops its own reasons for choosing what to repeat. Other people still hear your sound, confusing responsibility for the source with responsibility for an independent speaker.",
    "question": "Would you claim responsibility for it?",
    "twist": "It uses your voice to express new opinions.",
    "deeperQuestion": "Where does an extension of you become someone else?",
    "zh": {
      "title": "迴聲公民",
      "scenario": "你的迴響在法律上獨立存在，並且選擇性地重複某些內容。迴聲最初重複的是你發出的聲音，然後逐漸形成自己的理由來選擇重複哪些內容。其他人仍然能聽到你的聲音，從而將對聲音來源的責任與對獨立說話者的責任混淆起來。",
      "question": "你會承擔責任嗎？",
      "twist": "它利用你的聲音來表達新的觀點。",
      "deeperQuestion": "你的延伸在哪裡會變成另一個人？"
    }
  },
  {
    "id": "ponder-weird-055",
    "category": "Weird",
    "emoji": "🪞",
    "title": "The Walking House",
    "scenario": "Your house grows legs and seeks better neighbors.\n\nThe house has experienced the neighborhood through noise, weather, and the people you let inside. Its preference reflects a real perspective that overlaps with yours without being identical to the life you have built there.",
    "question": "Would you let it choose?",
    "twist": "You love the neighborhood it dislikes.",
    "deeperQuestion": "Who should decide where a shared home belongs?",
    "zh": {
      "title": "會走路的房子",
      "scenario": "你的房子彷彿長出了腿，開始尋找更好的鄰居。它透過噪音、天氣以及你允許進入其屋內的人們，體驗著周圍的環境。它的偏好反映了一種真實的視角，這種視角與你的視角有所重疊，但又不完全等同於你在那裡建立的生活。",
      "question": "你會讓它來選擇嗎？",
      "twist": "你愛它不喜歡的社群。",
      "deeperQuestion": "一個共同的家應該落腳在哪裡，該由誰決定？"
    }
  },
  {
    "id": "ponder-weird-056",
    "category": "Weird",
    "emoji": "☁️",
    "title": "The Unused Hour",
    "scenario": "Every unused hour becomes a small ghost asking for a purpose.\n\nThe ghosts ask politely and make no threats, but their presence makes unstructured time feel accountable. Giving every hour a purpose might silence them while removing the rest that allowed you to imagine new purposes at all.",
    "question": "Would you give them tasks?",
    "twist": "Rest produces the gentlest ghosts.",
    "deeperQuestion": "Must every part of time justify its use?",
    "zh": {
      "title": "沒用上的一小時",
      "scenario": "每一個沒有被安排用途的小時，都會變成小幽靈，禮貌地問你自己為甚麼存在。它們並不威脅你，卻讓空白時間也像需要交代。替每個小時找工作能令它們安靜，但可能連讓你恢復精神、想到新方向的休息也一起消失。",
      "question": "你會給他們佈置任務嗎？",
      "twist": "休息才能造就最溫柔的幽靈。",
      "deeperQuestion": "時間的每一部分都必須證明其使用是合理的嗎？"
    }
  },
  {
    "id": "ponder-weird-057",
    "category": "Weird",
    "emoji": "🛸",
    "title": "The Reverse Gift",
    "scenario": "A gift travels backward and improves the giver's childhood.\n\nThe giver remembers receiving comfort years before you encountered the present. Your current choice therefore affects a history they already experience as part of who they are, even though you never agreed to create it.",
    "question": "Would you accept it today?",
    "twist": "Rejecting it erases their happy memory.",
    "deeperQuestion": "Can gratitude be owed for consequences you did not choose?",
    "zh": {
      "title": "反向禮物",
      "scenario": "一份禮物會追溯過去，並改善贈與者的童年記憶。贈與者會想起多年前在你遇到現在這份禮物之前，曾感受到慰藉。因此，你現在的選擇會影響他們早已擁有並構成人生一部分的經歷，即使你從未主動創造這段經歷。",
      "question": "你今天會接受嗎？",
      "twist": "拒絕它會抹去他們美好的記憶。",
      "deeperQuestion": "對於你無法選擇的後果，你是否應該心存感激？"
    }
  },
  {
    "id": "ponder-weird-058",
    "category": "Weird",
    "emoji": "🧦",
    "title": "The Borrowed Dream",
    "scenario": "A stranger asks to borrow your biggest ambition for a year.\n\nThe ambition has organized years of your attention and become part of how friends describe you. Lending it might give another person direction while making you discover what remains when that defining goal is temporarily absent.",
    "question": "Would you lend it?",
    "twist": "They might accomplish it before you do.",
    "deeperQuestion": "Does a dream matter because it is yours?",
    "zh": {
      "title": "借來的夢",
      "scenario": "一個陌生人請求借用你最大的抱負一年。這個抱負凝聚了你多年的心血，也成為了朋友們對你印象的一部分。借出它或許能為他人指明方向，同時也能讓你發現，當這個決定性的目標暫時消失時，你還能擁有什麼。",
      "question": "你會把自己的夢想借給別人嗎？",
      "twist": "他們可能會比你先完成。",
      "deeperQuestion": "因為夢想是你的，所以它就重要嗎？"
    }
  },
  {
    "id": "ponder-weird-059",
    "category": "Weird",
    "emoji": "🗺️",
    "title": "The Talking Distance",
    "scenario": "The distance between you and a friend begs to become smaller.\n\nThe distance describes itself as an obstacle to affection, but you know separation also protects independence and anticipation. Its wish may be understandable without accurately describing what the relationship actually needs.",
    "question": "Would you move closer?",
    "twist": "Your friendship works partly because you have space.",
    "deeperQuestion": "Can less distance mean less closeness?",
    "zh": {
      "title": "交談距離",
      "scenario": "你和朋友之間的距離渴望縮短。距離似乎阻礙了彼此的感情，但你也明白，分離也能保護彼此的獨立性和期待。這種渴望或許可以理解，但卻無法準確描述這段關係真正需要的是什麼。",
      "question": "你願意靠近一點嗎？",
      "twist": "你們的友誼之所以能夠維繫，部分原因是你們彼此之間有空間。",
      "deeperQuestion": "距離越近，親密感反而越弱嗎？"
    }
  },
  {
    "id": "ponder-weird-060",
    "category": "Weird",
    "emoji": "🎈",
    "title": "The Living Mistake",
    "scenario": "Your biggest mistake becomes a small person who wants affection.\n\nThe person did not choose the circumstances that brought them into existence. Treating them with care need not mean approving the mistake, yet their presence keeps the original consequences close to your daily life.",
    "question": "Would you care for them?",
    "twist": "They cannot undo the harm that created them.",
    "deeperQuestion": "Can compassion coexist with rejecting an origin?",
    "zh": {
      "title": "活著的錯誤",
      "scenario": "你犯過最大的一個錯誤，突然化成一個渴望關愛的小人。小人沒有選擇自己的來歷，也不能撤銷當初造成的傷害。你可以照顧這個生命而不認同那個錯誤，但它的存在會不斷提醒你，曾經發生了甚麼。",
      "question": "你會照顧他們嗎？",
      "twist": "他們無法彌補造成他們的傷害。",
      "deeperQuestion": "同情心能否與拒絕起源並存？"
    }
  },
  {
    "id": "ponder-weird-061",
    "category": "Weird",
    "emoji": "🕳️",
    "title": "The Time Allergy",
    "scenario": "You become allergic to time spent pretending to enjoy things.\n\nYour body reacts before you can explain the situation politely. The allergy makes avoidance of pretense automatic, while revealing that social cooperation often involves participating without pretending the activity is personally enjoyable.",
    "question": "Would you change your commitments?",
    "twist": "Some necessary obligations trigger the reaction.",
    "deeperQuestion": "Is authenticity always compatible with responsibility?",
    "zh": {
      "title": "時間過敏症",
      "scenario": "你對假裝享受事物的時間產生了過敏反應。在你來得及禮貌地解釋之前，你的身體就已經做出了反應。這種過敏反應使你本能地避免偽裝，同時也揭示了社交合作往往意味著參與其中，而無需假裝自己樂在其中。",
      "question": "你會改變你的承諾嗎？",
      "twist": "某些必要的義務引發了反應。",
      "deeperQuestion": "真實性與責任感總是相容的嗎？"
    }
  },
  {
    "id": "ponder-weird-062",
    "category": "Weird",
    "emoji": "🌀",
    "title": "The Dream Repair",
    "scenario": "You repair someone's recurring nightmare and find they miss it.\n\nThe nightmare contains distress and attachment that cannot be separated by a simple repair. Offering relief without asking what they value risks removing a difficult experience that served a purpose you did not see.",
    "question": "Would you restore it?",
    "twist": "It contained the only memory of someone they lost.",
    "deeperQuestion": "Can distress also carry something worth preserving?",
    "zh": {
      "title": "修補夢境",
      "scenario": "你替一個人修好了反覆出現的惡夢，卻發現對方開始想念它。夢裡同時有痛苦和依戀，兩者不能簡單分開。你原本想減輕困擾，卻沒有先問清楚，這段夢境是否也保存著對方不願失去的東西。",
      "question": "你會恢復它嗎？",
      "twist": "裡面裝著他們失去的某人的唯一記憶。",
      "deeperQuestion": "苦難中是否也能蘊藏值得保存的東西？"
    }
  },
  {
    "id": "ponder-weird-063",
    "category": "Weird",
    "emoji": "👽",
    "title": "The Borrowed Future",
    "scenario": "You can borrow a successful person's next ten years.\n\nThe successful years include relationships, habits, and consequences that grew from someone else's history. Accepting them would mean entering an outcome without having lived the choices that gave it meaning to its original owner.",
    "question": "Would you take them?",
    "twist": "They receive your uncertain decade instead.",
    "deeperQuestion": "Can a fair trade involve unequal knowledge?",
    "zh": {
      "title": "借來的未來",
      "scenario": "你可以借用一個成功人士接下來的十年。這些成功歲月包含了人際關係、習慣以及從他人過往經驗中發展而來的種種後果。接受它們意味著你將在沒有親身經歷過賦予其意義的選擇的情況下，就進入一個既定的結果。",
      "question": "你會收下它們嗎？",
      "twist": "他們所得到的卻是你那充滿不確定性的十年。",
      "deeperQuestion": "公平交易能否包含資訊不平等？"
    }
  },
  {
    "id": "ponder-weird-064",
    "category": "Weird",
    "emoji": "🪐",
    "title": "The Honest Wallpaper",
    "scenario": "Your wallpaper displays the emotional atmosphere of your home.\n\nThe walls show temporary irritation alongside affection, without explaining context or whether a feeling lasted. Visitors might mistake an honest display for a complete account of how the people inside treat one another.",
    "question": "Would you keep it visible?",
    "twist": "Visitors see conflicts you prefer to discuss privately.",
    "deeperQuestion": "Does making feelings visible improve understanding?",
    "zh": {
      "title": "誠實的牆紙",
      "scenario": "你的壁紙展現了你家的情感氛圍。牆上既有短暫的煩躁，也有溫馨的情感，卻沒有解釋具體情況，也沒有說明這種情感是否持久。訪客可能會誤以為這種真實的展示完整地反映了屋內成員之間的相處之道。",
      "question": "你會讓它保持可見嗎？",
      "twist": "訪客看到你希望私下討論的衝突。",
      "deeperQuestion": "將情感表達出來是否能增進理解？"
    }
  },
  {
    "id": "ponder-weird-065",
    "category": "Weird",
    "emoji": "🚪",
    "title": "The Rebellious Compass",
    "scenario": "A compass points toward what you avoid rather than north.\n\nThe compass presents avoidance as meaningful information, not proof that the avoided thing is good for you. Following it safely would require judgment about whether your resistance expresses fear, wisdom, exhaustion, or a considered limit.",
    "question": "Would you follow it?",
    "twist": "Sometimes avoidance protects a healthy boundary.",
    "deeperQuestion": "Is facing something always braver than leaving it?",
    "zh": {
      "title": "叛逆的羅盤",
      "scenario": "指南針指向的不是北方，而是你所迴避的事物。指南針將迴避行為呈現為有意義的訊息，而非證明被迴避的事物對你有益。要安全地遵循指南針的指示，需要判斷你的抗拒行為究竟是出於恐懼、智慧、疲憊，還是經過深思熟慮的底線。",
      "question": "你會跟隨嗎？",
      "twist": "有時迴避可以保護健康的界線。",
      "deeperQuestion": "面對某件事總是比逃避它更勇敢嗎？"
    }
  },
  {
    "id": "ponder-weird-066",
    "category": "Weird",
    "emoji": "🌙",
    "title": "The Last Umbrella",
    "scenario": "An umbrella protects you from consequences rather than rain.\n\nOpening it makes risky choices feel effortless because their effects stop reaching you. People nearby may experience those effects without understanding how your protection redirected them into a shared space.",
    "question": "Would you open it?",
    "twist": "The consequences land on the surrounding street.",
    "deeperQuestion": "Can personal protection simply redistribute harm?",
    "zh": {
      "title": "最後的雨傘",
      "scenario": "有一把傘，擋住的不是雨，而是你行為帶來的後果。撐開它之後，你可以輕鬆冒險，不用親自承受結果。但後果並沒有消失，而是落到附近的人身上；他們甚至不知道，是你的保護把代價轉移了過去。",
      "question": "你會打開它嗎？",
      "twist": "後果波及到周圍的街道。",
      "deeperQuestion": "個人防護能否僅將傷害重新分配？"
    }
  },
  {
    "id": "ponder-weird-067",
    "category": "Weird",
    "emoji": "🪞",
    "title": "The Dream Neighbor",
    "scenario": "A person from your dreams moves into the apartment next door.\n\nYou feel that you already know them intimately, while they recall a different relationship with you. Starting again requires allowing real contact to complicate the familiarity created by private dreams.",
    "question": "Would you trust them?",
    "twist": "They remember your dreams differently.",
    "deeperQuestion": "Whose version of a shared experience deserves belief?",
    "zh": {
      "title": "夢中鄰居",
      "scenario": "你夢中的人搬進了隔壁公寓。你感覺已經和對方非常熟悉，而對方記得與你之間曾經有過一段不同的關係。重新開始需要讓真實的接觸打破夢境中建立的熟悉感。",
      "question": "你會信任他們嗎？",
      "twist": "他們對你的夢境的記憶方式不同。",
      "deeperQuestion": "誰對共同經驗的描述更值得相信？"
    }
  },
  {
    "id": "ponder-weird-068",
    "category": "Weird",
    "emoji": "☁️",
    "title": "The Sentient Monday",
    "scenario": "Monday asks to be renamed because everyone dislikes it.\n\nA new name could change expectations briefly, but the work and fatigue remain. Supporting Monday means deciding whether a symbol deserves relief even when it cannot solve the conditions people associate with it.",
    "question": "Would you agree?",
    "twist": "The same responsibilities remain on the renamed day.",
    "deeperQuestion": "Can changing language change a lived experience?",
    "zh": {
      "title": "有感知的星期一",
      "scenario": "星期一要求改名，因為人人都不喜歡它。新名字或許能暫時改變人們的預期，但工作和疲憊依然存在。支持星期一意味著要決定，即使一個符號無法解決人們與之相關的種種問題，它是否也值得被賦予新的意義。",
      "question": "你同意嗎？",
      "twist": "更名後的這一天，職責仍然相同。",
      "deeperQuestion": "改變語言能否改變生活經驗？"
    }
  },
  {
    "id": "ponder-weird-069",
    "category": "Weird",
    "emoji": "🛸",
    "title": "The Borrowed Gravity",
    "scenario": "You borrow gravity from another planet to keep your feet grounded.\n\nYou did not realize the borrowed force would become essential to ordinary movement. Returning it would honor another world's claim while forcing you to adapt to a freedom that feels more like helplessness.",
    "question": "Would you return it?",
    "twist": "Returning it leaves you floating indefinitely.",
    "deeperQuestion": "Can dependence justify keeping what someone else needs?",
    "zh": {
      "title": "借來的引力",
      "scenario": "你借來另一顆星球的重力，才能讓雙腳安穩著地。起初你沒有想到，借來的力量會變成生活必需。歸還是尊重對方取回所有物的要求，卻也會讓你開始無止境地漂浮，面對一種更像無助的自由。",
      "question": "你會把它歸還嗎？",
      "twist": "歸還它會讓你無限期地漂浮下去。",
      "deeperQuestion": "依賴關係能否成為佔有他人所需之物的正當理由？"
    }
  },
  {
    "id": "ponder-weird-070",
    "category": "Weird",
    "emoji": "🧦",
    "title": "The Memory Weather",
    "scenario": "Shared memories become weather that everyone nearby experiences.\n\nThe weather reproduces emotion rather than an objective record of events. Sharing a memory publicly may make your experience vivid while surrounding someone else with a version of their past they never chose to revisit.",
    "question": "Would you relive a happy one publicly?",
    "twist": "Someone involved remembers it as painful.",
    "deeperQuestion": "Can one person's nostalgia become another's burden?",
    "zh": {
      "title": "記憶天氣",
      "scenario": "共享的記憶會像天氣一樣，被周遭的人感知。這種天氣反映的是情感，而非客觀的事件紀錄。公開分享一段記憶，或許會讓你的經歷更加鮮活，但同時也會讓其他人感受到他們從未選擇重溫的過往。",
      "question": "你願意公開重溫一段快樂的時光嗎？",
      "twist": "一位相關人士回憶說，那段經歷很痛苦。",
      "deeperQuestion": "一個人的懷舊之情能否成為另一個人的負擔？"
    }
  },
  {
    "id": "ponder-weird-071",
    "category": "Weird",
    "emoji": "🗺️",
    "title": "The Portable Ancestor",
    "scenario": "An ancestor's voice appears inside your pocket to advise you.\n\nThe ancestor speaks with affection and recognizable concern, but cannot easily understand the world you now inhabit. Listening respectfully does not require treating inherited experience as the final answer to present choices.",
    "question": "Would you keep listening?",
    "twist": "Their advice reflects values you no longer share.",
    "deeperQuestion": "How should inherited wisdom meet changing ethics?",
    "zh": {
      "title": "便攜式祖先",
      "scenario": "一位先祖的聲音出現在你的口袋裡，為你提供建議。先祖的聲音充滿愛與關切，卻難以理解你如今身處的世界。認真聆聽並不意味著要將祖輩的經驗視為解決當前問題的最終答案。",
      "question": "你會繼續聽下去嗎？",
      "twist": "他們的建議反映了你不再認同的價值觀。",
      "deeperQuestion": "傳統智慧應如何與不斷變化的倫理學相適應？"
    }
  },
  {
    "id": "ponder-weird-072",
    "category": "Weird",
    "emoji": "🎈",
    "title": "The Vanishing Noun",
    "scenario": "An object disappears whenever nobody can remember its name.\n\nPreservation becomes a constant shared task, because forgetting has material consequences rather than merely linguistic ones. Choosing what to remember may protect useful objects while letting less fashionable parts of the world quietly disappear.",
    "question": "Would you preserve every word?",
    "twist": "Remembering everything leaves little room to learn anything new.",
    "deeperQuestion": "How much should preservation constrain growth?",
    "zh": {
      "title": "消失的名詞",
      "scenario": "當無人記得某物的名稱時，它便會消失。保存成為一項持續的共同任務，因為遺忘帶來的後果並非僅僅是語言上的，而是物質上的。選擇記住什麼，或許能夠保護有用的物品，卻讓那些不那麼時髦的事物悄悄消逝。",
      "question": "你會保留每一個字嗎？",
      "twist": "記住所有事情會讓人沒有空間去學習新事物。",
      "deeperQuestion": "保護應該在多大程度上限制成長？"
    }
  },
  {
    "id": "ponder-weird-073",
    "category": "Weird",
    "emoji": "🕳️",
    "title": "The Emotional Currency",
    "scenario": "People pay for goods using minutes of genuine joy.\n\nThe currency can buy comfort, yet spending it removes an experience rather than a number from an account. Saving and consuming therefore shape not only your resources but the emotional life available to enjoy them.",
    "question": "Would you buy luxuries?",
    "twist": "Saving joy means experiencing less of it now.",
    "deeperQuestion": "Can a feeling remain itself when treated as wealth?",
    "zh": {
      "title": "情緒貨幣",
      "scenario": "人們用真切的快樂時光來支付商品。貨幣可以買到舒適，但消費帶走的並非帳戶裡的數字，而是一種體驗。因此，儲蓄和消費不僅塑造你的財富，也塑造你享受這些財富的情感生活。",
      "question": "你會買奢侈品嗎？",
      "twist": "把快樂存起來，意味著你現在能感受到的快樂會更少。",
      "deeperQuestion": "當情感被視為財富時，它還能維持自身嗎？"
    }
  },
  {
    "id": "ponder-weird-074",
    "category": "Weird",
    "emoji": "🌀",
    "title": "The Future Roommate",
    "scenario": "Your older self moves in and refuses to explain their choices.\n\nYou expect an older version of yourself to understand your need for answers. Their refusal creates an unfamiliar conflict between trust in future experience and your current right to make informed decisions.",
    "question": "Would you demand answers?",
    "twist": "They say knowing too much caused their regrets.",
    "deeperQuestion": "Does future experience justify present secrecy?",
    "zh": {
      "title": "未來的室友",
      "scenario": "年長的你搬進家裡，卻拒絕解釋自己過去作過的選擇。你期望年長的自己能夠理解你對答案的需求。他們的拒絕造成了一種陌生的衝突：一方面是信任未來的經驗，另一方面是你當下做出知情決定的權利。",
      "question": "你會要求得到答案嗎？",
      "twist": "他們說知道太多讓他們後悔。",
      "deeperQuestion": "未來的經驗能否證明現在的保密是合理的？"
    }
  },
  {
    "id": "ponder-weird-075",
    "category": "Weird",
    "emoji": "👽",
    "title": "The City Ten Seconds Behind",
    "scenario": "Every result in a city appears ten seconds after its cause: speech becomes audible later, an opened door becomes passable later, and smiles arrive on delayed faces. Nobody is injured, but simple interactions become confusing. Residents must redesign their first day together.",
    "question": "Would you change transport, conversation, or work first? Propose one easy rule everyone could remember.",
    "twist": "Some people regret their words before anyone hears them, but the delayed sound cannot be withdrawn.",
    "deeperQuestion": "Would a visible gap between actions and results encourage care or weaken the feeling of responsibility?",
    "zh": {
      "title": "全城慢半拍",
      "scenario": "城市裡所有結果都比原因遲十秒：說話後十秒才有聲音，開門後十秒才出現通道，微笑後十秒別人才看得見。大家沒有受傷，但平常很簡單的互動突然變得混亂。你們要設計第一天的生活方式。",
      "question": "你會先改交通、對話，還是工作流程？提出一條所有人都容易記住的規則。",
      "twist": "有人開始利用這十秒，在自己的話被聽見之前反悔，但聲音已無法收回。",
      "deeperQuestion": "如果行動和結果不再緊接，我們會更慎重，還是更容易覺得後果與自己無關？"
    }
  },
  {
    "id": "ponder-weird-076",
    "category": "Weird",
    "emoji": "🪐",
    "title": "The Reversible Name",
    "scenario": "Saying your name backward temporarily makes you the opposite of yourself.\n\nThe temporary opposite shares your memories but interprets them through unfamiliar traits. Discovering something admirable there challenges the assumption that improving yourself must always mean strengthening qualities you already identify with.",
    "question": "Would you experiment?",
    "twist": "Some opposite traits seem healthier.",
    "deeperQuestion": "Can rejecting yourself become a route to growth?",
    "zh": {
      "title": "反轉的名字",
      "scenario": "倒著念自己的名字會暫時讓你變成與自己完全相反的人。這個暫時的反面人物擁有與你相同的記憶，但卻會用陌生的特質來解讀它們。從中發現令人欽佩的特質，挑戰了「自我提升必然意味著強化你已認同的品質」這一固有觀念。",
      "question": "你願意嘗試嗎？",
      "twist": "一些相反的特質似乎更健康。",
      "deeperQuestion": "自我否定能否成為成長的途徑？"
    }
  },
  {
    "id": "ponder-weird-077",
    "category": "Weird",
    "emoji": "🚪",
    "title": "The Dream Curator",
    "scenario": "Someone curates your dreams for educational value rather than enjoyment.\n\nThe curator can point to real learning and improved judgment after each difficult night. The problem is whether those benefits justify treating sleep as another period of required self-improvement rather than rest you control.",
    "question": "Would you opt out?",
    "twist": "The dreams make you wiser but less rested.",
    "deeperQuestion": "Who should decide the purpose of private experience?",
    "zh": {
      "title": "夢境策展人",
      "scenario": "有人會精心整理你的夢境，以求教育價值而非享受樂趣。整理者可以指出，每次經歷艱難的夜晚後，你都能從中學到真正的知識，判斷力也會提升。問題在於，這些益處是否足以讓你將睡眠視為另一個必須自我提升的階段，而不是由你掌控的休息時間。",
      "question": "你會選擇退出嗎？",
      "twist": "夢境使人更睿智，卻使人休息不足。",
      "deeperQuestion": "誰應該決定私人經驗的目的？"
    }
  },
  {
    "id": "ponder-weird-078",
    "category": "Weird",
    "emoji": "🌙",
    "title": "The Gentle Apocalypse",
    "scenario": "The world ends by slowly becoming everyone's favorite childhood place.\n\nFamiliar streets and rooms return with extraordinary warmth, making resistance feel like rejecting comfort. Yet the transformation gradually removes the adult relationships and choices through which people built lives beyond those childhood places.",
    "question": "Would you resist?",
    "twist": "Adults begin forgetting the lives they built.",
    "deeperQuestion": "Can comfort conceal a profound loss?",
    "zh": {
      "title": "溫柔的末日",
      "scenario": "世界最終會變成每個人最愛的童年樂園。熟悉的街道和房間帶著異常的溫暖回歸，反抗彷彿在拒絕舒適。然而，這種轉變也逐漸抹去了人們賴以在童年樂園之外建構人生的成人關係和選擇。",
      "question": "你會抵抗嗎？",
      "twist": "成年人開始忘記他們建立的生活。",
      "deeperQuestion": "安逸能掩蓋巨大的損失嗎？"
    }
  },
  {
    "id": "ponder-weird-079",
    "category": "Weird",
    "emoji": "🪞",
    "title": "The Star Interview",
    "scenario": "A star offers you a job shining over an unfamiliar planet.\n\nThe work would bring light to beings whose lives you could quietly support for centuries. Accepting asks whether contribution alone can sustain meaning when recognition and reciprocal conversation are permanently unavailable.",
    "question": "Would you accept?",
    "twist": "Its inhabitants will never know you are conscious.",
    "deeperQuestion": "Can meaningful service replace personal connection?",
    "zh": {
      "title": "星星的工作面試",
      "scenario": "一顆星邀請你前往一顆陌生的星球，投身於一份照耀萬物的職業。這份工作將為那裡的生靈帶來光明，而你只需默默地供養他們數個世紀。接受這份工作，意味著當認可和交流永遠無法實現時，單純的貢獻是否足以維繫意義。",
      "question": "你願意接受嗎？",
      "twist": "它的居民永遠不會知道你有意識。",
      "deeperQuestion": "有意義的服務能否取代人際關係？"
    }
  },
  {
    "id": "ponder-weird-080",
    "category": "Weird",
    "emoji": "☁️",
    "title": "The Shared Shadow",
    "scenario": "Two strangers discover they share one shadow.\n\nThe shadow has needs that neither person can satisfy independently. Coordinating your lives may create genuine companionship, but could also turn an accidental connection into expectations neither of you would otherwise choose.",
    "question": "Would you coordinate your lives?",
    "twist": "The shadow feels happiest when you disagree.",
    "deeperQuestion": "Does connection require harmony?",
    "zh": {
      "title": "共用的影子",
      "scenario": "兩個陌生人發現他們共享一個影子。這個影子有著兩人都無法獨自滿足的需求。協調彼此的生活或許能創造真正的友誼，但也可能將這段偶然的緣分演變成彼此都不願意接受的期待。",
      "question": "你們願意協調彼此的生活嗎？",
      "twist": "當你不同意時，影子會感到最快樂。",
      "deeperQuestion": "連結需要和諧嗎？"
    }
  },
  {
    "id": "ponder-weird-081",
    "category": "Weird",
    "emoji": "🛸",
    "title": "The Unwritten Day",
    "scenario": "One day appears blank in every calendar and nobody knows how to spend it.\n\nWithout records, later people cannot verify promises, achievements, or mistakes made during the day. The freedom to act unobserved may encourage honesty with yourself or remove forms of accountability that protect others.",
    "question": "What would you do?",
    "twist": "Anything done that day leaves no record.",
    "deeperQuestion": "Does freedom increase when consequences cannot be documented?",
    "zh": {
      "title": "未書寫的日子",
      "scenario": "每個人的日曆上都會出現空白的一天，沒有人知道該如何度過。沒有記錄，其他人日後就無法核實當天所做的承諾、所取得的成就或犯下的錯誤。這種不受監督的自由可能會促使人們誠實面對自己，也可能削弱那些保護他人的責任機制。",
      "question": "你會怎麼做？",
      "twist": "當天所做的事情不會留下任何記錄。",
      "deeperQuestion": "當無法記錄後果時，自由是否會增加？"
    }
  },
  {
    "id": "ponder-weird-082",
    "category": "Weird",
    "emoji": "🧦",
    "title": "The Living Rumor",
    "scenario": "A rumor becomes a creature that survives by being repeated.\n\nIt does not intend harm and experiences repetition as affection and survival. Keeping it alive would nevertheless require other people to carry a false account as if care for the creature settled its truth.",
    "question": "Would you let it disappear?",
    "twist": "It is friendly but completely untrue.",
    "deeperQuestion": "Can compassion justify preserving misinformation?",
    "zh": {
      "title": "活生生的謠言",
      "scenario": "謠言如同一個生物，靠著不斷重複而生存。它本身並無惡意，反而將重複視為一種喜愛和生存的途徑。然而，要讓它繼續存在，就需要其他人傳播虛假的訊息，彷彿對它的關懷就能證明其真實性。",
      "question": "你會讓它消失嗎？",
      "twist": "這話雖然友好，但完全不屬實。",
      "deeperQuestion": "同情心能否成為保存錯誤訊息的理由？"
    }
  },
  {
    "id": "ponder-weird-083",
    "category": "Weird",
    "emoji": "🗺️",
    "title": "The Memory Orchard",
    "scenario": "Trees grow fruit containing strangers' childhood experiences.\n\nThe fruit offers experiences more vivid than any biography, making strangers feel intimately familiar. Their childhoods were not created for your curiosity, even if tasting them could increase compassion and understanding.",
    "question": "Would you taste them?",
    "twist": "The strangers never agreed to share.",
    "deeperQuestion": "Can curiosity make an intimate experience feel like a commodity?",
    "zh": {
      "title": "記憶果園",
      "scenario": "樹上結出的果實，蘊藏著陌生人的童年經驗。這些果實提供的體驗比任何傳記都更生動鮮活，讓陌生人感到無比親切。他們的童年並非為了滿足你的好奇心而存在，即使品嚐它們或許能增進同情和理解。",
      "question": "你會品嚐這些陌生人的記憶嗎？",
      "twist": "那些陌生人從未同意分享自己的記憶。",
      "deeperQuestion": "好奇心能否讓親密體驗感覺像是一種商品？"
    }
  },
  {
    "id": "ponder-weird-084",
    "category": "Weird",
    "emoji": "🎈",
    "title": "The Dream Passport",
    "scenario": "You need a passport to enter another person's dream.\n\nA passport records an agreement made while both people were awake. Inside the dream, fear or curiosity may change what the dreamer wants, raising the question of how a prior invitation can be withdrawn meaningfully.",
    "question": "Who should issue it?",
    "twist": "The dreamer changes their mind while asleep.",
    "deeperQuestion": "How should consent work when preferences shift mid-experience?",
    "zh": {
      "title": "夢境護照",
      "scenario": "進入他人的夢境需要一張護照。護照記錄雙方在清醒狀態下達成的協議。在夢境中，恐懼或好奇心可能會改變做夢者的意願，這就引出了一個問題：如何才能有意義地撤回先前的邀請？",
      "question": "應該由誰簽發？",
      "twist": "做夢者在睡夢中改變了主意。",
      "deeperQuestion": "當偏好在體驗過程中改變時，同意機制該如何運作？"
    }
  },
  {
    "id": "ponder-weird-085",
    "category": "Weird",
    "emoji": "🕳️",
    "title": "The Backward Promise",
    "scenario": "A promise binds you before you have decided to make it.\n\nSomeone organized their life around the future promise before you ever heard of it. Their reliance is real, but treating it as binding would let a later possibility override your present ability to choose.",
    "question": "Would you resist?",
    "twist": "Breaking it harms someone already relying on you.",
    "deeperQuestion": "Can obligations exist without prior consent?",
    "zh": {
      "title": "倒退的承諾",
      "scenario": "承諾在你做出之前就對你產生了約束力。在你聽到這個未來承諾之前，有人就已經圍繞著它安排了自己的生活。他們的依賴是真實的，但如果把它當作約束，就等於讓未來的可能性凌駕於你當下的選擇權。",
      "question": "你會抵抗嗎？",
      "twist": "違背這個承諾，會傷害已經在依賴你的人。",
      "deeperQuestion": "未經事先同意，義務是否可以存在？"
    }
  },
  {
    "id": "ponder-weird-086",
    "category": "Weird",
    "emoji": "🌀",
    "title": "The Listening Mountain",
    "scenario": "A mountain grows taller whenever someone shares a secret with it.\n\nThe mountain listens without judgment, which makes it easier to share things you cannot tell anyone else. Its growing height turns that private comfort into a public consequence nobody can assign neatly to one speaker.",
    "question": "Would you confide in it?",
    "twist": "Eventually it may block sunlight from a village.",
    "deeperQuestion": "Can a private act carry distant collective consequences?",
    "zh": {
      "title": "聆聽山",
      "scenario": "每當有人向山傾訴秘密，山就會長高。山傾聽而不加評判，這使得人們更容易傾訴那些無法告訴任何人的事。它不斷增長的高度，將這種私密的慰藉轉化為一種公共後果，而這種後果又無法被任何人明確地歸咎於某一個說話者。",
      "question": "你會向它傾訴嗎？",
      "twist": "最終可能會遮擋村莊的陽光。",
      "deeperQuestion": "私人行為能否產生遠距離的集體後果？"
    }
  },
  {
    "id": "ponder-weird-087",
    "category": "Weird",
    "emoji": "👽",
    "title": "A World of Negative Sentences",
    "scenario": "You wake in a world where people can speak only in negatives. You cannot say “I like you,” only “I do not dislike you.” Destinations must be described by excluding places you do not want. Everyone still has a full emotional life; only language is restricted.",
    "question": "How would you communicate something you feel certain about using only negative sentences?",
    "twist": "A friend says repeated “not bad” responses make genuine enthusiasm indistinguishable from reluctant acceptance.",
    "deeperQuestion": "How would language that can exclude but never affirm change commitment, creativity, and intimacy?",
    "zh": {
      "title": "只有否定句的世界",
      "scenario": "你醒來後，世界上的人只能用否定句說話。你不能說「我喜歡你」，只能說「我不討厭你」；不能說自己想去哪裡，只能排除不想去的地方。大家仍有完整的感受，只是語言受了限制。",
      "question": "你會怎樣向朋友表達一件非常肯定的事？請試著只用否定句說。",
      "twist": "朋友說，長期只聽到「不是不好」，已分不清你是真的喜歡，還是勉強接受。",
      "deeperQuestion": "如果語言只能排除，不能肯定，會怎樣改變承諾、創作和親密關係？"
    }
  },
  {
    "id": "ponder-weird-088",
    "category": "Weird",
    "emoji": "🪐",
    "title": "Role-Swap Friday",
    "scenario": "Every Friday, social roles are randomly exchanged for one day while memories and skills stay unchanged. Teachers may become students, customers shop staff, and managers new hires. Everyone knows they will switch back tomorrow and cannot pretend to know work they have never learned.",
    "question": "Which role would you try, and which powers should remain or be suspended for the day?",
    "twist": "After switching back, someone asks to permanently change a rule they previously defended.",
    "deeperQuestion": "Is briefly standing on the other side enough to understand it? What remains invisible after a single day?",
    "zh": {
      "title": "交換身分的星期五",
      "scenario": "每逢星期五，所有人的社會角色會隨機交換一天，但技能和記憶不變。老師可能成為學生，顧客可能成為店員，主管可能成為新同事。大家知道翌日會換回來，也知道不能假裝自己懂得沒學過的工作。",
      "question": "你最想體驗哪個角色？這一天應保留哪些權力，又暫停哪些權力？",
      "twist": "角色換回來後，有人要求永久修改一條自己以前一直支持的規則。",
      "deeperQuestion": "短暫站到另一邊，足以理解那個位置嗎？還有甚麼是一天無法看見的？"
    }
  },
  {
    "id": "ponder-weird-089",
    "category": "Weird",
    "emoji": "🚪",
    "title": "The Wandering Future",
    "scenario": "Your future separates from you and starts making its own plans.\n\nThe future speaks as though it already belongs to someone with needs and ambitions. Negotiating would acknowledge those possibilities without allowing them to treat your present life merely as preparation for their preferred outcome.",
    "question": "Would you negotiate?",
    "twist": "It believes your current goals are limiting it.",
    "deeperQuestion": "Who owns possibilities that have not happened yet?",
    "zh": {
      "title": "漂泊的未來",
      "scenario": "你的未來與你分離，開始自行規劃。未來彷彿已經屬於某個有需求和抱負的人。談判意味著承認這些可能性，但同時又不允許他們將你現在的生活僅僅視為實現其預期結果的準備。",
      "question": "你會談判嗎？",
      "twist": "它認為你目前的目標限制了它。",
      "deeperQuestion": "誰擁有尚未發生的可能性？"
    }
  },
  {
    "id": "ponder-weird-090",
    "category": "Weird",
    "emoji": "🌙",
    "title": "The Literal Connection",
    "scenario": "Every close relationship creates a visible string between two people.\n\nThe string records closeness but does not explain whether that closeness is healthy or still wanted. Cutting it would make a private change unmistakable, while keeping it might falsely imply continued consent to the same relationship.",
    "question": "Would you cut an uncomfortable one?",
    "twist": "The other person can feel the cut.",
    "deeperQuestion": "Does making a boundary visible make it less fair?",
    "zh": {
      "title": "字面聯繫",
      "scenario": "每段親密關係都會在兩人之間留下一條清晰可見的紐帶。這條紐帶記錄著親密關係，但並不能說明這種親密關係是否健康，或者雙方是否仍然想要維持這種關係。切斷這條紐帶會讓私人關係的改變昭然若揭，而保留它則可能錯誤地暗示雙方仍然同意維持這段關係。",
      "question": "你會剪掉一個不舒服的嗎？",
      "twist": "對方能感覺到傷口。",
      "deeperQuestion": "將邊界顯露出來是否會使其變得不公平？"
    }
  },
  {
    "id": "ponder-weird-091",
    "category": "Weird",
    "emoji": "🪞",
    "title": "The Dream Archive",
    "scenario": "Your dreams are automatically archived in a public library.\n\nThe archive promises to preserve imagination for a wider community, but includes thoughts you never chose to express. Cultural interest can make the material valuable without making its creation a voluntary public act.",
    "question": "Would you demand deletion?",
    "twist": "Researchers find them culturally valuable.",
    "deeperQuestion": "Can collective interest outweigh intimate privacy?",
    "zh": {
      "title": "夢境檔案",
      "scenario": "你的夢境會自動存檔於公共圖書館。該檔案庫旨在為更廣泛的社群保存想像力，但也包含你從未選擇表達的想法。文化興趣可以使這些素材具有價值，而無需將其創建視為一種自願的公共行為。",
      "question": "你會要求刪除嗎？",
      "twist": "研究者認為它們具有文化價值。",
      "deeperQuestion": "集體利益能否凌駕於個人隱私之上？"
    }
  },
  {
    "id": "ponder-weird-092",
    "category": "Weird",
    "emoji": "☁️",
    "title": "The Floating City",
    "scenario": "Your city floats toward whichever place residents miss most.\n\nThe city's movement reflects emotion more intensely than a simple vote would. People with strong longing can redirect everyone else, even when the majority has good reasons to remain where they are.",
    "question": "Would you reveal your longing?",
    "twist": "A small group's intense grief outweighs the majority's wishes.",
    "deeperQuestion": "Should collective choices consider intensity as well as numbers?",
    "zh": {
      "title": "浮城",
      "scenario": "你的城市將會漂向居民最懷念的地方。城市的移動比簡單的投票更能強烈反映情感。即使大多數人有充分的理由留在原地，那些懷抱強烈渴望的人也能左右其他人的走向。",
      "question": "你願意吐露你的渴望嗎？",
      "twist": "一小部分人的強烈悲痛超過了大多數人的意願。",
      "deeperQuestion": "集體選擇是否應該考慮強度以及數量？"
    }
  },
  {
    "id": "ponder-weird-093",
    "category": "Weird",
    "emoji": "🛸",
    "title": "The Helpful Void",
    "scenario": "A friendly void offers to remove one problem from existence.\n\nThe problem has caused suffering, but people also built relationships, skills, and identities while responding to it. Removing the origin does not allow you to choose separately which resulting lives should remain.",
    "question": "Would you accept?",
    "twist": "Removing the problem also erases everyone shaped by it.",
    "deeperQuestion": "Can solving a problem destroy unexpected meaning?",
    "zh": {
      "title": "有益的虛空",
      "scenario": "一個友善的虛空提出要從存在中移除一個問題。這個問題帶來了痛苦，但人們在應對痛苦的過程中也建立了人際關係、掌握了技能、塑造了自我認同。移除問題的根源並不意味著你可以單獨選擇哪些由此產生的生命應該保留下來。",
      "question": "你願意接受嗎？",
      "twist": "消除問題的同時，也會抹殺所有受影響的人。",
      "deeperQuestion": "解決問題會破壞意想不到的意義嗎？"
    }
  },
  {
    "id": "ponder-weird-094",
    "category": "Weird",
    "emoji": "🧦",
    "title": "The Borrowed Ending",
    "scenario": "A stranger offers you the satisfying ending of their unfinished story.\n\nYou would gain the sense that an important uncertainty has been resolved, even though the journey was not yours. Taking another person's closure may change your feelings without giving you the experiences that made it meaningful to them.",
    "question": "Would you take it?",
    "twist": "Their remaining life becomes open and uncertain.",
    "deeperQuestion": "Is closure valuable enough to transfer?",
    "zh": {
      "title": "借來的結局",
      "scenario": "一個陌生人願意把自己故事中令人滿足的結局送給你，讓你的某段未完經歷也有交代。你會得到釋懷的感覺，卻沒有親身走過對方通往結局的道路。接受這份完整感，也意味著對方餘下的人生重新變得未定。",
      "question": "你願意接受嗎？",
      "twist": "他們餘生變得開放而不確定。",
      "deeperQuestion": "一個有交代的結局，值得從別人的人生轉到你身上嗎？"
    }
  },
  {
    "id": "ponder-weird-095",
    "category": "Weird",
    "emoji": "🌦️",
    "title": "A Forecast That Votes",
    "scenario": "Tomorrow’s weather is caused by today’s forecast, which is generated from people’s planned activities. More picnic plans make sunshine likelier, and a sunny forecast attracts even more picnics. Farmers worry that nobody will choose an activity that gives rain a chance.",
    "question": "How would you break the loop while keeping the forecast useful?",
    "twist": "Residents register fake activities to encourage rain, then find they can no longer trust the forecast themselves.",
    "deeperQuestion": "What does accuracy mean when a prediction changes the behavior that produces its outcome?",
    "zh": {
      "title": "會投票的天氣預報",
      "scenario": "明天的天氣由今天的預報決定，而預報又根據大家準備做甚麼來產生。越多人想野餐，晴天機率就越高；但一看到晴天預報，更多人就改去野餐。農夫開始擔心沒有人會選需要雨水的活動。",
      "question": "你會怎樣打破這個循環，讓預報仍然有用？",
      "twist": "市民故意登記假活動來爭取雨天，結果連自己也不敢相信預報。",
      "deeperQuestion": "當預測本身會改變大家的行為，準確還能代表甚麼？"
    }
  },
  {
    "id": "ponder-weird-096",
    "category": "Weird",
    "emoji": "🎈",
    "title": "The Time Translation",
    "scenario": "A device translates your present choices into how future people describe them.\n\nThe translation is accurate about later judgments rather than proof that those judgments are morally correct. It offers another perspective while forcing you to decide how much authority distance in time should confer.",
    "question": "Would you use it?",
    "twist": "Their values differ sharply from yours.",
    "deeperQuestion": "Should future judgment determine present morality?",
    "zh": {
      "title": "時間翻譯",
      "scenario": "一個裝置能告訴你，未來的人會怎樣描述你現在的選擇。它能準確預測後人的評價，卻不能證明那些評價一定正確。你得到了一個新的角度，但仍要決定，較晚出現的價值觀是否應該擁有更大的判斷權。",
      "question": "你會使用它嗎？",
      "twist": "他們的價值觀與你的價值觀截然不同。",
      "deeperQuestion": "未來的判斷是否應該決定當下的道德？"
    }
  },
  {
    "id": "ponder-weird-097",
    "category": "Weird",
    "emoji": "🕳️",
    "title": "The Invisible Garden",
    "scenario": "A garden grows only when nobody checks whether it is growing.\n\nChecking usually feels like care because it helps you notice problems early. Here the same attention interrupts growth, so nurturing something requires tolerating uncertainty without turning trust into neglect.",
    "question": "Would you stop looking?",
    "twist": "You cannot know whether it needs care.",
    "deeperQuestion": "Can trust require accepting limited evidence?",
    "zh": {
      "title": "隱形花園",
      "scenario": "花園只有在沒有人查看它的生長進度時才會生長。過問通常讓人感覺像是在照顧它，因為它能幫助你及早發現問題。然而，同樣的關注反而會阻礙生長，因此，培育植物需要容忍不確定性，而不是將信任轉化為忽視。",
      "question": "你會停止觀看嗎？",
      "twist": "你無法知道它是否需要照護。",
      "deeperQuestion": "信任能否要求接受有限的證據？"
    }
  },
  {
    "id": "ponder-weird-098",
    "category": "Weird",
    "emoji": "🌀",
    "title": "The Shared Body Clock",
    "scenario": "Your body clock synchronizes with the person you miss most.\n\nYour longing becomes a bodily rhythm rather than a feeling you can process privately. Explaining it may invite understanding while making another person feel responsible for a connection they did not choose to create.",
    "question": "Would you tell them?",
    "twist": "They live on the other side of the world.",
    "deeperQuestion": "Can an involuntary connection create a claim on someone?",
    "zh": {
      "title": "共享生理時鐘",
      "scenario": "你的生理時鐘會與你最想念的人同步。你的思念不再是你能獨自消化的情緒，而變成了一種身體的節奏。向對方解釋這種思念或許能帶來理解，但同時也會讓對方覺得要為一段他們並未主動選擇的感情負責。",
      "question": "你會告訴他們嗎？",
      "twist": "他們生活在世界的另一邊。",
      "deeperQuestion": "一段不是自願建立的連結，會令雙方對彼此產生責任嗎？"
    }
  },
  {
    "id": "ponder-weird-099",
    "category": "Weird",
    "emoji": "👽",
    "title": "The Unfinished Planet",
    "scenario": "You discover Earth is an unfinished art project whose creator wants it back.\n\nThe creator views unpredictable lives as unfinished details rather than independent stories. Your objection would challenge whether making a world gives someone the right to define its purpose after its inhabitants develop their own.",
    "question": "Would you object?",
    "twist": "Finishing the work would erase unpredictable human choices.",
    "deeperQuestion": "Does creating something grant permanent authority over it?",
    "zh": {
      "title": "未完成的星球",
      "scenario": "你發現地球是一個未完成的藝術項目，它的創造者想要收回它。創造者將變幻莫測的生命視為未完成的細節，而非獨立的故事。你的反對意見在於，創造一個世界是否賦予了創造者在居民發展出自身意義之後，定義其目的的權利。",
      "question": "你反對嗎？",
      "twist": "完成這項工作將抹殺不可預測的人類選擇。",
      "deeperQuestion": "創造了一個生命或世界，是否就永遠有權支配它？"
    }
  },
  {
    "id": "ponder-weird-100",
    "category": "Weird",
    "emoji": "🪐",
    "title": "The Universe's Favor",
    "scenario": "The universe asks you to exist one extra minute after everyone else.\n\nNo one else would witness the choice or remember the company you offered. The minute's value would exist entirely within an encounter whose significance cannot be carried forward into any later story.",
    "question": "Would you agree?",
    "twist": "It says it does not want to end alone.",
    "deeperQuestion": "Can companionship matter even when no future follows?",
    "zh": {
      "title": "宇宙的恩惠",
      "scenario": "宇宙要求你在所有人之後多存在一分鐘。沒有人會見證你的選擇，也不會記得你曾經給予的陪伴。這一分鐘的價值完全存在於一次邂逅之中，而這次邂逅的意義無法延續到任何後續的故事。",
      "question": "你同意嗎？",
      "twist": "它說它不想孤獨地結束。",
      "deeperQuestion": "即使沒有未來，陪伴還有意義嗎？"
    }
  }
];
