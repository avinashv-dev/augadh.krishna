import { createFileRoute } from "@tanstack/react-router";

import S001 from "@/assets/S001.png";
import S002 from "@/assets/S002.png";
import S003 from "@/assets/S003.png";
import S_002 from "@/assets/S_002.png";
import S_004 from "@/assets/S_004.png";
import S_008 from "@/assets/S_008.png";
import B001 from "@/assets/B001.png";
import B002 from "@/assets/B002.png";
import B004 from "@/assets/B004.png";
import B005 from "@/assets/B005.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Augadh Krishna Sumesh — Child Model & Dancer, Ontario" },
      {
        name: "description",
        content:
          "Portfolio of Augadh Krishna Sumesh, a 10-year-old Ontario-based child model and dancer trained in hip-hop, Kalaripayattu and Karate.",
      },
      { property: "og:title", content: "Augadh Krishna Sumesh — Child Model & Dancer" },
      {
        property: "og:description",
        content:
          "Child model and passionate dancer showcasing confidence, discipline and creativity through fashion and performance.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const skills = [
  { title: "Modeling", detail: "Fashion, commercial & lifestyle campaigns" },
  { title: "Dance", detail: "Hip-Hop · Freestyle · Contemporary performance" },
  { title: "Martial Arts", detail: "Kalaripayattu & Karate" },
  { title: "Swimming", detail: "Certified swimmer with a strong athletic foundation" },
  { title: "Languages", detail: "English · French" },
];

const gallery = [
  { src: S_004, alt: "Augadh in a blue co-ord set, hand on hip", span: "md:row-span-2" },
  { src: B001, alt: "Augadh seated on a wooden chair in a blue tee", span: "" },
  { src: S002, alt: "Augadh sitting cross-legged in a teal tee", span: "" },
  { src: B005, alt: "Augadh standing in navy tee and printed joggers", span: "md:row-span-2" },
  { src: S001, alt: "Side profile of Augadh in teal tee and navy joggers", span: "" },
  { src: B004, alt: "Augadh posing on a chair with one leg raised", span: "" },
  { src: S003, alt: "Augadh seated on a wooden chair, teal tee", span: "" },
  { src: S_002, alt: "Augadh crouching in a blue co-ord set", span: "" },
  { src: B002, alt: "Augadh with arms crossed wearing a cap", span: "" },
];

function BentoCard({
  children,
  className = "",
  gradient = false,
}: {
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/10 p-6 transition-transform duration-300 hover:-translate-y-1 ${
        gradient ? "bg-gradient-to-br from-[#163a5a] to-[#0c2340]" : "bg-card"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* HERO BENTO */}
      <section className="mx-auto max-w-7xl px-4 pt-8 pb-12 md:px-6 md:pt-12 md:pb-16">
        <div className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Name card */}
          <BentoCard className="flex flex-col justify-between md:col-span-2 lg:row-span-2" gradient>
            <p className="label-kicker">Ontario · Canada</p>
            <div>
              <h1 className="text-[clamp(3.5rem,12vw,9rem)]">
                Augadh
                <br />
                <span className="text-ocean">Krishna</span>
                <br />
                Sumesh
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                Child model and passionate dancer showcasing confidence, discipline, and creativity
                through fashion and performance.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#reels"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide text-primary-foreground transition-transform hover:scale-105"
                  style={{ background: "var(--gradient-ocean)" }}
                >
                  Watch him dance
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold tracking-wide text-foreground transition-colors hover:bg-white/5"
                >
                  View portfolio
                </a>
              </div>
            </div>
          </BentoCard>

          {/* Hero portrait */}
          <BentoCard className="relative p-0 md:col-span-2 lg:row-span-2">
            <div
              className="absolute inset-0 -z-10 opacity-40"
              style={{ background: "var(--gradient-ocean)" }}
            />
            <img
              src={S_008}
              alt="Portrait of Augadh Krishna Sumesh in a blue shirt"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </BentoCard>

          {/* Stats card */}
          <BentoCard className="flex flex-col justify-center p-6">
            <p className="label-kicker">Age</p>
            <p className="mt-2 text-6xl text-ocean md:text-7xl">10</p>
            <p className="mt-1 text-sm text-muted-foreground">years old</p>
          </BentoCard>

          {/* Location card */}
          <BentoCard className="flex flex-col justify-center p-6">
            <p className="label-kicker">Base</p>
            <p className="mt-2 text-3xl font-display uppercase tracking-wide">Ontario</p>
            <p className="mt-1 text-sm text-muted-foreground">Canada</p>
          </BentoCard>

          {/* Profile intro card */}
          <BentoCard className="flex flex-col justify-center md:col-span-2">
            <p className="label-kicker">02 — Profile</p>
            <h2 className="mt-3 text-3xl md:text-4xl">A young performer shaped by movement</h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Based in Ontario, Augadh is a 10-year-old model and performer with a strong foundation
              in dance, movement, and athletic discipline. Trained in hip-hop, with performance
              experience in freestyle and contemporary dance, he brings confidence, versatility, and
              a natural stage presence to every project.
            </p>
          </BentoCard>

          {/* Focus card */}
          <BentoCard className="flex flex-col justify-center p-6">
            <p className="label-kicker">Focus</p>
            <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">
              Fashion · Commercial · Dance productions · Creative content
            </p>
          </BentoCard>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-y border-white/10 bg-[#122f4a]/50 py-4">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex gap-10 font-display text-2xl uppercase tracking-widest text-foreground/90">
              {["Hip-Hop", "Freestyle", "Contemporary", "Kalaripayattu", "Karate", "Swimming", "Fashion", "Commercial"].map(
                (w) => (
                  <span key={w} className="flex items-center gap-10">
                    {w}
                    <span className="text-[#5cbdb9]">◆</span>
                  </span>
                ),
              )}
            </span>
          ))}
        </div>
      </div>

      {/* SKILLS BENTO */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <p className="label-kicker">03 — Skills</p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {skills.map((s) => (
            <BentoCard key={s.title} className="flex flex-col justify-between">
              <h3 className="text-3xl">{s.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
            </BentoCard>
          ))}
        </div>
      </section>

      {/* REELS BENTO */}
      <section id="reels" className="border-y border-white/10 bg-[#122f4a]/30">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
          <p className="label-kicker">04 — In motion</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Dancing reels</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <BentoCard className="p-0 md:col-span-2">
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/YHzpU1P7Dsc"
                  title="Augadh Krishna Sumesh dance performance"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </BentoCard>
            <BentoCard className="p-0">
              <div className="mx-auto aspect-[9/16] w-full max-w-xs md:max-w-none">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/TCLxg2_R3XU"
                  title="Augadh Krishna Sumesh dance short"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* PORTFOLIO BENTO */}
      <section id="portfolio" className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <p className="label-kicker">05 — Portfolio</p>
        <h2 className="mt-3 text-3xl md:text-4xl">Selected frames</h2>
        <div className="mt-6 grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4">
          {gallery.map((g) => (
            <figure
              key={g.src}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-card ${g.span}`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </section>

      {/* CONTACT BENTO */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <BentoCard className="md:col-span-2" gradient>
              <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
                <div>
                  <p className="label-kicker">06 — Bookings</p>
                  <h2 className="mt-4 text-[clamp(2.5rem,8vw,5rem)]">
                    Available for <span className="text-ocean">freelance</span>
                  </h2>
                </div>
                <p className="text-sm text-muted-foreground">
                  Ontario · Canada
                  <br />
                  Fashion · Commercial · Dance productions
                </p>
              </div>
            </BentoCard>
          </div>
        </div>
      </footer>
    </main>
  );
}
