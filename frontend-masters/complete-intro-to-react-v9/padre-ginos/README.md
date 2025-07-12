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
-- in the between is required to let it know that it is to be applied to lint script - thi s is now not required in newer versions of eslint

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

Dependency array is important in useEffect

Importance of key is that it allows react to understand that a certain component is only updated and not the whole whole component

Why using index is not okay as for in case of key:
As the array of objects being mapped, are not linked to indices/index so even if the change is actual made to the order of the component it doesnot seems to be happening in view of React

NODE_ENV is automatically set by Vite,Next and Remix, where as in case of webpack one have to set them manually

Slack moved with Production deployment with NODE_ENV as development, which reduced performance, but once the NODE_ENV was set as production, there was a huge upside to performance

StrictMode helps with things that are going to be deprecated from React, hence letting developer know to be updated
Further it continually double-renders your components and will run effects twice as to catch subtle bugs where our app is should be change between renders when it's not meant to.

Get React Developer Tools via https://react.dev/learn/react-developer-tools
This is useful to check the components, props passed to it, and the states, effects utilized within the component, and lets you update then

$r -> When typed in console helps in seeing which component has been selected in React Component Developer Tools

$0 -> When typed in console helps in seeing which component/tag has been selected last in Inspector

Profiler helps in checking the performance of the react application

Work on React Performance -> https://frontendmasters.com/courses/react-performance/

If same logic has to be used at multiple components we use custom hooks, rather than useState/useEffect in each component. i.e. Custom Hooks encapsulated useState and useEffect

Custom hooks is a function that calls other functions

Any logic shouldn't be written in jsx/tsx, rather write them into hooks files

First render of the components are done before running of the effects for the first time

Early Return Pattern:
const pizzaOfTheDay = usePizzaOfTheDay();

if (!pizzaOfTheDay) {
return <div>Loading...</div>;
}

return (

<div className="pizza-of-the-day">
<h2>Pizza of the Day</h2>
<div>
<div className="pizza-of-the-day-info">
<h3>{pizzaOfTheDay.name}</h3>
<p>{pizzaOfTheDay.description}</p>
<p className="pizza-of-the-day-price">
From: {intl.format(pizzaOfTheDay.sizes.S)}
</p>
</div>
<img
          className="pizza-of-the-day-image"
          src={pizzaOfTheDay.image}
          alt={pizzaOfTheDay.name}
        />
</div>
</div>
);

"use" used as a prefix to hooks is a way to easily understand the said component is a hook, and react linting will catch errors as respect to hooks
and having capital first letter let us understand that it is a react component

the below can be used for devtools
useDebugValue(
pizzaOfTheDay
? `${pizzaOfTheDay.id} - ${pizzaOfTheDay.name}`
: "Loading...",
);
having multiple useDebugValue used in a hook, returns a array of hook value in the Component Developer Tools available in Browser Devtools
Learn more about them : https://react.dev/reference/react/useDebugValue

For forms onSubmit is better than onClick

Props are something that are passed from the parent to child - States passed as props cannot be edited by the child components, hence it is called as one-way data flow.
To update the parent's state from child one has to pass function that manipulates the said parent state to the child too

Tanstack Router is inclined towards client side rendering, were as React Router is equally inclined towards server side rendering as for Remix and client side rendering. Documentation for Tanstack Router : https://tanstack.com/router/latest

import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
is to be configed as a plugin in vite.config.js

Then a routes path and a file \_\_root.jsx is required in src to utilize Tanstack Router.

Outlet works as children for swapping of the components in the \_\_root.jsx file.

Adding .lazy. to the file name makes them lazy loaded by default via tanstack router

And then creating Route as below in the said file makes the component load lazy
export const Route = createLazyFileRoute("/order")({
component: Order,
});

Tanstack is a much better way to call apis, as for the data caching capabilities and better handling of api requests and responses

Tanstack's queryCache is to prefill cache
Tanstack's mutationCache is for post requests as Mutations are for post requests

To setup tanstack's query you should have queryClient as below:
const queryClient = new QueryClient();
and wrap the components where you want to use Tanstack Query as below:
<QueryClientProvider client={queryClient}>
<RouterProvider router={router} />
</QueryClientProvider>

