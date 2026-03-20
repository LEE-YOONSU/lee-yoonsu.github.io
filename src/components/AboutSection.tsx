import { GraduationCap, Briefcase, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const timelineItems = [
  {
    icon: GraduationCap,
    period: "2020 - 2025",
    title: "Kyungwoon University",
    description: "B.S. in Unmanned Aerial Vehicle Engineering",
  },
  {
    icon: Briefcase,
    period: "2023 - 2025",
    title: "Control Systems Laboratory",
    description: "Undergraduate Researcher — UAV control, navigation, and autonomous flight systems",
  },
  {
    icon: Building2,
    period: "2025",
    title: "Dabinchi LABs Inc.",
    description: "Drone Software Intern — Software implementation and autonomous flight technology",
  },
  {
    icon: Building2,
    period: "2025 - Present",
    title: "SEESAW D&U Inc.",
    description: "Autonomous Drone Engineer — AI-based UAV systems and real-world autonomy pipelines",
  },
];

const skills = [
  "Python", "Deep Learning", "Computer Vision", "PyTorch",
  "ROS", "Path Planning", "Object Detection", "UAV Control",
  "Docker", "Git", "C/C++",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-16 h-0.5 bg-accent mb-6" />
          <p className="text-muted-foreground max-w-2xl mb-12 leading-relaxed">
            I received my B.S. in Unmanned Aerial Vehicle Engineering from Kyungwoon University.
            My background combines research in control systems with hands-on software development
            for autonomous drone platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-16">
          {/* Timeline */}
          <div className="md:col-span-3">
            <h3 className="font-display text-xl font-semibold text-foreground mb-8">
              Experience Timeline
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />
              <div className="space-y-8">
                {timelineItems.map((item, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="flex gap-4 relative"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-card border-2 border-accent/30 flex items-center justify-center z-10">
                      <item.icon className="w-4 h-4 text-accent" />
                    </div>
                    <div className="pb-2">
                      <p className="text-xs font-medium text-accent tracking-wide uppercase mb-1">
                        {item.period}
                      </p>
                      <h4 className="font-display text-base font-semibold text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills & Interests */}
          <div className="md:col-span-2">
            <h3 className="font-display text-xl font-semibold text-foreground mb-8">Tech Stack</h3>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-2"
            >
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-secondary text-secondary-foreground text-xs font-medium rounded-md border border-border/50"
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            <h3 className="font-display text-xl font-semibold text-foreground mt-12 mb-4">
              Core Values
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I am a passionate, skilled, and self-motivated engineer committed to advancing
              autonomous systems through innovative engineering and continuous learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
