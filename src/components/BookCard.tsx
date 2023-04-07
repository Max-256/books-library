import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  HStack,
} from "@chakra-ui/react";

import { Book } from "../hooks.ts/useBooks";
import noImage from "../assets/noImage.png";
import BookRating from "./BookRating";

interface Props {
  book: Book;
}

const BookCard = ({ book }: Props) => {
  return (
    <Card maxHeight="250px" direction="row" overflow="hidden" variant="outline">
      <Image
        objectFit="cover"
        maxW="100px"
        src={book.image_url || noImage}
        alt=""
      />

      <Stack>
        <CardBody>
          <Heading size="md">{book.title || "Not Available"}</Heading>
          <Text py="2">Author: {book.authors || "Anonymous"}</Text>
          <Text>{book.Quote1}</Text>
          <HStack justifyContent="space-between">
            <Text>Pages: {book.num_pages || "_"}</Text>
            <BookRating rating={book.rating || 0} />
          </HStack>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default BookCard;
