const LANG={en:'en',mr:'mr'};
let currentLang='en';

const PD={
  menstrual:{
    name:"The Menstrual Phase",nameMr:"मासिक धर्म",
    g:"🌑",bg:"linear-gradient(160deg,#0f0320 0%,#2a0845 40%,#0d0220 100%)",
    tag:"Dark Moon Season",tagMr:"अमावस्येचा काळ",
    essence:"The veil thins. What is no longer needed releases. This is winter within you. Not emptiness — primordial knowing.",
    essenceMr:"पडदा पातळ होतो. जे आता नको ते सुटते. हा तुमच्यातील हिवाळा आहे. रिकामेपण नाही — मूळ ज्ञान आहे.",
    orbits:[
      {icon:"🌑",label:"lunar phase",labelMr:"चंद्र अवस्था",val:"Dark Moon",valMr:"अमावस्या"},
      {icon:"🌬️",label:"dosha",labelMr:"दोष",val:"Vata",valMr:"वात"},
      {icon:"💧",label:"element",labelMr:"तत्त्व",val:"Water",valMr:"जल"}
    ],
    actions:[
      "Rest without guilt — this is biological intelligence.",
      "Journal or record your dreams. Your subconscious peaks now.",
      "One act of release: a letter you won't send, a feeling you let go.",
      "Warm soups, stewed roots. Nothing cold or raw.",
      "Cancel what can be cancelled. Protect your energy."
    ],
    actionsMr:[
      "अपराधभावाशिवाय विश्रांती घ्या — हे शरीराचे शहाणपण आहे.",
      "स्वप्ने लिहा. आत्ता तुमचे अवचेतन मन सर्वात जागृत आहे.",
      "एक सुटका करा — न पाठवलेले पत्र, एक भावना सोडा.",
      "गरम सूप, शिजवलेल्या भाज्या. थंड किंवा कच्चे काही नको.",
      "जे टाळता येईल ते टाळा. तुमची ऊर्जा जपा."
    ],
    wisdoms:[
      {sys:"Kabbalah",sysMr:"कबाला",g:"✶",head:"Binah — Understanding",headMr:"बिनाह — समज",
       body:"Binah is the great womb of the Tree of Life. You don't need to produce right now. You gestate.",
       bodyMr:"बिनाह हे जीवनाच्या वृक्षाचे महान गर्भ आहे. आत्ता निर्माण करण्याची गरज नाही. तुम्ही गर्भात आहात.",
       deeper:"The Kabbalists called Binah the 'dark womb of understanding.' Rest here. The lightning bolt has been received — now it takes form in the dark.",
       deeperMr:"कबालिस्टांनी बिनाहला 'समजाचे गर्भ' म्हटले. इथे विश्रांती घ्या. वीज मिळाली आहे — आता अंधारात आकार घेत आहे."},
      {sys:"Jungian",sysMr:"युंगियन",g:"◎",head:"The Crone — Hecate",headMr:"वृद्ध देवी — हेकाटे",
       body:"Jung called this the integration of the shadow. You are metabolising what was unlived this month. The Crone is the keeper of hard-won knowing.",
       bodyMr:"युंगने याला सावलीचे एकत्रीकरण म्हटले. तुम्ही या महिन्यात न जगलेले पचवत आहात. वृद्ध देवी कष्टाने मिळवलेल्या ज्ञानाची रक्षक आहे.",
       deeper:"The Self — the totality of the psyche — is most accessible during menstruation. The ego quiets. What surfaces in dreams is the Self speaking.",
       deeperMr:"स्वत्व — मनाची संपूर्णता — मासिक धर्मात सर्वात सहज मिळते. अहंकार शांत होतो. स्वप्नात येते ते स्वत्वाचे बोलणे."},
      {sys:"Ayurveda",sysMr:"आयुर्वेद",g:"◈",head:"Vata Season",headMr:"वात ऋतू",
       body:"Warm sesame oil, warm foods, rest. This is the time for abhyanga — self-massage. Avoid cold, raw, irregular schedules.",
       bodyMr:"गरम तिळाचे तेल, गरम जेवण, विश्रांती. हा अभ्यंगाचा काळ आहे — स्वमालिश. थंड, कच्चे, अनियमित टाळा.",
       deeper:"Vata governs movement and the nervous system. Ground it: routine, warmth, oil, silence. Shatavari and ashwagandha support Vata through this phase.",
       deeperMr:"वात हालचाल आणि मज्जासंस्था नियंत्रित करतो. त्याला स्थिर करा: दिनक्रम, उष्णता, तेल, शांतता. शतावरी आणि अश्वगंधा मदत करतात."},
      {sys:"Indigenous",sysMr:"आदिवासी ज्ञान",g:"◉",head:"Moon Time",headMr:"चंद्र काळ",
       body:"Many traditions called this the moon time — a period where women withdrew not as punishment but as reverence. Your intuition peaks. Dreams carry messages.",
       bodyMr:"अनेक परंपरांनी याला 'चंद्र काळ' म्हटले — स्त्रिया मागे गेल्या, शिक्षा म्हणून नाही, तर आदर म्हणून. अंतर्ज्ञान शिखरावर असते. स्वप्ने संदेश आणतात.",
       deeper:"In Lakota tradition, the menstruating woman was considered her most powerful spiritually — not her weakest. Her dreams were medicine for the community.",
       deeperMr:"लकोटा परंपरेत, मासिक धर्म असलेली स्त्री आध्यात्मिकदृष्ट्या सर्वात शक्तिशाली मानली जात होती. तिची स्वप्ने समाजासाठी औषध होती."}
    ],
    archetype:"The Wise One holds council.",archetypeMr:"ज्ञानी स्त्री सभा घेते.",
    archBody:"You are in the Crone-Priestess-Prophetess triad. Hecate at the crossroads. Kali at the threshold. Not destruction — transformation.",
    archBodyMr:"तुम्ही वृद्ध देवी-पुजारी-प्रेषित त्रिकोणात आहात. हेकाटे चौकात. काली उंबरठ्यावर. नाश नाही — परिवर्तन.",
    archTags:["Hecate","Kali","The Oracle","Oya","Persephone descending"],
    archTagsMr:["हेकाटे","काली","दैव-वाणी","ओया"],
    tensions:[
      {a:"wanting to produce",aMr:"निर्माण करायचे",b:"needing to rest",bMr:"विश्रांती हवी",pct:20},
      {a:"outer pressure",aMr:"बाहेरचा दाब",b:"inner pull inward",bMr:"आतील ओढ",pct:15},
      {a:"Vata agitation",aMr:"वात अस्वस्थता",b:"need for stillness",bMr:"शांततेची गरज",pct:30}
    ],
    dayNote:"Your body is doing profound work. The most revolutionary thing you can do today is rest.",
    dayNoteMr:"तुमचे शरीर खोल काम करत आहे. आज तुम्ही करू शकणारी सर्वात क्रांतिकारी गोष्ट म्हणजे विश्रांती.",
    rituals:{
      morning:["Warm sesame oil self-massage before bath","5 minutes of silence — no phone","Write one dream or image that arrived in sleep"],
      morningMr:["आंघोळीपूर्वी गरम तिळाच्या तेलाने मालिश","५ मिनिटे शांतता — फोन नको","झोपेत आलेले एक स्वप्न किंवा प्रतिमा लिहा"],
      day:["One slow task only — protect your energy","Warm soups, stewed roots, no raw food","Avoid making big decisions today"],
      dayR:["फक्त एक संथ काम — ऊर्जा जपा","गरम सूप, शिजवलेल्या भाज्या, कच्चे नको","आज मोठे निर्णय टाळा"],
      evening:["Warm bath with rock salt (sendha namak)","Journal: what am I releasing this cycle?","Legs up the wall for 10 minutes"],
      eveningMr:["सैंधव मिठाने गरम आंघोळ","लिहा: या पाळीत मी काय सोडत आहे?","भिंतीवर पाय ठेवून १० मिनिटे"]
    }
  },
  follicular:{
    name:"The Follicular Phase",nameMr:"नवीन सुरुवात",
    g:"🌒",bg:"linear-gradient(160deg,#0d1e3a 0%,#122d50 40%,#080f1e 100%)",
    tag:"Waxing Season",tagMr:"वाढत्या चंद्राचा काळ",
    essence:"Something wants to be born. Estrogen rises, curiosity opens like a window after rain. You are becoming again.",
    essenceMr:"काहीतरी जन्म घ्यायला तयार आहे. इस्ट्रोजेन वाढतो, कुतूहल पावसानंतरच्या खिडकीसारखे उघडते. तुम्ही पुन्हा तयार होत आहात.",
    orbits:[
      {icon:"🌒",label:"lunar phase",labelMr:"चंद्र अवस्था",val:"Waxing Crescent",valMr:"वाढता चंद्र"},
      {icon:"🌿",label:"dosha",labelMr:"दोष",val:"Kapha",valMr:"कफ"},
      {icon:"🌱",label:"element",labelMr:"तत्त्व",val:"Wood",valMr:"लाकूड"}
    ],
    actions:[
      "Start the thing you have been circling. A draft, a pitch, one brave message.",
      "Try one new physical practice. Your body is most receptive to learning now.",
      "Write what this cycle is actually for — not a to-do list, a meaning list.",
      "Go somewhere new, even briefly. Novelty feeds this phase.",
      "Clean and organise one space. Kapha builds better from order."
    ],
    actionsMr:[
      "ज्याभोवती फिरत होता ते सुरू करा. एक मसुदा, एक प्रस्ताव, एक धाडसाचा संदेश.",
      "एक नवीन शारीरिक सराव करून पाहा. आत्ता तुमचे शरीर शिकायला सर्वात तयार आहे.",
      "या पाळीचा अर्थ काय आहे ते लिहा — कामांची यादी नाही, अर्थाची यादी.",
      "कुठेतरी नवीन जा, थोडावेळही चालेल. नवीनपणा या टप्प्याला खाद्य देतो.",
      "एक जागा स्वच्छ करा. कफ व्यवस्थेतून चांगले बांधतो."
    ],
    wisdoms:[
      {sys:"Kabbalah",sysMr:"कबाला",g:"✶",head:"Yesod — Foundation",headMr:"येसोद — पाया",
       body:"Yesod is where dreams become blueprints. It collects the light from above and channels it into form below. This is the ideal phase for visioning.",
       bodyMr:"येसोद जिथे स्वप्ने आराखडे बनतात. वरून प्रकाश घेते आणि खाली रूप देते. हा दृष्टीकोनाचा आदर्श टप्पा आहे.",
       deeper:"During follicular phase, you are in Yesod — the template is forming. What you imagine clearly here has the best chance of reaching Malkuth (manifestation) by your next cycle.",
       deeperMr:"फॉलिक्युलर टप्प्यात, तुम्ही येसोदमध्ये आहात — साचा तयार होत आहे. इथे जे स्पष्टपणे कल्पना करता ते पुढील पाळीत साकार होण्याची सर्वाधिक शक्यता आहे."},
      {sys:"Ayurveda",sysMr:"आयुर्वेद",g:"◈",head:"Kapha Rising",headMr:"कफ उदय",
       body:"Kapha's building energy makes this ideal for new practices. Light cardio, fresh foods, bright flavors. Start what you intend to sustain.",
       bodyMr:"कफची निर्माण ऊर्जा हे नवीन सरावांसाठी आदर्श बनवते. हलका व्यायाम, ताजे अन्न, उजळ स्वाद. जे टिकवायचे ते सुरू करा.",
       deeper:"Kapha governs structure and stability. Its earth-water quality is the foundation on which Pitta and Vata will build later. Create sustainable routines now.",
       deeperMr:"कफ संरचना आणि स्थिरता नियंत्रित करतो. त्याची पृथ्वी-जल गुणवत्ता पाया आहे. आत्ता टिकाऊ दिनक्रम तयार करा."},
      {sys:"Jungian",sysMr:"युंगियन",g:"◎",head:"The Maiden — Persephone",headMr:"कुमारी — पर्सेफोन",
       body:"The anima emerges in her innocent, curious form. This is not naivety — it is the intelligence of new beginnings. You are willing to be a beginner again.",
       bodyMr:"अनिमा तिच्या निरागस, जिज्ञासू रूपात प्रकट होते. हे भोळेपण नाही — नवीन सुरुवातीची बुद्धिमत्ता आहे. तुम्ही पुन्हा नवशिके होण्यास तयार आहात.",
       deeper:"In follicular phase, the psyche genuinely has more neurological plasticity. New habits and thinking patterns have the best chance of taking root here.",
       deeperMr:"फॉलिक्युलर टप्प्यात, मनामध्ये खरोखरच अधिक न्यूरोलॉजिकल लवचिकता असते. नवीन सवयी आणि विचार पद्धती इथे सर्वात चांगल्या रुजतात."},
      {sys:"Indigenous",sysMr:"आदिवासी ज्ञान",g:"◉",head:"Spring Maiden",headMr:"वसंत कुमारी",
       body:"The return of the light-bearer, recognised across cultures. Many traditions mark this with ceremony, song, and the planting of seeds both literal and symbolic.",
       bodyMr:"प्रकाश-वाहकाचे परत येणे, सर्व संस्कृतींमध्ये ओळखले जाते. अनेक परंपरा यास समारंभ, गाणे आणि बियांच्या पेरणीने चिन्हांकित करतात.",
       deeper:"Celtic traditions called this Imbolc energy — the first stirrings of spring under still-frozen ground. The light is returning but the world does not know it yet. You are the first to feel it.",
       deeperMr:"सेल्टिक परंपरांनी याला इम्बोल्क ऊर्जा म्हटले — अजूनही गोठलेल्या जमिनीखाली वसंताची पहिली हालचाल. प्रकाश परत येत आहे पण जगाला अजून माहीत नाही. तुम्ही पहिल्यांदा जाणता."}
    ],
    archetype:"The Seeker steps into the unknown.",archetypeMr:"साधक अज्ञातात पाऊल टाकतो.",
    archBody:"Maiden energy — Brigid, Athena, Saraswati. The woman who begins without guarantees. Full of potential that has not yet chosen its shape.",
    archBodyMr:"कुमारी ऊर्जा — ब्रिजिड, अथेना, सरस्वती. खात्रीशिवाय सुरू करणारी स्त्री. अशा संभाव्यतेने भरलेली जिने अजून आपला आकार निवडला नाही.",
    archTags:["Brigid","Athena","Saraswati","Psyche","The Initiate"],
    archTagsMr:["ब्रिजिड","अथेना","सरस्वती","मनोविश्लेषण"],
    tensions:[
      {a:"wanting everything",aMr:"सगळे हवे",b:"need for focus",bMr:"एकाग्रतेची गरज",pct:65},
      {a:"Kapha inertia",aMr:"कफ जडत्व",b:"estrogen energy",bMr:"इस्ट्रोजेन ऊर्जा",pct:55},
      {a:"dreaming",aMr:"स्वप्न पाहणे",b:"starting",bMr:"सुरुवात करणे",pct:50}
    ],
    dayNote:"You are the seed before the shoot breaks surface. Act on the first feeling, before the mind talks you out of it.",
    dayNoteMr:"तुम्ही रोप जमिनीवर येण्यापूर्वीचे बीज आहात. पहिल्या भावनेवर कार्य करा, मन तुम्हाला परावृत्त करण्यापूर्वी.",
    rituals:{
      morning:["Cold water on face — activate Kapha","Set one clear intention for the day","5-minute movement — even dancing counts"],
      morningMr:["चेहऱ्यावर थंड पाणी — कफ जागृत करा","दिवसासाठी एक स्पष्ट हेतू ठरवा","५ मिनिटे हालचाल — नाचणेही चालेल"],
      day:["Say yes to novelty — new route, new approach","Eat light and fresh — salads, citrus, seeds","Make one call or send one message you have been delaying"],
      dayR:["नवीनपणाला होय म्हणा — नवा मार्ग, नवा दृष्टिकोन","हलके आणि ताजे खा — कोशिंबीर, लिंबूवर्गीय, बिया","एक फोन करा किंवा एक संदेश पाठवा जो थांबवला होता"],
      evening:["Read something that excites your mind","Write your week's vision — specifics, not wishes","To bed by 10:30 — Kapha needs its sleep"],
      eveningMr:["मनाला उत्साहित करणारे काहीतरी वाचा","या आठवड्याची दृष्टी लिहा — तपशील, इच्छा नाही","१०:३० पर्यंत झोपा — कफला झोप हवी"]
    }
  },
  ovulatory:{
    name:"The Ovulatory Phase",nameMr:"पूर्णत्व",
    g:"🌕",bg:"linear-gradient(160deg,#1a0f2e 0%,#320a50 40%,#100620 100%)",
    tag:"Full Moon Season",tagMr:"पौर्णिमेचा काळ",
    essence:"Peak. Radiance. You are magnetic right now — and some part of you already knows it.",
    essenceMr:"शिखर. तेज. तुम्ही आत्ता चुंबकीय आहात — आणि तुमचा एक भाग हे आधीच जाणतो.",
    orbits:[
      {icon:"🌕",label:"lunar phase",labelMr:"चंद्र अवस्था",val:"Full Moon",valMr:"पौर्णिमा"},
      {icon:"🔥",label:"dosha",labelMr:"दोष",val:"Pitta",valMr:"पित्त"},
      {icon:"✨",label:"element",labelMr:"तत्त्व",val:"Fire",valMr:"अग्नी"}
    ],
    actions:[
      "Do the hardest conversation, negotiation, or presentation this week.",
      "Record yourself — video, voice, writing. Your communication is sharpest now.",
      "Make the ask. Pitch the idea. Submit what is ready.",
      "Move your body with full intensity. Your resilience is highest.",
      "Watch your commitments. You will want to give everything. Don't."
    ],
    actionsMr:[
      "या आठवड्यात सर्वात कठीण संभाषण, वाटाघाटी किंवा सादरीकरण करा.",
      "स्वतःला रेकॉर्ड करा — व्हिडिओ, आवाज, लेखन. तुमचे संवाद आत्ता सर्वात तीक्ष्ण आहे.",
      "विनंती करा. कल्पना मांडा. तयार असलेले सादर करा.",
      "पूर्ण तीव्रतेने शरीर हलवा. तुमची लवचिकता आत्ता सर्वाधिक आहे.",
      "वचनबद्धतेकडे लक्ष द्या. सर्वकाही द्यायचे मन होईल. देऊ नका."
    ],
    wisdoms:[
      {sys:"Kabbalah",sysMr:"कबाला",g:"✶",head:"Tiferet — Beauty",headMr:"तिफेरेत — सौंदर्य",
       body:"Tiferet sits at the heart of the Tree of Life. Balance and radiance — where divine light is most perfectly expressed. You are Tiferet this week.",
       bodyMr:"तिफेरेत जीवनाच्या वृक्षाच्या केंद्रात आहे. समतोल आणि तेज — जिथे दैवी प्रकाश सर्वात परिपूर्णपणे व्यक्त होतो. तुम्ही या आठवड्यात तिफेरेत आहात.",
       deeper:"Tiferet is also the 'Sun' of the Tree of Life. When you are here (ovulation), you naturally radiate. People are drawn to you without you trying. This is not performance. It is physics.",
       deeperMr:"तिफेरेत जीवनाच्या वृक्षाचा 'सूर्य' देखील आहे. जेव्हा तुम्ही इथे असता (ओव्हुलेशन), तुम्ही नैसर्गिकपणे तळपता. लोक प्रयत्नाशिवाय तुमच्याकडे आकर्षित होतात."},
      {sys:"Ayurveda",sysMr:"आयुर्वेद",g:"◈",head:"Pitta Peak",headMr:"पित्त शिखर",
       body:"Pitta needs channeling, not suppressing. Eat cooling foods alongside this fire: coconut, cucumber, mint. Move with intensity — then rest fully.",
       bodyMr:"पित्ताला दिशा द्यायची आहे, दाबायचे नाही. या अग्नीसोबत थंड अन्न खा: नारळ, काकडी, पुदिना. तीव्रतेने हलवा — मग पूर्णपणे विश्रांती घ्या.",
       deeper:"The Ayurvedic practice for ovulation: vigorous morning movement, cooling midday foods, and an absolute commitment to one hour of stillness in the afternoon. Fire needs a container.",
       deeperMr:"ओव्हुलेशनसाठी आयुर्वेदिक सराव: जोरदार सकाळी हालचाल, दुपारी थंड अन्न, आणि दुपारी एक तास शांततेसाठी वचनबद्धता. अग्नीला भांडे लागते."},
      {sys:"Jungian",sysMr:"युंगियन",g:"◎",head:"The Mother — Demeter",headMr:"माता — डिमीटर",
       body:"Full creative power. The anima at her most visible and magnetic. Watch the shadow: the urge to give everything to everyone.",
       bodyMr:"पूर्ण सर्जनशील शक्ती. अनिमा तिच्या सर्वात दृश्यमान आणि चुंबकीय रूपात. सावलीकडे लक्ष द्या: सर्वांना सर्वकाही देण्याची इच्छा.",
       deeper:"The shadow of ovulation: the Mother archetype in its shadow form loses herself in giving. Your magnetism draws people. Discernment about who gets access is not selfishness — it is wisdom.",
       deeperMr:"ओव्हुलेशनची सावली: मातृ आर्किटाइप सावलीत स्वतःला देण्यात हरवते. तुमचे चुंबकत्व लोकांना आकर्षित करते. कोणाला प्रवेश मिळतो याबद्दल विवेक म्हणजे स्वार्थ नाही — ते शहाणपण आहे."},
      {sys:"Indigenous",sysMr:"आदिवासी ज्ञान",g:"◉",head:"Council Season",headMr:"सभेचा हंगाम",
       body:"In many traditions, this was when women led councils and made decisions for the tribe. Your words carry weight this week. Use them.",
       bodyMr:"अनेक परंपरांमध्ये, हाच काळ होता जेव्हा स्त्रिया सभा चालवत आणि जमातीसाठी निर्णय घेत. या आठवड्यात तुमच्या शब्दांना वजन आहे. त्यांचा वापर करा.",
       deeper:"In the tradition of the Haudenosaunee (Iroquois), clan mothers held ultimate decision-making authority. During ovulation, you are in your clan mother season. Speak what is true.",
       deeperMr:"हौडेनोशौनी परंपरेत, कुळ माता सर्वोच्च निर्णय-निर्माण अधिकार ठेवत. ओव्हुलेशनमध्ये, तुम्ही तुमच्या कुळ मातेच्या हंगामात आहात."}
    ],
    archetype:"The Queen steps forward.",archetypeMr:"राणी पुढे येते.",
    archBody:"Tiferet made flesh. Isis, Aphrodite, Lakshmi — not objects of desire but sovereign generators of life force. Power that does not need to announce itself.",
    archBodyMr:"तिफेरेत देहात. इसिस, एफ्रोडाइट, लक्ष्मी — इच्छेच्या वस्तू नाही तर जीवन शक्तीचे सार्वभौम निर्माते. अशी शक्ती जिला स्वतःची घोषणा करण्याची गरज नाही.",
    archTags:["Isis","Aphrodite","Lakshmi","Durga","Freya"],
    archTagsMr:["इसिस","एफ्रोडाइट","लक्ष्मी","दुर्गा","फ्रेया"],
    tensions:[
      {a:"expansion",aMr:"विस्तार",b:"discernment",bMr:"विवेक",pct:75},
      {a:"Pitta fire",aMr:"पित्त अग्नी",b:"need for cooling",bMr:"थंडाव्याची गरज",pct:80},
      {a:"giving everything",aMr:"सर्वकाही देणे",b:"protecting reserves",bMr:"साठा जपणे",pct:60}
    ],
    dayNote:"This is your most powerful week. Do not spend it being polite about things that matter.",
    dayNoteMr:"हा तुमचा सर्वात शक्तिशाली आठवडा आहे. महत्त्वाच्या गोष्टींबद्दल विनम्र राहण्यात तो घालवू नका.",
    rituals:{
      morning:["Vigorous movement — run, dance, lift","Cooling breakfast: coconut, cucumber, fresh fruit","Set your one non-negotiable for the day"],
      morningMr:["जोरदार हालचाल — धावा, नाचा, उचला","थंड नाश्ता: नारळ, काकडी, ताजी फळे","दिवसासाठी एक न-वाटाघाटी गोष्ट ठरवा"],
      day:["Schedule high-stakes interactions now — you are at peak eloquence","Drink cold water with lemon — cool the Pitta","One hour of pure creative output — no interruptions"],
      dayR:["आत्ता महत्त्वाचे संवाद शेड्यूल करा — तुम्ही शिखरावर आहात","लिंबूसह थंड पाणी पिा — पित्त थंड करा","एक तास शुद्ध सर्जनशील आउटपुट — व्यत्यय नाही"],
      evening:["Notice who drained you today — this is information","Gentle yoga or stretching — contain the fire","Write: what did I offer? What do I want to keep for myself?"],
      eveningMr:["आज कोणी तुम्हाला थकवले ते लक्षात घ्या — हे माहिती आहे","हळुवार योग किंवा स्ट्रेचिंग — अग्नी आवरा","लिहा: मी काय दिले? स्वतःसाठी काय ठेवायचे?"]
    }
  },
  luteal:{
    name:"The Luteal Phase",nameMr:"आतील आवाज",
    g:"🌗",bg:"linear-gradient(160deg,#1a0808 0%,#320a18 40%,#100408 100%)",
    tag:"Waning Season",tagMr:"क्षीण चंद्राचा काळ",
    essence:"The truth-teller arrives. Your tolerance for what is false decreases sharply. This is not PMS. This is discernment.",
    essenceMr:"सत्य-वक्ता येतो. जे खोटे आहे त्याची सहनशीलता झपाट्याने कमी होते. हे PMS नाही. हा विवेक आहे.",
    orbits:[
      {icon:"🌗",label:"lunar phase",labelMr:"चंद्र अवस्था",val:"Waning Moon",valMr:"क्षीण चंद्र"},
      {icon:"⚡",label:"dosha",labelMr:"दोष",val:"Vata-Pitta",valMr:"वात-पित्त"},
      {icon:"🔩",label:"element",labelMr:"तत्त्व",val:"Metal",valMr:"धातू"}
    ],
    actions:[
      "Let the irritation be information, not performance. What is it pointing to?",
      "Finish one thing that has been half-done for too long. Just one.",
      "Reduce input: less scrolling, phone off earlier.",
      "Cook something slow and nourishing. The act itself is medicine.",
      "Write the honest list: what is working, what is not. Don't send it yet."
    ],
    actionsMr:[
      "चिडचिड माहिती असू द्या, प्रदर्शन नाही. ती कशाकडे निर्देश करत आहे?",
      "खूप काळापासून अर्धवट राहिलेली एक गोष्ट पूर्ण करा. फक्त एक.",
      "इनपुट कमी करा: कमी स्क्रोलिंग, लवकर फोन बंद.",
      "काहीतरी संथ आणि पोषण देणारे शिजवा. हीच क्रिया औषध आहे.",
      "प्रामाणिक यादी लिहा: काय काम करत आहे, काय नाही. अजून पाठवू नका."
    ],
    wisdoms:[
      {sys:"Kabbalah",sysMr:"कबाला",g:"✶",head:"Geburah — Severity",headMr:"गेबुराह — कठोरता",
       body:"Geburah is the sephira of sacred pruning. The tree cuts away what no longer serves its growth — not from cruelty but from wisdom.",
       bodyMr:"गेबुराह पवित्र छाटणीचा सेफिरा आहे. झाड जे आता वाढीस उपयोगी नाही ते कापते — क्रूरतेने नाही तर शहाणपणाने.",
       deeper:"Geburah is the left hand of God — the necessary force that prevents the Tree of Life from collapsing under its own excess. You are the instrument of that balance right now. What needs cutting?",
       deeperMr:"गेबुराह देवाचा डावा हात आहे — जीवनाच्या वृक्षाला स्वतःच्या अतिरेकाने कोसळण्यापासून रोखणारी आवश्यक शक्ती. तुम्ही आत्ता त्या संतुलनाचे साधन आहात."},
      {sys:"Ayurveda",sysMr:"आयुर्वेद",g:"◈",head:"Vata-Pitta Mixed",headMr:"वात-पित्त मिश्रण",
       body:"Warm grounding foods, reduced stimulants, early sleep. Ashwagandha, shatavari, warm ghee. Your nervous system has less buffer right now.",
       bodyMr:"गरम, स्थिर करणारे अन्न, कमी उत्तेजक, लवकर झोप. अश्वगंधा, शतावरी, गरम तूप. तुमची मज्जासंस्था आत्ता कमी बफर आहे.",
       deeper:"The Vata-Pitta combination in late luteal is the most demanding. Triphala before bed, oil on the feet, screen-free evenings, no stimulating conversations after 6pm.",
       deeperMr:"उशिरा ल्युटीयलमधील वात-पित्त संयोजन सर्वात कठीण आहे. झोपण्यापूर्वी त्रिफळा, पायांवर तेल, स्क्रीन-मुक्त संध्याकाळ, संध्याकाळी ६ नंतर उत्तेजक संभाषण नाही."},
      {sys:"Jungian",sysMr:"युंगियन",g:"◎",head:"The Enchantress — Medea",headMr:"मंत्रिणी — मेडिया",
       body:"The shadow is most active and least patient. The irritability of late luteal is information — the ruthless truth-teller. Mine the anger. Do not perform it.",
       bodyMr:"सावली सर्वात सक्रिय आणि सर्वात अधीर आहे. उशिरा ल्युटीयलची चिडचिड माहिती आहे — निर्दयी सत्य-वक्ता. रागाला खाणा म्हणून वापरा. तो दाखवू नका.",
       deeper:"The shadow contains not just darkness but unlived potential. The Enchantress has been watching, noting every compromise. She is angry because she is accurate.",
       deeperMr:"सावलीत फक्त अंधार नाही तर न जगलेली संभाव्यता आहे. मंत्रिणी पाहत होती, प्रत्येक तडजोड नोंदवत होती. ती रागावली आहे कारण ती अचूक आहे."},
      {sys:"Indigenous",sysMr:"आदिवासी ज्ञान",g:"◉",head:"Medicine Woman",headMr:"वैद्य स्त्री",
       body:"The late-cycle woman is the medicine woman — her visions sharpen, her intuition becomes diagnostic. The irritation is often visionary clarity in disguise.",
       bodyMr:"उशिरा-पाळीची स्त्री वैद्य स्त्री आहे — तिची दृष्टी तीक्ष्ण होते, तिचे अंतर्ज्ञान निदानात्मक बनते. चिडचिड बऱ्याचदा दृष्टीकोनाची स्पष्टता वेशात असते.",
       deeper:"In many indigenous traditions, the premenstrual woman was considered to be in a liminal state — between the worlds. Her dreams and sharp perceptions were treated as transmissions, not symptoms.",
       deeperMr:"अनेक आदिवासी परंपरांमध्ये, मासिक पूर्व स्त्री लिमिनल अवस्थेत मानली जात होती — जगांमध्ये. तिची स्वप्ने आणि तीक्ष्ण धारणा लक्षणे नाही, संदेश मानले जात होते."}
    ],
    archetype:"The Truth-Teller will not be silenced.",archetypeMr:"सत्य-वक्ता गप्प राहणार नाही.",
    archBody:"Medea, Sekhmet, Lilith, Baba Yaga — figures historically pathologised whose actual function is truth-revelation. She is terrifying because she is accurate.",
    archBodyMr:"मेडिया, सेखमेट, लिलिथ, बाबा यागा — ऐतिहासिकदृष्ट्या रोगग्रस्त मानलेल्या व्यक्ती ज्यांचे खरे कार्य सत्य-प्रकटीकरण आहे. ती भयावह आहे कारण ती अचूक आहे.",
    archTags:["Sekhmet","Lilith","Baba Yaga","Medea","Kali","The Witness"],
    archTagsMr:["सेखमेट","लिलिथ","बाबा यागा","मेडिया","काली","साक्षीदार"],
    tensions:[
      {a:"clarity wanting to speak",aMr:"बोलू इच्छिणारी स्पष्टता",b:"wisdom about timing",bMr:"वेळेबद्दल शहाणपण",pct:70},
      {a:"Vata anxiety",aMr:"वात चिंता",b:"Pitta intensity",bMr:"पित्त तीव्रता",pct:55},
      {a:"world's demands",aMr:"जगाच्या मागण्या",b:"your actual capacity",bMr:"तुमची खरी क्षमता",pct:85}
    ],
    dayNote:"The irritation is a compass. It is pointing at something true. You don't have to act on it yet — but you do have to hear it.",
    dayNoteMr:"चिडचिड एक होकायंत्र आहे. ते खऱ्या गोष्टीकडे निर्देश करत आहे. तुम्हाला अजून कार्य करण्याची गरज नाही — पण ऐकणे आवश्यक आहे.",
    rituals:{
      morning:["Slow start — no news or social before 9am","Warm lemon water with a pinch of rock salt","Write: what am I noticing that I have not said out loud?"],
      morningMr:["संथ सुरुवात — सकाळी ९ पूर्वी बातम्या किंवा सोशल नाही","चिमूटभर सैंधव मिठासह गरम लिंबू पाणी","लिहा: मी काय लक्षात घेत आहे जे मोठ्याने सांगितले नाही?"],
      day:["Completion tasks only — nothing new today","Eat warm, grounding foods: rice, dal, sweet potato, ghee","One declutter action — a drawer, a folder, a conversation"],
      dayR:["फक्त पूर्णतेची कामे — आज काही नवीन नाही","गरम, स्थिर करणारे अन्न: भात, डाळ, रताळे, तूप","एक साफसफाई क्रिया — एक ड्रॉवर, एक फोल्डर, एक संभाषण"],
      evening:["Phone off by 8pm — non-negotiable","Feet in warm water with a little til oil","Write the honest list: what is working, what is not. Do not send it."],
      eveningMr:["रात्री ८ पर्यंत फोन बंद — न-वाटाघाटी","थोड्या तिळाच्या तेलासह गरम पाण्यात पाय","प्रामाणिक यादी लिहा: काय काम करत आहे, काय नाही. पाठवू नका."]
    }
  }
};

