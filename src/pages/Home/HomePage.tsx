import type React from 'react';
import { Header } from './components/Header';
import { Childhood } from './components/Childhood';
import { Studentship } from './components/Studentship';
import { Army } from './components/Army';
import { War } from './components/War';
import { ResearchWorks } from './components/ResearchWorks';
import './HomePage.scss';
import { CreativeJourney } from './components/CreativeJourney';

const HomePage: React.FC = () => {
  return (
    <div className="home">
      <Header />
      <Childhood />
      <ResearchWorks />
      <Studentship />
      <Army />
      <War />
      <CreativeJourney />
    </div>
  );
};

export default HomePage;
