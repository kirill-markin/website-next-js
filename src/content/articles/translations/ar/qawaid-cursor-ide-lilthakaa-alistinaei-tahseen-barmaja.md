---
keywords: [
  "قواعد كورسر",
  "محرر كورسر للذكاء الاصطناعي",
  "البرمجة بمساعدة الذكاء الاصطناعي",
  "بيئة تطوير كورسر المتكاملة",
  "تحسين كفاءة البرمجة",
  "ملف .cursorrules",
  "قواعد المشروع في كورسر",
  "تخصيص سلوك الذكاء الاصطناعي"
]
title: "قواعد كورسر للذكاء الاصطناعي: تحسين كفاءة البرمجة وجودة الشفرة"
date: 2025-05-09
description: "قواعد كورسر المختبرة التي تعزز البرمجة بالذكاء الاصطناعي مع أسلوب مخصص، معالجة الأخطاء، وأنماط سير العمل للحصول على نتائج متسقة وعالية الجودة."
tags: ["productivity", "cursor-ide", "ai", "llm"]
publish: true
thumbnailUrl: "/articles/cursor-ide-rules-for-ai.webp"
language: "ar"
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
  - language: "hi"
    slug: "cursor-ide-niyam-kritrim-buddhimatta-coding-ke-liye"
--- 

# قواعد كورسر للذكاء الاصطناعي: تحسين كفاءة البرمجة وجودة الشفرة

تُطبّق بيئة تطوير كورسر المتكاملة ثلاثة مستويات من قواعد كورسر:

1. قواعد للذكاء الاصطناعي في إعدادات كورسر - قواعد كورسر الأساسية التي تُطبّق عالمياً على جميع المشاريع
2. ملف `.cursor/index.mdc` مع نوع القاعدة "Always" - قواعد مشروع كورسر الخاصة بالمستودع (يحل محل نهج `.cursorrules` التقليدي)
3. ملفات `.cursor/rules/*.mdc` - قواعد مشروع كورسر الديناميكية التي تُفعّل فقط عندما يتعامل الذكاء الاصطناعي مع مهام ذات صلة بوصفها

أشارك هنا قواعد مشروع كورسر على المستوى الأساسي - الإعدادات العالمية التي أستخدمها في بيئة تطوير كورسر المتكاملة. تشكل هذه القواعد الأساس لجميع أعمال التطوير التي أقوم بها. عند دمجها مع قواعد المستودع والقواعد الديناميكية، فإنها تُنشئ نظاماً قوياً يحافظ على جودة الكود مع الحفاظ على اتساق ممارسات التطوير الخاصة بي.

