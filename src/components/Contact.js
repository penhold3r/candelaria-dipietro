import React, { useState } from 'react'
import { Container, Card, Row, Col, ListGroup, Form, InputGroup, Button } from 'react-bootstrap'

import hex2rgba from '../utils/hex2rgba'

import colors from '../styles/_variables.scss'

import contactBg from '../images/landing-contact.jpg'
import ContactModal from './ContactModal'

const Contact = ({ theme }) => {
	const [validated, setValidated] = useState(false)
	const [modal, setModal] = useState(false)
	const [data, setData] = useState({ name: '', email: '', message: '' })
	const [modalTexts, setModalTexts] = useState({ title: '', text: '' })

	const themeShade = theme === 'teal' ? 'light' : theme
	const themeText = theme === 'teal' || theme === 'light' ? 'dark' : 'light'

	const styles = {
		contact: {
			background: `url(${contactBg}) no-repeat fixed center / cover`,
			backgroundBlendMode: themeShade === 'dark' ? 'multiply' : 'normal',
		},
		card: {
			background: hex2rgba(themeShade === 'dark' ? colors[themeShade] : '#ffffff', 0.6),
		},
	}

	const handleChange = e => {
		const { name, value } = e.target

		setData({ ...data, [name]: value })
	}

	const handleSubmit = e => {
		const form = e.currentTarget

		e.preventDefault()
		e.stopPropagation()

		setValidated(true)

		if (form.checkValidity()) {
			setModal(true)
			setModalTexts({
				title: '¡Mensaje Enviado!',
				text: `${data.name}, gracias por comunicarte con nosotros, te responderemos a la brevedad.`,
			})
			setValidated(false)
			setData({ name: '', email: '', message: '' })
		}
	}

	return (
		<section
			className={`section ${theme === 'dark' && 'bg-grey-600'} bg-foo py-5`}
			id='contacto'
			style={styles.contact}>
			<ContactModal
				show={modal}
				onHide={() => setModal(false)}
				title={modalTexts.title}
				text={modalTexts.text}
			/>
			<Container className='py-5'>
				<Card className='border-0 pt-3 px-3 p-md-3' style={styles.card}>
					<Card.Body className='mb-md-4 p-0'>
						<h2 className='h1 p-0 p-md-3'>Contacto</h2>
						<Row>
							<Col sm={12} md={6}>
								<ListGroup className='bg-transparent mb-4 mb-md-0' variant='flush'>
									<ListGroup.Item
										className='d-flex align-items-center bg-transparent px-0 px-md-3'
										action
										href='https://maps.google.com'
										target='_blank'
										rel='noopener noreferrer'>
										<i className='h3 text-primary mb-0 mr-3 ri-home-2-line'></i>
										<span className={`lead text-${themeText}`}>
											Tu dirección: calle 123, departamento, provincia.
										</span>
									</ListGroup.Item>
									<ListGroup.Item
										className='d-flex align-items-center bg-transparent px-0 px-md-3'
										action
										href='tel:123 456 7890'>
										<i className='h3 text-primary mb-0 mr-3 ri-phone-line'></i>
										<span className={`lead text-${themeText}`}>123 456 7890</span>
									</ListGroup.Item>
									<ListGroup.Item
										className='d-flex align-items-center bg-transparent px-0 px-md-3'
										action
										href='mailto:info@landingpage.com'>
										<i className='h3 text-primary mb-0 mr-3 ri-mail-line'></i>
										<span className={`lead text-${themeText}`}>info@landingpage.com</span>
									</ListGroup.Item>
								</ListGroup>
							</Col>
							<Col sm={12} md={6} className='px-0 px-md-3'>
								<Form
									className={`bg-${
										theme === 'dark' ? theme : 'white'
									} rounded p-3 p-lg-4 shadow-sm`}
									noValidate
									validated={validated}
									onSubmit={handleSubmit}>
									<Form.Group controlId='name'>
										<Form.Label>Nombre</Form.Label>
										<InputGroup>
											<InputGroup.Prepend className='border-0'>
												<InputGroup.Text
													id='inputGroupPrepend'
													className={`${
														theme === 'dark'
															? 'bg-grey-600 border-grey-600'
															: 'border-grey-100'
													} `}>
													<i
														className={`ri-account-circle-line text-${themeText}`}></i>
												</InputGroup.Text>
											</InputGroup.Prepend>
											<Form.Control
												className={`bg-${
													theme === 'dark' ? theme : 'white'
												} border-grey-${
													theme === 'dark' ? '600' : '100'
												} text-${themeText} rounded-right`}
												onChange={e => handleChange(e)}
												type='text'
												placeholder='Cosme Fulanito'
												name='name'
												value={data.name}
												required
											/>
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
											<InputGroup.Prepend className='border-0'>
												<InputGroup.Text
													id='inputGroupPrepend'
													className={`${
														theme === 'dark'
															? 'bg-grey-600 border-grey-600'
															: 'border-grey-100'
													} `}>
													<i className={`ri-at-line text-${themeText}`}></i>
												</InputGroup.Text>
											</InputGroup.Prepend>
											<Form.Control
												className={`bg-${
													theme === 'dark' ? theme : 'white'
												} border-grey-${
													theme === 'dark' ? '600' : '100'
												} text-${themeText} rounded-right`}
												onChange={e => handleChange(e)}
												type='email'
												name='email'
												placeholder='nombre@email.com'
												value={data.email}
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
											<InputGroup.Prepend className='border-0'>
												<InputGroup.Text
													id='inputGroupPrepend'
													className={`${
														theme === 'dark'
															? 'bg-grey-600 border-grey-600'
															: 'border-grey-100'
													} `}>
													<i className={`ri-message-2-line text-${themeText}`}></i>
												</InputGroup.Text>
											</InputGroup.Prepend>
											<Form.Control
												className={`bg-${
													theme === 'dark' ? theme : 'white'
												} border-grey-${
													theme === 'dark' ? '600' : '100'
												} text-${themeText} rounded-right`}
												onChange={e => handleChange(e)}
												as='textarea'
												name='message'
												value={data.message}
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

									<Button
										className='d-flex w-100 w-md-auto w-lg-auto w-xl-auto justify-content-center align-items-center'
										variant={theme === 'teal' ? 'primary' : 'outline-primary'}
										type='submit'>
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
