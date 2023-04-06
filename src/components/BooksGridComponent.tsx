import { SimpleGrid } from "@chakra-ui/react";
import useBooks from "../hooks.ts/useBooks";
import BookCard from "./BookCard";

interface Props {
  selectedGenre: string;
}

const BooksGridComponent = ({ selectedGenre }: Props) => {
  const { books, error } = useBooks();

  const filtered = selectedGenre
    ? books.filter((bk) => bk.genre_list?.includes(selectedGenre))
    : books;

  return (
    <SimpleGrid
      padding={5}
      spacing={3}
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
    >
      {filtered.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </SimpleGrid>
  );
};

export default BooksGridComponent;
