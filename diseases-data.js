const diseasesDB = {

    // ==========================================
    // === 1. قسم الباطنة والقلب (internal) ===
    // ==========================================
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
        `,
        pharmaTitle: "البروتوكول العلاجي والأدوية (Pharmacotherapy)",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>الميتفورمين (Metformin):</strong> خط العلاج الأول. يعمل على تقليل إنتاج الجلوكوز من الكبد.</li>
                <li><strong>مثبطات SGLT2 (Dapagliflozin):</strong> تمنع إعادة امتصاص الجلوكوز في الكلى وتطرده في البول (تحمي القلب والكلى).</li>
            </ul>
        `
    },
    "hypertension": {
        title: "ارتفاع ضغط الدم (Hypertension)",
        categoryId: "internal",
        category: "قلب وأوعية دموية",
        badgeClass: "bg-primary",
        overview: "يُعرف بـ 'القاتل الصامت'. حالة مرضية تزداد فيها قوة دفع الدم ضد جدران الشرايين باستمرار، مما يجهد عضلة القلب.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-heartbeat"></i> الأعراض</h4>
            <p class="med-text">لا توجد أعراض لسنوات. في الارتفاع الشديد يحدث: صداع خلفي نابض، طنين في الأذن، رعاف، وزغللة.</p>
        `,
        pharmaTitle: "البروتوكول العلاجي والأدوية",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>مثبطات ACE (Ramipril):</strong> ممتازة لمرضى السكر لحماية الكلى (قد تسبب سعالاً).</li>
                <li><strong>حاصرات بيتا (Bisoprolol):</strong> تبطئ ضربات القلب.</li>
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
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي الدوائي",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>ARNI (Entresto):</strong> يوسع الأوعية ويحمي القلب وهو الخط الأول حالياً.</li>
                <li><strong>مدرات البول العروية (Lasix):</strong> تُستخدم وقت الاحتقان لإنقاذ الرئة وطرد السوائل.</li>
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
                <li>في البداية صامت. لاحقاً: تورم القدمين، إرهاق، غثيان، وتغير كمية البول.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>حماية الكلى:</strong> أدوية (ACEi) وأدوية (SGLT2 inhibitors) لإبطاء التدهور الكلوي.</li>
            </ul>
        `
    },

    // ==========================================
    // === 2. قسم الجهاز الهضمي (gastro) ===
    // ==========================================
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
            </ul>
        `,
        pharmaTitle: "الإدارة الدوائية",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>مضادات التقلصات:</strong> Mebeverine لإرخاء عضلات القولون.</li>
                <li><strong>مضادات الانتفاخ:</strong> Simethicone وزيت النعناع.</li>
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
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي (العلاج الثلاثي)",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>مثبطات مضخة البروتون (PPI):</strong> Omeprazole لتقليل الحمض.</li>
                <li><strong>المضادات الحيوية:</strong> دمج Clarithromycin مع Amoxicillin لمدة 14 يوماً.</li>
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
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي الدوائي",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>مثبطات مضخة البروتون (PPIs):</strong> Esomeprazole، توقف إفراز الحمض.</li>
                <li><strong>الأدوية المنظمة للحركة (Prokinetics):</strong> Itopride لسرعة إفراغ المعدة.</li>
            </ul>
        `
    },
    "crohns": {
        title: "مرض كرون (Crohn's Disease)",
        categoryId: "gastro",
        category: "جهاز هضمي ومناعة",
        badgeClass: "bg-warning text-dark",
        overview: "التهاب مناعي عميق يخترق جميع طبقات جدار الأمعاء. يمكن أن يصيب أي جزء من الفم للشرج.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض</h4>
            <ul class="med-list med-text">
                <li>مغص أسفل يمين البطن، إسهال مزمن، وتقرحات بالفم.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>العلاجات البيولوجية:</strong> (Infliximab) هي الخط الأول للحالات المتوسطة والشديدة.</li>
            </ul>
        `
    },

    // ==========================================
    // === 3. قسم المخ والأعصاب (neuro) ===
    // ==========================================
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
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>علاج النوبة:</strong> المسكنات القوية (NSAIDs)، وعائلة التريبتان (Sumatriptan).</li>
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
                <li>تدلي أو اعوجاج نصف الوجه، وضعف في ذراع واحد، وثقل في الكلام.</li>
            </ul>
        `,
        pharmaTitle: "التدخل الطبي الطارئ",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>الطوارئ:</strong> الأدوية المذيبة للجلطة (tPA) وريدياً لإنقاذ الخلايا العصبية.</li>
            </ul>
        `
    },
    "epilepsy": {
        title: "الصرع والتشنجات (Epilepsy)",
        categoryId: "neuro",
        category: "مخ وأعصاب",
        badgeClass: "bg-info text-dark",
        overview: "اضطراب عصبي في نشاط الدماغ، يسبب نوبات متكررة من التشنجات أو فقدان الوعي.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> أنواع النوبات</h4>
            <ul class="med-list med-text">
                <li>تشنج الجسم بالكامل وفقدان الوعي، أو التحديق في الفراغ للحظات.</li>
            </ul>
        `,
        pharmaTitle: "مضادات التشنج (AEDs)",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>للنوبات:</strong> Valproic Acid (Depakine) أو Levetiracetam (Keppra).</li>
            </ul>
        `
    },

    // ==========================================
    // === 4. قسم العظام والمفاصل (ortho) ===
    // ==========================================
    "osteoarthritis": {
        title: "خشونة المفاصل (Osteoarthritis)",
        categoryId: "ortho",
        category: "عظام ومفاصل",
        badgeClass: "bg-dark",
        overview: "يحدث نتيجة تآكل الغضروف الواقي لنهايات العظام، مما يؤدي لاحتكاكها ببعضها (يصيب الركبتين غالباً).",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض</h4>
            <ul class="med-list med-text">
                <li>ألم عميق في المفصل يزداد مع الحركة ويقل بالراحة. تيبس صباحي.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>تسكين الألم:</strong> مسكنات (NSAIDs) مثل Meloxicam.</li>
                <li><strong>الحقن الموضعي:</strong> حقن الكورتيزون أو حمض الهيالورونيك.</li>
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
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض</h4>
            <ul class="med-list med-text">
                <li>ألم وتورم متماثل في المفاصل (اليدين). تيبس صباحي شديد.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>الأدوية المعدلة للمرض (DMARDs):</strong> Methotrexate لإيقاف تقدم المرض.</li>
            </ul>
        `
    },
    "sciatica": {
        title: "عرق النسا (Sciatica)",
        categoryId: "ortho",
        category: "عظام وأعصاب",
        badgeClass: "bg-dark",
        overview: "ألم يمتد على طول مسار العصب الوركي من أسفل الظهر إلى الساق، ينتج غالباً عن انزلاق غضروفي.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض</h4>
            <ul class="med-list med-text">
                <li>ألم كالصدمة الكهربائية يمتد خلف الفخذ والساق. تنميل وضعف عضلي.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>المسكنات العصبية والعضلية:</strong> مضادات تشنج عصبي كـ (Pregabalin / Gabapentin) ومرخيات العضلات.</li>
            </ul>
        `
    },

    // ==========================================
    // === 5. قسم الرمد والعيون (ophtha) ===
    // ==========================================
    "cataract": {
        title: "المياه البيضاء - الساد (Cataracts)",
        categoryId: "ophtha",
        category: "رمد وعيون",
        badgeClass: "bg-light text-dark border",
        overview: "إعتام في عدسة العين الطبيعية الشفافة نتيجة تكسر وتجمع البروتينات مع التقدم في العمر.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض</h4>
            <ul class="med-list med-text">
                <li>رؤية ضبابية كأنك تنظر عبر نافذة مغشاة. حساسية للوهج.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي",
        pharmaContent: `
            <ul class="med-list med-text">
                <li>لا توجد قطرات تعالج المياه البيضاء. الحل هو عملية الفاكو لزرع عدسة.</li>
            </ul>
        `
    },
    "glaucoma": {
        title: "الجلوكوما / المياه الزرقاء (Glaucoma)",
        categoryId: "ophtha",
        category: "رمد وعيون",
        badgeClass: "bg-light text-dark border",
        overview: "تلف في العصب البصري مرتبط غالباً بارتفاع ضغط العين. يُعرف بسارق البصر الصامت.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض</h4>
            <ul class="med-list med-text">
                <li>فقدان تدريجي للرؤية المحيطية دون ألم حتى تصل للرؤية النفقية.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي (القطرات)",
        pharmaContent: `
            <ul class="med-list med-text">
                <li>الهدف هو خفض ضغط العين. (Latanoprost) لزيادة التصريف، و (Timolol) لتقليل إنتاج السائل.</li>
            </ul>
        `
    },
    "conjunctivitis": {
        title: "التهاب الملتحمة / الرمد (Conjunctivitis)",
        categoryId: "ophtha",
        category: "رمد وعيون",
        badgeClass: "bg-light text-dark border",
        overview: "التهاب وتمدد أوعية الغشاء المبطن للعين، يجعلها حمراء ووردية اللون.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض</h4>
            <ul class="med-list med-text">
                <li>إفرازات مائية (فيروسي)، أو صديدية (بكتيري)، أو حكة شديدة (تحسسي).</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول الدوائي (القطرات)",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>البكتيري:</strong> قطرات مضادات حيوية (Moxifloxacin).</li>
                <li><strong>التحسسي:</strong> قطرات مضادات هيستامين (Olopatadine).</li>
            </ul>
        `
    }
};
