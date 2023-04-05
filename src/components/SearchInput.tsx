import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  const ref = useRef(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) console.log(ref.current);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          variant="filled"
          placeholder="Search books..."
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
