import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const { personal, navLinks, skills, projects, experience, education } = portfolioData;

  return (
    <div className="app-layout">
      {/* Main Header / Navigation */}
      <Navbar navLinks={navLinks} personal={personal} />

      {/* Semantic Main Content with A11y Landmark */}
      <main id="main-content" role="main" tabIndex="-1">
        <Hero personal={personal} />
        <About personal={personal} />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Experience experience={experience} education={education} />
        <Contact personal={personal} />
      </main>

      {/* Semantic Footer */}
      <Footer navLinks={navLinks} personal={personal} />
    </div>
  );
}
