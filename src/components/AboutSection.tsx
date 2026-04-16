import { motion } from "framer-motion";

const stats = [
  { value: "12+", label: "Years of Craft" },
  { value: "200+", label: "Projects Delivered" },
  { value: "40+", label: "Global Clients" },
  { value: "∞", label: "Curiosity" },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative bg-background py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">
              About us
            </p>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              We create at the
              <br />
              <em className="not-italic text-muted-foreground">
                edge of silence
              </em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Velorah is a creative studio born from the belief that meaningful
              design happens in stillness. We partner with visionaries who
              refuse to compromise — building brands, digital products, and
              experiences that resonate long after the first glance.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Our process is deliberate, our craft obsessive. Every pixel,
              every word, every interaction is considered. We don't chase
              trends. We set intention.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-16 border-t border-border"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p
                className="text-4xl sm:text-5xl text-foreground tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
