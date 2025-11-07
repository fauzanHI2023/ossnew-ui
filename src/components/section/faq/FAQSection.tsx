import { Heart, CreditCard, HelpCircle, Search, Globe2, Handshake, FileText, Users } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQSectionProps {
  searchQuery: string;
}

// Donations & Payments FAQs
const donationFAQs = [
  {
    id: "d1",
    question: "How can I donate to Human Initiative?",
    answer:
      "You can donate through our website by selecting a program, filling out the donation form, and completing payment via our secure payment gateway. We accept various methods including credit cards, bank transfers, and international payment platforms.",
  },
  {
    id: "d2",
    question: "What is the minimum donation amount?",
    answer: "There is no minimum donation amount. Every contribution, regardless of size, makes a meaningful difference. However, for processing efficiency, we suggest a minimum of $10 USD for international donations.",
  },
  {
    id: "d3",
    question: "Can I donate from overseas?",
    answer: "Yes! We accept international donations through our global payment gateways including PayPal, Stripe, and wire transfers. Your contribution will be converted to the local currency and directed to your chosen program.",
  },
  {
    id: "d4",
    question: "Are my donations tax-deductible?",
    answer: "Yes, Human Initiative is a registered non-profit organization. We will provide an official tax receipt for all donations, which can be used for tax deduction purposes in accordance with your country's tax laws.",
  },
  {
    id: "d5",
    question: "Can I set up recurring donations?",
    answer: "Absolutely! We offer monthly, quarterly, and annual recurring donation options. You can set up automatic donations through your account dashboard and modify or cancel them at any time.",
  },
  {
    id: "d6",
    question: "How do I know my donation reaches those in need?",
    answer: "We maintain complete transparency through regular impact reports, financial statements, and program updates. You'll receive email updates about your contribution's impact and can access detailed reports on our website.",
  },
];

// Payment Methods FAQs
const paymentFAQs = [
  {
    id: "p1",
    question: "What payment methods do you accept?",
    answer:
      "We accept credit/debit cards (Visa, Mastercard, American Express), PayPal, bank transfers, wire transfers, and local payment methods in various countries. All transactions are processed through secure, PCI-DSS certified payment gateways.",
  },
  {
    id: "p2",
    question: "Is my payment information secure?",
    answer: "Yes, absolutely. All transactions are protected with 256-bit SSL encryption and processed through trusted, certified payment gateways. We never store your credit card information on our servers.",
  },
  {
    id: "p3",
    question: "How long does payment processing take?",
    answer: "Credit card and PayPal payments are processed instantly. Bank transfers typically take 1-3 business days. You'll receive email confirmation once your payment is successfully processed.",
  },
  {
    id: "p4",
    question: "Are there any transaction fees?",
    answer: "Human Initiative does not charge any fees. However, payment providers may apply small processing fees according to their policies. These fees, if any, will be clearly displayed before you complete your donation.",
  },
  {
    id: "p5",
    question: "What happens if my payment fails?",
    answer: "If a payment fails, you'll receive an immediate notification with details. You can retry using the same method or choose an alternative payment option. Our support team is available 24/7 to assist with any payment issues.",
  },
  {
    id: "p6",
    question: "Will I receive a receipt for my donation?",
    answer: "Yes, you'll receive an email receipt immediately after your donation is processed. You can also download receipts anytime from your account dashboard under transaction history.",
  },
];

// Programs & Impact FAQs
const programFAQs = [
  {
    id: "pr1",
    question: "What programs does Human Initiative run?",
    answer: "We operate programs in education, healthcare, emergency relief, clean water access, sustainable livelihoods, and community development across multiple countries. Each program is designed for maximum impact and sustainability.",
  },
  {
    id: "pr2",
    question: "How do you measure program impact?",
    answer: "We use rigorous monitoring and evaluation frameworks, including baseline assessments, regular progress tracking, community feedback, and third-party audits. Impact metrics are published in our annual reports.",
  },
  {
    id: "pr3",
    question: "Can I choose which program to support?",
    answer: "Yes! When donating, you can select a specific program or allow us to direct your contribution where it's needed most. We provide detailed information about each program to help you make an informed choice.",
  },
  {
    id: "pr4",
    question: "How many people have you helped?",
    answer: "Since our founding, we've reached over 5 million beneficiaries across 15 countries through our various programs. Updated statistics are available in our annual impact reports and on our website.",
  },
  {
    id: "pr5",
    question: "Do you work with local communities?",
    answer: "Yes, community participation is central to our approach. We work closely with local leaders, organizations, and beneficiaries to ensure programs are culturally appropriate, sustainable, and truly meet community needs.",
  },
];

