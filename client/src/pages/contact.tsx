import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, MapPin, Phone } from "lucide-react"

export default function Contact() {
  const handleEmailClick = () => window.location.href = 'mailto:lizzydale3@gmail.com';
  const handleLinkedInClick = () => window.open('https://www.linkedin.com/in/lizzy-dale3/', '_blank');
  const handlePhoneClick = () => window.location.href = 'tel:+12068900493';

  return (
    <div className="min-h-screen py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg text-muted-foreground">
            Always open to opportunities, collaborations, and new challenges.
          </p>
        </div>

        <div className="space-y-6">
          {/* Email */}
          <Card className="hover-elevate">
            <CardHeader className="flex flex-row items-center gap-3">
              <Mail className="h-6 w-6 text-primary" />
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 font-mono">lizzydale3@gmail.com</p>
              <Button onClick={handleEmailClick}>
                <Mail className="h-4 w-4 mr-2" />
                Send Email
              </Button>
            </CardContent>
          </Card>

          {/* LinkedIn */}
          <Card className="hover-elevate">
            <CardHeader className="flex flex-row items-center gap-3">
              <Linkedin className="h-6 w-6 text-primary" />
              <CardTitle>LinkedIn</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Connect with me professionally</p>
              <Button onClick={handleLinkedInClick}>
                <Linkedin className="h-4 w-4 mr-2" />
                View Profile
              </Button>
            </CardContent>
          </Card>

          {/* Phone */}
          <Card className="hover-elevate">
            <CardHeader className="flex flex-row items-center gap-3">
              <Phone className="h-6 w-6 text-primary" />
              <CardTitle>Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 font-mono">+1(206)890-0493</p>
              <Button onClick={handlePhoneClick}>
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </CardContent>
          </Card>

          {/* Location */}
          {/* <Card className="hover-elevate">
            <CardHeader className="flex flex-row items-center gap-3">
              <MapPin className="h-6 w-6 text-primary" />
              <CardTitle>Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Pacific Northwest • Open to relocate</p>
              <p className="text-sm text-muted-foreground">
                Remote work and relocation opportunities welcome
              </p>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </div>
  );
}
