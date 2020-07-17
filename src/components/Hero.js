import React from 'react'
import { Jumbotron, Container, Button } from 'react-bootstrap'

import hex2rgba from '../utils/hex2rgba'

import Link from './Link'

import colors from '../styles/_variables.module.scss'
import bg from '../images/cadelaria_di_pietro-hero.jpg'

const styles = {
	hero: {
		background: `url(${bg}) no-repeat fixed center / cover`,
		position: 'relative',
	},
	jumbo: {
		background: hex2rgba(colors.primary, 0.45),
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
		<section className='hero' style={styles.hero} id='inicio'>
			<Jumbotron
				fluid
				style={styles.jumbo}
				className={`m-0 d-flex justify-content-center align-items-center flex-column`}>
				<Container className={`d-flex flex-column`}>
					<h2 className={`hero-text display-4 text-center text-white`}>
						Nos especializamos en derecho laboral, civil y comercial.
					</h2>
					<Button href='#nosotros' variant={`outline-secondary mt-5 mx-auto`} size='lg'>
						<span className='text-uppercase' style={styles.cta}>
							Conocenos
						</span>
					</Button>
				</Container>
				<Link to={`/#nosotros`} className={`scroll text-white h2`} style={styles.scroll}>
					<i className='ri-arrow-down-line' style={styles.scroll}></i>
				</Link>
			</Jumbotron>
		</section>
	)
}

export default Hero
