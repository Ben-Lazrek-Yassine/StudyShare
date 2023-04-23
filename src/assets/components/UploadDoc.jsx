import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography, LinearProgress } from "@material-ui/core";
import { storage } from '../config/config';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import Navbar from "./Navbar";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundImage: `url("https://images.unsplash.com/photo-1593300689215-83595dffa075")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    padding: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 500,
    minWidth: 300,
    backgroundColor: "#d3d0d0",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    marginTop: theme.spacing(2),
    color:"white",
  },
  input: {
    display: "none",
  },
  button: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    borderRadius: 20,  
    backgroundColor: "#111c30",  
    color: "white", 
    padding: "10px 20px",  

  },
}));

function UploadDoc() {
  const classes = useStyles();
  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);
  const [showModal, setShowModal] = useState(false);

  
  const handleModalClose = () => {
    setShowModal(false);
    setErrorMessage("");
}
  const handleSubmit = (e) => {
    e.preventDefault()
    const file = e.target[0]?.files[0]
    if (!file) return;
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed",
      (snapshot) => {
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL )
        });
      }
    );
  }

  return (
    <>
    <Navbar />
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h5" gutterBottom>
          Upload a file
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
        <input type="file" className="file-input file-input-bordered file-input-md w-full max-w-xs" />
          <label htmlFor="contained-button-file">
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <Typography variant="w-full max-w-xs">Select a file</Typography>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
          </label>
          <button classname="btn w-full" type='submit' className={classes.button}>Upload</button>
        </form>
        {
          progresspercent > 0 && progresspercent < 100 &&
          <LinearProgress variant="determinate" value={progresspercent} />
        }
        <div class="flex items-center justify-center w-full">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
    </label>
</div> 
      </Paper>
    </div>
        </>
  );
}

export default UploadDoc;
