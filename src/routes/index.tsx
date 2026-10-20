import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Phone, MapPin, ShieldCheck, Sparkles, Wrench, Droplets, Sun, Award, Truck } from "lucide-react";
const video = { url: "assets/hero.mp4" };
const p001 = { url: "assets/p001.webp" };
const p002 = { url: "assets/p002.webp" };
const p005 = { url: "assets/p005.webp" };
const p006 = { url: "assets/p006.webp" };
const p007 = { url: "assets/p007.webp" };
const p008 = { url: "assets/p008.webp" };
const p010 = { url: "assets/p010.webp" };
const p011 = { url: "assets/p011.webp" };

const WA = "https://wa.me/5519989737720?text=Ol%C3%A1!%20Quero%20um%20or%C3%A7amento.";
const ADDRESS = "Rod. Jorn. Francisco Aguirre Proença, km 15,5 - Rezende, Monte Mor - SP, 13197-000";
const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed&z=16`;
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hijau Piscinas e Acessórios | Construção, Reforma e Produtos" },
      { name: "description", content: "Piscinas de vinil, fibra e alvenaria, capas térmicas, cercas de proteção e acessórios. Orçamento rápido pelo WhatsApp." },
      { property: "og:title", content: "Hijau Piscinas e Acessórios" },
      { property: "og:description", content: "Construção, reforma e acessórios para piscinas. Peça seu orçamento pelo WhatsApp." },
    ],
  }),
  component: Index,
});

const services = [
  { img: p011.url, t: "Piscinas de Fibra", d: "Instalação completa, rápida e com acabamento impecável." },
  { img: p001.url, t: "Vinil e Alvenaria", d: "Construção e troca de bolsões de vinil sob medida." },
  { img: p008.url, t: "Capa Térmica", d: "Água aquecida por mais tempo e menos evaporação." },
  { img: p007.url, t: "Cerca de Vidro", d: "Segurança para crianças e pets com elegância." },
  { img: p010.url, t: "Cerca Removível", d: "Proteção em tela resistente, fácil de montar." },
  { img: p005.url, t: "Projetos e Iluminação", d: "LED, hidromassagem e projetos modernos." },
];

const reasons = [
  { i: Award, t: "Experiência comprovada", d: "Dezenas de obras entregues na região." },
  { i: Sparkles, t: "Produtos de qualidade", d: "Marcas confiáveis e garantia." },
  { i: Wrench, t: "Atendimento completo", d: "Do projeto à manutenção." },
  { i: Droplets, t: "Tratamento de água", d: "Químicos e orientação certa." },
  { i: ShieldCheck, t: "Segurança", d: "Cercas e capas de proteção." },
  { i: Truck, t: "Entregas", d: "Levamos até você." },
];

function Index() {
  return (
    <div className="font-sans text-foreground">
      {/* Top bar */}
      <div className="bg-deep text-deep-foreground text-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
          <span className="flex items-center gap-2"><Truck className="h-4 w-4" /> Fazemos entregas</span>
          <a href={WA} className="flex items-center gap-2 font-bold"><MessageCircle className="h-4 w-4" /> (19) 98973-7720</a>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#" className="font-display text-2xl font-extrabold text-primary">Hijau<span className="text-deep"> Piscinas</span></a>
          <nav className="hidden gap-8 font-bold md:flex">
            <a href="#servicos" className="hover:text-primary">Serviços</a>
            <a href="#sobre" className="hover:text-primary">Sobre</a>
            <a href="#galeria" className="hover:text-primary">Obras</a>
            <a href="#localizacao" className="hover:text-primary">Localização</a>
            <a href="#contato" className="hover:text-primary">Contato</a>
          </nav>
          <a href={WA} className="btn-sun text-sm">Orçamento</a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden">
        <video src={video.url} autoPlay muted loop playsInline poster={p006.url} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-deep/60" />
        <div className="relative mx-auto max-w-4xl px-4 text-center text-deep-foreground">
          <p className="mb-4 inline-block rounded-full bg-primary/80 px-4 py-1 text-sm font-bold">Piscinas e Acessórios</p>
          <h1 className="font-display text-4xl font-extrabold leading-tight md:text-6xl">
            A piscina dos seus sonhos, <span className="text-sun">feita do jeito certo</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg opacity-90">Construção, reforma, capas, cercas de proteção e tudo para manter sua água cristalina.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={WA} className="btn-sun">Fale agora conosco</a>
            <a href="#servicos" className="rounded-full border-2 border-deep-foreground px-7 py-3 font-bold hover:bg-deep-foreground hover:text-deep">Conhecer mais</a>
          </div>
        </div>
      </section>

      {/* Quick cards */}
      <section className="relative z-10 mx-auto -mt-16 grid max-w-6xl grid-cols-2 gap-4 px-4 md:grid-cols-4">
        {[["Piscinas de Fibra", Droplets], ["Troca de Vinil", Wrench], ["Capa Térmica", Sun], ["Cercas de Proteção", ShieldCheck]].map(([t, I]: any) => (
          <div key={t} className="rounded-2xl bg-card p-6 text-center shadow-soft">
            <I className="mx-auto h-8 w-8 text-primary" />
            <p className="mt-3 font-display font-extrabold">{t}</p>
          </div>
        ))}
      </section>

      {/* About */}
      <section id="sobre" className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 md:grid-cols-2">
        <img src={p002.url} alt="Fachada da loja Hijau Piscinas" className="h-full max-h-[460px] w-full rounded-3xl object-cover shadow-soft" />
        <div>
          <p className="font-bold text-sun">Quem somos</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold md:text-4xl">Hijau Piscinas: especialistas em lazer e água limpa</h2>
          <p className="mt-5 text-muted-foreground">Somos uma loja completa de piscinas e acessórios. Construímos, reformamos e cuidamos da sua piscina com produtos de qualidade e um atendimento próximo, do primeiro contato até a manutenção.</p>
          <p className="mt-3 text-muted-foreground">Trabalhamos com piscinas de fibra, vinil e alvenaria, capas térmicas e de proteção, cercas de vidro e removíveis, iluminação e produtos para tratamento de água.</p>
          <a href={WA} className="btn-sun mt-8 inline-block">Peça seu orçamento</a>
        </div>
      </section>

      {/* Numbers */}
      <section className="bg-water text-primary-foreground">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-14 text-center md:grid-cols-4">
          {[["+10", "Anos de experiência"], ["+500", "Clientes atendidos"], ["+200", "Piscinas entregues"], ["100%", "Compromisso"]].map(([n, l]) => (
            <div key={l}><p className="font-display text-4xl font-extrabold">{n}</p><p className="mt-1 text-sm opacity-90">{l}</p></div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="mx-auto max-w-6xl px-4 py-24">
        <div className="text-center">
          <p className="font-bold text-sun">Nossos serviços</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold md:text-4xl">Tudo para a sua piscina</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.t} className="group overflow-hidden rounded-3xl bg-card shadow-soft">
              <div className="h-56 overflow-hidden"><img src={s.img} alt={s.t} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" /></div>
              <div className="p-6">
                <h3 className="font-display text-xl font-extrabold text-primary">{s.t}</h3>
                <p className="mt-2 text-muted-foreground">{s.d}</p>
                <a href={WA} className="mt-4 inline-block font-bold text-sun">Fale agora conosco →</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why */}
      <section className="bg-deep text-deep-foreground">
        <div className="mx-auto max-w-6xl px-4 py-24">
          <h2 className="text-center font-display text-3xl font-extrabold md:text-4xl">Por que nos escolher?</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map(({ i: I, t, d }) => (
              <div key={t} className="rounded-2xl bg-deep-foreground/10 p-6 transition hover:bg-deep-foreground/15">
                <I className="h-8 w-8 text-sun" />
                <h3 className="mt-4 font-display text-lg font-extrabold">{t}</h3>
                <p className="mt-1 opacity-80">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="galeria" className="mx-auto max-w-6xl px-4 py-24">
        <h2 className="text-center font-display text-3xl font-extrabold md:text-4xl">Nossas obras</h2>
        <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4">
          {[p006, p005, p001, p007, p011, p010, p008].map((p, k) => (
            <img key={k} src={p.url} alt="Piscina feita pela Hijau" loading="lazy" className={`h-full w-full rounded-2xl object-cover ${k === 0 ? "col-span-2 row-span-2" : ""}`} />
          ))}
        </div>
      </section>

      {/* Location */}
      <section id="localizacao" className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-24 md:grid-cols-2">
        <div>
          <p className="font-bold text-sun">Onde estamos</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold md:text-4xl">Venha nos visitar</h2>
          <p className="mt-5 flex items-start gap-2 text-muted-foreground"><MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" /> {ADDRESS}</p>
          <p className="mt-3 text-muted-foreground">Estamos na Rodovia Jorn. Francisco Aguirre Proença, fácil de chegar de Monte Mor e região.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={WA} className="btn-sun inline-flex items-center gap-2"><MessageCircle className="h-5 w-5" /> Falar no WhatsApp</a>
            <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="rounded-full border-2 border-primary px-7 py-3 font-bold text-primary transition hover:bg-primary hover:text-primary-foreground">Como chegar</a>
          </div>
        </div>
        <iframe
          src={MAP_EMBED}
          title="Localização da Hijau Piscinas"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[380px] w-full rounded-3xl border-0 shadow-soft md:h-[440px]"
        />
      </section>

      {/* CTA */}
      <section id="contato" className="relative overflow-hidden">
        <img src={p006.url} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative mx-auto max-w-3xl px-4 py-24 text-center text-primary-foreground">
          <h2 className="font-display text-3xl font-extrabold md:text-5xl">Vamos tirar sua piscina do papel?</h2>
          <p className="mt-4 text-lg">Chame no WhatsApp e receba seu orçamento sem compromisso.</p>
          <a href={WA} className="btn-sun mt-8 inline-flex items-center gap-2 text-lg"><MessageCircle className="h-5 w-5" /> (19) 98973-7720</a>
        </div>
      </section>

      <footer className="bg-deep text-deep-foreground">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
          <div><p className="font-display text-2xl font-extrabold">Hijau Piscinas</p><p className="mt-2 opacity-80">Piscinas e acessórios com qualidade e confiança.</p></div>
          <div className="space-y-2"><p className="flex items-center gap-2"><Phone className="h-4 w-4" /> (19) 98973-7720</p><a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 opacity-80 hover:opacity-100"><MapPin className="mt-1 h-4 w-4 shrink-0" /> {ADDRESS}</a></div>
          <div className="opacity-70 md:text-right">© {new Date().getFullYear()} Hijau Piscinas e Acessórios</div>
        </div>
      </footer>

      <a href={WA} aria-label="WhatsApp" className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-sun text-sun-foreground shadow-soft transition hover:scale-110">
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
