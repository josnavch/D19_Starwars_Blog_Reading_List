import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { bindActionCreators } from "redux";

import "../../styles/cards.scss";

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

	function getstarshipId(url) {
		const str1 = url.split("/")[url.split("/").length - 2];
		return str1;
	}

	function findIndex(Name) {
		let flag = 0;
		let x = 0;
		store.starships.map((each, index) => {
			if (each.name == Name) {
				flag = 1;
				x = index;
			}
		});
		return x;
	}

	//console.log(store.starships);

	return (
		<div className="container">
			<h1 className="title">Starships</h1>
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
								<Link
									className="btn btn-outline-success float-left"
									to={"/starshipsdetails/" + findIndex(item.name)}>
									Lean more...
								</Link>
								{"   "}
								<button
									className="btn btn-outline-secondary far fa-heart float-right"
									onClick={() => actions.addFavorites(item.name, "starship")}
								/>
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
