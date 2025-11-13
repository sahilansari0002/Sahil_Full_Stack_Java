import React from "react";

const WorkExperience = () => {
  const experiences = [

{
  title: "Student Ambassador",
  company: "ASPIRE, The Institute of Human Development",
  location: "Hybrid",
  duration: "Sep 2025 - Present",
  type: "Full-time",
  description:
    "Representing the institute by assisting in events, guiding new students, and supporting community-building activities. Contributing to promotional initiatives and coordinating with the training team to enhance student engagement.",
  technologies: ["Communication", "Event Coordination", "Leadership"],
  achievements: [
    "Supported multiple student engagement programs",
    "Assisted in organizing institutional events",
    "Acted as a bridge between students and faculty"
  ],
  color: "from-yellow-400 to-orange-500"
},
    {
  title: "Full Stack Developer Intern",
  company: "Bhupati Software Pvt. Ltd.",
  location: "On-site",
  duration: "May 2024 - Jul 2024",
  type: "Internship",
  description:
    "Worked on developing and enhancing web application modules using React, HTML/CSS, Java, and SQL. Collaborated with the development team to implement UI components, fix bugs, and improve overall code quality.",
  technologies: ["React", "HTML/CSS", "Java", "Git", "SQL"],
  achievements: [
    "Contributed to building responsive UI components",
    "Improved module performance and resolved key bugs",
    "Assisted team members in testing and documentation"
  ],
  color: "from-blue-400 to-cyan-500"
},

    {
  title: "Android Developer Intern",
  company: "iBase Electrosoft LLP",
  location: "Maharashtra, India (Remote)",
  duration: "May 2024 - Jun 2024",
  type: "Internship",
  description:
    "Worked on developing and improving Android application features using Java and XML. Assisted in UI implementation, debugging issues, and optimizing app performance for better user experience.",
  technologies: ["Java", "XML", "Android Studio", "Firebase", "Git"],
  achievements: [
    "Implemented key UI screens and layouts",
    "Fixed major bugs to improve app stability",
    "Collaborated remotely with the development team"
  ],
  color: "from-green-400 to-emerald-500"
}

  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg">My professional journey</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500 blur-xl`}></div>
              
              <div className="relative z-10">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Company Info */}
                  <div className="lg:col-span-1">
                    <div className="space-y-4">
                      <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${exp.color} bg-clip-text text-transparent border border-current/20`}>
                        {exp.type}
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {exp.title}
                      </h3>
                      <div className="space-y-2">
                        <p className="text-cyan-400 font-semibold text-lg">
                          {exp.company}
                        </p>
                        <p className="text-gray-400">
                          📍 {exp.location}
                        </p>
                        <p className="text-gray-400">
                          📅 {exp.duration}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Experience Details */}
                  <div className="lg:col-span-2 space-y-6">
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 rounded-full border border-cyan-400/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Achievements */}
                    <div>
                      <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-300">
                            <span className="text-cyan-400 mt-1">✓</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
