"use client";

import React, { useEffect, useRef } from 'react';

export default function AdUnit({ slotId = "1234567890", format = "auto", responsive = true, style = {} }) {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
        (window as any).adsbygoogle.push({});
      }
    } catch (e) {
      console.error("AdSense error", e);
    }
  }, []);

  return (
    <div className="w-full my-4 flex justify-center overflow-hidden min-h-[100px] items-center">
      <ins className="adsbygoogle"
           style={{ display: 'block', ...style }}
           data-ad-client="ca-pub-2892900713777311"
           data-ad-slot={slotId}
           data-ad-format={format}
           data-full-width-responsive={responsive ? "true" : "false"}
           ref={adRef}>
      </ins>
    </div>
  );
}
