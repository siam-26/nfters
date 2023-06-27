import "./App.css";
import Footer from "./Components/Footer/Footer";
import FooterMedium from "./Components/Footer/FooterMedium";
import HomePage from "./Components/HomePage/HomePage";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar />
      <HomePage/>
      <Footer/>
      <FooterMedium/>
    </div>
  );
}

export default App;
