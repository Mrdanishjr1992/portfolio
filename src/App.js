import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/sectionComponents/Home';
import NavBar from './components/universalComponents/NavBar';
import Footer from './components/universalComponents/Footer';

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Route exact component={Home} path="/" />
			<Footer />
		</BrowserRouter>
	);
}

export default App;
