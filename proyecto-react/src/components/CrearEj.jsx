import { useState } from "react";
import { useHistory } from "react-router";
import estilos from "../styles/CrearEj.module.css";

export function CrearEj(){
    const history = useHistory();
    const [radioSel, setRadioSel] = useState("0");
    const [menor0, setMenor0] = useState("");
    const [mayor0, setMayor0] = useState("");
    const [menor1, setMenor1] = useState("");
    const [mayor1, setMayor1] = useState("");
    const [menor2, setMenor2] = useState("");
    const [mayor2, setMayor2] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        let params;

        if(radioSel === "0"){
            params = new URLSearchParams({type: radioSel, menor: menor0, mayor: mayor0});
        } else if(radioSel === "1"){
            params = new URLSearchParams({type: radioSel, menor: menor1, mayor: mayor1});
        } else{
            params = new URLSearchParams({type: radioSel, menor: menor2, mayor: mayor2});
        }

        fetch("http://localhost:8080/Proyecto/ServletCrear?"+params).then( res => res.json() )
        .then( data => {
            history.push("/Proyecto/visualize?", data);
            //console.log(data);
        }).catch( error => {
            console.log(error);
        });
    };

    const handleReset = (e) =>{
        history.push("/Proyecto/home")
    };

    const handleChange = (e) => {
        setRadioSel(e.target.id);
    };

    return(
        <div className={estilos.contenedor}>
            <h1 className={estilos.titulo}>CALCULADORA DISTRIBUCIÓN NORMAL</h1>
            <p className={estilos.subtitulo}>Encuentra el área bajo la curva normal estándar (µ=0, σ=1)</p>
            <p>Usa la distribución normal estándar para encontrar una de las siguientes probabilidades:</p>

            <form className={estilos.form} onSubmit={handleSubmit} onReset={handleReset}>
                <p>
                    <input id="0" type="radio" onChange={handleChange} defaultChecked name="P"></input>
                    P( <input 
                            type="number" 
                            disabled={radioSel !== "0"} 
                            className={estilos.inputs}
                            value={menor0}
                            onChange={(e) => setMenor0(e.target.value)} 
                        />
                    &lt; Z &lt;
                    <input 
                        type="number" 
                        disabled={radioSel !== "0"} 
                        className={estilos.inputs}
                        value={mayor0}
                        onChange={(e) => setMayor0(e.target.value)}
                    /> )
                </p>

                <p>
                    <input id="1" type="radio" onChange={handleChange} name="P"></input>
                    P( Z &lt; <input 
                                    type="number" 
                                    disabled={radioSel !== "1"} 
                                    className={estilos.inputs}
                                    value={mayor1}
                                    onChange={(e) => {
                                        setMayor1(e.target.value)
                                        setMenor1(-9999)
                                    }}
                                /> )
                </p>

                <p>
                    <input id="2" type="radio" onChange={handleChange} name="P"></input>
                    P( Z &gt; <input 
                                type="number" 
                                disabled={radioSel !== "2"} 
                                className={estilos.inputs}
                                value={menor2}
                                onChange={(e) => {
                                    setMenor2(e.target.value)
                                    setMayor2(9999)
                                }}
                                /> )
                </p>

                <p>
                    <button className={estilos.boton} type="submit">Calcular</button> 
                    <button className={estilos.boton} type="reset">Cancelar</button>
                </p>
            </form>
        </div>
    );
}