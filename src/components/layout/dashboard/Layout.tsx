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
    <div className={`bg-gradient-to-br from-[#f8fcff] via-[#f0f8ff] to-[#e8f4fb] relative top-0 flex min-h-screen flex-row justify-center sm:px-12 sm:py-24 px-4 py-10`}>
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <main className="sm:w-3/4 w-full">{children}</main>
    </div>
  );
};

export default Layout;
