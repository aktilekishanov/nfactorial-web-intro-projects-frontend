import { BrowserRouter } from 'react-router-dom';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';








function App() {

  const name = 'Aktilek Ishanov';
  const role = 'web';

  const projects = [
    {
      name: 'Jumystap Website',
      description: 'A job finding web service (only frontend)',
    },
    {
      name: 'Media as a Medium',
      description: 'A news website with newsapi',
    },
    {
      name: 'Todo-list',
      description: 'A fully functional to-do-list',
    },
    {
      name: 'Portfolio App',
      description: 'My personal portfolio website',
    },
];

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage name={name} role={role}/>} />
          <Route path="/TechStack" element={<TechStack />} />
          <Route path="/Projects" element={<Projects projects={projects}/>} />
          <Route path="/Contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;