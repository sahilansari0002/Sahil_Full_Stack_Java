import React, { useState } from "react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("All Skills");

  const skillCategories = {
    "All Skills": [
      { name: "React", level: 90, icon: "⚛️" },
      { name: "TypeScript", level: 85, icon: "📘" },
      { name: "JavaScript", level: 95, icon: "🟨" },
      { name: "HTML/CSS", level: 90, icon: "🎨" },
      { name: "Tailwind", level: 88, icon: "🎭" },
      { name: "Node.js", level: 80, icon: "🟢" },
      { name: "SQL", level: 75, icon: "🗄️" },
      { name: "Git", level: 85, icon: "📚" },
      { name: "PHP", level: 82, icon: "▲" },
      { name: "C", level: 70, icon: "🔧" },
      { name: "Java", level: 88, icon: "☕" },
    ],
    "Frontend": [
      { name: "React", level: 90, icon: "⚛️" },
      { name: "TypeScript", level: 85, icon: "📘" },
      { name: "JavaScript", level: 95, icon: "🟨" },
      { name: "HTML/CSS", level: 90, icon: "🎨" },
      { name: "Tailwind", level: 88, icon: "🎭" },
      { name: "Next.js", level: 82, icon: "▲" },
    ],
    "Backend": [
      { name: "PHP", level: 80, icon: "🟢" },
      { name: "Java", level: 88, icon: "☕" },
      { name: "SQL", level: 75, icon: "🗄️" },
      { name: "C", level: 70, icon: "🔧" },
    ],
    "Tools": [
      { name: "Git", level: 85, icon: "📚" },
      { name: "VS Code", level: 90, icon: "💻" },
      { name: "Figma", level: 75, icon: "🎨" },
      { name: "Docker", level: 65, icon: "🐳" },
    ],
  };

  const tabs = Object.keys(skillCategories);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg">Technologies I work with</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories[activeTab as keyof typeof skillCategories].map((skill, index) => (
            <div
              key={skill.name}
              className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
                  <p className="text-gray-400 text-sm">{skill.level}% Proficiency</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative">
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  ></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
