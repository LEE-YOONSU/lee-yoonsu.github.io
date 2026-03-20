export interface ResearchExperience {
  slug: string;
  title: string;
  summary: string;
  image: string;
  tags: string[];
  period: string;
  role: string;
  details: string[];
  techStack: string[];
}

export interface ResearchInterest {
  title: string;
  description: string;
  iconName: "Eye" | "Route" | "Navigation";
}

export const researchExperiences: ResearchExperience[] = [
  {
    slug: "vision-autonomous-flight",
    title: "Vision-based Autonomous Flight System Development",
    summary:
      "Computer vision and autonomy software for stable UAV flight with perception-driven decision making.",
    image: "https://lee-yoonsu.github.io/assets/images/unnamed.png",
    tags: ["Deep Learning", "Road Recognition", "Path Planning"],
    period: "2023 - 2024",
    role: "Lead Researcher",
    details: [
      "Developed autonomous flight system for UAVs based on deep learning road recognition and path planning algorithms.",
      "Implemented real-time perception pipeline using convolutional neural networks for road segmentation from aerial imagery.",
      "Designed and integrated path planning module that generates safe flight trajectories based on perceived road geometry.",
      "Achieved stable autonomous flight in outdoor test environments with GPS-aided navigation and vision-based correction.",
    ],
    techStack: ["Python", "PyTorch", "OpenCV", "ROS", "MAVROS", "PX4"],
  },
  {
    slug: "non-gps-swarm",
    title: "Non-GPS Swarm System Development",
    summary:
      "Localization and coordination research for multi-agent drone operation in GPS-denied environments using UWB-based indoor positioning.",
    image: "https://lee-yoonsu.github.io/assets/images/unnamed%20(1).png",
    tags: ["UWB", "Swarm Control", "Indoor Positioning"],
    period: "2024",
    role: "Researcher",
    details: [
      "Researched UWB (Ultra-Wideband) based indoor positioning system for drone localization in GPS-denied environments.",
      "Developed multi-agent coordination algorithms for swarm drone formation control.",
      "Implemented communication protocols between multiple drones for synchronized operations.",
      "Tested system in indoor environments demonstrating reliable positioning accuracy within centimeter-level precision.",
    ],
    techStack: ["Python", "UWB Modules", "ROS2", "C++", "MQTT"],
  },
  {
    slug: "deep-learning-reconnaissance",
    title: "Deep Learning-based Reconnaissance System",
    summary:
      "Deep learning based aerial reconnaissance workflows for scene understanding and mission support using modern object detection models.",
    image: "https://lee-yoonsu.github.io/assets/images/unnamed%20(2).png",
    tags: ["Computer Vision", "Object Detection", "Real-time"],
    period: "2023 - 2024",
    role: "Developer",
    details: [
      "Implemented a reconnaissance system utilizing modern object detection models (YOLOv8) for real-time surveillance from aerial platforms.",
      "Developed custom training pipeline for domain-specific object detection targeting military and surveillance use-cases.",
      "Optimized inference pipeline for edge deployment on drone-mounted computing hardware.",
      "Integrated detection results with mapping system for real-time situational awareness display.",
    ],
    techStack: ["Python", "PyTorch", "YOLOv8", "TensorRT", "OpenCV"],
  },
];

export const researchInterests: ResearchInterest[] = [
  {
    iconName: "Eye",
    title: "Vision-Based Perception",
    description:
      "Perception pipelines that connect object understanding, scene interpretation, and robot action in complex environments.",
  },
  {
    iconName: "Route",
    title: "Motion Planning",
    description:
      "Trajectory generation and decision logic for safe movement through constrained and changing spaces.",
  },
  {
    iconName: "Navigation",
    title: "Autonomous Navigation & Guidance",
    description:
      "Navigation strategies that fuse path reasoning, guidance, and robust execution for mobile robotic systems.",
  },
];
