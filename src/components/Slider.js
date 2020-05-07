import React from 'react'
import { Carousel, Image } from 'react-bootstrap'

const styles = {
	image: {
		opacity: '0.6',
		objectFit: 'cover',
		height: '300px',
	},
	caption: {
		top: '20px',
	},
}

const Slider = () => {
	const prevIcon = <i className='h1 ri-arrow-left-circle-line' aria-hidden='true' />
	const nextIcon = <i className='h1 ri-arrow-right-circle-line' aria-hidden='true' />

	return (
		<section className='slider border-top'>
			<Carousel interval={null} indicators={false} prevIcon={prevIcon} nextIcon={nextIcon}>
				<Carousel.Item className='bg-dark'>
					<Image src='https://picsum.photos/id/10/1300/300' fluid style={styles.image} />
					<Carousel.Caption
						className='d-flex flex-column justify-content-center'
						style={styles.caption}>
						<h3 className='display-4'>Primer Título</h3>
						<p className='lead'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item className='bg-dark'>
					<Image src='https://picsum.photos/id/1018/1300/300' fluid style={styles.image} />

					<Carousel.Caption
						className='d-flex flex-column justify-content-center'
						style={styles.caption}>
						<h3 className='display-4'>Segundo Título</h3>
						<p className='lead'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item className='bg-dark'>
					<Image src='https://picsum.photos/id/190/1300/300' fluid style={styles.image} />

					<Carousel.Caption
						className='d-flex flex-column justify-content-center'
						style={styles.caption}>
						<h3 className='display-4'>Tercer Titulo</h3>
						<p className='lead'>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</section>
	)
}

export default Slider
