import { useState ,useEffect } from "react";
import { Db , Storage } from "../firebase/config";
import { collection , addDoc, serverTimestamp } from "firebase/firestore";
import { ref , uploadBytesResumable , getDownloadURL } from "firebase/storage";

const useStorage = (file) => {

    const [error,setError] = useState(null);
    const [progress,setProgress] = useState(0);
    const [url,setUrl] = useState(null);

    useEffect(() =>{

        //create a reference
        const storageRef = ref(Storage ,file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);
        let collectionRef = collection(Db , 'images');

        uploadTask.on('state_changed', 
            (snapshot) => {
                let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(percentage);
            }, 
            (error) => {
                setError(error);
            }, 
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setUrl(downloadURL);
                    const data = {
                        url : downloadURL ,
                        timestamp :serverTimestamp()
                    };

                    addDoc(collectionRef , data)
                    .then(docRef => {
                        console.log("Document has been added successfully");
                    })
                });
            }
        );
    } , [file]);


    return { progress , url , error };   
    // by using this hook we will be able to access these values wherever it is called
}

export {useStorage};
