import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Hero } from './Components/Hero';
import { RecentWork } from './Components/RecentWork';
import { GetInTouch } from './Components/GetInTouch.js';
import { TechStack } from './Components/TechStack';

import ContactUsFile from './Components/ContactUsFile';
import AllComponents from './Components/AllComponents';
import { useState } from 'react';

import { Routes, Route } from 'react-router-dom';
import { Layout } from './Components/Layout/Layout';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <>
      <Layout handleThemeChange={handleThemeChange} isDarkMode={isDarkMode}>
        <Routes>
          <Route path='hero' element={<Hero isDarkMode={isDarkMode} />} />
          <Route path='recentWork' element={<RecentWork isDarkMode={isDarkMode} />} />
          <Route path='techStack' element={<TechStack isDarkMode={isDarkMode} />} />
          <Route path='getInTouch' element={<GetInTouch isDarkMode={isDarkMode} />} />
          <Route path='contactUsFile' element={<ContactUsFile isDarkMode={isDarkMode} />} />
          <Route path='/' element={<AllComponents isDarkMode={isDarkMode} />} />
          <Route path='*' element={<h1 className='full-height d-flex justify-content-center align-items-center'>404 page not found</h1>} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
