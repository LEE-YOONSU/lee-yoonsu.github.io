export interface ResearchExperience {
  slug: string;
  title: string;
  titleKo?: string;
  summary: string;
  summaryKo?: string;
  image: string;
  tags: string[];
  period: string;
  role: string;
  roleKo?: string;
  details: string[];
  detailsKo?: string[];
  techStack: string[];
}

export interface ResearchInterest {
  title: string;
  titleKo?: string;
  description: string;
  descriptionKo?: string;
  iconName: "Eye" | "Route" | "Navigation";
}

export const researchExperiences: ResearchExperience[] = [
  {
    slug: "vision-autonomous-flight",
    title: "Vision-based Autonomous Flight System Development",
    titleKo: "비전 기반 자율비행 시스템 개발",
    summary:
      "Computer vision and autonomy software for stable UAV flight with perception-driven decision making.",
    summaryKo:
      "인식 기반 의사결정을 통한 안정적인 UAV 비행을 위한 컴퓨터 비전 및 자율 소프트웨어.",
    image: "https://lee-yoonsu.github.io/assets/images/unnamed.png",
    tags: ["Deep Learning", "Road Recognition", "Path Planning"],
    period: "2023 - 2024",
    role: "Lead Researcher",
    roleKo: "연구 책임자",
    details: [
      "Developed autonomous flight system for UAVs based on deep learning road recognition and path planning algorithms.",
      "Implemented real-time perception pipeline using convolutional neural networks for road segmentation from aerial imagery.",
      "Designed and integrated path planning module that generates safe flight trajectories based on perceived road geometry.",
      "Achieved stable autonomous flight in outdoor test environments with GPS-aided navigation and vision-based correction.",
    ],
    detailsKo: [
      "딥러닝 기반 도로 인식 및 경로 계획 알고리즘을 활용한 UAV 자율비행 시스템을 개발했습니다.",
      "CNN 기반 도로 세그멘테이션 모델을 학습시켜 항공 영상에서 실시간으로 도로를 인식합니다.",
      "인식된 도로 기하학을 기반으로 안전한 비행 경로를 생성하는 경로 계획 모듈을 설계하고 통합했습니다.",
      "GPS 보조 내비게이션과 비전 기반 보정을 결합하여 야외 테스트 환경에서 안정적인 자율비행을 달성했습니다.",
    ],
    techStack: ["Python", "PyTorch", "OpenCV", "ROS", "MAVROS", "PX4"],
  },
  {
    slug: "non-gps-swarm",
    title: "Non-GPS Swarm System Development",
    titleKo: "비GPS 군집 시스템 개발",
    summary:
      "Localization and coordination research for multi-agent drone operation in GPS-denied environments using UWB-based indoor positioning.",
    summaryKo:
      "UWB 기반 실내 측위를 활용한 GPS 음영 환경에서의 다중 드론 위치 추정 및 군집 제어 연구.",
    image: "https://lee-yoonsu.github.io/assets/images/unnamed%20(1).png",
    tags: ["UWB", "Swarm Control", "Indoor Positioning"],
    period: "2024",
    role: "Researcher",
    roleKo: "연구원",
    details: [
      "Researched UWB (Ultra-Wideband) based indoor positioning system for drone localization in GPS-denied environments.",
      "Developed multi-agent coordination algorithms for swarm drone formation control.",
      "Implemented communication protocols between multiple drones for synchronized operations.",
      "Tested system in indoor environments demonstrating reliable positioning accuracy within centimeter-level precision.",
    ],
    detailsKo: [
      "GPS 음영 환경에서의 드론 위치 추정을 위한 UWB 기반 실내 측위 시스템을 연구했습니다.",
      "군집 드론 편대 제어를 위한 다중 에이전트 협조 알고리즘을 개발했습니다.",
      "동기화된 작전을 위한 다중 드론 간 통신 프로토콜을 구현했습니다.",
      "실내 환경에서 센티미터 수준의 정확도를 달성하는 시스템을 테스트했습니다.",
    ],
    techStack: ["Python", "UWB Modules", "ROS2", "C++", "MQTT"],
  },
  {
    slug: "deep-learning-reconnaissance",
    title: "Deep Learning-based Reconnaissance System",
    titleKo: "딥러닝 기반 정찰 시스템",
    summary:
      "Deep learning based aerial reconnaissance workflows for scene understanding and mission support using modern object detection models.",
    summaryKo:
      "최신 객체 탐지 모델을 활용한 딥러닝 기반 항공 정찰 워크플로우.",
    image: "https://lee-yoonsu.github.io/assets/images/unnamed%20(2).png",
    tags: ["Computer Vision", "Object Detection", "Real-time"],
    period: "2023 - 2024",
    role: "Developer",
    roleKo: "개발자",
    details: [
      "Implemented a reconnaissance system utilizing modern object detection models (YOLOv8) for real-time surveillance from aerial platforms.",
      "Developed custom training pipeline for domain-specific object detection targeting military and surveillance use-cases.",
      "Optimized inference pipeline for edge deployment on drone-mounted computing hardware.",
      "Integrated detection results with mapping system for real-time situational awareness display.",
    ],
    detailsKo: [
      "최신 객체 탐지 모델(YOLOv8)을 활용한 실시간 항공 정찰 시스템을 구현했습니다.",
      "군사 및 감시 유즈케이스에 특화된 도메인 맞춤 객체 탐지 학습 파이프라인을 개발했습니다.",
      "드론 탑재 엣지 컴퓨팅 하드웨어에서의 배포를 위해 추론 파이프라인을 최적화했습니다.",
      "실시간 상황 인식 디스플레이를 위해 탐지 결과를 매핑 시스템과 통합했습니다.",
    ],
    techStack: ["Python", "PyTorch", "YOLOv8", "TensorRT", "OpenCV"],
  },
];

export const researchInterests: ResearchInterest[] = [
  {
    iconName: "Eye",
    title: "Vision-Based Perception",
    titleKo: "비전 기반 인식",
    description:
      "Perception pipelines that connect object understanding, scene interpretation, and robot action in complex environments.",
    descriptionKo:
      "복잡한 환경에서 객체 이해, 장면 해석, 로봇 행동을 연결하는 인식 파이프라인.",
  },
  {
    iconName: "Route",
    title: "Motion Planning",
    titleKo: "경로 계획",
    description:
      "Trajectory generation and decision logic for safe movement through constrained and changing spaces.",
    descriptionKo:
      "제약된 변화하는 공간에서 안전한 이동을 위한 궤적 생성 및 의사결정 로직.",
  },
  {
    iconName: "Navigation",
    title: "Autonomous Navigation & Guidance",
    titleKo: "자율 항법 및 유도",
    description:
      "Navigation strategies that fuse path reasoning, guidance, and robust execution for mobile robotic systems.",
    descriptionKo:
      "경로 추론, 유도, 강건한 실행을 융합하는 이동 로봇 시스템을 위한 항법 전략.",
  },
];
