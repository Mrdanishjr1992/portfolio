import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Skill from './components/Skill';
import Project from './components/Project';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';


function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route component={Home} path='/'/>
        <Route component={About} path='/about'/>
        <Route component={Project} path='/project'/>
        <Route component={Skill} path='/skill'/>
        <Route component={Contact} path='/contact'/>
      </Switch>
      <Footer/>
    </BrowserRouter>
  )
};

export default App;
