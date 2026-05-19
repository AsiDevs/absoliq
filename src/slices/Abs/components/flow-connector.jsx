"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "motion/react";

const MOBILE_TRAVEL_DURATION = 1.8;
const MOBILE_SLOT_GAP = 0.2;
const MOBILE_RESET_GAP = 0.5;
const DESKTOP_TRAVEL_DURATION = 1.8;
const DESKTOP_SLOT_GAP = 0.2;
const DESKTOP_RESET_GAP = 0.5;

export const MobileFlowConnector = ({ index = 0, total = 1 }) => {
  const prefersReducedMotion = useReducedMotion();
  const slotDuration = MOBILE_TRAVEL_DURATION + MOBILE_SLOT_GAP;
  const cycleDuration = Math.max(total, 1) * slotDuration + MOBILE_RESET_GAP;
  const connectorDelay = index * slotDuration;
  const repeatDelay = Math.max(cycleDuration - MOBILE_TRAVEL_DURATION, 0);

  const mobileFlowTransition = {
    duration: MOBILE_TRAVEL_DURATION,
    ease: "linear",
    delay: connectorDelay,
    repeat: Infinity,
    repeatDelay,
  };

  return (
    <div
      aria-hidden="true"
      className="xl:hidden absolute left-10 md:left-13 top-[81.46px] md:top-[106px] w-px h-[calc(100%-43.46px)] md:h-[calc(100%-54px)] pointer-events-none overflow-hidden bg-primary-light/18"
    >
      {prefersReducedMotion ? (
        <div className="mx-auto mt-6 h-14 w-px bg-linear-to-b from-primary-light/0 via-primary-light/55 to-primary-light/0" />
      ) : (
        <motion.div
          className="mx-auto h-20 w-px bg-linear-to-b from-primary-light/0 via-primary-light/95 to-primary-light/0 shadow-[0_0_10px_rgba(62,152,255,0.55)]"
          initial={{ y: "-46%", opacity: 0 }}
          animate={{
            y: ["-46%", "-8%", "54%", "102%"],
            opacity: [0, 0.78, 0.78, 0],
          }}
          transition={mobileFlowTransition}
        />
      )}
    </div>
  );
};

const FlowConnector = ({ index = 0, total = 1 }) => {
  const prefersReducedMotion = useReducedMotion();
  const connectorId = useId().replace(/:/g, "");
  const clipPathId = `${connectorId}-clip`;
  const glowGradientId = `${connectorId}-glow`;
  const coreGradientId = `${connectorId}-core`;
  const slotDuration = DESKTOP_TRAVEL_DURATION + DESKTOP_SLOT_GAP;
  const cycleDuration = Math.max(total, 1) * slotDuration + DESKTOP_RESET_GAP;
  const connectorDelay = index * slotDuration;
  const repeatDelay = Math.max(cycleDuration - DESKTOP_TRAVEL_DURATION, 0);

  const desktopFlowTransition = {
    duration: DESKTOP_TRAVEL_DURATION,
    ease: "linear",
    delay: connectorDelay,
    repeat: Infinity,
    repeatDelay,
  };

  return (
    <div
      aria-hidden="true"
      className="hidden xl:flex items-center mt-13.25 self-start w-35 pointer-events-none"
    >
      <svg viewBox="0 0 140 24" className="h-6 w-full overflow-visible">
        <defs>
          <clipPath id={clipPathId}>
            <path d="M4 10.9L125.5 11.35L125.5 12.65L4 13.1Z" />
          </clipPath>
          <linearGradient id={glowGradientId} x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#3E98FF" stopOpacity="0" />
            <stop offset="50%" stopColor="#3E98FF" stopOpacity="0.88" />
            <stop offset="100%" stopColor="#3E98FF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={coreGradientId} x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          d="M4 10.9L125.5 11.35L125.5 12.65L4 13.1Z"
          fill="#3E98FF"
          fillOpacity="0.22"
        />
        <path
          d="M4 11.8H126"
          stroke="#FFFFFF"
          strokeOpacity="0.4"
          strokeWidth="0.5"
          strokeLinecap="round"
        />

        {prefersReducedMotion ? (
          <g clipPath={`url(#${clipPathId})`}>
            <rect
              x="38"
              y="7"
              width="56"
              height="9.5"
              rx="4.75"
              fill={`url(#${glowGradientId})`}
              opacity="1"
            />
            <rect
              x="54"
              y="8.35"
              width="28"
              height="6.8"
              rx="3.4"
              fill={`url(#${coreGradientId})`}
              opacity="0.98"
            />
          </g>
        ) : (
          <g
            clipPath={`url(#${clipPathId})`}
            style={{ filter: "drop-shadow(0 0 5px rgba(62, 152, 255, 0.55))" }}
          >
            <motion.rect
              initial={{ x: -64, opacity: 0 }}
              animate={{
                x: [-72, -20, 72, 148],
                opacity: [0, 0.75, 0.75, 0],
              }}
              transition={desktopFlowTransition}
              y="7"
              width="76"
              height="9.5"
              rx="4.75"
              fill={`url(#${glowGradientId})`}
            />
            <motion.rect
              initial={{ x: -48, opacity: 0 }}
              animate={{
                x: [-56, -6, 86, 164],
                opacity: [0, 0.55, 0.55, 0],
              }}
              transition={desktopFlowTransition}
              y="8.35"
              width="38"
              height="6.8"
              rx="3.4"
              fill={`url(#${coreGradientId})`}
            />
          </g>
        )}
      </svg>
    </div>
  );
};

export default FlowConnector;
