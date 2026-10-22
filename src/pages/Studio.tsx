import PageTransition from "../components/PageTransition";
import { Reveal, Stagger, StaggerItem } from "../components/Reveal";
import { IMG } from "../data/projects";

const team = [
  { name: "Elena Voss", role: "Founding Director", background: "AA London, ETH Zürich" },
  { name: "Takeshi Mori", role: "Design Director", background: "University of Tokyo, Bartlett" },
  { name: "Clara Engström", role: "Senior Architect", background: "KTH Stockholm, EPFL" },
  { name: "Marcus Webb", role: "Project Architect", background: "Cambridge, TU Delft" },
  { name: "Yuki Tanaka", role: "Architect", background: "Waseda University" },
  { name: "Sofia Andersson", role: "Architect", background: "Chalmers, AA London" },
  { name: "James Chen", role: "Technical Director", background: "Bath, Arup Associates" },
  { name: "Anna Kowalski", role: "Interior Architect", background: "RCA London" },
  { name: "David Osei", role: "Graduate Architect", background: "Cambridge" },
  { name: "Lina Berger", role: "Graduate Architect", background: "TU Berlin" },
  { name: "Ravi Patel", role: "Studio Manager", background: "RIBA, UCL" },
];

const process = [
  {
    step: "01",
    title: "Listening",
    description: "Every project begins with conversation. We spend time understanding how you live, what matters to you, and what the site already knows. This phase has no deliverables — only understanding."
  },
  {
    step: "02",
    title: "Thinking",
    description: "We develop spatial strategies through drawings, models, and writing. Multiple directions are explored simultaneously. The brief is tested, refined, and sometimes fundamentally reimagined."
  },
  {
    step: "03",
    title: "Making",
    description: "Design develops through physical and digital making. We build at every scale — from detail models to full-size prototypes. Materials are tested, joints resolved, light studied."
  },
  {
    step: "04",
    title: "Realising",
    description: "Construction is treated as a continuation of design, not its execution. We maintain close involvement on site, working with builders to ensure the quality of intention carries through to the quality of making."
  },
];

