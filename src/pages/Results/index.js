import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {useSavedEvents} from '../../hooks/useStorage'

//React Router
import {
  Link,
  useHistory, useLocation
} from "react-router-dom";

//Components
import ArtistCard from '../../components/ArtistCard'
import DetailCard from '../../components/DetailCard'

//Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss'

//Assets
import {ReactComponent as BackArrow} from '../../assets/svg/back-arrow.svg'
import {ReactComponent as Loading} from '../../assets/svg/loading.svg'

// Services
import { fetchArtistEvents } from "../../services/Results.services";

const dummyData = [
	{
		id: "1020632474",
		url: "https://www.bandsintown.com/e/1020632474?app_id=anything&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
		datetime: "2021-07-21T19:30:00",
		title: "",
		description: "To allow for more Card Members to enjoy the show, American Express has set a two-order limit for this offer. This limit applies across all Cards associated with all of your American Express accounts. Prepaid Cards are not eligible.",
		venue: {
			location: "Denver, CO",
			name: "Pepsi Center",
			latitude: "39.73915",
			longitude: "-104.9847",
			city: "Denver",
			country: "United States",
			region: "CO"
		}
	}, 
	{
		id: "1020632475",
		url: "https://www.bandsintown.com/e/1020632474?app_id=anything&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
		datetime: "2021-07-21T19:30:00",
		title: "",
		description: "To allow for more Card Members to enjoy the show, American Express has set a two-order limit for this offer. This limit applies across all Cards associated with all of your American Express accounts. Prepaid Cards are not eligible.",
		venue: {
			location: "Denver, CO",
			name: "Pepsi Center",
			latitude: "39.73915",
			longitude: "-104.9847",
			city: "Denver",
			country: "United States",
			region: "CO"
		}
	}, 
	{
		id: "1020632476",
		url: "https://www.bandsintown.com/e/1020632474?app_id=anything&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
		datetime: "2021-07-21T19:30:00",
		title: "",
		description: "To allow for more Card Members to enjoy the show, American Express has set a two-order limit for this offer. This limit applies across all Cards associated with all of your American Express accounts. Prepaid Cards are not eligible.",
		venue: {
			location: "Denver, CO",
			name: "Pepsi Center",
			latitude: "39.73915",
			longitude: "-104.9847",
			city: "Denver",
			country: "United States",
			region: "CO"
		}
	}, 
	{
		id: "1020632477",
		url: "https://www.bandsintown.com/e/1020632474?app_id=anything&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
		datetime: "2021-07-21T19:30:00",
		title: "",
		description: "To allow for more Card Members to enjoy the show, American Express has set a two-order limit for this offer. This limit applies across all Cards associated with all of your American Express accounts. Prepaid Cards are not eligible.",
		venue: {
			location: "Denver, CO",
			name: "Pepsi Center",
			latitude: "39.73915",
			longitude: "-104.9847",
			city: "Denver",
			country: "United States",
			region: "CO"
		}
	}, 
	{
		id: "1020632478",
		url: "https://www.bandsintown.com/e/1020632474?app_id=anything&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
		datetime: "2021-07-21T19:30:00",
		title: "",
		description: "To allow for more Card Members to enjoy the show, American Express has set a two-order limit for this offer. This limit applies across all Cards associated with all of your American Express accounts. Prepaid Cards are not eligible.",
		venue: {
			location: "Denver, CO",
			name: "Pepsi Center",
			latitude: "39.73915",
			longitude: "-104.9847",
			city: "Denver",
			country: "United States",
			region: "CO"
		}
	}, 
]

const Results = ({}) => {

	//Hooks
	const history = useHistory()
	const {state: routerState} = useLocation()
	const [events, setEvents] = useSavedEvents()
	
	// State objects
	const artist = routerState?.artist
	const [isFetching, setFetching] = useState(false)
	const [results, setResults] = useState([])

	useEffect(() => {
		
		if(!artist || artist?.upcoming_event_count === 0) {
			// setEvents([])
			return
		}
		if (artist.id === events?.artist_id) return
		setFetching(true)
		fetchArtistEvents(artist?.name)
			.then(res => res.json())
			.then(response=>{
				console.log(response);
				setEvents(artist.id, response)
			})
			.catch(error=>{
				console.log(error);
				alert('An unknown error occured while fetching data. Please try again later!')
			})
			.finally(()=>setFetching(false))
		// setFetching(false)
		// !events && setFetching(false)

		return () => {}
	}, [])

	const getArtists = () =>{
		
	}

	const onBackPressed = () => {
		history.length < 2 
			?	history.replace('/home')
			:	history.goBack()
	}

	return (
		<div className='page-bg'>

			{/* Top Searchbar container*/}
			<div className='container pt-3 sticky-top'>
				<div className={'container back-Btn-container'}
					onClick={onBackPressed}
				>
					<BackArrow />
					<p className={"ml-2 mb-0"}>Back to results</p>
				</div>
				<div className={'row justify-content-center pt-3 pb-3 pt-sm-4 pb-sm-4'}>
				
					{artist && <ArtistCard {...{artist}}/>}
					
				</div>
				
			</div>

			<div className='container pt-2'>
				<div className={'row' + (isFetching ? "justify-content-center" : '') }>
					{
						isFetching 
						?
							// Show loading
							<div className='mt-5'>
								{<Loading/>}
							</div>
						:
						 	// Show results if not loading and if events match with the selected artist
							// Otherwise API will be called when page loads
							(artist?.id === events?.artist_id) && events?.list?.map((event, index) => {
								return (
									<DetailCard 
										key={`${index}-${event.id}`}
										{...{event, index}}
									/>
								)
							})
					}
				</div>
			</div>

		</div>
	)
}

Results.propTypes = {

}

export default Results
