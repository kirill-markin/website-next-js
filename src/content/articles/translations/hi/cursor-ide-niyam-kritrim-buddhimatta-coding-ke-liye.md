---
keywords: [
  "कर्सर आईडीई",
  "कृत्रिम बुद्धिमत्ता",
  "एकीकृत विकास परिवेश",
  "कर्सर नियम",
  "कोडिंग सहायक",
  "एआई कोडिंग",
  "प्रोग्रामिंग सहायता",
  "स्वचालित कोड निर्माण",
  "कोड विकास",
  "एआई प्रोग्रामिंग टूल"
]
title: "कर्सर आईडीई नियम: कृत्रिम बुद्धिमत्ता कोडिंग के लिए दिशानिर्देश"
date: 2025-05-09
description: "मेरे युद्ध-परीक्षित कर्सर आईडीई नियम जो अनुकूलित शैली, त्रुटि प्रबंधन और कार्यप्रवाह पैटर्न के साथ एआई कोडिंग को बढ़ाते हैं, जिससे सुसंगत परिणाम मिलते हैं।"
tags: [
  "उत्पादकता", 
  "कर्सर-आईडीई", 
  "एआई", 
  "एलएलएम"
]
publish: true
thumbnailUrl: "/articles/cursor-ide-rules-for-ai.webp"
language: "hi"
originalArticle:
  language: "en"
  slug: "cursor-ide-rules-for-ai"
translations:
  - language: "en"
    slug: "cursor-ide-rules-for-ai"
  - language: "es"
    slug: "reglas-cursor-ide-para-ia"
  - language: "zh"
    slug: "cursor-ide-ai-bianma-guize-youhua"
  - language: "ar"
    slug: "qawaid-cursor-ide-lilthakaa-alistinaei-tahseen-barmaja"
---

# कर्सर आईडीई नियम: कृत्रिम बुद्धिमत्ता कोडिंग के लिए दिशानिर्देश 

कर्सर आईडीई में तीन स्तरों पर नियम लागू किए जाते हैं:

1. कर्सर आईडीई सेटिंग्स में एआई के लिए नियम - आधार नियम जो सभी प्रोजेक्ट्स पर वैश्विक रूप से लागू होते हैं
2. रिपॉजिटरी रूट में `.cursorrules` फ़ाइल - रिपॉजिटरी-विशिष्ट कर्सर प्रोजेक्ट नियम
3. `.cursor/rules/*.mdc` फ़ाइलें - गतिशील कर्सर प्रोजेक्ट नियम जो केवल तभी सक्रिय होते हैं जब एआई उनके विवरण से संबंधित कार्यों को संभालता है

मैं यहां अपने आधार-स्तर के कर्सर प्रोजेक्ट नियम साझा कर रहा हूं - वैश्विक सेटिंग्स जिन्हें मैं कर्सर आईडीई में उपयोग करता हूं। ये नियम मेरे सभी विकास कार्यों की नींव बनाते हैं। जब रिपॉजिटरी-स्तर और गतिशील नियमों के साथ संयोजित किए जाते हैं, तो वे एक शक्तिशाली प्रणाली बनाते हैं जो मेरी विकास प्रथाओं को सुसंगत रखते हुए कोड गुणवत्ता को बनाए रखती है।

## इष्टतम एआई कोडिंग प्रदर्शन के लिए कर्सर नियम कैसे कॉन्फ़िगर करें

कर्सर -> सेटिंग्स -> कर्सर सेटिंग्स -> एआई के लिए नियम:

