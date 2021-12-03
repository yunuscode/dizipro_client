import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Registration from "./pages/Registration/Registration";

function App() {
	return (
		<BrowserRouter>
			<Registration />
		</BrowserRouter>
	);
}

export default App;
