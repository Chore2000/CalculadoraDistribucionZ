import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import "../styles/Tabla.css";
import { useEffect, useState } from 'react';

export function Tabla(){
    const [ejercicios, setEjercicios] = useState([]);

    useEffect( () => {
        fetch('http://localhost:8080/Proyecto/ServletEjercicios?').then( res => res.json())
            .then( data => {
                setEjercicios(data);
            }).catch(error => {
                console.log(error);
        });
    }, [] );

    const handleOnClick = (e) =>{
        Swal.fire({
            title: '¿Estás seguro?',
            text: 'Esta acción no es reversible',
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'No',
            cancelButtonColor: 'red',
            confirmButtonText: 'Sí',
        }).then( (respuesta) => {
            if(respuesta.isConfirmed){
                const params = new URLSearchParams({id: e.target.id});

                fetch('http://localhost:8080/Proyecto/ServletBorrar?'+params).then( res => res.json())
                    .then( data => {
                        //console.log(data);
                        Swal.fire({
                            title: 'Eliminado',
                            text: 'El ejercicio ha sido eliminado',
                            icon: 'success'
                        })
                    }).catch(error => {
                        console.log(error);

                        Swal.fire({
                            title: 'ERROR',
                            text: 'El ejercicio no pudo ser eliminado',
                            icon: 'error'
                        })
                });
            }
        })
    };

    return(
        <div className="contenedor">
            <table>
                <tr>
                    <th className="celdasIzq">Ejercicio</th>
                    <th>Acciones</th>
                </tr>
                {
                    ejercicios.map(function(p) {
                        return(
                            <tr key={p.id}>
                                <td>Ejercicio {p.id}</td>
                                <td>
                                    <div className="contBotones">
                                        <Link to={{
                                            pathname: "/Proyecto/visualize",
                                            search: "?Ejercicio="+p.id,
                                            state: p
                                        }} className="link">Ver Ejercicio</Link> |

                                        <Link to={{
                                            pathname: "/Proyecto/edit",
                                            search: "?Ejercicio="+p.id,
                                            state: p
                                        }} className="link">Modificar Ejercicio</Link> |

                                        <Link to="/Proyecto/home" id={p.id} onClick={handleOnClick} className="link">Eliminar Ejercicio</Link> |
                                        <Link to={{
                                            pathname: "/Proyecto/test",
                                            search: "?Ejercicio="+p.id,
                                            state: p
                                        }} className="link">Probar Ejercicio</Link>
                                    </div>
                                </td>
                            </tr>
                        );
                    })
                }
            </table>
        </div>
    );
}