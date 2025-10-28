import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      const totalScroll = documentHeight - windowHeight;
      const currentProgress = totalScroll > 0 ? (scrollTop / totalScroll) * 100 : 0;
      
      setProgress(currentProgress);
    };

    // Initial calculation
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Main progress bar at top */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-50 shadow-lg">
        <div
          className="h-full bg-gradient-to-r from-green-500 via-green-400 to-green-500 transition-all duration-150 ease-out relative overflow-hidden"
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuenow={Math.round(progress)}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="Page scroll progress"
        >
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
        </div>
      </div>

      {progress > 5 && (
        <div className="fixed top-4 right-4 z-50 bg-black/80 border border-green-500/50 rounded-full px-3 py-1 backdrop-blur-sm transition-opacity duration-300">
          <span className="text-green-400 font-mono text-xs sm:text-sm font-bold">
            {Math.round(progress)}%
          </span>
        </div>
      )}

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </>
  );
};

export default ScrollProgress;
