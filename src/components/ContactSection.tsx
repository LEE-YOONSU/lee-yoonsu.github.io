import { Mail, Github, Linkedin, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const links = [
  { icon: Mail, label: "Email", href: "mailto:yoonniiverse@gmail.com" },
  { icon: Github, label: "GitHub", href: "https://github.com/lee-yoonsu", external: true },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/yoonsulee", external: true },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@YoonsuLee1", external: true },
];

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-foreground py-20 text-background md:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-300">START A CONVERSATION</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.045em] md:text-6xl">
            {t("다음 아이디어를 함께 작동시켜 볼까요?", "Have an idea worth making real?")}
          </h2>
          <p className="mb-8 mt-6 text-sm leading-relaxed text-background/55 md:mb-10 md:text-base">
            {t(
              "제품 개발, 로보틱스·자율비행 협업, 채용 관련 연락을 환영합니다.",
              "Feel free to reach out about product development, robotics and autonomous systems, or career opportunities."
            )}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-stretch justify-center gap-3 sm:gap-4"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="flex min-w-[140px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-bold text-background transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-300/50 hover:bg-white/10"
            >
              <link.icon className="h-4 w-4 text-violet-300" />
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>

      <div className="mx-auto mt-16 max-w-6xl border-t border-white/10 pt-8 text-center md:mt-20">
        <p className="text-xs text-background/35">
          © 2026 Yoon-su Lee. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
