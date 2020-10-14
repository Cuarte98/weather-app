import React from "react";
import { Flex, Button } from "@chakra-ui/core";

interface Props {
  cities: { name: string; id: number }[];
  callback: (id: number) => void;
}

const CitySelector: React.FC<Props> = ({ cities, callback }) => {
  const mapeo = () => {
    return cities.map((item) => {
      return (
        <Button
          variantColor="teal"
          size="md"
          key={item.name}
          onClick={() => callback(item.id)}
        >
          {item.name}
        </Button>
      );
    });
  };

  return (
    <Flex flexDirection="column" h="300px" justifyContent="space-around" mx={4}>
      {mapeo()}
    </Flex>
  );
};

export default CitySelector;
