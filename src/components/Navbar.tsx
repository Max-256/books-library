import { HStack, Image } from "@chakra-ui/react";
import image from "../assets/library-logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent={"space-between"}>
      <Image boxSize="60px" src={image} />
      <SearchInput onSearch={(searchText) => onSearch(searchText)} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
