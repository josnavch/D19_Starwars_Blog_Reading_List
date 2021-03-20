import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import STWImage from "../../img/starwars-icon-7.jpg";

export const Navbar = () => {
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
					<Link to="/demo">
						<div className="btn-group">
							<button
								type="button"
								className="btn btn-primary dropdown-toggle"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								Favorites <span className="badge badge-light"> 4 </span>
							</button>
							<div className="dropdown-menu">
								<li className="list-group-item fas fa-minus-circle ">R2R2</li>
								<li className="list-group-item fas fa-minus-circle ">ObiWan</li>
							</div>
						</div>
					</Link>
				</div>
			</nav>
		</div>
	);
};
