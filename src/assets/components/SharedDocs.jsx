import { getStorage, ref, listAll } from "firebase/storage";
import { storage } from "../config/config";
import { useState, useEffect } from "react";
import Room_Navbar from './Room_Navbar';

const SharedDocs = () => {
  const [fileNames, setFileNames] = useState([]);
    
  useEffect(() => {
    const storageRef = ref(storage, "files");
    listAll(storageRef).then((res) => {
      const names = res.items.map((item) => item.name);
      setFileNames(names);
    });
  }, []);

  return (
    <>
    <Room_Navbar />
    <div className="min-h-screen flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            List of Files
          </h2>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          {fileNames.length > 0 ? (
            <ul className="divide-y divide-gray-200">
              {fileNames.map((name) => (
                <li key={name} className="py-4">
                  <div className="flex space-x-3">
                    <div className="min-w-0 flex-1">
                      <span className="text-sm font-medium text-gray-900">
                        {name}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No files found.</p>
          )}
        </div>
      </div>
    </div>
    </>

  );
};

export default SharedDocs;
