import { ArrowDown, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/20 text-white text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          Available for new projects
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
          Enterprise-Grade Tech,{" "}
          <span className="bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
            Freelance Flexibility
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12">
          We are <span className="text-white font-semibold">TriStack Solutions</span>, a team of 3
          specialists in Salesforce, Cloud Architecture, and Golang Microservices helping businesses
          build better systems.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-semibold text-base hover:bg-neutral-200 transition-colors duration-200"
          >
            Hire Us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-transparent border border-white/20 text-white font-semibold text-base hover:border-white/50 transition-all duration-200"
          >
            See Our Services
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-6 max-w-md mx-auto">
          {[
            { value: "3", label: "Specialists" },
            { value: "15+", label: "Years Experience" },
            { value: "100%", label: "Dedicated" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-neutral-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-600 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
}
