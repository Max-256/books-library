import { Badge } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const BookRating = ({ rating }: Props) => {
  const newRating = (rating / 5) * 100;

  let color = newRating > 75 ? "green" : newRating > 50 ? "orange" : "yellow";
  return (
    <Badge colorScheme={color} fontSize="13px" borderRadius={5} padding={1.5}>
      {newRating.toFixed(2)}
    </Badge>
  );
};
export default BookRating;
