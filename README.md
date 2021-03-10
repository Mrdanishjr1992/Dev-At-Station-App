# Retro-Game-Maker

> Create 2D maps that can be play on.

> Frontend React application for Dev-At-Station-Game

![INSERT YOUR GRAPHIC HERE](https://imgur.com/a/aUPrggZ)

![INSERT YOUR GRAPHIC HERE](https://imgur.com/a/kK9iRxP)

## Table of Contents (Optional)

- [Installation](#installation)
- [Features](#features)
- [License](#license)

---

## Example (Optional)

```javascript
// Code Snippet!
function cloneMatrix(m) {
	const clone = new Array(m.length);
	for (let i = 0; i < m.length; ++i) {
		clone[i] = m[i].slice(0);
	}
	return clone;
}
function dropTile({ x, y }) {
	setTiles((prev) => {
		const clone = cloneMatrix(prev);
		const tile = {
			...clone[y][x],
			v: activeTile,
		};
		clone[y][x] = tile;
		return clone;
	});
	setSaveMap((prev) => {
		const mapObj = {
			...prev,
			tiles: tiles,
			bgTile: bgTile,
			mapType: tileset,
			size: size,
		};
		return mapObj;
	});
}
```

---

## Installation

- All the `code` required to get started

```shell
    $ mkdir Project
```

### Clone

- Clone this repo to your local machine using `https://github.com/Mrdanishjr1992/Dev-At-Station-App.git` for Frontend React App.
- Clone this repo to your local machine using `https://github.com/Mrdanishjr1992/Dev-At-Station-Api.git` for Backend Men App.

### Setup

> now install npm and bower packages

```shell
$ npm install
$ bower install
```

## Features

- Register to have up to 3 saved files.
- Create and save up to 3 maps.
- Play on saved maps.
- Free trial available.

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2015 © <a href="http://fvcproductions.com" target="_blank">FVCproductions</a>.
