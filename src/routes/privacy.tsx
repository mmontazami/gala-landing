import { createFileRoute, Link } from "@tanstack/react-router";
import { Header, Footer } from "@/components/site-chrome";
import { useI18n, type MessageKey } from "@/lib/i18n";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
});

const sections: { title: MessageKey; body: MessageKey }[] = [
  { title: "privacy1Title", body: "privacy1Body" },
  { title: "privacy2Title", body: "privacy2Body" },
  { title: "privacy3Title", body: "privacy3Body" },
  { title: "privacy4Title", body: "privacy4Body" },
  { title: "privacy5Title", body: "privacy5Body" },
  { title: "privacy6Title", body: "privacy6Body" },
];

function PrivacyPage() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 pb-28 md:pt-40 md:pb-40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="eyebrow text-muted-foreground">{t("privacyUpdated")}</p>
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-light leading-[1.08]">
            {t("privacyTitle")}
          </h1>
          <p className="mt-8 text-base text-muted-foreground font-light leading-relaxed">
            {t("privacyIntro")}
          </p>
          <div className="mt-16 space-y-12">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-serif">{t(section.title)}</h2>
                <p className="mt-4 text-base text-muted-foreground font-light leading-relaxed">
                  {t(section.body)}
                </p>
              </section>
            ))}
          </div>
          <div className="mt-16">
            <Link to="/" className="btn-ghost hover:bg-foreground hover:text-background">
              {t("privacyBack")}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
