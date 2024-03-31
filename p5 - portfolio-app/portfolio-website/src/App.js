import { BrowserRouter } from 'react-router-dom';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import About from './components/About';








function App() {

  const name = 'Aktilek Ishanov';
  const role = 'web';

  const projects = [
    {
      name: 'Jumystap Website',
      description: 'A job finding web service (only frontend)',
      url: 'https://s3-alpha-sig.figma.com/img/fde6/ba1e/e61087a39bc111573ecccd5685a1138a?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S2SrBdT9tYk~EcrC438Av6bTE0Tena046W5MK79B66iXGwTSueZ768iVnDYTgWrIvXXy7v3aEX~r2oAQCgu10ylMgCWMU2ie1jJV6IHKf7KovvU-XoYStaLRTkCMH6MmXJR2XFneW8oQ0II85dNPbtDf9TdEC6RlPvRpuWhmE9LNjqVwnB3-abohoD24vlYzOo26XOCG8wFt16QKLibE29VDbjWrPjBjSqKr8ySlZbRHcoY0RbWG-wp0rKQ01tj7W5Kk7InvyjnBnidNBGaPN-NoKAy1nhbROVvtKWa3iMLJI3jTCvlCoFW17wr3I07LUa-Y1QkN9bhuCncCHCMY2A__'
    },
    {
      name: 'Media as a Medium',
      description: 'A news website with newsapi',
      url: 'https://s3-alpha-sig.figma.com/img/deb7/ea21/dcf0cd9d2bbf48cbfd4bd6000822ba05?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CuWVUuOPr1ujPDGaVlvpFVmnDqVCIKuiI8e~~yC-RS6LWA8xdoXzm6PZ82V0p3mIDv8CqMBL-Jz3OJQBqo8yLsYYfXrk~Q0d71bkUiB60KyIWlpyc5F6Snp1ww9I1mbmzcQ-cJ3RGtDbg9Kb9EnheTBVEgf~U4~ZmbZIOdH~Vyc2pJc-yHexVmHbtubs843PX8ZCjwDu8EyLxuRs0Hh1s10zVjpUaN2xZSZOSOJ3ZyGO4pGWXSDWKuGNmKaxKzqWI3WPdY49f~RZJIvB178gvD0MyJZN92lc2Gl5ESCT9DoWuQYNtmUDEl3JkB0E2qYmQWl2LH-jGj~-APs7Pj18zw__'
    }
];

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage name={name} role={role}/>} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects projects={projects}/>} />
          <Route path="/Contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;