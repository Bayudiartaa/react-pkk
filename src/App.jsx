import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./component/Navigation.jsx";
import ContentWeb from "./component/ContentWeb.jsx";
import FooterPage from "./component/FooterPage.jsx";

export const App = () => {
  return (
    <div className="App">
      <Navigation />
      <ContentWeb title="REKOMENDASI UNTUK ANDA" />
      <FooterPage tahun="2021" />
    </div>
  );
};

export default App;
