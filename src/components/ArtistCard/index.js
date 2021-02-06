import React, {useState} from 'react'
import PropTypes from 'prop-types'

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss'

String.prototype.trimLeft = function(charlist) {
  if (charlist === undefined)
    charlist = "\s";

  return this.replace(new RegExp("^[" + charlist + "]+"), "");
};

function ArtistCard({artist, index}) {
	return (
		<div key={`${index}-${artist.id}`} className="col-12 col-sm-6 col-md-4 mb-3">	
			<div className={'media p-3 media-container'}>
				<img className="align-self-center mr-3 thumbImg" 
					src={artist.thumb_url} alt={artist.name}
				/>
				
				<div className="media-body text-container">
					<h5 className="">{artist.name}</h5>
					<a href={artist.facebook_page_url} target="_blank">
						{
							artist.facebook_page_url.trimLeft('http://www.')
						}
					</a>
				</div>
			</div>
		</div>
	)
}

export default ArtistCard
