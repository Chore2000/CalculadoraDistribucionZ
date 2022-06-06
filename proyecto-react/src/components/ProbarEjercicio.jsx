import functionPlot from "function-plot";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import estilos from "../styles/ProbarEjercicio.module.css";

export function Probar(){
    let P;
    const data = new URLSearchParams(useLocation().state);
    const [isCorrecto, setIsCorrecto] = useState(false);
    const [respuesta, setRespuesta] = useState("");
    const e = {
        "id": data.get("id"),
        "type": data.get("type"),
        "menor": Number(data.get("menor")),
        "mayor": Number(data.get("mayor")),
        "resultado": Number(data.get("resultado")).toFixed(4)};

    const handleOnClick = (ev) =>{
        (respuesta === e.resultado) ? setIsCorrecto(true) : setIsCorrecto(false)
    };


    let r = [e.menor, e.mayor];
    let d;

    if(e.type === "0"){
        d = [e.menor-4, e.mayor+4];
        P = "P( "+e.menor+" < Z < "+e.mayor+" )";
    }else if(e.type === "1"){
        d = [-10, e.mayor+4]
        P = "P( Z < "+e.mayor+" )";
    }else{
        d = [e.menor-4, 10]
        P = "P( Z > "+e.menor+" )";
    }

    useEffect ( () => {
        functionPlot({
            target: "#Grafica",
            xAxis: { domain: d },
            yAxis: { domain: [-.05, .5] },
            grid: true,
            disableZoom: true,
            data: [
              {
                fn: "(1/sqrt(2 * 3.1416))*exp(-(x^2)/4)",
                range: r,
                closed: true,
                skipTip: true
              }, {
                  fn: "(1/sqrt(2 * 3.1416))*exp(-(x^2)/4)",
                  color: 'black',
                  skipTip: true
              }
            ]
        })
    } );


    return(
        <div className={estilos.contenedor}>
            <Link className={estilos.botonV} to="/Proyecto/home">Volver</Link>

            <div className={estilos.titulo}>
                <h1>EJERCICIO {e.id}</h1>
            </div>
            
            <div className={estilos.ejercicio}>
                <h1>{P}</h1>

                <p>TU RESPUESTA: </p>
                <input
                    type="number" 
                    className={estilos.input}
                    value = {respuesta}
                    onChange = {(e) => setRespuesta(e.target.value)}
                    onWheel = {(e) => e.target.blur()}
                /> <br /><br />
                <button className={estilos.boton} onClick={handleOnClick}>EVALUAR</button>
                <p className={estilos.graf} id="Grafica"></p>
            </div>

            <div>
                <p className={estilos.prueba}>RESULTADO: {isCorrecto ? 'Correcto' : 'Incorrecto'}</p>
            </div>
        </div>
    );
}