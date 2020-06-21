import React from 'react'
import usePlacesAutocomplete, {
	getGeocode,
	getLatLng,
} from 'use-places-autocomplete'
import useOnclickOutside from 'react-cool-onclickoutside'
import styled from 'styled-components'

import {
	Combobox,
	ComboboxInput,
	ComboboxPopover,
	ComboboxList,
	ComboboxOption,
	ComboboxOptionText,
} from '@reach/combobox'
import '@reach/combobox/styles.css'

const Input = styled.input`
	border-bottom: 2px solid;
`

const PlacesAutocomplete = () => {
	const {
		// ready,
		value,
		suggestions: { status, data },
		setValue,
		clearSuggestions,
	} = usePlacesAutocomplete({
		requestOptions: {
			/* Define search scope here */
		},
		debounce: 300,
	})
	const ref = useOnclickOutside(() => {
		// When user clicks outside of the component, we can dismiss
		// the searched suggestions by calling this method
		clearSuggestions()
	})

	const handleInput = (e) => {
		// Update the keyword of the input element
		setValue(e.target.value)
	}

	const handleSelect = ({ description }) => () => {
		// When user selects a place, we can replace the keyword without request data from API
		// by setting the second parameter as "false"
		setValue(description, false)
		clearSuggestions()

		// Get latitude and longitude via utility functions
		getGeocode({ address: description })
			.then((results) => getLatLng(results[0]))
			.then(({ lat, lng }) => {
				console.log('📍 Coordinates: ', { lat, lng })
			})
			.catch((error) => {
				console.log('😱 Error: ', error)
			})
	}

	const renderSuggestions = () =>
		data.map((suggestion) => {
			const {
				id,
				structured_formatting: { main_text, secondary_text },
			} = suggestion

			return (
				<ComboboxOption
					key={id}
					onClick={handleSelect(suggestion)}
					value={main_text + ', ' + secondary_text}>
					{/* <strong>{main_text}</strong> <small>{secondary_text}</small> */}
				</ComboboxOption>
			)
		})

	return (
		<Combobox onSelect={handleSelect} aria-labelledby='demo'>
			<ComboboxInput
				value={value}
				onChange={handleInput}
				disabled={false}
				style={{ width: 500 }}
			/>
			<ComboboxPopover>
				{status === 'OK' && <ComboboxList>{renderSuggestions()} </ComboboxList>}
			</ComboboxPopover>
		</Combobox>
	)
}

export default PlacesAutocomplete
