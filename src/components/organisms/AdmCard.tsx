import { CCard, CCardBody, CCardFooter, CCardHeader, CCardText, CCardTitle } from "@coreui/react";
import Link from "next/link";
import { NCButton } from "../atoms/NCAtoms";

interface AdmCardProps {
	title: string;
	children?: React.ReactNode;
}

export default function AdmCard({ title, children }: AdmCardProps) {
	return (
		<CCard>
			<CCardHeader as="h3">{title}</CCardHeader>
			<CCardBody>
				{children}
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
