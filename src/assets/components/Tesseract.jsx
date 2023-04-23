import { useState } from "react";
import { Link } from "react-router-dom";
import Tesseract from 'tesseract.js';
import Navbar from "./Navbar";
import { Button } from 'react-daisyui'

const ImgOcr = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [text, setText] = useState("");
    const [img, setImg] = useState("");
    const [progress, setProgress] = useState(0);

    const handleClick = () => {
        setIsLoading(true);
        Tesseract.recognize(img, "eng", {
            logger: (m) => {
                console.log(m);
                if (m.status === "recognizing text") {
                    setProgress(parseInt(m.progress * 100))
                }
            },
        }).then(({ data: { text } }) => {
            setText(text);
            setIsLoading(false);
        });
    }


    return (
      <>
        <Navbar />
        <div className="py-10 flex justify-center items-center">
    <div className="container mx-auto p-10">
          <div className="w-full max-w-md mx-auto">
            <h1 className="text-4xl font-bold text-center mb-10">Image To Text</h1>
            {!isLoading && !text && (
              <>
                <div className="flex flex-col mb-6">
                  <label htmlFor="image" className="mb-2 font-bold text-lg">
                    Choose an image:
                  </label>
                  <input
                    type="file"
                    id="image"
                    onChange={(e) => setImg(URL.createObjectURL(e.target.files[0]))}
                    className="file-input file-input-bordered w-fullrounded-lg w-full"
                  />
                </div>
                <Button
                  primary
                  className="w-full"
                  onClick={handleClick}
                >
                  Convert
                </Button>
              </>
            )}
    
            {isLoading && (
              <div className="flex flex-col mb-6">
                <p className="mb-2 font-bold text-lg">Converting:</p>
                <div className="relative pt-1">
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                    <div
                      style={{ width: `${progress}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                    ></div>
                  </div>
                </div>
              </div>
            )}
    
            {!isLoading && text && (
              <div className="flex flex-col mb-6">
                <label htmlFor="result" className="mb-2 font-bold text-lg">
                  Result:
                </label>
                <textarea
                  id="result"
                  className="text-center p-2 border border-gray-400 rounded-lg w-full bg-white text-lg"
                  value={text}
                  rows="10"
                  style={{ color: "black" }}
                  onChange={(e) => setText(e.target.value)}
                ></textarea>
              </div>
            )}
    
            <div className="text-center">
              {/*<Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Return Home
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      </>
    );
    
}

export default ImgOcr;
