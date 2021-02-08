import {BASE_URL} from '../ServiceURLs'

test('Base URL Test', ()=>{
	expect(BASE_URL).toBe("https://rest.bandsintown.com/artists/")
})