function Footer() {
	return <footer className="Footer">
		<div>© by <b onClick={() => {
			window.open('https://www.vk.com/art0tod', '_blank');
		}}>@art0tod</b> | {new Date().getFullYear()}</div>
		<div>Data Base by <b onClick={() => {
			window.open('https://www.omdbapi.com', '_blank');
		}}>OMDb API</b></div>
		<div>♥︎ React, Fetch and pure CSS</div>
	</footer>
}

export { Footer }