import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";

import { PeopleDetails } from "./views/peopledetails";
import { PlanetDetails } from "./views/planetdetails";
import { StarshipsDetails } from "./views/starshipsdetails";
import { SpeciesDetails } from "./views/speciesdetails";

import { People } from "./component/people";
import { Planets } from "./component/planets";
import { Starships } from "./component/starships";
import { Species } from "./component/species";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/people">
							<People />
						</Route>
						<Route path="/peopledetails/:id">
							<PeopleDetails />
						</Route>
						<Route exact path="/planets">
							<Planets />
						</Route>
						<Route path="/planetdetails/:id">
							<PlanetDetails />
						</Route>

						<Route exact path="/starships">
							<Starships />
						</Route>
						<Route path="/starshipsdetails/:id">
							<StarshipsDetails />
						</Route>
						<Route exact path="/species">
							<Species />
						</Route>
						<Route path="/speciesdetails/:id">
							<SpeciesDetails />
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
