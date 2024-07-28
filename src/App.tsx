import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import SynthPage from "./pages/SynthPage";
import DebuggerPage from "./pages/DebuggerPage";
import OscBuilderPage from "./pages/OscBuilderPage";

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<SynthPage />} />
					<Route path="/osc" element={<OscBuilderPage />} />
					<Route path="/debug" element={<DebuggerPage />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
