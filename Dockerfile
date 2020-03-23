FROM node:alpine as builder
WORKDIR /app
COPY package.json ./
RUN npm i
COPY package*.json ./
RUN npm install --silent
RUN npm run build
# /app/build

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html

