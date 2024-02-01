import { FaCrow } from "react-icons/fa6";
import { HStack, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { ChangeEvent } from "react";

interface Props {
  onSearch: (toSearch: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const frontSearch = event.target.value;
    console.log(frontSearch);
    onSearch(frontSearch);
  };

  return (
    <>
      <HStack padding={5}>
        <FaCrow size="50" color="white" />
        <InputGroup>
          <InputLeftAddon bg="blue.50">
            <HiMagnifyingGlass />
          </InputLeftAddon>
          <Input
            placeholder="Produkte suchen...FrontEnd"
            onChange={handleInputChange}
            focusBorderColor="blue.600"
            variant="outline"
            bg="white"
          />
        </InputGroup>
      </HStack>
    </>
  );
};

export default NavBar;
