import { Users, Trophy, BookOpen, Code } from "lucide-react";

const activities = [
  {
    icon: Users,
    period: "2022.03 - 현재",
    title: "OO대학교 AI 학회",
    description: "학회 부회장으로 활동하며 주간 논문 리딩, 세미나 운영 및 스터디 그룹 이끌기.",
  },
  {
    icon: Code,
    period: "2023.07 - 2023.08",
    title: "네이버 부스트캠프 AI Tech",
    description: "6주간의 집중 AI 교육 프로그램 수료. 팀 프로젝트로 최종 발표 우수상 수상.",
  },
  {
    icon: Trophy,
    period: "2023.09",
    title: "Kaggle Competition - 상위 10%",
    description: "자연어 처리 관련 Kaggle 대회에서 상위 10% 달성 (Silver Medal).",
  },
  {
    icon: BookOpen,
    period: "2022.06 - 2022.08",
    title: "오픈소스 컨트리뷰션 아카데미",
    description: "Hugging Face Transformers 프로젝트에 기여. 한국어 토크나이저 개선 PR 머지.",
  },
];

const ActivitiesSection = () => {
  return (
    <section id="activities" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Activities
        </h2>
        <div className="w-16 h-0.5 bg-accent mb-12" />

        <div className="grid md:grid-cols-2 gap-6">
          {activities.map((item, i) => (
            <div
              key={i}
              className="group p-6 rounded-lg border bg-card hover:shadow-md transition-all hover:border-accent/30"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs font-medium text-accent tracking-wide uppercase mb-1">
                    {item.period}
                  </p>
                  <h4 className="font-display text-base font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
