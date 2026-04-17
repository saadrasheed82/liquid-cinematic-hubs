import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "I supervise 14 groups. ProjectPilot turned a chaotic semester into a calm weekly rhythm — I see who needs me before they ask.",
    author: "Dr. Hira Khan",
    role: "Associate Professor, Computer Science",
  },
  {
    quote:
      "The AI timeline gave our team a realistic plan in seconds. We stopped guessing and started shipping.",
    author: "Ahmed R.",
    role: "Final Year Student, Group 07",
  },
  {
    quote:
      "Recommendations actually catch slippage early. Two of my groups recovered a full milestone because of it.",
    author: "Prof. Daniel Vega",
    role: "FYP Coordinator, Engineering",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative bg-secondary py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">
            Voices
          </p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-foreground max-w-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Trusted by faculty{" "}
            <em className="not-italic text-muted-foreground">and their students</em>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col justify-between border border-border rounded-2xl p-8 md:p-10"
            >
              <p
                className="text-lg sm:text-xl text-foreground leading-relaxed mb-10"
                style={{ fontFamily: "var(--font-display)" }}
              >
                "{t.quote}"
              </p>
              <div>
                <p className="text-sm text-foreground">{t.author}</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
