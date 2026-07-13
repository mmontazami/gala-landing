import { createFileRoute } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import logo from "@/assets/gala-logo.png";
import mockup from "@/assets/gala-mockup.jpg";
import heroBg from "@/assets/gala-hero-bg.jpg";

export const Route = createFileRoute("/")({
  component: GalaLanding,
});

function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Gala" className="h-8 w-auto invert" />
        </a>
        <nav className="hidden md:flex items-center gap-10 eyebrow">
          <a href="#about" className="hover:opacity-60 transition-opacity">About</a>
          <a href="#features" className="hover:opacity-60 transition-opacity">Features</a>
          <a href="#how" className="hover:opacity-60 transition-opacity">How it works</a>
          <a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a>
        </nav>
        <a href="#cta" className="eyebrow border-b border-background pb-1 hover:opacity-60 transition-opacity">
          Become a Partner
        </a>
      </div>
    </header>
  );
}

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
          : "text-center md:text-left"
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
  return (
    <section id="top" className="relative pt-32 pb-16 md:pt-48 md:pb-40 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center animate-fade-in">
        <p className="eyebrow text-muted-foreground mb-8 md:mb-12">An invitation platform · 2026</p>
        <div className="flex justify-center mb-12 md:mb-20">
          <img
            src={logo}
            alt="Gala Occasions"
            className="w-80 md:w-[28rem] lg:w-[32rem] h-auto animate-fade-up"
          />
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight animate-fade-up font-light">
          Redefining
          <br />
          <em className="italic font-light">Event Access</em>
        </h1>
        <p className="mt-6 md:mt-8 max-w-lg mx-auto text-sm md:text-base text-muted-foreground font-light leading-relaxed animate-fade-up">
          Seamless digital invitations and smart entry management for the world's
          most considered occasions.
        </p>
        <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up">
          <a href="#cta" className="btn-primary hover:bg-transparent hover:text-foreground">
            Become a Partner
          </a>
          <a href="#about" className="btn-ghost hover:bg-foreground hover:text-background">
            Learn More
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
  const points = [
    { t: "Thoughtfully composed", d: "Digital invitations designed with quiet precision." },
    { t: "Discreetly delivered", d: "Secure QR credentials for effortless arrivals." },
    { t: "Managed in real time", d: "A calm overview of every guest, live." },
  ];
  return (
    <section id="about" className="py-28 md:py-40">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          label="The House of Gala"
          title="Redefining event access"
          description="From exclusive digital invitations to seamless entry management, every detail is considered with quiet elegance."
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
  const items = [
    { t: "Smart Invitations", d: "Beautifully composed invitations, sent in a moment." },
    { t: "Guest Verification", d: "Discreet QR credentials for effortless arrivals." },
    { t: "Event Dashboard", d: "A quiet overview of attendance, live." },
  ];
  return (
    <section id="features" className="py-28 md:py-40">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader label="The Collection" title="A considered selection" />
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
  const items = [
    { t: "Editorial templates", d: "Invitations composed with typographic care." },
    { t: "Encrypted credentials", d: "Discreet QR keys, delivered privately." },
    { t: "Arrival intelligence", d: "A live, quiet view of every guest." },
  ];
  return (
    <section className="py-28 md:py-40">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          label="The App"
          title={
            <>
              Every invitation, <em className="italic">reimagined</em>
            </>
          }
          description="A refined mobile experience where each invitation, RSVP and arrival is choreographed with the same care as the event itself."
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
  const steps = [
    { n: "I", t: "Create your event", d: "Curate details, guest list and aesthetic in minutes." },
    { n: "II", t: "Send invitations via Gala", d: "Deliver refined digital invitations to every guest." },
    { n: "III", t: "Manage entry seamlessly", d: "Scan, welcome and monitor in real time." },
  ];
  return (
    <section id="how" className="py-28 md:py-40 bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-6">
        <p className="eyebrow opacity-60 text-center">The Process</p>
        <h2 className="mt-6 text-center text-4xl md:text-5xl lg:text-6xl font-light">
          How it works
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
  return (
    <section id="cta" className="py-32 md:py-48 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <p className="eyebrow text-muted-foreground">Invitation Only</p>
        <h2 className="mt-8 text-5xl md:text-7xl lg:text-8xl leading-[1.05] font-light">
          Elevate every event
          <br />
          <em className="italic">with Gala.</em>
        </h2>
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#" className="btn-primary hover:opacity-85 transition-opacity">
            Download for iOS
          </a>
          <a href="#" className="btn-primary hover:opacity-85 transition-opacity">
            Download for Android
          </a>
        </div>
      </div>
    </section>
  );
}

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

function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background pt-24 pb-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <img src={logo} alt="Gala" className="h-12 w-auto invert" />
          <p className="mt-6 text-sm text-background/70 max-w-xs leading-relaxed font-light">
            The invitation platform for the world's most considered occasions.
          </p>
        </div>
        <div>
          <p className="eyebrow text-background/60 mb-5">Company</p>
          <ul className="space-y-3 text-sm font-light">
            <li><a href="#about" className="hover:opacity-60 transition-opacity">About</a></li>
            <li><a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a></li>
            <li><a href="#" className="hover:opacity-60 transition-opacity">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-background/60 mb-5">Follow</p>
          <div className="flex flex-col gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="inline-flex items-center gap-3 text-sm hover:opacity-60 transition-opacity"
            >
              <InstagramIcon />
              <span className="font-light">Instagram</span>
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="inline-flex items-center gap-3 text-sm hover:opacity-60 transition-opacity"
            >
              <TikTokIcon />
              <span className="font-light">TikTok</span>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-20 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="eyebrow text-background/60">© {new Date().getFullYear()} Gala Occasions</p>
        <p className="eyebrow text-background/60">Designed with intention</p>
      </div>
    </footer>
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
