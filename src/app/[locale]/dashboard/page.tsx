"use client";
import React, { useState } from "react";
import Layout from "@/components/layout/dashboard/Layout";
import { DashboardSummary } from "@/components/layout/dashboard/summary/DashboardSummary";

const Dashboard = () => {
  return (
    <Layout>
      <div>
        <h4>Dashboard Saya</h4>
        <DashboardSummary />
      </div>
    </Layout>
  );
};

export default Dashboard;
