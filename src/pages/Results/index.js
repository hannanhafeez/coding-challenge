import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

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

	// State objects
	const artist = {
		thumb_url: "https://photos.bandsintown.com/thumb/8479721.jpeg",
		mbid: "0ab49580-c84f-44d4-875f-d83760ea2cfe",
		support_url: "",
		facebook_page_url: "http://www.facebook.com/5330548481",
		image_url: "https://photos.bandsintown.com/large/8479721.jpeg",
		name: "Maroon 5",
		options: {
			display_listen_unit: false
		},
		id: "510",
		tracker_count: 5810578,
		upcoming_event_count: 40,
		url: "https://www.bandsintown.com/a/510?came_from=267&app_id=anything"
	}
	const [isFetching, setFetching] = useState(false)
	const [results, setResults] = useState([])

	useEffect(() => {
		
		setFetching(true)
		fetchArtistEvents(artist.name)
			.then(res => res.json())
			.then(response=>{
				console.log(response);
				setResults(response)
			})
			.catch(error=>{
				console.log(error);
				alert('An unknown error occured while fetching data. Please try again later!')
			})
			.finally(()=>setFetching(false))

		return () => {}
	}, [])


	return (
		<div className='page-bg'>

			{/* Top Searchbar container*/}
			<div className='container pt-3 pb-1 sticky-top'>
				<div className={'container back-Btn-container'}>
					<BackArrow />
					<p className={"ml-2 mb-0"}>Back to results</p>
				</div>
				<div className={'row justify-content-center pt-3 pb-3 pt-sm-4 pb-sm-4'}>
				
					<ArtistCard {...{artist}}/>
					
				</div>
				{
					results.length > 0 && <p className="text-center"><b>{results.length}</b> upcoming events</p>
				}
			</div>

			<div className='container'>
				<div className={'row' + (isFetching ? "justify-content-center" : '') }>
					{
						isFetching 
						?
							// Show loading
							<div className='mt-5'>
								{<Loading/>}
							</div>
						:
						 	// Show results
							results.map((event, index) => {
								return (
									<DetailCard {...{event, index}}/>
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
