import React from 'react';

const Search = (props) => {

  var searchField = '';

  const handleChange = (e) => {
    searchField = e.target.value;
  };

  const handleClick = (e) => {
    e.preventDefault();
    props.filter(searchField);
  };

  const handleReset = () => {
    props.reset();
  }

  return (
    <div>
     <h3>SEARCH</h3>
     <form>
      <input onChange={handleChange}></input>
      <br></br>
      <button onClick={handleClick}>Search</button>
      <button onClick={handleReset}>Reset</button>
     </form>
    </div>
  )

}

export default Search