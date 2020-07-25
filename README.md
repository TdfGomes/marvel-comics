# Marvel Comics

![CI](https://github.com/TdfGomes/marvel-comics/workflows/CI/badge.svg?branch=master&event=push)

This app was built with [CRA](https://create-react-app.dev/) and [express](https://expressjs.com/) using the public [marvel api](https://developer.marvel.com/)
Here you can list all the marvel comics, sorting and filtering by your favourite marvel character.

## How to run it

- you will need to clone this repo
- you will need to get a marvel api and key public key and store them in a `.env` file in the [server](/server) folder
- then you will run `yarn` in the root folder to install all the depencies
- after the instaltion you can run `yarn start:dev`

## For Production

I am using heroku as a deployment and hosting service you can choose a different one if you want.
To make this production ready you will need to run `yarn build`

Check out the live [demo](https://allmarvelcomics.herokuapp.com/comics)
