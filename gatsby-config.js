module.exports = {
	siteMetadata: {
		title: `Candelaria Di Pietro`,
		description: `Candelaria Di Pietro, abogacía.`,
		siteUrl: 'https://landing.com',
		keywords: 'abogada consultoria legal legales jucio',
		author: `@penholder`,
		socialMedia: [
			{
				name: 'Facebook',
				icon: 'ri-facebook-fill',
				url: 'https://facebook.com/',
			},
			{
				name: 'Twitter',
				icon: 'ri-twitter-fill',
				url: 'https://twitter.com/',
			},
			{
				name: 'Instagram',
				icon: 'ri-instagram-line',
				url: 'https://instagram.com/',
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
				offset: -100,
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
				background_color: `#DDDDDD`,
				theme_color: `#192221`,
				display: `standalone`,
				icon: `src/images/favicon.png`,
			},
		},
		`gatsby-plugin-offline`,
	],
}
