import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/cards.scss";

import Errorimage from "../../img/Not_picture_found.jpg";

export const PeopleDetails = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	//console.log(params.id);

	//console.log(store.people);

	let index = params.id - 1;
	//console.log(index);

	function getImageId(url) {
		const imgURL = "https://starwars-visualguide.com/assets/img/characters/";
		let str1 = url.split("/")[url.split("/").length - 2];
		let str2 = ".jpg";
		let url2 = imgURL.concat(str1, str2);
		return url2;
	}

	return (
		<div>
			<div className="container">
				<div className="row">
					<div className="col-md-12 align-self-center pb-4 title">
						<h2>{store.people[index].name}</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-ms align-self-center pb-2">
						<img
							src={getImageId(store.people[index].url)}
							className="card-img-top"
							onError={e => ((e.target.onerror = null), (e.target.src = Errorimage))}
						/>
					</div>
					<div className="col-ms align-self-center pb-2 title">
						<ul>
							<li>
								<b>Height: </b> {store.people[index].height}
							</li>
							<li>
								<b>Mass: </b> {store.people[index].mass}
							</li>
							<li>
								<b>Hair color: </b> {store.people[index].hair_color}
							</li>
							<li>
								<b>Skin color: </b> {store.people[index].skin_color}
							</li>
							<li>
								<b>Eye color: </b> {store.people[index].eye_color}
							</li>
							<li>
								<b>Birth year: </b> {store.people[index].birth_year}
							</li>
							<li>
								<b>Gender: </b> {store.people[index].gender}
							</li>
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 align-self-center pt-4">
						<Link to="/people" className="btn btn-outline-warning btn-lg">
							<span>Go Back</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

PeopleDetails.propTypes = {
	match: PropTypes.object
};
