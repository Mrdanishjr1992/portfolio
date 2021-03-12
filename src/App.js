import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Skill from './components/Skill';
import Project from './components/Project';
import ProjectDetail from './components/ProjectDetail';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Switch>
				<Route component={About} path="/about" />
				<Route component={Project} path="/project" />
				<Route component={ProjectDetail} path="/project/:slug" />
				<Route component={Skill} path="/skill" />
				<Route component={Contact} path="/contact" />
				<Route component={Home} path="/" />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
