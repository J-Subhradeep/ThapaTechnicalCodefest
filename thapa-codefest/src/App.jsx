import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Landing />,
	},
	{
		path: "*",
		element: <div>Error!</div>,
	},
]);
function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
