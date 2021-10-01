# MERN-SocialMedia

A social media platform built with the MERN stack. (MongoDB, Express.js, React.js, Node.js)
Onlive Version: [MERN-SocialMedia](https://bit.ly/3Fav1tO)

## Sample User Logins

```
dummy@dummy.com
dummydummy
```

## Tools and Technologies

### Backend and Database

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- BCrypt
- Json Web Token
- Multer
- Express Validator
- Dot env
- Body Parser
- Node Mailer

### Frontend

- React.js
- Font Awesome
- React Routing
- React Context
- CSS Modules
- Custom HTTP hook
- Custom form validation hook
- Custom fonts

## Features

- Users and posts list page
- Signup, Login and reset password features
- Add posts with images
- Delete posts (With or without authentication)
- Send Emails

## Usage

### ES Modules in Node

We use ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.
Also, when importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error
You can also install and setup Babel if you would like

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGODB_URI = your mongodb uri
JWT_KEY = 'abc123'
```

### Install Dependencies (frontend & backend)

```
npm install
cd client
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev
# Run backend only
npm run server
# Run frontend only
npm run client
```

## Build & Deploy

```
# Create frontend prod build
cd client
npm run build
```

There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku

## License

The MIT License
Copyright (c) 2021 Pooyadhgh
