import { NCButton } from "@/components/atoms/NCAtoms";
import { CCard, CCardBody, CCardFooter, CCardHeader, CCardText, CCardTitle } from "@coreui/react";
import Link from "next/link";

export default function ClientePage() {
	return (
		<CCard>
			<CCardHeader as="h3">Cliente 123</CCardHeader>
			<CCardBody>
				<CCardTitle>Special title treatment</CCardTitle>
				<CCardText>
					With supporting text below as a natural lead-in to additional content.
				</CCardText>
				<CCardText>
					With supporting text below as a natural lead-in to additional content.
				</CCardText>
			</CCardBody>
			<CCardFooter>
				<NCButton color="primary" href="#" as={Link}>
					Go somewhere
				</NCButton>
			</CCardFooter>
		</CCard>
	);
}