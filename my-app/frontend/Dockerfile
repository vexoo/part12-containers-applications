FROM node:16 AS base
WORKDIR /usr/src/app

FROM base AS build
ENV NODE_ENV=production
COPY . .
RUN npm ci
RUN npm run build

FROM nginx:1.20-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html