import moment from "moment";
import { WeatherDay } from "./interfaces";

export const parseTime = (time: string) => {
  return moment(time).format("dddd");
};

export const parseData = ({ list, city }) => {
  let days = list.filter((item, i: number) => {
    return !i || parseTime(item.dt_txt) !== parseTime(list[i - 1].dt_txt);
  });

  let parsedDays = days.map(
    ({ main, weather, dt_txt }): WeatherDay => {
      return {
        temp: main.temp,
        temp_min: main.temp_min,
        temp_max: main.temp_max,
        weather: weather[0].main,
        day: parseTime(dt_txt),
      };
    }
  );

  return {
    city: city.name,
    weatherByDay: parsedDays,
  };
};
