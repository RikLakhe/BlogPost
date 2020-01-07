This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Available Scripts

In the project directory, you can run:

### `npm start`
Starts frontend
### `npm test`

### `npm run build`

### `npm run eject`

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