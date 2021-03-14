import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
	return (
		<header className="header">
			<nav className="navbar">
				<NavLink to="/" exact className="logo p-4 h-full mx-5">
					<img
						src="https://fontmeme.com/permalink/210313/accbc9f4c4fb43e44f461c0c178b44f5.png"
						alt="netflix-font"
						border="0"
					/>
				</NavLink>
				<NavLink to="#projects" className="nav-link">
					Family
				</NavLink>
				<NavLink to="#skills" className="nav-link">
					Friends
				</NavLink>
				<NavLink to="#about" className="nav-link">
					Career
				</NavLink>
				<NavLink to="#contact" className="nav-link">
					Life
				</NavLink>
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
