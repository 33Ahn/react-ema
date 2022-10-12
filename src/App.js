import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import AllEmployeeComponent from './components/AllEmployeeComponent';



function App() {
  return (
    <div>      
        <div>
          <Router>
            <HeaderComponent />
            <div className="container">
              <Routes>
                <Route exact path="/" element = {<AllEmployeeComponent />}></Route>
                <Route path="/employees" element = {<AllEmployeeComponent />}></Route>
              </Routes>
              {/* <AllEmployeeComponent />               */}
            </div>
            <FooterComponent />
          </Router>
        </div>     
    </div>
  );
}

export default App;
