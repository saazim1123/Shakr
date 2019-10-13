import React from 'react'

import { connect } from 'react-redux';

class Landing extends React.Component {

  
    render(){
      return (
        <div>
          <div className="center-align">
            <br /><br />
            <h1><strong>Shakr</strong></h1>
            <h5>Find recipes based off your home bar</h5>
            <br /><br />
            
             
               
                <h5>Shake it up!</h5>
             
            
          </div>
        </div>
      )
    }
  }
  

  
  export default connect()(Landing)