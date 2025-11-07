import { Heart, Users, Shield } from "lucide-react";
import Image from "next/image";

export function RightHolderSection() {
  return (
    <section id="right-holder" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-700">What is a Rights Holder?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Rights Holders are individuals, groups, or organizations entitled to receive benefits from our empowerment programs</p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1616409114494-c12264850449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHN0dWR5aW5nJTIwcmVtb3RlJTIwdmlsbGFnZXxlbnwxfHx8fDE3NjA1MzY4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
              width={800}
              height={700}
              alt="Children studying in remote areas"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#268ece] rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl mb-2 text-gray-700">Direct Beneficiaries</h3>
                <p className="text-gray-600">Children, families, and communities receiving direct support from our programs</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#268ece] rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl mb-2 text-gray-700">Community Partners</h3>
                <p className="text-gray-600">Local organizations and communities collaborating to implement programs</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#268ece] rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl mb-2 text-gray-700">Rights and Protection</h3>
                <p className="text-gray-600">Every Rights Holder is entitled to dignified and sustainable assistance</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a href="#programs" className="inline-flex items-center px-8 py-3 bg-[#268ece] hover:bg-[#1d7ab8] text-white rounded-lg transition-colors">
                Register as Rights Holder
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
