// // App.jsx
// import React from 'react';
// import { DarkModeProvider } from './components/common/DarkModeContext';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Experience from './components/Experience';
// import Education from './components/Education';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Blog from './components/Blog';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <DarkModeProvider>
//       <Navbar />
//       <Hero />
//       <Experience />
//       <Skills/>
//       <Education/>
//       <Projects/>
//       <Blog/>
//       <Contact/>
//       <Footer/>
//     </DarkModeProvider>
//   );
// }

// export default App;





// App.jsx
import React from 'react';
import { DarkModeProvider } from './components/common/DarkModeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <DarkModeProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <section id="hero">
            <Hero />
          </section>
          
          <section id="experience">
            <Experience />
          </section>
          
          <section id="skills">
            <Skills />
          </section>
          
          <section id="education">
            <Education />
          </section>
          
          <section id="projects">
            <Projects />
          </section>
          
          {/* <section id="blogs">
            <Blog />
          </section> */}
          
          {/* <section id="contact">
            <Contact />
          </section> */}
        </main>
        
        <Footer />
      </div>
    </DarkModeProvider>
  );
}

export default App;