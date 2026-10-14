export const categories = ['Couple', 'Family', 'Party', 'Solo'] as const;
export type Category = typeof categories[number];
export type GroupSize = 'small' | 'medium' | 'large';
export interface CardText { title: string; scenario: string; question: string; twist: string; deeperQuestion: string; }
export interface Question extends CardText { id: string; category: Category; emoji: string; zh: CardText; groupSize?: GroupSize; legacy?: boolean; author?: string; }
// Reviewed connection-first pilot: clear situations and natural follow-ups.
export const questions: Question[] = [
  {
    "id": "ponder-v4-couple-001",
    "category": "Couple",
    "emoji": "💗",
    "title": "A Saturday, your way",
    "scenario": "You each get a turn to plan a Saturday together. You have HK$500 and can spend it on things to do, but not gifts. Your partner agrees to follow your plan without complaining that it is boring.",
    "question": "What would your day look like?",
    "twist": "",
    "deeperQuestion": "Did you plan their favourite kind of day, or a day you have always wanted someone to share with you?",
    "zh": {
      "title": "交換一個星期六",
      "scenario": "你們各有一次機會，替對方安排一個星期六。預算是五百元，不能買禮物，只能安排一起做的事。對方會跟足你的安排，亦答應不會嫌無聊。",
      "question": "你會安排怎樣的一天？",
      "twist": "",
      "deeperQuestion": "你安排的是對方最喜歡的一天，還是你一直想有人陪你過的一天？"
    }
  },
  {
    "id": "ponder-v4-couple-002",
    "category": "Couple",
    "emoji": "💗",
    "title": "The little love shop",
    "scenario": "A strange new shop gives you a voucher valid for a year. Choose either one thoughtfully planned date each month or three home-cooked dinners a week, with the washing-up included. Both are free, but you can pick only one.",
    "question": "Which would you want to choose together?",
    "twist": "",
    "deeperQuestion": "What small thing has your partner done recently that made you feel cared for?",
    "zh": {
      "title": "愛情便利店",
      "scenario": "樓下開了一間奇怪的便利店。它送你們一張一年有效的兌換券：可以換「每月一次精心安排的約會」，或者「每星期三晚，有人煮好晚餐，連碗也洗好」。只能選一款，兩款都免費。",
      "question": "你希望你們一起選哪款？",
      "twist": "",
      "deeperQuestion": "對方最近做過甚麼小事，讓你有「被放在心上」的感覺？"
    }
  },
  {
    "id": "ponder-v4-couple-003",
    "category": "Couple",
    "emoji": "💗",
    "title": "What if we won?",
    "scenario": "A lottery ticket you bought together wins HK$100,000. On the way home, you picture the trip you never felt able to justify. Your partner says, “We can finally save enough to feel a little safer.” There is no urgent bill or deadline.",
    "question": "How would you suggest dividing the money in a way you would honestly feel happy with?",
    "twist": "",
    "deeperQuestion": "What feeling do you need your savings to give you before you feel comfortable spending some?",
    "zh": {
      "title": "如果中獎的是我們",
      "scenario": "你們一起買的彩票中了十萬元。領獎回家途中，你已經在想一趟一直捨不得去的旅行，對方卻說：「終於可以存一筆錢，安心一點。」這筆錢沒有急用，你們也不用立即決定。",
      "question": "你會怎樣提出一個自己也真心滿意的分配方法？",
      "twist": "",
      "deeperQuestion": "對你來說，存款要帶來甚麼感覺，你才捨得花一部分？"
    }
  },
  {
    "id": "ponder-v4-family-001",
    "category": "Family",
    "emoji": "🏠",
    "title": "A day off for everyone",
    "scenario": "Your family receives a magical day-off voucher. Everyone gets the same day free, with work, homework and chores taken care of. There is no need to travel far or take photos to prove you enjoyed it. Each person can suggest something to do together.",
    "question": "What would you suggest?",
    "twist": "",
    "deeperQuestion": "Whose suggestion might surprise the family most? What would you like to hear from them?",
    "zh": {
      "title": "全家放假券",
      "scenario": "你家收到一張神奇放假券：全家可以同時放假一天，工作、功課和家務都有人處理好。你們不用出遠門，也不用拍照交功課。每人可以提議一件想一起做的事。",
      "question": "輪到你，你會提議甚麼？",
      "twist": "",
      "deeperQuestion": "家裡有誰的提議，最可能讓大家意外？你想聽聽對方怎樣選嗎？"
    }
  },
  {
    "id": "ponder-v4-family-002",
    "category": "Family",
    "emoji": "🏠",
    "title": "One box for the move",
    "scenario": "Your family is moving to a more comfortable home, already furnished and stocked with everyday essentials. The movers provide a “memory box” with room for one old object from each person: a dish, toy, photo or even an ordinary scrap of paper.",
    "question": "What would you pack, and where would you put it in the new home?",
    "twist": "",
    "deeperQuestion": "If your family did not know why it mattered to you, what story would you tell them?",
    "zh": {
      "title": "搬家只帶一箱",
      "scenario": "全家準備搬到一間更舒服的新屋，家具和日用品都已備好。搬家公司另外送一個「回憶箱」，讓每人放一件想留在新家的舊東西。可以是餐具、玩具、照片，甚至一張不起眼的紙。",
      "question": "你會放哪一件？到了新家，你想把它放在哪裡？",
      "twist": "",
      "deeperQuestion": "如果家人不知道這件東西對你有多重要，你會怎樣說它的故事？"
    }
  },
  {
    "id": "ponder-v4-family-003",
    "category": "Family",
    "emoji": "🏠",
    "title": "Dinner at eighteen",
    "scenario": "A restaurant can bring your family to dinner as their eighteen-year-old selves. They remember their lives up to that age, but nothing afterwards. You visit as you are today. You cannot change history; you can simply get to know who they were.",
    "question": "Who would you sit beside, and what would you ask first?",
    "twist": "",
    "deeperQuestion": "Is there something you have wanted to ask this person today but have never found the moment?",
    "zh": {
      "title": "十八歲的飯局",
      "scenario": "有間餐廳可以讓一家人以十八歲的樣子吃一頓飯。大家保留十八歲以前的記憶，暫時不知道後來發生的事；你則可以帶著現在的自己去見他們。這晚不用改變歷史，只是認識一下當時的彼此。",
      "question": "你最想坐在誰旁邊？第一個想問甚麼？",
      "twist": "",
      "deeperQuestion": "現在的你，有甚麼一直想問這位家人，卻未找到機會開口？"
    }
  },
  {
    "id": "ponder-v4-party-001",
    "category": "Party",
    "emoji": "🎉",
    "title": "Our three-month shop",
    "scenario": "Someone lends your group a little shop for three months, with rent and utilities covered. Each person only needs to spend one afternoon a week there. It need not make a profit: you could sell things, teach something or offer a place to sit.",
    "question": "What would you open, and who would you hope walks through the door?",
    "twist": "",
    "deeperQuestion": "Which job would you enjoy doing? Which would you love a friend to take on?",
    "zh": {
      "title": "三個月小店",
      "scenario": "有人借你們一間小店三個月，租金、水電全免，大家每星期只需花一個下午打理。它不一定要賺錢：可以賣東西、教人做一件事，或者讓人進來坐坐。開店前，你們要一起決定它到底是甚麼地方。",
      "question": "你想開甚麼店？最希望哪一種人走進來？",
      "twist": "",
      "deeperQuestion": "你想負責哪個部分？有沒有一種工作，你很希望朋友接手？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v4-party-002",
    "category": "Party",
    "emoji": "🎉",
    "title": "One extra day away",
    "scenario": "Your flight home is delayed by a day. The airline covers your hotel and meals, and nobody will miss work or school. Some friends want another attraction, some want to sleep in, and others want to explore alone.",
    "question": "How would you spend it? Would you want everyone together, or be happy splitting up?",
    "twist": "",
    "deeperQuestion": "If you really wanted company but everyone chose something else, how would you ask?",
    "zh": {
      "title": "旅行突然多一天",
      "scenario": "大家旅行時，航空公司通知回程延後一天，酒店和餐費由它支付，也不會影響大家上班上學。你們突然多了一天：有人想補去景點，有人想睡到自然醒，也有人想自己逛逛。",
      "question": "你最想怎樣過？你希望大家一起，還是分開活動也可以？",
      "twist": "",
      "deeperQuestion": "如果你很想有人陪你，但大家都選了別的活動，你會怎樣開口？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v4-party-003",
    "category": "Party",
    "emoji": "🎉",
    "title": "A little guide to being my friend",
    "scenario": "Imagine this gathering has a new game. Everyone gets a blank card starting with “As my friend, you can…” You might write “Invite me to dinner without needing a reason” or “Let me be quiet without rushing to cheer me up.” Take turns reading your own card.",
    "question": "What would yours say?",
    "twist": "",
    "deeperQuestion": "After hearing everyone's cards, which line do you most want to remember, and why?",
    "zh": {
      "title": "朋友使用說明書",
      "scenario": "這場聚會多了一個新玩法：每人拿一張空白卡，寫一句「跟我做朋友，你可以……」。可以寫「直接約我吃飯，不用找理由」，也可以寫「我安靜時，先不用急著逗我笑」。寫好後，輪流讀自己的卡。",
      "question": "你的卡會寫甚麼？",
      "twist": "",
      "deeperQuestion": "聽完大家的卡，你最想記住哪一句？為甚麼？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v4-solo-001",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A class that need not be useful",
    "scenario": "You receive six months of lessons in anything you choose, with fees and travel covered and two hours a week set aside. There are no exams, required projects or plans to turn it into a side business. Enjoying it is enough.",
    "question": "What would you learn? What moment in the first class are you looking forward to?",
    "twist": "",
    "deeperQuestion": "Are you drawn to becoming good at it, or is doing it already enjoyable?",
    "zh": {
      "title": "不用有用的一堂課",
      "scenario": "你收到一張課程券，可以學任何東西半年，費用和交通全包，每星期也已替你留好兩小時。不用考試、交作品或把它變成副業，單純因為喜歡就可以去。",
      "question": "你會報甚麼課？想像第一堂，你最期待哪個瞬間？",
      "twist": "",
      "deeperQuestion": "這件事吸引你，是因為想做得好，還是做的時候已經很開心？"
    }
  },
  {
    "id": "ponder-v4-solo-002",
    "category": "Solo",
    "emoji": "🌿",
    "title": "You, in another city",
    "scenario": "You can spend a month in another city, with free accommodation and work or study arrangements covered. Nobody knows you, and there are no familiar invitations after work. On your first evening, you unpack and realise the time is truly yours.",
    "question": "What would you go out and do first, or would you stay in?",
    "twist": "",
    "deeperQuestion": "Is any part of that choice something you usually avoid because of what others might think?",
    "zh": {
      "title": "另一個城市的你",
      "scenario": "你可以到另一個城市住一個月，住宿免費，工作或學業亦安排妥當。那裡沒有人認識你，下班後也沒有熟人的邀約。第一個晚上，你把行李放好，發現接下來的時間真的可以自己決定。",
      "question": "你會先出門做甚麼，還是留在房間？",
      "twist": "",
      "deeperQuestion": "這個選擇裡，有沒有一樣是你平常想做，卻怕別人覺得奇怪的事？"
    }
  },
  {
    "id": "ponder-v4-solo-003",
    "category": "Solo",
    "emoji": "🌿",
    "title": "An hour handed back",
    "scenario": "A little helper takes care of one draining everyday chore, giving you an hour back each day. It will not fill the gap with more work; it simply reminds you, “This hour is yours.” You can rest, see someone or leave it unplanned.",
    "question": "In the first week, what would you want to keep that hour for?",
    "twist": "",
    "deeperQuestion": "If that time really became free, what would most tempt you to give it away again?",
    "zh": {
      "title": "把一小時還給你",
      "scenario": "有個小幫手每天替你完成一件最花精神的雜事，讓你多出一小時。它不會幫你把工作塞得更滿，只會在時間到了時提醒：「這一小時是你的。」你可以休息、見人，或者甚麼也不安排。",
      "question": "第一個星期，你最想把這一小時留給甚麼？",
      "twist": "",
      "deeperQuestion": "如果真的空出這段時間，你最容易因為甚麼而又把它讓出去？"
    }
  }
];
