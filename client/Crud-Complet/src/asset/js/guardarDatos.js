var datos = {
    nombre: "",
    descripción: "",
    completadad: null
}


export const guardado = (element)=>{
    element.addEventListener('submit',()=>{
        const nombre = document.getElementById('task-name');
        const description = document.getElementById('task-description');
        const isComplet = document.getElementById('task-complete');
        datos.completadad = isComplet.value;
        datos.descripción = description.value;
        datos.nombre = nombre.value;
        return datos
    })
}