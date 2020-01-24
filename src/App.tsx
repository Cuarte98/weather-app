import React, { useState, useEffect } from "react";
import { ThemeProvider, CSSReset, Box } from "@chakra-ui/core";
import WeatherBox from "./views/WeatherBox";
import CitySelector from "./components/CitySelector";
import { parseData } from "./utils/parsers";
import "./App.css";

const urlGenerator = (locationID: number) => {
  return `http://api.openweathermap.org/data/2.5/forecast?units=metric&appid=3a095db1c96d29165d4b58de96207db6&id=${locationID}`;
};

const App: React.FC = () => {
  const [data, setData] = useState({ city: "", weatherByDay: [] });
  const [selectedCity, setSelectedCity] = useState(3433955);
  const [isLoadingData, setIsLoadingData] = useState(true);

  useEffect(() => {
    const fetchData = async (id: number) => {
      await fetch(urlGenerator(id))
        .then((response) => response.json())
        .then((data) => {
          setData(parseData(data));
          setIsLoadingData(false);
        });
    };
    setIsLoadingData(true);
    fetchData(selectedCity);
  }, [selectedCity]);

  const cities = [
    { name: "CABA", id: 3433955 },
    { name: "Rome", id: 3169070 },
    { name: "New Delhi", id: 1261481 },
    { name: "New York", id: 5128638 },
    { name: "Moscow", id: 524901 },
    { name: "Oslo", id: 6453366 },
  ];

  return (
    <ThemeProvider>
      <CSSReset />
      <div className="App">
        <Box className="App-header">
          <CitySelector cities={cities} callback={setSelectedCity} />
          <WeatherBox data={data} isLoading={isLoadingData} />
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default App;
