import React from "react";

import NavBar from "./components/navbar/navbar.component";
import HomePage from "./pages/homepage/homepage.component";
import About from "./pages/about/about.component";
import ContactPage from "./pages/contact-page/contact-page.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <About />
      <ContactPage />
    </div>
  );
}

export default App;
