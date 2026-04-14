import { useState } from "react";

type SafeImageProps = {
  src?: string;
  alt: string;
  className: string;
  fallbackClassName: string;
  fallbackLabel?: string;
};

export default function SafeImage({
  src,
  alt,
  className,
  fallbackClassName,
  fallbackLabel,
}: SafeImageProps) {
  const [isBroken, setIsBroken] = useState(false);
  const label = fallbackLabel?.trim().charAt(0).toUpperCase();

  if (!src || isBroken) {
    return (
      <div
        aria-hidden="true"
        className={`${fallbackClassName} flex items-center justify-center text-[10px] font-bold text-slate-600`}
      >
        {label || null}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => setIsBroken(true)}
    />
  );
}
