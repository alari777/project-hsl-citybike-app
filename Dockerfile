FROM node:16-alpine

WORKDIR /app
COPY package.json package-lock.json* ./

RUN npm ci
COPY ./ ./

ENV NODE_ENV production

RUN npm run build
RUN npm prune --production

CMD npm start
EXPOSE 3000
