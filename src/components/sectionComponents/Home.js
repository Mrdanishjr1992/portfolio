import React from 'react';
import About from './About';
import Contact from './Contact';
import Skill from './Skill';
import Project from './Project';

export default function Home() {
	return (
		<main className="main">
			<div className="campus">
				<p className="hero">
					Hi, I'm Mohamed Abdulah. Thank you for visiting my portfolio.
				</p>
			</div>
			<div className="wrapper">
				<Project />
				<Skill />
				<About />
				<Contact />
			</div>
		</main>
	);
}
