# MERN Stack BoilerPlate with Graphql and Typescript

## Environment

- Node.js(14.0.0)
- Express.js(4.17.1)
- React.js(16.13.1)
- MongoDB(5.10.7)
- typescript(4.0.3)
- Graphql(15.3.0)

## Setup

```
$ docker-compose up --build
```

it takes one minutes to build this project.
if you see `Compiled successfully!` on your terminal, access to [http://localhost:3000/](http://localhost:3000/)

### use your local

Modify `server/default.json`

```
{
  "MONGO_URI": "mongodb://localhost:27017/mern-stack-test-db"
}
```

```
$ cd client
$ yarn install
$ yarn start
```

```
$ cd server
$ yarn install
$ yarn run server
```
