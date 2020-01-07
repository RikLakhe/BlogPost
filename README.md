## Blog Project
A simple records system using MongoDB, Express.js, React.js, and Node.js with real-time Create, Read, Update, and Delete operations.

![Node Version](https://img.shields.io/badge/node-v13.5.0-yellowgreen.svg)
![NPM Version](https://img.shields.io/badge/npm-v6.13.4-yellowgreen.svg)

#### Back-end
![MongoDB Version](https://img.shields.io/badge/mongodb-v3.6.3-blue.svg)
![Mongoose Version](https://img.shields.io/badge/mongoose-v5.8.3-blue.svg)
![Axios Version](https://img.shields.io/badge/axios-v0.19.0-blue.svg)

#### Front-end
![React Version](https://img.shields.io/badge/react-v16.12.0-green.svg)
![Ant-Design Version](https://img.shields.io/badge/antd-v3.26.5-green.svg)
![Axios Version](https://img.shields.io/badge/axios-v0.19.0-green.svg)

## Get Started Instructions

##### 1.Prerequisites
- [NodeJs](https://nodejs.org/en/)
- [NPM](https://npmjs.org/) - Node package manager

##### 2.Installation
Fork, then download or clone the repository :
```bash
git clone https://github.com/<your-user-name>/BlogPost.git
```

On the command prompt run the following commands to concurrently install:
```bash
cd BlogPost
npm install
```

Finally, start the application:
```bash
npm start
```

## Available Scripts

In the project directory, you can run:

### `npm start` 
Concurrently run server and client

### `npm install` 
Concurrently install server and client packages

### `npm run client-install` 
Install client packages

### `npm run server-install` 
Install server packages

### `npm run server` 
Runs server

### `npm run client` 
Runs client


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

##### Server
MERN-BlogPost project uses express web framework. Our app sits in index.js
###### Files
```
.
└── server
   ├── config
   |   └── appConfig.js         // config file of project
   ├── controller             // Controller for mongodb
   |   └── blogController.js      // Controller for BlogModel
   ├── middleware            // Context of project
   |   ├── jwtMiddleware.js      // Middleware to check jwt token in request
   |   └── M2MMiddleware.js      // Middleware to get accesstoken for communication with auth0 to update users
   ├── Model               // Home components of project
   |   └── blogModel             // Model for blod data in mongodb
   ├── routes               // Routes of project
   |   ├── routes.js             // main route connecting all routes  
   |   ├── blogRoute.js          // blog route with CRUD operations
   |   └── userRoute.js          // user route with update user operation
   ├── containers              // containers of project
   ├── reducers                // reducers of project
   ├── routes                  // Sub routes of project
   |   └── AppRoute.js            // Routes private and public in project 
   ├── store                  // Store of project
   |   ├── configureStore.js       // configures store for redux with middleware and thunk
   |   └── history.js              // history of the project routes
   ├── Utils                // Common utilility functions of project
   ├── .babelrc         // used to convert ECMAScript 2015+ code into a backwards compatible version of JS
   ├── index.js         
   └── package.json     

```