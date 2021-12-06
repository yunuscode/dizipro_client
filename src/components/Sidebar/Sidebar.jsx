import "./Sidebar.scss";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import ProfileIcon from "../../assets/icons/profile";
import DashboardIcon from "../../assets/icons/dashboard";
import OrderProjectIcon from "../../assets/icons/order_project";
import PaymentsIcon from "../../assets/icons/payments";

export default function Sidebar() {
	return (
		<aside className="sidebar">
			<img src={Logo} alt="" className="sidebar__logo" />

			<ul className="sidebar__route-list">
				<li className="sidebar__route-item">
					<Link>
						<DashboardIcon className="sidebar__route-item__icon" />
					</Link>
				</li>

				<li className="sidebar__route-item">
					<Link>
						<OrderProjectIcon className="sidebar__route-item__icon" />
					</Link>
				</li>

				<li className="sidebar__route-item">
					<Link>
						<PaymentsIcon className="sidebar__route-item__icon" />
					</Link>
				</li>

				<li className="sidebar__route-item">
					<Link>
						<ProfileIcon className="sidebar__route-item__icon" />
					</Link>
				</li>
			</ul>
		</aside>
	);
}
