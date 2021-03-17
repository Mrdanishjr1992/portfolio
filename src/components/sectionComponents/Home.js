import React from 'react';
import SoftSkills from './SoftSkills';
import Contact from './Contact';
import Skill from './Skill';
import Project from './Project';
import About from './About';

export default function Home() {
	return (
		<main className="main">
			<div
				className="campus"
				style={{
					backgroundImage: 'url(../images/hero.png)',
				}}
			>
				<p className="hero">
					<p className="text-xl mb-3 text-yellow-500">
						The Wonderful Life of Moe Danish.
					</p>
					Greetings, My name is Mohamed A. Danish. As a 29 year old seeking
					employment for software engineer, I can be an incredible asset to your
					team. I provide a wide range of growing skills including Javascript,
					Mongodb, Python, Django and React. My life experiences has equip me
					with a unique ability to adapt to situations, think quickly on my feet
					and most importantly become a dependable teammate.
					<p className="pt-1 text-lg">
						Rated{' '}
						<span className="text-2xl text-yellow-500 font-bold inline-block transform rotate-0 p-2">
							E
						</span>{' '}
						- for Employers
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
