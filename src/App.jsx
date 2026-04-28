import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './components/Home'
import OurStory from './pages/About/OurStory'
import OurApproach from './pages/About/Approach'
import Vision from './pages/About/Vision'
import IndividualFamilyMasterclass from './pages/Workshop/IndividualFamilyMasterclass/Home'
import CorporateTalks from './pages/Workshop/CorporateTalks/Home'
import Blogs from './pages/Learn/Blogs/Home'
import Learninghub from './pages/Learn/Learninghub/Home'
import ChatBot from './components/ChatBot'
import SignatureWellness from './pages/Programs/SignatureWellness'
import SpecialCancerCare from './pages/Programs/SpecialCancerCare'
import GutCare from './pages/Programs/GutCare'
import PregnancyCare from './pages/Programs/PregnancyCare'

import PastMasterclass from './pages/Workshop/IndividualFamilyMasterclass/PastMasterclass'
import Course1 from './pages/Workshop/IndividualFamilyMasterclass/Course1'
import Course2 from './pages/Workshop/IndividualFamilyMasterclass/Course2'
import Course3 from './pages/Workshop/IndividualFamilyMasterclass/Course3'
import Course4 from './pages/Workshop/IndividualFamilyMasterclass/Course4'
import Course5 from './pages/Workshop/IndividualFamilyMasterclass/Course5'
import Course6 from './pages/Workshop/IndividualFamilyMasterclass/Course6'
import Course7 from './pages/Workshop/IndividualFamilyMasterclass/Course7'
import Course8 from './pages/Workshop/IndividualFamilyMasterclass/Course8'
import Course9 from './pages/Workshop/IndividualFamilyMasterclass/Course9'
import Course10 from './pages/Workshop/IndividualFamilyMasterclass/Course10'
import Course11 from './pages/Workshop/IndividualFamilyMasterclass/Course11'
import Course12 from './pages/Workshop/IndividualFamilyMasterclass/Course12'
import Course13 from './pages/Workshop/IndividualFamilyMasterclass/Course13'
import Course14 from './pages/Workshop/IndividualFamilyMasterclass/Course14'
import Course15 from './pages/Workshop/IndividualFamilyMasterclass/Course15'
import Course16 from './pages/Workshop/IndividualFamilyMasterclass/Course16'
import Podcast from './pages/Podcast/Podcast'
import PodcastVideos from './pages/Podcast/PodcastVideos'
import Careers from './pages/Careers/Careers'
import ContactUs from './pages/ContactUs/ContactUs'
import Resources from './pages/Resources'
import BharatDish from './pages/BharatDish'
import ScormPlayer from './pages/Learn/Learninghub/ScormPlayer'
import BookConsult from './pages/BookConsult'
import Payment from './pages/Payment'
import PaymentSuccess from './pages/PaymentSuccess'
import Assessment from './pages/Assessment/Assessment'
import AssessmentResults from './pages/Assessment/AssessmentResults'

function AppShell() {
  const location = useLocation()
  const chromelessPaths = ['/', '/masterclass', '/Workshop/IndividualFamilyMasterclass/Home', '/payment', '/assessment', '/assessment/results']
  const isChromeless = chromelessPaths.some((p) =>
    p === '/' ? location.pathname === '/' : location.pathname.startsWith(p)
  )

  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        {!isChromeless && <Navbar />}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs/signature-wellness" element={<SignatureWellness />} />
            <Route path="/programs/cancer-care" element={<SpecialCancerCare />} />
            <Route path="/programs/gut" element={<GutCare />} />
            <Route path="/programs/pregnancy" element={<PregnancyCare />} />
            <Route path="/about/story" element={<OurStory />} />
            <Route path="/about/vision" element={<Vision />} />
            <Route path="/about/approach" element={<OurApproach />} />
            <Route path="/learn/scorm-player" element={<ScormPlayer />} />
            <Route path="/masterclass" element={<IndividualFamilyMasterclass />} />
            <Route path="/Workshop/IndividualFamilyMasterclass/Home" element={<IndividualFamilyMasterclass />} />
            <Route path="/Workshop/IndividualFamilyMasterclass/PastMasterclass" element={<PastMasterclass />} />
            <Route path="/Workshop/IndividualFamilyMasterclass/Course1" element={<Course1 />} />
            <Route path="/Workshop/IndividualFamilyMasterclass/Course2" element={<Course2 />} />
            <Route path="/Workshop/IndividualFamilyMasterclass/Course3" element={<Course3 />} />
            <Route path="/Workshop/IndividualFamilyMasterclass/Course4" element={<Course4 />} />
            <Route path="/Workshop/IndividualFamilyMasterclass/Course5" element={<Course5 />} />
            <Route path="/Workshop/IndividualFamilyMasterclass/Course6" element={<Course6 />} />
            <Route path="/Workshop/IndividualFamilyMasterclass/Course7" element={<Course7 />} />
            <Route path="/Workshop/IndividualFamilyMasterclass/Course8" element={<Course8 />} />
            <Route path="/Workshop/IndividualFamilyMasterclass/Course9" element={<Course9 />} />
            <Route path="/Workshop/IndividualFamilyMasterclass/Course10" element={<Course10 />} />
            <Route path="/Workshop/IndividualFamilyMasterclass/Course11" element={<Course11 />} />
            <Route path="/Workshop/IndividualFamilyMasterclass/Course12" element={<Course12 />} />
            <Route path="/Workshop/IndividualFamilyMasterclass/Course13" element={<Course13 />} />
            <Route path="/Workshop/IndividualFamilyMasterclass/Course14" element={<Course14 />} />
            <Route path="/Workshop/IndividualFamilyMasterclass/Course15" element={<Course15 />} />
            <Route path="/Workshop/IndividualFamilyMasterclass/Course16" element={<Course16 />} />
            <Route path="/Workshop/CorporateTalks/Home" element={<CorporateTalks />} />
            <Route path="/Learn/Blogs/Home" element={<Blogs />} />
            <Route path="/learn/learninghub/home" element={<Learninghub />} />
            <Route path="/Podcast/Podcast" element={<Podcast />} />
            <Route path="/Podcast/Podcast/PodcastVideos" element={<PodcastVideos />} />
            <Route path="/Careers/Careers" element={<Careers />} />
            <Route path="/ContactUs/ContactUs" element={<ContactUs />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/bharat/dish" element={<BharatDish />} />
            <Route path="/book-consult" element={<BookConsult />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/assessment/results" element={<AssessmentResults />} />
          </Routes>
        </main>
        {!isChromeless && <ChatBot />}
        <Footer />
      </div>
    </>
  )
}

function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  )
}

export default App
