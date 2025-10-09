import { ThemeToggle } from "@/components/theme-toggle"
import { Link, useLocation } from "wouter"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

const scrollToSection = (sectionId: string, location: string, setLocation: (path: string) => void) => {
  if (location === '/') {
    // We're on home page, just scroll
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  } else {
    // Navigate to home page with hash for reliable cross-page navigation
    setLocation(`/#${sectionId}`)
  }
}

export function Navigation() {
  const [location, setLocation] = useLocation()
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-background/95 backdrop-blur-md border-b-2 border-sidebar shadow-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-8">
        <Link href="/" data-testid="link-home" className="hover:opacity-80 transition-opacity">
          <h1 className="text-xl font-light tracking-wide text-foreground">Lizzy Dale</h1>
        </Link>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/#hero"
              data-testid="nav-home"
              className="text-sm font-light tracking-wide text-muted-foreground hover:text-primary transition-colors"
            >
              HOME
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-light tracking-wide text-muted-foreground hover:text-primary transition-colors p-0 h-auto" data-testid="nav-projects">
                  PROJECTS
                  <ChevronDown className="h-3 w-3 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/projects/etl-pipeline" className="w-full">
                    Big Data ETL Pipeline
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/projects/web-tracker" className="w-full">
                    UK Web Change Tracker
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/projects/robot-simulation" className="w-full">
                    Autonomous Robot Simulation
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/projects/custom-processor" className="w-full">
                    Custom Processor Design
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-light tracking-wide text-muted-foreground hover:text-primary transition-colors p-0 h-auto" data-testid="nav-about">
                  ABOUT
                  <ChevronDown className="h-3 w-3 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/academics" className="w-full">
                    Academics
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/whoi-experience" className="w-full">
                    Industry Experience
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link 
              href="/contact" 
              data-testid="nav-contact"
              className="text-sm font-light tracking-wide text-muted-foreground hover:text-primary transition-colors"
            >
              CONTACT
            </Link>
          </div>
          
          <div className="md:hidden flex items-center gap-4">
            <Link 
              href="/#hero"
              data-testid="nav-mobile-home"
              className="text-xs font-light tracking-wide text-muted-foreground hover:text-primary transition-colors"
            >
              HOME
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-xs font-light tracking-wide text-muted-foreground hover:text-primary transition-colors p-0 h-auto" data-testid="nav-mobile-projects">
                  PROJECTS
                  <ChevronDown className="h-3 w-3 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/projects/etl-pipeline" className="w-full text-xs">
                    ETL Pipeline
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/projects/web-tracker" className="w-full text-xs">
                    Web Tracker
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/projects/robot-simulation" className="w-full text-xs">
                    Robot Simulation
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/projects/custom-processor" className="w-full text-xs">
                    Custom Processor
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-xs font-light tracking-wide text-muted-foreground hover:text-primary transition-colors p-0 h-auto" data-testid="nav-mobile-about">
                  ABOUT
                  <ChevronDown className="h-3 w-3 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/academics" className="w-full text-xs">
                    Academics
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/whoi-experience" className="w-full text-xs">
                    Industry Experience
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <button 
                    onClick={() => scrollToSection('about', location, setLocation)}
                    className="w-full text-left text-xs"
                  >
                    Tech Evolution
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <button 
              onClick={() => scrollToSection('contact', location, setLocation)}
              data-testid="nav-mobile-contact"
              className="text-xs font-light tracking-wide text-muted-foreground hover:text-primary transition-colors"
            >
              CONTACT
            </button>
          </div>
          
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}