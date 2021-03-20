import React from "react";
import { Link } from "react-router-dom";

import STWImage from "../../img/starwars-icon-7.jpg";

export const Navbar = () => {
	return (
		<div className="container">
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<img src={STWImage} width="60" height="60" alt="" />
				</Link>
				<a className="nav-link">
					<Link to="/people">People</Link>
				</a>
				<a className="nav-link">
					<Link to="/planets">Planets</Link>
				</a>
				<a className="nav-link">
					<Link to="/starships">Starships</Link>
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
								<a className="dropdown-item" href="#">
									People
								</a>
								<a className="dropdown-item">
									<Link to="/planets">Planets</Link>
								</a>

								<a className="dropdown-item" href="#">
									Starships
								</a>
							</div>
						</div>
					</Link>
				</div>
			</nav>
		</div>
	);
};
