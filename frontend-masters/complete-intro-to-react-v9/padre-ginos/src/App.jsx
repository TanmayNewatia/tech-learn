import { StrictMode, useState } from "react";
import { createRoot } from "react-dom";
// import Pizza from "./Pizza";
import Order from "./Order";
import PizzaOfTheDay from "./PizzaOfTheDay";
import Header from "./Header";
import { CartContext } from "./contexts";
const App = () => {
  const cartHook = useState([]);
  return (
    <CartContext.Provider value={cartHook}>
      <div>
        <Header />
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
    </CartContext.Provider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
