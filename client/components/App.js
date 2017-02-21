import React from 'react'
import NavigationBar from './NavigationBar'

//con this.props.children hago la llamada que necesito para X hijo
class App extends React.Component {
    render(){
        return(
        <div className="container">
            <NavigationBar />
            {this.props.children}
        </div>    
    );
    }
}

export default App;