import LinkedInIcon from "./LinkedInIcon";

const team = [
  {
    name: "Ajay Kumar",
    title: "Cloud Architect",
    skills: [
      "AWS",
      "GCP",
      "Azure",
      "Kubernetes",
      "Helm",
      "Terraform",
      "Flux CD",
      "ArgoCD",
      "GitOps",
    ],
    linkedin: "https://www.linkedin.com/in/ajay-kumar-mandapati-8218b6b0/",
    initials: "AK",
  },
  {
    name: "Bharath Shetty",
    title: "Software Engineer",
    skills: [
      "Golang",
      "Microservices",
      "gRPC",
      "REST APIs",
      "MongoDB",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Kubernetes",
    ],
    linkedin: "https://www.linkedin.com/in/bharathshetty4/",
    initials: "BS",
  },
  {
    name: "Balaji Jayakumar",
    title: "Salesforce Administrator",
    skills: [
      "Salesforce CRM",
      "Lightning Components",
      "Flow Builder",
      "Sales Cloud",
      "Service Cloud",
      "Process Automation",
      "Business Analysis",
    ],
    linkedin: "https://www.linkedin.com/in/balaji-jayakumar/",
    initials: "BJ",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-neutral-400 text-sm font-semibold tracking-widest uppercase">
            The Crew
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
            Meet the Team
          </h2>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto text-lg">
            Three specialists. One mission. Delivering enterprise-quality outcomes with the
            agility of a focused team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="group flex flex-col items-center p-8 rounded-2xl bg-black border border-white/10 hover:border-white/25 transition-all duration-300 text-center"
            >
              {/* Circular placeholder */}
              <div className="relative w-48 h-48 rounded-full bg-neutral-800 flex items-center justify-center mb-6 ring-4 ring-white/10 group-hover:ring-white/20 transition-all duration-300 shadow-xl">
                <span className="text-4xl font-bold text-white/90">
                  {member.initials}
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/5 to-transparent" />
              </div>

              <h3 className="text-xl font-bold text-white mb-1">{member.name.split(" ")[0]}</h3>
              <p className="text-sm font-semibold text-neutral-400 mb-5">{member.title}</p>

              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-900 text-neutral-300 border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-white/10 hover:border-white/25 text-neutral-300 hover:text-white text-sm font-medium transition-all duration-200"
                aria-label={`${member.name} on LinkedIn`}
              >
                <LinkedInIcon className="w-4 h-4 text-white" />
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
