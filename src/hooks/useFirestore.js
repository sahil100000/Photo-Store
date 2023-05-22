import React ,  {useState , useEffect } from 'react'
import { Db } from '../firebase/config'
import { collection , query , orderBy , onSnapshot } from 'firebase/firestore';

const UseFirestore = (col) => {

    const [Docs,setDocs] = useState([]);
    useEffect( () => {
        
        const collectionRef = query(collection(Db , col ),orderBy('timestamp' , 'desc'));
        const unsub = onSnapshot( collectionRef , (snap) => {
                let documents = [];
                snap.forEach(doc => {
                    documents.push({ ...doc.data(), id : doc.id});
                });
                setDocs(documents);
            });

            return () => unsub();
            
    } ,[col]);

    return { Docs };
}

export {UseFirestore};