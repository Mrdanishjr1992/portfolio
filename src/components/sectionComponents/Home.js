import React from 'react';
import SoftSkills from './SoftSkills';
import Contact from './Contact';
import Skill from './Skill';
import Project from './Project';

export default function Home() {
	return (
		<main className="main">
			<div className="campus">
				<p className="hero">
					<p className="text-2xl">The wonderful life of Dev Danish.</p>
					Hi, I'm Mohamed and I'm a software developer. This is a collection of
					my journey so far.
					<p>Rated E - for everyone</p>
				</p>
			</div>
			<div className="wrapper">
				<Project />
				<Skill />
				<SoftSkills />
				<Contact />
			</div>
		</main>
	);
}
