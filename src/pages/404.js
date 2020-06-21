import React, { useEffect } from 'react'

// 404 redirects to home

const NotFoundPage = () => {
	useEffect(() => {
		if (typeof window !== `undefined`) window.location.replace(`/`)
	}, [])

	return <></>
}

export default NotFoundPage
