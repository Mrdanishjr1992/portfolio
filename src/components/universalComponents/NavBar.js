import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
	return (
		<header className="header">
			<nav className="navbar">
				<a href="/" className="logo p-4 h-full mx-5">
					<img
						src="https://fontmeme.com/permalink/210313/accbc9f4c4fb43e44f461c0c178b44f5.png"
						alt="netflix-font"
						border="0"
					/>
				</a>
				<a href="#projects" className="nav-link">
					Projects
				</a>
				<a href="#skills" className="nav-link">
					Skills
				</a>
				<a href="#about" className="nav-link">
					About
				</a>
				<a href="#contact" className="nav-link">
					Contact
				</a>
			</nav>
			<div className="icon-box">
				<SocialIcon
					url="https://www.linkedin.com/in/mohamed-s-abdulah/"
					className="icon"
					target="_blank"
					fgColor="#fff"
					style={{ height: 35, width: 35 }}
				/>
				<SocialIcon
					url="https://github.com/Mrdanishjr1992"
					className="icon"
					target="_blank"
					fgColor="#fff"
					style={{ height: 35, width: 35 }}
				/>
				<SocialIcon
					url="https://twitter.com/Mohamed_S_Abdul"
					className="icon"
					target="_blank"
					fgColor="#fff"
					style={{ height: 35, width: 35 }}
				/>
			</div>
		</header>
	);
}
