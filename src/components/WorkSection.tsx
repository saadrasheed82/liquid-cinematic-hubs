import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, Circle, Clock } from "lucide-react";

const timeline = [
  { week: "Week 1–2", title: "Proposal & Scope", status: "done", detail: "Define problem statement, objectives, and scope." },
  { week: "Week 3–4", title: "Literature Review", status: "done", detail: "Survey existing solutions and finalise tech stack." },
  { week: "Week 5–7", title: "System Design", status: "active", detail: "Architecture diagrams, data models, and UI wireframes." },
  { week: "Week 8–11", title: "Core Implementation", status: "todo", detail: "Build primary modules with weekly demos to supervisor." },
  { week: "Week 12–13", title: "Testing & Evaluation", status: "todo", detail: "Unit, integration, and user testing with metrics." },
  { week: "Week 14", title: "Final Defence", status: "todo", detail: "Polish report, prepare slides, rehearse demo." },
];

const groups = [
  { name: "Group 07 — AI Tutor", progress: 72, members: 4, risk: "On track" },
  { name: "Group 12 — Smart Farm", progress: 45, members: 3, risk: "At risk" },
  { name: "Group 03 — Health Vision", progress: 88, members: 4, risk: "Ahead" },
];

const StatusIcon = ({ status }: { status: string }) => {
  if (status === "done") return <CheckCircle2 size={16} className="text-foreground" />;
  if (status === "active") return <Clock size={16} className="text-foreground" />;
  return <Circle size={16} className="text-muted-foreground" />;
};

const WorkSection = () => {
  return (
    <section id="work" className="relative bg-background py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">
            AI Timeline
          </p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-foreground max-w-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            A plan that thinks{" "}
            <em className="not-italic text-muted-foreground">a semester ahead</em>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Timeline card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 border border-border rounded-2xl p-8 md:p-10 bg-secondary/30"
          >
            <div className="flex items-center gap-2 mb-8">
              <Sparkles size={16} className="text-foreground" />
              <p className="text-xs text-muted-foreground tracking-widest uppercase">
                Generated for Group 07 — AI Tutor
              </p>
            </div>

            <div className="flex flex-col">
              {timeline.map((step, i) => (
                <motion.div
                  key={step.week}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex gap-5 py-5 border-t border-border first:border-t-0"
                >
                  <div className="pt-1">
                    <StatusIcon status={step.status} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-4 mb-1">
                      <h3
                        className="text-xl md:text-2xl text-foreground tracking-tight"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {step.title}
                      </h3>
                      <span className="text-xs text-muted-foreground shrink-0">
                        {step.week}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Groups card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="border border-border rounded-2xl p-8 bg-secondary/30">
              <p className="text-xs text-muted-foreground tracking-widest uppercase mb-6">
                Supervised Groups
              </p>
              <div className="flex flex-col gap-6">
                {groups.map((g) => (
                  <div key={g.name}>
                    <div className="flex items-baseline justify-between mb-2">
                      <h4 className="text-sm text-foreground">{g.name}</h4>
                      <span className="text-xs text-muted-foreground">
                        {g.progress}%
                      </span>
                    </div>
                    <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-foreground rounded-full transition-all"
                        style={{ width: `${g.progress}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-muted-foreground">
                        {g.members} members
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {g.risk}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-border rounded-2xl p-8 bg-secondary/30">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={14} className="text-foreground" />
                <p className="text-xs text-muted-foreground tracking-widest uppercase">
                  AI Recommendation
                </p>
              </div>
              <p
                className="text-lg text-foreground leading-snug"
                style={{ fontFamily: "var(--font-display)" }}
              >
                "Group 12 is 2 weeks behind on system design. Suggest a sync with
                supervisor and a scope trim on the IoT module."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
