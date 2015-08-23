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

    curl --data '"user":{"email":"me@mrako.com", "password":"test"}' http://localhost:9000/signin

    curl --data "email=me@mrako.com&password=test" http://localhost:9000/signin
    curl --data "email=me@mrako.com&password=test" http://localhost:9000/login

    curl -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfX3YiOjAsInBhc3N3b3JkIjoidGVzdCIsImVtYWlsIjoibWVAbXJha28uY29tIiwiX2lkIjoiNTVkOWNhMmQ5NjY0NTMxZjI0NzYyMTFkIn0.3Zg5aS7sxiwDsvYSuCca_kNEMGzA_Yf-P3mHm1mYucg" http://localhost:9000/offers

