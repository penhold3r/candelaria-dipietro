import React from 'react'

import Layout from '../components/Layout'
import Theme from '../components/Theme'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Slider from '../components/Slider'

import ThemeSwitcher from '../components/ThemeSwitcher'

const TealPage = () => (
	<Layout>
		<Theme theme='teal'>
			<Header />
			<Hero />
			<About />
			<Services />
			<Slider />
			<Contact />
			<Footer />
			<ThemeSwitcher />
		</Theme>
	</Layout>
)

export default TealPage
