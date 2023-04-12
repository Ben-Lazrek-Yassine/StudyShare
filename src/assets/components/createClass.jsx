import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@material-ui/core";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";
import { getFirestore, doc, setDoc, where, query, getDocs } from "firebase/firestore";
import { auth, db } from "../config/config";
import { createDialogAtom } from "./atoms";
import { v4 as uuidv4 } from "uuid";

function CreateClass() {
  const newClassId = uuidv4();
  const [user, loading, error] = useAuthState(auth);
  const [open, setOpen] = useRecoilState(createDialogAtom);
  const [className, setClassName] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const createClass = async () => {
    try {
      const db = getFirestore();
      const newClassRef = doc(db, "classes", newClassId);
      const newClass = await setDoc(newClassRef, {
        creatorUid: user.uid,
        name: className,
        creatorName: user.displayName,
        creatorPhoto: user.photoURL,
        posts: [],
      });
      const userRef = await getDocs(query(where("uid", "==", user.uid), "users"));
      const docId = userRef.docs[0].id;
      const userData = userRef.docs[0].data();
      let userClasses = userData.enrolledClassrooms;
      userClasses.push({
        id: newClass.id,
        name: className,
        creatorName: user.displayName,
        creatorPhoto: user.photoURL,
      });
      const docRef = doc(db, "users", docId);
      await setDoc(docRef, { enrolledClassrooms: userClasses }, { merge: true });
      handleClose();
      console.log("Classroom created successfully!");
    } catch (err) {
      console.log(`Cannot create class - ${err.message}`);
    }
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create class</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the name of class and we will create a classroom for you!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Class Name"
            type="text"
            fullWidth
            value={className}
            onChange={(e) => setClassName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={createClass} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CreateClass;
