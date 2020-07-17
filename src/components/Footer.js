import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container } from 'react-bootstrap'
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
						<Link
							key={index}
							style={{ height: '35px', width: '35px' }}
							className='border border-secondary rounded-circle d-flex justify-content-center align-content-center mx-2'
							to={icon.url}
							title={icon.name}>
							<i className={`${icon.icon} text-light lead m-auto`}></i>
						</Link>
					))}
				</div>
				<p className={`text-center text-light my-3`}>
					<small>
						{siteMetadata.title} &copy; {new Date().getFullYear()}
					</small>
				</p>
			</Container>
		</footer>
	)
}

export default Footer
