import React from "react";

const AuthContext = React.createContext();

export default AuthContext;

export function AuthProvider({ children }) {
	const [token, setToken] = React.useState(
		window.localStorage.getItem("token")
	);

	React.useEffect(() => {
		if (token) {
			window.localStorage.setItem("token", token);
		} else {
			window.localStorage.removeItem("token");
		}
	}, [token]);

	return (
		<AuthContext.Provider value={{ token, setToken }}>
			<AuthContext.Consumer>{() => children}</AuthContext.Consumer>
		</AuthContext.Provider>
	);
}

export function useAuth(e) {
	const { token, setToken } = React.useContext(AuthContext);

	return [token, setToken];
}
