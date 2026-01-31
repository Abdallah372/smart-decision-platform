import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hypothesis from "./components/Hypothesis";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import DecisionScenario from "./components/DecisionScenario";
import Innovation from "./components/Innovation";
import Impact from "./components/Impact";
import Future from "./components/Future";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      className="min-h-screen font-sans bg-white selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden antialiased"
      dir="rtl"
    >
      <Navbar />
      <main>
        <Hero />
        <Hypothesis />
        <Problem />
        <Solution />
        <DecisionScenario />
        <Innovation />
        <Impact />
        <Future />
        <Team />
      </main>
      <Footer />
    </div>
  );
}

export default App;
