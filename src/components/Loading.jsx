import { useEffect, useState } from "react";

const Loading = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentProgress = 0;

    const interval = setInterval(() => {
      currentProgress += 8;
      setProgress(Math.min(currentProgress, 100));

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => setLoading(false), 200);
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center">
          {/* Logo / Name */}
          <h1
            className="text-2xl sm:text-3xl font-bold text-white mb-6 tracking-tight"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Omar<span className="text-emerald-400">.</span>
          </h1>

          {/* Progress bar */}
          <div className="w-48 sm:w-56 mx-auto">
            <div className="h-0.5 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-500 transition-all duration-200 ease-out rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default Loading;
