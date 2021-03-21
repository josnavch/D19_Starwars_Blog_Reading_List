const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: [],
			peopledetail: [],
			planets: [],
			planetdetail: [],
			starships: [],
			starshipdetail: [],
			species: [],
			speciesdetail: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			fetchPeople: async () => {
				let res = await fetch("https://swapi.dev/api/people/?format=json");
				const data = await res.json();
				setStore({ people: data.results });
			},

			fetchPeopleDetailsGET: async id => {
				let url = "https://swapi.dev/api/people/" + id + "/?format=json";
				const config = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(url, config);
				const json = await response.json();
				console.log("---json---", json);
				setStore({ peopledetail: json.results });
			},

			fetchPlanets: async () => {
				let res = await fetch("https://swapi.dev/api/planets/?format=json");
				const data = await res.json();
				setStore({ planets: data.results });
			},

			fetchPlanetDetailsGET: async id => {
				let url = "https://swapi.dev/api/planets/" + id + "/?format=json";
				const config = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(url, config);
				const json = await response.json();
				console.log("---json---", json);
				setStore({ planetdetail: json.results });
			},

			fetchStarships: async () => {
				let res = await fetch("https://swapi.dev/api/starships/?format=json");
				const data = await res.json();
				setStore({ starships: data.results });
			},
			fetchStarshipDetailsGET: async id => {
				let url = "https://swapi.dev/api/starships/" + id + "/?format=json";
				const config = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(url, config);
				const json = await response.json();
				console.log("---json---", json);
				setStore({ starshipdetail: json.results });
			},

			fetchSpecies: async () => {
				let res = await fetch("https://swapi.dev/api/species/?format=json");
				const data = await res.json();
				setStore({ species: data.results });
			},

			fetchSpeciesDetailsGET: async id => {
				let url = "https://swapi.dev/api/species/" + id + "/?format=json";
				const config = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(url, config);
				const json = await response.json();
				console.log("---json---", json);
				setStore({ speciesdetail: json.results });
			},
			setFavorites: (arr = []) => {
				setStore({
					favorites: arr
				});
			},
			addTask: title => {
				setStore({ favorites: title });
			},
			deleteTodo: id => {
				dispatcher.dispatch({
					type: "DELETE_TODO",
					id
				});
			},

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