function getPhase(day,len){
  const n=Math.round((day/len)*28);
  if(n<=6)return'menstrual';
  if(n<=13)return'follicular';
  if(n<=17)return'ovulatory';
  return'luteal';
}

function calcDay(startStr,len){
  const s=new Date(startStr),t=new Date();
  t.setHours(0,0,0,0);s.setHours(0,0,0,0);
  let d=Math.floor((t-s)/86400000)+1;
  if(d<1)d=1;
  return((d-1)%len)+1;
}

function getLunar(){
  const ref=new Date('2024-01-11');
  const l=((( new Date()-ref)/(864e5)%29.53)+29.53)%29.53;
  if(l<1.85)return{n:"New Moon",nMr:"अमावस्या",idx:0};
  if(l<7.38)return{n:"Waxing Crescent",nMr:"शुक्ल द्वितीया",idx:3};
  if(l<9.22)return{n:"First Quarter",nMr:"अष्टमी",idx:6};
  if(l<14.77)return{n:"Waxing Gibbous",nMr:"शुक्ल त्रयोदशी",idx:9};
  if(l<16.61)return{n:"Full Moon",nMr:"पौर्णिमा",idx:14};
  if(l<22.15)return{n:"Waning Gibbous",nMr:"कृष्ण त्रयोदशी",idx:11};
  if(l<23.99)return{n:"Last Quarter",nMr:"कृष्ण अष्टमी",idx:8};
  return{n:"Waning Crescent",nMr:"कृष्ण द्वितीया",idx:4};
}

const DAYS_EN=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const DAYS_MR=["रवि","सोम","मंगळ","बुध","गुरु","शुक्र","शनि"];
const MOONS=["🌑","🌒","🌓","🌔","🌕","🌖","🌗","🌘"];
