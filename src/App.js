import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Prizes from "./components/Prizes";
import Questions from "./components/Questions";
import Smaj from "./components/Smaj";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Prizes />
      <Smaj />
      <Questions />
      <Footer />
    </div>
  );
}

export default App;
