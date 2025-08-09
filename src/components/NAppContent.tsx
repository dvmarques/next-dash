import { CContainer, CSpinner } from '@coreui/react'
import { Suspense } from 'react'

export default function NAppContent() {
	return (
		<CContainer className="px-4" lg>
			<Suspense fallback={<CSpinner color="primary" />}>
				AAAA
			</Suspense>
		</CContainer>
	)
}
