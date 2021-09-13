let searchBox = document.getElementById("searchBox");

searchBox.addEventListener("keyup", ({ key }) => {
	if (key === "Enter") {
		let searchQuery = searchBox.value;
		let searchWords = searchQuery.split(" ");
		let searchQueryFormatted = "";

		searchWords.map((word) => {
			if (word !== searchWords[0]) {
				searchQueryFormatted += "+" + word;
			} else {
				searchQueryFormatted += word;
			}
		});

		//console.log(searchQueryFormatted);
		window.location = `https://www.google.com/search?q=${searchQueryFormatted}`;
	}
});

let youtube = document.getElementById("youtube");
let twitch = document.getElementById("twitch");
let gmail = document.getElementById("gmail");
let github = document.getElementById("github");
let chess = document.getElementById("chess");

youtube.addEventListener("click", function () {
	window.location = "https://www.youtube.com";
});

twitch.addEventListener("click", function () {
	window.location = "https://www.twitch.tv";
});

gmail.addEventListener("click", function () {
	window.location = "https://mail.google.com/";
});

github.addEventListener("click", function () {
	window.location = "https://github.com";
});

chess.addEventListener("click", function () {
	window.location = "https://www.chess.com";
});

function clock() {
	let date = new Date();
	let hrs = date.getHours();
	let mins = date.getMinutes();

	hrs = hrs < 10 ? `0${hrs}` : hrs;
	mins = mins < 10 ? `0${mins}` : mins;

	let time = `${hrs}:${mins}`;
	setInterval(clock, 5000);
	document.getElementById("clock").innerText = time;
}
clock();
