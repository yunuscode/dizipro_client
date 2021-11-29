import Header from "../../components/Header/Header";
import "./Login.scss";
import BeeImage from "../../assets/images/bee.png";

export default function Login() {
	return (
		<div className="login">
			<Header />
			<section className="login__main-section">
				<img className="login__bee-image" src={BeeImage} alt="" />
				<form className="login__form">
					<h2 className="login__title">Log in</h2>
				</form>
			</section>
		</div>
	);
}
