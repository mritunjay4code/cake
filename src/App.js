import React from "react";
import Header from "./omninous/Header";
import Card from "./omninous/Card";
import Pag1 from "./omninous/Pag1";
import Welcome from "./omninous/Welcome";

const App = () => {
  return (
    <div>
      <Header />    
      <Welcome/>
      <Card />
      <Pag1 />
    </div>
  );
};

export default App;
