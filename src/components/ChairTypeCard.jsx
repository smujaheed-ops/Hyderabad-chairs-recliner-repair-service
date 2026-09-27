import React, { useState } from 'react';

export default function ChairTypeCard({ chair }) {
  const { name, subtitle, badge, image, alt, fallback } = chair;
  const [imgSrc, setImgSrc] = useState(image);

  return (
    <div className="bg-surface-container-lowest rounded-xl p-3 shadow-sm hover:shadow-md transition-all flex flex-col text-center items-center">
      <div className="w-full h-44 rounded-lg overflow-hidden bg-surface-container mb-3 flex items-center justify-center p-2">
        <img
          alt={alt}
          className="h-full w-auto object-contain transition-transform duration-300 hover:scale-105"
          src={imgSrc}
          loading="lazy"
          onError={() => {
            if (fallback && imgSrc !== fallback) {
              setImgSrc(fallback);
            }
          }}
        />
      </div>
      <span className="font-label-md text-label-md text-primary font-bold">{name}</span>
      <span className="font-body-sm text-[11px] text-on-surface-variant mt-0.5">{subtitle}</span>
      <span className="mt-2 text-[10px] font-label-sm font-bold text-secondary uppercase bg-secondary-fixed/50 px-2 py-0.5 rounded">
        {badge}
      </span>
    </div>
  );
}
