import { SimpleGrid } from "@chakra-ui/react";
import useBooks from "../hooks.ts/useBooks";
import BookCard from "./BookCard";

const BooksGridComponent = () => {
  const { books, error } = useBooks();

  return (
    <SimpleGrid
      padding={5}
      spacing={3}
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
    >
      {books.map((book) => (
        <BookCard book={book} />
      ))}
    </SimpleGrid>
  );
};

export default BooksGridComponent;
