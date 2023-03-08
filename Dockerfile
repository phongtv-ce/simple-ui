FROM node:18.14.2-alpine as build-stage
WORKDIR /app
COPY . .

RUN yarn install
RUN yarn build

# deploy stage
FROM nginx:1.23.1-alpine as deploy-stage
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/build /usr/share/nginx/html
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/
CMD ["nginx", "-g", "daemon off;"]
