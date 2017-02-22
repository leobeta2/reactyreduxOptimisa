import React from 'react'


class BotonLlegue extends React.Component {

    
    render(){
        return(
            
            <button disabled={this.state.llegue} name="button1"  value="llegada" className="btn btn-success" >Llegada</button>
            
        );
    }
}

export default BotonLlegue

