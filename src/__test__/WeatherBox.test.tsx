import React from 'react';
import { cleanup, render } from '@testing-library/react';
import WeatherBox from '../views/WeatherBox';
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

describe('WeatherBox unit test', () => {
    const data = {
        city: 'London',
        weatherByDay: [{
            temp: 20,
            temp_max: 25,
            temp_min: 14,
            weather: 'cloudy',
            day: 'Monday',
        }, {
            temp: 12,
            temp_max: 20,
            temp_min: 8,
            weather: 'rain',
            day: 'Tuesday',
        }, {
            temp: 23,
            temp_max: 25,
            temp_min: 14,
            weather: 'rain',
            day: 'Thursday',
        }]
    };
    afterEach(() => cleanup)

    test('should render title', () => {
        const { getByText } = render(
            <ThemeProvider>
                <CSSReset />
                <WeatherBox isLoading={false} data={data} />
            </ThemeProvider>
        )
        expect(getByText(/london/i)).toBeInTheDocument()
    })

    test('should show spinner, next render component', () => {
        const { queryByText, rerender } = render(
            <ThemeProvider>
                <CSSReset />
                <WeatherBox isLoading={true} data={data} />
            </ThemeProvider>
        )
        expect(queryByText(/london/i)).not.toBeInTheDocument();

        rerender(<WeatherBox isLoading={false} data={data} />)

        expect(queryByText(/london/i)).toBeInTheDocument()

        expect(queryByText('20 °C')).toBeInTheDocument()

        expect(queryByText(/Tuesday/i)).toBeInTheDocument()
        expect(queryByText(/Thursday/i)).toBeInTheDocument()
    })
})