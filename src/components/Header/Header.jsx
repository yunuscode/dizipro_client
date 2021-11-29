import "./Header.scss";
import Logo from "../../assets/images/logo.png";

export default function Header() {
	return (
		<header className="header">
			<div className="container">
				<img src={Logo} alt="Logo" />
				<select
					name="languages"
					id="languages"
					className="header__language-select-element"
				>
					<option value="ru">RU</option>
				</select>
			</div>
		</header>
	);
}
