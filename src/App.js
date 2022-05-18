import './App.css';
import {Home} from "./components/home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Contacts} from "./components/contacts";
import {Skills} from "./components/skills";
import {Portfolio} from "./components/portfolio";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<Home/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/skills" element={<Skills/>} />
                <Route path='/portfolio' element={<Portfolio/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
