
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import SignInForm from "./assets/components/Signin";
import SignUpForm from "./assets/components/Signup";
import ImgOcr from "./assets/components/Tesseract"
import ChatRoom from "./assets/components/ChatRoom";
import { PrivateRoute } from "./assets/routes/PrivateRoute";
import { AuthProvider } from "./assets/context/AuthContext";
import NotFound from "./assets/components/Notfound";
import UploadDoc from "./assets/components/UploadDoc";
import SharedDocs from "./assets/components/SharedDocs";
import Chatgpt from "./assets/components/Chatgpt";
import Sketch from '../src/assets/components/drawing/Sketch';
import Tables from './assets/components/Tables';
import Home from './assets/components/Home';
import Calculator from './assets/components/Calculator';
import MathPlot from './assets/components/Mathplot';
import About_wrap from './assets/components/about/About_wrap';
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<About_wrap />} />
          <Route
            path="/chat"
            element={
              <PrivateRoute>
                <ChatRoom />
              </PrivateRoute>
            }
          />
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/documents" element={<PrivateRoute>  <SharedDocs /></PrivateRoute>} />
          <Route path="/mathplot" element={<MathPlot />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/ocr" element={<ImgOcr />} />
          <Route path="/sketch" element={<Sketch />} />
          <Route path="/home" element={<PrivateRoute>  <Home /></PrivateRoute>} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/chatgpt" element={<Chatgpt />} />
          <Route path="/upload" element={<>
            <PrivateRoute><UploadDoc /></PrivateRoute>
          </>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
