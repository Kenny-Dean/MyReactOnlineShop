import { useEffect, useState } from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import ProductCard from "./Card/ProductCard";
import ProductCardContainer from "./Card/ProductCardContainer";
import { Product } from "../hooks/useProducts";

interface Props {
  toShow: string;
  products: Product[];
  error: string;
}

const ProductGrid = ({ toShow, products, error }: Props) => {
  const [productsToShow, setProductsToShow] = useState<Product[]>(products);

  useEffect(() => {
    setProductsToShow(
      products.filter(
        (f) =>
          f.title.toLowerCase().includes(toShow.toLowerCase()) ||
          f.description.toLowerCase().includes(toShow.toLowerCase())
      )
    );
  }, [toShow]);

  if (error) return <Text>{error}</Text>;

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {!(toShow.trim().length > 0) &&
          products.map((prod) => (
            <ProductCardContainer key={prod.id}>
              <ProductCard product={prod} />
            </ProductCardContainer>
          ))}

        {toShow.trim().length > 0 &&
          productsToShow.map((prod) => (
            <ProductCardContainer key={prod.id}>
              <ProductCard product={prod} />
            </ProductCardContainer>
          ))}
      </SimpleGrid>
    </>
  );
};

export default ProductGrid;
