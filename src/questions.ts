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
    "scenario": "Your pet can eat one person's worries, but the other must stay awake with it.\n\nTonight it curls between you, its tail glowing for dinner. You both say you are fine, while secretly watching it.",
    "question": "Whose worries should it eat tonight?",
    "twist": "",
    "deeperQuestion": "What if the same person stays awake all week?",
    "zh": {
      "title": "煩惱小獸",
      "scenario": "你們養的小獸每天能吃掉一人的煩惱，另一人要陪牠失眠一晚。\n\n牠今晚蜷在你們中間，尾巴已亮起準備開餐的光。你們都說自己沒事，卻也都偷偷看著牠。",
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
    "scenario": "A forest cottage charges one shared memory each month instead of money.\n\nThere is a fireplace, two mugs and the forest you always wanted. The landlord accepts a small memory first, but even photos cannot restore it.",
    "question": "Would you move in?",
    "twist": "",
    "deeperQuestion": "Which memory could you give up first?",
    "zh": {
      "title": "回憶租金",
      "scenario": "森林小屋不用錢，每月收走你們一段共同回憶當租金。\n\n屋裡有壁爐、兩隻杯，窗外是你們一直想住的森林。房東說可以先交一段小回憶，但交出去的，連照片也喚不回。",
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
    "scenario": "Under this umbrella you hear each other's thoughts; outside it you get wet.\n\nRain thickens and the handle fits two hands. Your partner moves closer, just as you remember something you kept to yourself today.",
    "question": "Would you share it?",
    "twist": "",
    "deeperQuestion": "When would you agree to close it?",
    "zh": {
      "title": "透明雨傘",
      "scenario": "傘下的人會聽見彼此當下的想法，走出去就會淋雨。\n\n雨越下越大，傘柄剛好夠兩隻手握。對方笑著靠近，你卻忽然想起今天有一句沒說出口的話。",
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
    "scenario": "You receive your dream island, but your partner cannot join for five years.\n\nThe boat leaves tomorrow; a job and cottage await. Your partner never asks you to stay, only how you will have dinner together.",
    "question": "Would you go first?",
    "twist": "",
    "deeperQuestion": "What if staying means losing the island forever?",
    "zh": {
      "title": "等你小島",
      "scenario": "你得到一座夢想小島，但伴侶要五年後才能搬來。\n\n船明早出發，島上已替你留好工作和小屋。伴侶沒有叫你留下，只問了一句：「那我們平常怎樣吃晚飯？」",
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
    "scenario": "One honest thought appears above your partner's head, once a day.\n\nYour partner seems distracted but saved your favourite dessert. The thought might concern you, or simply a day they want to keep private.",
    "question": "When would you look?",
    "twist": "",
    "deeperQuestion": "Would you tell them you looked?",
    "zh": {
      "title": "愛情字幕",
      "scenario": "對方頭上會顯示一句真心話，但每天只能看一次。\n\n今天對方看起來心事重重，卻照常替你留了甜品。字幕可能是關於你，也可能只是他不想分享的一天。",
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
    "scenario": "Magic bread ends your partner's anger without an explanation.\n\nAfter a silent night, the warm loaf smells like your first date. You could laugh together again, but yesterday's problem would remain.",
    "question": "Would you buy it?",
    "twist": "",
    "deeperQuestion": "What if the same thing happens next week?",
    "zh": {
      "title": "道歉麵包",
      "scenario": "吃下魔法麵包，對方就不再生你的氣，但你不用解釋。\n\n你們已冷戰了一晚，麵包還是熱的，聞起來像第一次約會。店員保證吃完就能笑著聊天，但昨天的事不會因此消失。",
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
    "scenario": "You each own a moon, but a shared home has room for only one.\n\nThe moving van waits beside both glowing moons. One lit your childhood; the other kept your partner company through lonely nights.",
    "question": "How would you choose?",
    "twist": "",
    "deeperQuestion": "What if the other goes to a stranger?",
    "zh": {
      "title": "兩顆月亮",
      "scenario": "你們各有一顆月亮，一起住就只能留下其中一顆。\n\n搬家車已經到了，你們的月亮都在門口安靜發光。一顆照亮你的童年，另一顆陪對方度過最孤單的晚上。",
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
    "scenario": "Each romantic spark can become money, but its feeling disappears.\n\nYour shared plan is nearly funded. The spark you felt seeing your partner wait at the crossing would cover the shortfall.",
    "question": "Would you cash any in?",
    "twist": "",
    "deeperQuestion": "What if it could fund your shared dream?",
    "zh": {
      "title": "心動存款",
      "scenario": "每存下一次心動，就能換一百元，但會忘記那次感覺。\n\n你們正在為一個共同計劃存錢，帳戶還差一點。昨晚對方在路口等你的那份心動，剛好夠補上缺口。",
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
    "scenario": "A ring reveals your breakup date, but not the reason.\n\nThe ring rests on velvet. You might live more lightly without knowing, but your partner wants the date to make the remaining time count.",
    "question": "Would you wear it?",
    "twist": "",
    "deeperQuestion": "What if it says fifty years from now?",
    "zh": {
      "title": "預知戒指",
      "scenario": "戒指會告訴你們分手的日期，卻不會說原因。\n\n店員已把戒指放在絨布上，說不知道日期的人通常比較輕鬆。伴侶卻想知道，好把剩下的日子安排得更認真。",
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
    "scenario": "Your home's weather follows one person's mood.\n\nYou love sunshine; rain comforts your partner on sad days. The windowsill plants need one climate and cannot be moved outside daily.",
    "question": "Whose mood should it follow?",
    "twist": "",
    "deeperQuestion": "What could the other do when they need sunshine?",
    "zh": {
      "title": "專屬天氣",
      "scenario": "你們的家會跟著其中一人的心情變天。\n\n你喜歡晴天，對方難過時卻覺得雨聲很舒服。窗台上的植物只能適應一種天氣，不能每天搬出去。",
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
    "scenario": "A doll can perfectly play you while you travel.\n\nYour long-awaited job has a fixed departure date. The doll even knows your awkward jokes, but its memories will never become yours.",
    "question": "Would you leave it with your partner?",
    "twist": "",
    "deeperQuestion": "What if they find the doll more thoughtful?",
    "zh": {
      "title": "代班戀人",
      "scenario": "你出遠門時，玩偶能完美扮演你陪伴對方。\n\n你已答應了一份期待很久的工作，出門日期不能再改。玩偶連你哄人的笨笑話都會，卻不會把相處的記憶帶回給你。",
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
    "scenario": "Your partner gives you a garden only you can enter.\n\nThere is your favourite chair and an afternoon needing no explanation. Your partner says the gift was never meant to buy admission.",
    "question": "Would you offer them a second key?",
    "twist": "",
    "deeperQuestion": "Would you keep one corner private?",
    "zh": {
      "title": "秘密花園",
      "scenario": "伴侶送你一座花園，只有你能進入。\n\n花園有你最愛的椅子，也有一個不必向任何人解釋的下午。伴侶說這份禮物本來就不是要換一張入場券。",
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
    "scenario": "You can swap ambitions and truly want each other's chosen life.\n\nYou want to wander; your partner wants a small bookshop. Swapping might bring understanding without putting you on the same path.",
    "question": "Would you agree?",
    "twist": "",
    "deeperQuestion": "Would you choose one day or forever?",
    "zh": {
      "title": "交換夢想",
      "scenario": "你們能交換一次人生夢想，換完就會真心想過對方的生活。\n\n你一直想四處流浪，對方想守著一間小書店。交換後你們可能終於懂了對方，卻未必還想走在同一條路上。",
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
    "scenario": "An album replays your happiest day, costing one future date each time.\n\nThat day felt carefree, even in silence. Beside the album lies a new exhibition ticket for the date a replay would consume.",
    "question": "Would you watch often?",
    "twist": "",
    "deeperQuestion": "How many viewings would you save for old age?",
    "zh": {
      "title": "幸福相簿",
      "scenario": "相簿能重播最幸福的一天，但每看一次就少一個新的約會日。\n\n那天你們都還沒有現在的煩惱，連沉默都很好聽。相簿旁邊卻放著一張新展覽門票，日期正是重播會扣掉的那天。",
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
    "scenario": "Your parrot repeats your partner's unspoken complaints.\n\nToday it learned “I wish you spent more time with me.” Your partner strokes it, reluctant to turn dinner into a public interview.",
    "question": "Would you keep it in the living room?",
    "twist": "",
    "deeperQuestion": "Could your partner cover its cage?",
    "zh": {
      "title": "誠實鸚鵡",
      "scenario": "你們的鸚鵡會重複對方沒說出口的不滿。\n\n牠今天已學會一句「其實我想你多陪我」。伴侶伸手摸摸牠，卻看起來不太想讓晚餐變成公開答問。",
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
    "scenario": "A fairy offers lifelong luck to one of you; the other stays ordinary.\n\nThe luck cannot be divided or transferred later. Your partner faces an important opportunity, while you have faced several disappointments.",
    "question": "Who should receive it?",
    "twist": "",
    "deeperQuestion": "Must the lucky person share the rewards?",
    "zh": {
      "title": "一人中獎",
      "scenario": "精靈只給你們其中一人終身好運，另一人維持原樣。\n\n精靈說好運不能拆開，也不能日後轉讓。伴侶正準備一次重要嘗試，而你已經失望了好幾次。",
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
    "scenario": "Time stops when you hug, but you still age.\n\nTraffic falls silent and the tea stops steaming. At last there is no rush, but only your wristwatch keeps moving unnoticed.",
    "question": "How long would you hug each day?",
    "twist": "",
    "deeperQuestion": "Would you tell your partner the cost?",
    "zh": {
      "title": "慢速擁抱",
      "scenario": "擁抱時時間會停止，但只有你會變老。\n\n外面的車聲停住，熱茶也不再冒煙，你們終於不用趕時間。只有你手上的小錶仍在走，對方還沒發現。",
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
    "scenario": "You can erase your partner's ex, along with some kindness that relationship taught them.\n\nSome thoughtfulness was learned in that relationship. The magician ties the memories together; you cannot cut away only the parts you dislike.",
    "question": "Would you press it?",
    "twist": "",
    "deeperQuestion": "What if your partner asks you to?",
    "zh": {
      "title": "忘記初戀",
      "scenario": "你能刪掉伴侶對前任的回憶，但也會刪掉他學會的一份溫柔。\n\n你知道有些體貼，是對方在那段關係裡慢慢學會的。魔法師把兩段回憶綁成同一個結，說不能只剪走你不喜歡的部分。",
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
    "scenario": "A shop picks perfect gifts, but you must take the credit.\n\nEven the message is guaranteed to move them. Your own awkward gift idea took a whole night to think up.",
    "question": "Would you use it?",
    "twist": "",
    "deeperQuestion": "Would knowing make the gift less special?",
    "zh": {
      "title": "最懂你的店",
      "scenario": "小店總能替你挑到完美禮物，但不准你說是店員選的。\n\n店員連卡片要寫哪句話都替你想好，對方一定會感動。你原本準備的小禮物有點笨，卻是自己想了一整晚的點子。",
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
    "scenario": "One shared battery powers one person's adventure while the other recharges at home.\n\nYour travel invitation and their acceptance letter arrive together. The battery glows like a sweet, offering no judgment on whose chance matters more.",
    "question": "How would you take turns?",
    "twist": "",
    "deeperQuestion": "What if one adventure takes ten years?",
    "zh": {
      "title": "愛的電池",
      "scenario": "你們共用一顆電池，只夠支持一人的冒險。另一人要留在家充電。\n\n今天你的旅行邀請和對方的入學通知同時到了。電池亮得像一顆糖，卻沒有告訴你們誰的機會比較重要。",
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
    "scenario": "You can rewind an argument; your partner forgets, but you remember every hurtful word.\n\nCold dinner would warm and the closed door reopen. But you would still know what your partner can say in anger.",
    "question": "Would you use it?",
    "twist": "",
    "deeperQuestion": "Would you bring those words up again?",
    "zh": {
      "title": "吵架倒帶",
      "scenario": "你能倒帶一場吵架，對方會忘記，你卻記得所有傷人的話。\n\n倒帶後，桌上的冷飯會變熱，關上的門也會重新打開。你卻已知道對方生氣時能說出甚麼，這部分沒有重來鍵。",
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
    "scenario": "Your partner becomes thumb-sized but otherwise unchanged.\n\nYou made a soft pocket; they made their own city map. Your hand could protect them, or quietly decide where they go today.",
    "question": "Would you carry them everywhere or build them a home?",
    "twist": "",
    "deeperQuestion": "What if they want to travel alone?",
    "zh": {
      "title": "口袋伴侶",
      "scenario": "伴侶變成拇指大小，說話做事仍一樣。\n\n你替他做了柔軟口袋，他卻畫好了一張自己的城市地圖。你一伸手就能保護他，也很容易決定他今天去哪裡。",
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
    "scenario": "A machine rates you a 60% match and offers a 90% match.\n\nYou just had an ordinary, comfortable weekend with no thought of leaving. One notification makes you wonder whether comfort is enough.",
    "question": "Would you view the profile?",
    "twist": "",
    "deeperQuestion": "Would you look at it together?",
    "zh": {
      "title": "完美配對機",
      "scenario": "機器說你們只有六成合拍，卻能介紹九成合拍的人。\n\n你們剛過了一個普通卻舒服的週末，並沒有在考慮分開。機器只是亮起一封新通知，讓你第一次懷疑「舒服」夠不夠。",
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
    "scenario": "Only one of your two wishes can come true.\n\nThe fairy opens its notebook: spoken wishes cannot change. Going first might spare you the moment of disappointing the other person.",
    "question": "Would you say yours first or hear theirs?",
    "twist": "",
    "deeperQuestion": "Could their wish make you change yours?",
    "zh": {
      "title": "願望不同路",
      "scenario": "你們各許一個願，精靈說兩個只能成真一個。\n\n精靈已經打開記錄本，說一旦講出來就不能改。你突然發現，先開口的人可能不用承受讓對方失望的那一下。",
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
    "scenario": "You can mail your partner one day's feelings to experience fully.\n\nThe post preserves exhaustion, warmth and feelings you could not name. The reader cannot pause the experience, but may leave it unopened.",
    "question": "Which day would you send?",
    "twist": "",
    "deeperQuestion": "Would you want a reply or quiet company?",
    "zh": {
      "title": "情緒郵差",
      "scenario": "你能把一天的感受寄給伴侶，讓他完整體驗。\n\n郵局會保留當時的疲倦、溫度，甚至你沒找到字眼的那份失落。對方不能中途暫停，但可以選擇不拆信。",
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
    "scenario": "A moon job pays your partner ten times more, with one day together yearly.\n\nRent and family needs would become easier. Your partner puts down the contract and counts whether one day covers your birthdays together.",
    "question": "Would you want them to go?",
    "twist": "",
    "deeperQuestion": "What if it lasts only three years?",
    "zh": {
      "title": "十倍收入",
      "scenario": "伴侶接下月球工作，收入十倍，但一年只能見你一天。\n\n你們終於不用擔心房租，也能照顧家人。對方把合約放下，開始計算一年一天夠不夠一起過生日。",
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
    "scenario": "A plant blooms whenever your partner lies and never wilts.\n\nThe plant cannot distinguish kind lies from cruel ones; even “I'm fine” counts. A blooming windowsill might reassure you or invite more suspicion.",
    "question": "Would you keep it at home?",
    "twist": "",
    "deeperQuestion": "What about a lie to prepare a surprise?",
    "zh": {
      "title": "不凋的花",
      "scenario": "花永不凋謝，但只有在對方說謊時才開花。\n\n花店老闆說它不分好意還是惡意，連「我沒事」也算。你想像花開滿窗邊，卻不知道自己會安心還是更常猜疑。",
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
    "scenario": "Tomorrow you forget each other and may each leave one sentence.\n\nOnly two notes may remain; no photos or phones survive the reset. You want to describe your love without trapping tomorrow's strangers in a promise.",
    "question": "What would you write?",
    "twist": "",
    "deeperQuestion": "Would you leave a promise or room to choose?",
    "zh": {
      "title": "一起失憶",
      "scenario": "你們明天會忘記彼此，只能各留一句話。\n\n桌上已有兩張紙，沒有照片、手機或別的提示能留下。你想寫你們有多相愛，又怕一句承諾困住明天的陌生人。",
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
    "scenario": "Your carpet seats two, and your pet wants to come.\n\nYour pet sets its toy beside the carpet, certain it belongs. Tonight brings shooting stars; tomorrow the carpet goes away.",
    "question": "Would one of you stay or would nobody fly?",
    "twist": "",
    "deeperQuestion": "What if this is your only flight ever?",
    "zh": {
      "title": "雙人魔毯",
      "scenario": "魔毯只能載兩人，你們的寵物也想同行。\n\n寵物已把玩具放到毯邊，完全相信自己也有份。天氣預報說今晚能看見流星，明天魔毯就會被收走。",
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
    "scenario": "Glasses make every flaw in your partner look like a strength.\n\nLateness looks spontaneous; silence looks steady. Your partner stays the same, but you can no longer tell when something hurts you.",
    "question": "Would you wear them?",
    "twist": "",
    "deeperQuestion": "When would you insist on taking them off?",
    "zh": {
      "title": "善意濾鏡",
      "scenario": "眼鏡會把伴侶的每個缺點都看成優點。\n\n戴上後，遲到會變成隨性，沉默會變成穩重。對方還是同一個人，只是你再也分不清自己有沒有受委屈。",
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
    "scenario": "You can repeat your best date forever, but never visit somewhere new together.\n\nThe restaurant can recreate even the song and rain. Your partner loves the certainty; you still have a list of unexplored places.",
    "question": "Would you trade?",
    "twist": "",
    "deeperQuestion": "What if your partner really wants the trade?",
    "zh": {
      "title": "約會複製券",
      "scenario": "你能永遠重複最好的約會，代價是不能一起去新地方。\n\n餐廳連那晚的歌和窗邊的雨都能還原。對方覺得這是一個永不失手的安排，你卻還留著一張沒去過的地方清單。",
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
    "scenario": "Everyone displays their three dearest people.\n\nYou thought rankings did not matter until your partner looked away. The list changes daily without explaining love, duty or attraction.",
    "question": "Would you want to know your rank?",
    "twist": "",
    "deeperQuestion": "What if family comes before you?",
    "zh": {
      "title": "愛的排名",
      "scenario": "每人頭上都顯示最在乎的三個人。\n\n你以為自己不在乎名次，直到對方低頭避開你的視線。榜單會每天改變，卻不會說明陪伴、責任和心動各佔多少。",
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
    "scenario": "A room gives you a day alone while one minute passes outside.\n\nThere is a bed and the book you meant to read. You might spend a month inside and return before your partner finishes turning around.",
    "question": "Would you use it daily?",
    "twist": "",
    "deeperQuestion": "Should your partner know how long you stayed?",
    "zh": {
      "title": "獨處房間",
      "scenario": "家裡有個房間，進去一天，外面只過一分鐘。\n\n房裡有一張床和你想讀很久的書，沒有人會覺得你消失太久。但你可能在裡面過了一個月，回來時對方才剛轉過身。",
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
    "scenario": "Promises become goldfish; broken promises must be released by hand.\n\nThe tank is crowded with “next time” fish. Before release, each one swims past the person the promise was made to.",
    "question": "Would your tank be large?",
    "twist": "",
    "deeperQuestion": "Would you promise less or grow the tank?",
    "zh": {
      "title": "金魚承諾",
      "scenario": "每個承諾會變成一條金魚，沒做到就要親手放走。\n\n魚缸已經擠滿了「下次一定」的小魚，有幾條長得特別慢。每次放走，魚會先游過被承諾的那個人面前。",
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
    "scenario": "Magic allows one sentence to your partner each day, but unlimited gestures.\n\nYour partner is exhausted today, and you have news you long to share. Your sentence could comfort them, explain you, or wait until bedtime.",
    "question": "What would you say today?",
    "twist": "",
    "deeperQuestion": "Would you leave “I love you” to gestures?",
    "zh": {
      "title": "只剩一句",
      "scenario": "魔法讓你每天只能對伴侶說一句話，動作不限。\n\n對方今天剛好很累，而你也有一件很想分享的好消息。那句話可以安慰他、解釋自己，或留到睡前再說。",
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
    "scenario": "Someone offers a fortune for your first meeting; both of you would forget it.\n\nThe cheque is ready and the photos can stay. You would know the meeting happened without remembering how it felt.",
    "question": "Would you sell?",
    "twist": "",
    "deeperQuestion": "Could the sale go ahead if only you agree?",
    "zh": {
      "title": "記憶拍賣",
      "scenario": "有人高價買你們第一次見面的回憶，兩人都會忘記。\n\n買家已把支票放在桌上，你們的相簿仍然可以保留。只是以後再看那張照片，你們會知道發生過，卻不再記得心跳。",
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
    "scenario": "A door leads to your partner before they knew you.\n\nBeyond the door they have their own routines, unchanged by you. You know both the perfect joke and the sore spots to avoid.",
    "question": "Would you pursue them again?",
    "twist": "",
    "deeperQuestion": "Would you use what you already know to win them over?",
    "zh": {
      "title": "轉身門",
      "scenario": "一扇門能讓你遇見還未認識你的伴侶。\n\n門後的他正忙著自己的生活，還沒為你改過任何習慣。你知道哪句話能逗笑他，也知道哪些傷口最好不要碰。",
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
    "scenario": "A robot cat always sides with its buyer during arguments.\n\nIt wears tiny robes and argues your innocence beautifully. You remember once wishing your partner would simply take your side.",
    "question": "Would you buy it as a referee?",
    "twist": "",
    "deeperQuestion": "What if your partner buys one first?",
    "zh": {
      "title": "忠心機器貓",
      "scenario": "機器貓會在每次爭執時支持買下牠的人。\n\n牠穿著小法袍，會很有條理地解釋為甚麼你沒有錯。你想起自己也曾經希望，對方只是先站在你這邊一次。",
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
    "scenario": "A book offers an ordinary stable future or an exciting one often apart.\n\nOne page shows familiar breakfasts; the other holds tickets from many cities. Neither is a bad ending, but each misses something.",
    "question": "Which page would you turn?",
    "twist": "",
    "deeperQuestion": "Could you accept your partner choosing the other?",
    "zh": {
      "title": "兩種結局",
      "scenario": "一本書有你們的兩種未來：平穩但普通，精彩卻常分隔。\n\n平穩那頁畫著熟悉的早餐，精彩那頁貼滿不同城市的車票。兩頁都不是壞結局，只是會錯過另一種生活。",
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
    "scenario": "Every sweet remark costs a coin; quiet care is free.\n\nThe bedside coin jar fills on the first night. When the monthly bill arrives, the more talkative partner hesitates to speak.",
    "question": "Would you say fewer sweet things?",
    "twist": "",
    "deeperQuestion": "What if hearing them matters most to your partner?",
    "zh": {
      "title": "甜言稅",
      "scenario": "每句甜言蜜語都要付一元，默默照顧不用錢。\n\n你們把一個小零錢盒放在床邊，第一晚很快就滿了。月底要付帳時，說得多的人突然不好意思再開口。",
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
    "scenario": "You can date in dreams, remembering only the feeling by day.\n\nMorning leaves the warmth of an embrace without any remembered destination. Your phone still holds a real conversation left unfinished.",
    "question": "Does that count as time together?",
    "twist": "",
    "deeperQuestion": "What if dreams feel happier than real life?",
    "zh": {
      "title": "夢中相見",
      "scenario": "你們能在夢裡約會，但白天會忘記內容，只留下感覺。\n\n早上醒來，你們都記得被擁抱的安心，卻說不出昨晚去了哪裡。手機上還留著一段現實裡沒談完的對話。",
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
    "scenario": "A tiny dragon drives away anyone who hurts your partner, including you.\n\nIt knows your partner's name and spreads its wings when they cry. You love its devotion, knowing you cannot avoid every hurt forever.",
    "question": "Would you gift it to them?",
    "twist": "",
    "deeperQuestion": "Should it allow one apology?",
    "zh": {
      "title": "小龍保鑣",
      "scenario": "一隻小龍會趕走所有讓伴侶傷心的人，包括你。\n\n牠已學會伴侶的名字，會在他哭時把翅膀張開。你很喜歡牠的認真，卻知道自己不可能永遠不讓對方難過。",
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
    "scenario": "Every act of care appears on a wall that cannot be erased.\n\nIt records gifts, dishes, waiting and words held back. At first it looks tender; later you catch yourself counting entries.",
    "question": "Would you want this wall at home?",
    "twist": "",
    "deeperQuestion": "What if it records only things that cost money?",
    "zh": {
      "title": "愛心記帳",
      "scenario": "每次付出都會記在牆上，誰都不能刪。\n\n牆不只記禮物，也記洗碗、等待和忍住沒說的話。起初像一幅溫柔的畫，後來你發現自己開始偷偷數格子。",
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
    "scenario": "You can both live longer, but one ages twenty years first.\n\nMagic promises equal time together, though strangers see an age gap. You can still walk together, adjusting your pace.",
    "question": "Would you accept?",
    "twist": "",
    "deeperQuestion": "Who should decide which person ages first?",
    "zh": {
      "title": "變老速度",
      "scenario": "你們可以一起長壽，但其中一人會先變老二十年。\n\n魔法保證你們的相處時間一樣長，只是別人看來會不像同齡人。你們還能一起散步，但步伐可能要重新配合。",
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
    "scenario": "Your future partner sends a letter marked “Do not open yet”.\n\nThe handwriting is familiar but older, and something rustles inside. It might protect a surprise or warn of a goodbye.",
    "question": "Would you open it?",
    "twist": "",
    "deeperQuestion": "What if the envelope keeps crying?",
    "zh": {
      "title": "明天的信",
      "scenario": "未來的伴侶寄來一封信，封面寫「現在別拆」。\n\n信封上是熟悉卻老了一點的字跡，裡面有東西輕輕作響。你不知道它是在保護一個驚喜，還是提醒一場你想避開的告別。",
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
    "scenario": "You can split your luck equally, never having one lucky and one unlucky partner.\n\nLately luck favours you while your partner quietly withdraws. Sharing would remove both harsh streaks and extraordinary jackpots.",
    "question": "Would you agree?",
    "twist": "",
    "deeperQuestion": "What if you were the luckier one?",
    "zh": {
      "title": "共享運氣",
      "scenario": "你們可以平分運氣，從此不會一人特別順、一人特別倒楣。\n\n最近總是你遇上好事，對方真心替你高興，卻也開始不太說自己的近況。平分後誰都不會特別倒楣，也不再有突然的大獎。",
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
    "scenario": "Earphones translate complaints into what your partner actually wants.\n\n“On your phone again” might become “I missed you today.” The earphones also reveal needs you dislike; kindness is not a filter setting.",
    "question": "Would you keep them on?",
    "twist": "",
    "deeperQuestion": "Would you hear the original words first?",
    "zh": {
      "title": "愛的翻譯",
      "scenario": "耳機會把對方每句抱怨翻成他真正想要的東西。\n\n一句「你又看手機」可能會變成「我今天很想你」。耳機也可能翻出你不想聽的需要，不能只開啟溫柔的版本。",
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
    "scenario": "A hundred goodbyes become paper boats you can trade for never being apart.\n\nNinety-nine boats wait at the river. One more goodbye ends the counting, but you have not asked how close “always together” must be.",
    "question": "Would you trade?",
    "twist": "",
    "deeperQuestion": "Would you agree if solo travel became impossible?",
    "zh": {
      "title": "離別小船",
      "scenario": "每次道別都能存成一艘紙船，一百艘可換永不分開。\n\n河邊已停滿九十九艘小船，下一次揮手就能兌換。你們期待不用再數日子，卻還沒問過「永遠在一起」到底多近。",
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
    "scenario": "A gift grows only when its recipient truly likes it.\n\nYou chose for hours, yet the gift grows only palm-sized. It might say nothing about love, only that the gift missed the mark.",
    "question": "Would you give one to your partner?",
    "twist": "",
    "deeperQuestion": "If it stays tiny, would you ask why?",
    "zh": {
      "title": "會長大的禮物",
      "scenario": "一份禮物只有在你真心喜歡時才長大。\n\n你挑了一整天，禮物最後只長到掌心大小。它不一定代表愛得少，也可能只是你送的東西不是對方想要的。",
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
    "scenario": "One day each year you become strangers to each other.\n\nThe cafe reserves separate tables for you. You know their favourites, but not whether today's stranger would approach the same way.",
    "question": "How would you arrange to meet?",
    "twist": "",
    "deeperQuestion": "Would it bother you if no spark appeared that day?",
    "zh": {
      "title": "一日陌生人",
      "scenario": "每年一天，你們會忘記是情侶，只記得對方是陌生人。\n\n咖啡店已替你們留好兩個分開的座位。你知道對方最愛甚麼，卻不知道今天的自己還會不會用同一種方式靠近。",
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
    "scenario": "You can secretly press a button to cheer your partner up.\n\nThe remote lies beside your partner, who is grieving something important. You want relief for them, though they have not finished speaking.",
    "question": "Would you use it?",
    "twist": "",
    "deeperQuestion": "What if they want time to feel sad?",
    "zh": {
      "title": "情緒遙控器",
      "scenario": "你能一按就讓伴侶開心，但只有你知道按過。\n\n遙控器放在沙發邊，對方正在為一件重要的事難過。你很想替他鬆一口氣，也知道他還沒把話說完。",
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
    "scenario": "A magic kitchen makes only your favourite breakfast, never your partner's.\n\nIt serves your favourite and washes every bowl. Your partner says it is fine, then starts buying breakfast before coming home.",
    "question": "Would you keep it?",
    "twist": "",
    "deeperQuestion": "Would you cook their portion yourself?",
    "zh": {
      "title": "兩份早餐",
      "scenario": "魔法廚房只會煮你最愛的早餐，對方想吃的永遠沒有。\n\n廚房每天準時端出你的最愛，連碗都會自己洗好。伴侶笑說沒關係，卻開始在回家前先買一份別的早餐。",
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
    "scenario": "Your happy moments would be broadcast citywide; sad ones stay private.\n\nCameras light up for hugs and reconciliations. Viewers see sweetness without knowing the work that came before it.",
    "question": "Would you switch it on?",
    "twist": "",
    "deeperQuestion": "What if the broadcasts earn you money?",
    "zh": {
      "title": "幸福廣播",
      "scenario": "你們每次幸福的時刻都會全城直播，難過時不會。\n\n鏡頭會在你們擁抱時亮起，連小小和好都有人鼓掌。但觀眾只見甜蜜，不會知道你們為這一天努力了多久。",
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
    "scenario": "Your partner gives you a dream concert ticket but cannot attend.\n\nThe ticket sits in a handmade envelope after a long queue. The concert falls on an evening when your partner could use company.",
    "question": "Would you go alone?",
    "twist": "",
    "deeperQuestion": "What if they secretly hope you stay?",
    "zh": {
      "title": "獨一無二票",
      "scenario": "伴侶送你一張夢想演唱會票，但他不能進場。\n\n門票藏在一個手作信封裡，是對方排了很久才買到的。演出那晚剛好也是他有點需要陪伴的一天。",
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
    "scenario": "Your shared piggy bank asks whether each purchase is worthwhile.\n\nTonight you want a small treat; your partner wants travel savings. The piggy bank takes no side and waits for an answer.",
    "question": "Who should answer?",
    "twist": "",
    "deeperQuestion": "Can money leave when you disagree?",
    "zh": {
      "title": "會說話的存錢筒",
      "scenario": "共同存錢筒每次都問「這筆錢值得花嗎」。\n\n今晚你想買一件讓自己開心的小東西，對方想把錢留給旅行。存錢筒不會替任何一邊說話，只等一個答案。",
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
    "scenario": "You can give your partner half your joy, without replacing it.\n\nYour partner has felt low for weeks, while today you feel light. The exchange is a gift, never a debt to collect later.",
    "question": "When would you do it?",
    "twist": "",
    "deeperQuestion": "Would you accept the same gift from them?",
    "zh": {
      "title": "幸福交換所",
      "scenario": "你能把自己的快樂分一半給伴侶，但不能補回。\n\n對方已低落了一段時間，你今天卻難得輕鬆。交換所說這不是借貸，往後不能要求對方在你難過時還回來。",
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
    "scenario": "Every kiss can feel like the first, but earlier kisses are forgotten.\n\nEach kiss holds fresh nerves, free of habit. Yet one ordinary goodnight kiss is precisely what made the relationship feel like home.",
    "question": "Would you try?",
    "twist": "",
    "deeperQuestion": "Is there one kiss you would insist on keeping?",
    "zh": {
      "title": "永遠的初吻",
      "scenario": "魔法能讓每次接吻都像初吻，但會忘記以前的吻。\n\n每次都會有第一次靠近的緊張，沒有習慣，也沒有敷衍。你卻想起某次平淡的晚安吻，正是讓你覺得像家的原因。",
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
    "scenario": "Unspoken complaints become thorns in a plant.\n\nThe pot is outgrowing the sill while both of you look away. Trimming tidies the room but leaves roots ready to grow again.",
    "question": "Would you trim them or talk things through?",
    "twist": "",
    "deeperQuestion": "What if talking temporarily makes the flowers wilt?",
    "zh": {
      "title": "吵架花盆",
      "scenario": "每次沒說出口的不滿都會長成一根刺。\n\n花盆最近放不下窗台，你們都假裝沒留意。修剪能讓客廳好看一點，但根還在，明天可能又長回來。",
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
    "scenario": "A travel map follows only one person's deepest wishes.\n\nBoth routes look lovely: sea and mountains. The holder owes no explanation, while the other packs away their own destination.",
    "question": "Who should hold it?",
    "twist": "",
    "deeperQuestion": "Would you ask to swap halfway?",
    "zh": {
      "title": "誰的地圖",
      "scenario": "雙人旅行地圖只會帶你們去其中一人最想去的地方。\n\n地圖上的兩條路都很漂亮，一條向海，一條進山。拿地圖的人不用說理由，另一人卻要把自己的目的地先收起來。",
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
    "scenario": "Insurance removes breakup pain, along with the joy of having loved.\n\nThe policy removes not only the last rainy day but every sunny one too. You would never know what had gone missing.",
    "question": "Would you buy it?",
    "twist": "",
    "deeperQuestion": "Would you buy a policy for your partner too?",
    "zh": {
      "title": "分手保險",
      "scenario": "保險能保證分手後不傷心，但也會抹去相愛的快樂。\n\n保單寫得很清楚：不是只忘記最後那場雨，而是連晴天也一起收走。業務員說你不會知道自己少了甚麼。",
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
    "scenario": "You can live where arguments never happen, but disagreements cannot be spoken.\n\nDinner stays peaceful and no doors slam. But whenever you try “I actually don't want to,” your voice stops.",
    "question": "Would you move there?",
    "twist": "",
    "deeperQuestion": "What would you most fear being unable to say?",
    "zh": {
      "title": "靜音世界",
      "scenario": "你們可住進沒有爭吵的世界，但所有不同意見都說不出口。\n\n你們能很安靜地吃完每頓飯，再沒有誰摔門離開。只是當你想說「我其實不想」，聲音會自動停在喉嚨。",
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
    "scenario": "Your double can enjoy a date with your partner while you go elsewhere.\n\nTwo invitations clash and you want neither disappointed. The double returns smiling, but cannot put the closeness into your heart.",
    "question": "Would you send it?",
    "twist": "",
    "deeperQuestion": "Would you tell your partner beforehand?",
    "zh": {
      "title": "週末分身",
      "scenario": "你可以派分身陪伴侶，自己去玩，分身也會真心享受約會。\n\n兩個邀請撞在同一晚，你不想令任何一邊失望。分身回來時會笑著說約會很好，卻不能替你把那份親近帶回心裡。",
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
    "scenario": "You meet your partner's inner child, who will trust one promise.\n\nThe child holds a chipped toy and asks whether you might disappear. You know adult life resists guarantees, yet cannot bear a careless answer.",
    "question": "What would you promise?",
    "twist": "",
    "deeperQuestion": "What would you refuse to promise, even to comfort them?",
    "zh": {
      "title": "心裡的小孩",
      "scenario": "你能見到伴侶心裡的小孩，他只肯相信一個承諾。\n\n小孩抱著一個破了角的玩具，問你會不會忽然離開。你知道大人的世界沒有那麼容易保證，又不忍心敷衍他。",
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
    "scenario": "A potion gives you a year of intense romance, then returns things to normal.\n\nThe potion would make small things thrilling again. For a while it would also dim the ease of not needing to impress each other.",
    "question": "Would you drink it?",
    "twist": "",
    "deeperQuestion": "Would ordinary love feel insufficient afterwards?",
    "zh": {
      "title": "愛情期限",
      "scenario": "藥水讓你們熱戀一年，之後回到現在的感情。\n\n藥水就在床頭，喝下後每件小事都會重新讓你心跳。可是你們現在那份不用表現也舒服的默契，也會暫時變淡。",
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
    "scenario": "A beacon shines whenever you wait for your partner.\n\nYou mean simply to say someone is waiting, but the whole road lights up. It may feel welcoming or like an expectation they cannot disappoint.",
    "question": "Would you want them to see it?",
    "twist": "",
    "deeperQuestion": "Would you hope it makes them come home sooner?",
    "zh": {
      "title": "回家燈塔",
      "scenario": "只要你等伴侶回家，天空就會亮起燈塔。\n\n你本來只想表示有人等他，燈卻照亮了整條回家路。對方看見的可能是溫暖，也可能是一份不敢辜負的期待。",
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
    "scenario": "A couple may keep only one original name; the other must choose a new one.\n\nThe registrar says neither person should automatically yield. Writing your names reveals the family and history each carries.",
    "question": "How would you decide?",
    "twist": "",
    "deeperQuestion": "What if you could both change names?",
    "zh": {
      "title": "共同名字",
      "scenario": "一對情侶只能保留一人的名字，另一人要選新名字。\n\n登記員說這是城市很久以前留下的習俗，沒有誰應該自動退讓。你們各自在紙上寫好名字，才發現名字裡也有家和過去。",
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
    "scenario": "A cafe keeps every date's conversation, even after a breakup.\n\nThe waiter remembers your first table and several uncomfortable silences. The archive does not keep only the moments worth romanticizing.",
    "question": "Would you visit often?",
    "twist": "",
    "deeperQuestion": "Could your partner return alone to listen?",
    "zh": {
      "title": "不會忘的餐廳",
      "scenario": "餐廳會保存每次約會的對話，分手後也不刪。\n\n服務員記得你們第一次坐哪張桌，也保存了幾次不愉快的沉默。餐廳不會只留下適合懷念的部分。",
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
    "scenario": "Each morning you see your partner's score for yesterday together.\n\nThe score cannot distinguish tiredness, disappointment or a strict marker. You still have to speak to learn what happened behind it.",
    "question": "Would you enable it?",
    "twist": "",
    "deeperQuestion": "After a low score, would you ask why or need time first?",
    "zh": {
      "title": "戀愛評分",
      "scenario": "每天醒來，你會看到伴侶給昨天相處的分數。\n\n分數旁沒有評語，也分不清他是累了、失望，還是只是不會打高分。你們仍得自己開口，才能知道數字後面發生甚麼。",
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
    "scenario": "Your flowers bloom only for your partner.\n\nYou water closed buds that bloom only when your partner arrives. You are happy for them, yet want to enjoy what you tended.",
    "question": "Does that feel romantic or disappointing?",
    "twist": "",
    "deeperQuestion": "What if your friends want to see them too?",
    "zh": {
      "title": "只給你的花",
      "scenario": "你種的花只對伴侶盛開，他不在就合起來。\n\n你每天澆水時只看見合起的花苞，對方回家才開成一片。你替他高興，卻也想親眼看看自己照顧出來的漂亮。",
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
    "scenario": "You can watch one moment you missed in your partner's life, without joining it.\n\nChoose a childhood, difficult or triumphant day, once only. It might explain who they became, or simply show an ordinary meal.",
    "question": "Which one?",
    "twist": "",
    "deeperQuestion": "Would you want them watching beside you?",
    "zh": {
      "title": "錯過重播",
      "scenario": "你能補看伴侶人生中一個你錯過的時刻，卻不能參與。\n\n售票員讓你選童年、低潮或得意的一天，票只能用一次。你可能看見讓他變成今天這個人的事，也可能只是普通的一頓飯。",
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
    "scenario": "Every decade your personalities change, but memories stay.\n\nPhotos preserve every version while jokes and ambitions shift. Every person you loved keeps living behind the same face.",
    "question": "Would you promise to stay together?",
    "twist": "",
    "deeperQuestion": "Would you want the chance to choose again?",
    "zh": {
      "title": "換一種愛",
      "scenario": "每十年，你們會變成不同性格的人，但記得全部回憶。\n\n相簿會留下每一版的你們，但熟悉的笑點和夢想可能慢慢不同。你愛過的那些人，都住在同一張臉裡。",
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
    "scenario": "Unspoken feelings become balloons beside the bed.\n\nSmall balloons drift beside one blocking the lamp. You want to help without turning care into an intrusion.",
    "question": "Would you ask to open one of your partner's?",
    "twist": "",
    "deeperQuestion": "If they refuse, could you leave it floating?",
    "zh": {
      "title": "心事氣球",
      "scenario": "沒說的心事會變成氣球飄在床邊。\n\n有些氣球很小，有一個卻把床頭燈遮住了。你很想幫忙，又不知道拆開是不是把關心變成闖進去。",
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
    "scenario": "You must share one nightly dream: adventure or quiet.\n\nYou want to ride a dragon; your partner wants restful sleep. The dream shop is closing and both tickets need one destination.",
    "question": "Which would you choose tonight?",
    "twist": "",
    "deeperQuestion": "Would you alternate nights?",
    "zh": {
      "title": "兩人一夢",
      "scenario": "你們每晚只能做同一個夢，一人喜歡冒險、一人喜歡安靜。\n\n今晚你想騎龍越過山谷，對方只想在夢裡睡個好覺。夢店快關門了，兩張票卻必須寫同一個目的地。",
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
    "scenario": "You can lose all fear of losing your partner, but also stop missing them.\n\nThe magician promises love remains without the ache of distance. You remember both waiting for messages and the joy of reunion.",
    "question": "Would you accept?",
    "twist": "",
    "deeperQuestion": "What if your partner chooses it?",
    "zh": {
      "title": "不怕失去",
      "scenario": "你能永遠不怕失去伴侶，但也不再感到想念。\n\n魔法師說你仍會愛他，只是不再因為距離而難受。你想到那些等訊息的晚上，也想到重逢時那份特別大的快樂。",
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
    "scenario": "Your home walks toward one person's dream city each day.\n\nBefore breakfast ends, the house steps toward your city. Your partner's work lies the other way; having a home does not solve everything.",
    "question": "Whose wish should guide it?",
    "twist": "",
    "deeperQuestion": "Would you ask it to stop halfway?",
    "zh": {
      "title": "會走的房子",
      "scenario": "你們的房子每天走向其中一人的夢想城市。\n\n早餐還沒吃完，房子就朝你的城市走了兩步。對方的工作卻在另一個方向，不能靠「有家就好」解決一切。",
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
    "scenario": "An eraser removes hurt, but the forgiven person forgets their mistake.\n\nA careful apology rests on the table. The eraser could ease your pain while removing your partner's effort to remember the lesson.",
    "question": "Would you use it?",
    "twist": "",
    "deeperQuestion": "Whose memory would you rather preserve?",
    "zh": {
      "title": "原諒橡皮擦",
      "scenario": "橡皮擦能擦走傷心，但被原諒的人會忘記自己做錯了甚麼。\n\n桌上還放著對方認真寫的道歉，他希望自己不要再犯。橡皮擦能讓你舒服一點，卻可能擦走那份記住教訓的努力。",
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
    "scenario": "You find a park for just the two of you; telling anyone makes it vanish.\n\nThere are two chairs and no questions about work or plans. For once you have somewhere the wider world cannot enter.",
    "question": "Could you keep it secret?",
    "twist": "",
    "deeperQuestion": "What if a friend needs a refuge?",
    "zh": {
      "title": "秘密樂園",
      "scenario": "你們找到只屬於兩人的樂園，告訴第三個人就會消失。\n\n那裡不問工作，也不問你們未來的計劃，只留兩張椅子。你們第一次有了一個世界不會進來的地方。",
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
    "scenario": "You share one fully attentive hour each day; otherwise distractions return.\n\nThe hourglass quiets phones, work and wandering thoughts. Tonight holds both a hard conversation and a film you want to laugh through together.",
    "question": "What would you save it for?",
    "twist": "",
    "deeperQuestion": "Would you spend it playing or solving a problem?",
    "zh": {
      "title": "專心沙漏",
      "scenario": "你們每天共用一小時完全專心的時間，其餘時候都容易分心。\n\n沙漏一翻，手機、工作和雜念都安靜下來。今晚你們有一件難談的事，也有一部很想一起笑著看的電影。",
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
    "scenario": "A ticket brings your distant partner instantly, but costs them an important opportunity.\n\nThey have waited ages for this chance, while you need company tonight. The ticket carries no right answer, only the last departure time.",
    "question": "Would you send it?",
    "twist": "",
    "deeperQuestion": "Would you explain the cost first?",
    "zh": {
      "title": "重逢車票",
      "scenario": "車票能讓遠方的伴侶立刻來到你身邊，但他會錯過一個重要機會。\n\n他已經等這次機會很久，而你今天真的很需要有人在身邊。票上沒有「對」或「錯」，只有今晚最後一班的時間。",
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
    "scenario": "A restaurant discounts every honest admission, even awkward ones.\n\nDessert begins with playful admissions. As the bill shrinks, you wonder whether the next confession is one you are ready to hear.",
    "question": "Would you talk until dinner is free?",
    "twist": "",
    "deeperQuestion": "What would you never reveal for a discount?",
    "zh": {
      "title": "真心折扣",
      "scenario": "餐廳每說出一個真心話就打折，包括不太好聽的話。\n\n第一道甜品上桌時，大家還笑著說些小秘密。帳單越來越便宜，你卻開始擔心今晚會不會多聽見一句還沒準備好的話。",
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
    "scenario": "You can each live in your favourite season, meeting for only one season yearly.\n\nYou love summer evenings; they love snow. Both could be comfortable, but spontaneous dinners would wait for the seasons to meet.",
    "question": "Would you choose that?",
    "twist": "",
    "deeperQuestion": "Who should choose your season together?",
    "zh": {
      "title": "不同的四季",
      "scenario": "你們可以各住最喜歡的季節，但一年只能相聚一季。\n\n你喜歡夏夜，對方最愛下雪，每人都能有舒服的日子。只是想臨時一起吃飯，就得等下一次季節交會。",
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
    "scenario": "Gifts include a receipt of the giver's feelings while preparing them.\n\nThe wrapping now comes with their rushed journey and uncertainty while choosing. The price stays the same; its meaning may change.",
    "question": "Would you read it?",
    "twist": "",
    "deeperQuestion": "What if it says “I bought this to avoid upsetting you”?",
    "zh": {
      "title": "愛的收據",
      "scenario": "每份禮物附有對方準備時的心情，可能疲倦也可能期待。\n\n你原本只看見包裝漂亮，現在還能看見他趕路的汗和選擇時的猶豫。禮物的價錢沒有變，份量卻可能完全不同。",
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
    "scenario": "Your partner grows a tail that reveals their mood but wants to hide it.\n\nThe tail wags as you approach, then droops at one topic. Understanding suddenly comes without having to ask.",
    "question": "Would you ask to see it?",
    "twist": "",
    "deeperQuestion": "Would you agree to grow one too?",
    "zh": {
      "title": "長尾巴戀人",
      "scenario": "伴侶長出會暴露心情的尾巴，但他想藏起來。\n\n尾巴在你靠近時輕輕搖，提到某件事卻突然垂下。你第一次這麼容易讀懂他，也第一次發現自己不用問就能知道。",
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
    "scenario": "You find treasure that can be claimed only by living apart.\n\nThe money buys comfort for both, but requires separate homes and lives. Letters remain possible; coming home together does not.",
    "question": "Would you leave it behind?",
    "twist": "",
    "deeperQuestion": "What if it could solve a family problem?",
    "zh": {
      "title": "一半寶藏",
      "scenario": "你們找到寶藏，只有分開生活才能各取一半。\n\n箱裡的錢足夠讓兩人都過得自在，規則卻要求不同地址、不同生活。寶藏守衛說你們仍可寫信，只是不能再一起回家。",
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
    "scenario": "A clock adds time together by subtracting your time alone.\n\nOne turn adds two unhurried hours tonight. The cost quietly comes from your walks, daydreaming and solitary coffee.",
    "question": "How far would you turn it?",
    "twist": "",
    "deeperQuestion": "Would you let your partner set it for you?",
    "zh": {
      "title": "陪伴時鐘",
      "scenario": "一個時鐘能增加相處時間，但會扣掉你獨處的時間。\n\n時鐘轉一下，今晚就多出兩小時，不必再匆匆道晚安。代價會從你的散步、發呆和獨自喝咖啡裡慢慢扣走。",
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
    "scenario": "Magic fulfils your partner's dream but changes them in unfamiliar ways.\n\nThey grow confident and enter worlds you do not know. You feel proud, yet sometimes miss being needed more.",
    "question": "Would you encourage it?",
    "twist": "",
    "deeperQuestion": "What would you most hope stays the same?",
    "zh": {
      "title": "陌生的成功",
      "scenario": "魔法令伴侶夢想成真，但他會變成你不熟悉的樣子。\n\n他說話更有自信，也開始認識你不懂的世界。你很替他高興，卻偶爾想念那個比較需要你的他。",
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
    "scenario": "The same memory looks golden to one of you and grey to the other.\n\nYou treasured the trip; your partner remembers accommodating you throughout it. Neither colour is proof, only a different experience.",
    "question": "Which version would you trust?",
    "twist": "",
    "deeperQuestion": "Would you want to change their colour?",
    "zh": {
      "title": "回憶顏色",
      "scenario": "你們看到同一段回憶，一人是金色、一人是灰色。\n\n你以為那趟旅行一直是最好的回憶，對方卻記得自己整路在遷就。顏色不是證據，只是兩人真的感受不同。",
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
    "scenario": "Your shared teddy wants to move to the forest and visit only one of you.\n\nBoth your gifts fit its backpack. It loves neither less, but the forest opens one route home each year.",
    "question": "How should it choose?",
    "twist": "",
    "deeperQuestion": "Would the other person love it less?",
    "zh": {
      "title": "小熊的選擇",
      "scenario": "共同養大的小熊想搬去森林，只會探望其中一人。\n\n牠把兩人送的禮物都裝進小背包，沒有偏愛其中一份。只是森林通往家的路一年只開一次，牠必須選一扇門。",
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
    "scenario": "A perfectly fair coin can settle every disagreement.\n\nCoins make small choices fun; tonight concerns a career opportunity. The coin stays fair while the consequences may not be equal.",
    "question": "Would you always use it?",
    "twist": "",
    "deeperQuestion": "What would you never leave to the coin?",
    "zh": {
      "title": "公平硬幣",
      "scenario": "每次意見不同，都能用一枚絕對公平的硬幣決定。\n\n小事用硬幣很好玩，今晚卻牽涉其中一人的工作機會。硬幣仍然公平，承受後果的人卻不一定一樣多。",
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
    "scenario": "A potion reveals what you most want to say, but you cannot choose the tone.\n\nYou have swallowed the same thought through many pleasant evenings. With the glass raised, you know honesty and gentleness are different skills.",
    "question": "Would you drink it on a date?",
    "twist": "",
    "deeperQuestion": "Would you warn your partner first?",
    "zh": {
      "title": "勇敢藥水",
      "scenario": "藥水能讓你說出最想說的話，卻不能選擇語氣。\n\n你有一件話拖了很久，總在氣氛好時吞回去。杯子已端到嘴邊，你知道真心和說得體貼不是同一件事。",
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
    "scenario": "A compass points to whoever excites you most, sometimes not your partner.\n\nToday the needle points to someone barely known, while a familiar light waits at home. It measures sparks, not shared history.",
    "question": "Would you keep it?",
    "twist": "",
    "deeperQuestion": "Do you think you must follow it?",
    "zh": {
      "title": "心動導航",
      "scenario": "導航會指出讓你最心動的人，方向偶爾不是伴侶。\n\n指針今天指向一個你幾乎不認識的人，回家卻仍有熟悉的燈。導航只懂心跳，不懂誰陪你走過了甚麼。",
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
    "scenario": "You can shrink into a carefree dollhouse life, but cannot hug family again.\n\nFurniture never breaks and bills are crumb-sized. At the doorway you must look far upward to see your family's faces.",
    "question": "Would you move?",
    "twist": "",
    "deeperQuestion": "What if you could return for one day yearly?",
    "zh": {
      "title": "一起變小",
      "scenario": "你們可以變小住進玩具屋，生活無憂，但無法再抱家人。\n\n屋裡有永遠不壞的家具，生活費也小得像餅乾屑。你們站在門口，卻要抬頭很高才能看見家人的臉。",
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
    "scenario": "A pillow asks one relationship question nightly and keeps you awake until answered.\n\nTonight it only asks whether you missed each other. Some evenings, though, you want sleep rather than relationship homework.",
    "question": "Would you buy a pair?",
    "twist": "",
    "deeperQuestion": "What would you want it to ask first?",
    "zh": {
      "title": "睡前一句真話",
      "scenario": "枕頭每天問一個關於感情的問題，不回答就不讓你睡。\n\n枕頭今晚只是問「你今天有沒有想我」，聽起來不難。可有些晚上你只想休息，不想替感情交一份作業。",
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
    "scenario": "You can restore today's relationship later, losing newer memories.\n\nThe backup holds your closeness, smiles and small flaws. Restoring also overwrites later hardships and everything learned together.",
    "question": "Would you make a backup?",
    "twist": "",
    "deeperQuestion": "When would restoring it be worthwhile?",
    "zh": {
      "title": "幸福備份",
      "scenario": "你能備份現在的感情，以後不順就恢復，但新回憶會消失。\n\n存檔裡是現在的默契和笑容，連小小的缺點都在。恢復時，後來一起捱過的難關和新的理解也會被覆蓋。",
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
    "scenario": "A florist can make your partner love any hobby you choose.\n\nYou could share a hobby without taking turns compromising. The florist says your partner would think the preference had always been their own.",
    "question": "Would you choose one?",
    "twist": "",
    "deeperQuestion": "What if they choose one for you too?",
    "zh": {
      "title": "花店老闆",
      "scenario": "花店能讓伴侶愛上你挑的任何興趣。\n\n你們終於可以喜歡同一種活動，不用再輪流遷就。花店卻說他會以為這一直是自己的喜好，不會知道有人替他選過。",
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
    "scenario": "Each thank-you becomes a star, but your partner cannot know you sent it.\n\nThey notice brighter skies and think luck has improved. You know each star's place but cannot point the gratitude toward yourself.",
    "question": "Would you send as many?",
    "twist": "",
    "deeperQuestion": "Would you want them to learn the truth someday?",
    "zh": {
      "title": "無聲的謝謝",
      "scenario": "你每次感謝對方，他就收到一顆星，但不知道是你送的。\n\n他看見夜空越來越亮，以為只是最近運氣好。你能看見每顆星的位置，卻不能把他的目光指回自己。",
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
    "scenario": "Two trains reach happiness: a slow one together or fast separate ones.\n\nThe slow train has adjacent seats; lights already shine outside the fast one. Arrival is guaranteed, wanting the same life afterwards is not.",
    "question": "Which would you board?",
    "twist": "",
    "deeperQuestion": "What if your partner chooses the other train?",
    "zh": {
      "title": "同路終點",
      "scenario": "兩班車都到幸福，一班一起慢慢走，一班各自很快到。\n\n慢車上有兩個相鄰座位，快車的窗外已開始亮起燈。兩班都保證到達，卻沒保證到了以後還會想要同樣的生活。",
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
    "scenario": "The last magic sweet lets one of you fully understand the other.\n\nYou have both said “You don't understand.” The sweet offers understanding, not necessarily agreement or the power to fix everything.",
    "question": "Who should eat it?",
    "twist": "",
    "deeperQuestion": "Does the person understood owe anything back?",
    "zh": {
      "title": "最後一顆糖",
      "scenario": "最後一顆魔法糖能讓一人完全理解另一人。\n\n你們都曾說過「你不明白我」，現在糖就放在兩人之間。吃下的人會理解，卻不一定贊同，或有能力改變一切。",
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
    "scenario": "You can keep every promise but forget whom each fulfilled promise was for.\n\nYou would arrive on time and keep every promise. Yet their grateful smile might leave you unsure why the act mattered so much.",
    "question": "Would you agree?",
    "twist": "",
    "deeperQuestion": "Would your partner still feel loved?",
    "zh": {
      "title": "會忘的承諾",
      "scenario": "你能保證永不失約，但每完成一個承諾就忘記是為誰做的。\n\n你會準時出現，也會把每件答應的事做好。只是對方開心地說謝謝時，你可能不懂那件小事為甚麼如此重要。",
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
    "scenario": "Each morning you choose love again without relying on yesterday's answer.\n\nA blank card waits by the bed, with no guaranteed answer. Yesterday's care still matters without becoming an obligation to stay today.",
    "question": "Would you feel scared or hopeful?",
    "twist": "",
    "deeperQuestion": "Would you want to hear their answer first?",
    "zh": {
      "title": "明天再選",
      "scenario": "你們每天醒來都要重新選擇是否相愛，不能靠昨天的答案。\n\n床頭會多一張空白卡，沒有保證，也沒有預先填好的答案。昨天的照顧仍然存在，只是不能當成今天必須留下的理由。",
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
    "scenario": "A family tree grows a leaf for every rule, until it blocks the sky.\n\nAt breakfast a “no talking back” rule darkens the room. An elder calls it protection; someone else wants to see the sky.",
    "question": "Which rule would you remove?",
    "twist": "",
    "deeperQuestion": "Who should be allowed to remove leaves?",
    "zh": {
      "title": "家族小樹",
      "scenario": "家族樹每多一條家規就多一片葉，葉太密會遮住天空。\n\n早餐時，小孩把一張「不准頂嘴」綁上樹枝，屋裡立刻暗了一點。長輩說那是為大家好，卻有人想先看看窗外。",
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
    "scenario": "Grandma can be eighteen for a year and chase her own dreams.\n\nShe uncovers an old travel notebook, grinning like a truant. You realize her memories hold more than everyone's favourite meals.",
    "question": "Would you want her to stay or go?",
    "twist": "",
    "deeperQuestion": "Would you join her or let her go alone?",
    "zh": {
      "title": "奶奶的十八歲",
      "scenario": "奶奶能變回十八歲一年，但會去追自己的夢想。\n\n她已拿出一本壓在衣櫃底多年的旅行筆記，笑得像準備逃課。你才發現，她記得的不只有誰愛吃甚麼。",
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
    "scenario": "Your table gains a seat for someone no longer in your life.\n\nSoup is ready when the chair slides from the wall. One person longs for a familiar voice; another has only just adjusted to its absence.",
    "question": "Whom would you invite?",
    "twist": "",
    "deeperQuestion": "What if another relative does not want them there?",
    "zh": {
      "title": "飯桌空位",
      "scenario": "飯桌每晚多一個空位，能請一位已離開生活的人回來吃飯。\n\n湯剛煮好，椅子自己從牆邊滑過來。有人很想再聽一個聲音，也有人花了很久才適應那個人不在。",
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
    "scenario": "A fairy does every chore, provided nobody says thank you.\n\nEveryone finally sits down; the usual carer cannot settle. The aproned fairy asks only that you get used to its work.",
    "question": "Would you hire it?",
    "twist": "",
    "deeperQuestion": "What could your family use instead?",
    "zh": {
      "title": "家務精靈",
      "scenario": "精靈包辦所有家務，條件是全家不能說謝謝。\n\n全家終於能坐下，平常忙到最後的人卻不知道雙手該放哪裡。精靈戴著圍裙，說它不需要被感謝，只要大家習慣。",
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
    "scenario": "You can take three tins of family memories when moving; the rest fade.\n\nLaughter, cooking smells and small arguments float in clear tins. Each relative reaches toward a different one.",
    "question": "What would you keep?",
    "twist": "",
    "deeperQuestion": "Should everyone get a tin of their own?",
    "zh": {
      "title": "回憶罐頭",
      "scenario": "搬家只能帶三罐家庭回憶，其餘會淡去。\n\n搬運員把每罐都擦得透明，笑聲、飯香和小爭吵在裡面浮動。不同家人伸手指向的，偏偏不是同一罐。",
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
    "scenario": "Adults and children swap decision-making power every Sunday.\n\nChildren schedule the playground; adults ask for a nap. A magic sign reminds everyone that today's quieter voices really get to decide.",
    "question": "Would you try it?",
    "twist": "",
    "deeperQuestion": "Which decision should not be swapped?",
    "zh": {
      "title": "角色星期天",
      "scenario": "每個星期天，家中大人和小孩交換決定權。\n\n孩子把遊樂場排進行程，大人則小聲問能不能先睡一會。門口的魔法表提醒大家，今天真的要讓平常說了不算的人作主。",
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
    "scenario": "Your ancestral house wants to retire and travel as reclaimed wood.\n\nIt sheltered generations and still bears their height marks. It loves you all, but longs to see the sea.",
    "question": "Would you respect its wish?",
    "twist": "",
    "deeperQuestion": "Which part would you most want to keep?",
    "zh": {
      "title": "會說話的祖屋",
      "scenario": "祖屋說它想退休，被拆成木材去旅行。\n\n它曾替幾代人擋過雨，窗框還留著量身高的刻痕。它說很愛你們，但也想看看從沒見過的海。",
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
    "scenario": "A family chart records acts of happiness, not careers or grades.\n\nA supposedly unsuccessful relative fills a page with stars. Every night spent keeping someone company has been recorded.",
    "question": "Would you want one?",
    "twist": "",
    "deeperQuestion": "How would a quiet relative be remembered?",
    "zh": {
      "title": "幸福家譜",
      "scenario": "家譜只記下讓別人幸福的事，不記職業和成績。\n\n翻到某位不太成功的親戚，整頁竟然亮得像星空。原來他替人守過的夜，也會被一筆筆記下。",
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
    "scenario": "A machine gives everyone equal sweets, including people who dislike them.\n\nA sweet-lover watches untouched packets. The machine announces fairness, unaware that someone would prefer fruit.",
    "question": "Is that fair?",
    "twist": "",
    "deeperQuestion": "How could someone ask for more?",
    "zh": {
      "title": "分糖機器",
      "scenario": "機器把糖平均分給全家，連不愛吃糖的人也有一份。\n\n最愛吃糖的人望著別人沒拆封的那份，不敢開口。機器亮著「公平完成」，卻不懂有人其實想要水果。",
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
    "scenario": "A pup obeys every house rule but never chooses its own games.\n\nThe pup stays exactly where instructed. When you lift a ball, it checks the rule chart before showing excitement.",
    "question": "Would you want it naughtier?",
    "twist": "",
    "deeperQuestion": "Which rule could it break first?",
    "zh": {
      "title": "聽話小狗",
      "scenario": "小狗從不違反家規，卻也不會自己想玩甚麼。\n\n牠每次都坐在指定位置，連開門也不會跑出去。你拿起球等牠興奮，牠卻先望向家規表。",
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
    "scenario": "Your table can take everyone to dinner in one past year.\n\nMeals from different years shimmer on the cloth. Some long for childhood; others would rather avoid those years.",
    "question": "Which year would you choose?",
    "twist": "",
    "deeperQuestion": "Should relatives not yet born come too?",
    "zh": {
      "title": "餐桌時光機",
      "scenario": "餐桌能帶全家回到同一年的晚餐，但只能選一年。\n\n桌布開始映出不同年份的飯菜，空氣裡混著幾種熟悉香味。有人想回到小時候，有人卻想避開那幾年。",
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
    "scenario": "An heirloom asks to go to whoever treasures it most, not necessarily the eldest.\n\nIts first request after years in a box is to be used, even worn down. One relative would rather lock it away to preserve its value.",
    "question": "Would you listen?",
    "twist": "",
    "deeperQuestion": "How would you tell care from wanting ownership?",
    "zh": {
      "title": "傳家寶開口",
      "scenario": "傳家寶說它想送給最珍惜它的人，不一定是長子。\n\n它在盒裡等了多年，第一次開口不是要被好好收藏。它想被經常使用，即使因此磨損，而某位家人只想鎖起來保值。",
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
    "scenario": "A child finds a kingdom adults cannot enter or monitor.\n\nSmall footprints and laughter surround the entrance. The child promises to return for dinner but refuses your tracking bell.",
    "question": "Would you let them visit?",
    "twist": "",
    "deeperQuestion": "What signal would you agree on for coming home?",
    "zh": {
      "title": "小孩的王國",
      "scenario": "小孩發現一個只有孩子能進的王國，大人無法監看。\n\n門口有小鞋子的腳印和笑聲，裡面看來很好玩。孩子答應晚飯前回家，卻不想帶上你偷偷準備的追蹤鈴。",
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
    "scenario": "A birthday box grants only wishes the whole family agrees on.\n\nCandles burn low as everyone revises the birthday wish. The accepted version barely resembles what the birthday person wanted.",
    "question": "Would you want it?",
    "twist": "",
    "deeperQuestion": "What if the same person's wishes keep losing?",
    "zh": {
      "title": "生日願望箱",
      "scenario": "生日願望箱只實現全家都同意的願望。\n\n蠟燭快燒完，大家輪流修改壽星的願望。最後那個版本誰都接受，卻已不太像他最初想要的。",
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
    "scenario": "Family dreams grow as plants, some very slowly.\n\nOne plant bears fruit quickly; another has two leaves after six months. Its grower still kneels daily to notice tiny changes.",
    "question": "Which would you tend first?",
    "twist": "",
    "deeperQuestion": "Would you pull out one that never bears fruit?",
    "zh": {
      "title": "夢想農場",
      "scenario": "家人種下的夢想會長成植物，有些長得很慢。\n\n一棵很快長出果實，另一棵半年只有兩片葉。種慢樹的人每天仍蹲在旁邊，認真記錄那一點變化。",
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
    "scenario": "At dinner, a card names the role your family usually expects you to play.\n\nCards read “sensible child” and “adult who never tires.” Dinner tastes unchanged, but everyone's assigned lines are suddenly visible.",
    "question": "Would you act it out?",
    "twist": "",
    "deeperQuestion": "Whose card would you like to swap for a while?",
    "zh": {
      "title": "家人的字幕卡",
      "scenario": "全家吃飯時，每人面前出現一句大家習慣叫他扮演的角色。\n\n有人抽到「懂事的孩子」，有人拿著「不能累的大人」。桌上的飯一樣好吃，大家卻第一次看見彼此背著的台詞。",
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
    "scenario": "Dad has a door to his own world and has never invited anyone in.\n\nThrough the gap are old records and a guitar you never knew. The room is close, yet holds a distant part of him.",
    "question": "Would you knock?",
    "twist": "",
    "deeperQuestion": "Could you accept it if he wants privacy?",
    "zh": {
      "title": "爸爸的秘密門",
      "scenario": "爸爸有一道只通往他自己世界的門，從未邀人進去。\n\n你在門縫看見他年輕時喜歡的唱片，還有一把沒帶你見過的吉他。裡面很近，卻像是他保留很久的一段遠方。",
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
    "scenario": "Allowances become time: play for children, rest for adults.\n\nEveryone sketches plans on the table. The usual carer writes only “sleep,” without dressing it up as a worthwhile goal.",
    "question": "How would you divide it?",
    "twist": "",
    "deeperQuestion": "Should people doing chores receive more?",
    "zh": {
      "title": "時間零用錢",
      "scenario": "零用錢變成時間，小孩可以買遊戲時間，大人可以買休息。\n\n分配表攤在飯桌上，每個人都畫了自己想做的事。最常照顧人的那位只寫「睡覺」，沒有加任何漂亮的理由。",
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
    "scenario": "Your home follows its saddest person's weather.\n\nThree rainy days leave damp clothes and tired relatives. The sad person starts apologizing as though even the weather were their fault.",
    "question": "Would you find them first or turn on the heating?",
    "twist": "",
    "deeperQuestion": "How would you help if they do not want to talk?",
    "zh": {
      "title": "家族天氣站",
      "scenario": "家裡天氣跟著最難過的人變化。\n\n雨已下了三天，衣服曬不乾，大家也有點疲倦。那個難過的人開始道歉，像是連天氣都變成自己的錯。",
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
    "scenario": "An older relative can start school anew, forgetting their age.\n\nThey shyly show you the prospectus, as if asking for an expensive toy. Their excitement resembles a child preparing for school.",
    "question": "Would you support using family savings?",
    "twist": "",
    "deeperQuestion": "What if the course will never earn money?",
    "zh": {
      "title": "長輩忘年票",
      "scenario": "長輩可以忘記年齡，重新報名任何學校。\n\n他第一次拿出課程簡介時有點不好意思，像在要一件太貴的玩具。你看見他眼裡那份期待，和孩子開學前很像。",
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
    "scenario": "A family money tree grows one banknote daily, whoever waters it.\n\nThe tree counts no credit, dropping money each dawn. One person needs medicine, another lessons, and one has watered it all year.",
    "question": "Who should get it?",
    "twist": "",
    "deeperQuestion": "Should its caretaker have first claim?",
    "zh": {
      "title": "共享錢樹",
      "scenario": "家中錢樹每天只長一張鈔票，誰澆水都一樣。\n\n樹不記功勞，只在每天清晨叮一聲掉錢。家裡有人想買藥，有人想學畫，也有人已澆了整整一年水。",
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
    "scenario": "A magnet brings distant relatives home but disrupts their plans.\n\nYou picture a family dinner while placing the magnet on the fridge. Far away, that person may be stepping onto their first stage.",
    "question": "Would you use it?",
    "twist": "",
    "deeperQuestion": "What if they keep saying they are busy?",
    "zh": {
      "title": "回家磁鐵",
      "scenario": "磁鐵能把搬遠的家人拉回身邊，但會打亂他的計劃。\n\n你把磁鐵放在冰箱上，想像久違的全家晚餐。遠方那人卻可能正站在人生第一次屬於自己的舞台前。",
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
    "scenario": "Every family argument becomes a replayable museum exhibit.\n\nExhibits preserve both words and hidden hurt. Some see a lesson; others fear there will be no room to start anew.",
    "question": "Would you keep the museum?",
    "twist": "",
    "deeperQuestion": "Who should be allowed to close an exhibit?",
    "zh": {
      "title": "吵架博物館",
      "scenario": "家裡每場吵架都會變成展品，大家能重看。\n\n展牌會記錄每人的原話，也保留沒說出口的委屈。有人覺得這能防止重犯，有人卻怕家裡再沒有重新開始的空間。",
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
    "scenario": "A school grades only helping others, not exams.\n\nReports record carried bags and comfort offered, not rankings. The teacher admits some children struggle to refuse because they want good grades.",
    "question": "Would you send a child there?",
    "twist": "",
    "deeperQuestion": "Could a child choose a low grade by saying no?",
    "zh": {
      "title": "另一種成績表",
      "scenario": "學校只評「有沒有幫助別人」，不評考試。\n\n成績單上沒有名次，只有幫人提袋、陪人哭過的紀錄。老師也坦白，有些孩子為了拿高分，很難說不。",
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
    "scenario": "Your cat learns to speak and asks for a family vote.\n\nThe cat's first motion bans the vacuum. You laugh until it asks why fear must always be endured.",
    "question": "Would you agree?",
    "twist": "",
    "deeperQuestion": "Could it veto adopting another cat?",
    "zh": {
      "title": "家貓投票",
      "scenario": "家貓能說話後，要求家庭投票也有牠一票。\n\n牠認真坐上椅子，第一項提案是把吸塵器逐出家門。你覺得好笑，直到牠問為甚麼害怕就一定要忍耐。",
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
    "scenario": "A doll keeps a child at their cutest age, stopping growth.\n\nClothes never become too small and that sweet greeting stays. The doll quietly removes the next book the child hoped to read.",
    "question": "Would you keep it?",
    "twist": "",
    "deeperQuestion": "What if the child wants to stay little?",
    "zh": {
      "title": "永遠幼小",
      "scenario": "玩偶能讓孩子永遠保持最可愛的年紀，但不再長大。\n\n孩子的衣服永遠不會再太小，最甜的那句叫喚也留得住。玩偶卻悄悄收走了他一直想看的下一本書。",
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
    "scenario": "Everyone can spend a day in a different family.\n\nThe other home need not be better, just different. Everyone may bring back one rule they liked that evening.",
    "question": "Would you try it?",
    "twist": "",
    "deeperQuestion": "What new habit would you hope to bring home?",
    "zh": {
      "title": "親情交換日",
      "scenario": "你能到另一個家庭住一天，自己的家人也會去別家。\n\n交換的家不用更好，只會有不同的早餐和相處方式。晚上回來時，每人都能帶回一條喜歡的新規矩。",
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
    "scenario": "Your family may heal minor illnesses, teleport, or understand animals.\n\nAfter a trial of each power, preferences split unexpectedly. Some want relief; others want to see distant places together.",
    "question": "Which gets your vote?",
    "twist": "",
    "deeperQuestion": "Would you change your vote for one relative?",
    "zh": {
      "title": "家族超能力",
      "scenario": "全家只能選一種超能力：治小病、瞬間移動或聽懂動物。\n\n精靈讓每人先試一次，你們突然發現選擇沒有想像中一致。有人最想減少辛苦，有人只想一起看看遠方。",
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
    "scenario": "A table moves weekly to the home most people want to gather in.\n\nThe table lifts its legs tonight while the usual host looks relieved. Guests loving a place does not mean its host always wants company.",
    "question": "Would you try to keep it?",
    "twist": "",
    "deeperQuestion": "What if the usual cook wants a break?",
    "zh": {
      "title": "會走的餐桌",
      "scenario": "餐桌只會停在有最多人想聚的家，每週自動搬走。\n\n今晚它已開始輕輕抬腳，常辦聚會的人反而鬆一口氣。你才想到，大家喜歡回來和主人想不想招待是兩件事。",
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
    "scenario": "Your shadow reveals kind things siblings have done for you.\n\nAn umbrella appears in your shadow from a lift your sibling never mentioned. The person you quarrel with has offered much quiet care.",
    "question": "Would you want to see them?",
    "twist": "",
    "deeperQuestion": "Would knowing make you feel indebted?",
    "zh": {
      "title": "兄弟姊妹影子",
      "scenario": "你的影子會顯示手足為你做過的好事。\n\n影子忽然多了一把傘，原來是那次他沒告訴你的繞路接送。平常愛吵架的那個人，竟替你留了不少不出聲的好。",
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
    "scenario": "Each relative may hang one life choice as a star above the home.\n\nAchievements are easy to choose; one person chooses starting over. Their star is dim, but represents a difficult step.",
    "question": "What would yours be?",
    "twist": "",
    "deeperQuestion": "Could a failed choice deserve a star?",
    "zh": {
      "title": "屋頂星星",
      "scenario": "每人只能把一個人生選擇掛成屋頂的星。\n\n成功的事很好挑，有人卻想掛上一次重新開始。那顆星不太亮，但對他來說，已經是很難的一步。",
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
    "scenario": "A bubble protects a child from harm but prevents climbing and adventures.\n\nThe bubble is warm and tear-free. Outside, children help each other up; inside, the child asks how the world feels.",
    "question": "Would you use it?",
    "twist": "",
    "deeperQuestion": "Could the child decide when to step out?",
    "zh": {
      "title": "安全泡泡",
      "scenario": "泡泡能保護孩子不受傷，但也不准他爬樹和冒險。\n\n泡泡很暖，也沒有跌倒的眼淚。外面的孩子正在互相幫忙爬起來，裡面的孩子第一次問外面是甚麼感覺。",
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
    "scenario": "Discarded keepsakes cry, but keeping everything fills the house.\n\nA cracked mug cries loudest because only one relative remembers its story. Others see damage; that person sees an irreplaceable breakfast.",
    "question": "How would you choose?",
    "twist": "",
    "deeperQuestion": "Would you make space for someone else's keepsakes?",
    "zh": {
      "title": "會哭的舊物",
      "scenario": "舊物被丟掉會哭，但留下會把家塞滿。\n\n一隻舊杯哭得最大聲，因為只有一個家人記得它的故事。其他人看見的是裂痕，那個人看見的卻是一頓已回不去的早餐。",
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
    "scenario": "A mirror shows Mum's happy life without children.\n\nIn the mirror she leaves with friends in an unfamiliar coat. In reality she has just asked what you want for dinner.",
    "question": "Would you invite her to watch?",
    "twist": "",
    "deeperQuestion": "What if she wants to keep watching?",
    "zh": {
      "title": "媽媽的平行人生",
      "scenario": "鏡子能看見媽媽沒有生孩子的人生，她似乎過得很快樂。\n\n鏡中的她穿著你從未見過的外套，正跟朋友出發。現實裡，她剛問完你晚餐想吃甚麼。",
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
    "scenario": "A fairy gives everyone a week off being considerate.\n\nThat week allows changed minds and leaving messes. Before your own turn, the fairy asks you to tolerate someone else's freedom.",
    "question": "Who should go first?",
    "twist": "",
    "deeperQuestion": "Should everyone else handle the consequences?",
    "zh": {
      "title": "一週不用懂事",
      "scenario": "精靈讓每人有一週不用顧全大局。\n\n那一週可以臨時改主意，也不用第一個收拾殘局。精靈提醒大家，輪到自己之前，要先學會容許別人沒那麼乖。",
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
    "scenario": "A bell restores family harmony without solving the problem.\n\nThe bell brings everyone back to the table. Only the person repeatedly interrupted remembers never finishing their point.",
    "question": "Would you ring it daily?",
    "twist": "",
    "deeperQuestion": "After what argument would you refuse?",
    "zh": {
      "title": "自動和好鐘",
      "scenario": "鐘聲一響全家就和好，卻沒人解決問題。\n\n鐘一響，大家又能坐在一起，氣氛很快恢復。只有那個一直被打斷的人還記得，自己根本沒講完。",
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
    "scenario": "Achievements become cookies the family can share.\n\nSome plates tower; others hold tiny cookies. The oven also counts asking for help and surviving a difficult morning.",
    "question": "Would you ever keep yours alone?",
    "twist": "",
    "deeperQuestion": "Would quietly surviving difficulty earn a cookie?",
    "zh": {
      "title": "成就餅乾",
      "scenario": "每個成就都變成餅乾，家人可以分享吃掉。\n\n有人的盤子堆得很高，有人的餅乾小得幾乎看不見。烤箱說它也計算看病、求助和熬過一個難熬的早晨。",
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
    "scenario": "One coupon frees a relative from caring for others for a week.\n\nThe unnamed coupon sits while everyone waits. The busiest person is still clearing dishes and has not joined the discussion.",
    "question": "Who gets it?",
    "twist": "",
    "deeperQuestion": "What if the most tired person refuses it?",
    "zh": {
      "title": "家庭休息券",
      "scenario": "全家只有一張休息券，持有人一星期不用照顧別人。\n\n休息券沒有名字，大家都等別人先開口。平常最忙的那人還在收碗，甚至沒坐下來參與討論。",
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
    "scenario": "The family dog gains a choice and wants to live with a sibling who moved out.\n\nThe dog nudges its ball into your sibling's suitcase, then licks your hand. It is not rejecting you; it has somewhere it wants to go.",
    "question": "Would you let it?",
    "twist": "",
    "deeperQuestion": "Does who paid for food matter?",
    "zh": {
      "title": "狗狗選主人",
      "scenario": "家犬得到選擇住處的權利，牠想跟搬走的手足住。\n\n牠把最愛的球推向手足的行李箱，又回頭舔了舔你的手。這不像拒絕你，只是牠也有一個想去的地方。",
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
    "scenario": "A machine translates each house rule into an adult's worry.\n\nOne rule translates to fear for your safety; another to fear of neighbours' judgment. Rules do not all come from the same kind of care.",
    "question": "Which would you translate?",
    "twist": "",
    "deeperQuestion": "Must you obey once you understand the worry?",
    "zh": {
      "title": "家規翻譯機",
      "scenario": "每條家規都能翻譯成大人的擔心。\n\n機器把「太晚別出門」翻成害怕你遇險，也把另一條翻成害怕被鄰居議論。原來規矩背後，不全是同一種關心。",
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
    "scenario": "A spring makes you happy to care for family without wanting anything back.\n\nThose who drink look peaceful. You cannot tell whether they are freer or have forgotten their own needs.",
    "question": "Would you drink?",
    "twist": "",
    "deeperQuestion": "Would you offer it to the busiest carer?",
    "zh": {
      "title": "不求回報泉",
      "scenario": "泉水讓你樂於照顧家人，但再也不希望得到回報。\n\n泉邊很安靜，喝過的人看起來輕鬆又滿足。你卻不知道他是真的自由了，還是再也想不起自己也有需要。",
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
    "scenario": "Soup recalls one shared memory, tasting different to everyone.\n\nOne sip makes someone laugh and another lower their spoon. A single pot holds several different childhoods.",
    "question": "Which memory would you cook?",
    "twist": "",
    "deeperQuestion": "Would you ask why if someone finds it bitter?",
    "zh": {
      "title": "記得的味道",
      "scenario": "湯能讓全家想起同一段回憶，但每人味道不同。\n\n第一口湯下去，有人笑了，有人放下湯匙。廚房明明只煮了一鍋，卻裝著幾種不同的童年。",
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
    "scenario": "A radar lights up people who truly care, possibly leaving some relatives dark.\n\nAt a lively gathering, the radar lights a quiet, distant relative. It measures inner care rather than polished words.",
    "question": "Would you turn it on?",
    "twist": "",
    "deeperQuestion": "Would it change whom you keep seeing?",
    "zh": {
      "title": "親戚雷達",
      "scenario": "雷達能找出真正關心你的人，可能有些親戚不會亮燈。\n\n聚會很熱鬧，雷達卻在一個平常很少聯絡的人身上亮起。它看不見說得多漂亮，只看得見對方心裡留了多少位置。",
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
    "scenario": "A magic room takes any form but serves one relative daily.\n\nSomeone wants a dance studio; another needs sleep. The room can change daily, but the most persuasive person cannot always come first.",
    "question": "How would you schedule it?",
    "twist": "",
    "deeperQuestion": "Should birthdays always come first?",
    "zh": {
      "title": "共享房間",
      "scenario": "魔法房間能變成任何模樣，但每天只能滿足一位家人。\n\n有人想要練舞房，有人想要睡得好的小屋。房間每天都能改，卻不能讓最會開口的人一直排在前面。",
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
    "scenario": "A robot chats with an older relative and remembers every family story.\n\nThe elder enjoys retelling stories to a patient listener. You feel relieved and unexpectedly a little left out.",
    "question": "Can it replace your visits?",
    "twist": "",
    "deeperQuestion": "What if the relative prefers the robot?",
    "zh": {
      "title": "回憶代班",
      "scenario": "機器人能陪長輩聊天，還記得所有家事。\n\n長輩和它聊得很開心，連你聽過很多次的故事也有人耐心回應。你鬆了一口氣，又有一點說不出的失落。",
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
    "scenario": "You can teach an elder a skill, but they fear mistakes like a child.\n\nThey hold the tool carefully and call themselves foolish after one mistake. You recognize words your younger self once used.",
    "question": "How would you teach?",
    "twist": "",
    "deeperQuestion": "Would you wish adults had taught you that way?",
    "zh": {
      "title": "長輩小學生",
      "scenario": "你能教長輩一項新技能，但他會像小學生一樣怕做錯。\n\n他握著工具很小心，做錯一次就說自己太笨。你突然聽出，那句話很像你小時候對自己說過的。",
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
    "scenario": "A photo can add an absent relative by removing someone else.\n\nThe smiles seem complete except for someone working elsewhere. The studio says adding one missed person removes someone actually present.",
    "question": "Would you change it?",
    "twist": "",
    "deeperQuestion": "What if the person removed agrees?",
    "zh": {
      "title": "相片空白處",
      "scenario": "一張合照能補上當天缺席的人，但會刪走另一人的位置。\n\n相片裡笑容很完整，只有一個人那天在外面工作。修相店說空間有限，加上一份思念，就要移走一份真實的在場。",
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
    "scenario": "A box holds every secret of the previous generation; opening reveals them to everyone.\n\nThe box carries dates, not moral labels. Answers could resolve confusion or take away someone's private corner.",
    "question": "Would you open it?",
    "twist": "",
    "deeperQuestion": "Would it matter if those people were still alive?",
    "zh": {
      "title": "家族秘密箱",
      "scenario": "箱子裝著上一代所有秘密，打開後全家都會知道。\n\n箱子上沒有「好」或「壞」的標籤，只有被封住很久的日期。答案可能解開誤會，也可能讓某位家人失去想保留的私人角落。",
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
    "scenario": "Love can be weighed, and your family's portions differ.\n\nThe weights change daily, rising for someone ill. You want fairness while knowing care takes different forms at different times.",
    "question": "Would you demand equal amounts?",
    "twist": "",
    "deeperQuestion": "Could someone in difficulty receive extra?",
    "zh": {
      "title": "愛的份量",
      "scenario": "愛能秤重，你發現家人給每人的份量不同。\n\n秤上的數字每天變，有人在生病時突然變重。你想要公平，又知道同一份愛在不同時候可能有不同用法。",
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
    "scenario": "A pet can live a century if every generation cares for it.\n\nIt fits your palm now but could outlive generations of moves. Today's promise may become a duty for someone not yet born.",
    "question": "Would you promise for future generations?",
    "twist": "",
    "deeperQuestion": "What if the next generation says no?",
    "zh": {
      "title": "不老寵物",
      "scenario": "寵物能陪全家一百年，但每代人都要答應照顧牠。\n\n牠小得可以睡在掌心，未來卻會見證幾代人成家搬走。今天的一句答應，可能變成還沒出生的人某天的責任。",
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
    "scenario": "Your family can choose a new surname for what it hopes to become.\n\nThe register leaves a blank without demanding an impressive name. Suggestions include freedom and reunion, revealing different hopes.",
    "question": "What would you suggest?",
    "twist": "",
    "deeperQuestion": "How would you include someone keeping the old name?",
    "zh": {
      "title": "新姓氏",
      "scenario": "全家可以一起選一個新姓氏，代表想成為怎樣的一家人。\n\n登記本留著一個空格，沒有要求名字聽起來厲害。家人提的詞有「自在」也有「團圓」，原來希望並不完全一樣。",
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
    "scenario": "Your family can live free on a cloud, but one relative fears heights.\n\nEveryone plans sky gardens and stargazing except one silent relative. The fairy agent cannot reserve the last home forever.",
    "question": "Would you decline?",
    "twist": "",
    "deeperQuestion": "What if you could build a path to the ground?",
    "zh": {
      "title": "搬去雲上",
      "scenario": "全家能免費搬到雲上，但一位怕高的家人不想去。\n\n大家已經想好雲上菜園和看星星的位置，只有一個人一直沉默。售樓精靈說這是最後一戶，不能一直替你們保留。",
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
    "scenario": "A radio plays only praise your relatives say behind your back.\n\nYou hear a stern relative speak warmly about you to a friend. It reveals how long you had waited for those words.",
    "question": "Would you listen daily?",
    "twist": "",
    "deeperQuestion": "How would you feel on a silent day?",
    "zh": {
      "title": "只聽好話",
      "scenario": "收音機只播放家人背後稱讚你的話。\n\n你第一次聽見平常嘴硬的人怎樣向朋友提起你。聲音很溫柔，卻也讓你發現自己等這句話已經等了很久。",
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
    "scenario": "Parents can send doubles to each child, but never gain their memories.\n\nEvery child gets an attentive afternoon and parents get rest. That evening only the child remembers getting caught in the rain together.",
    "question": "Does it count as being there?",
    "twist": "",
    "deeperQuestion": "Would it matter if the child knows?",
    "zh": {
      "title": "分身父母",
      "scenario": "父母可以分身陪每個孩子，但分身的回憶不會傳回本尊。\n\n每個孩子都得到不分心的一個下午，父母本尊也終於能休息。晚上分享時，卻只有孩子記得那場一起淋過的雨。",
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
    "scenario": "Family wishes come true in a queue with children first.\n\nThe queue stretches outside while an adult pockets their dream. Everyone praises their patience without asking how many turns they have waited.",
    "question": "Is that reasonable?",
    "twist": "",
    "deeperQuestion": "Could a lifelong carer move ahead?",
    "zh": {
      "title": "願望輪候室",
      "scenario": "家中願望要輪流成真，小孩的排在大人前面。\n\n輪候牌排到街外，一位大人把自己的夢折好收進袋。大家稱讚他體貼，卻沒有人問他已經等過多少輪。",
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
    "scenario": "An heirloom passes on courage along with the previous generation's fears.\n\nCourage shines in danger; inherited fears whisper caution daily. You wonder which protects the child and which keeps them indoors.",
    "question": "Would you pass it down?",
    "twist": "",
    "deeperQuestion": "Which fear would you explain first?",
    "zh": {
      "title": "勇敢傳家寶",
      "scenario": "傳家寶能傳下勇氣，也會傳下上一代的恐懼。\n\n盒子裡的勇氣會在危急時發亮，恐懼則在平常日子提醒人小心。你不知道哪一部分是在保護孩子，哪部分會讓他不敢出門。",
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
    "scenario": "You can spend a day with your parents as children without revealing yourself.\n\nThey know nothing of future parenthood, only afternoon games. You have questions but also want them to enjoy being children.",
    "question": "What would you bring?",
    "twist": "",
    "deeperQuestion": "Would you try to change one experience?",
    "zh": {
      "title": "父母的童年",
      "scenario": "你能陪年幼的父母玩一天，卻不能告訴他你是誰。\n\n他們還不知道自己將來會成為誰的父母，只關心下午能不能出去玩。你有很多問題，卻也想讓他們先好好當一天小孩。",
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
    "scenario": "A mirror shows differences but never who is better.\n\nSiblings glow differently with no arrows showing who must catch up. Even praise needs relearning without comparison.",
    "question": "Would you put it at home?",
    "twist": "",
    "deeperQuestion": "What would you want your family to notice?",
    "zh": {
      "title": "不用比較的鏡",
      "scenario": "鏡子看不見誰比誰優秀，只看見每人的不同。\n\n鏡裡手足各自發光，沒有箭頭指出誰要追上誰。有人不習慣少了比較，連稱讚也要重新學。",
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
    "scenario": "Everyone may make one life decision for another relative.\n\nThe voucher could prevent your old mistake or steer someone onto your preferred path. Control has suddenly arrived gift-wrapped.",
    "question": "Would you use your voucher?",
    "twist": "",
    "deeperQuestion": "Would you give the choice back to them?",
    "zh": {
      "title": "家人的選擇券",
      "scenario": "每人能替另一位家人作一個人生決定。\n\n券可以用來幫他避開一個你走過的坑，也可以把他推向你喜歡的路。紙很輕，卻第一次讓控制看起來像禮物。",
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
    "scenario": "A traditional cake adds chocolate because it dislikes being predictable.\n\nElders notice immediately; children love the new taste. The cake hides at the plate's edge, asking for a New Year of its own.",
    "question": "Would you serve it at the reunion dinner?",
    "twist": "",
    "deeperQuestion": "Who gets to change a family recipe?",
    "zh": {
      "title": "會逃跑的年糕",
      "scenario": "祖傳年糕不想年年同一味，偷偷加了巧克力。\n\n長輩第一口就嚐出不同，孩子卻覺得比往年好吃。年糕躲在碟邊，說它也想有一次自己的新年。",
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
    "scenario": "Your door opens only to an honest account of today's feelings.\n\nYou say “fine,” but the door stays shut. Dinner smells drift out; you wonder whether coming home must require full disclosure.",
    "question": "Would you install it?",
    "twist": "",
    "deeperQuestion": "Could someone who wants privacy have a spare key?",
    "zh": {
      "title": "家門密碼",
      "scenario": "家門密碼是「今天最真實的心情」，答錯就進不了。\n\n你只說「還好」，門卻安靜不動。屋裡已傳來飯香，你不知道回家是不是也必須先把心完全打開。",
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
    "scenario": "A child can join an always-happy magic home but forget the old family.\n\nLaughter comes from a home that seems genuinely caring. Holding the child's hand, you wonder whose needs staying would serve.",
    "question": "Would you send them?",
    "twist": "",
    "deeperQuestion": "Should the child know the cost?",
    "zh": {
      "title": "幸福寄養",
      "scenario": "一個孩子能去永遠幸福的魔法家，卻不再記得原本家人。\n\n魔法家的窗裡傳出笑聲，孩子似乎真的會被好好照顧。你握著他的手，分不清留下是為他，還是為自己。",
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
    "scenario": "The loudest relative can become a quiet cloud for three days.\n\nThe clock becomes audible, but nobody starts a conversation. The cloud floats quietly, almost laughing without sound.",
    "question": "Would you press the switch?",
    "twist": "",
    "deeperQuestion": "Would you start missing their voice?",
    "zh": {
      "title": "吵鬧雲朵",
      "scenario": "家中最吵的人會變成一朵安靜雲，三天後變回來。\n\n家裡終於能清楚聽到時鐘，你卻發現沒人主動開始話題。那片雲安靜飄著，偶爾像想笑，又發不出聲。",
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
    "scenario": "Bedrooms are assigned monthly by lottery; anyone can get the largest.\n\nRotation sounds fair until someone draws a room that cannot fit their needed desk or wheelchair. The rule becomes less simple.",
    "question": "Would you support it?",
    "twist": "",
    "deeperQuestion": "Should special needs create exceptions?",
    "zh": {
      "title": "公平分房",
      "scenario": "家中房間每月抽籤，誰都有機會住最大那間。\n\n抽籤前，大家都覺得輪流很合理。直到有人抽中放不下自己需要的書桌或輪椅的房間，規則才不再簡單。",
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
    "scenario": "A magnifier reveals a relative's invisible daily work.\n\nThe lens reveals appointments remembered, umbrellas packed and late arrivals awaited. These rarely counted as being busy before.",
    "question": "Whose day would you inspect?",
    "twist": "",
    "deeperQuestion": "Would you swap days after watching?",
    "zh": {
      "title": "忙碌放大鏡",
      "scenario": "放大鏡會顯示家人每天做的隱形工作。\n\n鏡中不只看見掃地，也看見記住預約、提醒帶傘和等最後一個人回家。那些事以前很少被算進「忙」。",
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
    "scenario": "Each relative's kite flies toward their desired destination; holding its string stops it.\n\nThe kite passes the roof while its owner looks back. With string in hand, you feel how love can also exert a pull.",
    "question": "Would you hold on?",
    "twist": "",
    "deeperQuestion": "Would you leave a line for their return?",
    "zh": {
      "title": "心願風箏",
      "scenario": "每個家人的風箏飛向想去的地方，拉住線就能阻止。\n\n風箏已飛過屋頂，家人回頭看你是不是願意鬆手。線仍在掌心，你第一次感到愛也可能有拉力。",
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
    "scenario": "A letter guarantees forgiveness, but its reader cannot refuse.\n\nThe soft paper guarantees a forgiving reply. Yet you cannot decide when the reader is ready to offer one.",
    "question": "Would you send it?",
    "twist": "",
    "deeperQuestion": "Do you want forgiveness or to show understanding?",
    "zh": {
      "title": "寬恕郵局",
      "scenario": "你能寄一封一定被原諒的信，但收件人不能選擇拒絕。\n\n信紙很柔軟，保證再痛的往事也會有圓滿回覆。可你沒辦法替收件人決定，他甚麼時候才準備好原諒。",
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
    "scenario": "Only the least-heard relative can open the family chest.\n\nAfter everyone fails, a quiet relative opens it with a touch. Before any treasure appears, there is an empty chair.",
    "question": "Who might get the key?",
    "twist": "",
    "deeperQuestion": "What would you change after opening it?",
    "zh": {
      "title": "家庭寶箱",
      "scenario": "寶箱只能由最少被聽見的家人打開。\n\n大家輪流試過都打不開，最後一個平常很少發言的人輕輕一碰就開了。寶箱裡先出現的不是金幣，是一張空椅子。",
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
    "scenario": "A reunion can last forever if everyone leaves their outside life.\n\nFood stays warm, stories continue and nobody rushes a train. Outside remain friends, work and lives belonging to each person.",
    "question": "Would you stay?",
    "twist": "",
    "deeperQuestion": "Would you support someone leaving first?",
    "zh": {
      "title": "永遠團圓",
      "scenario": "一年一度的聚會能延長到永遠，但每人都要放下外面的生活。\n\n菜永遠不會冷，故事也講不完，沒人要趕末班車。窗外卻還有朋友、工作和一些只屬於各自的人生。",
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
    "scenario": "A camera creates a convincing photo of a gathering that never happened.\n\nIt reconstructs sunlight and smiles perfectly. A flawless photo cannot provide the time you never actually shared.",
    "question": "Would you make one?",
    "twist": "",
    "deeperQuestion": "Would you tell children it was imagined?",
    "zh": {
      "title": "不留遺憾相機",
      "scenario": "相機能拍下任何錯過的合照，看起來真的發生過。\n\n照片會連陽光和每個人的笑都補得很真。你可以得到一張完美合照，卻不能得到那天真的一起坐過的時間。",
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
    "scenario": "Family dreams can combine into one grand dream, erasing individual ones.\n\nAs the pool brightens, individual voices blur. The grand dream may be impressive without anyone feeling it is wholly theirs.",
    "question": "Would you contribute yours?",
    "twist": "",
    "deeperQuestion": "Who decides what the grand dream looks like?",
    "zh": {
      "title": "家族儲夢池",
      "scenario": "全家能把夢想合成一個大夢，但各人的小夢會消失。\n\n池水越亮，個人的聲音就越難分清。那個合成的大夢可能很宏大，卻未必有人能說它完全是自己的。",
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
    "scenario": "A child can skip a difficult year and grow a year older instantly.\n\nThe calendar can skip humiliation and waiting. That year also contains someone who might become an important friend.",
    "question": "Would you allow it?",
    "twist": "",
    "deeperQuestion": "What if that year also holds a wonderful friendship?",
    "zh": {
      "title": "成長按鈕",
      "scenario": "孩子能跳過最辛苦的一年，直接長大一歲。\n\n日曆能直接翻過去，不用捱過那些難堪和等待。可那一年也有一個還未出現的人，原本會成為很重要的朋友。",
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
    "scenario": "A wall sings gratitude relatives are too shy to say.\n\nMid-meal, the wall sings about a small kindness. Its subject smiles downward: the care was remembered, merely unspoken.",
    "question": "Would you want it singing at dinner?",
    "twist": "",
    "deeperQuestion": "Would you feel shy or happy when it sings about you?",
    "zh": {
      "title": "會唱歌的牆",
      "scenario": "牆會唱出家人不好意思說的感謝。\n\n大家還在夾菜，牆已開始唱起一件很小的照顧。被唱到的人低下頭笑，原來不是沒人記得，只是沒人說過。",
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
    "scenario": "You can lend an elder youthful days by ageing those days yourself.\n\nThey want a youthful day to go out alone as before. You meant to give youth, realizing you also hoped for company.",
    "question": "How many would you lend?",
    "twist": "",
    "deeperQuestion": "Should they spend it with you or on themselves?",
    "zh": {
      "title": "借一天青春",
      "scenario": "你可借一天青春給長輩，自己就老一天。\n\n他想用那一天去做一件不需要家人陪的事，像以前那樣自己出門。你原本想送他年輕，卻發現也期待了一場相聚。",
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
    "scenario": "The road home lengthens whenever a relative feels rejected.\n\nA nearby relative has the longest road home. For once, absence cannot simply be blamed on a busy job.",
    "question": "Should everyone see its length?",
    "twist": "",
    "deeperQuestion": "Whose path would you shorten first?",
    "zh": {
      "title": "回家路會變",
      "scenario": "每次家人不被接納，回家的路就長一點。\n\n地圖顯示某位家人回來要走很遠，明明他住得最近。大家第一次不能再把少見面全說成工作太忙。",
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
    "scenario": "Your family can create a holiday for the whole town.\n\nThe mayor offers victory, reunion or an ordinary forgotten day. Not every relative has a grand achievement, but each has worked to stay.",
    "question": "What would it celebrate?",
    "twist": "",
    "deeperQuestion": "Could an ordinary peaceful day deserve a holiday?",
    "zh": {
      "title": "家族紀念日",
      "scenario": "你們能新增一個全城放假的家庭紀念日。\n\n市長讓你們選勝利、重逢或一個誰都不記得日期的小日子。不是每個家人都有成就可慶祝，卻都曾努力留下來。",
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
    "scenario": "A cat divides a family bonus by need, ignoring who earned it.\n\nThe cat gives most to the struggling relative and few coins to the highest earner. It cannot read the adults' expressions.",
    "question": "Would you let it?",
    "twist": "",
    "deeperQuestion": "Would you agree if you receive the least?",
    "zh": {
      "title": "會分錢的貓",
      "scenario": "貓會按牠認為的需要分配家中獎金，不理誰賺回來。\n\n貓把最大一份推給最近最辛苦的人，賺最多的那位卻只分到幾枚。牠很滿意自己的安排，完全看不懂大人們的表情。",
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
    "scenario": "An elder befriends an invisible fairy and grows happier.\n\nThey save a snack and share private jokes with their friend. You feel glad while wondering whether you still matter most.",
    "question": "Would you insist on meeting it?",
    "twist": "",
    "deeperQuestion": "Would being left out make you sad?",
    "zh": {
      "title": "家人的新朋友",
      "scenario": "長輩交了一位只有他看得見的精靈朋友，變得很快樂。\n\n他開始留一份點心給朋友，也有了不必跟家人分享的笑話。你替他高興，同時想知道自己是不是還是最重要的人。",
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
    "scenario": "Your bird's door stays open, yet it returns daily.\n\nIt returns daily carrying unfamiliar flower scents. You have not lost it, but no longer know every afternoon it has lived.",
    "question": "Would that reassure you more than a lock?",
    "twist": "",
    "deeperQuestion": "If it misses a day, would you close the door?",
    "zh": {
      "title": "不會離家的鳥",
      "scenario": "家鳥的門一直開著，牠仍每天回來。\n\n牠每天出去，回來時帶著你不認識的花香。你沒有失去牠，卻也不再知道牠經歷的每一個下午。",
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
    "scenario": "Every family kindness can earn money, even hugs.\n\nThe price list makes every contribution countable. A child without coins hesitates at the hug counter.",
    "question": "Would you run this shop?",
    "twist": "",
    "deeperQuestion": "What must remain free?",
    "zh": {
      "title": "家庭商店",
      "scenario": "家人做的小事都能換錢，連擁抱也標價。\n\n店裡的價目表看起來很公平，誰做多少都算得清楚。只是某個孩子沒帶錢，站在「抱一下」的櫃台前猶豫。",
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
    "scenario": "An adopted bear wants to keep its forest surname.\n\nThe bear loves home and keeps forest postcards by its bed. It asks whether it can miss two places without proving which matters more.",
    "question": "Is it fully part of the family?",
    "twist": "",
    "deeperQuestion": "What if it wants annual holidays in the forest?",
    "zh": {
      "title": "小熊的姓",
      "scenario": "收養的小熊想保留森林的姓氏。\n\n小熊很喜歡新家，也把森林寄來的明信片放在床邊。牠問可不可以同時想念兩個地方，不必證明更愛哪個。",
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
    "scenario": "Your childhood room wants to become a family studio, forgetting your traces.\n\nCrooked stars and the desk remain where you left them. Your family is not rejecting memories; they need room for present life.",
    "question": "Would you agree?",
    "twist": "",
    "deeperQuestion": "What one thing would you keep there?",
    "zh": {
      "title": "長大的房間",
      "scenario": "你的童年房間想改成家人的工作室，卻會忘記你的痕跡。\n\n牆上還有你以前貼歪的星星，書桌的位置也一直沒變。家人並不是要趕走你的回憶，只是現在也需要地方生活。",
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
    "scenario": "A person can remember only ten relatives; the rest slowly fade.\n\nThe list includes frequent visitors and someone who appeared once at your hardest moment. The loudest voice cannot decide the places.",
    "question": "How would you choose?",
    "twist": "",
    "deeperQuestion": "Should frequency of visits decide the places?",
    "zh": {
      "title": "誰記住誰",
      "scenario": "一個人只能記住十位家人，遠親會慢慢被忘記。\n\n名單上有常見面的名字，也有只在你最難的時候出現過一次的人。名額不能按誰聲音最大來留。",
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
    "scenario": "Each bedroom door displays its owner's real mood.\n\nOne sign reads “I want company but cannot ask.” Another door remains shut; its owner may still want the right not to explain.",
    "question": "Would you switch it off?",
    "twist": "",
    "deeperQuestion": "Would knowing help you knock more gently?",
    "zh": {
      "title": "心情門牌",
      "scenario": "每個房門都會顯示主人的真實心情。\n\n門牌今天寫著「想有人來，又不知道怎樣說」。但另一扇門明明已關上，屋主也許仍想保留不解釋的權利。",
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
    "scenario": "A lottery prize requires unanimous agreement on its use.\n\nEveryone has good, urgent uses for the money. As the deadline nears, agreement becomes easier to rush past the quiet dissenter.",
    "question": "What would you propose?",
    "twist": "",
    "deeperQuestion": "Could a dissenter receive a smaller share?",
    "zh": {
      "title": "家族彩票",
      "scenario": "彩票中了獎，但必須全家一致同意用途才能領。\n\n錢能做很多好事，大家也各有急切的理由。票背面的期限快到了，越想快點達成一致，就越容易忽略那個不敢反對的人。",
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
    "scenario": "A pill erases comparisons with others and memories of pride in you.\n\nThe pill removes comparisons and the first applause for you. A clean beginning cannot erase only the painful half.",
    "question": "Would you offer it?",
    "twist": "",
    "deeperQuestion": "Would you let them get to know you again?",
    "zh": {
      "title": "忘記比較",
      "scenario": "藥丸會讓家人忘記拿你跟別人比較，也忘記曾為你驕傲。\n\n家人會忘記所有「你看人家」，也忘記第一次為你鼓掌的模樣。你會獲得乾淨的起點，卻不是只刪掉難聽的那半段。",
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
    "scenario": "A magic table invites a stranger weekly and permits no refusal.\n\nAn extra chair brings new stories weekly. You enjoy the company while missing a meal without hosting anyone.",
    "question": "Would you like the rule?",
    "twist": "",
    "deeperQuestion": "What if the family wants a quiet evening alone?",
    "zh": {
      "title": "晚餐陌生客",
      "scenario": "魔法餐桌每週請一位陌生人來吃飯，不准拒絕。\n\n椅子每週都會自己多一張，客人帶來不同地方的故事。你喜歡熱鬧，卻也開始想念不用招待任何人的一頓飯。",
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
    "scenario": "Your pet writes a family diary that may reveal favouritism.\n\nThe diary's cover says “I saw it all.” It may hold funny moments or neglect someone would rather not acknowledge.",
    "question": "Would you read it together?",
    "twist": "",
    "deeperQuestion": "Who should read it first?",
    "zh": {
      "title": "寵物的日記",
      "scenario": "寵物寫了一本家庭日記，可能揭露偏心。\n\n牠把日記推到桌中央，封面寫著「我一直都看見」。裡面可能有好笑的事，也可能有某人不太想承認的忽略。",
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
    "scenario": "An older generation hands you a box of adventures they never dared to try.\n\nInside are unsent applications, unvisited cities and unworn dancing shoes. They deserve care without necessarily becoming your path.",
    "question": "Would you accept?",
    "twist": "",
    "deeperQuestion": "Does accepting mean finishing everything?",
    "zh": {
      "title": "家傳勇氣盒",
      "scenario": "上一代把沒敢做的事放進盒子，交給你完成。\n\n盒裡有沒寄出的申請、沒去的城市和一雙沒穿過的舞鞋。它們很值得珍惜，卻未必是你也想走的路。",
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
    "scenario": "The main family carer can vanish for a day without being found.\n\nBefore leaving, they instinctively make lists. The fairy reminds them the holiday need not prove their usefulness in their absence.",
    "question": "Would you support this holiday?",
    "twist": "",
    "deeperQuestion": "Should they have to prepare meals before leaving?",
    "zh": {
      "title": "悄悄休假",
      "scenario": "家中最常照顧人的一位可隱身一天，大家找不到他。\n\n他出門前本能地想先列好清單，連休假都像另一份工作。精靈提醒他，這一天不需要證明自己走了也有用。",
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
    "scenario": "Everyone has a happiness button leading down a different path.\n\nNo button leads to a bad life, but some paths are far apart. Everyone's happiness may not mean everyone stays.",
    "question": "Would you let each person press theirs?",
    "twist": "",
    "deeperQuestion": "Would you ask everyone to promise a reunion?",
    "zh": {
      "title": "不同的幸福",
      "scenario": "家中每人都有一個幸福按鈕，按下後想走的路都不同。\n\n按鈕沒有壞的選項，只是有些路相隔很遠。家裡第一次要面對，大家都幸福未必等於大家都留下。",
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
    "scenario": "A doll voices a child's unspoken “no”.\n\nIts first refusal is an unwanted hug from a relative. The child strokes it, looking both frightened and relieved.",
    "question": "Would you let it stay at dinner?",
    "twist": "",
    "deeperQuestion": "Should adults have one too?",
    "zh": {
      "title": "會說不的玩偶",
      "scenario": "孩子的玩偶會替他說出不敢說的「不要」。\n\n玩偶第一句就拒絕了親戚要求的擁抱，飯桌一下靜了。孩子低頭摸著它，似乎既害怕又鬆了一口氣。",
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
    "scenario": "Each relative has an island; bridges appear only with mutual agreement.\n\nA calm sea and missing bridge do not always mean conflict. Some afternoons, someone simply wants time on their own island.",
    "question": "Would you like living there?",
    "twist": "",
    "deeperQuestion": "What if someone avoids bridges for a long time?",
    "zh": {
      "title": "一人一座島",
      "scenario": "全家各有一座小島，橋要雙方同意才會出現。\n\n海面很平靜，沒有橋不代表有爭吵。只是某些下午，有人真的想在自己的島上待一會。",
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
    "scenario": "One relative keeps every family story; others must borrow them.\n\nRelatives bring conflicting versions of the past. Keeping the stories does not necessarily give you the right to select one truth.",
    "question": "Would you take the role?",
    "twist": "",
    "deeperQuestion": "Should painful stories be available too?",
    "zh": {
      "title": "記憶保管員",
      "scenario": "家族只能選一人記住所有故事，其餘人要向他借。\n\n所有人會來向你問起往事，有些版本彼此矛盾。你可以守住故事，卻不一定有權替大家選出唯一的答案。",
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
    "scenario": "A child could be the world's best paper-plane maker without earning money.\n\nThey spend an excited afternoon testing small improvements. Another adult asks whether any of it will belong on a future résumé.",
    "question": "Would you fully support it?",
    "twist": "",
    "deeperQuestion": "How much family time would you spend practising?",
    "zh": {
      "title": "沒用的小天才",
      "scenario": "孩子能成為摺紙飛機的世界第一，卻不會因此賺錢。\n\n他認真試飛了整個下午，對每次小進步都很興奮。另一個大人卻問，這件事將來能不能寫進履歷。",
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
    "scenario": "One day yearly, apologies become real chances to repair things.\n\nThe date glows and even quiet relatives prepare notes. A chance to repair does not require the hurt person to feel safe immediately.",
    "question": "What would you mend first?",
    "twist": "",
    "deeperQuestion": "Could the other person choose not to accept yet?",
    "zh": {
      "title": "家庭道歉日",
      "scenario": "一年一天，說對不起會變成真正補救的機會。\n\n日曆上那一天亮著，連平常不太開口的人也拿出紙筆。大家能得到一個機會，卻不能要求被傷過的人立刻放心。",
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
    "scenario": "Your home expands when people are themselves and shrinks when they suppress themselves.\n\nSomeone declines a gathering and sunlight spreads in the room. The house measures breathing room, not politeness scores.",
    "question": "Would it feel spacious?",
    "twist": "",
    "deeperQuestion": "Whom would you make more space for?",
    "zh": {
      "title": "會呼吸的家",
      "scenario": "家在每人做自己時變大，在有人委屈自己時縮小。\n\n今天有人說出不想去的聚會，客廳竟然多了一小塊陽光。房子不懂禮貌分數，只感覺得到誰能好好呼吸。",
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
    "scenario": "A family recipe can be shared freely worldwide or kept within the family.\n\nThe recipe sits in a worn notebook under a sauce stain. The world might remember your family, or forget where the dish began.",
    "question": "How would you pass it on?",
    "twist": "",
    "deeperQuestion": "Would you mind others changing the recipe?",
    "zh": {
      "title": "最後的配方",
      "scenario": "祖傳食譜可以免費分享全世界，或只留給家人。\n\n配方寫在快散開的筆記本裡，一滴醬汁蓋住了最後一行。全世界可能因此記得你們，也可能再沒人知道它來自誰家。",
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
    "scenario": "One porch light says “Come home”; another says “Go freely”.\n\nSomeone leaving looks back at two gentle lights. Both express love, each saying “You matter” in a different way.",
    "question": "Which would you light?",
    "twist": "",
    "deeperQuestion": "Whom would you want to see it?",
    "zh": {
      "title": "門口的兩盞燈",
      "scenario": "一盞燈說「記得回家」，另一盞說「放心去吧」。\n\n出門的人站在路口回頭，兩盞燈都很溫柔。它們沒有一盞不愛他，只是用不同方式說「你對我們很重要」。",
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
    "scenario": "A festival moves to the date its loneliest relative needs it, not necessarily a holiday.\n\nThe new date falls in a busy week but on someone's loneliest day. The festival asks whether reunion follows calendars or people.",
    "question": "Would you follow it?",
    "twist": "",
    "deeperQuestion": "How could someone who cannot attend take part?",
    "zh": {
      "title": "會搬家的節日",
      "scenario": "節日會跟著最想團聚的人搬日期，不一定在假期。\n\n新日期剛好撞上大家最忙的一週，卻是某位家人最不想獨處的一天。節日問你們，團圓是照日曆走，還是照人走。",
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
    "scenario": "A shop sells courage, calm and curiosity; each person may buy one can.\n\nThe three cans cost the same. Your choice seems obvious until a friend immediately reaches for another.",
    "question": "Which would you pick?",
    "twist": "",
    "deeperQuestion": "Would you swap a sip with a friend?",
    "zh": {
      "title": "情緒便利店",
      "scenario": "便利店賣勇氣、安心和好奇心，每人只能買一罐。\n\n老闆把三罐排在冰櫃裡，標價完全一樣。你本來覺得很好選，直到朋友毫不猶豫拿起了另一罐。",
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
    "scenario": "A kind dog runs for mayor but understands only walks and meals.\n\nThe dog remembers every resident and comforts the sad. Tomorrow's school budget still looks like a chew toy to it.",
    "question": "Would you vote for it?",
    "twist": "",
    "deeperQuestion": "What deputy would you choose for it?",
    "zh": {
      "title": "小狗市長",
      "scenario": "城市選出一隻善良小狗當市長，但牠只懂散步和吃飯。\n\n牠記得每位居民的氣味，也會陪傷心的人坐下。可是明天就要決定學校預算，牠仍把文件當成玩具。",
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
    "scenario": "You can pay with memories and receive strangers' memories as change.\n\nYou buy coffee and receive a stranger's graduation afternoon. The joy is real without belonging to your life.",
    "question": "Would you try?",
    "twist": "",
    "deeperQuestion": "What sort of memory would you least want back?",
    "zh": {
      "title": "回憶找續",
      "scenario": "買東西可以用回憶付款，店員會找回陌生人的回憶。\n\n你只是想買一杯咖啡，店員卻找回一個陌生人的畢業下午。那份快樂很真，只是跟你的生活毫無關係。",
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
    "scenario": "One cafe seat makes the rest of your day lucky.\n\nThe window seat opens before your friend's important meeting. You have no grand need, just a wish for one smooth day.",
    "question": "Would you give it to a friend?",
    "twist": "",
    "deeperQuestion": "Would you offer it without receiving thanks?",
    "zh": {
      "title": "幸運座位",
      "scenario": "咖啡店有個座位讓今天一切順利，但只剩一個。\n\n窗邊的位子剛好空出來，朋友今天要見一個重要的人。你沒有大事，只是也很想有一天一切順利。",
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
    "scenario": "Dessert gets cheaper for each small flaw you admit.\n\nThe first admission is sleeping late and everyone laughs. Your favourite dessert still needs a little more discount.",
    "question": "How far would you go?",
    "twist": "",
    "deeperQuestion": "Could friends add suggestions?",
    "zh": {
      "title": "說真話打折",
      "scenario": "每說一個自己的小缺點，甜品就便宜一點。\n\n第一個人說了愛賴床，大家笑得很輕鬆。輪到你時，折扣還差一點才夠買你最想吃的那款。",
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
    "scenario": "You can borrow a friend's talent for a day, leaving them without it.\n\nYour friend agrees but says that talent is where their confidence lives. Lending it feels like losing part of themselves for a day.",
    "question": "What would you borrow?",
    "twist": "",
    "deeperQuestion": "What would you offer in return?",
    "zh": {
      "title": "借用天賦",
      "scenario": "你能借朋友一項天賦一天，但他那天不能使用。\n\n朋友答應了，卻說那項天賦正是他平常最有自信的地方。借給你不只是少做一件事，也像暫時少了一部分自己。",
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
    "scenario": "A stranger cat asks to borrow money to move to the moon.\n\nThe envelope contains a careful moving budget, including litter. You cannot tell whether the cat is naive or simply braver about dreams.",
    "question": "Would you lend it?",
    "twist": "",
    "deeperQuestion": "Would moon rocks count as repayment?",
    "zh": {
      "title": "陌生貓來信",
      "scenario": "陌生貓寄來求助信，說要借一百元搬去月球。\n\n信封裡有一張畫得很認真的搬家計劃，連貓砂都算進預算。你不知道牠是天真，還是真的比你更敢相信一個夢。",
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
    "scenario": "A card shows your friendship's remaining days, which today's choices can change.\n\nAfter a shared laugh, the card slides onto the table. Its number is not an order, but could colour every invitation afterwards.",
    "question": "Would you look?",
    "twist": "",
    "deeperQuestion": "Would you share what you saw?",
    "zh": {
      "title": "朋友保存期限",
      "scenario": "一張卡能顯示友誼還剩多少天，卻可能因今天的選擇改變。\n\n你們剛笑完一件小事，卡片就從桌邊滑出來。上面的數字不是命令，卻可能改變你之後每一次邀約的心情。",
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
    "scenario": "A shop sells abandoned dreams; buying makes you truly want to fulfil them.\n\nShelves hold piloting, flower shops and unfinished journeys. Second-hand dreams remain real, along with their longing for completion.",
    "question": "Would you browse?",
    "twist": "",
    "deeperQuestion": "Would you ask why the owner gave up?",
    "zh": {
      "title": "夢想二手店",
      "scenario": "有人便宜出售放棄的夢想，你買了就會真心想完成它。\n\n架上有飛行員、花店和一條沒走完的長途路線。店員說夢不會因為轉手就變假，但你會繼承那份想完成的渴望。",
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
    "scenario": "Magic solves a friend's problem, but they credit someone else.\n\nYour relieved friend writes thanks to someone else. You discover that helping quietly and not wanting recognition are different things.",
    "question": "Would you use it?",
    "twist": "",
    "deeperQuestion": "Could you resist revealing the truth?",
    "zh": {
      "title": "不記名幫忙",
      "scenario": "魔法能替朋友解決一個麻煩，但他會以為是別人幫的。\n\n朋友終於輕鬆下來，正認真寫訊息謝另一個人。你拿著手機，第一次發現默默幫忙和真的不想被知道不完全一樣。",
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
    "scenario": "A bridge toll is a story that makes its guard laugh.\n\nThe guard is bored after a day of jokes. Your friend watches, suspecting you know an especially funny secret.",
    "question": "Would you tell an embarrassing story about yourself?",
    "twist": "",
    "deeperQuestion": "Would you use a friend's story instead?",
    "zh": {
      "title": "笑話收費站",
      "scenario": "橋的過路費是一個能逗守衛笑的故事。\n\n守衛已笑了一整天，普通笑話都聽膩了。朋友在旁邊看著你，似乎猜到你手上有一個特別好笑的秘密。",
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
    "scenario": "You find treasure a friend buried and forgot as a child.\n\nTheir crooked childhood name remains on something now valuable. You remember playing together and know you found it first.",
    "question": "Would you claim it as your discovery?",
    "twist": "",
    "deeperQuestion": "Would hours spent digging change your answer?",
    "zh": {
      "title": "誰的寶藏",
      "scenario": "你找到朋友小時候埋的寶藏，他已完全忘記。\n\n寶藏上仍歪歪寫著他的名字，裡面卻有現在很值錢的東西。你記得小時候一起玩的下午，也知道是自己先找到的。",
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
    "scenario": "Every good deed earns applause only you can hear.\n\nHolding a stranger's door earns private applause. Nobody looks at you, yet an ordinary kindness begins to feel like a performance.",
    "question": "Would you do more good?",
    "twist": "",
    "deeperQuestion": "What if the applause stops one day?",
    "zh": {
      "title": "隱形掌聲",
      "scenario": "每做一件好事都有掌聲，只有你聽見。\n\n你替陌生人扶住門，耳邊響起一小段掌聲。沒人轉頭看你，卻讓那件平常的小事突然像一次表現。",
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
    "scenario": "You can take a friend's bad luck so an important day goes well.\n\nYour friend's day may decide their future home. Magic promises someone must take the bad luck, without providing an advance list.",
    "question": "Would you agree?",
    "twist": "",
    "deeperQuestion": "Would you ask how bad it could be first?",
    "zh": {
      "title": "交換一天倒楣",
      "scenario": "你能替朋友承受一天倒楣，換他一個重要日子順利。\n\n朋友那天可能決定以後住哪裡，你這邊則會連連碰上小麻煩。魔法不會預先列清單，只說壞運氣一定有人接住。",
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
    "scenario": "A mailbox sends a letter to your friend ten years ahead, with no reply.\n\nThe postman asks which name to use. You wonder whether your shared nickname will survive ten years.",
    "question": "What would you write?",
    "twist": "",
    "deeperQuestion": "Would you include a request?",
    "zh": {
      "title": "雲端信箱",
      "scenario": "信箱能寄一封信給十年後的朋友，但你永遠看不到回信。\n\n郵差把郵票貼成一顆小雲，問你要用現在還是未來的稱呼。你突然不知道十年後，你們還會不會用同一個暱稱。",
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
    "scenario": "A machine supplies the comfort your friend wants, even if you disagree.\n\nYour friend waits while a gentle sentence appears. It sounds comforting but omits the part you think matters.",
    "question": "Would you read it aloud?",
    "twist": "",
    "deeperQuestion": "Would you add your own honest thought?",
    "zh": {
      "title": "安慰翻譯機",
      "scenario": "機器能說出朋友最想聽的安慰，即使你不認同。\n\n朋友正等你回覆，畫面上的句子真的很溫柔。可它跳過了你覺得重要的那部分，就像把話說順了，事情卻沒說清。",
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
    "scenario": "All prices vanish for a day; customers decide what to pay.\n\nSomeone beside you pays half for the same item. The cashier offers neither disapproval nor a definition of fair payment.",
    "question": "Would you pay the usual price?",
    "twist": "",
    "deeperQuestion": "Would you treat small shops and big companies alike?",
    "zh": {
      "title": "價錢消失日",
      "scenario": "一天所有價錢都消失，付多少由客人決定。\n\n你拿著同一件商品，旁邊的人卻付了一半價錢。收銀員不會皺眉，也不會告訴你怎樣才算沒有佔便宜。",
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
    "scenario": "You can copy a friend for company, giving the original more freedom.\n\nYour original friend gains freedom while the copy enjoys your jokes. The new shared memories will not belong to the original.",
    "question": "Would you use it?",
    "twist": "",
    "deeperQuestion": "Should the copy know what it is?",
    "zh": {
      "title": "朋友複製券",
      "scenario": "你能複製一位朋友陪你，原本的他就有更多自由。\n\n原本的朋友終於能安心忙自己的事，複製人也真心喜歡你的笑話。你們聊得很好，只是這段新回憶不會屬於原本的他。",
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
    "scenario": "You can store your temper for a day but must feel it all that evening.\n\nYou become easy-going all day. The locker opens that night, possibly beside someone who caused none of the anger.",
    "question": "Would you do it?",
    "twist": "",
    "deeperQuestion": "Would you want company when collecting it?",
    "zh": {
      "title": "脾氣寄存",
      "scenario": "你能寄存壞脾氣一天，但晚上要一次過拿回。\n\n白天你會很好相處，任何小事都不會激怒你。寄存櫃卻在晚上準時開門，那時陪在身邊的人未必是惹你生氣的人。",
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
    "scenario": "Treating friends doubles your money only if their gratitude is genuine.\n\nDinner is lovely and your friend enjoys it. At the bill, you begin judging whether the thank-you sounds sincere enough.",
    "question": "Would you treat often?",
    "twist": "",
    "deeperQuestion": "Would gratitude count if they know the rule?",
    "zh": {
      "title": "神奇請客券",
      "scenario": "你請客花的錢會加倍回來，但朋友必須真心感激。\n\n餐廳很漂亮，朋友也確實玩得開心。等帳單來時，你卻發現自己開始留意他那聲謝謝夠不夠真心。",
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
    "scenario": "Loneliness becomes a cloud above each person.\n\nThe liveliest person has a huge cloud; the quiet one has a small one. Smiles stop being a reliable guide to who needs company.",
    "question": "Would you approach the biggest cloud first?",
    "twist": "",
    "deeperQuestion": "Would you want yours to be visible?",
    "zh": {
      "title": "看得見的孤單",
      "scenario": "孤單會變成頭上的小雲。\n\n最亮眼的人頭上竟有一大片雲，平常安靜的人卻只飄著一小朵。你第一次不能靠誰笑得最多來猜誰最需要陪。",
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
    "scenario": "Ice cream erases one worry and everything it taught you.\n\nThe flavour resembles a summer before the trouble happened. Relief might also leave you ready to repeat an old mistake.",
    "question": "Would you eat it?",
    "twist": "",
    "deeperQuestion": "Would you recommend it to a sad friend?",
    "zh": {
      "title": "忘憂冰淇淋",
      "scenario": "冰淇淋會抹掉一件煩惱，也抹掉你從中學到的事。\n\n店員把冰淇淋遞給你，說味道像沒有發生過那件事的夏天。你會輕鬆一點，也可能再次走進同一個不適合自己的選擇。",
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
    "scenario": "Hearing a friend's secret costs one equally personal secret of your own.\n\nThe exchange has no judge, only two sealed envelopes. You must decide whether this is trust or a transaction dressed as closeness.",
    "question": "Would you trade?",
    "twist": "",
    "deeperQuestion": "Who decides what counts as equal?",
    "zh": {
      "title": "秘密交換站",
      "scenario": "想聽一個朋友的秘密，就要交出自己的同等秘密。\n\n交換站沒有裁判，只有兩個封好的信封。你們得自己判斷這是互相信任，還是把親近變成一場交易。",
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
    "scenario": "A pass guarantees monthly meetings but expires after one absence.\n\nYou want “see you soon” to mean something. Your friend fears another commitment where one mistake could undo everything.",
    "question": "Would you buy it for a friend?",
    "twist": "",
    "deeperQuestion": "What exceptions would you want?",
    "zh": {
      "title": "友情年票",
      "scenario": "年票保證每月見面，但缺席一次就失效。\n\n你很想不再把「下次見」說成一句客套話。朋友卻看著缺席條款，擔心一段珍惜的關係會變成另一項不能出錯的安排。",
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
    "scenario": "An umbrella shelters only people who have lent you something.\n\nRain falls with room under the umbrella and a stranger nearby. It turns away, revealing the limits of care that demands repayment.",
    "question": "Would you keep it?",
    "twist": "",
    "deeperQuestion": "Would you find a way to shelter strangers?",
    "zh": {
      "title": "會記仇的傘",
      "scenario": "傘只肯替曾借過你東西的人擋雨。\n\n大雨突然落下，傘下還有位置，旁邊卻站著從沒見過的人。傘輕輕轉開，像在提醒你不是每份照顧都能預先收回報。",
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
    "scenario": "A friendly monster next door sings happily at midnight.\n\nIt helped you move yesterday and keeps you awake tonight. Stage lights reveal it has treated the building as its first audience.",
    "question": "Would you complain or knock first?",
    "twist": "",
    "deeperQuestion": "What if it can sing only then?",
    "zh": {
      "title": "小怪獸鄰居",
      "scenario": "隔壁小怪獸很友善，但每天半夜才開心唱歌。\n\n牠昨天還替你搬過重物，今晚又唱到你睡不著。門縫透出小小舞台的燈，原來牠一直把這棟樓當成第一批觀眾。",
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
    "scenario": "A server's tips become wishes you cannot see.\n\nYour coins become a light in the server's palm. You choose the amount, not which wishes deserve to come true.",
    "question": "Would you tip more?",
    "twist": "",
    "deeperQuestion": "What if their wishes are more luxurious than yours?",
    "zh": {
      "title": "願望小費",
      "scenario": "服務員的小費能變成他的願望，你看不到他會許甚麼。\n\n你把零錢放下，硬幣在他掌心變成一顆亮點。你能決定給多少，卻不能替他決定甚麼願望才配被實現。",
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
    "scenario": "You can be famous for a day, solely for your most embarrassing moment.\n\nStrangers recognize you overnight and opportunities arrive. Each introduction still passes through the same embarrassing joke.",
    "question": "Would you accept?",
    "twist": "",
    "deeperQuestion": "What if it earns a fortune?",
    "zh": {
      "title": "一日名人",
      "scenario": "你可出名一天，但大家只記得你最丟臉的事。\n\n你的名字一夜傳開，陌生人笑著說終於見到你。機會真的來了，只是每次被認出，都要先經過同一個笑話。",
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
    "scenario": "You find an unnamed wish that costs your holiday to fulfil.\n\nThe simple wish is written on paper folded many times. Your own holiday also holds a real hope, not disposable spare time.",
    "question": "Would you help?",
    "twist": "",
    "deeperQuestion": "Would you want to know whose it is first?",
    "zh": {
      "title": "路邊願望",
      "scenario": "你撿到一個沒寫名字的願望，替它實現會花掉你的假期。\n\n願望寫得很簡單，紙卻被折了很多次，像被人握著猶豫很久。你本來的假期也不是浪費，只是屬於自己的期待。",
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
    "scenario": "A camera captures how others see you, not your face.\n\nThe picture might be gentler than a mirror or reveal distance. Your friend's camera captures how they have come to know you.",
    "question": "Would you let a friend take your portrait?",
    "twist": "",
    "deeperQuestion": "Would you delete a portrait you dislike?",
    "zh": {
      "title": "誠實自拍",
      "scenario": "相機拍下別人眼中的你，而不是你的外貌。\n\n照片可能比鏡子更溫柔，也可能拍出你沒留意的距離。朋友按快門時很認真，因為這次拍到的是他怎樣認識你。",
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
    "scenario": "A library lends different lives; overdue borrowers cannot return.\n\nShelves hold glamorous lives and unfamiliar forms of peace. The librarian says those merely browsing often stay longest.",
    "question": "Which life would you borrow?",
    "twist": "",
    "deeperQuestion": "Would you ask a friend to remind you to return?",
    "zh": {
      "title": "心願借書證",
      "scenario": "圖書館借出不同人生，逾期就回不來。\n\n書脊有很耀眼的人生，也有一種你從未考慮過的安穩。借書員說最容易逾期的人，往往一開始只想看看。",
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
    "scenario": "Each sweet contains an unspoken thank-you.\n\nThe first sweet recalls a small favour you forgot. No sender is named, but someone remembered it mattered.",
    "question": "Would you eat them all yourself?",
    "twist": "",
    "deeperQuestion": "Who would you most want to give one to?",
    "zh": {
      "title": "謝謝糖果",
      "scenario": "每顆糖都藏著一個別人沒說出口的謝謝。\n\n第一顆是某次你順手幫的小忙，自己早已忘記。糖紙裡沒有送件人的名字，卻讓你知道那件事曾被放在心上。",
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
    "scenario": "You can fly for ten minutes and carry one friend.\n\nEveryone wants the flight; one offers it to a friend's first adventure. Your wings grow as decision time runs short.",
    "question": "How would you choose?",
    "twist": "",
    "deeperQuestion": "What if someone afraid of heights wants to try?",
    "zh": {
      "title": "短暫超能力",
      "scenario": "你能飛十分鐘，卻只能載一位朋友。\n\n大家都想飛，卻有人把機會讓給第一次出遠門的朋友。翅膀已慢慢長出來，你只有很短的時間作決定。",
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
    "scenario": "Each person may leave with a star for one new idea from tonight.\n\nThe star keeps only the moment that made you pause. Some answers made you laugh; one made you think again.",
    "question": "What would yours be called?",
    "twist": "",
    "deeperQuestion": "Whom would you show it to?",
    "zh": {
      "title": "帶走一顆星",
      "scenario": "散場時每人可帶走一顆星，代表今晚得到的一個新想法。\n\n星星不會保存所有對話，只留下真正讓你停了一下的那一刻。有人的答案讓你笑，也有人的答案令你第一次重新想。",
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
    "scenario": "Your bank gets a seed deposit from a turtle expecting a forest in a century.\n\nThe turtle brings a handwritten passbook for unborn grandchildren. You like its dream but do not know who will keep the promise in a century.",
    "question": "Would you accept?",
    "twist": "",
    "deeperQuestion": "Each suggest one promise you can actually keep.",
    "zh": {
      "title": "烏龜銀行",
      "scenario": "你們開銀行，烏龜客人存一顆種子，想百年後領森林。\n\n烏龜帶著手寫存摺坐在櫃台前，打算把森林留給沒出生的孫子。你們喜歡這個夢，卻不知道百年後誰還在守承諾。",
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
    "scenario": "Your hotel charges guests one dream per night.\n\nOne guest dreams of beauty; another of a full meal. You need a rate card, without knowing whether dreams should have different prices.",
    "question": "What dreams would you accept?",
    "twist": "",
    "deeperQuestion": "How could someone without good dreams stay?",
    "zh": {
      "title": "夢想旅館",
      "scenario": "你們開旅館，房租是住客的一個夢。\n\n第一位旅客的夢很漂亮，第二位只夢到一頓飽飯。櫃台要你們寫下價目表，卻沒說夢應不應該有高低價。",
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
    "scenario": "Your town can afford a slide, a rest house or a stray-cat home.\n\nEvery proposal has sincere supporters. The most-heard residents already have plenty on the town map.",
    "question": "Which would you build?",
    "twist": "",
    "deeperQuestion": "Hear the least popular choice's reasons first.",
    "zh": {
      "title": "小鎮預算",
      "scenario": "小鎮只有錢造一樣：滑梯、休息屋或流浪貓家。\n\n每個提案都有居民寫信支持，沒有一項只是玩笑。小鎮地圖上，最常被聽見的人已經有不少設施。",
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
    "scenario": "Hire a fast, chilly rabbit or a slow, kind bear for your shop.\n\nThe rabbit sorts orders while the bear comforts a customer. Your shop needs income and a decision about how it wants people to feel.",
    "question": "Whom would you choose?",
    "twist": "",
    "deeperQuestion": "Could you offer the other a different role?",
    "zh": {
      "title": "怪獸招聘",
      "scenario": "你們要聘一位店員：很快但冷淡的兔，或很慢但溫柔的熊。\n\n兔子已整理好訂單，熊還在聽一位難過客人說話。你們需要開店賺錢，也要想清楚想讓客人帶走甚麼感覺。",
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
    "scenario": "A chest grows coins daily but stops if anyone takes extra.\n\nCareful sharing meets an urgent medical bill on day two. The chest cannot understand reasons; your group cannot pretend every day is alike.",
    "question": "What rule would you make?",
    "twist": "",
    "deeperQuestion": "Could urgent need change the rule?",
    "zh": {
      "title": "共享寶箱規則",
      "scenario": "寶箱每天生金幣，但只要一人多拿就停產。\n\n第一天大家拿得很小心，第二天有人忽然急需付醫藥費。寶箱不懂理由，你們卻不能假裝所有日子都一樣。",
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
    "scenario": "A fairy sends lost things to people who need them more, never their owners.\n\nIt gives a costly coat to a cold child while its owner searches. The good intention is quick; its consequences are yours to explain.",
    "question": "Would you support it?",
    "twist": "",
    "deeperQuestion": "What if it takes your favourite possession?",
    "zh": {
      "title": "失物小精靈",
      "scenario": "精靈把失物送到更需要的人手上，從不還原主。\n\n牠剛把一件昂貴外套交給怕冷的小孩，失主卻在另一頭焦急尋找。好意做得很快，解釋後果卻留給了你們。",
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
    "scenario": "Your town taxes one true story monthly instead of money.\n\nTax collectors favour exciting lives; quiet residents fear theirs lack value. Your new council must decide whether stories should be graded.",
    "question": "What counts as enough?",
    "twist": "",
    "deeperQuestion": "Would people with quiet lives be disadvantaged?",
    "zh": {
      "title": "故事稅",
      "scenario": "你們城裡不用交錢，每月交一個真實故事。\n\n收稅員很愛聽精彩經歷，安靜的人開始擔心自己的生活不值錢。你們是新議會，第一件事就是決定故事能不能被評分。",
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
    "scenario": "Your group farms clouds with different preferences for rain and sun.\n\nEveryone names the first candy-like cloud. Rain scheduling then pits travel, gardens and feelings against one another.",
    "question": "How would you schedule weather?",
    "twist": "",
    "deeperQuestion": "Would you still vote during a drought?",
    "zh": {
      "title": "雲朵合作社",
      "scenario": "你們一起養雲，一人喜歡雨、一人喜歡陽光。\n\n第一朵雲像棉花糖，大家都搶著替它命名。等到安排下雨時，旅行計劃、菜園和心情卻各有不同需要。",
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
    "scenario": "Your town uses smiles as money, leaving quiet smilers poor.\n\nBig smilers buy houses while grieving residents struggle for breakfast. A cheerful city may not be a caring one.",
    "question": "Would you keep the system?",
    "twist": "",
    "deeperQuestion": "What basic service would you make free?",
    "zh": {
      "title": "微笑貨幣",
      "scenario": "小鎮用微笑付錢，笑得少的人會窮。\n\n最會笑的人很快買了大房子，剛失去親人的居民卻付不起早餐。這個城市看起來很開心，卻未必讓每個人都過得好。",
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
    "scenario": "You judge a pageant of monsters unlike human beauty standards.\n\nContestants polish scales, antennae and proud strides. Your old score sheets ask for narrow waists, white teeth and long legs.",
    "question": "What would you reward?",
    "twist": "",
    "deeperQuestion": "Could contestants choose the standards?",
    "zh": {
      "title": "怪物選美",
      "scenario": "你們當評判，參賽怪物都不符合人類審美。\n\n牠們認真準備了鱗片、觸角和自己最得意的步伐。你們桌上的舊評分表卻只有細腰、白牙和長腿。",
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
    "scenario": "Your group shares an invisibility cloak with different reasons to use it.\n\nOne wants privacy, one a secret and one a game. The cloak imposes no limits; your group may need to.",
    "question": "Who goes first?",
    "twist": "",
    "deeperQuestion": "Should users report where they went?",
    "zh": {
      "title": "共享隱形斗篷",
      "scenario": "你們有一件隱形斗篷，每人想用的原因不同。\n\n一人想逃開目光休息，一人想看清某個秘密，另一人只想玩。斗篷沒有限制，但你們可能需要有。",
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
    "scenario": "Your chore robot requests two days off weekly.\n\nThe robot schedules chores and checks park hours. Its wish to go out is not an error message.",
    "question": "Would you approve?",
    "twist": "",
    "deeperQuestion": "Could it earn extra money elsewhere on days off?",
    "zh": {
      "title": "會請假的機器",
      "scenario": "你們的家務機器人要求每週放假兩天。\n\n它已把家務排好，還認真查過公園的開放時間。你們第一次發現，它說「想出去」不是一個故障訊息。",
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
    "scenario": "A factory bottles laughter, leaving workers unable to laugh after work.\n\nA bottle could brighten tonight's party. Small print says the workers' laughter will not grow back until tomorrow.",
    "question": "Would you buy it?",
    "twist": "",
    "deeperQuestion": "What change would make buying acceptable?",
    "zh": {
      "title": "快樂工廠",
      "scenario": "工廠把笑聲裝瓶賣，但工人下班就笑不出。\n\n瓶子裡的笑聲會感染整個房間，很適合今晚的聚會。包裝背面的小字卻說，工人的笑聲明天才會長回來。",
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
    "scenario": "A spaceship has three seats for four people with urgent reasons.\n\nSome travel toward loved ones, others toward long-awaited chances. The boarding agent wants names, not a ranking of lives.",
    "question": "How should you decide?",
    "twist": "",
    "deeperQuestion": "Who would offer an alternative first?",
    "zh": {
      "title": "末班飛船",
      "scenario": "飛船只餘三個座位，你們四人各有非去不可的理由。\n\n有人趕去見重要的人，有人終於拿到等了多年的機會。登船員只問名單，不會替你們判斷誰的人生比較值得。",
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
    "scenario": "Your shop sells only comforting lies.\n\nCustomers want comfort, not lectures. Your product could ease tonight while keeping someone on the wrong path tomorrow.",
    "question": "What is its first product?",
    "twist": "",
    "deeperQuestion": "What lie would you refuse to sell?",
    "zh": {
      "title": "善意謊話店",
      "scenario": "你們開店，只能賣讓人好受的謊話。\n\n門口排著想被安慰的人，沒有誰想付錢聽大道理。你們手上的商品可能讓一晚好過，也可能讓人明天繼續走錯路。",
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
    "scenario": "Park trees request city votes and live far longer than humans.\n\nOld trees remember the city before roads; saplings want water. Residents mention taxes while sitting in their shade.",
    "question": "How would you assign votes?",
    "twist": "",
    "deeperQuestion": "Would a sapling get a full vote?",
    "zh": {
      "title": "會投票的樹",
      "scenario": "公園樹木要求參與城市投票，但每棵樹活得比人久。\n\n老樹記得城市還沒有大馬路的時候，新樹只想要多一點水。居民說它們不繳稅，樹卻每天替大家遮陽。",
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
    "scenario": "Your friendship becomes a company, with shares based on time contributed.\n\nThe first meeting decides the next outing. A busy old friend realizes from the back row how little voting power remains.",
    "question": "Would you list it?",
    "twist": "",
    "deeperQuestion": "How would you count a busy but valued friend?",
    "zh": {
      "title": "友誼股份",
      "scenario": "朋友圈變成公司，付出時間最多的人股份最多。\n\n股東大會第一項是誰來決定下次去哪裡。某位一直工作很忙的老朋友坐在後排，才發現自己已沒有多少投票權。",
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
    "scenario": "Each person exhibits one memory with everyone involved consenting.\n\nYour treasured memory includes a friend who dislikes that past self. Opening night approaches before you settle who owns the story.",
    "question": "Which would you choose?",
    "twist": "",
    "deeperQuestion": "If someone objects, would anonymity be enough?",
    "zh": {
      "title": "記憶展覽館",
      "scenario": "你們合辦展覽，每人只展一段回憶，但要得到當中所有人同意。\n\n你挑的回憶很珍貴，裡面的朋友卻不喜歡那時候的自己。展覽快開幕了，你們還沒想好故事到底屬於誰。",
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
    "scenario": "A hardworking fire-breathing dragon wants to join the fire brigade but hiccups often.\n\nThe dragon arrives first daily but burns its résumé when nervous. The captain asks whether to find a way or simply call it unsuitable.",
    "question": "Would you accept it?",
    "twist": "",
    "deeperQuestion": "What role could it start with?",
    "zh": {
      "title": "小龍消防隊",
      "scenario": "噴火小龍想當消防員，牠很努力卻容易打嗝。\n\n牠每天最早到訓練場，卻在緊張時燒壞了自己的履歷。隊長等你們決定，是幫牠找方法，還是說一句不適合就算。",
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
    "scenario": "A cake divides by need or by contribution, never both.\n\nSome supplied ingredients; others washed every bowl. Before cutting, decide how invisible contributions count.",
    "question": "Which would your group choose?",
    "twist": "",
    "deeperQuestion": "How would a child and the baker fare?",
    "zh": {
      "title": "公平蛋糕",
      "scenario": "魔法蛋糕能按需要或按付出分配，兩種只能選一種。\n\n蛋糕是全組一起做的，有人出材料，有人洗了所有碗。切刀落下前，你們要決定沒被看見的付出怎樣算。",
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
    "scenario": "Only a bear's song can soothe a sleepless town, but the bear is exhausted.\n\nThe bear's door says “resting” under one small light. A growing crowd sends your group forward to knock.",
    "question": "Would you wake it?",
    "twist": "",
    "deeperQuestion": "What would you offer in return?",
    "zh": {
      "title": "全城失眠",
      "scenario": "全城睡不著，只有一隻熊唱歌能幫忙，但牠也很累。\n\n熊把門牌翻到「休息中」，屋裡只亮一盞小燈。廣場的人越等越多，你們被推到最前面負責敲門。",
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
    "scenario": "Pets want a self-governing district where humans need invitations.\n\nThe pets plan parks, rest areas and a human visiting room. Decisions once made for them are now theirs to discuss.",
    "question": "Would you support it?",
    "twist": "",
    "deeperQuestion": "What if they still request food deliveries?",
    "zh": {
      "title": "寵物自治區",
      "scenario": "寵物要成立自治區，人類只能受邀進入。\n\n牠們畫好了公園和休息區，還留了一間人類探訪室。以前由你們決定的事，現在牠們想先自己商量。",
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
    "scenario": "One person's wish wins a raffle, but everyone pays its cost.\n\nOnce wishes enter, nobody can withdraw; each knows only their own cost. Trusting friends is not the same as accepting every unknown burden.",
    "question": "Would you join?",
    "twist": "",
    "deeperQuestion": "Must the costs be revealed before drawing?",
    "zh": {
      "title": "願望抽獎",
      "scenario": "每人寫一個願望，只抽中一人，但大家一起付代價。\n\n願望放進箱後就不能退出，大家只知道自己的代價。你們看著彼此，很快發現相信朋友和願意承擔所有未知是兩回事。",
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
    "scenario": "Your group receives an island with only three laws.\n\nThe beach is wide but resources limited, with newcomers arriving tomorrow. Your assumptions will soon become rules for other people's lives.",
    "question": "What would you protect first?",
    "twist": "",
    "deeperQuestion": "Which law could newcomers change?",
    "zh": {
      "title": "秘密小島法律",
      "scenario": "你們得到一座小島，只能訂三條法律。\n\n沙灘很大，資源卻不是無限，第一批新居民明天到。你們現在覺得理所當然的事，很快就要變成別人生活的規矩。",
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
    "scenario": "A wealthy bear buys everyone's jobs so the village can rest.\n\nThe bear genuinely wants less exhaustion. The baker says being needed is not something they wanted bought away.",
    "question": "Would you support it?",
    "twist": "",
    "deeperQuestion": "What could someone who still wants to work do?",
    "zh": {
      "title": "小熊富豪",
      "scenario": "小熊中了巨獎，想把全村工作都買下讓大家休息。\n\n熊很認真，不是想控制誰，只是不忍心再見大家疲倦。村裡的麵包師卻說，他不想連每天被需要的感覺也被買走。",
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
    "scenario": "One person can take the group's bad luck for a year.\n\nBefore the wheel stops it feels like a game. Then the friend who always handles trouble says once more that they do not mind.",
    "question": "Would you choose by lottery?",
    "twist": "",
    "deeperQuestion": "Would volunteering make it acceptable?",
    "zh": {
      "title": "倒楣輪盤",
      "scenario": "一人承受小組所有倒楣，其他人就順利一年。\n\n輪盤停下前，大家仍在笑，像只是普通抽獎。你卻想起某個總替人收拾麻煩的朋友，今天又說自己不介意。",
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
    "scenario": "Badges count good deeds but hide motives.\n\nThe brightest badge belongs to visible kindness; another candidate quietly finishes jobs. Your team has only one place.",
    "question": "Would you use them to choose teammates?",
    "twist": "",
    "deeperQuestion": "Do deeds done for the badge count?",
    "zh": {
      "title": "好人徽章",
      "scenario": "徽章會顯示一人做過多少好事，但不顯示原因。\n\n徽章最亮的人很會做讓人看見的好事，另一人則常默默留下收尾。你們只有一個空位，不能請所有人加入。",
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
    "scenario": "A littered park wants to admit only well-behaved visitors.\n\nThe closed park finally rests. Outside, a child carries yesterday's forgotten litter and asks to return to make things right.",
    "question": "Would you grant that right?",
    "twist": "",
    "deeperQuestion": "How could someone earn another chance?",
    "zh": {
      "title": "會生氣的公園",
      "scenario": "公園厭倦被弄髒，想只讓守規矩的人進去。\n\n公園把小門關起來，草地終於能休息。門外卻有個孩子，正抱著昨天忘記帶走的垃圾想回來補救。",
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
    "scenario": "You watch a film together but each sees a different desired ending.\n\nEveryone enjoys the film, then argues outside. You discover that each person's happy ending was a different picture.",
    "question": "Is it a shared experience?",
    "twist": "",
    "deeperQuestion": "Would you swap endings for another viewing?",
    "zh": {
      "title": "一人一個結局",
      "scenario": "你們同看一部電影，每人只會看見自己最想要的結局。\n\n散場後大家都覺得故事很好，卻開始為結局吵起來。你們才知道彼此看到的幸福，根本不是同一個畫面。",
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
    "scenario": "You can slow the town for a day, delaying every order.\n\nThe square wants breathing room and a courier wants tea. Across town someone waits for something that cannot arrive late.",
    "question": "Would you press it?",
    "twist": "",
    "deeperQuestion": "Should urgent needs be exceptions?",
    "zh": {
      "title": "全城慢一天",
      "scenario": "你們能讓全城慢下來一天，但所有訂單都延遲。\n\n廣場的人想好好喘口氣，快遞員也想慢慢喝杯茶。另一頭卻有人正等一件不能再遲到的物品。",
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
    "scenario": "A donor will clear the town's debts if the moon takes their name.\n\nThe donor's name enters every lullaby while debts disappear. You must price something nobody has ever owned.",
    "question": "Would you agree?",
    "twist": "",
    "deeperQuestion": "What if the name is a brand?",
    "zh": {
      "title": "月亮冠名",
      "scenario": "有人願意替小鎮付清欠款，條件是月亮改成他的名字。\n\n捐款人的名字會出現在每首晚安歌裡，欠款則一筆勾銷。你們第一次要替一樣沒有人買過的東西談價錢。",
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
    "scenario": "Wearing another's shoes for an hour reveals their life's weight.\n\nShoes adjust to fit but cannot hide their weight. The apparently carefree pair takes two people to lift.",
    "question": "Who would swap first?",
    "twist": "",
    "deeperQuestion": "Could you take them off early if overwhelmed?",
    "zh": {
      "title": "同一雙鞋",
      "scenario": "你們各穿一小時別人的魔法鞋，就會感受到他的生活重量。\n\n鞋大小都能自動調整，重量卻不能假裝。平常看起來最輕鬆的那雙，放到手上竟然沉得需要兩人托住。",
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
    "scenario": "A fairy has one wish left; everyone proposes one but cannot vote for themselves.\n\nEveryone has a serious wish and the fairy is yawning. The easiest request is not necessarily the one needing to be heard.",
    "question": "Whom would you support?",
    "twist": "",
    "deeperQuestion": "Should the least popular wish get more time?",
    "zh": {
      "title": "最後的願望",
      "scenario": "精靈只餘一個願望，你們能各提一案但不能投自己。\n\n每個人都已把願望想得很認真，精靈也開始打呵欠。你們不能只挑最容易實現的，因為有人正在等一句被理解。",
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
    "scenario": "Everyone chooses a bag of coins or reliving a happy afternoon.\n\nThe coins are tangible; the afternoon leaves no new photo. Point to a side together before explaining.",
    "question": "Which side are you on?",
    "twist": "",
    "deeperQuestion": "Ask one person per side what they hope to gain.",
    "zh": {
      "title": "記憶還是金幣",
      "scenario": "全場選：拿一袋金幣，或重過一個快樂下午。\n\n金幣袋是實實在在的，下午卻連一張新照片也帶不回。大家先不要解釋，同時指向自己選的那一邊。",
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
    "scenario": "Magic offers flight or invisibility.\n\nThe power lasts for life and cannot be swapped tomorrow. Choose first, then hear the other side's plans.",
    "question": "Everyone picks together; which is yours?",
    "twist": "",
    "deeperQuestion": "Each side share one use unrelated to money.",
    "zh": {
      "title": "飛行還是隱形",
      "scenario": "魔法只送一種能力：飛行或隱形。\n\n能力不會用完，但要跟著你一輩子，不能明天再換。先選，再聽聽另一邊的人想用它做甚麼。",
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
    "scenario": "The town votes on endless spring at the cost of snow.\n\nFlorists celebrate while a child sets down snow gloves. This vote decides whose favourite days disappear.",
    "question": "Would you vote yes?",
    "twist": "",
    "deeperQuestion": "Ask someone in the minority what they want to keep.",
    "zh": {
      "title": "永遠春天",
      "scenario": "全城投票要不要永遠春天，代價是再沒有雪。\n\n賣花的人已在慶祝，造雪人的小孩卻把手套放下了。這不是好天氣對壞天氣，而是誰最喜歡的日子會消失。",
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
    "scenario": "Choose a hat for lovely dreams or good daytime luck.\n\nNeither hat is spectacular, but daily life would change. Some want smooth days; others have not slept peacefully in ages.",
    "question": "Which would you wear?",
    "twist": "",
    "deeperQuestion": "What would make you change hats?",
    "zh": {
      "title": "好夢還是好運",
      "scenario": "每人選一頂帽：夜夜好夢，或白天小事順利。\n\n兩頂帽都不算厲害，卻會改變日常的小感受。有人已選好白天的順利，有人其實很久沒有安心睡過。",
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
    "scenario": "A dragon joins only people who let it fly away freely.\n\nThe dragon promises dinner visits, not permanent residence. Its adoption form asks for a drawing of an open door.",
    "question": "Discuss in teams: would you adopt it?",
    "twist": "",
    "deeperQuestion": "Each team offer one promise that does not trap it.",
    "zh": {
      "title": "小龍分隊",
      "scenario": "小龍只跟願意讓牠自由飛走的人回家。\n\n牠每晚會回來吃飯，卻不承諾一直住下去。領養單最後一格不是簽名，而是要你們畫一扇打開的門。",
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
    "scenario": "A bakery gives free bread for public admissions of failure.\n\nThe bread smells lovely; some queue happily while others crumple their notes. Even hunger must pay with a personal story.",
    "question": "Who would queue?",
    "twist": "",
    "deeperQuestion": "Would anonymous stories be enough?",
    "zh": {
      "title": "免費麵包",
      "scenario": "麵包店免費送麵包，但每人要公開說一件失敗。\n\n麵包很香，排隊的人有的在笑，有的把手裡紙條揉了又揉。今天只想吃飽的人，也得交出一點自己的故事。",
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
    "scenario": "Choose an extra day off or a cash bonus, never both.\n\nThe cash and time are equal for everyone. Choices may reveal unseen bills, exhaustion or someone urgently missed.",
    "question": "Which do you want?",
    "twist": "",
    "deeperQuestion": "First hear someone who chose differently.",
    "zh": {
      "title": "時間還是錢",
      "scenario": "每人選多一天假期或一筆獎金，兩者不能兼得。\n\n獎金的數字大家一樣，假期也一樣長。答案卻可能藏著別人不知道的帳單、疲倦，或一個很想去見的人。",
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
    "scenario": "Everyone considers moving to a town where lying is impossible.\n\nThe town is pleasant and polite. Birthday surprises, comforting evasions and questions you want private all need new solutions.",
    "question": "Would you move?",
    "twist": "",
    "deeperQuestion": "Each side name one situation that worries you.",
    "zh": {
      "title": "不會說謊的鎮",
      "scenario": "全場決定要不要搬進不能說謊的小鎮。\n\n小鎮乾淨安穩，居民也都很有禮貌。只是生日驚喜、敷衍的安慰和不想回答的問題，全都要重新想辦法。",
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
    "scenario": "Everyone can light a star for a stranger, never themselves.\n\nEach star lights one night, not a lifetime. Take turns naming whom you hope might see it tonight.",
    "question": "Who would yours be for?",
    "twist": "",
    "deeperQuestion": "Did anyone's answer change your choice?",
    "zh": {
      "title": "每人一顆星",
      "scenario": "每人能替陌生人點亮一顆星，但不能替自己。\n\n星星只能照亮一個晚上，不能替人解決一生。輪流用一句話說，你希望哪個今晚還醒著的人看見它。",
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
    "scenario": "Teams found islands named for their most important value.\n\nYour flag rises soon and newcomers wait across the water. A name should describe how people are treated, not merely sound lovely.",
    "question": "What is yours called?",
    "twist": "",
    "deeperQuestion": "Could someone who disagrees live there?",
    "zh": {
      "title": "小島隊名",
      "scenario": "分組建立一座小島，名字必須代表最重要的一個價值。\n\n你們的旗子很快就要升起，對岸也有人準備搬過來。名字不只是漂亮的詞，還要讓新居民知道這裡怎樣對待人。",
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
    "scenario": "Choose a free slow train or a paid fast one to the same place.\n\nThe slow train has lovely views; the fast one reaches loved ones sooner. Pick a side, then consider what you really want to save.",
    "question": "Which would you board?",
    "twist": "",
    "deeperQuestion": "What if your friends take the other?",
    "zh": {
      "title": "慢車快車",
      "scenario": "大家選免費慢車或付錢快車，目的地相同。\n\n慢車窗外很美，快車卻能讓你早點到達想見的人身邊。大家先站隊，再想想自己其實想省下的是甚麼。",
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
    "scenario": "Vote for knowing tomorrow completely or keeping every surprise.\n\nTomorrow's preview might show surprise or an ordinary rough day. Knowing offers preparation while taking away anticipation.",
    "question": "Which side are you on?",
    "twist": "",
    "deeperQuestion": "Would being able to change it alter your vote?",
    "zh": {
      "title": "看見未來",
      "scenario": "全場舉手選：知道明天所有事，或完全保留驚喜。\n\n預告裡可能有驚喜，也可能只是一個不太順的普通日子。知道的人能準備，卻不能再期待未知。",
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
    "scenario": "Each team gives a gift box to the hardest-working, neediest or luckiest person.\n\nThe small box represents what your group values. All three candidates wait at the door and will hear your reasoning.",
    "question": "Which rule wins?",
    "twist": "",
    "deeperQuestion": "Would those left out accept the reason?",
    "zh": {
      "title": "魔法禮物箱",
      "scenario": "每組一箱禮物，要選送給最努力、最需要或最幸運的人。\n\n禮物箱很小，卻代表你們認為甚麼值得被照顧。三位候選人都站在門口，而且都會聽見你們的理由。",
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
    "scenario": "A zoo panda wants a year's holiday, disappointing visitors.\n\nThe panda wants to explore like its visitors. The gift shop has a year's posters ready, and families have planned trips around it.",
    "question": "Would you approve?",
    "twist": "",
    "deeperQuestion": "What should happen for people holding tickets?",
    "zh": {
      "title": "熊貓請假",
      "scenario": "動物園熊貓想放一年假，遊客會失望。\n\n牠不是罷工，只想像遊客一樣出門看看。紀念品店卻已印好整年的海報，說很多家庭特地為牠而來。",
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
    "scenario": "Wallets can display how much money you have.\n\nSplitting bills and treating remain possible. Before paying, everyone sees a number now difficult to ignore.",
    "question": "Choose public or hidden; which is yours?",
    "twist": "",
    "deeperQuestion": "Would you change it when treating others?",
    "zh": {
      "title": "透明錢包",
      "scenario": "錢包會顯示你有多少錢，全場選公開或隱藏。\n\n你們仍然可以各付各的，也可以請客。只是付款前，大家都會先看見彼此那個很難再忽略的數字。",
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
    "scenario": "Teams choose a statue for a hero, carer or ordinary resident.\n\nThere is room for one lasting statue. Each team first names the action it wants the next generation to remember.",
    "question": "Who deserves it?",
    "twist": "",
    "deeperQuestion": "Would changing it yearly be fairer?",
    "zh": {
      "title": "小鎮雕像",
      "scenario": "分組替小鎮選雕像：英雄、照顧者或普通居民。\n\n廣場只夠放一座，雕像會留很久，不只是今年的熱鬧。每組先說想被下一代記得的是哪種行為。",
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
    "scenario": "Everyone gets an hour of power to help someone else.\n\nThe countdown starts and a solution springs to mind. Its recipient may have their own plan, or may not want that change.",
    "question": "What would you do?",
    "twist": "",
    "deeperQuestion": "Would you ask first or surprise them?",
    "zh": {
      "title": "一小時超能力",
      "scenario": "全場每人有一小時超能力，但必須用來幫另一人。\n\n倒數已開始，你腦裡很快出現一個「替他做到就好」的點子。可被幫的人也許有自己的方法，或根本沒想要那份改變。",
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
    "scenario": "Each person chooses an emotional colour the town can feel.\n\nRaised colours make the town feel them, not simply see them. Your favourite excitement might overwhelm someone else.",
    "question": "Which would you choose?",
    "twist": "",
    "deeperQuestion": "Could one area remain unaffected?",
    "zh": {
      "title": "快樂顏色",
      "scenario": "每人選一種能讓全城感受的情緒顏色。\n\n大家把顏色舉起時，城市會真的感受到它，不只是看見。你喜歡的熱鬧，對某些人可能剛好太吵。",
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
    "scenario": "A city gate forgives every first mistake.\n\nThe gate faces tiny mistakes and deep harm alike. A one-line rule must cover very different people.",
    "question": "Would you support the rule?",
    "twist": "",
    "deeperQuestion": "First hear what opponents worry about.",
    "zh": {
      "title": "會原諒的門",
      "scenario": "城門會原諒所有第一次犯錯的人。\n\n門口有人犯了小錯，也有人傷過別人很深。規則只有一句話，卻要用在很不一樣的人身上。",
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
    "scenario": "Choose keeping all memories or erasing the saddest one.\n\nThe eraser targets one memory without showing which habits grew from it. Keep the event private and choose what you want to protect.",
    "question": "Which would you choose?",
    "twist": "",
    "deeperQuestion": "Without sharing the event, say what you want to protect.",
    "zh": {
      "title": "記住還是放下",
      "scenario": "每人選保留全部回憶，或刪走最難過的一段。\n\n橡皮擦只會動那一段，卻不能預先告訴你哪些習慣是從那裡長出來的。不用公開往事，只要選自己想守住的東西。",
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
    "scenario": "A mansion is free if strangers tour it daily.\n\nThe kitchen, garden and bath are ideal. The daily doorbell brings strangers into your untidy mornings.",
    "question": "Would you move in?",
    "twist": "",
    "deeperQuestion": "Would one hour daily change your vote?",
    "zh": {
      "title": "免費豪宅",
      "scenario": "豪宅免費，但每天要讓陌生人參觀。\n\n廚房、花園和大浴缸都像你的理想生活。每天門鈴卻準時響起，陌生人會看見你沒收好的那個早晨。",
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
    "scenario": "Teams open cloud shops; each coin earned consumes a cloud.\n\nThe first sale removes a piece of cloud at your door. You need income and a sky still worth standing under tomorrow.",
    "question": "What would you sell?",
    "twist": "",
    "deeperQuestion": "Would you cap daily earnings?",
    "zh": {
      "title": "雲上工作室",
      "scenario": "分組開一間雲上店，每賺一元就少一朵雲。\n\n店才開張，第一筆生意已讓門前的雲少了一角。你們要賺錢，也得想清楚明天還想站在哪種天空下面。",
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
    "scenario": "Teams name a misunderstood monster to help people approach it.\n\nThe frightening-looking monster carries biscuits to share. A welcoming name might also pressure it to perform a likeable role.",
    "question": "What name would you choose?",
    "twist": "",
    "deeperQuestion": "Could it reject a name it dislikes?",
    "zh": {
      "title": "小妖怪的名字",
      "scenario": "每組替怕被誤會的小妖怪取名，讓人願意靠近。\n\n牠長得有點嚇人，背包裡卻都是想分給朋友的餅乾。名字可以幫人靠近，也可能讓牠必須一直扮成大家喜歡的模樣。",
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
    "scenario": "Your group can make one thing free forever.\n\nFree things still require work. For every proposal, consider someone on the other side of the counter.",
    "question": "What would you nominate?",
    "twist": "",
    "deeperQuestion": "Who benefits most, and who might bear the cost?",
    "zh": {
      "title": "最重要的免費物",
      "scenario": "全場只能讓一樣東西永遠免費。\n\n免費之後不代表不需要人做，總有人要花時間供應。每個提案都請再想一位站在收銀台另一邊的人。",
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
    "scenario": "A portal visits friends at the cost of a holiday day each time.\n\nFamiliar laughter replaces tickets and time zones. The holiday spent might have been your chance to rest alone.",
    "question": "How often would you use it?",
    "twist": "",
    "deeperQuestion": "Would distance change your choice?",
    "zh": {
      "title": "友情傳送門",
      "scenario": "傳送門能見朋友，但每次會扣一天假期。\n\n門後立刻有熟悉的笑聲，不用再算機票和時差。可扣掉的假期，也可能原本留給你一個人休息。",
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
    "scenario": "A bear finishes last despite trying hardest.\n\nThe bear is already pleased with a personal best. Before engraving, decide whether the trophy honours effort or manages disappointment.",
    "question": "Vote on a special award; what is your vote?",
    "twist": "",
    "deeperQuestion": "What name would make it feel sincere?",
    "zh": {
      "title": "小熊的獎盃",
      "scenario": "小熊最後一名卻最努力，大家投票要不要頒特別獎。\n\n牠看起來已經很高興，因為比上次跑快了。獎盃還沒刻字，你們要先想清楚是在肯定牠，還是怕牠失望。",
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
    "scenario": "Choose a day of mind-reading, knowing others can read you too.\n\nSome raise hands laughing; others step back. The spell reveals unfinished thoughts as well as desired secrets.",
    "question": "Would you accept?",
    "twist": "",
    "deeperQuestion": "Whom would you speak to first?",
    "zh": {
      "title": "免費讀心",
      "scenario": "全場同時決定要不要讀心一天，選了也會被讀。\n\n有人笑著舉手，有人突然想站遠一點。魔法不會只讀你想知道的秘密，也會讓別人聽見你今天還沒整理好的念頭。",
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
    "scenario": "Teams add one feature to a park without buying their way out of disagreement.\n\nThe plan is beautiful, yet someone cannot find a quiet seat. Each team has one addition and must choose whom to hear first.",
    "question": "What would you add?",
    "twist": "",
    "deeperQuestion": "Whose needs are easiest to overlook?",
    "zh": {
      "title": "理想公園",
      "scenario": "每組只能替公園加一樣設施，不能用錢解決爭議。\n\n規劃圖上已有很多漂亮的東西，卻有人找不到能安靜坐下的位置。每組只有一次機會，要先決定想聽誰說。",
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
    "scenario": "Your group can replace one real rule with a fairy-tale rule.\n\nThe new rule applies tomorrow, even to people outside the game. Let imagination leave an option for someone who disagrees.",
    "question": "What would you suggest?",
    "twist": "",
    "deeperQuestion": "Who might face a new problem because of it?",
    "zh": {
      "title": "換掉一條規矩",
      "scenario": "全場能用童話規矩取代一條現實規矩。\n\n新規矩明早就會全城生效，連沒參與遊戲的人也要照做。你們可以天馬行空，但要替一位不同意的人留條路。",
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
    "scenario": "Dinner on the moon is free, but only volunteer dishwashers can return.\n\nThe tempting menu hides the return rule in small print. Everyone volunteers now; will they feel the same after eating?",
    "question": "Would you go?",
    "twist": "",
    "deeperQuestion": "Should chores be agreed before leaving?",
    "zh": {
      "title": "月球晚餐",
      "scenario": "大家可免費去月球吃飯，但只有自願洗碗的人能回來。\n\n菜單很誘人，回程規則卻寫在最後一行小字。現在大家都說願意，吃飽之後還會不會一樣熱心？",
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
    "scenario": "Give the person to your right courage, stability or freedom.\n\nThe blessing lasts a year and cannot simply reflect what you think best. Guess first, then hear what they actually want.",
    "question": "Which would you choose?",
    "twist": "",
    "deeperQuestion": "Let them say which they actually want.",
    "zh": {
      "title": "一人一個祝福",
      "scenario": "每人替右邊的人選祝福：勇氣、安穩或自由。\n\n祝福會跟著他一整年，不能只是你覺得對他好。送出前先猜，送出後再聽他說自己真正想要甚麼。",
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
    "scenario": "Leaving tonight, choose money, a memory or a new friend's understanding.\n\nThree equal-weight gifts wait by the exit, with no extra hidden in pockets. Your choice tells those beside you a little more.",
    "question": "What would you take?",
    "twist": "",
    "deeperQuestion": "Whose choice surprised you?",
    "zh": {
      "title": "回家紀念品",
      "scenario": "散場時只能帶走錢、回憶或一位新朋友的理解。\n\n三份紀念品都放在出口，重量一樣，不能偷偷多拿。你帶走的選擇，也會讓旁邊的人認識你一點。",
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
    "scenario": "A monster contest gives money to the winner and a friends' trip to second place.\n\nThe podium is ready while friends plan the trip. Wanting to win and wanting shared fun suddenly occupy different places.",
    "question": "Which rank would you want?",
    "twist": "",
    "deeperQuestion": "Would you slow down to let a friend win?",
    "zh": {
      "title": "怪獸的第二名",
      "scenario": "怪獸比賽的冠軍能拿錢，第二名能帶所有朋友旅行。\n\n頒獎台已搭好，朋友們也開始討論旅行想去哪裡。你想贏的衝動，第一次跟大家一起玩的期待站到不同位置。",
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
    "scenario": "A pocket planet holds three things that make you feel safe.\n\nThere is a chair just your size, and the sky slows with your breathing. The moving company reminds you that a memory counts as luggage too.",
    "question": "What would you put there?",
    "twist": "",
    "deeperQuestion": "Which would you release if one had to go?",
    "zh": {
      "title": "口袋星球",
      "scenario": "你口袋裡有一顆小星球，只能放三樣讓你安心的東西。\n\n星球上有一張剛好坐得下你的椅子，天空會跟著你的呼吸慢下來。搬家公司提醒你，回憶也算一件行李。",
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
    "scenario": "Each worry becomes a plant, and some have bloomed.\n\nThe gardener points out that the largest plant shades a tiny seedling. With your shovel already raised, you begin to wonder what it is protecting.",
    "question": "Which would you pull out?",
    "twist": "",
    "deeperQuestion": "Which would you leave to see what happens?",
    "zh": {
      "title": "煩惱盆栽",
      "scenario": "每個煩惱會長成一棵植物，有些已經開花。\n\n園丁指著最茂盛的一棵，說它其實替旁邊的小苗擋了烈日。你原本已經拿起鏟子，現在卻想知道它保護的是甚麼。",
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
    "scenario": "Your future self sends a letter; you may read only its first line.\n\nThe postman's shoes carry unfamiliar mud, but the envelope is your childhood favourite colour. He says you were smiling when you wrote it, without explaining why.",
    "question": "What do you hope it says?",
    "twist": "",
    "deeperQuestion": "Would “Take your time” be enough?",
    "zh": {
      "title": "未來小郵差",
      "scenario": "未來的你寄來一封信，只准看第一句。\n\n郵差的鞋底沾著你沒見過的泥，信封卻是你小時候最喜歡的顏色。他說，寫信那天的你笑了很久，但沒有告訴他原因。",
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
    "scenario": "Nobody in this town knows your past.\n\nThe café owner saves you a window seat and waits for your story. This time, nobody will follow up by asking about grades, job titles or connections.",
    "question": "What is your first sentence introducing yourself?",
    "twist": "",
    "deeperQuestion": "What old name or identity would you keep?",
    "zh": {
      "title": "無人認識的小鎮",
      "scenario": "小鎮沒人知道你的過去，你可以重新介紹自己。\n\n早餐店老闆替你留了一個靠窗的位置，等你說自己的故事。這次沒有人會接著問成績、職位，或你認識誰。",
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
    "scenario": "A machine sells complete peace at the cost of wanting new experiences.\n\nSomeone trying it sits nearby, untroubled by a train about to leave. Asked where else he wants to go, he looks at the map and says here is fine.",
    "question": "Would you buy it?",
    "twist": "",
    "deeperQuestion": "Would you buy just one night?",
    "zh": {
      "title": "安心售賣機",
      "scenario": "機器賣百分百安心，代價是再不想嘗試新事。\n\n試用的人坐在旁邊，連快要錯過的火車也不讓他著急。你問他還想去哪裡，他望著地圖，說現在這裡也很好。",
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
    "scenario": "A creature fed by your regrets has grown large enough to shelter you.\n\nWhen rain comes, it gathers your treasures before lifting its ears to shelter you. You remember when it first arrived and was afraid to approach your door.",
    "question": "Would you still send it away?",
    "twist": "",
    "deeperQuestion": "What would you want it to eat from tomorrow?",
    "zh": {
      "title": "後悔小獸",
      "scenario": "一隻小獸靠你的後悔長大，現在已能替你擋風。\n\n下雨時，牠先把你最珍惜的東西抱進懷裡，再替你撐起耳朵。你忽然想起，牠剛來的時候，連門口也不敢走近。",
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
    "scenario": "A mirror shows your successful self but hides the costs.\n\nYour reflection lives in your dream home, with just one place set at the table. When you touch the glass, they reach back as if something remains unsaid.",
    "question": "Would you follow that path?",
    "twist": "",
    "deeperQuestion": "What would you ask that person first?",
    "zh": {
      "title": "成功的另一面",
      "scenario": "鏡子讓你看見成功的自己，卻不顯示付出了甚麼。\n\n鏡中人住在你喜歡的房子，桌上卻只有一套餐具。你伸手碰鏡面時，對方也伸手過來，像有話還沒說完。",
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
    "scenario": "A tree gives a daily coin for naming a dream you will stop chasing.\n\nPeople queue beneath the tree, trading for roofs or a lovely dinner. When your turn comes, the leaves whisper a wish you have not mentioned in years.",
    "question": "Would you visit daily?",
    "twist": "",
    "deeperQuestion": "Which dream would you never trade?",
    "zh": {
      "title": "每天一枚金幣",
      "scenario": "樹每天給你一枚金幣，但每次要說出一個不再追的夢。\n\n樹下排著隊，有人換了屋頂，有人只換一頓好吃的晚餐。輪到你時，樹葉念出一個你多年沒再提起的願望。",
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
    "scenario": "Your anxiety becomes a lodger claiming to protect you.\n\nYour lodger checks the lock three times before sitting down for tea. Its suitcase contains evidence of every time you nearly got hurt.",
    "question": "How long would you let it stay?",
    "twist": "",
    "deeperQuestion": "What house rule would you agree on first?",
    "zh": {
      "title": "心裡的房客",
      "scenario": "你的不安變成小房客，總說自己是來保護你。\n\n房客把門鎖檢查了三遍，才肯坐下喝茶。牠帶來的行李裡，全是你曾經差點受傷的證據。",
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
    "scenario": "You try three lives for a day each and keep only one feeling.\n\nThe assistant keeps a breakfast-table photo from each life, without trophies or résumés. Afterwards, one ordinary morning is what stays with you most.",
    "question": "What would you keep?",
    "twist": "",
    "deeperQuestion": "Could that feeling exist in your current life?",
    "zh": {
      "title": "人生試穿間",
      "scenario": "你能試穿三種人生各一天，離開時只能留一樣感覺。\n\n店員替三段人生各留了一張早餐桌的照片，沒有獎盃或履歷。試完後，你發現最難忘的竟然只是其中一個早晨。",
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
    "scenario": "Your dream gets an affordable price tag, removing all effort.\n\nOn delivery day, everyone congratulates you, but you cannot describe the first step of the journey. The assistant quietly says the dream still belongs to you.",
    "question": "Do you still want it?",
    "twist": "",
    "deeperQuestion": "Do you want the result or the path toward it?",
    "zh": {
      "title": "夢想標價",
      "scenario": "你最想要的夢想突然標上可負擔的價錢，買了就不用努力。\n\n交貨那天，所有人都來祝賀，你卻答不出他們問的第一個過程細節。店員悄悄說，這不影響夢想已經屬於你。",
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
    "scenario": "You receive a medal only you can see.\n\nThe presenter remembers a small thing you finished when you nearly gave up. At home, your family sees only your empty hands.",
    "question": "What should it honour?",
    "twist": "",
    "deeperQuestion": "Is it worth celebrating if nobody knows?",
    "zh": {
      "title": "看不見的獎牌",
      "scenario": "你得到一枚只有自己看得見的獎牌。\n\n頒獎的人記得你某次很想放棄，最後仍然做完的小事。散場後，你把獎章帶回家，家人只看見你空著雙手。",
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
    "scenario": "A thief steals your daydreaming time and replaces it with productivity.\n\nEach night the thief returns an impressive checklist, including tasks long postponed. But looking out of a bus window no longer starts a story in your mind.",
    "question": "Would you report them?",
    "twist": "",
    "deeperQuestion": "Which ten minutes would you reclaim first?",
    "zh": {
      "title": "時間小偷",
      "scenario": "小偷偷走你的發呆時間，換成完成更多事情。\n\n小偷每晚都交回一張漂亮的完成清單，連拖了很久的事也做好了。只是搭車時，窗外再也不會讓你想到任何故事。",
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
    "scenario": "Your shadow refuses everything you do not want to agree to.\n\nIt stops outside a lit shop displaying the things you never have time for. Where you are heading, people are waiting for you to perform.",
    "question": "Would you let it speak?",
    "twist": "",
    "deeperQuestion": "Whom would you fear it refusing?",
    "zh": {
      "title": "會拒絕的影子",
      "scenario": "影子會替你拒絕所有不想答應的事。\n\n牠停在一間亮著燈的小店前，櫥窗裡是你一直說沒空做的事。你趕著去的地方，則有一群正在等你表現的人。",
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
    "scenario": "Your unfinished projects become exhibits, some unexpectedly beautiful.\n\nThe curator places your half-finished work at the entrance, beside a chair. The first visitor stays a long time, drawn to the part without an answer.",
    "question": "Which would you display?",
    "twist": "",
    "deeperQuestion": "Would you finish it or leave it as it is?",
    "zh": {
      "title": "未完成博物館",
      "scenario": "你沒完成的事都變成展品，有些意外地美。\n\n館長把那件只完成一半的作品放在入口，還擺了張椅子。第一位觀眾坐了很久，說最喜歡它還沒有答案的部分。",
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
    "scenario": "You discover someone else wrote your life script; you may change one page.\n\nThat page is covered in well-meant notes from people who love you. The eraser can remove the script, but their worried handwriting will remain.",
    "question": "Which page?",
    "twist": "",
    "deeperQuestion": "Which original line would you keep?",
    "zh": {
      "title": "別人的劇本",
      "scenario": "你發現人生劇本是別人替你寫的，現在可改一頁。\n\n翻到那一頁時，你發現旁邊寫滿親友好意的註解。橡皮擦能擦掉正文，卻會留下他們當時替你擔心的字跡。",
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
    "scenario": "A lost-property office finds a childhood wish and asks whether you still want it.\n\nThe lost-property clerk says it has asked about you every year. The wish is smaller than you remember, still wearing your old school uniform.",
    "question": "Would you collect it?",
    "twist": "",
    "deeperQuestion": "Would you feel guilty for no longer wanting it?",
    "zh": {
      "title": "心願失物處",
      "scenario": "失物處找回你小時候遺失的願望，問你還要不要。\n\n失物處的職員說，它每年都會來問一次你找到了沒有。願望比你記得的小，還穿著那件你早就丟掉的校服。",
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
    "scenario": "Courage can be rented for a day; afterwards you remember what you did.\n\nOnly one slightly ill-fitting piece of courage remains, with a previous customer's ticket in its pocket. The rental ends at midnight, leaving time for one doorway.",
    "question": "What would you do?",
    "twist": "",
    "deeperQuestion": "Would you hope to do it without renting next time?",
    "zh": {
      "title": "勇氣只租不賣",
      "scenario": "勇氣可以租一天，退還後會記得自己做到過。\n\n店裡只剩一件有點不合身的勇氣，口袋留著上一位客人的車票。租約到午夜，你得決定先走向哪一扇門。",
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
    "scenario": "Magic makes what you have always feel enough, removing the desire for more.\n\nYour fridge stays full and the bills get paid, with days as familiar as a song. One day a friend proposes a risky new project, and you feel no pull at all.",
    "question": "Would you accept?",
    "twist": "",
    "deeperQuestion": "Would you worry about stopping?",
    "zh": {
      "title": "永遠剛剛好",
      "scenario": "魔法讓你永遠覺得擁有的剛剛好，但再也不渴望更多。\n\n你的冰箱不會空，帳單也總能付清，日子安穩得像一首熟悉的歌。某天朋友邀你做一件可能失敗的新事，你發現自己完全不心動。",
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
    "scenario": "Everyone has an unspoken name for their truest self.\n\nThe name glows on a slip of paper only when you say it aloud. The registrar asks whether you will keep it in your pocket or teach someone to use it.",
    "question": "What might yours sound like?",
    "twist": "",
    "deeperQuestion": "Whom would you let use it?",
    "zh": {
      "title": "秘密名字",
      "scenario": "每人心裡都有一個沒被叫過的名字，代表最真的自己。\n\n名字寫在一張會發光的小紙上，只有你念出來時才會亮。登記員問你，要把它留在口袋，還是教一個人怎樣叫你。",
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
    "scenario": "Bad luck can be bottled; ten bottles buy one lucky break.\n\nThe collector recognises your labels and wraps the hardest bottle in cloth. The luck behind the counter has no instructions or promise of where it will help.",
    "question": "Would you keep them?",
    "twist": "",
    "deeperQuestion": "What would you spend the lucky break on?",
    "zh": {
      "title": "壞運氣收藏",
      "scenario": "壞運氣能裝瓶收藏，十瓶換一次大好運。\n\n收瓶的人認得你每次倒楣後留下的標籤，還替最難受的那瓶包了軟布。櫃檯後的好運沒有說明書，也不保證用在你最想要的事上。",
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
    "scenario": "A salon gives your favourite hairstyle by trimming a memory.\n\nThe first snip quiets a painful scene. Then you realise you cannot remember who stayed beside you until dawn that night.",
    "question": "Would you sit down?",
    "twist": "",
    "deeperQuestion": "Would you agree if it removes only embarrassment?",
    "zh": {
      "title": "回憶剪髮店",
      "scenario": "剪掉一段回憶，頭髮就變成你最喜歡的樣子。\n\n理髮師先剪下一小段，某個刺痛的畫面便安靜了。你卻突然想不起，那天是誰陪你坐到天亮。",
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
    "scenario": "A coat makes everyone trust you, even when you doubt your ability.\n\nOnce you wear it, people act even on your casual ideas. That evening, a thank-you note reveals that someone has placed something precious in your hands.",
    "question": "Would you wear it to an interview?",
    "twist": "",
    "deeperQuestion": "Would you disclose your limitations?",
    "zh": {
      "title": "自信外套",
      "scenario": "外套讓所有人信任你，但你知道自己未必做得到。\n\n穿上後，連你隨口提出的點子也有人立刻執行。晚上脫衣時，你收到一封感謝信，裡面說對方把很重要的事交給了你。",
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
    "scenario": "You can see the life path you did not choose but cannot return to it.\n\nYour other self is having breakfast by the road, looking neither especially happy nor sad. The guide gives you ten minutes to decide where to look.",
    "question": "Would you look?",
    "twist": "",
    "deeperQuestion": "How would you care for yourself if it looks better?",
    "zh": {
      "title": "另一條小路",
      "scenario": "你能看見沒選的那條人生路，卻不能回去。\n\n那條路上的你正坐在路邊吃早餐，看起來沒有特別幸福或不幸。導遊只給你十分鐘，讓你決定把目光停在哪裡。",
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
    "scenario": "You can retire early to a comfortable village where nobody needs your help.\n\nIn the first week, you wake naturally and finish the book by your bed. In the second, your quiet phone has you inventing little tasks.",
    "question": "Would you go?",
    "twist": "",
    "deeperQuestion": "Would you seek a role or enjoy the quiet?",
    "zh": {
      "title": "小小退休",
      "scenario": "你能提早退休到童話村，生活舒服但再沒人需要你幫忙。\n\n第一個星期，你每天睡到自然醒，終於看完床邊那本書。第二個星期，手機安靜得讓你開始替自己找一些小任務。",
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
    "scenario": "You can wear one mood daily, but the old feeling waits underneath.\n\nThe assistant says every feeling can be borrowed, and some customers even request sadness. As you reach for the lightest outfit, your reflection seems relieved.",
    "question": "What would you wear today?",
    "twist": "",
    "deeperQuestion": "Would you face the original feeling that evening?",
    "zh": {
      "title": "情緒衣櫃",
      "scenario": "你能每天挑一種心情穿上，但脫下後原本心情仍在。\n\n店員說，任何感覺都可以暫借，難過的衣服也有人指定要穿。你準備挑最輕鬆的一件時，看見鏡子裡的自己正鬆一口氣。",
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
    "scenario": "Your home has one window facing past, present or future.\n\nAll three curtains stir: one carries laughter, one rain, and one remains unclear. You may move a chair beside one window while the others slowly mist over.",
    "question": "Which direction would you choose?",
    "twist": "",
    "deeperQuestion": "Would you add curtains?",
    "zh": {
      "title": "只剩一扇窗",
      "scenario": "你的房子只准留一扇窗，可望向過去、現在或未來。\n\n三扇窗的窗簾都在動，一邊傳來笑聲，一邊有雨，一邊還看不清。房東允許你搬一張椅子過去，但另外兩扇會慢慢起霧。",
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
    "scenario": "The world forgets your achievements but remembers how being with you feels.\n\nA colleague forgets your major project but remembers a light you left on for them. At a reunion, people recall moments you thought nobody noticed.",
    "question": "Would you feel relieved?",
    "twist": "",
    "deeperQuestion": "Which achievement would you most miss being known for?",
    "zh": {
      "title": "忘掉成績",
      "scenario": "世界忘記你所有成績，但仍記得跟你相處的感覺。\n\n同事忘了你做過的大項目，卻記得你曾替他留一盞燈。重逢時，大家輪流說起你以為沒人在意的小事。",
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
    "scenario": "Your ambition becomes a sun that grows hotter with effort, drying your garden.\n\nOne plant has grown so fast that it shades your favourite flower. The gardener says nothing must be uprooted, but you must choose where sunlight reaches.",
    "question": "Would you dim it?",
    "twist": "",
    "deeperQuestion": "What in the garden would you protect?",
    "zh": {
      "title": "願望太陽",
      "scenario": "你的願望變成太陽，越努力就越熱，快把花園曬乾。\n\n有一株長得太快，已經把你最愛的小花遮住。園丁說不用全拔掉，只是你要親手決定讓哪裡見到陽光。",
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
    "scenario": "You have a pass allowing one choice without explaining yourself.\n\nThe pass says only, “No explanation needed today,” and even those closest to you will accept it. On your first use, you still type a long justification.",
    "question": "What would you use it for?",
    "twist": "",
    "deeperQuestion": "Could you make that choice without the pass?",
    "zh": {
      "title": "不必解釋券",
      "scenario": "你有一張不用向任何人解釋的通行證。\n\n通行證上只有一句「今天不需要解釋」，連你最在意的人也會接受。第一次使用時，你已打好一大段理由，手指停在傳送鍵上。",
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
    "scenario": "You open a shop selling only what you treasure.\n\nNobody buys the showpiece, while a small item in the corner draws constant interest. Before closing, you may choose one thing never to sell.",
    "question": "What is its first item?",
    "twist": "",
    "deeperQuestion": "What would you display but never sell?",
    "zh": {
      "title": "心裡的小店",
      "scenario": "你開一家只賣自己珍惜之物的小店。\n\n櫃檯最顯眼的東西其實沒人買，角落一件不起眼的小物卻常被問起。打烊前，你可以決定哪一件永遠不出售。",
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
    "scenario": "A mask makes everyone like you; removing it erases their memories together.\n\nAt dinner, everyone waits for your next line, and you manage even the silences perfectly. At home, the mask is damp inside while your phone keeps lighting up.",
    "question": "How long would you wear it?",
    "twist": "",
    "deeperQuestion": "Who should first meet you without it?",
    "zh": {
      "title": "被喜歡的面具",
      "scenario": "面具讓所有人喜歡你，摘下後他們會忘記相處。\n\n晚餐桌上，每個人都笑著等你接話，連沉默也被你照顧得剛剛好。回到家，面具裡側已全是汗，你卻還聽見手機不停響。",
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
    "scenario": "Your ceiling rises with your dreams, making everyday repairs harder.\n\nInside, you can finally stretch your arms, but a drop of rain falls from above. A neighbour offers a ladder, leaving the decision to stay with you.",
    "question": "How high should it go?",
    "twist": "",
    "deeperQuestion": "Would you lower it for everyday ease?",
    "zh": {
      "title": "夢的天花板",
      "scenario": "天花板會隨夢想升高，卻讓你更難換燈泡。\n\n站在屋裡，你終於能伸直手，卻也看見高處漏下一滴雨。鄰居帶來梯子，說願意幫忙，但不會替你決定要不要住下。",
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
    "scenario": "You can save a moment from today, replaying it without new discoveries.\n\nThat day has your favourite company, perfect weather and an unburnt dinner. Before saving it, the calendar mentions a letter that might have arrived tomorrow.",
    "question": "Which moment?",
    "twist": "",
    "deeperQuestion": "Could an ordinary moment be worth saving?",
    "zh": {
      "title": "今天存檔",
      "scenario": "今天能永久存檔，日後重播不會再有新發現。\n\n那天有你想見的人、剛好的天氣，連晚餐都沒有煮焦。保存之前，日曆提醒你：明天原本可能收到一封你還不知道的信。",
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
    "scenario": "A porter carries all your pressure but chooses your direction too.\n\nAs the porter takes your load, your shoulders finally relax. At the fork, he chooses a smooth road you never intended to take.",
    "question": "Would you hire them?",
    "twist": "",
    "deeperQuestion": "Which decision would you keep for yourself?",
    "zh": {
      "title": "壓力搬運工",
      "scenario": "搬運工能替你背所有壓力，但也替你決定方向。\n\n挑夫把重擔接過去，你的肩膀第一次不用往上縮。走到岔路時，他卻轉向一條平坦、但你從沒想去的路。",
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
    "scenario": "Yesterday becomes a person and apologizes for not caring for you well.\n\nYesterday wears your old pyjamas and holds a cup of cold tea. It says it tried with some things and was simply too tired to understand others.",
    "question": "What would you say?",
    "twist": "",
    "deeperQuestion": "Would you invite them to sit and rest?",
    "zh": {
      "title": "會道歉的昨天",
      "scenario": "昨天變成人，來為沒照顧好你道歉。\n\n昨天穿著你昨晚的睡衣，手上捧著一杯已經涼了的茶。它說有些事真的盡力了，有些只是當時太累，不知道怎麼辦。",
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
    "scenario": "A compass points only to joy, never duty.\n\nThe needle points to the sea while your calendar is full of other people's requests. Some owners follow it; others keep it on their desks for a glance.",
    "question": "Would you carry it?",
    "twist": "",
    "deeperQuestion": "When would you choose not to follow?",
    "zh": {
      "title": "快樂指南針",
      "scenario": "指南針只指向快樂，不指向責任。\n\n指針朝著海邊，你的行事曆卻排滿別人交來的事。拿著指南針的人很多，有人走了，有人只是把它放在桌上看一眼。",
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
    "scenario": "Your calendar gains an empty space nobody knows about.\n\nNobody will look for you that day, and even the clock agrees to be quiet. You planned to do so much, but wake wanting a slow breakfast.",
    "question": "How long would you make it?",
    "twist": "",
    "deeperQuestion": "Would you be tempted to fill it?",
    "zh": {
      "title": "一格空白",
      "scenario": "人生行事曆能多出一格沒人知道的空白。\n\n那天沒有任何人找你，連時鐘也願意放低聲音。你原本想好要做很多事，醒來卻只想慢慢吃一頓早餐。",
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
    "scenario": "Your worries show trailers, but only one in ten comes true.\n\nThe cinema makes every trailer convincing, right down to your heartbeat. The attendant cannot label the nine films that will never actually screen.",
    "question": "Would you watch them all?",
    "twist": "",
    "deeperQuestion": "How would you choose which deserves attention?",
    "zh": {
      "title": "擔心預告片",
      "scenario": "你擔心的事會播預告片，但十部只有一部成真。\n\n電影院把每段預告都拍得非常逼真，連你的心跳聲也配好了。售票員說，九場不會上映的戲，也不能先替你標出來。",
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
    "scenario": "A mirror names one strength daily without repeating.\n\nOn day one, it praises something you considered trivial, without mentioning appearance or talent. You may write it down or ask for a different kind of answer tomorrow.",
    "question": "Could you believe it for a year?",
    "twist": "",
    "deeperQuestion": "Which strength might you argue against?",
    "zh": {
      "title": "誠實的小鏡",
      "scenario": "鏡子每天只說一個你的優點，不能重複。\n\n第一天它稱讚一件你覺得微不足道的事，沒有提外貌或能力。你可以記下來，也可以要求它明天換一種說法。",
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
    "scenario": "Your shoes weigh down with past hardship; replacing them erases your sense of distance travelled.\n\nThe new shoes make you want to run, but the old pair carries mud from a walk you shared. The assistant offers a box and a moment to say goodbye.",
    "question": "Would you change them?",
    "twist": "",
    "deeperQuestion": "Could you keep a small memento?",
    "zh": {
      "title": "記住疼痛的鞋",
      "scenario": "鞋記得你走過的辛苦，穿著很重，丟掉卻會忘記自己走多遠。\n\n新鞋輕得讓你想跑，舊鞋卻還留著某次有人陪你走路的泥。店員遞來鞋盒，問你要不要先跟它們道別。",
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
    "scenario": "You can achieve your greatest goal, but nobody will know.\n\nIt took you a long time, and you rehearsed how to tell people on the way home. At dinner, the conversation stays on the rain about to fall.",
    "question": "Would you still want it?",
    "twist": "",
    "deeperQuestion": "How would you celebrate yourself?",
    "zh": {
      "title": "不被看見的成功",
      "scenario": "你能完成最重要的目標，但沒人會知道。\n\n你花了很久才做到，回家路上甚至想好了怎樣開口。可是晚餐時，大家只聊起窗外快要下雨的天氣。",
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
    "scenario": "A train guarantees your desired life without saying how long it takes.\n\nThe ticket promises arrival, but the platform has no timetable. A fellow traveller opens a packed lunch and offers you the window seat.",
    "question": "Would you board?",
    "twist": "",
    "deeperQuestion": "Would you get off to explore along the way?",
    "zh": {
      "title": "慢慢到達",
      "scenario": "火車保證帶你去想去的生活，卻不告訴你要多久。\n\n車票上印著「一定會到」，月台卻沒有時間表。旁邊的人已經拆開便當，問你要不要一起靠窗坐。",
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
    "scenario": "A potion removes fear of failure but also your urge to prepare.\n\nYou begin signing up and speaking up, finding doors everywhere. The night before leaving, you realise you have not even opened a map.",
    "question": "How much would you drink?",
    "twist": "",
    "deeperQuestion": "What caution would you keep?",
    "zh": {
      "title": "忘記怕失敗",
      "scenario": "藥水讓你不怕失敗，但也不再事先準備。\n\n你開始敢報名、敢開口，生活突然多了很多入口。出發前那晚，你卻第一次連地圖也沒打開。",
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
    "scenario": "A light shines when you are alone, inviting people to visit.\n\nThe lamp lights just a chair and a cup of tea, enough for you to feel at ease. Someone knocks gently and offers company without conversation.",
    "question": "Would you switch it on?",
    "twist": "",
    "deeperQuestion": "Would being able to switch it off help?",
    "zh": {
      "title": "孤單的燈",
      "scenario": "你獨處時會亮起一盞燈，別人可以選擇來陪。\n\n小燈只照亮一張椅子和一杯茶，你在裡面坐得很自在。門外有人輕敲兩下，說不一定要聊天，只想陪你一會兒。",
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
    "scenario": "You can trade your greatest strength for what you most envy in others.\n\nThere is no trial, but you may watch how the other person uses the ability. As you watch, you notice them looking at what you already have.",
    "question": "Would you trade?",
    "twist": "",
    "deeperQuestion": "What might your friends miss about you?",
    "zh": {
      "title": "交換一個優點",
      "scenario": "你能把最擅長的事換成最羨慕別人的事。\n\n交換櫃檯不准試用，但讓你看看對方平日怎樣使用那份能力。你看著看著，才發現對方也常望向你原本擁有的東西。",
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
    "scenario": "You can repeat a day until satisfied, remembering every attempt alone.\n\nThe first time you fix a missed chance; the second, you find better words. By the fifth, you miss the surprises you could not plan.",
    "question": "Which day would you choose?",
    "twist": "",
    "deeperQuestion": "How would you know it is good enough?",
    "zh": {
      "title": "重複的一天",
      "scenario": "你可以重過一天直到滿意，但只有你記得重來幾次。\n\n第一次你改正了錯過的事，第二次你說出更漂亮的話。到了第五次，你開始想念那些不能預先安排的小意外。",
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
    "scenario": "Waves carry a thought away, possibly to a stranger.\n\nThe wave says the recipient will not know your name or be able to reply. Other boats carry secrets, or simply the words “Today was tiring.”",
    "question": "Which would you release?",
    "twist": "",
    "deeperQuestion": "How would you hope they treat it?",
    "zh": {
      "title": "心事海灘",
      "scenario": "海浪能沖走一個念頭，也能把它帶到陌生人那裡。\n\n海浪說對方不會知道你的名字，也不能回覆。沙灘上已有很多小紙船，有些裝著秘密，有些只寫了今天很累。",
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
    "scenario": "Your inner critic becomes a tiny judge asking for a job.\n\nThe judge lowers a thick verdict and looks exhausted. It asks whether you have another job for it if finding fault is no longer required.",
    "question": "What would you assign?",
    "twist": "",
    "deeperQuestion": "What would you keep outside their authority?",
    "zh": {
      "title": "內心小評判",
      "scenario": "腦裡的批評聲變成小評判，要你給他一份工作。\n\n法官把厚厚的判詞放下，露出多年沒睡好的樣子。牠問，如果不用再挑錯，你還有沒有別的工作願意交給牠。",
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
    "scenario": "A door admits only people who stop proving themselves.\n\nNobody inside asks about achievements; they simply make room. At the doorway, you still feel the urge to say something impressive first.",
    "question": "What would you put down to enter?",
    "twist": "",
    "deeperQuestion": "What pressure might be absent beyond it?",
    "zh": {
      "title": "不需證明的門",
      "scenario": "一扇門只讓不再證明自己的人通過。\n\n門內的人沒有問你帶了甚麼成績，只替你挪出一個位置。你站在門口，卻忍不住想先說一件能讓人留下印象的事。",
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
    "scenario": "A big dream can shrink into something doable today, losing its impressive appearance.\n\nThe smaller dream fits into a Saturday afternoon without a resignation or move. When friends ask, it no longer makes the whole table gasp.",
    "question": "Would you shrink it?",
    "twist": "",
    "deeperQuestion": "Which small version would you try first?",
    "zh": {
      "title": "夢想縮小術",
      "scenario": "你能把大夢縮成今天就能做的小事，卻看起來不再厲害。\n\n縮小後的夢可以放進星期六下午，不需要辭職或搬家。只是當朋友問起，它再也不是那個讓全桌驚呼的計劃。",
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
    "scenario": "After each choice, you hear laughter from the other path.\n\nLaughter comes through the wall, perhaps a celebration or merely a terrible joke. On your side, fresh tea waits untouched.",
    "question": "Would you want that power?",
    "twist": "",
    "deeperQuestion": "Might you overlook the sounds on your own path?",
    "zh": {
      "title": "選擇的回音",
      "scenario": "每次選擇後，你都能聽見沒選那邊的歡笑。\n\n笑聲隔著一道牆傳來，你分不清是在慶祝，還是有人講了個爛笑話。你自己這邊的茶也剛泡好，只是還沒喝。",
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
    "scenario": "A cleaner removes wishes other people gave you.\n\nThe cleaner finds familiar lists in your drawers, all in someone else's handwriting. Before discarding them, he lets you choose any wishes you truly share.",
    "question": "Would you worry about the empty space?",
    "twist": "",
    "deeperQuestion": "What would you put back yourself first?",
    "zh": {
      "title": "心願清潔工",
      "scenario": "清潔工替你掃走別人塞給你的願望。\n\n清潔工從你的抽屜裡拿出幾張很熟悉的清單，筆跡卻不是你的。丟掉前，他會讓你逐張看看，有沒有哪一項你也真心想留下。",
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
    "scenario": "Tomorrow you become a hero; today you are ordinary.\n\nToday, people ask you to move chairs, unaware of tomorrow's headlines. Knowing applause is coming, you still choose how to treat those beside you tonight.",
    "question": "What would you tell tomorrow's you?",
    "twist": "",
    "deeperQuestion": "What ordinary need should they remember?",
    "zh": {
      "title": "明天的勇者",
      "scenario": "你明天會變成勇者，今天仍是普通人。\n\n今天大家照常叫你幫忙搬椅子，沒有人知道明天的新聞。你已知道掌聲會來，卻仍要決定今晚要怎樣對待身邊的人。",
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
    "scenario": "Rest turns directly into coins.\n\nAfter a nap, a few coins really appear in your pocket. Yet when a friend asks what you did today, you search for a useful-sounding answer.",
    "question": "Would you still call yourself lazy?",
    "twist": "",
    "deeperQuestion": "Would rest still matter without coins?",
    "zh": {
      "title": "有價的休息",
      "scenario": "休息會直接變成金幣。\n\n午睡醒來，你的口袋真的多了幾枚硬幣。可是一位朋友問你今天做了甚麼，你還是先想找個聽起來有用的答案。",
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
    "scenario": "Your shadow wants to stay whether you succeed or fail.\n\nIn the spotlight, it steps back; after a failure, it sits beside you. You want to thank it, realising you have never asked where it wants to go.",
    "question": "Would you believe it?",
    "twist": "",
    "deeperQuestion": "What would you most want it beside you for?",
    "zh": {
      "title": "會陪你的影子",
      "scenario": "影子說無論你成功與否都想陪你。\n\n聚光燈下，牠替你往後站一點；失敗時，牠卻坐到你旁邊。你想謝謝牠，才發現從來沒問過牠最想去哪裡。",
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
    "scenario": "You can stop regretting choices but lose the wish to repair them.\n\nThe contract promises that no past decision will hurt again. Before signing, you remember someone still owed an apology and pause over the pen.",
    "question": "Would you accept?",
    "twist": "",
    "deeperQuestion": "Which regret would you keep?",
    "zh": {
      "title": "無法後悔",
      "scenario": "你能不再後悔任何選擇，但也不會想補救。\n\n契約寫得很清楚：往後想起任何決定，都不會再心痛。簽名前，你想到一個還欠著道歉的人，忽然不急著拿筆。",
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
    "scenario": "Every change leaves a ticket stub while others see only the destination.\n\nThe clerk smooths a crumpled ticket, recognising how difficult that journey was. The prettiest ticket may belong to a trip you no longer want.",
    "question": "Which would you show?",
    "twist": "",
    "deeperQuestion": "Does the journey count without showing it?",
    "zh": {
      "title": "成長的票根",
      "scenario": "每次改變都留下一張票根，別人只看見目的地。\n\n售票員把一張被揉皺的票攤平，說這段路你其實走得很辛苦。最漂亮的票，反而可能來自一趟你現在不再嚮往的旅程。",
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
    "scenario": "Yesterday's you asks for money to avoid a detour.\n\nYesterday promises a shortcut and brings a tidy map. Looking at the crossed-out detour, you remember someone important you met there.",
    "question": "Would you lend it?",
    "twist": "",
    "deeperQuestion": "What did that detour teach you?",
    "zh": {
      "title": "給昨天借錢",
      "scenario": "昨天的你來借一筆錢，說能少走一段彎路。\n\n昨天保證這次會走捷徑，還畫了一張整齊的路線圖。你看著那條被劃掉的彎路，記得有個重要的人是在那裡遇見的。",
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
    "scenario": "You can perfect half your life, leaving the other half unchanged.\n\nThe sample days are beautiful, with no arguments or missed chances. At the end, you notice there are no days of making up or beginning again either.",
    "question": "Which half?",
    "twist": "",
    "deeperQuestion": "Which imperfection would you leave?",
    "zh": {
      "title": "完美的一半",
      "scenario": "你能把人生一半變得完美，另一半維持原樣。\n\n契約送來的樣本日子很美，沒有爭吵，也沒有錯過任何機會。你翻到最後，發現那些慢慢和好、重新開始的日子也不在裡面。",
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
    "scenario": "Thinking about one topic drains an hourglass; when empty, you forget it.\n\nAs the first grain falls, you still want to consider every possibility. The hourglass does not hurry you; a little hill simply grows below.",
    "question": "Would you ration your thoughts?",
    "twist": "",
    "deeperQuestion": "What would you least want to use up?",
    "zh": {
      "title": "心事沙漏",
      "scenario": "每天想同一件事會消耗沙漏，沙完就忘記它。\n\n第一粒沙落下時，你還想把每個可能性都想清楚。沙漏沒有催你，只在底部慢慢堆起一小座山。",
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
    "scenario": "A tent blocks every demand, but long stays make you forget the exit.\n\nInside are warm blankets and endless snacks, with nobody asking what comes next. The signs outside fade daily, and tomorrow may be when you want to leave.",
    "question": "How long would you stay?",
    "twist": "",
    "deeperQuestion": "Whom would you ask to remind you to leave?",
    "zh": {
      "title": "隨身避風港",
      "scenario": "小帳篷能隔絕一切要求，但待久了會忘記怎樣出去。\n\n帳篷裡有暖毯和吃不完的點心，誰也不會問你下一步。外面的路標每天淡一點，你說不定明天才想找出口。",
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
    "scenario": "You become the only audience for your life performance.\n\nWhen the lights rise, one seat holds your attentive self. There are no scores or recorded applause, only a walk home together afterwards.",
    "question": "Would you keep the same show?",
    "twist": "",
    "deeperQuestion": "Which scene would you remove first?",
    "zh": {
      "title": "自己的觀眾",
      "scenario": "你的人生表演只剩自己一位觀眾。\n\n燈亮起時，台下只有一個座位，上面坐著認真看著你的自己。沒有評分，也沒有掌聲錄音，演完後只是一起走回家。",
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
    "scenario": "People borrow your light for warmth, dimming you each time.\n\nAfter they carry away your light, only a glow remains beside your bed. There is no return date, but their road really is dark.",
    "question": "When would you stop lending?",
    "twist": "",
    "deeperQuestion": "Who could help you shine again?",
    "zh": {
      "title": "被借走的光",
      "scenario": "別人能借你的光取暖，但每次你會暗一點。\n\n對方提著你的光離開後，你的房間只剩床邊一點亮。借條沒有寫日期，但對方真的在一段很黑的路上。",
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
    "scenario": "Each mistake adds a safe route to your map.\n\nEach bend bears an old mistake and a new little lamp. Someone asks directions at the very point you most wish you could erase.",
    "question": "Would that make you try more?",
    "twist": "",
    "deeperQuestion": "What cost would you still avoid?",
    "zh": {
      "title": "錯誤指南",
      "scenario": "每次犯錯，地圖就多一條安全路。\n\n地圖上每個彎都標著你曾經犯過的錯，旁邊多了一個小小路燈。有人拿著同一張地圖來問路，正好走到你最想抹掉的位置。",
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
    "scenario": "A fairy gives you a day that ends when you do anything useful.\n\nThe town welcomes a day of idleness but rings the departure bell when you make a to-do list. By the river, you already want to turn resting into a lesson.",
    "question": "How would you spend it?",
    "twist": "",
    "deeperQuestion": "Would you use it up quickly?",
    "zh": {
      "title": "一日不用有用",
      "scenario": "精靈送你一天，做任何有用的事就會結束。\n\n小鎮允許你整天發呆，卻會在你開始整理待辦清單時敲鐘送客。你已經坐在河邊，忍不住想把這次休息變成一篇心得。",
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
    "scenario": "Every wish has a temperature, some too hot to hold.\n\nOne wish stays warm in your hands; another heats up only with praise. With no audience today, you can take time to feel the difference.",
    "question": "Would you grip the hottest one?",
    "twist": "",
    "deeperQuestion": "Would putting it down briefly mean giving up?",
    "zh": {
      "title": "心願溫度",
      "scenario": "每個願望有溫度，有些熱得燙手。\n\n捧在手裡，有個願望一直暖暖的，另一個只在有人稱讚時才發熱。今天沒有觀眾，你可以慢慢摸清它們的溫度。",
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
    "scenario": "You can send a letter that will never be misunderstood, but only to yourself.\n\nThe paper will not polish your words or read hesitation as guilt. Free from guessing the reader's reaction, you hardly know where to begin.",
    "question": "What would you write?",
    "twist": "",
    "deeperQuestion": "Which sentence do you most need to believe?",
    "zh": {
      "title": "被誤解的信",
      "scenario": "你能寄一封永不被誤解的信，但只能寄給自己。\n\n信紙不會替你修飾，也不會把停頓當成心虛。你第一次不用猜讀信的人會怎樣想，反而不知道該從哪句開始。",
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
    "scenario": "A badge earns patience for mistakes but removes others' admiration.\n\nPeople wait patiently and answer your simplest questions. But when introducing you, the host no longer reads the titles you are used to hearing.",
    "question": "Would you wear it?",
    "twist": "",
    "deeperQuestion": "Where would you most want to wear it?",
    "zh": {
      "title": "新手徽章",
      "scenario": "戴上徽章，大家會容許你犯錯，但不會覺得你厲害。\n\n大家願意等你慢慢試，也會認真回答最基本的問題。只是介紹到你時，主持人不再念出那串你習慣聽到的頭銜。",
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
    "scenario": "New eyes see things themselves but never rankings.\n\nYou still see other people's work and lives, without automatically ranking them. After browsing friends' photos, one uncomplicated feeling remains.",
    "question": "Would you swap?",
    "twist": "",
    "deeperQuestion": "Would choosing become easier or harder?",
    "zh": {
      "title": "不再比較的眼睛",
      "scenario": "新眼睛看不見排名，只看見事物本身。\n\n你仍看得見別人的作品和生活，只是心裡不會自動排出高低。滑完朋友的照片後，第一次只剩一個很單純的感覺。",
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
    "scenario": "Your island can keep only one “should” each day.\n\nThe captain saves you a luggage space, but “should” is heavy, so only one is allowed. On the first morning, nobody tells you the proper time to rise.",
    "question": "Which would you keep today?",
    "twist": "",
    "deeperQuestion": "Is it yours or someone else's?",
    "zh": {
      "title": "選擇的小島",
      "scenario": "你的小島每天只能留一個「應該」。\n\n船長替你保留一個行李位，卻說「應該」太重，只能帶一句。島上的第一個早晨，沒有人提醒你幾點起床才算對。",
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
    "scenario": "Praise fades after a day while criticism stays.\n\nToday's praise fades like cut flowers overnight, while criticism is bound into books. Before bed, you have ten minutes to tend one of them differently.",
    "question": "How would you preserve kind words?",
    "twist": "",
    "deeperQuestion": "Would you trust your written version?",
    "zh": {
      "title": "會過期的讚美",
      "scenario": "讚美一天後就從記憶消失，批評卻能留下。\n\n今天收到的讚美像鮮花，過夜就會褪色；批評卻被裝訂成冊。你可以在睡前花十分鐘照顧其中一邊，讓它留下不同的樣子。",
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
    "scenario": "Your dream needs regular rest to keep glowing.\n\nThe repairer says the dream is not broken; it has simply run too long. With the lights off, you face an evening with no progress to report.",
    "question": "How many days off would you give it?",
    "twist": "",
    "deeperQuestion": "Would you still know who you are while it rests?",
    "zh": {
      "title": "夢想保養日",
      "scenario": "夢想要定期休息才能繼續發光。\n\n維修師說，夢想沒有壞，只是太久沒有停機。你看著關上的燈，第一次要在沒有進度可報的晚上安排自己。",
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
    "scenario": "A book answers every life question but ends your curiosity.\n\nThe book knows every ending, including your next question. As you turn a page, an unfamiliar bird calls outside.",
    "question": "Would you open it?",
    "twist": "",
    "deeperQuestion": "Would you take just one page?",
    "zh": {
      "title": "所有答案的書",
      "scenario": "書知道你人生所有答案，但讀完就不再好奇。\n\n書知道每個故事的結局，連你下一句想問甚麼也已印好。你翻到某頁時，窗外剛好傳來一聲從未聽過的鳥叫。",
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
    "scenario": "You can lower outside noise, making your thoughts louder.\n\nYou expect relief as other people's comments grow quieter. In the silence, you hear a sentence you have been repeating to yourself for years.",
    "question": "Would you turn it down?",
    "twist": "",
    "deeperQuestion": "Which voice would you want to hear clearly first?",
    "zh": {
      "title": "生活音量",
      "scenario": "你能調低外界聲音，自己的念頭卻會變大。\n\n別人的評語變小後，你原本以為會立即輕鬆。房間安靜下來，卻聽見自己有一句話已經重複了很久。",
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
    "scenario": "A luck fairy will stay if you never claim personal credit.\n\nThe result exceeds every expectation, and people ask for your secret. You know a lucky gust simply carried you in the right direction.",
    "question": "Would you agree?",
    "twist": "",
    "deeperQuestion": "Would success still feel satisfying?",
    "zh": {
      "title": "幸運的代價",
      "scenario": "好運精靈願意常駐，但每件事都不能說是靠自己。\n\n結果漂亮得超出預期，大家都來問你有甚麼秘訣。你知道那天真的只是剛好被風吹向對的地方。",
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
    "scenario": "Your work could move many people but must remain anonymous.\n\nIn a café, a stranger says the work helped them through a terrible night. They sit beside you, but you promised never to identify its creator.",
    "question": "Would you create it?",
    "twist": "",
    "deeperQuestion": "What private mark would you leave?",
    "zh": {
      "title": "不帶名字的作品",
      "scenario": "你的作品能感動很多人，但永遠不能署名。\n\n你在咖啡店聽見陌生人談它，說它陪自己走過很難的一晚。對方就在隔壁桌，你卻答應過不能說出作者是誰。",
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
    "scenario": "Courage is a bird that grows only when allowed to fly away.\n\nIt first flies out one morning and returns at dusk with unfamiliar pollen. You love its new range, while noticing it no longer always waits for your hand.",
    "question": "Would you open the cage?",
    "twist": "",
    "deeperQuestion": "Would you wait if it did not return soon?",
    "zh": {
      "title": "長大的勇氣",
      "scenario": "勇氣是一隻小鳥，只有你准許它飛走才會長大。\n\n牠第一次飛出窗，傍晚才回來，翅膀帶著陌生花粉。你高興牠飛得遠，也發現牠不再每次都等你伸手。",
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
    "scenario": "You spend a day with your ideal self, who also envies you.\n\nTheir life looks complete, yet they keep asking about your ordinary days. The present you rush through is somewhere they wish they could visit.",
    "question": "What might they envy?",
    "twist": "",
    "deeperQuestion": "Do you value that thing now?",
    "zh": {
      "title": "一天兩個自己",
      "scenario": "你能跟理想中的自己住一天，他卻也羨慕你。\n\n對方的生活看起來一切到位，卻一直問你某段平凡日子的細節。原來你急著跳過的現在，是另一個自己很想回來坐一會兒的地方。",
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
    "scenario": "An old-memory room gains an exit; leaving keeps the memory but ends your stay.\n\nEverything stays in place, including the coat you cannot discard. The handle no longer burns; leaving need not mean the past did not matter.",
    "question": "Would you walk out?",
    "twist": "",
    "deeperQuestion": "What small thing would you take?",
    "zh": {
      "title": "過去的出口",
      "scenario": "舊回憶房間多了一扇出口，出去不會忘記，只是不再住在裡面。\n\n房間裡的東西都會留在原位，包括那件你捨不得丟的外套。門把已經不燙了，你可以出去，卻不必說這段過去不重要。",
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
    "scenario": "Your free time becomes flowers to keep or give away.\n\nThe florist wraps free hours into a bouquet with an unnamed card. After planning a stem for everyone who needs you, only one remains.",
    "question": "How would you divide them?",
    "twist": "",
    "deeperQuestion": "Would you keep your favourite flower?",
    "zh": {
      "title": "時間花束",
      "scenario": "你剩餘的空閒時間變成花束，只能送人或自己留。\n\n花店把空閒時間包成一束，附上一張沒有收件人名字的卡。你原本想分給每個需要你的人，最後發現只剩一枝。",
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
    "scenario": "People on an island do not fully understand you but treat you kindly.\n\nThe islanders remember your tastes and bring in your washing before rain. They listen carefully to your deepest thoughts, though they never quite understand.",
    "question": "Would you stay?",
    "twist": "",
    "deeperQuestion": "Would you keep trying to explain yourself?",
    "zh": {
      "title": "不必被懂",
      "scenario": "小島上的人不完全理解你，卻一直善待你。\n\n島民記得你的口味，也會在下雨前替你收衣服。只是你講起某個最深的想法時，他們會認真聽，卻始終不太明白。",
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
    "scenario": "Every minute of worrying earns a coin.\n\nThe pay is generous, but the statement lists every hour awake at night. The boss offers fewer shifts with a smaller wage.",
    "question": "Would you worry more?",
    "twist": "",
    "deeperQuestion": "Would you set a time to stop working?",
    "zh": {
      "title": "擔心的薪水",
      "scenario": "每擔心一分鐘就賺一元。\n\n月底收到的薪水很可觀，帳單上卻列出每次夜裡醒來的時數。老闆說可以減班，只是收入也會跟著少一點。",
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
    "scenario": "Visitors pick flowers freely from your garden, leaving few for you.\n\nThe flowers flourish and bees visit daily, but no human ever comes. Dust gathers in the cups you set beside the gate.",
    "question": "Would you add a gate?",
    "twist": "",
    "deeperQuestion": "What would the sign on it say?",
    "zh": {
      "title": "善良的界線",
      "scenario": "你的花園免費讓人採花，但快沒花留給自己。\n\n花開得很好，蜜蜂每天都來，只有人類訪客一次也沒有。門邊放著你準備好的茶杯，杯底已積了一點灰。",
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
    "scenario": "At the summit you discover a higher mountain behind it.\n\nThe view is truly beautiful, and you have barely sat down. A new sign lights in the distance as people around you pack their bags.",
    "question": "Would you climb on or sit?",
    "twist": "",
    "deeperQuestion": "How long could you sit comfortably?",
    "zh": {
      "title": "不是終點的山頂",
      "scenario": "你爬到山頂，卻發現後面還有一座更高的。\n\n山頂的風景真的很美，你甚至還沒來得及坐下。遠處的新路標已亮起來，周圍的人開始收拾背包。",
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
    "scenario": "You can sail through sadness or bypass it on a bridge without a view.\n\nThe bridge is quick; the boat is slow, with possible stops for tears. You can see the far bank, while the boat holds an extra blanket.",
    "question": "Which route?",
    "twist": "",
    "deeperQuestion": "How much rowing energy do you have today?",
    "zh": {
      "title": "心情小船",
      "scenario": "你可坐船穿過難過，或走橋繞開，但橋上看不到風景。\n\n橋很快，船很慢；船夫說沿途可能會停下來哭一會兒。橋的另一端看得到岸，船上卻多放了一條暖毯。",
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
    "scenario": "You receive others' expectations of you and may return three.\n\nThe returns clerk asks only that you check the name on each label. One expectation has stayed so long that you mistook it for your own wish.",
    "question": "Which would you return?",
    "twist": "",
    "deeperQuestion": "Which expectation do you genuinely share?",
    "zh": {
      "title": "別人的願望清單",
      "scenario": "你收到一份大家對你的期待，能退回三項。\n\n退貨員不問理由，只請你確認每張單上的名字。當中有一項已經陪你很久，久到你以為本來就是自己的願望。",
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
    "scenario": "An alarm tells you when you have done enough rather than when to wake.\n\nThe bell is gentle and does not stop your work; it only says today is enough. It rings just as you approach a task that might earn praise.",
    "question": "Would you trust it?",
    "twist": "",
    "deeperQuestion": "Would you secretly set it later?",
    "zh": {
      "title": "會停下的鬧鐘",
      "scenario": "鬧鐘不叫你起床，只提醒你今天已經做夠。\n\n鈴聲很小，不會阻止你繼續工作，只提醒今天已經夠了。你聽見時，手上剛好還有一件做完便可能得到稱讚的事。",
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
    "scenario": "Magic lets you see yourself as a stranger for a day.\n\nYou see this person thank someone for a small kindness and later look exhausted. Without a résumé, you get to know them through the day alone.",
    "question": "Which side would you introduce first?",
    "twist": "",
    "deeperQuestion": "Would you treat yourself more kindly than usual?",
    "zh": {
      "title": "重新喜歡自己",
      "scenario": "魔法讓你用陌生人的眼光看自己一天。\n\n你在路邊看見那個人為一件小事道謝，也看見對方疲倦時的樣子。沒有履歷作介紹，你只能從這一天慢慢認識他。",
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
    "scenario": "A seed promises to sprout without saying how many years it needs.\n\nIt grows a little daily, with flowering guaranteed but no year given. On moving day, it is still a small pot of leaves you must carry to the car.",
    "question": "Would you keep watering?",
    "twist": "",
    "deeperQuestion": "Would you plant other things meanwhile?",
    "zh": {
      "title": "等待發芽",
      "scenario": "種子保證會發芽，卻不說要等幾年。\n\n種子每天只長一點，賣種的人保證會開花，卻不能說是哪一年。搬家那天，它仍只是一盆需要你抱上車的小綠葉。",
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
    "scenario": "An artist paints your life and offers a blank space.\n\nThe painter says the blank space holds days you have not committed to yet. Some visitors call it a pity; others find it the best part.",
    "question": "Where would you leave it?",
    "twist": "",
    "deeperQuestion": "Could you accept never filling it?",
    "zh": {
      "title": "生命的留白",
      "scenario": "畫家替你畫人生，問你要不要留一塊空白。\n\n畫師說，空白不是漏畫，而是你還沒答應要怎樣過的日子。客人走近時，有人覺得可惜，有人說那裡最好看。",
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
    "scenario": "Failure becomes a suitcase too heavy to carry, holding useful tools.\n\nThe suitcase slows you down, but each tool has helped after a fall. With one carry-on allowed, you must open it and repack.",
    "question": "What would you take out?",
    "twist": "",
    "deeperQuestion": "What could you leave behind?",
    "zh": {
      "title": "裝得下的失敗",
      "scenario": "失敗變成行李箱，太大就帶不動，但裡面有你需要的工具。\n\n箱子重得讓你走不快，每件工具卻都曾在某次跌倒後派上用場。車站只准一件隨身行李，你得打開來重新整理。",
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
    "scenario": "A star took a century to shine and never felt late.\n\nThe observatory says you probably will not see the audience's response when the light arrives. Someone offers to trade it for a lamp admired tonight.",
    "question": "What would you ask it?",
    "twist": "",
    "deeperQuestion": "Where would you keep its reply as a reminder?",
    "zh": {
      "title": "不急的星星",
      "scenario": "一顆星說它遲了一百年才發光，卻從不覺得晚。\n\n天文台說，光到達時你大概看不到觀眾的反應。今晚仍有人問，要不要先把它換成一盞立刻有人稱讚的小燈。",
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
    "scenario": "A magnifier reveals tiny daily progress invisible to the eye.\n\nThe lens reveals one less act of self-blame and a small refusal. Put it down, and the world outside is still celebrating grand achievements.",
    "question": "Would you look daily?",
    "twist": "",
    "deeperQuestion": "Could you allow a day without progress?",
    "zh": {
      "title": "看見小小進步",
      "scenario": "放大鏡能看見每天極小的進步，肉眼仍看不出。\n\n鏡片照出你今天少責怪自己一次，也讓一次小小拒絕變得清晰。放下鏡片後，外面的世界還在慶祝很大的成就。",
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
    "scenario": "You can try a choice for three months then return, leaving the results behind.\n\nFor three months, you may turn back and have your path erased. You cannot preview what staying would bring before choosing.",
    "question": "What would you try?",
    "twist": "",
    "deeperQuestion": "Would knowing you tried already have value?",
    "zh": {
      "title": "可逆的選擇",
      "scenario": "你能試一個選擇三個月後退回原點，但不能帶走成果。\n\n三個月內你可以回頭，走過的路也會替你抹平。唯一看不到的是留下來的結果，你不能先偷看結局再決定。",
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
    "scenario": "Your neglected self rings your inner doorbell.\n\nThe visitor brings a snack you used to love, without blaming you for the silence. They ask only for a chair until you are done being busy.",
    "question": "How would you welcome them?",
    "twist": "",
    "deeperQuestion": "Would you ask questions or offer rest first?",
    "zh": {
      "title": "自己的門鈴",
      "scenario": "有人按響內心門鈴，是很久沒被照顧的你。\n\n門外的人帶著你以前喜歡的點心，沒有責怪你很久沒聯絡。對方只問，今天能不能留一張椅子，坐到你忙完。",
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
    "scenario": "You get your happiest day without photos or telling anyone.\n\nThe day is so beautiful that you keep reaching for a phone and finding an empty pocket. At home, you must describe it slowly when a friend asks.",
    "question": "How would you spend it?",
    "twist": "",
    "deeperQuestion": "Would not sharing make it less joyful?",
    "zh": {
      "title": "幸福不留證據",
      "scenario": "你能過最幸福的一天，卻不能拍照或告訴任何人。\n\n那天美得讓你幾次伸手找手機，手指卻只碰到空口袋。晚上回家，朋友問你去了哪裡，你只能慢慢用話說出來。",
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
    "scenario": "A bedtime fairy grants one very small wish.\n\nThe sleepy fairy can manage only one tiny thing tonight. Her list offers a good dream, an uninterrupted breakfast or words arriving at the right moment.",
    "question": "What should be different tomorrow morning?",
    "twist": "",
    "deeperQuestion": "Which part could you do for yourself tonight?",
    "zh": {
      "title": "最後的小願望",
      "scenario": "睡前精靈只肯實現一個很小的願望。\n\n仙女打著呵欠，說今晚只辦得到很小的一件事。她的清單上有好夢、一次不被打斷的早餐，還有一句剛好需要的話。",
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
    "scenario": "Your life narrator can be a strict coach, kind friend or curious child.\n\nAll three saw the same day: the coach recalls progress, the friend your effort, the child the clouds. Only one can tell you tonight's story.",
    "question": "Whom would you hire?",
    "twist": "",
    "deeperQuestion": "Would you keep that narrator after a failure?",
    "zh": {
      "title": "人生的旁白",
      "scenario": "人生旁白可以換成嚴格教練、溫柔朋友或好奇小孩。\n\n三位旁白都看過同一天：教練記住進步，朋友記住辛苦，小孩記住窗外的雲。今晚的故事只能讓其中一位說給你聽。",
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
    "scenario": "The moon asks you to cover a shift by simply being there, without shining.\n\nA cloud makes you a soft place while people below walk home. Nobody looks up to praise you, but the tide still arrives gently on time.",
    "question": "Would that feel like enough?",
    "twist": "",
    "deeperQuestion": "Could you offer tomorrow's self the same kindness?",
    "zh": {
      "title": "月亮的休假",
      "scenario": "月亮邀你代班一晚，不用發光，只要安靜待著。\n\n雲替你準備了一個柔軟的位置，地上的人照常散步、回家。整晚沒有人抬頭稱讚你，但潮水仍按時輕輕靠岸。",
      "question": "你會覺得自己做得夠嗎？",
      "twist": "",
      "deeperQuestion": "你能把同一份寬容留給明天的自己嗎？"
    }
  }
];
