import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { projects, type Project } from "@/data/projects";
import { researchExperiences, type ResearchExperience } from "@/data/research";
import { useLanguage } from "@/contexts/LanguageContext";

type ArchiveEntry = {
  key: string;
  route: string;
  titleKo: string;
  titleEn: string;
  summaryKo: string;
  summaryEn: string;
  roleKo: string;
  roleEn: string;
  period: string;
  image: string;
  tech: string[];
  evidence: Array<{ value: string; labelKo: string; labelEn: string }>;
  externalUrl?: string;
  externalLabelKo?: string;
  externalLabelEn?: string;
};

const normalizeProject = (project: Project): ArchiveEntry => ({
  key: `project-${project.slug}`,
  route: `/project/${project.slug}`,
  titleKo: project.title,
  titleEn: project.titleEn || project.title,
  summaryKo: project.descriptionKo || project.description,
  summaryEn: project.description,
  roleKo: project.roleKo || project.role,
  roleEn: project.role,
  period: project.period,
  image: project.images?.[0] || "",
  tech: project.tech,
  evidence: (project.metrics || []).map((metric) => ({
    value: metric.value,
    labelKo: metric.labelKo || metric.label,
    labelEn: metric.label,
  })),
  externalUrl: project.externalUrl,
  externalLabelKo: project.externalLabelKo,
  externalLabelEn: project.externalLabel,
});

const normalizeResearch = (research: ResearchExperience): ArchiveEntry => {
  const proof = research.metaItems?.find((item) => ["Validation", "Outcome", "Result"].includes(item.label));

  return {
    key: `research-${research.slug}`,
    route: `/research/${research.slug}`,
    titleKo: research.titleKo || research.title,
    titleEn: research.title,
    summaryKo: research.summaryKo || research.summary,
    summaryEn: research.summary,
    roleKo: research.roleKo || research.role,
    roleEn: research.role,
    period: research.periodKo || research.period,
    image: research.image,
    tech: research.techStack,
    evidence: research.award
      ? [{ value: research.awardKo || research.award, labelKo: "성과", labelEn: "Recognition" }]
      : proof
        ? [{ value: proof.valueKo || proof.value, labelKo: proof.labelKo || proof.label, labelEn: proof.label }]
        : [],
    externalUrl: research.demoUrl,
    externalLabelKo: research.demoLabelKo,
    externalLabelEn: research.demoLabel,
  };
};

const projectBySlug = new Map(projects.map((project) => [project.slug, normalizeProject(project)]));
const researchBySlug = new Map(researchExperiences.map((research) => [research.slug, normalizeResearch(research)]));

const requireEntry = (entry: ArchiveEntry | undefined, slug: string) => {
  if (!entry) throw new Error(`Missing portfolio entry: ${slug}`);
  return entry;
};

