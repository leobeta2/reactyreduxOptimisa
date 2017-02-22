import React from 'react'


class BotonLlegue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            llegue: false,
            pausar: true,
            volver: true,
            salida: true,
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
         //permite cambiar los estados de forma automatica, se coloco [e.target.name], para no nombrar por nombre
         this.setState({ [e.target.name]: e.target.value });
     }

     onSubmit(e) {
         console.log(e);
         this.setState({salida: true});
         e.preventDefault();
        //  axios.post('/api/users', { user:this.state })
        //     .then(function (response){
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
     }

    
    render(){
        return(
            
            <form onSubmit={this.onSubmit}  >
                <div  className="col-lg-2">
                    <button disabled={this.state.salida} name="salida"  value="salida" className="btn btn-success" >Salida</button>
                </div>
            </form>
        );
    }
}

export default BotonLlegue