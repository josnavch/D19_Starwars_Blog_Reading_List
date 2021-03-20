import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";
import { bindActionCreators } from "redux";

import Errorimage from "../../img/Not_picture_found.jpg";

export const Species = ({ data }) => {
	const [species, setSpecies] = useState([]);
	const { store, actions } = useContext(Context);

	function getId(url) {
		const imgURL = "https://starwars-visualguide.com/assets/img/species/";
		let str1 = url.split("/")[url.split("/").length - 2];
		let str2 = ".jpg";
		let url2 = imgURL.concat(str1, str2);
		return url2;
	}

	return (
		<div className="container">
			<h1>Species</h1>
			<div className="row flex-row flex-nowrap overflow-auto">
				{() => actions.fetchSpecies()}
				{store.species.map((item, index) => {
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
									<strong>Classification: </strong>
									{item.classification}
								</li>
								<li className="list-group-item">
									<strong>Skin Colors: </strong>
									{item.skin_colors}
								</li>
								<li className="list-group-item">
									<strong>Language: </strong>
									{item.language}
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

Species.propTypes = {
	data: PropTypes.node.isRequired
};
