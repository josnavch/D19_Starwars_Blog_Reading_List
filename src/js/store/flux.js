const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
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

			addFavorites: (name, type) => {
				const store = getStore();
				let flag = 0;
				store.favorites.map(each => {
					if (each.name == name) {
						flag = 1;
					}
				});
				if (flag == 0) {
					setStore({ favorites: [...store.favorites, { name: name, type: type }] });
					//	console.log(store.favorites.length);
				}
			},

			delFavorite: name => {
				const store = getStore();
				//			console.log(name);
				let newFavorites = store.favorites.filter(fav => fav.name != name);
				//			console.log(newFavorites);
				//			console.log(store.favorites);
				setStore({ favorites: newFavorites });
				//			console.log(store.favorites);
			},

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */
			}
		}
	};
};

export default getState;
