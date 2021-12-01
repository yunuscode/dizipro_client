import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Login from "./pages/Login/Login";

function App() {
	return (
		<BrowserRouter>
			<Login />
		</BrowserRouter>
	);
}

export default App;
