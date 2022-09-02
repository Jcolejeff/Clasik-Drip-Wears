export const formatPrice = (number) => {
	const newNumber = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "NGN",
	}).format(number);
	return newNumber;
};

export const getUniqueValues = (data, type) => {
	let unique = data.map((item) => {
		let value = item[type];
		if (type == "colors") {
			return value.map((color) => color.toLowerCase());
		} else {
			return value.toLowerCase();
		}
	});
	if (type === "colors") {
		unique = unique.flat();
	}
	return ["all", ...new Set(unique)];
};
