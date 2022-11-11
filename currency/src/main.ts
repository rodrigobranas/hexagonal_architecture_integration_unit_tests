import express from "express";
const app = express();
app.get("/currencies", function (req, res) {
	res.json({
		usd: 3
	});
})
app.listen(3001);

