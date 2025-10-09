import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    title: "Big Data ETL Pipeline",
    description: "Designed a serverless ETL pipeline for ingesting and transforming large sensor datasets, with AWS Lambda triggers and Glue jobs. Enabled schema evolution and optimized distributed queries for performance and scalability.",
    technologies: ["AWS Glue", "Redshift", "Athena", "Lambda", "Python", "SQL"],
    githubUrl: "https://github.com/lizzydale3/AWS-Data-Pipeline",
    liveUrl: undefined,
    videoUrl: undefined
  },
  {
    title: "UK Web Change Tracker",
    description: "Developed a full-stack platform to monitor web traffic shifts following the UK's 2025 age-verification law. Implemented RESTful APIs and an interactive HTMX/Tailwind dashboard with charts and applied change-point detection and diff-in-diff analysis.",
    technologies: ["Flask", "MongoDB", "HTMX", "Cloudflare Radar", "Python", "Tailwind CSS"],
    githubUrl: "https://github.com/lizzydale3/UK-Web-Change-Tracker",
    liveUrl: "https://example.com", // TODO: Replace with actual URL
    videoUrl: undefined
  },
  {
    title: "Autonomous Search & Rescue Robot Simulation",
    description: "Simulated a six-wheeled differential-drive robot navigating rubble using real-time sensor data, dynamic path planning, and heuristic route optimization. Modeled real-time control loops and adaptive navigation behaviors.",
    technologies: ["CoppeliaSim", "Python", "Motion Planning", "Computer Vision", "Robotics"],
    githubUrl: "https://github.com", // TODO: Replace with actual URL
    liveUrl: undefined,
    videoUrl: "" // TODO: embed
  },
  {
    title: "Custom Processor Simulation",
    description: "Designed a 5-stage pipelined CPU with out-of-order execution, speculative branching, and Tomasulo's algorithm. Evaluated performance trade-offs in register renaming and branch prediction under variable load conditions.",
    technologies: ["Verilog", "Computer Architecture", "CPU Design", "Performance Analysis"],
    githubUrl: "https://github.com/lizzydale3/mips-processor-verilog",
    liveUrl: undefined,
    videoUrl: undefined
  }
]

export default function Projects() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-projects-title">
            Technical Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical expertise across embedded systems, robotics, machine learning, and cloud technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              videoUrl={project.videoUrl}
            />
          ))}
        </div>
      </div>
    </div>
  )
}