import { useCallback, useEffect, useState } from "react";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Positioning } from "./components/Positioning";
import { Impact } from "./components/Impact";
import { Experience } from "./components/Experience";
import { CaseStudies } from "./components/CaseStudies";
import { Architecture } from "./components/Architecture";
import { Skills } from "./components/Skills";
import { Leadership } from "./components/Leadership";
import { Ownership } from "./components/Ownership";
import { Testimonials } from "./components/Testimonials";
import { Education } from "./components/Education";
import { Credentials } from "./components/Credentials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Cv } from "./components/Cv";
import { ThemeProvider } from "./context/ThemeContext";
import { architectureDiagrams } from "./data/portfolio";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const VIEW_PARAM = "view";
const CV_VIEW = "cv";
const DEFAULT_DIAGRAM = architectureDiagrams[0].id;

const readView = () =>
  new URLSearchParams(window.location.search).get(VIEW_PARAM) === CV_VIEW
    ? CV_VIEW
    : "portfolio";

const Portfolio = ({ diagram, onShowDiagram }) => (
  <>
    <Banner />
    <Positioning />
    <Impact />
    <Experience />
    <CaseStudies onShowDiagram={onShowDiagram} />
    <Architecture
      activeDiagram={diagram}
      onSelectDiagram={onShowDiagram}
    />
    <Skills />
    <Leadership />
    <Ownership />
    <Testimonials />
    <Education />
    <Credentials />
    <Contact />
  </>
);

function App() {
  const [view, setView] = useState(readView);
  const [diagram, setDiagram] = useState(DEFAULT_DIAGRAM);

  useEffect(() => {
    const onPopState = () => setView(readView());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    document.title =
      view === CV_VIEW
        ? "CV — Shadrack Kioko | Senior Software Engineer"
        : "Shadrack Kioko — Senior Software Engineer | Java · React · Azure";
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [view]);

  const showCv = useCallback(() => {
    const url = new URL(window.location.href);
    url.searchParams.set(VIEW_PARAM, CV_VIEW);
    window.history.pushState({}, "", url);
    setView(CV_VIEW);
  }, []);

  const showPortfolio = useCallback(() => {
    const url = new URL(window.location.href);
    url.searchParams.delete(VIEW_PARAM);
    window.history.pushState({}, "", url);
    setView("portfolio");
  }, []);

  const showDiagram = useCallback((id) => {
    if (id) {
      setDiagram(id);
    }
    const section = document.getElementById("architecture");
    if (typeof section?.scrollIntoView === "function") {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        {view === CV_VIEW ? (
          <Cv onBack={showPortfolio} />
        ) : (
          <>
            <NavBar onOpenCv={showCv} />
            <main>
              <Portfolio diagram={diagram} onShowDiagram={showDiagram} />
            </main>
            <Footer onOpenCv={showCv} />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
