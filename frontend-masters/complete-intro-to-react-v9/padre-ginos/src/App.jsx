import { StrictMode } from "react";
import { createRoot } from "react-dom";
// import Pizza from "./Pizza";
import Order from "./Order";
import PizzaOfTheDay from "./PizzaOfTheDay";
const App = () => {
  return (
    <div>
      <h1 className="logo">Padre Gino's - Order Now</h1>
      <Order />
      <PizzaOfTheDay />
      {/* <Pizza
        name="The Pepperoni Pizza"
        description="Some dope pizza yo"
        image={"/public/pizzas/pepperoni.webp"}
      />
      <Pizza
        name="Americano Pizza"
        description="French fries and hot fogs, wtf Italy"
        image={"/public/pizzas/big_meat.webp"}
      />
      <Pizza
        name="The Hawaiian"
        description="pineapple and ham, wtf America"
        image={"/public/pizzas/hawaiian.webp"}
      />
      <Pizza
        name="Chicken Pizza?"
        description="chicken nuggies on your pizza, wtf UK"
        image={"/public/pizzas/spin_pesto.webp"}
      />
      <Pizza
        name="Baked Potato Pizza"
        description="unholy potato mash, wtf Minnesota"
        image={"/public/pizzas/mexicana.webp"}
      /> */}
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
