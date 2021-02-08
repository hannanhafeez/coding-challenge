import {app_id, fetchArtists} from '../Home.services'

test('app_id is anything', ()=>{
	expect(app_id).toBe('anything')
})
test('fetchArtists resolves', ()=>{
	return fetchArtists('Maroon 5')
			.then(res=>expect(res).toHaveProperty('json'))
})
