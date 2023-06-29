function Header() {
	return <nav className='Header'>
		<a href="!#" className="HeaderLogo">React Movies</a>
		<ul>
			<li onClick={() => {
				window.open('https://www.omdbapi.com', '_blank').focus();
			}}>OMDb API</li>
			<li onClick={() => {
				window.open('https://www.vk.com/tematodor', '_blank').focus();
			}}>VK</li>
			<li onClick={() => {
				window.open('https://github.com/art0tod', '_blank').focus();
			}}>GitHub</li>
		</ul>
	</nav>
}

export { Header }