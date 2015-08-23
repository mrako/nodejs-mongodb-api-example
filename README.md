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

