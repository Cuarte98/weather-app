import React from "react";
import { Box } from "@chakra-ui/core";
import {
  WiDaySunny,
  WiThunderstorm,
  WiShowers,
  WiRain,
  WiSmoke,
  WiSnow,
  WiCloudy,
  WiSandstorm,
  WiDust,
  WiFog,
  WiTornado,
} from "react-icons/wi";

interface Props {
  status: string;
}

const WeatherIcon: React.FC<Props> = ({ status }) => {
  const iconSet = {
    Thunderstorm: WiThunderstorm,
    Drizzle: WiShowers,
    Rain: WiRain,
    Snow: WiSnow,
    Clouds: WiCloudy,
    Clear: WiDaySunny,
    Mist: WiFog,
    Smoke: WiSmoke,
    Haze: WiFog,
    Dust: WiDust,
    Fog: WiFog,
    Sand: WiSandstorm,
    Ash: WiFog,
    Squall: WiFog,
    Tornado: WiTornado,
  };

  return <Box as={iconSet[status]} />;
};

export default WeatherIcon;
