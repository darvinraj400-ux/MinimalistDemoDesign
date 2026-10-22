import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition";
import { Reveal, Stagger, StaggerItem } from "../components/Reveal";
import ArchImage from "../components/ArchImage";
import { projects, projectTypes, projectYears } from "../data/projects";

export default function Projects() {
  const [activeType, setActiveType] = useState<string>("All");
  const [activeYear, setActiveYear] = useState<string>("All");

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const typeMatch = activeType === "All" || p.type === activeType;
      const yearMatch = activeYear === "All" || p.year === parseInt(activeYear);
      return typeMatch && yearMatch;
    });
  }, [activeType, activeYear]);

  const groupedByYear = useMemo(() => {
    const groups: Record<number, typeof projects> = {};
    filteredProjects.forEach((p) => {
      if (!groups[p.year]) groups[p.year] = [];
      groups[p.year].push(p);
    });
    return Object.entries(groups).sort(([a], [b]) => parseInt(b) - parseInt(a));
  }, [filteredProjects]);

  return (
    <PageTransition>
      <main className="min-h-screen pt-24 md:pt-32">
        <div className="container-studio">
          {/* Header */}
          <div className="mb-10 md:mb-16">
            <Reveal>
              <p className="type-caption text-[var(--color-muted)] mb-3">Archive</p>
              <h1 className="type-display">Projects</h1>
            </Reveal>
          </div>

          {/* Filters */}
          <Reveal delay={0.1}>
            <div className="border-t border-[var(--color-rule)] py-6 mb-10 md:mb-16">
              <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                {/* Type Filter */}
                <div>
                  <p className="type-caption text-[var(--color-muted)] mb-3">Type</p>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setActiveType("All")}
                      className={`type-meta touch-target px-3 py-2 transition-colors ${
                        activeType === "All"
                          ? "text-[var(--color-ink)] border-b border-[var(--color-ink)]"
                          : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                      }`}
                    >
                      All
                    </button>
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => setActiveType(type)}
                        className={`type-meta touch-target px-3 py-2 transition-colors ${
                          activeType === type
                            ? "text-[var(--color-ink)] border-b border-[var(--color-ink)]"
                            : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Year Filter */}
                <div>
                  <p className="type-caption text-[var(--color-muted)] mb-3">Year</p>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setActiveYear("All")}
                      className={`type-meta touch-target px-3 py-2 transition-colors ${
                        activeYear === "All"
                          ? "text-[var(--color-ink)] border-b border-[var(--color-ink)]"
                          : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                      }`}
                    >
                      All
                    </button>
                    {projectYears.map((year) => (
                      <button
                        key={year}
                        onClick={() => setActiveYear(year.toString())}
                        className={`type-meta touch-target px-3 py-2 transition-colors ${
                          activeYear === year.toString()
                            ? "text-[var(--color-ink)] border-b border-[var(--color-ink)]"
                            : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                        }`}
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Results count */}
          <Reveal delay={0.15}>
            <p className="type-meta text-[var(--color-muted)] mb-8">
              {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
            </p>
          </Reveal>

          {/* Project List — Grouped by Year */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeType}-${activeYear}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {groupedByYear.map(([year, yearProjects]) => (
                <div key={year} className="mb-12 md:mb-20">
                  {/* Year Header */}
                  <div className="border-t border-[var(--color-rule)] pt-6 mb-8">
                    <h2 className="type-heading text-[var(--color-muted)]">{year}</h2>
                  </div>

                  {/* Projects in this year */}
                  <Stagger>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">
                      {yearProjects.map((project, i) => (
                        <StaggerItem
                          key={project.id}
                          className={i % 2 === 0 ? "md:col-span-7" : "md:col-span-5 md:col-start-8"}
                        >
                          <Link
                            to={`/projects/${project.id}`}
                            className="group block"
                          >
                            <div className={`${
                              i % 2 === 0 ? "aspect-architectural" : "aspect-portrait"
                            } overflow-hidden bg-[var(--color-subtle)] mb-4`}>
                              <ArchImage
                                src={project.heroImage.src}
                                alt={project.heroImage.alt}
                                className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                              />
                            </div>
                            <div className="flex justify-between items-baseline gap-4">
                              <div className="min-w-0">
                                <h3 className="type-heading truncate group-hover:text-[var(--color-muted)] transition-colors">
                                  {project.title}
                                </h3>
                                <p className="type-meta text-[var(--color-muted)] mt-1 truncate">
                                  {project.location}
                                </p>
                              </div>
                              <span className="type-caption text-[var(--color-muted)] shrink-0">
                                {project.type}
                              </span>
                            </div>
                          </Link>
                        </StaggerItem>
                      ))}
                    </div>
                  </Stagger>
                </div>
              ))}

              {filteredProjects.length === 0 && (
                <div className="py-20 text-center">
                  <p className="type-body text-[var(--color-muted)]">
                    No projects match the selected filters.
                  </p>
                  <button
                    onClick={() => { setActiveType("All"); setActiveYear("All"); }}
                    className="type-meta mt-4 text-[var(--color-ink)] underline touch-target"
                  >
                    Reset filters
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom spacing */}
        <div className="h-16 md:h-28" />
      </main>
    </PageTransition>
  );
}
