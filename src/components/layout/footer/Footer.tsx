import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
                <a href="#about" className="hover:text-[#268ece] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#initiatives" className="hover:text-[#268ece] transition-colors">
                  Our Initiatives
                </a>
              </li>
              <li>
                <a href="#campaigns" className="hover:text-[#268ece] transition-colors">
                  Campaigns
                </a>
              </li>
              <li>
                <a href="#news" className="hover:text-[#268ece] transition-colors">
                  News
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-[#268ece] transition-colors">
                  Impact Report
                </a>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-white mb-4">Get Involved</h4>
            <ul className="space-y-2">
              <li>
                <a href="#campaigns" className="hover:text-[#268ece] transition-colors">
                  Campaigns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#268ece] transition-colors">
                  Partner With Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#268ece] transition-colors">
                  Be Rights Holder
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#268ece] transition-colors">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#268ece] transition-colors">
                  Human Initiative Institute
                </a>
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
