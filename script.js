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
