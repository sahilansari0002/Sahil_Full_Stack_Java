import React, { useState } from "react";

const Achievements = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const achievements = [
    {
      title: "Top 1000 - SBI Youth Ideathon 2025",
      description: "Selected among the Top 1000 teams out of 44,000+ participants across India for the SBI Youth Ideathon 2025. Represented our team with the slogan 'Nayi Soch, Naya Bharat' at the Grand Finale held at the IIT Delhi campus.",
      date: "2025",
      category: "Competition",
      icon: "🏆",
      color: "from-yellow-400 to-orange-500",
      image: "/iit-with-cert.jpg", // Replace with actual achievement photo
      linkedinUrl: "https://www.linkedin.com/posts/sahilansari0002_cyi2025-iitdelhi-sbiyouthideathon-activity-7323972235025690624-BlsG" // Replace with actual LinkedIn post
    },
    {
      title: "Google Cloud Arcade Champion Milestone",
      description: "Achieved the Champion Milestone in the Google Cloud Arcade event. Received exclusive gifts and recognition from Google Cloud for outstanding performance and completing all tasks successfully.",
      date: "2025",
      category: "Goodies",
      icon: "☁️",
      color: "from-blue-400 to-cyan-500",
      image: "/champinion.jpg", // Replace with actual certificate photo
      linkedinUrl: "https://www.linkedin.com/posts/sahilansari0002_arcade-google-googlecloudarcade2k24-activity-7312518810924630016-UfrV" // Replace with actual LinkedIn post
    },
    {
      title: "Best Performer of the Batch | Aspire Institue",
      description: "Honored as the Best Performer of the Batch at Aspire: The Institute of Human Development for outstanding growth, active participation, and leadership throughout the personality development journey. Recognized for excellence in communication, confidence, and contribution to peer learning.",
      date: "2024",
      category: "Recognition",
      icon: "⭐",
      color: "from-purple-400 to-pink-500",
      image: "/aspire-medel.jpg", // Replace with actual award photo
      // Replace with actual LinkedIn post
    },
    {
      title: "Winner - MSINS Startup Innovation Challenge",
      description: "Secured ₹1 Lakh prize at the Maharashtra State Innovation Society (MSINS) Startup Innovation Challenge for developing a tech-driven solution.",
      date: "2024",
      category: "Competition",
      icon: "🚀",
      color: "from-green-400 to-cyan-500",
      image: "/1-lakh.jpg", // Replace with actual achievement photo
      linkedinUrl: "https://www.linkedin.com/posts/sahilansari0002_msins-innovationwinners-activity-7157264331846348800-rGbi" // Replace with actual LinkedIn post
    },
    {
      title: "Selected for TiE Global Summit 2024",
      description: "Chosen among the Top 300 students from the Futurepreneur Course to attend the TiE Global Summit 2024 at Bangalore International Exhibition Center (BIEC).",
      date: "2024",
      category: "Event",
      icon: "🌍",
      color: "from-indigo-400 to-purple-500",
      image: "/tie.jpg", // Replace with actual event photo
      linkedinUrl: "https://www.linkedin.com/posts/sahilansari0002_tieglobalsummit-entrepreneurship-innovation-activity-7292850444056346624-8Lk0" // Replace with actual LinkedIn post
    },
    {
      title: "Best Achiever Award | AIM Institute",
      description: "Honored with the Best Achiever Award at AIM Institute by CEO Bhupendra Jogi Sir, recognizing consistent performance and dedication towards personal and professional growth.",
      date: "2025",
      category: "Award",
      icon: "🏆",
      color: "from-blue-400 to-cyan-500",
      image: "/jogisir.jpg", // Replace with actual certificate photo
       // Replace with actual LinkedIn post
    },
    {
      title: "Reliance Foundation Scholar | Reliance",
      description: "Awarded the prestigious Reliance Foundation Scholarship for academic excellence and contributions to technology and innovation.",
      date: "2022-2025",
      category: "Scholarship",
      icon: "⭐",
      color: "from-purple-400 to-pink-500",
      image: "/reliance.jpg", // Replace with actual award photo
      linkedinUrl: "https://www.linkedin.com/posts/sahilansari0002_reliancefoundation-pursueexcellence-reliancefoundationscolar-activity-7101400385063440385-y1E_" // Replace with actual LinkedIn post
    },
    {
      title: "Selected for Startup Mahakumbh 2024 | MSINS",
      description: "Sponsored by the Government of Maharashtra to attend Startup Mahakumbh in New Delhi, gaining exposure to India’s top entrepreneurial ecosystem.",
      date: "2024",
      category: "Event",
      icon: "🌍",
      color: "from-green-400 to-cyan-500",
      image: "/startup.jpg", // Replace with actual achievement photo
      linkedinUrl: "https://www.linkedin.com/posts/sahilansari0002_startupindia-innovation-leadership-activity-7177349774281519104-2SrF" // Replace with actual LinkedIn post
    },
    {
      title: "Attended Startup Mahakumbh 2.0 (2025)",
      description: "Represented at Startup Mahakumbh 2.0 held at Bharat Mandapam, New Delhi from April 3rd to 5th, 2025. Gained exposure to India’s top entrepreneurial ecosystem and innovations.",
      date: "2025",
      category: "Event",
      icon: "🌍",
      color: "from-green-400 to-cyan-500",
      image: "/startup-maha25.jpg", // Replace with actual achievement photo
      linkedinUrl: "https://www.linkedin.com/posts/sahilansari0002_pitchingskills-professionaldevelopment-startupmahakumbh-activity-7317745959591956481-2TuI" // Replace with actual LinkedIn post
    },
    {
      title: "Google Cloud Gen AI Quiz Winner | Google Cloud",
      description: "Secured a top 5 rank in the Google Cloud Gen AI Quiz APAC Edition, demonstrating expertise in cloud computing and generative AI technologies.",
      date: "2023",
      category: "Competition",
      icon: "🚀",
      color: "from-indigo-400 to-purple-500",
      image: "/quiz.png", // Replace with actual event photo
      linkedinUrl: "https://www.linkedin.com/posts/hack2skill_shoutout-to-quiz-contest-winners-activity-7187365576510521344-CXFu" // Replace with actual LinkedIn post
    },
    {
      title: "Best Modal Presentation Award | SMT. Maherbanu Collage Akola",
      description: "Awarded for outstanding performance in a model presentation competition at Smt. Maherbano College in 2023.",
      date: "2023",
      category: "Competition",
      icon: "🚀",
      color: "from-green-400 to-cyan-500",
      image: "/project.jpg", // Replace with actual achievement photo
      linkedinUrl: "https://www.linkedin.com/posts/sahilansari0002_awardwinning-teameffort-milestone-activity-7186911631182819329-1p0h" // Replace with actual LinkedIn post
    },
    {
      title: "Social Media Contest Winner - Google Cloud Community Day Pune | GDG Pune",
      description: "Won the social media contest at Google Cloud Community Day Pune 2024 for engagement and contributions to cloud computing awareness.",
      date: "2024",
      category: "Competition",
      icon: "🚀",
      color: "from-green-400 to-cyan-500",
      image: "/pune.jpg", // Replace with actual achievement photo
      linkedinUrl: "https://www.linkedin.com/posts/gdg-cloud-pune_gccdpune2024-socialmediawinner-ccdpune-activity-7245759271869550592-LoFI" // Replace with actual LinkedIn post
    },
    {
      title: "DevFest Pune 2024 Ticket Giveaway Winner | GDG Pune",
      description: "Selected as a lucky winner for the DevFest Pune 2024 ticket giveaway, gaining an opportunity to attend one of the biggest developer conferences.",
      date: "2024",
      category: "Event",
      icon: "🌍",
      color: "from-indigo-400 to-purple-500",
      image: "/devfest.jpg", // Replace with actual event photo
      linkedinUrl: "https://www.linkedin.com/posts/gdgpune_devfestpune-dfp2024-gdgpune-activity-7267175926679941120-qwHi" // Replace with actual LinkedIn post
    },
    {
      title: "Unstoppable Aspirants Award | ASPIRE, The Institute Of Human Development",
      description: "I am beyond honored to receive the “Unstoppable Aspirants Award” from ASPIRE, The Institute Of Human Development 🏆. This moment, captured in the video, is not just about the award itself—but about the dedication, perseverance, and passion that fuel my journey every single day.Being recognized as an Unstoppable Aspirant symbolizes resilience, the courage to keep moving forward despite challenges, and the determination to transform aspirations into achievements. 🚀✨",
      date: "2025",
      category: "Award",
      icon: "🏆",
      color: "from-cyan-400 to-blue-500",
      image: "/unstoppable .jpg", // Replace with actual contribution screenshot
      linkedinUrl: "https://www.linkedin.com/posts/sahilansari0002_unstoppableaspirants-aspireinstitute-recognition-activity-7362332287184637952-WR1-" // Replace with actual LinkedIn post
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % achievements.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-gray-400 text-lg">Milestones in my journey</p>
        </div>

        {/* Achievement Slider */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {achievements.map((achievement, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500">
                    {/* Background Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500 blur-xl`}></div>
                    
                    <div className="relative z-10">
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Achievement Image */}
                        <div className="relative">
                          <img 
                            src={achievement.image} 
                            alt={achievement.title}
                            className="w-full h-64 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                          <div className="absolute top-4 right-4 text-4xl">
                            {achievement.icon}
                          </div>
                        </div>

                        {/* Achievement Details */}
                        <div className="space-y-6 text-center md:text-left">
                          <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent border border-current/20`}>
                            {achievement.category}
                          </div>
                          
                          <h3 className="text-3xl font-bold text-white">
                            {achievement.title}
                          </h3>
                          
                          <p className="text-gray-300 text-lg leading-relaxed">
                            {achievement.description}
                          </p>
                          
                          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
                            <div className="text-cyan-400 font-semibold text-lg">
                              {achievement.date}
                            </div>
                            
                            <a
                              href={achievement.linkedinUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/link inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                            >
                              <span>View on LinkedIn</span>
                              <svg className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {achievements.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-gradient-to-r from-cyan-400 to-purple-400"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
