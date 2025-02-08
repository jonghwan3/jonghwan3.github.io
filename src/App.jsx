import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-10 text-center">
    <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
    <p className="text-lg mt-4">I am a passionate developer, exploring and building cool projects.</p>
  </motion.div>
);

const About = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-10 text-center">
    <h1 className="text-3xl font-bold">About Me</h1>
    <p className="text-lg mt-4">Here is a little bit about myself.</p>
  </motion.div>
);

const Projects = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-10 text-center">
    <h1 className="text-3xl font-bold">Projects</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <Card>
        <CardContent className="p-4">
          <h2 className="text-2xl font-semibold">Project 1</h2>
          <p className="mt-2">A brief description of my amazing project.</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <h2 className="text-2xl font-semibold">Project 2</h2>
          <p className="mt-2">Another cool project that I worked on.</p>
        </CardContent>
      </Card>
    </div>
  </motion.div>
);

const Contact = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-10 text-center">
    <h1 className="text-3xl font-bold">Contact</h1>
    <p className="text-lg mt-4">Feel free to reach out to me.</p>
  </motion.div>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <nav className="flex justify-center p-4 bg-white shadow-md">
          <Link className="mx-4 text-lg font-semibold hover:underline" to="/">Home</Link>
          <Link className="mx-4 text-lg font-semibold hover:underline" to="/about">About</Link>
          <Link className="mx-4 text-lg font-semibold hover:underline" to="/projects">Projects</Link>
          <Link className="mx-4 text-lg font-semibold hover:underline" to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
