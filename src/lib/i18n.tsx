import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "ar";

export const APP_STORE_URL =
  "https://apps.apple.com/us/app/gala-occasions/id6805474421";
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=app.gala&pli=1";
export const INSTAGRAM_URL = "https://instagram.com/galatheapp";
export const TIKTOK_URL = "https://tiktok.com/@galatheapp";

const STORAGE_KEY = "gala-lang";

const messages = {
  en: {
    navAbout: "About",
    navFeatures: "Features",
    navHow: "How it works",
    navContact: "Contact",
    becomePartner: "Become a Partner",
    heroEyebrow: "An invitation platform · 2026",
    heroTitleLine1: "Redefining",
    heroTitleLine2: "Event Access",
    heroBody:
      "Seamless digital invitations and smart entry management for the world's most considered occasions.",
    learnMore: "Learn More",
    aboutLabel: "The House of Gala",
    aboutTitle: "Redefining event access",
    aboutDesc:
      "From exclusive digital invitations to seamless entry management, every detail is considered with quiet elegance.",
    about1Title: "Thoughtfully composed",
    about1Desc: "Digital invitations designed with quiet precision.",
    about2Title: "Discreetly delivered",
    about2Desc: "Secure QR credentials for effortless arrivals.",
    about3Title: "Managed in real time",
    about3Desc: "A calm overview of every guest, live.",
    featuresLabel: "The Collection",
    featuresTitle: "A considered selection",
    features1Title: "Smart Invitations",
    features1Desc: "Beautifully composed invitations, sent in a moment.",
    features2Title: "Guest Verification",
    features2Desc: "Discreet QR credentials for effortless arrivals.",
    features3Title: "Event Dashboard",
    features3Desc: "A quiet overview of attendance, live.",
    appLabel: "The App",
    appTitleBefore: "Every invitation,",
    appTitleEm: "reimagined",
    appDesc:
      "A refined mobile experience where each invitation, RSVP and arrival is choreographed with the same care as the event itself.",
    app1Title: "Editorial templates",
    app1Desc: "Invitations composed with typographic care.",
    app2Title: "Encrypted credentials",
    app2Desc: "Discreet QR keys, delivered privately.",
    app3Title: "Arrival intelligence",
    app3Desc: "A live, quiet view of every guest.",
    howLabel: "The Process",
    howTitle: "How it works",
    how1Title: "Create your event",
    how1Desc: "Curate details, guest list and aesthetic in minutes.",
    how2Title: "Send invitations via Gala",
    how2Desc: "Deliver refined digital invitations to every guest.",
    how3Title: "Manage entry seamlessly",
    how3Desc: "Scan, welcome and monitor in real time.",
    ctaLabel: "Invitation Only",
    ctaTitleLine1: "Elevate every event",
    ctaTitleEm: "with Gala.",
    downloadIos: "Download for iOS",
    downloadAndroid: "Download for Android",
    footerTagline:
      "The invitation platform for the world's most considered occasions.",
    footerAddress:
      "Kuwait, Al Asimah Governorate, Mirqab, Block 2, Street 150, Reem Marzouq Mohammed Al-Ghanim Building, Floor 2, Office 14.",
    footerCompany: "Company",
    footerFollow: "Follow",
    footerPrivacy: "Privacy Policy",
    footerInstagram: "Instagram",
    footerTikTok: "TikTok",
    footerDesigned: "Designed with intention",
    privacyTitle: "Privacy Policy",
    privacyUpdated: "Last updated: November 2026",
    privacyIntro:
      "Gala Occasions (“Gala”, “we”, “us”) respects your privacy. This policy explains how we collect, use, and protect information when you use our website and mobile applications.",
    privacy1Title: "Information we collect",
    privacy1Body:
      "We may collect account details, contact information, event and guest-list data you provide, device information, and usage analytics needed to operate and improve Gala.",
    privacy2Title: "How we use information",
    privacy2Body:
      "We use information to deliver invitations and entry management, provide support, improve our products, communicate with partners and guests, and meet legal obligations.",
    privacy3Title: "Sharing",
    privacy3Body:
      "We do not sell personal information. We may share data with service providers who help us operate Gala, with event hosts as needed to run their events, or when required by law.",
    privacy4Title: "Security & retention",
    privacy4Body:
      "We apply appropriate technical and organizational measures to protect your data and retain it only as long as needed for the purposes described in this policy.",
    privacy5Title: "Your choices",
    privacy5Body:
      "You may request access, correction, or deletion of your personal information by contacting us using the details below.",
    privacy6Title: "Contact",
    privacy6Body:
      "For privacy questions, contact us at phone 22006865 or visit our office in Kuwait, Al Asimah Governorate, Mirqab, Block 2, Street 150, Reem Marzouq Mohammed Al-Ghanim Building, Floor 2, Office 14.",
    privacyBack: "Back to home",
    langToggle: "العربية",
    langToggleAria: "Switch to Arabic",
  },
  ar: {
    navAbout: "عن غالا",
    navFeatures: "الميزات",
    navHow: "كيف يعمل",
    navContact: "تواصل معنا",
    becomePartner: "كن شريكًا",
    heroEyebrow: "منصة دعوات · ٢٠٢٦",
    heroTitleLine1: "إعادة تعريف",
    heroTitleLine2: "الوصول إلى الفعاليات",
    heroBody:
      "دعوات رقمية سلسة وإدارة دخول ذكية لأرقى المناسبات وأكثرها عناية.",
    learnMore: "اعرف المزيد",
    aboutLabel: "بيت غالا",
    aboutTitle: "إعادة تعريف الوصول إلى الفعاليات",
    aboutDesc:
      "من الدعوات الرقمية الحصرية إلى إدارة الدخول بسلاسة، كل تفصيل يُراعى بأناقة هادئة.",
    about1Title: "مصمّمة بعناية",
    about1Desc: "دعوات رقمية بتصميم دقيق وهادئ.",
    about2Title: "تُسلَّم بسرية",
    about2Desc: "بيانات QR آمنة لوصول بلا عناء.",
    about3Title: "إدارة لحظية",
    about3Desc: "نظرة هادئة على كل ضيف في الوقت الفعلي.",
    featuresLabel: "المجموعة",
    featuresTitle: "اختيار مدروس",
    features1Title: "دعوات ذكية",
    features1Desc: "دعوات أنيقة تُرسل في لحظة.",
    features2Title: "التحقق من الضيوف",
    features2Desc: "بيانات QR سرية لوصول سلس.",
    features3Title: "لوحة الفعالية",
    features3Desc: "نظرة هادئة على الحضور مباشرة.",
    appLabel: "التطبيق",
    appTitleBefore: "كل دعوة،",
    appTitleEm: "بتصور جديد",
    appDesc:
      "تجربة جوال راقية حيث تُنسَّق كل دعوة وردّ وتواجد بنفس عناية المناسبة نفسها.",
    app1Title: "قوالب تحريرية",
    app1Desc: "دعوات بصياغة طباعية متأنية.",
    app2Title: "بيانات مشفّرة",
    app2Desc: "مفاتيح QR سرية تُسلَّم بخصوصية.",
    app3Title: "ذكاء الوصول",
    app3Desc: "عرض مباشر وهادئ لكل ضيف.",
    howLabel: "العملية",
    howTitle: "كيف يعمل",
    how1Title: "أنشئ فعاليتك",
    how1Desc: "رتّب التفاصيل وقائمة الضيوف والأسلوب في دقائق.",
    how2Title: "أرسل الدعوات عبر غالا",
    how2Desc: "أوصل دعوات رقمية راقية إلى كل ضيف.",
    how3Title: "أدِر الدخول بسلاسة",
    how3Desc: "امسح ورحّب وتابع في الوقت الفعلي.",
    ctaLabel: "بدعوة فقط",
    ctaTitleLine1: "ارتقِ بكل مناسبة",
    ctaTitleEm: "مع غالا.",
    downloadIos: "حمّل لـ iOS",
    downloadAndroid: "حمّل لأندرويد",
    footerTagline: "منصة الدعوات لأرقى المناسبات وأكثرها عناية.",
    footerAddress:
      "الكويت، محافظة العاصمة، المرقاب، قطعة ٢، شارع ١٥٠، مبنى ريم مرزوق محمد الغانم، الطابق ٢، مكتب ١٤.",
    footerCompany: "الشركة",
    footerFollow: "تابعنا",
    footerPrivacy: "سياسة الخصوصية",
    footerInstagram: "إنستغرام",
    footerTikTok: "تيك توك",
    footerDesigned: "صُمّم بقصد",
    privacyTitle: "سياسة الخصوصية",
    privacyUpdated: "آخر تحديث: نوفمبر ٢٠٢٦",
    privacyIntro:
      "تحترم غالا للمناسبات («غالا»، «نحن») خصوصيتك. توضح هذه السياسة كيف نجمع المعلومات ونستخدمها ونحميها عند استخدام موقعنا وتطبيقاتنا.",
    privacy1Title: "المعلومات التي نجمعها",
    privacy1Body:
      "قد نجمع بيانات الحساب ومعلومات التواصل وبيانات الفعاليات وقوائم الضيوف التي تقدّمها، ومعلومات الجهاز وتحليلات الاستخدام اللازمة لتشغيل غالا وتحسينه.",
    privacy2Title: "كيف نستخدم المعلومات",
    privacy2Body:
      "نستخدم المعلومات لتقديم الدعوات وإدارة الدخول، وتقديم الدعم، وتحسين منتجاتنا، والتواصل مع الشركاء والضيوف، والوفاء بالالتزامات القانونية.",
    privacy3Title: "المشاركة",
    privacy3Body:
      "لا نبيع المعلومات الشخصية. قد نشارك البيانات مع مزوّدي الخدمات الذين يساعدوننا في تشغيل غالا، ومع منظّمي الفعاليات حسب الحاجة، أو عند الاقتضاء قانونًا.",
    privacy4Title: "الأمان والاحتفاظ",
    privacy4Body:
      "نطبّق تدابير تقنية وتنظيمية مناسبة لحماية بياناتك ونحتفظ بها فقط طالما يلزم للأغراض الموضحة في هذه السياسة.",
    privacy5Title: "خياراتك",
    privacy5Body:
      "يمكنك طلب الوصول إلى معلوماتك الشخصية أو تصحيحها أو حذفها عبر التواصل معنا باستخدام التفاصيل أدناه.",
    privacy6Title: "تواصل معنا",
    privacy6Body:
      "لأسئلة الخصوصية، تواصل معنا على الهاتف ٢٢٠٠٦٨٦٥ أو زر مكتبنا في الكويت، محافظة العاصمة، المرقاب، قطعة ٢، شارع ١٥٠، مبنى ريم مرزوق محمد الغانم، الطابق ٢، مكتب ١٤.",
    privacyBack: "العودة للرئيسية",
    langToggle: "EN",
    langToggleAria: "التبديل إلى الإنجليزية",
  },
} as const;

export type MessageKey = keyof typeof messages.en;

type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: (key: MessageKey) => string;
  dir: "ltr" | "rtl";
};

const I18nContext = createContext<I18nContextValue | null>(null);

function readStoredLang(): Lang {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "ar" || stored === "en") return stored;
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    setLangState(readStoredLang());
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    root.classList.toggle("lang-ar", lang === "ar");
    root.classList.toggle("lang-en", lang === "en");
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => (prev === "en" ? "ar" : "en"));
  }, []);

  const t = useCallback(
    (key: MessageKey) => messages[lang][key] ?? messages.en[key],
    [lang],
  );

  return (
    <I18nContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        t,
        dir: lang === "ar" ? "rtl" : "ltr",
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within LanguageProvider");
  }
  return ctx;
}