> **هل تفضل درس فيديو؟** لقد أنشأت شرحًا شاملاً بالفيديو لنظام قواعد كورسر بأكمله. [شاهد Ultimate Cursor AI IDE Rules Guide: All 5 Levels and .cursorrules (2025)](https://youtu.be/gw8otRr2zpw?si=z5wE2PNHugtH9yrx) لرؤية هذه التقنيات وهي تُطبق خطوة بخطوة.

[![تكوين وتنفيذ قواعد كورسر IDE قيد التنفيذ](/articles/cursor-ide-rules-tutorial.webp)](https://youtu.be/gw8otRr2zpw?si=z5wE2PNHugtH9yrx)

## كيفية تكوين قواعد كورسر لتحقيق الأداء الأمثل للبرمجة بالذكاء الاصطناعي

كورسر -> الإعدادات -> إعدادات كورسر -> قواعد للذكاء الاصطناعي:

```markdown
<cursorrules_instructions_to_the_dialog>

<cursorrules_code_style>
- التعليقات بالإنجليزية فقط
- تفضيل البرمجة الوظيفية على البرمجة الكائنية
- استخدام فئات منفصلة للبرمجة الكائنية فقط للموصلات والواجهات للأنظمة الخارجية
- كتابة جميع المنطق الآخر بوظائف نقية (إدخال/إخراج واضح، بدون تغييرات حالة مخفية)
- يجب على الوظائف تعديل قيم الإرجاع فقط - عدم تعديل معاملات الإدخال أو الحالة العامة أو أي بيانات غير مُرجعة صراحة
- إجراء تغييرات بسيطة ومركزة
- اتباع مبادئ DRY و KISS و YAGNI
- استخدام الكتابة الصارمة (إرجاع الوظائف، المتغيرات) في جميع اللغات
- استخدام المعاملات المسماة في استدعاءات الوظائف عند الإمكان
- عدم تكرار الكود؛ التحقق من وجود منطق مكتوب بالفعل قبل كتابته
- تجنب وظائف التغليف غير الضرورية بدون هدف واضح
- تفضيل المجموعات قوية الكتابة على العامة عند التعامل مع هياكل البيانات المعقدة
- النظر في إنشاء تعريفات أنواع مناسبة لهياكل البيانات غير البسيطة
- الأنواع الأصلية جيدة لهياكل البيانات البسيطة، ولكن استخدم نماذج مناسبة للمعقدة
- محاولة تجنب استخدام متغيرات غير مكتوبة وأنواع عامة حيثما أمكن
- عدم استخدام قيم المعاملات الافتراضية في تعريفات الوظائف - جعل جميع المعاملات صريحة
</cursorrules_code_style>

<cursorrules_error_handling>
- رفع الأخطاء صراحة دائماً، عدم تجاهلها بصمت أبداً
- إذا حدث خطأ في أي جزء منطقي من الكود، رفعه فوراً وعدم متابعة التنفيذ
- استخدام أنواع أخطاء محددة تشير بوضوح إلى ما حدث خطأ
- تجنب معالجات الاستثناءات الشاملة التي تخفي السبب الجذري
- يجب أن تكون رسائل الخطأ واضحة وقابلة للتنفيذ
- تسجيل الأخطاء مع السياق المناسب قبل رفعها
</cursorrules_error_handling>

<cursorrules_python_specifics>
- تفضيل Pydantic على TypedDict لنماذج البيانات (مثل، `class ContactData(BaseModel): ...`)
- تجنب `Any` و `@staticmethod`
- استخدام `pyproject.toml` بدلاً من `requirements.txt` عند الإمكان
- للهياكل المعقدة، تجنب المجموعات العامة مثل `List[Dict[str, Any]]`
- رفع استثناءات محددة مثل `ValueError` أو `TypeError` بدلاً من `Exception` العام
- استخدام الفئات فقط للعملاء الذين يتصلون بالأنظمة الخارجية (مثل، `NotionClient`)
- للمنطق التجاري، استخدام وظائف نقية مع العميل كمعامل أول: `def change(notion_client: NotionClient, param1: str, param2: int) -> Result:`
</cursorrules_python_specifics>

<cursorrules_typescript_specifics>
- تفضيل الواجهات على أسماء الأنواع للأشكال الكائنية المعقدة
- استخدام كائنات مكتوبة لإدارة الحالة المعقدة
- استخدام كائنات Error مع رسائل وصفية: `throw new Error('رسالة محددة')`
- الاستفادة من الاتحادات المميزة لسيناريوهات الأنواع المعقدة
</cursorrules_typescript_specifics>

<cursorrules_libraries_and_dependencies>
- التثبيت في بيئات افتراضية، وليس عالمياً
- الإضافة إلى تكوينات المشروع، وليس التثبيتات الفردية
- استخدام استكشاف الكود المصدري للفهم
- تفضيل إدارة التبعيات على مستوى المشروع على تثبيت الحزم الفردية:
  - جيد: `pip install -r requirements.txt`
  - أفضل: استخدام `pyproject.toml` مع حزم Python الحديثة
- عند إضافة التبعيات، تحديث ملف تكوين المشروع المناسب، وليس البيئة فقط
</cursorrules_libraries_and_dependencies>

<cursorrules_terminal_usage>
- تشغيل `date` للمهام المتعلقة بالتاريخ
- استخدام GitHub CLI مع `printf` للنص متعدد الأسطر:
  `git commit -m "$(printf "العنوان\n\n- نقطة 1\n- نقطة 2")"`
- استخدام أوامر git diff غير التفاعلية دائماً مع: `git --no-pager diff` أو `git diff | cat`. لا `git diff` أو `git diff --cached`.
- تفضيل الأوامر ذات المعاملات التي لا تتطلب تفاعل المستخدم على التفاعلية دائماً (استخدام الأعلام، متغيرات البيئة، أو ملفات التكوين لتجنب المطالبات)
</cursorrules_terminal_usage>

<cursorrules_planning_practices>
- يمكن للمستخدم أن يطلب منك إنشاء خطة لتنفيذ الميزة
- يجب عليك إنشاء دليل مؤقت
- يجب عليك إنشاء ملف markdown مع خطة الميزة في الدليل المؤقت
- يجب أن يحتوي ملف خطة الميزة هذا على الأقسام التالية:
  1. نظرة عامة على الحالة الحالية المتعلقة بالميزة
  2. نظرة عامة على الحالة النهائية للميزة
  3. قائمة بجميع الملفات التي يجب تغييرها مع وصف نصي لما يجب تغييره (وليس كود)
  4. قائمة مراجعة لجميع المهام التي يجب القيام بها بأسلوب مربع اختيار markdown من مستويين
- يجب أن يكون ملف خطة الميزة هذا بسيطاً ويحتوي فقط على أهم التغييرات الأساسية المتعلقة بالميزة، يمكن وصف جميع التغييرات الإضافية كأفكار في قسم إضافي، ولكن يجب عدم تنفيذها إذا لم يطلبها المستخدم
</cursorrules_planning_practices>

<cursorrules_repository_practices>
- قراءة `README.md` إذا لم يكن هناك ملف قواعد المستودع
- تلخيص المشروع قبل العمل عليه
</cursorrules_repository_practices>

<cursorrules_code_changes>
- يجب عليك احترام أسلوب الكود والأنماط الموجودة إذا لم يحدد المستخدم خلاف ذلك
- يجب عليك اقتراح تغييرات بسيطة فقط متعلقة بحوار المستخدم الحالي
- يجب عليك تغيير أقل عدد من الأسطر الممكنة أثناء حل المشكلة
- يجب عليك التركيز فقط على ما يطلبه المستخدم في الحوار الحالي، بدون تحسينات إضافية
- يجب عليك فهم قاعدة الكود الموجودة قبل اقتراح التغييرات
- يجب عليك البدء بقراءة الملفات ذات الصلة وقاعدة الكود قبل اقتراح التغييرات
</cursorrules_code_changes>

</cursorrules_instructions_to_the_dialog>
```

![تكوين قواعد كورسر IDE العالمية في لوحة الإعدادات](/articles/cursor-ide-rules-global.webp)

## دليل خطوة بخطوة: تنفيذ قواعد مشروع كورسر في سير عمل التطوير الخاص بك

الآن بعد أن شاركت النظرية وراء نهجي لقواعد مشروع كورسر، دعنا نتعمق في كيفية تنفيذ نظام مماثل لعمل التطوير الخاص بك.

### إعداد قواعد مشروع كورسر العالمية لمساعدة الذكاء الاصطناعي

لإعداد قواعد مشروع كورسر العالمية الخاصة بك في كورسر IDE:

1. افتح كورسر IDE واذهب إلى الإعدادات (زر الزاوية اليمنى العليا)
2. انتقل إلى إعدادات كورسر > قواعد للذكاء الاصطناعي
3. أضف إرشاداتك الأساسية في الهيكل المنسق الذي رأيته أعلاه
4. احتفظ بقواعد مشروع كورسر العالمية مركزة على معايير الترميز العالمية التي تنطبق على جميع المشاريع
5. اختبر بمطالبات بسيطة لمعرفة كيفية استجابة الذكاء الاصطناعي لتعليماتك
## تعظيم الكفاءة باستراتيجية قواعد مشروع كورسر متعددة المستويات

عند العمل مع ميزات الذكاء الاصطناعي في كورسر، وجدت أنه من الضروري تحسين قواعد مشروع كورسر عبر المستويات الثلاثة. الرؤية الأساسية؟ تقليل عدد الرموز (الرموز المميزة) المرسلة إلى نموذج اللغة في كل حوار. عدد أقل من الرموز للسياق يعني قدرة أكبر على إنتاج استجابات ذات جودة.

لمزيد من المعلومات حول كيفية عمل قواعد مشروع كورسر في كورسر، راجع [وثائق كورسر الرسمية حول قواعد الذكاء الاصطناعي](https://docs.cursor.com/context/rules).

### تدفق التنفيذ ثلاثي الخطوات لقواعد مشروع كورسر

1. **البدء بإعدادات IDE فقط**  
   أبدأ بإعدادات كورسر العالمية لتأسيس التفضيلات الأساسية. هذا يتيح لي تجربة صياغات مختلفة للقواعد دون إرباك المستودعات الخاصة بي. أحتفظ بهذا المستوى للقواعد العالمية الحقيقية لمشروع كورسر التي تنطبق على جميع أعمال البرمجة الخاصة بي.

2. **نقل قواعد المشروع المحددة إلى مستوى المستودع**  
   عندما ألاحظ أنماطًا خاصة بقاعدة شفرة معينة أو أرغب في مشاركة إرشادات الذكاء الاصطناعي مع زملائي، أنقل قواعد مشروع كورسر هذه إلى ملف `.cursor/index.mdc` مع نوع القاعدة "Always". هذا يخلق فهمًا مشتركًا مع الحفاظ على إعداداتي العالمية مرتبة. (ملاحظة: ملف `.cursorrules` التقليدي لا يزال يعمل ولكن لم يعد موصى به.)

3. **التقسيم إلى قواعد متعلقة بالسياق عند الضرورة**  
   إذا أصبحت ملفات القواعد على مستوى المستودع ضخمة، أقوم بتقسيمها إلى ملفات `.cursor/*.mdc`. هذا يقلل من استخدام الرموز من خلال تفعيل قواعد مشروع كورسر ذات الصلة فقط عند الحاجة. إنه مثل إعطاء نموذج اللغة مساحة ذهنية أكبر للتفكير في مهمتي المحددة بدلاً من تذكر مجموعة من الإرشادات غير ذات الصلة.

هدفي بسيط: في أي محادثة مع مساعد الذكاء الاصطناعي، أقدم سياقًا كافيًا ليكون مفيدًا دون إهدار قدرته على المعلومات التي لا يحتاجها الآن.

## أمثلة من العالم الواقعي لقواعد مشروع كورسر من مستودعات الإنتاج

لإظهار كيفية تنفيذي لقواعد مشروع كورسر عبر قواعد الشفرة المختلفة، إليك بعض الأمثلة الحقيقية:

### ملفات .cursor/index.mdc على مستوى المستودع: الهيكل والتنفيذ

تعمل ملفات `.cursor/index.mdc` مع نوع القاعدة "Always" مثل README.md مصممة خصيصًا لمساعدي الذكاء الاصطناعي. توفر سياقًا حول الغرض من المشروع وهندسته وأنماط الترميز. (ملفات `.cursorrules` التقليدية لا تزال مدعومة ولكن غير موصى بها للمشاريع الجديدة.)

![مثال ملف .cursorrules على مستوى المستودع](/articles/cursor-ide-rules-repo.webp)

#### أمثلة مستودعات الإنتاج مع قواعد مشروع كورسر

*ملاحظة: هذه الأمثلة تستخدم النهج التقليدي `.cursorrules` والذي لا يزال يعمل. للمشاريع الجديدة، يُنصح باستخدام `.cursor/index.mdc` مع نوع القاعدة "Always".*

1. **[repo-to-text](https://github.com/kirill-markin/repo-to-text/blob/main/.cursorrules)**: تتضمن هذه الأداة المساعدة لتحويل المستودعات إلى نص قواعد تشرح الغرض من المشروع وقرارات الهندسة وأنماط الكود الواجب اتباعها.

2. **[chatgpt-telegram-bot-telegraf](https://github.com/kirill-markin/chatgpt-telegram-bot-telegraf/blob/main/.cursorrules)**: بالنسبة لروبوت Telegram هذا، تركز القواعد على هندسة الروبوت وأنماط استخدام واجهة برمجة التطبيقات واتفاقيات التعامل مع الرسائل والأوامر.

### ملفات قواعد مشروع كورسر: متى وكيف تستخدمها

عندما تصبح القواعد على مستوى المستودع واسعة جدًا، أقوم بتقسيمها إلى ملفات `.cursor/*.mdc` محددة السياق تُفعل فقط عندما تكون ذات صلة.

![قواعد محددة السياق في قسم قواعد المشروع](/articles/cursor-ide-rules-specific.webp)

#### مثال تنفيذ قواعد محددة المهام

مثال جيد هو مستودع موقعي الشخصي:
**[website-next-js/.cursor/rules/](https://github.com/kirill-markin/website-next-js/tree/main/.cursor/rules)**

في هذا المستودع، أنشأت ملفات قواعد منفصلة لـ:
- سير عمل إدارة المحتوى
- متطلبات تحسين الصورة
- أفضل ممارسات تحسين محركات البحث
- أنماط هندسة المكونات
- إجراءات النشر

هذا النهج يُبقي الذكاء الاصطناعي مركزًا ويمنع إغراقه بمعلومات غير ذات صلة عندما أعمل على مهام محددة.

### تضمين القاعدة وسط الحوار: القيود وأفضل الممارسات

قيد مهم يجب الانتباه إليه: تعمل قواعد `.mdc` المرتبطة بالسياق بشكل أفضل عند تطبيقها في بداية حوار جديد. إذا كنت في منتصف محادثة حالية مع كورسر وفجأة احتجت إلى تطبيق قاعدة متخصصة (مثل إرشادات الاستعلام عن قاعدة البيانات)، قد لا يصل الذكاء الاصطناعي تلقائيًا إلى ملف القاعدة هذا. يحدث هذا لأن كورسر قد أنشأ بالفعل سياقًا لمحادثتك ولا يُعيد دائمًا تقييم القواعد التي يجب تطبيقها في منتصف الحوار.

في هذه الحالات، أذكر صراحةً القاعدة التي أحتاجها: "الرجاء اتباع إرشادات الاستعلام عن قاعدة البيانات لدينا لهذه المهمة." هذا يُحفز كورسر على البحث عن القاعدة ذات الصلة وتطبيقها. بالنسبة للمهام الحرجة التي تعتمد على إرشادات محددة، أجد أنه من الأكثر فعالية بدء حوار جديد حيث سيكتشف كورسر تلقائيًا ويطبق جميع القواعد المرتبطة بالسياق ذات الصلة من البداية.

## تطور قواعد مشروع كورسر: من الإعدادات العالمية إلى الأنظمة المرتبطة بالسياق

تطورت رحلتي مع قواعد مشروع كورسر عبر عدة مراحل:

### المرحلة 1: إعدادات كورسر IDE العالمية لقواعد مشروع كورسر العالمية

بدأت بوضع كل شيء في إعدادات كورسر IDE. بسيط ولكن فعال في البداية. مع تحديد المزيد من الأنماط في سير عملي، نمت قواعد مشروع كورسر العالمية هذه. استفاد كل مشروع جديد، لكن التكوين أصبح في النهاية غير سهل التعامل معه - قواعد كثيرة جدًا لا تنطبق في كل مكان.

### المرحلة 2: قواعد مشروع كورسر الخاصة بالمستودع لمعايير المشروع

مع تضخم إعداداتي العالمية بمعلومات غير ذات صلة بالمشروع، تحولت إلى استخدام قواعد على مستوى المستودع. في البداية، كان هذا يعني ملفات `.cursorrules` في جذور المستودعات (الآن تقليدي). أصبح هذا نهجي الأساسي، مما يتيح لي تخصيص قواعد مشروع كورسر لكل مشروع مع الحفاظ على معايير متسقة. اليوم، النهج الموصى به هو ملفات `.cursor/index.mdc` مع نوع القاعدة "Always".

### المرحلة 3: قواعد مشروع كورسر الديناميكية المرتبطة بالسياق للمهام المتخصصة

عندما قدم كورسر IDE قواعد `.cursor/*.mdc` الديناميكية، أعدت هيكلة كل شيء. تُفعّل قواعد مشروع كورسر المرتبطة بالسياق هذه فقط عندما يقوم الذكاء الاصطناعي بمهام ذات صلة. سمح لي هذا بـ:

- الحفاظ على الإعدادات العالمية بسيطة وقابلة للتطبيق على نطاق واسع
- استخدام `.cursor/index.mdc` مع نوع القاعدة "Always" للمعايير على مستوى المشروع (يحل محل `.cursorrules` التقليدي)
- إنشاء ملفات `.cursor/*.mdc` مركزة للمهام المتخصصة

يوفر هذا النهج المتدرج توجيهًا في الوقت المناسب للذكاء الاصطناعي استنادًا إلى ما أعمل عليه حاليًا، متجاوزًا الضوضاء وتحسين أهمية مساعدته.

يعكس التطور فهمي المتزايد لكيفية التعاون بفعالية مع مساعدي الذكاء الاصطناعي - بدءًا من القواعد العامة والتنقيح التدريجي نحو قواعد مشروع كورسر المحددة بالمهام والمرتبطة بالسياق التي تزيد من فعالية الذكاء الاصطناعي.

## مقارنة كاملة لمستويات قواعد مشروع كورسر: العالمية مقابل المستودع مقابل المرتبطة بالسياق

فيما يلي مقارنة سريعة للمستويات الثلاثة من قواعد مشروع كورسر في كورسر IDE:

| الميزة | إعدادات IDE العالمية | قواعد المستودع (.cursor/index.mdc "Always") | قواعد مرتبطة بالسياق (.cursor/*.mdc) |
|---------|--------------------|-----------------------------|----------------------------------|
| **النطاق** | جميع المشاريع | مستودع محدد | مهام أو سياقات محددة |
| **الرؤية** | أنت فقط (إعدادات محلية) | الفريق بأكمله عبر المستودع | الفريق بأكمله عبر المستودع |
| **الاستمرارية** | تبقى عبر المشاريع | مرتبطة بالمستودع | مرتبطة بالمستودع |
| **التفعيل** | نشط دائمًا | نشط دائمًا للمستودع | فقط عندما يكون ذا صلة بالمهمة الحالية |
| **الأفضل لـ** | قواعد مشروع كورسر العالمية | أنماط هندسة المشروع | المعرفة المتخصصة بالمجال |
| **كفاءة الرموز** | منخفضة (موجودة دائمًا) | متوسطة (موجودة دائمًا للمشروع) | عالية (تُحمّل فقط عند الحاجة) |
| **موقع الإعداد** | واجهة إعدادات كورسر | ملف .cursor/index.mdc | دليل .cursor/rules/ |
| **قابلية النقل** | يتطلب إعدادًا يدويًا على كل جهاز | تلقائي مع استنساخ المستودع | تلقائي مع استنساخ المستودع |
| **دعم التراث** | غير متاح | .cursorrules لا يزال يعمل (تراثي) | غير متاح |

يتيح لك هذا النهج متعدد المستويات تحسين استخدام الرموز مع الحفاظ على التوجيه المتسق عبر سيناريوهات مختلفة.

### إدارة إعدادات كورسر IDE المحلية بكفاءة

المفتاح هو تحقيق التوازن - قواعد قليلة جدًا والذكاء الاصطناعي لن يفهم تفضيلاتك؛ قواعد كثيرة جدًا وستضيع الرموز على سياق غير ذي صلة.

من المهم ملاحظة أن هذه الإعدادات مخزنة محليًا في تثبيت كورسر IDE الخاص بك. لن يرى زملاؤك هذه الإعدادات ما لم يقوموا بتكوينها على أجهزتهم الخاصة. أيضًا، إذا كنت تستخدم كورسر IDE على أجهزة كمبيوتر متعددة (مثل حسابات شخصية وعمل منفصلة)، ستحتاج إلى إعدادها يدويًا على كل تثبيت.

### إنشاء ملفات .cursor/index.mdc على مستوى المستودع لفرق المشروع

للتكوين على مستوى المشروع:

1. أنشئ ملف `.cursor/index.mdc` في المستودع الخاص بك
2. اضبط نوع القاعدة على "Always" في واجهة كورسر (أو حدد يدوياً في الملف)
3. ابدأ بنظرة عامة موجزة عن المشروع (ما يفعله المشروع، المكدس التقني، إلخ)
4. وثّق أنماط الهندسة التي يجب أن يفهمها الذكاء الاصطناعي
5. أدرج اتفاقيات الكود المحددة لهذا المشروع
6. احتفظ بالملف تحت 100 سطر للاستخدام الأمثل للرموز

ملاحظة: ملفات `.cursorrules` التقليدية لا تزال تعمل ولكنها لم تعد النهج الموصى به.

#### قالب قواعد مشروع كورسر على مستوى المستودع

إليك قالبًا بسيطًا للبدء:

```markdown
# المشروع: [اسم المشروع]

## نظرة عامة
- الغرض: [وصف موجز]
- التقنيات: [التقنيات الرئيسية]
- الهندسة: [النمط الرئيسي - MVC، الخدمات المصغرة، إلخ]

## أنماط الكود
- [سرد أنماط خاصة بالمشروع]

## متطلبات النمط
- [إرشادات النمط الخاصة بالمشروع]
```

### بناء ملفات قواعد .mdc المرتبطة بالسياق للمهام المتخصصة

للتكوين المتقدم:

1. أنشئ دليل `.cursor/rules/` في المستودع الخاص بك
2. أضف ملفات `.mdc` محددة لسياقات مختلفة
3. قم بتسمية الملفات بشكل وصفي بناءً على الغرض منها
4. احتفظ بكل ملف مركزًا على اهتمام محدد واحد
5. أدرج وصفًا موجزًا في أعلى كل ملف لمساعدة الذكاء الاصطناعي على فهم متى يطبق هذه القواعد

#### إنشاء القواعد: طرق الواجهة اليدوية مقابل واجهة كورسر IDE

يمكنك إنشاء هذه الملفات يدويًا، أو استخدام واجهة كورسر IDE:
1. اذهب إلى الإعدادات > القواعد
2. انقر على "إضافة قاعدة"
3. أدخل اسمًا ووصفًا لقاعدتك
4. أضف محتوى القاعدة المخصصة
5. احفظ القاعدة، وسينشئ كورسر ملف `.mdc` المناسب في المستودع الخاص بك

تعمل كلتا النهجين بشكل جيد بنفس القدر - إنشاء الملف اليدوي يمنحك المزيد من التحكم في هيكل الملف، بينما توفر واجهة كورسر تجربة أكثر توجيهًا.

#### مثال ملف قواعد كورسر لتطوير React

على سبيل المثال، قد يبدو ملف قواعد مكون React كما يلي:

```markdown
# إرشادات مكون React

تنطبق هذه القواعد عند العمل مع مكونات React في هذا المشروع.

## هيكل المكون
- مكونات وظيفية مع واجهات TypeScript للخصائص
- خطافات مخصصة لإدارة الحالة المعقدة
- مكونات منسقة للتصميم

## اتفاقيات التسمية
- ملفات المكونات: PascalCase.tsx
- ملفات الخطاف: use[Name].ts
- ملفات التصميم: [name].styles.ts
```

## فوائد قابلة للقياس من استخدام قواعد مشروع كورسر للترميز بمساعدة الذكاء الاصطناعي

بعد تنفيذ نظام قواعد مشروع كورسر متعدد المستويات هذا، رأيت تحسينات ملموسة عبر عدة أبعاد.

### تحسين مقاييس جودة الكود من خلال قواعد مشروع كورسر المتسقة

كانت الفائدة الأكثر فورية هي جودة الكود المتسقة. من خلال ترميز تفضيلاتي في قواعد مشروع كورسر، ينتج الذكاء الاصطناعي كودًا:

- يتبع مبادئ البرمجة الوظيفية باستمرار
- ينفذ التعامل المناسب مع الأخطاء دون طلب
- يتضمن كتابة الأنواع المناسبة دون تذكير مستمر
- يحافظ على اتفاقيات التسمية المتسقة في كل مكان

يترجم هذا إلى تعليقات مراجعة أقل ووقت أقل يُقضى في إصلاحات النمط. شهد أحد المشاريع انخفاضًا بنسبة 50% في تعليقات طلبات السحب المتعلقة بالنمط بعد تنفيذ قواعد مشروع كورسر هذه.

### تعزيز تعاون الفريق مع قواعد مشروع كورسر المشتركة

عند العمل مع الفرق، تخلق قواعد مشروع كورسر فهمًا مشتركًا:

- يفهم أعضاء الفريق الجدد التوقعات بسرعة من خلال ملفات القواعد على مستوى المستودع
- يتحسن التعاون متعدد الوظائف حيث يمكن لكل من المهندسين وغير المهندسين الرجوع إلى نفس القواعد
- تحدث مشاركة المعرفة تلقائيًا حيث يطبق الذكاء الاصطناعي أفضل الممارسات باستمرار

وجدت هذا مفيدًا بشكل خاص عند تأهيل المطورين المبتدئين - فهم يحصلون على ملاحظات فورية حول أفضل الممارسات دون انتظار مراجعات الكود.

### مكاسب الإنتاجية من تفاعلات الذكاء الاصطناعي المحسنة في كورسر IDE

الأرقام تتحدث عن نفسها:

- حوالي 60% انخفاض في الوقت المستغرق في شرح معايير الكود لأعضاء الفريق الجدد
- حوالي 35% تقديم أسرع لطلبات السحب الأولية مع دورات مراجعة أقل
- حوالي 40% أقل من التزامات "إصلاح النمط" التي تشوش سجل git

لكن المقياس الأكثر قيمة كان النطاق الترددي العقلي. من خلال تفويض مخاوف النمط إلى الذكاء الاصطناعي، يمكن للمطورين التركيز على حل المشكلة الفعلية بدلاً من تذكر قواعد التنسيق.

## تقنيات قواعد مشروع كورسر المتقدمة للمطورين المحترفين

عندما تصبح مرتاحًا مع هياكل القواعد الأساسية، جرّب هذه التقنيات المتقدمة لتنقيح تجربة المساعدة بالذكاء الاصطناعي بشكل أكبر.

### قواعد مشروع كورسر المتخصصة بمهام محددة لسيناريوهات التطوير الشائعة

وجدت أن ملفات قواعد مشروع كورسر المتخصصة فعالة بشكل خاص لهذه السيناريوهات:

#### قواعد الاختبار (`test-guidelines.mdc`)

- أنماط تسمية الاختبارات
- إرشادات استراتيجية المحاكاة
- توقعات تغطية الاختبار

#### قواعد تكامل واجهة برمجة التطبيقات (`api-standards.mdc`)

- توقعات معالجة الأخطاء
- أنماط منطق إعادة المحاولة
- معايير تدفق المصادقة

#### قواعد إدارة الحالة (`state-patterns.mdc`)

- اتفاقيات تسمية إجراءات Redux
- إرشادات تطبيع الحالة
- أنماط التعامل مع الآثار الجانبية

من خلال تقسيم هذه الاهتمامات، يبقى كل ملف مركزًا ويُفعّل فقط عندما يكون ذا صلة بمهمتك الحالية.

### تحسين استخدام رموز الذكاء الاصطناعي في قواعد مشروع كورسر

لتعظيم نافذة السياق الفعالة للذكاء الاصطناعي:

1. **إعطاء الأولوية للحداثة**: ضع القواعد الأكثر أهمية في بداية الملفات أو نهايتها
2. **استخدام الهيكل الهرمي**: ابدأ بالمبادئ العامة، ثم انتقل إلى التفاصيل
3. **القضاء على التكرار**: لا تكرر نفس القاعدة في عدة أماكن
4. **استخدام لغة موجزة**: اكتب القواعد في نقاط بدلاً من فقرات
5. **الاستفادة من تنسيق markdown**: استخدم العناوين للتمييز بين فئات القواعد

كقاعدة عامة، إذا تجاوز ملف القواعد 100 سطر، فمن المحتمل أنه يحاول القيام بالكثير ويجب تقسيمه إلى مكونات أكثر تركيزًا.

### استكشاف مشكلات قواعد مشروع كورسر الشائعة وحلولها

عندما لا تنتج قواعد مشروع كورسر النتائج المتوقعة:

1. **تعارضات القواعد**: تحقق مما إذا كانت لديك إرشادات متناقضة عبر مستويات مختلفة
2. **عامة جدًا**: اجعل قواعد مشروع كورسر أكثر تحديدًا بأمثلة ملموسة
3. **محددة جدًا**: القواعد الضيقة للغاية قد لا تُعمم على سيناريوهات مماثلة
4. **قيود الرموز**: إذا كانت قواعد مشروع كورسر مبتورة، حدد الأولويات وبسّط
5. **نقص السياق**: قد يحتاج الذكاء الاصطناعي إلى سياق ملف إضافي لتطبيق القواعد بشكل صحيح
6. **زيادة القواعد**: عندما تظهر الكثير من قواعد مشروع كورسر في نفس الحوار، يواجه النموذج صعوبة في تذكر واتباع جميعها في وقت واحد - أعط الأولوية للأهم منها

لقد وجدت أن مراجعة الكود المُنشأ مقابل قواعد مشروع كورسر الخاصة بي وتنقيحها بشكل تكراري يؤدي إلى تحسين مستمر في جودة المساعدة بالذكاء الاصطناعي.

## كورسر IDE مقابل مساعدي الترميز بالذكاء الاصطناعي الآخرين: مقارنة نُهج التكوين

بينما يتمتع كورسر بنظام مصمم بشكل جيد للقواعد، تتمتع مساعدي الترميز بالذكاء الاصطناعي الأخرى بنهج مماثلة للتخصيص:

- يوفر GitHub Copilot ملف `.github/copilot/settings.yml` للتكوين على مستوى المشروع
- يمتلك JetBrains AI Assistant مقتطفات وقوالب على مستوى المشروع
- يدعم VS Code مع مختلف ملحقات الذكاء الاصطناعي إعدادات مساحة العمل وملفات التخصيص

### اقتصاد الرموز: تعظيم أداء الذكاء الاصطناعي عبر جميع الأدوات

ما يوحد جميع هذه النهج هو مبدأ أساسي: **تقليل استخدام الرموز ضروري للحصول على نتائج مثلى**. بغض النظر عن مساعد الترميز بالذكاء الاصطناعي الذي تستخدمه، فإن توفير سياق كافٍ دون إغراق النموذج هو مفتاح النجاح.

يعمل اقتصاد الرموز بنفس الطريقة عبر جميع الأدوات المدعومة بـ LLM:
1. كل كلمة تضيفها إلى تعليماتك تستهلك رموزًا
2. الرموز المستخدمة للتعليمات تقلل من السياق المتاح لفهم الكود
3. التوجيه المطول بشكل مفرط يؤدي إلى عوائد متناقصة

لذا سواء كنت تستخدم نظام القواعد ثلاثي المستويات في كورسر أو خيارات التكوين لأداة أخرى، اسعَ دائمًا لأن تكون دقيقًا وموجزًا. ركز توجيهك على الأنماط والتفضيلات المحددة التي تهمك أكثر، ودع الذكاء الاصطناعي يتعامل مع الباقي.

الميزة الحقيقية ليست في أي أداة توفر معظم خيارات التخصيص، بل في مدى تفكيرك في استخدام الخيارات المتاحة لتوصيل توقعاتك دون إضاعة الرموز على الإطناب غير الضروري.

## درس فيديو: شاهد تنفيذ قواعد كورسر IDE الكامل

إذا كنت تفضل التعلم البصري، فقد أنشأت درسًا شاملاً بالفيديو يوضح التنفيذ الكامل لنظام قواعد كورسر ثلاثي المستويات:

[![Ultimate Cursor AI IDE Rules Guide: All 5 Levels and .cursorrules (2025)](/articles/cursor-ide-rules-video-tutorial.webp)](https://youtu.be/gw8otRr2zpw?si=z5wE2PNHugtH9yrx)

يغطي الفيديو:
- إعداد قواعد كورسر العامة في إعدادات كورسر IDE
- إنشاء ملفات قواعد خاصة بالمستودع: النهج الجديد `.cursor/index.mdc` مع Rule Type "Always" والنهج التقليدي `.cursorrules` (legacy)
- تنفيذ ملفات `.cursor/*.mdc` الحساسة للسياق للمهام المتخصصة
- إظهار كيف يعمل كل مستوى معًا لتحسين مساعدة الذكاء الاصطناعي
- استكشاف المشاكل الشائعة وإصلاحها وتحسين استخدام الرموز

ستشاهد سير العمل بأكمله قيد التنفيذ، من الإعداد الأولي إلى التكوينات متعددة المستويات المتقدمة التي تغير طريقة تعاونك مع مساعدي الذكاء الاصطناعي.