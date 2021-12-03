import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import CheckYourEmail from "./pages/CheckYourEmail/CheckYourEmail";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/login" component={Login} exact />
				<Route path="/registration" component={Registration} exact />
				<Route
					path="/checkyouremail"
					component={CheckYourEmail}
					exact
				/>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
