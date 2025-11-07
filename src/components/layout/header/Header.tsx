"use client";

import React, { useState } from "react";
import { TopHeader } from "./Navbar";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartHovered, setIsCartHovered] = useState(false);
  return (
    <div>
      <TopHeader onMenuClick={() => setIsMobileMenuOpen(true)} onCartHover={setIsCartHovered} />
    </div>
  );
};

export default Header;
