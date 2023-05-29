FROM node:16 AS base
WORKDIR /usr/src/app

FROM base as test
ENV NODE_ENV test
WORKDIR /usr/src/app
COPY --chown=node:node . .
RUN npm ci
RUN CI=true npm run test
USER node

FROM base as build
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY --chown=node:node . .
RUN npm ci --omit=dev
USER node
CMD ["node", "./index.js"]