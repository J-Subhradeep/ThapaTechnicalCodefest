import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: -1,
};

export const MenudropdowniconSlice = createSlice({
	name: "MenudropdowniconSlice",
	initialState,
	reducers: {
		selectMenu: (state, action) => {
			state.value = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { selectMenu } = MenudropdowniconSlice.actions;

export default MenudropdowniconSlice.reducer;
