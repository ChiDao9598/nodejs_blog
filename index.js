const express = require("express");
const app = express();
const port = 9999;

app.get("/trangchu", (req, res) => {
	var a = 1;
	var b = 2;
	var c = a + b;
	return res.send("Hello World");
});

app.listen(port, () => console.log(`Your website is running in port ${port}`));
