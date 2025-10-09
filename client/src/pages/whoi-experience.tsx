import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Anchor, Waves, Satellite, Ship } from "lucide-react"
import { Link } from "wouter"

export default function WHOIExperience() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <Link href="/">
            <Button variant="ghost" size="sm" className="mb-6" data-testid="button-back-home">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <Anchor className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-light tracking-tight">WHOI Experience</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Oceanographic research at the forefront of marine technology
          </p>
        </div>

        {/* Overview */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Waves className="h-6 w-6 text-primary" />
              Upper Ocean Processes Group
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              My work at the Woods Hole Oceanographic Institution focused on cutting-edge oceanographic 
              research within the Upper Ocean Processes (UOP) group. This interdisciplinary team studies 
              air-sea interactions, ocean dynamics, and climate processes through innovative field research 
              and advanced instrumentation.
            </p>
            <Button 
              variant="outline" 
              size="sm" 
              asChild 
              className="mb-4"
              data-testid="link-uop-site"
            >
              <a href="https://uop.whoi.edu" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit UOP Group Website
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* NASA SMODE Project */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Satellite className="h-6 w-6 text-primary" />
              NASA SMODE Project
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Contributing to NASA's Sub-Mesoscale Ocean Dynamics Experiment (SMODE), a groundbreaking 
              research initiative designed to understand small-scale ocean processes and their impact on 
              larger climate systems. This multi-platform field campaign combined satellite observations, 
              autonomous vehicles, and traditional oceanographic methods.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-semibold mb-2">Key Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Embedded Systems</Badge>
                  <Badge variant="secondary">Autonomous Vehicles</Badge>
                  <Badge variant="secondary">Satellite Data</Badge>
                  <Badge variant="secondary">Real-time Processing</Badge>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Research Focus</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Ocean Dynamics</Badge>
                  <Badge variant="outline">Climate Systems</Badge>
                  <Badge variant="outline">Data Integration</Badge>
                  <Badge variant="outline">Field Operations</Badge>
                </div>
              </div>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              asChild
              data-testid="link-smode-site"
            >
              <a href="https://espo.nasa.gov/s-mode" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Learn About NASA SMODE
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* Field Experience */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Ship className="h-6 w-6 text-primary" />
              Research Vessel Operations
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">WHOTS Hawaii Deployment</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Participated in the Woods Hole Oceanographic Tsunami (WHOTS) mooring deployment 
                  operations in Hawaiian waters, working with complex oceanographic instrumentation 
                  in challenging marine environments.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-3">NASA SMODE Field Campaign</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Conducted at-sea operations for the SMODE field campaign, coordinating multi-platform 
                  data collection and ensuring real-time communication between research vessels, 
                  autonomous vehicles, and shore-based teams.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Skills & Impact */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-6">Technical Expertise & Real-World Impact</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2 text-primary">Embedded Systems Passion</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Developed and maintained embedded systems for oceanographic instruments, working with 
                  real-time data acquisition, sensor integration, and autonomous operation in harsh marine 
                  environments. This hands-on experience strengthened my passion for solving complex 
                  real-world problems through innovative technology solutions.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2 text-primary">High-Stress Interdisciplinary Collaboration</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Thrived in fast-paced, high-pressure research environments where equipment failures 
                  could impact million-dollar research campaigns. Collaborated with oceanographers, 
                  engineers, data scientists, and field technicians to troubleshoot critical systems 
                  and maintain continuous data collection under challenging conditions.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2 text-primary">Problem-Solving Under Pressure</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Demonstrated ability to debug complex systems in real-time during research cruises, 
                  often with limited resources and tight deadlines. These experiences honed my skills in 
                  rapid problem diagnosis, creative solution development, and effective communication 
                  across diverse technical disciplines.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Back to top */}
        <div className="flex justify-center">
          <Button 
            onClick={scrollToTop}
            variant="outline"
            data-testid="button-back-to-top"
          >
            Back to Top
          </Button>
        </div>
      </div>
    </div>
  )
}