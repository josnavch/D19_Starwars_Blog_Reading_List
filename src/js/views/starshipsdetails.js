import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";
import "../../styles/cards.scss";

import { bindActionCreators } from "redux";

import Errorimage from "../../img/Not_picture_found.jpg";

export const StarshipsDetails = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let index = params.id;

	function getImageId(url) {
		const imgURL = "https://starwars-visualguide.com/assets/img/starships/";
		let str1 = url.split("/")[url.split("/").length - 2];
		let str2 = ".jpg";
		let url2 = imgURL.concat(str1, str2);
		return url2;
	}

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12 align-self-center pb-4 title">
					<h2>{store.starships[index].name}</h2>
				</div>
			</div>
			<div className="row">
				<div className="col-ms">
					<img
						src={getImageId(store.starships[params.id].url)}
						className="card-img-top"
						onError={e => ((e.target.onerror = null), (e.target.src = Errorimage))}
					/>
				</div>
				<div className="col-ms align-self-center pb-2 title">
					<ul>
						<li>
							<b>Modelo: </b> {store.starships[index].model}
						</li>
						<li>
							<b>Manufacture: </b> {store.starships[index].manufacturer}
						</li>
						<li>
							<b>Cost in Credits: </b> {store.starships[index].cost_in_credits}
						</li>
						<li>
							<b>Length: </b> {store.starships[index].length}
						</li>
						<li>
							<b>Max Atmosphering Speed: </b> {store.starships[index].max_atmosphering_speed}
						</li>
						<li>
							<b>Crew: </b> {store.starships[index].crew}
						</li>
						<li>
							<b>Passengers: </b> {store.starships[index].passengers}
						</li>
						<li>
							<b>Cargo Capacity: </b> {store.starships[index].cargo_capacity}
						</li>
						<li>
							<b>Consumables: </b> {store.starships[index].consumables}
						</li>
						<li>
							<b>Hyperdrive Rating: </b> {store.starships[index].hyperdrive_rating}
						</li>
						<li>
							<b>MGLT: </b> {store.starships[index].MGLT}
						</li>
						<li>
							<b>Starship Class: </b> {store.starships[index].starship_class}
						</li>
					</ul>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12 align-self-center pt-4">
					<Link to="/starships" className="btn btn-outline-warning btn-lg">
						<span>Go Back</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

StarshipsDetails.propTypes = {
	match: PropTypes.object
};