```markdown
<cursorrules_instructions_to_the_dialog>

<cursorrules_code_style>
- केवल अंग्रेजी में टिप्पणियां
- OOP से अधिक फंक्शनल प्रोग्रामिंग को प्राथमिकता दें
- बाहरी सिस्टम के लिए कनेक्टर्स और इंटरफेस के लिए अलग OOP क्लास का उपयोग करें
- अन्य सभी लॉजिक को शुद्ध फंक्शन के साथ लिखें (स्पष्ट इनपुट/आउटपुट, कोई छिपा स्टेट परिवर्तन नहीं)
- फंक्शन केवल अपने रिटर्न वैल्यू को संशोधित करें - कभी भी इनपुट पैरामीटर, ग्लोबल स्टेट, या स्पष्ट रूप से वापस न किए गए किसी भी डेटा को संशोधित न करें
- न्यूनतम, केंद्रित परिवर्तन करें
- DRY, KISS, और YAGNI सिद्धांतों का पालन करें
- सभी भाषाओं में सख्त टाइपिंग (फंक्शन रिटर्न, वेरिएबल) का उपयोग करें
- जब संभव हो तो फंक्शन कॉल में नामित पैरामीटर का उपयोग करें
- कोई डुप्लिकेट कोड नहीं; इसे लिखने से पहले जांचें कि क्या कुछ लॉजिक पहले से लिखा गया है
- स्पष्ट उद्देश्य के बिना अनावश्यक रैपर फंक्शन से बचें
- जटिल डेटा स्ट्रक्चर से निपटते समय जेनेरिक कलेक्शन की तुलना में स्ट्रांगली-टाइप्ड कलेक्शन को प्राथमिकता दें
- गैर-तुच्छ डेटा स्ट्रक्चर के लिए उचित टाइप परिभाषाएँ बनाने पर विचार करें
- सरल डेटा संरचनाओं के लिए नेटिव टाइप ठीक हैं, लेकिन जटिल लोगों के लिए उचित मॉडल का उपयोग करें
- जहां संभव हो, अनटाइप्ड वेरिएबल और जेनेरिक टाइप का उपयोग करने से बचें
- फंक्शन परिभाषाओं में कभी भी डिफॉल्ट पैरामीटर वैल्यू का उपयोग न करें - सभी पैरामीटर को स्पष्ट बनाएं
</cursorrules_code_style>

<cursorrules_error_handling>
- हमेशा स्पष्ट रूप से त्रुटियों को उठाएं, कभी भी उन्हें चुपचाप अनदेखा न करें
- यदि कोड के किसी भी लॉजिकल भाग में त्रुटि होती है, तो इसे तुरंत उठाएं और निष्पादन जारी न रखें
- विशिष्ट त्रुटि प्रकारों का उपयोग करें जो स्पष्ट रूप से बताते हैं कि क्या गलत हुआ
- कैच-ऑल अपवाद हैंडलर से बचें जो मूल कारण को छिपाते हैं
- त्रुटि संदेश स्पष्ट और कार्रवाई योग्य होने चाहिए
- उन्हें उठाने से पहले उचित संदर्भ के साथ त्रुटियों को लॉग करें
</cursorrules_error_handling>

<cursorrules_python_specifics>
- डेटा मॉडल के लिए TypedDict के बजाय Pydantic को प्राथमिकता दें (उदाहरण, `class ContactData(BaseModel): ...`)
- `Any` और `@staticmethod` से बचें
- जब संभव हो तो `requirements.txt` के बजाय `pyproject.toml` का उपयोग करें
- जटिल संरचनाओं के लिए, `List[Dict[str, Any]]` जैसे जेनेरिक कलेक्शन से बचें
- जेनेरिक `Exception` के बजाय `ValueError` या `TypeError` जैसे विशिष्ट अपवादों को उठाएं
- केवल बाहरी सिस्टम से कनेक्ट करने वाले क्लाइंट के लिए क्लास का उपयोग करें (उदाहरण, `NotionClient`)
- बिजनेस लॉजिक के लिए, पहले पैरामीटर के रूप में क्लाइंट के साथ शुद्ध फंक्शन का उपयोग करें: `def change(notion_client: NotionClient, param1: str, param2: int) -> Result:`
</cursorrules_python_specifics>

<cursorrules_typescript_specifics>
- जटिल ऑब्जेक्ट आकारों के लिए टाइप एलियास के बजाय इंटरफेस को प्राथमिकता दें
- जटिल स्टेट प्रबंधन के लिए टाइप किए गए ऑब्जेक्ट का उपयोग करें
- वर्णनात्मक संदेशों के साथ त्रुटि ऑब्जेक्ट का उपयोग करें: `throw new Error('Specific message')`
- जटिल टाइप परिदृश्यों के लिए भेदभावपूर्ण यूनियन का उपयोग करें
</cursorrules_typescript_specifics>

<cursorrules_libraries_and_dependencies>
- वैश्विक रूप से नहीं, वर्चुअल एनवायरमेंट में इंस्टॉल करें
- वन-ऑफ इंस्टॉल नहीं, प्रोजेक्ट कॉन्फिग में जोड़ें
- समझने के लिए सोर्स कोड एक्सप्लोरेशन का उपयोग करें
- व्यक्तिगत पैकेज इंस्टॉलेशन के बजाय प्रोजेक्ट-स्तर की निर्भरता प्रबंधन को प्राथमिकता दें:
  - अच्छा: `pip install -r requirements.txt`
  - बेहतर: आधुनिक Python पैकेजिंग के साथ `pyproject.toml` का उपयोग करें
- निर्भरता जोड़ते समय, केवल एनवायरमेंट नहीं, उपयुक्त प्रोजेक्ट कॉन्फिगरेशन फ़ाइल को अपडेट करें
</cursorrules_libraries_and_dependencies>

<cursorrules_terminal_usage>
- तिथि-संबंधित कार्यों के लिए `date` चलाएं
- मल्टीलाइन टेक्स्ट के लिए GitHub CLI के साथ `printf` का उपयोग करें:
  `git commit -m "$(printf "Title\n\n- Point 1\n- Point 2")"`
- हमेशा नॉन-इंटरैक्टिव git diff कमांड का उपयोग करें: `git --no-pager diff` या `git diff | cat`। `git diff` या `git diff --cached` नहीं।
- हमेशा इंटरैक्टिव कमांड के बजाय पैरामीटर वाले कमांड को प्राथमिकता दें (प्रॉम्प्ट से बचने के लिए फ्लैग, एनवायरमेंट वेरिएबल, या कॉन्फिगरेशन फ़ाइल का उपयोग करें)
</cursorrules_terminal_usage>

<cursorrules_planning_practices>
- उपयोगकर्ता आपसे फीचर इम्प्लीमेंटेशन के लिए एक योजना बनाने के लिए कह सकता है
- आपको एक temp डायरेक्टरी बनानी चाहिए
- आपको temp डायरेक्टरी में फीचर प्लान के साथ एक मार्कडाउन फ़ाइल बनानी चाहिए
- इस फीचर प्लान फ़ाइल में निम्नलिखित सेक्शन होने चाहिए:
  1. फीचर से संबंधित वर्तमान स्थिति का अवलोकन
  2. फीचर की अंतिम स्थिति का अवलोकन
  3. सभी फ़ाइलों की सूची जिन्हें क्या बदलना है, उसके साथ टेक्स्ट विवरण (कोड नहीं)
  4. 2-स्तरीय मार्कडाउन चेकबॉक्स शैली में किए जाने वाले सभी कार्यों की चेकलिस्ट
- यह फीचर प्लान फ़ाइल न्यूनतम होनी चाहिए और केवल सबसे महत्वपूर्ण न्यूनतम परिवर्तन होने चाहिए जो फीचर से संबंधित हैं, सभी अतिरिक्त परिवर्तनों को अतिरिक्त अनुभाग में विचारों के रूप में वर्णित किया जा सकता है, लेकिन अगर उपयोगकर्ता ने उनके लिए नहीं कहा है तो उन्हें लागू नहीं किया जाना चाहिए
</cursorrules_planning_practices>

<cursorrules_repository_practices>
- अगर `.cursorrules` फ़ाइल नहीं है तो `README.md` पढ़ें
- काम करने से पहले प्रोजेक्ट का सारांश बनाएं
</cursorrules_repository_practices>

<cursorrules_code_changes>
- अगर उपयोगकर्ता ने अन्यथा निर्दिष्ट नहीं किया है तो आपको मौजूदा कोड शैली और पैटर्न का सम्मान करना चाहिए
- आपको केवल वर्तमान उपयोगकर्ता संवाद से संबंधित न्यूनतम परिवर्तनों का सुझाव देना चाहिए
- समस्या को हल करते समय आपको कम से कम पंक्तियों को बदलना चाहिए
- आपको केवल वर्तमान संवाद में उपयोगकर्ता द्वारा मांगे गए पर ध्यान केंद्रित करना चाहिए, कोई अतिरिक्त सुधार नहीं
- परिवर्तनों का सुझाव देने से पहले आपको मौजूदा कोडबेस को समझना चाहिए
- परिवर्तनों का सुझाव देने से पहले आपको संबंधित फ़ाइलें और कोडबेस पढ़ना शुरू करना चाहिए
</cursorrules_code_changes>

</cursorrules_instructions_to_the_dialog>
```

