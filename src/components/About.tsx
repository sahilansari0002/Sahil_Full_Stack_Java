import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Discover My Journey into the{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                World
              </span>{" "}
              of Java & Full-Stack Innovation.
            </h2>
            
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                👋 Hello! I'm <strong className="text-cyan-400">Sahil Ali</strong>, a driven Full Stack Java Developer who turns ideas into powerful, scalable digital experiences. With hands-on expertise in Java, React.js, Node.js, C, and Python, I build applications that don’t just work — they perform, scale, and delight users.
              </p>
              
              <p>
                What began as simple curiosity about how websites function has grown into a mission to craft clean, elegant, and high-performance software. From designing intuitive user interfaces to architecting robust backend systems, I bring end-to-end development to life with precision and creativity.              
              </p>
              
<h3>🚀 What Drives Me</h3>
<ul>
  <li>Solving real-world problems through smart and scalable engineering</li>
  <li>Adapting quickly to new technologies and innovation waves</li>
  <li>Giving back to the community through open-source contributions</li>
  <li>Collaborating on projects that push boundaries and create real impact</li>
</ul>

<p>Beyond coding, I’m always exploring emerging tools, improving my craft, and exchanging knowledge with fellow developers. I believe in innovation, teamwork, and continuous growth — values that define every project I take on.</p>
              
              <p>
🌐 Let’s connect, collaborate, and build something extraordinary. The future is full of possibilities — and I'm here to create it.              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <div className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30">
                <span className="text-cyan-400 font-medium">Problem Solver</span>
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-400/30">
                <span className="text-purple-400 font-medium">Team Player</span>
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full border border-green-400/30">
                <span className="text-green-400 font-medium">Innovation Driven</span>
              </div>
            </div>
          </div>

          {/* Professional Photo */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <div className="aspect-square rounded-2xl overflow-hidden">
                {/* Replace with your professional photo */}
                <img 
                  src="/public/about-waala.jpg" 
                  alt="Sahil Ali - Professional Photo"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60 animate-pulse flex items-center justify-center text-2xl">
                🚀
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-60 animate-pulse animation-delay-500 flex items-center justify-center text-xl">
                💡
              </div>
              <div className="absolute top-1/2 -left-8 w-8 h-8 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full opacity-60 animate-bounce flex items-center justify-center text-sm">
                ⭐
              </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
