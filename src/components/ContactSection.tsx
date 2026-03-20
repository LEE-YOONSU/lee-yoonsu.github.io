import { Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Contact
        </h2>
        <div className="w-16 h-0.5 bg-accent mx-auto mb-8" />
        <p className="text-muted-foreground mb-10 leading-relaxed">
          연구 협업, 대학원 진학 관련 문의, 또는 채용 관련 연락을 환영합니다.
        </p>

        <div className="flex items-center justify-center gap-6">
          <a
            href="mailto:email@example.com"
            className="flex items-center gap-2 px-5 py-3 bg-card border rounded-md text-sm font-medium text-foreground hover:border-accent/50 hover:shadow-sm transition-all"
          >
            <Mail className="w-4 h-4 text-accent" />
            Email
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-card border rounded-md text-sm font-medium text-foreground hover:border-accent/50 hover:shadow-sm transition-all"
          >
            <Github className="w-4 h-4 text-accent" />
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-card border rounded-md text-sm font-medium text-foreground hover:border-accent/50 hover:shadow-sm transition-all"
          >
            <Linkedin className="w-4 h-4 text-accent" />
            LinkedIn
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-20 pt-8 border-t text-center">
        <p className="text-xs text-muted-foreground">
          © 2024 홍길동. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
