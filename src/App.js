import './App.css';
import ContextProvider from './Context';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home.js';
import NavSlider from './Components/NavSlider.js';
import APOD from './Components/APOD.js';
import EARTH from './Components/EARTH.js';
import EPIC from './Components/EPIC.js';
import MRP from './Components/MRP.js';
import NEO from './Components/NEO.js';
import BackgroundVideo from './Components/BackgroundVideo.js';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <NavSlider/>
          <BackgroundVideo/>

          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/APOD' exact={true} component={APOD}/>
            <Route path='/EARTH' exact={true} component={EARTH}/>
            <Route path='/EPIC' exact={true} component={EPIC}/>
            <Route path='/MRP' exact={true} component={MRP}/>
            <Route path='/NEO' exact={true} component={NEO}/>
          </Switch>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;