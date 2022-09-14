import { configureStore } from "@reduxjs/toolkit";
import MenudropdowniconSlice from "../Components/Navbar/Slices/MenudropdowniconSlice";

export const store = configureStore({
	reducer: {
		menuSelect: MenudropdowniconSlice,
	},
});
