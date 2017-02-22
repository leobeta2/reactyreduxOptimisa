import React from 'react'
import map from 'lodash/map'
import axios from 'axios'

class LoginForm extends React.Component {
     constructor(props)  {
         super(props);
         this.state = {
             username: '',
             password: '',
             //status: 0
         }

         this.onChange = this.onChange.bind(this);
         this.onSubmit = this.onSubmit.bind(this);
     }

     onChange(e) {
         //permite cambiar los estados de forma automatica, se coloco [e.target.name], para no nombrar por nombre
         this.setState({ [e.target.name]: e.target.value });
     }

     onSubmit(e) {
         e.preventDefault();
         //peticion a una api con libreria axios(Crud)..., simplifica la vida ya que genera el objeto como json
        //  axios.get('/api/usuario', {user: this.state})
        //     .then(function (response){
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
         axios.post('http://sample-env-1.3aqqens45r.us-west-2.elasticbeanstalk.com/api/login', { username:this.state.username, password:this.state.password })
         //axios.post('http://sample-env-1.3aqqens45r.us-west-2.elasticbeanstalk.com/api/login', { username:"fmartinez", password:"fmartinez" })
            .then(function (response){
                console.log(response);
            })
            .catch(function (error) {
                
             let a = Object.assign({}, error)
             console.log(a.response.data)
             
            });

            
     }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Ingresa a nuestra comunidad Optimisa!!</h1>
                <div className="form-group">
                    <label className="control-label">Usuario</label>
                    <input 
                        value={this.state.username}
                        onChange={this.onChange}
                        type="text" 
                        name="username" 
                        className="form-control" />
                </div>



                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input 
                        value={this.state.password}
                        onChange={this.onChange}
                        type="password" 
                        name="password" 
                        className="form-control" />
                </div>

                <div className="form-group">
                    <button className="btn btn-primary btn-lg">
                        Iniciar Sesion
                    </button>
                </div>
            </form>
        );
    }
}

export default LoginForm