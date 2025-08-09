import { CContainer, CSpinner } from '@coreui/react'
import { Suspense } from 'react'
import AdmCard from '@/components/organisms/AdmCard'

export default function NAppContent() {
	return (
		<CContainer fluid className="px-4">
			<Suspense fallback={<CSpinner color="primary" />}>
				<AdmCard title="Admin Card">
					<p>This is the body content of the admin card.</p>
					<p>This is the body content of the admin card.</p>
				</AdmCard>
			</Suspense>
		</CContainer>
	)
}
