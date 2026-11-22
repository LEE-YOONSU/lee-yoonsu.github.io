import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUp, ExternalLink, Play } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { useLanguage } from "@/contexts/LanguageContext";

export type LocalizedText = { ko: string; en: string };

export type CaseStudyMetric = {
  value: string;
  label: LocalizedText;
};

export type CaseStudyStep = {
  title: LocalizedText;
  description: LocalizedText;
};

export type CaseStudyLink = {
  label: LocalizedText;
  url: string;
};

export type CaseStudyData = {
  title: LocalizedText;
  summary: LocalizedText;
  period: string;
  role: LocalizedText;
  tech: string[];
  image: string;
  imageAlt: LocalizedText;
  metrics: CaseStudyMetric[];
  problem: LocalizedText;
  goal: LocalizedText;
  ownership: LocalizedText;
  overviewTitle?: LocalizedText;
  buildTitle?: LocalizedText;
  stepsTitle?: LocalizedText;
  resultsTitle?: LocalizedText;
  notesTitle?: LocalizedText;
  details: LocalizedText[];
  steps?: CaseStudyStep[];
  demo?: {
    title: LocalizedText;
    caption: LocalizedText;
    url: string;
    embedUrl: string;
  };
  links?: CaseStudyLink[];
  results: Array<CaseStudyMetric & { detail?: LocalizedText }>;
  notes?: LocalizedText[];
  previous?: { label: LocalizedText; route: string };
  next?: { label: LocalizedText; route: string };
};