export default function Studio() {
  return (
    <PageTransition>
      <main className="min-h-screen pt-24 md:pt-32">
        <div className="container-studio">
          {/* Header */}
          <div className="mb-16 md:mb-24">
            <Reveal>
              <p className="type-caption text-[var(--color-muted)] mb-3">The Studio</p>
              <h1 className="type-display mb-6">
                We practice architecture<br />
                as an act of attention
              </h1>
            </Reveal>
          </div>

          {/* Philosophy */}
          <section className="border-t border-[var(--color-rule)] py-12 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">
              <div className="md:col-span-3">
                <Reveal>
                  <p className="type-caption text-[var(--color-muted)]">Philosophy</p>
                </Reveal>
              </div>
              <div className="md:col-span-7 md:col-start-5">
                <Reveal delay={0.1}>
                  <div className="type-body space-y-6">
                    <p>
                      FORM / FIELD was founded in 2018 on the conviction that architecture's 
                      highest purpose is to make life more livable — not through spectacle, 
                      but through precision, care, and a deep respect for context.
                    </p>
                    <p>
                      We work primarily in residential architecture and adaptive reuse, 
                      drawn to projects that require us to listen carefully — to clients, 
                      to places, to existing buildings that carry memory and meaning.
                    </p>
                    <p>
                      Our work is characterized by material honesty, spatial generosity, 
                      and an attention to light and atmosphere that we believe transforms 
                      the ordinary into the considered.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* Studio Image */}
          <section className="py-8 md:py-12">
            <Reveal>
              <div className="aspect-architectural md:aspect-[2.4/1] overflow-hidden bg-[var(--color-subtle)]">
                <img
                  src={IMG.studio}
                  alt="FORM / FIELD studio interior — work tables and architectural drawings"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="type-meta text-[var(--color-muted)] mt-3">
                Studio, Redchurch Street, London
              </p>
            </Reveal>
          </section>

          {/* Working Process */}
          <section className="border-t border-[var(--color-rule)] py-12 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 mb-12">
              <div className="md:col-span-3">
                <Reveal>
                  <p className="type-caption text-[var(--color-muted)]">Process</p>
                </Reveal>
              </div>
              <div className="md:col-span-7 md:col-start-5">
                <Reveal delay={0.1}>
                  <p className="type-body text-[var(--color-muted)]">
                    Our process is non-linear but principled. Each project follows its own 
                    logic, but we maintain four constants throughout.
                  </p>
                </Reveal>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {process.map((item, i) => (
                <Reveal key={item.step} delay={i * 0.1} className="border-t border-[var(--color-rule)] md:odd:border-r md:odd:pr-8 md:even:pl-8 py-8 md:py-10">
                  <div className="flex gap-6">
                    <span className="type-display text-[var(--color-rule)] shrink-0">{item.step}</span>
                    <div>
                      <h3 className="type-heading mb-3">{item.title}</h3>
                      <p className="type-body text-[var(--color-muted)]">{item.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Team */}
          <section className="border-t border-[var(--color-rule)] py-12 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 mb-12">
              <div className="md:col-span-3">
                <Reveal>
                  <p className="type-caption text-[var(--color-muted)]">Team</p>
                </Reveal>
              </div>
              <div className="md:col-span-7 md:col-start-5">
                <Reveal delay={0.1}>
                  <p className="type-body text-[var(--color-muted)]">
                    Eleven people, drawn from six countries, united by a shared 
                    commitment to thoughtful making.
                  </p>
                </Reveal>
              </div>
            </div>

            <Stagger>
              <div className="border-t border-[var(--color-rule)]">
                {team.map((member) => (
                  <StaggerItem key={member.name}>
                    <div className="border-b border-[var(--color-rule)] py-4 md:py-5 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-baseline">
                      <p className="type-meta md:col-span-4">{member.name}</p>
                      <p className="type-meta text-[var(--color-muted)] md:col-span-3">{member.role}</p>
                      <p className="type-meta text-[var(--color-muted)] md:col-span-4 md:col-start-9">{member.background}</p>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </Stagger>
          </section>

          {/* Recognition */}
          <section className="border-t border-[var(--color-rule)] py-12 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">
              <div className="md:col-span-3">
                <Reveal>
                  <p className="type-caption text-[var(--color-muted)]">Recognition</p>
                </Reveal>
              </div>
              <div className="md:col-span-7 md:col-start-5">
                <Stagger>
                  <ul className="space-y-4">
                    {[
                      { award: "RIBA National Award", year: "2024", project: "House of Light" },
                      { award: "Dezeen Awards — House of the Year", year: "2024", project: "House of Light" },
                      { award: "AJ Small Projects — Shortlist", year: "2023", project: "Signal Station" },
                      { award: "RIBA Regional Award", year: "2023", project: "Field House" },
                      { award: "Wood Awards — Main Category Winner", year: "2023", project: "Field House" },
                      { award: "AR Emerging Architecture — Commendation", year: "2022", project: "Concrete Garden" },
                    ].map((item) => (
                      <StaggerItem key={item.award + item.year}>
                        <li className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-baseline py-2 border-b border-[var(--color-rule)]">
                          <span className="type-meta md:col-span-6">{item.award}</span>
                          <span className="type-meta text-[var(--color-muted)] md:col-span-3">{item.project}</span>
                          <span className="type-meta text-[var(--color-muted)] md:col-span-2 md:col-start-11">{item.year}</span>
                        </li>
                      </StaggerItem>
                    ))}
                  </ul>
                </Stagger>
              </div>
            </div>
          </section>
        </div>

        <div className="h-16 md:h-28" />
      </main>
    </PageTransition>
  );
}
