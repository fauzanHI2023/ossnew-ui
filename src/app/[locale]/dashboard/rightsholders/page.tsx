import Layout from "@/components/layout/dashboard/Layout";
import { RightsHolders } from "@/components/section/dashboard/rightsholders/RightHolders";
import { RightHolderSection } from "@/components/section/rightsholders/RightholderSection";
import React from "react";

const Rightsholders = () => {
  return (
    <Layout>
      <div className="max-w-[1600px] mx-auto space-y-8">
        <RightsHolders />
      </div>
    </Layout>
  );
};

export default Rightsholders;
