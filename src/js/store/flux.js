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
			planets: [],
			planetdetails: [],
			starships: [],
			species: [],
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
			fetchPlanets: async () => {
				let res = await fetch("https://swapi.dev/api/planets/?format=json");
				const data = await res.json();
				setStore({ planets: data.results });
			},
			fetchPlanetDetails: async id => {
				let url = "https://swapi.dev/api/planets/" + id + "/?format=json";
				console.log(url);
				let res = await fetch(url);
				const data = await res.json();
				setStore({ planetdetails: data.results });
			},
			fetchStarships: async () => {
				let res = await fetch("https://swapi.dev/api/starships/?format=json");
				const data = await res.json();
				setStore({ starships: data.results });
			},
			fetchSpecies: async () => {
				let res = await fetch("https://swapi.dev/api/species/?format=json");
				const data = await res.json();
				setStore({ species: data.results });
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
