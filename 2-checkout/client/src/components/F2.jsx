import React from 'react';

const F2 = (props) => {

  const hc = props.handleChange;

  return(
    <div>
      <h3>Form 2 - Address</h3>
      <form>
        Line 1
        <input type="text" name="line1" onChange={hc}/>
        <br></br>
        Line 2
        <input type="text" name="line2" onChange={hc}/>
        <br></br>
        City
        <input type="text" name="city" onChange={hc}/>
        <br></br>
        State
        <input type="text" name="state" onChange={hc}/>
        <br></br>
        ZIP
        <input type="text" name="zip" onChange={hc}/>
        <br></br>
        Phone Number
        <input type="text" name="phone" onChange={hc}/>
        <button onClick={props.showF3}>Next</button>
      </form>
    </div>
  )

}

export default F2