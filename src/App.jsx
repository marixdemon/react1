import Title from "./components/Title";
import "./App.css";
import { useState } from "react";
import Buttons from "./components/Buttons";

function App() {
	const [color, setColor] = useState("red");

	const changeColor = (e) => {
		setColor(e.target.innerText);
	};

	return (
		<div className="App">
			<Title colorProps={color} />
			<Buttons colorMethod={changeColor} />
		</div>
	);
}

export default App;
