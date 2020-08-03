import React from "react";
import Navbar from "./components/Navbar";
import Table from "./components/Table";

function App(){
  console.log( `Lets start the app`);

  return(
    <div>
      <Navbar />
      <Table />
    </div>
  );
}

export default App;