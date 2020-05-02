module.exports = {
	siteMetadata: {
		title: `Landing Page`,
		description: `A Modern single scroll landing page for your bussiness.`,
		siteUrl: 'https://landing.com',
		keywords: 'landing page bussiness',
		author: `@penholder`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
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
				offset: -100,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `landing-page`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#DDDDDD`,
				theme_color: `#33a2b8`,
				display: `standalone`,
				icon: `src/images/favicon.png`,
			},
		},
		`gatsby-plugin-offline`,
	],
}
