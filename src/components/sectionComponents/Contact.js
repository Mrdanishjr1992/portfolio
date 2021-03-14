import React from 'react';

export default function Contact() {
	return (
		<>
			<h2>FEATURED</h2>
			<section>
				<div id="contact" className="item">
					<h2 id="contact">CONTACT</h2>
					<div className="contact">
						<p>Email : mrdanishjr1992@gmail.com</p>
						<p>Phone : 1(872)-305-0822</p>
					</div>
					<p className="mt-5">Contact Info</p>
				</div>
				<div id="contact" className="item">
					<h2 id="resume">RESUME</h2>
					<div className="contact">
						<p className="text-xl">
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
			</section>
		</>
	);
}
