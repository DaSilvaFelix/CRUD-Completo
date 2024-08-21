const API_Url = 'http://localhost:3000/tareas'

export const traerTareas = async ()=>{
    const extración = await fetch(API_Url);
    const datos = await extración.json();
    var tabla = document.getElementById('task-table-body');
    tabla.innerHTML = '';
    await datos.forEach(element => {
        tabla.innerHTML += `<tr>
        <td>${element.nombre}</td>
        <td>${element.descripción}</td>
        <td>${element.completadad ? 'Completado' : 'No Completado'}</td>
        <td><button>Eliminar</button><button>Actualizar</button></td>
                  </tr> `});
    };

export const enviarTareas = async (datosTareas)=>{
    const posteo = await fetch( API_Url , {method: 'POST',headers: {'Content-Type': 'application/json'}, body: JSON.stringify(datosTareas)});
    const respuest  = await posteo.json();
    console.log(respuest);
    }
