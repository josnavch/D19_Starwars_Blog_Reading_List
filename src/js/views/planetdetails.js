import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

import { bindActionCreators } from "redux";

import Errorimage from "../../img/Not_picture_found.jpg";

export const PlanetDetails = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	// console.log(params.id);

	let index = params.id - 1;
	//console.log(index);

	function getImageId(url) {
		const imgURL = "https://starwars-visualguide.com/assets/img/planets/";
		let str1 = url.split("/")[url.split("/").length - 2];
		let str2 = ".jpg";
		let url2 = imgURL.concat(str1, str2);
		return url2;
	}

	return (
		<div>
			<div className="container">
				<div className="row">
					<div className="col-md-12 align-self-center pb-4">
						<h2>{store.planets[index].name}</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-ms align-self-center pb-2">
						<img
							src={getImageId(store.planets[index].url)}
							className="card-img-top"
							onError={e => ((e.target.onerror = null), (e.target.src = Errorimage))}
						/>
					</div>
					<div className="col-ms align-self-center pb-2">
						<ul>
							<li>
								<b>Rotation Period: </b> {store.planets[index].rotation_period}
							</li>
							<li>
								<b>Orbital Period: </b> {store.planets[index].orbital_period}
							</li>
							<li>
								<b>Diameter: </b> {store.planets[index].diameter}
							</li>
							<li>
								<b>Climate: </b> {store.planets[index].climate}
							</li>
							<li>
								<b>Gravity: </b> {store.planets[index].gravity}
							</li>
							<li>
								<b>Terrain: </b> {store.planets[index].terrain}
							</li>
							<li>
								<b>Surface Water: </b> {store.planets[index].surface_water}
							</li>
							<li>
								<b>Population: </b> {store.planets[index].population}
							</li>
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 align-self-center pt-4">
						<Link to="/planets" className="btn btn-outline-secondary btn-lg">
							<span>Go Back</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
PlanetDetails.propTypes = {
	match: PropTypes.object
};
