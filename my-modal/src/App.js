import React, {useState} from 'react';
import './App.css';
import  Modal  from './components/Modal';

function App() {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div >
    <button className='modalBtn' onClick={() => setOpenModal(true)}>Sweet Bear</button>
    <Modal open={openModal} onClose={()=> setOpenModal(false)}/>
    </div>
  );
}

export default App;
