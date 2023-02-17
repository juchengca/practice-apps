import React from 'react';
import {useState} from 'react';

const Add = (props) => {

  const [details, setDetails] = useState({
    word: '',
    definition: ''
  })

  const handleChange = (e) => {
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
    ADD NEW TERM
    </h3>
    <form onSubmit={handleSubmit}>
        Word<br></br>
        <input type="text" name="word" onChange={handleChange} />
        <br></br>
      Definition<br></br>
      <input type="text" name="definition" onChange={handleChange} />
      <br></br>
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default Add