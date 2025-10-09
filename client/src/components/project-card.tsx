import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, PlayCircle } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  videoUrl?: string
}

export function ProjectCard({ title, description, technologies, githubUrl, liveUrl, videoUrl }: ProjectCardProps) {
  return (
    <Card className="h-full hover-elevate">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 pt-4">
        {githubUrl && (
          <Button size="sm" variant="outline" asChild data-testid={`button-github-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </a>
          </Button>
        )}
        {liveUrl && (
          <Button size="sm" asChild data-testid={`button-live-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Live
            </a>
          </Button>
        )}
        {videoUrl && (
          <Button size="sm" variant="outline" asChild data-testid={`button-video-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            <a href={videoUrl} target="_blank" rel="noopener noreferrer">
              <PlayCircle className="h-4 w-4 mr-2" />
              Video
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}