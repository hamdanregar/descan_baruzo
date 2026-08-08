"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Types
interface KegiatanDesa {
  id: string;
  judulKegiatan: string;
  tanggalKegiatan: string;
  waktuMulai: string;
  waktuSelesai: string;
  tempatKegiatan: string;
  penyelenggara: string;
}

interface Agenda {
  id: string;
  judulKegiatan: string;
  tanggalKegiatan: string;
  waktuMulai: string;
  waktuSelesai: string;
  tempatKegiatan: string;
  penyelenggara: string;
}

interface Photo {
  id: string;
  title: string;
  description?: string;
  imageUrl?: string;
}

interface KepalaKeluarga {
  id: string;
}

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Administrasi Desa",
    desc: "Pengurusan surat keterangan, surat pengantar, dan dokumen resmi lainnya secara mudah.",
    color: "from-green-500 to-emerald-600",
    bg: "bg-green-50",
    href: "/informasi-desa",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Informasi Keuangan",
    desc: "Transparansi pengelolaan keuangan desa, anggaran, dan realisasi pembangunan.",
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
    href: "/apbdes",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    title: "Pengumuman",
    desc: "Informasi terkini tentang kegiatan desa, program pemerintah, dan pengumuman penting.",
    color: "from-orange-500 to-amber-600",
    bg: "bg-orange-50",
    href: "/informasi-desa",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Agenda Kegiatan",
    desc: "Jadwal kegiatan desa, pertemuan, dan acara-acara penting bagi masyarakat.",
    color: "from-purple-500 to-purple-600",
    bg: "bg-purple-50",
    href: "/agenda-desa",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: "Hukum & Peraturan",
    desc: "Dokumen hukum dan peraturan desa yang dapat diakses oleh seluruh masyarakat.",
    color: "from-red-500 to-red-600",
    bg: "bg-red-50",
    href: "/jdih",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Data Statistik",
    desc: "Data kependudukan, ekonomi, dan sosial desa untuk mendukung perencanaan pembangunan.",
    color: "from-teal-500 to-teal-600",
    bg: "bg-teal-50",
    href: "/daftar-data",
  },
];

const advantages = [
  { icon: "🏛️", title: "Pelayanan Terpadu", desc: "Layanan satu pintu untuk kemudahan masyarakat" },
  { icon: "🔍", title: "Transparansi", desc: "Informasi yang akurat dan dapat diakses publik" },
  { icon: "📱", title: "Akses Digital", desc: "Platform responsive untuk semua perangkat" },
  { icon: "🔒", title: "Keamanan Data", desc: "Perlindungan data dengan teknologi terkini" },
];

function parseDisplayDate(dateStr: string) {
  if (!dateStr) return null;

  const [datePart] = dateStr.split("T");
  const [yearStr, monthStr, dayStr] = datePart.split("-");
  const year = Number(yearStr);
  const month = Number(monthStr);
  const day = Number(dayStr);

  if (!year || !month || !day) return null;

  return new Date(year, month - 1, day);
}

