import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { TypeAnimation } from "react-type-animation";
import "daisyui/dist/full.css";
import { GoogleLoginButton } from "react-social-login-buttons";
import { UserAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { auth, provider } from "../config/config";
import LandingIntro from './LandingIntro';
import ErrorText from './ErrorText';
import InputText from './InputText';

function SignUpForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false)



  const onSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/")
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setShowModal(true);
        setErrorMessage(errorMessage);
        console.log(errorCode, errorMessage)
      });

  }

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-5xl shadow-xl">
        <div className="grid md:grid-cols-2 grid-cols-1 bg-base-100 rounded-xl">
          <div>
            <LandingIntro />
          </div>
          <div className="py-24 px-10">
            <h2 className="text-2xl font-semibold mb-2 text-center">Register</h2>
            <form onSubmit={(e) => submitForm(e)}>
                            <div className="mb-4">
                                <input
                                    id="email"
                                    className="input  input-bordered w-full"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="Email address"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    id="password"
                                    className="input  input-bordered w-full mt-5"
                                    name="password"
                                    type="password"
                                    required
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
              <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
              <button onClick={onSignUp} type="submit" className={"btn mt-2 w-full btn-primary" + (loading ? " loading" : "")}>Register</button>

              <div className="text-center mt-4">
                Already have an account? <Link to="/"><span className="inline-block hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Login</span></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
