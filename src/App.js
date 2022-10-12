import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import AllEmployeeComponent from './components/AllEmployeeComponent';



function App() {
  return (
    <div>      
        <div>
          <HeaderComponent />
          <AllEmployeeComponent />
          <FooterComponent />
        </div>     
    </div>
  );
}

export default App;
