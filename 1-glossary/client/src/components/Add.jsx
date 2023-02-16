import React from 'react';
import {useState} from 'react';

const Add = (props) => {

  const [details, setDetails] = useState({
    word: '',
    definition: ''
  })

  const handleChange = (e) => {
    console.log(e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    setDetails((prev) => {
      return {...prev, [name]: value}
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitAdd(details);
  }

  return (
    <div>
    <h3>
     Add new definition:
    </h3>
    <form onSubmit={handleSubmit}>
        Word
        <input type="text" name="word" onChange={handleChange} />
      Definition
      <input type="text" name="definition" onChange={handleChange} />
      <button type="submit">Submit Form</button>
    </form>
    </div>
  )
}

export default Add