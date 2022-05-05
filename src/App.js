import './App.css';
import {Home} from "./components/home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Contacts} from "./components/contacts";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<Home/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
