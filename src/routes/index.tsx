import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, type CSSProperties, type MouseEvent, type ReactNode } from "react";
import splash from "@/assets/hero-splash.jpg";
import logoAsset from "@/assets/logo-amarf.png";
const logo = logoAsset;
import pColaAsset from "@/assets/p-cola.png";
const pCola = pColaAsset;
import pOrangeAsset from "@/assets/p-orange.png";
const pOrange = pOrangeAsset;
import pLemonAsset from "@/assets/p-lemon.png";
const pLemon = pLemonAsset;
import pAnanasAsset from "@/assets/p-ananas.png";
const pAnanas = pAnanasAsset;
import pCocktailAsset from "@/assets/p-cocktail.png";
const pCocktail = pCocktailAsset;
import pTonicAsset from "@/assets/p-tonic.jpg";
const pTonic = pTonicAsset;
import pEauAsset from "@/assets/p-eau.jpg";
const pEau = pEauAsset;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Société AMARF ET FILS — Partenaire officiel SOBEBRA au Bénin" },
      { name: "description", content: "Sucreries, jus et eaux SOBEBRA en gros et au détail. Livraison rapide pour bars, maquis, événements et particuliers. Aita, après l'Université de Sakété." },
      { property: "og:title", content: "Société AMARF ET FILS — Partenaire officiel SOBEBRA" },
      { property: "og:description", content: "Sucreries, jus et eaux SOBEBRA toujours frais, au meilleur prix, livrées chez vous." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PHONE = "+229 01 51 74 95 05";
const WA = "https://wa.me/2290151749505";

const products = [
  { name: "Coca-Cola", cat: "Sucrerie", note: "Le goût inimitable", img: pCola, tone: "cola" },
  { name: "Fanta Orange", cat: "Sucrerie", note: "Pétillant et fruité", img: pOrange, tone: "orange" },
  { name: "Fanta Cocktail", cat: "Sucrerie", note: "Le mélange de fruits", img: pCocktail, tone: "cocktail" },
  { name: "Sprite", cat: "Sucrerie", note: "Frais au citron", img: pLemon, tone: "lemon" },
  { name: "Top Ananas", cat: "Jus", note: "Le goût de l'ananas", img: pAnanas, tone: "ananas" },
  { name: "Schweppes Tonic", cat: "Sucrerie", note: "Fines bulles", img: pTonic, tone: "tonic" },
  { name: "Possotomè", cat: "Eau minérale", note: "L'eau pure du Bénin", img: pEau, tone: "eau" },
  { name: "Et bien plus", cat: "Toute la gamme", note: "Toutes les sucreries et eaux SOBEBRA", img: pOrange, tone: "orange" },
];

const services = [
  { t: "Vente en gros", d: "Prix dépôt pour bars, maquis, boutiques et revendeurs." },
  { t: "Livraison rapide", d: "Nous livrons vos casiers où vous voulez, à l'heure." },
  { t: "Événements", d: "Mariages, baptêmes, fêtes : quantités et conseils adaptés." },
  { t: "Toujours frais", d: "Produits authentiques, directement de SOBEBRA." },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("is-in"), io.unobserve(e.target))),
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Tilt({ children, className = "", style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--ry", `${x * 14}deg`);
    el.style.setProperty("--rx", `${-y * 14}deg`);
  };
  const leave = () => {
    ref.current?.style.setProperty("--ry", "0deg");
    ref.current?.style.setProperty("--rx", "0deg");
  };
  return (
    <div ref={ref} onMouseMove={move} onMouseLeave={leave} className={`tilt ${className}`} style={style}>
      {children}
    </div>
  );
}

const bubbles = Array.from({ length: 22 }, (_, i) => ({
  left: (i * 37) % 100,
  size: 4 + ((i * 7) % 14),
  dur: 7 + ((i * 3) % 9),
  delay: (i * 0.7) % 8,
}));

function Bubbles() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {bubbles.map((b, i) => (
        <span
          key={i}
          className="animate-bubble absolute -bottom-6 rounded-full border border-ink-foreground/40 bg-ink-foreground/10"
          style={{ left: `${b.left}%`, width: b.size, height: b.size, animationDuration: `${b.dur}s`, animationDelay: `${b.delay}s` }}
        />
      ))}
    </div>
  );
}

const orderLink = (name: string) => `${WA}?text=${encodeURIComponent(`Bonjour, je veux commander : ${name}`)}`;

