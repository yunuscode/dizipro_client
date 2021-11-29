import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
	useEffect(() => {
		console.log("Header yuklandi....");

		return () => {
			console.log("Xayr Header");
		};
	});

	return (
		<header>
			<h1>Sayt.uz</h1>
			<ul>
				<li>
					<Link className="superlink" to="/">
						Home
					</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
		</header>
	);
}
