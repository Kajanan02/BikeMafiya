import React from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter ,Route,Switch} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Bike from './Components/Bike'
import Dukati from './Components/Dukati'
import HarleyDavidson from './Components/Harley-Davidson'
import HondaCbr from './Components/HondaCbr'
import YamahaR15 from './Components/YamahaR15'
import Kawasaki from './Components/Kawasaki'


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <div>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/bikes" component={Bike}/>
    <Route exact path="/bikes/ducati" component={Dukati}/>
    <Route exact path="/bikes/kawasaki" component={Kawasaki}/>
    <Route exact path="/bikes/harley-davidson" component={HarleyDavidson}/>
    <Route exact path="/bikes/hondacbr" component={HondaCbr}/>
    <Route exact path="/bikes/yamahar15" component={YamahaR15}/>
    <Route exact path="/about" component={About}/>
    
   
    

    
    </Switch> 
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
