import { useState } from "react";
import Hero from "./components/hero/Hero";
import Wallet from "./components/Wallet/Wallet";
import Handles from "./components/handles/Handles";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import "./index.css";
function App() {
  const [state, setState] = useState({
    web3:null, contract:null
  });
  const saveState = (state) => {
    console.log(state);
    setState(state);
  }
  return (
    <div className="App">
      <Wallet saveState={saveState}/> 
      <Hero {...state}/>
      <Handles />
      <Projects {...state} />
      <Skills />
      <Experience {...state}/>
      <Contact {...state}/>
      <Handles />
    </div>
  );
}

export default App;


