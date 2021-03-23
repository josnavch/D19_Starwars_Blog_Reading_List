import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import STWImage from "../../img/starwars-icon-7.jpg";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	function CountFav() {
		let x = store.favorites.length;
		return x;
	}

	const ListFavorites = store.favorites.map((fav, index) => {
		return (
			<a
				href="#"
				className="dropdown-item list-group-item-action"
				onClick={() => {
					actions.delFavorite(fav.name);
				}}
				key={index}
				id={index}>
				{fav.name}
				&nbsp;&nbsp;
				<i className="fa fa-trash" />
			</a>
		);
	});
	return (
		<div className="container">
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<img src={STWImage} width="60" height="60" alt="" />
				</Link>
				<a className="nav-link">
					<Link to="/people">Character</Link>
				</a>
				<a className="nav-link">
					<Link to="/planets">Planets</Link>
				</a>
				<a className="nav-link">
					<Link to="/starships">Starships</Link>
				</a>
				<a className="nav-link">
					<Link to="/species">Species</Link>
				</a>
				<div className="ml-auto">
					<div className="btn-group">
						<button
							type="button"
							className="btn btn-primary dropdown-toggle"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Favorites <span className="badge badge-light"> {CountFav()} </span>
						</button>
						<div className="dropdown-menu">{ListFavorites}</div>
					</div>
				</div>
			</nav>
		</div>
	);
};
