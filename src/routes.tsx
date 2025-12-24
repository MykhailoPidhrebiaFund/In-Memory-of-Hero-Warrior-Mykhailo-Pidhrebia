import type React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import PrivacyPolicyPage from './pages/PrivacyPolicy/PrivacyPolicy';

const Router: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
