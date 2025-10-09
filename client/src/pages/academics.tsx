import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, BookOpen, MapPin, Landmark, Trees, ArrowLeft } from "lucide-react"
import { useLocation } from "wouter"

export default function Academics() {
  const [, setLocation] = useLocation()

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => setLocation('/')}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-light tracking-tight">Academic Journey</h1>
        </div>
        {/* <p className="text-xl text-muted-foreground mb-12">
          From boats to Brasil 
        </p> */}

        {/* Graduate Education */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-semibold mb-2">University of Massachusetts Dartmouth</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Master of Science in Computer Science | 2024-2025 | GPA: 3.93
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-foreground">Core Coursework</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Advanced Algorithms & Data Structures</li>
                  <li>• Machine Learning & Neural Networks</li>
                  <li>• Software Engineering Principles</li>
                  <li>• Database Systems & Design</li>
                  <li>• Computer Networks & Security</li>
                  <li>• Embedded Systems Programming</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-foreground">Specializations</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Robotics & Autonomous Systems</li>
                  <li>• Real-time Control Systems</li>
                  <li>• Computer Vision Applications</li>
                  <li>• IoT Device Integration</li>
                  <li>• Distributed Computing</li>
                  <li>• System Architecture Design</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-muted/30 rounded-lg">
              <h4 className="font-semibold mb-2 text-foreground">Thesis Focus</h4>
              <p className="text-muted-foreground text-sm">
                Conducted research to monitor and analyze internet infrastructure changes, traffic patterns, and security metrics in the United Kingdom post UK’s age-verification enforcement date (2025-07-25). Created a comprehensive web application to display findings, using RESTful API principles. 
              </p>

            </div>
          </CardContent>
        </Card>

        {/* Undergraduate Education */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-semibold mb-2">University of Washington - Seattle</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Bachelor of Science in Oceanography | 2018-2022
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-foreground">Ocean Science Focus</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Physical Oceanography</li>
                  <li>• Marine Chemistry & Biology</li>
                  <li>• Atmospheric-Ocean Interactions</li>
                  <li>• Climate System Dynamics</li>
                  <li>• Ocean Data Analysis</li>
                  <li>• Marine Instrumentation</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-foreground">Technical Skills Developed</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• MATLAB & Python Programming</li>
                  <li>• Statistical Data Analysis</li>
                  <li>• Scientific Computing</li>
                  <li>• Research Methodology</li>
                  <li>• Scientific Writing</li>
                  <li>• Field Research Techniques</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-muted/30 rounded-lg">
              <h4 className="font-semibold mb-2 text-foreground">Research Experience</h4>
              <p className="text-muted-foreground text-sm">
                Conducted research on distribution of dinoflagellate species in washington, using python data analysis to develop computational models for 
                analyzing large-scale data patterns.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Academic Philosophy */}
        <Card>
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Interdisciplinary Approach</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              My unique background combining ocean science and hands on engineering with computer science provides a distinctive perspective on 
              problem-solving, data analysis, and system design. 
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
