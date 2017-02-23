import React from 'react'


class HomeConsultas extends React.Component {
     
     render() {

        return (
            <form onSubmit={this.onSubmitConsulta} >
                    <div  className="col-lg-2">
                        <button name="consulta" value="consulta" className="btn btn-success" >Consultax</button>
                    </div>
            </form> 
            
        );
    }
}

export default HomeConsultas