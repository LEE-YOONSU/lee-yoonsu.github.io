import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";

const ProjectsSection = () => {
  const { t } = useLanguage();

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
            {t("프로젝트", "Projects")}
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
            >
              <Link
                to={`/project/${project.slug}`}
                className="block bg-card rounded-xl p-6 border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-display font-semibold text-foreground leading-snug group-hover:text-accent transition-colors">
                    {t(project.title, project.titleEn || project.title)}
                  </h4>
                  <ExternalLink className="w-4 h-4 text-muted-foreground/40 group-hover:text-accent transition-colors flex-shrink-0 mt-1" />
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {t(project.descriptionKo || project.description, project.description)}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tt) => (
                    <span
                      key={tt}
                      className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs font-medium rounded border border-border/50"
                    >
                      {tt}
                    </span>
                  ))}
                </div>
                <span className="inline-block mt-4 text-xs text-accent font-medium group-hover:underline">
                  {t("자세히 보기 →", "View details →")}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
