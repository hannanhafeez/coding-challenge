import React, {useState} from 'react'
import PropTypes from 'prop-types'

//React Router
import {
  Link
} from "react-router-dom";

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss'

//Asssets
import {ReactComponent as NextArrow} from '../../assets/svg/next-arrow.svg'


String.prototype.trimLeft = function(charlist) {
  if (charlist === undefined)
    charlist = "\s";

  return this.replace(new RegExp("^[" + charlist + "]+"), "");
};

function ArtistCard({artist, index, clickable }) {
	return (
		<div className="col-12 col-sm-12 col-md-6 mb-3">	
			
			<Link className={'media p-3 media-container'}
				to={{pathname:"/events", state:{artist: artist}}} 
			>
				<img className="align-self-center mr-3 thumbImg" 
					src={artist.thumb_url} alt={artist.name}
				/>
				
				<div className="media-body">
					<h5 className="">{artist.name}</h5>
					
					<p className="text-muted">
						Upcoming events: {artist.upcoming_event_count}
					</p>
					
					<p onClick={()=> window.open(artist.facebook_page_url, '_blank')}>
						{
							artist.facebook_page_url && artist.facebook_page_url.trimLeft('http://www.')
						}
					</p>
				</div>
				{
					clickable && (
						<div className='link'>
							<NextArrow/>
						</div>
					)
				}
			</Link>
			
		</div>
	)
}

ArtistCard.propTypes = {
	artist: PropTypes.object,
	index: PropTypes.number,
	clickable: PropTypes.bool
}

ArtistCard.defaultProps = {
	clickable: false,
}

export default ArtistCard
