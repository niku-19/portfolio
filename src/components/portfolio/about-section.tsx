import { DATA } from "@/data/resume";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 md:py-28 lg:py-32">
      <div className="section-container">
        <div className="gap-8 sm:gap-10 lg:gap-16 xl:gap-20 grid lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <SectionHeading
              label="About"
              title="Frontend craft meets production discipline."
            />
          </Reveal>

          <div className="space-y-5 sm:space-y-6">
            <Reveal delay={0.1}>
              <p className="text-foreground text-base sm:text-lg leading-relaxed">
                {DATA.summary}
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="divider-line" />
            </Reveal>

            <Reveal delay={0.24}>
              <div className="gap-4 grid sm:grid-cols-2">
                {[
                  {
                    title: "Frontend Architecture",
                    items: [
                      "Component systems",
                      "State management",
                      "Micro Frontends",
                      "RBAC",
                    ],
                  },
                  {
                    title: "Production Delivery",
                    items: [
                      "Performance optimization",
                      "Testing",
                      "CI/CD",
                      "Accessibility",
                    ],
                  },
                ].map((group) => (
                  <div key={group.title} className="p-4 sm:p-5 surface-card">
                    <h3 className="font-display text-primary text-sm">
                      {group.title}
                    </h3>
                    <ul className="space-y-2 mt-3">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-muted-foreground text-xs sm:text-sm">
                          <span className="flex-shrink-0 bg-accent rounded-full w-1 h-1" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="sm:text-[11px] text-xs label-mono">
                {DATA.location} · {DATA.role} · {DATA.yearsExperience} years
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
