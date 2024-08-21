import { enviarTareas, traerTareas } from "./petición";

var datos = {
    nombre: "",
    descripción: "",
    completadad: null
}


export const guardado = (element)=>{
    element.addEventListener('submit',async ()=>{
        event.preventDefault()
        const nombre = document.getElementById('task-name');
        const description = document.getElementById('task-description');
        const isComplet = document.getElementById('task-complete');
        datos.completadad = isComplet.checked;
        datos.descripción = description.value;
        datos.nombre = nombre.value;
        await enviarTareas(datos);
        traerTareas()
    
        
    })
}