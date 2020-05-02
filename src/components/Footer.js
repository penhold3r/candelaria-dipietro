import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Link from './Link'

const Footer = () => {
	return (
		<footer className='bg-dark py-3'>
			<Container className='my-3'>
				<Row className='py-2 justify-content-center'>
					<Col style={{ flexGrow: 0 }}>
						<Link
							style={{ height: '35px', width: '35px' }}
							className='border border-info rounded-circle d-flex justify-content-center align-content-center'
							to='https://facebook.com'
							title='Facebook'>
							<i className='ri-facebook-fill text-light lead m-auto'></i>
						</Link>
					</Col>
					<Col style={{ flexGrow: 0 }}>
						<Link
							style={{ height: '35px', width: '35px' }}
							className='border border-info rounded-circle d-flex justify-content-center align-content-center'
							to='https://instagram.com'
							title='Instagram'>
							<i className='ri-instagram-line text-light lead m-auto'></i>
						</Link>
					</Col>
					<Col style={{ flexGrow: 0 }}>
						<Link
							style={{ height: '35px', width: '35px' }}
							className='border border-info rounded-circle d-flex justify-content-center align-content-center'
							to='https://twitter.com'
							title='Twitter'>
							<i className='ri-twitter-fill text-light lead m-auto'></i>
						</Link>
					</Col>
				</Row>
				<p className='text-center text-light my-3'>
					<small>LandingPage &copy; {new Date().getFullYear()}</small>
				</p>
			</Container>
		</footer>
	)
}

export default Footer
