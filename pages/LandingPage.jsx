import React from 'react';
import Hero from '../components/sections/Hero';
import CustomBrandingSection from '../components/sections/CustomBrandingSection';
import ProblemSection from '../components/sections/ProblemSection';
import SolutionOverview from '../components/sections/SolutionOverview';
import Accessories from '../components/sections/Accessories';
import TechSpecs from '../components/sections/TechSpecs';
import ContactEnterprise from '../components/sections/ContactEnterprise';

const LandingPage = () => {
    return (
        <>
            <Hero />
            <CustomBrandingSection />
            <ProblemSection />
            <SolutionOverview />
            <Accessories />
            <TechSpecs />
            <ContactEnterprise />
        </>
    );
};

export default LandingPage;

