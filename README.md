# SF Libraries Web App

This is a single page app that was made for the final project for the Front End Nanodegree. I used React, Google Maps API, Foursquare API, components and libraries to show libraries near Twitter in SF. A hamburger menu can be clicked to drop down the nearby markers. Each marker can be selected to show more information. The list of venues can be filtered through the search bar by matching strings.

# How to run

Enter/ do these commands in the terminal:

* Clone this repo `https://github.com/byn3/hood_map.git`  
* CD into the repo `cd hood_map`  
* npm install `npm install`  
* npm start `npm start`  
* A browser should be opened automatically. If not then open any browser and go to `http://localhost:3000`  

Enjoy!

## The front page looks like this

![This is a map of SF and libraries by Twitter and 9th street.](https://github.com/byn3/hood_map/blob/master/Map1.png)


## And the drop down hamburger menu looks like this. It has a search filter.

![This screen shot shows the drop down hamburger menu](https://github.com/byn3/hood_map/blob/master/Map2.png)




Regarding the Foursquare API, I limited it to 15 results and a 1 km radius. There is an production mode version that utuilizes a service worker for offline usage. When a location is selected, furthur info about the venue is taken from the Foursquare API.



### Thanks to all the guides and walkthroughs!
Thanks to the live help, student classrooms, forums, and to the project coaches!!! Doug Brown, Forrest, Yahya Elharony were big MVPs.

Also thanks to all these resources. https://www.diigo.com/outliner/fkkuvb/Udacity-Neighborhood-Map-Project-(project-%237)?key=25wgqnwals

#### How to run the Production Mode

* npm run build  
* Go to the build directory and start a localhost with python  
* python -m SimpleHTTPServer 8000  
* Go to http://localhost:800  



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
