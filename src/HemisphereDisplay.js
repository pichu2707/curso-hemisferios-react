import React from 'react';
import northernpic from './image/hemisferio-norte.jpg'; //llamamos a la imagen de hemisferio norte en la carpeta image
import southernpic from './image/hemisferio-sur.jpg'; //llamamos a la imagen de hemisferio sur en la carpeta image
import './hemisphere.css'; //llamamos al archivo css

const hemisphereConfig = {
    northern: {
        text: 'Hemisferio Norte',
        picture: northernpic
    },
    southern: {
        text: 'Hemisferio Sur',
        picture: southernpic
    }
}

const HemisphereDisplay = ({latitude}) => { //recibimos la latitude no usamos el porps porque solo recibimos un parametro
    const hemisphere = latitude > 0 ? 'northern' : 'southern'; //si la latitude es mayor a 0 es hemisferio norte de lo contrario es hemisferio sur
    const {text, picture} = hemisphereConfig[hemisphere]; //usamos la destructuracion para obtener el texto y la imagen del hemisferio
    return(

        <div className={hemisphere}>
            <div className='ui raised text container segment'>
                <div className='image'>
                    <img src={picture} alt="Imagen del hemisferio"/>
                </div>
                <div className='ui teal bottom attached label'>
                    <h1>{text}</h1>
                </div>
            </div>
        </div>
    )
}

export default HemisphereDisplay;