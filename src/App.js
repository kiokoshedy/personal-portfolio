import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Initiatives } from './components/Initiatives';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Banner />
        <Experience />
        <Skills />
        <Initiatives />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
