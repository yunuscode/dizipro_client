import "./Alert.scss";
import CloseImage from "./../../assets/icons/close.png";
import React from "react";

export default function Alert({ children }) {
	const [closed, setClosed] = React.useState(false);

	if (closed) {
		return <></>;
	}

	return (
		<div className="alert">
			{children}

			<button
				onClick={() => setClosed(true)}
				className="alert__close-button"
			>
				<img
					className="alert__close-button__img"
					src={CloseImage}
					alt="Close button"
				/>
			</button>
		</div>
	);
}
