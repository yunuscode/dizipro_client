import "./SearchDropdown.scss";
import React from "react";
import { Link } from "react-router-dom";
import ArrowImage from "../../assets/icons/arrow.png";

export default function SearchDropdown({ setSearchOpened, opened, ...props }) {
	const [data, setData] = React.useState([]);

	const handleKeyUp = (e) => {
		if (e.target.value.length > 0) {
			setData([
				{
					title: "3D MAX",
					link: "/filter",
				},
				{
					title: "3D MAX",
					link: "/filter",
				},
			]);
		}
	};

	return (
		<div className="search-dropdown">
			<input
				onKeyUp={handleKeyUp}
				type="text"
				className={`search-dropdown__input ${
					opened ? "open" : "close"
				}`}
				{...props}
			/>

			<ul className="search-dropdown__list">
				{data.length === 0 && <p>Type something</p>}
				{data.map((item, index) => {
					return (
						<li key={index} className="search-dropdown__item">
							<Link to={item.link}>{item.title}</Link>
							<img src={ArrowImage} alt="Arrow" />
						</li>
					);
				})}
			</ul>

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
