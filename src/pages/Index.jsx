import { Button, Flex, Text } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Flex h="100vh" justifyContent="center" alignItems="center">
      <Button variant="primary">
        <Text as="span" mr={2}>
          Hello world!
        </Text>
        <FaPlus />
      </Button>
    </Flex>
  );
};

export default Index;
