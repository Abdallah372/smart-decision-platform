import React from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Hypothesis from './components/Hypothesis';
import DecisionFlow from './components/DecisionFlow';
import Problem from './components/Problem';
import Solution from './components/Solution';
import DecisionScenario from './components/DecisionScenario';
import Innovation from './components/Innovation';
import ApiLiveProof from './components/ApiLiveProof';
import Impact from './components/Impact';
import ProjectRoadmap from './components/ProjectRoadmap';
import Future from './components/Future';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-teal-100 selection:text-teal-900">
      <Navbar />
      <main>
        <Hero />
        <Hypothesis />
        <DecisionFlow />
        <Problem />
        <Solution />
        <DecisionScenario />
        <Innovation />
        <ApiLiveProof />
        <Impact />
        <ProjectRoadmap />
        <Future />
        <Team />
      </main>
      <Footer />
    </div>
  );
}

export default App;
