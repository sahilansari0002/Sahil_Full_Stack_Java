import React from "react";

const Volunteer = () => {
  const volunteerExperiences = [

{
  title: "Open Source Contributor",
  organization: "Hacktoberfest 2024 & Hacktoberfest 2025 & GitHub",
  location: "Remote",
  duration: "2024 - 2025",
  description:
    "Actively contributed to multiple open-source projects during Hacktoberfest 2024 and 2025. Worked on documentation enhancements, bug fixes, feature implementations, and supported community-driven development.",
  impact: "50+ contributions across global open source repositories",
  activities: [
    "Fixed bugs and improved documentation",
    "Added new features to existing projects",
    "Helped maintain community-driven projects",
    "Mentored new contributors and first-time participants"
  ],
  color: "from-orange-400 to-red-500",
  icon: "💻"
},
{
  title: "Volunteer Head",
  organization: "Hack2Skill",
  location: "Hyderabad, India",
  duration: "Sep 2025",
  description:
    "Served as the Volunteer Head for the MetLife Job Hackathon organized by Hack2Skill. Managed all volunteers, assigned tasks, coordinated event operations, and guided participants throughout the hackathon.",
  impact: "Successfully led and coordinated the entire volunteer team",
  activities: [
    "Managed and supervised all volunteers",
    "Assigned responsibilities and ensured smooth task execution",
    "Guided participants and solved on-ground queries",
    "Supported organizers with event logistics",
    "Distributed goodies, swags, and event materials"
  ],
  color: "from-orange-400 to-red-500",
  icon: "🎯"
},
{
  title: "Media Specialist",
  organization: "Hack2Skill",
  location: "On-Site(Hyderabad ISRO)",
  duration: "Aug 2024",
  description:
    "Supported media and content activities during the Bharatiya Antariksh Hackathon 2024. Assisted with event coverage, social media coordination, and communication support for participants and organizers.",
  impact: "Contributed to successful media management for a national-level hackathon",
  activities: [
    "Coordinated event media and social updates",
    "Helped manage participant communication",
    "Supported organizers with content and announcements",
    "Volunteered during Bharatiya Antariksh Hackathon 2024"
  ],
  certification: "Certificate of Volunteering – Bharatiya Antariksh Hackathon 2024",
  color: "from-purple-400 to-indigo-500",
  icon: "📸"
},

{
  title: "Registration Desk Volunteer",
  organization: "GDG DevFest Vizag 2024",
  location: "Visakhapatnam, India",
  duration: "2024",
  description:
    "Volunteered at GDG DevFest Vizag 2024 as part of the registration and onboarding team. Created and issued ID cards to participants, managed registrations, and assisted attendees with event-related queries.",
  impact: "Ensured smooth registration and onboarding for participants",
  activities: [
    "Created and issued ID cards to participants",
    "Handled registration desk operations",
    "Responded to attendee queries and guided participants",
    "Coordinated closely with the GDG organizing team"
  ],
  color: "from-indigo-400 to-purple-500",
  icon: "🪪"
}

  ];

  return (
    <section id="volunteer" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Volunteer <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg">Giving back to the community</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {volunteerExperiences.map((volunteer, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${volunteer.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500 blur-xl`}></div>
              
              <div className="relative z-10 space-y-6">
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {volunteer.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {volunteer.title}
                    </h3>
                    <p className="text-cyan-400 font-semibold">
                      {volunteer.organization}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:gap-4 text-gray-400 text-sm mt-2">
                      <span>📍 {volunteer.location}</span>
                      <span>📅 {volunteer.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed">
                  {volunteer.description}
                </p>

                {/* Impact */}
                <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${volunteer.color} bg-clip-text text-transparent border border-current/20`}>
                  Impact: {volunteer.impact}
                </div>

                {/* Activities */}
                <div>
                  <h4 className="text-white font-semibold mb-3">Key Activities:</h4>
                  <ul className="space-y-2">
                    {volunteer.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                        <span className="text-cyan-400 mt-1">•</span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to collaborate on a social cause?
            </h3>
            <p className="text-gray-300 mb-6">
              I'm always looking for opportunities to contribute to meaningful projects and help communities through technology.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <span>Let's Connect</span>
              <span>🤝</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
