import type React from 'react';
import { Header } from './components/Header';
import { FoundationMission } from './components/FoundationMission';
import { CharitySpheres } from './components/CharitySpheres';
import './AboutPage.scss';
import { Contacts } from './components/Contacts';

const AboutPage: React.FC = () => {
  return (
    <div className="about">
      <Header />
      <FoundationMission />
      <CharitySpheres />
      <Contacts />
    </div>
  );
};

export default AboutPage;
