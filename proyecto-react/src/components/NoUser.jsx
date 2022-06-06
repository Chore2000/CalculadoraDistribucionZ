import { Link } from "react-router-dom";
import estilos from "../styles/NoUser.module.css";

export function NoUser(){
    return(
        <div>
            <br />
            <h1 className={estilos.texto}>USUARIO NO REGISTRADO EN LA APLICACIÓN WEB</h1>
            <Link to="/Proyecto" className={estilos.links}>Regresar al Login para volver a intentarlo.</Link>
        </div>
    );
}