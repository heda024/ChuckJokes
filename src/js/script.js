// Get DOM elements
const jokeButton = document.querySelector('.get-joke')
const jokeContainer = document.querySelector('.joke-container')

// Fetch joke function

const fetchJoke = async ()=>{
	const response = await fetch('https://api.chucknorris.io/jokes/random')
	const data = await response.json();
	renderJoke(data.value)
}

// Render joke function

const renderJoke = (joke)=>{
	const paragraph = document.createElement('p');

	jokeContainer.appendChild(paragraph);

	paragraph.textContent = joke
}

jokeButton.addEventListener('click', fetchJoke);
