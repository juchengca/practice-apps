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

  return (
    <div>
     <h3>Search</h3>
     <form>
      <input onChange={handleChange}></input>
      <button onClick={handleClick}>Search</button>
     </form>
    </div>
  )

}

export default Search