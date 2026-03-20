import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, ChevronRight } from "lucide-react";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold text-foreground mb-4">
            Project not found
          </h1>
          <Link to="/" className="text-accent hover:underline">
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-6 pt-6">
        <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">{project.title}</span>
        </nav>
      </div>

      {/* Hero Image */}
      {project.images && project.images.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto px-6 pt-8"
        >
          <div className="aspect-[21/9] rounded-xl overflow-hidden bg-secondary border">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      )}

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            {project.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap gap-6 mb-10 pb-10 border-b">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 text-accent" />
              {project.period}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="w-4 h-4 text-accent" />
              {project.role}
            </div>
          </div>

          {/* Summary */}
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            {project.description}
          </p>

          {/* Details */}
          <h2 className="font-display text-xl font-semibold text-foreground mb-6">
            상세 내용
          </h2>
          <ul className="space-y-4 mb-12">
            {project.details.map((detail, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                className="flex gap-3 text-muted-foreground leading-relaxed"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                {detail}
              </motion.li>
            ))}
          </ul>

          {/* Tech */}
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">
            기술 스택
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm font-medium rounded-md border border-border/50"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
