import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSort: (order: string) => void;
  onPath: (path: string) => void;
}

const Sort = ({ onSort, onPath }: Props) => {
  const sortOrder = [
    { value: "asc", label: "Ascending", path: "title" },
    { value: "desc", label: "Descending", path: "title" },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort by Title
      </MenuButton>
      <MenuList>
        {sortOrder.map((item) => (
          <MenuItem
            onClick={() => {
              onSort(item.value);
              onPath(item.path);
            }}
            key={item.value}
            value={item.value}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Sort;
