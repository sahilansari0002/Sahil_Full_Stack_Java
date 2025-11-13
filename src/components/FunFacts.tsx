import React from "react";

const FunFacts = () => {
  const facts = [
    {
      icon: "☕",
      number: "5",
      text: "Cups of Tea daily",
      gradient: "from-amber-400 to-orange-500"
    },
    {
      icon: "💻",
      number: "10,000+",
      text: "Lines of code written",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      icon: "🧩",
      number: "∞",
      text: "Love solving complex problems",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: "🌟",
      number: "100%",
      text: "Passionate about open source",
      gradient: "from-green-400 to-cyan-500"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Fun <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Facts</span>
          </h2>
          <p className="text-gray-400 text-lg">Some interesting things about me</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:-rotate-2 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${fact.gradient} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500 blur-xl`}></div>
              
              <div className="relative z-10 text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {fact.icon}
                </div>
                <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${fact.gradient} bg-clip-text text-transparent`}>
                  {fact.number}
                </div>
                <p className="text-gray-300 font-medium">{fact.text}</p>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${fact.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                   style={{ padding: '2px' }}>
                <div className="w-full h-full bg-slate-900 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFacts;
