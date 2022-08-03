import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Works from "./components/pages/Works";
import Skills from "./components/pages/Skills";
import Contact from "./components/pages/Contact";
import Sidebar from "./components/pages/Sidebar";


function App() {

  return (
    <div className="relative min-h-screen  text-secondary font-primary bg-bg-1">
      <Sidebar />
      <main className="absolute left-0 right-0 lg:left-[290px] lg:right-0 text-white bg-bg-1">
        <Home />
        <About />
        <Works />
        <Skills />
        {/* <Contact /> */}
      </main>

      <footer>

      </footer>
    </div>
  );
}

export default App;

