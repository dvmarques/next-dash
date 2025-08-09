import { CBadge, CNavLink, CSidebarNav } from '@coreui/react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

export const NAppSidebarNav = ({ items }) => {
	const navLink = (name, icon, badge, indent = false) => {
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

	const navItem = (item, index, indent = false) => {
		const { component, name, badge, icon, ...rest } = item
		const Component = component
		return (
			<Component as="div" key={index}>
				{rest.to || rest.href ? (
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

	const navGroup = (item, index) => {
		const { component, name, icon, items, to, ...rest } = item
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

NAppSidebarNav.propTypes = {
	items: PropTypes.arrayOf(PropTypes.any).isRequired,
}
