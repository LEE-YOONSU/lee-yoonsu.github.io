import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";

const CV_URL = "https://lee-yoonsu.github.io/assets/documents/cv.pdf";
const PROFILE_IMG = "https://lee-yoonsu.github.io/assets/images/profile.jpg";

const HeroSection = () => {
  const [cvOpen, setCvOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-[10%] w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-5 gap-12 items-center relative z-10">
        <div className="md:col-span-3">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-medium tracking-[0.25em] uppercase text-accent mb-5"
          >
            Autonomous Systems · UAV Software · Robotics
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] mb-6"
          >
            {t("이윤수", "Yoon-su Lee")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-4"
          >
            {t("SEESAW D&U 자율비행 드론 엔지니어", "Autonomous Drone Engineer at SEESAW D&U")}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base text-muted-foreground/80 leading-relaxed max-w-xl mb-10"
          >
            {t(
              "AI 기반 UAV 시스템을 개발하며, 자율비행·비전 기반 인식·경로 계획에 집중하고 있습니다. 제어 시스템 연구와 드론 플랫폼 소프트웨어 개발 경험을 갖추고 있습니다.",
              "I build AI-based UAV systems with a focus on autonomous flight, vision-based perception, and navigation. My background combines research in control systems with hands-on software development for drone platforms."
            )}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-4 flex-wrap"
          >
            <a
              href="#about"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium text-sm rounded-md hover:bg-primary/90 transition-colors"
            >
              {t("소개", "About Me")}
            </a>
            <a
              href="#research"
              className="inline-flex items-center px-6 py-3 border text-foreground font-medium text-sm rounded-md hover:bg-secondary transition-colors"
            >
              {t("연구 경험", "Research Experience")}
            </a>
            <button
              onClick={() => setCvOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-medium text-sm rounded-md hover:bg-accent/90 transition-colors"
            >
              <FileText className="w-4 h-4" />
              CV
            </button>
          </motion.div>

          <Dialog open={cvOpen} onOpenChange={setCvOpen}>
            <DialogContent className="max-w-4xl h-[85vh] p-0">
              <DialogHeader className="px-6 pt-6 pb-2">
                <DialogTitle className="font-display">Curriculum Vitae</DialogTitle>
              </DialogHeader>
              <iframe
                src={CV_URL}
                className="w-full flex-1 border-t"
                style={{ height: "calc(85vh - 80px)" }}
                title="CV PDF"
              />
            </DialogContent>
          </Dialog>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="md:col-span-2"
        >
          <div className="bg-card border rounded-xl p-8 space-y-6 shadow-sm">
            <div className="w-28 h-28 mx-auto rounded-full bg-secondary overflow-hidden border-2 border-accent/20">
              <img
                src={PROFILE_IMG}
                alt={t("이윤수", "Yoon-su Lee")}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const el = e.target as HTMLImageElement;
                  el.style.display = 'none';
                }}
              />
            </div>
            <div className="space-y-4 text-center">
              <div>
                <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-accent mb-1">
                  {t("현재", "Current")}
                </p>
                <p className="text-sm font-semibold text-foreground">SEESAW D&U Inc.</p>
              </div>
              <div>
                <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-accent mb-1">
                  {t("학력", "Education")}
                </p>
                <p className="text-sm font-semibold text-foreground">
                  {t("경운대학교, 2025", "Kyungwoon University, 2025")}
                </p>
              </div>
              <div>
                <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-accent mb-1">
                  {t("연구 분야", "Focus")}
                </p>
                <p className="text-sm font-semibold text-foreground">
                  {t("자율비행, 비전, 경로계획", "Autonomous Flight, Vision, Planning")}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown className="w-4 h-4 text-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
