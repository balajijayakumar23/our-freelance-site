import { Zap } from "lucide-react";
import LinkedInIcon from "./LinkedInIcon";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const team = [
  { name: "Ajay Kumar", href: "https://www.linkedin.com/in/ajay-kumar-mandapati-8218b6b0/" },
  { name: "Bharath Shetty", href: "https://www.linkedin.com/in/bharathshetty4/" },
  { name: "Balaji Jayakumar", href: "https://www.linkedin.com/in/balaji-jayakumar/" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                <Zap className="w-4 h-4 text-black" />
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                TriStack<span className="text-neutral-400"> Solutions</span>
              </span>
            </a>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
              Enterprise-Grade Tech, Freelance Flexibility. Salesforce, Cloud, and Golang
              specialists for hire.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Navigation</p>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-neutral-500 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Team LinkedIn */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Connect With Us</p>
            <ul className="flex flex-col gap-3">
              {team.map((member) => (
                <li key={member.name}>
                  <a
                    href={member.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-neutral-500 hover:text-white text-sm transition-colors group"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <LinkedInIcon className="w-4 h-4 text-neutral-400 group-hover:text-white" />
                    {member.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-600 text-xs">
            © {new Date().getFullYear()} TriStack Solutions. All rights reserved.
          </p>
          <p className="text-neutral-600 text-xs">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
