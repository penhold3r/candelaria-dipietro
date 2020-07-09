import React, { useEffect, useState, useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'

import logo from '../images/landing-logo.png'
import logoLight from '../images/landing-logo_inv.png'

const Header = ({ theme }) => {
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
	const [colapsed, setColapsed] = useState(true)

	const themeShade = theme === 'teal' ? 'dark' : theme
	const themeText = theme === 'teal' || theme === 'dark' ? 'light' : 'dark'
	const themeNav = theme === 'light' ? 'white' : themeShade

	const styles = {
		nav: {
			transition: 'all 0.3s',
		},
		logo: {
			height: '40px',
			objectFit: 'contain',
			width: '125px',
		},
		contact: {
			right: '3rem',
			top: '0.5rem',
		},
		hamb: {
			fontSize: '1.5rem',
			cursor: 'pointer',
		},
	}

	const toggleBtn = useRef(null)
	const toggleIcon = colapsed ? (
		<i className='ri-menu-line'></i>
	) : (
		<i className='ri-close-line'></i>
	)

	const handleToggle = () => {
		setColapsed(!colapsed)
		setOpaque(!opaque)
	}

	const handleScroll = () => colapsed && setOpaque(window.scrollY >= 200)

	useEffect(() => {
		if (window) {
			window.scrollY >= 200 && setOpaque(true)

			window.onscroll = () => handleScroll()
		}
	}, [colapsed])

	return (
		<header className='main-header'>
			<Navbar
				bg={opaque ? themeNav : 'transparent'}
				variant={themeShade}
				fixed='top'
				expand='md'
				style={styles.nav}>
				<Container className='pos-relative'>
					<Navbar.Brand href='#'>
						<img
							alt={siteMetadata.title}
							src={theme === 'light' ? logoLight : logo}
							className='d-inline-block align-top'
							style={styles.logo}
						/>
					</Navbar.Brand>
					<Navbar.Toggle
						as='div'
						style={styles.hamb}
						bsPrefix={`p-1 text-${themeText} d-flex d-md-none`}
						children={toggleIcon}
						aria-controls='basic-navbar-nav'
						ref={toggleBtn}
						onClick={handleToggle}
					/>
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ml-auto mr-2 mr-md-3 mt-3 mt-md-0 text-right'>
							<Nav.Link
								href='#inicio'
								className='text-md-uppercase py-3 p-md-2'
								onClick={() => toggleBtn.current.click()}>
								Inicio
							</Nav.Link>
							<div className='border-bottom d-md-none border-grey' />
							<Nav.Link
								href='#nosotros'
								className='text-md-uppercase py-3 p-md-2'
								onClick={() => toggleBtn.current.click()}>
								Info
							</Nav.Link>
							<div className='border-bottom d-md-none border-grey' />
							<Nav.Link
								href='#servicios'
								className='text-md-uppercase py-3 p-md-2'
								onClick={() => toggleBtn.current.click()}>
								Servicios
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
					<Button
						href='#contacto'
						variant={theme === 'teal' ? 'primary' : 'outline-primary'}
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
