"use client";
import React, { useState } from "react";
import { HeroBanner } from "@/components/section/partnerwithus/HeroBanner";
import { PartnersSection } from "@/components/section/partnerwithus/PartnerSection";
import { ServicesSection } from "@/components/section/partnerwithus/ServiceSection";
import { ProjectsSection } from "@/components/section/partnerwithus/ProjectSection";
import { CTASection } from "@/components/section/partnerwithus/CtaSection";
import { PartnerDialog } from "@/components/section/partnerwithus/PartnerDialog";
import { ProjectDetailsDialog } from "@/components/section/partnerwithus/ProjectDetailsDialog";
import { SortingDialog } from "@/components/section/partnerwithus/SortingDialog";

const page = () => {
  const [donationDialogOpen, setDonationDialogOpen] = useState(false);
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [partnerDialogOpen, setPartnerDialogOpen] = useState(false);
  const [projectDetailsOpen, setProjectDetailsOpen] = useState(false);
  const [sortingDialogOpen, setSortingDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [sortBy, setSortBy] = useState<string>("newest");

  const handleProjectDetails = (project: any) => {
    setSelectedProject(project);
    setProjectDetailsOpen(true);
  };

  const handleBookProject = (project: any) => {
    setSelectedProject(project);
    setPartnerDialogOpen(true);
  };

  const handleBookAppointment = () => {
    setProjectDetailsOpen(false);
    setPartnerDialogOpen(true);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Banner */}
        <HeroBanner onPartnerClick={() => setPartnerDialogOpen(true)} />

        {/* Partners Section */}
        <PartnersSection />

        {/* Services Section */}
        <ServicesSection onScheduleClick={() => setPartnerDialogOpen(true)} />

        {/* Projects Section */}
        <ProjectsSection onProjectDetails={handleProjectDetails} onBookProject={handleBookProject} onOpenSorting={() => setSortingDialogOpen(true)} sortBy={sortBy} />

        {/* CTA Section */}
        <CTASection />

        {/* Footer */}
      </main>

      {/* Dialogs */}
      <PartnerDialog open={partnerDialogOpen} onOpenChange={setPartnerDialogOpen} projectId={selectedProject?.id ?? null} />

      <ProjectDetailsDialog open={projectDetailsOpen} onOpenChange={setProjectDetailsOpen} project={selectedProject} onBookAppointment={handleBookAppointment} />
      <SortingDialog open={sortingDialogOpen} onOpenChange={setSortingDialogOpen} sortBy={sortBy} onSortChange={handleSortChange} />
    </div>
  );
};

export default page;
