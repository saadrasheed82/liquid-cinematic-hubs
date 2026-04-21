import { motion } from "framer-motion";
import { Suspense, lazy } from "react";
import { Brain, Zap, Target } from "lucide-react";

const Scene3D = lazy(() => import("./Scene3D"));

const features = [
  { icon: Brain, label: "Adaptive Planning", desc: "Learns from group velocity." },
  { icon: Zap, label: "Real-time Nudges", desc: "Catches slippage early." },
  { icon: Target, label: "Goal Awareness", desc: "Aligned to FYP rubric." },
];

const AISection = () => {
  return (
    <section className="relative bg-background py-32 px-6 overflow-hidden">
      {/* Animated grid backdrop */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* 3D Orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative h-[420px] md:h-[520px] order-2 lg:order-1"
        >
          <div className="absolute inset-0 rounded-full blur-3xl bg-gradient-radial animate-pulse-slow" />
          <Suspense fallback={<div className="h-full w-full" />}>
            <Scene3D />
          </Suspense>
        </motion.div>

        {/* Text */}
        <div className="order-1 lg:order-2">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm text-muted-foreground tracking-widest uppercase mb-4"
          >
            The AI Core
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-foreground mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            An intelligence that{" "}
            <em className="not-italic text-muted-foreground">
              feels every milestone.
            </em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-10 max-w-lg"
          >
            ProjectPilot's neural core continuously reads project scope, team
            velocity, and deadlines — then re-plans the semester in seconds.
          </motion.p>

          <div className="flex flex-col gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="liquid-glass rounded-2xl px-5 py-4 flex items-center gap-4 hover:scale-[1.02] transition-transform"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl border border-border flex items-center justify-center bg-secondary/40">
                  <f.icon size={18} className="text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-foreground">{f.label}</p>
                  <p className="text-xs text-muted-foreground">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
