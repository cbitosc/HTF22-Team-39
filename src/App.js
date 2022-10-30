import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import LoginF from './components/LoginF';
import LoginAdm from './components/LoginAdm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import StudentReg from './components/StudentReg';
import Complaint from './components/Complaint';
// import Registration from './components/Registration';
import About from './components/About';
import RegMain from './components/RegMain';



function App() {
  return (
        <Router>
        <div className="App">
        {/* <Navbar/> */}
          <Routes>
            <Route exact path ="/" element={<Navbar/>}/>
            <Route exact path ="/about" element={<About/>}/>
            <Route exact path ="/login" element={<Login/>}/>
            <Route exact path ="/loginFac" element={<LoginF/>}/>
            <Route exact path ="/loginAdm" element={<LoginAdm/>}/>
            <Route exact path ="/login/complaint" element={<Complaint/>}/>
            
            <Route exact path ="/loginAdm/RegMain" element={<RegMain/>}/>
            <Route exact path ="/loginAdm/RegMain/StudentReg" element={<StudentReg/>}/>
          </Routes>
        </div>
        </Router>
  );
}

export default App;
