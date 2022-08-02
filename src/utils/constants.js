import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
	{
		id: 1,
		text: "home",
		url: "/",
	},
	{
		id: 2,
		text: "about",
		url: "/about",
	},
	{
		id: 3,
		text: "products",
		url: "/products",
	},
];

export const services = [
	{
		id: 3,
		icon: <GiStabbedNote />,
		title: "Best Service",
		text: " Here you have the best quality as it comes 👌🏽 at the most affordable prices with smooth and fast deliveries.🚛💨",
	},
];

export const products_url =
	"https://limitless-dusk-73909.herokuapp.com/api/clasikdrips/?populate=*";

export const single_product_url = `https://limitless-dusk-73909.herokuapp.com/api/clasikdrips/`;
