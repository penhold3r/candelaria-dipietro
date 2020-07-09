import React from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'

import aboutImg from '../images/landing-about.jpg'

const About = ({ theme }) => {
	const themeShade = theme === 'teal' ? 'light' : theme
	const themeText = theme === 'teal' || theme === 'dark' ? 'light' : 'dark'

	return (
		<section className='about section py-5' id='nosotros'>
			<div className='spacer py-3' />
			<Container className='my-5'>
				<Card
					className={`shadow-sm border-0 p-0 p-md-3 bg-${
						theme === 'dark' ? 'grey-700' : 'white'
					}`}>
					<Card.Body>
						<Row>
							<Col sm={12} md={4} className='d-flex'>
								<Image src={aboutImg} fluid rounded style={{ objectFit: 'cover' }} />
							</Col>
							<Col sm={12} md={8} className='pr-md-5'>
								<h2 className='about-title display-4 mt-4 mt-md-0'>Tu historia</h2>
								<p className='lead py-2'>
									Cuenta tu historia, quién eres y qué ofreces. Déjale saber a tus clientes
									porqué es importante que te elijan por sobre la competencia.
								</p>
								<div className='h2 text-primary text-center text-md-left'>
									<i className='ri-hand-heart-line'></i>
								</div>
								<p className='text-secondary mt-5'>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem
									iure tempore omnis illo quibusdam. Quibusdam quae laudantium magni
									possimus autem voluptatibus commodi, voluptates accusantium laboriosam!
								</p>
								<p className='text-secondary'>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
									obcaecati voluptate repellendus animi quis maiores neque dolore modi,
									harum placeat repellat, quod sint aliquid odit! Praesentium neque omnis
									et quo.
								</p>
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</Container>
		</section>
	)
}

export default About
