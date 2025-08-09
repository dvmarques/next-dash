"use client";

import { logo } from "@/assets/brand/logo";
import { sygnet } from "@/assets/brand/sygnet";
import menuDeNavegacao from '@/assets/data/menuDeNavegacao';
import CIcon from '@coreui/icons-react';
import {
	CCloseButton,
	CSidebar,
	CSidebarBrand,
	CSidebarFooter,
	CSidebarHeader,
	CSidebarToggler
} from '@coreui/react';
import { useState } from "react";
import NAppSidebarNav from './NAppSidebarNav';

export default function NAppSidebar() {
	const [sidebarVisible, setSidebarVisible] = useState(true);
	const [sidebarUnfoldable, setSidebarUnfoldable] = useState(false);

	return (
		<CSidebar
			className="border-end"
			colorScheme="dark"
			position="fixed"
			unfoldable={sidebarUnfoldable}
			visible={sidebarVisible}
		>
			<CSidebarHeader className="border-bottom">
				<CSidebarBrand href="/">
					<CIcon customClassName="sidebar-brand-full" icon={logo} height={32} />
					<CIcon customClassName="sidebar-brand-narrow" icon={sygnet} height={32} />
				</CSidebarBrand>
				<CCloseButton
					className="d-lg-none"
					dark
					onClick={() => setSidebarVisible(false)}
				/>
			</CSidebarHeader>
			<NAppSidebarNav items={menuDeNavegacao} />
			<CSidebarFooter className="border-top d-none d-lg-flex">
				<CSidebarToggler
					onClick={() => setSidebarUnfoldable(current => !current)}
				/>
			</CSidebarFooter>
		</CSidebar>
	)
}
