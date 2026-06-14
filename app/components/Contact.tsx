"use client";

import { useState } from "react";
import { Send, CheckCircle, Mail, Building2, User, FileText } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  company: string;
  description: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-neutral-400 text-sm font-semibold tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
            Start a Project
          </h2>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto text-lg">
            Tell us about your project and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="p-6 rounded-2xl bg-black border border-white/10">
              <h3 className="text-white font-semibold text-lg mb-4">What to expect</h3>
              <div className="flex flex-col gap-4">
                {[
                  { step: "01", text: "Fill out the form with your project details" },
                  { step: "02", text: "We review and respond within 24 hours" },
                  { step: "03", text: "Kick off call to align on scope and timeline" },
                  { step: "04", text: "Proposal & contract, then we start building" },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <span className="text-xs font-bold text-white bg-white/5 border border-white/20 rounded px-2 py-1 flex-shrink-0 mt-0.5">
                      {item.step}
                    </span>
                    <p className="text-neutral-400 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-black border border-white/10">
              <p className="text-neutral-400 text-sm font-medium mb-1">Prefer email?</p>
              <a
                href="mailto:hello@tristacksolutions.com"
                className="text-white font-semibold hover:text-neutral-300 transition-colors text-sm break-all"
              >
                hello@tristacksolutions.com
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 px-6 rounded-2xl bg-black border border-white/10">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                <p className="text-neutral-400 max-w-sm">
                  Thanks for reaching out. We&apos;ll review your project and get back to you within
                  24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", company: "", description: "" });
                  }}
                  className="mt-8 px-6 py-2 rounded-lg bg-neutral-900 border border-white/10 text-neutral-300 hover:text-white text-sm font-medium transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-8 rounded-2xl bg-black border border-white/10 flex flex-col gap-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-neutral-300 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-neutral-500" />
                      Name <span className="text-white">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="px-4 py-3 rounded-lg bg-neutral-900 border border-white/10 text-white placeholder:text-neutral-600 text-sm focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-neutral-300 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-neutral-500" />
                      Email <span className="text-white">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="px-4 py-3 rounded-lg bg-neutral-900 border border-white/10 text-white placeholder:text-neutral-600 text-sm focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-neutral-300 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-neutral-500" />
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Corp"
                    className="px-4 py-3 rounded-lg bg-neutral-900 border border-white/10 text-white placeholder:text-neutral-600 text-sm focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-neutral-300 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-neutral-500" />
                    Project Description <span className="text-white">*</span>
                  </label>
                  <textarea
                    name="description"
                    required
                    rows={5}
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Tell us about your project, goals, and any tech constraints..."
                    className="px-4 py-3 rounded-lg bg-neutral-900 border border-white/10 text-white placeholder:text-neutral-600 text-sm focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 disabled:opacity-50 transition-colors duration-200 mt-1"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
