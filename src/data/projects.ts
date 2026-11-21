import {
  multiRobotSearchRescueImage,
  webfolioImage,
  aiRecipeSystemImage,
  swimwearSizeRecommendationImage,
} from "@/assets/pages/projects";

export interface ProjectMetric {
  value: string;
  label: string;
  labelKo?: string;
}

export interface Project {
  slug: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionKo?: string;
  tech: string[];
  period: string;
  role: string;
  roleKo?: string;
  details: string[];
  detailsKo?: string[];
  images?: string[];
  category?: string;
  categoryKo?: string;
  metrics?: ProjectMetric[];
  externalUrl?: string;
  externalLabel?: string;
  externalLabelKo?: string;
}

export const projects: Project[] = [
  {
    slug: "webfolio",
    title: "Webfolio — 이력서 기반 포트폴리오 빌더",
    titleEn: "Webfolio — Resume-to-Portfolio Builder",
    description:
      "A solo-built SaaS that turns a PDF resume into an editable, publishable portfolio site in about 30 seconds, spanning product planning, design, full-stack development, deployment, and operations.",
    descriptionKo:
      "PDF 이력서를 약 30초 만에 편집·발행 가능한 포트폴리오 사이트로 전환하는 SaaS입니다. 기획, 디자인, 풀스택 개발, 배포와 운영 설계까지 1인으로 완성했습니다.",
    tech: ["React", "Vite", "Tiptap", "Supabase", "Vercel", "Polar", "Anthropic API"],
    period: "2026",
    role: "Solo Product Builder — Planning, Design, Full Stack & Operations",
    roleKo: "1인 제품 개발 — 기획 · 디자인 · 풀스택 · 배포 · 운영",
    category: "Build · Personal SaaS",
    categoryKo: "Build · 개인 SaaS",
    metrics: [
      { value: "16", label: "Role-specific templates", labelKo: "직군별 템플릿" },
      { value: "30 sec", label: "Resume-to-draft generation", labelKo: "이력서 업로드부터 초안 생성" },
      { value: "6", label: "Supabase Edge Functions", labelKo: "Supabase Edge Functions" },
    ],
    details: [
      "Designed the product flow from PDF or DOCX upload and template selection through block editing and public publishing.",
      "Built a React 18 and Vite client with a Tiptap block editor and 16 role-specific portfolio template renderers.",
      "Implemented authentication, Postgres data, file storage, and six Edge Functions on Supabase, with Anthropic-powered resume analysis.",
      "Enforced draft, publication, and AI-usage limits in the database rather than relying on browser-side checks.",
      "Integrated Polar subscription billing and webhook handling, then added storage ownership validation, security headers, asset migration, and orphan cleanup for production operations.",
    ],
    detailsKo: [
      "PDF·DOCX 업로드와 직군별 템플릿 선택부터 블록 편집, 공개 발행까지 이어지는 제품 흐름을 설계했습니다.",
      "React 18·Vite 기반 클라이언트에 Tiptap 블록 에디터와 16종 직군별 포트폴리오 템플릿 렌더러를 구현했습니다.",
      "Supabase Auth·Postgres·Storage와 Edge Function 6개를 구성하고 Anthropic API 기반 이력서 분석을 연결했습니다.",
      "초안 수, 발행 사이트 수, AI 사용량 제한을 브라우저가 아닌 데이터베이스에서 강제해 권한과 비용 통제를 강화했습니다.",
      "Polar 구독 결제와 웹훅을 연동하고, Storage 소유권 검증·보안 헤더·에셋 마이그레이션·고아 에셋 정리까지 운영 관점으로 구현했습니다.",
    ],
    images: [webfolioImage],
    externalUrl: "https://getwebfolio.vercel.app/",
    externalLabel: "Open Webfolio",
    externalLabelKo: "Webfolio 바로가기",
  },
  {
    slug: "multi-robot-search-rescue",
    title: "다중 UAV·UGV 협업 수색·구조",
    titleEn: "Multi-Robot Search & Rescue",
    description:
      "A fully automated rescue mission in which four UAVs and two UGVs divide roles to search, identify a victim, dispatch a rescue robot, and return, orchestrated by one Behavior Tree and verified by 275 automated tests.",
    descriptionKo:
      "UAV 4대와 UGV 2대가 역할을 나눠 수색, 조난자 확인, 구조 로봇 출동, 복귀까지 수행하는 전체 임무를 하나의 Behavior Tree로 자동화하고 275개 테스트로 검증했습니다.",
    tech: ["ROS 2 Humble", "Webots", "BehaviorTree.CPP", "Crazyswarm2", "Nav2", "OpenCV", "ArUco"],
    period: "2026.08 - 2026.09",
    role: "Solo Robotics System Developer",
    roleKo: "로보틱스 시스템 1인 개발",
    category: "Build · Robotics Simulation",
    categoryKo: "Build · 로보틱스 시뮬레이션",
    metrics: [
      { value: "275", label: "Automated tests · 0 failures", labelKo: "자동 테스트 · 실패 0건" },
      { value: "3/3", label: "Randomized mission success", labelKo: "무작위 배치 임무 성공" },
      { value: "≤ 0.010 m", label: "Marker localization error", labelKo: "마커 위치 추정 오차" },
    ],
    details: [
      "Automated the complete search-rescue-return mission for four UAVs and two UGVs with a single Behavior Tree.",
      "Partitioned the search space with Voronoi regions so UAVs could search in parallel without redundant coverage.",
      "Used onboard camera feeds and ArUco detection to select the first finder, cancel the remaining searches, and hand the confirmed coordinates to the rescue UGV.",
      "Developed through AI coding agents and remote build/simulation workflows with M0-M7 stage gates, fault injection, and retry behavior.",
      "Verified 275 automated tests with zero failures and completed all three randomized-placement mission scenarios; the rescue UGV reached the target within 0.07 m.",
    ],
    detailsKo: [
      "UAV 4대와 UGV 2대의 수색-발견-구조-복귀 전체 임무를 하나의 Behavior Tree로 자동화했습니다.",
      "Voronoi 영역 분할을 적용해 UAV가 중복 없이 병렬 수색하도록 임무 공간을 구성했습니다.",
      "온보드 카메라와 ArUco 인식으로 최초 발견자를 확정하고 나머지 수색을 취소한 뒤, 좌표를 구조 UGV에 전달했습니다.",
      "AI 코딩 에이전트와 원격 빌드·시뮬레이션 환경을 활용하고 M0-M7 단계별 gate, 장애 주입, 재시도 동작으로 개발을 관리했습니다.",
      "자동 테스트 275개를 실패 없이 통과했고 무작위 배치 시나리오 3회 모두 임무에 성공했으며, UGV2의 구조 지점 도착 오차는 0.07m였습니다.",
    ],
    images: [multiRobotSearchRescueImage],
    externalUrl: "https://drive.google.com/file/d/1_tYhS0a5AM_7B3kASE2AdapBGzAstfv-/view?usp=drive_link",
    externalLabel: "Watch Demo",
    externalLabelKo: "시연 영상 보기",
  },
  {
    slug: "swimwear-size-recommendation-model",
    title: "수영복 사이즈 추천 모델",
    titleEn: "Swimwear Size Recommendation Model",
    description:
      "Scraped real review data from a Korean swimwear platform and built a multiclass size prediction pipeline with feature engineering, SMOTE rebalancing, 8-model comparison, and a final LGBM accuracy of 0.79.",
    descriptionKo:
      "온라인 수영복 플랫폼 리뷰 데이터를 직접 크롤링하고, Feature Engineering, SMOTE 불균형 보정, 8개 모델 비교를 거쳐 최종 정확도 0.79를 달성한 수영복 사이즈 추천 모델을 구축했습니다.",
    tech: ["Python", "Scikit-Learn", "Selenium", "Streamlit", "LGBM", "XGBoost", "SMOTE"],
    period: "2025.03 - 2025.04",
    role: "ML Project Lead",
    roleKo: "ML 프로젝트 리드",
    category: "AI · ML",
    categoryKo: "AI · ML",
    metrics: [
      { value: "0.79", label: "Final accuracy", labelKo: "최종 정확도" },
      { value: "8", label: "Models compared", labelKo: "비교 모델" },
    ],
    details: [
      "Scraped review data from GanaSwim and built an end-to-end ML pipeline spanning collection, cleaning, EDA, feature engineering, class rebalancing, and deployment.",
      "Modeled purchased size using height, weight, gender, usual size, and top-brand features derived from consumer reviews.",
      "Compared 8 classifiers under matched conditions and selected LGBM as the final model after leading in every evaluation setting.",
      "Raised performance from a 0.50 baseline to 0.79 through brand features, SMOTE, and GridSearchCV tuning.",
      "Deployed a Streamlit prototype that recommends swimwear size in real time, including a fallback flow for first-time buyers without usual-size history.",
    ],
    detailsKo: [
      "가나스윔 리뷰 데이터를 직접 크롤링해 수집, 정제, EDA, Feature Engineering, 클래스 불균형 보정, 모델링, 배포까지 전체 파이프라인을 구축했습니다.",
      "키, 몸무게, 성별, 평소 사이즈, 브랜드 정보를 결합해 구매 사이즈를 예측하는 다중 분류 모델을 설계했습니다.",
      "8개 분류 모델을 동일 조건에서 비교했고, 모든 평가 조건에서 가장 우수한 성능을 기록한 LGBM Classifier를 최종 모델로 선정했습니다.",
      "브랜드 feature, SMOTE, GridSearchCV 튜닝을 통해 정확도를 베이스라인 0.50에서 최종 0.79까지 향상시켰습니다.",
      "평소 사이즈가 없는 첫 구매자 폴백 분기까지 포함한 Streamlit 사이즈 추천 앱을 구현했습니다.",
    ],
    images: [swimwearSizeRecommendationImage],
  },
  {
    slug: "ai-recipe-recommendation-system",
    title: "AI 레시피 추천 시스템",
    titleEn: "AI Recipe Recommendation System",
    description:
      "A self-built end-to-end AI pipeline that detects ingredients from a single image with YOLOv8l and generates personalized recipes through Phi-1.5 prompt engineering after training on 34,008 labeled images across 47 classes.",
    descriptionKo:
      "47개 클래스 34,008장 데이터셋을 직접 수집·라벨링하고, YOLOv8l과 Phi-1.5를 연결해 식재료 인식부터 레시피 생성까지 수행하는 End-to-End AI 파이프라인을 구축했습니다.",
    tech: ["Python", "YOLOv8", "OpenCV", "PyTorch", "TensorFlow", "Hugging Face", "Phi-1.5", "Selenium", "LabelImg"],
    period: "2025.05 - 2025.06",
    role: "DL Project Lead",
    roleKo: "DL 프로젝트 리드",
    category: "AI · Deep Learning",
    categoryKo: "AI · 딥러닝",
    metrics: [
      { value: "34,008", label: "Labeled images", labelKo: "직접 라벨링한 이미지" },
      { value: "47", label: "Ingredient classes", labelKo: "식재료 클래스" },
    ],
    details: [
      "Built an end-to-end AI system that turns a single ingredient image into a generated recipe by chaining YOLOv8l detection and Phi-1.5 text generation.",
      "Collected, labeled, and augmented a 47-class ingredient dataset from scraping and self-shot photos, expanding it to 34,008 images.",
      "Compared YOLOv5 and YOLOv8l under GTX 1080 Ti constraints and selected YOLOv8l after stronger handling of irregular ingredient shapes and mAP@50 around 0.55.",
      "Structured detected class names into a prompt-engineered Phi-1.5 pipeline to generate recipe name, ingredients, steps, and cooking time.",
      "Used the project to validate not only model quality but also cross-modal pipeline design, annotation discipline, and deployable UX direction.",
    ],
    detailsKo: [
      "이미지 한 장으로 식재료를 인식하고 맞춤형 레시피를 생성하는 End-to-End AI 시스템을 구축했습니다.",
      "웹 크롤링과 직접 촬영으로 식재료 데이터를 수집하고, 증강을 거쳐 47개 클래스 34,008장 규모의 데이터셋을 직접 라벨링했습니다.",
      "GTX 1080 Ti 환경에서 YOLOv5와 YOLOv8l을 비교 학습한 뒤, 불규칙한 식재료 형태에 더 유연하게 대응하는 YOLOv8l을 최종 채택했습니다.",
      "YOLO 탐지 결과를 Phi-1.5 프롬프트 파이프라인에 연결해 레시피명, 재료, 조리 순서, 조리 시간을 포함한 구조화된 출력을 생성했습니다.",
      "모델 성능뿐 아니라 비전-LLM 통합, 라벨링 일관성, 모바일 확장 가능성까지 함께 검증했습니다.",
    ],
    images: [aiRecipeSystemImage],
  },
];
