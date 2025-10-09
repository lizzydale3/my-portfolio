import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-about-title">
            About Me
          </h1>
          <p className="text-lg text-muted-foreground">
            Passionate about bridging the gap between hardware and software through innovative technical solutions
          </p>
        </div>
        
        <div className="grid gap-8">
          {/* Education Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-4 border-primary pl-4">
                <div className="flex items-start justify-between flex-col sm:flex-row gap-2">
                  <div>
                    <h3 className="font-semibold text-lg">Master of Science in Computer Science</h3>
                    <p className="text-muted-foreground">University of Massachusetts Dartmouth</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Sept 2025</span>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-sm font-medium mb-2">Relevant Coursework:</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Mobile Robotics</Badge>
                    <Badge variant="outline">Computer Architecture</Badge>
                    <Badge variant="outline">Algorithm Design</Badge>
                    <Badge variant="outline">Machine Learning</Badge>
                  </div>
                </div>
              </div>
              
              <div className="border-l-4 border-secondary pl-4">
                <div className="flex items-start justify-between flex-col sm:flex-row gap-2">
                  <div>
                    <h3 className="font-semibold text-lg">Bachelor of Science in Oceanography</h3>
                    <p className="text-muted-foreground">University of Washington, Seattle</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">June 2022</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Professional Experience */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Professional Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-l-4 border-primary pl-4">
                <div className="flex items-start justify-between flex-col sm:flex-row gap-2 mb-3">
                  <div>
                    <h3 className="font-semibold text-lg">Engineering Assistant II</h3>
                    <p className="text-muted-foreground">Woods Hole Oceanographic Institute</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Jan 2023 - Sept 2023</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Collaborated with teams on NASA's Sub-Mesoscale Ocean Dynamics Experiment mission on ocean dynamics</li>
                  <li>• Managed and organized 10+ years of legacy sensor data, troubleshooting broken pipelines</li>
                  <li>• Operated autonomous marine vehicles and oceanographic instruments for real-time data collection</li>
                  <li>• Deployed & tested research instruments on R.V. Sally Ride & Oscar Elton Sette</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          {/* Technical Skills */}
          <Card>
            <CardHeader>
              <CardTitle>Technical Expertise</CardTitle>
              <CardDescription>
                My core areas of technical expertise and the technologies I work with
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Programming Languages</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Java</Badge>
                  <Badge variant="secondary">C/C++</Badge>
                  <Badge variant="secondary">Verilog</Badge>
                  <Badge variant="secondary">Bash</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Cloud & Backend Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">AWS (S3, Lambda, Redshift)</Badge>
                  <Badge variant="secondary">SQL</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Express</Badge>
                  <Badge variant="secondary">Flask</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">REST API Design</Badge>
                  <Badge variant="secondary">CI/CD</Badge>
                  <Badge variant="secondary">Linux</Badge>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">AI & Machine Learning</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">PyTorch</Badge>
                  <Badge variant="secondary">TensorFlow</Badge>
                  <Badge variant="secondary">Scikit-Learn</Badge>
                  <Badge variant="secondary">NLP</Badge>
                  <Badge variant="secondary">Deep Learning</Badge>
                  <Badge variant="secondary">Transfer Learning</Badge>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Hardware & Robotics</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">CoppeliaSim</Badge>
                  <Badge variant="secondary">Motion Planning</Badge>
                  <Badge variant="secondary">Embedded Systems</Badge>
                  <Badge variant="secondary">Computer Architecture</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}