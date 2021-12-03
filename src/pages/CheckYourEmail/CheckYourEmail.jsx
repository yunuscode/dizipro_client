import Header from "../../components/Header/Header";
import "./CheckYourEmail.scss";
import BeeImage from "../../assets/images/bee.png";

export default function CheckYourEmail() {
	return (
		<div className="checkyouremail">
			<Header />
			<section className="checkyouremail__main-section">
				<img
					className="checkyouremail__bee-image"
					src={BeeImage}
					alt=""
				/>
				<div className="checkyouremail__form-wrapper">
					<form className="checkyouremail__form">
						<h2 className="checkyouremail__title">
							We almost finished
						</h2>

						<div className="checkyouremail__form__inputs">
							<p className="checkyouremail__text">
								Check your email, We have sent you the necessary
								instructions to recover your password
							</p>
						</div>
					</form>
				</div>
			</section>
		</div>
	);
}
