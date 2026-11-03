// Smouha Hospital Academy - Main Script
const defaultContent = {
  centers: [
    { en: "Stroke & Neurointervention", ar: "السكتة الدماغية والتدخل العصبي", descEn: "Comprehensive stroke center with international SILC accreditation from SVIN. Advanced neurointerventional procedures and training.", descAr: "مركز شامل للسكتة الدماغية معتمد دولياً من SVIN. إجراءات تدخل عصبي متقدمة وتدريب." },
    { en: "Cardiac Intervention & Open Heart", ar: "التدخل القلبي وجراحة القلب المفتوح", descEn: "State-of-the-art catheterization labs and cardiac surgery services.", descAr: "معامل قسطرة حديثة وخدمات جراحة القلب." },
    { en: "Specialized Diagnostic Radiology", ar: "الأشعة التشخيصية المتخصصة", descEn: "Advanced MRI, CT, and Ultrasound center supporting all specialties.", descAr: "مركز متقدم للرنين المغناطيسي والأشعة المقطعية والموجات فوق الصوتية." },
    { en: "Peripheral Vascular Surgery & Intervention", ar: "جراحة وتدخل الأوعية الدموية الطرفية", descEn: "Expert vascular surgery and endovascular interventions.", descAr: "جراحة أوعية دموية وتدخلات داخلية متخصصة." },
    { en: "Advanced ICU", ar: "العناية المركزة المتقدمة", descEn: "High-acuity intensive care with multidisciplinary teams.", descAr: "رعاية مركزة عالية التخصص مع فرق متعددة التخصصات." },
    { en: "Pediatric Cardiology & Intervention", ar: "أمراض القلب والتدخل عند الأطفال", descEn: "Specialized pediatric cardiac care and interventions.", descAr: "رعاية قلبية تدخلية متخصصة للأطفال." },
    { en: "Pediatric Endoscopy", ar: "مناظير الأطفال", descEn: "Advanced pediatric endoscopic procedures.", descAr: "إجراءات منظارية متقدمة للأطفال." },
    { en: "Pediatric Nephrology & Dialysis", ar: "أمراض الكلى والغسيل الكلوي للأطفال", descEn: "Comprehensive pediatric kidney care and dialysis services.", descAr: "رعاية شاملة لأمراض الكلى والغسيل الكلوي عند الأطفال." },
    { en: "Pediatric Hematology", ar: "أمراض الدم عند الأطفال", descEn: "Specialized hematology services for children.", descAr: "خدمات أمراض الدم المتخصصة للأطفال." },
    { en: "Pediatric Urology", ar: "جراحة المسالك البولية للأطفال", descEn: "Expert pediatric urological care.", descAr: "رعاية جراحة المسالك البولية المتخصصة للأطفال." },
    { en: "PICU & NICU", ar: "العناية المركزة للأطفال والحديثي الولادة", descEn: "Pediatric and Neonatal Intensive Care Units of excellence.", descAr: "وحدات العناية المركزة للأطفال والحديثي الولادة على أعلى مستوى." }
  ],
  sections: [
    { en: "Smouha Activities", ar: "أنشطة سموحة", descEn: "Events, workshops, conferences, and community activities organized by the campus.", descAr: "الفعاليات وورش العمل والمؤتمرات والأنشطة المجتمعية." },
    { en: "Quality Team", ar: "فريق الجودة", descEn: "Dedicated quality improvement and GAHAR compliance team.", descAr: "فريق تحسين الجودة والامتثال لمعايير GAHAR." },
    { en: "Technicians", ar: "الفنيون", descEn: "Training and resources for medical technicians across all specialties.", descAr: "تدريب وموارد للفنيين الطبيين في جميع التخصصات." },
    { en: "Nursing Staff", ar: "هيئة التمريض", descEn: "Continuous professional development and excellence programs for nursing.", descAr: "برامج التطوير المهني المستمر والتميز للتمريض." },
    { en: "Clinical Pharmacy", ar: "الصيدلة الإكلينيكية", descEn: "Advanced clinical pharmacy education and practice resources.", descAr: "تعليم وممارسة الصيدلة الإكلينيكية المتقدمة." },
    { en: "HR & Non-Medical Staff", ar: "الموارد البشرية والكوادر غير الطبية", descEn: "Administrative, support, and professional development for non-clinical staff.", descAr: "التطوير الإداري والمهني للموظفين غير السريريين." },
    { en: "Research & Bio-Technology", ar: "البحث العلمي والتكنولوجيا الحيوية", descEn: "Research opportunities, biotech initiatives, and scientific publications.", descAr: "فرص البحث والمبادرات الحيوية والمنشورات العلمية." },
    { en: "Medical Innovation Center", ar: "مركز الابتكار الطبي", descEn: "MEDRA · SMITT — Translational medical innovation and technology transfer at Smouha.", descAr: "مدرا · سميت — الابتكار الطبي الانتقالي ونقل التكنولوجيا الطبية في سموحة." },
    { en: "Other Departments", ar: "الأقسام الأخرى", descEn: "Additional clinical and support departments within the campus.", descAr: "الأقسام السريرية والداعمة الأخرى داخل المجمع." }
  ],
  library: [
    { titleEn: "Stroke Code Simulation Workshop", titleAr: "ورشة محاكاة كود السكتة الدماغية", cat: "Neurointervention", type: "Lecture" },
    { titleEn: "GAHAR Quality Standards Overview", titleAr: "نظرة عامة على معايير جودة GAHAR", cat: "Quality", type: "Awareness" },
    { titleEn: "Pediatric Cardiac Intervention Basics", titleAr: "أساسيات التدخل القلبي عند الأطفال", cat: "Pediatric", type: "Lecture" },
    { titleEn: "Nursing Excellence in ICU", titleAr: "التميز التمريضي في العناية المركزة", cat: "Nursing", type: "Training" },
    { titleEn: "Medical Device Innovation at MEDRA", titleAr: "ابتكار الأجهزة الطبية في مدرا", cat: "Innovation", type: "Lecture" }
  ]
};

