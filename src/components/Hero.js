import React from 'react'
import { Jumbotron, Container, Button } from 'react-bootstrap'

import Link from './Link'

import bg from '../images/landing-hero.jpg'

const styles = {
	hero: {
		background: `url(${bg}) no-repeat center / cover`,
		backgroundAttachment: 'fixed',
	},
	jumbo: {
		background: 'rgba(0, 0, 0, 0.5)',
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
		<section className='hero mb-5' style={styles.hero}>
			<Jumbotron
				fluid
				style={styles.jumbo}
				className='d-flex justify-content-center align-items-center flex-column'>
				<Container>
					<h2 className='display-4 text-uppercase font-weight-bold text-white'>
						Tu Página Web
					</h2>
					<h3 className='h2 text-white'>
						Un sito web moderno y ágil para mostrar tu negocio en internet.
					</h3>
					<Button href='#nosotros' variant='outline-light mt-5' size='lg'>
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
