import React, { useEffect, useRef, useState } from 'react';
import { Loader2, PauseCircle, PlayCircle } from 'lucide-react';
import introVideoMp4 from '../../assets/intro-video.mp4';

export default function IntroVideoPlayer({ videoStatus, setVideoStatus, buffering, setBuffering }) {
  const videoRef = useRef(null);
  const [manualPlayRequired, setManualPlayRequired] = useState(false);

  useEffect(() => {
    if (!videoRef.current || videoStatus !== 'idle') return;
    const element = videoRef.current;
    const playPromise = element.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        setManualPlayRequired(true);
      });
    }
  }, [videoStatus]);

  const handleCanPlay = async () => {
    setBuffering(false);
    if (!videoRef.current) return;
    videoRef.current.muted = false;
    videoRef.current.volume = 1;
    try {
      await videoRef.current.play();
      setVideoStatus('playing');
    } catch {
      setManualPlayRequired(true);
    }
  };

  const handleWaiting = () => {
    setBuffering(true);
  };

  const handlePlaying = () => {
    setBuffering(false);
    setVideoStatus('playing');
  };

  const handleEnded = () => {
    setVideoStatus('ended');
  };

  const handleManualPlay = async () => {
    if (!videoRef.current) return;
    videoRef.current.muted = false;
    videoRef.current.volume = 1;
    try {
      await videoRef.current.play();
      setManualPlayRequired(false);
      setVideoStatus('playing');
    } catch {
      setManualPlayRequired(true);
    }
  };

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-slate-950 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
      <video
        ref={videoRef}
        src={introVideoMp4}
        autoPlay
        playsInline
        preload="auto"
        onCanPlay={handleCanPlay}
        onWaiting={handleWaiting}
        onPlaying={handlePlaying}
        onEnded={handleEnded}
        className="h-full w-full object-cover"
      />

      {(buffering || videoStatus === 'idle') && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-950/60">
          <div className="flex flex-col items-center gap-3 text-center text-white">
            <Loader2 className="h-10 w-10 animate-spin" />
            <p className="text-sm font-semibold">Loading your wellness introduction...</p>
          </div>
        </div>
      )}

      {manualPlayRequired && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-950/75 px-4">
          <button
            type="button"
            onClick={handleManualPlay}
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 shadow-lg transition hover:scale-[1.02]"
          >
            <PlayCircle size={20} />
            Click to play intro with audio
          </button>
        </div>
      )}

      {videoStatus === 'playing' && (
        <div className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-slate-950/75 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-slate-200 shadow-lg">
          Intro video playing
        </div>
      )}

      {videoStatus === 'ended' && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-950/40 text-center text-white">
          <div className="rounded-[1.5rem] border border-white/15 bg-slate-950/80 px-6 py-5 backdrop-blur-sm">
            <PauseCircle size={34} />
            <p className="mt-3 text-sm font-semibold">Intro complete. Preparing your guided wellness flow…</p>
          </div>
        </div>
      )}
    </div>
  );
}
