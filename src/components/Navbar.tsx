"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Beranda" },
    {
      label: "Informasi Desa",
      dropdown: [
        { href: "/informasi-desa", label: "Informasi Umum" },
        { href: "/agenda-desa", label: "Agenda Desa" },
        { href: "/kegiatan-desa", label: "Kegiatan Desa" },
      ],
    },
    { href: "/struktur-organisasi", label: "Struktur Organisasi Desa" },
    { href: "/jdih", label: "JDIH" },
    { href: "/apbdes", label: "APBDes" },
    { href: "/daftar-data", label: "Daftar Data" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white shadow-lg py-2"
        : "bg-transparent py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${scrolled ? "bg-green-600" : "bg-white/20 backdrop-blur-sm"
                }`}
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white" stroke="currentColor" strokeWidth={2}>
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <div>
              <div
                className={`text-base font-bold leading-tight transition-all duration-300 ${scrolled ? "text-green-700" : "text-white"
                  }`}
              >
                Desa Baruzo
              </div>

            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, idx) =>
              link.dropdown ? (
                <div key={idx} className="relative">
                  <button
                    onClick={() => setInfoOpen(!infoOpen)}
                    onBlur={() => setTimeout(() => setInfoOpen(false), 150)}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${scrolled
                      ? "text-gray-700 hover:text-green-600 hover:bg-green-50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                      }`}
                  >
                    {link.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${infoOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {infoOpen && (
                    <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${scrolled
                    ? "text-gray-700 hover:text-green-600 hover:bg-green-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-all ${scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
              }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 py-4 space-y-1">
            <Link
              href="/"
              className="flex items-center gap-2 px-4 py-3 rounded-xl text-gray-700 hover:text-green-600 hover:bg-green-50 font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Beranda
            </Link>
            <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Informasi Desa
            </div>
            <Link
              href="/informasi-desa"
              className="flex items-center gap-2 px-4 py-3 rounded-xl text-gray-600 hover:text-green-600 hover:bg-green-50 font-medium transition-colors ml-2"
              onClick={() => setIsOpen(false)}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              Informasi Umum
            </Link>
            <Link
              href="/agenda-desa"
              className="flex items-center gap-2 px-4 py-3 rounded-xl text-gray-600 hover:text-green-600 hover:bg-green-50 font-medium transition-colors ml-2"
              onClick={() => setIsOpen(false)}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              Agenda Desa
            </Link>
            {[
              { href: "/struktur-organisasi", label: "Struktur Organisasi Desa" },
              { href: "/jdih", label: "JDIH" },
              { href: "/apbdes", label: "APBDes" },
              { href: "/daftar-data", label: "Daftar Data" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-gray-700 hover:text-green-600 hover:bg-green-50 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
