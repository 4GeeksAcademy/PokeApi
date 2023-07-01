import React from "react";
import TheList from "./theList";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">First 20 pokemon</h1>
			<TheList/>
		</div>
	);
};

export default Home;
