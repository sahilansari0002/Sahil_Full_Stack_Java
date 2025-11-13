import React, { useEffect, useState } from "react";
import { Toaster } from "sonner";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import FunFacts from "./components/FunFacts";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Volunteer from "./components/Volunteer";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import BackgroundAnimation from "./components/BackgroundAnimation";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";
import "./styles/animations.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate app initialization
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds loading time

    // Initialize smooth scrolling
    const smoothScroll = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const id = target.getAttribute('href')?.substring(1);
      if (id) {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', smoothScroll));

    return () => {
      clearTimeout(timer);
      links.forEach(link => link.removeEventListener('click', smoothScroll));
    };
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden">
      <BackgroundAnimation />
      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        <Stats />
        <About />
        <FunFacts />
        <Skills />
        <WorkExperience />
        <Volunteer />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      
      <Footer />
      <ScrollToTop />
      <Toaster position="top-right" />
    </div>
  );
}
