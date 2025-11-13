import React, { useEffect, useRef } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = (clientX / innerWidth - 0.5) * 20;
        const y = (clientY / innerHeight - 0.5) * 20;
        
        heroRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="floating-cube absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20 animate-float"></div>
        <div className="floating-cube absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 opacity-20 animate-float-delayed"></div>
        <div className="floating-cube absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-r from-green-400 to-cyan-500 opacity-20 animate-float-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div ref={heroRef} className="transition-transform duration-100 ease-out text-center lg:text-left">
            {/* Main Heading */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">
                <span className="text-white">Hi, I'm </span>
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                  Sahil Ali
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 animate-fade-in-up animation-delay-200">
                UI/UX Enthusiast | Full Stack Java Developer
              </h2>
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-400">
                I build meaningful digital experiences that make life smarter, simpler, and more enjoyable.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in-up animation-delay-600">
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#contact"
                className="group px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/25"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Photo Container */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400 to-purple-400 p-1 bg-gradient-to-r from-cyan-400 to-purple-400">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                  {/* Placeholder for your photo - replace src with your actual photo */}
                  <img 
                    src="/public/sahil 2.jpg" 
                    alt="Sahil Ali - Full Stack Developer"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
              
              {/* Floating Elements around photo */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60 animate-pulse flex items-center justify-center text-2xl">
                💻
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-60 animate-pulse animation-delay-500 flex items-center justify-center text-xl">
                ⚛️
              </div>
              <div className="absolute top-1/2 -left-8 w-8 h-8 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full opacity-60 animate-bounce flex items-center justify-center text-sm">
                ☕
              </div>
              
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
