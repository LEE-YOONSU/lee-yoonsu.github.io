import { Eye, Route, Navigation } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { researchExperiences, researchInterests } from "@/data/research";
import { useLanguage } from "@/contexts/LanguageContext";

const iconMap = { Eye, Route, Navigation };

const ResearchSection = () => {
  const { t } = useLanguage();

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
            {t("연구", "Research")}
          </h2>
          <div className="w-16 h-0.5 bg-accent mb-12" />
        </motion.div>

        <h3 className="font-display text-xl font-semibold text-foreground mb-6">
          {t("연구 경험", "Research Experiences")}
        </h3>
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {researchExperiences.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={`/research/${item.slug}`}
                className="group block bg-card rounded-xl border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[16/10] overflow-hidden bg-secondary">
                  <img
                    src={item.image}
                    alt={t(item.titleKo || item.title, item.title)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-display font-semibold text-foreground mb-2 text-sm leading-snug group-hover:text-accent transition-colors">
                    {t(item.titleKo || item.title, item.title)}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    {t(item.summaryKo || item.summary, item.summary)}
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
                  <span className="inline-block mt-3 text-xs text-accent font-medium group-hover:underline">
                    {t("자세히 보기 →", "View details →")}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <h3 className="font-display text-xl font-semibold text-foreground mb-6">
          {t("연구 관심사", "Research Interests")}
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {researchInterests.map((item, i) => {
            const Icon = iconMap[item.iconName];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-xl border bg-card hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h4 className="font-display font-semibold text-foreground mb-2 text-sm">
                  {t(item.titleKo || item.title, item.title)}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {t(item.descriptionKo || item.description, item.description)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
