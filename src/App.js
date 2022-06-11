import TopNav from "./header/TopNav"
import MiddleNav from "./header/MiddleNav"
import BottomNav from "./header/BottomNav"
import Home from "./home/Home"
import About from "./about/About"
import Contact from "./contact/Contact"
import Location from "./location/Location"
import Basket from "./basket/Basket"
import Login from "./login/Login"
import Register from "./register/Register"
import Footer from "./footer/Footer"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {

  return (
      <Router>
        <ToastContainer />
          <TopNav/>
          <MiddleNav/>
          <BottomNav/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/location" component={Location}/>
          <Route path="/contact" component={Contact}/>  
          <Route path="/basket" component={Basket}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
        </Switch>  
        <Footer/>  
    </Router>

  );
}


export default App;


