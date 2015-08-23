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

    curl --data '{"email":"me@mrako.com", "password":"test"}' http://localhost:9000/signin

    curl --data "email=me@mrako.com&password=test" http://localhost:9000/signin
    curl --data "email=me@mrako.com&password=test" http://localhost:9000/login

    curl -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfX3YiOjAsInBhc3N3b3JkIjoidGVzdCIsImVtYWlsIjoibWVAbXJha28uY29tIiwiX2lkIjoiNTVkOWNjOWZkNzcwODQ2YjI0NTVmNTNkIn0.1_TXqg3ZsK8pRWx0oEcTfsZerqrfmwoAxxpKj4ruxq8" http://localhost:9000/offers