let currentLang = localStorage.getItem('academyLang') || 'en';
let content = JSON.parse(localStorage.getItem('academyContent')) || defaultContent;
if (!localStorage.getItem('academyContent')) {
  localStorage.setItem('academyContent', JSON.stringify(defaultContent));
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('academyLang', lang);
  document.body.classList.toggle('rtl', lang === 'ar');
  document.documentElement.lang = lang;
  document.getElementById('langSwitch').textContent = lang === 'en' ? 'العربية' : 'English';

  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute(lang === 'en' ? 'data-en' : 'data-ar');
  });

  renderAll();
}

function renderAll() {
  // Centers
  const centersGrid = document.getElementById('centersGrid');
  if (centersGrid) {
    centersGrid.innerHTML = content.centers.map(c => `
      <div class="card">
        <h4>${currentLang === 'en' ? c.en : c.ar}</h4>
        <p>${currentLang === 'en' ? c.descEn : c.descAr}</p>
      </div>
    `).join('');
  }

  // Sections
  const sectionsGrid = document.getElementById('sectionsGrid');
  if (sectionsGrid) {
    sectionsGrid.innerHTML = content.sections.map(s => `
      <div class="card">
        <h4>${currentLang === 'en' ? s.en : s.ar}</h4>
        <p>${currentLang === 'en' ? s.descEn : s.descAr}</p>
      </div>
    `).join('');
  }

  // Library
  const libraryGrid = document.getElementById('libraryGrid');
  if (libraryGrid) {
    libraryGrid.innerHTML = content.library.map(v => `
      <div class="video-card">
        <div class="video-thumb">▶</div>
        <div class="video-info">
          <h5>${currentLang === 'en' ? v.titleEn : v.titleAr}</h5>
          <p style="font-size:0.85rem; color:#666;">${v.cat} · ${v.type}</p>
        </div>
      </div>
    `).join('');
  }
}

document.getElementById('langSwitch').addEventListener('click', () => {
  setLanguage(currentLang === 'en' ? 'ar' : 'en');
});

// Initialize
setLanguage(currentLang);

// Smooth scroll for nav
document.querySelectorAll('nav a').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});
