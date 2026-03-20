import { GraduationCap, Briefcase, Award } from "lucide-react";

const timelineItems = [
  {
    icon: GraduationCap,
    period: "2020.03 - 현재",
    title: "OO대학교 컴퓨터공학과",
    description: "학사 과정 재학 중 | GPA 4.2/4.5",
  },
  {
    icon: Briefcase,
    period: "2023.06 - 2023.12",
    title: "OO연구소 학부연구생",
    description: "자연어처리 연구실에서 학부연구생으로 활동",
  },
  {
    icon: Award,
    period: "2023.11",
    title: "OO 학술대회 우수논문상",
    description: "딥러닝 기반 텍스트 분류 모델 연구로 수상",
  },
];

const skills = [
  "Python", "PyTorch", "TensorFlow", "React", "TypeScript",
  "SQL", "Docker", "Git", "LaTeX",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          About Me
        </h2>
        <div className="w-16 h-0.5 bg-accent mb-12" />

        <div className="grid md:grid-cols-2 gap-16">
          {/* Timeline */}
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-8">이력</h3>
            <div className="space-y-8">
              {timelineItems.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-accent tracking-wide uppercase mb-1">
                      {item.period}
                    </p>
                    <h4 className="font-display text-base font-semibold text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-8">기술 스택</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-secondary text-secondary-foreground text-sm font-medium rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>

            <h3 className="font-display text-xl font-semibold text-foreground mt-12 mb-4">관심 분야</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                자연어처리 (NLP)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                컴퓨터 비전 (Computer Vision)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                데이터 분석 및 시각화
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