![कर्सर आईडीई वैश्विक नियम सेटिंग्स पैनल में कॉन्फ़िगरेशन](/articles/cursor-ide-rules-global.webp)

## बहु-स्तरीय कर्सर प्रोजेक्ट नियम रणनीति के साथ दक्षता अधिकतम करना

कर्सर आईडीई की एआई सुविधाओं के साथ काम करते समय, मैंने पाया है कि सभी तीन स्तरों पर कर्सर प्रोजेक्ट नियमों को अनुकूलित करना महत्वपूर्ण है। मुख्य अंतर्दृष्टि? प्रत्येक संवाद में भाषा मॉडल को भेजे गए टोकन (प्रतीकों) की संख्या को कम करें। संदर्भ के लिए कम टोकन का मतलब है गुणवत्तापूर्ण प्रतिक्रियाओं को उत्पन्न करने के लिए अधिक क्षमता।

कर्सर में कर्सर प्रोजेक्ट नियम कैसे काम करते हैं, इस बारे में अधिक जानकारी के लिए, [एआई के लिए नियमों पर आधिकारिक कर्सर दस्तावेज़ीकरण](https://docs.cursor.com/context/rules) देखें।

### कर्सर प्रोजेक्ट नियमों के लिए 3-चरण कार्यान्वयन प्रवाह

1. **केवल आईडीई-स्तर की सेटिंग्स से शुरू करें**  
   मैं आधारभूत प्राथमिकताओं को स्थापित करने के लिए वैश्विक कर्सर आईडीई सेटिंग्स से शुरू करता हूं। यह मुझे अपने रिपॉजिटरी को अव्यवस्थित किए बिना विभिन्न नियम सूत्रणों के साथ प्रयोग करने देता है। मैं इस स्तर को वास्तव में सार्वभौमिक कर्सर प्रोजेक्ट नियमों के लिए आरक्षित रखता हूं जो मेरे सभी कोडिंग कार्यों पर लागू होते हैं।

2. **प्रोजेक्ट-विशिष्ट प्रोजेक्ट नियमों को रिपॉजिटरी स्तर पर ले जाएं**  
   जब मैं किसी विशेष कोडबेस के लिए विशिष्ट पैटर्न देखता हूं या अपने टीम के साथियों के साथ अपने एआई मार्गदर्शन को साझा करना चाहता हूं, तो मैं इन कर्सर प्रोजेक्ट नियमों को रिपॉजिटरी रूट में `.cursorrules` फ़ाइल में ले जाता हूं। यह अपनी वैश्विक सेटिंग्स को दुबला रखते हुए एक साझा समझ बनाता है।

3. **जब आवश्यक हो तो संदर्भ-जागरूक प्रोजेक्ट नियमों में विभाजित करें**  
   अगर मेरी `.cursorrules` फ़ाइल अत्यधिक बड़ी हो जाती है, तो मैं इसे `.cursor/*.mdc` फ़ाइलों में विभाजित कर देता हूं। यह जरूरत पड़ने पर केवल प्रासंगिक कर्सर प्रोजेक्ट नियमों को सक्रिय करके टोकन उपयोग को कम करता है। यह भाषा मॉडल को अप्रासंगिक दिशानिर्देशों के बंडल को याद रखने के बजाय मेरे विशिष्ट कार्य के बारे में सोचने के लिए अधिक मानसिक स्थान देने जैसा है।

मेरा लक्ष्य सरल है: एआई सहायक के साथ किसी भी बातचीत में, उसे उन सूचनाओं के लिए अपनी क्षमता बर्बाद किए बिना मददगार होने के लिए बस पर्याप्त संदर्भ दें, जिनकी उसे अभी जरूरत नहीं है।

## उत्पादन रिपॉजिटरी से वास्तविक दुनिया के कर्सर प्रोजेक्ट नियम उदाहरण

यह दिखाने के लिए कि मैं विभिन्न कोडबेस में कर्सर प्रोजेक्ट नियमों को कैसे लागू करता हूं, यहां कुछ वास्तविक उदाहरण दिए गए हैं:

### रिपॉजिटरी-स्तर .cursorrules फ़ाइलें: संरचना और कार्यान्वयन

मेरी `.cursorrules` फ़ाइलें एआई सहायकों के लिए विशेष रूप से डिज़ाइन की गई README.md की तरह काम करती हैं। वे प्रोजेक्ट के उद्देश्य, आर्किटेक्चर और कोडिंग पैटर्न के बारे में संदर्भ प्रदान करते हैं।

![रिपॉजिटरी-स्तर .cursorrules फ़ाइल उदाहरण](/articles/cursor-ide-rules-repo.webp)

#### कर्सर प्रोजेक्ट नियमों के साथ उत्पादन रिपॉजिटरी उदाहरण

1. **[repo-to-text](https://github.com/kirill-markin/repo-to-text/blob/main/.cursorrules)**: रिपॉजिटरी को टेक्स्ट में परिवर्तित करने के लिए यह उपयोगिता प्रोजेक्ट के उद्देश्य, आर्किटेक्चर निर्णयों और अनुसरण करने के लिए कोड पैटर्न की व्याख्या करने वाले नियमों को शामिल करती है।

2. **[chatgpt-telegram-bot-telegraf](https://github.com/kirill-markin/chatgpt-telegram-bot-telegraf/blob/main/.cursorrules)**: इस टेलीग्राम बॉट के लिए, नियम बॉट के आर्किटेक्चर, एपीआई उपयोग पैटर्न और संदेशों और कमांड को संभालने के लिए कन्वेंशन पर केंद्रित हैं।

### कर्सर प्रोजेक्ट नियम फ़ाइलें: कब और कैसे उपयोग करें

जब रिपॉजिटरी-स्तर के नियम बहुत व्यापक हो जाते हैं, तो मैं उन्हें संदर्भ-विशिष्ट `.cursor/*.mdc` फ़ाइलों में विभाजित कर देता हूं जो केवल प्रासंगिक होने पर ही सक्रिय होते हैं।

![प्रोजेक्ट नियम अनुभाग में संदर्भ-विशिष्ट नियम](/articles/cursor-ide-rules-specific.webp)

#### कार्य-विशिष्ट नियम कार्यान्वयन उदाहरण

एक अच्छा उदाहरण मेरा व्यक्तिगत वेबसाइट रिपॉजिटरी है:
**[website-next-js/.cursor/rules/](https://github.com/kirill-markin/website-next-js/tree/main/.cursor/rules)**

इस रेपो में, मैंने इनके लिए अलग-अलग नियम फ़ाइलें बनाई हैं:
- सामग्री प्रबंधन वर्कफ़्लो
- छवि अनुकूलन आवश्यकताएँ
- एसईओ सर्वोत्तम प्रथाएँ
- कम्पोनेंट आर्किटेक्चर पैटर्न
- डिप्लॉयमेंट प्रक्रियाएँ

यह दृष्टिकोण एआई को केंद्रित रखता है और विशिष्ट कार्यों पर काम करते समय अप्रासंगिक जानकारी से अभिभूत होने से रोकता है।

### मध्य-संवाद नियम समावेश: सीमाएँ और सर्वोत्तम प्रथाएँ

एक महत्वपूर्ण सीमा जिसके बारे में जागरूक रहना महत्वपूर्ण है: संदर्भ-जागरूक `.mdc` नियम नए संवाद की शुरुआत में लागू होने पर सबसे अच्छा काम करते हैं। यदि आप कर्सर आईडीई के साथ मौजूदा बातचीत के बीच में हैं और अचानक आपको एक विशेष नियम (जैसे डेटाबेस क्वेरी दिशानिर्देश) लागू करने की आवश्यकता है, तो एआई स्वचालित रूप से उस नियम फ़ाइल तक नहीं पहुंच सकता है। ऐसा इसलिए होता है क्योंकि कर्सर ने पहले से ही आपकी बातचीत के लिए संदर्भ स्थापित कर लिया है और हमेशा मध्य-संवाद में लागू करने के लिए किन नियमों का पता लगाएगा और लागू करेगा।

इन स्थितियों में, मैं स्पष्ट रूप से अपनी आवश्यकता के नियम का उल्लेख करता हूं: "कृपया इस कार्य के लिए हमारे डेटाबेस क्वेरी दिशानिर्देशों का पालन करें।" यह कर्सर को प्रासंगिक नियम खोजने और लागू करने के लिए प्रेरित करता है। विशिष्ट दिशानिर्देशों पर निर्भर महत्वपूर्ण कार्यों के लिए, मुझे लगता है कि एक नए संवाद से शुरुआत करना अधिक प्रभावी है जहां कर्सर स्वचालित रूप से शुरुआत से ही सभी प्रासंगिक संदर्भ-जागरूक नियमों का पता लगाएगा और लागू करेगा।

## कर्सर प्रोजेक्ट नियमों का विकास: वैश्विक सेटिंग्स से संदर्भ-जागरूक सिस्टम तक

कर्सर प्रोजेक्ट नियमों के साथ मेरी यात्रा कई चरणों से विकसित हुई है:

### चरण 1: सार्वभौमिक कर्सर प्रोजेक्ट नियमों के लिए वैश्विक कर्सर आईडीई सेटिंग्स

मैंने कर्सर आईडीई सेटिंग्स में सब कुछ डालकर शुरू की। शुरू में सरल लेकिन प्रभावी। जैसे-जैसे मैंने अपने वर्कफ़्लो में अधिक पैटर्न की पहचान की, ये वैश्विक कर्सर प्रोजेक्ट नियम बढ़े। हर नए प्रोजेक्ट को फायदा हुआ, लेकिन कॉन्फिगरेशन अंततः अनगढ़ हो गया - बहुत सारे नियम जो हर जगह लागू नहीं होते थे।

### चरण 2: प्रोजेक्ट मानकों के लिए रिपॉजिटरी-विशिष्ट कर्सर प्रोजेक्ट नियम

जैसे ही मैंने कर्सर आईडीई सेटिंग्स प्रोजेक्ट-अप्रासंगिक जानकारी के साथ फूलने लगीं, मैं रिपॉजिटरी रूट्स में `.cursorrules` फ़ाइलों का उपयोग करने में स्थानांतरित हो गया। यह मेरा प्राथमिक दृष्टिकोण बन गया, जिससे मुझे सुसंगत मानकों को बनाए रखते हुए प्रत्येक प्रोजेक्ट के लिए कर्सर प्रोजेक्ट नियमों को अनुकूलित करने की अनुमति मिली। इस दौरान, `.cursorrules` रिपॉजिटरी-स्तर कॉन्फिगरेशन के लिए एकमात्र विकल्प था।

### चरण 3: विशिष्ट कार्यों के लिए गतिशील संदर्भ-जागरूक कर्सर प्रोजेक्ट नियम

जब कर्सर आईडीई ने `.cursor/*.mdc` गतिशील नियम पेश किए, तो मैंने सब कुछ पुनर्गठित किया। ये संदर्भ-जागरूक कर्सर प्रोजेक्ट नियम केवल तभी सक्रिय होते हैं जब एआई प्रासंगिक कार्यों को कर रहा हो। इससे मुझे यह करने की अनुमति मिली:

- वैश्विक सेटिंग्स को न्यूनतम और व्यापक रूप से लागू रखना
- प्रोजेक्ट-व्यापी मानकों के लिए `.cursorrules` का उपयोग करना
- विशेष कार्यों के लिए केंद्रित `.cursor/*.mdc` फ़ाइलें बनाना

यह स्तरित दृष्टिकोण एआई को मेरे वर्तमान कार्य के आधार पर तत्काल मार्गदर्शन प्रदान करता है, शोर को कम करता है और उसकी सहायता की प्रासंगिकता में सुधार करता है।

यह विकास एआई सहायकों के साथ प्रभावी ढंग से सहयोग करने के मेरे बढ़ते समझ को दर्शाता है - व्यापक शुरुआत और प्रगतिशील रूप से संदर्भ-जागरूक, कार्य-विशिष्ट कर्सर प्रोजेक्ट नियमों की ओर बढ़ना जो एआई की प्रभावशीलता को अधिकतम करते हैं।

## कर्सर प्रोजेक्ट नियमों का पूर्ण तुलना: वैश्विक बनाम रिपॉजिटरी बनाम संदर्भ-जागरूक

यहां कर्सर आईडीई में कर्सर प्रोजेक्ट नियमों के तीन स्तरों की एक त्वरित तुलना दी गई है:

| सुविधा | वैश्विक आईडीई सेटिंग्स | कर्सर प्रोजेक्ट नियम (.cursorrules) | संदर्भ-जागरूक कर्सर प्रोजेक्ट नियम (.cursor/*.mdc) |
|---------|--------------------|-----------------------------|----------------------------------|
| **स्कोप** | सभी प्रोजेक्ट्स | विशिष्ट रिपॉजिटरी | विशिष्ट कार्य या संदर्भ |
| **दृश्यता** | केवल आप (स्थानीय सेटिंग्स) | रिपॉजिटरी के माध्यम से पूरी टीम | रिपॉजिटरी के माध्यम से पूरी टीम |
| **स्थायित्व** | प्रोजेक्ट्स में बना रहता है | रिपॉजिटरी से बंधा | रिपॉजिटरी से बंधा |
| **सक्रियण** | हमेशा सक्रिय | रिपॉजिटरी के लिए हमेशा सक्रिय | केवल वर्तमान कार्य के लिए प्रासंगिक होने पर |
| **सबसे अच्छा किसके लिए** | सार्वभौमिक कर्सर प्रोजेक्ट नियम | प्रोजेक्ट आर्किटेक्चर पैटर्न | विशेष डोमेन ज्ञान |
| **टोकन दक्षता** | कम (हमेशा मौजूद) | मध्यम (प्रोजेक्ट के लिए हमेशा मौजूद) | उच्च (केवल जब आवश्यक हो लोड होता है) |
| **सेटअप स्थान** | कर्सर सेटिंग्स यूआई | रिपॉजिटरी रूट फ़ाइल | .cursor/rules/ डायरेक्टरी |
| **पोर्टेबिलिटी** | प्रत्येक डिवाइस पर मैन्युअल सेटअप की आवश्यकता | रिपॉजिटरी क्लोन के साथ स्वचालित | रिपॉजिटरी क्लोन के साथ स्वचालित |

यह बहु-स्तरीय दृष्टिकोण आपको विभिन्न परिदृश्यों में सुसंगत मार्गदर्शन बनाए रखते हुए टोकन उपयोग को अनुकूलित करने की अनुमति देता है।

## चरण-दर-चरण मार्गदर्शिका: अपने विकास वर्कफ़्लो में कर्सर प्रोजेक्ट नियम लागू करना

अब जब मैंने कर्सर प्रोजेक्ट नियमों के प्रति अपने दृष्टिकोण के पीछे के सिद्धांत को साझा कर दिया है, तो आइए देखें कि आप अपने स्वयं के विकास कार्य के लिए एक समान प्रणाली कैसे लागू कर सकते हैं।

### एआई सहायता के लिए वैश्विक कर्सर प्रोजेक्ट नियम सेट करना

कर्सर आईडीई में अपने स्वयं के वैश्विक कर्सर प्रोजेक्ट नियम सेट करने के लिए:

1. कर्सर आईडीई खोलें और सेटिंग्स पर जाएं (दाएं शीर्ष कोने की बटन)
2. कर्सर सेटिंग्स > एआई के लिए नियम पर नेविगेट करें
3. ऊपर देखे गए स्वरूपित संरचना में अपने मुख्य दिशानिर्देश जोड़ें
4. वैश्विक कर्सर प्रोजेक्ट नियमों को सार्वभौमिक कोडिंग मानकों पर केंद्रित रखें जो सभी प्रोजेक्ट्स पर लागू होते हैं
5. एआई आपके निर्देशों पर कैसे प्रतिक्रिया देता है, यह देखने के लिए सरल प्रॉम्प्ट के साथ परीक्षण करें

#### स्थानीय कर्सर आईडीई सेटिंग्स का कुशलतापूर्वक प्रबंधन

मुख्य बात संतुलन बनाना है - बहुत कम नियम और एआई आपकी प्राथमिकताओं को नहीं समझेगा; बहुत अधिक और आप अप्रासंगिक संदर्भ पर टोकन बर्बाद करेंगे।

यह नोट करना महत्वपूर्ण है कि ये सेटिंग्स आपके कर्सर आईडीई इंस्टॉलेशन में स्थानीय रूप से संग्रहीत हैं। आपके सहकर्मी इन सेटिंग्स को तब तक नहीं देखेंगे जब तक कि वे उन्हें अपने स्वयं के मशीनों पर कॉन्फ़िगर नहीं करते। इसके अलावा, यदि आप कई कंप्यूटरों पर कर्सर आईडीई का उपयोग करते हैं (जैसे अलग-अलग व्यक्तिगत और कार्य खाते), तो आपको उन्हें प्रत्येक इंस्टॉलेशन पर मैन्युअल रूप से सेट करने की आवश्यकता होगी।

### प्रोजेक्ट टीम के लिए रिपॉजिटरी-स्तर .cursorrules फ़ाइलें बनाना

प्रोजेक्ट-स्तर कॉन्फिगरेशन के लिए:

1. अपने रिपॉजिटरी के रूट में एक `.cursorrules` फ़ाइल बनाएँ
2. प्रोजेक्ट के संक्षिप्त अवलोकन से शुरू करें
3. आर्किटेक्चर पैटर्न दस्तावेज़ करें जिन्हें एआई को समझना चाहिए
4. इस प्रोजेक्ट के लिए विशिष्ट कोड कन्वेंशन शामिल करें
5. इष्टतम टोकन उपयोग के लिए फ़ाइल को 100 लाइनों से कम रखें

#### कर्सर प्रोजेक्ट नियम टेम्पलेट रिपॉजिटरी-स्तर

शुरू करने के लिए यहां एक न्यूनतम टेम्पलेट दिया गया है:

```markdown
# प्रोजेक्ट: [प्रोजेक्ट नाम]

## अवलोकन
- उद्देश्य: [संक्षिप्त विवरण]
- स्टैक: [मुख्य तकनीकें]
- आर्किटेक्चर: [मुख्य पैटर्न - MVC, माइक्रोसर्विसेज, आदि]

## कोड पैटर्न
- [प्रोजेक्ट-विशिष्ट पैटर्न की सूची]

## शैली आवश्यकताएँ
- [प्रोजेक्ट-विशिष्ट शैली दिशानिर्देश]
```

### विशेष कार्यों के लिए संदर्भ-जागरूक .mdc नियम फ़ाइलें बनाना

अधिक उन्नत कॉन्फिगरेशन के लिए:

1. अपने रिपॉजिटरी में एक `.cursor/rules/` डायरेक्टरी बनाएँ
2. विभिन्न संदर्भों के लिए विशिष्ट `.mdc` फ़ाइलें जोड़ें
3. उनके उद्देश्य के आधार पर फ़ाइलों को वर्णनात्मक नाम दें
4. प्रत्येक फ़ाइल को एक विशिष्ट चिंता पर केंद्रित रखें
5. एआई को यह समझने में मदद करने के लिए प्रत्येक फ़ाइल के शीर्ष पर एक संक्षिप्त विवरण शामिल करें कि इन नियमों को कब लागू करना है

#### नियम बनाना: मैनुअल बनाम कर्सर आईडीई इंटरफेस विधियाँ

आप इन फ़ाइलों को मैन्युअल रूप से बना सकते हैं, या कर्सर आईडीई इंटरफेस का उपयोग कर सकते हैं:
1. सेटिंग्स > नियम पर जाएं
2. "नियम जोड़ें" पर क्लिक करें
3. अपने नियम के लिए एक नाम और विवरण दर्ज करें
4. अपनी कस्टम नियम सामग्री जोड़ें
5. नियम सहेजें, और कर्सर आपके रिपॉजिटरी में उपयुक्त `.mdc` फ़ाइल बनाएगा

दोनों दृष्टिकोण समान रूप से अच्छी तरह से काम करते हैं - मैन्युअल फ़ाइल निर्माण आपको फ़ाइल संरचना पर अधिक नियंत्रण देता है, जबकि कर्सर इंटरफेस एक अधिक निर्देशित अनुभव प्रदान करता है।

#### रिएक्ट विकास के लिए उदाहरण कर्सर नियम फ़ाइल

उदाहरण के लिए, एक रिएक्ट कम्पोनेंट नियम फ़ाइल इस प्रकार दिख सकती है:

```markdown
# रिएक्ट कम्पोनेंट दिशानिर्देश

ये नियम इस प्रोजेक्ट में रिएक्ट कम्पोनेंट्स के साथ काम करते समय लागू होते हैं।

## कम्पोनेंट संरचना
- प्रॉप्स के लिए टाइपस्क्रिप्ट इंटरफेस के साथ फंक्शनल कम्पोनेंट्स
- जटिल स्टेट प्रबंधन के लिए कस्टम हुक्स
- स्टाइलिंग के लिए स्टाइल्ड कम्पोनेंट्स

## नामकरण कन्वेंशन
- कम्पोनेंट फ़ाइलें: PascalCase.tsx
- हुक फ़ाइलें: use[Name].ts
- स्टाइल फ़ाइलें: [name].styles.ts
```

## एआई-सहायक कोडिंग के लिए कर्सर प्रोजेक्ट नियमों का उपयोग करने के मापनीय लाभ

इस बहु-स्तरीय कर्सर प्रोजेक्ट नियम प्रणाली को लागू करने के बाद, मैंने कई आयामों में मूर्त सुधार देखे हैं।

### सुसंगत कर्सर प्रोजेक्ट नियमों के माध्यम से बेहतर कोड गुणवत्ता मेट्रिक्स

सबसे तत्काल लाभ सुसंगत कोड गुणवत्ता रहा है। कर्सर प्रोजेक्ट नियमों में अपनी प्राथमिकताओं को एनकोड करके, एआई ऐसा कोड उत्पन्न करता है जो:

- फंक्शनल प्रोग्रामिंग सिद्धांतों का लगातार पालन करता है
- प्रॉम्प्टिंग के बिना उचित त्रुटि प्रबंधन को लागू करता है
- निरंतर अनुस्मारकों के बिना उपयुक्त टाइपिंग शामिल करता है
- पूरे कोडबेस में सुसंगत नामकरण कन्वेंशन बनाए रखता है

इसका अनुवाद कम समीक्षा टिप्पणियों और शैली फिक्स पर खर्च किए गए समय में कमी में होता है। इन कर्सर प्रोजेक्ट नियमों को लागू करने के बाद एक प्रोजेक्ट ने शैली-संबंधित पीआर टिप्पणियों में 50% की कमी देखी।

### साझा कर्सर प्रोजेक्ट नियमों के साथ बढ़ी हुई टीम सहयोग

टीमों के साथ काम करते समय, कर्सर प्रोजेक्ट नियम एक साझा समझ बनाते हैं:

- नए टीम सदस्य जल्दी से `.cursorrules` फ़ाइल के माध्यम से अपेक्षाओं को समझते हैं
- क्रॉस-फंक्शनल सहयोग में सुधार होता है क्योंकि इंजीनियर और गैर-इंजीनियर दोनों एक ही नियमों का संदर्भ दे सकते हैं
- ज्ञान साझाकरण स्वचालित रूप से होता है क्योंकि एआई सर्वोत्तम प्रथाओं को लगातार लागू करता है

मैंने इसे जूनियर डेवलपर्स की ऑनबोर्डिंग के दौरान विशेष रूप से मूल्यवान पाया है - वे कोड समीक्षाओं के लिए इंतजार किए बिना सर्वोत्तम प्रथाओं पर तत्काल प्रतिक्रिया प्राप्त करते हैं।

### अनुकूलित कर्सर आईडीई एआई इंटरैक्शन से उत्पादकता लाभ

आंकड़े स्वयं बोलते हैं:

- नए टीम सदस्यों को कोड मानकों को समझाने में खर्च किए गए समय में लगभग 60% की कमी
- कम संशोधन चक्रों के साथ लगभग 35% तेज़ प्रारंभिक पीआर प्रस्तुतियां
- गिट इतिहास को अव्यवस्थित करने वाले "शैली फिक्स" कमिट्स में लगभग 40% की कमी

लेकिन सबसे मूल्यवान मेट्रिक मानसिक बैंडविड्थ रहा है। शैली संबंधी चिंताओं को एआई पर ऑफलोड करके, डेवलपर्स स्वरूपण नियमों को याद रखने के बजाय वास्तविक समस्या को हल करने पर ध्यान केंद्रित कर सकते हैं।

## पेशेवर डेवलपर्स के लिए उन्नत कर्सर प्रोजेक्ट नियम तकनीकें

जैसे-जैसे आप बुनियादी नियम संरचनाओं के साथ सहज होते हैं, अपने एआई सहायता अनुभव को और अधिक परिष्कृत करने के लिए इन उन्नत तकनीकों का प्रयास करें।

### सामान्य विकास परिदृश्यों के लिए विशेष कार्य-विशिष्ट कर्सर प्रोजेक्ट नियम

मैंने विशेष कर्सर प्रोजेक्ट नियम फ़ाइलों को इन परिदृश्यों के लिए विशेष रूप से प्रभावी पाया है:

#### परीक्षण नियम (`test-guidelines.mdc`)

- परीक्षण नामकरण पैटर्न
- मॉकिंग रणनीति दिशानिर्देश
- परीक्षण कवरेज अपेक्षाएँ

#### एपीआई एकीकरण नियम (`api-standards.mdc`)

- त्रुटि प्रबंधन अपेक्षाएँ
- पुनः प्रयास लॉजिक पैटर्न
- प्रमाणीकरण प्रवाह मानक

#### स्टेट प्रबंधन नियम (`state-patterns.mdc`)

- रीडक्स एक्शन नामकरण कन्वेंशन
- स्टेट नॉर्मलाइजेशन दिशानिर्देश
- साइड-इफेक्ट हैंडलिंग पैटर्न

इन चिंताओं को विभाजित करके, प्रत्येक फ़ाइल केंद्रित रहती है और केवल आपके वर्तमान कार्य के लिए प्रासंगिक होने पर ही सक्रिय होती है।

### कर्सर प्रोजेक्ट नियमों में एआई टोकन उपयोग का अनुकूलन

एआई के प्रभावी संदर्भ विंडो को अधिकतम करने के लिए:

1. **हाल ही की प्राथमिकता दें**: सबसे महत्वपूर्ण नियमों को फ़ाइलों की शुरुआत या अंत में रखें
2. **पदानुक्रमित संरचना का उपयोग करें**: सामान्य सिद्धांतों से शुरू करें, फिर विशिष्टताओं की ओर बढ़ें
3. **अनावश्यक दोहराव को खत्म करें**: एक ही नियम को कई स्थानों पर न दोहराएं
4. **संक्षिप्त भाषा का उपयोग करें**: पैराग्राफ के बजाय बुलेट पॉइंट्स में नियम लिखें
5. **मार्कडाउन फॉर्मेटिंग का उपयोग करें**: नियम श्रेणियों के बीच अंतर करने के लिए हेडिंग का उपयोग करें

एक अंगूठे के नियम के रूप में, यदि कोई नियम फ़ाइल 100 लाइनों से अधिक होती है, तो यह शायद बहुत अधिक करने की कोशिश कर रही है और इसे अधिक केंद्रित घटकों में विभाजित किया जाना चाहिए।

### सामान्य कर्सर प्रोजेक्ट नियम समस्याओं का समाधान और समाधान

जब आपके कर्सर प्रोजेक्ट नियम अपेक्षित परिणाम नहीं दे रहे हों:

1. **नियम विरोधाभास**: जांचें कि क्या आपके पास विभिन्न स्तरों पर परस्पर विरोधी दिशानिर्देश हैं
2. **बहुत सामान्य**: कर्सर प्रोजेक्ट नियमों को ठोस उदाहरणों के साथ अधिक विशिष्ट बनाएं
3. **बहुत विशिष्ट**: अत्यधिक संकीर्ण नियम समान परिदृश्यों में सामान्यीकृत नहीं हो सकते हैं
4. **टोकन सीमाएँ**: यदि कर्सर प्रोजेक्ट नियम काटे जा रहे हैं, तो प्राथमिकता दें और सरल बनाएं
5. **संदर्भ की कमी**: नियमों को सही ढंग से लागू करने के लिए एआई को अतिरिक्त फ़ाइल संदर्भ की आवश्यकता हो सकती है
6. **नियम ओवरलोड**: जब एक ही संवाद में बहुत सारे कर्सर प्रोजेक्ट नियम दिखाई देते हैं, तो मॉडल को उन सभी को याद रखने और उनका पालन करने में संघर्ष करता है - सबसे महत्वपूर्ण लोगों को प्राथमिकता दें

मैंने पाया है कि उत्पन्न कोड की समीक्षा अपने कर्सर प्रोजेक्ट नियमों के खिलाफ करना और उन्हें पुनरावृत्ति से परिष्कृत करना एआई सहायता गुणवत्ता में निरंतर सुधार की ओर ले जाता है।

## कर्सर आईडीई बनाम अन्य एआई कोडिंग सहायक: कॉन्फिगरेशन दृष्टिकोण की तुलना

जबकि कर्सर के पास नियमों के लिए विशेष रूप से अच्छी तरह से डिज़ाइन किया गया सिस्टम है, अन्य एआई कोडिंग सहायकों के पास अनुकूलन के लिए समान दृष्टिकोण हैं:

- GitHub Copilot प्रोजेक्ट-स्तर कॉन्फिगरेशन के लिए `.github/copilot/settings.yml` प्रदान करता है
- JetBrains AI Assistant में प्रोजेक्ट-स्तर स्निपेट और टेम्प्लेट हैं
- विभिन्न एआई एक्सटेंशन के साथ VS Code वर्कस्पेस सेटिंग्स और अनुकूलन फ़ाइलों का समर्थन करता है

### टोकन इकोनॉमी: सभी टूल्स में एआई प्रदर्शन को अधिकतम करना

जो सभी दृष्टिकोणों को एकजुट करता है, वह एक मौलिक सिद्धांत है: **इष्टतम परिणामों के लिए टोकन उपयोग को कम करना आवश्यक है**। चाहे आप किस भी एआई कोडिंग सहायक का उपयोग कर रहे हों, मॉडल को अभिभूत किए बिना बस पर्याप्त संदर्भ प्रदान करना सफलता की कुंजी है।

टोकन इकोनॉमी सभी LLM-संचालित टूल में एक ही तरह से काम करती है:
1. आपके निर्देशों में जोड़ा गया प्रत्येक शब्द टोकन का उपयोग करता है
2. निर्देशों के लिए उपयोग किए गए टोकन कोड समझने के लिए उपलब्ध संदर्भ को कम करते हैं
3. अत्यधिक वर्बोस मार्गदर्शन कम रिटर्न की ओर ले जाता है

इसलिए चाहे आप कर्सर के तीन-स्तरीय नियम सिस्टम या किसी अन्य टूल के कॉन्फिगरेशन विकल्पों का उपयोग कर रहे हों, हमेशा सटीक और संक्षिप्त होने का लक्ष्य रखें। अपने मार्गदर्शन को विशिष्ट पैटर्न और प्राथमिकताओं पर केंद्रित करें जो सबसे अधिक महत्व रखते हैं, और बाकी एआई को संभालने दें।

## तकनीकी शब्दावली: नए डेवलपर्स के लिए महत्वपूर्ण अवधारणाएँ

नए डेवलपर्स को इस लेख में उपयोग किए गए तकनीकी शब्दों को बेहतर ढंग से समझने में मदद करने के लिए, यहां कुछ मुख्य अवधारणाओं की व्याख्या दी गई है:

| शब्द | अंग्रेजी मूल | व्याख्या |
|------|--------|------|
| **टोकन** | Token | बड़े भाषा मॉडल द्वारा टेक्स्ट प्रोसेसिंग की मूल इकाई, एक टोकन एक शब्द, शब्द का हिस्सा, या विराम चिन्ह हो सकता है। टोकन की संख्या सीधे एआई प्रतिक्रिया की गुणवत्ता और प्रोसेसिंग स्पीड को प्रभावित करती है। |
| **संदर्भ विंडो** | Context window | बड़े भाषा मॉडल द्वारा उत्तर देते समय विचार किए जा सकने वाले टेक्स्ट की सीमा, टोकन की संख्या में मापी जाती है। |
| **नियम फ़ाइल** | Rules file | कर्सर आईडीई में एआई व्यवहार को परिभाषित करने वाली कॉन्फिगरेशन फ़ाइल, जो वैश्विक सेटिंग्स, रिपॉजिटरी-स्तर की `.cursorrules` फ़ाइल, या संदर्भ-विशिष्ट `.mdc` फ़ाइल हो सकती है। |
| **शुद्ध फंक्शन** | Pure function | ऐसा फंक्शन जो केवल इनपुट पैरामीटर पर निर्भर करता है और कोई साइड इफेक्ट नहीं पैदा करता, समान इनपुट के लिए हमेशा समान आउटपुट देता है। |
| **फंक्शनल प्रोग्रामिंग** | Functional programming | प्रोग्रामिंग पैराडाइम जो शुद्ध फंक्शनों के उपयोग, शेयर्ड स्टेट और परिवर्तनीय डेटा से बचने पर ज़ोर देता है। |
| **DRY सिद्धांत** | DRY (Don't Repeat Yourself) | सॉफ्टवेयर विकास का सिद्धांत, जो कोड दोहराव को कम करने की वकालत करता है, हर ज्ञान बिंदु का सिस्टम में एकल और स्पष्ट प्रतिनिधित्व होना चाहिए। |
| **KISS सिद्धांत** | KISS (Keep It Simple, Stupid) | डिज़ाइन सिद्धांत, जो सरलता को प्राथमिक लक्ष्य मानता है और अनावश्यक जटिलता से बचने की सलाह देता है। |
| **YAGNI सिद्धांत** | YAGNI (You Aren't Gonna Need It) | एक्स्ट्रीम प्रोग्रामिंग सिद्धांत, जो सुझाव देता है कि केवल तभी किसी फीचर को लागू करें जब वास्तव में इसकी आवश्यकता हो। |
| **टाइप सिस्टम** | Type system | प्रोग्रामिंग भाषा में वेरिएबल, एक्सप्रेशन, फंक्शन आदि को टाइप असाइन करने के नियमों का समूह, जो त्रुटियों को पकड़ने और कोड पठनीयता में सुधार करने में मदद करता है। |
| **त्रुटि प्रबंधन** | Error handling | प्रोग्राम में असामान्य स्थितियों का पता लगाने, रिपोर्ट करने और संभालने की विधि। |
| **साइड इफेक्ट** | Side effect | फंक्शन कॉल में रिटर्न वैल्यू के अलावा प्रोग्राम स्टेट में कोई भी परिवर्तन, जैसे ग्लोबल वेरिएबल को संशोधित करना या I/O ऑपरेशन करना। |
| **रिपॉजिटरी** | Repository | कोड और उससे संबंधित संसाधनों को स्टोर करने का स्थान, आमतौर पर गिट जैसी वर्जन कंट्रोल सिस्टम से प्रबंधित। |
| **पीआर (पुल रिक्वेस्ट)** | Pull Request | डेवलपर द्वारा अपने कोड परिवर्तनों को प्रोजेक्ट के मुख्य ब्रांच में मर्ज करने का प्रस्ताव। |
| **नामित पैरामीटर** | Named parameters | फंक्शन कॉल में पैरामीटर नामों को स्पष्ट रूप से निर्दिष्ट करना, जो कोड पठनीयता बढ़ाता है और त्रुटि की संभावना को कम करता है। |
| **स्ट्रांगली टाइप्ड** | Strongly typed | प्रोग्रामिंग भाषा की विशेषता जो वेरिएबल टाइप को स्पष्ट रूप से निर्दिष्ट करने की आवश्यकता रखती है और विभिन्न टाइप के बीच स्वचालित कन्वर्जन को सीमित करती है। |
| **.cursorrules** | .cursorrules | कर्सर आईडीई में एआई सहायक के व्यवहार को कॉन्फिगर करने के लिए विशेष फ़ाइल, जो कोड रिपॉजिटरी के रूट डायरेक्टरी में रखी जाती है। |
| **.cursor/rules/*.mdc** | .cursor/rules/*.mdc | कर्सर आईडीई में विशिष्ट कार्य या संदर्भ के लिए डायनेमिक नियम फ़ाइल, जो केवल संबंधित कार्य के समय ही सक्रिय होती है। |

इन अवधारणाओं को समझना कर्सर आईडीई की एआई सुविधाओं को प्रभावी ढंग से कॉन्फिगर और उपयोग करने के लिए महत्वपूर्ण है। जैसे-जैसे आप इन अवधारणाओं से परिचित होते जाएंगे, आप अपने विकास कार्यप्रवाह के लिए उपयुक्त एआई नियम बनाने और प्रबंधित करने में अधिक कुशल होंगे।