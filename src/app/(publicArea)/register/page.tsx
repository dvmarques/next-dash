import { NCButton, NCFormInput, NCIcon } from '@/components/atoms/NCAtoms'
import { cilLockLocked, cilUser } from '@coreui/icons'
import {
	CCard,
	CCardBody,
	CCol,
	CContainer,
	CForm,
	CInputGroup,
	CInputGroupText,
	CRow,
} from '@coreui/react'

export default function RegisterPage() {
	return (
		<div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
			<CContainer>
				<CRow className="justify-content-center">
					<CCol md={9} lg={7} xl={6}>
						<CCard className="mx-4">
							<CCardBody className="p-4">
								<CForm>
									<h1>Register</h1>
									<p className="text-body-secondary">Create your account</p>
									<CInputGroup className="mb-3">
										<CInputGroupText>
											<NCIcon icon={cilUser} />
										</CInputGroupText>
										<NCFormInput placeholder="Username" autoComplete="username" />
									</CInputGroup>
									<CInputGroup className="mb-3">
										<CInputGroupText>@</CInputGroupText>
										<NCFormInput placeholder="Email" autoComplete="email" />
									</CInputGroup>
									<CInputGroup className="mb-3">
										<CInputGroupText>
											<NCIcon icon={cilLockLocked} />
										</CInputGroupText>
										<NCFormInput
											type="password"
											placeholder="Password"
											autoComplete="new-password"
										/>
									</CInputGroup>
									<CInputGroup className="mb-4">
										<CInputGroupText>
											<NCIcon icon={cilLockLocked} />
										</CInputGroupText>
										<NCFormInput
											type="password"
											placeholder="Repeat password"
											autoComplete="new-password"
										/>
									</CInputGroup>
									<div className="d-grid">
										<NCButton color="success">Create Account</NCButton>
									</div>
								</CForm>
							</CCardBody>
						</CCard>
					</CCol>
				</CRow>
			</CContainer>
		</div>
	)
}
