import React, {useState} from 'react'
import PropTypes from 'prop-types'

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
		{id:'12345', name: 'Hannan', url: '', imageUrl:''}
	])

	return (
		<div className='page-bg'>

			{/* Top Searchbar container*/}
			<div className='container pt-3 pb-3 pt-sm-5 pb-sm-5'>
				
				<div className={'row justify-content-center'}>
					
					<div class="input-group col-10 col-sm-8 col-md-8 col-lg-5">
						
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

			</div>

		</div>
	)
}

Home.propTypes = {

}

export default Home
