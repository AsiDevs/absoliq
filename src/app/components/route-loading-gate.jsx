"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function RouteTransition({ children, shouldSkipLoading }) {
  const videoRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(shouldSkipLoading);

  useEffect(() => {
    const video = videoRef.current;

    if (shouldSkipLoading) {
      sessionStorage.removeItem("skip-next-route-loading");
      document.body.style.overflow = "";
      requestAnimationFrame(() => {
        const hash = window.location.hash;
        if (hash) {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }
      });
      return;
    }

    if (!video) return;

    sessionStorage.removeItem("skip-next-route-loading");
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
  }, [shouldSkipLoading]);

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
      <div
        className={`route-loading-content${isRevealed ? " is-revealed" : ""}`}
      >
        {children}
      </div>
    </>
  );
}

export default function RouteLoadingGate({ children }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const routeKey = `${pathname}?${searchParams.toString()}`;
  const storedHref =
    typeof window !== "undefined"
      ? sessionStorage.getItem("skip-next-route-loading")
      : null;
  const shouldSkipLoading =
    !!storedHref &&
    storedHref.includes("#") &&
    pathname === (storedHref.split("#")[0] || "/");

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <RouteTransition key={routeKey} shouldSkipLoading={shouldSkipLoading}>
      {children}
    </RouteTransition>
  );
}
