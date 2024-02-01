import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { useState } from "react";
import ProductGrid from "./components/ProductGrid";
import useProducts from "./hooks/useProducts";
import AppUserDrawer from "./components/AppUserDrawer";
import { Categories } from "./components/Categories";

function App() {
  const [searching, setSearching] = useState("");
  const { products, error } = useProducts();

  return (
    <Grid templateAreas={`"nav nav" "side main"`}>
      <GridItem bg="blackAlpha.800" area={"nav"}>
        <NavBar onSearch={(toSearch) => setSearching(toSearch)} />
      </GridItem>

      <GridItem bg="blackAlpha.800" area={"side"}>
        <AppUserDrawer />

        <Categories products={products} />
      </GridItem>

      <GridItem bg="blackAlpha.800" area={"main"}>
        <ProductGrid products={products} toShow={searching} error={error} />
      </GridItem>
    </Grid>
  );
}

export default App;
