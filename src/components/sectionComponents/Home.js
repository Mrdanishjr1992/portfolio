import React from 'react';
import SoftSkills from './SoftSkills';
import Contact from './Contact';
import Skill from './Skill';
import Project from './Project';
import About from './About';

export default function Home() {
	return (
		<main className="main">
			<div className="campus">
				<p className="hero">
					<p className="text-2xl">The wonderful life of Dev Danish.</p>
					Hi, I'm Mohamed or better knnown as Dev Danish, and I'm a software
					developer. This is a Gallery of my journey so far on becoming the best
					software engineer in history.
					<p className="pt-1 text-lg">
						Rated <span className="text-2xl text-red-600 font-bold">E</span> -
						for Employers
					</p>
				</p>
			</div>
			<div className="wrapper">
				<Project />
				<Skill />
				<SoftSkills />
				<About />
				<Contact />
			</div>
		</main>
	);
}
