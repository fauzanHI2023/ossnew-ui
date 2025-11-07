import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#268ece] to-[#1d7ab8] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-colors">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl mb-4 text-white">Stay Updated</h3>
              <p className="mb-6 text-white/90">Get the latest news, reports, and updates on our CSR initiatives and impact stories</p>
              <Button size="lg" className="bg-white text-[#268ece] hover:bg-gray-100" onClick={() => (window.location.href = "#news")}>
                View News & Updates
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-colors">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl mb-4 text-white">Program Catalog</h3>
              <p className="mb-6 text-white/90">Download our comprehensive catalog featuring all available CSR programs and partnership opportunities</p>
              <Button size="lg" className="bg-white text-[#268ece] hover:bg-gray-100">
                Download Catalog
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
