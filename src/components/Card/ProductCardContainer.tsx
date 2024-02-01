import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ProductCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={20} overflow="hidden">
      {children}
    </Box>
  );
};

export default ProductCardContainer;
