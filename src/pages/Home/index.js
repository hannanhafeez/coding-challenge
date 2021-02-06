import React, {useState} from 'react'
import PropTypes from 'prop-types'

//Components
import ArtistCard from '../../components/ArtistCard'

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss'

//Assets
import {ReactComponent as Search} from '../../assets/svg/search.svg'

const Home = props => {

	const [artistList, setArtistList] = useState([
		'Hannan', 'Zain'
	])

	const [results, setResulsts] = useState([
		{id:'12345', name: 'Hannan', thumb_url: 'https://photos.bandsintown.com/thumb/8479721.jpeg', facebook_page_url:'http://www.facebook.com/5330548481'},
		{id:'12346', name: 'Zain', thumb_url: 'https://photos.bandsintown.com/thumb/8479721.jpeg', facebook_page_url:'http://www.facebook.com/5330548481'},
		{id:'12347', name: 'Saqib', thumb_url: 'https://photos.bandsintown.com/thumb/8479721.jpeg', facebook_page_url:'http://www.facebook.com/5330548481'},
		{id:'12348', name: 'Kamran', thumb_url: 'https://photos.bandsintown.com/thumb/8479721.jpeg', facebook_page_url:'http://www.facebook.com/5330548481'},
		{id:'12349', name: 'Hannan', thumb_url: 'https://photos.bandsintown.com/thumb/8479721.jpeg', facebook_page_url:'http://www.facebook.com/5330548481'},
		{id:'12351', name: 'Zain', thumb_url: 'https://photos.bandsintown.com/thumb/8479721.jpeg', facebook_page_url:'http://www.facebook.com/5330548481'},
		{id:'12352', name: 'Saqib', thumb_url: 'https://photos.bandsintown.com/thumb/8479721.jpeg', facebook_page_url:'http://www.facebook.com/5330548481'},
		{id:'12353', name: 'Kamran', thumb_url: 'https://photos.bandsintown.com/thumb/8479721.jpeg', facebook_page_url:'http://www.facebook.com/5330548481'}
	])

	return (
		<div className='page-bg'>

			{/* Top Searchbar container*/}
			<div className='container pt-3 pb-3 pt-sm-5 pb-sm-5'>
				
				<div className={'row justify-content-center'}>
					
					<div class="input-group input-group-lg col-10 col-sm-8 col-md-8 col-lg-5">
						
						<input type="text" className={'form-control search-input'}
							placeholder="Search Artist"
							name="artists"
							list="artists"
						/>
						<datalist id="artists">
							{
								artistList.map(
									(artist, index) => (<option key={'artist'+index} value={artist}/>)
								)
							}
						</datalist>

						<button class="btn btn-search" type="button" id="button-addon2">
							<Search/>
						</button>
					</div>
				</div>
			</div>

			<div className='container-fluid'>
				{
					results.length > 0 && <p className="mb-3 text-center"><b>{results.length}</b> results found for "{}"</p>
				}
				<div className='row'>
					{
						results.map((artist, index) => {
							return (
								<ArtistCard {...{artist, index}}/>
							)
						})
					}
				</div>
			</div>

		</div>
	)
}

Home.propTypes = {

}

export default Home
