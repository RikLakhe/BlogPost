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

## File Structure
##### Client
MERN-BlogPost project's client directory contains all the shared components, routes, modules. <br/> 
Build from <a href="https://github.com/facebook/create-react-app"><strong> create-react-app</strong></a>
###### Files
```
.
└── client
    ├── public                  // all the tests for this module goes here
    |   ├── components               // Sub components of this module
    |   |   ├── Post.spec.js
    |   |   ├── PostList.spec.js
    |   |   ├── PostItem.spec.js
    |   |   └── PostImage.spec.js
    |   ├── pages
    |   |   ├── PostPage.spec.js
    |   |   └── PostViewPage.spec.js
    |   ├── PostReducer.spec.js
    |   └── PostActions.spec.js
    ├── src                   
    |   ├── index.js
    |   ├── assets                  // Sub assests of project
    |   ├── components              // Sub components of project
    |   ├── constants               // Sub cosntants of project
    |   ├── routes                  // Sub routes of project
    |   ├── services                // Sub services of project
    |   ├── styles                  // Sub styles of project constains style of project
    |   ├── components               // Sub utils of project constains common functions
    |   ├── PostPage
    |   |   ├── PostPage.js
    |   |   └── PostPage.css
    |   └── PostViewPage
    |       ├── PostViewPage.js
    |       └── PostViewPage.css
    ├── PostReducer.js
    └── PostActions.js
```

##### Server
MERN-BlogPost project uses express web framework. Our app sits in index.js
###### Files
```
.
└── server
    ├── __tests__                    // all the tests for this module goes here
    |   ├── components               // Sub components of this module
    |   |   ├── Post.spec.js
    |   |   ├── PostList.spec.js
    |   |   ├── PostItem.spec.js
    |   |   └── PostImage.spec.js
    |   ├── pages
    |   |   ├── PostPage.spec.js
    |   |   └── PostViewPage.spec.js
    |   ├── PostReducer.spec.js
    |   └── PostActions.spec.js
    ├── components                   // Sub components of this module
    |   ├── Post.js
    |   ├── PostList.js
    |   ├── PostItem.js
    |   └── PostImage.js
    ├── pages                        // React Router Pages from this module
    |   ├── PostPage
    |   |   ├── PostPage.js
    |   |   └── PostPage.css
    |   └── PostViewPage
    |       ├── PostViewPage.js
    |       └── PostViewPage.css
    ├── PostReducer.js
    └── PostActions.js
```