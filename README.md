<img align="center" width="400" height="103,509" src="https://user-images.githubusercontent.com/34600369/40012510-d42b8988-57a2-11e8-8c71-e44f6379f248.png">

# Piano Keyboard

> To play piano using CSS and JavaScript

[![Netlify Status](https://api.netlify.com/api/v1/badges/1289139d-1809-4ba1-9417-18530eb3caf9/deploy-status)](https://app.netlify.com/sites/felipefialho-piano/deploys)
[![license](https://img.shields.io/github/license/felipefialho/piano.svg)](./license.md)
[![GitHub contributors](https://img.shields.io/github/contributors/felipefialho/piano.svg)](https://github.com/felipefialho/piano/graphs/contributors)

This project uses Pug, Stylus and Webpack.

## Getting Started

```sh
# install dependencies
$ npm i

# Run the project
$ npm start
```

With the commands above, you have everything to start.

### Post CSS libs

For grid system uses [Autoprefixer](https://github.com/postcss/autoprefixer) to make easy use browser prefixes, [Lost](https://github.com/peterramsing/lost) with some help from, [Rucksack](http://simplaio.github.io/rucksack/) for animations, reset and a lot of great mixins, [Rupture](https://github.com/jenius/rupture) for responsive utilities. And [Font Magician](https://github.com/jonathantneal/postcss-font-magician/) to get the webfonts.

### Code Standards

This project uses my own [Coding Style](https://github.com/felipefialho/coding-style) as code reference.

To help you, this project has a `npm run fix` command to fix all eslint errors.

### Tasks

- `npm start`: run all tasks and initialize watch for changes and a server
- `npm run build`: run all production tasks create a `dist` folder to deploy
- `npm run lint`: lint javascript and css
- `npm run fix`: command to fix all eslint errors

## License

MIT License © Felipe Fialho
