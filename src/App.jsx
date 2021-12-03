import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import { AuthProvider } from "./contexts/AuthContext";
import CheckYourEmail from "./pages/CheckYourEmail/CheckYourEmail";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Switch>
					<PublicRoute path="/login" component={Login} exact />
					<PublicRoute
						path="/registration"
						component={Registration}
						exact
					/>
					<PublicRoute
						path="/checkyouremail"
						component={CheckYourEmail}
						exact
					/>

					<ProtectedRoute path="/" component={Home} exact />
				</Switch>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
