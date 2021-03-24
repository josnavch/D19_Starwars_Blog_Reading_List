import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

import "../../styles/cards.scss";

import Errorimage from "../../img/Not_picture_found.jpg";

export const Planets = () => {
	const [] = useState([]);

	const { store, actions } = useContext(Context);

	function getId(url) {
		const imgURL = "https://starwars-visualguide.com/assets/img/planets/";
		let str1 = url.split("/")[url.split("/").length - 2];
		let str2 = ".jpg";
		let url2 = imgURL.concat(str1, str2);
		return url2;
	}
	function getplanetId(url) {
		const str1 = url.split("/")[url.split("/").length - 2];
		return str1;
	}

	return (
		<div className="container">
			<h1 className="title">Planets</h1>
			<div className="row flex-row flex-nowrap overflow-auto">
				{() => actions.fetchPlanets()}
				{store.planets.map(item => {
					return (
						<div className="card col-md-4" key={item.name} style={{ width: "25rem" }}>
							<img
								src={getId(item.url)}
								className="card-img-top"
								onError={e => ((e.target.onerror = null), (e.target.src = Errorimage))}
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
								<Link
									to={"/planetdetails/" + getplanetId(item.url)}
									className="btn btn-outline-success float-left">
									<span>Lean more: {item.name}</span>
								</Link>
								{"   "}
								<button
									className="btn btn-outline-secondary far fa-heart float-right"
									onClick={() => actions.addFavorites(item.name, "planet")}
								/>
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
