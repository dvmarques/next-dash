"use client";

import { Provider } from 'react-redux';
import { AppBase } from '../delme/App';
import store from '../delme/store';

export default function Home() {
	return (
		<Provider store={store}>
			<AppBase />
		</Provider>
	)
}