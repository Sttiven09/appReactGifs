
//utilizar rafcp para crear componente con props

import React from 'react'
//import PropTypes from 'prop-types'
import { useState } from 'react';
import AgregarCategoria from './components/AgregarCategoria';
import GifRead from './components/GifRead';

const GifExpertApp = () => {
  
  //const categorias =['One Punch','Samurai','Dragon ball'];
  const [categorias, setCategorias] = useState(['One Punch']);

  //const agregarElemento = () => {
  //   setCategorias([...categorias, 'HomeroThonson']);
  //}

    return (
    <>
        <h2>GifExpertApp</h2>
        <AgregarCategoria setCategorias={ setCategorias } />  
        <hr/>

        
        <ol>
            {
                categorias.map( categoria => 
                //li key={categoria}> { categoria}</li>) reemplazamos por componente
                <GifRead 
                key={categoria}
                categoria={categoria}
                
                /> )
            }
        </ol>
        
    </>
  )
}



export default GifExpertApp;