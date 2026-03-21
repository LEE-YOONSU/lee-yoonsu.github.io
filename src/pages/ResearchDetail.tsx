import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, ChevronRight } from "lucide-react";
import { researchExperiences } from "@/data/research";
import { useLanguage } from "@/contexts/LanguageContext";

const ResearchDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const research = researchExperiences.find((r) => r.slug === slug);

  if (!research) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold text-foreground mb-4">
            {t("연구를 찾을 수 없습니다", "Research not found")}
          </h1>
          <Link to="/" className="text-accent hover:underline">
            {t("← 홈으로 돌아가기", "← Back to home")}
          </Link>
        </div>
      </div>
    );
  }

  const title = t(research.titleKo || research.title, research.title);
  const details = t(research.detailsKo || research.details, research.details) as unknown as string[];
  const summary = t(research.summaryKo || research.summary, research.summary);
  const role = t(research.roleKo || research.role, research.role);

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-card border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link
            to="/#research"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("홈으로", "Back to Home")}
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-6">
        <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">
            {t("홈", "Home")}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">{title}</span>
        </nav>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-6 pt-8"
      >
        <div className="aspect-[21/9] rounded-xl overflow-hidden bg-secondary border">
          <img src={research.image} alt={title} className="w-full h-full object-cover" />
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex flex-wrap gap-2 mb-6">
            {research.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            {title}
          </h1>

          <div className="flex flex-wrap gap-6 mb-10 pb-10 border-b">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 text-accent" />
              {research.period}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="w-4 h-4 text-accent" />
              {role}
            </div>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed mb-10">{summary}</p>

          <h2 className="font-display text-xl font-semibold text-foreground mb-6">
            {t("상세 내용", "Details")}
          </h2>
          <ul className="space-y-4 mb-12">
            {details.map((detail, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                className="flex gap-3 text-muted-foreground leading-relaxed"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                {detail}
              </motion.li>
            ))}
          </ul>

          <h2 className="font-display text-xl font-semibold text-foreground mb-4">
            {t("기술 스택", "Tech Stack")}
          </h2>
          <div className="flex flex-wrap gap-2">
            {research.techStack.map((tech) => (
              <span key={tech} className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm font-medium rounded-md border border-border/50">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResearchDetail;
