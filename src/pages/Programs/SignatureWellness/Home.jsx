import React from "react";
import Hero from "./Hero";
import FoundationalMedicine from "./FoundationalMedicine";
import DoesCaring from "./DoesCaring";
import Programs from "./Programs";
// Pillars section removed per request
import Testimonials from "./Testimonials";


function Home() {
    return (
        <>
            <Hero />
            <Programs />
            <FoundationalMedicine />
            <DoesCaring />
            <Testimonials />
        </>
    );
}

export default Home;
