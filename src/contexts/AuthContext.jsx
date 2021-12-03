import React from "react";

const AuthContext = React.createContext();

export default AuthContext;

export function AuthProvider({ children }) {
	const [token, setToken] = React.useState();

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
