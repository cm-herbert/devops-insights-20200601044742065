import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/AppHeader';
import AppContainer from './containers/AppContainer';
import Map from './components/Map';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="HzFlex">
      	<Map className="Map HzFlexChild"/>
	    <AppContainer className="AppContainer HzFlexChild" />
      </div>
    </div>
  );
}

export default App;
