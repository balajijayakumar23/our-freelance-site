import {
  Cloud,
  GitBranch,
  Code2,
  BarChart3,
  Settings2,
  Server,
} from "lucide-react";

const services = [
  {
    icon: Settings2,
    title: "Salesforce Administration & Automation",
    description:
      "End-to-end Salesforce setup, customization, and process automation. From flows and triggers to reporting dashboards and third-party integrations.",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture & Kubernetes Platform Engineering",
    description:
      "Scalable, resilient cloud-native infrastructure design. Kubernetes cluster setup, Helm charts, autoscaling, and multi-cloud deployment strategies.",
  },
  {
    icon: GitBranch,
    title: "DevOps & GitOps Implementation",
    description:
      "CI/CD pipelines, infrastructure as code with Terraform, and GitOps workflows using Flux CD and ArgoCD for reliable, reproducible deployments.",
  },
  {
    icon: Code2,
    title: "Golang Microservices & SaaS Development",
    description:
      "High-performance backend services and SaaS platforms built in Go. REST and gRPC APIs, event-driven architecture, and MongoDB data modeling.",
  },
  {
    icon: BarChart3,
    title: "Observability Stack Setup",
    description:
      "Full observability with Grafana, Prometheus, and Loki. Metrics collection, log aggregation, alert rules, and production-ready dashboards.",
  },
  {
    icon: Server,
    title: "Infrastructure & Platform Reliability",
    description:
      "SRE best practices, capacity planning, and on-call runbook creation. We make your infrastructure production-hardened and self-healing.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-black">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-white/20" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-neutral-400 text-sm font-semibold tracking-widest uppercase">
            What We Do
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
            Our Services
          </h2>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto text-lg">
            From cloud infrastructure to business automation, we deliver end-to-end technical
            solutions tailored to your stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative p-6 rounded-2xl bg-neutral-950 border border-white/10 hover:border-white/25 transition-all duration-300 hover:shadow-xl hover:shadow-white/5"
              >
                <div className="inline-flex p-3 rounded-xl bg-white mb-5 shadow-lg">
                  <Icon className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="absolute bottom-0 left-6 right-6 h-px bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
