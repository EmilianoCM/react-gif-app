import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategoria = ( { setCategorias } ) => {
    
    //Estado del INPUT
    const [inputValue, setInputValue] = useState(''); // ''
    //Setear el valor del input
    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        // Para prevenir que el navegador haga un refresh
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            //El metodo recibe un callback que contiene el estado anterior y le agregamos el nuevo elemento del input.
            setCategorias( cats => [ inputValue, ...cats, ] );
            setInputValue('');
        }

    }

    return (
        < form onSubmit={ handleSubmit } >
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategoria.propType = {
    setCategorias: PropTypes.func.isRequired
}

