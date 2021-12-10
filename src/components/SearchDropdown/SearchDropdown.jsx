import "./SearchDropdown.scss";
import React from "react";

export default function SearchDropdown({ setSearchOpened, opened, ...props }) {
	const [data, setData] = React.useState([
		{
			title: "3D MAX",
		},
	]);

	return (
		<div className="search-dropdown">
			<input
				type="text"
				className={`search-dropdown__input ${
					opened ? "open" : "close"
				}`}
				{...props}
			/>
			<div
				onClick={(e) => {
					console.log(opened);
					setSearchOpened(!opened);
				}}
				className="search-dropdown__background"
			></div>
		</div>
	);
}
