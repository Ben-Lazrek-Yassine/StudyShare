import { UserAuth } from "../context/AuthContext";

function SignInForm() {
  // your code here

  const { setCurrentUser } = UserAuth();

  const signInWithGoogle = async () =>  {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
      setCurrentUser(user); // set the currentUser state in AuthContext
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
        console.log(user);
        setCurrentUser(user); // set the currentUser state in AuthContext
        navigate("/home")
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
              className="input-bordered input-md  bg-white border-black-300 rounded-md block w-full"
              name="password"
              type="password"
              required
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button onClick={onLogin} className="btn btn-primary w-full">Sign In</button>{" "}
            <Link to="/signup" className="block mt-4 text-center text-indigo-500 hover:text-indigo-700">
              Create an account OR
            </Link>
          </div>

        </form>
        <GoogleLoginButton onClick={signInWithGoogle} />

        <TypeAnimation
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: '2em', textAlign: 'center', marginTop: '1rem', color: 'black' }}

          className='studyshare'
          sequence={['Study Share',1000,' ',1000,'Study Share',
          ]}
        />
        {showModal && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
              <div className="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                <div className="sm:flex sm:items-start">
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

export default SignInForm;
