"use client";
import React, { useState } from "react";
import { Sidebar } from "../sidebar/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className={`min-h-screen bg-gradient-to-br from-[#f8fcff] via-[#f0f8ff] to-[#e8f4fb] relative`}>
      <div className="relative z-10 pt-16 md:pt-20 flex">
        <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
        <main className={`flex-1 px-4 md:px-8 py-4 md:py-6 pb-24 lg:pb-6 transition-all duration-500 ${isCollapsed ? "lg:pl-8 lg:pr-12" : "lg:pl-8 lg:pr-12"}`}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
