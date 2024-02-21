import Header from "./Header/Header";
import MainContent from "./MainContent/MainContent";
import "./App.css";
import { useState } from "react";

function App() {
  const [index, setIndex] = useState(0);

  const getIndex = (ind) => setIndex(ind);

  return (
    <section className="container">
      <Header getI={getIndex} />
      <MainContent i={index} />
    </section>
  );
}

export default App;
