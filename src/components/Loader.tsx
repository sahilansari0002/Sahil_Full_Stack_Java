import React, { useEffect, useState } from "react";

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 300);
          return 100;
        }
        return prev + Math.random() * 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center transition-opacity duration-500 ${progress >= 100 ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center space-y-8">
        {/* Animated Logo/Name */}
        <div className="relative">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            Sahil Ali
          </h1>
          <p className="text-gray-400 text-lg mt-2 animate-fade-in-up animation-delay-200">
            Full Stack Java Developer
          </p>
        </div>

        {/* Loading Animation */}
        <div className="relative">
          {/* Spinning Circle */}
          <div className="w-20 h-20 mx-auto relative">
            <div className="absolute inset-0 border-4 border-gray-700 rounded-full"></div>
            <div 
              className="absolute inset-0 border-4 border-transparent border-t-cyan-400 border-r-purple-400 rounded-full animate-spin"
              style={{ animationDuration: '1s' }}
            ></div>
            <div className="absolute inset-2 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full animate-pulse"></div>
          </div>

          {/* Progress Bar */}
          <div className="mt-8 w-64 mx-auto">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Loading...</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Loading Text Animation */}
        <div className="flex justify-center space-x-1">
          {['L', 'o', 'a', 'd', 'i', 'n', 'g'].map((letter, index) => (
            <span
              key={index}
              className="text-white text-xl font-medium animate-bounce"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {letter}
            </span>
          ))}
          <div className="flex space-x-1 ml-2">
            {['.', '.', '.'].map((dot, index) => (
              <span
                key={index}
                className="text-cyan-400 text-xl font-bold animate-pulse"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {dot}
              </span>
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60 animate-float"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-60 animate-float-delayed"></div>
        <div className="absolute bottom-40 left-1/4 w-10 h-10 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full opacity-60 animate-float-slow"></div>
        <div className="absolute bottom-20 right-1/4 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-60 animate-bounce"></div>
      </div>
    </div>
  );
};

export default Loader;
