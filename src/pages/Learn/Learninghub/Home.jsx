import React from "react";
import Hero from "./Hero";
import LearningIntro from "./LearningIntro";
import FeaturedCourses from "./FeaturedCourses";
import LearningExperience from "./LearningExperience";
import FAQ from "./FAQ";
import HowItWorks from "./HowItWorks";
import GiftBanner from "./GiftBanner";
import WhoWillBenefit from "./WhoWillBenefit";
import TeamsWorkplaces from "./TeamsWorkplaces";
import CorporateCourses from "./CorporateCourses";
import { AboutLukeSection } from "./AboutLukeSection";
import { SignatureWellnessPortal } from "./SignatureWellnessPortal";

function Home() {
  return (
    <>
      <Hero />
      <LearningIntro />
      <FeaturedCourses />
      <LearningExperience />
      <FAQ />
      <HowItWorks />
      <GiftBanner />
      <WhoWillBenefit />
      <TeamsWorkplaces />
      <CorporateCourses />
      <AboutLukeSection/>
      <SignatureWellnessPortal/>
    </>
  );
}

export default Home;
