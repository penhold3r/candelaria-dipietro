import React, { useEffect, useState } from 'react'
import { Navbar, Button } from 'react-bootstrap'

import logo from '../images/landing-logo.png'

const styles = {
	header: {
		position: 'sticky',
		top: 0,
	},
	container: {
		justifyContent: 'space-between',
	},
	logo: {
		height: '40px',
		objectFit: 'contain',
	},
}

const Header = () => {
	const [opaque, setOpaque] = useState(false)

	useEffect(() => {
		if (window) {
			setOpaque(window.scrollY >= 200)
			window.onscroll = () => setOpaque(window.scrollY >= 200)
		}
	}, [])

	return (
		<header className='main-header'>
			<Navbar
				bg={opaque ? 'dark' : 'transparent'}
				variant='dark'
				fixed='top'
				className='justify-content-between'>
				<Navbar.Brand href='#'>
					<img alt='' src={logo} className='d-inline-block align-top' style={styles.logo} />
				</Navbar.Brand>
				<Button href='#contacto' variant='info' className='d-flex'>
					<i className='ri-chat-3-line mr-2'></i>
					<span>Contacto</span>
				</Button>
			</Navbar>
		</header>
	)
}

export default Header
