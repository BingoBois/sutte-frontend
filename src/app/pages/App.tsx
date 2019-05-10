import * as React from 'react';
import './styles/App.css';
// @ts-ignore
import logo from '../../assets/loading.gif';

class App extends React.Component<any, any>{

  constructor(props: any){
    super(props);
    this.state={
      bingo: ""
    }
  }

  async componentWillMount(){
  }

  render(){
    return (
      <div style={{
        backgroundColor: "#607d8b",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        margin: 20,
        borderRadius: 5,
        padding: 10
      }} className="App">
          <p>Loading data</p>
          <img style={{ height: '10vh' }} src={logo} alt="Logo" />
      </div>
    );
  }
}

export default App;
/*
   background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
*/
