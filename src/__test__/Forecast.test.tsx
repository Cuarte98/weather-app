import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Forecast from '../components/Forecast';
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

describe('Forecast unit test', () => {
    const weatherDayData = [{
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
    }];
    let component;
    afterEach(() => cleanup)

    beforeEach(() => {
        component = render(
            <ThemeProvider>
                <CSSReset />
                <Forecast weatherByDay={weatherDayData} />
            </ThemeProvider>
        );
    })

    test('should render tuesday and thursday', () => {
        const { getByTestId } = component;

        const tuesday = getByTestId(/forecast-tuesday/i);
        const thursday = getByTestId(/forecast-thursday/i);
        expect(thursday).toBeInTheDocument();
        expect(tuesday).toBeInTheDocument();
    });

    test('should not render monday', () => {
        const { queryByTestId } = component;

        expect(queryByTestId(/forecast-monday/i)).not.toBeInTheDocument()
    })

})