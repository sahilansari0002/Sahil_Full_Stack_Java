import React, { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCodeAnimation, setShowCodeAnimation] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowCodeAnimation(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "370cf45e-6a37-4385-afba-5ed05209dd41",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: "Portfolio Contact Form",
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message compiled and deployed successfully! 🚀");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast.error("Runtime error occurred. Please debug and try again! 🐛");
    } finally {
      setTimeout(() => {
        setIsSubmitting(false);
        setShowCodeAnimation(false);
      }, 2000);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg">Let's work together on your next project</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="relative">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                  />
                </div>
              </div>
              
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300 resize-none"
                ></textarea>
              </div>
              
              {/* Enhanced Send Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
              >
                {/* Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Code Rain Effect */}
                {showCodeAnimation && (
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full">
                      {[...Array(20)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute text-green-400 text-xs font-mono animate-bounce opacity-70"
                          style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`,
                            animationDuration: '1s'
                          }}
                        >
                          {['☕', 'public', 'class', '{', '}', 'void', 'main', 'System.out', '();'][Math.floor(Math.random() * 9)]}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Button Content */}
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {isSubmitting ? (
                    <>
                      {/* Java Compilation Animation */}
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span className="font-mono text-sm">
                          {showCodeAnimation ? (
                            <span className="animate-pulse">
                              Compiling message.java...
                            </span>
                          ) : (
                            "Deploying..."
                          )}
                        </span>
                        <span className="text-lg animate-bounce">☕</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <span className="group-hover:scale-110 transition-transform duration-300">
                        Send Message
                      </span>
                      <div className="flex items-center gap-1">
                        <span className="text-lg group-hover:animate-bounce">☕</span>
                        <span className="text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                          .execute()
                        </span>
                      </div>
                    </>
                  )}
                </span>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                
                {/* Success Particles */}
                {isSubmitting && (
                  <div className="absolute inset-0">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-ping"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 1}s`,
                          animationDuration: '0.8s'
                        }}
                      ></div>
                    ))}
                  </div>
                )}
              </button>

              {/* Java Code Snippet Animation */}
              {showCodeAnimation && (
                <div className="mt-4 p-4 bg-black/50 rounded-lg border border-green-400/30 font-mono text-sm text-green-400 animate-fade-in-up">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>MessageService.java</span>
                  </div>
                  <div className="space-y-1 text-xs">
                    <div className="animate-pulse animation-delay-200">
                      <span className="text-purple-400">public void</span> <span className="text-cyan-400">sendMessage</span>() {"{"}
                    </div>
                    <div className="animate-pulse animation-delay-400 ml-4">
                      <span className="text-yellow-400">System.out.println</span>(<span className="text-green-300">"Sending message..."</span>);
                    </div>
                    <div className="animate-pulse animation-delay-600 ml-4">
                      <span className="text-orange-400">emailService</span>.<span className="text-cyan-400">deploy</span>();
                    </div>
                    <div className="animate-pulse animation-delay-800">
                      {"}"}
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-xl">
                    📧
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium">Sahilali57254@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center text-xl">
                    📱
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-medium">+91 8956741978</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xl">
                    📍
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-medium">Akola, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="relative p-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10">
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="text-white font-semibold mb-2">Quick Response</h4>
                <p className="text-gray-400 text-sm">I typically respond within 24 hours</p>
              </div>
            </div>

            {/* Java Developer Badge */}
            <div className="relative p-6 rounded-2xl bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-orange-400/20">
              <div className="text-center">
                <div className="text-4xl mb-4 animate-bounce">☕</div>
                <h4 className="text-white font-semibold mb-2">Java Developer</h4>
                <p className="text-gray-400 text-sm font-mono">System.out.println("Let's code together!");</p>
              </div>
            </div>

            {/* 3D Mail Animation */}
            <div className="relative">
              <div className="text-center">
                <div className="text-8xl animate-float mb-4">📬</div>
                <p className="text-gray-400">Looking forward to hearing from you!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
