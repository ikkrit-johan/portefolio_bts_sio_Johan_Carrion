import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Resources from './components/resources/Resources';
import SymfonyProject from './components/symfonyProject/SymfonyProject';
import ReactProject from './components/reactProject/ReactProject';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Ppe from './components/ppe/Ppe';


const App = () => {
    return (
      <>
          <Header />
          <Nav />
          <About />
          <Experience />
          <Services />
          <Portfolio />
          <SymfonyProject />
          <ReactProject />
          <Ppe />
          <Resources />
          <Contact />
          <Footer /> 
    </>
  )
}

export default App;