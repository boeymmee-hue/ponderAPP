export const categories = ['Couple', 'Family', 'Party', 'Solo'] as const;
export type Category = typeof categories[number];
export type GroupSize = 'small' | 'medium' | 'large';
export interface CardText { title: string; scenario: string; question: string; twist: string; deeperQuestion: string; }
export interface Question extends CardText { id: string; category: Category; emoji: string; zh: CardText; groupSize?: GroupSize; legacy?: boolean; author?: string; }
// Connection-first edition: 100 cards per category, including the 12 approved originals.
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
  }
];
