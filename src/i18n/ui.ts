export type Lang = 'ar' | 'en';
export type T = { ar: string; en: string };

export const ui = {
  ar: {
    dir: 'rtl',
    skip: 'تخطَّ إلى المحتوى',
    nav: { services: 'الخدمات', work: 'الأعمال', packages: 'الباقات', faq: 'الأسئلة' },
    otherLang: 'English',
    otherLangCode: 'EN',
    themeToggle: 'تبديل الوضع الفاتح والداكن',
    cta: 'اطلب مشروعك',
    meta: {
      title: 'جنى | مواقع ومساعد ذكي للأعمال في الكويت والخليج',
      description: 'مواقع عربية سريعة وفخمة مع مساعد واتساب ذكي يرد على عملائك ٢٤ ساعة باللهجة الخليجية.',
    },
    hero: {
      badge: 'مواقع + ذكاء اصطناعي · للكويت والخليج',
      title1: 'موقعك يبيع،',
      title2: 'ومساعدك يرد.',
      lead: 'مواقع عربية فخمة وسريعة على الجوال، مع مساعد واتساب ذكي يتكلم كويتي، يحجز ويرد على عملائك ٢٤ ساعة.',
      primary: 'اطلب عرض على مستقل',
      primaryAlt: 'اطلب عرض',
      secondary: 'شوف الأعمال',
    },
    chat: {
      label: 'مساعد العيادة · مباشر',
      q: 'هلا، أبي موعد تنظيف باچر عقب الدوام',
      a: 'هلا والله! عندنا باچر ٤:٣٠ أو ٦:٠٠، أي وقت يناسبك؟',
      q2: '٦ تمام',
    },
    stats: [
      { value: '٩٨.٥٪', label: 'دقة توجيه المساعد' },
      { value: '<1s', label: 'تحميل على الجوال' },
      { value: 'AR / EN', label: 'لغتين في موقع واحد' },
    ],
    services: { title: 'الخدمات', lead: 'كل اللي يحتاجه نشاطك عشان يبان ويبيع أونلاين.' },
    work: { title: 'أعمال مختارة', lead: 'ديموهات حية تقدر تجربها من جوالك، ومشاريع ذكاء اصطناعي بنتائج مقاسة.', demo: 'ديمو حي', ai: 'ذكاء اصطناعي', open: 'التفاصيل' },
    packages: { title: 'الباقات', lead: 'كل مشروع له سعره حسب احتياجك. اختر الباقة الأقرب وأرسل لي التفاصيل على مستقل.', popular: 'الأكثر طلباً', cta: 'اطلب عرض سعر' },
    process: { title: 'كيف نشتغل' },
    faq: { title: 'أسئلة شائعة' },
    final: { title: 'جاهز تخلي نشاطك أونلاين؟', lead: 'أرسل لي فكرتك على مستقل، وأرد عليك بخطة وعرض واضح.', cta: 'تواصل معي على مستقل', ctaAlt: 'تواصل معي' },
    footer: { rights: 'جميع الحقوق محفوظة', demoNote: 'الديموهات أنشطة وهمية للعرض فقط.' },
    project: { back: 'كل الأعمال', problem: 'المشكلة', solution: 'الحل', results: 'النتيجة', live: 'افتح الديمو', repo: 'الكود على GitHub', stack: 'التقنيات', want: 'تبي شي مثله لنشاطك؟' },
  },
  en: {
    dir: 'ltr',
    skip: 'Skip to content',
    nav: { services: 'Services', work: 'Work', packages: 'Packages', faq: 'FAQ' },
    otherLang: 'العربية',
    otherLangCode: 'ع',
    themeToggle: 'Toggle light and dark mode',
    cta: 'Start a project',
    meta: {
      title: 'Jana | Websites and AI assistants for Kuwait and Gulf businesses',
      description: 'Fast, premium Arabic-first websites with an AI WhatsApp assistant that answers your customers 24/7 in Gulf Arabic.',
    },
    hero: {
      badge: 'Websites + AI · for Kuwait and the Gulf',
      title1: 'Your website sells,',
      title2: 'your assistant replies.',
      lead: 'Premium Arabic-first websites that load fast on mobile, with an AI WhatsApp assistant that speaks Kuwaiti and books customers around the clock.',
      primary: 'Get a quote on Mostaql',
      primaryAlt: 'Get a quote',
      secondary: 'See the work',
    },
    chat: {
      label: 'Clinic assistant · live',
      q: 'Hi, I want a cleaning appointment tomorrow after work',
      a: 'Hello! Tomorrow we have 4:30 or 6:00. Which works for you?',
      q2: '6 is good',
    },
    stats: [
      { value: '98.5%', label: 'Assistant routing accuracy' },
      { value: '<1s', label: 'Load time on mobile' },
      { value: 'AR / EN', label: 'Two languages, one site' },
    ],
    services: { title: 'Services', lead: 'Everything your business needs to be seen and sell online.' },
    work: { title: 'Selected work', lead: 'Live demos you can try on your phone, and AI projects with measured results.', demo: 'Live demo', ai: 'AI', open: 'Details' },
    packages: { title: 'Packages', lead: 'Every project is priced to fit your needs. Pick the closest package and send me the details on Mostaql.', popular: 'Most requested', cta: 'Request a quote' },
    process: { title: 'How we work' },
    faq: { title: 'Frequently asked questions' },
    final: { title: 'Ready to take your business online?', lead: 'Send me your idea on Mostaql and get a clear plan and offer.', cta: 'Contact me on Mostaql', ctaAlt: 'Contact me' },
    footer: { rights: 'All rights reserved', demoNote: 'Demo businesses are fictional, for showcase only.' },
    project: { back: 'All work', problem: 'The problem', solution: 'The solution', results: 'The result', live: 'Open the demo', repo: 'Code on GitHub', stack: 'Tech', want: 'Want something like this for your business?' },
  },
} as const;

/** Prefix a site path with the language folder. */
export const path = (lang: Lang, p = '/') => (lang === 'ar' ? p : `/en${p}`);
