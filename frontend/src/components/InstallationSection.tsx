import { Download, ShieldCheck } from "lucide-react";
import { APK_DOWNLOAD_URL } from "../constants";

export default function InstallationSection() {
  return (
    <section id="install" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16 border border-slate-100">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-8">
                How to install the APK
              </h2>
              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "Download the APK",
                    desc: "Click the download button to get the latest version of HU Story.",
                  },
                  {
                    step: "02",
                    title: "Enable Unknown Sources",
                    desc: "Go to Settings > Security and enable 'Install from unknown sources' if prompted.",
                  },
                  {
                    step: "03",
                    title: "Install & Launch",
                    desc: "Open the downloaded file and follow the prompts to install. Welcome to the community!",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-6">
                    <span className="text-4xl font-black text-brand-200 leading-none">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="font-bold text-xl text-slate-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-brand-600 rounded-xl flex items-center justify-center text-white">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Safe & Secure</h4>
                  <p className="text-sm text-slate-500">
                    Verified by HU Student Devs
                  </p>
                </div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">File Size</span>
                  <span className="font-bold text-slate-900">100.4 MB</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Compatibility</span>
                  <span className="font-bold text-slate-900">Android 7.0+</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Last Updated</span>
                  <span className="font-bold text-slate-900">April 2026</span>
                </div>
              </div>
              <a
                href={APK_DOWNLOAD_URL}
                className="w-full bg-brand-600 hover:bg-brand-700 text-white py-4 rounded-2xl font-bold transition-all shadow-lg flex items-center justify-center gap-3"
              >
                <Download size={20} />
                Start Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
