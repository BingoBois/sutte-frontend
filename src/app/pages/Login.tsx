import * as React from 'react';
import './styles/App.css';
// @ts-ignore
import logo from '../../assets/loading.gif';
import { login, register } from '../../api/api'

interface State{
  email: string;
  password: string;
  role: string;
  name: string;
  err: string | undefined;
  type: "login" | "register";
}

class Login extends React.Component<any, State>{

  constructor(props: any) {
    super(props);
    this.state = {
      email: "",
      password: "",
      role: "teacher",
      name: "",
      err: "",
      type: "login"
    }
  }

  async componentWillMount() {
  }

  async doLogin() {
    this.setState({ err: undefined })
    try {
      console.log(await login(this.state.email, this.state.password));
    } catch (err) {
      this.setState({ err: err.err })
    }
  }

  async doRegister(){
    this.setState({ err: undefined })
    try {
      if(await register({email: this.state.email, name: this.state.name, id: -1, pass: this.state.password, role: this.state.role})){
        this.setState({err: undefined, type: "login"})
      }
    } catch (err) {
      this.setState({ err: err.err })
    }
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
          <input style={inputs} placeholder="Email..." type="text" value={this.state.email} onChange={(value) => {
            this.setState({ email: value.target.value })
          }} />
          <div style={{ height: "1px" }}></div>
          <input style={inputs} placeholder="Password..." type="password" value={this.state.password} onChange={(value) => {
            this.setState({ password: value.target.value })
          }}
          />
          {
            this.state.type === "register" ? (
              <div>
                <input style={inputs} placeholder="Name..." type="text" value={this.state.name} onChange={(value) => {
                  this.setState({ name: value.target.value })
                }} />
                <div style={{ height: "1px" }}></div>
                <label>
                  Pick user type
                  <select value={this.state.role} onChange={(value) => {this.setState({role: value.target.value})}}>
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                  </select>
                </label>
              </div>
            ) : undefined
          }
          <div style={{ height: "1px" }}></div>
          
            <input style={button} type="submit" value={this.state.type === "login" ? "Login" : "Register"} 
            onClick={() => { this.state.type === "login" ? this.doLogin() : this.doRegister() }} /> 
          
          {
            this.state.type === "login" ? (<input style={button} type="submit" value="Register" onClick={() => { this.setState({type: this.state.type === "login" ? "register" : "login"}) }} />) : undefined 
          }
          
          {
            this.state.err ? (<p style={{ fontSize: "18", color: "red", fontWeight: "bold" }}>{this.state.err}</p>) : null
          }
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
