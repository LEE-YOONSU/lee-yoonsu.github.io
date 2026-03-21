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
    slug: "vision-autonomous-flight-system",
    title: "Vision 자율비행 시스템 개발",
    titleEn: "Vision Autonomous Flight System",
    description:
      "Developed an autonomous flight system for UAVs based on deep learning road recognition and path planning algorithms.",
    descriptionKo:
      "딥러닝 기반 도로 인식 및 경로 계획 알고리즘을 활용한 UAV 자율비행 시스템을 개발했습니다.",
    tech: ["Deep Learning", "Road Recognition", "Path Planning"],
    period: "2023 - 2024",
    role: "Lead Developer",
    roleKo: "리드 개발자",
    details: [
      "Developed autonomous flight system for UAVs based on deep learning road recognition and path planning algorithms.",
      "Implemented real-time perception pipeline using CNN for road segmentation from aerial imagery.",
      "Designed path planning module that generates safe flight trajectories based on perceived road geometry.",
      "Achieved stable autonomous flight in outdoor test environments with GPS-aided navigation and vision-based correction.",
    ],
    detailsKo: [
      "딥러닝 기반 도로 인식 알고리즘을 활용한 UAV 자율비행 시스템을 개발했습니다.",
      "CNN 기반 도로 세그멘테이션 모델을 학습시켜 항공 영상에서 실시간으로 도로를 인식합니다.",
      "인식된 도로 기하학을 기반으로 안전한 비행 경로를 생성하는 경로 계획 모듈을 설계하고 통합했습니다.",
      "GPS 보조 내비게이션과 비전 기반 보정을 결합하여 야외 테스트 환경에서 안정적인 자율비행을 달성했습니다.",
    ],
    images: ["https://lee-yoonsu.github.io/assets/images/unnamed.png"],
  },
  {
    slug: "deep-learning-reconnaissance",
    title: "딥러닝 기반 정찰 시스템 개발",
    titleEn: "Deep Learning Reconnaissance System",
    description:
      "Implemented a reconnaissance system utilizing modern object detection models for real-time surveillance from aerial platforms.",
    descriptionKo:
      "최신 객체 탐지 모델을 활용한 실시간 항공 정찰 시스템을 구현했습니다.",
    tech: ["Computer Vision", "Object Detection", "Real-time"],
    period: "2023 - 2024",
    role: "Developer",
    roleKo: "개발자",
    details: [
      "Implemented reconnaissance system utilizing YOLOv8 for real-time surveillance from aerial platforms.",
      "Developed custom training pipeline for domain-specific object detection.",
      "Optimized inference pipeline for edge deployment on drone-mounted computing hardware.",
      "Integrated detection results with mapping system for real-time situational awareness.",
    ],
    detailsKo: [
      "최신 객체 탐지 모델(YOLOv8)을 활용한 실시간 항공 정찰 시스템을 구현했습니다.",
      "군사 및 감시 유즈케이스에 특화된 도메인 맞춤 객체 탐지 학습 파이프라인을 개발했습니다.",
      "드론 탑재 엣지 컴퓨팅 하드웨어에서의 배포를 위해 추론 파이프라인을 최적화했습니다.",
      "실시간 상황 인식 디스플레이를 위해 탐지 결과를 매핑 시스템과 통합했습니다.",
    ],
    images: ["https://lee-yoonsu.github.io/assets/images/unnamed%20(2).png"],
  },
];
