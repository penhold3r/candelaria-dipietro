import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const Services = () => {
	return (
		<section className='services bg-secondary py-5 mt-5' id='servicios'>
			<Container className='pb-4 my-4'>
				<h2 className='h1 text-white text-center mt-2 py-2'>Servicios</h2>
				<Row className='pb-4'>
					<Col sm={12} md={4} className='my-3 m-md-0'>
						<Card className='text-center'>
							<Card.Header className='py-4'>
								<i className='display-3 text-primary ri-flashlight-line'></i>
							</Card.Header>
							<Card.Body>
								<Card.Title>
									<span className='h3'>Rápida</span>
								</Card.Title>
								<Card.Text className='p-3'>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque pariatur
									in explicabo quam, illo aspernatur.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col sm={12} md={4} className='my-3 m-md-0'>
						<Card className='text-center'>
							<Card.Header className='py-4'>
								<i className='display-3 text-primary ri-shirt-line'></i>
							</Card.Header>
							<Card.Body>
								<Card.Title>
									<span className='h3'>Moderna</span>
								</Card.Title>
								<Card.Text className='p-3'>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque pariatur
									in explicabo quam, illo aspernatur.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col sm={12} md={4} className='my-3 m-md-0'>
						<Card className='text-center'>
							<Card.Header className='py-4'>
								<i className='display-3 text-primary ri-device-line'></i>
							</Card.Header>
							<Card.Body>
								<Card.Title>
									<span className='h3'>Adaptable</span>
								</Card.Title>
								<Card.Text className='p-3'>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque pariatur
									in explicabo quam, illo aspernatur.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default Services
