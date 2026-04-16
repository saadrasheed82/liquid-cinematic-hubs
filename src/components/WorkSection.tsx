import { motion } from "framer-motion";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";

const projects = [
  {
    image: work1,
    title: "Lumina Studio",
    category: "Brand Identity",
    year: "2025",
    width: 800,
    height: 1024,
  },
  {
    image: work2,
    title: "Obsidian Form",
    category: "Digital Product",
    year: "2025",
    width: 800,
    height: 1024,
  },
  {
    image: work3,
    title: "Meridian Tower",
    category: "Creative Direction",
    year: "2024",
    width: 1200,
    height: 800,
  },
  {
    image: work4,
    title: "Tactile Canvas",
    category: "Motion & Film",
    year: "2024",
    width: 1200,
    height: 800,
  },
];

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
            Selected Work
          </p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-foreground max-w-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Projects that speak{" "}
            <em className="not-italic text-muted-foreground">quietly, loudly</em>
          </h2>
        </motion.div>

        {/* Asymmetric grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* First column - tall then short */}
          <div className="flex flex-col gap-6 md:gap-8">
            {[projects[0], projects[3]].map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  width={project.width}
                  height={project.height}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                      {project.category} — {project.year}
                    </p>
                    <h3
                      className="text-2xl sm:text-3xl text-foreground"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {project.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Second column - short then tall, offset */}
          <div className="flex flex-col gap-6 md:gap-8 md:mt-16">
            {[projects[2], projects[1]].map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.1 + 0.1 }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  width={project.width}
                  height={project.height}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                      {project.category} — {project.year}
                    </p>
                    <h3
                      className="text-2xl sm:text-3xl text-foreground"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {project.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
