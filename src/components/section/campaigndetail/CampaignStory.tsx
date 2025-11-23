import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock } from "lucide-react";
import { Campaign } from "../../../../utils/types/campaign";
import DOMPurify from "dompurify";

interface CampaignStoryProps {
  post: Campaign;
}

export function CampaignStory({ post }: CampaignStoryProps) {
  return (
    <div className="mt-6">
      <Tabs defaultValue="story" className="w-full">
        <TabsList className="w-full justify-start border-b border-gray-200 bg-transparent rounded-none h-auto p-0 mb-6">
          <TabsTrigger value="story" className="text-gray-700 rounded-none border-b-2 border-transparent data-[state=active]:text-hi-blue-600 data-[state=active]:border-[#1780b3] data-[state=active]:bg-transparent px-4 py-3">
            Story
          </TabsTrigger>
          <TabsTrigger value="updates" className="text-gray-700 rounded-none border-b-2 border-transparent data-[state=active]:text-hi-blue-600 data-[state=active]:border-[#1780b3] data-[state=active]:bg-transparent px-4 py-3">
            Updates (3)
          </TabsTrigger>
          <TabsTrigger value="donors" className="text-gray-700 rounded-none border-b-2 border-transparent data-[state=active]:text-hi-blue-600 data-[state=active]:border-[#1780b3] data-[state=active]:bg-transparent px-4 py-3">
            Donors (1,243)
          </TabsTrigger>
        </TabsList>

        <TabsContent value="story" className="mt-0">
          <div className="max-w-none">
            <h2 className="text-2xl text-gray-900 mb-6">About This Campaign</h2>

            <div
              className="text-gray-700 leading-relaxed space-y-4 mb-8"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.campaign_description),
              }}
            />

            <h3 className="text-xl text-gray-900 mb-4">What Your Donation Provides</h3>

            <h3 className="text-xl text-gray-900 mb-4">Our Impact So Far</h3>

            <div className="text-gray-700 leading-relaxed mb-4">
              <p>Since 2020, we have been working directly with local communities in Indonesia to provide comprehensive care for orphan refugees. Our program has:</p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-gray-700 leading-relaxed">
                <span className="text-green-600 mt-1 flex-shrink-0">✓</span>
                <span>Supported over 500 orphan refugees with monthly stipends</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700 leading-relaxed">
                <span className="text-green-600 mt-1 flex-shrink-0">✓</span>
                <span>Enrolled 350+ children in local schools and educational programs</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700 leading-relaxed">
                <span className="text-green-600 mt-1 flex-shrink-0">✓</span>
                <span>Provided medical care and health screenings to 800+ children</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700 leading-relaxed">
                <span className="text-green-600 mt-1 flex-shrink-0">✓</span>
                <span>Established safe housing for 120 children in urgent need</span>
              </li>
            </ul>

            <h3 className="text-xl text-gray-900 mb-4">How We Use Your Donations</h3>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Direct Child Support</span>
                  <span className="text-gray-900">75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#1780b3] h-2 rounded-full" style={{ width: "75%" }} />
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Educational Programs</span>
                  <span className="text-gray-900">15%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#37aae1] h-2 rounded-full" style={{ width: "15%" }} />
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Administrative Costs</span>
                  <span className="text-gray-900">10%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#9dc3ee] h-2 rounded-full" style={{ width: "10%" }} />
                </div>
              </div>
            </div>

            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>Your generosity can transform the life of a child who has lost everything. Together, we can provide hope, education, and a brighter future for these vulnerable children.</p>

              <p>Thank you for your compassion and support. May your kindness be rewarded abundantly.</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="updates" className="mt-0">
          <div className="space-y-6">
            {[
              {
                id: 1,
                date: "October 10, 2025",
                title: "New Educational Facility Opened",
                content: "We're thrilled to announce the opening of a new learning center that will serve 100+ children with computer labs and library facilities.",
              },
              {
                id: 2,
                date: "September 25, 2025",
                title: "Medical Camp Success",
                content: "Our recent medical camp provided health check-ups and treatments to 150 children. Thank you for making this possible!",
              },
              {
                id: 3,
                date: "September 5, 2025",
                title: "Back to School Program Launch",
                content: "With your support, we've enrolled 80 new students in local schools and provided them with uniforms, books, and supplies.",
              },
            ].map((update) => (
              <div key={update.id} className="border-b border-gray-200 pb-6 last:border-0">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <Clock size={14} />
                  <span>{update.date}</span>
                </div>
                <h3 className="text-lg text-gray-900 mb-2">{update.title}</h3>
                <p className="text-gray-700">{update.content}</p>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="donors" className="mt-0">
          <div className="space-y-4">
            {[
              { name: "Sarah M.", amount: 100, time: "2 hours ago", message: "May Allah bless these children" },
              { name: "Anonymous", amount: 250, time: "5 hours ago", message: "" },
              { name: "Ahmed K.", amount: 50, time: "1 day ago", message: "For the orphans 🤲" },
              { name: "Fatima R.", amount: 500, time: "1 day ago", message: "In memory of my grandmother" },
              { name: "Anonymous", amount: 100, time: "2 days ago", message: "" },
            ].map((donor, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#1780b3] to-[#37aae1] rounded-full" />
                      <div>
                        <div className="text-sm text-gray-900">{donor.name}</div>
                        <div className="text-xs text-gray-600">{donor.time}</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-base text-gray-900">${donor.amount}</div>
                </div>
                {donor.message && <p className="text-sm text-gray-700 ml-10">{donor.message}</p>}
              </div>
            ))}
            <button className="text-[#1780b3] hover:text-[#075d8e] text-sm mt-4">View all donors →</button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
