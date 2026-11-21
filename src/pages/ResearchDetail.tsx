import { Link, useParams } from "react-router-dom";
import CaseStudyDetail, { type CaseStudyData, type LocalizedText } from "@/components/CaseStudyDetail";
import { researchExperiences } from "@/data/research";
import { useLanguage } from "@/contexts/LanguageContext";

const text = (ko: string, en: string): LocalizedText => ({ ko, en });

const researchStory: Record<string, Omit<CaseStudyData, "title" | "summary" | "period" | "role" | "tech" | "image" | "imageAlt" | "details">> = {
  "vision-autonomous-flight": {
    buildTitle: text("Perception에서 Control까지", "From perception to control"),
    stepsTitle: text("비행 명령이 만들어지는 과정", "How flight commands are produced"),
    resultsTitle: text("시나리오 검증과 문제 해결", "Scenario validation & fixes"),
    notesTitle: text("통합 과정에서 중요했던 것", "What mattered in integration"),
    metrics: [
      { value: "3", label: text("Gazebo 검증 시나리오", "Gazebo validation scenarios") },
      { value: "E2E", label: text("인식에서 비행 제어", "Perception-to-control pipeline") },
      { value: "ROS 2", label: text("모듈형 시스템 구조", "Modular system architecture") },
    ],
    problem: text("많은 드론 Vision 프로젝트가 객체 인식 결과를 화면에 표시하는 단계에서 끝나며, 경로 계획과 실제 비행 제어 입력까지 연결되지 않았습니다.", "Many drone-vision projects stop at displaying detections instead of connecting perception to path planning and real flight-control inputs."),
    goal: text("카메라로 도로를 인식하고 중심선과 장애물 정보를 경로 계획에 전달한 뒤 PX4 Offboard 명령으로 이어지는 전체 파이프라인을 만들었습니다.", "The goal was a full pipeline that perceives roads, passes centerline and obstacle data to planning, and produces PX4 Offboard commands."),
    ownership: text("YOLO 기반 도로 인식, Potential Field 경로 계획, ROS 2 인터페이스, Offboard 제어 통합과 Gazebo SITL 검증을 담당했습니다.", "I owned YOLO road perception, Potential Field planning, ROS 2 interfaces, Offboard integration, and Gazebo SITL validation."),
    steps: [
      { title: text("Camera", "Camera"), description: text("RGB 영상과 Depth 거리를 입력받습니다.", "Receive RGB imagery and depth distance.") },
      { title: text("Vision", "Vision"), description: text("도로 영역을 인식하고 중심선을 추출합니다.", "Detect the road region and extract its centerline.") },
      { title: text("Planning", "Planning"), description: text("목표 벡터와 Potential Field로 경로를 안정화합니다.", "Stabilize the path using target vectors and a Potential Field.") },
      { title: text("Control", "Control"), description: text("목표 위치, 속도, Yaw 명령을 생성합니다.", "Generate target position, velocity, and yaw commands.") },
      { title: text("PX4 Offboard", "PX4 Offboard"), description: text("ROS 2로 명령을 전달하고 자세제어는 PX4가 수행합니다.", "Send commands through ROS 2 while PX4 handles attitude control.") },
    ],
    demo: {
      title: text("Vision 기반 자율비행 시연", "Vision Autonomous Flight Demo"),
      caption: text("Gazebo 커스텀 환경에서 도로 중심선을 추종하고 장애물을 회피한 뒤 원 경로로 복귀하는 과정입니다.", "Road-centerline tracking, obstacle avoidance, and path recovery in a custom Gazebo environment."),
      url: "https://drive.google.com/file/d/1qBiBtRES01zBIRXq9-9NfFgXpI64v9bd/view?usp=drive_link",
      embedUrl: "https://drive.google.com/file/d/1qBiBtRES01zBIRXq9-9NfFgXpI64v9bd/preview",
    },
    results: [
      { value: "3/3", label: text("검증 시나리오", "Validated scenarios"), detail: text("직선, 곡선, 장애물 회피", "Straight, curved, and obstacle-avoidance paths") },
      { value: "Stable", label: text("Heading 명령 연속성", "Heading command continuity"), detail: text("부호·좌표계 오류를 방향 벡터 기반 제어로 개선", "Resolved sign and frame issues with vector-based control") },
      { value: "Modular", label: text("Perception·Planning·Control 분리", "Separated perception, planning, and control") },
    ],
    notes: [
      text("인식 정확도만으로는 비행이 안정되지 않아, Perception 출력의 시간적 연속성과 좌표계 정의를 함께 정리했습니다.", "Detection accuracy alone did not stabilize flight, so the temporal continuity of perception output and the coordinate-frame definitions were aligned as well."),
      text("모듈 간 입출력 규격을 먼저 고정해 Vision, Planning, Control을 독립적으로 교체하고 디버깅할 수 있게 했습니다.", "Inter-module input and output contracts were fixed first, so perception, planning, and control could be swapped and debugged independently."),
      text("실기체 전환 전에 직선, 곡선, 회피 시나리오를 분리해 검증하며 통합 문제의 원인을 빠르게 좁혔습니다.", "Straight, curved, and avoidance scenarios were validated separately before moving to a real airframe, narrowing down integration issues quickly."),
    ],
    previous: { label: text("AI 레시피 추천", "AI Recipe Recommendation"), route: "/project/ai-recipe-recommendation-system" },
    next: { label: text("UWB 실내 다중 UAV", "UWB Indoor Multi-UAV"), route: "/research/non-gps-swarm" },
  },
  "non-gps-swarm": {
    buildTitle: text("Fake GPS 전략", "The Fake GPS strategy"),
    stepsTitle: text("UWB 좌표가 비행 입력이 되기까지", "From UWB coordinates to flight input"),
    resultsTitle: text("인천공항 현장 적용", "Incheon Airport deployment"),
    notesTitle: text("현장 트러블슈팅", "Field troubleshooting"),
    metrics: [
      { value: "14", label: text("인천공항 적용 UAV", "UAVs deployed at Incheon Airport") },
      { value: "2 × 7", label: text("동·서 구역 군집 운용", "East and west zone groups") },
      { value: "iF 2025", label: text("적용 작품 수상", "Award for the deployed installation") },
    ],
    problem: text("GPS가 닿지 않는 실내에서 Autopilot 자동비행을 사용하려면 EKF, 좌표계, 파라미터를 크게 수정해야 했고 다중 기체로 확장할수록 운용 복잡도가 증가했습니다.", "Indoor Autopilot flight normally requires substantial EKF, coordinate-frame, and parameter changes, with complexity growing further for multiple vehicles."),
    goal: text("Autopilot 내부는 수정하지 않고 UWB 로컬 좌표를 표준 GPS 입력으로 변환해 기존 Loiter와 Guided 모드를 실내에서 그대로 사용하도록 했습니다.", "The goal was to keep Autopilot internals unchanged by converting UWB local coordinates into standard GPS inputs for indoor Loiter and Guided modes."),
    ownership: text("UWB 위치 추정, 로컬-WGS84 좌표 변환, MAVLink GPS 메시지 주입, 송신 주기 튜닝, Wi-Fi Mesh 다중 기체 제어를 구현했습니다.", "I implemented UWB positioning, local-to-WGS84 conversion, MAVLink GPS injection, update-rate tuning, and Wi-Fi Mesh multi-vehicle control."),
    steps: [
      { title: text("UWB Ranging", "UWB ranging"), description: text("Anchor와 기체 Tag 사이 거리를 측정합니다.", "Measure distances between anchors and the vehicle tag.") },
      { title: text("위치 추정", "Estimate position"), description: text("이상치 제거, 필터링, 삼변측량을 수행합니다.", "Remove outliers, filter, and trilaterate position.") },
      { title: text("좌표 변환", "Transform coordinates"), description: text("로컬 x·y·z를 WGS84 위경도로 변환합니다.", "Convert local x, y, z into WGS84 coordinates.") },
      { title: text("GPS 입력", "Inject GPS"), description: text("MAVLink GPS 메시지를 FC에 10Hz로 전달합니다.", "Send MAVLink GPS messages to the FC at 10 Hz.") },
      { title: text("다중 운용", "Operate fleet"), description: text("Mesh에서 기체별 상태와 모드를 제어합니다.", "Control vehicle-specific state and modes over the mesh.") },
    ],
    demo: {
      title: text("UWB 실내 군집비행 시연", "UWB Indoor Swarm Flight Demo"),
      caption: text("인천국제공항 제2여객터미널에서 UWB 기반 위치 입력으로 다중 UAV를 자동비행시킨 적용 영상입니다.", "Deployment footage of multiple UAVs flying autonomously from UWB-derived position inputs at Incheon Airport Terminal 2."),
      url: "https://drive.google.com/file/d/1tmG9AYOmr9Kq5fifvx3XUG22dlfVjw1l/view?usp=drive_link",
      embedUrl: "https://drive.google.com/file/d/1tmG9AYOmr9Kq5fifvx3XUG22dlfVjw1l/preview",
    },
    links: [{ label: text("적용 사례 기사", "Deployment article"), url: "https://www.dronejournal.net/news/articleView.html?idxno=582" }],
    results: [
      { value: "14", label: text("동시 적용 UAV", "UAVs deployed"), detail: text("인천공항 T2 동 7대·서 7대", "Seven in the east zone and seven in the west zone") },
      { value: "10 Hz", label: text("안정화된 GPS 입력 주기", "Stabilized GPS input rate") },
      { value: "5 GHz", label: text("간섭을 줄인 Mesh 통신", "Interference-reduced mesh network") },
      { value: "iF 2025", label: text("적용 작품 수상", "Award for the deployed installation") },
    ],
    notes: [
      text("현장에서는 알고리즘보다 공항 Wi-Fi 간섭과 패킷 충돌이 더 큰 문제였고, 5GHz Mesh와 채널 분리로 통신을 안정화했습니다.", "On site, airport Wi-Fi interference and packet collisions were the bigger problem; a 5 GHz mesh with channel separation stabilized communication."),
      text("GPS 입력 주기를 FC 처리 주기에 맞춰 10Hz로 조정해 Loiter 호버링을 안정화했습니다.", "Matching the GPS input rate to FC processing at 10 Hz made Loiter hover stable."),
      text("새 위치 센서를 Autopilot 내부에 직접 결합하는 대신 표준 GPS 입력 인터페이스를 재사용해 개발과 검증 범위를 크게 줄였습니다.", "Reusing the standard GPS input interface instead of wiring a new sensor into Autopilot internals greatly reduced development and validation scope."),
    ],
    previous: { label: text("Vision 자율비행", "Vision Autonomous Flight"), route: "/research/vision-autonomous-flight" },
    next: { label: text("실시간 객체 인식 드론", "Real-Time Object Detection Drone"), route: "/research/deep-learning-reconnaissance" },
  },
  "deep-learning-reconnaissance": {
    buildTitle: text("전송과 추론을 분리한 구조", "Separating streaming and inference"),
    stepsTitle: text("기체 영상이 지상국에 표시되기까지", "From onboard video to the ground station"),
    resultsTitle: text("실외 비가시권 검증", "Outdoor BLOS validation"),
    notesTitle: text("임베디드 환경의 설계 판단", "Design decisions for embedded deployment"),
    metrics: [
      { value: "3rd", label: text("드론봇 경연대회", "Dronebot Competition") },
      { value: "BLOS", label: text("실외 비가시권 검증", "Outdoor beyond-line-of-sight validation") },
      { value: "TFLite", label: text("임베디드 추론 경량화", "Embedded inference optimization") },
    ],
    problem: text("비가시권 드론의 실시간 영상 전송과 객체 인식을 한 파이프라인에서 동시에 처리하면 전송 지연과 추론 지연이 서로 영향을 주는 문제가 있었습니다.", "Combining beyond-line-of-sight video transmission and object detection in one pipeline caused streaming and inference latency to interfere with each other."),
    goal: text("영상 전송과 객체 인식을 병렬 구조로 분리하고, Raspberry Pi에서도 실시간 추론이 가능한 원격 감시 시스템을 구현했습니다.", "The goal was a remote surveillance system with separated streaming and inference pipelines that could run real-time detection on Raspberry Pi."),
    ownership: text("시스템 아키텍처, YOLO 학습, TFLite 경량화, 카메라 이중화, 추론 오버레이와 실외 비가시권 비행 검증을 담당했습니다.", "I owned system architecture, YOLO training, TFLite optimization, dual-camera design, inference overlay, and outdoor BLOS validation."),
    steps: [
      { title: text("영상 수집", "Capture video"), description: text("USB Camera가 추론용 영상을 수집합니다.", "A USB camera captures frames for inference.") },
      { title: text("영상 전송", "Stream video"), description: text("IP Camera와 HM30이 지상국에 영상을 전송합니다.", "The IP camera and HM30 stream video to the ground station.") },
      { title: text("경량 추론", "Run inference"), description: text("TFLite YOLO가 Raspberry Pi에서 객체를 탐지합니다.", "TFLite YOLO detects objects on Raspberry Pi.") },
      { title: text("결과 오버레이", "Overlay results"), description: text("탐지 Bounding Box를 영상에 합성합니다.", "Detection bounding boxes are overlaid on video.") },
      { title: text("원격 확인", "Monitor remotely"), description: text("지상국에서 실시간 상황을 확인합니다.", "Operators monitor the live result at the ground station.") },
    ],
    results: [
      { value: "3rd", label: text("제2작전사령관배 드론봇 경연대회", "2nd Operations Command Dronebot Competition") },
      { value: "Real-time", label: text("객체 탐지 오버레이", "Object-detection overlay") },
      { value: "BLOS", label: text("실외 실비행 검증", "Outdoor real-flight validation") },
      { value: "Dual", label: text("전송·추론 카메라 분리", "Separated streaming and inference cameras") },
    ],
    notes: [
      text("모델 정확도뿐 아니라 추론 속도, 전력, 영상 전송 지연을 하나의 시스템 지표로 놓고 TFLite 경량화를 적용했습니다.", "Accuracy, inference speed, power, and streaming latency were treated as one system metric, guiding the TFLite optimization."),
      text("영상 전송과 추론을 카메라 단위로 분리해 각 병목을 독립적으로 측정하고 개선했습니다.", "Streaming and inference were split across cameras so each bottleneck could be measured and improved independently."),
      text("시뮬레이션이 아닌 실외 비가시권 비행으로 검증하며 통신 품질과 하드웨어 제약을 설계에 반영했습니다.", "Validation in outdoor BLOS flight rather than simulation brought communication quality and hardware limits into the design."),
    ],
    previous: { label: text("UWB 실내 다중 UAV", "UWB Indoor Multi-UAV"), route: "/research/non-gps-swarm" },
    next: { label: text("Webfolio", "Webfolio"), route: "/project/webfolio" },
  },
};

const ResearchDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const research = researchExperiences.find((item) => item.slug === slug);
  const story = slug ? researchStory[slug] : undefined;

  if (!research || !story) {
    return (
      <main className="section-shell flex min-h-screen flex-col items-start justify-center gap-6">
        <h1 className="text-4xl font-extrabold">{t("프로젝트를 찾을 수 없습니다.", "Project not found.")}</h1>
        <Link to="/#projects" className="text-sm font-semibold text-accent">{t("프로젝트로 돌아가기", "Back to projects")}</Link>
      </main>
    );
  }

  const detailsKo = research.detailsKo || research.details;
  const data: CaseStudyData = {
    ...story,
    title: text(research.titleKo || research.title, research.title),
    summary: text(research.summaryKo || research.summary, research.summary),
    period: research.periodKo || research.period,
    role: text(research.roleKo || research.role, research.role),
    tech: research.techStack,
    image: research.image,
    imageAlt: text(`${research.titleKo || research.title} 프로젝트 화면`, `${research.title} project screen`),
    details: research.details.map((detail, index) => text(detailsKo[index] || detail, detail)),
  };

  return <CaseStudyDetail data={data} />;
};

export default ResearchDetail;
