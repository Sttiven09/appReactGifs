import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types';

const AgregarCategoria = ( {setCategorias} ) => {
 
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
       setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
      e.preventDefault();
      if(inputValue.trim().length > 2){
      setCategorias(cats => [inputValue, ...cats ]);
      setInputValue('');
      }
    }
    
    return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Categoria</h2>  
      
      <input
        type="text"
        value={inputValue}
        onChange={ handleInputChange }
      />

      
    </form>
  )
}

AgregarCategoria.Prototype ={
  setCategorias: PropTypes.func.isRequired
}


export default AgregarCategoria;