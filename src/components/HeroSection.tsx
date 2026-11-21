import { motion } from "framer-motion";
import { ArrowDown, FileText, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const portfolioPdfUrl = "/documents/lee-yoonsu-portfolio-2026.pdf";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="border-b pt-28 md:pt-36">
      <div className="section-shell pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid gap-10 lg:grid-cols-[1.45fr_0.55fr] lg:gap-20"
        >
          <div>
            <p className="text-sm font-semibold text-muted-foreground">Yoon-su Lee</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-[-0.05em] sm:text-5xl md:text-6xl">
              {t(
                "제품과 자율 시스템을 끝까지 구현하는 엔지니어입니다.",
                "I build products and autonomous systems end to end."
              )}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
              {t(
                "AI SaaS, 로보틱스, 머신러닝 프로젝트에서 문제 정의부터 설계·개발·배포·검증까지 직접 수행했습니다.",
                "Across AI SaaS, robotics, and machine-learning projects, I work from problem definition through design, implementation, deployment, and validation."
              )}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-85">
                {t("프로젝트 보기", "View projects")} <ArrowDown className="h-4 w-4" />
              </a>
              <a href={portfolioPdfUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border px-5 py-3 text-sm font-semibold hover:bg-secondary/60">
                <FileText className="h-4 w-4" /> {t("포트폴리오 PDF", "Portfolio PDF")}
              </a>
              <a href="https://github.com/lee-yoonsu" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border px-5 py-3 text-sm font-semibold hover:bg-secondary/60">
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>

          <aside className="border-t pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-1">
            <dl className="space-y-6 text-sm">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{t("현재", "Current")}</dt>
                <dd className="mt-2 font-semibold">SEESAW D&U Inc.</dd>
                <dd className="mt-1 leading-6 text-muted-foreground">{t("자율비행 드론 엔지니어", "Autonomous Drone Engineer")}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{t("주요 영역", "Focus")}</dt>
                <dd className="mt-2 leading-7 text-foreground">AI Products<br />Autonomous Systems<br />Robotics Software</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{t("작업 방식", "Approach")}</dt>
                <dd className="mt-2 leading-6 text-muted-foreground">{t("설계 → 구현 → 배포 → 검증", "Design → Build → Ship → Validate")}</dd>
              </div>
            </dl>
          </aside>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
