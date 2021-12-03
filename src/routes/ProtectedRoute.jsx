import { useAuth } from "../contexts/AuthContext";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute(props) {
	const [token] = useAuth();

	if (!token) {
		return <Redirect to="/login" />;
	}

	return <Route {...props} />;
}
