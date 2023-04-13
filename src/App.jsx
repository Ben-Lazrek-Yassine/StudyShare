
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import SignInForm from "./assets/components/Signin";
import SignUpForm from "./assets/components/Signup";
import "./App.css";
import { TypeAnimation } from 'react-type-animation';
import ImgOcr from "./assets/components/Tesseract"
import { Link } from "react-router-dom"
import ChatRoom from "./assets/components/ChatRoom";
import { PrivateRoute } from "./assets/routes/PrivateRoute";
import { AuthProvider } from "./assets/context/AuthContext";
import NotFound from "./assets/components/Notfound";
import UploadDoc from "./assets/components/UploadDoc";
import SharedDocs from "./assets/components/SharedDocs";
import CourseHome from "./assets/components/CourseHome";
import Room_Navbar from "./assets/components/Room_Navbar";
import Home from "./assets/components/Home";
import Chatgpt from "./assets/components/Chatgpt";
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
        <Route path="/documents" element={<SharedDocs />} />
        <Route path="/ocr" element={<ImgOcr />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/chatgpt" element={<Chatgpt/>} />
        <Route path="/upload" element={<>
          <UploadDoc />
          <Room_Navbar />
        </>} />
        <Route path="courses" element={<CourseHome />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  </Router>
  </AuthProvider>
); }

export default App;
