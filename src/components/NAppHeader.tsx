"use client";

import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import {
	cilBell,
	cilContrast,
	cilEnvelopeOpen,
	cilList,
	cilMenu,
	cilMoon,
	cilSun,
} from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import {
	CContainer,
	CDropdown,
	CDropdownItem,
	CDropdownMenu,
	CDropdownToggle,
	CHeader,
	CHeaderNav,
	CHeaderToggler,
	CNavItem,
	CNavLink,
	useColorModes,
} from '@coreui/react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import NAppBreadcrumb from './NAppBreadcrumb';
import NAppHeaderDropdown from './NAppHeaderDropdown';

export default function NAppHeader() {
	const headerRef = useRef<HTMLDivElement>(null)
	const { colorMode, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')

	const dispatch = useAppDispatch();
	const sidebarShow = useAppSelector((state) => state.sidebarVisible);

	useEffect(() => {
		document.addEventListener('scroll', () => {
			headerRef.current &&
				headerRef.current.classList.toggle('shadow-sm', document.documentElement.scrollTop > 0)
		})
	}, [])

	return (
		<CHeader position="sticky" className="mb-4 p-0" ref={headerRef}>
			<CContainer className="border-bottom px-4" fluid>
				<CHeaderToggler
					onClick={() => dispatch({ type: 'set', sidebarVisible: !sidebarShow })}
					style={{ marginInlineStart: '-14px' }}
				>
					<CIcon icon={cilMenu} size="lg" />
				</CHeaderToggler>
				<CHeaderNav className="d-none d-md-flex">
					<CNavItem>
						<CNavLink href="/dashboard" as={Link}>
							Dashboard
						</CNavLink>
					</CNavItem>
					<CNavItem>
						<CNavLink href="#">Users</CNavLink>
					</CNavItem>
					<CNavItem>
						<CNavLink href="#">Settings</CNavLink>
					</CNavItem>
				</CHeaderNav>
				<CHeaderNav className="ms-auto">
					<CNavItem>
						<CNavLink href="#">
							<CIcon icon={cilBell} size="lg" />
						</CNavLink>
					</CNavItem>
					<CNavItem>
						<CNavLink href="#">
							<CIcon icon={cilList} size="lg" />
						</CNavLink>
					</CNavItem>
					<CNavItem>
						<CNavLink href="#">
							<CIcon icon={cilEnvelopeOpen} size="lg" />
						</CNavLink>
					</CNavItem>
				</CHeaderNav>
				<CHeaderNav>
					<li className="nav-item py-1">
						<div className="vr h-100 mx-2 text-body text-opacity-75"></div>
					</li>
					<CDropdown variant="nav-item" placement="bottom-end">
						<CDropdownToggle caret={false}>
							{colorMode === 'dark' ? (
								<CIcon icon={cilMoon} size="lg" />
							) : colorMode === 'auto' ? (
								<CIcon icon={cilContrast} size="lg" />
							) : (
								<CIcon icon={cilSun} size="lg" />
							)}
						</CDropdownToggle>
						<CDropdownMenu>
							<CDropdownItem
								active={colorMode === 'light'}
								className="d-flex align-items-center"
								as="button"
								type="button"
								onClick={() => setColorMode('light')}
							>
								<CIcon className="me-2" icon={cilSun} size="lg" /> Light
							</CDropdownItem>
							<CDropdownItem
								active={colorMode === 'dark'}
								className="d-flex align-items-center"
								as="button"
								type="button"
								onClick={() => setColorMode('dark')}
							>
								<CIcon className="me-2" icon={cilMoon} size="lg" /> Dark
							</CDropdownItem>
							<CDropdownItem
								active={colorMode === 'auto'}
								className="d-flex align-items-center"
								as="button"
								type="button"
								onClick={() => setColorMode('auto')}
							>
								<CIcon className="me-2" icon={cilContrast} size="lg" /> Auto
							</CDropdownItem>
						</CDropdownMenu>
					</CDropdown>
					<li className="nav-item py-1">
						<div className="vr h-100 mx-2 text-body text-opacity-75"></div>
					</li>
					<NAppHeaderDropdown />
				</CHeaderNav>
			</CContainer>
			<CContainer className="px-4" fluid>
				<NAppBreadcrumb />
			</CContainer>
		</CHeader>
	)
}
