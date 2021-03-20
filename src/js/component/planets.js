import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";
import { bindActionCreators } from "redux";

export const Planets = ({ data }) => {
	const [planets, setPlanets] = useState([]);
	const { store, actions } = useContext(Context);
	const imgURL = "https://starwars-visualguide.com/assets/img/planets/";

	function getId(url) {
		return url.split("/")[url.split("/").length - 2];
	}

	return (
		<div className="container">
			<h1>Planets</h1>
			<div className="row flex-row flex-nowrap overflow-auto">
				{() => actions.fetchPlanets()}
				{store.planets.map((item, index) => {
					return (
						<div className="card col-md-4" key={item.name} style={{ width: "25rem" }}>
							<img
								src="https://starwars-visualguide.com/assets/img/planets/3.jpg"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
							</div>
							<ul className="list-group list-group-flush">
								<li className="list-group-item">
									<strong>Climate: </strong>
									{item.climate}
								</li>
								<li className="list-group-item">
									<strong>Diameter: </strong>
									{item.diameter}
								</li>
								<li className="list-group-item">
									<strong>Population: </strong>
									{item.population}
								</li>
							</ul>
							<div className="card-body">
								<a href="#" className="card-link">
									Lean more
								</a>
								<a href="#" className="far fa-heart" />
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

Planets.propTypes = {
	data: PropTypes.node.isRequired
};
