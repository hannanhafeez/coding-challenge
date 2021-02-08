import {app_id, fetchArtistEvents} from '../Results.services'

test('app_id is anything', ()=>{
	expect(app_id).toBe('anything')
})

test('fetchArtists resolves', ()=>{
	return fetchArtistEvents('Maroon 5')
			.then(res=>expect(res).toHaveProperty('json'))
})
