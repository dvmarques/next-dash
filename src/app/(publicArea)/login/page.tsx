import { NCButton, NCFormInput, NCIcon, NCInputGroup } from '@/components/atoms/NCAtoms';
import { cilLockLocked, cilUser } from '@coreui/icons';
import { CCard, CCardBody, CCardGroup, CCol, CContainer, CForm, CInputGroup, CInputGroupText, CRow } from '@coreui/react';
import Link from 'next/link';

export default function LoginPage() {
	return (
		<div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
			<CContainer>
				<CRow className="justify-content-center">
					<CCol md={8}>
						<CCardGroup>
							<CCard className="p-4">
								<CCardBody>
									<CForm>
										<h1>Login</h1>
										<p className="text-body-secondary">Sign In to your account</p>
										<CInputGroup className="mb-3">
											<CInputGroupText>
												<NCIcon icon={cilUser} />
											</CInputGroupText>
											<NCFormInput placeholder="Username" autoComplete="username" />
										</CInputGroup>
										<NCInputGroup className="mb-4">
											<CInputGroupText>
												<NCIcon icon={cilLockLocked} />
											</CInputGroupText>
											<NCFormInput
												type="password"
												placeholder="Password"
												autoComplete="current-password"
											/>
										</NCInputGroup>
										<CRow>
											<CCol xs={6}>
												<NCButton color="primary" className="px-4">
													Login
												</NCButton>
											</CCol>
											<CCol xs={6} className="text-right">
												<NCButton color="link" className="px-0">
													Forgot password?
												</NCButton>
											</CCol>
										</CRow>
									</CForm>
								</CCardBody>
							</CCard>
							<CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
								<CCardBody className="text-center">
									<div>
										<h2>Sign up</h2>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua.
										</p>
										<Link href="/register">
											<NCButton color="primary" className="mt-3" active tabIndex={-1}>
												Register Now!
											</NCButton>
										</Link>
									</div>
								</CCardBody>
							</CCard>
						</CCardGroup>
					</CCol>
				</CRow>
			</CContainer>
		</div>
	)
}
