"use client";

import React, { useState } from "react";
import { TopHeader } from "./Navbar";
import { Sidebar } from "../sidebar/SidebarMobile";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartHovered, setIsCartHovered] = useState(false);
  return (
    <div>
      <TopHeader onMenuClick={() => setIsMobileMenuOpen(true)} onCartHover={setIsCartHovered} />
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
    </div>
  );
};

export default Header;
