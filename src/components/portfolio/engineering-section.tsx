import { ENGINEERING_PILLARS } from "@/data/resume";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function EngineeringSection() {
  return (
    <section
      id="engineering"
      className="bg-surface/50 py-16 sm:py-24 md:py-28 lg:py-32">
      <div className="section-container">
        <Reveal>
          <SectionHeading
            label="Engineering"
            title="How I build for production."
            description="Architecture decisions, performance discipline, and quality practices — not buzzwords."
            align="center"
          />
        </Reveal>

        <div className="gap-4 sm:gap-6 grid md:grid-cols-3 mt-10 sm:mt-12 lg:mt-16">
          {ENGINEERING_PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08}>
              <article className="flex flex-col p-5 sm:p-6 h-full surface-card-hover">
                <span className="font-mono font-light text-primary/30 text-3xl sm:text-4xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 sm:mt-4 font-display text-lg sm:text-xl">
                  {pillar.title}
                </h3>
                <p className="flex-1 mt-2 sm:mt-3 text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {pillar.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4 sm:mt-6">
                  {pillar.concepts.map((concept) => (
                    <span
                      key={concept}
                      className="px-2 sm:px-2.5 py-1 border border-border rounded font-mono text-[9px] text-muted-foreground sm:text-[10px] uppercase tracking-wider">
                      {concept}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 sm:mt-16 lg:mt-20 p-6 sm:p-8 md:p-10 surface-card">
            <div className="gap-6 sm:gap-8 grid sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  label: "AI-Assisted Dev",
                  items: ["Cursor AI", "Claude Code", "GitHub Copilot", "MCP"],
                },
                {
                  label: "Build Tooling",
                  items: ["Webpack", "Vite", "Babel", "Docker"],
                },
                {
                  label: "Cloud Services",
                  items: ["AWS Lambda", "S3", "SES", "SQS", "SNS"],
                },
                {
                  label: "Testing",
                  items: [
                    "Jest",
                    "React Testing Library",
                    "Error Boundaries",
                    "Sentry",
                  ],
                },
              ].map((group) => (
                <div key={group.label}>
                  <p className="mb-3 sm:mb-4 text-[9px] text-primary sm:text-[11px] label-mono">
                    {group.label}
                  </p>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="font-mono text-[10px] text-muted-foreground sm:text-xs">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
