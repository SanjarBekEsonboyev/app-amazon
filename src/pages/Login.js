import React from 'react';
import '../sass/login.scss';
import {Divider} from "@mui/material";
import { signInWithGoogle } from "../firebes/config";

const Login = () => {
    return (
        <>
            <div className="container">
                <div className="row w-100 vh-100 justify-content-center">
                    <div className="col-4 h-100">
                        <span className="d-flex justify-content-center align-items-center">
                            <img src="/images/login.jpg" className="login_logo" alt="Amazon"/>
                        </span>

                        <div className="card mt-3">
                            <div className="card-body">
                                <h3 className="">Sign-in</h3>
                                <p className="mb-0">Email or mobile phone number</p>
                                <input type="text" className="form-control"/>
                                <button type="button" className="btn btn-warning btn-block my-3">Continue</button>

                                <span className="link">
                                    By continuing, you agree to Amazon's <a href="#">Conditions <br/> of Use</a> and <a
                                    href="#">Privacy Notice.</a>
                                </span>
                            </div>
                        </div>

                        <Divider style={{marginTop: "15px", marginBottom: "10px"}}>New to Amazon?</Divider>

                        <button type="button" className="btn btn-block border" onClick={signInWithGoogle} style={{backgroundColor: "#F0F1F4"}}>Create your Amazon account</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
