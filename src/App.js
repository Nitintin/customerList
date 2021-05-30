import './App.css';
import {CustomerProvider} from "./components/CustomerContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CustomerList from './components/CustomerList';


function App() {
  return (
    <CustomerProvider>
      <div className="App">
        <Header/>
        <CustomerList/>
        <Footer/>
      </div>
    </CustomerProvider>
  );
}

export default App;
