import StoreProvider from '@/providers/StoreProvider';
import '@/scss/style.scss';
import { Metadata } from "next";

export const metadata: Metadata = {
	title: 'Dashboard Admin',
	description: 'Dashboard Admin Next.js + CoreUI + TypeScript',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="pt-BR">
			<body>
				<div id="root">
					<StoreProvider>
						{children}
					</StoreProvider>
				</div>
			</body>
		</html>
	)
}