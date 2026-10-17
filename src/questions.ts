import { girlsQuestions } from './girls';
export const categories = ['Couple', 'Family', 'Party', 'Solo', 'Crush', 'Girls'] as const;
export type Category = typeof categories[number];
export type GroupSize = 'small' | 'medium' | 'large';
export interface CardText { title: string; scenario: string; question: string; twist: string; deeperQuestion: string; }
export type Level = 'classic' | 'deeper';
export interface Question extends CardText { level?: Level; id: string; category: Category; emoji: string; zh: CardText; groupSize?: GroupSize; legacy?: boolean; author?: string; }
// 100 original + 100 deeper cards per category. Existing share IDs remain unchanged.
export const questions: Question[] = [
  ...girlsQuestions,
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
    "deeperQuestion": "How much financial security would you want before feeling comfortable spending some of your savings?",
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
    "question": "Would you keep the surprise or ask about part of the plan first? What would you most want to know?",
    "twist": "",
    "deeperQuestion": "What travel detail do you always need in advance?",
    "zh": {
      "title": "約會盲盒",
      "scenario": "你們抽到一個免費約會盲盒，出門前只會知道要穿運動鞋。伴侶很興奮，你卻習慣先知道行程，才放鬆得到。",
      "question": "你想保留驚喜，還是先問清楚一部分行程？最想知道甚麼？",
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
    "question": "Would you invite your partner or a friend? How would the evening differ with each?",
    "twist": "",
    "deeperQuestion": "Which interest would you like your partner to understand without having to share it?",
    "zh": {
      "title": "兩張演出票",
      "scenario": "你收到兩張很難買的演出票，演的是你最喜歡、伴侶卻完全不懂的音樂。對方說願意去，但你知道朋友可能會更投入。",
      "question": "你會邀伴侶還是朋友同行？跟不同的人去，這一晚會有甚麼不同？",
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
    "question": "Would you include the friend, suggest another time, or keep dinner for the two of you? What would you say?",
    "twist": "",
    "deeperQuestion": "What helps you accept a last-minute change of plans?",
    "zh": {
      "title": "晚餐的第三個人",
      "scenario": "你準備了一頓兩人晚餐，伴侶下班前問能否帶一位今天很失落的朋友回來。食物足夠，但你已期待今晚很久。",
      "question": "你會邀請朋友加入、另約時間，還是保留今晚的兩人晚餐？你會怎樣說？",
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
    "deeperQuestion": "If you could say just one sentence now, what would you most want your partner to hear?",
    "zh": {
      "title": "五分鐘的心聲",
      "scenario": "你們各有一次使用魔法的機會：在五分鐘內，對方能完全理解你想說的話，不會誤會語氣，也不急著回應。魔法結束後，你們仍需要一起處理問題。",
      "question": "你最想用這五分鐘說甚麼？",
      "twist": "",
      "deeperQuestion": "如果現在只說一句，你希望對方先聽見甚麼？"
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
      "question": "你想選哪個下午，陪對方再看一次？",
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
    "deeperQuestion": "Would a kind gesture make it easier to talk, or would you need to clear things up first?",
    "zh": {
      "title": "吵架後的早餐",
      "scenario": "昨晚你們有分歧，未完全談妥就睡了。早上對方煮了你喜歡的早餐，卻沒有提起昨晚；你也還有一點介意。",
      "question": "你希望這頓早餐怎樣開始？",
      "twist": "",
      "deeperQuestion": "對方先示好，會讓你比較願意聊下去，還是你需要先把事情說清楚？"
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
    "scenario": "On a trip, one of you likes stopping at little shops while the other wants to reach your destination before dark. The walk should take half an hour, but an hour has passed and the sun is starting to set.",
    "question": "How would you finish the walk so both can enjoy it?",
    "twist": "",
    "deeperQuestion": "In everyday life, where would you like your partner to slow down with you?",
    "zh": {
      "title": "兩個人的步速",
      "scenario": "你們旅行散步，一個喜歡停下看小店，另一個想趁天黑前走到目的地。路程本來只需半小時，但逛著逛著已經過了一小時，太陽開始下山。",
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
      "scenario": "有一家餐廳替客人安排整晚，菜式、座位和飯後活動都不用選。伴侶覺得終於可以休息，你卻怕安排不合心意。",
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
    "deeperQuestion": "If you moved, who or what familiar part of daily life would you miss most?",
    "zh": {
      "title": "神奇搬運券",
      "scenario": "你們可以免費搬到任何一個城市住一年，工作收入維持不變。搬完仍能見家人朋友，但每次都要花時間安排行程。",
      "question": "你想搬去哪裡，還是留在原地？",
      "twist": "",
      "deeperQuestion": "如果真的搬走，你最捨不得的是誰，或哪一種熟悉的日常？"
    }
  },
  {
    "id": "ponder-v4-couple-031",
    "category": "Couple",
    "emoji": "💗",
    "title": "The late pass",
    "scenario": "You each receive one pass to arrive thirty minutes late without blame. You must give notice and plan something for the other person's wait.",
    "question": "What would you save the voucher for? How would you arrange your partner's half-hour wait?",
    "twist": "",
    "deeperQuestion": "Does lateness bother you because of time, worry or feeling unimportant?",
    "zh": {
      "title": "約會遲到券",
      "scenario": "你們各拿到一張遲到券，可以在一次約會遲到半小時，不被責怪。唯一要求是提早說，並安排好對方等待的時間。",
      "question": "你會把這張券留給甚麼情況？你想怎樣安排對方等待的半小時？",
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
      "question": "你會挑哪件東西，先跟對方分享它的故事？",
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
    "scenario": "You enter a cooperative maze game. One person watches a map on a screen and gives directions by radio; the other walks through the maze and can only see the path ahead. You have ten minutes and may swap roles once.",
    "question": "Which role would you take first, and how would you communicate?",
    "twist": "",
    "deeperQuestion": "What tone helps you take a reminder well?",
    "zh": {
      "title": "戀人小隊",
      "scenario": "你們參加一個合作迷宮遊戲。一人在螢幕前看地圖，用對講機指路；另一人在迷宮裡行走，只看得見眼前的路。限時十分鐘，中途可以交換一次角色。",
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
    "scenario": "Your shared budget this year covers one expensive, lasting purchase. You want a coffee machine; your partner wants a comfortable sofa. They cost the same, and the other purchase must wait until next year.",
    "question": "How would you decide which to buy first?",
    "twist": "",
    "deeperQuestion": "What everyday comfort feels worth investing in?",
    "zh": {
      "title": "一年只買一次",
      "scenario": "你們今年的共同預算只夠買一件較貴、能用很久的東西。你想買咖啡機，伴侶想換舒服的沙發，價錢剛好相同。沒被選中的那件要等明年。",
      "question": "你會用甚麼方法決定先買哪件？",
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
      "scenario": "伴侶準備了一個驚喜，最近總是避開你通電話。你還不知道原因，開始有點不安；對方又很想保密到最後。",
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
    "deeperQuestion": "If you could swap one responsibility for a week, which would you choose?",
    "zh": {
      "title": "看不見的功勞",
      "scenario": "有個小工具把一星期的家務全部列出，連記住生日、補買用品、安排維修也計算。你們第一次看見完整清單。",
      "question": "你猜哪一項最可能讓你驚訝？",
      "twist": "",
      "deeperQuestion": "如果可以交換一項責任試一星期，你想交換哪一項？"
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
    "deeperQuestion": "If your partner were praising you, which often-overlooked little thing would you hope they mentioned?",
    "zh": {
      "title": "把讚美說清楚",
      "scenario": "你們玩一個小遊戲：今天不能說「你好好」或「我愛你」，只能用一個具體例子表達欣賞。例子不用是甚麼大事。",
      "question": "你最想提起對方做過哪件事？",
      "twist": "",
      "deeperQuestion": "如果換成伴侶稱讚你，你最希望他提起哪件平常不太被注意的小事？"
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
    "deeperQuestion": "If you explained that you would choose the style yourselves, would your family's response affect whether you accepted the money?",
    "zh": {
      "title": "家人的建議",
      "scenario": "家人送你們一筆裝修費，也附上很多風格建議。伴侶很感謝，想盡量照做；你卻不喜歡那些顏色。",
      "question": "你會怎樣一起決定哪些建議採用？",
      "twist": "",
      "deeperQuestion": "如果先說明你們會自己選風格，你覺得家人的反應會影響你是否接受這筆錢嗎？"
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
    "deeperQuestion": "Do you enjoy doing things separately and sharing afterwards, or would you rather experience them together?",
    "zh": {
      "title": "不必共同喜歡",
      "scenario": "你們免費獲得兩張不同活動的票，同晚舉行：一張是你很想看的演出，一張是伴侶很想上的工作坊。票不能換，也沒有第二張。",
      "question": "你會各自去，還是一起另外安排？",
      "twist": "",
      "deeperQuestion": "你喜歡和伴侶各自去玩，再回來分享，還是更想一起經歷？"
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
    "title": "An afternoon of babysitting",
    "scenario": "A relative asks you to care for a child one afternoon, leaving clear instructions and staying reachable. You plan food, play and rest without relying entirely on screens.",
    "question": "What would you handle, and what would you ask your partner to do?",
    "twist": "",
    "deeperQuestion": "If you disagreed about the rules of a game, whose approach would you try first?",
    "zh": {
      "title": "照顧孩子的一個下午",
      "scenario": "親友請你們照顧孩子一個下午，已留下清楚說明，也隨時接電話。你們要安排吃東西、遊戲和休息，不能只靠螢幕。",
      "question": "你想負責哪一部分，哪一部分想交給伴侶？",
      "twist": "",
      "deeperQuestion": "如果你們對遊戲規則有不同想法，你想先照誰的方法試？"
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
      "scenario": "有一家咖啡店讓你們自己出題給對方，不准問是非題。你可以選擇一件自己很想聊、卻通常沒有機會開始的事。",
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
      "scenario": "你要向一位從未見過伴侶的朋友介紹對方。不能說職業、外貌或「對我很好」，只能分享一個小故事。",
      "question": "你會分享哪一件事？",
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
    "deeperQuestion": "If your partner would rehearse privately first, would you try that together or choose another activity?",
    "zh": {
      "title": "抽到小小冒險",
      "scenario": "你們抽中一項免費活動：要一起上台唱一首歌。你想挑戰一下，伴侶光想到被看就緊張；放棄也不會有損失。",
      "question": "你會提出怎樣的選擇，讓兩人都能自在決定？",
      "twist": "",
      "deeperQuestion": "如果對方願意先在沒人的地方練一次，你會想陪著試，還是乾脆換個活動？"
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
      "scenario": "你們去不同地方旅行三天。你喜歡隨手分享照片，伴侶喜歡晚上一次說完；沒有人故意不理對方。",
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
    "question": "How would you introduce this dish to your partner? Beyond the taste, what does it remind you of?",
    "twist": "",
    "deeperQuestion": "How could they make you happy without liking the same dish?",
    "zh": {
      "title": "熟悉的味道",
      "scenario": "你有一道小時候很喜歡的食物，伴侶第一次吃卻不喜歡。對方沒有批評，只很誠實地放下筷子，你仍有點失落。",
      "question": "你會怎樣跟伴侶介紹這道菜？除了味道，它還讓你想起甚麼？",
      "twist": "",
      "deeperQuestion": "如果不能喜歡同一道菜，對方怎樣做仍會讓你開心？"
    }
  },
  {
    "id": "ponder-v4-couple-069",
    "category": "Couple",
    "emoji": "💗",
    "title": "Who we turn to",
    "scenario": "A leak forces you out of your rented home for a few days. You would ask family for a place to stay; your partner would ask friends. Both would welcome you, though neither has much room.",
    "question": "Who would you ask first? What most affects how comfortable you feel accepting hospitality?",
    "twist": "",
    "deeperQuestion": "What relationship details would you want discussed before sharing with others?",
    "zh": {
      "title": "我們的求助名單",
      "scenario": "你們租住的家突然漏水，需要搬出去住幾天。你想先借住家人家裡，伴侶想找朋友幫忙，兩邊都願意接待，但地方都不大。",
      "question": "你會先找誰？接受別人照顧時，甚麼最影響你是否自在？",
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
    "title": "Leave sooner or have more time together now?",
    "scenario": "You want to save for six months of travel. Taking weekend work would let you leave two years earlier, but you would have almost no shared days off until then. Saving at your current pace takes two extra years but leaves a day together each week. Daily expenses are covered either way.",
    "question": "How would you weigh those two years?",
    "twist": "",
    "deeperQuestion": "What time together do you least want to keep postponing?",
    "zh": {
      "title": "早點出發，還是每週多見一天？",
      "scenario": "你們想存一筆錢，去旅行半年。多接週末工作可以早兩年出發，但在那之前幾乎沒有共同假期；照現在的步調存錢要多等兩年，卻每週有一天相處。日常開支都付得起。",
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
    "scenario": "You are assembling a new bookshelf and still cannot get it right after studying the instructions. Your partner is good at this and offers help. You want it finished, but also want to know you can do it yourself.",
    "question": "How could they ask in a way that makes accepting easier?",
    "twist": "",
    "deeperQuestion": "Would you work together, ask for one demonstration, or give yourself ten more minutes?",
    "zh": {
      "title": "第一次讓你幫忙",
      "scenario": "你正在組裝新書架，說明書看了很久仍裝不好。伴侶很擅長這些，走過來問要不要幫忙。你想快點完成，又很想證明自己也做得到。",
      "question": "對方怎樣問，會讓你比較容易接受？",
      "twist": "",
      "deeperQuestion": "你會想一起做、請對方示範一次，還是再給自己十分鐘？"
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
      "scenario": "假設你們一起照顧的寵物有一天能開口說話，而且只會分享平常觀察到的小事。你們可以各問牠一個問題。",
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
    "question": "Would you feel delighted, or also bothered that they changed the agreement? How would you respond?",
    "twist": "",
    "deeperQuestion": "What are you hoping to avoid when making an agreement like that?",
    "zh": {
      "title": "被取消的禮物規則",
      "scenario": "你們約好今年生日不送禮，用陪伴慶祝。生日當天，伴侶還是帶來一份精心挑的小禮物，笑說真的忍不住。",
      "question": "你會覺得開心，還是也有點在意對方沒有照約定做？你會怎樣回應？",
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
    "title": "After saying sorry",
    "scenario": "After a small argument, your partner apologises for speaking harshly. You believe them but still feel unsettled. They ask what would help now.",
    "question": "Would you want to talk further, have some quiet or do something together?",
    "twist": "",
    "deeperQuestion": "What small thing at your next meeting would make you feel you had made up?",
    "zh": {
      "title": "對不起，之後呢？",
      "scenario": "一次小爭執後，伴侶傳來「對不起，我剛才說話太重了」。你知道他有誠意，心裡卻還有點卡住。他問你，現在怎樣做會讓你好過一點。",
      "question": "你希望再談清楚、先安靜一會，還是一起做點甚麼？",
      "deeperQuestion": "下次見面時，甚麼小事會讓你覺得你們已經和好了？",
      "twist": ""
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
    "question": "How would you explain why you want to attend on your own?",
    "twist": "",
    "deeperQuestion": "What would you like to do separately and share afterwards?",
    "zh": {
      "title": "替對方留位置",
      "scenario": "你要開始一個新興趣，每週會佔用一晚。伴侶想加入，但你本來期待這是自己的時間，又不想讓對方失落。",
      "question": "你會怎樣跟對方說你想獨自參加的原因？",
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
    "question": "What would you ask first to understand what this money means to your partner?",
    "twist": "",
    "deeperQuestion": "What childhood message about spending has stayed with you?",
    "zh": {
      "title": "同一筆意外收入",
      "scenario": "你們各獲得同額獎金，約定可以自由使用。你把錢花在體驗，伴侶存起來；月底聊起時，發現彼此都有點不理解。",
      "question": "你會先問對方甚麼，了解這筆錢對他的意義？",
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
    "question": "How would you want your partner to respond? How long would you be happy to wait?",
    "twist": "",
    "deeperQuestion": "What makes “Give me ten minutes” feel worth waiting for?",
    "zh": {
      "title": "有空聽我說嗎",
      "scenario": "你帶著一件很想分享的事回家，伴侶正在做需要專心的工作。事情不緊急，但你怕等一下就沒了想說的興致。",
      "question": "你希望對方怎樣回應？你願意把分享留到甚麼時候？",
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
    "deeperQuestion": "What kind of question would help you feel understood rather than interrogated?",
    "zh": {
      "title": "只問不建議",
      "scenario": "你們輪流分享一件最近困擾自己的小事，另一人前五分鐘只能問問題，不能給建議。時間到後，再由分享的人決定要不要聽辦法。",
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
    "deeperQuestion": "Which plans would you want settled so you could feel comfortable with other last-minute changes?",
    "zh": {
      "title": "我們的共同留白",
      "scenario": "你們安排下個月的行事曆，可以故意留一個下午空白。到當天才決定做甚麼，甚至取消見面各自休息也可以。",
      "question": "留白會讓你期待，還是有點不安？",
      "twist": "",
      "deeperQuestion": "哪些事情先約好了，你就比較能放心接受其他臨時變化？"
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
      "scenario": "有一家小店送你們一本空白書，封面寫著「關於你，我還不知道的事」。每月可以添一頁，不用是秘密，也不必很深刻。",
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
    "scenario": "Your family receives a magical day-off voucher: everyone's work, homework and chores are taken care of for a day. You do not need to travel far, and each person may suggest one thing to do together.",
    "question": "What would you suggest?",
    "twist": "",
    "deeperQuestion": "Whose suggestion might surprise the family most? What would you like to hear from them?",
    "zh": {
      "title": "全家放假券",
      "scenario": "你家收到一張神奇放假券：全家可以同時放假一天，工作、功課和家務都有人處理好。你們不用出遠門，每人可以提議一件想一起做的事。",
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
      "scenario": "有一家餐廳可以讓一家人以十八歲的樣子吃一頓飯。大家保留十八歲以前的記憶，暫時不知道後來發生的事；你則可以帶著現在的自己去見他們。這晚不用改變歷史，只是認識一下當時的彼此。",
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
    "scenario": "You are making a family exhibition using five sounds from an ordinary day. Without narration, listeners will imagine what life together at home is like.",
    "question": "Which sound would you include?",
    "twist": "",
    "deeperQuestion": "Does it feel comforting, lively or something else?",
    "zh": {
      "title": "家裡的聲音博物館",
      "scenario": "你們要做一個只有聲音的家庭小展覽，收錄平常一天裡的五種聲音。不加旁白，讓來聽的人自己想像你們在家相處的樣子。",
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
    "title": "Two hours without screens",
    "scenario": "Screens take a two-hour break tonight. You have paper, food and everyday furniture, and need not spend the whole time talking.",
    "question": "What would you start doing together?",
    "twist": "",
    "deeperQuestion": "What kind of time together feels close without much talking?",
    "zh": {
      "title": "螢幕休息兩小時",
      "scenario": "今晚電視、手機和遊戲機一起放假兩小時，但家裡有紙筆、食物和普通家具。大家不用全程聊天，也可以一起動手。",
      "question": "你想發起甚麼活動？",
      "twist": "",
      "deeperQuestion": "哪一種相處不用說很多話，你也覺得親近？"
    }
  },
  {
    "id": "ponder-v4-family-017",
    "category": "Family",
    "emoji": "🏠",
    "title": "Pocket money across time",
    "scenario": "Each family member can visit their own childhood with enough pocket money for ten breakfasts at that time. There is no school that day, and no need to hand the money to an adult. Bring back a purchase or a story from the day.",
    "question": "How would you spend that pocket money? Was there something you could never quite bring yourself to buy then?",
    "twist": "",
    "deeperQuestion": "How do their childhood luxuries differ from today's?",
    "zh": {
      "title": "不同年代的零用錢",
      "scenario": "每位家人都可以回到自己的童年，帶著一筆剛好夠買十份早餐的零用錢。那天不用上學，也不用把錢交給大人保管。回來時，可以帶一件買到的東西，或一個當天的故事。",
      "question": "你會怎樣花這筆零用錢？有沒有一樣當年一直捨不得買的東西？",
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
    "scenario": "You can write to a younger family member about something you experienced. Leave out advice about what they should do, and let them decide what the story means to them.",
    "question": "What experience would you share?",
    "twist": "",
    "deeperQuestion": "As the reader, what feeling from their younger years would you want to understand?",
    "zh": {
      "title": "一封沒有建議的信",
      "scenario": "你可以寫信給一位較年輕的家人，分享一段自己的經歷。信裡不寫「所以你應該怎樣做」，讓對方讀完後，自己想想有甚麼感受。",
      "question": "你想分享哪段經歷？",
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
    "scenario": "You are writing a small guide for a future family. Each person has a page to preserve one current habit and revise another, explaining both choices.",
    "question": "What would you keep, and what would you rewrite?",
    "twist": "",
    "deeperQuestion": "When did the habit you would keep make you feel cared for?",
    "zh": {
      "title": "想留住的家規",
      "scenario": "你們要寫一本給未來家庭的小手冊，可以留下一條現在家裡的習慣，也可以把一條改寫。每人有一頁，寫下自己的選擇和原因。",
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
      "title": "家人的自由下午",
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
    "deeperQuestion": "Would you most want this space to be for resting, talking or doing something together?",
    "zh": {
      "title": "沒有標準版本的家",
      "scenario": "你們可以設計一個理想的共同空間，不用模仿別人的客廳。可以有長桌、地墊、工作台或很多植物，但地方有限。",
      "question": "你最想放進哪一樣，讓大家做甚麼？",
      "twist": "",
      "deeperQuestion": "你最希望大家在這個空間裡休息、聊天，還是一起做點甚麼？"
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
    "scenario": "Today each family member can write a small request that takes under half an hour, such as help with a phone feature, a walk, or sorting photos. Others can choose which request to accept and arrange a time.",
    "question": "How would you phrase yours?",
    "twist": "",
    "deeperQuestion": "Is asking directly or waiting to be noticed harder for you?",
    "zh": {
      "title": "互換一次求助",
      "scenario": "今天每位家人可以寫下一個半小時內做得到的小請求，例如教手機功能、陪散步或一起整理照片。其他人看看自己願意接下哪一項，再約好時間。",
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
    "deeperQuestion": "If they learned faster than you, how might your roles change in a fun way?",
    "zh": {
      "title": "長輩的新興趣",
      "scenario": "一位長輩突然想學街舞、玩遊戲或拍短片，邀請你一起試。你本來以為他不會喜歡這些，課程也真的從初學開始。",
      "question": "你最願意陪他試哪一樣？",
      "twist": "",
      "deeperQuestion": "如果他學得比你快，你猜你們會有甚麼有趣的角色變化？"
    }
  },
  {
    "id": "ponder-v4-family-035",
    "category": "Family",
    "emoji": "🏠",
    "title": "Translating worry",
    "scenario": "You get a card for rewriting a familiar family reminder in a way you would be more willing to hear. Keep the care behind it, but change the wording and tone.",
    "question": "Which reminder would you rewrite?",
    "twist": "",
    "deeperQuestion": "What do you think they are most worried about underneath it?",
    "zh": {
      "title": "把擔心翻譯一下",
      "scenario": "你們拿到一張小卡，可以把家人常說的一句叮嚀，改成自己比較願意聽的說法。想表達的關心不變，只換一種語氣。",
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
      "scenario": "有一家茶室歡迎全家來坐坐，唯一的規則是今天不必談成績或成果。你們可以分享尚未完成的事、日常的小發現，或只是安靜地坐著。",
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
    "deeperQuestion": "If the quietest family member led the team, how do you think they would guide everyone?",
    "zh": {
      "title": "一天沒有輩分",
      "scenario": "你們玩桌遊一天，大家只叫名字，規則由抽籤決定，年紀大不會自動當隊長。每個人都可以問最基本的問題。",
      "question": "你最想跟哪位家人同隊？",
      "twist": "",
      "deeperQuestion": "如果平常最少說話的人當隊長，你猜他會怎樣帶大家玩？"
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
    "deeperQuestion": "Who would you ask to taste it first? What feedback would you most want from them?",
    "zh": {
      "title": "家常菜改版",
      "scenario": "家裡一道經典菜要出新版，每人可以改一個地方。原版仍會保留，所以不用怕改動就等於否定傳統。",
      "question": "你想改甚麼，或堅持保留甚麼？",
      "twist": "",
      "deeperQuestion": "你會想讓誰先試吃？你最想聽他評哪一部分？"
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
    "deeperQuestion": "What would you plant in the shared area, and which family member would especially enjoy it?",
    "zh": {
      "title": "一起照顧一座花園",
      "scenario": "你們得到一小塊花園，可以種菜、花或讓人休息的樹。每人有一小區，也有一塊要共同決定。",
      "question": "你會在自己的地方種甚麼？",
      "twist": "",
      "deeperQuestion": "共同的那一區，你想種甚麼，讓哪位家人特別開心？"
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
      "scenario": "今晚的睡前故事不讀書，由家人各自分享一件自己小時候闖過的小禍。不能借故事訓話，只說當時發生甚麼。",
      "question": "你會分享哪件小事？",
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
    "scenario": "Choose three songs for another family member without trying to guess their usual taste. Pick songs you genuinely want to share, then explain why.",
    "question": "Which song would you play first?",
    "twist": "",
    "deeperQuestion": "What song could show a side of you that you rarely talk about?",
    "zh": {
      "title": "交換一張歌單",
      "scenario": "每人為另一位家人選三首歌，不必猜對方平常愛聽甚麼。選自己真心想分享的就好，再說說為甚麼想讓他聽。",
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
    "deeperQuestion": "If the usual cook had the sole choice, what do you think dinner would be?",
    "zh": {
      "title": "誰來選晚餐",
      "scenario": "今晚每人可以否決一樣不想吃的東西，再一起決定晚餐。不能用「隨便」跳過，也不用某一個人猜所有人的喜好。",
      "question": "你會先排除甚麼，再提議甚麼？",
      "twist": "",
      "deeperQuestion": "如果輪到平常負責煮飯的人單獨決定，你猜晚餐會變成甚麼？"
    }
  },
  {
    "id": "ponder-v4-family-051",
    "category": "Family",
    "emoji": "🏠",
    "title": "A holiday at home",
    "scenario": "Your home becomes a holiday spot for a day, with chores covered and dinner delivered. You stay in but may rearrange things or choose a theme.",
    "question": "How would you arrange the house to make the day feel like a holiday?",
    "twist": "",
    "deeperQuestion": "What corner of home do you rarely get to enjoy?",
    "zh": {
      "title": "在家也能度假",
      "scenario": "你們可以把家變成一天的度假地方，家務有人代做，晚餐也送到。不能外出，但能改家具擺法或訂一個主題。",
      "question": "你想怎樣布置家裡，讓這一天有度假的感覺？",
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
    "title": "An updated picture of me",
    "scenario": "Labels like “the good child,” “the busy one” or “the forgetful one” pause for a day. Everyone chooses a description they prefer.",
    "question": "How would you describe yourself now?",
    "twist": "",
    "deeperQuestion": "What old impression no longer fits how you have changed?",
    "zh": {
      "title": "更新家人對我的印象",
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
    "question": "What would you ask everyone first to see whether there was another option?",
    "twist": "",
    "deeperQuestion": "What kind of reason might change your choice?",
    "zh": {
      "title": "全家的小投票",
      "scenario": "你們要決定下一次出遊方式，票數剛好分成兩邊。大家可以先說理由，再各有一次改票機會，不急著找裁判。",
      "question": "你會先問大家哪個問題，看看能不能找到另一個選擇？",
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
      "scenario": "你們談起同一次旅行，發現每個人記住的重點都不同。今天不必決定哪個版本最準確，只需各自分享一個記得的畫面。",
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
    "scenario": "Each family member gets a one-hour rest voucher, with no need to explain why they are tired. If a small chore cannot wait, someone else will take care of it.",
    "question": "When would you most likely use yours?",
    "twist": "",
    "deeperQuestion": "When you use the voucher, would you want no interruptions or a kind message left for you?",
    "zh": {
      "title": "每人一張休息券",
      "scenario": "每位家人都有一張一小時休息券，想用的時候不用解釋為甚麼累。如果當時有一件不能等的小家務，其他人會幫忙做好。",
      "question": "你最可能在甚麼時候用？",
      "twist": "",
      "deeperQuestion": "你用休息券時，希望大家完全不打擾，還是留一句關心的話？"
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
    "scenario": "Your family can choose a month-long challenge, such as trying a new dish or walking a new route each week. Missing a week does not end it; you can try again the next week.",
    "question": "What challenge would you choose?",
    "twist": "",
    "deeperQuestion": "What reminder invites you in rather than makes you want to escape?",
    "zh": {
      "title": "一個月的小挑戰",
      "scenario": "全家可以選一個持續一個月的小挑戰，例如每週試一道新菜或一起走一條新路。中途漏做不算失敗，下星期可以接著試。",
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
    "deeperQuestion": "If someone missed the preparation but helped a lot on the day, how would you consider their contribution?",
    "zh": {
      "title": "共同獎金怎樣分",
      "scenario": "全家一起參加活動贏了一筆獎金，大家投入的時間不一樣，有人做台前，有人做準備。獎金夠每人買小禮物，也夠一起出遊。",
      "question": "你會提議怎樣用這筆錢？",
      "twist": "",
      "deeperQuestion": "如果有一人沒空參與準備，卻在當天幫了大忙，你會怎樣考慮他的貢獻？"
    }
  },
  {
    "id": "ponder-v4-family-074",
    "category": "Family",
    "emoji": "🏠",
    "title": "Different forms of care",
    "scenario": "A little post office can turn family care into a parcel. Open it to receive kind words, a meal, a hug, or some quiet time without interruptions.",
    "question": "What kind of parcel would you like today?",
    "twist": "",
    "deeperQuestion": "Do you think your family would choose the same parcel? Guess first, then hear their answer.",
    "zh": {
      "title": "關心的不同包裝",
      "scenario": "有一家小郵局可以把家人的關心變成一份包裹。打開時，可能收到一句貼心的話、一頓飯、一個擁抱，或一段安靜、不被打擾的時間。",
      "question": "今天你想收到哪種包裹？",
      "twist": "",
      "deeperQuestion": "你猜家人會選跟你一樣的包裹嗎？可以先猜，再聽他說。"
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
    "deeperQuestion": "Do you remember that help because it solved the problem, or because someone was willing to face it with you?",
    "zh": {
      "title": "沒說出口的謝謝",
      "scenario": "你們可以把一件早已過去的小幫忙重新放到飯桌上說謝謝。對方可能已忘記，但不用找更大的事來證明它重要。",
      "question": "你會想起哪件事？",
      "twist": "",
      "deeperQuestion": "你一直記得那次幫忙，是因為事情終於解決了，還是因為有人願意陪你一起面對？"
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
    "deeperQuestion": "If you were the guide, which part of your past life would you want them to get to know?",
    "zh": {
      "title": "不熟悉的城市一日",
      "scenario": "你可以陪一位家人去他曾住過、你卻沒去過的城市一天。交通有人安排，目的不是觀光，而是聽他邊走邊分享。",
      "question": "你想跟誰去，第一站想看甚麼？",
      "twist": "",
      "deeperQuestion": "如果換成你帶家人走一趟，你最想讓他認識自己哪一段以前的生活？"
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
    "scenario": "Tonight, try a light topic on which your family might disagree. After hearing someone's reasons, say what you understood before sharing your own view. There is no need to choose a winning answer.",
    "question": "What light topic would you try this with?",
    "twist": "",
    "deeperQuestion": "Is being understood enough even if your family still disagrees?",
    "zh": {
      "title": "讓不同答案留下",
      "scenario": "今晚試試聊一個大家可能看法不同的輕鬆話題。每人聽完另一人的理由，先說說自己聽懂了甚麼，再分享自己的想法。不用選出哪個答案最好。",
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
    "scenario": "There is something you want to discuss with family, but dinner conversations keep getting interrupted. You can now invite one person for a twenty-minute walk along a quiet path and talk as you go.",
    "question": "Whom would you invite, and how would you begin?",
    "twist": "",
    "deeperQuestion": "Is it easier for you to talk sitting down or walking?",
    "zh": {
      "title": "把話留到散步時",
      "scenario": "你有一件想跟家人聊的事，飯桌上總容易被打斷。現在可以邀一個人，沿一條安靜的小路散步二十分鐘，邊走邊聊。",
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
    "deeperQuestion": "If someone noticed a strength you had never seen in yourself, what would you want to hear more about?",
    "zh": {
      "title": "互相認領的優點",
      "scenario": "你們把每人的一個優點寫在不署名的卡上，再請本人猜哪張是自己的。不能只寫聰明、乖或努力，要附小例子。",
      "question": "你想替一位家人寫甚麼？",
      "twist": "",
      "deeperQuestion": "如果有人寫了你從沒留意過的優點，你會想請他多談哪個細節？"
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
    "question": "What would you put in this corner to help someone relax as soon as they sat down?",
    "twist": "",
    "deeperQuestion": "How could “I need quiet” be said without being misunderstood?",
    "zh": {
      "title": "家裡的安靜角落",
      "scenario": "你們可以騰出一個安靜角落，任何人坐進去都不用立即回應聊天。它不是生氣區，也不代表不喜歡家人。",
      "question": "你想在這個角落放些甚麼，讓人坐下來就能放鬆？",
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
      "scenario": "家人可以各自分享一件最近的小煩惱，其他人先不提供辦法。分享的人可以只說一半，也可以說今天不想談。",
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
      "scenario": "今晚晚餐有個小主題：「最近第一次」。每人只需分享一件第一次遇到、學到或嘗試的事，小到一種新口味也可以。",
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
    "deeperQuestion": "If they did not enjoy it, which part would you ask about to hear their view?",
    "zh": {
      "title": "家庭書店",
      "scenario": "你們在家設一個小書架，每人推薦一本書、一本漫畫或一份自己想分享的讀物。旁邊只寫「我想你看看，因為……」。",
      "question": "你會放甚麼，怎樣完成那句話？",
      "twist": "",
      "deeperQuestion": "如果對方讀完後不喜歡，你會想問他哪一段，聽聽不同的看法？"
    }
  },
  {
    "id": "ponder-v4-family-094",
    "category": "Family",
    "emoji": "🏠",
    "title": "Let me finish",
    "scenario": "Everyone gets a “Let me finish” card to use when interrupted. Others listen through before responding.",
    "question": "Would you use yours often or rarely?",
    "twist": "",
    "deeperQuestion": "Whom would you like to hear without them having to fight for a turn?",
    "zh": {
      "title": "讓我把話說完",
      "scenario": "家裡每人都有一張「讓我說完」卡，聊天被打斷時可以放在桌上。大家先聽完，再決定要不要回應。",
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
    "scenario": "You return from away and your family asks what you would like for your first meal. It need not be a feast, just a familiar food you have missed and can have today.",
    "question": "What would you choose?",
    "twist": "",
    "deeperQuestion": "If that dish were unavailable, what welcome could give you the same feeling?",
    "zh": {
      "title": "回家的第一口",
      "scenario": "你從外地回來，家人問第一餐想吃甚麼。今天不用安排豐盛大餐，只選一樣你最想念、吃得到的味道。",
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
    "title": "So this is what you enjoy now",
    "scenario": "After dinner, each person shares a recent enthusiasm: a song, plant, game or place. Everyone listens and asks genuine questions before judging its usefulness.",
    "question": "Which recent interest would you introduce to your family?",
    "twist": "",
    "deeperQuestion": "What response from family would make you want to say more?",
    "zh": {
      "title": "原來你最近喜歡這個",
      "scenario": "今晚吃完飯，每人輪流介紹最近迷上的一件事，可能是歌曲、植物、遊戲或一個地方。其他人先聽完，再問自己真的好奇的部分，不急著評論有沒有用。",
      "question": "你想讓家人認識你最近的哪個喜好？",
      "deeperQuestion": "家人怎樣回應，會讓你更想繼續講下去？",
      "twist": ""
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
    "title": "A Saturday your way",
    "scenario": "You can spend a friend's favourite Saturday with them, eating, walking and resting their way. Costs are covered, but they choose the whole day and you agree to try it.",
    "question": "Whose Saturday would you most like to join? What would you want to discover about how they unwind?",
    "twist": "",
    "deeperQuestion": "What part of your own day might surprise them?",
    "zh": {
      "title": "跟你過一個星期六",
      "scenario": "你可以跟朋友過一次他最喜歡的星期六，照他的習慣吃、走和休息。費用不用擔心，但當天的行程全部由他選，你會先答應跟著試。",
      "question": "你最想跟哪位朋友過這一天？最想知道他平常怎樣放鬆？",
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
    "scenario": "Design an hour-long class around something a friend does well without thinking of it as a skill: helping strangers relax, choosing gifts, or making an ordinary dinner delicious.",
    "question": "What class would you design for your friend?",
    "twist": "",
    "deeperQuestion": "What would you genuinely want to learn from it?",
    "zh": {
      "title": "替朋友開一堂課",
      "scenario": "你們各替一位朋友設計一堂一小時的小課，內容是他很會做、自己卻可能沒當成專長的事。例如讓陌生人自在、挑禮物，或把普通晚餐煮得很好吃。",
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
    "deeperQuestion": "What would you most enjoy about living next door to a friend? Which habits would you want to discuss first?",
    "zh": {
      "title": "意外成為鄰居",
      "scenario": "你們意外租到相鄰的房子一個月，各有自己的生活，不需要每天見。兩家之間有一張小桌，可以留下東西或便條。",
      "question": "第一晚你會放甚麼上去？",
      "twist": "",
      "deeperQuestion": "朋友住在隔壁，哪件事最讓你期待？又有甚麼習慣，你希望先說好？"
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
    "scenario": "You each receive a ticket to an unfamiliar activity, perhaps birdwatching, pottery or a local history walk. You are all free today and can try it together or pass without taking anyone else's place.",
    "question": "What unfamiliar activity would you try?",
    "twist": "",
    "deeperQuestion": "Would the subject or the company matter more in deciding to go?",
    "zh": {
      "title": "免費的冷門票",
      "scenario": "有人送你們每人一張不熟悉的活動票，可能是觀鳥、陶藝或地方歷史導覽。大家今天都有空，可以一起試，也可以不去，不會佔掉別人的名額。",
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
    "title": "Borrowing a friend's skill",
    "scenario": "You can borrow a friend's skill for a day and see how they learned it. The skill returns to them afterwards, but you keep the memories of what you did.",
    "question": "Which skill would you borrow, and what would you do?",
    "twist": "",
    "deeperQuestion": "What skill of your own might you undervalue?",
    "zh": {
      "title": "借用朋友的本領",
      "scenario": "你可以借朋友的一項本領一天，還能看見他當初怎樣練習。一天過後，本領會還給他，但你仍然記得自己做過的事。",
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
    "title": "Three lines from a friend",
    "scenario": "Write three lines about each other for the other person to keep. This is neither a job reference nor a public post, just your view of your friend.",
    "question": "What would you write? Include one small experience you actually shared.",
    "twist": "",
    "deeperQuestion": "Which line surprises you most? Did you know your friend noticed that side?",
    "zh": {
      "title": "請朋友替你寫三句",
      "scenario": "你們互相寫三句介紹，交給對方留著。不是求職，也不會公開，只是讓朋友知道：在你眼裡，他是個怎樣的人。",
      "question": "你會寫哪三句？至少一句提到你們真的經歷過的小事。",
      "deeperQuestion": "哪一句最讓你意外？你以前知道朋友有留意這一面嗎？",
      "twist": ""
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
    "scenario": "Design a menu for each other with one main dish and one drink. Choose their usual favourites, or a combination you think would brighten their day.",
    "question": "What is your menu?",
    "twist": "",
    "deeperQuestion": "What food do you especially want on a difficult day?",
    "zh": {
      "title": "秘密菜單",
      "scenario": "你們各為對方設計一份菜單，只有一道主食和一杯飲品。可以選對方平常愛吃的，也可以選你覺得今天會讓他開心的搭配。",
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
    "scenario": "After five years apart, you have an hour to sit and talk. Messages have kept you up to date on work and where they live, so you want to explore something different this time.",
    "question": "What part of their present life would you ask about?",
    "twist": "",
    "deeperQuestion": "What would you most like them to ask you?",
    "zh": {
      "title": "久沒見面的開場",
      "scenario": "你們五年沒見，今天剛好有一小時可以坐下來聊。從平常的訊息裡，你已知道對方的工作和住處，這次想聊一點不一樣的事。",
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
      "scenario": "朋友分享一件小煩惱，你手上剛好有一個很好的建議。但你們約定先問清楚對方想要聆聽、想法還是實際幫忙。",
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
    "deeperQuestion": "When you remember a trip, what comes first: the place, the food or the people?",
    "zh": {
      "title": "我們的小旅行紀念",
      "scenario": "你們旅行不能買紀念品，只能留一件免費得到的普通物品，或寫下一句當天說過的話。每人可以選不同的。",
      "question": "你最可能留下甚麼？",
      "twist": "",
      "deeperQuestion": "回想一趟旅行時，你最先想起的是地方、食物，還是同行的人？"
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
    "deeperQuestion": "Would watching your friend demonstrate once make you more willing to try?",
    "zh": {
      "title": "不用擅長也可以陪",
      "scenario": "朋友很喜歡一項你完全不擅長的活動，邀你試最簡單的版本。他不需要你表現好，只想讓你知道自己平常在享受甚麼。",
      "question": "你最願意接受哪種邀請？",
      "twist": "",
      "deeperQuestion": "如果可以先看朋友示範一次，你會比較願意試嗎？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v4-party-036",
    "category": "Party",
    "emoji": "🎉",
    "title": "Thanks for remembering",
    "scenario": "Each of you chooses something you want to do often but lose to busy days, such as watching sunsets, playing music or buying flowers at the market. You may ask a friend to check in occasionally or invite them along.",
    "question": "What would you ask them to remember?",
    "twist": "",
    "deeperQuestion": "How could they bring it up later as support rather than pressure?",
    "zh": {
      "title": "謝謝你記得",
      "scenario": "你們各選一件想常常做、卻容易被忙碌擠掉的小事，例如看日落、練琴或去市場買花。可以請一位朋友偶爾問起，也可以邀他一起做。",
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
    "question": "Which category would you protect most? Give an example you would pay a little extra for.",
    "twist": "",
    "deeperQuestion": "Which expense makes more sense after hearing everyone?",
    "zh": {
      "title": "四種假期預算",
      "scenario": "你們有一筆共同旅行預算，要分給吃、住、活動和交通。先各自說最不想省的一項，再一起分配，不能只按多數決。",
      "question": "你最想保住哪一項？請舉一個你願意為它多付一點的例子。",
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
    "question": "Which task would you choose first, and which would you ask a friend to handle?",
    "twist": "",
    "deeperQuestion": "Do you tend to choose a task or wait to be assigned one?",
    "zh": {
      "title": "餐桌上的任務",
      "scenario": "你們要一起煮一餐，食材已齊，但沒有人是總指揮。開始前每人可以說一件拿手和一件不想負責的事。",
      "question": "你會先認領哪項工作，哪一項想請朋友接手？",
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
    "deeperQuestion": "After hearing the choices, what kind of travel fatigue had you not considered before?",
    "zh": {
      "title": "理想休息站",
      "scenario": "你們要替長途旅行的人設計一個休息站，只能提供三樣東西。可以是食物、設施或一種服務，收費都很便宜。",
      "question": "你最想提供甚麼？",
      "twist": "",
      "deeperQuestion": "聽完大家的選擇，有哪種旅途上的累是你以前沒想過的？"
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
    "deeperQuestion": "What moment would you ask the award-giver about to learn when they noticed this skill?",
    "zh": {
      "title": "奇怪但合理的獎項",
      "scenario": "你們辦一場小頒獎禮，獎項必須來自真的觀察，例如「最會找舒服座位」。每人只能頒給另一人一個獎。",
      "question": "你想頒甚麼獎給誰？",
      "twist": "",
      "deeperQuestion": "你最想問頒獎的人，他在哪一次發現你有這個本領？"
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
    "title": "A sentence on an umbrella",
    "scenario": "You have umbrellas to lend to passers-by for free. Inside each, you may print one sentence for the person sheltering beneath it, who might later lend it to another stranger.",
    "question": "What would you write to make a rainy day a little different?",
    "twist": "",
    "deeperQuestion": "If you borrowed it while exhausted, what words would actually make you smile?",
    "zh": {
      "title": "雨傘上寫的一句話",
      "scenario": "你們得到一批可以免費借給路人的雨傘，每把傘內側能印一句話。下雨的人抬頭就會看見，也可能把傘借給下一個陌生人。",
      "question": "你想寫甚麼，讓一個下雨天有一點不同？",
      "twist": "",
      "deeperQuestion": "如果是很疲倦的你借到這把傘，甚麼話會讓你真的笑一下？"
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
      "scenario": "你們要為一趟兩小時車程做歌單，每人先放兩首。別人不熟悉也要聽一小段，再由推薦的人說一句原因。",
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
    "scenario": "Choose a friend and try their lunch-break routine: the same food, a familiar walk or their usual resting spot. Extra costs are covered, and everyone has one hour.",
    "question": "Whose version would you try?",
    "twist": "",
    "deeperQuestion": "Is your lunch break mainly recovery or catching up on tasks?",
    "zh": {
      "title": "午餐時間交換",
      "scenario": "你們各選一位朋友，試著照他的習慣過一次午休：吃同樣的午餐、走他常走的路，或去他休息的地方。多出的費用有人補貼，時間都是一小時。",
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
    "scenario": "Make a little shelf for things you are curious about. Add a book, a booklet or simply a card with a question. Give each curiosity a place.",
    "question": "What would you add?",
    "twist": "",
    "deeperQuestion": "Whom would you invite to explore it with you?",
    "zh": {
      "title": "我們的好奇書架",
      "scenario": "你們一起設一個小書架，放關於自己最近好奇的事的讀物。可以放書、手冊，也可以只放一張寫著問題的卡。大家想了解甚麼，就替它留一格。",
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
    "title": "The last dessert voucher",
    "scenario": "One prize remains at your gathering: a voucher for a dessert everyone likes, for one person to take home. There will be another voucher next time. You may invent a way to choose the recipient.",
    "question": "What method would you suggest?",
    "twist": "",
    "deeperQuestion": "Does fairness mean taking turns, drawing lots or considering who wants it most?",
    "zh": {
      "title": "最後一張甜點券",
      "scenario": "聚會抽獎剩下一張甜點券，可以換一份你們都很喜歡的甜點。只能由一人帶走，下次聚會還會有另一張券。大家可以自創一個決定方法。",
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
    "deeperQuestion": "If a friend wanted only to sleep and join no activities, what would you prepare for them?",
    "zh": {
      "title": "一起設計休息日",
      "scenario": "你們要替一群很累的人安排一天，不能把休息排成滿滿行程。每人只加一個可自由參加的小選項。",
      "question": "你的選項是甚麼？",
      "twist": "",
      "deeperQuestion": "如果有朋友只想睡覺、不參加任何活動，你會替他準備甚麼？"
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
    "title": "No need for a whole free day",
    "scenario": "A long-promised reunion never finds a whole free day. Instead of a trip or dinner, you plan something that takes half an hour, for whoever can join.",
    "question": "What would you suggest to make meeting more likely?",
    "twist": "",
    "deeperQuestion": "Do you currently need frequent short meetings or rare, longer conversations?",
    "zh": {
      "title": "不用等大家都有空一整天",
      "scenario": "你們說了很久要再聚，卻總湊不到完整一天。這次先不約旅行或大餐，只找一件半小時就能一起做的小事，有空的人來就好。",
      "question": "你會提議做甚麼，讓大家比較容易真的見上一面？",
      "deeperQuestion": "短短見面但比較常，和難得見面卻聊很久，你現在更需要哪一種？",
      "twist": ""
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
    "title": "Only three drawers",
    "scenario": "A magical cabinet has four drawers: a childhood flavour, a favourite view, a skill you want to learn, and news of an old friend. Each group may open three tonight.",
    "question": "Which would you leave closed? Each first name the one you least want to miss.",
    "twist": "",
    "deeperQuestion": "If you could return alone tomorrow, which drawer would you most want to revisit?",
    "zh": {
      "title": "只能開三個抽屜",
      "scenario": "一個神奇櫃子有四個抽屜，分別裝著童年的味道、最喜歡的風景、一種想學的本領和一位老朋友的近況。每組今晚只能打開三個。",
      "question": "你們會留下哪個不開？每人先說最不想放棄的一個。",
      "twist": "",
      "deeperQuestion": "如果明天可以獨自回來，你最想再看哪個抽屜？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v4-party-073",
    "category": "Party",
    "emoji": "🎉",
    "title": "A small skill each",
    "scenario": "Form a team for everyday life, each bringing a useful little skill. Skip job titles and achievements: repairing things, finding cheap tickets or picking good oranges all count.",
    "question": "What skill would you contribute?",
    "twist": "",
    "deeperQuestion": "Whose skill would you most like to learn?",
    "zh": {
      "title": "一人一個小本領",
      "scenario": "你們要組成一支生活小隊，每人帶來一項能幫忙的小本領。不用說職稱或成就，像修東西、找便宜車票，甚至挑好吃的橙都可以。",
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
    "question": "Would you start on time, begin with free time, or use another arrangement?",
    "twist": "",
    "deeperQuestion": "What most affects your mood while waiting?",
    "zh": {
      "title": "如果人人遲到一次",
      "scenario": "你們為一個新社團設計遲到安排，每人都可能偶爾遲到。分組想一個既照顧準時的人，也不讓遲到者難堪的方法。",
      "question": "你們會準時開始、留一段自由活動，還是有其他安排？",
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
    "title": "A new name for weather",
    "scenario": "The weather service asks you to name a lovely kind of weather. Rather than sunny or cool, it should suggest something to do, like weather for walking one stop farther.",
    "question": "What name would your group choose? Whom would you invite out on that day?",
    "twist": "",
    "deeperQuestion": "If it could happen just once a year, which month would you save it for?",
    "zh": {
      "title": "一個全新的天氣名字",
      "scenario": "氣象台請你們替一種很舒服的天氣命名。不是「晴天」或「涼爽」，而是像「適合走遠一站」那樣，讓人一聽便想做點甚麼。",
      "question": "每組會取甚麼名字？那天你們想邀誰出門？",
      "twist": "",
      "deeperQuestion": "如果只能在一年裡有一天這種天氣，你會把它留在哪個月份？"
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
    "deeperQuestion": "Which unfamiliar role would you try if you could swap?",
    "zh": {
      "title": "理想旅伴不只一種",
      "scenario": "大家先選旅行中最想負責的角色：找路、找吃的、拍照、留意大家狀態或自由支援。再看看每組還缺甚麼。",
      "question": "你最想做哪個角色？",
      "twist": "",
      "deeperQuestion": "如果試一個平常不做的角色，你想換哪一個？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v4-party-079",
    "category": "Party",
    "emoji": "🎉",
    "title": "Different ways to recharge",
    "scenario": "Choose a group based on how you want to rest today: solitude, conversation, activity or sleep. Each group designs a ten-minute rest space, then everyone hears the ideas and chooses one to try.",
    "question": "Which group would you join?",
    "twist": "",
    "deeperQuestion": "Which unfamiliar station sounds worth trying?",
    "zh": {
      "title": "不一樣的充電站",
      "scenario": "大家按今天最想怎樣休息，選獨處、聊天、活動或睡覺其中一組。每組設計一個十分鐘的休息角落，介紹後，其他人再選一個想試的。",
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
      "scenario": "各組分享一個朋友出遊的小故事，每人加一句。走到岔路時，下一個人要選角色繼續探索還是回熟悉的地方。",
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
    "scenario": "Choose your preferred seat on a long journey: window or aisle, front or back, combining them however you like. Find someone with a different choice and share a practical reason without trying to persuade them.",
    "question": "Where would you sit?",
    "twist": "",
    "deeperQuestion": "Who has the opposite preference on something you assumed everyone liked?",
    "zh": {
      "title": "沒有標準的舒服",
      "scenario": "大家投票選長途車上最想坐的位置：窗邊或走道、前排或後排，可以組合著選。再找一個選得不同的人，各說一個實際理由，不用說服對方。",
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
    "title": "Saving a good seat for a stranger",
    "scenario": "You may add a public bench anywhere in the city, with one short invitation beside it, such as asking people to wait for sunset or words of your own.",
    "question": "Where would your group put the bench, and what invitation would you write?",
    "twist": "",
    "deeperQuestion": "What kind of person would you hope sat there first?",
    "zh": {
      "title": "替陌生人留一個好位置",
      "scenario": "你們可以在城市任何地方添一張公共長椅，長椅旁只准留一個簡短邀請。可以是「在這裡等日落」，也可以是你們想出來的一句話。",
      "question": "每組會把椅子放在哪裡，寫甚麼邀請？",
      "twist": "",
      "deeperQuestion": "你希望最先坐下的是怎樣的一個人？"
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
    "deeperQuestion": "Would your base feel lively and playful, or quiet and cosy? Which item best shows that choice?",
    "zh": {
      "title": "小組的理想基地",
      "scenario": "每組得到一個房間作為朋友基地，只能添三樣東西。不能放工作設備，目標是讓大家願意偶爾來坐。",
      "question": "你們會放甚麼？",
      "twist": "",
      "deeperQuestion": "你們想把基地布置得熱鬧好玩，還是安靜舒服？哪件東西最能看出這個選擇？"
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
    "title": "The swap voucher in your bag",
    "scenario": "Each of you has a voucher to swap one small daily habit with a friend for a week: breakfast, a walking route or how you listen to music. Jobs stay the same and you need not copy their whole life.",
    "question": "Whose habit would you swap for, and which one? First ask why they like it.",
    "twist": "",
    "deeperQuestion": "What would make you keep the new habit after the week?",
    "zh": {
      "title": "背包裡的交換券",
      "scenario": "你們每人有一張券，可以跟朋友交換一個星期的生活小習慣。可以換早餐、散步路線或聽音樂的方式，不用換工作，也不用完全模仿對方。",
      "question": "你想跟誰交換哪個習慣？先問問他為甚麼喜歡它。",
      "twist": "",
      "deeperQuestion": "一星期後，怎樣才會讓你決定把新習慣留下？"
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
    "deeperQuestion": "Is there a friend who might also be happy to receive a message like this?",
    "zh": {
      "title": "最想收到的訊息",
      "scenario": "每人寫一則自己很想收到的普通訊息，不用指名誰寄。可以是邀請、問候或分享一件小事，選擇性讀給大家聽。",
      "question": "你會寫甚麼？",
      "twist": "",
      "deeperQuestion": "想一想，有沒有一位朋友，也會很開心收到這樣的訊息？"
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
    "scenario": "For your next gathering, you can plan activities, choose just a theme, or decide everything on the day. Each person chooses and explains what appeals to them.",
    "question": "What would you prefer?",
    "twist": "",
    "deeperQuestion": "Could one small adjustment help people with different preferences feel at ease?",
    "zh": {
      "title": "給聚會留空白",
      "scenario": "你們安排下一次聚會，可以選排好活動、只定一個主題，或到時自由決定。大家先各選，再說這個安排最吸引自己的地方。",
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
    "title": "One more hour before goodbye",
    "scenario": "This gathering gains an hour with no transport or tidying pressure. Vote for more games, small-group talk, quiet company or leaving freely.",
    "question": "What would you choose?",
    "twist": "",
    "deeperQuestion": "At what point in a gathering do you feel you have had a lovely time and are ready to head home?",
    "zh": {
      "title": "散場前多出的一小時",
      "scenario": "假設這場聚會突然多一小時，不用趕車也不用收拾。大家投票選繼續玩、分小組聊、安靜坐或自由離開。",
      "question": "你會選甚麼？",
      "twist": "",
      "deeperQuestion": "聚會到甚麼時候，你會覺得已經玩得很開心，可以滿足地回家？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v4-party-099",
    "category": "Party",
    "emoji": "🎉",
    "title": "One thing to remember before leaving",
    "scenario": "Before leaving, share one new thing you learned about someone, checking their comfort first or telling them privately instead.",
    "question": "What little thing you learned about a friend today would you like to remember?",
    "twist": "",
    "deeperQuestion": "How might knowing it affect your next time together?",
    "zh": {
      "title": "散場前想記住的一件事",
      "scenario": "散場前，每人可以說一句今天從別人身上認識到的新事。先確認對方願意被提起，也可以只私下告訴本人。",
      "question": "今天聽到哪件關於朋友的小事，是你想記住的？",
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
      "question": "你會先說甚麼？",
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
    "title": "Three thousand for everyday comfort",
    "scenario": "You receive HK$3,000 to improve an everyday inconvenience: a pillow, a repair, some help or another idea entirely.",
    "question": "What would you improve first?",
    "twist": "",
    "deeperQuestion": "What has kept you from addressing something that bothers you often?",
    "zh": {
      "title": "讓日子舒服一點的三千元",
      "scenario": "你收到三千元生活禮金，想用來改善一件每天都遇到的小麻煩。可以換枕頭、修東西、請人幫忙，也可以想到完全不同的用途。",
      "question": "你最想先改善甚麼？",
      "twist": "",
      "deeperQuestion": "這件事明明常常困擾你，為甚麼一直沒處理？"
    }
  },
  {
    "id": "ponder-v4-solo-008",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Borrow a working day",
    "scenario": "You win a chance to try any kind of work for a day, guided by someone experienced, without first earning qualifications. The next day you return to your usual life.",
    "question": "What work would you try, and which part would you most want to do?",
    "twist": "",
    "deeperQuestion": "Do you envy the work itself or the life you imagine around it?",
    "zh": {
      "title": "借一份工作過一天",
      "scenario": "你抽中一次「換工作體驗」：可以到任何一種工作現場待一天，有熟手帶著你做，不用先考證照。隔天照常回到自己的生活。",
      "question": "你想試甚麼工作？最想親自做哪一部分？",
      "deeperQuestion": "你羨慕的是那份工作本身，還是你想像中從事它的生活？",
      "twist": ""
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
    "deeperQuestion": "Which object's story would you like to hear again from someone who knew you then?",
    "zh": {
      "title": "自己的小型展覽",
      "scenario": "你可以辦一個只給自己看的小展覽，放五件代表人生不同時期的東西。沒有觀眾，所以不用選看起來厲害的。",
      "question": "你會先放哪件？",
      "twist": "",
      "deeperQuestion": "哪件物品的故事，你最想再聽當時認識你的人說一次？"
    }
  },
  {
    "id": "ponder-v4-solo-013",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Enjoying without improving",
    "scenario": "On the first day of a hobby class, the teacher says there are no tests or comparisons. You can stay a beginner as long as you enjoy it.",
    "question": "What would you most want to learn in a class like this?",
    "twist": "",
    "deeperQuestion": "Would you still want to continue after a year without becoming particularly good?",
    "zh": {
      "title": "不進步，也可以喜歡",
      "scenario": "你報名一個興趣班，老師第一天就說：「這裡沒有考試，也不比較誰進步得快。你可以一直做新手，只要自己玩得開心。」",
      "question": "如果是這樣的課，你最想學甚麼？",
      "deeperQuestion": "如果學了一年還是普通，你還會想繼續嗎？",
      "twist": ""
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
    "title": "The try-again shop",
    "scenario": "A little shop arranges a second attempt at an experience you once gave up, with patient guidance and no fee, but no guaranteed success.",
    "question": "What would you retry, and what would you do differently?",
    "twist": "",
    "deeperQuestion": "Did you stop from dislike or because the circumstances were wrong then?",
    "zh": {
      "title": "再試一次的小店",
      "scenario": "街角有一家小店，可以替你安排一次以前放棄過的體驗。老師會陪你重新開始，費用也不用擔心，但不保證這次一定做得好。",
      "question": "你想再試哪件事？這次想用甚麼不同的方法？",
      "twist": "",
      "deeperQuestion": "上次離開時，是覺得不喜歡，還是當時的情況不適合？"
    }
  },
  {
    "id": "ponder-v4-solo-016",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A weekend among strangers",
    "scenario": "You join a weekend workshop where nobody knows your usual reputation as dependable, quiet or caring.",
    "question": "How might you behave differently from usual?",
    "twist": "",
    "deeperQuestion": "Which impression of you sometimes makes it harder to be yourself?",
    "zh": {
      "title": "沒有人認識你的週末",
      "scenario": "你參加一個週末工作坊，現場沒有人認識你。大家不知道你平常是「最可靠的」「很安靜的」，還是「很會照顧人」的那一位。",
      "question": "你猜自己會跟平常有甚麼不同？",
      "deeperQuestion": "別人對你的哪個印象，偶爾會讓你覺得不能做自己？",
      "twist": ""
    }
  },
  {
    "id": "ponder-v4-solo-017",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Which freedom comes first?",
    "scenario": "A shop gives you one month of freedom: arrange your days as you wish, try living somewhere new, or make everyday choices without having to explain them. Work and household responsibilities will be taken care of.",
    "question": "Which freedom would you choose, and what would you do first?",
    "twist": "",
    "deeperQuestion": "Do you most lack time, choices or room not to explain yourself?",
    "zh": {
      "title": "自由，先選哪一種？",
      "scenario": "有一家小店送你一張一個月有效的自由券。可以選每天自由安排時間、到一個想試住的地方生活，或做日常決定時不用向別人交代。工作和家務仍會妥善完成，不用擔心給人添麻煩。",
      "question": "你最想換哪一種自由？得到之後，第一件事會做甚麼？",
      "deeperQuestion": "你現在最缺的，是時間、選擇，還是不必交代的空間？",
      "twist": ""
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
    "title": "Try another neighbourhood",
    "scenario": "Move to another neighbourhood for a month with similar rent and commute. Familiar people remain nearby, but daily routes change.",
    "question": "What kind of neighbourhood would you try?",
    "twist": "",
    "deeperQuestion": "Are you seeking a new environment or a change in a repeating habit?",
    "zh": {
      "title": "試住另一個街區",
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
    "title": "A dish without a name",
    "scenario": "A restaurant serves a new dish without naming its ingredients, origin or price. After you rate it, you learn it includes something you rarely order.",
    "question": "Would learning the ingredients change your opinion?",
    "twist": "",
    "deeperQuestion": "How much of liking food comes from taste, and how much from its story?",
    "zh": {
      "title": "一道沒有名字的菜",
      "scenario": "餐廳請你試一道新菜，吃之前不說食材、產地或價錢。你先寫下喜不喜歡，之後才知道它其實用了你平常不會點的食材。",
      "question": "知道食材後，你會改變評價嗎？",
      "twist": "",
      "deeperQuestion": "你對食物的喜歡，有多少來自味道，有多少來自它的故事？"
    }
  },
  {
    "id": "ponder-v4-solo-021",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A private purchase",
    "scenario": "You receive money for something purely for your own enjoyment. You will not post it or give it away, and nobody will know how you spent it.",
    "question": "What would you buy?",
    "twist": "",
    "deeperQuestion": "How much of your wish list would you want even if nobody knew?",
    "zh": {
      "title": "一筆不用展示的花費",
      "scenario": "你收到一筆禮金，想買一樣純粹給自己享受的東西。它不會出現在社交平台，也不會拿來送人；沒有人會知道你怎樣花了這筆錢。",
      "question": "你會買甚麼？",
      "twist": "",
      "deeperQuestion": "你的願望清單裡，有多少是沒人知道也想要的？"
    }
  },
  {
    "id": "ponder-v4-solo-022",
    "category": "Solo",
    "emoji": "🌿",
    "title": "The slower way home",
    "scenario": "One route home saves fifteen minutes; another has scenery you enjoy. Nothing is urgent today, although you usually choose speed.",
    "question": "Which route would you take today?",
    "twist": "",
    "deeperQuestion": "Do you usually spend the time saved on something you actually want?",
    "zh": {
      "title": "慢十五分鐘的回家路",
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
    "deeperQuestion": "What small task done ahead for you would make you feel most cared for?",
    "zh": {
      "title": "讓未來的你少一件事",
      "scenario": "你有半小時，可以替下星期的自己預先處理一件小事。不能做大計劃，只選一件真的能減少麻煩的事。",
      "question": "你會選甚麼？",
      "twist": "",
      "deeperQuestion": "有人替你提早做好哪一件小事，會讓你感到最被照顧？"
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
    "deeperQuestion": "If you enjoyed the change, would you want to keep it tomorrow?",
    "zh": {
      "title": "如果今天沒有觀眾",
      "scenario": "你今天做的所有選擇都不會被別人評論，明天生活照常。你不用刻意叛逆，只能改一個平常的小決定。",
      "question": "你會改哪件小事？",
      "twist": "",
      "deeperQuestion": "如果真的喜歡這個改變，你想不想明天也保留下來？"
    }
  },
  {
    "id": "ponder-v4-solo-028",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Must everything be done first?",
    "scenario": "At nine in the evening, you plan to tidy your room when a film you have wanted to see becomes available. Tidying can wait until tomorrow, but the clutter on your desk makes switching off difficult.",
    "question": "Would you tidy first or leave the room messy for one evening? Why?",
    "twist": "",
    "deeperQuestion": "Can you rest when you are tired, or do you need things finished to feel at ease?",
    "zh": {
      "title": "收拾完，才可以休息？",
      "scenario": "晚上九點，你本來打算收拾房間，卻發現一部很想看的電影剛剛上架。房間明天再整理也來得及，但桌上的雜物還在眼前，讓你有點放不下。",
      "question": "你會先收拾好再看電影，還是讓房間亂一晚？為甚麼？",
      "deeperQuestion": "對你來說，休息是累了就可以，還是把事情做完才安心？",
      "twist": ""
    }
  },
  {
    "id": "ponder-v4-solo-029",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Borrow a friend's knack",
    "scenario": "You may borrow a friend's everyday knack for a week: navigation, storytelling, repairs or meeting people. Afterwards the skill returns, but the experience stays.",
    "question": "Which would you borrow, and what would you do with it?",
    "twist": "",
    "deeperQuestion": "Which of your abilities might the friend choose in return?",
    "zh": {
      "title": "借一個朋友的本領",
      "scenario": "你可以借朋友的一項生活本領一星期，例如認路、說故事、修東西或很快跟人熟起來。星期過後，本領會回到他身上，你留下那週的經歷。",
      "question": "你會借哪一項？最想拿來做甚麼？",
      "twist": "",
      "deeperQuestion": "如果朋友也借你一項本領，你猜他會選甚麼？"
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
    "title": "A place to ask the basics",
    "scenario": "A workshop promises to answer every basic question seriously without laughing. Bring something you usually hesitate to ask.",
    "question": "What would you ask?",
    "twist": "",
    "deeperQuestion": "What judgement do you fear when asking questions?",
    "zh": {
      "title": "放心問一句「這是甚麼？」",
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
    "title": "Read the last page first?",
    "scenario": "A novel promises an unexpected ending. Its bookmark hides the final page, so you could learn the main character's fate first.",
    "question": "Would you peek or save it for the end?",
    "twist": "",
    "deeperQuestion": "Does knowing an outcome help you engage or reduce discovery?",
    "zh": {
      "title": "先看最後一頁？",
      "scenario": "你借到一本很吸引的小說，店員說結局會很出乎意料。書籤上藏著最後一頁，翻開就能先知道主角的下場。",
      "question": "你會先看，還是忍住留到最後？",
      "twist": "",
      "deeperQuestion": "知道結果會讓你更安心地投入，還是少了探索的樂趣？"
    }
  },
  {
    "id": "ponder-v4-solo-035",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A proper meal for one",
    "scenario": "Tonight you have time and ingredients you like for a dinner just for you. No guests or hurry: choose the dishes and setting your way.",
    "question": "What would you make or arrange?",
    "twist": "",
    "deeperQuestion": "How different is making an effort for yourself from hosting someone else?",
    "zh": {
      "title": "一個人，也好好吃一餐",
      "scenario": "今晚有時間，也有喜歡的食材，你決定只為自己準備一頓晚餐。沒有客人，不趕時間，菜式和擺盤都可以照自己的意思。",
      "question": "你會煮或安排甚麼？",
      "twist": "",
      "deeperQuestion": "只為自己花心思，跟招待別人有多不一樣？"
    }
  },
  {
    "id": "ponder-v4-solo-036",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Seeing yourself through a friend's eyes",
    "scenario": "Someone you trust gives three descriptions of you, including one you never use. Try seeing yourself through it for a week without needing instant belief.",
    "question": "What would you hope the new word is?",
    "twist": "",
    "deeperQuestion": "Do you more readily accept appreciation or criticism?",
    "zh": {
      "title": "從朋友眼中認識自己",
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
    "title": "A walk with no destination",
    "scenario": "Walk your neighbourhood for an hour without step counts, lessons or errands. Sit when tired, with no route to finish.",
    "question": "Where would you go?",
    "twist": "",
    "deeperQuestion": "Would you notice the street more or your own thoughts?",
    "zh": {
      "title": "沒有目的地的散步",
      "scenario": "你有一小時可以在熟悉街區走走，不記步數，不聽課程，也不用辦事。走累了可以坐下，不需要完成路線。",
      "question": "你最想往哪裡走？",
      "twist": "",
      "deeperQuestion": "你會更容易留意街上的事，還是腦裡自己的想法？"
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
    "title": "No excuse needed",
    "scenario": "A weekend invitation sounds pleasant, but you would rather stay home. Before you reply, the friend says you can rest without an excuse and meet another time.",
    "question": "How would you respond after hearing that?",
    "twist": "",
    "deeperQuestion": "Even with their reassurance, would you still feel you owed an explanation?",
    "zh": {
      "title": "不用編理由的拒絕",
      "scenario": "週末有個你還沒答應的邀請，內容不差，但你其實很想留在家。對方補了一句：「想休息就休息，不用找理由，我們下次再約。」",
      "question": "聽到這句話，你會怎樣回覆？",
      "deeperQuestion": "別人已經說不介意時，你還會不會覺得自己欠一個解釋？",
      "twist": ""
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
    "title": "Three colours on your calendar",
    "scenario": "You colour last month's calendar by obligation, desire and habit, allowing more than one colour per event.",
    "question": "Which colour would dominate, and which event is hardest to classify?",
    "twist": "",
    "deeperQuestion": "Which colour would you make more room for next month?",
    "zh": {
      "title": "日曆裡的三種顏色",
      "scenario": "你翻看上個月的日曆，準備用三種顏色標記：不得不做、自己想做、只是照習慣做。同一件事可以有兩種顏色。",
      "question": "你猜哪種顏色最多？哪一格最難分類？",
      "twist": "",
      "deeperQuestion": "下個月你想替哪一種顏色多留一點位置？"
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
    "deeperQuestion": "What do you enjoy that friends do not understand, and how would you introduce it?",
    "zh": {
      "title": "一個不需解釋的喜好",
      "scenario": "你可以選一天完全照自己的小喜好生活，食物、衣服、音樂都不用有品味或有道理。必要事情仍照常完成。",
      "question": "你會先選哪個平常不太敢承認的喜好？",
      "twist": "",
      "deeperQuestion": "有哪個你喜歡、朋友卻不明白的東西？你會怎樣介紹它？"
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
    "deeperQuestion": "Which of those moments could you try creating now, without waiting to move?",
    "zh": {
      "title": "未來的家不比大小",
      "scenario": "你可以規劃未來的家，但這次不比較面積、地段或價值。只能描述三個想在裡面發生的普通時刻。",
      "question": "你會描述哪三個時刻？",
      "twist": "",
      "deeperQuestion": "哪個畫面不用等到搬家，現在就可以先試著過？"
    }
  },
  {
    "id": "ponder-v4-solo-045",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Seeds that may not bloom",
    "scenario": "A packet of seeds may take months to flower, and may not flower this season. You can still watch shoots and leaves grow with daily care.",
    "question": "Would you plant them, and which stage would you enjoy most?",
    "twist": "",
    "deeperQuestion": "Without flowers, what could still make the care worthwhile?",
    "zh": {
      "title": "不一定開花的種子",
      "scenario": "有人送你一包花種，說可能幾個月才開花，也可能這次不會開。你仍會看見發芽、長葉，也要每天記得照顧。",
      "question": "你會想種嗎？最期待哪一個過程？",
      "twist": "",
      "deeperQuestion": "如果最後沒有開花，甚麼會讓你覺得這段照顧仍然值得？"
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
    "scenario": "A button makes you less afraid of embarrassment for ten minutes, enough to start a conversation, sign up or finish something you want to say.",
    "question": "When would you press it?",
    "twist": "",
    "deeperQuestion": "Is beginning hardest, or facing the response afterwards?",
    "zh": {
      "title": "勇氣只夠用十分鐘",
      "scenario": "有個小按鈕能讓你十分鐘內沒那麼怕尷尬。你還是你，只是比較敢先開口、報名，或把一句想說的話說完。",
      "question": "你會在哪個時刻按下它？",
      "twist": "",
      "deeperQuestion": "這件事最難的是開始，還是開始之後對方的反應？"
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
    "title": "Three uses for some extra money",
    "scenario": "Divide extra income among security, experiences and sharing, without equal portions or comparison. Your basic living costs are already covered.",
    "question": "How would you divide it?",
    "twist": "",
    "deeperQuestion": "Which portion would make you uneasy if it were too small?",
    "zh": {
      "title": "一筆錢的三種用法",
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
    "title": "A book left unfinished",
    "scenario": "A third of a book has given you memorable lines, but interest is fading and another book is waiting.",
    "question": "Would you finish, skim or switch books?",
    "twist": "",
    "deeperQuestion": "How would you decide that you had read enough?",
    "zh": {
      "title": "一本沒有讀完的書",
      "scenario": "你讀到一本書的三分之一，已找到幾句很喜歡的話，後面的內容卻越來越提不起興趣。書架上還有另一本很想開始的書。",
      "question": "你會讀完、跳著讀，還是換一本？",
      "twist": "",
      "deeperQuestion": "你會怎樣判斷「讀到這裡就夠了」？"
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
    "deeperQuestion": "What would you most want to ask yourself during that three-second pause?",
    "zh": {
      "title": "今天的主動選擇",
      "scenario": "今天有一件平常自動做的小事，可以停三秒再選。可以是回訊息、買飲品、答應邀約或睡前滑手機。",
      "question": "你想在哪件事前停一停？",
      "twist": "",
      "deeperQuestion": "停下來的這三秒，你最想先問自己甚麼？"
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
    "deeperQuestion": "How could they take over in a way that reassures you?",
    "zh": {
      "title": "不用自己扛的部分",
      "scenario": "有人願意可靠地幫你處理一件日常小事，沒有交換條件，也不會拿來評論你的能力。你只需說清楚要怎樣幫。",
      "question": "你會交出哪件事？",
      "twist": "",
      "deeperQuestion": "對方怎樣接手，會讓你放心交給他？"
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
    "deeperQuestion": "If that version of you asked the same question back, how would you answer?",
    "zh": {
      "title": "遇見另一條路的自己",
      "scenario": "你可以跟選了另一條人生路的自己喝一杯茶，對方沒有比你成功或失敗，只是經驗不同。時間夠問一個問題。",
      "question": "你最想問甚麼？",
      "twist": "",
      "deeperQuestion": "如果對方也問你同一題，你會怎樣回答？"
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
    "scenario": "Someone helps with a small thing you really needed, saying no gift in return is necessary. You can simply thank them, or remember the kindness and help someone else when you have the chance.",
    "question": "What would your first response be?",
    "twist": "",
    "deeperQuestion": "Can you enjoy being cared for, or do you quickly plan repayment?",
    "zh": {
      "title": "一份不用回報的好意",
      "scenario": "有人剛好替你做了一件很需要幫忙的小事，說不用回禮。你可以好好道謝，也可以記住這份心意，日後有機會再幫助別人。",
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
    "title": "A free weekday evening",
    "scenario": "A regular weekly commitment pauses for a month, leaving four free evenings. You can try something new or sign up for nothing.",
    "question": "How would you like to spend those four evenings?",
    "twist": "",
    "deeperQuestion": "Would you first ask what you want or look for something useful to fill the time?",
    "zh": {
      "title": "平日晚上，多了一點空閒",
      "scenario": "你每星期有一晚固定安排，這個月剛好暫停了，於是連續四週多出一個晚上。你可以試點新東西，也可以甚麼都不報名。",
      "question": "你想讓這四個晚上怎樣過？",
      "deeperQuestion": "你會先想到自己想做甚麼，還是先找一件「有用」的事填進去？",
      "twist": ""
    }
  },
  {
    "id": "ponder-v4-solo-062",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A shop for three days",
    "scenario": "A shop is yours for three days with basic costs covered. Sell something, serve food or offer a service, then return the key.",
    "question": "What would you offer, and whom would you enjoy welcoming?",
    "twist": "",
    "deeperQuestion": "Would you most enjoy making, arranging or meeting customers?",
    "zh": {
      "title": "只開三天的小店",
      "scenario": "你可以免費借用一間小店三天，基本設備和成本都有人提供。可以賣物品、食物或一種服務，三天後就把鑰匙交回去。",
      "question": "你會開甚麼店？最想迎接怎樣的客人？",
      "twist": "",
      "deeperQuestion": "你比較期待製作、布置，還是跟客人相處？"
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
      "scenario": "你有一小時，可以把一件常被你用「沒甚麼」帶過的事完整說出來。聽的人不趕時間，也不會立刻評價。",
      "question": "你會分享哪件事？",
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
    "title": "A bio that sounds like you",
    "scenario": "You are writing a short introduction for your own website, leaving out job titles. You want a first-time visitor to learn which people, interests or parts of life matter to you these days.",
    "question": "Which three things would you put in that introduction?",
    "twist": "",
    "deeperQuestion": "Which important thing you named keeps getting too little time?",
    "zh": {
      "title": "一行比較像你的簡介",
      "scenario": "你要替自己的小網站寫一句介紹，這次不放職業或頭銜。你想讓第一次來的人知道，最近有哪些人、事情或興趣，是你真正在乎的。",
      "question": "你會在這句介紹裡放進哪三件事？",
      "deeperQuestion": "你寫下的事裡，有哪件很重要，卻一直分不到時間？",
      "twist": ""
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
    "deeperQuestion": "After trying another role, what would you take back and what would you keep sharing?",
    "zh": {
      "title": "重選一次聚會角色",
      "scenario": "下次聚會有人願意接手你平常的角色，例如逗笑、安排或照顧落單的人。你可以試一次不同的參與方式。",
      "question": "你想怎樣待在那裡？",
      "twist": "",
      "deeperQuestion": "試過另一個角色之後，你想拿回哪些部分，繼續交出哪些部分？"
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
    "deeperQuestion": "Which pile of wishes have you been spending more time on lately?",
    "zh": {
      "title": "把心願分成兩種",
      "scenario": "你把心願寫成兩疊：一疊是擁有後會開心，一疊是做的時候已經開心。同一件事可以放兩邊。",
      "question": "你會先各放哪一件？",
      "twist": "",
      "deeperQuestion": "最近你花時間追求的，比較多是哪一疊裡的心願？"
    }
  },
  {
    "id": "ponder-v4-solo-072",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A message for tomorrow morning",
    "scenario": "A bedtime message feels uncomfortable but ambiguous. The friend says there is no rush, and you can clarify tomorrow.",
    "question": "Would you clarify now or sleep first?",
    "twist": "",
    "deeperQuestion": "When might waiting make your reply closer to what you mean?",
    "zh": {
      "title": "明早再回答的訊息",
      "scenario": "睡前，朋友傳來一段讓你有點不舒服的話，語氣又不太確定。他最後說不用急著回，你明早還有時間問清楚。",
      "question": "你會現在問清楚，還是先睡一覺？",
      "twist": "",
      "deeperQuestion": "哪種情況下，等一晚會讓你的回覆更接近真正想說的話？"
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
    "title": "Tomorrow's tiny treasure hunt",
    "scenario": "Tomorrow's small hunt asks you to notice a sound, a striking scene and a kindness. By evening, keep just one in memory.",
    "question": "Which would you notice most easily, and which might you miss?",
    "twist": "",
    "deeperQuestion": "What personal item would you add to the hunt?",
    "zh": {
      "title": "明天的尋寶清單",
      "scenario": "明天有人請你在日常裡找三樣小東西：一個好聽的聲音、一個讓你停下來的畫面，和一件平常沒留意的善意。晚上只需要記住其中一樣。",
      "question": "你猜自己最容易找到哪一樣？最容易錯過哪一樣？",
      "twist": "",
      "deeperQuestion": "如果要加一項只屬於你的尋寶目標，你會加甚麼？"
    }
  },
  {
    "id": "ponder-v4-solo-079",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Your dream cinema",
    "scenario": "A director turns one dream into a ten-minute film for you alone, preserving its feeling without guaranteeing a logical plot.",
    "question": "Which remembered dream would you film? If none comes to mind, invent one.",
    "twist": "",
    "deeperQuestion": "What feeling was strongest in the dream? Have you felt anything similar in everyday life recently?",
    "zh": {
      "title": "夢裡的小影院",
      "scenario": "你可以把昨晚一個夢變成十分鐘電影，只給自己看。導演會保留那種感覺，但不保證故事合理。",
      "question": "如果挑一個記得的夢來拍，你會選哪段？記不起夢，也可以想像一段。",
      "twist": "",
      "deeperQuestion": "夢裡最強烈的是哪種感覺？你最近在生活中也有過類似的感覺嗎？"
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
    "title": "One rule to help everyone feel comfortable",
    "scenario": "Add one small rule to a public space to make it more comfortable, considering people unlike you rather than only your preferences.",
    "question": "Where would you add what rule?",
    "twist": "",
    "deeperQuestion": "Who might dislike it, and can you understand their reason?",
    "zh": {
      "title": "讓大家更舒服的一條規則",
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
    "title": "A bargain pass, busy weekends",
    "scenario": "A four-event pass costs barely more than two tickets, but occupies four weekends and only two events truly interest you.",
    "question": "Would you buy the pass, two tickets or neither?",
    "twist": "",
    "deeperQuestion": "How do you tell saving money from arranging life around a discount?",
    "zh": {
      "title": "便宜的套票，忙碌的週末",
      "scenario": "一套活動票正在特價，買四場比單買兩場只貴一點。但四場會用掉你接下來四個週末，其中兩場你只是有點興趣。",
      "question": "你會買套票、只買兩場，還是先不買？",
      "twist": "",
      "deeperQuestion": "你怎樣判斷自己是在省錢，還是在替優惠安排生活？"
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
      "scenario": "有人想借用你的一個日常習慣一星期，看看生活會有甚麼不同。你要連它的方便和麻煩一起介紹，不能只說好處。",
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
    "title": "Too much change",
    "scenario": "After leaving a shop, you find HK$50 too much change. Returning takes ten minutes, and you are nearly due to meet a friend.",
    "question": "How would you handle it and your meeting time?",
    "twist": "",
    "deeperQuestion": "Would distance or a much smaller amount change your approach?",
    "zh": {
      "title": "店員多找的錢",
      "scenario": "你離開小店後，才發現店員多找了五十元。店離你十分鐘路程，你也快到跟朋友約好的時間。",
      "question": "你會怎樣處理，並向朋友交代時間？",
      "twist": "",
      "deeperQuestion": "如果店很遠，或金額很小，你的處理方法會不同嗎？"
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
    "deeperQuestion": "Has hearing someone's experience ever made you less certain of a view you held?",
    "zh": {
      "title": "選一個陌生答案",
      "scenario": "你可以跟一個對生活選擇很不一樣、卻願意互相聽的人聊一小時。目的不是找出誰對，而是理解對方怎樣走到那裡。",
      "question": "你最想了解哪種選擇？",
      "twist": "",
      "deeperQuestion": "有沒有哪個看法，是在聽過一個人的經歷後，你才不再那麼肯定？"
    }
  },
  {
    "id": "ponder-v4-solo-094",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A portrait without your face",
    "scenario": "A photographer makes your portrait from objects and settings without showing your face. Choose three elements representing your inner life now.",
    "question": "What would you choose?",
    "twist": "",
    "deeperQuestion": "Which is hardest to explain yet feels most like you?",
    "zh": {
      "title": "沒有你的臉，也像你的照片",
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
    "deeperQuestion": "What feeling from today would you hope the piece brought back when you saw it again?",
    "zh": {
      "title": "從零開始的小作品",
      "scenario": "你有一天能完成一個小作品，可以做吃的、寫字、錄音或手作。工具有人準備，作品只需令自己想留著。",
      "question": "你會做甚麼？",
      "twist": "",
      "deeperQuestion": "你希望日後再看見這個作品時，會想起今天甚麼感覺？"
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
    "deeperQuestion": "What would help you decide after three months whether to return?",
    "zh": {
      "title": "不必一直一樣",
      "scenario": "你可以把一個曾很喜歡、現在沒那麼想做的興趣暫停三個月。朋友不會追問，工具也會好好保存。",
      "question": "你會想暫停哪件事，還是沒有？",
      "twist": "",
      "deeperQuestion": "三個月後，你會看甚麼來決定想不想繼續？"
    }
  },
  {
    "id": "ponder-v4-solo-098",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Room for something new",
    "scenario": "You want to try something new and spot a habitual weekly activity that could shrink. It is not essential, just familiar.",
    "question": "What would you reduce, and what would you welcome?",
    "twist": "",
    "deeperQuestion": "Is habit, expectation or fear of missing out hardest to release?",
    "zh": {
      "title": "留一個位置給新東西",
      "scenario": "你想試一件新事，翻開每週行程，發現可以減少一件習慣性的安排來騰出時間。它沒有一定要做，只是一直照舊。",
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
    "deeperQuestion": "What would you ask your past self? And what would you ask your future self to let you take your time with?",
    "zh": {
      "title": "給現在的自己一個位置",
      "scenario": "你可以跟過去和未來的自己坐在一張桌上，三人都有同樣長的說話時間。今天不由最成功或最年輕的人決定話題。",
      "question": "現在的你，最想先說甚麼？",
      "twist": "",
      "deeperQuestion": "你最想問過去的自己甚麼？又有哪件事，想請未來的自己別催你，讓你慢慢來？"
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
    "question": "How would you make room that evening to celebrate and also hear about your partner's disappointment?",
    "deeperQuestion": "If you were disappointed, what support would let you stop pretending to be happy?",
    "twist": "",
    "zh": {
      "title": "安靜的慶祝",
      "scenario": "你終於升職，伴侶也很開心，但同一天收到落選通知。你已訂好餐廳，對方說照去就好。",
      "question": "你會怎樣過這一晚，既能慶祝，也能陪伴侶聊聊他的失落？",
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
    "question": "How would you explain why this photo matters to you?",
    "deeperQuestion": "What other action would reassure you?",
    "twist": "",
    "zh": {
      "title": "一段沒公開的戀愛",
      "scenario": "你想把合照放上社交平台，伴侶卻一直不喜歡公開私生活。朋友開始問你，對方是不是不認真。",
      "question": "你會怎樣跟對方說明，為甚麼這張合照對你有意義？",
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
    "deeperQuestion": "Would you keep using the camera or consider replacing it? What would you most want your partner to understand?",
    "twist": "",
    "zh": {
      "title": "留下來的禮物",
      "scenario": "你仍在用前任送的相機，因為它很好用，也陪你拍過很多作品。伴侶看到後有點介意，但沒有要求你丟掉。",
      "question": "你會怎樣談這件物品對你現在的意義？",
      "deeperQuestion": "你會繼續用這部相機，還是考慮換掉？你最希望伴侶理解哪一點？",
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
    "title": "A smaller dating budget",
    "scenario": "Your partner's income falls and they suggest staying in for every date. You can afford occasional outings.",
    "question": "Would you suggest cheaper dates, pay more for a while, or find another arrangement?",
    "deeperQuestion": "If your income fell instead, how would you want your partner to bring it up?",
    "twist": "",
    "zh": {
      "title": "約會預算變少了",
      "scenario": "伴侶收入突然減少，提議所有約會都在家。你願意節省，但也很想偶爾出門，而你暫時負擔得起。",
      "question": "你會提議減少花費、暫時多付一點，還是另想辦法？",
      "deeperQuestion": "如果換成你的收入減少，你希望對方怎樣提出這件事？",
      "twist": ""
    },
    "id": "ponder-v5-couple-012",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Opening night",
    "scenario": "Your partner holds their first photography exhibition. You spend several weekends moving frames and labelling prints. During the opening they are busy greeting guests and forget to thank you. At home, they excitedly ask which photo you liked best.",
    "question": "Would you talk about the exhibition first or mention feeling overlooked? What would you want them to understand?",
    "deeperQuestion": "Would you feel differently if they were very grateful privately but awkward about saying so publicly?",
    "twist": "",
    "zh": {
      "title": "展覽開幕那一晚",
      "scenario": "伴侶第一次辦攝影展，你連續幾個週末幫忙搬相框、貼標籤。開幕時，對方忙著招呼客人，致謝時也忘了提你。回家後，對方興奮地問你最喜歡哪張照片。",
      "question": "你會先聊展覽，還是先說自己有點失落？你希望對方明白甚麼？",
      "deeperQuestion": "如果對方私下很感謝你，只是不擅長公開表達，你的感受會不同嗎？",
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
    "deeperQuestion": "If you could keep one ritual just for the two of you, what would it be?",
    "twist": "",
    "zh": {
      "title": "喜歡的人變了",
      "scenario": "伴侶最近投入一種你完全沒興趣的活動，也交了新朋友。他沒有少關心你，你卻懷念以前凡事都一起的日子。",
      "question": "你會怎樣靠近他的改變，又保留自己的生活？",
      "deeperQuestion": "如果可以保留一個只屬於你們的習慣，你會選甚麼？",
      "twist": ""
    },
    "id": "ponder-v5-couple-014",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "A bigger place together?",
    "scenario": "After a raise, your partner wants a place with a balcony that costs thirty percent more. You like it too, but splitting rent equally would leave you barely able to save. Your current home is small but workable.",
    "question": "Would you stay, split rent according to income, or accept saving less? Why?",
    "deeperQuestion": "Would you suggest the same arrangement if you earned more?",
    "twist": "",
    "zh": {
      "title": "一起搬大一點？",
      "scenario": "伴侶加薪後，想搬到有陽台的房子，租金會增加三成。你也喜歡那裡，但如果仍然一人付一半，你每月就幾乎存不到錢。現在的房子雖然小，你們仍住得下。",
      "question": "你會留在原處、按收入分租金，還是接受少存一點？為甚麼？",
      "deeperQuestion": "如果收入較高的是你，你會提出同一個安排嗎？",
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
    "question": "How would you explain that wanting a solo trip does not mean you dislike travelling together?",
    "deeperQuestion": "What would your first reaction be if they asked instead?",
    "twist": "",
    "zh": {
      "title": "一個人的假期",
      "scenario": "你很想獨自旅行一星期，伴侶聽完卻問：「跟我一起不好嗎？」你喜歡一起旅行，也真的想試試只照顧自己。",
      "question": "你會怎樣讓伴侶明白，想獨自旅行不代表不喜歡跟他一起？",
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
    "scenario": "Your partner talks important things through with an old friend before telling you. You value that friendship, but wish you could hear earlier and think things through together too.",
    "question": "Do you want to hear first, or to be more involved?",
    "deeperQuestion": "What would you also need to discuss with someone else first?",
    "twist": "",
    "zh": {
      "title": "好消息先告訴誰",
      "scenario": "伴侶遇到重要的事，總先找老朋友談，想清楚才告訴你。你知道那段友誼很重要，卻也希望能早一點知道，一起想想辦法。",
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
    "scenario": "You put a lot of thought into a surprise, but your partner says their favourite thing is a quiet meal together. They thank you sincerely, yet you feel disappointed that your effort did not seem to delight them.",
    "question": "How would you plan next time so both of you feel loved?",
    "deeperQuestion": "When giving, how much do you need your effort to be seen?",
    "twist": "",
    "zh": {
      "title": "不是同一種浪漫",
      "scenario": "你花了很多心思準備驚喜，伴侶卻說自己最喜歡的，是兩人安靜吃一頓飯。對方有認真道謝，你仍有點失落，覺得這次準備好像沒有讓他特別開心。",
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
    "question": "What feels okay to share with friends, and what should require your partner's agreement?",
    "deeperQuestion": "Would describing your feelings without screenshots be enough?",
    "twist": "",
    "zh": {
      "title": "聊天紀錄的界線",
      "scenario": "你把一次爭執的聊天截圖傳給好友求意見。伴侶知道後覺得私人對話被公開，你則覺得自己也需要支持。",
      "question": "你覺得哪些內容可以跟朋友傾訴，哪些應該先問過對方？",
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
    "question": "Would you accept the cancellation or suggest another arrangement? What matters most to you?",
    "deeperQuestion": "How many decisions would you want someone to make when you are tired?",
    "twist": "",
    "zh": {
      "title": "照顧到忘了問",
      "scenario": "伴侶替你取消一場活動，因為覺得你最近太累。你確實疲倦，但那是你一直期待的見面。",
      "question": "你會接受這次取消，還是提出另一個安排？你最在意哪一部分？",
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
    "question": "Would you discuss moving-out arrangements now? How would you raise it without suggesting you already wanted to separate?",
    "deeperQuestion": "How much certainty does commitment need for you?",
    "twist": "",
    "zh": {
      "title": "搬進去之前",
      "scenario": "你們準備同住，談過家具和租金，卻沒談過若不合適怎樣搬走。一人覺得先談退路很掃興，另一人因此更安心。",
      "question": "你會現在就談搬走的安排嗎？怎樣開口，才不會讓對方以為你已經想分開？",
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
    "deeperQuestion": "If your partner disliked one of your friends too, how would you want everyone to get along?",
    "twist": "",
    "zh": {
      "title": "一個不想赴的飯局",
      "scenario": "伴侶的朋友每次聚會都讓你很累，但沒有誰明顯做錯事。對方希望你多參與，因為那是他重要的一群人。",
      "question": "你會怎樣安排參與的程度？",
      "deeperQuestion": "如果對方也不喜歡你的一位朋友，你希望大家怎樣相處？",
      "twist": ""
    },
    "id": "ponder-v5-couple-026",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Another cancelled date",
    "scenario": "Your partner's work pressure is real, but repeated cancelled dinners have hurt you for weeks.",
    "question": "What small, realistic change would you ask for?",
    "deeperQuestion": "How do you distinguish a busy season from always coming last?",
    "twist": "",
    "zh": {
      "title": "又取消了一次約會",
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
    "title": "The forgotten anniversary",
    "scenario": "Your caring partner forgets an important anniversary and offers to make it up. Having to remind them still hurts.",
    "question": "What feeling, beyond a replacement dinner, do you want restored?",
    "deeperQuestion": "How much does needing a reminder change the meaning of care?",
    "twist": "",
    "zh": {
      "title": "忘記了的紀念日",
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
    "title": "A change of heart before adoption",
    "scenario": "You once agreed to get a dog. Now adoption is possible, you fear the commitment; your partner feels let down.",
    "question": "How would you own your change of mind and the disappointment it causes?",
    "deeperQuestion": "Which promises can be renegotiated, and which carry more weight?",
    "twist": "",
    "zh": {
      "title": "領養前改變主意",
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
    "deeperQuestion": "Before deciding for both of you, how would you check that your partner genuinely agreed?",
    "twist": "",
    "zh": {
      "title": "假如收入倒轉",
      "scenario": "現在收入較高的你，習慣替兩人作較多決定。假如明年換成伴侶收入較高，你才發現自己不想交出這些決定權。",
      "question": "哪些決定其實不應該由收入決定？",
      "deeperQuestion": "替兩人做決定前，你會怎樣確認對方也真的願意？",
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
    "deeperQuestion": "Would you want more time to talk, or just a short time each day when you both listen closely?",
    "twist": "",
    "zh": {
      "title": "想改變的習慣",
      "scenario": "伴侶常在睡前滑手機，你覺得少了聊天時間。他說那是一天唯一不用思考的時候。",
      "question": "你們可以試甚麼安排，而不把休息變成另一項任務？",
      "deeperQuestion": "你比較想增加聊天的時間，還是只要每天有一小段時間，兩人都專心聽對方？",
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
    "deeperQuestion": "If everyone was laughing at the time, would you speak up there or talk privately later?",
    "twist": "",
    "zh": {
      "title": "借用你的故事",
      "scenario": "伴侶在飯桌上講你一次出糗的經歷，大家覺得可愛。你也笑了，但回家後發現自己不喜歡那件事被當笑話。",
      "question": "你會怎樣補說當時沒說出口的感受？",
      "deeperQuestion": "如果當時大家都在笑，你會當場說，還是之後私下談？",
      "twist": ""
    },
    "id": "ponder-v5-couple-032",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "Just company tonight",
    "scenario": "You feel low and want company. Your partner keeps seeking solutions and feels exhausted by not helping.",
    "question": "What clear, manageable kind of company could you request?",
    "deeperQuestion": "How could a supporter express tiredness without making you feel burdensome?",
    "twist": "",
    "zh": {
      "title": "今晚只想有人陪",
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
    "deeperQuestion": "Would your answer change if it were your close friend going through the breakup?",
    "twist": "",
    "zh": {
      "title": "二人旅行加一人",
      "scenario": "你們計劃很久的旅行，伴侶想邀剛失戀的好友同行。你同情朋友，也捨不得難得的二人時間。",
      "question": "你會答應、拒絕，還是修改部分行程？",
      "deeperQuestion": "如果是你的好友剛失戀，你的答案會改變嗎？",
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
    "deeperQuestion": "If the gift could not be returned, how would you discuss future gift budgets?",
    "twist": "",
    "zh": {
      "title": "拒絕昂貴的驚喜",
      "scenario": "伴侶送你一件昂貴禮物，你很感動，卻知道他為此透支。你怕表現開心會鼓勵他再這樣做。",
      "question": "你會怎樣接受心意，同時談清楚金錢壓力？",
      "deeperQuestion": "如果禮物不能退，你會怎樣跟對方談以後送禮的預算？",
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
    "question": "Beyond doing chores, how could you share the responsibility for noticing and planning them?",
    "deeperQuestion": "How much imperfection could you allow when they take over?",
    "twist": "",
    "zh": {
      "title": "未說出口的分工",
      "scenario": "家務表看起來很平均，但每次買甚麼、何時補貨、誰要預約，都是你記著。伴侶說只要你提醒，他一定做。",
      "question": "除了動手做家務，你們可以怎樣分擔留意和安排家務的責任？",
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
    "question": "Would you arrange time together each week or keep a regular slot? What would suit you both?",
    "deeperQuestion": "Would you prefer spontaneous invitations or reliable scheduled time?",
    "twist": "",
    "zh": {
      "title": "週末的空位",
      "scenario": "伴侶把沒有約會的週末都當作可自由安排，你卻以為預設會一起過。沒有誰爽約，但你常突然落空。",
      "question": "你們會每週先約好見面的時間，還是留一個固定時段？怎樣安排比較適合你們？",
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
    "question": "How would you tell your partner you felt disappointed? Would you go to the event alone or invite someone else?",
    "deeperQuestion": "How could your partner decline an invitation while still making you feel cared for?",
    "twist": "",
    "zh": {
      "title": "一次很好的拒絕",
      "scenario": "你想伴侶陪你出席活動，他說那天需要獨處，並主動提議另一天陪你。你明白他的需要，心裡仍有點失落。",
      "question": "你會怎樣告訴伴侶自己有點失落？這次活動，你想自己去還是另外找人陪？",
      "deeperQuestion": "對方怎樣拒絕一次邀請，仍會讓你感到被在乎？",
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
    "deeperQuestion": "Would knowing they meant to make you happy help? What else would you want to discuss?",
    "twist": "",
    "zh": {
      "title": "關係裡的秘密驚喜",
      "scenario": "伴侶為你策劃驚喜，故意說了一個小謊。結果你因為那個謊擔心了一整天，揭曉後也笑不出來。",
      "question": "你會怎樣告訴對方，驚喜裡哪些方法不適合你？",
      "deeperQuestion": "知道對方原本是想讓你開心，會令你比較釋懷嗎？你還想跟他談甚麼？",
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
    "question": "What detail would you ask about first to understand how the trip felt to your partner?",
    "deeperQuestion": "If you each chose one photo to represent the trip, do you think you would pick the same one?",
    "twist": "",
    "zh": {
      "title": "同一件事的兩段回憶",
      "scenario": "你記得某次旅行很浪漫，伴侶卻記得自己當時一直遷就。你沒有察覺，他以前也從未說過。",
      "question": "你會先問伴侶哪個細節，了解他當時怎麼過這趟旅行？",
      "deeperQuestion": "如果各自選一張照片代表這趟旅行，你猜會選到同一張嗎？",
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
    "deeperQuestion": "For the things that have improved, would you still want them to understand how upset you were then? Why?",
    "twist": "",
    "zh": {
      "title": "一封沒寄出的信",
      "scenario": "整理舊物時，你找到自己以前寫給伴侶的失望長信。事情大部分已改善，但有一段至今仍是真的。",
      "question": "你會分享整封信，還是只談現在仍重要的部分？",
      "deeperQuestion": "信裡那些已經改善的事，你還想讓對方知道當時有多難過嗎？為甚麼？",
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
    "deeperQuestion": "If you made that decision again, what would you discuss beforehand?",
    "twist": "",
    "zh": {
      "title": "為你放棄之後",
      "scenario": "伴侶曾為你放棄一次機會，當時說是自願。如今每逢爭執，他都會提起，你既感激又覺得無法還清。",
      "question": "你會怎樣談那次犧牲，讓它不再成為每次爭執的籌碼？",
      "deeperQuestion": "如果重新作一次決定，你會先跟對方談清楚甚麼？",
      "twist": ""
    },
    "id": "ponder-v5-couple-049",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "A few hours without a reply",
    "scenario": "Someone once cut off contact with you without explanation. Today your partner has not replied for hours, bringing back that memory. Their phone turns out to have died, and they want to hear how those hours felt for you.",
    "question": "How would you explain the reaction without making your partner responsible for the past?",
    "deeperQuestion": "What support could they offer, and what needs your own care?",
    "twist": "",
    "zh": {
      "title": "沒有回覆的幾小時",
      "scenario": "你以前曾遇過一個人突然斷了聯絡，沒有交代原因。今天伴侶幾小時沒有回覆，你又想起那次經歷。後來才知道對方手機沒電，現在想聽你說說剛才的心情。",
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
    "question": "How would you explain where you stand now? Would you set a time to revisit the conversation?",
    "deeperQuestion": "How would you distinguish uncertainty from fear of saying no?",
    "twist": "",
    "zh": {
      "title": "一個尚未準備好的願望",
      "scenario": "伴侶想在兩年內有孩子，你還沒有答案。你不想失去這段關係，也知道不能只為了留住對方而答應。",
      "question": "你會怎樣說明現在的想法？你們要不要約一個時間再談？",
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
    "question": "How would you tell your partner you have never really liked that nickname?",
    "deeperQuestion": "If they said they had always thought you liked it, what would you say next?",
    "twist": "",
    "zh": {
      "title": "不喜歡的稱呼",
      "scenario": "伴侶一直用一個暱稱叫你，以為很親密。你從來沒喜歡過，只是怕顯得小題大做而沒說。",
      "question": "你會怎樣告訴伴侶，其實自己一直不太喜歡這個暱稱？",
      "deeperQuestion": "如果對方說一直以為你喜歡，你會怎樣接下去？",
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
    "question": "How would you thank them for helping while asking them to check with you next time?",
    "deeperQuestion": "How could they offer help in a way you could welcome?",
    "twist": "",
    "zh": {
      "title": "需要被邀請的幫忙",
      "scenario": "伴侶替你修改工作簡報，改得更好了，但沒有先問。你同時覺得被幫助，也覺得自己的能力被否定。",
      "question": "你會怎樣感謝他的幫忙，也說明下次希望他先問過你？",
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
    "deeperQuestion": "Would you try letting your partner plan the next outing, even if it differed from your preferences?",
    "twist": "",
    "zh": {
      "title": "每次都由你選",
      "scenario": "伴侶常說吃甚麼、去哪裡都可以，你以前覺得很體貼。現在你希望偶爾不用負責決定，也想知道他的喜好。",
      "question": "你會怎樣邀請對方表達，而不把選錯當成問題？",
      "deeperQuestion": "如果下次完全由對方安排，跟你的喜好不同也照去，你願意試嗎？",
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
    "title": "Trading a memory",
    "scenario": "You may each choose a memory from before you met for the other to watch like a short film. It lasts five minutes. You can explain the background first or let your partner ask questions afterwards.",
    "question": "Would you choose a happy, embarrassing, or difficult moment? What side of yourself would you want them to see?",
    "deeperQuestion": "If it had to be an ordinary everyday moment, which day would you choose?",
    "twist": "",
    "zh": {
      "title": "交換一段回憶",
      "scenario": "你們可以各選一段相識之前的回憶，讓對方像看短片一樣看見當時的你。片段只有五分鐘，你可以先解釋背景，也可以讓對方看完再問。",
      "question": "你會選開心、尷尬，還是曾經很難捱的一刻？你想讓對方看見怎樣的你？",
      "deeperQuestion": "如果只能選一段很普通的日常，你會選哪一天？",
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
    "question": "What would you suggest trying for one night to help both of you sleep well?",
    "deeperQuestion": "If separate sleeping worked best, would it feel more comfortable or less intimate?",
    "twist": "",
    "zh": {
      "title": "一個人想節省",
      "scenario": "你想把家裡溫度調低來省電，伴侶覺得冷得不舒服。金額不大，但每次爭論都像在談誰比較合理。",
      "question": "你會提議怎樣試一晚，找出兩個人都睡得好的安排？",
      "deeperQuestion": "如果最後需要分開睡，你會覺得更自在，還是少了一點親密？",
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
    "deeperQuestion": "Would occasional exceptions feel flexible, or would you worry about gradually losing that evening together?",
    "twist": "",
    "zh": {
      "title": "留住一個晚上",
      "scenario": "你們都很忙，只能固定保留一晚。你想那晚完全不碰工作，伴侶偶爾需要接一通重要電話。",
      "question": "你們怎樣定義「重要」，才不會每次都重新爭？",
      "deeperQuestion": "偶爾有例外，你會覺得比較有彈性，還是擔心這一晚慢慢就守不住了？",
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
    "scenario": "Your partner has started exercising early and feels much better, but now goes to bed earlier. You have less time for your usual evening conversations. You are happy for them and miss that time together.",
    "question": "Would you suggest another time to talk, occasionally get up together, or try something else?",
    "deeperQuestion": "Which connections matter most when routines diverge?",
    "twist": "",
    "zh": {
      "title": "照顧自己的改變",
      "scenario": "伴侶最近開始晨早運動，精神好了很多，也因此提早睡覺。你們原本每晚一起聊天的時間變少了。你替對方開心，但也想念以前那段時間。",
      "question": "你會提議換個時間聊天，偶爾一起早起，還是試試其他方法？",
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
    "question": "How long would you want to try living there before moving? What would you most want to find out?",
    "deeperQuestion": "Which losses could neither money nor time replace?",
    "twist": "",
    "zh": {
      "title": "一起變得沒那麼忙",
      "scenario": "你們有機會搬到便宜的地方，少工作一些，但會離朋友和熟悉的生活很遠。兩人都想慢下來，卻捨不得不同的東西。",
      "question": "正式搬家前，你們想先試住多久？這段時間最想確認甚麼？",
      "deeperQuestion": "哪些失去，是金錢和時間都補不回來的？",
      "twist": ""
    },
    "id": "ponder-v5-couple-070",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "A different way of speaking",
    "scenario": "You learn to state your needs directly. Your partner experiences this as more demands and needs time to adjust.",
    "question": "How would you explain what has changed for you and ask what your partner is finding difficult?",
    "deeperQuestion": "What time would you give, and what would you no longer surrender?",
    "twist": "",
    "zh": {
      "title": "說話方式改變了",
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
    "title": "Everyone wants to talk to you",
    "scenario": "Your partner makes friends easily while you struggle to belong. You feel happy for them and privately envious.",
    "question": "How would you tell your partner you felt lonely at the gathering without suggesting you did not want them making friends?",
    "deeperQuestion": "Do you want company, introductions or acknowledgement of loneliness?",
    "twist": "",
    "zh": {
      "title": "大家都圍著你聊",
      "scenario": "伴侶很容易交到朋友，你努力融入卻常被忽略。你為他高興，也有一點不想承認的嫉妒。",
      "question": "你會怎樣告訴伴侶自己在聚會裡有點孤單，又不讓他以為你不想他交朋友？",
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
    "deeperQuestion": "If the roles were reversed, when would you want to hear about it?",
    "twist": "",
    "zh": {
      "title": "一場遲來的坦白",
      "scenario": "伴侶坦白，幾個月前為免你擔心，隱瞞了一次工作失誤。事情已解決，你卻開始懷疑還有甚麼不知道。",
      "question": "你最需要知道事實、理由，還是以後會怎樣做？",
      "deeperQuestion": "如果角色互換，你希望對方甚麼時候告訴你？",
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
    "title": "Dinner ten years from now",
    "scenario": "You receive an invitation to dinner at your home ten years from now. Before going, you may ask just one question: where you live, who will be at dinner, or how your day went. Everything else remains a surprise.",
    "question": "Which would you ask first? Do you think your partner would choose the same one?",
    "deeperQuestion": "If the dinner were ordinary but happy, would it fit your hopes for the future?",
    "twist": "",
    "zh": {
      "title": "十年後的餐桌",
      "scenario": "你們收到一張十年後的晚餐邀請函，可以到未來的家吃一頓飯。出發前，只能先問一個問題：住在哪裡、誰會一起吃飯，或當天過得怎樣。其他事到了才知道。",
      "question": "你最想先問哪一個？你猜伴侶會選得一樣嗎？",
      "deeperQuestion": "如果那頓飯很平凡，卻吃得很開心，會符合你對未來的期待嗎？",
      "twist": ""
    },
    "id": "ponder-v5-couple-076",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "A rainy weekend away",
    "scenario": "Weather ruins your planned trip. Your partner wants to improvise; you want to salvage the schedule and your effort.",
    "question": "Would you keep the itinerary or redesign it together? What would you least want to give up?",
    "deeperQuestion": "Would it feel fair if they decided this time and you decided next time?",
    "twist": "",
    "zh": {
      "title": "下雨的週末旅行",
      "scenario": "你安排的旅行因天氣全亂了，伴侶想臨時找小店坐坐。你仍想趕完行程，怕自己的心思全部白費。",
      "question": "你會保留原定行程，還是跟對方重新安排？最不想放棄的是哪一部分？",
      "deeperQuestion": "如果這次由對方決定，下一次由你決定，你覺得公平嗎？",
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
    "question": "Next time your partner compliments you, how might you respond without brushing it off?",
    "deeperQuestion": "Why can receiving appreciation feel harder than criticism?",
    "twist": "",
    "zh": {
      "title": "難以接受的稱讚",
      "scenario": "伴侶說很欣賞你，你卻總回答「沒有啦」，或解釋自己其實做得不好。他開始不知道怎樣表達。",
      "question": "下次伴侶稱讚你時，除了說「沒有啦」，你還可以怎樣回應？",
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
    "title": "The last two tickets",
    "scenario": "You finally get tickets to your favourite band, but the date clashes with your partner's long-planned amateur stage performance. You can transfer the concert tickets, though the band may not return. Your partner hopes you will attend their show but leaves the choice to you.",
    "question": "What would you choose? What would you most want your partner to understand?",
    "deeperQuestion": "If you could attend a rehearsal instead, would that feel like showing up for them?",
    "twist": "",
    "zh": {
      "title": "最後兩張門票",
      "scenario": "你終於買到最喜歡的樂隊門票，日期卻撞上伴侶籌備已久的業餘舞台演出。演唱會可以轉讓，但這次巡演之後未必再來；伴侶說希望你到場，也不想替你決定。",
      "question": "你會怎樣選？你最希望對方理解你哪一點？",
      "deeperQuestion": "如果伴侶的演出有另一場，而你只能看到彩排，你覺得算不算有到場支持？",
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
    "question": "Before swapping, what three things would you ask to understand the day's responsibilities?",
    "deeperQuestion": "Which burdens have you never let them see?",
    "twist": "",
    "zh": {
      "title": "如果交換一天負擔",
      "scenario": "你們可以交換一天的責任，但不能只交換工作，還要接手對方一直記在心裡的事。你發現自己不知道他每天在擔心甚麼。",
      "question": "交換前，你會問對方哪三件事，才知道這一天有哪些責任要照顧？",
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
    "title": "One keepsake",
    "scenario": "You are moving into a tiny home and cannot keep a whole box of shared keepsakes. Each of you may keep one object and photograph the rest. Your choice seems obvious, but your partner picks up something you nearly threw away.",
    "question": "What would you keep? How would you ask about the story behind your partner's choice?",
    "deeperQuestion": "If you could keep only one between you, would you decide by memories, usefulness, or who felt more attached?",
    "twist": "",
    "zh": {
      "title": "只留下一件紀念品",
      "scenario": "你們要搬到很小的家，一箱共同的紀念品放不下，只能各留一件實物，其餘拍照保存。你的選擇很明顯，伴侶卻拿起一件你差點扔掉的小東西。",
      "question": "你會留下甚麼？你會怎樣問出對方那件小東西背後的故事？",
      "deeperQuestion": "如果只能共同留一件，你們會按回憶、實用，還是誰更捨不得來決定？",
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
    "deeperQuestion": "If your partner needed your introduction, how would you want them to see your help?",
    "twist": "",
    "zh": {
      "title": "不想欠一個人情",
      "scenario": "伴侶願意用自己的人脈幫你找工作，你卻想靠自己。你怕拒絕讓他受傷，也怕接受後很難分清成就屬於誰。",
      "question": "你會接受哪一部分幫助，保留哪一部分自己完成？",
      "deeperQuestion": "如果對方需要你的介紹，你會希望對方怎樣看待這份幫忙？",
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
    "question": "Would you use cost, purpose, or who uses the item to decide which purchases need discussion?",
    "deeperQuestion": "Would it still bother you if the cost were tiny? Which decisions would you want to be part of?",
    "twist": "",
    "zh": {
      "title": "共同帳戶的意外",
      "scenario": "伴侶用共同帳戶買了一件家電，價格合理，也確實需要。你不滿的不是物品，而是自己沒有參與。",
      "question": "你會提議以金額、用途，還是使用的人來決定哪些開支要先商量？",
      "deeperQuestion": "如果只是很小的一筆錢，你還會在意嗎？你希望參與的是哪些決定？",
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
    "deeperQuestion": "What would you most want your partner to do: ask about it, stay with you, or arrange another meeting?",
    "twist": "",
    "zh": {
      "title": "一份不夠公平的邀請",
      "scenario": "伴侶的家人只邀他去旅行，說你們還沒結婚。他想去，也覺得這個理由不舒服。",
      "question": "你希望他怎樣回應，而不是替他直接決定去留？",
      "deeperQuestion": "你最希望伴侶做甚麼：替你問清楚、陪你不去，還是另約一次見面？",
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
    "title": "The forecast before departure",
    "scenario": "You have booked a seaside cabin, but the forecast gives a fifty percent chance of rain throughout the trip. Cancelling today gets you eighty percent back; from tomorrow there is no refund. You want to wait, while your partner wants another destination.",
    "question": "How would you decide? Are you more worried about losing money, missing good weather, or a disappointing trip?",
    "deeperQuestion": "Would your choice change if you could cook and watch films in the cabin on rainy days?",
    "twist": "",
    "zh": {
      "title": "出發前的天氣預報",
      "scenario": "你們訂了海邊小屋，出發前預報有一半機會連續下雨。今天取消可退八成費用，明天起便不能退款。你想再等等，伴侶想現在改去另一個地方。",
      "question": "你們會怎樣作決定？你比較怕浪費錢、錯過好天氣，還是旅行變成失望？",
      "deeperQuestion": "如果下雨也可以在小屋煮飯看電影，你的選擇會改變嗎？",
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
    "question": "Which recent small event would you start with to help your partner understand that you need support too?",
    "deeperQuestion": "When you say you are fine, can you usually manage, or do you sometimes hope they will ask again?",
    "twist": "",
    "zh": {
      "title": "別讓懂事變沉默",
      "scenario": "伴侶正在忙重要的事，你一直把自己的困難說成小事。某天他問起，你才發現自己已經很委屈。",
      "question": "你會從哪件最近發生的小事說起，讓伴侶知道你也需要有人陪？",
      "deeperQuestion": "你說「沒事」的時候，通常真的能自己處理，還是也希望對方再問一句？",
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
    "question": "You want to be there, but you are tired tonight too. What would you say, and how would you arrange the conversation?",
    "deeperQuestion": "What response would make you feel cared for even when your partner cannot talk right away?",
    "twist": "",
    "zh": {
      "title": "不想當唯一出口",
      "scenario": "伴侶只願意跟你談所有煩惱，你很珍惜信任，卻開始覺得每天都接不住。他又不想找其他人。",
      "question": "你想陪對方，但今晚也很累。你會怎樣說，並安排這次談話？",
      "deeperQuestion": "甚麼樣的回應，會讓你覺得即使對方暫時沒空，仍然有把你放在心上？",
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
    "question": "Instead of taking on all the chores, how else could you show your partner you appreciated their care?",
    "deeperQuestion": "If you were the one providing care, what response would mean the most to you?",
    "twist": "",
    "zh": {
      "title": "被照顧後的內疚",
      "scenario": "你生病時伴侶很用心照顧，康復後你急著把所有家務包下。他說不用還，你卻很難自在地接受。",
      "question": "除了把家務全包下，你還想怎樣讓伴侶知道你很感謝他的照顧？",
      "deeperQuestion": "如果換成你照顧對方，你最希望收到怎樣的回應？",
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
    "deeperQuestion": "Which mistakes would you want corrected on the spot, and which could wait until you were alone?",
    "twist": "",
    "zh": {
      "title": "一起面對尷尬",
      "scenario": "你在伴侶朋友面前說錯一件事，他立即糾正，資料是對的，你卻覺得很難堪。",
      "question": "你希望下次他怎樣處理？",
      "deeperQuestion": "哪些錯誤你希望當場被提醒，哪些可以等到私下再說？",
      "twist": ""
    },
    "id": "ponder-v5-couple-096",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "A Sunday worth keeping",
    "scenario": "You have dinner with family every Sunday. Your partner wishes you could sometimes go out together instead. You treasure the routine, while your partner feels Sundays are never open to anything else.",
    "question": "How would you arrange Sundays around family expectations and time together?",
    "deeperQuestion": "If you went one less Sunday a month, what would worry you? How else could you show your family you cared?",
    "twist": "",
    "zh": {
      "title": "不願放棄的週日",
      "scenario": "你每週日都跟家人吃飯，伴侶希望偶爾可以一起出去玩。你很珍惜這個固定的相聚，伴侶卻覺得你們的週日永遠沒有其他選擇。",
      "question": "你會怎樣安排週日，兼顧家人的期待和你們自己的時間？",
      "deeperQuestion": "如果改成每月少去一次，你會擔心甚麼？有沒有別的方法讓家人知道你仍然關心他們？",
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
    "title": "A wish each year",
    "scenario": "You decide to write one shared wish each year and choose one to pursue. This year you want to save for a distant trip; your partner wants a weekly evening learning to cook together. Both are possible, but starting both would strain your time and budget.",
    "question": "Which wish would you choose first this year? What appeals more right now: a memorable trip or cooking together every week?",
    "deeperQuestion": "If the other wish lost out next year too, how would you revisit the arrangement?",
    "twist": "",
    "zh": {
      "title": "每年交換一個願望",
      "scenario": "你們決定每年各寫一個想一起完成的願望，再選一個實行。今年你想存錢去遠方旅行，伴侶想每週留一晚一起學煮飯。兩件事都做得到，但同時開始會令時間和預算很緊。",
      "question": "今年你想先選哪個願望？一次難忘的旅行和每週一起煮飯，哪個現在更吸引你？",
      "deeperQuestion": "如果未被選中的願望明年也落選，你們要怎樣重新談這個安排？",
      "twist": ""
    },
    "id": "ponder-v5-couple-099",
    "level": "deeper",
    "emoji": "💗"
  },
  {
    "category": "Couple",
    "title": "A thank-you from ten years ahead",
    "scenario": "Imagine a card from you both ten years ahead: “We are glad we talked about this properly back then.” It names no issue, only shows where you live now.",
    "question": "Which unresolved conversation today might it mean?",
    "deeperQuestion": "If you discussed just a small part tonight, what would you say first?",
    "twist": "",
    "zh": {
      "title": "十年後寄來的感謝卡",
      "scenario": "假如十年後的你們寄回一張卡，寫著：「幸好那時我們有好好談這件事。」卡上沒說是哪件事，只畫了你們現在住的地方。",
      "question": "你猜它指的是你們現在還沒談清楚的哪件事？",
      "deeperQuestion": "如果今晚只談一小部分，你願意先說出甚麼？",
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
    "deeperQuestion": "If you could keep just one thing from the room, what would you choose?",
    "twist": "",
    "zh": {
      "title": "一間空下來的房",
      "scenario": "你搬走後，父母想把你的房間改成工作室。你知道房子是他們在住，聽見消息卻有點像失去回家的位置。",
      "question": "你希望保留甚麼，才仍然有回家的感覺？",
      "deeperQuestion": "如果只能保留房裡一件東西，你會選甚麼？",
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
    "question": "Would you keep the family recipe's name, rename it, or use the original recipe next time?",
    "deeperQuestion": "What matters more to preserve: the flavour or the story?",
    "twist": "",
    "zh": {
      "title": "家傳食譜的改動",
      "scenario": "你把家傳菜式改成自己喜歡的口味，長輩說已經不是原來那道菜。你想延續它，也想留下自己的部分。",
      "question": "你會繼續用家傳菜的名字、改個新名字，還是下次照原本做法煮？",
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
    "question": "Would you travel, stay for the celebration, or try changing the itinerary? What would you most regret missing?",
    "deeperQuestion": "Would a family meal on another day feel the same as celebrating on the actual holiday?",
    "twist": "",
    "zh": {
      "title": "不能赴約的節日",
      "scenario": "你今年只能請一次長假，很想去一趟期待已久的旅行，卻會錯過家族節日。家人沒反對，只說少了你會冷清。",
      "question": "你會去旅行、留家過節，還是試著調整行程？你最捨不得哪一部分？",
      "deeperQuestion": "如果能另外約一天全家吃飯，你會覺得跟節日當天一樣嗎？",
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
    "question": "Would you first ask your father about his new friend or talk about memories you want to preserve?",
    "deeperQuestion": "If the new friend were willing to hear about your mother, what small story would you share?",
    "twist": "",
    "zh": {
      "title": "爸爸的新朋友",
      "scenario": "喪偶多年的父親交了新朋友，看起來很開心。你替他高興，也突然害怕母親在家裡的回憶會被取代。",
      "question": "你想先跟父親聊新朋友，還是談談你想保留的回憶？",
      "deeperQuestion": "如果新朋友也願意聽母親的故事，你想分享哪一件小事？",
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
    "title": "The family trip alarm",
    "scenario": "On a family trip, an elder knocks at six every morning so nobody misses the sights. Everyone else wants a later start and asks you to speak because the elder listens to you. You actually enjoy early mornings.",
    "question": "What arrangement would you suggest? Would you start with your own preference or the group's needs?",
    "deeperQuestion": "If early risers could leave first, would half a day apart make it feel less like a family trip?",
    "twist": "",
    "zh": {
      "title": "家族旅行的鬧鐘",
      "scenario": "全家旅行時，長輩每天六點便敲門叫大家起床，怕錯過景點。其他人想睡晚一點，卻都叫你去說，因為長輩最聽你的。你自己其實很喜歡早起。",
      "question": "你會替大家提出甚麼安排？你會先說自己的想法，還是大家的需要？",
      "deeperQuestion": "如果早起的人可以先出發，你覺得分開半天會少了家庭旅行的意義嗎？",
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
    "scenario": "You live far away and visit twice a year; your sibling visits every week. They say you do not understand everyday life at home. You feel you still think about everyone often, even though you visit less.",
    "question": "How could you discuss the difference without ranking love?",
    "deeperQuestion": "What practical involvement could you add?",
    "twist": "",
    "zh": {
      "title": "不同的回家頻率",
      "scenario": "你住得遠，一年回家兩次；兄弟姊妹住得近，每週都會去。他說你不了解家裡的日常，你卻覺得，自己雖然少回去，也一直很掛念大家。",
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
    "deeperQuestion": "If the person later asked whether you already knew, what would you say?",
    "twist": "",
    "zh": {
      "title": "不是大家的秘密",
      "scenario": "親戚告訴你另一位家人的私事，叮囑別說出去。你知道當事人根本不希望這件事在家族流傳。",
      "question": "你會怎樣處理自己已經知道的事？",
      "deeperQuestion": "如果當事人後來問你是否早已知道，你會怎樣回答？",
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
    "deeperQuestion": "What response from your family would help you keep talking?",
    "twist": "",
    "zh": {
      "title": "從小的角色",
      "scenario": "你從小是家裡負責逗大家笑的人，難過時也會先講笑話。這次你真的想有人認真聽，大家卻以為你又在玩。",
      "question": "你會怎樣讓家人知道，這次需要不同的回應？",
      "deeperQuestion": "家人怎樣回應，會讓你願意把話繼續說下去？",
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
    "question": "How would you explain the new name's meaning? Is there anything about the old name you would keep?",
    "deeperQuestion": "Which family connections would you actively choose to keep?",
    "twist": "",
    "zh": {
      "title": "想用的新名字",
      "scenario": "你想改一個更符合自己的名字，家人卻很珍惜你出生時取的名字。對你來說是認識自己，對他們卻像否定當年的心意。",
      "question": "你會怎樣解釋新名字的意思？舊名字有沒有你想保留的部分？",
      "deeperQuestion": "哪些家族連結，你會主動選擇保留？",
      "twist": ""
    },
    "id": "ponder-v5-family-017",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "An application from long ago",
    "scenario": "A relative shows you a job application they wrote when young and asks you to guess whether they sent it. The job is nothing like the life they later led. Before the reveal, you may ask three questions.",
    "question": "What would you ask to understand why they hesitated at the time?",
    "deeperQuestion": "If you could advise them then, would you encourage the opportunity or first ask what they were reluctant to leave?",
    "twist": "",
    "zh": {
      "title": "一封年輕時的申請信",
      "scenario": "家人拿出年輕時寫過的工作申請信，請你猜他最後有沒有寄出。信裡的工作跟他後來的人生完全不同。揭曉前，你可以先問三個問題。",
      "question": "你會問甚麼，來了解當時的他為甚麼猶豫？",
      "deeperQuestion": "如果那時你能給他一句建議，你會說追求機會，還是先了解他最捨不得甚麼？",
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
    "deeperQuestion": "Would you arrange things differently if you were in a hurry today?",
    "twist": "",
    "zh": {
      "title": "需要幫忙的長輩",
      "scenario": "長輩有些日常事做得慢，但很想自己來。你替他完成會快很多，也擔心不幫看起來不關心。",
      "question": "你會怎樣問他希望你幫到哪一步？",
      "deeperQuestion": "如果今天趕時間，你會跟平日作不同安排嗎？",
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
    "question": "Would you ask what they would prefer, attend yourself, or arrange something another day?",
    "deeperQuestion": "Would asking first make the gesture feel less special?",
    "twist": "",
    "zh": {
      "title": "一份被拒絕的好意",
      "scenario": "你花心思替父母安排活動，他們卻寧願留在家。你覺得失落，甚至想說自己以後不再安排。",
      "question": "你會問他們想做甚麼、自己去參加，還是改天再安排？",
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
    "deeperQuestion": "If you could replace it with another childhood story, which would you choose?",
    "twist": "",
    "zh": {
      "title": "一段不願再聽的故事",
      "scenario": "家人聚會總講你小時候的一次糗事，大家覺得溫馨，你卻每次都想躲。你已說過一次不喜歡。",
      "question": "這次你會怎樣回應，讓界線更清楚？",
      "deeperQuestion": "如果你可以換一個童年故事來講，你會選哪一個？",
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
    "question": "How would you tell them you are willing to listen but no longer want to pass messages between them?",
    "deeperQuestion": "If both asked whose side you were on, what would you say?",
    "twist": "",
    "zh": {
      "title": "不想當和事佬",
      "scenario": "兩位家人吵架後總各自找你訴苦，要你傳話。你很愛兩人，卻開始害怕接電話。",
      "question": "你會怎樣告訴兩人，你願意聽，但不想再替他們傳話？",
      "deeperQuestion": "如果兩人都問你站在哪一邊，你會怎樣回答？",
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
    "deeperQuestion": "If your family were willing to hear the second reason, what would you most want to explain?",
    "twist": "",
    "zh": {
      "title": "留學的兩種理由",
      "scenario": "你想去外地讀書，一部分是課程好，一部分是想離開家人的期待。家人只接受第一個理由。",
      "question": "你需要說出全部理由，還是先說自己準備好的部分？",
      "deeperQuestion": "如果家人願意聽第二個理由，你最想說清楚甚麼？",
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
    "title": "A tiny family museum",
    "scenario": "Your community invites you to tell your family's everyday story through five objects. Someone offers trophies, another a much-mended shopping bag, and someone else a bowl everyone likes using. There is room for only five.",
    "question": "What object would you nominate? What would you want strangers to understand about your family?",
    "deeperQuestion": "If elders and children chose completely different objects, how would you arrange the exhibition?",
    "twist": "",
    "zh": {
      "title": "家族小博物館",
      "scenario": "社區邀請你們用五件物品做一個家庭展覽，介紹你們的日常。有人想放獎盃，有人拿出補了很多次的購物袋，也有人選一個全家搶著用的飯碗。只能選五件。",
      "question": "你會提名哪件物品？你希望陌生人從中認識怎樣的家庭？",
      "deeperQuestion": "如果長輩和孩子選的東西完全不同，你會怎樣安排這個展覽？",
      "twist": ""
    },
    "id": "ponder-v5-family-028",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Unequal rules",
    "scenario": "Two adult siblings are preparing for separate trips with friends. Their parents require daily itinerary updates from the daughter but not the son. The parents say it is about safety; the daughter wants the same check-in rules for both.",
    "question": "Would you suggest check-ins for both, neither, or another arrangement? Why?",
    "deeperQuestion": "How could a genuinely protective rule apply to everyone?",
    "twist": "",
    "zh": {
      "title": "無意中的差別待遇",
      "scenario": "家裡的兩名成年子女各自準備跟朋友去旅行。父母只要求女兒每天交代行程，卻沒有要求兒子。父母說是擔心安全，女兒則希望兩人都按同一套規則報平安。",
      "question": "你會建議兩人都報平安、都不必報，還是另訂一個安排？理由是甚麼？",
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
    "deeperQuestion": "If you chose a course without any aim of earning money, what would you learn?",
    "twist": "",
    "zh": {
      "title": "媽媽想重新開始",
      "scenario": "母親想花一筆錢學新技能，家人覺得這個年紀不值得。她說不是為了賺錢，只是終於有時間。",
      "question": "你會怎樣回應家人對「值得」的定義？",
      "deeperQuestion": "如果由你選一個不為賺錢的課程，你會想學甚麼？",
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
    "question": "Beyond dividing up chores, how could you take turns noticing what needs doing at home?",
    "deeperQuestion": "If no one gave reminders for a week, what would each person take responsibility for first?",
    "twist": "",
    "zh": {
      "title": "家裡的工作不是幫忙",
      "scenario": "一起住的成年人做家務時總說「我幫你」，彷彿家務原本屬於某一個人。那個人已經很累。",
      "question": "除了分配誰做哪件家務，你們會怎樣輪流留意家裡有甚麼需要處理？",
      "deeperQuestion": "如果有一個星期不用任何人提醒，每人會先主動做好哪件事？",
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
    "deeperQuestion": "Would the deposit and time already spent make it harder to change the plan?",
    "twist": "",
    "zh": {
      "title": "未被問過的願望",
      "scenario": "你想替長輩辦盛大生日會，準備到一半才知道他只想跟幾個人吃飯。取消會損失訂金。",
      "question": "你會保住計劃，還是改成他真正想要的樣子？",
      "deeperQuestion": "想到已付的訂金和花過的時間，你會不會比較難改變安排？",
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
    "deeperQuestion": "How would you want your family to explain your temporary return to relatives?",
    "twist": "",
    "zh": {
      "title": "失敗後才回家",
      "scenario": "你在外地的計劃失敗，想回家住一段時間。家人願意接納，你卻怕每頓飯都要聽「早就跟你說過」。",
      "question": "你會在回家前談清楚甚麼？",
      "deeperQuestion": "你會希望家人怎樣跟親戚解釋你暫時回來住的原因？",
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
    "deeperQuestion": "If you stopped the conversation for tonight, when would you want to return to it?",
    "twist": "",
    "zh": {
      "title": "家人的道歉很短",
      "scenario": "長輩第一次承認以前對你太嚴厲，只說了一句「那時不懂」。你等了很久，卻不知道這句是否足夠。",
      "question": "你還想說甚麼，或暫時不想做甚麼？",
      "deeperQuestion": "如果今晚先不談下去，你會想約甚麼時候再聊？",
      "twist": ""
    },
    "id": "ponder-v5-family-037",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "A family move",
    "scenario": "Your family is considering moving somewhere with rent thirty percent lower, allowing less work and more saving. But one member would be far from their weekly choir, their main circle of friends.",
    "question": "How would you weigh the savings against what becomes harder? What arrangement would be worth trying first?",
    "deeperQuestion": "Is majority agreement enough for a decision affecting everyone?",
    "twist": "",
    "zh": {
      "title": "一場全家的搬遷",
      "scenario": "全家考慮搬到租金便宜三成的地方，能減少工作和存多一點錢。但一位家人每週參加的合唱團會變得很遠，那是他最重要的朋友圈。",
      "question": "你會怎樣比較省下的錢和失去的便利？有甚麼安排值得先試？",
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
    "deeperQuestion": "If your family felt knocking made things too formal, how would you explain your need?",
    "twist": "",
    "zh": {
      "title": "同一屋簷的私隱",
      "scenario": "你暫住家裡，家人習慣不敲門就進房，覺得一家人不用分得那麼清。你很需要一個能關門的地方。",
      "question": "你會怎樣提出一條簡單、大家都能遵守的規則？",
      "deeperQuestion": "如果家人說敲門讓他覺得見外，你會怎樣解釋自己的需要？",
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
    "deeperQuestion": "If the career change were going badly a year later, how would you hope to respond?",
    "twist": "",
    "zh": {
      "title": "未必同意的選擇",
      "scenario": "成年手足想轉行，你覺得風險很高。他沒有問你借錢，只希望你不要每次見面都勸退。",
      "question": "你會怎樣表達一次擔心，之後仍然支持他這個人？",
      "deeperQuestion": "如果一年後轉行不順利，你希望自己會怎樣回應他？",
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
    "deeperQuestion": "Now that the news has spread, what would you most want your parents to help with?",
    "twist": "",
    "zh": {
      "title": "一個不想公開的消息",
      "scenario": "你只告訴父母一件新計劃，他們開心地通知全家。你還沒準備好，現在每個人都來問進度。",
      "question": "你會怎樣處理這次公開，並訂下以後的約定？",
      "deeperQuestion": "如果消息已經傳開，你最希望父母幫你處理甚麼？",
      "twist": ""
    },
    "id": "ponder-v5-family-042",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "The same money in two eras",
    "scenario": "You can go into town with a relative when they were young, carrying one day's wages from that time. They want to treat you to a rare good meal; you want to see how they shopped, travelled and saved. There is time for only one.",
    "question": "Would you choose a special day or follow their ordinary routine? Why?",
    "deeperQuestion": "Back in the present, what would you want them to experience that was hard to imagine back then?",
    "twist": "",
    "zh": {
      "title": "同一筆錢，兩個年代",
      "scenario": "你可以陪年輕時的家人逛一次街，手上只有他當年一天的工資。他想帶你吃一頓難得的好飯，你卻想看看他平日怎樣買菜、搭車和存錢。時間只夠選一種。",
      "question": "你想過特別的一天，還是跟著他過普通的一天？為甚麼？",
      "deeperQuestion": "回到現在，你最想帶他體驗甚麼，是當年很難想像的？",
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
    "title": "The missing step in the recipe",
    "scenario": "You learn a family dish from an elder, but following the recipe never quite works. You discover they adjust the taste for whoever is eating, without fixed measurements. You want to record it for the family.",
    "question": "Would you record standard measurements or each person's preferred version? What is most worth preserving about this dish?",
    "deeperQuestion": "If the next generation did not like the dish, how else could its care be passed on?",
    "twist": "",
    "zh": {
      "title": "沒有寫進食譜的一步",
      "scenario": "你跟長輩學做一道家常菜，照食譜做卻總是差一點。後來發現他每次會按吃飯的人調整味道，從來沒有固定分量。你想把做法記下來，留給其他家人。",
      "question": "你會記下標準分量，還是每個人喜歡的版本？你覺得這道菜真正值得留下甚麼？",
      "deeperQuestion": "如果下一代不喜歡吃這道菜，還有甚麼方法讓這份心意傳下去？",
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
    "deeperQuestion": "If they did not want to talk yet, would you return the letter or ask whether you could keep it safe for them?",
    "twist": "",
    "zh": {
      "title": "一份意外的家書",
      "scenario": "你找到長輩年輕時寫的信，裡面的夢想跟你認識的他很不同。你很想問，也怕碰到他不想再談的遺憾。",
      "question": "你會怎樣開啟這段對話，讓他可以選擇說多少？",
      "deeperQuestion": "如果他說暫時不想談，你會把信還給他，還是先問能不能替他好好保存？",
      "twist": ""
    },
    "id": "ponder-v5-family-046",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "When you introduce my work",
    "scenario": "Family describes your work with a more prestigious label to avoid relatives' judgement. You feel hidden.",
    "question": "How would you want them to introduce you?",
    "deeperQuestion": "Do you most need understanding of the work or respect for your choice?",
    "twist": "",
    "zh": {
      "title": "介紹我的工作時",
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
    "title": "A family tree without surnames",
    "scenario": "You are making a new family album that may include people who have felt like family for years, as well as relatives. Each of you has room to introduce one person through a real shared moment, not just a name.",
    "question": "Whom would you introduce? How does someone gradually become one of your people?",
    "deeperQuestion": "If that person hardly knew your relatives, what kind of meeting would you arrange?",
    "twist": "",
    "zh": {
      "title": "沒有姓氏的家譜",
      "scenario": "你們要做一本新的家庭紀念冊，除了親屬，也可以放進多年來像家人一樣的人。頁數只夠每人介紹一位，不能只寫姓名，要分享一件真正相處過的小事。",
      "question": "你會介紹誰？你覺得一個人怎樣慢慢成為「自己人」？",
      "deeperQuestion": "如果那個人跟其他家人並不熟，你想安排怎樣的一次見面？",
      "twist": ""
    },
    "id": "ponder-v5-family-048",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "One family keepsake",
    "scenario": "While sorting old belongings, two relatives want an elder's familiar teapot. One shared tea with the elder for years; the other remembers its scent every day in childhood. It is inexpensive, and there is only one.",
    "question": "How would you decide who keeps it? Should it go to whoever will use it most or whoever misses it most?",
    "deeperQuestion": "What meaning could shared custody or a replica preserve?",
    "twist": "",
    "zh": {
      "title": "最後一份家族物品",
      "scenario": "家人整理舊物時，一個長輩常用的茶壺有兩個人都想留。一人多年來常陪長輩喝茶，另一人記得小時候每天聞到它泡的茶香。茶壺不貴，也沒有第二個。",
      "question": "你會怎樣決定由誰保管？你覺得物品應留給最常用的人，還是最想念它的人？",
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
    "deeperQuestion": "What small arrangement would put you at ease at a first dinner with another family?",
    "twist": "",
    "zh": {
      "title": "家裡的新成員",
      "scenario": "一位家人的伴侶第一次參加聚會，不熟悉你們的習慣。大家忙著講只有家人才懂的笑話，他一直安靜。",
      "question": "你會改變哪一個小習慣，讓他不用努力證明自己合群？",
      "deeperQuestion": "如果你第一次去另一個家庭吃飯，甚麼小安排會讓你自在？",
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
    "question": "How would you explain why you want to stay in that city? How would you arrange time to see family?",
    "deeperQuestion": "What reliable actions would keep the connection alive?",
    "twist": "",
    "zh": {
      "title": "不想留下的城市",
      "scenario": "家人希望你住近一點，你在另一個城市卻更像自己。兩邊都有重要的人，搬回去不是單純換地址。",
      "question": "你會怎樣說明留在那個城市的原因？你願意怎樣安排見面的時間？",
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
    "title": "The eighth revision",
    "scenario": "You offer to design a family gathering invitation for free, expecting one evening's work. Relatives keep requesting changes, and you are now on version eight with a work deadline tomorrow.",
    "question": "Would you finish this version, ask everyone to choose one representative, or hand over the remaining changes?",
    "deeperQuestion": "If you were requesting changes, how would you know when your requests exceeded the original favour?",
    "twist": "",
    "zh": {
      "title": "免費設計的第八次修改",
      "scenario": "你答應免費替家族聚會做一張邀請卡，原以為一晚就完成。不同親戚輪流提出修改，現在已是第八個版本，明天你還要交工作上的設計。",
      "question": "你會先完成這一版、請大家選一位代表，還是把剩下的修改交出去？",
      "deeperQuestion": "如果你是提出修改的人，怎樣才知道自己的要求已經超出原本的幫忙？",
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
    "deeperQuestion": "Would you prefer a fixed monthly contribution or discussions based on the household's actual needs?",
    "twist": "",
    "zh": {
      "title": "一家人的錢包",
      "scenario": "你開始賺錢後，家人覺得你的收入也應該共同規劃。你願意分擔家用，卻不想每筆消費都被審視。",
      "question": "你會怎樣分開共同責任和個人自由？",
      "deeperQuestion": "你想固定每月分擔一筆，還是按家中實際需要再商量？",
      "twist": ""
    },
    "id": "ponder-v5-family-055",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "A family shop for one day",
    "scenario": "A market offers your family a free stall for one day. Elders are good at crafts, younger members know promotion, and someone prefers quietly arranging stock. You may donate the proceeds or save them for a family trip.",
    "question": "What would you sell, and how would you divide the work? How would you decide what to do with the money?",
    "deeperQuestion": "If you earned little but discovered new strengths in one another, would you want to do it again?",
    "twist": "",
    "zh": {
      "title": "全家開一天小店",
      "scenario": "市集送你們一個免費攤位，可以全家合作賣一天東西。長輩擅長手作，年輕人懂宣傳，有人只想安靜地整理貨品。收入可以捐出去，也可以留作家庭旅行基金。",
      "question": "你想賣甚麼，怎樣分工？你會怎樣決定收入的用途？",
      "deeperQuestion": "如果賺得很少，但大家發現了彼此的新長處，你會想再辦一次嗎？",
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
    "deeperQuestion": "Would you rather have a meal with every relative, or see fewer people and have more unhurried time together?",
    "twist": "",
    "zh": {
      "title": "回家不想被安排滿",
      "scenario": "你難得回家一星期，親戚把每天排滿飯局。你想見大家，也想跟父母安靜待著，甚至有一天甚麼都不做。",
      "question": "你會保留哪些空白，又怎樣告知大家？",
      "deeperQuestion": "你會比較想跟每位親戚吃一頓飯，還是少見幾個人，讓每次相處都能慢一點？",
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
    "title": "A ticket to pass on",
    "scenario": "You receive a ticket for one distant journey. You may use it now or save it for a younger family member to travel when grown. It can be used once, with no cash alternative or splitting into two trips.",
    "question": "Would you go yourself or pass the opportunity on? What would you hope the journey could bring?",
    "deeperQuestion": "Would it change your decision if you could leave them the stories and photos from your own trip?",
    "twist": "",
    "zh": {
      "title": "一張可以傳下去的票",
      "scenario": "你得到一張免費遠行的票，可以現在自己用，也可以留給一位家中年輕成員，讓他成年後去想去的地方。票只能用一次，不能換錢，也不能拆成兩趟旅行。",
      "question": "你會自己出發，還是把機會留給他？你想讓這趟旅程帶來甚麼？",
      "deeperQuestion": "如果你去完可以把故事和照片留給他，會改變你的決定嗎？",
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
    "deeperQuestion": "If they said they only wanted to show interest, what part of your life would you be happy to discuss instead?",
    "twist": "",
    "zh": {
      "title": "第一次不回應催促",
      "scenario": "家人又問你何時結婚，你已解釋很多次。這次你不想辯論，只想好好吃飯。",
      "question": "你會怎樣結束話題，而不是再證明自己的生活合理？",
      "deeperQuestion": "如果對方說只是想關心你，你願意換聊哪一件近況？",
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
    "deeperQuestion": "Would you each write a memory for the same album? What would you most want to record?",
    "twist": "",
    "zh": {
      "title": "保留不一樣的記憶",
      "scenario": "你說童年某次搬家很難過，手足卻記得那段日子很開心。家人想決定究竟誰記錯了。",
      "question": "你會怎樣讓不同經歷都被聽見？",
      "deeperQuestion": "你會想各寫一段回憶放進同一本相簿嗎？你最想記下甚麼？",
      "twist": ""
    },
    "id": "ponder-v5-family-064",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Parents with their own plans",
    "scenario": "Your retired parents want a small campervan for six months of travel. They have budgeted and kept money for living costs, but you would feel safer if they saved it and worry they may not enjoy life on the road.",
    "question": "What preparations would you ask about to feel more comfortable? Would you suggest renting for a trial trip?",
    "deeperQuestion": "Can you give them the freedom you once wanted from them?",
    "twist": "",
    "zh": {
      "title": "不需要被拯救的父母",
      "scenario": "父母退休後想買一輛小露營車，四處旅行半年。他們做過預算，仍會保留生活費；你卻覺得把這筆錢留著更安心，也擔心他們不習慣在外生活。",
      "question": "你會問他們哪些準備，才比較放心？你會提議先租車試一趟嗎？",
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
    "deeperQuestion": "Would their doing more household work change the length of stay you wanted?",
    "twist": "",
    "zh": {
      "title": "一起住的期限",
      "scenario": "家人暫住你家，原本說一個月，現在三個月了。對方有困難，你也開始需要自己的空間。",
      "question": "你會怎樣談新的期限和可行的下一步？",
      "deeperQuestion": "如果對方願意分擔更多家務，會改變你想要的期限嗎？",
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
    "scenario": "Relatives ask you for help first because you are unmarried and they assume you have more time. Your work, friendships and personal plans also keep you busy, but they rarely hear about them.",
    "question": "How would you assert that your time deserves equal respect?",
    "deeperQuestion": "If you declined this time, would you simply say no or suggest taking turns?",
    "twist": "",
    "zh": {
      "title": "一個人的家族責任",
      "scenario": "親戚有事總先找未婚的你，覺得你應該比較有空。其實你的工作、朋友和個人安排也很多，只是大家不太知道。",
      "question": "你會怎樣說明自己的時間同樣需要被尊重？",
      "deeperQuestion": "如果你不答應這一次，你會直接拒絕，還是提議大家輪流？",
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
    "title": "The half-hour outside the photo",
    "scenario": "You find an old photo of the whole family smiling, but someone says everyone had argued just beforehand. You remember the day as a perfect trip. Now you can hear each person's account of the half-hour around the photo.",
    "question": "Whose account would you hear first? Would knowing more make the photo less lovely or more meaningful?",
    "deeperQuestion": "Would you write this story beside the photo or leave the photo on its own?",
    "twist": "",
    "zh": {
      "title": "照片外的半小時",
      "scenario": "你找到一張全家笑得很開心的舊照片，卻有人說拍照前大家才剛吵完一架。你一直把那天記成完美的旅行，現在可以聽每個人講照片前後的半小時。",
      "question": "你最想先聽誰說？知道更多，會令這張照片變得沒那麼美好，還是更有意思？",
      "deeperQuestion": "你會在相簿旁寫下這段故事，還是只留下原本那張照片？",
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
    "scenario": "A relative is moving and needs help packing as well as money for movers. You can take a day off to help or contribute that day's earnings, but cannot do both. They have not said which would help most.",
    "question": "What would you ask before deciding how to help? Left to you, would you rather give time or money?",
    "deeperQuestion": "If you cannot offer the help they need most, how would you explain what you can do?",
    "twist": "",
    "zh": {
      "title": "只能給一種支持",
      "scenario": "家人準備搬屋，既缺人整理，也需要付搬運費。你只能請一天假去幫忙，或把那天的收入拿來分擔費用，不能兩樣都做。對方還沒有說最需要哪一種。",
      "question": "你會先問甚麼，再決定怎樣幫？如果由你選，你比較想出力還是出錢？",
      "deeperQuestion": "如果對方最需要的幫忙，你暫時做不到，你會怎樣說明自己能幫到哪裡？",
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
    "deeperQuestion": "If you had kept making something they no longer liked, how would you want them to tell you?",
    "twist": "",
    "zh": {
      "title": "一個不方便的真相",
      "scenario": "家人一直以為你喜歡某道菜，每次都特意做。其實你口味早已改變，只是不忍心說。",
      "question": "你會怎樣讓對方知道現在的你？",
      "deeperQuestion": "如果換成你一直煮對方已不喜歡的菜，你希望他怎樣告訴你？",
      "twist": ""
    },
    "id": "ponder-v5-family-073",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Advice without obedience",
    "scenario": "Before buying your first camera, you ask a relative about their experience. You choose another model because it is lighter for everyday use. They feel you should not have asked if you were not going to follow their recommendation.",
    "question": "How would you explain that their experience helped, but you gave more weight to different needs in the end?",
    "deeperQuestion": "Can you accept your own advice being declined?",
    "twist": "",
    "zh": {
      "title": "不是所有建議都要採用",
      "scenario": "你買第一部相機前，請家人分享使用經驗。最後你選了另一款，因為比較輕，適合每天帶出門。他覺得既然不聽，當初便不應該問。",
      "question": "你會怎樣告訴家人，他的經驗有幫助，只是你最後看重的條件不同？",
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
    "scenario": "After a family argument, one person wants to move on quickly while another is still hurt. With a gathering approaching, others urge the hurt person to let it go for the sake of the occasion.",
    "question": "Would you arrange separate seats, meet people separately first, or postpone the gathering? What matters most to you?",
    "deeperQuestion": "Does repair begin with sharing a table or changing behaviour?",
    "twist": "",
    "zh": {
      "title": "不同的原諒期限",
      "scenario": "家人之間發生爭執，有人很快想當沒事，另一人卻還很難過。聚會將近，大家開始催仍在難過的人放下，說不要影響團圓的氣氛。",
      "question": "你會安排分開坐、先各自見面，還是讓這次聚會延期？你最在意甚麼？",
      "deeperQuestion": "和好需要同桌吃飯，還是先改變某些做法？",
      "twist": ""
    },
    "id": "ponder-v5-family-076",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Who teaches whom this year?",
    "scenario": "Your family has an afternoon to teach each other skills, with time for two short lessons. Someone could teach dumpling-making, another video editing, and another repairs. Suggest lessons, then choose two together.",
    "question": "What would you teach, or what would you learn from whom? Why that person?",
    "deeperQuestion": "If the person you wanted to learn from felt they were a poor teacher, how would you get the lesson started?",
    "twist": "",
    "zh": {
      "title": "今年換誰教誰？",
      "scenario": "今年全家有一個下午可以互教技能，時間只夠安排兩堂小課。有人想教包餃子，有人想教剪影片，也有人會修理東西。大家先提名，再一起選想上的兩堂。",
      "question": "你想教甚麼，或者跟誰學甚麼？為甚麼選這個人？",
      "deeperQuestion": "如果你最想學的人說自己教得不好，你會怎樣讓這堂課開始？",
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
    "deeperQuestion": "If you could help for only an hour, would that feel worthwhile or would you prefer another full day?",
    "twist": "",
    "zh": {
      "title": "先照顧自己的一天",
      "scenario": "家人週末需要幫忙，你其實可以擠出時間，但已連續幾週沒有休息。事情不緊急，只是大家習慣你會答應。",
      "question": "你會答應多少，或提出甚麼替代時間？",
      "deeperQuestion": "如果只能幫一小時，你會覺得值得答應，還是寧願另約完整的一天？",
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
    "deeperQuestion": "What would you choose to do together that does not require much talking?",
    "twist": "",
    "zh": {
      "title": "一個家庭兩種語言",
      "scenario": "家中年輕一代不太會說長輩熟悉的語言，聊天越來越少。有人責怪孩子不努力，孩子則怕每次開口都被糾正。",
      "question": "你會怎樣讓不流利也能有真正的交流？",
      "deeperQuestion": "如果可以一起做一件不用說很多話的事，你會選甚麼？",
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
    "deeperQuestion": "What day would you ask about to learn when life felt just right to them?",
    "twist": "",
    "zh": {
      "title": "父母的普通人生",
      "scenario": "你問父母年輕時的夢想，他說沒有甚麼大夢，只希望家人安穩。你一時不知道怎樣接話。",
      "question": "你會再問甚麼，去理解這個看似普通的願望？",
      "deeperQuestion": "你會問他哪一天最讓他覺得「這樣就很好」？",
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
    "question": "How would you ask how long they want to rest and when they would like to consider work, before discussing it with the family?",
    "deeperQuestion": "If the opportunity were available for only a week, how would you explain that deadline?",
    "twist": "",
    "zh": {
      "title": "該誰決定怎樣幫",
      "scenario": "全家想替失業的成員安排工作機會，對方卻想先休息兩週。他們覺得他不珍惜幫忙。",
      "question": "你會怎樣先問當事人想休息多久、甚麼時候願意看看工作機會，再跟大家商量？",
      "deeperQuestion": "如果工作機會只等一星期，你會怎樣把時間限制告訴他？",
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
    "question": "How would you explain why you want a recording while leaving them comfortable to say no?",
    "deeperQuestion": "If they did not want to be recorded, what could you do together to make a different kind of memory?",
    "twist": "",
    "zh": {
      "title": "留下一段聲音",
      "scenario": "你想錄下長輩講故事，他一看到錄音就拘謹，平常聊天卻很自在。你很怕以後忘記他的聲音。",
      "question": "你會怎樣說明為甚麼想錄音，也讓他放心拒絕？",
      "deeperQuestion": "如果他不想錄音，你想跟他一起做甚麼，留下另一種回憶？",
      "twist": ""
    },
    "id": "ponder-v5-family-082",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "The unspent travel savings",
    "scenario": "Your family has saved for a trip but has failed to find shared dates for years. You can keep waiting or send the two people who travel least, though the others may not get another chance soon.",
    "question": "Would you wait to travel together or send two people first? What does this money represent to you?",
    "deeperQuestion": "If you were not going, what would you want them to bring back to share?",
    "twist": "",
    "zh": {
      "title": "那筆一直沒花的旅行錢",
      "scenario": "全家存了一筆旅行錢，卻幾年都湊不到一起出發的時間。現在可以繼續等，也可以先讓最少出門的兩位家人去，其他人未必很快有第二次機會。",
      "question": "你會再等一次全家同行，還是先讓兩個人出發？這筆錢對你代表甚麼？",
      "deeperQuestion": "如果出發的不是你，你希望他們帶甚麼回來跟大家分享？",
      "twist": ""
    },
    "id": "ponder-v5-family-083",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Bringing a partner home",
    "scenario": "Your partner spends a holiday with your family for the first time. They do not enjoy cards all evening and want an early night. Your family usually plays late and has already saved them a seat.",
    "question": "Would you suggest one round, another activity, or letting everyone choose for themselves?",
    "deeperQuestion": "Does joining a family include bringing new ways of living?",
    "twist": "",
    "zh": {
      "title": "把伴侶帶進家的方式",
      "scenario": "你的伴侶第一次來家裡過節，不習慣整晚打牌，也想提早休息。家人向來玩到深夜，覺得一起玩才熱鬧，已經替他留好座位。",
      "question": "你會提議先玩一輪、安排另一項活動，還是讓大家各自選擇？",
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
    "deeperQuestion": "What small story would help your family understand why you want to invite them?",
    "twist": "",
    "zh": {
      "title": "沒有血緣的家人",
      "scenario": "一位沒有血緣的人多年來像家人般照顧你，你想邀他參加家族重要聚會，有親戚覺得不合傳統。",
      "question": "你會怎樣說明他在你生命中的位置？",
      "deeperQuestion": "你會用哪一件小故事，讓其他家人明白你為甚麼想邀請他？",
      "twist": ""
    },
    "id": "ponder-v5-family-085",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Choosing a day off for family",
    "scenario": "You can arrange a day when one family member has no work or caring duties. Everything is covered, but they say it has been so long that they do not know what they would want to do. You have a day to explore with them.",
    "question": "Would you revisit an old interest or try something new? How would you help them choose for themselves?",
    "deeperQuestion": "If they ultimately wanted only to sleep in at home, would the arrangement still feel worthwhile?",
    "twist": "",
    "zh": {
      "title": "替家人選一天假期",
      "scenario": "你可以替一位家人安排一天不用工作、也不用照顧別人的假期。所有日常責任都有人接手，但他說自己已很久沒想過有空會想做甚麼。你有一天陪他試。",
      "question": "你會先帶他重訪舊興趣，還是試一件全新的事？你會怎樣讓他自己選？",
      "deeperQuestion": "如果他最後只想在家睡到自然醒，你會覺得這份安排值得嗎？",
      "twist": ""
    },
    "id": "ponder-v5-family-086",
    "level": "deeper",
    "emoji": "🏠"
  },
  {
    "category": "Family",
    "title": "Listening with a different view",
    "scenario": "A relative seeks comfort and agreement that another person is awful. You understand the hurt but not the judgement.",
    "question": "How would you show that you are listening while being honest that you see some things differently?",
    "deeperQuestion": "How could you show that you understand their feelings even when you disagree?",
    "twist": "",
    "zh": {
      "title": "陪你聊，但想法不同",
      "scenario": "家人向你抱怨另一位親戚，你理解他的傷心，卻不認同他對對方的判斷。他問你是不是也覺得對方很差。",
      "question": "你會怎樣讓他知道你有在聽，同時坦白自己有些不同的看法？",
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
    "question": "How often and for how long would you want to meet so you could feel comfortable staying in touch?",
    "deeperQuestion": "Could less contact make each meeting more genuine?",
    "twist": "",
    "zh": {
      "title": "一段需要距離的關係",
      "scenario": "每次跟某位家人見面都很累，你想減少頻率。其他人說家人只有這些，不應該疏遠。",
      "question": "你會想多久見一次、每次待多久，讓自己比較願意繼續來往？",
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
    "title": "The last night in the old home",
    "scenario": "Your family moves tomorrow. Most things are packed, leaving mattresses on the floor, takeaway food and one lamp. You have one last evening in the old home, with no cleaning or other jobs left.",
    "question": "Where would you want everyone to sit for a while? What story from that spot is worth telling again?",
    "deeperQuestion": "In the new home, would you most want to recreate a furnishing, a habit, or a kind of time together?",
    "twist": "",
    "zh": {
      "title": "舊屋最後一晚",
      "scenario": "全家明天便搬家，大部分東西已裝箱，今晚只剩地上的床墊、外賣和一盞燈。你們可以再用舊屋一晚，不必清潔，也沒有其他事情要做。",
      "question": "你想帶大家在哪個角落坐一會？那裡發生過甚麼值得再講一次的事？",
      "deeperQuestion": "到了新家，你最想帶過去的是一個擺設、一種習慣，還是某段相處時間？",
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
    "deeperQuestion": "Would they want to borrow it for a week first? How would you suggest that?",
    "twist": "",
    "zh": {
      "title": "被誤會的節省",
      "scenario": "長輩捨不得花錢，你想替他買舒服一點的用品，他卻覺得浪費。你不知道他是真的不需要，還是不習慣為自己花。",
      "question": "你會怎樣問，而不直接替他決定需要甚麼？",
      "deeperQuestion": "如果可以先借來試一星期，你覺得他會想試嗎？你會怎樣提議？",
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
    "title": "The tree outside the old home",
    "scenario": "Your former home has been sold, and its new residents plan to replace the tree outside with more useful space. You grew up with the tree and feel attached. They offer you a cutting to grow elsewhere.",
    "question": "Would you try to persuade them to keep the tree or take a cutting and grow it elsewhere? Why?",
    "deeperQuestion": "If the new tree looked different, would seeing it still remind you of your old home?",
    "twist": "",
    "zh": {
      "title": "舊家門口的樹",
      "scenario": "舊家已賣掉，新住戶打算移走門口的樹，改成方便使用的空間。那棵樹陪你們長大，你很捨不得；對方願意讓你們先取一段枝條種在別處。",
      "question": "你會想說服對方留下整棵樹，還是帶走枝條重新種？為甚麼？",
      "deeperQuestion": "如果新種的樹長得跟原來不同，你看見它時，還會想起舊家嗎？",
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
    "deeperQuestion": "If an old part of the celebration no longer fit, what would you replace it with this year?",
    "twist": "",
    "zh": {
      "title": "改變了的團圓",
      "scenario": "今年有人離開、有人加入，家族聚會不可能跟以前一樣。有人堅持照舊，有人想換個方式開始。",
      "question": "你會保留一件甚麼，再新增一件甚麼？",
      "deeperQuestion": "如果有個舊環節不再適合，今年你想用甚麼代替？",
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
    "question": "How would you word the rule so people could pause a conversation and still feel able to return to it later?",
    "deeperQuestion": "Could knowing you may decline make you more willing to speak?",
    "twist": "",
    "zh": {
      "title": "一家人的告假權",
      "scenario": "你們想訂一條新家規：任何人都可以說今天不想聊某個話題，不必當場解釋。有人擔心這會讓大家越來越疏遠。",
      "question": "你會怎樣訂這條規矩，讓人可以先停一停，又知道之後仍能找對方聊？",
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
    "deeperQuestion": "If the next generation asked why, what experience of your own would you use to explain?",
    "twist": "",
    "zh": {
      "title": "想留給下一代的規矩",
      "scenario": "假如你只能把家裡一條規矩留給下一代，也可以刪掉一條。你會有機會說明兩個選擇的原因。",
      "question": "你會留下甚麼，放下甚麼？",
      "deeperQuestion": "如果下一代問你為甚麼，你會用哪個自己的經歷來解釋？",
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
    "deeperQuestion": "If one person chose the destination each time in turn, would you be happy to go along with others' choices?",
    "twist": "",
    "zh": {
      "title": "家裡的第一個反對票",
      "scenario": "全家選旅行地點，其他人都想去同一處，只有你不想。你沒有更重要的理由，只是真的不感興趣。",
      "question": "你會表達反對、另作安排，還是這次配合？",
      "deeperQuestion": "如果每次輪流由一個人選地點，你願意接受別人選的地方嗎？",
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
      "scenario": "聚會中，有人拿一位朋友開玩笑。大部分人都笑了，那位朋友也笑了一下，之後卻變得安靜。你不確定他是否介意，也擔心當眾詢問會讓他更尷尬。",
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
    "title": "A friend's travelling café",
    "scenario": "A friend wants to leave their job and sell coffee along the coast for a year. They show you their van design with excitement. Living costs are saved, but they have never made dozens of coffees a day. They ask you to be their first customer.",
    "question": "Would you first imagine the route together or ask about a trial day? Why?",
    "deeperQuestion": "If they wanted to celebrate the decision tonight and discuss details tomorrow, could you enjoy the moment with them first?",
    "twist": "",
    "zh": {
      "title": "朋友的旅行咖啡車",
      "scenario": "朋友想辭職開咖啡車，沿海岸賣咖啡一年，興奮地給你看設計圖。他已存好生活費，卻還沒試過每天做幾十杯咖啡。他問你願不願意當第一位客人。",
      "question": "你會先陪他想像路線，還是先問他想不想試營業一天？為甚麼？",
      "deeperQuestion": "如果他只想今晚慶祝決心，明天才談細節，你能先陪他開心嗎？",
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
    "question": "Would you keep the original pair, draw lots between all three, or arrange something everyone could attend? Why?",
    "deeperQuestion": "Does friendship require everyone every time, or room for different pairings?",
    "twist": "",
    "zh": {
      "title": "留下最後一個位",
      "scenario": "你和朋友得到兩張難得的票，第三位好友也很想去。票不能加買，你們可以兩人去，或一起改做別的事。",
      "question": "你會照原定安排兩人去、讓三個人抽籤，還是另約一個大家都能參加的活動？為甚麼？",
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
    "deeperQuestion": "Besides apologising, what would you want your friend to do to help put things right?",
    "twist": "",
    "zh": {
      "title": "被分享的好消息",
      "scenario": "你把尚未確定的好消息告訴好友，他太開心，傳給了其他人。大家開始祝賀，你卻還不想公開。",
      "question": "你會怎樣處理公開的部分和朋友之間的信任？",
      "deeperQuestion": "除了道歉，你希望朋友幫忙做甚麼，讓這件事比較好處理？",
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
    "question": "How would you explain that you enjoy talking but also need more time to yourself?",
    "deeperQuestion": "Do time, shared experiences or openness build trust for you?",
    "twist": "",
    "zh": {
      "title": "友誼的不同速度",
      "scenario": "新朋友很快把你當知己，每天分享很多，你卻需要慢慢熟悉。你喜歡他，但跟不上這個速度。",
      "question": "你會怎樣告訴他，你很喜歡聊天，只是需要多一點自己的時間？",
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
    "deeperQuestion": "If you were asking for a recommendation, would you want to hear their concerns directly or have them suggest other opportunities first?",
    "twist": "",
    "zh": {
      "title": "幫朋友介紹工作",
      "scenario": "好友請你推薦他到公司，你喜歡他，卻不確定他的工作習慣適合。推薦會用到你的信譽。",
      "question": "你願意提供哪種幫忙，又不願保證甚麼？",
      "deeperQuestion": "如果是你請朋友推薦工作，你希望他直接說出顧慮，還是先介紹其他機會？",
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
    "question": "How would you describe tonight's plans? Would you want to arrange another meeting with them?",
    "deeperQuestion": "How much would you want to know if excluded?",
    "twist": "",
    "zh": {
      "title": "一個沒被邀請的人",
      "scenario": "你獲邀參加小聚會，另一位共同好友沒有。你知道主人只是人數有限，但對方問你晚上去哪裡。",
      "question": "你會怎樣回答今晚的安排？你想另外約他見面嗎？",
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
    "title": "An exhibition just for you",
    "scenario": "An artist can turn three moments from your life into a small exhibition. You can choose them yourself or let your closest friend choose, without seeing the work before opening. Only the two of you will visit.",
    "question": "Would you choose or trust your friend? Which memory do you think your selections would differ on most?",
    "deeperQuestion": "If your friend chose a day that seemed ordinary to you, what would you most want to ask?",
    "twist": "",
    "zh": {
      "title": "一場只辦給你的展覽",
      "scenario": "一位藝術家可以把你人生中的三個片段做成小展覽。你可以自己選，也可以讓最了解你的朋友選，但開幕前不能看作品。展覽只給你和那位朋友看。",
      "question": "你會自己選，還是交給朋友？你猜你們最可能選到哪段不同的回憶？",
      "deeperQuestion": "如果朋友選了你覺得很普通的一天，你最想問他甚麼？",
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
    "scenario": "Your friend loses a competition. You almost say that they learned a lot, then realise they are simply upset right now. The result cannot change, and you are unsure what would help to say.",
    "question": "How would you stay with them without turning failure into a positive?",
    "deeperQuestion": "What reassurance has ever rushed past your sadness?",
    "twist": "",
    "zh": {
      "title": "只想被陪著輸一次",
      "scenario": "朋友比賽落敗，你本來想說「至少學到很多」，卻發現他現在只是很難過。結果已經不能改變，而你不太知道這時候說甚麼才有幫助。",
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
    "deeperQuestion": "How much would your view of the incident change if your friend apologised afterwards?",
    "twist": "",
    "zh": {
      "title": "朋友的另一面",
      "scenario": "你偶然看見好友對服務人員很不耐煩，跟平日對你很不同。你不想只憑一次判斷，也不能當沒看見。",
      "question": "你會怎樣跟他談這件事？",
      "deeperQuestion": "如果朋友事後主動道歉，你對這次經歷的看法會改變多少？",
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
    "title": "The last shop on the corner",
    "scenario": "The neighbourhood has funds for one project: help an old bookshop stay open another year, or repair the pavement nearby. You have many memories of the shop, but the pavement is genuinely difficult to walk on.",
    "question": "Would you prioritise the shop or the pavement? What information would you want before deciding?",
    "deeperQuestion": "Would your answer change if you had no memories of the shop?",
    "twist": "",
    "zh": {
      "title": "街角最後一間店",
      "scenario": "社區有一筆經費，只夠做一件事：補貼一間快結業的舊書店，讓它多開一年，或修整書店附近的行人路。你們在書店有很多回憶，但那段路也確實不好走。",
      "question": "你會先保留書店，還是先修路？你最想知道哪項資料才決定？",
      "deeperQuestion": "如果這間店對你沒有回憶，你的答案會改變嗎？",
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
    "question": "Would you message the amount, mention it next time, or ask them to pay next time? Which fits your friendship best?",
    "deeperQuestion": "If they were short of money, how would you want them to discuss repayment?",
    "twist": "",
    "zh": {
      "title": "不好意思追的錢",
      "scenario": "你替好友墊了一筆不算大的錢，他忘了還。你知道他不是故意，卻每次想提醒都覺得尷尬。",
      "question": "你會直接傳金額、下次見面再提，還是請他下次付錢？哪種最適合你們？",
      "deeperQuestion": "如果對方說最近手頭緊，你希望他怎樣跟你商量還款？",
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
    "deeperQuestion": "Would knowing the destination and return time make you more willing to join?",
    "twist": "",
    "zh": {
      "title": "兩人不同的安全感",
      "scenario": "旅行時朋友想臨時跟剛認識的人去另一個地方，你覺得不安心。他覺得你太保守，也不想錯過體驗。",
      "question": "你們會怎樣安排，讓任何人都不必勉強同行？",
      "deeperQuestion": "如果可以先知道目的地和回程時間，會讓你比較想加入嗎？",
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
    "deeperQuestion": "If you had chosen the wrong gift, would you want to be told directly or have it handled another way?",
    "twist": "",
    "zh": {
      "title": "一份不想收的禮物",
      "scenario": "好友送你一件很用心但你不會用的禮物，還常問你用了沒有。你不想說謊，也不想讓他的心意落空。",
      "question": "你會怎樣回應，保留感謝也說出真實情況？",
      "deeperQuestion": "如果是你送錯禮物，你希望對方直接告訴你，還是用另一種方式處理？",
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
    "question": "What would you ask first to help your friend think it through without choosing for them?",
    "deeperQuestion": "Which question do you most want them to answer for themselves?",
    "twist": "",
    "zh": {
      "title": "不想替朋友作主",
      "scenario": "好友問你應不應該分手，說只要你說一句，他就照做。你知道很多細節，但終究不是過那段生活的人。",
      "question": "你會先問朋友甚麼，幫他想清楚，而不是直接替他選？",
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
    "title": "One visible year",
    "scenario": "A travel diary records every outing you will take next year. You can read it now to avoid disappointments or keep it sealed until the year ends. Events can still change after reading, but surprises will be revealed.",
    "question": "Would you open it? Would you most want to know the sights, the people, or whether the journeys were worthwhile?",
    "deeperQuestion": "If you could read only one page, would you choose the first, the last, or a random one?",
    "twist": "",
    "zh": {
      "title": "可以看見的一年",
      "scenario": "一本旅行日記會記錄你明年所有外出經歷。你可以現在看完，提早避開失望，也可以封起來，等一年後才讀。看過的事情仍然可以改變，但驚喜也會先被揭曉。",
      "question": "你會打開嗎？你最想提前知道的是風景、遇見的人，還是旅程是否值得？",
      "deeperQuestion": "如果只准看一頁，你會選第一頁、最後一頁，還是隨機一頁？",
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
    "deeperQuestion": "If your friend found it harder to open up during the day, what adjustment would you consider?",
    "twist": "",
    "zh": {
      "title": "陪伴需要預約嗎",
      "scenario": "朋友常深夜打來談心，你很在乎，但隔天要早起。你怕說改天會像把他排在行程表上。",
      "question": "你會怎樣提出一個能長期維持的方式？",
      "deeperQuestion": "如果朋友說白天比較難開口，你願意怎樣調整？",
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
    "deeperQuestion": "Would you wait for them to ask or check after a while whether they wanted to hear more?",
    "twist": "",
    "zh": {
      "title": "朋友之間的成功差距",
      "scenario": "你和好友一起申請機會，只有你獲選。他真心祝賀，也坦白暫時不想聽太多細節。",
      "question": "你會怎樣分享喜悅，又尊重他的空間？",
      "deeperQuestion": "你會等他主動問，還是過一段時間再問他想不想聽？",
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
    "question": "How would you explain your disappointment? Would you reschedule right away or let both of you rest first?",
    "deeperQuestion": "What rescheduling effort would help you feel valued?",
    "twist": "",
    "zh": {
      "title": "一次真誠的取消",
      "scenario": "朋友臨時取消，坦白說今天沒有社交力氣。你欣賞誠實，也因為特意空出時間而失落。",
      "question": "你會怎樣告訴他自己的失落？你想立即補約，還是先各自休息？",
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
    "deeperQuestion": "Would you have agreed if they had asked first? Why?",
    "twist": "",
    "zh": {
      "title": "被推去當主角",
      "scenario": "朋友替你報名上台分享，覺得你其實很有能力，只是害羞。你可能做得到，卻不喜歡沒被問過。",
      "question": "你會接下機會，還是先撤回這個安排？",
      "deeperQuestion": "如果他事前先問，你本來會答應嗎？為甚麼？",
      "twist": ""
    },
    "id": "ponder-v5-party-029",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "small"
  },
  {
    "category": "Party",
    "title": "A trial run of a dream",
    "scenario": "You can try a life you have long wanted for three months while keeping your current job and home. Afterwards you remember its real pleasures and difficulties, but cannot use the trial voucher again.",
    "question": "What life would you try? Would you most want to test what you enjoy or what you cannot tolerate?",
    "deeperQuestion": "If you no longer wanted that life afterwards, would it feel like losing a dream or gaining freedom?",
    "twist": "",
    "zh": {
      "title": "夢想的試用期",
      "scenario": "你可以體驗自己很嚮往的一種生活三個月，期間保留原本的工作和住處。回來後，你會記得真實的好與壞，但不能再用同一張試用券。",
      "question": "你會試哪種生活？你最想驗證的是自己喜歡甚麼，還是受不了甚麼？",
      "deeperQuestion": "如果體驗後不再嚮往，你會覺得失去一個夢，還是多了一份自由？",
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
    "deeperQuestion": "If they let you try it before deciding, would you? What would you clarify first?",
    "twist": "",
    "zh": {
      "title": "一個不想轉發的請求",
      "scenario": "好友請你轉發他的生意，你願意支持，但沒有試過產品，也不想讓自己的朋友以為你保證品質。",
      "question": "你會怎樣幫忙而不作自己無法確認的承諾？",
      "deeperQuestion": "如果他送你試用後再決定，你會願意試嗎？你會先說清楚甚麼？",
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
    "deeperQuestion": "Do you want to be your friend's closest person, or is a kind of connection that is uniquely yours enough?",
    "twist": "",
    "zh": {
      "title": "不想知道的排名",
      "scenario": "好友說你是他第二好的朋友，以為很親密。你本來沒有比較，聽完卻開始在意第一名是誰。",
      "question": "你會怎樣談這句話帶來的感覺？",
      "deeperQuestion": "你希望自己是朋友最親近的人，還是只要有一種別人取代不了的相處就足夠？",
      "twist": ""
    },
    "id": "ponder-v5-party-032",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "small"
  },
  {
    "category": "Party",
    "title": "A friend moving nearby",
    "scenario": "A close friend is considering a place near yours to see you more often, paying twenty percent more rent. You are excited, but you may move next year and have not decided yet.",
    "question": "Would you mention the possible move now or wait until it was certain? How would you describe the uncertainty?",
    "deeperQuestion": "If they said they wanted the area even if you moved, would you feel reassured or ask more about their reasons?",
    "twist": "",
    "zh": {
      "title": "朋友想搬到你附近",
      "scenario": "好友看中你家附近的房子，因為想多跟你見面，願意付比現在高兩成的租金。你很期待，卻知道自己明年可能搬走，計劃還沒確定。",
      "question": "你會現在就提起搬家的可能，還是等確定才說？你會怎樣描述這個未定的計劃？",
      "deeperQuestion": "如果他說即使你搬走也想住那裡，你會放心，還是再確認一次原因？",
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
    "question": "Would you suggest taking turns choosing, splitting each meeting into two parts, or fewer fixed plans?",
    "deeperQuestion": "Which compromises feel willing, and which erode the friendship?",
    "twist": "",
    "zh": {
      "title": "一起保留不同",
      "scenario": "你們想固定每月見面，一人喜歡熱鬧，一人容易疲倦。兩種安排都有人覺得自己在遷就。",
      "question": "你會提議輪流選、每次分兩段，還是減少固定安排？",
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
    "deeperQuestion": "Would you choose differently with ten dollars left per person versus a hundred?",
    "twist": "",
    "zh": {
      "title": "一筆聚會餘款",
      "scenario": "活動剩下一筆共同款項，可以平均退回，也可以留作下次，或捐出去。有人下次不一定參加。",
      "question": "每人先選一個方案，再說要加甚麼條件才公平。",
      "deeperQuestion": "如果每人的餘款只有十元，跟每人有一百元，你會作不同選擇嗎？",
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
    "deeperQuestion": "After changing the rule, what do you think the game would lose or gain?",
    "twist": "",
    "zh": {
      "title": "不喝酒也能玩",
      "scenario": "聚會遊戲用喝酒作懲罰，有人不喝，但不想逐次解釋原因。大家原本只想熱鬧。",
      "question": "一起改一條規則，讓拒絕不需要特別被注意。",
      "deeperQuestion": "改了規則之後，你覺得遊戲會少了甚麼，或多了甚麼？",
      "twist": ""
    },
    "id": "ponder-v5-party-037",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "medium"
  },
  {
    "category": "Party",
    "title": "Your shared game sells",
    "scenario": "A company offers ten thousand dollars for a small game you made together. One person spent the most time coding, another invented the core mechanic, and another found the buyer. You began for fun and never discussed money.",
    "question": "Each divide the money, then compare: do you value time, the idea, or making the sale most?",
    "deeperQuestion": "If the game had not sold and there were a bill to pay, would you divide it the same way?",
    "twist": "",
    "zh": {
      "title": "一起做的遊戲賣出了",
      "scenario": "你們合作做了一款小遊戲，意外有公司想花一萬元購買。有人花最多時間寫程式，有人提出核心玩法，有人帶來買家。當初只說一起試玩，沒有談分錢。",
      "question": "先各自分配這一萬元，再比較：你最看重時間、點子，還是促成交易？",
      "deeperQuestion": "如果遊戲沒有賣出，還欠一筆費用，你會沿用同一種分法嗎？",
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
    "question": "How would you suggest looking at other restaurants without making anyone explain their budget?",
    "deeperQuestion": "What makes an invitation safe to decline?",
    "twist": "",
    "zh": {
      "title": "一個人的昂貴提議",
      "scenario": "朋友提議去高級餐廳，大家表面都說可以，但你知道有人預算很緊。沒人想當掃興的人。",
      "question": "你會怎樣提議再看看其他餐廳，又不用讓任何人解釋自己的預算？",
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
    "title": "Ten thousand for the neighbourhood",
    "scenario": "You have ten thousand dollars for one neighbourhood project: shaded seats, free dinners, or a shared tool library. Residents vary in age and needs.",
    "question": "Each choose one and say whom you had in mind. Would you change after hearing the others?",
    "deeperQuestion": "Would you still choose it if you could never use it yourself?",
    "twist": "",
    "zh": {
      "title": "街區的一萬元",
      "scenario": "你們替街區決定怎樣用一萬元，只夠做一件事：加一排有遮蔭的座椅、辦免費晚餐，或買一套大家可借的工具。居民年齡和需要都不同。",
      "question": "每人先選一項，再說你想到哪種人。聽完後，你會改選嗎？",
      "deeperQuestion": "如果你自己完全用不到這項設施，你還會選它嗎？",
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
    "title": "A night market that opens once",
    "scenario": "A night market appears for tonight only. Each of you has three vouchers for an unfamiliar meal, a stranger's life story, or a mystery gift. You may choose the same option three times.",
    "question": "How would you spend your vouchers? Guess a friend's choices before revealing your own.",
    "deeperQuestion": "If you could give your last voucher to a friend, would you let them choose or pick a surprise?",
    "twist": "",
    "zh": {
      "title": "只開一次的夜市",
      "scenario": "有個夜市只在今晚出現，每人有三張券。可以換一頓從未吃過的美食、一段陌生人的人生故事，或一件不知道內容的小禮物；同一項可以換三次。",
      "question": "你會怎樣用三張券？先猜朋友的分法，再各自揭曉。",
      "deeperQuestion": "如果最後一張券可以送給朋友，你會給他自己選，還是替他選一份驚喜？",
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
    "scenario": "Five friends vote for an escape room. Four choose it; one is afraid of the dark but agrees to join. A brightly lit puzzle venue has space too, though the group was more excited about the escape room.",
    "question": "Would you follow the vote or add protection for the minority?",
    "deeperQuestion": "When should a decision require more than a vote?",
    "twist": "",
    "zh": {
      "title": "投票後的少數",
      "scenario": "五位朋友投票選活動，四人選密室遊戲，一人怕黑卻說可以陪大家。另一間明亮的解謎館也有空位，但大家原本對密室比較期待。",
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
    "title": "A famous work by an unknown creator",
    "scenario": "Your shared work can appear in a city square for a large audience, but anonymously. A small exhibition would credit everyone, with far fewer visitors. You must choose one venue.",
    "question": "Each choose: would you rather reach more people or have your work recognised as yours?",
    "deeperQuestion": "Would your choice change if one member needed the credit to help find work?",
    "twist": "",
    "zh": {
      "title": "有名的作品，匿名的作者",
      "scenario": "你們共同完成的作品可以放到城市廣場，很多人會看到，但只能匿名展出；另一個小展覽能寫出所有人的名字，觀眾卻少很多。只能選一個地方。",
      "question": "各自選一個：你希望作品影響更多人，還是希望大家知道是你做的？",
      "deeperQuestion": "如果其中一人正需要作品幫忙找工作，你會改變選擇嗎？",
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
    "deeperQuestion": "Would eating at seven and starting games at eight suit your group?",
    "twist": "",
    "zh": {
      "title": "不同程度的準時",
      "scenario": "聚會約七點，有人當成七點到，有人當成七點後開始出門。每次都是同一批人等。",
      "question": "你們會訂甚麼實際安排，減少責怪也減少等待？",
      "deeperQuestion": "如果七點先吃、八點才開始遊戲，你覺得這個安排適合你們嗎？",
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
    "title": "An extra free day each week",
    "scenario": "You can work one day less each week for twenty percent less pay, or keep your schedule and use the money for travel or things you want. Both cover basic living costs, and the choice lasts a year.",
    "question": "Each choose, then say what you would most want to do with the extra time or money.",
    "deeperQuestion": "Would your answer change if all your friends still worked Fridays?",
    "twist": "",
    "zh": {
      "title": "每週多一天自由",
      "scenario": "你可以每週少工作一天，但收入會少兩成；也可以照舊工作，把那筆錢留作旅行或想買的東西。兩種選擇都付得起基本生活，安排要維持一年。",
      "question": "每人先選，再說多出的時間或金錢最想用來做甚麼。",
      "deeperQuestion": "如果所有朋友星期五仍要工作，你的答案會不同嗎？",
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
    "deeperQuestion": "Would you vote differently for a travel destination than for who handles the money?",
    "twist": "",
    "zh": {
      "title": "匿名票還是舉手",
      "scenario": "你們要選下一次活動，有人提議匿名投票，怕大家跟著最有影響力的人選。另一人覺得朋友應該直接說。",
      "question": "你們會選哪種方式，為甚麼？",
      "deeperQuestion": "如果是選旅行地點，跟選誰負責收錢，你會用不同投票方式嗎？",
      "twist": ""
    },
    "id": "ponder-v5-party-049",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "medium"
  },
  {
    "category": "Party",
    "title": "How should the discount be shared?",
    "scenario": "One person's private discount saves the group money. They want a larger share of the saving.",
    "question": "How would you divide the saving without souring the gesture?",
    "deeperQuestion": "Would your answer change if they had spent loyalty points on the discount?",
    "twist": "",
    "zh": {
      "title": "折扣應該怎樣分？",
      "scenario": "其中一人有私人折扣，替全組省下不少錢。他想自己少付一點，其他人以為折扣應平均分享。",
      "question": "你們會怎樣處理，避免把好意變成爭執？",
      "deeperQuestion": "如果折扣券是他用積分換來的，你的答案會改變嗎？",
      "twist": ""
    },
    "id": "ponder-v5-party-050",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "medium"
  },
  {
    "category": "Party",
    "title": "A mystery stop together",
    "scenario": "Your trip includes one free extra stop: a beautiful, well-reviewed bay or an unpictured mystery destination that could be wonderful or just an ordinary town. Travel and accommodation are equally convenient.",
    "question": "Choose individually, then ask someone who chose differently: what do you most fear missing on a trip?",
    "deeperQuestion": "Would you change your choice if this were your only long holiday in five years?",
    "twist": "",
    "zh": {
      "title": "共同旅行的神秘一站",
      "scenario": "你們的旅行可免費加一站。可以選照片漂亮、評價穩定的海灣，也可以抽一個沒有照片的地方，可能很驚喜，也可能只是普通小鎮。兩邊交通和住宿一樣方便。",
      "question": "先各自選，再找一個不同答案的人聊：你在旅行中最怕錯過甚麼？",
      "deeperQuestion": "如果這是五年來唯一一次長假，你會改選嗎？",
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
    "title": "Luck you can lend",
    "scenario": "Each of you has a luck voucher that helps one thing you have prepared for go more smoothly, without guaranteeing success. You can use it or give it to a friend facing a challenge. It expires tomorrow.",
    "question": "What would you use it for? If you gave it away, would you tell the friend or let them believe it was all their own doing?",
    "deeperQuestion": "If you badly wanted success yourself, would you still give it away? What condition could change your mind?",
    "twist": "",
    "zh": {
      "title": "可以借出的幸運",
      "scenario": "你們每人有一張幸運券，能讓一件已經努力準備的小事更順利，但不保證成功。可以自己用，也可以送給正準備挑戰的朋友。券明天便到期。",
      "question": "你會把券用在哪裡？如果送人，你會告訴他，還是讓他以為全靠自己？",
      "deeperQuestion": "如果你也很想成功，你還願意送出去嗎？哪個條件會令你改變主意？",
      "twist": ""
    },
    "id": "ponder-v5-party-054",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "medium"
  },
  {
    "category": "Party",
    "title": "A delayed wish postcard",
    "scenario": "You receive a postcard you wrote five years ago. One wish on it can come true next month, but you now want something else that will take your own preparation. The old opportunity cannot be transferred.",
    "question": "Would you take the old opportunity or keep your time for who you are now? Each give a possible example.",
    "deeperQuestion": "How much would it affect you if old friends were excited on your behalf?",
    "twist": "",
    "zh": {
      "title": "遲到的願望明信片",
      "scenario": "你們收到五年前寫給自己的明信片，只有一個願望能在下個月實現。可是現在你已想做另一件事，而新願望要自己慢慢準備。舊願望的機會不能轉讓。",
      "question": "你會接住當年的願望，還是把時間留給現在的自己？先各說一個可能的例子。",
      "deeperQuestion": "如果以前的朋友都替你很興奮，他們的期待會影響你多少？",
      "twist": ""
    },
    "id": "ponder-v5-party-055",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "medium"
  },
  {
    "category": "Party",
    "title": "Two ways home",
    "scenario": "After the gathering, you can take the familiar twenty-minute route home or a forty-minute seaside path. Everyone has an early start tomorrow, but the weather is lovely and one friend moves far away next week.",
    "question": "Which route would you take? Choose first, then say what would make you stay twenty minutes longer.",
    "deeperQuestion": "Would you still stay if nobody were about to move away?",
    "twist": "",
    "zh": {
      "title": "兩條回家的路",
      "scenario": "聚會結束，你們可以走二十分鐘的熟路，也可以走四十分鐘的海邊步道。明天都要早起，但今晚天氣很好，而且有位朋友下星期便搬到很遠。",
      "question": "你會走哪條？先選路，再說甚麼會令你願意多留二十分鐘。",
      "deeperQuestion": "如果沒有人即將搬走，你還會願意留下嗎？",
      "twist": ""
    },
    "id": "ponder-v5-party-056",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "medium"
  },
  {
    "category": "Party",
    "title": "An island team of friends",
    "scenario": "You can spend a month on a fully equipped island, with food and safety covered. You still need to cook, maintain things and plan activities together, with private space for everyone. You may bring only one existing group habit.",
    "question": "What habit would you keep, and what would you pause? Compare your imagined island lives.",
    "deeperQuestion": "Do you think you would act differently from usual? What part of you might change most?",
    "twist": "",
    "zh": {
      "title": "朋友組成的小島隊",
      "scenario": "你們可以在一座設備齊全的小島生活一個月，食物和安全都有保障。每天仍要一起煮飯、維護設施和安排活動，也各有私人空間。只能帶一個現有的共同習慣去。",
      "question": "你想保留哪個習慣，最想暫停哪個？各自說完，再看看大家想像的小島是否相同。",
      "deeperQuestion": "你覺得自己會成為跟平常不同的人嗎？哪一部分最可能改變？",
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
    "deeperQuestion": "If someone could take their place, what else would you want them to finish before leaving?",
    "twist": "",
    "zh": {
      "title": "可以中途退出嗎",
      "scenario": "你們報名長期共同課程，有人上了幾次發現不喜歡。退出會影響團體折扣，但勉強留下也不快樂。",
      "question": "你們會訂怎樣的退出安排？",
      "deeperQuestion": "如果找到新人接替他的名額，你會希望他再完成甚麼才離開？",
      "twist": ""
    },
    "id": "ponder-v5-party-058",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "medium"
  },
  {
    "category": "Party",
    "title": "One sentence each about the trip",
    "scenario": "You each write one sentence reviewing the same trip. Some recall the best view, others company while lost, and someone remembers rushing. All sentences appear together and cannot be edited by others.",
    "question": "What would you write? If a friend's review were the opposite of yours, what would you first want to know?",
    "deeperQuestion": "Would you rather improve the worst moment next time or recreate the best one?",
    "twist": "",
    "zh": {
      "title": "每人一句的旅遊評價",
      "scenario": "你們要替同一趟旅行寫評價，但每人只能留一句話。有人記得最美的風景，有人記得迷路時有人陪，也有人只記得太趕。所有句子會一起出現，不能互相修改。",
      "question": "你會寫哪一句？如果朋友的評價跟你相反，你會先好奇哪一點？",
      "deeperQuestion": "你比較希望下次旅行改善最差的一刻，還是再創造最好的一刻？",
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
    "question": "What questions could you add so the new friend also had stories to share?",
    "deeperQuestion": "If you were the only newcomer, would you prefer hearing the group's stories or starting a new game together?",
    "twist": "",
    "zh": {
      "title": "讓新朋友也有位置",
      "scenario": "固定朋友圈來了一位新朋友，遊戲題目卻全是過往共同回憶。他很難參與，又不想讓大家改玩法。",
      "question": "你們會加甚麼題目，讓新朋友也有自己的故事可以分享？",
      "deeperQuestion": "如果換成你是唯一的新朋友，你想先聽大家的故事，還是直接加入新遊戲？",
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
    "title": "An answer you can trade",
    "scenario": "A shop offers one answer about your future in exchange for your complete memory of a past experience you choose. The owner explains what the answer can cover before you decide whether to trade.",
    "question": "What would you ask? Is there a memory you would really trade? You may also decline.",
    "deeperQuestion": "If a friend could retell the event to you, would the loss feel smaller?",
    "twist": "",
    "zh": {
      "title": "一個可以交換的答案",
      "scenario": "一間小店願意回答你一個關於未來的問題，但要換走你對一段過去經歷的完整記憶。那段記憶由你自己選，店主會先告訴你答案範圍，讓你決定是否交易。",
      "question": "你會想問甚麼？有沒有一段記憶，你真的願意換出去？也可以選擇不交易。",
      "deeperQuestion": "如果朋友還記得那件事，可以重新講給你聽，你會覺得失去得比較少嗎？",
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
    "deeperQuestion": "If nobody subsidised the next gathering, would you be happy to return to a cheaper place?",
    "twist": "",
    "zh": {
      "title": "聚會預算的秘密",
      "scenario": "一位朋友願意多付，讓大家去更好的地方，但希望其他人不知道是誰補貼。有人擔心這會形成不平等。",
      "question": "你們會接受嗎？需要先說清楚哪些事？",
      "deeperQuestion": "如果下次沒有人補貼，你們會願意換回便宜的地方嗎？",
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
    "deeperQuestion": "If the photo were only for a friends' chat and they still declined, what would you do?",
    "twist": "",
    "zh": {
      "title": "照片裡的缺席者",
      "scenario": "聚會大合照很好看，但一位朋友說不想被公開。裁掉他會很奇怪，其他人又很想分享。",
      "question": "你們會選另一張、遮臉，還是保留作私人回憶？",
      "deeperQuestion": "如果照片只放在朋友群組，對方仍不想，你會怎樣處理？",
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
    "title": "A secret identity for a week",
    "scenario": "You can spend a week in a new city with a home and living costs covered. Nobody knows your job or past; they know you only through what you do each day. You may live as usual or show a different side.",
    "question": "What side of you would you want people to know first? Let a friend guess before you answer.",
    "deeperQuestion": "What change from that week would you want to keep when you returned?",
    "twist": "",
    "zh": {
      "title": "一週的秘密身份",
      "scenario": "你可以在陌生城市過一星期，住處和生活費已備好。大家不知道你的職業和過去，只會從你每天做的事認識你。你可以照平常生活，也可以試著展現另一面。",
      "question": "你希望別人首先認識你哪一面？朋友可以先猜，再聽你回答。",
      "deeperQuestion": "回到原本的生活後，你想保留這星期的哪個改變？",
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
    "deeperQuestion": "If the preparation were fun too, would you still think they should pay less?",
    "twist": "",
    "zh": {
      "title": "十個人的共同基金",
      "scenario": "十個人各出一樣的錢辦活動，有兩人願意多做準備。大家要決定，他們是否可以少付或優先選活動。",
      "question": "先投票，再請不同選擇各派一人說理由。",
      "deeperQuestion": "如果準備工作也很好玩，你還會認為應該少付嗎？",
      "twist": ""
    },
    "id": "ponder-v5-party-067",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "medium"
  },
  {
    "category": "Party",
    "title": "A gift that cannot be divided",
    "scenario": "Your group receives one free study voucher for one person, with no cash alternative. One person has the most talent, another wants it most, and another most needs a change. You must choose who receives it.",
    "question": "In groups, choose your main principle, then hear the others. Would you use ability, need, enthusiasm, or a draw?",
    "deeperQuestion": "Would you support the same principle if you were least likely to be chosen?",
    "twist": "",
    "zh": {
      "title": "一份大家分不到的禮物",
      "scenario": "有人送你們一張免費進修券，只供一人用，不能換錢。有人最有天分，有人最想學，也有人最近最需要轉換生活。你們要一起選收禮的人。",
      "question": "小組先決定最重要的一個原則，再聽其他組。你會按能力、需要、熱情，還是抽籤？",
      "deeperQuestion": "如果你知道自己最不可能被選中，還會支持同一個原則嗎？",
      "twist": ""
    },
    "id": "ponder-v5-party-068",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "medium"
  },
  {
    "category": "Party",
    "title": "One sound for the city",
    "scenario": "The city will send one thirty-second sound recording a hundred years into the future. Choices include festival cheers, market calls, sea wind, or people having dinner at home. Each group may nominate one.",
    "question": "What would you preserve? What kind of life would you want future listeners to hear?",
    "deeperQuestion": "Would you choose differently if it had to be a sound that was disappearing?",
    "twist": "",
    "zh": {
      "title": "城市只留一段聲音",
      "scenario": "這座城市要把一段三十秒的聲音送到一百年後。可以選節慶歡呼、街市叫賣、海邊的風，或普通人回家吃飯的聲音。每組只能提名一段。",
      "question": "你們會留下甚麼？希望未來的人聽見怎樣的生活？",
      "deeperQuestion": "如果只能留下一段快要消失的聲音，你們會改選嗎？",
      "twist": ""
    },
    "id": "ponder-v5-party-069",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Party",
    "title": "Five minutes of unfamiliar applause",
    "scenario": "Each of you may perform on a stage where everyone genuinely appreciates you but forgets your name. Another stage has just three people you know, who will remember and give honest feedback.",
    "question": "Choose a stage, then talk to someone who chose differently: what would you most want from the performance?",
    "deeperQuestion": "Would you choose differently if it were work you had never shown anyone?",
    "twist": "",
    "zh": {
      "title": "五分鐘的陌生掌聲",
      "scenario": "你們可以各上一次小舞台，台下所有人都真心欣賞你，卻不會記得你的名字。另一個舞台只有三位熟人，他們會記得很久，也會給真實意見。",
      "question": "先各自選舞台，再找不同選擇的人聊：你最想從這次演出得到甚麼？",
      "deeperQuestion": "如果演出的是你從沒讓人看過的作品，你會改選嗎？",
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
    "title": "One more person at dinner",
    "scenario": "You have a free dinner with room for one more guest: an expert who can answer a shared question, an old friend you have not seen in years, or a stranger with an interesting life story. All would gladly come.",
    "question": "Each group choose a guest and prepare the first question. Do you most want answers, reunion, or novelty?",
    "deeperQuestion": "If the dinner could never happen again, would choosing be harder or clearer?",
    "twist": "",
    "zh": {
      "title": "晚餐可以多坐一個人",
      "scenario": "你們有一頓免費晚餐，可以多邀一人：一位能解答大家共同疑問的專家、一位多年沒見的老朋友，或一位帶著有趣人生故事的陌生人。三人都樂意來。",
      "question": "每組選一人，並準備第一個問題。你們最想得到答案、重逢，還是新鮮感？",
      "deeperQuestion": "如果這頓飯不能再約第二次，你們會更難選，還是更清楚想見誰？",
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
    "deeperQuestion": "If the person laughed hardest at the clip, would you post it or still check who could see it?",
    "twist": "",
    "zh": {
      "title": "共同回憶的剪接",
      "scenario": "你們做聚會影片，最好笑的片段剛好讓一位朋友看起來很笨。他本人不在剪接現場。",
      "question": "你們會保留、先問，還是換掉？說明自己的界線。",
      "deeperQuestion": "如果本人看完笑得最開心，你會放心公開，還是仍想問清楚分享範圍？",
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
    "deeperQuestion": "Would you switch to a park picnic everyone could attend, even though it meant losing the planned activity?",
    "twist": "",
    "zh": {
      "title": "人多就應該便宜嗎",
      "scenario": "大聚會要選場地，便宜地方有樓梯，較貴地方才方便行動不便的朋友。預算本來已緊。",
      "question": "你們會減少其他項目、增加費用，還是改形式？",
      "deeperQuestion": "如果改在公園野餐，人人都能來但少了原本的活動，你願意嗎？",
      "twist": ""
    },
    "id": "ponder-v5-party-074",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Party",
    "title": "A thousand now or later",
    "scenario": "Each person can take a thousand dollars today or a guaranteed fifteen hundred next year. There is no urgent need, but something you have long wanted to do is available now and may not be next year.",
    "question": "Choose first, then say what that opportunity might be. How much future money would you trade for today's experience?",
    "deeperQuestion": "Would friends choosing today make you more inclined to join them, or leave your answer unchanged?",
    "twist": "",
    "zh": {
      "title": "一千元的時間差",
      "scenario": "每人可以領一千元今天用，也可以等一年領一千五百元，兩者都保證收到。沒有急用，但現在剛好有一件你一直想做的事，明年未必再有機會。",
      "question": "先各自選，再說那件事可能是甚麼。你願意用多少未來的錢換今天的經歷？",
      "deeperQuestion": "如果朋友也選今天，你會更想跟著選，還是答案不受影響？",
      "twist": ""
    },
    "id": "ponder-v5-party-075",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Party",
    "title": "A hotel for strangers",
    "scenario": "You run a small hotel for a week and can offer one free extra: company at dinner, someone to plan tomorrow, or a quiet space without interruptions. Rooms and food are already covered.",
    "question": "Each group choose a service and describe the traveller you have in mind. Would you want to stay there yourself?",
    "deeperQuestion": "If most guests wanted the opposite of what you need, how would you understand their choice?",
    "twist": "",
    "zh": {
      "title": "共同經營的陌生旅館",
      "scenario": "你們接手一間小旅館一週，只能提供一項免費特色服務：晚餐時有人陪聊、有人替客人規劃明天，或完全不被打擾的安靜空間。房間和食物都已足夠。",
      "question": "每組選一種服務，說說你們想到哪種旅客。你自己會想入住嗎？",
      "deeperQuestion": "如果最多客人選的服務跟你需要的相反，你會怎樣理解他們？",
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
    "deeperQuestion": "As host, what would you most want the person who brought the extra guest to do first?",
    "twist": "",
    "zh": {
      "title": "意外多出一位客人",
      "scenario": "有人帶朋友來，令預訂座位不夠。新客人不知道原本需要先問，主人也不想讓他難堪。",
      "question": "你們會先怎樣處理現場，再怎樣談責任？",
      "deeperQuestion": "如果你是主人，最希望帶朋友來的人先做哪件事？",
      "twist": ""
    },
    "id": "ponder-v5-party-077",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Party",
    "title": "One group photograph",
    "scenario": "You have a camera with one shot, delivered to everyone ten years later. You can pose now or trust someone to catch a natural moment, though someone may blink or be out of frame.",
    "question": "Vote first, then say whether you most want everyone included or the feeling of the moment preserved.",
    "deeperQuestion": "If you were the one left out, would you support your original choice?",
    "twist": "",
    "zh": {
      "title": "只拍一次的全體照",
      "scenario": "你們得到一部只能拍一次的相機，照片會在十年後送回每個人手上。可以現在整齊站好拍，也可以交給一人等自然的一刻按快門，但可能有人閉眼或不在畫面裡。",
      "question": "先投票，再說你更想留住完整的人數，還是當時的感覺？",
      "deeperQuestion": "如果被漏拍的是你，你還會支持原本的選擇嗎？",
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
    "scenario": "A friend praises a shop's kind service in a group chat, ending by calling it unforgettable. Someone shares just that sentence alongside their own complaints, making it look as though your friend was being sarcastic. You know the owner.",
    "question": "How would you repair misunderstanding already caused?",
    "deeperQuestion": "What should the forwarder do beyond apologising?",
    "twist": "",
    "zh": {
      "title": "被轉傳的一句話",
      "scenario": "朋友在群組稱讚一家店的貼心招待，最後寫了句「這間店真讓人忘不了」。有人只截下這句話，配上自己對那間店的抱怨轉發出去，結果看起來像朋友也在諷刺店家。店主剛好是你們認識的人。",
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
    "title": "A shared secret hideaway",
    "scenario": "You find a lovely, little-known public seaside spot. Sharing it lets more people enjoy it but may make it crowded; keeping it quiet limits it to a few. Access is legal and open to everyone.",
    "question": "Each group decide whether to post it, tell friends only, or keep it quiet for now. What do you most want to preserve?",
    "deeperQuestion": "If you were someone who had never heard of it, what would you hope its discoverers would do?",
    "twist": "",
    "zh": {
      "title": "一個大家都知道的秘密基地",
      "scenario": "你們發現一個很舒服、暫時很少人知道的海邊角落。分享位置可以讓更多人享受，也可能令它變得擁擠；不分享則只有少數人知道。沒有私人土地或禁止進入的問題。",
      "question": "每組決定會公開、只告訴朋友，還是先不分享。你們最想保留甚麼？",
      "deeperQuestion": "如果你是一直沒聽過這個地方的人，你希望發現它的人怎樣做？",
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
    "question": "Would you change the subject, or continue through a small story everyone could understand?",
    "deeperQuestion": "Describe one interesting recent work moment in a single sentence without industry terms.",
    "twist": "",
    "zh": {
      "title": "聚會裡的工作話題",
      "scenario": "大部分人做同一行，越聊越投入，其他行業的朋友插不上話。專業話題很有趣，也真的把人隔開了。",
      "question": "你們會換個話題，還是用一個大家都聽得懂的小故事，繼續聊這件事？",
      "deeperQuestion": "請用一句不帶行業術語的話，介紹你最近工作中一件有趣的小事。",
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
    "deeperQuestion": "How could someone raise a different view, and how could the others respond so they felt able to speak sooner next time?",
    "twist": "",
    "zh": {
      "title": "一個不能重來的投票",
      "scenario": "大家投票後已付訂金，有人這才說自己不喜歡，但之前為怕掃興投了贊成。改動會有損失。",
      "question": "你們會怎樣分擔這次後果，也避免下次再發生？",
      "deeperQuestion": "你覺得提出不同意見的人可以怎樣開口？其他人又可以怎樣回應，讓他下次敢早點說？",
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
    "question": "Design one yearly ritual in each group. What would you hope people shared during it?",
    "deeperQuestion": "Looking back in ten years, what kind of days would you want this holiday to have helped everyone remember?",
    "twist": "",
    "zh": {
      "title": "一個全新的節日",
      "scenario": "你們可以創立一年一次的朋友節，只留一個固定環節。有人想表揚成就，有人想分享失敗，有人只想好好吃飯。",
      "question": "每組設計一個固定環節。你們希望大家在這個環節裡分享甚麼？",
      "deeperQuestion": "十年後回看，你最想這個節日幫大家記住哪一類日子？",
      "twist": ""
    },
    "id": "ponder-v5-party-084",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Party",
    "title": "A book without ratings",
    "scenario": "A bookshop gives each of you one free book. Covers show no author, sales figures or ratings, only an excerpt. You can browse and choose or ask a friend to pick something they want you to read.",
    "question": "Would you choose or trust a friend? Guess each other's answers before revealing them.",
    "deeperQuestion": "If you disagreed with much of your friend's choice, would you finish it or swap it?",
    "twist": "",
    "zh": {
      "title": "每人一本沒有評分的書",
      "scenario": "一間書店讓每人免費帶走一本書，但封面沒有作者、銷量或評分，只有一段內容。你可以自己讀幾頁再選，也可以請朋友替你選一本他希望你讀的。",
      "question": "你會自己選，還是交給朋友？先兩人互猜，再揭曉。",
      "deeperQuestion": "如果朋友選的書讓你不同意很多地方，你會想讀完，還是換一本？",
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
    "title": "One convenience for a month",
    "scenario": "For one month, you may keep just one convenience: online shopping, delivered meals, or on-demand rides. You can still shop in person, cook, and use public transport. Your workplace stays the same.",
    "question": "Choose in groups, then explain what the saved time means to you. Who finds the trade-off hardest?",
    "deeperQuestion": "Would you be more willing to try if all the savings funded a trip with friends?",
    "twist": "",
    "zh": {
      "title": "一個月只能保留一種方便",
      "scenario": "你們要體驗一個月的簡單生活。網購、外賣和隨叫隨到的交通，只能保留一種；其餘仍可自己去買、煮飯或搭公共交通。工作地點不變。",
      "question": "每組先選，再說省下的時間對你們有甚麼用。組內誰最難取捨？",
      "deeperQuestion": "如果省下的錢全用來辦一次朋友旅行，你會更願意試嗎？",
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
    "title": "A holiday for something ordinary",
    "scenario": "You may create a public holiday, but it must celebrate something ordinary rather than a famous person or major event. Everyone gets the day off and chooses how to mark it.",
    "question": "Each group name a holiday and explain why its subject deserves to be remembered.",
    "deeperQuestion": "If the holiday gradually became a shopping promotion, would it still feel meaningful?",
    "twist": "",
    "zh": {
      "title": "把一件普通事變成節日",
      "scenario": "你們可以新增一個公眾假期，但不能紀念名人或大事，只能慶祝一件普通生活中的事。當天所有人都放假，慶祝方式由大家自由選。",
      "question": "每組想一個節日名稱，說說它為甚麼值得被大家記住。",
      "deeperQuestion": "如果這個節日慢慢變成購物促銷，你還會覺得它有意義嗎？",
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
    "title": "Laughter you can replay",
    "scenario": "You can replay five minutes of shared laughter, including small details you have forgotten. Each person nominates a memory, then you choose one together. Listen once, with no recording.",
    "question": "Each think of a moment, then compare. What would you most want to hear again?",
    "deeperQuestion": "If everyone chose a different memory, whose story would you most want to hear more about?",
    "twist": "",
    "zh": {
      "title": "可以重播但不能保存的笑聲",
      "scenario": "你們可以重聽一次朋友之間笑得最開心的五分鐘，連當時忘記的小細節也聽得到。大家先各自提名一段回憶，再一起選一段播放；只能聽一次，不能錄下來。",
      "question": "先各自想一段，再看看有沒有相同答案。你最想重聽甚麼？",
      "deeperQuestion": "如果大家選的回憶都不同，你最想聽誰多說一點？",
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
    "question": "How would you rotate invitations so people understood that missing one gathering was about space, not a fading friendship?",
    "deeperQuestion": "What explanation would help you understand missing one invitation?",
    "twist": "",
    "zh": {
      "title": "誰來決定下次邀誰",
      "scenario": "朋友圈越來越大，場地只能容納一半。每次邀同一群很舒服，輪替又怕有人覺得被降級。",
      "question": "你們會怎樣輪流邀請，讓大家知道沒被邀請只是名額有限，而不是感情變淡？",
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
    "title": "A parcel for a future stranger",
    "scenario": "Each group leaves a parcel for someone moving to the city ten years from now, with three inexpensive objects. No guides or adverts: the aim is to make their first night feel as though this place could become home.",
    "question": "What three things would you include? Which would you have wanted when you first arrived?",
    "deeperQuestion": "If the recipient's life were completely different, which object might still help?",
    "twist": "",
    "zh": {
      "title": "給未來陌生人的包裹",
      "scenario": "每組要留一個包裹給十年後搬進這城市的人，只能放三件便宜的小物。不能放指南或廣告，目的是讓他第一晚覺得這裡也可能成為家。",
      "question": "你們會放哪三件？哪一件其實也是你初來時想收到的？",
      "deeperQuestion": "如果收件人的生活跟你們完全不同，哪一件仍可能有用？",
      "twist": ""
    },
    "id": "ponder-v5-party-093",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Party",
    "title": "A friend's other life",
    "scenario": "You can each glimpse your own life on another path: an ordinary day if you had chosen a different school, city or interest. Each person chooses their own turning point, while friends can guess which it will be.",
    "question": "Which turning point in your own life would you choose? Let friends guess before you explain.",
    "deeperQuestion": "If the other life looked more successful but lacked your current friends, how would you see that choice?",
    "twist": "",
    "zh": {
      "title": "朋友的另一條人生",
      "scenario": "你們可以各看一段自己走上另一條路的人生：如果當年選了不同學校、城市或興趣，現在普通的一天會怎樣。要看哪個選擇，由本人決定，朋友可以先猜一猜。",
      "question": "你會想看自己的哪條岔路？朋友先猜，再聽你說原因。",
      "deeperQuestion": "如果另一種人生看起來更成功，卻沒有現在這群朋友，你會怎樣看那個選擇？",
      "twist": ""
    },
    "id": "ponder-v5-party-094",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Party",
    "title": "One city habit to keep",
    "scenario": "You move to a newly founded town and can bring one habit from your old city: late-night meals, neighbours helping each other, punctual starts, or another of your choice. The town will gradually adopt it.",
    "question": "Each group choose a habit and name one benefit and one difficulty it would bring.",
    "deeperQuestion": "Would you like that habit if you were a newcomer joining later?",
    "twist": "",
    "zh": {
      "title": "只保留一個城市習慣",
      "scenario": "你們搬到一個剛建立的小鎮，可以帶去原本城市的一個習慣：深夜吃飯、鄰里互相照應、準時開始，或你們自己想的一種。小鎮會慢慢照這個方式生活。",
      "question": "每組選一種，說出它會帶來的好處和一個麻煩。",
      "deeperQuestion": "如果你是剛加入的新居民，你會喜歡這個習慣嗎？",
      "twist": ""
    },
    "id": "ponder-v5-party-095",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Party",
    "title": "A reward you need not keep",
    "scenario": "After a challenge, each person chooses a reward: repairing a cherished object, fulfilling a friend's small wish, or a day of rest with everything arranged. All have equal value and cannot be sold.",
    "question": "Choose individually, then talk to someone who chose differently: is your choice about today's need or a lasting priority?",
    "deeperQuestion": "Would your choice change if you could receive a reward only once a year?",
    "twist": "",
    "zh": {
      "title": "一個不用帶走的獎勵",
      "scenario": "你們完成任務後，每人可以選一份獎勵：把一件珍惜的物品修好、替一位朋友完成小願望，或得到一整天不用安排的休息。三份價值相同，不能轉賣。",
      "question": "先各自選，再找不同答案的人聊：你選的是現在最需要，還是一直最重視的？",
      "deeperQuestion": "如果一年只能領一次，你會改選嗎？",
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
    "deeperQuestion": "Would your answer differ if one person leaving cost everyone five dollars more versus a hundred?",
    "twist": "",
    "zh": {
      "title": "最省錢的團購",
      "scenario": "團購越多人越便宜，但有人只因怕大家失去折扣而想買，自己其實不需要。",
      "question": "你們會怎樣讓退出不變成欠大家的人情？",
      "deeperQuestion": "如果少一人後每人只多付五元，跟多付一百元，你的答案會不同嗎？",
      "twist": ""
    },
    "id": "ponder-v5-party-097",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Party",
    "title": "A better accident",
    "scenario": "On a trip you find a one-day festival that looks exciting. Staying means missing an exhibition you already paid for; keeping the itinerary means missing the festival. Nobody is waiting for you at either place.",
    "question": "Each group choose, then say whether you care most about money already spent, a rare opportunity, or your original anticipation.",
    "deeperQuestion": "Would it be harder to change plans if a friend had given you the exhibition ticket?",
    "twist": "",
    "zh": {
      "title": "比計劃更好的意外",
      "scenario": "你們旅行中遇到一個只辦今天的小節慶，看起來很吸引。留下會錯過已付費的展覽，繼續原定行程則不會再遇到這個節慶。兩邊都沒有人在等你們。",
      "question": "每組先選，再說你最在意已花的錢、難得的機會，還是原本的期待？",
      "deeperQuestion": "如果展覽門票是朋友送的，你會更難改變行程嗎？",
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
    "deeperQuestion": "If you received a card, would you read it privately or talk with its writer right away?",
    "twist": "",
    "zh": {
      "title": "一份只有本人看見的讚賞",
      "scenario": "你們各寫一張欣賞朋友的卡，只交給本人，不公開讀。有人覺得少了熱鬧，有人因此敢寫得更真。",
      "question": "你會選公開分享還是私人交換？各說一個理由。",
      "deeperQuestion": "如果自己收到卡，你會想留著獨自看，還是當場跟寫卡的人聊一聊？",
      "twist": ""
    },
    "id": "ponder-v5-party-099",
    "level": "deeper",
    "emoji": "🎉",
    "groupSize": "large"
  },
  {
    "category": "Party",
    "title": "A night to repeat in ten years",
    "scenario": "Tonight's gathering can be recreated in ten years, with the same place, food and games, but everyone will have lived different lives. You may leave one question to answer together then.",
    "question": "Each group leave one question. Do you most want to know what has changed or what everyone still treasures?",
    "deeperQuestion": "What small habit could you start now to make meeting again in ten years more likely?",
    "twist": "",
    "zh": {
      "title": "十年後還想再玩的一晚",
      "scenario": "今晚的聚會可以在十年後重辦一次，地點、食物和遊戲都能照舊，但每個人已經過了不同的生活。你們可以留一個問題，到時才一起回答。",
      "question": "各組留下一個問題。你最想知道大家改變了甚麼，還是仍然珍惜甚麼？",
      "deeperQuestion": "從現在開始，你們想養成哪個小習慣，讓十年後真的有機會再聚？",
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
    "title": "A move nobody will hear about",
    "scenario": "You can spend a year in a city you have wanted to try, with similar work and income. Loved ones remain in touch, but nobody will know how special the opportunity is or envy it.",
    "question": "Would you still move? What actually draws you to the city?",
    "deeperQuestion": "If you disliked it after a year, would that year feel wasted or worth trying?",
    "twist": "",
    "zh": {
      "title": "別人都不會知道的搬家",
      "scenario": "你可以搬去一個一直想住的城市一年，工作和收入跟現在差不多。親友仍然聯絡得到你，但不會有人知道這是多麼特別的機會，也沒有人會因此羨慕你。",
      "question": "你還想搬嗎？那個城市真正吸引你的是甚麼？",
      "deeperQuestion": "如果一年後發現不喜歡，你會把這一年看成浪費，還是值得試過？",
      "twist": ""
    },
    "id": "ponder-v5-solo-004",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "A glimpse ten years ahead",
    "scenario": "You may watch ten minutes of an ordinary Tuesday ten years ahead. It reveals your place, company and activity, but not your wealth or title.",
    "question": "Would you choose morning, midday or evening? What would you want to find out?",
    "deeperQuestion": "What ordinary scene would still give you something to look forward to?",
    "twist": "",
    "zh": {
      "title": "看一眼十年後",
      "scenario": "你可以看見十年後一個普通星期二的十分鐘，時間由你選。畫面不會告訴你存款或職位，只會讓你看到當時在哪裡、身邊有誰、正在做甚麼。",
      "question": "你會選早上、中午還是晚上？最想確認甚麼？",
      "deeperQuestion": "怎樣的畫面即使很普通，也會讓你覺得值得期待？",
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
    "deeperQuestion": "Would you pursue the same thing if that person never heard about it?",
    "twist": "",
    "zh": {
      "title": "不再需要證明的事",
      "scenario": "假如曾經看輕你的人，真心承認自己看錯了。你終於被肯定，但明天仍要決定怎樣過。",
      "question": "哪一個目標你仍會繼續，哪一個可能放下？",
      "deeperQuestion": "如果那個人從來不會知道你的近況，你還會追求同一件事嗎？",
      "twist": ""
    },
    "id": "ponder-v5-solo-006",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Almost selected",
    "scenario": "Your work reaches a competition's final round without winning. You may see either detailed feedback or your ranking, not both.",
    "question": "Which would you read, and what would you want it to answer?",
    "deeperQuestion": "If the feedback praised the detail you cared about most but also pointed out several weaknesses, would you want to try again or take a break first?",
    "twist": "",
    "zh": {
      "title": "只差一點的落選",
      "scenario": "你投稿參加比賽，主辦方說作品進了最後一輪，但沒有獲獎。你可以選擇收到詳細評語，或只知道自己排第幾，不能兩樣都看。",
      "question": "你想看哪一份？你希望它替你解答甚麼？",
      "deeperQuestion": "如果評語肯定了你最在意的細節，卻也指出不少不足，你會更想再試一次，還是先休息一陣？",
      "twist": ""
    },
    "id": "ponder-v5-solo-007",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Always the photographer",
    "scenario": "You are good at photography and become the default photographer on trips. You enjoy making pictures but rarely appear simply having fun.",
    "question": "Before the next trip, how would you share the photography so you could put the camera down and enjoy yourself too?",
    "deeperQuestion": "Which would you miss more: better photos or memories of your own participation?",
    "twist": "",
    "zh": {
      "title": "每次都找你拍照",
      "scenario": "你很會拍照，每次朋友出遊都請你掌鏡。你喜歡留下好照片，但整趟看下來，幾乎沒有一張是你自在地玩。",
      "question": "下次出發前，你會怎樣跟朋友分工，讓自己也能放下相機玩一會？",
      "deeperQuestion": "你更捨不得的是少了好照片，還是少了自己在場的回憶？",
      "twist": ""
    },
    "id": "ponder-v5-solo-008",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "How much more research before choosing?",
    "scenario": "Two affordable classes both have good reviews. After a week of comparing, you keep finding the same trade-offs; registration closes tomorrow.",
    "question": "How would you finally choose one?",
    "deeperQuestion": "How certain must you feel to begin, and would you keep checking the alternative afterwards?",
    "twist": "",
    "zh": {
      "title": "還要查多久，才願意選？",
      "scenario": "你要選一門興趣課，兩門都負擔得起，也都有好評。你已比較了一星期，今晚再查仍是同樣的優缺點，報名明天截止。",
      "question": "你會用甚麼方法選定其中一門？",
      "deeperQuestion": "你需要多確定才願意開始？選了之後，會不會繼續查另一門？",
      "twist": ""
    },
    "id": "ponder-v5-solo-009",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "The coat in your basket",
    "scenario": "A coat you like and can afford has sat in your basket for weeks. You would rarely wear it, and often picture other people's reactions.",
    "question": "Would you buy it? What would you most want from the purchase?",
    "deeperQuestion": "Would it still feel worthwhile if nobody noticed it?",
    "twist": "",
    "zh": {
      "title": "那件一直放在購物車的外套",
      "scenario": "一件外套放在你的購物車很久，價格負擔得起，也真的喜歡。只是穿上的場合不多，而且你發現，自己最常想像的是別人看到它的反應。",
      "question": "你會買嗎？你最想從這次購物得到甚麼？",
      "deeperQuestion": "如果所有人都沒注意到，你還會覺得買得值得嗎？",
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
    "question": "Would you try commissions or preserve time to draw only for yourself?",
    "deeperQuestion": "Is enjoyment enough reason to invest time?",
    "twist": "",
    "zh": {
      "title": "一段不必變成成就的興趣",
      "scenario": "你開始喜歡畫畫，朋友說可以賣作品。你一想變現就緊張，卻又怕不把握機會很浪費。",
      "question": "你會試著接單，還是先保留只為自己畫畫的時間？",
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
    "title": "The day you do not feel funny",
    "scenario": "Friends rely on your humour to lift gatherings. Today you only want to eat and listen, and someone asks why you are so quiet.",
    "question": "How would you answer, and how would you want the evening to continue?",
    "deeperQuestion": "When a friend behaves differently, do you feel curious, worried or disappointed?",
    "twist": "",
    "zh": {
      "title": "不想逗大家笑的那天",
      "scenario": "朋友很喜歡你的幽默，每次聚會都等你帶氣氛。今天你心情平淡，只想吃飯聽大家聊天，有人卻說：「你今天怎麼這麼安靜？」",
      "question": "你會怎樣回答？你希望接下來怎樣相處？",
      "deeperQuestion": "朋友沒有熟悉的反應時，你通常會好奇、擔心，還是失望？",
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
    "question": "Without knowing the outcome in advance, would you still blame your past self for choosing badly?",
    "deeperQuestion": "Are you demanding knowledge your past self could not have had?",
    "twist": "",
    "zh": {
      "title": "只有一次的重來",
      "scenario": "你能回到一個過去的決定，但只能帶著當時知道的資訊，不能帶未來答案。你可能仍然作同一選擇。",
      "question": "如果不能預先知道結果，你還會怪當時的自己選錯嗎？",
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
    "question": "If there were no next goal yet, how would you want to spend the coming week?",
    "deeperQuestion": "When you are not busy pursuing a goal, what do you still genuinely enjoy doing?",
    "twist": "",
    "zh": {
      "title": "成功之後的空白",
      "scenario": "你完成一個努力很久的目標，開心幾天後卻很空。下一個目標還沒出現，你有點不知道自己是誰。",
      "question": "如果暫時沒有下一個目標，你想怎樣過接下來的一個星期？",
      "deeperQuestion": "不用為目標忙碌的時候，有甚麼事是你仍然真心喜歡做的？",
      "twist": ""
    },
    "id": "ponder-v5-solo-017",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Less pay, one free afternoon",
    "scenario": "You can work half a day less each week for lower pay. Essentials remain covered, but a favourite monthly outing may have to go.",
    "question": "Would you take the half-day, and how would you use it?",
    "deeperQuestion": "Would it still be worth it if you often spent that time sleeping?",
    "twist": "",
    "zh": {
      "title": "少一份收入，多一個下午",
      "scenario": "公司讓你選擇每週少工作半天，薪水也少一點。減少的收入不影響基本開支，但你可能要放棄每月一次很期待的外出活動。",
      "question": "你會換這半天嗎？如果換了，你想怎樣用？",
      "deeperQuestion": "如果那半天最後常拿來睡覺，你還覺得值得嗎？",
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
    "deeperQuestion": "If they were a little disappointed, would you talk further or give them time?",
    "twist": "",
    "zh": {
      "title": "說不之後的安靜",
      "scenario": "你拒絕一個不想接的請求，對方只回了「好」。你開始反覆想他是不是生氣，想補很多解釋。",
      "question": "你會先做甚麼，避免替對方猜出一整段心情？",
      "deeperQuestion": "如果對方真的有點失望，你會想再談，還是給他一點時間？",
      "twist": ""
    },
    "id": "ponder-v5-solo-019",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "One space in the calendar",
    "scenario": "Only one full Saturday remains free next month. You want to visit a friend, explore a saved place and rest at home, but cannot fit all three.",
    "question": "What gets the day, and what happens to the other two wishes?",
    "deeperQuestion": "Do you prioritise desire or the regret you most want to avoid?",
    "twist": "",
    "zh": {
      "title": "只空出一格的日曆",
      "scenario": "下個月的日曆只剩一個完整星期六。你想探望老朋友，也想去一直收藏的地方，還想留在家休息；三件事都不能塞在同一天。",
      "question": "你會把這一天留給甚麼？另外兩件會怎樣安排？",
      "deeperQuestion": "你通常先照顧最想做的事，還是最怕以後後悔的事？",
      "twist": ""
    },
    "id": "ponder-v5-solo-020",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "A chance to be candid",
    "scenario": "Before leaving a team, you are invited to share honest feedback. There were joys and frustrations; you may discuss them or simply say goodbye.",
    "question": "What would you discuss, and what might you leave unsaid?",
    "deeperQuestion": "Would you want change, understanding or a sense of completion?",
    "twist": "",
    "zh": {
      "title": "得到一次說真話的機會",
      "scenario": "你離開一個合作團隊前，對方邀你說出真正的感受。過程有開心也有委屈，你可以坦白談一次，也可以簡單道別，往後不必再合作。",
      "question": "你會想談哪些事？有甚麼會選擇不再說？",
      "deeperQuestion": "你希望這次談話帶來改變、被理解，還是一個完整的結束？",
      "twist": ""
    },
    "id": "ponder-v5-solo-021",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Use it now or next year?",
    "scenario": "A HK$5,000 bonus could fund a long-wanted event this year or give next year's budget more breathing room. Neither choice causes immediate hardship.",
    "question": "How would you divide the money?",
    "deeperQuestion": "What circumstance would change your initial split?",
    "twist": "",
    "zh": {
      "title": "今天用，還是留給明年？",
      "scenario": "你收到五千元獎金。可以參加今年一個一直想去的活動，也可以存起來，讓明年的生活多一點餘裕。兩種選擇都不會讓你立即陷入困難。",
      "question": "你會怎樣分配這筆錢？",
      "deeperQuestion": "哪一種情況會令你改變原本的分配？",
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
    "question": "Which direction would you try? After three months, what would help you decide whether to continue?",
    "deeperQuestion": "Which decisions could be tested without resolving your whole life?",
    "twist": "",
    "zh": {
      "title": "一個可以退出的計劃",
      "scenario": "你想試新方向，卻總把開始想成一輩子的承諾。假如允許三個月後重新決定，感覺突然不同。",
      "question": "你最想試哪個方向？三個月後，你會根據甚麼決定要不要繼續？",
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
    "title": "The shop you love",
    "scenario": "After a year running a modest but viable shop, your old company offers steadier pay. Returning would leave too little time to run the shop yourself.",
    "question": "What would you find out before choosing the shop or the job?",
    "deeperQuestion": "Would your choice change if nobody saw closing as failure?",
    "twist": "",
    "zh": {
      "title": "那家你很喜歡的店",
      "scenario": "你經營了一年小店，收入不高但仍能維持。原來的公司邀你回去，薪水更穩定；接受後就沒有足夠時間親自顧店。",
      "question": "你會先了解甚麼，再決定留店還是回公司？",
      "deeperQuestion": "如果沒有人把關店看成失敗，你的選擇會不同嗎？",
      "twist": ""
    },
    "id": "ponder-v5-solo-026",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "An offer ten years later",
    "scenario": "A course you once dreamed of finally accepts you. It requires six months away from work, and your interests have broadened since then.",
    "question": "Would you go? What would you now want from those six months?",
    "deeperQuestion": "Would you apply if you discovered the course today without the old regret?",
    "twist": "",
    "zh": {
      "title": "遲了十年的入學信",
      "scenario": "你年輕時很想讀的一個課程，現在終於錄取你。但要暫停工作半年，而你這幾年也找到其他喜歡的事。",
      "question": "你會去嗎？你現在最想從這半年得到甚麼？",
      "deeperQuestion": "如果沒有當年的遺憾，今天第一次看到課程，你還會報名嗎？",
      "twist": ""
    },
    "id": "ponder-v5-solo-027",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "A beginner's turn",
    "scenario": "Two dance classes welcome you: a slow beginners' class or a mixed class where you may learn faster but often fall behind. Both teachers are supportive.",
    "question": "Which would you choose: comfort first or challenge?",
    "deeperQuestion": "What would make you willing to try the other class?",
    "twist": "",
    "zh": {
      "title": "新手也要上場",
      "scenario": "你想學跳舞，有兩班可選：一班全是新手，進度慢；另一班有高手，可能學得快，但會常常跟不上。兩位老師都很願意教。",
      "question": "你會選哪班？你想先得到自在，還是挑戰？",
      "deeperQuestion": "甚麼條件會令你願意試另一班？",
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
    "title": "Half a day without a map app",
    "scenario": "You have half a day alone in a new city. Your map app fails, but a bookshop, river and market are nearby and locals can guide you.",
    "question": "Would you make a rough route or choose as you go?",
    "deeperQuestion": "Would missing the famous sights make the visit feel incomplete?",
    "twist": "",
    "zh": {
      "title": "沒有手機地圖的半天",
      "scenario": "你獨自到一個新城市，有半天自由時間。手機地圖壞了，但附近有書店、河邊和小市場，店員願意幫你指路。",
      "question": "你會先訂大概路線，還是邊走邊選？",
      "deeperQuestion": "沒看見最有名的景點，會不會讓你覺得這趟少了甚麼？",
      "twist": ""
    },
    "id": "ponder-v5-solo-030",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "A six-month invitation",
    "scenario": "A creative programme you love takes two evenings weekly for six months, replacing exercise and friends that cannot easily be rescheduled.",
    "question": "Would you accept? Which cost matters most?",
    "deeperQuestion": "What would you watch during a trial month before continuing?",
    "twist": "",
    "zh": {
      "title": "半年期的邀請",
      "scenario": "你獲邀參加一個很喜歡的創作計劃，每週兩晚，持續半年。那兩晚原本是你運動和見朋友的時間，其他時段很難補回。",
      "question": "你會接受嗎？哪一項代價最影響你的決定？",
      "deeperQuestion": "如果可以先試一個月，你會觀察甚麼來決定是否繼續？",
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
    "question": "Would you begin with messages, occasional meetings or more time apart?",
    "deeperQuestion": "What future actions would affect how close you felt ready to be?",
    "twist": "",
    "zh": {
      "title": "一個不必立即原諒的人",
      "scenario": "有人真誠道歉，你也相信他，但你還不想恢復以前的往來。你擔心這樣顯得不夠大方。",
      "question": "你會先恢復訊息、偶爾見面，還是再等等？",
      "deeperQuestion": "對方接下來做甚麼，會影響你願意靠近多少？",
      "twist": ""
    },
    "id": "ponder-v5-solo-034",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Was this a good week?",
    "scenario": "You finish no major goal this week, but sleep better and meet someone you have missed. Many boxes on your task list remain unchecked.",
    "question": "How would you judge this week, and what should count?",
    "deeperQuestion": "Do your usual measures overlook things that genuinely help you live well?",
    "twist": "",
    "zh": {
      "title": "這星期，算過得好嗎？",
      "scenario": "這星期你沒有完成甚麼大事，卻睡得比較好，也跟一個很久沒見的人吃了飯。翻開待辦清單時，很多格子仍然是空的。",
      "question": "你會怎樣評價這個星期？哪些事應該算進去？",
      "deeperQuestion": "你平常用來衡量生活的標準，有沒有漏掉真正讓你好過的事？",
      "twist": ""
    },
    "id": "ponder-v5-solo-035",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "One photo you can forget",
    "scenario": "A photo recalls a painful time and how you came through it. You can delete it or keep it somewhere less visible.",
    "question": "What would you do, and what role does the photo play for you now?",
    "deeperQuestion": "How does remembering differ from repeatedly returning to a moment?",
    "twist": "",
    "zh": {
      "title": "一張可以忘記的照片",
      "scenario": "你有一張照片，每次看都會想起一段難過的經歷，也記得自己後來怎樣走過。你可以刪掉它，或留在不常打開的相簿。",
      "question": "你會怎樣處理？這張照片對現在的你有甚麼作用？",
      "deeperQuestion": "保留回憶和讓自己一直回到那裡，對你有甚麼差別？",
      "twist": ""
    },
    "id": "ponder-v5-solo-036",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "A smaller home, more room to live",
    "scenario": "A cheaper home offers a good location but less space for belongings and guests. The saving could reduce your workload.",
    "question": "Would you move? What possession or way of living would be hardest to lose?",
    "deeperQuestion": "How much does comfort depend on space, and how much on freedom?",
    "twist": "",
    "zh": {
      "title": "小一點的家，多一點的生活",
      "scenario": "你找到一間租金便宜不少的小屋，交通和安全都合適，但要賣掉部分家具，也不能再招待很多人。省下的錢能讓你少接一些工作。",
      "question": "你會搬嗎？哪件東西或哪種生活，你最捨不得放棄？",
      "deeperQuestion": "住得舒服，對你需要多少空間、多少自由？",
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
    "title": "Let someone else lead",
    "scenario": "You usually plan trips. A friend takes over with a looser but workable itinerary, letting you be a traveller rather than organiser.",
    "question": "Would you hand it over or feel compelled to check everything?",
    "deeperQuestion": "When responsibility is removed, do you feel relief or less involved?",
    "twist": "",
    "zh": {
      "title": "這次換別人帶路",
      "scenario": "朋友出遊一向由你規劃。這次有人願意接手，行程沒有你安排得仔細，但基本住宿和交通都妥當。你終於可以只當旅伴。",
      "question": "你會安心交給他，還是忍不住再檢查一遍？",
      "deeperQuestion": "不需要你負責時，你比較感到輕鬆，還是失去參與感？",
      "twist": ""
    },
    "id": "ponder-v5-solo-039",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "A kindness only you remember",
    "scenario": "You find contact details for someone who once helped you through a hard moment. They may have forgotten or welcome an update.",
    "question": "Would you reach out? What would your first sentence be?",
    "deeperQuestion": "Would you want simply to thank them or reconnect?",
    "twist": "",
    "zh": {
      "title": "只有你記得的小善意",
      "scenario": "多年前有人在你很困難時幫過一次忙。你偶然找到他的聯絡方式，對方可能早已忘記，也可能很高興知道後來的事。",
      "question": "你會聯絡嗎？第一句想說甚麼？",
      "deeperQuestion": "你希望這次聯絡只是道謝，還是也想重新建立關係？",
      "twist": ""
    },
    "id": "ponder-v5-solo-040",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "The last free weekend",
    "scenario": "Before moving far away, one free weekend remains. You could earn extra money or spend it saying goodbye; moving costs are covered.",
    "question": "How would you spend the weekend?",
    "deeperQuestion": "Which goodbye would you not want to postpone?",
    "twist": "",
    "zh": {
      "title": "留下最後一個週末",
      "scenario": "你即將搬到遠方，剩下最後一個空閒週末。可以接一份報酬不錯的工作，也可以跟熟悉的人慢慢道別；搬家費已經足夠。",
      "question": "你會怎樣安排這個週末？",
      "deeperQuestion": "哪一種告別是你不想留到「下次再說」的？",
      "twist": ""
    },
    "id": "ponder-v5-solo-041",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "An invitation unlike you",
    "scenario": "A friend invites you to improv with no expectation of skill. You see yourself as a non-performer but feel curious, and watching is allowed.",
    "question": "Would you watch, try a little or join fully?",
    "deeperQuestion": "How would you distinguish dislike from unfamiliarity?",
    "twist": "",
    "zh": {
      "title": "完全不像你的邀請",
      "scenario": "朋友邀你參加即興劇，說不需要演得好。你一直把自己當成不會表演的人，但有一點好奇；當晚也可以只看不演。",
      "question": "你會選旁觀、試一小段，還是直接參加？",
      "deeperQuestion": "你會怎樣知道自己的拒絕來自不喜歡，而不是不熟悉？",
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
    "question": "If you could finally talk once, what would you most want understood?",
    "deeperQuestion": "If their memory differed from yours, how would you want the conversation to continue?",
    "twist": "",
    "zh": {
      "title": "真正想要的道歉",
      "scenario": "你一直想聽某人道歉，但即使他今天說了，失去的機會也不會回來。你仍需要處理往後的生活。",
      "question": "如果終於能談一次，你最想讓對方理解哪一件事？",
      "deeperQuestion": "如果他記得的版本跟你不同，你會希望怎樣繼續這段對話？",
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
    "deeperQuestion": "What content makes you want to try something straight away, and what only makes you feel you are not good enough?",
    "twist": "",
    "zh": {
      "title": "當好奇心變成比較",
      "scenario": "你本來上網找靈感，半小時後卻只覺得別人都比自己快。資訊沒有幫你行動，反而讓你停住。",
      "question": "你會怎樣改變這次搜尋的範圍或時間？",
      "deeperQuestion": "甚麼內容會讓你看完就想動手試？甚麼內容卻只讓你覺得自己還不夠好？",
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
    "title": "Wanting out before the start",
    "scenario": "You agree to help with a month-long book club, then learn you are expected to lead every session. You like reading but not always leading; your name is announced.",
    "question": "Would you continue, rotate leadership or withdraw? How would you say it?",
    "deeperQuestion": "What responsibility would you accept for not clarifying, and what would you not force?",
    "twist": "",
    "zh": {
      "title": "還沒開始就想退出",
      "scenario": "你答應幫朋友辦一個月的讀書會，後來才知道每週都要帶討論。你不討厭讀書，只是不想每次站在前面；朋友已公布了你的名字。",
      "question": "你會繼續、找人輪流，還是撤回？你會怎樣開口？",
      "deeperQuestion": "你願意為當初沒問清楚承擔哪部分，又不願勉強甚麼？",
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
    "title": "An unexpected ticket",
    "scenario": "A friend offers a ticket for tomorrow to a show you love. You had set aside the evening for organising photos, a task delayed for two months but affecting only you.",
    "question": "Would you take the ticket or keep your own appointment?",
    "deeperQuestion": "What opportunity deserves a changed plan, and how do you distinguish it from distraction?",
    "twist": "",
    "zh": {
      "title": "一張臨時出現的票",
      "scenario": "朋友多了一張明晚的演出票，正是你很想看的。你原本答應自己用那晚整理照片，已經拖了兩個月，但沒有別人在等。",
      "question": "你會去看演出，還是守住原本的安排？",
      "deeperQuestion": "甚麼樣的臨時機會值得打亂計劃？你怎樣分辨機會和分心？",
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
    "question": "Beyond apologising and fixing the mistake, is there anything else that genuinely needs doing? If it is all done, how could you let yourself stop?",
    "deeperQuestion": "Does ending self-blame really mean not caring?",
    "twist": "",
    "zh": {
      "title": "做錯之後的自己",
      "scenario": "你犯了一個可以補救的錯，已道歉和修正，腦裡卻仍不停重播。你像是在用難過證明自己有反省。",
      "question": "除了道歉和修正，還有甚麼真的需要做？如果已經做完，你會怎樣讓自己停下來？",
      "deeperQuestion": "停止責怪自己，是否真的等於不在乎？",
      "twist": ""
    },
    "id": "ponder-v5-solo-049",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "A declined birthday surprise",
    "scenario": "You offer to organise a birthday gathering, but your friend wants the day alone. Nothing is booked and you do not know their reason.",
    "question": "How would you respond, and would you offer another way to celebrate?",
    "deeperQuestion": "When is asking more caring, and when does it become pressure?",
    "twist": "",
    "zh": {
      "title": "被拒絕的生日驚喜",
      "scenario": "你想替朋友辦生日聚會，他卻說今年想自己過。你有點失落，但還沒訂任何東西，也不知道他為甚麼想獨處。",
      "question": "你會怎樣回應？還會提出其他慶祝方式嗎？",
      "deeperQuestion": "甚麼情況下繼續問是關心，甚麼情況下會變成壓力？",
      "twist": ""
    },
    "id": "ponder-v5-solo-050",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "A small change since last year",
    "scenario": "An old diary reminds you of something once frightening that now feels manageable. The change was gradual rather than dramatic.",
    "question": "What small thing comes to mind that you could not face last year but can do now? How did it gradually become easier?",
    "deeperQuestion": "How would you acknowledge the same change in a friend?",
    "twist": "",
    "zh": {
      "title": "去年不會做的一件小事",
      "scenario": "你偶然翻到去年日記，發現一件當時很怕的事，現在已能平常面對。沒有大突破，只是你今天的反應跟以前不同了。",
      "question": "想起一件去年不敢、現在卻能做到的小事，你最先想到甚麼？它是怎樣慢慢變容易的？",
      "deeperQuestion": "如果朋友有同樣的改變，你會怎樣替他記住這一步？",
      "twist": ""
    },
    "id": "ponder-v5-solo-051",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "An overstated introduction",
    "scenario": "A referral for a job you want overstates your experience. You believe you could learn, but the introduction has not been sent.",
    "question": "How would you revise or respond to the introduction?",
    "deeperQuestion": "What presentation feels fair, and where would it stop feeling like you?",
    "twist": "",
    "zh": {
      "title": "一封有點誇大的介紹",
      "scenario": "有人願意推薦你做一份很想要的工作，卻把你的經驗寫得比實際多。你相信自己學得會，但對方還未把介紹寄出。",
      "question": "你會怎樣修改或回應這份介紹？",
      "deeperQuestion": "你可以接受怎樣的包裝，哪一句開始讓你覺得不像自己？",
      "twist": ""
    },
    "id": "ponder-v5-solo-052",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Waiting for a reply",
    "scenario": "You submit an application prepared with care. Results arrive next week, yet you keep checking your inbox today.",
    "question": "How would you spend tonight without keeping watch for the reply?",
    "deeperQuestion": "Would checking less feel relieving, or like you had neglected something?",
    "twist": "",
    "zh": {
      "title": "等一個還沒來的回覆",
      "scenario": "你交出一份很用心準備的申請，對方說下星期才有結果。你知道今天不會收到答案，卻每隔一會就忍不住打開信箱。",
      "question": "你會怎樣安排今晚，讓自己不用一直守著那個回覆？",
      "deeperQuestion": "不再一直查看時，你會比較輕鬆，還是覺得自己好像少做了甚麼？",
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
    "deeperQuestion": "How do those small pleasures differ from reaching a major goal?",
    "twist": "",
    "zh": {
      "title": "一份普通的幸福",
      "scenario": "你發現最開心的時刻常是吃早餐、散步和跟人亂聊，跟一直追求的大成就沒有直接關係。",
      "question": "你會怎樣讓這些時刻更常發生？",
      "deeperQuestion": "那些小快樂，跟完成大目標帶來的快樂有甚麼不同？",
      "twist": ""
    },
    "id": "ponder-v5-solo-054",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Knowing what you do not want",
    "scenario": "You cannot name an ideal job yet, but know you want fewer nights and weekends with family. A friend asks for your bigger direction.",
    "question": "Are those conditions enough to begin looking? What else do you need?",
    "deeperQuestion": "Do you begin with what to approach or what to leave?",
    "twist": "",
    "zh": {
      "title": "只知道不想要甚麼",
      "scenario": "你在找新工作，還說不出理想職位，但已知道不想再長期輪夜班，也想保留週末見家人。朋友問你有沒有更大的方向。",
      "question": "這兩個條件夠不夠幫你開始找？你還需要知道甚麼？",
      "deeperQuestion": "你通常先想要靠近甚麼，還是先弄清楚想離開甚麼？",
      "twist": ""
    },
    "id": "ponder-v5-solo-055",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "A conversation in your head",
    "scenario": "You prefer a lower-paid job's work. Before telling family, you rehearse defending the move until doubt grows.",
    "question": "Before rehearsing reactions, which two conditions matter most to you?",
    "deeperQuestion": "What new information from family would genuinely merit reconsideration?",
    "twist": "",
    "zh": {
      "title": "還沒發生的對話",
      "scenario": "你想選一份收入少一點、內容卻更喜歡的工作。還沒跟家人說，你已在腦裡回答了十次「為甚麼要換」，甚至開始動搖。",
      "question": "如果先不演練別人的反應，你自己最在意哪兩個條件？",
      "deeperQuestion": "家人提出甚麼新資訊，才真的值得你重新考慮？",
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
    "deeperQuestion": "How quickly do you expect loved ones to reply, and does that standard suit you too?",
    "twist": "",
    "zh": {
      "title": "一個可以不回覆的晚上",
      "scenario": "你想關掉訊息休息一晚，沒有緊急工作，卻擔心別人找不到你會失望。你已很久沒有完整離線。",
      "question": "你會怎樣安排一次讓自己放心的離線？",
      "deeperQuestion": "你希望親近的人多久回覆一次？這個標準也適合你自己嗎？",
      "twist": ""
    },
    "id": "ponder-v5-solo-057",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "A letter from someone who knows you",
    "scenario": "A friend writes about the caution you wish you had less of, naming times it helped others notice something important.",
    "question": "What part of that trait would you keep or adjust?",
    "deeperQuestion": "When does the same trait help, and when does it tire you?",
    "twist": "",
    "zh": {
      "title": "收到一封很了解你的信",
      "scenario": "一位朋友寫信給你，提到你一直想改掉的謹慎。他說有幾次正因為你多問一句，大家才沒有忽略重要的事。",
      "question": "你會想保留這個特質的哪部分，調整哪部分？",
      "deeperQuestion": "同一個特質在甚麼情況下是幫助，又在甚麼情況下讓你累？",
      "twist": ""
    },
    "id": "ponder-v5-solo-058",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Keeping a promise to yourself too",
    "scenario": "Promises to others hold firm while promises to yourself repeatedly disappear.",
    "question": "Which small promise to yourself would you most like to keep first? How could you make time for it next week?",
    "deeperQuestion": "Why are your own expectations easier to cancel?",
    "twist": "",
    "zh": {
      "title": "也守住答應自己的事",
      "scenario": "你很重視答應別人的事，答應自己休息或學習卻常被擠走。自己的承諾總排在最後。",
      "question": "你最想先守住哪個答應自己的小約定？下星期可以怎樣安排？",
      "deeperQuestion": "為甚麼自己的期待比較容易被取消？",
      "twist": ""
    },
    "id": "ponder-v5-solo-059",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Can you leave something you like?",
    "scenario": "You still like a choir after three years but want weekends for a new interest. Nothing has gone wrong.",
    "question": "Would you leave, pause or try to keep both?",
    "deeperQuestion": "How would you say goodbye so affection is not replaced by guilt?",
    "twist": "",
    "zh": {
      "title": "喜歡，也可以告別嗎？",
      "scenario": "你參加一個合唱團三年，仍喜歡大家，但很想把週末留給另一個新興趣。團裡沒有發生壞事，也沒有人逼你走。",
      "question": "你會退出、請假一段時間，還是保留兩邊？",
      "deeperQuestion": "如果離開，你想怎樣道別，才不會讓喜歡過的事只剩下內疚？",
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
    "deeperQuestion": "When you hear that something is urgent, do you first consider how urgent it really is, or worry about being blamed if you say no?",
    "twist": "",
    "zh": {
      "title": "別人的急不一定是你的急",
      "scenario": "對方說事情很急，希望你今晚完成，但你發現期限只是他自己臨時訂的。你本來有重要安排。",
      "question": "你會怎樣確認需要，再提出自己能做到的時間？",
      "deeperQuestion": "聽到「很急」時，你通常先想事情真的有多急，還是先擔心拒絕後會被責怪？",
      "twist": ""
    },
    "id": "ponder-v5-solo-061",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Not everything needs top marks",
    "scenario": "Tonight includes work, dinner and exercise. There is not time for your highest standard in all three, though clear work, a simple meal and a shorter workout would be acceptable.",
    "question": "Which would you simplify most easily, and where is lowering the standard hardest?",
    "deeperQuestion": "Does that standard protect something important, or your image of who you are?",
    "twist": "",
    "zh": {
      "title": "今晚，不用每件都拿滿分",
      "scenario": "今晚你要交一份工作、準備晚餐，也想做平常的運動。時間不夠三件都照最高標準完成，但工作只要資料清楚、晚餐簡單一點、運動短一點，也都可以。",
      "question": "你最願意在哪件事上簡化？哪件最難放鬆標準？",
      "deeperQuestion": "你守住那個標準，是因為真的重要，還是怕做少一點就不像自己？",
      "twist": ""
    },
    "id": "ponder-v5-solo-062",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "The night after a reunion",
    "scenario": "At a reunion, others discuss homes, promotions and weddings. Your news about learning a dish suddenly feels small afterwards.",
    "question": "Would you still mention the dish if describing your month again? Why?",
    "deeperQuestion": "What kind of listener makes ordinary life easier to share?",
    "twist": "",
    "zh": {
      "title": "聚會後的那一晚",
      "scenario": "同學聚會上，大家聊買房、升職和婚禮，你分享的是最近學會煮一道菜。本來很開心的小事，回家後突然覺得不夠精彩。",
      "question": "如果重新介紹這個月，你還會講那道菜嗎？為甚麼？",
      "deeperQuestion": "哪一種聽眾會讓你比較自在地分享普通日子？",
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
    "deeperQuestion": "If you chose differently, how would you explain that you had still taken their warnings seriously?",
    "twist": "",
    "zh": {
      "title": "不想繼承的恐懼",
      "scenario": "你發現自己對金錢或失敗的擔心，很像家人常說的話。他們的經驗有道理，但你的處境已不同。",
      "question": "哪些提醒仍有用，哪些需要重新驗證？",
      "deeperQuestion": "如果你作了不同的選擇，你會怎樣向家人說明自己有認真考慮過他們的提醒？",
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
    "question": "Would you explain once more or stop for now? What more important thing would you want to spend your time on next?",
    "deeperQuestion": "Even if they did not understand, what would help you trust that the decision suited you?",
    "twist": "",
    "zh": {
      "title": "被誤會也能站穩",
      "scenario": "你作了一個對自己重要的決定，有人誤會你的動機。解釋過一次後，他仍不相信。",
      "question": "你會再解釋一次，還是先停下來？接下來想把時間花在哪件更重要的事上？",
      "deeperQuestion": "即使對方不理解，有哪些事仍會讓你相信這個決定適合自己？",
      "twist": ""
    },
    "id": "ponder-v5-solo-065",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "A year of more than achievements",
    "scenario": "Create a five-moment timeline of the year, including achievements, difficulties, changed decisions or help received.",
    "question": "Which five moments would you keep?",
    "deeperQuestion": "Which moment looked mistaken then but means something different now?",
    "twist": "",
    "zh": {
      "title": "不只記成就的年表",
      "scenario": "你要替這一年畫一張年表，可以放進做成的事，也可以放進撐過的難關、改過的決定和得到的幫助。只能挑五個時刻。",
      "question": "哪五個時刻最值得留下？",
      "deeperQuestion": "其中有哪一刻當時像走錯路，現在看卻有不同意思？",
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
    "title": "Sharing your favourite recipe",
    "scenario": "Your popular recipe could become a paid class. A community centre asks to share it free with older residents.",
    "question": "How would you respond? What would you keep and what would you share?",
    "deeperQuestion": "How would you value sharing that brings joy but no income?",
    "twist": "",
    "zh": {
      "title": "分享你的拿手食譜",
      "scenario": "你研究出一道很受歡迎的食譜，正考慮開小班教人。社區中心想把它免費提供給長者，你可以答應、保留部分細節，或婉拒。",
      "question": "你會怎樣回應？你想保留和分享的各是甚麼？",
      "deeperQuestion": "如果免費分享帶來很多快樂，卻沒有收入，你會怎樣衡量它？",
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
    "deeperQuestion": "Would thoughts that remain after rest deserve different attention from those arising in exhaustion?",
    "twist": "",
    "zh": {
      "title": "疲倦裡的真心話",
      "scenario": "很累的時候，你想放棄一切；休息後卻又願意繼續。你不確定哪個才是真正的自己。",
      "question": "你會怎樣先照顧狀態，再作重要決定？",
      "deeperQuestion": "休息後還在的念頭，會比累的時候冒出的念頭更值得跟進嗎？",
      "twist": ""
    },
    "id": "ponder-v5-solo-069",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "An invitation with no favour attached",
    "scenario": "A friend invites you to dinner. You offer practical help, but they say they simply want to see you.",
    "question": "Would you bring something or simply go?",
    "deeperQuestion": "What makes you feel a friend enjoys your company itself?",
    "twist": "",
    "zh": {
      "title": "朋友約你，沒有別的事",
      "scenario": "朋友約你吃飯，你問要不要順便幫他看文件。他說：「沒有事要你幫，就是想見你。」你高興，也有一點不習慣空手赴約。",
      "question": "你會帶點甚麼去，還是就這樣赴約？",
      "deeperQuestion": "朋友做甚麼，最能讓你感覺他喜歡的是跟你相處？",
      "twist": ""
    },
    "id": "ponder-v5-solo-070",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "What the original list missed",
    "scenario": "You did not complete planned driving lessons or travel, but helped family move and formed important friendships that were never on the list.",
    "question": "How would you rewrite the year's list to include them?",
    "deeperQuestion": "Would you make next year's plans firmer or leave more room?",
    "twist": "",
    "zh": {
      "title": "年初沒有寫下的事",
      "scenario": "年底看回清單，你沒有完成學車和旅行，卻陪家人搬了家，也認識幾位重要的新朋友。那些事年初都不在計劃裡。",
      "question": "如果重新寫今年的清單，你會怎樣記錄這些事？",
      "deeperQuestion": "明年的計劃，你想訂得更清楚，還是留更多空間？",
      "twist": ""
    },
    "id": "ponder-v5-solo-071",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Was it really no trouble?",
    "scenario": "You spend a weekend helping a friend organise documents, then call it no trouble. Days later they ask for another batch, assuming it is quick.",
    "question": "How would you explain the real time involved this time?",
    "deeperQuestion": "When thanked, do you acknowledge the effort or minimise it? Why?",
    "twist": "",
    "zh": {
      "title": "真的只是順手嗎？",
      "scenario": "你花了一個週末幫朋友整理資料。對方謝謝你時，你習慣說「小事，順手而已」。幾天後，他又找你做一份，說應該很快就好。",
      "question": "這次你會怎樣回覆，讓對方知道實際要花多少時間？",
      "deeperQuestion": "被人感謝時，你通常會說出自己的付出，還是先說「沒甚麼」？為甚麼？",
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
    "title": "Success as you described it five years ago",
    "scenario": "Half your old definition of success still matters; half sounds borrowed.",
    "question": "Which sentence would you remove and which add?",
    "deeperQuestion": "What would the new definition change next week?",
    "twist": "",
    "zh": {
      "title": "五年前寫下的成功",
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
    "title": "Taking your own day off",
    "scenario": "You have leave and can hand over work. Your reason for a day off is simply staying home, not travel or an appointment.",
    "question": "Would you take the day, and how would you spend it?",
    "deeperQuestion": "Would you comfortably tell colleagues you are simply resting?",
    "twist": "",
    "zh": {
      "title": "一張給自己的請假單",
      "scenario": "你已存下足夠假期，工作也能交接。請假表問原因，你想寫的只是「在家待一天」，不是旅行，也沒有重要事情。",
      "question": "你會請這天假嗎？你想怎樣過？",
      "deeperQuestion": "如果同事問你去哪裡，你會自在地說自己只是休息嗎？",
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
    "question": "Which part of their approach would you borrow, and which part would you adapt to your own circumstances?",
    "deeperQuestion": "What distinguishes learning from copying?",
    "twist": "",
    "zh": {
      "title": "從別人的故事退後一步",
      "scenario": "你聽了別人的成功方法，很想完全照做。細看才發現，他的資源、責任和承受力跟你不同。",
      "question": "你會借用他方法裡的哪一部分？又有哪一部分需要按自己的情況調整？",
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
    "question": "If you asked once more, what would you most want to know? What kind of answer would actually help?",
    "deeperQuestion": "If no answer came, what small step could help you stop organising your life around the question?",
    "twist": "",
    "zh": {
      "title": "一個不再追究的答案",
      "scenario": "一段關係結束很久，你仍想知道對方當時真正怎樣想。再問一次可能有答案，也可能重新打開傷口。",
      "question": "如果再問一次，你最想知道甚麼？聽到怎樣的回答，你才會覺得真的有幫助？",
      "deeperQuestion": "如果一直沒有答案，你想從哪件小事開始，讓生活不再繞著這個問題轉？",
      "twist": ""
    },
    "id": "ponder-v5-solo-077",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Three free years or flexibility?",
    "scenario": "One pleasant home is free for three years, with some rent due if you leave early. Another costs money but offers short renewals.",
    "question": "Which would you choose, and what must you know first?",
    "deeperQuestion": "What cost would you accept to preserve the option to change your mind?",
    "twist": "",
    "zh": {
      "title": "免費住三年，還是可以隨時走？",
      "scenario": "你可以免費住在一個不錯的地方三年，但中途搬走就要付回部分租金。另一個住處要自己付錢，卻可以短期續租。",
      "question": "你會選哪個？你最需要確定的條件是甚麼？",
      "deeperQuestion": "你願意花多少代價，替未來的自己保留改變主意的空間？",
      "twist": ""
    },
    "id": "ponder-v5-solo-078",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "A contest you once could win",
    "scenario": "Returning to a sport, you have less stamina and practice time. A coach invites you to a friendly match without expectations.",
    "question": "Would you join, and what goal would you set?",
    "deeperQuestion": "How much does enjoyment depend on still feeling good at it?",
    "twist": "",
    "zh": {
      "title": "十年前會贏的比賽",
      "scenario": "你重回以前擅長的運動，現在體力和練習時間都少了。教練邀你參加友誼賽，也說只是一起玩，不用跟以前比較。",
      "question": "你會參加嗎？你會替這次比賽訂甚麼目標？",
      "deeperQuestion": "享受一件事，對你需要有多少「我仍然做得好」的感覺？",
      "twist": ""
    },
    "id": "ponder-v5-solo-079",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "A lively street or a quiet room?",
    "scenario": "Two homes cost about the same. One has food and friends nearby but noise; the quieter, larger one adds forty minutes to visits.",
    "question": "Which would you choose, and which inconvenience is easier to accept?",
    "deeperQuestion": "Would a tiring or lonely season change your answer?",
    "twist": "",
    "zh": {
      "title": "方便的街區，安靜的房間",
      "scenario": "兩個住處價格差不多。一個樓下就有食店和朋友，晚上比較吵；另一個安靜寬敞，見朋友卻要多坐四十分鐘車。",
      "question": "你會選哪個？哪一種不方便比較能接受？",
      "deeperQuestion": "如果你正處於很累或很孤單的一段日子，答案會改變嗎？",
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
    "question": "If a friend asked why you enjoy it, which interesting part would you show them?",
    "deeperQuestion": "Which pleasures make you feel most defensive?",
    "twist": "",
    "zh": {
      "title": "不為合理而喜歡",
      "scenario": "你喜歡一件別人覺得幼稚的事，沒有傷害誰，也負擔得起。每次被問，你卻急著找實用理由。",
      "question": "如果朋友好奇你為甚麼喜歡，你會介紹哪個最有趣的部分？",
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
    "deeperQuestion": "Which details would you share publicly, and which keep for yourself or trusted people?",
    "twist": "",
    "zh": {
      "title": "還沒準備好的分享",
      "scenario": "你有一段重要經歷，知道分享可能幫到別人，但自己還沒整理好。有人鼓勵你勇敢說出來。",
      "question": "你會怎樣決定分享的時間、對象和範圍？",
      "deeperQuestion": "哪些細節你願意公開，哪些想只留給自己或熟悉的人？",
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
    "deeperQuestion": "When a quicker method has saved you time before, have you usually rested or filled it with more tasks?",
    "twist": "",
    "zh": {
      "title": "一件值得保留的麻煩",
      "scenario": "某個習慣很花時間，例如煮飯、寫信或慢慢走路，但它讓你覺得生活有自己的節奏。更快的方法一直存在。",
      "question": "你想保留哪一種不方便，為甚麼？",
      "deeperQuestion": "你以前用更快的方法省下時間後，通常會休息，還是又安排更多事情？",
      "twist": ""
    },
    "id": "ponder-v5-solo-083",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Make the first invitation",
    "scenario": "You connect with someone new but cannot tell whether the warmth was politeness. You know an exhibition they might enjoy.",
    "question": "How would you invite them in a way that leaves both people comfortable?",
    "deeperQuestion": "If they are busy without suggesting another date, would you try once more or wait?",
    "twist": "",
    "zh": {
      "title": "先約一次看看",
      "scenario": "你跟一位新認識的人聊得很投契，想再見面，但不確定對方是否只當普通客套。你有一個他可能喜歡的展覽可以提議。",
      "question": "你會怎樣發出邀請，讓兩人都容易回答？",
      "deeperQuestion": "如果他說沒空卻沒提別的日期，你會再約一次，還是先等等？",
      "twist": ""
    },
    "id": "ponder-v5-solo-084",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "More savings or less worry?",
    "scenario": "You reach your savings target, then raise it mentally after hearing a friend's figure, though your expenses are unchanged.",
    "question": "Would you change the target, and which personal needs would you review first?",
    "deeperQuestion": "What change would actually increase your sense of security?",
    "twist": "",
    "zh": {
      "title": "多存一點，還是少擔心一點？",
      "scenario": "你已存到自己原本訂下的目標，卻在朋友提到他的數字後，突然想把目標再加高。你的實際開支並沒有改變。",
      "question": "你會重新訂目標嗎？你會先考慮哪些自己的需要？",
      "deeperQuestion": "對你來說，哪一種改變才真的會增加安全感？",
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
    "deeperQuestion": "Which care you imagined for them would also suit you now?",
    "twist": "",
    "zh": {
      "title": "照顧一個不完美的自己",
      "scenario": "如果你要照顧一個跟自己一模一樣的人，他同樣拖延、害怕，也同樣努力。你不能改造他，只能陪他過一週。",
      "question": "你會先減少哪一種壓力，增加哪一種支持？",
      "deeperQuestion": "你為他想到的照顧裡，有哪一件也適合現在的你？",
      "twist": ""
    },
    "id": "ponder-v5-solo-086",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "The trip waiting for free time",
    "scenario": "A long-wanted trip keeps waiting for less work. You could go for three days now or wait for two full weeks.",
    "question": "Would you take a short trip now or wait for the full version?",
    "deeperQuestion": "Would a small taste satisfy you or make you want the ideal version more?",
    "twist": "",
    "zh": {
      "title": "一直等到有空的旅行",
      "scenario": "你一直想去某個地方，每年都說等工作沒那麼忙。現在可以先去三天，也可以繼續等一個完整的兩星期。",
      "question": "你會先去一小趟，還是等想像中的完整版本？",
      "deeperQuestion": "對你來說，先嘗一點會更滿足，還是更想等到最好？",
      "twist": ""
    },
    "id": "ponder-v5-solo-087",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Keep the message of praise?",
    "scenario": "Clearing your inbox, you find sincere praise from work you no longer do, and remember its warmth.",
    "question": "Would you keep it, save a sentence or delete it after reading?",
    "deeperQuestion": "Would you keep the achievement or the feeling of being seen?",
    "twist": "",
    "zh": {
      "title": "要不要留下那封稱讚？",
      "scenario": "整理信箱時，你找到一封以前收到的真心稱讚。你早已不做那份工作，卻記得當時讀到它很開心。",
      "question": "你會留下、抄下一句，還是讀完就刪？",
      "deeperQuestion": "你想保留的是那次成績，還是有人認真看見你的感覺？",
      "twist": ""
    },
    "id": "ponder-v5-solo-088",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "One donation, two causes you care about",
    "scenario": "You have one donation budget. One transparent project helps many strangers; another is smaller but tied to your family's experience.",
    "question": "How would you choose or divide the money?",
    "deeperQuestion": "When deciding how to donate, what matters most to you: the results, the number of people helped or your own experience?",
    "twist": "",
    "zh": {
      "title": "一筆捐款，兩個想幫的計劃",
      "scenario": "你今年只預留一筆捐款。一個計劃能幫很多陌生人，另一個規模很小，卻跟你或家人的經歷有關。兩邊的用途都交代清楚。",
      "question": "你會怎樣選，或怎樣分配？",
      "deeperQuestion": "決定怎樣捐時，實際成效、需要幫忙的人數和自己的經歷，哪一項最影響你？",
      "twist": ""
    },
    "id": "ponder-v5-solo-089",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "A favourite place changes",
    "scenario": "A local shop may become a convenient chain, losing its familiar owner. You could support efforts to keep it, with uncertain results.",
    "question": "Would you take part, and what would you want preserved?",
    "deeperQuestion": "How do you weigh convenience against familiarity?",
    "twist": "",
    "zh": {
      "title": "喜歡的地方變得不一樣",
      "scenario": "你喜歡的社區小店要改成連鎖店，會更方便，也會少了熟悉的老闆。你可以支持保留舊店的活動，但不確定能改變多少。",
      "question": "你會參與嗎？你最想保留這個地方的甚麼？",
      "deeperQuestion": "當一個地方變好用卻變陌生，你會怎樣衡量得失？",
      "twist": ""
    },
    "id": "ponder-v5-solo-090",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "An exhibition for eight",
    "scenario": "Eight people visit an exhibition you worked hard on. One spends half an hour explaining how a piece moved them.",
    "question": "Would it feel worthwhile? Which result matters most?",
    "deeperQuestion": "Would you do it again if only eight people came next time?",
    "twist": "",
    "zh": {
      "title": "只有八個人來的展覽",
      "scenario": "你準備了很久的小展覽，最後只有八位觀眾。其中一人跟你聊了半小時，說一件作品讓他想起重要的人。",
      "question": "你會覺得這次值得嗎？你最在意哪個結果？",
      "deeperQuestion": "如果下次仍只有八個人，你還想再辦嗎？",
      "twist": ""
    },
    "id": "ponder-v5-solo-091",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Reading the diary two days later",
    "scenario": "Exhausted, you write that nothing is going well. Two days later, rested, the same circumstances feel less absolute.",
    "question": "What would you add without dismissing that night's exhaustion?",
    "deeperQuestion": "What would you check about your state before the next major decision?",
    "twist": "",
    "zh": {
      "title": "兩天後再讀的日記",
      "scenario": "你在很累的晚上寫下「最近甚麼都做不好」。兩天後睡飽再讀，事情沒變，這句話卻不再完全像你的想法。",
      "question": "你會替那一頁補上甚麼，而不否定當晚真的很累？",
      "deeperQuestion": "下次作重要決定前，你想先確認自己處於怎樣的狀態？",
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
    "title": "A job that fills every gap",
    "scenario": "A short job pays enough for something you want, but takes every free evening for a month.",
    "question": "Would you accept? What pay or condition could change your answer?",
    "deeperQuestion": "Do you notice money earned or time lost more readily?",
    "twist": "",
    "zh": {
      "title": "一份會填滿空檔的工作",
      "scenario": "有人邀你接一份短期工作，報酬剛好夠買一件很想要的東西。但接下後，一個月裡所有空閒晚上都要用來做它。",
      "question": "你會接嗎？怎樣的報酬或條件會改變你的答案？",
      "deeperQuestion": "你通常比較容易看見賺到的錢，還是失去的時間？",
      "twist": ""
    },
    "id": "ponder-v5-solo-094",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Something you once ruled out",
    "scenario": "You once ruled out small-town life but enjoy a visit there. Friends remember your old certainty.",
    "question": "Would you explore further or treat it as holiday novelty?",
    "deeperQuestion": "What experience would make you revise a long-held answer?",
    "twist": "",
    "zh": {
      "title": "以前說過永遠不要",
      "scenario": "你以前常說不會住小鎮，最近去朋友家住幾天，卻喜歡那裡的生活。朋友笑說還記得你當年的保證。",
      "question": "你會繼續探索，還是覺得只是旅行的新鮮感？",
      "deeperQuestion": "你需要怎樣的體驗，才願意更新一個說了很久的答案？",
      "twist": ""
    },
    "id": "ponder-v5-solo-095",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Find the owner or leave it at the desk?",
    "scenario": "You find a handwritten notebook with contact details. The desk can take it, or you can contact the owner and perhaps wait half an hour.",
    "question": "What would you do, and which details matter?",
    "deeperQuestion": "Does the extra effort you hope for from others guide your own help?",
    "twist": "",
    "zh": {
      "title": "找回失主，還是交給櫃台？",
      "scenario": "你在車站撿到一本寫滿字的筆記本，裡面有聯絡方法。交給服務台就能繼續行程，自己聯絡則可能要多等半小時。",
      "question": "你會怎樣處理？哪些細節會影響你的選擇？",
      "deeperQuestion": "你希望別人替你多走的一步，是否也會成為你幫人的標準？",
      "twist": ""
    },
    "id": "ponder-v5-solo-096",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Three compliments and one criticism",
    "scenario": "A piece of work receives three specific compliments and one criticism from attentive readers. The criticism stays most vivid.",
    "question": "How would you decide which feedback should shape revisions?",
    "deeperQuestion": "Does discomfort make you value feedback more or want to avoid it?",
    "twist": "",
    "zh": {
      "title": "三句稱讚，一句批評",
      "scenario": "你完成一份作品，收到三個具體的稱讚和一個負面評語。四個人都認真看過，你卻一直只想著那句批評。",
      "question": "你會怎樣決定哪些意見值得用來修改？",
      "deeperQuestion": "意見讓你不舒服，會令你更重視它，還是更想避開？",
      "twist": ""
    },
    "id": "ponder-v5-solo-097",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Asking before it is tidy",
    "scenario": "You are stuck on a plan and a friend offers to listen. You cannot yet explain exactly where you are stuck.",
    "question": "How would you begin? Would you want listening or questions first?",
    "deeperQuestion": "What response would make you comfortable talking while you gradually worked out the problem?",
    "twist": "",
    "zh": {
      "title": "還沒整理好的求助",
      "scenario": "你卡在一份計劃，朋友願意聽你說。你想先把問題整理清楚，卻連自己不懂哪裡都說不明白。",
      "question": "你會怎樣開始這段求助？你希望他先聽，還是一起問問題？",
      "deeperQuestion": "對方怎樣回應，會讓你放心一邊說、一邊慢慢理清問題？",
      "twist": ""
    },
    "id": "ponder-v5-solo-098",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "Everyone is excited for you",
    "scenario": "A promotion excites everyone around you, but shifts you from hands-on work you enjoy to management, with only a modest raise.",
    "question": "Would you accept? Whom would you talk to, and about what?",
    "deeperQuestion": "Would declining be harder to explain to yourself or others?",
    "twist": "",
    "zh": {
      "title": "大家都替你開心",
      "scenario": "你收到一個升職機會，身邊的人都替你開心。但新工作主要是管理，你最喜歡的卻是親手做事，薪水增加也沒有想像中多。",
      "question": "你會接受嗎？你最想先跟誰談甚麼？",
      "deeperQuestion": "如果最後拒絕，你最難向自己還是向別人交代？",
      "twist": ""
    },
    "id": "ponder-v5-solo-099",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "category": "Solo",
    "title": "What would next month's you thank you for?",
    "scenario": "Imagine next month's self thanking you for one small action today that made life slightly easier.",
    "question": "What would you hope it was, and what step could happen today?",
    "deeperQuestion": "Why is that step worth taking even unseen?",
    "twist": "",
    "zh": {
      "title": "下個月的你會謝謝甚麼？",
      "scenario": "想像下個月的你寄來一句謝謝，感謝今天一個很小但真實的行動。它不必改變人生，只需要讓生活好過一點。",
      "question": "你希望那件事是甚麼，今天能做哪一步？",
      "deeperQuestion": "這一步為甚麼值得做，即使沒有人看見？",
      "twist": ""
    },
    "id": "ponder-v5-solo-100",
    "level": "deeper",
    "emoji": "🌿"
  },
  {
    "id": "ponder-crush-001",
    "category": "Crush",
    "emoji": "♡",
    "title": "The town that appears tonight",
    "scenario": "You board the wrong night train and reach a town open only tonight. The train home leaves in two hours. Outside are a lively lantern festival and a quiet path to the sea.",
    "question": "Would you head to the festival or take the path to the sea? What would you most look forward to doing together?",
    "twist": "",
    "deeperQuestion": "On the way home, what small thing would you want to keep as a souvenir?",
    "zh": {
      "title": "只在今晚出現的小鎮",
      "scenario": "你們誤上一班夜車，來到一座只在今晚開放的小鎮。回程車兩小時後出發；車站外，一邊是熱鬧的燈會，另一邊有條通往海邊的安靜小路。",
      "question": "你想先去燈會湊熱鬧，還是沿著小路去看海？最期待跟對方一起做甚麼？",
      "twist": "",
      "deeperQuestion": "回程時只能帶走一樣小東西，你會想留下甚麼作紀念？"
    }
  },
  {
    "id": "ponder-crush-002",
    "category": "Crush",
    "emoji": "♡",
    "title": "Tomorrow's breakfast café",
    "scenario": "At this café, your breakfast shapes tomorrow. A familiar order brings a quiet, predictable day; the chef's special brings something unexpected. You can each choose your own.",
    "question": "Which would you order? What would you hope the unexpected thing might be?",
    "twist": "",
    "deeperQuestion": "If something fun happened to them tomorrow and they invited you along, would you change your plans?",
    "zh": {
      "title": "明天的早餐店",
      "scenario": "有一家早餐店，吃甚麼會決定你明天怎樣過。選熟悉的早餐，就會過平穩的一天；選店主特製，明天就會遇上一件意想不到的事。你們可以各自選一份。",
      "question": "你會點哪份？你想像中，那件意料之外的事最好是甚麼？",
      "twist": "",
      "deeperQuestion": "如果對方明天遇到一件有趣的事，邀你臨時加入，你會改變原本的安排嗎？"
    }
  },
  {
    "id": "ponder-crush-003",
    "category": "Crush",
    "emoji": "♡",
    "title": "The market that takes stars",
    "scenario": "A night market gives you ten stars each. Stalls sell a memorable dinner, a new skill, or help the next time you are in trouble. You may also save stars for another visit.",
    "question": "Which stall's price would you ask first? Would you spend all ten stars tonight?",
    "twist": "",
    "deeperQuestion": "If they were two stars short of something they loved, would you give, lend, or keep browsing together?",
    "zh": {
      "title": "只收星星的市集",
      "scenario": "夜市入口送你們每人十顆星星。攤位賣的不是物件，而是一次難忘的晚餐、一項新技能，或下次遇到麻煩時的一次幫忙；星星也可以留到下次用。",
      "question": "你最想先問哪個攤位的價錢？十顆星星會一次用完嗎？",
      "twist": "",
      "deeperQuestion": "如果對方差兩顆就能買到很想要的東西，你會送他、借他，還是陪他再逛逛？"
    }
  },
  {
    "id": "ponder-crush-004",
    "category": "Crush",
    "emoji": "♡",
    "title": "The secret itinerary",
    "scenario": "You receive a free day-trip ticket in an envelope marked only: wear comfortable shoes; back by sunset. Open it for the full itinerary, or head to the meeting point and follow signs along the route.",
    "question": "Would you open it or keep the surprise? If you peeked at just one detail, what would it be?",
    "twist": "",
    "deeperQuestion": "Halfway through, they want a detour to somewhere off the route. What would you do?",
    "zh": {
      "title": "信封裡的秘密行程",
      "scenario": "你們收到一張免費的一日旅行券，信封上只寫著「穿舒服的鞋，日落前回來」。拆開信封就能看到完整行程；不拆的話，也可以到集合地點，跟著沿途的路牌慢慢走。",
      "question": "你會先拆開，還是保留驚喜？如果只偷看一項資料，你會看甚麼？",
      "twist": "",
      "deeperQuestion": "走到一半，對方很想繞去一個不在路線上的地方，你會怎樣安排？"
    }
  },
  {
    "id": "ponder-crush-005",
    "category": "Crush",
    "emoji": "♡",
    "title": "A camera for feelings",
    "scenario": "You borrow a camera that captures moods as colours and landscapes instead of faces. After ten photos together, you can each give the other one print.",
    "question": "What would you hope your picture looked like? Would you explain it or let them guess first?",
    "twist": "",
    "deeperQuestion": "If their favourite was the one you found most ordinary, what would you want to know?",
    "zh": {
      "title": "會拍下心情的相機",
      "scenario": "你們借到一部相機，拍不到樣貌，只會把當下的心情變成顏色和風景。今天一起拍了十張，沖出來後，每人可以選一張送給對方。",
      "question": "你希望送出的那張會是甚麼畫面？你想解釋它，還是先讓對方猜？",
      "twist": "",
      "deeperQuestion": "如果對方最喜歡的是你覺得最普通的一張，你會好奇甚麼？"
    }
  },
  {
    "id": "ponder-crush-006",
    "category": "Crush",
    "emoji": "♡",
    "title": "The bird that brings one letter a day",
    "scenario": "You live on two islands with no phones. A bird delivers letters each evening. You can write a little or add a drawing, but it never tells you when the letter was read.",
    "question": "Would your first letter describe your day, ask a question, or arrange a visit?",
    "twist": "",
    "deeperQuestion": "One day they send no words, just a beautiful leaf. What do you think they wanted to share? What would you send back?",
    "zh": {
      "title": "每天送一封信的鳥",
      "scenario": "你們住在兩座小島，沒有手機，只有一隻每天黃昏送信的鳥。信可以很短，也可以附一張畫；牠不會告訴你對方甚麼時候讀過。",
      "question": "第一封信你會寫今天發生的事、問一個問題，還是約好下次見面？",
      "twist": "",
      "deeperQuestion": "有一天，對方沒有寫字，只寄來一片漂亮的葉子。你覺得他想跟你分享甚麼？你會回寄甚麼？"
    }
  },
  {
    "id": "ponder-crush-007",
    "category": "Crush",
    "emoji": "♡",
    "title": "Lend me an afternoon",
    "scenario": "A tiny cinema can replay an ordinary afternoon from your childhood. Nothing major happens: perhaps school ends, dinner is served, or you play at home. You can bring the person beside you.",
    "question": "Which afternoon would you choose? What small detail would you point out to them?",
    "twist": "",
    "deeperQuestion": "If you could take one thing from the film home afterwards, what would it be?",
    "zh": {
      "title": "借你看一個下午",
      "scenario": "有一家小戲院可以播放你童年某個普通下午。沒有大事發生，可能只是放學、吃飯或在家玩；你可以帶身邊這個人坐進去看。",
      "question": "你會選哪個下午？畫面裡有甚麼小細節，你會特別指給他看？",
      "twist": "",
      "deeperQuestion": "散場後，如果能帶走畫面裡的一件東西，你會拿甚麼？"
    }
  },
  {
    "id": "ponder-crush-008",
    "category": "Crush",
    "emoji": "♡",
    "title": "A cloud changes your plans",
    "scenario": "You rent a cloud to watch sunset from a mountain. Halfway there, it stops over a village and refuses to move. Dinner is being cooked, and someone invites you in.",
    "question": "Would you try to reach the mountain or stay for dinner? What would you least want to miss on this trip?",
    "twist": "",
    "deeperQuestion": "What name would you give this trip when you got home?",
    "zh": {
      "title": "雲朵改了行程",
      "scenario": "你們租了一朵雲，打算飄去山頂看日落。半路上雲卻停在一座小村莊，不肯再走；村裡正在煮晚飯，還有人邀你們加入。",
      "question": "你會想辦法繼續去山頂，還是留下吃飯？這趟旅程有甚麼是你最不想錯過的？",
      "twist": "",
      "deeperQuestion": "回家後，你會替這趟旅程取甚麼名字？"
    }
  },
  {
    "id": "ponder-crush-009",
    "category": "Crush",
    "emoji": "♡",
    "title": "The cottage with two keys",
    "scenario": "You borrow a forest cottage for the weekend, with a key each. There is a big kitchen for cooking together and a little room for each of you. There are no plans: spend time together or enjoy your own interests.",
    "question": "How would you spend the first day? When would you most want company, and when time alone?",
    "twist": "",
    "deeperQuestion": "If they painted alone all afternoon and showed you the result at dinner, would you miss the time together or enjoy that rhythm?",
    "zh": {
      "title": "兩把鑰匙的小屋",
      "scenario": "你們借住森林裡的一間小屋過週末，屋主交給你們一人一把鑰匙。屋裡有可以一起煮飯的大廚房，也各有一間小房間。這兩天沒有行程，想一起過或各自做點喜歡的事都可以。",
      "question": "你會怎樣安排第一天？哪段時間最想有人陪，哪段想自己過？",
      "twist": "",
      "deeperQuestion": "如果對方整個下午都在房裡畫畫，晚飯時才拿作品給你看，你會覺得少了相處，還是這樣也很舒服？"
    }
  },
  {
    "id": "ponder-crush-010",
    "category": "Crush",
    "emoji": "♡",
    "title": "The honesty-box flower shop",
    "scenario": "A village flower shop is unattended: customers take flowers and leave payment in a box. You find a bouquet you like, but its price tag has blown away and the owner is not answering.",
    "question": "Would you estimate a price and take the flowers, leave your number for the owner, or return tomorrow to buy them? Why?",
    "twist": "",
    "deeperQuestion": "If you found out the next day that you had paid double, would you ask for the difference back?",
    "zh": {
      "title": "自己付錢的花店",
      "scenario": "小鎮花店沒有人看守，客人自行取花、把錢放進盒子。你們看上一束花，卻發現價錢牌被風吹走了，店主留下的電話也沒人接。",
      "question": "你會估一個價錢付錢取花、留下電話請店主聯絡你，還是明天再來買？為甚麼？",
      "twist": "",
      "deeperQuestion": "如果第二天才知道自己付了雙倍價錢，你會回去問能不能退回差額嗎？"
    }
  },
  {
    "id": "ponder-crush-011",
    "category": "Crush",
    "emoji": "♡",
    "title": "Who conjures dinner?",
    "scenario": "You learn two small spells: one of you can conjure ingredients, the other can cook them into a delicious meal. You invite friends over, but decorating, washing up and hosting still need doing.",
    "question": "Which spell would you want? Which of the remaining jobs would you take first?",
    "twist": "",
    "deeperQuestion": "If the guests praised only the cook, how would you describe how dinner came together?",
    "zh": {
      "title": "晚餐由誰變出來",
      "scenario": "你們學會兩種小魔法：一人可以變出食材，另一人可以把食材煮成美味晚餐。今晚想請朋友吃飯，佈置、洗碗和招呼客人仍要自己做。",
      "question": "你想要哪種魔法？剩下的事情，你會先接下哪一件？",
      "twist": "",
      "deeperQuestion": "如果朋友只稱讚煮飯的人，你會怎樣介紹這頓晚餐？"
    }
  },
  {
    "id": "ponder-crush-012",
    "category": "Crush",
    "emoji": "♡",
    "title": "A postcard from your future self",
    "scenario": "A postcard arrives from you ten years in the future. It says only: glad I gave it a try. It does not say what, but leaves space for you to write something you want to attempt.",
    "question": "What would you write? If this person could join your first small step, where would you take them?",
    "twist": "",
    "deeperQuestion": "If it did not work out, what would you still hope to take from the experience?",
    "zh": {
      "title": "未來的你寄來一張明信片",
      "scenario": "你收到十年後的自己寄來的明信片，只有一句「還好那時候有試」。背面沒有說是哪件事，卻留了一個位置，讓你現在填上想試的事。",
      "question": "你會填甚麼？如果身邊這個人能陪你走第一小步，你想帶他去哪裡？",
      "twist": "",
      "deeperQuestion": "如果試過後沒有成功，你希望這段經歷至少為你留下甚麼？"
    }
  },
  {
    "id": "ponder-crush-013",
    "category": "Crush",
    "emoji": "♡",
    "title": "The rooftop with two chairs",
    "scenario": "You find a rooftop for watching meteors, with two comfortable chairs. Just as you settle in, friends ask where you are. They would bring plenty of fun, but everyone would sit on the ground.",
    "question": "Would you invite everyone up or keep tonight for two? What would you least want to miss?",
    "twist": "",
    "deeperQuestion": "If they chose the other option next time, what different kind of fun might that evening bring?",
    "zh": {
      "title": "只剩兩張椅子的屋頂",
      "scenario": "你們找到一個可以看流星的屋頂，只有兩張舒服的椅子。剛坐好，一群熟悉的朋友傳訊息問你們在哪裡；他們來了會很熱鬧，但要一起坐地上。",
      "question": "你會邀大家上來，還是把今晚留給兩個人？你最不想錯過甚麼？",
      "twist": "",
      "deeperQuestion": "如果下次對方選了另一種安排，你覺得那一晚會有甚麼不同的樂趣？"
    }
  },
  {
    "id": "ponder-crush-014",
    "category": "Crush",
    "emoji": "♡",
    "title": "The pocket museum",
    "scenario": "You each get a tiny display case for three things others might find worthless but you cannot throw away. Tonight the museum opens only for each other, with you as the guides.",
    "question": "What would your first exhibit be? Which memory would you share when introducing it?",
    "twist": "",
    "deeperQuestion": "If they gave you a new exhibit, would you want it tied to an old memory or a new beginning?",
    "zh": {
      "title": "口袋博物館",
      "scenario": "你們各獲得一個小展櫃，可以展出三件別人看來不值錢、你卻捨不得丟的東西。今晚博物館只開給彼此參觀，每件展品都由主人介紹。",
      "question": "你的第一件展品是甚麼？介紹它時，你會分享哪段回憶？",
      "twist": "",
      "deeperQuestion": "如果對方想送你一件新展品，你希望它跟舊回憶有關，還是代表新的開始？"
    }
  },
  {
    "id": "ponder-crush-015",
    "category": "Crush",
    "emoji": "♡",
    "title": "Fireworks for small victories",
    "scenario": "This city's fireworks celebrate small progress that usually goes unnoticed, rather than promotions or prizes. Tonight you each get to light up the sky and add one sentence.",
    "question": "What small achievement would your fireworks celebrate? What sentence would you add?",
    "twist": "",
    "deeperQuestion": "If they wanted to celebrate something you found easy, what would you ask to understand why it mattered so much to them?",
    "zh": {
      "title": "只為小事亮起的煙花",
      "scenario": "這個城市的煙花不慶祝升職或得獎，只為平常沒人留意的小進步亮起。今晚你們各有一次點亮天空的機會，還能替煙花配一句話。",
      "question": "你會為自己哪件小事放煙花？那句話會寫甚麼？",
      "twist": "",
      "deeperQuestion": "如果對方想慶祝的是一件你覺得很容易的事，你會怎樣問，了解這件事為甚麼對他那麼重要？"
    }
  },
  {
    "id": "ponder-crush-016",
    "category": "Crush",
    "emoji": "♡",
    "title": "The film with your ending",
    "scenario": "A film follows someone who opens a dream shop by the sea. Business is modest, but they enjoy each day. In the final scene, a well-paid job offer lies on the table, and the film stops.",
    "question": "If you directed the final five minutes, what would happen? Which detail would you show the audience?",
    "twist": "",
    "deeperQuestion": "Would your ending change if the character met someone they wanted to build a life with?",
    "zh": {
      "title": "結局留給你們的電影",
      "scenario": "你們看了一部電影：主角在海邊開了夢想中的小店，生意普通，每天卻很開心。最後一幕，一封高薪工作的邀請放在桌上，畫面就停了。",
      "question": "如果由你拍最後五分鐘，主角會做甚麼？你會讓觀眾看到哪個細節？",
      "twist": "",
      "deeperQuestion": "如果主角多了一個很想一起生活的人，你的結局會改嗎？"
    }
  },
  {
    "id": "ponder-crush-017",
    "category": "Crush",
    "emoji": "♡",
    "title": "You lead the morning, I'll take the afternoon",
    "scenario": "You visit a new city. One person leads in the morning, the other in the afternoon. The map has famous shops, quiet lanes and a spot marked only worth the detour.",
    "question": "Where would you go when it was your turn to lead? What would you hope they remembered about those hours?",
    "twist": "",
    "deeperQuestion": "If a wrong turn led somewhere wonderful, would you call it a mistake or part of the trip?",
    "zh": {
      "title": "上午你帶路，下午換我",
      "scenario": "你們來到一座從未去過的城市。上午由一人帶路，下午換另一人；地圖上有名店、安靜巷子，還有一處只有「值得繞路」四個字的標記。",
      "question": "輪到你帶路時，最想去哪裡？你希望對方回想這半天時，會記得甚麼？",
      "twist": "",
      "deeperQuestion": "如果走錯路卻找到很喜歡的地方，你會把它算成失誤，還是行程的一部分？"
    }
  },
  {
    "id": "ponder-crush-018",
    "category": "Crush",
    "emoji": "♡",
    "title": "The shop that remembers your story",
    "scenario": "You find a shop where the owner remembers everyone's stories and makes a dessert just for them. They ask for recommendations, but admit that with more customers they may have less time to chat.",
    "question": "How would you recommend the shop? What would you most hope it kept?",
    "twist": "",
    "deeperQuestion": "If getting that dessert meant queuing in future, would you still bring them?",
    "zh": {
      "title": "記得你故事的小店",
      "scenario": "你們發現一間小店，店主會記得每個人的故事，再做一道專屬甜點。店主想請你們幫忙介紹客人，卻也說人多之後，未必有時間每次坐下來聊天。",
      "question": "你會怎樣介紹這間店？最希望它保留的是哪一部分？",
      "twist": "",
      "deeperQuestion": "如果以後要排隊才能吃到那道甜點，你還會帶對方來嗎？"
    }
  },
  {
    "id": "ponder-crush-019",
    "category": "Crush",
    "emoji": "♡",
    "title": "A little light left tonight",
    "scenario": "You each have a lamp. While it shines, you have energy to listen; when it goes out, you need rest. Tonight yours is almost out when they arrive with a story they long to share.",
    "question": "Would you listen for a little while or arrange to talk tomorrow? If you needed rest tonight, what message would you leave at the door?",
    "twist": "",
    "deeperQuestion": "If you were the one arriving with a story, what response would make you happy to come back tomorrow?",
    "zh": {
      "title": "今晚還亮著的小燈",
      "scenario": "你們各有一盞小燈，燈亮時可以好好聽別人說話，熄了就需要休息。今晚你的燈只剩一點光，對方卻帶著一個很想分享的故事來敲門。",
      "question": "你會先聽一小段，還是約明天再聊？如果今晚需要休息，你會在門口留甚麼話給對方？",
      "twist": "",
      "deeperQuestion": "如果換成你帶著故事來敲門，對方怎樣回應，會讓你覺得明天再來也很好？"
    }
  },
  {
    "id": "ponder-crush-020",
    "category": "Crush",
    "emoji": "♡",
    "title": "The one-song jukebox",
    "scenario": "You enter an empty record shop. The owner gives you a token to play one song for the person beside you, but you cannot explain your choice until it ends.",
    "question": "Would you choose a song that reveals something about you, or one to make a memory together? Which song?",
    "twist": "",
    "deeperQuestion": "If they heard a different meaning, would you explain first or want to hear more?",
    "zh": {
      "title": "只能放一首歌的點唱機",
      "scenario": "你們走進一間沒有其他客人的唱片店。店主給你一枚代幣，可以放一首歌給身邊的人聽，但播完前不能解釋為甚麼選它。",
      "question": "你會選一首讓他認識你的歌，還是一首想一起留下回憶的歌？會是哪首？",
      "twist": "",
      "deeperQuestion": "如果對方聽出的意思跟你原本想的不同，你會先解釋，還是想聽他再說一點？"
    }
  },
  {
    "id": "ponder-crush-021",
    "category": "Crush",
    "emoji": "♡",
    "title": "A ticket for six months away",
    "scenario": "You receive a ticket to spend six months across the sea, trying a life you have long imagined. Return travel and a place to stay are arranged, but the invitation is for you alone. If you pass, the next opportunity is a year away.",
    "question": "Would you board or wait? What would you most want to do together before leaving?",
    "twist": "",
    "deeperQuestion": "If you could send one photo a day, would you choose scenery or ordinary moments?",
    "zh": {
      "title": "去遠方住半年的船票",
      "scenario": "你收到一張船票，可以到海的另一邊住半年，試一種一直嚮往的生活。來回船票和住處都安排好了，但只能你一個人去。這次不出發，就要等一年後才有下一次機會。",
      "question": "你會登船，還是等下一次？出發前最想和對方一起完成甚麼？",
      "twist": "",
      "deeperQuestion": "如果每天只能寄一張照片回來，你會拍風景，還是生活裡很普通的小事？"
    }
  },
  {
    "id": "ponder-crush-022",
    "category": "Crush",
    "emoji": "♡",
    "title": "Four weekends yet to plan",
    "scenario": "You are planning four weekends with a shared date budget. Spend it on one much-anticipated event, or spread it across four smaller outings. The city also has plenty of free places to explore.",
    "question": "How would you plan those four weekends? Which day would you most look forward to together?",
    "twist": "",
    "deeperQuestion": "If the big event suddenly became half-price, would you add it or keep the savings?",
    "zh": {
      "title": "四個還沒安排的週末",
      "scenario": "你們準備安排下個月的四個週末，手上有一筆約會預算。可以把錢花在一次很期待的活動，也可以分開，安排四次簡單的小出遊。城裡也有很多不用花錢的地方。",
      "question": "你會怎樣安排這四個週末？最想和對方一起期待哪一天？",
      "twist": "",
      "deeperQuestion": "如果大活動突然半價，你會加進行程，還是把省下的錢留著？"
    }
  },
  {
    "id": "ponder-crush-023",
    "category": "Crush",
    "emoji": "♡",
    "title": "The travelling home",
    "scenario": "A house can move anywhere once a year, taking everything inside along. You each mark three places to stay. One map stays close to home; the other spans several countries.",
    "question": "Which three places would you choose? Apart from the things in the house, what would be hardest to leave behind each time?",
    "twist": "",
    "deeperQuestion": "If you could try a place for one month, which of their choices would you visit?",
    "zh": {
      "title": "會移動的家",
      "scenario": "有一間小屋每年可以搬到任何地方，屋內的東西都會跟著移動。你們各自標出三個想停留的地方，攤開地圖後，發現一人選的地方都很近，另一人卻跨了幾個國家。",
      "question": "你會選哪三個地方？除了屋裡的東西，每次搬家你最捨不得離開甚麼？",
      "twist": "",
      "deeperQuestion": "如果只能先試住一個月，你最願意去對方選的哪一站？"
    }
  },
  {
    "id": "ponder-crush-024",
    "category": "Crush",
    "emoji": "♡",
    "title": "Your hometown in a pocket",
    "scenario": "Before moving away, you can turn your hometown into a pocket-sized street. Take it out when you miss home to share a meal or see familiar people. Time passes at the same rate inside and outside, so longer visits leave less time for your new life.",
    "question": "Who and what would you put on the street? Would you open it on your first weekend away?",
    "twist": "",
    "deeperQuestion": "If you brought them inside once, who would you want them to meet first?",
    "zh": {
      "title": "口袋裡的家鄉",
      "scenario": "離家生活前，你可以把家鄉變成一條口袋裡的小街。想家時拿出來，就能回去吃頓飯、見見熟悉的人。裡面和外面的時間一樣，所以待得越久，留給新生活的時間就越少。",
      "question": "你會把哪些人和地方留在小街裡？搬走後第一個週末，你會打開它嗎？",
      "twist": "",
      "deeperQuestion": "如果帶對方進去一次，你最想讓誰先認識他？"
    }
  },
  {
    "id": "ponder-crush-025",
    "category": "Crush",
    "emoji": "♡",
    "title": "The garden of footprints",
    "scenario": "A garden keeps each visitor's footprints in a different colour. After several visits, your paths often meet, but each also leads to corners the other has never seen.",
    "question": "What kind of corner would you keep for yourself in the garden? If you showed it to them, how would you introduce it?",
    "twist": "",
    "deeperQuestion": "If they wanted to keep one corner to themselves for now, where would you arrange to meet next?",
    "zh": {
      "title": "看得見腳印的花園",
      "scenario": "有座花園會留下每位訪客的彩色腳印。你們來了幾次後，發現彼此的路線常常交會，也各自通往一些對方沒去過的角落。",
      "question": "你會在花園裡留一個怎樣的小角落給自己？想帶對方去看看時，你會怎樣介紹那裡？",
      "twist": "",
      "deeperQuestion": "如果有個角落他說想暫時自己保留，你會把下一次見面約在哪裡？"
    }
  },
  {
    "id": "ponder-crush-026",
    "category": "Crush",
    "emoji": "♡",
    "title": "Two chairs at the repair shop",
    "scenario": "You bring a much-loved broken wooden bird to a repair shop together. One chair is at a workbench for repairs; a sofa beside it is for telling the bird's story first.",
    "question": "Where would you sit first? What would you want the person beside you to do?",
    "twist": "",
    "deeperQuestion": "The wooden bird is repaired, but a crack is still visible. Would you cover it or leave it as it is?",
    "zh": {
      "title": "修補店的兩張椅子",
      "scenario": "你抱著一隻很喜歡卻壞掉的小木鳥，和對方走進修補店。店裡有張工作椅，可以立刻動手修；旁邊有張沙發，可以先說說這隻鳥的故事。",
      "question": "你會先坐哪裡？你希望身邊的人這時做甚麼？",
      "twist": "",
      "deeperQuestion": "小木鳥修好了，卻仍有一條看得見的裂痕。你會想把它遮住，還是就這樣留下來？"
    }
  },
  {
    "id": "ponder-crush-027",
    "category": "Crush",
    "emoji": "♡",
    "title": "The pen that draws jokes",
    "scenario": "A market pen turns your jokes into little comics. You draw one as a gift, but although you find it sweet, they look at it for a long time without laughing. The drawing can still be changed.",
    "question": "Would you ask how the comic made them feel or explain what you meant first? If you redrew it, what would you change?",
    "twist": "",
    "deeperQuestion": "If they added a panel, how would you hope the story continued?",
    "zh": {
      "title": "會把玩笑畫出來的筆",
      "scenario": "市集上有支筆，會把你說的玩笑畫成小漫畫。你畫了一張送給對方，自己覺得很可愛，他卻看了很久，沒有笑。畫還可以改。",
      "question": "你會先問他看完有甚麼感覺，還是先解釋自己的意思？如果重畫，你想改哪一部分？",
      "twist": "",
      "deeperQuestion": "如果他願意拿筆加一格，你希望故事怎樣接下去？"
    }
  },
  {
    "id": "ponder-crush-028",
    "category": "Crush",
    "emoji": "♡",
    "title": "The unsigned gift",
    "scenario": "A village post carrier delivers unsigned gifts and promises never to reveal the sender. You think of a little gift for the person beside you. Send it anonymously, or give it to them yourself next time you meet.",
    "question": "What gift comes to mind? Would you send it anonymously or want to see their reaction yourself?",
    "twist": "",
    "deeperQuestion": "If they treasured the anonymous gift for a long time, could you keep the secret?",
    "zh": {
      "title": "不署名的禮物",
      "scenario": "小鎮有位郵差，專門送不署名的禮物，還答應不會透露是誰寄的。你想到一份適合送給眼前這個人的小禮物，可以請郵差送去，也可以等下次見面時親手交給他。",
      "question": "你想到的是甚麼禮物？你會匿名寄出，還是想親眼看見他收到的反應？",
      "twist": "",
      "deeperQuestion": "如果他把匿名禮物珍惜了很久，你會忍得住不說嗎？"
    }
  },
  {
    "id": "ponder-crush-029",
    "category": "Crush",
    "emoji": "♡",
    "title": "Half an hour together each day",
    "scenario": "In a curious city, half the residents wake at sunrise and the other half begin their day at sunset. You live on opposite sides, with only half an hour together at dusk. At other times, you can leave notes or little things for each other.",
    "question": "How would you spend that half-hour? What would you leave for them to discover later?",
    "twist": "",
    "deeperQuestion": "If you finally had a whole day together, would you fill it with plans or leave it open?",
    "zh": {
      "title": "每天只見半小時",
      "scenario": "在一座奇妙的城市裡，一半居民日出時醒來，另一半日落才開始活動。你們剛好住在不同的一邊，每天只有黃昏的半小時能見面，其他時間可以留下便條或小東西給對方。",
      "question": "你會把那半小時用來做甚麼？分開時想留甚麼給他發現？",
      "twist": "",
      "deeperQuestion": "如果某天終於有完整一天一起過，你會排滿行程，還是讓它空著？"
    }
  },
  {
    "id": "ponder-crush-030",
    "category": "Crush",
    "emoji": "♡",
    "title": "Two invitations for one night",
    "scenario": "Two invitations arrive for the same evening: a meteor shower seen once a decade, and a friend's first small exhibition. They are too far apart to attend both, though you can go separately.",
    "question": "What would you do? Which would linger in your mind more if you missed it?",
    "twist": "",
    "deeperQuestion": "If you went separately, what would you bring back to show each other?",
    "zh": {
      "title": "同一晚的兩張邀請函",
      "scenario": "你們收到兩張同晚的邀請函：一張去看十年一次的流星雨，另一張去參加朋友第一次辦的小展覽。兩個地方很遠，趕不了兩場，也可以各自去。",
      "question": "你會怎樣安排？哪一邊錯過了，會讓你比較惦記？",
      "twist": "",
      "deeperQuestion": "如果最後各自去，回來時你會帶甚麼給對方看？"
    }
  },
  {
    "id": "ponder-crush-031",
    "category": "Crush",
    "emoji": "♡",
    "title": "A new page in an old story",
    "scenario": "A library turns everyone's past into books: some warm, some with difficult endings. You can show the person beside you a page from one of yours, or only the new story you have recently begun.",
    "question": "Which page would you show? What would you hope they asked afterwards?",
    "twist": "",
    "deeperQuestion": "If your old self made a choice you would not make now, what note would you add?",
    "zh": {
      "title": "舊故事的新一頁",
      "scenario": "有一座圖書館把每個人的過去寫成一本本故事，有些溫暖，有些結局不太好。你可以挑一本自己的故事，讓身邊的人讀一頁；也可以只讓他看你最近開始寫的新故事。",
      "question": "你會給他看哪一頁？希望他讀完後問你甚麼？",
      "twist": "",
      "deeperQuestion": "如果舊故事中的你做了現在不會做的選擇，你會在旁邊加甚麼註解？"
    }
  },
  {
    "id": "ponder-crush-032",
    "category": "Crush",
    "emoji": "♡",
    "title": "Seeds that grow dreams",
    "scenario": "A shop sells seeds that might grow into the little business you have dreamed of, or might become ordinary flowers. Growing them takes six months and some savings, while everyday costs remain covered.",
    "question": "Would you buy some seeds or leave them for now? What would your imagined shop sell?",
    "twist": "",
    "deeperQuestion": "If theirs produced only flowers after six months, how would you spend harvest day with them?",
    "zh": {
      "title": "會長出夢想的種子",
      "scenario": "花店賣一種種子，種下後有機會長成你一直想開的小店，但也可能只長出普通的花。照顧它要花半年和一部分存款，日常生活仍負擔得起。",
      "question": "你會買幾顆，還是先不買？你想像的小店會賣甚麼？",
      "twist": "",
      "deeperQuestion": "如果對方種了半年只開出花，你會怎樣陪他過收成那一天？"
    }
  },
  {
    "id": "ponder-crush-033",
    "category": "Crush",
    "emoji": "♡",
    "title": "The bridge you repair together",
    "scenario": "You spend a day repairing a village bridge, then find the two ends do not meet. One of you wants to redo it while the details are fresh; the other wants dinner and a new look tomorrow. The villagers will need it tomorrow.",
    "question": "Would you eat and rest first or keep repairing the bridge? What would you need to sort out tonight before you could relax?",
    "twist": "",
    "deeperQuestion": "If you realised the next morning that your drawing was wrong, how would you begin again?",
    "zh": {
      "title": "要一起修的小橋",
      "scenario": "你們替村莊修一座小橋，忙了一天才發現兩邊接不上。一人想趁還記得細節立即重做，另一人想先吃飯，明早再看。村民明天才會用橋。",
      "question": "你會先吃飯休息，還是繼續修橋？今晚至少要處理好甚麼，你才放心得下？",
      "twist": "",
      "deeperQuestion": "如果隔天發現是自己的圖畫錯了，你會怎樣重新開始？"
    }
  },
  {
    "id": "ponder-crush-034",
    "category": "Crush",
    "emoji": "♡",
    "title": "The boat without a name",
    "scenario": "You build a little boat together and enjoy several trips. Someone at the dock asks its name and hands you paint. Once painted, a name takes sanding to remove.",
    "question": "Would you name it now or sail a few more times? What name would you suggest?",
    "twist": "",
    "deeperQuestion": "If they suggested a small picture instead for now, what would you draw?",
    "zh": {
      "title": "還沒有名字的小船",
      "scenario": "你們一起造了一艘小船，已經划出去幾次，每次都很開心。碼頭的人問船叫甚麼名字，旁邊有人遞來油漆；名字一旦寫上去，要磨掉才改得了。",
      "question": "你會現在取名，還是再航行幾次？如果要寫，你會提議甚麼名字？",
      "twist": "",
      "deeperQuestion": "如果對方想先畫一個小圖案代替名字，你會想畫甚麼？"
    }
  },
  {
    "id": "ponder-crush-035",
    "category": "Crush",
    "emoji": "♡",
    "title": "The latest guide to you",
    "scenario": "You each have a little book about yourself: favourite foods, fears and places you want to visit. Your own copy updates as you change, but any copy you have given someone else stays the same.",
    "question": "Which page would you show first? Which has recently needed rewriting?",
    "twist": "",
    "deeperQuestion": "If they planned a surprise using an old edition, how would you give them the new one?",
    "zh": {
      "title": "關於你的新版說明書",
      "scenario": "你們各有一本介紹自己的小書，寫著愛吃的東西、害怕的事和想去的地方。每當想法改變，手上的書就會更新；不過，已經送給別人的那一本，仍然是舊版本。",
      "question": "你會先讓對方看哪一頁？最近有哪一頁需要重新寫過？",
      "twist": "",
      "deeperQuestion": "如果對方照著舊版替你安排驚喜，你會怎樣把新版交給他？"
    }
  },
  {
    "id": "ponder-crush-036",
    "category": "Crush",
    "emoji": "♡",
    "title": "A door of your own design",
    "scenario": "You can each draw an ideal cottage and make it real. They are the same size, but the door can stay open, open at set hours, or wait for a knock.",
    "question": "Would your door usually be open, or would you wait for a knock? Who would you invite on the first evening?",
    "twist": "",
    "deeperQuestion": "If a path could connect the cottages, would you want them a few steps apart or a pleasant walk away?",
    "zh": {
      "title": "讓你設計的一扇門",
      "scenario": "你們可以各自畫一間理想小屋，畫好的就會出現。屋內大小一樣，但門可以永遠敞開、每天固定時間打開，或有人敲門才開。",
      "question": "你的門平常會開著，還是等人敲門才開？第一晚，你想請誰來做客？",
      "twist": "",
      "deeperQuestion": "如果兩間小屋之間可以加一條小路，你希望走幾步就到，還是隔一段剛好能散步的距離？"
    }
  },
  {
    "id": "ponder-crush-037",
    "category": "Crush",
    "emoji": "♡",
    "title": "A Sunday ten years away",
    "scenario": "A window shows an ordinary Sunday ten years from now, revealing no achievements or income. You see who is at home, what happens after breakfast and who is waiting for you.",
    "question": "What scene would you hope to see? Who would you want to spend that morning with, or would you enjoy it alone?",
    "twist": "",
    "deeperQuestion": "If their Sunday looked very different, which part would you most like to experience?",
    "zh": {
      "title": "十年後的星期天",
      "scenario": "有扇窗可以看見十年後一個很普通的星期天，不會告訴你成就或收入。你只會看到家裡有哪些人、早餐後要做甚麼，以及誰在等你。",
      "question": "你希望窗裡是怎樣的一幕？那個早上，你想跟誰一起過，還是享受一個人的時間？",
      "twist": "",
      "deeperQuestion": "如果對方窗裡的一天跟你很不一樣，你最想親身試試哪個部分？"
    }
  },
  {
    "id": "ponder-crush-038",
    "category": "Crush",
    "emoji": "♡",
    "title": "A holiday you invent",
    "scenario": "A town lets each household invent a holiday. You can choose its date, food and a small yearly ritual, then decide how many people to invite.",
    "question": "What would your holiday celebrate? Is there a food or tradition you loved as a child that you would include?",
    "twist": "",
    "deeperQuestion": "If they felt uncomfortable with one part, how would you adjust it so you could both enjoy the holiday?",
    "zh": {
      "title": "你們發明的節日",
      "scenario": "小鎮讓每戶人家創造一個節日，不用跟別人一樣。你們可以選日期、食物和一個每年都做的小儀式，再決定邀多少人來。",
      "question": "你想為甚麼事情設這個節日？有沒有一種從小喜歡的食物或習慣，也想放進慶祝裡？",
      "twist": "",
      "deeperQuestion": "如果對方不習慣其中一個環節，你會怎樣調整，讓兩人都能享受這個節日？"
    }
  },
  {
    "id": "ponder-crush-039",
    "category": "Crush",
    "emoji": "♡",
    "title": "The mistaken magic subtitles",
    "scenario": "Travelling abroad, you wear glasses that turn speech into subtitles. You say a simple walk would be nice; they see that their plan is boring. Only later do you learn the glasses sometimes mistranslate.",
    "question": "After discovering the mistake, would you explain what you meant first or ask how they felt at the time?",
    "twist": "",
    "deeperQuestion": "If you had to wear them all day, what small way would you invent to check you understood each other?",
    "zh": {
      "title": "翻譯錯了的魔法字幕",
      "scenario": "你們在異地旅行，戴著會把說話變成字幕的眼鏡。你說「隨便走走也很好」，對方眼前卻出現「你安排得很無聊」；過一會，你們才發現眼鏡偶爾會翻錯。",
      "question": "發現字幕出錯後，你會先解釋剛才的意思，還是先問對方當時有甚麼感覺？",
      "twist": "",
      "deeperQuestion": "如果眼鏡還要戴一整天，你們會想出甚麼小方法，確認沒有會錯意？"
    }
  },
  {
    "id": "ponder-crush-040",
    "category": "Crush",
    "emoji": "♡",
    "title": "The blank ticket for next time",
    "scenario": "A ticket seller overhears your conversation and offers a blank ticket. Write down a place you mentioned but have not yet visited together, and the ticket will take you there.",
    "question": "Where would you suggest? Which answer made you want to see their world for yourself?",
    "twist": "",
    "deeperQuestion": "If they wanted to visit somewhere you mentioned instead, how would you plan the first stop?",
    "zh": {
      "title": "下次見面的空白票",
      "scenario": "有位售票員聽了你們剛才的聊天，送來一張空白車票。只要一起寫上一個剛才提過、卻還沒一起去過的地方，車票就能帶你們出發。",
      "question": "你會提議寫哪裡？剛才對方哪個答案，讓你想親眼看看他的世界？",
      "twist": "",
      "deeperQuestion": "如果對方想改去你提過的地方，你會怎樣安排第一站？"
    }
  }
];
