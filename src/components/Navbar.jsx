"use client";

import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoChevronDownSharp } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navItems = [
    { label: "Home", path: "/", hasDropdown: false },
    { label: "Courses", path: "/courses", hasDropdown: false },
    { label: "Services", path: "/services", hasDropdown: true },
    { label: "Reach Us", path: "/reach-us", hasDropdown: false },
    { label: "Career Lab", path: "/career-lab", hasDropdown: true },
    { label: "Tech Blogs", path: "/blogs", hasDropdown: false },
  ];

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-custom shadow-sm">
      <div className="container-fluid navbar-inner-container h-100">
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <Image
            src="/logo.png"
            alt="Jobzenter Logo"
            width={227}
            height={52}
            style={{ objectFit: "contain" }}
          />
        </Link>

        <button
          className={`navbar-toggler navbar-toggler-custom ${isOpen ? "collapsed" : ""}`}
          type="button"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-line" />
          <span className="navbar-toggler-line" />
          <span className="navbar-toggler-line" />
        </button>

        <div className={`collapse navbar-collapse justify-content-end ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav nav-links mb-3 mb-lg-0">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <li
                  key={item.path}
                  className={`nav-item d-flex align-items-center ${
                    item.label === "Career Lab" ? "career-lab" : ""
                  }`}
                >
                  <Link
                    href={item.path}
                    className={`nav-link text-dark ${
                      isActive ? "active nav-link-active" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.hasDropdown && (
                    <IoChevronDownSharp size={14} className="ms-1 mt-1 text-dark" />
                  )}
                </li>
              );
            })}
          </ul>

          <div className="social-icons ms-lg-4">
            <FaTwitter className="social-icon" style={{ color: "#1DA1F2" }} />
            <FaFacebookF className="social-icon" style={{ color: "#1877F2" }} />
            <FaInstagram className="social-icon" style={{ color: "#E4405F" }} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
