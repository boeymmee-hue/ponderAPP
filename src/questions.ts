export const categories = ['Couple', 'Family', 'Party', 'Solo'] as const;
export type Category = typeof categories[number];
export type GroupSize = 'small' | 'medium' | 'large';
export interface CardText { title: string; scenario: string; question: string; twist: string; deeperQuestion: string; }
export interface Question extends CardText { id: string; category: Category; emoji: string; zh: CardText; groupSize?: GroupSize; legacy?: boolean; author?: string; }
// Imaginative what-ifs with simple choices and connected follow-ups.
export const questions: Question[] = [
  {
    "id": "ponder-v3-couple-001",
    "category": "Couple",
    "emoji": "💗",
    "title": "Worry pet",
    "scenario": "Your pet can eat one person's worries, but the other must stay awake with it.",
    "question": "Whose worries should it eat tonight?",
    "twist": "",
    "deeperQuestion": "What if the same person stays awake all week?",
    "zh": {
      "title": "煩惱小獸",
      "scenario": "你們養的小獸每天能吃掉一人的煩惱，另一人要陪牠失眠一晚。",
      "question": "今晚你會讓牠吃誰的？",
      "twist": "",
      "deeperQuestion": "如果連續一星期都是同一人失眠呢？"
    }
  },
  {
    "id": "ponder-v3-couple-002",
    "category": "Couple",
    "emoji": "💗",
    "title": "Memory rent",
    "scenario": "A forest cottage charges one shared memory each month instead of money.",
    "question": "Would you move in?",
    "twist": "",
    "deeperQuestion": "Which memory could you give up first?",
    "zh": {
      "title": "回憶租金",
      "scenario": "森林小屋不用錢，每月收走你們一段共同回憶當租金。",
      "question": "你會搬進去嗎？",
      "twist": "",
      "deeperQuestion": "第一段你捨得交出的回憶是甚麼？"
    }
  },
  {
    "id": "ponder-v3-couple-003",
    "category": "Couple",
    "emoji": "💗",
    "title": "Honest umbrella",
    "scenario": "Under this umbrella you hear each other's thoughts; outside it you get wet.",
    "question": "Would you share it?",
    "twist": "",
    "deeperQuestion": "When would you agree to close it?",
    "zh": {
      "title": "透明雨傘",
      "scenario": "傘下的人會聽見彼此當下的想法，走出去就會淋雨。",
      "question": "你想一起撐嗎？",
      "twist": "",
      "deeperQuestion": "你會先約定哪種時候收起傘？"
    }
  },
  {
    "id": "ponder-v3-couple-004",
    "category": "Couple",
    "emoji": "💗",
    "title": "Waiting island",
    "scenario": "You receive your dream island, but your partner cannot join for five years.",
    "question": "Would you go first?",
    "twist": "",
    "deeperQuestion": "What if staying means losing the island forever?",
    "zh": {
      "title": "等你小島",
      "scenario": "你得到一座夢想小島，但伴侶要五年後才能搬來。",
      "question": "你會先去住嗎？",
      "twist": "",
      "deeperQuestion": "如果留低就永遠失去小島呢？"
    }
  },
  {
    "id": "ponder-v3-couple-005",
    "category": "Couple",
    "emoji": "💗",
    "title": "Love subtitles",
    "scenario": "One honest thought appears above your partner's head, once a day.",
    "question": "When would you look?",
    "twist": "",
    "deeperQuestion": "Would you tell them you looked?",
    "zh": {
      "title": "愛情字幕",
      "scenario": "對方頭上會顯示一句真心話，但每天只能看一次。",
      "question": "你會選甚麼時候看？",
      "twist": "",
      "deeperQuestion": "你想讓對方知道你看過嗎？"
    }
  },
  {
    "id": "ponder-v3-couple-006",
    "category": "Couple",
    "emoji": "💗",
    "title": "Sorry bread",
    "scenario": "Magic bread ends your partner's anger without an explanation.",
    "question": "Would you buy it?",
    "twist": "",
    "deeperQuestion": "What if the same thing happens next week?",
    "zh": {
      "title": "道歉麵包",
      "scenario": "吃下魔法麵包，對方就不再生你的氣，但你不用解釋。",
      "question": "你會買嗎？",
      "twist": "",
      "deeperQuestion": "如果同一件事下星期又發生呢？"
    }
  },
  {
    "id": "ponder-v3-couple-007",
    "category": "Couple",
    "emoji": "💗",
    "title": "Two moons",
    "scenario": "You each own a moon, but a shared home has room for only one.",
    "question": "How would you choose?",
    "twist": "",
    "deeperQuestion": "What if the other goes to a stranger?",
    "zh": {
      "title": "兩顆月亮",
      "scenario": "你們各有一顆月亮，一起住就只能留下其中一顆。",
      "question": "你會怎樣選？",
      "twist": "",
      "deeperQuestion": "如果另一顆會送給陌生人呢？"
    }
  },
  {
    "id": "ponder-v3-couple-008",
    "category": "Couple",
    "emoji": "💗",
    "title": "Spark savings",
    "scenario": "Each romantic spark can become money, but its feeling disappears.",
    "question": "Would you cash any in?",
    "twist": "",
    "deeperQuestion": "What if it could fund your shared dream?",
    "zh": {
      "title": "心動存款",
      "scenario": "每存下一次心動，就能換一百元，但會忘記那次感覺。",
      "question": "你會存嗎？",
      "twist": "",
      "deeperQuestion": "如果那筆錢能實現你們的夢想呢？"
    }
  },
  {
    "id": "ponder-v3-couple-009",
    "category": "Couple",
    "emoji": "💗",
    "title": "Future ring",
    "scenario": "A ring reveals your breakup date, but not the reason.",
    "question": "Would you wear it?",
    "twist": "",
    "deeperQuestion": "What if it says fifty years from now?",
    "zh": {
      "title": "預知戒指",
      "scenario": "戒指會告訴你們分手的日期，卻不會說原因。",
      "question": "你會戴上嗎？",
      "twist": "",
      "deeperQuestion": "如果日期是五十年後呢？"
    }
  },
  {
    "id": "ponder-v3-couple-010",
    "category": "Couple",
    "emoji": "💗",
    "title": "Private weather",
    "scenario": "Your home's weather follows one person's mood.",
    "question": "Whose mood should it follow?",
    "twist": "",
    "deeperQuestion": "What could the other do when they need sunshine?",
    "zh": {
      "title": "專屬天氣",
      "scenario": "你們的家會跟著其中一人的心情變天。",
      "question": "你想由誰控制天氣？",
      "twist": "",
      "deeperQuestion": "另一人想曬太陽時，可以怎樣辦？"
    }
  },
  {
    "id": "ponder-v3-couple-011",
    "category": "Couple",
    "emoji": "💗",
    "title": "Stand-in lover",
    "scenario": "A doll can perfectly play you while you travel.",
    "question": "Would you leave it with your partner?",
    "twist": "",
    "deeperQuestion": "What if they find the doll more thoughtful?",
    "zh": {
      "title": "代班戀人",
      "scenario": "你出遠門時，玩偶能完美扮演你陪伴對方。",
      "question": "你會留下它嗎？",
      "twist": "",
      "deeperQuestion": "如果對方覺得玩偶更體貼呢？"
    }
  },
  {
    "id": "ponder-v3-couple-012",
    "category": "Couple",
    "emoji": "💗",
    "title": "Secret garden",
    "scenario": "Your partner gives you a garden only you can enter.",
    "question": "Would you offer them a second key?",
    "twist": "",
    "deeperQuestion": "Would you keep one corner private?",
    "zh": {
      "title": "秘密花園",
      "scenario": "伴侶送你一座花園，只有你能進入。",
      "question": "你會主動邀他拿另一條鑰匙嗎？",
      "twist": "",
      "deeperQuestion": "你會留一個不開放的角落嗎？"
    }
  },
  {
    "id": "ponder-v3-couple-013",
    "category": "Couple",
    "emoji": "💗",
    "title": "Dream swap",
    "scenario": "You can swap ambitions and truly want each other's chosen life.",
    "question": "Would you agree?",
    "twist": "",
    "deeperQuestion": "Would you choose one day or forever?",
    "zh": {
      "title": "交換夢想",
      "scenario": "你們能交換一次人生夢想，換完就會真心想過對方的生活。",
      "question": "你願意嗎？",
      "twist": "",
      "deeperQuestion": "你想只換一天，還是永遠？"
    }
  },
  {
    "id": "ponder-v3-couple-014",
    "category": "Couple",
    "emoji": "💗",
    "title": "Happy album",
    "scenario": "An album replays your happiest day, costing one future date each time.",
    "question": "Would you watch often?",
    "twist": "",
    "deeperQuestion": "How many viewings would you save for old age?",
    "zh": {
      "title": "幸福相簿",
      "scenario": "相簿能重播最幸福的一天，但每看一次就少一個新的約會日。",
      "question": "你會常看嗎？",
      "twist": "",
      "deeperQuestion": "你會留多少次給年老的你們？"
    }
  },
  {
    "id": "ponder-v3-couple-015",
    "category": "Couple",
    "emoji": "💗",
    "title": "Honest parrot",
    "scenario": "Your parrot repeats your partner's unspoken complaints.",
    "question": "Would you keep it in the living room?",
    "twist": "",
    "deeperQuestion": "Could your partner cover its cage?",
    "zh": {
      "title": "誠實鸚鵡",
      "scenario": "你們的鸚鵡會重複對方沒說出口的不滿。",
      "question": "你會讓牠住客廳嗎？",
      "twist": "",
      "deeperQuestion": "你會准許對方替牠蓋上布嗎？"
    }
  },
  {
    "id": "ponder-v3-couple-016",
    "category": "Couple",
    "emoji": "💗",
    "title": "One winner",
    "scenario": "A fairy offers lifelong luck to one of you; the other stays ordinary.",
    "question": "Who should receive it?",
    "twist": "",
    "deeperQuestion": "Must the lucky person share the rewards?",
    "zh": {
      "title": "一人中獎",
      "scenario": "精靈只給你們其中一人終身好運，另一人維持原樣。",
      "question": "你會讓誰拿？",
      "twist": "",
      "deeperQuestion": "得到好運的人需要分享成果嗎？"
    }
  },
  {
    "id": "ponder-v3-couple-017",
    "category": "Couple",
    "emoji": "💗",
    "title": "Slow hug",
    "scenario": "Time stops when you hug, but you still age.",
    "question": "How long would you hug each day?",
    "twist": "",
    "deeperQuestion": "Would you tell your partner the cost?",
    "zh": {
      "title": "慢速擁抱",
      "scenario": "擁抱時時間會停止，但只有你會變老。",
      "question": "你還想每天抱多久？",
      "twist": "",
      "deeperQuestion": "你會告訴對方這個代價嗎？"
    }
  },
  {
    "id": "ponder-v3-couple-018",
    "category": "Couple",
    "emoji": "💗",
    "title": "Lost first love",
    "scenario": "You can erase your partner's ex, along with some kindness that relationship taught them.",
    "question": "Would you press it?",
    "twist": "",
    "deeperQuestion": "What if your partner asks you to?",
    "zh": {
      "title": "忘記初戀",
      "scenario": "你能刪掉伴侶對前任的回憶，但也會刪掉他學會的一份溫柔。",
      "question": "你會按嗎？",
      "twist": "",
      "deeperQuestion": "如果對方主動要求呢？"
    }
  },
  {
    "id": "ponder-v3-couple-019",
    "category": "Couple",
    "emoji": "💗",
    "title": "Perfect gift shop",
    "scenario": "A shop picks perfect gifts, but you must take the credit.",
    "question": "Would you use it?",
    "twist": "",
    "deeperQuestion": "Would knowing make the gift less special?",
    "zh": {
      "title": "最懂你的店",
      "scenario": "小店總能替你挑到完美禮物，但不准你說是店員選的。",
      "question": "你會光顧嗎？",
      "twist": "",
      "deeperQuestion": "收到的人知道後，禮物會變差嗎？"
    }
  },
  {
    "id": "ponder-v3-couple-020",
    "category": "Couple",
    "emoji": "💗",
    "title": "Love battery",
    "scenario": "One shared battery powers one person's adventure while the other recharges at home.",
    "question": "How would you take turns?",
    "twist": "",
    "deeperQuestion": "What if one adventure takes ten years?",
    "zh": {
      "title": "愛的電池",
      "scenario": "你們共用一顆電池，只夠支持一人的冒險。另一人要留在家充電。",
      "question": "你們會怎樣輪流？",
      "twist": "",
      "deeperQuestion": "如果一人的冒險要十年呢？"
    }
  },
  {
    "id": "ponder-v3-couple-021",
    "category": "Couple",
    "emoji": "💗",
    "title": "Argument rewind",
    "scenario": "You can rewind an argument; your partner forgets, but you remember every hurtful word.",
    "question": "Would you use it?",
    "twist": "",
    "deeperQuestion": "Would you bring those words up again?",
    "zh": {
      "title": "吵架倒帶",
      "scenario": "你能倒帶一場吵架，對方會忘記，你卻記得所有傷人的話。",
      "question": "你會用嗎？",
      "twist": "",
      "deeperQuestion": "你會再提那些話嗎？"
    }
  },
  {
    "id": "ponder-v3-couple-022",
    "category": "Couple",
    "emoji": "💗",
    "title": "Pocket partner",
    "scenario": "Your partner becomes thumb-sized but otherwise unchanged.",
    "question": "Would you carry them everywhere or build them a home?",
    "twist": "",
    "deeperQuestion": "What if they want to travel alone?",
    "zh": {
      "title": "口袋伴侶",
      "scenario": "伴侶變成拇指大小，說話做事仍一樣。",
      "question": "你會帶他到處去，還是替他造一個家？",
      "twist": "",
      "deeperQuestion": "如果他想獨自旅行呢？"
    }
  },
  {
    "id": "ponder-v3-couple-023",
    "category": "Couple",
    "emoji": "💗",
    "title": "Match machine",
    "scenario": "A machine rates you a 60% match and offers a 90% match.",
    "question": "Would you view the profile?",
    "twist": "",
    "deeperQuestion": "Would you look at it together?",
    "zh": {
      "title": "完美配對機",
      "scenario": "機器說你們只有六成合拍，卻能介紹九成合拍的人。",
      "question": "你想看那人的資料嗎？",
      "twist": "",
      "deeperQuestion": "你想讓伴侶一起看嗎？"
    }
  },
  {
    "id": "ponder-v3-couple-024",
    "category": "Couple",
    "emoji": "💗",
    "title": "Different wishes",
    "scenario": "Only one of your two wishes can come true.",
    "question": "Would you say yours first or hear theirs?",
    "twist": "",
    "deeperQuestion": "Could their wish make you change yours?",
    "zh": {
      "title": "願望不同路",
      "scenario": "你們各許一個願，精靈說兩個只能成真一個。",
      "question": "你先說出自己的，還是先聽對方的？",
      "twist": "",
      "deeperQuestion": "你會因為聽過對方的願望而改口嗎？"
    }
  },
  {
    "id": "ponder-v3-couple-025",
    "category": "Couple",
    "emoji": "💗",
    "title": "Feeling post",
    "scenario": "You can mail your partner one day's feelings to experience fully.",
    "question": "Which day would you send?",
    "twist": "",
    "deeperQuestion": "Would you want a reply or quiet company?",
    "zh": {
      "title": "情緒郵差",
      "scenario": "你能把一天的感受寄給伴侶，讓他完整體驗。",
      "question": "你會寄哪一天？",
      "twist": "",
      "deeperQuestion": "你希望他回信，還是陪你坐一會？"
    }
  },
  {
    "id": "ponder-v3-couple-026",
    "category": "Couple",
    "emoji": "💗",
    "title": "Tenfold pay",
    "scenario": "A moon job pays your partner ten times more, with one day together yearly.",
    "question": "Would you want them to go?",
    "twist": "",
    "deeperQuestion": "What if it lasts only three years?",
    "zh": {
      "title": "十倍收入",
      "scenario": "伴侶接下月球工作，收入十倍，但一年只能見你一天。",
      "question": "你希望他去嗎？",
      "twist": "",
      "deeperQuestion": "如果只做三年呢？"
    }
  },
  {
    "id": "ponder-v3-couple-027",
    "category": "Couple",
    "emoji": "💗",
    "title": "Lasting flower",
    "scenario": "A plant blooms whenever your partner lies and never wilts.",
    "question": "Would you keep it at home?",
    "twist": "",
    "deeperQuestion": "What about a lie to prepare a surprise?",
    "zh": {
      "title": "不凋的花",
      "scenario": "花永不凋謝，但只有在對方說謊時才開花。",
      "question": "你會把它放家裡嗎？",
      "twist": "",
      "deeperQuestion": "如果只是為了準備驚喜呢？"
    }
  },
  {
    "id": "ponder-v3-couple-028",
    "category": "Couple",
    "emoji": "💗",
    "title": "Fresh start",
    "scenario": "Tomorrow you forget each other and may each leave one sentence.",
    "question": "What would you write?",
    "twist": "",
    "deeperQuestion": "Would you leave a promise or room to choose?",
    "zh": {
      "title": "一起失憶",
      "scenario": "你們明天會忘記彼此，只能各留一句話。",
      "question": "你會寫甚麼？",
      "twist": "",
      "deeperQuestion": "你會寫承諾，還是留下選擇的空間？"
    }
  },
  {
    "id": "ponder-v3-couple-029",
    "category": "Couple",
    "emoji": "💗",
    "title": "Two-seat carpet",
    "scenario": "Your carpet seats two, and your pet wants to come.",
    "question": "Would one of you stay or would nobody fly?",
    "twist": "",
    "deeperQuestion": "What if this is your only flight ever?",
    "zh": {
      "title": "雙人魔毯",
      "scenario": "魔毯只能載兩人，你們的寵物也想同行。",
      "question": "你會少去一人，還是放棄飛行？",
      "twist": "",
      "deeperQuestion": "如果一生只能飛一次呢？"
    }
  },
  {
    "id": "ponder-v3-couple-030",
    "category": "Couple",
    "emoji": "💗",
    "title": "Kindness filter",
    "scenario": "Glasses make every flaw in your partner look like a strength.",
    "question": "Would you wear them?",
    "twist": "",
    "deeperQuestion": "When would you insist on taking them off?",
    "zh": {
      "title": "善意濾鏡",
      "scenario": "眼鏡會把伴侶的每個缺點都看成優點。",
      "question": "你想戴嗎？",
      "twist": "",
      "deeperQuestion": "有哪個時候你一定要脫下？"
    }
  },
  {
    "id": "ponder-v3-couple-031",
    "category": "Couple",
    "emoji": "💗",
    "title": "Date copy",
    "scenario": "You can repeat your best date forever, but never visit somewhere new together.",
    "question": "Would you trade?",
    "twist": "",
    "deeperQuestion": "What if your partner really wants the trade?",
    "zh": {
      "title": "約會複製券",
      "scenario": "你能永遠重複最好的約會，代價是不能一起去新地方。",
      "question": "你會換嗎？",
      "twist": "",
      "deeperQuestion": "如果對方很想換呢？"
    }
  },
  {
    "id": "ponder-v3-couple-032",
    "category": "Couple",
    "emoji": "💗",
    "title": "Love ranking",
    "scenario": "Everyone displays their three dearest people.",
    "question": "Would you want to know your rank?",
    "twist": "",
    "deeperQuestion": "What if family comes before you?",
    "zh": {
      "title": "愛的排名",
      "scenario": "每人頭上都顯示最在乎的三個人。",
      "question": "你想知道自己排第幾嗎？",
      "twist": "",
      "deeperQuestion": "如果你排在家人之後呢？"
    }
  },
  {
    "id": "ponder-v3-couple-033",
    "category": "Couple",
    "emoji": "💗",
    "title": "Alone room",
    "scenario": "A room gives you a day alone while one minute passes outside.",
    "question": "Would you use it daily?",
    "twist": "",
    "deeperQuestion": "Should your partner know how long you stayed?",
    "zh": {
      "title": "獨處房間",
      "scenario": "家裡有個房間，進去一天，外面只過一分鐘。",
      "question": "你會每天進去嗎？",
      "twist": "",
      "deeperQuestion": "對方需要知道你待了多久嗎？"
    }
  },
  {
    "id": "ponder-v3-couple-034",
    "category": "Couple",
    "emoji": "💗",
    "title": "Goldfish promises",
    "scenario": "Promises become goldfish; broken promises must be released by hand.",
    "question": "Would your tank be large?",
    "twist": "",
    "deeperQuestion": "Would you promise less or grow the tank?",
    "zh": {
      "title": "金魚承諾",
      "scenario": "每個承諾會變成一條金魚，沒做到就要親手放走。",
      "question": "你們的魚缸會大嗎？",
      "twist": "",
      "deeperQuestion": "你會少許願，還是努力養大魚缸？"
    }
  },
  {
    "id": "ponder-v3-couple-035",
    "category": "Couple",
    "emoji": "💗",
    "title": "One sentence",
    "scenario": "Magic allows one sentence to your partner each day, but unlimited gestures.",
    "question": "What would you say today?",
    "twist": "",
    "deeperQuestion": "Would you leave “I love you” to gestures?",
    "zh": {
      "title": "只剩一句",
      "scenario": "魔法讓你每天只能對伴侶說一句話，動作不限。",
      "question": "你今天會說甚麼？",
      "twist": "",
      "deeperQuestion": "你會把「我愛你」留給動作嗎？"
    }
  },
  {
    "id": "ponder-v3-couple-036",
    "category": "Couple",
    "emoji": "💗",
    "title": "Memory auction",
    "scenario": "Someone offers a fortune for your first meeting; both of you would forget it.",
    "question": "Would you sell?",
    "twist": "",
    "deeperQuestion": "Could the sale go ahead if only you agree?",
    "zh": {
      "title": "記憶拍賣",
      "scenario": "有人高價買你們第一次見面的回憶，兩人都會忘記。",
      "question": "你願意賣嗎？",
      "twist": "",
      "deeperQuestion": "如果只有你願意，能成交嗎？"
    }
  },
  {
    "id": "ponder-v3-couple-037",
    "category": "Couple",
    "emoji": "💗",
    "title": "The return door",
    "scenario": "A door leads to your partner before they knew you.",
    "question": "Would you pursue them again?",
    "twist": "",
    "deeperQuestion": "Would you use what you already know to win them over?",
    "zh": {
      "title": "轉身門",
      "scenario": "一扇門能讓你遇見還未認識你的伴侶。",
      "question": "你會再追求他嗎？",
      "twist": "",
      "deeperQuestion": "你會用已知的喜好來打動他嗎？"
    }
  },
  {
    "id": "ponder-v3-couple-038",
    "category": "Couple",
    "emoji": "💗",
    "title": "Loyal robot cat",
    "scenario": "A robot cat always sides with its buyer during arguments.",
    "question": "Would you buy it as a referee?",
    "twist": "",
    "deeperQuestion": "What if your partner buys one first?",
    "zh": {
      "title": "忠心機器貓",
      "scenario": "機器貓會在每次爭執時支持買下牠的人。",
      "question": "你會買來當裁判嗎？",
      "twist": "",
      "deeperQuestion": "如果伴侶先買了一隻呢？"
    }
  },
  {
    "id": "ponder-v3-couple-039",
    "category": "Couple",
    "emoji": "💗",
    "title": "Two endings",
    "scenario": "A book offers an ordinary stable future or an exciting one often apart.",
    "question": "Which page would you turn?",
    "twist": "",
    "deeperQuestion": "Could you accept your partner choosing the other?",
    "zh": {
      "title": "兩種結局",
      "scenario": "一本書有你們的兩種未來：平穩但普通，精彩卻常分隔。",
      "question": "你會翻哪一頁？",
      "twist": "",
      "deeperQuestion": "你能接受對方選另一頁嗎？"
    }
  },
  {
    "id": "ponder-v3-couple-040",
    "category": "Couple",
    "emoji": "💗",
    "title": "Sweet-word tax",
    "scenario": "Every sweet remark costs a coin; quiet care is free.",
    "question": "Would you say fewer sweet things?",
    "twist": "",
    "deeperQuestion": "What if hearing them matters most to your partner?",
    "zh": {
      "title": "甜言稅",
      "scenario": "每句甜言蜜語都要付一元，默默照顧不用錢。",
      "question": "你們會少說甜話嗎？",
      "twist": "",
      "deeperQuestion": "如果對方最需要聽見那些話呢？"
    }
  },
  {
    "id": "ponder-v3-couple-041",
    "category": "Couple",
    "emoji": "💗",
    "title": "Dream meetings",
    "scenario": "You can date in dreams, remembering only the feeling by day.",
    "question": "Does that count as time together?",
    "twist": "",
    "deeperQuestion": "What if dreams feel happier than real life?",
    "zh": {
      "title": "夢中相見",
      "scenario": "你們能在夢裡約會，但白天會忘記內容，只留下感覺。",
      "question": "這樣算相處過嗎？",
      "twist": "",
      "deeperQuestion": "如果夢裡比現實開心呢？"
    }
  },
  {
    "id": "ponder-v3-couple-042",
    "category": "Couple",
    "emoji": "💗",
    "title": "Dragon guard",
    "scenario": "A tiny dragon drives away anyone who hurts your partner, including you.",
    "question": "Would you gift it to them?",
    "twist": "",
    "deeperQuestion": "Should it allow one apology?",
    "zh": {
      "title": "小龍保鑣",
      "scenario": "一隻小龍會趕走所有讓伴侶傷心的人，包括你。",
      "question": "你願意送牠給對方嗎？",
      "twist": "",
      "deeperQuestion": "你希望牠容許一次道歉嗎？"
    }
  },
  {
    "id": "ponder-v3-couple-043",
    "category": "Couple",
    "emoji": "💗",
    "title": "Care ledger",
    "scenario": "Every act of care appears on a wall that cannot be erased.",
    "question": "Would you want this wall at home?",
    "twist": "",
    "deeperQuestion": "What if it records only things that cost money?",
    "zh": {
      "title": "愛心記帳",
      "scenario": "每次付出都會記在牆上，誰都不能刪。",
      "question": "你想家裡有這面牆嗎？",
      "twist": "",
      "deeperQuestion": "如果牆只記得花錢的事呢？"
    }
  },
  {
    "id": "ponder-v3-couple-044",
    "category": "Couple",
    "emoji": "💗",
    "title": "Different clocks",
    "scenario": "You can both live longer, but one ages twenty years first.",
    "question": "Would you accept?",
    "twist": "",
    "deeperQuestion": "Who should decide which person ages first?",
    "zh": {
      "title": "變老速度",
      "scenario": "你們可以一起長壽，但其中一人會先變老二十年。",
      "question": "你會接受嗎？",
      "twist": "",
      "deeperQuestion": "誰來決定由哪一人先變老？"
    }
  },
  {
    "id": "ponder-v3-couple-045",
    "category": "Couple",
    "emoji": "💗",
    "title": "Tomorrow's letter",
    "scenario": "Your future partner sends a letter marked “Do not open yet”.",
    "question": "Would you open it?",
    "twist": "",
    "deeperQuestion": "What if the envelope keeps crying?",
    "zh": {
      "title": "明天的信",
      "scenario": "未來的伴侶寄來一封信，封面寫「現在別拆」。",
      "question": "你會拆嗎？",
      "twist": "",
      "deeperQuestion": "如果信封一直在哭呢？"
    }
  },
  {
    "id": "ponder-v3-couple-046",
    "category": "Couple",
    "emoji": "💗",
    "title": "Shared luck",
    "scenario": "You can split your luck equally, never having one lucky and one unlucky partner.",
    "question": "Would you agree?",
    "twist": "",
    "deeperQuestion": "What if you were the luckier one?",
    "zh": {
      "title": "共享運氣",
      "scenario": "你們可以平分運氣，從此不會一人特別順、一人特別倒楣。",
      "question": "你願意嗎？",
      "twist": "",
      "deeperQuestion": "如果你原本是比較幸運的那個呢？"
    }
  },
  {
    "id": "ponder-v3-couple-047",
    "category": "Couple",
    "emoji": "💗",
    "title": "Love translator",
    "scenario": "Earphones translate complaints into what your partner actually wants.",
    "question": "Would you keep them on?",
    "twist": "",
    "deeperQuestion": "Would you hear the original words first?",
    "zh": {
      "title": "愛的翻譯",
      "scenario": "耳機會把對方每句抱怨翻成他真正想要的東西。",
      "question": "你會一直戴著嗎？",
      "twist": "",
      "deeperQuestion": "你想先聽原話，還是直接聽翻譯？"
    }
  },
  {
    "id": "ponder-v3-couple-048",
    "category": "Couple",
    "emoji": "💗",
    "title": "Goodbye boat",
    "scenario": "A hundred goodbyes become paper boats you can trade for never being apart.",
    "question": "Would you trade?",
    "twist": "",
    "deeperQuestion": "Would you agree if solo travel became impossible?",
    "zh": {
      "title": "離別小船",
      "scenario": "每次道別都能存成一艘紙船，一百艘可換永不分開。",
      "question": "你想兌換嗎？",
      "twist": "",
      "deeperQuestion": "永不分開包括不能獨自旅行，你還願意嗎？"
    }
  },
  {
    "id": "ponder-v3-couple-049",
    "category": "Couple",
    "emoji": "💗",
    "title": "Growing gift",
    "scenario": "A gift grows only when its recipient truly likes it.",
    "question": "Would you give one to your partner?",
    "twist": "",
    "deeperQuestion": "If it stays tiny, would you ask why?",
    "zh": {
      "title": "會長大的禮物",
      "scenario": "一份禮物只有在你真心喜歡時才長大。",
      "question": "你會送給伴侶嗎？",
      "twist": "",
      "deeperQuestion": "如果它一直很小，你想問原因嗎？"
    }
  },
  {
    "id": "ponder-v3-couple-050",
    "category": "Couple",
    "emoji": "💗",
    "title": "Strangers today",
    "scenario": "One day each year you become strangers to each other.",
    "question": "How would you arrange to meet?",
    "twist": "",
    "deeperQuestion": "Would it bother you if no spark appeared that day?",
    "zh": {
      "title": "一日陌生人",
      "scenario": "每年一天，你們會忘記是情侶，只記得對方是陌生人。",
      "question": "你會安排怎樣相遇？",
      "twist": "",
      "deeperQuestion": "如果那天沒有心動，你會介意嗎？"
    }
  },
  {
    "id": "ponder-v3-couple-051",
    "category": "Couple",
    "emoji": "💗",
    "title": "Mood remote",
    "scenario": "You can secretly press a button to cheer your partner up.",
    "question": "Would you use it?",
    "twist": "",
    "deeperQuestion": "What if they want time to feel sad?",
    "zh": {
      "title": "情緒遙控器",
      "scenario": "你能一按就讓伴侶開心，但只有你知道按過。",
      "question": "你會用嗎？",
      "twist": "",
      "deeperQuestion": "如果對方想認真難過一會呢？"
    }
  },
  {
    "id": "ponder-v3-couple-052",
    "category": "Couple",
    "emoji": "💗",
    "title": "Two breakfasts",
    "scenario": "A magic kitchen makes only your favourite breakfast, never your partner's.",
    "question": "Would you keep it?",
    "twist": "",
    "deeperQuestion": "Would you cook their portion yourself?",
    "zh": {
      "title": "兩份早餐",
      "scenario": "魔法廚房只會煮你最愛的早餐，對方想吃的永遠沒有。",
      "question": "你會留下廚房嗎？",
      "twist": "",
      "deeperQuestion": "你願意自己煮對方那份嗎？"
    }
  },
  {
    "id": "ponder-v3-couple-053",
    "category": "Couple",
    "emoji": "💗",
    "title": "Happy broadcast",
    "scenario": "Your happy moments would be broadcast citywide; sad ones stay private.",
    "question": "Would you switch it on?",
    "twist": "",
    "deeperQuestion": "What if the broadcasts earn you money?",
    "zh": {
      "title": "幸福廣播",
      "scenario": "你們每次幸福的時刻都會全城直播，難過時不會。",
      "question": "你會開啟嗎？",
      "twist": "",
      "deeperQuestion": "如果直播能替你們賺錢呢？"
    }
  },
  {
    "id": "ponder-v3-couple-054",
    "category": "Couple",
    "emoji": "💗",
    "title": "One-only ticket",
    "scenario": "Your partner gives you a dream concert ticket but cannot attend.",
    "question": "Would you go alone?",
    "twist": "",
    "deeperQuestion": "What if they secretly hope you stay?",
    "zh": {
      "title": "獨一無二票",
      "scenario": "伴侶送你一張夢想演唱會票，但他不能進場。",
      "question": "你會自己去嗎？",
      "twist": "",
      "deeperQuestion": "如果他其實希望你留下呢？"
    }
  },
  {
    "id": "ponder-v3-couple-055",
    "category": "Couple",
    "emoji": "💗",
    "title": "Talking savings",
    "scenario": "Your shared piggy bank asks whether each purchase is worthwhile.",
    "question": "Who should answer?",
    "twist": "",
    "deeperQuestion": "Can money leave when you disagree?",
    "zh": {
      "title": "會說話的存錢筒",
      "scenario": "共同存錢筒每次都問「這筆錢值得花嗎」。",
      "question": "你想讓誰回答？",
      "twist": "",
      "deeperQuestion": "如果兩人答案不同，錢能拿走嗎？"
    }
  },
  {
    "id": "ponder-v3-couple-056",
    "category": "Couple",
    "emoji": "💗",
    "title": "Joy exchange",
    "scenario": "You can give your partner half your joy, without replacing it.",
    "question": "When would you do it?",
    "twist": "",
    "deeperQuestion": "Would you accept the same gift from them?",
    "zh": {
      "title": "幸福交換所",
      "scenario": "你能把自己的快樂分一半給伴侶，但不能補回。",
      "question": "你會在甚麼時候換？",
      "twist": "",
      "deeperQuestion": "你會接受對方這樣送你嗎？"
    }
  },
  {
    "id": "ponder-v3-couple-057",
    "category": "Couple",
    "emoji": "💗",
    "title": "First kiss forever",
    "scenario": "Every kiss can feel like the first, but earlier kisses are forgotten.",
    "question": "Would you try?",
    "twist": "",
    "deeperQuestion": "Is there one kiss you would insist on keeping?",
    "zh": {
      "title": "永遠的初吻",
      "scenario": "魔法能讓每次接吻都像初吻，但會忘記以前的吻。",
      "question": "你想試嗎？",
      "twist": "",
      "deeperQuestion": "有哪一次你一定想留下？"
    }
  },
  {
    "id": "ponder-v3-couple-058",
    "category": "Couple",
    "emoji": "💗",
    "title": "Argument plant",
    "scenario": "Unspoken complaints become thorns in a plant.",
    "question": "Would you trim them or talk things through?",
    "twist": "",
    "deeperQuestion": "What if talking temporarily makes the flowers wilt?",
    "zh": {
      "title": "吵架花盆",
      "scenario": "每次沒說出口的不滿都會長成一根刺。",
      "question": "你會剪刺，還是把事情說開？",
      "twist": "",
      "deeperQuestion": "如果說開會令花暫時凋謝呢？"
    }
  },
  {
    "id": "ponder-v3-couple-059",
    "category": "Couple",
    "emoji": "💗",
    "title": "Whose map",
    "scenario": "A travel map follows only one person's deepest wishes.",
    "question": "Who should hold it?",
    "twist": "",
    "deeperQuestion": "Would you ask to swap halfway?",
    "zh": {
      "title": "誰的地圖",
      "scenario": "雙人旅行地圖只會帶你們去其中一人最想去的地方。",
      "question": "你想誰拿地圖？",
      "twist": "",
      "deeperQuestion": "你會在途中要求交換嗎？"
    }
  },
  {
    "id": "ponder-v3-couple-060",
    "category": "Couple",
    "emoji": "💗",
    "title": "Breakup insurance",
    "scenario": "Insurance removes breakup pain, along with the joy of having loved.",
    "question": "Would you buy it?",
    "twist": "",
    "deeperQuestion": "Would you buy a policy for your partner too?",
    "zh": {
      "title": "分手保險",
      "scenario": "保險能保證分手後不傷心，但也會抹去相愛的快樂。",
      "question": "你會買嗎？",
      "twist": "",
      "deeperQuestion": "你會替伴侶也買一份嗎？"
    }
  },
  {
    "id": "ponder-v3-couple-061",
    "category": "Couple",
    "emoji": "💗",
    "title": "Quiet world",
    "scenario": "You can live where arguments never happen, but disagreements cannot be spoken.",
    "question": "Would you move there?",
    "twist": "",
    "deeperQuestion": "What would you most fear being unable to say?",
    "zh": {
      "title": "靜音世界",
      "scenario": "你們可住進沒有爭吵的世界，但所有不同意見都說不出口。",
      "question": "你會搬去嗎？",
      "twist": "",
      "deeperQuestion": "你最怕哪句話因此說不出口？"
    }
  },
  {
    "id": "ponder-v3-couple-062",
    "category": "Couple",
    "emoji": "💗",
    "title": "Weekend double",
    "scenario": "Your double can enjoy a date with your partner while you go elsewhere.",
    "question": "Would you send it?",
    "twist": "",
    "deeperQuestion": "Would you tell your partner beforehand?",
    "zh": {
      "title": "週末分身",
      "scenario": "你可以派分身陪伴侶，自己去玩，分身也會真心享受約會。",
      "question": "你會派嗎？",
      "twist": "",
      "deeperQuestion": "你會事先告訴伴侶嗎？"
    }
  },
  {
    "id": "ponder-v3-couple-063",
    "category": "Couple",
    "emoji": "💗",
    "title": "Inner child",
    "scenario": "You meet your partner's inner child, who will trust one promise.",
    "question": "What would you promise?",
    "twist": "",
    "deeperQuestion": "What would you refuse to promise, even to comfort them?",
    "zh": {
      "title": "心裡的小孩",
      "scenario": "你能見到伴侶心裡的小孩，他只肯相信一個承諾。",
      "question": "你會答應甚麼？",
      "twist": "",
      "deeperQuestion": "有甚麼你再想安慰他也不會答應？"
    }
  },
  {
    "id": "ponder-v3-couple-064",
    "category": "Couple",
    "emoji": "💗",
    "title": "Love expiry",
    "scenario": "A potion gives you a year of intense romance, then returns things to normal.",
    "question": "Would you drink it?",
    "twist": "",
    "deeperQuestion": "Would ordinary love feel insufficient afterwards?",
    "zh": {
      "title": "愛情期限",
      "scenario": "藥水讓你們熱戀一年，之後回到現在的感情。",
      "question": "你想喝嗎？",
      "twist": "",
      "deeperQuestion": "你會怕一年後覺得現在不夠好嗎？"
    }
  },
  {
    "id": "ponder-v3-couple-065",
    "category": "Couple",
    "emoji": "💗",
    "title": "Home beacon",
    "scenario": "A beacon shines whenever you wait for your partner.",
    "question": "Would you want them to see it?",
    "twist": "",
    "deeperQuestion": "Would you hope it makes them come home sooner?",
    "zh": {
      "title": "回家燈塔",
      "scenario": "只要你等伴侶回家，天空就會亮起燈塔。",
      "question": "你想讓他看見嗎？",
      "twist": "",
      "deeperQuestion": "你希望他因此早點回來嗎？"
    }
  },
  {
    "id": "ponder-v3-couple-066",
    "category": "Couple",
    "emoji": "💗",
    "title": "Shared name",
    "scenario": "A couple may keep only one original name; the other must choose a new one.",
    "question": "How would you decide?",
    "twist": "",
    "deeperQuestion": "What if you could both change names?",
    "zh": {
      "title": "共同名字",
      "scenario": "一對情侶只能保留一人的名字，另一人要選新名字。",
      "question": "你會怎樣決定？",
      "twist": "",
      "deeperQuestion": "如果可以兩人都改呢？"
    }
  },
  {
    "id": "ponder-v3-couple-067",
    "category": "Couple",
    "emoji": "💗",
    "title": "Remembering cafe",
    "scenario": "A cafe keeps every date's conversation, even after a breakup.",
    "question": "Would you visit often?",
    "twist": "",
    "deeperQuestion": "Could your partner return alone to listen?",
    "zh": {
      "title": "不會忘的餐廳",
      "scenario": "餐廳會保存每次約會的對話，分手後也不刪。",
      "question": "你願意常去嗎？",
      "twist": "",
      "deeperQuestion": "你會准許對方獨自回去聽嗎？"
    }
  },
  {
    "id": "ponder-v3-couple-068",
    "category": "Couple",
    "emoji": "💗",
    "title": "Love score",
    "scenario": "Each morning you see your partner's score for yesterday together.",
    "question": "Would you enable it?",
    "twist": "",
    "deeperQuestion": "After a low score, would you ask why or need time first?",
    "zh": {
      "title": "戀愛評分",
      "scenario": "每天醒來，你會看到伴侶給昨天相處的分數。",
      "question": "你想開啟嗎？",
      "twist": "",
      "deeperQuestion": "低分那天，你先問原因還是先難過？"
    }
  },
  {
    "id": "ponder-v3-couple-069",
    "category": "Couple",
    "emoji": "💗",
    "title": "Only yours",
    "scenario": "Your flowers bloom only for your partner.",
    "question": "Does that feel romantic or disappointing?",
    "twist": "",
    "deeperQuestion": "What if your friends want to see them too?",
    "zh": {
      "title": "只給你的花",
      "scenario": "你種的花只對伴侶盛開，他不在就合起來。",
      "question": "你會覺得浪漫還是可惜？",
      "twist": "",
      "deeperQuestion": "如果朋友也很想看花呢？"
    }
  },
  {
    "id": "ponder-v3-couple-070",
    "category": "Couple",
    "emoji": "💗",
    "title": "Missed moment",
    "scenario": "You can watch one moment you missed in your partner's life, without joining it.",
    "question": "Which one?",
    "twist": "",
    "deeperQuestion": "Would you want them watching beside you?",
    "zh": {
      "title": "錯過重播",
      "scenario": "你能補看伴侶人生中一個你錯過的時刻，卻不能參與。",
      "question": "你想看哪個？",
      "twist": "",
      "deeperQuestion": "你想讓他陪你一起看嗎？"
    }
  },
  {
    "id": "ponder-v3-couple-071",
    "category": "Couple",
    "emoji": "💗",
    "title": "Another love",
    "scenario": "Every decade your personalities change, but memories stay.",
    "question": "Would you promise to stay together?",
    "twist": "",
    "deeperQuestion": "Would you want the chance to choose again?",
    "zh": {
      "title": "換一種愛",
      "scenario": "每十年，你們會變成不同性格的人，但記得全部回憶。",
      "question": "你還會承諾一直在一起嗎？",
      "twist": "",
      "deeperQuestion": "你希望保留重新選擇的機會嗎？"
    }
  },
  {
    "id": "ponder-v3-couple-072",
    "category": "Couple",
    "emoji": "💗",
    "title": "Thought balloons",
    "scenario": "Unspoken feelings become balloons beside the bed.",
    "question": "Would you ask to open one of your partner's?",
    "twist": "",
    "deeperQuestion": "If they refuse, could you leave it floating?",
    "zh": {
      "title": "心事氣球",
      "scenario": "沒說的心事會變成氣球飄在床邊。",
      "question": "你會問伴侶可不可以拆一個嗎？",
      "twist": "",
      "deeperQuestion": "如果他說不，你能讓它一直飄著嗎？"
    }
  },
  {
    "id": "ponder-v3-couple-073",
    "category": "Couple",
    "emoji": "💗",
    "title": "One shared dream",
    "scenario": "You must share one nightly dream: adventure or quiet.",
    "question": "Which would you choose tonight?",
    "twist": "",
    "deeperQuestion": "Would you alternate nights?",
    "zh": {
      "title": "兩人一夢",
      "scenario": "你們每晚只能做同一個夢，一人喜歡冒險、一人喜歡安靜。",
      "question": "今晚選哪種？",
      "twist": "",
      "deeperQuestion": "你願意隔晚輪流嗎？"
    }
  },
  {
    "id": "ponder-v3-couple-074",
    "category": "Couple",
    "emoji": "💗",
    "title": "No fear",
    "scenario": "You can lose all fear of losing your partner, but also stop missing them.",
    "question": "Would you accept?",
    "twist": "",
    "deeperQuestion": "What if your partner chooses it?",
    "zh": {
      "title": "不怕失去",
      "scenario": "你能永遠不怕失去伴侶，但也不再感到想念。",
      "question": "你會接受嗎？",
      "twist": "",
      "deeperQuestion": "如果對方選了這個魔法呢？"
    }
  },
  {
    "id": "ponder-v3-couple-075",
    "category": "Couple",
    "emoji": "💗",
    "title": "Walking home",
    "scenario": "Your home walks toward one person's dream city each day.",
    "question": "Whose wish should guide it?",
    "twist": "",
    "deeperQuestion": "Would you ask it to stop halfway?",
    "zh": {
      "title": "會走的房子",
      "scenario": "你們的房子每天走向其中一人的夢想城市。",
      "question": "你希望它跟誰走？",
      "twist": "",
      "deeperQuestion": "你會讓它停在中間嗎？"
    }
  },
  {
    "id": "ponder-v3-couple-076",
    "category": "Couple",
    "emoji": "💗",
    "title": "Forgiveness eraser",
    "scenario": "An eraser removes hurt, but the forgiven person forgets their mistake.",
    "question": "Would you use it?",
    "twist": "",
    "deeperQuestion": "Whose memory would you rather preserve?",
    "zh": {
      "title": "原諒橡皮擦",
      "scenario": "橡皮擦能擦走傷心，但被原諒的人會忘記自己做錯了甚麼。",
      "question": "你會用嗎？",
      "twist": "",
      "deeperQuestion": "你更想留下哪一方的記憶？"
    }
  },
  {
    "id": "ponder-v3-couple-077",
    "category": "Couple",
    "emoji": "💗",
    "title": "Secret park",
    "scenario": "You find a park for just the two of you; telling anyone makes it vanish.",
    "question": "Could you keep it secret?",
    "twist": "",
    "deeperQuestion": "What if a friend needs a refuge?",
    "zh": {
      "title": "秘密樂園",
      "scenario": "你們找到只屬於兩人的樂園，告訴第三個人就會消失。",
      "question": "你能守住嗎？",
      "twist": "",
      "deeperQuestion": "如果朋友正需要一個避風港呢？"
    }
  },
  {
    "id": "ponder-v3-couple-078",
    "category": "Couple",
    "emoji": "💗",
    "title": "Attention hourglass",
    "scenario": "You share one fully attentive hour each day; otherwise distractions return.",
    "question": "What would you save it for?",
    "twist": "",
    "deeperQuestion": "Would you spend it playing or solving a problem?",
    "zh": {
      "title": "專心沙漏",
      "scenario": "你們每天共用一小時完全專心的時間，其餘時候都容易分心。",
      "question": "你想留給哪件事？",
      "twist": "",
      "deeperQuestion": "你會用來玩，還是解決難題？"
    }
  },
  {
    "id": "ponder-v3-couple-079",
    "category": "Couple",
    "emoji": "💗",
    "title": "Reunion ticket",
    "scenario": "A ticket brings your distant partner instantly, but costs them an important opportunity.",
    "question": "Would you send it?",
    "twist": "",
    "deeperQuestion": "Would you explain the cost first?",
    "zh": {
      "title": "重逢車票",
      "scenario": "車票能讓遠方的伴侶立刻來到你身邊，但他會錯過一個重要機會。",
      "question": "你會寄出嗎？",
      "twist": "",
      "deeperQuestion": "你會先告訴他代價嗎？"
    }
  },
  {
    "id": "ponder-v3-couple-080",
    "category": "Couple",
    "emoji": "💗",
    "title": "Honest discount",
    "scenario": "A restaurant discounts every honest admission, even awkward ones.",
    "question": "Would you talk until dinner is free?",
    "twist": "",
    "deeperQuestion": "What would you never reveal for a discount?",
    "zh": {
      "title": "真心折扣",
      "scenario": "餐廳每說出一個真心話就打折，包括不太好聽的話。",
      "question": "你們會說到免費嗎？",
      "twist": "",
      "deeperQuestion": "有哪類話你不想為折扣說出口？"
    }
  },
  {
    "id": "ponder-v3-couple-081",
    "category": "Couple",
    "emoji": "💗",
    "title": "Different seasons",
    "scenario": "You can each live in your favourite season, meeting for only one season yearly.",
    "question": "Would you choose that?",
    "twist": "",
    "deeperQuestion": "Who should choose your season together?",
    "zh": {
      "title": "不同的四季",
      "scenario": "你們可以各住最喜歡的季節，但一年只能相聚一季。",
      "question": "你會選嗎？",
      "twist": "",
      "deeperQuestion": "相聚的一季由誰決定？"
    }
  },
  {
    "id": "ponder-v3-couple-082",
    "category": "Couple",
    "emoji": "💗",
    "title": "Love receipt",
    "scenario": "Gifts include a receipt of the giver's feelings while preparing them.",
    "question": "Would you read it?",
    "twist": "",
    "deeperQuestion": "What if it says “I bought this to avoid upsetting you”?",
    "zh": {
      "title": "愛的收據",
      "scenario": "每份禮物附有對方準備時的心情，可能疲倦也可能期待。",
      "question": "你會讀嗎？",
      "twist": "",
      "deeperQuestion": "如果上面寫「怕你不開心才買」呢？"
    }
  },
  {
    "id": "ponder-v3-couple-083",
    "category": "Couple",
    "emoji": "💗",
    "title": "Tail feelings",
    "scenario": "Your partner grows a tail that reveals their mood but wants to hide it.",
    "question": "Would you ask to see it?",
    "twist": "",
    "deeperQuestion": "Would you agree to grow one too?",
    "zh": {
      "title": "長尾巴戀人",
      "scenario": "伴侶長出會暴露心情的尾巴，但他想藏起來。",
      "question": "你會請他露出來嗎？",
      "twist": "",
      "deeperQuestion": "你願意也有一條嗎？"
    }
  },
  {
    "id": "ponder-v3-couple-084",
    "category": "Couple",
    "emoji": "💗",
    "title": "Half a treasure",
    "scenario": "You find treasure that can be claimed only by living apart.",
    "question": "Would you leave it behind?",
    "twist": "",
    "deeperQuestion": "What if it could solve a family problem?",
    "zh": {
      "title": "一半寶藏",
      "scenario": "你們找到寶藏，只有分開生活才能各取一半。",
      "question": "你會留下寶藏嗎？",
      "twist": "",
      "deeperQuestion": "如果錢能解決家人的困難呢？"
    }
  },
  {
    "id": "ponder-v3-couple-085",
    "category": "Couple",
    "emoji": "💗",
    "title": "Company clock",
    "scenario": "A clock adds time together by subtracting your time alone.",
    "question": "How far would you turn it?",
    "twist": "",
    "deeperQuestion": "Would you let your partner set it for you?",
    "zh": {
      "title": "陪伴時鐘",
      "scenario": "一個時鐘能增加相處時間，但會扣掉你獨處的時間。",
      "question": "你想調快多少？",
      "twist": "",
      "deeperQuestion": "你願意讓伴侶代你調嗎？"
    }
  },
  {
    "id": "ponder-v3-couple-086",
    "category": "Couple",
    "emoji": "💗",
    "title": "Unfamiliar success",
    "scenario": "Magic fulfils your partner's dream but changes them in unfamiliar ways.",
    "question": "Would you encourage it?",
    "twist": "",
    "deeperQuestion": "What would you most hope stays the same?",
    "zh": {
      "title": "陌生的成功",
      "scenario": "魔法令伴侶夢想成真，但他會變成你不熟悉的樣子。",
      "question": "你會鼓勵他用嗎？",
      "twist": "",
      "deeperQuestion": "你最希望哪一點不要改變？"
    }
  },
  {
    "id": "ponder-v3-couple-087",
    "category": "Couple",
    "emoji": "💗",
    "title": "Memory colours",
    "scenario": "The same memory looks golden to one of you and grey to the other.",
    "question": "Which version would you trust?",
    "twist": "",
    "deeperQuestion": "Would you want to change their colour?",
    "zh": {
      "title": "回憶顏色",
      "scenario": "你們看到同一段回憶，一人是金色、一人是灰色。",
      "question": "你會相信哪個版本？",
      "twist": "",
      "deeperQuestion": "你會想把對方的顏色改掉嗎？"
    }
  },
  {
    "id": "ponder-v3-couple-088",
    "category": "Couple",
    "emoji": "💗",
    "title": "Bear's choice",
    "scenario": "Your shared teddy wants to move to the forest and visit only one of you.",
    "question": "How should it choose?",
    "twist": "",
    "deeperQuestion": "Would the other person love it less?",
    "zh": {
      "title": "小熊的選擇",
      "scenario": "共同養大的小熊想搬去森林，只會探望其中一人。",
      "question": "你希望牠怎樣選？",
      "twist": "",
      "deeperQuestion": "另一人會少愛牠一點嗎？"
    }
  },
  {
    "id": "ponder-v3-couple-089",
    "category": "Couple",
    "emoji": "💗",
    "title": "Fair coin",
    "scenario": "A perfectly fair coin can settle every disagreement.",
    "question": "Would you always use it?",
    "twist": "",
    "deeperQuestion": "What would you never leave to the coin?",
    "zh": {
      "title": "公平硬幣",
      "scenario": "每次意見不同，都能用一枚絕對公平的硬幣決定。",
      "question": "你想一直用嗎？",
      "twist": "",
      "deeperQuestion": "有哪件事你不肯交給硬幣？"
    }
  },
  {
    "id": "ponder-v3-couple-090",
    "category": "Couple",
    "emoji": "💗",
    "title": "Courage potion",
    "scenario": "A potion reveals what you most want to say, but you cannot choose the tone.",
    "question": "Would you drink it on a date?",
    "twist": "",
    "deeperQuestion": "Would you warn your partner first?",
    "zh": {
      "title": "勇敢藥水",
      "scenario": "藥水能讓你說出最想說的話，卻不能選擇語氣。",
      "question": "你會在約會時喝嗎？",
      "twist": "",
      "deeperQuestion": "你希望對方先準備好聽嗎？"
    }
  },
  {
    "id": "ponder-v3-couple-091",
    "category": "Couple",
    "emoji": "💗",
    "title": "Spark compass",
    "scenario": "A compass points to whoever excites you most, sometimes not your partner.",
    "question": "Would you keep it?",
    "twist": "",
    "deeperQuestion": "Do you think you must follow it?",
    "zh": {
      "title": "心動導航",
      "scenario": "導航會指出讓你最心動的人，方向偶爾不是伴侶。",
      "question": "你還想留著嗎？",
      "twist": "",
      "deeperQuestion": "你覺得需要跟著它走嗎？"
    }
  },
  {
    "id": "ponder-v3-couple-092",
    "category": "Couple",
    "emoji": "💗",
    "title": "Small together",
    "scenario": "You can shrink into a carefree dollhouse life, but cannot hug family again.",
    "question": "Would you move?",
    "twist": "",
    "deeperQuestion": "What if you could return for one day yearly?",
    "zh": {
      "title": "一起變小",
      "scenario": "你們可以變小住進玩具屋，生活無憂，但無法再抱家人。",
      "question": "你會搬嗎？",
      "twist": "",
      "deeperQuestion": "如果每年能變回來一天呢？"
    }
  },
  {
    "id": "ponder-v3-couple-093",
    "category": "Couple",
    "emoji": "💗",
    "title": "Bedtime truth",
    "scenario": "A pillow asks one relationship question nightly and keeps you awake until answered.",
    "question": "Would you buy a pair?",
    "twist": "",
    "deeperQuestion": "What would you want it to ask first?",
    "zh": {
      "title": "睡前一句真話",
      "scenario": "枕頭每天問一個關於感情的問題，不回答就不讓你睡。",
      "question": "你會買一對嗎？",
      "twist": "",
      "deeperQuestion": "你希望它先問甚麼？"
    }
  },
  {
    "id": "ponder-v3-couple-094",
    "category": "Couple",
    "emoji": "💗",
    "title": "Love backup",
    "scenario": "You can restore today's relationship later, losing newer memories.",
    "question": "Would you make a backup?",
    "twist": "",
    "deeperQuestion": "When would restoring it be worthwhile?",
    "zh": {
      "title": "幸福備份",
      "scenario": "你能備份現在的感情，以後不順就恢復，但新回憶會消失。",
      "question": "你會存檔嗎？",
      "twist": "",
      "deeperQuestion": "甚麼情況才值得按恢復？"
    }
  },
  {
    "id": "ponder-v3-couple-095",
    "category": "Couple",
    "emoji": "💗",
    "title": "The florist",
    "scenario": "A florist can make your partner love any hobby you choose.",
    "question": "Would you choose one?",
    "twist": "",
    "deeperQuestion": "What if they choose one for you too?",
    "zh": {
      "title": "花店老闆",
      "scenario": "花店能讓伴侶愛上你挑的任何興趣。",
      "question": "你會替他挑一個嗎？",
      "twist": "",
      "deeperQuestion": "如果他也替你挑呢？"
    }
  },
  {
    "id": "ponder-v3-couple-096",
    "category": "Couple",
    "emoji": "💗",
    "title": "Silent thanks",
    "scenario": "Each thank-you becomes a star, but your partner cannot know you sent it.",
    "question": "Would you send as many?",
    "twist": "",
    "deeperQuestion": "Would you want them to learn the truth someday?",
    "zh": {
      "title": "無聲的謝謝",
      "scenario": "你每次感謝對方，他就收到一顆星，但不知道是你送的。",
      "question": "你還會送一樣多嗎？",
      "twist": "",
      "deeperQuestion": "你想有一天讓他知道嗎？"
    }
  },
  {
    "id": "ponder-v3-couple-097",
    "category": "Couple",
    "emoji": "💗",
    "title": "Same destination",
    "scenario": "Two trains reach happiness: a slow one together or fast separate ones.",
    "question": "Which would you board?",
    "twist": "",
    "deeperQuestion": "What if your partner chooses the other train?",
    "zh": {
      "title": "同路終點",
      "scenario": "兩班車都到幸福，一班一起慢慢走，一班各自很快到。",
      "question": "你會上哪班？",
      "twist": "",
      "deeperQuestion": "如果對方選了另一班呢？"
    }
  },
  {
    "id": "ponder-v3-couple-098",
    "category": "Couple",
    "emoji": "💗",
    "title": "Last sweet",
    "scenario": "The last magic sweet lets one of you fully understand the other.",
    "question": "Who should eat it?",
    "twist": "",
    "deeperQuestion": "Does the person understood owe anything back?",
    "zh": {
      "title": "最後一顆糖",
      "scenario": "最後一顆魔法糖能讓一人完全理解另一人。",
      "question": "你想誰吃？",
      "twist": "",
      "deeperQuestion": "被理解的人需要回報甚麼嗎？"
    }
  },
  {
    "id": "ponder-v3-couple-099",
    "category": "Couple",
    "emoji": "💗",
    "title": "Forgotten promise",
    "scenario": "You can keep every promise but forget whom each fulfilled promise was for.",
    "question": "Would you agree?",
    "twist": "",
    "deeperQuestion": "Would your partner still feel loved?",
    "zh": {
      "title": "會忘的承諾",
      "scenario": "你能保證永不失約，但每完成一個承諾就忘記是為誰做的。",
      "question": "你願意嗎？",
      "twist": "",
      "deeperQuestion": "你覺得對方還會感受到愛嗎？"
    }
  },
  {
    "id": "ponder-v3-couple-100",
    "category": "Couple",
    "emoji": "💗",
    "title": "Choose tomorrow",
    "scenario": "Each morning you choose love again without relying on yesterday's answer.",
    "question": "Would you feel scared or hopeful?",
    "twist": "",
    "deeperQuestion": "Would you want to hear their answer first?",
    "zh": {
      "title": "明天再選",
      "scenario": "你們每天醒來都要重新選擇是否相愛，不能靠昨天的答案。",
      "question": "你會害怕還是期待？",
      "twist": "",
      "deeperQuestion": "你想先知道對方的答案嗎？"
    }
  },
  {
    "id": "ponder-v3-family-001",
    "category": "Family",
    "emoji": "🏠",
    "title": "Family tree",
    "scenario": "A family tree grows a leaf for every rule, until it blocks the sky.",
    "question": "Which rule would you remove?",
    "twist": "",
    "deeperQuestion": "Who should be allowed to remove leaves?",
    "zh": {
      "title": "家族小樹",
      "scenario": "家族樹每多一條家規就多一片葉，葉太密會遮住天空。",
      "question": "你會先摘掉哪條規則？",
      "twist": "",
      "deeperQuestion": "誰應該有權摘葉？"
    }
  },
  {
    "id": "ponder-v3-family-002",
    "category": "Family",
    "emoji": "🏠",
    "title": "Grandma at eighteen",
    "scenario": "Grandma can be eighteen for a year and chase her own dreams.",
    "question": "Would you want her to stay or go?",
    "twist": "",
    "deeperQuestion": "Would you join her or let her go alone?",
    "zh": {
      "title": "奶奶的十八歲",
      "scenario": "奶奶能變回十八歲一年，但會去追自己的夢想。",
      "question": "你希望她留下還是出發？",
      "twist": "",
      "deeperQuestion": "你會想陪她去，還是讓她自己玩？"
    }
  },
  {
    "id": "ponder-v3-family-003",
    "category": "Family",
    "emoji": "🏠",
    "title": "An extra seat",
    "scenario": "Your table gains a seat for someone no longer in your life.",
    "question": "Whom would you invite?",
    "twist": "",
    "deeperQuestion": "What if another relative does not want them there?",
    "zh": {
      "title": "飯桌空位",
      "scenario": "飯桌每晚多一個空位，能請一位已離開生活的人回來吃飯。",
      "question": "你想邀誰？",
      "twist": "",
      "deeperQuestion": "其他家人不想見他時怎麼辦？"
    }
  },
  {
    "id": "ponder-v3-family-004",
    "category": "Family",
    "emoji": "🏠",
    "title": "Chore fairy",
    "scenario": "A fairy does every chore, provided nobody says thank you.",
    "question": "Would you hire it?",
    "twist": "",
    "deeperQuestion": "What could your family use instead?",
    "zh": {
      "title": "家務精靈",
      "scenario": "精靈包辦所有家務，條件是全家不能說謝謝。",
      "question": "你會請牠嗎？",
      "twist": "",
      "deeperQuestion": "你們會用甚麼代替那句話？"
    }
  },
  {
    "id": "ponder-v3-family-005",
    "category": "Family",
    "emoji": "🏠",
    "title": "Memory tins",
    "scenario": "You can take three tins of family memories when moving; the rest fade.",
    "question": "What would you keep?",
    "twist": "",
    "deeperQuestion": "Should everyone get a tin of their own?",
    "zh": {
      "title": "回憶罐頭",
      "scenario": "搬家只能帶三罐家庭回憶，其餘會淡去。",
      "question": "你會保留哪三種？",
      "twist": "",
      "deeperQuestion": "每人都應該有一罐嗎？"
    }
  },
  {
    "id": "ponder-v3-family-006",
    "category": "Family",
    "emoji": "🏠",
    "title": "Role Sunday",
    "scenario": "Adults and children swap decision-making power every Sunday.",
    "question": "Would you try it?",
    "twist": "",
    "deeperQuestion": "Which decision should not be swapped?",
    "zh": {
      "title": "角色星期天",
      "scenario": "每個星期天，家中大人和小孩交換決定權。",
      "question": "你想試嗎？",
      "twist": "",
      "deeperQuestion": "有哪項決定不適合交換？"
    }
  },
  {
    "id": "ponder-v3-family-007",
    "category": "Family",
    "emoji": "🏠",
    "title": "Talking house",
    "scenario": "Your ancestral house wants to retire and travel as reclaimed wood.",
    "question": "Would you respect its wish?",
    "twist": "",
    "deeperQuestion": "Which part would you most want to keep?",
    "zh": {
      "title": "會說話的祖屋",
      "scenario": "祖屋說它想退休，被拆成木材去旅行。",
      "question": "你會尊重它的願望嗎？",
      "twist": "",
      "deeperQuestion": "你最想留下它哪一部分？"
    }
  },
  {
    "id": "ponder-v3-family-008",
    "category": "Family",
    "emoji": "🏠",
    "title": "Happy family chart",
    "scenario": "A family chart records acts of happiness, not careers or grades.",
    "question": "Would you want one?",
    "twist": "",
    "deeperQuestion": "How would a quiet relative be remembered?",
    "zh": {
      "title": "幸福家譜",
      "scenario": "家譜只記下讓別人幸福的事，不記職業和成績。",
      "question": "你想用這種家譜嗎？",
      "twist": "",
      "deeperQuestion": "很少說話的家人會怎樣被記住？"
    }
  },
  {
    "id": "ponder-v3-family-009",
    "category": "Family",
    "emoji": "🏠",
    "title": "Sweet machine",
    "scenario": "A machine gives everyone equal sweets, including people who dislike them.",
    "question": "Is that fair?",
    "twist": "",
    "deeperQuestion": "How could someone ask for more?",
    "zh": {
      "title": "分糖機器",
      "scenario": "機器把糖平均分給全家，連不愛吃糖的人也有一份。",
      "question": "你覺得這樣公平嗎？",
      "twist": "",
      "deeperQuestion": "想多吃的人可以怎樣換？"
    }
  },
  {
    "id": "ponder-v3-family-010",
    "category": "Family",
    "emoji": "🏠",
    "title": "Obedient pup",
    "scenario": "A pup obeys every house rule but never chooses its own games.",
    "question": "Would you want it naughtier?",
    "twist": "",
    "deeperQuestion": "Which rule could it break first?",
    "zh": {
      "title": "聽話小狗",
      "scenario": "小狗從不違反家規，卻也不會自己想玩甚麼。",
      "question": "你希望牠變得調皮一點嗎？",
      "twist": "",
      "deeperQuestion": "牠第一個打破的規則可以是甚麼？"
    }
  },
  {
    "id": "ponder-v3-family-011",
    "category": "Family",
    "emoji": "🏠",
    "title": "Table time machine",
    "scenario": "Your table can take everyone to dinner in one past year.",
    "question": "Which year would you choose?",
    "twist": "",
    "deeperQuestion": "Should relatives not yet born come too?",
    "zh": {
      "title": "餐桌時光機",
      "scenario": "餐桌能帶全家回到同一年的晚餐，但只能選一年。",
      "question": "你想回哪年？",
      "twist": "",
      "deeperQuestion": "還沒出生的人應該一起去嗎？"
    }
  },
  {
    "id": "ponder-v3-family-012",
    "category": "Family",
    "emoji": "🏠",
    "title": "Heirloom speaks",
    "scenario": "An heirloom asks to go to whoever treasures it most, not necessarily the eldest.",
    "question": "Would you listen?",
    "twist": "",
    "deeperQuestion": "How would you tell care from wanting ownership?",
    "zh": {
      "title": "傳家寶開口",
      "scenario": "傳家寶說它想送給最珍惜它的人，不一定是長子。",
      "question": "你會聽它的嗎？",
      "twist": "",
      "deeperQuestion": "怎樣才算珍惜，不只是想擁有？"
    }
  },
  {
    "id": "ponder-v3-family-013",
    "category": "Family",
    "emoji": "🏠",
    "title": "Child's kingdom",
    "scenario": "A child finds a kingdom adults cannot enter or monitor.",
    "question": "Would you let them visit?",
    "twist": "",
    "deeperQuestion": "What signal would you agree on for coming home?",
    "zh": {
      "title": "小孩的王國",
      "scenario": "小孩發現一個只有孩子能進的王國，大人無法監看。",
      "question": "你會讓他去玩嗎？",
      "twist": "",
      "deeperQuestion": "你希望約定甚麼回家訊號？"
    }
  },
  {
    "id": "ponder-v3-family-014",
    "category": "Family",
    "emoji": "🏠",
    "title": "Birthday box",
    "scenario": "A birthday box grants only wishes the whole family agrees on.",
    "question": "Would you want it?",
    "twist": "",
    "deeperQuestion": "What if the same person's wishes keep losing?",
    "zh": {
      "title": "生日願望箱",
      "scenario": "生日願望箱只實現全家都同意的願望。",
      "question": "你想要這個箱子嗎？",
      "twist": "",
      "deeperQuestion": "如果總是同一人的願望被否決呢？"
    }
  },
  {
    "id": "ponder-v3-family-015",
    "category": "Family",
    "emoji": "🏠",
    "title": "Dream farm",
    "scenario": "Family dreams grow as plants, some very slowly.",
    "question": "Which would you tend first?",
    "twist": "",
    "deeperQuestion": "Would you pull out one that never bears fruit?",
    "zh": {
      "title": "夢想農場",
      "scenario": "家人種下的夢想會長成植物，有些長得很慢。",
      "question": "你會先照顧哪棵？",
      "twist": "",
      "deeperQuestion": "你會拔掉一直不結果的那棵嗎？"
    }
  },
  {
    "id": "ponder-v3-family-016",
    "category": "Family",
    "emoji": "🏠",
    "title": "Family cue cards",
    "scenario": "At dinner, a card names the role your family usually expects you to play.",
    "question": "Would you act it out?",
    "twist": "",
    "deeperQuestion": "Whose card would you like to swap for a while?",
    "zh": {
      "title": "家人的字幕卡",
      "scenario": "全家吃飯時，每人面前出現一句大家習慣叫他扮演的角色。",
      "question": "你會照著演嗎？",
      "twist": "",
      "deeperQuestion": "你想跟哪位家人交換卡片試試？"
    }
  },
  {
    "id": "ponder-v3-family-017",
    "category": "Family",
    "emoji": "🏠",
    "title": "Dad's secret door",
    "scenario": "Dad has a door to his own world and has never invited anyone in.",
    "question": "Would you knock?",
    "twist": "",
    "deeperQuestion": "Could you accept it if he wants privacy?",
    "zh": {
      "title": "爸爸的秘密門",
      "scenario": "爸爸有一道只通往他自己世界的門，從未邀人進去。",
      "question": "你會敲門嗎？",
      "twist": "",
      "deeperQuestion": "他說想獨處時，你能接受嗎？"
    }
  },
  {
    "id": "ponder-v3-family-018",
    "category": "Family",
    "emoji": "🏠",
    "title": "Time allowance",
    "scenario": "Allowances become time: play for children, rest for adults.",
    "question": "How would you divide it?",
    "twist": "",
    "deeperQuestion": "Should people doing chores receive more?",
    "zh": {
      "title": "時間零用錢",
      "scenario": "零用錢變成時間，小孩可以買遊戲時間，大人可以買休息。",
      "question": "你會怎樣分？",
      "twist": "",
      "deeperQuestion": "做家務的人應該多一點嗎？"
    }
  },
  {
    "id": "ponder-v3-family-019",
    "category": "Family",
    "emoji": "🏠",
    "title": "Family weather",
    "scenario": "Your home follows its saddest person's weather.",
    "question": "Would you find them first or turn on the heating?",
    "twist": "",
    "deeperQuestion": "How would you help if they do not want to talk?",
    "zh": {
      "title": "家族天氣站",
      "scenario": "家裡天氣跟著最難過的人變化。",
      "question": "下雨時，你會先找他還是先開暖氣？",
      "twist": "",
      "deeperQuestion": "他不想說話，你會怎樣陪？"
    }
  },
  {
    "id": "ponder-v3-family-020",
    "category": "Family",
    "emoji": "🏠",
    "title": "Age-free ticket",
    "scenario": "An older relative can start school anew, forgetting their age.",
    "question": "Would you support using family savings?",
    "twist": "",
    "deeperQuestion": "What if the course will never earn money?",
    "zh": {
      "title": "長輩忘年票",
      "scenario": "長輩可以忘記年齡，重新報名任何學校。",
      "question": "你會支持他花家中積蓄嗎？",
      "twist": "",
      "deeperQuestion": "如果學的東西完全賺不到錢呢？"
    }
  },
  {
    "id": "ponder-v3-family-021",
    "category": "Family",
    "emoji": "🏠",
    "title": "Money tree",
    "scenario": "A family money tree grows one banknote daily, whoever waters it.",
    "question": "Who should get it?",
    "twist": "",
    "deeperQuestion": "Should its caretaker have first claim?",
    "zh": {
      "title": "共享錢樹",
      "scenario": "家中錢樹每天只長一張鈔票，誰澆水都一樣。",
      "question": "你會把錢給誰？",
      "twist": "",
      "deeperQuestion": "照顧樹的人應該先拿嗎？"
    }
  },
  {
    "id": "ponder-v3-family-022",
    "category": "Family",
    "emoji": "🏠",
    "title": "Home magnet",
    "scenario": "A magnet brings distant relatives home but disrupts their plans.",
    "question": "Would you use it?",
    "twist": "",
    "deeperQuestion": "What if they keep saying they are busy?",
    "zh": {
      "title": "回家磁鐵",
      "scenario": "磁鐵能把搬遠的家人拉回身邊，但會打亂他的計劃。",
      "question": "你會用嗎？",
      "twist": "",
      "deeperQuestion": "如果他最近一直說沒空呢？"
    }
  },
  {
    "id": "ponder-v3-family-023",
    "category": "Family",
    "emoji": "🏠",
    "title": "Argument museum",
    "scenario": "Every family argument becomes a replayable museum exhibit.",
    "question": "Would you keep the museum?",
    "twist": "",
    "deeperQuestion": "Who should be allowed to close an exhibit?",
    "zh": {
      "title": "吵架博物館",
      "scenario": "家裡每場吵架都會變成展品，大家能重看。",
      "question": "你會保留這間博物館嗎？",
      "twist": "",
      "deeperQuestion": "誰有權關掉某一場？"
    }
  },
  {
    "id": "ponder-v3-family-024",
    "category": "Family",
    "emoji": "🏠",
    "title": "Different report card",
    "scenario": "A school grades only helping others, not exams.",
    "question": "Would you send a child there?",
    "twist": "",
    "deeperQuestion": "Could a child choose a low grade by saying no?",
    "zh": {
      "title": "另一種成績表",
      "scenario": "學校只評「有沒有幫助別人」，不評考試。",
      "question": "你希望孩子讀嗎？",
      "twist": "",
      "deeperQuestion": "孩子不想幫忙時，可以拿低分嗎？"
    }
  },
  {
    "id": "ponder-v3-family-025",
    "category": "Family",
    "emoji": "🏠",
    "title": "Cat's vote",
    "scenario": "Your cat learns to speak and asks for a family vote.",
    "question": "Would you agree?",
    "twist": "",
    "deeperQuestion": "Could it veto adopting another cat?",
    "zh": {
      "title": "家貓投票",
      "scenario": "家貓能說話後，要求家庭投票也有牠一票。",
      "question": "你會答應嗎？",
      "twist": "",
      "deeperQuestion": "關於要不要再養貓，牠能否決嗎？"
    }
  },
  {
    "id": "ponder-v3-family-026",
    "category": "Family",
    "emoji": "🏠",
    "title": "Forever little",
    "scenario": "A doll keeps a child at their cutest age, stopping growth.",
    "question": "Would you keep it?",
    "twist": "",
    "deeperQuestion": "What if the child wants to stay little?",
    "zh": {
      "title": "永遠幼小",
      "scenario": "玩偶能讓孩子永遠保持最可愛的年紀，但不再長大。",
      "question": "你會留下玩偶嗎？",
      "twist": "",
      "deeperQuestion": "如果孩子自己不想長大呢？"
    }
  },
  {
    "id": "ponder-v3-family-027",
    "category": "Family",
    "emoji": "🏠",
    "title": "Family swap day",
    "scenario": "Everyone can spend a day in a different family.",
    "question": "Would you try it?",
    "twist": "",
    "deeperQuestion": "What new habit would you hope to bring home?",
    "zh": {
      "title": "親情交換日",
      "scenario": "你能到另一個家庭住一天，自己的家人也會去別家。",
      "question": "你想試嗎？",
      "twist": "",
      "deeperQuestion": "你最想帶回哪種新習慣？"
    }
  },
  {
    "id": "ponder-v3-family-028",
    "category": "Family",
    "emoji": "🏠",
    "title": "Family power",
    "scenario": "Your family may heal minor illnesses, teleport, or understand animals.",
    "question": "Which gets your vote?",
    "twist": "",
    "deeperQuestion": "Would you change your vote for one relative?",
    "zh": {
      "title": "家族超能力",
      "scenario": "全家只能選一種超能力：治小病、瞬間移動或聽懂動物。",
      "question": "你會投哪個？",
      "twist": "",
      "deeperQuestion": "你會為某位家人改票嗎？"
    }
  },
  {
    "id": "ponder-v3-family-029",
    "category": "Family",
    "emoji": "🏠",
    "title": "Walking table",
    "scenario": "A table moves weekly to the home most people want to gather in.",
    "question": "Would you try to keep it?",
    "twist": "",
    "deeperQuestion": "What if the usual cook wants a break?",
    "zh": {
      "title": "會走的餐桌",
      "scenario": "餐桌只會停在有最多人想聚的家，每週自動搬走。",
      "question": "你想讓它留下嗎？",
      "twist": "",
      "deeperQuestion": "總是煮飯的人想休息怎麼辦？"
    }
  },
  {
    "id": "ponder-v3-family-030",
    "category": "Family",
    "emoji": "🏠",
    "title": "Sibling shadow",
    "scenario": "Your shadow reveals kind things siblings have done for you.",
    "question": "Would you want to see them?",
    "twist": "",
    "deeperQuestion": "Would knowing make you feel indebted?",
    "zh": {
      "title": "兄弟姊妹影子",
      "scenario": "你的影子會顯示手足為你做過的好事。",
      "question": "你想看見嗎？",
      "twist": "",
      "deeperQuestion": "知道後，你會覺得欠了他嗎？"
    }
  },
  {
    "id": "ponder-v3-family-031",
    "category": "Family",
    "emoji": "🏠",
    "title": "Roof stars",
    "scenario": "Each relative may hang one life choice as a star above the home.",
    "question": "What would yours be?",
    "twist": "",
    "deeperQuestion": "Could a failed choice deserve a star?",
    "zh": {
      "title": "屋頂星星",
      "scenario": "每人只能把一個人生選擇掛成屋頂的星。",
      "question": "你希望掛上哪件事？",
      "twist": "",
      "deeperQuestion": "失敗的選擇也能掛嗎？"
    }
  },
  {
    "id": "ponder-v3-family-032",
    "category": "Family",
    "emoji": "🏠",
    "title": "Safety bubble",
    "scenario": "A bubble protects a child from harm but prevents climbing and adventures.",
    "question": "Would you use it?",
    "twist": "",
    "deeperQuestion": "Could the child decide when to step out?",
    "zh": {
      "title": "安全泡泡",
      "scenario": "泡泡能保護孩子不受傷，但也不准他爬樹和冒險。",
      "question": "你會讓他住裡面嗎？",
      "twist": "",
      "deeperQuestion": "你會讓孩子自己決定何時走出來嗎？"
    }
  },
  {
    "id": "ponder-v3-family-033",
    "category": "Family",
    "emoji": "🏠",
    "title": "Crying keepsakes",
    "scenario": "Discarded keepsakes cry, but keeping everything fills the house.",
    "question": "How would you choose?",
    "twist": "",
    "deeperQuestion": "Would you make space for someone else's keepsakes?",
    "zh": {
      "title": "會哭的舊物",
      "scenario": "舊物被丟掉會哭，但留下會把家塞滿。",
      "question": "你會怎樣決定去留？",
      "twist": "",
      "deeperQuestion": "你願意替別人的舊物騰位置嗎？"
    }
  },
  {
    "id": "ponder-v3-family-034",
    "category": "Family",
    "emoji": "🏠",
    "title": "Mum's other life",
    "scenario": "A mirror shows Mum's happy life without children.",
    "question": "Would you invite her to watch?",
    "twist": "",
    "deeperQuestion": "What if she wants to keep watching?",
    "zh": {
      "title": "媽媽的平行人生",
      "scenario": "鏡子能看見媽媽沒有生孩子的人生，她似乎過得很快樂。",
      "question": "你想邀她一起看嗎？",
      "twist": "",
      "deeperQuestion": "如果她很想多看一會呢？"
    }
  },
  {
    "id": "ponder-v3-family-035",
    "category": "Family",
    "emoji": "🏠",
    "title": "No good-child week",
    "scenario": "A fairy gives everyone a week off being considerate.",
    "question": "Who should go first?",
    "twist": "",
    "deeperQuestion": "Should everyone else handle the consequences?",
    "zh": {
      "title": "一週不用懂事",
      "scenario": "精靈讓每人有一週不用顧全大局。",
      "question": "你希望哪位家人先用？",
      "twist": "",
      "deeperQuestion": "其他人需要替他收拾後果嗎？"
    }
  },
  {
    "id": "ponder-v3-family-036",
    "category": "Family",
    "emoji": "🏠",
    "title": "Make-up clock",
    "scenario": "A bell restores family harmony without solving the problem.",
    "question": "Would you ring it daily?",
    "twist": "",
    "deeperQuestion": "After what argument would you refuse?",
    "zh": {
      "title": "自動和好鐘",
      "scenario": "鐘聲一響全家就和好，卻沒人解決問題。",
      "question": "你會每天敲嗎？",
      "twist": "",
      "deeperQuestion": "你會在哪次爭執後拒絕敲鐘？"
    }
  },
  {
    "id": "ponder-v3-family-037",
    "category": "Family",
    "emoji": "🏠",
    "title": "Achievement cookies",
    "scenario": "Achievements become cookies the family can share.",
    "question": "Would you ever keep yours alone?",
    "twist": "",
    "deeperQuestion": "Would quietly surviving difficulty earn a cookie?",
    "zh": {
      "title": "成就餅乾",
      "scenario": "每個成就都變成餅乾，家人可以分享吃掉。",
      "question": "你會想留自己的不分嗎？",
      "twist": "",
      "deeperQuestion": "默默撐過難關能算一塊嗎？"
    }
  },
  {
    "id": "ponder-v3-family-038",
    "category": "Family",
    "emoji": "🏠",
    "title": "Rest coupon",
    "scenario": "One coupon frees a relative from caring for others for a week.",
    "question": "Who gets it?",
    "twist": "",
    "deeperQuestion": "What if the most tired person refuses it?",
    "zh": {
      "title": "家庭休息券",
      "scenario": "全家只有一張休息券，持有人一星期不用照顧別人。",
      "question": "你會給誰？",
      "twist": "",
      "deeperQuestion": "最累的人不肯拿，你會怎樣？"
    }
  },
  {
    "id": "ponder-v3-family-039",
    "category": "Family",
    "emoji": "🏠",
    "title": "Dog chooses",
    "scenario": "The family dog gains a choice and wants to live with a sibling who moved out.",
    "question": "Would you let it?",
    "twist": "",
    "deeperQuestion": "Does who paid for food matter?",
    "zh": {
      "title": "狗狗選主人",
      "scenario": "家犬得到選擇住處的權利，牠想跟搬走的手足住。",
      "question": "你會讓牠去嗎？",
      "twist": "",
      "deeperQuestion": "誰付過最多飼料費重要嗎？"
    }
  },
  {
    "id": "ponder-v3-family-040",
    "category": "Family",
    "emoji": "🏠",
    "title": "Rule translator",
    "scenario": "A machine translates each house rule into an adult's worry.",
    "question": "Which would you translate?",
    "twist": "",
    "deeperQuestion": "Must you obey once you understand the worry?",
    "zh": {
      "title": "家規翻譯機",
      "scenario": "每條家規都能翻譯成大人的擔心。",
      "question": "你最想翻哪一條？",
      "twist": "",
      "deeperQuestion": "知道擔心後，就一定要守嗎？"
    }
  },
  {
    "id": "ponder-v3-family-041",
    "category": "Family",
    "emoji": "🏠",
    "title": "Giving spring",
    "scenario": "A spring makes you happy to care for family without wanting anything back.",
    "question": "Would you drink?",
    "twist": "",
    "deeperQuestion": "Would you offer it to the busiest carer?",
    "zh": {
      "title": "不求回報泉",
      "scenario": "泉水讓你樂於照顧家人，但再也不希望得到回報。",
      "question": "你會喝嗎？",
      "twist": "",
      "deeperQuestion": "你會勸最辛苦的家人喝嗎？"
    }
  },
  {
    "id": "ponder-v3-family-042",
    "category": "Family",
    "emoji": "🏠",
    "title": "Memory soup",
    "scenario": "Soup recalls one shared memory, tasting different to everyone.",
    "question": "Which memory would you cook?",
    "twist": "",
    "deeperQuestion": "Would you ask why if someone finds it bitter?",
    "zh": {
      "title": "記得的味道",
      "scenario": "湯能讓全家想起同一段回憶，但每人味道不同。",
      "question": "你想煮哪段？",
      "twist": "",
      "deeperQuestion": "有人覺得苦，你會想知道原因嗎？"
    }
  },
  {
    "id": "ponder-v3-family-043",
    "category": "Family",
    "emoji": "🏠",
    "title": "Relative radar",
    "scenario": "A radar lights up people who truly care, possibly leaving some relatives dark.",
    "question": "Would you turn it on?",
    "twist": "",
    "deeperQuestion": "Would it change whom you keep seeing?",
    "zh": {
      "title": "親戚雷達",
      "scenario": "雷達能找出真正關心你的人，可能有些親戚不會亮燈。",
      "question": "你會開嗎？",
      "twist": "",
      "deeperQuestion": "你會因此改變來往嗎？"
    }
  },
  {
    "id": "ponder-v3-family-044",
    "category": "Family",
    "emoji": "🏠",
    "title": "Shared room",
    "scenario": "A magic room takes any form but serves one relative daily.",
    "question": "How would you schedule it?",
    "twist": "",
    "deeperQuestion": "Should birthdays always come first?",
    "zh": {
      "title": "共享房間",
      "scenario": "魔法房間能變成任何模樣，但每天只能滿足一位家人。",
      "question": "你會怎樣排次序？",
      "twist": "",
      "deeperQuestion": "生日的人一定優先嗎？"
    }
  },
  {
    "id": "ponder-v3-family-045",
    "category": "Family",
    "emoji": "🏠",
    "title": "Memory substitute",
    "scenario": "A robot chats with an older relative and remembers every family story.",
    "question": "Can it replace your visits?",
    "twist": "",
    "deeperQuestion": "What if the relative prefers the robot?",
    "zh": {
      "title": "回憶代班",
      "scenario": "機器人能陪長輩聊天，還記得所有家事。",
      "question": "它能代替你探望嗎？",
      "twist": "",
      "deeperQuestion": "如果長輩更喜歡跟它聊呢？"
    }
  },
  {
    "id": "ponder-v3-family-046",
    "category": "Family",
    "emoji": "🏠",
    "title": "Elder pupil",
    "scenario": "You can teach an elder a skill, but they fear mistakes like a child.",
    "question": "How would you teach?",
    "twist": "",
    "deeperQuestion": "Would you wish adults had taught you that way?",
    "zh": {
      "title": "長輩小學生",
      "scenario": "你能教長輩一項新技能，但他會像小學生一樣怕做錯。",
      "question": "你會怎樣教？",
      "twist": "",
      "deeperQuestion": "你會希望以前的大人也這樣教你嗎？"
    }
  },
  {
    "id": "ponder-v3-family-047",
    "category": "Family",
    "emoji": "🏠",
    "title": "Photo blank",
    "scenario": "A photo can add an absent relative by removing someone else.",
    "question": "Would you change it?",
    "twist": "",
    "deeperQuestion": "What if the person removed agrees?",
    "zh": {
      "title": "相片空白處",
      "scenario": "一張合照能補上當天缺席的人，但會刪走另一人的位置。",
      "question": "你會改嗎？",
      "twist": "",
      "deeperQuestion": "如果被刪的人願意呢？"
    }
  },
  {
    "id": "ponder-v3-family-048",
    "category": "Family",
    "emoji": "🏠",
    "title": "Family secret box",
    "scenario": "A box holds every secret of the previous generation; opening reveals them to everyone.",
    "question": "Would you open it?",
    "twist": "",
    "deeperQuestion": "Would it matter if those people were still alive?",
    "zh": {
      "title": "家族秘密箱",
      "scenario": "箱子裝著上一代所有秘密，打開後全家都會知道。",
      "question": "你想開嗎？",
      "twist": "",
      "deeperQuestion": "當事人還在世會改變你的選擇嗎？"
    }
  },
  {
    "id": "ponder-v3-family-049",
    "category": "Family",
    "emoji": "🏠",
    "title": "Love portions",
    "scenario": "Love can be weighed, and your family's portions differ.",
    "question": "Would you demand equal amounts?",
    "twist": "",
    "deeperQuestion": "Could someone in difficulty receive extra?",
    "zh": {
      "title": "愛的份量",
      "scenario": "愛能秤重，你發現家人給每人的份量不同。",
      "question": "你想要求一樣多嗎？",
      "twist": "",
      "deeperQuestion": "有人正遇上難關，可以多拿嗎？"
    }
  },
  {
    "id": "ponder-v3-family-050",
    "category": "Family",
    "emoji": "🏠",
    "title": "Ageless pet",
    "scenario": "A pet can live a century if every generation cares for it.",
    "question": "Would you promise for future generations?",
    "twist": "",
    "deeperQuestion": "What if the next generation says no?",
    "zh": {
      "title": "不老寵物",
      "scenario": "寵物能陪全家一百年，但每代人都要答應照顧牠。",
      "question": "你會替下一代答應嗎？",
      "twist": "",
      "deeperQuestion": "下一代不想養時怎麼辦？"
    }
  },
  {
    "id": "ponder-v3-family-051",
    "category": "Family",
    "emoji": "🏠",
    "title": "New surname",
    "scenario": "Your family can choose a new surname for what it hopes to become.",
    "question": "What would you suggest?",
    "twist": "",
    "deeperQuestion": "How would you include someone keeping the old name?",
    "zh": {
      "title": "新姓氏",
      "scenario": "全家可以一起選一個新姓氏，代表想成為怎樣的一家人。",
      "question": "你會提甚麼？",
      "twist": "",
      "deeperQuestion": "有人想保留舊姓，你會怎樣安排？"
    }
  },
  {
    "id": "ponder-v3-family-052",
    "category": "Family",
    "emoji": "🏠",
    "title": "Cloud move",
    "scenario": "Your family can live free on a cloud, but one relative fears heights.",
    "question": "Would you decline?",
    "twist": "",
    "deeperQuestion": "What if you could build a path to the ground?",
    "zh": {
      "title": "搬去雲上",
      "scenario": "全家能免費搬到雲上，但一位怕高的家人不想去。",
      "question": "你會放棄嗎？",
      "twist": "",
      "deeperQuestion": "如果能為他造一條地面通道呢？"
    }
  },
  {
    "id": "ponder-v3-family-053",
    "category": "Family",
    "emoji": "🏠",
    "title": "Praise radio",
    "scenario": "A radio plays only praise your relatives say behind your back.",
    "question": "Would you listen daily?",
    "twist": "",
    "deeperQuestion": "How would you feel on a silent day?",
    "zh": {
      "title": "只聽好話",
      "scenario": "收音機只播放家人背後稱讚你的話。",
      "question": "你會想每天聽嗎？",
      "twist": "",
      "deeperQuestion": "沒有聲音的一天，你會怎樣想？"
    }
  },
  {
    "id": "ponder-v3-family-054",
    "category": "Family",
    "emoji": "🏠",
    "title": "Parent doubles",
    "scenario": "Parents can send doubles to each child, but never gain their memories.",
    "question": "Does it count as being there?",
    "twist": "",
    "deeperQuestion": "Would it matter if the child knows?",
    "zh": {
      "title": "分身父母",
      "scenario": "父母可以分身陪每個孩子，但分身的回憶不會傳回本尊。",
      "question": "這算陪伴嗎？",
      "twist": "",
      "deeperQuestion": "孩子知道是分身會有不同嗎？"
    }
  },
  {
    "id": "ponder-v3-family-055",
    "category": "Family",
    "emoji": "🏠",
    "title": "Wish queue",
    "scenario": "Family wishes come true in a queue with children first.",
    "question": "Is that reasonable?",
    "twist": "",
    "deeperQuestion": "Could a lifelong carer move ahead?",
    "zh": {
      "title": "願望輪候室",
      "scenario": "家中願望要輪流成真，小孩的排在大人前面。",
      "question": "你覺得合理嗎？",
      "twist": "",
      "deeperQuestion": "一直照顧人的大人可以插隊嗎？"
    }
  },
  {
    "id": "ponder-v3-family-056",
    "category": "Family",
    "emoji": "🏠",
    "title": "Courage heirloom",
    "scenario": "An heirloom passes on courage along with the previous generation's fears.",
    "question": "Would you pass it down?",
    "twist": "",
    "deeperQuestion": "Which fear would you explain first?",
    "zh": {
      "title": "勇敢傳家寶",
      "scenario": "傳家寶能傳下勇氣，也會傳下上一代的恐懼。",
      "question": "你會交給孩子嗎？",
      "twist": "",
      "deeperQuestion": "你想先告訴他哪個恐懼？"
    }
  },
  {
    "id": "ponder-v3-family-057",
    "category": "Family",
    "emoji": "🏠",
    "title": "Parents' childhood",
    "scenario": "You can spend a day with your parents as children without revealing yourself.",
    "question": "What would you bring?",
    "twist": "",
    "deeperQuestion": "Would you try to change one experience?",
    "zh": {
      "title": "父母的童年",
      "scenario": "你能陪年幼的父母玩一天，卻不能告訴他你是誰。",
      "question": "你會帶甚麼去？",
      "twist": "",
      "deeperQuestion": "你會想改變他們的一段經歷嗎？"
    }
  },
  {
    "id": "ponder-v3-family-058",
    "category": "Family",
    "emoji": "🏠",
    "title": "No-comparison mirror",
    "scenario": "A mirror shows differences but never who is better.",
    "question": "Would you put it at home?",
    "twist": "",
    "deeperQuestion": "What would you want your family to notice?",
    "zh": {
      "title": "不用比較的鏡",
      "scenario": "鏡子看不見誰比誰優秀，只看見每人的不同。",
      "question": "你想放在家中嗎？",
      "twist": "",
      "deeperQuestion": "你最希望家人從鏡中看見甚麼？"
    }
  },
  {
    "id": "ponder-v3-family-059",
    "category": "Family",
    "emoji": "🏠",
    "title": "Choice voucher",
    "scenario": "Everyone may make one life decision for another relative.",
    "question": "Would you use your voucher?",
    "twist": "",
    "deeperQuestion": "Would you give the choice back to them?",
    "zh": {
      "title": "家人的選擇券",
      "scenario": "每人能替另一位家人作一個人生決定。",
      "question": "你會使用自己的券嗎？",
      "twist": "",
      "deeperQuestion": "你想把券交還給對方嗎？"
    }
  },
  {
    "id": "ponder-v3-family-060",
    "category": "Family",
    "emoji": "🏠",
    "title": "Runaway cake",
    "scenario": "A traditional cake adds chocolate because it dislikes being predictable.",
    "question": "Would you serve it at the reunion dinner?",
    "twist": "",
    "deeperQuestion": "Who gets to change a family recipe?",
    "zh": {
      "title": "會逃跑的年糕",
      "scenario": "祖傳年糕不想年年同一味，偷偷加了巧克力。",
      "question": "你會讓它留在年夜飯嗎？",
      "twist": "",
      "deeperQuestion": "誰有權改祖傳食譜？"
    }
  },
  {
    "id": "ponder-v3-family-061",
    "category": "Family",
    "emoji": "🏠",
    "title": "Home password",
    "scenario": "Your door opens only to an honest account of today's feelings.",
    "question": "Would you install it?",
    "twist": "",
    "deeperQuestion": "Could someone who wants privacy have a spare key?",
    "zh": {
      "title": "家門密碼",
      "scenario": "家門密碼是「今天最真實的心情」，答錯就進不了。",
      "question": "你想換這種門嗎？",
      "twist": "",
      "deeperQuestion": "不想說的人可以有備用鑰匙嗎？"
    }
  },
  {
    "id": "ponder-v3-family-062",
    "category": "Family",
    "emoji": "🏠",
    "title": "Happiness foster",
    "scenario": "A child can join an always-happy magic home but forget the old family.",
    "question": "Would you send them?",
    "twist": "",
    "deeperQuestion": "Should the child know the cost?",
    "zh": {
      "title": "幸福寄養",
      "scenario": "一個孩子能去永遠幸福的魔法家，卻不再記得原本家人。",
      "question": "你會送他去嗎？",
      "twist": "",
      "deeperQuestion": "孩子自己應該知道代價嗎？"
    }
  },
  {
    "id": "ponder-v3-family-063",
    "category": "Family",
    "emoji": "🏠",
    "title": "Noisy cloud",
    "scenario": "The loudest relative can become a quiet cloud for three days.",
    "question": "Would you press the switch?",
    "twist": "",
    "deeperQuestion": "Would you start missing their voice?",
    "zh": {
      "title": "吵鬧雲朵",
      "scenario": "家中最吵的人會變成一朵安靜雲，三天後變回來。",
      "question": "你會按開關嗎？",
      "twist": "",
      "deeperQuestion": "你會不會開始想念他的聲音？"
    }
  },
  {
    "id": "ponder-v3-family-064",
    "category": "Family",
    "emoji": "🏠",
    "title": "Room lottery",
    "scenario": "Bedrooms are assigned monthly by lottery; anyone can get the largest.",
    "question": "Would you support it?",
    "twist": "",
    "deeperQuestion": "Should special needs create exceptions?",
    "zh": {
      "title": "公平分房",
      "scenario": "家中房間每月抽籤，誰都有機會住最大那間。",
      "question": "你會支持嗎？",
      "twist": "",
      "deeperQuestion": "有特別需要的人要不要例外？"
    }
  },
  {
    "id": "ponder-v3-family-065",
    "category": "Family",
    "emoji": "🏠",
    "title": "Work magnifier",
    "scenario": "A magnifier reveals a relative's invisible daily work.",
    "question": "Whose day would you inspect?",
    "twist": "",
    "deeperQuestion": "Would you swap days after watching?",
    "zh": {
      "title": "忙碌放大鏡",
      "scenario": "放大鏡會顯示家人每天做的隱形工作。",
      "question": "你最想看誰的一天？",
      "twist": "",
      "deeperQuestion": "看完後你願意交換一天嗎？"
    }
  },
  {
    "id": "ponder-v3-family-066",
    "category": "Family",
    "emoji": "🏠",
    "title": "Wish kites",
    "scenario": "Each relative's kite flies toward their desired destination; holding its string stops it.",
    "question": "Would you hold on?",
    "twist": "",
    "deeperQuestion": "Would you leave a line for their return?",
    "zh": {
      "title": "心願風箏",
      "scenario": "每個家人的風箏飛向想去的地方，拉住線就能阻止。",
      "question": "你會拉嗎？",
      "twist": "",
      "deeperQuestion": "你願意留一條讓他回來的線嗎？"
    }
  },
  {
    "id": "ponder-v3-family-067",
    "category": "Family",
    "emoji": "🏠",
    "title": "Forgiveness post",
    "scenario": "A letter guarantees forgiveness, but its reader cannot refuse.",
    "question": "Would you send it?",
    "twist": "",
    "deeperQuestion": "Do you want forgiveness or to show understanding?",
    "zh": {
      "title": "寬恕郵局",
      "scenario": "你能寄一封一定被原諒的信，但收件人不能選擇拒絕。",
      "question": "你會寄嗎？",
      "twist": "",
      "deeperQuestion": "你更想得到原諒，還是讓他知道你明白了？"
    }
  },
  {
    "id": "ponder-v3-family-068",
    "category": "Family",
    "emoji": "🏠",
    "title": "Family chest",
    "scenario": "Only the least-heard relative can open the family chest.",
    "question": "Who might get the key?",
    "twist": "",
    "deeperQuestion": "What would you change after opening it?",
    "zh": {
      "title": "家庭寶箱",
      "scenario": "寶箱只能由最少被聽見的家人打開。",
      "question": "你猜鑰匙會落在誰手上？",
      "twist": "",
      "deeperQuestion": "開完箱後，你想改變甚麼？"
    }
  },
  {
    "id": "ponder-v3-family-069",
    "category": "Family",
    "emoji": "🏠",
    "title": "Always together",
    "scenario": "A reunion can last forever if everyone leaves their outside life.",
    "question": "Would you stay?",
    "twist": "",
    "deeperQuestion": "Would you support someone leaving first?",
    "zh": {
      "title": "永遠團圓",
      "scenario": "一年一度的聚會能延長到永遠，但每人都要放下外面的生活。",
      "question": "你會留下嗎？",
      "twist": "",
      "deeperQuestion": "你會支持想先離開的人嗎？"
    }
  },
  {
    "id": "ponder-v3-family-070",
    "category": "Family",
    "emoji": "🏠",
    "title": "No-regret camera",
    "scenario": "A camera creates a convincing photo of a gathering that never happened.",
    "question": "Would you make one?",
    "twist": "",
    "deeperQuestion": "Would you tell children it was imagined?",
    "zh": {
      "title": "不留遺憾相機",
      "scenario": "相機能拍下任何錯過的合照，看起來真的發生過。",
      "question": "你想補拍嗎？",
      "twist": "",
      "deeperQuestion": "你會告訴孩子這是想像的嗎？"
    }
  },
  {
    "id": "ponder-v3-family-071",
    "category": "Family",
    "emoji": "🏠",
    "title": "Dream pool",
    "scenario": "Family dreams can combine into one grand dream, erasing individual ones.",
    "question": "Would you contribute yours?",
    "twist": "",
    "deeperQuestion": "Who decides what the grand dream looks like?",
    "zh": {
      "title": "家族儲夢池",
      "scenario": "全家能把夢想合成一個大夢，但各人的小夢會消失。",
      "question": "你願意投入嗎？",
      "twist": "",
      "deeperQuestion": "誰決定大夢的樣子？"
    }
  },
  {
    "id": "ponder-v3-family-072",
    "category": "Family",
    "emoji": "🏠",
    "title": "Growing button",
    "scenario": "A child can skip a difficult year and grow a year older instantly.",
    "question": "Would you allow it?",
    "twist": "",
    "deeperQuestion": "What if that year also holds a wonderful friendship?",
    "zh": {
      "title": "成長按鈕",
      "scenario": "孩子能跳過最辛苦的一年，直接長大一歲。",
      "question": "你會讓他按嗎？",
      "twist": "",
      "deeperQuestion": "如果那年也有最好的朋友呢？"
    }
  },
  {
    "id": "ponder-v3-family-073",
    "category": "Family",
    "emoji": "🏠",
    "title": "Singing wall",
    "scenario": "A wall sings gratitude relatives are too shy to say.",
    "question": "Would you want it singing at dinner?",
    "twist": "",
    "deeperQuestion": "Would you feel shy or happy when it sings about you?",
    "zh": {
      "title": "會唱歌的牆",
      "scenario": "牆會唱出家人不好意思說的感謝。",
      "question": "你想它在飯桌上唱嗎？",
      "twist": "",
      "deeperQuestion": "唱到你時，你會害羞還是開心？"
    }
  },
  {
    "id": "ponder-v3-family-074",
    "category": "Family",
    "emoji": "🏠",
    "title": "Borrowed youth",
    "scenario": "You can lend an elder youthful days by ageing those days yourself.",
    "question": "How many would you lend?",
    "twist": "",
    "deeperQuestion": "Should they spend it with you or on themselves?",
    "zh": {
      "title": "借一天青春",
      "scenario": "你可借一天青春給長輩，自己就老一天。",
      "question": "你願意借多少？",
      "twist": "",
      "deeperQuestion": "你希望他用來陪你還是做自己的事？"
    }
  },
  {
    "id": "ponder-v3-family-075",
    "category": "Family",
    "emoji": "🏠",
    "title": "Changing road",
    "scenario": "The road home lengthens whenever a relative feels rejected.",
    "question": "Should everyone see its length?",
    "twist": "",
    "deeperQuestion": "Whose path would you shorten first?",
    "zh": {
      "title": "回家路會變",
      "scenario": "每次家人不被接納，回家的路就長一點。",
      "question": "你想讓大家看見路有多長嗎？",
      "twist": "",
      "deeperQuestion": "你會先替誰鋪一段短路？"
    }
  },
  {
    "id": "ponder-v3-family-076",
    "category": "Family",
    "emoji": "🏠",
    "title": "Family holiday",
    "scenario": "Your family can create a holiday for the whole town.",
    "question": "What would it celebrate?",
    "twist": "",
    "deeperQuestion": "Could an ordinary peaceful day deserve a holiday?",
    "zh": {
      "title": "家族紀念日",
      "scenario": "你們能新增一個全城放假的家庭紀念日。",
      "question": "你會紀念甚麼？",
      "twist": "",
      "deeperQuestion": "普通平安的一天值得放假嗎？"
    }
  },
  {
    "id": "ponder-v3-family-077",
    "category": "Family",
    "emoji": "🏠",
    "title": "Money cat",
    "scenario": "A cat divides a family bonus by need, ignoring who earned it.",
    "question": "Would you let it?",
    "twist": "",
    "deeperQuestion": "Would you agree if you receive the least?",
    "zh": {
      "title": "會分錢的貓",
      "scenario": "貓會按牠認為的需要分配家中獎金，不理誰賺回來。",
      "question": "你會交給牠嗎？",
      "twist": "",
      "deeperQuestion": "你拿得最少時還會同意嗎？"
    }
  },
  {
    "id": "ponder-v3-family-078",
    "category": "Family",
    "emoji": "🏠",
    "title": "New friend",
    "scenario": "An elder befriends an invisible fairy and grows happier.",
    "question": "Would you insist on meeting it?",
    "twist": "",
    "deeperQuestion": "Would being left out make you sad?",
    "zh": {
      "title": "家人的新朋友",
      "scenario": "長輩交了一位只有他看得見的精靈朋友，變得很快樂。",
      "question": "你會要求見精靈嗎？",
      "twist": "",
      "deeperQuestion": "你會因為無法參與而失落嗎？"
    }
  },
  {
    "id": "ponder-v3-family-079",
    "category": "Family",
    "emoji": "🏠",
    "title": "Home bird",
    "scenario": "Your bird's door stays open, yet it returns daily.",
    "question": "Would that reassure you more than a lock?",
    "twist": "",
    "deeperQuestion": "If it misses a day, would you close the door?",
    "zh": {
      "title": "不會離家的鳥",
      "scenario": "家鳥的門一直開著，牠仍每天回來。",
      "question": "你會比鎖門時更安心嗎？",
      "twist": "",
      "deeperQuestion": "有一天沒回來，你會關門嗎？"
    }
  },
  {
    "id": "ponder-v3-family-080",
    "category": "Family",
    "emoji": "🏠",
    "title": "Family shop",
    "scenario": "Every family kindness can earn money, even hugs.",
    "question": "Would you run this shop?",
    "twist": "",
    "deeperQuestion": "What must remain free?",
    "zh": {
      "title": "家庭商店",
      "scenario": "家人做的小事都能換錢，連擁抱也標價。",
      "question": "你想經營這間店嗎？",
      "twist": "",
      "deeperQuestion": "有甚麼一定要免費？"
    }
  },
  {
    "id": "ponder-v3-family-081",
    "category": "Family",
    "emoji": "🏠",
    "title": "Bear's surname",
    "scenario": "An adopted bear wants to keep its forest surname.",
    "question": "Is it fully part of the family?",
    "twist": "",
    "deeperQuestion": "What if it wants annual holidays in the forest?",
    "zh": {
      "title": "小熊的姓",
      "scenario": "收養的小熊想保留森林的姓氏。",
      "question": "你覺得牠仍是完整的一家人嗎？",
      "twist": "",
      "deeperQuestion": "牠想每年回森林過節呢？"
    }
  },
  {
    "id": "ponder-v3-family-082",
    "category": "Family",
    "emoji": "🏠",
    "title": "Growing room",
    "scenario": "Your childhood room wants to become a family studio, forgetting your traces.",
    "question": "Would you agree?",
    "twist": "",
    "deeperQuestion": "What one thing would you keep there?",
    "zh": {
      "title": "長大的房間",
      "scenario": "你的童年房間想改成家人的工作室，卻會忘記你的痕跡。",
      "question": "你會答應嗎？",
      "twist": "",
      "deeperQuestion": "你希望留下一件甚麼？"
    }
  },
  {
    "id": "ponder-v3-family-083",
    "category": "Family",
    "emoji": "🏠",
    "title": "Who remembers",
    "scenario": "A person can remember only ten relatives; the rest slowly fade.",
    "question": "How would you choose?",
    "twist": "",
    "deeperQuestion": "Should frequency of visits decide the places?",
    "zh": {
      "title": "誰記住誰",
      "scenario": "一個人只能記住十位家人，遠親會慢慢被忘記。",
      "question": "你會怎樣選？",
      "twist": "",
      "deeperQuestion": "見面次數應該決定名額嗎？"
    }
  },
  {
    "id": "ponder-v3-family-084",
    "category": "Family",
    "emoji": "🏠",
    "title": "Mood sign",
    "scenario": "Each bedroom door displays its owner's real mood.",
    "question": "Would you switch it off?",
    "twist": "",
    "deeperQuestion": "Would knowing help you knock more gently?",
    "zh": {
      "title": "心情門牌",
      "scenario": "每個房門都會顯示主人的真實心情。",
      "question": "你想關掉這功能嗎？",
      "twist": "",
      "deeperQuestion": "敲門前知道心情會令你更體貼嗎？"
    }
  },
  {
    "id": "ponder-v3-family-085",
    "category": "Family",
    "emoji": "🏠",
    "title": "Family lottery",
    "scenario": "A lottery prize requires unanimous agreement on its use.",
    "question": "What would you propose?",
    "twist": "",
    "deeperQuestion": "Could a dissenter receive a smaller share?",
    "zh": {
      "title": "家族彩票",
      "scenario": "彩票中了獎，但必須全家一致同意用途才能領。",
      "question": "你會先提甚麼？",
      "twist": "",
      "deeperQuestion": "有人不肯同意，可以少分給他嗎？"
    }
  },
  {
    "id": "ponder-v3-family-086",
    "category": "Family",
    "emoji": "🏠",
    "title": "Forget comparison",
    "scenario": "A pill erases comparisons with others and memories of pride in you.",
    "question": "Would you offer it?",
    "twist": "",
    "deeperQuestion": "Would you let them get to know you again?",
    "zh": {
      "title": "忘記比較",
      "scenario": "藥丸會讓家人忘記拿你跟別人比較，也忘記曾為你驕傲。",
      "question": "你會給他吃嗎？",
      "twist": "",
      "deeperQuestion": "你願意重新讓他認識你嗎？"
    }
  },
  {
    "id": "ponder-v3-family-087",
    "category": "Family",
    "emoji": "🏠",
    "title": "Dinner stranger",
    "scenario": "A magic table invites a stranger weekly and permits no refusal.",
    "question": "Would you like the rule?",
    "twist": "",
    "deeperQuestion": "What if the family wants a quiet evening alone?",
    "zh": {
      "title": "晚餐陌生客",
      "scenario": "魔法餐桌每週請一位陌生人來吃飯，不准拒絕。",
      "question": "你會喜歡這規矩嗎？",
      "twist": "",
      "deeperQuestion": "家人只想安靜相聚時怎麼辦？"
    }
  },
  {
    "id": "ponder-v3-family-088",
    "category": "Family",
    "emoji": "🏠",
    "title": "Pet diary",
    "scenario": "Your pet writes a family diary that may reveal favouritism.",
    "question": "Would you read it together?",
    "twist": "",
    "deeperQuestion": "Who should read it first?",
    "zh": {
      "title": "寵物的日記",
      "scenario": "寵物寫了一本家庭日記，可能揭露偏心。",
      "question": "你會全家一起讀嗎？",
      "twist": "",
      "deeperQuestion": "你想先讓誰看？"
    }
  },
  {
    "id": "ponder-v3-family-089",
    "category": "Family",
    "emoji": "🏠",
    "title": "Courage box",
    "scenario": "An older generation hands you a box of adventures they never dared to try.",
    "question": "Would you accept?",
    "twist": "",
    "deeperQuestion": "Does accepting mean finishing everything?",
    "zh": {
      "title": "家傳勇氣盒",
      "scenario": "上一代把沒敢做的事放進盒子，交給你完成。",
      "question": "你會接嗎？",
      "twist": "",
      "deeperQuestion": "接了盒子就一定要全部完成嗎？"
    }
  },
  {
    "id": "ponder-v3-family-090",
    "category": "Family",
    "emoji": "🏠",
    "title": "Secret holiday",
    "scenario": "The main family carer can vanish for a day without being found.",
    "question": "Would you support this holiday?",
    "twist": "",
    "deeperQuestion": "Should they have to prepare meals before leaving?",
    "zh": {
      "title": "悄悄休假",
      "scenario": "家中最常照顧人的一位可隱身一天，大家找不到他。",
      "question": "你會支持這個假期嗎？",
      "twist": "",
      "deeperQuestion": "他需要先把飯煮好才走嗎？"
    }
  },
  {
    "id": "ponder-v3-family-091",
    "category": "Family",
    "emoji": "🏠",
    "title": "Different happiness",
    "scenario": "Everyone has a happiness button leading down a different path.",
    "question": "Would you let each person press theirs?",
    "twist": "",
    "deeperQuestion": "Would you ask everyone to promise a reunion?",
    "zh": {
      "title": "不同的幸福",
      "scenario": "家中每人都有一個幸福按鈕，按下後想走的路都不同。",
      "question": "你會讓大家各自按嗎？",
      "twist": "",
      "deeperQuestion": "你會要求大家約定重聚嗎？"
    }
  },
  {
    "id": "ponder-v3-family-092",
    "category": "Family",
    "emoji": "🏠",
    "title": "Saying-no doll",
    "scenario": "A doll voices a child's unspoken “no”.",
    "question": "Would you let it stay at dinner?",
    "twist": "",
    "deeperQuestion": "Should adults have one too?",
    "zh": {
      "title": "會說不的玩偶",
      "scenario": "孩子的玩偶會替他說出不敢說的「不要」。",
      "question": "你會讓玩偶留在飯桌嗎？",
      "twist": "",
      "deeperQuestion": "大人也應該有一隻嗎？"
    }
  },
  {
    "id": "ponder-v3-family-093",
    "category": "Family",
    "emoji": "🏠",
    "title": "An island each",
    "scenario": "Each relative has an island; bridges appear only with mutual agreement.",
    "question": "Would you like living there?",
    "twist": "",
    "deeperQuestion": "What if someone avoids bridges for a long time?",
    "zh": {
      "title": "一人一座島",
      "scenario": "全家各有一座小島，橋要雙方同意才會出現。",
      "question": "你喜歡這樣住嗎？",
      "twist": "",
      "deeperQuestion": "有人長期不架橋，你會怎樣？"
    }
  },
  {
    "id": "ponder-v3-family-094",
    "category": "Family",
    "emoji": "🏠",
    "title": "Memory keeper",
    "scenario": "One relative keeps every family story; others must borrow them.",
    "question": "Would you take the role?",
    "twist": "",
    "deeperQuestion": "Should painful stories be available too?",
    "zh": {
      "title": "記憶保管員",
      "scenario": "家族只能選一人記住所有故事，其餘人要向他借。",
      "question": "你想當保管員嗎？",
      "twist": "",
      "deeperQuestion": "難過的故事應該借出去嗎？"
    }
  },
  {
    "id": "ponder-v3-family-095",
    "category": "Family",
    "emoji": "🏠",
    "title": "Useless genius",
    "scenario": "A child could be the world's best paper-plane maker without earning money.",
    "question": "Would you fully support it?",
    "twist": "",
    "deeperQuestion": "How much family time would you spend practising?",
    "zh": {
      "title": "沒用的小天才",
      "scenario": "孩子能成為摺紙飛機的世界第一，卻不會因此賺錢。",
      "question": "你會全力支持嗎？",
      "twist": "",
      "deeperQuestion": "你願意花多少家庭時間陪他練？"
    }
  },
  {
    "id": "ponder-v3-family-096",
    "category": "Family",
    "emoji": "🏠",
    "title": "Apology day",
    "scenario": "One day yearly, apologies become real chances to repair things.",
    "question": "What would you mend first?",
    "twist": "",
    "deeperQuestion": "Could the other person choose not to accept yet?",
    "zh": {
      "title": "家庭道歉日",
      "scenario": "一年一天，說對不起會變成真正補救的機會。",
      "question": "你想先修補哪件事？",
      "twist": "",
      "deeperQuestion": "對方可以選擇暫時不接受嗎？"
    }
  },
  {
    "id": "ponder-v3-family-097",
    "category": "Family",
    "emoji": "🏠",
    "title": "Breathing home",
    "scenario": "Your home expands when people are themselves and shrinks when they suppress themselves.",
    "question": "Would it feel spacious?",
    "twist": "",
    "deeperQuestion": "Whom would you make more space for?",
    "zh": {
      "title": "會呼吸的家",
      "scenario": "家在每人做自己時變大，在有人委屈自己時縮小。",
      "question": "你們會住得寬敞嗎？",
      "twist": "",
      "deeperQuestion": "你最想替誰多留一個角落？"
    }
  },
  {
    "id": "ponder-v3-family-098",
    "category": "Family",
    "emoji": "🏠",
    "title": "Last recipe",
    "scenario": "A family recipe can be shared freely worldwide or kept within the family.",
    "question": "How would you pass it on?",
    "twist": "",
    "deeperQuestion": "Would you mind others changing the recipe?",
    "zh": {
      "title": "最後的配方",
      "scenario": "祖傳食譜可以免費分享全世界，或只留給家人。",
      "question": "你想怎樣傳下去？",
      "twist": "",
      "deeperQuestion": "別人改了配方，你會介意嗎？"
    }
  },
  {
    "id": "ponder-v3-family-099",
    "category": "Family",
    "emoji": "🏠",
    "title": "Two porch lights",
    "scenario": "One porch light says “Come home”; another says “Go freely”.",
    "question": "Which would you light?",
    "twist": "",
    "deeperQuestion": "Whom would you want to see it?",
    "zh": {
      "title": "門口的兩盞燈",
      "scenario": "一盞燈說「記得回家」，另一盞說「放心去吧」。",
      "question": "你想家門亮哪盞？",
      "twist": "",
      "deeperQuestion": "你希望哪位家人看見它？"
    }
  },
  {
    "id": "ponder-v3-family-100",
    "category": "Family",
    "emoji": "🏠",
    "title": "Moving festival",
    "scenario": "A festival moves to the date its loneliest relative needs it, not necessarily a holiday.",
    "question": "Would you follow it?",
    "twist": "",
    "deeperQuestion": "How could someone who cannot attend take part?",
    "zh": {
      "title": "會搬家的節日",
      "scenario": "節日會跟著最想團聚的人搬日期，不一定在假期。",
      "question": "你們會跟它走嗎？",
      "twist": "",
      "deeperQuestion": "來不了的人可以用甚麼方式參與？"
    }
  },
  {
    "id": "ponder-v3-party-001",
    "category": "Party",
    "emoji": "🎉",
    "title": "Feeling shop",
    "scenario": "A shop sells courage, calm and curiosity; each person may buy one can.",
    "question": "Which would you pick?",
    "twist": "",
    "deeperQuestion": "Would you swap a sip with a friend?",
    "zh": {
      "title": "情緒便利店",
      "scenario": "便利店賣勇氣、安心和好奇心，每人只能買一罐。",
      "question": "你會拿哪罐？",
      "twist": "",
      "deeperQuestion": "你願意跟朋友交換一口嗎？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v3-party-002",
    "category": "Party",
    "emoji": "🎉",
    "title": "Dog mayor",
    "scenario": "A kind dog runs for mayor but understands only walks and meals.",
    "question": "Would you vote for it?",
    "twist": "",
    "deeperQuestion": "What deputy would you choose for it?",
    "zh": {
      "title": "小狗市長",
      "scenario": "城市選出一隻善良小狗當市長，但牠只懂散步和吃飯。",
      "question": "你會投牠嗎？",
      "twist": "",
      "deeperQuestion": "你想替牠找哪種副手？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v3-party-003",
    "category": "Party",
    "emoji": "🎉",
    "title": "Memory change",
    "scenario": "You can pay with memories and receive strangers' memories as change.",
    "question": "Would you try?",
    "twist": "",
    "deeperQuestion": "What sort of memory would you least want back?",
    "zh": {
      "title": "回憶找續",
      "scenario": "買東西可以用回憶付款，店員會找回陌生人的回憶。",
      "question": "你會試買嗎？",
      "twist": "",
      "deeperQuestion": "你最不想收到哪種回憶？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v3-party-004",
    "category": "Party",
    "emoji": "🎉",
    "title": "Lucky seat",
    "scenario": "One cafe seat makes the rest of your day lucky.",
    "question": "Would you give it to a friend?",
    "twist": "",
    "deeperQuestion": "Would you offer it without receiving thanks?",
    "zh": {
      "title": "幸運座位",
      "scenario": "咖啡店有個座位讓今天一切順利，但只剩一個。",
      "question": "你會讓給朋友嗎？",
      "twist": "",
      "deeperQuestion": "對方不用謝你，你還會讓嗎？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v3-party-005",
    "category": "Party",
    "emoji": "🎉",
    "title": "Truth discount",
    "scenario": "Dessert gets cheaper for each small flaw you admit.",
    "question": "How far would you go?",
    "twist": "",
    "deeperQuestion": "Could friends add suggestions?",
    "zh": {
      "title": "說真話打折",
      "scenario": "每說一個自己的小缺點，甜品就便宜一點。",
      "question": "你會說到甚麼程度？",
      "twist": "",
      "deeperQuestion": "朋友可以替你補充嗎？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v3-party-006",
    "category": "Party",
    "emoji": "🎉",
    "title": "Borrowed talent",
    "scenario": "You can borrow a friend's talent for a day, leaving them without it.",
    "question": "What would you borrow?",
    "twist": "",
    "deeperQuestion": "What would you offer in return?",
    "zh": {
      "title": "借用天賦",
      "scenario": "你能借朋友一項天賦一天，但他那天不能使用。",
      "question": "你想借甚麼？",
      "twist": "",
      "deeperQuestion": "你會用甚麼回禮？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v3-party-007",
    "category": "Party",
    "emoji": "🎉",
    "title": "Letter from a cat",
    "scenario": "A stranger cat asks to borrow money to move to the moon.",
    "question": "Would you lend it?",
    "twist": "",
    "deeperQuestion": "Would moon rocks count as repayment?",
    "zh": {
      "title": "陌生貓來信",
      "scenario": "陌生貓寄來求助信，說要借一百元搬去月球。",
      "question": "你會借嗎？",
      "twist": "",
      "deeperQuestion": "牠寄回月球石算還錢嗎？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v3-party-008",
    "category": "Party",
    "emoji": "🎉",
    "title": "Friendship expiry",
    "scenario": "A card shows your friendship's remaining days, which today's choices can change.",
    "question": "Would you look?",
    "twist": "",
    "deeperQuestion": "Would you share what you saw?",
    "zh": {
      "title": "朋友保存期限",
      "scenario": "一張卡能顯示友誼還剩多少天，卻可能因今天的選擇改變。",
      "question": "你想看嗎？",
      "twist": "",
      "deeperQuestion": "你會告訴朋友看到甚麼嗎？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v3-party-009",
    "category": "Party",
    "emoji": "🎉",
    "title": "Used dreams",
    "scenario": "A shop sells abandoned dreams; buying makes you truly want to fulfil them.",
    "question": "Would you browse?",
    "twist": "",
    "deeperQuestion": "Would you ask why the owner gave up?",
    "zh": {
      "title": "夢想二手店",
      "scenario": "有人便宜出售放棄的夢想，你買了就會真心想完成它。",
      "question": "你會逛嗎？",
      "twist": "",
      "deeperQuestion": "你會先問原主人為何放棄嗎？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v3-party-010",
    "category": "Party",
    "emoji": "🎉",
    "title": "Anonymous help",
    "scenario": "Magic solves a friend's problem, but they credit someone else.",
    "question": "Would you use it?",
    "twist": "",
    "deeperQuestion": "Could you resist revealing the truth?",
    "zh": {
      "title": "不記名幫忙",
      "scenario": "魔法能替朋友解決一個麻煩，但他會以為是別人幫的。",
      "question": "你會用嗎？",
      "twist": "",
      "deeperQuestion": "你會忍得住不揭穿嗎？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v3-party-011",
    "category": "Party",
    "emoji": "🎉",
    "title": "Joke toll",
    "scenario": "A bridge toll is a story that makes its guard laugh.",
    "question": "Would you tell an embarrassing story about yourself?",
    "twist": "",
    "deeperQuestion": "Would you use a friend's story instead?",
    "zh": {
      "title": "笑話收費站",
      "scenario": "橋的過路費是一個能逗守衛笑的故事。",
      "question": "你會講自己的糗事嗎？",
      "twist": "",
      "deeperQuestion": "你會不會借用朋友的糗事？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v3-party-012",
    "category": "Party",
    "emoji": "🎉",
    "title": "Whose treasure",
    "scenario": "You find treasure a friend buried and forgot as a child.",
    "question": "Would you claim it as your discovery?",
    "twist": "",
    "deeperQuestion": "Would hours spent digging change your answer?",
    "zh": {
      "title": "誰的寶藏",
      "scenario": "你找到朋友小時候埋的寶藏，他已完全忘記。",
      "question": "你會當成自己的發現嗎？",
      "twist": "",
      "deeperQuestion": "你花了很多時間挖掘會改變答案嗎？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v3-party-013",
    "category": "Party",
    "emoji": "🎉",
    "title": "Invisible applause",
    "scenario": "Every good deed earns applause only you can hear.",
    "question": "Would you do more good?",
    "twist": "",
    "deeperQuestion": "What if the applause stops one day?",
    "zh": {
      "title": "隱形掌聲",
      "scenario": "每做一件好事都有掌聲，只有你聽見。",
      "question": "你會更常做好事嗎？",
      "twist": "",
      "deeperQuestion": "如果掌聲有一天停了呢？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v3-party-014",
    "category": "Party",
    "emoji": "🎉",
    "title": "Bad-luck swap",
    "scenario": "You can take a friend's bad luck so an important day goes well.",
    "question": "Would you agree?",
    "twist": "",
    "deeperQuestion": "Would you ask how bad it could be first?",
    "zh": {
      "title": "交換一天倒楣",
      "scenario": "你能替朋友承受一天倒楣，換他一個重要日子順利。",
      "question": "你會答應嗎？",
      "twist": "",
      "deeperQuestion": "你會先問有多倒楣嗎？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v3-party-015",
    "category": "Party",
    "emoji": "🎉",
    "title": "Cloud mailbox",
    "scenario": "A mailbox sends a letter to your friend ten years ahead, with no reply.",
    "question": "What would you write?",
    "twist": "",
    "deeperQuestion": "Would you include a request?",
    "zh": {
      "title": "雲端信箱",
      "scenario": "信箱能寄一封信給十年後的朋友，但你永遠看不到回信。",
      "question": "你會寫甚麼？",
      "twist": "",
      "deeperQuestion": "你會留下一個請求嗎？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v3-party-016",
    "category": "Party",
    "emoji": "🎉",
    "title": "Comfort translator",
    "scenario": "A machine supplies the comfort your friend wants, even if you disagree.",
    "question": "Would you read it aloud?",
    "twist": "",
    "deeperQuestion": "Would you add your own honest thought?",
    "zh": {
      "title": "安慰翻譯機",
      "scenario": "機器能說出朋友最想聽的安慰，即使你不認同。",
      "question": "你會照讀嗎？",
      "twist": "",
      "deeperQuestion": "你會加一句自己的真心話嗎？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v3-party-017",
    "category": "Party",
    "emoji": "🎉",
    "title": "No-price day",
    "scenario": "All prices vanish for a day; customers decide what to pay.",
    "question": "Would you pay the usual price?",
    "twist": "",
    "deeperQuestion": "Would you treat small shops and big companies alike?",
    "zh": {
      "title": "價錢消失日",
      "scenario": "一天所有價錢都消失，付多少由客人決定。",
      "question": "你會照原價付嗎？",
      "twist": "",
      "deeperQuestion": "小店和大公司，你會付一樣嗎？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v3-party-018",
    "category": "Party",
    "emoji": "🎉",
    "title": "Friend copy",
    "scenario": "You can copy a friend for company, giving the original more freedom.",
    "question": "Would you use it?",
    "twist": "",
    "deeperQuestion": "Should the copy know what it is?",
    "zh": {
      "title": "朋友複製券",
      "scenario": "你能複製一位朋友陪你，原本的他就有更多自由。",
      "question": "你會用嗎？",
      "twist": "",
      "deeperQuestion": "你需要讓複製人知道嗎？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v3-party-019",
    "category": "Party",
    "emoji": "🎉",
    "title": "Temper locker",
    "scenario": "You can store your temper for a day but must feel it all that evening.",
    "question": "Would you do it?",
    "twist": "",
    "deeperQuestion": "Would you want company when collecting it?",
    "zh": {
      "title": "脾氣寄存",
      "scenario": "你能寄存壞脾氣一天，但晚上要一次過拿回。",
      "question": "你會寄嗎？",
      "twist": "",
      "deeperQuestion": "你想有人陪你取回嗎？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v3-party-020",
    "category": "Party",
    "emoji": "🎉",
    "title": "Magic treat",
    "scenario": "Treating friends doubles your money only if their gratitude is genuine.",
    "question": "Would you treat often?",
    "twist": "",
    "deeperQuestion": "Would gratitude count if they know the rule?",
    "zh": {
      "title": "神奇請客券",
      "scenario": "你請客花的錢會加倍回來，但朋友必須真心感激。",
      "question": "你會常請嗎？",
      "twist": "",
      "deeperQuestion": "朋友知道規則後還算感激嗎？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v3-party-021",
    "category": "Party",
    "emoji": "🎉",
    "title": "Visible loneliness",
    "scenario": "Loneliness becomes a cloud above each person.",
    "question": "Would you approach the biggest cloud first?",
    "twist": "",
    "deeperQuestion": "Would you want yours to be visible?",
    "zh": {
      "title": "看得見的孤單",
      "scenario": "孤單會變成頭上的小雲。",
      "question": "你會先走近最大的那朵嗎？",
      "twist": "",
      "deeperQuestion": "你希望自己的雲被看見嗎？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v3-party-022",
    "category": "Party",
    "emoji": "🎉",
    "title": "Forgetful ice cream",
    "scenario": "Ice cream erases one worry and everything it taught you.",
    "question": "Would you eat it?",
    "twist": "",
    "deeperQuestion": "Would you recommend it to a sad friend?",
    "zh": {
      "title": "忘憂冰淇淋",
      "scenario": "冰淇淋會抹掉一件煩惱，也抹掉你從中學到的事。",
      "question": "你會吃嗎？",
      "twist": "",
      "deeperQuestion": "你會推薦給正難過的朋友嗎？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v3-party-023",
    "category": "Party",
    "emoji": "🎉",
    "title": "Secret exchange",
    "scenario": "Hearing a friend's secret costs one equally personal secret of your own.",
    "question": "Would you trade?",
    "twist": "",
    "deeperQuestion": "Who decides what counts as equal?",
    "zh": {
      "title": "秘密交換站",
      "scenario": "想聽一個朋友的秘密，就要交出自己的同等秘密。",
      "question": "你會交換嗎？",
      "twist": "",
      "deeperQuestion": "誰來判斷甚麼叫同等？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v3-party-024",
    "category": "Party",
    "emoji": "🎉",
    "title": "Friendship pass",
    "scenario": "A pass guarantees monthly meetings but expires after one absence.",
    "question": "Would you buy it for a friend?",
    "twist": "",
    "deeperQuestion": "What exceptions would you want?",
    "zh": {
      "title": "友情年票",
      "scenario": "年票保證每月見面，但缺席一次就失效。",
      "question": "你想買給朋友嗎？",
      "twist": "",
      "deeperQuestion": "你希望有甚麼例外？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v3-party-025",
    "category": "Party",
    "emoji": "🎉",
    "title": "Grudge umbrella",
    "scenario": "An umbrella shelters only people who have lent you something.",
    "question": "Would you keep it?",
    "twist": "",
    "deeperQuestion": "Would you find a way to shelter strangers?",
    "zh": {
      "title": "會記仇的傘",
      "scenario": "傘只肯替曾借過你東西的人擋雨。",
      "question": "你會留著它嗎？",
      "twist": "",
      "deeperQuestion": "你會偷偷幫陌生人擋雨嗎？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v3-party-026",
    "category": "Party",
    "emoji": "🎉",
    "title": "Monster neighbour",
    "scenario": "A friendly monster next door sings happily at midnight.",
    "question": "Would you complain or knock first?",
    "twist": "",
    "deeperQuestion": "What if it can sing only then?",
    "zh": {
      "title": "小怪獸鄰居",
      "scenario": "隔壁小怪獸很友善，但每天半夜才開心唱歌。",
      "question": "你會先投訴還是敲門？",
      "twist": "",
      "deeperQuestion": "如果那是牠唯一能唱的時段呢？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v3-party-027",
    "category": "Party",
    "emoji": "🎉",
    "title": "Wish tip",
    "scenario": "A server's tips become wishes you cannot see.",
    "question": "Would you tip more?",
    "twist": "",
    "deeperQuestion": "What if their wishes are more luxurious than yours?",
    "zh": {
      "title": "願望小費",
      "scenario": "服務員的小費能變成他的願望，你看不到他會許甚麼。",
      "question": "你會給多一點嗎？",
      "twist": "",
      "deeperQuestion": "如果他的願望比你的奢侈呢？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v3-party-028",
    "category": "Party",
    "emoji": "🎉",
    "title": "One-day fame",
    "scenario": "You can be famous for a day, solely for your most embarrassing moment.",
    "question": "Would you accept?",
    "twist": "",
    "deeperQuestion": "What if it earns a fortune?",
    "zh": {
      "title": "一日名人",
      "scenario": "你可出名一天，但大家只記得你最丟臉的事。",
      "question": "你會接受嗎？",
      "twist": "",
      "deeperQuestion": "如果能因此賺一大筆錢呢？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v3-party-029",
    "category": "Party",
    "emoji": "🎉",
    "title": "Roadside wish",
    "scenario": "You find an unnamed wish that costs your holiday to fulfil.",
    "question": "Would you help?",
    "twist": "",
    "deeperQuestion": "Would you want to know whose it is first?",
    "zh": {
      "title": "路邊願望",
      "scenario": "你撿到一個沒寫名字的願望，替它實現會花掉你的假期。",
      "question": "你會幫嗎？",
      "twist": "",
      "deeperQuestion": "你想先知道是誰的嗎？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v3-party-030",
    "category": "Party",
    "emoji": "🎉",
    "title": "Honest selfie",
    "scenario": "A camera captures how others see you, not your face.",
    "question": "Would you let a friend take your portrait?",
    "twist": "",
    "deeperQuestion": "Would you delete a portrait you dislike?",
    "zh": {
      "title": "誠實自拍",
      "scenario": "相機拍下別人眼中的你，而不是你的外貌。",
      "question": "你想讓朋友拍嗎？",
      "twist": "",
      "deeperQuestion": "你會想刪掉不喜歡的一張嗎？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v3-party-031",
    "category": "Party",
    "emoji": "🎉",
    "title": "Wish library",
    "scenario": "A library lends different lives; overdue borrowers cannot return.",
    "question": "Which life would you borrow?",
    "twist": "",
    "deeperQuestion": "Would you ask a friend to remind you to return?",
    "zh": {
      "title": "心願借書證",
      "scenario": "圖書館借出不同人生，逾期就回不來。",
      "question": "你敢借哪一本？",
      "twist": "",
      "deeperQuestion": "你希望朋友提醒你還書嗎？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v3-party-032",
    "category": "Party",
    "emoji": "🎉",
    "title": "Thank-you sweets",
    "scenario": "Each sweet contains an unspoken thank-you.",
    "question": "Would you eat them all yourself?",
    "twist": "",
    "deeperQuestion": "Who would you most want to give one to?",
    "zh": {
      "title": "謝謝糖果",
      "scenario": "每顆糖都藏著一個別人沒說出口的謝謝。",
      "question": "你會全部自己吃嗎？",
      "twist": "",
      "deeperQuestion": "你最想送一顆給誰？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v3-party-033",
    "category": "Party",
    "emoji": "🎉",
    "title": "Brief power",
    "scenario": "You can fly for ten minutes and carry one friend.",
    "question": "How would you choose?",
    "twist": "",
    "deeperQuestion": "What if someone afraid of heights wants to try?",
    "zh": {
      "title": "短暫超能力",
      "scenario": "你能飛十分鐘，卻只能載一位朋友。",
      "question": "你會怎樣選？",
      "twist": "",
      "deeperQuestion": "怕高的人反而想挑戰自己呢？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v3-party-034",
    "category": "Party",
    "emoji": "🎉",
    "title": "Take a star",
    "scenario": "Each person may leave with a star for one new idea from tonight.",
    "question": "What would yours be called?",
    "twist": "",
    "deeperQuestion": "Whom would you show it to?",
    "zh": {
      "title": "帶走一顆星",
      "scenario": "散場時每人可帶走一顆星，代表今晚得到的一個新想法。",
      "question": "你的星會叫甚麼？",
      "twist": "",
      "deeperQuestion": "你想把它送給哪位朋友看看？"
    },
    "groupSize": "small"
  },
  {
    "id": "ponder-v3-party-035",
    "category": "Party",
    "emoji": "🎉",
    "title": "Turtle bank",
    "scenario": "Your bank gets a seed deposit from a turtle expecting a forest in a century.",
    "question": "Would you accept?",
    "twist": "",
    "deeperQuestion": "Each suggest one promise you can actually keep.",
    "zh": {
      "title": "烏龜銀行",
      "scenario": "你們開銀行，烏龜客人存一顆種子，想百年後領森林。",
      "question": "你們會接嗎？",
      "twist": "",
      "deeperQuestion": "先各提一項你們真的能承諾的事。"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v3-party-036",
    "category": "Party",
    "emoji": "🎉",
    "title": "Dream hotel",
    "scenario": "Your hotel charges guests one dream per night.",
    "question": "What dreams would you accept?",
    "twist": "",
    "deeperQuestion": "How could someone without good dreams stay?",
    "zh": {
      "title": "夢想旅館",
      "scenario": "你們開旅館，房租是住客的一個夢。",
      "question": "你們會收哪種夢？",
      "twist": "",
      "deeperQuestion": "沒有好夢的客人可以怎樣入住？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v3-party-037",
    "category": "Party",
    "emoji": "🎉",
    "title": "Tiny-town budget",
    "scenario": "Your town can afford a slide, a rest house or a stray-cat home.",
    "question": "Which would you build?",
    "twist": "",
    "deeperQuestion": "Hear the least popular choice's reasons first.",
    "zh": {
      "title": "小鎮預算",
      "scenario": "小鎮只有錢造一樣：滑梯、休息屋或流浪貓家。",
      "question": "你們會選哪個？",
      "twist": "",
      "deeperQuestion": "先聽最少票的一方說理由。"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v3-party-038",
    "category": "Party",
    "emoji": "🎉",
    "title": "Monster hiring",
    "scenario": "Hire a fast, chilly rabbit or a slow, kind bear for your shop.",
    "question": "Whom would you choose?",
    "twist": "",
    "deeperQuestion": "Could you offer the other a different role?",
    "zh": {
      "title": "怪獸招聘",
      "scenario": "你們要聘一位店員：很快但冷淡的兔，或很慢但溫柔的熊。",
      "question": "會選誰？",
      "twist": "",
      "deeperQuestion": "你們能替落選者安排另一份工作嗎？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v3-party-039",
    "category": "Party",
    "emoji": "🎉",
    "title": "Treasure rules",
    "scenario": "A chest grows coins daily but stops if anyone takes extra.",
    "question": "What rule would you make?",
    "twist": "",
    "deeperQuestion": "Could urgent need change the rule?",
    "zh": {
      "title": "共享寶箱規則",
      "scenario": "寶箱每天生金幣，但只要一人多拿就停產。",
      "question": "你們會訂甚麼規則？",
      "twist": "",
      "deeperQuestion": "遇上急需用錢的人，規則能改嗎？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v3-party-040",
    "category": "Party",
    "emoji": "🎉",
    "title": "Lost-item fairy",
    "scenario": "A fairy sends lost things to people who need them more, never their owners.",
    "question": "Would you support it?",
    "twist": "",
    "deeperQuestion": "What if it takes your favourite possession?",
    "zh": {
      "title": "失物小精靈",
      "scenario": "精靈把失物送到更需要的人手上，從不還原主。",
      "question": "你們會支持牠嗎？",
      "twist": "",
      "deeperQuestion": "如果送走的是你最珍惜的東西呢？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v3-party-041",
    "category": "Party",
    "emoji": "🎉",
    "title": "Story tax",
    "scenario": "Your town taxes one true story monthly instead of money.",
    "question": "What counts as enough?",
    "twist": "",
    "deeperQuestion": "Would people with quiet lives be disadvantaged?",
    "zh": {
      "title": "故事稅",
      "scenario": "你們城裡不用交錢，每月交一個真實故事。",
      "question": "甚麼故事才算交足？",
      "twist": "",
      "deeperQuestion": "生活平淡的人會吃虧嗎？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v3-party-042",
    "category": "Party",
    "emoji": "🎉",
    "title": "Cloud co-op",
    "scenario": "Your group farms clouds with different preferences for rain and sun.",
    "question": "How would you schedule weather?",
    "twist": "",
    "deeperQuestion": "Would you still vote during a drought?",
    "zh": {
      "title": "雲朵合作社",
      "scenario": "你們一起養雲，一人喜歡雨、一人喜歡陽光。",
      "question": "會怎樣安排天氣？",
      "twist": "",
      "deeperQuestion": "農作物快乾死時，還要投票嗎？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v3-party-043",
    "category": "Party",
    "emoji": "🎉",
    "title": "Smile currency",
    "scenario": "Your town uses smiles as money, leaving quiet smilers poor.",
    "question": "Would you keep the system?",
    "twist": "",
    "deeperQuestion": "What basic service would you make free?",
    "zh": {
      "title": "微笑貨幣",
      "scenario": "小鎮用微笑付錢，笑得少的人會窮。",
      "question": "你們會保留這制度嗎？",
      "twist": "",
      "deeperQuestion": "你們想加哪種免費基本服務？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v3-party-044",
    "category": "Party",
    "emoji": "🎉",
    "title": "Monster pageant",
    "scenario": "You judge a pageant of monsters unlike human beauty standards.",
    "question": "What would you reward?",
    "twist": "",
    "deeperQuestion": "Could contestants choose the standards?",
    "zh": {
      "title": "怪物選美",
      "scenario": "你們當評判，參賽怪物都不符合人類審美。",
      "question": "你們會評甚麼？",
      "twist": "",
      "deeperQuestion": "可以讓參賽者決定標準嗎？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v3-party-045",
    "category": "Party",
    "emoji": "🎉",
    "title": "Shared cloak",
    "scenario": "Your group shares an invisibility cloak with different reasons to use it.",
    "question": "Who goes first?",
    "twist": "",
    "deeperQuestion": "Should users report where they went?",
    "zh": {
      "title": "共享隱形斗篷",
      "scenario": "你們有一件隱形斗篷，每人想用的原因不同。",
      "question": "誰先用？",
      "twist": "",
      "deeperQuestion": "使用的人需要匯報去過哪裡嗎？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v3-party-046",
    "category": "Party",
    "emoji": "🎉",
    "title": "Robot leave",
    "scenario": "Your chore robot requests two days off weekly.",
    "question": "Would you approve?",
    "twist": "",
    "deeperQuestion": "Could it earn extra money elsewhere on days off?",
    "zh": {
      "title": "會請假的機器",
      "scenario": "你們的家務機器人要求每週放假兩天。",
      "question": "你們會批准嗎？",
      "twist": "",
      "deeperQuestion": "休假時它可以去另一家賺外快嗎？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v3-party-047",
    "category": "Party",
    "emoji": "🎉",
    "title": "Happiness factory",
    "scenario": "A factory bottles laughter, leaving workers unable to laugh after work.",
    "question": "Would you buy it?",
    "twist": "",
    "deeperQuestion": "What change would make buying acceptable?",
    "zh": {
      "title": "快樂工廠",
      "scenario": "工廠把笑聲裝瓶賣，但工人下班就笑不出。",
      "question": "你們會買嗎？",
      "twist": "",
      "deeperQuestion": "怎樣改規則你們才願意買？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v3-party-048",
    "category": "Party",
    "emoji": "🎉",
    "title": "Last spaceship",
    "scenario": "A spaceship has three seats for four people with urgent reasons.",
    "question": "How should you decide?",
    "twist": "",
    "deeperQuestion": "Who would offer an alternative first?",
    "zh": {
      "title": "末班飛船",
      "scenario": "飛船只餘三個座位，你們四人各有非去不可的理由。",
      "question": "怎樣決定？",
      "twist": "",
      "deeperQuestion": "誰願意先提出替代方案？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v3-party-049",
    "category": "Party",
    "emoji": "🎉",
    "title": "Kind-lie shop",
    "scenario": "Your shop sells only comforting lies.",
    "question": "What is its first product?",
    "twist": "",
    "deeperQuestion": "What lie would you refuse to sell?",
    "zh": {
      "title": "善意謊話店",
      "scenario": "你們開店，只能賣讓人好受的謊話。",
      "question": "第一件商品會是甚麼？",
      "twist": "",
      "deeperQuestion": "哪種謊話你們拒絕上架？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v3-party-050",
    "category": "Party",
    "emoji": "🎉",
    "title": "Voting trees",
    "scenario": "Park trees request city votes and live far longer than humans.",
    "question": "How would you assign votes?",
    "twist": "",
    "deeperQuestion": "Would a sapling get a full vote?",
    "zh": {
      "title": "會投票的樹",
      "scenario": "公園樹木要求參與城市投票，但每棵樹活得比人久。",
      "question": "你們會怎樣分票？",
      "twist": "",
      "deeperQuestion": "新種的小樹也有完整一票嗎？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v3-party-051",
    "category": "Party",
    "emoji": "🎉",
    "title": "Friendship shares",
    "scenario": "Your friendship becomes a company, with shares based on time contributed.",
    "question": "Would you list it?",
    "twist": "",
    "deeperQuestion": "How would you count a busy but valued friend?",
    "zh": {
      "title": "友誼股份",
      "scenario": "朋友圈變成公司，付出時間最多的人股份最多。",
      "question": "你們會上市嗎？",
      "twist": "",
      "deeperQuestion": "忙碌但重要的朋友怎樣算？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v3-party-052",
    "category": "Party",
    "emoji": "🎉",
    "title": "Memory gallery",
    "scenario": "Each person exhibits one memory with everyone involved consenting.",
    "question": "Which would you choose?",
    "twist": "",
    "deeperQuestion": "If someone objects, would anonymity be enough?",
    "zh": {
      "title": "記憶展覽館",
      "scenario": "你們合辦展覽，每人只展一段回憶，但要得到當中所有人同意。",
      "question": "你會選哪段？",
      "twist": "",
      "deeperQuestion": "有人反對，能改成匿名嗎？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v3-party-053",
    "category": "Party",
    "emoji": "🎉",
    "title": "Dragon fire brigade",
    "scenario": "A hardworking fire-breathing dragon wants to join the fire brigade but hiccups often.",
    "question": "Would you accept it?",
    "twist": "",
    "deeperQuestion": "What role could it start with?",
    "zh": {
      "title": "小龍消防隊",
      "scenario": "噴火小龍想當消防員，牠很努力卻容易打嗝。",
      "question": "你們會收牠嗎？",
      "twist": "",
      "deeperQuestion": "可以讓牠先做哪項工作？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v3-party-054",
    "category": "Party",
    "emoji": "🎉",
    "title": "Fair cake",
    "scenario": "A cake divides by need or by contribution, never both.",
    "question": "Which would your group choose?",
    "twist": "",
    "deeperQuestion": "How would a child and the baker fare?",
    "zh": {
      "title": "公平蛋糕",
      "scenario": "魔法蛋糕能按需要或按付出分配，兩種只能選一種。",
      "question": "你們選哪種？",
      "twist": "",
      "deeperQuestion": "小孩和做蛋糕的人怎樣分？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v3-party-055",
    "category": "Party",
    "emoji": "🎉",
    "title": "Sleepless town",
    "scenario": "Only a bear's song can soothe a sleepless town, but the bear is exhausted.",
    "question": "Would you wake it?",
    "twist": "",
    "deeperQuestion": "What would you offer in return?",
    "zh": {
      "title": "全城失眠",
      "scenario": "全城睡不著，只有一隻熊唱歌能幫忙，但牠也很累。",
      "question": "你們會叫醒牠嗎？",
      "twist": "",
      "deeperQuestion": "你們願意給牠甚麼交換？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v3-party-056",
    "category": "Party",
    "emoji": "🎉",
    "title": "Pet district",
    "scenario": "Pets want a self-governing district where humans need invitations.",
    "question": "Would you support it?",
    "twist": "",
    "deeperQuestion": "What if they still request food deliveries?",
    "zh": {
      "title": "寵物自治區",
      "scenario": "寵物要成立自治區，人類只能受邀進入。",
      "question": "你們支持嗎？",
      "twist": "",
      "deeperQuestion": "牠們仍要求人類送食物呢？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v3-party-057",
    "category": "Party",
    "emoji": "🎉",
    "title": "Wish raffle",
    "scenario": "One person's wish wins a raffle, but everyone pays its cost.",
    "question": "Would you join?",
    "twist": "",
    "deeperQuestion": "Must the costs be revealed before drawing?",
    "zh": {
      "title": "願望抽獎",
      "scenario": "每人寫一個願望，只抽中一人，但大家一起付代價。",
      "question": "你們願意參加嗎？",
      "twist": "",
      "deeperQuestion": "要先公開代價才抽嗎？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v3-party-058",
    "category": "Party",
    "emoji": "🎉",
    "title": "Island laws",
    "scenario": "Your group receives an island with only three laws.",
    "question": "What would you protect first?",
    "twist": "",
    "deeperQuestion": "Which law could newcomers change?",
    "zh": {
      "title": "秘密小島法律",
      "scenario": "你們得到一座小島，只能訂三條法律。",
      "question": "你最想保護甚麼？",
      "twist": "",
      "deeperQuestion": "哪條法律可以讓新人修改？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v3-party-059",
    "category": "Party",
    "emoji": "🎉",
    "title": "Bear millionaire",
    "scenario": "A wealthy bear buys everyone's jobs so the village can rest.",
    "question": "Would you support it?",
    "twist": "",
    "deeperQuestion": "What could someone who still wants to work do?",
    "zh": {
      "title": "小熊富豪",
      "scenario": "小熊中了巨獎，想把全村工作都買下讓大家休息。",
      "question": "你們會支持嗎？",
      "twist": "",
      "deeperQuestion": "還想工作的人可以怎樣做？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v3-party-060",
    "category": "Party",
    "emoji": "🎉",
    "title": "Bad-luck wheel",
    "scenario": "One person can take the group's bad luck for a year.",
    "question": "Would you choose by lottery?",
    "twist": "",
    "deeperQuestion": "Would volunteering make it acceptable?",
    "zh": {
      "title": "倒楣輪盤",
      "scenario": "一人承受小組所有倒楣，其他人就順利一年。",
      "question": "你們會用抽籤選嗎？",
      "twist": "",
      "deeperQuestion": "有人自願就可以嗎？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v3-party-061",
    "category": "Party",
    "emoji": "🎉",
    "title": "Good-person badge",
    "scenario": "Badges count good deeds but hide motives.",
    "question": "Would you use them to choose teammates?",
    "twist": "",
    "deeperQuestion": "Do deeds done for the badge count?",
    "zh": {
      "title": "好人徽章",
      "scenario": "徽章會顯示一人做過多少好事，但不顯示原因。",
      "question": "你們會用來選隊友嗎？",
      "twist": "",
      "deeperQuestion": "為拿徽章而做的好事算嗎？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v3-party-062",
    "category": "Party",
    "emoji": "🎉",
    "title": "Angry park",
    "scenario": "A littered park wants to admit only well-behaved visitors.",
    "question": "Would you grant that right?",
    "twist": "",
    "deeperQuestion": "How could someone earn another chance?",
    "zh": {
      "title": "會生氣的公園",
      "scenario": "公園厭倦被弄髒，想只讓守規矩的人進去。",
      "question": "你們會給它這個權利嗎？",
      "twist": "",
      "deeperQuestion": "犯過錯的人怎樣重新入場？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v3-party-063",
    "category": "Party",
    "emoji": "🎉",
    "title": "Different endings",
    "scenario": "You watch a film together but each sees a different desired ending.",
    "question": "Is it a shared experience?",
    "twist": "",
    "deeperQuestion": "Would you swap endings for another viewing?",
    "zh": {
      "title": "一人一個結局",
      "scenario": "你們同看一部電影，每人只會看見自己最想要的結局。",
      "question": "看完還算一起看嗎？",
      "twist": "",
      "deeperQuestion": "你們想交換結局再看嗎？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v3-party-064",
    "category": "Party",
    "emoji": "🎉",
    "title": "Slow day",
    "scenario": "You can slow the town for a day, delaying every order.",
    "question": "Would you press it?",
    "twist": "",
    "deeperQuestion": "Should urgent needs be exceptions?",
    "zh": {
      "title": "全城慢一天",
      "scenario": "你們能讓全城慢下來一天，但所有訂單都延遲。",
      "question": "你們會按嗎？",
      "twist": "",
      "deeperQuestion": "急用東西的人應該有例外嗎？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v3-party-065",
    "category": "Party",
    "emoji": "🎉",
    "title": "Naming the moon",
    "scenario": "A donor will clear the town's debts if the moon takes their name.",
    "question": "Would you agree?",
    "twist": "",
    "deeperQuestion": "What if the name is a brand?",
    "zh": {
      "title": "月亮冠名",
      "scenario": "有人願意替小鎮付清欠款，條件是月亮改成他的名字。",
      "question": "你們會答應嗎？",
      "twist": "",
      "deeperQuestion": "如果名字只是廣告品牌呢？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v3-party-066",
    "category": "Party",
    "emoji": "🎉",
    "title": "Shared shoes",
    "scenario": "Wearing another's shoes for an hour reveals their life's weight.",
    "question": "Who would swap first?",
    "twist": "",
    "deeperQuestion": "Could you take them off early if overwhelmed?",
    "zh": {
      "title": "同一雙鞋",
      "scenario": "你們各穿一小時別人的魔法鞋，就會感受到他的生活重量。",
      "question": "誰先交換？",
      "twist": "",
      "deeperQuestion": "感到太重時可以提早脫嗎？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v3-party-067",
    "category": "Party",
    "emoji": "🎉",
    "title": "Last wish",
    "scenario": "A fairy has one wish left; everyone proposes one but cannot vote for themselves.",
    "question": "Whom would you support?",
    "twist": "",
    "deeperQuestion": "Should the least popular wish get more time?",
    "zh": {
      "title": "最後的願望",
      "scenario": "精靈只餘一個願望，你們能各提一案但不能投自己。",
      "question": "你會支持誰？",
      "twist": "",
      "deeperQuestion": "最少人支持的願望值得聽多一點嗎？"
    },
    "groupSize": "medium"
  },
  {
    "id": "ponder-v3-party-068",
    "category": "Party",
    "emoji": "🎉",
    "title": "Memories or coins",
    "scenario": "Everyone chooses a bag of coins or reliving a happy afternoon.",
    "question": "Which side are you on?",
    "twist": "",
    "deeperQuestion": "Ask one person per side what they hope to gain.",
    "zh": {
      "title": "記憶還是金幣",
      "scenario": "全場選：拿一袋金幣，或重過一個快樂下午。",
      "question": "你站哪邊？",
      "twist": "",
      "deeperQuestion": "兩邊各請一人講最想換到甚麼。"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v3-party-069",
    "category": "Party",
    "emoji": "🎉",
    "title": "Flight or invisibility",
    "scenario": "Magic offers flight or invisibility.",
    "question": "Everyone picks together; which is yours?",
    "twist": "",
    "deeperQuestion": "Each side share one use unrelated to money.",
    "zh": {
      "title": "飛行還是隱形",
      "scenario": "魔法只送一種能力：飛行或隱形。",
      "question": "大家同時選，你選哪個？",
      "twist": "",
      "deeperQuestion": "各邊分享一個不為賺錢的用途。"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v3-party-070",
    "category": "Party",
    "emoji": "🎉",
    "title": "Endless spring",
    "scenario": "The town votes on endless spring at the cost of snow.",
    "question": "Would you vote yes?",
    "twist": "",
    "deeperQuestion": "Ask someone in the minority what they want to keep.",
    "zh": {
      "title": "永遠春天",
      "scenario": "全城投票要不要永遠春天，代價是再沒有雪。",
      "question": "你投贊成嗎？",
      "twist": "",
      "deeperQuestion": "請一位少數派講想保留甚麼。"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v3-party-071",
    "category": "Party",
    "emoji": "🎉",
    "title": "Dreams or luck",
    "scenario": "Choose a hat for lovely dreams or good daytime luck.",
    "question": "Which would you wear?",
    "twist": "",
    "deeperQuestion": "What would make you change hats?",
    "zh": {
      "title": "好夢還是好運",
      "scenario": "每人選一頂帽：夜夜好夢，或白天小事順利。",
      "question": "你戴哪頂？",
      "twist": "",
      "deeperQuestion": "甚麼條件會令你換帽？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v3-party-072",
    "category": "Party",
    "emoji": "🎉",
    "title": "Dragon teams",
    "scenario": "A dragon joins only people who let it fly away freely.",
    "question": "Discuss in teams: would you adopt it?",
    "twist": "",
    "deeperQuestion": "Each team offer one promise that does not trap it.",
    "zh": {
      "title": "小龍分隊",
      "scenario": "小龍只跟願意讓牠自由飛走的人回家。",
      "question": "分組商量，你們會領養嗎？",
      "twist": "",
      "deeperQuestion": "每組說一條不綁住牠的約定。"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v3-party-073",
    "category": "Party",
    "emoji": "🎉",
    "title": "Free bread",
    "scenario": "A bakery gives free bread for public admissions of failure.",
    "question": "Who would queue?",
    "twist": "",
    "deeperQuestion": "Would anonymous stories be enough?",
    "zh": {
      "title": "免費麵包",
      "scenario": "麵包店免費送麵包，但每人要公開說一件失敗。",
      "question": "全場誰願意排隊？",
      "twist": "",
      "deeperQuestion": "可以用匿名故事代替嗎？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v3-party-074",
    "category": "Party",
    "emoji": "🎉",
    "title": "Time or money",
    "scenario": "Choose an extra day off or a cash bonus, never both.",
    "question": "Which do you want?",
    "twist": "",
    "deeperQuestion": "First hear someone who chose differently.",
    "zh": {
      "title": "時間還是錢",
      "scenario": "每人選多一天假期或一筆獎金，兩者不能兼得。",
      "question": "你想要哪個？",
      "twist": "",
      "deeperQuestion": "先聽跟你不同選擇的人說原因。"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v3-party-075",
    "category": "Party",
    "emoji": "🎉",
    "title": "Honest town",
    "scenario": "Everyone considers moving to a town where lying is impossible.",
    "question": "Would you move?",
    "twist": "",
    "deeperQuestion": "Each side name one situation that worries you.",
    "zh": {
      "title": "不會說謊的鎮",
      "scenario": "全場決定要不要搬進不能說謊的小鎮。",
      "question": "你會搬嗎？",
      "twist": "",
      "deeperQuestion": "每邊各提一個你擔心的場面。"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v3-party-076",
    "category": "Party",
    "emoji": "🎉",
    "title": "One star each",
    "scenario": "Everyone can light a star for a stranger, never themselves.",
    "question": "Who would yours be for?",
    "twist": "",
    "deeperQuestion": "Did anyone's answer change your choice?",
    "zh": {
      "title": "每人一顆星",
      "scenario": "每人能替陌生人點亮一顆星，但不能替自己。",
      "question": "你想給哪種人？",
      "twist": "",
      "deeperQuestion": "有誰的答案讓你想改選？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v3-party-077",
    "category": "Party",
    "emoji": "🎉",
    "title": "Island teams",
    "scenario": "Teams found islands named for their most important value.",
    "question": "What is yours called?",
    "twist": "",
    "deeperQuestion": "Could someone who disagrees live there?",
    "zh": {
      "title": "小島隊名",
      "scenario": "分組建立一座小島，名字必須代表最重要的一個價值。",
      "question": "你們叫甚麼？",
      "twist": "",
      "deeperQuestion": "不同意那價值的人能住嗎？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v3-party-078",
    "category": "Party",
    "emoji": "🎉",
    "title": "Slow or fast",
    "scenario": "Choose a free slow train or a paid fast one to the same place.",
    "question": "Which would you board?",
    "twist": "",
    "deeperQuestion": "What if your friends take the other?",
    "zh": {
      "title": "慢車快車",
      "scenario": "大家選免費慢車或付錢快車，目的地相同。",
      "question": "你上哪班？",
      "twist": "",
      "deeperQuestion": "如果朋友都在另一班呢？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v3-party-079",
    "category": "Party",
    "emoji": "🎉",
    "title": "See ahead",
    "scenario": "Vote for knowing tomorrow completely or keeping every surprise.",
    "question": "Which side are you on?",
    "twist": "",
    "deeperQuestion": "Would being able to change it alter your vote?",
    "zh": {
      "title": "看見未來",
      "scenario": "全場舉手選：知道明天所有事，或完全保留驚喜。",
      "question": "你選哪邊？",
      "twist": "",
      "deeperQuestion": "知道了還可以改，會換邊嗎？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v3-party-080",
    "category": "Party",
    "emoji": "🎉",
    "title": "Magic gifts",
    "scenario": "Each team gives a gift box to the hardest-working, neediest or luckiest person.",
    "question": "Which rule wins?",
    "twist": "",
    "deeperQuestion": "Would those left out accept the reason?",
    "zh": {
      "title": "魔法禮物箱",
      "scenario": "每組一箱禮物，要選送給最努力、最需要或最幸運的人。",
      "question": "你們選誰？",
      "twist": "",
      "deeperQuestion": "收不到的人會接受你們的理由嗎？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v3-party-081",
    "category": "Party",
    "emoji": "🎉",
    "title": "Panda leave",
    "scenario": "A zoo panda wants a year's holiday, disappointing visitors.",
    "question": "Would you approve?",
    "twist": "",
    "deeperQuestion": "What should happen for people holding tickets?",
    "zh": {
      "title": "熊貓請假",
      "scenario": "動物園熊貓想放一年假，遊客會失望。",
      "question": "大家投票准不准？",
      "twist": "",
      "deeperQuestion": "票已買好的人應該怎樣安排？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v3-party-082",
    "category": "Party",
    "emoji": "🎉",
    "title": "Clear wallets",
    "scenario": "Wallets can display how much money you have.",
    "question": "Choose public or hidden; which is yours?",
    "twist": "",
    "deeperQuestion": "Would you change it when treating others?",
    "zh": {
      "title": "透明錢包",
      "scenario": "錢包會顯示你有多少錢，全場選公開或隱藏。",
      "question": "你選哪個？",
      "twist": "",
      "deeperQuestion": "請客時你會想換設定嗎？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v3-party-083",
    "category": "Party",
    "emoji": "🎉",
    "title": "Town statue",
    "scenario": "Teams choose a statue for a hero, carer or ordinary resident.",
    "question": "Who deserves it?",
    "twist": "",
    "deeperQuestion": "Would changing it yearly be fairer?",
    "zh": {
      "title": "小鎮雕像",
      "scenario": "分組替小鎮選雕像：英雄、照顧者或普通居民。",
      "question": "你們會選誰？",
      "twist": "",
      "deeperQuestion": "每年輪換會更公平嗎？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v3-party-084",
    "category": "Party",
    "emoji": "🎉",
    "title": "Hour of power",
    "scenario": "Everyone gets an hour of power to help someone else.",
    "question": "What would you do?",
    "twist": "",
    "deeperQuestion": "Would you ask first or surprise them?",
    "zh": {
      "title": "一小時超能力",
      "scenario": "全場每人有一小時超能力，但必須用來幫另一人。",
      "question": "你會做甚麼？",
      "twist": "",
      "deeperQuestion": "先問對方要不要，還是直接驚喜？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v3-party-085",
    "category": "Party",
    "emoji": "🎉",
    "title": "Happy colours",
    "scenario": "Each person chooses an emotional colour the town can feel.",
    "question": "Which would you choose?",
    "twist": "",
    "deeperQuestion": "Could one area remain unaffected?",
    "zh": {
      "title": "快樂顏色",
      "scenario": "每人選一種能讓全城感受的情緒顏色。",
      "question": "你會選甚麼？",
      "twist": "",
      "deeperQuestion": "可以留一區不受影響嗎？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v3-party-086",
    "category": "Party",
    "emoji": "🎉",
    "title": "Forgiving door",
    "scenario": "A city gate forgives every first mistake.",
    "question": "Would you support the rule?",
    "twist": "",
    "deeperQuestion": "First hear what opponents worry about.",
    "zh": {
      "title": "會原諒的門",
      "scenario": "城門會原諒所有第一次犯錯的人。",
      "question": "全場支持還是反對？",
      "twist": "",
      "deeperQuestion": "先聽反對的人擔心甚麼。"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v3-party-087",
    "category": "Party",
    "emoji": "🎉",
    "title": "Keep or release",
    "scenario": "Choose keeping all memories or erasing the saddest one.",
    "question": "Which would you choose?",
    "twist": "",
    "deeperQuestion": "Without sharing the event, say what you want to protect.",
    "zh": {
      "title": "記住還是放下",
      "scenario": "每人選保留全部回憶，或刪走最難過的一段。",
      "question": "你會選哪個？",
      "twist": "",
      "deeperQuestion": "不用說經歷，只說你想保住甚麼。"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v3-party-088",
    "category": "Party",
    "emoji": "🎉",
    "title": "Free mansion",
    "scenario": "A mansion is free if strangers tour it daily.",
    "question": "Would you move in?",
    "twist": "",
    "deeperQuestion": "Would one hour daily change your vote?",
    "zh": {
      "title": "免費豪宅",
      "scenario": "豪宅免費，但每天要讓陌生人參觀。",
      "question": "大家想住還是不想住？",
      "twist": "",
      "deeperQuestion": "每天只開放一小時會換邊嗎？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v3-party-089",
    "category": "Party",
    "emoji": "🎉",
    "title": "Cloud studio",
    "scenario": "Teams open cloud shops; each coin earned consumes a cloud.",
    "question": "What would you sell?",
    "twist": "",
    "deeperQuestion": "Would you cap daily earnings?",
    "zh": {
      "title": "雲上工作室",
      "scenario": "分組開一間雲上店，每賺一元就少一朵雲。",
      "question": "你們會賣甚麼？",
      "twist": "",
      "deeperQuestion": "你們會訂每天收入上限嗎？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v3-party-090",
    "category": "Party",
    "emoji": "🎉",
    "title": "Monster names",
    "scenario": "Teams name a misunderstood monster to help people approach it.",
    "question": "What name would you choose?",
    "twist": "",
    "deeperQuestion": "Could it reject a name it dislikes?",
    "zh": {
      "title": "小妖怪的名字",
      "scenario": "每組替怕被誤會的小妖怪取名，讓人願意靠近。",
      "question": "你們取甚麼？",
      "twist": "",
      "deeperQuestion": "牠不喜歡名字時可以拒絕嗎？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v3-party-091",
    "category": "Party",
    "emoji": "🎉",
    "title": "Free forever",
    "scenario": "Your group can make one thing free forever.",
    "question": "What would you nominate?",
    "twist": "",
    "deeperQuestion": "Who benefits most, and who might bear the cost?",
    "zh": {
      "title": "最重要的免費物",
      "scenario": "全場只能讓一樣東西永遠免費。",
      "question": "每人提一案，你會提甚麼？",
      "twist": "",
      "deeperQuestion": "誰最受惠，誰可能付出代價？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v3-party-092",
    "category": "Party",
    "emoji": "🎉",
    "title": "Friend portal",
    "scenario": "A portal visits friends at the cost of a holiday day each time.",
    "question": "How often would you use it?",
    "twist": "",
    "deeperQuestion": "Would distance change your choice?",
    "zh": {
      "title": "友情傳送門",
      "scenario": "傳送門能見朋友，但每次會扣一天假期。",
      "question": "大家願意用多常？",
      "twist": "",
      "deeperQuestion": "遠方的朋友跟同城朋友有不同嗎？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v3-party-093",
    "category": "Party",
    "emoji": "🎉",
    "title": "Bear's trophy",
    "scenario": "A bear finishes last despite trying hardest.",
    "question": "Vote on a special award; what is your vote?",
    "twist": "",
    "deeperQuestion": "What name would make it feel sincere?",
    "zh": {
      "title": "小熊的獎盃",
      "scenario": "小熊最後一名卻最努力，大家投票要不要頒特別獎。",
      "question": "你投甚麼？",
      "twist": "",
      "deeperQuestion": "獎叫甚麼才不會像安慰？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v3-party-094",
    "category": "Party",
    "emoji": "🎉",
    "title": "Free mind-reading",
    "scenario": "Choose a day of mind-reading, knowing others can read you too.",
    "question": "Would you accept?",
    "twist": "",
    "deeperQuestion": "Whom would you speak to first?",
    "zh": {
      "title": "免費讀心",
      "scenario": "全場同時決定要不要讀心一天，選了也會被讀。",
      "question": "你會選嗎？",
      "twist": "",
      "deeperQuestion": "你會先找誰聊天？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v3-party-095",
    "category": "Party",
    "emoji": "🎉",
    "title": "Ideal park",
    "scenario": "Teams add one feature to a park without buying their way out of disagreement.",
    "question": "What would you add?",
    "twist": "",
    "deeperQuestion": "Whose needs are easiest to overlook?",
    "zh": {
      "title": "理想公園",
      "scenario": "每組只能替公園加一樣設施，不能用錢解決爭議。",
      "question": "你們加甚麼？",
      "twist": "",
      "deeperQuestion": "誰的需要最容易被忘記？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v3-party-096",
    "category": "Party",
    "emoji": "🎉",
    "title": "Replace a rule",
    "scenario": "Your group can replace one real rule with a fairy-tale rule.",
    "question": "What would you suggest?",
    "twist": "",
    "deeperQuestion": "Who might face a new problem because of it?",
    "zh": {
      "title": "換掉一條規矩",
      "scenario": "全場能用童話規矩取代一條現實規矩。",
      "question": "你會提議換甚麼？",
      "twist": "",
      "deeperQuestion": "它會替誰帶來新麻煩？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v3-party-097",
    "category": "Party",
    "emoji": "🎉",
    "title": "Moon dinner",
    "scenario": "Dinner on the moon is free, but only volunteer dishwashers can return.",
    "question": "Would you go?",
    "twist": "",
    "deeperQuestion": "Should chores be agreed before leaving?",
    "zh": {
      "title": "月球晚餐",
      "scenario": "大家可免費去月球吃飯，但只有自願洗碗的人能回來。",
      "question": "你還會去嗎？",
      "twist": "",
      "deeperQuestion": "應該出發前就分工嗎？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v3-party-098",
    "category": "Party",
    "emoji": "🎉",
    "title": "One blessing each",
    "scenario": "Give the person to your right courage, stability or freedom.",
    "question": "Which would you choose?",
    "twist": "",
    "deeperQuestion": "Let them say which they actually want.",
    "zh": {
      "title": "一人一個祝福",
      "scenario": "每人替右邊的人選祝福：勇氣、安穩或自由。",
      "question": "你會選哪個？",
      "twist": "",
      "deeperQuestion": "讓對方說他其實想要哪個。"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v3-party-099",
    "category": "Party",
    "emoji": "🎉",
    "title": "Going-home gift",
    "scenario": "Leaving tonight, choose money, a memory or a new friend's understanding.",
    "question": "What would you take?",
    "twist": "",
    "deeperQuestion": "Whose choice surprised you?",
    "zh": {
      "title": "回家紀念品",
      "scenario": "散場時只能帶走錢、回憶或一位新朋友的理解。",
      "question": "你會拿甚麼？",
      "twist": "",
      "deeperQuestion": "有誰的選擇跟你想像不同？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v3-party-100",
    "category": "Party",
    "emoji": "🎉",
    "title": "Monster runner-up",
    "scenario": "A monster contest gives money to the winner and a friends' trip to second place.",
    "question": "Which rank would you want?",
    "twist": "",
    "deeperQuestion": "Would you slow down to let a friend win?",
    "zh": {
      "title": "怪獸的第二名",
      "scenario": "怪獸比賽的冠軍能拿錢，第二名能帶所有朋友旅行。",
      "question": "全場想爭第幾？",
      "twist": "",
      "deeperQuestion": "你會故意放慢讓朋友拿第一嗎？"
    },
    "groupSize": "large"
  },
  {
    "id": "ponder-v3-solo-001",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Pocket planet",
    "scenario": "A pocket planet holds three things that make you feel safe.",
    "question": "What would you put there?",
    "twist": "",
    "deeperQuestion": "Which would you release if one had to go?",
    "zh": {
      "title": "口袋星球",
      "scenario": "你口袋裡有一顆小星球，只能放三樣讓你安心的東西。",
      "question": "你會放甚麼？",
      "twist": "",
      "deeperQuestion": "其中一樣必須送走時，你選哪樣？"
    }
  },
  {
    "id": "ponder-v3-solo-002",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Worry plant",
    "scenario": "Each worry becomes a plant, and some have bloomed.",
    "question": "Which would you pull out?",
    "twist": "",
    "deeperQuestion": "Which would you leave to see what happens?",
    "zh": {
      "title": "煩惱盆栽",
      "scenario": "每個煩惱會長成一棵植物，有些已經開花。",
      "question": "你會拔掉哪棵？",
      "twist": "",
      "deeperQuestion": "有哪棵你想先留著看看？"
    }
  },
  {
    "id": "ponder-v3-solo-003",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Future post",
    "scenario": "Your future self sends a letter; you may read only its first line.",
    "question": "What do you hope it says?",
    "twist": "",
    "deeperQuestion": "Would “Take your time” be enough?",
    "zh": {
      "title": "未來小郵差",
      "scenario": "未來的你寄來一封信，只准看第一句。",
      "question": "你希望寫著甚麼？",
      "twist": "",
      "deeperQuestion": "如果只是「慢慢來」會夠嗎？"
    }
  },
  {
    "id": "ponder-v3-solo-004",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Unknown town",
    "scenario": "Nobody in this town knows your past.",
    "question": "What is your first sentence introducing yourself?",
    "twist": "",
    "deeperQuestion": "What old name or identity would you keep?",
    "zh": {
      "title": "無人認識的小鎮",
      "scenario": "小鎮沒人知道你的過去，你可以重新介紹自己。",
      "question": "你第一句會說甚麼？",
      "twist": "",
      "deeperQuestion": "你想帶來哪個舊名字或身分？"
    }
  },
  {
    "id": "ponder-v3-solo-005",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Calm machine",
    "scenario": "A machine sells complete peace at the cost of wanting new experiences.",
    "question": "Would you buy it?",
    "twist": "",
    "deeperQuestion": "Would you buy just one night?",
    "zh": {
      "title": "安心售賣機",
      "scenario": "機器賣百分百安心，代價是再不想嘗試新事。",
      "question": "你會買嗎？",
      "twist": "",
      "deeperQuestion": "你願意只買一晚嗎？"
    }
  },
  {
    "id": "ponder-v3-solo-006",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Regret creature",
    "scenario": "A creature fed by your regrets has grown large enough to shelter you.",
    "question": "Would you still send it away?",
    "twist": "",
    "deeperQuestion": "What would you want it to eat from tomorrow?",
    "zh": {
      "title": "後悔小獸",
      "scenario": "一隻小獸靠你的後悔長大，現在已能替你擋風。",
      "question": "你還想趕走牠嗎？",
      "twist": "",
      "deeperQuestion": "你希望牠從明天起吃甚麼？"
    }
  },
  {
    "id": "ponder-v3-solo-007",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Other side of success",
    "scenario": "A mirror shows your successful self but hides the costs.",
    "question": "Would you follow that path?",
    "twist": "",
    "deeperQuestion": "What would you ask that person first?",
    "zh": {
      "title": "成功的另一面",
      "scenario": "鏡子讓你看見成功的自己，卻不顯示付出了甚麼。",
      "question": "你想照著走嗎？",
      "twist": "",
      "deeperQuestion": "你最想先問鏡中人哪件事？"
    }
  },
  {
    "id": "ponder-v3-solo-008",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Daily coin",
    "scenario": "A tree gives a daily coin for naming a dream you will stop chasing.",
    "question": "Would you visit daily?",
    "twist": "",
    "deeperQuestion": "Which dream would you never trade?",
    "zh": {
      "title": "每天一枚金幣",
      "scenario": "樹每天給你一枚金幣，但每次要說出一個不再追的夢。",
      "question": "你會天天去嗎？",
      "twist": "",
      "deeperQuestion": "有哪個夢你不想拿來換？"
    }
  },
  {
    "id": "ponder-v3-solo-009",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Inner lodger",
    "scenario": "Your anxiety becomes a lodger claiming to protect you.",
    "question": "How long would you let it stay?",
    "twist": "",
    "deeperQuestion": "What house rule would you agree on first?",
    "zh": {
      "title": "心裡的房客",
      "scenario": "你的不安變成小房客，總說自己是來保護你。",
      "question": "你會讓牠住多久？",
      "twist": "",
      "deeperQuestion": "你想先跟牠訂哪條同住規則？"
    }
  },
  {
    "id": "ponder-v3-solo-010",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Life fitting room",
    "scenario": "You try three lives for a day each and keep only one feeling.",
    "question": "What would you keep?",
    "twist": "",
    "deeperQuestion": "Could that feeling exist in your current life?",
    "zh": {
      "title": "人生試穿間",
      "scenario": "你能試穿三種人生各一天，離開時只能留一樣感覺。",
      "question": "你想留下甚麼？",
      "twist": "",
      "deeperQuestion": "那份感覺能在現在的生活找到嗎？"
    }
  },
  {
    "id": "ponder-v3-solo-011",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Priced dream",
    "scenario": "Your dream gets an affordable price tag, removing all effort.",
    "question": "Do you still want it?",
    "twist": "",
    "deeperQuestion": "Do you want the result or the path toward it?",
    "zh": {
      "title": "夢想標價",
      "scenario": "你最想要的夢想突然標上可負擔的價錢，買了就不用努力。",
      "question": "你還想要嗎？",
      "twist": "",
      "deeperQuestion": "你期待的是結果，還是走過去的路？"
    }
  },
  {
    "id": "ponder-v3-solo-012",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Invisible medal",
    "scenario": "You receive a medal only you can see.",
    "question": "What should it honour?",
    "twist": "",
    "deeperQuestion": "Is it worth celebrating if nobody knows?",
    "zh": {
      "title": "看不見的獎牌",
      "scenario": "你得到一枚只有自己看得見的獎牌。",
      "question": "你想它表揚哪件事？",
      "twist": "",
      "deeperQuestion": "沒有別人知道，還值得慶祝嗎？"
    }
  },
  {
    "id": "ponder-v3-solo-013",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Time thief",
    "scenario": "A thief steals your daydreaming time and replaces it with productivity.",
    "question": "Would you report them?",
    "twist": "",
    "deeperQuestion": "Which ten minutes would you reclaim first?",
    "zh": {
      "title": "時間小偷",
      "scenario": "小偷偷走你的發呆時間，換成完成更多事情。",
      "question": "你會報警嗎？",
      "twist": "",
      "deeperQuestion": "你想先拿回哪十分鐘？"
    }
  },
  {
    "id": "ponder-v3-solo-014",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Refusing shadow",
    "scenario": "Your shadow refuses everything you do not want to agree to.",
    "question": "Would you let it speak?",
    "twist": "",
    "deeperQuestion": "Whom would you fear it refusing?",
    "zh": {
      "title": "會拒絕的影子",
      "scenario": "影子會替你拒絕所有不想答應的事。",
      "question": "你會讓它開口嗎？",
      "twist": "",
      "deeperQuestion": "你最怕它拒絕誰？"
    }
  },
  {
    "id": "ponder-v3-solo-015",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Unfinished museum",
    "scenario": "Your unfinished projects become exhibits, some unexpectedly beautiful.",
    "question": "Which would you display?",
    "twist": "",
    "deeperQuestion": "Would you finish it or leave it as it is?",
    "zh": {
      "title": "未完成博物館",
      "scenario": "你沒完成的事都變成展品，有些意外地美。",
      "question": "你想展出哪件？",
      "twist": "",
      "deeperQuestion": "你仍想完成它，還是這樣就好？"
    }
  },
  {
    "id": "ponder-v3-solo-016",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Someone's script",
    "scenario": "You discover someone else wrote your life script; you may change one page.",
    "question": "Which page?",
    "twist": "",
    "deeperQuestion": "Which original line would you keep?",
    "zh": {
      "title": "別人的劇本",
      "scenario": "你發現人生劇本是別人替你寫的，現在可改一頁。",
      "question": "你會改哪頁？",
      "twist": "",
      "deeperQuestion": "你想保留哪句原本的台詞？"
    }
  },
  {
    "id": "ponder-v3-solo-017",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Lost-wish office",
    "scenario": "A lost-property office finds a childhood wish and asks whether you still want it.",
    "question": "Would you collect it?",
    "twist": "",
    "deeperQuestion": "Would you feel guilty for no longer wanting it?",
    "zh": {
      "title": "心願失物處",
      "scenario": "失物處找回你小時候遺失的願望，問你還要不要。",
      "question": "你會領回嗎？",
      "twist": "",
      "deeperQuestion": "你會因為不再想要而內疚嗎？"
    }
  },
  {
    "id": "ponder-v3-solo-018",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Courage rental",
    "scenario": "Courage can be rented for a day; afterwards you remember what you did.",
    "question": "What would you do?",
    "twist": "",
    "deeperQuestion": "Would you hope to do it without renting next time?",
    "zh": {
      "title": "勇氣只租不賣",
      "scenario": "勇氣可以租一天，退還後會記得自己做到過。",
      "question": "你想用來做甚麼？",
      "twist": "",
      "deeperQuestion": "你希望下次不用再租也敢嗎？"
    }
  },
  {
    "id": "ponder-v3-solo-019",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Always enough",
    "scenario": "Magic makes what you have always feel enough, removing the desire for more.",
    "question": "Would you accept?",
    "twist": "",
    "deeperQuestion": "Would you worry about stopping?",
    "zh": {
      "title": "永遠剛剛好",
      "scenario": "魔法讓你永遠覺得擁有的剛剛好，但再也不渴望更多。",
      "question": "你願意嗎？",
      "twist": "",
      "deeperQuestion": "你會怕因此停下來嗎？"
    }
  },
  {
    "id": "ponder-v3-solo-020",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Secret name",
    "scenario": "Everyone has an unspoken name for their truest self.",
    "question": "What might yours sound like?",
    "twist": "",
    "deeperQuestion": "Whom would you let use it?",
    "zh": {
      "title": "秘密名字",
      "scenario": "每人心裡都有一個沒被叫過的名字，代表最真的自己。",
      "question": "你的名字像甚麼？",
      "twist": "",
      "deeperQuestion": "你願意讓誰用它叫你？"
    }
  },
  {
    "id": "ponder-v3-solo-021",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Bad-luck collection",
    "scenario": "Bad luck can be bottled; ten bottles buy one lucky break.",
    "question": "Would you keep them?",
    "twist": "",
    "deeperQuestion": "What would you spend the lucky break on?",
    "zh": {
      "title": "壞運氣收藏",
      "scenario": "壞運氣能裝瓶收藏，十瓶換一次大好運。",
      "question": "你會保留它們嗎？",
      "twist": "",
      "deeperQuestion": "你想把好運用在哪件事？"
    }
  },
  {
    "id": "ponder-v3-solo-022",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Memory salon",
    "scenario": "A salon gives your favourite hairstyle by trimming a memory.",
    "question": "Would you sit down?",
    "twist": "",
    "deeperQuestion": "Would you agree if it removes only embarrassment?",
    "zh": {
      "title": "回憶剪髮店",
      "scenario": "剪掉一段回憶，頭髮就變成你最喜歡的樣子。",
      "question": "你會坐下嗎？",
      "twist": "",
      "deeperQuestion": "如果只剪掉尷尬，你願意嗎？"
    }
  },
  {
    "id": "ponder-v3-solo-023",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Confidence coat",
    "scenario": "A coat makes everyone trust you, even when you doubt your ability.",
    "question": "Would you wear it to an interview?",
    "twist": "",
    "deeperQuestion": "Would you disclose your limitations?",
    "zh": {
      "title": "自信外套",
      "scenario": "外套讓所有人信任你，但你知道自己未必做得到。",
      "question": "你會穿去面試嗎？",
      "twist": "",
      "deeperQuestion": "你會主動說出自己的不足嗎？"
    }
  },
  {
    "id": "ponder-v3-solo-024",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Another path",
    "scenario": "You can see the life path you did not choose but cannot return to it.",
    "question": "Would you look?",
    "twist": "",
    "deeperQuestion": "How would you care for yourself if it looks better?",
    "zh": {
      "title": "另一條小路",
      "scenario": "你能看見沒選的那條人生路，卻不能回去。",
      "question": "你想看嗎？",
      "twist": "",
      "deeperQuestion": "看到更好的人生，你會怎樣照顧現在的自己？"
    }
  },
  {
    "id": "ponder-v3-solo-025",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Tiny retirement",
    "scenario": "You can retire early to a comfortable village where nobody needs your help.",
    "question": "Would you go?",
    "twist": "",
    "deeperQuestion": "Would you seek a role or enjoy the quiet?",
    "zh": {
      "title": "小小退休",
      "scenario": "你能提早退休到童話村，生活舒服但再沒人需要你幫忙。",
      "question": "你會去嗎？",
      "twist": "",
      "deeperQuestion": "你會想找事情做，還是享受清閒？"
    }
  },
  {
    "id": "ponder-v3-solo-026",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Feeling wardrobe",
    "scenario": "You can wear one mood daily, but the old feeling waits underneath.",
    "question": "What would you wear today?",
    "twist": "",
    "deeperQuestion": "Would you face the original feeling that evening?",
    "zh": {
      "title": "情緒衣櫃",
      "scenario": "你能每天挑一種心情穿上，但脫下後原本心情仍在。",
      "question": "你今天挑甚麼？",
      "twist": "",
      "deeperQuestion": "晚上你願意看一看原本的心情嗎？"
    }
  },
  {
    "id": "ponder-v3-solo-027",
    "category": "Solo",
    "emoji": "🌿",
    "title": "One window",
    "scenario": "Your home has one window facing past, present or future.",
    "question": "Which direction would you choose?",
    "twist": "",
    "deeperQuestion": "Would you add curtains?",
    "zh": {
      "title": "只剩一扇窗",
      "scenario": "你的房子只准留一扇窗，可望向過去、現在或未來。",
      "question": "你會朝哪邊？",
      "twist": "",
      "deeperQuestion": "你會替它裝窗簾嗎？"
    }
  },
  {
    "id": "ponder-v3-solo-028",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Forget scores",
    "scenario": "The world forgets your achievements but remembers how being with you feels.",
    "question": "Would you feel relieved?",
    "twist": "",
    "deeperQuestion": "Which achievement would you most miss being known for?",
    "zh": {
      "title": "忘掉成績",
      "scenario": "世界忘記你所有成績，但仍記得跟你相處的感覺。",
      "question": "你會鬆一口氣嗎？",
      "twist": "",
      "deeperQuestion": "你最捨不得哪個成績被忘記？"
    }
  },
  {
    "id": "ponder-v3-solo-029",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Wish sun",
    "scenario": "Your ambition becomes a sun that grows hotter with effort, drying your garden.",
    "question": "Would you dim it?",
    "twist": "",
    "deeperQuestion": "What in the garden would you protect?",
    "zh": {
      "title": "願望太陽",
      "scenario": "你的願望變成太陽，越努力就越熱，快把花園曬乾。",
      "question": "你會調暗嗎？",
      "twist": "",
      "deeperQuestion": "花園裡有甚麼你不想曬壞？"
    }
  },
  {
    "id": "ponder-v3-solo-030",
    "category": "Solo",
    "emoji": "🌿",
    "title": "No-explanation pass",
    "scenario": "You have a pass allowing one choice without explaining yourself.",
    "question": "What would you use it for?",
    "twist": "",
    "deeperQuestion": "Could you make that choice without the pass?",
    "zh": {
      "title": "不必解釋券",
      "scenario": "你有一張不用向任何人解釋的通行證。",
      "question": "你最想用在哪件事？",
      "twist": "",
      "deeperQuestion": "沒有通行證，你也有權這樣選嗎？"
    }
  },
  {
    "id": "ponder-v3-solo-031",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Inner shop",
    "scenario": "You open a shop selling only what you treasure.",
    "question": "What is its first item?",
    "twist": "",
    "deeperQuestion": "What would you display but never sell?",
    "zh": {
      "title": "心裡的小店",
      "scenario": "你開一家只賣自己珍惜之物的小店。",
      "question": "第一件商品是甚麼？",
      "twist": "",
      "deeperQuestion": "有甚麼你會展示但不出售？"
    }
  },
  {
    "id": "ponder-v3-solo-032",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Likeable mask",
    "scenario": "A mask makes everyone like you; removing it erases their memories together.",
    "question": "How long would you wear it?",
    "twist": "",
    "deeperQuestion": "Who should first meet you without it?",
    "zh": {
      "title": "被喜歡的面具",
      "scenario": "面具讓所有人喜歡你，摘下後他們會忘記相處。",
      "question": "你想戴多久？",
      "twist": "",
      "deeperQuestion": "你想讓誰先見到沒面具的你？"
    }
  },
  {
    "id": "ponder-v3-solo-033",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Dream ceiling",
    "scenario": "Your ceiling rises with your dreams, making everyday repairs harder.",
    "question": "How high should it go?",
    "twist": "",
    "deeperQuestion": "Would you lower it for everyday ease?",
    "zh": {
      "title": "夢的天花板",
      "scenario": "天花板會隨夢想升高，卻讓你更難換燈泡。",
      "question": "你希望它升多高？",
      "twist": "",
      "deeperQuestion": "你願意為日常方便調低一點嗎？"
    }
  },
  {
    "id": "ponder-v3-solo-034",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Save today",
    "scenario": "You can save a moment from today, replaying it without new discoveries.",
    "question": "Which moment?",
    "twist": "",
    "deeperQuestion": "Could an ordinary moment be worth saving?",
    "zh": {
      "title": "今天存檔",
      "scenario": "今天能永久存檔，日後重播不會再有新發現。",
      "question": "你想存哪一刻？",
      "twist": "",
      "deeperQuestion": "普通的一刻也值得存嗎？"
    }
  },
  {
    "id": "ponder-v3-solo-035",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Pressure porter",
    "scenario": "A porter carries all your pressure but chooses your direction too.",
    "question": "Would you hire them?",
    "twist": "",
    "deeperQuestion": "Which decision would you keep for yourself?",
    "zh": {
      "title": "壓力搬運工",
      "scenario": "搬運工能替你背所有壓力，但也替你決定方向。",
      "question": "你會雇他嗎？",
      "twist": "",
      "deeperQuestion": "你想留下哪個決定權？"
    }
  },
  {
    "id": "ponder-v3-solo-036",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Yesterday apologizes",
    "scenario": "Yesterday becomes a person and apologizes for not caring for you well.",
    "question": "What would you say?",
    "twist": "",
    "deeperQuestion": "Would you invite them to sit and rest?",
    "zh": {
      "title": "會道歉的昨天",
      "scenario": "昨天變成人，來為沒照顧好你道歉。",
      "question": "你想對他說甚麼？",
      "twist": "",
      "deeperQuestion": "你會讓他坐下休息嗎？"
    }
  },
  {
    "id": "ponder-v3-solo-037",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Joy compass",
    "scenario": "A compass points only to joy, never duty.",
    "question": "Would you carry it?",
    "twist": "",
    "deeperQuestion": "When would you choose not to follow?",
    "zh": {
      "title": "快樂指南針",
      "scenario": "指南針只指向快樂，不指向責任。",
      "question": "你會帶它出門嗎？",
      "twist": "",
      "deeperQuestion": "你會在哪種時候不跟它走？"
    }
  },
  {
    "id": "ponder-v3-solo-038",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Blank square",
    "scenario": "Your calendar gains an empty space nobody knows about.",
    "question": "How long would you make it?",
    "twist": "",
    "deeperQuestion": "Would you be tempted to fill it?",
    "zh": {
      "title": "一格空白",
      "scenario": "人生行事曆能多出一格沒人知道的空白。",
      "question": "你想留多久？",
      "twist": "",
      "deeperQuestion": "你會忍不住替它安排事情嗎？"
    }
  },
  {
    "id": "ponder-v3-solo-039",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Worry trailer",
    "scenario": "Your worries show trailers, but only one in ten comes true.",
    "question": "Would you watch them all?",
    "twist": "",
    "deeperQuestion": "How would you choose which deserves attention?",
    "zh": {
      "title": "擔心預告片",
      "scenario": "你擔心的事會播預告片，但十部只有一部成真。",
      "question": "你會看完全部嗎？",
      "twist": "",
      "deeperQuestion": "你會怎樣決定哪部值得看？"
    }
  },
  {
    "id": "ponder-v3-solo-040",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Honest mirror",
    "scenario": "A mirror names one strength daily without repeating.",
    "question": "Could you believe it for a year?",
    "twist": "",
    "deeperQuestion": "Which strength might you argue against?",
    "zh": {
      "title": "誠實的小鏡",
      "scenario": "鏡子每天只說一個你的優點，不能重複。",
      "question": "你相信它能說一年嗎？",
      "twist": "",
      "deeperQuestion": "哪個優點你可能會跟它爭辯？"
    }
  },
  {
    "id": "ponder-v3-solo-041",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Remembering shoes",
    "scenario": "Your shoes weigh down with past hardship; replacing them erases your sense of distance travelled.",
    "question": "Would you change them?",
    "twist": "",
    "deeperQuestion": "Could you keep a small memento?",
    "zh": {
      "title": "記住疼痛的鞋",
      "scenario": "鞋記得你走過的辛苦，穿著很重，丟掉卻會忘記自己走多遠。",
      "question": "你會換嗎？",
      "twist": "",
      "deeperQuestion": "你能留下一個小紀念嗎？"
    }
  },
  {
    "id": "ponder-v3-solo-042",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Unseen success",
    "scenario": "You can achieve your greatest goal, but nobody will know.",
    "question": "Would you still want it?",
    "twist": "",
    "deeperQuestion": "How would you celebrate yourself?",
    "zh": {
      "title": "不被看見的成功",
      "scenario": "你能完成最重要的目標，但沒人會知道。",
      "question": "你還想完成嗎？",
      "twist": "",
      "deeperQuestion": "你想怎樣替自己慶祝？"
    }
  },
  {
    "id": "ponder-v3-solo-043",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Slow arrival",
    "scenario": "A train guarantees your desired life without saying how long it takes.",
    "question": "Would you board?",
    "twist": "",
    "deeperQuestion": "Would you get off to explore along the way?",
    "zh": {
      "title": "慢慢到達",
      "scenario": "火車保證帶你去想去的生活，卻不告訴你要多久。",
      "question": "你會上車嗎？",
      "twist": "",
      "deeperQuestion": "途中可以下車看看，你會下嗎？"
    }
  },
  {
    "id": "ponder-v3-solo-044",
    "category": "Solo",
    "emoji": "🌿",
    "title": "No fear of failure",
    "scenario": "A potion removes fear of failure but also your urge to prepare.",
    "question": "How much would you drink?",
    "twist": "",
    "deeperQuestion": "What caution would you keep?",
    "zh": {
      "title": "忘記怕失敗",
      "scenario": "藥水讓你不怕失敗，但也不再事先準備。",
      "question": "你會喝多少？",
      "twist": "",
      "deeperQuestion": "你想保留哪一點小心？"
    }
  },
  {
    "id": "ponder-v3-solo-045",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Lonely light",
    "scenario": "A light shines when you are alone, inviting people to visit.",
    "question": "Would you switch it on?",
    "twist": "",
    "deeperQuestion": "Would being able to switch it off help?",
    "zh": {
      "title": "孤單的燈",
      "scenario": "你獨處時會亮起一盞燈，別人可以選擇來陪。",
      "question": "你想讓燈亮嗎？",
      "twist": "",
      "deeperQuestion": "你能自己關燈會更願意嗎？"
    }
  },
  {
    "id": "ponder-v3-solo-046",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Strength exchange",
    "scenario": "You can trade your greatest strength for what you most envy in others.",
    "question": "Would you trade?",
    "twist": "",
    "deeperQuestion": "What might your friends miss about you?",
    "zh": {
      "title": "交換一個優點",
      "scenario": "你能把最擅長的事換成最羨慕別人的事。",
      "question": "你會交換嗎？",
      "twist": "",
      "deeperQuestion": "原本喜歡你的朋友會想念甚麼？"
    }
  },
  {
    "id": "ponder-v3-solo-047",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Repeated day",
    "scenario": "You can repeat a day until satisfied, remembering every attempt alone.",
    "question": "Which day would you choose?",
    "twist": "",
    "deeperQuestion": "How would you know it is good enough?",
    "zh": {
      "title": "重複的一天",
      "scenario": "你可以重過一天直到滿意，但只有你記得重來幾次。",
      "question": "你會選哪天？",
      "twist": "",
      "deeperQuestion": "你怎樣知道已經夠好了？"
    }
  },
  {
    "id": "ponder-v3-solo-048",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Thought beach",
    "scenario": "Waves carry a thought away, possibly to a stranger.",
    "question": "Which would you release?",
    "twist": "",
    "deeperQuestion": "How would you hope they treat it?",
    "zh": {
      "title": "心事海灘",
      "scenario": "海浪能沖走一個念頭，也能把它帶到陌生人那裡。",
      "question": "你會交出哪個？",
      "twist": "",
      "deeperQuestion": "你會希望那人怎樣對待它？"
    }
  },
  {
    "id": "ponder-v3-solo-049",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Inner judge",
    "scenario": "Your inner critic becomes a tiny judge asking for a job.",
    "question": "What would you assign?",
    "twist": "",
    "deeperQuestion": "What would you keep outside their authority?",
    "zh": {
      "title": "內心小評判",
      "scenario": "腦裡的批評聲變成小評判，要你給他一份工作。",
      "question": "你會安排甚麼？",
      "twist": "",
      "deeperQuestion": "有哪個地方你不讓他管？"
    }
  },
  {
    "id": "ponder-v3-solo-050",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Proof-free door",
    "scenario": "A door admits only people who stop proving themselves.",
    "question": "What would you put down to enter?",
    "twist": "",
    "deeperQuestion": "What pressure might be absent beyond it?",
    "zh": {
      "title": "不需證明的門",
      "scenario": "一扇門只讓不再證明自己的人通過。",
      "question": "你能放下甚麼才進去？",
      "twist": "",
      "deeperQuestion": "你猜門後會少了甚麼壓力？"
    }
  },
  {
    "id": "ponder-v3-solo-051",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Smaller dream",
    "scenario": "A big dream can shrink into something doable today, losing its impressive appearance.",
    "question": "Would you shrink it?",
    "twist": "",
    "deeperQuestion": "Which small version would you try first?",
    "zh": {
      "title": "夢想縮小術",
      "scenario": "你能把大夢縮成今天就能做的小事，卻看起來不再厲害。",
      "question": "你會縮嗎？",
      "twist": "",
      "deeperQuestion": "你想先做哪個小版本？"
    }
  },
  {
    "id": "ponder-v3-solo-052",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Choice echoes",
    "scenario": "After each choice, you hear laughter from the other path.",
    "question": "Would you want that power?",
    "twist": "",
    "deeperQuestion": "Might you overlook the sounds on your own path?",
    "zh": {
      "title": "選擇的回音",
      "scenario": "每次選擇後，你都能聽見沒選那邊的歡笑。",
      "question": "你還想要這種能力嗎？",
      "twist": "",
      "deeperQuestion": "你會忘記自己這邊也有聲音嗎？"
    }
  },
  {
    "id": "ponder-v3-solo-053",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Wish cleaner",
    "scenario": "A cleaner removes wishes other people gave you.",
    "question": "Would you worry about the empty space?",
    "twist": "",
    "deeperQuestion": "What would you put back yourself first?",
    "zh": {
      "title": "心願清潔工",
      "scenario": "清潔工替你掃走別人塞給你的願望。",
      "question": "你擔心地板會變得太空嗎？",
      "twist": "",
      "deeperQuestion": "你想自己放回第一樣甚麼？"
    }
  },
  {
    "id": "ponder-v3-solo-054",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Tomorrow's hero",
    "scenario": "Tomorrow you become a hero; today you are ordinary.",
    "question": "What would you tell tomorrow's you?",
    "twist": "",
    "deeperQuestion": "What ordinary need should they remember?",
    "zh": {
      "title": "明天的勇者",
      "scenario": "你明天會變成勇者，今天仍是普通人。",
      "question": "你想先把甚麼告訴他？",
      "twist": "",
      "deeperQuestion": "你希望他別忘記哪個平凡需要？"
    }
  },
  {
    "id": "ponder-v3-solo-055",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Priced rest",
    "scenario": "Rest turns directly into coins.",
    "question": "Would you still call yourself lazy?",
    "twist": "",
    "deeperQuestion": "Would rest still matter without coins?",
    "zh": {
      "title": "有價的休息",
      "scenario": "休息會直接變成金幣。",
      "question": "你還會覺得自己懶嗎？",
      "twist": "",
      "deeperQuestion": "沒有金幣之後，休息還值得嗎？"
    }
  },
  {
    "id": "ponder-v3-solo-056",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Companion shadow",
    "scenario": "Your shadow wants to stay whether you succeed or fail.",
    "question": "Would you believe it?",
    "twist": "",
    "deeperQuestion": "What would you most want it beside you for?",
    "zh": {
      "title": "會陪你的影子",
      "scenario": "影子說無論你成功與否都想陪你。",
      "question": "你會相信它嗎？",
      "twist": "",
      "deeperQuestion": "你最想讓它陪你面對甚麼？"
    }
  },
  {
    "id": "ponder-v3-solo-057",
    "category": "Solo",
    "emoji": "🌿",
    "title": "No regret",
    "scenario": "You can stop regretting choices but lose the wish to repair them.",
    "question": "Would you accept?",
    "twist": "",
    "deeperQuestion": "Which regret would you keep?",
    "zh": {
      "title": "無法後悔",
      "scenario": "你能不再後悔任何選擇，但也不會想補救。",
      "question": "你會接受嗎？",
      "twist": "",
      "deeperQuestion": "有哪份後悔你想留下？"
    }
  },
  {
    "id": "ponder-v3-solo-058",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Growth tickets",
    "scenario": "Every change leaves a ticket stub while others see only the destination.",
    "question": "Which would you show?",
    "twist": "",
    "deeperQuestion": "Does the journey count without showing it?",
    "zh": {
      "title": "成長的票根",
      "scenario": "每次改變都留下一張票根，別人只看見目的地。",
      "question": "你想展示哪張？",
      "twist": "",
      "deeperQuestion": "不展示也算走過嗎？"
    }
  },
  {
    "id": "ponder-v3-solo-059",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Lend to yesterday",
    "scenario": "Yesterday's you asks for money to avoid a detour.",
    "question": "Would you lend it?",
    "twist": "",
    "deeperQuestion": "What did that detour teach you?",
    "zh": {
      "title": "給昨天借錢",
      "scenario": "昨天的你來借一筆錢，說能少走一段彎路。",
      "question": "你會借嗎？",
      "twist": "",
      "deeperQuestion": "那段彎路教過你甚麼？"
    }
  },
  {
    "id": "ponder-v3-solo-060",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Half perfect",
    "scenario": "You can perfect half your life, leaving the other half unchanged.",
    "question": "Which half?",
    "twist": "",
    "deeperQuestion": "Which imperfection would you leave?",
    "zh": {
      "title": "完美的一半",
      "scenario": "你能把人生一半變得完美，另一半維持原樣。",
      "question": "你想選哪一半？",
      "twist": "",
      "deeperQuestion": "你願意讓哪個不足留下？"
    }
  },
  {
    "id": "ponder-v3-solo-061",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Thought hourglass",
    "scenario": "Thinking about one topic drains an hourglass; when empty, you forget it.",
    "question": "Would you ration your thoughts?",
    "twist": "",
    "deeperQuestion": "What would you least want to use up?",
    "zh": {
      "title": "心事沙漏",
      "scenario": "每天想同一件事會消耗沙漏，沙完就忘記它。",
      "question": "你會節省著想嗎？",
      "twist": "",
      "deeperQuestion": "你最不想把哪件事想完？"
    }
  },
  {
    "id": "ponder-v3-solo-062",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Pocket shelter",
    "scenario": "A tent blocks every demand, but long stays make you forget the exit.",
    "question": "How long would you stay?",
    "twist": "",
    "deeperQuestion": "Whom would you ask to remind you to leave?",
    "zh": {
      "title": "隨身避風港",
      "scenario": "小帳篷能隔絕一切要求，但待久了會忘記怎樣出去。",
      "question": "你想住多久？",
      "twist": "",
      "deeperQuestion": "你會請誰提醒你出來？"
    }
  },
  {
    "id": "ponder-v3-solo-063",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Your own audience",
    "scenario": "You become the only audience for your life performance.",
    "question": "Would you keep the same show?",
    "twist": "",
    "deeperQuestion": "Which scene would you remove first?",
    "zh": {
      "title": "自己的觀眾",
      "scenario": "你的人生表演只剩自己一位觀眾。",
      "question": "你還想演原本那齣戲嗎？",
      "twist": "",
      "deeperQuestion": "你會先刪去哪一幕？"
    }
  },
  {
    "id": "ponder-v3-solo-064",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Borrowed light",
    "scenario": "People borrow your light for warmth, dimming you each time.",
    "question": "When would you stop lending?",
    "twist": "",
    "deeperQuestion": "Who could help you shine again?",
    "zh": {
      "title": "被借走的光",
      "scenario": "別人能借你的光取暖，但每次你會暗一點。",
      "question": "你會借到甚麼時候？",
      "twist": "",
      "deeperQuestion": "誰能幫你重新亮起來？"
    }
  },
  {
    "id": "ponder-v3-solo-065",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Mistake guide",
    "scenario": "Each mistake adds a safe route to your map.",
    "question": "Would that make you try more?",
    "twist": "",
    "deeperQuestion": "What cost would you still avoid?",
    "zh": {
      "title": "錯誤指南",
      "scenario": "每次犯錯，地圖就多一條安全路。",
      "question": "你會因此敢試嗎？",
      "twist": "",
      "deeperQuestion": "你仍會避開哪種代價？"
    }
  },
  {
    "id": "ponder-v3-solo-066",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Useless day",
    "scenario": "A fairy gives you a day that ends when you do anything useful.",
    "question": "How would you spend it?",
    "twist": "",
    "deeperQuestion": "Would you use it up quickly?",
    "zh": {
      "title": "一日不用有用",
      "scenario": "精靈送你一天，做任何有用的事就會結束。",
      "question": "你想怎樣過？",
      "twist": "",
      "deeperQuestion": "你會很快把它用完嗎？"
    }
  },
  {
    "id": "ponder-v3-solo-067",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Wish temperature",
    "scenario": "Every wish has a temperature, some too hot to hold.",
    "question": "Would you grip the hottest one?",
    "twist": "",
    "deeperQuestion": "Would putting it down briefly mean giving up?",
    "zh": {
      "title": "心願溫度",
      "scenario": "每個願望有溫度，有些熱得燙手。",
      "question": "你會握緊最熱的那個嗎？",
      "twist": "",
      "deeperQuestion": "放下一會會等於放棄嗎？"
    }
  },
  {
    "id": "ponder-v3-solo-068",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Misread letter",
    "scenario": "You can send a letter that will never be misunderstood, but only to yourself.",
    "question": "What would you write?",
    "twist": "",
    "deeperQuestion": "Which sentence do you most need to believe?",
    "zh": {
      "title": "被誤解的信",
      "scenario": "你能寄一封永不被誤解的信，但只能寄給自己。",
      "question": "你會寫甚麼？",
      "twist": "",
      "deeperQuestion": "你最需要相信哪一句？"
    }
  },
  {
    "id": "ponder-v3-solo-069",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Beginner badge",
    "scenario": "A badge earns patience for mistakes but removes others' admiration.",
    "question": "Would you wear it?",
    "twist": "",
    "deeperQuestion": "Where would you most want to wear it?",
    "zh": {
      "title": "新手徽章",
      "scenario": "戴上徽章，大家會容許你犯錯，但不會覺得你厲害。",
      "question": "你願意戴嗎？",
      "twist": "",
      "deeperQuestion": "你最想在哪個地方戴？"
    }
  },
  {
    "id": "ponder-v3-solo-070",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Comparison-free eyes",
    "scenario": "New eyes see things themselves but never rankings.",
    "question": "Would you swap?",
    "twist": "",
    "deeperQuestion": "Would choosing become easier or harder?",
    "zh": {
      "title": "不再比較的眼睛",
      "scenario": "新眼睛看不見排名，只看見事物本身。",
      "question": "你想換嗎？",
      "twist": "",
      "deeperQuestion": "你會更容易還是更難選擇？"
    }
  },
  {
    "id": "ponder-v3-solo-071",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Choice island",
    "scenario": "Your island can keep only one “should” each day.",
    "question": "Which would you keep today?",
    "twist": "",
    "deeperQuestion": "Is it yours or someone else's?",
    "zh": {
      "title": "選擇的小島",
      "scenario": "你的小島每天只能留一個「應該」。",
      "question": "今天你想留下哪個？",
      "twist": "",
      "deeperQuestion": "那是你自己的，還是別人給的？"
    }
  },
  {
    "id": "ponder-v3-solo-072",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Expiring praise",
    "scenario": "Praise fades after a day while criticism stays.",
    "question": "How would you preserve kind words?",
    "twist": "",
    "deeperQuestion": "Would you trust your written version?",
    "zh": {
      "title": "會過期的讚美",
      "scenario": "讚美一天後就從記憶消失，批評卻能留下。",
      "question": "你想怎樣保存好話？",
      "twist": "",
      "deeperQuestion": "你會相信自己寫下的版本嗎？"
    }
  },
  {
    "id": "ponder-v3-solo-073",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Dream maintenance",
    "scenario": "Your dream needs regular rest to keep glowing.",
    "question": "How many days off would you give it?",
    "twist": "",
    "deeperQuestion": "Would you still know who you are while it rests?",
    "zh": {
      "title": "夢想保養日",
      "scenario": "夢想要定期休息才能繼續發光。",
      "question": "你會給它放幾天假？",
      "twist": "",
      "deeperQuestion": "休假時你還認得自己嗎？"
    }
  },
  {
    "id": "ponder-v3-solo-074",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Book of answers",
    "scenario": "A book answers every life question but ends your curiosity.",
    "question": "Would you open it?",
    "twist": "",
    "deeperQuestion": "Would you take just one page?",
    "zh": {
      "title": "所有答案的書",
      "scenario": "書知道你人生所有答案，但讀完就不再好奇。",
      "question": "你會翻開嗎？",
      "twist": "",
      "deeperQuestion": "你想只撕下一頁嗎？"
    }
  },
  {
    "id": "ponder-v3-solo-075",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Life volume",
    "scenario": "You can lower outside noise, making your thoughts louder.",
    "question": "Would you turn it down?",
    "twist": "",
    "deeperQuestion": "Which voice would you want to hear clearly first?",
    "zh": {
      "title": "生活音量",
      "scenario": "你能調低外界聲音，自己的念頭卻會變大。",
      "question": "你會轉低嗎？",
      "twist": "",
      "deeperQuestion": "你最想先聽清哪個聲音？"
    }
  },
  {
    "id": "ponder-v3-solo-076",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Luck's cost",
    "scenario": "A luck fairy will stay if you never claim personal credit.",
    "question": "Would you agree?",
    "twist": "",
    "deeperQuestion": "Would success still feel satisfying?",
    "zh": {
      "title": "幸運的代價",
      "scenario": "好運精靈願意常駐，但每件事都不能說是靠自己。",
      "question": "你會答應嗎？",
      "twist": "",
      "deeperQuestion": "成功仍會讓你滿足嗎？"
    }
  },
  {
    "id": "ponder-v3-solo-077",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Nameless work",
    "scenario": "Your work could move many people but must remain anonymous.",
    "question": "Would you create it?",
    "twist": "",
    "deeperQuestion": "What private mark would you leave?",
    "zh": {
      "title": "不帶名字的作品",
      "scenario": "你的作品能感動很多人，但永遠不能署名。",
      "question": "你還想創作嗎？",
      "twist": "",
      "deeperQuestion": "你想留下哪個只有自己懂的記號？"
    }
  },
  {
    "id": "ponder-v3-solo-078",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Growing courage",
    "scenario": "Courage is a bird that grows only when allowed to fly away.",
    "question": "Would you open the cage?",
    "twist": "",
    "deeperQuestion": "Would you wait if it did not return soon?",
    "zh": {
      "title": "長大的勇氣",
      "scenario": "勇氣是一隻小鳥，只有你准許它飛走才會長大。",
      "question": "你會開籠嗎？",
      "twist": "",
      "deeperQuestion": "它暫時不回來，你會等嗎？"
    }
  },
  {
    "id": "ponder-v3-solo-079",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Two selves",
    "scenario": "You spend a day with your ideal self, who also envies you.",
    "question": "What might they envy?",
    "twist": "",
    "deeperQuestion": "Do you value that thing now?",
    "zh": {
      "title": "一天兩個自己",
      "scenario": "你能跟理想中的自己住一天，他卻也羨慕你。",
      "question": "你猜他羨慕甚麼？",
      "twist": "",
      "deeperQuestion": "你現在有把那件事看得重要嗎？"
    }
  },
  {
    "id": "ponder-v3-solo-080",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Past exit",
    "scenario": "An old-memory room gains an exit; leaving keeps the memory but ends your stay.",
    "question": "Would you walk out?",
    "twist": "",
    "deeperQuestion": "What small thing would you take?",
    "zh": {
      "title": "過去的出口",
      "scenario": "舊回憶房間多了一扇出口，出去不會忘記，只是不再住在裡面。",
      "question": "你準備走嗎？",
      "twist": "",
      "deeperQuestion": "你想帶哪件小東西同行？"
    }
  },
  {
    "id": "ponder-v3-solo-081",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Time bouquet",
    "scenario": "Your free time becomes flowers to keep or give away.",
    "question": "How would you divide them?",
    "twist": "",
    "deeperQuestion": "Would you keep your favourite flower?",
    "zh": {
      "title": "時間花束",
      "scenario": "你剩餘的空閒時間變成花束，只能送人或自己留。",
      "question": "你會怎樣分？",
      "twist": "",
      "deeperQuestion": "你會替自己留最喜歡的一朵嗎？"
    }
  },
  {
    "id": "ponder-v3-solo-082",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Without being understood",
    "scenario": "People on an island do not fully understand you but treat you kindly.",
    "question": "Would you stay?",
    "twist": "",
    "deeperQuestion": "Would you keep trying to explain yourself?",
    "zh": {
      "title": "不必被懂",
      "scenario": "小島上的人不完全理解你，卻一直善待你。",
      "question": "你願意住下嗎？",
      "twist": "",
      "deeperQuestion": "你會繼續解釋自己嗎？"
    }
  },
  {
    "id": "ponder-v3-solo-083",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Worry wages",
    "scenario": "Every minute of worrying earns a coin.",
    "question": "Would you worry more?",
    "twist": "",
    "deeperQuestion": "Would you set a time to stop working?",
    "zh": {
      "title": "擔心的薪水",
      "scenario": "每擔心一分鐘就賺一元。",
      "question": "你會想得更多嗎？",
      "twist": "",
      "deeperQuestion": "你會為自己訂下班時間嗎？"
    }
  },
  {
    "id": "ponder-v3-solo-084",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Kindness border",
    "scenario": "Visitors pick flowers freely from your garden, leaving few for you.",
    "question": "Would you add a gate?",
    "twist": "",
    "deeperQuestion": "What would the sign on it say?",
    "zh": {
      "title": "善良的界線",
      "scenario": "你的花園免費讓人採花，但快沒花留給自己。",
      "question": "你會裝門嗎？",
      "twist": "",
      "deeperQuestion": "你想怎樣寫門上的告示？"
    }
  },
  {
    "id": "ponder-v3-solo-085",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Another summit",
    "scenario": "At the summit you discover a higher mountain behind it.",
    "question": "Would you climb on or sit?",
    "twist": "",
    "deeperQuestion": "How long could you sit comfortably?",
    "zh": {
      "title": "不是終點的山頂",
      "scenario": "你爬到山頂，卻發現後面還有一座更高的。",
      "question": "你會繼續還是坐下？",
      "twist": "",
      "deeperQuestion": "坐下多久你才會安心？"
    }
  },
  {
    "id": "ponder-v3-solo-086",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Mood boat",
    "scenario": "You can sail through sadness or bypass it on a bridge without a view.",
    "question": "Which route?",
    "twist": "",
    "deeperQuestion": "How much rowing energy do you have today?",
    "zh": {
      "title": "心情小船",
      "scenario": "你可坐船穿過難過，或走橋繞開，但橋上看不到風景。",
      "question": "你選哪條路？",
      "twist": "",
      "deeperQuestion": "今天的你有多少力氣划船？"
    }
  },
  {
    "id": "ponder-v3-solo-087",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Others' wish list",
    "scenario": "You receive others' expectations of you and may return three.",
    "question": "Which would you return?",
    "twist": "",
    "deeperQuestion": "Which expectation do you genuinely share?",
    "zh": {
      "title": "別人的願望清單",
      "scenario": "你收到一份大家對你的期待，能退回三項。",
      "question": "你會退甚麼？",
      "twist": "",
      "deeperQuestion": "有哪項你其實也真心想要？"
    }
  },
  {
    "id": "ponder-v3-solo-088",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Stopping clock",
    "scenario": "An alarm tells you when you have done enough rather than when to wake.",
    "question": "Would you trust it?",
    "twist": "",
    "deeperQuestion": "Would you secretly set it later?",
    "zh": {
      "title": "會停下的鬧鐘",
      "scenario": "鬧鐘不叫你起床，只提醒你今天已經做夠。",
      "question": "你會相信它嗎？",
      "twist": "",
      "deeperQuestion": "你會偷偷把它調晚嗎？"
    }
  },
  {
    "id": "ponder-v3-solo-089",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Liking yourself again",
    "scenario": "Magic lets you see yourself as a stranger for a day.",
    "question": "Which side would you introduce first?",
    "twist": "",
    "deeperQuestion": "Would you treat yourself more kindly than usual?",
    "zh": {
      "title": "重新喜歡自己",
      "scenario": "魔法讓你用陌生人的眼光看自己一天。",
      "question": "你想先介紹哪一面？",
      "twist": "",
      "deeperQuestion": "你會比平常對自己客氣嗎？"
    }
  },
  {
    "id": "ponder-v3-solo-090",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Waiting to grow",
    "scenario": "A seed promises to sprout without saying how many years it needs.",
    "question": "Would you keep watering?",
    "twist": "",
    "deeperQuestion": "Would you plant other things meanwhile?",
    "zh": {
      "title": "等待發芽",
      "scenario": "種子保證會發芽，卻不說要等幾年。",
      "question": "你會一直澆水嗎？",
      "twist": "",
      "deeperQuestion": "你會同時種別的東西嗎？"
    }
  },
  {
    "id": "ponder-v3-solo-091",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Life's blank space",
    "scenario": "An artist paints your life and offers a blank space.",
    "question": "Where would you leave it?",
    "twist": "",
    "deeperQuestion": "Could you accept never filling it?",
    "zh": {
      "title": "生命的留白",
      "scenario": "畫家替你畫人生，問你要不要留一塊空白。",
      "question": "你想留在哪裡？",
      "twist": "",
      "deeperQuestion": "你能接受永遠不填滿嗎？"
    }
  },
  {
    "id": "ponder-v3-solo-092",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Failure suitcase",
    "scenario": "Failure becomes a suitcase too heavy to carry, holding useful tools.",
    "question": "What would you take out?",
    "twist": "",
    "deeperQuestion": "What could you leave behind?",
    "zh": {
      "title": "裝得下的失敗",
      "scenario": "失敗變成行李箱，太大就帶不動，但裡面有你需要的工具。",
      "question": "你會拿走甚麼？",
      "twist": "",
      "deeperQuestion": "有甚麼可以留在原地？"
    }
  },
  {
    "id": "ponder-v3-solo-093",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Unhurried star",
    "scenario": "A star took a century to shine and never felt late.",
    "question": "What would you ask it?",
    "twist": "",
    "deeperQuestion": "Where would you keep its reply as a reminder?",
    "zh": {
      "title": "不急的星星",
      "scenario": "一顆星說它遲了一百年才發光，卻從不覺得晚。",
      "question": "你想問它甚麼？",
      "twist": "",
      "deeperQuestion": "你想把它的話放在哪裡提醒自己？"
    }
  },
  {
    "id": "ponder-v3-solo-094",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Tiny progress",
    "scenario": "A magnifier reveals tiny daily progress invisible to the eye.",
    "question": "Would you look daily?",
    "twist": "",
    "deeperQuestion": "Could you allow a day without progress?",
    "zh": {
      "title": "看見小小進步",
      "scenario": "放大鏡能看見每天極小的進步，肉眼仍看不出。",
      "question": "你會每天看嗎？",
      "twist": "",
      "deeperQuestion": "有一天沒進步，你會容許嗎？"
    }
  },
  {
    "id": "ponder-v3-solo-095",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Reversible choice",
    "scenario": "You can try a choice for three months then return, leaving the results behind.",
    "question": "What would you try?",
    "twist": "",
    "deeperQuestion": "Would knowing you tried already have value?",
    "zh": {
      "title": "可逆的選擇",
      "scenario": "你能試一個選擇三個月後退回原點，但不能帶走成果。",
      "question": "你想試甚麼？",
      "twist": "",
      "deeperQuestion": "知道自己試過，已經有價值嗎？"
    }
  },
  {
    "id": "ponder-v3-solo-096",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Own doorbell",
    "scenario": "Your neglected self rings your inner doorbell.",
    "question": "How would you welcome them?",
    "twist": "",
    "deeperQuestion": "Would you ask questions or offer rest first?",
    "zh": {
      "title": "自己的門鈴",
      "scenario": "有人按響內心門鈴，是很久沒被照顧的你。",
      "question": "你會怎樣迎接？",
      "twist": "",
      "deeperQuestion": "你想先問話，還是先給他休息？"
    }
  },
  {
    "id": "ponder-v3-solo-097",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Joy without proof",
    "scenario": "You get your happiest day without photos or telling anyone.",
    "question": "How would you spend it?",
    "twist": "",
    "deeperQuestion": "Would not sharing make it less joyful?",
    "zh": {
      "title": "幸福不留證據",
      "scenario": "你能過最幸福的一天，卻不能拍照或告訴任何人。",
      "question": "你會怎樣過？",
      "twist": "",
      "deeperQuestion": "不能分享會令快樂少一點嗎？"
    }
  },
  {
    "id": "ponder-v3-solo-098",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Last small wish",
    "scenario": "A bedtime fairy grants one very small wish.",
    "question": "What should be different tomorrow morning?",
    "twist": "",
    "deeperQuestion": "Which part could you do for yourself tonight?",
    "zh": {
      "title": "最後的小願望",
      "scenario": "睡前精靈只肯實現一個很小的願望。",
      "question": "你希望明早有甚麼不同？",
      "twist": "",
      "deeperQuestion": "有哪部分你今晚就能替自己做到？"
    }
  },
  {
    "id": "ponder-v3-solo-099",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Life narrator",
    "scenario": "Your life narrator can be a strict coach, kind friend or curious child.",
    "question": "Whom would you hire?",
    "twist": "",
    "deeperQuestion": "Would you keep that narrator after a failure?",
    "zh": {
      "title": "人生的旁白",
      "scenario": "人生旁白可以換成嚴格教練、溫柔朋友或好奇小孩。",
      "question": "你想請誰？",
      "twist": "",
      "deeperQuestion": "遇上失敗時，你還想聽同一位嗎？"
    }
  },
  {
    "id": "ponder-v3-solo-100",
    "category": "Solo",
    "emoji": "🌿",
    "title": "Moon's holiday",
    "scenario": "The moon asks you to cover a shift by simply being there, without shining.",
    "question": "Would that feel like enough?",
    "twist": "",
    "deeperQuestion": "Could you offer tomorrow's self the same kindness?",
    "zh": {
      "title": "月亮的休假",
      "scenario": "月亮邀你代班一晚，不用發光，只要安靜待著。",
      "question": "你會覺得自己做得夠嗎？",
      "twist": "",
      "deeperQuestion": "你能把同一份寬容留給明天的自己嗎？"
    }
  }
];