Here paranthesis is normally used as an implicit return
{data.map((order) => (

<tr key={order.order_id}>
<td>{order.order_id}</td>
<td>{order.date}</td>
<td>{order.time}</td>
</tr>
))}
we can similarly write
{data.map((order) => {return(
<tr key={order.order_id}>
<td>{order.order_id}</td>
<td>{order.date}</td>
<td>{order.time}</td>
</tr>
)}))}

Remote State Management (Zustand, Redux) vs Tanstack Query
Both tools holds different use cases and hence cannot be directly compared.
Further Tanstack store is directly competing with Zustand

Further add details about Zustand and its use-cases, along with Redux and its use-cases too

Could check this out :https://frontendmasters.com/teachers/david-khourshid/

React Native : https://frontendmasters.com/courses/intermediate-react-native-v2/

Folder Structure could be created as such that whena specific component is no longer needed in the code it can be directly deleted

To learn more on Tailwind from Brain Holt : https://react-v8.holt.courses/

Could learn about SolidJS here : https://frontendmasters.com/courses/reactivity-solidjs/

Portal allows to render things outside the application:
Such as a navbar is present outside the app, and is updated on the basis of content available in the app.

A ref is a frozen object, with is used to reduce rerenders and we can only update the current value of the ref

useEffect(() => {
const modalRoot = document.getElementById("modal");
modalRoot.appendChild(elRef.current);

    return () => modalRoot.removeChild(elRef.current);

}, []);

in the above code when we appendChild in the dom, if we don't have a clean up function which is written in the return of the useEffect, then it would lead to memory leak, as as many times the page renders the div is created but not removed from dom

!!value makes it a boolean

enabled is a option in tanstack to make it aware if the api call is to be made or not

Class component -> has a major use case as for error boundaries, as we can implement error boundaries just with class components

Error boundary package -> https://www.npmjs.com/package/react-error-boundary

Hooks cannot be used with class components
To do the above: We have to create a functional component and run the hook and then pass it as prop to the class component

If a function is static is can be called on uninstantiated class, else we have to instantiated the class and then use the functions

Every Class Component must have a render function

componentDidMount() {} is similar to useEffect to be run once that is with an empty array.

componentWillUnmount() {} is similar to cleaning functions that was being returned at the end of the useEffect to clean the code

componentDidUpdate() {} runs when a state is updated

constructor(props) {
super(props)
} -> this is the first function to run when a class component is initialized

In the class components we would have to bind "this" to every function

Arrow functions have different context setting methology than normal function -> add more details about it

function ErrorBoundaryWrappedPastOrderRoutes() {
return (
<ErrorBoundary>
<PastOrderRoute />
</ErrorBoundary>
);
}
ErrorBoundary can catch errors only of the this that are being rendered inside it

Pass through functions

Why was Error Boundaries left out of the new react, like why it requires classical component

- There was not a better way to handle the Error Boundary and hence the class component was not going to be deprecated so fine.

To get data we use Query of tanstack, and for the post, patch, delete we use Mutation of tanstack

mutation is not directly calling the mutationFn, hence we have to use mutation.mutate

When we just have to collect simple data, we use uncontrolled forms

In the query devtools we can check all the mutations and query

Basic form handling is in built within the browser

Handling of the validation on the submit

Controlled forms are to be used when we have dependent fields in the form - eg: pincode based

418, I'm a teapost is actually a error

Test Cases

Vitest
Jest was created by Meta which is now OpenJS
Jest and Vitest are mimicing Jasmine

Vitest -> Testing Suite for Vite
Testing-Library/React -> Helping library used to write testcases fro react
Airbnb created Enzymes before
Happy Dom -> Synthetic Browser Environment,
JSDOM was massive and slow hence they created Happy Dom

**test** is specifically the route that would be used to run tests

App.test.jsx are the kidn of files that vitest automatically finds and run tests on them

Setup requires :
script should have
test : "vitest"
and vite.config.js should have
test: {
environment: "happy-dom",
},
Read more about Playwright

vitest.config.js is configuration for vitest

sample test:
// We are gonna write a text such that we have alt text

import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import Pizza from "../Pizza";

test("alt test renders on image", async () => {
const name = "My Favorite Pizza";
const src = "https://picsum.photos/200";
const screen = render(
<Pizza name={name} description="super cool pizza" image={src} />,
);

const img = screen.getByRole("img");
expect(img.src).toBe(src);
expect(img.alt).toBe(name);
});

Test can be kept asynchronous in all cases
