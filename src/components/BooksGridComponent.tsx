import { SimpleGrid } from "@chakra-ui/react";
import useBooks from "../hooks.ts/useBooks";
import BookCard from "./BookCard";
import _ from "lodash";

interface Props {
  selectedGenre: string;
  sortOrder: "asc" | "desc" | "";
  path: "title" | "rating" | "";
  searchText: string;
}

const BooksGridComponent = ({
  selectedGenre,
  sortOrder,
  path,
  searchText,
}: Props) => {
  const { books, error } = useBooks();

  const filtered = selectedGenre
    ? books.filter((bk) => bk.genre_list?.includes(selectedGenre))
    : books;

  const sorted =
    sortOrder && path ? _.orderBy(filtered, path, sortOrder) : filtered;

  const results = searchText
    ? sorted.filter(
        (book) =>
          book.title
            ?.toLocaleLowerCase()
            .includes(searchText.toLocaleLowerCase()) ||
          book.authors
            ?.toLocaleLowerCase()
            .includes(searchText.toLocaleLowerCase()) ||
          book.description
            ?.toLocaleLowerCase()
            .includes(searchText.toLocaleLowerCase()) ||
          book.genre_list
            ?.toLocaleLowerCase()
            .includes(searchText.toLocaleLowerCase())
      )
    : sorted;

  return (
    <SimpleGrid
      padding={5}
      spacing={3}
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
    >
      {results.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </SimpleGrid>
  );
};

export default BooksGridComponent;
