FROM node:12-alpine as builder

WORKDIR /usr/local/app

COPY package.*json package-lock.json ./

RUN npm i --production

COPY . ./

EXPOSE 80

RUN npm run build

FROM nginx:latest 

COPY --from=builder /usr/local/app/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]