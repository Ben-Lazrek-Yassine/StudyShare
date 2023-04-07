
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import SignInForm from "./assets/components/Signin";
import SignUpForm from "./assets/components/Signup";
import Home from "./assets/components/Home"
import "./App.css";
import { TypeAnimation } from 'react-type-animation';
import ImgOcr from "./assets/components/Tesseract"
import { Link } from "react-router-dom"
import ChatRoom from "./assets/components/ChatRoom";
import { PrivateRoute } from "./assets/routes/PrivateRoute";
import { AuthProvider } from "./assets/context/AuthContext";
import NotFound from "./assets/components/Notfound";

function App() {
return (
  <AuthProvider>
  <Router>
      <Routes>
        <Route path="/" element={<SignInForm />} />
        <Route
          path="/chat"
          element={
            <PrivateRoute>
              <ChatRoom />
            </PrivateRoute>
          }
        />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ocr" element={<ImgOcr />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  </Router>
  </AuthProvider>
); }

export default App;
