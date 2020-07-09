import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Button } from 'react-bootstrap'

const ThemeSwitcher = ({ theme }) => {
	const [hover, setHover] = useState(false)
	const [active, setActive] = useState(false)

	const styles = {
		container: { pointerEvents: 'none' },
		icon: {
			cursor: 'pointer',
			height: '45px',
			opacity: hover ? '0.5' : 1,
			pointerEvents: 'initial',
			transition: 'all 0.3s',
			width: '45px',
			zIndex: 2,
		},
		btns: {
			height: '45px',
			overflow: 'hidden',
			pointerEvents: 'initial',
			right: active ? 0 : 'calc(-45px - 0.5rem)',
			transition: 'all 0.4s ease-in-out',
			width: active ? '160px' : '45px',
			zIndex: 1,
		},
	}

	const onIconEnter = () => {
		setHover(true)
		setActive(true)
	}
	const onIconLeave = () => {
		setHover(false)
	}
	return (
		<div className='theme-switcher fixed-bottom' style={styles.container}>
			<div
				className='container pb-3 d-flex flex-row-reverse align-items-center'
				style={styles.container}>
				<i
					className={`ri-palette-line bg-primary text-light shadow-sm h3 p-3 m-0 ml-2 rounded-circle d-flex justify-content-center align-items-center align-self-center position-relative`}
					style={styles.icon}
					onMouseEnter={onIconEnter}
					onMouseLeave={onIconLeave}
					role='button'></i>
				<div
					className='theme-switcher__buttons bg-primary d-flex justify-content-center align-items-center shadow-sm p-3 rounded-pill position-relative'
					style={styles.btns}
					onMouseLeave={() => setActive(false)}>
					<Link to='/teal' state={{ theme }}>
						<Button variant='outline-light' size='sm' className='rounded-pill mx-1'>
							Teal
						</Button>
					</Link>
					<Link to='/dark' state={{ theme }}>
						<Button variant='outline-light' size='sm' className='rounded-pill mx-1'>
							Dark
						</Button>
					</Link>
					<Link to='/light' state={{ theme }}>
						<Button variant='outline-light' size='sm' className='rounded-pill mx-1'>
							Light
						</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default ThemeSwitcher
