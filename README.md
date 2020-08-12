# gomojo-loading-screen

> Go Mojo Loading Screen

[![NPM](https://img.shields.io/npm/v/gomojo-loading-screen.svg)](https://www.npmjs.com/package/gomojo-loading-screen) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save gomojo-loading-screen
```

## Usage

```tsx
import React, { Component } from 'react'

import LoadingScreen from 'gomojo-loading-screen'
import 'gomojo-loading-screen/dist/index.css'

<LoadingScreen
	isVisible={true}
	message="Your message"
	bgColor="#000"
	bgMessage="rgba(0, 0, 0, 0.2)"
	bgImage="../path-to-your-background-image"
	color="#FFF"
	fontFamily="HVD"
	fontSize="2rem"
	logo="../path-to-you-logo"
	spinnerColor="#000"
	landscapeGame={true}
/>
```

## Options

| Required | Parameter         | Type      | Example                          | Description                                             |
| :------: | ----------------- | --------- | -------------------------------- | ------------------------------------------------------- |
| &#10003; | **isVisible**     | `boolean` | true                             | *Determine if the component is load or not*             |
| &#10003; | **message**       | `string`  | Chargement ...                   | *Loading message*                                       |
| &#10003; | **bgColor**       | `string`  | #FFF                             | *Set the background color*                              |
| &#10003; | **bgImage**       | `string`  | ../path-to-your-background-image | *Set the background image*                              |
| &#10003; | **color**         | `string`  | #000                             | *Set the descritpion's color*                           |
| &#10003; | **bgMessage**     | `string`  | rgba(0, 0, 0, 0.2)               | *Set the message background color*                           |
| &#10003; | **fontFamily**    | `string`  | HVD                              | *Set the font family*                                   |
| &#10003; | **fontSize**      | `string`  | 2rem                             | *Set the font size*                                     |
| &#10003; | **logo**          | `string`  | ../path-to-your-logo             | *Set the logo*                                          |
| &#10003; | **spinnerColor**  | `string`  | #FFF                             | *Set the spinner color*                                 |
| &#10003; | **landscapeGame** | `bool`    | true                             | *Determine if a rotation is necessary on mobile device* |

## License

MIT © [bsisic](https://github.com/bsisic)
