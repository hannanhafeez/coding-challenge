import React, {useState} from 'react'
import PropTypes from 'prop-types'

//Components
import ArtistCard from '../../components/ArtistCard'
import DetailCard from '../../components/DetailCard'

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss'

//Assets
import {ReactComponent as Search} from '../../assets/svg/search.svg'
import {ReactComponent as BackArrow} from '../../assets/svg/back-arrow.svg'

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

const Results = props => {

	const artist = {id:'12345', name: 'Hannan', thumb_url: 'https://photos.bandsintown.com/thumb/8479721.jpeg', facebook_page_url:'http://www.facebook.com/5330548481'}

	const [results, setResulsts] = useState(dummyData)

	return (
		<div className='page-bg'>

			{/* Top Searchbar container*/}
			<div className='container-fluid pt-3'>
				<div className={'container back-Btn-container'}>
					<BackArrow />
					<p className={"ml-2 mb-0"}>Back to results</p>
				</div>
				<div className={'row justify-content-center pt-3 pb-3 pt-sm-5 pb-sm-5'}>
				
					<ArtistCard {...{artist}}/>
					
				</div>
			</div>

			<div className='container'>
				{
					results.length > 0 && <p className="mb-3 text-center"><b>{results.length}</b> upcoming events</p>
				}
				<div className='row'>
					{
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
