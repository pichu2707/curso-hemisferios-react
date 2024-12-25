import React from 'react';
import reactDom from 'react-dom';
import HemisphereDisplay from './HemisphereDisplay';

/**
 * Siempre tenemos que utilizar el setState para actualizar el estado de un componente
 */

class App extends React.Component {

    state= { latitude: null, //inicializamos la latitude en null
            errorMessage: ''}; //inicializamos el mensaje de error en vacio

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition( //obtenemos la posicion actual del usuario
            (position) => {
                this.setState({ latitude: position.coords.latitude }); //actualizamos la latitude con la latitude actual
            },
            (err) => {
                this.setState({errorMessage: 'Error: ' + err.message}); //actualizamos el mensaje de error con el mensaje de error
            }
        );
    }

    render() {

            if(this.state.errorMessage && !this.state.latitude){ //si hay un mensaje de error y no hay latitude
                return <div> Error: {this.state.errorMessage}</div>
            }

            if(!this.state.errorMessage && this.state.latitude){ //si no hay mensaje de error y hay latitude
                return <div> <HemisphereDisplay latitude={this.state.latitude}/> </div>
            }
            else{
                return <div>Cargando...</div>
            }
    }
}

reactDom.render(
    <App />,
    document.querySelector('#root')
)