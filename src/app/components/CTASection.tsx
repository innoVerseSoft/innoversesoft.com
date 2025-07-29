"use client";

import {
  ArrowRight,
  User,
  Mail,
  MessageSquare,
  Send,
  Briefcase,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

export default function CTASection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "Project Request",
    description: "",
  });
  const [subjectOpen, setSubjectOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const subjectOptions = [
    { label: "Project Request", icon: Briefcase },
    { label: "Consult", icon: HelpCircle },
  ];

  const handleSubjectSelect = (subject: string) => {
    setFormData({ ...formData, subject });
    setSubjectOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          fullName: "",
          email: "",
          subject: "Project Request",
          description: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600"
    >
      <div className="absolute inset-0 -z-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="ctaGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M0,200 Q300,100 600,200 T1200,200 L1200,400 L0,400 Z"
            fill="url(#ctaGradient)"
          />
        </svg>
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Start a Conversation
          </h2>
          <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Fill out the form below
            and we'll get back to you within 24 hours.
          </p>
        </div>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="mt-6 mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-100">
            <p className="text-center">
              Message sent successfully! We'll get back to you within 24 hours.
            </p>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mt-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-100">
            <p className="text-center">
              Failed to send message. Please try again or contact us directly.
            </p>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="space-y-6">
            {/* Subject Dropdown */}
            <div className="relative">
              <button
                type="button"
                className="w-full pl-14 pr-10 py-4 bg-white/20 border-2 border-white/30 rounded-xl text-white text-lg focus:outline-none focus:border-white/50 transition-colors flex items-center relative group"
                onClick={() => setSubjectOpen((open) => !open)}
                aria-haspopup="listbox"
                aria-expanded={subjectOpen}
              >
                <span className="absolute left-4 flex items-center">
                  {formData.subject === "Project Request" ? (
                    <Briefcase className="h-6 w-6 text-indigo-100" />
                  ) : (
                    <HelpCircle className="h-6 w-6 text-indigo-100" />
                  )}
                </span>
                <span className="ml-10">{formData.subject}</span>
                <ChevronDown
                  className={`absolute right-4 h-5 w-5 text-indigo-100 transition-transform ${
                    subjectOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {subjectOpen && (
                <ul
                  className="absolute z-20 mt-2 w-full bg-white/90 rounded-xl shadow-xl border border-white/30 backdrop-blur-lg overflow-hidden"
                  tabIndex={-1}
                  role="listbox"
                >
                  {subjectOptions.map((option) => (
                    <li
                      key={option.label}
                      className={`flex items-center px-6 py-4 cursor-pointer text-lg text-indigo-700 hover:bg-indigo-100 transition-colors ${
                        formData.subject === option.label
                          ? "bg-indigo-50 font-semibold"
                          : ""
                      }`}
                      onClick={() => handleSubjectSelect(option.label)}
                      role="option"
                      aria-selected={formData.subject === option.label}
                    >
                      <option.icon className="h-6 w-6 mr-3 text-indigo-500" />
                      {option.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <User className="h-6 w-6 text-indigo-100" />
              </div>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full pl-14 pr-6 py-4 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-indigo-100 text-lg focus:outline-none focus:border-white/40 transition-colors"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Mail className="h-6 w-6 text-indigo-100" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full pl-14 pr-6 py-4 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-indigo-100 text-lg focus:outline-none focus:border-white/40 transition-colors"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute top-4 left-4 pointer-events-none">
                <MessageSquare className="h-6 w-6 text-indigo-100" />
              </div>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows={4}
                className="w-full pl-14 pr-6 py-4 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-indigo-100 text-lg focus:outline-none focus:border-white/40 transition-colors resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
