import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Button } from 'react-bootstrap'
import Link from './Link'

const Footer = () => {
	const {
		site: { siteMetadata },
	} = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						socialMedia {
							icon
							name
							url
						}
					}
				}
			}
		`
	)

	return (
		<footer className={`bg-primary py-3`}>
			<Container className='my-3'>
				<div className='d-flex py-2 justify-content-center'>
					{siteMetadata.socialMedia.map((icon, index) => (
						<Button
							key={index}
							className='rounded-circle mx-2'
							variant='outline-secondary'
							href={icon.url}
							target='_blank'
							rel='noopener noreferrer'
							title={icon.name}>
							<i className={`${icon.icon} lead`}></i>
						</Button>
					))}
				</div>
				<p className={`text-center text-light my-3`}>
					<small>
						<span>
							{siteMetadata.title} &copy; {new Date().getFullYear()}
						</span>
						<span> | </span>
						<span>
							Desarrollado por{' '}
							<Link to='https://github.com/penhold3r' className='text-secondary'>
								penHolder Designerd
							</Link>
						</span>
					</small>
				</p>
			</Container>
		</footer>
	)
}

export default Footer
