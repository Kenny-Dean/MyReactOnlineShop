import { Badge } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Rating = ({ rating }: Props) => {
  let color = rating > 4.4 ? "green" : rating > 4.0 ? "yellow" : "red";

  return (
    <Badge colorScheme={color} fontSize="10px" borderRadius="4px">
      {rating}
    </Badge>
  );
};

export default Rating;
