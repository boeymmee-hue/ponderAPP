export const categories = ['Couple', 'Family', 'Party', 'Solo'] as const;
export type Category = typeof categories[number];
export type GroupSize = 'small' | 'medium' | 'large';
export interface CardText { title: string; scenario: string; question: string; twist: string; deeperQuestion: string; }
export type Level = 'classic' | 'deeper';
export interface Question extends CardText { level?: Level; id: string; category: Category; emoji: string; zh: CardText; groupSize?: GroupSize; legacy?: boolean; author?: string; }
// 100 original + 100 deeper cards per category. Existing share IDs remain unchanged.
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
    "id": "ponder-v4-couple-004",
    "category": "Couple",
    "emoji": "💗",
    "title": "Date surprise",
    "scenario": "You win a mystery date. The only instruction is to wear trainers. Your partner is excited, but you usually relax more when you know the plan.",
    "question": "Would you keep the surprise or ask for one detail?",
    "twist": "",
    "deeperQuestion": "What travel detail do you always need in advance?",
    "zh": {
      "title": "約會盲盒",
      "scenario": "你們抽到一個免費約會盲盒，出門前只會知道要穿運動鞋。伴侶很興奮，你卻習慣先知道行程，才放鬆得到。",
      "question": "你想完全保密，還是先拆開哪一部分？",
      "twist": "",
      "deeperQuestion": "旅行時，有甚麼安排是你一定要先知道的？"
    }
  },
  {
    "id": "ponder-v4-couple-005",
    "category": "Couple",
    "emoji": "💗",
    "title": "Rainy cottage",
    "scenario": "Your seaside weekend is washed out. The cottage has a kitchen, a few books and playing cards, with very little phone signal.",
    "question": "How would you make these two days something to enjoy?",
    "twist": "",
    "deeperQuestion": "Do you need an activity together, or enjoy doing separate things nearby?",
    "zh": {
      "title": "雨天的小屋",
      "scenario": "你們訂了海邊小屋，結果整個週末都下雨。屋裡只有廚房、幾本書和一副紙牌，手機訊號也很弱。",
      "question": "你會怎樣讓這兩天仍然值得期待？",
      "twist": "",
      "deeperQuestion": "一起待著時，你需要有活動，還是各做各的也舒服？"
    }
  },
  {
    "id": "ponder-v4-couple-006",
    "category": "Couple",
    "emoji": "💗",
    "title": "Two tickets",
    "scenario": "You receive rare tickets to music you love but your partner does not know. They will happily come, although a friend might enjoy it more.",
    "question": "Who would you invite, and what would you want from the evening?",
    "twist": "",
    "deeperQuestion": "Which interest would you like your partner to understand without having to share it?",
    "zh": {
      "title": "兩張演出票",
      "scenario": "你收到兩張很難買的演出票，演的是你最喜歡、伴侶卻完全不懂的音樂。對方說願意去，但你知道朋友可能會更投入。",
      "question": "你想邀請誰？你希望這晚得到甚麼？",
      "twist": "",
      "deeperQuestion": "你最想讓伴侶了解哪一個興趣，又不一定要對方也喜歡？"
    }
  },
  {
    "id": "ponder-v4-couple-007",
    "category": "Couple",
    "emoji": "💗",
    "title": "An extra guest",
    "scenario": "You prepare dinner for two. Your partner asks to bring home a friend having a terrible day. There is enough food, but you have looked forward to this evening.",
    "question": "How would you reply without ignoring your own feelings?",
    "twist": "",
    "deeperQuestion": "What helps you accept a last-minute change of plans?",
    "zh": {
      "title": "晚餐的第三個人",
      "scenario": "你準備了一頓兩人晚餐，伴侶下班前問能否帶一位今天很失落的朋友回來。食物足夠，但你已期待今晚很久。",
      "question": "你會怎樣回覆，才沒有委屈自己？",
      "twist": "",
      "deeperQuestion": "臨時改動約定時，對方做甚麼會讓你比較好接受？"
    }
  },
  {
    "id": "ponder-v4-couple-008",
    "category": "Couple",
    "emoji": "💗",
    "title": "The spare room",
    "scenario": "Your new home has one spare room. You want a creative workspace; your partner wants a room for visiting relatives. For now, it can serve only one purpose.",
    "question": "What would you ask your partner before deciding together?",
    "twist": "",
    "deeperQuestion": "Is there a small space you would like to keep for yourself?",
    "zh": {
      "title": "未來家的空房",
      "scenario": "你們搬進新家，多了一間小房。你想放書桌做創作，對方想留作客房，讓遠方家人來住。暫時只能布置成一種用途。",
      "question": "你會先問對方甚麼，再一起決定？",
      "twist": "",
      "deeperQuestion": "有沒有一個小角落，是你希望一直屬於自己的？"
    }
  },
  {
    "id": "ponder-v4-couple-009",
    "category": "Couple",
    "emoji": "💗",
    "title": "Meeting your younger self",
    "scenario": "A café lets your partner meet your sixteen-year-old self for ten minutes. Your younger self sees only a new acquaintance, unaware of your future together.",
    "question": "What side of your younger self would you want them to see?",
    "twist": "",
    "deeperQuestion": "What small habit have you kept from that time?",
    "zh": {
      "title": "偶遇年少的你",
      "scenario": "一間咖啡店能讓伴侶見到十六歲的你十分鐘。那時的你不知道將來會相愛，只當對方是個新認識的人。",
      "question": "你希望伴侶看見當時哪一面的你？",
      "twist": "",
      "deeperQuestion": "現在還有哪個小習慣，是從那時留下來的？"
    }
  },
  {
    "id": "ponder-v4-couple-010",
    "category": "Couple",
    "emoji": "💗",
    "title": "A trip without photos",
    "scenario": "You win a trip with one condition: no photographs. You may write, draw or bring home a small keepsake, and tell people about it afterwards.",
    "question": "How would you most like to remember the trip?",
    "twist": "",
    "deeperQuestion": "What time together do you remember clearly without a photo?",
    "zh": {
      "title": "不用拍照的旅行",
      "scenario": "你們贏得一趟免費旅行，唯一條件是不能拍照。可以寫字、畫畫或帶一件小紀念品，回來也能跟別人分享故事。",
      "question": "你最想用甚麼方法記住這趟旅行？",
      "twist": "",
      "deeperQuestion": "你們有哪次相處沒有照片，卻記得很清楚？"
    }
  },
  {
    "id": "ponder-v4-couple-011",
    "category": "Couple",
    "emoji": "💗",
    "title": "Translating romance",
    "scenario": "A little machine translates your actions into care your partner can easily recognise. Cooking, errands or staying nearby can all carry your intended message.",
    "question": "Which action would you want it to translate first?",
    "twist": "",
    "deeperQuestion": "What kind of care did you only learn to recognise later?",
    "zh": {
      "title": "浪漫的翻譯機",
      "scenario": "有部小機器會把你做的事翻譯成伴侶最容易感受到的心意。你煮飯、買東西或留下陪伴，都能讓對方知道你想表達甚麼。",
      "question": "你最想先讓它翻譯哪一件事？",
      "twist": "",
      "deeperQuestion": "有哪種關心，你以前不懂，後來才明白？"
    }
  },
  {
    "id": "ponder-v4-couple-012",
    "category": "Couple",
    "emoji": "💗",
    "title": "A solo invitation",
    "scenario": "You are invited to a week-long event abroad, fully paid, but cannot bring your partner. It falls during a holiday you had planned to take together.",
    "question": "How would you discuss the opportunity with them?",
    "twist": "",
    "deeperQuestion": "What opportunity would you want your partner to feel free to take?",
    "zh": {
      "title": "獨自出發的機會",
      "scenario": "你獲邀去外地參加一星期的活動，費用全免，卻不能帶伴侶。那星期剛好是你們原本打算一起放假的時間。",
      "question": "你會怎樣跟對方商量這個機會？",
      "twist": "",
      "deeperQuestion": "甚麼樣的機會，你會希望對方放心去試？"
    }
  },
  {
    "id": "ponder-v4-couple-013",
    "category": "Couple",
    "emoji": "💗",
    "title": "Five honest minutes",
    "scenario": "You each have five magical minutes in which the other fully understands you, without misreading your tone or rushing to respond. Afterwards, you still work things out together.",
    "question": "What would you use those five minutes to say?",
    "twist": "",
    "deeperQuestion": "If you said just one sentence now, what would you want heard?",
    "zh": {
      "title": "五分鐘的心聲",
      "scenario": "你們可以各用一次魔法，讓對方完整聽懂自己五分鐘，期間不會誤會語氣，也不急著反駁。講完後，仍要一起慢慢處理事情。",
      "question": "你最想用這五分鐘講甚麼？",
      "twist": "",
      "deeperQuestion": "如果現在只講一句，你希望對方先聽見甚麼？"
    }
  },
  {
    "id": "ponder-v4-couple-014",
    "category": "Couple",
    "emoji": "💗",
    "title": "A tiny tradition",
    "scenario": "You can invent a weekly tradition taking less than half an hour and costing nothing. You want it to survive busy weeks too.",
    "question": "What small thing would you make your tradition?",
    "twist": "",
    "deeperQuestion": "When are you most likely to feel you are merely passing each other?",
    "zh": {
      "title": "每週的小傳統",
      "scenario": "你們可以設計一個每星期重複的小傳統，時間不用超過半小時，也不用花錢。忙的時候仍希望做得到。",
      "question": "你想把哪件小事變成你們的習慣？",
      "twist": "",
      "deeperQuestion": "哪個時段，你最容易覺得兩個人只是擦身而過？"
    }
  },
  {
    "id": "ponder-v4-couple-015",
    "category": "Couple",
    "emoji": "💗",
    "title": "Can I exchange it?",
    "scenario": "Your partner saves for something you once wanted, but your tastes have changed. The shop allows exchanges, while your partner eagerly awaits your reaction.",
    "question": "How would you express gratitude and your honest preference?",
    "twist": "",
    "deeperQuestion": "If you had bought the gift, what would you want them to do?",
    "zh": {
      "title": "禮物可以換嗎",
      "scenario": "伴侶存錢買了你一直想要的東西，但你最近已經不再喜歡。店舖願意換貨，只是對方正滿心期待你的反應。",
      "question": "你會怎樣說出感謝，也讓對方知道真實想法？",
      "twist": "",
      "deeperQuestion": "如果角色交換，你希望對方怎樣處理？"
    }
  },
  {
    "id": "ponder-v4-couple-016",
    "category": "Couple",
    "emoji": "💗",
    "title": "A celebration for us",
    "scenario": "Imagine a celebration of your relationship without comparisons or required traditions. Your budget allows three parts you genuinely enjoy.",
    "question": "Which three parts would you keep?",
    "twist": "",
    "deeperQuestion": "Which part might you include mainly to avoid disappointing someone?",
    "zh": {
      "title": "沒有比較的婚禮",
      "scenario": "假設你們辦一場慶祝相愛的聚會，沒有人會比較排場，也不用照習俗。預算只夠留下三個你們真心喜歡的環節。",
      "question": "你最想留下哪三個環節？",
      "twist": "",
      "deeperQuestion": "哪一項你可能只是怕別人失望才想安排？"
    }
  },
  {
    "id": "ponder-v4-couple-017",
    "category": "Couple",
    "emoji": "💗",
    "title": "Trading daily roles",
    "scenario": "You swap jobs and daily responsibilities for a day, with the skills supplied. Each experiences the other's normal pace without changing the schedule.",
    "question": "Which part of your day would you most want them to experience?",
    "twist": "",
    "deeperQuestion": "Afterwards, how would you hope they spend an ordinary evening with you?",
    "zh": {
      "title": "一天角色互換",
      "scenario": "你們可以交換一天的工作和日常責任，技能會暫時自動學會。對方會經歷你平常那種節奏，但不能替你改掉任何安排。",
      "question": "你最想對方親身體會哪一段時間？",
      "twist": "",
      "deeperQuestion": "交換完，你希望對方怎樣陪你度過普通的一晚？"
    }
  },
  {
    "id": "ponder-v4-couple-018",
    "category": "Couple",
    "emoji": "💗",
    "title": "Our first shared fund",
    "scenario": "You have saved HK$10,000 together to improve your lives. A better mattress, a family meal or simply keeping the money are all possible.",
    "question": "What would you want the money to solve or bring you?",
    "twist": "",
    "deeperQuestion": "What matters most when you decide something is worth paying for?",
    "zh": {
      "title": "共同帳戶第一筆",
      "scenario": "你們有一筆共同儲下的一萬元，可以拿來改善生活。有人提議買好床墊，有人想請家人吃飯，也可以繼續存著。",
      "question": "你最想讓這筆錢解決甚麼，或者帶來甚麼？",
      "twist": "",
      "deeperQuestion": "你判斷「值得花」時，最看重哪件事？"
    }
  },
  {
    "id": "ponder-v4-couple-019",
    "category": "Couple",
    "emoji": "💗",
    "title": "Replay room",
    "scenario": "A small cinema can replay one afternoon from your relationship, including its sounds and smells. You may watch but cannot change or keep the recording.",
    "question": "Which afternoon would you watch together again?",
    "twist": "",
    "deeperQuestion": "What did you overlook then that you would notice now?",
    "zh": {
      "title": "戀愛重播室",
      "scenario": "一間小影院可以重播你們相處過的一個下午，連當時的聲音和氣味也在。你們只能看，不能改變，也不能帶走影片。",
      "question": "你想揀哪個下午，陪對方再看一次？",
      "twist": "",
      "deeperQuestion": "當時有甚麼你沒留意，現在卻想看清楚？"
    }
  },
  {
    "id": "ponder-v4-couple-020",
    "category": "Couple",
    "emoji": "💗",
    "title": "Two hotel rooms",
    "scenario": "Your hotel offers a free upgrade: a lovely central suite or a quiet rural cottage with awkward transport. You have two nights and no essential sights.",
    "question": "Which would you choose, and what do you want from the weekend?",
    "twist": "",
    "deeperQuestion": "When you want to relax, do you want less activity or something different?",
    "zh": {
      "title": "旅館兩種房",
      "scenario": "酒店免費升級，讓你們二選一：熱鬧市中心的漂亮套房，或郊外安靜但交通不便的小屋。你們只住兩晚，沒有必去景點。",
      "question": "你想住哪邊？你最想從這個週末得到甚麼？",
      "twist": "",
      "deeperQuestion": "你說「想放鬆」時，通常是想少做事，還是換點新鮮事？"
    }
  },
  {
    "id": "ponder-v4-couple-021",
    "category": "Couple",
    "emoji": "💗",
    "title": "One helpful reminder",
    "scenario": "You may leave a one-time reminder on your partner's phone for a tiring, busy day. It cannot assign a task, only offer a sentence.",
    "question": "What sentence would you leave?",
    "twist": "",
    "deeperQuestion": "What kind of reassurance is least helpful when you feel low?",
    "zh": {
      "title": "只留一個提醒",
      "scenario": "你可以在伴侶手機設一個只出現一次的提醒，會在對方很忙、很累的一天跳出來。不能派工作，只能留一句話。",
      "question": "你會留下哪一句？",
      "twist": "",
      "deeperQuestion": "你自己低落時，最不想聽到哪種安慰？"
    }
  },
  {
    "id": "ponder-v4-couple-022",
    "category": "Couple",
    "emoji": "💗",
    "title": "The film we disagree on",
    "scenario": "After a film, you admire the hero for leaving a secure job to follow a dream. Your partner thinks he burdened his family. You still have the journey home.",
    "question": "What would you ask rather than try to persuade them?",
    "twist": "",
    "deeperQuestion": "When has hearing their reasons changed your mind?",
    "zh": {
      "title": "意見不一的電影",
      "scenario": "你們看完一部電影，你覺得主角放棄穩定工作追夢很勇敢，伴侶卻覺得他讓家人承擔太多。散場後還有一段回家的路。",
      "question": "你最想問對方哪一個問題，而不是說服對方？",
      "twist": "",
      "deeperQuestion": "有沒有一次，你聽完對方的理由後真的改變了看法？"
    }
  },
  {
    "id": "ponder-v4-couple-023",
    "category": "Couple",
    "emoji": "💗",
    "title": "Breakfast messages",
    "scenario": "Your schedules miss each other for a week, leaving a kitchen board for messages. Beyond practical notes, there is room for thirty words each morning.",
    "question": "What would you write on day one?",
    "twist": "",
    "deeperQuestion": "What little update helps you feel included in their day?",
    "zh": {
      "title": "早餐留言板",
      "scenario": "你們作息錯開一星期，只能在廚房留言板交流。除了必要的事情，每天還有位置寫三十個字，讓對方起床時看到。",
      "question": "第一天你會寫甚麼？",
      "twist": "",
      "deeperQuestion": "平常哪種小消息，會讓你覺得自己有參與對方的生活？"
    }
  },
  {
    "id": "ponder-v4-couple-024",
    "category": "Couple",
    "emoji": "💗",
    "title": "Lending our home",
    "scenario": "A friend asks to stay for a week. You want to help, but your partner has had an exhausting month and needs a home without hosting duties.",
    "question": "How would you first find out what would work for both of you?",
    "twist": "",
    "deeperQuestion": "What boundary would you want a houseguest to know?",
    "zh": {
      "title": "把家借出去",
      "scenario": "朋友想借住你們家一星期。你很想幫忙，伴侶卻剛經歷忙碌的一個月，很需要回家後不用招呼人。",
      "question": "你會先怎樣確認彼此能接受的安排？",
      "twist": "",
      "deeperQuestion": "家裡有甚麼界線，是你希望客人知道的？"
    }
  },
  {
    "id": "ponder-v4-couple-025",
    "category": "Couple",
    "emoji": "💗",
    "title": "Breakfast after a row",
    "scenario": "You went to bed with a disagreement unresolved. In the morning your partner makes your favourite breakfast without mentioning it, while you still feel bothered.",
    "question": "How would you want breakfast to begin?",
    "twist": "",
    "deeperQuestion": "Can you receive a small peace offering before talking things through?",
    "zh": {
      "title": "吵架後的早餐",
      "scenario": "昨晚你們有分歧，未完全談妥就睡了。早上對方煮了你喜歡的早餐，卻沒有提起昨晚；你也還有一點介意。",
      "question": "你希望這頓早餐怎樣開始？",
      "twist": "",
      "deeperQuestion": "小小示好對你有幫助，還是先談清楚你才接收得到？"
    }
  },
  {
    "id": "ponder-v4-couple-026",
    "category": "Couple",
    "emoji": "💗",
    "title": "Beginners together",
    "scenario": "You get two places in a course for something neither of you can do. There is no exam, but you attend weekly for six weeks.",
    "question": "What would you learn, and what kind of classmate would you be?",
    "twist": "",
    "deeperQuestion": "When you struggle, do you want help, shared laughter or space to try?",
    "zh": {
      "title": "共同學一件事",
      "scenario": "你們得到兩張課程券，可以一起學一件雙方都不擅長的事。沒有考試，但六星期內每週都要去一次。",
      "question": "你想一起學甚麼？你預計自己會是哪種同學？",
      "twist": "",
      "deeperQuestion": "你做不好時，希望對方幫忙、陪你笑，還是先讓你自己試？"
    }
  },
  {
    "id": "ponder-v4-couple-027",
    "category": "Couple",
    "emoji": "💗",
    "title": "Different walking speeds",
    "scenario": "On a trip, one of you stops at little shops while the other wants to reach the destination before dark. There is time, yet you keep hurrying each other.",
    "question": "How would you finish the walk so both can enjoy it?",
    "twist": "",
    "deeperQuestion": "In everyday life, where would you like your partner to slow down with you?",
    "zh": {
      "title": "兩個人的步速",
      "scenario": "你們旅行散步，一個喜歡停下看小店，另一個想趁天黑前走到目的地。今天時間足夠，但一路已經互相催了幾次。",
      "question": "你想怎樣走完這段路，兩人都能享受？",
      "twist": "",
      "deeperQuestion": "日常生活裡，你最希望對方在哪件事上跟你慢一點？"
    }
  },
  {
    "id": "ponder-v4-couple-028",
    "category": "Couple",
    "emoji": "💗",
    "title": "Private good news",
    "scenario": "You have happy news that is ready to share. You want to tell friends immediately; your partner wants a week when only you two know.",
    "question": "How would you choose when and whom to tell?",
    "twist": "",
    "deeperQuestion": "What matters to you about sharing good news?",
    "zh": {
      "title": "不公開的好消息",
      "scenario": "你們有件開心事，已經可以公開。你想立即告訴朋友，伴侶卻想先保留一星期，只屬於兩個人。",
      "question": "你希望怎樣安排分享的時間和對象？",
      "twist": "",
      "deeperQuestion": "把喜事告訴別人，對你最重要的是甚麼？"
    }
  },
  {
    "id": "ponder-v4-couple-029",
    "category": "Couple",
    "emoji": "💗",
    "title": "No decisions tonight",
    "scenario": "A restaurant plans the whole evening, from food and seats to an after-dinner activity. Your partner welcomes the break, while you worry it may not suit you.",
    "question": "Which decisions would you gladly hand over?",
    "twist": "",
    "deeperQuestion": "Who usually makes the small decisions, and do they enjoy it?",
    "zh": {
      "title": "今天不做決定",
      "scenario": "有間餐廳替客人安排整晚，菜式、座位和飯後活動都不用選。伴侶覺得終於可以休息，你卻怕安排不合心意。",
      "question": "你願意把哪些決定交出去？",
      "twist": "",
      "deeperQuestion": "你們平常誰負責最多小決定？那個人喜歡嗎？"
    }
  },
  {
    "id": "ponder-v4-couple-030",
    "category": "Couple",
    "emoji": "💗",
    "title": "The moving voucher",
    "scenario": "You can move to any city for a year without changing your income. You can still see family and friends, but visits will take planning and travel.",
    "question": "Would you move somewhere or stay where you are?",
    "twist": "",
    "deeperQuestion": "What is hardest to leave: someone, a way of life or a sense of security?",
    "zh": {
      "title": "神奇搬運券",
      "scenario": "你們可以免費搬到任何一個城市住一年，工作收入維持不變。搬完仍能見家人朋友，但每次都要花時間安排行程。",
      "question": "你想搬去哪裡，還是留在原地？",
      "twist": "",
      "deeperQuestion": "你最難搬走的，是一個人、一種生活，還是某份安心？"
    }
  },
  {
    "id": "ponder-v4-couple-031",
    "category": "Couple",
    "emoji": "💗",
    "title": "The late pass",
    "scenario": "You each receive one pass to arrive thirty minutes late without blame. You must give notice and plan something for the other person's wait.",
    "question": "How would you make the wait feel considerate?",
    "twist": "",
    "deeperQuestion": "Does lateness bother you because of time, worry or feeling unimportant?",
    "zh": {
      "title": "約會遲到券",
      "scenario": "你們各拿到一張遲到券，可以在一次約會遲到半小時，不被責怪。唯一要求是提早說，並安排好對方等待的時間。",
      "question": "你會怎樣安排，讓等待也有被照顧的感覺？",
      "twist": "",
      "deeperQuestion": "遲到最令你介意的，是時間、擔心，還是覺得不被重視？"
    }
  },
  {
    "id": "ponder-v4-couple-032",
    "category": "Couple",
    "emoji": "💗",
    "title": "A clear-out together",
    "scenario": "You need to clear one cupboard. It holds things you no longer use but treasure, including keepsakes your partner thinks could go.",
    "question": "Which object would you first tell your partner about?",
    "twist": "",
    "deeperQuestion": "Would knowing its story change how you feel about keeping it?",
    "zh": {
      "title": "收藏清理日",
      "scenario": "你們要清出一個櫃子。裡面有你不再用、卻很捨不得的東西，也有伴侶覺得可以丟掉的舊紀念品。",
      "question": "你會挑哪件東西，先跟對方講它的故事？",
      "twist": "",
      "deeperQuestion": "知道一件物品的來歷，會改變你對保留它的看法嗎？"
    }
  },
  {
    "id": "ponder-v4-couple-033",
    "category": "Couple",
    "emoji": "💗",
    "title": "A blank menu",
    "scenario": "At a restaurant, you each order for the other without asking their preference today. You may choose a comforting favourite or something new worth trying.",
    "question": "What would you order for your partner?",
    "twist": "",
    "deeperQuestion": "Would you rather they know your favourites or introduce new things?",
    "zh": {
      "title": "一張空白菜單",
      "scenario": "餐廳讓你們各替對方點一餐，不能先問今天想吃甚麼。可以點熟悉的安慰食物，也可以選你覺得值得試的新菜。",
      "question": "你會替對方點甚麼？",
      "twist": "",
      "deeperQuestion": "你希望對方了解你的固定喜好，還是常帶你試新東西？"
    }
  },
  {
    "id": "ponder-v4-couple-034",
    "category": "Couple",
    "emoji": "💗",
    "title": "Our little team",
    "scenario": "In a team challenge, one person sees the map but cannot move. The other moves without seeing the route. You have ten minutes and one chance to swap.",
    "question": "Which role would you take first, and how would you communicate?",
    "twist": "",
    "deeperQuestion": "What tone helps you take a reminder well?",
    "zh": {
      "title": "戀人小隊",
      "scenario": "你們參加合作闖關，一人看得到地圖但不能走，另一人負責走卻看不到路。限時十分鐘，中途可以交換一次角色。",
      "question": "你想先做哪個角色？會怎樣跟對方溝通？",
      "twist": "",
      "deeperQuestion": "你覺得被提醒時，怎樣的語氣最容易聽進去？"
    }
  },
  {
    "id": "ponder-v4-couple-035",
    "category": "Couple",
    "emoji": "💗",
    "title": "An unexpected free evening",
    "scenario": "Both your plans are cancelled, leaving you at home. Your partner sees an unexpected date, while you have been longing for an evening to yourself.",
    "question": "How would you explain what you hoped for tonight?",
    "twist": "",
    "deeperQuestion": "How could you ask for solitude without making it feel like rejection?",
    "zh": {
      "title": "意外空出的晚上",
      "scenario": "你們各自的安排同時取消，突然都在家。對方想把它當成臨時約會，你卻一直想有一晚不用陪任何人。",
      "question": "你會怎樣說出今晚的期待？",
      "twist": "",
      "deeperQuestion": "你需要獨處時，哪句話能讓對方知道不是被拒絕？"
    }
  },
  {
    "id": "ponder-v4-couple-036",
    "category": "Couple",
    "emoji": "💗",
    "title": "Your neighbourhood tour",
    "scenario": "Your partner has half a day in the place where you grew up. Skip tourist sights and show them three small places from your own life.",
    "question": "Which three places would you choose?",
    "twist": "",
    "deeperQuestion": "Which place helps explain a habit you still have?",
    "zh": {
      "title": "你來當導遊",
      "scenario": "伴侶可以到你長大的地方走半天。熱門景點全部跳過，你只能帶對方去三個跟自己有關的小地方。",
      "question": "你會選哪三個地方？",
      "twist": "",
      "deeperQuestion": "哪個地方最能解釋你現在的一個習慣？"
    }
  },
  {
    "id": "ponder-v4-couple-037",
    "category": "Couple",
    "emoji": "💗",
    "title": "Different celebrations",
    "scenario": "You achieve something difficult, and your partner gathers friends to celebrate. You are touched, but had hoped for a quiet meal for two.",
    "question": "How would you receive the gesture and explain your preference?",
    "twist": "",
    "deeperQuestion": "When does a crowd add to your joy, and when does it tire you?",
    "zh": {
      "title": "不一樣的慶祝",
      "scenario": "你完成了一件很難的事，伴侶替你約了一桌朋友慶祝。你很感動，卻原本只想跟對方安靜吃一頓飯。",
      "question": "你會怎樣享受這份心意，也說出自己的偏好？",
      "twist": "",
      "deeperQuestion": "甚麼情況下，熱鬧會讓你更開心；甚麼時候反而累？"
    }
  },
  {
    "id": "ponder-v4-couple-038",
    "category": "Couple",
    "emoji": "💗",
    "title": "A postcard for later",
    "scenario": "You each write a postcard to yourselves together five years from now. You may include hopes, but not housing, income or career achievements.",
    "question": "What would you remind your future selves to keep?",
    "twist": "",
    "deeperQuestion": "What small habit already helps you do that?",
    "zh": {
      "title": "未寄出的明信片",
      "scenario": "你們各寫一張明信片，寄給五年後仍在一起的自己。可以寫願望，但不能寫房子、收入或工作成就。",
      "question": "你最想提醒未來的你們保留甚麼？",
      "twist": "",
      "deeperQuestion": "現在有甚麼小習慣，已經在幫你們做到這件事？"
    }
  },
  {
    "id": "ponder-v4-couple-039",
    "category": "Couple",
    "emoji": "💗",
    "title": "The last episode",
    "scenario": "You have one episode left in a series watched together. Your partner watches ahead out of curiosity and promises no spoilers. You had looked forward to sharing the ending.",
    "question": "How much would it bother you, and what would you say?",
    "twist": "",
    "deeperQuestion": "When does an individual interest become a shared agreement?",
    "zh": {
      "title": "共同追劇的最後一集",
      "scenario": "你們一起追的劇只剩最後一集。對方先看了，說只是太好奇，而且保證不劇透；你原本很期待一起看結局。",
      "question": "你會介意到甚麼程度？會怎樣說？",
      "twist": "",
      "deeperQuestion": "一件事何時會從「各自的興趣」變成「我們的約定」？"
    }
  },
  {
    "id": "ponder-v4-couple-040",
    "category": "Couple",
    "emoji": "💗",
    "title": "Our happy list",
    "scenario": "You can protect three evenings next month from work and last-minute invitations. They need not involve going out or spending money.",
    "question": "How would you use those three evenings?",
    "twist": "",
    "deeperQuestion": "What kind of time together disappears first when you get busy?",
    "zh": {
      "title": "兩人的幸福清單",
      "scenario": "你們可以把下個月的三個晚上先圈起來，任何臨時工作或邀約都不能佔用。三晚不必都外出，也不必花錢。",
      "question": "你想怎樣分配這三晚？",
      "twist": "",
      "deeperQuestion": "你們有哪種相處，一忙起來就最容易消失？"
    }
  },
  {
    "id": "ponder-v4-couple-041",
    "category": "Couple",
    "emoji": "💗",
    "title": "Their other circle",
    "scenario": "At your partner's reunion, everyone keeps recalling stories you do not know. Your partner is delighted, but you cannot find a way into the conversation.",
    "question": "What small thing could your partner do to help you feel included?",
    "twist": "",
    "deeperQuestion": "If it were your circle, how would you introduce your partner?",
    "zh": {
      "title": "伴侶的陌生朋友圈",
      "scenario": "你第一次參加伴侶舊朋友的聚會，大家不停提你不知道的往事。伴侶很開心，你卻一直找不到加入的時機。",
      "question": "你希望伴侶做一件甚麼小事，幫你自在一點？",
      "twist": "",
      "deeperQuestion": "如果你是熟悉大家的那個人，你會怎樣介紹伴侶？"
    }
  },
  {
    "id": "ponder-v4-couple-042",
    "category": "Couple",
    "emoji": "💗",
    "title": "Our first plant",
    "scenario": "You share a plant: one keeps careful notes, the other waters by instinct. It struggles, and the florist suggests changing the routine rather than finding fault.",
    "question": "How would you reorganise its care?",
    "twist": "",
    "deeperQuestion": "When a shared task goes wrong, what would you most like to hear first?",
    "zh": {
      "title": "一起養的植物",
      "scenario": "你們共同照顧一盆植物，一人喜歡仔細記錄，一人憑感覺澆水。它長得不好，花店說先調整方法，不必找誰犯錯。",
      "question": "你想怎樣重新分工？",
      "twist": "",
      "deeperQuestion": "合作出問題時，你最需要對方先說哪一句？"
    }
  },
  {
    "id": "ponder-v4-couple-043",
    "category": "Couple",
    "emoji": "💗",
    "title": "One big purchase",
    "scenario": "This year you plan one lasting purchase. One wants a coffee machine, the other a comfortable sofa. They cost the same, and you have room for just one.",
    "question": "How would you decide beyond counting who uses it more?",
    "twist": "",
    "deeperQuestion": "What everyday comfort feels worth investing in?",
    "zh": {
      "title": "一年只買一次",
      "scenario": "你們決定今年只買一件較貴、能用很久的東西。一人看上咖啡機，一人想買舒服的沙發，價錢相同，空間只夠放一件。",
      "question": "你會用甚麼方法決定，而不只比誰用得多？",
      "twist": "",
      "deeperQuestion": "對你來說，生活中哪種舒服值得每天投資一點？"
    }
  },
  {
    "id": "ponder-v4-couple-044",
    "category": "Couple",
    "emoji": "💗",
    "title": "A side worth seeing",
    "scenario": "A photographer skips posed smiles and captures a moment your partner feels is unmistakably you. Your partner chooses the setting.",
    "question": "What scene do you think they would choose?",
    "twist": "",
    "deeperQuestion": "What side of you would you like them to notice more?",
    "zh": {
      "title": "想被看見的一面",
      "scenario": "你們參加一個拍照活動，攝影師不拍擺好的笑容，只拍伴侶覺得「這就是你」的一個時刻。場景由伴侶選。",
      "question": "你猜對方會選甚麼場面？",
      "twist": "",
      "deeperQuestion": "有哪一面的你，希望對方多看見一點？"
    }
  },
  {
    "id": "ponder-v4-couple-045",
    "category": "Couple",
    "emoji": "💗",
    "title": "Our busy-season promise",
    "scenario": "One of you faces a very busy month. Long daily conversations are unrealistic, but you can agree on one small thing to keep doing.",
    "question": "What promise would you most want to keep?",
    "twist": "",
    "deeperQuestion": "If you miss it one day, what message would reassure you?",
    "zh": {
      "title": "忙季的約定",
      "scenario": "接下來一個月，你們其中一人會特別忙。不能保證每天長聊，但可以先約好一件再忙也做得到的事。",
      "question": "你最想保留哪個約定？",
      "twist": "",
      "deeperQuestion": "如果某天也做不到，怎樣補一句會讓你安心？"
    }
  },
  {
    "id": "ponder-v4-couple-046",
    "category": "Couple",
    "emoji": "💗",
    "title": "The secret surprise",
    "scenario": "Your partner plans a surprise and keeps stepping away for calls. You do not know why and feel uneasy, while they want to preserve the surprise.",
    "question": "How could they reassure you without revealing the surprise?",
    "twist": "",
    "deeperQuestion": "What needs to be agreed in advance for a surprise to feel good?",
    "zh": {
      "title": "偷偷準備的驚喜",
      "scenario": "伴侶準備了一個驚喜，最近總是避開你講電話。你還不知道原因，開始有點不安；對方又很想保密到最後。",
      "question": "你希望對方在不揭曉內容下，怎樣讓你放心？",
      "twist": "",
      "deeperQuestion": "你喜歡的驚喜，通常需要哪些事先說好？"
    }
  },
  {
    "id": "ponder-v4-couple-047",
    "category": "Couple",
    "emoji": "💗",
    "title": "Our first date, again",
    "scenario": "You can redesign your first date using what you now know about each other. There will still be some nerves, but you need not act like your younger selves.",
    "question": "Would you change the place or activity, or keep it as it was?",
    "twist": "",
    "deeperQuestion": "What did you wrongly assume mattered to them at first?",
    "zh": {
      "title": "重選第一次約會",
      "scenario": "你們可以用現在對彼此的了解，重新安排第一次約會。當天仍然會有一點陌生和緊張，但不必模仿當年的自己。",
      "question": "你會換地點、換活動，還是保留原本安排？",
      "twist": "",
      "deeperQuestion": "當時你以為對方在意甚麼，後來才發現猜錯了？"
    }
  },
  {
    "id": "ponder-v4-couple-048",
    "category": "Couple",
    "emoji": "💗",
    "title": "Quiet contributions",
    "scenario": "A tool lists every household task for a week, including birthdays, restocking and booking repairs. You see the complete list for the first time.",
    "question": "Which entry do you think would surprise you most?",
    "twist": "",
    "deeperQuestion": "What would you take full responsibility for rather than merely remind them about?",
    "zh": {
      "title": "看不見的功勞",
      "scenario": "有個小工具把一星期的家務全部列出，連記住生日、補買用品、安排維修也計算。你們第一次看見完整清單。",
      "question": "你猜哪一項最可能讓你驚訝？",
      "twist": "",
      "deeperQuestion": "你想接手哪一件，而不是只提醒對方記得做？"
    }
  },
  {
    "id": "ponder-v4-couple-049",
    "category": "Couple",
    "emoji": "💗",
    "title": "Two hours early",
    "scenario": "You finish airport formalities two hours early. One wants to browse shops, the other to sit quietly. Neither has anything essential to do.",
    "question": "Would you stay together or meet again before boarding?",
    "twist": "",
    "deeperQuestion": "What do you enjoy sharing after doing something separately?",
    "zh": {
      "title": "意外多出的兩小時",
      "scenario": "你們提早兩小時到機場，辦妥手續後不用再趕。有人想逛商店，有人想找座位發呆，大家都沒有非做不可的事。",
      "question": "你想一起消磨時間，還是約好登機前再見？",
      "twist": "",
      "deeperQuestion": "分開活動後，你最喜歡跟對方分享甚麼？"
    }
  },
  {
    "id": "ponder-v4-couple-050",
    "category": "Couple",
    "emoji": "💗",
    "title": "The sound of home",
    "scenario": "A new sound system reaches every room. You enjoy background music, while your partner rests best in silence, and you are often home together.",
    "question": "How would you make home comfortable for both of you?",
    "twist": "",
    "deeperQuestion": "What sound says “home” to you?",
    "zh": {
      "title": "家裡的背景聲",
      "scenario": "你們得到一套音響，音樂能傳到每個房間。你喜歡家裡有聲音，伴侶卻覺得安靜才能休息，兩人又常同時在家。",
      "question": "你會怎樣安排，讓家對兩人都舒服？",
      "twist": "",
      "deeperQuestion": "你心目中「回到家」的聲音是甚麼？"
    }
  },
  {
    "id": "ponder-v4-couple-051",
    "category": "Couple",
    "emoji": "💗",
    "title": "A specific compliment",
    "scenario": "For one day, you cannot say “You're wonderful” or “I love you.” Instead, show appreciation with one concrete example, however small.",
    "question": "What would you mention that your partner has done?",
    "twist": "",
    "deeperQuestion": "What feels especially meaningful to have someone notice about you?",
    "zh": {
      "title": "把讚美說清楚",
      "scenario": "你們玩一個小遊戲：今天不能說「你好好」或「我愛你」，只能用一個具體例子表達欣賞。例子不用是甚麼大事。",
      "question": "你最想提起對方做過哪件事？",
      "twist": "",
      "deeperQuestion": "哪種被看見的感覺，對你特別重要？"
    }
  },
  {
    "id": "ponder-v4-couple-052",
    "category": "Couple",
    "emoji": "💗",
    "title": "Familiar or new",
    "scenario": "Your next date could be a favourite restaurant or a free meal at a new place with mixed reviews. You are tired this week but have not tried anything new lately.",
    "question": "Which would you choose today?",
    "twist": "",
    "deeperQuestion": "When do you most need familiarity, and when do you want novelty?",
    "zh": {
      "title": "熟悉與新鮮",
      "scenario": "下次約會可以去你們百吃不厭的小店，也可以免費試一間評價兩極的新餐廳。這週你們都累，但也很久沒試新東西。",
      "question": "你今天會選哪個？",
      "twist": "",
      "deeperQuestion": "甚麼時候你最需要熟悉，甚麼時候最想有驚喜？"
    }
  },
  {
    "id": "ponder-v4-couple-053",
    "category": "Couple",
    "emoji": "💗",
    "title": "An ordinary tomorrow",
    "scenario": "You can watch one ordinary day of your life together ten years from now, with no birthday, holiday or milestone. It runs from waking to lights out.",
    "question": "What small detail would you most hope to see?",
    "twist": "",
    "deeperQuestion": "What could you start now to make that scene more likely?",
    "zh": {
      "title": "最普通的明天",
      "scenario": "你們看見十年後一起生活的一天，沒有生日、假期或特別成就。畫面只會從早上起床播到晚上熄燈。",
      "question": "你最希望在畫面裡看見哪個小細節？",
      "twist": "",
      "deeperQuestion": "哪一件事你們現在就能開始，讓那個畫面更可能出現？"
    }
  },
  {
    "id": "ponder-v4-couple-054",
    "category": "Couple",
    "emoji": "💗",
    "title": "A pause signal",
    "scenario": "You each get a small light meaning “I cannot talk right now, but I am not angry with you.” It lasts thirty minutes; afterwards you still need to speak.",
    "question": "When would you use the light?",
    "twist": "",
    "deeperQuestion": "What would you want your partner to ask when it goes out?",
    "zh": {
      "title": "休息的小暗號",
      "scenario": "你們得到一對小燈，按一下就表示「我現在沒力氣說話，但不是生你的氣」。燈會亮半小時，之後還是需要自己開口。",
      "question": "你想在甚麼時候用這盞燈？",
      "twist": "",
      "deeperQuestion": "燈熄掉後，你希望對方先問甚麼？"
    }
  },
  {
    "id": "ponder-v4-couple-055",
    "category": "Couple",
    "emoji": "💗",
    "title": "Well-meant advice",
    "scenario": "Relatives give you renovation money and many style suggestions. Your partner wants to honour their help, but you dislike the colours they recommend.",
    "question": "How would you decide together which suggestions to use?",
    "twist": "",
    "deeperQuestion": "Does accepting help make you feel obliged to agree afterwards?",
    "zh": {
      "title": "家人的建議",
      "scenario": "家人送你們一筆裝修費，也附上很多風格建議。伴侶很感謝，想盡量照做；你卻不喜歡那些顏色。",
      "question": "你會怎樣一起決定哪些建議採用？",
      "twist": "",
      "deeperQuestion": "接受幫助後，你會容易覺得自己欠了一個答應嗎？"
    }
  },
  {
    "id": "ponder-v4-couple-056",
    "category": "Couple",
    "emoji": "💗",
    "title": "Room for different tastes",
    "scenario": "You receive single tickets to two events on the same evening: your dream performance and your partner's ideal workshop. Neither ticket can be exchanged or duplicated.",
    "question": "Would you go separately or make another plan together?",
    "twist": "",
    "deeperQuestion": "How much separate experience feels right in a relationship?",
    "zh": {
      "title": "不必共同喜歡",
      "scenario": "你們免費獲得兩張不同活動的票，同晚舉行：一張是你很想看的演出，一張是伴侶很想上的工作坊。票不能換，也沒有第二張。",
      "question": "你會各自去，還是一起另外安排？",
      "twist": "",
      "deeperQuestion": "你覺得一段關係裡，有多少各自精彩的生活剛剛好？"
    }
  },
  {
    "id": "ponder-v4-couple-057",
    "category": "Couple",
    "emoji": "💗",
    "title": "A market treasure",
    "scenario": "At a market, you find an impractical object you love and can afford from your own budget. Your partner laughs and asks what you would use it for.",
    "question": "How would you explain why you like it?",
    "twist": "",
    "deeperQuestion": "What preference of theirs do you respect without understanding it?",
    "zh": {
      "title": "二手市集的寶物",
      "scenario": "逛市集時，你看上一件不實用但很喜歡的舊物。價錢在你的私人預算內，伴侶卻笑說：「買來做甚麼？」",
      "question": "你想怎樣解釋自己喜歡它的理由？",
      "twist": "",
      "deeperQuestion": "對方有沒有一種喜好，是你不懂但願意尊重的？"
    }
  },
  {
    "id": "ponder-v4-couple-058",
    "category": "Couple",
    "emoji": "💗",
    "title": "Passing your workplace",
    "scenario": "Your partner finishes early and surprises you outside work with a snack. You are pleased, but have tasks left and dislike keeping someone waiting.",
    "question": "How would you like the surprise to play out?",
    "twist": "",
    "deeperQuestion": "When does an unexpected visit feel lovely, and when does it add pressure?",
    "zh": {
      "title": "剛好路過你公司",
      "scenario": "伴侶提前下班，突然到你公司樓下，帶了點心想接你。你很開心，但手上仍有工作，也不喜歡讓人等。",
      "question": "你希望這個驚喜怎樣收尾？",
      "twist": "",
      "deeperQuestion": "甚麼樣的臨時探望會讓你開心，甚麼樣會造成壓力？"
    }
  },
  {
    "id": "ponder-v4-couple-059",
    "category": "Couple",
    "emoji": "💗",
    "title": "Caring for a day",
    "scenario": "A relative asks you to care for a child one afternoon, leaving clear instructions and staying reachable. You plan food, play and rest without relying entirely on screens.",
    "question": "What would you handle, and what would you ask your partner to do?",
    "twist": "",
    "deeperQuestion": "What strength does that division reveal in your partner?",
    "zh": {
      "title": "一起當新手家長",
      "scenario": "親友請你們照顧孩子一個下午，已留下清楚說明，也隨時接電話。你們要安排吃東西、遊戲和休息，不能只靠螢幕。",
      "question": "你想負責哪一部分，哪一部分想交給伴侶？",
      "twist": "",
      "deeperQuestion": "這個分工讓你發現對方哪種長處？"
    }
  },
  {
    "id": "ponder-v4-couple-060",
    "category": "Couple",
    "emoji": "💗",
    "title": "Ask me this",
    "scenario": "A café invites you to write a question for your partner, with no yes-or-no answers. Choose something you want to discuss but rarely find an opening for.",
    "question": "What question would you place on the table?",
    "twist": "",
    "deeperQuestion": "If their answer surprised you, how would you want to follow it up?",
    "zh": {
      "title": "最想被問的一題",
      "scenario": "有間咖啡店讓你們自己出題給對方，不准問是非題。你可以揀一件自己很想聊、卻通常沒有機會開始的事。",
      "question": "你會把哪條問題放到桌上？",
      "twist": "",
      "deeperQuestion": "如果對方回答得跟你預期不同，你最想怎樣接下去？"
    }
  },
  {
    "id": "ponder-v4-couple-061",
    "category": "Couple",
    "emoji": "💗",
    "title": "A meaningful invitation",
    "scenario": "Your partner is invited to a meaningful unpaid project taking weekends for two months. Your finances are fine, but your time together will shrink.",
    "question": "How would you support them and express your needs?",
    "twist": "",
    "deeperQuestion": "What shared thing would you want them to remember while pursuing a passion?",
    "zh": {
      "title": "一份沒有薪水的邀請",
      "scenario": "伴侶獲邀參與一個很有意義的計劃，沒有酬勞，會用掉兩個月的週末。日常開支沒問題，但你們相處時間會少很多。",
      "question": "你會怎樣支持，又提出自己的需要？",
      "twist": "",
      "deeperQuestion": "你希望對方投入自己的熱情時，仍記得哪件兩人的事？"
    }
  },
  {
    "id": "ponder-v4-couple-062",
    "category": "Couple",
    "emoji": "💗",
    "title": "Introducing you",
    "scenario": "You introduce your partner to a friend who has never met them. You cannot mention work, appearance or simply say they treat you well; tell one small story.",
    "question": "What story would you tell?",
    "twist": "",
    "deeperQuestion": "What story do you think they would use to introduce you?",
    "zh": {
      "title": "寫給朋友的介紹",
      "scenario": "你要向一位從未見過伴侶的朋友介紹對方。不能說職業、外貌或「對我很好」，只能講一件小故事。",
      "question": "你會講哪一件事？",
      "twist": "",
      "deeperQuestion": "你猜伴侶會用甚麼故事介紹你？"
    }
  },
  {
    "id": "ponder-v4-couple-063",
    "category": "Couple",
    "emoji": "💗",
    "title": "The unfinished conversation",
    "scenario": "A box can hold an unfinished disagreement until an agreed time, freeing your minds meanwhile. When reopened, you both remember how you felt.",
    "question": "How long would you wait before reopening it?",
    "twist": "",
    "deeperQuestion": "What reassures you that talking later does not mean avoiding you?",
    "zh": {
      "title": "分歧的暫存盒",
      "scenario": "你們有個盒子，可以把未談完的分歧暫存到約定時間，期間不會一直想起。打開時，雙方仍記得自己的感受。",
      "question": "你會約多久後打開？",
      "twist": "",
      "deeperQuestion": "甚麼能讓你相信「遲一點談」不是「不想理」？"
    }
  },
  {
    "id": "ponder-v4-couple-064",
    "category": "Couple",
    "emoji": "💗",
    "title": "Your partner's rest day",
    "scenario": "You clear your partner's chores for a full day off. They say they would most like to go walking alone rather than spend it together.",
    "question": "What is your first feeling, and how would you respond?",
    "twist": "",
    "deeperQuestion": "What helps you feel close while giving them space?",
    "zh": {
      "title": "愛人的休息日",
      "scenario": "你可以替伴侶清空一天的雜事，讓對方完全休息。對方卻說最想一個人出去走走，而不是跟你一起過。",
      "question": "你第一個感覺是甚麼？會怎樣回應？",
      "twist": "",
      "deeperQuestion": "給對方空間時，你需要甚麼才能同時感到親近？"
    }
  },
  {
    "id": "ponder-v4-couple-065",
    "category": "Couple",
    "emoji": "💗",
    "title": "A little adventure",
    "scenario": "You win a free activity: singing one song onstage together. You like the challenge, while your partner dreads being watched. There is no penalty for declining.",
    "question": "What options would let both of you choose comfortably?",
    "twist": "",
    "deeperQuestion": "How do you tell encouragement from pressure?",
    "zh": {
      "title": "抽到小小冒險",
      "scenario": "你們抽中一項免費活動：要一起上台唱一首歌。你想挑戰一下，伴侶光想到被看就緊張；放棄也不會有損失。",
      "question": "你會提出怎樣的選擇，讓兩人都能自在決定？",
      "twist": "",
      "deeperQuestion": "鼓勵和勉強之間，你怎樣知道自己已經過界？"
    }
  },
  {
    "id": "ponder-v4-couple-066",
    "category": "Couple",
    "emoji": "💗",
    "title": "Replying at our own pace",
    "scenario": "You travel separately for three days. You like sending photos as you go; your partner prefers one evening catch-up. Neither is ignoring the other.",
    "question": "What would you agree on to avoid guessing?",
    "twist": "",
    "deeperQuestion": "Would you prefer a quick acknowledgement or a fuller reply later?",
    "zh": {
      "title": "回覆訊息的節奏",
      "scenario": "你們去不同地方旅行三天。你喜歡隨手分享照片，伴侶喜歡晚上一次過講；沒有人故意不理對方。",
      "question": "你希望先約好甚麼，避免亂猜？",
      "twist": "",
      "deeperQuestion": "收到一句簡短回覆和晚點收到完整分享，你較需要哪個？"
    }
  },
  {
    "id": "ponder-v4-couple-067",
    "category": "Couple",
    "emoji": "💗",
    "title": "A habit to change",
    "scenario": "You get three months of help building one shared habit, such as walking, budgeting, cooking or resting earlier. You can choose only one.",
    "question": "Which habit would you most like to make easier?",
    "twist": "",
    "deeperQuestion": "How could you remind them without becoming a supervisor?",
    "zh": {
      "title": "重新選一個習慣",
      "scenario": "你們可以免費請人幫忙建立一個共同習慣，持續三個月。可以是散步、記帳、做飯或早點休息，但只選一個。",
      "question": "你希望哪個習慣最先變得容易？",
      "twist": "",
      "deeperQuestion": "如果對方某天沒做到，你想怎樣提醒才不會像監督？"
    }
  },
  {
    "id": "ponder-v4-couple-068",
    "category": "Couple",
    "emoji": "💗",
    "title": "A familiar flavour",
    "scenario": "Your partner tries a childhood favourite of yours and dislikes it. They are polite but put down their chopsticks, and you still feel disappointed.",
    "question": "Were you hoping to share the flavour or something behind it?",
    "twist": "",
    "deeperQuestion": "How could they make you happy without liking the same dish?",
    "zh": {
      "title": "熟悉的味道",
      "scenario": "你有一道小時候很喜歡的食物，伴侶第一次吃卻不喜歡。對方沒有批評，只很誠實地放下筷子，你仍有點失落。",
      "question": "你想跟對方分享的是味道，還是味道背後的甚麼？",
      "twist": "",
      "deeperQuestion": "如果不能喜歡同一道菜，對方怎樣做仍會讓你開心？"
    }
  },
  {
    "id": "ponder-v4-couple-069",
    "category": "Couple",
    "emoji": "💗",
    "title": "Who we turn to",
    "scenario": "Imagine a problem you cannot solve together. You usually turn to family first; your partner would rather ask friends or a professional.",
    "question": "How would you choose whom to ask while respecting privacy?",
    "twist": "",
    "deeperQuestion": "What relationship details would you want discussed before sharing with others?",
    "zh": {
      "title": "我們的求助名單",
      "scenario": "你們假設一起遇上一件自己處理不了的麻煩，需要向外求助。你習慣先找家人，伴侶比較想找朋友或專業人士。",
      "question": "你會怎樣決定先找誰，也保留彼此的私隱？",
      "twist": "",
      "deeperQuestion": "關於兩人的事，有哪些內容你希望先商量才分享？"
    }
  },
  {
    "id": "ponder-v4-couple-070",
    "category": "Couple",
    "emoji": "💗",
    "title": "A wish without obligation",
    "scenario": "You each write a card saying “If possible, I would love you to join me for…” Writing it creates no obligation; it simply makes a wish known.",
    "question": "What would your card say?",
    "twist": "",
    "deeperQuestion": "Have you kept a wish quiet for fear of creating pressure?",
    "zh": {
      "title": "一張不必兌現的券",
      "scenario": "你們各寫一張「如果可以，我想你陪我……」的小券。寫出來不代表對方一定要答應，只是讓一個願望被知道。",
      "question": "你的券會寫甚麼？",
      "twist": "",
      "deeperQuestion": "有沒有一個願望，你因為怕給對方壓力而一直沒提？"
    }
  },
  {
    "id": "ponder-v4-couple-071",
    "category": "Couple",
    "emoji": "💗",
    "title": "Taking the slower route",
    "scenario": "You can reach a shared goal two years sooner with almost no holidays together, or later with a full day together each week. Basic needs are covered either way.",
    "question": "How would you weigh those two years?",
    "twist": "",
    "deeperQuestion": "What time together do you least want to keep postponing?",
    "zh": {
      "title": "一起遲一點成功",
      "scenario": "你們可以選一種未來：目標早兩年達成，但這段時間幾乎沒有共同休假；或慢兩年，卻每星期有完整一天相處。生活基本需要都能滿足。",
      "question": "你會怎樣衡量這兩年？",
      "twist": "",
      "deeperQuestion": "哪一種相處時間，是你最不想一直往後延的？"
    }
  },
  {
    "id": "ponder-v4-couple-072",
    "category": "Couple",
    "emoji": "💗",
    "title": "Before we leave",
    "scenario": "Before an important event, your nervous partner asks how they look. There is one small thing they could change, with five minutes remaining.",
    "question": "Would you reassure, suggest a change or ask what kind of response they want?",
    "twist": "",
    "deeperQuestion": "When nervous, do you want practical improvement or help feeling steady first?",
    "zh": {
      "title": "出門前的一句話",
      "scenario": "你們準備去一個重要場合，伴侶很緊張，問自己看起來怎樣。衣服確實有一個能調整的小地方，但剩下五分鐘。",
      "question": "你會先安慰、直接建議，還是問對方想聽甚麼？",
      "twist": "",
      "deeperQuestion": "你緊張時，希望伴侶幫你改善，還是先讓你穩下來？"
    }
  },
  {
    "id": "ponder-v4-couple-073",
    "category": "Couple",
    "emoji": "💗",
    "title": "Our friends' view",
    "scenario": "A friend films an unnoticed moment of you handling something ordinary together. You can choose one scene that best represents your relationship.",
    "question": "What would you hope the film shows you doing?",
    "twist": "",
    "deeperQuestion": "What good part of your relationship might outsiders overlook?",
    "zh": {
      "title": "從朋友眼中看我們",
      "scenario": "朋友拍了一段你們沒察覺的小影片，沒有特別浪漫，只是在一起處理普通事情。你可以選擇看一段最能代表你們的畫面。",
      "question": "你希望影片拍到你們在做甚麼？",
      "twist": "",
      "deeperQuestion": "旁人最容易忽略你們相處裡的哪個好？"
    }
  },
  {
    "id": "ponder-v4-couple-074",
    "category": "Couple",
    "emoji": "💗",
    "title": "One effortless agreement",
    "scenario": "You can make one recurring minor disagreement easy to coordinate forever. It cannot change anyone's personality, only one concrete issue.",
    "question": "What would you use it for?",
    "twist": "",
    "deeperQuestion": "What matters most to you underneath that small issue?",
    "zh": {
      "title": "永遠不吵的一件事",
      "scenario": "你們可以讓一件常有分歧的小事，從此不用吵也能自然協調。不能改變任何人的個性，只能處理一件具體事情。",
      "question": "你會把機會用在哪件事？",
      "twist": "",
      "deeperQuestion": "這件小事背後，你最在意的其實是甚麼？"
    }
  },
  {
    "id": "ponder-v4-couple-075",
    "category": "Couple",
    "emoji": "💗",
    "title": "A phone-free corner",
    "scenario": "You can make one corner of your home phone-free, only when you sit there together. Phones remain welcome everywhere else.",
    "question": "Where would it be, and what would you do there?",
    "twist": "",
    "deeperQuestion": "How do you usually signal that you want their full attention?",
    "zh": {
      "title": "一起放下手機的地方",
      "scenario": "你們可以把家中一個位置設成不用手機的角落。其他地方照常使用，而且只有兩人一起坐進去時才生效。",
      "question": "你想把它設在哪裡，通常用來做甚麼？",
      "twist": "",
      "deeperQuestion": "你希望對方專心聽你時，通常會怎樣示意？"
    }
  },
  {
    "id": "ponder-v4-couple-076",
    "category": "Couple",
    "emoji": "💗",
    "title": "Letting you help",
    "scenario": "You want to finish something yourself, and your partner offers help as you struggle. You trust their ability but find it hard to admit you need support.",
    "question": "How could they ask in a way that makes accepting easier?",
    "twist": "",
    "deeperQuestion": "What is hardest to let go of when accepting help?",
    "zh": {
      "title": "第一次讓你幫忙",
      "scenario": "你很想自己完成一件事，伴侶看見你忙亂，提出幫手。你知道對方做得來，卻有點難開口說自己需要幫忙。",
      "question": "對方怎樣問，會讓你比較容易接受？",
      "twist": "",
      "deeperQuestion": "對你來說，接受幫忙最難放下的是甚麼？"
    }
  },
  {
    "id": "ponder-v4-couple-077",
    "category": "Couple",
    "emoji": "💗",
    "title": "The reunion hour",
    "scenario": "After a month apart, you have just one hour together before other responsibilities. There is no time for a full dinner or an outing.",
    "question": "How would you most want to spend the hour?",
    "twist": "",
    "deeperQuestion": "What tiny part of being together do you miss most?",
    "zh": {
      "title": "重逢的一小時",
      "scenario": "你們分開一個月後重逢，當晚只得一小時見面，之後要各自處理事情。沒有時間安排一頓正式晚餐或長途出門。",
      "question": "你最想怎樣用這一小時？",
      "twist": "",
      "deeperQuestion": "你想念一個人時，最想念哪種很小的相處？"
    }
  },
  {
    "id": "ponder-v4-couple-078",
    "category": "Couple",
    "emoji": "💗",
    "title": "A name for us",
    "scenario": "You each choose a new contact name for the other, without real names, “baby” or emojis. It may come from a story only you share.",
    "question": "What name would you save for your partner?",
    "twist": "",
    "deeperQuestion": "What part of that story do you want to remember?",
    "zh": {
      "title": "一個新的稱呼",
      "scenario": "你們要替彼此存一個新聯絡人名稱，不能用本名、寶貝或表情符號。名字可以來自只有你們懂的小故事。",
      "question": "你會替對方存甚麼名字？",
      "twist": "",
      "deeperQuestion": "那個故事裡，有甚麼是你希望一直記得的？"
    }
  },
  {
    "id": "ponder-v4-couple-079",
    "category": "Couple",
    "emoji": "💗",
    "title": "Fifteen minutes before sleep",
    "scenario": "You have fifteen uninterrupted minutes before sleep. You could talk, cuddle, read separately or do nothing.",
    "question": "How would you want to spend them tonight?",
    "twist": "",
    "deeperQuestion": "At the end of a day, do you most need to be heard or simply accompanied?",
    "zh": {
      "title": "睡前十五分鐘",
      "scenario": "你們有一段不會被打擾的睡前時間，只有十五分鐘。可以聊天、抱一會兒、各自看書，或甚麼都不做。",
      "question": "今晚你最想怎樣過？",
      "twist": "",
      "deeperQuestion": "你想結束一天時，最需要被聽見，還是被陪著？"
    }
  },
  {
    "id": "ponder-v4-couple-080",
    "category": "Couple",
    "emoji": "💗",
    "title": "Our own holiday",
    "scenario": "You can add your own holiday to the calendar, with no gifts required. It may mark something that would seem unimportant to anyone else.",
    "question": "Which day would you choose, and what would you call it?",
    "twist": "",
    "deeperQuestion": "What small change in your relationship deserves celebrating?",
    "zh": {
      "title": "兩人的節日",
      "scenario": "你們可以在日曆加一個只屬於兩人的節日，當天不用送禮。它可以紀念一件別人不會覺得重要的小事。",
      "question": "你會選哪一天，怎樣命名？",
      "twist": "",
      "deeperQuestion": "你們有哪個微小轉變，其實值得慶祝？"
    }
  },
  {
    "id": "ponder-v4-couple-081",
    "category": "Couple",
    "emoji": "💗",
    "title": "A tiny business",
    "scenario": "You can run a weekend business for one month, with costs covered and profits for dates. You owe nothing if it fails.",
    "question": "What would you do, and how would you divide the work to enjoy it?",
    "twist": "",
    "deeperQuestion": "Which decisions would you most want your partner to trust you with?",
    "zh": {
      "title": "小本生意",
      "scenario": "你們可以合作做一個週末限定的小生意，成本有人負責，賺到的錢用來約會。只有一個月，失敗也不用賠錢。",
      "question": "你想做甚麼，怎樣分工才會好玩？",
      "twist": "",
      "deeperQuestion": "合作時，你最希望對方信任你決定哪一部分？"
    }
  },
  {
    "id": "ponder-v4-couple-082",
    "category": "Couple",
    "emoji": "💗",
    "title": "If our pet could talk",
    "scenario": "Imagine your shared pet can speak for one day about everyday things it notices. You may each ask one question.",
    "question": "What would you ask, and how might it describe you both?",
    "twist": "",
    "deeperQuestion": "How might your relationship look different from the outside?",
    "zh": {
      "title": "如果寵物會說話",
      "scenario": "假設你們一起照顧的寵物會說話一天，而且只會講平常觀察到的小事。你們可以各問牠一條問題。",
      "question": "你想問牠甚麼？猜牠會怎樣形容你們？",
      "twist": "",
      "deeperQuestion": "別人眼中你們的相處，跟你自己的感覺會有甚麼不同？"
    }
  },
  {
    "id": "ponder-v4-couple-083",
    "category": "Couple",
    "emoji": "💗",
    "title": "No presents this year",
    "scenario": "You agree on birthday time together instead of presents this year. Your partner nevertheless brings a thoughtful little gift, saying they could not resist.",
    "question": "Would you feel delighted or that the agreement had shifted?",
    "twist": "",
    "deeperQuestion": "What are you hoping to avoid when making an agreement like that?",
    "zh": {
      "title": "被取消的禮物規則",
      "scenario": "你們約好今年生日不送禮，用陪伴慶祝。生日當天，伴侶還是帶來一份精心挑的小禮物，笑說真的忍不住。",
      "question": "你會覺得驚喜，還是有一點打亂約定？",
      "twist": "",
      "deeperQuestion": "你訂下這種約定，最想避免的是甚麼？"
    }
  },
  {
    "id": "ponder-v4-couple-084",
    "category": "Couple",
    "emoji": "💗",
    "title": "Two ways to spend an hour",
    "scenario": "On your final travel evening, a favourite restaurant has an hour-long queue. The place next door has seats, leaving time for a riverside walk.",
    "question": "Would you save that hour for the food or something else together?",
    "twist": "",
    "deeperQuestion": "When does waiting for something stop feeling worthwhile to you?",
    "zh": {
      "title": "排隊的兩個選擇",
      "scenario": "旅行最後一晚，你們最想吃的小店要排一小時。旁邊另一間不用等，吃完還來得及到河邊散步。",
      "question": "你想把這一小時留給食物，還是一起做別的事？",
      "twist": "",
      "deeperQuestion": "你為一件事等多久會開始覺得不值得？"
    }
  },
  {
    "id": "ponder-v4-couple-085",
    "category": "Couple",
    "emoji": "💗",
    "title": "A guide for loving me",
    "scenario": "You each write a page titled “When I am tired.” Include only three small things that truly help, without asking the other to guess.",
    "question": "What are your three things?",
    "twist": "",
    "deeperQuestion": "Which is different from what your partner needs?",
    "zh": {
      "title": "一起寫的使用說明",
      "scenario": "你們各寫一頁簡單說明，標題是「我累的時候」。只能寫三個真的有幫助的小做法，不能要求對方猜。",
      "question": "你的三個做法是甚麼？",
      "twist": "",
      "deeperQuestion": "其中哪一項跟對方需要的剛好不同？"
    }
  },
  {
    "id": "ponder-v4-couple-086",
    "category": "Couple",
    "emoji": "💗",
    "title": "The group photo",
    "scenario": "After a gathering, you love a group photo, but your partner dislikes how they look in it. You had planned to post it.",
    "question": "How would you decide together?",
    "twist": "",
    "deeperQuestion": "What would you want checked before a shared moment is posted?",
    "zh": {
      "title": "朋友圈的合照",
      "scenario": "聚會後，朋友拍到一張你很喜歡的合照，伴侶卻不喜歡自己在照片裡的樣子。你本來想放上社交平台。",
      "question": "你會怎樣一起決定？",
      "twist": "",
      "deeperQuestion": "公開兩人生活時，有甚麼你希望對方先問一聲？"
    }
  },
  {
    "id": "ponder-v4-couple-087",
    "category": "Couple",
    "emoji": "💗",
    "title": "Dating in another city",
    "scenario": "You have a free evening in another city without must-see plans. You can follow a guidebook or take turns choosing directions at each corner.",
    "question": "Which way would you explore?",
    "twist": "",
    "deeperQuestion": "How much uncertainty do you enjoy around food, destinations or getting home?",
    "zh": {
      "title": "換一個城市的約會",
      "scenario": "你們在另一個城市有一晚空檔，沒有必去清單。可以按旅遊書走，也可以輪流在每個路口決定方向。",
      "question": "你會選哪種玩法？",
      "twist": "",
      "deeperQuestion": "你喜歡驚喜的範圍到哪裡：吃甚麼、去哪裡，還是連回程也不安排？"
    }
  },
  {
    "id": "ponder-v4-couple-088",
    "category": "Couple",
    "emoji": "💗",
    "title": "Your thank-you speech",
    "scenario": "At a little awards night, prizes celebrate everyday things such as helping people relax or remembering details. You may invent one for your partner.",
    "question": "What award and one-line tribute would you give?",
    "twist": "",
    "deeperQuestion": "When has that quality helped you?",
    "zh": {
      "title": "另一半的得獎感言",
      "scenario": "你們參加一場小頒獎禮，獎項都是日常的事，例如「最會讓人放鬆」或「最記得小細節」。你可以替伴侶設計一個獎。",
      "question": "你會頒甚麼獎，說哪一句頒獎詞？",
      "twist": "",
      "deeperQuestion": "這個優點曾在哪次相處幫到你？"
    }
  },
  {
    "id": "ponder-v4-couple-089",
    "category": "Couple",
    "emoji": "💗",
    "title": "Being bad at it together",
    "scenario": "At a craft class, both your creations turn out crooked. You may redo them, but your partner finds them funny and wants to keep them.",
    "question": "Would you start again or keep this version?",
    "twist": "",
    "deeperQuestion": "How much do the outcome and the shared experience each matter to you?",
    "zh": {
      "title": "一起不擅長",
      "scenario": "你們參加手作課，作品都歪歪斜斜。老師說可以重做，伴侶卻覺得現在這樣很好笑，想直接帶回家。",
      "question": "你會重做，還是留下這個版本？",
      "twist": "",
      "deeperQuestion": "你們一起做事，成果和過程對你各有多重要？"
    }
  },
  {
    "id": "ponder-v4-couple-090",
    "category": "Couple",
    "emoji": "💗",
    "title": "An apology that reaches me",
    "scenario": "A small disagreement is understood and your partner wants to apologise. They can talk face to face, write a message or first repair things through action.",
    "question": "Which would help you feel their sincerity first?",
    "twist": "",
    "deeperQuestion": "What wording helps you receive an apology, and what wording gets in the way?",
    "zh": {
      "title": "不一樣的道歉",
      "scenario": "你們的小摩擦已弄清楚，對方願意道歉。可以當面慢慢說、寫一段訊息，或先用行動補回，但你只能先選一種。",
      "question": "哪一種最容易讓你感受到誠意？",
      "twist": "",
      "deeperQuestion": "道歉裡，哪句話對你有用，哪句反而會讓你卡住？"
    }
  },
  {
    "id": "ponder-v4-couple-091",
    "category": "Couple",
    "emoji": "💗",
    "title": "A season for us",
    "scenario": "You can keep one day together in the same season each year. Weather and destination may change, but the promise stays.",
    "question": "Which season would you choose, and what would stay part of the day?",
    "twist": "",
    "deeperQuestion": "Do you enjoy traditions staying the same or changing a little each year?",
    "zh": {
      "title": "四季的約定",
      "scenario": "你們可以每年固定在同一季節留一天給彼此，天氣不一定好，也不用去同一個地方。它會變成一個長久的小約定。",
      "question": "你想選哪個季節，當天一定保留甚麼？",
      "twist": "",
      "deeperQuestion": "你喜歡傳統保持原樣，還是每年有一點變化？"
    }
  },
  {
    "id": "ponder-v4-couple-092",
    "category": "Couple",
    "emoji": "💗",
    "title": "Making room",
    "scenario": "A new hobby takes one evening a week. Your partner wants to join, while you had imagined having it to yourself and do not want to hurt them.",
    "question": "How would you explain what you hoped for?",
    "twist": "",
    "deeperQuestion": "What would you like to do separately and share afterwards?",
    "zh": {
      "title": "替對方留位置",
      "scenario": "你要開始一個新興趣，每週會佔用一晚。伴侶想加入，但你本來期待這是自己的時間，又不想讓對方失落。",
      "question": "你會怎樣介紹這份期待？",
      "twist": "",
      "deeperQuestion": "有甚麼事情你想各自做，再回來互相分享？"
    }
  },
  {
    "id": "ponder-v4-couple-093",
    "category": "Couple",
    "emoji": "💗",
    "title": "An unexpected bonus",
    "scenario": "You each get the same bonus to use freely. You buy an experience, while your partner saves theirs. Later, neither quite understands the other.",
    "question": "How would you explain your reason without grading their choice?",
    "twist": "",
    "deeperQuestion": "What childhood message about spending has stayed with you?",
    "zh": {
      "title": "同一筆意外收入",
      "scenario": "你們各獲得同額獎金，約定可以自由使用。你把錢花在體驗，伴侶存起來；月底聊起時，發現彼此都有點不理解。",
      "question": "你會怎樣說自己的理由，而不替對方的選擇打分？",
      "twist": "",
      "deeperQuestion": "你小時候聽過甚麼關於花錢的話，現在仍記得？"
    }
  },
  {
    "id": "ponder-v4-couple-094",
    "category": "Couple",
    "emoji": "💗",
    "title": "A joke's boundary",
    "scenario": "At a gathering, your partner jokes about a small habit of yours and everyone laughs. You know it is well meant, but feel sensitive about it that day.",
    "question": "How would you signal it then or explain it later?",
    "twist": "",
    "deeperQuestion": "What makes teasing feel comfortable for you?",
    "zh": {
      "title": "一句玩笑的界線",
      "scenario": "朋友聚會時，伴侶用你一個小習慣開玩笑，全桌都笑了。你知道沒有惡意，但那天剛好特別在意這件事。",
      "question": "你想當下怎樣示意，或之後怎樣說？",
      "twist": "",
      "deeperQuestion": "你覺得可以互相開玩笑的前提是甚麼？"
    }
  },
  {
    "id": "ponder-v4-couple-095",
    "category": "Couple",
    "emoji": "💗",
    "title": "Our everyday trailer",
    "scenario": "You can make a thirty-second film about your relationship using only ordinary days, with no holidays, birthdays or dressed-up portraits.",
    "question": "Which three scenes would you include?",
    "twist": "",
    "deeperQuestion": "Which scene seems small but feels most like you?",
    "zh": {
      "title": "平凡生活的預告片",
      "scenario": "你們可以剪一段三十秒影片介紹自己的關係，只准用普通日子的畫面，不能用旅行、生日或盛裝照片。",
      "question": "你會放進哪三個畫面？",
      "twist": "",
      "deeperQuestion": "哪個畫面最不起眼，卻最像你們？"
    }
  },
  {
    "id": "ponder-v4-couple-096",
    "category": "Couple",
    "emoji": "💗",
    "title": "Is now a good time?",
    "scenario": "You arrive home eager to share something while your partner is concentrating. It is not urgent, but you worry the desire to talk will fade.",
    "question": "How could they acknowledge you without stopping everything at once?",
    "twist": "",
    "deeperQuestion": "What makes “Give me ten minutes” feel worth waiting for?",
    "zh": {
      "title": "有空聽我說嗎",
      "scenario": "你帶著一件很想分享的事回家，伴侶正在做需要專心的工作。事情不緊急，但你怕等一下就沒了想講的興致。",
      "question": "你希望對方怎樣接住你，又不用立即放下所有事？",
      "twist": "",
      "deeperQuestion": "一句「等我十分鐘」後，甚麼會讓你真的願意等？"
    }
  },
  {
    "id": "ponder-v4-couple-097",
    "category": "Couple",
    "emoji": "💗",
    "title": "The wrong turn",
    "scenario": "Following one person's directions, you miss a planned activity. A nearby market offers another option, although nobody knows if it is any good.",
    "question": "What would you want your first words to each other to be?",
    "twist": "",
    "deeperQuestion": "What response helps you let go of frustration when plans go wrong?",
    "zh": {
      "title": "一起走錯路",
      "scenario": "你們照著其中一人的指路走錯，錯過了原定活動。附近剛好有個小市集，但沒有人能保證會好玩。",
      "question": "你希望你們接下來第一句說甚麼？",
      "twist": "",
      "deeperQuestion": "計劃出錯時，哪種反應最能幫你放下懊惱？"
    }
  },
  {
    "id": "ponder-v4-couple-098",
    "category": "Couple",
    "emoji": "💗",
    "title": "Questions, not advice",
    "scenario": "You take turns sharing a small concern. For five minutes the listener may ask questions but give no advice; afterwards the speaker chooses whether to hear suggestions.",
    "question": "What would you share, and what would you most like to be asked?",
    "twist": "",
    "deeperQuestion": "What makes a question feel understanding rather than interrogating?",
    "zh": {
      "title": "只問不建議",
      "scenario": "你們輪流講一件最近困擾自己的小事，另一人頭五分鐘只能問問題，不能給建議。時間到後，再由分享的人決定要不要聽辦法。",
      "question": "你會帶來哪件事，最希望被問甚麼？",
      "twist": "",
      "deeperQuestion": "怎樣的問題會讓你感到被了解，而不是被盤問？"
    }
  },
  {
    "id": "ponder-v4-couple-099",
    "category": "Couple",
    "emoji": "💗",
    "title": "Unplanned time",
    "scenario": "You can deliberately leave an afternoon blank next month. Decide on the day, even if that means resting separately.",
    "question": "Would that blank space feel exciting or unsettling?",
    "twist": "",
    "deeperQuestion": "How much certainty helps you feel comfortable with spontaneous changes?",
    "zh": {
      "title": "我們的共同留白",
      "scenario": "你們安排下個月的行事曆，可以故意留一個下午空白。到當天才決定做甚麼，甚至取消見面各自休息也可以。",
      "question": "留白會讓你期待，還是有點不安？",
      "twist": "",
      "deeperQuestion": "你需要多少確定的約定，才有餘裕接受臨時變化？"
    }
  },
  {
    "id": "ponder-v4-couple-100",
    "category": "Couple",
    "emoji": "💗",
    "title": "Still getting to know you",
    "scenario": "A shop gives you a blank book titled “Things I still don't know about you.” Add a page each month; it need not contain secrets or anything profound.",
    "question": "What would you begin the first page with?",
    "twist": "",
    "deeperQuestion": "What about you has changed since your partner first knew you?",
    "zh": {
      "title": "還想慢慢認識你",
      "scenario": "有間小店送你們一本空白書，封面寫著「關於你，我還不知道的事」。每月可以添一頁，不用是秘密，也不必很深刻。",
      "question": "你想第一頁從哪件事開始？",
      "twist": "",
      "deeperQuestion": "有哪個現在的你，跟對方剛認識時已經不一樣？"
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
    "id": "ponder-v4-family-004",
    "category": "Family",
    "emoji": "🏠",
    "title": "Our family restaurant",
    "scenario": "Your family opens a restaurant for one evening. Each person adds a dish, homemade or bought, that carries a story.",
    "question": "What dish would you add, and how would you introduce it?",
    "twist": "",
    "deeperQuestion": "Who in your family might not know that story?",
    "zh": {
      "title": "家庭餐廳",
      "scenario": "假設你家開一間只營業一晚的小餐廳，每人可以放一道菜上菜單。菜可以外買，重點是它跟你有一段故事。",
      "question": "你會放哪道菜，怎樣介紹它？",
      "twist": "",
      "deeperQuestion": "家人當中，誰可能不知道這段故事？"
    }
  },
  {
    "id": "ponder-v4-family-005",
    "category": "Family",
    "emoji": "🏠",
    "title": "Play it again",
    "scenario": "You have an afternoon free of chores. Everyone teaches a childhood game, with homemade props or adapted rules so different ages can join.",
    "question": "What game would you teach?",
    "twist": "",
    "deeperQuestion": "Who do you most remember playing it with, and why?",
    "zh": {
      "title": "重玩童年",
      "scenario": "你們有一個不用做家務的下午，每人輪流教一個小時候玩的遊戲。可以自製道具，也可以修改規則讓不同年紀都加入。",
      "question": "你會教甚麼遊戲？",
      "twist": "",
      "deeperQuestion": "你最記得當時跟誰一起玩，為甚麼？"
    }
  },
  {
    "id": "ponder-v4-family-006",
    "category": "Family",
    "emoji": "🏠",
    "title": "Our sound museum",
    "scenario": "Your family makes a sound exhibition with five noises from an ordinary day. No narration is allowed; the sounds speak for your home.",
    "question": "Which sound would you include?",
    "twist": "",
    "deeperQuestion": "Does it feel comforting, lively or something else?",
    "zh": {
      "title": "家裡的聲音博物館",
      "scenario": "你家要做一個只有聲音的小展覽，收錄普通一天裡的五種聲音。不能用旁白解釋，讓人一聽就感到這個家的樣子。",
      "question": "你最想收錄哪種聲音？",
      "twist": "",
      "deeperQuestion": "那個聲音讓你感到安心、熱鬧，還是有別的感覺？"
    }
  },
  {
    "id": "ponder-v4-family-007",
    "category": "Family",
    "emoji": "🏠",
    "title": "A day beside you",
    "scenario": "You may join a relative for one working day from their younger years without helping or interrupting. Afterwards, you can have dinner together.",
    "question": "Whom would you join, and what part of the day interests you?",
    "twist": "",
    "deeperQuestion": "What would you ask over dinner?",
    "zh": {
      "title": "跟家人去上班",
      "scenario": "你可以陪一位家人度過他年輕時的一個工作日，不用幫忙，也不會打擾。下班後，你們還能一起吃飯。",
      "question": "你想陪誰，最想看哪一段日常？",
      "twist": "",
      "deeperQuestion": "吃飯時，你最想問對方甚麼？"
    }
  },
  {
    "id": "ponder-v4-family-008",
    "category": "Family",
    "emoji": "🏠",
    "title": "One new house rule",
    "scenario": "Your household may try one new rule for a week, including its proposer. It should make life better for everyone, not just one person.",
    "question": "What rule would you suggest?",
    "twist": "",
    "deeperQuestion": "What would tell you whether to keep it after a week?",
    "zh": {
      "title": "全家的新規矩",
      "scenario": "你們可以試行一條新家規一星期，每個人都要遵守，包括提出的人。規矩必須令生活更舒服，不能只方便一個人。",
      "question": "你會提議哪條規矩？",
      "twist": "",
      "deeperQuestion": "一星期後，你會看甚麼來決定要不要留下它？"
    }
  },
  {
    "id": "ponder-v4-family-009",
    "category": "Family",
    "emoji": "🏠",
    "title": "An extra chair",
    "scenario": "There is an extra seat at dinner for someone important to you whom your family barely knows. They are happy to come, and the meal is ready.",
    "question": "Who would you invite, and what would you tell your family first?",
    "twist": "",
    "deeperQuestion": "What side of your family would you want them to see?",
    "zh": {
      "title": "多一張餐椅",
      "scenario": "今晚家裡多了一張餐椅，你可以邀請一個對你很重要、家人卻未熟悉的人來吃飯。對方願意來，飯也有人準備。",
      "question": "你想邀請誰，先向家人介紹對方甚麼？",
      "twist": "",
      "deeperQuestion": "你希望這個人看見你家哪一面？"
    }
  },
  {
    "id": "ponder-v4-family-010",
    "category": "Family",
    "emoji": "🏠",
    "title": "A first for everyone",
    "scenario": "You receive a voucher for something nobody in the family has tried. Costs are covered and the activity adapts to everyone's abilities, with no competition.",
    "question": "What would you suggest trying?",
    "twist": "",
    "deeperQuestion": "Who might be more adventurous than everyone expects?",
    "zh": {
      "title": "全家第一次",
      "scenario": "你們得到一張體驗券，活動必須是全家都未做過的。費用全包，也會按每個人的體力調整，不用比賽。",
      "question": "你會提議試甚麼？",
      "twist": "",
      "deeperQuestion": "家人當中，誰可能比大家想像中更勇於嘗試？"
    }
  },
  {
    "id": "ponder-v4-family-011",
    "category": "Family",
    "emoji": "🏠",
    "title": "A map of our family",
    "scenario": "You draw a family map of meaningful places rather than famous ones. Each person adds three points, then connects their routes.",
    "question": "Which three places would you add?",
    "twist": "",
    "deeperQuestion": "Where would you like a relative to take you again?",
    "zh": {
      "title": "我們的小地圖",
      "scenario": "你們要畫一張家庭地圖，地點不用有名，只要跟某位家人有關。每人可以畫三個點，再把彼此的路連起來。",
      "question": "你會把哪三個地方放上去？",
      "twist": "",
      "deeperQuestion": "有哪個地方，你想請家人帶你再走一次？"
    }
  },
  {
    "id": "ponder-v4-family-012",
    "category": "Family",
    "emoji": "🏠",
    "title": "The invisible helper",
    "scenario": "A little helper can take over one household task for a year, including less visible work such as budgeting, restocking or organising.",
    "question": "What would you ask it to take over?",
    "twist": "",
    "deeperQuestion": "What would its usual owner most like to do with the freed time?",
    "zh": {
      "title": "看不見的幫手",
      "scenario": "一個小幫手可以替全家完成一項家務一年，但只選一項。它也能做記帳、買日用品或安排事情這些不顯眼的工作。",
      "question": "你想請它接手甚麼？",
      "twist": "",
      "deeperQuestion": "平常做這件事的人，多出時間後最想做甚麼？"
    }
  },
  {
    "id": "ponder-v4-family-013",
    "category": "Family",
    "emoji": "🏠",
    "title": "The name behind the name",
    "scenario": "Everyone gets a new name tag and may choose a preferred name, different from the family's usual one. Today everyone uses the tags.",
    "question": "What would you write?",
    "twist": "",
    "deeperQuestion": "Which childhood nickname do you actually like or dislike?",
    "zh": {
      "title": "重新認識暱稱",
      "scenario": "你們各自拿到一張新名牌，可以寫喜歡的稱呼，不一定用家人平常叫你的名字。今天大家會照著名牌叫。",
      "question": "你會寫甚麼？",
      "twist": "",
      "deeperQuestion": "有哪個從小被叫的稱呼，你其實喜歡或不喜歡？"
    }
  },
  {
    "id": "ponder-v4-family-014",
    "category": "Family",
    "emoji": "🏠",
    "title": "The unwritten recipe",
    "scenario": "A familiar family dish has no written recipe, only someone's instinct. You can spend an afternoon making it together and recording the stories too.",
    "question": "What dish would you learn?",
    "twist": "",
    "deeperQuestion": "What would you ask about the life surrounding that dish?",
    "zh": {
      "title": "家傳食譜的空白",
      "scenario": "家裡一道熟悉的菜從來沒有完整食譜，只靠某位家人的手感。你可以花一個下午跟他一起做，記下味道以外的故事。",
      "question": "你想學哪道菜？",
      "twist": "",
      "deeperQuestion": "做菜時，你最想問哪一件跟那段生活有關的事？"
    }
  },
  {
    "id": "ponder-v4-family-015",
    "category": "Family",
    "emoji": "🏠",
    "title": "The youngest guide",
    "scenario": "For your next outing, the youngest family member plans half a day within agreed safety and budget limits. “We've been there before” is not a veto.",
    "question": "What might the itinerary include, and what would you look forward to?",
    "twist": "",
    "deeperQuestion": "When you lead, what choice would you hope others do not dismiss too quickly?",
    "zh": {
      "title": "小孩當導遊",
      "scenario": "這次家庭出遊，由最年輕的家人安排半天。預算和安全範圍已說好，其他人不能因為「以前去過」就否決。",
      "question": "你猜行程會有甚麼，自己最期待哪一站？",
      "twist": "",
      "deeperQuestion": "如果由你帶路，你希望家人不要太快否定哪種選擇？"
    }
  },
  {
    "id": "ponder-v4-family-016",
    "category": "Family",
    "emoji": "🏠",
    "title": "The blank television",
    "scenario": "Screens take a two-hour break tonight. You have paper, food and everyday furniture, and need not spend the whole time talking.",
    "question": "What would you start doing together?",
    "twist": "",
    "deeperQuestion": "What kind of time together feels close without much talking?",
    "zh": {
      "title": "把電視留白",
      "scenario": "今晚電視、手機和遊戲機一起放假兩小時，但家裡有紙筆、食物和普通家具。大家不用全程聊天，也可以一起動手。",
      "question": "你想發起甚麼活動？",
      "twist": "",
      "deeperQuestion": "哪一種相處不用講很多話，你也覺得親近？"
    }
  },
  {
    "id": "ponder-v4-family-017",
    "category": "Family",
    "emoji": "🏠",
    "title": "Pocket money across time",
    "scenario": "Each relative gets pocket money with the same purchasing power in their childhood era. Everyone returns with an object or a story.",
    "question": "How would you spend yours?",
    "twist": "",
    "deeperQuestion": "How do their childhood luxuries differ from today's?",
    "zh": {
      "title": "不同年代的零用錢",
      "scenario": "你們可以把同樣購買力的一筆零用錢送到不同年代，讓每位家人在童年花一次。每人回來帶一件東西或一個故事。",
      "question": "你猜自己會怎樣花？",
      "twist": "",
      "deeperQuestion": "家人小時候覺得奢侈的東西，現在有甚麼不同？"
    }
  },
  {
    "id": "ponder-v4-family-018",
    "category": "Family",
    "emoji": "🏠",
    "title": "A week under one roof",
    "scenario": "Relatives who usually live apart share a spacious home for a week, each with a room. You decide only which times are shared and which are separate.",
    "question": "What shared time would you most want to agree on?",
    "twist": "",
    "deeperQuestion": "What privacy would help you enjoy being together more?",
    "zh": {
      "title": "住在一起一週",
      "scenario": "平常分開住的家人可以一起住一星期，地方夠大，也各有房間。你們只需要先決定哪些時間一起，哪些各自安排。",
      "question": "你最想約好一個甚麼共同時段？",
      "twist": "",
      "deeperQuestion": "怎樣的私人空間，會令你更享受相聚？"
    }
  },
  {
    "id": "ponder-v4-family-019",
    "category": "Family",
    "emoji": "🏠",
    "title": "A different celebration",
    "scenario": "For the next family birthday, everyone offers a small experience instead of a gift. The birthday person picks two without pressure to accept all.",
    "question": "What would you offer?",
    "twist": "",
    "deeperQuestion": "If it were your birthday, what company would you most enjoy?",
    "zh": {
      "title": "換一個慶祝方式",
      "scenario": "家裡下一個生日不買禮物，改成每人提供一個小小體驗。主角可以挑兩項，不用因為怕失禮而全接受。",
      "question": "你會提供甚麼？",
      "twist": "",
      "deeperQuestion": "如果今天是你的生日，你最想收到哪種陪伴？"
    }
  },
  {
    "id": "ponder-v4-family-020",
    "category": "Family",
    "emoji": "🏠",
    "title": "Curiosity at dinner",
    "scenario": "Each person brings a genuinely curious dinner question, excluding grades, income and relationship milestones. Anyone may answer or pass.",
    "question": "What would you ask your family?",
    "twist": "",
    "deeperQuestion": "What kind of question makes you want to say more?",
    "zh": {
      "title": "飯桌的好奇心",
      "scenario": "今晚每人可以帶一條真正好奇的問題上飯桌，但不能問成績、收入或婚姻進度。其他人可以答，也可以換題。",
      "question": "你會問家人甚麼？",
      "twist": "",
      "deeperQuestion": "有沒有一種問題，會讓你比較想多說一點？"
    }
  },
  {
    "id": "ponder-v4-family-021",
    "category": "Family",
    "emoji": "🏠",
    "title": "An old object speaks",
    "scenario": "An old household object can speak for ten minutes about things it witnessed. You cannot choose only happy or sad stories.",
    "question": "Which object would you let speak?",
    "twist": "",
    "deeperQuestion": "What ordinary day would you hope it remembers?",
    "zh": {
      "title": "家裡的老物件",
      "scenario": "家中一件用了很久的物品可以說話十分鐘，只會講它親眼見過的事。你們不能指定它講開心或難過的部分。",
      "question": "你想讓哪件物品開口？",
      "twist": "",
      "deeperQuestion": "你希望它記得你們哪個普通日子？"
    }
  },
  {
    "id": "ponder-v4-family-022",
    "category": "Family",
    "emoji": "🏠",
    "title": "Teach me something",
    "scenario": "You each have twenty minutes to teach a small skill, from phone tools to folding clothes, photography or choosing fruit. It is not a contest.",
    "question": "What would you teach, and what would you learn from whom?",
    "twist": "",
    "deeperQuestion": "What teaching style makes you comfortable asking questions?",
    "zh": {
      "title": "教我一件你會的事",
      "scenario": "你們各有二十分鐘，教另一位家人一件自己會的小事。可以是手機功能、摺衣服、拍照或挑水果，不需要誰比較厲害。",
      "question": "你想教甚麼，又想跟誰學甚麼？",
      "twist": "",
      "deeperQuestion": "被教的時候，怎樣的說法最讓你願意問問題？"
    }
  },
  {
    "id": "ponder-v4-family-023",
    "category": "Family",
    "emoji": "🏠",
    "title": "A gentle detour",
    "scenario": "A wrong stop changes your outing, replacing the planned attraction with a park and little market. There is still plenty of time to get home.",
    "question": "Would you go back or explore what is here?",
    "twist": "",
    "deeperQuestion": "How can family help you relax when plans change?",
    "zh": {
      "title": "一起迷路的下午",
      "scenario": "家庭出遊走錯一站，附近沒有原本想看的景點，卻多出一個公園和小市場。回程時間仍充足，大家可以重新決定。",
      "question": "你會提議回原路，還是留下看看？",
      "twist": "",
      "deeperQuestion": "計劃被打亂時，家人怎樣回應最能令你放鬆？"
    }
  },
  {
    "id": "ponder-v4-family-024",
    "category": "Family",
    "emoji": "🏠",
    "title": "A letter without advice",
    "scenario": "You write to a younger relative about one experience, without ending with “So you should…” They decide what to take from it.",
    "question": "What experience would you share?",
    "twist": "",
    "deeperQuestion": "As the reader, what feeling from their younger years would you want to understand?",
    "zh": {
      "title": "一封沒有建議的信",
      "scenario": "你可以寫信給一位較年輕的家人，只分享一段自己的經歷，不能加「所以你應該」。對方可以自己決定拿走甚麼。",
      "question": "你想講哪段經歷？",
      "twist": "",
      "deeperQuestion": "如果你是收信的人，最想知道長輩當年哪種心情？"
    }
  },
  {
    "id": "ponder-v4-family-025",
    "category": "Family",
    "emoji": "🏠",
    "title": "A shared thousand",
    "scenario": "Your family receives HK$1,000 for something enjoyed together. You cannot divide the cash, but need not buy an object or go out.",
    "question": "How would you suggest using it?",
    "twist": "",
    "deeperQuestion": "What makes it enjoyable for everyone, beyond majority agreement?",
    "zh": {
      "title": "全家的一千元",
      "scenario": "有人送全家一千元，條件是用在一件能一起享受的事上。不能平均分錢，也不一定要買東西或出門。",
      "question": "你會提議怎樣用？",
      "twist": "",
      "deeperQuestion": "怎樣才算「大家都享受」，而不只是大部分人同意？"
    }
  },
  {
    "id": "ponder-v4-family-026",
    "category": "Family",
    "emoji": "🏠",
    "title": "A rule worth keeping",
    "scenario": "You write a little guide for a future household, keeping one current habit and revising another. Nobody has to defend the past.",
    "question": "What would you keep, and what would you rewrite?",
    "twist": "",
    "deeperQuestion": "When did the habit you would keep make you feel cared for?",
    "zh": {
      "title": "想留住的家規",
      "scenario": "你們要寫一本給未來家庭的小手冊，可以留下一條現在家裡的習慣，也可以把一條改寫。沒有人需要為過去辯護。",
      "question": "你想留下甚麼，又改寫甚麼？",
      "twist": "",
      "deeperQuestion": "你想保留的那條，曾在哪次讓你感到被照顧？"
    }
  },
  {
    "id": "ponder-v4-family-027",
    "category": "Family",
    "emoji": "🏠",
    "title": "An afternoon of their own",
    "scenario": "A relative who is always caring for others gets an afternoon without reporting their plans. You can prepare one thing but cannot choose where they go.",
    "question": "What would you prepare?",
    "twist": "",
    "deeperQuestion": "Do you know what they enjoy for themselves, or mostly what they do for family?",
    "zh": {
      "title": "父母的自由下午",
      "scenario": "一位總照顧別人的家人，終於有一個不用交代行程的下午。你可以替他準備一樣東西，但不能替他安排去哪裡。",
      "question": "你會準備甚麼？",
      "twist": "",
      "deeperQuestion": "你知道對方自己喜歡做甚麼，還是只熟悉他為家人做的事？"
    }
  },
  {
    "id": "ponder-v4-family-028",
    "category": "Family",
    "emoji": "🏠",
    "title": "Our own kind of home",
    "scenario": "You design a shared room without copying a typical living room. It might have a long table, floor cushions, a workbench or plants, but space is limited.",
    "question": "What would you include, and what would it let people do?",
    "twist": "",
    "deeperQuestion": "Is home's most important role rest, gathering or something else?",
    "zh": {
      "title": "沒有標準版本的家",
      "scenario": "你們可以設計一個理想的共同空間，不用模仿別人的客廳。可以有長桌、地墊、工作台或很多植物，但地方有限。",
      "question": "你最想放進哪一樣，讓大家做甚麼？",
      "twist": "",
      "deeperQuestion": "家對你最重要的功能，是休息、聚在一起，還是別的？"
    }
  },
  {
    "id": "ponder-v4-family-029",
    "category": "Family",
    "emoji": "🏠",
    "title": "A shelf of your own",
    "scenario": "Your fridge gains a shelf for each person to keep food they truly enjoy without adjusting to other tastes. You can introduce your choices without teasing.",
    "question": "What would you keep on your shelf?",
    "twist": "",
    "deeperQuestion": "Whose food preference have you not really noticed?",
    "zh": {
      "title": "每人的冰箱一格",
      "scenario": "家裡冰箱突然多了幾格，每人可以留一格放真正喜歡的食物，不用先遷就其他人口味。大家可以互相介紹，但不能取笑。",
      "question": "你會在自己的那格放甚麼？",
      "twist": "",
      "deeperQuestion": "家人有哪個口味，你一直沒留意？"
    }
  },
  {
    "id": "ponder-v4-family-030",
    "category": "Family",
    "emoji": "🏠",
    "title": "Before the photograph",
    "scenario": "An old family photo lets you see the ten minutes before it was taken. Everyone in it can describe how they actually felt.",
    "question": "Which photograph would you choose?",
    "twist": "",
    "deeperQuestion": "Has a family photo missed the part you most wanted to remember?",
    "zh": {
      "title": "舊相片的前十分鐘",
      "scenario": "你找到一張全家笑得很開心的舊照，可以看見拍照前十分鐘的情況。照片裡的人也能說出當時真正的心情。",
      "question": "你想挑哪張相片？",
      "twist": "",
      "deeperQuestion": "有沒有一次合照，照片沒拍到你最想記住的部分？"
    }
  },
  {
    "id": "ponder-v4-family-031",
    "category": "Family",
    "emoji": "🏠",
    "title": "Family radio",
    "scenario": "You record ten minutes of family radio for someone far away. Beyond news, everyone contributes a small sound or joke.",
    "question": "What would your segment be?",
    "twist": "",
    "deeperQuestion": "What little detail of home might they miss most?",
    "zh": {
      "title": "小小家庭電台",
      "scenario": "你們要錄一集十分鐘的家庭電台，送給遠方的家人。不能只報告近況，每人還要帶來一個小聲音或笑話。",
      "question": "你會負責哪一段？",
      "twist": "",
      "deeperQuestion": "遠方的人最可能想念家裡哪種細節？"
    }
  },
  {
    "id": "ponder-v4-family-032",
    "category": "Family",
    "emoji": "🏠",
    "title": "Trading requests",
    "scenario": "Everyone may make one small request for another person to accept voluntarily. No “You should know” or disguised commands are allowed.",
    "question": "How would you phrase yours?",
    "twist": "",
    "deeperQuestion": "Is asking directly or waiting to be noticed harder for you?",
    "zh": {
      "title": "互換一次求助",
      "scenario": "今天每位家人可以提出一個小請求，由另一人自願接下。不能說「你應該知道」，也不用把請求包裝成命令。",
      "question": "你會怎樣說出自己的請求？",
      "twist": "",
      "deeperQuestion": "直接開口和等人發現，哪個對你比較難？"
    }
  },
  {
    "id": "ponder-v4-family-033",
    "category": "Family",
    "emoji": "🏠",
    "title": "Five minutes at the door",
    "scenario": "A comfortable chair appears outside your home. Anyone returning may sit for five minutes without answering questions before joining everyone inside.",
    "question": "On what kind of day would you use it?",
    "twist": "",
    "deeperQuestion": "What greeting helps you settle after a busy day outside?",
    "zh": {
      "title": "門外的五分鐘",
      "scenario": "家門口多了一張舒服的椅子，回家的人可以先坐五分鐘，不用立即回應問題。坐完才走進家裡的熱鬧。",
      "question": "你會在甚麼日子用它？",
      "twist": "",
      "deeperQuestion": "家人怎樣迎接你，最能讓你從外面的節奏慢下來？"
    }
  },
  {
    "id": "ponder-v4-family-034",
    "category": "Family",
    "emoji": "🏠",
    "title": "A new interest",
    "scenario": "An older relative wants to try dance, gaming or short videos and invites you along. You never expected this interest, and the course starts from scratch.",
    "question": "What would you most enjoy trying with them?",
    "twist": "",
    "deeperQuestion": "Have you assumed someone's interests cannot change?",
    "zh": {
      "title": "長輩的新興趣",
      "scenario": "一位長輩突然想學街舞、玩遊戲或拍短片，邀請你一起試。你本來以為他不會喜歡這些，課程也真的從初學開始。",
      "question": "你最願意陪他試哪一樣？",
      "twist": "",
      "deeperQuestion": "你有沒有把家人的興趣想得太固定？"
    }
  },
  {
    "id": "ponder-v4-family-035",
    "category": "Family",
    "emoji": "🏠",
    "title": "Translating worry",
    "scenario": "You get a card to rewrite a familiar reminder in a way its recipient finds easier to hear. The care stays; the recipient chooses the wording.",
    "question": "Which reminder would you rewrite?",
    "twist": "",
    "deeperQuestion": "What do you think they are most worried about underneath it?",
    "zh": {
      "title": "把擔心翻譯一下",
      "scenario": "你們拿到一張卡，可以把一句經常聽到的叮嚀改寫成比較容易接受的說法。原本的關心保留，語氣由收的人決定。",
      "question": "你想改寫哪一句？",
      "twist": "",
      "deeperQuestion": "那句叮嚀背後，你猜對方最擔心甚麼？"
    }
  },
  {
    "id": "ponder-v4-family-036",
    "category": "Family",
    "emoji": "🏠",
    "title": "Our family badge",
    "scenario": "You design a family badge with three images and no names or slogans. They may come from food, places or shared habits.",
    "question": "Which image would you include?",
    "twist": "",
    "deeperQuestion": "Whose small gesture does it bring to mind?",
    "zh": {
      "title": "家庭徽章",
      "scenario": "你們要設計一個家庭徽章，只能放三個圖案，不能寫姓氏或口號。圖案可以來自食物、地方或共同習慣。",
      "question": "你最想加入哪個圖案？",
      "twist": "",
      "deeperQuestion": "這個圖案讓你想到誰的一個小動作？"
    }
  },
  {
    "id": "ponder-v4-family-037",
    "category": "Family",
    "emoji": "🏠",
    "title": "An unranked contest",
    "scenario": "Your family enters a contest with awards such as “Most unexpected” or “Most thoughtful,” without rankings. Everyone chooses an act or creation.",
    "question": "What would you enter?",
    "twist": "",
    "deeperQuestion": "What rarely praised ability would you like your family to appreciate?",
    "zh": {
      "title": "一場沒有排名的比賽",
      "scenario": "全家參加一個比賽，主辦方只頒「最意外」「最有心思」等獎，不分第一最後。每人可以自選表演或作品。",
      "question": "你會帶甚麼參賽？",
      "twist": "",
      "deeperQuestion": "你希望家人欣賞你哪種不常被稱讚的本領？"
    }
  },
  {
    "id": "ponder-v4-family-038",
    "category": "Family",
    "emoji": "🏠",
    "title": "No good news required",
    "scenario": "A teahouse welcomes your family without requiring updates on achievements. You may discuss unfinished things, small discoveries or simply sit.",
    "question": "What small recent discovery would you bring?",
    "twist": "",
    "deeperQuestion": "When do you find yourself telling family only the good news?",
    "zh": {
      "title": "回家不用報喜",
      "scenario": "有間茶室歡迎全家來坐，規矩是今天不用交代成績或成果。可以講沒做成的事、普通的小發現，或只是坐著。",
      "question": "你會帶來哪個最近的小發現？",
      "twist": "",
      "deeperQuestion": "甚麼時候，你最容易只跟家人報喜？"
    }
  },
  {
    "id": "ponder-v4-family-039",
    "category": "Family",
    "emoji": "🏠",
    "title": "No seniority today",
    "scenario": "For a game day, everyone uses names and roles are drawn randomly. Age does not make anyone the leader, and basic questions are welcome.",
    "question": "Whom would you most want on your team?",
    "twist": "",
    "deeperQuestion": "Without your usual family role, what position would you like to try?",
    "zh": {
      "title": "一天沒有輩分",
      "scenario": "你們玩桌遊一天，大家只叫名字，規則由抽籤決定，年紀大不會自動當隊長。每個人都可以問最基本的問題。",
      "question": "你最想跟哪位家人同隊？",
      "twist": "",
      "deeperQuestion": "如果不用扮演平常的家庭角色，你想試哪種位置？"
    }
  },
  {
    "id": "ponder-v4-family-040",
    "category": "Family",
    "emoji": "🏠",
    "title": "A family recipe remix",
    "scenario": "A classic family dish gets a new version, with one change suggested by each person. The original remains available, so changing it does not erase tradition.",
    "question": "What would you change or keep?",
    "twist": "",
    "deeperQuestion": "Is the essential part its flavour, method or the person making it?",
    "zh": {
      "title": "家常菜改版",
      "scenario": "家裡一道經典菜要出新版，每人可以改一個地方。原版仍會保留，所以不用怕改動就等於否定傳統。",
      "question": "你想改甚麼，或堅持保留甚麼？",
      "twist": "",
      "deeperQuestion": "對你來說，這道菜最不能少的是味道、做法，還是煮的人？"
    }
  },
  {
    "id": "ponder-v4-family-041",
    "category": "Family",
    "emoji": "🏠",
    "title": "Our shared garden",
    "scenario": "Your family gets a garden for vegetables, flowers or shade trees. Everyone has a small patch, plus a shared area to decide on together.",
    "question": "What would you grow in your patch?",
    "twist": "",
    "deeperQuestion": "Who would you most want to enjoy the shared area, and how?",
    "zh": {
      "title": "一起照顧一座花園",
      "scenario": "你們得到一小塊花園，可以種菜、花或讓人休息的樹。每人有一小區，也有一塊要共同決定。",
      "question": "你會在自己的地方種甚麼？",
      "twist": "",
      "deeperQuestion": "共同那一區，你最想讓誰享受到甚麼？"
    }
  },
  {
    "id": "ponder-v4-family-042",
    "category": "Family",
    "emoji": "🏠",
    "title": "A skill to pass on",
    "scenario": "Your family records a tutorial for future generations, perhaps repairing, cooking, choosing gifts or greeting people. One small skill is enough.",
    "question": "Whom would you ask to teach what?",
    "twist": "",
    "deeperQuestion": "What about their way of doing it matters beyond the skill?",
    "zh": {
      "title": "留給下一代的小技能",
      "scenario": "家裡要留下一段教學影片給以後的人看，可以教修東西、煮飯、挑禮物或跟人打招呼。只教一件小事就好。",
      "question": "你想請誰教甚麼？",
      "twist": "",
      "deeperQuestion": "那種做事方式，有甚麼比技巧本身更值得留下？"
    }
  },
  {
    "id": "ponder-v4-family-043",
    "category": "Family",
    "emoji": "🏠",
    "title": "Moving at different speeds",
    "scenario": "On a scenic outing, some want to finish the route while others stop often. There is no rush, and you may split up and reunite.",
    "question": "How would you suggest organising the walk?",
    "twist": "",
    "deeperQuestion": "How would you thank someone who adjusts to your pace?",
    "zh": {
      "title": "全家出門的速度",
      "scenario": "你們去一個風景很好的地方，有人想快點走完整條路，有人每幾步就停下來看。今天不趕時間，也可以分段再集合。",
      "question": "你會提議怎樣走？",
      "twist": "",
      "deeperQuestion": "別人配合你的速度時，你會怎樣表達感謝？"
    }
  },
  {
    "id": "ponder-v4-family-044",
    "category": "Family",
    "emoji": "🏠",
    "title": "A different bedtime story",
    "scenario": "Tonight's stories are real childhood mishaps from each relative. No moral lectures are allowed, only what happened.",
    "question": "What story would you tell?",
    "twist": "",
    "deeperQuestion": "How does it feel to hear that adults were once nervous or made mistakes too?",
    "zh": {
      "title": "不一樣的睡前故事",
      "scenario": "今晚的睡前故事不讀書，由家人各講一件自己小時候闖過的小禍。不能借故事訓人，只講當時發生甚麼。",
      "question": "你會講哪件小事？",
      "twist": "",
      "deeperQuestion": "聽到大人也曾慌張或犯錯，會讓你有甚麼感覺？"
    }
  },
  {
    "id": "ponder-v4-family-045",
    "category": "Family",
    "emoji": "🏠",
    "title": "A visitor to our home",
    "scenario": "A first-time guest spends an afternoon at your home and knows none of your habits. You can explain three small things beforehand.",
    "question": "What three things would you explain?",
    "twist": "",
    "deeperQuestion": "What habit seems ordinary to you but may be unique to your home?",
    "zh": {
      "title": "家裡的新訪客",
      "scenario": "一位第一次到你家的客人，會待一個下午。他對你家的習慣一無所知，大家可以先教他三件小事。",
      "question": "你會介紹哪三件事？",
      "twist": "",
      "deeperQuestion": "哪一個你以為很普通的習慣，可能只有你家有？"
    }
  },
  {
    "id": "ponder-v4-family-046",
    "category": "Family",
    "emoji": "🏠",
    "title": "Trading playlists",
    "scenario": "Everyone chooses three songs for another relative. Rather than guessing their taste, share music of your own with a reason for each choice.",
    "question": "Which song would you play first?",
    "twist": "",
    "deeperQuestion": "What song could show a side of you that you rarely talk about?",
    "zh": {
      "title": "交換一張歌單",
      "scenario": "每人為另一位家人選三首歌，不用猜對方流行口味。可以選自己想分享的歌，再各講一句選它的原因。",
      "question": "你會先放哪首？",
      "twist": "",
      "deeperQuestion": "有哪首歌，能讓家人認識你平常不太說的一面？"
    }
  },
  {
    "id": "ponder-v4-family-047",
    "category": "Family",
    "emoji": "🏠",
    "title": "A stall for little dreams",
    "scenario": "Everyone sets up a little stall about something they still want to learn, try or visit. Visitors may browse without immediately calling it hard, costly or useless.",
    "question": "What would your stall show?",
    "twist": "",
    "deeperQuestion": "What would you want your family to ask first?",
    "zh": {
      "title": "家人的小夢想攤位",
      "scenario": "你們各設一個小攤位，展示一件還想學、想試或想去的事。大家可以逛，但不能立即說太難、太貴或沒用。",
      "question": "你的攤位會展示甚麼？",
      "twist": "",
      "deeperQuestion": "你希望家人先問你哪個問題？"
    }
  },
  {
    "id": "ponder-v4-family-048",
    "category": "Family",
    "emoji": "🏠",
    "title": "Our family portrait setting",
    "scenario": "A photographer offers a family portrait at a location you choose. The aim is not beauty but remembering your life now in ten years.",
    "question": "Where would you take it?",
    "twist": "",
    "deeperQuestion": "What everyday object, usually tidied away, would you include?",
    "zh": {
      "title": "重選全家福背景",
      "scenario": "攝影師願意免費拍一張全家福，背景由你們選。不是要最漂亮，而是要十年後看到仍會想起現在的生活。",
      "question": "你想在哪裡拍？",
      "twist": "",
      "deeperQuestion": "你想把甚麼平常會收起來的物品也放進畫面？"
    }
  },
  {
    "id": "ponder-v4-family-049",
    "category": "Family",
    "emoji": "🏠",
    "title": "Time to answer",
    "scenario": "A household mailbox lets you write something difficult to say aloud. The recipient has a day to think before agreeing how to talk.",
    "question": "What kind of topic would suit it?",
    "twist": "",
    "deeperQuestion": "Does time to organise your thoughts help you say more, or make speaking harder?",
    "zh": {
      "title": "不用立刻回答",
      "scenario": "家裡新增一個小信箱，遇到當面難開口的事，可以先寫下來。收信的人有一天時間想想，再約好怎樣談。",
      "question": "你覺得甚麼話題適合放進去？",
      "twist": "",
      "deeperQuestion": "有時間整理想法，會讓你說得更多，還是更難開口？"
    }
  },
  {
    "id": "ponder-v4-family-050",
    "category": "Family",
    "emoji": "🏠",
    "title": "Choosing dinner",
    "scenario": "Everyone may rule out one food before choosing dinner together. Nobody can answer “Whatever” and leave one person to guess everyone's preferences.",
    "question": "What would you rule out and suggest?",
    "twist": "",
    "deeperQuestion": "Who usually accommodates everyone, and how could their taste be included?",
    "zh": {
      "title": "誰來選晚餐",
      "scenario": "今晚每人可以否決一樣不想吃的東西，再一起決定晚餐。不能用「隨便」跳過，也不用某一個人猜所有人的喜好。",
      "question": "你會先排除甚麼，再提議甚麼？",
      "twist": "",
      "deeperQuestion": "平常誰最常遷就大家？你想怎樣把他的口味放回來？"
    }
  },
  {
    "id": "ponder-v4-family-051",
    "category": "Family",
    "emoji": "🏠",
    "title": "A holiday at home",
    "scenario": "Your home becomes a holiday spot for a day, with chores covered and dinner delivered. You stay in but may rearrange things or choose a theme.",
    "question": "How would you set up the day?",
    "twist": "",
    "deeperQuestion": "What corner of home do you rarely get to enjoy?",
    "zh": {
      "title": "在家也能度假",
      "scenario": "你們可以把家變成一天的度假地方，家務有人代做，晚餐也送到。不能外出，但能改家具擺法或訂一個主題。",
      "question": "你想怎樣布置這一天？",
      "twist": "",
      "deeperQuestion": "家裡有哪個角落，你平常很少真正享受？"
    }
  },
  {
    "id": "ponder-v4-family-052",
    "category": "Family",
    "emoji": "🏠",
    "title": "A little borrowed courage",
    "scenario": "A relative wants to join a new activity but fears not fitting in. You can accompany them to the door, then let them enter alone.",
    "question": "What would you say before reaching the door?",
    "twist": "",
    "deeperQuestion": "What support do you want when trying something for the first time?",
    "zh": {
      "title": "借你一點勇氣",
      "scenario": "一位家人準備第一次參加自己很想去的活動，卻怕不合群。你能陪他到門口，之後要讓他自己進去。",
      "question": "走到門口前，你會跟他說甚麼？",
      "twist": "",
      "deeperQuestion": "你自己第一次做新事時，最想有人怎樣支持？"
    }
  },
  {
    "id": "ponder-v4-family-053",
    "category": "Family",
    "emoji": "🏠",
    "title": "An ordinary thing to miss",
    "scenario": "You will live away for three months with practical needs covered and regular contact. Your family can pack a small parcel without expensive items.",
    "question": "What would you most hope to find inside?",
    "twist": "",
    "deeperQuestion": "What ordinary thing makes you feel remembered?",
    "zh": {
      "title": "想念的日常",
      "scenario": "假設你要離家住三個月，生活安排妥當，也能經常聯絡。家人可以替你準備一小包東西，不能放貴重物品。",
      "question": "你最希望打開時看見甚麼？",
      "twist": "",
      "deeperQuestion": "哪種普通東西最能讓你感到有人記得自己？"
    }
  },
  {
    "id": "ponder-v4-family-054",
    "category": "Family",
    "emoji": "🏠",
    "title": "No occasion needed",
    "scenario": "You have a family meal without a birthday, holiday or announcement. Everyone brings one small recent thing they feel like sharing.",
    "question": "What would you bring to the conversation?",
    "twist": "",
    "deeperQuestion": "What appeals to you about gathering for no special reason?",
    "zh": {
      "title": "不用等節日",
      "scenario": "你們得到一次全家聚餐機會，不是生日或節日，也沒有好消息要宣布。每人只需帶一件最近願意分享的小事。",
      "question": "你想帶來甚麼？",
      "twist": "",
      "deeperQuestion": "沒有特別理由的相聚，對你有甚麼吸引力？"
    }
  },
  {
    "id": "ponder-v4-family-055",
    "category": "Family",
    "emoji": "🏠",
    "title": "A living-room exhibition",
    "scenario": "Everyone displays a current favourite object in the living room for a week. It need not match the family's taste, and gets one short caption.",
    "question": "What would you display and write beside it?",
    "twist": "",
    "deeperQuestion": "Whose choice would you like to understand better?",
    "zh": {
      "title": "客廳小展覽",
      "scenario": "每人可以在客廳展示一件自己最近喜歡的東西一星期。它不必符合全家的品味，旁邊只放一張短短說明卡。",
      "question": "你會展示甚麼，卡上寫甚麼？",
      "twist": "",
      "deeperQuestion": "你想多了解哪位家人的選擇？"
    }
  },
  {
    "id": "ponder-v4-family-056",
    "category": "Family",
    "emoji": "🏠",
    "title": "An afternoon to revisit",
    "scenario": "You can revisit an ordinary family afternoon, changing no major events, only noticing or joining in more. Everyone else follows their usual rhythm.",
    "question": "Which afternoon would you revisit?",
    "twist": "",
    "deeperQuestion": "Whom might you have been too busy to listen to then?",
    "zh": {
      "title": "一個可以重來的下午",
      "scenario": "你可以重新過一次普通的家庭下午，不能改變重大事情，只能多留意或多參與一點。其他人照原本的節奏生活。",
      "question": "你想回到哪個下午？",
      "twist": "",
      "deeperQuestion": "有哪個人，當時你可能太忙而沒有好好聽他說？"
    }
  },
  {
    "id": "ponder-v4-family-057",
    "category": "Family",
    "emoji": "🏠",
    "title": "Your turn to rest",
    "scenario": "Those who rarely organise will host the next gathering, while the usual organisers attend as guests. Simple food is fine, without comparisons to previous events.",
    "question": "What part would you take on?",
    "twist": "",
    "deeperQuestion": "What would the usual organiser most want someone else to remember?",
    "zh": {
      "title": "輪到你放假",
      "scenario": "家庭聚會這次由平常最少安排的人負責，慣常張羅的人只當客人。菜式可以簡單，不以「跟以前一樣」評分。",
      "question": "你願意接手哪一部分？",
      "twist": "",
      "deeperQuestion": "你猜平常張羅的人，最希望有人替他記住甚麼？"
    }
  },
  {
    "id": "ponder-v4-family-058",
    "category": "Family",
    "emoji": "🏠",
    "title": "Growing something together",
    "scenario": "Your family plants something that takes years to flower. Daily care is light, but you check it together each year and take it if you move.",
    "question": "What would you write on its first-year label?",
    "twist": "",
    "deeperQuestion": "What current family habit would you hope remains when it flowers?",
    "zh": {
      "title": "一起種下的時間",
      "scenario": "你們種下一株要幾年才開花的植物，大家不用每天照顧，但每年會一起看一次。搬家也會帶著它走。",
      "question": "你想在第一年的牌子上寫甚麼？",
      "twist": "",
      "deeperQuestion": "等它開花時，你希望家裡保留哪個現在的習慣？"
    }
  },
  {
    "id": "ponder-v4-family-059",
    "category": "Family",
    "emoji": "🏠",
    "title": "A route for someone",
    "scenario": "You design a half-hour walk for a relative, prioritising comfort over sights. Include one place to stop along the way.",
    "question": "Whom would you plan for, and where would you stop?",
    "twist": "",
    "deeperQuestion": "Do you know whether they prefer conversation or quiet observation while walking?",
    "zh": {
      "title": "為家人設計路線",
      "scenario": "你可以替一位家人安排一條半小時散步路線，不求景點多，只求對方走得舒服。沿途可以有一個停下來的地方。",
      "question": "你會替誰安排，在哪裡停下？",
      "twist": "",
      "deeperQuestion": "你知道對方喜歡走路時聊天，還是靜靜看東西嗎？"
    }
  },
  {
    "id": "ponder-v4-family-060",
    "category": "Family",
    "emoji": "🏠",
    "title": "Renaming the family roles",
    "scenario": "Labels like “the good child,” “the busy one” or “the forgetful one” pause for a day. Everyone chooses a description they prefer.",
    "question": "How would you describe yourself now?",
    "twist": "",
    "deeperQuestion": "What old impression no longer fits how you have changed?",
    "zh": {
      "title": "家庭外號重新投票",
      "scenario": "你們可以把家裡常用的「乖孩子」「大忙人」「糊塗王」等稱呼全部暫停。每人為自己選一個更喜歡的形容。",
      "question": "你想怎樣形容現在的自己？",
      "twist": "",
      "deeperQuestion": "哪個舊印象已經跟不上你的改變？"
    }
  },
  {
    "id": "ponder-v4-family-061",
    "category": "Family",
    "emoji": "🏠",
    "title": "Everyone's own dinner",
    "scenario": "Tonight everyone orders their own favourite dinner at a similar price, then eats together. Nobody has to share or swap dishes.",
    "question": "What would you order?",
    "twist": "",
    "deeperQuestion": "How often do you think of everyone else's preferences before your own?",
    "zh": {
      "title": "一餐各點各的",
      "scenario": "今晚不用煮同一桌菜，每人可以點一份自己最想吃的晚餐，再坐在一起。價錢差不多，也不需要交換食物。",
      "question": "你會點甚麼？",
      "twist": "",
      "deeperQuestion": "跟家人在一起時，你有多習慣先想別人想吃甚麼？"
    }
  },
  {
    "id": "ponder-v4-family-062",
    "category": "Family",
    "emoji": "🏠",
    "title": "A photo in the family chat",
    "scenario": "You share a favourite photo in the family chat. A relative wants to forward it to friends. It contains no secret, but you meant it just for family.",
    "question": "How would you want them to ask before forwarding it?",
    "twist": "",
    "deeperQuestion": "What parts of someone’s life should they choose the audience for?",
    "zh": {
      "title": "家庭群組的新照片",
      "scenario": "你拍了一張很喜歡的照片傳到家庭群組，一位家人想轉發給他的朋友。照片沒有秘密，但你原本只想給家人看。",
      "question": "你希望家人轉發前怎樣問你？",
      "twist": "",
      "deeperQuestion": "哪些生活內容，你覺得分享範圍應由本人決定？"
    }
  },
  {
    "id": "ponder-v4-family-063",
    "category": "Family",
    "emoji": "🏠",
    "title": "A family vote",
    "scenario": "A family outing vote splits evenly. Everyone explains their reasons, then may change their vote once, without appointing a judge.",
    "question": "What would you want to hear from someone who usually stays quiet?",
    "twist": "",
    "deeperQuestion": "What kind of reason might change your choice?",
    "zh": {
      "title": "全家的小投票",
      "scenario": "你們要決定下一次出遊方式，票數剛好分成兩邊。大家可以先說理由，再各有一次改票機會，不急著找裁判。",
      "question": "你最想先聽少數平常不出聲的人說甚麼？",
      "twist": "",
      "deeperQuestion": "知道別人的理由後，甚麼最可能讓你改變選擇？"
    }
  },
  {
    "id": "ponder-v4-family-064",
    "category": "Family",
    "emoji": "🏠",
    "title": "A pet at home",
    "scenario": "Someone wants to adopt a pet. Space and money are sufficient, but care will last years. Everyone can share both hopes and practical concerns.",
    "question": "What arrangement would you discuss first?",
    "twist": "",
    "deeperQuestion": "How does liking something differ from committing to its long-term care?",
    "zh": {
      "title": "想養一隻小動物",
      "scenario": "有人想領養一隻小動物，家裡空間和費用足夠，但照顧會持續很多年。每人可以先說期待，也可以提出不方便的地方。",
      "question": "你會先提出哪個需要商量的安排？",
      "twist": "",
      "deeperQuestion": "你喜歡一件事，和願意長期負責，對你有甚麼不同？"
    }
  },
  {
    "id": "ponder-v4-family-065",
    "category": "Family",
    "emoji": "🏠",
    "title": "Praise, delivered",
    "scenario": "You discover a relative praised something small about you to someone else, but never told you. Today everyone can deliver those words directly.",
    "question": "What praise would you tell someone first?",
    "twist": "",
    "deeperQuestion": "Is praising family or friends easier for you?",
    "zh": {
      "title": "把稱讚送到本人",
      "scenario": "你發現家人曾在別人面前稱讚你一件小事，但從沒直接說給你聽。今天大家可以把這些話親口補回來。",
      "question": "你想先把哪句稱讚說給誰聽？",
      "twist": "",
      "deeperQuestion": "你比較容易稱讚家人，還是稱讚外面的朋友？"
    }
  },
  {
    "id": "ponder-v4-family-066",
    "category": "Family",
    "emoji": "🏠",
    "title": "Words from home",
    "scenario": "You make a family dictionary of dialect words, favourite phrases or invented terms. Each needs a real example of when it is used.",
    "question": "What word or phrase would you include?",
    "twist": "",
    "deeperQuestion": "Whose voice saying it feels most like home?",
    "zh": {
      "title": "最想保留的方言",
      "scenario": "你們做一本家庭小字典，收錄家人常用的方言、口頭禪或自創詞。每個詞都要附一個真實使用場景。",
      "question": "你會收錄哪個詞？",
      "twist": "",
      "deeperQuestion": "聽見誰用它，最有「回到家」的感覺？"
    }
  },
  {
    "id": "ponder-v4-family-067",
    "category": "Family",
    "emoji": "🏠",
    "title": "Two versions of a memory",
    "scenario": "You recall the same trip but remember different highlights. Today there is no need to settle accuracy; everyone shares one scene.",
    "question": "What scene do you remember?",
    "twist": "",
    "deeperQuestion": "What detail would you ask about after hearing another version?",
    "zh": {
      "title": "一件事兩種回憶",
      "scenario": "你們談起同一次旅行，發現每人記住的重點不同。今天不用決定哪個版本最準，只各講一個自己記得的畫面。",
      "question": "你的畫面是甚麼？",
      "twist": "",
      "deeperQuestion": "聽到另一個版本後，你想再問哪個細節？"
    }
  },
  {
    "id": "ponder-v4-family-068",
    "category": "Family",
    "emoji": "🏠",
    "title": "A rest voucher each",
    "scenario": "Each family member gets an hour's rest voucher without having to justify tiredness. Others cover one necessary small task.",
    "question": "When would you most likely use yours?",
    "twist": "",
    "deeperQuestion": "Do you feel rest is allowed only after everything is finished?",
    "zh": {
      "title": "每人一張休息券",
      "scenario": "每位家人有一張一小時休息券，用的時候不需解釋為甚麼累。其他人只需幫忙接住一件必要的小事。",
      "question": "你最可能在甚麼時候用？",
      "twist": "",
      "deeperQuestion": "你覺得休息要先做完所有事才算合理嗎？"
    }
  },
  {
    "id": "ponder-v4-family-069",
    "category": "Family",
    "emoji": "🏠",
    "title": "A trip everyone can enjoy",
    "scenario": "Your family gets a free two-day trip. Each person names one essential feature, such as sleep, food, scenery or plenty of breaks.",
    "question": "What is your one essential?",
    "twist": "",
    "deeperQuestion": "Whose needs might you have overlooked before?",
    "zh": {
      "title": "家庭小旅行預告",
      "scenario": "你們可以免費去一個地方兩天，但每人只能提出一個「一定要有」的條件。可以是好睡、好吃、風景或足夠休息。",
      "question": "你的唯一條件是甚麼？",
      "twist": "",
      "deeperQuestion": "哪位家人的條件，你以前可能沒認真考慮過？"
    }
  },
  {
    "id": "ponder-v4-family-070",
    "category": "Family",
    "emoji": "🏠",
    "title": "A relative's school day",
    "scenario": "You can observe a relative's school day from classes to home time. They will not recognise you, but afterwards you may ask them three questions today.",
    "question": "Whose day would you choose?",
    "twist": "",
    "deeperQuestion": "What might they most have wanted someone to understand then?",
    "zh": {
      "title": "學校裡的家人",
      "scenario": "你可以旁觀一位家人學生時代的一天，從上課到放學。你們不會相認，但之後可以回到現在問他三個問題。",
      "question": "你想看誰的一天？",
      "twist": "",
      "deeperQuestion": "你猜當時的他，最希望有人了解哪件事？"
    }
  },
  {
    "id": "ponder-v4-family-071",
    "category": "Family",
    "emoji": "🏠",
    "title": "Sharing the celebration",
    "scenario": "For the next celebration, all preparation tasks go on slips for people to choose. Nobody can assign a task because someone always did it.",
    "question": "Which slip would you take?",
    "twist": "",
    "deeperQuestion": "What task would you like to learn but have never had a chance to try?",
    "zh": {
      "title": "重新分配節日工作",
      "scenario": "下次節日聚會，所有準備工作都寫在紙上，大家自己挑。沒人可以因為「一直都是你做」就替別人分配。",
      "question": "你會拿起哪張紙？",
      "twist": "",
      "deeperQuestion": "有哪件工作你想學，卻一直沒機會碰？"
    }
  },
  {
    "id": "ponder-v4-family-072",
    "category": "Family",
    "emoji": "🏠",
    "title": "A gentle monthly challenge",
    "scenario": "Choose a gentle month-long challenge, such as a weekly new dish or walking route. Missing a turn is not failure; you simply continue.",
    "question": "What challenge would you choose?",
    "twist": "",
    "deeperQuestion": "What reminder invites you in rather than makes you want to escape?",
    "zh": {
      "title": "一個月的小挑戰",
      "scenario": "全家可以選一個一個月的小挑戰，例如每週試一道新菜或一起走一條新路。中途漏做不算失敗，只要繼續就好。",
      "question": "你想挑戰甚麼？",
      "twist": "",
      "deeperQuestion": "怎樣的提醒會讓你想加入，而不是想逃？"
    }
  },
  {
    "id": "ponder-v4-family-073",
    "category": "Family",
    "emoji": "🏠",
    "title": "Sharing a bonus",
    "scenario": "Your family wins money from an activity with unequal hours and visible or behind-the-scenes roles. It can fund small individual gifts or a shared outing.",
    "question": "How would you suggest using the prize?",
    "twist": "",
    "deeperQuestion": "Should fairness count contributions or first hear what everyone thinks?",
    "zh": {
      "title": "共同獎金怎樣分",
      "scenario": "全家一起參加活動贏了一筆獎金，大家投入的時間不一樣，有人做台前，有人做準備。獎金夠每人買小禮物，也夠一起出遊。",
      "question": "你會提議怎樣用這筆錢？",
      "twist": "",
      "deeperQuestion": "你覺得公平要計算付出，還是先問每個人的想法？"
    }
  },
  {
    "id": "ponder-v4-family-074",
    "category": "Family",
    "emoji": "🏠",
    "title": "Different forms of care",
    "scenario": "A little post office delivers family care in the form you receive best: words, a meal, a hug or uninterrupted time.",
    "question": "What kind of parcel would you like today?",
    "twist": "",
    "deeperQuestion": "Do you usually offer the care you like or the care they need?",
    "zh": {
      "title": "關心的不同包裝",
      "scenario": "有個小郵局能把家人的關心寄成你最容易收到的形式：一句話、一頓飯、一個擁抱或一段不被打擾的時間。",
      "question": "今天你想收到哪種包裹？",
      "twist": "",
      "deeperQuestion": "你平常給別人的關心，是自己喜歡的，還是對方需要的？"
    }
  },
  {
    "id": "ponder-v4-family-075",
    "category": "Family",
    "emoji": "🏠",
    "title": "A chair for someone",
    "scenario": "You can add a chair suited to one relative anywhere at home. Its value is making them want to sit and stay, not its price.",
    "question": "Where would you put it, and for whom?",
    "twist": "",
    "deeperQuestion": "Once they sit, what would you like to do with them?",
    "zh": {
      "title": "替家人挑一張椅子",
      "scenario": "你們可以為一位家人添一張最合適的椅子，放在家中任何地方。重點不是昂貴，而是讓他願意坐下來多留一會兒。",
      "question": "你會放在哪裡，替誰準備？",
      "twist": "",
      "deeperQuestion": "那個人坐下後，你想陪他做甚麼？"
    }
  },
  {
    "id": "ponder-v4-family-076",
    "category": "Family",
    "emoji": "🏠",
    "title": "An evening without clocks",
    "scenario": "For one evening nobody needs an early start or transport home. After dinner people may stay or rest; gathering does not require everyone at once.",
    "question": "How would you spend the evening slowly?",
    "twist": "",
    "deeperQuestion": "With whom do you most easily lose track of time talking?",
    "zh": {
      "title": "有一晚不看時間",
      "scenario": "你們有一晚沒有翌日早起的壓力，也不用趕交通。飯後大家可以自由留下或休息，不必湊齊人數才算相聚。",
      "question": "你最想把晚上慢慢用來做甚麼？",
      "twist": "",
      "deeperQuestion": "你跟哪位家人最容易聊到忘記時間？"
    }
  },
  {
    "id": "ponder-v4-family-077",
    "category": "Family",
    "emoji": "🏠",
    "title": "An unspoken thank-you",
    "scenario": "You may bring up an old small favour and say thank you over dinner. The other person may have forgotten; it need not be dramatic to matter.",
    "question": "What favour comes to mind?",
    "twist": "",
    "deeperQuestion": "Did it solve the task or help you feel less alone?",
    "zh": {
      "title": "沒說出口的謝謝",
      "scenario": "你們可以把一件早已過去的小幫忙重新放到飯桌上說謝謝。對方可能已忘記，但不用找更大的事來證明它重要。",
      "question": "你會想起哪件事？",
      "twist": "",
      "deeperQuestion": "那次幫忙解決的是事情，還是讓你不再覺得只有自己？"
    }
  },
  {
    "id": "ponder-v4-family-078",
    "category": "Family",
    "emoji": "🏠",
    "title": "A family time capsule",
    "scenario": "You seal a box to open together in five years. Each person adds one thing representing life now, without needing value or a list of wishes.",
    "question": "What would you put inside?",
    "twist": "",
    "deeperQuestion": "What would you want your future family to understand about you through it?",
    "zh": {
      "title": "家庭時間膠囊",
      "scenario": "你們要封存一個小盒，五年後一起打開。每人只能放一件代表現在生活的東西，不用珍貴，也不用寫成願望清單。",
      "question": "你會放甚麼？",
      "twist": "",
      "deeperQuestion": "你希望五年後的人看見它，會理解現在的你哪一面？"
    }
  },
  {
    "id": "ponder-v4-family-079",
    "category": "Family",
    "emoji": "🏠",
    "title": "A city through their eyes",
    "scenario": "You can spend a day with a relative in a city they once lived in and you have never visited. Transport is covered; the point is listening, not sightseeing.",
    "question": "Whom would you go with, and what would you see first?",
    "twist": "",
    "deeperQuestion": "What chapter of your own life would you like someone to revisit with you?",
    "zh": {
      "title": "不熟悉的城市一日",
      "scenario": "你可以陪一位家人去他曾住過、你卻沒去過的城市一天。交通有人安排，目的不是觀光，而是聽他邊走邊講。",
      "question": "你想跟誰去，第一站想看甚麼？",
      "twist": "",
      "deeperQuestion": "你自己有哪段生活，希望有人陪你走回去認識？"
    }
  },
  {
    "id": "ponder-v4-family-080",
    "category": "Family",
    "emoji": "🏠",
    "title": "A new opportunity",
    "scenario": "A relative has a workable chance to live abroad for a year and is excited. You are happy for them but will miss your usual time together.",
    "question": "How would you express both support and how much you will miss them?",
    "twist": "",
    "deeperQuestion": "If you were leaving, what wish would you want to hear from family?",
    "zh": {
      "title": "家人收到新的機會",
      "scenario": "一位家人想去外地生活一年，安排可行，也很期待。你替他開心，但想到少了平常見面的時間，心裡有點捨不得。",
      "question": "你會怎樣同時說出支持和捨不得？",
      "twist": "",
      "deeperQuestion": "如果出發的是你，最希望家人給甚麼祝福？"
    }
  },
  {
    "id": "ponder-v4-family-081",
    "category": "Family",
    "emoji": "🏠",
    "title": "Room for disagreement",
    "scenario": "At dinner, opinions differ on a small issue, but voting to decide a winner is not allowed. Each person first explains one reason they understood from someone else.",
    "question": "What light topic would you try this with?",
    "twist": "",
    "deeperQuestion": "Is being understood enough even if your family still disagrees?",
    "zh": {
      "title": "讓不同答案留下",
      "scenario": "飯桌上大家對一件小事有不同看法，今天規則是不能投票定輸贏。每人要先替另一人的理由說一句自己聽懂的話。",
      "question": "你會挑哪個輕鬆話題來試？",
      "twist": "",
      "deeperQuestion": "家人理解你的理由，但仍不同意，對你來說夠嗎？"
    }
  },
  {
    "id": "ponder-v4-family-082",
    "category": "Family",
    "emoji": "🏠",
    "title": "Our weather report",
    "scenario": "A family board lets everyone draw their mood as weather without explaining everything. Others may first ask whether company would help.",
    "question": "What would you draw today?",
    "twist": "",
    "deeperQuestion": "What would you most want them to do after seeing your weather?",
    "zh": {
      "title": "家庭氣象報告",
      "scenario": "家裡有一塊小黑板，每人可以畫今天心情的天氣，不用解釋所有原因。其他人看見後，只能先問要不要陪伴。",
      "question": "你今天會畫甚麼？",
      "twist": "",
      "deeperQuestion": "家人看到你的天氣後，你最希望他們怎樣做？"
    }
  },
  {
    "id": "ponder-v4-family-083",
    "category": "Family",
    "emoji": "🏠",
    "title": "Let's walk and talk",
    "scenario": "There is something you want to discuss with family, but dinner gets interrupted. You can invite one person on a quiet twenty-minute walk.",
    "question": "Whom would you invite, and how would you begin?",
    "twist": "",
    "deeperQuestion": "Is it easier for you to talk sitting down or walking?",
    "zh": {
      "title": "把話留到散步時",
      "scenario": "你有一件想跟家人聊的事，飯桌上總容易被打斷。現在有一條安靜短路，能邀一個人陪你走二十分鐘。",
      "question": "你會邀誰，想從哪句話開始？",
      "twist": "",
      "deeperQuestion": "坐著談和邊走邊談，哪個更容易讓你開口？"
    }
  },
  {
    "id": "ponder-v4-family-084",
    "category": "Family",
    "emoji": "🏠",
    "title": "Repairing together",
    "scenario": "A repairer offers to teach your family to mend an old object. A replacement is inexpensive, but repairing it takes an afternoon.",
    "question": "What object would be worth staying to repair?",
    "twist": "",
    "deeperQuestion": "Would you be preserving its usefulness or a shared memory?",
    "zh": {
      "title": "一起修好一件事",
      "scenario": "家裡一件舊物壞了，修理師願意教你們一起修。買新的不貴，但修好可能會多花一個下午。",
      "question": "哪件物品值得你留下來修？",
      "twist": "",
      "deeperQuestion": "你想保存的是它的用途，還是某種共同記憶？"
    }
  },
  {
    "id": "ponder-v4-family-085",
    "category": "Family",
    "emoji": "🏠",
    "title": "Strengths we notice",
    "scenario": "You write anonymous cards about each person's strength, with a small example rather than labels like clever, good or hardworking. Everyone guesses their own card.",
    "question": "What would you write for one relative?",
    "twist": "",
    "deeperQuestion": "How would you receive a strength you had not noticed in yourself?",
    "zh": {
      "title": "互相認領的優點",
      "scenario": "你們把每人的一個優點寫在不署名的卡上，再請本人猜哪張是自己的。不能只寫聰明、乖或努力，要附小例子。",
      "question": "你想替一位家人寫甚麼？",
      "twist": "",
      "deeperQuestion": "如果有人寫出你沒發現的優點，你會怎樣接住？"
    }
  },
  {
    "id": "ponder-v4-family-086",
    "category": "Family",
    "emoji": "🏠",
    "title": "Their first plan",
    "scenario": "A younger relative plans the family outing for the first time. You notice something that could improve, but they have worked hard on it.",
    "question": "How would you raise it while leaving them in charge?",
    "twist": "",
    "deeperQuestion": "When learning something new, when do you want help and when space?",
    "zh": {
      "title": "第一次自己安排",
      "scenario": "一位年輕家人第一次自己安排全家行程，細節未必周全。你看出一個可改善的地方，但他已經很努力準備。",
      "question": "你會怎樣提出，讓對方仍有主導權？",
      "twist": "",
      "deeperQuestion": "你學做新事時，希望別人何時幫忙、何時放手？"
    }
  },
  {
    "id": "ponder-v4-family-087",
    "category": "Family",
    "emoji": "🏠",
    "title": "A quiet corner",
    "scenario": "You create a quiet corner where nobody must answer conversation immediately. It is not a place for anger or rejection of the family.",
    "question": "What would you put there?",
    "twist": "",
    "deeperQuestion": "How could “I need quiet” be said without being misunderstood?",
    "zh": {
      "title": "家裡的安靜角落",
      "scenario": "你們可以騰出一個安靜角落，任何人坐進去都不用立即回應聊天。它不是生氣區，也不代表不喜歡家人。",
      "question": "你想替這個角落放甚麼？",
      "twist": "",
      "deeperQuestion": "怎樣說「我想靜一下」，最不容易被誤會？"
    }
  },
  {
    "id": "ponder-v4-family-088",
    "category": "Family",
    "emoji": "🏠",
    "title": "Four photographs a year",
    "scenario": "You plan only four special family photographs a year, leaving other moments uninterrupted. They may capture activities or ordinary days.",
    "question": "What would you save one photograph for?",
    "twist": "",
    "deeperQuestion": "Would you want the photos to remember how you looked or how you were together?",
    "zh": {
      "title": "一年四張合照",
      "scenario": "你們決定一年只特別安排四張家庭合照，其餘時間不用為拍照停下來。四張可以記錄不同活動或很普通的一天。",
      "question": "你最想把其中一張留給甚麼？",
      "twist": "",
      "deeperQuestion": "你想被照片記住的，是大家看起來怎樣，還是相處得怎樣？"
    }
  },
  {
    "id": "ponder-v4-family-089",
    "category": "Family",
    "emoji": "🏠",
    "title": "No fixing tonight",
    "scenario": "Everyone may share a small concern while others hold back solutions. Speakers may stop halfway or pass entirely.",
    "question": "How could you begin without putting anyone under pressure?",
    "twist": "",
    "deeperQuestion": "What reaction is hardest for you to hold back when family shares a worry?",
    "zh": {
      "title": "一個不急著解決的晚上",
      "scenario": "家人可以各講一件最近的小煩惱，其他人先不提供辦法。講的人可以只講一半，也可以說今天不想談。",
      "question": "你覺得怎樣開始，大家才不會有壓力？",
      "twist": "",
      "deeperQuestion": "聽到家人有煩惱時，你最難忍住的是甚麼反應？"
    }
  },
  {
    "id": "ponder-v4-family-090",
    "category": "Family",
    "emoji": "🏠",
    "title": "Packing for everyone",
    "scenario": "For a two-day trip, you have a shared small bag besides personal luggage. Everyone adds one thing to make time together more comfortable.",
    "question": "What would you pack, and who might need it most?",
    "twist": "",
    "deeperQuestion": "What need do you most readily notice in your family?",
    "zh": {
      "title": "家庭旅行的行李",
      "scenario": "你們要出門兩天，除了個人物品，還有一個共同小袋。每人只能放一樣能讓相處更舒服的東西。",
      "question": "你會放甚麼，預計誰最用得著？",
      "twist": "",
      "deeperQuestion": "你平常最容易留意家人哪種需要？"
    }
  },
  {
    "id": "ponder-v4-family-091",
    "category": "Family",
    "emoji": "🏠",
    "title": "Replying to an old wish",
    "scenario": "You find a relative's childhood wish without knowing whether it came true. You can ask them, then imagine a small version to try now.",
    "question": "Whose wish would you like to find?",
    "twist": "",
    "deeperQuestion": "If it were your own, what might it say?",
    "zh": {
      "title": "小時候的願望回信",
      "scenario": "你找到一位家人小時候寫的願望，不知道後來有沒有實現。你可以先問本人，再一起想一個現在仍能試的小版本。",
      "question": "你想找到誰的願望？",
      "twist": "",
      "deeperQuestion": "如果找到的是你自己的，你猜會寫著甚麼？"
    }
  },
  {
    "id": "ponder-v4-family-092",
    "category": "Family",
    "emoji": "🏠",
    "title": "A dinner theme",
    "scenario": "Dinner's theme is “a recent first.” Share something first encountered, learned or tried, even a new flavour.",
    "question": "What recent first would you share?",
    "twist": "",
    "deeperQuestion": "Which relative would you like to try it with next time?",
    "zh": {
      "title": "普通晚餐的主題",
      "scenario": "今晚晚餐有個小主題：「最近第一次」。每人只需講一件第一次遇到、學到或嘗試的事，小到一種新口味也可以。",
      "question": "你會帶來哪個第一次？",
      "twist": "",
      "deeperQuestion": "你想跟哪位家人一起再試一次？"
    }
  },
  {
    "id": "ponder-v4-family-093",
    "category": "Family",
    "emoji": "🏠",
    "title": "Our family bookshelf",
    "scenario": "Your family starts a shelf of books, comics or other reading. Each recommendation has one note: “I'd like you to see this because…”",
    "question": "What would you add, and how would you finish the note?",
    "twist": "",
    "deeperQuestion": "Could different reactions to the same book help you know each other better?",
    "zh": {
      "title": "家庭書店",
      "scenario": "你們在家設一個小書架，每人推薦一本書、一本漫畫或一份自己想分享的讀物。旁邊只寫「我想你看看，因為……」。",
      "question": "你會放甚麼，怎樣完成那句話？",
      "twist": "",
      "deeperQuestion": "不喜歡同一本書，也可以從中更認識對方嗎？"
    }
  },
  {
    "id": "ponder-v4-family-094",
    "category": "Family",
    "emoji": "🏠",
    "title": "Who gets heard?",
    "scenario": "Everyone gets a “Let me finish” card to use when interrupted. Others listen through before responding.",
    "question": "Would you use yours often or rarely?",
    "twist": "",
    "deeperQuestion": "Whom would you like to hear without them having to fight for a turn?",
    "zh": {
      "title": "重新分配一句話",
      "scenario": "家裡每人都有一張「讓我講完」卡，聊天被打斷時可以放在桌上。大家先聽完，再決定要不要回應。",
      "question": "你覺得自己會常用，還是很少用？",
      "twist": "",
      "deeperQuestion": "你想讓哪位家人有更多不用爭取的說話時間？"
    }
  },
  {
    "id": "ponder-v4-family-095",
    "category": "Family",
    "emoji": "🏠",
    "title": "The first taste of home",
    "scenario": "You return from time away and family asks what you would like to eat. There is no need to impress anyone; choose a flavour you truly missed.",
    "question": "What would you choose?",
    "twist": "",
    "deeperQuestion": "If that dish were unavailable, what welcome could give you the same feeling?",
    "zh": {
      "title": "回家的第一口",
      "scenario": "你從外地回來，家人問想吃甚麼，不用考慮健康菜單或招待場面，只選一樣你真心想念的味道。",
      "question": "你會選甚麼？",
      "twist": "",
      "deeperQuestion": "如果煮不到那道菜，怎樣的迎接也能讓你有同樣感覺？"
    }
  },
  {
    "id": "ponder-v4-family-096",
    "category": "Family",
    "emoji": "🏠",
    "title": "A name for our team",
    "scenario": "Your family enters a friendly activity needing a team name and introduction. Avoid strongest, first or winning; describe how you are together.",
    "question": "What would you name the team?",
    "twist": "",
    "deeperQuestion": "Who might suggest the most unexpected name?",
    "zh": {
      "title": "一家人的小隊名",
      "scenario": "你們參加一個輕鬆活動，需要想隊名和一句出場介紹。不能用最強、第一或必勝，要讓人知道你們相處的特色。",
      "question": "你會取甚麼隊名？",
      "twist": "",
      "deeperQuestion": "家人當中，誰最可能想出大家意想不到的名字？"
    }
  },
  {
    "id": "ponder-v4-family-097",
    "category": "Family",
    "emoji": "🏠",
    "title": "An open invitation",
    "scenario": "You can give a relative a standing invitation such as “Ask me when you want a walk.” It requires neither daily contact nor constant availability.",
    "question": "What invitation would you offer?",
    "twist": "",
    "deeperQuestion": "What invitation would you like to receive, and from whom?",
    "zh": {
      "title": "為彼此留一道門",
      "scenario": "你可以給家人一句長期有效的邀請，例如「想散步時可以找我」。它不要求每天聯絡，也不保證每次有空。",
      "question": "你願意給出甚麼邀請？",
      "twist": "",
      "deeperQuestion": "你最希望收到哪位家人的甚麼邀請？"
    }
  },
  {
    "id": "ponder-v4-family-098",
    "category": "Family",
    "emoji": "🏠",
    "title": "One small change at home",
    "scenario": "You have a day to change one small thing at home without major expense or renovation. Move a seat, change a light or adjust a shared habit.",
    "question": "What would you change first?",
    "twist": "",
    "deeperQuestion": "Whose unspoken need might that change serve?",
    "zh": {
      "title": "家裡的小改變",
      "scenario": "你們有一天可以改動家裡一件小事，不花大錢，也不大裝修。可以移動座位、換一盞燈或改一個共同習慣。",
      "question": "你想先改甚麼？",
      "twist": "",
      "deeperQuestion": "這個改變最能照顧到誰平常沒說出的需要？"
    }
  },
  {
    "id": "ponder-v4-family-099",
    "category": "Family",
    "emoji": "🏠",
    "title": "Hearing what they love",
    "scenario": "For ten minutes, everyone shares something they currently love. Listeners may ask curious questions without judging its usefulness.",
    "question": "What would you share?",
    "twist": "",
    "deeperQuestion": "How do you feel listening to excitement about something unfamiliar?",
    "zh": {
      "title": "聽家人說一次我喜歡",
      "scenario": "你們有十分鐘輪流介紹最近真心喜歡的一件事，其他人只能問好奇的問題。不能立即評價有沒有價值。",
      "question": "你會分享甚麼？",
      "twist": "",
      "deeperQuestion": "聽別人興奮地講一件你不熟悉的事，你通常有甚麼感覺？"
    }
  },
  {
    "id": "ponder-v4-family-100",
    "category": "Family",
    "emoji": "🏠",
    "title": "Next time together",
    "scenario": "Before a gathering ends, everyone suggests one small thing to do together next time. It need not be impressive, only something you would really arrange.",
    "question": "What would you suggest?",
    "twist": "",
    "deeperQuestion": "What first step would you take to make “next time” happen?",
    "zh": {
      "title": "下次再一起",
      "scenario": "聚會結束前，每人可以提出一件想下次一起做的小事。它不用很精彩，只要真的願意安排就好。",
      "question": "你想提出甚麼？",
      "twist": "",
      "deeperQuestion": "為了讓「下次」真的發生，你願意先做哪一步？"
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
    "id": "ponder-v4-party-004",
    "category": "Party",
    "emoji": "🎉",
    "title": "Borrow your weekend",
    "scenario": "You can borrow a friend's favourite weekend day, following their food, outings and rest. Costs are covered, but you cannot replace their plans with yours.",
    "question": "Whose day would you borrow?",
    "twist": "",
    "deeperQuestion": "What part of your own day might surprise them?",
    "zh": {
      "title": "借住你的週末",
      "scenario": "你可以借過朋友最喜歡的週末一天，照他的習慣吃、走和休息。費用不用擔心，但不能偷偷改成自己的行程。",
      "question": "你最想借誰的一天？",
      "twist": "",
      "deeperQuestion": "你的一天裡，哪個部分最可能令朋友意外？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v4-party-005",
    "category": "Party",
    "emoji": "🎉",
    "title": "A city pass",
    "scenario": "You each get a city pass making all activities free today. Stay together or choose a stop each to show your friends.",
    "question": "Where would you take everyone?",
    "twist": "",
    "deeperQuestion": "What would you hope they feel there?",
    "zh": {
      "title": "一張城市通行證",
      "scenario": "你們各得到一張城市通行證，今天所有活動免費。可以一起走，也可以各選一站，再帶朋友去看看。",
      "question": "你會帶大家去哪一站？",
      "twist": "",
      "deeperQuestion": "你希望朋友在那裡感受到甚麼？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v4-party-006",
    "category": "Party",
    "emoji": "🎉",
    "title": "A friend's comfort kit",
    "scenario": "You prepare a small kit for a tired friend using three ordinary things. It cannot fix everything, only make tonight a little easier.",
    "question": "What would you put inside?",
    "twist": "",
    "deeperQuestion": "If the kit were for you, what would help most?",
    "zh": {
      "title": "朋友急救盒",
      "scenario": "你要替一位最近很累的朋友準備小盒，只能放三件普通東西。不能解決他的所有問題，只想讓今晚好過一點。",
      "question": "你會放甚麼？",
      "twist": "",
      "deeperQuestion": "如果盒子是送給你的，哪樣東西最有用？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v4-party-007",
    "category": "Party",
    "emoji": "🎉",
    "title": "A small-budget adventure",
    "scenario": "You have HK$100 and three hours to try something you rarely do together. No photos or competition over who plans best are required.",
    "question": "What would you propose?",
    "twist": "",
    "deeperQuestion": "Does a small budget make you inventive or less relaxed?",
    "zh": {
      "title": "一百元的小探險",
      "scenario": "你們有一百元和三小時，目標是找到一件平常不會一起做的事。不用拍照證明，也不比誰安排得厲害。",
      "question": "你會提議怎樣出發？",
      "twist": "",
      "deeperQuestion": "低預算會令你更有創意，還是比較難放鬆？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v4-party-008",
    "category": "Party",
    "emoji": "🎉",
    "title": "Three things for a cabin",
    "scenario": "A lakeside cabin is yours for two nights, with food and beds ready. Each brings three leisure items; phones are only for contact.",
    "question": "What three things would you bring?",
    "twist": "",
    "deeperQuestion": "Which would you share, and which would you keep for yourself?",
    "zh": {
      "title": "三樣行李",
      "scenario": "你們可以免費住湖邊小屋兩晚，食物和床都備好。每人只帶三件用來消磨時間的東西，手機只能聯絡。",
      "question": "你的三件行李是甚麼？",
      "twist": "",
      "deeperQuestion": "其中哪樣你想跟朋友分享，哪樣想自己用？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v4-party-009",
    "category": "Party",
    "emoji": "🎉",
    "title": "Your friend's masterclass",
    "scenario": "You design a one-hour class for each other based on something each does naturally, including everyday skills beyond work.",
    "question": "What class would you design for your friend?",
    "twist": "",
    "deeperQuestion": "What would you genuinely want to learn from it?",
    "zh": {
      "title": "替朋友開一堂課",
      "scenario": "你們要替彼此設計一堂一小時的小課，教的是對方平常很自然就做到的事。不能只用工作專長，也可以是生活本領。",
      "question": "你會替朋友開甚麼課？",
      "twist": "",
      "deeperQuestion": "你想從那堂課真正學會哪一點？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v4-party-010",
    "category": "Party",
    "emoji": "🎉",
    "title": "A show without scores",
    "scenario": "You each get five minutes on a little stage with only your friends watching, no recording or judging. Sing, tell a story or show an odd skill.",
    "question": "What would you perform?",
    "twist": "",
    "deeperQuestion": "What audience response would help you loosen up?",
    "zh": {
      "title": "沒有評分的演出",
      "scenario": "有個小舞台讓你們各表演五分鐘，台下只有彼此，不錄影也不評分。唱歌、講故事或示範奇怪技能都可以。",
      "question": "你願意表演甚麼？",
      "twist": "",
      "deeperQuestion": "怎樣的觀眾反應，最能讓你放開一點？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v4-party-011",
    "category": "Party",
    "emoji": "🎉",
    "title": "Our travel agreement",
    "scenario": "Before travelling together, each writes one important agreement about getting along rather than the itinerary.",
    "question": "What would your agreement be?",
    "twist": "",
    "deeperQuestion": "What small travel experience taught you what you need?",
    "zh": {
      "title": "好友旅行合約",
      "scenario": "你們準備一起旅行，出發前每人只能寫一條最重要的相處約定。不是行程安排，而是避免彼此累積小不滿。",
      "question": "你的那一條是甚麼？",
      "twist": "",
      "deeperQuestion": "過去的旅行，有哪件小事讓你學會自己需要甚麼？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v4-party-012",
    "category": "Party",
    "emoji": "🎉",
    "title": "Neighbours for a month",
    "scenario": "You become neighbours for a month with separate lives and no daily meeting requirement. A small table between your doors holds notes or objects.",
    "question": "What would you leave on the first evening?",
    "twist": "",
    "deeperQuestion": "What would you enjoy about nearby friends, and where would you need boundaries?",
    "zh": {
      "title": "意外成為鄰居",
      "scenario": "你們意外租到相鄰的房子一個月，各有自己的生活，不需要每天見。兩家之間有一張小桌，可以留下東西或便條。",
      "question": "第一晚你會放甚麼上去？",
      "twist": "",
      "deeperQuestion": "朋友住得近，對你最吸引和最需要界線的各是甚麼？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v4-party-013",
    "category": "Party",
    "emoji": "🎉",
    "title": "The title of your life",
    "scenario": "Your past year becomes a lighthearted little book. A friend chooses the title, and you add a subtitle.",
    "question": "What title would you give your friend?",
    "twist": "",
    "deeperQuestion": "What part of your life do you think others rarely see?",
    "zh": {
      "title": "替朋友選書名",
      "scenario": "你們各自的生活要寫成一本輕鬆的小書，只寫最近一年。朋友負責替你取書名，你可以補一句副標題。",
      "question": "你會替對方取甚麼名字？",
      "twist": "",
      "deeperQuestion": "哪段生活你覺得外人很少看見？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v4-party-014",
    "category": "Party",
    "emoji": "🎉",
    "title": "An unfamiliar ticket",
    "scenario": "You get tickets to an unfamiliar activity, perhaps birdwatching, pottery or local history. You are free today, and declining would not waste anyone's place.",
    "question": "What unfamiliar activity would you try?",
    "twist": "",
    "deeperQuestion": "Would the subject or the company matter more in deciding to go?",
    "zh": {
      "title": "免費的冷門票",
      "scenario": "有人送你們兩張完全不熟悉的活動票，可能是觀鳥、陶藝或地方歷史導覽。今天有空，放棄也不會浪費別人的名額。",
      "question": "你最願意試哪種冷門活動？",
      "twist": "",
      "deeperQuestion": "是內容本身，還是有人陪，最令你願意出發？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v4-party-015",
    "category": "Party",
    "emoji": "🎉",
    "title": "A letter to future us",
    "scenario": "You write to yourselves as friends five years from now. Skip predictions about jobs or income and describe how you hope to stay connected.",
    "question": "What would you want to keep?",
    "twist": "",
    "deeperQuestion": "What contact could survive very different schedules?",
    "zh": {
      "title": "一封給未來朋友的信",
      "scenario": "你們可以寄一封信給五年後仍然做朋友的彼此。不能預測工作和收入，只能寫想保留的相處方式。",
      "question": "你想保留甚麼？",
      "twist": "",
      "deeperQuestion": "如果生活節奏不同，哪種聯絡仍然做得到？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v4-party-016",
    "category": "Party",
    "emoji": "🎉",
    "title": "Two café seats",
    "scenario": "You visit a café to do separate things, choosing a face-to-face table or seats beside the window. Conversation is optional; company is the point.",
    "question": "Where would you sit?",
    "twist": "",
    "deeperQuestion": "Are you comfortable in shared silence or tempted to fill it?",
    "zh": {
      "title": "咖啡店的兩個座位",
      "scenario": "你們去咖啡店各自做事，可以選面對面的桌子，或並排看窗外的位置。今天不一定要聊天，只想有個人在旁邊。",
      "question": "你會選哪裡？",
      "twist": "",
      "deeperQuestion": "你跟朋友安靜相處時，會自在還是想填滿空白？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v4-party-017",
    "category": "Party",
    "emoji": "🎉",
    "title": "An ordinary recommendation",
    "scenario": "Recommend a non-tourist place where a friend can spend an hour experiencing your everyday life, such as a market, park, shop or street.",
    "question": "Where would you send them, and what should they notice?",
    "twist": "",
    "deeperQuestion": "If they did not enjoy it, what would you want to understand?",
    "zh": {
      "title": "互相推薦一個普通地方",
      "scenario": "你要推薦一個不是景點的地方給朋友，讓他花一小時像你一樣生活。可以是市場、公園、書店或一條路。",
      "question": "你會推薦哪裡，請他留意甚麼？",
      "twist": "",
      "deeperQuestion": "如果朋友不喜歡，你會想了解甚麼？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v4-party-018",
    "category": "Party",
    "emoji": "🎉",
    "title": "A wonderfully useless gift",
    "scenario": "You exchange gifts under HK$50 with no requirement to be useful. They should bring a smile or recall a shared experience.",
    "question": "What would you give?",
    "twist": "",
    "deeperQuestion": "What inexpensive gift have you remembered for a long time?",
    "zh": {
      "title": "一個不實用的禮物",
      "scenario": "你們交換一份不必實用的小禮物，預算五十元。它只需讓收的人笑一下，或想起一段共同經歷。",
      "question": "你會送甚麼？",
      "twist": "",
      "deeperQuestion": "你收過哪份不貴的禮物，卻一直記得？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v4-party-019",
    "category": "Party",
    "emoji": "🎉",
    "title": "My social battery",
    "scenario": "After a lively event, someone suggests another stop. You may continue, eat briefly or go home without anyone taking offence.",
    "question": "Given how you feel today, what would you choose?",
    "twist": "",
    "deeperQuestion": "What sign tells friends that your social battery is low?",
    "zh": {
      "title": "自己的社交電量",
      "scenario": "你們參加完熱鬧活動，還有人提議續攤。你可以選繼續、吃點東西就走，或直接回家，朋友都不會責怪。",
      "question": "照今天的狀態，你會選哪個？",
      "twist": "",
      "deeperQuestion": "你快沒電時，朋友通常看得出哪個訊號？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v4-party-020",
    "category": "Party",
    "emoji": "🎉",
    "title": "Borrow a skill",
    "scenario": "You can borrow a friend's skill for a day and feel the practice behind it. Afterwards the skill returns, but the experience stays.",
    "question": "Which skill would you borrow, and what would you do?",
    "twist": "",
    "deeperQuestion": "What skill of your own might you undervalue?",
    "zh": {
      "title": "借你一個擅長",
      "scenario": "你可以借朋友的一項本領一天，使用時也會知道對方平常付出的練習。借完後，本領會回去，但你保留那天的體驗。",
      "question": "你想借哪項，拿來做甚麼？",
      "twist": "",
      "deeperQuestion": "你自己有甚麼本領，可能已經低估了？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v4-party-021",
    "category": "Party",
    "emoji": "🎉",
    "title": "A private reference",
    "scenario": "A friend joins a welcoming activity and asks for a three-sentence introduction. Only they will read it, so no exaggeration or job-style language is needed.",
    "question": "What three things would you mention?",
    "twist": "",
    "deeperQuestion": "How might your friend's view of you differ from your own?",
    "zh": {
      "title": "一張不公開的推薦信",
      "scenario": "朋友要參加一個沒有門檻的小活動，請你寫三句介紹。這封信只給朋友看，不用誇大，也不用像求職。",
      "question": "你會介紹他的哪三點？",
      "twist": "",
      "deeperQuestion": "朋友眼中的你，跟你自己看到的有甚麼不同？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v4-party-022",
    "category": "Party",
    "emoji": "🎉",
    "title": "Two weekend invitations",
    "scenario": "You receive two invitations for the same day: a quiet gathering of close friends or an interesting event with new people. Both are free and need no help from you.",
    "question": "Which would you want right now?",
    "twist": "",
    "deeperQuestion": "When do you want new connections, and when familiar company?",
    "zh": {
      "title": "週末兩種邀請",
      "scenario": "同一天你收到兩種邀請：熟朋友的安靜聚會，或能認識新人的有趣活動。兩邊都不用花錢，也沒有人等你幫忙。",
      "question": "你現在比較想去哪邊？",
      "twist": "",
      "deeperQuestion": "甚麼時候你想擴闊圈子，甚麼時候只想待在熟人裡？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v4-party-023",
    "category": "Party",
    "emoji": "🎉",
    "title": "The first impression",
    "scenario": "You can replay three minutes of your first meeting, hearing only your own thoughts. Afterwards, ask each other one question about that day.",
    "question": "What do you think you were thinking?",
    "twist": "",
    "deeperQuestion": "What side of them did you discover only later?",
    "zh": {
      "title": "我們的第一個印象",
      "scenario": "你們可以重看第一次見面的三分鐘，但只能聽到自己當時的想法。看完後，可以問對方一條關於那天的問題。",
      "question": "你猜自己當時想了甚麼？",
      "twist": "",
      "deeperQuestion": "對方哪一面，是熟悉後才發現的？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v4-party-024",
    "category": "Party",
    "emoji": "🎉",
    "title": "Our one-day radio show",
    "scenario": "You host a one-day radio show, each planning a segment. The audience is friendly and there is no need to sound professional.",
    "question": "What programme would you host?",
    "twist": "",
    "deeperQuestion": "What topic gives you energy as soon as you start talking?",
    "zh": {
      "title": "一天的共同電台",
      "scenario": "你們主持一天小電台，可以各安排一段節目。聽眾只是一群願意陪你們玩的朋友，不追求專業。",
      "question": "你想主持哪種節目？",
      "twist": "",
      "deeperQuestion": "你有哪個話題，一開始講就特別有精神？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v4-party-025",
    "category": "Party",
    "emoji": "🎉",
    "title": "The easiest invitation",
    "scenario": "A friend wants to invite you out without pressure. You may write the invitation in a way that makes either yes or no comfortable.",
    "question": "What would the message say?",
    "twist": "",
    "deeperQuestion": "What misunderstanding do you most fear when declining an invitation?",
    "zh": {
      "title": "最舒服的邀約",
      "scenario": "朋友很想約你，但不確定怎樣邀請才不會有壓力。你可以替他寫一則你最容易接受或拒絕的邀約訊息。",
      "question": "那則訊息會怎樣寫？",
      "twist": "",
      "deeperQuestion": "拒絕一次邀約時，你最怕對方誤會甚麼？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v4-party-026",
    "category": "Party",
    "emoji": "🎉",
    "title": "One night sharing a room",
    "scenario": "You share a room for one travel night with separate beds and enough space. Before settling in, discuss sleep, bathroom use and quiet time.",
    "question": "What habit would you mention first?",
    "twist": "",
    "deeperQuestion": "What small consideration makes someone easy to stay with?",
    "zh": {
      "title": "如果一起住一晚",
      "scenario": "旅行時你們要共住一間房一晚，床各自獨立，空間也夠。入住前有五分鐘說好睡眠、浴室和安靜時間。",
      "question": "你會先說哪個自己的習慣？",
      "twist": "",
      "deeperQuestion": "哪種小體貼會令你很快覺得這個朋友好相處？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v4-party-027",
    "category": "Party",
    "emoji": "🎉",
    "title": "One curious why",
    "scenario": "You each share an everyday preference. The listener gets one “why,” then uses specific questions to understand, without debating.",
    "question": "What preference would you start with?",
    "twist": "",
    "deeperQuestion": "Do you prefer detailed questions or hearing their answer first?",
    "zh": {
      "title": "只能問一個為甚麼",
      "scenario": "你們各說一個日常喜好，另一人只能問一次「為甚麼」，之後要用具體問題繼續了解。不能把對話變成辯論。",
      "question": "你會拿哪個喜好來開始？",
      "twist": "",
      "deeperQuestion": "你喜歡別人深入追問，還是先分享自己的答案？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v4-party-028",
    "category": "Party",
    "emoji": "🎉",
    "title": "A secret menu",
    "scenario": "You each design a meal and drink for the other, based on taste or how you hope they feel today.",
    "question": "What is your menu?",
    "twist": "",
    "deeperQuestion": "What food do you especially want on a difficult day?",
    "zh": {
      "title": "秘密菜單",
      "scenario": "你們各為對方設計一份只有一道主食和一杯飲品的菜單。可以根據口味，也可以根據你希望對方今天的心情。",
      "question": "你的菜單是甚麼？",
      "twist": "",
      "deeperQuestion": "你有沒有一種食物，是心情不好時特別想吃的？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v4-party-029",
    "category": "Party",
    "emoji": "🎉",
    "title": "After a long gap",
    "scenario": "After five years apart, you unexpectedly have an hour together. You already know jobs and addresses, so can skip résumé-style updates.",
    "question": "What part of their present life would you ask about?",
    "twist": "",
    "deeperQuestion": "What would you most like them to ask you?",
    "zh": {
      "title": "久沒見面的開場",
      "scenario": "你們五年沒見，今天意外有一小時重逢。工作、住哪裡都已知道，不用再從履歷式近況開始。",
      "question": "你最想問對方現在生活的哪一面？",
      "twist": "",
      "deeperQuestion": "你自己最希望被問到甚麼？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v4-party-030",
    "category": "Party",
    "emoji": "🎉",
    "title": "Before offering a solution",
    "scenario": "A friend shares a concern and you have a promising suggestion. You agree to first ask whether they want listening, ideas or practical help.",
    "question": "How would you ask naturally?",
    "twist": "",
    "deeperQuestion": "Which do you usually need when sharing a concern?",
    "zh": {
      "title": "別急著幫我解決",
      "scenario": "朋友講一件小煩惱，你手上剛好有一個很好的建議。但你們約定先問清楚對方想要聆聽、想法還是實際幫忙。",
      "question": "你會怎樣自然地問？",
      "twist": "",
      "deeperQuestion": "你分享煩惱時，最常需要哪一種？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v4-party-031",
    "category": "Party",
    "emoji": "🎉",
    "title": "A keepsake from our trip",
    "scenario": "On a trip, your keepsake must be a free ordinary object or a sentence said that day, rather than something bought. Everyone chooses separately.",
    "question": "What would you likely keep?",
    "twist": "",
    "deeperQuestion": "Do you first remember places, food or the people you travelled with?",
    "zh": {
      "title": "我們的小旅行紀念",
      "scenario": "你們旅行不能買紀念品，只能留一件免費得到的普通物品，或寫下一句當天說過的話。每人可以選不同的。",
      "question": "你最可能留下甚麼？",
      "twist": "",
      "deeperQuestion": "你記旅行時，最先想起地方、食物，還是同行的人？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v4-party-032",
    "category": "Party",
    "emoji": "🎉",
    "title": "Someone backs your idea",
    "scenario": "A friend offers an afternoon to try an idea you have long talked about. Success is optional, but you need to explain how they can help.",
    "question": "What would you try?",
    "twist": "",
    "deeperQuestion": "What hesitation does having company reduce most?",
    "zh": {
      "title": "有人相信你的點子",
      "scenario": "朋友願意花一個下午，陪你試一個你一直只說沒做的小點子。沒有成功要求，但你要先說清楚他能怎樣幫。",
      "question": "你想試甚麼？",
      "twist": "",
      "deeperQuestion": "有人陪你開始，最能減少哪種顧慮？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v4-party-033",
    "category": "Party",
    "emoji": "🎉",
    "title": "A comfortable distance",
    "scenario": "You choose an ideal rhythm for friendship, from daily messages to deeper talks every few months. Frequency does not measure importance and can change.",
    "question": "What rhythm suits you now?",
    "twist": "",
    "deeperQuestion": "What makes a reunion feel familiar after a long gap?",
    "zh": {
      "title": "舒服的友情距離",
      "scenario": "你們可以替友情設一個理想聯絡節奏，從每天短訊到幾個月深聊一次都可以。頻率不代表重視程度，也能隨生活調整。",
      "question": "你目前喜歡哪種節奏？",
      "twist": "",
      "deeperQuestion": "隔很久再見時，甚麼會讓你覺得仍然熟悉？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v4-party-034",
    "category": "Party",
    "emoji": "🎉",
    "title": "A story for two",
    "scenario": "You build a story one sentence at a time about someone living in your city. Each may give the character a small adventure they would like to try.",
    "question": "Where would you send the character first?",
    "twist": "",
    "deeperQuestion": "Which choice in the story would you like to make yourself?",
    "zh": {
      "title": "兩人故事接龍",
      "scenario": "你們輪流加一句故事，主角是一個跟你們一樣住在這城市的人。每人可以給主角一個自己想嘗試的小冒險。",
      "question": "你會先讓主角去哪裡？",
      "twist": "",
      "deeperQuestion": "故事裡哪個選擇，其實是你自己也想做的？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v4-party-035",
    "category": "Party",
    "emoji": "🎉",
    "title": "Company without expertise",
    "scenario": "A friend invites you to the easiest version of an activity you cannot do. They want no performance, only to share what they enjoy.",
    "question": "What activity would you be willing to try?",
    "twist": "",
    "deeperQuestion": "Would you worry more about doing badly or how your friend sees you?",
    "zh": {
      "title": "不用擅長也可以陪",
      "scenario": "朋友很喜歡一項你完全不擅長的活動，邀你試最簡單的版本。他不需要你表現好，只想讓你知道自己平常在享受甚麼。",
      "question": "你最願意接受哪種邀請？",
      "twist": "",
      "deeperQuestion": "你怕的是做不好，還是不知道對方會怎樣看你？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v4-party-036",
    "category": "Party",
    "emoji": "🎉",
    "title": "Thanks for remembering",
    "scenario": "You may each ask a friend to remember something that gets crowded out of life. It is not a deadline, but something about how you want to live.",
    "question": "What would you ask them to remember?",
    "twist": "",
    "deeperQuestion": "How could they bring it up later as support rather than pressure?",
    "zh": {
      "title": "謝謝你記得",
      "scenario": "你們各有一次機會，請朋友替自己記住一件容易被生活擠掉的小事。不是提醒交功課，而是關於你想怎樣生活。",
      "question": "你想請朋友記住甚麼？",
      "twist": "",
      "deeperQuestion": "朋友日後怎樣提起，才像支持而不是催促？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v4-party-037",
    "category": "Party",
    "emoji": "🎉",
    "title": "Our pop-up festival",
    "scenario": "You have a venue and half a day for a free little festival. Each person runs a stall sharing something they enjoy.",
    "question": "What stall would you run?",
    "twist": "",
    "deeperQuestion": "Whose stall would you most want to visit, and why?",
    "zh": {
      "title": "你們的快閃節日",
      "scenario": "你們有一個空場地和半天，辦一個免費小節日。每人可以設一個攤位，內容只需是自己願意分享的樂趣。",
      "question": "你會開甚麼攤位？",
      "twist": "",
      "deeperQuestion": "你最想逛哪位朋友的攤位，為甚麼？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v4-party-038",
    "category": "Party",
    "emoji": "🎉",
    "title": "A holiday budget",
    "scenario": "Divide a trip budget among food, lodging, activities and transport. First name the area you least want to cut, then decide together without simple majority rule.",
    "question": "What would you protect first?",
    "twist": "",
    "deeperQuestion": "Which expense makes more sense after hearing everyone?",
    "zh": {
      "title": "四種假期預算",
      "scenario": "你們有一筆共同旅行預算，要分給吃、住、活動和交通。先各自說最不想省的一項，再一起分配，不能只按多數決。",
      "question": "你最想保住哪一項？",
      "twist": "",
      "deeperQuestion": "聽完大家後，有哪項花費你比原本更理解？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v4-party-039",
    "category": "Party",
    "emoji": "🎉",
    "title": "Our short film",
    "scenario": "Make a three-minute film using nearby places, with equipment supplied. Choose writing, acting, filming, narration or looking after the group.",
    "question": "What role and story would you choose?",
    "twist": "",
    "deeperQuestion": "What behind-the-scenes work would you want appreciated?",
    "zh": {
      "title": "一部小短片",
      "scenario": "你們可以拍一部三分鐘短片，器材有人提供，但只能用今天身邊的地方。每人選一個角色：寫、演、拍、配音或照顧現場。",
      "question": "你想做哪個角色，拍甚麼故事？",
      "twist": "",
      "deeperQuestion": "哪種幕後工作，你希望也被看見？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v4-party-040",
    "category": "Party",
    "emoji": "🎉",
    "title": "The dinner task",
    "scenario": "Cook a meal with ingredients ready but no appointed leader. Everyone first names a strength and a task they would rather avoid.",
    "question": "How would you describe your role?",
    "twist": "",
    "deeperQuestion": "Do you tend to choose a task or wait to be assigned one?",
    "zh": {
      "title": "餐桌上的任務",
      "scenario": "你們要一起煮一餐，食材已齊，但沒有人是總指揮。開始前每人可以說一件拿手和一件不想負責的事。",
      "question": "你會怎樣介紹自己的位置？",
      "twist": "",
      "deeperQuestion": "分工時，你比較習慣主動選，還是等人安排？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v4-party-041",
    "category": "Party",
    "emoji": "🎉",
    "title": "The perfect rest stop",
    "scenario": "Design a stop for tired travellers with only three affordable offerings: food, facilities or a service.",
    "question": "What would you offer?",
    "twist": "",
    "deeperQuestion": "What do the answers reveal about what tires each of you?",
    "zh": {
      "title": "理想休息站",
      "scenario": "你們要替長途旅行的人設計一個休息站，只能提供三樣東西。可以是食物、設施或一種服務，收費都很便宜。",
      "question": "你最想提供甚麼？",
      "twist": "",
      "deeperQuestion": "大家的答案透露了各自最容易累在哪裡？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v4-party-042",
    "category": "Party",
    "emoji": "🎉",
    "title": "Welcoming someone new",
    "scenario": "A new friend joins for the first time. Each of you has HK$100 for a two-hour welcome aimed at inclusion rather than showing off.",
    "question": "What would you suggest?",
    "twist": "",
    "deeperQuestion": "What gesture helps you relax in a new group?",
    "zh": {
      "title": "用一百元招待新人",
      "scenario": "一位新朋友第一次加入，你們每人有一百元，可以合起來安排兩小時。目標是讓他容易加入，不是展示自己多會玩。",
      "question": "你會提議甚麼安排？",
      "twist": "",
      "deeperQuestion": "第一次進新圈子時，甚麼舉動最讓你放鬆？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v4-party-043",
    "category": "Party",
    "emoji": "🎉",
    "title": "A simple treasure hunt",
    "scenario": "Create a treasure hunt in a familiar neighbourhood with one clue each and no online searching. Answers may be shops, trees or sounds.",
    "question": "What clue would you give?",
    "twist": "",
    "deeperQuestion": "What detail do you naturally notice while walking?",
    "zh": {
      "title": "沒有手機的尋寶",
      "scenario": "你們在熟悉的街區做尋寶活動，每人出一條線索，不能靠手機搜尋。答案可以是一家店、一棵樹或某種聲音。",
      "question": "你會出甚麼線索？",
      "twist": "",
      "deeperQuestion": "你平常走路最容易留意哪種細節？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v4-party-044",
    "category": "Party",
    "emoji": "🎉",
    "title": "Our shared house",
    "scenario": "Share a free house for a week, each with a room. The common space can fit two extra amenities chosen together.",
    "question": "What would you add?",
    "twist": "",
    "deeperQuestion": "Would you use it to gather or make separate rest easier?",
    "zh": {
      "title": "一個星期的共享屋",
      "scenario": "你們可以免費住一個大屋一星期，每人有房間。公共空間只夠再加兩樣設備，大家要一起決定。",
      "question": "你最想加甚麼？",
      "twist": "",
      "deeperQuestion": "你想用那個空間聚在一起，還是方便各自休息？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v4-party-045",
    "category": "Party",
    "emoji": "🎉",
    "title": "Odd but deserved awards",
    "scenario": "Hold a little awards night based on real observations, such as finding comfortable seats. Each person gives one award to someone else.",
    "question": "What award would you give, and to whom?",
    "twist": "",
    "deeperQuestion": "Would you believe praise for something you had not noticed?",
    "zh": {
      "title": "奇怪但合理的獎項",
      "scenario": "你們辦一場小頒獎禮，獎項必須來自真的觀察，例如「最會找舒服座位」。每人只能頒給另一人一個獎。",
      "question": "你想頒甚麼獎給誰？",
      "twist": "",
      "deeperQuestion": "收到一個自己沒留意的稱讚，你會相信嗎？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v4-party-046",
    "category": "Party",
    "emoji": "🎉",
    "title": "Splitting the itinerary",
    "scenario": "On a trip, people want an exhibition, a market or rest. You may split for half a day and reunite, but one person fears being left out.",
    "question": "How would you keep choice from becoming pressure?",
    "twist": "",
    "deeperQuestion": "How would you want friends to react when you choose differently?",
    "zh": {
      "title": "旅行團突然拆隊",
      "scenario": "旅行中有人想看展，有人想逛市場，還有人想休息。你們可以分開半天，晚上再聚，但有一人怕被落單。",
      "question": "你會怎樣安排，讓選擇不變成壓力？",
      "twist": "",
      "deeperQuestion": "你自己選不同活動時，最希望朋友怎樣反應？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v4-party-047",
    "category": "Party",
    "emoji": "🎉",
    "title": "A shop selling feelings",
    "scenario": "Your shop offers three ten-minute experiences, such as calm, curiosity or laughter. It cannot change lives, only offer a small feeling.",
    "question": "Which experience would you create, and how?",
    "twist": "",
    "deeperQuestion": "Which would you most want for yourself now?",
    "zh": {
      "title": "開一間只賣感覺的店",
      "scenario": "你們的小店可以賣三種十分鐘的體驗，例如安心、好奇或被逗笑。不能保證改變人生，只讓來的人多一點感受。",
      "question": "你想負責哪種體驗，會怎樣設計？",
      "twist": "",
      "deeperQuestion": "你現在自己最想買哪一種？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v4-party-048",
    "category": "Party",
    "emoji": "🎉",
    "title": "A better Monday",
    "scenario": "Improve Monday through three small changes without cancelling work or study. You can change how it starts, pauses or ends.",
    "question": "What would you change first?",
    "twist": "",
    "deeperQuestion": "Is the hardest part the same for your friends?",
    "zh": {
      "title": "重新設計星期一",
      "scenario": "你們獲邀設計一個比較好過的星期一，只能改三件小事。不能取消工作或學業，但可以改開場、休息或收尾方式。",
      "question": "你最想改哪件事？",
      "twist": "",
      "deeperQuestion": "你覺得最難熬的部分，跟朋友一樣嗎？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v4-party-049",
    "category": "Party",
    "emoji": "🎉",
    "title": "Our shared playlist",
    "scenario": "Build a playlist for a two-hour drive with two songs each. Hear a little of unfamiliar songs, then a sentence about why they were chosen.",
    "question": "What would you choose to begin?",
    "twist": "",
    "deeperQuestion": "Do you choose music to share yourself or suit the group mood?",
    "zh": {
      "title": "一張共同歌單",
      "scenario": "你們要為一趟兩小時車程做歌單，每人先放兩首。別人不熟悉也要聽一小段，再由推薦的人講一句原因。",
      "question": "你會放哪首開場？",
      "twist": "",
      "deeperQuestion": "你選歌時比較想分享自己，還是照顧全場氣氛？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v4-party-050",
    "category": "Party",
    "emoji": "🎉",
    "title": "Finish or enjoy?",
    "scenario": "Your group craft is nearly finished when a fun new idea appears. Trying it might leave the piece unfinished, but you can take it home either way.",
    "question": "Would you change it or finish the original?",
    "twist": "",
    "deeperQuestion": "What needs explaining when teammates work at a different pace?",
    "zh": {
      "title": "先完成還是先好玩",
      "scenario": "你們參加合作手作活動，作品快做完，但有個新點子可能更有趣，也可能做不完。兩種結果都能帶回家。",
      "question": "你會支持改動，還是先完成？",
      "twist": "",
      "deeperQuestion": "團隊裡有人跟你節奏不同時，你最需要先說清楚甚麼？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v4-party-051",
    "category": "Party",
    "emoji": "🎉",
    "title": "Our food truck",
    "scenario": "You get a food truck for a day, serving one meal and one drink. Profit is secondary to making the meal memorable.",
    "question": "What would you serve and call the truck?",
    "twist": "",
    "deeperQuestion": "What task would you naturally take on?",
    "zh": {
      "title": "朋友的小餐車",
      "scenario": "你們得到一輛餐車用一天，只能賣一款主食和一款飲品。利潤不重要，想讓路過的人記得這一餐。",
      "question": "你們會賣甚麼，店名叫甚麼？",
      "twist": "",
      "deeperQuestion": "你在這個小團隊最自然會接手哪件事？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v4-party-052",
    "category": "Party",
    "emoji": "🎉",
    "title": "A trip without a slideshow",
    "scenario": "After a trip, give a five-minute account without photos. Bring a sound, gesture, object or story each.",
    "question": "What would you contribute?",
    "twist": "",
    "deeperQuestion": "How do your highlights from the same trip differ?",
    "zh": {
      "title": "不靠照片的旅行報告",
      "scenario": "你們旅行回來，要用五分鐘介紹給朋友，不能放照片。可以各帶一個聲音、動作、物件或小故事。",
      "question": "你會負責帶來甚麼？",
      "twist": "",
      "deeperQuestion": "同一趟旅行，大家記住的重點差在哪裡？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v4-party-053",
    "category": "Party",
    "emoji": "🎉",
    "title": "Rules for a welcoming table",
    "scenario": "Plan a gathering comfortable for old and new friends, adding one kind rule each. You cannot require enthusiasm or speaking.",
    "question": "What rule would you add?",
    "twist": "",
    "deeperQuestion": "What well-meant gesture can put quieter people under pressure?",
    "zh": {
      "title": "我們的友善規則",
      "scenario": "你們要辦一個讓新舊朋友都舒服的聚會，每人可以加一條友善規則。不能規定大家一定熱情或一定開口。",
      "question": "你想加哪條？",
      "twist": "",
      "deeperQuestion": "你見過哪種好意，反而令內向的人更有壓力？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v4-party-054",
    "category": "Party",
    "emoji": "🎉",
    "title": "A month of something new",
    "scenario": "Learn a hobby together for four weeks, one hour weekly. Everyone gets one veto, then you choose something all are willing to try.",
    "question": "What would you suggest and veto?",
    "twist": "",
    "deeperQuestion": "How far would you go in trying an unfamiliar interest for friends?",
    "zh": {
      "title": "一個月的共同興趣",
      "scenario": "你們可以一起學一項新興趣四星期，每週一小時。每人可否決一項，但最後要選一個所有人都願意試的。",
      "question": "你提議甚麼，又想否決甚麼？",
      "twist": "",
      "deeperQuestion": "你願意為了朋友試一件原本沒興趣的事到甚麼程度？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v4-party-055",
    "category": "Party",
    "emoji": "🎉",
    "title": "Swapping lunch breaks",
    "scenario": "Swap lunch-break routines for an hour, following someone else's food, walk and rest. Any cost difference is covered.",
    "question": "Whose version would you try?",
    "twist": "",
    "deeperQuestion": "Is your lunch break mainly recovery or catching up on tasks?",
    "zh": {
      "title": "午餐時間交換",
      "scenario": "你們可以交換一次午休方式，照朋友平常會吃、會走、會休息的方法過一小時。費用差異會補齊。",
      "question": "你最想交換誰的版本？",
      "twist": "",
      "deeperQuestion": "你自己的午休主要是在恢復精神，還是補做事情？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v4-party-056",
    "category": "Party",
    "emoji": "🎉",
    "title": "One free venue",
    "scenario": "You get a venue for one evening: films, swapping items, cooking or quiet reading are possible. No ticket sales or large guest list are required.",
    "question": "How would you use the evening?",
    "twist": "",
    "deeperQuestion": "How much planning and freedom does your favourite gathering have?",
    "zh": {
      "title": "免費場地只用一次",
      "scenario": "你們得到一個免費場地一晚，可以辦電影夜、交換物品、煮飯或安靜閱讀。不能售票，也不用邀很多人。",
      "question": "你想把這晚用來做甚麼？",
      "twist": "",
      "deeperQuestion": "你最喜歡的聚會，通常有多少安排、多少自由？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v4-party-057",
    "category": "Party",
    "emoji": "🎉",
    "title": "A gift of time",
    "scenario": "For a friend's birthday, pool time instead of buying gifts. Do something together or help with a small wish.",
    "question": "What would you propose?",
    "twist": "",
    "deeperQuestion": "When receiving help, what would you want to keep control over?",
    "zh": {
      "title": "只花時間的禮物",
      "scenario": "朋友生日不能買禮物，你們合起來送一段時間。可以一起做一件事，也可以分工幫他完成一個小願望。",
      "question": "你會提議怎樣送？",
      "twist": "",
      "deeperQuestion": "收到幫忙時，你希望自己仍能決定哪一部分？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v4-party-058",
    "category": "Party",
    "emoji": "🎉",
    "title": "Somewhere everyone can come",
    "scenario": "For a gathering, some have a small budget, dislike noise or face difficult travel. Everyone can name a need without explaining private reasons.",
    "question": "What need would you state first?",
    "twist": "",
    "deeperQuestion": "How could you ask about limitations without embarrassing anyone?",
    "zh": {
      "title": "一個大家都能去的地方",
      "scenario": "你們約聚會，有人預算少、有人不想太吵，也有人交通不便。每人可說一個需要，不必交代私人原因。",
      "question": "你會先提出自己的哪個需要？",
      "twist": "",
      "deeperQuestion": "怎樣問別人的限制，才不會讓他不好意思？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v4-party-059",
    "category": "Party",
    "emoji": "🎉",
    "title": "Our imaginary guesthouse",
    "scenario": "You run a two-room guesthouse without luxury amenities. Each person offers one memorable form of hospitality.",
    "question": "What would you offer?",
    "twist": "",
    "deeperQuestion": "What small kindness do you remember most from travelling?",
    "zh": {
      "title": "意外開了間民宿",
      "scenario": "你們合作開一間只有兩間房的小民宿，不能靠豪華設施吸客。每人可以提供一種讓客人記得的招待。",
      "question": "你會提供甚麼？",
      "twist": "",
      "deeperQuestion": "你旅行時最記得的照顧，是哪種小事？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v4-party-060",
    "category": "Party",
    "emoji": "🎉",
    "title": "An ordinary-day event",
    "scenario": "Turn a small solo routine, such as tidying, groceries or breakfast, into a shared activity without major spending.",
    "question": "What would be more enjoyable together?",
    "twist": "",
    "deeperQuestion": "What would you prefer to keep doing alone?",
    "zh": {
      "title": "把普通日子辦成活動",
      "scenario": "你們要把一件平常各自做的小事辦成共同活動，例如整理、買菜或吃早餐。不能額外花大錢。",
      "question": "你覺得哪件事一起做會更好玩？",
      "twist": "",
      "deeperQuestion": "哪件事你反而想保留自己做？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v4-party-061",
    "category": "Party",
    "emoji": "🎉",
    "title": "Before the vote",
    "scenario": "Choose a coast, mountain or city weekend. Before voting, everyone names the feeling they want without naming a destination.",
    "question": "What feeling would you want?",
    "twist": "",
    "deeperQuestion": "Could different places meet the same need?",
    "zh": {
      "title": "投票前先猜理由",
      "scenario": "你們在海邊、山上和城市中選週末去處。投票前，每人先說自己最想獲得的一種感覺，不能先講地點。",
      "question": "你想要哪種感覺？",
      "twist": "",
      "deeperQuestion": "有沒有不同地點，其實能滿足同一個需要？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v4-party-062",
    "category": "Party",
    "emoji": "🎉",
    "title": "A shelf of curiosities",
    "scenario": "Build a shelf of things you do not yet understand but want to explore: books, guides or handwritten questions.",
    "question": "What would you add?",
    "twist": "",
    "deeperQuestion": "Whom would you invite to explore it with you?",
    "zh": {
      "title": "我們的好奇書架",
      "scenario": "你們合建一個小書架，每人放一本自己還未懂、卻想了解的東西。可以是書、手冊或自己寫的一張問題卡。",
      "question": "你會放甚麼？",
      "twist": "",
      "deeperQuestion": "你想邀哪位朋友陪你一起找答案？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v4-party-063",
    "category": "Party",
    "emoji": "🎉",
    "title": "The last slice",
    "scenario": "One delicious cake slice remains, cannot be divided and cannot be replaced. Invent a lighthearted way to decide who gets it without competing over hardship.",
    "question": "What method would you suggest?",
    "twist": "",
    "deeperQuestion": "Does fairness mean taking turns, drawing lots or considering who wants it most?",
    "zh": {
      "title": "最後一塊蛋糕",
      "scenario": "聚會剩最後一塊特別好吃的蛋糕，不能再切，也買不到第二塊。大家可以自創一個輕鬆方法決定歸誰，不用比慘。",
      "question": "你會提議甚麼方法？",
      "twist": "",
      "deeperQuestion": "你覺得公平是輪流、抽籤，還是看誰最想要？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v4-party-064",
    "category": "Party",
    "emoji": "🎉",
    "title": "Our rest day",
    "scenario": "Plan a day for tired people without filling every hour. Each of you adds one optional activity.",
    "question": "What would your option be?",
    "twist": "",
    "deeperQuestion": "Do you ever feel rest needs to produce something?",
    "zh": {
      "title": "一起設計休息日",
      "scenario": "你們要替一群很累的人安排一天，不能把休息排成滿滿行程。每人只加一個可自由參加的小選項。",
      "question": "你的選項是甚麼？",
      "twist": "",
      "deeperQuestion": "你休息時，會不會也忍不住想做出成果？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v4-party-065",
    "category": "Party",
    "emoji": "🎉",
    "title": "Passing is allowed",
    "scenario": "Design a game where anyone may pass without explanation. Create a response making it feel ordinary rather than disruptive.",
    "question": "What would you want people to say?",
    "twist": "",
    "deeperQuestion": "When is it hardest to say “Not this time”?",
    "zh": {
      "title": "不必解釋的跳過",
      "scenario": "你們設計一個新遊戲，任何人都能跳過一題而不用解釋。要讓跳過自然，不像破壞氣氛，大家一起想一句回應。",
      "question": "你希望大家回哪一句？",
      "twist": "",
      "deeperQuestion": "你在哪種情況最難說出「這次不想」？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v4-party-066",
    "category": "Party",
    "emoji": "🎉",
    "title": "Hidden expertise",
    "scenario": "At a little advice swap, everyone names one thing friends may ask them about, even choosing a tasty orange.",
    "question": "What help would you offer?",
    "twist": "",
    "deeperQuestion": "Whose answer makes you want to ask more immediately?",
    "zh": {
      "title": "彼此的隱藏專長",
      "scenario": "你們要準備一場小型生活求助會，每人寫一件朋友可以來問自己的事。可以小到怎樣挑好吃的橙。",
      "question": "你會提供哪種幫忙？",
      "twist": "",
      "deeperQuestion": "誰的答案最讓你想立刻多問一句？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v4-party-067",
    "category": "Party",
    "emoji": "🎉",
    "title": "A gathering without a host",
    "scenario": "At a gathering without a fixed host, venue and food are ready. Everyone may volunteer for one thing or say they have less energy today.",
    "question": "What would you naturally look after?",
    "twist": "",
    "deeperQuestion": "What quiet contribution of yours would you like others to notice?",
    "zh": {
      "title": "如果聚會沒有主角",
      "scenario": "你們辦一次沒有固定主人招呼的聚會，場地和食物已準備好。每人可以自願照顧一件事，也可以說自己今天比較沒精神。",
      "question": "你自然會留意哪件事？",
      "twist": "",
      "deeperQuestion": "你希望別人也看見你平常默默做的甚麼？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v4-party-068",
    "category": "Party",
    "emoji": "🎉",
    "title": "A smaller next time",
    "scenario": "You keep planning a reunion but cannot find a whole day. Choose an easy thirty-minute activity without needing everyone every time.",
    "question": "What would you suggest?",
    "twist": "",
    "deeperQuestion": "Do brief frequent meetings or longer rare ones sustain friendship better for you?",
    "zh": {
      "title": "把下次約定變小",
      "scenario": "你們一直說要再聚，卻總湊不到完整一天。現在只能約一個三十分鐘、容易出現的活動，不要求每次全員到齊。",
      "question": "你會提議甚麼？",
      "twist": "",
      "deeperQuestion": "對你來說，短但常見和久但深入，哪種更能維持友情？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v4-party-069",
    "category": "Party",
    "emoji": "🎉",
    "title": "Four weekend corners",
    "scenario": "Four corners mean exploring, resting, socialising and learning. Choose what you want today, talk within your corner, then hear another corner's reason.",
    "question": "Which corner would you choose?",
    "twist": "",
    "deeperQuestion": "Would you have chosen the same corner last month?",
    "zh": {
      "title": "四角的理想週末",
      "scenario": "房間四角分別代表探索、休息、見人和學新事。大家站到今天最想去的一角，先跟同角的人聊，再聽另一角一個理由。",
      "question": "你會站在哪一角？",
      "twist": "",
      "deeperQuestion": "如果是上個月的你，位置會一樣嗎？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v4-party-070",
    "category": "Party",
    "emoji": "🎉",
    "title": "Our little shopping street",
    "scenario": "In small groups, design shops for a little street. Attract visitors through an experience rather than the lowest prices.",
    "question": "What would your group open?",
    "twist": "",
    "deeperQuestion": "After hearing the pitches, which would you visit?",
    "zh": {
      "title": "全場的小店街",
      "scenario": "大家分小組，各設計一間讓人願意停留的小店。不能用最低價吸引人，只能靠你們想提供的一種體驗。",
      "question": "你這組想開甚麼店？",
      "twist": "",
      "deeperQuestion": "聽完各組，你最想去哪一間當客人？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v4-party-071",
    "category": "Party",
    "emoji": "🎉",
    "title": "An extra day",
    "scenario": "Everyone gets an extra day off next week with income and responsibilities covered. Vote for alone, with one person or with a group, then speak to someone different.",
    "question": "How would you use the day?",
    "twist": "",
    "deeperQuestion": "Did you choose your usual favourite or what you currently lack?",
    "zh": {
      "title": "多出來的一天",
      "scenario": "假設下星期人人多一天假，收入和責任都已安排好。先舉手選自己過、約一個人或找一群人，再各找一個不同答案的人聊。",
      "question": "你會怎樣用這一天？",
      "twist": "",
      "deeperQuestion": "你選的是平常最喜歡的，還是最近最缺少的？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v4-party-072",
    "category": "Party",
    "emoji": "🎉",
    "title": "The quiet team",
    "scenario": "In groups, design a five-minute activity people can join without competing to speak, letting strangers keep their own pace.",
    "question": "How would your activity work?",
    "twist": "",
    "deeperQuestion": "What feature would make you more willing to join?",
    "zh": {
      "title": "聚會的安靜隊",
      "scenario": "你們要設計一個不用搶話也能加入的聚會活動。分組想一個五分鐘玩法，讓不熟悉的人也可以保留自己的節奏。",
      "question": "你們會怎樣玩？",
      "twist": "",
      "deeperQuestion": "哪個設計會令你自己更願意加入？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v4-party-073",
    "category": "Party",
    "emoji": "🎉",
    "title": "A small skill each",
    "scenario": "Build an everyday-life team with one small useful skill per person. Avoid job titles or requiring impressive achievements.",
    "question": "What skill would you contribute?",
    "twist": "",
    "deeperQuestion": "Whose skill would you most like to learn?",
    "zh": {
      "title": "一人一個小本領",
      "scenario": "全場要組成一支生活小隊，每人說一項能幫上忙的小本領。不能重複職稱，也不用選最有成就的事。",
      "question": "你會帶來甚麼本領？",
      "twist": "",
      "deeperQuestion": "有誰的本領，是你最想跟他學的？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v4-party-074",
    "category": "Party",
    "emoji": "🎉",
    "title": "A happiness budget",
    "scenario": "Give each person three imaginary coins for food, fun, comfort or convenience, showing today's spending priorities. Split them or use all in one place.",
    "question": "How would you allocate yours?",
    "twist": "",
    "deeperQuestion": "What makes sense in the reason of someone who voted differently?",
    "zh": {
      "title": "快樂預算投票",
      "scenario": "每人有三枚想像硬幣，可以投給好吃、好玩、舒服或方便，代表今天最願意花錢的地方。可以全投一格，也可以分開。",
      "question": "你會怎樣投？",
      "twist": "",
      "deeperQuestion": "找一個投法不同的人，他的理由有哪點你能理解？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v4-party-075",
    "category": "Party",
    "emoji": "🎉",
    "title": "One late arrival each",
    "scenario": "Design a late-arrival policy for a club where anyone might be late occasionally. Respect punctual people without humiliating late arrivals.",
    "question": "What would your group suggest?",
    "twist": "",
    "deeperQuestion": "What most affects your mood while waiting?",
    "zh": {
      "title": "如果人人遲到一次",
      "scenario": "你們為一個新社團設計遲到安排，每人都可能偶爾遲到。分組想一個既照顧準時的人，也不讓遲到者難堪的方法。",
      "question": "你們會提出甚麼安排？",
      "twist": "",
      "deeperQuestion": "等待時，甚麼最影響你的心情？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v4-party-076",
    "category": "Party",
    "emoji": "🎉",
    "title": "An anonymous wish wall",
    "scenario": "Everyone anonymously posts one small thing they want to try this year. Choose a note and offer encouragement without guessing its author.",
    "question": "What wish would you write?",
    "twist": "",
    "deeperQuestion": "Would you prefer practical suggestions or someone offering company?",
    "zh": {
      "title": "匿名願望牆",
      "scenario": "每人寫一件今年想試的小事，不署名，貼成一面牆。大家可以選一張回一句支持，但不用猜作者。",
      "question": "你會寫甚麼願望？",
      "twist": "",
      "deeperQuestion": "你最喜歡收到具體建議，還是單純有人說願意陪？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v4-party-077",
    "category": "Party",
    "emoji": "🎉",
    "title": "A welcome anyone can feel",
    "scenario": "Groups design a welcome for newcomers without forced performances or embarrassing stories. Demonstrate it in one minute.",
    "question": "How would your group welcome someone?",
    "twist": "",
    "deeperQuestion": "What simple gesture has made you feel accepted?",
    "zh": {
      "title": "大家都懂的歡迎",
      "scenario": "分組設計一個新人加入時的歡迎方式，不能要求自我表演或講尷尬故事。每組只用一分鐘示範。",
      "question": "你的組別會怎樣歡迎？",
      "twist": "",
      "deeperQuestion": "你曾被哪個簡單舉動接納過？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v4-party-078",
    "category": "Party",
    "emoji": "🎉",
    "title": "Different travel partners",
    "scenario": "Choose a travel role: navigation, food, photos, noticing how people feel or flexible support. Then see what each group lacks.",
    "question": "Which role would you choose?",
    "twist": "",
    "deeperQuestion": "Do you enjoy that role, or have you always been assigned it?",
    "zh": {
      "title": "理想旅伴不只一種",
      "scenario": "大家先選旅行中最想負責的角色：找路、找吃的、拍照、留意大家狀態或自由支援。再看看每組還缺甚麼。",
      "question": "你最想做哪個角色？",
      "twist": "",
      "deeperQuestion": "這是你真心喜歡的，還是一直被分配的？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v4-party-079",
    "category": "Party",
    "emoji": "🎉",
    "title": "Different ways to recharge",
    "scenario": "Group yourselves by recharging through solitude, conversation, activity or sleep. Design a ten-minute recharge station others can imagine trying.",
    "question": "Which group would you join?",
    "twist": "",
    "deeperQuestion": "Which unfamiliar station sounds worth trying?",
    "zh": {
      "title": "不一樣的充電站",
      "scenario": "全場分成喜歡獨處、聊天、活動和睡覺四組。每組設計一個十分鐘充電站，其他人可以選一站試想像。",
      "question": "你會加入哪組？",
      "twist": "",
      "deeperQuestion": "有哪一站不是你的習慣，卻聽起來值得試？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v4-party-080",
    "category": "Party",
    "emoji": "🎉",
    "title": "Ten seconds of curiosity",
    "scenario": "Everyone has ten seconds to mention a current curiosity without needing an answer. Note one topic to ask about afterwards.",
    "question": "What would you mention?",
    "twist": "",
    "deeperQuestion": "Whom would you continue with, and about what?",
    "zh": {
      "title": "十秒鐘的好奇心",
      "scenario": "大家輪流用十秒介紹一件最近好奇的事，不用知道答案。其他人記下一件想散場後再問的話題。",
      "question": "你會提甚麼？",
      "twist": "",
      "deeperQuestion": "你最想跟誰接著聊哪個問題？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v4-party-081",
    "category": "Party",
    "emoji": "🎉",
    "title": "A story that turns",
    "scenario": "Groups build a story about friends travelling, one sentence each. At a crossroads, the next speaker chooses exploring or returning somewhere familiar.",
    "question": "Where would you take the story?",
    "twist": "",
    "deeperQuestion": "Does your character's choice resemble your own travel style?",
    "zh": {
      "title": "共同故事的轉彎",
      "scenario": "各組講一個朋友出遊的小故事，每人加一句。走到岔路時，下一個人要選角色繼續探索還是回熟悉的地方。",
      "question": "輪到你，你會讓故事怎樣走？",
      "twist": "",
      "deeperQuestion": "你替角色做的選擇，跟自己旅行時像嗎？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v4-party-082",
    "category": "Party",
    "emoji": "🎉",
    "title": "No single kind of comfort",
    "scenario": "Vote for a window, aisle, front or rear seat on a long journey. Share a practical reason within groups without persuading others.",
    "question": "Where would you sit?",
    "twist": "",
    "deeperQuestion": "Who has the opposite preference on something you assumed everyone liked?",
    "zh": {
      "title": "沒有標準的舒服",
      "scenario": "大家投票選長途車的理想座位：窗邊、走道、前排或後排。分組後，各講一個選它的實際理由，不用說服別組。",
      "question": "你會選哪裡？",
      "twist": "",
      "deeperQuestion": "一件你以為人人喜歡的事，有誰剛好相反？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v4-party-083",
    "category": "Party",
    "emoji": "🎉",
    "title": "A kinder little city",
    "scenario": "Each group designs one small city feature to improve daily life. Avoid major attractions; ordinary passers-by should benefit.",
    "question": "What would you build?",
    "twist": "",
    "deeperQuestion": "Whom would your idea help who is often overlooked?",
    "zh": {
      "title": "我們的友善城市",
      "scenario": "各組設計一個讓日常更舒服的城市小設施，預算只夠做一樣。不能蓋大型樂園，要讓普通路過的人也用得到。",
      "question": "你們會建甚麼？",
      "twist": "",
      "deeperQuestion": "這個點子最先照顧到哪種平常容易被忽略的人？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v4-party-084",
    "category": "Party",
    "emoji": "🎉",
    "title": "From strangers to familiar faces",
    "scenario": "Pair up, ask about a weekend pleasure, then introduce each other to the group after checking what may be shared.",
    "question": "What small thing would you share?",
    "twist": "",
    "deeperQuestion": "What detail makes you feel your partner listened carefully?",
    "zh": {
      "title": "把陌生變熟悉",
      "scenario": "大家兩兩配對，互相問一件週末喜歡做的小事，再向全場介紹對方。介紹前，要先問對方願不願意分享那部分。",
      "question": "你想讓對方知道哪件小事？",
      "twist": "",
      "deeperQuestion": "被介紹時，哪個細節會讓你覺得對方有認真聽？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v4-party-085",
    "category": "Party",
    "emoji": "🎉",
    "title": "Free gifts",
    "scenario": "Everyone writes a small favour they could freely offer, such as a walking route or recipe lesson. Choose one that interests you without immediate obligation.",
    "question": "What would you offer?",
    "twist": "",
    "deeperQuestion": "Is accepting a small favour easy for you?",
    "zh": {
      "title": "全場的免費禮物",
      "scenario": "每人寫一件自己願意免費提供的小幫忙，例如推薦散步路線或教一道菜。大家可以選一項感興趣的，不代表立即要兌現。",
      "question": "你願意提供甚麼？",
      "twist": "",
      "deeperQuestion": "接受別人的小幫忙，對你容易嗎？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v4-party-086",
    "category": "Party",
    "emoji": "🎉",
    "title": "A lunch worth discussing",
    "scenario": "Vote quickly for a favourite restaurant, random new place, home cooking or a picnic. Then tell someone who voted differently about a memorable lunch.",
    "question": "Which would you choose today?",
    "twist": "",
    "deeperQuestion": "Was that lunch memorable for the food or the company?",
    "zh": {
      "title": "快問慢答的午餐",
      "scenario": "大家先快速投票：固定愛店、隨機新店、自己煮或野餐。再各找不同選項的人，慢慢講一次印象深刻的午餐。",
      "question": "你今天會選哪種？",
      "twist": "",
      "deeperQuestion": "那次午餐難忘，主要因為吃的還是一起的人？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v4-party-087",
    "category": "Party",
    "emoji": "🎉",
    "title": "A tip for a new friend",
    "scenario": "Complete “When talking with me, if you notice I…, it may just mean…” Share only a habit you are comfortable naming, without requiring comments.",
    "question": "How would you complete the sentence?",
    "twist": "",
    "deeperQuestion": "Is there a behaviour you might stop making assumptions about?",
    "zh": {
      "title": "給新朋友的小提示",
      "scenario": "每人完成一句「跟我聊天時，如果你發現我……，可能只是……」。只說自己願意分享的習慣，其他人不必評論。",
      "question": "你會怎樣完成這句話？",
      "twist": "",
      "deeperQuestion": "聽完後，有沒有一種行為你以後會少一點亂猜？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v4-party-088",
    "category": "Party",
    "emoji": "🎉",
    "title": "Our team's base",
    "scenario": "Each group gets a room as a friendship base with three additions. No work equipment; the aim is somewhere people want to visit.",
    "question": "What would you put in it?",
    "twist": "",
    "deeperQuestion": "Do your choices favour energy or ease?",
    "zh": {
      "title": "小組的理想基地",
      "scenario": "每組得到一個房間作為朋友基地，只能添三樣東西。不能放工作設備，目標是讓大家願意偶爾來坐。",
      "question": "你們會放甚麼？",
      "twist": "",
      "deeperQuestion": "你的選擇比較照顧熱鬧，還是自在？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v4-party-089",
    "category": "Party",
    "emoji": "🎉",
    "title": "One card about you",
    "scenario": "Draw three symbols of your present life without your name. Explain them in pairs, then choose one each to share with the group.",
    "question": "What are your three symbols?",
    "twist": "",
    "deeperQuestion": "Which symbol would your earlier self not have drawn?",
    "zh": {
      "title": "一張卡認識你",
      "scenario": "每人畫三個小圖案代表現在的生活，不寫名字。兩人互相介紹自己的卡，再各選一個願意向全場分享的圖案。",
      "question": "你的三個圖案是甚麼？",
      "twist": "",
      "deeperQuestion": "有哪個圖案，是以前的你不會畫的？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v4-party-090",
    "category": "Party",
    "emoji": "🎉",
    "title": "Rain does not end the day",
    "scenario": "Rain interrupts an outdoor gathering, but a classroom is available for two hours. Groups suggest activities using what is already there, and people join freely.",
    "question": "What would your group suggest?",
    "twist": "",
    "deeperQuestion": "Do you improvise immediately or need a moment when plans change?",
    "zh": {
      "title": "如果下雨不散場",
      "scenario": "戶外聚會忽然下雨，附近有一間空教室可以借兩小時。各組想一個不用添購東西的活動，大家再自由選擇加入。",
      "question": "你這組會提議甚麼？",
      "twist": "",
      "deeperQuestion": "計劃改變時，你通常是想辦法的人，還是先需要緩一緩？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v4-party-091",
    "category": "Party",
    "emoji": "🎉",
    "title": "The skill swap market",
    "scenario": "Use “I can” and “I'd like to learn” cards to find a skill exchange. You need only discuss a first step, not master it today.",
    "question": "What would your two cards say?",
    "twist": "",
    "deeperQuestion": "What do you find hardest to admit you do not know how to do?",
    "zh": {
      "title": "生活技能交換市場",
      "scenario": "大家拿一張「我會」和一張「我想學」的卡，找可以互相幫忙的人。不需要今天學完，只要聊清楚想學哪一步。",
      "question": "你兩張卡會寫甚麼？",
      "twist": "",
      "deeperQuestion": "你最容易在哪種事情上不好意思承認不會？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v4-party-092",
    "category": "Party",
    "emoji": "🎉",
    "title": "The message I would welcome",
    "scenario": "Write an ordinary message you would welcome, without naming a sender. It may be an invitation, greeting or small update; reading aloud is optional.",
    "question": "What would it say?",
    "twist": "",
    "deeperQuestion": "Could you send that kind of message to a friend yourself?",
    "zh": {
      "title": "最想收到的訊息",
      "scenario": "每人寫一則自己很想收到的普通訊息，不用指名誰寄。可以是邀請、問候或分享一件小事，選擇性讀給大家聽。",
      "question": "你會寫甚麼？",
      "twist": "",
      "deeperQuestion": "你有沒有也能把這種訊息送給一位朋友？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v4-party-093",
    "category": "Party",
    "emoji": "🎉",
    "title": "A tabletop museum",
    "scenario": "Choose a carried object for a tabletop exhibition, or draw one instead. Valuable or private items can stay hidden.",
    "question": "What would you introduce?",
    "twist": "",
    "deeperQuestion": "What habit or preference does it represent?",
    "zh": {
      "title": "桌上的小博物館",
      "scenario": "大家從隨身物品選一件願意介紹的東西，放成小展覽。貴重或私人物品可以不用拿出來，也可以用畫的代替。",
      "question": "你想介紹哪件東西？",
      "twist": "",
      "deeperQuestion": "它代表你的哪個習慣或喜好？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v4-party-094",
    "category": "Party",
    "emoji": "🎉",
    "title": "Same vote, different reasons",
    "scenario": "Vote for an early start or a slow morning. Each side finds at least three different reasons behind the shared choice.",
    "question": "Which side are you on, and why?",
    "twist": "",
    "deeperQuestion": "Who chose the same thing for a completely different reason?",
    "zh": {
      "title": "同意也有不同理由",
      "scenario": "大家在早起出門或慢慢開始一天之間投票。每邊再找出至少三種不同理由，看看同一選擇背後有多不一樣。",
      "question": "你是哪一邊，理由是甚麼？",
      "twist": "",
      "deeperQuestion": "有誰選得跟你一樣，原因卻完全不同？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v4-party-095",
    "category": "Party",
    "emoji": "🎉",
    "title": "Room in the gathering",
    "scenario": "For the next gathering, choose a full programme, one theme or no plan. Share the discomfort you hope your choice avoids.",
    "question": "What would you prefer?",
    "twist": "",
    "deeperQuestion": "Could one small adjustment help people with different preferences feel at ease?",
    "zh": {
      "title": "給聚會留空白",
      "scenario": "你們安排下一次聚會，可以選滿滿活動、只有一個主題，或完全不安排。大家先各選，再說自己怕哪種不舒服。",
      "question": "你希望哪種安排？",
      "twist": "",
      "deeperQuestion": "有沒有一個小調整，能讓不同選擇的人都自在？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v4-party-096",
    "category": "Party",
    "emoji": "🎉",
    "title": "Small surprises",
    "scenario": "Groups create a free surprise that neither scares nor embarrasses anyone. Offer it to everyone or willing recipients.",
    "question": "What would you prepare?",
    "twist": "",
    "deeperQuestion": "Do you enjoy the unknown in surprises or the feeling of being remembered?",
    "zh": {
      "title": "全場的小小驚喜",
      "scenario": "各組要準備一個不花錢、不嚇人，也不讓任何人尷尬的小驚喜。可以送給全場，或送給願意接受的人。",
      "question": "你們想準備甚麼？",
      "twist": "",
      "deeperQuestion": "你喜歡驚喜中的未知，還是被記住的感覺？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v4-party-097",
    "category": "Party",
    "emoji": "🎉",
    "title": "A map of connection",
    "scenario": "Map your preferred ways of connecting: text, voice, walks or doing things together. Pick two and talk to someone with different choices.",
    "question": "Which two would you choose?",
    "twist": "",
    "deeperQuestion": "What less-used method might suit a particular friend better?",
    "zh": {
      "title": "朋友聯絡地圖",
      "scenario": "大家畫出自己喜歡聯絡朋友的方式：文字、語音、散步或一起做事。可以選兩種，再找一個跟自己不同的人聊。",
      "question": "你會選哪兩種？",
      "twist": "",
      "deeperQuestion": "哪種你較少用的方式，可能更適合某位朋友？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v4-party-098",
    "category": "Party",
    "emoji": "🎉",
    "title": "A slower shared pace",
    "scenario": "This gathering gains an hour with no transport or tidying pressure. Vote for more games, small-group talk, quiet company or leaving freely.",
    "question": "What would you choose?",
    "twist": "",
    "deeperQuestion": "How do you know you have had enough and can leave happily?",
    "zh": {
      "title": "共同的慢速度",
      "scenario": "假設這場聚會突然多一小時，不用趕車也不用收拾。大家投票選繼續玩、分小組聊、安靜坐或自由離開。",
      "question": "你會選甚麼？",
      "twist": "",
      "deeperQuestion": "你怎樣知道自己已經享受夠，可以開心地離開？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v4-party-099",
    "category": "Party",
    "emoji": "🎉",
    "title": "One thing to remember",
    "scenario": "Before leaving, share one new thing you learned about someone, checking their comfort first or telling them privately instead.",
    "question": "What would you like to remember?",
    "twist": "",
    "deeperQuestion": "How might knowing it affect your next time together?",
    "zh": {
      "title": "散場前的一句記得",
      "scenario": "散場前，每人可以說一句今天從別人身上認識到的新事。先確認對方願意被提起，也可以只私下告訴本人。",
      "question": "你想記住哪件事？",
      "twist": "",
      "deeperQuestion": "知道這件事後，下次你可能會怎樣對待對方？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v4-party-100",
    "category": "Party",
    "emoji": "🎉",
    "title": "A little invitation",
    "scenario": "Anyone may suggest a small future activity without needing the whole group. Interest is optional and silence is not a judgement of the proposer.",
    "question": "What invitation would you offer?",
    "twist": "",
    "deeperQuestion": "What helps turn “Let's meet sometime” into an actual day?",
    "zh": {
      "title": "下次的小邀請",
      "scenario": "大家可以提出一個下次想做的小活動，不用全場參加。感興趣的人可以回應，沒回應也不代表不喜歡提議的人。",
      "question": "你想發出甚麼邀請？",
      "twist": "",
      "deeperQuestion": "甚麼會讓你更容易把「有空再約」變成具體一天？"
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
  },
  {
    "id": "ponder-v4-solo-004",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Without your job title",
    "scenario": "At a gathering, introductions exclude work, education and income. You have one minute to show who you are now.",
    "question": "What would you say first?",
    "twist": "",
    "deeperQuestion": "What important part of you rarely enters your introduction?",
    "zh": {
      "title": "不用介紹職業",
      "scenario": "你到一個小聚會，大家約好介紹自己時不提工作、學歷或收入。你有一分鐘，讓別人知道現在的你是怎樣的人。",
      "question": "你會先講甚麼？",
      "twist": "",
      "deeperQuestion": "有哪個你很在意的部分，平常很少放進自我介紹？"
    }
  },
  {
    "id": "ponder-v4-solo-005",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A room for a month",
    "scenario": "You get a small furnished room for a month, with no need to earn money or host anyone there. You decide what else to bring.",
    "question": "What would you make it into?",
    "twist": "",
    "deeperQuestion": "What kind of space is missing from your life now?",
    "zh": {
      "title": "一個月的免費房間",
      "scenario": "你得到一間小房間免費用一個月，不用拿來賺錢，也不用招待人。基本家具齊全，其他東西由你慢慢放進去。",
      "question": "你想把它變成甚麼地方？",
      "twist": "",
      "deeperQuestion": "現在生活裡，哪種空間最不夠？"
    }
  },
  {
    "id": "ponder-v4-solo-006",
    "category": "Solo",
    "emoji": "🌿",
    "title": "An achievement nobody sees",
    "scenario": "You can achieve something you have wanted without a certificate, photo or public record. You still remember the process and what you learned.",
    "question": "What would you still choose to do?",
    "twist": "",
    "deeperQuestion": "How much would its appeal change without other people's reactions?",
    "zh": {
      "title": "藏起來的成就",
      "scenario": "你可以完成一件一直想做的事，但不會有證書、照片或公開紀錄。你仍然記得整個過程，也能感受到自己學會了。",
      "question": "你還會選擇做哪件事？",
      "twist": "",
      "deeperQuestion": "少了別人的反應，這件事對你的吸引力會變多少？"
    }
  },
  {
    "id": "ponder-v4-solo-007",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Money for comfort",
    "scenario": "You receive HK$3,000 solely for everyday comfort, not saving or resale. Buy an item, service or relief from an inconvenience.",
    "question": "What would you improve first?",
    "twist": "",
    "deeperQuestion": "What comfort do you usually hesitate to spend on?",
    "zh": {
      "title": "一筆只用於舒服的錢",
      "scenario": "你收到三千元，只能用來讓日常舒服一點，不能存起來或買來轉售。可以買物品、服務，或減少一件麻煩。",
      "question": "你會先改善哪件事？",
      "twist": "",
      "deeperQuestion": "你平常在哪種舒服上最容易捨不得花錢？"
    }
  },
  {
    "id": "ponder-v4-solo-008",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Another person's day",
    "scenario": "You can experience a completely different working day with enough ability to avoid harming anyone. Your usual life waits unchanged afterwards.",
    "question": "What work would you try, and what would you want to understand?",
    "twist": "",
    "deeperQuestion": "Is it the work itself or the life around it that attracts you?",
    "zh": {
      "title": "試做別人的一天",
      "scenario": "你可以試過一個完全不同的工作日，能力暫時足夠，不會出錯害到人。晚上回來，原本生活不受影響。",
      "question": "你想試哪種工作，最想了解哪部分？",
      "twist": "",
      "deeperQuestion": "吸引你的是工作內容，還是那種生活的樣子？"
    }
  },
  {
    "id": "ponder-v4-solo-009",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A report without scores",
    "scenario": "An annual report lists moments of energy, ease and engagement, excluding income, productivity and praise.",
    "question": "What moments would appear most often?",
    "twist": "",
    "deeperQuestion": "Which would you deliberately make more room for next month?",
    "zh": {
      "title": "一張沒有成績的報告",
      "scenario": "你收到一份年度報告，只記錄讓你有精神、放鬆或願意投入的時刻。它不記錄收入、效率或別人的讚美。",
      "question": "你猜哪種時刻會最多？",
      "twist": "",
      "deeperQuestion": "下個月你想主動多安排哪一種？"
    }
  },
  {
    "id": "ponder-v4-solo-010",
    "category": "Solo",
    "emoji": "🌿",
    "title": "One ordinary morning",
    "scenario": "You may relive an ordinary morning without changing major events, only allowing yourself more time. It need not be your best day.",
    "question": "Which morning would you choose?",
    "twist": "",
    "deeperQuestion": "What would you have wanted to do more slowly?",
    "zh": {
      "title": "回到一個普通早晨",
      "scenario": "你可以重過一次普通早晨，不改變任何大事，只多留一點時間給自己。那天不必是人生中最好的一天。",
      "question": "你想選哪個早晨？",
      "twist": "",
      "deeperQuestion": "當時你最想慢下來做甚麼？"
    }
  },
  {
    "id": "ponder-v4-solo-011",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Three notifications",
    "scenario": "For a week, keep only three types of phone alerts. Other messages remain for you to check, and emergency contact still works.",
    "question": "Which three would you keep?",
    "twist": "",
    "deeperQuestion": "Are you most afraid of missing information, opportunities or connection?",
    "zh": {
      "title": "只留三個通知",
      "scenario": "你的手機可以只保留三類通知一星期，其餘訊息仍在，但要你主動打開才看到。緊急聯絡不受影響。",
      "question": "你會保留哪三類？",
      "twist": "",
      "deeperQuestion": "你最怕錯過的，是資訊、機會，還是跟人的連結？"
    }
  },
  {
    "id": "ponder-v4-solo-012",
    "category": "Solo",
    "emoji": "🌿",
    "title": "An exhibition of you",
    "scenario": "Create a private exhibition with five objects from different stages of your life. With no audience, nothing needs to look impressive.",
    "question": "What would you put in first?",
    "twist": "",
    "deeperQuestion": "What period of your life do you rarely revisit kindly?",
    "zh": {
      "title": "自己的小型展覽",
      "scenario": "你可以辦一個只給自己看的小展覽，放五件代表人生不同時期的東西。沒有觀眾，所以不用選看起來厲害的。",
      "question": "你會先放哪件？",
      "twist": "",
      "deeperQuestion": "有哪段時期，你平常很少溫柔地回頭看？"
    }
  },
  {
    "id": "ponder-v4-solo-013",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Permission to be average",
    "scenario": "A permit lets you remain average at one thing without needing constant improvement or neglecting anyone's basic needs.",
    "question": "What would you use it for?",
    "twist": "",
    "deeperQuestion": "What would stopping that pursuit make room for?",
    "zh": {
      "title": "一件可以做得普通的事",
      "scenario": "你得到一張許可證，可以在一件事情上只做到普通，不用一直進步。別人的基本需要不會因此受影響。",
      "question": "你想把它用在哪件事？",
      "twist": "",
      "deeperQuestion": "不再追求做得更好，會替你騰出甚麼？"
    }
  },
  {
    "id": "ponder-v4-solo-014",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A weekend a year from now",
    "scenario": "You can see an ordinary weekend one year from now, without major achievements or income. It shows only where you are, with whom and doing what.",
    "question": "What would you hope to see?",
    "twist": "",
    "deeperQuestion": "What small choice now could make that weekend more likely?",
    "zh": {
      "title": "一年後的週末",
      "scenario": "你可以看見一年後一個普通週末的日程，但看不到重大成就或收入。畫面只顯示你在哪裡、跟誰、做甚麼。",
      "question": "你希望看見甚麼安排？",
      "twist": "",
      "deeperQuestion": "現在有哪個小選擇，能讓那個週末更可能出現？"
    }
  },
  {
    "id": "ponder-v4-solo-015",
    "category": "Solo",
    "emoji": "🌿",
    "title": "One free retry",
    "scenario": "Retry something that went poorly, without cost or embarrassment. Success is not guaranteed, but nobody compares you with your earlier attempt.",
    "question": "What would you try again?",
    "twist": "",
    "deeperQuestion": "Did you stop because you disliked it or feared more disappointment?",
    "zh": {
      "title": "免費重試一次",
      "scenario": "你可以重新試一件以前沒做好的小事，費用和尷尬都先拿走。結果仍不保證，但旁人不會拿你跟以前比較。",
      "question": "你想再試甚麼？",
      "twist": "",
      "deeperQuestion": "上次讓你停下來的，是不喜歡，還是怕再失望？"
    }
  },
  {
    "id": "ponder-v4-solo-016",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A new classmate",
    "scenario": "You join a short course where nobody knows your usual reputation as reliable, quiet or capable. You need not maintain an old impression.",
    "question": "What side of yourself would you let appear first?",
    "twist": "",
    "deeperQuestion": "What familiar role sometimes tires you?",
    "zh": {
      "title": "沒有標籤的新同學",
      "scenario": "你加入一個短期課程，沒有人知道你平常是可靠、安靜或能幹的那個人。你可以自然表現，不用接住任何舊印象。",
      "question": "你想讓哪一面先出現？",
      "twist": "",
      "deeperQuestion": "哪個大家習慣的角色，有時會讓你累？"
    }
  },
  {
    "id": "ponder-v4-solo-017",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Three little freedoms",
    "scenario": "For a month, choose freedom over your schedule, your location or explaining small personal choices. Responsibilities remain properly covered.",
    "question": "Which would you take first?",
    "twist": "",
    "deeperQuestion": "What most limits that freedom in your life now?",
    "zh": {
      "title": "三種小自由",
      "scenario": "你可以獲得一個月的其中一種自由：時間可自己排、去處可自己選，或不需要解釋自己的小決定。責任仍有人妥善承接。",
      "question": "你最想先拿哪一種？",
      "twist": "",
      "deeperQuestion": "這種自由在你現在生活裡，最常被甚麼限制？"
    }
  },
  {
    "id": "ponder-v4-solo-018",
    "category": "Solo",
    "emoji": "🌿",
    "title": "The blank page",
    "scenario": "A bookshop gives you a blank notebook that cannot hold work or tasks. Write, draw, collect things or leave pages empty.",
    "question": "What would you put on the first page?",
    "twist": "",
    "deeperQuestion": "Does having no required purpose feel freeing or uncomfortable?",
    "zh": {
      "title": "書店給你的空白頁",
      "scenario": "書店送你一本空白小書，不能拿來記工作或待辦。你可以寫、畫、貼東西，也可以讓一些頁保持空白。",
      "question": "第一頁你會放甚麼？",
      "twist": "",
      "deeperQuestion": "沒有用途要求的東西，會令你自在還是不知所措？"
    }
  },
  {
    "id": "ponder-v4-solo-019",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A small move",
    "scenario": "Move to another neighbourhood for a month with similar rent and commute. Familiar people remain nearby, but daily routes change.",
    "question": "What kind of neighbourhood would you try?",
    "twist": "",
    "deeperQuestion": "Are you seeking a new environment or a change in a repeating habit?",
    "zh": {
      "title": "一個小小的搬家",
      "scenario": "你可以把日常搬到同城另一個街區一個月，房租不變，工作距離也相近。熟悉的人仍見得到，但每天走的路不同。",
      "question": "你想試哪種街區？",
      "twist": "",
      "deeperQuestion": "你想換的是環境，還是某個一直重複的習慣？"
    }
  },
  {
    "id": "ponder-v4-solo-020",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Learning slowly",
    "scenario": "You can learn a skill more slowly than others with a patient teacher and no deadline. It need not become work or prove anything.",
    "question": "What would you still learn?",
    "twist": "",
    "deeperQuestion": "When do you tend to mistake slow progress for not being suited to something?",
    "zh": {
      "title": "願意慢慢學",
      "scenario": "你可以學一項技能，但進度會比別人慢，老師很有耐心，也不設期限。你不用把它變成工作或證明自己。",
      "question": "你仍願意學甚麼？",
      "twist": "",
      "deeperQuestion": "你通常在甚麼時候把「慢」誤會成「不適合」？"
    }
  },
  {
    "id": "ponder-v4-solo-021",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A private purchase",
    "scenario": "You have spare money for something only you will use, without photos, gifts or using it to describe yourself. Essentials are covered.",
    "question": "What would you buy?",
    "twist": "",
    "deeperQuestion": "How much of your wish list would you want even if nobody knew?",
    "zh": {
      "title": "一筆不用展示的花費",
      "scenario": "你有一筆可以自由花的錢，但買到的東西只能自己用，不能拍照、轉送或拿來介紹自己。生活必要開支已足夠。",
      "question": "你會買甚麼？",
      "twist": "",
      "deeperQuestion": "你的願望清單裡，有多少是沒人知道也想要的？"
    }
  },
  {
    "id": "ponder-v4-solo-022",
    "category": "Solo",
    "emoji": "🌿",
    "title": "The less efficient route",
    "scenario": "One route home saves fifteen minutes; another has scenery you enjoy. Nothing is urgent today, although you usually choose speed.",
    "question": "Which route would you take today?",
    "twist": "",
    "deeperQuestion": "Do you usually spend the time saved on something you actually want?",
    "zh": {
      "title": "走一條沒效率的路",
      "scenario": "回家有兩條路，一條快十五分鐘，另一條有你喜歡的風景。今天沒有急事，但你習慣選最快的。",
      "question": "你今天會怎樣走？",
      "twist": "",
      "deeperQuestion": "省下的時間，你通常真的拿來做自己想做的事嗎？"
    }
  },
  {
    "id": "ponder-v4-solo-023",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A new way to describe yourself",
    "scenario": "For a week, pause one label you use for yourself, such as lazy, slow, introverted or too sensitive. Describe specific events instead.",
    "question": "Which label would you pause?",
    "twist": "",
    "deeperQuestion": "Without it, how would you describe something that happened recently?",
    "zh": {
      "title": "一個新的自我稱呼",
      "scenario": "你可以暫停一個常用來形容自己的詞一星期，例如懶、慢、內向或太敏感。這星期只描述具體發生的事。",
      "question": "你想先放下哪個詞？",
      "twist": "",
      "deeperQuestion": "不用那個詞，你會怎樣解釋最近一件事？"
    }
  },
  {
    "id": "ponder-v4-solo-024",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A ticket for one",
    "scenario": "You win one non-transferable ticket to an event you want to attend. No friend can join, but you need not socialise there.",
    "question": "Would you go, and what would you anticipate or worry about?",
    "twist": "",
    "deeperQuestion": "What do you enjoy doing alone more than you expected?",
    "zh": {
      "title": "一張只給自己的票",
      "scenario": "你抽到一張很想去的活動票，不能轉讓，也沒有朋友同行。現場可以安靜看完，不需要認識任何人。",
      "question": "你會去嗎？最期待或擔心哪部分？",
      "twist": "",
      "deeperQuestion": "獨自做哪件事，你其實比想像中享受？"
    }
  },
  {
    "id": "ponder-v4-solo-025",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Turning comparison down",
    "scenario": "For a week, a setting hides likes, rankings and income while leaving people's content visible. You can still enjoy, learn and connect.",
    "question": "Where would you most want that setting?",
    "twist": "",
    "deeperQuestion": "Without numbers, how would you judge whether you like something?",
    "zh": {
      "title": "把比較關小一點",
      "scenario": "有個設定可以讓你一星期看不到別人的讚數、排名和收入，內容仍看得到。你仍然可以喜歡、學習或聯絡對方。",
      "question": "你最想在哪個地方開啟它？",
      "twist": "",
      "deeperQuestion": "少了數字，你會用甚麼判斷自己喜不喜歡一件事？"
    }
  },
  {
    "id": "ponder-v4-solo-026",
    "category": "Solo",
    "emoji": "🌿",
    "title": "One less task for future you",
    "scenario": "You have half an hour to make next week easier through one small task rather than a major plan.",
    "question": "What would you do?",
    "twist": "",
    "deeperQuestion": "When helping future you, do you forget that today's you also needs rest?",
    "zh": {
      "title": "讓未來的你少一件事",
      "scenario": "你有半小時，可以替下星期的自己預先處理一件小事。不能做大計劃，只選一件真的能減少麻煩的事。",
      "question": "你會選甚麼？",
      "twist": "",
      "deeperQuestion": "你照顧未來的自己時，會不會忘記今天也需要休息？"
    }
  },
  {
    "id": "ponder-v4-solo-027",
    "category": "Solo",
    "emoji": "🌿",
    "title": "No audience today",
    "scenario": "For one day nobody comments on your choices, and tomorrow returns to normal. You may change one ordinary decision without needing to rebel.",
    "question": "What would you change?",
    "twist": "",
    "deeperQuestion": "Whose opinion were you preparing for before they even spoke?",
    "zh": {
      "title": "如果今天沒有觀眾",
      "scenario": "你今天做的所有選擇都不會被別人評論，明天生活照常。你不用刻意叛逆，只能改一個平常的小決定。",
      "question": "你會改哪件小事？",
      "twist": "",
      "deeperQuestion": "你原本在替誰的眼光預先做準備？"
    }
  },
  {
    "id": "ponder-v4-solo-028",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Leaving something unfinished",
    "scenario": "You may leave one non-urgent task until tomorrow without losing an opportunity or affecting anyone. The freed evening has no replacement task.",
    "question": "What would you leave, and how would you spend tonight?",
    "twist": "",
    "deeperQuestion": "What is hardest about letting a task stay unfinished overnight?",
    "zh": {
      "title": "留下一個未完成",
      "scenario": "你可以把一件不緊急的事放到明天，不會因此失去機會或影響別人。今晚多出的時間沒有新任務。",
      "question": "你會放下甚麼，怎樣過今晚？",
      "twist": "",
      "deeperQuestion": "讓事情未完成地過夜，對你最難的是甚麼？"
    }
  },
  {
    "id": "ponder-v4-solo-029",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Choosing a strength",
    "scenario": "Choose a strength to develop with three months of patient support: noticing, expressing, caring, creating or organising, rather than what pays most.",
    "question": "Which would you develop?",
    "twist": "",
    "deeperQuestion": "What part of daily life would you hope it changes?",
    "zh": {
      "title": "重新挑一個擅長",
      "scenario": "你可以挑一項新長處慢慢培養，前三個月會有人耐心陪你。選項不是最賺錢的，而是觀察、表達、照顧、創作或組織。",
      "question": "你想培養哪一項？",
      "twist": "",
      "deeperQuestion": "你希望它改變哪一段日常？"
    }
  },
  {
    "id": "ponder-v4-solo-030",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A small celebration",
    "scenario": "You finish something whose difficulty only you understand. You may celebrate for an evening without meeting anyone else's standard or inviting anyone.",
    "question": "How would you celebrate?",
    "twist": "",
    "deeperQuestion": "How big must an achievement be before you let yourself celebrate?",
    "zh": {
      "title": "給自己辦一場小慶祝",
      "scenario": "你完成一件只有自己知道有多難的事，可以花一個晚上慶祝。不用達到別人的標準，也不一定要邀人。",
      "question": "你會怎樣慶祝？",
      "twist": "",
      "deeperQuestion": "你通常要做到多大一件事，才覺得自己值得慶祝？"
    }
  },
  {
    "id": "ponder-v4-solo-031",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A place for basic questions",
    "scenario": "A workshop promises to answer every basic question seriously without laughing. Bring something you usually hesitate to ask.",
    "question": "What would you ask?",
    "twist": "",
    "deeperQuestion": "What judgement do you fear when asking questions?",
    "zh": {
      "title": "一個可以問笨問題的地方",
      "scenario": "你進入一間工作室，大家答應任何基本問題都認真回答，不會笑你。你可以帶來一件平常怕問的事。",
      "question": "你最想問甚麼？",
      "twist": "",
      "deeperQuestion": "你怕問問題時，最擔心別人對你下哪個判斷？"
    }
  },
  {
    "id": "ponder-v4-solo-032",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A week without adverts",
    "scenario": "For a week you see no shopping promotions, while shops remain available and you can seek items yourself. No essentials disappear.",
    "question": "What would you still seek out?",
    "twist": "",
    "deeperQuestion": "What did you start wanting only after seeing someone else own it?",
    "zh": {
      "title": "一週沒有購物廣告",
      "scenario": "你可以一星期完全看不到購物推介，商店仍照常開，也能主動找想買的東西。生活不會突然少任何必需品。",
      "question": "你猜自己仍會主動想買甚麼？",
      "twist": "",
      "deeperQuestion": "有哪個想買的東西，是看到別人擁有後才開始想要？"
    }
  },
  {
    "id": "ponder-v4-solo-033",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Your younger self visits",
    "scenario": "Your childhood self visits for an hour, seeing only what you choose. They do not ask about income or titles, only how you live.",
    "question": "What would you show first?",
    "twist": "",
    "deeperQuestion": "What ordinary part of today would delight your younger self?",
    "zh": {
      "title": "小時候的你來作客",
      "scenario": "小時候的你可以來現在家裡坐一小時，只看你願意展示的部分。對方不會問收入或頭銜，可能只想看看你每天怎樣過。",
      "question": "你最想先給他看甚麼？",
      "twist": "",
      "deeperQuestion": "有哪件現在很普通的事，當年的你會很開心知道？"
    }
  },
  {
    "id": "ponder-v4-solo-034",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Three days of work",
    "scenario": "Try an unlikely job for three days with fair pay and guidance. You are exploring a rhythm, not committing to a career change.",
    "question": "What would you try?",
    "twist": "",
    "deeperQuestion": "What would you move away from, and what feeling would you move toward?",
    "zh": {
      "title": "一份只做三天的工作",
      "scenario": "你可以去做一份平常不會選的工作三天，薪水足夠，也有人帶。目的只是看看另一種節奏，不用決定轉行。",
      "question": "你想試甚麼？",
      "twist": "",
      "deeperQuestion": "你想逃開現有工作哪部分，又想靠近哪種感覺？"
    }
  },
  {
    "id": "ponder-v4-solo-035",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A table just for you",
    "scenario": "You have time and ingredients for a proper dinner for yourself. Nobody joins, no photo is needed, and leftovers will keep.",
    "question": "What would you make or arrange?",
    "twist": "",
    "deeperQuestion": "How different is making an effort for yourself from hosting someone else?",
    "zh": {
      "title": "一個人也開的餐桌",
      "scenario": "你可以為自己準備一頓完整晚餐，時間和食材都足夠。沒有人來吃，也不用留下照片，剩菜會妥善保存。",
      "question": "你會煮或安排甚麼？",
      "twist": "",
      "deeperQuestion": "只為自己花心思，跟招待別人有多不一樣？"
    }
  },
  {
    "id": "ponder-v4-solo-036",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Trying another description",
    "scenario": "Someone you trust gives three descriptions of you, including one you never use. Try seeing yourself through it for a week without needing instant belief.",
    "question": "What would you hope the new word is?",
    "twist": "",
    "deeperQuestion": "Do you more readily accept appreciation or criticism?",
    "zh": {
      "title": "暫借別人的評語",
      "scenario": "一位信任你的人寫了三個形容你的詞，其中一個你從沒用過。你可以試著用那個角度看自己一星期，不必立即相信。",
      "question": "你希望那個新詞是甚麼？",
      "twist": "",
      "deeperQuestion": "你比較容易接受別人的欣賞，還是批評？"
    }
  },
  {
    "id": "ponder-v4-solo-037",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A walk without a purpose",
    "scenario": "Walk your neighbourhood for an hour without step counts, lessons or errands. Sit when tired, with no route to finish.",
    "question": "Where would you go?",
    "twist": "",
    "deeperQuestion": "Does having no outcome to report affect your enjoyment?",
    "zh": {
      "title": "沒有目的的小走走",
      "scenario": "你有一小時可以在熟悉街區走走，不記步數，不聽課程，也不用辦事。走累了可以坐下，不需要完成路線。",
      "question": "你最想往哪裡走？",
      "twist": "",
      "deeperQuestion": "沒有可交代的成果，會影響你享受這段時間嗎？"
    }
  },
  {
    "id": "ponder-v4-solo-038",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A place held for you",
    "scenario": "A place in an activity you want is held until tomorrow evening. There is no race, the fee is affordable, and only your decision remains.",
    "question": "What would you still consider?",
    "twist": "",
    "deeperQuestion": "Once external obstacles are removed, what hesitation remains?",
    "zh": {
      "title": "一個保留名額",
      "scenario": "你一直想參加的活動替你保留一個名額到明晚，不用比快，也不用跟人競爭。費用可以負擔，剩下的是自己要不要去。",
      "question": "你還會考慮哪些事？",
      "twist": "",
      "deeperQuestion": "拿走外在障礙後，你心裡最大的猶豫是甚麼？"
    }
  },
  {
    "id": "ponder-v4-solo-039",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A simple no",
    "scenario": "You may decline one extra invitation or request without harming the relationship. Existing basic commitments remain yours.",
    "question": "Where would you use the card?",
    "twist": "",
    "deeperQuestion": "How would you decline in one sentence without a long explanation?",
    "zh": {
      "title": "一張簡單的拒絕卡",
      "scenario": "你可以對一個額外邀請或請求說不，對方會理解，也不影響關係。不能拒絕已承諾的基本責任。",
      "question": "你最想把卡用在哪裡？",
      "twist": "",
      "deeperQuestion": "如果不用詳細解釋，你會怎樣用一句話婉拒？"
    }
  },
  {
    "id": "ponder-v4-solo-040",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Next week, not someday",
    "scenario": "Take one step toward a distant wish that can be finished next week. No all-night research or buying lots of equipment first.",
    "question": "What step would you choose?",
    "twist": "",
    "deeperQuestion": "What preparation helps, and what mainly delays beginning?",
    "zh": {
      "title": "把未來縮成下週",
      "scenario": "你有一個很遠的願望，今天只能替它做一個下週完成的小動作。不能研究整晚，也不能先買一堆工具。",
      "question": "你會選哪個動作？",
      "twist": "",
      "deeperQuestion": "哪種準備有幫助，哪種其實在拖延開始？"
    }
  },
  {
    "id": "ponder-v4-solo-041",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Reading your calendar",
    "scenario": "Your month is printed without event names, showing only time spent. Mark it as necessary, enjoyed or habitual in three colours.",
    "question": "Which colour would dominate?",
    "twist": "",
    "deeperQuestion": "What small block of time would you first choose differently?",
    "zh": {
      "title": "重看自己的日曆",
      "scenario": "有人把你上個月的日曆印出來，拿走事項名稱，只留下時間分配。你可以用三種顏色標出必需、喜歡和習慣。",
      "question": "你猜哪種顏色最多？",
      "twist": "",
      "deeperQuestion": "你想從哪一小段時間開始重新選擇？"
    }
  },
  {
    "id": "ponder-v4-solo-042",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Good news kept close",
    "scenario": "You can keep happy news to yourself for a week without posting or hinting. It stays real and yours to enjoy privately.",
    "question": "How would you enjoy the happiness yourself?",
    "twist": "",
    "deeperQuestion": "What response do you most hope for when sharing good news?",
    "zh": {
      "title": "不必分享的好消息",
      "scenario": "你有件開心事，可以先保留一星期，不公開也不暗示。它仍然是真的，你也可以私下好好享受。",
      "question": "你會怎樣讓自己感受到這份開心？",
      "twist": "",
      "deeperQuestion": "分享好消息時，你最期待收到甚麼反應？"
    }
  },
  {
    "id": "ponder-v4-solo-043",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A taste without justification",
    "scenario": "For one day, food, clothes and music follow your preferences without needing taste or justification. Essential tasks still happen.",
    "question": "What usually unspoken preference would you choose first?",
    "twist": "",
    "deeperQuestion": "When did you start feeling that liking something needs a reason?",
    "zh": {
      "title": "一個不需解釋的喜好",
      "scenario": "你可以選一天完全照自己的小喜好生活，食物、衣服、音樂都不用有品味或有道理。必要事情仍照常完成。",
      "question": "你會先選哪個平常不太敢承認的喜好？",
      "twist": "",
      "deeperQuestion": "你從甚麼時候開始覺得喜歡也需要理由？"
    }
  },
  {
    "id": "ponder-v4-solo-044",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A future home",
    "scenario": "Plan a future home without comparing size, location or value. Describe only three ordinary moments you want inside it.",
    "question": "What three moments would you describe?",
    "twist": "",
    "deeperQuestion": "Which could you experience a little now without moving?",
    "zh": {
      "title": "未來的家不比大小",
      "scenario": "你可以規劃未來的家，但這次不比較面積、地段或價值。只能描述三個想在裡面發生的普通時刻。",
      "question": "你會描述哪三個時刻？",
      "twist": "",
      "deeperQuestion": "其中哪個不必搬家，現在就能有一點？"
    }
  },
  {
    "id": "ponder-v4-solo-045",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Effort that feels worthwhile",
    "scenario": "Choose a month of effort that need not please anyone. There may be no visible outcome, but the process is yours.",
    "question": "What would you willingly work at?",
    "twist": "",
    "deeperQuestion": "What kind of tiredness feels satisfying, and what leaves you empty?",
    "zh": {
      "title": "一份值得的辛苦",
      "scenario": "你可以選一件需要花力氣、卻不用討好任何人的事做一個月。完成後不一定有成果，但過程完全由你選。",
      "question": "你願意為甚麼花這份力氣？",
      "twist": "",
      "deeperQuestion": "哪種累會讓你踏實，哪種只讓你空掉？"
    }
  },
  {
    "id": "ponder-v4-solo-046",
    "category": "Solo",
    "emoji": "🌿",
    "title": "An answer you may change",
    "scenario": "You once stated a preference or goal publicly, but your view has changed. Today you can answer again without being called inconsistent.",
    "question": "What answer would you update?",
    "twist": "",
    "deeperQuestion": "What new experience changed your view?",
    "zh": {
      "title": "可以改變答案",
      "scenario": "你曾公開說過自己喜歡或想要一件事，現在想法變了。今天有機會重新回答，沒有人會笑你前後不一。",
      "question": "你最想更新哪個答案？",
      "twist": "",
      "deeperQuestion": "是甚麼新經驗讓你改變了看法？"
    }
  },
  {
    "id": "ponder-v4-solo-047",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Ten minutes of courage",
    "scenario": "You get ten minutes with less fear of awkwardness, for speaking up, signing up or starting something small, not harmful risks.",
    "question": "What would you do first?",
    "twist": "",
    "deeperQuestion": "What is the worst manageable outcome afterwards?",
    "zh": {
      "title": "只有十分鐘的勇氣",
      "scenario": "你得到十分鐘比較不怕尷尬的時間，不能用來冒險傷害自己或別人。適合拿來開口、報名或開始一件小事。",
      "question": "你會先做甚麼？",
      "twist": "",
      "deeperQuestion": "做完之後，最壞但仍能承受的結果是甚麼？"
    }
  },
  {
    "id": "ponder-v4-solo-048",
    "category": "Solo",
    "emoji": "🌿",
    "title": "More than the trophy",
    "scenario": "Your past achievements go in a box where awards and numbers vanish, leaving skills, people and experiences.",
    "question": "What would you most want to take back out?",
    "twist": "",
    "deeperQuestion": "What will a goal you currently pursue leave you with?",
    "zh": {
      "title": "留下來的不是獎盃",
      "scenario": "你把過往完成的事放進一個盒，獎狀和數字會消失，只留下你學會的本領、認識的人和經歷。",
      "question": "你最想拿回哪一樣？",
      "twist": "",
      "deeperQuestion": "你現在追的目標，會替你留下甚麼？"
    }
  },
  {
    "id": "ponder-v4-solo-049",
    "category": "Solo",
    "emoji": "🌿",
    "title": "What money reassures",
    "scenario": "Divide extra income among security, experiences and sharing, without equal portions or comparison. Your basic living costs are already covered.",
    "question": "How would you divide it?",
    "twist": "",
    "deeperQuestion": "Which portion would make you uneasy if it were too small?",
    "zh": {
      "title": "重新認識花錢的安心",
      "scenario": "你可以把一筆額外收入分成安全、體驗和分享三份，不要求平均，也不用跟別人一樣。基本生活已經有保障。",
      "question": "你會怎樣分？",
      "twist": "",
      "deeperQuestion": "哪一份如果太少，最容易令你不安？"
    }
  },
  {
    "id": "ponder-v4-solo-050",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A book you can leave",
    "scenario": "You get a book you have wanted to read, with permission to stop anytime. No review or completion is required; keep one sentence worth remembering.",
    "question": "What kind of book would you choose?",
    "twist": "",
    "deeperQuestion": "Where do you tend to treat finishing as the only value?",
    "zh": {
      "title": "一本沒讀完也可以的書",
      "scenario": "你拿到一本一直想讀的書，可以隨時停，不用交心得，也不用讀完才算有收穫。你只需留下一句想記住的話。",
      "question": "你會挑哪種書？",
      "twist": "",
      "deeperQuestion": "你在哪些事情上容易把完成當成唯一價值？"
    }
  },
  {
    "id": "ponder-v4-solo-051",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A deliberate choice today",
    "scenario": "Pause three seconds before one automatic action today: replying, buying a drink, accepting an invitation or scrolling at night.",
    "question": "Where would you pause?",
    "twist": "",
    "deeperQuestion": "What need would you hope to hear in those three seconds?",
    "zh": {
      "title": "今天的主動選擇",
      "scenario": "今天有一件平常自動做的小事，可以停三秒再選。可以是回訊息、買飲品、答應邀約或睡前滑手機。",
      "question": "你想在哪件事前停一停？",
      "twist": "",
      "deeperQuestion": "你希望這三秒幫你聽見甚麼需要？"
    }
  },
  {
    "id": "ponder-v4-solo-052",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A part you can share",
    "scenario": "Someone reliable offers help with one everyday task, without conditions or judging your ability. You only need to explain what helps.",
    "question": "What would you hand over?",
    "twist": "",
    "deeperQuestion": "Is it harder to hand over the task or the sense of control?",
    "zh": {
      "title": "不用自己扛的部分",
      "scenario": "有人願意可靠地幫你處理一件日常小事，沒有交換條件，也不會拿來評論你的能力。你只需說清楚要怎樣幫。",
      "question": "你會交出哪件事？",
      "twist": "",
      "deeperQuestion": "你最難交出去的，是工作本身，還是掌控感？"
    }
  },
  {
    "id": "ponder-v4-solo-053",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Meeting another path",
    "scenario": "You can have tea with yourself from another life path, neither more successful nor less, simply experienced differently. There is time for one question.",
    "question": "What would you ask?",
    "twist": "",
    "deeperQuestion": "What curiosity about your current life does that question reveal?",
    "zh": {
      "title": "遇見另一條路的自己",
      "scenario": "你可以跟選了另一條人生路的自己喝一杯茶，對方沒有比你成功或失敗，只是經驗不同。時間夠問一個問題。",
      "question": "你最想問甚麼？",
      "twist": "",
      "deeperQuestion": "這個問題透露了你對現在生活的哪個好奇？"
    }
  },
  {
    "id": "ponder-v4-solo-054",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Your everyday soundtrack",
    "scenario": "Choose three pieces of music for leaving home, lunch and returning tomorrow. They serve your mood, not anyone else's atmosphere.",
    "question": "What three sounds would you choose?",
    "twist": "",
    "deeperQuestion": "Which part of your day would you most like to feel different?",
    "zh": {
      "title": "生活的小配樂",
      "scenario": "你可以替明天選三段背景音樂，分別在出門、午休和回家時響起。不是要配合別人的氣氛，只照顧自己。",
      "question": "你會選哪三種聲音？",
      "twist": "",
      "deeperQuestion": "你最想讓哪段日常的心情改變一點？"
    }
  },
  {
    "id": "ponder-v4-solo-055",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Your city bench",
    "scenario": "Place a bench anywhere in the city with one sentence for passers-by. It cannot advertise and need not bear your name.",
    "question": "Where would it go, and what would it say?",
    "twist": "",
    "deeperQuestion": "Is it something you also need to hear?",
    "zh": {
      "title": "一張城市長椅",
      "scenario": "你可以在城市一個地方放一張長椅，旁邊有一句你想留給路人的話。它不能賣東西，也不用寫你的名字。",
      "question": "你會放在哪裡，寫甚麼？",
      "twist": "",
      "deeperQuestion": "那句話是不是你自己也需要聽到的？"
    }
  },
  {
    "id": "ponder-v4-solo-056",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A stage beyond your strengths",
    "scenario": "You get five minutes on a stage whose audience wants to know you, not see your best skill. Speak, make or show something you enjoy.",
    "question": "What would you bring?",
    "twist": "",
    "deeperQuestion": "Without proving ability, what would you want people to see?",
    "zh": {
      "title": "專長之外的小舞台",
      "scenario": "你得到一個小舞台，觀眾只想認識你，不期待最拿手的表演。你可以用五分鐘講、做或展示一件喜歡的事。",
      "question": "你會帶上甚麼？",
      "twist": "",
      "deeperQuestion": "如果不用證明能力，你最想讓人看到甚麼？"
    }
  },
  {
    "id": "ponder-v4-solo-057",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Your own holiday",
    "scenario": "Create a personal annual holiday marked by one small ritual, without celebrating achievement or waiting for congratulations.",
    "question": "What would it mark, and how would you spend it?",
    "twist": "",
    "deeperQuestion": "What change in your life deserves your own remembrance?",
    "zh": {
      "title": "一個人的小節日",
      "scenario": "你可以訂一個只屬於自己的節日，每年那天做一件固定小事。它不紀念成就，也不用等任何人祝賀。",
      "question": "你會紀念甚麼，怎樣過？",
      "twist": "",
      "deeperQuestion": "你生活裡有哪種轉變，值得自己記得？"
    }
  },
  {
    "id": "ponder-v4-solo-058",
    "category": "Solo",
    "emoji": "🌿",
    "title": "No first place tomorrow",
    "scenario": "Tomorrow's activity has no rankings or progress comparisons. You may still care deeply, without knowing how you measure against others.",
    "question": "What activity would you try this with?",
    "twist": "",
    "deeperQuestion": "Would less comparison bring more engagement or less motivation?",
    "zh": {
      "title": "明天不用拿第一",
      "scenario": "明天你可以參加一件喜歡的事，大家不排名、不比較進度。你仍可以認真做，只是不會知道自己比別人好多少。",
      "question": "你想拿哪件事來試？",
      "twist": "",
      "deeperQuestion": "少了比較，你會更投入，還是少一點動力？"
    }
  },
  {
    "id": "ponder-v4-solo-059",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Kindness without repayment",
    "scenario": "Someone does a small thing you needed and explicitly asks for no return. You may simply thank them or pass the kindness elsewhere.",
    "question": "What would your first response be?",
    "twist": "",
    "deeperQuestion": "Can you enjoy being cared for, or do you quickly plan repayment?",
    "zh": {
      "title": "一份不用回報的好意",
      "scenario": "有人替你做了一件剛好需要的小事，明說不用回禮。你可以只說謝謝，也可以把那份好意留到別處。",
      "question": "你第一個反應會是甚麼？",
      "twist": "",
      "deeperQuestion": "被照顧時，你容易享受，還是很快想怎樣還？"
    }
  },
  {
    "id": "ponder-v4-solo-060",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Off duty from reliability",
    "scenario": "An event already has a reliable organiser. You are invited only as a participant, without researching routes, reminders or managing the mood.",
    "question": "Would you relax or feel tempted to take over?",
    "twist": "",
    "deeperQuestion": "How long has it been since you let someone else arrange things for you?",
    "zh": {
      "title": "暫時不當可靠的人",
      "scenario": "在一次小活動裡，已經有人妥善負責安排。你被邀請只當參加者，不用預先查路、提醒時間或照顧氣氛。",
      "question": "你會覺得輕鬆，還是忍不住想接手？",
      "twist": "",
      "deeperQuestion": "你有多久沒有讓別人好好安排一次？"
    }
  },
  {
    "id": "ponder-v4-solo-061",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Change one evening",
    "scenario": "For a month, replace one weekly evening routine without neglecting responsibilities. Choose something you want, not merely greater discipline.",
    "question": "What would you replace it with?",
    "twist": "",
    "deeperQuestion": "What do you fear losing by doing less of the old routine?",
    "zh": {
      "title": "只改一個晚上",
      "scenario": "你可以把每星期一個晚上的例行安排換掉一個月，不影響基本責任。新安排必須是你真心想試的，不是應該更自律。",
      "question": "你想換成甚麼？",
      "twist": "",
      "deeperQuestion": "你最怕少做原本那件事會失去甚麼？"
    }
  },
  {
    "id": "ponder-v4-solo-062",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Your little shop",
    "scenario": "Open a three-day shop with costs covered and offerings based on your tastes. Few customers are fine, with no long-term commitment.",
    "question": "What would you sell or offer?",
    "twist": "",
    "deeperQuestion": "What interests you, and what might you do mainly to meet expectations?",
    "zh": {
      "title": "你的生活小商店",
      "scenario": "你可以開一間只營業三天的小店，成本有人承擔，商品由你的喜好出發。顧客不多也沒關係，不用長期經營。",
      "question": "你想賣甚麼或提供甚麼？",
      "twist": "",
      "deeperQuestion": "哪部分令你有興趣，哪部分你只是不想辜負期待？"
    }
  },
  {
    "id": "ponder-v4-solo-063",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Pausing one should",
    "scenario": "Pause one recurring “I should” for a week, keeping responsibilities but observing choices without that push.",
    "question": "Which sentence would you pause?",
    "twist": "",
    "deeperQuestion": "Where did it come from, and does it still fit?",
    "zh": {
      "title": "停用一句應該",
      "scenario": "你可以把一句常對自己說的「我應該」停用一星期。不是放棄責任，而是看看不用那句催促，自己會怎樣選。",
      "question": "你想停用哪一句？",
      "twist": "",
      "deeperQuestion": "那句話最初是誰教你的，現在還適合嗎？"
    }
  },
  {
    "id": "ponder-v4-solo-064",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Someone will hear the whole story",
    "scenario": "You have an hour to fully tell something usually brushed aside as “nothing much.” The listener has time and will not immediately judge.",
    "question": "What would you talk about?",
    "twist": "",
    "deeperQuestion": "What feeling do you usually make sound smaller than it is?",
    "zh": {
      "title": "有人願意聽完整版",
      "scenario": "你有一小時，可以把一件常被你用「沒甚麼」帶過的事完整講出來。聽的人不趕時間，也不會立刻評價。",
      "question": "你會講哪件事？",
      "twist": "",
      "deeperQuestion": "你平常把哪個感受說得比實際小？"
    }
  },
  {
    "id": "ponder-v4-solo-065",
    "category": "Solo",
    "emoji": "🌿",
    "title": "An expiring voucher",
    "scenario": "A voucher expires tomorrow, but the shop has nothing you particularly want. Using it requires extra money and an hour to collect the purchase.",
    "question": "Would you use it or let it expire?",
    "twist": "",
    "deeperQuestion": "How do you distinguish taking an opportunity from acting out of fear of waste?",
    "zh": {
      "title": "快到期的禮券",
      "scenario": "你有一張明天到期的禮券，但店裡沒有特別想買的東西。使用它要再花一點錢，也要花一小時去取貨。",
      "question": "你會用掉它，還是讓它到期？",
      "twist": "",
      "deeperQuestion": "你怎樣分辨把握機會和怕浪費而勉強自己？"
    }
  },
  {
    "id": "ponder-v4-solo-066",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A small manageable risk",
    "scenario": "Try something that may fail, risking only an afternoon and an affordable sum. Nobody treats the result as a verdict on you.",
    "question": "What would you try?",
    "twist": "",
    "deeperQuestion": "What do you tend to make one failure mean?",
    "zh": {
      "title": "一個小小的風險",
      "scenario": "你可以試一件可能失敗的小事，損失只限一個下午和一筆負擔得起的錢。沒有人會把結果拿來評價整個你。",
      "question": "你會選甚麼？",
      "twist": "",
      "deeperQuestion": "你通常把一次失敗解讀成甚麼？"
    }
  },
  {
    "id": "ponder-v4-solo-067",
    "category": "Solo",
    "emoji": "🌿",
    "title": "How you introduce yourself",
    "scenario": "Write a one-line introduction using three things you care about now, without titles or a promise to stay the same.",
    "question": "What three things would you name?",
    "twist": "",
    "deeperQuestion": "Which gets less of your time than you assumed?",
    "zh": {
      "title": "重新安排自己的名字",
      "scenario": "有人請你寫一行個人簡介，只能放現在在意的三件事。不能列頭銜，也不必承諾以後都不變。",
      "question": "你會寫哪三件？",
      "twist": "",
      "deeperQuestion": "其中哪件你花的時間，比自己以為的少？"
    }
  },
  {
    "id": "ponder-v4-solo-068",
    "category": "Solo",
    "emoji": "🌿",
    "title": "An ending to the day",
    "scenario": "Choose a five-minute closing ritual after which you stop judging whether you worked hard enough. It is neither a review nor tomorrow's task list.",
    "question": "What would you do?",
    "twist": "",
    "deeperQuestion": "What signal helps you feel the day may end?",
    "zh": {
      "title": "讓一天有個結尾",
      "scenario": "你可以替每天設一個五分鐘收尾動作，做完就不用再回想是否夠努力。它不是檢討，也不用列明天的待辦。",
      "question": "你想做甚麼？",
      "twist": "",
      "deeperQuestion": "怎樣的訊號，最能讓你覺得今天可以結束了？"
    }
  },
  {
    "id": "ponder-v4-solo-069",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A different role at the party",
    "scenario": "At the next gathering, someone takes your usual role, such as entertaining, organising or including quieter people. Try participating differently.",
    "question": "How would you like to be there?",
    "twist": "",
    "deeperQuestion": "Would doing less make you worry about no longer being needed?",
    "zh": {
      "title": "重選一次聚會角色",
      "scenario": "下次聚會有人願意接手你平常的角色，例如逗笑、安排或照顧落單的人。你可以試一次不同的參與方式。",
      "question": "你想怎樣待在那裡？",
      "twist": "",
      "deeperQuestion": "少做那些事，你會擔心自己不再被需要嗎？"
    }
  },
  {
    "id": "ponder-v4-solo-070",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A teacher who sees the process",
    "scenario": "A teacher looks only at trying, questioning and adjusting, not the polish of the finished result. Bring something you are learning.",
    "question": "What would you bring?",
    "twist": "",
    "deeperQuestion": "What effort would you want the teacher to notice first?",
    "zh": {
      "title": "一個只看過程的老師",
      "scenario": "有位老師只會看你怎樣嘗試、提問和調整，不看最後成品漂亮不漂亮。你可以帶一件正在學的事去上課。",
      "question": "你想帶甚麼去？",
      "twist": "",
      "deeperQuestion": "你希望老師先看見哪份努力？"
    }
  },
  {
    "id": "ponder-v4-solo-071",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Two kinds of wishes",
    "scenario": "Sort wishes into things that feel good to have and things that feel good while doing them. A wish can belong to both.",
    "question": "What would you put in each first?",
    "twist": "",
    "deeperQuestion": "Which pile has received more of your time lately?",
    "zh": {
      "title": "把心願分成兩種",
      "scenario": "你把心願寫成兩疊：一疊是擁有後會開心，一疊是做的時候已經開心。同一件事可以放兩邊。",
      "question": "你會先各放哪一件？",
      "twist": "",
      "deeperQuestion": "你最近的時間，大多給了哪一疊？"
    }
  },
  {
    "id": "ponder-v4-solo-072",
    "category": "Solo",
    "emoji": "🌿",
    "title": "No reaction required",
    "scenario": "Leave one non-urgent but emotionally stirring message overnight without misunderstanding or making matters worse.",
    "question": "What kind of message would you leave?",
    "twist": "",
    "deeperQuestion": "What are you trying to protect when you rush to respond?",
    "zh": {
      "title": "今天可以不回應",
      "scenario": "你可以讓一則不緊急、卻很容易牽動情緒的訊息先放一晚。對方不會誤會，事情也不會惡化。",
      "question": "你會把哪種訊息先放下？",
      "twist": "",
      "deeperQuestion": "你急著回應時，通常想保護甚麼？"
    }
  },
  {
    "id": "ponder-v4-solo-073",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Interesting, not efficient",
    "scenario": "You can spend an afternoon making something enjoyable that would be cheaper to buy. It is affordable and nothing urgent waits.",
    "question": "What would you be willing to make?",
    "twist": "",
    "deeperQuestion": "How do you decide whether time has been wasted?",
    "zh": {
      "title": "有趣但不划算",
      "scenario": "你有機會花一個下午做一件有趣卻不太划算的事，例如慢慢手作一樣可以便宜買到的東西。費用可負擔，也沒急事。",
      "question": "你願意做甚麼？",
      "twist": "",
      "deeperQuestion": "你怎樣判斷一段時間有沒有白花？"
    }
  },
  {
    "id": "ponder-v4-solo-074",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Invited to lead",
    "scenario": "A group invites you to lead its next activity because it values your ideas. You enjoy contributing but are unsure about everyone waiting for your decisions.",
    "question": "What would you clarify before accepting?",
    "twist": "",
    "deeperQuestion": "Does the influence you enjoy require being at the front?",
    "zh": {
      "title": "被邀請站到前面",
      "scenario": "一個小組邀你做下一次活動的帶領者，因為欣賞你的想法。你願意做事，卻不確定喜不喜歡所有人等你決定。",
      "question": "你會先問清楚哪件事，再決定答不答應？",
      "twist": "",
      "deeperQuestion": "你喜歡的影響力，需要站在最前面才能做到嗎？"
    }
  },
  {
    "id": "ponder-v4-solo-075",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Curiosity without expertise",
    "scenario": "Explore a topic for a month, stopping wherever it interests you. No finished work or expert identity is required.",
    "question": "What would you explore?",
    "twist": "",
    "deeperQuestion": "Do you ever avoid starting because you fear not going deeply enough?",
    "zh": {
      "title": "不必成為專家的好奇",
      "scenario": "你可以隨便研究一個主題一個月，停在有趣的地方就好。不用整理成作品，也不用把自己介紹成懂這件事的人。",
      "question": "你想研究甚麼？",
      "twist": "",
      "deeperQuestion": "你會不會因為怕學得不夠深，而乾脆不開始？"
    }
  },
  {
    "id": "ponder-v4-solo-076",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Your day through a friend's eyes",
    "scenario": "A friend who knows you accompanies an ordinary day, noting small things they appreciate. You see the list that evening.",
    "question": "What do you think they would note?",
    "twist": "",
    "deeperQuestion": "What apparently ordinary thing might you actually do with great care?",
    "zh": {
      "title": "朋友眼中的普通一天",
      "scenario": "一位了解你的朋友陪你過普通一天，只會記錄自己覺得值得欣賞的小事。晚上你可以看看那張清單。",
      "question": "你猜他會寫下甚麼？",
      "twist": "",
      "deeperQuestion": "哪件你覺得理所當然的事，可能其實做得很用心？"
    }
  },
  {
    "id": "ponder-v4-solo-077",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A misunderstood creation",
    "scenario": "Someone likes a small creation of yours but interprets it differently from your intention. You are surprised rather than offended.",
    "question": "Would you explain your intention or hear more of their view?",
    "twist": "",
    "deeperQuestion": "Does being understood or giving someone a new feeling matter more?",
    "zh": {
      "title": "作品被誤會了",
      "scenario": "你做的一個小作品被人喜歡，但對方讀出的意思跟你原本想表達的不同。你沒有被冒犯，只是有點意外。",
      "question": "你會解釋原意，還是先聽對方多說？",
      "twist": "",
      "deeperQuestion": "被理解和帶給人新的感受，哪個對你更重要？"
    }
  },
  {
    "id": "ponder-v4-solo-078",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A question for tomorrow",
    "scenario": "Before sleep, leave a question to notice tomorrow rather than an assessment. It may concern sunlight on a street or a moment of ease.",
    "question": "What question would you leave?",
    "twist": "",
    "deeperQuestion": "How does attending to curiosity differ from attending to performance?",
    "zh": {
      "title": "留給明天的好奇",
      "scenario": "睡前你可以留下一條明天想留意的問題，不是考核自己。可以小到哪段路有陽光、哪個時刻最放鬆。",
      "question": "你想留下甚麼問題？",
      "twist": "",
      "deeperQuestion": "把注意力放在好奇，而不是表現，對你有甚麼不同？"
    }
  },
  {
    "id": "ponder-v4-solo-079",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Your dream cinema",
    "scenario": "A director turns one dream into a ten-minute film for you alone, preserving its feeling without guaranteeing a logical plot.",
    "question": "What feeling would you want the film to bring?",
    "twist": "",
    "deeperQuestion": "What feeling has had little room in your waking life lately?",
    "zh": {
      "title": "夢裡的小影院",
      "scenario": "你可以把昨晚一個夢變成十分鐘電影，只給自己看。導演會保留那種感覺，但不保證故事合理。",
      "question": "你希望電影帶來哪種感覺？",
      "twist": "",
      "deeperQuestion": "你最近清醒時，最少有機會感受哪一種情緒？"
    }
  },
  {
    "id": "ponder-v4-solo-080",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Anonymous kindness",
    "scenario": "Use HK$500 anonymously to improve a stranger's day. You will not learn what happens afterwards or receive thanks.",
    "question": "How would you use it?",
    "twist": "",
    "deeperQuestion": "Would not knowing the outcome reduce your desire to do it?",
    "zh": {
      "title": "匿名的小善意",
      "scenario": "你有五百元，可以匿名讓一個陌生人的一天好一點。不能知道對方後來怎樣，也不會收到感謝。",
      "question": "你會怎樣用？",
      "twist": "",
      "deeperQuestion": "不知道結果，會減少你想做這件事的心情嗎？"
    }
  },
  {
    "id": "ponder-v4-solo-081",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A tasting plate of lives",
    "scenario": "Try a day each in a busy city, quiet countryside and travelling life, with work and lodging arranged. You are sampling their rhythms.",
    "question": "Which do you think you would least want to leave?",
    "twist": "",
    "deeperQuestion": "Would you want it long-term, or would occasional visits be enough?",
    "zh": {
      "title": "人生的試吃盤",
      "scenario": "你可以試過三種不同生活各一天：熱鬧城市、安靜鄉間或到處移動。工作和住宿都有人安排，只體驗節奏。",
      "question": "你猜哪一種會讓你最捨不得離開？",
      "twist": "",
      "deeperQuestion": "你想要的是長期生活，還是偶爾能去一下就夠？"
    }
  },
  {
    "id": "ponder-v4-solo-082",
    "category": "Solo",
    "emoji": "🌿",
    "title": "One public rule",
    "scenario": "Add one small rule to a public space to make it more comfortable, considering people unlike you rather than only your preferences.",
    "question": "Where would you add what rule?",
    "twist": "",
    "deeperQuestion": "Who might dislike it, and can you understand their reason?",
    "zh": {
      "title": "一條自己的公共規則",
      "scenario": "你可以替一個公共場所加一條小規則，讓使用的人更舒服。不能只是所有人遷就你，也要想想不一樣的人。",
      "question": "你會在哪裡加甚麼規則？",
      "twist": "",
      "deeperQuestion": "誰可能不喜歡你的安排，他的理由你能理解嗎？"
    }
  },
  {
    "id": "ponder-v4-solo-083",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Seeing the cost",
    "scenario": "Today a shop labels items with the hours you must work to afford them. Prices and your favourite objects remain the same.",
    "question": "What would still feel worth it?",
    "twist": "",
    "deeperQuestion": "Does expressing money as time change your choices?",
    "zh": {
      "title": "看得見的代價",
      "scenario": "商店今天會在每件商品旁邊寫出你要工作多少小時才能買到。價錢沒變，喜歡的東西也仍然在。",
      "question": "哪種東西你仍會覺得值得？",
      "twist": "",
      "deeperQuestion": "把錢換成時間後，你的選擇有沒有改變？"
    }
  },
  {
    "id": "ponder-v4-solo-084",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A borrowed memory",
    "scenario": "Borrow ten minutes of someone's ordinary memory: a first workday, waiting for someone or learning something. Afterwards you know it was not your life.",
    "question": "What kind of memory would you choose?",
    "twist": "",
    "deeperQuestion": "What unfamiliar feeling would you want to understand through it?",
    "zh": {
      "title": "借來的一段記憶",
      "scenario": "你可以體驗另一個人一段十分鐘的普通記憶，例如第一次上班、等人回家或學會一件小事。結束後，你知道那不是自己的人生。",
      "question": "你想體驗哪種記憶？",
      "twist": "",
      "deeperQuestion": "你最想藉此理解哪種平常不容易明白的感受？"
    }
  },
  {
    "id": "ponder-v4-solo-085",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A view for you alone",
    "scenario": "You can see a beautiful view once without photos, company or proof. You may remember it or describe it in your own words.",
    "question": "What place would you want it to be?",
    "twist": "",
    "deeperQuestion": "How much does a beautiful experience matter when it cannot be shared directly?",
    "zh": {
      "title": "一個人也值得的景色",
      "scenario": "你可以看一次很美的景色，但不能拍照或帶人去，回來也沒有證據。你可以記住它，或用自己的話描述。",
      "question": "你希望那是怎樣的地方？",
      "twist": "",
      "deeperQuestion": "一件美好的事沒法分享，對你仍有多少價值？"
    }
  },
  {
    "id": "ponder-v4-solo-086",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Choosing what success looks like",
    "scenario": "Define doing well through three visible everyday scenes, without income, status or others' envy.",
    "question": "What are your three scenes?",
    "twist": "",
    "deeperQuestion": "Which already appears in your life sometimes?",
    "zh": {
      "title": "重新挑選成功的樣子",
      "scenario": "你可以用三個很日常的畫面定義自己過得不錯，不能用收入、職位或別人的羨慕。畫面要具體到看得見。",
      "question": "你的三個畫面是甚麼？",
      "twist": "",
      "deeperQuestion": "其中哪個其實已經偶爾出現在生活裡？"
    }
  },
  {
    "id": "ponder-v4-solo-087",
    "category": "Solo",
    "emoji": "🌿",
    "title": "An offer you may refuse",
    "scenario": "A valuable opportunity takes several weekends you hoped to keep for yourself. Declining offends nobody and brings no further pressure.",
    "question": "What would you ask yourself before deciding?",
    "twist": "",
    "deeperQuestion": "Does rarity tempt you to accept things you do not really want?",
    "zh": {
      "title": "一份可以拒絕的優惠",
      "scenario": "你收到一個很划算的機會，但它會佔掉原本想留給自己的幾個週末。拒絕不會得罪人，也不會有下一次催促。",
      "question": "你會問自己哪個問題才決定？",
      "twist": "",
      "deeperQuestion": "你容易因為「難得」而答應自己其實不想要的事嗎？"
    }
  },
  {
    "id": "ponder-v4-solo-088",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A stranger's question",
    "scenario": "A friendly stranger on a long journey will answer one sincere question about their life, then ask you the same. You will not meet again.",
    "question": "What would you ask?",
    "twist": "",
    "deeperQuestion": "What is sometimes easier to tell a stranger honestly?",
    "zh": {
      "title": "陌生人的一個問題",
      "scenario": "你在長途車上遇到一個友善陌生人，之後不會再見。他願意認真回答一個關於自己生活的問題，也會反問你同一題。",
      "question": "你想問甚麼？",
      "twist": "",
      "deeperQuestion": "面對陌生人，你反而比較容易坦白哪種事？"
    }
  },
  {
    "id": "ponder-v4-solo-089",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Lending a habit",
    "scenario": "Someone wants to try one of your habits for a week. Explain its inconvenience as well as its benefits.",
    "question": "What habit would you offer?",
    "twist": "",
    "deeperQuestion": "Does it still help you, or has it simply never changed?",
    "zh": {
      "title": "把習慣借出去",
      "scenario": "有人想借用你的一個日常習慣一星期，看看生活會有甚麼不同。你要連它的方便和麻煩一起介紹，不能只講好處。",
      "question": "你會借出哪個習慣？",
      "twist": "",
      "deeperQuestion": "這個習慣現在仍在幫你，還是只是一直沒換過？"
    }
  },
  {
    "id": "ponder-v4-solo-090",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A parcel ten years later",
    "scenario": "Send a small parcel to yourself ten years from now, without money or electronics. It should recall what you genuinely enjoy today.",
    "question": "What would you include?",
    "twist": "",
    "deeperQuestion": "What interest would you like to keep as you grow older?",
    "zh": {
      "title": "十年後收到的小包裹",
      "scenario": "你可以寄一個小包裹給十年後的自己，不能放錢或電子產品。它要讓未來的你記得現在真正喜歡甚麼。",
      "question": "你會放哪幾樣東西？",
      "twist": "",
      "deeperQuestion": "哪個喜好你希望變老也不用放下？"
    }
  },
  {
    "id": "ponder-v4-solo-091",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A choice without reward",
    "scenario": "You make a small choice you believe right, without recognition or a good outcome. It does preserve something you care about.",
    "question": "What choice would you still be willing to make?",
    "twist": "",
    "deeperQuestion": "How much does the outcome determine whether you think a choice was right?",
    "zh": {
      "title": "一個不被獎勵的選擇",
      "scenario": "你做了一個自己認為對的小選擇，但沒有人知道，也沒有得到好結果。至少它沒有違背你原本在意的事。",
      "question": "甚麼樣的選擇，會令你仍然願意這樣做？",
      "twist": "",
      "deeperQuestion": "你判斷自己做得對時，結果佔多大部分？"
    }
  },
  {
    "id": "ponder-v4-solo-092",
    "category": "Solo",
    "emoji": "🌿",
    "title": "When your hobby becomes popular",
    "scenario": "A quiet hobby of yours becomes popular, bringing both companions and comparison. You begin wondering whether you are good enough.",
    "question": "How would you keep what you originally enjoyed?",
    "twist": "",
    "deeperQuestion": "Do you more easily lose outside approval or your own pace?",
    "zh": {
      "title": "如果興趣忽然熱門",
      "scenario": "你一直喜歡的小興趣突然很流行，很多人開始分享和比較。你多了同好，也發現自己開始在意做得夠不夠好。",
      "question": "你想怎樣保留原本喜歡它的方式？",
      "twist": "",
      "deeperQuestion": "被別人認同和保有自己的節奏，你較容易失去哪個？"
    }
  },
  {
    "id": "ponder-v4-solo-093",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Trying an unfamiliar answer",
    "scenario": "Spend an hour with someone whose life choices differ greatly from yours and who listens both ways. The aim is understanding, not deciding who is right.",
    "question": "What choice would you want to understand?",
    "twist": "",
    "deeperQuestion": "What view has softened because you got to know someone?",
    "zh": {
      "title": "選一個陌生答案",
      "scenario": "你可以跟一個對生活選擇很不一樣、卻願意互相聽的人聊一小時。目的不是找出誰對，而是理解對方怎樣走到那裡。",
      "question": "你最想了解哪種選擇？",
      "twist": "",
      "deeperQuestion": "你有哪個看法，曾因為認識一個人而變柔軟？"
    }
  },
  {
    "id": "ponder-v4-solo-094",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A portrait beyond appearance",
    "scenario": "A photographer makes your portrait from objects and settings without showing your face. Choose three elements representing your inner life now.",
    "question": "What would you choose?",
    "twist": "",
    "deeperQuestion": "Which is hardest to explain yet feels most like you?",
    "zh": {
      "title": "一張不照樣子的照片",
      "scenario": "攝影師要用物品和場景拍你的肖像，照片裡不會出現你的臉。你可以選三個元素，代表現在的內心生活。",
      "question": "你會選甚麼？",
      "twist": "",
      "deeperQuestion": "哪個元素最難跟別人解釋，卻最像你？"
    }
  },
  {
    "id": "ponder-v4-solo-095",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A small thing from scratch",
    "scenario": "You have a day to make something from scratch: food, writing, audio or craft. Tools are ready, and it only needs to matter to you.",
    "question": "What would you make?",
    "twist": "",
    "deeperQuestion": "What feeling from today would you want it to hold?",
    "zh": {
      "title": "從零開始的小作品",
      "scenario": "你有一天能完成一個小作品，可以做吃的、寫字、錄音或手作。工具有人準備，作品只需令自己想留著。",
      "question": "你會做甚麼？",
      "twist": "",
      "deeperQuestion": "你希望作品記住今天哪種心情？"
    }
  },
  {
    "id": "ponder-v4-solo-096",
    "category": "Solo",
    "emoji": "🌿",
    "title": "When time has no price",
    "scenario": "For a day, visit a town where people ask what you noticed rather than what you completed. You may stay busy or slow down.",
    "question": "What discovery would you hope to describe that evening?",
    "twist": "",
    "deeperQuestion": "What usually pulls your attention away?",
    "zh": {
      "title": "如果時間不計價",
      "scenario": "你去一個小鎮住一天，那裡不問人一天完成多少事，只問今天留意到甚麼。你仍可忙碌，也可慢慢過。",
      "question": "晚上你希望自己能說出甚麼發現？",
      "twist": "",
      "deeperQuestion": "你的注意力平常最常被哪種事帶走？"
    }
  },
  {
    "id": "ponder-v4-solo-097",
    "category": "Solo",
    "emoji": "🌿",
    "title": "You need not stay the same",
    "scenario": "Pause a once-loved interest for three months without questions from friends. Its equipment will be kept safely.",
    "question": "Is there anything you would pause?",
    "twist": "",
    "deeperQuestion": "Can you tell commitment to enjoyment from maintaining an image?",
    "zh": {
      "title": "不必一直一樣",
      "scenario": "你可以把一個曾很喜歡、現在沒那麼想做的興趣暫停三個月。朋友不會追問，工具也會好好保存。",
      "question": "你會想暫停哪件事，還是沒有？",
      "twist": "",
      "deeperQuestion": "你分得清自己是在堅持喜歡，還是在維持一個形象嗎？"
    }
  },
  {
    "id": "ponder-v4-solo-098",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Room for something new",
    "scenario": "Make one small weekly space by doing less of something unnecessary. The new thing need not be more useful, only worth trying.",
    "question": "What would you reduce, and what would you welcome?",
    "twist": "",
    "deeperQuestion": "Is habit, expectation or fear of missing out hardest to release?",
    "zh": {
      "title": "留一個位置給新東西",
      "scenario": "你的星期裡可以多一個小位置，但要先少做一件不必要的事。新東西不必更有用，只要你願意給它機會。",
      "question": "你會少做甚麼，讓甚麼進來？",
      "twist": "",
      "deeperQuestion": "你最難放掉的，是習慣、期待，還是怕錯過？"
    }
  },
  {
    "id": "ponder-v4-solo-099",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Who would you bring along?",
    "scenario": "You find a little place you love. Keep it private or invite one person; sharing will not spoil it, only add a shared memory.",
    "question": "Would you keep it to yourself or invite someone?",
    "twist": "",
    "deeperQuestion": "How do you choose between enjoying something alone and sharing it?",
    "zh": {
      "title": "今天想帶誰一起",
      "scenario": "你找到一個很喜歡的小地方，可以保留為自己的角落，也可以邀一個人來。分享後，它不會變差，只是多了一段共同記憶。",
      "question": "你想自己留著，還是邀誰來？",
      "twist": "",
      "deeperQuestion": "你怎樣決定一件美好的事要獨享還是分享？"
    }
  },
  {
    "id": "ponder-v4-solo-100",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A place for who you are now",
    "scenario": "Sit with your past and future selves, each with equal speaking time. Neither the youngest nor most successful gets to set the agenda.",
    "question": "What would your present self say first?",
    "twist": "",
    "deeperQuestion": "How could you give your present needs a fair hearing?",
    "zh": {
      "title": "給現在的自己一個位置",
      "scenario": "你可以跟過去和未來的自己坐在一張桌上，三人都有同樣長的說話時間。今天不由最成功或最年輕的人決定話題。",
      "question": "現在的你，最想先說甚麼？",
      "twist": "",
      "deeperQuestion": "你會怎樣讓現在的需要，也值得被認真聽見？"
    }
  },
  {
    "category": "Couple",
    "zh": {
      "title": "夢想在另一個城市",
      "scenario": "伴侶得到一直想要的機會，要到外地一年。你目前的生活也很好，搬走會放棄自己重要的事。對方說不會要求你同行，但你知道，遠距離不會輕鬆。",
      "question": "你會怎樣一起決定：同行、遠距離，還是放棄這次機會？",
      "deeperQuestion": "你願意為這段關係改變甚麼？又有甚麼，如果現在答應了，日後可能會埋怨？",
      "twist": ""
    },
    "title": "A dream in another city",
    "scenario": "Your partner gets a long-awaited opportunity abroad for a year. Your life is going well too, and moving would mean giving up something important. They will not ask you to follow, but you know distance would not be easy.",
    "question": "How would you decide together between moving, living apart or passing on the opportunity?",
    "deeperQuestion": "What would you willingly change for the relationship, and what might you resent agreeing to later?",
    "twist": "",
    "id": "ponder-v5-couple-001",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "zh": {
      "title": "用自己的錢，也要商量嗎？",
      "scenario": "你想借兩萬元給一位遇到困難的好友。這是你的私人儲蓄，不影響共同開支，但可能收不回來。伴侶知道後說：「不是不讓你借，只是我希望你先跟我談。」",
      "question": "你覺得這件事需要通知、商量，還是兩人都同意才做？",
      "deeperQuestion": "在哪一類決定上，你希望保留最後決定權？對方也保留同樣的權利，你會舒服嗎？",
      "twist": ""
    },
    "title": "My money, our conversation?",
    "scenario": "You want to lend HK$20,000 to a close friend in difficulty. It comes from personal savings, does not affect shared expenses and might never be repaid. Your partner says, “I am not forbidding it. I wish you had talked to me first.”",
    "question": "Does this call for informing, discussing or getting agreement from both of you?",
    "deeperQuestion": "Which decisions do you want the final say over? Would you feel comfortable giving your partner the same freedom?",
    "twist": "",
    "id": "ponder-v5-couple-002",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "zh": {
      "title": "好了，但回不到以前",
      "scenario": "你們曾因一件事失去信任。對方已道歉，也持續用行動改變；你願意繼續一起，卻仍會在某些時候不安。對方問：「我還要做多久，你才會再相信我？」",
      "question": "如果你也不知道要多久，你會怎樣回答？",
      "deeperQuestion": "對你來說，「原諒」和「重新信任」有甚麼不同？",
      "twist": ""
    },
    "title": "Better, but not back to before",
    "scenario": "Something damaged trust between you. Your partner has apologised and consistently changed their behaviour. You want to stay, yet still feel uneasy sometimes. They ask, “How much longer before you trust me again?”",
    "question": "How would you answer if you do not know the timeline either?",
    "deeperQuestion": "What is the difference between forgiving and trusting again for you?",
    "twist": "",
    "id": "ponder-v5-couple-003",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "A quiet celebration",
    "scenario": "You get promoted on the day your partner is rejected for a role. They say to keep your celebration dinner.",
    "question": "How would you make room for both feelings tonight?",
    "deeperQuestion": "If you were disappointed, what support would let you stop pretending to be happy?",
    "twist": "",
    "zh": {
      "title": "安靜的慶祝",
      "scenario": "你終於升職，伴侶也很開心，但同一天收到落選通知。你已訂好餐廳，對方說照去就好。",
      "question": "你會怎樣過這一晚，讓兩人的感受都有位置？",
      "deeperQuestion": "如果你是失落的人，怎樣的陪伴不會令你覺得要勉強開心？",
      "twist": ""
    },
    "id": "ponder-v5-couple-004",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "An unannounced relationship",
    "scenario": "You want to post a couple photo. Your partner keeps private life offline, and friends question their commitment.",
    "question": "Are you seeking shared joy or recognition, and how would you tell?",
    "deeperQuestion": "What other action would reassure you?",
    "twist": "",
    "zh": {
      "title": "一段沒公開的戀愛",
      "scenario": "你想把合照放上社交平台，伴侶卻一直不喜歡公開私生活。朋友開始問你，對方是不是不認真。",
      "question": "你會怎樣分辨，自己想要的是分享喜悅，還是被承認？",
      "deeperQuestion": "除了公開照片，甚麼行動會讓你安心？",
      "twist": ""
    },
    "id": "ponder-v5-couple-005",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "An extra key",
    "scenario": "Your partner gives their parents a spare key to feed the cat. You appreciate the help but feel uneasy about access.",
    "question": "What arrangement would protect both help and privacy?",
    "deeperQuestion": "Would your standard be the same for your own parents?",
    "twist": "",
    "zh": {
      "title": "多出來的一把鑰匙",
      "scenario": "伴侶把你們家的備用鑰匙交給父母，方便幫忙餵貓。你感激有人照應，卻不喜歡家人隨時能進來。",
      "question": "你會提出怎樣的安排，讓幫忙和私人空間都保留下來？",
      "deeperQuestion": "如果是你自己的父母，你的標準會一樣嗎？",
      "twist": ""
    },
    "id": "ponder-v5-couple-006",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "A complaint that needs hearing",
    "scenario": "Your partner complains about a colleague again. You offer solutions; they ask you simply to be on their side.",
    "question": "How would you respond if you did not entirely agree?",
    "deeperQuestion": "Does supporting someone include challenging them?",
    "twist": "",
    "zh": {
      "title": "想被聽見的抱怨",
      "scenario": "你第三次聽伴侶抱怨同一位同事，想幫他想辦法。他卻說：「我只是想你站在我這邊。」",
      "question": "如果你其實不完全同意，你會怎樣回應？",
      "deeperQuestion": "對你來說，支持一個人是否包括指出他的問題？",
      "twist": ""
    },
    "id": "ponder-v5-couple-007",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Two retirement maps",
    "scenario": "Life together is happy, but one imagines retirement near family and the other travelling. Both mean it.",
    "question": "Would you seek alignment now or allow different answers for a while?",
    "deeperQuestion": "Which disagreement about the future cannot stay unresolved?",
    "twist": "",
    "zh": {
      "title": "兩張不同的退休地圖",
      "scenario": "你們暫時生活愉快，談到將來才發現：一人想住近家人，一人想四處旅居。離退休還很遠，卻沒有誰只是隨口說說。",
      "question": "你會現在找共同方向，還是容許答案暫時不同？",
      "deeperQuestion": "甚麼未來分歧，你覺得不能一直擱著？",
      "twist": ""
    },
    "id": "ponder-v5-couple-008",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "A gift that remains",
    "scenario": "You still use a good camera from an ex. Your partner feels uncomfortable but has not asked you to discard it.",
    "question": "How would you explain what the camera means to you now?",
    "deeperQuestion": "Where is the boundary between reassurance and giving something up?",
    "twist": "",
    "zh": {
      "title": "留下來的禮物",
      "scenario": "你仍在用前任送的相機，因為它很好用，也陪你拍過很多作品。伴侶看到後有點介意，但沒有要求你丟掉。",
      "question": "你會怎樣談這件物品對你現在的意義？",
      "deeperQuestion": "安慰對方和放棄自己的東西，界線在哪裡？",
      "twist": ""
    },
    "id": "ponder-v5-couple-009",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "An answer given for you",
    "scenario": "Your partner volunteers you to help a friend move. You had planned to rest and now feel guilty refusing.",
    "question": "How would you handle this promise and future ones?",
    "deeperQuestion": "Does being called kind make it harder to say no?",
    "twist": "",
    "zh": {
      "title": "一次替你答應",
      "scenario": "伴侶替你答應週末幫朋友搬家，說你一向樂意幫忙。你本來打算休息，也不想讓朋友失望。",
      "question": "你會怎樣處理這次承諾，以及以後的同類事情？",
      "deeperQuestion": "被說「你人那麼好」，會令你更難拒絕嗎？",
      "twist": ""
    },
    "id": "ponder-v5-couple-010",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Different speeds of repair",
    "scenario": "After an argument, your partner wants to talk immediately while you need a night. Each reaction unsettles the other.",
    "question": "What agreement could make a pause feel different from abandonment?",
    "deeperQuestion": "What sentence would reassure you while waiting?",
    "twist": "",
    "zh": {
      "title": "不一樣的道歉速度",
      "scenario": "吵架後，伴侶想立即談清楚，你需要一晚冷靜。你越沉默，他越害怕你要離開；他越追問，你越想躲開。",
      "question": "你們可以約定甚麼，讓暫停不等於被丟下？",
      "deeperQuestion": "等待期間，哪一句話會讓你安心一點？",
      "twist": ""
    },
    "id": "ponder-v5-couple-011",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "A tighter season",
    "scenario": "Your partner's income falls and they suggest staying in for every date. You can afford occasional outings.",
    "question": "How would you offer to pay more without creating a debt between you?",
    "deeperQuestion": "What do you fear losing when accepting care?",
    "twist": "",
    "zh": {
      "title": "第一次真正沒錢",
      "scenario": "伴侶收入突然減少，提議所有約會都在家。你願意節省，但也很想偶爾出門，而你暫時負擔得起。",
      "question": "你會怎樣提出多付一點，而不讓對方覺得欠你？",
      "deeperQuestion": "接受照顧時，你最怕失去甚麼？",
      "twist": ""
    },
    "id": "ponder-v5-couple-012",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "The one receiving praise",
    "scenario": "Friends praise your partner's talent but overlook your support. Your partner has not claimed your work or noticed your discomfort.",
    "question": "What recognition do you want, and how would you ask?",
    "deeperQuestion": "How do private thanks differ from public acknowledgement for you?",
    "twist": "",
    "zh": {
      "title": "被稱讚的那一個",
      "scenario": "朋友總說伴侶很有才華，卻很少提到你在背後付出的時間。伴侶沒有搶功，也不知道你開始不舒服。",
      "question": "你想要怎樣的肯定，又會怎樣開口？",
      "deeperQuestion": "私下感謝和當眾承認，對你的意義有何不同？",
      "twist": ""
    },
    "id": "ponder-v5-couple-013",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "A changing partner",
    "scenario": "Your partner discovers a hobby and new friends while remaining caring. You miss doing almost everything together.",
    "question": "How would you connect with this change while keeping your own life?",
    "deeperQuestion": "Do you fear less time together or no longer understanding them best?",
    "twist": "",
    "zh": {
      "title": "喜歡的人變了",
      "scenario": "伴侶最近投入一種你完全沒興趣的活動，也交了新朋友。他沒有少關心你，你卻懷念以前凡事都一起的日子。",
      "question": "你會怎樣靠近他的改變，又保留自己的生活？",
      "deeperQuestion": "你害怕的是少了相處，還是不再是最懂他的人？",
      "twist": ""
    },
    "id": "ponder-v5-couple-014",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "An equal split",
    "scenario": "You split rent equally. Your partner gets a large raise while your income stays the same, and the arrangement strains you.",
    "question": "Would you suggest splitting by income or keeping the agreement?",
    "deeperQuestion": "Should an arrangement stay unchanged because it used to be fair?",
    "twist": "",
    "zh": {
      "title": "說好的平分",
      "scenario": "你們一直平分房租，最近伴侶加薪很多，你的收入卻沒變。原本公平的安排，開始令你的生活很緊。",
      "question": "你會提議按收入分，還是維持原約定？",
      "deeperQuestion": "一個安排曾經公平，代表它應該一直不變嗎？",
      "twist": ""
    },
    "id": "ponder-v5-couple-015",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "A holiday alone",
    "scenario": "You want a week travelling alone. Your partner wonders whether travelling together is no longer enough.",
    "question": "How would you explain the wish without making it a verdict on your relationship?",
    "deeperQuestion": "What would your first reaction be if they asked instead?",
    "twist": "",
    "zh": {
      "title": "一個人的假期",
      "scenario": "你很想獨自旅行一星期，伴侶聽完卻問：「跟我一起不好嗎？」你喜歡一起旅行，也真的想試試只照顧自己。",
      "question": "你會怎樣說明這個願望，讓它不變成對關係的評分？",
      "deeperQuestion": "如果換成對方提出，你會有甚麼第一反應？",
      "twist": ""
    },
    "id": "ponder-v5-couple-016",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Different ways of doing chores",
    "scenario": "Your partner cleans differently, so you often redo it. They stop offering, while you feel you are maintaining standards.",
    "question": "Which standards could you release, and which need agreement?",
    "deeperQuestion": "How do you distinguish a need from a familiar method?",
    "twist": "",
    "zh": {
      "title": "家務做得不同",
      "scenario": "伴侶主動整理廚房，方法跟你不同，你常忍不住重做。他漸漸不想動手，你則覺得自己只是維持整潔。",
      "question": "你願意放下哪些標準，哪些需要一起訂清楚？",
      "deeperQuestion": "怎樣分辨真正需要，和只是習慣了自己那一套？",
      "twist": ""
    },
    "id": "ponder-v5-couple-017",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Who hears first?",
    "scenario": "Your partner discusses major news with an old friend before telling you. You value the friendship but feel outside the circle.",
    "question": "Do you want to hear first, or to be more involved?",
    "deeperQuestion": "What would you also need to discuss with someone else first?",
    "twist": "",
    "zh": {
      "title": "好消息先告訴誰",
      "scenario": "伴侶遇到大事總先找老朋友談，想清楚才告訴你。你知道那段友誼很重要，仍有點像被放在外面。",
      "question": "你希望改變的是先後次序，還是參與的程度？",
      "deeperQuestion": "哪些事情，你也需要先找伴侶以外的人談？",
      "twist": ""
    },
    "id": "ponder-v5-couple-018",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Different romance",
    "scenario": "You plan elaborate surprises, but your partner prefers a quiet meal. They are grateful, yet you feel unseen.",
    "question": "How would you plan next time so both of you feel loved?",
    "deeperQuestion": "When giving, how much do you need your effort to be seen?",
    "twist": "",
    "zh": {
      "title": "不是同一種浪漫",
      "scenario": "你花很多心思準備驚喜，伴侶卻最喜歡平靜吃一餐飯。你知道他有感謝，還是覺得自己的心意沒有被接住。",
      "question": "下一次你會怎樣安排，讓兩個人都能感受到愛？",
      "deeperQuestion": "付出時，你更想對方開心，還是想他看見你花了多少心思？",
      "twist": ""
    },
    "id": "ponder-v5-couple-019",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "The message boundary",
    "scenario": "You send an argument screenshot to a friend for advice. Your partner feels exposed; you need outside support.",
    "question": "What boundary would protect privacy without isolating either person?",
    "deeperQuestion": "Would describing your feelings without screenshots be enough?",
    "twist": "",
    "zh": {
      "title": "聊天紀錄的界線",
      "scenario": "你把一次爭執的聊天截圖傳給好友求意見。伴侶知道後覺得私人對話被公開，你則覺得自己也需要支持。",
      "question": "你們會怎樣訂一條不令任何人孤立的界線？",
      "deeperQuestion": "不傳截圖，只說自己的感受，對你來說足夠嗎？",
      "twist": ""
    },
    "id": "ponder-v5-couple-020",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Not business partners",
    "scenario": "Your partner dreams of opening a shop together. You like the idea but worry work and love would become inseparable.",
    "question": "How involved could you be without forcing yourself?",
    "deeperQuestion": "How could you decline the partnership while showing belief in them?",
    "twist": "",
    "zh": {
      "title": "不想一起創業",
      "scenario": "伴侶很想跟你開一間小店，覺得一起追夢很浪漫。你喜歡這個想法，卻怕工作和感情再也分不開。",
      "question": "你會參與到甚麼程度，才不會勉強自己？",
      "deeperQuestion": "拒絕一起創業，怎樣仍能表達你相信對方？",
      "twist": ""
    },
    "id": "ponder-v5-couple-021",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "An unintended comparison",
    "scenario": "Your partner praises a friend's partner for planning trips. You hear it as a comparison and want to defend your own efforts.",
    "question": "Would you clarify the meaning or first share how it felt?",
    "deeperQuestion": "Which comparisons are especially sensitive for you?",
    "twist": "",
    "zh": {
      "title": "一句無心的比較",
      "scenario": "伴侶說朋友的另一半很會安排旅行，沒有明說你不好。你卻想到自己平日做的事，突然很想反駁。",
      "question": "你會先問他的意思，還是直接說出你的感受？",
      "deeperQuestion": "哪一類比較特別容易刺中你？",
      "twist": ""
    },
    "id": "ponder-v5-couple-022",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Care without asking",
    "scenario": "Your partner cancels an event for you because you seem exhausted. You are tired, but had been looking forward to it.",
    "question": "How would you respond to both the care and the overstep?",
    "deeperQuestion": "How many decisions would you want someone to make when you are tired?",
    "twist": "",
    "zh": {
      "title": "照顧到忘了問",
      "scenario": "伴侶替你取消一場活動，因為覺得你最近太累。你確實疲倦，但那是你一直期待的見面。",
      "question": "你會怎樣回應這份好意和這次越界？",
      "deeperQuestion": "你希望別人在你累的時候，替你做多少決定？",
      "twist": ""
    },
    "id": "ponder-v5-couple-023",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Before moving in",
    "scenario": "You plan to move in but have not discussed leaving if it does not work. One finds that pessimistic; the other reassuring.",
    "question": "How could discussing an exit become part of caring for each other?",
    "deeperQuestion": "How much certainty does commitment need for you?",
    "twist": "",
    "zh": {
      "title": "同住前的小字",
      "scenario": "你們準備同住，談過家具和租金，卻沒談過若不合適怎樣搬走。一人覺得先談退路很掃興，另一人因此更安心。",
      "question": "你會怎樣把退路談成照顧彼此的一部分？",
      "deeperQuestion": "對你來說，承諾需要多少確定，又容許多少未知？",
      "twist": ""
    },
    "id": "ponder-v5-couple-024",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Someone else's timeline",
    "scenario": "Friends are marrying. You want a date; your partner wants a future together but cannot say when they want marriage.",
    "question": "What do you need to understand before deciding whether to wait?",
    "deeperQuestion": "Would your timeline change without outside pressure?",
    "twist": "",
    "zh": {
      "title": "別人的婚禮節奏",
      "scenario": "身邊朋友接連結婚，你開始想訂日期。伴侶說一直想跟你走下去，但還不想結婚，也說不出何時會想。",
      "question": "你需要問清楚甚麼，才知道自己能否繼續等？",
      "deeperQuestion": "如果沒有任何人催促，你的時間表會不同嗎？",
      "twist": ""
    },
    "id": "ponder-v5-couple-025",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "An unwanted dinner",
    "scenario": "Your partner's friends drain you without doing anything clearly wrong. They matter deeply to your partner.",
    "question": "How would you decide how much to join in?",
    "deeperQuestion": "Does loving someone require liking everyone they love?",
    "twist": "",
    "zh": {
      "title": "一個不想赴的飯局",
      "scenario": "伴侶的朋友每次聚會都讓你很累，但沒有誰明顯做錯事。對方希望你多參與，因為那是他重要的一群人。",
      "question": "你會怎樣安排參與的程度？",
      "deeperQuestion": "愛一個人，需要喜歡他喜歡的所有人嗎？",
      "twist": ""
    },
    "id": "ponder-v5-couple-026",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "When work takes over",
    "scenario": "Your partner's work pressure is real, but repeated cancelled dinners have hurt you for weeks.",
    "question": "What small, realistic change would you ask for?",
    "deeperQuestion": "How do you distinguish a busy season from always coming last?",
    "twist": "",
    "zh": {
      "title": "忙碌不是藉口嗎",
      "scenario": "伴侶連續幾週加班，答應的晚餐又取消。他的壓力是真的，你的失望也累積了很久。",
      "question": "你會提出哪一個小而實際的改變？",
      "deeperQuestion": "你怎樣分辨一段忙碌期，和一直被放到最後？",
      "twist": ""
    },
    "id": "ponder-v5-couple-027",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "A forgotten date",
    "scenario": "Your caring partner forgets an important anniversary and offers to make it up. Having to remind them still hurts.",
    "question": "What feeling, beyond a replacement dinner, do you want restored?",
    "deeperQuestion": "How much does needing a reminder change the meaning of care?",
    "twist": "",
    "zh": {
      "title": "想不起來的紀念日",
      "scenario": "伴侶忘記你重視的紀念日，平日卻一直很照顧你。他願意補過，你還是難過，覺得提醒了就不一樣。",
      "question": "你最想補回的是一頓飯，還是哪一種感覺？",
      "deeperQuestion": "對方需要被提醒，會令那份心意失去多少分量？",
      "twist": ""
    },
    "id": "ponder-v5-couple-028",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "A changed promise",
    "scenario": "You once agreed to get a dog. Now adoption is possible, you fear the commitment; your partner feels let down.",
    "question": "How would you own your change of mind and the disappointment it causes?",
    "deeperQuestion": "Which promises can be renegotiated, and which carry more weight?",
    "twist": "",
    "zh": {
      "title": "答應了卻變心",
      "scenario": "交往初期你說願意養狗，真正有機會領養時才發現自己怕長期責任。伴侶已期待很久，覺得你反口。",
      "question": "你會怎樣承認改變，也承擔讓對方失望的部分？",
      "deeperQuestion": "哪些承諾可以重新談，哪些不能輕易改？",
      "twist": ""
    },
    "id": "ponder-v5-couple-029",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "If incomes reversed",
    "scenario": "You earn more and make more decisions. Imagining the incomes reversed makes you reluctant to give up that influence.",
    "question": "Which decisions should not depend on income?",
    "deeperQuestion": "How can you tell whether your good intentions include their voice?",
    "twist": "",
    "zh": {
      "title": "假如收入倒轉",
      "scenario": "現在收入較高的你，習慣替兩人作較多決定。假如明年換成伴侶收入較高，你才發現自己不想交出這些決定權。",
      "question": "哪些決定其實不應該由收入決定？",
      "deeperQuestion": "你怎樣知道自己的「為大家好」也有聽取對方？",
      "twist": ""
    },
    "id": "ponder-v5-couple-030",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "A habit under discussion",
    "scenario": "Your partner unwinds on their phone before bed. You miss talking; they need a break from thinking.",
    "question": "What could you try without turning rest into another duty?",
    "deeperQuestion": "Do you need more time or a little undivided attention?",
    "twist": "",
    "zh": {
      "title": "想改變的習慣",
      "scenario": "伴侶常在睡前滑手機，你覺得少了聊天時間。他說那是一天唯一不用思考的時候。",
      "question": "你們可以試甚麼安排，而不把休息變成另一項任務？",
      "deeperQuestion": "你需要的是更多時間，還是某一段完整的注意力？",
      "twist": ""
    },
    "id": "ponder-v5-couple-031",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Borrowing your story",
    "scenario": "Your partner shares an embarrassing story about you. Everyone finds it endearing; later you realise you disliked it.",
    "question": "How would you express the discomfort you did not show then?",
    "deeperQuestion": "Does laughing at the time remove your right to object later?",
    "twist": "",
    "zh": {
      "title": "借用你的故事",
      "scenario": "伴侶在飯桌上講你一次出糗的經歷，大家覺得可愛。你也笑了，但回家後發現自己不喜歡那件事被當笑話。",
      "question": "你會怎樣補說當時沒說出口的感受？",
      "deeperQuestion": "當時笑了，是否代表之後不能說介意？",
      "twist": ""
    },
    "id": "ponder-v5-couple-032",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "An evening without fixing",
    "scenario": "You feel low and want company. Your partner keeps seeking solutions and feels exhausted by not helping.",
    "question": "What clear, manageable kind of company could you request?",
    "deeperQuestion": "How could a supporter express tiredness without making you feel burdensome?",
    "twist": "",
    "zh": {
      "title": "不想被修好的晚上",
      "scenario": "你很低落，伴侶努力找原因和辦法，你卻只想有人陪。他也累了，覺得怎樣做都幫不了你。",
      "question": "你可以提出甚麼清楚又做得到的陪伴方式？",
      "deeperQuestion": "陪伴者可以怎樣說累了，而不讓你覺得自己是負擔？",
      "twist": ""
    },
    "id": "ponder-v5-couple-033",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "A third traveller",
    "scenario": "Your partner wants a heartbroken friend to join a long-planned couple trip. You care, but value that time alone together.",
    "question": "Would you agree, decline or change part of the trip?",
    "deeperQuestion": "Would protecting this time feel selfish or like a boundary?",
    "twist": "",
    "zh": {
      "title": "二人旅行加一人",
      "scenario": "你們計劃很久的旅行，伴侶想邀剛失戀的好友同行。你同情朋友，也捨不得難得的二人時間。",
      "question": "你會答應、拒絕，還是修改部分行程？",
      "deeperQuestion": "不願分享這次時間，對你來說是自私還是界線？",
      "twist": ""
    },
    "id": "ponder-v5-couple-034",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Different beliefs",
    "scenario": "Your partner embraces a faith and wants occasional company. You respect it but do not want to perform rituals you do not believe in.",
    "question": "How would you participate, and where would you stop?",
    "deeperQuestion": "Does respect require participation?",
    "twist": "",
    "zh": {
      "title": "沒有相同的信念",
      "scenario": "伴侶開始投入一種信仰，希望你偶爾一起參與。你尊重它，卻不想為了陪伴而做自己不相信的儀式。",
      "question": "你願意怎樣參與，又會停在哪裡？",
      "deeperQuestion": "尊重一件事，是否需要親自參與？",
      "twist": ""
    },
    "id": "ponder-v5-couple-035",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Savings of your own",
    "scenario": "You want savings only you can access. Your partner sees distrust; you feel safer having options.",
    "question": "How would you explain that need without making it a contest over trust?",
    "deeperQuestion": "Would having options make commitment weaker or freer?",
    "twist": "",
    "zh": {
      "title": "留給自己的存款",
      "scenario": "你想保留一筆只有自己能動用的錢，伴侶問是不是不信任他。你不是準備離開，只是有退路才安心。",
      "question": "你會怎樣談這份安全感，而不需要證明誰對誰錯？",
      "deeperQuestion": "兩個人都有退路，會令承諾更弱還是更自由？",
      "twist": ""
    },
    "id": "ponder-v5-couple-036",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "A new friendship",
    "scenario": "Your partner messages a new friend daily and welcomes introductions. Nothing is hidden, but the closeness unsettles you.",
    "question": "What would you request, and which feelings would you work through yourself?",
    "deeperQuestion": "Would you accept the same boundary for your friendships?",
    "twist": "",
    "zh": {
      "title": "新朋友的界線",
      "scenario": "伴侶跟新朋友每天聊天，也願意讓你認識對方。你沒有發現隱瞞，仍然因那份親近感而不安。",
      "question": "你會要求甚麼，又願意自己處理哪部分不安？",
      "deeperQuestion": "你提出的界線，也願意用在自己的友誼上嗎？",
      "twist": ""
    },
    "id": "ponder-v5-couple-037",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "An expensive surprise",
    "scenario": "Your partner borrows to buy an expensive gift. You are touched but worry your delight will encourage more debt.",
    "question": "How would you acknowledge the love and discuss the financial strain?",
    "deeperQuestion": "Would returning it feel like rejecting them or protecting the relationship?",
    "twist": "",
    "zh": {
      "title": "拒絕昂貴的驚喜",
      "scenario": "伴侶送你一件昂貴禮物，你很感動，卻知道他為此透支。你怕表現開心會鼓勵他再這樣做。",
      "question": "你會怎樣接受心意，同時談清楚金錢壓力？",
      "deeperQuestion": "退回禮物對你來說，是拒絕人還是保護關係？",
      "twist": ""
    },
    "id": "ponder-v5-couple-038",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "An invisible job",
    "scenario": "Chores look equal, but you remember every supply and appointment. Your partner is willing if reminded.",
    "question": "How would you share remembering, not only doing?",
    "deeperQuestion": "How much imperfection could you allow when they take over?",
    "twist": "",
    "zh": {
      "title": "未說出口的分工",
      "scenario": "家務表看起來很平均，但每次買甚麼、何時補貨、誰要預約，都是你記著。伴侶說只要你提醒，他一定做。",
      "question": "你會怎樣讓「記得要做」也成為可分擔的工作？",
      "deeperQuestion": "如果對方用不同方法接手，你能容許多少失誤？",
      "twist": ""
    },
    "id": "ponder-v5-couple-039",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "An empty weekend",
    "scenario": "Your partner treats unplanned weekends as free time. You assume you will be together, so you often feel disappointed.",
    "question": "What shared default would stop both of you guessing?",
    "deeperQuestion": "Would you prefer spontaneous invitations or reliable scheduled time?",
    "twist": "",
    "zh": {
      "title": "週末的空位",
      "scenario": "伴侶把沒有約會的週末都當作可自由安排，你卻以為預設會一起過。沒有誰爽約，但你常突然落空。",
      "question": "你們需要建立甚麼預設，而不是每次猜？",
      "deeperQuestion": "你希望被主動邀請，還是有穩定的固定時間？",
      "twist": ""
    },
    "id": "ponder-v5-couple-040",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Facing family together",
    "scenario": "Your family pressures your partner to change jobs. Speaking up may sour dinner; silence may look like agreement.",
    "question": "What would you say clearly without speaking over your partner?",
    "deeperQuestion": "How would you want support in front of your family?",
    "twist": "",
    "zh": {
      "title": "替對方擋家人",
      "scenario": "你的家人在飯局上催伴侶換工作，你知道對方很不舒服。當場反駁可能讓飯局僵住，沉默又像默認。",
      "question": "你會當場說甚麼，既清楚又不替伴侶發言太多？",
      "deeperQuestion": "你希望伴侶在你的家人面前怎樣支持你？",
      "twist": ""
    },
    "id": "ponder-v5-couple-041",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "No more posing",
    "scenario": "Photos matter to you, but your partner feels every outing becomes a shoot and cannot relax.",
    "question": "How would you preserve memories while being present together?",
    "deeperQuestion": "What makes a day memorable without pictures?",
    "twist": "",
    "zh": {
      "title": "不想再打卡",
      "scenario": "你很喜歡拍合照，伴侶覺得每次出門都要配合鏡頭，很難放鬆。這些照片對你又確實是重要回憶。",
      "question": "你會怎樣留下回憶，也讓當下真正屬於你們？",
      "deeperQuestion": "如果沒有照片，怎樣的一天仍會被你記住？",
      "twist": ""
    },
    "id": "ponder-v5-couple-042",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "A caring no",
    "scenario": "Your partner declines an event to rest alone and offers another day together. You understand but feel hurt.",
    "question": "How would you express disappointment without punishing the refusal?",
    "deeperQuestion": "What makes a no still feel loving?",
    "twist": "",
    "zh": {
      "title": "一次很好的拒絕",
      "scenario": "你想伴侶陪你出席活動，他說那天需要獨處，並主動提議另一天陪你。你明白他的需要，心裡仍有點失落。",
      "question": "你會怎樣表達失落，而不把拒絕變成懲罰？",
      "deeperQuestion": "甚麼會讓一句「不行」仍然有被愛的感覺？",
      "twist": ""
    },
    "id": "ponder-v5-couple-043",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "A secret surprise",
    "scenario": "A small lie meant to hide a surprise leaves you worried all day. The reveal does not erase that feeling.",
    "question": "How would you explain which surprise tactics do not work for you?",
    "deeperQuestion": "Can good intentions soften harm without settling it?",
    "twist": "",
    "zh": {
      "title": "關係裡的秘密驚喜",
      "scenario": "伴侶為你策劃驚喜，故意說了一個小謊。結果你因為那個謊擔心了一整天，揭曉後也笑不出來。",
      "question": "你會怎樣告訴對方，驚喜裡哪些方法不適合你？",
      "deeperQuestion": "好意能減輕傷害，但是否足以讓事情過去？",
      "twist": ""
    },
    "id": "ponder-v5-couple-044",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Two memories of one day",
    "scenario": "You remember a trip fondly; your partner remembers constantly accommodating you and never mentioned it.",
    "question": "How would you hear their version without defending your happy memory?",
    "deeperQuestion": "Can both memories be true?",
    "twist": "",
    "zh": {
      "title": "同一件事的兩段回憶",
      "scenario": "你記得某次旅行很浪漫，伴侶卻記得自己當時一直遷就。你沒有察覺，他以前也從未說過。",
      "question": "你會怎樣聽這個版本，而不急著保住美好回憶？",
      "deeperQuestion": "兩段不同的回憶，可以同時是真的嗎？",
      "twist": ""
    },
    "id": "ponder-v5-couple-045",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "A new responsibility",
    "scenario": "Your partner needs two evenings weekly to care for family. You want to help without your time being assumed.",
    "question": "What would you offer, and what needs discussion first?",
    "deeperQuestion": "What help could you offer willingly over the long term?",
    "twist": "",
    "zh": {
      "title": "突然多出的責任",
      "scenario": "伴侶需要每週照顧家人兩晚，你們原本的安排因此打亂。你願意幫忙，但不想自己的時間自動被算進去。",
      "question": "你會主動承擔甚麼，哪些要先討論？",
      "deeperQuestion": "怎樣的幫忙，你能長期真心做下去？",
      "twist": ""
    },
    "id": "ponder-v5-couple-046",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Is calm distance?",
    "scenario": "You rarely argue, but rarely discuss difficult things either. Some disagreements seem quietly avoided.",
    "question": "What small disagreement would you start with?",
    "deeperQuestion": "Do you fear conflict or that speaking will change nothing?",
    "twist": "",
    "zh": {
      "title": "平靜是否等於疏遠",
      "scenario": "你們很少吵架，也很少談難題。最近你發現，有些不同意只是被兩人默默避開。",
      "question": "你會先拿哪一件小事試著談真話？",
      "deeperQuestion": "你更怕衝突，還是怕說了也不會改變？",
      "twist": ""
    },
    "id": "ponder-v5-couple-047",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "An unsent letter",
    "scenario": "You find an old unsent letter about disappointments. Most have improved, but one part remains true.",
    "question": "Would you share the whole letter or only what matters now?",
    "deeperQuestion": "Do old feelings need acknowledgement or full reopening?",
    "twist": "",
    "zh": {
      "title": "一封沒寄出的信",
      "scenario": "整理舊物時，你找到自己以前寫給伴侶的失望長信。事情大部分已改善，但有一段至今仍是真的。",
      "question": "你會分享整封信，還是只談現在仍重要的部分？",
      "deeperQuestion": "舊情緒應該被理解，還是每一件都需要重新處理？",
      "twist": ""
    },
    "id": "ponder-v5-couple-048",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "After a sacrifice",
    "scenario": "Your partner willingly gave up an opportunity for you but now mentions it in arguments. Gratitude is turning into an endless debt.",
    "question": "How would you discuss the sacrifice without letting it become leverage?",
    "deeperQuestion": "Have you quietly expected repayment for your own sacrifices?",
    "twist": "",
    "zh": {
      "title": "為你放棄之後",
      "scenario": "伴侶曾為你放棄一次機會，當時說是自願。如今每逢爭執，他都會提起，你既感激又覺得無法還清。",
      "question": "你會怎樣談那次犧牲，讓它不再成為每次爭執的籌碼？",
      "deeperQuestion": "你自己作出的犧牲，有沒有偷偷期待某種回報？",
      "twist": ""
    },
    "id": "ponder-v5-couple-049",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "A familiar pattern",
    "scenario": "A missed reply alarms you. It was a dead phone, but it recalls someone disappearing from your past.",
    "question": "How would you explain the reaction without making your partner responsible for the past?",
    "deeperQuestion": "What support could they offer, and what needs your own care?",
    "twist": "",
    "zh": {
      "title": "太像另一個人",
      "scenario": "伴侶一晚沒有回訊息，你突然很慌。後來知道只是手機沒電，你才想起以前曾被人無故消失。",
      "question": "你會怎樣說明這個反應，又不讓現任替別人的事負全責？",
      "deeperQuestion": "對方可以幫你甚麼，哪些部分需要你慢慢照顧自己？",
      "twist": ""
    },
    "id": "ponder-v5-couple-050",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Slowing down together",
    "scenario": "Your partner wants less work and income to regain energy. You support rest but fear carrying more pressure.",
    "question": "What conditions would make a trial feel safe for both?",
    "deeperQuestion": "Do you most need a timeline, shared duties or recognition of your load?",
    "twist": "",
    "zh": {
      "title": "一起慢下來",
      "scenario": "伴侶想少做一點工作，收入會下降，但情緒和精神可能好很多。你支持他休息，也擔心生活壓力落到自己身上。",
      "question": "你們要先談清楚哪些條件，才可以安心試行？",
      "deeperQuestion": "你最需要的是期限、分工，還是有人承認你的負擔？",
      "twist": ""
    },
    "id": "ponder-v5-couple-051",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "The version friends hear",
    "scenario": "Your partner tells friends only their hurt side of an argument. They now seem distant toward you.",
    "question": "What repair would you ask for while preserving their outside support?",
    "deeperQuestion": "When seeking comfort, how easily do you omit your own part?",
    "twist": "",
    "zh": {
      "title": "對朋友說的版本",
      "scenario": "你發現伴侶向朋友講爭執時，只說了自己受傷的部分。那些人現在對你有點冷淡。",
      "question": "你希望伴侶怎樣處理，而不要求他只能向你求助？",
      "deeperQuestion": "向朋友求安慰時，你有多容易漏掉自己的部分？",
      "twist": ""
    },
    "id": "ponder-v5-couple-052",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Not ready yet",
    "scenario": "Your partner wants children within two years. You are unsure and do not want fear of losing them to decide for you.",
    "question": "What exploration would help you respond honestly rather than delay?",
    "deeperQuestion": "How would you distinguish uncertainty from fear of saying no?",
    "twist": "",
    "zh": {
      "title": "一個尚未準備好的願望",
      "scenario": "伴侶想在兩年內有孩子，你還沒有答案。你不想失去這段關係，也知道不能只為了留住對方而答應。",
      "question": "你需要怎樣探索，才能給出誠實而不是拖延的回應？",
      "deeperQuestion": "怎樣區分「還不知道」和「不敢說不想」？",
      "twist": ""
    },
    "id": "ponder-v5-couple-053",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "A nickname that hurts",
    "scenario": "Your partner uses a nickname affectionately. You have never liked it but kept quiet to avoid seeming sensitive.",
    "question": "How would you speak up without feeling bound by past silence?",
    "deeperQuestion": "How large must a small discomfort become before you feel entitled to mention it?",
    "twist": "",
    "zh": {
      "title": "不喜歡的稱呼",
      "scenario": "伴侶一直用一個暱稱叫你，以為很親密。你從來沒喜歡過，只是怕顯得小題大做而沒說。",
      "question": "你會怎樣開口，讓過去的沉默不再綁住現在？",
      "deeperQuestion": "小事要累積到多大，你才覺得自己有資格提出？",
      "twist": ""
    },
    "id": "ponder-v5-couple-054",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Help by invitation",
    "scenario": "Your partner improves your presentation without asking. You appreciate it and feel your competence was doubted.",
    "question": "How would you discuss the result separately from the method?",
    "deeperQuestion": "How could they offer help in a way you could welcome?",
    "twist": "",
    "zh": {
      "title": "需要被邀請的幫忙",
      "scenario": "伴侶替你修改工作簡報，改得更好了，但沒有先問。你同時覺得被幫助，也覺得自己的能力被否定。",
      "question": "你會怎樣分開談成果和做法？",
      "deeperQuestion": "對方怎樣提出幫忙，你會更願意接受？",
      "twist": ""
    },
    "id": "ponder-v5-couple-055",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Always your choice",
    "scenario": "Your partner always lets you choose. What felt considerate now feels like carrying every decision.",
    "question": "How would you invite their preferences without punishing a poor choice?",
    "deeperQuestion": "Have you quickly dismissed their suggestions before?",
    "twist": "",
    "zh": {
      "title": "每次都由你選",
      "scenario": "伴侶常說吃甚麼、去哪裡都可以，你以前覺得很體貼。現在你希望偶爾不用負責決定，也想知道他的喜好。",
      "question": "你會怎樣邀請對方表達，而不把選錯當成問題？",
      "deeperQuestion": "你是否曾在對方提出想法時，很快把它否決？",
      "twist": ""
    },
    "id": "ponder-v5-couple-056",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Too many reminders",
    "scenario": "Daily reminders about water, sleep and sweets come from care, but you increasingly resent them.",
    "question": "Which reminders would you welcome, and which should stop?",
    "deeperQuestion": "What distinguishes care from being managed for you?",
    "twist": "",
    "zh": {
      "title": "好意的提醒太多",
      "scenario": "伴侶每天提醒你喝水、早睡、少吃甜食。你知道他關心，卻開始對每句提醒都反感。",
      "question": "哪些提醒你願意保留，哪些希望停止？",
      "deeperQuestion": "被照顧和被管理，對你差在哪裡？",
      "twist": ""
    },
    "id": "ponder-v5-couple-057",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Joy outside the relationship",
    "scenario": "You downplay a wonderful trip with friends, afraid your partner will feel inadequate. They want the full story.",
    "question": "How could you share joy without shrinking it first?",
    "deeperQuestion": "Do you trust your partner to enjoy your independent happiness?",
    "twist": "",
    "zh": {
      "title": "兩人以外的快樂",
      "scenario": "你在朋友旅行裡特別開心，回家後怕伴侶覺得自己比不上，講得很輕描淡寫。他其實想聽完整故事。",
      "question": "你能怎樣分享快樂，而不用先把它縮小？",
      "deeperQuestion": "你相信對方能為你的獨立快樂高興嗎？",
      "twist": ""
    },
    "id": "ponder-v5-couple-058",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Different comfort levels",
    "scenario": "You lower the heating to save money; your partner feels cold. A small bill becomes a debate over who is reasonable.",
    "question": "How would you include physical comfort in the cost?",
    "deeperQuestion": "Do you ever treat your tolerance as a standard others should meet?",
    "twist": "",
    "zh": {
      "title": "一個人想節省",
      "scenario": "你想把家裡溫度調低來省電，伴侶覺得冷得不舒服。金額不大，但每次爭論都像在談誰比較合理。",
      "question": "你們怎樣把身體感受也算進成本？",
      "deeperQuestion": "你有沒有把自己的「可以忍」當成別人也該忍？",
      "twist": ""
    },
    "id": "ponder-v5-couple-059",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Different appetites for risk",
    "scenario": "You want to fund a project with personal savings. Your partner worries failure could still affect your shared life.",
    "question": "How would you set an affordable, understood limit on the risk?",
    "deeperQuestion": "Would you offer equal support for a dream you doubted?",
    "twist": "",
    "zh": {
      "title": "不同的冒險程度",
      "scenario": "你想拿部分儲蓄試一個新計劃，伴侶擔心失敗。即使是你的錢，失敗後兩人的生活也可能受影響。",
      "question": "你會怎樣訂一個自己負得起、對方也知情的風險上限？",
      "deeperQuestion": "如果對方的夢想換成你不看好的事，你會同樣支持嗎？",
      "twist": ""
    },
    "id": "ponder-v5-couple-060",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "A wedding without an audience",
    "scenario": "The same budget buys a private wedding or a gathering of loved ones. You value quiet vows; your partner values witnesses.",
    "question": "What must be kept, and what could happen separately?",
    "deeperQuestion": "What do you hope the wedding will affirm or complete?",
    "twist": "",
    "zh": {
      "title": "一場沒有觀眾的婚禮",
      "scenario": "你們可以辦一場只屬於兩人的婚禮，也可以用同一筆錢請所有重要的人。你很想安靜承諾，伴侶很想被大家見證。",
      "question": "哪些部分一定要保留，哪些可以分開實現？",
      "deeperQuestion": "你希望婚禮替你證明或完成甚麼？",
      "twist": ""
    },
    "id": "ponder-v5-couple-061",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "An honest answer",
    "scenario": "You ask for your partner's opinion on new work. Their honest confusion hurts because you wanted encouragement.",
    "question": "How would you clarify your need without asking them to pretend?",
    "deeperQuestion": "Can you ask directly for encouragement?",
    "twist": "",
    "zh": {
      "title": "不是你想聽的答案",
      "scenario": "你問伴侶喜不喜歡你的新作品，他誠實說有些地方不明白。你本來想聽鼓勵，卻沒有先說。",
      "question": "你會怎樣補充自己的需要，又不要求對方假裝喜歡？",
      "deeperQuestion": "想被鼓勵時，你能否直接說出來？",
      "twist": ""
    },
    "id": "ponder-v5-couple-062",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "A joke after forgiveness",
    "scenario": "You agreed to forgive a mistake but still joke about it. Your partner says it feels endlessly held against them.",
    "question": "How would you tell whether you have let go or still have something to say?",
    "deeperQuestion": "If it still hurts, could you say that directly instead?",
    "twist": "",
    "zh": {
      "title": "原諒後的玩笑",
      "scenario": "你們已談好一次失誤，也說了原諒。後來你仍偶爾拿它開玩笑，伴侶終於說這讓他覺得事情永遠沒完。",
      "question": "你會怎樣確認自己是真的放下，還是還有話沒說？",
      "deeperQuestion": "如果仍然痛，你願意用直接的話代替玩笑嗎？",
      "twist": ""
    },
    "id": "ponder-v5-couple-063",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "One evening to protect",
    "scenario": "You can protect only one evening together. You want it work-free; your partner sometimes needs an important call.",
    "question": "How would you define important so it is not renegotiated every time?",
    "deeperQuestion": "Do occasional exceptions feel flexible or unreliable to you?",
    "twist": "",
    "zh": {
      "title": "留住一個晚上",
      "scenario": "你們都很忙，只能固定保留一晚。你想那晚完全不碰工作，伴侶偶爾需要接一通重要電話。",
      "question": "你們怎樣定義「重要」，才不會每次都重新爭？",
      "deeperQuestion": "少量例外會讓你自在，還是讓承諾失去可靠感？",
      "twist": ""
    },
    "id": "ponder-v5-couple-064",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Public support, private doubts",
    "scenario": "At dinner your partner shares a view you disagree with. Friends ask for your opinion.",
    "question": "How would you answer honestly and respectfully?",
    "deeperQuestion": "Do you want public support for you or for everything you say?",
    "twist": "",
    "zh": {
      "title": "公開支持與私下反對",
      "scenario": "聚會上伴侶提出一個你不同意的觀點，朋友轉頭問你。你不想假裝認同，也不想令他覺得被拆台。",
      "question": "你會怎樣誠實回答，也保留彼此的尊重？",
      "deeperQuestion": "你希望伴侶在外人面前支持你這個人，還是支持你的每句話？",
      "twist": ""
    },
    "id": "ponder-v5-couple-065",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Admitting uncertainty",
    "scenario": "Your partner asks whether you will love them forever. You love them but struggle to guarantee future feelings.",
    "question": "What sincere, meaningful commitment could you make?",
    "deeperQuestion": "Is commitment a guarantee of feelings or a choice of actions?",
    "twist": "",
    "zh": {
      "title": "第一次說不確定",
      "scenario": "伴侶問你會不會永遠愛他，你很愛他，卻不擅長保證一輩子的感受。直接說不確定，又怕讓人心寒。",
      "question": "你能給出甚麼真誠而有分量的承諾？",
      "deeperQuestion": "對你來說，承諾是保證感覺，還是選擇怎樣行動？",
      "twist": ""
    },
    "id": "ponder-v5-couple-066",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "A change for yourself",
    "scenario": "Morning exercise improves your energy but shortens shared evenings. Your partner supports you and misses the old routine.",
    "question": "How would you adjust without treating your growth as a debt?",
    "deeperQuestion": "Which connections matter most when routines diverge?",
    "twist": "",
    "zh": {
      "title": "照顧自己的改變",
      "scenario": "你開始早起運動，精神好了，但少了你們晚上的相處時間。伴侶支持你，也坦白說有點想念以前。",
      "question": "你會怎樣調整，而不把自己的成長當成虧欠？",
      "deeperQuestion": "兩人生活不同步時，哪些連結最值得保留？",
      "twist": ""
    },
    "id": "ponder-v5-couple-067",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Not fighting on your behalf",
    "scenario": "A friend hurts you. Your partner wants to confront them, but you want time and control over the response.",
    "question": "How would you invite support without handing over control?",
    "deeperQuestion": "Can protecting someone include choosing not to act?",
    "twist": "",
    "zh": {
      "title": "不能替你出氣",
      "scenario": "你被朋友傷了心，伴侶想立即去理論。你只想慢慢處理，卻又怕拒絕他的保護會讓他失落。",
      "question": "你會怎樣讓對方陪在身邊，而不是接管事情？",
      "deeperQuestion": "保護一個人，有時是否包括忍住不行動？",
      "twist": ""
    },
    "id": "ponder-v5-couple-068",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Keeping score",
    "scenario": "Tracking chores improves accuracy but leads to counting every small task. Fairness feels more tense.",
    "question": "What tracking would you keep, and what counting would you release?",
    "deeperQuestion": "Do you need exact equality or evidence of willing effort?",
    "twist": "",
    "zh": {
      "title": "被記錄的努力",
      "scenario": "你們開始記錄家務，希望公平，後來連誰多倒一次垃圾都會比較。帳目清楚了，氣氛卻差了。",
      "question": "你會保留甚麼記錄，放下甚麼計較？",
      "deeperQuestion": "你需要的是完全相等，還是知道對方也在主動付出？",
      "twist": ""
    },
    "id": "ponder-v5-couple-069",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "A less busy life",
    "scenario": "A cheaper move could reduce work but separate you from friends and familiar life. You would each miss different things.",
    "question": "How could you trial the change without deciding the whole future at once?",
    "deeperQuestion": "Which losses could neither money nor time replace?",
    "twist": "",
    "zh": {
      "title": "一起變得沒那麼忙",
      "scenario": "你們有機會搬到便宜的地方，少工作一些，但會離朋友和熟悉的生活很遠。兩人都想慢下來，卻捨不得不同的東西。",
      "question": "你們會怎樣試住或試行，避免一次決定所有未來？",
      "deeperQuestion": "哪些失去，是金錢和時間都補不回來的？",
      "twist": ""
    },
    "id": "ponder-v5-couple-070",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Growing at different speeds",
    "scenario": "You learn to state your needs directly. Your partner experiences this as more demands and needs time to adjust.",
    "question": "How would you explain your change and hear their adjustment difficulties?",
    "deeperQuestion": "What time would you give, and what would you no longer surrender?",
    "twist": "",
    "zh": {
      "title": "一個人先成長",
      "scenario": "你最近學會更直接表達需要，伴侶卻覺得你變得要求很多。你不想退回沉默，也知道他需要時間適應。",
      "question": "你會怎樣解釋改變，也聽見他的不適應？",
      "deeperQuestion": "你願意給時間，但不願再放棄甚麼？",
      "twist": ""
    },
    "id": "ponder-v5-couple-071",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "An uncomfortable envy",
    "scenario": "Your partner makes friends easily while you struggle to belong. You feel happy for them and privately envious.",
    "question": "How would you share the envy without asking them to shine less?",
    "deeperQuestion": "Do you want company, introductions or acknowledgement of loneliness?",
    "twist": "",
    "zh": {
      "title": "一次不漂亮的嫉妒",
      "scenario": "伴侶很容易交到朋友，你努力融入卻常被忽略。你為他高興，也有一點不想承認的嫉妒。",
      "question": "你會怎樣說出這份感受，而不要求他變得不耀眼？",
      "deeperQuestion": "你希望得到的是陪伴、介紹，還是有人承認你的孤單？",
      "twist": ""
    },
    "id": "ponder-v5-couple-072",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "An interest they dislike",
    "scenario": "You collect something within your budget. Your partner does not stop you but repeatedly calls it a waste.",
    "question": "How would you ask for respect without asking for shared enthusiasm?",
    "deeperQuestion": "Can you comfortably keep a joy your partner does not understand?",
    "twist": "",
    "zh": {
      "title": "不被接受的興趣",
      "scenario": "你很喜歡一種伴侶覺得浪費錢的收藏，支出在自己的預算內。他沒有阻止，只是每次都取笑。",
      "question": "你會怎樣要求尊重，而不要求對方也喜歡？",
      "deeperQuestion": "對方不理解的快樂，你是否仍能安心保留？",
      "twist": ""
    },
    "id": "ponder-v5-couple-073",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "A late admission",
    "scenario": "Your partner reveals an old work mistake they hid to spare you worry. It is resolved, but the secrecy unsettles you.",
    "question": "Do you most need facts, reasons or an agreement for next time?",
    "deeperQuestion": "Did sparing worry also remove your chance to choose how to support them?",
    "twist": "",
    "zh": {
      "title": "一場遲來的坦白",
      "scenario": "伴侶坦白，幾個月前為免你擔心，隱瞞了一次工作失誤。事情已解決，你卻開始懷疑還有甚麼不知道。",
      "question": "你最需要知道事實、理由，還是以後會怎樣做？",
      "deeperQuestion": "保護你不擔心，是否也剝奪了你選擇怎樣陪伴的機會？",
      "twist": ""
    },
    "id": "ponder-v5-couple-074",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Expected enthusiasm",
    "scenario": "Your partner shares hobbies excitedly. You listen with care but cannot always match that energy.",
    "question": "How would you distinguish quiet care from indifference?",
    "deeperQuestion": "What small response makes you feel heard more than loud praise?",
    "twist": "",
    "zh": {
      "title": "被期待的熱情",
      "scenario": "伴侶每次分享興趣都很投入，你願意聽，卻沒辦法每次都同樣興奮。他因此覺得你不在乎。",
      "question": "你們會怎樣分辨安靜的在乎和敷衍？",
      "deeperQuestion": "哪一個小反應，比大聲讚好更讓你覺得被聽見？",
      "twist": ""
    },
    "id": "ponder-v5-couple-075",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Whose dream is it?",
    "scenario": "You call opening a café a shared dream, but most research and excitement come from your partner. You may enjoy imagining more than owning.",
    "question": "How would you clarify the role you genuinely want?",
    "deeperQuestion": "How does supporting a dream differ from adopting it?",
    "twist": "",
    "zh": {
      "title": "共同夢想的名字",
      "scenario": "你們一直說要開咖啡店，仔細一想，選址、研究和期待都來自伴侶。你喜歡陪他想像，未必真的想當店主。",
      "question": "你會怎樣重新說明自己的角色？",
      "deeperQuestion": "陪一個人追夢，跟把夢想變成自己的，有甚麼不同？",
      "twist": ""
    },
    "id": "ponder-v5-couple-076",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "An imperfect weekend",
    "scenario": "Weather ruins your planned trip. Your partner wants to improvise; you want to salvage the schedule and your effort.",
    "question": "How would you choose between rescuing the plan and protecting the mood?",
    "deeperQuestion": "If they are already happy, what still needs finishing before you can relax?",
    "twist": "",
    "zh": {
      "title": "一個不完美的周末",
      "scenario": "你安排的旅行因天氣全亂了，伴侶想臨時找小店坐坐。你仍想趕完行程，怕自己的心思全部白費。",
      "question": "你會怎樣決定，保住計劃還是保住當下的心情？",
      "deeperQuestion": "如果對方已經開心，你還需要完成甚麼才肯放鬆？",
      "twist": ""
    },
    "id": "ponder-v5-couple-077",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Praise you cannot receive",
    "scenario": "You dismiss your partner's compliments or list your shortcomings. They no longer know how to show appreciation.",
    "question": "How could you receive praise without needing to believe every word immediately?",
    "deeperQuestion": "Why can receiving appreciation feel harder than criticism?",
    "twist": "",
    "zh": {
      "title": "難以接受的稱讚",
      "scenario": "伴侶說很欣賞你，你卻總回答「沒有啦」，或解釋自己其實做得不好。他開始不知道怎樣表達。",
      "question": "你能試著怎樣接住一句稱讚，而不必立即相信全部？",
      "deeperQuestion": "接受欣賞，為甚麼有時比接受批評更難？",
      "twist": ""
    },
    "id": "ponder-v5-couple-078",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "A month of honesty",
    "scenario": "You stop hiding small disappointments behind “fine.” The first week feels harder, making you doubt the experiment.",
    "question": "What signs would show progress rather than exhaustion?",
    "deeperQuestion": "What must follow honesty for it to create closeness?",
    "twist": "",
    "zh": {
      "title": "一個月的真話練習",
      "scenario": "你們約定一個月內，不用「沒事」掩飾小失望。第一週反而談了更多不舒服，兩人都開始懷疑這是否有用。",
      "question": "你會看甚麼跡象，判斷這是在變好還是彼此消耗？",
      "deeperQuestion": "坦白之後，還需要甚麼才會讓人更靠近？",
      "twist": ""
    },
    "id": "ponder-v5-couple-079",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Hard-to-share good news",
    "scenario": "A wonderful invitation conflicts with an important day together. Delaying the news has made it harder to share.",
    "question": "What would you acknowledge before discussing options?",
    "deeperQuestion": "Do you fear their disappointment or owning your choice?",
    "twist": "",
    "zh": {
      "title": "說不出口的好消息",
      "scenario": "你獲得一個很棒的邀請，但會佔去原定陪伴伴侶的重要日子。你拖了幾天沒說，現在更難開口。",
      "question": "你會先承認哪一部分，再一起談選擇？",
      "deeperQuestion": "你怕的是對方失望，還是怕自己要為選擇負責？",
      "twist": ""
    },
    "id": "ponder-v5-couple-080",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Trading burdens",
    "scenario": "You can swap a day's responsibilities, including worries. You realise you do not know what your partner carries mentally.",
    "question": "What three things would you ask before taking over?",
    "deeperQuestion": "Which burdens have you never let them see?",
    "twist": "",
    "zh": {
      "title": "如果交換一天負擔",
      "scenario": "你們可以交換一天的責任，但不能只交換工作，還要接手對方一直記在心裡的事。你發現自己不知道他每天在擔心甚麼。",
      "question": "你會先問哪三件事，才真正接得住這一天？",
      "deeperQuestion": "有哪些負擔，你自己也從沒讓對方知道？",
      "twist": ""
    },
    "id": "ponder-v5-couple-081",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Improvement by surprise",
    "scenario": "Your partner gifts an unsolicited self-improvement course. You cannot tell whether it means support or dissatisfaction.",
    "question": "How would you clarify the intention and express your reaction?",
    "deeperQuestion": "What encouragement energises you, and what makes you retreat?",
    "twist": "",
    "zh": {
      "title": "被安排的進步",
      "scenario": "伴侶送你一套你沒提過的自我提升課程，說想陪你變得更好。你不知道這是支持，還是在暗示現在的你不夠好。",
      "question": "你會怎樣確認他的意思，也說出自己的感受？",
      "deeperQuestion": "怎樣的鼓勵讓你有力量，怎樣的鼓勵讓你想躲？",
      "twist": ""
    },
    "id": "ponder-v5-couple-082",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Everyone approves",
    "scenario": "Everyone thinks you are well matched. Life works, yet you have nowhere to share some important thoughts.",
    "question": "Which kind of conversation would you try to change first?",
    "deeperQuestion": "Does others' approval make your needs harder to admit?",
    "twist": "",
    "zh": {
      "title": "朋友都說很合適",
      "scenario": "大家都說你們很合適，生活也沒有大問題。只有你知道，某些重要的想法一直找不到地方說。",
      "question": "你會先嘗試改變哪一種對話？",
      "deeperQuestion": "外界的肯定，有沒有令你更難承認自己的需要？",
      "twist": ""
    },
    "id": "ponder-v5-couple-083",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "A favour between partners",
    "scenario": "Your partner offers a useful job introduction. You want independence but worry that refusing will hurt them.",
    "question": "Which help would you accept, and what would you do yourself?",
    "deeperQuestion": "Does accepting an opportunity diminish the work you do afterwards?",
    "twist": "",
    "zh": {
      "title": "不想欠一個人情",
      "scenario": "伴侶願意用自己的人脈幫你找工作，你卻想靠自己。你怕拒絕讓他受傷，也怕接受後很難分清成就屬於誰。",
      "question": "你會接受哪一部分幫助，保留哪一部分自己完成？",
      "deeperQuestion": "接受機會，是否等於否定後來自己的努力？",
      "twist": ""
    },
    "id": "ponder-v5-couple-084",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Uneven energy",
    "scenario": "You have energy for outings while your partner needs quiet. You want neither abandonment nor a pause on all your joy.",
    "question": "How would you arrange separate and shared time?",
    "deeperQuestion": "Do you need them to feel happy before allowing yourself to?",
    "twist": "",
    "zh": {
      "title": "一段不同步的低潮",
      "scenario": "你最近狀態很好，很想安排活動；伴侶卻需要安靜。你不想丟下他，也不想把自己的快樂全部暫停。",
      "question": "你們會怎樣安排各自和一起的時間？",
      "deeperQuestion": "你是否需要對方同樣開心，才容許自己開心？",
      "twist": ""
    },
    "id": "ponder-v5-couple-085",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "A shared account surprise",
    "scenario": "Your partner buys a useful, reasonably priced appliance from shared funds. The missing consultation bothers you.",
    "question": "Which expenses need discussion, and which can be independent?",
    "deeperQuestion": "Does the amount or the meaning of being included matter more?",
    "twist": "",
    "zh": {
      "title": "共同帳戶的意外",
      "scenario": "伴侶用共同帳戶買了一件家電，價格合理，也確實需要。你不滿的不是物品，而是自己沒有參與。",
      "question": "以後哪些支出要先談，哪些可以各自決定？",
      "deeperQuestion": "金額和決定的象徵意義，哪個對你更重要？",
      "twist": ""
    },
    "id": "ponder-v5-couple-086",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "An uneven invitation",
    "scenario": "Your partner's family excludes you from a trip because you are unmarried. Your partner wants to go but dislikes the reason.",
    "question": "How would you want them to respond without deciding attendance for them?",
    "deeperQuestion": "Do you most need an invitation or a clear sign of solidarity?",
    "twist": "",
    "zh": {
      "title": "一份不夠公平的邀請",
      "scenario": "伴侶的家人只邀他去旅行，說你們還沒結婚。他想去，也覺得這個理由不舒服。",
      "question": "你希望他怎樣回應，而不是替他直接決定去留？",
      "deeperQuestion": "你最在乎被邀請，還是被清楚地站在身邊？",
      "twist": ""
    },
    "id": "ponder-v5-couple-087",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Winning the point",
    "scenario": "You prove your memory was correct. Your partner agrees, but the tension remains.",
    "question": "What still needs discussion after settling the facts?",
    "deeperQuestion": "Behind wanting to be right, do you also want to be trusted?",
    "twist": "",
    "zh": {
      "title": "爭執中的正確答案",
      "scenario": "你找到資料，證明爭執時自己的記憶沒錯。伴侶承認了，但兩人的氣氛仍然很差。",
      "question": "確認事實之後，你還需要談甚麼？",
      "deeperQuestion": "你想被證明沒錯，背後是否也想被相信？",
      "twist": ""
    },
    "id": "ponder-v5-couple-088",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Preparing differently",
    "scenario": "You plan for worst cases; your partner waits for information. Each sees the other's coping style as a problem.",
    "question": "What timing and conditions could make planning manageable for both?",
    "deeperQuestion": "What has anticipating trouble protected, and what has it cost?",
    "twist": "",
    "zh": {
      "title": "對未來的不同準備",
      "scenario": "你遇到不確定的事就想先做最壞打算，伴侶則想等更多資訊。你覺得他逃避，他覺得你把今天也弄得很累。",
      "question": "你們可以訂甚麼時間和條件，再一起處理擔心？",
      "deeperQuestion": "預先擔心曾經保護你甚麼，又花掉你甚麼？",
      "twist": ""
    },
    "id": "ponder-v5-couple-089",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "When understanding becomes silence",
    "scenario": "Your partner is busy with something important, so you minimise your own difficulties until resentment grows.",
    "question": "How would you bring your needs back into the conversation?",
    "deeperQuestion": "How do you tell understanding from waiting to be noticed?",
    "twist": "",
    "zh": {
      "title": "別讓懂事變沉默",
      "scenario": "伴侶正在忙重要的事，你一直把自己的困難說成小事。某天他問起，你才發現自己已經很委屈。",
      "question": "你會怎樣重新把自己的事放回對話裡？",
      "deeperQuestion": "你怎樣知道自己是真心體諒，還是在等待被猜中？",
      "twist": ""
    },
    "id": "ponder-v5-couple-090",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "An unexpected reunion",
    "scenario": "Someone once important invites you to dinner. You want only to catch up, but expect your partner may feel uneasy.",
    "question": "How would you handle both the invitation and telling your partner?",
    "deeperQuestion": "Are you seeking understanding, agreement or simply openness?",
    "twist": "",
    "zh": {
      "title": "意外的重逢邀請",
      "scenario": "一位曾經很重要的人邀你單獨吃飯，你沒有想復合，只想知道對方近況。你知道伴侶可能會不安。",
      "question": "你會怎樣處理邀請和告知的方式？",
      "deeperQuestion": "你希望得到理解、同意，還是只是把事情說清楚？",
      "twist": ""
    },
    "id": "ponder-v5-couple-091",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "A shared object, divided meaning",
    "scenario": "Only you still use an instrument bought together. Your partner wants space; you see a symbol of shared effort.",
    "question": "How would you separate practical use from memory?",
    "deeperQuestion": "Can keeping an object preserve the closeness it represents?",
    "twist": "",
    "zh": {
      "title": "不再一起用的東西",
      "scenario": "你們一起買的樂器，現在只有你在用。伴侶想賣掉換空間，你卻把它看成兩人曾經共同投入的證明。",
      "question": "你會怎樣分開談實際用途和回憶？",
      "deeperQuestion": "保留一件物品，是否一定能保留當時的親近？",
      "twist": ""
    },
    "id": "ponder-v5-couple-092",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "How often to check in?",
    "scenario": "During work trips you want daily calls; your partner finds messages enough. Affection remains, but expression differs.",
    "question": "What arrangement would you trial and revisit?",
    "deeperQuestion": "What do you most need to hear in those calls?",
    "twist": "",
    "zh": {
      "title": "關心的頻率",
      "scenario": "出差時你希望每天通話，伴侶覺得幾句訊息就足夠。你們都沒有少愛，只是想念的表達不同。",
      "question": "你們會試一個怎樣的安排，之後再一起調整？",
      "deeperQuestion": "你從通話裡最需要聽見的是甚麼？",
      "twist": ""
    },
    "id": "ponder-v5-couple-093",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Not the only outlet",
    "scenario": "Your partner shares every worry only with you. You value the trust but cannot always carry it.",
    "question": "How would you communicate your capacity while remaining caring?",
    "deeperQuestion": "Could outside support make the relationship stronger?",
    "twist": "",
    "zh": {
      "title": "不想當唯一出口",
      "scenario": "伴侶只願意跟你談所有煩惱，你很珍惜信任，卻開始覺得每天都接不住。他又不想找其他人。",
      "question": "你會怎樣表達自己的容量，又保留關心？",
      "deeperQuestion": "一段關係需要其他支持，是否反而更穩固？",
      "twist": ""
    },
    "id": "ponder-v5-couple-094",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Guilt after care",
    "scenario": "After being cared for while ill, you try to repay every favour. Your partner says there is no debt.",
    "question": "How could gratitude exist without immediate repayment?",
    "deeperQuestion": "Where did you learn that receiving creates a debt?",
    "twist": "",
    "zh": {
      "title": "被照顧後的內疚",
      "scenario": "你生病時伴侶很用心照顧，康復後你急著把所有家務包下。他說不用還，你卻很難自在地接受。",
      "question": "你會怎樣讓感謝不必立即變成還款？",
      "deeperQuestion": "你從哪裡學會，接受多一點就會欠人？",
      "twist": ""
    },
    "id": "ponder-v5-couple-095",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Facing awkwardness together",
    "scenario": "Your partner correctly fixes a factual mistake you make among friends, leaving you embarrassed.",
    "question": "How would you want them to handle it next time?",
    "deeperQuestion": "When could dignity and accuracy be addressed in a different order?",
    "twist": "",
    "zh": {
      "title": "一起面對尷尬",
      "scenario": "你在伴侶朋友面前說錯一件事，他立即糾正，資料是對的，你卻覺得很難堪。",
      "question": "你希望下次他怎樣處理？",
      "deeperQuestion": "保住面子和說清事實，哪種情況下可以先後有別？",
      "twist": ""
    },
    "id": "ponder-v5-couple-096",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "A Sunday worth keeping",
    "scenario": "Your weekly family lunch feels grounding to you but inflexible to your partner, who wants occasional spontaneity.",
    "question": "How would you preserve the tradition and make room for something new?",
    "deeperQuestion": "Does changing frequency feel like reducing love?",
    "twist": "",
    "zh": {
      "title": "不願放棄的週日",
      "scenario": "你每週日跟家人吃飯，伴侶希望偶爾可以臨時出去玩。對你來說那是根，對他來說卻像永遠不能碰的時段。",
      "question": "你會怎樣保留傳統，也留下新的空間？",
      "deeperQuestion": "改變頻率，對你是否像減少了愛？",
      "twist": ""
    },
    "id": "ponder-v5-couple-097",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Only the good parts",
    "scenario": "You share only happy relationship stories. Now you need support and fear people will think the earlier picture was false.",
    "question": "Whom would you approach, and how would you tell a fuller story?",
    "deeperQuestion": "How does protecting privacy differ from maintaining a perfect image?",
    "twist": "",
    "zh": {
      "title": "只說了好的一面",
      "scenario": "朋友羨慕你們的關係，你總只說好的一面。當你真的需要求助時，反而怕別人覺得你之前都在裝。",
      "question": "你會找誰，怎樣開始一段比較完整的描述？",
      "deeperQuestion": "保護關係的私隱，和維持完美形象，差在哪裡？",
      "twist": ""
    },
    "id": "ponder-v5-couple-098",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Stay and repair?",
    "scenario": "A recurring small issue improves slowly after each discussion, but you remain exhausted without one dramatic cause.",
    "question": "What changes would help you assess your capacity to continue?",
    "deeperQuestion": "Can you admit exhaustion without proving the other person is bad?",
    "twist": "",
    "zh": {
      "title": "留下還是修補",
      "scenario": "一個反覆出現的小問題，伴侶每次都願意談，也改善了一點，但你仍很累。沒有單一大事能解釋你的疲倦。",
      "question": "你會看哪些改變，判斷自己還有沒有力氣繼續？",
      "deeperQuestion": "你可以承認很累，而不用先證明對方很壞嗎？",
      "twist": ""
    },
    "id": "ponder-v5-couple-099",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "A future thank-you",
    "scenario": "Imagine a thank-you card from you both in ten years, naming one difficult decision made today.",
    "question": "Which decision would you hope the card names?",
    "deeperQuestion": "What fear currently stops you from starting that conversation?",
    "twist": "",
    "zh": {
      "title": "未來的我們會謝謝誰",
      "scenario": "假如十年後的你們能寄回一張感謝卡，只能感謝今天一個不容易的決定。它可能是留下、改變，也可能是放慢。",
      "question": "你希望卡片上寫的是甚麼決定？",
      "deeperQuestion": "現在有哪個害怕，讓你一直不敢開始談？",
      "twist": ""
    },
    "id": "ponder-v5-couple-100",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Family",
    "zh": {
      "title": "一樣多，才算公平嗎？",
      "scenario": "家裡有一筆額外的錢，原本打算平均給兩名成年子女。一人收入穩定，另一人剛失業、急需付房租。父母想暫時多幫後者，卻又怕前者覺得一直努力的人反而吃虧。",
      "question": "如果要一起商量，你會怎樣分配這筆錢？",
      "deeperQuestion": "如果你是得到較少的那個人，你最希望家人先跟你說清楚甚麼？",
      "twist": ""
    },
    "title": "Does fair mean equal?",
    "scenario": "A family planned to divide some extra money equally between two adult children. One has a steady income; the other has just lost a job and needs rent money. Their parents want to offer extra help without making the first feel penalised for doing well.",
    "question": "How would you discuss dividing the money?",
    "deeperQuestion": "If you received less, what would you most want your family to explain first?",
    "twist": "",
    "id": "ponder-v5-family-001",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "zh": {
      "title": "為你好，但不是你想要的",
      "scenario": "家人願意幫你付進修費，但只支持他們覺得穩定實用的課程。你真正想讀的是另一個方向，並非一時衝動，只是出路沒那麼確定。你也可以自己慢慢存錢，延後兩年再讀。",
      "question": "你會接受有條件的幫助，還是等自己負擔得起？",
      "deeperQuestion": "對你來說，關心到哪一步會變成替你做決定？你會怎樣讓家人知道？",
      "twist": ""
    },
    "title": "Help, with a direction attached",
    "scenario": "Your family offers to fund further study, but only a course they consider practical and secure. You have carefully chosen another path with less certain prospects. Alternatively, you could save for two years and pay yourself.",
    "question": "Would you accept conditional help or wait until you can afford your own choice?",
    "deeperQuestion": "When does care become deciding for you, and how would you explain that boundary?",
    "twist": "",
    "id": "ponder-v5-family-002",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "zh": {
      "title": "陪伴沒有平均分",
      "scenario": "兄弟姊妹都想照顧年長家人。一人住得近，經常陪診；另一人住得遠，負擔較多費用。住得近的人說自己快沒力了，住得遠的人也覺得已經盡力。兩邊都是真的。",
      "question": "你會先重新分配甚麼，讓這種照顧可以持續？",
      "deeperQuestion": "如果自己已經很累，你會怎樣說「我做不到更多」，又不把它說成「都是你做得太少」？",
      "twist": ""
    },
    "title": "Care is not evenly divided",
    "scenario": "Siblings want to support an older relative. One lives nearby and attends appointments; another lives far away and pays more of the costs. Both feel they are reaching their limits, and both are telling the truth.",
    "question": "What would you redistribute first to make the care sustainable?",
    "deeperQuestion": "How could you say “I cannot do more” without turning it into “You do too little”?",
    "twist": "",
    "id": "ponder-v5-family-003",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "An empty room",
    "scenario": "After you move out, your parents want your room as a studio. You understand but feel your place at home shrinking.",
    "question": "What would preserve your sense of coming home?",
    "deeperQuestion": "Must a space remain unchanged to show you still matter?",
    "twist": "",
    "zh": {
      "title": "一間空下來的房",
      "scenario": "你搬走後，父母想把你的房間改成工作室。你知道房子是他們在住，聽見消息卻有點像失去回家的位置。",
      "question": "你希望保留甚麼，才仍然有回家的感覺？",
      "deeperQuestion": "一個位置必須原封不動，才代表你仍然重要嗎？",
      "twist": ""
    },
    "id": "ponder-v5-family-004",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Changing a family recipe",
    "scenario": "You adapt a family recipe. An elder says it is no longer the same dish; you want both continuity and your own touch.",
    "question": "How could a tradition make room for change?",
    "deeperQuestion": "What matters more to preserve: the flavour or the story?",
    "twist": "",
    "zh": {
      "title": "家傳食譜的改動",
      "scenario": "你把家傳菜式改成自己喜歡的口味，長輩說已經不是原來那道菜。你想延續它，也想留下自己的部分。",
      "question": "你會怎樣讓傳承容得下改變？",
      "deeperQuestion": "對你來說，這道菜最不能失去的是味道還是故事？",
      "twist": ""
    },
    "id": "ponder-v5-family-005",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Missing the holiday",
    "scenario": "Your only long leave could fund a long-awaited trip, but you would miss a family holiday. Relatives say they will miss you.",
    "question": "How would you choose and care for what you leave out?",
    "deeperQuestion": "Is guilt reminding you of love or making the decision for you?",
    "twist": "",
    "zh": {
      "title": "不能赴約的節日",
      "scenario": "你今年只能請一次長假，很想去一趟期待已久的旅行，卻會錯過家族節日。家人沒反對，只說少了你會冷清。",
      "question": "你會怎樣選，也怎樣照顧沒選到的那一邊？",
      "deeperQuestion": "內疚是提醒你重視家人，還是替你作決定？",
      "twist": ""
    },
    "id": "ponder-v5-family-006",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "The considerate one yields",
    "scenario": "On a family trip, everyone assumes you will take the worse room because you never mind. This time you do.",
    "question": "How would you state your preference?",
    "deeperQuestion": "Does praise for being considerate make wanting things harder?",
    "twist": "",
    "zh": {
      "title": "懂事的人先讓",
      "scenario": "家庭旅行剩兩間條件不同的房，大家很自然地叫你住較差的一間，因為你一向不計較。這次你其實很想要好的。",
      "question": "你會怎樣提出自己的選擇？",
      "deeperQuestion": "被稱讚懂事，有沒有令你更難說自己也想要？",
      "twist": ""
    },
    "id": "ponder-v5-family-007",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "A parent's new companion",
    "scenario": "Your widowed father finds companionship. You are glad and fear your mother's place in family memories may fade.",
    "question": "How could both attachments have room?",
    "deeperQuestion": "What remembrance could you preserve without keeping others in the past?",
    "twist": "",
    "zh": {
      "title": "爸爸的新朋友",
      "scenario": "喪偶多年的父親交了新朋友，看起來很開心。你替他高興，也突然害怕母親在家裡的回憶會被取代。",
      "question": "你會怎樣讓兩份感情同時存在？",
      "deeperQuestion": "你最希望保留哪一種紀念，而不要求別人停在過去？",
      "twist": ""
    },
    "id": "ponder-v5-family-008",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "A well-meant remark",
    "scenario": "Relatives repeatedly comment on your body out of concern. You want neither endless explanations nor ruined dinners.",
    "question": "What clear response would you prepare?",
    "deeperQuestion": "How would you hold your boundary if called too sensitive?",
    "twist": "",
    "zh": {
      "title": "一句沒有惡意的評論",
      "scenario": "家人每次見面都評論你的身形，說只是關心。你已不想再解釋，也不想每次飯局都因此鬧僵。",
      "question": "你會準備哪一句清楚的回應？",
      "deeperQuestion": "如果對方說你太敏感，你會怎樣守住原本的意思？",
      "twist": ""
    },
    "id": "ponder-v5-family-009",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Money you hesitate to accept",
    "scenario": "Your parents offer unconditional money, but past help made it hard to disagree with them.",
    "question": "What boundaries would you clarify before accepting the money?",
    "deeperQuestion": "What actions make unconditional support believable?",
    "twist": "",
    "zh": {
      "title": "一筆不想收的錢",
      "scenario": "父母想給你一筆錢，說沒有條件。但你記得以前收過幫助後，重要選擇都很難不聽他們的。",
      "question": "你會先談清楚甚麼，才決定收不收？",
      "deeperQuestion": "口頭說沒有條件，還需要哪些行動才能令人相信？",
      "twist": ""
    },
    "id": "ponder-v5-family-010",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Who says the hard thing?",
    "scenario": "Everyone asks you to raise a difficult issue with an elder because they listen to you. You worry about the relationship too.",
    "question": "How far would you speak on everyone's behalf?",
    "deeperQuestion": "How could others share responsibility for the conversation?",
    "twist": "",
    "zh": {
      "title": "誰來說那句真話",
      "scenario": "全家都知道長輩做的某件事令大家困擾，卻總叫你去談，因為他最聽你的。你也怕破壞你們的關係。",
      "question": "你願意代表大家說到哪裡？",
      "deeperQuestion": "家人可以怎樣分擔這次談話的責任？",
      "twist": ""
    },
    "id": "ponder-v5-family-011",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Missing from the album",
    "scenario": "A family album barely shows the person who organised and photographed everything.",
    "question": "How would you preserve their story too?",
    "deeperQuestion": "Which other familiar contributions have become invisible?",
    "twist": "",
    "zh": {
      "title": "相簿裡缺少的人",
      "scenario": "整理家庭相簿時，你發現某位照顧大家很多的人幾乎不在照片裡，因為他一直在拍照和張羅。",
      "question": "你會怎樣讓他的故事也被留下？",
      "deeperQuestion": "家裡還有哪些付出，因為太習慣而沒被看見？",
      "twist": ""
    },
    "id": "ponder-v5-family-012",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Different visits home",
    "scenario": "You visit twice yearly from far away; a sibling visits weekly and says you miss daily realities. Your concern feels no smaller.",
    "question": "How could you discuss the difference without ranking love?",
    "deeperQuestion": "What practical involvement could you add?",
    "twist": "",
    "zh": {
      "title": "不同的回家頻率",
      "scenario": "你住得遠，一年回家兩次；兄弟姊妹住得近，每週到訪。他說你不了解日常，你覺得自己的牽掛也不比較少。",
      "question": "你們可以怎樣談差別，而不比較誰更愛家？",
      "deeperQuestion": "你能補上哪一種實際參與？",
      "twist": ""
    },
    "id": "ponder-v5-family-013",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Whose secret is it?",
    "scenario": "A relative shares another family member's private news and asks for secrecy. The person concerned never wanted it shared.",
    "question": "How would you handle information you should not have received?",
    "deeperQuestion": "Does knowing more always mean being closer?",
    "twist": "",
    "zh": {
      "title": "不是大家的秘密",
      "scenario": "親戚告訴你另一位家人的私事，叮囑別說出去。你知道當事人根本不希望這件事在家族流傳。",
      "question": "你會怎樣處理自己已經知道的事？",
      "deeperQuestion": "在家人之間，知道更多是否就代表更親近？",
      "twist": ""
    },
    "id": "ponder-v5-family-014",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "A childhood role",
    "scenario": "You have always been the family joker. This time you need to be heard seriously, but everyone assumes you are joking.",
    "question": "How would you signal that this time needs another response?",
    "deeperQuestion": "What do you fear if you stop playing your familiar role?",
    "twist": "",
    "zh": {
      "title": "從小的角色",
      "scenario": "你從小是家裡負責逗大家笑的人，難過時也會先講笑話。這次你真的想有人認真聽，大家卻以為你又在玩。",
      "question": "你會怎樣讓家人知道，這次需要不同的回應？",
      "deeperQuestion": "如果不再扮演熟悉的角色，你怕家人會怎樣看你？",
      "twist": ""
    },
    "id": "ponder-v5-family-015",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "The shop you do not want",
    "scenario": "Your parents want you to take over the shop you grew up in. You treasure it but want a different life.",
    "question": "How would you express gratitude and decline?",
    "deeperQuestion": "What could you help preserve without taking everything on?",
    "twist": "",
    "zh": {
      "title": "不想接手的店",
      "scenario": "家裡的小店陪你長大，父母希望你接手。你珍惜它，卻不想把往後的生活放在這裡。",
      "question": "你會怎樣表達感謝和拒絕？",
      "deeperQuestion": "你願意幫忙留下甚麼，而不必接手全部？",
      "twist": ""
    },
    "id": "ponder-v5-family-016",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "A name choice",
    "scenario": "You want a name that feels more like you. Your family treasures your birth name and feels the change rejects their original affection.",
    "question": "How would you explain the difference between a name and a relationship?",
    "deeperQuestion": "Which family connections would you actively choose to keep?",
    "twist": "",
    "zh": {
      "title": "想用的新名字",
      "scenario": "你想改一個更符合自己的名字，家人卻很珍惜你出生時取的名字。對你來說是認識自己，對他們卻像否定當年的心意。",
      "question": "你會怎樣說明名字和關係不是同一件事？",
      "deeperQuestion": "哪些家族連結，你會主動選擇保留？",
      "twist": ""
    },
    "id": "ponder-v5-family-017",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Constant comparisons",
    "scenario": "Relatives use a cousin's achievements as encouragement, making your own good news feel inadequate.",
    "question": "How would you ask for a different kind of encouragement?",
    "deeperQuestion": "Have you adopted the same comparisons internally?",
    "twist": "",
    "zh": {
      "title": "一直被比較的成績",
      "scenario": "家人說表親的成就只是用來鼓勵你，卻令你每次分享好消息都先想自己還差多少。",
      "question": "你會怎樣請他們換一種鼓勵方式？",
      "deeperQuestion": "你有沒有也把這種比較方式帶到自己心裡？",
      "twist": ""
    },
    "id": "ponder-v5-family-018",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "An elder's choice",
    "scenario": "An elder does daily tasks slowly but wants independence. Doing them yourself is faster, yet may take something away.",
    "question": "How would you ask how much help they want?",
    "deeperQuestion": "When is preserving independence worth the extra time?",
    "twist": "",
    "zh": {
      "title": "需要幫忙的長輩",
      "scenario": "長輩有些日常事做得慢，但很想自己來。你替他完成會快很多，也擔心不幫看起來不關心。",
      "question": "你會怎樣問他希望你幫到哪一步？",
      "deeperQuestion": "效率和保留自主，這次哪一個更值得等？",
      "twist": ""
    },
    "id": "ponder-v5-family-019",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Help declined",
    "scenario": "You plan an outing for your parents; they prefer staying home. You feel hurt by the rejection.",
    "question": "How would you separate your effort from their preference?",
    "deeperQuestion": "Would asking first make the gesture feel less special?",
    "twist": "",
    "zh": {
      "title": "一份被拒絕的好意",
      "scenario": "你花心思替父母安排活動，他們卻寧願留在家。你覺得失落，甚至想說自己以後不再安排。",
      "question": "你會怎樣分開自己的心意和他們的選擇？",
      "deeperQuestion": "付出之前先問，會不會讓你覺得少了驚喜的意義？",
      "twist": ""
    },
    "id": "ponder-v5-family-020",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Silence in the group chat",
    "scenario": "You cannot keep up with family messages. An elder reads slow replies as lack of care.",
    "question": "What contact rhythm would work better for everyone?",
    "deeperQuestion": "What contact matters more than daily emoji replies?",
    "twist": "",
    "zh": {
      "title": "家族群組的沉默",
      "scenario": "家族群組每天很多訊息，你常來不及回。長輩覺得你不關心，你卻不想把回覆速度當成愛的證明。",
      "question": "你會提議甚麼更適合彼此的聯絡方式？",
      "deeperQuestion": "哪一種聯繫，比每天回貼圖更有意義？",
      "twist": ""
    },
    "id": "ponder-v5-family-021",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "A story you outgrew",
    "scenario": "Family gatherings repeat a childhood embarrassment. Others find it warm; you have already said you dislike it.",
    "question": "How would you make the boundary clearer this time?",
    "deeperQuestion": "How should shared storytelling respect the person in the story?",
    "twist": "",
    "zh": {
      "title": "一段不願再聽的故事",
      "scenario": "家人聚會總講你小時候的一次糗事，大家覺得溫馨，你卻每次都想躲。你已說過一次不喜歡。",
      "question": "這次你會怎樣回應，讓界線更清楚？",
      "deeperQuestion": "共同回憶的講述權，應該怎樣照顧當事人？",
      "twist": ""
    },
    "id": "ponder-v5-family-022",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "No longer the mediator",
    "scenario": "Two relatives use you to relay complaints after arguments. You love both but dread their calls.",
    "question": "Which role would you stop, and what support would you keep?",
    "deeperQuestion": "Does refusing to repair their relationship mean you do not care?",
    "twist": "",
    "zh": {
      "title": "不想當和事佬",
      "scenario": "兩位家人吵架後總各自找你訴苦，要你傳話。你很愛兩人，卻開始害怕接電話。",
      "question": "你會停止哪一種角色，保留哪一種陪伴？",
      "deeperQuestion": "不替他們修好關係，是否就等於不關心？",
      "twist": ""
    },
    "id": "ponder-v5-family-023",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Two reasons to leave",
    "scenario": "You want to study abroad for the course and distance from family expectations. Only the first reason feels acceptable at home.",
    "question": "Must you explain every reason, or only what you are ready to share?",
    "deeperQuestion": "Does honesty require total disclosure?",
    "twist": "",
    "zh": {
      "title": "留學的兩種理由",
      "scenario": "你想去外地讀書，一部分是課程好，一部分是想離開家人的期待。家人只接受第一個理由。",
      "question": "你需要說出全部理由，還是先說自己準備好的部分？",
      "deeperQuestion": "誠實是否一定等於毫無保留？",
      "twist": ""
    },
    "id": "ponder-v5-family-024",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "An overlooked birthday",
    "scenario": "One relative gets a big celebration; you receive a message. Circumstances differ, but you feel less valued.",
    "question": "What do you most want them to understand?",
    "deeperQuestion": "Do you need identical plans or equal thoughtfulness?",
    "twist": "",
    "zh": {
      "title": "一個被忽略的生日",
      "scenario": "家裡為某位成員大肆慶生，輪到你時卻只傳了訊息。你知道情況不同，還是感到自己比較不重要。",
      "question": "你最想家人理解哪一部分？",
      "deeperQuestion": "你需要相同的安排，還是相同程度的用心？",
      "twist": ""
    },
    "id": "ponder-v5-family-025",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Things in the old home",
    "scenario": "Family is clearing the old home. You want keepsakes but lack space and cannot ask others to store everything.",
    "question": "How would you decide what to keep and release?",
    "deeperQuestion": "Are you protecting objects or afraid of forgetting a time?",
    "twist": "",
    "zh": {
      "title": "老家的物品",
      "scenario": "家人準備搬屋，想清走舊物。你很想保留很多，卻沒有空間帶走，也不能一直叫別人替你存著。",
      "question": "你會用甚麼方式決定留下和告別？",
      "deeperQuestion": "捨不得的是物品，還是怕忘記那段日子？",
      "twist": ""
    },
    "id": "ponder-v5-family-026",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Different parenting views",
    "scenario": "An elder helping with a child quietly overrides your rules out of affection. You appreciate help but need consistency.",
    "question": "How would you distinguish flexible choices from necessary consistency?",
    "deeperQuestion": "What cost would you accept if less help were needed?",
    "twist": "",
    "zh": {
      "title": "不同的教養方式",
      "scenario": "你照顧孩子時訂了清楚規則，長輩卻偷偷放寬，說疼小孩就是這樣。你感謝幫忙，也不想規則每天重來。",
      "question": "你會怎樣談哪些事情可以彈性，哪些必須一致？",
      "deeperQuestion": "如果需要減少幫忙，你願意承擔甚麼代價？",
      "twist": ""
    },
    "id": "ponder-v5-family-027",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "The successful one",
    "scenario": "Being called the family's success story makes it hard to admit work struggles.",
    "question": "Whom would you tell one less polished update first?",
    "deeperQuestion": "Can family pride include your ordinary, struggling self?",
    "twist": "",
    "zh": {
      "title": "被稱為最成功的人",
      "scenario": "家人常介紹你是全家最成功的人，你卻因此不敢說工作不順。你怕一開口，連他們的希望也會落空。",
      "question": "你會先向誰說一件不那麼光彩的近況？",
      "deeperQuestion": "你想家人為你的成績驕傲，還是也能接住普通的你？",
      "twist": ""
    },
    "id": "ponder-v5-family-028",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Unequal rules",
    "scenario": "Family rules differ by gender in the name of protection. You face more restrictions for the same activity.",
    "question": "What concrete example would open a discussion about fairness?",
    "deeperQuestion": "How could a genuinely protective rule apply to everyone?",
    "twist": "",
    "zh": {
      "title": "無意中的差別待遇",
      "scenario": "同一件事，家人對不同性別的孩子有不同要求，說是保護。被限制較多的你，想知道為甚麼風險只由你避開。",
      "question": "你會提出哪一個具體例子來討論公平？",
      "deeperQuestion": "如果規則真的為安全，怎樣才能適用於每個人？",
      "twist": ""
    },
    "id": "ponder-v5-family-029",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "A parent's fresh start",
    "scenario": "Your mother wants to study something new. Others question the cost at her age; she values finally having time.",
    "question": "How would you respond to their definition of worthwhile?",
    "deeperQuestion": "Do you also expect older people's wishes to be practical?",
    "twist": "",
    "zh": {
      "title": "媽媽想重新開始",
      "scenario": "母親想花一筆錢學新技能，家人覺得這個年紀不值得。她說不是為了賺錢，只是終於有時間。",
      "question": "你會怎樣回應家人對「值得」的定義？",
      "deeperQuestion": "你是否也要求長輩的願望一定要實用？",
      "twist": ""
    },
    "id": "ponder-v5-family-030",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Checking in as an adult",
    "scenario": "Living independently, you still face daily requests for your whereabouts. Concern starts to feel like permission.",
    "question": "What would you share, and what would you keep private?",
    "deeperQuestion": "What expression of concern would make you more open?",
    "twist": "",
    "zh": {
      "title": "成年後的報備",
      "scenario": "你已獨立生活，父母仍希望每天知道你在哪裡。你明白他們擔心，卻覺得自己的生活像需要批准。",
      "question": "你願意分享甚麼，又想保留甚麼？",
      "deeperQuestion": "家人怎樣表達擔心，你會更願意靠近？",
      "twist": ""
    },
    "id": "ponder-v5-family-031",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Repeated loans",
    "scenario": "A relative requests another loan before repaying the first. Family urges help while you save for something important.",
    "question": "How would you choose the form and limit of help?",
    "deeperQuestion": "What other support could you offer without overextending?",
    "twist": "",
    "zh": {
      "title": "借了又借的親戚",
      "scenario": "親戚再次借錢，上一次還未還清。家人說彼此應該幫忙，你也知道他有困難，但你正在存自己的重要費用。",
      "question": "你會怎樣決定幫忙的形式和上限？",
      "deeperQuestion": "不借錢，還有哪些不勉強自己的支持？",
      "twist": ""
    },
    "id": "ponder-v5-family-032",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Shared household work",
    "scenario": "Adults sharing a home call chores “helping you,” as if one person owns all the work.",
    "question": "How would you redistribute responsibility, not just tasks?",
    "deeperQuestion": "How should the work of noticing needs be recognised?",
    "twist": "",
    "zh": {
      "title": "家裡的工作不是幫忙",
      "scenario": "一起住的成年人做家務時總說「我幫你」，彷彿家務原本屬於某一個人。那個人已經很累。",
      "question": "你會怎樣重新分配責任，而不只是分配任務？",
      "deeperQuestion": "誰在發現事情需要做，這部分該怎樣被看見？",
      "twist": ""
    },
    "id": "ponder-v5-family-033",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "An unasked wish",
    "scenario": "Halfway through planning a big birthday, you learn the elder wants a small meal. Cancelling costs a deposit.",
    "question": "Would you protect the plan or reshape it around their wish?",
    "deeperQuestion": "How does effort already spent affect your willingness to listen?",
    "twist": "",
    "zh": {
      "title": "未被問過的願望",
      "scenario": "你想替長輩辦盛大生日會，準備到一半才知道他只想跟幾個人吃飯。取消會損失訂金。",
      "question": "你會保住計劃，還是改成他真正想要的樣子？",
      "deeperQuestion": "已經花掉的心思，會怎樣影響你聽取對方？",
      "twist": ""
    },
    "id": "ponder-v5-family-034",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Coming home after failure",
    "scenario": "After a failed plan abroad, you need a stay at home. Family welcomes you, but you fear daily hindsight lectures.",
    "question": "What would you discuss before returning?",
    "deeperQuestion": "Does temporary dependence make you feel less adult?",
    "twist": "",
    "zh": {
      "title": "失敗後才回家",
      "scenario": "你在外地的計劃失敗，想回家住一段時間。家人願意接納，你卻怕每頓飯都要聽「早就跟你說過」。",
      "question": "你會在回家前談清楚甚麼？",
      "deeperQuestion": "接受暫時的依靠，是否讓你覺得失去成年人的資格？",
      "twist": ""
    },
    "id": "ponder-v5-family-035",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Different holiday needs",
    "scenario": "A relative avoids gatherings after intrusive questions. Others call them distant; you cannot share their private reasons.",
    "question": "How could you improve the atmosphere without exposing them?",
    "deeperQuestion": "Does togetherness mean attendance or making return feel welcome?",
    "twist": "",
    "zh": {
      "title": "不是每個人都想團圓",
      "scenario": "家族聚會有人總缺席，大家說他冷淡。你知道他每次來都被追問私事，但他沒有授權你替他解釋。",
      "question": "你可以怎樣改善氣氛，而不公開他的事？",
      "deeperQuestion": "團圓需要人到齊，還是讓人願意回來？",
      "twist": ""
    },
    "id": "ponder-v5-family-036",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "A brief apology",
    "scenario": "An elder finally admits being too harsh with a brief apology. You waited years and do not know whether it is enough.",
    "question": "What else would you say, or not do yet?",
    "deeperQuestion": "Must accepting an apology mean immediate closeness?",
    "twist": "",
    "zh": {
      "title": "家人的道歉很短",
      "scenario": "長輩第一次承認以前對你太嚴厲，只說了一句「那時不懂」。你等了很久，卻不知道這句是否足夠。",
      "question": "你還想說甚麼，或暫時不想做甚麼？",
      "deeperQuestion": "接受道歉，是否一定要立即表現得親近？",
      "twist": ""
    },
    "id": "ponder-v5-family-037",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "A family move",
    "scenario": "A move lowers costs for most of the family but separates one person from vital support.",
    "question": "How would you give weight to the minority's loss?",
    "deeperQuestion": "Is majority agreement enough for a decision affecting everyone?",
    "twist": "",
    "zh": {
      "title": "一場全家的搬遷",
      "scenario": "家人想搬到生活成本較低的地方，對大部分人都好，卻會讓其中一人失去重要的支持圈。",
      "question": "你們會怎樣讓少數人的損失也有分量？",
      "deeperQuestion": "多數人同意，是否就足以決定所有人的生活？",
      "twist": ""
    },
    "id": "ponder-v5-family-038",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Privacy under one roof",
    "scenario": "While staying with family, people enter without knocking. You need privacy even in a shared home.",
    "question": "What simple rule could apply to everyone?",
    "deeperQuestion": "Does staying in someone else's home remove your right to boundaries?",
    "twist": "",
    "zh": {
      "title": "同一屋簷的私隱",
      "scenario": "你暫住家裡，家人習慣不敲門就進房，覺得一家人不用分得那麼清。你很需要一個能關門的地方。",
      "question": "你會怎樣提出一條簡單、大家都能遵守的規則？",
      "deeperQuestion": "住在別人的房子，是否就不能有自己的界線？",
      "twist": ""
    },
    "id": "ponder-v5-family-039",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "The family calendar",
    "scenario": "The family organiser stops managing birthdays and appointments. Missed events reveal how much they carried.",
    "question": "What would you take over instead of asking for another reminder?",
    "deeperQuestion": "How could this work stop depending on one person's goodwill?",
    "twist": "",
    "zh": {
      "title": "誰記得大家的事",
      "scenario": "家裡總有一個人記住所有生日、約診和聚會。今年他說累了，不想再提醒，大家才發現事情接連漏掉。",
      "question": "你會主動接手哪一部分，而不是只叫他再提醒一次？",
      "deeperQuestion": "你怎樣讓這份工作不再靠一個人的熱心？",
      "twist": ""
    },
    "id": "ponder-v5-family-040",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "A choice you doubt",
    "scenario": "An adult sibling plans a risky career change. They want no money, only an end to repeated discouragement.",
    "question": "How would you voice concern once and still support the person?",
    "deeperQuestion": "Can you allow family to make choices you would not make?",
    "twist": "",
    "zh": {
      "title": "未必同意的選擇",
      "scenario": "成年手足想轉行，你覺得風險很高。他沒有問你借錢，只希望你不要每次見面都勸退。",
      "question": "你會怎樣表達一次擔心，之後仍然支持他這個人？",
      "deeperQuestion": "你能容許家人作你不會作的決定嗎？",
      "twist": ""
    },
    "id": "ponder-v5-family-041",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "News not ready to share",
    "scenario": "Your parents excitedly share a plan you told only them. You were not ready for everyone's questions.",
    "question": "How would you handle this disclosure and set future expectations?",
    "deeperQuestion": "Does good news also require permission to share?",
    "twist": "",
    "zh": {
      "title": "一個不想公開的消息",
      "scenario": "你只告訴父母一件新計劃，他們開心地通知全家。你還沒準備好，現在每個人都來問進度。",
      "question": "你會怎樣處理這次公開，並訂下以後的約定？",
      "deeperQuestion": "好消息是否也需要得到當事人同意才能分享？",
      "twist": ""
    },
    "id": "ponder-v5-family-042",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "No contest of hardship",
    "scenario": "When you mention tiredness, an elder describes harder times. Their history is real, but your feelings seem erased.",
    "question": "How would you acknowledge both generations' difficulties?",
    "deeperQuestion": "Does someone else's greater hardship cancel your need for care?",
    "twist": "",
    "zh": {
      "title": "辛苦不必比大小",
      "scenario": "你說最近很累，長輩立即說他們以前辛苦得多。你知道那是真的，卻覺得自己的感受被取消。",
      "question": "你會怎樣同時承認兩代人的辛苦？",
      "deeperQuestion": "聽見別人更苦，是否就不能再照顧自己？",
      "twist": ""
    },
    "id": "ponder-v5-family-043",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Different holiday beliefs",
    "scenario": "You no longer believe in a family ritual but value gathering together. You want neither pretence nor hurt.",
    "question": "Which parts would you join, and which boundaries would you explain?",
    "deeperQuestion": "Do they most want shared belief or your presence?",
    "twist": "",
    "zh": {
      "title": "不同的節日信仰",
      "scenario": "家裡重要的儀式，你已不再相信，卻仍珍惜一起的時間。你不想假裝，也不想把缺席變成傷害。",
      "question": "你會參與哪些部分，坦白哪些界線？",
      "deeperQuestion": "家人最想要的是相同信念，還是你的陪伴？",
      "twist": ""
    },
    "id": "ponder-v5-family-044",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Gratitude and hurt",
    "scenario": "Your family gave you much and also hurt you in some ways. Gratitude makes those hurts hard to discuss.",
    "question": "How could gratitude and hurt both be expressed?",
    "deeperQuestion": "Does acknowledging hurt erase someone's contributions?",
    "twist": "",
    "zh": {
      "title": "不必感恩一切",
      "scenario": "家人為你付出很多，也有一些做法曾傷害你。每次想談受傷的部分，你都怕自己像不懂感恩。",
      "question": "你會怎樣讓感謝和難過一起被說出來？",
      "deeperQuestion": "承認受過傷，是否一定會抹去別人的付出？",
      "twist": ""
    },
    "id": "ponder-v5-family-045",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "An unexpected letter",
    "scenario": "An old letter reveals an elder's unfamiliar youthful dreams. You are curious but want to respect possible regret.",
    "question": "How would you invite the story while leaving control with them?",
    "deeperQuestion": "Could you accept their choosing not to explain?",
    "twist": "",
    "zh": {
      "title": "一份意外的家書",
      "scenario": "你找到長輩年輕時寫的信，裡面的夢想跟你認識的他很不同。你很想問，也怕碰到他不想再談的遺憾。",
      "question": "你會怎樣開啟這段對話，讓他可以選擇說多少？",
      "deeperQuestion": "如果他只想保留那封信的沉默，你能接受嗎？",
      "twist": ""
    },
    "id": "ponder-v5-family-046",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Outside the family reputation",
    "scenario": "Family describes your work with a more prestigious label to avoid relatives' judgement. You feel hidden.",
    "question": "How would you want them to introduce you?",
    "deeperQuestion": "Do you most need understanding of the work or respect for your choice?",
    "twist": "",
    "zh": {
      "title": "把家人放在履歷外",
      "scenario": "你想做的工作不容易向親戚解釋，家人總替你改成比較體面的名稱。你知道是怕被批評，仍覺得自己被藏起來。",
      "question": "你會希望他們怎樣介紹你？",
      "deeperQuestion": "你最需要家人理解工作內容，還是尊重你的選擇？",
      "twist": ""
    },
    "id": "ponder-v5-family-047",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Old sibling scores",
    "scenario": "As the older sibling you always yielded. Adults still expect it, and today's dispute carries years of feeling.",
    "question": "How would you separate today's request from older resentment?",
    "deeperQuestion": "If fairness starts today, what acknowledgement does the past need?",
    "twist": "",
    "zh": {
      "title": "手足間的舊帳",
      "scenario": "你小時候常讓著弟妹，現在大家成年，家人仍希望你先退一步。你想談的似乎不只是眼前這件事。",
      "question": "你會怎樣把現在的要求和過去的委屈分開談？",
      "deeperQuestion": "如果從今天開始公平，過去的部分還需要甚麼？",
      "twist": ""
    },
    "id": "ponder-v5-family-048",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "One family keepsake",
    "scenario": "Two relatives want one keepsake: one provided care, the other has childhood memories. It has little resale value.",
    "question": "How would you decide without pricing affection?",
    "deeperQuestion": "What meaning could shared custody or a replica preserve?",
    "twist": "",
    "zh": {
      "title": "最後一份家族物品",
      "scenario": "一件家族物品有兩人都想要，一人常照顧長輩，另一人有很深的童年回憶。它不能分開，也不值得很多錢。",
      "question": "你會怎樣找一個不把感情標價的方法？",
      "deeperQuestion": "輪流保管或製作複本，能保留哪部分意義？",
      "twist": ""
    },
    "id": "ponder-v5-family-049",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "A newcomer at the table",
    "scenario": "A relative's partner joins for the first time while everyone shares inside jokes. They remain quiet.",
    "question": "What small change would make inclusion less of a test?",
    "deeperQuestion": "Can family closeness become a closed door to others?",
    "twist": "",
    "zh": {
      "title": "家裡的新成員",
      "scenario": "一位家人的伴侶第一次參加聚會，不熟悉你們的習慣。大家忙著講只有家人才懂的笑話，他一直安靜。",
      "question": "你會改變哪一個小習慣，讓他不用努力證明自己合群？",
      "deeperQuestion": "家的親密，有時會不會變成別人進不來的門？",
      "twist": ""
    },
    "id": "ponder-v5-family-050",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "A city you want to leave",
    "scenario": "Family wants you nearby, but another city suits who you are. Moving back would change more than your address.",
    "question": "How would you discuss distance without treating it as less love?",
    "deeperQuestion": "What reliable actions would keep the connection alive?",
    "twist": "",
    "zh": {
      "title": "不想留下的城市",
      "scenario": "家人希望你住近一點，你在另一個城市卻更像自己。兩邊都有重要的人，搬回去不是單純換地址。",
      "question": "你會怎樣談距離和關心，而不把它們當成反比？",
      "deeperQuestion": "你願意用甚麼穩定行動維持連結？",
      "twist": ""
    },
    "id": "ponder-v5-family-051",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Letting children see disagreement",
    "scenario": "One adult wants disagreements hidden from children; another wants them to see respectful repair.",
    "question": "Which conversations could children witness, and which need privacy?",
    "deeperQuestion": "What did childhood examples of conflict teach you?",
    "twist": "",
    "zh": {
      "title": "讓孩子看見分歧",
      "scenario": "家裡有人認為大人不應在孩子面前有分歧，另一人覺得孩子也需要看到怎樣和好。",
      "question": "哪些對話適合讓孩子看見，哪些需要私下談？",
      "deeperQuestion": "你小時候看到的衝突，教會你甚麼？",
      "twist": ""
    },
    "id": "ponder-v5-family-052",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "A skill with a cost",
    "scenario": "Family expects free design work for events. Endless revisions now affect your paid work.",
    "question": "How would you set scope, deadlines or payment?",
    "deeperQuestion": "Should closeness increase respect for the cost of your time?",
    "twist": "",
    "zh": {
      "title": "不能再免費的專長",
      "scenario": "你擅長設計，家族每次有活動都找你免費做。你願意幫，卻因修改太多而影響自己的工作。",
      "question": "你會怎樣訂範圍、期限或收費？",
      "deeperQuestion": "親近的人是否更應該理解你的時間有成本？",
      "twist": ""
    },
    "id": "ponder-v5-family-053",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Praise that divides",
    "scenario": "An elder calls you the most devoted child. You appreciate praise but see a sibling hurt by the comparison.",
    "question": "How would you receive praise without accepting a ranking?",
    "deeperQuestion": "What less visible contributions does your sibling make?",
    "twist": "",
    "zh": {
      "title": "好意變成比較",
      "scenario": "長輩當著手足稱讚你最孝順，你很想被肯定，也看見另一人表情僵住。你知道他的付出方式不同。",
      "question": "你會怎樣接住稱讚，又不讓它變成排名？",
      "deeperQuestion": "你知道手足有哪些不容易被看見的付出嗎？",
      "twist": ""
    },
    "id": "ponder-v5-family-054",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Whose wallet?",
    "scenario": "After you start earning, family expects a say in your income. You want to contribute without scrutiny of every purchase.",
    "question": "How would you separate shared responsibility from personal freedom?",
    "deeperQuestion": "What agreement would replace guessing with clarity?",
    "twist": "",
    "zh": {
      "title": "一家人的錢包",
      "scenario": "你開始賺錢後，家人覺得你的收入也應該共同規劃。你願意分擔家用，卻不想每筆消費都被審視。",
      "question": "你會怎樣分開共同責任和個人自由？",
      "deeperQuestion": "什麼安排能讓彼此都不用靠猜來安心？",
      "twist": ""
    },
    "id": "ponder-v5-family-055",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Different capacities to care",
    "scenario": "Relatives contribute company, paperwork or money, but only physical presence gets recognised.",
    "question": "How would you include different strengths in care arrangements?",
    "deeperQuestion": "Which contribution do you tend to undervalue?",
    "twist": "",
    "zh": {
      "title": "不一樣的照顧能力",
      "scenario": "同樣是家人，有人很會陪伴，有人擅長處理文件，有人只能出錢。大家卻只看得到陪在身邊的人。",
      "question": "你會怎樣把不同的能力放進分工？",
      "deeperQuestion": "哪一種貢獻最常被你低估？",
      "twist": ""
    },
    "id": "ponder-v5-family-056",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "A crowded visit home",
    "scenario": "A week home fills with family dinners. You also want quiet time with parents and a day without plans.",
    "question": "Which gaps would you protect, and how would you explain them?",
    "deeperQuestion": "How does time together differ from genuine connection?",
    "twist": "",
    "zh": {
      "title": "回家不想被安排滿",
      "scenario": "你難得回家一星期，親戚把每天排滿飯局。你想見大家，也想跟父母安靜待著，甚至有一天甚麼都不做。",
      "question": "你會保留哪些空白，又怎樣告知大家？",
      "deeperQuestion": "相處的數量和真正有交流，對你有甚麼差別？",
      "twist": ""
    },
    "id": "ponder-v5-family-057",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "An unapproved interest",
    "scenario": "A hobby does not affect your responsibilities, but family dismisses it as having no future.",
    "question": "Would you keep explaining or allow temporary misunderstanding?",
    "deeperQuestion": "How much approval do you need to enjoy something freely?",
    "twist": "",
    "zh": {
      "title": "一個不被祝福的興趣",
      "scenario": "你想花時間練一項家人覺得沒前途的興趣，沒有影響工作。他們仍常說別浪費人生。",
      "question": "你會繼續解釋，還是容許他們暫時不理解？",
      "deeperQuestion": "你需要多少認同，才能放心喜歡一件事？",
      "twist": ""
    },
    "id": "ponder-v5-family-058",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Speaking for you",
    "scenario": "Parents answer questions about your life before you can, sometimes using outdated views.",
    "question": "How would you gently reclaim your voice?",
    "deeperQuestion": "Which changed part of yourself do you want them to know?",
    "twist": "",
    "zh": {
      "title": "誰有權替你答",
      "scenario": "聚會上有人問你的近況，父母總比你先回答，而且有些已不是你的想法。你想自己說，又怕像當眾糾正他們。",
      "question": "你會怎樣自然地拿回自己的發言權？",
      "deeperQuestion": "你想讓家人認識哪個已經改變的部分？",
      "twist": ""
    },
    "id": "ponder-v5-family-059",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "A difficult thank-you",
    "scenario": "A relative quietly helps in an important way. Your family rarely expresses affection, and an emoji feels too small.",
    "question": "What expression would feel sincere in your own style?",
    "deeperQuestion": "What difference did their help make that you want them to know?",
    "twist": "",
    "zh": {
      "title": "難以說出口的謝謝",
      "scenario": "家人默默為你做了一件重要的事，你很感激，但你們平常不說肉麻的話。只傳一個貼圖又覺得不夠。",
      "question": "你會用甚麼符合自己性格的方式表達？",
      "deeperQuestion": "你最想讓對方知道，他的幫忙改變了甚麼？",
      "twist": ""
    },
    "id": "ponder-v5-family-060",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Posting family photos",
    "scenario": "An elder shares family photos publicly. You want more control over your household's privacy.",
    "question": "What simple sharing agreement would you propose?",
    "deeperQuestion": "What other way could they share their joy?",
    "twist": "",
    "zh": {
      "title": "照片要不要公開",
      "scenario": "長輩喜歡把全家照片公開，你不想自己的孩子或生活細節被放上網。他覺得你把事情想得太嚴重。",
      "question": "你會訂甚麼簡單的分享約定？",
      "deeperQuestion": "如果對方只想分享喜悅，有沒有別的方法？",
      "twist": ""
    },
    "id": "ponder-v5-family-061",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "An inherited expectation",
    "scenario": "Family sees you as the one who can create opportunities for everyone. Their belief feels both loving and heavy.",
    "question": "What would you promise, and what would you not?",
    "deeperQuestion": "How could hope and responsibility avoid resting on one person?",
    "twist": "",
    "zh": {
      "title": "被留下來的期待",
      "scenario": "家人說你是最有能力離開的人，也希望你將來把大家帶出去。你感到被相信，同時背上很大的責任。",
      "question": "你願意承諾甚麼，不願承諾甚麼？",
      "deeperQuestion": "希望和責任，怎樣才不會全部壓在一人身上？",
      "twist": ""
    },
    "id": "ponder-v5-family-062",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Not answering the pressure",
    "scenario": "Family again asks when you will marry. You have explained repeatedly and want a peaceful meal.",
    "question": "How would you end the topic without defending your life again?",
    "deeperQuestion": "Can declining a question be a mature response?",
    "twist": "",
    "zh": {
      "title": "第一次不回應催促",
      "scenario": "家人又問你何時結婚，你已解釋很多次。這次你不想辯論，只想好好吃飯。",
      "question": "你會怎樣結束話題，而不是再證明自己的生活合理？",
      "deeperQuestion": "不回答每一個問題，是否也可以是一種成熟？",
      "twist": ""
    },
    "id": "ponder-v5-family-063",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Different family memories",
    "scenario": "You remember a childhood move as painful; a sibling remembers happiness. Family tries to decide who is wrong.",
    "question": "How would you make room for both experiences?",
    "deeperQuestion": "Does sharing a home mean sharing the same childhood?",
    "twist": "",
    "zh": {
      "title": "保留不一樣的記憶",
      "scenario": "你說童年某次搬家很難過，手足卻記得那段日子很開心。家人想決定究竟誰記錯了。",
      "question": "你會怎樣讓不同經歷都被聽見？",
      "deeperQuestion": "同住一個家，是否就代表有相同的童年？",
      "twist": ""
    },
    "id": "ponder-v5-family-064",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Parents with their own plans",
    "scenario": "You research retirement plans for your parents. They have their own preferences and accept risks you dislike.",
    "question": "What information would you offer before returning the decision to them?",
    "deeperQuestion": "Can you give them the freedom you once wanted from them?",
    "twist": "",
    "zh": {
      "title": "不需要被拯救的父母",
      "scenario": "你替父母查了退休安排，他們卻有自己的想法，而且願意承擔一些你不放心的風險。",
      "question": "你會提出哪些資訊，之後把決定交還他們？",
      "deeperQuestion": "當角色倒轉，你能給他們當年你想要的自由嗎？",
      "twist": ""
    },
    "id": "ponder-v5-family-065",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "A shared-home timeline",
    "scenario": "A one-month family stay becomes three months. Their difficulty is real, and so is your need for space.",
    "question": "How would you discuss a new timeline and practical next step?",
    "deeperQuestion": "Can open-ended help erode the goodwill behind it?",
    "twist": "",
    "zh": {
      "title": "一起住的期限",
      "scenario": "家人暫住你家，原本說一個月，現在三個月了。對方有困難，你也開始需要自己的空間。",
      "question": "你會怎樣談新的期限和可行的下一步？",
      "deeperQuestion": "無限期幫忙，是否會慢慢傷到原本的好意？",
      "twist": ""
    },
    "id": "ponder-v5-family-066",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Admitting a closer bond",
    "scenario": "You naturally connect more with one relative. Another feels excluded, and equal closeness cannot be forced.",
    "question": "How could you show care without pretending identical intimacy?",
    "deeperQuestion": "Must fairness use identical time and gestures?",
    "twist": "",
    "zh": {
      "title": "不好意思說的偏愛",
      "scenario": "你跟其中一位家人特別談得來，另一位覺得被冷落。你不想假裝所有關係一樣，也不想傷人。",
      "question": "你能怎樣關心對方，而不假裝相同的親密？",
      "deeperQuestion": "公平是否一定要用同樣的時間和方式？",
      "twist": ""
    },
    "id": "ponder-v5-family-067",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "One person's family duty",
    "scenario": "Relatives assume you have more time because you are single. Your commitments are less visible, not less real.",
    "question": "How would you assert that your time deserves equal respect?",
    "deeperQuestion": "Which life choices are mistaken for fewer responsibilities?",
    "twist": "",
    "zh": {
      "title": "一個人的家族責任",
      "scenario": "親戚有事總先找未婚的你，認為你比較有空。你的生活其實也很滿，只是沒有被看見的家庭安排。",
      "question": "你會怎樣說明自己的時間同樣需要被尊重？",
      "deeperQuestion": "哪些生活選擇，常被誤當成比較少責任？",
      "twist": ""
    },
    "id": "ponder-v5-family-068",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "An old label",
    "scenario": "A childhood label persists even though you have changed. It makes you feel frozen in the past.",
    "question": "How would you ask them to update their picture of you?",
    "deeperQuestion": "Do you also hold relatives inside old labels?",
    "twist": "",
    "zh": {
      "title": "不再用舊名字叫你",
      "scenario": "家人仍叫你「小懶蟲」，因為你小時候不愛收拾。如今你很負責，這個玩笑卻像讓你永遠長不大。",
      "question": "你會怎樣請他們更新對你的認識？",
      "deeperQuestion": "你自己有沒有也用舊標籤看家人？",
      "twist": ""
    },
    "id": "ponder-v5-family-069",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Curious about the past",
    "scenario": "A relative offers to explain an old decision that may change your family story.",
    "question": "What would you ask first to make the conversation manageable?",
    "deeperQuestion": "Are you seeking facts, understanding or an apology?",
    "twist": "",
    "zh": {
      "title": "想知道又怕知道",
      "scenario": "你想問家人當年為何作某個決定，知道答案可能改變你一直相信的故事。對方願意談，但問你是否準備好。",
      "question": "你會先問甚麼，讓這次談話有承受的空間？",
      "deeperQuestion": "你想找的是完整事實、理解，還是一個道歉？",
      "twist": ""
    },
    "id": "ponder-v5-family-070",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Who hosts the gathering?",
    "scenario": "The same household hosts every holiday. This year they need rest, and everyone is unsure how to gather.",
    "question": "What new format would you suggest?",
    "deeperQuestion": "What should change if a tradition depends on one person's exhaustion?",
    "twist": "",
    "zh": {
      "title": "家庭聚會的工作表",
      "scenario": "節日聚會每年都由同一戶準備，其他人只帶禮物。今年主人說想休息，大家卻不知道還能怎樣團聚。",
      "question": "你會提議怎樣的新形式？",
      "deeperQuestion": "如果傳統要靠一個人很累才能維持，應該改哪部分？",
      "twist": ""
    },
    "id": "ponder-v5-family-071",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "One kind of support",
    "scenario": "You can offer regular time or a larger one-off sum, not both. You have not asked which is needed.",
    "question": "How would you learn their need before choosing what is easiest to offer?",
    "deeperQuestion": "How would you discuss a mismatch without drowning in guilt?",
    "twist": "",
    "zh": {
      "title": "只能給一種支持",
      "scenario": "家人遇到困難，你只能選擇固定每週陪伴，或一次提供較多金錢，無法兩樣都做。對方還沒說最需要甚麼。",
      "question": "你會先怎樣了解需要，而不是選自己最容易給的？",
      "deeperQuestion": "對方需要的和你能給的不同時，怎樣談才不內疚？",
      "twist": ""
    },
    "id": "ponder-v5-family-072",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "An inconvenient truth",
    "scenario": "A relative lovingly makes a dish you no longer enjoy. You have stayed quiet to spare them.",
    "question": "How would you introduce your current preference kindly?",
    "deeperQuestion": "What can be lost through endless accommodation?",
    "twist": "",
    "zh": {
      "title": "一個不方便的真相",
      "scenario": "家人一直以為你喜歡某道菜，每次都特意做。其實你口味早已改變，只是不忍心說。",
      "question": "你會怎樣讓對方知道現在的你？",
      "deeperQuestion": "為了不傷人而一直配合，最後會失去甚麼？",
      "twist": ""
    },
    "id": "ponder-v5-family-073",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Advice without obedience",
    "scenario": "You seek advice but choose another path. The relative feels asking should mean following it.",
    "question": "How would you explain listening versus obeying?",
    "deeperQuestion": "Can you accept your own advice being declined?",
    "twist": "",
    "zh": {
      "title": "不是所有建議都要採用",
      "scenario": "你向家人請教，最後選了另一條路。他覺得既然不聽，當初就不應該問。",
      "question": "你會怎樣說明聽取和服從的差別？",
      "deeperQuestion": "你給別人建議時，能接受他不採用嗎？",
      "twist": ""
    },
    "id": "ponder-v5-family-074",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "A delayed celebration",
    "scenario": "You finish study later in life. Family sees no need for a celebration, but you want to mark the effort.",
    "question": "How would you invite them to recognise the milestone?",
    "deeperQuestion": "How would you celebrate yourself even if they did not join?",
    "twist": "",
    "zh": {
      "title": "一場遲到的畢業禮",
      "scenario": "你完成多年後才回去讀的課程，家人覺得成年人不用特別慶祝。你卻很想讓這段努力有一個結尾。",
      "question": "你會怎樣邀請他們參與這個對你重要的時刻？",
      "deeperQuestion": "即使他們不來，你還會怎樣替自己慶祝？",
      "twist": ""
    },
    "id": "ponder-v5-family-075",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Different timelines for forgiveness",
    "scenario": "After a family conflict, one person wants to move on while another still hurts. Others pressure them to preserve harmony.",
    "question": "How could harmony avoid requiring someone to swallow their feelings?",
    "deeperQuestion": "Does repair begin with sharing a table or changing behaviour?",
    "twist": "",
    "zh": {
      "title": "不同的原諒期限",
      "scenario": "家人之間發生爭執，有人很快想翻篇，有人仍受傷。大家催後者不要破壞團圓氣氛。",
      "question": "你會怎樣讓聚會不以某個人吞下感受為代價？",
      "deeperQuestion": "和好需要同桌吃飯，還是先改變某些做法？",
      "twist": ""
    },
    "id": "ponder-v5-family-076",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "A tradition to reconsider",
    "scenario": "A longstanding family custom no longer fits your values. You want change without dismissing earlier generations.",
    "question": "What original meaning could you preserve through a new practice?",
    "deeperQuestion": "Is the form or intention more worth continuing?",
    "twist": "",
    "zh": {
      "title": "不想跟隨的家族傳統",
      "scenario": "家裡每年有一個你不再認同的習慣，大家說一直如此。你想改，卻不想把前人的心意全部否定。",
      "question": "你會保留它原本想表達的甚麼，再換一種做法？",
      "deeperQuestion": "傳統最值得延續的是形式還是用意？",
      "twist": ""
    },
    "id": "ponder-v5-family-077",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "A day for yourself",
    "scenario": "Family asks for non-urgent help after weeks without your own rest. You could squeeze it in but feel depleted.",
    "question": "How much would you agree to, or what alternative time would you offer?",
    "deeperQuestion": "Does an empty calendar slot mean available energy?",
    "twist": "",
    "zh": {
      "title": "先照顧自己的一天",
      "scenario": "家人週末需要幫忙，你其實可以擠出時間，但已連續幾週沒有休息。事情不緊急，只是大家習慣你會答應。",
      "question": "你會答應多少，或提出甚麼替代時間？",
      "deeperQuestion": "有空檔是否就代表有力氣？",
      "twist": ""
    },
    "id": "ponder-v5-family-078",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Two languages at home",
    "scenario": "Younger relatives struggle with an elder's language and speak less. Corrections make trying feel risky.",
    "question": "How would you make connection possible without fluency?",
    "deeperQuestion": "Could being heard patiently matter more than speaking correctly?",
    "twist": "",
    "zh": {
      "title": "一個家庭兩種語言",
      "scenario": "家中年輕一代不太會說長輩熟悉的語言，聊天越來越少。有人責怪孩子不努力，孩子則怕每次開口都被糾正。",
      "question": "你會怎樣讓不流利也能有真正的交流？",
      "deeperQuestion": "被耐心聽完，會比說得正確更重要嗎？",
      "twist": ""
    },
    "id": "ponder-v5-family-079",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "An ordinary parental life",
    "scenario": "A parent says their youthful dream was simply family stability, not a grand ambition.",
    "question": "What would you ask to understand that ordinary-sounding wish?",
    "deeperQuestion": "Do you mistake dramatic stories for the only stories worth hearing?",
    "twist": "",
    "zh": {
      "title": "父母的普通人生",
      "scenario": "你問父母年輕時的夢想，他說沒有甚麼大夢，只希望家人安穩。你一時不知道怎樣接話。",
      "question": "你會再問甚麼，去理解這個看似普通的願望？",
      "deeperQuestion": "你是否只把精彩的故事當成值得聽的故事？",
      "twist": ""
    },
    "id": "ponder-v5-family-080",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Who decides the help?",
    "scenario": "Family arranges jobs for an unemployed relative who wants two weeks to recover. They see refusal as ingratitude.",
    "question": "How would you include them in setting the pace of help?",
    "deeperQuestion": "Whose anxiety might urgent helping be relieving?",
    "twist": "",
    "zh": {
      "title": "該誰決定怎樣幫",
      "scenario": "全家想替失業的成員安排工作機會，對方卻想先休息兩週。他們覺得他不珍惜幫忙。",
      "question": "你會怎樣把幫助的速度交回當事人一起決定？",
      "deeperQuestion": "急著幫忙，有時是在減輕誰的焦慮？",
      "twist": ""
    },
    "id": "ponder-v5-family-081",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Keeping a voice",
    "scenario": "You want to record an elder's stories, but recording makes them tense. Casual chats are easy.",
    "question": "How would you respect their comfort and explain your wish?",
    "deeperQuestion": "If you cannot preserve everything, what moment would you fully experience?",
    "twist": "",
    "zh": {
      "title": "留下一段聲音",
      "scenario": "你想錄下長輩講故事，他一看到錄音就拘謹，平常聊天卻很自在。你很怕以後忘記他的聲音。",
      "question": "你會怎樣尊重他的自在，也表達你想保存回憶的心？",
      "deeperQuestion": "如果不能完整保存，你最想好好經歷哪一刻？",
      "twist": ""
    },
    "id": "ponder-v5-family-082",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Support without supervision",
    "scenario": "Family support becomes daily monitoring and advice. You share less, increasing their worry.",
    "question": "What update rhythm and response style would you suggest?",
    "deeperQuestion": "How much do they need to know to support without taking over?",
    "twist": "",
    "zh": {
      "title": "一份沒有附帶指導的支持",
      "scenario": "家人說願意支持你的新計劃，但每天都追問進度、提出做法。你漸漸不想分享，讓他們更擔心。",
      "question": "你會提議怎樣的更新頻率和回應方式？",
      "deeperQuestion": "他們需要知道多少，才能支持而不接管？",
      "twist": ""
    },
    "id": "ponder-v5-family-083",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Bringing a partner home",
    "scenario": "Family expects your partner to follow every household custom. You want welcome to include room for difference.",
    "question": "Which adaptable custom would you discuss first?",
    "deeperQuestion": "Does joining a family include bringing new ways of living?",
    "twist": "",
    "zh": {
      "title": "把伴侶帶進家的方式",
      "scenario": "家人希望你的伴侶完全跟隨家中習慣，你想讓對方感到被歡迎，也不希望他只能一直配合。",
      "question": "你會先跟家人談哪一個可以調整的習慣？",
      "deeperQuestion": "加入一個家，是學懂所有規矩，還是也能帶來新的做法？",
      "twist": ""
    },
    "id": "ponder-v5-family-084",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Family by choice",
    "scenario": "Someone without blood ties has cared for you like family. A relative objects to including them in a family occasion.",
    "question": "How would you explain their place in your life?",
    "deeperQuestion": "What makes someone family to you?",
    "twist": "",
    "zh": {
      "title": "沒有血緣的家人",
      "scenario": "一位沒有血緣的人多年來像家人般照顧你，你想邀他參加家族重要聚會，有親戚覺得不合傳統。",
      "question": "你會怎樣說明他在你生命中的位置？",
      "deeperQuestion": "對你來說，甚麼讓一個人有家的資格？",
      "twist": ""
    },
    "id": "ponder-v5-family-085",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Options they never had",
    "scenario": "Your wish for a career break prompts parents to say they never had that freedom. It may carry regret as well as criticism.",
    "question": "How would you keep your choice while acknowledging their life?",
    "deeperQuestion": "Can you enjoy freedoms they lacked without treating them as a debt?",
    "twist": "",
    "zh": {
      "title": "過去沒有的選擇",
      "scenario": "你想暫停工作去探索，父母說他們當年沒有這種自由。你聽到的是責備，也可能是他們未說過的遺憾。",
      "question": "你會怎樣回應，既不放棄選擇，也不忽略他們的人生？",
      "deeperQuestion": "你能享受上一代沒有的自由，而不把它當成虧欠嗎？",
      "twist": ""
    },
    "id": "ponder-v5-family-086",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Company without agreement",
    "scenario": "A relative seeks comfort and agreement that another person is awful. You understand the hurt but not the judgement.",
    "question": "How would you support the feeling without endorsing the judgement?",
    "deeperQuestion": "How can disagreement still feel understanding?",
    "twist": "",
    "zh": {
      "title": "不用答應的陪伴",
      "scenario": "家人向你抱怨另一位親戚，你理解他的傷心，卻不認同他對對方的判斷。他問你是不是也覺得對方很差。",
      "question": "你會怎樣陪伴感受，而不附和評價？",
      "deeperQuestion": "不同意對方的結論，還可以怎樣讓他感到被理解？",
      "twist": ""
    },
    "id": "ponder-v5-family-087",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "A relationship needing space",
    "scenario": "You want fewer exhausting visits with a relative. Others say family bonds should override that need.",
    "question": "How would you choose a sustainable amount of contact?",
    "deeperQuestion": "Could less contact make each meeting more genuine?",
    "twist": "",
    "zh": {
      "title": "一段需要距離的關係",
      "scenario": "每次跟某位家人見面都很累，你想減少頻率。其他人說家人只有這些，不應該疏遠。",
      "question": "你會怎樣選擇一個自己能持續的距離？",
      "deeperQuestion": "少見一點，是否可能讓每次見面更真心？",
      "twist": ""
    },
    "id": "ponder-v5-family-088",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Asking differently",
    "scenario": "Family updates revolve around jobs, money and relationships. You want to hear about recent joy instead.",
    "question": "What question would invite more than a progress report?",
    "deeperQuestion": "What meaningful thing without an achievement could you share first?",
    "twist": "",
    "zh": {
      "title": "好好問一次近況",
      "scenario": "家人每次見面只問工作、收入和感情，你想知道他最近開心過甚麼，卻不知道怎樣轉開。",
      "question": "你會問哪一個具體問題，讓彼此不只交換成績？",
      "deeperQuestion": "你願意先分享哪件沒有成果、卻很重要的小事？",
      "twist": ""
    },
    "id": "ponder-v5-family-089",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Uncertainty together",
    "scenario": "A major family change is uncertain. Some research constantly, some avoid it, and some act as if nothing is happening.",
    "question": "What small shared action could you agree on first?",
    "deeperQuestion": "Under uncertainty, do you need information, company or a break?",
    "twist": "",
    "zh": {
      "title": "一家人的不確定",
      "scenario": "家裡將有一個重大改變，資訊還不完整。有人一直查資料，有人不想談，有人假裝一切沒事。",
      "question": "你們可以先約定哪一件共同能做的小事？",
      "deeperQuestion": "你在不確定時，需要資訊、陪伴還是暫時休息？",
      "twist": ""
    },
    "id": "ponder-v5-family-090",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Misunderstood thrift",
    "scenario": "An elder declines a comfort purchase as wasteful. You wonder whether they truly do not want it or struggle to spend on themselves.",
    "question": "How would you ask without deciding their needs for them?",
    "deeperQuestion": "Could you respect a refusal after they understand the options?",
    "twist": "",
    "zh": {
      "title": "被誤會的節省",
      "scenario": "長輩捨不得花錢，你想替他買舒服一點的用品，他卻覺得浪費。你不知道他是真的不需要，還是不習慣為自己花。",
      "question": "你會怎樣問，而不直接替他決定需要甚麼？",
      "deeperQuestion": "如果他了解選擇後仍拒絕，你能尊重嗎？",
      "twist": ""
    },
    "id": "ponder-v5-family-091",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Redistributing home life",
    "scenario": "Someone returns to study and needs chores redistributed. Others say a personal choice should not affect them.",
    "question": "How would you balance personal growth and shared workload?",
    "deeperQuestion": "What adjustment would you hope for when your opportunity comes?",
    "twist": "",
    "zh": {
      "title": "一個需要重新分工的家",
      "scenario": "家裡一位成員開始讀書，時間少了，原本做的家務需要重分。其他人說那是他自己的選擇，不應影響大家。",
      "question": "你會怎樣談支持個人成長和共同負擔？",
      "deeperQuestion": "如果下次是你的機會，你希望家人怎樣調整？",
      "twist": ""
    },
    "id": "ponder-v5-family-092",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Hearing another answer",
    "scenario": "An elder says they would repeat a difficult life choice you expected them to regret.",
    "question": "How would you stay curious instead of arguing for regret?",
    "deeperQuestion": "Can others define a good life differently from you?",
    "twist": "",
    "zh": {
      "title": "願意聽不同的答案",
      "scenario": "你問長輩是否後悔某個決定，原以為他會認同你。他卻說即使辛苦，也會再選一次。",
      "question": "你會怎樣繼續好奇，而不試著說服他後悔？",
      "deeperQuestion": "你是否容許別人用不同方式定義好的人生？",
      "twist": ""
    },
    "id": "ponder-v5-family-093",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Specific gratitude",
    "scenario": "Everyone writes “thank you for your hard work” for a retiring relative. You want a more personal message.",
    "question": "Which moment would you name and explain its impact?",
    "deeperQuestion": "Did they know you noticed at the time?",
    "twist": "",
    "zh": {
      "title": "把感謝說得具體",
      "scenario": "全家要寫一句話送給退休的家人，大家都寫「辛苦了」。你想寫得更像只有你們之間才懂的事。",
      "question": "你會提起哪一個具體時刻，說明它怎樣影響你？",
      "deeperQuestion": "那件事發生時，他知道你有留意嗎？",
      "twist": ""
    },
    "id": "ponder-v5-family-094",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "A changing gathering",
    "scenario": "Departures and new arrivals change a family gathering. Some want the old format; others want a fresh one.",
    "question": "What would you keep, and what would you add?",
    "deeperQuestion": "Does moving forward ever feel disloyal to the past?",
    "twist": "",
    "zh": {
      "title": "改變了的團圓",
      "scenario": "今年有人離開、有人加入，家族聚會不可能跟以前一樣。有人堅持照舊，有人想換個方式開始。",
      "question": "你會保留一件甚麼，再新增一件甚麼？",
      "deeperQuestion": "讓生活繼續向前，會不會讓你覺得對過去不夠忠誠？",
      "twist": ""
    },
    "id": "ponder-v5-family-095",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "A family right to pause",
    "scenario": "A proposed family rule lets anyone pause a topic without explaining immediately. Some fear growing distance.",
    "question": "How could a right to pause preserve the possibility of talking later?",
    "deeperQuestion": "Could knowing you may decline make you more willing to speak?",
    "twist": "",
    "zh": {
      "title": "一家人的告假權",
      "scenario": "你們想訂一條新家規：任何人都可以說今天不想聊某個話題，不必當場解釋。有人擔心這會讓大家越來越疏遠。",
      "question": "你會怎樣讓這個暫停權同時保留日後再談的可能？",
      "deeperQuestion": "知道可以拒絕，會不會反而更願意開口？",
      "twist": ""
    },
    "id": "ponder-v5-family-096",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "A rule for the next generation",
    "scenario": "You can pass on one family rule and retire another, explaining both choices.",
    "question": "What would you keep, and what would you release?",
    "deeperQuestion": "How could gratitude for the past coexist with change for the future?",
    "twist": "",
    "zh": {
      "title": "想留給下一代的規矩",
      "scenario": "假如你只能把家裡一條規矩留給下一代，也可以刪掉一條。你會有機會說明兩個選擇的原因。",
      "question": "你會留下甚麼，放下甚麼？",
      "deeperQuestion": "你如何讓感謝上一代和改變下一代同時成立？",
      "twist": ""
    },
    "id": "ponder-v5-family-097",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Payment nobody wants",
    "scenario": "A relative regularly cares for your pet but refuses payment. You worry the unpaid role has no clear limits.",
    "question": "How would you agree on breaks and handovers?",
    "deeperQuestion": "How could unpaid help avoid becoming permanently on demand?",
    "twist": "",
    "zh": {
      "title": "大家都不想收的酬勞",
      "scenario": "你請家人長期幫忙照顧寵物，想付酬勞，他堅持一家人不用。你怕不付錢，工作就沒有清楚的範圍。",
      "question": "你會怎樣訂下休息日和交接安排？",
      "deeperQuestion": "不收錢的幫忙，怎樣才不會被當成隨時可以要求？",
      "twist": ""
    },
    "id": "ponder-v5-family-098",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "The first dissenting vote",
    "scenario": "Everyone wants the same family destination except you. You have no dramatic reason, just a different preference.",
    "question": "Would you object, make separate plans or join this time?",
    "deeperQuestion": "Is a simple dislike enough to deserve a hearing?",
    "twist": "",
    "zh": {
      "title": "家裡的第一個反對票",
      "scenario": "全家選旅行地點，其他人都想去同一處，只有你不想。你沒有更重要的理由，只是真的不感興趣。",
      "question": "你會表達反對、另作安排，還是這次配合？",
      "deeperQuestion": "一個普通的「不喜歡」，是否已值得被聽見？",
      "twist": ""
    },
    "id": "ponder-v5-family-099",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "More than worry",
    "scenario": "Family responds to every new venture with warnings. You understand the care but share less good news.",
    "question": "What response would you request before discussing risks?",
    "deeperQuestion": "Would shared excitement make their caution easier to hear?",
    "twist": "",
    "zh": {
      "title": "想看見的不只是擔心",
      "scenario": "你每次分享新嘗試，家人第一反應都是提醒風險。你知道那是關心，卻越來越少告訴他們好消息。",
      "question": "你會請他們先給你哪一種回應，再一起談風險？",
      "deeperQuestion": "如果他們先陪你開心，你會更願意聽提醒嗎？",
      "twist": ""
    },
    "id": "ponder-v5-family-100",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Party",
    "zh": {
      "title": "答應保密之後",
      "scenario": "朋友告訴你，他不想再跟另一位共同朋友來往，請你暫時保密。幾天後，被疏遠的人問你：「是不是我做錯了甚麼？你知道原因嗎？」你知道一些，但也答應過不代人說。",
      "question": "你會怎樣回應，既不說謊，也不替朋友公開私下的話？",
      "deeperQuestion": "如果你是被疏遠的人，你能接受朋友說「我不能代他解釋」嗎？還希望他做甚麼？",
      "twist": ""
    },
    "title": "After promising privacy",
    "scenario": "A friend privately says they no longer want contact with a mutual friend. Days later, that person asks whether they did something wrong and whether you know why. You know something but promised not to speak for the other person.",
    "question": "How would you respond without lying or revealing the private conversation?",
    "deeperQuestion": "If you were the person being distanced, could you accept “I cannot explain for them”? What else would you want?",
    "twist": "",
    "id": "ponder-v5-party-001",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "small"
  },
  {
    "category": "Party",
    "zh": {
      "title": "最後取消的人",
      "scenario": "你們訂了不能退款的旅行住宿，原本平均分錢。出發前，一位朋友因家中突發事情不能去，也找不到人補位。他說願意照付，但你知道他最近手頭很緊；其他朋友也各有預算。",
      "question": "你們會怎樣處理他的那份？先各自選，再聽理由。",
      "deeperQuestion": "如果這次幫他分擔，你希望把它當成一次心意，還是以後大家都能用的規則？",
      "twist": ""
    },
    "title": "The person who cancels last",
    "scenario": "You booked non-refundable accommodation to split equally. A friend cannot come because of a family emergency, and no replacement is available. They offer to pay, but you know money is tight; everyone else has budget limits too.",
    "question": "How would you handle their share? Choose individually first, then hear each other's reasons.",
    "deeperQuestion": "Would covering it be a one-time gesture or a rule everyone could use in future?",
    "twist": "",
    "id": "ponder-v5-party-002",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "medium"
  },
  {
    "category": "Party",
    "zh": {
      "title": "好玩的玩笑，誰決定？",
      "scenario": "聚會裡有人講了一個關於朋友的笑話，大部分人都笑了，被講的人也笑了一下，之後卻變安靜。你不確定他介不介意，也怕當眾問會令他更尷尬。",
      "question": "先兩人一組聊：你會當下轉話題、出聲提醒、私下問，還是先觀察？",
      "deeperQuestion": "如果你就是被開玩笑的人，你最希望旁邊的人做甚麼？",
      "twist": ""
    },
    "title": "Who decides whether a joke is fun?",
    "scenario": "At a gathering, a joke about a friend gets laughs. That friend smiles briefly, then goes quiet. You do not know whether they mind and worry that asking publicly could embarrass them more.",
    "question": "Discuss in pairs: would you change the subject, speak up, ask privately or observe first?",
    "deeperQuestion": "If you were the subject of the joke, what would you want someone nearby to do?",
    "twist": "",
    "id": "ponder-v5-party-003",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Party",
    "title": "A friend's questionable idea",
    "scenario": "A friend proudly shares a project. You notice a serious weakness but do not know whether they want encouragement or critique.",
    "question": "How would you begin your response?",
    "deeperQuestion": "Would you raise the concern if they only wanted encouragement?",
    "twist": "",
    "zh": {
      "title": "朋友的壞點子",
      "scenario": "好友很興奮地向你介紹新計劃，已投入不少心血。你看見一個明顯問題，卻不知道他現在想聽鼓勵還是意見。",
      "question": "你會怎樣開始回應？",
      "deeperQuestion": "如果他只想被鼓勵，你還會提醒那個問題嗎？",
      "twist": ""
    },
    "id": "ponder-v5-party-004",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "small"
  },
  {
    "category": "Party",
    "title": "The last seat",
    "scenario": "Two rare tickets are available for three close friends. You can use them or do something else together.",
    "question": "How would you decide without making the excluded person pretend not to mind?",
    "deeperQuestion": "Does friendship require everyone every time, or room for different pairings?",
    "twist": "",
    "zh": {
      "title": "留下最後一個位",
      "scenario": "你和朋友得到兩張難得的票，第三位好友也很想去。票不能加買，你們可以兩人去，或一起改做別的事。",
      "question": "你會怎樣決定，讓落單的人不用假裝不介意？",
      "deeperQuestion": "友誼需要每次都一起，還是能容許不同組合？",
      "twist": ""
    },
    "id": "ponder-v5-party-005",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "small"
  },
  {
    "category": "Party",
    "title": "An uneven conversation",
    "scenario": "A struggling friend contacts you only for support and rarely asks about you. You are growing tired.",
    "question": "How would you ask to be heard too?",
    "deeperQuestion": "How would you distinguish a hard season from lasting one-way effort?",
    "twist": "",
    "zh": {
      "title": "一段不再對等的聊天",
      "scenario": "朋友最近只在有煩惱時找你，你的近況卻很少被問起。你知道他正經歷難關，但自己也開始疲倦。",
      "question": "你會怎樣提出自己也想被聽見？",
      "deeperQuestion": "怎樣分辨暫時失衡，和長期只有單向付出？",
      "twist": ""
    },
    "id": "ponder-v5-party-006",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "small"
  },
  {
    "category": "Party",
    "title": "An unwanted cover story",
    "scenario": "A friend asks you to confirm a false story about last night without explaining why.",
    "question": "How would you decline while leaving room for honest help?",
    "deeperQuestion": "What limits does loyalty have for you?",
    "twist": "",
    "zh": {
      "title": "不想幫忙圓謊",
      "scenario": "朋友請你說他昨晚跟你一起，理由只是他不想解釋自己的去向。你不想追問，也不想替他說謊。",
      "question": "你會怎樣拒絕，又留下他可以坦白求助的空間？",
      "deeperQuestion": "朋友之間的忠誠，對你有甚麼界線？",
      "twist": ""
    },
    "id": "ponder-v5-party-007",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "small"
  },
  {
    "category": "Party",
    "title": "Shared too soon",
    "scenario": "A friend excitedly spreads your tentative good news before you are ready.",
    "question": "How would you handle the public news and the trust between you?",
    "deeperQuestion": "What repair does an unintentional boundary crossing need?",
    "twist": "",
    "zh": {
      "title": "被分享的好消息",
      "scenario": "你把尚未確定的好消息告訴好友，他太開心，傳給了其他人。大家開始祝賀，你卻還不想公開。",
      "question": "你會怎樣處理公開的部分和朋友之間的信任？",
      "deeperQuestion": "無心的越界，需要怎樣的修補？",
      "twist": ""
    },
    "id": "ponder-v5-party-008",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "small"
  },
  {
    "category": "Party",
    "title": "Different friendship speeds",
    "scenario": "A new friend shares deeply every day. You like them but build closeness more slowly.",
    "question": "How would you adjust the pace without communicating only rejection?",
    "deeperQuestion": "Do time, shared experiences or openness build trust for you?",
    "twist": "",
    "zh": {
      "title": "友誼的不同速度",
      "scenario": "新朋友很快把你當知己，每天分享很多，你卻需要慢慢熟悉。你喜歡他，但跟不上這個速度。",
      "question": "你會怎樣調整節奏，而不讓對方只聽見拒絕？",
      "deeperQuestion": "你通常靠時間、經歷還是坦白來建立信任？",
      "twist": ""
    },
    "id": "ponder-v5-party-009",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "small"
  },
  {
    "category": "Party",
    "title": "A job introduction",
    "scenario": "A friend asks for a job referral. You like them but doubt the fit, and your reputation is involved.",
    "question": "What help would you offer, and what would you not guarantee?",
    "deeperQuestion": "Does declining a referral necessarily mean disbelief in the person?",
    "twist": "",
    "zh": {
      "title": "幫朋友介紹工作",
      "scenario": "好友請你推薦他到公司，你喜歡他，卻不確定他的工作習慣適合。推薦會用到你的信譽。",
      "question": "你願意提供哪種幫忙，又不願保證甚麼？",
      "deeperQuestion": "不作推薦，是否一定代表你不相信這個人？",
      "twist": ""
    },
    "id": "ponder-v5-party-010",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "small"
  },
  {
    "category": "Party",
    "title": "Someone left out",
    "scenario": "You are invited to a small gathering that a mutual friend is not. They ask about your evening.",
    "question": "How would you answer honestly without explaining someone else's guest list?",
    "deeperQuestion": "How much would you want to know if excluded?",
    "twist": "",
    "zh": {
      "title": "一個沒被邀請的人",
      "scenario": "你獲邀參加小聚會，另一位共同好友沒有。你知道主人只是人數有限，但對方問你晚上去哪裡。",
      "question": "你會怎樣誠實回答，而不把自己變成邀請名單的解釋者？",
      "deeperQuestion": "如果你是沒被邀請的人，你希望知道多少？",
      "twist": ""
    },
    "id": "ponder-v5-party-011",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "small"
  },
  {
    "category": "Party",
    "title": "A joke you have outgrown",
    "scenario": "An old running joke no longer feels good, although you used to laugh along.",
    "question": "How would you explain that boundaries can change?",
    "deeperQuestion": "Can a mature friendship accept “I used to, but not now”?",
    "twist": "",
    "zh": {
      "title": "不想再做的玩笑",
      "scenario": "朋友一直拿你的某個特點開玩笑，以前你也會笑。現在你不喜歡了，卻怕他說你突然變小器。",
      "question": "你會怎樣告訴他，界線也會改變？",
      "deeperQuestion": "一段成熟的友誼，能否接受「以前可以，現在不想」？",
      "twist": ""
    },
    "id": "ponder-v5-party-012",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "small"
  },
  {
    "category": "Party",
    "title": "Company after losing",
    "scenario": "A friend loses a competition. You want to find a lesson, but they are simply sad.",
    "question": "How would you stay with them without turning failure into a positive?",
    "deeperQuestion": "What reassurance has ever rushed past your sadness?",
    "twist": "",
    "zh": {
      "title": "只想被陪著輸一次",
      "scenario": "朋友比賽落敗，你想說「至少學到很多」，但他只是很難過。你也不擅長陪著一個沒有解法的失落。",
      "question": "你會怎樣陪他，而不急著把失敗變成好事？",
      "deeperQuestion": "甚麼安慰曾讓你覺得別人太快跳過你的難過？",
      "twist": ""
    },
    "id": "ponder-v5-party-013",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "small"
  },
  {
    "category": "Party",
    "title": "Another side of a friend",
    "scenario": "A close friend treats service staff impatiently, unlike how they treat you. One incident feels both limited and important.",
    "question": "How would you discuss what you saw?",
    "deeperQuestion": "How much does treatment of others shape your view of someone?",
    "twist": "",
    "zh": {
      "title": "朋友的另一面",
      "scenario": "你偶然看見好友對服務人員很不耐煩，跟平日對你很不同。你不想只憑一次判斷，也不能當沒看見。",
      "question": "你會怎樣跟他談這件事？",
      "deeperQuestion": "你用一個人對你以外的人怎樣，來認識他多少？",
      "twist": ""
    },
    "id": "ponder-v5-party-014",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "small"
  },
  {
    "category": "Party",
    "title": "Growing apart in direction",
    "scenario": "An old friend stays with old stories while you want to share present life. They say you have changed.",
    "question": "How would you help the friendship meet who you are now?",
    "deeperQuestion": "Does this friendship need distance or a new way of meeting?",
    "twist": "",
    "zh": {
      "title": "一起長大的不同路",
      "scenario": "老朋友聚會仍聊以前的事，你卻很想談現在的生活。他覺得你變了，你也怕自己像嫌棄過去。",
      "question": "你會怎樣讓友誼跟得上現在的你們？",
      "deeperQuestion": "有些友情需要變淡，還是只需要新的相處方式？",
      "twist": ""
    },
    "id": "ponder-v5-party-015",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "small"
  },
  {
    "category": "Party",
    "title": "Speaking over someone",
    "scenario": "A friend answers your stories with bigger ones. You cannot tell whether they are connecting or competing.",
    "question": "How would you return to the part you had not finished?",
    "deeperQuestion": "How do you ensure your related stories still leave room for listening?",
    "twist": "",
    "zh": {
      "title": "無意的搶先發言",
      "scenario": "每次你分享故事，朋友都接著講更精彩的經歷。你不確定他想共鳴，還是根本沒聽完你。",
      "question": "你會怎樣把話題帶回自己還沒說完的部分？",
      "deeperQuestion": "你自己分享相似經歷時，怎樣確認仍有在聽？",
      "twist": ""
    },
    "id": "ponder-v5-party-016",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "small"
  },
  {
    "category": "Party",
    "title": "Friends across disagreement",
    "scenario": "You and a friend respectfully disagree on an important social issue. You wonder whether the difference is too large.",
    "question": "What would you understand before judging its impact on the friendship?",
    "deeperQuestion": "Which differences can coexist, and which cross a boundary?",
    "twist": "",
    "zh": {
      "title": "不同意也能做朋友",
      "scenario": "你和好友對一件重要的社會議題看法不同，但雙方都願意談，也沒有辱罵。你不知道這個分歧是否太大。",
      "question": "你會先了解甚麼，才決定這個分歧對友誼的影響？",
      "deeperQuestion": "哪些是能共存的不同，哪些碰到你的底線？",
      "twist": ""
    },
    "id": "ponder-v5-party-017",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "small"
  },
  {
    "category": "Party",
    "title": "Contact fading slowly",
    "scenario": "You always initiate meetings, though your friend is engaged when you meet. No conflict explains the imbalance.",
    "question": "Would you keep initiating, ask directly or pause?",
    "deeperQuestion": "Do you need equal initiation or confidence that you matter?",
    "twist": "",
    "zh": {
      "title": "慢慢消失的聯絡",
      "scenario": "你們沒有吵架，只是每次約見面都由你開始。朋友來了仍很投入，平時卻很少主動。",
      "question": "你會繼續主動、直接問，還是先停一停？",
      "deeperQuestion": "你需要相同的主動次數，還是確定自己被珍惜？",
      "twist": ""
    },
    "id": "ponder-v5-party-018",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "small"
  },
  {
    "category": "Party",
    "title": "An awkward repayment",
    "scenario": "A friend forgets a modest amount you paid for them. You believe it was accidental but feel awkward asking.",
    "question": "How would you ask clearly without dismissing your own need?",
    "deeperQuestion": "Does a small amount mean you should not care?",
    "twist": "",
    "zh": {
      "title": "不好意思追的錢",
      "scenario": "你替好友墊了一筆不算大的錢，他忘了還。你知道他不是故意，卻每次想提醒都覺得尷尬。",
      "question": "你會怎樣提醒，既清楚也不先貶低自己的需要？",
      "deeperQuestion": "金額小，是否代表你應該不在乎？",
      "twist": ""
    },
    "id": "ponder-v5-party-019",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "small"
  },
  {
    "category": "Party",
    "title": "A story not yours to tell",
    "scenario": "A friend's private story fits the conversation perfectly, but you never asked permission to share it.",
    "question": "Would you hold back, anonymise it or ask first?",
    "deeperQuestion": "Does removing a name necessarily protect the person?",
    "twist": "",
    "zh": {
      "title": "不適合分享的故事",
      "scenario": "聚會話題剛好適合講好友的一段趣事，大家也會喜歡。但那是他私下告訴你的，你沒問過能否說。",
      "question": "你會忍住、匿名講，還是先問本人？",
      "deeperQuestion": "去掉名字，是否就一定保護到當事人？",
      "twist": ""
    },
    "id": "ponder-v5-party-020",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "small"
  },
  {
    "category": "Party",
    "title": "Different senses of safety",
    "scenario": "A travel friend wants to follow new acquaintances elsewhere. You feel uneasy; they see an opportunity.",
    "question": "How would you arrange things without forcing either person along?",
    "deeperQuestion": "Must you prove danger before expressing discomfort?",
    "twist": "",
    "zh": {
      "title": "兩人不同的安全感",
      "scenario": "旅行時朋友想臨時跟剛認識的人去另一個地方，你覺得不安心。他覺得你太保守，也不想錯過體驗。",
      "question": "你們會怎樣安排，讓任何人都不必勉強同行？",
      "deeperQuestion": "說出不安心，需要先證明真的有危險嗎？",
      "twist": ""
    },
    "id": "ponder-v5-party-021",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "small"
  },
  {
    "category": "Party",
    "title": "A gift you cannot keep",
    "scenario": "A thoughtful gift does not suit you, and the giver keeps asking about it.",
    "question": "How would you remain grateful and honest?",
    "deeperQuestion": "Does giving include releasing control over how a gift is used?",
    "twist": "",
    "zh": {
      "title": "一份不想收的禮物",
      "scenario": "好友送你一件很用心但你不會用的禮物，還常問你用了沒有。你不想說謊，也不想讓他的心意落空。",
      "question": "你會怎樣回應，保留感謝也說出真實情況？",
      "deeperQuestion": "禮物送出後，是否也要把使用方式交給收禮的人？",
      "twist": ""
    },
    "id": "ponder-v5-party-022",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "small"
  },
  {
    "category": "Party",
    "title": "Not deciding for a friend",
    "scenario": "A friend says they will end a relationship if you tell them to. You know much, but do not live their life.",
    "question": "How would you help them think without taking the decision?",
    "deeperQuestion": "Which question do you most want them to answer for themselves?",
    "twist": "",
    "zh": {
      "title": "不想替朋友作主",
      "scenario": "好友問你應不應該分手，說只要你說一句，他就照做。你知道很多細節，但終究不是過那段生活的人。",
      "question": "你會怎樣陪他想，而不接下決定權？",
      "deeperQuestion": "你最希望他自己回答哪一個問題？",
      "twist": ""
    },
    "id": "ponder-v5-party-023",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "small"
  },
  {
    "category": "Party",
    "title": "Familiar but unasked",
    "scenario": "After ten years of friendship, you realise you do not know their proudest achievement or current fear.",
    "question": "What concrete question would help you know them anew?",
    "deeperQuestion": "Can familiarity make you stop being curious?",
    "twist": "",
    "zh": {
      "title": "熟悉卻沒問過",
      "scenario": "你認識朋友十年，突然發現不知道他最在乎的成就，也不知道他最近在害怕甚麼。你們其實一直有見面。",
      "question": "你會從哪一個具體問題重新認識他？",
      "deeperQuestion": "熟悉一個人，會不會讓你停止好奇？",
      "twist": ""
    },
    "id": "ponder-v5-party-024",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "small"
  },
  {
    "category": "Party",
    "title": "A request for praise",
    "scenario": "A friend requests honesty about their work but feels hurt by every suggestion.",
    "question": "How would you clarify the kind of response they want next time?",
    "deeperQuestion": "When asking for honesty, which parts are you actually ready to hear?",
    "twist": "",
    "zh": {
      "title": "一個只想聽好話的請求",
      "scenario": "朋友請你看作品，說要誠實，但你一提建議他就很受傷。你不想騙，也不想每次變成批評的人。",
      "question": "下次你會怎樣先確認他想要哪一種回應？",
      "deeperQuestion": "你自己說想聽真話時，真的準備好聽哪些部分？",
      "twist": ""
    },
    "id": "ponder-v5-party-025",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "small"
  },
  {
    "category": "Party",
    "title": "Does support need scheduling?",
    "scenario": "A friend often calls late for support while you need early sleep. Scheduling feels unkind to you.",
    "question": "What sustainable way of staying available would you propose?",
    "deeperQuestion": "Could bounded support be more reliable than always saying yes?",
    "twist": "",
    "zh": {
      "title": "陪伴需要預約嗎",
      "scenario": "朋友常深夜打來談心，你很在乎，但隔天要早起。你怕說改天會像把他排在行程表上。",
      "question": "你會怎樣提出一個能長期維持的方式？",
      "deeperQuestion": "有界線的陪伴，是否比隨時答應更可靠？",
      "twist": ""
    },
    "id": "ponder-v5-party-026",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "small"
  },
  {
    "category": "Party",
    "title": "Unequal success",
    "scenario": "You win an opportunity you both applied for. Your friend congratulates you but needs a break from the details.",
    "question": "How would you share joy while respecting their space?",
    "deeperQuestion": "Can a friend be happy for you and sad for themselves at once?",
    "twist": "",
    "zh": {
      "title": "朋友之間的成功差距",
      "scenario": "你和好友一起申請機會，只有你獲選。他真心祝賀，也坦白暫時不想聽太多細節。",
      "question": "你會怎樣分享喜悅，又尊重他的空間？",
      "deeperQuestion": "你能接受朋友同時替你開心和替自己難過嗎？",
      "twist": ""
    },
    "id": "ponder-v5-party-027",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "small"
  },
  {
    "category": "Party",
    "title": "An honest cancellation",
    "scenario": "A friend cancels honestly because they lack social energy. You value honesty and feel disappointed after keeping time free.",
    "question": "How would you respond to both legitimate feelings?",
    "deeperQuestion": "What rescheduling effort would help you feel valued?",
    "twist": "",
    "zh": {
      "title": "一次真誠的取消",
      "scenario": "朋友臨時取消，坦白說今天沒有社交力氣。你欣賞誠實，也因為特意空出時間而失落。",
      "question": "你會怎樣回應兩種都合理的感受？",
      "deeperQuestion": "怎樣的補約行動會讓你覺得被重視？",
      "twist": ""
    },
    "id": "ponder-v5-party-028",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "small"
  },
  {
    "category": "Party",
    "title": "Pushed into the spotlight",
    "scenario": "A friend volunteers you to speak publicly, believing in your ability. You may manage it but dislike not being asked.",
    "question": "Would you take the opportunity or undo the arrangement?",
    "deeperQuestion": "What consent should encouragement beyond comfort require?",
    "twist": "",
    "zh": {
      "title": "被推去當主角",
      "scenario": "朋友替你報名上台分享，覺得你其實很有能力，只是害羞。你可能做得到，卻不喜歡沒被問過。",
      "question": "你會接下機會，還是先撤回這個安排？",
      "deeperQuestion": "鼓勵一個人走出舒適圈，需要先得到甚麼同意？",
      "twist": ""
    },
    "id": "ponder-v5-party-029",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "small"
  },
  {
    "category": "Party",
    "title": "Not positive every day",
    "scenario": "A friend's positive reframing usually helps. Today you need to admit something is simply awful.",
    "question": "How would you ask them to stay with that feeling for a while?",
    "deeperQuestion": "How can hope coexist with acknowledging pain?",
    "twist": "",
    "zh": {
      "title": "不能每天都積極",
      "scenario": "好友習慣把所有困難說成成長機會，你平常很受鼓舞，今天卻只想承認事情很糟。",
      "question": "你會怎樣請他暫時陪你停在這裡？",
      "deeperQuestion": "希望和承認痛苦，怎樣可以同時存在？",
      "twist": ""
    },
    "id": "ponder-v5-party-030",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "small"
  },
  {
    "category": "Party",
    "title": "A request to repost",
    "scenario": "A friend asks you to promote a business whose product you have not tried.",
    "question": "How would you help without making claims you cannot support?",
    "deeperQuestion": "Can you hold a boundary when a friend may be disappointed?",
    "twist": "",
    "zh": {
      "title": "一個不想轉發的請求",
      "scenario": "好友請你轉發他的生意，你願意支持，但沒有試過產品，也不想讓自己的朋友以為你保證品質。",
      "question": "你會怎樣幫忙而不作自己無法確認的承諾？",
      "deeperQuestion": "朋友會失望時，你還能說清楚自己的界線嗎？",
      "twist": ""
    },
    "id": "ponder-v5-party-031",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "small"
  },
  {
    "category": "Party",
    "title": "A ranking you never wanted",
    "scenario": "A friend calls you their second-best friend, introducing a comparison you never wanted.",
    "question": "How would you discuss how that wording landed?",
    "deeperQuestion": "Do you need a unique place or the highest place?",
    "twist": "",
    "zh": {
      "title": "不想知道的排名",
      "scenario": "好友說你是他第二好的朋友，以為很親密。你本來沒有比較，聽完卻開始在意第一名是誰。",
      "question": "你會怎樣談這句話帶來的感覺？",
      "deeperQuestion": "友誼對你需要獨特的位置，還是最高的位置？",
      "twist": ""
    },
    "id": "ponder-v5-party-032",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "small"
  },
  {
    "category": "Party",
    "title": "Permission to challenge",
    "scenario": "A friend repeats a choice that hurt them before, without asking for advice.",
    "question": "How would you ask for room to discuss it?",
    "deeperQuestion": "How would you remain a friend if they still choose it?",
    "twist": "",
    "zh": {
      "title": "友誼裡的提醒權",
      "scenario": "你發現朋友重複一個曾令他受傷的選擇。他沒問意見，你也不確定現在提醒是否越界。",
      "question": "你會怎樣先取得談這件事的空間？",
      "deeperQuestion": "如果他聽完仍照做，你能怎樣繼續做朋友？",
      "twist": ""
    },
    "id": "ponder-v5-party-033",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "small"
  },
  {
    "category": "Party",
    "title": "Making room for difference",
    "scenario": "Monthly plans leave either the lively friend or the quieter friend feeling they always accommodate.",
    "question": "How would you alternate plans without keeping a grievance score?",
    "deeperQuestion": "Which compromises feel willing, and which erode the friendship?",
    "twist": "",
    "zh": {
      "title": "一起保留不同",
      "scenario": "你們想固定每月見面，一人喜歡熱鬧，一人容易疲倦。兩種安排都有人覺得自己在遷就。",
      "question": "你會怎樣輪流安排，而不計較誰吃虧？",
      "deeperQuestion": "哪一種遷就你願意做，哪一種會慢慢消耗友誼？",
      "twist": ""
    },
    "id": "ponder-v5-party-034",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "small"
  },
  {
    "category": "Party",
    "title": "Money left after the event",
    "scenario": "An event has money left over. Options are refunds, future plans or a donation; some may not return.",
    "question": "Choose a plan individually, then name a condition that makes it fair.",
    "deeperQuestion": "Can a popular good intention decide how someone else's money is used?",
    "twist": "",
    "zh": {
      "title": "一筆聚會餘款",
      "scenario": "活動剩下一筆共同款項，可以平均退回，也可以留作下次，或捐出去。有人下次不一定參加。",
      "question": "每人先選一個方案，再說要加甚麼條件才公平。",
      "deeperQuestion": "大家喜歡的善意，能否直接決定別人的錢？",
      "twist": ""
    },
    "id": "ponder-v5-party-035",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "small"
  },
  {
    "category": "Party",
    "title": "Who gets the space?",
    "scenario": "Two groups share a free space: quiet conversation and music. Neither has priority under existing rules.",
    "question": "Would you rotate time, divide space or relocate?",
    "deeperQuestion": "Which matters more to you: arriving first or having more people?",
    "twist": "",
    "zh": {
      "title": "誰先用場地",
      "scenario": "你們共享一個免費場地，一組想安靜聊天，另一組想放音樂。兩邊都提早到了，也沒有先訂規則。",
      "question": "你們會訂輪流時段、分區，還是另找地方？",
      "deeperQuestion": "先到和人多，哪個理由對你更有說服力？",
      "twist": ""
    },
    "id": "ponder-v5-party-036",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "small"
  },
  {
    "category": "Party",
    "title": "Playing without drinking",
    "scenario": "A game uses alcohol penalties. Someone does not drink and does not want repeated explanations.",
    "question": "Change one rule so opting out does not attract attention.",
    "deeperQuestion": "Should participation allow private reasons to remain private?",
    "twist": "",
    "zh": {
      "title": "不喝酒也能玩",
      "scenario": "聚會遊戲用喝酒作懲罰，有人不喝，但不想逐次解釋原因。大家原本只想熱鬧。",
      "question": "一起改一條規則，讓拒絕不需要特別被注意。",
      "deeperQuestion": "加入活動，是否應該不用交代私人理由？",
      "twist": ""
    },
    "id": "ponder-v5-party-037",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "medium"
  },
  {
    "category": "Party",
    "title": "More work, more reward?",
    "scenario": "A fundraiser does unexpectedly well. Some worked longer; others brought customers. Rewards were not discussed.",
    "question": "Propose a distribution rule, then identify whom it overlooks.",
    "deeperQuestion": "How should effort, results and need each count?",
    "twist": "",
    "zh": {
      "title": "多做的人多分嗎",
      "scenario": "你們一起辦義賣，收入比預期多。有人花很多時間，有人帶來最多客人，最初卻沒談怎樣分配回饋。",
      "question": "每人提出一個分配原則，再找出它會忽略誰。",
      "deeperQuestion": "努力、成果和需要，哪個最應被算進去？",
      "twist": ""
    },
    "id": "ponder-v5-party-038",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "medium"
  },
  {
    "category": "Party",
    "title": "An expensive suggestion",
    "scenario": "An expensive restaurant gets polite agreement, though some budgets are tight.",
    "question": "How would you reopen the choice without identifying who cannot afford it?",
    "deeperQuestion": "What makes an invitation safe to decline?",
    "twist": "",
    "zh": {
      "title": "一個人的昂貴提議",
      "scenario": "朋友提議去高級餐廳，大家表面都說可以，但你知道有人預算很緊。沒人想當掃興的人。",
      "question": "你會怎樣重開選擇，而不點名誰付不起？",
      "deeperQuestion": "怎樣的邀約會讓人真的敢說不？",
      "twist": ""
    },
    "id": "ponder-v5-party-039",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "medium"
  },
  {
    "category": "Party",
    "title": "The quiet contributor",
    "scenario": "A loud voice steers a group plan. A quieter member later shares a strong alternative.",
    "question": "What process would let ideas matter without winning airtime?",
    "deeperQuestion": "Do quieter people need encouragement or a different way to contribute?",
    "twist": "",
    "zh": {
      "title": "合作時的安靜成員",
      "scenario": "小組要想一個活動點子，說話最多的人主導了方向。安靜的人會後才告訴你，他有另一個很好的想法。",
      "question": "你們會改哪一步，讓想法不只靠搶到話筒？",
      "deeperQuestion": "安靜的人需要被鼓勵，還是需要不同的參與方式？",
      "twist": ""
    },
    "id": "ponder-v5-party-040",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "medium"
  },
  {
    "category": "Party",
    "title": "A trip with trade-offs",
    "scenario": "Four travellers each have a must-see, but only two fit. One person always offers to yield.",
    "question": "How would you choose while noticing habitual compromise?",
    "deeperQuestion": "Does a voluntary concession mean no disappointment?",
    "twist": "",
    "zh": {
      "title": "不能全員滿意的旅行",
      "scenario": "四位朋友各有一個最想去的地方，行程只能選兩個。有人願意退讓，但你怕他每次都在退。",
      "question": "你們會用甚麼方法選，並照顧常讓步的人？",
      "deeperQuestion": "自願退讓是否一定代表沒有失落？",
      "twist": ""
    },
    "id": "ponder-v5-party-041",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "medium"
  },
  {
    "category": "Party",
    "title": "Who cleans up?",
    "scenario": "A successful party ends with the host facing all the cleanup. Guests brought food but no cleanup plan.",
    "question": "How would you divide the ending before the party starts?",
    "deeperQuestion": "Should invisible preparation and cleanup count as contributions?",
    "twist": "",
    "zh": {
      "title": "誰負責收尾",
      "scenario": "聚會很成功，結束時大部分人準備離開，只剩主人收拾。大家都帶了食物，卻沒談清理。",
      "question": "你們會怎樣在開始前分配收尾？",
      "deeperQuestion": "看不見的準備和收拾，應該算進每人的付出嗎？",
      "twist": ""
    },
    "id": "ponder-v5-party-042",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "medium"
  },
  {
    "category": "Party",
    "title": "After the vote",
    "scenario": "A vote wins four to one, but the chosen activity clearly does not suit the lone dissenter.",
    "question": "Would you follow the vote or add protection for the minority?",
    "deeperQuestion": "When should a decision require more than a vote?",
    "twist": "",
    "zh": {
      "title": "投票後的少數",
      "scenario": "你們投票選活動，結果四比一。少數那位說願意跟，卻明顯不適合那個活動。",
      "question": "你們會照結果走，還是加一條照顧少數的規則？",
      "deeperQuestion": "一個選擇何時不應只靠票數？",
      "twist": ""
    },
    "id": "ponder-v5-party-043",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "medium"
  },
  {
    "category": "Party",
    "title": "A loophole in the game",
    "scenario": "A legal loophole lets one player win repeatedly. Others stop enjoying the game.",
    "question": "Would you change the rule now or next time?",
    "deeperQuestion": "How do rule-following and shared enjoyment relate to fairness?",
    "twist": "",
    "zh": {
      "title": "遊戲裡的漏洞",
      "scenario": "有人找到規則沒禁止的技巧，幾乎每局都贏。其他人覺得沒趣，他說自己沒有作弊。",
      "question": "你們會中途改規則，還是下次才改？",
      "deeperQuestion": "守規則和顧及大家的體驗，哪個更接近公平？",
      "twist": ""
    },
    "id": "ponder-v5-party-044",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "medium"
  },
  {
    "category": "Party",
    "title": "Missing credit",
    "scenario": "A shared project's post credits only visible participants, omitting those behind the scenes.",
    "question": "How would you restore credit without making the omitted people fight for it?",
    "deeperQuestion": "Which contributions disappear because they are not photographed?",
    "twist": "",
    "zh": {
      "title": "被省略的功勞",
      "scenario": "你們共同完成一個作品，發帖的人只標記了出鏡的朋友，忘了幕後幫忙的人。帖子已很多人看過。",
      "question": "你們會怎樣補上功勞，而不讓被漏掉的人自己爭取？",
      "deeperQuestion": "哪些貢獻最容易因為沒被拍到而消失？",
      "twist": ""
    },
    "id": "ponder-v5-party-045",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "medium"
  },
  {
    "category": "Party",
    "title": "Different views of punctuality",
    "scenario": "Some read a seven o'clock invitation as arrival time, others as a loose starting point. The same people wait.",
    "question": "What practical arrangement would reduce blame and waiting?",
    "deeperQuestion": "Who bears the cost of flexibility?",
    "twist": "",
    "zh": {
      "title": "不同程度的準時",
      "scenario": "聚會約七點，有人當成七點到，有人當成七點後開始出門。每次都是同一批人等。",
      "question": "你們會訂甚麼實際安排，減少責怪也減少等待？",
      "deeperQuestion": "彈性應由大家共享，還是由準時的人承擔？",
      "twist": ""
    },
    "id": "ponder-v5-party-046",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "medium"
  },
  {
    "category": "Party",
    "title": "A borrowed item breaks",
    "scenario": "Shared equipment breaks while borrowed. Wear or misuse may be responsible, but nobody knows.",
    "question": "How would you share repair costs and set future rules?",
    "deeperQuestion": "How can responsibility be shared without clear fault?",
    "twist": "",
    "zh": {
      "title": "借出去的東西壞了",
      "scenario": "朋友借用共同買的器材，正常使用時壞了。可能是老化，也可能操作不當，沒法確定。",
      "question": "你們會怎樣分擔修理費，並訂下之後的借用規則？",
      "deeperQuestion": "沒有明確過錯時，責任可以怎樣分？",
      "twist": ""
    },
    "id": "ponder-v5-party-047",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "medium"
  },
  {
    "category": "Party",
    "title": "The default driver",
    "scenario": "You always drive everyone and receive drinks as thanks, but get home last. This time you want a break.",
    "question": "How would you reset the arrangement before resentment erupts?",
    "deeperQuestion": "Does gratitude equal sharing the cost?",
    "twist": "",
    "zh": {
      "title": "不想當固定司機",
      "scenario": "每次聚會你都開車接送，大家會請你喝飲料，但你總最晚回家。這次你想不用負責交通。",
      "question": "你會怎樣重新安排，而不等到自己爆發？",
      "deeperQuestion": "感謝是否就等於公平分擔了成本？",
      "twist": ""
    },
    "id": "ponder-v5-party-048",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "medium"
  },
  {
    "category": "Party",
    "title": "Private votes or raised hands?",
    "scenario": "Some want anonymous voting to avoid social pressure; others think friends should speak openly.",
    "question": "Which method would you choose, and why?",
    "deeperQuestion": "Can a little anonymity make honesty safer?",
    "twist": "",
    "zh": {
      "title": "匿名票還是舉手",
      "scenario": "你們要選下一次活動，有人提議匿名投票，怕大家跟著最有影響力的人選。另一人覺得朋友應該直接說。",
      "question": "你們會選哪種方式，為甚麼？",
      "deeperQuestion": "安全感是否有時需要一點匿名？",
      "twist": ""
    },
    "id": "ponder-v5-party-049",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "medium"
  },
  {
    "category": "Party",
    "title": "An uneven discount",
    "scenario": "One person's private discount saves the group money. They want a larger share of the saving.",
    "question": "How would you divide the saving without souring the gesture?",
    "deeperQuestion": "Should bringing a resource earn an extra benefit?",
    "twist": "",
    "zh": {
      "title": "一個不公平的折扣",
      "scenario": "其中一人有私人折扣，替全組省下不少錢。他想自己少付一點，其他人以為折扣應平均分享。",
      "question": "你們會怎樣處理，避免把好意變成爭執？",
      "deeperQuestion": "提供資源的人，是否應有額外回報？",
      "twist": ""
    },
    "id": "ponder-v5-party-050",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "medium"
  },
  {
    "category": "Party",
    "title": "The first item on the list",
    "scenario": "The group's top activity is something one friend fears. You want neither pressure nor automatic cancellation.",
    "question": "How would you make both joining and opting out comfortable?",
    "deeperQuestion": "How could someone still belong while missing an activity?",
    "twist": "",
    "zh": {
      "title": "共同清單的第一名",
      "scenario": "你們寫下今年一起想做的事，最受歡迎的一項恰好是其中一人最害怕的活動。大家不想逼他，也不想整項取消。",
      "question": "你們會怎樣安排參與和不參與都自在？",
      "deeperQuestion": "不參加一次，怎樣仍能保有歸屬感？",
      "twist": ""
    },
    "id": "ponder-v5-party-051",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "medium"
  },
  {
    "category": "Party",
    "title": "A friend's new shop",
    "scenario": "A friend's new shop needs improvement, but they ask the group for five-star reviews.",
    "question": "How would you support them while remaining truthful?",
    "deeperQuestion": "Should friendship change the standard for a public recommendation?",
    "twist": "",
    "zh": {
      "title": "朋友開的店",
      "scenario": "朋友開店，大家約好支持。你試過後覺得還需改善，他請你們留下五星評價。",
      "question": "你們會怎樣支持，同時保留真實評價？",
      "deeperQuestion": "友情是否應影響公開推薦的標準？",
      "twist": ""
    },
    "id": "ponder-v5-party-052",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "medium"
  },
  {
    "category": "Party",
    "title": "Names on a shared gift",
    "scenario": "One contributor has not paid or replied before a shared gift is given.",
    "question": "How would you handle this occasion and improve the next?",
    "deeperQuestion": "What do inclusion on the card and payment each mean to you?",
    "twist": "",
    "zh": {
      "title": "共同禮物的名字",
      "scenario": "大家合資買禮物，有一人忘了付款，送出前仍未回覆。你們不想漏名，也不想其他人一直補差額。",
      "question": "你們會怎樣處理這次，並改善下一次安排？",
      "deeperQuestion": "把名字寫上去和實際出資，對你代表甚麼？",
      "twist": ""
    },
    "id": "ponder-v5-party-053",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "medium"
  },
  {
    "category": "Party",
    "title": "Help with a deadline",
    "scenario": "A one-day favour grows into much more work as the organiser struggles.",
    "question": "What task would each keep, and how would you cap further work?",
    "deeperQuestion": "How can emergency help avoid becoming permanent duty?",
    "twist": "",
    "zh": {
      "title": "一次有期限的協助",
      "scenario": "你們幫朋友籌辦活動，原本只答應一天，後來工作越加越多。朋友壓力很大，也沒有其他人手。",
      "question": "每人會留下哪一項工作，又怎樣說明不能再加？",
      "deeperQuestion": "救急之後，怎樣避免成為沒有期限的責任？",
      "twist": ""
    },
    "id": "ponder-v5-party-054",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "medium"
  },
  {
    "category": "Party",
    "title": "An unpopular reminder",
    "scenario": "The party runs past venue limits. Speaking up may spoil the mood; silence leaves the host responsible.",
    "question": "How would you raise it and share responsibility?",
    "deeperQuestion": "Who usually carries the role of spoilsport?",
    "twist": "",
    "zh": {
      "title": "一個不受歡迎的提醒",
      "scenario": "大家玩得很開心，你注意到時間已超過場地限制。提醒可能掃興，不提醒又會讓主人被追責。",
      "question": "你會怎樣提醒，讓責任不只落在一個人身上？",
      "deeperQuestion": "群體裡誰最常承擔「掃興的人」這個角色？",
      "twist": ""
    },
    "id": "ponder-v5-party-055",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "medium"
  },
  {
    "category": "Party",
    "title": "Who owns the failure?",
    "scenario": "A group plan fails and people blame the original proposer, though everyone agreed.",
    "question": "How would you distinguish learning from assigning a scapegoat?",
    "deeperQuestion": "How much responsibility comes with agreeing to a plan?",
    "twist": "",
    "zh": {
      "title": "把失敗算給誰",
      "scenario": "你們一起決定的活動沒成功，事後大家開始說最初是哪個人的主意。當時其實都同意了。",
      "question": "你們會怎樣分開檢討和找人背責任？",
      "deeperQuestion": "同意一個計劃，代表要一起承擔多少結果？",
      "twist": ""
    },
    "id": "ponder-v5-party-056",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "medium"
  },
  {
    "category": "Party",
    "title": "Choosing a leader",
    "scenario": "One friend has expertise; another has willingness to organise. The expert lacks time, while the organiser faces comparison.",
    "question": "How would you divide roles instead of choosing one best person?",
    "deeperQuestion": "Which do you undervalue: skill or willingness to take responsibility?",
    "twist": "",
    "zh": {
      "title": "誰最適合當領隊",
      "scenario": "一位朋友最有經驗，另一位最願意花時間安排。前者不想太忙，後者卻常被拿來比較。",
      "question": "你們會怎樣分配角色，而不是只選一個最厲害的人？",
      "deeperQuestion": "能力和願意負責，哪個常被你低估？",
      "twist": ""
    },
    "id": "ponder-v5-party-057",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "medium"
  },
  {
    "category": "Party",
    "title": "Can someone leave midway?",
    "scenario": "A friend wants to leave a group course, risking everyone's discount.",
    "question": "What exit arrangement would you propose?",
    "deeperQuestion": "Does commitment mean finishing or also leaving responsibly?",
    "twist": "",
    "zh": {
      "title": "可以中途退出嗎",
      "scenario": "你們報名長期共同課程，有人上了幾次發現不喜歡。退出會影響團體折扣，但勉強留下也不快樂。",
      "question": "你們會訂怎樣的退出安排？",
      "deeperQuestion": "承諾應該保證完成，還是也包括負責任地離開？",
      "twist": ""
    },
    "id": "ponder-v5-party-058",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "medium"
  },
  {
    "category": "Party",
    "title": "A changed theme",
    "scenario": "A relaxed gathering shifts toward competition, though some came for conversation.",
    "question": "How would you check that the loudest preference is actually shared?",
    "deeperQuestion": "When should silence not count as agreement?",
    "twist": "",
    "zh": {
      "title": "一個被改掉的主題",
      "scenario": "聚會原定是輕鬆聊天，幾個人臨時想改成競賽。其他人不太想玩，卻怕打斷興致。",
      "question": "你們會怎樣確認這是大家的選擇，而非最響亮的選擇？",
      "deeperQuestion": "沉默何時不能被當成同意？",
      "twist": ""
    },
    "id": "ponder-v5-party-059",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "medium"
  },
  {
    "category": "Party",
    "title": "Making room for newcomers",
    "scenario": "A newcomer cannot join a game built entirely on old shared memories.",
    "question": "What questions would let both old and new friends contribute?",
    "deeperQuestion": "How much nostalgia would you trade for a new connection?",
    "twist": "",
    "zh": {
      "title": "讓新朋友也有位置",
      "scenario": "固定朋友圈來了一位新朋友，遊戲題目卻全是過往共同回憶。他很難參與，又不想讓大家改玩法。",
      "question": "你們會加入哪一種題目，讓熟人和新人都能貢獻？",
      "deeperQuestion": "你願意少聊多少舊故事，換來一段新的連結？",
      "twist": ""
    },
    "id": "ponder-v5-party-060",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "medium"
  },
  {
    "category": "Party",
    "title": "A contest without a winner?",
    "scenario": "A small contest can fund one winner's prize or small keepsakes for everyone.",
    "question": "Choose individually, then hear someone who chose differently.",
    "deeperQuestion": "Do you want performance recognised or participation remembered?",
    "twist": "",
    "zh": {
      "title": "一個沒有冠軍的比賽",
      "scenario": "大家辦小比賽，有人想保留獎品只給冠軍，有人覺得每人都應有紀念。預算只能選一種。",
      "question": "先各自選，再聽一個不同選擇的人說理由。",
      "deeperQuestion": "你參加時更想被肯定表現，還是被記得有參與？",
      "twist": ""
    },
    "id": "ponder-v5-party-061",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "medium"
  },
  {
    "category": "Party",
    "title": "Conflict in the group chat",
    "scenario": "Two people argue in a group chat. Others want calm but worry about burying the issue.",
    "question": "Where should the conversation continue, and who should join?",
    "deeperQuestion": "When should bystanders help, and when should they step back?",
    "twist": "",
    "zh": {
      "title": "群組裡的衝突",
      "scenario": "兩人在群組吵起來，其他人想轉話題，卻又怕問題只是被壓下。當事人都覺得自己沒被聽懂。",
      "question": "你們會把對話移到哪裡，由誰參與？",
      "deeperQuestion": "旁觀者何時應幫忙，何時應退後？",
      "twist": ""
    },
    "id": "ponder-v5-party-062",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "medium"
  },
  {
    "category": "Party",
    "title": "A private budget",
    "scenario": "An anonymous extra contribution could improve the outing, but some worry about hidden obligations.",
    "question": "Would you accept, and what must be clear first?",
    "deeperQuestion": "Can generosity without conditions still feel uncomfortable?",
    "twist": "",
    "zh": {
      "title": "聚會預算的秘密",
      "scenario": "一位朋友願意多付，讓大家去更好的地方，但希望其他人不知道是誰補貼。有人擔心這會形成不平等。",
      "question": "你們會接受嗎？需要先說清楚哪些事？",
      "deeperQuestion": "沒有回報要求的慷慨，是否仍可能讓人不自在？",
      "twist": ""
    },
    "id": "ponder-v5-party-063",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "medium"
  },
  {
    "category": "Party",
    "title": "Absent from the photo",
    "scenario": "A great group photo includes someone who does not want it posted. Cropping looks awkward.",
    "question": "Would you choose another photo, obscure a face or keep it private?",
    "deeperQuestion": "Can one person's refusal determine a shared photo's use?",
    "twist": "",
    "zh": {
      "title": "照片裡的缺席者",
      "scenario": "聚會大合照很好看，但一位朋友說不想被公開。裁掉他會很奇怪，其他人又很想分享。",
      "question": "你們會選另一張、遮臉，還是保留作私人回憶？",
      "deeperQuestion": "一個人的拒絕，能否決定一張共同照片的用途？",
      "twist": ""
    },
    "id": "ponder-v5-party-064",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "medium"
  },
  {
    "category": "Party",
    "title": "The final activity",
    "scenario": "Everyone is tired on the last day, but one friend's only must-see is still ahead.",
    "question": "Would you split up, shorten it or finish together?",
    "deeperQuestion": "Should earlier compromises influence the final choice?",
    "twist": "",
    "zh": {
      "title": "最後一項行程",
      "scenario": "旅行最後一天，大家都累了，但有人為唯一想去的景點等了整趟。取消很輕鬆，繼續也確實辛苦。",
      "question": "你們會分開行動、縮短行程，還是一起完成？",
      "deeperQuestion": "先前的遷就，應不應該在最後被算進去？",
      "twist": ""
    },
    "id": "ponder-v5-party-065",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "medium"
  },
  {
    "category": "Party",
    "title": "A gathering without proving yourself",
    "scenario": "You ban questions about careers, money and relationship progress for one gathering. Conversation suddenly feels unfamiliar.",
    "question": "Each offer a question that reveals a person without requesting achievements.",
    "deeperQuestion": "Which details would you like people to know you through?",
    "twist": "",
    "zh": {
      "title": "一場不用證明的聚會",
      "scenario": "你們決定辦一次聚會，不問工作、收入或感情進度。起初大家反而不知道可以聊甚麼。",
      "question": "每人提出一個能認識對方、又不需要成績的問題。",
      "deeperQuestion": "你最希望別人從哪些細節認識你？",
      "twist": ""
    },
    "id": "ponder-v5-party-066",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "medium"
  },
  {
    "category": "Party",
    "title": "A shared fund for ten",
    "scenario": "Ten people pay equally, while two organise. The group considers fee reductions or priority choices for them.",
    "question": "Vote, then hear one reason from each position.",
    "deeperQuestion": "How can time and money be balanced without turning friendship into invoices?",
    "twist": "",
    "zh": {
      "title": "十個人的共同基金",
      "scenario": "十個人各出一樣的錢辦活動，有兩人願意多做準備。大家要決定，他們是否可以少付或優先選活動。",
      "question": "先投票，再請不同選擇各派一人說理由。",
      "deeperQuestion": "金錢和時間怎樣交換，才不會讓人情變成帳單？",
      "twist": ""
    },
    "id": "ponder-v5-party-067",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "medium"
  },
  {
    "category": "Party",
    "title": "Everyone waiting for an invitation",
    "scenario": "Anonymous notes reveal many people wish others would initiate plans.",
    "question": "In small groups, design a way to meet without relying on the most outgoing person.",
    "deeperQuestion": "What do you worry about while waiting for someone else to initiate?",
    "twist": "",
    "zh": {
      "title": "一張匿名心願牆",
      "scenario": "你們匿名寫下希望朋友多做的一件事，出現好幾張「希望有人主動約我」。原來不少人都在等。",
      "question": "分小組設計一個不用等最外向的人發起的辦法。",
      "deeperQuestion": "你等待主動時，心裡通常在擔心甚麼？",
      "twist": ""
    },
    "id": "ponder-v5-party-068",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "medium"
  },
  {
    "category": "Party",
    "title": "An awkward award",
    "scenario": "A party award for “most trustworthy” sounds fun until people consider those receiving no votes.",
    "question": "Would you keep it, rename it or avoid ranking?",
    "deeperQuestion": "Which qualities change meaning when ranked?",
    "twist": "",
    "zh": {
      "title": "一個讓人猶豫的獎項",
      "scenario": "聚會要頒「最值得信任的人」，大家原本覺得好玩，有人卻擔心沒票的人會難受。",
      "question": "你們會保留、改名，還是換成不排名的玩法？",
      "deeperQuestion": "哪些特質一旦拿來排名，就改變了原本的意思？",
      "twist": ""
    },
    "id": "ponder-v5-party-069",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Party",
    "title": "Someone who will not perform",
    "scenario": "A player declines a performance challenge while others urge them to be a good sport.",
    "question": "Each group invent a response that accepts the no and keeps the game moving.",
    "deeperQuestion": "Does being at ease include feeling safe to decline?",
    "twist": "",
    "zh": {
      "title": "不想上台的人",
      "scenario": "遊戲抽中一位不想表演的人，大家起哄說玩得起才好玩。他笑著拒絕，氣氛開始尷尬。",
      "question": "每組想一句能接住拒絕、又讓遊戲繼續的話。",
      "deeperQuestion": "真正放得開，是否也包括安心說不？",
      "twist": ""
    },
    "id": "ponder-v5-party-070",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Party",
    "title": "Choosing a cause together",
    "scenario": "Group proceeds could help a larger number of people or a cause deeply tied to one friend's life.",
    "question": "Choose, then argue one reason for the alternative.",
    "deeperQuestion": "Do numbers or personal stories move you more?",
    "twist": "",
    "zh": {
      "title": "共同決定捐款",
      "scenario": "你們有一筆活動收入要捐，一個機構幫助更多人，另一個與某位朋友的經歷有深刻關係。",
      "question": "先選一個，再交換立場替另一選擇說一句理由。",
      "deeperQuestion": "數字和個人故事，哪個比較容易改變你？",
      "twist": ""
    },
    "id": "ponder-v5-party-071",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Party",
    "title": "The first dissent",
    "scenario": "A popular plan has hidden dissent that appears only after someone speaks.",
    "question": "Design a process that makes the first disagreement easier.",
    "deeperQuestion": "What response would help you speak differently from the group?",
    "twist": "",
    "zh": {
      "title": "群體裡的第一句反對",
      "scenario": "一個提議獲得很多附和，你其實不同意。你一開口，才發現其他人也只是怕掃興。",
      "question": "分組想一個讓第一句反對更容易出現的流程。",
      "deeperQuestion": "你最需要哪種反應，才敢說跟大家不同的話？",
      "twist": ""
    },
    "id": "ponder-v5-party-072",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Party",
    "title": "Editing a shared memory",
    "scenario": "The funniest clip in an event video makes an absent friend look foolish.",
    "question": "Would you keep it, ask first or replace it? Explain your boundary.",
    "deeperQuestion": "Does popularity make something worth publishing?",
    "twist": "",
    "zh": {
      "title": "共同回憶的剪接",
      "scenario": "你們做聚會影片，最好笑的片段剛好讓一位朋友看起來很笨。他本人不在剪接現場。",
      "question": "你們會保留、先問，還是換掉？說明自己的界線。",
      "deeperQuestion": "一段內容很受歡迎，是否足以讓它值得公開？",
      "twist": ""
    },
    "id": "ponder-v5-party-073",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Party",
    "title": "The cost of inclusion",
    "scenario": "The cheap venue has stairs; an accessible one costs more than planned.",
    "question": "Would you cut extras, raise contributions or change the format?",
    "deeperQuestion": "Is access an extra kindness or part of the basic plan?",
    "twist": "",
    "zh": {
      "title": "人多就應該便宜嗎",
      "scenario": "大聚會要選場地，便宜地方有樓梯，較貴地方才方便行動不便的朋友。預算本來已緊。",
      "question": "你們會減少其他項目、增加費用，還是改形式？",
      "deeperQuestion": "讓每個人能參加，應算額外照顧還是基本安排？",
      "twist": ""
    },
    "id": "ponder-v5-party-074",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Party",
    "title": "One minute each?",
    "scenario": "One-minute turns suit fast speakers better than those who need time to form thoughts.",
    "question": "How would you balance the schedule and participation?",
    "deeperQuestion": "How do identical treatment and fair opportunity differ here?",
    "twist": "",
    "zh": {
      "title": "每人一分鐘夠嗎",
      "scenario": "分享環節每人一分鐘，有人需要較長時間組織語言，有人說得很快。完全一樣的時間未必帶來一樣的機會。",
      "question": "你們會怎樣調整規則，兼顧時間和參與？",
      "deeperQuestion": "相同待遇和公平機會，這裡差在哪裡？",
      "twist": ""
    },
    "id": "ponder-v5-party-075",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Party",
    "title": "A very popular friend",
    "scenario": "A friendly, popular person draws most attention while quieter guests drift to the edge.",
    "question": "Suggest a way to mix people without singling anyone out.",
    "deeperQuestion": "Does unintentional exclusion still call for action?",
    "twist": "",
    "zh": {
      "title": "一個很受歡迎的朋友",
      "scenario": "大家總圍著同一位朋友聊天，他也很友善。幾個比較安靜的人漸漸站到外圍，沒有人刻意排斥。",
      "question": "每組想一個不點名、不尷尬的重新混合方式。",
      "deeperQuestion": "沒有惡意的冷落，仍需要有人主動改變嗎？",
      "twist": ""
    },
    "id": "ponder-v5-party-076",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Party",
    "title": "An unexpected guest",
    "scenario": "An unannounced guest creates a seating shortage. They did not know prior permission was needed.",
    "question": "How would you handle the immediate situation and later responsibility?",
    "deeperQuestion": "Does protecting the guest prevent addressing the inviter's decision?",
    "twist": "",
    "zh": {
      "title": "意外多出一位客人",
      "scenario": "有人帶朋友來，令預訂座位不夠。新客人不知道原本需要先問，主人也不想讓他難堪。",
      "question": "你們會先怎樣處理現場，再怎樣談責任？",
      "deeperQuestion": "照顧新客人的感受，是否代表不能追問帶人者？",
      "twist": ""
    },
    "id": "ponder-v5-party-077",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Party",
    "title": "Collective lateness",
    "scenario": "Most guests are late; punctual ones have waited thirty minutes. Some suggest waiting longer.",
    "question": "Vote to start or wait, then explain how to consider the other side.",
    "deeperQuestion": "Should a rule favour the majority or those who kept the agreement?",
    "twist": "",
    "zh": {
      "title": "一次集體遲到",
      "scenario": "大半人遲到，準時的人已等了半小時。有人提議等齊才開始，怕遲到的人錯過重點。",
      "question": "先投票決定開始或等待，再說怎樣照顧另一方。",
      "deeperQuestion": "規則應照顧最多人，還是守約的人？",
      "twist": ""
    },
    "id": "ponder-v5-party-078",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Party",
    "title": "A forwarded sentence",
    "scenario": "A message is forwarded without context and can be misunderstood. The sender meant it as a joke.",
    "question": "How would you repair misunderstanding already caused?",
    "deeperQuestion": "What should the forwarder do beyond apologising?",
    "twist": "",
    "zh": {
      "title": "被轉傳的一句話",
      "scenario": "群組有人截取一位朋友的一句話轉傳，離開原本語境後很容易被誤會。轉傳者說只是覺得好笑。",
      "question": "你們會怎樣修補已經發生的誤解？",
      "deeperQuestion": "道歉之外，轉傳者需要做甚麼？",
      "twist": ""
    },
    "id": "ponder-v5-party-079",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Party",
    "title": "Mixed skill levels",
    "scenario": "Experienced players dominate while beginners lose interest. Skilled players still want a real challenge.",
    "question": "Design a format enjoyable for both groups.",
    "deeperQuestion": "Must including beginners mean asking skilled players to lose deliberately?",
    "twist": "",
    "zh": {
      "title": "一起玩但不同程度",
      "scenario": "遊戲裡有人很熟練，有人第一次玩。強者一直贏，新手漸漸不想加入。強者也想認真玩。",
      "question": "分組設計一個雙方都有樂趣的玩法。",
      "deeperQuestion": "照顧新手是否一定要讓強者故意輸？",
      "twist": ""
    },
    "id": "ponder-v5-party-080",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Party",
    "title": "Who speaks for the group?",
    "scenario": "An outgoing member drafts a message on everyone's behalf, including points not agreed by all.",
    "question": "How would you verify what can speak for everyone?",
    "deeperQuestion": "When does efficient representation become deciding for others?",
    "twist": "",
    "zh": {
      "title": "誰代表我們發言",
      "scenario": "你們要向場地方提出意見，最外向的人很快寫好一封代表全體的訊息，但有幾點並非大家共識。",
      "question": "你們會怎樣確認哪些能代表全體？",
      "deeperQuestion": "效率很高的代表，何時會變成替人作主？",
      "twist": ""
    },
    "id": "ponder-v5-party-081",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Party",
    "title": "Work talk at the party",
    "scenario": "Most guests share a profession and get absorbed in work talk, leaving others outside.",
    "question": "Would you change topics or make this one accessible?",
    "deeperQuestion": "Could you share the human part of the professional story?",
    "twist": "",
    "zh": {
      "title": "聚會裡的工作話題",
      "scenario": "大部分人做同一行，越聊越投入，其他行業的朋友插不上話。專業話題很有趣，也真的把人隔開了。",
      "question": "你們會換題目，還是把話題翻成大家都能加入的問題？",
      "deeperQuestion": "你能把專業故事裡最有人情味的部分說出來嗎？",
      "twist": ""
    },
    "id": "ponder-v5-party-082",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Party",
    "title": "A vote with consequences",
    "scenario": "After a deposit is paid, someone admits voting yes only to avoid spoiling things.",
    "question": "How would you share the consequence and prevent a repeat?",
    "deeperQuestion": "How are responsibility for honesty and safety to be honest shared?",
    "twist": "",
    "zh": {
      "title": "一個不能重來的投票",
      "scenario": "大家投票後已付訂金，有人這才說自己不喜歡，但之前為怕掃興投了贊成。改動會有損失。",
      "question": "你們會怎樣分擔這次後果，也避免下次再發生？",
      "deeperQuestion": "說真話的責任，和讓人敢說真話的責任，各佔多少？",
      "twist": ""
    },
    "id": "ponder-v5-party-083",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Party",
    "title": "A new group tradition",
    "scenario": "You invent an annual friends' day with one recurring ritual: achievements, failures or simply a meal.",
    "question": "Design a ritual and explain whom it helps connect.",
    "deeperQuestion": "Should friendship record highlights or a fuller life?",
    "twist": "",
    "zh": {
      "title": "一個全新的節日",
      "scenario": "你們可以創立一年一次的朋友節，只留一個固定環節。有人想表揚成就，有人想分享失敗，有人只想好好吃飯。",
      "question": "每組設計一個環節，說明它會讓誰更容易靠近。",
      "deeperQuestion": "你希望友誼記錄的是高光，還是完整的人生？",
      "twist": ""
    },
    "id": "ponder-v5-party-084",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Party",
    "title": "The weight of anonymous feedback",
    "scenario": "Anonymous feedback says some guests felt overlooked but names nobody.",
    "question": "What observable part would you improve without tracing the writer?",
    "deeperQuestion": "Does anonymity make a feeling less worth hearing?",
    "twist": "",
    "zh": {
      "title": "匿名意見的分量",
      "scenario": "活動收到匿名意見，說有些人被忽略。沒有具體名字，主辦者不知道該怎樣回應，也有人覺得不用理會。",
      "question": "你們會先改哪一個可觀察的安排，而不追查是誰？",
      "deeperQuestion": "一個人不願署名，是否就令感受不值得聽？",
      "twist": ""
    },
    "id": "ponder-v5-party-085",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Party",
    "title": "Trading positions",
    "scenario": "The group divides over packed versus open travel plans. Each person must offer a reason for the other side.",
    "question": "Which reason is hardest to voice, and which surprises you with agreement?",
    "deeperQuestion": "Did understanding the other side shift your choice at all?",
    "twist": "",
    "zh": {
      "title": "交換一個立場",
      "scenario": "你們討論旅行應該排滿還是留白，分成兩派。現在每人要替相反的一方說出一個自己也認同的理由。",
      "question": "哪個理由最難說，哪個令你意外地點頭？",
      "deeperQuestion": "理解另一邊之後，你的選擇有沒有改一點？",
      "twist": ""
    },
    "id": "ponder-v5-party-086",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Party",
    "title": "A gift for the next host",
    "scenario": "A few people always host. You want a three-point guide for the next host that does not add demands.",
    "question": "Write three points, including at least one guest responsibility.",
    "deeperQuestion": "Is a good gathering the host's creation or everyone's collaboration?",
    "twist": "",
    "zh": {
      "title": "給下一位主人的禮物",
      "scenario": "每次聚會都由少數人主辦，你們想留一份指南給下一位。只能寫三條，不能只是要求對方做更多。",
      "question": "每組寫三條，至少一條要說客人會負責甚麼。",
      "deeperQuestion": "一個好的聚會，是主人的作品還是大家的合作？",
      "twist": ""
    },
    "id": "ponder-v5-party-087",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Party",
    "title": "Differences on the bill",
    "scenario": "Some order expensive drinks while others have water. Equal splitting is easy; itemising takes time.",
    "question": "What simple rule would you agree on before ordering?",
    "deeperQuestion": "Could unspoken cost affect whether someone returns?",
    "twist": "",
    "zh": {
      "title": "共同帳單裡的差別",
      "scenario": "一桌人點餐，有人喝昂貴飲品，有人只喝水。平均分最方便，逐項算又很花時間。",
      "question": "你們會在點餐前訂甚麼簡單規則？",
      "deeperQuestion": "為了氣氛而少說的那筆錢，會不會影響下次想不想來？",
      "twist": ""
    },
    "id": "ponder-v5-party-088",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Party",
    "title": "Letting silence participate",
    "scenario": "A friend wants to listen, but people keep prompting them to speak out of concern.",
    "question": "How would you check inclusion without measuring words spoken?",
    "deeperQuestion": "When is silence comfort, and when is it exclusion?",
    "twist": "",
    "zh": {
      "title": "讓沉默也參與",
      "scenario": "一位朋友說今天想聽多過說，大家卻輪流催他回答，怕他悶。其實他正在享受旁聽。",
      "question": "你們會怎樣確認參與感，而不把發言量當標準？",
      "deeperQuestion": "安靜什麼時候是自在，什麼時候是被排除？",
      "twist": ""
    },
    "id": "ponder-v5-party-089",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Party",
    "title": "A photo-free gathering",
    "scenario": "A photo-free gathering relaxes some guests but leaves others missing a record.",
    "question": "Would you keep the rule or allow one shared photo moment?",
    "deeperQuestion": "What does an undocumented gathering lose or gain for you?",
    "twist": "",
    "zh": {
      "title": "不能拍照的聚會",
      "scenario": "你們試一次全程不拍照的聚會。有人更放鬆，有人覺得沒有紀錄很可惜。",
      "question": "你們會保留這個規則，還是留一個共同拍照時段？",
      "deeperQuestion": "沒有公開紀錄的一次見面，對你少了甚麼或多了甚麼？",
      "twist": ""
    },
    "id": "ponder-v5-party-090",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Party",
    "title": "A group apology",
    "scenario": "A repeated group joke hurt someone for a long time. No one person was the sole instigator.",
    "question": "How would each person take responsibility instead of appointing one apologiser?",
    "deeperQuestion": "What change could acknowledge hurt ignored by a whole group?",
    "twist": "",
    "zh": {
      "title": "一次集體道歉",
      "scenario": "你們發現曾經一起取笑的一件事，讓某位朋友難過很久。沒有人單獨做得最過分，但每個人都笑過。",
      "question": "你們會怎樣各自負責，而不只派一人說對不起？",
      "deeperQuestion": "被很多人一起忽略的感受，需要怎樣的改變才被接住？",
      "twist": ""
    },
    "id": "ponder-v5-party-091",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Party",
    "title": "The next invitation list",
    "scenario": "The circle outgrows the venue. Familiar invitations are comfortable, but rotation may feel like a ranking.",
    "question": "How would you avoid turning capacity into a friendship ranking?",
    "deeperQuestion": "What explanation would help you understand missing one invitation?",
    "twist": "",
    "zh": {
      "title": "誰來決定下次邀誰",
      "scenario": "朋友圈越來越大，場地只能容納一半。每次邀同一群很舒服，輪替又怕有人覺得被降級。",
      "question": "你們會怎樣設計邀約方式，避免把容量變成親疏榜？",
      "deeperQuestion": "沒被邀一次，怎樣的說明會讓你容易理解？",
      "twist": ""
    },
    "id": "ponder-v5-party-092",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Party",
    "title": "A shared gift of time",
    "scenario": "Everyone offers two hours to support a friend, with different practical and emotional strengths.",
    "question": "Plan the gift in groups, starting with what you would ask the recipient.",
    "deeperQuestion": "How would you avoid confusing what you want to give with what they need?",
    "twist": "",
    "zh": {
      "title": "一份共同的時間禮物",
      "scenario": "你們想送朋友一份支持，每人可以出兩小時，但有人擅長實際幫忙，有人只會陪伴。",
      "question": "分組安排這份禮物，先說你們會問收禮者甚麼。",
      "deeperQuestion": "怎樣避免把大家想給的，當成對方需要的？",
      "twist": ""
    },
    "id": "ponder-v5-party-093",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Party",
    "title": "No organiser next time",
    "scenario": "The regular organiser wants to be a guest next time, while everyone else claims not to be good at planning.",
    "question": "Each take one small task to build a gathering without a sole organiser.",
    "deeperQuestion": "Could doing something imperfectly be a form of care?",
    "twist": "",
    "zh": {
      "title": "如果下次沒有主辦人",
      "scenario": "你們收到一句話：「下次我想當客人。」一直主辦的人終於想休息，其他人卻都說自己不擅長安排。",
      "question": "每人認領一件小事，組成不用一個人包辦的聚會。",
      "deeperQuestion": "願意做得不完美，是否也是照顧朋友的一種方式？",
      "twist": ""
    },
    "id": "ponder-v5-party-094",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Party",
    "title": "Changing one rule together",
    "scenario": "You may add one achievable agreement to help people be themselves in this friend group.",
    "question": "Propose one per group, then choose one to trial for a month.",
    "deeperQuestion": "What would show after a month whether it helped?",
    "twist": "",
    "zh": {
      "title": "一起改變一條規則",
      "scenario": "你們可以替這個朋友圈加一條新約定，目的是讓大家更敢做自己。它必須是每個人都做得到的行動。",
      "question": "每組提出一條，再選出最想試一個月的版本。",
      "deeperQuestion": "一個月後，你會看甚麼來判斷它有沒有幫助？",
      "twist": ""
    },
    "id": "ponder-v5-party-095",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Party",
    "title": "A game with a pass",
    "scenario": "Someone passes three questions after the group agreed no explanation was needed.",
    "question": "How would you continue so the promise of a pass stays real?",
    "deeperQuestion": "Can curiosity make you overlook an existing no?",
    "twist": "",
    "zh": {
      "title": "一場可以跳題的遊戲",
      "scenario": "你們玩問答，有人連續跳過三題。其他人很好奇原因，但原本已說好可以不解釋。",
      "question": "你們會怎樣繼續，讓跳題的承諾真的有效？",
      "deeperQuestion": "你會因為好奇，而忘記對方已經說了不想談嗎？",
      "twist": ""
    },
    "id": "ponder-v5-party-096",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Party",
    "title": "The cheapest group order",
    "scenario": "A group purchase gets cheaper with more buyers, including someone who does not need the item.",
    "question": "How would you make declining free of social debt?",
    "deeperQuestion": "Is the saving worth someone buying what they do not need?",
    "twist": "",
    "zh": {
      "title": "最省錢的團購",
      "scenario": "團購越多人越便宜，但有人只因怕大家失去折扣而想買，自己其實不需要。",
      "question": "你們會怎樣讓退出不變成欠大家的人情？",
      "deeperQuestion": "省下的錢，是否值得讓一個人買不需要的東西？",
      "twist": ""
    },
    "id": "ponder-v5-party-097",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Party",
    "title": "A late good idea",
    "scenario": "A newcomer offers a better idea after plans are settled. Changing adds work but may improve the event.",
    "question": "What conditions would determine whether change is worthwhile?",
    "deeperQuestion": "Does late arrival make you undervalue an idea?",
    "twist": "",
    "zh": {
      "title": "一個遲來的好點子",
      "scenario": "活動方案已決定，新加入的人提出更好的點子。改動會增加準備工作，也可能令活動更適合大家。",
      "question": "你們會用甚麼條件判斷值不值得改？",
      "deeperQuestion": "你會因為點子來得晚，而低估它本身的價值嗎？",
      "twist": ""
    },
    "id": "ponder-v5-party-098",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Party",
    "title": "Private appreciation",
    "scenario": "Appreciation notes are read only by recipients. Some miss the excitement; others write more honestly.",
    "question": "Would you choose public sharing or private exchange? Give a reason.",
    "deeperQuestion": "Is appreciation without an audience easier for you to trust?",
    "twist": "",
    "zh": {
      "title": "一份只有本人看見的讚賞",
      "scenario": "你們各寫一張欣賞朋友的卡，只交給本人，不公開讀。有人覺得少了熱鬧，有人因此敢寫得更真。",
      "question": "你會選公開分享還是私人交換？各說一個理由。",
      "deeperQuestion": "沒有觀眾的肯定，對你是否更容易相信？",
      "twist": ""
    },
    "id": "ponder-v5-party-099",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Party",
    "title": "Who gets the next chance?",
    "scenario": "An experienced organiser could repeat the event, or a newcomer could try with some mistakes likely.",
    "question": "How would you pass on the opportunity and offer support?",
    "deeperQuestion": "How much imperfection would you accept for broader participation?",
    "twist": "",
    "zh": {
      "title": "把下一次留給誰",
      "scenario": "這次每個活動都是熟悉的人帶領，下次有新人想試。舊主辦很有經驗，新人可能會做得不太順。",
      "question": "你們會怎樣交出機會，也提供支援？",
      "deeperQuestion": "你願意接受多少不完美，來換取更多人的參與？",
      "twist": ""
    },
    "id": "ponder-v5-party-100",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Solo",
    "zh": {
      "title": "喜歡的生活，沒有漂亮頭銜",
      "scenario": "你有兩個工作選擇，薪水都足夠生活。第一份頭銜普通，內容卻合你心意，也有時間見喜歡的人；第二份更受羨慕，工作你做得來，但每星期會多佔兩個晚上。你對兩份都有一點心動。",
      "question": "你會選哪份？哪個代價是你願意長期接受的？",
      "deeperQuestion": "如果沒有人會知道你的職位和公司，你的選擇會改變嗎？",
      "twist": ""
    },
    "title": "A good life without an impressive title",
    "scenario": "Two jobs both cover your needs. One has an ordinary title, work you enjoy and time for people you love. The other is admired and within your abilities, but takes two more evenings each week. Both appeal to you in some way.",
    "question": "Which would you choose, and which cost could you accept over time?",
    "deeperQuestion": "Would your choice change if nobody would know your role or employer?",
    "twist": "",
    "id": "ponder-v5-solo-001",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "zh": {
      "title": "已經花了兩年",
      "scenario": "你為一個目標投入了兩年，也取得不錯進展。家人朋友都以為你會繼續，但你最近發現，自己真正想過的生活可能不需要它。再做下去有機會成功，停下來卻要重新找方向。",
      "question": "你會怎樣判斷，自己是暫時累了，還是真的想改變？",
      "deeperQuestion": "如果今天才第一次遇到這個目標，沒有過去兩年的投入，你還會選它嗎？",
      "twist": ""
    },
    "title": "Two years already invested",
    "scenario": "You have worked toward a goal for two years and made good progress. People expect you to continue, but you suspect the life you want may not need it. Success is possible if you stay; stopping means finding a new direction.",
    "question": "How would you tell temporary tiredness from a genuine change of heart?",
    "deeperQuestion": "If you encountered the goal for the first time today, without the two years invested, would you choose it?",
    "twist": "",
    "id": "ponder-v5-solo-002",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "zh": {
      "title": "幫忙之後，沒有人知道",
      "scenario": "你有一個下午，可以做一件很需要有人做、但沒有人會知道是你做的好事；也可以參與一個較小的幫忙，會有人真心感謝你，並邀你加入他們的圈子。兩邊都確實有幫助，你只能選一邊。",
      "question": "你會怎樣選？你想從這次付出得到甚麼？",
      "deeperQuestion": "希望被感謝、被接納，會令一份好意變得比較不真誠嗎？你為甚麼這樣想？",
      "twist": ""
    },
    "title": "Helping without being seen",
    "scenario": "You have an afternoon for either an important anonymous act of help or a smaller helpful act where people will thank you and welcome you into their circle. Both genuinely help, but you can choose only one.",
    "question": "Which would you choose, and what would you hope to receive from giving?",
    "deeperQuestion": "Does wanting gratitude or belonging make kindness less sincere? Why?",
    "twist": "",
    "id": "ponder-v5-solo-003",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "A choice nobody will see",
    "scenario": "Imagine changing work, city or study without explaining it to anyone. Practical costs remain, but others' opinions disappear.",
    "question": "Which choice would you reconsider?",
    "deeperQuestion": "Which remaining concerns are genuinely yours?",
    "twist": "",
    "zh": {
      "title": "一個沒人會知道的選擇",
      "scenario": "假如你換工作、搬城市或重新學習，都不需要向任何人交代。原本讓你猶豫的目光暫時消失，但實際代價仍在。",
      "question": "你會重新考慮哪一個選擇？",
      "deeperQuestion": "留下來的顧慮，哪些才真正屬於你？",
      "twist": ""
    },
    "id": "ponder-v5-solo-004",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "An ordinary day you like",
    "scenario": "You can choose the basic rhythm of ten ordinary years, with growth but no spectacular success.",
    "question": "Which three things must a day contain?",
    "deeperQuestion": "Do your current goals move you toward or away from that day?",
    "twist": "",
    "zh": {
      "title": "普通但喜歡的一天",
      "scenario": "你可以重複過一種普通的日子十年，沒有驚人成功，也不會停滯。生活會慢慢變化，但基本節奏由你選。",
      "question": "你希望一天裡一定有哪三件事？",
      "deeperQuestion": "你現在追求的目標，會把你帶向還是帶離這種日子？",
      "twist": ""
    },
    "id": "ponder-v5-solo-005",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Nothing left to prove",
    "scenario": "Someone who underestimated you sincerely admits they were wrong. Tomorrow still needs a direction.",
    "question": "Which goal would remain, and which might fall away?",
    "deeperQuestion": "How much effort is addressed to someone no longer present?",
    "twist": "",
    "zh": {
      "title": "不再需要證明的事",
      "scenario": "假如曾經看輕你的人，真心承認自己看錯了。你終於被肯定，但明天仍要決定怎樣過。",
      "question": "哪一個目標你仍會繼續，哪一個可能放下？",
      "deeperQuestion": "你有多少努力，是在跟一個已不在場的人說話？",
      "twist": ""
    },
    "id": "ponder-v5-solo-006",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "After a rejection",
    "scenario": "A wanted opportunity rejects you without detail. You start filling the silence with harsh explanations.",
    "question": "What do you know, and what are you only guessing?",
    "deeperQuestion": "How could you avoid letting guesses define your worth?",
    "twist": "",
    "zh": {
      "title": "一封拒絕信之後",
      "scenario": "你很想要的機會被拒絕，理由只是這次不合適。沒有詳細解釋，你開始替空白寫出最差的故事。",
      "question": "你確實知道哪些事，哪些只是自己的猜測？",
      "deeperQuestion": "如果暫時得不到答案，你怎樣不讓猜測替你定價？",
      "twist": ""
    },
    "id": "ponder-v5-solo-007",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Good at it, not drawn to it",
    "scenario": "You are repeatedly chosen for something you do well but do not enjoy.",
    "question": "How would you reduce its place in your life?",
    "deeperQuestion": "Must every strength be maximised to avoid waste?",
    "twist": "",
    "zh": {
      "title": "做得好卻不喜歡",
      "scenario": "你很擅長一件事，因此一直被推去做。它帶來肯定，卻沒有讓你期待下一次。",
      "question": "你會怎樣減少它在生活裡的位置？",
      "deeperQuestion": "能力是否一定要被用到最多，才不算浪費？",
      "twist": ""
    },
    "id": "ponder-v5-solo-008",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "A problem to sit with",
    "scenario": "More research on an uncertain choice increases anxiety without adding information.",
    "question": "What would you pause, and when would you revisit it?",
    "deeperQuestion": "When does thinking shift from helping to delaying action?",
    "twist": "",
    "zh": {
      "title": "一個不想立即解決的問題",
      "scenario": "你遇到一個沒有立即答案的選擇，越查資料越焦躁。再多一晚思考，也未必有新資訊。",
      "question": "你會暫停甚麼，並用甚麼條件決定何時再想？",
      "deeperQuestion": "思考在甚麼時候從幫忙變成拖延行動？",
      "twist": ""
    },
    "id": "ponder-v5-solo-009",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "More than the object",
    "scenario": "An expensive purchase feels like entry into a desired life, though what you own works well.",
    "question": "What feeling do you hope it will bring?",
    "deeperQuestion": "Could another route bring you closer to that feeling?",
    "twist": "",
    "zh": {
      "title": "想買的不是物品",
      "scenario": "你很想買一件昂貴物品，想到擁有它就覺得自己終於跟得上某種生活。其實你現在的用品仍很好用。",
      "question": "你真正希望它帶來哪一種感覺？",
      "deeperQuestion": "如果不買，有沒有另一種方法接近那份感覺？",
      "twist": ""
    },
    "id": "ponder-v5-solo-010",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "A hobby without achievement",
    "scenario": "You enjoy drawing until friends suggest selling it. Monetising feels tense, but ignoring potential feels wasteful.",
    "question": "What boundary would you protect around this hobby?",
    "deeperQuestion": "Is enjoyment enough reason to invest time?",
    "twist": "",
    "zh": {
      "title": "一段不必變成成就的興趣",
      "scenario": "你開始喜歡畫畫，朋友說可以賣作品。你一想變現就緊張，卻又怕不把握機會很浪費。",
      "question": "你想替這個興趣保留甚麼界線？",
      "deeperQuestion": "快樂本身，對你夠不夠成為投入時間的理由？",
      "twist": ""
    },
    "id": "ponder-v5-solo-011",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Rest you can accept",
    "scenario": "A free day fills with learning, exercise and chores, leaving you tired.",
    "question": "What kind of day would actually restore you?",
    "deeperQuestion": "Could a day without outputs still feel valuable?",
    "twist": "",
    "zh": {
      "title": "理想中的休息",
      "scenario": "你突然有一整天不用工作，卻忍不住安排進修、運動和整理。忙完仍累，也不知道自己有沒有休息。",
      "question": "怎樣的一天，才真的讓你恢復？",
      "deeperQuestion": "如果沒有任何成果，你能否仍把這天當成有價值？",
      "twist": ""
    },
    "id": "ponder-v5-solo-012",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "A dream that no longer fits",
    "scenario": "An old dream is within reach, but your values have changed. Letting go feels disloyal to your younger self.",
    "question": "How would you explain the turn to your younger self?",
    "deeperQuestion": "Is loyalty to yourself loyalty to an early wish or a present truth?",
    "twist": "",
    "zh": {
      "title": "一個不再適合的夢",
      "scenario": "你終於接近年輕時想要的生活，卻發現現在最在乎的事已不同。放下它像背叛以前很努力的自己。",
      "question": "你會怎樣向以前的自己解釋這次轉向？",
      "deeperQuestion": "忠於自己，是忠於最早的願望，還是現在誠實的感受？",
      "twist": ""
    },
    "id": "ponder-v5-solo-013",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "The version people like",
    "scenario": "A pleasing version of you gains approval while tiredness and disagreement stay hidden.",
    "question": "Where could you safely accommodate a little less?",
    "deeperQuestion": "Do you fear losing the relationship or the image you maintain?",
    "twist": "",
    "zh": {
      "title": "被喜歡的版本",
      "scenario": "某種表現特別容易得到喜歡，你開始每次都演得很像。沒有說謊，卻越來越少讓人看到疲倦和不同意。",
      "question": "你會在哪一段安全的關係裡，先少配合一點？",
      "deeperQuestion": "你害怕失去的是關係，還是自己一直維持的形象？",
      "twist": ""
    },
    "id": "ponder-v5-solo-014",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "One chance to revisit",
    "scenario": "You can revisit a decision using only information available then, not hindsight.",
    "question": "How would this change your judgement of your past self?",
    "deeperQuestion": "Are you demanding knowledge your past self could not have had?",
    "twist": "",
    "zh": {
      "title": "只有一次的重來",
      "scenario": "你能回到一個過去的決定，但只能帶著當時知道的資訊，不能帶未來答案。你可能仍然作同一選擇。",
      "question": "這會怎樣改變你對當時自己的評價？",
      "deeperQuestion": "你是否要求以前的自己知道他不可能知道的事？",
      "twist": ""
    },
    "id": "ponder-v5-solo-015",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Ambition at another pace",
    "scenario": "You still want a major goal but prefer five years over two. Others call that insufficient desire.",
    "question": "How would you judge the right pace for you?",
    "deeperQuestion": "What else would a slower pace protect?",
    "twist": "",
    "zh": {
      "title": "慢下來的野心",
      "scenario": "你仍想完成一個大目標，但願意用五年而不是兩年。旁人說這代表你不夠想要。",
      "question": "你會怎樣判斷速度是否真的適合自己？",
      "deeperQuestion": "慢一點能保留哪些你也不想失去的東西？",
      "twist": ""
    },
    "id": "ponder-v5-solo-016",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "The quiet after success",
    "scenario": "After a long-sought achievement, excitement fades and the absence of another goal feels unsettling.",
    "question": "How would you live through the gap without rushing to fill it?",
    "deeperQuestion": "Where else could your identity come from without a pursuit?",
    "twist": "",
    "zh": {
      "title": "成功之後的空白",
      "scenario": "你完成一個努力很久的目標，開心幾天後卻很空。下一個目標還沒出現，你有點不知道自己是誰。",
      "question": "你會怎樣過這段空白，而不急著填上新的任務？",
      "deeperQuestion": "沒有正在追趕的事，你還能從哪裡認識自己？",
      "twist": ""
    },
    "id": "ponder-v5-solo-017",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "An affordable freedom",
    "scenario": "Dropping one recurring expense could reduce your work slightly, but the expense brings real pleasure.",
    "question": "How would you compare that pleasure with the time gained?",
    "deeperQuestion": "Which spending is least worth your time?",
    "twist": "",
    "zh": {
      "title": "最便宜的自由",
      "scenario": "你不需要突然有很多錢，只需要每月少一項固定支出，就能減少一點工作。那項支出也確實帶來快樂。",
      "question": "你會怎樣比較它帶來的快樂和換來的時間？",
      "deeperQuestion": "你最不想用時間換取哪一種消費？",
      "twist": ""
    },
    "id": "ponder-v5-solo-018",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "The silence after no",
    "scenario": "You decline a request and receive a simple “okay.” You imagine anger and want to over-explain.",
    "question": "What would you do before inventing their feelings?",
    "deeperQuestion": "Could you allow them some disappointment if it were real?",
    "twist": "",
    "zh": {
      "title": "說不之後的安靜",
      "scenario": "你拒絕一個不想接的請求，對方只回了「好」。你開始反覆想他是不是生氣，想補很多解釋。",
      "question": "你會先做甚麼，避免替對方猜出一整段心情？",
      "deeperQuestion": "如果對方真的有點失望，你能容許那份失望存在嗎？",
      "twist": ""
    },
    "id": "ponder-v5-solo-019",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Wanting and should",
    "scenario": "Every sensible item on your list feels flat. The one you want is postponed indefinitely.",
    "question": "What tiny beginning would you allow it?",
    "deeperQuestion": "Whose approval makes a wish feel eligible for your calendar?",
    "twist": "",
    "zh": {
      "title": "想要與應該之間",
      "scenario": "你列出想做的事，發現每一項都很合理，卻沒有一項讓你期待。真正想做的一件，反而被你寫成「以後再說」。",
      "question": "你願意給那件事多小的一個開始？",
      "deeperQuestion": "你需要誰批准，才覺得自己的想要有資格排進日程？",
      "twist": ""
    },
    "id": "ponder-v5-solo-020",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "A less obvious courage",
    "scenario": "Others celebrate leaving as brave. Your challenge is staying long enough for a difficult conversation.",
    "question": "How would you define courage in this situation?",
    "deeperQuestion": "Can an undramatic change deserve recognition?",
    "twist": "",
    "zh": {
      "title": "沒有標準答案的勇敢",
      "scenario": "別人覺得勇敢是辭職遠行，你現在最難的是留下來，把一段對話談清楚。外表看起來什麼都沒變。",
      "question": "你會怎樣定義這次自己的勇敢？",
      "deeperQuestion": "沒有戲劇性的改變，是否也值得被你肯定？",
      "twist": ""
    },
    "id": "ponder-v5-solo-021",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "How much for later?",
    "scenario": "Extra income could build security or fund a meaningful present experience. Neither is frivolous.",
    "question": "How would you divide it without always making your present self wait?",
    "deeperQuestion": "What would help you believe the present deserves care too?",
    "twist": "",
    "zh": {
      "title": "替未來留多少",
      "scenario": "你有一筆額外收入，可以存起來減少未來焦慮，也可以用一部分完成現在很重要的體驗。兩者都不浪費。",
      "question": "你會怎樣分配，才不會總叫現在的自己等？",
      "deeperQuestion": "你需要甚麼證據，才相信現在也值得被照顧？",
      "twist": ""
    },
    "id": "ponder-v5-solo-022",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "The cost of visibility",
    "scenario": "Sharing your work could bring opportunity and criticism. Revisions continue, but readiness never arrives.",
    "question": "What concrete standard would make it ready to share?",
    "deeperQuestion": "Are you waiting for better work or for fear to disappear?",
    "twist": "",
    "zh": {
      "title": "被看見的代價",
      "scenario": "你有機會公開分享作品，可能帶來機會，也會讓更多人批評。你已修改很多次，還是想再等。",
      "question": "你會用甚麼具體標準決定可以發表？",
      "deeperQuestion": "你在等作品更好，還是在等自己不再害怕？",
      "twist": ""
    },
    "id": "ponder-v5-solo-023",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "A plan you may leave",
    "scenario": "Starting a new path feels permanent. A three-month review changes how it feels.",
    "question": "How would you design a trial that teaches you something useful?",
    "deeperQuestion": "Which decisions could be tested without resolving your whole life?",
    "twist": "",
    "zh": {
      "title": "一個可以退出的計劃",
      "scenario": "你想試新方向，卻總把開始想成一輩子的承諾。假如允許三個月後重新決定，感覺突然不同。",
      "question": "你會怎樣設計這次試行，知道自己學到了甚麼？",
      "deeperQuestion": "甚麼決定其實可以先試，不必先想通一生？",
      "twist": ""
    },
    "id": "ponder-v5-solo-024",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Applause you outgrew",
    "scenario": "You no longer share a group's values, yet their criticism still hurts deeply.",
    "question": "Whose judgement would you choose as a reference now, and why?",
    "deeperQuestion": "Should an opinion's weight depend on how well someone knows you?",
    "twist": "",
    "zh": {
      "title": "不再需要的掌聲",
      "scenario": "你曾很在乎某一群人的認同，如今價值觀已不同，但他們的批評仍會讓你難過很久。",
      "question": "你希望改用誰的意見作參考，為甚麼？",
      "deeperQuestion": "一個人的意見有多重，是否應跟他多了解你有關？",
      "twist": ""
    },
    "id": "ponder-v5-solo-025",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "A comfortable fallback",
    "scenario": "A safe fallback helps you feel secure but tempts you at every difficulty.",
    "question": "What conditions would guide staying or leaving?",
    "deeperQuestion": "How would you assess the difficulty without anything to prove?",
    "twist": "",
    "zh": {
      "title": "看起來很好的退路",
      "scenario": "你保留一條安全退路，但每次新計劃遇到困難，就立即想退回去。你不知道這是智慧還是害怕。",
      "question": "你會先設定哪些條件，才決定留下或退出？",
      "deeperQuestion": "如果沒有需要向人證明，你會怎樣評估這次困難？",
      "twist": ""
    },
    "id": "ponder-v5-solo-026",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Not every regret needs repair",
    "scenario": "An old opportunity returns at a high cost. You may want it, or only want the regret gone.",
    "question": "How would you distinguish those motives?",
    "deeperQuestion": "Would you choose it if some regret would always remain?",
    "twist": "",
    "zh": {
      "title": "不是每個遺憾都要補回",
      "scenario": "你錯過年輕時的一個機會，現在可以重來，但代價很大。你不確定自己仍想要，還是只想消除遺憾。",
      "question": "你會怎樣分辨這兩種動機？",
      "deeperQuestion": "如果遺憾永遠不會完全消失，你還會選這條路嗎？",
      "twist": ""
    },
    "id": "ponder-v5-solo-027",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "An imperfect beginning",
    "scenario": "You want a skill but dislike being seen as a beginner. Equipment research replaces practice.",
    "question": "What first attempt would let you be awkward safely?",
    "deeperQuestion": "Whose view makes looking inexperienced most frightening?",
    "twist": "",
    "zh": {
      "title": "一次不必最好看的開始",
      "scenario": "你想學一項技能，卻不喜歡別人看到自己很生疏。你甚至花更多時間研究裝備，而不是開始練。",
      "question": "你能安排一個怎樣的第一次，讓自己容許笨拙？",
      "deeperQuestion": "你最怕的「看起來很差」，在誰眼裡最重要？",
      "twist": ""
    },
    "id": "ponder-v5-solo-028",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Not every explanation is owed",
    "scenario": "A considered choice becomes exhausting as you defend it to everyone who questions it.",
    "question": "Who gets the full explanation, and what would you tell others?",
    "deeperQuestion": "Do understanding and approval sometimes blur for you?",
    "twist": "",
    "zh": {
      "title": "不欠所有人一個解釋",
      "scenario": "你作了一個慎重的生活選擇，每遇到不理解的人就重新辯護。解釋越多，你越懷疑自己。",
      "question": "你會把完整解釋留給誰，對其他人說到哪裡？",
      "deeperQuestion": "被理解和被批准，對你是否有時混在一起？",
      "twist": ""
    },
    "id": "ponder-v5-solo-029",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Time without a purpose",
    "scenario": "Two weekly hours could serve no productivity or caretaking purpose. Your first reaction is waste.",
    "question": "How would you use it, or allow it to remain purposeless?",
    "deeperQuestion": "When did time begin needing a measurable return?",
    "twist": "",
    "zh": {
      "title": "一段沒有用途的時間",
      "scenario": "你可以每週保留兩小時，不進修、不賺錢，也不為別人安排。第一反應卻是這樣很浪費。",
      "question": "你會怎樣使用它，或容許它暫時沒有用途？",
      "deeperQuestion": "你從甚麼時候開始，覺得時間必須交出成果？",
      "twist": ""
    },
    "id": "ponder-v5-solo-030",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Appealing but unsuitable",
    "scenario": "An exciting opportunity conflicts with the rhythm you want. Scarcity makes declining frightening.",
    "question": "Which everyday realities would you use to assess it?",
    "deeperQuestion": "Does rarity mean suitability?",
    "twist": "",
    "zh": {
      "title": "心動但不適合",
      "scenario": "一個機會很令人興奮，卻跟你想保留的生活節奏衝突。你怕拒絕後，再也沒有同樣好的。",
      "question": "你會拿哪幾個具體日常來衡量它？",
      "deeperQuestion": "稀有是否就代表適合你？",
      "twist": ""
    },
    "id": "ponder-v5-solo-031",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "An envy worth admitting",
    "scenario": "Someone else's life sparks envy, followed by self-criticism. The envy may point to an unspoken wish.",
    "question": "Which specific part do you envy?",
    "deeperQuestion": "Could a smaller version fit your own life?",
    "twist": "",
    "zh": {
      "title": "一個願意承認的嫉妒",
      "scenario": "你看見別人過得很好，心裡一酸，隨即責怪自己小器。但那份羨慕可能指向你一直沒承認的願望。",
      "question": "你究竟羨慕哪一個具體部分？",
      "deeperQuestion": "那個部分有沒有一個適合自己生活的小版本？",
      "twist": ""
    },
    "id": "ponder-v5-solo-032",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Losing interest is not failure",
    "scenario": "A once-loved community no longer excites you. Leaving means losing a familiar identity.",
    "question": "Which people or experiences would you keep, and which involvement release?",
    "deeperQuestion": "Do you miss the activity or who you used to be there?",
    "twist": "",
    "zh": {
      "title": "失去興趣不等於失敗",
      "scenario": "你曾很投入一個圈子，現在活動仍然不錯，你卻不再期待。離開會少了一個熟悉的身份。",
      "question": "你想保留哪些人或經驗，放下哪些參與？",
      "deeperQuestion": "你是在捨不得活動，還是捨不得曾經的自己？",
      "twist": ""
    },
    "id": "ponder-v5-solo-033",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Forgiveness without a deadline",
    "scenario": "You believe an apology but are not ready to restore the relationship.",
    "question": "What distance and time feel right now?",
    "deeperQuestion": "Does forgiveness necessarily include reopening access?",
    "twist": "",
    "zh": {
      "title": "一個不必立即原諒的人",
      "scenario": "有人真誠道歉，你也相信他，但你還不想恢復以前的往來。你擔心這樣顯得不夠大方。",
      "question": "你現在願意給的距離和時間是甚麼？",
      "deeperQuestion": "原諒對你是否一定包括重新開門？",
      "twist": ""
    },
    "id": "ponder-v5-solo-034",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "One comparison to keep",
    "scenario": "You may keep one measure of living well, excluding other people's pace and achievements.",
    "question": "What observable measure would you choose?",
    "deeperQuestion": "Would it change your view of the past month?",
    "twist": "",
    "zh": {
      "title": "只剩一個比較標準",
      "scenario": "假如你只能保留一個衡量自己過得好不好的標準，其他人的速度和成果都暫時不能算。",
      "question": "你會選甚麼可以真實觀察的標準？",
      "deeperQuestion": "它會讓你對最近一個月有不同評價嗎？",
      "twist": ""
    },
    "id": "ponder-v5-solo-035",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Something you may be bad at",
    "scenario": "An enjoyable activity may remain ordinary despite practice. There is no contest or career requirement.",
    "question": "How much time would you still give it?",
    "deeperQuestion": "Which gets more say in your life: enjoyment or skill?",
    "twist": "",
    "zh": {
      "title": "可以不擅長的事",
      "scenario": "你想做一件讓你開心的事，即使練很久也可能只是普通。沒有比賽，也沒有工作需要。",
      "question": "你還願意投入多少時間？",
      "deeperQuestion": "喜歡和擅長，在你的生活裡誰比較有發言權？",
      "twist": ""
    },
    "id": "ponder-v5-solo-036",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Smaller for more freedom",
    "scenario": "A smaller home and fewer purchases could buy a free day weekly. It may look like a step backwards.",
    "question": "How would you distinguish decline from reprioritising?",
    "deeperQuestion": "Who sees your life, and who has to live it?",
    "twist": "",
    "zh": {
      "title": "換來自由的縮小",
      "scenario": "你可以住小一點、少買一些，換取每週一天自由。你擔心生活看起來像倒退，實際上卻可能更喜歡。",
      "question": "你會怎樣判斷這是退步還是重新排序？",
      "deeperQuestion": "你的生活是給誰看的，又是給誰過的？",
      "twist": ""
    },
    "id": "ponder-v5-solo-037",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Kindness without return",
    "scenario": "Your help made a difference but went unacknowledged. You feel disappointed.",
    "question": "What part did you want recognised?",
    "deeperQuestion": "Would you change how much you give or clarify your needs?",
    "twist": "",
    "zh": {
      "title": "一個沒有回報的善意",
      "scenario": "你幫過的人沒有記得，也沒有特別感謝。事情確實幫到他，你卻發現自己很失落。",
      "question": "你希望被看見的是哪一部分？",
      "deeperQuestion": "下次你會改變付出的份量，還是先說清楚自己的需要？",
      "twist": ""
    },
    "id": "ponder-v5-solo-038",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Not reliable at any cost",
    "scenario": "Being dependable brings trust and endless responsibility, leaving little room to breathe.",
    "question": "Which task does not truly need you and could go first?",
    "deeperQuestion": "What value do you fear losing if you are not the most dependable?",
    "twist": "",
    "zh": {
      "title": "不必每次都可靠",
      "scenario": "大家都相信你一定做到，所以重要的事總落到你身上。你也喜歡被需要，直到自己沒有喘息的空間。",
      "question": "你會先卸下哪一件其實不必由你完成的事？",
      "deeperQuestion": "如果不再最可靠，你怕自己還剩下甚麼價值？",
      "twist": ""
    },
    "id": "ponder-v5-solo-039",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "A trial without a result",
    "scenario": "A trial produces no work or income, but reveals the path is wrong for you.",
    "question": "What learning could spare a future mistake?",
    "deeperQuestion": "Can learning what you do not want count as progress?",
    "twist": "",
    "zh": {
      "title": "一次沒有成果的嘗試",
      "scenario": "你試了一個新方向，最後沒有作品或收入，卻清楚知道自己不喜歡。你很難把這段時間說成有收穫。",
      "question": "你學到的哪件事，能替未來省下一個錯誤？",
      "deeperQuestion": "知道自己不要甚麼，能不能也算前進？",
      "twist": ""
    },
    "id": "ponder-v5-solo-040",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Success that leaves room",
    "scenario": "Faster success costs regular time with loved ones. Slower progress may lose opportunities.",
    "question": "Which connection deserves time you will not trade?",
    "deeperQuestion": "How do you know “making it up later” will be possible?",
    "twist": "",
    "zh": {
      "title": "記得休息的成功",
      "scenario": "你可以更快成功，但要長期取消跟重要的人相處。慢一點則可能錯過某些機會，沒有保證兩全。",
      "question": "你願意為哪一種相處保留不可交換的時間？",
      "deeperQuestion": "你怎樣知道自己說的「以後補回」真的可能？",
      "twist": ""
    },
    "id": "ponder-v5-solo-041",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "A label that can change",
    "scenario": "You identify as cautious, but a new wish challenges the label before risks are even assessed.",
    "question": "How would you replace identity labels with a specific decision?",
    "deeperQuestion": "Which description of yourself is overdue for an update?",
    "twist": "",
    "zh": {
      "title": "一個可以改變的標籤",
      "scenario": "你一直說自己不是會冒險的人，最近卻有一件很想試的事。舊標籤比實際風險更快把你攔住。",
      "question": "你會怎樣把「我是怎樣的人」改成這次具體的選擇？",
      "deeperQuestion": "哪個關於自己的說法，已經很久沒有更新？",
      "twist": ""
    },
    "id": "ponder-v5-solo-042",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "The apology you want",
    "scenario": "An apology you want cannot restore a lost opportunity. Your future still needs care.",
    "question": "What would the apology affirm for you?",
    "deeperQuestion": "If it never comes, where could you reclaim some agency?",
    "twist": "",
    "zh": {
      "title": "真正想要的道歉",
      "scenario": "你一直想聽某人道歉，但即使他今天說了，失去的機會也不會回來。你仍需要處理往後的生活。",
      "question": "那句道歉最希望替你確認甚麼？",
      "deeperQuestion": "如果等不到，你能從哪裡開始替自己拿回一點力量？",
      "twist": ""
    },
    "id": "ponder-v5-solo-043",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "When curiosity turns competitive",
    "scenario": "Searching for inspiration turns into comparison and leaves you less able to act.",
    "question": "How would you change the scope or timing of the search?",
    "deeperQuestion": "Which content invites action, and which invites proving yourself?",
    "twist": "",
    "zh": {
      "title": "當好奇心變成比較",
      "scenario": "你本來上網找靈感，半小時後卻只覺得別人都比自己快。資訊沒有幫你行動，反而讓你停住。",
      "question": "你會怎樣改變這次搜尋的範圍或時間？",
      "deeperQuestion": "什麼內容讓你想開始，什麼內容只讓你想證明？",
      "twist": ""
    },
    "id": "ponder-v5-solo-044",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Stability as a choice",
    "scenario": "You enjoy stable work while peers pursue dramatic changes. Contentment starts feeling like insufficient ambition.",
    "question": "How would you distinguish contentment from fear of change?",
    "deeperQuestion": "What could chosen stability make room for?",
    "twist": "",
    "zh": {
      "title": "安穩也可以是選擇",
      "scenario": "你喜歡現在穩定的工作，身邊的人卻不停談轉職和創業。你開始懷疑滿足是不是不夠上進。",
      "question": "你會怎樣分辨滿足和害怕改變？",
      "deeperQuestion": "如果穩定是你主動選的，它能為生活騰出甚麼？",
      "twist": ""
    },
    "id": "ponder-v5-solo-045",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "A promise after excitement fades",
    "scenario": "You committed while excited. The actual work appeals less, but others now rely on you.",
    "question": "Would you finish, hand over or renegotiate, and how?",
    "deeperQuestion": "Must responsibility mean staying trapped until the end?",
    "twist": "",
    "zh": {
      "title": "一個失去興奮的承諾",
      "scenario": "你答應參與一個計劃，當時很興奮。現在知道實際工作後沒那麼想做，但別人已依賴你的部分。",
      "question": "你會怎樣完成、交接或重新協商？",
      "deeperQuestion": "負責任是否一定要把自己困到最後？",
      "twist": ""
    },
    "id": "ponder-v5-solo-046",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "A sacrifice you do not want praised",
    "scenario": "People praise your self-sacrifice just as you realise it is hurting you.",
    "question": "How would you respond to that praise?",
    "deeperQuestion": "What strength would you rather they appreciate?",
    "twist": "",
    "zh": {
      "title": "不想被稱讚的犧牲",
      "scenario": "別人稱讚你總把自己放最後，你卻開始覺得這不是優點。這份稱讚反而讓你更難改變。",
      "question": "你想怎樣回應這種稱讚？",
      "deeperQuestion": "你希望別人改為欣賞你的哪一種能力？",
      "twist": ""
    },
    "id": "ponder-v5-solo-047",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "A plan with empty space",
    "scenario": "A fully planned six months leaves no room for a welcome opportunity.",
    "question": "What would you remove to leave room for the unexpected?",
    "deeperQuestion": "Does a full schedule mean security or being needed to you?",
    "twist": "",
    "zh": {
      "title": "一份保留空間的計劃",
      "scenario": "你把半年安排得很完整，突然出現一個很想抓住的小機會。行程沒有任何空白，連好事也變成壓力。",
      "question": "你會拿掉甚麼，讓未知也有位置？",
      "deeperQuestion": "安排得滿，對你代表安心還是被需要？",
      "twist": ""
    },
    "id": "ponder-v5-solo-048",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Yourself after a mistake",
    "scenario": "You repair a mistake but keep replaying it, as if continued distress proves accountability.",
    "question": "What action would count as taking responsibility?",
    "deeperQuestion": "Does ending self-blame really mean not caring?",
    "twist": "",
    "zh": {
      "title": "做錯之後的自己",
      "scenario": "你犯了一個可以補救的錯，已道歉和修正，腦裡卻仍不停重播。你像是在用難過證明自己有反省。",
      "question": "怎樣的行動已足夠表示你有負責？",
      "deeperQuestion": "停止責怪自己，是否真的等於不在乎？",
      "twist": ""
    },
    "id": "ponder-v5-solo-049",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "A declined kindness",
    "scenario": "Someone declines your help, and it unexpectedly feels like you are not needed.",
    "question": "How would you separate the declined offer from your worth?",
    "deeperQuestion": "Do you sometimes use helping to confirm your place in a relationship?",
    "twist": "",
    "zh": {
      "title": "被拒絕的一次善意",
      "scenario": "你主動幫忙，對方說不用。你知道他有權拒絕，仍突然覺得自己不被需要。",
      "question": "你會怎樣把被拒絕的提議，和自己的價值分開？",
      "deeperQuestion": "你是否有時透過幫忙，確認自己在關係裡的位置？",
      "twist": ""
    },
    "id": "ponder-v5-solo-050",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Progress without display",
    "scenario": "You rest, decline and speak honestly better, but none of it is visible on a résumé.",
    "question": "What small example would help you recognise this change?",
    "deeperQuestion": "Which quiet forms of progress do you overlook?",
    "twist": "",
    "zh": {
      "title": "一條不用展示的進步",
      "scenario": "你最近更能休息、拒絕和坦白，但這些改變沒有照片，也不好寫在履歷上。你幾乎忘記自己已經不同。",
      "question": "你會用哪一件具體小事記住這份改變？",
      "deeperQuestion": "哪些進步因為太安靜，最容易被你忽略？",
      "twist": ""
    },
    "id": "ponder-v5-solo-051",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "A private boundary",
    "scenario": "A useful opportunity requires something you do not quite believe in. Others may never know, but you will.",
    "question": "What question would guide your decision?",
    "deeperQuestion": "Which costs concern your own view of yourself rather than reputation?",
    "twist": "",
    "zh": {
      "title": "只有自己知道的底線",
      "scenario": "一個機會很有利，但需要你做一件不太認同的事。別人可能永遠不知道，你卻會記得。",
      "question": "你會問自己哪一個問題來作決定？",
      "deeperQuestion": "哪些代價不是別人的評價，而是你怎樣看自己？",
      "twist": ""
    },
    "id": "ponder-v5-solo-052",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Letting go of control",
    "scenario": "Preparation is complete and the outcome belongs to others. Checking messages cannot move it forward.",
    "question": "Where would you return a small part of your attention while waiting?",
    "deeperQuestion": "Does looking away feel like not trying hard enough?",
    "twist": "",
    "zh": {
      "title": "放下最後的控制",
      "scenario": "你已完成能做的準備，結果要等別人決定。你不斷檢查訊息，卻沒有任何能推進的事。",
      "question": "你會把等待期間的一小段注意力還給甚麼？",
      "deeperQuestion": "不再盯著結果，是否讓你覺得自己不夠努力？",
      "twist": ""
    },
    "id": "ponder-v5-solo-053",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "An ordinary happiness",
    "scenario": "Your happiest moments often involve breakfast, walks and casual conversation rather than major achievements.",
    "question": "How would you make those moments more frequent?",
    "deeperQuestion": "Do you undervalue happiness because it is accessible?",
    "twist": "",
    "zh": {
      "title": "一份普通的幸福",
      "scenario": "你發現最開心的時刻常是吃早餐、散步和跟人亂聊，跟一直追求的大成就沒有直接關係。",
      "question": "你會怎樣讓這些時刻更常發生？",
      "deeperQuestion": "你是否把容易得到的快樂看得太輕？",
      "twist": ""
    },
    "id": "ponder-v5-solo-054",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Not understanding yourself yet",
    "scenario": "You cannot describe life in five years but know what you no longer want now.",
    "question": "What small decision could that incomplete clarity support?",
    "deeperQuestion": "Must you know the destination before beginning?",
    "twist": "",
    "zh": {
      "title": "不必立刻懂自己",
      "scenario": "有人問你五年後想怎樣，你暫時沒有答案，但知道現在不想再怎樣過。這種清楚很不完整。",
      "question": "你能根據這份不完整的清楚，作哪一個小決定？",
      "deeperQuestion": "不知道終點，是否就不能開始走？",
      "twist": ""
    },
    "id": "ponder-v5-solo-055",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "The hidden audience",
    "scenario": "You rehearse explaining a choice to someone barely involved in your daily life.",
    "question": "Why does their imagined opinion occupy so much space?",
    "deeperQuestion": "Would centring those who live with the outcome change your answer?",
    "twist": "",
    "zh": {
      "title": "選擇的隱藏觀眾",
      "scenario": "你正考慮一個選擇，腦裡一直演練怎樣向某個人交代。那個人其實沒有參與你的日常。",
      "question": "他的想法為甚麼仍佔這麼大的位置？",
      "deeperQuestion": "如果把真正會承擔結果的人放到前面，答案會變嗎？",
      "twist": ""
    },
    "id": "ponder-v5-solo-056",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "An evening without replies",
    "scenario": "No urgent duty prevents an offline evening, but possible disappointment keeps you reachable.",
    "question": "How would you arrange a reassuring offline evening?",
    "deeperQuestion": "Has constant availability become a condition of being liked for you?",
    "twist": "",
    "zh": {
      "title": "一個可以不回覆的晚上",
      "scenario": "你想關掉訊息休息一晚，沒有緊急工作，卻擔心別人找不到你會失望。你已很久沒有完整離線。",
      "question": "你會怎樣安排一次讓自己放心的離線？",
      "deeperQuestion": "隨時找得到你，是否已被你當成值得被喜歡的條件？",
      "twist": ""
    },
    "id": "ponder-v5-solo-057",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Not a renovation project",
    "scenario": "Your improvement list is long; what you want to preserve barely appears.",
    "question": "Which three present qualities or habits would you keep?",
    "deeperQuestion": "Can growth begin with appreciation rather than rejection?",
    "twist": "",
    "zh": {
      "title": "不把自己當計劃改造",
      "scenario": "你列了很多要改善的地方，卻很少寫想保留的部分。生活像永遠在修一個不夠好的自己。",
      "question": "你想保留哪三個現在已經有的特質或習慣？",
      "deeperQuestion": "成長可不可以從欣賞開始，而不只從嫌棄開始？",
      "twist": ""
    },
    "id": "ponder-v5-solo-058",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "A promise to yourself",
    "scenario": "Promises to others hold firm while promises to yourself repeatedly disappear.",
    "question": "Which small, achievable promise to yourself would you keep first?",
    "deeperQuestion": "Why are your own expectations easier to cancel?",
    "twist": "",
    "zh": {
      "title": "一句想對自己守的話",
      "scenario": "你很重視答應別人的事，答應自己休息或學習卻常被擠走。自己的承諾總排在最後。",
      "question": "你會先守住哪一個小到做得到的承諾？",
      "deeperQuestion": "為甚麼自己的期待比較容易被取消？",
      "twist": ""
    },
    "id": "ponder-v5-solo-059",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Leaving without failure",
    "scenario": "Something is going well, but leaving would make room for another priority. You wait for a bad reason to justify it.",
    "question": "What could a good ending look like?",
    "deeperQuestion": "Must you prove staying is bad before leaving?",
    "twist": "",
    "zh": {
      "title": "一個沒有失敗的離開",
      "scenario": "一件事仍做得不錯，你卻想結束，好把時間交給另一件重要的事。你一直等到有壞理由才敢離開。",
      "question": "好好完成一段，對你可以是甚麼樣子？",
      "deeperQuestion": "離開是否一定要先證明留下不好？",
      "twist": ""
    },
    "id": "ponder-v5-solo-060",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Someone else's urgency",
    "scenario": "Someone demands work tonight, but the deadline is their preference rather than a real constraint.",
    "question": "How would you clarify the need and offer a realistic time?",
    "deeperQuestion": "Does urgency trigger responsibility or fear of blame first?",
    "twist": "",
    "zh": {
      "title": "別人的急不一定是你的急",
      "scenario": "對方說事情很急，希望你今晚完成，但你發現期限只是他自己臨時訂的。你本來有重要安排。",
      "question": "你會怎樣確認需要，再提出自己能做到的時間？",
      "deeperQuestion": "你聽到「很急」時，最先被觸動的是責任還是害怕被怪？",
      "twist": ""
    },
    "id": "ponder-v5-solo-061",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Room for average work",
    "scenario": "Several tasks compete, and only one can be excellent while others are sufficient.",
    "question": "Which task deserves the highest standard, and why?",
    "deeperQuestion": "Is good enough a practical judgement or an uncomfortable verdict?",
    "twist": "",
    "zh": {
      "title": "給普通表現的位置",
      "scenario": "你有幾件事同時要做，只能選一件做到很好，其他做到足夠。你卻習慣每件都用最高標準。",
      "question": "你會把最高標準放在哪一件，為甚麼？",
      "deeperQuestion": "足夠好對你是實際判斷，還是難以接受的評語？",
      "twist": ""
    },
    "id": "ponder-v5-solo-062",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Different life timelines",
    "scenario": "Friends reach visible milestones while your life develops differently. Satisfaction fades after gatherings.",
    "question": "Which real need could help you reorient yourself?",
    "deeperQuestion": "Being behind assumes a shared destination. Do you have one?",
    "twist": "",
    "zh": {
      "title": "沒有共同進度的朋友",
      "scenario": "朋友開始買房、結婚或升職，你的生活在另一個方向發展。你本來滿意，聚會後卻覺得落後。",
      "question": "你會用哪一件自己的真實需要重新定位？",
      "deeperQuestion": "落後必須有同一個終點，你們真的在去同一處嗎？",
      "twist": ""
    },
    "id": "ponder-v5-solo-063",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "A fear you do not want to inherit",
    "scenario": "Your fears about money or failure echo family lessons from different circumstances.",
    "question": "Which lessons still help, and which need rechecking?",
    "deeperQuestion": "Must respecting their experience mean inheriting their fear?",
    "twist": "",
    "zh": {
      "title": "不想繼承的恐懼",
      "scenario": "你發現自己對金錢或失敗的擔心，很像家人常說的話。他們的經驗有道理，但你的處境已不同。",
      "question": "哪些提醒仍有用，哪些需要重新驗證？",
      "deeperQuestion": "尊重家人的經驗，是否一定要照著害怕？",
      "twist": ""
    },
    "id": "ponder-v5-solo-064",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Standing through misunderstanding",
    "scenario": "Someone misreads an important decision and remains unconvinced after your explanation.",
    "question": "How much more would you explain, and where would attention go next?",
    "deeperQuestion": "What grounds you when not everyone understands?",
    "twist": "",
    "zh": {
      "title": "被誤會也能站穩",
      "scenario": "你作了一個對自己重要的決定，有人誤會你的動機。解釋過一次後，他仍不相信。",
      "question": "你會再說多少，然後把注意力放回哪裡？",
      "deeperQuestion": "不是每個人都理解你時，你靠甚麼站穩？",
      "twist": ""
    },
    "id": "ponder-v5-solo-065",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Your own receipt",
    "scenario": "Write a private receipt for time, courage or money invested in yourself, without listing only outcomes.",
    "question": "Which investment do you most easily forget?",
    "deeperQuestion": "Would seeing the cost soften your judgement of your pace?",
    "twist": "",
    "zh": {
      "title": "一張自己的收據",
      "scenario": "你可以寫一張不用給別人看的收據，記下今年為自己付出的時間、勇氣或金錢。不能只寫成果。",
      "question": "哪一筆你最容易忘記自己曾經付過？",
      "deeperQuestion": "看見成本之後，你會對自己的速度溫柔一點嗎？",
      "twist": ""
    },
    "id": "ponder-v5-solo-066",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Escape or attraction?",
    "scenario": "A new place looks lighter in your imagination, though some problems would travel with you.",
    "question": "What three things do you actually want to move toward?",
    "deeperQuestion": "Which changes could begin without moving?",
    "twist": "",
    "zh": {
      "title": "想逃離還是想靠近",
      "scenario": "你很想搬到新地方，想像裡一切都比較輕。你知道有些問題會跟著自己一起搬。",
      "question": "你真正想靠近的三件事是甚麼？",
      "deeperQuestion": "有哪些改變，即使不搬也可以先開始？",
      "twist": ""
    },
    "id": "ponder-v5-solo-067",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "A skill beyond earning",
    "scenario": "People suggest turning your listening skill into paid work. You fear losing its natural place in your life.",
    "question": "Where would you want this ability to live?",
    "deeperQuestion": "Must every valuable ability become income?",
    "twist": "",
    "zh": {
      "title": "一個不必收費的能力",
      "scenario": "你很會安慰人，朋友說應該把它變成工作。你卻怕一旦成為職責，就失去原本自然的關心。",
      "question": "你想讓這個能力在哪裡發揮？",
      "deeperQuestion": "有價值的能力，是否都需要變成收入？",
      "twist": ""
    },
    "id": "ponder-v5-solo-068",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Truth inside tiredness",
    "scenario": "Exhaustion makes you want to quit everything; rest restores willingness.",
    "question": "How would you care for your state before making a major decision?",
    "deeperQuestion": "Which messages of fatigue need hearing without immediate action?",
    "twist": "",
    "zh": {
      "title": "疲倦裡的真心話",
      "scenario": "很累的時候，你想放棄一切；休息後卻又願意繼續。你不確定哪個才是真正的自己。",
      "question": "你會怎樣先照顧狀態，再作重要決定？",
      "deeperQuestion": "疲倦的聲音有哪些需要被聽，哪些不必立即照做？",
      "twist": ""
    },
    "id": "ponder-v5-solo-069",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Beyond being useful",
    "scenario": "Unable to help others for a while, you struggle to visit friends without bringing some usefulness.",
    "question": "How could you try simply showing up and being together?",
    "deeperQuestion": "Could you believe someone enjoys you without needing your help?",
    "twist": "",
    "zh": {
      "title": "被需要以外的關係",
      "scenario": "你暫時沒有能力幫別人，才發現自己不知道怎樣只是去見朋友。你總想帶點用處才安心。",
      "question": "你可以怎樣試一次只是出現、一起待著？",
      "deeperQuestion": "如果有人只喜歡跟你相處，你能相信嗎？",
      "twist": ""
    },
    "id": "ponder-v5-solo-070",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "A list you may revise",
    "scenario": "Your annual list remains unfinished, but unexpected events demanded real care and effort.",
    "question": "What would you remove, and what unlisted effort would you add?",
    "deeperQuestion": "Should plans serve life or should life validate plans?",
    "twist": "",
    "zh": {
      "title": "一個可以不完成的清單",
      "scenario": "年初清單還有很多未完成，但你今年遇到一些原本沒預料的事，也照顧了很多當時不存在的需要。",
      "question": "你會刪掉哪項，補記哪項原本沒列出的事？",
      "deeperQuestion": "計劃應該服務生活，還是生活要證明計劃沒錯？",
      "twist": ""
    },
    "id": "ponder-v5-solo-071",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "No longer discounting yourself",
    "scenario": "You minimise your efforts until others assume they cost nothing.",
    "question": "How would you state the time and difficulty of an effort plainly?",
    "deeperQuestion": "Why does acknowledging effort feel uncomfortable?",
    "twist": "",
    "zh": {
      "title": "一份不再接受的折扣",
      "scenario": "你總說自己的付出只是小事，別人也開始當作不費力。你不是想邀功，只是不想繼續被低估。",
      "question": "你會怎樣客觀說明一次付出的時間和難度？",
      "deeperQuestion": "承認自己付出了很多，為甚麼會讓你不自在？",
      "twist": ""
    },
    "id": "ponder-v5-solo-072",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "The course you want",
    "scenario": "A free course could improve your résumé or satisfy a longstanding curiosity. No career move is urgent.",
    "question": "Which would you choose, and which benefit would you forgo?",
    "deeperQuestion": "Do you postpone curiosity until all practical things are done?",
    "twist": "",
    "zh": {
      "title": "真正想學的課",
      "scenario": "你可以免費上一門課，一門能增加履歷價值，一門只是讓你長期好奇。你目前沒有急迫的轉職需要。",
      "question": "你會選哪門，願意放棄哪種收穫？",
      "deeperQuestion": "你是否常把好奇推遲到所有實用事情做完之後？",
      "twist": ""
    },
    "id": "ponder-v5-solo-073",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Redefining success",
    "scenario": "Half your old definition of success still matters; half sounds borrowed.",
    "question": "Which sentence would you remove and which add?",
    "deeperQuestion": "What would the new definition change next week?",
    "twist": "",
    "zh": {
      "title": "可以被改寫的成功",
      "scenario": "五年前你寫過成功的定義，現在讀來有一半仍重要，一半像別人的願望。你不必一次全部推翻。",
      "question": "你會先刪哪一句，補哪一句？",
      "deeperQuestion": "這個新定義會改變你下星期哪一個安排？",
      "twist": ""
    },
    "id": "ponder-v5-solo-074",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Rest without permission",
    "scenario": "Necessary work is done, but you wait for permission to stop that nobody will give.",
    "question": "What personal standard would make today enough?",
    "deeperQuestion": "Whom have you given the right to let you stop?",
    "twist": "",
    "zh": {
      "title": "一個沒有人批准的休息日",
      "scenario": "你已完成必要工作，卻仍等著有人說今天可以停了。沒有人會來批准，你也不敢先走。",
      "question": "你會用甚麼自己的標準宣布今天足夠？",
      "deeperQuestion": "你把停止的權利交給誰多久了？",
      "twist": ""
    },
    "id": "ponder-v5-solo-075",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Stepping back from another story",
    "scenario": "A successful person's method appeals until you notice different resources and responsibilities.",
    "question": "Which principle would you keep and which method adapt?",
    "deeperQuestion": "What distinguishes learning from copying?",
    "twist": "",
    "zh": {
      "title": "從別人的故事退後一步",
      "scenario": "你聽了別人的成功方法，很想完全照做。細看才發現，他的資源、責任和承受力跟你不同。",
      "question": "你會留下哪個原則，改掉哪個做法？",
      "deeperQuestion": "借鏡和複製，對你差在哪裡？",
      "twist": ""
    },
    "id": "ponder-v5-solo-076",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "An answer you stop chasing",
    "scenario": "Long after a relationship ends, you still want their explanation. Asking may clarify or reopen pain.",
    "question": "Do you need information or permission to stop waiting?",
    "deeperQuestion": "Which part of closure can you choose yourself?",
    "twist": "",
    "zh": {
      "title": "一個不再追究的答案",
      "scenario": "一段關係結束很久，你仍想知道對方當時真正怎樣想。再問一次可能有答案，也可能重新打開傷口。",
      "question": "你現在需要的是新資訊，還是容許自己結束等待？",
      "deeperQuestion": "哪一部分結束，可以由你自己決定？",
      "twist": ""
    },
    "id": "ponder-v5-solo-077",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Space for your future self",
    "scenario": "A secure three-year plan leaves little room to change. Flexibility costs certainty.",
    "question": "Where would you deliberately preserve options?",
    "deeperQuestion": "Do you trust that your future self may want different things?",
    "twist": "",
    "zh": {
      "title": "給未來自己的空間",
      "scenario": "你可以把未來三年安排得很穩妥，但幾乎沒有改變方向的餘地。留白則意味少一點確定。",
      "question": "你會在哪一部分刻意留下選擇？",
      "deeperQuestion": "你相信未來的自己可能想要不同的東西嗎？",
      "twist": ""
    },
    "id": "ponder-v5-solo-078",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Not always beating your past",
    "scenario": "Changed circumstances mean you cannot match a former peak.",
    "question": "How would you set a standard suited to your current life?",
    "deeperQuestion": "Should past achievement encourage you or permanently demand from you?",
    "twist": "",
    "zh": {
      "title": "不是每次都要贏過以前",
      "scenario": "你曾經在某件事做到很好，現在生活不同，無法維持同樣水平。每次做都拿來跟以前比較。",
      "question": "你會怎樣設定符合現在生活的標準？",
      "deeperQuestion": "以前的成績應該鼓勵你，還是永遠要求你？",
      "twist": ""
    },
    "id": "ponder-v5-solo-079",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "A cost you choose",
    "scenario": "Freedom may bring instability; security may bring less variety. Seeking a regret-free path prevents choosing.",
    "question": "Which inconvenience would you willingly live with?",
    "deeperQuestion": "Does choosing include accepting other good things left behind?",
    "twist": "",
    "zh": {
      "title": "一個願意承擔的代價",
      "scenario": "每個想要的生活都有不方便：自由可能不穩，安穩可能少變化。你想找一條完全不後悔的路，卻一直沒選。",
      "question": "哪一種不方便，你最願意長期承擔？",
      "deeperQuestion": "選擇是否也包括接受自己放棄了別的好東西？",
      "twist": ""
    },
    "id": "ponder-v5-solo-080",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Liking without justification",
    "scenario": "You enjoy something harmless and affordable that others call childish, then rush to justify its usefulness.",
    "question": "How could you simply say you enjoy it?",
    "deeperQuestion": "Which pleasures make you feel most defensive?",
    "twist": "",
    "zh": {
      "title": "不為合理而喜歡",
      "scenario": "你喜歡一件別人覺得幼稚的事，沒有傷害誰，也負擔得起。每次被問，你卻急著找實用理由。",
      "question": "你能怎樣只說「因為我喜歡」？",
      "deeperQuestion": "哪種快樂最容易讓你覺得需要辯護？",
      "twist": ""
    },
    "id": "ponder-v5-solo-081",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Not ready to share",
    "scenario": "Sharing an experience might help others, but you are not ready despite encouragement.",
    "question": "How would you choose timing, audience and scope?",
    "deeperQuestion": "Should possible benefit to others outweigh your readiness?",
    "twist": "",
    "zh": {
      "title": "還沒準備好的分享",
      "scenario": "你有一段重要經歷，知道分享可能幫到別人，但自己還沒整理好。有人鼓勵你勇敢說出來。",
      "question": "你會怎樣決定分享的時間、對象和範圍？",
      "deeperQuestion": "幫助別人的可能，是否應該壓過自己的準備程度？",
      "twist": ""
    },
    "id": "ponder-v5-solo-082",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "A worthwhile inconvenience",
    "scenario": "A slow habit gives life a personal rhythm even though faster alternatives exist.",
    "question": "Which inconvenience would you preserve, and why?",
    "deeperQuestion": "Does time saved by efficiency actually return to you?",
    "twist": "",
    "zh": {
      "title": "一件值得保留的麻煩",
      "scenario": "某個習慣很花時間，例如煮飯、寫信或慢慢走路，但它讓你覺得生活有自己的節奏。更快的方法一直存在。",
      "question": "你想保留哪一種不方便，為甚麼？",
      "deeperQuestion": "效率省下的時間，通常真的交回你手上嗎？",
      "twist": ""
    },
    "id": "ponder-v5-solo-083",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "An invitation to make",
    "scenario": "You wait to be invited because initiating would reveal how much you want connection.",
    "question": "What small invitation could you make without needing a guaranteed yes?",
    "deeperQuestion": "Could one refusal become a mistaken verdict on your worth?",
    "twist": "",
    "zh": {
      "title": "不想再等待的邀請",
      "scenario": "你一直希望有人邀你做某件事，因為自己開口像承認很需要。你其實已想到可以找誰。",
      "question": "你會怎樣發出一個不必保證成功的小邀請？",
      "deeperQuestion": "被拒絕一次，會不會被你誤讀成自己不值得被選？",
      "twist": ""
    },
    "id": "ponder-v5-solo-084",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "An account without comparison",
    "scenario": "You can see only your own savings, not anyone else's. Real responsibilities remain.",
    "question": "Which practical needs would define enough?",
    "deeperQuestion": "How much of your target comes from need versus fear of falling behind?",
    "twist": "",
    "zh": {
      "title": "一個不必比較的帳戶",
      "scenario": "你只能看到自己的儲蓄進度，看不到任何人的數字。你仍要負責生活，但少了比較的參照。",
      "question": "你會用哪些實際需要設定「足夠」？",
      "deeperQuestion": "你現在的目標，有多少是需要，有多少是怕落後？",
      "twist": ""
    },
    "id": "ponder-v5-solo-085",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Caring for an imperfect self",
    "scenario": "You must care for someone exactly like you for a week, without fixing them.",
    "question": "What pressure would you reduce and what support add?",
    "deeperQuestion": "Why have you not offered yourself that care yet?",
    "twist": "",
    "zh": {
      "title": "照顧一個不完美的自己",
      "scenario": "如果你要照顧一個跟自己一模一樣的人，他同樣拖延、害怕，也同樣努力。你不能改造他，只能陪他過一週。",
      "question": "你會先減少哪一種壓力，增加哪一種支持？",
      "deeperQuestion": "你為甚麼還沒把這種照顧給自己？",
      "twist": ""
    },
    "id": "ponder-v5-solo-086",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "The future will not suddenly begin",
    "scenario": "You postpone living until work, savings or readiness reach a threshold that keeps moving.",
    "question": "What part of that life could have ten minutes today?",
    "deeperQuestion": "Does the beginning you await have an actual date?",
    "twist": "",
    "zh": {
      "title": "未來不會突然開始",
      "scenario": "你常想等忙完、存夠、準備好才開始真正生活。每一個條件完成後，總會再多一個。",
      "question": "哪一件想過的生活，可以今天先有十分鐘？",
      "deeperQuestion": "你一直等待的開始，有沒有一個真正的日期？",
      "twist": ""
    },
    "id": "ponder-v5-solo-087",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Proof you no longer need",
    "scenario": "You keep evidence of effort against an imagined accusation that you did not try enough.",
    "question": "To whom are you proving what?",
    "deeperQuestion": "Which records could go if you kept only what helps you live?",
    "twist": "",
    "zh": {
      "title": "一份不再需要的證明",
      "scenario": "你保存很多能證明自己努力過的紀錄，怕有一天別人說你不夠用心。其實沒有人正在審查你。",
      "question": "你最想向誰證明，證明甚麼？",
      "deeperQuestion": "如果只保留能幫助生活的紀錄，哪些可以放下？",
      "twist": ""
    },
    "id": "ponder-v5-solo-088",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Kindness has limits",
    "scenario": "Many causes matter to you, but your capacity cannot meet all of them.",
    "question": "Which would you support consistently, and how would you release the rest for now?",
    "deeperQuestion": "Can limited kindness still be sincere?",
    "twist": "",
    "zh": {
      "title": "自己的善意也有限",
      "scenario": "你想關心很多事情，卻沒有力氣對每件都作出行動。不回應時，又覺得自己不夠好。",
      "question": "你會選哪一件持續投入，其他怎樣暫時放下？",
      "deeperQuestion": "有限的善意，是否仍然是真誠的善意？",
      "twist": ""
    },
    "id": "ponder-v5-solo-089",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Changing before a crisis",
    "scenario": "Life is tolerable but steadily draining. You feel change requires a major problem.",
    "question": "What small arrangement could change before you reach a breaking point?",
    "deeperQuestion": "Is wanting a better life already a sufficient reason?",
    "twist": "",
    "zh": {
      "title": "不靠危機才改變",
      "scenario": "現在的生活沒有壞到不能過，只是慢慢失去精神。你總覺得沒有大問題，就不應該調整。",
      "question": "你會先改哪一個小安排，不必等到撐不住？",
      "deeperQuestion": "想過得更好，本身是否已是一個理由？",
      "twist": ""
    },
    "id": "ponder-v5-solo-090",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "An ordinary ending you accept",
    "scenario": "A project ends with moderate results, learning and connections rather than triumph or failure.",
    "question": "How would you judge whether it was worthwhile?",
    "deeperQuestion": "Do only the best outcomes count as effort well spent for you?",
    "twist": "",
    "zh": {
      "title": "一個你願意接受的普通結局",
      "scenario": "假如某個計劃最後只做到中等，沒有失敗，也沒有驚人成果。過程裡你學到東西，認識了人。",
      "question": "你會如何決定它是否值得？",
      "deeperQuestion": "你是否只給最好的結局頒發「沒有白做」的資格？",
      "twist": ""
    },
    "id": "ponder-v5-solo-091",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "A feeling is not a verdict",
    "scenario": "You feel like a failure one day and lighter the next, though circumstances are unchanged.",
    "question": "How would you hear a feeling without treating it as the whole truth?",
    "deeperQuestion": "Which concrete facts could ground you?",
    "twist": "",
    "zh": {
      "title": "不把情緒當判決",
      "scenario": "你某天覺得自己很失敗，第二天事情沒變，心情卻輕了一點。兩天的感受都真實，結論卻不同。",
      "question": "你會怎樣聽情緒提供的訊息，而不把它當全部事實？",
      "deeperQuestion": "你需要哪些具體事實幫自己站穩？",
      "twist": ""
    },
    "id": "ponder-v5-solo-092",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "A private honest sentence",
    "scenario": "Write one private sentence about what you actually want or do not want, without using should.",
    "question": "Which sentence are you most hesitant to write?",
    "deeperQuestion": "Does admitting it require immediate action?",
    "twist": "",
    "zh": {
      "title": "一段只對自己誠實的話",
      "scenario": "你可以寫一句不必給任何人看的真話，不能寫應該，只能寫現在真的想要或不想要的事。",
      "question": "你最猶豫寫下哪一句？",
      "deeperQuestion": "承認它，是否真的代表你必須立即照做？",
      "twist": ""
    },
    "id": "ponder-v5-solo-093",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Keeping a little margin",
    "scenario": "Extra work would use every spare hour. Those hours have no fixed purpose but keep you steady.",
    "question": "How would you value that margin?",
    "deeperQuestion": "Can unscheduled time quietly care for you?",
    "twist": "",
    "zh": {
      "title": "把一點餘裕留下",
      "scenario": "你有機會多接一份工作，收入會增加，卻會用盡目前所有空檔。那些空檔沒有固定用途，但讓你比較不慌。",
      "question": "你會怎樣替這份餘裕估價？",
      "deeperQuestion": "沒有排定用途的時間，是否也在默默照顧你？",
      "twist": ""
    },
    "id": "ponder-v5-solo-094",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "A question to revisit",
    "scenario": "A life you once rejected now interests you. Changing your mind feels like admitting an error.",
    "question": "How would you explore again without dismissing your past view?",
    "deeperQuestion": "Could a changed answer simply reflect more experience?",
    "twist": "",
    "zh": {
      "title": "一個願意重新問的問題",
      "scenario": "你曾很肯定自己不要某種生活，幾年後卻開始好奇。你怕改口像承認以前說錯。",
      "question": "你會怎樣重新探索，而不急著否定以前？",
      "deeperQuestion": "答案改變，是否也可能只是你得到更多經驗？",
      "twist": ""
    },
    "id": "ponder-v5-solo-095",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "The person your choices build",
    "scenario": "Two reasonable choices offer external gain or alignment with the way you want to live.",
    "question": "How would you choose while acknowledging value in the alternative?",
    "deeperQuestion": "Repeated for a year, which version of you would this choice develop?",
    "twist": "",
    "zh": {
      "title": "留下你想成為的人",
      "scenario": "你有兩個都合理的選擇，一個帶來較多外在收穫，另一個更符合你想練習的做人方式。沒有誰能替你打分。",
      "question": "你會怎樣作決定，並承認沒有選的那邊也有價值？",
      "deeperQuestion": "重複這個選擇一年，你會更像哪一種自己？",
      "twist": ""
    },
    "id": "ponder-v5-solo-096",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Redistributing attention",
    "scenario": "Criticism stays vivid while sincere appreciation fades, though both happened.",
    "question": "What concrete fact could restore the neglected side?",
    "deeperQuestion": "Do you treat criticism as information or as inherently more truthful than praise?",
    "twist": "",
    "zh": {
      "title": "重新分配注意力",
      "scenario": "你記得很多別人對你的負面評語，卻很難想起真心的肯定。兩種都曾發生，只是停留時間不同。",
      "question": "你會找哪一件具體事實，補回被忽略的一邊？",
      "deeperQuestion": "你把批評當資訊，還是當比讚賞更可靠的真相？",
      "twist": ""
    },
    "id": "ponder-v5-solo-097",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "A problem you can share",
    "scenario": "You delay asking for offered help until you can present the problem neatly, perhaps until help is unnecessary.",
    "question": "How could you begin with an incomplete explanation?",
    "deeperQuestion": "Do you feel you must appear capable even while asking for help?",
    "twist": "",
    "zh": {
      "title": "一個可以共享的難題",
      "scenario": "你卡在一件事很久，有人願意幫忙，你卻想等自己整理好才開口。等到整理好，可能也不再需要幫助。",
      "question": "你能怎樣用不完整的話開始？",
      "deeperQuestion": "你是否覺得連求助也要表現得很有能力？",
      "twist": ""
    },
    "id": "ponder-v5-solo-098",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "An honest unpopular answer",
    "scenario": "Everyone expects you to welcome an opportunity, but you do not feel drawn to it.",
    "question": "How much private time would you give yourself before answering?",
    "deeperQuestion": "How do you hear your quieter answer amid others' excitement?",
    "twist": "",
    "zh": {
      "title": "一個不受歡迎但誠實的答案",
      "scenario": "大家期待你對一個機會很興奮，你卻沒有。你怕讓人失望，差點替自己答應了。",
      "question": "你會先給自己多久，才對外回答？",
      "deeperQuestion": "別人的期待很熱烈時，你怎樣聽見自己的小聲答案？",
      "twist": ""
    },
    "id": "ponder-v5-solo-099",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "A thank-you from next month",
    "scenario": "Imagine next month's self thanking you for one small action today that made life slightly easier.",
    "question": "What would you hope it was, and what step could happen today?",
    "deeperQuestion": "Why is that step worth taking even unseen?",
    "twist": "",
    "zh": {
      "title": "下個月想謝謝今天什麼",
      "scenario": "想像下個月的你寄來一句謝謝，感謝今天一個很小但真實的行動。它不必改變人生，只需要讓生活好過一點。",
      "question": "你希望那件事是甚麼，今天能做哪一步？",
      "deeperQuestion": "這一步為甚麼值得做，即使沒有人看見？",
      "twist": ""
    },
    "id": "ponder-v5-solo-100",
    "level": "deeper",
    "emoji": "🌿"
  }
];
