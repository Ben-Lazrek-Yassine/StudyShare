import LandingIntro from './LandingIntro'
import ErrorText from './ErrorText'
import InputText from './InputText'
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { TypeAnimation } from "react-type-animation";
import "daisyui/dist/full.css";
import { GoogleLoginButton } from "react-social-login-buttons";
import { UserAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { auth, provider } from "../config/config";


function Login() {
    const { currentUser, googleSignIn } = UserAuth();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const handleModalClose = () => {
        setShowModal(false);
        setErrorMessage("");
    }

    useEffect(() => {
        if (currentUser) {
            navigate("/home");
        }
    }, [currentUser, navigate]);

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log(user);
            setUserEmail(user.email);
            navigate("/home");
        } catch (error) {
            console.log(error);
        }
    }

    const onLogin = (e) => {
        if (e) {
            e.preventDefault();
        }
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUserEmail(user.email);
                navigate("/home")
                console.log(user);
                console.log(user.email);
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
            <div className="card mx-auto w-full max-w-5xl  shadow-xl">
                <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
                    <div className=''>
                        <LandingIntro />
                    </div>
                    <div className='py-24 px-10'>
                        <h2 className='text-2xl font-semibold mb-2 text-center'>Login</h2>
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

                            <div className='text-right text-primary'><Link to="/forgot-password"><span className="text-sm  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Forgot Password?</span></Link>
                            </div>

                            <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
                            <button onClick={onLogin} type="submit" className={"btn mt-2 w-full btn-primary" + (loading ? " loading" : "")}>Login</button>
                            <GoogleLoginButton  iconSize='28' onClick={signInWithGoogle} />
                            <div className='text-center mt-4'>Don't have an account yet? <Link to="/signup"><span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Register</span></Link></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login