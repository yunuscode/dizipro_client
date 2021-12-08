import React from "react";
import { Link } from "react-router-dom";
import NotificationIcon from "../../assets/icons/notification";
import SearchIcon from "../../assets/icons/search";
import Input from "../Input/Input";
import SearchDropdown from "../SearchDropdown/SearchDropdown";
import "./HomeHeader.scss";

export default function HomeHeader() {
	const [searchOpened, setSearchOpened] = React.useState(false);

	return (
		<header className="home-header">
			<h2 className="home-header__title">Project</h2>

			<ul className="home-header__actions-list">
				<li
					className={`home-header__actions-item ${
						searchOpened ? "open" : "close"
					}`}
				>
					<SearchDropdown
						opened={searchOpened}
						placeholder="Search"
					/>
					<button
						onClick={() => setSearchOpened(!searchOpened)}
						className="home-header__action-link"
					>
						<SearchIcon />
					</button>
				</li>
				<li className="home-header__actions-item">
					<button className="home-header__action-link">
						<NotificationIcon />
					</button>
				</li>
				<li className="home-header__actions-item">
					<button className="home-header__action-link">
						<img
							className="home-header__action-profile-img"
							src="https://picsum.photos/30"
							alt="Profile img"
						/>
					</button>
				</li>
			</ul>
		</header>
	);
}
