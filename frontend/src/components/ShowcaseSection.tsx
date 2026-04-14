import { CheckCircle2 } from "lucide-react";

export default function ShowcaseSection() {
  return (
    <section
      id="showcase"
      className="py-24 bg-slate-900 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-extrabold mb-8 leading-tight">
              A premium experience <br />
              <span className="text-brand-400">in your pocket.</span>
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Lightweight & Fast",
                  desc: "Optimized for all Android devices, even with limited storage.",
                },
                {
                  title: "Student Verified",
                  desc: "Only Hawassa University students can access the full community features.",
                },
                {
                  title: "Privacy First",
                  desc: "You control your identity. Post anonymously whenever you need to.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-400">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative h-[400px] lg:h-auto overflow-hidden">
            <div className="flex gap-4 sm:gap-6 animate-scroll justify-center">
              <div className="flex flex-col gap-4 sm:gap-6">
                <div className="w-48 h-72 sm:w-64 sm:h-96 bg-slate-800 rounded-3xl border border-slate-700" />
                <div className="w-48 h-72 sm:w-64 sm:h-96 bg-slate-800 rounded-3xl border border-slate-700" />
              </div>
              <div className="flex flex-col gap-4 sm:gap-6 mt-12">
                <div className="w-48 h-72 sm:w-64 sm:h-96 bg-slate-800 rounded-3xl border border-slate-700" />
                <div className="w-48 h-72 sm:w-64 sm:h-96 bg-slate-800 rounded-3xl border border-slate-700" />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-slate-900 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
