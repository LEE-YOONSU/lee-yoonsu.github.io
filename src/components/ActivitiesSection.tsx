import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const ActivitiesSection = () => {
  const { t } = useLanguage();

  const activities = [
    {
      date: "2025.02",
      title: t("데이터 사이언스 부트캠프", "Data Science Bootcamp"),
      location: "ZeroBase",
      image: "https://lee-yoonsu.github.io/zerobase.png",
    },
    {
      date: "2025.02",
      title: t("졸업식", "Graduation Ceremony"),
      location: t("경운대학교", "Kyungwoon University"),
      detail: t("무인항공기공학과 학사", "B.S. in UAV Engineering"),
      image: "https://lee-yoonsu.github.io/IMG_0677.JPEG",
    },
    {
      date: "2024.09",
      title: t("미디어 아트 프로젝트", "Media Art Project"),
      location: t("인천국제공항", "Incheon International Airport"),
      detail: t("비행체 R&D", "Flying Object R&D"),
      image: "https://lee-yoonsu.github.io/IMG_8537.JPEG",
    },
    {
      date: "2024.05",
      title: t("드론봇 전투 경진대회", "Dronebot Combat Competition"),
      location: t("경운대학교, 경북", "Kyungwoon University, Gyeongbuk"),
      image: "https://lee-yoonsu.github.io/IMG_3585.JPG",
    },
    {
      date: "2024.01",
      title: t("국제 캡스톤 디자인", "International Capstone Design"),
      location: t("야마토대학교, 일본", "Yamato University, Japan"),
      image: "https://lee-yoonsu.github.io/IMG_1087.JPG",
    },
    {
      date: "2023.11",
      title: t("캡스톤 디자인 경진대회", "Capstone Design Competition"),
      location: t("영남대학교, 경북", "Yeungnam University, Gyeongbuk"),
      detail: t("우수상", "Excellence Award"),
      image: "https://lee-yoonsu.github.io/IMG_0835.JPEG",
    },
    {
      date: "2023.11",
      title: t("캡스톤 디자인 경진대회", "Capstone Design Competition"),
      location: t("경운대학교, 경북", "Kyungwoon University, Gyeongbuk"),
      detail: t("우수상", "Excellence Award"),
      image: "https://lee-yoonsu.github.io/kyungwoon_capstone_group.JPG",
    },
    {
      date: "2023.06",
      title: t("자율주행 대회", "Autonomous Driving Competition"),
      location: t("국민대학교, 서울", "KMU, Seoul"),
    },
    {
      date: "2023.01",
      title: t("자율주행 대회", "Autonomous Driving Competition"),
      location: t("영남대학교", "Yeungnam University"),
      image: "https://lee-yoonsu.github.io/%EC%98%81%EB%82%A8%EB%8C%80%20%EC%9E%90%EC%9C%A8%EC%A3%BC%ED%96%89%20%EB%8C%80%ED%9A%8C_1.jpg",
    },
  ];

  return (
    <section id="activities" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("활동 및 사진", "Activities & Photos")}
          </h2>
          <div className="w-16 h-0.5 bg-accent mb-12" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {activities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
              className="group relative rounded-xl border bg-card overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {item.image ? (
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="aspect-[4/3] bg-secondary/80 flex items-center justify-center">
                  <span className="text-muted-foreground/40 text-xs">{t("이미지 없음", "No image")}</span>
                </div>
              )}
              <div className="p-4">
                <p className="text-[10px] font-medium tracking-[0.15em] uppercase text-accent mb-1">
                  {item.date}
                </p>
                <h4 className="font-display text-sm font-semibold text-foreground mb-1 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-muted-foreground">{item.location}</p>
                {item.detail && (
                  <span className="inline-block mt-2 px-2 py-0.5 bg-accent/10 text-accent text-[10px] font-medium rounded">
                    {item.detail}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
