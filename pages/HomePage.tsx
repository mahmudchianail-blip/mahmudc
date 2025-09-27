import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ValuesSection from '../components/sections/ExperienceSection';
import ImprintSection from '../components/sections/ProjectsSection';
import ContactSection from '../components/sections/ContactSection';

const HomePage: React.FC = () => (
    <>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <HeroSection />
        </div>
        <div className="relative z-10">
            <AboutSection />
            <ValuesSection />
            <ImprintSection />
            <ContactSection />
        </div>
    </>
);

export default HomePage;
