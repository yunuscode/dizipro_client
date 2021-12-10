import React from "react";
import NotificationIcon from "../../assets/icons/notification";
import SearchIcon from "../../assets/icons/search";
import Notification from "../Notification/Notification";
import SearchDropdown from "../SearchDropdown/SearchDropdown";
import "./HomeHeader.scss";
import Logo from "../../assets/images/logo.png";

export default function HomeHeader() {
	const [searchOpened, setSearchOpened] = React.useState(false);
	const [notificationOpened, setNotificationOpened] = React.useState(false);

	return (
		<header className="home-header">
			<h2 className="home-header__title">Project</h2>
			<img src={Logo} alt="" className="home-header__logo" />

			<ul className="home-header__actions-list">
				<li
					className={`home-header__actions-item ${
						searchOpened ? "open" : "close"
					}`}
				>
					<SearchDropdown
						opened={searchOpened}
						setSearchOpened={setSearchOpened}
						placeholder="Search"
					/>
					<button
						onClick={() => setSearchOpened(!searchOpened)}
						className="home-header__action-link"
					>
						<SearchIcon />
					</button>
				</li>
				<li className="home-header__actions-item home-header__actions-item-notification">
					<button
						onClick={() =>
							setNotificationOpened(!notificationOpened)
						}
						className="home-header__action-link"
					>
						<NotificationIcon />
					</button>
					<Notification opened={notificationOpened} />
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
