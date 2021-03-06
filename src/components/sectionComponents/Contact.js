import React from 'react';

export default function Contact() {
	return (
		<>
			<h2>FEATURED</h2>
			<section>
				<div className="contact">
					<h2 id="contact" className="mx-auto">
						CONTACT
					</h2>
					<div className="item">
						<img src="../images/contact.jpg" alt="resume" />
						<p>
							<span className="mt-5 text-yellow-500">Email: </span>
							mrdanishjr1992@gmail.com
						</p>
						<p>
							<span className="mt-5 text-yellow-500">Phone: </span>{' '}
							1(872)-305-0822
						</p>
					</div>
				</div>
				<div className="contact">
					<h4 id="resume" className="mx-auto">
						RESUME
					</h4>
					<div className="item">
						<img src="../images/resume.png" alt="resume" />
						<p className="text-l p-2">
							<span className="mt-5 text-yellow-500">Resume: </span>{' '}
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