// Partnership & Collaboration FAQs
const partnershipFAQs = [
  {
    id: "pa1",
    question: "How can my organization partner with Human Initiative?",
    answer: "We welcome partnerships with corporations, foundations, NGOs, and government agencies. Contact our partnership team through our website to discuss collaboration opportunities aligned with our mission and your CSR goals.",
  },
  {
    id: "pa2",
    question: "What types of partnerships do you offer?",
    answer:
      "We offer various partnership models including corporate giving programs, cause marketing campaigns, employee engagement initiatives, skills-based volunteering, and co-funded projects. Each partnership is customized to mutual objectives.",
  },
  {
    id: "pa3",
    question: "Do you accept in-kind donations?",
    answer: "Yes, we accept in-kind donations of supplies, equipment, and services that align with our program needs. Please contact us to discuss specific items and ensure they meet our current requirements and quality standards.",
  },
  {
    id: "pa4",
    question: "Can we visit your project sites?",
    answer:
      "Yes, we organize field visits for partners and major donors to see our programs firsthand. These visits are coordinated with local teams and scheduled to minimize disruption to ongoing activities while ensuring meaningful engagement.",
  },
  {
    id: "pa5",
    question: "How do you ensure partnership accountability?",
    answer:
      "We provide regular progress reports, financial updates, and impact assessments to all partners. Partnership agreements include clear deliverables, timelines, and evaluation criteria to ensure mutual accountability and transparency.",
  },
];

// Transparency & Reports FAQs
const transparencyFAQs = [
  {
    id: "t1",
    question: "How do you ensure financial transparency?",
    answer: "We publish annual audited financial statements, quarterly financial reports, and program budgets on our website. We're also certified by independent watchdog organizations and undergo regular third-party audits.",
  },
  {
    id: "t2",
    question: "What percentage of donations goes to programs?",
    answer:
      "Approximately 85% of all donations go directly to program implementation. The remaining 15% covers essential operational costs including administration, fundraising, and organizational development to ensure program quality and sustainability.",
  },
  {
    id: "t3",
    question: "Where can I find your annual reports?",
    answer:
      "All annual reports, financial statements, and impact assessments are available in the 'Transparency' section of our website. You can download reports from the past 10 years, including detailed program breakdowns and beneficiary data.",
  },
  {
    id: "t4",
    question: "How often do you publish financial updates?",
    answer: "We publish comprehensive annual reports and quarterly financial summaries. Major donors and partners receive monthly updates. Real-time program updates are shared through our newsletter and social media channels.",
  },
  {
    id: "t5",
    question: "Are you audited by external organizations?",
    answer:
      "Yes, we undergo annual independent financial audits by certified public accounting firms. We're also evaluated by charity watchdog organizations and maintain certifications demonstrating our commitment to transparency and accountability.",
  },
];

