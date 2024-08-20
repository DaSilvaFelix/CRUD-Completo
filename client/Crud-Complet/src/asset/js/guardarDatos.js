import { enviarTareas } from "./petición";

var datos = {
    nombre: "",
    descripción: "",
    completadad: null
}


export const guardado = (element)=>{
    element.addEventListener('submit',()=>{
        event.preventDefault()
        const nombre = document.getElementById('task-name');
        const description = document.getElementById('task-description');
        const isComplet = document.getElementById('task-complete');
        datos.completadad = isComplet.checked;
        datos.descripción = description.value;
        datos.nombre = nombre.value;
        console.log(datos);
        
    enviarTareas(datos);
    
        
    })
}