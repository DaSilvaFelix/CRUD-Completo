import './src/asset/style/style.css';
import './src/asset/js/petición.js'
import { enviarTareas, traerTareas } from './src/asset/js/petición.js';
import { guardado } from './src/asset/js/guardarDatos.js';

document.querySelector('#app').innerHTML = `
        <h1>Gestor de Tareas</h1>
        <form id="task-form">
            <input type="text" id="task-name" placeholder="Nombre de la tarea">
            <textarea id="task-description" placeholder="Descripción de la tarea" rows="4"></textarea>
            <input type="checkbox" id="task-complete">
            <label for="task-complete">Completada</label>
            <button type="submit">Añadir Tarea</button>
        </form>
        <table>
            <thead>
                <tr>
                    <th>Nombre de la tarea</th>
                    <th>Descripción</th>
                    <th>Completada</th>
                </tr>
            </thead>
            <tbody id="task-table-body">
                <!-- Las tareas se agregarán aquí -->
            </tbody>
        </table>`
traerTareas();
guardado(document.getElementById('task-form'));

