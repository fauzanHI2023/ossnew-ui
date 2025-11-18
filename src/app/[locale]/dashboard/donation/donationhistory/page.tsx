import Layout from "@/components/layout/dashboard/Layout";
import { DonationHistoryContent } from "@/components/section/dashboard/donation/donationhistory/DonationHistory";
import React from "react";

const DonationHistory = () => {
  return (
    <Layout>
      <div className="max-w-[1600px] mx-auto space-y-8">
        <DonationHistoryContent />
      </div>
    </Layout>
  );
};

export default DonationHistory;
