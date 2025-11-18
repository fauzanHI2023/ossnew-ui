import Layout from "@/components/layout/dashboard/Layout";
import { ProjectContent } from "@/components/section/dashboard/csr/ProjectSection";
import React from "react";

const CSR = () => {
  return (
    <Layout>
      <div className="max-w-[1600px] mx-auto space-y-8">
        <ProjectContent />
      </div>
    </Layout>
  );
};

export default CSR;
