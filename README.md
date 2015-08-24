# API Example using NodeJS and Mongo

## Prerequisites

* [nodejs](https://nodejs.org/)
* [mongodb](https://www.mongodb.org/)

## Setup

    npm install

## Running

    grunt serve

## Testing

    grunt test

## Requests

    curl --data "email=me@mrako.com&password=test" http://localhost:9000/signin
    curl --data "email=me@mrako.com&password=test" http://localhost:9000/login

    curl -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfX3YiOjAsInBhc3N3b3JkIjoidGVzdCIsImVtYWlsIjoibWVAa2l2aWt1bnUuY29tIiwiX2lkIjoiNTVkYTA0ZDYwODRlMjE5MzI2NTllMTYwIn0.u76LBZUGFwfo_xXla8Jmc6hXAyX_R7osZvrjnsFOMoY" http://localhost:9000/offers

    curl -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfX3YiOjAsIl9pZCI6IjU1ZGIzMGM5YmY3ODgwMTEwMGZlNTNjMCJ9.71swhkFD22sBoonjgP3qAks7rnAFOyKvg_2F6dnqKB4" https://nodejs-mongodb-api-example.herokuapp.com/offers

## Deploying to Heroku

    heroku config:set JWT_SECRET=verysecretstring
    git push heroku master
