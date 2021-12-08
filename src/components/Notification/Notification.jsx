import "./Notification.scss";
import SuccessIcon from "./../../assets/icons/success.png";

export default function Notification(props) {
	return (
		<div
			className="notification"
			data-open={`${props.opened ? "open" : "close"}`}
		>
			<h3 className="notification__title">Notifications</h3>

			<ul className="notification__list">
				<li className="notification__item">
					<div className="notification__item__header">
						<img src={SuccessIcon} alt="Success icon" />
						<h4 className="notification__item__header__title">
							Your request has been accepted
						</h4>
						<time className="notification__item__header__time">
							Today, 17:19
						</time>
					</div>
					<p className="notification__item__text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Natus necessitatibus laboriosam et cum quos inventore
						molestiae autem ex officiis dolorem.
					</p>
				</li>
			</ul>
		</div>
	);
}
