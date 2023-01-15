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
