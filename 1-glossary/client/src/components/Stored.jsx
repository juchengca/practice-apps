import React from 'react'

const Stored = (props) => {

  if(Array.isArray(props.words)) {
    var words = props.words;
  } else {
    var words = [
      {_id: 0, word: 'initial', definition: 'state'}
    ]
  }

  return (
    <div>
    <h3>GLOSSARY</h3>
      <ol>
      {words.map((word) =>
        <ul key={word._id}>
            Word: {word.word}
            <br></br>
            Definition: {word.definition}
            <br></br>
            <button key={word} onClick={() => {props.deleteWord(word)}}>Delete</button>
      </ul>)}
    </ol>
    </div>
  )
}

export default Stored