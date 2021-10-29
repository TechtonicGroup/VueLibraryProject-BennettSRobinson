# VueLibraryProject-BennettSRobinson

## Build Setup

```bash
# install dependencies
$ npm install

# install server dependencies
$ cd server && npm install

# serve with hot reload at localhost:3000
$ npm run dev

# run server
$ cd server && nodemon server.js

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate

```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

Contains the main pictures of the app

### `components`

Contains the components for the app including footer, header, form and button template, the main picture
on home screen, and the search bar

### `layouts`

Basic nuxt layout but have a header and footer component. Also includes error boundary vue file.

### `pages`

Contains the main pages of the application which are the home page, bookshelf, details page, add book page, and edit book page

### `store`

Contains the states, actions, and mutations
