import { useEffect } from "react";
import cvPdf from "@/CV_YoonsuLee.pdf";

const CV = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Yoon-su Lee | CV";

    return () => {
      document.title = previousTitle;
    };
  }, []);

  const cvViewerUrl = `${cvPdf}#view=FitH`;

  return (
    <div className="min-h-[100dvh] bg-background">
      <div className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <div className="min-w-0">
            <p className="font-display text-base font-semibold text-foreground">Yoon-su Lee | CV</p>
            <p className="text-xs text-muted-foreground">Curriculum Vitae</p>
          </div>
          <a
            href={cvPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-md bg-accent px-3 py-2 text-xs font-medium text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Open PDF
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-0 sm:px-4 md:px-6">
        <iframe
          src={cvViewerUrl}
          title="Yoon-su Lee CV"
          className="block h-[calc(100dvh-65px)] w-full border-0 bg-white sm:rounded-b-xl sm:border sm:border-t-0"
        />
      </div>
    </div>
  );
};

export default CV;
