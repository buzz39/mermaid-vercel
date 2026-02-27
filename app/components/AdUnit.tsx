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
    <div className="w-full my-4 flex justify-center bg-gray-50 border border-gray-100 rounded-lg overflow-hidden min-h-[100px] items-center text-gray-400 text-xs uppercase tracking-widest relative group">
       <span className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 group-hover:opacity-10 transition-opacity">
         Advertisement
       </span>
      {/* Placeholder for real AdSense unit */}
      {/*
      <ins className="adsbygoogle"
           style={{ display: 'block', ...style }}
           data-ad-client="ca-pub-XXXXXXXXXXXXXX"
           data-ad-slot={slotId}
           data-ad-format={format}
           data-full-width-responsive={responsive ? "true" : "false"}
           ref={adRef}>
      </ins>
      */}
      <div className="text-center p-4 w-full">
         <div className="w-full h-24 bg-gray-200 animate-pulse rounded"></div>
      </div>
    </div>
  );
}
