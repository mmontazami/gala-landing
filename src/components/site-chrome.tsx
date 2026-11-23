import { Mail, MapPin, Phone } from "lucide-react";
import {
  ABOUT_URL,
  CONTACT_EMAIL,
  INSTAGRAM_URL,
  PRIVACY_URL,
  TERMS_URL,
  TIKTOK_URL,
  useI18n,
} from "@/lib/i18n";

const brandIcon = "/gala_icon.png";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className="w-5 h-5">
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.04a2.5 2.5 0 0 1-4.5 1.53 2.5 2.5 0 0 1 2.1-3.72 2.7 2.7 0 0 1 .66.08V9.4a6.2 6.2 0 0 0-.66-.04A5.91 5.91 0 0 0 4 15.27a5.91 5.91 0 0 0 10.37 3.84V8.89a8.55 8.55 0 0 0 4.83 1.55V7.08a4.77 4.77 0 0 1-1.61-.39z" />
    </svg>
  );
}

export function Header() {
  const { t, toggleLang } = useI18n();

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="/#top" className="flex items-center gap-2">
          <img src={brandIcon} alt="Gala" className="h-8 w-8 object-contain" />
        </a>
        <nav className="hidden md:flex items-center gap-10 eyebrow">
          <a href="/#about" className="hover:opacity-60 transition-opacity">{t("navAbout")}</a>
          <a href="/#features" className="hover:opacity-60 transition-opacity">{t("navFeatures")}</a>
          <a href="/#how" className="hover:opacity-60 transition-opacity">{t("navHow")}</a>
          <a href="/#contact" className="hover:opacity-60 transition-opacity">{t("navContact")}</a>
        </nav>
        <div className="flex items-center gap-5">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={t("langToggleAria")}
            className="eyebrow hover:opacity-60 transition-opacity"
          >
            {t("langToggle")}
          </button>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="eyebrow border-b border-background pb-1 hover:opacity-60 transition-opacity"
          >
            {t("becomePartner")}
          </a>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  const { t } = useI18n();

  return (
    <footer id="contact" className="bg-foreground text-background pt-24 pb-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <img src={brandIcon} alt="Gala" className="h-12 w-12 object-contain" />
          <p className="mt-6 text-sm text-background/70 max-w-xs leading-relaxed font-light">
            {t("footerTagline")}
          </p>
          <p className="mt-6 flex items-start gap-3 text-sm text-background/70 max-w-sm leading-relaxed font-light">
            <MapPin className="size-4 shrink-0 mt-0.5 opacity-70" aria-hidden />
            <span>{t("footerAddress")}</span>
          </p>
          <p className="mt-3 flex items-center gap-3 text-sm text-background/70 font-light">
            <Phone className="size-4 shrink-0 opacity-70" aria-hidden />
            <a href="tel:+96522006865" className="hover:opacity-60 transition-opacity">+965 22006865</a>
          </p>
          <p className="mt-3 flex items-center gap-3 text-sm text-background/70 font-light">
            <Mail className="size-4 shrink-0 opacity-70" aria-hidden />
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="hover:opacity-60 transition-opacity"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
        <div>
          <p className="eyebrow text-background/60 mb-5">{t("footerCompany")}</p>
          <ul className="space-y-3 text-sm font-light">
            <li>
              <a
                href={ABOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60 transition-opacity"
              >
                {t("navAbout")}
              </a>
            </li>
            <li>
              <a
                href={PRIVACY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60 transition-opacity"
              >
                {t("footerPrivacy")}
              </a>
            </li>
            <li>
              <a
                href={TERMS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60 transition-opacity"
              >
                {t("footerTerms")}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-background/60 mb-5">{t("footerFollow")}</p>
          <div className="flex flex-col gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center gap-3 text-sm hover:opacity-60 transition-opacity"
            >
              <InstagramIcon />
              <span className="font-light">{t("footerInstagram")}</span>
            </a>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="inline-flex items-center gap-3 text-sm hover:opacity-60 transition-opacity"
            >
              <TikTokIcon />
              <span className="font-light">{t("footerTikTok")}</span>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-20 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="eyebrow text-background/60">© {new Date().getFullYear()} Gala Occasions</p>
        <p className="eyebrow text-background/60">{t("footerDesigned")}</p>
      </div>
    </footer>
  );
}