function Index() {
  useReveal();
  return (
    <main className="overflow-x-hidden bg-night text-ink-foreground">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4">
        <div className="frost-card mx-auto flex max-w-6xl items-center justify-between rounded-full py-2 pl-2 pr-2 md:pl-3">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="Logo Société AMARF et Fils" className="h-11 w-11 rounded-full" width={1024} height={1024} />
            <span className="font-display text-xl font-black">
              AMARF <span className="text-primary">& FILS</span>
            </span>
          </a>
          <nav className="hidden gap-8 text-sm font-medium text-ink-foreground/80 md:flex">
            <a href="#produits" className="transition hover:text-primary">Produits</a>
            <a href="#services" className="transition hover:text-primary">Services</a>
            <a href="#commander" className="transition hover:text-primary">Commander</a>
            <a href="#contact" className="transition hover:text-primary">Contact</a>
          </nav>
          <a href={WA} className="rounded-full bg-amber-grad px-5 py-3 text-sm font-bold text-primary-foreground shadow-glow transition hover:scale-105">
            Commander
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="grain relative min-h-screen overflow-hidden bg-night">
        <div className="absolute inset-0 overflow-hidden">
          <img src={splash} alt="Bouteilles de sucreries glacées qui jaillissent de la glace" width={1600} height={1200} className="animate-zoom-slow h-full w-full object-cover object-[70%_center]" />
          <div className="absolute inset-0 bg-gradient-to-r from-night via-night/70 to-night/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-night via-transparent to-night/40" />
        </div>
        <Bubbles />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-20 pt-36">
          <p className="animate-rise mb-8 inline-flex w-fit items-center gap-3 rounded-full frost-card px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-primary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" /> Partenaire officiel SOBEBRA
          </p>
          <h1 className="animate-rise max-w-4xl text-[4.5rem] font-black leading-[0.88] tracking-tight sm:text-8xl md:text-[8.5rem]" style={{ animationDelay: ".1s" }}>
            Glacé.
            <br />
            <span className="text-outline italic">Livré.</span>
            <br />
            <span className="bg-amber-grad bg-clip-text italic text-transparent">Savouré.</span>
          </h1>
          <p className="animate-rise mt-8 max-w-md text-lg text-ink-foreground/75" style={{ animationDelay: ".25s" }}>
            Sucreries, jus et eaux minérales en gros et au détail. La fraîcheur du Bénin, directement du dépôt jusqu'à votre porte.
          </p>
          <div className="animate-rise mt-10 flex flex-wrap gap-4" style={{ animationDelay: ".35s" }}>
            <a href={WA} className="group inline-flex items-center gap-3 rounded-full bg-amber-grad px-8 py-4 font-bold text-primary-foreground shadow-glow transition hover:scale-105">
              Commander sur WhatsApp <span className="transition group-hover:translate-x-1">→</span>
            </a>
            <a href="#produits" className="rounded-full frost-card px-8 py-4 font-bold transition hover:bg-ink-foreground/10">
              Ouvrir le frigo
            </a>
          </div>
        </div>

        {/* Rotating badge */}
        <div className="absolute bottom-28 right-10 hidden h-36 w-36 md:block">
          <svg viewBox="0 0 100 100" className="animate-spin-slow h-full w-full" aria-hidden>
            <defs><path id="c" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" /></defs>
            <text className="fill-primary font-sans text-[9.5px] font-bold uppercase tracking-[0.2em]">
              <textPath href="#c">Toujours frais • 7j/7 • Prix dépôt • </textPath>
            </text>
          </svg>
          <img src={logo} alt="" className="absolute inset-0 m-auto h-16 w-16 rounded-full" width={1024} height={1024} />
        </div>
      </section>

      {/* Crossed marquees */}
      <div className="relative -my-6 py-14">
        <div className="absolute inset-x-[-5%] top-1/2 -translate-y-1/2 -rotate-3 overflow-hidden bg-amber-grad py-4 shadow-glow">
          <div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-display text-3xl font-black italic text-primary-foreground">
            {Array.from({ length: 2 }).flatMap((_, k) =>
              ["Coca-Cola", "✦", "Fanta", "✦", "Sprite", "✦", "Top Ananas", "✦", "Schweppes", "✦", "Possotomè", "✦"].map((w, i) => <span key={`${k}-${i}`}>{w}</span>),
            )}
          </div>
        </div>
        <div className="absolute inset-x-[-5%] top-1/2 -translate-y-1/2 rotate-2 overflow-hidden bg-secondary py-3 opacity-90">
          <div className="animate-marquee-rev flex w-max gap-10 whitespace-nowrap text-sm font-bold uppercase tracking-[0.3em] text-secondary-foreground">
            {Array.from({ length: 2 }).flatMap((_, k) =>
              ["Livraison rapide", "•", "Vente en gros", "•", "Événements", "•", "Toujours frais", "•", "Prix justes", "•"].map((w, i) => <span key={`${k}-${i}`}>{w}</span>),
            )}
          </div>
        </div>
      </div>

      {/* Stats */}
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-24 md:grid-cols-3">
        {[["100%", "Produits authentiques SOBEBRA"], ["7j/7", "Ouvert pour vous servir"], ["24h", "Livraison de vos commandes"]].map(([n, l], i) => (
          <div key={l} className="reveal frost-card rounded-3xl p-8" style={{ transitionDelay: `${i * 0.12}s` }}>
            <div className="bg-amber-grad bg-clip-text font-display text-7xl font-black text-transparent">{n}</div>
            <div className="mt-3 text-ink-foreground/70">{l}</div>
          </div>
        ))}
      </section>

      {/* Produits — le frigo */}
      <section id="produits" className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">Le frigo AMARF</p>
              <h2 className="mt-4 max-w-2xl text-5xl font-black leading-none md:text-7xl">
                Choisissez. <span className="text-outline italic">On livre.</span>
              </h2>
            </div>
            <p className="max-w-sm text-ink-foreground/60">Choisissez une bouteille et commandez-la en un clic sur WhatsApp.</p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-6 lg:grid-cols-4">
            {products.map((p, i) => (
              <Tilt
                key={p.name}
                className={`reveal group relative overflow-hidden rounded-3xl frost-card p-4 sm:rounded-[2rem] sm:p-6 ${i % 2 ? "lg:translate-y-10" : ""}`}
                style={{ "--tone": `var(--tone-${p.tone})`, transitionDelay: `${(i % 4) * 0.1}s` } as CSSProperties}
              >
                <div className="absolute -inset-10 opacity-40 blur-3xl transition duration-700 group-hover:opacity-80" style={{ background: "radial-gradient(circle at 50% 35%, var(--tone), transparent 60%)" }} />
                <div className="relative flex items-center justify-between text-xs font-bold uppercase tracking-widest">
                  <span className="text-primary">{p.cat}</span>
                  <span className="text-ink-foreground/40">0{i + 1}</span>
                </div>
                <div className="relative my-3 flex aspect-square sm:my-6 items-center justify-center">
                  <div className="absolute h-3/4 w-3/4 rounded-full border border-ink-foreground/15" />
                  <img src={p.img} alt={p.name} width={816} height={816} loading="lazy" className="animate-floaty relative h-full w-full rounded-3xl object-contain transition duration-700 group-hover:scale-110 group-hover:-rotate-6" style={{ animationDelay: `${i * 0.4}s` }} />
                </div>
                <h3 className="relative text-lg font-black leading-tight sm:text-2xl">{p.name}</h3>
                <p className="relative mt-1 hidden text-sm text-ink-foreground/60 sm:block">{p.note}</p>
                <a href={orderLink(p.name)} className="relative mt-4 flex items-center justify-between rounded-full bg-ink-foreground/10 py-1.5 pl-3 pr-1.5 text-xs sm:mt-5 sm:py-2 sm:pl-5 sm:pr-2 sm:text-sm font-bold transition group-hover:bg-amber-grad group-hover:text-primary-foreground">
                  Commander
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary sm:h-8 sm:w-8 text-primary-foreground">→</span>
                </a>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      {/* Services — bento */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-28">
        <div className="reveal max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">Pourquoi nous choisir</p>
          <h2 className="mt-4 text-5xl font-black leading-none md:text-7xl">Un partenaire de confiance, près de chez vous.</h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3 md:grid-rows-2">
          <div className="reveal relative overflow-hidden rounded-[2rem] md:col-span-2 md:row-span-2">
            <img src={splash} alt="" width={1600} height={1200} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-[1.5s] hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-transparent" />
            <div className="relative flex min-h-[360px] flex-col justify-end p-7 sm:min-h-[420px] sm:p-10">
              <span className="font-display text-8xl font-black text-primary">01</span>
              <h3 className="mt-2 text-4xl font-black">{services[0]?.t}</h3>
              <p className="mt-3 max-w-md text-ink-foreground/75">{services[0]?.d}</p>
            </div>
          </div>
          {services.slice(1).map((s, i) => (
            <div key={s.t} className={`reveal rounded-[2rem] p-8 ${i === 0 ? "bg-amber-grad text-primary-foreground" : "frost-card"} ${i === 2 ? "md:col-span-3" : ""}`} style={{ transitionDelay: `${i * 0.1}s` }}>
              <span className={`font-display text-5xl font-black ${i === 0 ? "text-primary-foreground/40" : "text-primary"}`}>0{i + 2}</span>
              <h3 className="mt-4 text-2xl font-black">{s.t}</h3>
              <p className={`mt-2 text-sm ${i === 0 ? "text-primary-foreground/80" : "text-ink-foreground/65"}`}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Commander en 3 étapes */}
      <section id="commander" className="grain relative overflow-hidden bg-secondary py-28 text-secondary-foreground">
        <Bubbles />
        <div className="relative mx-auto max-w-7xl px-6">
          <p className="reveal text-sm font-bold uppercase tracking-[0.25em] text-primary">Commander en 3 étapes</p>
          <h2 className="reveal mt-4 max-w-3xl text-5xl font-black leading-none md:text-7xl">Simple, rapide, et livré chez vous.</h2>
          <div className="relative mt-16 grid gap-10 md:grid-cols-3">
            <div aria-hidden className="absolute left-0 right-0 top-8 hidden h-px border-t-2 border-dashed border-primary/50 md:block" />
            {[
              { n: "1", t: "Vous nous écrivez", d: "Un message WhatsApp ou un appel, et on vous répond tout de suite." },
              { n: "2", t: "On confirme ensemble", d: "Les quantités, le prix dépôt et l'heure de livraison, sans surprise." },
              { n: "3", t: "On livre à l'heure", d: "Vos casiers arrivent frais, où que vous soyez, 7 jours sur 7." },
            ].map((s, i) => (
              <div key={s.n} className="reveal relative" style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-grad font-display text-3xl font-black text-primary-foreground shadow-glow">{s.n}</div>
                <h3 className="mt-6 text-3xl font-black">{s.t}</h3>
                <p className="mt-3 text-secondary-foreground/75">{s.d}</p>
              </div>
            ))}
          </div>
          <a href={WA} className="reveal mt-14 inline-flex items-center gap-3 rounded-full bg-amber-grad px-8 py-4 font-bold text-primary-foreground shadow-glow transition hover:scale-105">
            Commander maintenant sur WhatsApp →
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-28">
        <div className="reveal grain relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-amber-grad p-10 text-primary-foreground md:p-16">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full border-[40px] border-primary-foreground/10" />
          <div className="relative grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-5xl font-black leading-[0.9] md:text-8xl">
                Soif ?<br />
                <span className="italic">Appelez.</span>
              </h2>
              <a href="tel:+2290151749505" className="mt-8 block font-display text-2xl font-black underline sm:text-3xl decoration-4 underline-offset-8 md:text-4xl">
                {PHONE}
              </a>
            </div>
            <div className="space-y-5 rounded-[2rem] bg-night p-8 text-ink-foreground shadow-glow">
              {[
                ["Adresse", "Aita, après l'Université de Sakété, Bénin"],
                ["Horaires", "Lundi – Dimanche, 7h – 22h"],
                ["WhatsApp", PHONE],
              ].map(([k, v]) => (
                <div key={k} className="border-b border-ink-foreground/10 pb-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">{k}</p>
                  <p className="mt-1 text-lg">{v}</p>
                </div>
              ))}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a href={WA} className="rounded-full bg-amber-grad py-4 text-center font-bold text-primary-foreground transition hover:scale-[1.03]">WhatsApp</a>
                <a href="tel:+2290151749505" className="rounded-full border border-primary py-4 text-center font-bold text-primary transition hover:scale-[1.03]">Appeler</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left border-t border-ink-foreground/10 px-6 py-10 text-sm text-ink-foreground/50">
        <span className="font-display text-2xl font-black text-ink-foreground">AMARF <span className="text-primary">& FILS</span></span>
        <span>© {new Date().getFullYear()} Société AMARF ET FILS · Partenaire SOBEBRA</span>
      </footer>

      {/* Bouton WhatsApp flottant */}
      <a
        href={WA}
        aria-label="Commander sur WhatsApp"
        className="animate-pulse-ring fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-amber-grad text-primary-foreground shadow-glow transition hover:scale-110"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8" aria-hidden>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </main>
  );
}
