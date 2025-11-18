import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#0a2540] via-[#0d2d4a] to-[#0a2540] text-gray-300">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#268ece] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#3da9f5] rounded-full blur-3xl" />
      </div>

      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#268ece] via-[#3da9f5] to-[#17a2b8]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img src="/logo HI White (1).png" alt="Human Initiative" className="h-10 w-auto brightness-0 invert" />
            </div>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">Founded in Indonesia on 10 Dec 1999, Human Initiative is legally registered and holds UN ECOSOC consultative status. Sphere and PSEA aligned.</p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#268ece] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#268ece] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#268ece] transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#268ece] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/aboutus" className="hover:text-[#268ece] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/initiatives" className="hover:text-[#268ece] transition-colors">
                  Our Initiatives
                </Link>
              </li>
              <li>
                <Link href="/campaign" className="hover:text-[#268ece] transition-colors">
                  Campaigns
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-[#268ece] transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/report" className="hover:text-[#268ece] transition-colors">
                  Impact Report
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-white mb-4">Get Involved</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/campaign" className="hover:text-[#268ece] transition-colors">
                  Campaigns
                </Link>
              </li>
              <li>
                <Link href="/partnerwithus" className="hover:text-[#268ece] transition-colors">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link href="/rightsholders" className="hover:text-[#268ece] transition-colors">
                  Be Rights Holder
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#268ece] transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="https://hiinstitute.or.id/" className="hover:text-[#268ece] transition-colors">
                  Human Initiative Institute
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>
                  Jl. Anggrek No. 97
                  <br />
                  Kelurahan Cisalak Pasar
                  <br />
                  Kecamatan Cimanggis Kota Depok
                  <br />
                  Jawa Barat. 16452
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+6281280804561" className="hover:text-[#268ece] transition-colors">
                  +62 812 8080 4561
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:care@human-initiative.org" className="hover:text-[#268ece] transition-colors">
                  care@human-initiative.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">© 2025 Human Initiative. All rights reserved.</p>
          <div className="flex gap-6 text-gray-400">
            <Link href="/whistleblowing" className="hover:text-[#268ece] transition-colors">
              Whistleblowing
            </Link>
            <Link href="/faq" className="hover:text-[#268ece] transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
