import Layout from "@/components/layout/dashboard/Layout";
import { MyAccountContent } from "@/components/section/dashboard/myaccount/MyAccountContent";
import React from "react";

const MyAccount = () => {
  return (
    <Layout>
      <div className="max-w-[1600px] mx-auto space-y-8">
        <MyAccountContent />
      </div>
    </Layout>
  );
};

export default MyAccount;
