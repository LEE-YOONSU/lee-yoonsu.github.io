import { FlaskConical, Eye, Route, Navigation } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Vision-based Autonomous Flight System Development",
    description:
      "Computer vision and autonomy software for stable UAV flight with perception-driven decision making.",
    image: "https://lee-yoonsu.github.io/assets/images/unnamed.png",
    tags: ["Deep Learning", "Road Recognition", "Path Planning"],
  },
  {
    title: "Non-GPS Swarm System Development",
    description:
      "Localization and coordination research for multi-agent drone operation in GPS-denied environments using UWB-based indoor positioning.",
    image: "https://lee-yoonsu.github.io/assets/images/unnamed%20(1).png",
    tags: ["UWB", "Swarm Control", "Indoor Positioning"],
  },
  {
    title: "Deep Learning-based Reconnaissance System",
    description:
      "Deep learning based aerial reconnaissance workflows for scene understanding and mission support using modern object detection models.",
    image: "https://lee-yoonsu.github.io/assets/images/unnamed%20(2).png",
    tags: ["Computer Vision", "Object Detection", "Real-time"],
  },
];

const interests = [
  {
    icon: Eye,
    title: "Vision-Based Perception",
    description:
      "Perception pipelines that connect object understanding, scene interpretation, and robot action in complex environments.",
  },
  {
    icon: Route,
    title: "Motion Planning",
    description:
      "Trajectory generation and decision logic for safe movement through constrained and changing spaces.",
  },
  {
    icon: Navigation,
    title: "Autonomous Navigation & Guidance",
    description:
      "Navigation strategies that fuse path reasoning, guidance, and robust execution for mobile robotic systems.",
  },
];

const ResearchSection = () => {
  return (
    <section id="research" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Research
          </h2>
          <div className="w-16 h-0.5 bg-accent mb-12" />
        </motion.div>

        {/* Research Experiences */}
        <h3 className="font-display text-xl font-semibold text-foreground mb-6">
          Research Experiences
        </h3>
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {experiences.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-xl border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[16/10] overflow-hidden bg-secondary">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h4 className="font-display font-semibold text-foreground mb-2 text-sm leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] font-medium rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Research Interests */}
        <h3 className="font-display text-xl font-semibold text-foreground mb-6">
          Research Interests
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {interests.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl border bg-card hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <h4 className="font-display font-semibold text-foreground mb-2 text-sm">
                {item.title}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
