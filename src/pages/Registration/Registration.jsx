import React from "react";
import Header from "../../components/Header/Header";
import "./Registration.scss";
import BeeImage from "../../assets/images/bee.png";
import Input from "../../components/Input/Input";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import RegionsService from "../../services/RegionsService";

export default function Registration() {
	const [countries, setCountries] = React.useState([]);
	const [oCountries, setOCountries] = React.useState([]);

	const [countryError, setCountryError] = React.useState(false);

	const getCountries = async () => {
		let result = await RegionsService.GetAllRegions();

		setOCountries(result?.data?.countries);

		let sort = result?.data?.countries?.map((e) => e.country_name);
		setCountries(sort);
	};

	React.useEffect(() => {
		getCountries();

		return () => {};
	});

	const submit = (event) => {
		event.preventDefault();
		const name = event?.target[0]?.value;
		const email = event?.target[1]?.value;
		const password = event?.target[2]?.value;
		const gender = event?.target[3]?.value ? "male" : "female";
		const country = oCountries.find(
			(e) => e.country_name === event?.target[5]?.value
		);

		console.log(name, email, password, gender, country);
	};

	return (
		<div className="registration">
			<Header />
			<section className="registration__main-section">
				<img
					className="registration__bee-image"
					src={BeeImage}
					alt=""
				/>
				<div className="registration__form-wrapper">
					<form className="registration__form" onSubmit={submit}>
						<h2 className="registration__title">Sign Up</h2>

						<div className="registration__form__inputs">
							<Input
								type="text"
								placeholder="Your name"
								name="name"
								required
							/>

							<Input
								type="email"
								placeholder="Email"
								name="email"
								required
							/>

							<Input
								type="password"
								placeholder="Password"
								name="password"
								required
							/>
						</div>

						<div className="registration__gender-radio">
							<p className="registration__gender__title">
								Gender
							</p>

							<div className="registration__gender__wrapper">
								<label className="registration__gender__item">
									<input
										type="radio"
										name="gender"
										defaultChecked
									/>
									<p>Male</p>
								</label>

								<label className="registration__gender__item">
									<input type="radio" name="gender" />
									<p>Female</p>
								</label>
							</div>
						</div>

						<div className="registration__form__inputs">
							<Input
								type="text"
								placeholder="Country"
								name="country"
								required
								error={countryError ? "true" : ""}
								list="data"
								onChange={(event) => {
									if (
										!countries.find(
											(e) => e === event.target.value
										)
									) {
										setCountryError(true);
									} else {
										setCountryError(false);
									}
								}}
							/>

							<p className="registration__terms">
								By clicking Create account, I agree that I have
								read and accepted the Terms of Use and Privacy
								policy
							</p>
						</div>

						<datalist id="data">
							{countries.length &&
								countries.map((item, key) => {
									return (
										<option key={key} value={item}>
											{item}
										</option>
									);
								})}
						</datalist>

						<Button>Next</Button>

						<div className="registration__form__signup-text-wrapper">
							<p>Do you have an account? </p>

							<Link
								className="registration__form__forgot-password-link"
								to="/login"
							>
								Login
							</Link>
						</div>
					</form>
				</div>
			</section>
		</div>
	);
}
