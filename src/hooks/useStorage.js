import React, { useState, useEffect } from 'react'


const ARTIST_NAMES_KEY = "@ARTIST_NAMES_KEY"
const ARTIST_KEY = "@ARTIST_KEY"
const EVENTS_KEY = "@EVENTS_KEY"


export const useSavedArtistNames = () => {
	const [names, setNames] = useState([])

	useEffect(() => {
		const names = JSON.parse(localStorage.getItem(ARTIST_NAMES_KEY))
		console.log(names);
		if (!names) {
			localStorage.setItem(ARTIST_NAMES_KEY, JSON.stringify([]))
		}else{
			console.log(Array.isArray(names))
			if(!Array.isArray(names)){
				localStorage.setItem(ARTIST_NAMES_KEY, JSON.stringify([]))
			}else{
				setNames(names)
			}
		}
		console.log(names);
		return () => {
		}
	}, [])
	
	const saveName = (name) => {
		const index = names.findIndex(value=>value===name) 
		
		if(index === 0){
			return
		}else{
			localStorage.setItem(ARTIST_NAMES_KEY, JSON.stringify([name,...names]))
			setNames([name,...names])
		}
	}

	return [names, saveName]
}

export const useSavedArtist = () => {
	const [artist, setArtist] = useState(null)

	useEffect(() => {
		const savedArtist = JSON.parse(localStorage.getItem(ARTIST_KEY))
		console.log(savedArtist);
		if (savedArtist) {
			setArtist(savedArtist)
		}
		// console.log(savedArtist);
	}, [])
	
	const saveArtist = (artist) => {
		localStorage.setItem(ARTIST_KEY, JSON.stringify(artist))
		setArtist(artist)
	}

	return [artist, saveArtist]
}

export const useSavedEvents = () => {
	const [events, setEvents] = useState(
		JSON.parse(localStorage.getItem(EVENTS_KEY))
	)

	useEffect(() => {
		// const savedEvents = JSON.parse(localStorage.getItem(EVENTS_KEY))
		// console.log(savedEvents);
		// if (savedEvents) {
		// 	setEvents(savedEvents)
		// }
		// console.log(savedEvents);
	}, [])
	
	const saveEvents = (artist_id, list) => {
		localStorage.setItem(EVENTS_KEY, JSON.stringify({artist_id, list}))
		setEvents({artist_id, list})
	}

	return [events, saveEvents]
}