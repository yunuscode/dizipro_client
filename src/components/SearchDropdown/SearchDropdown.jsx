import "./SearchDropdown.scss";

export default function SearchDropdown(props) {
	return (
		<div className="search-dropdown">
			<input
				type="text"
				className={`search-dropdown__input ${
					props.opened ? "open" : "close"
				}`}
				{...props}
			/>
		</div>
	);
}
