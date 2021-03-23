import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import Errorimage from "../../img/Not_picture_found.jpg";

export const SpeciesDetails = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	//console.log(params.id);

	//console.log(store.species);

	let index = params.id - 1;
	//console.log(index);

	function getImageId(url) {
		const imgURL = "https://starwars-visualguide.com/assets/img/species/";
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
						<h2>{store.species[index].name}</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-ms align-self-center pb-2">
						<img
							src={getImageId(store.species[index].url)}
							className="card-img-top"
							onError={e => ((e.target.onerror = null), (e.target.src = Errorimage))}
						/>
					</div>
					<div className="col-ms align-self-center pb-2">
						<ul>
							<li>
								<b>Designation: </b> {store.species[index].designation}
							</li>
							<li>
								<b>Average Height: </b> {store.species[index].average_height}
							</li>
							<li>
								<b>Hair color: </b> {store.species[index].hair_colors}
							</li>
							<li>
								<b>Skin color: </b> {store.species[index].skin_colors}
							</li>
							<li>
								<b>Eye color: </b> {store.species[index].eye_colors}
							</li>
							<li>
								<b>Average Lifespan: </b> {store.species[index].average_lifespan}
							</li>
							<li>
								<b>Language: </b> {store.species[index].language}
							</li>
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 align-self-center pt-4">
						<Link to="/species" className="btn btn-outline-secondary btn-lg">
							<span>Go Back</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

SpeciesDetails.propTypes = {
	match: PropTypes.object
};
