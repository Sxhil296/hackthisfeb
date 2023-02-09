import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Questions from "./components/Questions";
import Smaj from "./components/Smaj";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Smaj />
      <Questions />
      <Footer />
    </div>
  );
}

export default App;
