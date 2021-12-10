import "./Sidebar.scss";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import ProfileIcon from "../../assets/icons/profile";
import DashboardIcon from "../../assets/icons/dashboard";
import OrderProjectIcon from "../../assets/icons/order_project";
import PaymentsIcon from "../../assets/icons/payments";
import SupportIcon from "../../assets/icons/support";
import Button from "../Button/Button";
import Alert from "../Alert/Alert";

export default function Sidebar() {
	return (
		<aside className="sidebar">
			<img src={Logo} alt="" className="sidebar__logo" />

			<ul className="sidebar__route-list">
				<li className="sidebar__route-item active">
					<Link to="/">
						<DashboardIcon className="sidebar__route-item__icon" />
						<p className="sidebar__route-item__title">Dashboard</p>
					</Link>
				</li>

				<li className="sidebar__route-item">
					<Link to="/">
						<OrderProjectIcon className="sidebar__route-item__icon" />
						<p className="sidebar__route-item__title">
							Order a project
						</p>
					</Link>
				</li>

				<li className="sidebar__route-item">
					<Link to="/">
						<PaymentsIcon className="sidebar__route-item__icon" />
						<p className="sidebar__route-item__title">Payments</p>
					</Link>
				</li>

				<li className="sidebar__route-item">
					<Link to="/">
						<ProfileIcon className="sidebar__route-item__icon" />
						<p className="sidebar__route-item__title">Profile</p>
					</Link>
				</li>
			</ul>

			<Alert>
				<p>Salom siz chegirmaga ulgurib qoling.</p>
			</Alert>

			<Button className="sidebar__support-button">
				<SupportIcon className="sidebar__support-button" />
				<p>Support</p>
			</Button>
		</aside>
	);
}
