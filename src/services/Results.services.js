import { BASE_URL } from "./ServiceURLs";

export const app_id = 'anything'

export const fetchArtistEvents = (artistName) => {
	const requestOptions = {
		method: 'GET',
		redirect: 'follow'
	};
	
	// To make 'https://rest.bandsintown.com/artists/Maroon%205/events?app_id=anything'
	const url = BASE_URL +  encodeURI(artistName) + '/events?app_id=' + encodeURI(app_id)

	return fetch(url, requestOptions)

}
