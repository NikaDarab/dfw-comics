"use strict";
exports.__esModule = true;
var artists_1 = require("../artists");
var link_1 = require("next/link");
var Artists = function () {
    return (React.createElement("div", null, artists_1.artists.map(function (artist) { return (React.createElement(link_1["default"], { href: "/artists/" + artist.name.split(" ").join("") + "/" + artist.id, key: artist.id },
        React.createElement("h3", null, artist.name))); })));
};
exports["default"] = Artists;
