import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";
import { bindActionCreators } from "redux";

import Errorimage from "../../img/Not_picture_found.jpg";

export const Starships = ({ data }) => {
	const [starships, setStarships] = useState([]);

	const { store, actions } = useContext(Context);

	function getId(url) {
		const imgURL = "https://starwars-visualguide.com/assets/img/starships/";
		let str1 = url.split("/")[url.split("/").length - 2];
		let str2 = ".jpg";
		let url2 = imgURL.concat(str1, str2);
		return url2;
	}
	function addNameFavorites(name) {
		const addNameFavorites = name;
		console.log("---Props---" + addNameFavorites);
		setStore({ favorites: addNameFavorites });
		console.log(store.setFavorite);
	}

	return (
		<div className="container">
			<h1>Starships</h1>
			<div className="row flex-row flex-nowrap overflow-auto">
				{() => actions.fetchStarships()}
				{store.starships.map((item, index) => {
					return (
						<div className="card col-md-4" key={item.name} style={{ width: "25rem" }}>
							<img
								src={getId(item.url)}
								className="card-img-top"
								onError={e => ((e.target.onerror = null), (e.target.src = Errorimage))}
							/>
							<div className="card-body">
								<h4 className="card-title">{item.name}</h4>
							</div>
							<ul className="list-group list-group-flush">
								<li className="list-group-item">
									<strong>Modelo: </strong>
									{item.model}
								</li>
								<li className="list-group-item">
									<strong>Manufacture: </strong>
									{item.manufature}
								</li>
								<li className="list-group-item">
									<strong>Passengers: </strong>
									{item.passengers}
								</li>
							</ul>
							<div className="card-body">
								<a href="#" className="card-link">
									Lean more
								</a>
								<a className="far fa-heart" onClick={() => addNameFavorites(item.name)} />
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

Starships.propTypes = {
	data: PropTypes.node.isRequired
};
