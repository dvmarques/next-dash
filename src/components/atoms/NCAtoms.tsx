"use client";

/**
 * Envelopa os  componentes do CoreUI em uma camada de "use client" quando necessário.
 */

import { CButton } from "@coreui/react";

export function NCButton({ children, ...props }: React.ComponentProps<typeof CButton>) {
	return (
		<CButton {...props}>
			{children}
		</CButton>
	);
}
