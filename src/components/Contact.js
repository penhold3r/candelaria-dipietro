import React, { useState } from 'react'
import { Container, Card, Row, Col, ListGroup, Form, InputGroup, Button } from 'react-bootstrap'

import contactBg from '../images/landing-contact.jpg'

const styles = {
	contact: {
		background: `url(${contactBg}) no-repeat center / cover`,
		backgroundAttachment: 'fixed',
	},
	card: {
		background: 'rgba(255, 255, 255, 0.75)',
	},
}

const Contact = () => {
	const [validated, setValidated] = useState(false)

	const handleSubmit = event => {
		const form = event.currentTarget
		event.preventDefault()
		event.stopPropagation()
		if (form.checkValidity() === false) {
			console.log('invalid')
		}

		setValidated(true)
	}
	return (
		<section className='section py-5' id='contacto' style={styles.contact}>
			<Container className='py-5'>
				<Card className='border-0 p-3' style={styles.card}>
					<Card.Body className='mb-4 p-0'>
						<h2 className='h1 p-3'>Contacto</h2>
						<Row>
							<Col sm={12} md={6}>
								<ListGroup className='bg-transparent mb-4 mb-md-0' variant='flush'>
									<ListGroup.Item
										className='d-flex align-items-center bg-transparent'
										action
										href='https://maps.google.com'
										target='_blank'
										rel='noopener noreferrer'>
										<i className='h3 text-primary mb-0 mr-2 ri-home-2-line'></i>
										<span className='lead'>
											Tu dirección: calle 123, departamento, provincia.
										</span>
									</ListGroup.Item>
									<ListGroup.Item
										className='d-flex align-items-center bg-transparent'
										action
										href='tel:123 456 7890'>
										<i className='h3 text-primary mb-0 mr-2 ri-phone-line'></i>
										<span className='lead'>123 456 7890</span>
									</ListGroup.Item>
									<ListGroup.Item
										className='d-flex align-items-center bg-transparent'
										action
										href='mailto:info@landingpage.com'>
										<i className='h3 text-primary mb-0 mr-2 ri-mail-line'></i>
										<span className='lead'>info@landingpage.com</span>
									</ListGroup.Item>
								</ListGroup>
							</Col>
							<Col sm={12} md={6}>
								<Form
									className='bg-white rounded p-3 p-lg-4 shadow-sm'
									noValidate
									validated={validated}
									onSubmit={handleSubmit}>
									<Form.Group controlId='name'>
										<Form.Label>Nombre</Form.Label>
										<InputGroup>
											<InputGroup.Prepend>
												<InputGroup.Text id='inputGroupPrepend'>
													<i className='ri-account-circle-line'></i>
												</InputGroup.Text>
											</InputGroup.Prepend>
											<Form.Control type='text' placeholder='Cosme Fulanito' required />
											<Form.Control.Feedback>Completo!</Form.Control.Feedback>
											<Form.Control.Feedback type='invalid'>
												Por favor ingresa tu nombre
											</Form.Control.Feedback>
										</InputGroup>
										<Form.Text className='text-muted'>
											Por favor ingresa tu nombre completo.
										</Form.Text>
									</Form.Group>

									<Form.Group controlId='email'>
										<Form.Label>Email</Form.Label>
										<InputGroup>
											<InputGroup.Prepend>
												<InputGroup.Text id='inputGroupPrepend'>
													<i className='ri-at-line'></i>
												</InputGroup.Text>
											</InputGroup.Prepend>
											<Form.Control
												type='email'
												placeholder='nombre@email.com'
												required
											/>
											<Form.Control.Feedback>Completo!</Form.Control.Feedback>
											<Form.Control.Feedback type='invalid'>
												Por favor ingresa un correo válido.
											</Form.Control.Feedback>
										</InputGroup>
										<Form.Text className='text-muted'>
											No compartiremos tu dirección de correo con nadie.
										</Form.Text>
									</Form.Group>

									<Form.Group controlId='msg'>
										<Form.Label>Mensaje</Form.Label>
										<InputGroup>
											<InputGroup.Prepend>
												<InputGroup.Text id='inputGroupPrepend'>
													<i className='ri-message-2-line'></i>
												</InputGroup.Text>
											</InputGroup.Prepend>
											<Form.Control
												as='textarea'
												rows='4'
												placeholder='Tu mensaje...'
												required
											/>
											<Form.Control.Feedback>Completo!</Form.Control.Feedback>
											<Form.Control.Feedback type='invalid'>
												Por favor escribe un mensaje.
											</Form.Control.Feedback>
										</InputGroup>
										<Form.Text className='text-muted'>
											Cuéntanos en que podemos ayudarte.
										</Form.Text>
									</Form.Group>

									<Form.Group controlId='formBasicCheckbox'>
										<Form.Check type='checkbox' label='No soy un robot' required />
									</Form.Group>

									<Button className='d-flex' variant='primary' type='submit'>
										<span className='mr-2'>Enviar</span>
										<i className='ri-mail-send-line'></i>
									</Button>
								</Form>
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</Container>
		</section>
	)
}

export default Contact
