import React from 'react';
import About from './About';
import Contact from './Contact';
import Skill from './Skill';
import Project from './Project';

export default function Home() {
	return (
		<main className="main">
			<div className="wrapper">
				<Project />
				<Skill />
				<About />
				<Contact />
			</div>
		</main>
	);
}
