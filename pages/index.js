import React from 'react';
import { useState } from 'react';
// import  '../styles/Home.css';
// import '../styles/globals.css'

export default function Home(props) {
  let [count, setCount] = useState(0);
  let [value, setValue] = useState({});
  let [image, setImage] = useState(null);

  function handleAddOnclick(){
      console.log("adding....");
      setCount(count+1);
  }
  
  function handleSubOnclick(){
    setCount(count-1)
  }

  function handleChange(event) {
    event.target.type === "text" ?  setValue({...value, [event.target.name]: event.target.value}) : setValue({...value, [event.target.name]: event.target.files[0]})
    if(event.target.type === "file") {
      setImage(value.image)
    }
  }

  return (
    <div className="container">
      <div>testing react app</div>
      <br/>
      <form >
        <label for="name">First Name</label>
        <input id="firstname" type="text" autoComplete="name" value="dakshina" required />
        <br/>
        <br/>
        <label for="name">Last Name</label>
        <input id="lastname" type="text" autoComplete="name" value="jayakumar" required /><br/><br/>
        <label htmlFor="fileUpload">Upload file:</label>
        <input type="file" name="image" id="fileUpload" onChange={handleChange} />
        {image && (
          <div>
            <img src={URL.createObjectURL(image)} alt="Preview" width='400px' height='200px' />
          </div> 
        )}
      </form> 
      <br/>
      <div className='count'>{count}</div>
      <button
      className='add'
        onClick={handleAddOnclick}
        disabled={(count >= 10)||props.disabled}
      >
        ADD
      </button>
      <button
      className='sub'
        onClick={handleSubOnclick}
        disabled={(count <= 0)||props.disabled}
      >
        SUBTRACT
      </button>
    </div>
  )
}

Home.defaultProps = {
  onClick: () => false,
  disabled: false
};