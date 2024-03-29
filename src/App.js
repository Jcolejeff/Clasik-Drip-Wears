import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer, ScrollToTop } from "./components";
import "react-slideshow-image/dist/styles.css";

import {
	Home,
	Products,
	SingleProduct,
	About,
	Cart,
	Error,
	Checkout,
	PrivateRoute,
	AuthWrapper,
} from "./pages";

function App() {
	return (
		<AuthWrapper>
			<Router>
				<Navbar></Navbar>
				<Sidebar></Sidebar>
				<ScrollToTop>
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="products" element={<Products />}></Route>
						<Route path="about" element={<About />}></Route>
						<Route path="cart" element={<Cart />}></Route>
						<Route path="products/:id" element={<SingleProduct />}></Route>
						<Route path="* " element={<Error />}></Route>
						<Route
							path="checkout"
							element={
								<PrivateRoute>
									<Checkout />
								</PrivateRoute>
							}
						></Route>
					</Routes>
				</ScrollToTop>
				<Footer></Footer>
			</Router>
		</AuthWrapper>
	);
}

export default App;
