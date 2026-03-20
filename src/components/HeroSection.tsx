import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background geometric elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-[10%] w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-5 gap-12 items-center relative z-10">
        {/* Left: Text */}
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
            Yoon-su Lee
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-4"
          >
            Autonomous Drone Engineer at SEESAW D&U
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base text-muted-foreground/80 leading-relaxed max-w-xl mb-10"
          >
            I build AI-based UAV systems with a focus on autonomous flight,
            vision-based perception, and navigation. My background combines
            research in control systems with hands-on software development for
            drone platforms.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-4"
          >
            <a
              href="#about"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium text-sm rounded-md hover:bg-primary/90 transition-colors"
            >
              About Me
            </a>
            <a
              href="#research"
              className="inline-flex items-center px-6 py-3 border text-foreground font-medium text-sm rounded-md hover:bg-secondary transition-colors"
            >
              Research Experience
            </a>
          </motion.div>
        </div>

        {/* Right: Info Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="md:col-span-2"
        >
          <div className="bg-card border rounded-xl p-8 space-y-6 shadow-sm">
            <div className="w-28 h-28 mx-auto rounded-full bg-secondary overflow-hidden border-2 border-accent/20">
              <img
                src="https://lee-yoonsu.github.io/assets/images/profile.jpg"
                alt="Yoon-su Lee"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            <div className="space-y-4 text-center">
              <div>
                <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-accent mb-1">Current</p>
                <p className="text-sm font-semibold text-foreground">SEESAW D&U Inc.</p>
              </div>
              <div>
                <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-accent mb-1">Education</p>
                <p className="text-sm font-semibold text-foreground">Kyungwoon University, 2025</p>
              </div>
              <div>
                <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-accent mb-1">Focus</p>
                <p className="text-sm font-semibold text-foreground">Autonomous Flight, Vision, Planning</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-4 h-4 text-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
