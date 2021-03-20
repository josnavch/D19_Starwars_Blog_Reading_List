import React, { useState, useEffect, useContext } from "react";

import { Context } from "../store/appContext";

export const People = () => {
	const [people, setPeople] = useState([]);

	return (
		<div className="container">
			<h1>People</h1>
			<div className="row flex-row flex-nowrap overflow-auto">
				<div className="card" style={{ width: "18rem" }}>
					<img
						src="https://lumiere-a.akamaihd.net/v1/images/razor-crest-s-arsenal-main_68d42bf7.jpeg?region=164%2C0%2C953%2C536&width=768"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Some quick example text to build on the card title and make up the bulk of the cards
							content.
						</p>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">An item</li>
							<li className="list-group-item">A second item</li>
							<li className="list-group-item">A third item</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
