import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";
import { bindActionCreators } from "redux";

import Errorimage from "../../img/Not_picture_found.jpg";

export const Planetdetails = props => {
	const [planetdetails, setPlanetsDetails] = useState([]);
    const { store, actions } = useContext(Context);

	return (
		<div className="jumbotron">
            {() => actions.fetchPlanetDetails(props.id)};
            {store.planets.map((item, index) => {
                return (
                    <h1 className="display-4">This will show the demo element: {item.name}</h1>
                );
            })}

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Planetdetails.propTypes = {
	match: PropTypes.object
};
