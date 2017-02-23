import React from 'react'
import axios from 'axios'


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
        this.onSubmitConsulta = this.onSubmitConsulta.bind(this);
    }

    onChange(e) {
         //permite cambiar los estados de forma automatica, se coloco [e.target.name], para no nombrar por nombre
         
         this.setState({ [e.target.name]: e.target.value });
         
     }

     onSubmit(e) {
         axios.post('http://sample-env-1.3aqqens45r.us-west-2.elasticbeanstalk.com/api/employees/event', { 
             id_Empleado: 'fmartinez', 
             Evento: 1, 
             Latitud: -33.45,
             Longitud: -70.61
 })
         //axios.post('http://sample-env-1.3aqqens45r.us-west-2.elasticbeanstalk.com/api/login', { username:"fmartinez", password:"fmartinez" })
            .then(function (response){
                console.log(response);
            })
            .catch(function (error) {
                
             let a = Object.assign({}, error)
             console.log(a.response.data)
             
            });
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

     onSubmitConsulta(e) {
         console.log('entro');
          let b=axios.get('http://sample-env-1.3aqqens45r.us-west-2.elasticbeanstalk.com/api/employees/search?employees=fmartinez&Fecha_ini=2017-02-16&Fecha_fin=2017-02-22')
         //axios.post('http://sample-env-1.3aqqens45r.us-west-2.elasticbeanstalk.com/api/login', { username:"fmartinez", password:"fmartinez" })
            .then(function (response){
                console.log(response);
            })
            .catch(function (error) {
                
             let a = Object.assign({}, error)
             console.log(a.response.data);
             
            });
            console.log(b);
            e.preventDefault();
     }

     render() {

        return (
            <div>
                <form onSubmit={this.onSubmit} >
                    <div  className="col-lg-3">
                        <button disabled={this.state.llegue} name="llegada"  value="llegada" className="btn btn-success" >Llegada</button>
                    </div>
                </form>
                
                <form onSubmit={this.onSubmitPausar} >
                    <div  className="col-lg-3">
                        <button disabled={this.state.pausar} name="pausar"  value="pausar" className="btn btn-success" >Pausar</button>
                    </div>
                </form>
                <form onSubmit={this.onSubmitVolver} >
                    <div  className="col-lg-3">
                        <button disabled={this.state.volver} name="volver"  value="volver" className="btn btn-success" >Volver</button>
                    </div>
                </form>
                <form onSubmit={this.onSubmitSalida} >
                    <div  className="col-lg-3">
                        <button disabled={this.state.salida} name="salida"  value="salida" className="btn btn-success" >Salida</button>
                    </div>
                </form>
                <form onSubmit={this.onSubmitConsulta} >
                    <div  className="col-lg-3">
                        <button name="consulta" value="consulta" className="btn btn-success" >Consulta</button>
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