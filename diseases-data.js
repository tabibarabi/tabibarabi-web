const diseasesDB = {
    "diabetes": {
        title: "مرض السكري من النوع الثاني (Type 2 Diabetes)",
        categoryId: "internal",
        category: "باطنة وغدد صماء",
        badgeClass: "bg-primary",
        overview: "اضطراب أيضي مزمن يتميز بارتفاع مستويات السكر في الدم نتيجة لمقاومة الخلايا لعمل هرمون الأنسولين، وضعف إفراز الأنسولين تدريجياً.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض الشائعة</h4>
            <ul class="med-list med-text">
                <li><strong>كثرة التبول (Polyuria):</strong> خاصة في الليل، نتيجة محاولة الكلى طرد الجلوكوز الزائد.</li>
                <li><strong>العطش الشديد (Polydipsia):</strong> لتعويض السوائل المفقودة.</li>
                <li><strong>الجوع المفرط (Polyphagia):</strong> لعدم قدرة الجلوكوز على دخول الخلايا.</li>
                <li><strong>زغللة الرؤية:</strong> بسبب تغير كمية السوائل في عدسة العين.</li>
                <li><strong>تأخر التئام الجروح:</strong> لضعف الدورة الدموية وتأثير السكر على المناعة.</li>
            </ul>
            <h4 class="med-section-title"><i class="fas fa-microscope"></i> التشخيص والمعايير القياسية</h4>
            <ul class="med-list med-text">
                <li>السكر الصائم: أكبر من أو يساوي 126 مجم/ديسيلتر.</li>
                <li>السكر التراكمي (HbA1c): أكبر من أو يساوي 6.5%.</li>
            </ul>
            <h4 class="med-section-title"><i class="fas fa-exclamation-triangle"></i> المضاعفات</h4>
            <p class="med-text">اعتلال الشبكية السكري، اعتلال الكلى السكري، اعتلال الأعصاب الطرفية (القدم السكري)، وأمراض القلب.</p>
        `,
        pharmaTitle: "البروتوكول العلاجي والأدوية (Pharmacotherapy)",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>الميتفورمين (Metformin):</strong> خط العلاج الأول. يعمل على تقليل إنتاج الجلوكوز من الكبد.</li>
                <li><strong>مثبطات SGLT2 (Dapagliflozin):</strong> تمنع إعادة امتصاص الجلوكوز في الكلى وتطرده في البول (تحمي القلب والكلى).</li>
                <li><strong>منبهات GLP-1 (Ozempic/Wegovy):</strong> حقن تزيد إفراز الأنسولين بذكاء وقت الأكل وتسد الشهية بقوة.</li>
            </ul>
        `
    },
    "hypertension": {
        title: "ارتفاع ضغط الدم (Hypertension)",
        categoryId: "internal",
        category: "قلب وأوعية دموية",
        badgeClass: "bg-danger",
        overview: "يُعرف بـ 'القاتل الصامت'. حالة مرضية تزداد فيها قوة دفع الدم ضد جدران الشرايين باستمرار، مما يجهد عضلة القلب.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأسباب وعوامل الخطر</h4>
            <ul class="med-list med-text">
                <li><strong>أولي (95%):</strong> مجهول السبب، مرتبط بالوراثة، العمر، السمنة، الملح، والتوتر.</li>
                <li><strong>ثانوي (5%):</strong> ناتج عن أمراض الكلى أو نشاط الغدة الدرقية.</li>
            </ul>
            <h4 class="med-section-title"><i class="fas fa-heartbeat"></i> الأعراض</h4>
            <p class="med-text">لا توجد أعراض لسنوات. في الارتفاع الشديد يحدث: صداع خلفي نابض، طنين في الأذن، رعاف، وزغللة.</p>
        `,
        pharmaTitle: "البروتوكول العلاجي والأدوية (Antihypertensives)",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>مثبطات ACE (Ramipril):</strong> ممتازة لمرضى السكر لحماية الكلى (قد تسبب سعالاً).</li>
                <li><strong>حاصرات ARBs (Valsartan):</strong> بديل ممتاز لمن يعاني من السعال.</li>
                <li><strong>حاصرات قنوات الكالسيوم (Amlodipine):</strong> ترخي الأوعية الدموية وتوسعها.</li>
                <li><strong>مدرات البول (Hydrochlorothiazide):</strong> تطرد الصوديوم والماء الزائد.</li>
                <li><strong>حاصرات بيتا (Bisoprolol):</strong> تبطئ ضربات القلب.</li>
            </ul>
        `
    },
    "acne": {
        title: "حب الشباب (Acne Vulgaris)",
        categoryId: "derma",
        category: "أمراض جلدية",
        badgeClass: "bg-success",
        overview: "مرض جلدي التهابي مزمن يصيب بصيلات الشعر والغدد الدهنية. ينتشر غالباً في الوجه والظهر.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأسباب الفسيولوجية</h4>
            <ul class="med-list med-text">
                <li>فرط إفراز الدهون (Sebum) بسبب الهرمونات.</li>
                <li>انسداد المسام بخلايا الجلد الميتة.</li>
                <li>النشاط البكتيري (C. acnes) داخل المسام المسدودة مسببة الالتهاب.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي (Dermatological Treatment)",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>العلاجات الموضعية:</strong> الريتينويدات (Adapalene) للتقشير ليلاً، وبيروكسيد البنزويل لقتل البكتيريا.</li>
                <li><strong>المضادات الحيوية الفموية:</strong> Doxycycline للحالات المتوسطة الملتهبة.</li>
                <li><strong>الآيزوتريتينوين (Roaccutane):</strong> العلاج النهائي للحالات الشديدة والتكيسية (يُمنع للحوامل ويحتاج متابعة للكبد).</li>
            </ul>
        `
    },
    "bph": {
        title: "تضخم البروستاتا الحميد (BPH)",
        categoryId: "uro",
        category: "مسالك بولية وذكورة",
        badgeClass: "bg-secondary",
        overview: "زيادة غير سرطانية في حجم غدة البروستاتا المحيطة بمجرى البول لدى الرجال، تحدث مع التقدم في العمر.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض الشائعة</h4>
            <ul class="med-list med-text">
                <li>كثرة التبول ليلاً (Nocturia).</li>
                <li>صعوبة وضعف في اندفاع تيار البول.</li>
                <li>الشعور بعدم إفراغ المثانة بالكامل.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي والأدوية",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>حاصرات ألفا (Tamsulosin):</strong> ترخي عضلات عنق المثانة والبروستاتا لتسهيل التبول فوراً.</li>
                <li><strong>مثبطات 5-ARIs (Finasteride):</strong> تمنع تحول التستوستيرون لـ DHT لتقليص حجم الغدة الفعلي بمرور الوقت.</li>
            </ul>
        `
    },
    "renal-stones": {
        title: "حصوات الكلى (Renal Stones)",
        categoryId: "uro",
        category: "مسالك بولية",
        badgeClass: "bg-secondary",
        overview: "ترسبات صلبة من المعادن والأملاح تتشكل داخل الكلى وتنتقل عبر الحالب، تعتبر من أكثر الحالات الطبية ألماً.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض</h4>
            <ul class="med-list med-text">
                <li><strong>المغص الكلوي:</strong> ألم حاد ومفاجئ في الخاصرة يمتد إلى أسفل البطن.</li>
                <li>ظهور دم في البول (Hematuria).</li>
                <li>غثيان وقيء مصاحب للألم.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي والتدخلات",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>تسكين الألم:</strong> مسكنات (NSAIDs) مثل Ketorolac حقناً لتسكين المغص.</li>
                <li><strong>طرد الحصوة:</strong> حاصرات ألفا (Tamsulosin) لإرخاء الحالب، مع شرب ماء بكثرة للحصوات أقل من 10 مم.</li>
                <li><strong>تفتيت الحصوات (ESWL):</strong> بالموجات التصادمية للحصوات الكبيرة.</li>
            </ul>
        `
    },
    "migraine": {
        title: "الصداع النصفي (Migraine)",
        categoryId: "neuro",
        category: "مخ وأعصاب",
        badgeClass: "bg-info text-dark",
        overview: "اضطراب عصبي معقد يتسم بنوبات متكررة من الصداع النابض (غالباً في جانب واحد من الرأس).",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض الشائعة</h4>
            <ul class="med-list med-text">
                <li>صداع نابض أو خافق يزداد سوءاً مع المجهود.</li>
                <li>التحسس الشديد للضوء والصوت.</li>
                <li><strong>الأورة (Aura):</strong> اضطرابات بصرية تسبق الصداع.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي (إجهاض النوبة والوقاية)",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>علاج النوبة (Abortive):</strong> المسكنات القوية (NSAIDs)، وعائلة التريبتان (Sumatriptan) لتقبيض الأوعية الدموية.</li>
                <li><strong>العلاج الوقائي:</strong> حاصرات بيتا (Propranolol)، مضادات الاكتئاب (Amitriptyline)، ومضادات التشنج (Topiramate).</li>
            </ul>
        `
    },
    "ibs": {
        title: "متلازمة القولون العصبي (IBS)",
        categoryId: "gastro",
        category: "جهاز هضمي وكبد",
        badgeClass: "bg-warning text-dark",
        overview: "اضطراب وظيفي في الجهاز الهضمي يتميز بألم في البطن وتغيرات في التبرز، يرتبط بشدة بالتوتر.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض والمهيجات</h4>
            <ul class="med-list med-text">
                <li>ألم ومغص في البطن يخف جزئياً بعد التبرز.</li>
                <li>انتفاخ وتراكم غازات، مع تناوب بين الإسهال والإمساك.</li>
                <li><strong>المهيجات:</strong> التوتر، البقوليات، منتجات الألبان.</li>
            </ul>
        `,
        pharmaTitle: "الإدارة الدوائية وتعديل نمط الحياة",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>مضادات التقلصات:</strong> Mebeverine لإرخاء عضلات القولون.</li>
                <li><strong>مضادات الانتفاخ:</strong> Simethicone وزيت النعناع.</li>
                <li><strong>الحمية:</strong> اتباع نظام (FODMAP) قليل السكريات المتخمرة.</li>
            </ul>
        `
    },
    "hpylori": {
        title: "جرثومة المعدة (Helicobacter Pylori)",
        categoryId: "gastro",
        category: "جهاز هضمي ومناظير",
        badgeClass: "bg-warning text-dark",
        overview: "بكتيريا حلزونية تعيش في بطانة المعدة، وهي المسبب الرئيسي لالتهاب وقرحة المعدة.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض والمضاعفات</h4>
            <ul class="med-list med-text">
                <li>ألم حارق في أعلى البطن يزداد عندما تكون المعدة فارغة.</li>
                <li>غثيان، كثرة التجشؤ، وشعور سريع بالشبع.</li>
                <li>قد تسبب قرحة نازفة إذا تركت بدون علاج.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي (العلاج الثلاثي)",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>مثبطات مضخة البروتون (PPI):</strong> Omeprazole لتقليل الحمض.</li>
                <li><strong>المضادات الحيوية:</strong> دمج Clarithromycin مع Amoxicillin أو Metronidazole لمدة 14 يوماً.</li>
            </ul>
        `
    },
    "pcos": {
        title: "متلازمة تكيس المبايض (PCOS)",
        categoryId: "obgyn",
        category: "نساء وتوليد",
        badgeClass: "bg-danger",
        overview: "اضطراب هرموني شائع بين النساء، يتسم بزيادة هرمونات الذكورة (الأندروجين) واضطراب التبويض.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض (معايير روتردام)</h4>
            <ul class="med-list med-text">
                <li>عدم انتظام الدورة الشهرية أو انقطاعها.</li>
                <li>زيادة نمو الشعر في الوجه والجسم، وحب الشباب المقاوم.</li>
                <li>زيادة الوزن وصعوبة فقدانه. تأخر الحمل.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي المتكامل",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>الميتفورمين (Metformin):</strong> لتقليل مقاومة الأنسولين وتحسين التبويض والوزن.</li>
                <li><strong>لتنظيم الدورة وعلاج الشعر:</strong> حبوب منع الحمل المركبة، ومضادات الأندروجين (Spironolactone).</li>
                <li><strong>لتحفيز الإباضة:</strong> Clomiphene أو Letrozole.</li>
            </ul>
        `
    },
    "osteoarthritis": {
        title: "خشونة المفاصل (Osteoarthritis)",
        categoryId: "ortho",
        category: "عظام ومفاصل",
        badgeClass: "bg-dark",
        overview: "يحدث نتيجة تآكل الغضروف الواقي لنهايات العظام، مما يؤدي لاحتكاكها ببعضها (يصيب الركبتين غالباً).",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض</h4>
            <ul class="med-list med-text">
                <li>ألم عميق في المفصل يزداد مع الحركة ويقل بالراحة.</li>
                <li>تيبس صباحي يزول خلال 30 دقيقة.</li>
                <li>سماع صوت طقطقة أو صرير عند ثني المفصل.</li>
            </ul>
        `,
        pharmaTitle: "إدارة الألم والبروتوكول العلاجي",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>تسكين الألم:</strong> مسكنات (NSAIDs) مثل Meloxicam.</li>
                <li><strong>الحقن الموضعي:</strong> حقن الكورتيزون (للالتهاب) أو حمض الهيالورونيك (للزوجة السائل).</li>
                <li><strong>إنقاص الوزن:</strong> الأساس لتخفيف الحمل الميكانيكي على الركبتين.</li>
            </ul>
        `
    },
    "asthma": {
        title: "الربو الشعبي عند الأطفال (Pediatric Asthma)",
        categoryId: "pedia",
        category: "طب الأطفال والحساسية",
        badgeClass: "bg-primary",
        overview: "مرض تنفسي مزمن يتميز بالتهاب وتضيق ممرات الهواء استجابةً لمثيرات بيئية.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض والمثيرات</h4>
            <ul class="med-list med-text">
                <li>سعال متكرر ليلاً أو عند اللعب.</li>
                <li>صوت أزيز (Wheezing) أثناء الزفير.</li>
                <li>ضيق في التنفس. المثيرات: الأتربة، الدخان، وبر الحيوانات.</li>
            </ul>
        `,
        pharmaTitle: "أدوية الإنقاذ والوقاية (البخاخات)",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>الإغاثة السريعة (SABA):</strong> بخاخة Salbutamol وقت الأزمة فقط لتوسيع الشعب.</li>
                <li><strong>الوقاية (ICS):</strong> بخاخات الكورتيكوستيرويد (Fluticasone) لمنع الالتهاب، ومضادات الليكوترين (Montelukast).</li>
            </ul>
        `
    },
    "stroke": {
        title: "السكتة الدماغية / الجلطة (Stroke)",
        categoryId: "neuro",
        category: "مخ وأعصاب وطوارئ",
        badgeClass: "bg-info text-dark",
        overview: "حالة طوارئ تحدث عندما ينقطع إمداد الدم لجزء من الدماغ (إقفارية) أو ينفجر وعاء دموي (نزفية).",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض (اختبار FAST)</h4>
            <ul class="med-list med-text">
                <li><strong>F:</strong> تدلي أو اعوجاج نصف الوجه.</li>
                <li><strong>A:</strong> ضعف في ذراع واحد.</li>
                <li><strong>S:</strong> ثقل وصعوبة في الكلام.</li>
                <li><strong>T:</strong> الوقت للإسعاف (النافذة الذهبية أول 4.5 ساعات).</li>
            </ul>
        `,
        pharmaTitle: "التدخل الطبي الطارئ والأدوية",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>الطوارئ (للسكتة الإقفارية):</strong> الأدوية المذيبة للجلطة (tPA) وريدياً لإنقاذ الخلايا العصبية.</li>
                <li><strong>الوقاية الثانوية:</strong> مضادات الصفائح (Aspirin, Clopidogrel) وأدوية الكوليسترول (Statins) لتثبيت لويحات الشرايين.</li>
            </ul>
        `
    },
    "depression": {
        title: "الاكتئاب الجسيم (Major Depression)",
        categoryId: "psych",
        category: "طب نفسي",
        badgeClass: "bg-secondary",
        overview: "مرض طبي حقيقي ناتج عن خلل في النواقل العصبية (كالسيروتونين)، يؤثر بعمق على التفكير والشعور.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض التشخيصية</h4>
            <ul class="med-list med-text">
                <li>مزاج مكتئب معظم اليوم، وانعدام للشغف في الأنشطة المعتادة.</li>
                <li>تغيرات شديدة في الشهية واضطرابات النوم.</li>
                <li>فقدان الطاقة والشعور المفرط بالذنب.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي (الدوائي والسلوكي)",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>مضادات الاكتئاب (SSRIs):</strong> مثل Fluoxetine و Escitalopram. تحتاج 2-6 أسابيع لظهور مفعولها.</li>
                <li><strong>مضادات (SNRIs):</strong> مثل Duloxetine.</li>
                <li><strong>العلاج السلوكي المعرفي (CBT):</strong> لتغيير الأفكار السلبية.</li>
            </ul>
        `
    },
    "gerd": {
        title: "ارتجاع المريء (GERD)",
        categoryId: "gastro",
        category: "جهاز هضمي ومناظير",
        badgeClass: "bg-warning text-dark",
        overview: "ارتداد حمض المعدة إلى المريء نتيجة ضعف العضلة العاصرة للمريء السفلى.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض</h4>
            <ul class="med-list med-text">
                <li>حرقة شديدة في الصدر تزداد عند الاستلقاء.</li>
                <li>طعم حامض في مؤخرة الحلق. صعوبة البلع.</li>
                <li>سعال مزمن غير مبرر.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي الدوائي",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>مثبطات مضخة البروتون (PPIs):</strong> Esomeprazole، توقف إفراز الحمض (الخط الأول).</li>
                <li><strong>حاصرات H2:</strong> Famotidine لتقليل الإفراز الليلي.</li>
                <li><strong>الأدوية المنظمة للحركة (Prokinetics):</strong> Itopride لسرعة إفراغ المعدة.</li>
            </ul>
        `
    },
    "rheumatoid": {
        title: "الروماتويد (Rheumatoid Arthritis)",
        categoryId: "ortho",
        category: "روماتيزم ومناعة",
        badgeClass: "bg-dark",
        overview: "مرض مناعي ذاتي، يهاجم فيه جهاز المناعة الأغشية المبطنة للمفاصل، مسبباً التهاباً وتورماً وتشوهاً.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض والتشخيص</h4>
            <ul class="med-list med-text">
                <li>ألم وتورم متماثل في المفاصل (اليدين).</li>
                <li>تيبس صباحي شديد يستمر لأكثر من ساعة.</li>
                <li>التشخيص بتحاليل (Rheumatoid Factor) و (Anti-CCP).</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي (التقليدي والبيولوجي)",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>الأدوية المعدلة للمرض (DMARDs):</strong> Methotrexate لإيقاف تقدم المرض.</li>
                <li><strong>العلاجات البيولوجية:</strong> مثبطات TNF (Adalimumab) للحالات التي لا تستجيب.</li>
                <li><strong>الكورتيكوستيرويدات:</strong> لتهدئة الهجمات الحادة بسرعة.</li>
            </ul>
        `
    },
    "ida": {
        title: "أنيميا نقص الحديد (Iron Deficiency Anemia)",
        categoryId: "pedia",
        category: "طب الأطفال والتغذية",
        badgeClass: "bg-primary",
        overview: "افتقار الجسم للحديد اللازم لإنتاج الهيموجلوبين في الدم، وهو أكثر أنواع فقر الدم شيوعاً.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض والمسببات</h4>
            <ul class="med-list med-text">
                <li>شحوب واضح في الوجه وباطن الجفون. ضعف الشهية وتأخر النمو.</li>
                <li>اشتهاء أكل أشياء غريبة (التراب) في الحالات الشديدة.</li>
                <li>السبب: كثرة الحليب البقري للرضع، وسوء التغذية.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي الصيدلاني",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>مكملات الحديد الفموية:</strong> أملاح الحديد (Ferrous sulfate) بجرعة محسوبة للوزن.</li>
                <li><strong>قواعد الامتصاص:</strong> يؤخذ على معدة فارغة أو مع فيتامين سي، ويُمنع إعطاؤه مع الحليب.</li>
                <li><strong>المدة:</strong> يستمر العلاج 2-3 أشهر بعد عودة الهيموجلوبين لطبيعته لملء المخازن.</li>
            </ul>
        `
    },
    "psoriasis": {
        title: "الصدفية (Psoriasis)",
        categoryId: "derma",
        category: "أمراض جلدية ومناعة",
        badgeClass: "bg-success",
        overview: "مرض جلدي مناعي يسرع دورة حياة خلايا الجلد، مسبباً تراكماً للخلايا على شكل قشور فضية.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض</h4>
            <ul class="med-list med-text">
                <li>بقع حمراء مغطاة بقشور فضية بيضاء (في الركبتين، المرفقين، فروة الرأس).</li>
                <li>جفاف وتشقق الجلد، وتغيرات في الأظافر (حفر).</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي المتدرج",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>العلاجات الموضعية:</strong> الكورتيكوستيرويدات، نظائر فيتامين د (Calcipotriene) لإبطاء نمو الخلايا.</li>
                <li><strong>العلاج الضوئي:</strong> الأشعة (UVB).</li>
                <li><strong>العلاجات الجهازية والبيولوجية:</strong> Methotrexate أو مثبطات IL-17 للحالات الشديدة.</li>
            </ul>
        `
    },
    "epilepsy": {
        title: "الصرع والتشنجات (Epilepsy)",
        categoryId: "neuro",
        category: "مخ وأعصاب",
        badgeClass: "bg-info text-dark",
        overview: "اضطراب عصبي في نشاط الدماغ (عاصفة كهربائية)، يسبب نوبات متكررة من التشنجات أو فقدان الوعي.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> أنواع النوبات</h4>
            <ul class="med-list med-text">
                <li><strong>النوبات البؤرية:</strong> في منطقة واحدة من الدماغ (حركات لا إرادية بجزء من الجسم).</li>
                <li><strong>النوبات العامة:</strong> تشنج الجسم بالكامل وفقدان الوعي (Tonic-Clonic).</li>
                <li><strong>نوبات الغياب:</strong> التحديق في الفراغ للحظات (شائعة في الأطفال).</li>
            </ul>
        `,
        pharmaTitle: "مضادات التشنج (AEDs)",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>للنوبات العامة:</strong> Valproic Acid (Depakine) أو Levetiracetam (Keppra).</li>
                <li><strong>للنوبات البؤرية:</strong> Carbamazepine (Tegretol).</li>
                <li><strong>الطوارئ (حالة الصرع المستمر):</strong> حقن Diazepam أو Lorazepam وريدياً لإيقاف التشنج فوراً.</li>
            </ul>
        `
    },
    "hypothyroidism": {
        title: "قصور الغدة الدرقية (Hypothyroidism)",
        categoryId: "internal",
        category: "باطنة وغدد صماء",
        badgeClass: "bg-primary",
        overview: "عدم إنتاج الغدة الدرقية ما يكفي من الهرمونات لتنظيم عملية الأيض. أشهر أسبابها التهاب هاشيموتو المناعي.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض التحذيرية</h4>
            <ul class="med-list med-text">
                <li>إرهاق شديد وخمول. زيادة غير مبررة في الوزن.</li>
                <li>شعور دائم بالبرودة. جفاف الجلد وتساقط الشعر بغزارة وإمساك مزمن.</li>
            </ul>
        `,
        pharmaTitle: "العلاج التعويضي الهرموني",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>العلاج الأساسي:</strong> الليفوثيروكسين (Levothyroxine - Euthyrox) يطابق الهرمون الطبيعي.</li>
                <li><strong>قواعد التناول:</strong> يؤخذ صباحاً على معدة فارغة تماماً (قبل الإفطار بساعة) لتجنب ضعف الامتصاص.</li>
            </ul>
        `
    },
    "ed": {
        title: "ضعف الانتصاب (Erectile Dysfunction)",
        categoryId: "uro",
        category: "مسالك بولية وذكورة",
        badgeClass: "bg-secondary",
        overview: "عدم القدرة المستمرة على تحقيق انتصاب كافٍ. غالباً ما يكون مؤشراً لمشاكل في الأوعية الدموية أو القلب.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأسباب العضوية والنفسية</h4>
            <ul class="med-list med-text">
                <li><strong>وعائية:</strong> تصلب الشرايين، ضغط الدم، والسكري.</li>
                <li><strong>هرمونية:</strong> انخفاض التستوستيرون أو ارتفاع البرولاكتين.</li>
                <li><strong>نفسية:</strong> التوتر، القلق، والاكتئاب (شائعة جداً بين الشباب).</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي الطبي",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>مثبطات PDE5:</strong> Sildenafil (Viagra) أو Tadalafil (Cialis).</li>
                <li><strong>تحذير صارم:</strong> يمنع الجمع بينها وبين أدوية النيترات (للقلب) لتجنب هبوط الضغط المميت.</li>
            </ul>
        `
    },
    "endometriosis": {
        title: "بطانة الرحم المهاجرة (Endometriosis)",
        categoryId: "obgyn",
        category: "نساء وتوليد",
        badgeClass: "bg-danger",
        overview: "حالة مؤلمة جداً تنمو فيها أنسجة مشابهة لبطانة الرحم خارج الرحم (كالمبيضين)، وتنزف داخلياً أثناء الدورة.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض</h4>
            <ul class="med-list med-text">
                <li>آلام حوضية مبرحة متصاعدة أثناء الدورة الشهرية.</li>
                <li>ألم أثناء الجماع أو التبرز. تأخر الإنجاب.</li>
            </ul>
        `,
        pharmaTitle: "الخيارات الدوائية والجراحية",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>العلاج الهرموني:</strong> حبوب منع الحمل، أو منبهات (GnRH Agonists) لإيقاف التبويض وتقليص الأنسجة المهاجرة.</li>
                <li><strong>الجراحة:</strong> المنظار البطني (Laparoscopy) لإزالة الأنسجة الهاجرة والالتصاقات (المعيار الذهبي).</li>
            </ul>
        `
    },
    "gad": {
        title: "اضطراب القلق العام (GAD)",
        categoryId: "psych",
        category: "طب نفسي",
        badgeClass: "bg-secondary",
        overview: "قلق وتوتر مفرط ومستمر حيال أحداث الحياة اليومية دون سبب منطقي، يصعب السيطرة عليه.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض النفسية والجسدية</h4>
            <ul class="med-list med-text">
                <li>تفكير كارثي دائم وتوقع الأسوأ.</li>
                <li>أعراض جسدية: توتر وشد عضلي (الرقبة)، خفقان، واضطرابات معدة وأرق.</li>
            </ul>
        `,
        pharmaTitle: "إدارة القلق وتعديل المسارات العصبية",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>مضادات الاكتئاب:</strong> (SSRIs) مثل Escitalopram أو (SNRIs) أثبتت فعالية عالية في تنظيم السيروتونين لتقليل القلق المفرط.</li>
                <li><strong>البنزوديازبينات:</strong> مهدئات قوية وسريعة (Alprazolam) تستخدم لأسابيع قليلة فقط في بداية العلاج للسيطرة على نوبات الهلع وتُسحب تدريجياً.</li>
                <li><strong>العلاج السلوكي المعرفي (CBT):</strong> علاج أساسي لتغيير الأفكار المشوهة.</li>
            </ul>
        `
    },
    "copd": {
        title: "الانسداد الرئوي المزمن (COPD)",
        categoryId: "internal",
        category: "أمراض صدرية",
        badgeClass: "bg-primary",
        overview: "مرض رئوي التهابي مزمن يعيق تدفق الهواء خارج الرئتين. التدخين هو السبب الأول والرئيسي له.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض المتطورة</h4>
            <ul class="med-list med-text">
                <li>سعال يومي مزمن مصحوب ببلغم (خاصة صباحاً).</li>
                <li>ضيق تنفس متزايد يبدأ مع المجهود ويتطور للراحة.</li>
                <li>التهابات صدرية متكررة جداً.</li>
            </ul>
        `,
        pharmaTitle: "موسعات الشعب وبروتوكول الرعاية",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>الإقلاع عن التدخين:</strong> التدخل الوحيد الذي يبطئ تدهور الرئة.</li>
                <li><strong>موسعات الشعب طويلة المفعول:</strong> دمج مضادات الكولين (LAMA) ومنبهات بيتا (LABA) في بخاخة واحدة لفتح الممرات.</li>
                <li><strong>الكورتيكوستيرويد المستنشق (ICS):</strong> يُضاف لمنع تفاقم الالتهاب الموضعي.</li>
            </ul>
        `
    },
    "hepc": {
        title: "التهاب الكبد الوبائي سي (Hepatitis C)",
        categoryId: "gastro",
        category: "جهاز هضمي وكبد",
        badgeClass: "bg-warning text-dark",
        overview: "عدوى فيروسية تهاجم الكبد. يُعرف بالمرض الصامت لأن الأعراض تظهر غالباً بعد تلف الكبد.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأسباب والأعراض</h4>
            <ul class="med-list med-text">
                <li>ينتقل عبر الدم الملوث (إبر مشتركة، أدوات حلاقة غير معقمة).</li>
                <li>الأعراض المزمنة: إرهاق مزمن، آلام بالمفاصل، وفي المراحل المتأخرة استسقاء ونزيف دوالي.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي الدوائي (DAAs)",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>مضادات الفيروسات المباشرة:</strong> أدوية مثل (Sofosbuvir و Daclatasvir) تحقق شفاءً تاماً بنسبة 98% خلال 12-24 أسبوعاً، وتؤخذ فموياً بآثار جانبية طفيفة.</li>
            </ul>
        `
    },
    "gout": {
        title: "النقرس (Gout)",
        categoryId: "ortho",
        category: "عظام وروماتيزم",
        badgeClass: "bg-dark",
        overview: "التهاب مفاصل ناتج عن تراكم بلورات حمض اليوريك داخل المفصل (خاصة إصبع القدم الكبير).",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأسباب والأعراض</h4>
            <ul class="med-list med-text">
                <li>ناتج عن تكسير البيورينات في اللحوم الحمراء والبقوليات، وضعف الكلى في طرد الحمض.</li>
                <li>ألم مفصلي حاد جداً ومفاجئ (يوقظ المريض من النوم) مع احمرار والتهاب شديد.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي والأدوية",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>علاج النوبة:</strong> مسكنات (NSAIDs) بجرعات عالية، والكولشيسين (Colchicine) خلال أول 24 ساعة، أو الكورتيزون.</li>
                <li><strong>العلاج الوقائي:</strong> أدوية (Allopurinol أو Febuxostat) لخفض حمض اليوريك، ولكن لا تُستخدم أبداً أثناء النوبة الحادة.</li>
            </ul>
        `
    },
    "heartfailure": {
        title: "قصور عضلة القلب (Heart Failure)",
        categoryId: "internal",
        category: "قلب وأوعية دموية",
        badgeClass: "bg-primary",
        overview: "ضعف القلب وعدم قدرته على ضخ الدم بكفاءة، مما يؤدي لتراكم السوائل في الرئة والجسم.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض الشائعة</h4>
            <ul class="med-list med-text">
                <li>ضيق شديد في التنفس (Dyspnea) خاصة عند الاستلقاء.</li>
                <li>تورم ملحوظ (Edema) في الساقين والكاحلين والبطن.</li>
                <li>إرهاق وضعف عام وسعال مستمر.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي الدوائي (الأسس الأربعة)",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>ARNI (Entresto):</strong> يوسع الأوعية ويحمي القلب وهو الخط الأول حالياً.</li>
                <li><strong>حاصرات بيتا (Bisoprolol):</strong> لتهدئة ضربات القلب.</li>
                <li><strong>مثبطات SGLT2 (Dapagliflozin):</strong> تحمي القلب وتطرد الصوديوم بكفاءة عالية.</li>
                <li><strong>مضادات الألدوستيرون (Spironolactone):</strong> تمنع تليف العضلة.</li>
                <li><strong>مدرات البول العروية (Lasix):</strong> تُستخدم وقت الاحتقان لإنقاذ الرئة وطرد السوائل.</li>
            </ul>
        `
    },
    "ms": {
        title: "التصلب المتعدد (Multiple Sclerosis - MS)",
        categoryId: "neuro",
        category: "مخ وأعصاب",
        badgeClass: "bg-info text-dark",
        overview: "مرض مناعي ذاتي يهاجم الغلاف الواقي للأعصاب (المايلين) في الدماغ والحبل الشوكي.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض</h4>
            <ul class="med-list med-text">
                <li>تنميل وضعف في طرف أو أكثر (غالباً في جانب واحد).</li>
                <li>فقدان الرؤية الجزئي وألم عند تحريك العين (التهاب العصب البصري).</li>
                <li>فقدان التوازن وإرهاق شديد.</li>
            </ul>
        `,
        pharmaTitle: "الأدوية المعدلة للمسار وعلاج الهجمات",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>علاج الهجمات:</strong> حقن الكورتيكوستيرويدات (Methylprednisolone) لتقليل التهاب الأعصاب السريع.</li>
                <li><strong>تعديل مسار المرض (DMTs):</strong> العلاجات البيولوجية الموجهة (Ocrelizumab) أو الأدوية الفموية (Fingolimod) لمنع تدمير المايلين.</li>
            </ul>
        `
    },
    "hyperthyroid": {
        title: "فرط نشاط الغدة الدرقية (Hyperthyroidism)",
        categoryId: "internal",
        category: "باطنة وغدد صماء",
        badgeClass: "bg-primary",
        overview: "إفراز كميات زائدة من هرمون الثايروكسين (T4)، مما يؤدي إلى تسريع وظائف الجسم (الحرق) بشكل مفرط. أشهر أسبابها مرض جريفز.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض</h4>
            <ul class="med-list med-text">
                <li>فقدان وزن مفاجئ رغم فتح الشهية بقوة.</li>
                <li>تسارع ضربات القلب وخفقان ورعشة في اليدين.</li>
                <li>تعرق مفرط وعدم تحمل الحرارة. جحوظ العينين (في جريفز).</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي والأدوية",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>الأدوية المضادة للدرقية:</strong> Carbimazole يمنع الغدة من تصنيع الهرمونات (أو PTU للحوامل).</li>
                <li><strong>حاصرات بيتا:</strong> Propranolol لإيقاف الأعراض المزعجة (الرعشة والخفقان) فوراً.</li>
                <li><strong>اليود المشع أو الجراحة:</strong> كحل نهائي لتدمير أو استئصال الخلايا النشطة.</li>
            </ul>
        `
    },
    "cataract": {
        title: "المياه البيضاء - الساد (Cataracts)",
        categoryId: "ophtha",
        category: "رمد وعيون",
        badgeClass: "bg-light text-dark border",
        overview: "إعتام في عدسة العين الطبيعية الشفافة نتيجة تكسر وتجمع البروتينات مع التقدم في العمر.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض</h4>
            <ul class="med-list med-text">
                <li>رؤية ضبابية كأنك تنظر عبر نافذة مغشاة.</li>
                <li>صعوبة شديدة في الرؤية ليلاً وحساسية للوهج. بهتان الألوان.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي والجراحي",
        pharmaContent: `
            <ul class="med-list med-text">
                <li>لا توجد قطرات تعالج المياه البيضاء نهائياً. الحل الوحيد هو التدخل الجراحي.</li>
                <li><strong>عملية الفاكو (الموجات فوق الصوتية):</strong> تفتيت العدسة المعتمة وسحبها، وزرع عدسة صناعية شفافة بدلاً منها في عملية دقيقة جداً.</li>
            </ul>
        `
    },
    "rheumaticfever": {
        title: "الحمى الروماتيزمية (Rheumatic Fever)",
        categoryId: "pedia",
        category: "طب أطفال وقلب",
        badgeClass: "bg-primary",
        overview: "مرض التهابي خطير يعتبر مضاعفات لعدم علاج التهاب الحلق البكتيري (العقدية أ) بشكل كامل، يهاجم فيه المناعة القلب والمفاصل.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض (معايير جونز)</h4>
            <ul class="med-list med-text">
                <li>التهاب المفاصل المتنقل (ألم وتورم ينتقل من مفصل لآخر).</li>
                <li>التهاب القلب (ألم صدر، نهجان).</li>
                <li>حركات لا إرادية (Chorea) وطفح جلدي.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي والوقاية الممتدة",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>القضاء على البكتيريا:</strong> حقن البنسلين (أو الأموكسيسيلين).</li>
                <li><strong>للالتهاب:</strong> مسكنات (Aspirin للأطفال) للسيطرة على الألم والمفاصل، والكورتيزون إذا وصل الالتهاب للقلب.</li>
                <li><strong>الوقاية الصارمة (حجر الأساس):</strong> حقنة بنسلين طويل المفعول كل 3-4 أسابيع لمنع تكرار العدوى وتدمير صمامات القلب، وتستمر حتى سن 21 أو أكثر.</li>
            </ul>
        `
    },
    "fibroids": {
        title: "الأورام الليفية الرحمية (Uterine Fibroids)",
        categoryId: "obgyn",
        category: "نساء وتوليد",
        badgeClass: "bg-danger",
        overview: "أورام عضلية حميدة (غير سرطانية) تنمو في جدار الرحم، وتتأثر بهرمون الإستروجين.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض</h4>
            <ul class="med-list med-text">
                <li>نزيف الدورة الشهرية الغزير والمطول (يسبب أنيميا).</li>
                <li>ألم وضغط في منطقة الحوض، وكثرة التبول لضغط الورم على المثانة.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي والجراحي",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>السيطرة على النزيف والألم:</strong> حمض الترانيكساميك ومسكنات NSAIDs، أو اللولب الهرموني لتقليل السماكة.</li>
                <li><strong>لتقليص الورم:</strong> حقن (GnRH Agonists) لإيقاف الهرمونات مؤقتاً.</li>
                <li><strong>الجراحة:</strong> استئصال الورم العضلي (للراغبات في الإنجاب) أو استئصال الرحم (حل نهائي).</li>
            </ul>
        `
    },
    "alopecia": {
        title: "الثعلبة البقعية (Alopecia Areata)",
        categoryId: "derma",
        category: "أمراض جلدية ومناعة",
        badgeClass: "bg-success",
        overview: "مرض مناعي ذاتي يهاجم بصيلات الشعر مما يؤدي لتساقطه فجأة على هيئة بقع دائرية صلعاء.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض</h4>
            <ul class="med-list med-text">
                <li>تساقط شعر مفاجئ في بقعة أو أكثر (في الرأس أو اللحية) دون ألم أو قشور.</li>
                <li>ظهور شعيرات قصيرة كعلامة التعجب على أطراف البقعة.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي (التحفيز الموضعي والجهازي)",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>الحقن الموضعي:</strong> حقن الكورتيزون داخل البقعة مباشرة لإنبات الشعر (العلاج الأفضل).</li>
                <li><strong>موضعياً:</strong> المينوكسيديل وكريمات الكورتيزون القوية.</li>
                <li><strong>علاج حديث:</strong> مثبطات JAK (مثل Baricitinib) معتمدة حديثاً للحالات الشاملة والمستعصية وتحقق نتائج ممتازة.</li>
            </ul>
        `
    },
    "alzheimer": {
        title: "مرض الزهايمر (Alzheimer's Disease)",
        categoryId: "neuro",
        category: "مخ وأعصاب وشيخوخة",
        badgeClass: "bg-info text-dark",
        overview: "السبب الأكثر شيوعاً للخرف. اضطراب عصبي تدريجي يتلف خلايا الدماغ ويدمر الذاكرة والقدرة على التفكير بسبب تراكم لويحات الأميلويد.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض (تتطور تدريجياً)</h4>
            <ul class="med-list med-text">
                <li><strong>المرحلة المبكرة:</strong> نسيان الأحداث القريبة جداً، وتكرار نفس الأسئلة.</li>
                <li><strong>المرحلة المتوسطة:</strong> الارتباك، نسيان الأسماء المألوفة، وتقلبات مزاجية وشكوك.</li>
                <li><strong>المرحلة المتأخرة:</strong> فقدان القدرة على الكلام والبلع، والاعتماد الكلي على الغير.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي (إبطاء التدهور وتحسين الجودة)",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>مثبطات الكولينستيراز:</strong> Donepezil و Rivastigmine. تزيد ناقل (أستيل كولين) لدعم الذاكرة المتبقية بالمراحل المبكرة.</li>
                <li><strong>منظمات الجلوتامات:</strong> Memantine (Ebixa) يحمي الدماغ من التلف الناتج عن زيادة الجلوتامات.</li>
                <li><strong>أدوية حديثة جداً:</strong> مضادات الأميلويد (Lecanemab) أدوية بيولوجية تزيل لويحات الأميلويد وتبطئ المرض ولكنها مكلفة وتحتاج متابعة.</li>
            </ul>
        `
    },
    "glaucoma": {
        title: "الجلوكوما / المياه الزرقاء (Glaucoma)",
        categoryId: "ophtha",
        category: "رمد وعيون",
        badgeClass: "bg-light text-dark border",
        overview: "تلف في العصب البصري مرتبط غالباً بارتفاع ضغط العين (IOP). يُعرف بسارق البصر الصامت.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض</h4>
            <ul class="med-list med-text">
                <li><strong>الزاوية المفتوحة (المزمنة):</strong> فقدان تدريجي للرؤية المحيطية دون ألم حتى تصل للرؤية النفقية.</li>
                <li><strong>الزاوية المغلقة (الحادة):</strong> ألم شديد ومفاجئ، صداع نصفي، رؤية هالات ملونة، واحمرار العين (حالة طوارئ).</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي (القطرات والتدخلات)",
        pharmaContent: `
            <ul class="med-list med-text">
                <li>الهدف هو خفض ضغط العين لمنع المزيد من التلف (التلف الحاصل لا يمكن استرجاعه).</li>
                <li><strong>نظائر البروستاجلاندين:</strong> Latanoprost لزيادة تصريف السائل (قطرة مسائية).</li>
                <li><strong>حاصرات بيتا:</strong> Timolol لتقليل إنتاج السائل (تستخدم بحذر لمرضى الربو والقلب).</li>
                <li><strong>الليزر والجراحة:</strong> لفتح أو عمل مسار تصريف جديد.</li>
            </ul>
        `
    },
    "uc": {
        title: "التهاب القولون التقرحي (Ulcerative Colitis)",
        categoryId: "gastro",
        category: "جهاز هضمي ومناعة",
        badgeClass: "bg-warning text-dark",
        overview: "مرض التهابي مزمن (IBD) يسبب التهابات وتقرحات في البطانة الداخلية للقولون والمستقيم.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض</h4>
            <ul class="med-list med-text">
                <li>إسهال مزمن مصحوب بدم وصديد.</li>
                <li>ألم وتقلصات شديدة في البطن، وفقدان الوزن السريع.</li>
                <li>رغبة ملحة في التبرز مع عدم القدرة على ذلك (زحير).</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي والأدوية المناعية",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>مركبات 5-ASA (Mesalamine):</strong> الخط الأول لتقليل الالتهاب الموضعي في القولون.</li>
                <li><strong>الكورتيكوستيرويدات:</strong> لتهدئة الهجمات الشرسة بسرعة قصوى.</li>
                <li><strong>مثبطات المناعة والعلاجات البيولوجية:</strong> Azathioprine أو Infliximab للحالات المتقدمة أو المستعصية.</li>
                <li><strong>الجراحة:</strong> الاستئصال الكامل للقولون كحل جذري إذا فشل الدواء.</li>
            </ul>
        `
    },
    "ckd": {
        title: "مرض الكلى المزمن (Chronic Kidney Disease)",
        categoryId: "internal",
        category: "باطنة وكلى",
        badgeClass: "bg-primary",
        overview: "فقدان تدريجي ودائم لوظائف الكلى. أهم أسبابه السكري وارتفاع ضغط الدم.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض والمضاعفات</h4>
            <ul class="med-list med-text">
                <li>في البداية صامت. لاحقاً: تورم القدمين، إرهاق، غثيان، حكة جلدية، وتغير كمية البول (تسرب الزلال).</li>
                <li><strong>المضاعفات:</strong> أنيميا شديدة، ارتفاع البوتاسيوم، وأمراض القلب.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي (دعم الكلى والمضاعفات)",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>حماية الكلى:</strong> أدوية (ACEi) مثل Captopril وأدوية (SGLT2 inhibitors) مثل Dapagliflozin أثبتت نجاحاً مبهراً في إبطاء التدهور الكلوي.</li>
                <li><strong>علاج المضاعفات:</strong> حقن إريثروبويتين للأنيميا، رابطات الفوسفات، ومدرات البول.</li>
                <li>المرحلة النهائية تتطلب غسيل كلوي أو زراعة كلى.</li>
            </ul>
        `
    },
    "sinusitis": {
        title: "التهاب الجيوب الأنفية المزمن (Chronic Sinusitis)",
        categoryId: "ent",
        category: "أنف وأذن وحنجرة",
        badgeClass: "bg-secondary",
        overview: "تورم والتهاب تجاويف الجيوب الأنفية لأكثر من 12 أسبوعاً مما يمنع تصريف المخاط.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض</h4>
            <ul class="med-list med-text">
                <li>إفرازات أنفية سميكة خضراء أو صفراء.</li>
                <li>احتقان وانسداد شديد بالأنف.</li>
                <li>ألم وضغط حول العينين والوجنتين والجبهة. فقدان حاسة الشم.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي والتدخلات",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>الغسيل الموضعي:</strong> بالمحلول الملحي لتفريغ المخاط.</li>
                <li><strong>الكورتيكوستيرويدات الأنفية:</strong> بخاخات (Fluticasone) هي حجر الأساس لتقليل الالتهاب والتورم.</li>
                <li>المضادات الحيوية لا توصف إلا للاشتباه البكتيري المؤكد ولأوقات طويلة.</li>
                <li><strong>الجراحة:</strong> المنظار (FESS) لتوسيع الفتحات وإزالة اللحميات.</li>
            </ul>
        `
    },
    "vitiligo": {
        title: "البهاق (Vitiligo)",
        categoryId: "derma",
        category: "أمراض جلدية ومناعة",
        badgeClass: "bg-success",
        overview: "مرض مناعي ذاتي (غير معدٍ) يدمر الخلايا الصبغية (الميلانين) مما يؤدي لظهور بقع بيضاء واضحة في الجلد والشعر.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض والوقاية</h4>
            <ul class="med-list med-text">
                <li>بقع بيضاء حليبية واضحة (تبدأ غالباً في الوجه والمفاصل).</li>
                <li>الوقاية الإلزامية: استخدام واقي شمس قوي جداً لحماية البقع التي فقدت الحماية الطبيعية من الحروق ولتجنب التباين اللوني.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي (استعادة التصبغ)",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>موضعياً:</strong> كريمات الكورتيكوستيرويد، أو مثبطات الكالسينيورين (Tacrolimus) للوجه لكونها أكثر أماناً، وكريمات مثبطات JAK الحديثة (Ruxolitinib) تعطي نتائج رائعة.</li>
                <li><strong>العلاج الضوئي (NB-UVB):</strong> يحفز الخلايا الصبغية.</li>
                <li><strong>إزالة الصبغة:</strong> تبييض بقية الجلد السليم للحالات التي تفوق 80%.</li>
            </ul>
        `
    },
    "sle": {
        title: "الذئبة الحمراء (Systemic Lupus Erythematosus)",
        categoryId: "ortho",
        category: "روماتيزم ومناعة",
        badgeClass: "bg-dark",
        overview: "مرض مناعي ذاتي جهازي يهاجم فيه الجسم الأنسجة السليمة والأعضاء كالمفاصل والكلى والجلد. يصيب النساء بشكل رئيسي.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض (المقلد العظيم)</h4>
            <ul class="med-list med-text">
                <li>إرهاق شديد، حمى غير مبررة، وآلام وتورم بالمفاصل.</li>
                <li><strong>طفح الفراشة:</strong> طفح جلدي يغطي الخدين وجسر الأنف، ويزداد بشدة عند التعرض للشمس.</li>
                <li>مضاعفات خطيرة كالفشل الكلوي الذئبي.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي الدوائي (تثبيط المناعة)",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>مضادات الملاريا (Plaquenil):</strong> دواء أساسي جداً لجميع مرضى الذئبة يقلل الهجمات ويحمي الأعضاء الداخلية.</li>
                <li><strong>الكورتيكوستيرويدات:</strong> لتهدئة الهجمات الحادة بسرعة وإنقاذ الكلى أو المخ.</li>
                <li><strong>مثبطات المناعة (Azathioprine) والعلاجات البيولوجية:</strong> لتقليل الاعتماد على الكورتيزون في الحالات الشديدة.</li>
            </ul>
        `
    },
    "sciatica": {
        title: "عرق النسا (Sciatica)",
        categoryId: "ortho",
        category: "عظام وأعصاب",
        badgeClass: "bg-dark",
        overview: "ألم يمتد على طول مسار العصب الوركي من أسفل الظهر إلى الساق، ينتج غالباً عن انزلاق غضروفي يضغط على جذر العصب.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض والمضاعفات</h4>
            <ul class="med-list med-text">
                <li>ألم كالصدمة الكهربائية يمتد خلف الفخذ والساق.</li>
                <li>يزداد الألم مع السعال، العطس، أو الجلوس الطويل. تنميل وضعف عضلي بالساق.</li>
                <li>المضاعفات الخطيرة: فقدان السيطرة على الإخراج (متلازمة ذيل الفرس) تحتاج جراحة طارئة.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي والعلاج الطبيعي",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>المسكنات العصبية والعضلية:</strong> مضادات التهاب (NSAIDs)، ومضادات تشنج عصبي كـ (Pregabalin / Gabapentin) ومرخيات العضلات.</li>
                <li><strong>الحقن الموضعي:</strong> حقن كورتيزون فوق الجافية حول العصب لتقليل التورم فوراً.</li>
                <li><strong>الجراحة:</strong> استئصال الغضروف الضاغط إذا فشل العلاج الدوائي لأكثر من 6 أسابيع.</li>
            </ul>
        `
    },

    "hemorrhoids": {
        title: "البواسير (Hemorrhoids)",
        categoryId: "gastro",
        category: "جراحة عامة وجهاز هضمي",
        badgeClass: "bg-warning text-dark",
        overview: "أوردة منتفخة ومحتقنة في أسفل المستقيم وفتحة الشرج (تشبه الدوالي)، وهي شائعة جداً وتسبب إزعاجاً ونزيفاً.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض والمسببات</h4>
            <ul class="med-list med-text">
                <li>نزيف غير مؤلم (دم أحمر فاتح)، حكة شرجية، وتدلي نتوءات من الفتحة.</li>
                <li><strong>السبب الرئيسي:</strong> الإمساك المزمن، الحزق الشديد، والحمل.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي والجراحي",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>علاج موضعي وملينات:</strong> كريمات وتحاميل مخدرة/كورتيزون لتقليل الالتهاب، مع ملينات لزيادة حجم البراز وتليينه.</li>
                <li><strong>أدوية مقوية للأوردة:</strong> (Daflon - Diosmin/Hesperidin) لتقوية الجدار وتقليل الارتشاح والنزيف.</li>
                <li><strong>التدخلات:</strong> الربط بشريط مطاطي، أو الجراحة الاستئصالية للحالات المتقدمة.</li>
            </ul>
        `
    },
    "sicklecell": {
        title: "أنيميا الخلايا المنجلية (Sickle Cell Anemia)",
        categoryId: "internal",
        category: "أمراض دم وباطنة",
        badgeClass: "bg-primary",
        overview: "اضطراب وراثي يسبب تشوه خلايا الدم الحمراء لتصبح صلبة ولزجة (على شكل منجل)، مما يسد الأوعية الدموية ويدمر الخلايا مبكراً.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض (أزمات الانسداد)</h4>
            <ul class="med-list med-text">
                <li>نوبات ألم مبرح (Crises) في العظام والصدر والبطن.</li>
                <li>فقر دم مزمن، وتأخر في النمو للأطفال، وتورم مؤلم في اليدين والقدمين.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي الدوائي والجيني",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>الهيدروكسي يوريا (Hydroxyurea):</strong> يحفز إنتاج (الهيموجلوبين الجنيني) ليمنع تمنجل الخلايا ويقلل النوبات.</li>
                <li><strong>الوقاية والعلاج:</strong> بنسلين وقائي للأطفال، ومسكنات قوية جداً أثناء النوبات.</li>
                <li><strong>العلاج الجذري الحديث:</strong> زراعة النخاع، أو العلاج الجيني الثوري (Casgevy - CRISPR) لتصحيح الخلل.</li>
            </ul>
        `
    },
    "parkinson": {
        title: "مرض باركنسون / الشلل الرعاش (Parkinson's)",
        categoryId: "neuro",
        category: "مخ وأعصاب",
        badgeClass: "bg-info text-dark",
        overview: "اضطراب عصبي تنكسي يؤثر على الحركة بسبب الموت التدريجي للخلايا المنتجة لـ (الدوبامين) في الدماغ.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض الحركية</h4>
            <ul class="med-list med-text">
                <li>رعاش يبدأ في اليد أثناء الراحة.</li>
                <li>بطء وتيبس شديد في الحركة (جرجرة القدمين).</li>
                <li>فقدان الحركات التلقائية (تصلب تعابير الوجه).</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي الدوائي والجراحي",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>ليفودوبا (Levodopa/Carbidopa):</strong> الدواء الأقوى الذي يتحول لدوبامين داخل الدماغ (الخط الأول).</li>
                <li><strong>ناهضات الدوبامين:</strong> تخدع الدماغ بأنها دوبامين لتأخير استخدام الليفودوبا.</li>
                <li><strong>مثبطات تكسير الدوبامين:</strong> (MAO-B inhibitors).</li>
                <li><strong>الجراحة:</strong> التحفيز العميق للدماغ (DBS) لتقليل الرعشة والتصلب للحالات المعندة.</li>
            </ul>
        `
    },
    "gallstones": {
        title: "حصوات المرارة (Gallstones)",
        categoryId: "gastro",
        category: "جراحة عامة وجهاز هضمي",
        badgeClass: "bg-warning text-dark",
        overview: "ترسبات صلبة (كوليسترول أو بيليروبين) داخل الحويصلة المرارية. تزيد مع تقدم العمر والسمنة والنزول السريع للوزن.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض (المغص المراري)</h4>
            <ul class="med-list med-text">
                <li>ألم حاد ومفاجئ أعلى يمين البطن بعد وجبة دسمة، ويمتد للكتف الأيمن أو الظهر.</li>
                <li>غثيان وقيء وعسر هضم.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي والجراحي",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>إذابة دوائية:</strong> (Ursofalk) لحصوات الكوليسترول الصغيرة جداً (يستغرق وقتاً طويلاً ومعدل رجوع الحصوات عالي).</li>
                <li><strong>المسكنات القوية:</strong> ومضادات التقلص وقت المغص.</li>
                <li><strong>الجراحة:</strong> استئصال المرارة بالمنظار هو المعيار الذهبي והحل الجذري.</li>
            </ul>
        `
    },
    "osteoporosis": {
        title: "هشاشة العظام (Osteoporosis)",
        categoryId: "ortho",
        category: "عظام وغدد صماء",
        badgeClass: "bg-dark",
        overview: "مرض استقلابي صامت يؤدي إلى ضعف العظام وترققها، مسبباً كسوراً سهلة. شائع عند النساء بعد انقطاع الطمث لنقص الإستروجين.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض والتشخيص</h4>
            <ul class="med-list med-text">
                <li>المراحل الأولى صامتة. لاحقاً: آلام بالظهر، قصر القامة، وكسور متكررة (خاصة الورك والمعصم).</li>
                <li><strong>التشخيص:</strong> فحص قياس كثافة العظام (DEXA scan).</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي (البناء ومنع الهدم)",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>البايفوسفونيت:</strong> (Alendronate) الخط الأول. يمنع الخلايا الهادمة للعظم من تكسيره (يؤخذ صباحاً على معدة فارغة مع البقاء بوضعية الجلوس).</li>
                <li><strong>الأدوية البيولوجية:</strong> (Prolia) حقنة كل 6 أشهر.</li>
                <li><strong>الهرمونات البانية:</strong> (Teriparatide) لبناء عظم جديد للحالات الشديدة. والمكملات الأساسية: الكالسيوم وفيتامين د.</li>
            </ul>
        `
    },
    "eczema": {
        title: "الإكزيما / التهاب الجلد التأتبي (Atopic Dermatitis)",
        categoryId: "derma",
        category: "أمراض جلدية ومناعة",
        badgeClass: "bg-success",
        overview: "حالة مزمنة شائعة تسبب احمراراً والتهاباً وجفافاً وحكة شديدة جداً في الجلد. ترتبط بخلل في حاجز الجلد الواقي.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض والمهيجات</h4>
            <ul class="med-list med-text">
                <li>حكة مبرحة ليلية، وجفاف شديد بالجلد، وبقع حمراء (في ثنيات المفاصل والوجه).</li>
                <li><strong>المهيجات:</strong> الصابون القاسي، الطقس الجاف، ووبر الحيوانات.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي الموضعي والجهازي",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>الترطيب المكثف:</strong> حجر الأساس للعلاج لإصلاح حاجز الجلد.</li>
                <li><strong>العلاجات الموضعية:</strong> الكورتيكوستيرويدات القوية لتهدئة الهجمات، ومثبطات الكالسينيورين (Tacrolimus) للوجه وللوقاية.</li>
                <li><strong>العلاجات البيولوجية:</strong> (Dupilumab - Dupixent) للحالات الشديدة والمستعصية.</li>
            </ul>
        `
    },
    "dvt": {
        title: "جلطة الأوردة العميقة في الساق (DVT)",
        categoryId: "internal",
        category: "جراحة أوعية دموية وباطنة",
        badgeClass: "bg-primary",
        overview: "تكون خثرة دموية (جلطة) في الأوردة العميقة للساقين. تنتج عن ركود الدم (طول الجلوس)، أو فرط التخثر، أو تلف الأوعية.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض والمضاعفات</h4>
            <ul class="med-list med-text">
                <li>تورم مفاجئ وغير متماثل في ساق واحدة. ألم وثقل واحمرار وحرارة في الساق.</li>
                <li><strong>المضاعفة القاتلة:</strong> الانصمام الرئوي (انتقال الجلطة للرئة).</li>
                <li>التشخيص السريع يتم عبر أشعة الدوبلر.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي ومضادات التخثر",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>مضادات التخثر الفموية الحديثة (DOACs):</strong> مثل (Rivaroxaban أو Apixaban)، الخط الأول والآمن لسيولة الدم وعلاج الجلطة ومنع نموها.</li>
                <li><strong>الهيبارين (Clexane):</strong> حقن سريعة المفعول، تُستخدم مبدئياً أو للحوامل.</li>
                <li><strong>الوارفارين:</strong> يتطلب مراقبة مستمرة لتحليل السيولة (INR).</li>
            </ul>
        `
    },
    "pepticulcer": {
        title: "قرحة المعدة والإثنى عشر (Peptic Ulcer Disease)",
        categoryId: "gastro",
        category: "جهاز هضمي ومناظير",
        badgeClass: "bg-warning text-dark",
        overview: "جروح متقرحة في بطانة المعدة أو الإثنى عشر نتيجة تآكلها بالأحماض. المسبب الرئيسي هو جرثومة المعدة أو الإفراط في المسكنات (NSAIDs).",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض</h4>
            <ul class="med-list med-text">
                <li>ألم حارق وقضم في فم المعدة.</li>
                <li><strong>قرحة المعدة:</strong> الألم يزداد أثناء الأكل.</li>
                <li><strong>قرحة الإثنى عشر:</strong> الألم يخف مع الأكل ويزداد بعده بساعتين أو أثناء الجوع.</li>
                <li>مضاعفات خطيرة كالنزيف الداخلي أو انثقاب المعدة.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي الدوائي",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>مثبطات مضخة البروتون (PPIs):</strong> (Omeprazole) لتقليل الحمض وإعطاء فرصة لالتئام القرحة.</li>
                <li><strong>العلاج الثلاثي:</strong> لجرثومة المعدة (PPIs مع مضادين حيويين).</li>
                <li><strong>حماة بطانة المعدة:</strong> (Sucralfate) يعمل كطبقة عازلة، وميوزوبروستول للوقاية من قرحة المسكنات.</li>
            </ul>
        `
    },
    "otitismedia": {
        title: "التهاب الأذن الوسطى الحاد (Acute Otitis Media)",
        categoryId: "ent",
        category: "أنف وأذن وحنجرة وأطفال",
        badgeClass: "bg-secondary",
        overview: "تجمع سوائل والتهاب خلف طبلة الأذن نتيجة عدوى بكتيرية أو فيروسية، وهو شائع جداً عند الرضع والأطفال بعد نزلات البرد.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض</h4>
            <ul class="med-list med-text">
                <li>ألم حاد في الأذن (بكاء الطفل وشد الأذن)، حمى، واضطراب في النوم والرضاعة.</li>
                <li>إذا تمزقت الطبلة يخرج صديد ويختفي الألم فجأة.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي الطبي والجراحي",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>للحالات الفيروسية والخفيفة:</strong> مراقبة ومسكنات (Paracetamol / Ibuprofen) فقط.</li>
                <li><strong>للالتهاب البكتيري:</strong> المضادات الحيوية كـ (Amoxicillin أو Amoxicillin-Clavulanate) هي الخط الأول.</li>
                <li><strong>التدخل الجراحي:</strong> وضع أنابيب تهوية (Tubes) لتصريف السوائل للحالات المتكررة لمنع ضعف السمع.</li>
            </ul>
        `
    },
    "autism": {
        title: "اضطراب طيف التوحد (Autism Spectrum Disorder)",
        categoryId: "pedia",
        category: "أطفال ومخ وأعصاب",
        badgeClass: "bg-info text-dark",
        overview: "اضطراب عصبي وتطوري معقد يظهر مبكراً، يؤثر على مهارات التفاعل والتواصل الاجتماعي والأنماط السلوكية. (التطعيمات لا تسبب التوحد).",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض (العلامات المبكرة)</h4>
            <ul class="med-list med-text">
                <li>ضعف التواصل البصري، وتأخر الكلام أو تكراره كالببغاء.</li>
                <li>أنماط سلوكية متكررة (الرفرفة باليدين، التمسك الشديد بالروتين).</li>
                <li>حساسية مفرطة للأصوات والملمس، وتفضيل اللعب منفرداً.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول التأهيلي والدوائي",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>لا يوجد دواء يعالج التوحد:</strong> الأساس هو برامج التأهيل السلوكي (مثل تحليل السلوك التطبيقي ABA)، وعلاج التخاطب.</li>
                <li><strong>مضادات الذهان:</strong> (مثل Risperidone) توصف فقط للسيطرة على الهياج الشديد، السلوك العدواني، وإيذاء النفس.</li>
                <li><strong>أدوية مصاحبة:</strong> لفرط الحركة واضطرابات النوم.</li>
            </ul>
        `
    },
    "ocd": {
        title: "الوسواس القهري (OCD)",
        categoryId: "psych",
        category: "طب نفسي ועصبي",
        badgeClass: "bg-secondary",
        overview: "اضطراب يتميز بوجود هواجس (أفكار مزعجة متطفلة) تدفع المريض للقيام بأفعال قهرية (سلوكيات متكررة) لتقليل التوتر.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض (الهواجس والأفعال)</h4>
            <ul class="med-list med-text">
                <li><strong>الهواجس:</strong> خوف مفرط من الجراثيم، الشك المستمر في الأقفال، حاجة للتماثل.</li>
                <li><strong>الأفعال القهرية:</strong> غسيل الأيدي المتكرر المدمر للجلد، والتأكد المفرط. (تعيق حياة المريض اليومية).</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي المزدوج",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>العلاج السلوكي المعرفي:</strong> (CBT-ERP) التعرض ومنع الاستجابة، هو العلاج الأهم.</li>
                <li><strong>مضادات الاكتئاب:</strong> أدوية (SSRIs) بجرعات عالية جداً، وهي تتطلب أسابيع لتعمل.</li>
                <li><strong>Clomipramine:</strong> من أقوى الأدوية للحالات المعندة، لكن آثاره الجانبية أكثر.</li>
            </ul>
        `
    },
    "breastcancer": {
        title: "سرطان الثدي (Breast Cancer)",
        categoryId: "internal",
        category: "أورام وجراحة",
        badgeClass: "bg-danger",
        overview: "نمو خبيث ومتسارع لخلايا غير طبيعية في أنسجة الثدي. الاكتشاف المبكر يجعل نسبة الشفاء تتخطى 90%.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض التحذيرية والتشخيص</h4>
            <ul class="med-list med-text">
                <li>كتلة صلبة غير مؤلمة في الثدي، تغير في شكل الجلد (قشرة برتقال)، أو إفرازات مدممة من الحلمة.</li>
                <li><strong>الماموجرام (Mammogram):</strong> الفحص الذهبي الدوري للكشف المبكر.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي الشامل",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>الجراحة والعلاج الإشعاعي:</strong> لاستئصال الورم وتدمير البقايا.</li>
                <li><strong>العلاج الهرموني:</strong> (Tamoxifen أو Letrozole) يُعطى لسنوات لمنع عودة الأورام المستجيبة للهرمونات.</li>
                <li><strong>العلاج الموجه والكيماوي:</strong> أدوية بيولوجية (Herceptin) تستهدف بروتينات السرطان الدقيقة بدقة.</li>
            </ul>
        `
    },
    "vertigo": {
        title: "الدوار الوضعي الانتيابي الحميد (BPPV)",
        categoryId: "ent",
        category: "أنف وأذن وحنجرة",
        badgeClass: "bg-secondary",
        overview: "السبب الأشهر للدوخة والدوار. ينتج عن تحرك بلورات كالسيوم من مكانها الطبيعي وسقوطها في قنوات التوازن بالأذن الداخلية.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض</h4>
            <ul class="med-list med-text">
                <li>نوبات قصيرة جداً (ثواني) من دوار عنيف وشعور بدوران الغرفة.</li>
                <li>تحدث <strong>فقط</strong> عند تغيير وضعية الرأس (التقلب في السرير، إمالة الرأس). لا يسبب ضعفاً في السمع.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي الفيزيائي والدوائي",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>العلاج الميكانيكي الفعال:</strong> (مناورة إيبلي - Epley Maneuver) حركات دقيقة بالرأس تعيد البلورات لمكانها وتنهي الدوار فوراً.</li>
                <li><strong>المهدئات ومضادات الهيستامين:</strong> مثل (Meclizine) لتقليل الغثيان والدوخة مؤقتاً أثناء النوبات فقط.</li>
            </ul>
        `
    },
    "appendicitis": {
        title: "التهاب الزائدة الدودية (Appendicitis)",
        categoryId: "gastro",
        category: "جراحة عامة وطوارئ",
        badgeClass: "bg-warning text-dark",
        overview: "حالة جراحية طارئة تحدث نتيجة انسداد والتهاب الزائدة الدودية. قد تنفجر وتسبب تسمماً دموياً إذا تُركت.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض (تتطور بسرعة)</h4>
            <ul class="med-list med-text">
                <li>ألم يبدأ حول السرة ثم ينتقل ويستقر أسفل يمين البطن.</li>
                <li>ألم ارتدادي شديد عند الضغط والحركة، مع قيء مستمر، وحمى خفيفة.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي والجراحي",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>الجراحة (الاستئصال):</strong> هي الحل النهائي والأساسي (سواء بالمنظار أو الفتح الجراحي).</li>
                <li><strong>المضادات الحيوية الوريدية:</strong> (مثل Ceftriaxone مع Metronidazole) تعطى كوقاية ولعلاج العدوى البكتيرية المصاحبة.</li>
            </ul>
        `
    },
    "tb": {
        title: "السل الرئوي / الدرن (Tuberculosis)",
        categoryId: "internal",
        category: "أمراض صدرية ومعدية",
        badgeClass: "bg-primary",
        overview: "مرض معدٍ وخطير تسببه بكتيريا المتفطرة السلية، يصيب الرئتين ويدمر أنسجتها. ينتقل بالرذاذ التنفسي.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض للسل النشط</h4>
            <ul class="med-list med-text">
                <li>سعال مزمن ومستمر لأكثر من 3 أسابيع، مصحوب ببلغم أو دم.</li>
                <li><strong>التعرق الليلي الشديد (علامة مميزة)</strong>، وفقدان كبير في الوزن، وحمى مسائية.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي الدوائي (DOTS)",
        pharmaContent: `
            <ul class="med-list med-text">
                <li>علاج طويل الأمد (6-9 أشهر) باستخدام 4 مضادات حيوية معاً لمنع المقاومة.</li>
                <li><strong>بروتوكول (RIPE):</strong> يشمل (Rifampin) الذي يلون البول برتقالياً، (Isoniazid) يُعطى مع فيتامين B6 لحماية الأعصاب، و (Pyrazinamide) و (Ethambutol).</li>
            </ul>
        `
    },
    "cervicalcancer": {
        title: "سرطان عنق الرحم (Cervical Cancer)",
        categoryId: "obgyn",
        category: "نساء وتوليد وأورام",
        badgeClass: "bg-danger",
        overview: "ورم خبيث في خلايا عنق الرحم، المسبب الرئيسي له هو فيروس (HPV). من أكثر السرطانات القابلة للوقاية والشفاء باكتشافه مبكراً.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض والكشف المبكر</h4>
            <ul class="med-list med-text">
                <li>المراحل المتأخرة: نزيف مهبلي غير طبيعي، إفرازات كريهة، وألم بالحوض.</li>
                <li><strong>مسحة عنق الرحم (Pap Smear):</strong> הפحص الأهم دورياً لكشف الخلايا قبل تحولها لسرطان.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي والوقاية",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>الوقاية المطلقة:</strong> لقاح (HPV) للفتيات واليافعات.</li>
                <li><strong>العلاج الجراحي:</strong> الكي البارد للمراحل المبكرة، أو استئصال الرحم وعنق الرحم كاملاً.</li>
                <li><strong>الإشعاع والكيماوي:</strong> (Cisplatin) يُعطى للحالات المتقدمة والممتدة.</li>
            </ul>
        `
    },
    "schizo": {
        title: "الفصام (Schizophrenia)",
        categoryId: "psych",
        category: "طب نفسي ועصبي",
        badgeClass: "bg-secondary",
        overview: "اضطراب عقلي شديد يؤدي لانفصال المريض عن الواقع، سببه خلل كيميائي في الدماغ (زيادة نشاط الدوبامين).",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض</h4>
            <ul class="med-list med-text">
                <li><strong>أعراض إيجابية:</strong> الهلاوس السمعية (أصوات تأمره)، والضلالات (الشعور بالمراقبة).</li>
                <li><strong>أعراض سلبية:</strong> تبلد المشاعر، إهمال النظافة، والعزلة الاجتماعية التامة.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول الدوائي (مضادات الذهان)",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>الجيل الثاني (Atypical):</strong> (Olanzapine و Risperidone) الخط الأول لعلاج الهلاوس بآثار حركية أقل (يتطلب مراقبة الوزن والسكر).</li>
                <li><strong>الجيل الأول:</strong> (Haloperidol) دواء قوي ولكن آثاره الحركية تشبه باركنسون.</li>
                <li><strong>Clozapine:</strong> الدواء الأقوى للحالات المقاومة، لكنه يحتاج تحليل دم دوري (CBC).</li>
            </ul>
        `
    },
    "afib": {
        title: "الرجفان الأذيني (Atrial Fibrillation - AFib)",
        categoryId: "internal",
        category: "قلب وأوعية دموية",
        badgeClass: "bg-primary",
        overview: "انقباض عشوائي وسريع جداً (ارتجاف) للأذينين في القلب، مما يضعف كفاءة الضخ ويسبب ركوداً للدم.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض والمضاعفات</h4>
            <ul class="med-list med-text">
                <li>خفقان ورفرفة قوية في الصدر، ضيق تنفس، وإرهاق سريع.</li>
                <li><strong>الخطر الأكبر:</strong> السكتة الدماغية (تتكون جلطات في الأذين وتنطلق للمخ).</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي الدوائي (التحكم والسيولة)",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>التحكم بالنبض (Rate Control):</strong> حاصرات بيتا (Bisoprolol) لتنظيم سرعة القلب.</li>
                <li><strong>التحكم بالإيقاع:</strong> أدوية كـ (Amiodarone) لاستعادة النبض الطبيعي.</li>
                <li><strong>الوقاية الحتمية من الجلطات:</strong> مضادات التخثر الحديثة (DOACs - Apixaban) هي الخيار الآمن والفعال לمنع جلطات المخ.</li>
            </ul>
        `
    },
    "crohns": {
        title: "مرض كرون (Crohn's Disease)",
        categoryId: "gastro",
        category: "جهاز هضمي ومناعة",
        badgeClass: "bg-warning text-dark",
        overview: "التهاب مناعي عميق يخترق جميع طبقات جدار الأمعاء. يمكن أن يصيب أي جزء من الفم للشرج (غالباً نهاية الأمعاء الدقيقة).",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض والمضاعفات</h4>
            <ul class="med-list med-text">
                <li>مغص أسفل يمين البطن، إسهال مزمن، وتقرحات بالفم. التدخين يفاقم المرض بشدة.</li>
                <li><strong>المضاعفات الجراحية:</strong> انسداد الأمعاء، وتكون النواسير (أنفاق بين الأعضاء).</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي الدوائي",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>الكورتيكوستيرويدات:</strong> لتهدئة الهجمات الحادة بسرعة.</li>
                <li><strong>مثبطات المناعة:</strong> (Azathioprine) للحفاظ على استقرار الحالة.</li>
                <li><strong>العلاجات البيولوجية:</strong> (Infliximab - مثبطات TNF) هي الخط الأول للحالات المتوسطة والشديدة لمنع تقدم المرض.</li>
            </ul>
        `
    },
    "cp": {
        title: "الشلل الدماغي (Cerebral Palsy - CP)",
        categoryId: "pedia",
        category: "مخ وأعصاب أطفال",
        badgeClass: "bg-info text-dark",
        overview: "اضطراب حركي دائم غير تقدمي يصيب الأطفال، ناتج عن تلف في الدماغ أثناء الحمل أو الولادة المعسرة (نقص أكسجين).",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض</h4>
            <ul class="med-list med-text">
                <li>تأخر في النمو الحركي (الجلوس والمشي).</li>
                <li><strong>النوع التشنجي:</strong> عضلات مشدودة ومفاصل متيبسة. مشية المقص، وصعوبة البلع.</li>
                <li>قد يصاحبه نوبات صرع وصعوبات تعلم.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول التأهيلي والدوائي",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>العلاج الأساسي:</strong> العلاج الطبيعي المكثف لمنع تيبس المفاصل الدائم.</li>
                <li><strong>المرخيات العضلية:</strong> (Baclofen) لتقليل التشنج العضلي العام.</li>
                <li><strong>حقن البوتوكس:</strong> تحقن موضعياً في العضلات المشدودة جداً لإرخائها وتسهيل التأهيل.</li>
            </ul>
        `
    },
    "conjunctivitis": {
        title: "التهاب الملتحمة / الرمد (Conjunctivitis)",
        categoryId: "ophtha",
        category: "رمد وعيون",
        badgeClass: "bg-light text-dark border",
        overview: "التهاب وتمدد أوعية الغشاء المبطن للعين، يجعلها حمراء ووردية اللون. قد يكون فيروسياً، بكتيرياً، أو تحسسياً.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض المفرقة</h4>
            <ul class="med-list med-text">
                <li><strong>الفيروسي:</strong> معدٍ جداً، إفرازات مائية شفافة.</li>
                <li><strong>البكتيري:</strong> إفرازات صديدية سميكة (صفراء/خضراء) تلصق الجفون صباحاً.</li>
                <li><strong>التحسسي:</strong> حكة شديدة وتدميع بالعينين معاً.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول الدوائي (القطرات)",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>البكتيري:</strong> قطرات مضادات حيوية (Moxifloxacin أو Tobramycin).</li>
                <li><strong>التحسسي:</strong> قطرات مضادات هيستامين (Olopatadine) للتهدئة (الكورتيزون يُمنع إلا بوصفة طبيب).</li>
                <li><strong>الفيروسي:</strong> دموع صناعية مرطبة وكمادات فقط.</li>
            </ul>
        `
    },
    "rickets": {
        title: "لين العظام والكساح (Osteomalacia & Rickets)",
        categoryId: "ortho",
        category: "عظام وأطفال",
        badgeClass: "bg-dark",
        overview: "ضعف وتلين شديد في العظام، يجعلها مقوسة ومشوهة، المسبب الرئيسي هو النقص الحاد في فيتامين D والكالسيوم.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض (للكساح عند الأطفال)</h4>
            <ul class="med-list med-text">
                <li>تقوس الساقين بوضوح، وتأخر في المشي والنمو.</li>
                <li>بروز عظام الصدر، وآلام في العظام، وتأخر انغلاق فتحة جمجمة الرضيع (اليافوخ).</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي والوقائي",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>الوقاية الإلزامية:</strong> قطرات فيتامين D (400 وحدة يومياً) لجميع حديثي الولادة.</li>
                <li><strong>العلاج:</strong> جرعات علاجية عالية من فيتامين D والكالسيوم لملء المخازن وتصليب العظام.</li>
                <li><strong>لمرضى الكلى:</strong> يُعطون الصورة النشطة الجاهزة (Alfacalcidol) لعدم قدرتهم على تنشيط الفيتامين.</li>
            </ul>
        `
    },
    "varicoseveins": {
        title: "دوالي الساقين (Varicose Veins)",
        categoryId: "internal",
        category: "جراحة أوعية دموية",
        badgeClass: "bg-primary",
        overview: "تضخم وتوسع وتعرج في الأوردة السطحية للساقين، ينتج عن فشل الصمامات الداخلية التي تمنع عودة الدم للأسفل.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض والمسببات</h4>
            <ul class="med-list med-text">
                <li>أوردة منتفخة زرقاء. ثقل وألم وتورم حول الكاحل يزداد مع الوقوف الطويل أو الحمل.</li>
                <li><strong>المضاعفات:</strong> تقرحات وريدية مؤلمة جداً إذا تركت بلا علاج.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي والجراحي",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>الجوارب الضاغطة:</strong> الخط الأول للدعم الميكانيكي للأوردة.</li>
                <li><strong>الأدوية (Phlebotonics):</strong> مثل (Daflon) لتقوية جدار الوريد وتقليل الاحتقان.</li>
                <li><strong>التدخلات الحديثة:</strong> الحقن الرغوي (Sclerotherapy) للدوالي الصغيرة، والكي بالليزر أو التردد الحراري (RFA) لغلق الأوردة الكبيرة بلا جراحة.</li>
            </ul>
        `
    },
    "tonsillitis": {
        title: "التهاب اللوزتين (Tonsillitis)",
        categoryId: "ent",
        category: "أنف وأذن وحنجرة",
        badgeClass: "bg-secondary",
        overview: "التهاب الغدد الليمفاوية في مؤخرة الحلق. شائع بين الأطفال، وسببه فيروسي غالباً، وبكتيري (العقدية أ) أحياناً.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض والمضاعفات</h4>
            <ul class="med-list med-text">
                <li>ألم شديد وصعوبة بالبلع. تورم اللوزتين ووجود بقع صديدية بيضاء. حمى وتضخم غدد الرقبة.</li>
                <li><strong>المضاعفات:</strong> الحمى الروماتيزمية وتأثر القلب إذا كان السبب بكتيرياً ولم يعالج.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول الدوائي والجراحي",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>الفيروسي:</strong> مسكنات وغرغرة فقط (لا مضادات حيوية).</li>
                <li><strong>البكتيري:</strong> (Amoxicillin أو Penicillin V) هو الخط الأول والأهم للقضاء على البكتيريا وحماية القلب.</li>
                <li><strong>الجراحة:</strong> استئصال اللوزتين في حال التكرار المفرط أو تسببها في انقطاع التنفس النومي.</li>
            </ul>
        `
    },
    "celiac": {
        title: "الداء البطني / حساسية القمح (Celiac Disease)",
        categoryId: "gastro",
        category: "جهاز هضمي ومناعة",
        badgeClass: "bg-warning text-dark",
        overview: "مرض مناعي ذاتي (وراثي). تناول بروتين الجلوتين يدفع المناعة لتدمير الخملات المبطنة للأمعاء الدقيقة وتوقف امتصاص الغذاء.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض (تختلف باختلاف العمر)</h4>
            <ul class="med-list med-text">
                <li><strong>للأطفال:</strong> إسهال مزمن، انتفاخ، وتأخر نمو حاد.</li>
                <li><strong>للبالغين:</strong> أنيميا شديدة مقاومة للعلاج، هشاشة عظام، إرهاق مزمن (أعراض سوء امتصاص).</li>
                <li><strong>التشخيص:</strong> منظار الأمعاء الدقيقة (الخزعة) أثناء تناول الجلوتين.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي الصارم",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>العلاج الأساسي والوحيد:</strong> حمية خالية من الجلوتين 100% مدى الحياة (القمح والشعير).</li>
                <li><strong>المكملات الغذائية:</strong> لتعويض النقص الحاد للحديد والكالسيوم وفيتامين د وب12 في المراحل الأولى حتى تشفى الأمعاء.</li>
            </ul>
        `
    },
    "bipolar": {
        title: "اضطراب ثنائي القطب (Bipolar Disorder)",
        categoryId: "psych",
        category: "طب نفسي ועصبي",
        badgeClass: "bg-secondary",
        overview: "اضطراب نفسي يتميز بتقلبات شديدة في المزاج. يتأرجح المريض بين قطبي: الهوس (النشاط المفرط) والاكتئاب العميق.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض</h4>
            <ul class="med-list med-text">
                <li><strong>نوبة الهوس (Mania):</strong> طاقة هائلة، جنون عظمة، عدم حاجة للنوم، وسلوكيات متهورة وتدميرية.</li>
                <li><strong>نوبة الاكتئاب:</strong> حزن عميق، فقدان للشغف، أفكار انتحارية.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي ومثبتات المزاج",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>مثبتات المزاج (حجر الأساس):</strong> (الليثيوم - Lithium) هو الأقوى، أو مضادات التشنج (Valproic acid - Depakine) لمنع التأرجح.</li>
                <li><strong>مضادات الذهان:</strong> (Quetiapine) للسيطرة على الهوس.</li>
                <li><strong>تحذير صيدلاني:</strong> استخدام مضاد اكتئاب بمفرده في هذا المرض قد يدفع المريض لنوبة هوس مفاجئة وخطيرة.</li>
            </ul>
        `
    },
    "uti": {
        title: "عدوى المسالك البولية (UTI)",
        categoryId: "uro",
        category: "مسالك بولية وذكورة",
        badgeClass: "bg-secondary",
        overview: "عدوى بكتيرية تصيب الجهاز البولي. التهاب المثانة هو الأشهر والمسبب له (بكتيريا E. coli). أكثر شيوعاً في النساء.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض والمضاعفات</h4>
            <ul class="med-list med-text">
                <li>ألم وحرقة أثناء التبول (Dysuria)، رغبة ملحة ومتكررة.</li>
                <li>تغير لون ورائحة البول (عكر أو مدمم).</li>
                <li>إذا وصلت العدوى للكلى: ألم شديد في الخواصر وحمى عالية وقشعريرة.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي والمضادات الحيوية",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>الخط الأول (التهاب المثانة):</strong> (Nitrofurantoin) دواء مركز وفعال، أو (Fosfomycin) كيس جرعة واحدة.</li>
                <li><strong>لحالات الكلى المعقدة:</strong> الفلوروكينولونات (Levofloxacin) أو السيفالوسبورينات.</li>
                <li><strong>مسكنات المسالك:</strong> (Phenazopyridine) يخفف الحرقة فوراً، ولكنه يلون البول باللون البرتقالي المحمر.</li>
            </ul>
        `
    },
    "fibromyalgia": {
        title: "الألم العضلي الليفي (Fibromyalgia)",
        categoryId: "ortho",
        category: "روماتيزم ومخ وأعصاب",
        badgeClass: "bg-dark",
        overview: "متلازمة تسبب ألماً واسع الانتشار في الجسم مع إرهاق شديد. ناتجة عن خلل في طريقة معالجة الدماغ لإشارات الألم.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض (الألم المركزي)</h4>
            <ul class="med-list med-text">
                <li>ألم مستمر واسع النطاق ووجود نقاط إيلام (Tender points) محددة.</li>
                <li>إرهاق مزمن ونوم غير مريح (تستيقظ متعباً).</li>
                <li>"الضبابية الليفية" وضعف التركيز والذاكرة. كل تحاليل الروماتيزم والالتهاب تكون سليمة 100%.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي الدوائي والفيزيائي",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>المسكنات العادية لا تفيد</strong> لأن الألم ليس التهابياً.</li>
                <li><strong>مضادات الاكتئاب والتشنج:</strong> (Duloxetine) و (Pregabalin - Lyrica) معتمدة لتهدئة الإشارات العصبية المؤلمة وتحسين النوم.</li>
                <li><strong>العلاج الفيزيائي:</strong> السباحة والتمارين الهوائية الخفيفة جداً لتحسين الدورة الدموية وتفكيك العضلات.</li>
            </ul>
        `
    },
    "pe": {
        title: "الانصمام الرئوي (Pulmonary Embolism)",
        categoryId: "internal",
        category: "أمراض صدرية وطوارئ",
        badgeClass: "bg-primary",
        overview: "حالة طوارئ قاتلة! جلطة دموية تنفصل (غالباً من الساق) وتسد الشريان الرئوي مما يقطع تبادل الأكسجين والدم.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض المفاجئة</h4>
            <ul class="med-list med-text">
                <li>ضيق تنفس مفاجئ وعنيف. ألم طاعن بالصدر يزداد عند أخذ نفس عميق.</li>
                <li>سعال قد يصاحبه دم. زرقة في الشفاه وهبوط بالضغط.</li>
                <li><strong>التشخيص المؤكد:</strong> الأشعة المقطعية بالصبغة للشريان الرئوي (CTPA).</li>
            </ul>
        `,
        pharmaTitle: "التدخل الطارئ والأدوية",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>الجلطات المهددة للحياة:</strong> استخدام (مذيبات الجلطات - Alteplase) فوراً لتفتيتها وإنقاذ المريض.</li>
                <li><strong>الجلطات المستقرة:</strong> الهيبارين (Clexane) لوقف نمو الجلطة فوراً.</li>
                <li><strong>العلاج المستمر:</strong> مضادات التخثر (Rivaroxaban أو الوارفارين) من 3 إلى 6 أشهر أو مدى الحياة حسب السبب.</li>
            </ul>
        `
    },
    "hyperprolactinemia": {
        title: "ارتفاع هرمون الحليب (Hyperprolactinemia)",
        categoryId: "internal",
        category: "باطنة وغدد صماء",
        badgeClass: "bg-primary",
        overview: "زيادة البرولاكتين في الدم من الغدة النخامية (غالباً بسبب ورم حميد صغير أو كسل في الغدة الدرقية)، يمنع التبويض والخصوبة.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض</h4>
            <ul class="med-list med-text">
                <li><strong>عند النساء:</strong> انقطاع الدورة، إفراز حليب، وعقم وتأخر إنجاب.</li>
                <li><strong>عند الرجال:</strong> ضعف جنسي، كبر حجم الثدي، وتأخر إنجاب.</li>
                <li>صداع وضعف نظر (إذا كان الورم النخامي كبيراً ويضغط على العصب).</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي والمحفزات",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>ناهضات الدوبامين:</strong> (Cabergoline - Dostinex) الخط الأول والأفضل (يؤخذ أسبوعياً) لخفض الهرمون بقوة وتقليص الورم النخامي.</li>
                <li>علاج السبب (إذا كان كسل في الغدة الدرقية يعطى الثيروكسين). الجراحة نادرة جداً ومخصصة للأورام الضخمة المعندة.</li>
            </ul>
        `
    },
    "prostatecancer": {
        title: "سرطان البروستاتا (Prostate Cancer)",
        categoryId: "uro",
        category: "مسالك بولية وأورام",
        badgeClass: "bg-secondary",
        overview: "ورم خبيث في غدة البروستاتا لدى الرجال المتقدمين في العمر. ينمو ببطء شديد في مراحله الأولى ويكون صامتاً.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض والتشخيص</h4>
            <ul class="med-list med-text">
                <li>المراحل الأولى صامتة. المتقدمة: ضعف تدفق البول وظهور دم.</li>
                <li><strong>الكشف المبكر:</strong> تحليل دم (PSA).</li>
                <li><strong>التأكيد:</strong> أخذ خزعة (Biopsy) لتحديد نوع ومرحلة الورم (مقياس جليسون).</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي المتدرج",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>للمسنين والأورام البطيئة:</strong> "المراقبة النشطة" للمرض دون جراحة لتجنب الأعراض الجانبية للعلاج.</li>
                <li><strong>الجراحة أو الإشعاع:</strong> لاستئصال الغدة أو تدميرها في الأورام المحصورة والشرسة.</li>
                <li><strong>العلاج الهرموني (ADT):</strong> حقن لوقف إنتاج التستوستيرون (خصاء كيميائي) لأن الورم يتغذى عليه، ويستخدم للحالات المنتشرة.</li>
            </ul>
        `
    },
    "meniere": {
        title: "داء مينيير (Meniere's Disease)",
        categoryId: "ent",
        category: "أنف وأذن وحنجرة",
        badgeClass: "bg-secondary",
        overview: "اضطراب مزمن في الأذن الداخلية نتيجة احتباس كمية زائدة من السوائل، مما يؤثر على مستقبلات السمع والتوازن معاً.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض (الثلاثي المميز)</h4>
            <ul class="med-list med-text">
                <li>نوبات دوار شديدة ومفاجئة تستمر من 20 دقيقة لعدة ساعات.</li>
                <li>طنين مستمر (رنين) في الأذن المصابة.</li>
                <li>فقدان سمع متذبذب، وشعور بضغط وامتلاء داخل الأذن.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي الدوائي",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>الوقاية والأساس:</strong> تقليل استهلاك الملح (الصوديوم) بشدة لمنع احتباس السائل، وتناول مدرات البول اليومية (Diuretics).</li>
                <li><strong>أدوية الدوار:</strong> (Betahistine) لتحسين الدورة الدموية، ومضادات القيء والهيستامين أثناء النوبة العنيفة.</li>
                <li><strong>الحقن الموضعي:</strong> حقن الجنتاميسين (المدمرة لخلايا التوازن) في الأذن للحالات الكارثية المعندة.</li>
            </ul>
        `
    },
    "hepb": {
        title: "التهاب الكبد الوبائي ب (Hepatitis B)",
        categoryId: "gastro",
        category: "جهاز هضمي وكبد",
        badgeClass: "bg-warning text-dark",
        overview: "عدوى كبدية فيروسية شديدة، تنتقل غالباً من الأم للجنين أو عبر الدم. الإصابة المزمنة تدمر الكبد بصمت.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض والمضاعفات</h4>
            <ul class="med-list med-text">
                <li>اليرقان، بول داكن، إرهاق وألم بالكبد في المرحلة الحادة.</li>
                <li><strong>المضاعفات (المزمنة):</strong> تشمع الكبد وسرطان الكبد الأولي (فيروس B هو السبب الأول عالمياً).</li>
                <li>التشخيص: تحليل مستضد الفيروس (HBsAg).</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول الوقائي والعلاجي",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>الوقاية القاطعة:</strong> التطعيم (اللقاح) الإلزامي لحديثي الولادة والبالغين ذوي الخطر يمنح حماية 100%.</li>
                <li><strong>العلاج (للمزمنة فقط):</strong> لا يوجد شفاء تام. الهدف هو تثبيط نشاط الفيروس مدى الحياة باستخدام مضادات فيروسية فموية (Entecavir أو Tenofovir) لمنع تليف الكبد.</li>
            </ul>
        `
    }
};
