import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Link from './Link'

const Footer = ({ theme }) => {
	return (
		<footer className={`bg-${theme === 'light' ? 'grey-200' : 'dark'} py-3`}>
			<Container className='my-3'>
				<Row className='py-2 justify-content-center'>
					<Col style={{ flexGrow: 0 }}>
						<Link
							style={{ height: '35px', width: '35px' }}
							className='border border-primary rounded-circle d-flex justify-content-center align-content-center'
							to='https://facebook.com'
							title='Facebook'>
							<i
								className={`ri-facebook-fill text-${
									theme === 'light' ? 'dark' : 'light'
								} lead m-auto`}></i>
						</Link>
					</Col>
					<Col style={{ flexGrow: 0 }}>
						<Link
							style={{ height: '35px', width: '35px' }}
							className='border border-primary rounded-circle d-flex justify-content-center align-content-center'
							to='https://instagram.com'
							title='Instagram'>
							<i
								className={`ri-instagram-line text-${
									theme === 'light' ? 'dark' : 'light'
								} lead m-auto`}></i>
						</Link>
					</Col>
					<Col style={{ flexGrow: 0 }}>
						<Link
							style={{ height: '35px', width: '35px' }}
							className='border border-primary rounded-circle d-flex justify-content-center align-content-center'
							to='https://twitter.com'
							title='Twitter'>
							<i
								className={`ri-twitter-fill text-${
									theme === 'light' ? 'dark' : 'light'
								} lead m-auto`}></i>
						</Link>
					</Col>
				</Row>
				<p className={`text-center text-${theme === 'light' ? 'grey-500' : 'light'} my-3`}>
					<small>LandingPage &copy; {new Date().getFullYear()}</small>
				</p>
			</Container>
		</footer>
	)
}

export default Footer
