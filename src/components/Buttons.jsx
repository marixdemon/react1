const Buttons = (props) => {
	return (
		<div className="buttons">
			<button onClick={(e) => props.colorMethod(e)}>red</button>
			<button onClick={(e) => props.colorMethod(e)}>blue</button>
			<button onClick={(e) => props.colorMethod(e)}>green</button>
		</div>
	);
};

export default Buttons;
