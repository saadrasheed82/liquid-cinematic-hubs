import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative bg-background py-32 md:py-44 px-6"
    >
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-sm text-muted-foreground tracking-widest uppercase mb-6"
        >
          Get started
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-tight text-foreground max-w-5xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Bring your department{" "}
          <em className="not-italic text-muted-foreground">on board.</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-muted-foreground text-base sm:text-lg max-w-xl mt-8 leading-relaxed"
        >
          Pilot ProjectPilot with your FYP cohort this semester. Free for
          supervisors during the beta — unlimited groups, full AI timeline.
        </motion.p>

        <motion.a
          href="mailto:hello@projectpilot.app"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="liquid-glass rounded-full px-14 py-5 text-base text-foreground mt-12 transition-transform hover:scale-[1.03] cursor-pointer inline-block"
        >
          Request Beta Access
        </motion.a>
      </div>
    </section>
  );
};

export default ContactSection;
