import { SimpleGrid } from "@chakra-ui/react";
import useBooks from "../hooks.ts/useBooks";
import BookCard from "./BookCard";
import _ from "lodash";

interface Props {
  selectedGenre: string;
  sortOrder: "asc" | "desc";
}

const BooksGridComponent = ({ selectedGenre, sortOrder }: Props) => {
  const { books, error } = useBooks();

  const filtered = selectedGenre
    ? books.filter((bk) => bk.genre_list?.includes(selectedGenre))
    : books;

  const sorted = sortOrder ? _.orderBy(filtered, "title", sortOrder) : filtered;

  return (
    <SimpleGrid
      padding={5}
      spacing={3}
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
    >
      {sorted.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </SimpleGrid>
  );
};

export default BooksGridComponent;
