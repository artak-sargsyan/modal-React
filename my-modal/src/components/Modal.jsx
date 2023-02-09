import React from 'react'
import images from '../components/pics/images.jpeg'

const Modal = ({open, onClose}) => {
    if(!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
    <div onClick={(e)=>{
      e.stopPropagation()
    }} className='modalContainer'>
    <img src={images} alt='pic'/ >
    <div className='modalRight'>
    <p onClick={onClose} className='closeBtn'>X</p>
    <div className='content'>
    <p> Do You Want?</p>
    <h1>9.99$</h1>
    <p>Pure Honey From Bears</p>
    </div>
    <div className='btnContainer'>
    <button className='btnPrimary'> <span className='bold'>Bay It Now</span></button>
    <button className='btnOutLine'> <span className='bold'>Order For Sample</span></button>
    </div>
    </div>
    </div>
    </div>
  );
};
export default Modal; 