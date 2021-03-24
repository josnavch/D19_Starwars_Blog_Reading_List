import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/cards.scss";

import Errorimage from "../../img/Not_picture_found.jpg";

export const People = () => {
	const [] = useState([]);
	const { store, actions } = useContext(Context);

	function getId(url) {
		const imgURL = "https://starwars-visualguide.com/assets/img/characters/";
		let str1 = url.split("/")[url.split("/").length - 2];
		let str2 = ".jpg";
		let url2 = imgURL.concat(str1, str2);
		return url2;
	}

	function getpeopleId(url) {
		const str1 = url.split("/")[url.split("/").length - 2];
		return str1;
	}

	return (
		<div className="container">
			<h1 className="title">Character</h1>
			<div className="row flex-row flex-nowrap overflow-auto">
				{() => actions.fetchPeople()}
				{store.people.map(item => {
					return (
						<div className="card col-sm-4" key={item.name} style={{ width: "18rem" }}>
							<img
								src={getId(item.url)}
								className="card-img-top "
								onError={e => ((e.target.onerror = null), (e.target.src = Errorimage))}
							/>
							<div className="card-body">
								<h4 className="card-title">{item.name}</h4>
							</div>
							<ul className="list-group list-group-flush">
								<li className="list-group-item">
									<strong>Gender: </strong>
									{item.gender}
								</li>
								<li className="list-group-item">
									<strong>Hair Color: </strong>
									{item.hair_color}
								</li>
								<li className="list-group-item">
									<strong>Eyes Color: </strong>
									{item.eye_color}
								</li>
							</ul>
							<div className="card-body">
								<Link
									className="btn btn-outline-success float-left"
									to={"/peopledetails/" + getpeopleId(item.url)}>
									Lean more: {item.name}
								</Link>
								{"   "}
								<button
									className="btn btn-outline-secondary far fa-heart float-right"
									onClick={() => actions.addFavorites(item.name, "people")}
								/>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

People.propTypes = {
	data: PropTypes.node.isRequired
};
