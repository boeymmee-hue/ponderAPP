export const categories = ['Couple', 'Family', 'Party', 'Solo'] as const;
export type Category = typeof categories[number];
export type GroupSize = 'small' | 'medium' | 'large';
export interface CardText { title: string; scenario: string; question: string; twist: string; deeperQuestion: string; }
export interface Question extends CardText { id: string; category: Category; emoji: string; zh: CardText; groupSize?: GroupSize; legacy?: boolean; author?: string; }
// Active, independently edited everyday conversation cards. Archived links live in archive.ts.
export const questions: Question[] = [
  {
    "id": "ponder-v2-couple-001",
    "category": "Couple",
    "emoji": "💗",
    "title": "After work",
    "scenario": "You are tired after work, but your partner wants to talk.",
    "question": "What would feel helpful right now?",
    "twist": "",
    "deeperQuestion": "What sentence would you use to explain what you need?",
    "zh": {
      "title": "放工之後",
      "scenario": "你放工後很累，伴侶卻想聊天。",
      "question": "你希望對方怎樣陪你？",
      "twist": "",
      "deeperQuestion": "你會用哪一句話講清楚自己的需要？"
    }
  },
  {
    "id": "ponder-v2-couple-002",
    "category": "Couple",
    "emoji": "💗",
    "title": "Running late",
    "scenario": "Your partner is ten minutes late without a message.",
    "question": "How would you bring it up?",
    "twist": "",
    "deeperQuestion": "What message would you like next time they are late?",
    "zh": {
      "title": "遲到十分鐘",
      "scenario": "伴侶遲到十分鐘，沒有提早通知。",
      "question": "你會怎樣開口？",
      "twist": "",
      "deeperQuestion": "下次遲到時，你希望收到甚麼消息？"
    }
  },
  {
    "id": "ponder-v2-couple-003",
    "category": "Couple",
    "emoji": "💗",
    "title": "A free weekend",
    "scenario": "You both have a free weekend.",
    "question": "What would you like to do together?",
    "twist": "",
    "deeperQuestion": "If you only had two hours, what part would you keep?",
    "zh": {
      "title": "週末空白",
      "scenario": "這個週末你們都沒有安排。",
      "question": "你最想一起做甚麼？",
      "twist": "",
      "deeperQuestion": "如果只剩兩小時，你會保留哪個部分？"
    }
  },
  {
    "id": "ponder-v2-couple-004",
    "category": "Couple",
    "emoji": "💗",
    "title": "Comfort that helps",
    "scenario": "You complain about something and your partner immediately offers advice.",
    "question": "What would you rather receive?",
    "twist": "",
    "deeperQuestion": "What signal could mean that you just want them to listen?",
    "zh": {
      "title": "安慰方式",
      "scenario": "你向伴侶抱怨一件事，對方馬上給建議。",
      "question": "你當時更想要甚麼？",
      "twist": "",
      "deeperQuestion": "下次可以用甚麼暗號，表示你只想被聆聽？"
    }
  },
  {
    "id": "ponder-v2-couple-005",
    "category": "Couple",
    "emoji": "💗",
    "title": "Dinner plans",
    "scenario": "You want inexpensive noodles; your partner wants a fancy restaurant.",
    "question": "How could tonight work for both of you?",
    "twist": "",
    "deeperQuestion": "How much feels comfortable for an ordinary dinner?",
    "zh": {
      "title": "一頓晚餐",
      "scenario": "你想吃便宜的麵，伴侶想去高級餐廳。",
      "question": "今晚怎樣安排，兩人都舒服？",
      "twist": "",
      "deeperQuestion": "你們願意為一頓普通晚餐花多少錢？"
    }
  },
  {
    "id": "ponder-v2-couple-006",
    "category": "Couple",
    "emoji": "💗",
    "title": "Phone time",
    "scenario": "Your partner keeps looking at their phone while you talk.",
    "question": "How would you get their attention?",
    "twist": "",
    "deeperQuestion": "When would you both like to put your phones away?",
    "zh": {
      "title": "手機時段",
      "scenario": "你說話時，伴侶一直看手機。",
      "question": "你會怎樣提醒對方？",
      "twist": "",
      "deeperQuestion": "你們想在哪個時段一起放下手機？"
    }
  },
  {
    "id": "ponder-v2-couple-007",
    "category": "Couple",
    "emoji": "💗",
    "title": "A small surprise",
    "scenario": "You have a small budget to brighten your partner's day.",
    "question": "How would you use it?",
    "twist": "",
    "deeperQuestion": "What could you do without spending money?",
    "zh": {
      "title": "小小驚喜",
      "scenario": "你有一百元，想讓伴侶今天開心一點。",
      "question": "你會怎樣用？",
      "twist": "",
      "deeperQuestion": "如果完全不花錢，你會做甚麼？"
    }
  },
  {
    "id": "ponder-v2-couple-008",
    "category": "Couple",
    "emoji": "💗",
    "title": "Cancelled plans",
    "scenario": "A date you were looking forward to is cancelled.",
    "question": "What could your partner do to soften the disappointment?",
    "twist": "",
    "deeperQuestion": "Would you prefer a new date right away or an apology first?",
    "zh": {
      "title": "約會取消",
      "scenario": "你期待的約會臨時取消了。",
      "question": "對方做甚麼，會讓你好受一點？",
      "twist": "",
      "deeperQuestion": "你希望馬上改期，還是先聽一句道歉？"
    }
  },
  {
    "id": "ponder-v2-couple-009",
    "category": "Couple",
    "emoji": "💗",
    "title": "Small chores",
    "scenario": "You always remember to replace household supplies; your partner does not notice.",
    "question": "How would you divide this task?",
    "twist": "",
    "deeperQuestion": "What unnoticed task does your partner already handle?",
    "zh": {
      "title": "家務小事",
      "scenario": "你總是記得補買日用品，伴侶卻沒有留意。",
      "question": "你會怎樣分配這件事？",
      "twist": "",
      "deeperQuestion": "有哪件看不見的家務，是對方一直在做？"
    }
  },
  {
    "id": "ponder-v2-couple-010",
    "category": "Couple",
    "emoji": "💗",
    "title": "Taking a pause",
    "scenario": "During an argument, you need quiet and your partner wants to finish talking.",
    "question": "How could you take a pause?",
    "twist": "",
    "deeperQuestion": "When could you agree to return to the conversation?",
    "zh": {
      "title": "吵架暫停",
      "scenario": "爭吵時，你想安靜一下，伴侶卻想馬上談清楚。",
      "question": "你們可以怎樣暫停？",
      "twist": "",
      "deeperQuestion": "你們約好多久後再談，會比較安心？"
    }
  },
  {
    "id": "ponder-v2-couple-011",
    "category": "Couple",
    "emoji": "💗",
    "title": "An anniversary",
    "scenario": "Your anniversary is coming up.",
    "question": "Would you prefer a gift, an outing, or time at home?",
    "twist": "",
    "deeperQuestion": "What small detail would make it feel thoughtful?",
    "zh": {
      "title": "紀念日",
      "scenario": "紀念日快到了。",
      "question": "你比較想收到禮物、一起出門，還是留在家？",
      "twist": "",
      "deeperQuestion": "哪一個細節會讓你覺得對方有用心？"
    }
  },
  {
    "id": "ponder-v2-couple-012",
    "category": "Couple",
    "emoji": "💗",
    "title": "Time with friends",
    "scenario": "Your partner wants to go out with friends; you thought you would meet that day.",
    "question": "How would you discuss it?",
    "twist": "",
    "deeperQuestion": "How far ahead would you like to know each other's plans?",
    "zh": {
      "title": "朋友時間",
      "scenario": "伴侶想和朋友單獨出去，你本來以為那天會見面。",
      "question": "你會怎樣商量？",
      "twist": "",
      "deeperQuestion": "你希望提早多久知道彼此的安排？"
    }
  },
  {
    "id": "ponder-v2-couple-013",
    "category": "Couple",
    "emoji": "💗",
    "title": "Posting a photo",
    "scenario": "Your partner wants to post a photo together, but you dislike how you look.",
    "question": "What would you say?",
    "twist": "",
    "deeperQuestion": "Would you like to ask each other before posting photos?",
    "zh": {
      "title": "公開合照",
      "scenario": "伴侶想上載合照，但你不喜歡自己的表情。",
      "question": "你會怎樣說？",
      "twist": "",
      "deeperQuestion": "你們想在分享照片前問過對方嗎？"
    }
  },
  {
    "id": "ponder-v2-couple-014",
    "category": "Couple",
    "emoji": "💗",
    "title": "Replying to messages",
    "scenario": "You are busy for hours and your partner worries when you do not reply.",
    "question": "What check-in would work?",
    "twist": "",
    "deeperQuestion": "When would you prefer a phone call instead?",
    "zh": {
      "title": "回覆訊息",
      "scenario": "你忙了幾小時沒有回覆，伴侶開始擔心。",
      "question": "你們可以約定怎樣報個平安？",
      "twist": "",
      "deeperQuestion": "哪種情況下，你希望對方直接打電話？"
    }
  },
  {
    "id": "ponder-v2-couple-015",
    "category": "Couple",
    "emoji": "💗",
    "title": "Travel pace",
    "scenario": "On holiday, one of you wants an early start and the other wants to sleep in.",
    "question": "What is tomorrow's plan?",
    "twist": "",
    "deeperQuestion": "Would you be comfortable spending half a day separately?",
    "zh": {
      "title": "旅行步調",
      "scenario": "旅行時，一人想早起看景點，一人想睡晚一點。",
      "question": "明早怎樣安排？",
      "twist": "",
      "deeperQuestion": "你們介意分開活動半天嗎？"
    }
  },
  {
    "id": "ponder-v2-couple-016",
    "category": "Couple",
    "emoji": "💗",
    "title": "Birthday wishes",
    "scenario": "Your partner asks what you want for your birthday.",
    "question": "Would you tell them or leave room for a surprise?",
    "twist": "",
    "deeperQuestion": "Is there a kind of celebration you do not enjoy?",
    "zh": {
      "title": "生日想要",
      "scenario": "生日快到了，伴侶問你想要甚麼。",
      "question": "你會直接講，還是想留點驚喜？",
      "twist": "",
      "deeperQuestion": "有甚麼慶祝方式是你不喜歡的？"
    }
  },
  {
    "id": "ponder-v2-couple-017",
    "category": "Couple",
    "emoji": "💗",
    "title": "A compliment",
    "scenario": "Think of something small your partner did recently.",
    "question": "What would you like to appreciate?",
    "twist": "",
    "deeperQuestion": "How could you say that compliment now?",
    "zh": {
      "title": "一句稱讚",
      "scenario": "想起伴侶最近做的一件小事。",
      "question": "你最想稱讚哪一點？",
      "twist": "",
      "deeperQuestion": "現在可以怎樣把這句稱讚說出來？"
    }
  },
  {
    "id": "ponder-v2-couple-018",
    "category": "Couple",
    "emoji": "💗",
    "title": "Meeting family",
    "scenario": "Your partner is having dinner with your family for the first time.",
    "question": "What would you tell them beforehand?",
    "twist": "",
    "deeperQuestion": "How would you help if they felt uncomfortable?",
    "zh": {
      "title": "見家人",
      "scenario": "伴侶第一次和你的家人吃飯。",
      "question": "你會先提醒對方甚麼？",
      "twist": "",
      "deeperQuestion": "當對方不自在時，你會怎樣幫忙？"
    }
  },
  {
    "id": "ponder-v2-couple-019",
    "category": "Couple",
    "emoji": "💗",
    "title": "Living together",
    "scenario": "You like things tidy and your partner leaves things around.",
    "question": "Which space matters most to you?",
    "twist": "",
    "deeperQuestion": "Where could you be more flexible?",
    "zh": {
      "title": "同住習慣",
      "scenario": "你喜歡東西放整齊，伴侶習慣隨手放。",
      "question": "你最在意家中哪個地方？",
      "twist": "",
      "deeperQuestion": "哪個地方你願意放寬一點？"
    }
  },
  {
    "id": "ponder-v2-couple-020",
    "category": "Couple",
    "emoji": "💗",
    "title": "Five minutes",
    "scenario": "You are both busy and have only five minutes to talk each day.",
    "question": "What would you spend it on?",
    "twist": "",
    "deeperQuestion": "When would this be easiest to keep up?",
    "zh": {
      "title": "每天五分鐘",
      "scenario": "你們最近都很忙，每天只有五分鐘好好說話。",
      "question": "你想用來聊甚麼？",
      "twist": "",
      "deeperQuestion": "甚麼時間最容易真的做到？"
    }
  },
  {
    "id": "ponder-v2-couple-021",
    "category": "Couple",
    "emoji": "💗",
    "title": "After sorry",
    "scenario": "Your partner apologizes for something small, but you still feel hurt.",
    "question": "What would help next?",
    "twist": "",
    "deeperQuestion": "How much time do you usually need before talking again?",
    "zh": {
      "title": "道歉之後",
      "scenario": "伴侶為一件小事道歉了，但你還有點不開心。",
      "question": "你希望接下來發生甚麼？",
      "twist": "",
      "deeperQuestion": "你通常需要多久才準備好再聊天？"
    }
  },
  {
    "id": "ponder-v2-couple-022",
    "category": "Couple",
    "emoji": "💗",
    "title": "A shared budget",
    "scenario": "You want to save for a trip together.",
    "question": "What expense would you cut first?",
    "twist": "",
    "deeperQuestion": "What small pleasure would you want to keep?",
    "zh": {
      "title": "兩人的預算",
      "scenario": "你們想一起儲錢去旅行。",
      "question": "你願意先減少哪一項開支？",
      "twist": "",
      "deeperQuestion": "哪一項小享受，你不想放棄？"
    }
  },
  {
    "id": "ponder-v2-couple-023",
    "category": "Couple",
    "emoji": "💗",
    "title": "Comfortable silence",
    "scenario": "You sit together without speaking for ten minutes.",
    "question": "Does that feel comfortable or awkward?",
    "twist": "",
    "deeperQuestion": "During what activity does silence feel easiest?",
    "zh": {
      "title": "沉默也舒服",
      "scenario": "你們一起坐著，已經十分鐘沒有說話。",
      "question": "你覺得舒服，還是需要找話題？",
      "twist": "",
      "deeperQuestion": "一起做甚麼事時，你最不怕冷場？"
    }
  },
  {
    "id": "ponder-v2-couple-024",
    "category": "Couple",
    "emoji": "💗",
    "title": "Being misunderstood",
    "scenario": "Your partner takes a joke seriously and feels mocked.",
    "question": "How would you respond?",
    "twist": "",
    "deeperQuestion": "What kind of joke would you prefer to avoid?",
    "zh": {
      "title": "被誤會",
      "scenario": "伴侶把你的玩笑當真，覺得被取笑。",
      "question": "你會怎樣回應？",
      "twist": "",
      "deeperQuestion": "有哪類玩笑，你希望彼此少開？"
    }
  },
  {
    "id": "ponder-v2-couple-025",
    "category": "Couple",
    "emoji": "💗",
    "title": "Different hobbies",
    "scenario": "Your partner loves a hobby you do not understand.",
    "question": "How could you try joining in once?",
    "twist": "",
    "deeperQuestion": "Which of your hobbies would you like them to try?",
    "zh": {
      "title": "各自的興趣",
      "scenario": "伴侶很喜歡一項你不太懂的興趣。",
      "question": "你願意怎樣參與一次？",
      "twist": "",
      "deeperQuestion": "你希望對方試試你的哪一項興趣？"
    }
  },
  {
    "id": "ponder-v2-couple-026",
    "category": "Couple",
    "emoji": "💗",
    "title": "Forgetting something",
    "scenario": "Your partner forgets a small wish you mentioned.",
    "question": "Would you remind them or feel disappointed?",
    "twist": "",
    "deeperQuestion": "What is something you really want them to remember?",
    "zh": {
      "title": "忘記小事",
      "scenario": "伴侶忘了你提過的小願望。",
      "question": "你會再講一次，還是有點失望？",
      "twist": "",
      "deeperQuestion": "有甚麼事是你很希望對方記得的？"
    }
  },
  {
    "id": "ponder-v2-couple-027",
    "category": "Couple",
    "emoji": "💗",
    "title": "A sick day",
    "scenario": "You are home with a cold.",
    "question": "What one thing would make you feel cared for?",
    "twist": "",
    "deeperQuestion": "What well-meant action might interrupt your rest?",
    "zh": {
      "title": "生病的一天",
      "scenario": "你感冒在家。",
      "question": "伴侶做哪一件事，會讓你覺得被照顧？",
      "twist": "",
      "deeperQuestion": "有甚麼好意反而會打擾你休息？"
    }
  },
  {
    "id": "ponder-v2-couple-028",
    "category": "Couple",
    "emoji": "💗",
    "title": "An evening apart",
    "scenario": "You live far apart and can only call tonight.",
    "question": "What would help you feel together?",
    "twist": "",
    "deeperQuestion": "What small activity could you do together on the call?",
    "zh": {
      "title": "遠距離晚上",
      "scenario": "你們住得很遠，今晚只能通電話。",
      "question": "怎樣聊會比較像在一起？",
      "twist": "",
      "deeperQuestion": "除了聊天，你們可以同步做甚麼小事？"
    }
  },
  {
    "id": "ponder-v2-couple-029",
    "category": "Couple",
    "emoji": "💗",
    "title": "How often to meet",
    "scenario": "You want to meet daily; your partner is happy with three times a week.",
    "question": "How could you find a balance?",
    "twist": "",
    "deeperQuestion": "What kind of contact feels enough on other days?",
    "zh": {
      "title": "相處節奏",
      "scenario": "你想每天見面，伴侶一星期見三次就很滿足。",
      "question": "你會怎樣找中間位置？",
      "twist": "",
      "deeperQuestion": "沒有見面的日子，甚麼聯繫方式已經足夠？"
    }
  },
  {
    "id": "ponder-v2-couple-030",
    "category": "Couple",
    "emoji": "💗",
    "title": "Affection in public",
    "scenario": "Your partner wants a hug in public and you do not feel like it.",
    "question": "How would you say so?",
    "twist": "",
    "deeperQuestion": "What kind of affection feels most comfortable to you?",
    "zh": {
      "title": "親密界線",
      "scenario": "伴侶在人多的地方想擁抱你。",
      "question": "你當下不太想，會怎樣表達？",
      "twist": "",
      "deeperQuestion": "哪種表達親密的方式，讓你最自在？"
    }
  },
  {
    "id": "ponder-v2-couple-031",
    "category": "Couple",
    "emoji": "💗",
    "title": "Good news",
    "scenario": "You have good news and want to tell your partner immediately.",
    "question": "What response would you enjoy?",
    "twist": "",
    "deeperQuestion": "What small ritual could you use to celebrate good news?",
    "zh": {
      "title": "好消息",
      "scenario": "你得到一個好消息，馬上想告訴伴侶。",
      "question": "你希望對方怎樣回應？",
      "twist": "",
      "deeperQuestion": "你們想用甚麼小儀式慶祝好消息？"
    }
  },
  {
    "id": "ponder-v2-couple-032",
    "category": "Couple",
    "emoji": "💗",
    "title": "A difficult task",
    "scenario": "You try something unfamiliar and your partner keeps giving instructions.",
    "question": "Do you want help or room to try?",
    "twist": "",
    "deeperQuestion": "How could you ask them to wait before helping?",
    "zh": {
      "title": "不擅長的事",
      "scenario": "你做一件不擅長的事，伴侶一直指導。",
      "question": "你想要幫忙，還是先自己試？",
      "twist": "",
      "deeperQuestion": "你可以用甚麼說法請對方先等等？"
    }
  },
  {
    "id": "ponder-v2-couple-033",
    "category": "Couple",
    "emoji": "💗",
    "title": "Social energy",
    "scenario": "An hour into a party, you want to leave and your partner wants to stay.",
    "question": "What would work?",
    "twist": "",
    "deeperQuestion": "What could you agree on before going out?",
    "zh": {
      "title": "社交電量",
      "scenario": "聚會才過一小時，你已經想回家，伴侶還很投入。",
      "question": "你們會怎樣安排？",
      "twist": "",
      "deeperQuestion": "出門前可以先約定甚麼？"
    }
  },
  {
    "id": "ponder-v2-couple-034",
    "category": "Couple",
    "emoji": "💗",
    "title": "A new habit",
    "scenario": "You want your time together to feel better.",
    "question": "What small habit could you try this week?",
    "twist": "",
    "deeperQuestion": "If you miss a day, how would you restart?",
    "zh": {
      "title": "一個新習慣",
      "scenario": "你們想讓相處舒服一點。",
      "question": "這星期最想一起試哪個小習慣？",
      "twist": "",
      "deeperQuestion": "如果忘了一天，你希望怎樣重新開始？"
    }
  },
  {
    "id": "ponder-v2-couple-035",
    "category": "Couple",
    "emoji": "💗",
    "title": "A shared corner",
    "scenario": "There is room for one piece of furniture at home.",
    "question": "What would you like that corner to be for?",
    "twist": "",
    "deeperQuestion": "Who most needs a place to rest there?",
    "zh": {
      "title": "共同空間",
      "scenario": "家中多了一個小角落，只能放一件家具。",
      "question": "你們想把它用來做甚麼？",
      "twist": "",
      "deeperQuestion": "這個角落最需要讓誰休息一下？"
    }
  },
  {
    "id": "ponder-v2-couple-036",
    "category": "Couple",
    "emoji": "💗",
    "title": "Different tastes",
    "scenario": "You love spicy food and your partner does not.",
    "question": "How would you cook dinner together?",
    "twist": "",
    "deeperQuestion": "What dish do you both keep coming back to?",
    "zh": {
      "title": "不同口味",
      "scenario": "你愛吃辣，伴侶完全不吃辣。",
      "question": "一起煮晚餐時怎樣安排？",
      "twist": "",
      "deeperQuestion": "有哪道菜是你們都吃不厭的？"
    }
  },
  {
    "id": "ponder-v2-couple-037",
    "category": "Couple",
    "emoji": "💗",
    "title": "Staying in",
    "scenario": "You planned to go out, but today you want to stay home.",
    "question": "How would you tell your partner?",
    "twist": "",
    "deeperQuestion": "What simple alternative could you offer?",
    "zh": {
      "title": "不想出門",
      "scenario": "約好了出去，但你今天只想留在家。",
      "question": "你會怎樣跟伴侶說？",
      "twist": "",
      "deeperQuestion": "你可以提出哪個簡單的替代安排？"
    }
  },
  {
    "id": "ponder-v2-couple-038",
    "category": "Couple",
    "emoji": "💗",
    "title": "A busy week",
    "scenario": "Your partner has a very busy work week.",
    "question": "How could you help without adding another task?",
    "twist": "",
    "deeperQuestion": "What would you ask first to check what they need?",
    "zh": {
      "title": "忙碌的一週",
      "scenario": "伴侶這星期工作很忙。",
      "question": "你想怎樣支持，又不增加對方負擔？",
      "twist": "",
      "deeperQuestion": "你會先問哪一句，確認對方真的需要？"
    }
  },
  {
    "id": "ponder-v2-couple-039",
    "category": "Couple",
    "emoji": "💗",
    "title": "Deciding together",
    "scenario": "You have spent twenty minutes choosing a restaurant.",
    "question": "What simple rule would help you decide?",
    "twist": "",
    "deeperQuestion": "Who could offer two choices next time?",
    "zh": {
      "title": "一起做決定",
      "scenario": "你們挑餐廳挑了二十分鐘。",
      "question": "你想訂甚麼小規則，快一點決定？",
      "twist": "",
      "deeperQuestion": "下次輪到誰先提出兩個選擇？"
    }
  },
  {
    "id": "ponder-v2-couple-040",
    "category": "Couple",
    "emoji": "💗",
    "title": "Saying no",
    "scenario": "Your partner invites you to an activity you do not enjoy.",
    "question": "How would you decline?",
    "twist": "",
    "deeperQuestion": "If it matters a lot to them, how would you discuss it?",
    "zh": {
      "title": "說不的時候",
      "scenario": "伴侶邀你參加一個活動，你其實沒興趣。",
      "question": "你會怎樣拒絕？",
      "twist": "",
      "deeperQuestion": "如果活動對對方很重要，你會怎樣商量？"
    }
  },
  {
    "id": "ponder-v2-couple-041",
    "category": "Couple",
    "emoji": "💗",
    "title": "The first meeting",
    "scenario": "Think back to your first meeting.",
    "question": "What small thing did you notice first?",
    "twist": "",
    "deeperQuestion": "What later turned out differently from your first impression?",
    "zh": {
      "title": "記得初見",
      "scenario": "回想第一次見面。",
      "question": "你最先注意到對方哪個小地方？",
      "twist": "",
      "deeperQuestion": "後來發現有哪一點跟第一印象不同？"
    }
  },
  {
    "id": "ponder-v2-couple-042",
    "category": "Couple",
    "emoji": "💗",
    "title": "A walk together",
    "scenario": "You can take a half-hour walk tonight.",
    "question": "What would you like to talk about?",
    "twist": "",
    "deeperQuestion": "Which route would help you relax?",
    "zh": {
      "title": "一起走路",
      "scenario": "今晚你們可以散步半小時。",
      "question": "你想沿途聊甚麼？",
      "twist": "",
      "deeperQuestion": "哪條路會讓你比較放鬆？"
    }
  },
  {
    "id": "ponder-v2-couple-043",
    "category": "Couple",
    "emoji": "💗",
    "title": "An unsuitable gift",
    "scenario": "Your partner gives you a thoughtful gift you will rarely use.",
    "question": "What would you do?",
    "twist": "",
    "deeperQuestion": "Would you rather be asked what you need or be surprised?",
    "zh": {
      "title": "收到不合用的禮物",
      "scenario": "伴侶送的禮物很有心意，但你不太會用。",
      "question": "你會怎樣處理？",
      "twist": "",
      "deeperQuestion": "你希望禮物可以直接問需要，還是保留驚喜？"
    }
  },
  {
    "id": "ponder-v2-couple-044",
    "category": "Couple",
    "emoji": "💗",
    "title": "Splitting a bill",
    "scenario": "Your incomes differ, but you usually split bills equally.",
    "question": "Does that feel comfortable?",
    "twist": "",
    "deeperQuestion": "How would you start a conversation about the budget?",
    "zh": {
      "title": "分開付款",
      "scenario": "你們收入不同，卻常常平均分帳。",
      "question": "你覺得這樣舒服嗎？",
      "twist": "",
      "deeperQuestion": "你想怎樣開口談一次預算？"
    }
  },
  {
    "id": "ponder-v2-couple-045",
    "category": "Couple",
    "emoji": "💗",
    "title": "Bedtime habits",
    "scenario": "One of you wants to talk at bedtime; the other wants to sleep.",
    "question": "What arrangement could work?",
    "twist": "",
    "deeperQuestion": "When else could you make time to talk?",
    "zh": {
      "title": "睡前習慣",
      "scenario": "一人睡前想聊天，一人躺下就想睡。",
      "question": "你們可以怎樣安排？",
      "twist": "",
      "deeperQuestion": "可以把聊天移到哪個時間？"
    }
  },
  {
    "id": "ponder-v2-couple-046",
    "category": "Couple",
    "emoji": "💗",
    "title": "Being interrupted",
    "scenario": "Halfway through your story, your partner starts their own.",
    "question": "How would you continue?",
    "twist": "",
    "deeperQuestion": "What follow-up would show you they are listening?",
    "zh": {
      "title": "被打斷",
      "scenario": "你講到一半，伴侶接過話題說自己的故事。",
      "question": "你會怎樣繼續？",
      "twist": "",
      "deeperQuestion": "你想聽到對方問哪一句跟進問題？"
    }
  },
  {
    "id": "ponder-v2-couple-047",
    "category": "Couple",
    "emoji": "💗",
    "title": "Time alone",
    "scenario": "You want an evening to yourself.",
    "question": "How would you explain it to your partner?",
    "twist": "",
    "deeperQuestion": "What solo activity helps you return with more energy?",
    "zh": {
      "title": "各自充電",
      "scenario": "你想留一個晚上給自己。",
      "question": "怎樣跟伴侶說，對方比較容易理解？",
      "twist": "",
      "deeperQuestion": "獨處時做甚麼，會讓你更有精神相處？"
    }
  },
  {
    "id": "ponder-v2-couple-048",
    "category": "Couple",
    "emoji": "💗",
    "title": "A different date",
    "scenario": "Your dates have started to feel repetitive.",
    "question": "What simple change would you try next time?",
    "twist": "",
    "deeperQuestion": "Is there a place you keep mentioning but never visit?",
    "zh": {
      "title": "約會新鮮感",
      "scenario": "你們最近每次約會都吃同一類飯。",
      "question": "下一次想試甚麼簡單的新安排？",
      "twist": "",
      "deeperQuestion": "有哪個一直說想去、卻還沒去的地方？"
    }
  },
  {
    "id": "ponder-v2-couple-049",
    "category": "Couple",
    "emoji": "💗",
    "title": "Sharing stress",
    "scenario": "You are stressed but do not want every meeting to become a complaint session.",
    "question": "How would you let your partner know?",
    "twist": "",
    "deeperQuestion": "What one thing could they take off your plate today?",
    "zh": {
      "title": "分享壓力",
      "scenario": "你最近壓力很大，但不想每次見面都在抱怨。",
      "question": "你會怎樣讓伴侶知道？",
      "twist": "",
      "deeperQuestion": "今天你最希望對方幫你減少哪一件事？"
    }
  },
  {
    "id": "ponder-v2-couple-050",
    "category": "Couple",
    "emoji": "💗",
    "title": "A photo together",
    "scenario": "You are choosing one photo together to display at home.",
    "question": "Which moment would you pick?",
    "twist": "",
    "deeperQuestion": "What happened that day that the photo does not show?",
    "zh": {
      "title": "兩人的照片",
      "scenario": "你要挑一張合照放在房間。",
      "question": "你會選哪個時刻？",
      "twist": "",
      "deeperQuestion": "那天有甚麼照片拍不到的小事？"
    }
  },
  {
    "id": "ponder-v2-couple-051",
    "category": "Couple",
    "emoji": "💗",
    "title": "Different opinions",
    "scenario": "You watch the same film and have opposite reactions.",
    "question": "What would you ask your partner?",
    "twist": "",
    "deeperQuestion": "Did they enjoy anything you had not noticed?",
    "zh": {
      "title": "意見不同",
      "scenario": "你們看完同一部電影，喜好完全相反。",
      "question": "你想問對方哪個問題？",
      "twist": "",
      "deeperQuestion": "對方喜歡的部分，有沒有一點是你原本沒留意的？"
    }
  },
  {
    "id": "ponder-v2-couple-052",
    "category": "Couple",
    "emoji": "💗",
    "title": "An extra hour",
    "scenario": "You unexpectedly get an extra hour together.",
    "question": "What would you do that usually gets skipped?",
    "twist": "",
    "deeperQuestion": "Could you make time for this next week?",
    "zh": {
      "title": "時間變多了",
      "scenario": "今天突然多了一小時可以相處。",
      "question": "你想用來做甚麼平常沒空做的事？",
      "twist": "",
      "deeperQuestion": "你們可以把這件事排進下星期嗎？"
    }
  },
  {
    "id": "ponder-v2-couple-053",
    "category": "Couple",
    "emoji": "💗",
    "title": "Outfit advice",
    "scenario": "Your partner asks about an outfit you do not like.",
    "question": "How would you answer?",
    "twist": "",
    "deeperQuestion": "Would you prefer a direct opinion or encouragement first?",
    "zh": {
      "title": "衣著建議",
      "scenario": "伴侶問你這件衣服好不好看，你不太喜歡。",
      "question": "你會怎樣回答？",
      "twist": "",
      "deeperQuestion": "你自己想聽直接意見，還是先聽鼓勵？"
    }
  },
  {
    "id": "ponder-v2-couple-054",
    "category": "Couple",
    "emoji": "💗",
    "title": "Family comments",
    "scenario": "A relative criticizes your plans in front of both of you.",
    "question": "How would you like your partner to respond?",
    "twist": "",
    "deeperQuestion": "What sentence could you agree to use to support each other?",
    "zh": {
      "title": "家人插話",
      "scenario": "家人當著伴侶的面批評你們的安排。",
      "question": "你希望伴侶怎樣回應？",
      "twist": "",
      "deeperQuestion": "事前可以約定哪一句話，幫彼此解圍？"
    }
  },
  {
    "id": "ponder-v2-couple-055",
    "category": "Couple",
    "emoji": "💗",
    "title": "An important day",
    "scenario": "You have something nerve-racking tomorrow.",
    "question": "What could your partner do tonight that would help most?",
    "twist": "",
    "deeperQuestion": "How would you like to unwind together afterward?",
    "zh": {
      "title": "重要的日子",
      "scenario": "明天你有一件很緊張的事。",
      "question": "伴侶今晚怎樣陪你會最有用？",
      "twist": "",
      "deeperQuestion": "明天結束後，你想一起怎樣放鬆？"
    }
  },
  {
    "id": "ponder-v2-couple-056",
    "category": "Couple",
    "emoji": "💗",
    "title": "Who makes the plans",
    "scenario": "You planned the last three dates.",
    "question": "How would you invite your partner to take a turn?",
    "twist": "",
    "deeperQuestion": "What would you agree on before taking turns?",
    "zh": {
      "title": "誰來安排",
      "scenario": "最近三次約會都是你安排的。",
      "question": "你想怎樣請對方也參與？",
      "twist": "",
      "deeperQuestion": "如果輪流安排，你們需要先講清楚甚麼？"
    }
  },
  {
    "id": "ponder-v2-couple-057",
    "category": "Couple",
    "emoji": "💗",
    "title": "Different schedules",
    "scenario": "You wake early and your partner stays up late.",
    "question": "What time together would you protect?",
    "twist": "",
    "deeperQuestion": "What noise or habit might disturb the other's rest?",
    "zh": {
      "title": "不同作息",
      "scenario": "你早起，伴侶很晚才睡。",
      "question": "你們一天裡最想保留哪段共同時間？",
      "twist": "",
      "deeperQuestion": "有哪個聲音或習慣會打擾彼此休息？"
    }
  },
  {
    "id": "ponder-v2-couple-058",
    "category": "Couple",
    "emoji": "💗",
    "title": "Your own friends",
    "scenario": "Your partner has friends you barely know.",
    "question": "How would you like to get to know them?",
    "twist": "",
    "deeperQuestion": "Would meeting one or two people feel easier than a whole group?",
    "zh": {
      "title": "自己的朋友",
      "scenario": "伴侶的朋友圈有很多你不認識的人。",
      "question": "你想怎樣慢慢熟悉？",
      "twist": "",
      "deeperQuestion": "先見一兩個人，還是一起聚會，你比較自在？"
    }
  },
  {
    "id": "ponder-v2-couple-059",
    "category": "Couple",
    "emoji": "💗",
    "title": "An unfinished task",
    "scenario": "Your partner promised to clean the kitchen but forgot.",
    "question": "How would you remind them?",
    "twist": "",
    "deeperQuestion": "What kind of reminder is easiest for you to receive?",
    "zh": {
      "title": "忘了收拾",
      "scenario": "伴侶答應收拾廚房，結果忘記了。",
      "question": "你會怎樣提醒？",
      "twist": "",
      "deeperQuestion": "哪種提醒方式最容易讓你聽得進去？"
    }
  },
  {
    "id": "ponder-v2-couple-060",
    "category": "Couple",
    "emoji": "💗",
    "title": "A shared goal",
    "scenario": "You want to accomplish something small together in three months.",
    "question": "What would you suggest?",
    "twist": "",
    "deeperQuestion": "What first step could you take tomorrow?",
    "zh": {
      "title": "一項共同目標",
      "scenario": "你們想在三個月內完成一件小事。",
      "question": "你會提議甚麼？",
      "twist": "",
      "deeperQuestion": "第一步小到明天就能做的話，會是甚麼？"
    }
  },
  {
    "id": "ponder-v2-couple-061",
    "category": "Couple",
    "emoji": "💗",
    "title": "Worth keeping",
    "scenario": "You have a habit that may seem ordinary to others.",
    "question": "Which one would you like to keep?",
    "twist": "",
    "deeperQuestion": "How did that habit begin?",
    "zh": {
      "title": "值得留住",
      "scenario": "你們有一個別人看來很普通的習慣。",
      "question": "哪一個你最想一直保留？",
      "twist": "",
      "deeperQuestion": "它是從哪一次開始的？"
    }
  },
  {
    "id": "ponder-v2-couple-062",
    "category": "Couple",
    "emoji": "💗",
    "title": "Your turn to care",
    "scenario": "Your partner usually looks after you.",
    "question": "What would you like to take care of this time?",
    "twist": "",
    "deeperQuestion": "What would you need to learn so they do not have to remind you?",
    "zh": {
      "title": "換你照顧",
      "scenario": "平常多數是伴侶照顧你。",
      "question": "這次你想接手哪一件事？",
      "twist": "",
      "deeperQuestion": "你需要先學會甚麼，才不用對方再提醒？"
    }
  },
  {
    "id": "ponder-v2-couple-063",
    "category": "Couple",
    "emoji": "💗",
    "title": "A small surprise to learn",
    "scenario": "You want to share a harmless little discovery about yourself.",
    "question": "What have you been enjoying lately?",
    "twist": "",
    "deeperQuestion": "Would you like them to try it with you?",
    "zh": {
      "title": "一個小秘密",
      "scenario": "你想讓伴侶知道一件無傷大雅的小事。",
      "question": "你最近迷上了甚麼？",
      "twist": "",
      "deeperQuestion": "你想邀對方一起試一次嗎？"
    }
  },
  {
    "id": "ponder-v2-couple-064",
    "category": "Couple",
    "emoji": "💗",
    "title": "Different expectations",
    "scenario": "You thought tonight was a date, but your partner invited friends.",
    "question": "What would you ask first?",
    "twist": "",
    "deeperQuestion": "How could you distinguish couple time from group plans next time?",
    "zh": {
      "title": "期待落差",
      "scenario": "你以為今晚是約會，伴侶卻約了其他朋友。",
      "question": "你會先問甚麼？",
      "twist": "",
      "deeperQuestion": "以後怎樣分清楚「兩人時間」和「朋友聚會」？"
    }
  },
  {
    "id": "ponder-v2-couple-065",
    "category": "Couple",
    "emoji": "💗",
    "title": "Not your fault",
    "scenario": "Your partner seems upset and speaks more coldly than usual.",
    "question": "Would you give space or ask about it?",
    "twist": "",
    "deeperQuestion": "How could you explain that your bad mood is not aimed at them?",
    "zh": {
      "title": "不是你的錯",
      "scenario": "伴侶心情差，說話比平常冷淡。",
      "question": "你會先給空間，還是問一句？",
      "twist": "",
      "deeperQuestion": "你心情差時，想怎樣提醒對方不是針對他？"
    }
  },
  {
    "id": "ponder-v2-couple-066",
    "category": "Couple",
    "emoji": "💗",
    "title": "Feeling noticed",
    "scenario": "Think of something small you have worked hard on recently.",
    "question": "What would you like your partner to notice?",
    "twist": "",
    "deeperQuestion": "What recent effort of theirs deserves a thank-you?",
    "zh": {
      "title": "想被看見",
      "scenario": "想起最近一件你很努力的小事。",
      "question": "你希望伴侶注意到甚麼？",
      "twist": "",
      "deeperQuestion": "對方最近的哪份努力，是你想補一句謝謝的？"
    }
  },
  {
    "id": "ponder-v2-couple-067",
    "category": "Couple",
    "emoji": "💗",
    "title": "A different setting",
    "scenario": "You need to discuss something a little difficult.",
    "question": "Where would you feel more relaxed talking?",
    "twist": "",
    "deeperQuestion": "Would you prefer a message beforehand or to start in person?",
    "zh": {
      "title": "換個地方",
      "scenario": "你們想談一件有點難開口的事。",
      "question": "在哪裡談，你會比較放鬆？",
      "twist": "",
      "deeperQuestion": "你想先傳訊息提一下，還是見面才說？"
    }
  },
  {
    "id": "ponder-v2-couple-068",
    "category": "Couple",
    "emoji": "💗",
    "title": "Keeping a promise",
    "scenario": "Your partner keeps agreeing to exercise together but rarely does.",
    "question": "How would you reset the plan?",
    "twist": "",
    "deeperQuestion": "What smaller goal would you both genuinely choose?",
    "zh": {
      "title": "口頭承諾",
      "scenario": "伴侶答應一起做運動，但常常沒有實行。",
      "question": "你會怎樣重新安排？",
      "twist": "",
      "deeperQuestion": "怎樣的小目標，是你們都真的願意做的？"
    }
  },
  {
    "id": "ponder-v2-couple-069",
    "category": "Couple",
    "emoji": "💗",
    "title": "Alike and different",
    "scenario": "You are alike in some ways and different in others.",
    "question": "Which difference makes life more interesting?",
    "twist": "",
    "deeperQuestion": "What small skill have you learned from them?",
    "zh": {
      "title": "相似與不同",
      "scenario": "你們有些地方很像，有些很不同。",
      "question": "哪一個不同反而令生活更有趣？",
      "twist": "",
      "deeperQuestion": "你從對方身上學會了甚麼小技能？"
    }
  },
  {
    "id": "ponder-v2-couple-070",
    "category": "Couple",
    "emoji": "💗",
    "title": "When you miss them",
    "scenario": "You cannot meet for a few days.",
    "question": "What small thing reminds you of your partner?",
    "twist": "",
    "deeperQuestion": "What would you send them to share that moment?",
    "zh": {
      "title": "想念的時候",
      "scenario": "你們幾天不能見面。",
      "question": "甚麼小事最容易讓你想起對方？",
      "twist": "",
      "deeperQuestion": "你會想傳甚麼給對方分享那一刻？"
    }
  },
  {
    "id": "ponder-v2-couple-071",
    "category": "Couple",
    "emoji": "💗",
    "title": "Learning together",
    "scenario": "You can take one free class together.",
    "question": "What would you like to learn?",
    "twist": "",
    "deeperQuestion": "Who would ask more questions, and who would practise more?",
    "zh": {
      "title": "一起學習",
      "scenario": "你們可以免費上一次課。",
      "question": "你最想和伴侶學甚麼？",
      "twist": "",
      "deeperQuestion": "誰會比較敢問問題，誰會比較肯練習？"
    }
  },
  {
    "id": "ponder-v2-couple-072",
    "category": "Couple",
    "emoji": "💗",
    "title": "Unexpected visitors",
    "scenario": "Your partner brings friends home when you planned to rest.",
    "question": "What would you say?",
    "twist": "",
    "deeperQuestion": "What would you like to know before someone visits?",
    "zh": {
      "title": "臨時訪客",
      "scenario": "伴侶突然帶朋友回家，而你原本想休息。",
      "question": "你會怎樣講？",
      "twist": "",
      "deeperQuestion": "家裡有訪客前，你希望提早知道哪些事？"
    }
  },
  {
    "id": "ponder-v2-couple-073",
    "category": "Couple",
    "emoji": "💗",
    "title": "After a small argument",
    "scenario": "You have cooled down after a small argument.",
    "question": "How would you reconnect?",
    "twist": "",
    "deeperQuestion": "Would words, a hug, or a little time help most?",
    "zh": {
      "title": "小吵之後",
      "scenario": "你們剛為小事吵過，現在都冷靜了。",
      "question": "你會怎樣開始和好？",
      "twist": "",
      "deeperQuestion": "你比較接受一句話、一個擁抱，還是一點時間？"
    }
  },
  {
    "id": "ponder-v2-couple-074",
    "category": "Couple",
    "emoji": "💗",
    "title": "Shopping together",
    "scenario": "You are buying something to share and prefer different designs.",
    "question": "What would you compare first?",
    "twist": "",
    "deeperQuestion": "Which matters most to each of you: looks, price, or durability?",
    "zh": {
      "title": "一起購物",
      "scenario": "你們要買一件共用的東西，喜歡的款式不同。",
      "question": "你會先比較哪一點？",
      "twist": "",
      "deeperQuestion": "外觀、價格、耐用程度，你們各自最在意哪個？"
    }
  },
  {
    "id": "ponder-v2-couple-075",
    "category": "Couple",
    "emoji": "💗",
    "title": "Reassurance",
    "scenario": "Your partner has been doubting themselves.",
    "question": "What specific thing would you remind them of?",
    "twist": "",
    "deeperQuestion": "What encouragement helps when you feel low?",
    "zh": {
      "title": "一句安心話",
      "scenario": "伴侶最近對自己沒有信心。",
      "question": "你想告訴對方哪件具體的小事？",
      "twist": "",
      "deeperQuestion": "你低落時，哪一句鼓勵通常最有用？"
    }
  },
  {
    "id": "ponder-v2-couple-076",
    "category": "Couple",
    "emoji": "💗",
    "title": "Names we use",
    "scenario": "Think about the names you use for each other.",
    "question": "Which feels most affectionate?",
    "twist": "",
    "deeperQuestion": "Do you prefer the same name in public and in private?",
    "zh": {
      "title": "喜歡的稱呼",
      "scenario": "你們平常有自己的稱呼。",
      "question": "哪個稱呼最讓你覺得親近？",
      "twist": "",
      "deeperQuestion": "在人前和私下，你喜歡的稱呼一樣嗎？"
    }
  },
  {
    "id": "ponder-v2-couple-077",
    "category": "Couple",
    "emoji": "💗",
    "title": "Something to keep",
    "scenario": "While moving, you can keep one object tied to a shared memory.",
    "question": "What would you choose?",
    "twist": "",
    "deeperQuestion": "What little moment does it bring back?",
    "zh": {
      "title": "重要物件",
      "scenario": "搬家時只能留下一件有共同回憶的物品。",
      "question": "你會選甚麼？",
      "twist": "",
      "deeperQuestion": "它讓你記起哪個小片段？"
    }
  },
  {
    "id": "ponder-v2-couple-078",
    "category": "Couple",
    "emoji": "💗",
    "title": "Getting lost",
    "scenario": "You take a wrong turn on a trip.",
    "question": "Would you find the route immediately or explore a little?",
    "twist": "",
    "deeperQuestion": "Who usually settles first when plans change?",
    "zh": {
      "title": "一起迷路",
      "scenario": "旅行時你們走錯了路。",
      "question": "你想先找路，還是順便逛一下？",
      "twist": "",
      "deeperQuestion": "遇到意外時，誰通常先冷靜下來？"
    }
  },
  {
    "id": "ponder-v2-couple-079",
    "category": "Couple",
    "emoji": "💗",
    "title": "A new job",
    "scenario": "Your partner starts a job with different hours.",
    "question": "What would you need to rearrange first?",
    "twist": "",
    "deeperQuestion": "What existing habit would you most like to protect?",
    "zh": {
      "title": "新工作",
      "scenario": "伴侶換了工作，生活時間跟以前不同。",
      "question": "你們最需要重新安排甚麼？",
      "twist": "",
      "deeperQuestion": "哪個原有習慣，是你最想保住的？"
    }
  },
  {
    "id": "ponder-v2-couple-080",
    "category": "Couple",
    "emoji": "💗",
    "title": "Cooking together",
    "scenario": "You are cooking together tonight.",
    "question": "Which part would you like to handle?",
    "twist": "",
    "deeperQuestion": "What would be your backup dinner if it goes wrong?",
    "zh": {
      "title": "一起煮飯",
      "scenario": "你們今晚一起煮飯。",
      "question": "你最想負責哪個部分？",
      "twist": "",
      "deeperQuestion": "如果煮失敗了，你們的後備晚餐是甚麼？"
    }
  },
  {
    "id": "ponder-v2-couple-081",
    "category": "Couple",
    "emoji": "💗",
    "title": "Our list",
    "scenario": "You each list three things to do together this year.",
    "question": "Which would be easiest to start with?",
    "twist": "",
    "deeperQuestion": "Could you choose a date for it now?",
    "zh": {
      "title": "兩人的清單",
      "scenario": "你們各寫三件今年想一起做的事。",
      "question": "哪一件最容易先完成？",
      "twist": "",
      "deeperQuestion": "可以現在就定一個日期嗎？"
    }
  },
  {
    "id": "ponder-v2-couple-082",
    "category": "Couple",
    "emoji": "💗",
    "title": "Being compared",
    "scenario": "Your partner mentions how another couple does things.",
    "question": "What would you rather not be compared on?",
    "twist": "",
    "deeperQuestion": "What is one habit you like about your own relationship?",
    "zh": {
      "title": "被比較",
      "scenario": "伴侶提起另一對情侶的相處方式。",
      "question": "你最不想被拿來比較甚麼？",
      "twist": "",
      "deeperQuestion": "你喜歡你們自己哪一個獨特習慣？"
    }
  },
  {
    "id": "ponder-v2-couple-083",
    "category": "Couple",
    "emoji": "💗",
    "title": "Keeping memories",
    "scenario": "You want to keep everyday memories without always taking photos.",
    "question": "How would you do it?",
    "twist": "",
    "deeperQuestion": "What moment from this week is worth keeping?",
    "zh": {
      "title": "收好回憶",
      "scenario": "你們想記錄日常，又不想每次都拍照。",
      "question": "你會用甚麼方法？",
      "twist": "",
      "deeperQuestion": "這星期有哪一刻值得記下來？"
    }
  },
  {
    "id": "ponder-v2-couple-084",
    "category": "Couple",
    "emoji": "💗",
    "title": "A new friendship",
    "scenario": "Your partner often mentions a new friend and you are curious.",
    "question": "How would you ask without interrogating them?",
    "twist": "",
    "deeperQuestion": "What do you usually like to know about someone's friends?",
    "zh": {
      "title": "新的朋友",
      "scenario": "伴侶常提起一位新朋友，你有點好奇。",
      "question": "你會怎樣問，才像聊天而不是盤問？",
      "twist": "",
      "deeperQuestion": "你通常想知道朋友的哪些事？"
    }
  },
  {
    "id": "ponder-v2-couple-085",
    "category": "Couple",
    "emoji": "💗",
    "title": "Moving together",
    "scenario": "You want to exercise together but have different energy levels.",
    "question": "What would keep it comfortable?",
    "twist": "",
    "deeperQuestion": "What activity would let you each move at your own pace?",
    "zh": {
      "title": "運動步調",
      "scenario": "你們想一起散步或運動，但體力不同。",
      "question": "怎樣安排才不會有人勉強？",
      "twist": "",
      "deeperQuestion": "哪個活動可以讓你們各自用自己的速度？"
    }
  },
  {
    "id": "ponder-v2-couple-086",
    "category": "Couple",
    "emoji": "💗",
    "title": "Family weekends",
    "scenario": "Both families want to see you this weekend.",
    "question": "How could you arrange it without rushing?",
    "twist": "",
    "deeperQuestion": "How much time would you reserve for yourselves next time?",
    "zh": {
      "title": "週末家人",
      "scenario": "兩邊家人都想約你們這個週末吃飯。",
      "question": "你們怎樣安排比較不趕？",
      "twist": "",
      "deeperQuestion": "下次你們想先留多少時間給自己？"
    }
  },
  {
    "id": "ponder-v2-couple-087",
    "category": "Couple",
    "emoji": "💗",
    "title": "A rainy date",
    "scenario": "Rain interrupts your outdoor date.",
    "question": "What indoor plan would you suggest?",
    "twist": "",
    "deeperQuestion": "Could you keep the part you were most looking forward to?",
    "zh": {
      "title": "突然下雨",
      "scenario": "準備好的戶外約會遇上下雨。",
      "question": "你會提議甚麼室內替代活動？",
      "twist": "",
      "deeperQuestion": "原本最期待的部分，可以用另一種方式做到嗎？"
    }
  },
  {
    "id": "ponder-v2-couple-088",
    "category": "Couple",
    "emoji": "💗",
    "title": "Knowing when to stop",
    "scenario": "Your partner shares an embarrassing story about you with friends.",
    "question": "How would you signal discomfort?",
    "twist": "",
    "deeperQuestion": "What stories would you like them to ask about before sharing?",
    "zh": {
      "title": "知道分寸",
      "scenario": "伴侶在朋友面前講了你一件糗事。",
      "question": "你覺得不舒服，會怎樣提醒？",
      "twist": "",
      "deeperQuestion": "哪些故事你希望先問過再分享？"
    }
  },
  {
    "id": "ponder-v2-couple-089",
    "category": "Couple",
    "emoji": "💗",
    "title": "Caring for a pet",
    "scenario": "You are looking after a friend's pet for three days.",
    "question": "What tasks would you divide beforehand?",
    "twist": "",
    "deeperQuestion": "What is the backup plan if one of you has to work late?",
    "zh": {
      "title": "照顧寵物",
      "scenario": "你們打算替朋友照顧寵物三天。",
      "question": "你想先分清楚哪些工作？",
      "twist": "",
      "deeperQuestion": "如果其中一人臨時加班，後備安排是甚麼？"
    }
  },
  {
    "id": "ponder-v2-couple-090",
    "category": "Couple",
    "emoji": "💗",
    "title": "Talking about money",
    "scenario": "You want to discuss expenses but worry it will feel awkward.",
    "question": "How would you begin?",
    "twist": "",
    "deeperQuestion": "Which shared expense would you clarify first?",
    "zh": {
      "title": "講錢的方式",
      "scenario": "你想跟伴侶談開支，但怕氣氛尷尬。",
      "question": "你會怎樣開始？",
      "twist": "",
      "deeperQuestion": "你最想先講清楚哪一筆共同開支？"
    }
  },
  {
    "id": "ponder-v2-couple-091",
    "category": "Couple",
    "emoji": "💗",
    "title": "Where to live",
    "scenario": "If you move together, one values a short commute and the other quiet.",
    "question": "What would you check in person first?",
    "twist": "",
    "deeperQuestion": "What could you try being flexible about?",
    "zh": {
      "title": "住在哪裡",
      "scenario": "如果一起搬家，一人重視上班近，一人重視環境安靜。",
      "question": "你會先實地看甚麼？",
      "twist": "",
      "deeperQuestion": "哪一點是你可以試著讓步的？"
    }
  },
  {
    "id": "ponder-v2-couple-092",
    "category": "Couple",
    "emoji": "💗",
    "title": "Growing together",
    "scenario": "Compared with when you first met, something now feels easier between you.",
    "question": "What is it?",
    "twist": "",
    "deeperQuestion": "What small change helped you get there?",
    "zh": {
      "title": "相處的改變",
      "scenario": "和剛認識時相比，你們有一件事變得更容易了。",
      "question": "你想到甚麼？",
      "twist": "",
      "deeperQuestion": "是誰做了哪個小改變，幫到了你們？"
    }
  },
  {
    "id": "ponder-v2-couple-093",
    "category": "Couple",
    "emoji": "💗",
    "title": "Just being there",
    "scenario": "Your partner faces a problem you cannot solve.",
    "question": "How could you still be there for them?",
    "twist": "",
    "deeperQuestion": "Would you ask whether they want company or time alone?",
    "zh": {
      "title": "不是解決問題",
      "scenario": "伴侶遇到一件你幫不上忙的事。",
      "question": "你還可以怎樣陪著對方？",
      "twist": "",
      "deeperQuestion": "你會先問對方想獨處，還是想有人陪嗎？"
    }
  },
  {
    "id": "ponder-v2-couple-094",
    "category": "Couple",
    "emoji": "💗",
    "title": "A small invitation",
    "scenario": "You want to know more about your partner's childhood.",
    "question": "What light question would you start with?",
    "twist": "",
    "deeperQuestion": "What memory of your own would you share first?",
    "zh": {
      "title": "一個邀請",
      "scenario": "你想多了解伴侶的童年。",
      "question": "你會先問哪件輕鬆的小事？",
      "twist": "",
      "deeperQuestion": "你願意先分享自己的哪個片段？"
    }
  },
  {
    "id": "ponder-v2-couple-095",
    "category": "Couple",
    "emoji": "💗",
    "title": "Two wishes",
    "scenario": "You want to travel; your partner wants to save for a course.",
    "question": "How would you plan the year?",
    "twist": "",
    "deeperQuestion": "Is there a smaller version that could get both wishes started?",
    "zh": {
      "title": "兩個夢想",
      "scenario": "你想旅行，伴侶想先存錢上課。",
      "question": "你們會怎樣安排今年的計劃？",
      "twist": "",
      "deeperQuestion": "有沒有一個較小的版本，能讓兩件事都開始？"
    }
  },
  {
    "id": "ponder-v2-couple-096",
    "category": "Couple",
    "emoji": "💗",
    "title": "Small things adding up",
    "scenario": "A small issue keeps happening and starts to bother you.",
    "question": "When would you bring it up?",
    "twist": "",
    "deeperQuestion": "How could you stay with this issue without listing every past mistake?",
    "zh": {
      "title": "累積的小事",
      "scenario": "一件小事重複幾次後，你開始介意。",
      "question": "你會選甚麼時候說出來？",
      "twist": "",
      "deeperQuestion": "你可以怎樣只談這件事，不翻舊帳？"
    }
  },
  {
    "id": "ponder-v2-couple-097",
    "category": "Couple",
    "emoji": "💗",
    "title": "Asking for help",
    "scenario": "There is something you hesitate to ask your partner for help with.",
    "question": "What small request could you make?",
    "twist": "",
    "deeperQuestion": "What reaction are you worried about?",
    "zh": {
      "title": "向對方求助",
      "scenario": "你有一件事一直不好意思請伴侶幫忙。",
      "question": "你願意提出甚麼小請求？",
      "twist": "",
      "deeperQuestion": "你怕對方會怎樣想？"
    }
  },
  {
    "id": "ponder-v2-couple-098",
    "category": "Couple",
    "emoji": "💗",
    "title": "Our private joke",
    "scenario": "You share a joke that only the two of you understand.",
    "question": "How did it begin?",
    "twist": "",
    "deeperQuestion": "Does it still make you laugh now?",
    "zh": {
      "title": "我們的玩笑",
      "scenario": "你們之間有一個只有彼此懂的笑點。",
      "question": "它是怎樣開始的？",
      "twist": "",
      "deeperQuestion": "現在提起來，還會讓你笑嗎？"
    }
  },
  {
    "id": "ponder-v2-couple-099",
    "category": "Couple",
    "emoji": "💗",
    "title": "Today's thank-you",
    "scenario": "Think of a moment together today.",
    "question": "What small thing would you thank your partner for?",
    "twist": "",
    "deeperQuestion": "What did they do that made your day a little easier?",
    "zh": {
      "title": "今天的感謝",
      "scenario": "回想今天相處的一刻。",
      "question": "你想為哪件小事跟對方說謝謝？",
      "twist": "",
      "deeperQuestion": "對方做了甚麼，讓你的日子輕鬆一點？"
    }
  },
  {
    "id": "ponder-v2-couple-100",
    "category": "Couple",
    "emoji": "💗",
    "title": "The next conversation",
    "scenario": "After today's questions, think about what stayed with you.",
    "question": "Which topic would you like more time on?",
    "twist": "",
    "deeperQuestion": "When would you like to pick it up again?",
    "zh": {
      "title": "下次再談",
      "scenario": "今天聊過幾個問題後。",
      "question": "你最想在哪個話題多停留一下？",
      "twist": "",
      "deeperQuestion": "你希望下次在甚麼時候繼續聊？"
    }
  },
  {
    "id": "ponder-v2-family-001",
    "category": "Family",
    "emoji": "🏠",
    "title": "A family meal",
    "scenario": "Everyone is eating together tonight.",
    "question": "Which home-cooked dish would you request?",
    "twist": "",
    "deeperQuestion": "Whose version do you miss most?",
    "zh": {
      "title": "一頓家常飯",
      "scenario": "今晚全家一起吃飯。",
      "question": "你最想點哪道家常菜？",
      "twist": "",
      "deeperQuestion": "誰煮的版本最讓你想念？"
    }
  },
  {
    "id": "ponder-v2-family-002",
    "category": "Family",
    "emoji": "🏠",
    "title": "Childhood games",
    "scenario": "No phones and no new toys are allowed.",
    "question": "What game would you teach your family?",
    "twist": "",
    "deeperQuestion": "Could you try it for one minute now?",
    "zh": {
      "title": "小時候的遊戲",
      "scenario": "不用手機，也不用買玩具。",
      "question": "你會教家人玩甚麼？",
      "twist": "",
      "deeperQuestion": "現在可以試玩一分鐘嗎？"
    }
  },
  {
    "id": "ponder-v2-family-003",
    "category": "Family",
    "emoji": "🏠",
    "title": "Sharing chores",
    "scenario": "Everyone has some free time today.",
    "question": "Which chore would you take on?",
    "twist": "",
    "deeperQuestion": "Who usually does it without being noticed?",
    "zh": {
      "title": "分工一天",
      "scenario": "今天大家都有空。",
      "question": "你願意接手哪件家務？",
      "twist": "",
      "deeperQuestion": "平常是誰默默做這件事？"
    }
  },
  {
    "id": "ponder-v2-family-004",
    "category": "Family",
    "emoji": "🏠",
    "title": "An old photo",
    "scenario": "You find an old family photo.",
    "question": "What would you ask someone in it?",
    "twist": "",
    "deeperQuestion": "What happened that the photo did not capture?",
    "zh": {
      "title": "舊照片",
      "scenario": "你找到一張以前的家庭照。",
      "question": "最想問照片裡的人甚麼？",
      "twist": "",
      "deeperQuestion": "照片外還發生過甚麼事？"
    }
  },
  {
    "id": "ponder-v2-family-005",
    "category": "Family",
    "emoji": "🏠",
    "title": "An outing",
    "scenario": "You have half a day for a family outing.",
    "question": "Where would you suggest going?",
    "twist": "",
    "deeperQuestion": "How could someone who walks slowly enjoy it too?",
    "zh": {
      "title": "一起出門",
      "scenario": "全家只有半天時間出門。",
      "question": "你會提議去哪裡？",
      "twist": "",
      "deeperQuestion": "怎樣安排，走得慢的人也能享受？"
    }
  },
  {
    "id": "ponder-v2-family-006",
    "category": "Family",
    "emoji": "🏠",
    "title": "Feeling at home",
    "scenario": "You come home to a familiar smell.",
    "question": "What smell comes to mind?",
    "twist": "",
    "deeperQuestion": "Who or what moment does it remind you of?",
    "zh": {
      "title": "回家的感覺",
      "scenario": "你回到家，聞到熟悉的味道。",
      "question": "你想到的是甚麼？",
      "twist": "",
      "deeperQuestion": "它讓你記起哪個人或時刻？"
    }
  },
  {
    "id": "ponder-v2-family-007",
    "category": "Family",
    "emoji": "🏠",
    "title": "Phones at dinner",
    "scenario": "Everyone is looking at phones during dinner.",
    "question": "What small change would you suggest?",
    "twist": "",
    "deeperQuestion": "What easy topic would you start with?",
    "zh": {
      "title": "飯桌手機",
      "scenario": "大家吃飯時都在看手機。",
      "question": "你會提議甚麼小改變？",
      "twist": "",
      "deeperQuestion": "你想先聊哪個輕鬆話題？"
    }
  },
  {
    "id": "ponder-v2-family-008",
    "category": "Family",
    "emoji": "🏠",
    "title": "Different times",
    "scenario": "Ask a relative from another generation about weekends growing up.",
    "question": "What would you like to know?",
    "twist": "",
    "deeperQuestion": "Which activity would you like to try together?",
    "zh": {
      "title": "不同年代",
      "scenario": "問一位跟你不同年紀的家人。",
      "question": "你最想知道他那時怎樣過週末？",
      "twist": "",
      "deeperQuestion": "有哪個活動你想一起試？"
    }
  },
  {
    "id": "ponder-v2-family-009",
    "category": "Family",
    "emoji": "🏠",
    "title": "Waking up",
    "scenario": "Everyone needs to wake early tomorrow.",
    "question": "How would you prefer to be woken?",
    "twist": "",
    "deeperQuestion": "What would make getting up harder?",
    "zh": {
      "title": "被叫起床",
      "scenario": "明天全家要早起。",
      "question": "你最能接受哪種叫醒方式？",
      "twist": "",
      "deeperQuestion": "哪種方式會讓你更不想起床？"
    }
  },
  {
    "id": "ponder-v2-family-010",
    "category": "Family",
    "emoji": "🏠",
    "title": "A thank-you",
    "scenario": "Think of a small favour a relative did recently.",
    "question": "What would you thank them for?",
    "twist": "",
    "deeperQuestion": "Do they know it helped you?",
    "zh": {
      "title": "一句謝謝",
      "scenario": "想起家人最近幫過你的小忙。",
      "question": "你想為甚麼說謝謝？",
      "twist": "",
      "deeperQuestion": "對方知不知道這件事幫到你？"
    }
  },
  {
    "id": "ponder-v2-family-011",
    "category": "Family",
    "emoji": "🏠",
    "title": "A family signal",
    "scenario": "Someone at home needs quiet.",
    "question": "What simple signal could let everyone know?",
    "twist": "",
    "deeperQuestion": "What would you stop doing when you saw it?",
    "zh": {
      "title": "家庭暗號",
      "scenario": "家中有人需要安靜休息。",
      "question": "你們可以用甚麼簡單暗號提醒大家？",
      "twist": "",
      "deeperQuestion": "看到暗號後，你會先停止哪件事？"
    }
  },
  {
    "id": "ponder-v2-family-012",
    "category": "Family",
    "emoji": "🏠",
    "title": "Teach me something",
    "scenario": "Everyone has something they do well.",
    "question": "Who would you like to learn a skill from?",
    "twist": "",
    "deeperQuestion": "Could they show you the simplest first step?",
    "zh": {
      "title": "教我一招",
      "scenario": "每個家人都有擅長的事。",
      "question": "你最想向誰學一招？",
      "twist": "",
      "deeperQuestion": "對方可以先示範最簡單的一步嗎？"
    }
  },
  {
    "id": "ponder-v2-family-013",
    "category": "Family",
    "emoji": "🏠",
    "title": "Food preferences",
    "scenario": "A relative cooks something you dislike.",
    "question": "How would you respond politely?",
    "twist": "",
    "deeperQuestion": "What alternative could you help prepare?",
    "zh": {
      "title": "不喜歡的菜",
      "scenario": "家人煮了你不愛吃的菜。",
      "question": "你會怎樣說得有禮貌？",
      "twist": "",
      "deeperQuestion": "你願意幫忙準備甚麼替代食物？"
    }
  },
  {
    "id": "ponder-v2-family-014",
    "category": "Family",
    "emoji": "🏠",
    "title": "A corner at home",
    "scenario": "You can reorganize one corner of your home.",
    "question": "Which would you choose?",
    "twist": "",
    "deeperQuestion": "What change would make it easier for everyone to use?",
    "zh": {
      "title": "家中一角",
      "scenario": "你可以重新整理家裡一個角落。",
      "question": "你會選哪裡？",
      "twist": "",
      "deeperQuestion": "怎樣改，大家都會更方便？"
    }
  },
  {
    "id": "ponder-v2-family-015",
    "category": "Family",
    "emoji": "🏠",
    "title": "A familiar phrase",
    "scenario": "Your family has familiar sayings.",
    "question": "Which phrase instantly brings someone to mind?",
    "twist": "",
    "deeperQuestion": "Have you started saying it too?",
    "zh": {
      "title": "誰的口頭禪",
      "scenario": "家人常說一些熟悉的話。",
      "question": "哪一句你一聽就知道是誰？",
      "twist": "",
      "deeperQuestion": "你自己也開始說這句話了嗎？"
    }
  },
  {
    "id": "ponder-v2-family-016",
    "category": "Family",
    "emoji": "🏠",
    "title": "Birthday plans",
    "scenario": "A relative's birthday is coming.",
    "question": "How would you celebrate in a way they enjoy?",
    "twist": "",
    "deeperQuestion": "Have you asked what they would like?",
    "zh": {
      "title": "生日安排",
      "scenario": "家人生日快到了。",
      "question": "你會怎樣慶祝，讓主角舒服？",
      "twist": "",
      "deeperQuestion": "你有沒有先問過對方想怎樣過？"
    }
  },
  {
    "id": "ponder-v2-family-017",
    "category": "Family",
    "emoji": "🏠",
    "title": "Grocery shopping",
    "scenario": "You are grocery shopping and can add one snack.",
    "question": "How would you choose together?",
    "twist": "",
    "deeperQuestion": "How could you take turns if tastes differ?",
    "zh": {
      "title": "一起買菜",
      "scenario": "你們一起買菜，只能多買一樣零食。",
      "question": "大家會怎樣選？",
      "twist": "",
      "deeperQuestion": "如果口味不同，可以怎樣輪流？"
    }
  },
  {
    "id": "ponder-v2-family-018",
    "category": "Family",
    "emoji": "🏠",
    "title": "Let me finish",
    "scenario": "A relative interrupts your story.",
    "question": "How would you ask to finish?",
    "twist": "",
    "deeperQuestion": "What gesture could be a comfortable reminder?",
    "zh": {
      "title": "被打斷",
      "scenario": "你分享事情時被家人打斷。",
      "question": "你會怎樣請對方先聽完？",
      "twist": "",
      "deeperQuestion": "你可以用哪個手勢提醒，又不尷尬？"
    }
  },
  {
    "id": "ponder-v2-family-019",
    "category": "Family",
    "emoji": "🏠",
    "title": "A childhood home",
    "scenario": "Ask a relative to describe their childhood home.",
    "question": "Which part would you want to see?",
    "twist": "",
    "deeperQuestion": "What was there that is uncommon now?",
    "zh": {
      "title": "童年住處",
      "scenario": "請一位家人描述小時候住的地方。",
      "question": "你最想看哪個角落？",
      "twist": "",
      "deeperQuestion": "那裡有甚麼現在很少見的東西？"
    }
  },
  {
    "id": "ponder-v2-family-020",
    "category": "Family",
    "emoji": "🏠",
    "title": "House rules",
    "scenario": "There is a house rule you do not understand.",
    "question": "What would you ask about it?",
    "twist": "",
    "deeperQuestion": "What alternative would you suggest?",
    "zh": {
      "title": "家裡的規則",
      "scenario": "有一條家規你不太明白。",
      "question": "你想先問清楚甚麼？",
      "twist": "",
      "deeperQuestion": "如果要改，你會提出甚麼替代辦法？"
    }
  },
  {
    "id": "ponder-v2-family-021",
    "category": "Family",
    "emoji": "🏠",
    "title": "A rainy day",
    "scenario": "Rain cancels a family outing.",
    "question": "What could you do together at home?",
    "twist": "",
    "deeperQuestion": "Which activity would cost nothing?",
    "zh": {
      "title": "雨天安排",
      "scenario": "原定的家庭活動因下雨取消了。",
      "question": "留在家可以一起做甚麼？",
      "twist": "",
      "deeperQuestion": "不用花錢的話，你會選哪個活動？"
    }
  },
  {
    "id": "ponder-v2-family-022",
    "category": "Family",
    "emoji": "🏠",
    "title": "The busy one",
    "scenario": "Someone in your family is especially busy.",
    "question": "What small task could you take off their hands?",
    "twist": "",
    "deeperQuestion": "How would you check whether it would help?",
    "zh": {
      "title": "忙碌的一位",
      "scenario": "家裡有人最近特別忙。",
      "question": "你可以幫他減少哪件小事？",
      "twist": "",
      "deeperQuestion": "你會先怎樣問對方需不需要？"
    }
  },
  {
    "id": "ponder-v2-family-023",
    "category": "Family",
    "emoji": "🏠",
    "title": "The story of a name",
    "scenario": "You want to know the story behind a relative's name.",
    "question": "Who would you ask?",
    "twist": "",
    "deeperQuestion": "Are there any unusual nicknames in the family?",
    "zh": {
      "title": "名字的故事",
      "scenario": "你想知道家人的名字怎樣來。",
      "question": "你會問誰？",
      "twist": "",
      "deeperQuestion": "家裡有沒有特別的暱稱？"
    }
  },
  {
    "id": "ponder-v2-family-024",
    "category": "Family",
    "emoji": "🏠",
    "title": "Choosing a show",
    "scenario": "Everyone wants to watch a different show.",
    "question": "How would you choose tonight?",
    "twist": "",
    "deeperQuestion": "Is there a show everyone would be willing to try?",
    "zh": {
      "title": "一起看節目",
      "scenario": "大家想看的節目不同。",
      "question": "今晚可以怎樣選？",
      "twist": "",
      "deeperQuestion": "有沒有一個節目是全家都願意試的？"
    }
  },
  {
    "id": "ponder-v2-family-025",
    "category": "Family",
    "emoji": "🏠",
    "title": "No rush",
    "scenario": "A relative asks about something you have not decided.",
    "question": "How would you ask for time?",
    "twist": "",
    "deeperQuestion": "When would you be more ready to talk?",
    "zh": {
      "title": "不用急著答",
      "scenario": "家人問你一件你還沒想好的事。",
      "question": "你會怎樣請對方給點時間？",
      "twist": "",
      "deeperQuestion": "甚麼時候再談，你會比較準備好？"
    }
  },
  {
    "id": "ponder-v2-family-026",
    "category": "Family",
    "emoji": "🏠",
    "title": "A little note",
    "scenario": "You want to leave a note to brighten a relative's day.",
    "question": "What would it say?",
    "twist": "",
    "deeperQuestion": "Where would they be most likely to find it?",
    "zh": {
      "title": "一張便條",
      "scenario": "你想留張便條讓家人開心。",
      "question": "你會寫甚麼？",
      "twist": "",
      "deeperQuestion": "放在哪裡，對方最容易看到？"
    }
  },
  {
    "id": "ponder-v2-family-027",
    "category": "Family",
    "emoji": "🏠",
    "title": "A family trip",
    "scenario": "On a trip, some want photos and others want to move on.",
    "question": "How would you arrange it?",
    "twist": "",
    "deeperQuestion": "Which stop deserves a little more time?",
    "zh": {
      "title": "家庭旅行",
      "scenario": "旅行時有人想拍照，有人想趕下一站。",
      "question": "你會怎樣安排？",
      "twist": "",
      "deeperQuestion": "哪一站值得大家慢一點？"
    }
  },
  {
    "id": "ponder-v2-family-028",
    "category": "Family",
    "emoji": "🏠",
    "title": "Different words",
    "scenario": "Different relatives use different words for the same thing.",
    "question": "What example comes to mind?",
    "twist": "",
    "deeperQuestion": "What word from another dialect would you like to learn?",
    "zh": {
      "title": "不同叫法",
      "scenario": "同一樣東西，不同家人叫法不同。",
      "question": "你想到哪個例子？",
      "twist": "",
      "deeperQuestion": "你想學會哪個方言用語？"
    }
  },
  {
    "id": "ponder-v2-family-029",
    "category": "Family",
    "emoji": "🏠",
    "title": "Something is missing",
    "scenario": "A shared item is missing.",
    "question": "How would you ask about it without blaming anyone?",
    "twist": "",
    "deeperQuestion": "What regular place would make it easier to find?",
    "zh": {
      "title": "東西不見了",
      "scenario": "共用的東西找不到了。",
      "question": "你會先怎樣問，而不是怪人？",
      "twist": "",
      "deeperQuestion": "放在哪個固定位置會比較好找？"
    }
  },
  {
    "id": "ponder-v2-family-030",
    "category": "Family",
    "emoji": "🏠",
    "title": "Breakfast together",
    "scenario": "Everyone has time for breakfast together.",
    "question": "What would you like it to be like?",
    "twist": "",
    "deeperQuestion": "Who would prepare one part of the meal?",
    "zh": {
      "title": "全家早餐",
      "scenario": "難得全家都有時間吃早餐。",
      "question": "你想怎樣安排這一餐？",
      "twist": "",
      "deeperQuestion": "誰願意負責其中一樣食物？"
    }
  },
  {
    "id": "ponder-v2-family-031",
    "category": "Family",
    "emoji": "🏠",
    "title": "Being compared",
    "scenario": "A relative compares you with someone else.",
    "question": "How would you explain how you feel?",
    "twist": "",
    "deeperQuestion": "What progress of yours would you like them to notice?",
    "zh": {
      "title": "被拿來比較",
      "scenario": "家人把你跟別人比較。",
      "question": "你想怎樣說出自己的感受？",
      "twist": "",
      "deeperQuestion": "你希望對方留意你哪一個進步？"
    }
  },
  {
    "id": "ponder-v2-family-032",
    "category": "Family",
    "emoji": "🏠",
    "title": "An old object",
    "scenario": "There is something at home that has been kept for years.",
    "question": "What story would you ask about it?",
    "twist": "",
    "deeperQuestion": "Is it still useful today?",
    "zh": {
      "title": "老物件",
      "scenario": "家中有件東西用了很多年。",
      "question": "你最想知道它哪段故事？",
      "twist": "",
      "deeperQuestion": "它現在還派得上用場嗎？"
    }
  },
  {
    "id": "ponder-v2-family-033",
    "category": "Family",
    "emoji": "🏠",
    "title": "A proper rest",
    "scenario": "A relative finally has a free day.",
    "question": "What would make it genuinely restful?",
    "twist": "",
    "deeperQuestion": "What quiet time could you help protect?",
    "zh": {
      "title": "好好休息",
      "scenario": "今天家人難得不用忙。",
      "question": "怎樣的一天會讓他真正休息到？",
      "twist": "",
      "deeperQuestion": "你可以幫忙守住哪一段安靜時間？"
    }
  },
  {
    "id": "ponder-v2-family-034",
    "category": "Family",
    "emoji": "🏠",
    "title": "Growing something",
    "scenario": "You want to grow a plant together.",
    "question": "Who would like to handle each part?",
    "twist": "",
    "deeperQuestion": "How could you remind each other to water it?",
    "zh": {
      "title": "一起種東西",
      "scenario": "你們想一起種一盆植物。",
      "question": "誰想負責哪一部分？",
      "twist": "",
      "deeperQuestion": "如果忘記澆水，可以怎樣互相提醒？"
    }
  },
  {
    "id": "ponder-v2-family-035",
    "category": "Family",
    "emoji": "🏠",
    "title": "A family album",
    "scenario": "You are making an album with just five photos.",
    "question": "Which one must be included?",
    "twist": "",
    "deeperQuestion": "What caption would you give it?",
    "zh": {
      "title": "家庭相簿",
      "scenario": "只選五張照片做一本小相簿。",
      "question": "你一定會放哪張？",
      "twist": "",
      "deeperQuestion": "你想替那張照片寫甚麼說明？"
    }
  },
  {
    "id": "ponder-v2-family-036",
    "category": "Family",
    "emoji": "🏠",
    "title": "Volume at home",
    "scenario": "Someone is on a call while another watches television.",
    "question": "How could both hear comfortably?",
    "twist": "",
    "deeperQuestion": "Where could you make a quiet area?",
    "zh": {
      "title": "說話音量",
      "scenario": "有人在通電話，有人在看電視。",
      "question": "你會怎樣讓兩邊都聽得清楚？",
      "twist": "",
      "deeperQuestion": "家中哪個地方可以留作安靜區？"
    }
  },
  {
    "id": "ponder-v2-family-037",
    "category": "Family",
    "emoji": "🏠",
    "title": "No photo today",
    "scenario": "You do not want to be in a family photo today.",
    "question": "How would you say so?",
    "twist": "",
    "deeperQuestion": "How would you respect someone else's choice not to join?",
    "zh": {
      "title": "不想被拍",
      "scenario": "聚會合照時，你今天不想入鏡。",
      "question": "你會怎樣說？",
      "twist": "",
      "deeperQuestion": "如果別人不想拍，你會怎樣尊重？"
    }
  },
  {
    "id": "ponder-v2-family-038",
    "category": "Family",
    "emoji": "🏠",
    "title": "A first job",
    "scenario": "Ask a relative about their first job.",
    "question": "What would you like to know?",
    "twist": "",
    "deeperQuestion": "What small skill did the job teach them?",
    "zh": {
      "title": "第一次工作",
      "scenario": "問一位家人第一次工作的經歷。",
      "question": "你最想知道哪件事？",
      "twist": "",
      "deeperQuestion": "那份工作教會了他哪個小本領？"
    }
  },
  {
    "id": "ponder-v2-family-039",
    "category": "Family",
    "emoji": "🏠",
    "title": "Holiday time",
    "scenario": "Some want to go out on a holiday; others want to stay home.",
    "question": "What would avoid pressure?",
    "twist": "",
    "deeperQuestion": "Could you spend part of the day apart and eat together later?",
    "zh": {
      "title": "假日分配",
      "scenario": "假日有人想出門，有人想在家。",
      "question": "怎樣安排，大家都不勉強？",
      "twist": "",
      "deeperQuestion": "可不可以分開半天，再一起吃飯？"
    }
  },
  {
    "id": "ponder-v2-family-040",
    "category": "Family",
    "emoji": "🏠",
    "title": "Checking in",
    "scenario": "You want to check on a relative without interrogating them.",
    "question": "What would you ask first?",
    "twist": "",
    "deeperQuestion": "What could you ask besides whether they have eaten?",
    "zh": {
      "title": "一句關心",
      "scenario": "你想關心家人，又不想像在查問。",
      "question": "你會先問哪一句？",
      "twist": "",
      "deeperQuestion": "除了「吃飯了嗎」，還可以問甚麼？"
    }
  },
  {
    "id": "ponder-v2-family-041",
    "category": "Family",
    "emoji": "🏠",
    "title": "Having guests",
    "scenario": "Guests are coming tomorrow.",
    "question": "What would you like to help prepare?",
    "twist": "",
    "deeperQuestion": "What does not need to be perfect?",
    "zh": {
      "title": "有客人來",
      "scenario": "家裡明天有客人來。",
      "question": "你最願意幫忙準備甚麼？",
      "twist": "",
      "deeperQuestion": "甚麼不用準備得太完美？"
    }
  },
  {
    "id": "ponder-v2-family-042",
    "category": "Family",
    "emoji": "🏠",
    "title": "A family song",
    "scenario": "Everyone gets to play a favourite song.",
    "question": "Which would you choose?",
    "twist": "",
    "deeperQuestion": "What time in your life does it bring back?",
    "zh": {
      "title": "大家的歌",
      "scenario": "每人放一首自己喜歡的歌。",
      "question": "你會選哪首？",
      "twist": "",
      "deeperQuestion": "這首歌讓你想起甚麼時候？"
    }
  },
  {
    "id": "ponder-v2-family-043",
    "category": "Family",
    "emoji": "🏠",
    "title": "Borrowing things",
    "scenario": "You want to borrow something from a relative.",
    "question": "What would you explain first?",
    "twist": "",
    "deeperQuestion": "What would you always want to be asked about before it is borrowed?",
    "zh": {
      "title": "借用東西",
      "scenario": "你想借家人的一件物品。",
      "question": "你會先講清楚甚麼？",
      "twist": "",
      "deeperQuestion": "甚麼東西你希望別人一定先問過？"
    }
  },
  {
    "id": "ponder-v2-family-044",
    "category": "Family",
    "emoji": "🏠",
    "title": "An early memory",
    "scenario": "Think of an early memory at home.",
    "question": "What detail can you remember?",
    "twist": "",
    "deeperQuestion": "Does anyone else remember that day?",
    "zh": {
      "title": "最早的記憶",
      "scenario": "想起一個小時候在家的畫面。",
      "question": "你記得哪個細節？",
      "twist": "",
      "deeperQuestion": "有沒有家人也記得那一天？"
    }
  },
  {
    "id": "ponder-v2-family-045",
    "category": "Family",
    "emoji": "🏠",
    "title": "Making a mistake",
    "scenario": "You accidentally break something at home.",
    "question": "How would you tell your family?",
    "twist": "",
    "deeperQuestion": "How would you help put things right?",
    "zh": {
      "title": "做錯了事",
      "scenario": "你不小心弄壞了家中的東西。",
      "question": "你會怎樣開口說？",
      "twist": "",
      "deeperQuestion": "你願意怎樣一起處理後續？"
    }
  },
  {
    "id": "ponder-v2-family-046",
    "category": "Family",
    "emoji": "🏠",
    "title": "A gift of time",
    "scenario": "You want to give a relative a gift without buying anything.",
    "question": "What would you make or do?",
    "twist": "",
    "deeperQuestion": "Where would your time help them most?",
    "zh": {
      "title": "不用買的禮物",
      "scenario": "你要送家人一份不用買的禮物。",
      "question": "你會做甚麼？",
      "twist": "",
      "deeperQuestion": "對方最需要你的時間用在哪裡？"
    }
  },
  {
    "id": "ponder-v2-family-047",
    "category": "Family",
    "emoji": "🏠",
    "title": "Sorting belongings",
    "scenario": "Your family is sorting old belongings.",
    "question": "Who would you ask about what to keep?",
    "twist": "",
    "deeperQuestion": "What could you photograph and then pass on?",
    "zh": {
      "title": "整理舊物",
      "scenario": "家中準備整理舊物。",
      "question": "你最想先問誰哪件東西不能丟？",
      "twist": "",
      "deeperQuestion": "有甚麼可以拍照留念，再送給有需要的人？"
    }
  },
  {
    "id": "ponder-v2-family-048",
    "category": "Family",
    "emoji": "🏠",
    "title": "Swapping tasks",
    "scenario": "You swap household tasks for a day.",
    "question": "Which task would teach you the most?",
    "twist": "",
    "deeperQuestion": "Who might you want to thank afterward?",
    "zh": {
      "title": "一天交換",
      "scenario": "你跟家人交換一天的家務。",
      "question": "哪一件會讓你最有新發現？",
      "twist": "",
      "deeperQuestion": "做完後你可能想跟誰說謝謝？"
    }
  },
  {
    "id": "ponder-v2-family-049",
    "category": "Family",
    "emoji": "🏠",
    "title": "A local favourite",
    "scenario": "You want to show a relative a place you often visit.",
    "question": "Where would you take them?",
    "twist": "",
    "deeperQuestion": "What do you especially like about it?",
    "zh": {
      "title": "門外的世界",
      "scenario": "你想帶家人看看你常去的地方。",
      "question": "你會帶他去哪裡？",
      "twist": "",
      "deeperQuestion": "那裡有甚麼是你特別喜歡的？"
    }
  },
  {
    "id": "ponder-v2-family-050",
    "category": "Family",
    "emoji": "🏠",
    "title": "A new tradition",
    "scenario": "Your family wants a small monthly tradition.",
    "question": "What would you suggest?",
    "twist": "",
    "deeperQuestion": "How could busy family members join in?",
    "zh": {
      "title": "新家庭習慣",
      "scenario": "你們想每月固定做一件小事。",
      "question": "你會提議甚麼？",
      "twist": "",
      "deeperQuestion": "怎樣安排，忙的人也能參與？"
    }
  },
  {
    "id": "ponder-v2-family-051",
    "category": "Family",
    "emoji": "🏠",
    "title": "Getting to know you",
    "scenario": "Ask your family to guess your current favourite breakfast.",
    "question": "Who might get it right?",
    "twist": "",
    "deeperQuestion": "How has your taste changed?",
    "zh": {
      "title": "誰最了解",
      "scenario": "請家人猜猜你最近最喜歡的早餐。",
      "question": "你覺得誰會猜中？",
      "twist": "",
      "deeperQuestion": "你的口味跟以前有甚麼不同？"
    }
  },
  {
    "id": "ponder-v2-family-052",
    "category": "Family",
    "emoji": "🏠",
    "title": "A useful trick",
    "scenario": "You know a trick that makes daily life easier.",
    "question": "What would you teach your family?",
    "twist": "",
    "deeperQuestion": "Where could they put it to use?",
    "zh": {
      "title": "生活小技巧",
      "scenario": "你有一個讓生活方便的小方法。",
      "question": "你想教家人哪一招？",
      "twist": "",
      "deeperQuestion": "大家可以在哪件事上用到它？"
    }
  },
  {
    "id": "ponder-v2-family-053",
    "category": "Family",
    "emoji": "🏠",
    "title": "Coming home late",
    "scenario": "You will be home later than usual.",
    "question": "How would you keep your family from waiting up?",
    "twist": "",
    "deeperQuestion": "Do they mainly need your arrival time or to know whether to save dinner?",
    "zh": {
      "title": "晚回家",
      "scenario": "你今晚會比平常晚回家。",
      "question": "你會怎樣讓家人不用一直等？",
      "twist": "",
      "deeperQuestion": "大家最需要知道時間，還是是否留飯？"
    }
  },
  {
    "id": "ponder-v2-family-054",
    "category": "Family",
    "emoji": "🏠",
    "title": "A familiar scent",
    "scenario": "Picture a corner of your home.",
    "question": "Which smell makes it vivid?",
    "twist": "",
    "deeperQuestion": "Do you enjoy that smell?",
    "zh": {
      "title": "家中的氣味",
      "scenario": "閉上眼想一想家中的角落。",
      "question": "哪種氣味最有畫面？",
      "twist": "",
      "deeperQuestion": "你喜歡那種氣味嗎？"
    }
  },
  {
    "id": "ponder-v2-family-055",
    "category": "Family",
    "emoji": "🏠",
    "title": "Learning a recipe",
    "scenario": "You want to learn a relative's signature dish.",
    "question": "Which would you choose?",
    "twist": "",
    "deeperQuestion": "Would you learn by video, notes, or cooking together?",
    "zh": {
      "title": "想學的一道菜",
      "scenario": "你想學家人的一道拿手菜。",
      "question": "你會先挑哪道？",
      "twist": "",
      "deeperQuestion": "你想用影片、筆記，還是一起煮來學？"
    }
  },
  {
    "id": "ponder-v2-family-056",
    "category": "Family",
    "emoji": "🏠",
    "title": "Just listening",
    "scenario": "A relative shares a worry and you want to offer advice.",
    "question": "What could you ask first?",
    "twist": "",
    "deeperQuestion": "What kind of response makes it harder for you to open up?",
    "zh": {
      "title": "不用解釋",
      "scenario": "家人分享煩惱，你很想給建議。",
      "question": "你可以先問甚麼？",
      "twist": "",
      "deeperQuestion": "你自己傾訴時，最怕聽到哪類回應？"
    }
  },
  {
    "id": "ponder-v2-family-057",
    "category": "Family",
    "emoji": "🏠",
    "title": "Someone you miss",
    "scenario": "Think of a relative you rarely see.",
    "question": "What would you like to tell them lately?",
    "twist": "",
    "deeperQuestion": "Would you prefer a message, a call, or meeting in person?",
    "zh": {
      "title": "想念的人",
      "scenario": "想起一位不常見面的家人。",
      "question": "你最近想跟他分享甚麼？",
      "twist": "",
      "deeperQuestion": "你想用文字、電話，還是見面聊？"
    }
  },
  {
    "id": "ponder-v2-family-058",
    "category": "Family",
    "emoji": "🏠",
    "title": "A closed door",
    "scenario": "Someone closes their door for some time alone.",
    "question": "How would you like people to knock?",
    "twist": "",
    "deeperQuestion": "When would it be important to interrupt?",
    "zh": {
      "title": "房間的門",
      "scenario": "有人把房門關上，想自己待一下。",
      "question": "你希望大家怎樣敲門？",
      "twist": "",
      "deeperQuestion": "甚麼情況才需要馬上找對方？"
    }
  },
  {
    "id": "ponder-v2-family-059",
    "category": "Family",
    "emoji": "🏠",
    "title": "A brave moment",
    "scenario": "Share something you were afraid to try but eventually did.",
    "question": "What comes to mind?",
    "twist": "",
    "deeperQuestion": "Who gave you a little courage then?",
    "zh": {
      "title": "一次勇敢",
      "scenario": "請家人講一件曾經不敢做、後來試了的事。",
      "question": "你想先分享哪件？",
      "twist": "",
      "deeperQuestion": "當時誰給了你一點勇氣？"
    }
  },
  {
    "id": "ponder-v2-family-060",
    "category": "Family",
    "emoji": "🏠",
    "title": "Night-time sounds",
    "scenario": "Someone needs an early night while others are still awake.",
    "question": "How could you avoid disturbing each other?",
    "twist": "",
    "deeperQuestion": "What small change could happen tonight?",
    "zh": {
      "title": "睡前聲音",
      "scenario": "有人要早睡，其他人還想活動。",
      "question": "你們怎樣減少互相打擾？",
      "twist": "",
      "deeperQuestion": "哪個小改變今晚就能做到？"
    }
  },
  {
    "id": "ponder-v2-family-061",
    "category": "Family",
    "emoji": "🏠",
    "title": "Fixing something",
    "scenario": "Something small at home breaks.",
    "question": "Who would you like to investigate it with?",
    "twist": "",
    "deeperQuestion": "When would you decide to get help?",
    "zh": {
      "title": "一起修理",
      "scenario": "家裡有件小東西壞了。",
      "question": "你願意跟誰一起研究怎樣修？",
      "twist": "",
      "deeperQuestion": "如果修不好，甚麼時候該找人幫忙？"
    }
  },
  {
    "id": "ponder-v2-family-062",
    "category": "Family",
    "emoji": "🏠",
    "title": "Holiday customs",
    "scenario": "Your family has a holiday custom.",
    "question": "Which part do you enjoy most?",
    "twist": "",
    "deeperQuestion": "What could be simplified so everyone can relax?",
    "zh": {
      "title": "節日做法",
      "scenario": "家裡有一個過節習慣。",
      "question": "你最喜歡哪個部分？",
      "twist": "",
      "deeperQuestion": "哪個部分可以簡化，讓大家輕鬆一點？"
    }
  },
  {
    "id": "ponder-v2-family-063",
    "category": "Family",
    "emoji": "🏠",
    "title": "A missed message",
    "scenario": "You miss a plan in the family group chat.",
    "question": "How would you ask about it?",
    "twist": "",
    "deeperQuestion": "How could important plans be easier to find?",
    "zh": {
      "title": "忘了交代",
      "scenario": "家庭群組裡漏看了一個安排。",
      "question": "你會怎樣補問？",
      "twist": "",
      "deeperQuestion": "重要安排可以怎樣寫得更容易找到？"
    }
  },
  {
    "id": "ponder-v2-family-064",
    "category": "Family",
    "emoji": "🏠",
    "title": "Choosing a route",
    "scenario": "On an outing, some want speed and others need an easy route.",
    "question": "How would you choose?",
    "twist": "",
    "deeperQuestion": "Where could you stop to rest?",
    "zh": {
      "title": "誰來選路",
      "scenario": "全家出門，有人想快，有人想走平路。",
      "question": "你會怎樣選路？",
      "twist": "",
      "deeperQuestion": "路上可以在哪裡休息？"
    }
  },
  {
    "id": "ponder-v2-family-065",
    "category": "Family",
    "emoji": "🏠",
    "title": "An unwanted nickname",
    "scenario": "A relative uses a nickname you dislike.",
    "question": "How would you ask them to stop?",
    "twist": "",
    "deeperQuestion": "What would you like to be called?",
    "zh": {
      "title": "不愛的稱呼",
      "scenario": "家人用了你不太喜歡的暱稱。",
      "question": "你會怎樣請他改口？",
      "twist": "",
      "deeperQuestion": "你喜歡別人怎樣稱呼你？"
    }
  },
  {
    "id": "ponder-v2-family-066",
    "category": "Family",
    "emoji": "🏠",
    "title": "A hidden skill",
    "scenario": "You discover a relative has a skill you never knew about.",
    "question": "What would you ask them to demonstrate?",
    "twist": "",
    "deeperQuestion": "Who taught them?",
    "zh": {
      "title": "意外的本領",
      "scenario": "你發現家人會一項你不知道的技能。",
      "question": "你最想看甚麼示範？",
      "twist": "",
      "deeperQuestion": "他是跟誰學的？"
    }
  },
  {
    "id": "ponder-v2-family-067",
    "category": "Family",
    "emoji": "🏠",
    "title": "A keepsake",
    "scenario": "You will be away from home for a week.",
    "question": "What small item would feel comforting?",
    "twist": "",
    "deeperQuestion": "Where do you usually keep it?",
    "zh": {
      "title": "選一件帶走",
      "scenario": "你暫時要離家住一星期。",
      "question": "你會帶哪件小東西讓自己安心？",
      "twist": "",
      "deeperQuestion": "它平常放在哪裡？"
    }
  },
  {
    "id": "ponder-v2-family-068",
    "category": "Family",
    "emoji": "🏠",
    "title": "A family stall",
    "scenario": "Your family is running a stall for one day.",
    "question": "What would you sell?",
    "twist": "",
    "deeperQuestion": "What role could each person take?",
    "zh": {
      "title": "家庭小店",
      "scenario": "全家要擺一天小攤檔。",
      "question": "你們最適合賣甚麼？",
      "twist": "",
      "deeperQuestion": "每人可以負責哪一份工作？"
    }
  },
  {
    "id": "ponder-v2-family-069",
    "category": "Family",
    "emoji": "🏠",
    "title": "A tiring day",
    "scenario": "A relative says they have had an exhausting day.",
    "question": "What small thing would you do first?",
    "twist": "",
    "deeperQuestion": "How could you check that your help is wanted?",
    "zh": {
      "title": "家人說辛苦",
      "scenario": "家人說今天很累。",
      "question": "你會先做一件甚麼小事？",
      "twist": "",
      "deeperQuestion": "怎樣才知道你的幫忙是對方想要的？"
    }
  },
  {
    "id": "ponder-v2-family-070",
    "category": "Family",
    "emoji": "🏠",
    "title": "Meeting a new friend",
    "scenario": "You want to invite a friend for dinner.",
    "question": "What would you tell your family first?",
    "twist": "",
    "deeperQuestion": "Is there a topic you would prefer not to bring up at dinner?",
    "zh": {
      "title": "認識新朋友",
      "scenario": "你想帶朋友回家吃飯。",
      "question": "會先跟家人講清楚甚麼？",
      "twist": "",
      "deeperQuestion": "有甚麼話題你希望飯桌上先不要問？"
    }
  },
  {
    "id": "ponder-v2-family-071",
    "category": "Family",
    "emoji": "🏠",
    "title": "Different memories",
    "scenario": "Everyone remembers a family story differently.",
    "question": "Which detail would you compare?",
    "twist": "",
    "deeperQuestion": "Which version is the funniest?",
    "zh": {
      "title": "記憶不同",
      "scenario": "同一件家庭趣事，每個人記得的版本不同。",
      "question": "你最想核對哪個細節？",
      "twist": "",
      "deeperQuestion": "不同版本裡，哪一個最有趣？"
    }
  },
  {
    "id": "ponder-v2-family-072",
    "category": "Family",
    "emoji": "🏠",
    "title": "A future home",
    "scenario": "Imagine having a home of your own.",
    "question": "What habit from your current home would you keep?",
    "twist": "",
    "deeperQuestion": "What would you like to do differently?",
    "zh": {
      "title": "給未來的家",
      "scenario": "如果以後有自己的家。",
      "question": "你最想保留現在家裡哪個習慣？",
      "twist": "",
      "deeperQuestion": "又有哪一點想用自己的方式做？"
    }
  },
  {
    "id": "ponder-v2-family-073",
    "category": "Family",
    "emoji": "🏠",
    "title": "Taking turns",
    "scenario": "Everyone needs the same bathroom.",
    "question": "How could you take turns without rushing each other?",
    "twist": "",
    "deeperQuestion": "What could be prepared outside the bathroom?",
    "zh": {
      "title": "排隊輪流",
      "scenario": "全家都要用同一間浴室。",
      "question": "你們怎樣排，才不用一直催？",
      "twist": "",
      "deeperQuestion": "哪一件準備可以先在外面做？"
    }
  },
  {
    "id": "ponder-v2-family-074",
    "category": "Family",
    "emoji": "🏠",
    "title": "A thank-you letter",
    "scenario": "You want to write three sentences to a relative.",
    "question": "What would the first one say?",
    "twist": "",
    "deeperQuestion": "What specific little moment would you mention?",
    "zh": {
      "title": "一封感謝信",
      "scenario": "你想寫三句話給一位家人。",
      "question": "第一句會寫甚麼？",
      "twist": "",
      "deeperQuestion": "你想提到哪件具體的小事？"
    }
  },
  {
    "id": "ponder-v2-family-075",
    "category": "Family",
    "emoji": "🏠",
    "title": "The sound of home",
    "scenario": "You can tell someone is home before opening the door.",
    "question": "What do you usually hear?",
    "twist": "",
    "deeperQuestion": "Which sound feels most reassuring?",
    "zh": {
      "title": "家裡的聲音",
      "scenario": "你在門外就知道有人在家。",
      "question": "你通常聽到甚麼？",
      "twist": "",
      "deeperQuestion": "哪種聲音最讓你覺得安心？"
    }
  },
  {
    "id": "ponder-v2-family-076",
    "category": "Family",
    "emoji": "🏠",
    "title": "A new device",
    "scenario": "A relative is learning a new device feature.",
    "question": "How would you make it easy to follow?",
    "twist": "",
    "deeperQuestion": "Would you write steps or let them try once themselves?",
    "zh": {
      "title": "新科技",
      "scenario": "家人不太會用一個新功能。",
      "question": "你怎樣教會比較容易跟上？",
      "twist": "",
      "deeperQuestion": "你會寫步驟，還是讓他自己試一次？"
    }
  },
  {
    "id": "ponder-v2-family-077",
    "category": "Family",
    "emoji": "🏠",
    "title": "A family film",
    "scenario": "You are choosing a film for everyone.",
    "question": "Whose preferences would you check first?",
    "twist": "",
    "deeperQuestion": "Is there any type of content someone would rather avoid?",
    "zh": {
      "title": "選家庭電影",
      "scenario": "你要選一部適合大家看的電影。",
      "question": "你會先問誰的口味？",
      "twist": "",
      "deeperQuestion": "有哪類內容是有人不想看的？"
    }
  },
  {
    "id": "ponder-v2-family-078",
    "category": "Family",
    "emoji": "🏠",
    "title": "My own choice",
    "scenario": "Your family eagerly makes plans for you, but you want to choose.",
    "question": "What would you say?",
    "twist": "",
    "deeperQuestion": "What would you still like their advice on?",
    "zh": {
      "title": "自己的選擇",
      "scenario": "家人很熱心替你安排，但你想自己決定。",
      "question": "你會怎樣說？",
      "twist": "",
      "deeperQuestion": "哪些事你仍然想聽他們的意見？"
    }
  },
  {
    "id": "ponder-v2-family-079",
    "category": "Family",
    "emoji": "🏠",
    "title": "Noticing progress",
    "scenario": "A relative is learning something new.",
    "question": "What small improvement have you noticed?",
    "twist": "",
    "deeperQuestion": "How could you describe it more specifically than saying they are great?",
    "zh": {
      "title": "稱讚進步",
      "scenario": "家人正在學一件新事。",
      "question": "你看到哪個小進步？",
      "twist": "",
      "deeperQuestion": "怎樣說，會比「你好厲害」更具體？"
    }
  },
  {
    "id": "ponder-v2-family-080",
    "category": "Family",
    "emoji": "🏠",
    "title": "Story time",
    "scenario": "Everyone shares one small thing from today.",
    "question": "What would you start with?",
    "twist": "",
    "deeperQuestion": "What detail from someone else's story would you ask about?",
    "zh": {
      "title": "一起聽故事",
      "scenario": "今晚每人講一件今天的小事。",
      "question": "你想先講哪件？",
      "twist": "",
      "deeperQuestion": "你想追問別人的哪個細節？"
    }
  },
  {
    "id": "ponder-v2-family-081",
    "category": "Family",
    "emoji": "🏠",
    "title": "Before leaving",
    "scenario": "Your family leaves in five minutes.",
    "question": "What do you tend to forget?",
    "twist": "",
    "deeperQuestion": "How could you remind each other without blaming?",
    "zh": {
      "title": "出門前五分鐘",
      "scenario": "全家快出門，還有五分鐘。",
      "question": "你最常忘記帶甚麼？",
      "twist": "",
      "deeperQuestion": "大家可以怎樣提醒，又不變成責備？"
    }
  },
  {
    "id": "ponder-v2-family-082",
    "category": "Family",
    "emoji": "🏠",
    "title": "Enough food",
    "scenario": "A relative keeps serving you food, but you are full.",
    "question": "How would you respond?",
    "twist": "",
    "deeperQuestion": "How could you show appreciation without eating more?",
    "zh": {
      "title": "不想再吃",
      "scenario": "家人一直夾菜給你，但你已經飽了。",
      "question": "你會怎樣說？",
      "twist": "",
      "deeperQuestion": "除了多吃一點，你可以怎樣表達感謝？"
    }
  },
  {
    "id": "ponder-v2-family-083",
    "category": "Family",
    "emoji": "🏠",
    "title": "School memories",
    "scenario": "Ask a relative about their favourite school subject.",
    "question": "Do you think your answers will match?",
    "twist": "",
    "deeperQuestion": "What teacher or event made that class special?",
    "zh": {
      "title": "學校回憶",
      "scenario": "問家人以前最喜歡的課。",
      "question": "你猜你們會有一樣的答案嗎？",
      "twist": "",
      "deeperQuestion": "是哪位老師或哪件事讓那堂課特別？"
    }
  },
  {
    "id": "ponder-v2-family-084",
    "category": "Family",
    "emoji": "🏠",
    "title": "Our local guide",
    "scenario": "A relative from far away visits for two days.",
    "question": "What local experience would you share?",
    "twist": "",
    "deeperQuestion": "Which meal would best show your everyday life?",
    "zh": {
      "title": "家中的旅遊指南",
      "scenario": "一位遠方家人來住兩天。",
      "question": "你最想帶他體驗甚麼本地小事？",
      "twist": "",
      "deeperQuestion": "哪一餐最能介紹你的日常生活？"
    }
  },
  {
    "id": "ponder-v2-family-085",
    "category": "Family",
    "emoji": "🏠",
    "title": "Small celebrations",
    "scenario": "A relative finishes something that was difficult for them.",
    "question": "How could you celebrate simply?",
    "twist": "",
    "deeperQuestion": "Would they enjoy attention or prefer something quiet?",
    "zh": {
      "title": "一起慶祝小事",
      "scenario": "家人完成了一件平常不容易的事。",
      "question": "你們可以怎樣小小慶祝？",
      "twist": "",
      "deeperQuestion": "你想讓主角被大家注意，還是低調一點？"
    }
  },
  {
    "id": "ponder-v2-family-086",
    "category": "Family",
    "emoji": "🏠",
    "title": "Keeping close",
    "scenario": "You rarely talk with one relative.",
    "question": "What light topic could help you start?",
    "twist": "",
    "deeperQuestion": "Would doing something together feel easier than sitting down to talk?",
    "zh": {
      "title": "親近的方法",
      "scenario": "你跟一位家人不太常聊天。",
      "question": "可以從哪個輕鬆話題開始？",
      "twist": "",
      "deeperQuestion": "一起做事會不會比面對面聊天更容易？"
    }
  },
  {
    "id": "ponder-v2-family-087",
    "category": "Family",
    "emoji": "🏠",
    "title": "Different speeds",
    "scenario": "Some family members eat quickly and others slowly.",
    "question": "What would you like to happen after eating?",
    "twist": "",
    "deeperQuestion": "How could slower eaters avoid feeling rushed?",
    "zh": {
      "title": "各自的節奏",
      "scenario": "有人吃飯快，有人慢。",
      "question": "你希望飯後時間怎樣安排？",
      "twist": "",
      "deeperQuestion": "怎樣讓慢慢吃的人不用覺得在拖時間？"
    }
  },
  {
    "id": "ponder-v2-family-088",
    "category": "Family",
    "emoji": "🏠",
    "title": "Saving a little",
    "scenario": "Your family wants to save for something together.",
    "question": "What would you choose?",
    "twist": "",
    "deeperQuestion": "How could each person contribute without necessarily giving money?",
    "zh": {
      "title": "存下一小筆",
      "scenario": "家裡想一起存錢做一件事。",
      "question": "你最想存來做甚麼？",
      "twist": "",
      "deeperQuestion": "每人可以怎樣參與，不一定要出錢？"
    }
  },
  {
    "id": "ponder-v2-family-089",
    "category": "Family",
    "emoji": "🏠",
    "title": "Making room",
    "scenario": "One relative tends to say little.",
    "question": "How would you invite them into the conversation?",
    "twist": "",
    "deeperQuestion": "How would you make it comfortable if they only want to listen?",
    "zh": {
      "title": "留一個位置",
      "scenario": "有位家人常常比較少說話。",
      "question": "你會怎樣邀請他加入？",
      "twist": "",
      "deeperQuestion": "如果他只想聽，你會怎樣讓他自在？"
    }
  },
  {
    "id": "ponder-v2-family-090",
    "category": "Family",
    "emoji": "🏠",
    "title": "A new discovery",
    "scenario": "You learn about a relative's preference today.",
    "question": "What surprises you a little?",
    "twist": "",
    "deeperQuestion": "How could you use that knowledge when planning something next time?",
    "zh": {
      "title": "一件新發現",
      "scenario": "今天才知道家人的一個喜好。",
      "question": "是哪件事讓你有點意外？",
      "twist": "",
      "deeperQuestion": "下次安排活動時，你可以怎樣記住它？"
    }
  },
  {
    "id": "ponder-v2-family-091",
    "category": "Family",
    "emoji": "🏠",
    "title": "A tiny cookbook",
    "scenario": "You are making a cookbook with just three recipes.",
    "question": "What would the first one be?",
    "twist": "",
    "deeperQuestion": "What family-style tip would you add?",
    "zh": {
      "title": "家庭小食譜",
      "scenario": "你們要寫一本三道菜的小食譜。",
      "question": "第一道會是哪一道？",
      "twist": "",
      "deeperQuestion": "可以加哪句只有家人才懂的提示？"
    }
  },
  {
    "id": "ponder-v2-family-092",
    "category": "Family",
    "emoji": "🏠",
    "title": "Asking for a hand",
    "scenario": "You need a relative's help with something.",
    "question": "How would you ask?",
    "twist": "",
    "deeperQuestion": "Would explaining the task and timing make it easier to help?",
    "zh": {
      "title": "求助的方式",
      "scenario": "你有件事需要家人幫忙。",
      "question": "你最想怎樣開口？",
      "twist": "",
      "deeperQuestion": "講清楚時間和內容，會不會更容易幫忙？"
    }
  },
  {
    "id": "ponder-v2-family-093",
    "category": "Family",
    "emoji": "🏠",
    "title": "A relative's wish",
    "scenario": "Ask a relative what new thing they want to try.",
    "question": "Whose answer are you curious about?",
    "twist": "",
    "deeperQuestion": "What small step could you join them for?",
    "zh": {
      "title": "家人的夢想",
      "scenario": "問一位家人最近想試的新事。",
      "question": "你最想聽誰的答案？",
      "twist": "",
      "deeperQuestion": "你可以陪他做哪個小步驟？"
    }
  },
  {
    "id": "ponder-v2-family-094",
    "category": "Family",
    "emoji": "🏠",
    "title": "Trying again",
    "scenario": "A family activity did not go well last time.",
    "question": "How would you try again?",
    "twist": "",
    "deeperQuestion": "If you changed one part, what would it be?",
    "zh": {
      "title": "重來一次",
      "scenario": "全家一起做的活動上次不太順利。",
      "question": "你願意怎樣再試一次？",
      "twist": "",
      "deeperQuestion": "只改一個安排，你會先改甚麼？"
    }
  },
  {
    "id": "ponder-v2-family-095",
    "category": "Family",
    "emoji": "🏠",
    "title": "Waiting together",
    "scenario": "Your family has a twenty-minute wait.",
    "question": "What could you do together?",
    "twist": "",
    "deeperQuestion": "What game needs no equipment?",
    "zh": {
      "title": "一起等候",
      "scenario": "全家要等候二十分鐘。",
      "question": "你會提議做甚麼打發時間？",
      "twist": "",
      "deeperQuestion": "有甚麼不用道具的小遊戲？"
    }
  },
  {
    "id": "ponder-v2-family-096",
    "category": "Family",
    "emoji": "🏠",
    "title": "Something unsaid",
    "scenario": "A relative has a small habit that makes you feel cared for.",
    "question": "What is it?",
    "twist": "",
    "deeperQuestion": "Would you like to tell them now?",
    "zh": {
      "title": "平常沒說",
      "scenario": "有件家人的小習慣讓你覺得溫暖。",
      "question": "你想起哪一件？",
      "twist": "",
      "deeperQuestion": "你願意現在告訴他嗎？"
    }
  },
  {
    "id": "ponder-v2-family-097",
    "category": "Family",
    "emoji": "🏠",
    "title": "A funny mishap",
    "scenario": "Recall a family mishap that became funny later.",
    "question": "What happened?",
    "twist": "",
    "deeperQuestion": "Who laughed first?",
    "zh": {
      "title": "出錯的笑話",
      "scenario": "想起一次全家手忙腳亂，後來覺得好笑的事。",
      "question": "你記得甚麼？",
      "twist": "",
      "deeperQuestion": "當時誰最先笑出來？"
    }
  },
  {
    "id": "ponder-v2-family-098",
    "category": "Family",
    "emoji": "🏠",
    "title": "Not fully understanding",
    "scenario": "A relative loves something you know nothing about.",
    "question": "What could you ask to understand it a little?",
    "twist": "",
    "deeperQuestion": "Would you give them five minutes to show you?",
    "zh": {
      "title": "不用全懂",
      "scenario": "家人喜歡一件你完全不懂的事。",
      "question": "你會問甚麼來了解一點？",
      "twist": "",
      "deeperQuestion": "你願意讓他介紹五分鐘嗎？"
    }
  },
  {
    "id": "ponder-v2-family-099",
    "category": "Family",
    "emoji": "🏠",
    "title": "The next gathering",
    "scenario": "This family gathering is ending.",
    "question": "What small activity would you add next time?",
    "twist": "",
    "deeperQuestion": "Who would like to help organize it?",
    "zh": {
      "title": "下次見面",
      "scenario": "這次家庭聚會快結束了。",
      "question": "下次你想加一個甚麼小安排？",
      "twist": "",
      "deeperQuestion": "誰願意幫忙一起安排？"
    }
  },
  {
    "id": "ponder-v2-family-100",
    "category": "Family",
    "emoji": "🏠",
    "title": "A thought to keep",
    "scenario": "After hearing your family share, think about what stayed with you.",
    "question": "What sentence would you like to remember?",
    "twist": "",
    "deeperQuestion": "What would you like to ask that person next time?",
    "zh": {
      "title": "今天帶走的話",
      "scenario": "家人剛分享了各自的想法。",
      "question": "你最想記住哪一句話？",
      "twist": "",
      "deeperQuestion": "你下次想再問那個人甚麼？"
    }
  },
  {
    "id": "ponder-v2-party-001",
    "category": "Party",
    "emoji": "🎉",
    "title": "A local escape",
    "scenario": "You suddenly have half a day free.",
    "question": "What nearby place would each person recommend?",
    "twist": "",
    "deeperQuestion": "After hearing the ideas, which route would you try?",
    "zh": {
      "title": "附近半日遊",
      "scenario": "你們突然多出半天空檔。",
      "question": "每人會推薦附近哪個地方？",
      "twist": "",
      "deeperQuestion": "聽完介紹，你最想跟誰的路線走？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v2-party-002",
    "category": "Party",
    "emoji": "🎉",
    "title": "A small-budget outing",
    "scenario": "You each have a small budget for an afternoon out.",
    "question": "What would you plan?",
    "twist": "",
    "deeperQuestion": "Which part could be completely free?",
    "zh": {
      "title": "一百元挑戰",
      "scenario": "你們每人只有一百元玩一個下午。",
      "question": "你會怎樣安排？",
      "twist": "",
      "deeperQuestion": "哪一項活動可以完全免費？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v2-party-003",
    "category": "Party",
    "emoji": "🎉",
    "title": "A curious fact",
    "scenario": "Take turns sharing something you only learned recently.",
    "question": "What would you say?",
    "twist": "",
    "deeperQuestion": "Which part surprised you most?",
    "zh": {
      "title": "一個冷知識",
      "scenario": "輪流分享一件你最近才知道的小事。",
      "question": "你會講甚麼？",
      "twist": "",
      "deeperQuestion": "哪個部分讓你最意外？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v2-party-004",
    "category": "Party",
    "emoji": "🎉",
    "title": "Childhood snacks",
    "scenario": "Each person picks a childhood snack.",
    "question": "What would you choose?",
    "twist": "",
    "deeperQuestion": "Who did you usually eat it with?",
    "zh": {
      "title": "童年的零食",
      "scenario": "每人選一款童年常吃的零食。",
      "question": "你會選哪款？",
      "twist": "",
      "deeperQuestion": "你通常跟誰一起吃？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v2-party-005",
    "category": "Party",
    "emoji": "🎉",
    "title": "Odd but tasty",
    "scenario": "You enjoy a food combination others might find unusual.",
    "question": "What would you recommend?",
    "twist": "",
    "deeperQuestion": "How would you introduce it to someone willing to taste it?",
    "zh": {
      "title": "怪但好吃",
      "scenario": "你有一個別人可能覺得奇怪的食物配搭。",
      "question": "你會推薦甚麼？",
      "twist": "",
      "deeperQuestion": "朋友願意試一口的話，你會怎樣介紹？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v2-party-006",
    "category": "Party",
    "emoji": "🎉",
    "title": "Swap a weekend",
    "scenario": "You swap leisure routines for a day.",
    "question": "What would you have your friend try?",
    "twist": "",
    "deeperQuestion": "Which activity might change their mind?",
    "zh": {
      "title": "週末交換",
      "scenario": "你們交換一天的休閒習慣。",
      "question": "你會帶朋友做甚麼？",
      "twist": "",
      "deeperQuestion": "哪一項最可能讓對方改觀？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v2-party-007",
    "category": "Party",
    "emoji": "🎉",
    "title": "A tiny shop",
    "scenario": "You run a tiny shop together for one day.",
    "question": "What would each person handle?",
    "twist": "",
    "deeperQuestion": "What would you call it?",
    "zh": {
      "title": "朋友小店",
      "scenario": "你們合開一天的小店。",
      "question": "每人會負責哪件事？",
      "twist": "",
      "deeperQuestion": "你們想取甚麼店名？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v2-party-008",
    "category": "Party",
    "emoji": "🎉",
    "title": "A silly skill",
    "scenario": "Share a skill that is not very useful but you do well.",
    "question": "What is yours?",
    "twist": "",
    "deeperQuestion": "Could you demonstrate it now?",
    "zh": {
      "title": "沒用的小本領",
      "scenario": "輪流講一項沒甚麼用、但你很拿手的技能。",
      "question": "你的答案是甚麼？",
      "twist": "",
      "deeperQuestion": "可以現場示範一下嗎？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v2-party-009",
    "category": "Party",
    "emoji": "🎉",
    "title": "A song to share",
    "scenario": "Each person recommends a song for the current mood.",
    "question": "What would you choose?",
    "twist": "",
    "deeperQuestion": "Which part would you want them to listen for?",
    "zh": {
      "title": "一首推薦",
      "scenario": "每人推薦一首適合現在氣氛的歌。",
      "question": "你會選哪首？",
      "twist": "",
      "deeperQuestion": "哪一段最想讓朋友仔細聽？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v2-party-010",
    "category": "Party",
    "emoji": "🎉",
    "title": "Leaving the house",
    "scenario": "There is one thing you always check before going out.",
    "question": "What is it?",
    "twist": "",
    "deeperQuestion": "Was there a funny time you forgot?",
    "zh": {
      "title": "出門習慣",
      "scenario": "你出門前一定會檢查一樣東西。",
      "question": "那是甚麼？",
      "twist": "",
      "deeperQuestion": "有沒有一次忘記了，結果很搞笑？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v2-party-011",
    "category": "Party",
    "emoji": "🎉",
    "title": "A tiny true story",
    "scenario": "You have thirty seconds for a recent funny story.",
    "question": "What would you tell?",
    "twist": "",
    "deeperQuestion": "What detail could your friend ask about?",
    "zh": {
      "title": "真實小故事",
      "scenario": "你有三十秒講一件最近的趣事。",
      "question": "你會講哪件？",
      "twist": "",
      "deeperQuestion": "朋友可以再問你哪個細節？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v2-party-012",
    "category": "Party",
    "emoji": "🎉",
    "title": "Something unfamiliar",
    "scenario": "A friend suggests a type of film you rarely watch.",
    "question": "Which would you try?",
    "twist": "",
    "deeperQuestion": "What would make you more willing to watch it?",
    "zh": {
      "title": "沒看過的類型",
      "scenario": "朋友要推薦你一種平常不看的電影。",
      "question": "你願意試哪種類型？",
      "twist": "",
      "deeperQuestion": "甚麼條件會讓你更願意看？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v2-party-013",
    "category": "Party",
    "emoji": "🎉",
    "title": "A childhood ambition",
    "scenario": "Think of the job you wanted as a child.",
    "question": "What was it?",
    "twist": "",
    "deeperQuestion": "What did you imagine doing all day?",
    "zh": {
      "title": "小時候的夢",
      "scenario": "想起小時候想做的工作。",
      "question": "你的答案是甚麼？",
      "twist": "",
      "deeperQuestion": "那時你以為每天都在做甚麼？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v2-party-014",
    "category": "Party",
    "emoji": "🎉",
    "title": "When we met",
    "scenario": "Think back to when you first met.",
    "question": "What little moment do you remember?",
    "twist": "",
    "deeperQuestion": "Do you remember it the same way?",
    "zh": {
      "title": "相識的畫面",
      "scenario": "回想你們剛認識的時候。",
      "question": "你最記得哪個小片段？",
      "twist": "",
      "deeperQuestion": "大家記得的版本一樣嗎？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v2-party-015",
    "category": "Party",
    "emoji": "🎉",
    "title": "A friendly nickname",
    "scenario": "Describe yourself today as a food.",
    "question": "What would you be?",
    "twist": "",
    "deeperQuestion": "What quality made you choose it?",
    "zh": {
      "title": "一個新綽號",
      "scenario": "用一種食物形容今天的自己。",
      "question": "你會是哪種？",
      "twist": "",
      "deeperQuestion": "哪個特點讓你選了它？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v2-party-016",
    "category": "Party",
    "emoji": "🎉",
    "title": "Our playlist",
    "scenario": "You are making a trip playlist together.",
    "question": "What is your first pick?",
    "twist": "",
    "deeperQuestion": "What would you switch to on the way home?",
    "zh": {
      "title": "共用播放清單",
      "scenario": "你們一起做一張出遊歌單。",
      "question": "你的第一首會放甚麼？",
      "twist": "",
      "deeperQuestion": "回程時你會換哪種音樂？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v2-party-017",
    "category": "Party",
    "emoji": "🎉",
    "title": "Walking conversation",
    "scenario": "You are taking a twenty-minute walk.",
    "question": "What recent little thing would you ask about?",
    "twist": "",
    "deeperQuestion": "What update of your own would you share first?",
    "zh": {
      "title": "散步的話題",
      "scenario": "你們要散步二十分鐘。",
      "question": "你想問朋友哪件最近的小事？",
      "twist": "",
      "deeperQuestion": "你想先分享自己的哪件近況？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v2-party-018",
    "category": "Party",
    "emoji": "🎉",
    "title": "A short trip",
    "scenario": "You have a relaxed overnight trip.",
    "question": "What one thing would each of you want to do?",
    "twist": "",
    "deeperQuestion": "How could the plan include personal downtime?",
    "zh": {
      "title": "理想小旅行",
      "scenario": "你們有兩天一夜，不想太累。",
      "question": "各自最想做哪一件事？",
      "twist": "",
      "deeperQuestion": "怎樣安排，大家都有自己的時間？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v2-party-019",
    "category": "Party",
    "emoji": "🎉",
    "title": "Guess my choice",
    "scenario": "One person silently chooses a dinner dish and the others guess.",
    "question": "Will your friends get it?",
    "twist": "",
    "deeperQuestion": "What clue led to that guess?",
    "zh": {
      "title": "猜我的選擇",
      "scenario": "一人先想好今晚想吃的菜，其他人猜。",
      "question": "你的朋友會猜中嗎？",
      "twist": "",
      "deeperQuestion": "是甚麼線索讓你猜這個？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v2-party-020",
    "category": "Party",
    "emoji": "🎉",
    "title": "Worth revisiting",
    "scenario": "There is a film, book, or show you would revisit.",
    "question": "What would you recommend?",
    "twist": "",
    "deeperQuestion": "Would you notice something different now?",
    "zh": {
      "title": "重看一次",
      "scenario": "有一部作品你願意再看一次。",
      "question": "你會推薦哪部？",
      "twist": "",
      "deeperQuestion": "第一次看和現在，你可能會留意不同地方嗎？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v2-party-021",
    "category": "Party",
    "emoji": "🎉",
    "title": "A friend's lesson",
    "scenario": "You have five minutes to teach a friend something small.",
    "question": "What would you teach?",
    "twist": "",
    "deeperQuestion": "Could you try the first step now?",
    "zh": {
      "title": "朋友教室",
      "scenario": "你有五分鐘教朋友一件小事。",
      "question": "你會教甚麼？",
      "twist": "",
      "deeperQuestion": "第一步可以現在就試嗎？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v2-party-022",
    "category": "Party",
    "emoji": "🎉",
    "title": "Choosing a seat",
    "scenario": "You walk into an empty café.",
    "question": "Where would each person sit?",
    "twist": "",
    "deeperQuestion": "Do you value a window, quiet, or easy conversation?",
    "zh": {
      "title": "咖啡店選位",
      "scenario": "你們進了一間空咖啡店。",
      "question": "每人最想坐哪個位置？",
      "twist": "",
      "deeperQuestion": "你看重窗邊、安靜，還是方便聊天？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v2-party-023",
    "category": "Party",
    "emoji": "🎉",
    "title": "Guide for a day",
    "scenario": "A friend visits your neighbourhood for the first time.",
    "question": "What ordinary place would you show them?",
    "twist": "",
    "deeperQuestion": "What detail would only a regular know?",
    "zh": {
      "title": "當一天導遊",
      "scenario": "朋友第一次來你的生活圈。",
      "question": "你最想帶他去哪個平常地方？",
      "twist": "",
      "deeperQuestion": "那裡有哪個細節只有常客會知道？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v2-party-024",
    "category": "Party",
    "emoji": "🎉",
    "title": "A small recommendation",
    "scenario": "Something inexpensive has pleased you lately.",
    "question": "What would you recommend?",
    "twist": "",
    "deeperQuestion": "If not an object, what habit would you recommend?",
    "zh": {
      "title": "小小推薦",
      "scenario": "最近有件平價好物讓你滿意。",
      "question": "你會推薦甚麼？",
      "twist": "",
      "deeperQuestion": "如果不推薦物品，你會推薦哪個習慣？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v2-party-025",
    "category": "Party",
    "emoji": "🎉",
    "title": "A funny misunderstanding",
    "scenario": "You once misheard something and found it funny later.",
    "question": "What happened?",
    "twist": "",
    "deeperQuestion": "What did you think they meant?",
    "zh": {
      "title": "有趣的誤會",
      "scenario": "你曾經聽錯一句話，後來覺得好笑。",
      "question": "你記得哪次？",
      "twist": "",
      "deeperQuestion": "當時你以為對方說甚麼？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v2-party-026",
    "category": "Party",
    "emoji": "🎉",
    "title": "Introducing each other",
    "scenario": "You are introducing your friend to someone new.",
    "question": "What interesting strength would you mention?",
    "twist": "",
    "deeperQuestion": "What would the person being introduced add?",
    "zh": {
      "title": "互相介紹",
      "scenario": "你要把朋友介紹給新朋友。",
      "question": "你會先講哪個有趣優點？",
      "twist": "",
      "deeperQuestion": "被介紹的人想補充哪一句？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v2-party-027",
    "category": "Party",
    "emoji": "🎉",
    "title": "A tiny swap",
    "scenario": "You each bring one useful idea to trade.",
    "question": "What time-saving trick have you found?",
    "twist": "",
    "deeperQuestion": "Where could your friend use it?",
    "zh": {
      "title": "迷你交換",
      "scenario": "你們各自帶一個好點子交換。",
      "question": "你最近找到哪個省事方法？",
      "twist": "",
      "deeperQuestion": "對方可以在哪個場合用到？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v2-party-028",
    "category": "Party",
    "emoji": "🎉",
    "title": "Trying together",
    "scenario": "There is something you feel shy trying alone.",
    "question": "What would you invite a friend to try?",
    "twist": "",
    "deeperQuestion": "What small version would be easiest to start with?",
    "zh": {
      "title": "想一起試",
      "scenario": "有件事自己試有點害羞。",
      "question": "你最想約朋友一起試甚麼？",
      "twist": "",
      "deeperQuestion": "怎樣的小版本最容易開始？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v2-party-029",
    "category": "Party",
    "emoji": "🎉",
    "title": "A weather report",
    "scenario": "Describe your mood as weather.",
    "question": "What is your forecast right now?",
    "twist": "",
    "deeperQuestion": "What small thing could improve the forecast?",
    "zh": {
      "title": "今天天氣",
      "scenario": "用天氣形容今天心情。",
      "question": "你現在是甚麼天氣？",
      "twist": "",
      "deeperQuestion": "哪件小事可能讓天氣轉好一點？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v2-party-030",
    "category": "Party",
    "emoji": "🎉",
    "title": "A little collection",
    "scenario": "You could collect something inexpensive.",
    "question": "What would you choose?",
    "twist": "",
    "deeperQuestion": "Where would you look for the first item?",
    "zh": {
      "title": "一件收藏",
      "scenario": "你可以收集一種不昂貴的東西。",
      "question": "你想收集甚麼？",
      "twist": "",
      "deeperQuestion": "第一件會從哪裡開始找？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v2-party-031",
    "category": "Party",
    "emoji": "🎉",
    "title": "Help me choose",
    "scenario": "Ask your friends to suggest a new hobby.",
    "question": "Which suggestion appeals to you?",
    "twist": "",
    "deeperQuestion": "Why did they think it would suit you?",
    "zh": {
      "title": "幫我選一個",
      "scenario": "你想試一個新興趣，請朋友提議。",
      "question": "哪個建議你最想試？",
      "twist": "",
      "deeperQuestion": "對方為甚麼覺得它適合你？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v2-party-032",
    "category": "Party",
    "emoji": "🎉",
    "title": "When there is time",
    "scenario": "You unexpectedly get an extra hour today.",
    "question": "What would you do alone or with a friend?",
    "twist": "",
    "deeperQuestion": "Why does it often get pushed aside?",
    "zh": {
      "title": "有空就做",
      "scenario": "今天突然多了一小時。",
      "question": "你想獨自做甚麼，或邀朋友做甚麼？",
      "twist": "",
      "deeperQuestion": "這件事平常為甚麼容易被擱下？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v2-party-033",
    "category": "Party",
    "emoji": "🎉",
    "title": "A nice surprise",
    "scenario": "A friend once did something small that helped you.",
    "question": "What comes to mind?",
    "twist": "",
    "deeperQuestion": "Do they know it mattered to you?",
    "zh": {
      "title": "朋友的驚喜",
      "scenario": "朋友做過一件讓你很受用的小事。",
      "question": "你想起哪件？",
      "twist": "",
      "deeperQuestion": "他知道那件事對你有用嗎？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v2-party-034",
    "category": "Party",
    "emoji": "🎉",
    "title": "Next time",
    "scenario": "Today's gathering is ending.",
    "question": "What simple activity would you try next time?",
    "twist": "",
    "deeperQuestion": "Who would like to suggest a date?",
    "zh": {
      "title": "下次再聚",
      "scenario": "今天聚會快完了。",
      "question": "下次你想一起試哪個簡單活動？",
      "twist": "",
      "deeperQuestion": "誰願意先提出一個日期？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v2-party-035",
    "category": "Party",
    "emoji": "🎉",
    "title": "A themed restaurant",
    "scenario": "You are opening a themed restaurant; everyone offers an idea.",
    "question": "Which theme would you choose?",
    "twist": "",
    "deeperQuestion": "What would you name the signature dish?",
    "zh": {
      "title": "一間主題餐廳",
      "scenario": "你們合開一間主題餐廳，每人提一個點子。",
      "question": "最後想選甚麼主題？",
      "twist": "",
      "deeperQuestion": "招牌菜要叫甚麼名字？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v2-party-036",
    "category": "Party",
    "emoji": "🎉",
    "title": "A story relay",
    "scenario": "Start with: We opened the fridge and found a train ticket.",
    "question": "Add one sentence each; what happens next?",
    "twist": "",
    "deeperQuestion": "How could the last person end the story?",
    "zh": {
      "title": "故事接龍",
      "scenario": "故事由「我們打開冰箱，發現一張車票」開始。",
      "question": "每人接一句，接下來發生甚麼？",
      "twist": "",
      "deeperQuestion": "最後一人可以怎樣收尾？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v2-party-037",
    "category": "Party",
    "emoji": "🎉",
    "title": "A silly product",
    "scenario": "You have to sell an umbrella that does not block rain.",
    "question": "What use would each person invent?",
    "twist": "",
    "deeperQuestion": "Pick one use and give it a slogan.",
    "zh": {
      "title": "荒謬產品",
      "scenario": "你們要推銷一把不擋雨的雨傘。",
      "question": "各人會想出甚麼用途？",
      "twist": "",
      "deeperQuestion": "選一個用途，替它寫一句廣告詞。"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v2-party-038",
    "category": "Party",
    "emoji": "🎉",
    "title": "A dinner agreement",
    "scenario": "Everyone suggests one food.",
    "question": "How would you make a meal that works for everyone?",
    "twist": "",
    "deeperQuestion": "Could one item be served separately for different tastes?",
    "zh": {
      "title": "晚餐共識",
      "scenario": "每人提出一種想吃的食物。",
      "question": "你們怎樣組成大家都接受的一餐？",
      "twist": "",
      "deeperQuestion": "有沒有一樣可以分開上桌，照顧不同口味？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v2-party-039",
    "category": "Party",
    "emoji": "🎉",
    "title": "A minute-long travel pitch",
    "scenario": "Split into two groups and design a local outing.",
    "question": "How would you pitch it?",
    "twist": "",
    "deeperQuestion": "Could you combine one strength from each plan?",
    "zh": {
      "title": "一分鐘旅行社",
      "scenario": "分成兩組，各設計一個不用出城的行程。",
      "question": "你們想怎樣吸引大家？",
      "twist": "",
      "deeperQuestion": "兩個行程能不能各取一個優點？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v2-party-040",
    "category": "Party",
    "emoji": "🎉",
    "title": "Finding common ground",
    "scenario": "Take one minute to find three shared preferences.",
    "question": "What did you find?",
    "twist": "",
    "deeperQuestion": "Which shared preference surprised you most?",
    "zh": {
      "title": "共同點搜尋",
      "scenario": "用一分鐘找出全組三個共同喜好。",
      "question": "你們找到了甚麼？",
      "twist": "",
      "deeperQuestion": "哪個共同點最讓大家意外？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v2-party-041",
    "category": "Party",
    "emoji": "🎉",
    "title": "Three things only",
    "scenario": "For a picnic, your group can bring three extra items.",
    "question": "What would you choose?",
    "twist": "",
    "deeperQuestion": "Which item could serve two purposes?",
    "zh": {
      "title": "只能帶三樣",
      "scenario": "你們去野餐，只能共同帶三種額外用品。",
      "question": "大家會選甚麼？",
      "twist": "",
      "deeperQuestion": "哪個物品可以一物兩用？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v2-party-042",
    "category": "Party",
    "emoji": "🎉",
    "title": "A useless invention fair",
    "scenario": "Invent an exaggerated solution to a tiny annoyance.",
    "question": "What would yours do?",
    "twist": "",
    "deeperQuestion": "Which idea would you almost want to buy?",
    "zh": {
      "title": "無用發明展",
      "scenario": "每人想一個解決小麻煩的誇張發明。",
      "question": "你的發明是甚麼？",
      "twist": "",
      "deeperQuestion": "哪個點子讓你有一點想買？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v2-party-043",
    "category": "Party",
    "emoji": "🎉",
    "title": "A shared menu",
    "scenario": "Each person chooses one ingredient.",
    "question": "What dish could you make from them?",
    "twist": "",
    "deeperQuestion": "What seasoning might rescue an odd combination?",
    "zh": {
      "title": "合作菜單",
      "scenario": "每人選一樣食材。",
      "question": "你們可以拼出甚麼菜式？",
      "twist": "",
      "deeperQuestion": "如果味道太奇怪，可以加哪樣調味救場？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v2-party-044",
    "category": "Party",
    "emoji": "🎉",
    "title": "A new ending",
    "scenario": "Choose a fairy tale everyone knows.",
    "question": "How would you change the ending?",
    "twist": "",
    "deeperQuestion": "Which character would be happiest with the new ending?",
    "zh": {
      "title": "童話新結局",
      "scenario": "選一個大家知道的童話。",
      "question": "你們想把結局改成怎樣？",
      "twist": "",
      "deeperQuestion": "新結局最開心的是哪個角色？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v2-party-045",
    "category": "Party",
    "emoji": "🎉",
    "title": "A new show",
    "scenario": "You are hosting a show together.",
    "question": "What would the first episode cover?",
    "twist": "",
    "deeperQuestion": "What segment could each person handle?",
    "zh": {
      "title": "開場三十秒",
      "scenario": "你們要一起主持一個節目。",
      "question": "第一集想聊甚麼？",
      "twist": "",
      "deeperQuestion": "每人可以負責哪個小環節？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v2-party-046",
    "category": "Party",
    "emoji": "🎉",
    "title": "Trip roles",
    "scenario": "You are planning a trip together.",
    "question": "What preparation would each person choose?",
    "twist": "",
    "deeperQuestion": "How could you split a task nobody wants?",
    "zh": {
      "title": "旅行分工",
      "scenario": "你們一起去旅行。",
      "question": "每人最想負責哪一份準備？",
      "twist": "",
      "deeperQuestion": "哪個工作大家都不想做，可以怎樣分小？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v2-party-047",
    "category": "Party",
    "emoji": "🎉",
    "title": "A party rule",
    "scenario": "Add one fun rule for tonight that does not put anyone on the spot.",
    "question": "What would it be?",
    "twist": "",
    "deeperQuestion": "How could someone opt out comfortably?",
    "zh": {
      "title": "聚會新規則",
      "scenario": "你們可以為今晚加一條有趣又不為難人的規則。",
      "question": "會是甚麼？",
      "twist": "",
      "deeperQuestion": "有人不想參與時，可以怎樣跳過？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v2-party-048",
    "category": "Party",
    "emoji": "🎉",
    "title": "A mascot meeting",
    "scenario": "Your friend group needs a mascot.",
    "question": "What animal would it be?",
    "twist": "",
    "deeperQuestion": "What would its signature move be?",
    "zh": {
      "title": "吉祥物會議",
      "scenario": "這個朋友圈需要一隻吉祥物。",
      "question": "你們會選哪種動物？",
      "twist": "",
      "deeperQuestion": "牠會有甚麼招牌動作？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v2-party-049",
    "category": "Party",
    "emoji": "🎉",
    "title": "Everyday awards",
    "scenario": "Give an award to an ordinary little thing.",
    "question": "What would yours be called?",
    "twist": "",
    "deeperQuestion": "Who or what deserves that award this year?",
    "zh": {
      "title": "平凡事頒獎",
      "scenario": "每人替一件平凡小事頒獎。",
      "question": "你的獎項叫甚麼？",
      "twist": "",
      "deeperQuestion": "今年誰或甚麼東西值得拿這個獎？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v2-party-050",
    "category": "Party",
    "emoji": "🎉",
    "title": "A free day",
    "scenario": "Everyone unexpectedly has tomorrow off.",
    "question": "Suggest activities and make a plan; what goes in?",
    "twist": "",
    "deeperQuestion": "How could you leave room to relax?",
    "zh": {
      "title": "明天放假",
      "scenario": "大家明天突然都放假。",
      "question": "每人提一個活動，最後怎樣排？",
      "twist": "",
      "deeperQuestion": "怎樣保留一段不用趕行程的時間？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v2-party-051",
    "category": "Party",
    "emoji": "🎉",
    "title": "A visitor's guide",
    "scenario": "An alien tries hotpot for the first time.",
    "question": "What three things would you explain first?",
    "twist": "",
    "deeperQuestion": "Which custom would be hardest to explain?",
    "zh": {
      "title": "外星人指南",
      "scenario": "一位外星人第一次來吃火鍋。",
      "question": "你們會先教他哪三件事？",
      "twist": "",
      "deeperQuestion": "哪個習慣最難解釋？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v2-party-052",
    "category": "Party",
    "emoji": "🎉",
    "title": "A tiny superpower",
    "scenario": "Invent a superpower useful only for small everyday tasks.",
    "question": "What would yours be?",
    "twist": "",
    "deeperQuestion": "What problem could your combined powers solve?",
    "zh": {
      "title": "辦公室超能力",
      "scenario": "每人想一個只在日常小事有用的超能力。",
      "question": "你會選甚麼？",
      "twist": "",
      "deeperQuestion": "全組能力加起來，可以解決甚麼麻煩？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v2-party-053",
    "category": "Party",
    "emoji": "🎉",
    "title": "Our ideal park",
    "scenario": "Design a small local park.",
    "question": "Each person can add one feature; what would it be?",
    "twist": "",
    "deeperQuestion": "How could people of different ages enjoy it?",
    "zh": {
      "title": "一間理想公園",
      "scenario": "你們替附近設計一個小公園。",
      "question": "每人只能加一樣設施，會加甚麼？",
      "twist": "",
      "deeperQuestion": "不同年紀的人怎樣都能用到？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v2-party-054",
    "category": "Party",
    "emoji": "🎉",
    "title": "A simple slogan",
    "scenario": "Choose an ordinary object on the table.",
    "question": "What exaggerated slogan would you give it?",
    "twist": "",
    "deeperQuestion": "What would an extremely honest version say?",
    "zh": {
      "title": "一句廣告",
      "scenario": "挑桌上一件普通物品。",
      "question": "你們會替它寫甚麼誇張廣告？",
      "twist": "",
      "deeperQuestion": "換成非常誠實的版本，又會怎樣說？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v2-party-055",
    "category": "Party",
    "emoji": "🎉",
    "title": "Three small pleasures",
    "scenario": "Everyone names an inexpensive pleasure.",
    "question": "Which three would you put into a weekend?",
    "twist": "",
    "deeperQuestion": "Which could you do right now?",
    "zh": {
      "title": "三樣小幸福",
      "scenario": "大家各講一件不用太多錢的快樂。",
      "question": "你們會選哪三件排進週末？",
      "twist": "",
      "deeperQuestion": "哪一件現在就能做到？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v2-party-056",
    "category": "Party",
    "emoji": "🎉",
    "title": "Working in pairs",
    "scenario": "Work in pairs to design a breakfast.",
    "question": "What combination would you offer?",
    "twist": "",
    "deeperQuestion": "How did you choose between sweet and savoury?",
    "zh": {
      "title": "雙人搭檔",
      "scenario": "分成兩人一組，設計一份早餐。",
      "question": "你們想推出甚麼組合？",
      "twist": "",
      "deeperQuestion": "你們怎樣決定甜的還是鹹的？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v2-party-057",
    "category": "Party",
    "emoji": "🎉",
    "title": "A group playlist",
    "scenario": "Each person adds a song for an outing.",
    "question": "What mood would the playlist have?",
    "twist": "",
    "deeperQuestion": "Whose choice surprised you pleasantly?",
    "zh": {
      "title": "共同歌單",
      "scenario": "每人放一首適合出門玩的歌。",
      "question": "這張歌單會是甚麼氣氛？",
      "twist": "",
      "deeperQuestion": "誰的選曲最出乎你意料？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v2-party-058",
    "category": "Party",
    "emoji": "🎉",
    "title": "A light debate",
    "scenario": "Half argue for early starts on holiday and half for sleeping in.",
    "question": "What reason would you offer?",
    "twist": "",
    "deeperQuestion": "Can you design a morning that suits both sides?",
    "zh": {
      "title": "迷你辯論",
      "scenario": "一半人支持旅行早起，一半人支持睡晚。",
      "question": "你會用哪個理由說服對方？",
      "twist": "",
      "deeperQuestion": "可以設計一個兩邊都滿意的早上嗎？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v2-party-059",
    "category": "Party",
    "emoji": "🎉",
    "title": "A new holiday",
    "scenario": "Invent a yearly holiday celebrating something ordinary.",
    "question": "What would it honour?",
    "twist": "",
    "deeperQuestion": "What small ritual would everyone do that day?",
    "zh": {
      "title": "一個新節日",
      "scenario": "你們可以創一個一年一次的小節日。",
      "question": "想慶祝甚麼普通事情？",
      "twist": "",
      "deeperQuestion": "當天大家要做的一個小儀式是甚麼？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v2-party-060",
    "category": "Party",
    "emoji": "🎉",
    "title": "A memory map",
    "scenario": "Name places tied to memories with friends.",
    "question": "Which stops would you connect into a route?",
    "twist": "",
    "deeperQuestion": "Which stop would you most like to revisit?",
    "zh": {
      "title": "共同回憶地圖",
      "scenario": "輪流說一個跟朋友有回憶的地方。",
      "question": "你們想把哪幾站連成路線？",
      "twist": "",
      "deeperQuestion": "哪一站最值得再去一次？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v2-party-061",
    "category": "Party",
    "emoji": "🎉",
    "title": "One instruction",
    "scenario": "Teach someone to make tea, one sentence per person.",
    "question": "What is the first instruction?",
    "twist": "",
    "deeperQuestion": "Did anyone assume a step was too obvious to mention?",
    "zh": {
      "title": "只有一句指示",
      "scenario": "你們要教人怎樣沖一杯茶，但每人只能說一句。",
      "question": "第一句會是甚麼？",
      "twist": "",
      "deeperQuestion": "有沒有哪一步被大家以為不用說？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v2-party-062",
    "category": "Party",
    "emoji": "🎉",
    "title": "A welcome gift",
    "scenario": "A new friend joins.",
    "question": "Make a symbolic welcome gift from objects nearby; what would you use?",
    "twist": "",
    "deeperQuestion": "What welcome message would you add?",
    "zh": {
      "title": "一份歡迎禮",
      "scenario": "有新朋友加入聚會。",
      "question": "你們用現場物品設計一份象徵式歡迎禮，會用甚麼？",
      "twist": "",
      "deeperQuestion": "你想附上哪一句歡迎的話？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v2-party-063",
    "category": "Party",
    "emoji": "🎉",
    "title": "A silly sports day",
    "scenario": "Invent a competition that needs no running or jumping.",
    "question": "What is your event?",
    "twist": "",
    "deeperQuestion": "How could everyone join easily?",
    "zh": {
      "title": "荒謬運動會",
      "scenario": "每人設計一個不用跑跳的比賽。",
      "question": "你的項目是甚麼？",
      "twist": "",
      "deeperQuestion": "怎樣讓所有人都容易參加？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v2-party-064",
    "category": "Party",
    "emoji": "🎉",
    "title": "A restaurant panel",
    "scenario": "You are reviewing a restaurant with only three criteria.",
    "question": "What would they be?",
    "twist": "",
    "deeperQuestion": "Which criterion had you not considered before?",
    "zh": {
      "title": "餐廳評審團",
      "scenario": "你們評一家餐廳，只能訂三個標準。",
      "question": "會選哪三個？",
      "twist": "",
      "deeperQuestion": "哪個標準是你們原本沒想到的？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v2-party-065",
    "category": "Party",
    "emoji": "🎉",
    "title": "Two-sentence introductions",
    "scenario": "Introduce a hobby in two sentences.",
    "question": "What would you want everyone to know?",
    "twist": "",
    "deeperQuestion": "Which hobby made you want to ask more?",
    "zh": {
      "title": "兩句介紹",
      "scenario": "每人用兩句話介紹一項興趣。",
      "question": "你最想讓大家知道甚麼？",
      "twist": "",
      "deeperQuestion": "哪個興趣讓你想多問一句？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v2-party-066",
    "category": "Party",
    "emoji": "🎉",
    "title": "An unexpected task",
    "scenario": "You have ten minutes before a guest arrives.",
    "question": "What three things would you do first?",
    "twist": "",
    "deeperQuestion": "What could you leave alone?",
    "zh": {
      "title": "突發小任務",
      "scenario": "你們要在十分鐘內迎接一位客人。",
      "question": "先做哪三件事？",
      "twist": "",
      "deeperQuestion": "哪件事可以不用管？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v2-party-067",
    "category": "Party",
    "emoji": "🎉",
    "title": "An idea to keep",
    "scenario": "You have heard everyone's ideas.",
    "question": "Which would you like to try?",
    "twist": "",
    "deeperQuestion": "Who would you invite to join you?",
    "zh": {
      "title": "帶走一個點子",
      "scenario": "大家剛分享了各自的點子。",
      "question": "你最想試哪個人的一個點子？",
      "twist": "",
      "deeperQuestion": "你想邀誰一起做？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v2-party-068",
    "category": "Party",
    "emoji": "🎉",
    "title": "Sweet or savoury",
    "scenario": "Everyone chooses a sweet or savoury breakfast at once.",
    "question": "Which side are you on?",
    "twist": "",
    "deeperQuestion": "Ask one person from each side for a recommendation.",
    "zh": {
      "title": "甜鹹投票",
      "scenario": "大家同時選甜早餐或鹹早餐。",
      "question": "你站哪一邊？",
      "twist": "",
      "deeperQuestion": "請兩邊各一人推薦一款早餐。"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v2-party-069",
    "category": "Party",
    "emoji": "🎉",
    "title": "Early or late",
    "scenario": "Everyone chooses early mornings or late nights.",
    "question": "Which group is larger?",
    "twist": "",
    "deeperQuestion": "Invite one person from each side to say what they enjoy about it.",
    "zh": {
      "title": "早鳥夜貓",
      "scenario": "大家同時選早起或晚睡。",
      "question": "哪一邊人比較多？",
      "twist": "",
      "deeperQuestion": "各請一人講一個喜歡那段時間的理由。"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v2-party-070",
    "category": "Party",
    "emoji": "🎉",
    "title": "A one-line update",
    "scenario": "Each person gives a one-sentence update about a small discovery.",
    "question": "What would yours be?",
    "twist": "",
    "deeperQuestion": "Which answer would you like to hear more about later?",
    "zh": {
      "title": "一句近況",
      "scenario": "每人只用一句話講最近的小發現。",
      "question": "你會分享甚麼？",
      "twist": "",
      "deeperQuestion": "有哪個答案讓你想稍後再聊？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v2-party-071",
    "category": "Party",
    "emoji": "🎉",
    "title": "Find a shared interest",
    "scenario": "Pair up and take thirty seconds to find a shared interest.",
    "question": "What did you find?",
    "twist": "",
    "deeperQuestion": "Could you find a different shared interest with a new partner?",
    "zh": {
      "title": "快速找同好",
      "scenario": "兩人一組，用三十秒找一個共同喜好。",
      "question": "你們找到了甚麼？",
      "twist": "",
      "deeperQuestion": "換一位搭檔，能不能找到不同的共同點？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v2-party-072",
    "category": "Party",
    "emoji": "🎉",
    "title": "Sea or hills",
    "scenario": "For your next outing, choose the seaside or the hills.",
    "question": "What is your vote?",
    "twist": "",
    "deeperQuestion": "Can anyone think of a place with a little of both?",
    "zh": {
      "title": "海邊山上",
      "scenario": "下一次出遊，大家選海邊或山上。",
      "question": "你會怎樣投？",
      "twist": "",
      "deeperQuestion": "誰想到一個兩者都能沾邊的地方？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v2-party-073",
    "category": "Party",
    "emoji": "🎉",
    "title": "Party soundtrack",
    "scenario": "Use one word each for the music you want.",
    "question": "What direction would the playlist take?",
    "twist": "",
    "deeperQuestion": "Could each taste get a turn for one song?",
    "zh": {
      "title": "聚會配樂",
      "scenario": "每人用一個詞形容想聽的音樂。",
      "question": "今晚的歌單會偏向甚麼？",
      "twist": "",
      "deeperQuestion": "可以輪流讓不同口味都有一首嗎？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v2-party-074",
    "category": "Party",
    "emoji": "🎉",
    "title": "Our group gesture",
    "scenario": "In small groups, invent a simple gesture.",
    "question": "Which would work for tonight's group photo?",
    "twist": "",
    "deeperQuestion": "What alternative could someone use if they prefer not to pose?",
    "zh": {
      "title": "全場招牌動作",
      "scenario": "分成小組，各想一個簡單手勢。",
      "question": "哪個最適合做今晚的合照動作？",
      "twist": "",
      "deeperQuestion": "不想做動作的人可以用甚麼替代？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v2-party-075",
    "category": "Party",
    "emoji": "🎉",
    "title": "A quick recommendation",
    "scenario": "Each person gets ten seconds to recommend something they enjoy.",
    "question": "What is yours?",
    "twist": "",
    "deeperQuestion": "Which recommendation attracts the most interest?",
    "zh": {
      "title": "最短推薦",
      "scenario": "每人十秒推薦一樣最近喜歡的事物。",
      "question": "你想介紹甚麼？",
      "twist": "",
      "deeperQuestion": "哪一項最多人想試？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v2-party-076",
    "category": "Party",
    "emoji": "🎉",
    "title": "Snack final",
    "scenario": "Nominate four snacks, then vote for one favourite.",
    "question": "What is your pick?",
    "twist": "",
    "deeperQuestion": "What alternative could include different dietary needs?",
    "zh": {
      "title": "零食決賽",
      "scenario": "大家提名四款零食，再選最想吃的一款。",
      "question": "你會投哪款？",
      "twist": "",
      "deeperQuestion": "如果要照顧不同飲食需要，可以加甚麼選擇？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v2-party-077",
    "category": "Party",
    "emoji": "🎉",
    "title": "Two choices",
    "scenario": "The host offers two choices: planned or spontaneous.",
    "question": "Everyone answers at once; which are you?",
    "twist": "",
    "deeperQuestion": "Invite one person from each side to share a good experience.",
    "zh": {
      "title": "左右手選擇",
      "scenario": "主持人問「計劃好，還是隨興玩」。",
      "question": "大家同時選，你偏哪種？",
      "twist": "",
      "deeperQuestion": "各請一人分享一次玩得開心的例子。"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v2-party-078",
    "category": "Party",
    "emoji": "🎉",
    "title": "A word relay",
    "scenario": "Add one word each to create an outrageous event name.",
    "question": "What would you add?",
    "twist": "",
    "deeperQuestion": "What would this event actually involve?",
    "zh": {
      "title": "活動名字接龍",
      "scenario": "每人加一個詞，合寫一個誇張活動名稱。",
      "question": "輪到你會加甚麼？",
      "twist": "",
      "deeperQuestion": "最後這個活動到底在做甚麼？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v2-party-079",
    "category": "Party",
    "emoji": "🎉",
    "title": "Teams of three",
    "scenario": "Form small teams of about three and choose a name.",
    "question": "What is yours?",
    "twist": "",
    "deeperQuestion": "What simple gesture would introduce your team?",
    "zh": {
      "title": "三人小隊",
      "scenario": "分成三人左右的小組，替小隊取一個名字。",
      "question": "你們想叫甚麼？",
      "twist": "",
      "deeperQuestion": "用哪個小動作介紹你們？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v2-party-080",
    "category": "Party",
    "emoji": "🎉",
    "title": "Tiny powers",
    "scenario": "Each person names an everyday superpower in one sentence.",
    "question": "What is yours?",
    "twist": "",
    "deeperQuestion": "Which powers would work well together?",
    "zh": {
      "title": "最小的超能力",
      "scenario": "每人用一句話說一個日常超能力。",
      "question": "你的能力是甚麼？",
      "twist": "",
      "deeperQuestion": "哪些能力組合起來最方便？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v2-party-081",
    "category": "Party",
    "emoji": "🎉",
    "title": "Guess the number",
    "scenario": "Guess how many people here enjoy rainy days, then reveal the answers.",
    "question": "What is your guess?",
    "twist": "",
    "deeperQuestion": "Ask someone who likes rain what they enjoy doing then.",
    "zh": {
      "title": "猜數量",
      "scenario": "先猜今晚有多少人喜歡下雨天，再揭曉。",
      "question": "你的估計是多少？",
      "twist": "",
      "deeperQuestion": "請一位喜歡雨天的人分享最愛做的事。"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v2-party-082",
    "category": "Party",
    "emoji": "🎉",
    "title": "A shared list",
    "scenario": "Go around naming free activities without repeating.",
    "question": "What would you add?",
    "twist": "",
    "deeperQuestion": "Which could become your next gathering?",
    "zh": {
      "title": "共同清單",
      "scenario": "全場輪流說一個不用花錢的活動，不能重複。",
      "question": "你會加甚麼？",
      "twist": "",
      "deeperQuestion": "哪個可以留作下次聚會？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v2-party-083",
    "category": "Party",
    "emoji": "🎉",
    "title": "A colour check-in",
    "scenario": "Each person describes today with a colour.",
    "question": "Which would you choose?",
    "twist": "",
    "deeperQuestion": "Would anyone like to explain their choice in one sentence?",
    "zh": {
      "title": "今天像甚麼",
      "scenario": "每人用一種顏色形容今天。",
      "question": "你會選甚麼顏色？",
      "twist": "",
      "deeperQuestion": "想解釋的人，可以用一句話說原因嗎？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v2-party-084",
    "category": "Party",
    "emoji": "🎉",
    "title": "City or countryside",
    "scenario": "For a day off, choose exploring the city or relaxing outside it.",
    "question": "Which do you prefer?",
    "twist": "",
    "deeperQuestion": "Let each side suggest an easy destination.",
    "zh": {
      "title": "城市還是郊外",
      "scenario": "有一日假期，大家選城市閒逛或郊外放空。",
      "question": "你想去哪邊？",
      "twist": "",
      "deeperQuestion": "兩邊各提一個不用太多準備的去處。"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v2-party-085",
    "category": "Party",
    "emoji": "🎉",
    "title": "A group poster",
    "scenario": "In small groups, create a poster slogan for tonight.",
    "question": "What would it say?",
    "twist": "",
    "deeperQuestion": "Which best matches the actual mood?",
    "zh": {
      "title": "合作海報",
      "scenario": "分成小組，替今晚聚會想一句海報標語。",
      "question": "你們會寫甚麼？",
      "twist": "",
      "deeperQuestion": "哪句最貼近今晚真實氣氛？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v2-party-086",
    "category": "Party",
    "emoji": "🎉",
    "title": "Everyday bingo",
    "scenario": "Name one small thing you did today; others signal if they did it too.",
    "question": "What is yours?",
    "twist": "",
    "deeperQuestion": "Which turned out to be most common?",
    "zh": {
      "title": "小事賓果",
      "scenario": "每人說一件今天做過的小事，有做過的人示意。",
      "question": "你會說哪件？",
      "twist": "",
      "deeperQuestion": "哪件事原來最多人都做過？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v2-party-087",
    "category": "Party",
    "emoji": "🎉",
    "title": "A welcome line",
    "scenario": "In small groups, think of an opening line that helps a newcomer relax.",
    "question": "What is yours?",
    "twist": "",
    "deeperQuestion": "What common opening question can feel pressuring?",
    "zh": {
      "title": "一句歡迎",
      "scenario": "分成小組，想一句讓新人放鬆的開場白。",
      "question": "你們會怎樣說？",
      "twist": "",
      "deeperQuestion": "哪種常見問題反而容易讓人有壓力？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v2-party-088",
    "category": "Party",
    "emoji": "🎉",
    "title": "Our own holiday",
    "scenario": "Each small group proposes a fun holiday, then everyone picks one.",
    "question": "What would yours celebrate?",
    "twist": "",
    "deeperQuestion": "What is the simplest way to celebrate it?",
    "zh": {
      "title": "共同節日",
      "scenario": "各小組提議一個有趣節日，再全場選一個。",
      "question": "你們想慶祝甚麼？",
      "twist": "",
      "deeperQuestion": "當天最簡單的慶祝動作是甚麼？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v2-party-089",
    "category": "Party",
    "emoji": "🎉",
    "title": "A direction to go",
    "scenario": "Everyone names one place they want to visit.",
    "question": "What pattern appears in the answers?",
    "twist": "",
    "deeperQuestion": "Could a few people plan the same small outing?",
    "zh": {
      "title": "想去的方向",
      "scenario": "每人只說一個想去的地方。",
      "question": "大家的答案最常落在哪一類？",
      "twist": "",
      "deeperQuestion": "有沒有幾個人可以約同一個小行程？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v2-party-090",
    "category": "Party",
    "emoji": "🎉",
    "title": "Ten-second introductions",
    "scenario": "Give the person beside you a ten-second introduction to a hobby.",
    "question": "What would you say?",
    "twist": "",
    "deeperQuestion": "What did they most want you to know?",
    "zh": {
      "title": "十秒介紹",
      "scenario": "跟身旁的人各用十秒介紹一項興趣。",
      "question": "你想講甚麼？",
      "twist": "",
      "deeperQuestion": "你記得對方最想讓你知道哪一點？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v2-party-091",
    "category": "Party",
    "emoji": "🎉",
    "title": "Quiet or lively",
    "scenario": "For an ideal weekend, choose quiet or lively.",
    "question": "What is your answer today?",
    "twist": "",
    "deeperQuestion": "Would your answer change after a busy week?",
    "zh": {
      "title": "安靜或熱鬧",
      "scenario": "理想週末，大家選安靜還是熱鬧。",
      "question": "你今天的答案是甚麼？",
      "twist": "",
      "deeperQuestion": "你的答案會隨這星期忙不忙而改嗎？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v2-party-092",
    "category": "Party",
    "emoji": "🎉",
    "title": "Create a character",
    "scenario": "Each group invents a character who only helps with tiny tasks.",
    "question": "What do they do?",
    "twist": "",
    "deeperQuestion": "What tiny problem is the character afraid of?",
    "zh": {
      "title": "一起創角色",
      "scenario": "每個小組設計一個只會幫小忙的角色。",
      "question": "他會做甚麼？",
      "twist": "",
      "deeperQuestion": "這個角色最怕哪種小麻煩？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v2-party-093",
    "category": "Party",
    "emoji": "🎉",
    "title": "Casting a team",
    "scenario": "Each group is making a short adventure film.",
    "question": "What setting would you choose?",
    "twist": "",
    "deeperQuestion": "Describe the first scene in one sentence.",
    "zh": {
      "title": "電影選角",
      "scenario": "每個小組要拍一部冒險短片。",
      "question": "你們想選甚麼場景？",
      "twist": "",
      "deeperQuestion": "用一句話說明第一幕發生甚麼。"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v2-party-094",
    "category": "Party",
    "emoji": "🎉",
    "title": "A breakfast map",
    "scenario": "Each person names a local or usual breakfast.",
    "question": "Which would people most like to try?",
    "twist": "",
    "deeperQuestion": "What would its recommender serve with it?",
    "zh": {
      "title": "早餐地圖",
      "scenario": "每人說一款家鄉或常吃的早餐。",
      "question": "全場最想試哪款？",
      "twist": "",
      "deeperQuestion": "介紹者會建議怎樣配搭？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v2-party-095",
    "category": "Party",
    "emoji": "🎉",
    "title": "A day to repeat",
    "scenario": "Each person names a kind of good day they would repeat.",
    "question": "What is yours?",
    "twist": "",
    "deeperQuestion": "Do the answers share any elements?",
    "zh": {
      "title": "想重來的一天",
      "scenario": "每人只講一種想再過一次的好日子。",
      "question": "你會選甚麼？",
      "twist": "",
      "deeperQuestion": "大家的答案裡，有沒有共同元素？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v2-party-096",
    "category": "Party",
    "emoji": "🎉",
    "title": "Design a game",
    "scenario": "Each group designs a game using only one sheet of paper.",
    "question": "How does it work?",
    "twist": "",
    "deeperQuestion": "Could you teach another group in thirty seconds?",
    "zh": {
      "title": "簡單遊戲設計",
      "scenario": "每個小組設計一個只需一張紙的遊戲。",
      "question": "你們的玩法是甚麼？",
      "twist": "",
      "deeperQuestion": "能不能用三十秒教懂另一組？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v2-party-097",
    "category": "Party",
    "emoji": "🎉",
    "title": "A new idea",
    "scenario": "Talk with someone you have not spoken to tonight and trade a small recommendation.",
    "question": "What is yours?",
    "twist": "",
    "deeperQuestion": "What new idea did you get from them?",
    "zh": {
      "title": "聽見新點子",
      "scenario": "找一位今晚還沒聊過的人，互相推薦一件小事。",
      "question": "你想推薦甚麼？",
      "twist": "",
      "deeperQuestion": "你從對方那裡得到哪個新點子？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v2-party-098",
    "category": "Party",
    "emoji": "🎉",
    "title": "Vote for next time",
    "scenario": "Each group proposes an activity for next time, then everyone votes.",
    "question": "What is your proposal?",
    "twist": "",
    "deeperQuestion": "How could people with limited time join?",
    "zh": {
      "title": "下一場投票",
      "scenario": "每組提一個下次聚會活動，再全場投票。",
      "question": "你們會提議甚麼？",
      "twist": "",
      "deeperQuestion": "怎樣讓時間不多的人也能加入？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v2-party-099",
    "category": "Party",
    "emoji": "🎉",
    "title": "A positive word",
    "scenario": "Use one word each for a feeling from tonight you would like to keep.",
    "question": "What is yours?",
    "twist": "",
    "deeperQuestion": "What activity helped create that feeling?",
    "zh": {
      "title": "一個好詞",
      "scenario": "每人用一個詞形容今晚想保留的感覺。",
      "question": "你會用哪個詞？",
      "twist": "",
      "deeperQuestion": "哪一個活動帶來了這種感覺？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v2-party-100",
    "category": "Party",
    "emoji": "🎉",
    "title": "Before goodbye",
    "scenario": "Before leaving, have one more exchange with someone.",
    "question": "Which topic would you continue?",
    "twist": "",
    "deeperQuestion": "How could you arrange to continue another time?",
    "zh": {
      "title": "告別前一問",
      "scenario": "離開前，跟一個人再聊一句。",
      "question": "你最想延續今晚哪個話題？",
      "twist": "",
      "deeperQuestion": "你們想怎樣約下一次再聊？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v2-solo-001",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Today's energy",
    "scenario": "Pause and check in with yourself.",
    "question": "How full does your battery feel today?",
    "twist": "",
    "deeperQuestion": "What would help in the next ten minutes?",
    "zh": {
      "title": "今天的電量",
      "scenario": "停下來看看今天的自己。",
      "question": "你現在的精神像幾成滿的電池？",
      "twist": "",
      "deeperQuestion": "接下來十分鐘，做甚麼會幫到你？"
    }
  },
  {
    "id": "ponder-v2-solo-002",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Something finished",
    "scenario": "Look back on today without searching for a big achievement.",
    "question": "What small thing did you finish?",
    "twist": "",
    "deeperQuestion": "How would you acknowledge that effort?",
    "zh": {
      "title": "一件完成的事",
      "scenario": "回想今天，不用挑大事。",
      "question": "你完成了哪一件小事？",
      "twist": "",
      "deeperQuestion": "你想怎樣肯定這份努力？"
    }
  },
  {
    "id": "ponder-v2-solo-003",
    "category": "Solo",
    "emoji": "🌿",
    "title": "The loudest thought",
    "scenario": "One topic has been on your mind lately.",
    "question": "What sentence keeps coming back?",
    "twist": "",
    "deeperQuestion": "Which part of that sentence do you know is true?",
    "zh": {
      "title": "腦裡最吵",
      "scenario": "你最近一直想著一件事。",
      "question": "最常冒出來的是哪一句話？",
      "twist": "",
      "deeperQuestion": "這句話裡，哪一部分你已經知道是真的？"
    }
  },
  {
    "id": "ponder-v2-solo-004",
    "category": "Solo",
    "emoji": "🌿",
    "title": "One first step",
    "scenario": "There is something you keep putting off.",
    "question": "What is the smallest step you could take today?",
    "twist": "",
    "deeperQuestion": "What would you need to prepare first?",
    "zh": {
      "title": "先做一步",
      "scenario": "有一件事你一直拖著。",
      "question": "今天最小的一步可以是甚麼？",
      "twist": "",
      "deeperQuestion": "你需要先準備哪樣東西？"
    }
  },
  {
    "id": "ponder-v2-solo-005",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A rest menu",
    "scenario": "You have twenty minutes with no obligations.",
    "question": "How would you spend them?",
    "twist": "",
    "deeperQuestion": "Would it restore your energy or simply pass time?",
    "zh": {
      "title": "休息選單",
      "scenario": "你有二十分鐘不用交代給任何人。",
      "question": "你最想怎樣過？",
      "twist": "",
      "deeperQuestion": "這件事會讓你充電，還是只是打發時間？"
    }
  },
  {
    "id": "ponder-v2-solo-006",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A good moment",
    "scenario": "Think of a decent moment this week.",
    "question": "Where were you?",
    "twist": "",
    "deeperQuestion": "What detail made it pleasant?",
    "zh": {
      "title": "一個好時刻",
      "scenario": "想起這星期一個還不錯的時刻。",
      "question": "當時你在哪裡？",
      "twist": "",
      "deeperQuestion": "哪個細節讓那一刻舒服？"
    }
  },
  {
    "id": "ponder-v2-solo-007",
    "category": "Solo",
    "emoji": "🌿",
    "title": "What I want",
    "scenario": "You have been wanting to buy something.",
    "question": "What do you hope it will help with?",
    "twist": "",
    "deeperQuestion": "Is there another way without buying it?",
    "zh": {
      "title": "真的想要",
      "scenario": "你最近想買一樣東西。",
      "question": "你希望它幫你解決甚麼？",
      "twist": "",
      "deeperQuestion": "不用買它，有沒有別的方法？"
    }
  },
  {
    "id": "ponder-v2-solo-008",
    "category": "Solo",
    "emoji": "🌿",
    "title": "People who help",
    "scenario": "Think of people you have seen recently.",
    "question": "Who left you feeling more energized?",
    "twist": "",
    "deeperQuestion": "What do you like about your time together?",
    "zh": {
      "title": "跟誰相處",
      "scenario": "想起最近見過的人。",
      "question": "跟誰見面後，你比較有精神？",
      "twist": "",
      "deeperQuestion": "你喜歡你們相處的哪一點？"
    }
  },
  {
    "id": "ponder-v2-solo-009",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A small no",
    "scenario": "There is an invitation you do not really want to accept.",
    "question": "How would you decline?",
    "twist": "",
    "deeperQuestion": "What worries you most about saying no?",
    "zh": {
      "title": "一次拒絕",
      "scenario": "最近有個邀請你不太想接受。",
      "question": "你想怎樣婉拒？",
      "twist": "",
      "deeperQuestion": "你最擔心拒絕後會發生甚麼？"
    }
  },
  {
    "id": "ponder-v2-solo-010",
    "category": "Solo",
    "emoji": "🌿",
    "title": "What I need",
    "scenario": "Set aside what you should do for a moment.",
    "question": "Do you most need rest, company, or order right now?",
    "twist": "",
    "deeperQuestion": "Who could you ask for a small favour?",
    "zh": {
      "title": "今天的需要",
      "scenario": "先不想應該做甚麼。",
      "question": "你現在最需要的是休息、陪伴，還是整理事情？",
      "twist": "",
      "deeperQuestion": "你可以向誰提出一個小請求？"
    }
  },
  {
    "id": "ponder-v2-solo-011",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A shorter list",
    "scenario": "Your to-do list is long.",
    "question": "If you did just one thing today, what would it be?",
    "twist": "",
    "deeperQuestion": "What could safely wait until tomorrow?",
    "zh": {
      "title": "一張清單",
      "scenario": "你的待辦清單很長。",
      "question": "今天只做一件，你會選哪件？",
      "twist": "",
      "deeperQuestion": "哪件事可以安心移到明天？"
    }
  },
  {
    "id": "ponder-v2-solo-012",
    "category": "Solo",
    "emoji": "🌿",
    "title": "After scrolling",
    "scenario": "You have spent some time scrolling.",
    "question": "Do you feel better or more unsettled afterward?",
    "twist": "",
    "deeperQuestion": "What kind of content would you like less of?",
    "zh": {
      "title": "手機之後",
      "scenario": "剛看完一段時間手機。",
      "question": "你的心情比之前好，還是更亂？",
      "twist": "",
      "deeperQuestion": "哪類內容你想少看一點？"
    }
  },
  {
    "id": "ponder-v2-solo-013",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A past version",
    "scenario": "Think of yourself a year ago.",
    "question": "What feels less intimidating now?",
    "twist": "",
    "deeperQuestion": "What experience helped you take a step forward?",
    "zh": {
      "title": "以前的自己",
      "scenario": "想起一年前的自己。",
      "question": "現在有甚麼事比較不怕了？",
      "twist": "",
      "deeperQuestion": "哪次練習幫你跨出了一步？"
    }
  },
  {
    "id": "ponder-v2-solo-014",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A comfortable place",
    "scenario": "You can spend half an hour somewhere familiar.",
    "question": "Where would you go?",
    "twist": "",
    "deeperQuestion": "What is special about its sounds, light, or smells?",
    "zh": {
      "title": "舒服的地方",
      "scenario": "你可以去一個熟悉的地方待半小時。",
      "question": "你會去哪裡？",
      "twist": "",
      "deeperQuestion": "那裡的聲音、光線或氣味有甚麼特別？"
    }
  },
  {
    "id": "ponder-v2-solo-015",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Other people's expectations",
    "scenario": "You agreed to something you did not want to do.",
    "question": "What were you worried about?",
    "twist": "",
    "deeperQuestion": "What could you say next time to give yourself time to think?",
    "zh": {
      "title": "別人的期待",
      "scenario": "有件事你說了「好」，其實並不想做。",
      "question": "你當時在顧慮甚麼？",
      "twist": "",
      "deeperQuestion": "下次你可以先說哪一句，給自己時間想？"
    }
  },
  {
    "id": "ponder-v2-solo-016",
    "category": "Solo",
    "emoji": "🌿",
    "title": "An open question",
    "scenario": "You are unsure about something.",
    "question": "What one piece of information would help most?",
    "twist": "",
    "deeperQuestion": "Where could you find it, or whom could you ask?",
    "zh": {
      "title": "一個疑問",
      "scenario": "你有件事想不通。",
      "question": "現在最需要補上的一個資料是甚麼？",
      "twist": "",
      "deeperQuestion": "你可以從哪裡查到，或問到誰？"
    }
  },
  {
    "id": "ponder-v2-solo-017",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Good enough",
    "scenario": "You are working on something you want to do well.",
    "question": "What would be enough for today?",
    "twist": "",
    "deeperQuestion": "What small detail could wait?",
    "zh": {
      "title": "不必完美",
      "scenario": "你正在做一件想做好看的事。",
      "question": "做到甚麼程度，今天就可以停？",
      "twist": "",
      "deeperQuestion": "哪個小細節其實可以留到以後？"
    }
  },
  {
    "id": "ponder-v2-solo-018",
    "category": "Solo",
    "emoji": "🌿",
    "title": "An old enjoyment",
    "scenario": "There is a small activity you used to enjoy but have not done lately.",
    "question": "What comes to mind?",
    "twist": "",
    "deeperQuestion": "Could you try it for ten minutes this week?",
    "zh": {
      "title": "熟悉的快樂",
      "scenario": "有件以前喜歡的小事，很久沒做了。",
      "question": "你想到甚麼？",
      "twist": "",
      "deeperQuestion": "這星期可以試十分鐘嗎？"
    }
  },
  {
    "id": "ponder-v2-solo-019",
    "category": "Solo",
    "emoji": "🌿",
    "title": "One worry",
    "scenario": "Write down one recent worry.",
    "question": "What small part can you influence today?",
    "twist": "",
    "deeperQuestion": "What part simply needs more information or time?",
    "zh": {
      "title": "一個擔心",
      "scenario": "寫下一個最近的擔心。",
      "question": "你今天能影響的是哪一小部分？",
      "twist": "",
      "deeperQuestion": "哪一部分暫時只能等消息？"
    }
  },
  {
    "id": "ponder-v2-solo-020",
    "category": "Solo",
    "emoji": "🌿",
    "title": "My pace",
    "scenario": "Lately you have felt behind.",
    "question": "Who are you comparing yourself with?",
    "twist": "",
    "deeperQuestion": "What progress can you see when you look only at your own path?",
    "zh": {
      "title": "自己的步調",
      "scenario": "最近你覺得自己落後了。",
      "question": "你是拿自己跟誰比較？",
      "twist": "",
      "deeperQuestion": "如果只看自己的進展，你看到甚麼？"
    }
  },
  {
    "id": "ponder-v2-solo-021",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Today's soundtrack",
    "scenario": "Imagine today had a soundtrack.",
    "question": "What style would it be?",
    "twist": "",
    "deeperQuestion": "What pace would you like tomorrow's music to have?",
    "zh": {
      "title": "今天的聲音",
      "scenario": "如果今天有一首配樂。",
      "question": "你會選甚麼風格？",
      "twist": "",
      "deeperQuestion": "明天你想換成甚麼節奏？"
    }
  },
  {
    "id": "ponder-v2-solo-022",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Dropping a task",
    "scenario": "There is something you feel you should do.",
    "question": "What would actually happen if you did not?",
    "twist": "",
    "deeperQuestion": "Does it still deserve a place on your list?",
    "zh": {
      "title": "放下小任務",
      "scenario": "有件事你一直覺得應該做。",
      "question": "其實不做，會有甚麼影響？",
      "twist": "",
      "deeperQuestion": "這件事還值得留在清單上嗎？"
    }
  },
  {
    "id": "ponder-v2-solo-023",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Feeling safe enough",
    "scenario": "Recall a conversation where you felt able to speak honestly.",
    "question": "What helped you feel comfortable?",
    "twist": "",
    "deeperQuestion": "How could you offer the same comfort to someone else?",
    "zh": {
      "title": "讓人安心",
      "scenario": "回想一次你敢說真話的聊天。",
      "question": "對方做了甚麼讓你放心？",
      "twist": "",
      "deeperQuestion": "你也可以怎樣把這種感覺給別人？"
    }
  },
  {
    "id": "ponder-v2-solo-024",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Learning something small",
    "scenario": "You want to learn a skill.",
    "question": "What beginner version fits your life right now?",
    "twist": "",
    "deeperQuestion": "How short could your first practice be?",
    "zh": {
      "title": "學一件小事",
      "scenario": "你想學一項新技能。",
      "question": "哪個入門版本最適合現在的你？",
      "twist": "",
      "deeperQuestion": "第一次練習可以短到幾分鐘？"
    }
  },
  {
    "id": "ponder-v2-solo-025",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Making room",
    "scenario": "Your room or desk feels crowded.",
    "question": "What small area would make the biggest difference?",
    "twist": "",
    "deeperQuestion": "What item could have a regular home?",
    "zh": {
      "title": "一點空間",
      "scenario": "你的房間或桌面有點擠。",
      "question": "先整理哪一小塊會最有感？",
      "twist": "",
      "deeperQuestion": "有甚麼東西可以換個固定位置？"
    }
  },
  {
    "id": "ponder-v2-solo-026",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A decision",
    "scenario": "You are choosing between two options.",
    "question": "What factor matters most?",
    "twist": "",
    "deeperQuestion": "Which would you choose if you could test it for a week?",
    "zh": {
      "title": "一個選擇",
      "scenario": "你正猶豫兩個選擇。",
      "question": "最影響你決定的是哪一點？",
      "twist": "",
      "deeperQuestion": "如果先試一星期，你會選哪個？"
    }
  },
  {
    "id": "ponder-v2-solo-027",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A physical cue",
    "scenario": "Notice how you are sitting.",
    "question": "What part of your body wants a change of position?",
    "twist": "",
    "deeperQuestion": "Would standing, stretching, or a short walk feel useful?",
    "zh": {
      "title": "身體提醒",
      "scenario": "留意現在的坐姿。",
      "question": "身體哪個地方想換個姿勢？",
      "twist": "",
      "deeperQuestion": "你可以站起來、伸展，還是走幾步？"
    }
  },
  {
    "id": "ponder-v2-solo-028",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Reaching out",
    "scenario": "Someone has been on your mind, but you have not contacted them.",
    "question": "What simple message would you send?",
    "twist": "",
    "deeperQuestion": "Would you like a quick check-in or to arrange a meeting?",
    "zh": {
      "title": "值得聯絡",
      "scenario": "有個人你想起很久，卻還未聯絡。",
      "question": "你想傳哪一句簡單訊息？",
      "twist": "",
      "deeperQuestion": "你希望這次只是問候，還是約見面？"
    }
  },
  {
    "id": "ponder-v2-solo-029",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Saving effort",
    "scenario": "An everyday task takes too much energy.",
    "question": "How could you remove one step?",
    "twist": "",
    "deeperQuestion": "What small imperfection could you accept?",
    "zh": {
      "title": "省下力氣",
      "scenario": "日常有件小事很耗精神。",
      "question": "你可以怎樣讓它少一步？",
      "twist": "",
      "deeperQuestion": "你願意接受甚麼小小的不完美？"
    }
  },
  {
    "id": "ponder-v2-solo-030",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Being understood",
    "scenario": "People often misunderstand something about you.",
    "question": "What example could explain it?",
    "twist": "",
    "deeperQuestion": "Who might be willing to listen carefully?",
    "zh": {
      "title": "想被了解",
      "scenario": "別人常常誤會你的一點。",
      "question": "你會怎樣用一個例子說明？",
      "twist": "",
      "deeperQuestion": "哪個人可能願意認真聽？"
    }
  },
  {
    "id": "ponder-v2-solo-031",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A worthwhile expense",
    "scenario": "Think of recent small purchases.",
    "question": "Which felt worthwhile?",
    "twist": "",
    "deeperQuestion": "Did it bring convenience, enjoyment, or more time?",
    "zh": {
      "title": "一筆開支",
      "scenario": "回想最近一筆小開支。",
      "question": "哪一筆讓你覺得花得值得？",
      "twist": "",
      "deeperQuestion": "它帶來的是方便、快樂，還是多一點時間？"
    }
  },
  {
    "id": "ponder-v2-solo-032",
    "category": "Solo",
    "emoji": "🌿",
    "title": "No more waiting",
    "scenario": "You keep waiting for the right time to do something small.",
    "question": "What do you actually need to begin?",
    "twist": "",
    "deeperQuestion": "What do you already have?",
    "zh": {
      "title": "不想再等",
      "scenario": "有件小事你一直等合適時機。",
      "question": "其實需要具備甚麼才可以開始？",
      "twist": "",
      "deeperQuestion": "目前已經具備哪一樣？"
    }
  },
  {
    "id": "ponder-v2-solo-033",
    "category": "Solo",
    "emoji": "🌿",
    "title": "The end of the day",
    "scenario": "Work or study often stretches late.",
    "question": "What action could mark the end of your day?",
    "twist": "",
    "deeperQuestion": "What would you leave until morning?",
    "zh": {
      "title": "一天的界線",
      "scenario": "工作或學習常常拖到很晚。",
      "question": "你想用甚麼動作表示今天結束？",
      "twist": "",
      "deeperQuestion": "你想把甚麼留到明早再看？"
    }
  },
  {
    "id": "ponder-v2-solo-034",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A second try",
    "scenario": "Something did not go well on your first attempt.",
    "question": "What would you change next time?",
    "twist": "",
    "deeperQuestion": "Who could offer one useful suggestion?",
    "zh": {
      "title": "再給一次機會",
      "scenario": "有件事你第一次試得不好。",
      "question": "你想換甚麼方法再試？",
      "twist": "",
      "deeperQuestion": "你需要誰給一個具體建議？"
    }
  },
  {
    "id": "ponder-v2-solo-035",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Unexpected delight",
    "scenario": "Something unplanned brightened your day recently.",
    "question": "What was it?",
    "twist": "",
    "deeperQuestion": "How could you notice moments like that more often?",
    "zh": {
      "title": "意外的開心",
      "scenario": "最近有件沒計劃的小事讓你開心。",
      "question": "那是甚麼？",
      "twist": "",
      "deeperQuestion": "你下次可以怎樣更容易留意這類小事？"
    }
  },
  {
    "id": "ponder-v2-solo-036",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A small goal",
    "scenario": "Choose one manageable goal for this week.",
    "question": "What would it be?",
    "twist": "",
    "deeperQuestion": "How will you know when it is done?",
    "zh": {
      "title": "一個小目標",
      "scenario": "這星期只訂一個容易完成的目標。",
      "question": "你會選甚麼？",
      "twist": "",
      "deeperQuestion": "完成時你會怎樣知道？"
    }
  },
  {
    "id": "ponder-v2-solo-037",
    "category": "Solo",
    "emoji": "🌿",
    "title": "What I would tell a friend",
    "scenario": "Imagine a friend had your current worry.",
    "question": "What would you say first?",
    "twist": "",
    "deeperQuestion": "Which part of that also applies to you?",
    "zh": {
      "title": "說給朋友聽",
      "scenario": "如果朋友遇到你現在的煩惱。",
      "question": "你會先跟他說甚麼？",
      "twist": "",
      "deeperQuestion": "那句話有哪一部分也適合你？"
    }
  },
  {
    "id": "ponder-v2-solo-038",
    "category": "Solo",
    "emoji": "🌿",
    "title": "My morning",
    "scenario": "Think about your recent mornings.",
    "question": "What most affects the rest of your mood?",
    "twist": "",
    "deeperQuestion": "What small change could you try tomorrow morning?",
    "zh": {
      "title": "我的早晨",
      "scenario": "想想你最近的早晨。",
      "question": "哪一件事最影響接下來的心情？",
      "twist": "",
      "deeperQuestion": "明早可以先改哪一小步？"
    }
  },
  {
    "id": "ponder-v2-solo-039",
    "category": "Solo",
    "emoji": "🌿",
    "title": "What to keep",
    "scenario": "You are writing one sentence about today.",
    "question": "What moment would you keep?",
    "twist": "",
    "deeperQuestion": "What three words would describe it?",
    "zh": {
      "title": "留下甚麼",
      "scenario": "你要把今天寫成一句日記。",
      "question": "最想留下哪個片段？",
      "twist": "",
      "deeperQuestion": "你會用哪三個字形容那一刻？"
    }
  },
  {
    "id": "ponder-v2-solo-040",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Accepting help",
    "scenario": "Someone offers to help with a task.",
    "question": "What part is hardest to hand over?",
    "twist": "",
    "deeperQuestion": "What instruction would help you feel more comfortable?",
    "zh": {
      "title": "一份幫忙",
      "scenario": "有人願意幫你做一件事。",
      "question": "你最難放心交出去的是哪部分？",
      "twist": "",
      "deeperQuestion": "講清楚哪個要求後，你會放心一點？"
    }
  },
  {
    "id": "ponder-v2-solo-041",
    "category": "Solo",
    "emoji": "🌿",
    "title": "My own taste",
    "scenario": "Set aside ratings and rankings.",
    "question": "What have you personally enjoyed lately?",
    "twist": "",
    "deeperQuestion": "What specific part do you enjoy?",
    "zh": {
      "title": "自己的喜好",
      "scenario": "暫時不看評價和排行榜。",
      "question": "你最近真心喜歡甚麼？",
      "twist": "",
      "deeperQuestion": "你喜歡的具體地方是甚麼？"
    }
  },
  {
    "id": "ponder-v2-solo-042",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A little less",
    "scenario": "Tomorrow you want to do less of something tiring.",
    "question": "What would you choose?",
    "twist": "",
    "deeperQuestion": "How could you remind yourself to stop?",
    "zh": {
      "title": "今天少一點",
      "scenario": "明天你想少做一件讓自己累的事。",
      "question": "你會選哪件？",
      "twist": "",
      "deeperQuestion": "你可以怎樣提醒自己停下來？"
    }
  },
  {
    "id": "ponder-v2-solo-043",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Next time we meet",
    "scenario": "Think of a relationship you value.",
    "question": "What would you like to ask next time you meet?",
    "twist": "",
    "deeperQuestion": "What update about yourself would you share first?",
    "zh": {
      "title": "下一次見面",
      "scenario": "想起一段你珍惜的關係。",
      "question": "下次見面，你想多問對方甚麼？",
      "twist": "",
      "deeperQuestion": "你願意先分享自己哪件近況？"
    }
  },
  {
    "id": "ponder-v2-solo-044",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Changing a plan",
    "scenario": "Your original plan no longer works.",
    "question": "Which part would you most like to keep?",
    "twist": "",
    "deeperQuestion": "What smaller version could work?",
    "zh": {
      "title": "重新安排",
      "scenario": "原本的計劃做不下去了。",
      "question": "你最想保留哪個部分？",
      "twist": "",
      "deeperQuestion": "可以縮小成甚麼版本？"
    }
  },
  {
    "id": "ponder-v2-solo-045",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A moment of focus",
    "scenario": "Recently you lost yourself in an activity.",
    "question": "What were you doing?",
    "twist": "",
    "deeperQuestion": "What distraction was absent then?",
    "zh": {
      "title": "一次專心",
      "scenario": "最近有一段時間你很投入。",
      "question": "當時你在做甚麼？",
      "twist": "",
      "deeperQuestion": "當時少了哪種打擾？"
    }
  },
  {
    "id": "ponder-v2-solo-046",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A question to ask",
    "scenario": "You avoided asking something because it felt awkward.",
    "question": "How could you ask simply?",
    "twist": "",
    "deeperQuestion": "How difficult would the worst likely response actually be?",
    "zh": {
      "title": "想問的問題",
      "scenario": "你有件事因為怕尷尬而沒問。",
      "question": "你可以怎樣簡單地問清楚？",
      "twist": "",
      "deeperQuestion": "最壞的回應真的會有多嚴重？"
    }
  },
  {
    "id": "ponder-v2-solo-047",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Worth celebrating",
    "scenario": "You finished something difficult.",
    "question": "How would you celebrate a little?",
    "twist": "",
    "deeperQuestion": "Who would you tell the good news to?",
    "zh": {
      "title": "值得慶祝",
      "scenario": "你完成了一件不容易的事。",
      "question": "你想怎樣小小慶祝？",
      "twist": "",
      "deeperQuestion": "你想跟誰分享這個好消息？"
    }
  },
  {
    "id": "ponder-v2-solo-048",
    "category": "Solo",
    "emoji": "🌿",
    "title": "An old promise",
    "scenario": "You once promised yourself you would do something.",
    "question": "Do you still want to?",
    "twist": "",
    "deeperQuestion": "If not, how would you change the promise?",
    "zh": {
      "title": "舊承諾",
      "scenario": "你以前答應自己做一件事。",
      "question": "現在還想做嗎？",
      "twist": "",
      "deeperQuestion": "如果不想了，你願意怎樣修改承諾？"
    }
  },
  {
    "id": "ponder-v2-solo-049",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Setting it aside",
    "scenario": "There is a problem you cannot solve tonight.",
    "question": "How would you note it for tomorrow?",
    "twist": "",
    "deeperQuestion": "When tomorrow would be a good time to return to it?",
    "zh": {
      "title": "先放旁邊",
      "scenario": "有個問題今晚解決不了。",
      "question": "你會怎樣記下來，明天再處理？",
      "twist": "",
      "deeperQuestion": "明天甚麼時間回來看最合適？"
    }
  },
  {
    "id": "ponder-v2-solo-050",
    "category": "Solo",
    "emoji": "🌿",
    "title": "An everyday choice",
    "scenario": "Think of a small decision today.",
    "question": "Which choice looked after your own needs?",
    "twist": "",
    "deeperQuestion": "Would you like to make the same choice again?",
    "zh": {
      "title": "日常的選擇",
      "scenario": "想起今天一個小決定。",
      "question": "哪個選擇其實是照顧了自己？",
      "twist": "",
      "deeperQuestion": "下次你還想這樣選嗎？"
    }
  },
  {
    "id": "ponder-v2-solo-051",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A different route",
    "scenario": "You could take a slightly different way home today.",
    "question": "What would you like to pass?",
    "twist": "",
    "deeperQuestion": "What small detail would be worth stopping for?",
    "zh": {
      "title": "一條新路",
      "scenario": "今天回家的路可以稍微不同。",
      "question": "你想經過甚麼地方？",
      "twist": "",
      "deeperQuestion": "哪個小景物值得你停一下？"
    }
  },
  {
    "id": "ponder-v2-solo-052",
    "category": "Solo",
    "emoji": "🌿",
    "title": "My definition",
    "scenario": "Someone asks what living well means to you.",
    "question": "What everyday example would you give?",
    "twist": "",
    "deeperQuestion": "Would you have given the same example a few years ago?",
    "zh": {
      "title": "自己的定義",
      "scenario": "有人問你怎樣才算過得不錯。",
      "question": "你現在會舉哪個生活例子？",
      "twist": "",
      "deeperQuestion": "這個例子跟幾年前一樣嗎？"
    }
  },
  {
    "id": "ponder-v2-solo-053",
    "category": "Solo",
    "emoji": "🌿",
    "title": "No immediate reply",
    "scenario": "A non-urgent message arrives and you feel you must reply at once.",
    "question": "What worries you?",
    "twist": "",
    "deeperQuestion": "How long would you like to give yourself before replying?",
    "zh": {
      "title": "不必馬上回",
      "scenario": "你收到一個不急的訊息，卻想立刻回。",
      "question": "你在擔心甚麼？",
      "twist": "",
      "deeperQuestion": "你想給自己多久再回？"
    }
  },
  {
    "id": "ponder-v2-solo-054",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A good conversation",
    "scenario": "A recent conversation left you feeling lighter.",
    "question": "What helped most?",
    "twist": "",
    "deeperQuestion": "How could you help someone else feel that way next time?",
    "zh": {
      "title": "一段好對話",
      "scenario": "最近有一次聊天讓你輕鬆了一點。",
      "question": "哪個部分最有用？",
      "twist": "",
      "deeperQuestion": "下次你想怎樣讓別人也有這種感覺？"
    }
  },
  {
    "id": "ponder-v2-solo-055",
    "category": "Solo",
    "emoji": "🌿",
    "title": "The right amount",
    "scenario": "Something you enjoy becomes tiring when you overdo it.",
    "question": "What amount feels right?",
    "twist": "",
    "deeperQuestion": "How would you recognize it is time to stop?",
    "zh": {
      "title": "剛好就好",
      "scenario": "有件你喜歡的事，做太多反而累。",
      "question": "多少份量對你剛好？",
      "twist": "",
      "deeperQuestion": "你會怎樣知道該停了？"
    }
  },
  {
    "id": "ponder-v2-solo-056",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A change of scene",
    "scenario": "You have been sitting in the same place for a long time.",
    "question": "Where could you move to clear your head?",
    "twist": "",
    "deeperQuestion": "Would changing the light or your seat be enough?",
    "zh": {
      "title": "換個環境",
      "scenario": "你坐在同一地方很久了。",
      "question": "換去哪裡會讓思路清楚一點？",
      "twist": "",
      "deeperQuestion": "只換光線或座位也有幫助嗎？"
    }
  },
  {
    "id": "ponder-v2-solo-057",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A misunderstanding",
    "scenario": "You recently guessed what someone meant.",
    "question": "What other explanation is possible?",
    "twist": "",
    "deeperQuestion": "What could you ask to check?",
    "zh": {
      "title": "一次誤會",
      "scenario": "最近你猜測了別人的意思。",
      "question": "你還可以想到哪個解釋？",
      "twist": "",
      "deeperQuestion": "你可以問哪一句來確認？"
    }
  },
  {
    "id": "ponder-v2-solo-058",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Nothing to prove",
    "scenario": "You have time with no need to show a result.",
    "question": "What would you do?",
    "twist": "",
    "deeperQuestion": "Would you still enjoy it if nobody knew?",
    "zh": {
      "title": "不用證明",
      "scenario": "你有一段完全不用展示成果的時間。",
      "question": "你最想拿來做甚麼？",
      "twist": "",
      "deeperQuestion": "如果沒人知道，你還會享受嗎？"
    }
  },
  {
    "id": "ponder-v2-solo-059",
    "category": "Solo",
    "emoji": "🌿",
    "title": "What matters now",
    "scenario": "There are many demands this month.",
    "question": "What deserves most of your attention?",
    "twist": "",
    "deeperQuestion": "What could remain as it is for now?",
    "zh": {
      "title": "現在的重點",
      "scenario": "這個月有很多事。",
      "question": "你最想把心力放在哪一件？",
      "twist": "",
      "deeperQuestion": "哪件事可以先維持現狀？"
    }
  },
  {
    "id": "ponder-v2-solo-060",
    "category": "Solo",
    "emoji": "🌿",
    "title": "An invitation",
    "scenario": "You want to invite a friend to do something.",
    "question": "What plan would be easy to say yes to?",
    "twist": "",
    "deeperQuestion": "What two possible times could you offer?",
    "zh": {
      "title": "一項邀請",
      "scenario": "你想邀一個朋友一起做點事。",
      "question": "哪個安排最容易答應？",
      "twist": "",
      "deeperQuestion": "你會提供哪兩個時間選擇？"
    }
  },
  {
    "id": "ponder-v2-solo-061",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Room to disagree",
    "scenario": "You disagree with someone.",
    "question": "What response would make you willing to keep talking?",
    "twist": "",
    "deeperQuestion": "Could you use that response yourself?",
    "zh": {
      "title": "不同意也可以",
      "scenario": "你跟別人意見不同。",
      "question": "對方說哪一句會讓你仍願意聊？",
      "twist": "",
      "deeperQuestion": "你自己也可以先用這句話嗎？"
    }
  },
  {
    "id": "ponder-v2-solo-062",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A little curiosity",
    "scenario": "You recently encountered something unfamiliar.",
    "question": "What small question would you look into?",
    "twist": "",
    "deeperQuestion": "Would you start with a demonstration or an explanation?",
    "zh": {
      "title": "好奇一點",
      "scenario": "最近你遇到一件不懂的事。",
      "question": "你最想查清楚哪個小問題？",
      "twist": "",
      "deeperQuestion": "你想先看示範，還是讀解釋？"
    }
  },
  {
    "id": "ponder-v2-solo-063",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Today's courage",
    "scenario": "There was a moment today when you acted despite nerves.",
    "question": "What was it?",
    "twist": "",
    "deeperQuestion": "What helped you take that step?",
    "zh": {
      "title": "今天的勇氣",
      "scenario": "今天有一刻你雖然緊張，還是做了。",
      "question": "那是甚麼？",
      "twist": "",
      "deeperQuestion": "甚麼幫你踏出那一步？"
    }
  },
  {
    "id": "ponder-v2-solo-064",
    "category": "Solo",
    "emoji": "🌿",
    "title": "My standard",
    "scenario": "You feel something you did was not good enough.",
    "question": "Whose standard are you using?",
    "twist": "",
    "deeperQuestion": "Looking at the original goal, what did it already accomplish?",
    "zh": {
      "title": "自己的標準",
      "scenario": "你覺得一件事做得不夠好。",
      "question": "你用的是誰的標準？",
      "twist": "",
      "deeperQuestion": "按原本目的看，它已經做到甚麼？"
    }
  },
  {
    "id": "ponder-v2-solo-065",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Listening again",
    "scenario": "Think of feedback someone recently gave you.",
    "question": "What part would you try?",
    "twist": "",
    "deeperQuestion": "How could one small trial show whether it helps?",
    "zh": {
      "title": "再聽一次",
      "scenario": "想起別人最近給你的意見。",
      "question": "哪一點你願意試試？",
      "twist": "",
      "deeperQuestion": "怎樣試一次，就能知道有沒有用？"
    }
  },
  {
    "id": "ponder-v2-solo-066",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A comforting habit",
    "scenario": "You have a small daily habit that comforts you.",
    "question": "What is it?",
    "twist": "",
    "deeperQuestion": "What part could you keep on a busy day?",
    "zh": {
      "title": "一個舒適習慣",
      "scenario": "你每天有一個讓自己舒服的小習慣。",
      "question": "是哪一個？",
      "twist": "",
      "deeperQuestion": "忙的時候可以保留它的哪部分？"
    }
  },
  {
    "id": "ponder-v2-solo-067",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Leaving a debate",
    "scenario": "You see an argument online.",
    "question": "When would you decide not to join?",
    "twist": "",
    "deeperQuestion": "What would be a better use of those ten minutes?",
    "zh": {
      "title": "不想爭了",
      "scenario": "你在網上看到一場爭論。",
      "question": "甚麼時候你會決定不參與？",
      "twist": "",
      "deeperQuestion": "把那十分鐘用在哪裡會更值得？"
    }
  },
  {
    "id": "ponder-v2-solo-068",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Receiving praise",
    "scenario": "Someone gives you a sincere compliment.",
    "question": "How do you usually respond?",
    "twist": "",
    "deeperQuestion": "Could you simply say thank you and let it land?",
    "zh": {
      "title": "被稱讚",
      "scenario": "有人真心稱讚你。",
      "question": "你通常怎樣回答？",
      "twist": "",
      "deeperQuestion": "你能不能只說一句謝謝，先收下？"
    }
  },
  {
    "id": "ponder-v2-solo-069",
    "category": "Solo",
    "emoji": "🌿",
    "title": "An activity I miss",
    "scenario": "You have stopped doing an activity you liked.",
    "question": "Is it lack of time or a change of interest?",
    "twist": "",
    "deeperQuestion": "Would you like to restart it or let it end?",
    "zh": {
      "title": "想念的活動",
      "scenario": "你最近少做了一件喜歡的活動。",
      "question": "是時間不夠，還是心情變了？",
      "twist": "",
      "deeperQuestion": "你想重新安排，還是讓它告一段落？"
    }
  },
  {
    "id": "ponder-v2-solo-070",
    "category": "Solo",
    "emoji": "🌿",
    "title": "One boundary",
    "scenario": "People often ask you to do a particular task.",
    "question": "What limit would you like to explain?",
    "twist": "",
    "deeperQuestion": "What amount of help would you be willing to offer?",
    "zh": {
      "title": "一個界線",
      "scenario": "有件事別人常常請你做。",
      "question": "你想把哪個限制說清楚？",
      "twist": "",
      "deeperQuestion": "你願意提供甚麼範圍內的幫忙？"
    }
  },
  {
    "id": "ponder-v2-solo-071",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A meal alone",
    "scenario": "You are having a meal alone today.",
    "question": "What would make it feel caring?",
    "twist": "",
    "deeperQuestion": "Would you like music or a quiet meal?",
    "zh": {
      "title": "一個人吃飯",
      "scenario": "今天你自己吃一餐。",
      "question": "怎樣安排會讓它像照顧自己？",
      "twist": "",
      "deeperQuestion": "你想配甚麼音樂，還是安靜吃？"
    }
  },
  {
    "id": "ponder-v2-solo-072",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Worth keeping",
    "scenario": "You recently made a change that improved daily life.",
    "question": "What was it?",
    "twist": "",
    "deeperQuestion": "How could you make it easy to maintain?",
    "zh": {
      "title": "值得保留",
      "scenario": "你最近做了一個讓生活變好的調整。",
      "question": "是哪一個？",
      "twist": "",
      "deeperQuestion": "怎樣讓它容易持續？"
    }
  },
  {
    "id": "ponder-v2-solo-073",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Looking too far ahead",
    "scenario": "You are worrying about something far away.",
    "question": "What actually needs deciding this week?",
    "twist": "",
    "deeperQuestion": "Which decision could wait for more information?",
    "zh": {
      "title": "想得太遠",
      "scenario": "你正替很久以後的事擔心。",
      "question": "眼前一星期真正要決定甚麼？",
      "twist": "",
      "deeperQuestion": "哪個決定可以等資料更多再做？"
    }
  },
  {
    "id": "ponder-v2-solo-074",
    "category": "Solo",
    "emoji": "🌿",
    "title": "What blocks rest",
    "scenario": "You have free time but cannot settle.",
    "question": "What reminder keeps coming into your mind?",
    "twist": "",
    "deeperQuestion": "Would writing it down make it easier to set aside?",
    "zh": {
      "title": "休息的阻力",
      "scenario": "你已經有空，卻仍停不下來。",
      "question": "腦裡最常出現甚麼提醒？",
      "twist": "",
      "deeperQuestion": "把它寫下來，會不會比較容易放一放？"
    }
  },
  {
    "id": "ponder-v2-solo-075",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Thanks to past me",
    "scenario": "A choice you made earlier still helps you now.",
    "question": "What comes to mind?",
    "twist": "",
    "deeperQuestion": "What small thing could you do today for next week's you?",
    "zh": {
      "title": "謝謝以前的我",
      "scenario": "以前的你做過一件事，現在仍幫到你。",
      "question": "你想到甚麼？",
      "twist": "",
      "deeperQuestion": "今天可以為下星期的自己做甚麼小事？"
    }
  },
  {
    "id": "ponder-v2-solo-076",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A small adventure",
    "scenario": "You want something new without a major change.",
    "question": "What small adventure appeals to you?",
    "twist": "",
    "deeperQuestion": "Would you like company or to try it alone?",
    "zh": {
      "title": "小小冒險",
      "scenario": "你想試點新事，但不想太大改變。",
      "question": "哪個小冒險最吸引你？",
      "twist": "",
      "deeperQuestion": "你需要找人陪，還是想自己試？"
    }
  },
  {
    "id": "ponder-v2-solo-077",
    "category": "Solo",
    "emoji": "🌿",
    "title": "After comparing",
    "scenario": "Someone's update makes you feel envious.",
    "question": "What exactly are you drawn to?",
    "twist": "",
    "deeperQuestion": "Is there a smaller version that fits your life?",
    "zh": {
      "title": "比較之後",
      "scenario": "你看完別人的近況，有點羨慕。",
      "question": "你羨慕的具體是甚麼？",
      "twist": "",
      "deeperQuestion": "有沒有一個小版本適合自己的生活？"
    }
  },
  {
    "id": "ponder-v2-solo-078",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Something outgrown",
    "scenario": "An old habit used to help but no longer fits.",
    "question": "What is it?",
    "twist": "",
    "deeperQuestion": "What simpler approach could replace it?",
    "zh": {
      "title": "不再合用",
      "scenario": "有個舊習慣以前有用，現在卻不太適合。",
      "question": "是哪一個？",
      "twist": "",
      "deeperQuestion": "你想換成甚麼更簡單的做法？"
    }
  },
  {
    "id": "ponder-v2-solo-079",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Something to anticipate",
    "scenario": "Think about the next seven days.",
    "question": "What small thing can you look forward to?",
    "twist": "",
    "deeperQuestion": "If nothing comes to mind, what could you plan?",
    "zh": {
      "title": "一份期待",
      "scenario": "想想往後七天。",
      "question": "你有甚麼小事值得期待？",
      "twist": "",
      "deeperQuestion": "如果目前沒有，你可以安排甚麼？"
    }
  },
  {
    "id": "ponder-v2-solo-080",
    "category": "Solo",
    "emoji": "🌿",
    "title": "An honest sentence",
    "scenario": "Take a moment to be honest with yourself today.",
    "question": "What would you say?",
    "twist": "",
    "deeperQuestion": "Does it ask for action, or simply acknowledgment?",
    "zh": {
      "title": "一句真話",
      "scenario": "如果今天只對自己講一句真話。",
      "question": "你會說甚麼？",
      "twist": "",
      "deeperQuestion": "這句話需要你做甚麼，還是只需要承認？"
    }
  },
  {
    "id": "ponder-v2-solo-081",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Choosing help",
    "scenario": "You want to talk about a problem.",
    "question": "Do you need experience or a willing listener?",
    "twist": "",
    "deeperQuestion": "Who fits what you need right now?",
    "zh": {
      "title": "選擇幫手",
      "scenario": "你有個問題想找人談。",
      "question": "你需要有經驗的人，還是願意聽的人？",
      "twist": "",
      "deeperQuestion": "誰比較符合你現在的需要？"
    }
  },
  {
    "id": "ponder-v2-solo-082",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A daily highlight",
    "scenario": "Something today went more smoothly than expected.",
    "question": "What was it?",
    "twist": "",
    "deeperQuestion": "What preparation helped?",
    "zh": {
      "title": "一天的亮點",
      "scenario": "今天有一件事比想像中順利。",
      "question": "是哪件？",
      "twist": "",
      "deeperQuestion": "有哪個準備幫上忙？"
    }
  },
  {
    "id": "ponder-v2-solo-083",
    "category": "Solo",
    "emoji": "🌿",
    "title": "One less notification",
    "scenario": "Some notifications keep interrupting you.",
    "question": "Which type would you turn off first?",
    "twist": "",
    "deeperQuestion": "What are you afraid of missing, and does it need an immediate response?",
    "zh": {
      "title": "少一個通知",
      "scenario": "手機有些通知總是打斷你。",
      "question": "你最想先關掉哪一類？",
      "twist": "",
      "deeperQuestion": "你擔心錯過甚麼，真的需要即時知道嗎？"
    }
  },
  {
    "id": "ponder-v2-solo-084",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Choosing again",
    "scenario": "You agreed to a commitment long ago.",
    "question": "How would you adjust it to fit life now?",
    "twist": "",
    "deeperQuestion": "Who would you need to discuss it with?",
    "zh": {
      "title": "重選一次",
      "scenario": "有個安排是很久前答應的。",
      "question": "按現在的生活，你會怎樣調整？",
      "twist": "",
      "deeperQuestion": "你需要跟誰重新商量？"
    }
  },
  {
    "id": "ponder-v2-solo-085",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Noticing change",
    "scenario": "Something small that once bothered you matters less now.",
    "question": "What is it?",
    "twist": "",
    "deeperQuestion": "What experience changed your view?",
    "zh": {
      "title": "看見變化",
      "scenario": "以前很在意的一件小事，現在沒那麼介意了。",
      "question": "是甚麼？",
      "twist": "",
      "deeperQuestion": "是哪段經歷讓你看法不同？"
    }
  },
  {
    "id": "ponder-v2-solo-086",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A comfortable evening",
    "scenario": "You have no special plans tonight.",
    "question": "What ordinary activity could feel more comfortable?",
    "twist": "",
    "deeperQuestion": "Would that need preparation, tidying, or doing less?",
    "zh": {
      "title": "一個舒服的晚上",
      "scenario": "今晚沒有特別安排。",
      "question": "你想把哪件普通小事做得舒服一點？",
      "twist": "",
      "deeperQuestion": "你需要先收拾、準備，還是少做一件事？"
    }
  },
  {
    "id": "ponder-v2-solo-087",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Making it clear",
    "scenario": "You have an idea that is hard to explain.",
    "question": "What everyday example could describe it?",
    "twist": "",
    "deeperQuestion": "How would you put it in one sentence?",
    "zh": {
      "title": "清楚一點",
      "scenario": "你有個想法很難說清楚。",
      "question": "可以用哪個生活例子來形容？",
      "twist": "",
      "deeperQuestion": "如果只用一句話，你會怎樣說？"
    }
  },
  {
    "id": "ponder-v2-solo-088",
    "category": "Solo",
    "emoji": "🌿",
    "title": "An empty slot",
    "scenario": "Half a day unexpectedly opens up.",
    "question": "Is your first instinct to work or rest?",
    "twist": "",
    "deeperQuestion": "What would you actually like to choose this time?",
    "zh": {
      "title": "一段空白",
      "scenario": "行程突然空出半天。",
      "question": "你第一個念頭是補工作，還是休息？",
      "twist": "",
      "deeperQuestion": "這次你真正想怎樣選？"
    }
  },
  {
    "id": "ponder-v2-solo-089",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A small impression",
    "scenario": "Someone has just met you.",
    "question": "What small quality would you like them to remember?",
    "twist": "",
    "deeperQuestion": "Does that side of you show around people you know well?",
    "zh": {
      "title": "你想怎樣被記得",
      "scenario": "剛認識的人跟你聊完。",
      "question": "你希望他記得你哪個小特點？",
      "twist": "",
      "deeperQuestion": "你在熟人面前也有這個樣子嗎？"
    }
  },
  {
    "id": "ponder-v2-solo-090",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Keeping curiosity",
    "scenario": "You tried something you expected to dislike and changed your mind.",
    "question": "What was it?",
    "twist": "",
    "deeperQuestion": "What else might deserve one try?",
    "zh": {
      "title": "保留好奇",
      "scenario": "你原本以為不喜歡一件事，試過後改觀了。",
      "question": "是哪件？",
      "twist": "",
      "deeperQuestion": "還有哪件小事值得給一次機會？"
    }
  },
  {
    "id": "ponder-v2-solo-091",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A message not sent",
    "scenario": "There is a message you have not sent.",
    "question": "What do you want it to accomplish?",
    "twist": "",
    "deeperQuestion": "How could it be more direct and rely less on assumptions?",
    "zh": {
      "title": "想說未說",
      "scenario": "你有一句話一直想傳出去。",
      "question": "它最想達到甚麼目的？",
      "twist": "",
      "deeperQuestion": "怎樣寫會更直接，又少一點猜測？"
    }
  },
  {
    "id": "ponder-v2-solo-092",
    "category": "Solo",
    "emoji": "🌿",
    "title": "My own corner",
    "scenario": "You want a spot for an activity you enjoy.",
    "question": "What does it need most?",
    "twist": "",
    "deeperQuestion": "What could you use that you already own?",
    "zh": {
      "title": "自己的角落",
      "scenario": "你想留一個地方做喜歡的事。",
      "question": "那裡最需要放甚麼？",
      "twist": "",
      "deeperQuestion": "有甚麼可以先用現成的東西代替？"
    }
  },
  {
    "id": "ponder-v2-solo-093",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A shorter explanation",
    "scenario": "You often over-explain to avoid being misunderstood.",
    "question": "What recent situation needed only one sentence?",
    "twist": "",
    "deeperQuestion": "What would that shorter sentence be?",
    "zh": {
      "title": "把話說短",
      "scenario": "你常常解釋很多，怕別人誤會。",
      "question": "最近哪件事其實一句話就夠？",
      "twist": "",
      "deeperQuestion": "那句簡短的說法會是甚麼？"
    }
  },
  {
    "id": "ponder-v2-solo-094",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Before concluding",
    "scenario": "Something just happened and you imagined many outcomes.",
    "question": "What is actually known so far?",
    "twist": "",
    "deeperQuestion": "What is still only a guess?",
    "zh": {
      "title": "不急著下結論",
      "scenario": "一件事剛發生，你就替它想了很多結果。",
      "question": "現在已經確定的事有哪些？",
      "twist": "",
      "deeperQuestion": "還有哪件事只是你的猜測？"
    }
  },
  {
    "id": "ponder-v2-solo-095",
    "category": "Solo",
    "emoji": "🌿",
    "title": "For tomorrow",
    "scenario": "There is something tomorrow you are not looking forward to.",
    "question": "What could make it easier tonight?",
    "twist": "",
    "deeperQuestion": "What sentence would you like to remind yourself of?",
    "zh": {
      "title": "留給明天",
      "scenario": "明天有一件你不太想面對的事。",
      "question": "今晚可以做甚麼讓它容易一點？",
      "twist": "",
      "deeperQuestion": "你需要提醒自己哪一句？"
    }
  },
  {
    "id": "ponder-v2-solo-096",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A new side of me",
    "scenario": "You have noticed a new preference lately.",
    "question": "What is it?",
    "twist": "",
    "deeperQuestion": "How much time would you like to give this interest?",
    "zh": {
      "title": "再認識自己",
      "scenario": "最近你發現自己有一個新喜好。",
      "question": "是哪一個？",
      "twist": "",
      "deeperQuestion": "你想花多少時間了解這個興趣？"
    }
  },
  {
    "id": "ponder-v2-solo-097",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A helpful no",
    "scenario": "Recall a time saying no brought relief.",
    "question": "What did it protect?",
    "twist": "",
    "deeperQuestion": "What sign could remind you next time?",
    "zh": {
      "title": "有用的拒絕",
      "scenario": "想起一次你拒絕後反而鬆一口氣。",
      "question": "你保住了甚麼？",
      "twist": "",
      "deeperQuestion": "下次有甚麼訊號可以提醒你？"
    }
  },
  {
    "id": "ponder-v2-solo-098",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Enough for today",
    "scenario": "Imagine stopping here for today.",
    "question": "What unfinished task could you put down?",
    "twist": "",
    "deeperQuestion": "What would be the first step when you return?",
    "zh": {
      "title": "今天夠了",
      "scenario": "今天已經忙了一段時間。",
      "question": "你願意先放下哪件未完成的事？",
      "twist": "",
      "deeperQuestion": "重新開始時，第一步要做甚麼？"
    }
  },
  {
    "id": "ponder-v2-solo-099",
    "category": "Solo",
    "emoji": "🌿",
    "title": "A note for tomorrow",
    "scenario": "You are writing one sentence for tomorrow's you.",
    "question": "What would it say?",
    "twist": "",
    "deeperQuestion": "Where could you leave it so you see it?",
    "zh": {
      "title": "給明天一句話",
      "scenario": "你想寫一句話給明天的自己。",
      "question": "你會提醒甚麼？",
      "twist": "",
      "deeperQuestion": "把它放在哪裡才看得到？"
    }
  },
  {
    "id": "ponder-v2-solo-100",
    "category": "Solo",
    "emoji": "🌿",
    "title": "One thing to take away",
    "scenario": "You have spent a little time reflecting today.",
    "question": "What small discovery would you like to keep?",
    "twist": "",
    "deeperQuestion": "Would you like to simply remember it or try one small action?",
    "zh": {
      "title": "帶走一件事",
      "scenario": "你剛花了一點時間整理想法。",
      "question": "你最想帶走哪個小發現？",
      "twist": "",
      "deeperQuestion": "你想只記住它，還是試做一件小事？"
    }
  }
];
