import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center mt-5">
		<div className="fade" />
		<section className="star-wars">
			<div className="crawl">
				<div className="title">
					<p>A long time ago, in a galaxy far,</p>
					<br />
					<p>far away...</p>
				</div>
				<p>
					It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first
					victory against the evil Galactic Empire.
				</p>
				<p>
					During the battle, Rebel spies managed to steal secret plans to the Empires ultimate weapon, the
					DEATH STAR, an armored space station with enough power to destroy an entire planet.
				</p>
				<p>
					Pursued by the Empires sinister agents, Princess Leia races home aboard her starship, custodian of
					the stolen plan that can save her people and restore freedom to the galaxy....
				</p>
			</div>
		</section>
	</div>
);
