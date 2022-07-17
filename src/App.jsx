import Dashboard from "./Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Login from "./Login";
import SignUp from "./SignUp";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				|<Route path="/" element={<Homepage />} />
				|<Route path="dashboard" element={<Dashboard />} />
				<Route path="login" element={<Login />} />
				<Route path="signup" element={<SignUp />} />
			</Routes>
		</BrowserRouter>
	);
}


export default App;