import React, { Children, isValidElement, cloneElement, useEffect } from 'react'

const Theme = ({ theme, children }) => {
	const childrenWithTheme = Children.map(children, child => {
		if (isValidElement(child)) {
			return cloneElement(child, { theme })
		}

		return child
	})

	useEffect(() => {
		if (document) document.body.className = theme
	}, [])

	return <>{childrenWithTheme}</>
}

export default Theme
