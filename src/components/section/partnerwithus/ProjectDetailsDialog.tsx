import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Target, Users, Clock, DollarSign, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  parent_program: string;
  program_name: string;
  project_description: string;
  project_goal: string;
  project_scope: string;
  currency: string;
  amount: string;
  quantity: number;
  files: { file_path?: string }[];
}

interface ProjectDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: Project | null;
  onBookAppointment: () => void;
}

export function ProjectDetailsDialog({ open, onOpenChange, project, onBookAppointment }: ProjectDetailsDialogProps) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto p-0 bg-white">
        <DialogHeader className="sr-only">
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{project.project_description}</DialogDescription>
        </DialogHeader>

        {/* Hero Image */}
        <div className="relative h-72 overflow-hidden">
          <Image
            src={"https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"}
            alt={project.title}
            width={900}
            height={600}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <Badge className="bg-[#268ece] text-white mb-3 shadow-lg">{project.parent_program}</Badge>
            <h2 className="text-3xl text-white mb-2 leading-tight">{project.title}</h2>
          </div>

          {/* Close Button */}
          <button onClick={() => onOpenChange(false)} className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-8 space-y-6">
          {/* Description */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">{project.project_description}</p>
          </div>

          {/* Key Information Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group p-5 bg-gradient-to-br from-[#268ece]/5 to-transparent rounded-2xl border border-[#268ece]/20 hover:border-[#268ece]/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#268ece]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-[#268ece]" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-500 mb-1">Location</div>
                  <div className="text-gray-900">{project.program_name}</div>
                </div>
              </div>
            </div>

            <div className="group p-5 bg-gradient-to-br from-[#268ece]/5 to-transparent rounded-2xl border border-[#268ece]/20 hover:border-[#268ece]/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#268ece]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-[#268ece]" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-500 mb-1">Duration</div>
                  <div className="text-gray-900">{project.quantity}</div>
                </div>
              </div>
            </div>

            <div className="group p-5 bg-gradient-to-br from-[#268ece]/5 to-transparent rounded-2xl border border-[#268ece]/20 hover:border-[#268ece]/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#268ece]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-[#268ece]" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-500 mb-1">Beneficiaries</div>
                  <div className="text-gray-900">{project.parent_program}</div>
                </div>
              </div>
            </div>

            <div className="group p-5 bg-gradient-to-br from-[#268ece]/5 to-transparent rounded-2xl border border-[#268ece]/20 hover:border-[#268ece]/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#268ece]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <DollarSign className="w-6 h-6 text-[#268ece]" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-500 mb-1">Estimated Budget</div>
                  <div className="text-gray-900">{project.amount}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Objectives */}
          <div className="p-6 bg-gray-50 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#268ece]/10 rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5 text-[#268ece]" />
              </div>
              <h3 className="text-xl text-gray-900">Project Objectives</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 group">
                <div className="mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-[#268ece] group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-gray-700 flex-1 leading-relaxed">{project.project_goal}</span>
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="flex gap-4 pt-4">
            <Button variant="outline" className="bg-white flex-1 border-2 border-gray-200 text-gray-700 hover:bg-gray-50" onClick={() => onOpenChange(false)}>
              Close
            </Button>
            <Button className="flex-1 bg-gradient-to-r from-[#268ece] to-[#1d7ab8] hover:from-[#1d7ab8] hover:to-[#268ece] text-white shadow-lg shadow-[#268ece]/30 group" onClick={onBookAppointment}>
              <span>Book an Appointment</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
