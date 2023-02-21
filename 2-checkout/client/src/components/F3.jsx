import React from 'react';

const F3 = (props) => {

  const hc = props.handleChange;

  return(
    <div>
      <h3>Form 3 - Billing</h3>
      <form>
        Credit Card #
        <input type="text" name="cc" onChange={hc}/>
        <br></br>
        Expiration Date
        <input type="text" name="exp" onChange={hc}/>
        <br></br>
        CVV
        <input type="text" name="cvv" onChange={hc}/>
        <br></br>
        Billing ZIP Code
        <input type="text" name="bzip" onChange={hc}/>
        <br></br>
        <button onClick={props.showSum}>Next</button>
      </form>
    </div>
  )

}

export default F3