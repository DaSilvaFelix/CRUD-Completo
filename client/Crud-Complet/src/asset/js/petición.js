const API_Url = 'http://localhost:3000/tareas'

export const traerTareas = async ()=>{
    const extración = await fetch(API_Url);
    const datos = await extración.json();
    console.log(datos);
    
} 

export const enviarTareas = async (data)=>{
    const posteo = await fetch( API_Url , {method: 'POST',headers: {'Content-Type': 'application/json'},body: JSON.stringify({data})});
    const respuest  = await posteo.json();
    console.log(respuest);
    }
