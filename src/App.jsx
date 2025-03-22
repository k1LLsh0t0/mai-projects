import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./Home_task/HeroSection.jsx/HeroSection";
import LiveProject from "./Home_task/LiveProject";
import ProfileSection from "./Home_task/ProfileSection";
import ProjectsSection from "./Home_task/ProjectSection";
import AllProjects from "./Home_task/AllProjects";
import Footer from "./components/Navbar/Footer";
import BlogSection from "./Home_task/BlogSection";
import EnquiryForm from "./Home_task/EnquiryForm";
import PostProject from "./Home_task/PostProject";

const App = () => {
  return (
    <Router>
      <Navbar /> {/*  Navbar remains fixed on all pages */}
      <Routes>
        {/* Home Page Route */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <LiveProject />
              <ProfileSection />
              <ProjectsSection />
              <BlogSection />
              <EnquiryForm />
            </>
          }
        />

        {/* View All Projects Page */}
        <Route path="/all-projects" element={<AllProjects />} />

        {/* Post a Project Page Route */}
        <Route path="/post-project" element={<PostProject />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
