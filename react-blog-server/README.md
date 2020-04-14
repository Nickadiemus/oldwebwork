Welcome!
===================
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Author: Nick Sladic
Date: August 7, 2017
Basic Blog
Description: This application is a  Basic Blog Functionality with basic user verification using an express.js
as the back-end verification.

Documents
-------------

Basic useful feature list:

 * A user can edit his or her blog posts only.
 * Any person can view blogs on the home page

Packages Used
-------------
Client Side:

*   axios - Version:  0.16.2
*   babel-cli - Version:  6.24.1
*   babel-preset-es2015 - Version:  6.24.1
*   bcrypt - Version:  1.0.2
*   bluebird - Version:  3.5.0
*   body-parser - Version:  1.17.2
*   bookshelf - Version:  0.10.4
*   jsonwebtoken - Version:  7.4.1
*   knex - Version:  0.13.0
*   lodash - Version:  4.17.4
*   pg - Version:  7.0.2
*   shortid - Version:  2.2.8
*   validator - Version:  8.0.0
*   bcrypt - Version: 1.0.2
*   bookshelf - Version: 0.10.4
*   express - Version: 4.15.3
*   jsonwebtoken - Version: 7.4.1
*   nodemon - Version: 1.11.0"

Setup
-------------

1. Install [Node.js](https://nodejs.org/en/) then open **Terminal**

2. Install [Create-React-App]() globablly

    	npm -g create-react-app
3. cd into **react-blog-master** and **react-blog-server-master** directory and run the command

		npm install
	This should install all the packages required to run the app

4. Install postgresql globally with the command

		brew install -g postgresql

    this should allow you to use the database with no issues

5. After installation of postgresql start the server with the command

		pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start

6. After this server has started it should be available to use

    Now run the command

    	npm start

    this should run the basic scripts and deploy the local developer at **localhost:3000** (client) and **localhost:8080** (server)
