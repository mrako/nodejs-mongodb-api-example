# API Example using NodeJS and Mongo

## Prerequisites

* [nodejs](https://nodejs.org/)
* [mongodb](https://www.mongodb.org/)
* [grunt](http://gruntjs.com/)

### Install prerequisites

    brew install node mongo
    npm install grunt-cli -g

## Setup

    npm install

## Running

    grunt serve

## Testing

    grunt test

## Requests

### Signup

    curl --data "email=me@mrako.com&password=test" http://localhost:9000/signup

### Login

    curl --data "email=me@mrako.com&password=test" http://localhost:9000/login

### Posts

    curl -H "Authorization: Bearer <yourbearertoken>" http://localhost:9000/posts

    curl -H "Authorization: Bearer <yourbearertoken>" --data "name='Five fine vacuum cleaners for sale!'" http://localhost:9000/posts

### Heroku

    curl -H "Authorization: Bearer <yourbearertoken>" https://nodejs-mongodb-api-example.herokuapp.com/posts

## Deploying to Heroku

    heroku config:set JWT_SECRET=verysecretstring AWS_ACCESS_KEY_ID=yourawsaccesskey AWS_SECRET_ACCESS_KEY=yourawssecretkey
    git push heroku master
