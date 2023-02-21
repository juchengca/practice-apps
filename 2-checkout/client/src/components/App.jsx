import React from 'react';
import { useState } from 'react';
import F1 from './F1.jsx';
import F2 from './F2.jsx';
import F3 from './F3.jsx';
import Summary from './Summary.jsx'
import $ from 'jquery';

const App = () => {

  const [hiddenF1, setHiddenF1] = useState(false);
  const [hiddenF2, setHiddenF2] = useState(true);
  const [hiddenF3, setHiddenF3] = useState(true);
  const [hiddenSum, setHiddenSum] = useState(true);
  const [details, setDetails] = useState({
    name: '',
    email: '',
    password: '',
    line1: '',
    line2: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    cc: '',
    exp: '',
    cvv: '',
    bzip: '',
    sid: ''
  });

  const showF2 = (e) => {
    e.preventDefault();
    setHiddenF1(true);
    setHiddenF2(false);
  }
  const showF3 = (e) => {
    e.preventDefault();
    setHiddenF2(true);
    setHiddenF3(false);
  }
  const showSum = (e) => {
    e.preventDefault();
    setHiddenF3(true);
    setHiddenSum(false);
  }
  const goHome = (e) => {
    //e.preventDefault();
    setHiddenF1(false);
    setHiddenF2(true);
    setHiddenF3(true);
    setHiddenSum(true);
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails((prev) => {
      prev[name] = value;
      return {...prev};
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitResponse(details);
    goHome();
  };

  const submitResponse = (details) => {
    $.ajax({
      url: '/submit',
      type: 'POST',
      data: details,
      success: (resCode) => {
        console.log(resCode);
        if (resCode === 'session limit reached') {
          submitError();
        } else {
          submitSuccess();
        }
      }
    })
  };

  const submitError = () => {
    alert('Error: limit one submit per session!');
  };

  const submitSuccess = () => {
    alert('Purchase submitted successfully.');
  };

  return (

    <div>
    <h2>Shopping Cart</h2>
      {!hiddenF1 ? <div><F1 showF2={showF2} handleChange={handleChange}/></div> : null}
      {!hiddenF2 ? <div><F2 showF3={showF3} handleChange={handleChange}/></div> : null}
      {!hiddenF3 ? <div><F3 showSum={showSum} handleChange={handleChange}/></div> : null}
      {!hiddenSum ? <div><Summary goHome={goHome} handleChange={handleChange} details={details} handleSubmit={handleSubmit}/></div> : null}
    </div>

  )

};

export default App