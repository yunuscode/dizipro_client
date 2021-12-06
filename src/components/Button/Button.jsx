import "./Button.scss";

export default function Button(props) {
	return (
		<button {...props} className={`button ` + (props.className || "")}>
			{props.children}
		</button>
	);
}
