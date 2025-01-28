import React from 'react';
import '../styles/CapsuleAdder.css';

const CapsuleAdder = () => {
  return (
    <div className='Capsule-adderBody'>
      <input className='Capsule-input' type="text" placeholder='Enter Capsule Name' />
      <textarea 
      className='Capsule-input' 
      name="Capsule-description" 
      id="Capsule-description"
      placeholder='Enter Capsule Description...'
      rows={8} 
      cols={40}>
      </textarea>

      <button className='button-s'>Submit</button>
    </div>
  )
}

export default CapsuleAdder;
