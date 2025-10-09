import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Link, useParams } from "wouter"

const projectData = {
  "etl-pipeline": {
    title: "Big Data ETL Pipeline",
    description: "Built scalable data processing pipeline using AWS and Apache Spark for real-time analytics.",
    longDescription: "Developed a comprehensive ETL (Extract, Transform, Load) pipeline capable of processing terabytes of data daily. The system leverages AWS services including S3, EMR, and Redshift to create a robust data infrastructure that serves real-time analytics dashboards and machine learning models.",
    tech: ["Python", "AWS", "Apache Spark", "PostgreSQL", "Docker", "Airflow"],
    features: [
      "Real-time data ingestion from multiple sources",
      "Automated data validation and quality checks", 
      "Scalable processing with Apache Spark on AWS EMR",
      "Integration with data warehouses and analytics tools",
      "Monitoring and alerting system for pipeline health"
    ],
    challenges: [
      "Handling data consistency across distributed systems",
      "Optimizing performance for large-scale data processing",
      "Implementing fault-tolerant error handling and recovery"
    ]
  },
  "web-tracker": {
    title: "UK Web Change Tracker",
    description: "Developed web scraping system with ML-powered change detection and automated notifications.",
    longDescription: "Created an intelligent web monitoring system that tracks changes across UK government and commercial websites. The system uses machine learning algorithms to detect meaningful content changes while filtering out noise, and provides automated notifications via multiple channels.",
    tech: ["Python", "BeautifulSoup", "Machine Learning", "SQLite", "Selenium", "FastAPI"],
    features: [
      "Intelligent change detection using ML algorithms",
      "Multi-channel notification system (email, SMS, webhooks)",
      "Configurable monitoring schedules and sensitivity",
      "Historical change tracking and analysis",
      "RESTful API for integration with other systems"
    ],
    challenges: [
      "Distinguishing meaningful changes from routine updates",
      "Handling dynamic content and JavaScript-heavy sites",
      "Scaling monitoring across thousands of web pages"
    ]
  },
  "robot-simulation": {
    title: "Autonomous Robot Simulation",
    description: "Created intelligent robot navigation system with obstacle avoidance and path optimization.",
    longDescription: "Designed and implemented a comprehensive autonomous robot simulation environment featuring advanced navigation algorithms, real-time obstacle detection, and optimal path planning. The system demonstrates sophisticated robotics concepts in a virtual environment.",
    tech: ["C++", "ROS", "OpenCV", "SLAM", "Gazebo", "Point Cloud Library"],
    features: [
      "SLAM (Simultaneous Localization and Mapping)",
      "Real-time obstacle detection and avoidance",
      "Path planning with A* and RRT algorithms",
      "Sensor fusion for enhanced perception",
      "3D visualization and simulation environment"
    ],
    challenges: [
      "Implementing robust SLAM in dynamic environments",
      "Balancing computational efficiency with accuracy",
      "Handling sensor noise and uncertainty in perception"
    ]
  },
  "custom-processor": {
    title: "Custom Processor Design",
    description: "Designed and implemented 16-bit RISC processor with custom instruction set architecture.",
    longDescription: "Developed a complete 16-bit RISC processor from scratch, including custom instruction set architecture, datapath design, and control unit implementation. The project demonstrates deep understanding of computer architecture principles and digital design.",
    tech: ["VHDL", "FPGA", "Computer Architecture", "Assembly", "Xilinx Vivado", "ModelSim"],
    features: [
      "Custom 16-bit RISC instruction set architecture",
      "5-stage pipeline with hazard detection",
      "Memory management unit with caching",
      "Comprehensive assembly language toolchain",
      "FPGA implementation and testing"
    ],
    challenges: [
      "Designing efficient instruction encoding schemes",
      "Implementing pipeline hazard detection and resolution",
      "Optimizing critical path timing for maximum frequency"
    ]
  }
}

export default function ProjectDetail() {
  const params = useParams()
  const projectSlug = params.slug as keyof typeof projectData
  const project = projectData[projectSlug]

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        {/* Back Button */}
        <Button variant="ghost" className="mb-8" asChild data-testid="button-back-home">
          <Link href="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Portfolio
          </Link>
        </Button>

        {/* Project Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-light mb-6" data-testid="text-project-title">
            {project.title}
          </h1>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Technology Stack */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-6">Technology Stack</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {project.tech.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Overview */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.longDescription}
              </p>
            </CardContent>
          </Card>

          {/* Key Features */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Technical Challenges */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Technical Challenges</h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground leading-relaxed">{challenge}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="min-w-[180px] rounded-full" data-testid="button-view-code">
                <Github className="h-4 w-4 mr-2" />
                View Source Code
              </Button>
              <Button size="lg" variant="outline" className="min-w-[180px] rounded-full" data-testid="button-live-demo">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </Button>
            </div>
            
            <Button variant="ghost" asChild data-testid="button-back-projects">
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to All Projects
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}