import { Link } from "react-router-dom";
import estilos from "../styles/Home.module.css";
import { Tabla } from "./Tabla";

export function Home(){
    return(
        <div>
            <div>
                <Link to="/Proyecto" className={estilos.links}>Salir de la aplicación web</Link>
                <h1 className={estilos.texto}>Bienvenido</h1>               
            </div>

            <div>
                <h1 className={`${estilos.texto} ${estilos.titulo}`}>CREAR, ALTAS, BAJAS Y CAMBIOS DE EJERCICIOS</h1>
                <Link to="/Proyecto/create" className={`${estilos.links} ${estilos.linkCrear}`}>Crear nuevo ejercicio</Link>
            </div>
            <br /><br />
                
            <Tabla />
        </div>
    );
}