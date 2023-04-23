import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../config/config";
import { useState, useEffect } from "react";
import { Avatar, IconButton, MenuItem, Menu } from "@material-ui/core";
import { Add, Apps, Menu as MenuIcon } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
const SharedDocs = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [files, setFiles] = useState([]);
  const navigateToUpload = () => {
    navigate('/upload');
  };


  useEffect(() => {
    const storageRef = ref(storage, "files");
    listAll(storageRef).then((res) => {
      const promises = res.items.map((item) => getDownloadURL(item));
      Promise.all(promises).then((urls) => {
        const files = res.items.map((item, index) => ({
          name: item.name,
          url: urls[index],
        }));
        setFiles(files);
      });
    });
  }, []);

  return (
    <>
      <div className=" flex flex-col justify-center items-center ">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white underline">
              List of Files
            </h2>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 ">
            <div class="">
              <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 ">
                <div class="grid-cols-9 gap-4 flex justify-center">
                    <MenuItem
                      onClick={() => {
                        navigateToUpload();
                        setCreateOpened(true);
                        handleClose();
                      }}
                    >
                      <Add />
                    </MenuItem>
                  </div>
              </div>
            </div>
            {files.length > 0 ? (
              <ul className="divide-y divide-gray-200">
                {files.map((file) => (
                  <li key={file.name} className="py-4">
                    <div className="flex space-x-3">
                      <div className="min-w-0 flex">
                        <a href={file.url} download={file.name} className="text-sm font-medium text-gray-900 hover:text-indigo-600">
                          {file.name}
                          <div className="rating rating-sm overflow-hidden px-1">
                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                          </div>
                        </a>
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
        {<div>&nbsp;</div>}

        <div className="btn-group">
          <button className="btn">1</button>
          <button className="btn">2</button>
          <button className="btn">3</button>
        </div>
      </div>

    </>
  );
};

export default SharedDocs;
