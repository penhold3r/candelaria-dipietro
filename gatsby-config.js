module.exports = {
	siteMetadata: {
		title: `Candelaria Di Pietro`,
		description: `Estudio Di Pietro se especializa en despidos, accidentes y enfermedades laborales y accidentes de tránsito.`,
		siteUrl: 'https://estudiojuridicodipietro.com',
		keywords: 'abogada consultoria legal legales jucio',
		author: `@penholder`,
		socialMedia: [
			{
				name: 'Whatsapp',
				icon: 'ri-whatsapp-line',
				url: `https://wa.me/5492613064177?text=${encodeURI(
					'Hola, necesito hacer una consulta.'
				)}`,
			},
		],
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				precision: 6,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: 'gatsby-plugin-anchor-links',
			options: {
				offset: 80,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Candelaria Di Pietro`,
				short_name: `DiPietro`,
				start_url: `/`,
				background_color: `#e7cfbe`,
				theme_color: `#38424d`,
				display: `standalone`,
				icon: `src/images/favicon.png`,
			},
		},
		`gatsby-plugin-offline`,
	],
}
