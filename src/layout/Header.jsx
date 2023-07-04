function Header() {
	return <nav className='Header'>
		<a href="./" className="HeaderLogo">React Movies</a>
		<ul>
			<li onClick={() => {
				window.open('https://www.omdbapi.com', '_blank');
			}}>OMDb API</li>
			{/* <li onClick={() => {
				window.open('https://www.vk.com/tematodor', '_blank');
			}}>Me</li> */}
			<li onClick={() => {
				window.open('https://github.com/art0tod/react-movies/tree/master', '_blank')
			}}>GitHub</li>
		</ul>
	</nav>
}

export { Header }