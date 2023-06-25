import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar />
      <HomePage/>
    </div>
  );
}

export default App;
