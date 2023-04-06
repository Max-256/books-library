import { Card, Image, Stack, CardBody, Heading, Text } from "@chakra-ui/react";

import { Book } from "../hooks.ts/useBooks";
import noImage from "../assets/noImage.png";

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
          <Text py="2">Author: {book.authors || "Unknown"}</Text>
          <Text>{book.rating}</Text>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default BookCard;
