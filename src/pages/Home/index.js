import React, {useState, useRef} from 'react'
import PropTypes from 'prop-types'
import {useSavedArtistNames, useSavedArtist} from '../../hooks/useStorage'


//Components
import ArtistCard from '../../components/ArtistCard'

//Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss'

//Assets
import {ReactComponent as Search} from '../../assets/svg/search.svg'
import {ReactComponent as Loading} from '../../assets/svg/loading.svg'

// Services
import { fetchArtists } from "../../services/Home.services";

const dummyData = [
	{id:'12345', name: 'Hannan', thumb_url: 'https://photos.bandsintown.com/thumb/8479721.jpeg', facebook_page_url:'http://www.facebook.com/5330548481'},
	{id:'12346', name: 'Zain', thumb_url: 'https://photos.bandsintown.com/thumb/8479721.jpeg', facebook_page_url:'http://www.facebook.com/5330548481'},
	{id:'12347', name: 'Saqib', thumb_url: 'https://photos.bandsintown.com/thumb/8479721.jpeg', facebook_page_url:'http://www.facebook.com/5330548481'},
	{id:'12348', name: 'Kamran', thumb_url: 'https://photos.bandsintown.com/thumb/8479721.jpeg', facebook_page_url:'http://www.facebook.com/5330548481'},
	{id:'12349', name: 'Hannan', thumb_url: 'https://photos.bandsintown.com/thumb/8479721.jpeg', facebook_page_url:'http://www.facebook.com/5330548481'},
	{id:'12351', name: 'Zain', thumb_url: 'https://photos.bandsintown.com/thumb/8479721.jpeg', facebook_page_url:'http://www.facebook.com/5330548481'},
	{id:'12352', name: 'Saqib', thumb_url: 'https://photos.bandsintown.com/thumb/8479721.jpeg', facebook_page_url:'http://www.facebook.com/5330548481'},
	{id:'12353', name: 'Kamran', thumb_url: 'https://photos.bandsintown.com/thumb/8479721.jpeg', facebook_page_url:'http://www.facebook.com/5330548481'}
]

const Home = ({}) => {

	//State objects
	const [isFetching, setFetching] = useState(false)
	const [artist, saveArtist] = useSavedArtist()
	const [names, saveName] = useSavedArtistNames()
	const results = artist ? [artist] : []

	//Refs
	const inputRef = useRef(null)

	// Events
	const onSearchPressed = () => {
		
		const name = inputRef.current.value.trim()
		if (name === ''){
			alert('Please enter a name first!')
			return
		}
		saveName(name)
		setFetching(true)
		fetchArtists(name)
			.then(res => res.json())
			.then(response=>{
				console.log(response);
				saveArtist(response)
			})
			.catch(error=>{
				console.log(error);
				alert('An unknown error occured while fetching data. Please try again later!')
			})
			.finally(()=>setFetching(false))
		
	}

	return (
		<div className='page-bg'>

			{/* Top Searchbar container*/}
			<div className='container pt-5 pb-5'>
				
				<div className={'row justify-content-center'}>
					
					<div className="input-group input-group-lg col-12 col-md-8 col-lg-5">
						
						<input ref={inputRef} type="text" className={'form-control search-input'}
							placeholder="Search Artist"
							name="artists"
							list="artists"
						/>
						<datalist id="artists">
							{
								names.map(
									(artist, index) => (<option key={`artist-${index}`} value={artist}/>)
								)
							}
						</datalist>

						<button className="btn btn-search" type="button" id="button-addon2" onClick={onSearchPressed}>
							<Search/>
						</button>
					</div>
				</div>
			</div>

			{/* Results container */}
			<div className='container'>
				{
					results.length > 0 && <p className="mb-3 text-center"><b>{results.length}</b> results found for "{artist?.name}"</p>
				}
				<div className='row justify-content-center'>
					{
						isFetching 
						?
							// Show loading
							<div className='mt-5'>
								{<Loading/>}
							</div>
						:
						 	// Show results
							results.map((artist, index) => (
								<ArtistCard clickable={true}
									key={`${index}-${artist.id}`} 
									{...{artist, index}}
								/>
							))
					}
				</div>
			</div>

		</div>
	)
}

Home.propTypes = {

}

export default Home
