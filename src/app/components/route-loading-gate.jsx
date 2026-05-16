"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function RouteLoadingGate({ children }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const videoRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    setIsRevealed(false);
    document.body.style.overflow = "hidden";
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
    video.currentTime = 0;

    const p = video.play();
    if (p?.catch) {
      p.catch(() => {
        setIsRevealed(true);
        document.body.style.overflow = "";
      });
    }
  }, [pathname, searchParams]);

  const reveal = () => {
    setIsRevealed(true);
    document.body.style.overflow = "";
  };

  return (
    <>
      <div
        className={`route-loading-overlay${isRevealed ? " is-hidden" : ""}`}
        aria-hidden={isRevealed}
      >
        <video
          ref={videoRef}
          className="route-loading-video"
          src="/videos/loading.mp4"
          muted
          playsInline
          preload="auto"
          onEnded={reveal}
          onError={reveal}
        />
      </div>
      <div className={`route-loading-content${isRevealed ? " is-revealed" : ""}`}>
        {children}
      </div>
    </>
  );
}
