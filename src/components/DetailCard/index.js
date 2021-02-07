import React, {} from 'react'

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss'

function DetailCard({event, index}) {

	// Converting date to JS date object
	const dateTime = new Date(event.datetime)

	return (
		<div key={`${index}-${event.id}`} className="col-12 col-sm-12 col-md-6 mb-3">	
			<div className="card card-container">
				<div className="card-header">
					<h4><strong>Event Details</strong></h4>
				</div>

				<div className="card-body container-fluid">
					<div className="row">
						<div className="col-12 mt-3 text-center">
							<h5 className="card-title"><strong>Lineup</strong></h5>
							<h5 className="card-text text-white">{event?.lineup.join(', ')}</h5>
						</div>
						<hr/>
						<div className="col-6 mt-3">
							<h5 className="card-title"><strong>Country</strong></h5>
							<h5 className="card-text text-muted">{event?.venue?.country}</h5>
						</div>
						
						<div className="col-6 mt-3">
							<h5 className="card-title"><strong>City</strong></h5>
							<h5 className="card-text text-muted">{event?.venue?.city}</h5>
						</div>
					
						<div className="col-6 mt-3">
							<h5 className="card-title"><strong>Venue</strong></h5>
							<h5 className="card-text text-muted">{event?.venue?.name}</h5>
						</div>
						
						<div className="col-6 mt-3">
							<h5 className="card-title"><strong>City</strong></h5>
							<h5 className="card-text text-muted">{dateTime.toDateString()}</h5>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	)
}

export default DetailCard
