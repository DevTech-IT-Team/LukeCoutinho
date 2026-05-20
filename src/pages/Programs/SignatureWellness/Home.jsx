import React from "react";
import Hero from "./Hero";
import FoundationalMedicine from "./FoundationalMedicine";
import DoesCaring from "./DoesCaring";
import Programs from "./Programs";
import Testimonials from "./Testimonials";


function Home() {
    return (
        <>
            <Hero />
            <FoundationalMedicine />
            <DoesCaring />
            <Programs />
            <Testimonials />
        </>
    );
}

export default Home;
