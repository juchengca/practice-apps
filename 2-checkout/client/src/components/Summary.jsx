import React from 'react';

const Summary = (props) => {

  var info = props.details;

  return (
    <div>
      <h3>Summary</h3>
      <div><b>Account</b>
        <br></br>
        Name: {info.name}
        <br></br>
        E-mail: {info.email}
        <br></br>
        Password: {info.password}
        <br></br>
        <b>Address</b>
        <br></br>
        Address Line 1: {info.line1}
        <br></br>
        Address Line 2: {info.line2}
        <br></br>
        City: {info.city}
        <br></br>
        State: {info.state}
        <br></br>
        ZIP: {info.zip}
        <br></br>
        Phone Number: {info.phone}
        <br></br>
        <b>Billing</b>
        <br></br>
        Credit Card #: {info.cc}
        <br></br>
        Expiration Date: {info.rxp}
        <br></br>
        CVV: {info.cvv}
        <br></br>
        Billing ZIP Code: {info.bzip}
        <br></br>
        <button onClick={props.goHome} onClick={props.handleSubmit}>Purchase</button>
      </div>
    </div>
  )

}

export default Summary