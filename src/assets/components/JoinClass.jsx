import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";
import { getFirestore, doc, getDoc, updateDoc, query, where, getDocs } from "firebase/firestore";
import { auth } from "../config/config";
import { joinDialogAtom } from "./atoms";

function JoinClass() {
    const [open, setOpen] = useRecoilState(joinDialogAtom);
    const [user, loading, error] = useAuthState(auth);
    const [classId, setClassId] = useState("");

    const handleClose = () => {
        setOpen(false);
    };

    const joinClass = async () => {
        try {
            // check if class exists
            const db = getFirestore();
            const classRef = doc(db, "classes", classId);
            const classDoc = await getDoc(classRef);
            if (!classDoc.exists()) {
                return alert(`Class doesn't exist, please provide correct ID`);
            }
            const classData = classDoc.data();
            // add class to user
            const userRef = query(doc(db, "users"), where("uid", "==", user.uid));
            const userSnapshot = await getDocs(userRef);
            const userData = userSnapshot.docs[0].data();
            let tempClassrooms = userData.enrolledClassrooms;
            tempClassrooms.push({
                creatorName: classData.creatorName,
                creatorPhoto: classData.creatorPhoto,
                id: classId,
                name: classData.name,
            });
            await updateDoc(userSnapshot.docs[0].ref, { enrolledClassrooms: tempClassrooms });
            // alert done
            alert(`Enrolled in ${classData.name} successfully!`);
            handleClose();
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };

    return (
        <div className="joinClass">
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Join class</DialogTitle>
                <DialogContent>
                    <DialogContentText>Enter ID of the class to join the classroom</DialogContentText>
                    <TextField autoFocus margin="dense" label="Class Name" type="text" fullWidth value={classId} onChange={(e) => setClassId(e.target.value)} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={joinClass} color="primary">
                        Join
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default JoinClass;
