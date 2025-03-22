# Notes

Holt's notes: https://react-v9.holt.courses/lessons/no-frills-react/react-without-a-build-step

Serve is a quick way to run localhost, which have been developed by Vercel

React package is the universal package for all react tools

React DOM is the package that is related to the DOM visualization for browsers

Handle Font Ligatures https://worldofzero.com/posts/enable-font-ligatures-vscode/

npm registry is owned by github and which is then owned by microsoft

oxlint and biome -> alternative to eslint

./eslint.config.mjs
prettier config should be the last as it doesn't add anything new, but has rules just to format the document

npm run lint -- --fix
npm run lint -- --debug
-- in the between is required to let it know that it is to be applied to lint script

debugger

roll-up is the bundler
v test
rolldown is also a bundler
one can read about webpacka and parcel

Concept of export default and const
import React from "react"; -> Default import
import { createRoot } from "react-dom"; -> Named import

Deploying -> Vercel, Netlify, Fly

5173 - Vite

example of both jsx component and js component:

// const Pizza = (props) => {
// return React.createElement("div", {}, [
// React.createElement("h1", {}, props.name),
// React.createElement("p", {}, props.description),
// ]);
// };

const Pizza = (props) => {
return (

<div className="pizza">
<h1>{props.name}</h1>
<p>{props.description}</p>
</div>
);
};

export default Pizza;

import React from "react"; -> this import was required earlier for transpiling JSX

Every component in JS framework are to be closed

rules: {
"react/no-unescaped-entities": "off", // ' &apos
"react/prop-types": "off",
},

Element Tag in JSX:
Smallcase element tag are considered to be rendered directly
Uppercase element tag are considered to be Functions/Components (Synthetic Component)

To avoid cors:
server: {
proxy: {
"/api": {
target: "http://localhost:3000",
changeOrigin: true,
},
"/public": {
target: "http://localhost:3000",
changeOrigin: true,
},
},
},

Arrow functions creates anonymous functions, where
as Function declaration creates named functions

Two-way data binding is not free in React,
Angular 1 was a big two-way data binding framework

Solid.js
PreAct

Anything that starts with use, is a hook.
Hook should never be called conditionally, as hooks depends on being called in the same order, which would be disrupted when calling them conditionally
Hooks are also not called inside loops, they are always top level

Vue has a concept of derivative state,
similarly does Svelte,
But in react we keep track of them using variables

useEffect cannot be async, as async function returns promise, and in case of useEffect return type matters, what we can do is create an async function and call that function in useEffect
