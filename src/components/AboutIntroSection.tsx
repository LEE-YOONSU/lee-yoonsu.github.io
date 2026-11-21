import { motion } from "framer-motion";
import { ArrowDown, FileText, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import profileLifestyleImage from "@/assets/pages/home/about/profile-lifestyle.webp";

const portfolioPdfUrl = "/documents/lee-yoonsu-portfolio-2026.pdf";

const AboutIntroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="border-b pt-28 md:pt-32">
      <div className="section-shell pb-16 md:pb-24">
        <div className="grid gap-8 md:grid-cols-[0.68fr_1.32fr] md:items-center md:gap-14">
          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto w-full max-w-sm overflow-hidden bg-secondary md:mx-0"
          >
            <img
              src={profileLifestyleImage}
              alt={t("거울 앞에서 촬영한 이윤수의 일상 사진", "A casual portrait of Yoon-su Lee")}
              className="aspect-[4/5] w-full object-cover object-center"
            />
          </motion.figure>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <p className="text-sm font-semibold text-muted-foreground">About me</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-[-0.05em] md:text-6xl">
              {t(
                "자율 시스템의 깊이와 제품 개발의 속도를 함께 가져갑니다.",
                "I bring systems depth and product-building speed together."
              )}
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base md:leading-8">
              {t(
                "무인항공기공학을 전공하고 UAV 제어·항법 연구에서 출발했습니다. 이후 자율비행과 로보틱스 시스템을 실제 환경에서 구현하고, AI 모델링과 웹 제품 개발까지 작업 범위를 확장했습니다. 분야가 달라도 문제를 정의하고, 직접 만들고, 결과로 검증하는 방식은 같습니다.",
                "My background is in UAV engineering, control, and navigation. I have since built autonomous-flight and robotics systems in real environments, while expanding into AI modeling and web products. Across domains, my approach stays the same: frame the problem, build the system, and validate the outcome."
              )}
            </p>

            <div className="mt-7 grid gap-4 border-t pt-5 sm:grid-cols-3">
              {[
                [t("자율 시스템", "Autonomy"), "ROS 2 · PX4 · Planning"],
                [t("AI", "AI"), "Vision · ML · Data"],
                [t("빌더", "Builder"), "React · Supabase · Deploy"],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-xs font-semibold text-foreground">{label}</p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntroSection;
