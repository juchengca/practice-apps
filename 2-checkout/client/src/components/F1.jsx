import React from 'react';

const F1 = (props) => {

  const hc = props.handleChange;

  return(

    <div>
      <h3>Form 1 - Account</h3>
        <form>
          Name:
          <input type="text" name="name" onChange={hc}/>
          <br></br>
          E-mail:
          <input type="text" name="email" onChange={hc}/>
          <br></br>
          Password:
          <input type="text" name="password" onChange={hc}/>
          <button onClick={props.showF2}>Next</button>
        </form>
    </div>
  )

}

export default F1