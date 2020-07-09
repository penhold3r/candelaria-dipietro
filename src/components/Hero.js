import React from 'react'
import { Jumbotron, Container, Button } from 'react-bootstrap'
import { isMobile, isIOS } from 'react-device-detect'

import hex2rgba from '../utils/hex2rgba'

import Link from './Link'

import colors from '../styles/_variables.scss'
import bg from '../images/landing-hero.jpg'
import darkBg from '../images/dark-bg.gif'
import lightBg from '../images/light-hero-001.svg'

const Hero = ({ theme }) => {
	console.log(isMobile, isIOS)
	const themeShade = theme === 'teal' ? 'light' : theme
	const themeText = theme === 'teal' || theme === 'dark' ? 'light' : 'dark'
	const heroBg =
		theme === 'dark'
			? `url(${darkBg}) fixed`
			: theme === 'light'
			? `url(${lightBg}) no-repeat ${isMobile || isIOS ? 'center 80%' : '75% center'} / 50vh`
			: `url(${bg}) no-repeat fixed center / cover`

	const styles = {
		hero: {
			background: heroBg,
			position: 'relative',
		},
		jumbo: {
			background: theme === 'light' ? 'transparent' : hex2rgba('#333333', 0.65),
			height: '100vh',
		},
		cta: {
			fontSize: '1rem',
		},
		scroll: {
			position: 'absolute',
			cursor: 'pointer',
			left: 'auto',
			right: 'auto',
			bottom: 0,
		},
	}

	return (
		<section className='hero mb-5' style={styles.hero} id='inicio'>
			<Jumbotron
				fluid
				style={styles.jumbo}
				className={`d-flex ${theme === 'light' && 'pt-5 pt-md-0'}  ${
					theme == 'light'
						? 'justyfy-content-start justify-content-md-center'
						: 'justify-content-center'
				} align-items-center flex-column`}>
				<Container className={`d-flex flex-column ${theme === 'light' && 'pt-5 pt-md-0'}`}>
					<h2
						className={`hero-text display-4 text-center ${
							themeShade !== 'dark' && 'text-md-left'
						} text-uppercase font-weight-bold text-${themeText} ${
							theme === 'light' && 'w-md-50'
						}`}>
						Tu Página Web
					</h2>
					<h3
						className={`hero-sub h2 text-center ${
							themeShade !== 'dark' && 'text-md-left'
						} text-${themeText} ${theme === 'light' && 'w-md-50'}`}>
						Un sito web moderno y ágil para mostrar tu negocio en internet.
					</h3>
					<Button
						href='#nosotros'
						variant={`outline-${theme === 'light' ? 'secondary' : 'light'} mt-5 mx-auto ${
							themeShade !== 'dark' && 'mx-md-0 mr-md-auto'
						}`}
						size='lg'>
						<span className='text-uppercase' style={styles.cta}>
							Saber más
						</span>
					</Button>
				</Container>
				<Link
					to={`/${theme}#nosotros`}
					className={`scroll text-${themeText} h2`}
					style={styles.scroll}>
					<i className='ri-arrow-down-line' style={styles.scroll}></i>
				</Link>
			</Jumbotron>
		</section>
	)
}

export default Hero
