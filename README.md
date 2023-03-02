# Chess Board

This project is for Roc8 assignment created on 26 Feb 2023.
The App is based on ReactJS consisting of:

- single page application under App.js
- useState hook imported from react
- uses functions like filter and map

You can visit the hosted site at [https://roc8-chessboard.netlify.app](https://roc8-chessboard.netlify.app/)

If you click on any tile, it will highlight all the tiles that a knight can move to.

### Screenshots
![ss1](https://user-images.githubusercontent.com/50284087/221410057-fe8763e3-6613-4891-a265-9d38a8b02794.png)
![ss](https://user-images.githubusercontent.com/50284087/221410064-c97c6acb-dd7e-42df-a71d-732e378a90a2.png)
![ss3](https://user-images.githubusercontent.com/50284087/221410089-fd4a0d6c-98fe-4df9-8a67-2cfd50f04c64.png)


If you want to run it locally follow:

Clone the repo
`git clone git@github.com:vanshika703/chess-board.git`
In the project directory, you can run:

to install dependency run `npm install` and to start `npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

To build the app for production run: `npm run build`

Builds the app for production to the `build` folder.\

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

Your app is ready to be deployed!

### Deployment

Currently the app is deployed using Netlify. And it retriggers deployment on the master branch on every commit.
it runs `npm build` and then serves the index.html generated under build folder.
