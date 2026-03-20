const HeroSection = () => {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-6">
          Researcher & Developer
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground leading-[1.1] mb-6">
          홍길동
        </h1>
        <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
          컴퓨터공학을 전공하며 인공지능과 데이터 분석 분야를 연구하고 있습니다.
          다양한 프로젝트와 활동을 통해 성장하고 있는 과정을 기록합니다.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="#about"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium text-sm rounded-md hover:bg-primary/90 transition-colors"
          >
            자세히 보기
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border text-foreground font-medium text-sm rounded-md hover:bg-secondary transition-colors"
          >
            연락하기
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
