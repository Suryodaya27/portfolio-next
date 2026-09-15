"use client";

import { createContext, useContext, useState, useCallback } from "react";

const MusicContext = createContext({ isPlaying: false, setIsPlaying: () => {} });

export function MusicProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <MusicContext.Provider value={{ isPlaying, setIsPlaying }}>
      {children}
    </MusicContext.Provider>
  );
}

export function useMusicState() {
  return useContext(MusicContext);
}
