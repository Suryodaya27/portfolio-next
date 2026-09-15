"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import YouTube from "react-youtube";

/* ───────────────────────────────────────────
   Single track — start param skips to the
   main portion (in seconds)
   ─────────────────────────────────────────── */
const TRACK_ID = "cswfR85D7jM"; // Ravyn Lenae — Love Me Not
const START_SECONDS = 25;        // skip intro, jump to main portion — adjust as needed

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const playerRef = useRef(null);

  const onReady = useCallback((event) => {
    playerRef.current = event.target;
    event.target.setVolume(50);
  }, []);

  const onStateChange = useCallback(
    (event) => {
      // 1 = playing, 2 = paused, 0 = ended
      if (event.data === 1) setIsPlaying(true);
      else if (event.data === 2 || event.data === 0) setIsPlaying(false);
    },
    [setIsPlaying]
  );

  // Loop: restart from main portion when song ends
  const onEnd = useCallback(() => {
    if (playerRef.current) {
      playerRef.current.seekTo(START_SECONDS, true);
      playerRef.current.playVideo();
    }
  }, []);

  const toggle = useCallback(() => {
    if (!playerRef.current) return;
    if (!hasStarted) {
      setHasStarted(true);
      playerRef.current.seekTo(START_SECONDS, true);
      playerRef.current.playVideo();
    } else if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  }, [isPlaying, hasStarted]);

  const ytOpts = {
    height: "1",
    width: "1",
    playerVars: {
      autoplay: 0,
      controls: 0,
      disablekb: 1,
      fs: 0,
      modestbranding: 1,
      rel: 0,
      start: START_SECONDS,
    },
  };

  return (
    <div className="fixed bottom-5 right-5 z-[60]">
      {/* YouTube player — positioned offscreen, not display:none
          (hidden elements get muted by some browsers) */}
      <div
        className="absolute overflow-hidden"
        style={{ width: 1, height: 1, top: -9999, left: -9999 }}
        aria-hidden="true"
      >
        <YouTube
          videoId={TRACK_ID}
          opts={ytOpts}
          onReady={onReady}
          onStateChange={onStateChange}
          onEnd={onEnd}
        />
      </div>

      {/* Golden ring toggle */}
      <motion.button
        onClick={toggle}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        className="relative flex h-12 w-12 items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
      >
        {/* Outer golden ring with dark fill */}
        <span
          className={`absolute inset-0 rounded-full border-2 backdrop-blur-sm transition-all duration-500 ${isPlaying
            ? "border-warm shadow-[0_0_16px_hsl(36_80%_55%/0.2)]"
            : "border-warm/50 hover:border-warm"
            }`}
          style={{ backgroundColor: "hsl(220 20% 6%)" }}
        />

        {/* Pulse ring when playing */}
        {isPlaying && (
          <motion.span
            className="absolute -inset-1.5 rounded-full border border-warm/25"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        )}

        {/* Content */}
        {isPlaying ? (
          <div className="relative z-10 flex items-end gap-[3px] h-4" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-[1.5px] rounded-full bg-warm"
                animate={{ height: [4, 12 + i * 2, 5, 14 - i * 2, 4] }}
                transition={{
                  duration: 0.9 + i * 0.15,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.12,
                }}
              />
            ))}
          </div>
        ) : (
          <span className="relative z-10 text-warm text-base font-serif select-none">♪</span>
        )}
      </motion.button>
    </div>
  );
}
