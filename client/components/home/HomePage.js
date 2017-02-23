import React from 'react'
import HomeMap from './HomeMap'
import HomeDatos from './HomeDatos'
import HomeBotones from './HomeBotones'
import HomeConsultas from './HomeConsultas'


class HomePage extends React.Component {
    render(){
        return(
            <div className="row">
                <div className="col-md-10 ">
                    <HomeMap />
                </div>
                <div className="col-md-10 ">
                    <HomeDatos/>
                </div>
                <div className="col-md-4 ">
                    <HomeBotones />
                </div>
                <div className="col-md-8 ">
                    <HomeConsultas />
                </div>
            </div>
        );
    }
}

export default HomePage