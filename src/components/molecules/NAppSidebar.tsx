"use client";

import { logo } from "@/assets/brand/logo";
import { sygnet } from "@/assets/brand/sygnet";
import menuDeNavegacao from '@/assets/data/menuDeNavegacao';
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import CIcon from '@coreui/icons-react';
import {
	CCloseButton,
	CSidebar,
	CSidebarBrand,
	CSidebarFooter,
	CSidebarHeader,
	CSidebarToggler
} from '@coreui/react';
import NAppSidebarNav from './NAppSidebarNav';

export default function NAppSidebar() {

	const dispatch = useAppDispatch();
	const sidebarUnfoldable = useAppSelector((state) => state.sidebarUnfoldable);
	const sidebarVisible = useAppSelector((state) => state.sidebarVisible);

	return (
		<CSidebar
			className="border-end"
			colorScheme="dark"
			position="fixed"
			unfoldable={sidebarUnfoldable}
			visible={sidebarVisible}
			onVisibleChange={visible => dispatch({ type: "set", sidebarVisible: visible })}
		>
			<CSidebarHeader className="border-bottom">
				<CSidebarBrand href="/">
					<CIcon customClassName="sidebar-brand-full" icon={logo} height={32} />
					<CIcon customClassName="sidebar-brand-narrow" icon={sygnet} height={32} />
				</CSidebarBrand>
				<CCloseButton
					className="d-lg-none"
					dark
					onClick={() => dispatch({ type: 'set', sidebarVisible: false })}
				/>
			</CSidebarHeader>
			<NAppSidebarNav items={menuDeNavegacao} />
			<CSidebarFooter className="border-top d-none d-lg-flex">
				<CSidebarToggler
					onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !sidebarUnfoldable })}
				/>
			</CSidebarFooter>
		</CSidebar>
	)
}
