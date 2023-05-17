import './App.css';
import Main from "./components/body/Main.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  // const numbers = [1, 2, 3, 4, 5];

  return (
    <div className="App d-flex " style={{
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%"
    }}>
      <div>
        <Header />
        <Main />
      </div>
      <div>
        <Footer />
      </div>

      {/* <ul>
        {
          numbers.map(num => <li style={{ color: 'red' }}>{num}</li>)
        }
      </ul> */}
    </div >
  );
}

export default App;
