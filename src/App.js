import Home from "./components/Home";
import About from "./components/About";
import Works from "./components/Works";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <div className="relative bg-bg-1 text-secondary font-primary min-h-screen">
      <Sidebar />
      <main className="absolute left-[290px] text-white">
        {/* <Home /> */}
        {/* <About />
        <Works />
        <Experience />
        <Contact /> */}
      </main>

      <footer>

      </footer>
    </div>
  );
}

export default App;
