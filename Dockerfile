FROM node:alpine as builder
WORKDIR /app
COPY package*.json ./ 
RUN npm install
RUN npm run build
# /app/build

FROM nginx
WORKDIR /usr/share/nginx/html

EXPOSE 80
COPY --from=builder /app/build ./

