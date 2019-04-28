import React from 'react';
// @ts-ignore
import logo from './logo.svg';
import '../styles/App.css';
import { observer } from 'mobx-react'
import Store from '../stores/store'

@observer
class App extends React.Component{
  public render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>
            this is from {Store.sut}
          </p>
          <button onClick={() => {Store.setSut("Sot")}}>Click here to change sut to sott</button>
        </header>
      </div>
    );
  }
}
export default App;
