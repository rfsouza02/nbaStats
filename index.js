var http = require("https");

var options = {
	"method": "GET",
	"hostname": "api-nba-v1.p.rapidapi.com",
	"port": null,
	"path": "/players/playerId/94",
	"headers": {
		"x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
		"x-rapidapi-key": "0f2a4b2b3dmsh03b1199fe83a8e3p19352djsn89c33673bf43"
	}
};

var req = http.request(options, function (res) {
	var chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		var body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();