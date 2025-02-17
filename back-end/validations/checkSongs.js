const { reset } = require("nodemon");

const checkName = (req, res, next) => {
	if (req.body.name) {
		next();
	} else {
		res.status(400).json({ error: "Name is required" });
	}
};

const checkArtist = (req, res, next) => {
	if (req.body.artist) {
		next();
	} else {
		res.status(400).json({ error: "Artist is required" });
	}
};

const checkAlbum = (req, res, next) => {
	if (req.body.album) {
		next();
	} else {
		res.status(400).json({ error: "Album is required" });
	}
};

const checkTime = (req, res, next) => {
	if (req.body.time) {
		next();
	} else {
		res.status(400).json({ error: "Time is required" });
	}
};

const checkBoolean = (req, res, next) => {
	const { is_favorite } = req.body;
	if (is_favorite == "true" || is_favorite == "false" || is_favorite == undefined) {
		next();
	} else {
		res.status(400).json({ error: "is_favorite must be a boolean value" });
	}
};

const checkForNoAdditionalParams = (req, res, next) => {
	const { name, artist, album, time, is_favorite, ...otherStuff } = req.body;
	if (
		otherStuff &&
		Object.keys(otherStuff).length === 0 &&
		Object.getPrototypeOf(otherStuff) === Object.prototype
	) {
		next();
	} else {
		res.status(400).send({ error: "keep it short and sweet: no extra paramaters!" });
	}
};

module.exports = {
	checkName,
	checkBoolean,
	checkArtist,
	checkAlbum,
	checkTime,
	checkForNoAdditionalParams,
};
