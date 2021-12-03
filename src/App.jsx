import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import CheckYourEmail from "./pages/CheckYourEmail/CheckYourEmail";

function App() {
	return (
		<BrowserRouter>
			<CheckYourEmail />
		</BrowserRouter>
	);
}

export default App;
