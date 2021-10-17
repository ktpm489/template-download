import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ContactPage from './pages/contact'
import AboutPage from './pages/about'
import FaqsPage from './pages/faqs'
import SupportPage from './pages/support'
import IndexPage from './pages'

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/contact" component={ContactPage} />
					<Route exact path="/download/*" component={IndexPage} />
					<Route exact path="/faqs" component={FaqsPage} />
					<Route exact path="/support" component={SupportPage} />
					<Route exact path="/" component={IndexPage} />
				</Switch>
			</Router>
		)
	}
}

export default App
