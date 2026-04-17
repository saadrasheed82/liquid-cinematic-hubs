import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Group Tracking",
    description:
      "Manage every FYP group, member, and supervisor in one place. Roles, contacts, and progress at a glance.",
  },
  {
    number: "02",
    title: "Milestone Boards",
    description:
      "Track proposals, mid-evaluations, and final defences. Mark tasks, add feedback, and approve deliverables.",
  },
  {
    number: "03",
    title: "AI Timeline Builder",
    description:
      "Feed the project scope — the AI returns a week-by-week task plan tailored to deadlines and team size.",
  },
  {
    number: "04",
    title: "Smart Recommendations",
    description:
      "Students receive AI nudges on what to prioritise, what's slipping, and how to finish on time.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative bg-secondary py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">
            Features
          </p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-foreground max-w-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Everything a supervisor needs,{" "}
            <em className="not-italic text-muted-foreground">nothing they don't</em>
          </h2>
        </motion.div>

        <div className="flex flex-col">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group border-t border-border py-10 md:py-12 flex flex-col md:flex-row md:items-center gap-4 md:gap-0 cursor-pointer"
            >
              <span className="text-sm text-muted-foreground md:w-20 shrink-0">
                {service.number}
              </span>
              <h3
                className="text-2xl sm:text-3xl md:text-4xl text-foreground tracking-tight md:flex-1 group-hover:text-muted-foreground transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground max-w-sm md:flex-1">
                {service.description}
              </p>
              <ArrowUpRight className="text-muted-foreground group-hover:text-foreground transition-colors ml-auto shrink-0 opacity-0 group-hover:opacity-100 hidden md:block" size={20} />
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
