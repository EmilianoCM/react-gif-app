import React, { useState } from 'react'
import {AddCategoria} from './components/AddCategoria';
import {GifGrid} from './components/GifGrid';

 export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['One Punch']);

    return (
        <>
            <h2>Altos Gifs!</h2>
            {/* Le pasamos la propiedad setCategoria y la referencia */}
            <AddCategoria setCategorias={ setCategorias }/> 
            <hr/>
          
            <ol>
                { 
                  categorias.map( categoria =>(
                    <GifGrid 
                        key={categoria}
                        categoria={categoria}
                    />
                  ))
                }
            </ol>
        </>
    );
}




//Agregar un elemento a un arreglo
// setElemento([...arreglo, nuevoElemento]);
// setElemento(arreglo => [...arreglo, nuevoElemento]);