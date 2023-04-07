import { useState } from "react";
import { Link } from "react-router-dom";
import { FacebookLoginButton, GoogleLoginButton, InstagramLoginButton } from "react-social-login-buttons";
import { NavLink, useNavigate } from 'react-router-dom'
import { auth } from '../config/config'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { TypeAnimation } from 'react-type-animation';
import 'daisyui/dist/full.css';
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUpForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleModalClose = () => {
    setShowModal(false);
    setErrorMessage("");
  }

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
    <div className="h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-1/3">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium" htmlFor="email">
              E-Mail Address
            </label>
            <input
              id="email"
              className="input-bordered input-md  bg-white border-black-300 rounded-md block w-full"
              name="email"
              type="email"
              required
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              className="input-bordered input-md bg-white border-black-300 rounded-md block w-full"
              name="password"
              type="password"
              required
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button onClick={onSignUp} className="btn btn-primary w-full">Sign Up</button>{" "}
            <Link to="/" className="block mt-4 text-center text-indigo-500 hover:text-indigo-700">
              Already have an account? Sign In
            </Link>
          </div>

        </form>
        <TypeAnimation
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: '3em', textAlign: 'center', marginTop: '1rem', color: 'black' }}
          className='studyshare'
          sequence={[
            'Study Share',
            1000,
            ' ',
            1000,
            'Study Share',
          ]}
        />
      {showModal && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
              <div className="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                      Error
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {errorMessage}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button onClick={handleModalClose} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


export default SignUpForm;