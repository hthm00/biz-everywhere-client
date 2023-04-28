import Home from "./Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NewBusiness from "./business/containers/NewBusiness";
import Business from "./business/containers/Business";
import EditBusiness from "./business/containers/EditBusiness";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/businesses" element={<Home />} />
				<Route path="/businesses/new" element={<NewBusiness />} />
				<Route path="/businesses/:id" element={<Business />} />
				<Route path="/businesses/:id/edit" element={<EditBusiness />} />
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
