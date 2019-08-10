# Base API

## Description
This is a basic API setup based on Express, MongoDB, bcrypt and JSONWebTokens with endpoints for `/register` and `/login` actions.

## Dependencies / Pre-Requisites
The following need to be installed on your device to permit the running this repo
- [NodeJS](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Nodemon](https://nodemon.io/)

## Initial Setup
From the command line, run the following steps

1. `$ npm i` or `$ npm install`

## App launch

2. Start `$ mongod` at the CLI

3. In a separate CLI tab, run `$ nodemon app`

The app should start on `http://localhost:3000/api`, following which you should be able to hit the following endpoints:

- `POST /api/register`
- `POST /api/login`

with Postman or Insomnia.

## App Use

To create a new user, the register endpoint requires JSON in the form

```js
  {
    "user": {
      "username": "name",
      "email": "name@domainname.com",
      "password": "password",
      "passwordConfirmation": "password"
    }
  }
```

To login as that user, the login endpoint requires JSON in the form

```js
{
	"email": "name@domainname.com",
	"password": "password"
}
```