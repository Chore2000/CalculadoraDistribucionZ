import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import estilos from "../styles/Login.module.css";

export function Login(){
    const [ID, setID] = useState("");
    const [Pass, setPass] = useState("");
    const [User, setUser] = useState("");
    const history = useHistory();

    useEffect( () => {
        const params = new URLSearchParams({user: ID, pass: Pass});

        fetch('http://localhost:8080/Proyecto/ServletLogin?'+params).then( res => res.json())
            .then( data => {
                setUser(data.usuario);
                //console.log(User);
            }).catch(error => {
                console.log(error);
        });
    } );


    const handleSubmit = (e) =>{
        (User !== null && User!==" ") ? history.push("/Proyecto/home") : history.push("/Proyecto/not-found")
    };

    return (
        <div>
            <h1 className={estilos.texto}>Login</h1>
            <div className={estilos.formcontenedor}>
                <form onSubmit={handleSubmit}>
                    ID: 
                    <input 
                        name="user"
                        className={estilos.formInput} 
                        type="text"
                        value={ID}
                        onChange={(e) => setID(e.target.value)}
                    />
                    <br/>
                    Password: 
                    <input
                        name="pass"
                        className={estilos.formInput} 
                        type="password"
                        value={Pass}
                        onChange={(e) => setPass(e.target.value)}
                    />
                    <br />
                    <button className={estilos.formBoton} type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}