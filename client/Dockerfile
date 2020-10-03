FROM node:14-alpine
RUN apk update && apk add bash

RUN mkdir -p /app/client
WORKDIR /app/client
RUN yarn install

CMD ["yarn", "start"]
