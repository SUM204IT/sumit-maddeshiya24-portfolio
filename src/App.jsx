import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Footer from "./components/Footer";
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [videosLoaded, setVideosLoaded] = useState(0);
  const totalVideos = 3; // Total number of videos in the app

  const handleVideoLoad = () => {
    setVideosLoaded((prev) => prev + 1);
  };

  const allVideosLoaded = videosLoaded === totalVideos;

  return (
    <>
    <div className="bg-black w-screen flex flex-col items-center relative">
      <Nav />
      <Hero onVideoLoad={handleVideoLoad} />
      <About onVideoLoad={handleVideoLoad} />
      <Works onVideoLoad={handleVideoLoad} />
      <Skills />
      <Contacts />
      <Footer />
      <Analytics/>
    </div>
    </>
  );
}

export default App;
