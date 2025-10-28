import { useEffect, useState } from 'react';
import { Terminal, Loader } from 'lucide-react';

const Loading = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing');

  useEffect(() => {
    const loadingSteps = [
      { text: 'Initializing', duration: 300 },
      { text: 'Loading Components', duration: 400 },
      { text: 'Preparing Interface', duration: 400 },
      { text: 'Ready', duration: 300 }
    ];

    let currentStep = 0;
    let currentProgress = 0;

    const interval = setInterval(() => {
      currentProgress += 5;
      setProgress(Math.min(currentProgress, 100));

      const stepThreshold = (currentStep + 1) * (100 / loadingSteps.length);
      if (currentProgress >= stepThreshold && currentStep < loadingSteps.length - 1) {
        currentStep++;
        setLoadingText(loadingSteps[currentStep].text);
      }

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => setLoading(false), 300);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden">
        {/* Matrix-style background effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="text-green-500 font-mono text-xs leading-tight whitespace-pre overflow-hidden">
            {Array.from({ length: 50 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                {Array.from({ length: 200 }, () => Math.random() > 0.5 ? '1' : '0').join('')}
              </div>
            ))}
          </div>
        </div>

        {/* Loading content */}
        <div className="relative z-10 text-center px-4">
          {/* Terminal icon with pulse */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Terminal className="w-16 h-16 sm:w-20 sm:h-20 text-green-400 animate-pulse" />
              <Loader className="w-8 h-8 sm:w-10 sm:h-10 text-green-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin" />
            </div>
          </div>

          {/* Loading text */}
          <div className="text-green-400 text-2xl sm:text-3xl md:text-4xl font-mono mb-6">
            <span className="inline-block animate-pulse">
              &gt; {loadingText}
              <span className="animate-blink">_</span>
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-64 sm:w-80 md:w-96 mx-auto mb-4">
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden border border-green-500/30">
              <div
                className="h-full bg-gradient-to-r from-green-600 to-green-400 transition-all duration-300 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-white opacity-30 animate-shimmer"></div>
              </div>
            </div>
            <div className="text-green-400 font-mono text-sm sm:text-base mt-2 text-right">
              {progress}%
            </div>
          </div>

          {/* System messages */}
          <div className="text-gray-500 font-mono text-xs sm:text-sm space-y-1 max-w-md mx-auto">
            <div className="opacity-60">$ Establishing secure connection...</div>
            <div className="opacity-60">$ Loading portfolio assets...</div>
            <div className="opacity-60">$ Initializing user interface...</div>
          </div>
        </div>

        <style jsx>{`
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .animate-blink {
            animation: blink 1s infinite;
          }
          .animate-shimmer {
            animation: shimmer 2s infinite;
          }
        `}</style>
      </div>
    );
  }

  return <>{children}</>;
};

export default Loading;
