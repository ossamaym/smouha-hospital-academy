// Smouha Hospital Academy - Main Script (Clinical Pharmacy Summit)
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
    { en: "Clinical Pharmacy", ar: "الصيدلة الإكلينيكية", descEn: "Advanced clinical pharmacy education, critical decision summits, and practice resources.", descAr: "تعليم وممارسة الصيدلة الإكلينيكية المتقدمة وقمة القرارات الحرجة." },
    { en: "HR & Non-Medical Staff", ar: "الموارد البشرية والكوادر غير الطبية", descEn: "Administrative, support, and professional development for non-clinical staff.", descAr: "التطوير الإداري والمهني للموظفين غير السريريين." },
    { en: "Research & Bio-Technology", ar: "البحث العلمي والتكنولوجيا الحيوية", descEn: "Research opportunities, biotech initiatives, and scientific publications.", descAr: "فرص البحث والمبادرات الحيوية والمنشورات العلمية." },
    { en: "Medical Innovation Center", ar: "مركز الابتكار الطبي", descEn: "MEDRA · SMITT — Translational medical innovation and technology transfer at Smouha.", descAr: "مدرا · سميت — الابتكار الطبي الانتقالي ونقل التكنولوجيا الطبية في سموحة." },
    { en: "Other Departments", ar: "الأقسام الأخرى", descEn: "Additional clinical and support departments within the campus.", descAr: "الأقسام السريرية والداعمة الأخرى داخل المجمع." }
  ],
  library: [
    { titleEn: "Stroke Code Simulation Workshop", titleAr: "ورشة محاكاة كود السكتة الدماغية", cat: "Neurointervention", type: "Lecture", url: "", likes: 0, liked: false },
    { titleEn: "GAHAR Quality Standards Overview", titleAr: "نظرة عامة على معايير جودة GAHAR", cat: "Quality", type: "Awareness", url: "", likes: 0, liked: false },
    { titleEn: "Pediatric Cardiac Intervention Basics", titleAr: "أساسيات التدخل القلبي عند الأطفال", cat: "Pediatric", type: "Lecture", url: "", likes: 0, liked: false },
    { titleEn: "Nursing Excellence in ICU", titleAr: "التميز التمريضي في العناية المركزة", cat: "Nursing", type: "Training", url: "", likes: 0, liked: false },
    { titleEn: "Medical Device Innovation at MEDRA", titleAr: "ابتكار الأجهزة الطبية في مدرا", cat: "Innovation", type: "Lecture", url: "", likes: 0, liked: false },
    { titleEn: "(1st) Summit Hemodialysis Transition Critical Decisions - Part 1", titleAr: "قمة سموحة الأولى لقرارات الانتقال الحرجة في الغسيل الكلوي - الجزء 1", cat: "Clinical Pharmacy", subcat: "Smouha Clinical Critical Decision Summit", type: "Lecture", url: "https://youtu.be/twiIBhpsj2s", likes: 0, liked: false },
    { titleEn: "(1st) Summit Hemodialysis Transition Critical Decisions - Part 2", titleAr: "قمة سموحة الأولى لقرارات الانتقال الحرجة في الغسيل الكلوي - الجزء 2", cat: "Clinical Pharmacy", subcat: "Smouha Clinical Critical Decision Summit", type: "Lecture", url: "https://youtu.be/C2IaEZYHTsA", likes: 0, liked: false },
    { titleEn: "(1st) Summit Hemodialysis Transition Critical Decisions - Part 3", titleAr: "قمة سموحة الأولى لقرارات الانتقال الحرجة في الغسيل الكلوي - الجزء 3", cat: "Clinical Pharmacy", subcat: "Smouha Clinical Critical Decision Summit", type: "Lecture", url: "https://youtu.be/Yzkgmq_yvh8", likes: 0, liked: false },
    { titleEn: "(1st) Summit Hemodialysis Transition Critical Decisions - Part 4", titleAr: "قمة سموحة الأولى لقرارات الانتقال الحرجة في الغسيل الكلوي - الجزء 4", cat: "Clinical Pharmacy", subcat: "Smouha Clinical Critical Decision Summit", type: "Lecture", url: "https://youtu.be/sIaeQjYdoiA", likes: 0, liked: false },
    { titleEn: "(1st) Summit Hemodialysis Transition Critical Decisions - Part 5", titleAr: "قمة سموحة الأولى لقرارات الانتقال الحرجة في الغسيل الكلوي - الجزء 5", cat: "Clinical Pharmacy", subcat: "Smouha Clinical Critical Decision Summit", type: "Lecture", url: "https://youtu.be/NvXPL8IKvVc", likes: 0, liked: false },
    { titleEn: "(1st) Summit Hemodialysis Transition Critical Decisions - Part 6", titleAr: "قمة سموحة الأولى لقرارات الانتقال الحرجة في الغسيل الكلوي - الجزء 6", cat: "Clinical Pharmacy", subcat: "Smouha Clinical Critical Decision Summit", type: "Lecture", url: "https://youtu.be/Gr0rbrITYAQ", likes: 0, liked: false },
    { titleEn: "(1st) Summit Hemodialysis Transition Critical Decisions - Part 7", titleAr: "قمة سموحة الأولى لقرارات الانتقال الحرجة في الغسيل الكلوي - الجزء 7", cat: "Clinical Pharmacy", subcat: "Smouha Clinical Critical Decision Summit", type: "Lecture", url: "https://youtu.be/bpoqPrgBgzg", likes: 0, liked: false },
    { titleEn: "(1st) Summit Hemodialysis Transition Critical Decisions - Part 8", titleAr: "قمة سموحة الأولى لقرارات الانتقال الحرجة في الغسيل الكلوي - الجزء 8", cat: "Clinical Pharmacy", subcat: "Smouha Clinical Critical Decision Summit", type: "Lecture", url: "https://youtu.be/DyxeIvShuiM", likes: 0, liked: false },
    { titleEn: "(1st) Summit Hemodialysis Transition Critical Decisions - Part 9", titleAr: "قمة سموحة الأولى لقرارات الانتقال الحرجة في الغسيل الكلوي - الجزء 9", cat: "Clinical Pharmacy", subcat: "Smouha Clinical Critical Decision Summit", type: "Lecture", url: "https://youtu.be/8UI3iqplzl4", likes: 0, liked: false },
    { titleEn: "(1st) Summit Hemodialysis Transition Critical Decisions - Part 16", titleAr: "قمة سموحة الأولى لقرارات الانتقال الحرجة في الغسيل الكلوي - الجزء 16", cat: "Clinical Pharmacy", subcat: "Smouha Clinical Critical Decision Summit", type: "Lecture", url: "https://youtu.be/QAj-PadX9DM", likes: 0, liked: false }
  ]
};

