import { GraduationCap, Briefcase, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const renderPeriod = (period: string) => {
  const parts = period.split(" - ");

  if (parts.length !== 2) {
    return period;
  }

  return (
    <>
      <span>{parts[0]}</span>
      <span aria-hidden="true" className="px-1">
        -
      </span>
      <span>{parts[1]}</span>
    </>
  );
};

const AboutSection = () => {
  const { t } = useLanguage();

  const timelineItems = [
    {
      icon: GraduationCap,
      period: "2020.03 - 2025.02",
      title: t("경운대학교", "Kyungwoon University"),
      description: t("무인항공기공학과 학사", "B.S. in Unmanned Aerial Vehicle Engineering"),
    },
    {
      icon: Briefcase,
      period: "2023.03 - 2024.08",
      title: t("제어시스템 연구실", "Control Systems Laboratory"),
      description: t(
        "학부 연구원 — UAV 제어, 항법, 자율비행 시스템",
        "Undergraduate Researcher — UAV control, navigation, and autonomous flight systems"
      ),
    },
    {
      icon: Building2,
      period: "2024.09 - 2025.02",
      title: "Da Vinci Labs Inc.",
      description: t(
        "드론 소프트웨어 인턴 — 소프트웨어 구현 및 자율비행 기술",
        "Drone Software Intern — Software implementation and autonomous flight technology"
      ),
    },
    {
      icon: Building2,
      period: "2025.10 - Present",
      title: "SEESAW D&U Inc.",
      description: t(
        "자율비행 드론 엔지니어 — AI 기반 UAV 시스템 및 실전 자율비행 파이프라인",
        "Autonomous Drone Engineer — AI-based UAV systems and real-world autonomy pipelines"
      ),
    },
  ];

  const skills = [
    "Python", "ROS 2", "Computer Vision", "PyTorch",
    "Path Planning", "PX4", "MAVLink", "UAV Control",
    "React", "Supabase", "Docker", "Git", "C/C++",
  ];

  return (
    <section id="experience" className="border-t bg-card/75 py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-10 md:mb-14">
          <p className="text-sm font-semibold text-muted-foreground">{t("경력과 기술", "Experience & skills")}</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] md:text-5xl">
            {t("지금까지의 경험", "Background and experience")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16">
          <div className="md:col-span-3">
            <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-6 md:mb-8">
              {t("지금까지의 빌드 경로", "My builder path")}
            </h3>
            <div className="relative">
              <div className="absolute left-4 sm:left-5 top-0 bottom-0 w-px bg-border" />
              <div className="space-y-6 md:space-y-8">
                {timelineItems.map((item, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="flex gap-3 sm:gap-4 relative"
                  >
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-card border-2 border-accent/30 flex items-center justify-center z-10">
                      <item.icon className="w-4 h-4 text-accent" />
                    </div>
                    <div className="pb-2 min-w-0">
                      <p className="text-xs font-medium text-accent tracking-wide uppercase mb-1">
                        {renderPeriod(item.period)}
                      </p>
                      <h4 className="font-display text-sm sm:text-base font-semibold text-foreground mb-1 break-words">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed break-words">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-6 md:mb-8">
              {t("직접 쓰는 도구", "Tools I work with")}
            </h3>
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

            <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mt-10 md:mt-12 mb-4">
              {t("기반이 된 숫자", "Proof points")}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                ["4.15 / 4.5", t("전체 학점", "Overall GPA")],
                ["5 / 89", t("학과 석차", "Class rank")],
                ["4", t("수상 실적", "Awards")],
                ["3", t("성적우수 장학금", "Merit scholarships")],
              ].map(([value, label]) => (
                <div key={label} className="rounded-lg border bg-card p-3">
                  <p className="font-display text-lg font-semibold text-foreground">{value}</p>
                  <p className="text-xs text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
