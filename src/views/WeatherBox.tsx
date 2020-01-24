import React from "react";
import { Flex, Text, Spinner } from "@chakra-ui/core";
import Forecast from "../components/Forecast";
import { WeatherDay } from "../utils/interfaces";

interface Props {
  isLoading: boolean;
  data: {
    city: string;
    weatherByDay: WeatherDay[];
  };
}

const WeatherBox: React.FC<Props> = ({
  isLoading,
  data: { city, weatherByDay },
}) => {
  return (
    <Flex
      direction="column"
      justify="space-between"
      bg="blue.600"
      rounded="md"
      p={4}
      w="600px"
      h="100%"
      shadow="lg"
    >
      {isLoading ? (
        <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
          <Spinner size="xl" />
        </Flex>
      ) : (
        <>
          <Text>{city}</Text>
          <Text
            fontSize="2xl"
            d="flex"
            justifyContent="center"
            alignItems="center"
          >
            {weatherByDay[0]?.temp} °C
          </Text>

          <Text>{weatherByDay[0]?.weather || 0}</Text>
          <Forecast weatherByDay={weatherByDay} />
        </>
      )}
    </Flex>
  );
};

export default WeatherBox;
