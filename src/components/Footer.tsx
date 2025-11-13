import React from "react";

const Footer = () => {
  const socialLinks = [
    { name: "GitHub", icon: "🐙", url: "https://github.com/Sahilansari0002" },
    { name: "LinkedIn", icon: "💼", url: "https://www.linkedin.com/in/sahilansari0002/" },
    { name: "Instagram", icon: "📷", url: "https://www.instagram.com/Sahilansari0002/" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative py-16 bg-black/20 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Sahil Ali
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer specializing in creating beautiful, functional web applications that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect With Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="group w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 hover:border-transparent transition-all duration-300 hover:scale-110"
                  title={social.name}
                >
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 Sahil Ali. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Made with ❤️ and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
