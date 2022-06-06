import functionPlot from "function-plot";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { T0 } from "./Tipo0";
import { T1 } from "./Tipo1";
import { T2 } from "./Tipo2";

export function Ver(){
    const data = new URLSearchParams(useLocation().state);
    const e = {
        "type": data.get("type"),
        "menor": Number(data.get("menor")),
        "mayor": Number(data.get("mayor")),
        "resultado": Number(data.get("resultado")).toFixed(4)};
    
    let r = [e.menor, e.mayor];
    let d;

    if(e.type === "0"){
        d = [e.menor-4, e.mayor+4];
    }else if(e.type === "1"){
        d = [-10, e.mayor+4];
    }else{
        d = [e.menor-4, 10];
    }

    useEffect ( () => {
        functionPlot({
            target: "#Grafica",
            width: 700,
            height: 400,
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

    if(e.type === "0"){
        return <T0 ej={e}/>;
    } else if(e.type === "1"){
        return <T1 ej={e}/>;
    } else{
        return <T2 ej={e}/>;
    }
}