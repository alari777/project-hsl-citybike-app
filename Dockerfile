FROM node:16-alpine

WORKDIR /app
COPY package.json package-lock.json* ./

RUN npm ci
RUN npx prisma init && \
    rm -r /app/prisma && \
    rm -r /app/.env
COPY ./ ./

ENV NODE_ENV production

RUN npx prisma generate

RUN npm run build
RUN npm prune --production

EXPOSE 3000
