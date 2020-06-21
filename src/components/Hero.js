import React from 'react'
import { Jumbotron, Container, Button } from 'react-bootstrap'

import hex2rgba from '../utils/hex2rgba'

import Link from './Link'

import colors from '../styles/_variables.scss'
import bg from '../images/landing-hero.jpg'

const styles = {
	hero: {
		background: `url(${bg}) no-repeat center / cover`,
		backgroundAttachment: 'fixed',
	},
	jumbo: {
		background: hex2rgba(colors.dark, 0.65),
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

const Hero = () => {
	return (
		<section className='hero mb-5' style={styles.hero} id='inicio'>
			<Jumbotron
				fluid
				style={styles.jumbo}
				className='d-flex justify-content-center align-items-center flex-column'>
				<Container className='d-flex flex-column'>
					<h2 className='hero-text display-4 text-center text-md-left text-uppercase font-weight-bold text-white'>
						Tu Página Web
					</h2>
					<h3 className='hero-sub h2 text-center text-md-left text-white'>
						Un sito web moderno y ágil para mostrar tu negocio en internet.
					</h3>
					<Button
						href='#nosotros'
						variant='outline-light mt-5 mx-auto mx-md-0 mr-md-auto'
						size='lg'>
						<span className='text-uppercase' style={styles.cta}>
							Saber más
						</span>
					</Button>
				</Container>
				<Link to={'/#nosotros'} className='scroll text-white h2' style={styles.scroll}>
					<i className='ri-arrow-down-line'></i>
				</Link>
			</Jumbotron>
		</section>
	)
}

export default Hero
