import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition";
import { Reveal } from "../components/Reveal";
import ArchImage from "../components/ArchImage";
import ImageViewer from "../components/ImageViewer";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerIndex, setViewerIndex] = useState(0);
  const [metadataExpanded, setMetadataExpanded] = useState(false);

  if (!project) {
    return (
      <PageTransition>
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="type-heading mb-4">Project not found</p>
            <Link to="/projects" className="type-meta text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors">
              ← Back to projects
            </Link>
          </div>
        </main>
      </PageTransition>
    );
  }

  const openViewer = (index: number) => {
    setViewerIndex(index);
    setViewerOpen(true);
  };

  return (
    <PageTransition>
      <main className="min-h-screen">
        {/* Back Navigation */}
        <div className="pt-20 md:pt-24">
          <div className="container-studio">
            <Link
              to="/projects"
              className="type-meta text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors touch-target inline-flex items-center gap-2"
            >
              ← All Projects
            </Link>
          </div>
        </div>

        {/* Hero */}
        <section className="mt-6 md:mt-8">
          <div className="container-studio">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <button
                onClick={() => openViewer(0)}
                className="w-full text-left group"
                aria-label="Open image viewer"
              >
                <div className="aspect-architectural md:aspect-[2.4/1] overflow-hidden bg-[var(--color-subtle)]">
                  <ArchImage
                    src={project.heroImage.src}
                    alt={project.heroImage.alt}
                    className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                    lazy={false}
                  />
                </div>
              </button>
            </motion.div>
          </div>
        </section>

        {/* Title & Meta */}
        <section className="py-10 md:py-16">
          <div className="container-studio">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">
              <div className="md:col-span-8">
                <Reveal>
                  <p className="type-caption text-[var(--color-muted)] mb-3">
                    {project.type} — {project.year}
                  </p>
                  <h1 className="type-display mb-4">{project.title}</h1>
                  <p className="type-body text-[var(--color-muted)] max-w-xl">
                    {project.subtitle}
                  </p>
                </Reveal>
              </div>
              <div className="md:col-span-4 md:col-start-9">
                <Reveal delay={0.15}>
                  {/* Expandable Metadata */}
                  <div className="border-t border-[var(--color-rule)]">
                    <button
                      onClick={() => setMetadataExpanded(!metadataExpanded)}
                      className="w-full flex items-center justify-between py-4 touch-target"
                      aria-expanded={metadataExpanded}
                    >
                      <span className="type-caption text-[var(--color-muted)]">Project Details</span>
                      <motion.span
                        animate={{ rotate: metadataExpanded ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-lg"
                        aria-hidden="true"
                      >
                        +
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {metadataExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pb-6 space-y-4">
                            <div>
                              <p className="type-caption text-[var(--color-muted)] mb-1">Location</p>
                              <p className="type-meta">{project.location}</p>
                            </div>
                            <div>
                              <p className="type-caption text-[var(--color-muted)] mb-1">Area</p>
                              <p className="type-meta">{project.area}</p>
                            </div>
                            <div>
                              <p className="type-caption text-[var(--color-muted)] mb-1">Status</p>
                              <p className="type-meta">{project.status}</p>
                            </div>
                            <div>
                              <p className="type-caption text-[var(--color-muted)] mb-1">Materials</p>
                              <div className="flex flex-wrap gap-2 mt-1">
                                {project.materials.map((m) => (
                                  <span key={m} className="type-meta border border-[var(--color-rule)] px-2 py-1">
                                    {m}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <p className="type-caption text-[var(--color-muted)] mb-1">Drawings</p>
                              <ul className="space-y-1">
                                {project.drawings.map((d) => (
                                  <li key={d} className="type-meta">{d}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Always visible key info */}
                  <div className="border-t border-[var(--color-rule)] py-4 space-y-3">
                    <div>
                      <p className="type-caption text-[var(--color-muted)]">Location</p>
                      <p className="type-meta mt-0.5">{project.location}</p>
                    </div>
                    <div>
                      <p className="type-caption text-[var(--color-muted)]">Area</p>
                      <p className="type-meta mt-0.5">{project.area}</p>
                    </div>
                    <div>
                      <p className="type-caption text-[var(--color-muted)]">Status</p>
                      <p className="type-meta mt-0.5">{project.status}</p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="border-t border-[var(--color-rule)]">
          <div className="container-studio py-10 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">
              <div className="md:col-span-3">
                <Reveal>
                  <p className="type-caption text-[var(--color-muted)]">Description</p>
                </Reveal>
              </div>
              <div className="md:col-span-7 md:col-start-5">
                <Reveal delay={0.1}>
                  <p className="type-body">{project.description}</p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="border-t border-[var(--color-rule)]">
          <div className="container-studio py-10 md:py-16">
            <Reveal>
              <p className="type-caption text-[var(--color-muted)] mb-8">Photography</p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {project.images.map((img, i) => {
                const isDrawing = img.src.startsWith("image/svg") || img.src.startsWith("data:image/svg");
                return (
                  <Reveal key={i} delay={i * 0.1}>
                    <button
                      onClick={() => openViewer(i)}
                      className="w-full text-left group"
                      aria-label={`View: ${img.caption || img.alt}`}
                    >
                      <div className={`aspect-architectural overflow-hidden bg-[var(--color-subtle)] ${isDrawing ? "p-4" : ""}`}>
                        <ArchImage
                          src={img.src}
                          alt={img.alt}
                          className={`w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.02] ${
                            isDrawing ? "object-contain" : "object-cover"
                          }`}
                        />
                      </div>
                      {img.caption && (
                        <p className="type-meta text-[var(--color-muted)] mt-2">{img.caption}</p>
                      )}
                    </button>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Design Rationale */}
        <section className="border-t border-[var(--color-rule)]">
          <div className="container-studio py-10 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">
              <div className="md:col-span-3">
                <Reveal>
                  <p className="type-caption text-[var(--color-muted)]">Design Rationale</p>
                </Reveal>
              </div>
              <div className="md:col-span-7 md:col-start-5">
                <Reveal delay={0.1}>
                  <p className="type-body">{project.rationale}</p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Materials */}
        <section className="border-t border-[var(--color-rule)]">
          <div className="container-studio py-10 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">
              <div className="md:col-span-3">
                <Reveal>
                  <p className="type-caption text-[var(--color-muted)]">Materials</p>
                </Reveal>
              </div>
              <div className="md:col-span-7 md:col-start-5">
                <Reveal delay={0.1}>
                  <div className="flex flex-wrap gap-3">
                    {project.materials.map((m) => (
                      <span key={m} className="type-meta border border-[var(--color-rule)] px-4 py-2">
                        {m}
                      </span>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Drawings */}
        <section className="border-t border-[var(--color-rule)]">
          <div className="container-studio py-10 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">
              <div className="md:col-span-3">
                <Reveal>
                  <p className="type-caption text-[var(--color-muted)]">Drawings</p>
                </Reveal>
              </div>
              <div className="md:col-span-7 md:col-start-5">
                <Reveal delay={0.1}>
                  <ul className="space-y-2">
                    {project.drawings.map((d, i) => (
                      <li key={d} className="flex items-baseline gap-4 type-meta">
                        <span className="text-[var(--color-muted)]">{String(i + 1).padStart(2, "0")}</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Next Project */}
        <section className="border-t border-[var(--color-rule)]">
          <div className="container-studio py-16 md:py-24">
            {(() => {
              const currentIndex = projects.findIndex((p) => p.id === project.id);
              const nextProject = projects[(currentIndex + 1) % projects.length];
              return (
                <Reveal>
                  <p className="type-caption text-[var(--color-muted)] mb-4">Next Project</p>
                  <Link to={`/projects/${nextProject.id}`} className="group block">
                    <h2 className="type-display group-hover:text-[var(--color-muted)] transition-colors duration-300">
                      {nextProject.title}
                    </h2>
                    <p className="type-meta text-[var(--color-muted)] mt-2">
                      {nextProject.location} — {nextProject.year}
                    </p>
                  </Link>
                </Reveal>
              );
            })()}
          </div>
        </section>

        {/* Image Viewer */}
        <AnimatePresence>
          {viewerOpen && (
            <ImageViewer
              images={project.images}
              initialIndex={viewerIndex}
              isOpen={viewerOpen}
              onClose={() => setViewerOpen(false)}
            />
          )}
        </AnimatePresence>
      </main>
    </PageTransition>
  );
}
