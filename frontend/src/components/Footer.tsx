import { APP_NAME } from "../constants";
import appIcon from "../assets/images/app-icon.png";
export default function Footer() {
  return (
    <footer className="bg-slate-50 py-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <img
                src={appIcon}
                alt="HU Story logo"
                className="w-8 h-8 rounded-lg object-cover"
              />
              <span className="font-bold text-xl tracking-tight text-slate-900">
                {APP_NAME}
              </span>
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-900">
              {APP_NAME}
            </span>
          </div>
          <p className="text-slate-500 text-xs text-center md:text-left">
            © 2026 HU Story Community. Built for students, by students.
          </p>
          <div className="flex gap-4 text-slate-400">
            <a
              href="https://www.tiktok.com/@girma_thoughts"
              className="hover:text-brand-600 transition-colors p-2 bg-white rounded-full border border-slate-100 shadow-sm"
              aria-label="TikTok"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
              >
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13-.09-.26-.18-.38-.28v6.44c.02 2.39-1.39 4.66-3.65 5.43-2.26.77-4.85.28-6.6-1.31-1.75-1.59-2.52-4.19-1.92-6.49.6-2.3 2.62-4.01 4.99-4.11v4.09c-.89.06-1.73.53-2.22 1.27-.49.74-.59 1.68-.26 2.5.33.82 1.05 1.44 1.92 1.64.87.2 1.8-.03 2.48-.6.68-.57 1.05-1.46 1-2.35V.02z" />
              </svg>
            </a>
            <a
              href="https://t.me/girma_thoughts"
              className="hover:text-brand-600 transition-colors p-2 bg-white rounded-full border border-slate-100 shadow-sm"
              aria-label="Telegram"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.52-1.4.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.39-.89.03-.25.38-.51 1.05-.78 4.12-1.79 6.87-2.97 8.24-3.55 3.93-1.64 4.74-1.92 5.27-1.93.12 0 .38.03.55.17.14.12.18.28.2.45.02.12.02.25.01.38z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@GirmaThoughts"
              className="hover:text-brand-600 transition-colors p-2 bg-white rounded-full border border-slate-100 shadow-sm"
              aria-label="Youtube"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
              >
                <path d="M21.8 8s-.2-1.4-.8-2c-.7-.8-1.5-.8-1.9-.9C16.4 5 12 5 12 5h0s-4.4 0-7.1.1c-.4.1-1.2.1-1.9.9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.6C2 14.4 2.2 16 2.2 16s.2 1.4.8 2c.7.8 1.6.8 2 .9 1.5.1 6.9.1 6.9.1s4.4 0 7.1-.1c.4-.1 1.2-.1 1.9-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.6C22 9.6 21.8 8 21.8 8zM9.75 14.5v-5l5 2.5-5 2.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
