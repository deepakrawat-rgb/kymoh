"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const bgImage = document.getElementById("bg-image");

    if (bgImage && window.innerWidth > 768) {
      const handleMouseMove = (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;

        bgImage.style.transform = `scale(1.03) translate(${x * -6}px, ${y * -6}px)`;
        bgImage.style.transition = "transform 0.3s ease-out";
      };

      document.addEventListener("mousemove", handleMouseMove);
      return () => document.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <>
      {/* Grain overlay */}
      <div className="grain-overlay" aria-hidden="true"></div>

      {/* Full-page background image */}
      <div className="bg-image" id="bg-image"></div>
      <div className="bg-overlay"></div>

      {/* Page content */}
      <div className="page-wrapper">
        {/* Top bar: brand + social */}
        <header className="top-bar" id="top-bar">
          <div className="brand-logo" id="brand-header">
            KYMOH
          </div>
          <div className="social-icons" id="social-links">
            <a
              href="https://www.facebook.com/share/19fiDDNP83/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              id="facebook-link"
              aria-label="Follow us on Facebook"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/kymoh.official"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              id="instagram-link"
              aria-label="Follow us on Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </header>

        {/* Center content */}
        <main className="center-content" id="center-content">
          <span className="hero-label" id="hero-label">
            WE&apos;RE
          </span>
          <h1 className="hero-heading" id="hero-heading">
            <span className="line line-1">COMING</span>
            <span className="line line-2">SOON</span>
          </h1>
          <p className="hero-description" id="hero-description">
            Something extraordinary is on its way. We&apos;re crafting a new
            experience in modern fashion &amp; lifestyle — designed for those who
            dare to stand out.
          </p>
        </main>

        {/* Bottom bar */}
        <footer className="bottom-bar" id="bottom-bar">
          <span className="footer-text">
            © 2025 Kymoh. All rights reserved.
          </span>
        </footer>
      </div>
    </>
  );
}
