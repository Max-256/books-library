import { Box, SimpleGrid } from "@chakra-ui/react";
import useBooks from "../hooks.ts/useBooks";
import BookCard from "./BookCard";
import Pagination from "./Pagination";
import _ from "lodash";
import { useState } from "react";
import { paginate } from "../utils/pagination";
import BookCardSkeleton from "./BookCardSkeleton";

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
  const { books, isLoading } = useBooks();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 30;

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

  const paginatedData = paginate(results, currentPage, pageSize);

  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <>
      <SimpleGrid spacing={3} columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}>
        {isLoading && skeletons.map((sk) => <BookCardSkeleton key={sk} />)}
        {paginatedData.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </SimpleGrid>
      <Box
        marginTop={3}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Pagination
          itemsCount={results.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </Box>
    </>
  );
};

export default BooksGridComponent;
