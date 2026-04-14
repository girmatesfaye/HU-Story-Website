import SafeImage from "./SafeImage.tsx";

type PreviewCardProps = {
  title: string;
  content: string;
  author: string;
  type: string;
  avatarSrc?: string;
};

export default function PreviewCard({
  title,
  content,
  author,
  type,
  avatarSrc,
}: PreviewCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden w-full max-w-[300px] flex-shrink-0">
      <div className="p-4 border-b border-slate-50 flex justify-between items-center">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-2 py-1 rounded">
          {type}
        </span>
        <span className="text-[10px] text-slate-400">Just now</span>
      </div>
      <div className="p-4">
        <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
        <p className="text-sm text-slate-600 line-clamp-3 mb-4">{content}</p>
        <div className="flex items-center gap-2">
          <SafeImage
            src={avatarSrc}
            alt={`${author} avatar`}
            className="w-6 h-6 rounded-full object-cover"
            fallbackClassName="w-6 h-6 rounded-full bg-slate-200"
            fallbackLabel={author}
          />
          <span className="text-xs font-medium text-slate-500">{author}</span>
        </div>
      </div>
    </div>
  );
}
