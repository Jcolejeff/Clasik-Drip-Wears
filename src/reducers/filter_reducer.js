import {
	LOAD_PRODUCTS,
	SET_LISTVIEW,
	SET_GRIDVIEW,
	UPDATE_SORT,
	SORT_PRODUCTS,
	UPDATE_FILTERS,
	FILTER_PRODUCTS,
	CLEAR_FILTERS,
} from "../actions";


const filter_reducer = (state, action) => {
	// created  a new array so we don't reference the same array for both state values
	if (action.type === LOAD_PRODUCTS) {
		let maxPrice = action.payload.map((p) => {
		
			return p.price;

		});
		maxPrice = Math.max(...maxPrice);
		return {
			...state,
			all_products: [...action.payload],
			filtered_products: [...action.payload],
			filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
		};
	}
	if (action.type === SET_LISTVIEW) {
		return {
			...state,
			grid_view: false,
		};
	}
	if (action.type === SET_GRIDVIEW) {
	
		return {
			...state,
			grid_view: true,
		};
	}
	if (action.type === UPDATE_SORT) {
		return {
			...state,
			sort: action.payload,
		};
	}
	if (action.type === SORT_PRODUCTS) {
		
		const { sort, filtered_products } = state;
		let tempProducts = [...filtered_products];

		if (sort === "price-lowest") {
			// 
			tempProducts = tempProducts.sort((a, b) => {
				// if the function returns a negative number, a is placed before b ,but if it returns a positive number, b is placed before a
				if (a.price < b.price) {
					return -1;
				}
				if (a.price > b.price) {
					return 1;
				}
				return 0;
			});
		}
		if (sort === "price-highest") {
			// if the function returns a positive number, b is placed before a ,but if it returns a negative number, a is placed before b
			tempProducts = tempProducts.sort((a, b) => b.price - a.price);
		}
		if (sort === "name-a") {
			tempProducts = tempProducts.sort((a, b) => a.name.localeCompare(b.name));
		}
		if (sort === "name-z") {
			tempProducts = tempProducts.sort((a, b) => b.name.localeCompare(a.name));
		}
		return { ...state, filtered_products: tempProducts };
	}
	if (action.type === UPDATE_FILTERS) {
		const { name, value } = action.payload;
		return { ...state, filters: { ...state.filters, [name]: value } };
	}
	if (action.type === FILTER_PRODUCTS) {
		const { all_products } = state;
		let tempProducts = [...all_products];
		const { text, category, brand, color, price, shipping } = state.filters;
		if (text) {
			tempProducts = tempProducts.filter((product) => {
				return product.name.toLowerCase().includes(text.toLowerCase());
			});
		}
		// category filter
		if (category !== "all") {
			tempProducts = tempProducts.filter((product) => {
				return product.category.toLowerCase() === category;
			});
		}
		if (brand !== "all") {
			tempProducts = tempProducts.filter((product) => {
				return product.brand.toLowerCase() === brand;
			});
		}
		// color filter
		if (color !== "all") {
			tempProducts = tempProducts.filter((product) => {
				return product.colors.find((c) => c.toLowerCase() === color);
			});
		}
		// price filter
		tempProducts = tempProducts.filter((product) => product.price <= price);
		// shipping filter
		if (shipping) {
			tempProducts = tempProducts.filter(
				(product) => product.shipping === true
			);
		}
		return { ...state, filtered_products: tempProducts };
	}
	if (action.type === CLEAR_FILTERS) {
		return {
			...state,
			filters: {
				...state.filters,
				text: "",
				category: "all",
				brand: "all",
				color: "all",
				price: state.filters.max_price,
				shipping: false,
			},
		};
	}
	throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
