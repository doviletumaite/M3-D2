let albums = []
let error = false 
function searchDeezer (query) {
	fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem" + query, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "f807b1afacmshb1c5085d59d275bp121a65jsn27df22b947a6",
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
	}
})
.then((response) => response.json()) 
.then ((data) =>{
    console.log("resolved")
	if (data.data) {
		const obj = { title: query, albums: data.data }
		albums.push(obj)
	} else {
		error = true
	}
	
})
.catch(err => {
	console.log("rejected")
	console.error(err);
	error = true
});
}
function cardDeck(album) {
	return `
	<div class="card-deck" style="padding-left: 1%; padding-right: 1%;">
	<div class="card mb-3" style="max-width: 540px; background-color: rgba(59, 56, 56, 0.349) !important; margin-right: 1%">
	  <div class="row no-gutters">
		<div class="col-md-4">
		  <img src="${album.cover}" class="card-img-top" style="padding: 0;" alt="...">
		</div>
		<div class="col-md-8">
		  <div class="card-body" style="padding: 1rem;">
			<h5 class="card-title">${album.title}</h5>
		  </div>
		</div>
	  </div>
	</div>
	`
}
function albumRow (title, albumHTML) {
	return `
	<div class="card-deck" style="padding-left: 1%; padding-right: 1%;">
	<div class="card mb-3" style="max-width: 540px; background-color: rgba(59, 56, 56, 0.349) !important; margin-right: 1%">
	</div>
     ${albumsHTML}
	</div>
	`
}
window.onload = function () {
	searchDeezer("")
	searchDeezer("")
	searchDeezer("")
	//console.log(albums)
	const renderBotton = document.querySelector("#render")
	renderBotton.addEventListener("click", function () {
		alert("render is clicked!")

		const pageContent = document.querySelector(".page-content")
		pageContent.childNodes.forEach( (node, index) =>{
			if (index !== 1 ) {
				node.remove()
			}
		}
		)
		console.log(albums)
	})
}