import { createFileRoute } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { APP_STORE_URL, PLAY_STORE_URL, useI18n } from "@/lib/i18n";
import { Header, Footer } from "@/components/site-chrome";
import logo from "@/assets/gala-logo.png";
import mockup from "@/assets/gala-mockup.jpg";
import heroBg from "@/assets/gala-hero-bg.jpg";

export const Route = createFileRoute("/")({
  component: GalaLanding,
});

function SectionHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <div className="text-center mb-20 md:mb-24 max-w-3xl mx-auto">
      <p className="eyebrow text-muted-foreground mb-6">{label}</p>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.08]">
        {title}
      </h2>
      {description && (
        <p className="mt-8 max-w-xl mx-auto text-base text-muted-foreground font-light leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

function SectionItem({
  index,
  title,
  description,
  centered,
}: {
  index: number;
  title: string;
  description: string;
  centered?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col",
        centered
          ? "items-center text-center"
          : "text-center md:text-start"
      )}
    >
      <p className="eyebrow text-muted-foreground mb-6">
        {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="text-2xl md:text-[1.6rem] font-serif leading-tight">
        {title}
      </h3>
      <p className="mt-5 text-base text-muted-foreground font-light leading-relaxed max-w-xs">
        {description}
      </p>
    </div>
  );
}

function Hero() {
  const { t, lang } = useI18n();

  return (
    <section id="top" className="relative pt-32 pb-16 md:pt-48 md:pb-40 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center animate-fade-in">
        <p className="eyebrow text-muted-foreground mb-8 md:mb-12">{t("heroEyebrow")}</p>
        <div className="flex justify-center mb-12 md:mb-20">
          <img
            src={logo}
            alt="Gala Occasions"
            className="w-80 md:w-[28rem] lg:w-[32rem] h-auto animate-fade-up"
          />
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight animate-fade-up font-light">
          {t("heroTitleLine1")}
          <br />
          {lang === "ar" ? (
            <span>{t("heroTitleLine2")}</span>
          ) : (
            <em className="italic font-light">{t("heroTitleLine2")}</em>
          )}
        </h1>
        <p className="mt-6 md:mt-8 max-w-lg mx-auto text-sm md:text-base text-muted-foreground font-light leading-relaxed animate-fade-up">
          {t("heroBody")}
        </p>
        <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up">
          <a href="#contact" className="btn-primary hover:bg-transparent hover:text-foreground">
            {t("becomePartner")}
          </a>
          <a href="#about" className="btn-ghost hover:bg-foreground hover:text-background">
            {t("learnMore")}
          </a>
        </div>
      </div>
      <div className="mt-24 md:mt-32 max-w-6xl mx-auto px-6">
        <img
          src={heroBg}
          alt="An elegant evening at an exclusive gala"
          width={1600}
          height={1000}
          decoding="async"
          fetchPriority="high"
          className="w-full h-[55vh] md:h-[80vh] object-cover"
        />
      </div>
    </section>
  );
}

function About() {
  const { t } = useI18n();
  const points = [
    { t: t("about1Title"), d: t("about1Desc") },
    { t: t("about2Title"), d: t("about2Desc") },
    { t: t("about3Title"), d: t("about3Desc") },
  ];
  return (
    <section id="about" className="py-28 md:py-40">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          label={t("aboutLabel")}
          title={t("aboutTitle")}
          description={t("aboutDesc")}
        />
        <div className="grid md:grid-cols-3 gap-16 md:gap-10">
          {points.map((p, i) => (
            <SectionItem key={p.t} index={i} title={p.t} description={p.d} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const { t } = useI18n();
  const items = [
    { t: t("features1Title"), d: t("features1Desc") },
    { t: t("features2Title"), d: t("features2Desc") },
    { t: t("features3Title"), d: t("features3Desc") },
  ];
  return (
    <section id="features" className="py-28 md:py-40">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader label={t("featuresLabel")} title={t("featuresTitle")} />
        <div className="grid md:grid-cols-3 gap-16 md:gap-10">
          {items.map((f, i) => (
            <SectionItem key={f.t} index={i} title={f.t} description={f.d} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  const { t, lang } = useI18n();
  const items = [
    { t: t("app1Title"), d: t("app1Desc") },
    { t: t("app2Title"), d: t("app2Desc") },
    { t: t("app3Title"), d: t("app3Desc") },
  ];
  return (
    <section className="py-28 md:py-40">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          label={t("appLabel")}
          title={
            <>
              {t("appTitleBefore")}{" "}
              {lang === "ar" ? (
                <span>{t("appTitleEm")}</span>
              ) : (
                <em className="italic">{t("appTitleEm")}</em>
              )}
            </>
          }
          description={t("appDesc")}
        />
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          <div className="flex justify-center order-2 md:order-1">
            <img
              src={mockup}
              alt="Gala app invitation and QR"
              width={1200}
              height={1504}
              loading="lazy"
              decoding="async"
              className="w-full max-w-sm h-auto"
            />
          </div>
          <div className="order-1 md:order-2 flex flex-col items-center text-center space-y-14">
            {items.map((f, i) => (
              <SectionItem key={f.t} index={i} title={f.t} description={f.d} centered />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const { t } = useI18n();
  const steps = [
    { n: "I", t: t("how1Title"), d: t("how1Desc") },
    { n: "II", t: t("how2Title"), d: t("how2Desc") },
    { n: "III", t: t("how3Title"), d: t("how3Desc") },
  ];
  return (
    <section id="how" className="py-28 md:py-40 bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-6">
        <p className="eyebrow opacity-60 text-center">{t("howLabel")}</p>
        <h2 className="mt-6 text-center text-4xl md:text-5xl lg:text-6xl font-light">
          {t("howTitle")}
        </h2>
        <div className="mt-20 grid md:grid-cols-3 gap-12">
          {steps.map((s) => (
            <div key={s.n} className="text-center">
              <p className="font-serif italic text-5xl opacity-40">{s.n}</p>
              <div className="my-8" />
              <h3 className="text-2xl font-serif">{s.t}</h3>
              <p className="mt-4 text-sm opacity-70 leading-relaxed max-w-xs mx-auto font-light">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const { t, lang } = useI18n();

  return (
    <section id="cta" className="py-32 md:py-48 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <p className="eyebrow text-muted-foreground">{t("ctaLabel")}</p>
        <h2 className="mt-8 text-5xl md:text-7xl lg:text-8xl leading-[1.05] font-light">
          {t("ctaTitleLine1")}
          <br />
          {lang === "ar" ? (
            <span>{t("ctaTitleEm")}</span>
          ) : (
            <em className="italic">{t("ctaTitleEm")}</em>
          )}
        </h2>
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hover:opacity-85 transition-opacity"
          >
            {t("downloadIos")}
          </a>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hover:opacity-85 transition-opacity"
          >
            {t("downloadAndroid")}
          </a>
        </div>
      </div>
    </section>
  );
}

function GalaLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Showcase />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
