import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Informasi Desa - Portal Desa Konoha",
    description: "Informasi umum tentang Desa Konoha, profil desa, visi & misi",
};

export default function InformasiDesa() {
    const profil = [
        { label: "Nama Desa", value: "Desa Konoha" },
        { label: "Kecamatan", value: "Kecamatan Konoha" },
        { label: "Kabupaten/Kota", value: "Kabupaten Konoha" },
        { label: "Provinsi", value: "-" },
        { label: "Kode Pos", value: "00000" },
        { label: "Luas Wilayah", value: "± 100 Ha" },
        { label: "Jumlah Dusun", value: "4 Dusun" },
        { label: "Batas Utara", value: "Desa Utara" },
        { label: "Batas Selatan", value: "Desa Selatan" },
        { label: "Batas Timur", value: "Desa Timur" },
        { label: "Batas Barat", value: "Desa Barat" },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Page Header */}
            <div className="hero-bg pt-32 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="section-badge bg-white/15 text-white border-white/20">Profil Desa</div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Informasi Desa
                    </h1>
                    <p className="text-white/70 text-lg max-w-2xl">
                        Informasi lengkap mengenai profil, visi & misi, serta gambaran umum Desa Konoha
                    </p>
                </div>
            </div>

            {/* Breadcrumb */}
            <div className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <a href="/" className="hover:text-green-600 transition-colors">Beranda</a>
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        <span className="text-green-600 font-medium">Informasi Desa</span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Profil Desa */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <h2 className="text-xl font-bold text-gray-900">Profil Desa</h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {profil.map((item) => (
                                    <div key={item.label} className="flex items-start gap-3 py-3 border-b border-gray-50 last:border-0">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0 mt-2" />
                                        <div>
                                            <div className="text-xs text-gray-400 mb-0.5">{item.label}</div>
                                            <div className="text-sm font-semibold text-gray-800">{item.value}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sejarah Desa */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <h2 className="text-xl font-bold text-gray-900">Selayang Pandang</h2>
                            </div>
                            <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed">
                                <p className="mb-4">
                                    Desa Konoha adalah sebuah desa yang terletak di wilayah yang subur dan strategis. Desa ini memiliki sejarah panjang dalam pengembangan pertanian dan komunitas masyarakat yang solid.
                                </p>
                                <p className="mb-4">
                                    Dengan komitmen untuk terus berkembang, Desa Konoha telah mengadopsi berbagai program digitalisasi untuk meningkatkan kualitas pelayanan publik kepada masyarakat. Portal digital ini adalah salah satu wujud nyata dari upaya tersebut.
                                </p>
                                <p>
                                    Melalui portal ini, seluruh informasi tentang desa, administrasi, dan kegiatan dapat diakses oleh masyarakat secara transparan dan mudah, kapan saja dan di mana saja.
                                </p>
                            </div>
                        </div>

                        {/* Potensi Desa */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h2 className="text-xl font-bold text-gray-900">Potensi Desa</h2>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {[
                                    { icon: "🌾", label: "Pertanian", desc: "Sawah & ladang produktif" },
                                    { icon: "🐄", label: "Peternakan", desc: "Ternak sapi & kambing" },
                                    { icon: "🎋", label: "Perkebunan", desc: "Kebun buah & sayuran" },
                                    { icon: "🏪", label: "UMKM", desc: "Usaha mikro & kecil" },
                                    { icon: "🏞️", label: "Wisata", desc: "Potensi alam desa" },
                                    { icon: "⚡", label: "Energi", desc: "Sumber daya alam" },
                                ].map((p) => (
                                    <div key={p.label} className="bg-gray-50 rounded-xl p-4 text-center hover:bg-green-50 transition-colors">
                                        <div className="text-3xl mb-2">{p.icon}</div>
                                        <div className="font-semibold text-gray-800 text-sm mb-1">{p.label}</div>
                                        <div className="text-gray-500 text-xs">{p.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Visi */}
                        <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-6 text-white">
                            <div className="text-xs font-bold uppercase tracking-wider text-green-200 mb-3">Visi Desa</div>
                            <p className="font-semibold leading-relaxed text-sm">
                                "Terwujudnya Desa Konoha yang Maju, Sejahtera, Mandiri, dan Berbudaya melalui Pembangunan yang Partisipatif dan Berkelanjutan"
                            </p>
                        </div>

                        {/* Misi */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Misi Desa</div>
                            <ul className="space-y-3">
                                {[
                                    "Meningkatkan kualitas pelayanan publik",
                                    "Membangun infrastruktur desa yang merata",
                                    "Meningkatkan kesejahteraan masyarakat",
                                    "Melestarikan budaya dan kearifan lokal",
                                    "Mengembangkan potensi ekonomi desa",
                                ].map((m, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                                        <div className="w-5 h-5 bg-green-100 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-green-700 font-bold text-xs">{i + 1}</span>
                                        </div>
                                        {m}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Kontak */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Kontak Desa</div>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                                    </div>
                                    <div className="text-sm text-gray-600">Desa Konoha, Kecamatan Konoha, Kabupaten Konoha</div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    </div>
                                    <div className="text-sm text-gray-600">(021) 1234-5678</div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </div>
                                    <div className="text-sm text-gray-600">info@desakonoha.id</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
