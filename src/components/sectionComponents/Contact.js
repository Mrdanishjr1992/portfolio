import React from 'react';

export default function Contact() {
	return (
		<>
			<h2 id="contact">CONTACT</h2>
			<section>
				<div className="item">
					<p className="about-para">
						Hello there, you can call me Moe or Danish. I'm 29 years old and
						currently seeking for employment as a software engineer. I'm not the
						kind to brag, but I would be a valuable assest to your team.
					</p>
					<p className="mt-5">About me</p>
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
					<p className="about-para">
						Software Engineering in my opinion is a vast Ocean of Knowledge and
						Opportunities, and this Ocean to me , is like Black holes to Albert
						Einstein. I am a seeker of knowledge and hope that I can offer
						something to the world.
					</p>
					<p className="mt-5">Personal Quote</p>
				</div>
				<div className="item">
					<p className="about-para">
						Honestly I don't know how to give less than 100% in anything I do.
						Any problems whether work , family, health, or financial that I come
						across, putting all my attention on it would give me great results.
						After marriage, I feel like a hidden power was unlocked within me
						that made motivation so natural and constant. I just want to give
						something to the world before I kick the bucket. The Tech world has
						a lot more opportunities to contribute than my prior jobs.
					</p>
					<p className="mt-1">Brand Statement</p>
				</div>
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
						<p className="mt-5">Contact Info</p>
					</div>
				</div>
			</section>
		</>
	);
}
