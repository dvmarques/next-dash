import { Metadata } from "next"

export const metadata: Metadata = {
	title: 'CoreUI Free React.js Admin Template',
	description: 'CoreUI Free React.js Admin Template - Open Source Admin Template built with React.js, Next.js, and Bootstrap 5',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="pt-BR">
			<body>
				<div id="root">{children}</div>
			</body>
		</html>
	)
}