import { Product } from "../hooks/useProducts";
import { List, ListItem, Tag } from "@chakra-ui/react";

interface Props {
  products: Product[];
}

function distinct<T>(array: T[]): T[] {
  return Array.from(new Set(array));
}
export const Categories = ({ products }: Props) => {
  const distCate = distinct(products.map((m) => m.category));

  return (
    <List>
      {distCate.map((m, index) => (
        <ListItem key={m + index}>
          <Tag size="lg" variant="solid" padding="5px" bg="gary.800">
            {m}
          </Tag>
        </ListItem>
      ))}
    </List>
  );
};
