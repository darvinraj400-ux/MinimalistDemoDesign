import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import { Reveal } from "../components/Reveal";
import { IMG } from "../data/projects";

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative">
          <div className="container-studio">
            <div className="pt-24 md:pt-32 pb-8 md:pb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <p className="type-caption text-[var(--color-muted)] mb-4 md:mb-6">
                  Architecture Studio — Est. 2018
                </p>
                <h1 className="type-display mb-6 md:mb-8">
                  Spaces shaped<br />
                  by restraint
                </h1>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="type-body text-[var(--color-muted)] max-w-lg"
              >
                FORM / FIELD designs residential spaces and adaptive reuse projects 
                that honor material, context, and the quiet dignity of everyday life.
              </motion.p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="container-studio">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative"
            >
              <div className="aspect-architectural md:aspect-[2.4/1] overflow-hidden bg-[var(--color-subtle)] relative">
                <img
                  src={IMG.hero}
                  alt="Architectural composition — concrete form against sky"
                  className="w-full h-full object-cover"
                  loading="eager"
                  onLoad={(e) => e.currentTarget.classList.add("loaded")}
                />
                {/* Subtle grid overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.06]"
                  style={{
                    backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
                    backgroundSize: '8.333% 100%'
                  }}
                />
              </div>
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                <p className="type-caption text-white/80 bg-black/40 backdrop-blur-sm px-3 py-1.5">
                  House of Light — Kyoto, 2024
                </p>
              </div>
              {/* Corner markers */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-white/20" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-white/20" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-white/20" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-white/20" />
            </motion.div>
          </div>
        </section>

        {/* Selected Works */}
        <section className="py-16 md:py-28">
          <div className="container-studio">
            <div className="flex items-end justify-between mb-10 md:mb-16">
              <Reveal>
                <h2 className="type-heading">Selected Works</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <Link
                  to="/projects"
                  className="type-meta text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors touch-target"
                >
                  View all →
                </Link>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">
              {/* Project 1 — Large */}
              <Reveal className="md:col-span-7">
                <Link to="/projects/house-of-light" className="group block">
                  <div className="aspect-architectural overflow-hidden bg-[var(--color-subtle)] mb-4">
                    <img
                      src="/images/project-1-hero.jpg"
                      alt="House of Light"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <h3 className="type-heading group-hover:text-[var(--color-muted)] transition-colors">House of Light</h3>
                      <p className="type-meta text-[var(--color-muted)] mt-1">Kyoto, Japan — 2024</p>
                    </div>
                    <span className="type-caption text-[var(--color-muted)]">Residential</span>
                  </div>
                </Link>
              </Reveal>

              {/* Project 2 — Small */}
              <Reveal delay={0.15} className="md:col-span-5">
                <Link to="/projects/grain-silo-conversion" className="group block">
                  <div className="aspect-portrait overflow-hidden bg-[var(--color-subtle)] mb-4">
                    <img
                      src="/images/project-2-hero.jpg"
                      alt="Grain Silo Conversion"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <h3 className="type-heading group-hover:text-[var(--color-muted)] transition-colors">Grain Silo Conversion</h3>
                      <p className="type-meta text-[var(--color-muted)] mt-1">Rotterdam — 2024</p>
                    </div>
                    <span className="type-caption text-[var(--color-muted)]">Adaptive Reuse</span>
                  </div>
                </Link>
              </Reveal>

              {/* Project 3 */}
              <Reveal className="md:col-span-5 md:col-start-2">
                <Link to="/projects/field-house" className="group block">
                  <div className="aspect-architectural overflow-hidden bg-[var(--color-subtle)] mb-4">
                    <img
                      src="/images/project-3-hero.jpg"
                      alt="Field House"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <h3 className="type-heading group-hover:text-[var(--color-muted)] transition-colors">Field House</h3>
                      <p className="type-meta text-[var(--color-muted)] mt-1">Somerset, England — 2023</p>
                    </div>
                    <span className="type-caption text-[var(--color-muted)]">Residential</span>
                  </div>
                </Link>
              </Reveal>

              {/* Project 4 */}
              <Reveal delay={0.1} className="md:col-span-5 md:col-start-8">
                <Link to="/projects/warehouse-no-7" className="group block">
                  <div className="aspect-architectural overflow-hidden bg-[var(--color-subtle)] mb-4">
                    <img
                      src="/images/project-4-hero.jpg"
                      alt="Warehouse No. 7"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <h3 className="type-heading group-hover:text-[var(--color-muted)] transition-colors">Warehouse No. 7</h3>
                      <p className="type-meta text-[var(--color-muted)] mt-1">Berlin — 2023</p>
                    </div>
                    <span className="type-caption text-[var(--color-muted)]">Adaptive Reuse</span>
                  </div>
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Philosophy Statement */}
        <section className="border-t border-[var(--color-rule)]">
          <div className="container-studio py-16 md:py-28">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-3">
                <Reveal>
                  <p className="type-caption text-[var(--color-muted)]">Philosophy</p>
                </Reveal>
              </div>
              <div className="md:col-span-8 md:col-start-5">
                <Reveal delay={0.1}>
                  <p className="type-display text-[var(--color-muted)] leading-tight">
                    We believe architecture should disappear into use — 
                    that the best spaces are those you stop noticing 
                    because they fit so precisely.
                  </p>
                </Reveal>
                <Reveal delay={0.2}>
                  <Link
                    to="/studio"
                    className="inline-block mt-8 type-meta text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors touch-target"
                  >
                    About the studio →
                  </Link>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Index Numbers */}
        <section className="border-t border-[var(--color-rule)]">
          <div className="container-studio py-12 md:py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <Reveal>
                <div>
                  <p className="type-display text-[var(--color-muted)]">24</p>
                  <p className="type-caption text-[var(--color-muted)] mt-2">Projects completed</p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div>
                  <p className="type-display text-[var(--color-muted)]">6</p>
                  <p className="type-caption text-[var(--color-muted)] mt-2">Countries</p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div>
                  <p className="type-display text-[var(--color-muted)]">2018</p>
                  <p className="type-caption text-[var(--color-muted)] mt-2">Founded</p>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div>
                  <p className="type-display text-[var(--color-muted)]">11</p>
                  <p className="type-caption text-[var(--color-muted)] mt-2">Team members</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
