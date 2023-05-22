import React , {useState} from 'react';
import Title from './comps/title';
import {UploadForm} from './comps/Uploadform';
import {ImageGrid}  from './comps/imageGrid';
import Modal from './comps/modal';

function App() {

  const [selectedImg , setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImageGrid setSelectedImg ={ setSelectedImg }/>
      {selectedImg && <Modal selectedImg ={selectedImg} setSelectedImg ={setSelectedImg}/>}
    </div>
  );
}

export default App;