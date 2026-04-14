import { Download } from "lucide-react";
import { APK_DOWNLOAD_URL, APP_NAME } from "../constants";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-black text-xl">
            H
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900">
            {APP_NAME}
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a
            href="#features"
            className="hover:text-brand-600 transition-colors"
          >
            Features
          </a>
          <a
            href="#showcase"
            className="hover:text-brand-600 transition-colors"
          >
            Showcase
          </a>
          <a href="#install" className="hover:text-brand-600 transition-colors">
            How to Install
          </a>
        </div>
        <a
          href={APK_DOWNLOAD_URL}
          className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg flex items-center gap-2"
        >
          <Download size={16} />
          Download APK
        </a>
      </div>
    </nav>
  );
}
