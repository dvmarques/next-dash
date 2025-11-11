import { CContainer, CSpinner } from '@coreui/react'
import { Suspense } from 'react'

interface NAppContentProps {
	children?: React.ReactNode
}

export default function NAppContent({ children }: NAppContentProps) {
	return (
		<CContainer fluid className="px-4">
			<Suspense fallback={<CSpinner color="primary" />}>
				{children}
			</Suspense>
		</CContainer>
	)
}
