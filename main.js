

import {articulos} from './src/assets/js/array-articulos.js';

const ultimosEstrenos = document.querySelector('.container');
    


articulos.forEach((item, index) => {
    if(index <18){        
        const imagen = document.createElement('img');
        const enlace = document.createElement('a');
        enlace.setAttribute('href', './info.html');
        imagen.setAttribute('src', item.imgMini);

        // evento para mostrar la informacion de la pelicula
        // imagen.addEventListener('click', () =>{
            
        //     window.location = './info.html';


        // })
        ultimosEstrenos.appendChild(enlace); 
        enlace.appendChild(imagen)
    }
})

export default {
    name: articulos[0].nombre,

}


