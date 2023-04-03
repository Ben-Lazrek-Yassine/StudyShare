import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-daisyui";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-blue-500 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
          404 Not Found
        </h1>
        <p className="mt-4 text-center text-xl text-gray-600">
          Sorry, the page you're looking for cannot be found.
        </p>
        <div className="mt-8 space-x-4 flex justify-center">
          <Button onClick={() => navigate("/home")} size="lg" color="primary">
            Go to Home
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;