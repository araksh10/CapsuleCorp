import React from 'react';
import '../styles/CapsuleAdder.css';

const CapsuleAdder = () => {

  const handleInput = (event) => {
    setInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(todoAdd(input));
    setInput('');
}

  return (

    <div>
      <form className='Capsule-adderBody' onSubmit={handleSubmit}>
        <input 
          className='Capsule-input' 
          type="text" 
          placeholder='Enter Capsule Name'
          onChange={handleInput} 
        />

        <textarea 
        className='Capsule-input' 
        name="Capsule-description" 
        id="Capsule-description"
        placeholder='Enter Capsule Description...'
        rows={8} 
        cols={40}>
        </textarea>

        <button className='button-s'>Submit</button>
      </form>
    </div>
  )
}

export default CapsuleAdder;
