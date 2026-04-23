import { Download, Play } from "lucide-react";
import { motion } from "motion/react";
import { APK_DOWNLOAD_URL, APP_VERSION, YOUTUBE_DEMO_URL } from "../constants";
import PreviewCard from "./PreviewCard";
import SafeImage from "./SafeImage";

const studentAvatars = [
  "https://i.pravatar.cc/100?img=11",
  "https://i.pravatar.cc/100?img=32",
  "https://i.pravatar.cc/100?img=47",
  "https://i.pravatar.cc/100?img=56",
];

export default function HeroSection() {
  return (
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
              The heartbeat of{" "}
              <span className="text-brand-600">Hawassa University</span>{" "}
              students.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-10 max-w-xl">
              Connect with your campus like never before. Share rants, discover
              hidden spots, stay updated on events, and collaborate on student
              projects—all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={APK_DOWNLOAD_URL}
                className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all shadow-xl shadow-brand-200 hover:shadow-brand-300 flex items-center justify-center gap-3 group"
              >
                <Download
                  size={20}
                  className="group-hover:translate-y-0.5 transition-transform"
                />
                Download APK
              </a>
              <a
                href={YOUTUBE_DEMO_URL}
                target="_blank"
                rel="noreferrer"
                className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl text-lg font-bold transition-all flex items-center justify-center gap-3"
              >
                View demo video
                <Play size={20} />
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-slate-500">
              <div className="flex -space-x-2">
                {studentAvatars.map((avatar, index) => (
                  <SafeImage
                    key={avatar}
                    src={avatar}
                    alt={`Student ${index + 1} avatar`}
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    fallbackClassName="w-8 h-8 rounded-full border-2 border-white bg-slate-200"
                    fallbackLabel={`S${index + 1}`}
                  />
                ))}
              </div>
              <p>
                Joined by{" "}
                <span className="font-bold text-slate-900">1,000+</span>{" "}
                students this semester
              </p>
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
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="w-6 h-6 rounded bg-white/30" />
                  ))}
                </div>
              </div>
            </div>
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
                avatarSrc="https://i.pravatar.cc/100?img=3"
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
                avatarSrc="https://i.pravatar.cc/100?img=65"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
