import './App.css';
import {CustomerProvider} from "./components/CustomerContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CustomerList from './components/CustomerList';
import CustomerBid from './components/CustomerBid'
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <CustomerProvider>
          <Route path="/customer/:id" component={CustomerBid}/>
          <Route exact path="/" component={CustomerList}/>
        </CustomerProvider>
        <Footer/>
      </Router>
    </div>
    
  );
}

export default App;
