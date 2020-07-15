import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Example from './components/example'

export default class Routes extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Route component={Example} path="/" exact/>
			</BrowserRouter>
		)
	}
}