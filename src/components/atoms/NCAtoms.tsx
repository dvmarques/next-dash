"use client";

import CIcon from "@coreui/icons-react";
import { CButton, CFormInput, CInputGroup, CInputGroupText } from "@coreui/react";

/**
 * Envelopa os  componentes do CoreUI em uma camada de "use client" quando necessário.
 */

export function NCButton({ children, ...props }: React.ComponentProps<typeof CButton>) {
	return (
		<CButton {...props}>
			{children}
		</CButton>
	);
}

export function NCFormInput({ ...props }: React.ComponentProps<typeof CFormInput>) {
	return (
		<CFormInput {...props} />
	);
}

export function NCIcon({ ...props }: React.ComponentProps<typeof CIcon>) {
	return (
		<CIcon {...props} suppressHydrationWarning={true} />
	);
}

export function NCInputGroup({ children, ...props }: React.ComponentProps<typeof CInputGroup>) {
	return (
		<CInputGroup {...props}>
			{children}
		</CInputGroup>
	);
}

export function NCInputGroupText({ children, ...props }: React.ComponentProps<typeof CInputGroupText>) {
	return (
		<CInputGroupText {...props}>
			{children}
		</CInputGroupText>
	);
}
