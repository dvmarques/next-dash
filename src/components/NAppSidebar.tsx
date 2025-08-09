"use client";

import CIcon from '@coreui/icons-react';
import {
	CCloseButton,
	CNavItem,
	CSidebar,
	CSidebarBrand,
	CSidebarFooter,
	CSidebarHeader,
	CSidebarToggler,
} from '@coreui/react';

import { NAppSidebarNav } from './NAppSidebarNav';

import { logo } from "@/assets/brand/logo";
import { sygnet } from "@/assets/brand/sygnet";

// sidebar nav config
import menuDeNavegacao from '@/assets/data/menuDeNavegacao';
import { cilSpeedometer } from '@coreui/icons';

const navx = [
	{
		component: CNavItem,
		name: 'Dashboard',
		href: '/dashboard',
		icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
		badge: {
			color: 'info',
			text: 'NEW',
		},
	},
];

export default function NAppSidebar() {
	return (
		<CSidebar
			className="border-end"
			colorScheme="dark"
			position="fixed"
		>
			<CSidebarHeader className="border-bottom">
				<CSidebarBrand>
					<CIcon customClassName="sidebar-brand-full" icon={logo} height={32} />
					<CIcon customClassName="sidebar-brand-narrow" icon={sygnet} height={32} />
				</CSidebarBrand>
				<CCloseButton
					className="d-lg-none"
					dark
				/>
			</CSidebarHeader>
			<NAppSidebarNav items={menuDeNavegacao} />
			<CSidebarFooter className="border-top d-none d-lg-flex">
				<CSidebarToggler />
			</CSidebarFooter>
		</CSidebar>
	)
}