function formatDate(dateStr: string) {
  const date = parseDisplayDate(dateStr);
  if (!date) return "";

  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function formatMonth(dateStr: string) {
  const date = parseDisplayDate(dateStr);
  if (!date) return "--";

  return date.toLocaleDateString("id-ID", { month: "short" }).toUpperCase();
}

function formatDay(dateStr: string) {
  const date = parseDisplayDate(dateStr);
  if (!date) return "";

  return date.getDate().toString();
}

export default function Home() {
  const [kegiatan, setKegiatan] = useState<KegiatanDesa[]>([]);
  const [agenda, setAgenda] = useState<Agenda[]>([]);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [kkCount, setKkCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [kegRes, agendaRes, photoRes, kkRes] = await Promise.all([
          fetch("/api/kegiatan-desa"),
          fetch("/api/agenda"),
          fetch("/api/photos"),
          fetch("/api/kepala-keluarga"),
        ]);
        const [kegData, agendaData, photoData, kkData] = await Promise.all([
          kegRes.json(),
          agendaRes.json(),
          photoRes.json(),
          kkRes.json(),
        ]);
        setKegiatan(Array.isArray(kegData) ? kegData.slice(0, 3) : []);
        setAgenda(Array.isArray(agendaData) ? agendaData.slice(0, 4) : []);
        setPhotos(Array.isArray(photoData) ? photoData.slice(0, 6) : []);
        setKkCount(Array.isArray(kkData) ? kkData.length : null);
      } catch {
        // silently fail — will show fallback UI
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ═══════════════════ HERO SECTION ═══════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Photo */}
        <div className="absolute inset-0">
          <img
            src="/hero-bg.png"
            alt="Desa Baruzo"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay — hijau gelap di atas foto */}
          <div className="absolute inset-0" style={{
            background: "linear-gradient(135deg, rgba(15,76,37,0.85) 0%, rgba(22,163,74,0.75) 50%, rgba(13,148,136,0.80) 100%)"
          }} />
        </div>

        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.6'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Floating circles */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float delay-300" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded-full border border-white/20 mb-8 animate-fadeIn">
            <div className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
            Portal Desa Baruzo
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight animate-fadeInUp" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Selamat Datang di<br />
            <span className="text-green-300">Desa Baruzo</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fadeInUp delay-200">
            Sistem Informasi Terpadu untuk Kemajuan Desa dan Pelayanan Masyarakat yang Cepat, Transparan, dan Modern
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp delay-300">
            <Link href="#layanan" className="btn-primary inline-flex items-center gap-2 text-base">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              Jelajahi Sekarang
            </Link>
            <Link href="/informasi-desa" className="btn-outline inline-flex items-center gap-2 text-base">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Informasi Desa
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center pt-2">
              <div className="w-1.5 h-3 bg-white/60 rounded-full" />
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════ TENTANG DESA – HEADING ═══════════════════ */}
      <section className="py-16 bg-white">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Tentang Portal Desa
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 bg-green-500 rounded-full" />
        </div>
      </section>


      {/* ═══════════════════ TENTANG DESA ═══════════════════ */}
      <section id="tentang" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Membangun Desa Digital<br />
                <span className="gradient-text">yang Maju & Transparan</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Portal Desa Baruzo adalah platform digital yang dirancang khusus untuk meningkatkan transparansi, efisiensi, dan kualitas pelayanan publik di tingkat desa. Kami menyediakan akses mudah ke informasi dan layanan yang dibutuhkan masyarakat.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Dengan teknologi modern, portal ini menghubungkan pemerintah desa dengan warga secara langsung, memastikan setiap keputusan dan kebijakan dapat diakses secara transparan oleh seluruh lapisan masyarakat.
              </p>

              {/* Advantages grid */}
              <div className="grid grid-cols-2 gap-4">
                {advantages.map((adv, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 hover:bg-green-50 transition-colors">
                    <div className="text-2xl flex-shrink-0">{adv.icon}</div>
                    <div>
                      <div className="font-semibold text-gray-800 text-sm mb-1">{adv.title}</div>
                      <div className="text-gray-500 text-xs leading-relaxed">{adv.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right visual */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-green-500 to-emerald-700 aspect-[4/3] shadow-2xl">
                {/* Decorative content inside the visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-10">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
                      <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" strokeWidth={1.5} />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Desa Baruzo</h3>


                    <div className="mt-8 grid grid-cols-2 gap-3">
                      {["Pelayanan", "Transparansi", "Digital", "Terpercaya"].map((tag) => (
                        <div key={tag} className="bg-white/15 rounded-lg py-2 px-3 text-sm font-medium backdrop-blur-sm">
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Decorative circles */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
                <div className="absolute -bottom-10 -left-10 w-52 h-52 bg-emerald-900/20 rounded-full" />
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ KOLABORASI BPS ═══════════════════ */}
      <section className="py-24" style={{ background: "linear-gradient(135deg, #1a3a6e 0%, #1e4d8c 50%, #1a3a6e 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section title */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Kolaborasi dengan BPS
            </h2>
            <div className="mt-3 mx-auto w-16 h-1 bg-orange-400 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div>
              <h3 className="text-2xl font-extrabold text-white mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Desa Cinta Statistik
              </h3>
              <p className="text-blue-100 leading-relaxed mb-6 text-sm">
                Portal Desa ini merupakan hasil kolaborasi strategis antara pemerintah desa dengan{" "}
                <span className="text-white font-semibold">Badan Pusat Statistik (BPS)</span> melalui program{" "}
                <span className="text-orange-300 font-bold">Desa Cinta Statistik</span>. Kemitraan ini
                bertujuan untuk membangun ekosistem data yang kuat di tingkat desa.
              </p>

              {/* Program highlight box */}
              <div className="bg-blue-800/50 border border-blue-600/40 rounded-2xl p-5 mb-8 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-orange-300 font-semibold text-sm mb-3">
                  <span>📊</span> Program Desa Cinta Statistik
                </div>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Inisiatif nasional untuk memperkuat literasi statistik dan meningkatkan kualitas data di
                  tingkat desa sebagai fondasi perencanaan pembangunan yang berbasis bukti.
                </p>
              </div>

              {/* Feature grid */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "📈", label: "Integrasi Data Statistik" },
                  { icon: "📊", label: "Dashboard Analytics" },
                  { icon: "🎓", label: "Pelatihan Literasi Data" },
                  { icon: "🔄", label: "Sinkronisasi Real-time" },
                ].map((f) => (
                  <div
                    key={f.label}
                    className="flex items-center gap-3 bg-blue-800/40 border border-blue-600/30 rounded-xl px-4 py-3 text-blue-100 text-sm font-medium backdrop-blur-sm hover:bg-blue-700/50 transition-colors"
                  >
                    <span className="text-lg">{f.icon}</span>
                    {f.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — BPS card */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-xs w-full text-center relative overflow-hidden">
                {/* Decorative circle */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-50 rounded-full" />
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-orange-50 rounded-full" />

                <div className="relative z-10">
                  {/* BPS Logo */}
                  <div className="w-24 h-24 mx-auto mb-5 flex items-center justify-center">
                    {!imgError ? (
                      <img
                        src="/bps-logo.png"
                        alt="Logo BPS"
                        className="w-full h-full object-contain"
                        onError={() => setImgError(true)}
                      />
                    ) : (
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 via-green-500 to-orange-500 flex items-center justify-center">
                        <span className="text-white font-extrabold text-2xl">BPS</span>
                      </div>
                    )}
                  </div>

                  <h4 className="font-extrabold text-gray-800 text-base leading-tight mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Badan Pusat Statistik<br />
                    <span className="text-white-100">Kabupaten Nias</span>
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed mb-6">
                    Mitra resmi dalam pengembangan sistem informasi desa berbasis data statistik yang akurat dan terpercaya
                  </p>

                  <div className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-5 py-2.5 rounded-full transition-colors shadow-lg shadow-orange-200">
                    <span>❤️</span> Desa Cinta Statistik
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ LAYANAN ═══════════════════ */}
      <section id="layanan" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-badge">Layanan Kami</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Layanan Digital <span className="gradient-text">Desa Baruzo</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Berbagai layanan digital yang tersedia untuk memudahkan akses masyarakat terhadap informasi dan administrasi desa
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <Link key={i} href={svc.href}>
                <div className={`card-hover bg-white rounded-2xl p-7 border border-gray-100 h-full`}>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${svc.color} flex items-center justify-center text-white mb-5 shadow-lg`}>
                    {svc.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{svc.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{svc.desc}</p>
                  <div className="mt-5 flex items-center gap-1 text-green-600 text-sm font-medium group-hover:gap-2 transition-all">
                    Selengkapnya
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>



      {/* ═══════════════════ AGENDA ═══════════════════ */}
      <section className="py-24 bg-gradient-to-br from-green-900 to-emerald-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400 rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-16 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/15 text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-4">
                Agenda Mendatang
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Jadwal Kegiatan Desa
              </h2>
            </div>
            <Link
              href="/agenda-desa"
              className="text-white/80 hover:text-white flex items-center gap-2 font-medium text-sm transition-colors border border-white/30 hover:border-white px-4 py-2 rounded-xl"
            >
              Lihat Semua Agenda
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {loading ? (
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white/10 rounded-2xl h-20 skeleton" />
              ))}
            </div>
          ) : agenda.length > 0 ? (
            <div className="space-y-4">
              {agenda.map((item) => (
                <div key={item.id} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 flex items-center gap-5 hover:bg-white/20 transition-all">
                  {/* Date badge */}
                  <div className="flex-shrink-0 bg-white rounded-2xl p-3 text-center min-w-[64px]">
                    <div className="text-xs font-bold text-green-700 uppercase">{formatMonth(item.tanggalKegiatan)}</div>
                    <div className="text-2xl font-extrabold text-gray-800 leading-tight">{formatDay(item.tanggalKegiatan)}</div>
                  </div>
                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-bold text-base mb-1 truncate">{item.judulKegiatan}</h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-white/60 text-xs">
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {item.waktuMulai} – {item.waktuSelesai}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {item.tempatKegiatan}
                      </span>
                    </div>
                  </div>
                  {/* Organizer tag */}
                  <div className="hidden sm:block flex-shrink-0">
                    <span className="bg-white/15 text-white/80 text-xs px-3 py-1.5 rounded-lg">{item.penyelenggara}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white/10 rounded-2xl border border-white/20">
              <div className="text-5xl mb-4">📅</div>
              <p className="text-white/70">Belum ada agenda yang dijadwalkan</p>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════ GALERI FOTO ═══════════════════ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-badge">Galeri</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Foto Kegiatan <span className="gradient-text">Desa</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-md mx-auto text-sm">
              Momen berharga dari berbagai kegiatan dan pembangunan Desa Baruzo
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="skeleton aspect-video rounded-2xl" />)}
            </div>
          ) : photos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((photo, i) => (
                <div key={photo.id} className="card-hover relative rounded-3xl overflow-hidden group aspect-[4/3] shadow-sm border border-gray-100 bg-gray-50">
                  <div className={`w-full h-full bg-gradient-to-br flex items-center justify-center ${i % 4 === 0 ? "from-green-400 to-emerald-600" :
                      i % 4 === 1 ? "from-blue-400 to-blue-600" :
                        i % 4 === 2 ? "from-purple-400 to-purple-600" :
                          "from-amber-400 to-orange-500"
                    }`}>
                    {photo.imageUrl ? (
                      <img src={photo.imageUrl} alt={photo.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="text-center text-white p-6">
                        <svg className="w-10 h-10 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="font-semibold text-sm">{photo.title}</p>
                      </div>
                    )}
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-bold text-lg leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>{photo.title}</h3>
                      {photo.description && (
                        <p className="text-white/80 text-sm mt-2 line-clamp-2">{photo.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
              <div className="text-5xl mb-4">🖼️</div>
              <h3 className="text-lg font-semibold text-gray-600 mb-2">Belum Ada Foto</h3>
              <p className="text-gray-400 text-sm">Galeri foto kegiatan desa akan ditampilkan di sini</p>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════ CTA BANNER ═══════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Butuh Informasi Lebih?
              </h2>
              <p className="text-green-100 mb-8 text-lg">
                Hubungi kantor desa atau kunjungi halaman informasi untuk mendapatkan bantuan
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/informasi-desa" className="bg-white text-green-700 font-bold py-3 px-8 rounded-xl hover:bg-green-50 transition-colors shadow-lg">
                  Informasi Desa
                </Link>
                <Link href="/informasi-desa" className="btn-outline py-3 px-8">
                  Hubungi Kami
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
