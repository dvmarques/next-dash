import { configureStore } from '@reduxjs/toolkit';

const initialState = {
	sidebarVisible: true,
	sidebarUnfoldable: false,
	theme: 'light',
};

const changeState = (state = initialState, { type, ...rest }: any) => {
	switch (type) {
		case 'set':
			return { ...state, ...rest };
		default:
			return state;
	}
};

export const makeStore = () => {
	return configureStore({
		reducer: changeState,
	})
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
