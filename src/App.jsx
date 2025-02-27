import { useState } from "react";
import { Provider } from "react-redux";
import capsuleCorp from "./assets/capsuleCorp.png";
import "./App.css";
import Home from "./pages/Home";
import Insights from "./pages/Insights";
import store from "./redux/store";

function App() {
  // Step 1: Create state to track the current page
  const [currentPage, setCurrentPage] = useState("Home");

  // Step 2: Handle page changes based on button clicks
  const handlePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <Provider store={store}>
      <div className="Capsule-Carrier">
        {/* Navigation Bar */}
        <div className="nav-bar">
          <a href="#" target="_blank">
            <img src={capsuleCorp} className="logo react" alt="Capsule Corp Logo" />
          </a>

          {/* Navigation Buttons */}
          <div className="nav">
            <button className="nav-button" onClick={() => handlePage("Home")}>
              Home
            </button>
            <button className="nav-button" onClick={() => handlePage("Insights")}>
              Insights
            </button>
          </div>
        </div>

        {/* Body Section */}
        <div className="body">
          <hr />

          {/* Step 3: Conditionally Render Pages */}
          {currentPage === "Home" && <Home />}
          {currentPage === "Insights" && <Insights />}
        </div>
      </div>
    </Provider>
  );
}

export default App;
