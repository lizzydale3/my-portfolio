import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileDown, Github, Linkedin, ArrowDown, ChevronUp, ChevronLeft, ChevronRight, ExternalLink, Mail, MapPin, GraduationCap, Instagram, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import { Link, useLocation } from "wouter"

const RESUME_URL = "/docs/client/public/docs/Lizzy_Dale_Resume_1758582369748.pdf"
const HERO_BG_URL = "/photos/sunset.jpeg"
const PROFILE_PHOTO_URL = "/photos/profile.jpeg"
const GLOBAL_PHOTO_URL = "/photos/workspace.png"

const projects = [
  {
    id: 1,
    title: "Big Data ETL Pipeline",
    description: "Built scalable data processing pipeline using AWS and Apache Spark for real-time analytics.",
    tech: ["Python", "AWS", "Apache Spark", "PostgreSQL"],
    link: "/projects/etl-pipeline"
  },
  {
    id: 2, 
    title: "UK Web Change Tracker",
    description: "Developed web scraping system with ML-powered change detection and automated notifications.",
    tech: ["Python", "BeautifulSoup", "Machine Learning", "SQLite"],
    link: "/projects/web-tracker"
  },
  {
    id: 3,
    title: "Autonomous Robot Simulation", 
    description: "Created intelligent robot navigation system with obstacle avoidance and path optimization.",
    tech: ["C++", "ROS", "OpenCV", "SLAM"],
    link: "/projects/robot-simulation"
  },
  {
    id: 4,
    title: "Custom Processor Design",
    description: "Designed and implemented 16-bit RISC processor with custom instruction set architecture.",
    tech: ["VHDL", "FPGA", "Computer Architecture", "Assembly"],
    link: "/projects/custom-processor"
  }
]

