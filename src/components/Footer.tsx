import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-rule)]">
      <div className="container-studio py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4">
          {/* Logo & Tagline */}
          <div className="md:col-span-4">
            <p className="font-mono text-sm tracking-wider mb-3">
              <span>FORM</span>
              <span className="text-[#999] mx-2">/</span>
              <span>FIELD</span>
            </p>
            <p className="type-body text-[var(--color-muted)] max-w-xs">
              Architecture studio focused on residential spaces and adaptive reuse.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2 md:col-start-6">
            <p className="type-caption text-[var(--color-muted)] mb-3">Navigate</p>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="type-meta hover:text-[var(--color-ink)] transition-colors">Index</Link>
              <Link to="/projects" className="type-meta hover:text-[var(--color-ink)] transition-colors">Projects</Link>
              <Link to="/studio" className="type-meta hover:text-[var(--color-ink)] transition-colors">Studio</Link>
              <Link to="/contact" className="type-meta hover:text-[var(--color-ink)] transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 md:col-start-9">
            <p className="type-caption text-[var(--color-muted)] mb-3">Contact</p>
            <div className="type-meta space-y-1 text-[var(--color-muted)]">
              <p>info@formfield.studio</p>
              <p>+44 20 7946 0958</p>
              <p className="mt-3">12 Redchurch Street</p>
              <p>London E2 7DP</p>
            </div>
          </div>
        </div>

        <hr className="rule mt-12" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-6 gap-4">
          <p className="type-caption text-[var(--color-muted)]">
            © 2024 FORM / FIELD. All rights reserved.
          </p>
          <p className="type-caption text-[var(--color-muted)]">
            Architecture · Interior · Landscape
          </p>
        </div>
      </div>
    </footer>
  );
}
