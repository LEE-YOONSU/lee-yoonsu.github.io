import { Eye, Route, Navigation } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { researchExperiences, researchInterests } from "@/data/research";
import { useLanguage } from "@/contexts/LanguageContext";

const iconMap = { Eye, Route, Navigation };

const ResearchSection = () => {
  const { t } = useLanguage();

  return (
    <section id="research" className="py-20 md:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">{t("기술적 깊이", "ENGINEERING DEPTH")}</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-[-0.045em] md:text-5xl">
            {t("연구를 구현으로 연결합니다.", "Research, translated into systems.")}
          </h2>
          <p className="mb-10 mt-5 max-w-2xl text-sm leading-7 text-muted-foreground md:mb-12">
            {t("자율비행, 인지, 경로계획을 논문 속 개념이 아니라 실제 시스템의 부품으로 다뤄온 기록입니다.", "Work in autonomy, perception, and planning — treated as components of working systems, not ideas on paper.")}
          </p>
        </motion.div>

        <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-6">
          {t("구현으로 검증한 기술", "Deep-tech casework")}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-16 md:mb-20">
          {researchExperiences.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
              className="h-full"
            >
              <Link
                to={`/research/${item.slug}`}
                className="group flex h-full flex-col bg-card rounded-xl border overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden bg-secondary">
                  <img
                    src={item.image}
                    alt={t(item.titleKo || item.title, item.title)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h4 className="font-display font-semibold text-foreground mb-2 text-sm leading-snug line-clamp-2 group-hover:text-accent transition-colors">
                    {t(item.titleKo || item.title, item.title)}
                  </h4>
                  <p className="line-clamp-3 text-xs text-muted-foreground leading-relaxed mb-3">
                    {t(item.summaryKo || item.summary, item.summary)}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-1.5">
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

        <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-6">
          {t("계속 깊게 파고드는 영역", "Areas I keep pushing")}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {researchInterests.map((item, i) => {
            const Icon = iconMap[item.iconName];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-5 sm:p-6 rounded-xl border bg-card hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h4 className="font-display font-semibold text-foreground mb-2 text-sm leading-snug break-words">
                  {t(item.titleKo || item.title, item.title)}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed break-words">
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
