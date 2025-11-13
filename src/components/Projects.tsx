import React, { useState } from "react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Portfolio Website for a Friend",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS featuring smooth animations and mobile-first design.",
      category: "Web",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      image: "🌐",
      liveUrl: "https://sahilansari0002.github.io/Saad/",
    },
    {
      title: "My Previous Portfolio",
      description: "Personal portfolio showcasing my projects and skills with interactive elements and modern design principles.",
      category: "Web",
      technologies: ["HTML", "CSS", "JavaScript","React","Tailwind CSS","Node.Js"],
      image: "💼",
      liveUrl: "https://sahilportfolios.netlify.app/",
      githubUrl: "#"
    },
    {
      title: "SkillFirst Platform",
      description: "Educational platform for skill development with course management, progress tracking, and interactive learning modules.",
      category: "Web",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "📚",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather App",
      description: "Real-time weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      category: "Mobile",
      technologies: ["React", "API Integration", "CSS"],
      image: "🌤️",
      liveUrl: "https://weathersforecaster.netlify.app/",
      githubUrl: "#"
    },
    {
      title: "Expense Calculator",
      description: "Personal finance management tool with expense tracking, budget planning, and financial insights visualization.",
      category: "Web",
      technologies: ["JavaScript", "Local Storage", "Chart.js"],
      image: "💰",
      liveUrl: "https://rupeestrackerbysahilansari.netlify.app/",
      githubUrl: "#"
    },
    {
      title: "Brain Buzzzz",
      description: "Interactive quiz application with multiple categories, real-time scoring, and competitive leaderboards.",
      category: "Web",
      technologies: ["React", "Firebase", "CSS"],
      image: "🧠",
      liveUrl: "https://brain-buzzz.netlify.app/",
      githubUrl: "#"
    },
    {
      title: "Math Game",
      description: "Educational math game for kids with progressive difficulty levels, achievements, and performance analytics.",
      category: "Web",
      technologies: ["JavaScript", "HTML5 Canvas", "CSS"],
      image: "🔢",
      liveUrl: "https://mathgamebysahil.netlify.app/",
      githubUrl: "#"
    },
    {
      title: "Pet's Zone",
      description: "Pet care management system with appointment scheduling, health tracking, and veterinary consultation features.",
      category: "Web",
      technologies: ["React", "Node.js", "PostgreSQL"],
      image: "🐾",
      liveUrl: "https://petzoneakola.netlify.app/",
      githubUrl: "#"
    }
  ];

  const filters = ["All", "Web", "Mobile", "Design"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">Some of my recent work</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:-rotate-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image/Icon */}
              <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                {project.image}
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 rounded-full border border-cyan-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.liveUrl}
                    className="flex-1 py-2 px-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-center rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                  >
                    Live Demo
                  </a>
                  
                </div>
              </div>

              {/* Hover Glow Effect */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
