This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## File Structure
##### Client
MERN-BlogPost project's client directory contains all the shared components, routes, modules. <br/> 
Build from <a href="https://github.com/facebook/create-react-app"><strong> create-react-app</strong></a>
###### Files
```
.
└── client
    ├── public                     // Public folder of Frontend  
    ├── src                   
    |   ├── index.js
    |   ├── assets                 // Sub assests of project
    |   ├── components             // Sub components of project
    |   |   ├── Blog               // Blog components of project
    |   |   |   ├── AddForm.js          // Blog Add Form  
    |   |   |   ├── EditForm.js         // Blog Edit Form  
    |   |   |   └── FindForm.js         // Find Blog  
    |   |   ├── Common             // Common components of project
    |   |   |   ├── BlogList            // List componenet of Blog home and blog find 
    |   |   |   └── BlogModel           // Blog model for detail view of blog with comment 
    |   |   ├── Context            // Context of project
    |   |   |   └── Auth0Context        // Auth0 context from login and validation
    |   |   ├── Home               // Home components of project
    |   |   ├── Layout             // Layout components of project
    |   |   |   ├── Body                // Body componenet
    |   |   |   ├── Footer              // Footer componenet
    |   |   |   ├── Header              // Header componenet
    |   |   |   ├── Loading             // Loading componenet 
    |   |   |   ├── Sidenav             // Sidenav componenet 
    |   |   |   └── AppLayout           // layout component holds all above components together
    |   |   └── Profile             // Profile components of project
    |   ├── constants               // Sub cosntants of project
    |   |   ├── actionTypes.js          // Action Types in project  
    |   |   ├── appConfig.js            // Project config file
    |   |   ├── auth_config.js          // Project Auth0 config file need by Auth0spa
    |   |   └── menuRoute.js            // Menus in project 
    |   ├── containers              // containers of project
    |   ├── reducers                // reducers of project
    |   ├── routes                  // Sub routes of project
    |   |   └── AppRoute.js            // Routes private and public in project 
    |   ├── store                  // Store of project
    |   |   ├── configureStore.js       // configures store for redux with middleware and thunk
    |   |   └── history.js              // history of the project routes
    |   ├── services                // Sub services of project
    |   ├── styles                  // Sub styles of project constains style of project
    |   |   ├── normalize.css           // all the css applying for every ant-design components and app
    |   |   └── style.js                // style.compoenets of project
    |   └── utils                  // Utils for project
    |       ├── commmonUtil.js          // common functions of project
    |       └── httpsUtil.js            // common https function with axios
    ├── .env             
    └── package.json
```