(this["webpackJsonpproyecto-react"]=this["webpackJsonpproyecto-react"]||[]).push([[0],{134:function(e,t,a){},175:function(e,t,a){},178:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(112),r=a.n(n),s=a(6),o=a(4),i=a(2),l=a(44),j=a.n(l),b=a(0);function u(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),s=Object(i.a)(r,2),l=s[0],u=s[1],d=Object(c.useState)(""),m=Object(i.a)(d,2),h=m[0],O=m[1],x=Object(o.f)();Object(c.useEffect)((function(){var e=new URLSearchParams({user:a,pass:l});fetch("http://localhost:8080/Proyecto/ServletLogin?"+e).then((function(e){return e.json()})).then((function(e){O(e.usuario)})).catch((function(e){console.log(e)}))}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{className:j.a.texto,children:"Login"}),Object(b.jsx)("div",{className:j.a.formcontenedor,children:Object(b.jsxs)("form",{onSubmit:function(e){null!==h&&" "!==h?x.push("/home"):x.push("/not-found")},children:["ID:",Object(b.jsx)("input",{name:"user",className:j.a.formInput,type:"text",value:a,onChange:function(e){return n(e.target.value)}}),Object(b.jsx)("br",{}),"Password:",Object(b.jsx)("input",{name:"pass",className:j.a.formInput,type:"password",value:l,onChange:function(e){return u(e.target.value)}}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{className:j.a.formBoton,type:"submit",children:"Submit"})]})})]})}var d=a(32),m=a.n(d),h=a(65),O=a.n(h);a(134);function x(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1];Object(c.useEffect)((function(){fetch("http://localhost:8080/Proyecto/ServletEjercicios?").then((function(e){return e.json()})).then((function(e){n(e)})).catch((function(e){console.log(e)}))}),[]);var r=function(e){O.a.fire({title:"\xbfEst\xe1s seguro?",text:"Esta acci\xf3n no es reversible",icon:"warning",showCancelButton:!0,cancelButtonText:"No",cancelButtonColor:"red",confirmButtonText:"S\xed"}).then((function(t){if(t.isConfirmed){var a=new URLSearchParams({id:e.target.id});fetch("http://localhost:8080/Proyecto/ServletBorrar?"+a).then((function(e){return e.json()})).then((function(e){O.a.fire({title:"Eliminado",text:"El ejercicio ha sido eliminado",icon:"success"})})).catch((function(e){console.log(e),O.a.fire({title:"ERROR",text:"El ejercicio no pudo ser eliminado",icon:"error"})}))}}))};return Object(b.jsx)("div",{className:"contenedor",children:Object(b.jsxs)("table",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{className:"celdasIzq",children:"Ejercicio"}),Object(b.jsx)("th",{children:"Acciones"})]}),a.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsxs)("td",{children:["Ejercicio ",e.id]}),Object(b.jsx)("td",{children:Object(b.jsxs)("div",{className:"contBotones",children:[Object(b.jsx)(s.b,{to:{pathname:"/visualize",search:"?Ejercicio="+e.id,state:e},className:"link",children:"Ver Ejercicio"})," |",Object(b.jsx)(s.b,{to:{pathname:"/edit",search:"?Ejercicio="+e.id,state:e},className:"link",children:"Modificar Ejercicio"})," |",Object(b.jsx)(s.b,{to:"/home",id:e.id,onClick:r,className:"link",children:"Eliminar Ejercicio"})," |",Object(b.jsx)(s.b,{to:{pathname:"/test",search:"?Ejercicio="+e.id,state:e},className:"link",children:"Probar Ejercicio"})]})})]},e.id)}))]})})}function p(){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)(s.b,{to:"/",className:m.a.links,children:"Salir de la aplicaci\xf3n web"}),Object(b.jsx)("h1",{className:m.a.texto,children:"Bienvenido"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{className:"".concat(m.a.texto," ").concat(m.a.titulo),children:"CREAR, ALTAS, BAJAS Y CAMBIOS DE EJERCICIOS"}),Object(b.jsx)(s.b,{to:"/create",className:"".concat(m.a.links," ").concat(m.a.linkCrear),children:"Crear nuevo ejercicio"})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)(x,{})]})}var f=a(80),v=a.n(f);function _(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("br",{}),Object(b.jsx)("h1",{className:v.a.texto,children:"USUARIO NO REGISTRADO EN LA APLICACI\xd3N WEB"}),Object(b.jsx)(s.b,{to:"/",className:v.a.links,children:"Regresar al Login para volver a intentarlo."})]})}var g=a(62),N=a.n(g),y=a(23),P=a.n(y);function E(){var e,t,a=new URLSearchParams(Object(o.g)().state),n=Object(c.useState)(!1),r=Object(i.a)(n,2),l=r[0],j=r[1],u=Object(c.useState)(""),d=Object(i.a)(u,2),m=d[0],h=d[1],O={id:a.get("id"),type:a.get("type"),menor:Number(a.get("menor")),mayor:Number(a.get("mayor")),resultado:Number(a.get("resultado")).toFixed(4)},x=[O.menor,O.mayor];return"0"===O.type?(t=[O.menor-4,O.mayor+4],e="P( "+O.menor+" < Z < "+O.mayor+" )"):"1"===O.type?(t=[-10,O.mayor+4],e="P( Z < "+O.mayor+" )"):(t=[O.menor-4,10],e="P( Z > "+O.menor+" )"),Object(c.useEffect)((function(){N()({target:"#Grafica",xAxis:{domain:t},yAxis:{domain:[-.05,.5]},grid:!0,disableZoom:!0,data:[{fn:"(1/sqrt(2 * 3.1416))*exp(-(x^2)/4)",range:x,closed:!0,skipTip:!0},{fn:"(1/sqrt(2 * 3.1416))*exp(-(x^2)/4)",color:"black",skipTip:!0}]})})),Object(b.jsxs)("div",{className:P.a.contenedor,children:[Object(b.jsx)(s.b,{className:P.a.botonV,to:"/home",children:"Volver"}),Object(b.jsx)("div",{className:P.a.titulo,children:Object(b.jsxs)("h1",{children:["EJERCICIO ",O.id]})}),Object(b.jsxs)("div",{className:P.a.ejercicio,children:[Object(b.jsx)("h1",{children:e}),Object(b.jsx)("p",{children:"TU RESPUESTA: "}),Object(b.jsx)("input",{type:"number",className:P.a.input,value:m,onChange:function(e){return h(e.target.value)},onWheel:function(e){return e.target.blur()}})," ",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{className:P.a.boton,onClick:function(e){j(m===O.resultado)},children:"EVALUAR"}),Object(b.jsx)("p",{className:P.a.graf,id:"Grafica"})]}),Object(b.jsx)("div",{children:Object(b.jsxs)("p",{className:P.a.prueba,children:["RESULTADO: ",l?"Correcto":"Incorrecto"]})})]})}function C(){return Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"ERROR. RECURSO NO ENCONTRADO"})})}var S=a(8),Z=a.n(S);function R(){var e=Object(o.f)(),t=Object(c.useState)("0"),a=Object(i.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(""),l=Object(i.a)(s,2),j=l[0],u=l[1],d=Object(c.useState)(""),m=Object(i.a)(d,2),h=m[0],O=m[1],x=Object(c.useState)(""),p=Object(i.a)(x,2),f=p[0],v=p[1],_=Object(c.useState)(""),g=Object(i.a)(_,2),N=g[0],y=g[1],P=Object(c.useState)(""),E=Object(i.a)(P,2),C=E[0],S=E[1],R=Object(c.useState)(""),A=Object(i.a)(R,2),k=A[0],L=A[1],U=function(e){r(e.target.id)};return Object(b.jsxs)("div",{className:Z.a.contenedor,children:[Object(b.jsx)("h1",{className:Z.a.titulo,children:"CALCULADORA DISTRIBUCI\xd3N NORMAL"}),Object(b.jsx)("p",{className:Z.a.subtitulo,children:"Encuentra el \xe1rea bajo la curva normal est\xe1ndar (\xb5=0, \u03c3=1)"}),Object(b.jsx)("p",{children:"Usa la distribuci\xf3n normal est\xe1ndar para encontrar una de las siguientes probabilidades:"}),Object(b.jsxs)("form",{className:Z.a.form,onSubmit:function(t){var a;t.preventDefault(),a="0"===n?new URLSearchParams({type:n,menor:j,mayor:h}):"1"===n?new URLSearchParams({type:n,menor:f,mayor:N}):new URLSearchParams({type:n,menor:C,mayor:k}),fetch("http://localhost:8080/Proyecto/ServletCrear?"+a).then((function(e){return e.json()})).then((function(t){e.push("/visualize?",t)})).catch((function(e){console.log(e)}))},onReset:function(t){e.push("/home")},children:[Object(b.jsxs)("p",{children:[Object(b.jsx)("input",{id:"0",type:"radio",onChange:U,defaultChecked:!0,name:"P"}),"P( ",Object(b.jsx)("input",{type:"number",disabled:"0"!==n,className:Z.a.inputs,value:j,onChange:function(e){return u(e.target.value)}}),"< Z <",Object(b.jsx)("input",{type:"number",disabled:"0"!==n,className:Z.a.inputs,value:h,onChange:function(e){return O(e.target.value)}})," )"]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("input",{id:"1",type:"radio",onChange:U,name:"P"}),"P( Z < ",Object(b.jsx)("input",{type:"number",disabled:"1"!==n,className:Z.a.inputs,value:N,onChange:function(e){y(e.target.value),v(-9999)}})," )"]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("input",{id:"2",type:"radio",onChange:U,name:"P"}),"P( Z > ",Object(b.jsx)("input",{type:"number",disabled:"2"!==n,className:Z.a.inputs,value:C,onChange:function(e){S(e.target.value),L(9999)}})," )"]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("button",{className:Z.a.boton,type:"submit",children:"Calcular"}),Object(b.jsx)("button",{className:Z.a.boton,type:"reset",children:"Cancelar"})]})]})]})}var A=a(7),k=a.n(A),L=a.p+"static/media/Positiva.e916c06f.jpg",U=a.p+"static/media/Negativa.8cdf4d0e.jpg";function T(e){var t,a,n=e.ej,r=Object(c.useState)(!0),o=Object(i.a)(r,2),l=o[0],j=o[1],u=Object(c.useState)(!0),d=Object(i.a)(u,2),m=d[0],h=d[1];t=n.menor<0?U:L,a=n.mayor<0?U:L;var O=function(e){"Mayor"===e.target.id?h(!m):j(!l)};return Object(b.jsxs)("div",{className:k.a.contenedor,children:[Object(b.jsx)(s.b,{className:k.a.boton,to:"/home",children:"Volver"}),Object(b.jsx)("h4",{children:"Resultado: "}),Object(b.jsxs)("p",{className:k.a.resultados,children:["P( ",n.menor," < Z < ",n.mayor," ) = ",n.resultado]}),Object(b.jsx)("h4",{children:"Explicaci\xf3n: "}),Object(b.jsxs)("ol",{className:k.a.lista,children:[Object(b.jsxs)("li",{children:["Dibujar la curva. La probabilidad de ",n.menor," < Z < ",n.mayor," es igual al \xe1rea sombreada bajo la curva",Object(b.jsx)("p",{className:k.a.graf,id:"Grafica"})]}),Object(b.jsxs)("li",{children:["Para hallar la probabilidad de P( ",n.menor," < Z < ",n.mayor," ) us\xe1mos la siguiente f\xf3rmula:",Object(b.jsxs)("p",{children:["P( ",n.menor," < Z < ",n.mayor," ) = P( Z < ",n.mayor," ) - P( Z < ",n.menor," )"]})]}),Object(b.jsxs)("li",{children:["Podemos encontrar P( Z < ",n.mayor," ) usando una tabla de distribuciones normales est\xe1ndar: \xa0",Object(b.jsx)("button",{id:"Mayor",onClick:O,children:"Mostrar Tabla"}),Object(b.jsx)("div",{hidden:m,children:Object(b.jsx)("img",{src:a,alt:"Tabla de valores Z",className:k.a.tablasZ})})]}),Object(b.jsxs)("li",{children:["Podemos encontrar P( Z < ",n.menor," ) usando una tabla de distribuciones normales est\xe1ndar: \xa0",Object(b.jsx)("button",{id:"Menor",onClick:O,children:"Mostrar Tabla"}),Object(b.jsx)("div",{hidden:l,children:Object(b.jsx)("img",{src:t,alt:"Tabla de valores Z",className:k.a.tablasZ})})]})]}),Object(b.jsxs)("p",{children:["Al final tenemos que P( ",n.menor," < Z < ",n.mayor," ) = ",n.resultado]})]})}function I(e){var t,a=e.ej,n=Object(c.useState)(!0),r=Object(i.a)(n,2),o=r[0],l=r[1];return t=a.mayor<0?U:L,Object(b.jsxs)("div",{className:k.a.contenedor,children:[Object(b.jsx)(s.b,{className:k.a.boton,to:"/home",children:"Volver"}),Object(b.jsx)("h4",{children:"Resultado: "}),Object(b.jsxs)("p",{className:k.a.resultados,children:["P( Z < ",a.mayor," ) = ",a.resultado]}),Object(b.jsx)("h4",{children:"Explicaci\xf3n: "}),Object(b.jsxs)("ol",{className:k.a.lista,children:[Object(b.jsxs)("li",{children:["Dibujar la curva. La probabilidad de Z < ",a.mayor," es igual al \xe1rea sombreada bajo la curva",Object(b.jsx)("p",{className:k.a.graf,id:"Grafica"})]}),Object(b.jsxs)("li",{children:["Podemos encontrar P( Z < ",a.mayor," ) usando una tabla de distribuciones normales est\xe1ndar: \xa0",Object(b.jsx)("button",{onClick:function(e){l(!o)},children:"Mostar Tabla"}),Object(b.jsx)("div",{hidden:o,children:Object(b.jsx)("img",{src:t,alt:"Tabla de valores Z",className:k.a.tablasZ})})]})]}),Object(b.jsxs)("p",{children:["Al final tenemos que P( Z < ",a.mayor," ) = ",a.resultado]})]})}function B(e){var t,a=e.ej,n=Object(c.useState)(!0),r=Object(i.a)(n,2),o=r[0],l=r[1];return t=a.menor<0?U:L,Object(b.jsxs)("div",{className:k.a.contenedor,children:[Object(b.jsx)(s.b,{className:k.a.boton,to:"/home",children:"Volver"}),Object(b.jsx)("h4",{children:"Resultado: "}),Object(b.jsxs)("p",{className:k.a.resultados,children:["P( Z > ",a.menor," ) = 1 - P( Z < ",a.menor," ) = ",a.resultado]}),Object(b.jsx)("h4",{children:"Explicaci\xf3n: "}),Object(b.jsxs)("ol",{className:k.a.lista,children:[Object(b.jsxs)("li",{children:["Dibujar la curva. La probabilidad de Z > ",a.menor," es igual al \xe1rea sombreada bajo la curva",Object(b.jsx)("p",{className:k.a.graf,id:"Grafica"})]}),Object(b.jsxs)("li",{children:["Para hallar la probabilidad de P( Z > ",a.menor," ) debemos encontrar primero P( Z < ",a.menor," ) que es la parte blanca debajo de la curva."]}),Object(b.jsxs)("li",{children:["Podemos encontrar P( Z < ",a.menor," ) usando una tabla de distribuciones normales est\xe1ndar: \xa0",Object(b.jsx)("button",{onClick:function(e){l(!o)},children:"Mostrar Tabla"}),Object(b.jsx)("div",{hidden:o,children:Object(b.jsx)("img",{src:t,alt:"Tabla de valores Z",className:k.a.tablasZ})})]}),Object(b.jsxs)("li",{children:["Una vez calculada el area blanca, resolvemos 1 - P( Z < ",a.menor," )"]})]}),Object(b.jsxs)("p",{children:["Al final tenemos que P( Z > ",a.menor," ) = 1 - P( Z < ",a.menor," ) = ",a.resultado]})]})}function w(){var e,t=new URLSearchParams(Object(o.g)().state),a={type:t.get("type"),menor:Number(t.get("menor")),mayor:Number(t.get("mayor")),resultado:Number(t.get("resultado")).toFixed(4)},n=[a.menor,a.mayor];return e="0"===a.type?[a.menor-4,a.mayor+4]:"1"===a.type?[-10,a.mayor+4]:[a.menor-4,10],Object(c.useEffect)((function(){N()({target:"#Grafica",width:700,height:400,xAxis:{domain:e},yAxis:{domain:[-.05,.5]},grid:!0,disableZoom:!0,data:[{fn:"(1/sqrt(2 * 3.1416))*exp(-(x^2)/4)",range:n,closed:!0,skipTip:!0},{fn:"(1/sqrt(2 * 3.1416))*exp(-(x^2)/4)",color:"black",skipTip:!0}]})})),"0"===a.type?Object(b.jsx)(T,{ej:a}):"1"===a.type?Object(b.jsx)(I,{ej:a}):Object(b.jsx)(B,{ej:a})}function D(){var e=Object(o.f)(),t=new URLSearchParams(Object(o.g)().search).get("Ejercicio"),a=Object(c.useState)("0"),n=Object(i.a)(a,2),r=n[0],s=n[1],l=Object(c.useState)(""),j=Object(i.a)(l,2),u=j[0],d=j[1],m=Object(c.useState)(""),h=Object(i.a)(m,2),O=h[0],x=h[1],p=Object(c.useState)(""),f=Object(i.a)(p,2),v=f[0],_=f[1],g=Object(c.useState)(""),N=Object(i.a)(g,2),y=N[0],P=N[1],E=Object(c.useState)(""),C=Object(i.a)(E,2),S=C[0],R=C[1],A=Object(c.useState)(""),k=Object(i.a)(A,2),L=k[0],U=k[1],T=function(e){s(e.target.id)};return Object(b.jsxs)("div",{className:Z.a.contenedor,children:[Object(b.jsx)("h1",{className:Z.a.titulo,children:"CALCULADORA DISTRIBUCI\xd3N NORMAL"}),Object(b.jsx)("p",{className:Z.a.subtitulo,children:"Encuentra el \xe1rea bajo la curva normal est\xe1ndar (\xb5=0, \u03c3=1)"}),Object(b.jsx)("p",{children:"Usa la distribuci\xf3n normal est\xe1ndar para encontrar una de las siguientes probabilidades:"}),Object(b.jsxs)("form",{className:Z.a.form,onSubmit:function(a){var c;a.preventDefault(),c="0"===r?new URLSearchParams({id:t,type:r,menor:u,mayor:O}):"1"===r?new URLSearchParams({id:t,type:r,menor:v,mayor:y}):new URLSearchParams({id:t,type:r,menor:S,mayor:L}),fetch("http://localhost:8080/Proyecto/ServletEditar?"+c).then((function(e){return e.json()})).then((function(t){e.push("/visualize?",t)})).catch((function(e){console.log(e)}))},onReset:function(t){e.push("/home")},children:[Object(b.jsxs)("p",{children:[Object(b.jsx)("input",{id:"0",type:"radio",defaultChecked:!0,onChange:T,name:"P"}),"P( ",Object(b.jsx)("input",{type:"number",disabled:"0"!==r,className:Z.a.inputs,value:u,onChange:function(e){return d(e.target.value)}}),"< Z <",Object(b.jsx)("input",{type:"number",disabled:"0"!==r,className:Z.a.inputs,value:O,onChange:function(e){return x(e.target.value)}})," )"]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("input",{id:"1",type:"radio",onChange:T,name:"P"}),"P( Z < ",Object(b.jsx)("input",{type:"number",disabled:"1"!==r,className:Z.a.inputs,value:y,onChange:function(e){P(e.target.value),_(-9999)}})," )"]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("input",{id:"2",type:"radio",onChange:T,name:"P"}),"P( Z > ",Object(b.jsx)("input",{type:"number",disabled:"2"!==r,className:Z.a.inputs,value:S,onChange:function(e){R(e.target.value),U(9999)}})," )"]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("button",{className:Z.a.boton,type:"submit",children:"Calcular"}),Object(b.jsx)("button",{className:Z.a.boton,type:"reset",children:"Cancelar"})]})]})]})}function V(){return Object(b.jsx)(s.a,{children:Object(b.jsx)("div",{children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/",children:Object(b.jsx)(u,{})}),Object(b.jsx)(o.a,{path:"/home",children:Object(b.jsx)(p,{})}),Object(b.jsx)(o.a,{path:"/not-found",children:Object(b.jsx)(_,{})}),Object(b.jsx)(o.a,{path:"/create",children:Object(b.jsx)(R,{})}),Object(b.jsx)(o.a,{path:"/visualize",children:Object(b.jsx)(w,{})}),Object(b.jsx)(o.a,{path:"/edit",children:Object(b.jsx)(D,{})}),Object(b.jsx)(o.a,{path:"/test",children:Object(b.jsx)(E,{})}),Object(b.jsx)(o.a,{path:"*",children:Object(b.jsx)(C,{})})]})})})}a(175);r.a.render(Object(b.jsx)(V,{}),document.getElementById("root"))},23:function(e,t,a){e.exports={contenedor:"ProbarEjercicio_contenedor__3SX6l",titulo:"ProbarEjercicio_titulo__2WBTH",ejercicio:"ProbarEjercicio_ejercicio__1nlHr",boton:"ProbarEjercicio_boton__3Yq3U",prueba:"ProbarEjercicio_prueba__3SAOd",botonV:"ProbarEjercicio_botonV__1bQAM",input:"ProbarEjercicio_input__3xPks",inputs:"ProbarEjercicio_inputs__1bFV1",graf:"ProbarEjercicio_graf__1_bAz"}},32:function(e,t,a){e.exports={texto:"Home_texto__2-DC7",titulo:"Home_titulo__3FBgC",links:"Home_links__1HkiT",linkCrear:"Home_linkCrear__3q5tP"}},44:function(e,t,a){e.exports={texto:"Login_texto__3P8vU",formcontenedor:"Login_formcontenedor__3WrGY",formInput:"Login_formInput__T2vn1",formBoton:"Login_formBoton__2RExf"}},7:function(e,t,a){e.exports={contenedor:"Visualizar_contenedor__ueti9",resultados:"Visualizar_resultados__3gkY8",lista:"Visualizar_lista__T9Q4v",graf:"Visualizar_graf__3ntZO",boton:"Visualizar_boton__3iFSb",tablasZ:"Visualizar_tablasZ__1ml5i"}},8:function(e,t,a){e.exports={contenedor:"CrearEj_contenedor__1aGk7",titulo:"CrearEj_titulo__2ne8I",subtitulo:"CrearEj_subtitulo__1gQEn",form:"CrearEj_form__xQy43",inputs:"CrearEj_inputs__27NYs",boton:"CrearEj_boton__2xPBc"}},80:function(e,t,a){e.exports={texto:"NoUser_texto__2EJLB",links:"NoUser_links__qGDJc"}}},[[178,1,2]]]);
//# sourceMappingURL=main.ffdef8cf.chunk.js.map