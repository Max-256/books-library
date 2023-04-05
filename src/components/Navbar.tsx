import { HStack, Image } from "@chakra-ui/react";
import image from "../assets/library-logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <Image boxSize="60px" src={image} />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
