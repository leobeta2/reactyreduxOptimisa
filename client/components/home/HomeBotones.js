import React from 'react'
import axios from 'axios'
import BotonLlegue from './Boton/BotonLlegue'
import BotonSalida from './Boton/BotonSalida'


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
        this.onSubmitPausar = this.onSubmitPausar.bind(this);
        this.onSubmitSalida = this.onSubmitSalida.bind(this);
        this.onSubmitVolver = this.onSubmitVolver.bind(this);
    }

    onChange(e) {
         //permite cambiar los estados de forma automatica, se coloco [e.target.name], para no nombrar por nombre
         this.setState({ [e.target.name]: e.target.value });
     }

     onSubmit(e) {
         console.log(e);
         this.setState({llegue: true,pausar: false,volver: true, salida: false});
         e.preventDefault();
        //  axios.post('/api/users', { user:this.state })
        //     .then(function (response){
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
     }

     onSubmitSalida(e) {
         console.log(e);
         this.setState({llegue: false,pausar: true,volver: true, salida: true});
         e.preventDefault();
        
     }

     onSubmitPausar(e) {
         console.log(e);
         this.setState({llegue: true,pausar: true,volver: false, salida: true});
         e.preventDefault();
        
     }

     onSubmitVolver(e) {
         console.log(e);
         this.setState({llegue: true,pausar: false,volver: true, salida: false});
         e.preventDefault();
        
     }

     render() {

        return (
            <div>
                <form onSubmit={this.onSubmit} >
                    <div  className="col-lg-2">
                        <button disabled={this.state.llegue} name="llegada"  value="llegada" className="btn btn-success" >Llegada</button>
                    </div>
                </form>
                <form onSubmit={this.onSubmitSalida} >
                    <div  className="col-lg-2">
                        <button disabled={this.state.salida} name="salida"  value="salida" className="btn btn-success" >Salida</button>
                    </div>
                </form>
                <form onSubmit={this.onSubmitPausar} >
                    <div  className="col-lg-2">
                        <button disabled={this.state.pausar} name="pausar"  value="pausar" className="btn btn-success" >Pausar</button>
                    </div>
                </form>
                <form onSubmit={this.onSubmitVolver} >
                    <div  className="col-lg-2">
                        <button disabled={this.state.volver} name="volver"  value="volver" className="btn btn-success" >Volver</button>
                    </div>
                </form>
                {/*<div className="col-lg-2">
                    <button disabled={this.state.pausar} type="button" className="btn btn-success" >Pausar</button>
                </div>
                <div className="col-lg-2">
                    <button type="button" className="btn btn-success" >Volver</button>
                </div>
                <div className="col-lg-3">
                    <button type="button" className="btn btn-danger" >Salida</button>
                </div>*/}
            </div>
            
        );
    }
}

export default HomeBotones