import React from 'react';
import { cleanup, render } from '@testing-library/react';
import CitySelector from '../components/CitySelector';
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import userEvent from '@testing-library/user-event';

describe('CitySelector unit test', () => {
	const cityData = [{ name: "CABA", id: 3433955 }];
	let component;
	let mockFn = jest.fn();
	beforeEach(() => {
		component = render(
			<ThemeProvider>
				<CSSReset />
				<CitySelector cities={cityData} callback={mockFn} />
			</ThemeProvider>
		);
	})

	afterEach(() => cleanup)


	test('should render button', () => {
		const { getByText } = component;
		const cityLabel = getByText(/caba/i);
		expect(cityLabel).toBeInTheDocument();
	});

	test('should call function on click', () => {
		const { getByText } = component;
		const cityLabel = getByText(/caba/i);
		userEvent.click(cityLabel)
		expect(mockFn).toBeCalled()
	})
})