import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSort: (order: string) => void;
  onPath: (path: string) => void;
}

const Order = ({ onSort, onPath }: Props) => {
  const sortOrder = [
    { value: "asc", label: "Low rating books", path: "rating" },
    { value: "desc", label: "High rating books", path: "rating" },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by rating
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

export default Order;
