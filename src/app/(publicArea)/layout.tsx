"use client";

import { useColorModes } from '@coreui/react';

interface LoggedAreaLayoutProps {
	children: React.ReactNode;
}

export default function LoggedAreaLayout({ children }: LoggedAreaLayoutProps) {
	// aplica o tema
	useColorModes('coreui-free-react-admin-template-theme')

	return (
		<>
			{children}
		</>
	)
}