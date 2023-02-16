import React from 'react';
import { useState, useEffect } from 'react';
import Add from './Add.jsx';
import Stored from './Stored.jsx';
import $ from 'jquery';

const App = () => {

  const [words, setWords] = useState({});

  const submitAdd = (details) => {
    $.ajax({
      url:'/submit',
      type:"POST",
      data: {'word': details.word, 'definition': details.definition},
      success: (response) => {
        console.log('post success!');
        readWords((result) => {
          setWords(result);
        });
      }
    })
  };

  const readWords = (callback) => {

    $.ajax({
      url:'/read',
      type:"GET",
      success: (response) => {
        callback(response);
      }
    })
  };

  const deleteWord = (word) => {
    $.ajax({
      url:'/delete',
      type:"POST",
      data: {word},
      success: (response) => {
        readWords((result) => {
          setWords(result);
        });
      }
    })
  }

  useEffect(() => {
    readWords((result) => {
      setWords(result);
    });
  }, []);

  //readWords();

  return (
    <div>
     <h1>Glossary App</h1>
     <Add submitAdd={submitAdd}/>
     <Stored words={words} deleteWord={deleteWord}/>
    </div>
  )
}

export default App