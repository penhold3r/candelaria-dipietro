import React, { useEffect, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'

import logo from '../images/landing-logo.png'

const styles = {
	nav: {
		transition: 'all 0.3s',
	},
	logo: {
		height: '40px',
		objectFit: 'contain',
	},
	contact: {
		right: '4rem',
		top: '0.5rem',
	},
	hamb: {
		fontSize: '1.5rem',
		cursor: 'pointer',
	},
}

const Header = () => {
	const {
		site: { siteMetadata },
	} = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
					}
				}
			}
		`
	)
	const [opaque, setOpaque] = useState(false)
	const [scrolled, setScrolled] = useState(false)
	const [colapsed, setColapsed] = useState(false)

	const toggleIcon = colapsed ? (
		<i className='ri-close-line'></i>
	) : (
		<i className='ri-menu-line'></i>
	)

	const handleToggle = () => {
		setColapsed(!colapsed)
		!scrolled && setOpaque(!opaque)
	}

	useEffect(() => {
		if (window) {
			setOpaque(window.scrollY >= 200)
			setScrolled(window.scrollY >= 200)

			window.onscroll = () => {
				setOpaque(window.scrollY >= 200)
				setScrolled(window.scrollY >= 200)
			}
		}
	}, [])

	console.log(scrolled)

	return (
		<header className='main-header'>
			<Navbar
				bg={opaque ? 'dark' : 'transparent'}
				variant='dark'
				fixed='top'
				expand='md'
				style={styles.nav}>
				<Container className='pos-relative'>
					<Navbar.Brand href='#'>
						<img
							alt={siteMetadata.title}
							src={logo}
							className='d-inline-block align-top'
							style={styles.logo}
						/>
					</Navbar.Brand>
					<Navbar.Toggle
						as='div'
						style={styles.hamb}
						bsPrefix='p-1 text-white d-md-none'
						children={toggleIcon}
						aria-controls='basic-navbar-nav'
						onClick={handleToggle}
					/>
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ml-auto mr-2 mr-md-3 mt-3 mt-md-0 text-right'>
							<Nav.Link href='#inicio' className='text-md-uppercase py-3 p-md-2'>
								Inicio
							</Nav.Link>
							<div className='border-bottom d-md-none border-grey' />
							<Nav.Link href='#nosotros' className='text-md-uppercase py-3 p-md-2'>
								Info
							</Nav.Link>
							<div className='border-bottom d-md-none border-grey' />
							<Nav.Link href='#servicios' className='text-md-uppercase py-3 p-md-2'>
								Servicios
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
					<Button
						href='#contacto'
						variant='primary'
						className='d-flex pos-absolute pos-md-static'
						style={styles.contact}>
						<i className='ri-chat-3-line mr-2'></i>
						<span>Contacto</span>
					</Button>
				</Container>
			</Navbar>
		</header>
	)
}

export default Header
