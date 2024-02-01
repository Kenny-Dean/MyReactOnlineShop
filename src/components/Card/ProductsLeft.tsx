import { Badge, HStack, Text } from "@chakra-ui/react";

interface Props {
  productsLeft: number;
}

const ProductsLeft = ({ productsLeft }: Props) => (
  <>
    <HStack>
      <Text fontSize="sm">left in stock: </Text>
      <Badge colorScheme="blue.500" fontSize="20px" borderRadius="4px">
        {productsLeft}
      </Badge>
    </HStack>
  </>
);

export default ProductsLeft;
