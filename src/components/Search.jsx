import React from "react";

class Search extends React.Component {
	state = {
		search: '',
		type: 'all'
	}

	handleKey = (e) => {
		if (e.key === 'Enter') {
			this.props.searchMovies(this.state.search, this.state.type)
		}
	}

	handleFilter = (e) => {
		this.setState(() => ({ type: e.target.dataset.type }),
			() => { this.props.searchMovies(this.state.search, this.state.type) })
	}

	render() {
		return <div className="search">
			<div className="inlineFiels">
				<div className="searchForm">
					<input
						placeholder="Search..."
						type="search"
						value={this.state.search}
						onChange={(e) =>
							this.setState({ search: e.target.value })}
						onKeyDown={this.handleKey}
					/>
				</div>
				<div className="filters">

					<div className="hidden-toggles">

						<input
							name="type"
							type="radio"
							id="coloration-low"
							className="hidden-toggles__input"
							data-type='all'
							onChange={this.handleFilter}
							checked={this.state.type === 'all'}
						/>
						<label htmlFor="coloration-low" className="hidden-toggles__label">All</label>

						<input
							name="type"
							type="radio"
							id="coloration-medium"
							className="hidden-toggles__input"
							data-type='movie'
							onChange={this.handleFilter}
							checked={this.state.type === 'movie'}
						/>
						<label htmlFor="coloration-medium" className="hidden-toggles__label">Movies</label>

						<input
							name="type"
							type="radio"
							id="coloration-high"
							className="hidden-toggles__input"
							data-type='series'
							onChange={this.handleFilter}
							checked={this.state.type === 'series'}
						/>
						<label htmlFor="coloration-high" className="hidden-toggles__label">Series</label>

						<input
							name="type"
							type="radio"
							id="coloration-striking"
							className="hidden-toggles__input"
							data-type='game'
							onChange={this.handleFilter}
							checked={this.state.type === 'game'}
						/>
						<label htmlFor="coloration-striking" className="hidden-toggles__label">Games</label>

					</div>
				</div>
			</div>
		</div>
	}
}

export { Search }