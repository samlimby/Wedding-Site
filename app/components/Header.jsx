"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 720);
    };

    handleResize(); // Check on initial load
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="header">
      <Link href="/" passHref>
        <h2 id="home-text" className="home_text">Meg & Sam</h2>
      </Link>

      <div className="header_right-aligned">
        {isMobile ? (
          <div className="mobile-menu">
            <button onClick={toggleDropdown} className="menu-icon">
              &#9776; {/* This is a simple hamburger icon */}
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link href="/" passHref>
                  <h2 className="dropdown-item">Home</h2>
                </Link>
                <Link href="/schedule" passHref>
                  <h2 className="dropdown-item">Schedule</h2>
                </Link>
                <Link href="/wedding_party" passHref>
                  <h2 className="dropdown-item">Wedding Party</h2>
                </Link>
                <Link href="/registry" passHref>
                  <h2 className="dropdown-item">Registry</h2>
                </Link>
              </div>
            )}
          </div>
        ) : (
          <div className="header-tabset">
            <Link href="/" passHref>
              <h2 id="header-home_text" className="header-text_tabset">Home</h2>
            </Link>
            <div className="header-divider"></div>
            <Link href="/schedule" passHref>
              <h2 id="header-schedule_text" className="header-text_tabset">Schedule</h2>
            </Link>
            <div className="header-divider"></div>
            <Link href="/wedding_party" passHref>
              <h2 id="home-wedding-party_text" className="header-text_tabset">Wedding Party</h2>
            </Link>
            <div className="header-divider"></div>
            <Link href="/registry" passHref>
              <h2 id="home-registry_text" className="header-text_tabset">Registry</h2>
            </Link>
          </div>
        )}
        <Link href="/status" passHref>
          <button id="primary_action-header" className="primary-action">Your Info</button>
        </Link>
      </div>
    </div>
  );
}
