import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";

function AppUserDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Formulardaten:", formData);
  };

  const handleChangeSimple = (e: ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    desc: "",
  });

  return (
    <>
      <Button leftIcon={<FaPencilAlt />} colorScheme="blue" onClick={onOpen}>
        Create Product
      </Button>
      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Create a new product
          </DrawerHeader>

          <form onSubmit={handleSubmit}>
            <DrawerBody>
              <Stack spacing="24px">
                <FormControl isRequired>
                  <FormLabel htmlFor="titel">Product Title: </FormLabel>
                  <Input
                    id="nameField"
                    name="title"
                    value={formData.title}
                    placeholder="Please enter the product title"
                    onChange={handleChangeSimple}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel htmlFor="price">Price: </FormLabel>
                  <Input
                    min={0.01}
                    id="priceField"
                    name="price"
                    placeholder="Please enter the Price"
                    value={formData.price}
                    onChange={handleChangeSimple}
                  ></Input>
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="desc">Description: </FormLabel>
                  <Textarea
                    id="descriptionField"
                    name="desc"
                    placeholder="Please enter a description"
                    value={formData.desc}
                    onChange={handleChangeText}
                  />
                </FormControl>
              </Stack>
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px">
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue" type="submit">
                Submit
              </Button>
            </DrawerFooter>
          </form>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default AppUserDrawer;
