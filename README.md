# Curso de React 18 desde 0 - MiDudev

## CLASE 1 === === === === === === === === === === === === === === === === === ===
   - ¿Qué es React? -> React es una biblioteca de JavaScript para construir interfaces de usuario. React es declarativo y basado en componentes.
   - React solo pueden renderizar un elemento, ¿Qué pasa si queremos renderizar mas de uno?, bueno podemos envolver los elementos a renderizar en uno solo, es decir, un div o fragment. 
      * Ejemplo 1 -> const caja = React.createElement("div",null,[Element1, Element2, Element3...])
      * Ejemplo 2 -> Sino queremos renderizar un div, react tiene un elemento propio para renderizar: const caja = React.createElement(React.fragment,null, [element1, element2, ..])

   *Página informativa: reactjs.wiki*
   - Empezar con react 
   import ReactDOM from "https://esm.sh/react-dom@18.2.0/client"
   const appDomElement = document.querySelector('#app');

   - Root es nuestro padre del arbol que vamos a ir creando dependiendo de nuestro contenido y componentes
   const root = ReactDOM.createRoot(appDomElement);
   root.render('Hola react');

   *Crear un elemento con react:*
   - const nombreElemento = React.createElement(1-Elemento a crear, 2-Objeto de atributos, 3-Contenido); Recibe 3 parametros

   ### JSX : Es una extension de EMASCRIPT para escribir nuestro codigo de react mas abreviado.
   - Expresiones JSX -> <h1>Hola {variable}</h1>;
   - {} Entre llaves, solo podemos poner expresiones que retorne algo.
     

   ### Componentes : Es crear una funcionalidad con atributos y contenidos, y poder reutilizarlo. Los componentes tienen que ser PascalCase, empezar con una mayuscula.


   ### PROPS: La base para que un componente sea reutilizable son las propiedades, las PROPS.
   - Cuando a una PROP no le asignamos un valor y queremos acceder, por defecto se asigna undefined
   - Podemos pasar funciones como PROPS, pero debemos pasarlo sin los parentesis, y dentro del componente hijo invocarlo
   - Las PROPS son inmutables, es decir, no podemos cambiar su valor 
   - Todo lo que se envuelve en un elemento se llaman children - Hijos(El contenido). Podemos envolver un texto(string), o elemento jsx. El children usar como contenido envuelto y no como PROP.
   - Valores por defecto de los parametros, es decir, asignarle un valor en las props.
   - Podemos pasar las props en un objeto y no por separado. ejemplo:
   const obj = {prop1 : contenido1, prop2: contenido2...}
   <Componente obj={...obj}> . TENER CUIDADO, NO SIEMPRE ES RECOMENDADO



   ### ESTADO - Hooks : Nos agrega utilidad para mejorar nuestra interfaz de usuario, son variables para poder darle vida a nuestro sitio.
   - useState -> nos permite guardar una variable

   *Programación Imperativo -> Es declara paso a paso OR instrucción a intrucción que debe realizar tal cosa*
   *Programación Declarativo -> Es simplemente declara escribir que quiero y no como lo quiero.*



