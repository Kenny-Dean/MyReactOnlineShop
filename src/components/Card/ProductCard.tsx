import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  HStack,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Product } from "../../hooks/useProducts";
import { Image } from "@chakra-ui/react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import Rating from "./Rating";
import ProductsLeft from "./ProductsLeft";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card borderRadius={20}>
      <Image
        src={product.thumbnail}
        key={product.id}
        objectFit="cover"
        alt="Bild"
        maxH="300px"
        position="sticky"
        w="100%"
      />
      <CardHeader overflow="hidden"></CardHeader>
      <CardBody alignContent="strech">
        <Stack>
          <Heading size="md">{product.title}</Heading>

          <Text fontSize="sm">{product.description}</Text>
          <Divider />

          <Box width="100%">
            <HStack justifyContent="space-between">
              <Rating rating={parseFloat(product.rating)} />
              <ProductsLeft productsLeft={parseInt(product.stock)} />
            </HStack>

            <HStack justifyContent="space-between">
              <Text fontSize="xl" textColor="blue.600">
                {product.price + "€"}
              </Text>
              <Button colorScheme="blue">
                <MdOutlineAddShoppingCart />
              </Button>
            </HStack>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
