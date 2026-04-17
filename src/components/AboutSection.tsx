import { motion } from "framer-motion";

const stats = [
  { value: "120+", label: "Active FYP Groups" },
  { value: "38", label: "Supervisors" },
  { value: "94%", label: "On-time Delivery" },
  { value: "AI", label: "Powered Planning" },
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
              Overview
            </p>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Supervise every group
              <br />
              <em className="not-italic text-muted-foreground">
                with quiet clarity
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
              ProjectPilot is a final year project tracker built for university
              supervisors. See every group's progress, proposals, and deadlines
              from a single, focused dashboard — without the spreadsheets.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              An onboard AI reads each project's scope and crafts a realistic
              timeline of tasks, then nudges students with gentle, personalised
              recommendations to keep them shipping on schedule.
            </p>
          </motion.div>
        </div>

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
