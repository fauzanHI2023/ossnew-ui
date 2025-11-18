import Layout from "@/components/layout/dashboard/Layout";
import { QurbanDonationContent } from "@/components/section/dashboard/donation/qurbandonation/QurbanDonation";
import React from "react";

const QurbanDonation = () => {
  return (
    <Layout>
      <div className="max-w-[1600px] mx-auto space-y-8">
        <QurbanDonationContent />
      </div>
    </Layout>
  );
};

export default QurbanDonation;
