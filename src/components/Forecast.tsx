import React from "react";

import { Box, Text, Flex } from "@chakra-ui/core";
import { WeatherDay } from "../utils/interfaces";
import WeatherIcon from "./WeatherIcon";
interface Props {
  weatherByDay: {
    temp: number;
    temp_max: number;
    temp_min: number;
    weather: string;
    day: string;
  }[];
}

const Forecast: React.FC<Props> = ({ weatherByDay }) => {
  const mapDays = (days: WeatherDay[]) => {
    return days.slice(1).map((item) => {
      return (
        <Flex
          key={item.day}
          direction="column"
          alignItems="center"
          bg="blue.300"
          rounded="md"
          boxSizing="border-box"
          p={2}
          w="100px"
          shadow="md"
        >
          <WeatherIcon status={item.weather} />
          <Box> {item.temp}</Box>
          <Text fontSize="md">{item.day}</Text>
        </Flex>
      );
    });
  };

  return (
    <div>
      <Flex justify="space-between">{mapDays(weatherByDay)}</Flex>
    </div>
  );
};

export default Forecast;
