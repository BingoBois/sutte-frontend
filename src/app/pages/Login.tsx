import * as React from 'react';
import './styles/App.css';
// @ts-ignore
import logo from '../../assets/loading.gif';
import { login } from '../../api/api'

class Login extends React.Component<any, any>{

  constructor(props: any) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

  async componentWillMount() {
  }

  doLogin(){
    login(this.state.email, this.state.password);
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: 'center',
          alignItems: 'center',
          height: "100vh"
        }}
      >
        <div
          style={{
            backgroundColor: '#455A64',
            display: "flex",
            flexDirection: "column",
            height: "40vh",
            width: "30vh",
            justifyContent: 'center',
            alignItems: 'center',
            margin: 20,
            borderRadius: 5,
            padding: 10
          }}
        >
              <input style={inputs} placeholder="Email..." type="text" value={this.state.value} onChange={(value) => {
                this.setState({email: value})
              }} />
              <div style={{height: "1px"}}></div>
              <input style={inputs} placeholder="Password..." type="text" value={this.state.value} onChange={(value) => {
                this.setState({email: value})
              }} 
              />
              <div style={{height: "1px"}}></div>
            <input style={button} type="submit" value="Login" onClick={() => {this.doLogin()}} />
        </div>
      </div>

    );
  }
}

export default Login;

const inputs: React.CSSProperties = {
  height: "4vh",
  border: "0px",
  padding: 5,
  backgroundColor: "#ECEFF1",
  width: "25vh",
  borderRadius: 2
}

const button: React.CSSProperties = {
  height: "4vh",
  border: "0px",
  padding: 5,
  backgroundColor: "#263238",
  width: "26.2vh",
  color: "white",
  fontWeight: "bold"
}
/*
   background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
*/
