import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Vision 자율비행 시스템 개발",
    description:
      "Developed an autonomous flight system for UAVs based on deep learning road recognition and path planning algorithms.",
    tech: ["Deep Learning", "Road Recognition", "Path Planning"],
  },
  {
    title: "딥러닝 기반 정찰 시스템 개발",
    description:
      "Implemented a reconnaissance system utilizing modern object detection models for real-time surveillance from aerial platforms.",
    tech: ["Computer Vision", "Object Detection", "Real-time"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projects
          </h2>
          <div className="w-16 h-0.5 bg-accent mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-xl p-6 border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-display font-semibold text-foreground leading-snug">
                  {project.title}
                </h4>
                <ExternalLink className="w-4 h-4 text-muted-foreground/40 group-hover:text-accent transition-colors flex-shrink-0 mt-1" />
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs font-medium rounded border border-border/50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
