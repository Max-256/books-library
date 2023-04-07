import { Button, Heading, List, ListItem } from "@chakra-ui/react";
import genres from "../data/genres";

interface Props {
  onSelectGenre: (genre: string) => void;
  selectedGenre: string;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  return (
    <List>
      <Heading marginTop={5} fontSize="2xl">
        Genres
      </Heading>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <Button
            whiteSpace="normal"
            textAlign="left"
            variant="link"
            fontSize="md"
            onClick={() => onSelectGenre(genre.name)}
            fontWeight={selectedGenre === genre.name ? "bold" : "normal"}
          >
            {genre.name}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
