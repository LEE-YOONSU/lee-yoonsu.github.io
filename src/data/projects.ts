import {
  deepLearningReconnaissanceProjectImage,
  visionAutonomousFlightSystemImage,
} from "@/assets/pages/projects";

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
}

export const projects: Project[] = [
  {
    slug: "swimwear-size-recommendation-model",
    title: "수영복 사이즈 추천 모델",
    titleEn: "Swimwear Size Recommendation Model",
    description:
      "A multiclass classification model predicting swimwear size from individual body measurements, built through web scraping, feature engineering, SMOTE class-imbalance correction, and comparison of 8 ML models.",
    descriptionKo:
      "소비자 리뷰 데이터를 바탕으로 개인 신체 정보 기반 수영복 사이즈를 예측하는 다중 분류 모델을 개발했습니다. 웹 크롤링, Feature Engineering, SMOTE 불균형 보정, 8개 모델 비교를 전 과정 수행했습니다.",
    tech: ["Python", "Scikit-Learn", "Selenium", "Streamlit", "LGBM", "XGBoost", "SMOTE"],
    period: "2025.03 - 2025.04",
    role: "ML Project Lead",
    roleKo: "ML 프로젝트 리드",
    details: [
      "Built an end-to-end pipeline covering web scraping, preprocessing, EDA, feature engineering, model comparison, SMOTE-based class rebalancing, and hyperparameter tuning.",
      "Collected review data from the GanaSwim platform and modeled purchased size using height, weight, gender, and brand features.",
      "Compared 8 classifiers under identical settings and selected LGBM as the final model after achieving the best performance across conditions.",
      "Improved accuracy from a 0.50 baseline to 0.79 through feature engineering, brand filtering, SMOTE, and GridSearchCV tuning.",
      "Delivered a Streamlit prototype app that recommends swimwear size from user body measurements.",
    ],
    detailsKo: [
      "웹 크롤링, 전처리, EDA, Feature Engineering, 다중 모델 비교, SMOTE 기반 클래스 불균형 보정, 하이퍼파라미터 튜닝까지 전체 파이프라인을 직접 구축했습니다.",
      "가나스윔 리뷰 데이터를 수집하고 키, 몸무게, 성별, 브랜드 정보를 활용해 구매 사이즈를 예측하는 분류 모델을 설계했습니다.",
      "8개 분류 모델을 동일 조건에서 비교했고, 모든 조건에서 가장 안정적인 성능을 보인 LGBM Classifier를 최종 모델로 선정했습니다.",
      "Feature Engineering, 브랜드 필터링, SMOTE, GridSearchCV 튜닝을 통해 정확도를 베이스라인 0.50에서 최종 0.79까지 향상시켰습니다.",
      "신체 정보 입력 시 수영복 사이즈를 추천하는 Streamlit 프로토타입 앱을 구현했습니다.",
    ],
    images: [visionAutonomousFlightSystemImage],
  },
  {
    slug: "ai-recipe-recommendation-system",
    title: "AI 레시피 추천 시스템",
    titleEn: "AI Recipe Recommendation System",
    description:
      "An end-to-end AI pipeline that detects food ingredients in real time via YOLOv8l and automatically generates recipe text using a lightweight LLM, Phi-1.5.",
    descriptionKo:
      "식재료 이미지를 실시간으로 인식하고, 인식된 재료 목록을 기반으로 LLM이 레시피를 자동 생성하는 End-to-End AI 파이프라인을 구현했습니다.",
    tech: ["Python", "YOLOv8", "OpenCV", "PyTorch", "TensorFlow", "Hugging Face", "Phi-1.5", "Selenium", "LabelImg"],
    period: "2025.05 - 2025.06",
    role: "DL Project Lead",
    roleKo: "DL 프로젝트 리드",
    details: [
      "Built an end-to-end AI system that detects ingredients from an uploaded image and generates recipe text using a lightweight LLM.",
      "Collected and labeled a 47-class ingredient dataset, expanding it to 34,008 images through augmentation after scraping and self-shot collection.",
      "Compared YOLOv5 and YOLOv8l, then selected YOLOv8l for its better handling of irregular ingredient shapes and stable convergence.",
      "Integrated YOLO detection outputs with a Phi-1.5 prompt pipeline on Hugging Face to produce structured recipe recommendations.",
      "Completed training and experimentation under GTX 1080 Ti hardware constraints while balancing real-time performance and accuracy.",
    ],
    detailsKo: [
      "이미지 업로드만으로 식재료를 인식하고 레시피를 자동 생성하는 End-to-End AI 시스템을 구축했습니다.",
      "웹 크롤링과 직접 촬영으로 식재료 데이터를 수집하고, 증강을 거쳐 47개 클래스 34,008장 규모의 데이터셋을 직접 라벨링했습니다.",
      "YOLOv5와 YOLOv8l을 비교 학습한 뒤, 불규칙한 식재료 형태에 더 유연하게 대응하는 YOLOv8l을 최종 채택했습니다.",
      "YOLO 인식 결과를 Hugging Face 기반 Phi-1.5 프롬프트 파이프라인과 연결해 구조화된 레시피 추천을 생성했습니다.",
      "GTX 1080 Ti 환경에서 실시간성과 정확도 사이의 균형을 고려해 전체 실험과 학습을 수행했습니다.",
    ],
    images: [deepLearningReconnaissanceProjectImage],
  },
];
