import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition";
import { Reveal } from "../components/Reveal";

interface FormData {
  name: string;
  email: string;
  organization: string;
  projectType: string;
  location: string;
  budget: string;
  timeline: string;
  description: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    organization: "",
    projectType: "",
    location: "",
    budget: "",
    timeline: "",
    description: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.projectType) newErrors.projectType = "Please select a project type";
    if (!formData.description.trim()) newErrors.description = "Please describe your project";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Store in localStorage
    try {
      const inquiries = JSON.parse(localStorage.getItem("formfield_inquiries") || "[]");
      inquiries.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem("formfield_inquiries", JSON.stringify(inquiries));
    } catch {
      // silently fail
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const inputClasses = (field: string) =>
    `w-full bg-transparent border-b ${
      errors[field] ? "border-red-400" : "border-[var(--color-rule)] focus:border-[var(--color-ink)]"
    } py-3 type-body transition-colors outline-none placeholder:text-[var(--color-muted)]/50`;

  if (isSubmitted) {
    return (
      <PageTransition>
        <main className="min-h-screen pt-24 md:pt-32">
          <div className="container-studio">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl py-20"
            >
              <p className="type-caption text-[var(--color-muted)] mb-4">Inquiry Received</p>
              <h1 className="type-display mb-6">Thank you</h1>
              <p className="type-body text-[var(--color-muted)] mb-8">
                We've received your project inquiry and will respond within three working days. 
                In the meantime, feel free to explore our project archive.
              </p>
              <button
                onClick={() => { setIsSubmitted(false); setFormData({ name: "", email: "", organization: "", projectType: "", location: "", budget: "", timeline: "", description: "" }); }}
                className="type-meta border-b border-[var(--color-ink)] pb-0.5 touch-target hover:text-[var(--color-muted)] transition-colors"
              >
                Submit another inquiry
              </button>
            </motion.div>
          </div>
        </main>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <main className="min-h-screen pt-24 md:pt-32">
        <div className="container-studio">
          {/* Header */}
          <div className="mb-12 md:mb-20">
            <Reveal>
              <p className="type-caption text-[var(--color-muted)] mb-3">Project Inquiry</p>
              <h1 className="type-display mb-6">Start a conversation</h1>
              <p className="type-body text-[var(--color-muted)] max-w-lg">
                We welcome inquiries about new residential projects and adaptive reuse 
                commissions. Please share some details about your project and we'll be 
                in touch to discuss further.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            {/* Form */}
            <div className="md:col-span-7">
              <form onSubmit={handleSubmit} noValidate>
                <div className="border-t border-[var(--color-rule)]">
                  {/* Name */}
                  <Reveal>
                    <div className="py-5">
                      <label htmlFor="name" className="type-caption text-[var(--color-muted)] block mb-2">
                        Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className={inputClasses("name")}
                        placeholder="Your full name"
                        autoComplete="name"
                      />
                      <AnimatePresence>
                        {errors.name && (
                          <motion.p
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="type-meta text-red-400 mt-2"
                            role="alert"
                          >
                            {errors.name}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>

                  {/* Email */}
                  <Reveal delay={0.05}>
                    <div className="py-5 border-t border-[var(--color-rule)]">
                      <label htmlFor="email" className="type-caption text-[var(--color-muted)] block mb-2">
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className={inputClasses("email")}
                        placeholder="your@email.com"
                        autoComplete="email"
                      />
                      <AnimatePresence>
                        {errors.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="type-meta text-red-400 mt-2"
                            role="alert"
                          >
                            {errors.email}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>

                  {/* Organization */}
                  <Reveal delay={0.1}>
                    <div className="py-5 border-t border-[var(--color-rule)]">
                      <label htmlFor="organization" className="type-caption text-[var(--color-muted)] block mb-2">
                        Organization
                      </label>
                      <input
                        id="organization"
                        type="text"
                        value={formData.organization}
                        onChange={(e) => handleChange("organization", e.target.value)}
                        className={inputClasses("organization")}
                        placeholder="Company or personal"
                        autoComplete="organization"
                      />
                    </div>
                  </Reveal>

                  {/* Project Type */}
                  <Reveal delay={0.15}>
                    <div className="py-5 border-t border-[var(--color-rule)]">
                      <label htmlFor="projectType" className="type-caption text-[var(--color-muted)] block mb-3">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        value={formData.projectType}
                        onChange={(e) => handleChange("projectType", e.target.value)}
                        className={`${inputClasses("projectType")} cursor-pointer appearance-none bg-white`}
                      >
                        <option value="">Select project type</option>
                        <option value="new-residential">New Residential</option>
                        <option value="renovation">Renovation / Extension</option>
                        <option value="adaptive-reuse">Adaptive Reuse</option>
                        <option value="interior">Interior Architecture</option>
                        <option value="cultural">Cultural / Public</option>
                        <option value="other">Other</option>
                      </select>
                      <AnimatePresence>
                        {errors.projectType && (
                          <motion.p
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="type-meta text-red-400 mt-2"
                            role="alert"
                          >
                            {errors.projectType}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>

                  {/* Location */}
                  <Reveal delay={0.2}>
                    <div className="py-5 border-t border-[var(--color-rule)]">
                      <label htmlFor="location" className="type-caption text-[var(--color-muted)] block mb-2">
                        Project Location
                      </label>
                      <input
                        id="location"
                        type="text"
                        value={formData.location}
                        onChange={(e) => handleChange("location", e.target.value)}
                        className={inputClasses("location")}
                        placeholder="City, country"
                      />
                    </div>
                  </Reveal>

                  {/* Budget & Timeline */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8">
                    <Reveal delay={0.25}>
                      <div className="py-5 border-t border-[var(--color-rule)]">
                        <label htmlFor="budget" className="type-caption text-[var(--color-muted)] block mb-3">
                          Approximate Budget
                        </label>
                        <select
                          id="budget"
                          value={formData.budget}
                          onChange={(e) => handleChange("budget", e.target.value)}
                          className={`${inputClasses("budget")} cursor-pointer appearance-none bg-white`}
                        >
                          <option value="">Prefer not to say</option>
                          <option value="under-500k">Under £500k</option>
                          <option value="500k-1m">£500k — £1M</option>
                          <option value="1m-3m">£1M — £3M</option>
                          <option value="3m-5m">£3M — £5M</option>
                          <option value="over-5m">Over £5M</option>
                        </select>
                      </div>
                    </Reveal>

                    <Reveal delay={0.3}>
                      <div className="py-5 border-t border-[var(--color-rule)]">
                        <label htmlFor="timeline" className="type-caption text-[var(--color-muted)] block mb-3">
                          Desired Timeline
                        </label>
                        <select
                          id="timeline"
                          value={formData.timeline}
                          onChange={(e) => handleChange("timeline", e.target.value)}
                          className={`${inputClasses("timeline")} cursor-pointer appearance-none bg-white`}
                        >
                          <option value="">Select timeline</option>
                          <option value="immediate">Immediate</option>
                          <option value="6-months">Within 6 months</option>
                          <option value="1-year">Within 1 year</option>
                          <option value="exploratory">Exploratory</option>
                        </select>
                      </div>
                    </Reveal>
                  </div>

                  {/* Description */}
                  <Reveal delay={0.35}>
                    <div className="py-5 border-t border-[var(--color-rule)]">
                      <label htmlFor="description" className="type-caption text-[var(--color-muted)] block mb-2">
                        Project Description *
                      </label>
                      <textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleChange("description", e.target.value)}
                        className={`${inputClasses("description")} resize-none min-h-[120px]`}
                        placeholder="Tell us about your project, site, and aspirations..."
                        rows={5}
                      />
                      <AnimatePresence>
                        {errors.description && (
                          <motion.p
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="type-meta text-red-400 mt-2"
                            role="alert"
                          >
                            {errors.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>

                  {/* Submit */}
                  <Reveal delay={0.4}>
                    <div className="py-8 border-t border-[var(--color-rule)]">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group touch-target inline-flex items-center gap-3 type-meta border border-[var(--color-ink)] px-8 py-3 hover:bg-[var(--color-ink)] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.span
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="inline-block w-4 h-4 border border-current border-t-transparent rounded-full"
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            Submit Inquiry
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                          </>
                        )}
                      </button>
                    </div>
                  </Reveal>
                </div>
              </form>
            </div>

            {/* Sidebar Info */}
            <div className="md:col-span-4 md:col-start-9">
              <Reveal delay={0.2}>
                <div className="border-t border-[var(--color-rule)] pt-6 space-y-8">
                  <div>
                    <p className="type-caption text-[var(--color-muted)] mb-2">General Inquiries</p>
                    <p className="type-meta">info@formfield.studio</p>
                    <p className="type-meta mt-1">+44 20 7946 0958</p>
                  </div>
                  <div>
                    <p className="type-caption text-[var(--color-muted)] mb-2">Press</p>
                    <p className="type-meta">press@formfield.studio</p>
                  </div>
                  <div>
                    <p className="type-caption text-[var(--color-muted)] mb-2">Studio</p>
                    <p className="type-meta">12 Redchurch Street</p>
                    <p className="type-meta">London E2 7DP</p>
                    <p className="type-meta mt-1">United Kingdom</p>
                  </div>
                  <div>
                    <p className="type-caption text-[var(--color-muted)] mb-2">Visiting</p>
                    <p className="type-body text-[var(--color-muted)]">
                      Our studio is open to visitors by appointment. 
                      Please email to arrange a visit.
                    </p>
                  </div>
                  <div>
                    <p className="type-caption text-[var(--color-muted)] mb-2">Careers</p>
                    <p className="type-body text-[var(--color-muted)]">
                      We welcome speculative applications from 
                      architects and graduates. Send your portfolio 
                      to careers@formfield.studio
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="h-16 md:h-28" />
      </main>
    </PageTransition>
  );
}