const CaseStudyDetail = ({ data }: { data: CaseStudyData }) => {
  const { lang, t } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const localize = (value: LocalizedText) => (lang === "ko" ? value.ko : value.en);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [data.title.en]);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="section-shell pb-24 pt-28 md:pb-32 md:pt-32">
        <Link to="/#projects" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:opacity-75">
          <ArrowLeft className="h-4 w-4" /> {t("전체 프로젝트", "All projects")}
        </Link>

        <header className="mt-10 border-b pb-12 md:mt-14 md:pb-16">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
            <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-[-0.05em] md:text-6xl">
              {localize(data.title)}
            </h1>
            <p className="max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
              {localize(data.summary)}
            </p>
          </div>
        </header>

        <section className="grid gap-8 border-b py-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 md:py-14">
          <figure className="overflow-hidden border bg-secondary">
            <img src={data.image} alt={localize(data.imageAlt)} className="aspect-[4/3] w-full object-cover object-center" />
          </figure>

          <div className="flex flex-col justify-between gap-8">
            <dl className="divide-y border-y text-sm">
              <div className="grid grid-cols-[88px_1fr] gap-4 py-4">
                <dt className="font-semibold">{t("기간", "Period")}</dt>
                <dd className="text-muted-foreground">{data.period}</dd>
              </div>
              <div className="grid grid-cols-[88px_1fr] gap-4 py-4">
                <dt className="font-semibold">{t("역할", "Role")}</dt>
                <dd className="leading-6 text-muted-foreground">{localize(data.role)}</dd>
              </div>
              <div className="grid grid-cols-[88px_1fr] gap-4 py-4">
                <dt className="font-semibold">{t("기술", "Stack")}</dt>
                <dd className="leading-6 text-muted-foreground">
                  {data.tech.map((item, index) => (
                    <span key={item} className="whitespace-nowrap">
                      {item}
                      {index < data.tech.length - 1 ? " · " : ""}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>

            <div className="grid grid-cols-3 gap-3 sm:gap-5">
              {data.metrics.map((metric) => (
                <div key={`${metric.value}-${metric.label.en}`} className="min-w-0 border-l pl-3 first:border-l-0 first:pl-0 sm:pl-4">
                  <p className="whitespace-nowrap text-lg font-extrabold tracking-[-0.03em] text-accent sm:text-2xl md:text-3xl">{metric.value}</p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">{localize(metric.label)}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {data.demo ? (
                <a href="#demo" className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-semibold text-background hover:opacity-85">
                  <Play className="h-4 w-4 fill-current" /> {t("시연 영상 보기", "Watch demo")}
                </a>
              ) : null}
              {data.links?.map((link) => (
                <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border px-5 py-3 text-sm font-semibold hover:bg-secondary/60">
                  {localize(link.label)} <ExternalLink className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b py-14 md:py-20">
          <h2 className="text-3xl font-extrabold tracking-[-0.04em] md:text-4xl">
            {localize(data.overviewTitle || { ko: "프로젝트 배경", en: "Background" })}
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3 md:divide-x">
            {[
              [t("문제", "Problem"), data.problem],
              [t("목표", "Goal"), data.goal],
              [t("담당", "Ownership"), data.ownership],
            ].map(([label, content]) => (
              <div key={label as string} className="md:px-7 md:first:pl-0 md:last:pr-0">
                <h3 className="text-xl font-extrabold">{label as string}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{localize(content as LocalizedText)}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-b py-14 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.35fr_1fr] lg:gap-16">
            <h2 className="text-3xl font-extrabold tracking-[-0.04em] md:text-4xl">
              {localize(data.buildTitle || { ko: "구현 내용", en: "What I built" })}
            </h2>
            <ol className="border-t">
              {data.details.map((detail, index) => (
                <li key={detail.en} className="grid gap-3 border-b py-6 last:border-b-0 last:pb-0 sm:grid-cols-[48px_1fr]">
                  <span className="text-sm font-bold text-accent">{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-sm leading-7 text-muted-foreground md:text-base">{localize(detail)}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {data.steps?.length ? (
          <section className="border-b py-14 md:py-20">
            <h2 className="text-3xl font-extrabold tracking-[-0.04em] md:text-4xl">
              {localize(data.stepsTitle || { ko: "작동 흐름", en: "How it works" })}
            </h2>
            <div className="mt-8 grid gap-0 border-t md:border-y md:grid-cols-5 md:divide-x">
              {data.steps.map((step, index) => (
                <div key={step.title.en} className="border-b px-0 py-6 last:border-b-0 last:pb-0 md:border-b-0 md:px-5 md:pb-6 md:first:pl-0 md:last:pr-0">
                  <p className="text-sm font-extrabold text-accent">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 text-lg font-extrabold">{localize(step.title)}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground md:text-xs">{localize(step.description)}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {data.demo ? (
          <section id="demo" className="scroll-mt-24 border-b py-14 md:py-20">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h2 className="text-3xl font-extrabold tracking-[-0.04em] md:text-4xl">{t("시연 영상", "Demo")}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">{localize(data.demo.caption)}</p>
              </div>
              <a href={data.demo.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:opacity-75">
                {t("원본 영상 열기", "Open original video")} <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-7 aspect-video overflow-hidden border bg-black">
              <iframe
                src={data.demo.embedUrl}
                title={localize(data.demo.title)}
                className="h-full w-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          </section>
        ) : null}

        <section className="border-b py-14 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.35fr_1fr] lg:gap-16">
            <h2 className="text-3xl font-extrabold tracking-[-0.04em] md:text-4xl">
              {localize(data.resultsTitle || { ko: "결과", en: "Results" })}
            </h2>
            <dl className="border-t">
              {data.results.map((result) => (
                <div key={`${result.value}-${result.label.en}`} className="grid gap-2 border-b py-5 last:border-b-0 last:pb-0 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-8">
                  <div>
                    <dt className="font-semibold">{localize(result.label)}</dt>
                    {result.detail ? <dd className="mt-1 text-xs leading-5 text-muted-foreground">{localize(result.detail)}</dd> : null}
                  </div>
                  <dd className="text-2xl font-extrabold tracking-[-0.03em] text-accent">{result.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {data.notes?.length ? (
          <section className="border-b py-14 md:py-20">
            <div className="grid gap-8 lg:grid-cols-[0.35fr_1fr] lg:gap-16">
              <h2 className="text-3xl font-extrabold tracking-[-0.04em] md:text-4xl">
                {localize(data.notesTitle || { ko: "추가 설명", en: "Additional notes" })}
              </h2>
              <ul className="border-t">
                {data.notes.map((note) => (
                  <li key={note.en} className="flex gap-4 border-b py-5 text-sm leading-7 text-muted-foreground last:border-b-0 last:pb-0 md:text-base">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 bg-accent" />
                    <span>{localize(note)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        <nav className="flex items-center justify-between gap-6 pt-8 text-sm font-semibold">
          {data.previous ? (
            <Link to={data.previous.route} className="inline-flex items-center gap-2 hover:text-accent">
              <ArrowLeft className="h-4 w-4" /> <span>{localize(data.previous.label)}</span>
            </Link>
          ) : <span />}
          {data.next ? (
            <Link to={data.next.route} className="inline-flex items-center gap-2 text-right hover:text-accent">
              <span>{localize(data.next.label)}</span> <ArrowRight className="h-4 w-4" />
            </Link>
          ) : <span />}
        </nav>
      </main>

      {showScrollTop ? (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label={t("맨 위로", "Back to top")}
          className="fixed bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-full border bg-background shadow-sm hover:bg-secondary"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      ) : null}
    </div>
  );
};

export default CaseStudyDetail;