let currentLang = localStorage.getItem('academyLang') || 'en';
let content = JSON.parse(localStorage.getItem('academyContent')) || defaultContent;
if (!localStorage.getItem('academyContent')) {
  localStorage.setItem('academyContent', JSON.stringify(defaultContent));
}

function reloadContent() {
  const fresh = localStorage.getItem('academyContent');
  if (fresh) content = JSON.parse(fresh);
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

function getEmbedUrl(url) {
  if (!url) return null;
  const yt = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  if (yt) return `https://www.youtube.com/embed/${yt[1]}?rel=0&modestbranding=1`;
  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`;
  const dm = url.match(/dailymotion\.com\/video\/([a-zA-Z0-9]+)/);
  if (dm) return `https://www.dailymotion.com/embed/video/${dm[1]}`;
  return null;
}

function getThumbnail(url) {
  if (!url) return null;
  const yt = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  if (yt) return `https://img.youtube.com/vi/${yt[1]}/hqdefault.jpg`;
  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeo) return `https://vumbnail.com/${vimeo[1]}.jpg`;
  const dm = url.match(/dailymotion\.com\/video\/([a-zA-Z0-9]+)/);
  if (dm) return `https://www.dailymotion.com/thumbnail/video/${dm[1]}`;
  return null;
}

