import React, {useEffect} from 'react'

const IndexPage = () => {
	useEffect(() => {
		if (typeof window !== `undefined`) window.location.replace(`/teal`)
	}, [])

	return <></>
}

export default IndexPage
