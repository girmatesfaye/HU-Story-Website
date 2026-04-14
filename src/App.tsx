import React from 'react';
import { motion } from 'motion/react';
import { 
  Download, 
  Smartphone, 
  Users, 
  Zap, 
  ShieldCheck, 
  MessageSquare, 
  MapPin, 
  Calendar, 
  Briefcase,
  ChevronRight,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { APK_DOWNLOAD_URL, APP_NAME, APP_VERSION } from './constants';

const FeatureCard = ({ icon: Icon, title, description, color }: { icon: any, title: string, description: string, color: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-4"
  >
    <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center text-white`}>
      <Icon size={24} />
    </div>
    <div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const PreviewCard = ({ title, content, author, type }: { title: string, content: string, author: string, type: string }) => (
  <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden w-full max-w-[300px] flex-shrink-0">
    <div className="p-4 border-b border-slate-50 flex justify-between items-center">
      <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-2 py-1 rounded">{type}</span>
      <span className="text-[10px] text-slate-400">Just now</span>
    </div>
    <div className="p-4">
      <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
      <p className="text-sm text-slate-600 line-clamp-3 mb-4">{content}</p>
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-slate-200" />
        <span className="text-xs font-medium text-slate-500">{author}</span>
      </div>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-brand-100 selection:text-brand-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-black text-xl">H</div>
            <span className="font-bold text-xl tracking-tight text-slate-900">{APP_NAME}</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-brand-600 transition-colors">Features</a>
            <a href="#showcase" className="hover:text-brand-600 transition-colors">Showcase</a>
            <a href="#install" className="hover:text-brand-600 transition-colors">How to Install</a>
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-100/50 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-emerald-100/50 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold mb-6 border border-brand-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                </span>
                Version {APP_VERSION} is now live
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                The heartbeat of <span className="text-brand-600">Hawassa University</span> students.
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-10 max-w-xl">
                Connect with your campus like never before. Share rants, discover hidden spots, stay updated on events, and collaborate on student projects—all in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={APK_DOWNLOAD_URL}
                  className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all shadow-xl shadow-brand-200 hover:shadow-brand-300 flex items-center justify-center gap-3 group"
                >
                  <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
                  Download APK
                </a>
                <button className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl text-lg font-bold transition-all flex items-center justify-center gap-3">
                  Open Web App
                  <ArrowRight size={20} />
                </button>
              </div>
              <div className="mt-8 flex items-center gap-4 text-sm text-slate-500">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />
                  ))}
                </div>
                <p>Joined by <span className="font-bold text-slate-900">2,000+</span> students this semester</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mt-12 lg:mt-0"
            >
              <div className="relative z-10 mx-auto w-[240px] h-[500px] sm:w-[280px] sm:h-[580px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20" />
                <div className="h-full w-full bg-brand-600 p-4 flex flex-col gap-4">
                  <div className="mt-8 flex justify-between items-center text-white">
                    <div className="w-10 h-10 rounded-full bg-white/20" />
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-lg bg-white/20" />
                      <div className="w-8 h-8 rounded-lg bg-white/20" />
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4 h-32 flex flex-col justify-end">
                    <div className="w-2/3 h-4 bg-white/30 rounded mb-2" />
                    <div className="w-full h-2 bg-white/20 rounded" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="aspect-square bg-white/10 rounded-2xl" />
                    <div className="aspect-square bg-white/10 rounded-2xl" />
                  </div>
                  <div className="mt-auto flex justify-around py-4 bg-white/10 rounded-2xl">
                    {[1, 2, 3, 4].map(i => <div key={i} className="w-6 h-6 rounded bg-white/30" />)}
                  </div>
                </div>
              </div>
              {/* Floating elements - hidden on small mobile */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-20 -left-4 sm:-left-10 z-20 scale-75 sm:scale-100 hidden xs:block"
              >
                <PreviewCard 
                  type="Rant"
                  title="Cafeteria Lines 😤"
                  content="Why are the lines so long today? I've been waiting for 30 mins just for some shiro..."
                  author="Anonymous"
                />
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-20 -right-4 sm:-right-10 z-20 scale-75 sm:scale-100 hidden xs:block"
              >
                <PreviewCard 
                  type="Event"
                  title="Tech Meetup 2024"
                  content="Join us at the Main Hall for a deep dive into React Native and AI. Free snacks!"
                  author="Tech Club"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-600 font-bold tracking-widest uppercase text-sm mb-4">Why Students Love It</h2>
            <p className="text-4xl font-extrabold text-slate-900 mb-6">Designed for the modern Hawassa student.</p>
            <p className="text-lg text-slate-600">We built HU Story to solve the fragmentation of campus life. No more missing out on what's happening around you.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={MessageSquare}
              title="Rants"
              description="Speak your mind anonymously or publicly. The safe space for campus feedback."
              color="bg-orange-500"
            />
            <FeatureCard 
              icon={MapPin}
              title="Spots"
              description="Discover the best study corners, chill zones, and hidden gems on campus."
              color="bg-brand-500"
            />
            <FeatureCard 
              icon={Calendar}
              title="Events"
              description="Never miss a club meeting, sports match, or workshop again."
              color="bg-blue-500"
            />
            <FeatureCard 
              icon={Briefcase}
              title="Projects"
              description="Find teammates for your next big idea or academic assignment."
              color="bg-purple-500"
            />
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section id="showcase" className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-extrabold mb-8 leading-tight">A premium experience <br/><span className="text-brand-400">in your pocket.</span></h2>
              <div className="space-y-6">
                {[
                  { title: "Lightweight & Fast", desc: "Optimized for all Android devices, even with limited storage." },
                  { title: "Student Verified", desc: "Only Hawassa University students can access the full community features." },
                  { title: "Privacy First", desc: "You control your identity. Post anonymously whenever you need to." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-400">
                      <CheckCircle2 size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-slate-400 leading-relaxed">{item.desc}</p>
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

      {/* Installation Section */}
      <section id="install" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16 border border-slate-100">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-8">How to install the APK</h2>
                <div className="space-y-8">
                  {[
                    { step: "01", title: "Download the APK", desc: "Click the download button to get the latest version of HU Story." },
                    { step: "02", title: "Enable Unknown Sources", desc: "Go to Settings > Security and enable 'Install from unknown sources' if prompted." },
                    { step: "03", title: "Install & Launch", desc: "Open the downloaded file and follow the prompts to install. Welcome to the community!" }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <span className="text-4xl font-black text-brand-200 leading-none">{item.step}</span>
                      <div>
                        <h4 className="font-bold text-xl text-slate-900 mb-2">{item.title}</h4>
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
                    <p className="text-sm text-slate-500">Verified by HU Student Devs</p>
                  </div>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">File Size</span>
                    <span className="font-bold text-slate-900">12.4 MB</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Compatibility</span>
                    <span className="font-bold text-slate-900">Android 7.0+</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Last Updated</span>
                    <span className="font-bold text-slate-900">April 2024</span>
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

      {/* Footer */}
      <footer className="bg-slate-50 py-8 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-brand-600 rounded flex items-center justify-center text-white font-black text-sm">H</div>
              <span className="font-bold text-lg tracking-tight text-slate-900">{APP_NAME}</span>
            </div>
            <p className="text-slate-500 text-xs text-center md:text-left">
              © 2024 HU Story Community. Built for students, by students.
            </p>
            <div className="flex gap-4 text-slate-400">
              <a href="#" className="hover:text-brand-600 transition-colors p-2 bg-white rounded-full border border-slate-100 shadow-sm" aria-label="TikTok">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13-.09-.26-.18-.38-.28v6.44c.02 2.39-1.39 4.66-3.65 5.43-2.26.77-4.85.28-6.6-1.31-1.75-1.59-2.52-4.19-1.92-6.49.6-2.3 2.62-4.01 4.99-4.11v4.09c-.89.06-1.73.53-2.22 1.27-.49.74-.59 1.68-.26 2.5.33.82 1.05 1.44 1.92 1.64.87.2 1.8-.03 2.48-.6.68-.57 1.05-1.46 1-2.35V.02z"/></svg>
              </a>
              <a href="#" className="hover:text-brand-600 transition-colors p-2 bg-white rounded-full border border-slate-100 shadow-sm" aria-label="Telegram">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.52-1.4.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.39-.89.03-.25.38-.51 1.05-.78 4.12-1.79 6.87-2.97 8.24-3.55 3.93-1.64 4.74-1.92 5.27-1.93.12 0 .38.03.55.17.14.12.18.28.2.45.02.12.02.25.01.38z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

