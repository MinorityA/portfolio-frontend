
export interface FPost {
    id: number;
    title: string;
    content: string;
    created_at: Date;
    updated_at: Date;
  }


export const projectsData = [
    {
      title: "Personal Web",
      description:
        "I built this web in which I could show my experience, and also write blogs. This web was dockerized and deloyed by AWS.",
      tags: ["React", "Next.js", "PostgreSQL", "Tailwind", "Prisma", "Docker", "AWS"],
      imageUrl: "/myweb.png"
    },
    {
      title: "Vision System ",
      description:
        "I built a vision system for a robot which could detect basketballs by a detection model deployed on edge device and localize by accelerated ORB-SLAM",
      tags: ["OpenCV", "Pytorch", "Edge Device", "TensorRT", "ROS", "CUDA", "C++"],
      imageUrl: "/visionsys.png"
    },
    {
      title: "Distributed System Lab of MIT 6.824",
      description:
        "Ues Go to realize some functions of distributed system, including Raft and Map-Reduce",
      tags: ["GO", "concurrency", "Map-Reduce", "Raft"],
      imageUrl: "/distributed.png"
    },
  ] as const;

export const skillData = [
  "C++",
  "Python",
  "Go",
  "Pytorch",
  "ROS",
  "Docker",
  "AWS",
  "JavaScript",
  "React",
  "PostgreSQL",
  "Prisma",
  "Next.js",
] as const;