// Volunteering & Involvement FAQs
const volunteerFAQs = [
  {
    id: "v1",
    question: "How can I volunteer with Human Initiative?",
    answer: "We offer various volunteering opportunities including field work, skills-based volunteering, remote support, and advocacy. Visit our 'Get Involved' page to explore current opportunities and submit an application.",
  },
  {
    id: "v2",
    question: "Do I need specific qualifications to volunteer?",
    answer: "Requirements vary by role. Some positions require specific skills or experience, while others welcome anyone with passion and commitment. We provide training and orientation for all volunteers to ensure they're well-prepared.",
  },
  {
    id: "v3",
    question: "Can I volunteer remotely?",
    answer:
      "Yes! We offer remote volunteering opportunities in areas like digital marketing, content creation, data analysis, translation, fundraising, and administrative support. These roles allow you to contribute from anywhere in the world.",
  },
  {
    id: "v4",
    question: "What is the time commitment for volunteering?",
    answer:
      "Time commitments vary by role. Short-term opportunities may require a few hours per week, while field positions typically need a minimum commitment of 3-6 months. We work with volunteers to find arrangements that fit their schedules.",
  },
  {
    id: "v5",
    question: "Do you provide support for international volunteers?",
    answer: "Yes, for field volunteers we provide orientation, accommodation assistance, local support, and safety briefings. However, volunteers are typically responsible for their own travel costs, visas, and insurance.",
  },
  {
    id: "v6",
    question: "How can I become an advocate for your cause?",
    answer:
      "You can become an advocate by sharing our campaigns on social media, organizing fundraising events, speaking at community gatherings, or joining our ambassador program. Contact our advocacy team to learn more about current campaigns.",
  },
];

