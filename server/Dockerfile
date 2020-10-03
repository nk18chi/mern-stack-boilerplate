FROM node:14-alpine
RUN apk update && apk add bash
RUN yarn global add nodemon

RUN mkdir -p /app/server
WORKDIR /app/server
RUN yarn install

CMD ["yarn", "run", "server"]