const ProjectsSection = () => {
  const { t } = useLanguage();

  const tracks = [
    {
      id: "autonomy",
      number: "01",
      titleKo: "자율비행 · 로보틱스",
      titleEn: "Autonomy & Robotics",
      descriptionKo: "비행 제어, 위치 추정, 경로 계획, 다중 로봇 협업을 실제 비행과 시뮬레이션으로 검증한 시스템입니다.",
      descriptionEn: "Flight control, localization, planning, and multi-robot coordination validated through simulation and real-world deployment.",
      entries: [
        requireEntry(projectBySlug.get("multi-robot-search-rescue"), "multi-robot-search-rescue"),
        requireEntry(researchBySlug.get("vision-autonomous-flight"), "vision-autonomous-flight"),
        requireEntry(researchBySlug.get("non-gps-swarm"), "non-gps-swarm"),
      ],
    },
    {
      id: "ai",
      number: "02",
      titleKo: "AI · 데이터",
      titleEn: "AI & Data",
      descriptionKo: "데이터 수집과 정제부터 모델 비교, 경량화, 서비스 형태의 결과물까지 연결한 AI 프로젝트입니다.",
      descriptionEn: "AI projects spanning data collection and cleaning, model comparison, optimization, and usable application flows.",
      entries: [
        requireEntry(projectBySlug.get("swimwear-size-recommendation-model"), "swimwear-size-recommendation-model"),
        requireEntry(projectBySlug.get("ai-recipe-recommendation-system"), "ai-recipe-recommendation-system"),
        requireEntry(researchBySlug.get("deep-learning-reconnaissance"), "deep-learning-reconnaissance"),
      ],
    },
    {
      id: "builder",
      number: "03",
      titleKo: "프로덕트 빌더",
      titleEn: "Product Builder",
      descriptionKo: "문제를 정의하고 제품 흐름을 설계한 뒤, 풀스택 구현·배포·운영까지 직접 완성한 작업입니다.",
      descriptionEn: "Products owned from problem framing and flow design through full-stack implementation, deployment, and operations.",
      entries: [requireEntry(projectBySlug.get("webfolio"), "webfolio")],
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="section-shell">
        <div className="grid gap-6 border-b pb-10 md:grid-cols-[1fr_0.7fr] md:items-end">
          <div>
            <p className="text-sm font-semibold text-muted-foreground">{t("프로젝트 아카이브", "Project archive")}</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] md:text-5xl">
              {t("세 가지 축으로 정리한 작업", "Work across three tracks")}
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-muted-foreground md:justify-self-end">
            {t(
              "자율비행·로보틱스, AI·데이터, 프로덕트 빌더의 세 영역으로 나누고 각 작업의 역할과 검증 결과를 같은 형식으로 정리했습니다.",
              "Projects are grouped into autonomy and robotics, AI and data, and product building, with ownership and evidence presented consistently."
            )}
          </p>
        </div>

        {tracks.map((track) => (
          <section key={track.id} id={track.id} className="border-b py-14 last:border-b-0 md:py-20">
            <div className="grid gap-5 lg:grid-cols-[0.42fr_1fr] lg:gap-16">
              <header>
                <p className="text-xs font-semibold text-accent">{track.number}</p>
                <h3 className="mt-2 text-2xl font-extrabold tracking-[-0.03em] md:text-3xl">{t(track.titleKo, track.titleEn)}</h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">{t(track.descriptionKo, track.descriptionEn)}</p>
              </header>

              <div className="border-t">
                {track.entries.map((entry, entryIndex) => (
                  <motion.article
                    key={entry.key}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: entryIndex * 0.04 }}
                    className="grid gap-5 border-b py-8 last:border-b-0 md:grid-cols-[240px_1fr] md:gap-8"
                  >
                    <Link
                      to={entry.route}
                      className="group block aspect-[4/3] overflow-hidden border bg-secondary"
                    >
                      <img
                        src={entry.image}
                        alt={t(entry.titleKo, entry.titleEn)}
                        loading="lazy"
                        className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.025]"
                      />
                    </Link>

                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-medium text-muted-foreground">{entry.period}</p>
                          <h4 className="mt-1 text-xl font-extrabold leading-snug tracking-[-0.02em]">{t(entry.titleKo, entry.titleEn)}</h4>
                        </div>
                        <Link to={entry.route} aria-label={t(`${entry.titleKo} 자세히 보기`, `View ${entry.titleEn}`)} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border hover:bg-foreground hover:text-background">
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>

                      <p className="mt-3 text-sm leading-6 text-muted-foreground">{t(entry.summaryKo, entry.summaryEn)}</p>

                      <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                        <div>
                          <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">{t("담당 범위", "Ownership")}</dt>
                          <dd className="mt-1 text-sm font-semibold leading-6">{t(entry.roleKo, entry.roleEn)}</dd>
                        </div>
                        {entry.evidence.length > 0 ? (
                          <div>
                            <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">{t("검증 결과", "Evidence")}</dt>
                            <dd className="mt-1 space-y-1">
                              {entry.evidence.slice(0, 3).map((proof) => (
                                <p key={`${proof.value}-${proof.labelEn}`} className="text-sm leading-6">
                                  <strong>{proof.value}</strong> <span className="text-xs text-muted-foreground">{t(proof.labelKo, proof.labelEn)}</span>
                                </p>
                              ))}
                            </dd>
                          </div>
                        ) : null}
                      </dl>

                      <div className="mt-5 flex flex-wrap gap-x-2 gap-y-1 text-xs text-muted-foreground">
                        {entry.tech.slice(0, 7).map((technology, techIndex) => (
                          <span key={technology} className="inline-flex items-center gap-2">
                            {techIndex > 0 ? <span className="text-border">/</span> : null}
                            {technology}
                          </span>
                        ))}
                      </div>

                      <div className="mt-5 flex flex-wrap gap-4">
                        <Link to={entry.route} className="inline-flex items-center gap-2 text-sm font-semibold hover:text-accent">
                          {t("상세 보기", "View details")} <ArrowRight className="h-4 w-4" />
                        </Link>
                        {entry.externalUrl ? (
                          <a href={entry.externalUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground">
                            {t(entry.externalLabelKo || "외부 링크", entry.externalLabelEn || "External link")} <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
