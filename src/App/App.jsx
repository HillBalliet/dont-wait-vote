import React from 'react'
import { Router } from '@reach/router'
import { Grommet, Box, ResponsiveContext, Main } from 'grommet'

import secondTheme from '../Utils/secondTheme.json'

import Home from '../Components/Home'
import FooterDiv from '../Components/Footer'
// import Header from '../Components/Header'

const App = () => {
	return (
		<Grommet theme={secondTheme} full themeMode='light'>
			<ResponsiveContext.Consumer>
				{(size) => (
					<Main fill={true}>
						<Home />
						<FooterDiv />
					</Main>
				)}
			</ResponsiveContext.Consumer>
		</Grommet>
	)
}

export default App