function renderAll() {
  reloadContent();
  const centersGrid = document.getElementById('centersGrid');
  if (centersGrid) {
    centersGrid.innerHTML = content.centers.map(c => `
      <div class="card">
        <h4>${currentLang === 'en' ? c.en : c.ar}</h4>
        <p>${currentLang === 'en' ? c.descEn : c.descAr}</p>
      </div>
    `).join('');
  }
  const sectionsGrid = document.getElementById('sectionsGrid');
  if (sectionsGrid) {
    sectionsGrid.innerHTML = content.sections.map(s => `
      <div class="card">
        <h4>${currentLang === 'en' ? s.en : s.ar}</h4>
        <p>${currentLang === 'en' ? s.descEn : s.descAr}</p>
      </div>
    `).join('');
  }
  const libraryGrid = document.getElementById('libraryGrid');
  if (libraryGrid) {
    const groups = {};
    content.library.forEach((v, idx) => {
      const key = v.cat || 'General';
      if (!groups[key]) groups[key] = [];
      groups[key].push({ ...v, idx });
    });

    let html = '';
    Object.keys(groups).forEach(cat => {
      html += `<h4 style="grid-column:1/-1; margin:2rem 0 1rem; color:var(--navy); border-bottom:2px solid var(--gold); padding-bottom:0.5rem;">${cat}</h4>`;
      groups[cat].forEach(v => {
        const embed = getEmbedUrl(v.url);
        const thumb = getThumbnail(v.url);
        let media = `<div class="video-thumb" style="display:flex;align-items:center;justify-content:center;font-size:3rem;color:var(--gold);">▶</div>`;
        if (embed) {
          media = `
            <div class="video-thumb" style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;">
              <iframe src="${embed}" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>`;
        } else if (thumb) {
          media = `<div class="video-thumb"><img src="${thumb}" alt="Thumbnail" style="width:100%;height:100%;object-fit:cover;"></div>`;
        }
        const sub = v.subcat ? `<br><small style="color:var(--gold);">${v.subcat}</small>` : '';
        html += `
          <div class="video-card">
            ${media}
            <div class="video-info">
              <h5>${currentLang === 'en' ? v.titleEn : v.titleAr}</h5>
              <p style="font-size:0.85rem; color:#666;">${v.cat} · ${v.type}${sub}</p>
              <div style="display:flex; align-items:center; gap:0.8rem; margin-top:0.6rem;">
                <button onclick="toggleLike(${v.idx})" style="background:none; border:none; cursor:pointer; font-size:1.1rem; color:${v.liked ? 'var(--red)' : '#888'};" title="Like">
                  ${v.liked ? '♥' : '♡'} <span style="font-size:0.85rem;">${v.likes || 0}</span>
                </button>
              </div>
            </div>
          </div>
        `;
      });
    });
    libraryGrid.innerHTML = html;
  }
}

document.getElementById('langSwitch').addEventListener('click', () => {
  setLanguage(currentLang === 'en' ? 'ar' : 'en');
});

setLanguage(currentLang);

function toggleLike(index) {
  const item = content.library[index];
  if (!item.likes) item.likes = 0;
  if (item.liked) {
    item.likes = Math.max(0, item.likes - 1);
    item.liked = false;
  } else {
    item.likes += 1;
    item.liked = true;
  }
  localStorage.setItem('academyContent', JSON.stringify(content));
  renderAll();
}

document.querySelectorAll('nav a').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

window.addEventListener('focus', () => { reloadContent(); renderAll(); });
document.addEventListener('visibilitychange', () => { if (!document.hidden) { reloadContent(); renderAll(); } });
setInterval(() => { reloadContent(); renderAll(); }, 5000);
