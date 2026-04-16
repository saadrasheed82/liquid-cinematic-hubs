import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Brand Identity",
    description:
      "Crafting visual systems that communicate purpose. From logos to full identity suites — built to last.",
  },
  {
    number: "02",
    title: "Digital Product",
    description:
      "End-to-end product design and development. Interfaces that feel intuitive and look extraordinary.",
  },
  {
    number: "03",
    title: "Creative Direction",
    description:
      "Guiding the aesthetic vision across campaigns, content, and experiences. Cohesion through clarity.",
  },
  {
    number: "04",
    title: "Motion & Film",
    description:
      "Cinematic storytelling through motion design, animation, and video production. Movement with meaning.",
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
            Services
          </p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-foreground max-w-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What we do,{" "}
            <em className="not-italic text-muted-foreground">with devotion</em>
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
          {/* Final border */}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