export default function Home() {
  const [, setLocation] = useLocation()
  const [currentProject, setCurrentProject] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)

  const handleResumeClick = () => {
    console.log('Resume download triggered')
    const link = document.createElement('a')
    link.href = RESUME_URL
    link.download = 'Lizzy_Dale_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleGitHubClick = () => {
    console.log('GitHub link clicked')
    window.open('https://github.com/lizzydale3/my-portfolio', '_blank', 'noopener,noreferrer')
  }

  const handleLinkedInClick = () => {
    console.log('LinkedIn link clicked') 
    window.open('https://www.linkedin.com/in/lizzy-dale3/', '_blank', 'noopener,noreferrer')
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollUpOneSection = () => {
    const sections = ['hero', 'about', 'projects', 'contact']
    const currentSection = getCurrentSection()
    const currentIndex = sections.indexOf(currentSection)
    
    if (currentIndex > 0) {
      // Scroll to previous section
      scrollToSection(sections[currentIndex - 1])
    } else {
      // Already at top section, scroll to very top
      scrollToTop()
    }
  }

  const getCurrentSection = () => {
    const sections = ['hero', 'about', 'projects', 'contact']
    for (const sectionId of sections) {
      const element = document.getElementById(sectionId)
      if (element) {
        const rect = element.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          return sectionId
        }
      }
    }
    // Default to hero if no section matches
    return 'hero'
  }

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section 
        id="hero" 
        className="relative min-h-screen flex items-center justify-center"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${HERO_BG_URL})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        ></div>
        <div className="relative z-10 text-center px-6 py-20 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-light mb-8 tracking-tight text-gray-800 dark:!text-gray-200" data-testid="text-name">
            Lizzy Dale
          </h1>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-8"></div>
          <p className="text-2xl md:text-3xl font-light mb-6 text-gray-700 dark:!text-gray-500">
            Software Engineer
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12 text-gray-600 dark:!text-gray-400">
            M.S. Computer Science graduate crafting innovative solutions in embedded systems, robotics, and machine learning
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              size="lg" 
              variant="default"
              onClick={handleResumeClick}
              data-testid="button-resume"
              className="min-w-[150px] rounded-full bg-primary/90 hover:bg-primary text-primary-foreground"
            >
              <FileDown className="h-4 w-4 mr-2" />
              Resume
            </Button>
            
            <Button 
              size="lg" 
              variant="secondary" 
              onClick={handleGitHubClick}
              data-testid="button-github"
              className="min-w-[150px] rounded-full bg-background/90 hover:bg-background text-foreground border-white/30"
            >
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Button>
            
            <Button 
              size="lg" 
              variant="secondary" 
              onClick={handleLinkedInClick}
              data-testid="button-linkedin"
              className="min-w-[150px] rounded-full bg-background/90 hover:bg-background text-foreground border-white/30"
            >
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </Button>
          </div>
          
          <div className="flex justify-center">
            <button 
              onClick={() => scrollToSection('about')}
              data-testid="button-about-me"
              className="group flex items-center gap-2 text-foreground hover:text-foreground/80 transition-all duration-300 text-lg font-medium tracking-wide"
            >
              <span className="border-b border-foreground/60 group-hover:border-foreground transition-colors">About Me</span>
              <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-muted/20 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-500">About Me</h2>
            <div className="w-12 h-0.5 bg-primary mx-auto mb-8"></div>
            
            {/* Personal photo */}
            <div className="flex justify-center mb-8">
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg border border-border/30">
                <img 
                  src={PROFILE_PHOTO_URL} 
                  alt="Lizzy Dale" 
                  className="w-full h-full object-cover object-top"
                  data-testid="img-personal"
                  style={{ objectPosition: '50% 20%' }}
                />
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
              I'm passionate about creating intelligent systems that solve real-world problems. 
              My expertise spans embedded systems, robotics, and machine learning, with a focus 
              on building scalable, efficient solutions.
            </p>
          </div>
          
          {/* Three Journey Cards - Clean Flush Layout */}
          <div className="grid md:grid-cols-3 gap-0 mb-16">
            {/* Oceanography Background */}
            <div className="bg-background p-12 text-center border-r border-border/30">
              <div className="w-12 h-12 mx-auto mb-6">
                <GraduationCap className="h-12 w-12 text-primary mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-6 text-foreground">Academic Foundation</h3>
              <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                Started with a <strong>B.S. in Oceanography from University of Washington, Seattle</strong>, where I developed a deep appreciation for 
                data analysis and scientific research methodologies. This foundation taught me to approach 
                complex problems systematically and think critically about environmental systems.
              </p>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setLocation('/academics')}
                data-testid="button-learn-more-academics"
              >
                Learn More
              </Button>
            </div>
            
            {/* WHOI Experience */}
            <div className="bg-background p-12 text-center border-r border-border/30">
              <div className="w-12 h-12 mx-auto mb-6">
                <MapPin className="h-12 w-12 text-primary mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-6 text-foreground">Industry Experience</h3>
              <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                Transitioned into technology as an <strong>Engineering Technician at WHOI</strong> 
                (Woods Hole Oceanographic Institution), where I gained hands-on experience with 
                precision instruments, data collection systems, and laboratory protocols.
              </p>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setLocation('/whoi-experience')}
                data-testid="button-learn-more-whoi"
              >
                Learn More
              </Button>
            </div>
            
            {/* CS Journey */}
            <div className="bg-background p-12 text-center">
              <div className="w-12 h-12 mx-auto mb-6">
                <Github className="h-12 w-12 text-primary mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-6 text-foreground">Tech Evolution</h3>
              <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                Pursued <strong>M.S. Computer Science</strong> at UMass Dartmouth while working remotely 
                from <strong>Europe and now Brazil</strong>. I'm adept at adapting to new locations and languages - 
                currently learning Portuguese and always ready to master new coding languages and frameworks.
              </p>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setLocation('/travel-map')}
                data-testid="button-view-travel-map"
              >
                View Travel Map
              </Button>
            </div>
          </div>
          
          {/* Global Perspective */}
          <div className="relative rounded-2xl p-12 mb-16" style={{ minHeight: '700px', height: 'auto', backgroundImage: 'linear-gradient(to bottom right, hsl(var(--primary) / 0.05), hsl(var(--background)), hsl(var(--background)))' }}>
            <div className="flex flex-col lg:flex-row items-center gap-16 h-full">
              <div className="lg:w-1/2">
                <h3 className="text-3xl md:text-4xl font-light tracking-tight mb-6 text-foreground text-left">Global Perspective</h3>
                <div className="max-w-prose">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-left">
                    Working remotely across continents has taught me the value of clear communication, 
                    cultural adaptability, and timezone flexibility. Whether it's learning Portuguese to 
                    navigate life in Brazil or mastering a new programming framework, I'm passionate about 
                    continuous growth and embrace challenges as opportunities.
                  </p>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="rounded-full px-0 text-primary underline underline-offset-4"
                  onClick={() => setLocation('/travel-map')}
                  data-testid="link-travel-map"
                >
                  <span className="mr-2">See More</span>
                  <ArrowRight className="h-3 w-3" />
                </Button>
              </div>
              <div className="lg:w-1/2">
                <div className="relative w-full h-[640px] rounded-2xl bg-background/30 backdrop-blur-sm p-4 shadow-md">
                  <div className="absolute -z-10 -inset-6 rounded-[2rem] bg-primary/10 blur-3xl"></div>
                  <img 
                    src={GLOBAL_PHOTO_URL} 
                    alt="Global perspective - international environment" 
                    className="w-full h-full object-contain object-center rounded-xl drop-shadow-xl"
                    data-testid="img-global-perspective"

                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Explore My Work Button */}
          <div className="text-center">
            <Button 
              variant="default" 
              size="lg"
              onClick={() => scrollToSection('projects')}
              data-testid="button-explore-work"
              className="rounded-full min-w-[200px]"
            >
              <span className="mr-2">Explore My Work</span>
              <ArrowDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-background scroll-mt-20">
        <div className="w-full">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-6">Featured Projects</h2>
            <div className="w-12 h-0.5 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of technical innovation and problem-solving expertise
            </p>
          </div>

          {/* Project Cards Container */}
          <div className="relative w-full max-w-7xl mx-auto">
            <div className="flex gap-6 justify-center overflow-hidden">
              {[0, 1, 2].map((offset) => {
                const projectIndex = (currentProject + offset) % projects.length
                const project = projects[projectIndex]
                return (
                <Card 
                  key={`${project.id}-${offset}`}
                  className="flex-shrink-0 w-80 shadow-lg border border-border/50 bg-card hover:shadow-xl transition-all duration-300" 
                  data-testid={`card-project-${project.id}`}
                >
                  <CardContent className="p-8">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold mb-4 text-primary">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed min-h-[80px]">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap justify-center gap-1 mb-6">
                        {project.tech.slice(0, 3).map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.tech.length - 3}
                          </Badge>
                        )}
                      </div>
                      
                      <Button 
                        asChild
                        size="sm"
                        className="rounded-full w-full"
                        data-testid={`link-project-${project.id}`}
                      >
                        <Link href={project.link}>
                          View Project
                          <ExternalLink className="h-3 w-3 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                )
              })}
            </div>

            {/* Navigation Arrows - Positioned at the edges of the project container */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10">
              <Button
                variant="secondary"
                size="icon"
                onClick={prevProject}
                className="rounded-full bg-primary/90 hover:bg-primary text-primary-foreground shadow-lg"
                data-testid="button-prev-project"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
              <Button
                variant="secondary"
                size="icon"
                onClick={nextProject}
                className="rounded-full bg-primary/90 hover:bg-primary text-primary-foreground shadow-lg"
                data-testid="button-next-project"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Project Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProject ? 'bg-primary scale-125' : 'bg-muted hover:bg-muted-foreground'
                  }`}
                  data-testid={`indicator-project-${index}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-52 px-6 bg-muted/60 scroll-mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Get In Touch</h2>
          <div className="w-12 h-0.5 bg-primary mx-auto mb-12"></div>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, collaborations, or just having a conversation about technology.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              size="lg"
              onClick={() => window.open('mailto:lizzy.dale@example.com', '_blank', 'noopener,noreferrer')}
              data-testid="button-email"
              className="min-w-[200px] rounded-full"
            >
              <Mail className="h-4 w-4 mr-2" />
              Send Message
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={handleLinkedInClick}
              data-testid="button-linkedin-contact"
              className="min-w-[200px] rounded-full"
            >
              <Linkedin className="h-4 w-4 mr-2" />
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sidebar py-8 px-6 border-t border-sidebar-border mt-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sidebar-foreground/70 text-sm">
            <p>© 2025 Lizzy Dale. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <button 
                onClick={handleGitHubClick}
                className="hover:text-sidebar-foreground transition-colors"
                data-testid="button-footer-github"
                title="GitHub"
              >
                <Github className="h-4 w-4" />
              </button>
              <button 
                onClick={() => window.open('https://instagram.com/lizzydale_cs', '_blank', 'noopener,noreferrer')}
                className="hover:text-sidebar-foreground transition-colors"
                data-testid="button-footer-instagram"
                title="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </button>
              <button 
                onClick={handleLinkedInClick}
                className="hover:text-sidebar-foreground transition-colors"
                data-testid="button-footer-linkedin"
                title="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <Button
          size="icon"
          onClick={scrollUpOneSection}
          className="fixed bottom-6 right-6 bg-gray-500 text-white hover:bg-gray-600 shadow-lg z-50 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-400"
          aria-label="Back to top"
          data-testid="button-back-to-top"
          style={{ position: 'fixed', bottom: '1.5rem', right: '1.5rem' }}
        >
          <ChevronUp className="h-5 w-5"/>
        </Button>
      )}
    </div>
  )
}