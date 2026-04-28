import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import heroVideo from '../../../../assets/avatar.mp4';

function PastMasterclassesSection() {
  const videoRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  const handlePlayClick = async () => {
    if (!videoRef.current) return;

    try {
      await videoRef.current.play();
      setHasStarted(true);
    } catch {
      // Ignore blocked play attempts and keep the play overlay visible.
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#FDFAF5] text-[#1A1410]">
      <div className="absolute inset-x-0 top-0 h-px bg-[rgba(26,20,16,0.08)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-[rgba(26,20,16,0.08)]" />

      <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto flex max-w-[980px] flex-col items-center text-center">
          <h2 className="font-['EB_Garamond',Georgia,serif] italic text-[clamp(40px,5vw,72px)] leading-[0.96]">
            Revisit our
            <br />
            past masterclasses.
          </h2>

          <Link
            to="/Workshop/IndividualFamilyMasterclass/PastMasterclass"
            className="group mt-8 inline-flex items-center gap-3 border-b border-[#1A1410]/50 pb-2 font-[Arial] text-[10px] uppercase tracking-[0.34em] text-[#1A1410] transition-colors hover:border-[#E8640A] hover:text-[#E8640A]"
          >
            <span>Browse Past Masterclasses</span>
            <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-1" />
          </Link>

          <div className="relative mt-12 w-full overflow-hidden rounded-[24px] border border-[rgba(26,20,16,0.1)] bg-black">
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              src={heroVideo}
              loop
              playsInline
              controls
            />

            {!hasStarted && (
              <button
                type="button"
                onClick={handlePlayClick}
                aria-label="Play video"
                className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#1A1410] shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-105"
              >
                <Play size={30} className="ml-1" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PastMasterclassesSection;
