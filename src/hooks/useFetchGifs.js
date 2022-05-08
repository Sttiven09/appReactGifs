import { useState, useEffect } from "react"
import { getGifs } from "../helpers(Funciones)/getGifs"

export const useFetchGifs = (categoria) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });


    useEffect(() => {
        //realizar peticion http 
        getGifs(categoria)
            .then(imgs => {
               
                

               //console.log(imgs);
                setState({
                    data:imgs,
                    loading:false
                });
           
        })
    }, [categoria])


    return state; //retorna el objeto state
}