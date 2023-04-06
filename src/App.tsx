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
        <Navbar />
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
        <Flex marginLeft={5} marginTop={5}>
          <Sort
            onSort={(order) => {
              setSortOrder(order as "asc" | "desc");
            }}
            onPath={(path) => setPath(path as "title" | "rating")}
          />
          <Box marginLeft={5}>
            <Order
              onSort={(order) => setSortOrder(order as "asc" | "desc")}
              onPath={(path) => setPath(path as "title" | "rating")}
            />
          </Box>
        </Flex>
        <BooksGridComponent
          path={path}
          sortOrder={sortOrder}
          selectedGenre={selectedGenre}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
