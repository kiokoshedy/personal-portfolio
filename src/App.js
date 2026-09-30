import { useCallback, useEffect, useState } from "react";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Initiatives } from "./components/Initiatives";
import { Education } from "./components/Education";
import { Credentials } from "./components/Credentials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Cv } from "./components/Cv";
import { ThemeProvider } from "./context/ThemeContext";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const VIEW_PARAM = "view";
const CV_VIEW = "cv";

const readView = () =>
  new URLSearchParams(window.location.search).get(VIEW_PARAM) === CV_VIEW
    ? CV_VIEW
    : "portfolio";

const Portfolio = () => (
  <>
    <Banner />
    <Experience />
    <Skills />
    <Initiatives />
    <Education />
    <Credentials />
    <Contact />
  </>
);

function App() {
  const [view, setView] = useState(readView);

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

  return (
    <ThemeProvider>
      <div className="App">
        {view === CV_VIEW ? (
          <Cv onBack={showPortfolio} />
        ) : (
          <>
            <NavBar onOpenCv={showCv} />
            <main>
              <Portfolio />
            </main>
            <Footer onOpenCv={showCv} />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