export function FAQSection({ searchQuery }: FAQSectionProps) {
  // Filter FAQs based on search query
  const filteredDonationFAQs = donationFAQs.filter((faq) => faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || faq.answer.toLowerCase().includes(searchQuery.toLowerCase()));

  const filteredPaymentFAQs = paymentFAQs.filter((faq) => faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || faq.answer.toLowerCase().includes(searchQuery.toLowerCase()));

  const filteredProgramFAQs = programFAQs.filter((faq) => faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || faq.answer.toLowerCase().includes(searchQuery.toLowerCase()));

  const filteredPartnershipFAQs = partnershipFAQs.filter((faq) => faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || faq.answer.toLowerCase().includes(searchQuery.toLowerCase()));

  const filteredTransparencyFAQs = transparencyFAQs.filter((faq) => faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || faq.answer.toLowerCase().includes(searchQuery.toLowerCase()));

  const filteredVolunteerFAQs = volunteerFAQs.filter((faq) => faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || faq.answer.toLowerCase().includes(searchQuery.toLowerCase()));

  const hasResults = filteredDonationFAQs.length > 0 || filteredPaymentFAQs.length > 0 || filteredProgramFAQs.length > 0 || filteredPartnershipFAQs.length > 0 || filteredTransparencyFAQs.length > 0 || filteredVolunteerFAQs.length > 0;

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Search Results Info */}
        {searchQuery && (
          <div className="mb-8 text-center">
            <p className="text-black/60">
              {hasResults ? (
                <>
                  Showing search results for <span className="text-[#268ece]">"{searchQuery}"</span>
                </>
              ) : (
                <>
                  No results found for <span className="text-[#268ece]">"{searchQuery}"</span>
                </>
              )}
            </p>
          </div>
        )}

        {!hasResults && searchQuery ? (
          <div className="text-center py-16">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#268ece]/10 mx-auto mb-6">
              <Search className="h-10 w-10 text-[#268ece]" />
            </div>
            <h3 className="text-black mb-2">No Results Found</h3>
            <p className="text-black/60 max-w-md mx-auto">We couldn't find any questions matching your search. Try using different keywords or contact our support team for assistance.</p>
          </div>
        ) : (
          <>
            {/* Donations & Payments */}
            {filteredDonationFAQs.length > 0 && (
              <div className="mb-16" id="donations">
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#268ece] to-[#1f7ab8] shadow-lg shadow-[#268ece]/25">
                    <Heart className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-black">Donations & Payments</h2>
                    <p className="text-black/60 mt-1">{searchQuery ? `${filteredDonationFAQs.length} results found` : "Learn how to donate safely and easily"}</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-black/10 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                  <Accordion type="single" collapsible className="w-full">
                    {filteredDonationFAQs.map((faq) => (
                      <AccordionItem key={faq.id} value={faq.id}>
                        <AccordionTrigger className="text-black hover:text-[#268ece] text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-black/70 leading-relaxed">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            )}

            {/* Payment Methods */}
            {filteredPaymentFAQs.length > 0 && (
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#268ece] to-[#1f7ab8] shadow-lg shadow-[#268ece]/25">
                    <CreditCard className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-black">Payment Methods</h2>
                    <p className="text-black/60 mt-1">{searchQuery ? `${filteredPaymentFAQs.length} results found` : "Everything you need to know about payments"}</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-black/10 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                  <Accordion type="single" collapsible className="w-full">
                    {filteredPaymentFAQs.map((faq) => (
                      <AccordionItem key={faq.id} value={faq.id}>
                        <AccordionTrigger className="text-black hover:text-[#268ece] text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-black/70 leading-relaxed">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            )}

            {/* Programs & Impact */}
            {filteredProgramFAQs.length > 0 && (
              <div className="mb-16" id="programs">
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#268ece] to-[#1f7ab8] shadow-lg shadow-[#268ece]/25">
                    <Globe2 className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-black">Programs & Impact</h2>
                    <p className="text-black/60 mt-1">{searchQuery ? `${filteredProgramFAQs.length} results found` : "Discover how your support creates change"}</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-black/10 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                  <Accordion type="single" collapsible className="w-full">
                    {filteredProgramFAQs.map((faq) => (
                      <AccordionItem key={faq.id} value={faq.id}>
                        <AccordionTrigger className="text-black hover:text-[#268ece] text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-black/70 leading-relaxed">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            )}

            {/* Partnership & Collaboration */}
            {filteredPartnershipFAQs.length > 0 && (
              <div className="mb-16" id="partnership">
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#268ece] to-[#1f7ab8] shadow-lg shadow-[#268ece]/25">
                    <Handshake className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-black">Partnership & Collaboration</h2>
                    <p className="text-black/60 mt-1">{searchQuery ? `${filteredPartnershipFAQs.length} results found` : "Join hands with us for sustainable solutions"}</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-black/10 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                  <Accordion type="single" collapsible className="w-full">
                    {filteredPartnershipFAQs.map((faq) => (
                      <AccordionItem key={faq.id} value={faq.id}>
                        <AccordionTrigger className="text-black hover:text-[#268ece] text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-black/70 leading-relaxed">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            )}

            {/* Transparency & Reports */}
            {filteredTransparencyFAQs.length > 0 && (
              <div className="mb-16" id="transparency">
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#268ece] to-[#1f7ab8] shadow-lg shadow-[#268ece]/25">
                    <FileText className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-black">Transparency & Reports</h2>
                    <p className="text-black/60 mt-1">{searchQuery ? `${filteredTransparencyFAQs.length} results found` : "See how we ensure accountability"}</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-black/10 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                  <Accordion type="single" collapsible className="w-full">
                    {filteredTransparencyFAQs.map((faq) => (
                      <AccordionItem key={faq.id} value={faq.id}>
                        <AccordionTrigger className="text-black hover:text-[#268ece] text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-black/70 leading-relaxed">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            )}

            {/* Volunteering & Involvement */}
            {filteredVolunteerFAQs.length > 0 && (
              <div className="mb-16" id="volunteering">
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#268ece] to-[#1f7ab8] shadow-lg shadow-[#268ece]/25">
                    <Users className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-black">Volunteering & Involvement</h2>
                    <p className="text-black/60 mt-1">{searchQuery ? `${filteredVolunteerFAQs.length} results found` : "Explore ways to contribute your time and skills"}</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-black/10 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                  <Accordion type="single" collapsible className="w-full">
                    {filteredVolunteerFAQs.map((faq) => (
                      <AccordionItem key={faq.id} value={faq.id}>
                        <AccordionTrigger className="text-black hover:text-[#268ece] text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-black/70 leading-relaxed">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            )}
          </>
        )}

        {/* Still Need Help Section */}
        <div className="mt-20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#268ece] to-[#1f7ab8] p-12 md:p-16 text-center shadow-2xl shadow-[#268ece]/20">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

            <div className="relative">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm mb-6">
                <HelpCircle className="h-8 w-8 text-white" />
              </div>

              <h2 className="text-white mb-4">Still Need Help?</h2>

              <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
                Our support team is ready to assist you anytime.
                <br className="hidden md:block" />
                Reach out to ensure your contribution creates meaningful impact.
              </p>

              <button className="inline-flex items-center gap-2 bg-white text-[#268ece] px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-0.5">
                <span>Get in Touch</span>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
