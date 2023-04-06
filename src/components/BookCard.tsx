import { Card, Image, Stack, CardBody, Heading, Text } from "@chakra-ui/react";

import { Book } from "../hooks.ts/useBooks";

interface Props {
  book: Book;
}

const BookCard = ({ book }: Props) => {
  return (
    <Card direction="row" overflow="hidden" variant="elevated">
      <Image objectFit="cover" maxW="100px" src={book.image_url} alt="" />

      <Stack>
        <CardBody>
          <Heading size="md">{book.title}</Heading>
          <Text py="2">Author: {book.authors}</Text>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default BookCard;
