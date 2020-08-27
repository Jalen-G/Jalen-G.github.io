import React from 'react';
import './App.css';
import logo from './logo.svg';
import Div100vh from 'react-div-100vh';
import resume from './Jalen_Goodloe_Resume.pdf';

function App() {
	return (
		<Div100vh className='container'>
			<nav className='navbar navbar-expand-sm navbar-light slide-in-bottom'>
				<embed id='logo' src={logo} />
				<button
					className='navbar-toggler d-lg-none'
					type='button'
					data-toggle='collapse'
					data-target='#collapsibleNavId'
					aria-controls='collapsibleNavId'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<i className='material-icons md-48'>dehaze</i>
				</button>
				<div className='collapse navbar-collapse' id='collapsibleNavId'>
					<ul className='navbar-nav mt-2 mt-lg-0 ml-auto'>
						<li className='nav-item'>
							<a className='nav-link' href={resume} target='”_blank”'>
								Résumé
							</a>
						</li>
						<li className='nav-item'>
							<a
								className='nav-link'
								href='https://www.github.com/jalen-g'
								target='”_blank”'>
								Work
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='mailto: goodloejalen@outlook.com'>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</nav>
			<div className='main-text slide-in-bottom-text'>
				<h1>
					<span className='line'>Hello!&nbsp;</span>
					<span className='line'>I'm Jalen</span>
				</h1>
				<p>Student & Developer</p>
			</div>
		</Div100vh>
	);
}

export default App;
