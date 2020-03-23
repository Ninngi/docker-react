FROM node:alpine as builder
WORKDIR /app
COPY package.json ./
RUN npm i
RUN npm run build
# /app/build

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html

