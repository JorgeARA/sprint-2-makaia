import React from "react";
import FlyBackground from "./components/main/Main";
import Payment from "./components/payment/Payment";
import Services from "./components/services/Services";
import './App.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BrowserRouter as Router, Switch, 
  Route, Redirect,} from "react-router-dom";
import reservation from "./components/reservation/reservation";

const App = () => {

return(
    <>
      <FlyBackground/> 
      <Payment/>
      <Services/>
    </>
)

}

export default App;