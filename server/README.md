## Available Scripts

In the project directory, you can run:

`npm start` -starts backend

## API Documentations
https://documenter.getpostman.com/view/1976870/SWLe67tK?version=latest

## File Structure
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
   |   └── M2MMiddleware.js      // Middleware to get accesstoken for communication with auth0 to update users
   ├── Model               // Home components of project
   |   └── blogModel             // Model for blod data in mongodb
   ├── routes               // Routes of project
   |   ├── routes.js             // main route connecting all routes  
   |   ├── blogRoute.js          // blog route with CRUD operations
   |   └── userRoute.js          // user route with update user operation
   ├── Utils                // Common utilility functions of project
   ├── .babelrc         // used to convert ECMAScript 2015+ code into a backwards compatible version of JS
   ├── index.js         
   └── package.json     
```