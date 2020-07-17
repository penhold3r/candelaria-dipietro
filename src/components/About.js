import React from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'

import aboutImg from '../images/cadelaria_di_pietro-abogada.jpg'

import img001 from '../images/cadelaria_di_pietro-001.jpg'
import img002 from '../images/cadelaria_di_pietro-002.jpg'

const About = () => {
	const styles = {
		imgs: {
			objectFit: 'cover',
			height: '200px',
			width: '100%',
			filter: 'sepia(0.6)',
			mixBlendMode: 'multiply',
		},
	}
	return (
		<section className='about section pt-5' id='nosotros'>
			<div className='spacer py-3' />
			<Container className='my-5'>
				<Card className={`shadow-sm border-0 p-0 p-md-3 bg-white`}>
					<Card.Body>
						<Row>
							<Col sm={12} md={4} className='d-flex'>
								<Image src={aboutImg} fluid rounded style={{ objectFit: 'cover' }} />
							</Col>
							<Col sm={12} md={8} className='pr-md-5'>
								<h2 className='about-title display-4 mt-4 mt-md-0'>¿Quienes Somos?</h2>
								<p className='lead py-2'>
									Somos un estudio jurídico con más de 35 años de experiencia. Nos
									especializamos en despidos, accidentes y enfermedades laborales y
									accidentes de tránsito.
								</p>
								<div className='h2 text-primary text-center text-md-left'>
									<i className='ri-scales-3-line'></i>
								</div>
								<p className='text-primary-grey'>
									Contás con un amplio staff de abogados que resolverán tus inquietudes de
									manera óptima, segura y confidencial. La seriedad y el compromiso con
									nuestros clientes son nuestra marca registrada.
								</p>
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</Container>
			<Container fluid>
				<Row>
					<Col className='bg-secondary p-0 m-0'>
						<Image src={img001} style={styles.imgs} />
					</Col>
					<Col className='bg-secondary p-0 m-0'>
						<Image src={img002} style={styles.imgs} />
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default About
