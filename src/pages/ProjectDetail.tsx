import { Link, useParams } from "react-router-dom";
import CaseStudyDetail, { type CaseStudyData, type LocalizedText } from "@/components/CaseStudyDetail";
import { projects } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";

const text = (ko: string, en: string): LocalizedText => ({ ko, en });

const projectStory: Record<string, Omit<CaseStudyData, "title" | "summary" | "period" | "role" | "tech" | "image" | "imageAlt" | "metrics" | "details">> = {
  webfolio: {
    buildTitle: text("제품 흐름과 시스템", "Product flow & system"),
    stepsTitle: text("사용자가 발행하기까지", "From upload to publish"),
    resultsTitle: text("제품으로 완성한 범위", "What shipped"),
    notesTitle: text("운영을 위해 설계한 것", "Designed for operations"),
    problem: text("이력서는 정보가 압축되어 있지만, 채용 담당자가 실제 작업 방식과 결과를 파악하기 어렵습니다. 기존 포트폴리오 제작 도구는 편집과 배포 과정도 복잡했습니다.", "Resumes compress information but make it difficult to understand how someone works and what they achieved. Existing portfolio tools also made editing and publishing unnecessarily complex."),
    goal: text("PDF 또는 DOCX 이력서를 올리면 약 30초 안에 직군별 포트폴리오 초안을 만들고, 블록 편집 후 즉시 공개할 수 있는 제품을 완성하는 것이 목표였습니다.", "The goal was a product that turns a PDF or DOCX resume into a role-specific portfolio draft in about 30 seconds, then supports block editing and instant publishing."),
    ownership: text("제품 기획, UX와 템플릿 디자인, 프론트엔드, Supabase 백엔드, AI 분석, 구독 결제, 배포와 운영 설계를 1인으로 담당했습니다.", "I owned product planning, UX and templates, frontend, Supabase backend, AI analysis, subscription billing, deployment, and operations."),
    steps: [
      { title: text("이력서 업로드", "Upload resume"), description: text("PDF·DOCX를 올리고 직군별 템플릿을 선택합니다.", "Upload a PDF or DOCX and select a role-specific template.") },
      { title: text("초안 생성", "Generate draft"), description: text("AI 분석 결과와 템플릿 데이터로 워크스페이스를 구성합니다.", "Build a workspace from AI analysis and template data.") },
      { title: text("블록 편집", "Edit blocks"), description: text("섹션, 프로젝트, 스킬을 인라인으로 수정합니다.", "Edit sections, projects, and skills inline.") },
      { title: text("공개 발행", "Publish"), description: text("고유 URL로 포트폴리오를 바로 공개합니다.", "Publish the portfolio immediately to a unique URL.") },
    ],
    links: [{ label: text("Webfolio 열기", "Open Webfolio"), url: "https://getwebfolio.vercel.app/" }],
    results: [
      { value: "30 sec", label: text("이력서에서 초안 생성", "Resume-to-draft generation") },
      { value: "16", label: text("직군별 템플릿", "Role-specific templates") },
      { value: "6", label: text("Supabase Edge Functions", "Supabase Edge Functions") },
    ],
    notes: [
      text("사용량 제한과 권한 검사는 브라우저가 아닌 데이터베이스 수준에서 강제해 AI 호출 비용과 데이터 접근을 함께 통제했습니다.", "Usage limits and permission checks are enforced at the database level rather than in the browser, controlling both AI cost and data access."),
      text("업로드, 초안 생성, 블록 편집, 발행을 하나의 흐름으로 묶어 AI가 만든 초안을 고치고 공개하는 과정의 마찰을 줄였습니다.", "Upload, draft generation, block editing, and publishing form one continuous flow, reducing friction between an AI draft and a live portfolio."),
      text("에셋 소유권 검사, 웹훅 처리, 고아 파일 정리까지 설계해 기능 출시 이후에도 서비스를 운영할 수 있도록 했습니다.", "Asset ownership checks, webhook handling, and orphaned-file cleanup keep the service operable after launch, not just feature-complete."),
    ],
    next: { label: text("다중 UAV·UGV 수색·구조", "Multi-Robot Search & Rescue"), route: "/project/multi-robot-search-rescue" },
  },
  "multi-robot-search-rescue": {
    buildTitle: text("임무 아키텍처", "Mission architecture"),
    stepsTitle: text("6대가 협업하는 순서", "How six robots coordinate"),
    resultsTitle: text("장애 주입과 임무 검증", "Fault injection & mission validation"),
    notesTitle: text("안정성을 만든 설계 판단", "Design decisions behind reliability"),
    problem: text("여러 대의 UAV와 UGV가 같은 임무를 수행할 때 중복 수색, 상태 충돌, 한 기체의 실패가 전체 임무 중단으로 이어지는 문제가 있었습니다.", "Multi-UAV and UGV missions risk duplicate search coverage, state conflicts, and full mission failure when a single vehicle fails."),
    goal: text("수색, 조난자 확인, 구조 로봇 출동, 전 기체 복귀까지를 하나의 Behavior Tree로 자동화하고 장애 상황에서도 임무를 완수하도록 설계했습니다.", "The goal was to automate search, victim confirmation, rescue dispatch, and return in one Behavior Tree while still completing the mission under injected failures."),
    ownership: text("전체 임무 아키텍처, Behavior Tree, Voronoi 영역 분할, ArUco 인식, ROS 2 연동, 테스트와 장애 주입 검증을 1인으로 구현했습니다.", "I built the mission architecture, Behavior Tree, Voronoi partitioning, ArUco detection, ROS 2 integration, tests, and fault-injection validation."),
    steps: [
      { title: text("UGV1 이동", "Move UGV1"), description: text("지정 위치에 도착해 임무 시작 조건을 만듭니다.", "Reach the staging point and satisfy mission start conditions.") },
      { title: text("ID 판독", "Read ID"), description: text("UAV1이 UGV 상판 마커를 판독합니다.", "UAV1 reads the marker mounted on the UGV.") },
      { title: text("병렬 수색", "Parallel search"), description: text("UAV2-4가 분할된 영역을 동시에 탐색합니다.", "UAV2-4 search their partitioned regions in parallel.") },
      { title: text("발견 확정", "Confirm target"), description: text("최초 발견자를 확정하고 나머지 수색을 종료합니다.", "Confirm the first finder and cancel remaining searches.") },
      { title: text("구조·복귀", "Rescue & return"), description: text("UGV2가 확정 좌표로 이동한 뒤 6대가 복귀합니다.", "UGV2 moves to the confirmed coordinates, then all six return.") },
    ],
    demo: {
      title: text("다중 UAV·UGV 수색·구조 시연", "Multi-Robot Search & Rescue Demo"),
      caption: text("무작위 조난자 배치에서 병렬 수색, 최초 발견자 확정, 구조 UGV 출동, 전 기체 복귀까지의 전체 흐름입니다.", "The complete flow from parallel search and first-finder selection to rescue dispatch and return under randomized victim placement."),
      url: "https://drive.google.com/file/d/1_tYhS0a5AM_7B3kASE2AdapBGzAstfv-/view?usp=drive_link",
      embedUrl: "https://drive.google.com/file/d/1_tYhS0a5AM_7B3kASE2AdapBGzAstfv-/preview",
    },
    results: [
      { value: "275", label: text("자동 테스트", "Automated tests"), detail: text("전체 테스트 통과, 실패 0건", "All tests passed with zero failures") },
      { value: "3/3", label: text("무작위 배치 임무 성공", "Randomized mission success") },
      { value: "≤ 0.010 m", label: text("ArUco 위치 추정 오차", "ArUco localization error") },
      { value: "0.07 m", label: text("UGV2 구조 지점 도착 오차", "UGV2 rescue-point arrival error") },
    ],
    notes: [
      text("역할 분담, 상태 동기화, 실패 복구 규칙을 먼저 정의해 한 기체의 실패가 전체 임무 중단으로 번지지 않도록 했습니다.", "Role assignment, state synchronization, and recovery rules were defined first so a single vehicle failure would not halt the whole mission."),
      text("무작위 조난자 배치와 장애 주입을 자동화해 정상 시나리오에서는 드러나지 않는 경계 조건을 반복적으로 검증했습니다.", "Randomized victim placement and fault injection were automated to repeatedly exercise edge cases that nominal runs would not reveal."),
      text("AI 코딩 에이전트를 활용하되, 단계별 gate와 275개 자동 테스트를 통과한 뒤에만 다음 단계로 넘어가도록 개발을 관리했습니다.", "AI coding agents were used under stage gates: each stage advanced only after passing the 275-test automated suite."),
    ],
    previous: { label: text("Webfolio", "Webfolio"), route: "/project/webfolio" },
    next: { label: text("수영복 사이즈 추천", "Swimwear Size Recommendation"), route: "/project/swimwear-size-recommendation-model" },
  },
  "swimwear-size-recommendation-model": {
    buildTitle: text("데이터와 모델 실험", "Data & model experiments"),
    stepsTitle: text("리뷰에서 추천 결과까지", "From reviews to recommendation"),
    resultsTitle: text("모델 성능 변화", "How model performance changed"),
    notesTitle: text("실험에서 확인한 점", "What the experiments revealed"),
    problem: text("온라인 패션 반품의 주요 원인인 사이즈 불일치를 줄이기 위해, 실제 구매 리뷰에서 신체 정보와 구매 사이즈의 관계를 학습할 필요가 있었습니다.", "To reduce size mismatch, a major cause of online fashion returns, the system needed to learn the relationship between body information and purchased size from real reviews."),
    goal: text("리뷰 크롤링부터 EDA, 파생변수, 불균형 보정, 모델 비교와 앱 구현까지 이어지는 재현 가능한 추천 파이프라인을 구축했습니다.", "The goal was a reproducible recommendation pipeline spanning review scraping, EDA, feature engineering, imbalance correction, model comparison, and app delivery."),
    ownership: text("데이터 수집과 정제, EDA, Feature Engineering, 8개 모델 비교, SMOTE와 튜닝, Streamlit 프로토타입을 주도했습니다.", "I led data collection and cleaning, EDA, feature engineering, eight-model comparison, SMOTE and tuning, and the Streamlit prototype."),
    steps: [
      { title: text("리뷰 수집", "Collect reviews"), description: text("가나스윔 리뷰와 신체·구매 정보를 크롤링했습니다.", "Scraped GanaSwim reviews with body and purchase data.") },
      { title: text("정제·EDA", "Clean & explore"), description: text("결측치와 대리 구매를 제거하고 구매 패턴을 확인했습니다.", "Removed missing and proxy purchases, then analyzed buying patterns.") },
      { title: text("파생변수", "Engineer features"), description: text("성별과 상위 브랜드 변수를 추가했습니다.", "Added gender and top-brand features.") },
      { title: text("모델 비교", "Compare models"), description: text("동일 조건에서 8개 분류 모델을 평가했습니다.", "Evaluated eight classifiers under matched conditions.") },
      { title: text("앱 구현", "Build app"), description: text("최종 LGBM 모델을 Streamlit 입력 흐름으로 연결했습니다.", "Connected the final LGBM model to a Streamlit input flow.") },
    ],
    links: [{ label: text("상세 PDF", "Detailed PDF"), url: "https://drive.google.com/file/d/11ISfl9Rp_KVxi37MVX9rT6V4YJQaMyBM/view?usp=drive_link" }],
    results: [
      { value: "0.50 → 0.79", label: text("최종 정확도", "Final accuracy"), detail: text("Feature Engineering, SMOTE, GridSearchCV 적용", "After feature engineering, SMOTE, and GridSearchCV") },
      { value: "8", label: text("비교한 분류 모델", "Classifiers compared") },
      { value: "+5-7%p", label: text("브랜드 변수 적용 효과", "Lift from brand features") },
      { value: "1", label: text("Streamlit 추천 프로토타입", "Streamlit recommendation prototype") },
    ],
    notes: [
      text("브랜드 변수의 효과는 EDA만으로는 판단하기 어려워 동일 조건의 비교 실험으로 검증했고, 정확도가 5-7%p 향상되는 것을 확인했습니다.", "The effect of brand features was unclear from EDA alone, so it was tested in matched experiments, which showed a 5-7 point accuracy lift."),
      text("SMOTE는 학습 데이터에만 적용해 데이터 누수 없이 실제 일반화 성능을 평가했습니다.", "SMOTE was applied only to the training split so generalization could be measured without leakage."),
      text("정확도뿐 아니라 추천 근거를 설명할 수 있어야 사용자가 결과를 신뢰할 수 있다는 점을 확인했습니다.", "Accuracy alone was not enough: users need an explainable recommendation to trust the result."),
    ],
    previous: { label: text("다중 UAV·UGV 수색·구조", "Multi-Robot Search & Rescue"), route: "/project/multi-robot-search-rescue" },
    next: { label: text("AI 레시피 추천", "AI Recipe Recommendation"), route: "/project/ai-recipe-recommendation-system" },
  },
  "ai-recipe-recommendation-system": {
    buildTitle: text("Vision과 LLM 연결", "Connecting vision and an LLM"),
    stepsTitle: text("이미지에서 레시피까지", "From image to recipe"),
    resultsTitle: text("데이터와 통합 결과", "Dataset & integration results"),
    notesTitle: text("두 모델을 연결하며 내린 판단", "Decisions behind the integration"),
    problem: text("보유한 식재료를 일일이 검색해야 하는 불편을 줄이려면, 이미지 인식 결과가 단순 표시에서 끝나지 않고 실제 레시피 생성으로 이어져야 했습니다.", "To reduce manual ingredient searching, visual recognition needed to lead to an actionable recipe rather than stop at detection."),
    goal: text("이미지 한 장에서 식재료를 탐지하고, 탐지 결과를 구조화된 프롬프트로 바꿔 레시피를 생성하는 End-to-End AI 시스템을 구현했습니다.", "The goal was an end-to-end AI system that detects ingredients from one image and turns detections into a structured prompt for recipe generation."),
    ownership: text("이미지 수집과 라벨링, 데이터 증강, YOLOv5·YOLOv8l 비교, Phi-1.5 프롬프트 설계, Streamlit 서비스 흐름을 주도했습니다.", "I led image collection and labeling, augmentation, YOLOv5 and YOLOv8l comparison, Phi-1.5 prompt design, and the Streamlit service flow."),
    steps: [
      { title: text("데이터 수집", "Collect data"), description: text("웹 크롤링과 직접 촬영으로 식재료 이미지를 모았습니다.", "Collected ingredient images through scraping and self-shot photos.") },
      { title: text("라벨링·증강", "Label & augment"), description: text("47개 클래스를 Bounding Box로 라벨링하고 증강했습니다.", "Labeled 47 classes with bounding boxes and augmented the data.") },
      { title: text("객체 탐지", "Detect objects"), description: text("YOLOv5와 YOLOv8l을 비교해 최종 모델을 선택했습니다.", "Compared YOLOv5 and YOLOv8l to select the final detector.") },
      { title: text("프롬프트 구성", "Build prompt"), description: text("탐지 클래스명을 레시피 출력 형식으로 구조화했습니다.", "Structured detected class names into the recipe output format.") },
      { title: text("레시피 생성", "Generate recipe"), description: text("Phi-1.5가 재료, 순서, 조리 시간을 생성합니다.", "Phi-1.5 generates ingredients, steps, and cooking time.") },
    ],
    links: [{ label: text("상세 PDF", "Detailed PDF"), url: "https://drive.google.com/file/d/1j1iQLA8jAA4flyipMBiWXz2x4SLkr4tZ/view?usp=drive_link" }],
    results: [
      { value: "34,008", label: text("학습 이미지", "Training images"), detail: text("직접 수집·라벨링·증강", "Collected, labeled, and augmented") },
      { value: "47", label: text("식재료 클래스", "Ingredient classes") },
      { value: "≈ 0.55", label: text("YOLOv8l mAP@50", "YOLOv8l mAP@50") },
      { value: "E2E", label: text("식재료 인식에서 레시피 생성", "Detection-to-recipe pipeline") },
    ],
    notes: [
      text("모델 구조보다 데이터 품질이 성능 상한을 결정한다고 보고, 이미지 수집·라벨링·증강에 가장 많은 시간을 투자했습니다.", "Treating data quality as the performance ceiling, most of the effort went into image collection, labeling, and augmentation."),
      text("YOLO 탐지 결과를 LLM 입력 규격으로 변환하는 인터페이스를 명확히 정의해 서로 다른 두 모델을 안정적으로 연결했습니다.", "A clearly defined interface converts YOLO detections into the LLM input schema, keeping the two models reliably connected."),
      text("정확도와 함께 GPU 제약과 서비스 응답 시간을 고려해 최종 모델을 선택했습니다.", "The final model was chosen by weighing GPU constraints and response time alongside accuracy."),
    ],
    previous: { label: text("수영복 사이즈 추천", "Swimwear Size Recommendation"), route: "/project/swimwear-size-recommendation-model" },
    next: { label: text("Vision 자율비행", "Vision Autonomous Flight"), route: "/research/vision-autonomous-flight" },
  },
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const project = projects.find((item) => item.slug === slug);
  const story = slug ? projectStory[slug] : undefined;

  if (!project || !story) {
    return (
      <main className="section-shell flex min-h-screen flex-col items-start justify-center gap-6">
        <h1 className="text-4xl font-extrabold">{t("프로젝트를 찾을 수 없습니다.", "Project not found.")}</h1>
        <Link to="/#projects" className="text-sm font-semibold text-accent">{t("프로젝트로 돌아가기", "Back to projects")}</Link>
      </main>
    );
  }

  const detailsKo = project.detailsKo || project.details;
  const data: CaseStudyData = {
    ...story,
    title: text(project.title, project.titleEn || project.title),
    summary: text(project.descriptionKo || project.description, project.description),
    period: project.period,
    role: text(project.roleKo || project.role, project.role),
    tech: project.tech,
    image: project.images?.[0] || "",
    imageAlt: text(`${project.title} 프로젝트 화면`, `${project.titleEn || project.title} project screen`),
    metrics: (project.metrics || []).slice(0, 3).map((metric) => ({ value: metric.value, label: text(metric.labelKo || metric.label, metric.label) })),
    details: project.details.map((detail, index) => text(detailsKo[index] || detail, detail)),
  };

  return <CaseStudyDetail data={data} />;
};

export default ProjectDetail;
