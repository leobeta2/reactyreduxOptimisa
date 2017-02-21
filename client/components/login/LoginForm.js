import React from 'react'
import map from 'lodash/map'
import axios from 'axios'

class LoginForm extends React.Component {
     constructor(props)  {
         super(props);
         this.state = {
             username: '',
             password: '',
             status: 0
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
         axios.post('/api/users', { user:this.state })
            .then(function (response){
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
     }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Unete a nuestra comunidad!!</h1>
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