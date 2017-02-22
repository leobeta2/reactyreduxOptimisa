import React from 'react'
import axios from 'axios'
import BotonLlegue from './Boton/BotonLlegue'


class HomeBotones extends React.Component {
     
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
         this.setState({llegue: true});
         e.preventDefault();
        //  axios.post('/api/users', { user:this.state })
        //     .then(function (response){
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
     }

     render() {

        return (
            <form onSubmit={this.onSubmit} >
                <div  className="col-lg-2">
                    <button disabled={this.state.llegue} name="button1"  value="llegada" className="btn btn-success" >Llegada</button>
                </div>
                <div className="col-lg-2">
                    <button disabled={this.state.pausar} type="button" className="btn btn-success" >Pausar</button>
                </div>
                <div className="col-lg-2">
                    <button type="button" className="btn btn-success" >Volver</button>
                </div>
                <div className="col-lg-3">
                    <button type="button" className="btn btn-danger" >Salida</button>
                </div>
            </form>
        );
    }
}

export default HomeBotones