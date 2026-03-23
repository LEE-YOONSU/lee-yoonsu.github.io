import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUp, Calendar, User, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { projects } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";

const SwimwearSizeRecommendationContent = ({ lang }: { lang: "ko" | "en" }) => {
  const isKo = lang === "ko";
  const relatedWorks = isKo
    ? [
        {
          badge: "Imbalance",
          title: "SMOTE: Synthetic Minority Over-sampling Technique",
          meta: "Chawla et al., 2002 · JAIR",
          desc: "소수 클래스 샘플을 합성하여 클래스 불균형을 해소하는 SMOTE의 원작 논문. 사이즈 분포 불균형 문제를 해결하는 이론적 근거로 활용했다.",
        },
        {
          badge: "Model",
          title: "LightGBM: A Highly Efficient Gradient Boosting Decision Tree",
          meta: "Ke et al., 2017 · NeurIPS",
          desc: "범주형·연속형 혼합 특성이 있는 소비자 데이터에서 LGBM이 안정적인 성능을 보임을 근거로 최종 모델로 채택했다.",
        },
        {
          badge: "Review",
          title: "Mining and Summarizing Customer Reviews",
          meta: "Hu & Liu, 2004 · KDD",
          desc: "소비자 리뷰에서 의미 있는 특성을 추출하는 방법론으로, 평점 분포와 리뷰 텍스트 분석 방향 설정에 참고했다.",
        },
        {
          badge: "Encoding",
          title: "Encoding High-Cardinality String Categorical Variables",
          meta: "Cerda & Varoquaux, 2022 · JMLR",
          desc: "브랜드 변수 One-hot Encoding과 타겟 Label Encoding 선택의 근거로 활용했다.",
        },
      ]
    : [
        {
          badge: "Imbalance",
          title: "SMOTE: Synthetic Minority Over-sampling Technique",
          meta: "Chawla et al., 2002 · JAIR",
          desc: "The original SMOTE paper, used as the direct basis for handling uneven size-class distribution.",
        },
        {
          badge: "Model",
          title: "LightGBM: A Highly Efficient Gradient Boosting Decision Tree",
          meta: "Ke et al., 2017 · NeurIPS",
          desc: "Provided justification for selecting LGBM as the final model on mixed categorical and continuous consumer data.",
        },
        {
          badge: "Review",
          title: "Mining and Summarizing Customer Reviews",
          meta: "Hu & Liu, 2004 · KDD",
          desc: "Referenced for extracting meaningful signals from customer reviews and guiding rating-text analysis.",
        },
        {
          badge: "Encoding",
          title: "Encoding High-Cardinality String Categorical Variables",
          meta: "Cerda & Varoquaux, 2022 · JMLR",
          desc: "Used to justify one-hot encoding for brand and label encoding for the target size variable.",
        },
      ];

  const lessons = isKo
    ? [
        "브랜드 Feature의 효과는 EDA만으로 예측하기 어려웠고, 다양한 가설 검증이 데이터 이해를 넓혔다.",
        "SMOTE 적용 전후 정확도 0.68 → 0.78 변화로 클래스 불균형 처리의 중요성을 확인했다.",
        "정확도만이 아니라 어떤 Feature가 예측에 기여하는지 설명 가능성이 중요하다는 점을 체득했다.",
        "연령, 구매 이력, 허리·엉덩이 둘레 같은 추가 Feature가 있었다면 더 정밀한 추천이 가능했을 것이다.",
      ]
    : [
        "The impact of the Brand feature was difficult to predict from EDA alone, and hypothesis-driven experiments improved data understanding.",
        "The jump from 0.68 to 0.78 after SMOTE confirmed how decisive class-imbalance handling is.",
        "Accuracy alone is not enough; interpretability and feature-level reasoning matter.",
        "Additional features such as age, purchase history, and detailed body measurements would likely improve precision.",
      ];

  const references = [
    "Chawla, N. V., et al. (2002). SMOTE: Synthetic Minority Over-sampling Technique. Journal of Artificial Intelligence Research, 16, 321-357.",
    "Ke, G., et al. (2017). LightGBM: A Highly Efficient Gradient Boosting Decision Tree. NeurIPS 2017.",
    "Hu, M., & Liu, B. (2004). Mining and Summarizing Customer Reviews. ACM KDD 2004.",
    "Cerda, P., & Varoquaux, G. (2022). Encoding High-Cardinality String Categorical Variables. JMLR, 23(236), 1-45.",
  ];

  return (
    <div className="space-y-10 sm:space-y-12">
      <section>
        <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-4">
          {isKo ? "프로젝트 개요" : "Project Overview"}
        </h2>
        <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
          <p>
            {isKo
              ? "온라인 패션 시장에서 사이즈 문제는 주요 반품 사유이며, 수영복처럼 착용감에 민감한 제품에서 특히 두드러진다. 본 프로젝트는 가나스윔 소비자 리뷰 데이터를 활용해 신체 정보와 브랜드 정보를 기반으로 구매 사이즈를 예측하는 분류 모델을 개발했다."
              : "Size-related issues are a major cause of returns in online fashion retail, especially for fit-sensitive products like swimwear. This project used GanaSwim consumer review data to build a classification model that predicts purchased size from body measurements and brand information."}
          </p>
          <p>
            {isKo
              ? "데이터 수집부터 전처리, EDA, Feature Engineering, 다중 모델 비교, SMOTE 보정, 하이퍼파라미터 튜닝까지 전 과정을 수행했고, 최종 LGBM Classifier로 정확도 0.79를 달성했다."
              : "The full pipeline covered scraping, preprocessing, EDA, feature engineering, model comparison, SMOTE rebalancing, and hyperparameter tuning. The final LGBM Classifier achieved 0.79 accuracy."}
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-4">
          {isKo ? "관련 연구" : "Related Work"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {relatedWorks.map((item) => (
            <div key={item.title} className="rounded-xl border bg-card p-5">
              <div className="flex items-center justify-between gap-3 mb-3">
                <p className="text-xs text-muted-foreground">{item.meta}</p>
                <span className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 text-[11px] font-medium text-accent">
                  {item.badge}
                </span>
              </div>
              <h3 className="font-semibold text-foreground mb-2 leading-snug">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-4">
          {isKo ? "분석 파이프라인" : "Analysis Pipeline"}
        </h2>
        <div className="rounded-xl border bg-card p-5">
          <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
            {["Scraping", "EDA", "Feature Eng.", "Encoding", "SMOTE", "Modeling", "Streamlit"].map((step) => (
              <span key={step} className="rounded-md border bg-secondary px-3 py-2 text-secondary-foreground">
                {step}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-4">
          {isKo ? "핵심 내용" : "Core Breakdown"}
        </h2>
        <div className="space-y-4">
          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-3">
              {isKo ? "데이터 수집 및 EDA" : "Data Collection & EDA"}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
              {(isKo
                ? [
                    "Selenium으로 가나스윔 플랫폼 리뷰 데이터를 직접 크롤링했다.",
                    "제품명, 평점, 구매일자, 키·몸무게, 구매 사이즈, 평소 사이즈 등 12개 변수를 구성했다.",
                    "결측값 약 17%를 확인해 제거했고, 낮은 평점일수록 사이즈 불만 키워드가 증가하는 경향을 확인했다.",
                  ]
                : [
                    "Collected review data directly from the GanaSwim platform with Selenium.",
                    "Built a dataset with 12 variables including product, rating, purchase date, body measurements, purchased size, and usual size.",
                    "Removed roughly 17% missing values and found stronger size-complaint signals in lower-rated reviews.",
                  ]).map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-3">
              {isKo ? "Feature Engineering 및 전처리" : "Feature Engineering & Preprocessing"}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
              {(isKo
                ? [
                    "성별과 브랜드 파생변수를 생성하고, 리뷰 수 상위 6개 브랜드만 유지했다.",
                    "Brand는 One-hot Encoding, 키·몸무게는 MinMax Scaling, 타겟 사이즈는 Label Encoding을 적용했다.",
                    "브랜드 Feature 추가 시 정확도 약 5~7%p 향상, SMOTE 적용 후 0.68에서 0.78로 성능이 상승했다.",
                  ]
                : [
                    "Created derived Gender and Brand features and retained only the top 6 brands by review count.",
                    "Applied one-hot encoding to Brand, MinMax scaling to height and weight, and label encoding to the target size.",
                    "Adding Brand improved accuracy by about 5-7 percentage points, and SMOTE raised performance from 0.68 to 0.78.",
                  ]).map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-3">
              {isKo ? "모델 학습 및 비교" : "Model Training & Comparison"}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm">
                <thead>
                  <tr className="border-b text-left text-xs uppercase tracking-wide text-muted-foreground">
                    <th className="py-3 pr-4">{isKo ? "모델" : "Model"}</th>
                    <th className="py-3 pr-4">{isKo ? "Brand 제외" : "w/o Brand"}</th>
                    <th className="py-3 pr-4">{isKo ? "Brand 포함" : "w/ Brand"}</th>
                    <th className="py-3">{isKo ? "SMOTE 후" : "After SMOTE"}</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {[
                    ["LGBM Classifier", "0.624", "0.685", "0.78 -> 0.79*"],
                    ["Random Forest", "0.626", "0.679", "-"],
                    ["Decision Tree", "0.627", "0.672", "-"],
                    ["XGBoost", "0.616", "0.662", "-"],
                    ["KNN", "0.610", "0.672", "-"],
                    ["Gradient Boosting", "0.622", "0.677", "-"],
                    ["Logistic Regression", "0.596", "0.629", "-"],
                    ["SVC", "0.583", "0.635", "-"],
                  ].map((row, index) => (
                    <tr key={row[0]} className={index === 0 ? "border-b border-border/60 bg-accent/5 text-foreground" : "border-b border-border/60"}>
                      <td className="py-3 pr-4 font-medium">{row[0]}</td>
                      <td className="py-3 pr-4">{row[1]}</td>
                      <td className="py-3 pr-4">{row[2]}</td>
                      <td className="py-3">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              {isKo
                ? "* GridSearchCV 튜닝 후 최종 정확도 0.79. 베이스라인 0.50에서 시작해 Feature Engineering과 SMOTE가 가장 큰 성능 향상을 만들었다."
                : "* Final accuracy reached 0.79 after GridSearchCV tuning. Starting from a 0.50 baseline, feature engineering and SMOTE produced the largest gains."}
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-4">
          {isKo ? "배운 것들" : "Lessons Learned"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lessons.map((lesson) => (
            <div key={lesson} className="rounded-xl border bg-card p-5 text-sm text-muted-foreground leading-relaxed">
              {lesson}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-4">
          {isKo ? "참고 문헌" : "References"}
        </h2>
        <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
          {references.map((reference, index) => (
            <p key={reference}>
              <span className="mr-2 text-accent">[{index + 1}]</span>
              {reference}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
};

const AiRecipeRecommendationContent = ({ lang }: { lang: "ko" | "en" }) => {
  const isKo = lang === "ko";
  const relatedWorks = isKo
    ? [
        {
          badge: "Detection",
          title: "YOLOv8: A Novel Object Detection Algorithm with Enhanced Performance",
          meta: "Varghese & Babu, 2024 · arXiv",
          desc: "YOLOv8의 Anchor-free Head와 C2f 모듈이 불규칙한 객체 탐지에 유리하다는 점을 근거로 식재료 인식 모델로 채택했다.",
        },
        {
          badge: "Food AI",
          title: "Grab, Pay, and Eat: Semantic Food Detection for Smart Restaurants",
          meta: "Aguilar et al., 2019 · IEEE Access",
          desc: "음식 도메인에서 바운딩 박스 라벨링 중요성과 클래스 수 증가에 따른 성능 변화를 참고했다.",
        },
        {
          badge: "LLM",
          title: "Textbooks Are All You Need II: phi-1.5 Technical Report",
          meta: "Li et al., 2023 · arXiv",
          desc: "제한된 연산 환경에서 Phi-1.5를 레시피 생성용 경량 LLM으로 선택하는 핵심 근거가 되었다.",
        },
        {
          badge: "Augmentation",
          title: "A Survey on Image Data Augmentation for Deep Learning",
          meta: "Shorten & Khoshgoftaar, 2019 · J.BigData",
          desc: "회전, 반전, 조도 변화 기반 증강으로 데이터셋을 2~3배 확장하는 전략의 이론적 근거로 활용했다.",
        },
        {
          badge: "Prompt",
          title: "A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT",
          meta: "White et al., 2023 · arXiv",
          desc: "식재료 리스트를 구조화된 레시피 포맷으로 바꾸는 프롬프트 설계에 참고했다.",
        },
        {
          badge: "Labeling",
          title: "Microsoft COCO: Common Objects in Context",
          meta: "Lin et al., 2014 · ECCV",
          desc: "34,008장 식재료 이미지 라벨링 기준과 객체 탐지 평가 지표 해석 기준으로 활용했다.",
        },
      ]
    : [
        {
          badge: "Detection",
          title: "YOLOv8: A Novel Object Detection Algorithm with Enhanced Performance",
          meta: "Varghese & Babu, 2024 · arXiv",
          desc: "Provided the main rationale for choosing YOLOv8l for irregular ingredient objects under diverse lighting and backgrounds.",
        },
        {
          badge: "Food AI",
          title: "Grab, Pay, and Eat: Semantic Food Detection for Smart Restaurants",
          meta: "Aguilar et al., 2019 · IEEE Access",
          desc: "Referenced for labeling quality and class-scaling considerations in the food detection domain.",
        },
        {
          badge: "LLM",
          title: "Textbooks Are All You Need II: phi-1.5 Technical Report",
          meta: "Li et al., 2023 · arXiv",
          desc: "Justified the use of Phi-1.5 as a lightweight recipe-generation LLM under constrained compute.",
        },
        {
          badge: "Augmentation",
          title: "A Survey on Image Data Augmentation for Deep Learning",
          meta: "Shorten & Khoshgoftaar, 2019 · J.BigData",
          desc: "Grounded the augmentation strategy used to expand the dataset 2-3x for better generalization.",
        },
        {
          badge: "Prompt",
          title: "A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT",
          meta: "White et al., 2023 · arXiv",
          desc: "Referenced for structured prompt design that turns ingredient lists into recipe outputs.",
        },
        {
          badge: "Labeling",
          title: "Microsoft COCO: Common Objects in Context",
          meta: "Lin et al., 2014 · ECCV",
          desc: "Used as the labeling and evaluation reference for the 34,008-image ingredient dataset.",
        },
      ];

  const lessons = isKo
    ? [
        "정확도 자체보다 GPU 제약, 실시간성, 데이터 특성에 맞는 모델 선택이 더 중요하다는 점을 확인했다.",
        "YOLO와 LLM을 연결하는 과정에서 입출력 형식 변환, 추론 지연, 결과 정합성 같은 통합 문제가 새로 발생했다.",
        "34,008장 수작업 라벨링을 통해 라벨 기준 일관성이 모델 품질에 직접적인 영향을 준다는 점을 체감했다.",
        "GTX 1080 Ti 환경은 성능 상한을 만들었고, 더 큰 GPU 자원이 있으면 더 높은 성능을 기대할 수 있음을 확인했다.",
      ]
    : [
        "Model choice must fit GPU limits, real-time constraints, and data characteristics rather than optimize accuracy in isolation.",
        "Integrating YOLO and an LLM introduced system-level issues such as I/O conversion, latency, and consistency management.",
        "Manual labeling at 34,008-image scale reinforced how strongly annotation consistency affects training quality.",
        "GTX 1080 Ti hardware imposed a practical performance ceiling, highlighting the trade-off between resources and model quality.",
      ];

  const references = [
    "Varghese, R., & Babu, S. M. (2024). YOLOv8: A Novel Object Detection Algorithm with Enhanced Performance and Robustness. arXiv:2305.09972.",
    "Aguilar, E., et al. (2019). Grab, Pay, and Eat: Semantic Food Detection for Smart Restaurants. IEEE Access, 7.",
    "Li, Y., et al. (2023). Textbooks Are All You Need II: phi-1.5 Technical Report. arXiv:2309.05463. Microsoft Research.",
    "Shorten, C., & Khoshgoftaar, T. M. (2019). A Survey on Image Data Augmentation for Deep Learning. Journal of Big Data, 6(1), 60.",
    "White, J., et al. (2023). A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT. arXiv:2302.11382.",
    "Lin, T.-Y., et al. (2014). Microsoft COCO: Common Objects in Context. ECCV 2014.",
  ];

  return (
    <div className="space-y-10 sm:space-y-12">
      <section>
        <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-4">
          {isKo ? "프로젝트 개요" : "Project Overview"}
        </h2>
        <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
          <p>
            {isKo
              ? "1인 가구 증가와 간편식 소비 확대에 따라 냉장고 속 재료로 만들 수 있는 요리를 빠르게 파악하려는 수요가 커지고 있다. 본 프로젝트는 이미지 한 장만으로 보유 식재료를 인식하고 맞춤형 레시피를 생성하는 AI 시스템을 목표로 했다."
              : "As single-person households and convenient meal prep demand increase, there is growing need for a fast way to identify what can be cooked from available ingredients. This project aimed to build an AI system that recognizes ingredients from a single image and generates a tailored recipe."}
          </p>
          <p>
            {isKo
              ? "YOLOv8l 기반 식재료 객체 인식과 Phi-1.5 기반 자연어 생성을 결합한 End-to-End 파이프라인을 구현했고, 데이터 수집, 라벨링, 객체 탐지 학습, LLM 프롬프트 설계를 전부 직접 수행했다."
              : "It combined YOLOv8l-based ingredient detection with Phi-1.5-based text generation in an end-to-end pipeline, covering dataset collection, annotation, detection training, and LLM prompt design."}
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-4">
          {isKo ? "관련 연구" : "Related Work"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {relatedWorks.map((item) => (
            <div key={item.title} className="rounded-xl border bg-card p-5">
              <div className="flex items-center justify-between gap-3 mb-3">
                <p className="text-xs text-muted-foreground">{item.meta}</p>
                <span className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 text-[11px] font-medium text-accent">
                  {item.badge}
                </span>
              </div>
              <h3 className="font-semibold text-foreground mb-2 leading-snug">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-4">
          {isKo ? "시스템 설계" : "System Design"}
        </h2>
        <div className="rounded-xl border bg-card p-5">
          <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
            {["Image", "YOLOv8l", "Ingredient List", "Phi-1.5", "Recipe Output"].map((step) => (
              <span key={step} className="rounded-md border bg-secondary px-3 py-2 text-secondary-foreground">
                {step}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-4">
          {isKo ? "핵심 모듈 구현" : "Core Modules"}
        </h2>
        <div className="space-y-4">
          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-3">
              {isKo ? "식재료 객체 인식 - YOLOv8l" : "Ingredient Detection - YOLOv8l"}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
              {(isKo
                ? [
                    "클립코리아 크롤링과 직접 촬영으로 데이터를 수집했고, 47개 클래스 34,008장을 LabelImg로 직접 라벨링했다.",
                    "조도, 회전, 좌우 반전 증강을 적용해 원본 대비 2~3배 데이터 확장을 수행했다.",
                    "YOLOv5와 YOLOv8l을 비교 학습한 뒤, 불규칙한 식재료 형태에 더 유연한 YOLOv8l을 최종 선택했다.",
                  ]
                : [
                    "Collected data through web scraping and self-shot photos, then manually labeled 34,008 images across 47 classes with LabelImg.",
                    "Applied brightness, rotation, and horizontal flip augmentation to expand the dataset by roughly 2-3x.",
                    "Compared YOLOv5 and YOLOv8l, then selected YOLOv8l for its stronger handling of irregular ingredient shapes.",
                  ]).map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-3">
              {isKo ? "LLM 기반 레시피 생성 - Phi-1.5" : "LLM Recipe Generation - Phi-1.5"}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
              {(isKo
                ? [
                    "YOLO가 인식한 클래스명을 식재료 목록으로 정리해 정형화된 프롬프트에 삽입했다.",
                    "Hugging Face 기반 microsoft/phi-1.5 추론 파이프라인을 구성해 레시피 텍스트를 생성했다.",
                    "Fine-tuning 없이 Prompt Engineering만으로 레시피 추천 출력 형식을 안정화했다.",
                  ]
                : [
                    "Converted YOLO detections into ingredient lists and inserted them into a structured prompt.",
                    "Built a Hugging Face inference pipeline around microsoft/phi-1.5 to generate recipe text.",
                    "Stabilized the recipe output format through prompt engineering without fine-tuning.",
                  ]).map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-3">
              {isKo ? "모델 비교 및 성능" : "Model Comparison & Performance"}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm">
                <thead>
                  <tr className="border-b text-left text-xs uppercase tracking-wide text-muted-foreground">
                    <th className="py-3 pr-4">{isKo ? "모델" : "Model"}</th>
                    <th className="py-3 pr-4">{isKo ? "구조 특성" : "Architecture"}</th>
                    <th className="py-3 pr-4">Precision</th>
                    <th className="py-3 pr-4">mAP@50</th>
                    <th className="py-3 pr-4">mAP@0.5:0.95</th>
                    <th className="py-3">{isKo ? "학습 안정성" : "Training Stability"}</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {[
                    [isKo ? "YOLOv5" : "YOLOv5", isKo ? "Anchor 기반, 안정적" : "Anchor-based, stable", isKo ? "양호" : "Good", isKo ? "양호" : "Good", isKo ? "개선 여지" : "Room to improve", isKo ? "매우 우수" : "Excellent"],
                    [isKo ? "YOLOv8l" : "YOLOv8l", isKo ? "Anchor-free, 유연성 높음" : "Anchor-free, flexible", isKo ? "높음" : "Higher", "≈ 0.55", isKo ? "개선 여지" : "Room to improve", isKo ? "안정적 수렴" : "Stable convergence"],
                  ].map((row, index) => (
                    <tr key={row[0]} className={index === 1 ? "border-b border-border/60 bg-accent/5 text-foreground" : "border-b border-border/60"}>
                      <td className="py-3 pr-4 font-medium">{row[0]}</td>
                      <td className="py-3 pr-4">{row[1]}</td>
                      <td className="py-3 pr-4">{row[2]}</td>
                      <td className="py-3 pr-4">{row[3]}</td>
                      <td className="py-3 pr-4">{row[4]}</td>
                      <td className="py-3">{row[5]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              {isKo
                ? "YOLOv8l은 불규칙한 식재료 형태에 더 유연하게 대응해 최종 채택되었다. 두 모델 모두 Recall 및 mAP@0.5:0.95는 추가 개선 여지가 있다."
                : "YOLOv8l was selected for its flexibility with irregular ingredient shapes. Both models still leave room for improvement in recall and mAP@0.5:0.95."}
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-4">
          {isKo ? "배운 것들" : "Lessons Learned"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lessons.map((lesson) => (
            <div key={lesson} className="rounded-xl border bg-card p-5 text-sm text-muted-foreground leading-relaxed">
              {lesson}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-4">
          {isKo ? "참고 문헌" : "References"}
        </h2>
        <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
          {references.map((reference, index) => (
            <p key={reference}>
              <span className="mr-2 text-accent">[{index + 1}]</span>
              {reference}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang } = useLanguage();
  const project = projects.find((p) => p.slug === slug);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [slug]);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 480);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold text-foreground mb-4">
            {t("프로젝트를 찾을 수 없습니다", "Project not found")}
          </h1>
          <Link to="/" className="text-accent hover:underline">
            {t("← 홈으로 돌아가기", "← Back to home")}
          </Link>
        </div>
      </div>
    );
  }

  const title = t(project.title, project.titleEn || project.title);
  const description = t(project.descriptionKo || project.description, project.description);
  const details = lang === "ko" ? (project.detailsKo || project.details) : project.details;
  const role = t(project.roleKo || project.role, project.role);
  const isSwimwearProject = project.slug === "swimwear-size-recommendation-model";
  const isAiRecipeProject = project.slug === "ai-recipe-recommendation-system";

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-card border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("홈으로", "Back to Home")}
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-5 sm:pt-6">
        <nav className="flex items-center gap-1.5 text-[11px] sm:text-xs text-muted-foreground overflow-x-auto whitespace-nowrap pb-1">
          <Link to="/" className="hover:text-foreground transition-colors">
            {t("홈", "Home")}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">{title}</span>
        </nav>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-5 sm:mb-6 leading-tight break-words">
            {title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 mb-8 sm:mb-10 pb-8 sm:pb-10 border-b">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 text-accent" />
              {project.period}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="w-4 h-4 text-accent" />
              {role}
            </div>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 sm:mb-10 break-words">{description}</p>

          {isSwimwearProject ? (
            <div className="mb-10 sm:mb-12">
              <SwimwearSizeRecommendationContent lang={lang} />
            </div>
          ) : isAiRecipeProject ? (
            <div className="mb-10 sm:mb-12">
              <AiRecipeRecommendationContent lang={lang} />
            </div>
          ) : (
            <>
              <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-5 sm:mb-6">
                {t("상세 내용", "Details")}
              </h2>
              <ul className="space-y-4 mb-10 sm:mb-12">
                {details.map((detail, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                    className="flex gap-3 text-sm sm:text-base text-muted-foreground leading-relaxed break-words"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    {detail}
                  </motion.li>
                ))}
              </ul>
            </>
          )}

          <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-4">
            {t("기술 스택", "Tech Stack")}
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span key={tech} className="px-3 py-1.5 bg-secondary text-secondary-foreground text-xs sm:text-sm font-medium rounded-md border border-border/50">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {showScrollTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border bg-card/95 text-foreground shadow-lg backdrop-blur transition-colors hover:bg-card"
          aria-label={t("맨 위로 이동", "Scroll to top")}
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

export default ProjectDetail;
