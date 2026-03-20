import { FileText, ExternalLink } from "lucide-react";

const papers = [
  {
    title: "딥러닝 기반 한국어 텍스트 분류 모델의 성능 비교 연구",
    venue: "한국정보과학회 학술발표논문집, 2023",
    authors: "홍길동, 김철수, 이영희",
    tags: ["NLP", "Deep Learning", "Text Classification"],
    link: "#",
  },
  {
    title: "Transformer 아키텍처를 활용한 감성 분석 모델 개발",
    venue: "대한전자공학회 학술대회, 2023",
    authors: "홍길동, 박지민",
    tags: ["Transformer", "Sentiment Analysis"],
    link: "#",
  },
];

const projects = [
  {
    title: "한국어 챗봇 시스템 개발",
    description:
      "KoBERT를 fine-tuning하여 도메인 특화 질의응답 챗봇을 개발. 사용자 의도 분류 정확도 92% 달성.",
    tech: ["Python", "PyTorch", "KoBERT", "FastAPI"],
  },
  {
    title: "이미지 캡셔닝 웹 애플리케이션",
    description:
      "Vision Transformer를 활용한 이미지 캡셔닝 모델을 React 웹앱으로 구현한 프로젝트.",
    tech: ["React", "Python", "ViT", "Docker"],
  },
];

const ResearchSection = () => {
  return (
    <section id="research" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Research
        </h2>
        <div className="w-16 h-0.5 bg-accent mb-12" />

        {/* Publications */}
        <h3 className="font-display text-xl font-semibold text-foreground mb-6">Publications</h3>
        <div className="space-y-6 mb-16">
          {papers.map((paper, i) => (
            <div
              key={i}
              className="bg-card rounded-lg p-6 border hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-3">
                  <FileText className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">
                      {paper.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-1">{paper.authors}</p>
                    <p className="text-sm text-muted-foreground italic">{paper.venue}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {paper.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-accent/10 text-accent text-xs font-medium rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <a href={paper.link} className="text-muted-foreground hover:text-accent transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Projects */}
        <h3 className="font-display text-xl font-semibold text-foreground mb-6">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-card rounded-lg p-6 border hover:shadow-md transition-shadow"
            >
              <h4 className="font-display font-semibold text-foreground mb-2">
                {project.title}
              </h4>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs font-medium rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
