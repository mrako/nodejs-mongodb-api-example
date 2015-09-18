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

    curl -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfX3YiOjAsInBhc3N3b3JkIjoidGVzdCIsImVtYWlsIjoibWVAbXJha28uY29tIiwiX2lkIjoiNTVkYjk2ODY4ZDFlZTI1YTllMDkxODgwIn0.zuLEYWuB1z7M5Qf6roNB5F8K5BcMex2tXatTbl7Htds" http://localhost:9000/posts

    curl -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfX3YiOjAsInBhc3N3b3JkIjoidGVzdCIsImVtYWlsIjoibWVAbXJha28uY29tIiwiX2lkIjoiNTVkYjk2ODY4ZDFlZTI1YTllMDkxODgwIn0.zuLEYWuB1z7M5Qf6roNB5F8K5BcMex2tXatTbl7Htds" --data "name='Five fine vacuum cleaners for sale!'" http://localhost:9000/posts

    curl -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfX3YiOjAsIl9pZCI6IjU1ZGIzMGM5YmY3ODgwMTEwMGZlNTNjMCJ9.71swhkFD22sBoonjgP3qAks7rnAFOyKvg_2F6dnqKB4" https://nodejs-mongodb-api-example.herokuapp.com/posts

## Deploying to Heroku

    heroku config:set JWT_SECRET=verysecretstring
    git push heroku master
