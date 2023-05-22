import { Db, Storage } from '../firebase/config';
import React ,{useState} from 'react';
import {ProgressBar} from "../comps/progressbar";

const uploadform = () => {
    //types that are valid
    const types = ['image/png','image/jpeg'];

    //useState for image file anr error message
    const [file,setFile] = useState(null);
    const [error,setError] = useState(null);

    //function to handle input
    const changeHandler = (e) => {
        let selected=e.target.files[0]; //select first file out of multiple files

        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
        }else{
            setFile(null);
            setError('Please select an image file(png or jpeg)');
        }
    };

  return (
    <form >
        <label>
            <input type="file" onChange={changeHandler} />
            <span>+</span>
        </label>
        <div className="output">
            {error && <div className="error"> {error} </div>}
            {file && <div className="file"> {file.name} </div>}
            {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
    </form>
  )
}

export {UploadForm};