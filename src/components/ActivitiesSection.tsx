import { motion } from "framer-motion";

const activities = [
  {
    date: "2025.02",
    title: "Data Science Bootcamp",
    location: "ZeroBase",
    image: "https://lee-yoonsu.github.io/zerobase.png",
  },
  {
    date: "2025.02",
    title: "Graduation Ceremony",
    location: "Kyungwoon University",
    detail: "B.S. in UAV Engineering",
    image: "https://lee-yoonsu.github.io/IMG_0677.JPEG",
  },
  {
    date: "2024.09",
    title: "Media Art Project",
    location: "Incheon International Airport",
    detail: "Flying Object R&D",
    image: "https://lee-yoonsu.github.io/IMG_8537.JPEG",
  },
  {
    date: "2024.05",
    title: "Dronebot Combat Competition",
    location: "Kyungwoon University, Gyeongbuk",
    image: "https://lee-yoonsu.github.io/IMG_3585.JPG",
  },
  {
    date: "2024.01",
    title: "International Capstone Design",
    location: "Yamato University, Japan",
    image: "https://lee-yoonsu.github.io/IMG_1087.JPG",
  },
  {
    date: "2023.11",
    title: "Capstone Design Competition",
    location: "Yeungnam University, Gyeongbuk",
    detail: "Excellence Award",
    image: "https://lee-yoonsu.github.io/IMG_0835.JPEG",
  },
  {
    date: "2023.11",
    title: "Capstone Design Competition",
    location: "Kyungwoon University, Gyeongbuk",
    detail: "Excellence Award",
    image: "https://lee-yoonsu.github.io/kyungwoon_capstone_group.JPG",
  },
  {
    date: "2023.06",
    title: "Autonomous Driving Competition",
    location: "KMU, Seoul",
  },
  {
    date: "2023.01",
    title: "Autonomous Driving Competition",
    location: "Yeungnam University",
    image: "https://lee-yoonsu.github.io/%EC%98%81%EB%82%A8%EB%8C%80%20%EC%9E%90%EC%9C%A8%EC%A3%BC%ED%96%89%20%EB%8C%80%ED%9A%8C_1.jpg",
  },
];

const ActivitiesSection = () => {
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
            Activities & Photos
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
                  <span className="text-muted-foreground/40 text-xs">No image</span>
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
