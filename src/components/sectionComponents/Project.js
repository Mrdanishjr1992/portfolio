import React from 'react';

export default function Project() {
	return (
		<>
			<h2 id="projects">PROJECTS</h2>
			<section id="section1">
				<div className="item">
					<img src="../images/rgm-loading.png" alt="retro game maker" />
					<p className="text-yellow-500">Retro Game Maker</p>
					<p>This is a 2D game maker application.</p>
					<div className="share">
						<a href="https://retro-game-maker-app.herokuapp.com/">App Site</a>
						<span> || </span>
						<a href="https://github.com/Mrdanishjr1992/Retro-Game-Maker">
							GitHub
						</a>
					</div>
				</div>
				<div className="item">
					<img src="../images/wayfarer.png" alt="project wayfarer" />
					<p className="text-yellow-500">Wayfarer</p>
					<p>This application was a collaborative team project using MERN.</p>
					<div className="share">
						<a href="https://wayfarer-app-1207.herokuapp.com/">App Site</a>
						<span> || </span>
						<a href="https://git.generalassemb.ly/jessicalh/Project-Wayfarer">
							GitHub
						</a>
					</div>
				</div>
				<div className="item">
					<img src="../images/ga-fighters.png" alt="g.a fighters" />
					<p className="text-yellow-500">G.A - Fighters</p>
					<p>
						Game that resembles Street Fighters with the ability to add
						characters.
					</p>
					<div className="share">
						<a href="https://ga-fighters.herokuapp.com/">App Site</a>
						<span> || </span>
						<a href="https://git.generalassemb.ly/kennytrinh/fighter/tree/master">
							GitHub
						</a>
					</div>
				</div>
				<div className="item">
					<img src="../images/tom.png" alt="tom" />
					<p className="text-yellow-500">Tomagatchi Pets</p>
					<p>My very first application using only HTML, CSS, JS.</p>
					<div className="share">
						<a href="https://boring-spence-7df0b7.netlify.app/">App Site</a>
						<span> || </span>
						<a href="https://git.generalassemb.ly/mrdanishjr1992/Tamagotchi-pet">
							GitHub
						</a>
					</div>
				</div>
				{/* <div className="item">
					<img src="../images/rgm-landing.png" alt="storage space" />
					<p>Storage Space</p>
					<p>Django/Python app to hone my skills.</p>
					<div className="share">
						<a href="https://storage-space-app.herokuapp.com/">App Site</a>
						<span> || </span>
						<a href="https://github.com/Mrdanishjr1992/Storage-Space">GitHub</a>
					</div>
				</div> */}
			</section>
		</>
	);
}
