import React from 'react';

export default function Contact() {
	return (
		<>
			<h2 id="contact">CONTACT</h2>
			<section>
				<div id="contact" className="item">
					<div className="contact">
						<p>Email : mrdanishjr1992@gmail.com</p>
						<p>Phone : 1(872)-305-0822</p>
						<p id="resume">
							Resume :{' '}
							<a
								href="https://docs.google.com/document/d/1IAXiz4Vk9NZU0oX8E2zZL1LVNZv4nvqKS0xD-My3EbE/edit?usp=sharing"
								target="_blank"
								rel="noopener noreferrer"
								className="a"
							>
								Google Docs
							</a>
						</p>
					</div>
				</div>

				<div className="item">
					<p className="about-para">
						Hello there, you can call me Moe or Danish. I'm 29 years old and
						currently seeking for employment as a software engineer. I'm not the
						kind to brag, but I would be a valuable assest to your team.
					</p>
				</div>
				<div className="item">
					<img
						className="contact-img"
						src="../images/hero.png"
						alt="g.a fighters"
					/>
					<p>Mohamed Abdulah</p>
					<p>Dev Danish</p>
				</div>
				<div className="item">
					<h2 className="text-2xl">
						Give me a chance and find out if we are a fit.
					</h2>
				</div>
			</section>
		</>
	);
}
