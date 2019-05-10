import * as React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom'
// @ts-ignore
import logo from '../assets/bestellstatus3.png';


@observer
export default class Header extends React.Component<any, any>{
    render(){
        return(
            <div
            style={{
                backgroundColor: "#455A64",
                display: "flex",
                flexDirection: "row",
                height: "10vh",
                marginLeft: 20,
                marginRight: 20,
                borderBottomRightRadius: 5,
                borderBottomLeftRadius: 5,
              }}
            >
            <div
                style={{
                    width: '10vh'
                }}
            >
                <img style={{ height: '10vh' }} src={logo} alt="Logo" />
            </div>
            <div
                style={{
                    display: "flex",
                    width: '100%',
                    justifyContent: 'space-around',
                    alignItems: 'center'
                }}
            >
                <Link style={{ textDecorationLine: 'none', color: 'white'}} to={"/"}><p>Home</p></Link>
                <Link style={{ textDecorationLine: 'none' , color: 'white'}} to={"/login"}><p>Login</p></Link>
            </div>
            <div
                style={{
                    width: '10vh'
                }}
            >
                <img style={{ height: '10vh' }} src={logo} alt="Logo" />
            </div>
            </div>
        );
    }
}
