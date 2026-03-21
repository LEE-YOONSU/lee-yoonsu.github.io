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

  return (
    <div className="min-h-screen bg-background">
      <iframe
        src={cvPdf}
        title="Yoon-su Lee CV"
        className="h-screen w-full border-0"
      />
    </div>
  );
};

export default CV;
