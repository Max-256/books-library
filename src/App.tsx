import { Box, Flex, Grid, GridItem, Show, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import BooksGridComponent from "./components/BooksGridComponent";
import GenreList from "./components/GenreList";
import { useState } from "react";
import Sort from "./components/Sort";
import Order from "./components/Order";

function App() {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "">("");
  const [path, setPath] = useState<"title" | "rating" | "">("");
  const [seachText, setSearchText] = useState("");

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar onSearch={(seachText) => setSearchText(seachText)} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box marginY={3}>
          <Text fontSize="3xl" marginY={0} fontWeight="black">
            {selectedGenre || ""} Books
          </Text>
          <Flex>
            <Sort
              onSort={(order) => {
                setSortOrder(order as "asc" | "desc");
              }}
              onPath={(path) => setPath(path as "title" | "rating")}
            />
            <Box marginLeft={3}>
              <Order
                onSort={(order) => setSortOrder(order as "asc" | "desc")}
                onPath={(path) => setPath(path as "title" | "rating")}
              />
            </Box>
          </Flex>
        </Box>
        <BooksGridComponent
          path={path}
          sortOrder={sortOrder}
          searchText={seachText}
          selectedGenre={selectedGenre}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
