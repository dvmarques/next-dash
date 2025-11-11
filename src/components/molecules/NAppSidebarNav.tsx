import { CBadge, CNavLink, CSidebarNav } from '@coreui/react'
import Link from 'next/link'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

export interface MenuItem {
	component: React.ElementType
	name: string | React.ReactNode
	href?: string
	icon?: React.ReactNode
	badge?: {
		color: string
		text: string
	}
	items?: MenuItem[]
}

export default function NAppSidebarNav({ items }: { items: MenuItem[] }) {
	const navLink = (name: string | React.ReactNode, icon: React.ReactNode, badge?: { color: string; text: string }, indent: boolean = false) => {
		return (
			<>
				{icon
					? icon
					: indent && (
						<span className="nav-icon">
							<span className="nav-icon-bullet"></span>
						</span>
					)}
				{name && name}
				{badge && (
					<CBadge color={badge.color} className="ms-auto" size="sm">
						{badge.text}
					</CBadge>
				)}
			</>
		)
	}

	const navItem = (item: MenuItem, index: number, indent = false) => {
		const { component, name, badge, icon, ...rest } = item
		const Component = component
		return (
			<Component as="div" key={index}>
				{rest.href ? (
					<CNavLink
						{...(rest.href && { as: Link })}
						{...rest}
					>
						{navLink(name, icon, badge, indent)}
					</CNavLink>
				) : (
					navLink(name, icon, badge, indent)
				)}
			</Component>
		)
	}

	const navGroup = (item: MenuItem, index: number) => {
		const { component, name, icon, items, ...rest } = item
		const Component = component
		return (
			<Component compact as="div" key={index} toggler={navLink(name, icon)} {...rest}>
				{items?.map((item, index) =>
					item.items ? navGroup(item, index) : navItem(item, index, true),
				)}
			</Component>
		)
	}

	return (
		<CSidebarNav as={SimpleBar}>
			{items &&
				items.map((item, index) => (item.items ? navGroup(item, index) : navItem(item, index)))}
		</CSidebarNav>
	)
}
