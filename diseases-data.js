const diseasesDB = {
    "diabetes": {
        title: "مرض السكري من النوع الثاني (Type 2 Diabetes)",
        category: "باطنة وغدد صماء",
        badgeClass: "bg-primary",
        overview: "اضطراب أيضي مزمن يتميز بارتفاع مستويات السكر في الدم نتيجة لمقاومة الخلايا لعمل هرمون الأنسولين.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-clipboard-list"></i> الأعراض الشائعة</h4>
            <ul class="med-list med-text">
                <li><strong>كثرة التبول (Polyuria):</strong> خاصة في الليل.</li>
                <li><strong>العطش الشديد (Polydipsia):</strong> لتعويض السوائل المفقودة.</li>
                <li><strong>الجوع المفرط:</strong> لعدم قدرة الجلوكوز على دخول الخلايا.</li>
            </ul>
        `,
        pharmaTitle: "البروتوكول العلاجي والأدوية",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>الميتفورمين (Metformin):</strong> خط العلاج الأول.</li>
                <li><strong>مثبطات SGLT2:</strong> تمنع إعادة امتصاص الجلوكوز في الكلى.</li>
            </ul>
        `
    },
    "hypertension": {
        title: "ارتفاع ضغط الدم (Hypertension)",
        category: "قلب وأوعية دموية",
        badgeClass: "bg-danger",
        overview: "يُعرف بـ 'القاتل الصامت'. حالة مرضية تزداد فيها قوة دفع الدم ضد جدران الشرايين باستمرار.",
        content: `
            <h4 class="med-section-title"><i class="fas fa-heartbeat"></i> الأعراض</h4>
            <p class="med-text">في الغالب لا توجد أعراض لسنوات. ولكن في حالات الارتفاع الشديد قد يحدث صداع خلفي وزغللة.</p>
        `,
        pharmaTitle: "البروتوكول العلاجي والأدوية",
        pharmaContent: `
            <ul class="med-list med-text">
                <li><strong>مثبطات ACE:</strong> مثل Captopril و Ramipril.</li>
                <li><strong>حاصرات بيتا:</strong> مثل Bisoprolol.</li>
            </ul>
        `
    }
};
