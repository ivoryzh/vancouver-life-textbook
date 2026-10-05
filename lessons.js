/*
  温哥华生活课本 · 课程数据
  ------------------------------------------------------------
  结构：章（chapter）→ 课（scene）→ 句子（line）

  每一句的字段：
    who    "them" = 别人说的话（重点是听懂）
           "me"   = 你可以说的话
    role   说话人是谁（店员、邻居……），who 为 "me" 时可以不写
    en     英文原句（会被朗读，并逐词高亮）
    zh     中文意思
    hear   可选。母语者实际说出来“听起来像”什么（连读、吞音）
    note   可选。小贴士：这句话什么时候听到、怎么理解
    say    可选。可以怎么回答 / 还能怎么说：[["英文", "中文"], ...]
    words  可选。生词：[["英文", "中文"], ...]
           say 和 words 的按钮用手机或电脑自带的声音朗读，不生成 AI 语音。

  每一课还可以写 listen: true，表示这一课是“只听不说”的两人对话（进阶）。

  加新课：照着下面的格式复制一段，改内容就行。id 只用英文字母、数字和短横线。
  改完以后运行 python tools/make_audio.py，会给新句子生成 AI 语音
  （每个角色用哪个声音，在 tools/make_audio.py 顶部的 VOICES 里设置）。
  还没生成语音的句子，会先用手机或电脑自带的朗读顶上。
*/
window.LESSONS = [
  {
    id: "help",
    title: "听不懂时怎么办",
    en: "When you don't understand",
    scenes: [
      {
        id: "say-again",
        title: "请对方再说一遍",
        en: "Could you say that again?",
        intro: "刚开始听不懂很正常，不用慌。这一课的几句话能让对方再说一遍、说慢一点。加拿大人一般都很有耐心。",
        lines: [
          { who: "them", role: "店员", en: "Hi there! Do you have a membership with us?", zh: "你好！你是我们店的会员吗？", hear: "Hi there! D'you have a membership with us?", note: "with us 是“在我们这儿”的意思。不用每个词都听懂，抓住 membership（会员）就够了。" },
          { who: "me", en: "Sorry, could you say that again?", zh: "不好意思，能再说一遍吗？", note: "最有用的一句话。着急的时候，只说一个词也可以。", say: [["Sorry?", "什么？（语调往上扬）"], ["Pardon?", "请再说一遍？"]] },
          { who: "them", role: "店员", en: "Sure! Are you a member here?", zh: "好的！你是这里的会员吗？" },
          { who: "me", en: "Could you speak a little slower, please?", zh: "你能说慢一点吗？", note: "说完这句，对方通常会放慢速度，换更简单的说法。", words: [["slower", "慢一点"], ["a little", "一点点"]] },
          { who: "them", role: "店员", en: "Of course. Are you a member?", zh: "当然。你是会员吗？" },
          { who: "me", en: "Oh, no, I'm not. Thank you.", zh: "哦，不是。谢谢。" },
          { who: "them", role: "店员", en: "No worries!", zh: "没关系！", note: "No worries 就是“没事、没关系、不客气”，在加拿大到处都能听到。" }
        ]
      },
      {
        id: "ask-help",
        title: "请人帮忙",
        en: "Asking for help",
        intro: "需要帮忙时，先说 Excuse me 引起注意。直接告诉对方你的英语不太好，他们会说得更慢、更简单。温哥华有很多会说中文的人，也可以问一问。",
        lines: [
          { who: "me", en: "Excuse me, could you help me?", zh: "打扰一下，你能帮我一下吗？", note: "Excuse me 用来引起别人注意，相当于“劳驾”、“打扰一下”。" },
          { who: "them", role: "店员", en: "Sure, what can I do for you?", zh: "当然，有什么可以帮你的？", hear: "Sure, what c'n I do for ya?" },
          { who: "me", en: "Sorry, my English is not very good.", zh: "不好意思，我的英语不太好。", note: "说这句一点也不丢人，对方听了会更耐心。" },
          { who: "them", role: "店员", en: "That's okay. Take your time.", zh: "没关系，慢慢来。", note: "Take your time 就是“不着急，慢慢来”。听到这句可以放松。" },
          { who: "me", en: "Could you write it down for me?", zh: "你能帮我写下来吗？", note: "听不清地址、名字、数字、时间的时候特别有用。写下来的英文你们是能看懂的。" },
          { who: "me", en: "Does anyone here speak Mandarin?", zh: "这里有人会说普通话吗？", note: "温哥华很多店都有会说中文的员工。", say: [["Do you speak Mandarin?", "你会说普通话吗？"], ["Does anyone speak Cantonese?", "有人会说粤语吗？"]] },
          { who: "them", role: "店员", en: "Let me check for you. One moment.", zh: "我帮你问问，稍等一下。", hear: "Lemme check for ya. One moment.", note: "One moment 和 Just a sec 都是“稍等”。" }
        ]
      }
    ]
  },
  {
    id: "neighbours",
    title: "邻居和电梯",
    en: "Neighbours & the elevator",
    scenes: [
      {
        id: "neighbour",
        title: "和邻居打招呼",
        en: "Saying hi to a neighbour",
        intro: "在加拿大，邻居见面、甚至路上遇到陌生人，都会笑着打个招呼。不需要长聊，简单回一句就很有礼貌。",
        lines: [
          { who: "them", role: "邻居", en: "Morning! How are you doing?", zh: "早上好！最近怎么样？", hear: "Mornin'! How ya doin'?", note: "这是打招呼，不是真的问你身体好不好，简单回答就行。", say: [["Good, thanks. And you?", "挺好的，谢谢。你呢？"], ["Not bad. How about you?", "还不错。你呢？"]] },
          { who: "me", en: "Good, thanks. How about you?", zh: "挺好的，谢谢。你呢？" },
          { who: "them", role: "邻居", en: "Pretty good. Beautiful day, isn't it?", zh: "挺好的。今天天气真好，是吧？", note: "聊天气是最常见的闲聊。句尾的 isn't it 是“是吧”的意思，回答 Yes 就行。" },
          { who: "me", en: "Yes, it's really nice today.", zh: "是啊，今天天气真好。", say: [["Yes, it is!", "是啊！"]] },
          { who: "them", role: "邻居", en: "Are you new to the building?", zh: "你是刚搬进这栋楼的吗？", hear: "You new to the building?", note: "building 在这里指你们住的公寓楼。" },
          { who: "me", en: "Yes, we just moved in. We live on the fifth floor.", zh: "是的，我们刚搬来，住在五楼。", words: [["moved in", "搬进来"], ["floor", "楼层"]] },
          { who: "them", role: "邻居", en: "Oh, welcome! I'm Linda. Nice to meet you.", zh: "欢迎欢迎！我叫琳达，很高兴认识你。" },
          { who: "me", en: "Nice to meet you too. I'm Zhang.", zh: "我也很高兴认识你，我姓张。", note: "加拿大人习惯互相叫名字。说自己的姓也完全可以，对方会记住的。", say: [["Nice to meet you too. I'm Geng.", "我也很高兴认识你，我姓耿。"]] },
          { who: "them", role: "邻居", en: "Have a good one!", zh: "祝你今天愉快！", note: "Have a good one 就是 Have a good day。告别时常听到，回答 You too 就行。", say: [["You too!", "你也是！"]] }
        ]
      },
      {
        id: "elevator",
        title: "在电梯里",
        en: "In the elevator",
        intro: "电梯里的对话都很短：问上不上楼、说去几楼、聊两句天气、借过。加拿大公寓的一楼大堂通常标 L（Lobby）或 G，地下停车场标 P1、P2。",
        lines: [
          { who: "them", role: "邻居", en: "Going up?", zh: "上楼吗？", note: "Going up 问你是不是上楼。下楼是 Going down。" },
          { who: "me", en: "Yes. After you.", zh: "是的，您先请。", note: "After you 就是“您先请”。让别人先进电梯、先进门，都这么说。" },
          { who: "them", role: "邻居", en: "Oh, thank you!", zh: "哦，谢谢！" },
          { who: "them", role: "邻居", en: "Which floor?", zh: "去几楼？", note: "站在按钮旁边的人会帮大家按楼层。", say: [["Seven, please.", "七楼，谢谢。"], ["The lobby, please.", "去大堂，谢谢。"], ["P1, please.", "地下一层，谢谢。"]] },
          { who: "me", en: "Seven, please.", zh: "七楼，谢谢。" },
          { who: "them", role: "邻居", en: "There you go.", zh: "好了（帮你按好了）。", note: "There you go 是“好了 / 给你”。帮你做完一件小事时常这么说。" },
          { who: "them", role: "邻居", en: "Crazy rain out there today, huh?", zh: "今天外面雨好大啊，是吧？", hear: "Crazy rain out there t'day, huh?", note: "电梯里几秒钟的闲聊，最常见的就是天气。句尾的 huh 就是“是吧”。" },
          { who: "me", en: "Yes! I forgot my umbrella.", zh: "是啊！我忘带伞了。", words: [["umbrella", "雨伞"]] },
          { who: "me", en: "Excuse me, this is my floor.", zh: "不好意思，我到了。", note: "要出电梯、前面有人挡着时说。只说 Excuse me 也可以。" },
          { who: "them", role: "邻居", en: "Oh, sorry! Go ahead.", zh: "哦，抱歉！你先请。", note: "Go ahead 是“你先请 / 请便”。" },
          { who: "me", en: "Thanks. Have a nice day!", zh: "谢谢，祝你愉快！" }
        ]
      },
      {
        id: "after-you",
        title: "让别人先走",
        en: "After you",
        intro: "加拿大人很讲究礼让：进门时帮后面的人扶着门，进电梯、上车时让别人先走。喜欢让别人先走的话，这一课的几句话天天都用得上。",
        lines: [
          { who: "me", en: "After you.", zh: "您先请。", note: "最常用的一句。手往前一伸，说 After you 就好。", say: [["Go ahead.", "你先走吧。"], ["Please, go ahead.", "请先走。"]] },
          { who: "them", role: "邻居", en: "Oh, thank you! That's very kind of you.", zh: "哦，谢谢！你真客气。", note: "That's very kind of you 是“你真好、真客气”。" },
          { who: "me", en: "No problem.", zh: "不客气。" },
          { who: "them", role: "路人", en: "No, no, after you, please.", zh: "不不，您先请。", note: "有时对方也坚持让你先走。不用推来推去，笑着说 Thank you 然后先走就好，这在加拿大很正常。" },
          { who: "me", en: "Oh, okay. Thank you!", zh: "哦，好的，谢谢！" },
          { who: "me", en: "I've got the door. Go ahead.", zh: "我帮你扶着门，你先过。", note: "帮别人扶门时说。I've got it 是“我来、交给我”。", words: [["get the door", "扶门、开门"]] },
          { who: "them", role: "顾客", en: "Thanks so much!", zh: "太谢谢了！" },
          { who: "me", en: "You're welcome. Have a good day!", zh: "不客气，祝你今天愉快！" },
          { who: "them", role: "路人", en: "Here, let me get that for you.", zh: "来，我帮你。", note: "别人帮你开门、拿东西时会这么说。" },
          { who: "me", en: "Thank you, I appreciate it.", zh: "谢谢，非常感谢。", note: "I appreciate it 比 Thank you 更郑重一点。" }
        ]
      }
    ]
  },
  {
    id: "small-talk",
    title: "加拿大式闲聊",
    en: "Canadian small talk",
    scenes: [
      {
        id: "weather",
        title: "下雨天聊天气",
        en: "On a rainy day",
        intro: "加拿大人最爱聊天气，在电梯里、等车时、排队时都会说两句。温哥华秋冬经常下雨，所以“又下雨了”是最常见的开场白。不用说很多，附和一下就很自然。",
        lines: [
          { who: "them", role: "邻居", en: "Wow, it's really coming down out there.", zh: "哇，外面雨下得好大。", hear: "Wow, it's really comin' down out there.", note: "coming down 在这里指雨下得很大。听到 coming down 或 pouring，就是在说下大雨。", words: [["pouring", "下大雨"], ["drizzle", "毛毛雨"]] },
          { who: "me", en: "Yes, it's raining a lot today.", zh: "是啊，今天雨真大。" },
          { who: "them", role: "邻居", en: "Typical Vancouver, right?", zh: "典型的温哥华天气，对吧？", note: "温哥华人常拿下雨开玩笑。句尾的 right 是“对吧”，笑着说 Yes 就好。" },
          { who: "me", en: "Yes! Do you think it will rain all week?", zh: "是啊！你觉得会下一整个星期吗？" },
          { who: "them", role: "邻居", en: "I heard it's supposed to clear up on the weekend.", zh: "听说周末会放晴。", hear: "I heard it's s'posed to clear up on the weekend.", note: "supposed to 是“据说会、应该会”，clear up 是天放晴。", words: [["supposed to", "据说会、应该会"], ["clear up", "放晴"]] },
          { who: "me", en: "That's good. I hope so.", zh: "那太好了，希望如此。" },
          { who: "them", role: "邻居", en: "Stay dry!", zh: "别淋湿了！", note: "下雨天告别时常说 Stay dry，天冷时说 Stay warm。回答 You too 就好。", say: [["You too!", "你也是！"]] }
        ]
      },
      {
        id: "sunny",
        title: "晴天夸天气",
        en: "When the sun comes out",
        intro: "温哥华下雨的日子多，所以一出太阳，大家都特别开心，见面第一句就是夸天气。gorgeous、beautiful、lovely 都是“天气真好”的意思。",
        lines: [
          { who: "them", role: "邻居", en: "Isn't it gorgeous out today?", zh: "今天天气是不是好极了？", hear: "Isn't it gorgeous out t'day?", note: "gorgeous 是“美极了”，天气、风景、衣服都可以用。out 在这里指“外面”。", say: [["It's beautiful!", "太美了！"], ["What a lovely day!", "天气真好！"]] },
          { who: "me", en: "Yes, it's beautiful! So nice to see the sun.", zh: "是啊，太美了！终于见到太阳了。" },
          { who: "them", role: "邻居", en: "I know! After all that rain, we deserve it.", zh: "可不是嘛！下了那么久的雨，也该轮到我们了。", note: "这里的 I know 不是“我知道”，而是“可不是嘛”，表示同意。" },
          { who: "me", en: "Are you going out today?", zh: "你今天出去吗？" },
          { who: "them", role: "邻居", en: "Yeah, I'm going for a walk on the seawall. You should get out and enjoy it!", zh: "嗯，我要去海边步道走走。你也出去享受一下吧！", note: "seawall 是温哥华沿海的步道，Stanley Park 那一圈最有名。", words: [["seawall", "海边步道"], ["go for a walk", "去散步"]] },
          { who: "me", en: "Good idea. Maybe we'll go to Stanley Park.", zh: "好主意，我们也许去斯坦利公园。" },
          { who: "them", role: "邻居", en: "Perfect day for it. Don't forget your sunscreen!", zh: "今天去正合适。别忘了涂防晒！", words: [["sunscreen", "防晒霜"]] },
          { who: "me", en: "Thanks! Enjoy the sunshine!", zh: "谢谢！好好享受阳光！" }
        ]
      },
      {
        id: "dog",
        title: "夸夸别人的狗",
        en: "Meeting a neighbour's dog",
        intro: "温哥华养狗的人非常多。在公园、楼下遇到别人遛狗，夸一句狗狗是最自然的聊天方式。想摸之前一定要先问主人。",
        lines: [
          { who: "me", en: "What a cute dog!", zh: "好可爱的狗！" },
          { who: "them", role: "遛狗的人", en: "Thank you! She's very friendly.", zh: "谢谢！她很友好，不咬人。", note: "加拿大人说自己的狗，用 he（他）或 she（她），不说 it。" },
          { who: "me", en: "Can I pet her?", zh: "我可以摸摸她吗？", note: "pet 在这里是“摸（宠物）”的意思。摸之前先问，是这里的礼貌。", say: [["Is he friendly?", "它友好吗？（会不会咬人）"]], words: [["pet", "摸（宠物）；宠物"]] },
          { who: "them", role: "遛狗的人", en: "Of course! She loves people.", zh: "当然！她很喜欢人。" },
          { who: "me", en: "What's her name?", zh: "她叫什么名字？" },
          { who: "them", role: "遛狗的人", en: "Her name is Maple. She's three.", zh: "她叫 Maple（枫叶），三岁了。" },
          { who: "me", en: "She's so sweet.", zh: "她真乖。", note: "sweet 说人或动物时，是“可爱、乖、贴心”的意思，不是“甜”。" },
          { who: "them", role: "遛狗的人", en: "Thanks! Enjoy your walk!", zh: "谢谢！散步愉快！" }
        ]
      },
      {
        id: "thanksgiving",
        title: "节日问候",
        en: "Holiday greetings",
        intro: "加拿大的感恩节在十月的第二个星期一，和周末连成一个三天的长周末（long weekend）。节日前后，邻居、店员都会问你有什么安排。",
        lines: [
          { who: "them", role: "邻居", en: "Happy Thanksgiving! Any plans for the long weekend?", zh: "感恩节快乐！长周末有什么安排吗？", note: "long weekend 是连着公众假期的三天周末，加拿大一年有好几个。", words: [["long weekend", "长周末（三天假）"], ["plans", "安排、计划"]] },
          { who: "me", en: "Happy Thanksgiving! We're having dinner with our family.", zh: "感恩节快乐！我们和家里人一起吃饭。", say: [["Not much. Just relaxing at home.", "没什么安排，在家休息。"], ["We're having dinner with our daughter.", "我们和女儿一起吃饭。"], ["We're having dinner with our son.", "我们和儿子一起吃饭。"]] },
          { who: "them", role: "邻居", en: "Oh, that's lovely. Are you making turkey?", zh: "真好。你们做火鸡吗？", note: "感恩节的传统是吃烤火鸡（turkey）和南瓜派（pumpkin pie）。", words: [["turkey", "火鸡"], ["pumpkin pie", "南瓜派"]] },
          { who: "me", en: "No, we're making salmon and dumplings!", zh: "不，我们做三文鱼和饺子！", note: "说说自己家的习惯，对方通常很感兴趣，是很好的聊天话题。" },
          { who: "them", role: "邻居", en: "That sounds delicious!", zh: "听起来好好吃！", note: "That sounds ___ 是很常用的回应：That sounds great（听起来很棒）、That sounds fun（听起来很好玩）。" },
          { who: "me", en: "What about you?", zh: "你呢？" },
          { who: "them", role: "邻居", en: "We're going to visit my parents on the Island.", zh: "我们去岛上看我父母。", hear: "We're gonna visit my parents on the Island.", note: "温哥华人说 the Island，一般指温哥华岛（Vancouver Island），坐渡轮就能到。" },
          { who: "me", en: "Have a great time!", zh: "玩得开心！" },
          { who: "them", role: "邻居", en: "Thanks, you too. Enjoy the long weekend!", zh: "谢谢，你也是。长周末愉快！" }
        ]
      },
      {
        id: "line-up",
        title: "排队和说 sorry",
        en: "Lining up & saying sorry",
        intro: "加拿大人很讲究排队，也特别爱说 sorry。不小心碰到人要说 Sorry；不确定队伍从哪儿开始，就先问一句。",
        lines: [
          { who: "me", en: "Excuse me, are you in line?", zh: "打扰一下，你在排队吗？", note: "in line 是“在排队”。不确定前面的人是不是在排队时问一句，可以避免插队的误会。", words: [["line up", "排队"], ["in line", "在排队"]] },
          { who: "them", role: "顾客", en: "Yep, I am. The line starts back there.", zh: "对，我在排。队尾在那边。", note: "队伍有时会拐弯，这句是告诉你队尾在后面。" },
          { who: "me", en: "Oh, sorry! Thank you.", zh: "哦，不好意思！谢谢。" },
          { who: "them", role: "路人", en: "Sorry about that!", zh: "哎呀，不好意思！", note: "在加拿大，哪怕是别人撞了你，两个人也常常同时说 sorry。回一句 No worries 就好。", say: [["No worries.", "没关系。"], ["That's okay.", "没事。"]] },
          { who: "me", en: "No worries.", zh: "没关系。" },
          { who: "them", role: "店员", en: "I can help whoever's next.", zh: "下一位请过来。", hear: "I c'n help whoever's next.", note: "排到你了。也常听到更短的 Next, please!" },
          { who: "them", role: "店员", en: "Sorry for the wait.", zh: "抱歉让你久等了。", note: "这里的 sorry 是客气话，不是真的做错了事，说 That's okay 就好。" },
          { who: "me", en: "That's okay.", zh: "没关系。" }
        ]
      }
    ]
  },
  {
    id: "grocery",
    title: "超市购物",
    en: "Grocery shopping",
    scenes: [
      {
        id: "find-item",
        title: "找东西",
        en: "Finding something",
        intro: "超市太大找不到东西，就问穿制服的店员。他们会告诉你在第几排货架，英文叫 aisle。",
        lines: [
          { who: "me", en: "Excuse me, where can I find the cheese?", zh: "打扰一下，奶酪在哪里？", note: "Where can I find ___? 后面可以换成任何东西。", words: [["eggs", "鸡蛋"], ["milk", "牛奶"], ["rice", "大米"], ["tofu", "豆腐"], ["soy sauce", "酱油"]] },
          { who: "them", role: "店员", en: "It's in aisle seven, at the back.", zh: "在第七排，靠后面。", hear: "It's in aisle sev'n, at the back.", note: "aisle 读作“爱哦”，s 不发音。at the back 是在店的后面。", words: [["aisle", "货架通道（第几排）"], ["at the back", "在后面"]] },
          { who: "me", en: "Sorry, which aisle?", zh: "不好意思，第几排？" },
          { who: "them", role: "店员", en: "Aisle seven. Follow me, I'll show you.", zh: "第七排。跟我来，我带你去。", hear: "Aisle sev'n. Follow me, I'll showya." },
          { who: "them", role: "店员", en: "Here you go. Anything else you're looking for?", zh: "在这儿。还要找别的吗？", hear: "Here ya go. Anything else you're lookin' for?" },
          { who: "me", en: "No, that's all. Thank you so much.", zh: "没有了，非常感谢。" },
          { who: "them", role: "店员", en: "You bet!", zh: "不客气！", note: "加拿大人说“不客气”很少用 You're welcome，更常说 No problem、No worries、You bet。" }
        ]
      },
      {
        id: "checkout",
        title: "结账",
        en: "At the checkout",
        intro: "结账时收银员几乎每次都问这几句，顺序也差不多。学会这一课，去哪家超市都能应付。",
        lines: [
          { who: "them", role: "收银员", en: "Hi there! Did you find everything okay?", zh: "你好！东西都找到了吗？", hear: "Hi there! Didja find ev'rything okay?", note: "这是客套话，回答 Yes, thanks 就好。" },
          { who: "me", en: "Yes, thanks.", zh: "找到了，谢谢。" },
          { who: "them", role: "收银员", en: "Do you have a points card?", zh: "你有积分卡吗？", hear: "D'you have a points card?", note: "很多超市和药店都有积分卡，比如 PC Optimum、Save-On More。没有就说 No。", say: [["No, I don't.", "没有。"], ["Yes, here you go.", "有，给你。"]] },
          { who: "me", en: "No, I don't.", zh: "没有。" },
          { who: "them", role: "收银员", en: "Do you need a bag?", zh: "你需要袋子吗？", hear: "D'you need a bag?", note: "在温哥华，购物袋一般要另外收钱，很多人自己带袋子。", say: [["No, thanks. I have my own bag.", "不用了，我自己带了。"], ["Yes, one bag, please.", "要一个袋子，谢谢。"]] },
          { who: "me", en: "No, thanks. I have my own bag.", zh: "不用了，谢谢。我自己带了袋子。" },
          { who: "them", role: "收银员", en: "Your total is twenty-three fifty.", zh: "一共 23.50 元。", note: "说价钱时常常省略 dollars 和 cents：twenty-three fifty 就是 23 块 50。" },
          { who: "them", role: "收银员", en: "How would you like to pay?", zh: "你想怎么付款？", hear: "How'd ya like ta pay?", note: "问你用什么付钱。听到 pay（付款）这个词就能猜到。", say: [["Debit, please.", "用借记卡。"], ["Credit card.", "用信用卡。"], ["Cash.", "付现金。"]], words: [["debit", "借记卡（银行卡）"], ["credit", "信用卡"]] },
          { who: "me", en: "Debit, please.", zh: "用借记卡，谢谢。" },
          { who: "them", role: "收银员", en: "Go ahead and tap whenever you're ready.", zh: "准备好了就把卡贴一下吧。", hear: "Go 'head 'n tap whenever you're ready.", note: "tap 是把卡贴在机器上付款，在加拿大最常用。金额大的时候，机器可能要你 insert（插卡）再输密码。", words: [["tap", "贴卡（感应付款）"], ["insert", "插卡"], ["PIN", "密码"]] },
          { who: "them", role: "收银员", en: "Would you like your receipt?", zh: "你要小票吗？", hear: "Wouldja like your receipt?", note: "receipt 读作“瑞-西特”，p 不发音。", say: [["No, thank you.", "不要，谢谢。"], ["Yes, please.", "要，谢谢。"]] },
          { who: "me", en: "No, thank you.", zh: "不用了，谢谢。" },
          { who: "them", role: "收银员", en: "Have a great day!", zh: "祝你今天愉快！" },
          { who: "me", en: "You too!", zh: "你也是！" }
        ]
      },
      {
        id: "seafood-cheese",
        title: "买三文鱼和奶酪",
        en: "At the seafood & cheese counters",
        intro: "超市的海鲜柜可以请店员帮你挑、帮你称。很多地方按磅（lb）卖，1 磅约 0.45 公斤，差不多九两。奶酪柜台常常可以先尝再买。",
        lines: [
          { who: "them", role: "店员", en: "Hi, what can I get for you?", zh: "你好，要点什么？", hear: "Hi, what c'n I get for ya?", note: "柜台、餐厅、咖啡店都常听到这句，意思就是“要点什么”。" },
          { who: "me", en: "Can I have one pound of salmon, please?", zh: "我要一磅三文鱼，谢谢。", note: "salmon 读作“萨门”，l 不发音。Can I have ___, please? 是买东西最好用的句子。", words: [["salmon", "三文鱼"], ["pound", "磅"]] },
          { who: "them", role: "店员", en: "Sure. Is this piece okay?", zh: "好的。这块可以吗？", note: "店员会拿起来给你看，大了小了都可以说。" },
          { who: "me", en: "A little bigger, please.", zh: "要大一点的，谢谢。", say: [["A little smaller, please.", "要小一点的。"], ["That's perfect.", "正好。"]] },
          { who: "them", role: "店员", en: "How's this one?", zh: "这块呢？" },
          { who: "me", en: "That's perfect, thanks.", zh: "正好，谢谢。" },
          { who: "me", en: "Excuse me, can I try this cheese?", zh: "打扰一下，我能尝尝这个奶酪吗？", note: "很多奶酪柜台可以先尝（try a sample），尝了不买也没关系。", words: [["sample", "试吃的一小份"], ["cheddar", "切达奶酪"], ["brie", "布里奶酪"]] },
          { who: "them", role: "店员", en: "Of course! Here you go. That's a five-year aged cheddar.", zh: "当然！给你。这是五年的陈年切达。", words: [["aged", "陈年的"]] },
          { who: "me", en: "It's delicious. Can I get a small piece?", zh: "嗯，真好吃。能给我切一小块吗？" },
          { who: "them", role: "店员", en: "Sure. About half a pound?", zh: "好的。半磅左右？" },
          { who: "me", en: "Yes, that's great. Thank you!", zh: "好，正合适。谢谢！" }
        ]
      },
      {
        id: "farmers-market",
        title: "逛周末市集",
        en: "At the farmers market",
        intro: "周末的农夫市集（farmers market）有本地农场来摆摊，卖新鲜蔬果、面包和奶酪。摊主都很爱聊天，常常让你先尝再买。小摊位有时只收现金。",
        lines: [
          { who: "them", role: "摊主", en: "Morning! Would you like to try an apple?", zh: "早上好！要不要尝尝苹果？", hear: "Mornin'! Wouldja like to try an apple?", note: "市集的摊位常常可以免费试吃，尝了不买也没关系。" },
          { who: "me", en: "Yes, please. Oh, it's so sweet!", zh: "好的，谢谢。哇，好甜！" },
          { who: "them", role: "摊主", en: "They're Honeycrisp, from the Okanagan.", zh: "这是蜜脆苹果，从 Okanagan 来的。", note: "Okanagan 是 BC 省内陆的水果产区，苹果和樱桃很有名。", words: [["Honeycrisp", "蜜脆苹果"]] },
          { who: "me", en: "How much are they?", zh: "怎么卖？", note: "问价钱最常用的一句。只问一个东西时说 How much is this?", say: [["How much is this?", "这个多少钱？"]] },
          { who: "them", role: "摊主", en: "Three dollars a pound, or a bag for ten.", zh: "三块钱一磅，或者十块钱一袋。", note: "a bag for ten 就是“十块钱一袋”，dollars 常常省略不说。" },
          { who: "me", en: "I'll take a bag, please.", zh: "我要一袋，谢谢。", note: "I'll take ___ 是“我要买……”，决定买的时候说。" },
          { who: "them", role: "摊主", en: "Great choice. Cash or card?", zh: "好嘞。付现金还是刷卡？", say: [["Card, please.", "刷卡。"], ["Do you take cards?", "你们收卡吗？"]] },
          { who: "me", en: "Card, please.", zh: "刷卡。" },
          { who: "them", role: "摊主", en: "Go ahead and tap. Enjoy!", zh: "直接贴卡就行。慢慢吃！" },
          { who: "me", en: "Thanks! See you next week!", zh: "谢谢！下周见！", note: "常去的摊位，说一句 See you next week，摊主会记住你。" }
        ]
      }
    ]
  },
  {
    id: "food",
    title: "咖啡店和餐厅",
    en: "Cafés & restaurants",
    scenes: [
      {
        id: "coffee",
        title: "买咖啡",
        en: "Ordering a coffee",
        intro: "咖啡店点单很快，店员说话也快。其实翻来覆去就这几个问题：要什么、多大杯、在这儿喝还是带走、叫什么名字。",
        lines: [
          { who: "them", role: "店员", en: "Hi! What can I get started for you?", zh: "你好！想点什么？", hear: "Hi! What c'n I get started for ya?", note: "咖啡店特别爱这么说，意思就是“想点什么”。" },
          { who: "me", en: "Can I get a medium coffee, please?", zh: "我要一杯中杯咖啡，谢谢。", words: [["small", "小杯"], ["medium", "中杯"], ["large", "大杯"]] },
          { who: "them", role: "店员", en: "For here or to go?", zh: "在这儿喝还是带走？", note: "必会！for here 是在店里喝，to go 是带走。", say: [["For here, please.", "在这儿喝。"], ["To go, please.", "带走。"]] },
          { who: "me", en: "To go, please.", zh: "带走，谢谢。" },
          { who: "them", role: "店员", en: "Would you like milk or sugar?", zh: "要加奶或者糖吗？", hear: "Wouldja like milk or sugar?", note: "加拿大人常点 double double，意思是两份奶两份糖。", say: [["Just milk, please.", "只加奶。"], ["Black, please.", "什么都不加。"]] },
          { who: "me", en: "Just milk, please.", zh: "只加奶，谢谢。" },
          { who: "them", role: "店员", en: "Can I get a name for the order?", zh: "请问你叫什么名字？（做好了叫你）", note: "店员会把名字写在杯子上，做好了喊名字。说你的姓就好。" },
          { who: "me", en: "Zhang. Z, H, A, N, G.", zh: "张。Z、H、A、N、G。", note: "外国人念 Zhang、Geng 可能和中文不太一样。咖啡做好了，听到差不多的音就是在叫你。名字不好拼时，可以一个字母一个字母地拼。", say: [["Geng. G, E, N, G.", "耿。G、E、N、G。"]] },
          { who: "them", role: "店员", en: "Great! It'll be ready at the end of the counter.", zh: "好的！做好了在柜台那头取。", hear: "Great! It'll be ready at the end o' the counter." }
        ]
      },
      {
        id: "restaurant",
        title: "餐厅点菜",
        en: "Eating at a restaurant",
        intro: "进西餐厅先在门口等服务员带位。服务员会先问喝什么，再问点什么菜和有没有过敏，吃到一半还会过来问味道怎么样。",
        lines: [
          { who: "them", role: "服务员", en: "Hi there! How many?", zh: "你好！几位？", note: "也常听到 Table for two? 意思是“两位吗？”" },
          { who: "me", en: "Two, please.", zh: "两位。" },
          { who: "them", role: "服务员", en: "Right this way.", zh: "这边请。" },
          { who: "them", role: "服务员", en: "Can I get you something to drink?", zh: "先喝点什么吗？", hear: "Can I getcha something to drink?", note: "坐下以后服务员一般先问饮料。只要水的话，水是免费的。", say: [["Just water, please.", "水就好，谢谢。"], ["A cup of tea, please.", "一杯茶，谢谢。"]] },
          { who: "me", en: "Just water, please.", zh: "水就好，谢谢。" },
          { who: "them", role: "服务员", en: "Are you ready to order?", zh: "可以点菜了吗？", hear: "You ready to order?", say: [["Yes, we're ready.", "可以了。"], ["Can we have a few more minutes?", "我们再看一下。"]] },
          { who: "me", en: "Yes. Can I have the salmon, please?", zh: "可以。我要三文鱼，谢谢。", note: "salmon 的 l 不发音。不会念菜名，就指着菜单说下面这句。", say: [["Can I have this one, please?", "我要这个，谢谢。（指着菜单）"]] },
          { who: "them", role: "服务员", en: "Sure. Any allergies I should know about?", zh: "好的。有什么过敏需要我们注意吗？", note: "很多餐厅点菜时会问过敏。有过敏一定要说清楚。", words: [["allergy", "过敏"]] },
          { who: "me", en: "Yes, I'm allergic to peaches.", zh: "有，我对桃子过敏。", note: "peach 是桃子，说过敏时用复数 peaches。甜点、果汁、沙拉里都可能有桃子，点菜时说一声最保险。", say: [["No, no allergies.", "没有过敏。"]] },
          { who: "them", role: "服务员", en: "Got it. I'll let the kitchen know.", zh: "明白，我会告诉厨房。", note: "Got it 是“明白了”。" },
          { who: "them", role: "服务员", en: "How is everything?", zh: "味道怎么样？", hear: "How's ev'rything?", note: "吃到一半服务员会来问。不是要你评论，说 Very good 就好。" },
          { who: "me", en: "Everything is great, thank you.", zh: "都很好，谢谢。" }
        ]
      },
      {
        id: "bill",
        title: "买单和小费",
        en: "Paying the bill",
        intro: "加拿大的餐厅吃完饭在座位上买单，还要给小费。一般给 15% 到 18%，刷卡机上会显示选项，按一个就行。",
        lines: [
          { who: "me", en: "Can we get the bill, please?", zh: "请帮我们买单。", note: "加拿大说 bill，美国常说 check。想叫服务员，看着他们轻轻招一下手就可以。" },
          { who: "them", role: "服务员", en: "Sure. Together or separate?", zh: "好的。一起付还是分开付？", note: "朋友一起吃饭常常各付各的，所以服务员会问。", say: [["Together, please.", "一起付。"], ["Separate, please.", "分开付。"]] },
          { who: "me", en: "Together, please.", zh: "一起付。" },
          { who: "them", role: "服务员", en: "Here's the machine. You can add the tip on the screen.", zh: "刷卡机给你，可以在屏幕上加小费。", note: "屏幕上会出现 15%、18%、20% 这样的选项，选一个，再贴卡付款。", words: [["tip", "小费"]] },
          { who: "them", role: "服务员", en: "Would you like a box for the rest?", zh: "剩下的要打包吗？", hear: "Wouldja like a box for the rest?", note: "吃不完可以打包，也可以自己主动问。", say: [["Yes, please.", "要，谢谢。"], ["Can I get a box, please?", "可以给我一个打包盒吗？"]] },
          { who: "me", en: "Yes, please.", zh: "好的，谢谢。" },
          { who: "them", role: "服务员", en: "Thanks for coming in. Have a good night!", zh: "谢谢光临，晚上愉快！" }
        ]
      }
    ]
  },
  {
    id: "transit",
    title: "坐车和问路",
    en: "Getting around",
    scenes: [
      {
        id: "bus",
        title: "坐公交去公园",
        en: "Taking the bus to the park",
        intro: "温哥华的公交车和天车（SkyTrain）可以用 Compass 卡，也可以直接刷银行卡。上车时刷卡，不确定方向就问司机，司机一般都很友善。",
        lines: [
          { who: "me", en: "Excuse me, does this bus go to Stanley Park?", zh: "打扰一下，这辆车去斯坦利公园吗？", note: "把地名换掉，就能问去任何地方。", words: [["Stanley Park", "斯坦利公园"], ["Pacific Spirit Park", "太平洋精神公园（UBC 旁边的森林）"], ["Queen Elizabeth Park", "伊丽莎白女王公园"]] },
          { who: "them", role: "司机", en: "Yep, it does. Just tap your card.", zh: "对，去的。刷卡就行。", note: "Yep 就是 Yes，口语里很常见。" },
          { who: "me", en: "Could you let me know when we get there?", zh: "到了能告诉我一声吗？", note: "怕坐过站时，可以这样请司机提醒你。" },
          { who: "them", role: "司机", en: "Sure. It's about six stops from here.", zh: "没问题，大概还有六站。", hear: "Sure. It's 'bout six stops from here." },
          { who: "them", role: "司机", en: "Please move to the back of the bus.", zh: "请往车后面走。", note: "车上人多时司机会这样说，意思是请大家往里走。" },
          { who: "them", role: "车上广播", en: "Next stop: Stanley Park.", zh: "下一站：斯坦利公园。", note: "要下车时，拉一下窗边的黄色绳子，或者按红色的 STOP 按钮。" },
          { who: "me", en: "Thank you!", zh: "谢谢！", note: "温哥华人下车时常常大声对司机说 Thank you，从后门下车也一样。这是这里的好习惯。" }
        ]
      },
      {
        id: "directions",
        title: "在公园里问路",
        en: "Asking for directions",
        intro: "问路最怕听不清方向。记住几个关键词：straight（直走）、left（左）、right（右）、path（小路）。在 Stanley Park 里想去海边步道（seawall），可以这样问。",
        lines: [
          { who: "me", en: "Excuse me, how do I get to the seawall?", zh: "打扰一下，海边步道怎么走？", words: [["seawall", "海边步道"], ["beach", "海滩"], ["trail", "林间小路"], ["washroom", "洗手间"]] },
          { who: "them", role: "路人", en: "Go straight down this path, then turn left at the totem poles.", zh: "沿着这条路直走，到图腾柱那里左转。", note: "Stanley Park 的图腾柱（totem poles）是很有名的地标。", words: [["go straight", "直走"], ["turn left", "左转"], ["turn right", "右转"], ["totem pole", "图腾柱"]] },
          { who: "me", en: "Sorry, could you say that again?", zh: "不好意思，能再说一遍吗？" },
          { who: "them", role: "路人", en: "Sure. Straight down this path, then left at the totem poles. You'll see the water.", zh: "好的。顺着这条路直走，到图腾柱左转，就能看到海了。" },
          { who: "me", en: "Is it far from here?", zh: "离这儿远吗？" },
          { who: "them", role: "路人", en: "Not really. It's about a ten-minute walk.", zh: "不太远，走路大概十分钟。", hear: "Not really. It's 'bout a ten-minute walk." },
          { who: "me", en: "Thank you so much!", zh: "太谢谢你了！" },
          { who: "them", role: "路人", en: "No problem. You can't miss it.", zh: "不客气，很好找的。", note: "You can't miss it 字面是“你不可能错过”，意思是“很显眼，一定能找到”。不是说“你不能错过”！" }
        ]
      }
    ]
  },
  {
    id: "health",
    title: "药店和看病",
    en: "Pharmacy & doctor",
    scenes: [
      {
        id: "pharmacy",
        title: "去药店取药",
        en: "Picking up medicine",
        intro: "在加拿大，医生开的处方药要去药店（pharmacy）取。药剂师会核对你的姓和生日，还会告诉你怎么吃。",
        lines: [
          { who: "them", role: "药剂师", en: "Hi, are you picking up or dropping off?", zh: "你好，你是来取药，还是来交处方？", note: "必会！picking up 是取药，dropping off 是把处方单交给药店。", say: [["I'm picking up.", "我来取药。"], ["I'm dropping off a prescription.", "我来交处方。"]], words: [["prescription", "处方"]] },
          { who: "me", en: "I'm picking up.", zh: "我来取药。" },
          { who: "them", role: "药剂师", en: "What's the last name?", zh: "姓什么？", note: "last name 是姓，first name 是名字。" },
          { who: "me", en: "Zhang. Z, H, A, N, G.", zh: "张。Z、H、A、N、G。", say: [["Geng. G, E, N, G.", "耿。G、E、N、G。"]] },
          { who: "them", role: "药剂师", en: "And your date of birth?", zh: "你的出生日期是？", note: "生日一般按“月、日、年”的顺序说。" },
          { who: "me", en: "June fifth, nineteen sixty-five.", zh: "1965 年 6 月 5 日。", note: "这里的日期只是举例，换成自己的生日说。年份两位两位地读，比如 1965 读作 nineteen sixty-five。" },
          { who: "them", role: "药剂师", en: "Have you taken this medication before?", zh: "这个药你以前吃过吗？", say: [["Yes, I have.", "吃过。"], ["No, this is my first time.", "没有，第一次吃。"]], words: [["medication", "药物"]] },
          { who: "me", en: "No, this is my first time.", zh: "没有，这是第一次。" },
          { who: "them", role: "药剂师", en: "Take one tablet twice a day, after meals.", zh: "一次一片，一天两次，饭后吃。", words: [["tablet", "药片"], ["twice a day", "一天两次"], ["after meals", "饭后"], ["before bed", "睡前"]] },
          { who: "them", role: "药剂师", en: "Do you have any questions for me?", zh: "你还有什么问题吗？" },
          { who: "me", en: "No, thank you.", zh: "没有了，谢谢。" }
        ]
      },
      {
        id: "clinic",
        title: "去诊所看病",
        en: "At the walk-in clinic",
        intro: "没有家庭医生的话，可以去 walk-in clinic（免预约诊所）。到了以后先在前台登记，然后坐着等医生叫名字。",
        lines: [
          { who: "them", role: "前台", en: "Hi, do you have an appointment?", zh: "你好，你有预约吗？", note: "appointment 是预约。免预约诊所不用预约，说 No 就行。" },
          { who: "me", en: "No, I don't.", zh: "没有。" },
          { who: "them", role: "前台", en: "Okay. Can I see your Care Card, please?", zh: "好的。请给我看一下你的医疗卡。", note: "BC 省的医疗卡正式名字叫 BC Services Card，很多人还习惯叫它 Care Card。" },
          { who: "them", role: "医生", en: "So, what brings you in today?", zh: "今天哪里不舒服？", hear: "So, what brings ya in today?", note: "字面意思是“什么把你带来的”，其实就是问“你来看什么病”。" },
          { who: "me", en: "I have a sore throat and a cough.", zh: "我嗓子疼，还咳嗽。", words: [["sore throat", "嗓子疼"], ["cough", "咳嗽"], ["fever", "发烧"], ["headache", "头疼"]] },
          { who: "them", role: "医生", en: "Are you allergic to any medications?", zh: "你对什么药过敏吗？", note: "医生和药剂师都会问，这句一定要听懂！", words: [["allergic", "过敏的"]] },
          { who: "me", en: "No, but I'm allergic to peaches.", zh: "对药不过敏，但我对桃子过敏。", note: "医生问的是药物过敏。食物过敏也顺便说一声，医生会记下来。", say: [["No, I'm not.", "不过敏。"]] }
        ]
      }
    ]
  },
  {
    id: "listening",
    title: "进阶：听本地人聊天",
    en: "Advanced: listening in",
    scenes: [
      {
        id: "bus-loop",
        title: "学生等车聊考试",
        en: "Two students at the bus loop",
        listen: true,
        intro: "在 UBC 校园里，到处都能听到学生聊天：考试、作业、教授、去哪儿吃饭。他们说得快，还有很多学生的说法。这一课不用学会说，能听懂大意就很好。",
        lines: [
          { who: "them", role: "学生 Emily", en: "Hey! Are you heading downtown too?", zh: "嘿！你也去市中心吗？", hear: "Hey! You headin' downtown too?", note: "heading 是“正要去”。" },
          { who: "them", role: "学生 Jason", en: "Yeah, I'm meeting some friends for dinner. How's your week going?", zh: "对，我约了朋友吃晚饭。你这周怎么样？" },
          { who: "them", role: "学生 Emily", en: "Honestly, it's been crazy. I had two midterms back to back.", zh: "说实话，这周忙疯了。我连着考了两门期中考。", note: "midterm 是期中考试，back to back 是“一个接一个”。", words: [["midterm", "期中考试"], ["back to back", "一个接一个"]] },
          { who: "them", role: "学生 Jason", en: "Oh no. How did they go?", zh: "天哪。考得怎么样？", note: "How did it go? 是问“结果怎么样”，考试、面试、看病都能用。" },
          { who: "them", role: "学生 Emily", en: "The first one was fine, but I totally blanked on the second one.", zh: "第一门还行，第二门我脑子一片空白。", note: "blank on something 是“突然想不起来、脑子一片空白”。" },
          { who: "them", role: "学生 Jason", en: "That sucks. Was it the stats class?", zh: "太惨了。是统计课吗？", note: "That sucks 是年轻人说“太糟了”，比较随便，长辈之间少用。stats 是 statistics（统计学）的简称。" },
          { who: "them", role: "学生 Emily", en: "Yeah. The prof is nice, but her exams are brutal.", zh: "对。教授人很好，但她的考试太难了。", note: "学生把 professor 简称 prof。brutal 本意是“残酷”，这里是“难得要命”。" },
          { who: "them", role: "学生 Jason", en: "Did you go to her office hours?", zh: "你去过她的答疑时间吗？", hear: "Didja go to her office hours?", note: "office hours 是教授固定在办公室答疑的时间，谁都可以去问问题。" },
          { who: "them", role: "学生 Emily", en: "Not yet. I keep meaning to, but I never have time.", zh: "还没。我一直想去，但老是没时间。", note: "I keep meaning to 是“我一直打算要做（可就是没做）”。" },
          { who: "them", role: "学生 Jason", en: "You should. The TA in my class is super helpful too.", zh: "你该去的。我们课的助教也特别帮忙。", words: [["TA", "助教（teaching assistant）"]] },
          { who: "them", role: "学生 Emily", en: "Good idea. Oh, here comes the bus.", zh: "好主意。哦，车来了。" },
          { who: "them", role: "学生 Jason", en: "Finally. Let's grab a seat at the back.", zh: "终于来了。我们去后面找个座位。", note: "grab 原意是“抓”，口语里 grab a seat（找个座）、grab a coffee（买杯咖啡）、grab lunch（随便吃个午饭）都很常用。" },
          { who: "them", role: "学生 Emily", en: "Sounds good. Do you have your U-Pass?", zh: "好。你带 U-Pass 了吗？", note: "U-Pass 是学生的公交通行证，放在 Compass 卡里。" },
          { who: "them", role: "学生 Jason", en: "Yep, it's on my Compass Card. I'm good.", zh: "带了，在我的 Compass 卡里。没问题。", note: "I'm good 在这里是“我没问题”。别人问你还要不要什么时，I'm good 是“不用了”。" }
        ]
      },
      {
        id: "coworkers",
        title: "同事聊周末",
        en: "Coworkers on Monday morning",
        listen: true,
        intro: "在 UBC 工作的人很多。周一早上，同事之间最常聊的就是周末干了什么。这种对话节奏快、用词随便，很能练耳朵。",
        lines: [
          { who: "them", role: "同事 Sarah", en: "Morning, Mike! How was your weekend?", zh: "早，Mike！周末过得怎么样？", hear: "Mornin', Mike! How was your weekend?" },
          { who: "them", role: "同事 Mike", en: "Pretty good, thanks. We finally made it up to Whistler.", zh: "挺好的，谢谢。我们终于去了一趟惠斯勒。", note: "Whistler（惠斯勒）是温哥华北边两小时车程的山区小镇，夏天爬山、冬天滑雪。made it 是“终于成行了”。" },
          { who: "them", role: "同事 Sarah", en: "Oh, nice! Did you do any hiking?", zh: "哇，真好！你们去徒步了吗？", hear: "Oh, nice! Didja do any hiking?", words: [["hiking", "徒步、爬山"]] },
          { who: "them", role: "同事 Mike", en: "Yeah, we did a short hike to a lake. The views were unreal.", zh: "去了，走了一段短路线到一个湖边。风景美得不真实。", note: "unreal 字面是“不真实”，口语里是“好得难以置信”。也常说 amazing、stunning。" },
          { who: "them", role: "同事 Sarah", en: "I'm so jealous. I haven't been up there in years.", zh: "好羡慕。我好几年没去了。", note: "I'm so jealous 在这里是开玩笑地说“好羡慕”，不是真的嫉妒。" },
          { who: "them", role: "同事 Mike", en: "What about you? Did you get up to anything fun?", zh: "你呢？做了什么好玩的吗？", hear: "What about you? Didja get up to anything fun?", note: "get up to something 是“做了些什么”，常用来问周末、假期。" },
          { who: "them", role: "同事 Sarah", en: "Not really. It was pouring, so I mostly stayed in and caught up on my shows.", zh: "没有。一直下大雨，我基本都待在家里追剧。", note: "stay in 是待在家里不出门；catch up on 是把落下的补上，这里是补看电视剧。", words: [["stay in", "待在家里"], ["catch up on", "补上（落下的事）"]] },
          { who: "them", role: "同事 Mike", en: "Honestly, that sounds pretty nice too.", zh: "说实话，听起来也挺舒服的。" },
          { who: "them", role: "同事 Sarah", en: "It was! Oh, by the way, are you coming to the team lunch on Friday?", zh: "确实！对了，你来星期五的团队午餐吗？", note: "by the way 是“对了、顺便说一下”，用来换话题。" },
          { who: "them", role: "同事 Mike", en: "I think so. Where is it this time?", zh: "应该会去。这次在哪儿？" },
          { who: "them", role: "同事 Sarah", en: "That new ramen place in Wesbrook Village.", zh: "Wesbrook Village 新开的那家拉面店。", note: "Wesbrook Village 是 UBC 校园南边的居民区，有超市、餐厅和小公园。" },
          { who: "them", role: "同事 Mike", en: "Oh, I've been wanting to try that. Count me in!", zh: "哦，我一直想去试试。算我一个！", note: "Count me in 是“算我一个”；不去就说 Count me out。" },
          { who: "them", role: "同事 Sarah", en: "Great. I'll put your name down.", zh: "好，我把你的名字写上。" },
          { who: "them", role: "同事 Mike", en: "Thanks. Okay, I'd better get back to work. Catch you later!", zh: "谢谢。好了，我得回去干活了。回头见！", hear: "Thanks. Okay, I'd better get back to work. Catchya later!", note: "Catch you later 是很随意的“回头见”，也常说 See you later、Talk to you later。" }
        ]
      },
      {
        id: "retirees",
        title: "两位退休邻居散步聊天",
        en: "Two retired neighbours on a walk",
        listen: true,
        intro: "在 Wesbrook 和 Pacific Spirit Park 散步时，常会遇到退休的本地人边走边聊：孙子孙女、社区课程、周末市集。他们说话比学生慢一点，内容也最贴近你们的生活。",
        lines: [
          { who: "them", role: "邻居 Karen", en: "Dave! I haven't seen you in ages. How have you been?", zh: "Dave！好久不见。最近怎么样？", hear: "Dave! I haven't seen ya in ages. How've ya been?", note: "in ages 是“好久”。How have you been? 是好久不见时问“最近好吗”。" },
          { who: "them", role: "邻居 Dave", en: "Not too bad! We just got back from visiting our grandkids in Calgary.", zh: "还不错！我们刚从卡尔加里看孙子孙女回来。", words: [["grandkids", "孙子孙女"]] },
          { who: "them", role: "邻居 Karen", en: "Oh, how lovely. How old are they now?", zh: "真好。他们现在多大了？" },
          { who: "them", role: "邻居 Dave", en: "Six and nine. They grow up so fast.", zh: "一个六岁，一个九岁。长得真快。", note: "They grow up so fast 是说起孩子时很常见的感叹。" },
          { who: "them", role: "邻居 Karen", en: "Don't they? Are you still going to the walking group on Tuesdays?", zh: "可不是嘛！你星期二还去走路小组吗？", note: "Don't they? 是附和对方，意思是“可不是嘛”。很多社区都有一起散步的小组。" },
          { who: "them", role: "邻居 Dave", en: "When I can. My knee's been acting up a bit lately.", zh: "能去就去。最近膝盖有点不舒服。", note: "act up 本意是“调皮捣蛋”，说身体时是“闹毛病、不舒服”。", words: [["knee", "膝盖"]] },
          { who: "them", role: "邻居 Karen", en: "Oh no. You should try the chair yoga class at the community centre. It's really gentle.", zh: "哎呀。你可以试试社区中心的椅子瑜伽课，动作很温和。", note: "社区中心（community centre）有很多给长者的课程，比如瑜伽、太极、英语角。", words: [["chair yoga", "椅子瑜伽"], ["gentle", "温和的"]] },
          { who: "them", role: "邻居 Dave", en: "That's not a bad idea. Do I need to sign up?", zh: "这主意不错。需要报名吗？", words: [["sign up", "报名"]] },
          { who: "them", role: "邻居 Karen", en: "Yeah, you can register online or just ask at the front desk.", zh: "要的，可以在网上报，也可以直接去前台问。" },
          { who: "them", role: "邻居 Dave", en: "I'll stop by this week. Are you going to the farmers market on Saturday?", zh: "我这周过去问问。你星期六去农夫市集吗？", note: "stop by 是“顺路去一下”。farmers market 是本地农场来摆摊的市集，卖新鲜蔬果、面包、奶酪。" },
          { who: "them", role: "邻居 Karen", en: "Wouldn't miss it! The cheese guy has the best aged cheddar.", zh: "当然去！卖奶酪的那家陈年切达最好吃。", note: "Wouldn't miss it 是“一定去，绝不错过”。aged cheddar 是陈年切达奶酪，加拿大人很爱吃。" },
          { who: "them", role: "邻居 Dave", en: "Great, I'll see you there, then. Say hi to Tom for me.", zh: "好，那到时候见。替我向 Tom 问好。", note: "Say hi to ___ for me 是“替我向某某问好”。" },
          { who: "them", role: "邻居 Karen", en: "Will do. Take care of that knee!", zh: "一定。好好照顾你的膝盖！", note: "Will do 是“好的，我会的”。Take care 是“保重”。" }
        ]
      }
    ]
  }
];
