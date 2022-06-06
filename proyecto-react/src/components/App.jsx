import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { Login } from "./Login";
import { Home } from "./Home";
import { NoUser } from "./NoUser";
import { Probar } from "./ProbarEjercicio";
import { Invalido } from "./404";
import { CrearEj } from "./CrearEj";
import { Ver } from "./Visualizar";
import { EditarEj } from "./EditarEj";

export function App(){
    return(
        <Router>
            <div>
                <Switch>
                    <Route exact path="/Proyecto">
                        <Login />
                    </Route>
                    <Route path="/Proyecto/home">
                        <Home />
                    </Route>
                    <Route path="/Proyecto/not-found">
                        <NoUser />
                    </Route>
                    <Route path="/Proyecto/create">
                        <CrearEj />
                    </Route>
                    <Route path="/Proyecto/visualize">
                        <Ver />
                    </Route>
                    <Route path="/Proyecto/edit">
                        <EditarEj />
                    </Route>
                    <Route path="/Proyecto/test">
                        <Probar />
                    </Route>
                    <Route path="*">
                        <Invalido />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}