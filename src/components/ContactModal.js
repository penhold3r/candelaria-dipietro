import React from 'react'
import { Modal } from 'react-bootstrap'

const ContactModal = props => {
	const { title, text } = props

	return (
		<Modal {...props} size='md' centered dialogClassName='border-0'>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter' className='text-primary'>
					{title}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p className='py-3'>{text}</p>
			</Modal.Body>
		</Modal>
	)
}

export default ContactModal
