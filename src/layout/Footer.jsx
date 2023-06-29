function Footer() {
	return <footer className="Footer">
		<div>© by <b onClick={() => {
			window.open('https://www.vk.com/tematodor', '_blank').focus();
		}}>Artem Todor</b> | {new Date().getFullYear()}</div>
		<div>Data Base by <b onClick={() => {
			window.open('https://www.omdbapi.com', '_blank').focus();
		}}>OMDb API</b></div>
	</footer>
}

export { Footer }