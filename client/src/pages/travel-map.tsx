import { Button } from "@/components/ui/button"
import { ArrowLeft, MapPin } from "lucide-react"
import { Link } from "wouter"

export default function TravelMap() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/30 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Button 
            asChild
            variant="ghost" 
            size="sm"
            className="text-muted-foreground hover:text-primary transition-colors"
            data-testid="button-back-home"
          >
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      {/* Travel Map Content */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-light mb-4">Travel Map</h1>
            <div className="w-12 h-0.5 bg-primary mx-auto mb-6"></div>
          </div>

          <div className="mb-12 text-center">
            <div className="bg-card border border-border/30 rounded-lg p-8 max-w-2xl mx-auto">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Open to Remote Work & Relocation</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently home-based in <strong>Seattle, Washington</strong> but open to remote opportunities and international relocations. 
                Experienced in working across timezones and adapting to new environments.
              </p>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="relative bg-card border border-border/30 rounded-lg overflow-hidden">
            <div className="aspect-[16/10]">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1deqeBqfn2eYO4DHnGB01oB0SwVlNUQY&ehbc=2E312F"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Travel Map - Places I've worked remotely from"
                data-testid="iframe-travel-map"
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}