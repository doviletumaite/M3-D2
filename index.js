fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "f807b1afacmshb1c5085d59d275bp121a65jsn27df22b947a6",
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
	}
})
.then((response) => response.json()) 
.then ((data) =>{
    console.log("resolved")
	console.log(data);
})
.catch(err => {
	console.error(err);
});