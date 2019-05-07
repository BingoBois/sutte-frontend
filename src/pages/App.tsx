import React from 'react';
import '../styles/App.css';
import { observer } from 'mobx-react'
import store from '../stores/store';

@observer
class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={() => { store.sut = "Liverpool" }}>
            Click here to show the one true soccer team
          </button>
          <p>
            {store.sut}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
