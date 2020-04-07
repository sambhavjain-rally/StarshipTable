import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Login.scss';
import { useHistory } from "react-router-dom";


export default function Login() {
    const history = useHistory();
    let [userName, setUserName] = useState("");
    let [password, setPassword] = useState("");

    function handleSubmit() {
        if (userName === "srihari.karnam" && password === "P@ssw0rd") {
            history.push("/dashboard");
        } else {
            alert ("Wrong Username and Password");
        }
    }

    return (
        <React.Fragment>
            <React.Fragment>
                <Header></Header>
                <div className="container">
                    <div className="loginBox">
                        <div>
                            <TextField
                                required
                                label="User Name"
                                variant="outlined"
                                onChange={(e) => setUserName(userName = e.target.value)}
                            />
                        </div>
                        <div>
                            <TextField
                                required
                                label="Password"
                                type="password"
                                variant="outlined"
                                onChange={(e) => setPassword(password = e.target.value)}
                            />
                        </div>
                        <div>
                            {/* <Button onClick={() => history.push('/dashboard')} variant="contained">Default</Button> */}
                            <Button onClick={handleSubmit} variant="contained">Default</Button>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </React.Fragment>
        </React.Fragment>
    );
}