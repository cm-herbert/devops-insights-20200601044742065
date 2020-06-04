import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/AppHeader';
import AppContainer from './containers/AppContainer';
import './App.css';
import Session from './Session';

class App extends React.Component {

    constructor(props){
      super();
      //Global workarea for app
      global.session = new Session();
    }
    
    render(){
      return <div className="App">
          <AppHeader />
          <AppContainer/>
        </div>;
    }
}
  export default App;