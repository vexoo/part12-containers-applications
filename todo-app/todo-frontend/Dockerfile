# The first FROM is now a stage called build-stage
FROM node:16 AS base
WORKDIR /usr/src/app
COPY . .

FROM base as test
ENV CI=true
RUN npm ci
RUN [ "npm", "run", "test" ]

FROM base as build
ENV REACT_APP_BACKEND_URL=http://localhost:8080/api/
COPY --from=test /usr/src/app /usr/src/app
RUN npm ci --production
RUN npm run build

FROM nginx:1.20-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html